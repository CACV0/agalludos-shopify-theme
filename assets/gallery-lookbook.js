/* The section renders this file's <script> tag, so a page holding two Gallery Lookbook sections —
   or an editor re-render — parses it a second time. Top-level `class`/`const` declarations throw
   "Identifier 'LookbookPopup' has already been declared" on that second parse, which kills the
   whole file, and the document-level listeners at the bottom would otherwise stack up and fire
   twice per click. The custom element registration is the run-once flag: it can only succeed once. */
if (!window.customElements.get('lookbook-popup')) {
  class LookbookPopup extends Drawer {
    constructor() {
      super();
    }

    connectedCallback() {
      if (this.parentElement !== document.body) {
        this._closeAndRemoveStalePortals();
        document.body.appendChild(this);
      } else {
        // Now at body level — enable full styles, but only once the stylesheet is applied
        this._whenSectionStylesReady(() => this.classList.add('lookbook-popup--ready'));
      }
    }

    /* Waits for section-gallery-lookbook.css, which holds every popup style.
       The editor re-injects that <link> with the section on each re-render, and it applies
       asynchronously — so adding --ready too early drops the inline hide rule before the real styles
       land, and the dialog flashes unstyled on the page. link.sheet is null until a <link> is
       applied, so that is the signal. Storefront is unaffected: deferred scripts already wait. */
    _whenSectionStylesReady(callback) {
      // Check every copy — another gallery section's <link> may be the pending one.
      const pending = [...document.querySelectorAll('link[href*="section-gallery-lookbook"]')].filter(
        (link) => !link.sheet
      );

      if (!pending.length) {
        callback();
        return;
      }

      let remaining = pending.length;
      const done = () => {
        if (--remaining === 0) callback();
      };

      pending.forEach((link) => {
        link.addEventListener('load', done, { once: true });
        // A stylesheet that fails to load would otherwise leave the popup permanently unopenable.
        link.addEventListener('error', done, { once: true });
      });
    }

    _handle_ShowDrawer_Action(e) {
      super._handle_ShowDrawer_Action(e);

      // super bails on a mismatched drawer-type / disconnected node; mirror both before touching
      // anything outside this popup.
      if (!this.isConnected || e.detail.drawerType !== this.drawerType) return;

      this._pauseOutsideVideos();

      // Later than Drawer's own 100ms open step, so isDrawerOpen is already true and the guard in
      // initLookbookPlayers lets this play through.
      setTimeout(() => this._playOwnVideo(), 150);
    }

    /* With autoplay on, the popup's video is driven by the in-view trigger — which fires exactly
       once, because the popup is a fixed full-viewport element whether it is open or closed. Closing
       pauses the video, nothing ever re-fires the trigger, and autoplay renders no play button, so
       from the second open on the media sits frozen. Start it here instead, on every open. */
    _playOwnVideo() {
      const player = this.querySelector('reel-feed-player[media-autoplay]');
      if (!player || !this.isDrawerOpen) return;

      player._resetVideo?.();
      player._renderMedia?.();
    }

    _handle_HideDrawer_Action(e) {
      // super returns early when the popup is already closed, so read the state before calling it —
      // otherwise a stray hide event would pause a video this popup does not own.
      const wasOpen = this.isDrawerOpen;

      super._handle_HideDrawer_Action(e);

      if (wasOpen) {
        // Pause popup video when the drawer closes
        const videoPlayer = this.querySelector('reel-feed-player');
        if (videoPlayer?._pause) videoPlayer._pause();
      }

      /* Deliberately runs even when this popup was already closed. Drawer's hide handler is not
         filtered by drawer-type, so every close on the page reaches here — and that is the only
         signal available when the popup was closed by a drawer opening over it (quick view). The
         videos it paused stay paused for as long as that drawer covers the page, so its close is
         what has to release them. Cheap when there is nothing to put back. */
      this._scheduleResumeOutsideVideos();
    }

    /* A popup opening over a playing card leaves that video running behind it — audio included.
       Pause everything playing outside this popup and remember it, so closing puts it back. */
    _pauseOutsideVideos() {
      // A resume queued by a previous close must not land now that the popup is opening again.
      clearTimeout(this._resumeTimer);

      this._pausedOutside = [...document.querySelectorAll('reel-feed-player')].filter(
        (player) => !this.contains(player) && player.getAttribute('video-playing') === 'true'
      );

      this._pausedOutside.forEach((player) => player._pause?.());
    }

    /* Whatever closed this popup may have been another overlay opening on top of it, and Drawer sets
       isDrawerOpen on that overlay only *after* it has closed this one — so at this point the takeover
       is not visible yet and the page looks free. Decide a tick later, once the DOM has settled. */
    _scheduleResumeOutsideVideos() {
      if (!this._pausedOutside?.length) return;

      clearTimeout(this._resumeTimer);
      this._resumeTimer = setTimeout(() => this._resumeOutsideVideos(), 200);
    }

    _resumeOutsideVideos() {
      /* Anything still covering the page — a second card's popup, quick view, the cart drawer — means
         resuming would play video behind an overlay, sound included, which is exactly what the pause
         was for. Keep the list instead of dropping it: the overlay's own close comes back through
         _handle_HideDrawer_Action and retries this. */
      const overlayOpen = [
        ...document.querySelectorAll('lookbook-popup, drawer-component, cart-drawer-component'),
      ].some((el) => el.isDrawerOpen);

      if (overlayOpen) return;

      this._pausedOutside?.forEach((player) => {
        // Only resume what is still on the page and still paused — the shopper may have started
        // something else through the popup.
        if (player.isConnected && player.getAttribute('video-playing') !== 'true') player._play?.();
      });

      this._pausedOutside = [];
    }

    // Matches the _closeAndRemoveStaleDrawers pattern used in section-shoppable-feed.js
    _closeAndRemoveStalePortals() {
      const drawerType = this.getAttribute('drawer-type');
      document.querySelectorAll(`lookbook-popup[drawer-type="${drawerType}"]`).forEach((el) => {
        if (el === this) return;
        el.removePortal();
      });
      HELPER_UTIL.bodyInteractions.enableScroll();
    }

    // Close, then drop this copy. Closing first matters: Drawer keeps body scroll locked while
    // isDrawerOpen is true, and a removed element never runs its own hide handler.
    removePortal() {
      this.classList.remove('drawer-active');
      this.isDrawerOpen = false;
      this.remove();
    }
  }

  customElements.define('lookbook-popup', LookbookPopup);

  // A popup portaled to <body> outlives its section. Turning "Show popup" off re-renders the
  // section with no <lookbook-popup> in it, so nothing connects to clear the copy already on
  // <body> and it sits there still open in the editor — only the setting disappears. The editor
  // fires section:unload just before it swaps the old markup out (and on delete), which is the
  // one hook that catches a re-render that renders no popup at all.
  document.addEventListener('shopify:section:unload', (e) => {
    const sectionId = e.detail?.sectionId;
    if (!sectionId) return;

    const popups = document.querySelectorAll(`lookbook-popup[data-section-id="${sectionId}"]`);
    if (!popups.length) return;

    popups.forEach((popup) => popup.removePortal());

    HELPER_UTIL.bodyInteractions.enableScroll();
  });

  /*
   * Lookbook video players.
   *
   * The shared player hides the cover the moment play is *requested* and marks the player as playing
   * straight after, without waiting for a frame — and its play() rejection is swallowed. In this
   * section the sources are only fetched on that first play, so both gaps are visible: the cover
   * disappears into a blank box while the file downloads, and a refused play (browsers block
   * un-muted playback outside a gesture) leaves the card stuck with no play button to retry from.
   *
   * Both are handled here rather than in players.js, which every other section shares.
   */
  // Always scanned from the document: the popups are portaled to <body>, so they sit outside the
  // section element the editor hands back on re-render. Re-running is cheap — bound players are skipped.
  const initLookbookPlayers = () => {
    document.querySelectorAll('.gallery-lookbook reel-feed-player, lookbook-popup reel-feed-player').forEach((player) => {
      if (player.dataset.lookbookPlayerBound) return;
      player.dataset.lookbookPlayerBound = 'true';

      const video = player.player;
      if (!video) return;

      /* First *painted* frame — until then CSS keeps the cover over the video.
         `playing` only means playback has resumed: the browser fires it before the first frame is
         composited, so dropping the cover there still flashes a blank box. requestVideoFrameCallback
         fires with a frame ready for display, and the timeupdate fallback (Firefox) can only run
         once currentTime has advanced, which means a frame is already on screen. */
      const markFramePainted = () => player.classList.add('video-has-frame');

      if (typeof video.requestVideoFrameCallback === 'function') {
        video.requestVideoFrameCallback(markFramePainted);
      } else {
        const onFirstTimeUpdate = () => {
          if (video.currentTime <= 0) return;
          video.removeEventListener('timeupdate', onFirstTimeUpdate);
          markFramePainted();
        };
        video.addEventListener('timeupdate', onFirstTimeUpdate);
      }

      // A closed popup still fills the viewport, so an autoplay player inside one is "in view" from
      // page load and starts streaming behind the closed dialog. Hold it until the popup is open —
      // LookbookPopup starts it there.
      const popup = player.closest('lookbook-popup');
      if (popup) {
        video.addEventListener('play', () => {
          if (!popup.isDrawerOpen) player._pause?.();
        });
      }

      // Runs after the player's own [play-media] handler, so playback has already been requested.
      // Calling play() again is harmless and hands back a promise we can actually act on.
      player.addEventListener('click', (e) => {
        if (!e.target.closest('[play-media]')) return;

        video.play()?.catch(() => {
          // Un-muted playback refused — the shopper still asked for this video, so play it muted
          // and flip the audio control to match rather than failing silently.
          video.muted = true;
          player.audioEl?.setAttribute('audio-state', 'mute');

          video.play()?.catch(() => {
            // Nothing left to try (bad source, decode error) — put the cover and play button back
            // so the card is not stuck on a blank frame.
            player._pause?.();
          });
        });
      });
    });
  };

  document.addEventListener('DOMContentLoaded', initLookbookPlayers);
  document.addEventListener('shopify:section:load', initLookbookPlayers);

  /* Copy the trigger's <template> into the section's single popup shell.
   *
   * The section renders one <lookbook-popup> and every card carries its own body — media column plus
   * product column — in an inert <template> on its trigger. Filling the shell here rather than in the
   * popup's own showDrawer handler keeps the order deterministic: the content is in place before the
   * open animation and before _playOwnVideo runs 150ms later.
   *
   * Returns false when anything is missing, which stops the open — an empty dialog is worse than no
   * dialog. Matches the template-into-drawer swap in slider.js (quiz support guide).
   */
  const fillLookbookPopup = (trigger, drawerType) => {
    // The shell portals itself to <body>, so it is never inside the section by the time this runs.
    const popup = document.querySelector(`lookbook-popup[drawer-type="${drawerType}"]`);
    const template = trigger.querySelector('template[lookbook-popup-content]');
    const target = popup?.querySelector('[lookbook-popup-content]');
    if (!popup || !template || !target) return false;

    // Re-opening the same card: leave the content alone. Rebuilding it would restart the video and
    // re-fetch every product card image on each open.
    // Guarded on blockId: without it both sides read undefined, the rebuild is skipped and the
    // popup opens empty.
    const blockId = trigger.dataset.lookbookBlock;
    if (blockId && target.dataset.lookbookBlock === blockId) return true;

    // Pause before dropping the old card: removing a <video> from the DOM does not stop it, so its
    // audio would keep playing under the newly opened popup.
    target.querySelectorAll('video').forEach((video) => video.pause());

    target.innerHTML = '';
    target.appendChild(template.content.cloneNode(true));
    target.dataset.lookbookBlock = blockId;

    // The clone upgrades its custom elements as it is inserted, but the loading-state and
    // play-retry listeners live here — bind them on the fresh nodes.
    initLookbookPlayers();

    return true;
  };

  // Handle gallery icon clicks
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[gallery-popup-trigger]');
    if (!btn) return;
    const drawerType = btn.getAttribute('gallery-popup-trigger');
    if (!drawerType) return;
    if (!fillLookbookPopup(btn, drawerType)) return;
    window.currentActiveElement = document.activeElement;
    HELPER_UTIL.dispatchCustomEvent(_EVENT_HELPER.showDrawer, btn, {
      drawerType: drawerType,
    });
  });

  /* Mute every lookbook player except the one just unmuted. The cached audioState / playMuteVideo
     have to move too, or the next _play() re-applies the old choice and the sound comes back. */
  const muteLookbookPlayersExcept = (current) => {
    document
      .querySelectorAll('.gallery-lookbook reel-feed-player, lookbook-popup reel-feed-player')
      .forEach((player) => {
        if (player === current) return;

        const audioEl = player.querySelector('[audio-state]');
        if (!audioEl || audioEl.getAttribute('audio-state') !== 'unmute') return;

        audioEl.setAttribute('audio-state', 'mute');
        player.audioState = 'mute';
        player.playMuteVideo = true;
        if (player.player) player.player.muted = true;
      });
  };

  // FeedPlayer.handleAudioState only writes the shopper's choice back to audioState/playMuteVideo
  // for UGC players (isUGCContext). Everywhere else the cached values survive, and the next _play()
  // re-applies them — re-muting the video and reverting the icon. Mirror the choice onto the player
  // so an unmute sticks. Runs on bubble, after FeedPlayer's own handler has flipped the attribute.
  document.addEventListener('click', (e) => {
    const audioEl = e.target.closest('[audio-state]');
    if (!audioEl) return;

    const player = audioEl.closest('reel-feed-player');
    if (!player || !player.closest('.gallery-lookbook, lookbook-popup')) return;

    const state = audioEl.getAttribute('audio-state');
    player.audioState = state;
    player.playMuteVideo = state === 'mute';

    // Sound is exclusive. With autoplay on, every card plays at once, so unmuting a second video
    // would stack two soundtracks — mute whichever one was carrying the audio before.
    // ('unmute' on the control means this video now HAS sound; the icon offers the opposite action.)
    if (state !== 'unmute') return;

    muteLookbookPlayersExcept(player);
  });
}
