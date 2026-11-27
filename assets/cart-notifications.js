
// create a cart notification web component class that will listen for somerandom event right now
class CartNotificationsPopup extends HTMLElement {
    constructor() {
        super();
        this.cartContentWrapper = this.querySelector(
            '[cart-notification-content]'
        );
        this.closePopup = this.querySelector('[close-cart-notification-popup]');
        this.closePopup && this.closePopup.addEventListener('click', this.handleClosePopup.bind(this));
        document.addEventListener(
            _EVENT_HELPER.showCartPopup,
            this.showCartNotification.bind(this)
        );
        window.addEventListener(
            'resize',
            this.handlePopupRightPosition.bind(this)
        );
    }

    handlePopupRightPosition() {
        const cartIcon = document.querySelector('[header-cart-bubble]');
        if(!cartIcon) return
        const iconRect = cartIcon.getBoundingClientRect();
        const isRTL = HELPER_UTIL.isRTL();
        const position = isRTL
            ? iconRect.left
            : iconRect.right - this.getBoundingClientRect().width;
        this.style.setProperty('--popup-right-position', `${position}px`);
    }

    handleClosePopup() { 
        this.hidePopup();
        this.clearExisitingPopupCloseTimeouts();
    }
    clearExisitingPopupCloseTimeouts() { 
        if (this.popupClosetimer) {
            clearTimeout(this.popupClosetimer);
            this.popupClosetimer = null;
        }
    }

    
    showPopup() {
        this.handlePopupRightPosition();
        this.classList.remove('hide');
        this.classList.add('active');
    }

    hidePopup(data) {
        this.classList.remove('active');
        this.classList.add('hide');
        // Remove .hide after animation completes
        this.addEventListener('animationend', function handler() {
            this.classList.remove('hide');
            this.removeEventListener('animationend', handler);
        });
    }
    


    showCartNotification(event) {
        const cartPoupup = event.detail.sections['cart-popup'];
        try {
            if (cartPoupup) {
                const getHTML = HELPER_UTIL.getHTMLFromString(
                    cartPoupup,
                    'cart-popup'
                );
                this.cartContentWrapper.innerHTML = getHTML.innerHTML;
                // Show Popup
                this.showPopup();
                // Clear any existing popup close timeouts to prevent the popup to hide and show again if second product is added when exisiting popup is still visible
                this.clearExisitingPopupCloseTimeouts();
                // Hide popup after 5 seconds
                this.popupClosetimer = setTimeout(() => {
                    this.hidePopup();
                }, 5000);
            } 
        }
        catch (error) {
            console.error('Error displaying cart notification:', error);
        }
    }

    connectedCallback() { }
       
}

customElements.get('cart-notification-popup') ||
    customElements.define('cart-notification-popup', CartNotificationsPopup);
