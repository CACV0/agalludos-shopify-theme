// Check if the custom element is already defined, and only define if not
if (!customElements.get('countdown-timer')) {
    class CountdownTimer extends HTMLElement {
        constructor() {
            super();
            let options = {
                root: document,
                rootMargin: '200px',
                threshold: 0,
            };
            this.isNotIntersected = this.hasAttribute("not-on-intersection")
            if (this.isNotIntersected) {
                this.calculateTimerData();
            }
            else {
                HELPER_UTIL.trigerElementFunctionalityInView(this, options);
                this.addEventListener(
                    _EVENT_HELPER.elementIsInCurrentView,
                    () => {
                        this.calculateTimerData();
                    })
            }
        }

        calculateTimerData() {
            this.removeEventListener(_EVENT_HELPER.elementIsInCurrentView, () => {
                this.calculateTimerData()
            });
            let endYear = Number(this.getAttribute("data-year"));
            let endMonth = Number(this.getAttribute("data-month"));
            let endDay = Number(this.getAttribute("data-day"));
            let endHours = Number(this.getAttribute("data-hours"));
            let endMinute = Number(this.getAttribute("data-minute"));
            let time_zone_type = this.getAttribute("data-time-zone");
            let sectionId = this.getAttribute("data-section-id");
            let hide_on_completion = this.getAttribute("data-hide-on-completion");

            if (time_zone_type == "shop_time_zone") {
                let timezone = this.getAttribute("data-timezone");
                // Normalize data-shop-time-zone string for Safari: replace space between date and time with T
                // Liquid outputs format: "YYYY-MM-DD HH:MM+offset" (no seconds), so match HH:MM only
                let shopTimeStr = (this.getAttribute("data-shop-time-zone") || "").replace(/(\d{4}-\d{2}-\d{2}) (\d{2}:\d{2})/, '$1T$2');
                let shopTimeZone = new Date(shopTimeStr).getTime();
                // Parse timezone offset manually (e.g. "+05:30") to avoid Safari date string parsing issues
                let tzMatch = (timezone || "").match(/([+-])(\d{2}):(\d{2})/);
                let tzOffsetMs = tzMatch ? (tzMatch[1] === '+' ? 1 : -1) * (parseInt(tzMatch[2]) * 60 + parseInt(tzMatch[3])) * 60000 : 0;
                let endingTimer = new Date(Date.UTC(endYear, endMonth - 1, endDay, endHours, endMinute, 0) - tzOffsetMs);

                let timerCheckInterval = setInterval(() => {
                    let timeDiff = endingTimer.getTime() - shopTimeZone;
                    let distance = timeDiff - (new Date().getTime() - shopTimeZone);

                    let { days, hours, minutes, seconds } = this.calculateAndAppendTime(distance);

                    this.setCountdownTimerData(false, days, hours, minutes, seconds);
                    if (distance < 0) {
                        clearInterval(timerCheckInterval);
                        this.setCountdownTimerData(true);
                        if (hide_on_completion == 'hide_on_completion') {
                            if (this.closest('[hide-on-expiry-parent-element]')) {
                                this.closest('[hide-on-expiry-parent-element]')?.closest('[hide-on-expiry]')?.remove();
                            }
                            else if (this.closest('[hide-on-expiry]')) {
                                this.closest('[hide-on-expiry]')?.nextElementSibling?.matches('[hide-on-expiry]') && this.closest('[hide-on-expiry]')?.nextElementSibling?.remove();
                                this.closest('[hide-on-expiry]').remove();
                                document.querySelector("#" + sectionId + " carousel-component")?.swiperInstance.update();
                            }
                            else {
                                document.querySelector("#" + sectionId).style.display = "none"
                            }
                        }
                    }
                }, 1000);
            }
            else {
                // Use numeric constructor for Safari/iOS compatibility (avoids date string parsing issues)
                let endingTimer = new Date(endYear, endMonth - 1, endDay, endHours, endMinute, 0);

                let timerCheck = setInterval(() => {
                    let now = new Date().getTime();
                    let distance = (endingTimer.getTime()) - now;

                    let { days, hours, minutes, seconds } = this.calculateAndAppendTime(distance);

                    this.setCountdownTimerData(false, days, hours, minutes, seconds);
                    if (distance < 0) {
                        clearInterval(timerCheck);
                        this.setCountdownTimerData(true);
                        if (hide_on_completion == 'hide_on_completion') {
                            if (this.closest('[hide-on-expiry-parent-element]')) {
                                this.closest('[hide-on-expiry-parent-element]')?.closest('[hide-on-expiry]')?.remove();
                            }
                            else if (this.closest('[hide-on-expiry]')) {
                                this.closest('[hide-on-expiry]')?.nextElementSibling?.matches('[hide-on-expiry]') && this.closest('[hide-on-expiry]')?.nextElementSibling?.remove();
                                this.closest('[hide-on-expiry]').remove();
                                document.querySelector("#" + sectionId + " carousel-component")?.swiperInstance.update();
                            }
                            else {
                                document.querySelector("#" + sectionId).style.display = "none"
                            }
                        }
                    }
                }, 1000)
            }
        }

        calculateAndAppendTime(distance) {
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            return { days, hours, seconds, minutes }
        }

        setCountdownTimerData(setToZero, days = "00", hrs = "00", mins = "00", secs = "00") {
            let days_ele = this.querySelector("[data-counter-days]");
            let hrs_ele = this.querySelector("[data-counter-hours]");
            let mins_ele = this.querySelector("[data-counter-mins]");
            let secs_ele = this.querySelector("[data-counter-seconds]");
            if (setToZero == true) {
                days_ele.innerHTML = "00";
                hrs_ele.innerHTML = "00";
                mins_ele.innerHTML = "00";
                secs_ele.innerHTML = "00";
            }
            else {
                if (days >= 0 && days <= 9) {
                    days = "0" + days;
                    days_ele.innerHTML = days;
                }
                else {
                    days_ele.innerHTML = days;
                }

                if (hrs >= 0 && hrs <= 9) {
                    hrs = "0" + hrs;
                    hrs_ele.innerHTML = hrs;
                }
                else {
                    hrs_ele.innerHTML = hrs;
                }

                if (mins >= 0 && mins <= 9) {
                    mins = "0" + mins;
                    mins_ele.innerHTML = mins;
                } else {
                    mins_ele.innerHTML = mins;
                }

                if (secs >= 0 && secs <= 9) {
                    secs = "0" + secs;
                    secs_ele.innerHTML = secs;
                } else {
                    secs_ele.innerHTML = secs;
                }
            }
        }
    };
    customElements.define('countdown-timer', CountdownTimer);
}
