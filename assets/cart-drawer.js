const drawerEvents = {
    OnLineItemUpdate: 'action:cart:updateLineItem',
    onQuantityChange: 'on:QuantityChange',
    triggerCartChange: 'action:cart:updateCart',
};

class DrawerCart extends HTMLElement {
    constructor() {
        super();
        this.currentLineItem;
        this.lineItemError = null;
        this.cartIdentifier = this.getAttribute('render-section');
        this.checkoutContainer = document.querySelector(
            '[cart-checkout-container]'
        );

        this.sectionId =
            this.getAttribute('data-sectionId') || this.cartIdentifier;

        this.addEventListener(
            _EVENT_HELPER.OnLineItemUpdate,
            this.handleLineItem.bind(this)
        );

        /* Listening for this event to update cart items and show cart drawer base on products Added to cart via product-form,product-card component 
            Usage: document.dispatchEvent(new CustomEvent(_EVENT_HELPER.triggerCartChange, { detail: {}}));
            Note: Make sure to pass the `detail` @object with the data consisting of sections that can fetched via section rendering Api functionality of Shopify
        */

        document.addEventListener(
            _EVENT_HELPER.triggerCartChange,
            this.renderCart.bind(this)
        );

        /* Listening for this event to update cart items and show cart drawer based on custom functionality of the theme 
            Scenarios: When user adds a product to cart, the cart drawer should be updated and shown
            Usage: document.dispatchEvent(new CustomEvent(_EVENT_HELPER.updateAndShowCart, { detail: {}}));
        */
        document.addEventListener(
            _EVENT_HELPER.updateAndShowCart,
            this.fetchAndRenderCartItems.bind(this)
        );

        document.addEventListener(_EVENT_HELPER.showCartPopup, (e) => {
            this.renderCartContents(e.detail);
            this._updateCartItemCount(e.detail);
        });

    }

    _getCartItemCount(data) {
        if (!data.sections || !data.sections[this.cartIdentifier]) return this.cartItemCount;
        const cartSection = data.sections[this.cartIdentifier];
        const parseCartSectionHTML = new DOMParser().parseFromString(
            cartSection,
            'text/html'
        );

        return parseCartSectionHTML.querySelector(this.tagName)?.dataset
            .cartitemcount;
    }

    renderCart(e) {
        this.renderCartContents(e.detail);
        // Update dependent Elements to be render
        this.renderElementsBasedOnCartItems(e.detail);
        if (
            this.cartIdentifier == 'cart-drawer' &&
            !this.closest('cart-drawer-component').isDrawerOpen
        ) {
            HELPER_UTIL.dispatchCustomEvent(_EVENT_HELPER.showDrawer, this, {
                drawerType: 'cart-drawer',
            });
        }
    }

    // Orphan gift wrap cleanup is no longer needed — Shopify's nested cart lines
    // automatically remove child items when the parent is removed from the cart.

    _get(property) {
        return this[property];
    }

    _set(property, value) {
        this[property] = value;
    }

    _updateCartItemCount(data) {
        this.cartItemCount = this._getCartItemCount(data);
        this.dataset.cartitemcount = this.cartItemCount;
    }

    showDrawerToastMessage({ responseObj, messageType }) {
        HELPER_UTIL.dispatchCustomEvent(
            _EVENT_HELPER.triggerToastMessage,
            document,
            {
                toastType: 'common-errors',
                messageType: messageType,
                message: responseObj.message,
            }
        );
    }

    quantityElementAction({ line, quantity }) {
        const enable = () => {
            this.querySelectorAll('quantity-selector').forEach((el) =>
                el.setAttribute('is-disabled', 'false')
            );
            this.querySelectorAll('[remove-lineItem]').forEach((el) =>
                el.classList.remove('is-disabled')
            );
            this.querySelectorAll('[gift-wrap-toggle-cart]').forEach((el) => {
                el.disabled = false;
            });
        };

        const disable = () => {
            this.querySelectorAll('quantity-selector').forEach((el) =>
                el.setAttribute('is-disabled', 'true')
            );
            this.querySelectorAll('[remove-lineItem]').forEach((el) =>
                el.classList.add('is-disabled')
            );
            this.querySelectorAll('[gift-wrap-toggle-cart]').forEach((el) => {
                el.disabled = true;
            });
        };

        const resetToPreviousValue = () => {
            this.querySelector(`[item-index="${line}"]`)
                .querySelectorAll('quantity-selector input')
                .forEach((el) => {
                    el.value = (Number(quantity) - 1).toString();
                });
        };

        return {
            enable,
            disable,
            resetToPreviousValue,
        };
    }

    updateCartTotal(data) {
        const cartTotal = data.total_price;
        const cartTotalEl = document.querySelectorAll('[cart-total]');
        [...cartTotalEl].forEach((el) => {
            el.textContent = Shopify.formatMoney(
                cartTotal,
                Shopify.money_format
            );
        });
    }

    cartCheckoutEl() {
        // const checkoutContainer = document.querySelector(
        //     '[cart-checkout-container]'
        // );
        const hideContainerClass = 'hide';
        const show = () => {
            if (this.checkoutContainer.classList.contains(hideContainerClass)) {
                this.checkoutContainer.classList.remove(hideContainerClass);
            }
        };
        const hide = () => {
            this.checkoutContainer.classList.add(hideContainerClass);
        };

        return {
            show,
            hide,
        };
    }

    renderElementsBasedOnCartItems(data) {
        this._updateCartItemCount(data);
        if (this.cartItemCount > 0) {
            HELPER_UTIL.dispatchCustomEvent(
                _EVENT_HELPER.showCartRecommendations,
                this
            );
        } else {
            HELPER_UTIL.dispatchCustomEvent(
                _EVENT_HELPER.hideCartRecommendations,
                this
            );
        }
    }

    handleLineItem({ detail }) {
        // Make Api request to update cart drawer based on line item index
        /* Detail Object return data inform of @object as follows:
            {
            line: line Item index,
            quantity: Line item quantity
         } */
        const { e } = detail;

        const sectionsToRender = HELPER_UTIL.sectionRenderUtil(
            this.cartIdentifier
        ).getSectionsString();

        // If this line item has a linked gift wrap, update its quantity in sync
        const gwCheckbox = this.querySelector(`[gift-wrap-parent-id="${detail.key}"]`);
        const gwKey = gwCheckbox && gwCheckbox.getAttribute('gift-wrap-item-key');
        const updates = { [detail.key]: detail.quantity };
        if (gwKey && detail.quantity !== '0') {
            updates[gwKey] = Number(detail.quantity);
        }

        // Disable quantity selector of which quantity was increased
        this.quantityElementAction(detail).disable();

        HELPER_UTIL.fetchData({
            method: 'POST',
            url: `${window.Shopify.routes.root}cart/update.js?sections=${sectionsToRender}`,
            data: JSON.stringify({ updates }),
            config: {
                headers: {
                    'Content-Type': 'application/json',
                },
            },
            onsuccess: (data) => {
                const animateElement = e?.target?.closest("[animation-slide-left]");
                if (detail.quantity === '0' && animateElement) {
                    Motion.animate(animateElement,
                        {
                            x: 40,
                            opacity: 0,
                        },
                        {
                            duration: parseFloat(0.4),
                            ease: "cubic-bezier(.75,0,.175,1)",
                        }).finished.then(() => {
                            Motion.animate(animateElement,
                                {
                                    height: 0,
                                    marginBottom: 0,
                                },
                                {
                                    duration: parseFloat(0.3),
                                    ease: "cubic-bezier(.75,0,.175,1)",
                                }).finished.then(() => {
                                    // Nested cart lines: Shopify auto-removes gift wrap children
                                    // when parent is removed, so no orphan cleanup needed.
                                    HELPER_UTIL.dispatchCustomEvent(
                                        _EVENT_HELPER.triggerCartChange,
                                        this,
                                        { sections: data.sections, cart: data }
                                    );
                                })
                        }
                        );
                }
                else {
                    HELPER_UTIL.dispatchCustomEvent(
                        _EVENT_HELPER.triggerCartChange,
                        this,
                        { sections: data.sections, cart: data }
                    );
                }
            },
            onerror: (error) => {
                if (error.json) {
                    error.json().then((errorObj) => {
                        if (errorObj.status === 422) {
                            HELPER_UTIL.dispatchCustomEvent(
                                _EVENT_HELPER.triggerlineItemError,
                                this,
                                {
                                    errorObj: {
                                        lineItem: detail.key,
                                        responseObj: errorObj,
                                        messageType: 'error',
                                    },
                                }
                            );
                        }
                    });
                } else {
                    this.showDrawerToastMessage({
                        responseObj: {
                            message: 'Something went wrong.Please try again',
                        },
                        messageType: 'error',
                    });
                }
            },
            defaultCb: () => {
                this.quantityElementAction(detail).enable();
            },
        });
    }


    renderCartContents({ sections }) {
        try {
            const getSectionsToLoop = HELPER_UTIL.sectionRenderUtil(
                this.cartIdentifier
            ).getSectionsObject();
            getSectionsToLoop.forEach((sectionsObjItem) => {
                // Here sections{@object} is the data from the AJax ca;l we made to cart
                // sectionsObjItem @{object} is the class property consisting list of sections and there ids

                if (!!sections[sectionsObjItem.sectionId]) {
                    [
                        ...document.querySelectorAll(
                            sectionsObjItem.queryElement
                        ),
                    ].forEach((section) => {
                        section.innerHTML = HELPER_UTIL.getHTMLFromString(
                            sections[sectionsObjItem.sectionId],
                            sectionsObjItem.queryElement
                        ).innerHTML;
                    });
                }
            });

            // Update free-shipping bars outside the re-rendered component.
            const sectionItem = getSectionsToLoop[0];
            if (sectionItem && sections[sectionItem.sectionId]) {
                const newCartRoot = HELPER_UTIL.getHTMLFromString(
                    sections[sectionItem.sectionId],
                    sectionItem.queryElement
                );
                const newItemCount = newCartRoot
                    ? Number(newCartRoot.getAttribute('data-cartItemCount'))
                    : 0;
                document.querySelectorAll('[cart-free-shipping-bar]').forEach(wrapper => {
                    if (newItemCount > 0) {
                        wrapper.removeAttribute('hidden');
                    } else {
                        wrapper.setAttribute('hidden', '');
                    }
                });

                const newEl = HELPER_UTIL.getHTMLFromString(
                    sections[sectionItem.sectionId],
                    'free-shipping'
                );
                if (newEl) {
                    const newTotal = Number(newEl.getAttribute('total-price'));
                    document.querySelectorAll(
                        '[cart-free-shipping-bar] free-shipping, [free-shipping-bar] free-shipping'
                    ).forEach(el => {
                        el.cartTotal = newTotal;
                        el.renderShippingMessageWithBar();
                    });
                }
                // Hide cart offer based on the condition
                document.querySelectorAll('[hide-cart-offer]').forEach((el) => {
                    if (newItemCount > 0) {
                        el.removeAttribute('hidden');
                    } else {
                        el.setAttribute('hidden', '');
                    }
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    fetchAndRenderCartItems() {
        // Get liquid section  to render
        const sectionsToRender = HELPER_UTIL.sectionRenderUtil(
            this.cartIdentifier
        ).getSectionsString();
        // Make Ajax call to update.js and render cart
        HELPER_UTIL.fetchData({
            method: 'GET',
            url: `${window.Shopify.routes.root}cart/update.js?sections=${sectionsToRender}`,
            onsuccess: (data) => {
                HELPER_UTIL.dispatchCustomEvent(
                    _EVENT_HELPER.triggerCartChange,
                    this,
                    { sections: data.sections }
                );
            },
            onerror: (error) => {
                console.log(error);
            },
        });
    }

    disconnectedCallback() {
        // Remove all the event listeners added inside constructor to prevent memory leaks
        this.removeEventListener(
            drawerEvents.OnLineItemUpdate,
            this.handleLineItem.bind(this)
        );
        this.removeEventListener(
            drawerEvents.onQuantityChange,
            this.handleLineItem.bind(this)
        );
        this.removeEventListener(
            drawerEvents.triggerCartChange,
            this.renderCart.bind(this)
        );
        this.removeEventListener(
            drawerEvents.updateAndShowCart,
            this.fetchAndRenderCartItems.bind(this)
        );
    }
}

customElements.get('drawer-cart') ||
    customElements.define('drawer-cart', DrawerCart);

class CartPage extends DrawerCart {
    constructor() {
        super();
    }

    renderElementsBasedOnCartItems(data) {
        const cartItemCount = this._getCartItemCount(data);
        if (cartItemCount > 0) {
            // this.updateCartTotal(data);
            if (this.checkoutContainer) {
                this.cartCheckoutEl().show();
            }
        } else {
            if (this.checkoutContainer) {
                this.cartCheckoutEl().hide();
            }
        }
    }

    showDrawerToastMessage({ responseObj, messageType }) {
        const toastEl = this.querySelector('toast-message');
        toastEl.toast({
            message: responseObj.message,
            messageType: messageType,
        });
    }
}

customElements.get('cart-page') || customElements.define('cart-page', CartPage);

class DrawerItem extends HTMLElement {
    constructor() {
        super();
        this.itemKey = this.getAttribute('item-key'); // Unique line item key of the product in cart
        this.removeItemElement = this.querySelectorAll('[remove-lineItem]');
        [...this.removeItemElement].forEach((el) => {
            el.addEventListener(
                'click',
                this.dispatchLineItemUpdate.bind(this)
            );

            el.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                    this.dispatchLineItemUpdate(e);
                }
            });
        });
        this.addEventListener(
            _EVENT_HELPER.onQuantityChange,
            this.dispatchLineItemUpdate.bind(this)
        );

        document.addEventListener(
            _EVENT_HELPER.triggerlineItemError,
            this.showLineItemError.bind(this)
        );
    }

    connectedCallback() {
        // Must run in connectedCallback (not constructor) because nextElementSibling requires
        // the element to be inserted into the DOM first.
        this._giftWrapToggle = this._findGiftWrapEl('[gift-wrap-toggle]');
        if (this._giftWrapToggle) {
            this._giftWrapToggleHandler = this._handleGiftWrapToggle.bind(this);
            this._giftWrapToggle.addEventListener('click', this._giftWrapToggleHandler);
        }

        this._giftWrapCheckbox = this._findGiftWrapEl('[gift-wrap-toggle-cart]');
        if (this._giftWrapCheckbox) {
            this._giftWrapCheckboxHandler = this._handleGiftWrapCheckbox.bind(this);
            this._giftWrapCheckbox.addEventListener('change', this._giftWrapCheckboxHandler);
        }
    }

    // Find gift wrap elements inside this drawer item or in next siblings (cart page table layout)
    _findGiftWrapEl(selector) {
        const inner = this.querySelector(selector);
        if (inner) return inner;
        let sibling = this.nextElementSibling;
        while (sibling && sibling.tagName !== 'DRAWER-ITEM') {
            const el = sibling.querySelector(selector);
            if (el) return el;
            sibling = sibling.nextElementSibling;
        }
        return null;
    }

    // Toggle the gift wrap accordion open/closed
    _handleGiftWrapToggle() {
        const expanded = this._giftWrapToggle.getAttribute('aria-expanded') === 'true';
        this._giftWrapToggle.setAttribute('aria-expanded', String(!expanded));
        const details = document.getElementById(this._giftWrapToggle.getAttribute('aria-controls'));
        if (details) details.setAttribute('aria-hidden', String(expanded));
    }

    // Add or remove the gift wrap line item when the checkbox is toggled
    _handleGiftWrapCheckbox() {
        const giftWrapCheckbox = this._giftWrapCheckbox;
        const variantId = Number(giftWrapCheckbox.getAttribute('gift-wrap-variant-id'));
        const parentItemKey = giftWrapCheckbox.getAttribute('gift-wrap-parent-id');
        const forLabel = giftWrapCheckbox.getAttribute('gift-wrap-for-label') || 'For';
        const existingKey = giftWrapCheckbox.getAttribute('gift-wrap-item-key');

        const cartEl = this.closest('drawer-cart') || this.closest('cart-page');
        const cartIdentifier = cartEl?.getAttribute('render-section') || 'cart-drawer';
        const sectionsToRender = HELPER_UTIL.sectionRenderUtil(cartIdentifier).getSectionsString();

        // Lock the cart: disable all quantity selectors and remove buttons during the AJAX request
        if (cartEl) {
            cartEl.querySelectorAll('quantity-selector').forEach((el) =>
                el.setAttribute('is-disabled', 'true')
            );
            cartEl.querySelectorAll('[remove-lineItem]').forEach((el) =>
                el.classList.add('is-disabled')
            );
        }
        // Disable the checkbox itself to prevent multiple toggles
        giftWrapCheckbox.disabled = true;

        const unlockCart = () => {
            if (cartEl) {
                cartEl.querySelectorAll('quantity-selector').forEach((el) =>
                    el.setAttribute('is-disabled', 'false')
                );
                cartEl.querySelectorAll('[remove-lineItem]').forEach((el) =>
                    el.classList.remove('is-disabled')
                );
            }
            giftWrapCheckbox.disabled = false;
        };

        if (giftWrapCheckbox.checked) {
            if (!variantId) { unlockCart(); return; }
            const parentTitle = giftWrapCheckbox.getAttribute('gift-wrap-parent-title') || '';
            const quantity = Number(giftWrapCheckbox.closest('[item-quantity]')?.getAttribute('item-quantity')) || 1;
            // Use parent_line_key to create a Shopify nested cart line relationship.
            // Shopify automatically manages the parent-child bond (auto-removal, ordering).
            const props = {};
            props[forLabel] = parentTitle;
            HELPER_UTIL.fetchData({
                method: 'POST',
                url: `${window.Shopify.routes.root}cart/add.js?sections=${sectionsToRender}`,
                data: JSON.stringify({ items: [{ id: variantId, quantity: quantity, parent_line_key: parentItemKey, properties: props }] }),
                config: { headers: { 'Content-Type': 'application/json' } },
                onsuccess: (data) => {
                    HELPER_UTIL.dispatchCustomEvent(_EVENT_HELPER.triggerCartChange, document, { sections: data.sections });
                },
                onerror: () => { giftWrapCheckbox.checked = false; },
                defaultCb: unlockCart,
            });
        } else {
            if (!existingKey) { unlockCart(); return; }
            HELPER_UTIL.fetchData({
                method: 'POST',
                url: `${window.Shopify.routes.root}cart/change.js?sections=${sectionsToRender}`,
                data: JSON.stringify({ id: existingKey, quantity: 0 }),
                config: { headers: { 'Content-Type': 'application/json' } },
                onsuccess: (data) => {
                    HELPER_UTIL.dispatchCustomEvent(_EVENT_HELPER.triggerCartChange, document, { sections: data.sections, cart: data });
                },
                onerror: () => { giftWrapCheckbox.checked = true; },
                defaultCb: unlockCart,
            });
        }
    }

    dispatchLineItemUpdate(e) {
        const productQuantity = e?.detail.quantity;
        let detail = {
            key: this.itemKey,
            quantity: productQuantity ? productQuantity : '0',
            e: e
        };
        const removeEle = e?.target?.closest('[remove-lineitem]');
        if (detail.quantity === '0' && removeEle) {
            removeEle.classList.add("active-preloader");
        }
        HELPER_UTIL.dispatchCustomEvent(
            _EVENT_HELPER.OnLineItemUpdate,
            this,
            detail
        );
    }

    handleLineItemErrorUpdate(errorObj) {
        let customMessageComponent =
            this.querySelector('custom-message') ||
            this.nextElementSibling.querySelector('custom-message');
        // Adding  a
        // setTimeout(() => {
        customMessageComponent.showCustomMessage({
            errorMessage: errorObj.responseObj.message,
            messageType: errorObj.messageType,
        });
        // }, 0);
    }

    resetQuantitySelector() {
        this.querySelector('quantity-selector input').value =
            this.getAttribute('item-quantity');
    }

    showLineItemError(event) {
        const { errorObj } = event.detail;
        if (errorObj && errorObj.lineItem === this.itemKey) {
            this.handleLineItemErrorUpdate(errorObj);
            this.resetQuantitySelector();
        }
    }

    disconnectedCallback() {
        // Remove all the event listeners added inside constructor to prevent memory leaks
        this.removeEventListener(
            _EVENT_HELPER.onQuantityChange,
            this.dispatchLineItemUpdate.bind(this)
        );

        [...this.removeItemElement].forEach((el) => {
            el.removeEventListener(
                'click',
                this.dispatchLineItemUpdate.bind(this)
            );
            el.removeEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                    this.dispatchLineItemUpdate();
                }
            });
        });

        if (this._giftWrapToggle && this._giftWrapToggleHandler) {
            this._giftWrapToggle.removeEventListener('click', this._giftWrapToggleHandler);
        }
        if (this._giftWrapCheckbox && this._giftWrapCheckboxHandler) {
            this._giftWrapCheckbox.removeEventListener('change', this._giftWrapCheckboxHandler);
        }
    }
}

customElements.get('drawer-item') ||
    customElements.define('drawer-item', DrawerItem);



//More checkout button animation 

class AdditionalCheckoutButtonsAnimation extends HTMLElement {
    constructor() {
        super();
        this.toggleButton = this.querySelector("[toggle-payment-buttons]")
        this.toggleButton?.addEventListener("click", this.togglePaymentButtons.bind(this))
        this.buttonsWrapper = this.querySelector("[checkout-buttons-wrapper]")

    }

    togglePaymentButtons(e) {
        e.preventDefault()
        this.toggleButton.classList.toggle("show-payment-options")
        this.setAttribute("style", `--button-wrapper-height:${this.buttonsWrapper?.firstElementChild.offsetHeight}px`)
        this.buttonsWrapper?.classList.toggle("active")
    }

}

customElements.get('additional-checkout-buttons-animation') ||
    customElements.define("additional-checkout-buttons-animation", AdditionalCheckoutButtonsAnimation)



// Shipping Rates Component
class ShippingRatesComponent extends HTMLElement {
    constructor() {
        super();
        this.countrySelect = this.querySelector('[data-shipping-country]');
        this.provinceSelect = this.querySelector('[data-shipping-province]');
        this.provinceWrapper = this.querySelector('[data-province-wrapper]');
        this.zipInput = this.querySelector('[data-shipping-zip]');
        this.shippingRatesButton = this.querySelector('[data-shipping-rates-button]');
        this.shippingRatesContainer = this.querySelector('[data-shipping-rates-container]');
        this.shippingRatesList = this.querySelector('[data-shipping-rates-list]');
        this.shippingRatesError = this.querySelector('[data-shipping-rates-error]');

        if (this.countrySelect) {
            var defaultCountry = this.countrySelect.dataset.defaultCountry;
            if (defaultCountry) {
                for (var i = 0; i < this.countrySelect.options.length; i++) {
                    if (this.countrySelect.options[i].text.trim() === defaultCountry) {
                        this.countrySelect.selectedIndex = i;
                        break;
                    }
                }
            }
            this.countrySelect.addEventListener('change', this.handleCountryChange.bind(this));
        }

        if (this.shippingRatesButton) {
            this.shippingRatesButton.addEventListener('click', this.fetchShippingRates.bind(this));
        }

        // Initialize province selector on load
        this.handleCountryChange();
    }

    handleCountryChange() {
        const selectedOption = this.countrySelect.options[this.countrySelect.selectedIndex];
        // Update province label to 'State' if country is India, otherwise keep it as 'Province/State'
        const provinceLabel = this.querySelector("label[for='province']");
        if (provinceLabel) {
            if (this.countrySelect.value.toLowerCase() === 'india') {
                provinceLabel.textContent = 'State';
            } else {
                provinceLabel.textContent = 'Province';
            }
        }
        const provincesData = selectedOption.getAttribute('data-provinces');
        // Clear existing province options
        this.provinceSelect.innerHTML = '';

        if (!provincesData || provincesData === 'null' || provincesData === '[]') {
            this.provinceWrapper.style.display = 'none';
            this.resetShippingRatesDisplay();
            return;
        }

        try {
            const provinces = JSON.parse(provincesData);
            if (Array.isArray(provinces) && provinces.length > 0) {
                // country_option_tags format: [[name, name], [name, name], ...]
                provinces.forEach((province) => {
                    const option = document.createElement('option');
                    option.value = province[0];
                    option.textContent = province[1];
                    this.provinceSelect.appendChild(option);
                });
                this.provinceWrapper.style.display = 'block';
            } else {
                this.provinceWrapper.style.display = 'none';
            }
        } catch (e) {
            this.provinceWrapper.style.display = 'none';
        }

        // Reset shipping rates display
        this.resetShippingRatesDisplay();
    }

    resetShippingRatesDisplay() {
        this.shippingRatesContainer.style.display = 'none';
        this.shippingRatesList.innerHTML = '';
        this.shippingRatesError.style.display = 'none';
        this.shippingRatesError.textContent = '';
    }

    fetchShippingRates() {
        const country = this.countrySelect.value;
        const province = this.provinceSelect.value || '';
        const zip = this.zipInput.value.trim();

        if (!country) {
            this.showError('Please select a country');
            return;
        }


        // Show loading state
        this.shippingRatesContainer.style.display = 'block';
        this.shippingRatesList.innerHTML = '';
        this.shippingRatesError.style.display = 'none';
        HELPER_UTIL.submitButtonState(this.shippingRatesButton).loadingState();

        // Build query parameters
        const params = new URLSearchParams({
            'shipping_address[zip]': zip,
            'shipping_address[country]': country
        });

        if (province) {
            params.append('shipping_address[province]', province);
        }

        HELPER_UTIL.fetchData({
            method: 'GET',
            url: `${window.Shopify.routes.root}cart/shipping_rates.json?${params.toString()}`,
            onsuccess: (data) => {
                this.displayShippingRates(data.shipping_rates || []);
            },
            onerror: (error) => {
                // Try to extract a useful validation message, e.g. {"zip":["Enter a valid postcode for Australia"]}
                let message = this.dataset.unableToFetchShippingRatesText;
                if (error.json) {
                    error.json().then((errorJson) => {
                        if (errorJson.zip && Array.isArray(errorJson.zip) && errorJson.zip[0]) {
                            message = errorJson.zip[0];
                        }
                        this.showError(message);
                    }).catch(() => {
                        this.showError(message);
                    });
                } else {
                    this.showError(message);
                }
            },
            defaultCb: () => {
                HELPER_UTIL.submitButtonState(this.shippingRatesButton).resetState();
                HELPER_UTIL.submitButtonState(this.shippingRatesButton).disableState(false);
            },
        });
    }

    displayShippingRates(rates) {
        this.shippingRatesList.innerHTML = '';

        if (!rates || rates.length === 0) {
            this.showError(this.dataset.noShippingRatesText);
            return;
        }

        const ratesListContainer = document.createElement('div');
        ratesListContainer.className = 'shipping-rates__list-container';
        this.shippingRatesList.appendChild(ratesListContainer);


        let listHeader = '';
        if (rates.length > 1) {
            listHeader = this.dataset.multipleShippingRatesText;
        }
        else {
            listHeader = this.dataset.oneShippingRateText;
        }
        const listHeaderElement = document.createElement('div');
        listHeaderElement.className = 'shipping-rates__list-header';
        listHeaderElement.textContent = listHeader;



        ratesListContainer.appendChild(listHeaderElement);
        const ratesList = document.createElement('ul');
        ratesList.className = 'shipping-rates__list';

        rates.forEach(rate => {
            const listItem = document.createElement('li');
            listItem.className = 'shipping-rates__item';

            const rateName = document.createElement('div');
            rateName.className = 'shipping-rates__name';
            rateName.textContent = `${rate.name}: `;

            const ratePrice = document.createElement('div');
            ratePrice.className = 'shipping-rates__price';
            ratePrice.textContent = Shopify.formatMoney(
                parseFloat(rate.price) * 100,
                Shopify.money_format
            ) + ' ' + rate.currency;

            if (rate.delivery_date) {
                const deliveryDate = document.createElement('div');
                deliveryDate.className = 'shipping-rates__delivery-date';
                deliveryDate.textContent = `${this.dataset.estimatedDeliveryText}: ${rate.delivery_date}`;
                listItem.appendChild(deliveryDate);
            }

            const itemContainer = document.createElement('div');
            itemContainer.className = 'shipping-rates__item-container';
            itemContainer.appendChild(rateName);
            itemContainer.appendChild(ratePrice);
            listItem.appendChild(itemContainer);
            ratesList.appendChild(listItem);
        });

        ratesListContainer.appendChild(ratesList);
    }

    showError(message) {
        this.shippingRatesError.textContent = message;
        this.shippingRatesError.style.display = 'block';
        this.shippingRatesList.innerHTML = '';
    }
}

customElements.get('shipping-rates-component') ||
    customElements.define('shipping-rates-component', ShippingRatesComponent);

class CartDrawerTabs extends HTMLElement {
    constructor() {
        super();
        this._handleTabClick = this._handleTabClick.bind(this);
        this._handleDrawerClose = this._handleDrawerClose.bind(this);
        this._handleCartChange = this._handleCartChange.bind(this);
    }

    connectedCallback() {
        this.drawer = this.closest('[drawer-type="cart-drawer"]');
        if (!this.drawer) return;
        this.tabs = Array.from(this.drawer.querySelectorAll('[cart-drawer-tab]'));
        this.panels = Array.from(this.querySelectorAll('[cart-drawer-panel]'));
        const hasItems = this._getRecentlyViewedCount() > 0;
        this._toggleTabsUI(hasItems);
        if (hasItems) this._bindEvents();
    }

    _getRecentlyViewedCount() {
        try {
            return new Set(JSON.parse(localStorage.getItem('theme:recently-viewed-products') || '[]')).size;
        } catch {
            return 0;
        }
    }

    _toggleTabsUI(show) {
        const tabsContainer = this.drawer.querySelector('[cart-drawer-tabs]');
        const fallbackTitle = this.drawer.querySelector('[cart-drawer-label]');
        const cartDrawerLink = this.drawer.querySelector('[cart-drawer-link]');
        tabsContainer?.classList.toggle('visually-hidden', !show);
        fallbackTitle?.classList.toggle('visually-hidden', show);
        cartDrawerLink?.classList.toggle('visually-hidden', show);
        if (!show) this._activate('cart');
    }

    _bindEvents() {
        this.tabs.forEach((tab) => {
            tab.addEventListener('click', this._handleTabClick);
        });
        document.addEventListener(_EVENT_HELPER.hideDrawer, this._handleDrawerClose);
        document.addEventListener(_EVENT_HELPER.triggerCartChange, this._handleCartChange);
    }

    disconnectedCallback() {
        if (!this.drawer) return;
        this.tabs.forEach((tab) => {
            tab.removeEventListener('click', this._handleTabClick);
        });
        document.removeEventListener(_EVENT_HELPER.hideDrawer, this._handleDrawerClose);
        document.removeEventListener(_EVENT_HELPER.triggerCartChange, this._handleCartChange);
    }

    _handleCartChange() {
        this._activate('cart');
    }

    _handleDrawerClose(e) {
        if (e.detail?.drawerType === 'cart-drawer') {
            setTimeout(() => {
                this._activate('cart');
            }, 500);
        }
    }

    _handleTabClick(event) {
        this._activate(event.currentTarget.getAttribute('cart-drawer-tab'));
    }

    _activate(name) {
        this.tabs.forEach((tab) => {
            const active = tab.getAttribute('cart-drawer-tab') === name;
            tab.classList.toggle('is-active', active);
        });
        this.panels.forEach((panel) => {
            const active = panel.getAttribute('cart-drawer-panel') === name;
            panel.classList.toggle('is-active', active);
            panel.setAttribute('aria-hidden', active ? 'false' : 'true');
            if (active) {
                panel.removeAttribute('hidden');
            } else {
                panel.setAttribute('hidden', '');
            }
        });
        if (name === 'recently-viewed') {
            this.drawer.style.setProperty('--set-container-height', '0px');
        } else {
            const actionBtn = this.drawer.querySelector('.drawer__action__btn');
            if (actionBtn) {
                this.drawer.style.setProperty('--set-container-height', `${actionBtn.offsetHeight}px`);
            } else {
                this.drawer.style.removeProperty('--set-container-height');
            }
        }
    }
}

customElements.get('cart-drawer-tabs') ||
    customElements.define('cart-drawer-tabs', CartDrawerTabs);

