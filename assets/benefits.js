if (!window.customElements.get('benefits-component')) {
  class Benefits extends HTMLElement {
    constructor() {
      super();
      this.templateElement = this.querySelector("[benefit-content]");
      this._template = this.templateElement?.content?.cloneNode(true);
      this._animationContainer = this.querySelector("[animation-container]");
      this._numberOfBlocks = parseInt(this.getAttribute("number-of-blocks"));
      this.mediaQuery = window.matchMedia("(max-width: 991px)");
      this.mediaQuery.addEventListener("change", (e) => {

        this.handleViewportChange(e.matches); // `true` if mobile

      });

      this.onlyMobileSlider;
      this.mainSliderElement = this.querySelector("[main-slider]");
      this.slideProgressBar = this.querySelector("[slide-progress]");
      this.responsive_breakpoints = JSON.parse(
        this.getAttribute("slide-responsive-breakpoints")
      );
      this.slidePaginationType =
        this.getAttribute("slide-pagination-type") || null;
      this.sliderPerView = this.getAttribute("slide-per-view");

    }

    connectedCallback() {
      this.handleViewportChange(Benefits.isMobile);

      // Add window resize listener
      this.handleResize = this.handleResize.bind(this);
      window.addEventListener('resize', this.handleResize);

      // Check for accordion open and toggle 'is-expanded' class on benefit-card
      const benefitCards = this.querySelectorAll("[benefit-card]");
      benefitCards.forEach(card => {
        const details = card.querySelector("details[accordionTab]");
        if (details) {
          // Set initial state
          if (details.hasAttribute("open")) {
            card.classList.add("is-expanded");
          } else {
            card.classList.remove("is-expanded");
          }
          // Listen for toggle
          details.addEventListener("toggle", () => {
            if (details.open) {
              card.classList.add("is-expanded");
            } else {
              card.classList.remove("is-expanded");
            }

            // Immediate update for faster response
            this.immediateSliderUpdate();

            // Update slider height when accordion state changes
            setTimeout(() => {
              this.forceUpdateSliderHeight();
            }, 200);
          });
        }
      });

      // Initial height calculation after everything is set up
      setTimeout(() => {
        this.forceUpdateSliderHeight();
      }, 200);
    }

    disconnectedCallback() {
      // Clean up event listeners
      window.removeEventListener('resize', this.handleResize);
    }

    handleResize() {
      // Debounce resize events
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(() => {
        this.forceUpdateSliderHeight();
      }, 250);
    }
    handleViewportChange(isMobile) {
      // You can perform logic only when breakpoint switches
      if (isMobile) {
        setTimeout(() => {
          if (this.getAttribute("carousel-enabled") === "true") {
            this.detailToggleUpdateSlider();
          }
          this.reInitSlider();
        }, 100);
        if (this.getAttribute("carousel-enabled") === "false") {
          this.detailToggleUpdateSlider();
        }
      } else {
        // On desktop, ensure proper height calculation
        setTimeout(() => {
          this.forceUpdateSliderHeight();
        }, 50);
      }

      // Always ensure proper height calculation after viewport change
      setTimeout(() => {
        this.forceUpdateSliderHeight();
      }, 100);
      this.checkContainerInView();
    }

    reInitSlider() {
      if (this.onlyMobileSlider?.initialized) {
        this.onlyMobileSlider.update();
        // Update height after slider update
        setTimeout(() => {
          this.forceUpdateSliderHeight();
        }, 50);
      } else {
        this.enableSwiper();
        // Update height after slider initialization
        setTimeout(() => {
          this.forceUpdateSliderHeight();
        }, 50);
      }
    }
    static get isMobile() {
      return window.innerWidth <= 991;
    }


    detailToggleUpdateSlider() {
      const detailsElements = this.mainSliderElement?.querySelectorAll("details");

      if (!detailsElements || !this.onlyMobileSlider) {
        return;
      }

      detailsElements.forEach((detail) => {
        detail.addEventListener("click", () => {
          detail.classList.toggle("is-open");

          // Immediate update for faster response
          this.immediateSliderUpdate();

          // Wait for the accordion animation to complete before final update
          setTimeout(() => {
            this.forceUpdateSliderHeight();
          }, 200); // Reduced timing for faster updates
        });
      });
    }

    // Method to force update slider height (can be called externally)
    forceUpdateSliderHeight() {
      this.updateSliderHeight();
      if (this.onlyMobileSlider?.initialized) {
        this.onlyMobileSlider.update();
      }
    }

    // Method for immediate slider update (no delay)
    immediateSliderUpdate() {
      this.updateSliderHeight();
      if (this.onlyMobileSlider?.initialized) {
        this.onlyMobileSlider.update();
      }
    }

    updateSliderHeight() {
      if (!this.onlyMobileSlider || !this.mainSliderElement) {
        return;
      }

      const activeSlide = this.onlyMobileSlider.slides[this.onlyMobileSlider.activeIndex];
      if (!activeSlide) {
        return;
      }

      const accordionBody = activeSlide.querySelector("[accordionbody]");
      const accordionSummary = activeSlide.querySelector("summary");

      if (accordionBody && accordionSummary) {
        const accordionBodyHeight = accordionBody.offsetHeight;
        const accordionSummaryHeight = accordionSummary.offsetHeight;
        const openHeight = accordionBodyHeight + accordionSummaryHeight;
        const closeHeight = accordionSummaryHeight;

        // Get the current accordion state
        const details = activeSlide.querySelector("details");
        const isOpen = details && details.classList.contains("is-open");
        const wrapperHeight = isOpen ? openHeight : closeHeight;

        const swiperWrapper = this.querySelector(".swiper-wrapper");
        if (swiperWrapper) {
          swiperWrapper.classList.toggle("dropdown-open", isOpen);
        }

        const benefitsSliderContent = this.querySelector("[benefits-slider-content]");
        if (benefitsSliderContent) {
          benefitsSliderContent.style.height = `${wrapperHeight}px`;
        }
      }
    }
    checkContainerInView() {
      if (window.animation) {
        this._animationContainer &&
          Motion.inView(
            this._animationContainer,
            this.animateBenefits.bind(this),
            { amount: Benefits.isMobile ? 0.01 : 0.2, once: true }
          );
      }
    }
    animateBenefits() {
      this.isAnimated = true;
      const oddCards = this.querySelectorAll(
        "[benefits-desktop-content] [benefit-card]:nth-child(odd) [animate-card]"
      );
      const evenCards = this.querySelectorAll(
        "[benefits-desktop-content] [benefit-card]:nth-child(even) [animate-card]"
      );
      const sliderCards = this.querySelectorAll(
        "[benefits-slider-content] [animate-card]"
      );
      const desktopCards = this.querySelectorAll(
        "[benefits-desktop-content] [animate-card]"
      );

      const allCards = sliderCards.length > 0 ? sliderCards : desktopCards;

      this._innerCircle = this.parentElement.querySelector(
        "[animation-inner-circle]"
      );

      if (Benefits.isMobile) {
        this.cardAnimation(allCards, null, "mobile");
      } else {
        this.cardAnimation(oddCards, "odd", "desktop");
        this.cardAnimation(evenCards, "even", "desktop");
      }
    }

    enableSwiper() {
      this.onlyMobileSlider = new Swiper(this.mainSliderElement, {
        spaceBetween: 20,
        autoHeight: true,
        slidesPerView: this.sliderPerView,
        pagination: {
          el: this.slideProgressBar,
          type: this.slidePaginationType,
          clickable: true,
        },
        on: {
          init: () => {
            // Set initial height when slider is initialized
            setTimeout(() => {
              this.forceUpdateSliderHeight();
            }, 100);
          },
          slideChange: () => {
            // Update slider height when slide changes
            setTimeout(() => {
              this.forceUpdateSliderHeight();
            }, 50);
          },
          slideChangeTransitionEnd: () => {
            // Update height after slide transition completes
            this.forceUpdateSliderHeight();
          }
        }
      });
    }


    cardAnimation(elements, oddOrEven, mode = "desktop") {
      const isMobile = mode === "mobile";
      const easing = "linear";
      const isRtl = document.documentElement.dir === "rtl";

      elements.forEach((element, index) => {
        let xOffset = isMobile
          ? "100px"
          : oddOrEven === "even"
            ? (isRtl ? "95px" : "-95px")
            : (isRtl ? "-95px" : "95px");

        let cardDelay = 0.1;

        // Apply special offset only for 2nd item (index 1) on desktop
        if (!isMobile && index === 1 && this._numberOfBlocks > 4) {
          xOffset = oddOrEven === "even"
            ? (isRtl ? "150px" : "-150px")
            : (isRtl ? "-150px" : "150px");
          cardDelay = 0;
        }

        const contentItems = element.querySelectorAll("[animation-card-content]");
        const innerCircle =
          element.querySelector(".inner-circle") || this._innerCircle;
        const combinedSequence = Benefits.isMobile
          ? [
            [
              innerCircle,
              {
                opacity: [0, 1],
                scale: [0.3, 1],
                borderColor: [
                  "var(--color-background)",
                  "var(--circle-border)",
                ],
              },
              { duration: 0.5, ease: easing },
            ],

            [
              element,
              { opacity: [0, 1], y: [xOffset, 0] },
              { duration: 0.5, ease: "ease-in", delay: Motion.stagger(0.2) },
            ], [
              '[animate-fade]',
              {
                opacity: [0, 1],

              }, { duration: 0.5, ease: "ease-in", delay: Motion.stagger(0.2) }
            ]
          ]
          : [
            [
              element,
              { opacity: 0, x: xOffset },
              { duration: 0, ease: easing },
            ],
            [
              element,
              { opacity: [0, 1], scale: [0, 1] },
              {
                duration: 0.5,
                ease: easing,
                at: "0",
                delay: Motion.stagger(0.2),
              },
            ],
            [
              contentItems,
              { opacity: [0, 1], y: ["30%", "0"] },
              {
                duration: 0.3,
                ease: easing,
                delay: Motion.stagger(0.2),
                at: "0",
              },
            ],
            [
              element,
              { x: 0 },
              { duration: 0.5, ease: "ease-in", at: "-0.5", delay: cardDelay },
            ],
            [
              innerCircle,
              { opacity: [0, 1], scale: [0.3, 1] },
              { duration: 0.3, ease: easing, at: "-0.3" },
            ],
            [
              this._animationContainer,
              {
                borderColor: [
                  "var(--color-background)",
                  "var(--circle-border)",
                ],
              },
              {
                duration: 0.4,
                ease: easing,
                at: "0.4",
              },
            ],
          ];

        Motion.animate(combinedSequence);
      });
    }
  }

  window.customElements.define('benefits-component', Benefits);
}


if (!window.customElements.get('show-button')) {
  class ShowButton extends HTMLElement {
    constructor() {
      super();
      this.btn = this.querySelector("[toggle-text-button]");
      this.text = this.querySelector("[text-content]");
      this.extraText = this.querySelector("[read-more-extra]");
      this.shortTextHeight = 0;
    }

    connectedCallback() {
      this.calculateShortTextHeight();
      this.setupEventListeners();
      this.setupResizeHandler();
    }

    disconnectedCallback() {
      if (this.resizeTimeout) {
        clearTimeout(this.resizeTimeout);
      }
      window.removeEventListener('resize', this.handleResize);
    }

    calculateShortTextHeight() {
      // Temporarily remove height constraint to get natural height
      const originalHeight = this.text.style.height;
      this.text.style.height = 'auto';

      // Get the natural height of the short text
      this.shortTextHeight = this.text.offsetHeight;

      // Restore the height constraint
      this.text.style.height = originalHeight || this.shortTextHeight + "px";
    }

    setupEventListeners() {
      this.btn?.addEventListener("click", (e) => {
        e.preventDefault();

        // Close all other accordions
        const allShowButtons = document.querySelectorAll("show-button");
        allShowButtons.forEach((showBtn) => {
          if (showBtn !== this) {
            const text = showBtn.querySelector("[text-content]");
            const benefitCard = showBtn.closest("[benefit-card]");
            if (text && text.classList.contains("active")) {
              text.classList.remove("active");
              text.style.height = showBtn.shortTextHeight + "px";
              benefitCard?.classList.remove("is-expanded");
            }
          }
        });

        this.text.classList?.toggle("active");

        // If this.text has class 'active', set its height to its scrollHeight, else set to default height
        if (this.text.classList.contains("active")) {
          this.closest("[benefit-card]")?.classList.add("is-expanded");
          this.text.style.height = this.text.scrollHeight + "px";
        } else {
          // Animate back to collapsed height
          this.closest("[benefit-card]")?.classList.remove("is-expanded");
          this.text.style.height = this.shortTextHeight + "px";
        }
        this.closest("accordion-tab")?.activeAccordion();

        // Immediate update for faster response
        const benefitsComponent = this.closest("benefits-component");
        if (benefitsComponent) {
          benefitsComponent.immediateSliderUpdate();
        }

        // Update the slider after the text expansion/collapse
        setTimeout(() => {
          if (benefitsComponent) {
            benefitsComponent.forceUpdateSliderHeight();
          }
        }, 200);
      });
    }

    setupResizeHandler() {
      this.handleResize = this.handleResize.bind(this);
      window.addEventListener('resize', this.handleResize);
    }

    handleResize() {
      // Debounce resize events
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(() => {
        this.calculateShortTextHeight();

        // If the text is not expanded, update its height to the new short text height
        if (!this.text.classList.contains("active")) {
          this.text.style.height = this.shortTextHeight + "px";
        }

        // Update the slider after resize
        setTimeout(() => {
          const benefitsComponent = this.closest("benefits-component");
          if (benefitsComponent) {
            benefitsComponent.forceUpdateSliderHeight();
          }
        }, 50);
      }, 250);
    }
  }
  window.customElements.define('show-button', ShowButton);
}

