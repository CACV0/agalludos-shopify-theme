/*
 * <tabs-scroller> — keeps the Nutritional section's tab row on one line.
 *
 * The Information blocks render [tab-head] and [tab-body] as interleaved siblings
 * (content_for 'blocks'), so the heads can't be grouped in Liquid — this element moves
 * them into [tabs-scroll-track] on connect and drives the arrows (desktop only).
 *
 * Tab changing is tap-only; below desktop the track drag-scrolls. Switching stays with
 * the shared <tabs-toggle> (base.js) — moving a node keeps its listeners.
 */
class TabsScroller extends HTMLElement {
  constructor() {
    super();

    this.track = this.querySelector('[tabs-scroll-track]');
    this.prevButton = this.querySelector('[tabs-scroll-prev]');
    this.nextButton = this.querySelector('[tabs-scroll-next]');

    this._updateArrows = this._updateArrows.bind(this);
    this._scrollToPrev = this._scrollByPage.bind(this, -1);
    this._scrollToNext = this._scrollByPage.bind(this, 1);
  }

  connectedCallback() {
    if (!this.track) return;

    this._collectTabs();

    if (this.prevButton) this.prevButton.addEventListener('click', this._scrollToPrev);
    if (this.nextButton) this.nextButton.addEventListener('click', this._scrollToNext);
    this.track.addEventListener('scroll', this._updateArrows);

    // Re-measure on container resize / font load — overflow depends on both
    if ('ResizeObserver' in window) {
      this._resizeObserver = new ResizeObserver(this._updateArrows);
      this._resizeObserver.observe(this.track);
    } else {
      window.addEventListener('resize', this._updateArrows);
    }

    // The editor can re-render a block, dropping its head back outside the track
    if (window.Shopify && Shopify.designMode) {
      const tabsToggle = this.closest('tabs-toggle');

      if (tabsToggle) {
        this._blockObserver = new MutationObserver(() => {
          this._collectTabs();
          this._updateArrows();
        });
        this._blockObserver.observe(tabsToggle, { childList: true });
      }
    }

    this._updateArrows();
  }

  disconnectedCallback() {
    if (this._resizeObserver) this._resizeObserver.disconnect();
    if (this._blockObserver) this._blockObserver.disconnect();
    window.removeEventListener('resize', this._updateArrows);
  }

  /* Move the heads into the track. Ones already there are skipped, so re-running
     this after an editor re-render never reorders the tabs. */
  _collectTabs() {
    const tabsToggle = this.closest('tabs-toggle');
    if (!tabsToggle) return;

    tabsToggle.querySelectorAll('[tab-head]').forEach((tab) => {
      if (tab.parentElement !== this.track) this.track.appendChild(tab);
    });
  }

  /* Scroll roughly one visible page. RTL flips the physical direction. */
  _scrollByPage(direction) {
    const isRtl = getComputedStyle(this).direction === 'rtl';
    const page = this.track.clientWidth * 0.8 * direction;

    this.track.scrollBy({ left: isRtl ? -page : page, behavior: 'smooth' });
  }

  /* Flag overflow (CSS shows the arrows) and disable each at its end.
     scrollLeft goes negative in RTL, hence the abs(). */
  _updateArrows() {
    const maxScroll = this.track.scrollWidth - this.track.clientWidth;
    const position = Math.abs(this.track.scrollLeft);
    const isScrollable = maxScroll > 1;

    this.classList.toggle('nutritional-tabs__bar--scrollable', isScrollable);

    if (this.prevButton) this.prevButton.disabled = !isScrollable || position <= 1;
    if (this.nextButton) this.nextButton.disabled = !isScrollable || position >= maxScroll - 1;
  }
}

customElements.get('tabs-scroller') || customElements.define('tabs-scroller', TabsScroller);
