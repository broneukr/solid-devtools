// src/index.tsx
import { createComponent as _$createComponent12 } from "solid-js/web";

// src/ui/components/highlight/Highlight.tsx
import { template as _$template } from "solid-js/web";
import { setAttribute as _$setAttribute } from "solid-js/web";
import { className as _$className } from "solid-js/web";
import { effect as _$effect } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
import { clsx } from "clsx";

// src/ui/components/highlight/Highlight.css.ts
var container = "Highlight__2g2smp0";
var highlight = "Highlight_highlight__2g2smp5 Highlight__2g2smp3";
var highlighted = "Highlight_highlighted__2g2smp4";

// src/ui/components/highlight/Highlight.tsx
var _tmpl$ = /* @__PURE__ */ _$template(`<div><div></div></div>`, 4);
var Highlight = (props) => {
  return (() => {
    const _el$ = _tmpl$.cloneNode(true), _el$2 = _el$.firstChild;
    _$insert(_el$, () => props.children, null);
    _$effect((_p$) => {
      const _v$ = clsx(container, props.highlight && highlighted, props.class), _v$2 = highlight, _v$3 = props.isSignal;
      _v$ !== _p$._v$ && _$className(_el$, _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && _$className(_el$2, _p$._v$2 = _v$2);
      _v$3 !== _p$._v$3 && _$setAttribute(_el$2, "data-signal", _p$._v$3 = _v$3);
      return _p$;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0
    });
    return _el$;
  })();
};

// src/ui/components/splitter/Splitter.tsx
import { template as _$template2 } from "solid-js/web";
import { delegateEvents as _$delegateEvents } from "solid-js/web";
import { style as _$style } from "solid-js/web";
import { createComponent as _$createComponent } from "solid-js/web";
import { setAttribute as _$setAttribute2 } from "solid-js/web";
import { className as _$className2 } from "solid-js/web";
import { effect as _$effect2 } from "solid-js/web";
import { insert as _$insert2 } from "solid-js/web";
import { use as _$use } from "solid-js/web";
import { createComputed, children, createSignal, Show } from "solid-js";
import { makeEventListener } from "@solid-primitives/event-listener";
import { clamp } from "@solid-primitives/utils";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { createBodyCursor } from "@solid-primitives/cursor";
import { createMediaQuery } from "@solid-primitives/media";
import { scheduleIdle } from "@solid-primitives/scheduled";
import { getPositionInElement } from "@solid-primitives/mouse";

// src/ui/components/splitter/Splitter.css.ts
var container2 = "Splitter_container__l3wl9g1";
var content = "Splitter_content__l3wl9g2";
var progress = "var(--progress__l3wl9g0)";
var split = "Splitter_split__l3wl9g3";
var splitHandle = "Splitter_splitHandle__l3wl9g4";

// src/ui/components/splitter/Splitter.tsx
var _tmpl$2 = /* @__PURE__ */ _$template2(`<div><div></div></div>`, 4);
var _tmpl$22 = /* @__PURE__ */ _$template2(`<div></div>`, 2);
function Splitter(props) {
  const sideResolved = children(() => props.side);
  const [progress2, setProgress] = createSignal(0.6);
  const [dragging, setDragging] = createSignal(false);
  const isMobile = createMediaQuery("(max-width: 640px)");
  const isTouch = createMediaQuery("(hover: none)");
  createComputed(() => setProgress(isTouch() ? 0.5 : 0.6));
  const onPointerDown = (e) => {
    e.preventDefault();
    setDragging(!isTouch());
  };
  makeEventListener(window, "pointermove", scheduleIdle((e) => {
    if (!dragging())
      return;
    const toEl = getPositionInElement(e.pageX, e.pageY, container8);
    setProgress(clamp(isMobile() ? toEl.y / toEl.height : toEl.x / toEl.width, 0, 1));
  }));
  makeEventListener(window, "pointerup", setDragging.bind(void 0, false));
  createBodyCursor(() => dragging() && (isMobile() ? "row-resize" : "col-resize"));
  let container8;
  return (() => {
    const _el$ = _tmpl$2.cloneNode(true), _el$2 = _el$.firstChild;
    const _ref$ = container8;
    typeof _ref$ === "function" ? _$use(_ref$, _el$) : container8 = _el$;
    _$insert2(_el$2, () => props.children);
    _$insert2(_el$, _$createComponent(Show, {
      get when() {
        return sideResolved();
      },
      get children() {
        return [(() => {
          const _el$3 = _tmpl$2.cloneNode(true), _el$4 = _el$3.firstChild;
          _el$4.$$pointerdown = onPointerDown;
          _$effect2((_p$) => {
            const _v$ = split, _v$2 = splitHandle, _v$3 = dragging();
            _v$ !== _p$._v$ && _$className2(_el$3, _p$._v$ = _v$);
            _v$2 !== _p$._v$2 && _$className2(_el$4, _p$._v$2 = _v$2);
            _v$3 !== _p$._v$3 && _$setAttribute2(_el$4, "data-dragging", _p$._v$3 = _v$3);
            return _p$;
          }, {
            _v$: void 0,
            _v$2: void 0,
            _v$3: void 0
          });
          return _el$3;
        })(), (() => {
          const _el$5 = _tmpl$22.cloneNode(true);
          _$insert2(_el$5, sideResolved);
          _$effect2(() => _$className2(_el$5, content));
          return _el$5;
        })()];
      }
    }), null);
    _$effect2((_p$) => {
      const _v$4 = container2, _v$5 = !!sideResolved(), _v$6 = assignInlineVars({
        [progress]: progress2() * 100 + "%"
      }), _v$7 = content;
      _v$4 !== _p$._v$4 && _$className2(_el$, _p$._v$4 = _v$4);
      _v$5 !== _p$._v$5 && _$setAttribute2(_el$, "data-open", _p$._v$5 = _v$5);
      _p$._v$6 = _$style(_el$, _v$6, _p$._v$6);
      _v$7 !== _p$._v$7 && _$className2(_el$2, _p$._v$7 = _v$7);
      return _p$;
    }, {
      _v$4: void 0,
      _v$5: void 0,
      _v$6: void 0,
      _v$7: void 0
    });
    return _el$;
  })();
}
_$delegateEvents(["pointerdown"]);

// src/ui/components/scrollable/Scrollable.tsx
import { template as _$template3 } from "solid-js/web";
import { className as _$className3 } from "solid-js/web";
import { effect as _$effect3 } from "solid-js/web";
import { insert as _$insert3 } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";

// src/ui/components/scrollable/Scrollable.css.ts
var container3 = { normal: "Scrollable_containerBase__1sq57e10", space: "Scrollable_container_space__1sq57e12 Scrollable_containerBase__1sq57e10", dragging: "Scrollable_container_dragging__1sq57e13 Scrollable_containerBase__1sq57e10" };
var content2 = "Scrollable_content__1sq57e17";
var overlay = { normal: "Scrollable_overlay_normal__1sq57e15 Scrollable_overlayBase__1sq57e14", space: "Scrollable_overlay_space__1sq57e16 Scrollable_overlayBase__1sq57e14" };

// src/ui/components/scrollable/Scrollable.tsx
import { combineProps } from "@solid-primitives/props";
var _tmpl$3 = /* @__PURE__ */ _$template3(`<div><div></div><div></div></div>`, 6);
var Scrollable = (props) => {
  const containerProps = combineProps(props, {
    get class() {
      return container3.normal;
    }
  });
  return (() => {
    const _el$ = _tmpl$3.cloneNode(true), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling;
    _$spread(_el$, containerProps, false, true);
    _$insert3(_el$3, () => props.children);
    _$effect3((_p$) => {
      const _v$ = overlay.normal, _v$2 = content2;
      _v$ !== _p$._v$ && _$className3(_el$2, _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && _$className3(_el$3, _p$._v$2 = _v$2);
      return _p$;
    }, {
      _v$: void 0,
      _v$2: void 0
    });
    return _el$;
  })();
};

// src/ui/components/button/Button.tsx
import { template as _$template4 } from "solid-js/web";
import { delegateEvents as _$delegateEvents2 } from "solid-js/web";
import { setAttribute as _$setAttribute3 } from "solid-js/web";
import { className as _$className4 } from "solid-js/web";
import { effect as _$effect4 } from "solid-js/web";
import { insert as _$insert4 } from "solid-js/web";
import { createComponent as _$createComponent2 } from "solid-js/web";
import { addEventListener as _$addEventListener } from "solid-js/web";
import { spread as _$spread2 } from "solid-js/web";
import { combineProps as combineProps2 } from "@solid-primitives/props";

// src/ui/components/button/button.css.ts
var Collapse = { button: "button_button__ygz0wz6", defaultCollapsed: "button_defaultCollapsed__ygz0wz7", icon: "button_Collapse_icon__ygz0wz8" };
var toggleButton = "button_toggleButton__ygz0wz4";

// src/ui/components/button/Button.tsx
import clsx2 from "clsx";
var _tmpl$4 = /* @__PURE__ */ _$template4(`<button></button>`, 2);
var ToggleButton = (props) => {
  props = combineProps2(props, {
    class: toggleButton,
    get "aria-selected"() {
      return props.selected;
    },
    onClick: () => props.onToggle(!props.selected)
  });
  return (() => {
    const _el$ = _tmpl$4.cloneNode(true);
    _$spread2(_el$, props, false, false);
    return _el$;
  })();
};
var CollapseToggle = (props) => {
  return (() => {
    const _el$2 = _tmpl$4.cloneNode(true);
    _$addEventListener(_el$2, "click", props.onToggle && ((e) => {
      e.stopPropagation();
      props.onToggle(!props.isCollapsed);
    }), true);
    _$insert4(_el$2, _$createComponent2(Icon.Triangle, {
      get ["class"]() {
        return clsx2(Collapse.icon, props.iconClass);
      }
    }));
    _$effect4((_p$) => {
      const _v$ = clsx2(Collapse.button, props.class, {
        [Collapse.defaultCollapsed]: props.defaultCollapsed
      }), _v$2 = props.isCollapsed;
      _v$ !== _p$._v$ && _$className4(_el$2, _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && _$setAttribute3(_el$2, "aria-selected", _p$._v$2 = _v$2);
      return _p$;
    }, {
      _v$: void 0,
      _v$2: void 0
    });
    return _el$2;
  })();
};
_$delegateEvents2(["click"]);

// src/ui/components/badge/Badge.tsx
import { template as _$template5 } from "solid-js/web";
import { className as _$className5 } from "solid-js/web";
import { effect as _$effect5 } from "solid-js/web";
import { insert as _$insert5 } from "solid-js/web";

// src/ui/components/badge/badge.css.ts
var badge = "badge_badge__1wa3m110";

// src/ui/components/badge/Badge.tsx
var _tmpl$5 = /* @__PURE__ */ _$template5(`<div></div>`, 2);
var Badge = (props) => {
  return (() => {
    const _el$ = _tmpl$5.cloneNode(true);
    _$insert5(_el$, () => props.children);
    _$effect5(() => _$className5(_el$, badge));
    return _el$;
  })();
};

// src/ui/components/error-overlay/ErrorOverlay.tsx
import { template as _$template6 } from "solid-js/web";
import { delegateEvents as _$delegateEvents3 } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { className as _$className6 } from "solid-js/web";
import { effect as _$effect6 } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
import { insert as _$insert6 } from "solid-js/web";
import { createComponent as _$createComponent3 } from "solid-js/web";
import { addEventListener as _$addEventListener2 } from "solid-js/web";

// src/ui/components/error-overlay/HeadlessErrorOverlay.ts
import { makeEventListener as makeEventListener2 } from "@solid-primitives/event-listener";
import {
  batch,
  createComputed as createComputed2,
  createMemo,
  createSignal as createSignal2,
  ErrorBoundary,
  mergeProps,
  onError,
  Show as Show2,
  untrack
} from "solid-js";
function ErrorOverlayInternal(props) {
  const [currentPage, setCurrentPage] = createSignal2(1);
  const length = createMemo(() => props.errors.length);
  const currentError = createMemo(() => props.errors[currentPage() - 1]);
  createComputed2((currentLength) => {
    const newLength = length();
    if (currentLength < newLength) {
      setCurrentPage((current) => current + 1);
    }
    return newLength;
  }, length());
  function goPrev() {
    setCurrentPage((c) => {
      if (c > 1) {
        return c - 1;
      }
      return length();
    });
  }
  function goNext() {
    setCurrentPage((c) => {
      if (c < length()) {
        return c + 1;
      }
      return 1;
    });
  }
  const { render } = props;
  if (typeof render === "function") {
    return untrack(
      () => render({
        goPrev,
        goNext,
        resetError: props.resetError,
        get currentCount() {
          return currentPage();
        },
        get maxCount() {
          return length();
        },
        get error() {
          return currentError();
        }
      })
    );
  }
  return render;
}
var HeadlessErrorOverlay = (props) => {
  const [errors, setErrors] = createSignal2([]);
  const [fallback, setFallback] = createSignal2(false);
  function resetError() {
    setErrors([]);
    setFallback(false);
  }
  function pushError(error2) {
    props.onError?.(error2);
    setErrors((current) => [error2, ...current]);
  }
  props.catchWindowErrors && makeEventListener2(window, "error", pushError);
  onError(pushError);
  const errorOverlayInternalProps = {
    get errors() {
      return errors();
    },
    get render() {
      return props.render;
    },
    resetError
  };
  return [
    ErrorBoundary({
      fallback(err, reset) {
        batch(() => {
          setFallback(true);
          pushError(err);
        });
        return untrack(
          () => ErrorOverlayInternal(
            mergeProps(errorOverlayInternalProps, {
              resetError() {
                batch(() => {
                  resetError();
                  reset();
                });
              }
            })
          )
        );
      },
      get children() {
        return props.children;
      }
    }),
    Show2({
      get when() {
        return !fallback() && errors().length;
      },
      get children() {
        return untrack(() => ErrorOverlayInternal(errorOverlayInternalProps));
      }
    })
  ];
};

// src/ui/components/error-overlay/error-overlay.css.ts
var button = "error-overlay_button__1eu3l63b";
var container4 = { fixed: "error-overlay_container_fixed__1eu3l630", container: "error-overlay_container_container__1eu3l631", overlay: "error-overlay_container_overlay__1eu3l632", content: "error-overlay_container_content__1eu3l633" };
var content3 = { container: "error-overlay_content_container__1eu3l638", error: "error-overlay_content_error__1eu3l639", errorName: "error-overlay_content_errorName__1eu3l63a" };
var controls = "error-overlay_controls__1eu3l637";
var icon = "error-overlay_icon__1eu3l63c";
var navbar = "error-overlay_navbar__1eu3l634";
var pageCounter = "error-overlay_pageCounter__1eu3l636";
var pagination = "error-overlay_pagination__1eu3l635";

// src/ui/components/error-overlay/ErrorOverlay.tsx
var _tmpl$6 = /* @__PURE__ */ _$template6(`<div><div><div></div><div><div><div><button><span class="sr-only">Prev</span></button><button><span class="sr-only">Prev</span></button><span><span></span> of <span></span></span></div><div><button><span class="sr-only">Reset</span></button></div></div><div><span><span></span>: </span></div></div></div></div>`, 38);
var _tmpl$23 = /* @__PURE__ */ _$template6(`<div></div>`, 2);
var RenderErrorOverlay = (props) => (() => {
  const _el$ = _tmpl$6.cloneNode(true), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling, _el$5 = _el$4.firstChild, _el$6 = _el$5.firstChild, _el$7 = _el$6.firstChild, _el$8 = _el$7.firstChild, _el$9 = _el$7.nextSibling, _el$10 = _el$9.firstChild, _el$11 = _el$9.nextSibling, _el$12 = _el$11.firstChild, _el$13 = _el$12.nextSibling, _el$14 = _el$13.nextSibling, _el$15 = _el$6.nextSibling, _el$16 = _el$15.firstChild, _el$17 = _el$16.firstChild, _el$18 = _el$5.nextSibling, _el$19 = _el$18.firstChild, _el$20 = _el$19.firstChild, _el$21 = _el$20.nextSibling;
  _$addEventListener2(_el$7, "click", props.goPrev, true);
  _$insert6(_el$7, _$createComponent3(Icon.ArrowLeft, {
    get ["class"]() {
      return icon;
    }
  }), null);
  _$addEventListener2(_el$9, "click", props.goNext, true);
  _$insert6(_el$9, _$createComponent3(Icon.ArrowRight, {
    get ["class"]() {
      return icon;
    }
  }), null);
  _$insert6(_el$12, () => props.currentCount);
  _$insert6(_el$14, () => props.maxCount);
  _$addEventListener2(_el$16, "click", props.resetError, true);
  _$insert6(_el$16, _$createComponent3(Icon.Refresh, {
    get ["class"]() {
      return icon;
    }
  }), null);
  _$insert6(_el$20, () => props.error instanceof Error ? props.error.name : "UnknownError");
  _$insert6(_el$19, (() => {
    const _c$ = _$memo(() => props.error instanceof Error);
    return () => _c$() ? props.error.message : String(props.error);
  })(), null);
  _$insert6(_el$18, (() => {
    const _c$2 = _$memo(() => !!props.footer);
    return () => _c$2() && (() => {
      const _el$22 = _tmpl$23.cloneNode(true);
      _$insert6(_el$22, () => props.footer);
      return _el$22;
    })();
  })(), null);
  _$effect6((_p$) => {
    const _v$ = container4.fixed, _v$2 = container4.container, _v$3 = container4.overlay, _v$4 = container4.content, _v$5 = navbar, _v$6 = pagination, _v$7 = button, _v$8 = button, _v$9 = pageCounter, _v$10 = controls, _v$11 = button, _v$12 = content3.container, _v$13 = content3.error, _v$14 = content3.errorName;
    _v$ !== _p$._v$ && _$className6(_el$, _p$._v$ = _v$);
    _v$2 !== _p$._v$2 && _$className6(_el$2, _p$._v$2 = _v$2);
    _v$3 !== _p$._v$3 && _$className6(_el$3, _p$._v$3 = _v$3);
    _v$4 !== _p$._v$4 && _$className6(_el$4, _p$._v$4 = _v$4);
    _v$5 !== _p$._v$5 && _$className6(_el$5, _p$._v$5 = _v$5);
    _v$6 !== _p$._v$6 && _$className6(_el$6, _p$._v$6 = _v$6);
    _v$7 !== _p$._v$7 && _$className6(_el$7, _p$._v$7 = _v$7);
    _v$8 !== _p$._v$8 && _$className6(_el$9, _p$._v$8 = _v$8);
    _v$9 !== _p$._v$9 && _$className6(_el$11, _p$._v$9 = _v$9);
    _v$10 !== _p$._v$10 && _$className6(_el$15, _p$._v$10 = _v$10);
    _v$11 !== _p$._v$11 && _$className6(_el$16, _p$._v$11 = _v$11);
    _v$12 !== _p$._v$12 && _$className6(_el$18, _p$._v$12 = _v$12);
    _v$13 !== _p$._v$13 && _$className6(_el$19, _p$._v$13 = _v$13);
    _v$14 !== _p$._v$14 && _$className6(_el$20, _p$._v$14 = _v$14);
    return _p$;
  }, {
    _v$: void 0,
    _v$2: void 0,
    _v$3: void 0,
    _v$4: void 0,
    _v$5: void 0,
    _v$6: void 0,
    _v$7: void 0,
    _v$8: void 0,
    _v$9: void 0,
    _v$10: void 0,
    _v$11: void 0,
    _v$12: void 0,
    _v$13: void 0,
    _v$14: void 0
  });
  return _el$;
})();
var ErrorOverlay = (props) => {
  return _$createComponent3(
    HeadlessErrorOverlay,
    {
      onError: (e) => console.error(e),
      render: (overlayProps) => _$createComponent3(RenderErrorOverlay, _$mergeProps(overlayProps, {
        get footer() {
          return props.footer;
        }
      })),
      get catchWindowErrors() {
        return props.catchWindowErrors;
      },
      get children() {
        return props.children;
      }
    }
  );
};
_$delegateEvents3(["click"]);

// src/ui/icons/index.tsx
import { template as _$template7 } from "solid-js/web";
import { createComponent as _$createComponent4 } from "solid-js/web";
import { insert as _$insert7 } from "solid-js/web";
import { effect as _$effect7 } from "solid-js/web";
import { setAttribute as _$setAttribute4 } from "solid-js/web";
var _tmpl$7 = /* @__PURE__ */ _$template7(`<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M40 128h176"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M144 56l72 72-72 72"></path></svg>`, 6);
var _tmpl$24 = /* @__PURE__ */ _$template7(`<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M216 128H40"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M112 56l-72 72 72 72"></path></svg>`, 6);
var _tmpl$32 = /* @__PURE__ */ _$template7(`<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M96 48l80 80-80 80"></path></svg>`, 4);
var _tmpl$42 = /* @__PURE__ */ _$template7(`<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M128 56c-80 0-112 72-112 72s32 72 112 72 112-72 112-72-32-72-112-72zm0 112a40 40 0 1 1 40-40 40 40 0 0 1-40 40z" opacity="0.2" fill="currentColor"></path><path d="M128 56c-80 0-112 72-112 72s32 72 112 72 112-72 112-72-32-72-112-72z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><circle cx="128" cy="128" r="40" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle></svg>`, 8);
var _tmpl$52 = /* @__PURE__ */ _$template7(`<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M128 56c-80 0-112 72-112 72s32 72 112 72 112-72 112-72-32-72-112-72zm0 112a40 40 0 1 1 40-40 40 40 0 0 1-40 40z" opacity="0.2" fill="currentColor"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M48 40l160 176"></path><path d="M154.9 157.6A39.6 39.6 0 0 1 128 168a40 40 0 0 1-26.9-69.6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M74 68.6C33.2 89.2 16 128 16 128s32 72 112 72a117.9 117.9 0 0 0 54-12.6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M208.6 169.1C230.4 149.6 240 128 240 128s-32-72-112-72a123.9 123.9 0 0 0-20.7 1.7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M135.5 88.7a39.9 39.9 0 0 1 32.3 35.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`, 14);
var _tmpl$62 = /* @__PURE__ */ _$template7(`<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M176.2 99.7h48v-48"></path><path d="M190.2 190.2a88 88 0 1 1 0-124.4l34 33.9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`, 6);
var _tmpl$72 = /* @__PURE__ */ _$template7(`<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><circle cx="128" cy="128" r="32" opacity="0.2" fill="currentColor"></circle><circle cx="128" cy="128" r="88" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 20v40"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M20 128h40"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 236v-40"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M236 128h-40"></path><circle cx="128" cy="128" r="32" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle></svg>`, 16);
var _tmpl$8 = /* @__PURE__ */ _$template7(`<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><circle cx="128" cy="128" opacity="0.2" fill="currentColor"></circle><circle cx="128" cy="48" opacity="0.2" fill="currentColor"></circle><circle cx="128" cy="208" opacity="0.2" fill="currentColor"></circle><circle cx="128" cy="128" r="24" stroke="currentColor" stroke-miterlimit="10" stroke-width="16"></circle><circle cx="128" cy="48" r="24" stroke="currentColor" stroke-miterlimit="10" stroke-width="16"></circle><circle cx="128" cy="208" r="24" stroke="currentColor" stroke-miterlimit="10" stroke-width="16"></circle></svg>`, 14);
var _tmpl$9 = /* @__PURE__ */ _$template7(`<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M200 56L56 200"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M200 200L56 56"></path></svg>`, 6);
var _tmpl$10 = /* @__PURE__ */ _$template7(`<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M236.7 188L148.8 36a24 24 0 0 0-41.6 0L19.3 188A23.9 23.9 0 0 0 40 224h176a23.9 23.9 0 0 0 20.7-36z"></path></svg>`, 4);
var _tmpl$11 = /* @__PURE__ */ _$template7(`<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M213.4 109.6l-80-72.7a8 8 0 0 0-10.8 0l-80 72.7a8.3 8.3 0 0 0-2.6 5.9V208a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8v-92.5a8.3 8.3 0 0 0-2.6-5.9z" opacity="0.2" fill="currentColor"></path><path d="M213.4 109.6l-80-72.7a8 8 0 0 0-10.8 0l-80 72.7a8.3 8.3 0 0 0-2.6 5.9V208a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8v-92.5a8.3 8.3 0 0 0-2.6-5.9z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`, 6);
var _tmpl$12 = /* @__PURE__ */ _$template7(`<svg fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M10 27V19C10 18.7348 10.1054 18.4804 10.2929 18.2929C10.4804 18.1054 10.7348 18 11 18H21C21.2652 18 21.5196 18.1054 21.7071 18.2929C21.8946 18.4804 22 18.7348 22 19V27H26C26.2652 27 26.5196 26.8946 26.7071 26.7071C26.8946 26.5196 27 26.2652 27 26V11.4125C27.0005 11.2827 26.9753 11.154 26.926 11.0339C26.8766 10.9138 26.8041 10.8046 26.7125 10.7125L21.2875 5.28751C21.1955 5.19591 21.0862 5.12338 20.9661 5.07404C20.846 5.02471 20.7174 4.99955 20.5875 5.00001H6C5.73478 5.00001 5.48043 5.10536 5.29289 5.2929C5.10536 5.48044 5 5.73479 5 6.00001V26C5 26.2652 5.10536 26.5196 5.29289 26.7071C5.48043 26.8946 5.73478 27 6 27H10Z" opacity="0.2" fill="currentColor"></path><path d="M27 11.4125V26C27 26.2652 26.8946 26.5196 26.7071 26.7071C26.5196 26.8946 26.2652 27 26 27H6C5.73478 27 5.48043 26.8946 5.29289 26.7071C5.10536 26.5196 5 26.2652 5 26V6.00001C5 5.73479 5.10536 5.48044 5.29289 5.2929C5.48043 5.10536 5.73478 5.00001 6 5.00001H20.5875C20.7174 4.99955 20.846 5.02471 20.9661 5.07404C21.0862 5.12338 21.1955 5.19591 21.2875 5.28751L26.7125 10.7125C26.8041 10.8046 26.8766 10.9138 26.926 11.0339C26.9753 11.154 27.0005 11.2827 27 11.4125V11.4125Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 27V19C10 18.7348 10.1054 18.4804 10.2929 18.2929C10.4804 18.1054 10.7348 18 11 18H21C21.2652 18 21.5196 18.1054 21.7071 18.2929C21.8946 18.4804 22 18.7348 22 19V27" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 9H12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`, 10);
var _tmpl$13 = /* @__PURE__ */ _$template7(`<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><ellipse cx="128" cy="128" rx="44" ry="116" transform="rotate(-45 128.01 127.977)" opacity="0.2" fill="currentColor"></ellipse><ellipse cx="128" cy="128" rx="44" ry="116" transform="rotate(-45 128.01 127.977)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></ellipse><ellipse cx="128" cy="128" rx="116" ry="44" transform="rotate(-45 128.01 127.977)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></ellipse><circle cx="128" cy="128" r="12" fill="currentColor"></circle></svg>`, 10);
var _tmpl$14 = /* @__PURE__ */ _$template7(`<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M215.9 73.7l-84-47.5a7.8 7.8 0 0 0-7.8 0l-84 47.5a8.1 8.1 0 0 0-4.1 7v94.6a8.1 8.1 0 0 0 4.1 7l84 47.5a7.8 7.8 0 0 0 7.8 0l84-47.5a8.1 8.1 0 0 0 4.1-7V80.7a8.1 8.1 0 0 0-4.1-7zM128 164a36 36 0 1 1 36-36 36 36 0 0 1-36 36z" opacity="0.2" fill="currentColor"></path><path d="M220 175.3V80.7a8.1 8.1 0 0 0-4.1-7l-84-47.5a7.8 7.8 0 0 0-7.8 0l-84 47.5a8.1 8.1 0 0 0-4.1 7v94.6a8.1 8.1 0 0 0 4.1 7l84 47.5a7.8 7.8 0 0 0 7.8 0l84-47.5a8.1 8.1 0 0 0 4.1-7z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><circle cx="128" cy="128" r="36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle></svg>`, 8);
var _tmpl$15 = /* @__PURE__ */ _$template7(`<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M229.6 106l-25.9-14.4a73.6 73.6 0 0 0-6.3-10.9l.5-29.7a102.6 102.6 0 0 0-38.2-22l-25.4 15.2a88.3 88.3 0 0 0-12.6 0L96.2 28.9A104 104 0 0 0 58.1 51l.5 29.7a73.6 73.6 0 0 0-6.3 10.9l-26 14.4a103.6 103.6 0 0 0 .1 44l25.9 14.4a80.1 80.1 0 0 0 6.3 11l-.5 29.6a102.6 102.6 0 0 0 38.2 22l25.4-15.2a88.3 88.3 0 0 0 12.6 0l25.5 15.3a104 104 0 0 0 38.1-22.1l-.5-29.7a73.6 73.6 0 0 0 6.3-10.9l26-14.4a102 102 0 0 0-.1-44zM128 176a48 48 0 1 1 48-48 48 48 0 0 1-48 48z" opacity="0.2" fill="currentColor"></path><circle cx="128" cy="128" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path d="M197.4 80.7a73.6 73.6 0 0 1 6.3 10.9l25.9 14.4a102 102 0 0 1 .1 44l-26 14.4a73.6 73.6 0 0 1-6.3 10.9l.5 29.7a104 104 0 0 1-38.1 22.1l-25.5-15.3a88.3 88.3 0 0 1-12.6 0L96.3 227a102.6 102.6 0 0 1-38.2-22l.5-29.6a80.1 80.1 0 0 1-6.3-11L26.4 150a103.6 103.6 0 0 1-.1-44l26-14.4a73.6 73.6 0 0 1 6.3-10.9L58.1 51a104 104 0 0 1 38.1-22.1l25.5 15.3a88.3 88.3 0 0 1 12.6 0L159.7 29a102.6 102.6 0 0 1 38.2 22z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`, 8);
var _tmpl$16 = /* @__PURE__ */ _$template7(`<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><rect x="24" y="100" width="56" height="56" rx="8" opacity="0.2"></rect><rect x="160" y="40" width="64" height="64" rx="8" opacity="0.2"></rect><rect x="160" y="152" width="64" height="64" rx="8" opacity="0.2"></rect><rect x="24" y="100" width="56" height="56" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><rect x="160" y="40" width="64" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><rect x="160" y="152" width="64" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M80 128h40"></path><path d="M160 184h-16a23.9 23.9 0 0 1-24-24V96a23.9 23.9 0 0 1 24-24h16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></g></svg>`, 20);
var _tmpl$17 = /* @__PURE__ */ _$template7(`<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M0 0h256v256H0z"></path><path opacity=".2" d="M152 32v56h56l-56-56z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M152 32v56h56"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M148 128l24 24-24 24"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M108 128l-24 24 24 24"></path><path d="M200 224a8 8 0 0 0 8-8V88l-56-56H56a8 8 0 0 0-8 8v176a8 8 0 0 0 8 8z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></g></svg>`, 16);
var _tmpl$18 = /* @__PURE__ */ _$template7(`<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><circle cx="116" cy="116" r="84" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M175.4 175.4L224 224"></path></svg>`, 6);
var _tmpl$19 = /* @__PURE__ */ _$template7(`<svg><use></use></svg>`, 4);
var _tmpl$20 = /* @__PURE__ */ _$template7(`<div style="display:none"></div>`, 2);
var ArrowRight = ({
  id
}) => (() => {
  const _el$ = _tmpl$7.cloneNode(true);
  _$setAttribute4(_el$, "id", `sdt_icon_${id}`);
  return _el$;
})();
var ArrowLeft = ({
  id
}) => (() => {
  const _el$2 = _tmpl$24.cloneNode(true);
  _$setAttribute4(_el$2, "id", `sdt_icon_${id}`);
  return _el$2;
})();
var CarretRight = ({
  id
}) => (() => {
  const _el$3 = _tmpl$32.cloneNode(true);
  _$setAttribute4(_el$3, "id", `sdt_icon_${id}`);
  return _el$3;
})();
var Eye = ({
  id
}) => (() => {
  const _el$4 = _tmpl$42.cloneNode(true);
  _$setAttribute4(_el$4, "id", `sdt_icon_${id}`);
  return _el$4;
})();
var EyeSlash = ({
  id
}) => (() => {
  const _el$5 = _tmpl$52.cloneNode(true);
  _$setAttribute4(_el$5, "id", `sdt_icon_${id}`);
  return _el$5;
})();
var Refresh = ({
  id
}) => (() => {
  const _el$6 = _tmpl$62.cloneNode(true);
  _$setAttribute4(_el$6, "id", `sdt_icon_${id}`);
  return _el$6;
})();
var Select = ({
  id
}) => (() => {
  const _el$7 = _tmpl$72.cloneNode(true);
  _$setAttribute4(_el$7, "id", `sdt_icon_${id}`);
  return _el$7;
})();
var Options = ({
  id
}) => (() => {
  const _el$8 = _tmpl$8.cloneNode(true);
  _$setAttribute4(_el$8, "id", `sdt_icon_${id}`);
  return _el$8;
})();
var Close = ({
  id
}) => (() => {
  const _el$9 = _tmpl$9.cloneNode(true);
  _$setAttribute4(_el$9, "id", `sdt_icon_${id}`);
  return _el$9;
})();
var Triangle = ({
  id
}) => (() => {
  const _el$10 = _tmpl$10.cloneNode(true);
  _$setAttribute4(_el$10, "id", `sdt_icon_${id}`);
  return _el$10;
})();
var Root = ({
  id
}) => (() => {
  const _el$11 = _tmpl$11.cloneNode(true);
  _$setAttribute4(_el$11, "id", `sdt_icon_${id}`);
  return _el$11;
})();
var Memo = ({
  id
}) => (() => {
  const _el$12 = _tmpl$12.cloneNode(true);
  _$setAttribute4(_el$12, "id", `sdt_icon_${id}`);
  return _el$12;
})();
var Effect = ({
  id
}) => (() => {
  const _el$13 = _tmpl$13.cloneNode(true);
  _$setAttribute4(_el$13, "id", `sdt_icon_${id}`);
  return _el$13;
})();
var RenderEffect = ({
  id
}) => (() => {
  const _el$14 = _tmpl$14.cloneNode(true);
  _$setAttribute4(_el$14, "id", `sdt_icon_${id}`);
  return _el$14;
})();
var Computation = ({
  id
}) => (() => {
  const _el$15 = _tmpl$15.cloneNode(true);
  _$setAttribute4(_el$15, "id", `sdt_icon_${id}`);
  return _el$15;
})();
var Context = ({
  id
}) => (() => {
  const _el$16 = _tmpl$16.cloneNode(true);
  _$setAttribute4(_el$16, "id", `sdt_icon_${id}`);
  return _el$16;
})();
var Code = ({
  id
}) => (() => {
  const _el$17 = _tmpl$17.cloneNode(true);
  _$setAttribute4(_el$17, "id", `sdt_icon_${id}`);
  return _el$17;
})();
var Search = ({
  id
}) => (() => {
  const _el$18 = _tmpl$18.cloneNode(true);
  _$setAttribute4(_el$18, "id", `sdt_icon_${id}`);
  return _el$18;
})();
var iconComponents = {
  ArrowLeft,
  ArrowRight,
  CarretRight,
  Eye,
  EyeSlash,
  Refresh,
  Select,
  Options,
  Close,
  Triangle,
  Root,
  Memo,
  Effect,
  RenderEffect,
  Computation,
  Context,
  Code,
  Search
};
var Icon = {};
for (const name4 in iconComponents) {
  ;
  Icon[name4] = (props) => (() => {
    const _el$19 = _tmpl$19.cloneNode(true), _el$20 = _el$19.firstChild;
    _$effect7((_p$) => {
      const _v$ = props.class, _v$2 = `#sdt_icon_${name4.toString()}`;
      _v$ !== _p$._v$ && _$setAttribute4(_el$19, "class", _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && _$setAttribute4(_el$20, "href", _p$._v$2 = _v$2);
      return _p$;
    }, {
      _v$: void 0,
      _v$2: void 0
    });
    return _el$19;
  })();
}
var MountIcons = () => {
  return (() => {
    const _el$21 = _tmpl$20.cloneNode(true);
    _$insert7(_el$21, () => Object.keys(iconComponents).map((name4) => {
      const Icon2 = iconComponents[name4];
      return _$createComponent4(Icon2, {
        id: name4
      });
    }));
    return _el$21;
  })();
};

// src/controller.tsx
import { batch as batch3, createEffect as createEffect2, createSignal as createSignal5, on } from "solid-js";
import { createContextProvider } from "@solid-primitives/context";
import { NodeType as NodeType4 } from "@solid-devtools/debugger/types";

// src/modules/structure/index.ts
import { createMemo as createMemo2, createSelector, createSignal as createSignal3, untrack as untrack2 } from "solid-js";
import { NodeType as NodeType2 } from "@solid-devtools/debugger/types";

// src/modules/structure/structure-reconcile.ts
import { NodeType } from "@solid-devtools/debugger/types";
var $nextNodeList;
var $updatedAttached;
var $removedSet;
var $updated;
function updateNode(node, raw, level) {
  const { id, subroots, children: children2 } = node;
  $nextNodeList.push(node);
  node.level = level;
  if (raw) {
    if ("frozen" in raw && raw.frozen)
      node.frozen = true;
    const { children: rawChildren } = raw;
    const newChildren = node.children = [];
    if (rawChildren) {
      const prevChildrenRecord = {};
      for (const child of children2)
        prevChildrenRecord[child.id] = child;
      for (const child of rawChildren) {
        const prevChild = prevChildrenRecord[child.id];
        newChildren.push(
          prevChild ? updateNode(prevChild, child, level + 1) : createNode(child, node, level + 1)
        );
      }
    }
  } else {
    for (const child of children2)
      updateNode(child, void 0, level + 1);
  }
  const newSubroots = [];
  const newAttached = $updatedAttached[id];
  let subRootIds = subroots && newAttached ? /* @__PURE__ */ new Set() : null;
  if (subroots) {
    let updatedSubroot;
    for (const subroot of subroots) {
      const subrootId = subroot.id;
      if ($removedSet.has(subrootId))
        continue;
      if (updatedSubroot = $updated[subrootId]) {
        if (updatedSubroot.attached !== id)
          continue;
        if (subRootIds)
          subRootIds.add(subrootId);
      }
      newSubroots.push(updateNode(subroot, updatedSubroot, level + 1));
    }
  }
  if (newAttached) {
    for (const subroot of newAttached) {
      if (subRootIds && subRootIds.has(subroot.id))
        continue;
      newSubroots.push(createNode(subroot, node, level + 1));
    }
  }
  if (newSubroots.length)
    node.subroots = newSubroots;
  else
    delete node.subroots;
  return node;
}
function createNode(raw, parent, level) {
  const { id, name: name4, type: type2, children: rawChildren } = raw;
  const children2 = [];
  const node = { id, type: type2, children: children2, parent, level };
  if (name4)
    node.name = name4;
  if (type2 === NodeType.Component)
    node.hmr = raw.hmr;
  else if (type2 !== NodeType.Root && raw.frozen)
    node.frozen = true;
  $nextNodeList.push(node);
  if (rawChildren) {
    for (const child of rawChildren)
      children2.push(createNode(child, node, level + 1));
  }
  const newAttached = $updatedAttached[id];
  if (newAttached) {
    const subroots = node.subroots = [];
    for (const subroot of newAttached) {
      subroots.push(createNode(subroot, node, level + 1));
    }
  }
  return node;
}
function reconcileStructure(roots, updated, removed) {
  $updated = updated;
  $removedSet = new Set(removed);
  const added = {};
  $updatedAttached = {};
  for (const root2 of Object.values(updated)) {
    const { attached, id } = root2;
    if (attached) {
      if ($updatedAttached[attached])
        $updatedAttached[attached].push(root2);
      else
        $updatedAttached[attached] = [root2];
    } else
      added[id] = root2;
  }
  const nextRoots = [];
  $nextNodeList = [];
  for (const root2 of roots) {
    const { id } = root2;
    if ($removedSet.has(id))
      continue;
    delete added[id];
    nextRoots.push(updateNode(root2, updated[id], 0));
  }
  for (const root2 of Object.values(added)) {
    nextRoots.push(createNode(root2, null, 0));
  }
  return { roots: nextRoots, nodeList: $nextNodeList };
}

// src/modules/structure/index.ts
import { createSimpleEmitter } from "@solid-primitives/event-bus";
function getParentRoot(node) {
  let current = node;
  while (current) {
    if (current.type === NodeType2.Root)
      return current;
    current = current.parent;
  }
  throw new Error("Parent root not found");
}
function getNodePath(node) {
  const path2 = [node];
  let parent = node.parent;
  while (parent) {
    path2.unshift(parent);
    parent = parent.parent;
  }
  return path2;
}
function createStructure({
  clientHoveredNodeId
}) {
  const [state, setState] = createSignal3(
    { nodeList: [], roots: [] },
    { internal: true }
  );
  function updateStructure(update) {
    setState(
      (prev) => update ? reconcileStructure(prev.roots, update.updated, update.removed) : { nodeList: [], roots: [] }
    );
  }
  function findNode(id) {
    for (const node of untrack2(state).nodeList) {
      if (node.id === id)
        return node;
    }
  }
  const [listenToComputationUpdate, emitComputationUpdate] = createSimpleEmitter();
  const [extHovered, setHovered] = createSignal3(null);
  const clientHoveredComponent = createMemo2(() => {
    const id = clientHoveredNodeId();
    return id ? findNode(id) ?? null : null;
  });
  const hovered = () => extHovered() || clientHoveredComponent();
  const isHovered = createSelector(hovered);
  function toggleHoveredNode(id, hovered2) {
    return setHovered((p) => {
      if (hovered2)
        return findNode(id) ?? p;
      return p && p.id === id ? null : p;
    });
  }
  const [searchResult, setSearchResult] = createSignal3();
  const isSearched = createSelector(
    searchResult,
    (node, o) => !!o && o.includes(node)
  );
  function search2(query) {
    if (!query)
      return setSearchResult();
    return untrack2(() => {
      const result = [];
      const rgx = new RegExp("^" + query, "i");
      for (const node of state().nodeList) {
        if (node.name && node.name.match(rgx))
          result.push(node);
      }
      return setSearchResult(result.length ? result : void 0);
    });
  }
  return {
    state,
    updateStructure,
    hovered,
    extHovered,
    isHovered: (node) => isHovered(node) || isSearched(node),
    listenToComputationUpdate,
    emitComputationUpdate,
    toggleHoveredNode,
    findNode,
    getParentRoot,
    getNodePath,
    search: search2
  };
}

// src/modules/inspector/index.ts
import { batch as batch2, createEffect, createSelector as createSelector2, createSignal as createSignal4 } from "solid-js";
import { createStore, produce } from "solid-js/store";
import { defer, untrackedCallback } from "@solid-devtools/shared/primitives";
import { error, warn } from "@solid-devtools/shared/utils";
import {
  ValueType
} from "@solid-devtools/debugger/types";
var splitValueNodeId = (id) => {
  return id.split(":");
};
function reconcileValueAtPath(value, path2, property, newValue) {
  const fullPathString = [...path2, property].join(".");
  for (const key of path2) {
    if (!value.children)
      return error("Invalid path", fullPathString);
    value = value.children[key];
  }
  const children2 = value?.children;
  if (!children2)
    return error("Invalid path", fullPathString);
  if (newValue === void 0)
    delete children2[property];
  else
    children2[property] = newValue;
}
var XOR = (a, b) => (a || b) && !(a && b);
function updateValueNode(obj, newValue) {
  if (obj.value.type === newValue.type) {
    if (obj.value.type === ValueType.Store) {
      obj = obj.value.value;
      newValue = newValue.value.value;
    }
    const expanded = XOR("children" in obj.value, "children" in newValue);
    if (expanded) {
      obj.value.children = newValue.children;
      return;
    }
  }
  obj.value = newValue;
}
function findStoreNode(value, storeId) {
  if (value.type === ValueType.Store && value.value.id === storeId)
    return value;
  if (value.children) {
    for (const child of Object.values(value.children)) {
      const store = findStoreNode(child, storeId);
      if (store)
        return store;
    }
  }
}
function findValueNode(details, valueId) {
  const [type2, id] = splitValueNodeId(valueId);
  if (type2 === "signal")
    return details.signals[id]?.value;
  if (type2 === "prop")
    return details.props?.record[id]?.value;
  return details.value?.value;
}
function updateValueItem(details, { id: valueId, value }) {
  const [type2, id] = splitValueNodeId(valueId);
  if (type2 === "signal") {
    const signal = details.signals[id];
    if (!signal)
      throw `updateValue: value node (${valueId}) not found`;
    updateValueNode(signal, value);
  } else if (type2 === "prop") {
    const prop = details.props?.record[id];
    if (!prop)
      throw `updateValue: prop (${valueId}) not found`;
    updateValueNode(prop, value);
  } else
    details.value && updateValueNode(details.value, value);
}
function updateProps(props, { added, removed }) {
  for (const key of added)
    props.record[key] = {
      value: { type: ValueType.Getter, value: key },
      selected: false,
      itemId: `prop:${key}`
    };
  for (const key of removed)
    delete props.record[key];
}
function updateStore(details, { path: path2, property, storeId, value, valueNodeId }) {
  const valueNode = findValueNode(details, valueNodeId);
  if (!valueNode)
    return warn(`updateStore: value node (${valueNodeId}) not found`);
  const store = findStoreNode(valueNode, storeId);
  if (!store)
    return warn(`updateStore: store node (${storeId}) not found`);
  reconcileValueAtPath(store.value.value, path2, property, value);
}
function createInspector({
  getNodePath: getNodePath2,
  findNode
}) {
  const [inspectedNode, setInspectedNode] = createSignal4(null);
  const [path2, setPath] = createSignal4([]);
  const [location2, setLocation] = createSignal4(null);
  const [signalDetails, setSignalDetails] = createStore({
    signals: {},
    value: null,
    props: null
  });
  const details = {
    get path() {
      return path2();
    },
    get location() {
      return location2();
    },
    get props() {
      return signalDetails.props;
    },
    get signals() {
      return signalDetails.signals;
    },
    get value() {
      return signalDetails.value;
    }
  };
  const isNodeInspected = createSelector2(() => inspectedNode()?.id ?? null);
  const setInspected = untrackedCallback((data) => {
    batch2(() => {
      if (data === null) {
        setInspectedNode(null);
        setPath([]);
        return;
      }
      const currentNode = inspectedNode();
      let newNode;
      if (typeof data === "object") {
        if (currentNode && data.id === currentNode.id)
          return;
        newNode = data;
      } else {
        if (currentNode && data === currentNode.id)
          return;
        const node = findNode(data);
        if (!node)
          return;
        newNode = node;
      }
      setInspectedNode(newNode);
      setPath(getNodePath2(newNode));
      setLocation(null);
      setSignalDetails({ signals: {}, value: null, props: null });
    });
  });
  const handleStructureChange = untrackedCallback(() => {
    const node = inspectedNode();
    if (!node)
      return;
    findNode(node.id) || setInspectedNode(null);
  });
  const setNewDetails = untrackedCallback((raw) => {
    const node = inspectedNode();
    if (!node || node.id !== raw.id)
      return warn("setNewDetails: inspected node mismatch");
    batch2(() => {
      setLocation(raw.location ?? null);
      const signals = {};
      for (const { id, name: name4, type: type2, value } of raw.signals)
        signals[id] = { id, name: name4, type: type2, selected: false, value, itemId: `signal:${id}` };
      setSignalDetails({
        signals,
        value: raw.value ? { itemId: "value", selected: false, value: raw.value } : void 0,
        props: raw.props ? {
          proxy: raw.props.proxy,
          record: Object.entries(raw.props.record).reduce((props, [propName, value]) => {
            props[propName] = { value, selected: false, itemId: `prop:${propName}` };
            return props;
          }, {})
        } : null
      });
    });
  });
  function handleUpdate(updates) {
    setSignalDetails(
      produce((details2) => {
        for (const update of updates) {
          switch (update[0]) {
            case "value":
              updateValueItem(details2, update[1]);
              break;
            case "props":
              details2.props && updateProps(details2.props, update[1]);
              break;
            case "store":
              updateStore(details2, update[1]);
              break;
          }
        }
      })
    );
  }
  let onInspectNode = () => {
  };
  let onInspectValue = () => {
  };
  const setOnInspectValue = (fn) => onInspectValue = fn;
  const setOnInspectNode = (fn) => onInspectNode = fn;
  createEffect(defer(inspectedNode, (node) => onInspectNode(node)));
  function inspectValueItem(type2, id, selected) {
    setSignalDetails(
      produce((details2) => {
        let item2;
        if (type2 === "value")
          item2 = details2.value;
        else if (type2 === "signal")
          item2 = details2.signals[id];
        else if (type2 === "prop")
          item2 = details2.props?.record[id];
        if (!item2)
          return;
        item2.selected = selected = selected ?? !item2.selected;
        onInspectValue({ id: item2.itemId, selected });
      })
    );
  }
  const [hoveredElement, setHoveredElement] = createSignal4(null);
  function toggleHoveredElement(id, selected) {
    setHoveredElement((p) => p === id ? selected ? id : null : selected ? id : p);
  }
  let onOpenLocation;
  const setOnOpenLocation = (fn) => onOpenLocation = fn;
  function openComponentLocation() {
    onOpenLocation();
  }
  return {
    inspectedNode,
    details,
    setInspectedNode: setInspected,
    isNodeInspected,
    setDetails: setNewDetails,
    update: handleUpdate,
    inspectValueItem,
    onInspectedHandler: onInspectValue,
    hoveredElement,
    toggleHoveredElement,
    handleStructureChange,
    setOnInspectValue,
    setOnInspectNode,
    openComponentLocation,
    setOnOpenLocation
  };
}

// src/controller.tsx
import { defer as defer2 } from "@solid-devtools/shared/primitives";
var Controller = class {
  constructor(clientListeners) {
    this.clientListeners = clientListeners;
  }
  connectDevtools(devtoolsListeners) {
    if (this.listeners) {
      throw new Error("Devtools already connected!");
    }
    this.listeners = devtoolsListeners;
  }
  updateStructure(update) {
    this.listeners.onStructureUpdate(update);
  }
  updateComputation(computationUpdate) {
    this.listeners.onComputationUpdates(computationUpdate);
  }
  updateInspector(inspectorUpdate) {
    this.listeners.onInspectorUpdate(inspectorUpdate);
  }
  setInspectedDetails(ownerDetails) {
    this.listeners.onSetInspectedDetails(ownerDetails);
  }
  resetPanel() {
    this.listeners.onResetPanel();
  }
  setLocatorState(active) {
    this.listeners.onClientLocatorModeChange(active);
  }
  setHoveredNode(node) {
    this.listeners.onClientHoveredComponent(node);
  }
  setInspectedNode(node) {
    this.listeners.onClientInspectedNode(node);
  }
};
var [Provider, useControllerCtx] = createContextProvider(({
  controller,
  options: options2
}) => {
  const [devtoolsLocatorEnabled, setDevtoolsLocatorState] = createSignal5(false);
  const [clientLocatorEnabled, setClientLocator] = createSignal5(false);
  const [clientHoveredNodeId, setClientHoveredId] = createSignal5(null);
  const locatorEnabled = () => devtoolsLocatorEnabled() || clientLocatorEnabled();
  function setClientLocatorState(enabled) {
    batch3(() => {
      setClientLocator(enabled);
      if (!enabled)
        setClientHoveredId(null);
    });
  }
  const structure = createStructure({
    clientHoveredNodeId
  });
  const inspector = createInspector({
    findNode: structure.findNode,
    getNodePath: structure.getNodePath
  });
  controller.connectDevtools({
    onResetPanel() {
      batch3(() => {
        structure.updateStructure(null);
        setClientLocatorState(false);
        setDevtoolsLocatorState(false);
        inspector.setInspectedNode(null);
      });
    },
    onSetInspectedDetails(ownerDetails) {
      inspector.setDetails(ownerDetails);
    },
    onClientHoveredComponent({
      nodeId,
      state
    }) {
      setClientHoveredId((p) => {
        if (state)
          return nodeId ?? p;
        return p && p === nodeId ? null : p;
      });
    },
    onClientInspectedNode(node) {
      batch3(() => {
        inspector.setInspectedNode(node);
        setDevtoolsLocatorState(false);
      });
    },
    onClientLocatorModeChange(active) {
      setClientLocatorState(active);
    },
    onComputationUpdates(updated) {
      updated.forEach(({
        id
      }) => structure.emitComputationUpdate(id));
    },
    onStructureUpdate(update) {
      batch3(() => {
        structure.updateStructure(update);
        inspector.handleStructureChange();
      });
    },
    onInspectorUpdate(payload) {
      inspector.update(payload);
    }
  });
  const client = controller.clientListeners;
  createEffect2(defer2(devtoolsLocatorEnabled, (enabled) => client.onDevtoolsLocatorStateChange(enabled)));
  inspector.setOnInspectNode((node) => {
    client.onInspectNode(node ? {
      nodeId: node.id,
      rootId: structure.getParentRoot(node).id
    } : null);
  });
  inspector.setOnInspectValue(client.onInspectValue);
  inspector.setOnOpenLocation(client.onOpenLocation);
  createEffect2(on([structure.extHovered, inspector.hoveredElement], ([hovered, elId], _, prev) => {
    if (hovered && hovered.type === NodeType4.Component) {
      if (typeof prev === "object" && prev.nodeId === hovered.id)
        return prev;
      const rootId = structure.getParentRoot(hovered).id;
      const payload = {
        rootId,
        nodeId: hovered.id
      };
      client.onHighlightElementChange(payload);
      return payload;
    }
    if (elId) {
      if (typeof prev === "string" && prev === elId)
        return prev;
      client.onHighlightElementChange({
        elementId: elId
      });
      return elId;
    }
    if (prev)
      client.onHighlightElementChange(null);
  }, {
    defer: true
  }));
  let lastSearch = "";
  let lastSearchResults;
  let lastSearchIndex = 0;
  function searchStructure(query) {
    if (query === lastSearch) {
      if (lastSearchResults) {
        lastSearchIndex = (lastSearchIndex + 1) % lastSearchResults.length;
        inspector.setInspectedNode(lastSearchResults[lastSearchIndex]);
      }
      return;
    } else {
      lastSearch = query;
      const result = structure.search(query);
      if (result)
        inspector.setInspectedNode(result[lastSearchIndex = 0]);
      lastSearchResults = result;
    }
  }
  return {
    locatorEnabled,
    structureState: structure.state,
    inspectedNode: inspector.inspectedNode,
    isNodeInspected: inspector.isNodeInspected,
    setLocatorState: setDevtoolsLocatorState,
    setInspectedNode: inspector.setInspectedNode,
    toggleHoveredNode: structure.toggleHoveredNode,
    listenToComputationUpdate: structure.listenToComputationUpdate,
    inspector,
    structure,
    searchStructure,
    options: options2
  };
});
function useController() {
  const ctx = useControllerCtx();
  if (!ctx) {
    throw new Error("ControllerContext was not provided");
  }
  return ctx;
}

// src/App.tsx
import { template as _$template14 } from "solid-js/web";
import { delegateEvents as _$delegateEvents7 } from "solid-js/web";
import { className as _$className13 } from "solid-js/web";
import { effect as _$effect14 } from "solid-js/web";
import { memo as _$memo5 } from "solid-js/web";
import { insert as _$insert14 } from "solid-js/web";
import { use as _$use3 } from "solid-js/web";
import { createComponent as _$createComponent11 } from "solid-js/web";
import { createSignal as createSignal8, Show as Show5 } from "solid-js";
import { Menu, MenuItem, Popover, PopoverButton, PopoverPanel } from "solid-headless";
import { createShortcut } from "@solid-primitives/keyboard";

// src/modules/inspector/Inspector.tsx
import { template as _$template10 } from "solid-js/web";
import { delegateEvents as _$delegateEvents5 } from "solid-js/web";
import { addEventListener as _$addEventListener3 } from "solid-js/web";
import { className as _$className9 } from "solid-js/web";
import { effect as _$effect10 } from "solid-js/web";
import { insert as _$insert10 } from "solid-js/web";
import { memo as _$memo3 } from "solid-js/web";
import { createComponent as _$createComponent7 } from "solid-js/web";
import { createMemo as createMemo4, For, Show as Show4 } from "solid-js";
import { Entries as Entries2 } from "@solid-primitives/keyed";
import { NodeType as NodeType6 } from "@solid-devtools/debugger/types";

// src/modules/inspector/ValueNode.tsx
import { template as _$template8 } from "solid-js/web";
import { delegateEvents as _$delegateEvents4 } from "solid-js/web";
import { spread as _$spread3 } from "solid-js/web";
import { mergeProps as _$mergeProps2 } from "solid-js/web";
import { setAttribute as _$setAttribute5 } from "solid-js/web";
import { className as _$className7 } from "solid-js/web";
import { effect as _$effect8 } from "solid-js/web";
import { insert as _$insert8 } from "solid-js/web";
import { memo as _$memo2 } from "solid-js/web";
import { createComponent as _$createComponent5 } from "solid-js/web";
import { createContext, createMemo as createMemo3, createSignal as createSignal6, Match, Show as Show3, Switch, untrack as untrack3, useContext } from "solid-js";
import { Entries } from "@solid-primitives/keyed";
import { assignInlineVars as assignInlineVars2 } from "@vanilla-extract/dynamic";
import { INFINITY, NAN, NEGATIVE_INFINITY, ValueType as ValueType2 } from "@solid-devtools/debugger/types";
import { createHover, createPingedSignal } from "@solid-devtools/shared/primitives";

// src/modules/inspector/ValueNode.css.ts
var Nullable = "ValueNode_Nullable__1gfvr5dm ValueNode_baseValue__1gfvr5df";
var ValueBoolean = "ValueNode_ValueBoolean__1gfvr5dk ValueNode_baseValue__1gfvr5df";
var ValueElement = { container: "ValueNode_ValueElement_container__1gfvr5dr ValueNode_baseValue__1gfvr5df ValueNode__1gfvr5dn", highlight: "ValueNode__1gfvr5dq" };
var ValueFunction = "ValueNode_ValueFunction__1gfvr5dl ValueNode_baseValue__1gfvr5df";
var ValueNumber = "ValueNode_ValueNumber__1gfvr5dj ValueNode_baseValue__1gfvr5df";
var ValueString = "ValueNode_ValueString__1gfvr5di ValueNode_baseValue__1gfvr5df";
var baseValue = "ValueNode_baseValue__1gfvr5df";
var collapsable = { list: "ValueNode_collapsable_list__1gfvr5dh" };
var name = { container: "ValueNode_name_container__1gfvr5db", icon: "ValueNode_name_icon__1gfvr5dc", name: "ValueNode_name_name__1gfvr5dd", highlight: "ValueNode_name_highlight__1gfvr5de" };
var row = { collapseOpacity: "var(--collapseOpacity__1gfvr5d5)", container: { base: "ValueNode_container__1gfvr5d4", collapsable: "ValueNode_row_container_collapsable__1gfvr5d7 ValueNode_container__1gfvr5d4 ValueNode__1gfvr5d0" }, highlight: "ValueNode_row_highlight__1gfvr5d8 ValueNode__1gfvr5d3", toggle: { container: "ValueNode_row_toggle_container__1gfvr5d9", button: "ValueNode_row_toggle_button__1gfvr5da" } };

// src/modules/inspector/ValueNode.tsx
var _tmpl$21 = /* @__PURE__ */ _$template8(`<div><div></div></div>`, 4);
var _tmpl$25 = /* @__PURE__ */ _$template8(`<li></li>`, 2);
var _tmpl$33 = /* @__PURE__ */ _$template8(`<li><div></div><div></div></li>`, 6);
var _tmpl$43 = /* @__PURE__ */ _$template8(`<ul></ul>`, 2);
var _tmpl$53 = /* @__PURE__ */ _$template8(`<span>Empty </span>`, 2);
var _tmpl$63 = /* @__PURE__ */ _$template8(`<span> [<!>]</span>`, 3);
var _tmpl$73 = /* @__PURE__ */ _$template8(`<span>"<!>"</span>`, 3);
var _tmpl$82 = /* @__PURE__ */ _$template8(`<span></span>`, 2);
var _tmpl$92 = /* @__PURE__ */ _$template8(`<input type="checkbox">`, 1);
var _tmpl$102 = /* @__PURE__ */ _$template8(`<span>get <!>()</span>`, 3);
var _tmpl$112 = /* @__PURE__ */ _$template8(`<span>Symbol(<!>)</span>`, 3);
var _tmpl$122 = /* @__PURE__ */ _$template8(`<span><div></div></span>`, 4);
var ValueContext = createContext();
function createNestedHover() {
  const [isHovered, setIsHovered] = createSignal6(false);
  return {
    isHovered,
    hoverProps: {
      "on:pointerover": (e) => {
        e.stopPropagation();
        setIsHovered(true);
      },
      "on:pointerout": (e) => {
        e.stopPropagation();
        setIsHovered(false);
      }
    }
  };
}
var getIsCollapsable = (value) => value.type === ValueType2.Object || value.type === ValueType2.Array || value.type === ValueType2.Store;
var ValueNode = (props) => {
  const ctx = useContext(ValueContext);
  const isStore = () => props.value.type === ValueType2.Store;
  const isCollapsable = () => getIsCollapsable(props.value);
  const isUpdated = props.isSignal || ctx?.underStore ? createPingedSignal(() => props.value) : void 0;
  const ValueContent = () => _$createComponent5(ValuePreview, {
    get value() {
      return props.value;
    },
    get extended() {
      return props.extended;
    }
  });
  const handleSelect = () => {
    if (props.onClick && isCollapsable())
      props.onClick();
  };
  const content7 = createMemo3(() => [(() => {
    const _el$ = _tmpl$21.cloneNode(true), _el$2 = _el$.firstChild;
    _el$.$$click = handleSelect;
    _$insert8(_el$2, _$createComponent5(Highlight, {
      get highlight() {
        return isUpdated && isUpdated();
      },
      isSignal: true,
      get ["class"]() {
        return name.highlight;
      },
      get children() {
        return props.name;
      }
    }));
    _$effect8((_p$) => {
      const _v$ = name.container, _v$2 = name.name, _v$3 = props.isSignal || ctx?.underStore;
      _v$ !== _p$._v$ && _$className7(_el$, _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && _$className7(_el$2, _p$._v$2 = _v$2);
      _v$3 !== _p$._v$3 && _$setAttribute5(_el$2, "data-signal", _p$._v$3 = _v$3);
      return _p$;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0
    });
    return _el$;
  })(), _$memo2((() => {
    const _c$ = _$memo2(() => !!(ctx && !isStore()));
    return () => _c$() ? _$createComponent5(ValueContent, {}) : _$createComponent5(ValueContext.Provider, {
      get value() {
        return {
          onElementHover: props.onElementHover || ctx?.onElementHover,
          get underStore() {
            return isStore();
          }
        };
      },
      get children() {
        return _$createComponent5(ValueContent, {});
      }
    });
  })())]);
  return _$createComponent5(Show3, {
    get when() {
      return isCollapsable();
    },
    get fallback() {
      return (() => {
        const _el$3 = _tmpl$25.cloneNode(true);
        _$insert8(_el$3, content7);
        _$effect8(() => _$className7(_el$3, row.container.base));
        return _el$3;
      })();
    },
    get children() {
      return untrack3(() => {
        const {
          isHovered,
          hoverProps
        } = createNestedHover();
        return (() => {
          const _el$4 = _tmpl$33.cloneNode(true), _el$5 = _el$4.firstChild, _el$6 = _el$5.nextSibling;
          _$spread3(_el$4, _$mergeProps2({
            get ["class"]() {
              return row.container.collapsable;
            },
            get ["data-hovered"]() {
              return isHovered();
            },
            get style() {
              return assignInlineVars2({
                [row.collapseOpacity]: isHovered() || props.extended ? "1" : "0"
              });
            }
          }, hoverProps), false, true);
          _$insert8(_el$6, _$createComponent5(CollapseToggle, {
            onToggle: handleSelect,
            get ["class"]() {
              return row.toggle.button;
            },
            get isCollapsed() {
              return !props.extended;
            },
            defaultCollapsed: true
          }));
          _$insert8(_el$4, content7, null);
          _$effect8((_p$) => {
            const _v$4 = row.highlight, _v$5 = row.toggle.container;
            _v$4 !== _p$._v$4 && _$className7(_el$5, _p$._v$4 = _v$4);
            _v$5 !== _p$._v$5 && _$className7(_el$6, _p$._v$5 = _v$5);
            return _p$;
          }, {
            _v$4: void 0,
            _v$5: void 0
          });
          return _el$4;
        })();
      });
    }
  });
};
var ValuePreview = (props) => {
  return createMemo3(() => {
    const value = props.value;
    switch (value.type) {
      case ValueType2.String:
        return _$createComponent5(StringValuePreview, {
          value
        });
      case ValueType2.Number:
        return _$createComponent5(NumberValuePreview, {
          value
        });
      case ValueType2.Boolean:
        return _$createComponent5(BooleanValuePreview, {
          value
        });
      case ValueType2.Object:
      case ValueType2.Array:
        return _$createComponent5(ObjectValuePreview, {
          value,
          get extended() {
            return props.extended;
          }
        });
      case ValueType2.Function:
        return _$createComponent5(FunctionValuePreview, {
          value
        });
      case ValueType2.Getter:
        return _$createComponent5(GetterValuePreview, {
          value
        });
      case ValueType2.Null:
      case ValueType2.Undefined:
        return _$createComponent5(NullableValuePreview, {
          value
        });
      case ValueType2.Symbol:
        return _$createComponent5(SymbolValuePreview, {
          value
        });
      case ValueType2.Instance:
        return _$createComponent5(InstanceValuePreview, {
          value
        });
      case ValueType2.Element:
        return _$createComponent5(ElementValuePreview, {
          value
        });
      case ValueType2.Store:
        return _$createComponent5(ValuePreview, {
          get value() {
            return value.value.value;
          },
          get extended() {
            return props.extended;
          }
        });
    }
  });
};
var CollapsableObjectPreview = (props) => (() => {
  const _el$7 = _tmpl$43.cloneNode(true);
  _$insert8(_el$7, _$createComponent5(Entries, {
    get of() {
      return props.value;
    },
    children: (key, value) => _$createComponent5(Show3, {
      get when() {
        return getIsCollapsable(value());
      },
      get children() {
        return untrack3(() => {
          const [extended, setExtended] = createSignal6(false);
          return _$createComponent5(ValueNode, {
            name: key,
            get value() {
              return value();
            },
            onClick: () => setExtended((p) => !p),
            get extended() {
              return extended();
            }
          });
        });
      },
      get fallback() {
        return _$createComponent5(ValueNode, {
          name: key,
          get value() {
            return value();
          }
        });
      }
    })
  }));
  _$effect8(() => _$className7(_el$7, collapsable.list));
  return _el$7;
})();
var getObjectLength = (obj) => obj.children ? Array.isArray(obj.children) ? obj.children.length : Object.keys(obj.children).length : obj.value;
var ObjectValuePreview = (props) => {
  const length = createMemo3(() => getObjectLength(props.value));
  return _$createComponent5(Switch, {
    get fallback() {
      return _$createComponent5(CollapsableObjectPreview, {
        get value() {
          return props.value.children;
        }
      });
    },
    get children() {
      return [_$createComponent5(Match, {
        get when() {
          return length() === 0;
        },
        get children() {
          const _el$8 = _tmpl$53.cloneNode(true), _el$9 = _el$8.firstChild;
          _$insert8(_el$8, () => props.value.type === ValueType2.Array ? "Array" : "Object", null);
          _$effect8(() => _$className7(_el$8, Nullable));
          return _el$8;
        }
      }), _$createComponent5(Match, {
        get when() {
          return !props.value.children || !props.extended;
        },
        get children() {
          const _el$10 = _tmpl$63.cloneNode(true), _el$11 = _el$10.firstChild, _el$13 = _el$11.nextSibling, _el$12 = _el$13.nextSibling;
          _$insert8(_el$10, () => props.value.type === ValueType2.Array ? "Array" : "Object", _el$11);
          _$insert8(_el$10, length, _el$13);
          _$effect8(() => _$className7(_el$10, baseValue));
          return _el$10;
        }
      })];
    }
  });
};
var StringValuePreview = (props) => (() => {
  const _el$14 = _tmpl$73.cloneNode(true), _el$15 = _el$14.firstChild, _el$17 = _el$15.nextSibling, _el$16 = _el$17.nextSibling;
  _$insert8(_el$14, () => props.value.value, _el$17);
  _$effect8(() => _$className7(_el$14, ValueString));
  return _el$14;
})();
var NumberValuePreview = (props) => {
  const value = () => {
    switch (props.value.value) {
      case NAN:
        return "NaN";
      case INFINITY:
        return "Infinity";
      case NEGATIVE_INFINITY:
        return "-Infinity";
      default:
        return props.value.value;
    }
  };
  return (() => {
    const _el$18 = _tmpl$82.cloneNode(true);
    _$insert8(_el$18, value);
    _$effect8(() => _$className7(_el$18, ValueNumber));
    return _el$18;
  })();
};
var BooleanValuePreview = (props) => (() => {
  const _el$19 = _tmpl$92.cloneNode(true);
  _el$19.$$click = (e) => e.preventDefault();
  _$effect8(() => _$className7(_el$19, ValueBoolean));
  _$effect8(() => _el$19.checked = props.value.value);
  return _el$19;
})();
var FunctionValuePreview = (props) => (() => {
  const _el$20 = _tmpl$82.cloneNode(true);
  _$insert8(_el$20, () => props.value.value ? `f ${props.value.value}()` : "function()");
  _$effect8(() => _$className7(_el$20, ValueFunction));
  return _el$20;
})();
var GetterValuePreview = (props) => (() => {
  const _el$21 = _tmpl$102.cloneNode(true), _el$22 = _el$21.firstChild, _el$24 = _el$22.nextSibling, _el$23 = _el$24.nextSibling;
  _$insert8(_el$21, () => props.value.value, _el$24);
  _$effect8(() => _$className7(_el$21, ValueFunction));
  return _el$21;
})();
var NullableValuePreview = (props) => (() => {
  const _el$25 = _tmpl$82.cloneNode(true);
  _$insert8(_el$25, () => props.value.type === ValueType2.Null ? "null" : "undefined");
  _$effect8(() => _$className7(_el$25, Nullable));
  return _el$25;
})();
var SymbolValuePreview = (props) => (() => {
  const _el$26 = _tmpl$112.cloneNode(true), _el$27 = _el$26.firstChild, _el$29 = _el$27.nextSibling, _el$28 = _el$29.nextSibling;
  _$insert8(_el$26, () => props.value.value, _el$29);
  _$effect8(() => _$className7(_el$26, baseValue));
  return _el$26;
})();
var InstanceValuePreview = (props) => (() => {
  const _el$30 = _tmpl$82.cloneNode(true);
  _$insert8(_el$30, () => props.value.value);
  _$effect8(() => _$className7(_el$30, baseValue));
  return _el$30;
})();
var ElementValuePreview = (props) => {
  const {
    onElementHover: onHover
  } = useContext(ValueContext) ?? {};
  const handleHover = onHover && ((hovered) => {
    if (props.value.value.id === void 0)
      return;
    onHover(props.value.value.id, hovered);
  });
  const hoverProps = handleHover && createHover(handleHover);
  return (() => {
    const _el$31 = _tmpl$122.cloneNode(true), _el$32 = _el$31.firstChild;
    _$spread3(_el$31, _$mergeProps2({
      get ["class"]() {
        return ValueElement.container;
      }
    }, hoverProps), false, true);
    _$insert8(_el$31, () => props.value.value.name, null);
    _$effect8(() => _$className7(_el$32, ValueElement.highlight));
    return _el$31;
  })();
};
_$delegateEvents4(["click"]);

// src/modules/inspector/inspector.css.ts
var actions = { container: "inspector_actions_container__ue1o9y4", button: "inspector_actions_button__ue1o9y5", icon: "inspector_actions_icon__ue1o9y6" };
var content4 = "inspector_content__ue1o9y8";
var h2 = "inspector_h2__ue1o9y9";
var header = "inspector_header__ue1o9y1";
var location = "inspector_location__ue1o9ya";
var root = "inspector_root__ue1o9y0";

// src/ui/components/Owner.tsx
import { template as _$template9 } from "solid-js/web";
import { setAttribute as _$setAttribute6 } from "solid-js/web";
import { classList as _$classList } from "solid-js/web";
import { className as _$className8 } from "solid-js/web";
import { effect as _$effect9 } from "solid-js/web";
import { insert as _$insert9 } from "solid-js/web";
import { createComponent as _$createComponent6 } from "solid-js/web";
import { NodeType as NodeType5 } from "@solid-devtools/debugger";

// src/ui/components/Owner.css.ts
var componentName = "Owner_componentName__1fpdl0t3 Owner_name__1fpdl0t2";
var container5 = "Owner_container__1fpdl0t0";
var name2 = "Owner_name__1fpdl0t2";
var title = "Owner_title__1fpdl0t1";
var type = "Owner_type__1fpdl0t4";
var typeIcon = "Owner_typeIcon__1fpdl0t5";

// src/ui/components/Owner.tsx
var _tmpl$26 = /* @__PURE__ */ _$template9(`<span></span>`, 2);
var _tmpl$27 = /* @__PURE__ */ _$template9(`<span>Render Effect</span>`, 2);
var NodeTypeIcon = (props) => {
  let prevIcon;
  let prevRendered;
  return () => {
    const IconComp = (() => {
      switch (props.type) {
        case NodeType5.Memo:
          return Icon.Memo;
        case NodeType5.Effect:
          return Icon.Effect;
        case NodeType5.Root:
          return Icon.Root;
        case NodeType5.Render:
          return Icon.RenderEffect;
        case NodeType5.Computation:
          return Icon.Computation;
        case NodeType5.Context:
          return Icon.Context;
      }
    })();
    if (IconComp === prevIcon)
      return prevRendered;
    return prevRendered = (prevIcon = IconComp) ? _$createComponent6(IconComp, {
      get ["class"]() {
        return props.class;
      }
    }) : null;
  };
};
var OwnerName = (props) => {
  return (() => {
    const _el$ = _tmpl$26.cloneNode(true);
    _$insert9(_el$, _$createComponent6(NodeTypeIcon, {
      get type() {
        return props.type;
      },
      get ["class"]() {
        return typeIcon;
      }
    }), null);
    _$insert9(_el$, () => {
      switch (props.type) {
        case NodeType5.Root:
        case NodeType5.Context:
          return (() => {
            const _el$2 = _tmpl$26.cloneNode(true);
            _$insert9(_el$2, () => NodeType5[props.type]);
            _$effect9(() => _$className8(_el$2, type));
            return _el$2;
          })();
        case NodeType5.Render:
          return (() => {
            const _el$3 = _tmpl$27.cloneNode(true);
            _$effect9(() => _$className8(_el$3, type));
            return _el$3;
          })();
        case NodeType5.Component:
          return (() => {
            const _el$4 = _tmpl$26.cloneNode(true);
            _$insert9(_el$4, () => props.name);
            _$effect9(() => _$className8(_el$4, componentName));
            return _el$4;
          })();
        default:
          return (() => {
            const _el$5 = _tmpl$26.cloneNode(true);
            _$insert9(_el$5, () => props.name);
            _$effect9(() => _$className8(_el$5, name2));
            return _el$5;
          })();
      }
    }, null);
    _$effect9((_p$) => {
      const _v$ = container5, _v$2 = {
        [title]: props.isTitle
      }, _v$3 = props.isFrozen;
      _v$ !== _p$._v$ && _$className8(_el$, _p$._v$ = _v$);
      _p$._v$2 = _$classList(_el$, _v$2, _p$._v$2);
      _v$3 !== _p$._v$3 && _$setAttribute6(_el$, "data-frozen", _p$._v$3 = _v$3);
      return _p$;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0
    });
    return _el$;
  })();
};

// src/modules/inspector/Inspector.tsx
var _tmpl$28 = /* @__PURE__ */ _$template10(`<div><header><div><button></button></div></header></div>`, 8);
var _tmpl$29 = /* @__PURE__ */ _$template10(`<button></button>`, 2);
var _tmpl$34 = /* @__PURE__ */ _$template10(`<div></div>`, 2);
var _tmpl$44 = /* @__PURE__ */ _$template10(`<div><h2></h2></div>`, 4);
var _tmpl$54 = /* @__PURE__ */ _$template10(`<div><h2>Location</h2><p></p></div>`, 6);
var _tmpl$64 = /* @__PURE__ */ _$template10(`<div><h2></h2><ul></ul></div>`, 6);
function Details() {
  const {
    inspector
  } = useController();
  const {
    details,
    inspectedNode,
    openComponentLocation,
    setInspectedNode
  } = inspector;
  return _$createComponent7(Show4, {
    get when() {
      return inspectedNode();
    },
    get children() {
      const _el$ = _tmpl$28.cloneNode(true), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild;
      _$insert10(_el$2, _$createComponent7(OwnerName, {
        get name() {
          return inspectedNode().name;
        },
        get type() {
          return inspectedNode().type;
        },
        isTitle: true
      }), _el$3);
      _$insert10(_el$3, (() => {
        const _c$ = _$memo3(() => !!details.location);
        return () => _c$() && (() => {
          const _el$5 = _tmpl$29.cloneNode(true);
          _$addEventListener3(_el$5, "click", openComponentLocation, true);
          _$insert10(_el$5, _$createComponent7(Icon.Code, {
            get ["class"]() {
              return actions.icon;
            }
          }));
          _$effect10(() => _$className9(_el$5, actions.button));
          return _el$5;
        })();
      })(), _el$4);
      _el$4.$$click = () => setInspectedNode(null);
      _$insert10(_el$4, _$createComponent7(Icon.Close, {
        get ["class"]() {
          return actions.icon;
        }
      }));
      _$insert10(_el$, _$createComponent7(Scrollable, {
        get children() {
          return _$createComponent7(DetailsContent, {});
        }
      }), null);
      _$effect10((_p$) => {
        const _v$ = root, _v$2 = header, _v$3 = actions.container, _v$4 = actions.button;
        _v$ !== _p$._v$ && _$className9(_el$, _p$._v$ = _v$);
        _v$2 !== _p$._v$2 && _$className9(_el$2, _p$._v$2 = _v$2);
        _v$3 !== _p$._v$3 && _$className9(_el$3, _p$._v$3 = _v$3);
        _v$4 !== _p$._v$4 && _$className9(_el$4, _p$._v$4 = _v$4);
        return _p$;
      }, {
        _v$: void 0,
        _v$2: void 0,
        _v$3: void 0,
        _v$4: void 0
      });
      return _el$;
    }
  });
}
var DetailsContent = () => {
  const {
    inspector
  } = useController();
  const {
    details,
    inspectedNode
  } = inspector;
  const signals = createMemo4(() => {
    const list = Object.values(details.signals);
    const memos = [];
    const signals2 = [];
    const stores = [];
    for (const signal of list) {
      if (signal.type === NodeType6.Memo)
        memos.push(signal);
      else if (signal.type === NodeType6.Signal)
        signals2.push(signal);
      else if (signal.type === NodeType6.Store)
        stores.push(signal);
    }
    return {
      memos,
      signals: signals2,
      stores
    };
  });
  return (() => {
    const _el$6 = _tmpl$34.cloneNode(true);
    _$insert10(_el$6, _$createComponent7(ListSignals, {
      get when() {
        return _$memo3(() => !!details.props)() && Object.keys(details.props).length;
      },
      get title() {
        return ["Props ", _$memo3((() => {
          const _c$4 = _$memo3(() => !!details.props.proxy);
          return () => _c$4() && _$createComponent7(Badge, {
            children: "PROXY"
          });
        })())];
      },
      get children() {
        return _$createComponent7(Entries2, {
          get of() {
            return details.props.record;
          },
          children: (name4, value) => _$createComponent7(ValueNode, {
            name: name4,
            get value() {
              return value().value;
            },
            get extended() {
              return value().selected;
            },
            onClick: () => inspector.inspectValueItem("prop", name4),
            get onElementHover() {
              return inspector.toggleHoveredElement;
            },
            isSignal: true
          })
        });
      }
    }), null);
    _$insert10(_el$6, () => ["stores", "signals", "memos"].map((type2) => _$createComponent7(ListSignals, {
      get when() {
        return signals()[type2].length;
      },
      title: type2,
      get children() {
        return _$createComponent7(For, {
          get each() {
            return signals()[type2];
          },
          children: (signal) => _$createComponent7(ValueNode, {
            get name() {
              return signal.name;
            },
            get value() {
              return signal.value;
            },
            get extended() {
              return signal.selected;
            },
            onClick: () => inspector.inspectValueItem("signal", signal.id),
            get onElementHover() {
              return inspector.toggleHoveredElement;
            },
            isSignal: type2 !== "stores"
          })
        });
      }
    })), null);
    _$insert10(_el$6, (() => {
      const _c$2 = _$memo3(() => !!details.value);
      return () => _c$2() && (() => {
        const _el$7 = _tmpl$44.cloneNode(true), _el$8 = _el$7.firstChild;
        _$insert10(_el$8, () => NodeType6[inspectedNode().type]);
        _$insert10(_el$7, _$createComponent7(ValueNode, {
          name: "value",
          get value() {
            return details.value.value;
          },
          get extended() {
            return details.value.selected;
          },
          onClick: () => inspector.inspectValueItem("value"),
          get onElementHover() {
            return inspector.toggleHoveredElement;
          },
          isSignal: true
        }), null);
        _$effect10(() => _$className9(_el$8, h2));
        return _el$7;
      })();
    })(), null);
    _$insert10(_el$6, (() => {
      const _c$3 = _$memo3(() => !!details.location);
      return () => _c$3() && (() => {
        const _el$9 = _tmpl$54.cloneNode(true), _el$10 = _el$9.firstChild, _el$11 = _el$10.nextSibling;
        _$insert10(_el$11, () => details.location);
        _$effect10((_p$) => {
          const _v$5 = h2, _v$6 = location;
          _v$5 !== _p$._v$5 && _$className9(_el$10, _p$._v$5 = _v$5);
          _v$6 !== _p$._v$6 && _$className9(_el$11, _p$._v$6 = _v$6);
          return _p$;
        }, {
          _v$5: void 0,
          _v$6: void 0
        });
        return _el$9;
      })();
    })(), null);
    _$effect10(() => _$className9(_el$6, content4));
    return _el$6;
  })();
};
function ListSignals(props) {
  return _$createComponent7(Show4, {
    get when() {
      return props.when;
    },
    get children() {
      const _el$12 = _tmpl$64.cloneNode(true), _el$13 = _el$12.firstChild, _el$14 = _el$13.nextSibling;
      _$insert10(_el$13, () => props.title);
      _$insert10(_el$14, () => props.children);
      _$effect10(() => _$className9(_el$13, h2));
      return _el$12;
    }
  });
}
_$delegateEvents5(["click"]);

// src/modules/structure/Structure.tsx
import { template as _$template13 } from "solid-js/web";
import { style as _$style2 } from "solid-js/web";
import { className as _$className12 } from "solid-js/web";
import { effect as _$effect13 } from "solid-js/web";
import { insert as _$insert13 } from "solid-js/web";
import { createComponent as _$createComponent10 } from "solid-js/web";
import { createEffect as createEffect3, createMemo as createMemo5, createSignal as createSignal7, For as For2 } from "solid-js";
import { assignInlineVars as assignInlineVars4 } from "@vanilla-extract/dynamic";
import { useRemSize as useRemSize2 } from "@solid-primitives/styles";
import { createResizeObserver } from "@solid-primitives/resize-observer";

// src/modules/structure/OwnerNode.tsx
import { template as _$template11 } from "solid-js/web";
import { delegateEvents as _$delegateEvents6 } from "solid-js/web";
import { className as _$className10 } from "solid-js/web";
import { effect as _$effect11 } from "solid-js/web";
import { insert as _$insert11 } from "solid-js/web";
import { createComponent as _$createComponent8 } from "solid-js/web";
import { spread as _$spread4 } from "solid-js/web";
import { mergeProps as _$mergeProps3 } from "solid-js/web";
import { assignInlineVars as assignInlineVars3 } from "@vanilla-extract/dynamic";

// src/modules/structure/ownerNode.css.ts
var collapse = "ownerNode_collapse__1ha08ns6";
var container6 = "ownerNode_container__1ha08ns1";
var levelPadding = "ownerNode_levelPadding__1ha08ns4";
var levelVar = "var(--levelVar__1ha08ns0)";
var nameContainer = "ownerNode_nameContainer__1ha08ns5";
var selection = "ownerNode_selection__1ha08ns2";

// src/modules/structure/OwnerNode.tsx
import { createHover as createHover2, createPingedSignal as createPingedSignal2, trackFromListen } from "@solid-devtools/shared/primitives";
var _tmpl$30 = /* @__PURE__ */ _$template11(`<div><div></div><div></div><div></div></div>`, 8);
var OwnerNode = (props) => {
  const {
    onHoverChange,
    listenToUpdate,
    onInspectChange
  } = props;
  const owner = props.owner;
  const {
    name: name4,
    type: type2,
    hmr
  } = owner;
  const {
    toggleCollapsed
  } = props;
  const isUpdated = createPingedSignal2(trackFromListen((listener) => listenToUpdate(listener)));
  const hoverProps = createHover2(onHoverChange);
  return (() => {
    const _el$ = _tmpl$30.cloneNode(true), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling, _el$4 = _el$3.nextSibling;
    _el$.$$click = () => onInspectChange(!props.isSelected);
    _$spread4(_el$, _$mergeProps3({
      get ["data-hovered"]() {
        return props.isHovered;
      },
      get ["data-selected"]() {
        return props.isSelected;
      },
      get ["class"]() {
        return container6;
      }
    }, hoverProps, {
      get style() {
        return assignInlineVars3({
          [levelVar]: props.owner.level + ""
        });
      }
    }), false, true);
    _$insert11(_el$4, _$createComponent8(CollapseToggle, {
      get ["class"]() {
        return collapse;
      },
      onToggle: () => toggleCollapsed(owner),
      get isCollapsed() {
        return props.isCollapsed;
      }
    }), null);
    _$insert11(_el$4, _$createComponent8(Highlight, {
      get highlight() {
        return isUpdated();
      },
      get children() {
        return _$createComponent8(OwnerName, {
          name: name4,
          type: type2,
          get isFrozen() {
            return props.owner.frozen;
          }
        });
      }
    }), null);
    _$insert11(_el$4, hmr && _$createComponent8(Badge, {
      children: "HMR"
    }), null);
    _$effect11((_p$) => {
      const _v$ = selection, _v$2 = levelPadding, _v$3 = nameContainer;
      _v$ !== _p$._v$ && _$className10(_el$2, _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && _$className10(_el$3, _p$._v$2 = _v$2);
      _v$3 !== _p$._v$3 && _$className10(_el$4, _p$._v$3 = _v$3);
      return _p$;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0
    });
    return _el$;
  })();
};
_$delegateEvents6(["click"]);

// src/modules/structure/Path.tsx
import { template as _$template12 } from "solid-js/web";
import { spread as _$spread5 } from "solid-js/web";
import { mergeProps as _$mergeProps4 } from "solid-js/web";
import { createComponent as _$createComponent9 } from "solid-js/web";
import { setAttribute as _$setAttribute7 } from "solid-js/web";
import { className as _$className11 } from "solid-js/web";
import { effect as _$effect12 } from "solid-js/web";
import { insert as _$insert12 } from "solid-js/web";
import { use as _$use2 } from "solid-js/web";
import { memo as _$memo4 } from "solid-js/web";
import { createElementSize } from "@solid-primitives/resize-observer";
import { useRemSize } from "@solid-primitives/styles";
import { NodeType as NodeType7 } from "@solid-devtools/debugger/types";
import { createHover as createHover3 } from "@solid-devtools/shared/primitives";

// src/modules/structure/path.css.ts
var MIN_PATH_HEIGHT_IN_REM = 1.125;
var carret = "path_carret__133vkr77";
var container7 = "path_container__133vkr75";
var content5 = "path_content__133vkr72";
var divider = "path_divider__133vkr76";
var expendable = "path_expendable__133vkr73";
var expendableIcon = "path_expendableIcon__133vkr74";
var highlight2 = "path_highlight__133vkr7d path__133vkr7b";
var item = "path_item__133vkr7c path__133vkr78";
var name3 = "path_name__133vkr7f";
var path = "path_path__133vkr70";
var typeIcon2 = "path_typeIcon__133vkr7e";

// src/modules/structure/Path.tsx
var _tmpl$31 = /* @__PURE__ */ _$template12(`<div><div><div></div></div></div>`, 6);
var _tmpl$210 = /* @__PURE__ */ _$template12(`<div></div>`, 2);
var _tmpl$35 = /* @__PURE__ */ _$template12(`<div><div></div></div>`, 4);
var OwnerPath = () => {
  const {
    structure,
    toggleHoveredNode,
    setInspectedNode,
    inspector
  } = useController();
  const rem = useRemSize();
  const containerSize = createElementSize(() => container8);
  const expandable = () => (containerSize.height ?? 0) > rem() * MIN_PATH_HEIGHT_IN_REM;
  let container8;
  return (() => {
    const _el$ = _tmpl$31.cloneNode(true), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild;
    _$insert12(_el$2, (() => {
      const _c$ = _$memo4(() => !!expandable());
      return () => _c$() && (() => {
        const _el$4 = _tmpl$210.cloneNode(true);
        _$insert12(_el$4, _$createComponent9(Icon.Options, {
          get ["class"]() {
            return expendableIcon;
          }
        }));
        _$effect12(() => _$className11(_el$4, expendable));
        return _el$4;
      })();
    })(), _el$3);
    const _ref$ = container8;
    typeof _ref$ === "function" ? _$use2(_ref$, _el$3) : container8 = _el$3;
    _$insert12(_el$3, () => inspector.details.path.map((node) => {
      const hoverProps = createHover3((hovering) => toggleHoveredNode(node.id, hovering));
      return [(() => {
        const _el$5 = _tmpl$210.cloneNode(true);
        _$insert12(_el$5, _$createComponent9(Icon.CarretRight, {
          get ["class"]() {
            return carret;
          }
        }));
        _$effect12(() => _$className11(_el$5, divider));
        return _el$5;
      })(), (() => {
        const _el$6 = _tmpl$35.cloneNode(true), _el$7 = _el$6.firstChild;
        _$spread5(_el$6, _$mergeProps4({
          get ["class"]() {
            return item;
          },
          get ["data-hovered"]() {
            return structure.isHovered(node);
          }
        }, hoverProps, {
          "onClick": () => setInspectedNode(node)
        }), false, true);
        _$insert12(_el$6, (() => {
          const _c$2 = _$memo4(() => node.type === NodeType7.Component);
          return () => _c$2() ? [_$createComponent9(NodeTypeIcon, {
            get type() {
              return NodeType7.Component;
            },
            get ["class"]() {
              return typeIcon2;
            }
          }), (() => {
            const _el$8 = _tmpl$210.cloneNode(true);
            _$insert12(_el$8, () => node.name);
            _$effect12(() => _$className11(_el$8, name3));
            return _el$8;
          })()] : _$createComponent9(NodeTypeIcon, {
            get type() {
              return node.type;
            },
            get ["class"]() {
              return typeIcon2;
            }
          });
        })(), null);
        _$effect12(() => _$className11(_el$7, highlight2));
        return _el$6;
      })()];
    }));
    _$effect12((_p$) => {
      const _v$ = path, _v$2 = content5, _v$3 = expandable(), _v$4 = container7;
      _v$ !== _p$._v$ && _$className11(_el$, _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && _$className11(_el$2, _p$._v$2 = _v$2);
      _v$3 !== _p$._v$3 && _$setAttribute7(_el$2, "data-extendable", _p$._v$3 = _v$3);
      _v$4 !== _p$._v$4 && _$className11(_el$3, _p$._v$4 = _v$4);
      return _p$;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0,
      _v$4: void 0
    });
    return _el$;
  })();
};

// src/modules/structure/virtual.ts
function getVirtualVars(listLength, scroll, containerHeight, rowHeight) {
  let start = Math.floor(scroll / rowHeight);
  let length = Math.ceil(containerHeight / rowHeight + 1);
  let end = start + length;
  if (end > listLength) {
    end = listLength;
    start = end - length;
    length = Math.min(length, listLength);
    if (start < 0)
      start = 0;
  }
  return { start, end, length };
}

// src/modules/structure/structure.css.ts
var ROW_HEIGHT_IN_REM = 1.125;
var V_MARGIN_IN_REM = 0.75;
var minLevel = "var(--minLevel__9kuowo3)";
var panelWrapper = "structure_panelWrapper__9kuowo0";
var scrolledInner = "structure_scrolledInner__9kuowo5";
var scrolledInner2 = "structure_scrolledInner2__9kuowo6";
var scrolledOuter = "structure_scrolledOuter__9kuowo4";
var startIndex = "var(--startIndex__9kuowo2)";
var treeLength = "var(--treeLength__9kuowo1)";

// src/modules/structure/Structure.tsx
var _tmpl$36 = /* @__PURE__ */ _$template13(`<div></div>`, 2);
var _tmpl$211 = /* @__PURE__ */ _$template13(`<div><div><div></div></div></div>`, 6);
function StructureView() {
  return (() => {
    const _el$ = _tmpl$36.cloneNode(true);
    _$insert13(_el$, _$createComponent10(DisplayStructureTree, {}), null);
    _$insert13(_el$, _$createComponent10(OwnerPath, {}), null);
    _$effect13(() => _$className12(_el$, panelWrapper));
    return _el$;
  })();
}
var DisplayStructureTree = () => {
  const [containerScroll, setContainerScroll] = createSignal7({
    top: 0,
    height: 0
  });
  const remSize = useRemSize2();
  const getContainerTopMargin = () => remSize() * V_MARGIN_IN_REM;
  const getRowHeight = () => remSize() * ROW_HEIGHT_IN_REM;
  const updateScrollData = (el) => {
    setContainerScroll({
      top: Math.max(el.scrollTop - getContainerTopMargin(), 0),
      height: el.clientHeight
    });
  };
  const [collapsed, setCollapsed] = createSignal7(/* @__PURE__ */ new WeakSet(), {
    equals: false
  });
  const toggleCollapsed = (node) => setCollapsed((set) => {
    set.delete(node) || set.add(node);
    return set;
  });
  const {
    structureState,
    inspectedNode,
    structure,
    isNodeInspected,
    listenToComputationUpdate,
    toggleHoveredNode,
    setInspectedNode
  } = useController();
  const collapsedList = createMemo5(() => {
    const nodeList = structureState().nodeList;
    const collapsedList2 = [];
    const set = collapsed();
    let skip = 0;
    for (const node of nodeList) {
      const skipped = skip > 0;
      if (skipped)
        skip--;
      else
        collapsedList2.push(node);
      if (skipped || set.has(node)) {
        const {
          children: children2,
          subroots
        } = node;
        skip += children2.length;
        if (subroots)
          skip += subroots.length;
      }
    }
    return collapsedList2;
  });
  const virtual = createMemo5((prev = {
    start: 0,
    end: 0,
    fullLength: 0,
    list: [],
    nodeList: [],
    minLevel: 0
  }) => {
    const nodeList = collapsedList();
    const {
      top,
      height
    } = containerScroll();
    const {
      start,
      end,
      length
    } = getVirtualVars(nodeList.length, top, height, getRowHeight());
    if (prev.nodeList === nodeList && prev.start === start && prev.end === end)
      return prev;
    const next = Array(length);
    const prevMap = {};
    for (const node of prev.list)
      prevMap[node.node.id] = node;
    let minLevel3 = length ? Infinity : 0;
    for (let i = 0; i < length; i++) {
      const node = nodeList[start + i];
      const prev2 = prevMap[node.id];
      minLevel3 = Math.min(minLevel3, node.level);
      if (prev2) {
        next[i] = prev2;
        prev2.update();
      } else {
        const [getNode, setNode] = createSignal7(node, {
          equals: false,
          internal: true
        });
        next[i] = {
          node,
          getNode,
          update: () => setNode(node)
        };
      }
    }
    return {
      list: next,
      start,
      end,
      nodeList,
      fullLength: nodeList.length,
      minLevel: minLevel3
    };
  });
  const minLevel2 = createMemo5(() => Math.max(virtual().minLevel - 7, 0), 0, {
    equals: (a, b) => a == b || Math.abs(b - a) < 7 && b != 0
  });
  createEffect3(() => {
    const node = inspectedNode();
    if (!node)
      return;
    setTimeout(() => {
      let index = collapsedList().indexOf(node);
      if (index === -1) {
        const set = collapsed();
        let parent = node.parent;
        let wasCollapsed = false;
        while (parent) {
          wasCollapsed ||= set.delete(parent);
          parent = parent.parent;
        }
        if (wasCollapsed) {
          setCollapsed(set);
          index = collapsedList().indexOf(node);
        } else
          return;
      }
      const {
        start,
        end
      } = virtual();
      const rowHeight = getRowHeight();
      const containerTopMargin = getContainerTopMargin();
      let top;
      if (index <= start)
        top = (index - 1) * rowHeight;
      else if (index >= end - 2)
        top = (index + 2) * rowHeight - containerScroll().height;
      else
        return;
      container8.scrollTop = top + containerTopMargin;
    });
  });
  let container8;
  return _$createComponent10(Scrollable, {
    ref: (el) => {
      container8 = el;
      setTimeout(() => updateScrollData(el));
      createResizeObserver(el, () => updateScrollData(el));
    },
    onScroll: (e) => updateScrollData(e.currentTarget),
    get children() {
      const _el$2 = _tmpl$211.cloneNode(true), _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild;
      _$insert13(_el$4, _$createComponent10(For2, {
        get each() {
          return virtual().list;
        },
        children: ({
          getNode,
          node
        }) => _$createComponent10(OwnerNode, {
          get owner() {
            return getNode();
          },
          get isHovered() {
            return structure.isHovered(node);
          },
          get isSelected() {
            return isNodeInspected(node.id);
          },
          listenToUpdate: (listener) => listenToComputationUpdate((id) => id === node.id && listener()),
          onHoverChange: (hovered) => toggleHoveredNode(node.id, hovered),
          onInspectChange: (inspected) => setInspectedNode(inspected ? node : null),
          toggleCollapsed,
          get isCollapsed() {
            return collapsed().has(node);
          }
        })
      }));
      _$effect13((_p$) => {
        const _v$ = scrolledOuter, _v$2 = assignInlineVars4({
          [treeLength]: virtual().fullLength.toString(),
          [startIndex]: virtual().start.toString(),
          [minLevel]: minLevel2().toString()
        }), _v$3 = scrolledInner, _v$4 = scrolledInner2;
        _v$ !== _p$._v$ && _$className12(_el$2, _p$._v$ = _v$);
        _p$._v$2 = _$style2(_el$2, _v$2, _p$._v$2);
        _v$3 !== _p$._v$3 && _$className12(_el$3, _p$._v$3 = _v$3);
        _v$4 !== _p$._v$4 && _$className12(_el$4, _p$._v$4 = _v$4);
        return _p$;
      }, {
        _v$: void 0,
        _v$2: void 0,
        _v$3: void 0,
        _v$4: void 0
      });
      return _el$2;
    }
  });
};

// src/App.css.ts
var app = "App_app__2sb15m0 vars_varsStyle__6zygq2b";
var content6 = "App_content__2sb15mg";
var header2 = "App_header__2sb15m1";
var locatorButton = "App_locatorButton__2sb15m3";
var locatorIcon = "App_locatorIcon__2sb15m4";
var options = { container: "App_options_container__2sb15mb", button: "App_options_button__2sb15mc button_toggleButton__ygz0wz4", icon: "App_options_icon__2sb15md", panel: "App_options_panel__2sb15me", menu: "App_options_menu__2sb15mf" };
var search = { form: "App_form__2sb15m5", input: "App_input__2sb15m6", iconContainer: "App_search_iconContainer__2sb15m9 App_edgeContainerBase__2sb15m7", icon: "App_iconBase__2sb15m8", clearButton: "App_search_clearButton__2sb15ma App_edgeContainerBase__2sb15m7", clearIcon: "App_iconBase__2sb15m8" };
var subtitle = "App_subtitle__2sb15m2";

// src/App.tsx
var _tmpl$37 = /* @__PURE__ */ _$template14(`<form><input type="text" placeholder="Search"><div></div></form>`, 5);
var _tmpl$212 = /* @__PURE__ */ _$template14(`<button type="reset"></button>`, 2);
var _tmpl$38 = /* @__PURE__ */ _$template14(`<div><header><div><h3>Solid Devtools</h3></div></header><div></div></div>`, 10);
var _tmpl$45 = /* @__PURE__ */ _$template14(`<p></p>`, 2);
var LocatorButton = () => {
  const ctx = useController();
  return _$createComponent11(ToggleButton, {
    get ["class"]() {
      return locatorButton;
    },
    get onToggle() {
      return ctx.setLocatorState;
    },
    get selected() {
      return ctx.locatorEnabled();
    },
    get children() {
      return _$createComponent11(Icon.Select, {
        get ["class"]() {
          return locatorIcon;
        }
      });
    }
  });
};
var Search2 = () => {
  const ctx = useController();
  const [value, setValue] = createSignal8("");
  const handleChange = (v) => {
    setValue(v);
    ctx.searchStructure("");
  };
  return (() => {
    const _el$ = _tmpl$37.cloneNode(true), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling;
    _el$.addEventListener("reset", () => handleChange(""));
    _el$.addEventListener("submit", (e) => {
      e.preventDefault();
      ctx.searchStructure(value());
    });
    _el$2.addEventListener("paste", (e) => handleChange(e.currentTarget.value));
    _el$2.$$input = (e) => handleChange(e.currentTarget.value);
    _$use3((input) => {
      if (ctx.options.useShortcuts) {
        createShortcut(["/"], () => input.focus());
        createShortcut(["Escape"], () => {
          if (document.activeElement === input)
            input.blur();
          if (input.value)
            handleChange(input.value = "");
        });
      }
    }, _el$2);
    _$insert14(_el$3, _$createComponent11(Icon.Search, {
      get ["class"]() {
        return search.icon;
      }
    }));
    _$insert14(_el$, (() => {
      const _c$ = _$memo5(() => !!value());
      return () => _c$() && (() => {
        const _el$4 = _tmpl$212.cloneNode(true);
        _$insert14(_el$4, _$createComponent11(Icon.Close, {
          get ["class"]() {
            return search.clearIcon;
          }
        }));
        _$effect14(() => _$className13(_el$4, search.clearButton));
        return _el$4;
      })();
    })(), null);
    _$effect14((_p$) => {
      const _v$ = search.form, _v$2 = search.input, _v$3 = search.iconContainer;
      _v$ !== _p$._v$ && _$className13(_el$, _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && _$className13(_el$2, _p$._v$2 = _v$2);
      _v$3 !== _p$._v$3 && _$className13(_el$3, _p$._v$3 = _v$3);
      return _p$;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0
    });
    return _el$;
  })();
};
var Options2 = () => {
  return _$createComponent11(Popover, {
    defaultOpen: false,
    get ["class"]() {
      return options.container;
    },
    children: ({
      isOpen,
      setState
    }) => [_$createComponent11(PopoverButton, {
      onKeyDown: (e) => e.key === " " && setState(true),
      get ["class"]() {
        return options.button;
      },
      get children() {
        return _$createComponent11(Icon.Options, {
          get ["class"]() {
            return options.icon;
          }
        });
      }
    }), _$createComponent11(Show5, {
      get when() {
        return isOpen();
      },
      get children() {
        return _$createComponent11(PopoverPanel, {
          get ["class"]() {
            return options.panel;
          },
          "on:keydown": (e) => e.key === "Escape" && e.stopPropagation(),
          get children() {
            return _$createComponent11(Menu, {
              get ["class"]() {
                return options.menu;
              },
              get children() {
                return _$createComponent11(MenuItem, {
                  as: "a",
                  href: "https://github.com/thetarnav/solid-devtools/issues",
                  target: "_blank",
                  children: "Report a bug"
                });
              }
            });
          }
        });
      }
    })]
  });
};
var App = (props) => {
  const ctx = useController();
  return (() => {
    const _el$5 = _tmpl$38.cloneNode(true), _el$6 = _el$5.firstChild, _el$7 = _el$6.firstChild, _el$8 = _el$7.firstChild, _el$9 = _el$6.nextSibling;
    _$insert14(_el$6, _$createComponent11(LocatorButton, {}), _el$7);
    _$insert14(_el$6, _$createComponent11(Search2, {}), _el$7);
    _$insert14(_el$7, (() => {
      const _c$2 = _$memo5(() => !!props.headerSubtitle);
      return () => _c$2() && (() => {
        const _el$10 = _tmpl$45.cloneNode(true);
        _$insert14(_el$10, () => props.headerSubtitle);
        _$effect14(() => _$className13(_el$10, subtitle));
        return _el$10;
      })();
    })(), null);
    _$insert14(_el$6, _$createComponent11(Options2, {}), null);
    _$insert14(_el$9, _$createComponent11(Splitter, {
      onToggle: () => ctx.setInspectedNode(null),
      get side() {
        return _$createComponent11(Details, {});
      },
      get children() {
        return _$createComponent11(StructureView, {});
      }
    }));
    _$effect14((_p$) => {
      const _v$4 = app, _v$5 = header2, _v$6 = content6;
      _v$4 !== _p$._v$4 && _$className13(_el$5, _p$._v$4 = _v$4);
      _v$5 !== _p$._v$5 && _$className13(_el$6, _p$._v$5 = _v$5);
      _v$6 !== _p$._v$6 && _$className13(_el$9, _p$._v$6 = _v$6);
      return _p$;
    }, {
      _v$4: void 0,
      _v$5: void 0,
      _v$6: void 0
    });
    return _el$5;
  })();
};
var App_default = App;
_$delegateEvents7(["input"]);

// src/index.tsx
var Devtools = (props) => {
  return _$createComponent12(ErrorOverlay, {
    get footer() {
      return props.errorOverlayFooter;
    },
    get catchWindowErrors() {
      return props.catchWindowErrors;
    },
    get children() {
      return _$createComponent12(Provider, {
        get controller() {
          return props.controller;
        },
        get options() {
          return {
            useShortcuts: props.useShortcuts ?? false
          };
        },
        get children() {
          return _$createComponent12(App_default, {
            get headerSubtitle() {
              return props.headerSubtitle;
            }
          });
        }
      });
    }
  });
};
export {
  Controller,
  Devtools,
  Icon,
  MountIcons
};
