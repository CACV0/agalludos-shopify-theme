class AgeVerification extends Drawer {
    constructor() {
        super();
        this.approveButton = this.querySelector('[yes-button]');
   
        this.approveButton.addEventListener('click', this.verifyAge.bind(this));
    }

    verifyAge(e){
        e.preventDefault();
        this.setCoockie('age-verified', 'true');
        HELPER_UTIL.dispatchCustomEvent(
            _EVENT_HELPER.hideDrawer,
            this,
            {
                drawerType: 'age-popup',
            }
        );

    }


    setCoockie(name, value, days) {
        var expires = "";   
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');

        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }   
        return null;
    }


    connectedCallback() {    
          
        if (this.getCookie('age-verified')) {
            return;
        }
        HELPER_UTIL.dispatchCustomEvent(_EVENT_HELPER.showDrawer, this, {
            drawerType: 'age-popup',
        });
    }


}
customElements.define("age-verification", AgeVerification)


