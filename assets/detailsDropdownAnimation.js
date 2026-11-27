class DetailsDropdown extends HTMLElement {
    constructor() {
        super();
        this._detailsDropdown = this.querySelector('[detailsDropdown]');
        this._detailsSummary = this.querySelector('[detailsDropdown] summary');
        this._detailsBody = this.querySelector('[detailsBody]');
        this._animatinItems = this.querySelector('[animation-item]');
        this._animationType = this.querySelector('[animation-type]').getAttribute('animation-type') || 'fade-down';


        this._debouncedOpenDropdown = HELPER_UTIL.debounce(this.opendDropdown.bind(this), 150);
        this._debouncedCloseDropdown = HELPER_UTIL.debounce(this.closeDropdown.bind(this), 150);

        this._detailsDropdown.addEventListener(
            'mouseenter',
            this._debouncedOpenDropdown
        );
        this._detailsDropdown.addEventListener(
            'mouseleave',
            this._debouncedCloseDropdown
        );

        // If the detailsDropdown element has the 'open' attribute, open it by default
        if (this._detailsDropdown.hasAttribute('open')) {
            this.activeDetailsDropdown();
        }

        // Handle mobile touch: open on touch, close others
        if (window.matchMedia("(max-width: 991px)").matches) {
            // On touchstart, open this dropdown and close others
            this._detailsSummary.addEventListener('touchstart', (e) => {
                // Prevent default to avoid click event
                e.preventDefault();
                e.stopPropagation();

                // Close all other open dropdowns
                document.querySelectorAll('details-dropdown').forEach((el) => {
                    if (el !== this && el._detailsDropdown && el._detailsDropdown.hasAttribute('open')) {
                        el.inActiveDetailsDropdown(el._detailsBody, el._detailsDropdown);
                    }
                });

                // Open this dropdown if not already open
                if (!this._detailsDropdown.hasAttribute('open')) {
                    this.activeDetailsDropdown();
                } else {
                    // If already open, close it
                    this.inActiveDetailsDropdown(this._detailsBody, this._detailsDropdown);
                }
            });

        }
    }

    animateDetailsDropdownOnOpen() {
        if (this._animationType === "fade-up") {
            Motion.animate(this._animatinItems, { opacity: [0, 1], y: [20, 0] }, { duration: 0.3, ease: "cubic-bezier(.75,0,.175,1)" })
        } else {
            Motion.animate(this._animatinItems, { opacity: [0, 1], y: [-20, 0] }, { duration: 0.3, ease: "cubic-bezier(.75,0,.175,1)" })

        }
    }

    animateDetailsDropdownOnClose(dropdownBody, dropdownDetails) {
        const animationItem = dropdownBody.querySelector('[animation-item]')
        const animationType = dropdownDetails.querySelector('[animation-type]').getAttribute('animation-type') || 'fade-down'
        if (animationType === "fade-up") {
            Motion.animate(animationItem, { opacity: [1, 0], y: [0, 20] }, { duration: 0.3, ease: "cubic-bezier(.75,0,.175,1)" }).finished.then(() => {
                dropdownDetails.removeAttribute("open")
            })
        } else {
            Motion.animate(animationItem, { opacity: [1, 0], y: [0, -20] }, { duration: 0.3, ease: "cubic-bezier(.75,0,.175,1)" }).finished.then(() => {
                dropdownDetails.removeAttribute("open")
            })
        }

    }

    inActiveDetailsDropdown(dropdownBody, dropdownDetails) {
        dropdownBody.classList.remove('active');
        dropdownDetails.setAttribute("aria-expanded", "false")
        // this._detailsDropdown.style.height = `${ this._detailsDropdown.querySelector('summary').offsetHeight }` + 'px';
        this.animateDetailsDropdownOnClose(dropdownBody, dropdownDetails)
    }

    activeDetailsDropdown() {
        this._detailsBody.classList.add('active');
        this._detailsDropdown.setAttribute("open", "true")
        this._detailsDropdown.setAttribute("aria-expanded", "true")
        // this._detailsDropdown.style.height = `${ this._detailsDropdown.querySelector('summary').offsetHeight + this._detailsBody.offsetHeight}` + 'px';
        window.requestAnimationFrame(() => {
            this.animateDetailsDropdownOnOpen()
        })
    }



    opendDropdown(e) {

        e.preventDefault();
        if (this._detailsBody.classList.contains('active')) return
        this._detailsDropdown.classList.add('active');

        this._allDropdowns = document.querySelectorAll('[detailsDropdown][open="true"]');
        this._allDropdowns && this._allDropdowns.forEach((dropdown) => {
            const dropdownBody = dropdown.querySelector('[detailsBody]')
            const dropdownDetails = dropdown
            this.inActiveDetailsDropdown(dropdownBody, dropdownDetails)
        }
        )
        this.activeDetailsDropdown();
    }

    closeDropdown(e) {
        e.preventDefault();
        if (this._detailsBody.classList.contains('active')) {
            this.inActiveDetailsDropdown(this._detailsBody, this._detailsDropdown);
            this._detailsDropdown.classList.remove('active');
        }
    }
    connectedCallback() {
        // this._detailsDropdown.style.height = `${ this._detailsDropdown.querySelector('summary').offsetHeight }` + 'px';
    }
}

customElements.define('details-dropdown', DetailsDropdown);