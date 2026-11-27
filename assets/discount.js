/**
 * DiscountComponent handles manual discount code application and rendering in the cart drawer section.
 *
 * @class DiscountComponent
 * @extends HTMLElement
 */
class DiscountComponent extends HTMLElement {
    /**
     * Initializes the DiscountComponent by setting up form references and event listeners.
     */
    constructor() {
        super();
        this.sectionId = this.dataset.sectionId;
        this.discountForm = this.querySelector(`#discount-${this.sectionId}`);
        this.sectionToQuery = ['cart-drawer'];
        document.addEventListener(
            _EVENT_HELPER.updateDiscountLayout,
            this.renderDiscountCodeLayout.bind(this)
        );
        this.addEventListener(
            _EVENT_HELPER.removeDiscountCode,
            this.removeDiscountCode.bind(this)
        );
        this.discountCodeInput = this.querySelector('[name="discount-code"]');
        if (this.discountForm) {
            this.init();
        } else {
            console.warn(
                'Discount form not found. Ensure the form exists in your HTML'
            );
        }
    }

    /**
     * Attaches the submit event listener to the discount form element.
     * @private
     */
    init() {
        this.discountForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.submitDiscountForm(e);
        });
    }

    /**
     * Retrieves all currently applied discount codes from the DOM.
     *
     * @return {string[]} Array of applied discount code strings.
     * @private
     */
    _getExisitingDiscountsCode() {
        return [
            ...this.querySelectorAll('[manual-discount-code] [data-code]'),
        ].map((code) => code.dataset.code);
    }

    /**
     * Extracts discount codes (pills) from section HTML.
     * @param {string} html
     * @returns {string[]}
     * @private
     */
    _extractDiscountPillsFromHtml(html) {
        try {
            if (!html) return [];
            const doc = new DOMParser().parseFromString(html, 'text/html');
            const pills = Array.from(
                doc.querySelectorAll('[manual-discount-code] [data-code]')
            );
            return pills
                .map((li) =>
                    li instanceof HTMLLIElement &&
                    typeof li.dataset.code === 'string'
                        ? li.dataset.code
                        : null
                )
                .filter(Boolean);
        } catch {
            return [];
        }
    }

    /**
     * Clears the discount code input field.
     * @private
     */
    emptyDiscountInput() {
        this.discountCodeInput.value = '';
    }

    /**
     * Renders discount badge layout based on updated sections HTML.
     *
     * @param {Object} sections - The HTML sections payload containing manual-discount-codes.
     * @throws {Error} When manual-discount-codes section is missing.
     */
    renderDiscountCodeLayout(sections) {
        if (!sections.hasOwnProperty('manual-discount-codes'))
            throw new Error(
                'Missing "manual-discount-codes.liquid" file or manual-discount-codes section was not requested during section rendering'
            );
        const getDiscountBadgeCode = HELPER_UTIL.getHTMLFromString(
            sections['manual-discount-codes'],
            '[manual-discount-code]'
        );
        this.querySelector('[manual-discount-code]').innerHTML =
            getDiscountBadgeCode.innerHTML;
    }

    /**
     * Hides all discount message elements (error and success) after an optional delay.
     *
     * @param {number} [hideTimer=0] - Delay in milliseconds before hiding messages.
     * @private
     */
    hideAllDiscountMessages(hideTimer = 0) {
        this.hideMessageTimmer && clearTimeout(this.hideMessageTimmer);

        this.hideMessageTimmer = setTimeout(() => {
            [
                ...this.querySelectorAll(
                    '[discount-error], [discount-empty-error], [discount-duplicate-error], [discount-success], [discount-shipping-error]'
                ),
            ]?.forEach((message) => {
                message.setAttribute('hidden', 'true');
            });
        }, hideTimer);
    }

    /**
     * Shows the discount message element corresponding to the given type.
     *
     * @param {'error'|'success'} messageType - The type of message to display.
     * @private
     */
    showDiscountMessages(messageType) {
        // Hide all message
        this.hideAllDiscountMessages();
        // Show message based on "Message type"
        switch (messageType) {
            case 'empty-error':
            case 'error':
            case 'duplicate-error':
            case 'success':
            case 'shipping-error':
                this.querySelector(
                    `[discount-${messageType}]`
                )?.removeAttribute('hidden');
                break;
        }
    }

    /**
     * Handles removal of a discount code when remove event is dispatched.
     *
     * @param {CustomEvent} e - Event containing discount code details.
     * @private
     */
    removeDiscountCode(e) {
        if (e.detail.preventBubble) {
            e.preventDefault();
            e.stopPropagation();
        }
        const discountCode = e.detail.code;
        const existingCodes = this._getExisitingDiscountsCode();

        // remove discount code from existing codes
        const newCodes = existingCodes.filter((code) => code !== discountCode);
        if (newCodes.length) {
            this.applyDiscount(newCodes.join(','));
        } else {
            this.applyDiscount('');
        }
    }

    /**
     * Processes the discount form submission, prepares codes, and applies them.
     *
     * @param {SubmitEvent} e - The form submission event.
     * @private
     */
    submitDiscountForm(e) {
        this.discountFormData = new FormData(this.discountForm);
        const enteredCode = this.discountFormData.get('discount-code').trim();

        // Validate empty input
        if (enteredCode.length === 0) {
            this.showDiscountMessages('empty-error');
            this.hideAllDiscountMessages(2000);
            return;
        }

        const existingCodes = this._getExisitingDiscountsCode();
        const modifyToUpperCase = existingCodes.map(el => el.toUpperCase());

        // If user is adding same code again, show duplicate error message
        if (modifyToUpperCase.includes(enteredCode.toUpperCase())) {
            this.emptyDiscountInput();
            this.showDiscountMessages('duplicate-error');
            this.hideAllDiscountMessages(2000);
            return;
        }

        const discountCode = existingCodes.length
            ? `${enteredCode},${existingCodes.join(',')}`
            : enteredCode;
        // Apply discount code by making ajax call
        this.applyDiscount(discountCode, 'add');
    }

    /**
     * Sends AJAX request to apply or remove discount codes on the cart.
     *
     * @param {string} discountCode - Comma-separated discount codes to apply.
     * @param {string} [discountAction] - Action type ('add') to trigger success messaging.
     * @private
     */
    applyDiscount(discountCode, discountAction) {
        const payload = {
            discount: discountCode || '',
            sections: 'manual-discount-codes',
        };
        this.querySelector('button[type="submit"').classList.add('disable');

        // Make Ajax call to cart update url Api
        HELPER_UTIL.fetchData({
            method: 'POST',
            url: window.routes.cart_update_url,
            data: JSON.stringify(payload),
            config: {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: `application/json`,
                },
            },
            onsuccess: (response) => {
                this.checkDiscountCodeValidationResponse(
                    response,
                    discountAction
                );
            },
            onerror: (error) => {
                console.error('Error applying discount:', error);
            },
            defaultCb: () => {
                this.querySelector('button[type="submit"').classList.remove(
                    'disable'
                );
            },
        });
    }

    /**
     * Checks response for any invalid newly added discount codes.
     *
     * @param {Array<Object>} discount_codes - List of discount code validation objects.
     * @param {string[]} existingDiscountCodes - Currently applied discount codes.
     * @return {boolean} True if there is an invalid new code.
     * @private
     */
    _hasInvalidDiscount(discount_codes, existingDiscountCodes) {
        return discount_codes.some((discount) => {
            // Check for any key that is false
            const hasFalseKey = Object.values(discount).includes(false);
            // Check if code is not in the existingDiscountCodes
            const isNewCode = !existingDiscountCodes.includes(discount.code);
            return hasFalseKey && isNewCode;
        });
    }

    /**
     * Validates AJAX response, updates layout, and displays appropriate messages.
     *
     * @param {Object} response - AJAX response containing discount codes and sections.
     * @param {string} [discountAction] - Action type ('add') to trigger success messaging.
     * @private
     */
    checkDiscountCodeValidationResponse(response, discountAction) {
        const { discount_codes } = response;
        const hideMessageTimeout = 2000;
        // Empty Discount input on validation
        this.emptyDiscountInput();
        // Invalid discount code and do not execute success methods
        if (
            this._hasInvalidDiscount(
                discount_codes,
                this._getExisitingDiscountsCode()
            )
        ) {
            // 1) If we find invalid discount code then show error
            this.showDiscountMessages('error');
            this.hideAllDiscountMessages(hideMessageTimeout);
            return;
        }

        // If Discount code is applicable run functionalities as follows:
        // 1) Re-render discount code layout
        const { sections } = response;
        // Check if the code is free shipping message code

        if (discountAction && discountAction === 'add') {
            const newDiscountsFromReponse = this._extractDiscountPillsFromHtml(
                sections['manual-discount-codes']
            );
            const exisitingDiscounts = this._getExisitingDiscountsCode();
            const noNewDiscount =
                Array.isArray(newDiscountsFromReponse) &&
                newDiscountsFromReponse.length === exisitingDiscounts.length &&
                newDiscountsFromReponse.every((code) =>
                    exisitingDiscounts.includes(code)
                );

            if (noNewDiscount) {
                this.showDiscountMessages('shipping-error');
                this.hideAllDiscountMessages(hideMessageTimeout);
                return;
            }
        }
        this.renderDiscountCodeLayout(sections);
        HELPER_UTIL.dispatchCustomEvent(_EVENT_HELPER.updateAndShowCart);

        // 2) Show success message if discountAction type 'add'
        if (discountAction && discountAction === 'add') {
            this.showDiscountMessages('success');
        }
        this.hideAllDiscountMessages(hideMessageTimeout);
    }
}

customElements.get('discount-component') ||
    customElements.define('discount-component', DiscountComponent);

/**
 * RemoveDiscountPill represents a clickable element to remove a specific discount code badge.
 *
 * @class RemoveDiscountPill
 * @extends HTMLElement
 */
class RemoveDiscountPill extends HTMLElement {
    /**
     * Initializes the RemoveDiscountPill by setting up click listener.
     */
    constructor() {
        super();
        this.sectionId = this.dataset.sectionId;
        this.discountForm = this.querySelector(`#discount-${this.sectionId}`);
        this.addEventListener('click', this.removeDiscount.bind(this));
    }

    /**
     * Dispatches removeDiscountCode event and removes the badge element from the DOM.
     * @private
     */
    removeDiscount() {
        HELPER_UTIL.dispatchCustomEvent(
            _EVENT_HELPER.removeDiscountCode,
            this,
            {
                preventBubble: true,
                code: this.closest('[data-code]').dataset.code,
            }
        );
        this.closest('[data-code]').remove();
    }

    /**
     * Cleans up event listeners when element is removed from the DOM.
     * @private
     */
    disconnectedCallback() {
        this.removeEventListener('click', this.removeDiscount.bind(this));
    }
}

customElements.get('remove-discount-pill') ||
    customElements.define('remove-discount-pill', RemoveDiscountPill);

