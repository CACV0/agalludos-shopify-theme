    class AnnouncementPopup extends Drawer {
        constructor() {
            super();

            this.isMobile = window.matchMedia("(max-width: 767px)");
            this.handleBodyScroll();
            this.onMqlChange = this.handleBodyScroll.bind(this);
            this.onScroll = this.handleScroll.bind(this);
            this.isMobile.addEventListener("change", this.onMqlChange);
            this.scrollTimeout = null;
            window.addEventListener("scroll", this.onScroll);

            const siblingCloseBtn = this.previousElementSibling?.querySelector('[close-drawer]');
            if (siblingCloseBtn) {
                siblingCloseBtn.addEventListener('click', () => {
                    HELPER_UTIL.dispatchCustomEvent(_EVENT_HELPER.hideDrawer, this, {
                        drawerType: this.drawerType,
                    });
                });
            }
        }

        handleBodyScroll() {
            if (this.isMobile.matches) {
                this.allowBodyScroll = false;
            } else {
                this.allowBodyScroll = true;
            }
        }

        handleScroll() {
            if (this.classList.contains("drawer-active")) return;
            this.classList.add("scrolling");
            clearTimeout(this.scrollTimeout);
            this.scrollTimeout = setTimeout(() => {
                this.classList.remove("scrolling");
            }, 1300);
        }

        disconnectedCallback() {
            this.isMobile.removeEventListener("change", this.onMqlChange);
            window.removeEventListener("scroll", this.onScroll);

            if (this.scrollTimeout) {
                clearTimeout(this.scrollTimeout);
                this.scrollTimeout = null;
            }
        }
    }

    
customElements.get("announcement-popup") ||
    customElements.define("announcement-popup", AnnouncementPopup);
