/**
 * <infinite-scroll>
 * Replaces numbered pagination on collection & search pages.
 * Reads [data-next-url] for the next page URL, fetches the section via
 * Section Rendering API, and appends new product cards to the grid.
 */
class InfiniteScroll extends HTMLElement {
  constructor() {
    super();

    this.nextUrl = this.dataset.nextUrl || '';
    this.totalPages = parseInt(this.dataset.totalPages, 10) || 2;
    this.currentPage = parseInt(this.dataset.currentPage, 10) || 2;
    this.isLoading = false;
    this.observer = null;
    this.hasFailed = false;

    this.spinnerEl = this.querySelector('[data-infinite-spinner]');
    this.loadMoreBtn = this.querySelector('[data-infinite-load-more]');
    this.endMessageEl = this.querySelector('[data-infinite-end]');
    this.gridEl = document.querySelector('[products-grid-container]');
    this.sectionId = document.getElementById('collection-grid')?.dataset.id || null;
    
    this._onIntersect = this._onIntersect.bind(this);
    this._onLoadMoreClick = this._onLoadMoreClick.bind(this);
  }

  connectedCallback() {
    if (!this.nextUrl || !this.gridEl) {
      if (this.totalPages > 1 && this.currentPage >= this.totalPages) {
        this._showEnd();
      }
      return;
    }

    if (this.loadMoreBtn) {
      this.loadMoreBtn.addEventListener('click', this._onLoadMoreClick);
    }

    this._setupObserver();
  }

  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    if (this.loadMoreBtn) {
      this.loadMoreBtn.removeEventListener('click', this._onLoadMoreClick);
    }
  }

  _setupObserver() {
    if (!('IntersectionObserver' in window)) {
      this._showLoadMore();
      return;
    }
    this.observer = new IntersectionObserver(this._onIntersect, {
      root: document,
      rootMargin: '0px',
      threshold: 0.3,
    });
    this.observer.observe(this);
  }

  _onIntersect(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !this.isLoading && !this.hasFailed) {
        this._loadNext();
      }
    });
  }

  _onLoadMoreClick() {
    this.hasFailed = false;
    this._hideLoadMore();
    this._loadNext();
  }
  _loadNext() {
    if (!this.nextUrl || this.isLoading) return;
    this.isLoading = true;
    this._showSpinner();

    const url = this.sectionId
      ? `${this.nextUrl}${this.nextUrl.includes('?') ? '&' : '?'}section_id=${this.sectionId}`
      : this.nextUrl;

    HELPER_UTIL.fetchData({
      method: 'GET',
      url,
      responseType: 'text',
      onsuccess: (html) => {
        this._appendFromHtml(html);
      },
      onerror: () => {
        this.hasFailed = true;
        this._hideSpinner();
        this._showLoadMore();
      },
      defaultCb: () => {
        this.isLoading = false;
      },
    });
  }

  _appendFromHtml(html) {
    const doc = new DOMParser().parseFromString(html, 'text/html');

    const newGridWrapper = doc.querySelector('[grid-layout-container]');
    const newGrid = newGridWrapper?.querySelector('[products-grid-container]');

    if (newGrid && this.gridEl) {
      const fragment = document.createDocumentFragment();
      while (newGrid.firstChild) {
        fragment.appendChild(newGrid.firstChild);
      }
      this.gridEl.appendChild(fragment);

      this.gridEl.querySelectorAll('default-player').forEach((video) => {
        if (typeof video._renderMedia === 'function') video._renderMedia();
      });
    }

    const newInfinite = doc.querySelector('infinite-scroll');
    const nextUrl = newInfinite ? newInfinite.dataset.nextUrl || '' : '';
    const nextPage = newInfinite
      ? parseInt(newInfinite.dataset.currentPage, 10) || this.currentPage + 1
      : this.currentPage + 1;

    this.currentPage = nextPage;
    this.nextUrl = nextUrl;
    this.dataset.nextUrl = nextUrl;
    this.dataset.currentPage = String(nextPage);

    this._hideSpinner();

    if (!nextUrl) {
      if (this.observer) this.observer.disconnect();
      this._showEnd();
    }
  }

  _showSpinner() {
    if (this.spinnerEl) this.spinnerEl.hidden = false;
    if (this.loadMoreBtn) this.loadMoreBtn.hidden = true;
  }
  _hideSpinner() {
    if (this.spinnerEl) this.spinnerEl.hidden = true;
  }

  _showLoadMore() {
    if (this.loadMoreBtn) this.loadMoreBtn.hidden = false;
    if (this.spinnerEl) this.spinnerEl.hidden = true;
  }
  _hideLoadMore() {
    if (this.loadMoreBtn) this.loadMoreBtn.hidden = true;
  }

  _showEnd() {
    if (this.spinnerEl) this.spinnerEl.hidden = true;
    if (this.loadMoreBtn) this.loadMoreBtn.hidden = true;
    if (this.endMessageEl) this.endMessageEl.hidden = false;
  }
}

if (!customElements.get('infinite-scroll')) {
  customElements.define('infinite-scroll', InfiniteScroll);
}
