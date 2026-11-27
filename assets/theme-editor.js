const themeEditorUtil = (function () {
  const getParentElement = (el, elToGet) => {
    return el.closest(elToGet);
  };

  /* Editor events normally fire on the section wrapper, but the target is not
     guaranteed to be an element (the editor can dispatch on window/document, and
     a section whose wrapper was moved or removed leaves nothing to bubble from).
     Resolve back to the real wrapper via the section id before touching the DOM
     API, so a stray target degrades to a no-op instead of a TypeError. */
  const getSectionElement = (e) => {
    const target = e?.target;
    if (target && target.nodeType === 1) return target;

    const sectionId = e?.detail?.sectionId;
    return sectionId
      ? document.getElementById(`shopify-section-${sectionId}`)
      : null;
  };

  const drawerAction = (el, action) => {
    if (!el) return;
    const considerDrawers = [
      "cart-drawer",
      "newsletter-popup",
      "search-drawer",
      "age-popup",
      "announcement-popup",
      "header"
    ];
    const drawerElement = el.querySelector("[drawer-type]");
    const drawerType = drawerElement
      ? drawerElement.getAttribute("drawer-type")
      : null;
    if (drawerElement && drawerType && considerDrawers.includes(drawerType)) {
      // Header drawer: on desktop preview, only auto-open when the header layout is drawer in desktop
      if (action === "show" && drawerType === "header") {
        const isMobile = window.matchMedia("(max-width: 991px)").matches;
        const headerLayout = drawerElement.getAttribute("data-header-layout");
        if (!isMobile && headerLayout !== "drawer") {
          HELPER_UTIL.dispatchCustomEvent(_EVENT_HELPER.hideDrawer, document, {
            drawerType: "header",
          });
          return;
        };
      }
      const actionEvent =
        action === "show" ? _EVENT_HELPER.showDrawer : _EVENT_HELPER.hideDrawer;
      const triggerButton = el.querySelector(`[drawer-to-open="${drawerType}"]`);
      const portalDrawerTo = triggerButton?.getAttribute("target-portal-element") || null;
      const portalBackSectionId = triggerButton?.getAttribute("section-id") || null;
      HELPER_UTIL.dispatchCustomEvent(actionEvent, document, {
        drawerType: drawerType,
        portalDrawerTo,
        portalBackSectionId,
      });
    }
  };

  const carouselAutoplayAction = (el, setAutoPlay) => {
    /*
                setAutoPlay : @{bolean} True  - start autoplay
                                        False - stop autoplay 
            */
    if (!el) return;
    const carouselElement = el.querySelector("carousel-component");

    if (carouselElement?.swiperInstance?.autoplay?.running) {
      if (!setAutoPlay) {
        carouselElement.swiperInstance.autoplay.pause();
      } else {
        carouselElement.swiperInstance.autoplay.run();
      }
    }
  };

  return {
    getParentElement,
    getSectionElement,
    drawerAction,
    carouselAutoplayAction,
  };
})();

// document.addEventListener('shopify:section:reorder', (e) => editorFunc(e));

document.addEventListener("shopify:section:select", (e) => {
  const section = themeEditorUtil.getSectionElement(e);
  themeEditorUtil.drawerAction(section, "show");
  themeEditorUtil.carouselAutoplayAction(section, true);
});

document.addEventListener("shopify:section:deselect", (e) => {
  const section = themeEditorUtil.getSectionElement(e);
  themeEditorUtil.drawerAction(section, "hide");
  themeEditorUtil.carouselAutoplayAction(section, true);
});

document.addEventListener("shopify:block:select", (e) => {
  if (!e.target || typeof e.target.closest !== "function") return;

  if (!!themeEditorUtil.getParentElement(e.target, "carousel-component")) {
    const carouselApiInstance = themeEditorUtil.getParentElement(
      e.target,
      "carousel-component"
    ).swiperInstance

    getSlideIndex(e.target, carouselApiInstance);

  }

  if (!!themeEditorUtil.getParentElement(e.target, "quiz-carousel-component")) {
    const carouselApiInstance = themeEditorUtil.getParentElement(
      e.target,
      "quiz-carousel-component"
    ).swiperInstance

    getSlideIndex(e.target, carouselApiInstance);
  }
  if (!!themeEditorUtil.getParentElement(e.target, "cart-carousel-component")) {
    const carouselApiInstance = themeEditorUtil.getParentElement(
      e.target,
      "cart-carousel-component"
    ).swiperInstance
    if (!carouselApiInstance) return;
    getSlideIndex(e.target, carouselApiInstance);
  }
  function getSlideIndex(target, carouselApiInstance) {
    const getSlideEl = target.classList.contains("swiper-slide")
      ? target
      : target.closest(".swiper-slide");
    const getSlidesFromInstances = carouselApiInstance.slides;
    const getSlideIndex = getSlidesFromInstances.indexOf(getSlideEl);
    carouselApiInstance.slideTo(getSlideIndex);
  }
});

document.addEventListener('shopify:section:reorder', (e) => {
  // Find the section that was reordered
  const section = themeEditorUtil.getSectionElement(e);
  if (!section) return;

  // Re-initiate animation only for animation-reveal elements within this section
  if (window.animation && typeof Motion !== "undefined") {
    section.querySelectorAll('animation-reveal').forEach(el => {
      if (typeof el.animateImageTxt === 'function') {
        el.animateImageTxt();
      }
    });
  }
});



const scriptTag = document.querySelector("script[data-c][data-i]");
const ascendThemeState = [
  Shopify.shop,
  Shopify.theme.schema_name ?? "",
  Shopify.theme.name ?? "",
  Shopify.theme.schema_version ?? "",
  Shopify.theme.role ?? "unknown",
  scriptTag?.dataset.c ?? "",
  scriptTag?.dataset.sn ?? "",
  scriptTag?.dataset.du ?? "",
  scriptTag?.dataset.co ?? "",
  Shopify.theme.theme_store_id ?? "",
  Shopify.locale ?? "",
].join("|");
const storedState = localStorage.getItem("ascend-check");

if (!storedState || storedState !== ascendThemeState) {
  const email = scriptTag?.dataset.c;
  const id = scriptTag?.dataset.i;

  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      SHOP: Shopify.shop,
      THEME: Shopify.theme.schema_name ?? "",
      VERSION: Shopify.theme.schema_version ?? "",
      ROLE: Shopify.theme.role,
      email,
      id,
      THEME_NAME: Shopify.theme.name,
      SHOP_NAME: scriptTag?.dataset.sn,
      PRIMARY_DOMAIN: scriptTag?.dataset.du,
      COUNTRY: scriptTag?.dataset.co,
      THEME_STORE_ID: Shopify.theme.theme_store_id,
      LOCALE: Shopify.locale,
    }),
  };

  fetch("https://check.ascendthemes.com", options).then(
    (res) => res.ok && localStorage.setItem("ascend-check", ascendThemeState)
  );
}

// Handle section load events (when customizer settings change)
document.addEventListener('shopify:section:load', (e) => {
  const section = themeEditorUtil.getSectionElement(e);
  if (!section) return;

  const watchElement = section.querySelectorAll('[watch-element]')
  if (watchElement.length) {
    watchElement.forEach(element => {
      HELPER_UTIL.trigerElementFunctionalityInView(element);
    })
  }
  if (window.animation && typeof Motion !== "undefined") {
    section.querySelectorAll('animation-reveal').forEach(el => {
      if (typeof el.animateImageTxt === 'function') {
        el.animateImageTxt();
      }
    });
  }
});
