if (!customElements.get('snap-slider')) {
    class SnapSlider extends HTMLElement {
        constructor() {
            super();
            this.snapAlign = this.hasAttribute("center");
            this.autoScroll = this.hasAttribute("auto-scroll");
            this.nextBtn = this.querySelector('[scroll-next]');
            this.prevBtn = this.querySelector('[scroll-prev]');
            this.sliderItems = this.querySelectorAll('[snap-slider-item]');
            this.mainSlider = this.querySelector('[main-snap-slider]')
            this.shopFeedElement = this.querySelector('shop-feed');
            this.currentIndex = 1;
            this._bottomSheetOpen = false;
            this._boundHandleMedia = this._handleMedia.bind(this);
            this._boundHandleBottomSheetOverlay = this.handleBottomSheetOverlay.bind(this);
            this._boundHandleDrawerClose = this.handleDrawerClose.bind(this);
            this._boundPauseImage = this._pauseImage.bind(this);
            this._boundResumeImage = this._resumeImage.bind(this);
        }
        connectedCallback() {
            this.bottomSheetOverlay = this.closest('.drawer__wrapper')?.querySelector('[bottom-sheet-overlay]');
            if (!this._initialized) {
                this._initialized = true;
                this._initInfiniteSlides();
            }
            this._handleEvents();
        }
        disconnectedCallback() {
            document.removeEventListener(_EVENT_HELPER.fireBottomSheetEvent, this._boundHandleBottomSheetOverlay);
            document.removeEventListener(_EVENT_HELPER.hideDrawer, this._boundHandleDrawerClose);
            this.bottomSheetOverlay?.removeEventListener('click', this._boundHandleDrawerClose);
            clearTimeout(this._scrollEndTimer);
            clearTimeout(this._overflowTimer);
        }
        _initInfiniteSlides() {
            const items = [...this.querySelectorAll('[snap-slider-item]')];
            if (items.length < 2) {
                this.classList.add('is-single-slide');
                return;
            }
            const firstClone = items[0].cloneNode(true);
            const lastClone = items[items.length - 1].cloneNode(true);

            this.mainSlider.prepend(lastClone);
            this.mainSlider.append(firstClone);

            this._updateSlides();

            this.mainSlider.scrollTop = this.mainSlider.clientHeight;
        }
        _handleLoop(index) {
            if (this.classList.contains('is-single-slide')) return;
            const total = this.sliderItems.length;
            if (index === 0) {
                this._slideJump(total - 2);
                return;
            }
            if (index === total - 1) {
                this._slideJump(1);
                return;
            }

        }
        _slideJump(index) {
            this.mainSlider.style.scrollBehavior = "auto";
            this.mainSlider.scrollTop = index * this.mainSlider.clientHeight;
            this.mainSlider.style.scrollBehavior = "smooth";
        }
        _updateSlides() {
            this.sliderItems = this.querySelectorAll('[snap-slider-item]');
        }
        _handleEvents() {
            // Document-level and overlay listeners are re-registered on every connect
            // and explicitly removed in disconnectedCallback — no accumulation risk.
            document.addEventListener(_EVENT_HELPER.fireBottomSheetEvent, this._boundHandleBottomSheetOverlay);
            document.addEventListener(_EVENT_HELPER.hideDrawer, this._boundHandleDrawerClose);
            this.bottomSheetOverlay?.addEventListener('click', this._boundHandleDrawerClose);

            // Element-local listeners (mainSlider, nextBtn, prevBtn, this) only registered once.
            if (this._eventsRegistered) return;
            this._eventsRegistered = true;

            if (!this.classList.contains('is-single-slide')) {
                // Use scrollend where supported, fall back to scroll + debounce for iOS Safari < 17.5
                if ('onscrollend' in window) {
                    this.mainSlider.addEventListener("scrollend", this._boundHandleMedia);
                } else {
                    this._scrollEndTimer = null;
                    this.mainSlider.addEventListener("scroll", () => {
                        clearTimeout(this._scrollEndTimer);
                        this._scrollEndTimer = setTimeout(() => {
                            this._boundHandleMedia();
                        }, 120);
                    });
                }
                this.mainSlider.addEventListener("scroll", () => this.mainSlider.classList.add('is-scrolling'));
            }
            this.addEventListener('video_ended', (e) => {
                if (this.autoScroll) {
                    this._nextSlide();
                } else {
                    // Loop: reset and replay the current video in place
                    const video = e.target;
                    video._resetVideo();
                    video._play();
                }
            });
            this.addEventListener('click-to-slide', (e) => {
                const targetIndex = e.detail.currentIndex;
                // Reset bottom sheet state every time popup is (re-)opened
                this.bottomSheetOverlay?.classList.remove('active');
                const bottomSheet = this.closest('.drawer__wrapper')?.querySelector('[bottom-sheet-id="reel-product-variant"]');
                if (bottomSheet) bottomSheet.classList.remove('active');

                // iOS only blocks unmuted play outside user gestures.
                this._iosUnlockVideos();

                // Hide slider to prevent flash of wrong slide while waiting for layout
                this.mainSlider.style.visibility = 'hidden';

                const initSlide = () => {
                    if (this.mainSlider.clientHeight === 0) {
                        requestAnimationFrame(initSlide);
                        return;
                    }

                    // Allow browser to flush layout after drawer is un-hidden
                        const jumpIndex = this.classList.contains('is-single-slide') ? targetIndex : targetIndex + 1;
                        this._slideJump(jumpIndex);

                        this._handleMedia();

                        this.mainSlider.style.visibility = '';
                };
                requestAnimationFrame(initSlide);
            });
            this.nextBtn?.addEventListener('click', this._nextSlide.bind(this));
            this.prevBtn?.addEventListener('click', this._prevSlide.bind(this));
            this.nextBtn?.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                    this._nextSlide();
                }
            });
            this.prevBtn?.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                    this._prevSlide();
                }
            });
        }
        _handleMedia() {
            if (this._bottomSheetOpen) return;
            this.mainSlider.classList.remove('is-scrolling');
            if (!this.mainSlider.clientHeight) return;
            this.currentIndex = Math.round(this.mainSlider.scrollTop / this.mainSlider.clientHeight);
            this.activeSlide = this.sliderItems[this.currentIndex];
            if (!this.activeSlide) return;
            clearTimeout(this.imgTimeout);
            this.imgTimeout = null;
            this.currentImage = this.activeSlide.querySelector('[data-media-type="image"]');
            if (this.progressBar) {
                this.progressBar.classList.remove("active-progress-bar");
                this.progressBar.classList.remove("paused-progress-bar");
            }
            // Remove previous image click listeners
            if (this._imgPauseEl) {
                this._imgPauseEl.removeEventListener('click', this._boundPauseImage);
                this._imgPlayEl && this._imgPlayEl.removeEventListener('click', this._boundResumeImage);
            }
            HELPER_UTIL.dispatchCustomEvent('shoppable-feed-slide-change', this.shopFeedElement, {
                activeSlide: this.activeSlide
            });
            this._handleLoop(this.currentIndex);
            const prevVideo = this.currentVideo;
            this.currentVideo = this.activeSlide.querySelector("reel-feed-player");
            if (prevVideo && prevVideo !== this.currentVideo) {
                prevVideo._pause();
                prevVideo._resetVideo();
            }
            if (this.currentVideo) {
                this.currentVideo._resetVideo();
                this.currentVideo._renderMedia();
            }
            if (this.currentImage) {
                // Reset image-playing state
                this.currentImage.setAttribute('image-playing', 'true');

                if (this.autoScroll) {
                    // Wire up pause/resume click listeners for this image slide
                    this._imgPauseEl = this.currentImage.querySelector('[pause-image-media]');
                    this._imgPlayEl = this.currentImage.querySelector('[play-image-media]');
                    this._imgPauseEl?.addEventListener('click', this._boundPauseImage);
                    this._imgPlayEl?.addEventListener('click', this._boundResumeImage);

                    this.progressBar = this.currentImage?.querySelector('[image-progress-bar-fill]');
                    if (this.progressBar) {
                        this.progressBar.classList.remove("active-progress-bar");
                        this.progressBar.classList.remove("paused-progress-bar");
                        void this.progressBar.offsetWidth;
                        this.progressBar.classList.add("active-progress-bar");

                        this.imgDuration = 5000;
                        this.imgStartTime = Date.now();
                        this.imgTimeout = setTimeout(() => {
                            this._onImageComplete();
                        }, this.imgDuration);
                    }
                } else {
                    // Ensure no stale progress bar reference leaks across slides when toggling
                    this.progressBar = null;
                }
            }
            // iOS Safari compositing fix: force a paint cycle on the active play overlay
            // so SVG icons render correctly on every slide change.
            const overlayEl = this.activeSlide?.querySelector(this.currentVideo ? '[video-overlay-elements]' : '[image-play-overlay]');
            if (overlayEl) {
                overlayEl.style.display = 'none';
                void overlayEl.offsetHeight;
                overlayEl.style.display = '';
            }
        }
        _pauseImage() {
            if (!this.currentImage || this.currentImage.getAttribute('image-playing') === 'false') return;
            this.currentImage.setAttribute('image-playing', 'false');
            this._pauseImageProgressBar();
        }
        _resumeImage() {
            if (!this.currentImage || this.currentImage.getAttribute('image-playing') === 'true') return;
            this.currentImage.setAttribute('image-playing', 'true');
            this._resumeImageProgressBar();
        }
        _handleMediaChanging() {
            this.currentVideo && this.currentVideo._pause();
        }
        _pauseImageProgressBar() {
            if (!this.progressBar) return;
            if (this.imgTimeout !== null) {
                clearTimeout(this.imgTimeout);
                this.imgTimeout = null;
                this.imgRemainingTime = this.imgDuration - (Date.now() - this.imgStartTime);
                if (this.imgRemainingTime < 0) this.imgRemainingTime = 0;
            }
            this.progressBar.classList.add("paused-progress-bar");
        }
        _resumeImageProgressBar() {
            if (!this.progressBar || this.imgRemainingTime === undefined) return;

            // Ensure we are only resuming if the image we paused is still the active slide
            const activeImage = this.sliderItems[this.currentIndex]?.querySelector('[data-media-type="image"]');
            if (!this.currentImage || this.currentImage !== activeImage) return;

            this.progressBar.classList.remove("paused-progress-bar");
            this.imgStartTime = Date.now();
            this.imgDuration = this.imgRemainingTime;

            this.imgTimeout = setTimeout(() => {
                // Check again at timeout end in case it scrolled during the final ms
                const currentActiveImage = this.sliderItems[this.currentIndex]?.querySelector('[data-media-type="image"]');
                if (this.currentImage === currentActiveImage) {
                    this._onImageComplete();
                }
            }, this.imgRemainingTime);
        }

        _onImageComplete() {
            if (!this.progressBar) return;
            this.progressBar.classList.remove("active-progress-bar");
            if (this.autoScroll) {
                this._nextSlide();
            } else {
                this._loopImageTimer();
            }
        }

        _loopImageTimer() {
            if (!this.progressBar) return;
            void this.progressBar.offsetWidth; 
            this.progressBar.classList.add("active-progress-bar");
            this.imgDuration = 5000;
            this.imgStartTime = Date.now();
            this.imgTimeout = setTimeout(() => {
                this._onImageComplete();
            }, this.imgDuration);
        }

        _iosUnlockVideos() {
            const isIOS = /iP(hone|ad|od)/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
            if (!isIOS) return;
            
            this.querySelectorAll('reel-feed-player video').forEach(video => {
                const p = video.play();
                if (p !== undefined) p.then(() => video.pause()).catch(() => {});
            });
        }
        _nextSlide() {
            if (this.classList.contains('is-single-slide')) return;
            this.mainSlider.scrollBy({ top: this.mainSlider.clientHeight, behavior: "smooth" });
        }
        _prevSlide() {
            if (this.classList.contains('is-single-slide')) return;
            this.mainSlider.scrollBy({ top: -this.mainSlider.clientHeight, behavior: "smooth" });
        }
        handleBottomSheetOverlay(e) {
            const { actionType } = e.detail;
            if (actionType === 'show') {
                this._bottomSheetOpen = true;
                this.bottomSheetOverlay?.classList.add('active');
                // Prevent scroll on the snap slider while bottom sheet is open (fixes Android touch conflict)
                this.mainSlider.style.overflowY = 'hidden';
                // Pause media only when opening — not on close (avoids recalculating remaining time with stale imgStartTime)
                this.currentVideo && this.currentVideo._pause();
                this._pauseImageProgressBar();
                if (this.currentImage) this.currentImage.setAttribute('image-playing', 'false');
            } else if (actionType === 'hide') {
                this._bottomSheetOpen = false;
                this.bottomSheetOverlay?.classList.remove('active');
                // Delay re-enabling scroll to let the Android phantom tap dissipate
                clearTimeout(this._overflowTimer);
                this._overflowTimer = setTimeout(() => { this.mainSlider.style.overflowY = ''; }, 100);
                this.currentVideo && this.currentVideo._play();
                this._resumeImageProgressBar();
                if (this.currentImage) this.currentImage.setAttribute('image-playing', 'true');
            }
        }
        handleDrawerClose(e) {
            this._bottomSheetOpen = false;
            this.bottomSheetOverlay?.classList.remove('active');
            // Delay re-enabling scroll to let the Android phantom tap dissipate
            clearTimeout(this._overflowTimer);
            this._overflowTimer = setTimeout(() => { this.mainSlider.style.overflowY = ''; }, 100);
            const bottomSheet = this.closest('.drawer__wrapper')?.querySelector('[bottom-sheet-id="reel-product-variant"]');
            bottomSheet?.classList.remove('active');
            if (e.type !== "action:hideDrawer") {
                this.currentVideo && this.currentVideo._play();
                this._resumeImageProgressBar();
                if (this.currentImage) this.currentImage.setAttribute('image-playing', 'true');
            } else {
                // Popup drawer closing — stop video and cancel rAF progress loop / image timer
                this.currentVideo && this.currentVideo._pause();
                this._pauseImageProgressBar();
                if (this.currentImage) this.currentImage.setAttribute('image-playing', 'false');
            }
        }
    }

    customElements.define('snap-slider', SnapSlider);
}