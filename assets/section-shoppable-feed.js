if (!customElements.get('shop-feed')) {
    class ShopFeed extends HTMLElement {
        constructor() {
            super();
            this.currentVideoPlayer = this._getAutoPlayVideoElement() || null;

            this.addEventListener(
                'video_playing',
                this.handleVideoPlaying.bind(this)
            );
            if (this.currentVideoPlayer && this.hasAttribute('play-first-media')) {
                this.addEventListener(_EVENT_HELPER.elementIsInCurrentView, (e) => {
                    this.currentVideoPlayer._renderMedia();
                });
            }

            HELPER_UTIL.trigerElementFunctionalityInView(
                this,
                null,
                this.checkInView.bind(this)
            );

            // Pause feed video if options drawer opens
            this._boundShowDrawer = (e) => {
                if (e.detail.drawerType !== 'options') return;
                this.checkAndPauseAnyVideoPlaying();
            };
            document.addEventListener(_EVENT_HELPER.showDrawer, this._boundShowDrawer);

            this.addEventListener('shoppable-feed-slide-change', (e) => {
                !e.detail.activeSlide.querySelector('feed-player, reel-feed-player') && this.checkAndPauseAnyVideoPlaying();

            });
        }

        handleVideoPlaying(e) {
            const newVideoPlayer = e.target;
            if (!this.currentVideoPlayer) {
                this.currentVideoPlayer = newVideoPlayer;
            }
            if (this.currentVideoPlayer && this.currentVideoPlayer != newVideoPlayer) {
                this.currentVideoPlayer._pause();
                this.currentVideoPlayer = newVideoPlayer;

            }
        }

        checkAndPauseAnyVideoPlaying() {
            if (!this.currentVideoPlayer) return;
            this.currentVideoPlayer._pause();
        }

        disconnectedCallback() {
            document.removeEventListener(_EVENT_HELPER.showDrawer, this._boundShowDrawer);
        }

        checkInView(e) {
            this.checkAndPauseAnyVideoPlaying();
        }

        _getAutoPlayVideoElement() {
            return [...this.querySelectorAll('feed-player')].find((el) =>
                el.hasAttribute('feed-media-autoplay')
            );
        }


    }

    customElements.define('shop-feed', ShopFeed);
}

if(!customElements.get('shoppable-feed-card')){
    class ShoppableFeedCard extends HTMLElement {
        constructor() {
            super();
            this.mediaPlayElement = this.querySelector('[media-interaction-element]');
        }

        connectedCallback() {}
    }

    customElements.define('shoppable-feed-card', ShoppableFeedCard);
}

if (!customElements.get('feed-player')) {
class FeedPlayer extends defaultVideoPlayer {
    constructor() {
        super();
        this.pauseVideoEl = this.querySelectorAll('[pause-media]');
        this.audioEl = this.querySelector('[audio-state]');
        this.playOnHover = this.hasAttribute("play-on-hover")
        this.pauseVideoEl &&
            this.pauseVideoEl.forEach((el) => {
                el.addEventListener('click', this.whenVideoPause.bind(this))
            }
            );
        this.audioState = this.audioEl?.getAttribute('audio-state') || 'mute';
        this.playMuteVideo = this.audioState && this.audioState === 'mute' ? true : false ;
        this.isUGCContext = !!this.closest('snap-slider');
        this.audioEl && this.audioEl.addEventListener('click', this.handleAudioState.bind(this));
        this.playOnHover && this.addEventListener("mouseenter", this.playONMouseHover.bind(this))
        this.playOnHover && this.addEventListener("mouseleave", this.pauseONMouseLeve.bind(this))

    }
    playONMouseHover() {
        if (this.getAttribute("video-playing") == 'false') {
            const audioState = this.audioEl ? this.audioEl.getAttribute('audio-state') : 'mute';
            this.player.muted = audioState !== 'unmute';
            this._renderMedia();
        }
    }
    pauseONMouseLeve() {
        this._pause()

    }
    handleAudioState() {
        const audioState = this.audioEl.getAttribute('audio-state');
        switch (audioState) {
            case 'mute':
                this.audioEl.setAttribute('audio-state', 'unmute');
                this.player.muted = false;
                if (this.isUGCContext) {
                    this.audioState = 'unmute';
                    this.playMuteVideo = false;
                }
                break;
            case 'unmute':
                this.audioEl.setAttribute('audio-state', 'mute');
                this.player.muted = true;
                if (this.isUGCContext) {
                    this.audioState = 'mute';
                    this.playMuteVideo = true;
                }
                break;
            case 'default':
                break;
        }
    }


    whenVideoPause() {
        this._pause();
    }

    _pause() {
        super._pause();
        this.setAttribute("video-playing", false);
    }

    _play() {
        this.player.muted = this.playMuteVideo;
        if (this.audioEl) {
            this.audioEl.setAttribute('audio-state', this.audioState);
        }
        HELPER_UTIL.dispatchCustomEvent('video_playing', this);
        super._play();
        this.setAttribute("video-playing", true);
    }
    showPlayButton() {
        this.playButton.classList.remove('video-elements-hidden');
    }
}

customElements.define('feed-player', FeedPlayer);

class ReelFeedPlayer extends FeedPlayer {
    constructor() {
        super();
        this.progressBar = this.querySelector('[video-progress-bar-fill]');
        this._boundVideoEnded = this._videoEnded.bind(this);
        this._rafId = null;
    }

    connectedCallback() {
        if (this.player) {
            this.player.addEventListener('ended', this._boundVideoEnded);
        }
    }

    disconnectedCallback() {
        if (this.player) {
            this.player.removeEventListener('ended', this._boundVideoEnded);
        }
        this._stopProgress();
    }

    // Use requestAnimationFrame for smooth 60fps progress bar updates
    _startProgress() {
        this._stopProgress();
        const update = () => {
            if (!this.player || !this.progressBar) return;
            const percentage = this.player.duration
                ? (this.player.currentTime / this.player.duration) * 100
                : 0;
            this.progressBar.style.width = `${percentage}%`;
            this._rafId = requestAnimationFrame(update);
        };
        this._rafId = requestAnimationFrame(update);
    }

    _stopProgress() {
        if (this._rafId !== null) {
            cancelAnimationFrame(this._rafId);
            this._rafId = null;
        }
    }

    _play() {
        super._play();
        this._startProgress();
    }

    _pause() {
        super._pause();
        this._stopProgress();
    }

    _videoEnded() {
        this._stopProgress();
        HELPER_UTIL.dispatchCustomEvent('video_ended', this);
        if (this.progressBar) this.progressBar.style.width = '0';
    }

    _resetVideo() {
        if (!this.player) return;
        this._stopProgress();
        this.player.currentTime = 0;
        if (this.progressBar) this.progressBar.style.width = '0';
    }
}

customElements.define('reel-feed-player', ReelFeedPlayer);
}

if (!customElements.get('shoppable-carousel-component')) {
class ShoppableCarouselComponent extends CarouselComponent {
    constructor() {
        super();
        this.shopFeedElement = this.closest('shop-feed');
    }

    handleFunctionalityAfterSlideChange(swiperInstance) {
        super.handleFunctionalityAfterSlideChange(swiperInstance);
        if (!this.hasAttribute("centered-slides")) return;
        HELPER_UTIL.dispatchCustomEvent('shoppable-feed-slide-change', this.shopFeedElement, {
            activeSlide: swiperInstance.slides[swiperInstance.activeIndex]
        });
    }
}

customElements.define('shoppable-carousel-component', ShoppableCarouselComponent);
}




if (!customElements.get('ugc-reel')) {
class UGCReel extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.mediaItems = this.querySelectorAll('[reel-swiper-container] [data-media-type="video"], [reel-swiper-container] [data-media-type="image"]');
        this.portalElementId = this.getAttribute('target-portal-element') || null;
        this.popupDrawerType = this.getAttribute('popup-drawer-type') || 'ugc-reel-pop';
        this.snapSlider = this.querySelector('[main-snap-slider]');
        this.buttonLabel = this.getAttribute('button-label');
        this._initFirstVideoAutoplay();
        this._updateButtonLabel();
        if (Shopify.designMode) this._closeAndRemoveStaleDrawers();
        this._mediaHandlers = [];
        this.mediaItems.forEach((item, index) => {
            const clickHandler = () => this.openPopup(index);
            const keydownHandler = (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.openPopup(index);
                }
            };
            item.addEventListener('click', clickHandler);
            item.addEventListener('keydown', keydownHandler);
            this._mediaHandlers.push({ item, clickHandler, keydownHandler });
        });
    }

    disconnectedCallback() {
        this._mediaHandlers?.forEach(({ item, clickHandler, keydownHandler }) => {
            item.removeEventListener('click', clickHandler);
            item.removeEventListener('keydown', keydownHandler);
        });
        this._mediaHandlers = [];
    }

    _closeAndRemoveStaleDrawers() {
        if (!this.portalElementId) return;
        const portal = document.querySelector(this.portalElementId);
        if (!portal) return;
        portal.querySelectorAll(`drawer-component[drawer-type="${this.popupDrawerType}"]`).forEach(drawer => {
            drawer.classList.remove('drawer-active');
            drawer.isDrawerOpen = false;
            drawer.remove();
        });
        HELPER_UTIL.bodyInteractions.enableScroll();
    }

    openPopup(index) {
        HELPER_UTIL.dispatchCustomEvent(_EVENT_HELPER.showDrawer, document, {
            drawerType: this.popupDrawerType,
            portalDrawerTo: this.portalElementId,
            portalBackSectionId: this.id,
        });
        HELPER_UTIL.dispatchCustomEvent('click-to-slide', this.snapSlider, {
            currentIndex: index
        });
    }

    _initFirstVideoAutoplay() {
        if (!this.hasAttribute('first-video-play')) return;
        const firstBlock = this.querySelector('[reel-swiper-container] [data-media-type]');
        if (!firstBlock || firstBlock.dataset.mediaType !== 'video') return;
        this.firstVideoPlayer = firstBlock;
        this._firstVideoPlayed = false;
        this.addEventListener(_EVENT_HELPER.elementIsInCurrentView, () => {
            if (this._firstVideoPlayed) return;
            this._firstVideoPlayed = true;
            this._playFirstVideoMuted();
        });
    }

    _playFirstVideoMuted() {
        if (!this.firstVideoPlayer?.player) return;
        this.firstVideoPlayer.player.muted = true;
        this.firstVideoPlayer.player.loop = true;
        this.firstVideoPlayer.playMuteVideo = true;
        this.firstVideoPlayer.querySelector('[pause-media]')?.remove();
        this.firstVideoPlayer._renderMedia();
    }

    _updateButtonLabel() {
        if (!this.buttonLabel) return;
        this.querySelectorAll('[main-snap-slider] [snap-slider-item] [quick-buy-style-button-label]')
            .forEach((el) => { el.innerText = this.buttonLabel; });
    }
}

customElements.define('ugc-reel', UGCReel);
}
