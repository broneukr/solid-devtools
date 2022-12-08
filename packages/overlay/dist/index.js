import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "./chunk-P7VEE7PG.js";

// ../../node_modules/.pnpm/@vanilla-extract+private@1.0.3/node_modules/@vanilla-extract/private/dist/vanilla-extract-private.esm.js
var vanilla_extract_private_esm_exports = {};
__export(vanilla_extract_private_esm_exports, {
  get: () => get,
  getVarName: () => getVarName,
  walkObject: () => walkObject
});
function getVarName(variable) {
  var matches = variable.match(/^var\((.*)\)$/);
  if (matches) {
    return matches[1];
  }
  return variable;
}
function get(obj, path) {
  var result = obj;
  for (var key of path) {
    if (!(key in result)) {
      throw new Error("Path ".concat(path.join(" -> "), " does not exist in object"));
    }
    result = result[key];
  }
  return result;
}
function walkObject(obj, fn2) {
  var path = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
  var clone2 = obj.constructor();
  for (var key in obj) {
    var _value = obj[key];
    var currentPath = [...path, key];
    if (typeof _value === "string" || typeof _value === "number" || _value == null) {
      clone2[key] = fn2(_value, currentPath);
    } else if (typeof _value === "object" && !Array.isArray(_value)) {
      clone2[key] = walkObject(_value, fn2, currentPath);
    } else {
      console.warn('Skipping invalid key "'.concat(currentPath.join("."), '". Should be a string, number, null or object. Received: "').concat(Array.isArray(_value) ? "Array" : typeof _value, '"'));
    }
  }
  return clone2;
}
var init_vanilla_extract_private_esm = __esm({
  "../../node_modules/.pnpm/@vanilla-extract+private@1.0.3/node_modules/@vanilla-extract/private/dist/vanilla-extract-private.esm.js"() {
  }
});

// ../../node_modules/.pnpm/@vanilla-extract+dynamic@2.0.3/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.cjs.prod.js
var require_vanilla_extract_dynamic_cjs_prod = __commonJS({
  "../../node_modules/.pnpm/@vanilla-extract+dynamic@2.0.3/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.cjs.prod.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _private = (init_vanilla_extract_private_esm(), __toCommonJS(vanilla_extract_private_esm_exports));
    function assignInlineVars2(varsOrContract, tokens) {
      var styles = {};
      if (typeof tokens === "object") {
        var _contract = varsOrContract;
        _private.walkObject(tokens, (value, path) => {
          var varName2 = _private.get(_contract, path);
          styles[_private.getVarName(varName2)] = String(value);
        });
      } else {
        var _vars = varsOrContract;
        for (var varName in _vars) {
          styles[_private.getVarName(varName)] = _vars[varName];
        }
      }
      Object.defineProperty(styles, "toString", {
        value: function value() {
          return Object.keys(this).map((key) => "".concat(key, ":").concat(this[key])).join(";");
        },
        writable: false
      });
      return styles;
    }
    function setVar(element, variable, value) {
      element.style.setProperty(_private.getVarName(variable), value);
    }
    function setElementVars(element, varsOrContract, tokens) {
      if (typeof tokens === "object") {
        var _contract = varsOrContract;
        _private.walkObject(tokens, (value, path) => {
          setVar(element, _private.get(_contract, path), String(value));
        });
      } else {
        var _vars = varsOrContract;
        for (var varName in _vars) {
          setVar(element, varName, _vars[varName]);
        }
      }
    }
    exports.assignInlineVars = assignInlineVars2;
    exports.setElementVars = setElementVars;
  }
});

// ../../node_modules/.pnpm/@vanilla-extract+dynamic@2.0.3/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.cjs.dev.js
var require_vanilla_extract_dynamic_cjs_dev = __commonJS({
  "../../node_modules/.pnpm/@vanilla-extract+dynamic@2.0.3/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.cjs.dev.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _private = (init_vanilla_extract_private_esm(), __toCommonJS(vanilla_extract_private_esm_exports));
    function assignInlineVars2(varsOrContract, tokens) {
      var styles = {};
      if (typeof tokens === "object") {
        var _contract = varsOrContract;
        _private.walkObject(tokens, (value, path) => {
          var varName2 = _private.get(_contract, path);
          styles[_private.getVarName(varName2)] = String(value);
        });
      } else {
        var _vars = varsOrContract;
        for (var varName in _vars) {
          styles[_private.getVarName(varName)] = _vars[varName];
        }
      }
      Object.defineProperty(styles, "toString", {
        value: function value() {
          return Object.keys(this).map((key) => "".concat(key, ":").concat(this[key])).join(";");
        },
        writable: false
      });
      return styles;
    }
    function setVar(element, variable, value) {
      element.style.setProperty(_private.getVarName(variable), value);
    }
    function setElementVars(element, varsOrContract, tokens) {
      if (typeof tokens === "object") {
        var _contract = varsOrContract;
        _private.walkObject(tokens, (value, path) => {
          setVar(element, _private.get(_contract, path), String(value));
        });
      } else {
        var _vars = varsOrContract;
        for (var varName in _vars) {
          setVar(element, varName, _vars[varName]);
        }
      }
    }
    exports.assignInlineVars = assignInlineVars2;
    exports.setElementVars = setElementVars;
  }
});

// ../../node_modules/.pnpm/@vanilla-extract+dynamic@2.0.3/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.cjs.js
var require_vanilla_extract_dynamic_cjs = __commonJS({
  "../../node_modules/.pnpm/@vanilla-extract+dynamic@2.0.3/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.cjs.js"(exports, module) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module.exports = require_vanilla_extract_dynamic_cjs_prod();
    } else {
      module.exports = require_vanilla_extract_dynamic_cjs_dev();
    }
  }
});

// src/index.tsx
import { template as _$template } from "solid-js/web";
import { delegateEvents as _$delegateEvents } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
import { setAttribute as _$setAttribute } from "solid-js/web";
import { effect as _$effect } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
import { createComponent as _$createComponent } from "solid-js/web";
import { createComputed as createComputed2, createSignal as createSignal3, onCleanup as onCleanup4, Show as Show2 } from "solid-js";
import { Dynamic, Portal } from "solid-js/web";
import { makeEventListener as makeEventListener2 } from "@solid-primitives/event-listener";
import { onRootCleanup as onRootCleanup2 } from "@solid-primitives/utils";
import { clamp as clamp2 } from "@solid-primitives/utils";
import { createBodyCursor as createBodyCursor2 } from "@solid-primitives/cursor";

// ../frontend/dist/index.js
import { template, delegateEvents, effect, setAttribute, insert, createComponent as createComponent2, mergeProps as mergeProps2, addEventListener, memo, className, use, style, spread, classList } from "solid-js/web";

// ../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js
function r(e) {
  var t, f2, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (f2 = r(e[t])) && (n && (n += " "), n += f2);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f2 = 0, n = ""; f2 < arguments.length; )
    (e = arguments[f2++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_m_default = clsx;

// ../frontend/dist/index.js
var import_dynamic = __toESM(require_vanilla_extract_dynamic_cjs(), 1);
import { createSignal as createSignal2, batch, createEffect as createEffect2, on as on4, createContext as createContext2, createMemo as createMemo3, createSelector, untrack, onError, ErrorBoundary, mergeProps as mergeProps$1, Show, children, createComputed, For, useContext as useContext2, Switch, Match } from "solid-js";
import { makeEventListener } from "@solid-primitives/event-listener";
import { clamp } from "@solid-primitives/utils";
import { createBodyCursor } from "@solid-primitives/cursor";
import { createMediaQuery } from "@solid-primitives/media";

// ../../node_modules/.pnpm/@solid-primitives+scheduled@1.2.0_solid-js@1.6.2/node_modules/@solid-primitives/scheduled/dist/server.js
import "solid-js";
var scheduleIdle = () => Object.assign(() => void 0, { clear: () => void 0 });

// ../../node_modules/.pnpm/@solid-primitives+mouse@2.0.4_solid-js@1.6.2/node_modules/@solid-primitives/mouse/dist/server.js
import "@solid-primitives/event-listener";
import { noop } from "@solid-primitives/utils";

// ../../node_modules/.pnpm/@solid-primitives+rootless@1.2.1_solid-js@1.6.2/node_modules/@solid-primitives/rootless/dist/index.js
import { getOwner, createRoot, runWithOwner, onCleanup } from "solid-js";
import { asArray, access } from "@solid-primitives/utils";
function createSharedRoot(factory) {
  let listeners = 0;
  let value;
  let dispose;
  return () => {
    if (!dispose) {
      createRoot((_dispose) => {
        value = factory(_dispose);
        dispose = _dispose;
      });
    }
    listeners++;
    getOwner() && onCleanup(() => {
      listeners--;
      queueMicrotask(() => {
        if (listeners || !dispose)
          return;
        dispose();
        dispose = void 0;
        value = void 0;
      });
    });
    return value;
  };
}

// ../../node_modules/.pnpm/@solid-primitives+mouse@2.0.4_solid-js@1.6.2/node_modules/@solid-primitives/mouse/dist/server.js
import "solid-js";
var DEFAULT_MOUSE_POSITION = {
  x: 0,
  y: 0,
  isInside: false,
  sourceType: null
};
var DEFAULT_RELATIVE_ELEMENT_POSITION = {
  x: 0,
  y: 0,
  top: 0,
  left: 0,
  width: 0,
  height: 0,
  isInside: false
};
var getPositionInElement = (pageX, pageY, el3) => {
  {
    return DEFAULT_RELATIVE_ELEMENT_POSITION;
  }
};
function createMousePosition(target, options = {}) {
  {
    return DEFAULT_MOUSE_POSITION;
  }
}
var useMousePosition = /* @__PURE__ */ createSharedRoot(
  createMousePosition.bind(void 0, void 0, void 0)
);

// ../../node_modules/.pnpm/@solid-primitives+props@3.0.1_solid-js@1.6.2/node_modules/@solid-primitives/props/dist/server.js
import { $PROXY, createMemo, mergeProps } from "solid-js";
import { chain } from "@solid-primitives/utils";
function trueFn() {
  return true;
}
var propTraps = {
  get(_2, property, receiver) {
    if (property === $PROXY)
      return receiver;
    return _2.get(property);
  },
  has(_2, property) {
    return _2.has(property);
  },
  set: trueFn,
  deleteProperty: trueFn,
  getOwnPropertyDescriptor(_2, property) {
    return {
      configurable: true,
      enumerable: true,
      get() {
        return _2.get(property);
      },
      set: trueFn,
      deleteProperty: trueFn
    };
  },
  ownKeys(_2) {
    return _2.keys();
  }
};
var extractCSSregex = /([^:; ]*):\s*([^;]*)/g;
var isEventListenerKey = (key) => key[0] === "o" && key[1] === "n" && key.length > 2 && key[2] !== ":" && !key.startsWith("oncapture:");
function stringStyleToObject(style2) {
  const object = {};
  let match;
  while (match = extractCSSregex.exec(style2)) {
    object[match[1]] = match[2];
  }
  return object;
}
function combineStyle(a, b) {
  if (typeof a === "object" && typeof b === "object")
    return { ...a, ...b };
  if (typeof a === "string" && typeof b === "string")
    return `${a};${b}`;
  const objA = typeof a === "object" ? a : stringStyleToObject(a);
  const objB = typeof b === "object" ? b : stringStyleToObject(b);
  return { ...objA, ...objB };
}
function combineProps(...sources) {
  if (sources.length === 1)
    return sources[0];
  const merge = mergeProps(...sources);
  const reduce = (key, calc) => {
    let v = void 0;
    for (const props of sources) {
      const propV = props[key];
      if (!v)
        v = propV;
      else if (propV)
        v = calc(v, propV);
    }
    return v;
  };
  const listeners = {};
  for (const props of sources) {
    for (const key in props) {
      if (!isEventListenerKey(key))
        continue;
      const v = props[key];
      const name = key.toLowerCase();
      let callback;
      if (typeof v === "function")
        callback = v;
      else if (Array.isArray(v)) {
        if (v.length === 1)
          callback = v[0];
        else
          callback = v[0].bind(void 0, v[1]);
      } else {
        delete listeners[name];
        continue;
      }
      const callbacks = listeners[name];
      if (!callbacks)
        listeners[name] = [callback];
      else
        callbacks.push(callback);
    }
  }
  return new Proxy(
    {
      get(key) {
        if (typeof key !== "string")
          return Reflect.get(merge, key);
        if (key === "style")
          return reduce("style", combineStyle);
        if (key === "ref") {
          const callbacks = [];
          for (const props of sources) {
            const cb = props[key];
            if (typeof cb === "function")
              callbacks.push(cb);
          }
          return chain(callbacks);
        }
        if (isEventListenerKey(key)) {
          const callbacks = listeners[key.toLowerCase()];
          return Array.isArray(callbacks) ? chain(callbacks) : Reflect.get(merge, key);
        }
        if (key === "class" || key === "className")
          return reduce(key, (a, b) => `${a} ${b}`);
        if (key === "classList")
          return reduce(key, (a, b) => ({ ...a, ...b }));
        return Reflect.get(merge, key);
      },
      has(key) {
        return Reflect.has(merge, key);
      },
      keys() {
        return Object.keys(merge);
      }
    },
    propTraps
  );
}

// ../../node_modules/.pnpm/@solid-primitives+context@0.1.2_solid-js@1.6.2/node_modules/@solid-primitives/context/dist/index.js
import { createContext, createComponent, useContext } from "solid-js";
function createContextProvider(factoryFn, defaults) {
  const ctx = createContext(defaults);
  const Provider = (props) => {
    return createComponent(ctx.Provider, {
      value: factoryFn(props),
      get children() {
        return props.children;
      }
    });
  };
  const useProvider = () => useContext(ctx);
  return [Provider, useProvider];
}

// ../frontend/dist/index.js
import { NodeType, ValueType, NEGATIVE_INFINITY, INFINITY, NAN } from "@solid-devtools/debugger/types";

// ../../node_modules/.pnpm/@solid-primitives+event-bus@0.1.4_solid-js@1.6.2/node_modules/@solid-primitives/event-bus/dist/index.js
import { getOwner as getOwner2, onCleanup as onCleanup2, createSignal, createEffect, on } from "solid-js";
import { noop as noop2 } from "@solid-primitives/utils";
var onRootCleanup = (fn2) => getOwner2() ? onCleanup2(fn2) : fn2;
function createSimpleEmitter(initial) {
  const set = new Set(initial);
  onRootCleanup(() => set.clear());
  return [
    (listener) => {
      set.add(listener);
      onRootCleanup(() => set.delete(listener));
      return () => set.delete(listener);
    },
    (...payload) => set.forEach((cb) => cb(...payload)),
    () => set.clear()
  ];
}

// ../frontend/dist/index.js
import { createStore, produce } from "solid-js/store";
import { defer, untrackedCallback, createPingedSignal, trackFromListen, createHover } from "@solid-devtools/shared/primitives";
import { warn, error } from "@solid-devtools/shared/utils";

// ../../node_modules/.pnpm/solid-headless@0.13.0_solid-js@1.6.2/node_modules/solid-headless/dist/esm/production/index.mjs
import { createComponent as ys, createMemo as Vs } from "solid-js";
import { createContext as Hs, useContext as vs } from "solid-js";
import { createComponent as As, createMemo as Ls } from "solid-js";
import { batch as Os, createSignal as Rs } from "solid-js";
import { createComponent as Bs, createMemo as Xs } from "solid-js";
import { createContext as Us, useContext as Ms } from "solid-js";
import { createComponent as ht, createMemo as go } from "solid-js";
import { createContext as Js, useContext as Ns } from "solid-js";
import { createComponent as Pe, createMemo as zs } from "solid-js";
import { batch as _s, createSignal as bo, untrack as Gs } from "solid-js";
import { createSignal as Do, untrack as ws, batch as Fs } from "solid-js";
import { createMemo as Ys } from "solid-js";
import { createContext as Ks, useContext as $s } from "solid-js";
import { createComponent as ei, createMemo as ti } from "solid-js";
import { batch as Qs, createSignal as Zs } from "solid-js";
import { createMemo as si } from "solid-js";
import { createContext as ri, useContext as ni } from "solid-js";
import { createComponent as ci, createMemo as mi } from "solid-js";
import { batch as ai, createSignal as di } from "solid-js";
import { createComponent as Pi, createMemo as gi } from "solid-js";
import { createContext as fi, useContext as Ci } from "solid-js";
import { createComponent as Ut, createMemo as vo } from "solid-js";
import { createContext as hi, useContext as bi } from "solid-js";
import { createComponent as Mt, createMemo as yi } from "solid-js";
import { createSignal as Vo, untrack as Hi, batch as vi } from "solid-js";
import { createComponent as Me } from "solid-js";
import { createComponent as Xi, mergeProps as ki } from "solid-js";

// ../../node_modules/.pnpm/solid-use@0.5.0_solid-js@1.6.2/node_modules/solid-use/dist/esm/production/index.js
import { createMemo as g } from "solid-js";
import { onCleanup as j } from "solid-js";
import { createMemo as B } from "solid-js";
import { createSignal as $ } from "solid-js";
import { createEffect as J, createSignal as X, onCleanup as V } from "solid-js";
import { createSignal as z, createEffect as G, onCleanup as H } from "solid-js";
import { createEffect as N, createSignal as Y, onCleanup as Z } from "solid-js";
import { getOwner as te, runWithOwner as re, createMemo as se, createResource as ne } from "solid-js";
import { createEffect as ce, createMemo as fe, createResource as p, createSignal as le } from "solid-js";
var { is: S } = Object;
function _(r2, e) {
  let t = {}, s = Object.keys(r2);
  for (let n = 0, i = s.length; n < i; n += 1) {
    let o = s[n];
    e.includes(o) || Object.defineProperty(t, o, { get() {
      return r2[o];
    }, configurable: true, enumerable: true });
  }
  return t;
}
var u = globalThis.fetch;

// ../../node_modules/.pnpm/solid-headless@0.13.0_solid-js@1.6.2/node_modules/solid-headless/dist/esm/production/index.mjs
import { createComponent as Ei, mergeProps as Oi } from "solid-js";
import { Dynamic as Ri } from "solid-js/web";
import { createContext as Ui, createUniqueId as Mi, useContext as Bi } from "solid-js";
import { createComponent as Ni, mergeProps as _i } from "solid-js";
import { createComponent as wi, mergeProps as Fi } from "solid-js";
import { createComponent as zi, mergeProps as qi } from "solid-js";
import { createComponent as Zi, createUniqueId as Wo, mergeProps as el } from "solid-js";
import { createContext as ji, useContext as Qi } from "solid-js";
import { mergeProps as rl } from "solid-js";
import { createSignal as ul, createEffect as pl, onCleanup as fl, createComponent as Cl, mergeProps as Pl } from "solid-js";
import { createEffect as il, createSignal as ll, onCleanup as al, mergeProps as dl } from "solid-js";
import { mergeProps as Tl } from "solid-js";
import { createComponent as zo, Show as qo } from "solid-js";
import { createUniqueId as Dl, mergeProps as Sl } from "solid-js";
import { createComponent as rr } from "solid-js";
import { createComponent as Zo, createUniqueId as Xe, mergeProps as Ol } from "solid-js";
import { onCleanup as yl } from "solid-js";
import { createContext as Vl, useContext as El } from "solid-js";
import { createComponent as tr, createUniqueId as ke, mergeProps as Al } from "solid-js";
import { mergeProps as Ml } from "solid-js";
import { createSignal as kl, createEffect as Jl, onCleanup as Nl, mergeProps as _l } from "solid-js";
import { createSignal as Fl, createEffect as Wl, onCleanup as zl, mergeProps as ql } from "solid-js";
import { mergeProps as Yl } from "solid-js";
import { createComponent as mr } from "solid-js";
import { createComponent as lr, createUniqueId as Ne, mergeProps as oa } from "solid-js";
import { createMemo as Zl } from "solid-js";
import { createContext as ea, useContext as ta } from "solid-js";
import { createComponent as dr, createUniqueId as _e, mergeProps as na } from "solid-js";
import { mergeProps as aa } from "solid-js";
import { createSignal as ma, createEffect as ua, onCleanup as pa, createComponent as ur, mergeProps as fa } from "solid-js";
import { mergeProps as ga } from "solid-js";
import { createContext as ha, createEffect as Nt, createMemo as ba, onCleanup as Da, useContext as Sa, createSignal as Ha, createComponent as va } from "solid-js";
import { createComponent as br } from "solid-js";
import { createComponent as Gt, createUniqueId as we, mergeProps as Ia } from "solid-js";
import { createContext as Ea, useContext as Oa } from "solid-js";
import { createEffect as Ra, onCleanup as Aa, createMemo as La } from "solid-js";
import { createComponent as wt, createUniqueId as Fe, mergeProps as Ma } from "solid-js";
import { mergeProps as Ja } from "solid-js";
import { createSignal as Ga, createEffect as wa, onCleanup as Fa, mergeProps as Wa } from "solid-js";
import { createSignal as Ka, createEffect as $a, onCleanup as Ya, mergeProps as ja } from "solid-js";
import { mergeProps as ed } from "solid-js";
import { createComponent as Or } from "solid-js";
import { createComponent as vr, createUniqueId as Ft, mergeProps as sd } from "solid-js";
import { createContext as rd, useContext as nd } from "solid-js";
import { createComponent as Vr, createUniqueId as Wt, mergeProps as ld } from "solid-js";
import { createSignal as md, createEffect as ud, onCleanup as pd, mergeProps as fd } from "solid-js";
import { createSignal as gd, createEffect as xd, onCleanup as Td, mergeProps as hd } from "solid-js";
import { createSignal as Sd, createEffect as Hd, onCleanup as vd, mergeProps as yd } from "solid-js";
import { createComponent as kr } from "solid-js";
import { createUniqueId as qe, mergeProps as Ad, createComponent as Ur } from "solid-js";
import { createContext as Od, useContext as Rd } from "solid-js";
import { createUniqueId as Ke, mergeProps as Id, createComponent as Br } from "solid-js";
import { mergeProps as Xd } from "solid-js";
import { createSignal as Nd, createEffect as _d, onCleanup as Gd, mergeProps as wd } from "solid-js";
import { createSignal as zd, createEffect as qd, onCleanup as Kd, mergeProps as $d } from "solid-js";
import { mergeProps as Qd } from "solid-js";
import { createComponent as Wr } from "solid-js";
import { createComponent as _r, createUniqueId as zt, mergeProps as rc } from "solid-js";
import { createContext as tc, useContext as oc } from "solid-js";
import { createComponent as wr, createUniqueId as qt, mergeProps as sc } from "solid-js";
import { createSignal as dc, createEffect as cc, onCleanup as mc, mergeProps as uc } from "solid-js";
import { createComponent as pc } from "solid-js/web";
import { mergeProps as Pc } from "solid-js";
import { createComponent as bc, createUniqueId as $t, mergeProps as Dc } from "solid-js";
import { createContext as Tc, useContext as hc } from "solid-js";
import { createComponent as Oc, createEffect as Rc, createSignal as Ac, createUniqueId as Qt, mergeProps as Lc, onCleanup as Ic } from "solid-js";
import { createContext as vc, useContext as yc } from "solid-js";
import { createContext as Vc, useContext as Ec } from "solid-js";
import { mergeProps as Bc } from "solid-js";
import { mergeProps as Jc } from "solid-js";
import { createSignal as Gc, createEffect as wc, onCleanup as Fc, createComponent as Wc, mergeProps as zc } from "solid-js";
import { mergeProps as $c } from "solid-js";
import { createComponent as q } from "solid-js";
import { createComponent as Zt, createSignal as em, createUniqueId as Qe, mergeProps as tm } from "solid-js";
import { createContext as Qc, useContext as Zc } from "solid-js";
import { createComponent as eo, createSignal as rm, createUniqueId as Ze, mergeProps as nm } from "solid-js";
import { createComponent as to, createSignal as im, createUniqueId as et, mergeProps as lm } from "solid-js";
import { createComponent as oo, createSignal as dm, createUniqueId as tt, mergeProps as cm } from "solid-js";
import { createComponent as ro, createSignal as um, createUniqueId as ot, mergeProps as pm } from "solid-js";
import { createComponent as no, createSignal as Cm, createUniqueId as rt, mergeProps as Pm } from "solid-js";
import { createComponent as so, createSignal as xm, createUniqueId as nt, mergeProps as Tm } from "solid-js";
import { createComponent as io, createSignal as bm, createUniqueId as st, mergeProps as Dm } from "solid-js";
import { createSignal as ym, createEffect as Vm, onCleanup as fn, createComponent as Em, mergeProps as Om } from "solid-js";
import { mergeProps as Lm } from "solid-js";
import { createSignal as Xm, onCleanup as gn, createEffect as xn, untrack as km, createComponent as Jm, mergeProps as Nm, batch as Tn } from "solid-js";
import { createContext as Mm, useContext as Bm } from "solid-js";
import { createSignal as wm, createEffect as hn, onCleanup as Fm, createComponent as Wm, mergeProps as zm } from "solid-js";
import { createComponent as Qm, mergeProps as Zm } from "solid-js";
import { createContext as $m, createUniqueId as Ym, useContext as jm } from "solid-js";
import { createSignal as nu, onCleanup as yn, createEffect as su, mergeProps as iu, createComponent as lu } from "solid-js";
import { createMemo as ou } from "solid-js";
import { createComponent as Un } from "solid-js";
import { createComponent as Rn, createSignal as uu, createUniqueId as co, mergeProps as pu } from "solid-js";
import { createContext as cu, useContext as mu } from "solid-js";
import { createComponent as Ln, createSignal as Cu, createUniqueId as mo, mergeProps as Pu } from "solid-js";
import { createSignal as hu, createEffect as bu, onCleanup as Mn, createComponent as Du, mergeProps as Su } from "solid-js";
import { createSignal as yu, createEffect as Vu, onCleanup as Eu, mergeProps as Ou } from "solid-js";
import { createSignal as Lu, createEffect as Iu, onCleanup as Uu, mergeProps as Mu } from "solid-js";
import { createComponent as zn } from "solid-js";
import { createUniqueId as Nn, mergeProps as wu } from "solid-js";
import { createComponent as _n } from "solid-js/web";
import { createContext as ku, useContext as Ju } from "solid-js";
import { createContext as Nu, createUniqueId as _u, useContext as Gu } from "solid-js";
import { createUniqueId as wn, mergeProps as Wu } from "solid-js";
import { createComponent as Fn } from "solid-js/web";
import { mergeProps as $u } from "solid-js";
import { mergeProps as Qu } from "solid-js";
import { createComponent as tp, createEffect as op, createSignal as rp, createUniqueId as qn, mergeProps as np, onCleanup as sp } from "solid-js";
import { createComponent as mt } from "solid-js";
import { createComponent as Yn, mergeProps as mp } from "solid-js";
import { createContext as ap, createUniqueId as dp, useContext as cp } from "solid-js";
import { createComponent as Qn, mergeProps as pp } from "solid-js";
import { createComponent as es, mergeProps as Cp } from "solid-js";
import { createComponent as os, mergeProps as gp } from "solid-js";
import { createComponent as bp, createEffect as Dp, createSignal as Sp, mergeProps as Hp, onCleanup as ss } from "solid-js";
import { createEffect as Lp, createSignal as Ip, mergeProps as Up, onCleanup as Mp } from "solid-js";
import { createContext as Vp, useContext as Ep } from "solid-js";
import { createContext as Op, createUniqueId as Rp, useContext as Ap } from "solid-js";
import { createComponent as ps } from "solid-js";
import { mergeProps as kp, createComponent as Jp, createUniqueId as Np } from "solid-js";
import { mergeProps as Gp, createComponent as wp, createUniqueId as Fp } from "solid-js";
import { createComponent as Kp, mergeProps as $p } from "solid-js";
import { mergeProps as Qp } from "solid-js";
import { mergeProps as rf } from "solid-js";
import { createContext as tf, useContext as of } from "solid-js";
import { createComponent as lf, createUniqueId as af, mergeProps as df } from "solid-js";
import { createSignal as uf, createEffect as pf, onCleanup as ff } from "solid-js";
import { createComponent as hs } from "solid-js";
import { createSignal as Cf, createEffect as Pf, onCleanup as gf, createComponent as xf, mergeProps as Tf } from "solid-js";
import { createSignal as xs, createEffect as bf, onCleanup as Df, createComponent as Sf, mergeProps as Hf, untrack as vf, batch as yf } from "solid-js";
import { createEffect as Of, createSignal as Rf, mergeProps as Af, onCleanup as Lf } from "solid-js";
import { createComponent as bs, createContext as Mf, createEffect as Bf, createSignal as Ds, mergeProps as Xf, splitProps as kf, useContext as Jf } from "solid-js";
var Pt = Hs();
function g2() {
  let e = vs(Pt);
  if (e)
    return e;
  throw new Error("`useHeadlessDisclosureProperties` must be used within `<HeadlessDisclosureRoot>`.");
}
function Es(e) {
  return typeof e == "function" && e.length > 0;
}
function Co(e) {
  let t = g2();
  return Vs(() => {
    let o = e.children;
    return Es(o) ? o(t) : o;
  });
}
function f(e) {
  return { get children() {
    return ys(Co, { get children() {
      return e.children;
    } });
  } };
}
function gt(e) {
  let t, o;
  if ("defaultOpen" in e) {
    let [n, s] = Rs(e.defaultOpen);
    t = n, o = (r2) => {
      Os(() => {
        var a;
        s(r2), (a = e.onChange) == null || a.call(e, r2);
      });
    };
  } else
    t = () => e.isOpen, o = (n) => {
      var s;
      return (s = e.onChange) == null ? void 0 : s.call(e, n);
    };
  return { isOpen() {
    return t();
  }, setState(n) {
    e.disabled || o(n);
  }, disabled() {
    return !!e.disabled;
  } };
}
function Is(e) {
  return typeof e == "function" && e.length > 0;
}
function P2(e) {
  let t = gt(e);
  return As(Pt.Provider, { value: t, get children() {
    return Ls(() => {
      let o = e.children;
      return Is(o) ? o(t) : o;
    });
  } });
}
var xt = Us();
var Re = Js();
var yt = Ks();
var Ot = ri();
var Lt = fi();
var It = hi();
function d(e, t) {
  return Ei(Ri, Oi({ get component() {
    return e();
  } }, t));
}
function Ai(e) {
  return typeof e == "function";
}
function m(e, t) {
  return (o) => {
    "ref" in e && Ai(e.ref) && e.ref(o), t(o);
  };
}
function u2(e) {
  return { get disabled() {
    return e();
  }, get "aria-disabled"() {
    return e();
  }, get "data-sh-disabled"() {
    return e();
  } };
}
function B2(e) {
  return { get "aria-expanded"() {
    return e();
  }, get "data-sh-expanded"() {
    return e();
  } };
}
var Li = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable]';
function H2(e, t) {
  let o = e.querySelectorAll(Li), n = [];
  for (let s = 0, r2 = o.length; s < r2; s += 1)
    (!t || !t.contains(o[s])) && n.push(o[s]);
  return n;
}
function Ro(e) {
  return !e.matches('[data-sh-disabled="true"]');
}
function Ie(e, t, o) {
  let n = t + o;
  for (; n >= 0 && n < e.length; ) {
    if (Ro(e[n]))
      return e[n];
    n += o;
  }
}
function Ao(e, t, o) {
  let n = t + o;
  for (o === 1 && n === e.length && (n = 0), o === -1 && n === -1 && (n = e.length - 1); t !== n; ) {
    if (Ro(e[n]))
      return e[n];
    n += o, o === 1 && n >= e.length && (n = 0), o === -1 && n < 0 && (n = e.length - 1);
  }
}
function Lo(e, t) {
  var o;
  for (let n = 0, s = e.length; n < s; n += 1)
    if (t === e[n] && n + 1 < s) {
      (o = Ie(e, n, 1)) == null || o.focus();
      break;
    }
}
function Io(e, t) {
  var o;
  for (let n = 0, s = e.length; n < s; n += 1)
    if (t === e[n] && n - 1 >= 0) {
      (o = Ie(e, n, -1)) == null || o.focus();
      break;
    }
}
function te2(e, t) {
  var o;
  for (let n = 0, s = e.length; n < s; n += 1)
    if (t === e[n]) {
      (o = Ao(e, n, 1)) == null || o.focus();
      break;
    }
}
function oe(e, t) {
  var o;
  for (let n = 0, s = e.length; n < s; n += 1)
    if (t === e[n]) {
      (o = Ao(e, n, -1)) == null || o.focus();
      break;
    }
}
function A(e) {
  var t;
  return e.length ? ((t = Ie(e, -1, 1)) == null || t.focus(), true) : false;
}
function Te(e) {
  var t;
  return e.length ? ((t = Ie(e, e.length, -1)) == null || t.focus(), true) : false;
}
function Uo(e, t) {
  var n;
  let o = t.toLowerCase();
  for (let s = 0, r2 = e.length; s < r2; s += 1)
    if ((n = e[s].textContent) != null && n.toLowerCase().startsWith(o)) {
      e[s].focus();
      return;
    }
}
function X2(e, t) {
  let o = H2(e);
  t ? !document.activeElement || !e.contains(document.activeElement) ? Te(o) : oe(o, document.activeElement) : !document.activeElement || !e.contains(document.activeElement) ? A(o) : te2(o, document.activeElement);
}
var Bt = "data-sh";
function p2(e) {
  return { [Bt]: e };
}
var Mo = `${Bt}-owner`;
function Ii(e, t) {
  return e.querySelectorAll(`[${Mo}="${t}"]`);
}
function U(e) {
  return { [Mo]: e };
}
var E = class {
  constructor(t) {
    this.ownerID = t;
  }
  setRef(t) {
    this.internalRef = t;
  }
  query(t) {
    return Ii(t, this.ownerID);
  }
  setChecked(t) {
    t.focus();
  }
  setNextChecked(t, o) {
    this.internalRef instanceof HTMLElement && (o ? Lo(this.query(this.internalRef), t) : te2(this.query(this.internalRef), t));
  }
  setPrevChecked(t, o) {
    this.internalRef instanceof HTMLElement && (o ? Io(this.query(this.internalRef), t) : oe(this.query(this.internalRef), t));
  }
  setFirstChecked() {
    this.internalRef instanceof HTMLElement && A(this.query(this.internalRef));
  }
  setLastChecked() {
    this.internalRef instanceof HTMLElement && Te(this.query(this.internalRef));
  }
  setFirstMatch(t) {
    this.internalRef instanceof HTMLElement && Uo(this.query(this.internalRef), t);
  }
  getId() {
    return this.ownerID;
  }
};
var k = Ui();
var G2 = p2("accordion");
var Bo = p2("accordion-button");
var Xo = p2("accordion-header");
var ko = p2("accordion-item");
var Jo = p2("accordion-panel");
var Xt = ji();
var ml = p2("button");
function y(e) {
  let [t, o] = ll();
  return il(() => {
    let n = t();
    if (n instanceof HTMLElement && n.tagName !== "BUTTON") {
      let s = (r2) => {
        (r2.key === "Enter" || r2.key === " ") && n.click();
      };
      n.addEventListener("keydown", s), al(() => {
        n.removeEventListener("keydown", s);
      });
    }
  }), d(() => {
    var n;
    return (n = e.as) != null ? n : "button";
  }, dl({ get tabindex() {
    return e.disabled ? -1 : 0;
  }, role: "button" }, u2(() => e.disabled), _(e, ["as", "ref"]), ml, { ref: m(e, (n) => {
    o(() => n);
  }) }));
}
function D(e, t, o) {
  return zo(qo, { get when() {
    var n;
    return (n = e.unmount) != null ? n : true;
  }, get fallback() {
    return o();
  }, get children() {
    return zo(qo, { get when() {
      return t();
    }, get children() {
      return o();
    } });
  } });
}
var vl = p2("alert");
function kt() {
  var e, t;
  return (t = (e = window.getSelection()) == null ? void 0 : e.focusNode) == null ? void 0 : t.parentElement;
}
function Ko(e) {
  if (e) {
    let t = e.getAttribute("tabindex");
    e.setAttribute("tabindex", "-1"), e.focus(), e.blur(), t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
  }
}
var Jt = class {
  constructor() {
    typeof document != "undefined" && (this.returnElement = document.activeElement, this.fsp = kt()), yl(() => {
      this.load();
    });
  }
  load() {
    this.returnElement instanceof HTMLElement ? this.returnElement.focus() : Ko(this.fsp);
  }
  save() {
    this.returnElement = document.activeElement, this.fsp = kt();
  }
};
function x() {
  return new Jt();
}
var he = Vl();
var Be = p2("alert-dialog");
var $o = p2("alert-dialog-description");
var Yo = p2("alert-dialog-overlay");
var jo = p2("alert-dialog-panel");
var Qo = p2("alert-dialog-title");
var be = ea();
var Je = p2("checkbox");
var nr = p2("checkbox-description");
var sr = p2("checkbox-indicator");
var ir = p2("checkbox-label");
var fr = ha();
var De = Ea();
var Ge = p2("command-bar");
var Cr = p2("command-bar-description");
var Pr = p2("command-bar-overlay");
var gr = p2("command-bar-panel");
var xr = p2("command-bar-title");
var He = rd();
var We = p2("context-menu");
var Dr = p2("context-menu-boundary");
var Sr = p2("context-menu-overlay");
var Hr = p2("context-menu-panel");
var ve = Od();
var ze = p2("dialog");
var Rr = p2("dialog-description");
var Ar = p2("dialog-overlay");
var Lr = p2("dialog-panel");
var Ir = p2("dialog-title");
var ye = tc();
var Ye = p2("disclosure");
var Jr = p2("disclosure-button");
var Nr = p2("disclosure-panel");
var Kt = Tc();
var zr = p2("feed");
var qr = p2("feed-article");
var Kr = p2("feed-article-description");
var $r = p2("feed-article-label");
var Yr = p2("feed-content");
var jr = p2("feed-label");
var Yt = vc();
var jt = Vc();
var O = Qc();
var L = p2("listbox");
var en = p2("listbox-button");
var tn = p2("listbox-label");
var on2 = p2("listbox-options");
var rn = p2("listbox-option");
var lo = Mm();
var ao = $m();
function bn(e) {
  let t = jm(ao);
  if (t)
    return t;
  throw new Error(`<${e}> must be used inside a <Menu>`);
}
function Dn() {
  return new E(Ym());
}
var Sn = p2("menu");
var Hn = p2("menu-item");
function tu(e) {
  let t = Dn();
  return Qm(ao.Provider, { value: t, get children() {
    return d(() => {
      var o;
      return (o = e.as) != null ? o : "div";
    }, Zm(_(e, ["as", "ref"]), Sn, { id: t.getId(), role: "menu", ref: m(e, (o) => {
      t.setRef(o);
    }) }));
  } });
}
function ru(e) {
  return typeof e == "function" && e.length > 0;
}
function vn(e) {
  return ou(() => {
    let t = e.children;
    return ru(t) ? t({ disabled: () => !!e.disabled }) : t;
  });
}
function du(e) {
  let t = bn("Menu"), [o, n] = nu(), s = "", r2;
  return yn(() => {
    r2 && clearTimeout(r2);
  }), su(() => {
    let a = o();
    if (a instanceof HTMLElement) {
      let i = (l) => {
        if (!e.disabled)
          switch (l.key) {
            case "ArrowUp":
            case "ArrowLeft":
              l.preventDefault(), t.setPrevChecked(a);
              break;
            case "ArrowDown":
            case "ArrowRight":
              l.preventDefault(), t.setNextChecked(a);
              break;
            case " ":
            case "Enter":
              a.tagName === "BUTTON" && l.preventDefault(), a.click();
              break;
            case "Home":
              l.preventDefault(), t.setFirstChecked();
              break;
            case "End":
              l.preventDefault(), t.setLastChecked();
              break;
            default:
              l.key.length === 1 && (s = `${s}${l.key}`, r2 && clearTimeout(r2), r2 = setTimeout(() => {
                t.setFirstMatch(s), s = "";
              }, 100));
              break;
          }
      };
      a.addEventListener("keydown", i), yn(() => {
        a.removeEventListener("keydown", i);
      });
    }
  }), d(() => {
    var a;
    return (a = e.as) != null ? a : "div";
  }, iu(_(e, ["as", "disabled", "ref", "children"]), Hn, U(t.getId()), { role: "menuitem", tabindex: -1, ref: m(e, (a) => {
    n(() => a);
  }) }, u2(() => e.disabled), { get children() {
    return lu(vn, { get disabled() {
      return e.disabled;
    }, get children() {
      return e.children;
    } });
  } }));
}
var Ve = cu();
function me(e) {
  let t = mu(Ve);
  if (t)
    return t;
  throw new Error(`<${e}> must be used inside a <Popover>`);
}
var lt = p2("popover");
var Vn = p2("popover-button");
var En = p2("popover-overlay");
var On = p2("popover-panel");
function An(e) {
  let [t, o] = uu(false), n = co(), s = co(), r2 = co(), a = x();
  return Rn(Ve.Provider, { value: { ownerID: n, buttonID: s, panelID: r2, get hovering() {
    return t();
  }, set hovering(i) {
    o(i);
  } }, get children() {
    return d(() => {
      var i;
      return (i = e.as) != null ? i : "div";
    }, pu(_(e, ["isOpen", "as", "children", "disabled", "onChange"]), lt, u2(() => e.disabled), { get children() {
      return Rn(P2, { get isOpen() {
        return e.isOpen;
      }, get disabled() {
        return e.disabled;
      }, onChange(i) {
        var l, c, C;
        i && (a.save(), (l = e.onOpen) == null || l.call(e)), (c = e.onChange) == null || c.call(e, i), i || ((C = e.onClose) == null || C.call(e), a.load());
      }, get children() {
        return e.children;
      } });
    } }));
  } });
}
function In(e) {
  let [t, o] = Cu(false), n = mo(), s = mo(), r2 = mo(), a = x();
  return Ln(Ve.Provider, { value: { ownerID: n, buttonID: s, panelID: r2, get hovering() {
    return t();
  }, set hovering(i) {
    o(i);
  } }, get children() {
    return d(() => {
      var i;
      return (i = e.as) != null ? i : "div";
    }, Pu(_(e, ["defaultOpen", "as", "children", "disabled", "onChange"]), lt, u2(() => e.disabled), { get children() {
      return Ln(P2, { get defaultOpen() {
        return e.defaultOpen;
      }, get disabled() {
        return e.disabled;
      }, onChange(i) {
        var l, c, C;
        i && (a.save(), (l = e.onOpen) == null || l.call(e)), (c = e.onChange) == null || c.call(e, i), i || ((C = e.onClose) == null || C.call(e), a.load());
      }, get children() {
        return e.children;
      } });
    } }));
  } });
}
function xu(e) {
  return "defaultOpen" in e;
}
function Tu(e) {
  return xu(e) ? Un(In, e) : Un(An, e);
}
function vu(e) {
  let t = me("PopoverButton"), o = g2(), [n, s] = hu();
  return bu(() => {
    let r2 = n();
    if (r2 instanceof HTMLElement) {
      let a = () => {
        o.disabled() || e.disabled || o.setState(!o.isOpen());
      };
      r2.addEventListener("click", a), Mn(() => {
        r2.removeEventListener("click", a);
      });
      let i = () => {
        t.hovering = true;
      }, l = () => {
        t.hovering = false;
      };
      r2.addEventListener("mouseenter", i), r2.addEventListener("mouseleave", l), Mn(() => {
        r2.removeEventListener("mouseenter", i), r2.removeEventListener("mouseleave", l);
      });
    }
  }), Du(y, Su(_(e, ["children", "ref"]), Vn, { id: t.buttonID, ref: m(e, (r2) => {
    s(() => r2), r2 instanceof HTMLElement && (t.anchor = r2);
  }), get "aria-controls"() {
    return o.isOpen() && t.panelID;
  } }, u2(() => {
    let r2 = o.disabled(), a = e.disabled;
    return r2 || a;
  }), B2(() => o.isOpen()), f(e)));
}
function Xu(e) {
  let t = me("PopoverPanel"), o = g2(), [n, s] = Lu();
  return Iu(() => {
    let r2 = n();
    if (r2 instanceof HTMLElement && o.isOpen()) {
      A(H2(r2));
      let a = (l) => {
        e.disabled || (l.key === "Tab" ? (l.preventDefault(), X2(r2, l.shiftKey)) : l.key === "Escape" && o.setState(false));
      }, i = (l) => {
        t.hovering || (!l.relatedTarget || !r2.contains(l.relatedTarget)) && o.setState(false);
      };
      r2.addEventListener("keydown", a), r2.addEventListener("focusout", i), Uu(() => {
        r2.removeEventListener("keydown", a), r2.removeEventListener("focusout", i);
      });
    }
  }), D(e, () => o.isOpen(), () => d(() => {
    var r2;
    return (r2 = e.as) != null ? r2 : "div";
  }, Mu(_(e, ["as", "unmount", "children", "ref"]), On, { id: t.panelID, ref: m(e, (r2) => {
    s(() => r2);
  }) }, f(e))));
}
var re2 = ku();
var Ee = Nu();
var ct = p2("radio-group");
var Xn = p2("radio-group-description");
var kn = p2("radio-group-label");
var Jn = p2("radio-group-option");
var J2 = ap();
var $2 = p2("select");
var $n = p2("select-option");
var Oe = Vp();
var uo = Op();
var ut = p2("tab-group");
var as = p2("tab-list");
var ds = p2("tab");
var cs = p2("tab-panel");
var fs = p2("toast");
var Cs = p2("toaster");
var po = tf();
var ft = class {
  constructor() {
    this.queue = [];
    this.listeners = /* @__PURE__ */ new Set();
    this.toastID = 0;
    this.id = ft.toasterID, ft.toasterID += 1;
  }
  subscribe(t) {
    return this.listeners.add(t), () => {
      this.listeners.delete(t);
    };
  }
  notify() {
    let t = [...this.queue];
    for (let o of this.listeners.keys())
      o(t);
  }
  create(t) {
    let o = `toast-${this.id}-[${this.toastID}`;
    return this.toastID += 1, this.queue.push({ id: o, data: t }), this.notify(), o;
  }
  remove(t) {
    this.queue = this.queue.filter((o) => o.id !== t), this.notify();
  }
  clear() {
    this.queue = [], this.notify();
  }
  getQueue() {
    return this.queue;
  }
};
var pt = ft;
pt.toasterID = 0;
var Ct = p2("toggle");
var Uf = p2("toolbar");
var Ss = Mf();

// ../../node_modules/.pnpm/@solid-primitives+keyboard@1.0.5_solid-js@1.6.2/node_modules/@solid-primitives/keyboard/dist/server.js
import "@solid-primitives/event-listener";
import "@solid-primitives/utils";
import "solid-js";
function createShortcut(keys, callback, options = {}) {
  {
    return;
  }
}

// ../../node_modules/.pnpm/@solid-primitives+keyed@1.1.4_solid-js@1.6.2/node_modules/@solid-primitives/keyed/dist/server.js
import { createMemo as createMemo2, mapArray, on as on3 } from "solid-js";
function Entries(props) {
  const mapFn = props.children;
  return createMemo2(
    mapArray(
      () => props.of && Object.keys(props.of),
      mapFn.length < 3 ? (key) => mapFn(
        key,
        () => props.of[key]
      ) : (key, i) => mapFn(key, () => props.of[key], i),
      "fallback" in props ? { fallback: () => props.fallback } : void 0
    )
  );
}

// ../frontend/dist/index.js
import { NodeType as NodeType$1 } from "@solid-devtools/debugger";

// ../../node_modules/.pnpm/@solid-primitives+styles@0.0.101_solid-js@1.6.2/node_modules/@solid-primitives/styles/dist/server.js
import "solid-js";
var serverRemSize = 16;
var useRemSize = () => () => serverRemSize;

// ../../node_modules/.pnpm/@solid-primitives+resize-observer@2.0.7_solid-js@1.6.2/node_modules/@solid-primitives/resize-observer/dist/server.js
import "solid-js";
import "@solid-primitives/utils";
import "@solid-primitives/event-listener";
function createResizeObserver(targets, onResize, options) {
  return;
}
function createElementSize(target) {
  {
    return { width: null, height: null };
  }
}

// ../frontend/dist/index.js
var It2 = "_2g2smp0";
var Et = "_2g2smp5 _2g2smp3";
var Vt = "_2g2smp4";
var Bo2 = template("<div><div></div></div>", 4);
var xe = (e) => (() => {
  let t = Bo2.cloneNode(true), r2 = t.firstChild;
  return insert(t, () => e.children, null), effect((o) => {
    let l = clsx(It2, e.highlight && Vt, e.class), n = Et, i = e.isSignal;
    return l !== o._v$ && className(t, o._v$ = l), n !== o._v$2 && className(r2, o._v$2 = n), i !== o._v$3 && setAttribute(r2, "data-signal", o._v$3 = i), o;
  }, { _v$: void 0, _v$2: void 0, _v$3: void 0 }), t;
})();
var Pt2 = "l3wl9g1";
var Fe2 = "l3wl9g2";
var zt2 = "var(--l3wl9g0)";
var Rt = "l3wl9g3";
var Ht = "l3wl9g4";
var Dt = template("<div><div></div></div>", 4);
var Jo2 = template("<div></div>", 2);
function Xe2(e) {
  let t = children(() => e.side), [r2, o] = createSignal2(0.6), [l, n] = createSignal2(false), i = createMediaQuery("(max-width: 640px)"), s = createMediaQuery("(hover: none)");
  createComputed(() => o(s() ? 0.5 : 0.6));
  let a = (c) => {
    c.preventDefault(), n(!s());
  };
  makeEventListener(window, "pointermove", scheduleIdle((c) => {
    if (!l())
      return;
    let p3 = getPositionInElement(c.pageX, c.pageY, d2);
    o(clamp(i() ? p3.y / p3.height : p3.x / p3.width, 0, 1));
  })), makeEventListener(window, "pointerup", n.bind(void 0, false)), createBodyCursor(() => l() && (i() ? "row-resize" : "col-resize"));
  let d2;
  return (() => {
    let c = Dt.cloneNode(true), p3 = c.firstChild, m2 = d2;
    return typeof m2 == "function" ? use(m2, c) : d2 = c, insert(p3, () => e.children), insert(c, createComponent2(Show, { get when() {
      return t();
    }, get children() {
      return [(() => {
        let v = Dt.cloneNode(true), _2 = v.firstChild;
        return _2.$$pointerdown = a, effect(($3) => {
          let N2 = Rt, u3 = Ht, y2 = l();
          return N2 !== $3._v$ && className(v, $3._v$ = N2), u3 !== $3._v$2 && className(_2, $3._v$2 = u3), y2 !== $3._v$3 && setAttribute(_2, "data-dragging", $3._v$3 = y2), $3;
        }, { _v$: void 0, _v$2: void 0, _v$3: void 0 }), v;
      })(), (() => {
        let v = Jo2.cloneNode(true);
        return insert(v, t), effect(() => className(v, Fe2)), v;
      })()];
    } }), null), effect((v) => {
      let _2 = Pt2, $3 = !!t(), N2 = (0, import_dynamic.assignInlineVars)({ [zt2]: r2() * 100 + "%" }), u3 = Fe2;
      return _2 !== v._v$4 && className(c, v._v$4 = _2), $3 !== v._v$5 && setAttribute(c, "data-open", v._v$5 = $3), v._v$6 = style(c, N2, v._v$6), u3 !== v._v$7 && className(p3, v._v$7 = u3), v;
    }, { _v$4: void 0, _v$5: void 0, _v$6: void 0, _v$7: void 0 }), c;
  })();
}
delegateEvents(["pointerdown"]);
var Bt2 = { normal: "_1sq57e10", space: "_1sq57e12 _1sq57e10", dragging: "_1sq57e13 _1sq57e10" };
var Ut2 = "_1sq57e17";
var Wt2 = { normal: "_1sq57e15 _1sq57e14", space: "_1sq57e16 _1sq57e14" };
var dn = template("<div><div></div><div></div></div>", 6);
var ue = (e) => {
  let t = combineProps(e, { get class() {
    return Bt2.normal;
  } });
  return (() => {
    let r2 = dn.cloneNode(true), o = r2.firstChild, l = o.nextSibling;
    return spread(r2, t, false, true), insert(l, () => e.children), effect((n) => {
      let i = Wt2.normal, s = Ut2;
      return i !== n._v$ && className(o, n._v$ = i), s !== n._v$2 && className(l, n._v$2 = s), n;
    }, { _v$: void 0, _v$2: void 0 }), r2;
  })();
};
var Ce = { button: "ygz0wz6", defaultCollapsed: "ygz0wz7", icon: "ygz0wz8" };
var qt2 = "ygz0wz4";
var Xt2 = template("<button></button>", 2);
var Jt2 = (e) => (e = combineProps(e, { class: qt2, get "aria-selected"() {
  return e.selected;
}, onClick: () => e.onToggle(!e.selected) }), (() => {
  let t = Xt2.cloneNode(true);
  return spread(t, e, false, false), t;
})());
var we2 = (e) => (() => {
  let t = Xt2.cloneNode(true);
  return addEventListener(t, "click", e.onToggle && ((r2) => {
    r2.stopPropagation(), e.onToggle(!e.isCollapsed);
  }), true), insert(t, createComponent2(S2.Triangle, { get class() {
    return clsx_m_default(Ce.icon, e.iconClass);
  } })), effect((r2) => {
    let o = clsx_m_default(Ce.button, e.class, { [Ce.defaultCollapsed]: e.defaultCollapsed }), l = e.isCollapsed;
    return o !== r2._v$ && className(t, r2._v$ = o), l !== r2._v$2 && setAttribute(t, "aria-selected", r2._v$2 = l), r2;
  }, { _v$: void 0, _v$2: void 0 }), t;
})();
delegateEvents(["click"]);
var Yt2 = "_1wa3m110";
var In2 = template("<div></div>", 2);
var Ne2 = (e) => (() => {
  let t = In2.cloneNode(true);
  return insert(t, () => e.children), effect(() => className(t, Yt2)), t;
})();
function Qt2(e) {
  let [t, r2] = createSignal2(1), o = createMemo3(() => e.errors.length), l = createMemo3(() => e.errors[t() - 1]);
  createComputed((a) => {
    let d2 = o();
    return a < d2 && r2((c) => c + 1), d2;
  }, o());
  function n() {
    r2((a) => a > 1 ? a - 1 : o());
  }
  function i() {
    r2((a) => a < o() ? a + 1 : 1);
  }
  let { render: s } = e;
  return typeof s == "function" ? untrack(() => s({ goPrev: n, goNext: i, resetError: e.resetError, get currentCount() {
    return t();
  }, get maxCount() {
    return o();
  }, get error() {
    return l();
  } })) : s;
}
var er = (e) => {
  let [t, r2] = createSignal2([]), [o, l] = createSignal2(false);
  function n() {
    r2([]), l(false);
  }
  function i(a) {
    e.onError?.(a), r2((d2) => [a, ...d2]);
  }
  e.catchWindowErrors && makeEventListener(window, "error", i), onError(i);
  let s = { get errors() {
    return t();
  }, get render() {
    return e.render;
  }, resetError: n };
  return [ErrorBoundary({ fallback(a, d2) {
    return batch(() => {
      l(true), i(a);
    }), untrack(() => Qt2(mergeProps$1(s, { resetError() {
      batch(() => {
        n(), d2();
      });
    } })));
  }, get children() {
    return e.children;
  } }), Show({ get when() {
    return !o() && t().length;
  }, get children() {
    return untrack(() => Qt2(s));
  } })];
};
var ke2 = "_1eu3l63b";
var pe = { fixed: "_1eu3l630", container: "_1eu3l631", overlay: "_1eu3l632", content: "_1eu3l633" };
var Se = { container: "_1eu3l638", error: "_1eu3l639", errorName: "_1eu3l63a" };
var tr2 = "_1eu3l637";
var be2 = "_1eu3l63c";
var rr2 = "_1eu3l634";
var or = "_1eu3l636";
var nr2 = "_1eu3l635";
var Tn2 = template('<div><div><div></div><div><div><div><button><span class="sr-only">Prev</span></button><button><span class="sr-only">Prev</span></button><span><span></span> of <span></span></span></div><div><button><span class="sr-only">Reset</span></button></div></div><div><span><span></span>: </span></div></div></div></div>', 38);
var jn = template("<div></div>", 2);
var An2 = (e) => (() => {
  let t = Tn2.cloneNode(true), r2 = t.firstChild, o = r2.firstChild, l = o.nextSibling, n = l.firstChild, i = n.firstChild, s = i.firstChild;
  s.firstChild;
  let d2 = s.nextSibling;
  d2.firstChild;
  let p3 = d2.nextSibling, m2 = p3.firstChild, v = m2.nextSibling, _2 = v.nextSibling, $3 = i.nextSibling, N2 = $3.firstChild;
  N2.firstChild;
  let y2 = n.nextSibling, V2 = y2.firstChild, g3 = V2.firstChild;
  g3.nextSibling;
  return addEventListener(s, "click", e.goPrev, true), insert(s, createComponent2(S2.ArrowLeft, { get class() {
    return be2;
  } }), null), addEventListener(d2, "click", e.goNext, true), insert(d2, createComponent2(S2.ArrowRight, { get class() {
    return be2;
  } }), null), insert(m2, () => e.currentCount), insert(_2, () => e.maxCount), addEventListener(N2, "click", e.resetError, true), insert(N2, createComponent2(S2.Refresh, { get class() {
    return be2;
  } }), null), insert(g3, () => e.error instanceof Error ? e.error.name : "UnknownError"), insert(V2, (() => {
    let h = memo(() => e.error instanceof Error);
    return () => h() ? e.error.message : String(e.error);
  })(), null), insert(y2, (() => {
    let h = memo(() => !!e.footer);
    return () => h() && (() => {
      let k2 = jn.cloneNode(true);
      return insert(k2, () => e.footer), k2;
    })();
  })(), null), effect((h) => {
    let k2 = pe.fixed, b = pe.container, P3 = pe.overlay, L2 = pe.content, f2 = rr2, C = nr2, w2 = ke2, E2 = ke2, M = or, G3 = tr2, te3 = ke2, ye2 = Se.container, St = Se.error, bt = Se.errorName;
    return k2 !== h._v$ && className(t, h._v$ = k2), b !== h._v$2 && className(r2, h._v$2 = b), P3 !== h._v$3 && className(o, h._v$3 = P3), L2 !== h._v$4 && className(l, h._v$4 = L2), f2 !== h._v$5 && className(n, h._v$5 = f2), C !== h._v$6 && className(i, h._v$6 = C), w2 !== h._v$7 && className(s, h._v$7 = w2), E2 !== h._v$8 && className(d2, h._v$8 = E2), M !== h._v$9 && className(p3, h._v$9 = M), G3 !== h._v$10 && className($3, h._v$10 = G3), te3 !== h._v$11 && className(N2, h._v$11 = te3), ye2 !== h._v$12 && className(y2, h._v$12 = ye2), St !== h._v$13 && className(V2, h._v$13 = St), bt !== h._v$14 && className(g3, h._v$14 = bt), h;
  }, { _v$: void 0, _v$2: void 0, _v$3: void 0, _v$4: void 0, _v$5: void 0, _v$6: void 0, _v$7: void 0, _v$8: void 0, _v$9: void 0, _v$10: void 0, _v$11: void 0, _v$12: void 0, _v$13: void 0, _v$14: void 0 }), t;
})();
var ir2 = (e) => createComponent2(er, { onError: (t) => console.error(t), render: (t) => createComponent2(An2, mergeProps2(t, { get footer() {
  return e.footer;
} })), get catchWindowErrors() {
  return e.catchWindowErrors;
}, get children() {
  return e.children;
} });
delegateEvents(["click"]);
var Fn2 = template('<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M40 128h176"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M144 56l72 72-72 72"></path></svg>', 6);
var qn2 = template('<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M216 128H40"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M112 56l-72 72 72 72"></path></svg>', 6);
var Gn = template('<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M96 48l80 80-80 80"></path></svg>', 4);
var Xn2 = template('<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M128 56c-80 0-112 72-112 72s32 72 112 72 112-72 112-72-32-72-112-72zm0 112a40 40 0 1 1 40-40 40 40 0 0 1-40 40z" opacity="0.2" fill="currentColor"></path><path d="M128 56c-80 0-112 72-112 72s32 72 112 72 112-72 112-72-32-72-112-72z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><circle cx="128" cy="128" r="40" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle></svg>', 8);
var Jn2 = template('<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M128 56c-80 0-112 72-112 72s32 72 112 72 112-72 112-72-32-72-112-72zm0 112a40 40 0 1 1 40-40 40 40 0 0 1-40 40z" opacity="0.2" fill="currentColor"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M48 40l160 176"></path><path d="M154.9 157.6A39.6 39.6 0 0 1 128 168a40 40 0 0 1-26.9-69.6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M74 68.6C33.2 89.2 16 128 16 128s32 72 112 72a117.9 117.9 0 0 0 54-12.6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M208.6 169.1C230.4 149.6 240 128 240 128s-32-72-112-72a123.9 123.9 0 0 0-20.7 1.7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M135.5 88.7a39.9 39.9 0 0 1 32.3 35.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>', 14);
var Yn2 = template('<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M176.2 99.7h48v-48"></path><path d="M190.2 190.2a88 88 0 1 1 0-124.4l34 33.9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>', 6);
var Zn = template('<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><circle cx="128" cy="128" r="32" opacity="0.2" fill="currentColor"></circle><circle cx="128" cy="128" r="88" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 20v40"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M20 128h40"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 236v-40"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M236 128h-40"></path><circle cx="128" cy="128" r="32" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle></svg>', 16);
var Kn = template('<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><circle cx="128" cy="128" opacity="0.2" fill="currentColor"></circle><circle cx="128" cy="48" opacity="0.2" fill="currentColor"></circle><circle cx="128" cy="208" opacity="0.2" fill="currentColor"></circle><circle cx="128" cy="128" r="24" stroke="currentColor" stroke-miterlimit="10" stroke-width="16"></circle><circle cx="128" cy="48" r="24" stroke="currentColor" stroke-miterlimit="10" stroke-width="16"></circle><circle cx="128" cy="208" r="24" stroke="currentColor" stroke-miterlimit="10" stroke-width="16"></circle></svg>', 14);
var Qn2 = template('<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M200 56L56 200"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M200 200L56 56"></path></svg>', 6);
var el2 = template('<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M236.7 188L148.8 36a24 24 0 0 0-41.6 0L19.3 188A23.9 23.9 0 0 0 40 224h176a23.9 23.9 0 0 0 20.7-36z"></path></svg>', 4);
var tl = template('<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M213.4 109.6l-80-72.7a8 8 0 0 0-10.8 0l-80 72.7a8.3 8.3 0 0 0-2.6 5.9V208a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8v-92.5a8.3 8.3 0 0 0-2.6-5.9z" opacity="0.2" fill="currentColor"></path><path d="M213.4 109.6l-80-72.7a8 8 0 0 0-10.8 0l-80 72.7a8.3 8.3 0 0 0-2.6 5.9V208a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8v-92.5a8.3 8.3 0 0 0-2.6-5.9z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>', 6);
var rl2 = template('<svg fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M10 27V19C10 18.7348 10.1054 18.4804 10.2929 18.2929C10.4804 18.1054 10.7348 18 11 18H21C21.2652 18 21.5196 18.1054 21.7071 18.2929C21.8946 18.4804 22 18.7348 22 19V27H26C26.2652 27 26.5196 26.8946 26.7071 26.7071C26.8946 26.5196 27 26.2652 27 26V11.4125C27.0005 11.2827 26.9753 11.154 26.926 11.0339C26.8766 10.9138 26.8041 10.8046 26.7125 10.7125L21.2875 5.28751C21.1955 5.19591 21.0862 5.12338 20.9661 5.07404C20.846 5.02471 20.7174 4.99955 20.5875 5.00001H6C5.73478 5.00001 5.48043 5.10536 5.29289 5.2929C5.10536 5.48044 5 5.73479 5 6.00001V26C5 26.2652 5.10536 26.5196 5.29289 26.7071C5.48043 26.8946 5.73478 27 6 27H10Z" opacity="0.2" fill="currentColor"></path><path d="M27 11.4125V26C27 26.2652 26.8946 26.5196 26.7071 26.7071C26.5196 26.8946 26.2652 27 26 27H6C5.73478 27 5.48043 26.8946 5.29289 26.7071C5.10536 26.5196 5 26.2652 5 26V6.00001C5 5.73479 5.10536 5.48044 5.29289 5.2929C5.48043 5.10536 5.73478 5.00001 6 5.00001H20.5875C20.7174 4.99955 20.846 5.02471 20.9661 5.07404C21.0862 5.12338 21.1955 5.19591 21.2875 5.28751L26.7125 10.7125C26.8041 10.8046 26.8766 10.9138 26.926 11.0339C26.9753 11.154 27.0005 11.2827 27 11.4125V11.4125Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 27V19C10 18.7348 10.1054 18.4804 10.2929 18.2929C10.4804 18.1054 10.7348 18 11 18H21C21.2652 18 21.5196 18.1054 21.7071 18.2929C21.8946 18.4804 22 18.7348 22 19V27" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 9H12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>', 10);
var ol = template('<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><ellipse cx="128" cy="128" rx="44" ry="116" transform="rotate(-45 128.01 127.977)" opacity="0.2" fill="currentColor"></ellipse><ellipse cx="128" cy="128" rx="44" ry="116" transform="rotate(-45 128.01 127.977)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></ellipse><ellipse cx="128" cy="128" rx="116" ry="44" transform="rotate(-45 128.01 127.977)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></ellipse><circle cx="128" cy="128" r="12" fill="currentColor"></circle></svg>', 10);
var nl = template('<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M215.9 73.7l-84-47.5a7.8 7.8 0 0 0-7.8 0l-84 47.5a8.1 8.1 0 0 0-4.1 7v94.6a8.1 8.1 0 0 0 4.1 7l84 47.5a7.8 7.8 0 0 0 7.8 0l84-47.5a8.1 8.1 0 0 0 4.1-7V80.7a8.1 8.1 0 0 0-4.1-7zM128 164a36 36 0 1 1 36-36 36 36 0 0 1-36 36z" opacity="0.2" fill="currentColor"></path><path d="M220 175.3V80.7a8.1 8.1 0 0 0-4.1-7l-84-47.5a7.8 7.8 0 0 0-7.8 0l-84 47.5a8.1 8.1 0 0 0-4.1 7v94.6a8.1 8.1 0 0 0 4.1 7l84 47.5a7.8 7.8 0 0 0 7.8 0l84-47.5a8.1 8.1 0 0 0 4.1-7z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><circle cx="128" cy="128" r="36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle></svg>', 8);
var ll2 = template('<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M229.6 106l-25.9-14.4a73.6 73.6 0 0 0-6.3-10.9l.5-29.7a102.6 102.6 0 0 0-38.2-22l-25.4 15.2a88.3 88.3 0 0 0-12.6 0L96.2 28.9A104 104 0 0 0 58.1 51l.5 29.7a73.6 73.6 0 0 0-6.3 10.9l-26 14.4a103.6 103.6 0 0 0 .1 44l25.9 14.4a80.1 80.1 0 0 0 6.3 11l-.5 29.6a102.6 102.6 0 0 0 38.2 22l25.4-15.2a88.3 88.3 0 0 0 12.6 0l25.5 15.3a104 104 0 0 0 38.1-22.1l-.5-29.7a73.6 73.6 0 0 0 6.3-10.9l26-14.4a102 102 0 0 0-.1-44zM128 176a48 48 0 1 1 48-48 48 48 0 0 1-48 48z" opacity="0.2" fill="currentColor"></path><circle cx="128" cy="128" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path d="M197.4 80.7a73.6 73.6 0 0 1 6.3 10.9l25.9 14.4a102 102 0 0 1 .1 44l-26 14.4a73.6 73.6 0 0 1-6.3 10.9l.5 29.7a104 104 0 0 1-38.1 22.1l-25.5-15.3a88.3 88.3 0 0 1-12.6 0L96.3 227a102.6 102.6 0 0 1-38.2-22l.5-29.6a80.1 80.1 0 0 1-6.3-11L26.4 150a103.6 103.6 0 0 1-.1-44l26-14.4a73.6 73.6 0 0 1 6.3-10.9L58.1 51a104 104 0 0 1 38.1-22.1l25.5 15.3a88.3 88.3 0 0 1 12.6 0L159.7 29a102.6 102.6 0 0 1 38.2 22z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>', 8);
var sl = template('<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><rect x="24" y="100" width="56" height="56" rx="8" opacity="0.2"></rect><rect x="160" y="40" width="64" height="64" rx="8" opacity="0.2"></rect><rect x="160" y="152" width="64" height="64" rx="8" opacity="0.2"></rect><rect x="24" y="100" width="56" height="56" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><rect x="160" y="40" width="64" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><rect x="160" y="152" width="64" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M80 128h40"></path><path d="M160 184h-16a23.9 23.9 0 0 1-24-24V96a23.9 23.9 0 0 1 24-24h16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></g></svg>', 20);
var il2 = template('<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M0 0h256v256H0z"></path><path opacity=".2" d="M152 32v56h56l-56-56z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M152 32v56h56"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M148 128l24 24-24 24"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M108 128l-24 24 24 24"></path><path d="M200 224a8 8 0 0 0 8-8V88l-56-56H56a8 8 0 0 0-8 8v176a8 8 0 0 0 8 8z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></g></svg>', 16);
var al2 = template('<svg fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><circle cx="116" cy="116" r="84" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M175.4 175.4L224 224"></path></svg>', 6);
var cl = template("<svg><use></use></svg>", 4);
var dl2 = template('<div style="display:none"></div>', 2);
var ul2 = ({ id: e }) => (() => {
  let t = Fn2.cloneNode(true);
  return setAttribute(t, "id", `sdt_icon_${e}`), t;
})();
var pl2 = ({ id: e }) => (() => {
  let t = qn2.cloneNode(true);
  return setAttribute(t, "id", `sdt_icon_${e}`), t;
})();
var ml2 = ({ id: e }) => (() => {
  let t = Gn.cloneNode(true);
  return setAttribute(t, "id", `sdt_icon_${e}`), t;
})();
var vl2 = ({ id: e }) => (() => {
  let t = Xn2.cloneNode(true);
  return setAttribute(t, "id", `sdt_icon_${e}`), t;
})();
var fl2 = ({ id: e }) => (() => {
  let t = Jn2.cloneNode(true);
  return setAttribute(t, "id", `sdt_icon_${e}`), t;
})();
var gl = ({ id: e }) => (() => {
  let t = Yn2.cloneNode(true);
  return setAttribute(t, "id", `sdt_icon_${e}`), t;
})();
var hl = ({ id: e }) => (() => {
  let t = Zn.cloneNode(true);
  return setAttribute(t, "id", `sdt_icon_${e}`), t;
})();
var _l2 = ({ id: e }) => (() => {
  let t = Kn.cloneNode(true);
  return setAttribute(t, "id", `sdt_icon_${e}`), t;
})();
var $l = ({ id: e }) => (() => {
  let t = Qn2.cloneNode(true);
  return setAttribute(t, "id", `sdt_icon_${e}`), t;
})();
var yl2 = ({ id: e }) => (() => {
  let t = el2.cloneNode(true);
  return setAttribute(t, "id", `sdt_icon_${e}`), t;
})();
var xl = ({ id: e }) => (() => {
  let t = tl.cloneNode(true);
  return setAttribute(t, "id", `sdt_icon_${e}`), t;
})();
var Cl2 = ({ id: e }) => (() => {
  let t = rl2.cloneNode(true);
  return setAttribute(t, "id", `sdt_icon_${e}`), t;
})();
var wl = ({ id: e }) => (() => {
  let t = ol.cloneNode(true);
  return setAttribute(t, "id", `sdt_icon_${e}`), t;
})();
var Nl2 = ({ id: e }) => (() => {
  let t = nl.cloneNode(true);
  return setAttribute(t, "id", `sdt_icon_${e}`), t;
})();
var kl2 = ({ id: e }) => (() => {
  let t = ll2.cloneNode(true);
  return setAttribute(t, "id", `sdt_icon_${e}`), t;
})();
var Sl2 = ({ id: e }) => (() => {
  let t = sl.cloneNode(true);
  return setAttribute(t, "id", `sdt_icon_${e}`), t;
})();
var bl = ({ id: e }) => (() => {
  let t = il2.cloneNode(true);
  return setAttribute(t, "id", `sdt_icon_${e}`), t;
})();
var Il = ({ id: e }) => (() => {
  let t = al2.cloneNode(true);
  return setAttribute(t, "id", `sdt_icon_${e}`), t;
})();
var Ke2 = { ArrowLeft: pl2, ArrowRight: ul2, CarretRight: ml2, Eye: vl2, EyeSlash: fl2, Refresh: gl, Select: hl, Options: _l2, Close: $l, Triangle: yl2, Root: xl, Memo: Cl2, Effect: wl, RenderEffect: Nl2, Computation: kl2, Context: Sl2, Code: bl, Search: Il };
var S2 = {};
for (let e in Ke2)
  S2[e] = (t) => (() => {
    let r2 = cl.cloneNode(true), o = r2.firstChild;
    return effect((l) => {
      let n = t.class, i = `#sdt_icon_${e.toString()}`;
      return n !== l._v$ && setAttribute(r2, "class", l._v$ = n), i !== l._v$2 && setAttribute(o, "href", l._v$2 = i), l;
    }, { _v$: void 0, _v$2: void 0 }), r2;
  })();
var ar = () => (() => {
  let e = dl2.cloneNode(true);
  return insert(e, () => Object.keys(Ke2).map((t) => {
    let r2 = Ke2[t];
    return createComponent2(r2, { id: t });
  })), e;
})();
var Ee2;
var re3;
var Qe2;
var dr2;
function Ie2(e, t, r2) {
  let { id: o, subroots: l, children: n } = e;
  if (Ee2.push(e), e.level = r2, t) {
    "frozen" in t && t.frozen && (e.frozen = true);
    let { children: d2 } = t, c = e.children = [];
    if (d2) {
      let p3 = {};
      for (let m2 of n)
        p3[m2.id] = m2;
      for (let m2 of d2) {
        let v = p3[m2.id];
        c.push(v ? Ie2(v, m2, r2 + 1) : ve2(m2, e, r2 + 1));
      }
    }
  } else
    for (let d2 of n)
      Ie2(d2, void 0, r2 + 1);
  let i = [], s = re3[o], a = l && s ? /* @__PURE__ */ new Set() : null;
  if (l) {
    let d2;
    for (let c of l) {
      let p3 = c.id;
      if (!Qe2.has(p3)) {
        if (d2 = dr2[p3]) {
          if (d2.attached !== o)
            continue;
          a && a.add(p3);
        }
        i.push(Ie2(c, d2, r2 + 1));
      }
    }
  }
  if (s)
    for (let d2 of s)
      a && a.has(d2.id) || i.push(ve2(d2, e, r2 + 1));
  return i.length ? e.subroots = i : delete e.subroots, e;
}
function ve2(e, t, r2) {
  let { id: o, name: l, type: n, children: i } = e, s = [], a = { id: o, type: n, children: s, parent: t, level: r2 };
  if (l && (a.name = l), n === NodeType.Component ? a.hmr = e.hmr : n !== NodeType.Root && e.frozen && (a.frozen = true), Ee2.push(a), i)
    for (let c of i)
      s.push(ve2(c, a, r2 + 1));
  let d2 = re3[o];
  if (d2) {
    let c = a.subroots = [];
    for (let p3 of d2)
      c.push(ve2(p3, a, r2 + 1));
  }
  return a;
}
function ur2(e, t, r2) {
  dr2 = t, Qe2 = new Set(r2);
  let o = {};
  re3 = {};
  for (let n of Object.values(t)) {
    let { attached: i, id: s } = n;
    i ? re3[i] ? re3[i].push(n) : re3[i] = [n] : o[s] = n;
  }
  let l = [];
  Ee2 = [];
  for (let n of e) {
    let { id: i } = n;
    Qe2.has(i) || (delete o[i], l.push(Ie2(n, t[i], 0)));
  }
  for (let n of Object.values(o))
    l.push(ve2(n, null, 0));
  return { roots: l, nodeList: Ee2 };
}
function Pl2(e) {
  let t = e;
  for (; t; ) {
    if (t.type === NodeType.Root)
      return t;
    t = t.parent;
  }
  throw new Error("Parent root not found");
}
function zl2(e) {
  let t = [e], r2 = e.parent;
  for (; r2; )
    t.unshift(r2), r2 = r2.parent;
  return t;
}
function tt2({ clientHoveredNodeId: e }) {
  let [t, r2] = createSignal2({ nodeList: [], roots: [] }, { internal: true });
  function o(u3) {
    r2((y2) => u3 ? ur2(y2.roots, u3.updated, u3.removed) : { nodeList: [], roots: [] });
  }
  function l(u3) {
    for (let y2 of untrack(t).nodeList)
      if (y2.id === u3)
        return y2;
  }
  let [n, i] = createSimpleEmitter(), [s, a] = createSignal2(null), d2 = createMemo3(() => {
    let u3 = e();
    return u3 ? l(u3) ?? null : null;
  }), c = () => s() || d2(), p3 = createSelector(c);
  function m2(u3, y2) {
    return a((V2) => y2 ? l(u3) ?? V2 : V2 && V2.id === u3 ? null : V2);
  }
  let [v, _2] = createSignal2(), $3 = createSelector(v, (u3, y2) => !!y2 && y2.includes(u3));
  function N2(u3) {
    return u3 ? untrack(() => {
      let y2 = [], V2 = new RegExp("^" + u3, "i");
      for (let g3 of t().nodeList)
        g3.name && g3.name.match(V2) && y2.push(g3);
      return _2(y2.length ? y2 : void 0);
    }) : _2();
  }
  return { state: t, updateStructure: o, hovered: c, extHovered: s, isHovered: (u3) => p3(u3) || $3(u3), listenToComputationUpdate: n, emitComputationUpdate: i, toggleHoveredNode: m2, findNode: l, getParentRoot: Pl2, getNodePath: zl2, search: N2 };
}
var hr = (e) => e.split(":");
function Ol2(e, t, r2, o) {
  let l = [...t, r2].join(".");
  for (let i of t) {
    if (!e.children)
      return error("Invalid path", l);
    e = e.children[i];
  }
  let n = e?.children;
  if (!n)
    return error("Invalid path", l);
  o === void 0 ? delete n[r2] : n[r2] = o;
}
var Tl2 = (e, t) => (e || t) && !(e && t);
function ot2(e, t) {
  if (e.value.type === t.type && (e.value.type === ValueType.Store && (e = e.value.value, t = t.value.value), Tl2("children" in e.value, "children" in t))) {
    e.value.children = t.children;
    return;
  }
  e.value = t;
}
function _r2(e, t) {
  if (e.type === ValueType.Store && e.value.id === t)
    return e;
  if (e.children)
    for (let r2 of Object.values(e.children)) {
      let o = _r2(r2, t);
      if (o)
        return o;
    }
}
function jl(e, t) {
  let [r2, o] = hr(t);
  return r2 === "signal" ? e.signals[o]?.value : r2 === "prop" ? e.props?.record[o]?.value : e.value?.value;
}
function Al2(e, { id: t, value: r2 }) {
  let [o, l] = hr(t);
  if (o === "signal") {
    let n = e.signals[l];
    if (!n)
      throw `updateValue: value node (${t}) not found`;
    ot2(n, r2);
  } else if (o === "prop") {
    let n = e.props?.record[l];
    if (!n)
      throw `updateValue: prop (${t}) not found`;
    ot2(n, r2);
  } else
    e.value && ot2(e.value, r2);
}
function Bl(e, { added: t, removed: r2 }) {
  for (let o of t)
    e.record[o] = { value: { type: ValueType.Getter, value: o }, selected: false, itemId: `prop:${o}` };
  for (let o of r2)
    delete e.record[o];
}
function Ul(e, { path: t, property: r2, storeId: o, value: l, valueNodeId: n }) {
  let i = jl(e, n);
  if (!i)
    return warn(`updateStore: value node (${n}) not found`);
  let s = _r2(i, o);
  if (!s)
    return warn(`updateStore: store node (${o}) not found`);
  Ol2(s.value.value, t, r2, l);
}
function st2({ getNodePath: e, findNode: t }) {
  let [r2, o] = createSignal2(null), [l, n] = createSignal2([]), [i, s] = createSignal2(null), [a, d2] = createStore({ signals: {}, value: null, props: null }), c = { get path() {
    return l();
  }, get location() {
    return i();
  }, get props() {
    return a.props;
  }, get signals() {
    return a.signals;
  }, get value() {
    return a.value;
  } }, p3 = createSelector(() => r2()?.id ?? null), m2 = untrackedCallback((f2) => {
    batch(() => {
      if (f2 === null) {
        o(null), n([]);
        return;
      }
      let C = r2(), w2;
      if (typeof f2 == "object") {
        if (C && f2.id === C.id)
          return;
        w2 = f2;
      } else {
        if (C && f2 === C.id)
          return;
        let E2 = t(f2);
        if (!E2)
          return;
        w2 = E2;
      }
      o(w2), n(e(w2)), s(null), d2({ signals: {}, value: null, props: null });
    });
  }), v = untrackedCallback(() => {
    let f2 = r2();
    !f2 || t(f2.id) || o(null);
  }), _2 = untrackedCallback((f2) => {
    let C = r2();
    if (!C || C.id !== f2.id)
      return warn("setNewDetails: inspected node mismatch");
    batch(() => {
      s(f2.location ?? null);
      let w2 = {};
      for (let { id: E2, name: M, type: G3, value: te3 } of f2.signals)
        w2[E2] = { id: E2, name: M, type: G3, selected: false, value: te3, itemId: `signal:${E2}` };
      d2({ signals: w2, value: f2.value ? { itemId: "value", selected: false, value: f2.value } : void 0, props: f2.props ? { proxy: f2.props.proxy, record: Object.entries(f2.props.record).reduce((E2, [M, G3]) => (E2[M] = { value: G3, selected: false, itemId: `prop:${M}` }, E2), {}) } : null });
    });
  });
  function $3(f2) {
    d2(produce((C) => {
      for (let w2 of f2)
        switch (w2[0]) {
          case "value":
            Al2(C, w2[1]);
            break;
          case "props":
            C.props && Bl(C.props, w2[1]);
            break;
          case "store":
            Ul(C, w2[1]);
            break;
        }
    }));
  }
  let N2 = () => {
  }, u3 = () => {
  }, y2 = (f2) => u3 = f2, V2 = (f2) => N2 = f2;
  createEffect2(defer(r2, (f2) => N2(f2)));
  function g3(f2, C, w2) {
    d2(produce((E2) => {
      let M;
      f2 === "value" ? M = E2.value : f2 === "signal" ? M = E2.signals[C] : f2 === "prop" && (M = E2.props?.record[C]), M && (M.selected = w2 = w2 ?? !M.selected, u3({ id: M.itemId, selected: w2 }));
    }));
  }
  let [x2, h] = createSignal2(null);
  function k2(f2, C) {
    h((w2) => w2 === f2 ? C ? f2 : null : C ? f2 : w2);
  }
  let b, P3 = (f2) => b = f2;
  function L2() {
    b();
  }
  return { inspectedNode: r2, details: c, setInspectedNode: m2, isNodeInspected: p3, setDetails: _2, update: $3, inspectValueItem: g3, onInspectedHandler: u3, hoveredElement: x2, toggleHoveredElement: k2, handleStructureChange: v, setOnInspectValue: y2, setOnInspectNode: V2, openComponentLocation: L2, setOnOpenLocation: P3 };
}
var at = class {
  constructor(t) {
    this.clientListeners = t;
  }
  connectDevtools(t) {
    if (this.listeners)
      throw new Error("Devtools already connected!");
    this.listeners = t;
  }
  updateStructure(t) {
    this.listeners.onStructureUpdate(t);
  }
  updateComputation(t) {
    this.listeners.onComputationUpdates(t);
  }
  updateInspector(t) {
    this.listeners.onInspectorUpdate(t);
  }
  setInspectedDetails(t) {
    this.listeners.onSetInspectedDetails(t);
  }
  resetPanel() {
    this.listeners.onResetPanel();
  }
  setLocatorState(t) {
    this.listeners.onClientLocatorModeChange(t);
  }
  setHoveredNode(t) {
    this.listeners.onClientHoveredComponent(t);
  }
  setInspectedNode(t) {
    this.listeners.onClientInspectedNode(t);
  }
};
var [yr, Xl] = createContextProvider(({ controller: e, options: t }) => {
  let [r2, o] = createSignal2(false), [l, n] = createSignal2(false), [i, s] = createSignal2(null), a = () => r2() || l();
  function d2(u3) {
    batch(() => {
      n(u3), u3 || s(null);
    });
  }
  let c = tt2({ clientHoveredNodeId: i }), p3 = st2({ findNode: c.findNode, getNodePath: c.getNodePath });
  e.connectDevtools({ onResetPanel() {
    batch(() => {
      c.updateStructure(null), d2(false), o(false), p3.setInspectedNode(null);
    });
  }, onSetInspectedDetails(u3) {
    p3.setDetails(u3);
  }, onClientHoveredComponent({ nodeId: u3, state: y2 }) {
    s((V2) => y2 ? u3 ?? V2 : V2 && V2 === u3 ? null : V2);
  }, onClientInspectedNode(u3) {
    batch(() => {
      p3.setInspectedNode(u3), o(false);
    });
  }, onClientLocatorModeChange(u3) {
    d2(u3);
  }, onComputationUpdates(u3) {
    u3.forEach(({ id: y2 }) => c.emitComputationUpdate(y2));
  }, onStructureUpdate(u3) {
    batch(() => {
      c.updateStructure(u3), p3.handleStructureChange();
    });
  }, onInspectorUpdate(u3) {
    p3.update(u3);
  } });
  let m2 = e.clientListeners;
  createEffect2(defer(r2, (u3) => m2.onDevtoolsLocatorStateChange(u3))), p3.setOnInspectNode((u3) => {
    m2.onInspectNode(u3 ? { nodeId: u3.id, rootId: c.getParentRoot(u3).id } : null);
  }), p3.setOnInspectValue(m2.onInspectValue), p3.setOnOpenLocation(m2.onOpenLocation), createEffect2(on4([c.extHovered, p3.hoveredElement], ([u3, y2], V2, g3) => {
    if (u3 && u3.type === NodeType.Component) {
      if (typeof g3 == "object" && g3.nodeId === u3.id)
        return g3;
      let h = { rootId: c.getParentRoot(u3).id, nodeId: u3.id };
      return m2.onHighlightElementChange(h), h;
    }
    if (y2)
      return typeof g3 == "string" && g3 === y2 ? g3 : (m2.onHighlightElementChange({ elementId: y2 }), y2);
    g3 && m2.onHighlightElementChange(null);
  }, { defer: true }));
  let v = "", _2, $3 = 0;
  function N2(u3) {
    if (u3 === v) {
      _2 && ($3 = ($3 + 1) % _2.length, p3.setInspectedNode(_2[$3]));
      return;
    } else {
      v = u3;
      let y2 = c.search(u3);
      y2 && p3.setInspectedNode(y2[$3 = 0]), _2 = y2;
    }
  }
  return { locatorEnabled: a, structureState: c.state, inspectedNode: p3.inspectedNode, isNodeInspected: p3.isNodeInspected, setLocatorState: o, setInspectedNode: p3.setInspectedNode, toggleHoveredNode: c.toggleHoveredNode, listenToComputationUpdate: c.listenToComputationUpdate, inspector: p3, structure: c, searchStructure: N2, options: t };
});
function F() {
  let e = Xl();
  if (!e)
    throw new Error("ControllerContext was not provided");
  return e;
}
var ct2 = "_1gfvr5dm _1gfvr5df";
var xr2 = "_1gfvr5dk _1gfvr5df";
var dt = { container: "_1gfvr5dr _1gfvr5df _1gfvr5dn", highlight: "_1gfvr5dq" };
var ut2 = "_1gfvr5dl _1gfvr5df";
var Cr2 = "_1gfvr5dj _1gfvr5df";
var wr2 = "_1gfvr5di _1gfvr5df";
var Pe2 = "_1gfvr5df";
var Nr2 = { list: "_1gfvr5dh" };
var ze2 = { container: "_1gfvr5db", icon: "_1gfvr5dc", name: "_1gfvr5dd", highlight: "_1gfvr5de" };
var K = { collapseOpacity: "var(--_1gfvr5d5)", container: { base: "_1gfvr5d4", collapsable: "_1gfvr5d7 _1gfvr5d4 _1gfvr5d0" }, highlight: "_1gfvr5d8 _1gfvr5d3", toggle: { container: "_1gfvr5d9", button: "_1gfvr5da" } };
var Ql = template("<div><div></div></div>", 4);
var es2 = template("<li></li>", 2);
var ts = template("<li><div></div><div></div></li>", 6);
var rs = template("<ul></ul>", 2);
var os2 = template("<span>Empty </span>", 2);
var ns = template("<span> [<!>]</span>", 3);
var ls = template('<span>"<!>"</span>', 3);
var Re2 = template("<span></span>", 2);
var ss2 = template('<input type="checkbox">', 1);
var is = template("<span>get <!>()</span>", 3);
var as2 = template("<span>Symbol(<!>)</span>", 3);
var cs2 = template("<span><div></div></span>", 4);
var pt2 = createContext2();
function $s2() {
  let [e, t] = createSignal2(false);
  return { isHovered: e, hoverProps: { "on:pointerover": (r2) => {
    r2.stopPropagation(), t(true);
  }, "on:pointerout": (r2) => {
    r2.stopPropagation(), t(false);
  } } };
}
var zr2 = (e) => e.type === ValueType.Object || e.type === ValueType.Array || e.type === ValueType.Store;
var oe2 = (e) => {
  let t = useContext2(pt2), r2 = () => e.value.type === ValueType.Store, o = () => zr2(e.value), l = e.isSignal || t?.underStore ? createPingedSignal(() => e.value) : void 0, n = () => createComponent2(Rr2, { get value() {
    return e.value;
  }, get extended() {
    return e.extended;
  } }), i = () => {
    e.onClick && o() && e.onClick();
  }, s = createMemo3(() => [(() => {
    let a = Ql.cloneNode(true), d2 = a.firstChild;
    return a.$$click = i, insert(d2, createComponent2(xe, { get highlight() {
      return l && l();
    }, isSignal: true, get class() {
      return ze2.highlight;
    }, get children() {
      return e.name;
    } })), effect((c) => {
      let p3 = ze2.container, m2 = ze2.name, v = e.isSignal || t?.underStore;
      return p3 !== c._v$ && className(a, c._v$ = p3), m2 !== c._v$2 && className(d2, c._v$2 = m2), v !== c._v$3 && setAttribute(d2, "data-signal", c._v$3 = v), c;
    }, { _v$: void 0, _v$2: void 0, _v$3: void 0 }), a;
  })(), memo((() => {
    let a = memo(() => !!(t && !r2()));
    return () => a() ? createComponent2(n, {}) : createComponent2(pt2.Provider, { get value() {
      return { onElementHover: e.onElementHover || t?.onElementHover, get underStore() {
        return r2();
      } };
    }, get children() {
      return createComponent2(n, {});
    } });
  })())]);
  return createComponent2(Show, { get when() {
    return o();
  }, get fallback() {
    return (() => {
      let a = es2.cloneNode(true);
      return insert(a, s), effect(() => className(a, K.container.base)), a;
    })();
  }, get children() {
    return untrack(() => {
      let { isHovered: a, hoverProps: d2 } = $s2();
      return (() => {
        let c = ts.cloneNode(true), p3 = c.firstChild, m2 = p3.nextSibling;
        return spread(c, mergeProps2({ get class() {
          return K.container.collapsable;
        }, get ["data-hovered"]() {
          return a();
        }, get style() {
          return (0, import_dynamic.assignInlineVars)({ [K.collapseOpacity]: a() || e.extended ? "1" : "0" });
        } }, d2), false, true), insert(m2, createComponent2(we2, { onToggle: i, get class() {
          return K.toggle.button;
        }, get isCollapsed() {
          return !e.extended;
        }, defaultCollapsed: true })), insert(c, s, null), effect((v) => {
          let _2 = K.highlight, $3 = K.toggle.container;
          return _2 !== v._v$4 && className(p3, v._v$4 = _2), $3 !== v._v$5 && className(m2, v._v$5 = $3), v;
        }, { _v$4: void 0, _v$5: void 0 }), c;
      })();
    });
  } });
};
var Rr2 = (e) => createMemo3(() => {
  let t = e.value;
  switch (t.type) {
    case ValueType.String:
      return createComponent2(ws2, { value: t });
    case ValueType.Number:
      return createComponent2(Ns2, { value: t });
    case ValueType.Boolean:
      return createComponent2(ks, { value: t });
    case ValueType.Object:
    case ValueType.Array:
      return createComponent2(Cs2, { value: t, get extended() {
        return e.extended;
      } });
    case ValueType.Function:
      return createComponent2(Ss2, { value: t });
    case ValueType.Getter:
      return createComponent2(bs2, { value: t });
    case ValueType.Null:
    case ValueType.Undefined:
      return createComponent2(Is2, { value: t });
    case ValueType.Symbol:
      return createComponent2(Es2, { value: t });
    case ValueType.Instance:
      return createComponent2(Vs2, { value: t });
    case ValueType.Element:
      return createComponent2(Ms2, { value: t });
    case ValueType.Store:
      return createComponent2(Rr2, { get value() {
        return t.value.value;
      }, get extended() {
        return e.extended;
      } });
  }
});
var ys2 = (e) => (() => {
  let t = rs.cloneNode(true);
  return insert(t, createComponent2(Entries, { get of() {
    return e.value;
  }, children: (r2, o) => createComponent2(Show, { get when() {
    return zr2(o());
  }, get children() {
    return untrack(() => {
      let [l, n] = createSignal2(false);
      return createComponent2(oe2, { name: r2, get value() {
        return o();
      }, onClick: () => n((i) => !i), get extended() {
        return l();
      } });
    });
  }, get fallback() {
    return createComponent2(oe2, { name: r2, get value() {
      return o();
    } });
  } }) })), effect(() => className(t, Nr2.list)), t;
})();
var xs2 = (e) => e.children ? Array.isArray(e.children) ? e.children.length : Object.keys(e.children).length : e.value;
var Cs2 = (e) => {
  let t = createMemo3(() => xs2(e.value));
  return createComponent2(Switch, { get fallback() {
    return createComponent2(ys2, { get value() {
      return e.value.children;
    } });
  }, get children() {
    return [createComponent2(Match, { get when() {
      return t() === 0;
    }, get children() {
      let r2 = os2.cloneNode(true);
      r2.firstChild;
      return insert(r2, () => e.value.type === ValueType.Array ? "Array" : "Object", null), effect(() => className(r2, ct2)), r2;
    } }), createComponent2(Match, { get when() {
      return !e.value.children || !e.extended;
    }, get children() {
      let r2 = ns.cloneNode(true), o = r2.firstChild, l = o.nextSibling;
      l.nextSibling;
      return insert(r2, () => e.value.type === ValueType.Array ? "Array" : "Object", o), insert(r2, t, l), effect(() => className(r2, Pe2)), r2;
    } })];
  } });
};
var ws2 = (e) => (() => {
  let t = ls.cloneNode(true), r2 = t.firstChild, o = r2.nextSibling;
  o.nextSibling;
  return insert(t, () => e.value.value, o), effect(() => className(t, wr2)), t;
})();
var Ns2 = (e) => {
  let t = () => {
    switch (e.value.value) {
      case NAN:
        return "NaN";
      case INFINITY:
        return "Infinity";
      case NEGATIVE_INFINITY:
        return "-Infinity";
      default:
        return e.value.value;
    }
  };
  return (() => {
    let r2 = Re2.cloneNode(true);
    return insert(r2, t), effect(() => className(r2, Cr2)), r2;
  })();
};
var ks = (e) => (() => {
  let t = ss2.cloneNode(true);
  return t.$$click = (r2) => r2.preventDefault(), effect(() => className(t, xr2)), effect(() => t.checked = e.value.value), t;
})();
var Ss2 = (e) => (() => {
  let t = Re2.cloneNode(true);
  return insert(t, () => e.value.value ? `f ${e.value.value}()` : "function()"), effect(() => className(t, ut2)), t;
})();
var bs2 = (e) => (() => {
  let t = is.cloneNode(true), r2 = t.firstChild, o = r2.nextSibling;
  o.nextSibling;
  return insert(t, () => e.value.value, o), effect(() => className(t, ut2)), t;
})();
var Is2 = (e) => (() => {
  let t = Re2.cloneNode(true);
  return insert(t, () => e.value.type === ValueType.Null ? "null" : "undefined"), effect(() => className(t, ct2)), t;
})();
var Es2 = (e) => (() => {
  let t = as2.cloneNode(true), r2 = t.firstChild, o = r2.nextSibling;
  o.nextSibling;
  return insert(t, () => e.value.value, o), effect(() => className(t, Pe2)), t;
})();
var Vs2 = (e) => (() => {
  let t = Re2.cloneNode(true);
  return insert(t, () => e.value.value), effect(() => className(t, Pe2)), t;
})();
var Ms2 = (e) => {
  let { onElementHover: t } = useContext2(pt2) ?? {}, r2 = t && ((l) => {
    e.value.value.id !== void 0 && t(e.value.value.id, l);
  }), o = r2 && createHover(r2);
  return (() => {
    let l = cs2.cloneNode(true), n = l.firstChild;
    return spread(l, mergeProps2({ get class() {
      return dt.container;
    } }, o), false, true), insert(l, () => e.value.value.name, null), effect(() => className(n, dt.highlight)), l;
  })();
};
delegateEvents(["click"]);
var ne2 = { container: "ue1o9y4", button: "ue1o9y5", icon: "ue1o9y6" };
var Hr2 = "ue1o9y8";
var He2 = "ue1o9y9";
var Lr2 = "ue1o9y1";
var Dr2 = "ue1o9ya";
var Or2 = "ue1o9y0";
var Tr = "_1fpdl0t3 _1fpdl0t2";
var jr2 = "_1fpdl0t0";
var Ar2 = "_1fpdl0t2";
var Br2 = "_1fpdl0t1";
var vt = "_1fpdl0t4";
var Ur2 = "_1fpdl0t5";
var Le = template("<span></span>", 2);
var Ls2 = template("<span>Render Effect</span>", 2);
var De2 = (e) => {
  let t, r2;
  return () => {
    let o = (() => {
      switch (e.type) {
        case NodeType$1.Memo:
          return S2.Memo;
        case NodeType$1.Effect:
          return S2.Effect;
        case NodeType$1.Root:
          return S2.Root;
        case NodeType$1.Render:
          return S2.RenderEffect;
        case NodeType$1.Computation:
          return S2.Computation;
        case NodeType$1.Context:
          return S2.Context;
      }
    })();
    return o === t ? r2 : r2 = (t = o) ? createComponent2(o, { get class() {
      return e.class;
    } }) : null;
  };
};
var Oe2 = (e) => (() => {
  let t = Le.cloneNode(true);
  return insert(t, createComponent2(De2, { get type() {
    return e.type;
  }, get class() {
    return Ur2;
  } }), null), insert(t, () => {
    switch (e.type) {
      case NodeType$1.Root:
      case NodeType$1.Context:
        return (() => {
          let r2 = Le.cloneNode(true);
          return insert(r2, () => NodeType$1[e.type]), effect(() => className(r2, vt)), r2;
        })();
      case NodeType$1.Render:
        return (() => {
          let r2 = Ls2.cloneNode(true);
          return effect(() => className(r2, vt)), r2;
        })();
      case NodeType$1.Component:
        return (() => {
          let r2 = Le.cloneNode(true);
          return insert(r2, () => e.name), effect(() => className(r2, Tr)), r2;
        })();
      default:
        return (() => {
          let r2 = Le.cloneNode(true);
          return insert(r2, () => e.name), effect(() => className(r2, Ar2)), r2;
        })();
    }
  }, null), effect((r2) => {
    let o = jr2, l = { [Br2]: e.isTitle }, n = e.isFrozen;
    return o !== r2._v$ && className(t, r2._v$ = o), r2._v$2 = classList(t, l, r2._v$2), n !== r2._v$3 && setAttribute(t, "data-frozen", r2._v$3 = n), r2;
  }, { _v$: void 0, _v$2: void 0, _v$3: void 0 }), t;
})();
var Ts = template("<div><header><div><button></button></div></header></div>", 8);
var js = template("<button></button>", 2);
var As2 = template("<div></div>", 2);
var Bs2 = template("<div><h2></h2></div>", 4);
var Us2 = template("<div><h2>Location</h2><p></p></div>", 6);
var Ws = template("<div><h2></h2><ul></ul></div>", 6);
function ft2() {
  let { inspector: e } = F(), { details: t, inspectedNode: r2, openComponentLocation: o, setInspectedNode: l } = e;
  return createComponent2(Show, { get when() {
    return r2();
  }, get children() {
    let n = Ts.cloneNode(true), i = n.firstChild, s = i.firstChild, a = s.firstChild;
    return insert(i, createComponent2(Oe2, { get name() {
      return r2().name;
    }, get type() {
      return r2().type;
    }, isTitle: true }), s), insert(s, (() => {
      let d2 = memo(() => !!t.location);
      return () => d2() && (() => {
        let c = js.cloneNode(true);
        return addEventListener(c, "click", o, true), insert(c, createComponent2(S2.Code, { get class() {
          return ne2.icon;
        } })), effect(() => className(c, ne2.button)), c;
      })();
    })(), a), a.$$click = () => l(null), insert(a, createComponent2(S2.Close, { get class() {
      return ne2.icon;
    } })), insert(n, createComponent2(ue, { get children() {
      return createComponent2(Xs2, {});
    } }), null), effect((d2) => {
      let c = Or2, p3 = Lr2, m2 = ne2.container, v = ne2.button;
      return c !== d2._v$ && className(n, d2._v$ = c), p3 !== d2._v$2 && className(i, d2._v$2 = p3), m2 !== d2._v$3 && className(s, d2._v$3 = m2), v !== d2._v$4 && className(a, d2._v$4 = v), d2;
    }, { _v$: void 0, _v$2: void 0, _v$3: void 0, _v$4: void 0 }), n;
  } });
}
var Xs2 = () => {
  let { inspector: e } = F(), { details: t, inspectedNode: r2 } = e, o = createMemo3(() => {
    let l = Object.values(t.signals), n = [], i = [], s = [];
    for (let a of l)
      a.type === NodeType.Memo ? n.push(a) : a.type === NodeType.Signal ? i.push(a) : a.type === NodeType.Store && s.push(a);
    return { memos: n, signals: i, stores: s };
  });
  return (() => {
    let l = As2.cloneNode(true);
    return insert(l, createComponent2(qr2, { get when() {
      return memo(() => !!t.props)() && Object.keys(t.props).length;
    }, get title() {
      return ["Props ", memo((() => {
        let n = memo(() => !!t.props.proxy);
        return () => n() && createComponent2(Ne2, { children: "PROXY" });
      })())];
    }, get children() {
      return createComponent2(Entries, { get of() {
        return t.props.record;
      }, children: (n, i) => createComponent2(oe2, { name: n, get value() {
        return i().value;
      }, get extended() {
        return i().selected;
      }, onClick: () => e.inspectValueItem("prop", n), get onElementHover() {
        return e.toggleHoveredElement;
      }, isSignal: true }) });
    } }), null), insert(l, () => ["stores", "signals", "memos"].map((n) => createComponent2(qr2, { get when() {
      return o()[n].length;
    }, title: n, get children() {
      return createComponent2(For, { get each() {
        return o()[n];
      }, children: (i) => createComponent2(oe2, { get name() {
        return i.name;
      }, get value() {
        return i.value;
      }, get extended() {
        return i.selected;
      }, onClick: () => e.inspectValueItem("signal", i.id), get onElementHover() {
        return e.toggleHoveredElement;
      }, isSignal: n !== "stores" }) });
    } })), null), insert(l, (() => {
      let n = memo(() => !!t.value);
      return () => n() && (() => {
        let i = Bs2.cloneNode(true), s = i.firstChild;
        return insert(s, () => NodeType[r2().type]), insert(i, createComponent2(oe2, { name: "value", get value() {
          return t.value.value;
        }, get extended() {
          return t.value.selected;
        }, onClick: () => e.inspectValueItem("value"), get onElementHover() {
          return e.toggleHoveredElement;
        }, isSignal: true }), null), effect(() => className(s, He2)), i;
      })();
    })(), null), insert(l, (() => {
      let n = memo(() => !!t.location);
      return () => n() && (() => {
        let i = Us2.cloneNode(true), s = i.firstChild, a = s.nextSibling;
        return insert(a, () => t.location), effect((d2) => {
          let c = He2, p3 = Dr2;
          return c !== d2._v$5 && className(s, d2._v$5 = c), p3 !== d2._v$6 && className(a, d2._v$6 = p3), d2;
        }, { _v$5: void 0, _v$6: void 0 }), i;
      })();
    })(), null), effect(() => className(l, Hr2)), l;
  })();
};
function qr2(e) {
  return createComponent2(Show, { get when() {
    return e.when;
  }, get children() {
    let t = Ws.cloneNode(true), r2 = t.firstChild, o = r2.nextSibling;
    return insert(r2, () => e.title), insert(o, () => e.children), effect(() => className(r2, He2)), t;
  } });
}
delegateEvents(["click"]);
var Xr = "_1ha08ns6";
var Jr2 = "_1ha08ns1";
var Yr2 = "_1ha08ns4";
var Zr = "var(--_1ha08ns0)";
var Kr2 = "_1ha08ns5";
var Qr = "_1ha08ns2";
var ti2 = template("<div><div></div><div></div><div></div></div>", 8);
var eo2 = (e) => {
  let { onHoverChange: t, listenToUpdate: r2, onInspectChange: o } = e, l = e.owner, { name: n, type: i, hmr: s } = l, { toggleCollapsed: a } = e, d2 = createPingedSignal(trackFromListen((p3) => r2(p3))), c = createHover(t);
  return (() => {
    let p3 = ti2.cloneNode(true), m2 = p3.firstChild, v = m2.nextSibling, _2 = v.nextSibling;
    return p3.$$click = () => o(!e.isSelected), spread(p3, mergeProps2({ get ["data-hovered"]() {
      return e.isHovered;
    }, get ["data-selected"]() {
      return e.isSelected;
    }, get class() {
      return Jr2;
    } }, c, { get style() {
      return (0, import_dynamic.assignInlineVars)({ [Zr]: e.owner.level + "" });
    } }), false, true), insert(_2, createComponent2(we2, { get class() {
      return Xr;
    }, onToggle: () => a(l), get isCollapsed() {
      return e.isCollapsed;
    } }), null), insert(_2, createComponent2(xe, { get highlight() {
      return d2();
    }, get children() {
      return createComponent2(Oe2, { name: n, type: i, get isFrozen() {
        return e.owner.frozen;
      } });
    } }), null), insert(_2, s && createComponent2(Ne2, { children: "HMR" }), null), effect(($3) => {
      let N2 = Qr, u3 = Yr2, y2 = Kr2;
      return N2 !== $3._v$ && className(m2, $3._v$ = N2), u3 !== $3._v$2 && className(v, $3._v$2 = u3), y2 !== $3._v$3 && className(_2, $3._v$3 = y2), $3;
    }, { _v$: void 0, _v$2: void 0, _v$3: void 0 }), p3;
  })();
};
delegateEvents(["click"]);
var to2 = 1.125;
var ro2 = "_133vkr77";
var oo2 = "_133vkr75";
var no2 = "_133vkr72";
var lo2 = "_133vkr76";
var so2 = "_133vkr73";
var io2 = "_133vkr74";
var ao2 = "_133vkr7d _133vkr7b";
var co2 = "_133vkr7c _133vkr78";
var uo2 = "_133vkr7f";
var po2 = "_133vkr70";
var _t = "_133vkr7e";
var ui = template("<div><div><div></div></div></div>", 6);
var $t2 = template("<div></div>", 2);
var pi = template("<div><div></div></div>", 4);
var fo = () => {
  let { structure: e, toggleHoveredNode: t, setInspectedNode: r2, inspector: o } = F(), l = useRemSize(), n = createElementSize(() => s), i = () => (n.height ?? 0) > l() * to2, s;
  return (() => {
    let a = ui.cloneNode(true), d2 = a.firstChild, c = d2.firstChild;
    insert(d2, (() => {
      let m2 = memo(() => !!i());
      return () => m2() && (() => {
        let v = $t2.cloneNode(true);
        return insert(v, createComponent2(S2.Options, { get class() {
          return io2;
        } })), effect(() => className(v, so2)), v;
      })();
    })(), c);
    let p3 = s;
    return typeof p3 == "function" ? use(p3, c) : s = c, insert(c, () => o.details.path.map((m2) => {
      let v = createHover((_2) => t(m2.id, _2));
      return [(() => {
        let _2 = $t2.cloneNode(true);
        return insert(_2, createComponent2(S2.CarretRight, { get class() {
          return ro2;
        } })), effect(() => className(_2, lo2)), _2;
      })(), (() => {
        let _2 = pi.cloneNode(true), $3 = _2.firstChild;
        return spread(_2, mergeProps2({ get class() {
          return co2;
        }, get ["data-hovered"]() {
          return e.isHovered(m2);
        } }, v, { onClick: () => r2(m2) }), false, true), insert(_2, (() => {
          let N2 = memo(() => m2.type === NodeType.Component);
          return () => N2() ? [createComponent2(De2, { get type() {
            return NodeType.Component;
          }, get class() {
            return _t;
          } }), (() => {
            let u3 = $t2.cloneNode(true);
            return insert(u3, () => m2.name), effect(() => className(u3, uo2)), u3;
          })()] : createComponent2(De2, { get type() {
            return m2.type;
          }, get class() {
            return _t;
          } });
        })(), null), effect(() => className($3, ao2)), _2;
      })()];
    })), effect((m2) => {
      let v = po2, _2 = no2, $3 = i(), N2 = oo2;
      return v !== m2._v$ && className(a, m2._v$ = v), _2 !== m2._v$2 && className(d2, m2._v$2 = _2), $3 !== m2._v$3 && setAttribute(d2, "data-extendable", m2._v$3 = $3), N2 !== m2._v$4 && className(c, m2._v$4 = N2), m2;
    }, { _v$: void 0, _v$2: void 0, _v$3: void 0, _v$4: void 0 }), a;
  })();
};
function go2(e, t, r2, o) {
  let l = Math.floor(t / o), n = Math.ceil(r2 / o + 1), i = l + n;
  return i > e && (i = e, l = i - n, n = Math.min(n, e), l < 0 && (l = 0)), { start: l, end: i, length: n };
}
var ho = 1.125;
var _o = 0.75;
var $o2 = "var(--_9kuowo3)";
var yo = "_9kuowo0";
var xo = "_9kuowo5";
var Co2 = "_9kuowo6";
var wo = "_9kuowo4";
var No = "var(--_9kuowo2)";
var ko2 = "var(--_9kuowo1)";
var _i2 = template("<div></div>", 2);
var $i = template("<div><div><div></div></div></div>", 6);
function Nt2() {
  return (() => {
    let e = _i2.cloneNode(true);
    return insert(e, createComponent2(ki2, {}), null), insert(e, createComponent2(fo, {}), null), effect(() => className(e, yo)), e;
  })();
}
var ki2 = () => {
  let [e, t] = createSignal2({ top: 0, height: 0 }), r2 = useRemSize(), o = () => r2() * _o, l = () => r2() * ho, n = (g3) => {
    t({ top: Math.max(g3.scrollTop - o(), 0), height: g3.clientHeight });
  }, [i, s] = createSignal2(/* @__PURE__ */ new WeakSet(), { equals: false }), a = (g3) => s((x2) => (x2.delete(g3) || x2.add(g3), x2)), { structureState: d2, inspectedNode: c, structure: p3, isNodeInspected: m2, listenToComputationUpdate: v, toggleHoveredNode: _2, setInspectedNode: $3 } = F(), N2 = createMemo3(() => {
    let g3 = d2().nodeList, x2 = [], h = i(), k2 = 0;
    for (let b of g3) {
      let P3 = k2 > 0;
      if (P3 ? k2-- : x2.push(b), P3 || h.has(b)) {
        let { children: L2, subroots: f2 } = b;
        k2 += L2.length, f2 && (k2 += f2.length);
      }
    }
    return x2;
  }), u3 = createMemo3((g3 = { start: 0, end: 0, fullLength: 0, list: [], nodeList: [], minLevel: 0 }) => {
    let x2 = N2(), { top: h, height: k2 } = e(), { start: b, end: P3, length: L2 } = go2(x2.length, h, k2, l());
    if (g3.nodeList === x2 && g3.start === b && g3.end === P3)
      return g3;
    let f2 = Array(L2), C = {};
    for (let E2 of g3.list)
      C[E2.node.id] = E2;
    let w2 = L2 ? 1 / 0 : 0;
    for (let E2 = 0; E2 < L2; E2++) {
      let M = x2[b + E2], G3 = C[M.id];
      if (w2 = Math.min(w2, M.level), G3)
        f2[E2] = G3, G3.update();
      else {
        let [te3, ye2] = createSignal2(M, { equals: false, internal: true });
        f2[E2] = { node: M, getNode: te3, update: () => ye2(M) };
      }
    }
    return { list: f2, start: b, end: P3, nodeList: x2, fullLength: x2.length, minLevel: w2 };
  }), y2 = createMemo3(() => Math.max(u3().minLevel - 7, 0), 0, { equals: (g3, x2) => g3 == x2 || Math.abs(x2 - g3) < 7 && x2 != 0 });
  createEffect2(() => {
    let g3 = c();
    !g3 || setTimeout(() => {
      let x2 = N2().indexOf(g3);
      if (x2 === -1) {
        let f2 = i(), C = g3.parent, w2 = false;
        for (; C; )
          w2 ||= f2.delete(C), C = C.parent;
        if (w2)
          s(f2), x2 = N2().indexOf(g3);
        else
          return;
      }
      let { start: h, end: k2 } = u3(), b = l(), P3 = o(), L2;
      if (x2 <= h)
        L2 = (x2 - 1) * b;
      else if (x2 >= k2 - 2)
        L2 = (x2 + 2) * b - e().height;
      else
        return;
      V2.scrollTop = L2 + P3;
    });
  });
  let V2;
  return createComponent2(ue, { ref: (g3) => {
    V2 = g3, setTimeout(() => n(g3)), createResizeObserver(g3, () => n(g3));
  }, onScroll: (g3) => n(g3.currentTarget), get children() {
    let g3 = $i.cloneNode(true), x2 = g3.firstChild, h = x2.firstChild;
    return insert(h, createComponent2(For, { get each() {
      return u3().list;
    }, children: ({ getNode: k2, node: b }) => createComponent2(eo2, { get owner() {
      return k2();
    }, get isHovered() {
      return p3.isHovered(b);
    }, get isSelected() {
      return m2(b.id);
    }, listenToUpdate: (P3) => v((L2) => L2 === b.id && P3()), onHoverChange: (P3) => _2(b.id, P3), onInspectChange: (P3) => $3(P3 ? b : null), toggleCollapsed: a, get isCollapsed() {
      return i().has(b);
    } }) })), effect((k2) => {
      let b = wo, P3 = (0, import_dynamic.assignInlineVars)({ [ko2]: u3().fullLength.toString(), [No]: u3().start.toString(), [$o2]: y2().toString() }), L2 = xo, f2 = Co2;
      return b !== k2._v$ && className(g3, k2._v$ = b), k2._v$2 = style(g3, P3, k2._v$2), L2 !== k2._v$3 && className(x2, k2._v$3 = L2), f2 !== k2._v$4 && className(h, k2._v$4 = f2), k2;
    }, { _v$: void 0, _v$2: void 0, _v$3: void 0, _v$4: void 0 }), g3;
  } });
};
var Io2 = "_2sb15m0 _6zygq2b";
var Eo = "_2sb15mg";
var Vo2 = "_2sb15m1";
var Mo2 = "_2sb15m3";
var Po = "_2sb15m4";
var ce2 = { container: "_2sb15mb", button: "_2sb15mc ygz0wz4", icon: "_2sb15md", panel: "_2sb15me", menu: "_2sb15mf" };
var ee = { form: "_2sb15m5", input: "_2sb15m6", iconContainer: "_2sb15m9 _2sb15m7", icon: "_2sb15m8", clearButton: "_2sb15ma _2sb15m7", clearIcon: "_2sb15m8" };
var zo2 = "_2sb15m2";
var Ei2 = template('<form><input type="text" placeholder="Search"><div></div></form>', 5);
var Vi = template('<button type="reset"></button>', 2);
var Mi2 = template("<div><header><div><h3>Solid Devtools</h3></div></header><div></div></div>", 10);
var Pi2 = template("<p></p>", 2);
var ji2 = () => {
  let e = F();
  return createComponent2(Jt2, { get class() {
    return Mo2;
  }, get onToggle() {
    return e.setLocatorState;
  }, get selected() {
    return e.locatorEnabled();
  }, get children() {
    return createComponent2(S2.Select, { get class() {
      return Po;
    } });
  } });
};
var Ai2 = () => {
  let e = F(), [t, r2] = createSignal2(""), o = (l) => {
    r2(l), e.searchStructure("");
  };
  return (() => {
    let l = Ei2.cloneNode(true), n = l.firstChild, i = n.nextSibling;
    return l.addEventListener("reset", () => o("")), l.addEventListener("submit", (s) => {
      s.preventDefault(), e.searchStructure(t());
    }), n.addEventListener("paste", (s) => o(s.currentTarget.value)), n.$$input = (s) => o(s.currentTarget.value), use((s) => {
      e.options.useShortcuts && (createShortcut(["/"], () => s.focus()), createShortcut(["Escape"], () => {
        document.activeElement === s && s.blur(), s.value && o(s.value = "");
      }));
    }, n), insert(i, createComponent2(S2.Search, { get class() {
      return ee.icon;
    } })), insert(l, (() => {
      let s = memo(() => !!t());
      return () => s() && (() => {
        let a = Vi.cloneNode(true);
        return insert(a, createComponent2(S2.Close, { get class() {
          return ee.clearIcon;
        } })), effect(() => className(a, ee.clearButton)), a;
      })();
    })(), null), effect((s) => {
      let a = ee.form, d2 = ee.input, c = ee.iconContainer;
      return a !== s._v$ && className(l, s._v$ = a), d2 !== s._v$2 && className(n, s._v$2 = d2), c !== s._v$3 && className(i, s._v$3 = c), s;
    }, { _v$: void 0, _v$2: void 0, _v$3: void 0 }), l;
  })();
};
var Bi2 = () => createComponent2(Tu, { defaultOpen: false, get class() {
  return ce2.container;
}, children: ({ isOpen: e, setState: t }) => [createComponent2(vu, { onKeyDown: (r2) => r2.key === " " && t(true), get class() {
  return ce2.button;
}, get children() {
  return createComponent2(S2.Options, { get class() {
    return ce2.icon;
  } });
} }), createComponent2(Show, { get when() {
  return e();
}, get children() {
  return createComponent2(Xu, { get class() {
    return ce2.panel;
  }, "on:keydown": (r2) => r2.key === "Escape" && r2.stopPropagation(), get children() {
    return createComponent2(tu, { get class() {
      return ce2.menu;
    }, get children() {
      return createComponent2(du, { as: "a", href: "https://github.com/thetarnav/solid-devtools/issues", target: "_blank", children: "Report a bug" });
    } });
  } });
} })] });
var Ui2 = (e) => {
  let t = F();
  return (() => {
    let r2 = Mi2.cloneNode(true), o = r2.firstChild, l = o.firstChild;
    l.firstChild;
    let i = o.nextSibling;
    return insert(o, createComponent2(ji2, {}), l), insert(o, createComponent2(Ai2, {}), l), insert(l, (() => {
      let s = memo(() => !!e.headerSubtitle);
      return () => s() && (() => {
        let a = Pi2.cloneNode(true);
        return insert(a, () => e.headerSubtitle), effect(() => className(a, zo2)), a;
      })();
    })(), null), insert(o, createComponent2(Bi2, {}), null), insert(i, createComponent2(Xe2, { onToggle: () => t.setInspectedNode(null), get side() {
      return createComponent2(ft2, {});
    }, get children() {
      return createComponent2(Nt2, {});
    } })), effect((s) => {
      let a = Io2, d2 = Vo2, c = Eo;
      return a !== s._v$4 && className(r2, s._v$4 = a), d2 !== s._v$5 && className(o, s._v$5 = d2), c !== s._v$6 && className(i, s._v$6 = c), s;
    }, { _v$4: void 0, _v$5: void 0, _v$6: void 0 }), r2;
  })();
};
var Lo2 = Ui2;
delegateEvents(["input"]);
var lm2 = (e) => createComponent2(ir2, { get footer() {
  return e.errorOverlayFooter;
}, get catchWindowErrors() {
  return e.catchWindowErrors;
}, get children() {
  return createComponent2(yr, { get controller() {
    return e.controller;
  }, get options() {
    return { useShortcuts: e.useShortcuts ?? false };
  }, get children() {
    return createComponent2(Lo2, { get headerSubtitle() {
      return e.headerSubtitle;
    } });
  } });
} });

// src/index.tsx
import { createInternalRoot, useDebugger as useDebugger2 } from "@solid-devtools/debugger";
import { useIsMobile, useIsTouch } from "@solid-devtools/shared/primitives";
import { warn as warn2 } from "@solid-devtools/shared/utils";

// src/controller.ts
import { createEffect as createEffect3, onCleanup as onCleanup3 } from "solid-js";
import { enableRootsAutoattach, useDebugger } from "@solid-devtools/debugger";
import { defer as defer2 } from "@solid-devtools/shared/primitives";
enableRootsAutoattach();
var clone = (obj) => JSON.parse(JSON.stringify(obj));
var separate = (obj, callback) => {
  queueMicrotask(() => {
    const v = clone(obj);
    queueMicrotask(() => callback(v));
  });
};
function createController() {
  const debug = useDebugger();
  onCleanup3(() => debug.inspector.setInspectedNode(null));
  const controller = new at({
    onDevtoolsLocatorStateChange(enabled) {
      queueMicrotask(() => debug.locator.toggleEnabled(enabled));
    },
    onHighlightElementChange(data) {
      queueMicrotask(() => debug.locator.setHighlightTarget(data));
    },
    onInspectNode(node) {
      queueMicrotask(() => debug.inspector.setInspectedNode(node));
    },
    onInspectValue(node) {
      queueMicrotask(() => debug.inspector.toggleValueNode(node));
    },
    onOpenLocation() {
      queueMicrotask(() => debug.openInspectedNodeLocation());
    }
  });
  debug.listenTo("StructureUpdates", (updates) => {
    queueMicrotask(() => controller.updateStructure(updates));
  });
  debug.listenTo("ComputationUpdates", (updates) => {
    queueMicrotask(() => controller.updateComputation(updates));
  });
  debug.listenTo("InspectorUpdate", (payload) => {
    separate(payload, (payload2) => controller.updateInspector(payload2));
  });
  debug.listenTo("InspectedNodeDetails", (details) => {
    separate(details, (details2) => controller.setInspectedDetails(details2));
  });
  createEffect3(
    defer2(debug.locator.enabledByDebugger, (state) => {
      queueMicrotask(() => controller.setLocatorState(state));
    })
  );
  debug.locator.addClickInterceptor((e, component) => {
    e.preventDefault();
    e.stopPropagation();
    queueMicrotask(() => controller.setInspectedNode(component.id));
    return false;
  });
  debug.locator.onHoveredComponent((data) => {
    queueMicrotask(() => controller.setHoveredNode(data));
  });
  return controller;
}

// ../frontend/dist/index.css
var dist_default = 'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}button{padding:0;border:none;background:transparent;cursor:pointer;color:inherit;font-family:inherit}input[type=checkbox]{margin:0}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.fade-enter,.fade-exit-to{opacity:0}.fade-enter-active,.fade-exit-active{transition:opacity .3s ease}@media screen and (prefers-color-scheme: dark){*{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}}._6zygq2b{--_6zygq22: #e4e4e7;--_6zygq21: 1px solid var(--_6zygq22);--_6zygq20: #fafafa;--_6zygq24: #a1a1aa;--_6zygq23: 1px solid var(--_6zygq24);--_6zygq25: #d4d4d8;--_6zygq26: 1px solid #a1a1aa;--_6zygq27: #71717a;--_6zygq28: 113 113 122;--_6zygq29: #18181b;--_6zygq2a: #0891b2}@media screen and (prefers-color-scheme: dark){._6zygq2b{--_6zygq22: #52525b;--_6zygq20: #27272a;--_6zygq25: #52525b;--_6zygq26: 1px solid #71717a;--_6zygq27: #a1a1aa;--_6zygq28: 161 161 170;--_6zygq29: #fafafa;--_6zygq2a: #22d3ee}}._2g2smp0{position:relative;z-index:1}._2g2smp3{position:absolute;z-index:-1;left:-.25rem;right:-.25rem;top:0;bottom:0;border-radius:.25rem;transition-property:opacity;transition-duration:.15s;transition-delay:0ms;transition-timing-function:cubic-bezier(.4,0,.2,1);background-color:var(--_2g2smp1, var(--_6zygq25));opacity:var(--_2g2smp2, 0)}._2g2smp5{--_2g2smp1: #22d3ee;--_2g2smp2: 0}._2g2smp4 ._2g2smp5{--_2g2smp2: .6}._2g2smp5[data-signal=true]{--_2g2smp1: #f59e0b}@media screen and (prefers-color-scheme: light){._2g2smp4{color:#000}}@media screen and (prefers-color-scheme: dark){._2g2smp4 ._2g2smp5{--_2g2smp2: .35}._2g2smp4 ._2g2smp5[data-signal=true]{--_2g2smp2: .25}}.l3wl9g1{display:grid;grid-auto-flow:column;height:100%;width:100%;grid-template-columns:1fr}.l3wl9g1[data-open=true]{grid-template-columns:minmax(9rem,var(--l3wl9g0)) 1px minmax(9rem,1fr);grid-template-rows:100%}.l3wl9g2{position:relative;z-index:1;overflow:hidden}.l3wl9g3{position:relative;background-color:var(--_6zygq22)}.l3wl9g4{position:absolute;z-index:999;inset:0 -2px;cursor:col-resize;-webkit-user-select:none;-moz-user-select:none;user-select:none}.l3wl9g4:after{content:"";position:absolute;inset:0 1px;background-color:var(--_6zygq22);opacity:0;transition-property:opacity;transition-duration:.15s;transition-delay:0ms;transition-timing-function:cubic-bezier(.4,0,.2,1)}.l3wl9g4:hover:after,.l3wl9g4[data-dragging=true]:after{opacity:1}@media screen and (max-width: 640px){.l3wl9g1[data-open=true]{grid-template-columns:100%;grid-template-rows:minmax(9rem,var(--l3wl9g0)) 1px minmax(9rem,1fr)}.l3wl9g4{cursor:row-resize;inset:-2px 0}.l3wl9g4:after{inset:1px 0}}._1sq57e10{height:100%;width:100%;position:relative;z-index:0;overflow:auto;overflow:overlay;overscroll-behavior:none}._1sq57e10::-webkit-scrollbar{display:block;width:1rem}._1sq57e10::-webkit-scrollbar-button{display:none}._1sq57e10::-webkit-scrollbar-track{background-color:#0000}._1sq57e10::-webkit-scrollbar-track-piece{background-color:#0000}._1sq57e10::-webkit-scrollbar-thumb{background-color:transparent}._1sq57e10::-webkit-scrollbar-corner{background-color:transparent}._1sq57e10:hover::-webkit-scrollbar-thumb{background-color:#71717a33}._1sq57e10::-webkit-scrollbar-thumb:hover{background-color:#71717a66}._1sq57e12{cursor:grab;-webkit-user-select:none;-moz-user-select:none;user-select:none}._1sq57e13{cursor:grabbing;-webkit-user-select:none;-moz-user-select:none;user-select:none}._1sq57e14{position:absolute;inset:0;z-index:1}._1sq57e15{pointer-events:none}._1sq57e16{pointer-events:all}._1sq57e17{overflow:hidden;width:-moz-max-content;width:max-content;height:-moz-max-content;height:max-content;min-width:100%}.ygz0wz4{--ygz0wz0: 82 82 91;--ygz0wz1: 1;--ygz0wz2: 0;--ygz0wz3: .2;display:flex;align-items:center;justify-content:center;color:rgb(var(--ygz0wz0) / var(--ygz0wz1));background-color:rgb(var(--ygz0wz0) / var(--ygz0wz2));border:1px solid rgb(var(--ygz0wz0) / var(--ygz0wz3));transition-property:color backgroundColor borderColor;transition-duration:.2s;transition-delay:0ms;transition-timing-function:cubic-bezier(.4,0,.2,1);border-radius:.375rem}.ygz0wz4:hover{--ygz0wz2: .1;--ygz0wz3: .25}.ygz0wz4:active{--ygz0wz2: .05;--ygz0wz3: .2}.ygz0wz4:is([aria-selected="true"],[aria-expanded="true"]){--ygz0wz0: 8 145 178;--ygz0wz2: .05;--ygz0wz3: .2}.ygz0wz6{position:relative;height:var(--ygz0wz5, 1.125rem);width:var(--ygz0wz5, 1.125rem);flex-shrink:0;display:flex;align-items:center;justify-content:center}.ygz0wz8{width:.5rem;height:.5rem;color:#52525b;transform:rotate(180deg);opacity:.5;transition-property:transform opacity;transition-duration:.15s;transition-delay:0ms;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ygz0wz6[aria-selected=true] .ygz0wz8{transform:rotate(90deg);opacity:1}.ygz0wz7 .ygz0wz8{opacity:1}.ygz0wz7[aria-selected=true] .ygz0wz8{opacity:.5}@media screen and (prefers-color-scheme: dark){.ygz0wz4{--ygz0wz0: 161 161 170}.ygz0wz4:is([aria-selected="true"],[aria-expanded="true"]){--ygz0wz0: 34 211 238}.ygz0wz8{color:#a1a1aa}}._1wa3m110{display:inline-block;padding-right:.25rem;padding-left:.25rem;background-color:#0891b233;border-radius:.25rem;color:#0891b2;text-transform:uppercase;font-weight:700;font-size:.625rem;-webkit-user-select:none;-moz-user-select:none;user-select:none}._1eu3l630{position:fixed;inset:0;z-index:9999;overflow-y:auto}._1eu3l631{min-height:100vh;padding:1rem 0;display:flex;align-items:center;justify-content:center}._1eu3l632{position:fixed;inset:0;background-color:#00000080}._1eu3l633{z-index:50;max-width:calc(100vw - 1rem);min-width:20rem;overflow:hidden;padding:1rem;row-gap:.5rem;margin-top:2rem;margin-bottom:2rem;background-color:#fafafa;border-radius:.75rem;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;color:#27272a}._1eu3l634{display:flex;align-items:center;justify-content:space-between}._1eu3l635{display:flex;align-items:center;justify-content:center;-moz-column-gap:.25rem;column-gap:.25rem}._1eu3l636{padding:.25rem;font-weight:500}._1eu3l637{display:flex;align-items:center;justify-content:center;-moz-column-gap:.25rem;column-gap:.25rem}._1eu3l638{padding-top:.5rem;display:flex;flex-direction:column;row-gap:.5rem}._1eu3l639{color:#ef4444;font-weight:500}._1eu3l63a{font-weight:700}._1eu3l63b{border-radius:.375rem;background-color:#fafafa}._1eu3l63b:hover{background-color:#e4e4e7;color:#52525b}._1eu3l63b:active{background-color:#f4f4f5;color:#3f3f46}._1eu3l63c{width:1.5rem;height:1.5rem;padding:.25rem;color:#52525b}._1gfvr5d0{position:relative;z-index:1}._1gfvr5d3{position:absolute;z-index:-1;left:-.25rem;right:-.25rem;top:0;bottom:0;border-radius:.25rem;transition-property:opacity;transition-duration:.15s;transition-delay:0ms;transition-timing-function:cubic-bezier(.4,0,.2,1);background-color:var(--_1gfvr5d1, var(--_6zygq25));opacity:var(--_1gfvr5d2, 0)}._1gfvr5d4{display:flex;flex-wrap:wrap;align-items:flex-start;padding-left:2ch;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;color:#27272a;line-height:1.125rem}._1gfvr5d7{--_1gfvr5d2: 0;cursor:pointer}._1gfvr5d7[data-hovered=true]{--_1gfvr5d2: .3}._1gfvr5d8{border:var(--_6zygq26)}._1gfvr5d9{position:absolute;left:-.25rem;width:1.125rem;height:1.125rem;display:flex;align-items:center;justify-content:center}._1gfvr5da{opacity:var(--_1gfvr5d5);transition-property:opacity;transition-duration:.15s;transition-delay:0ms;transition-timing-function:cubic-bezier(.4,0,.2,1)}._1gfvr5db{display:flex;align-items:center;height:1.125rem}._1gfvr5dc{height:.75rem;width:.75rem;color:#52525b;margin-right:.25rem}._1gfvr5dd{height:1.125rem;min-width:5ch;margin-right:2ch;-webkit-user-select:none;-moz-user-select:none;user-select:none;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;color:#27272a}._1gfvr5dd:after{content:":";color:var(--_6zygq27)}._1gfvr5dd[data-signal=true]{color:#d97706}._1gfvr5de{display:inline-block}._1gfvr5df{font-weight:500;height:1.125rem;color:#27272a}._1gfvr5dg{color:var(--_6zygq27)}._1gfvr5dg:before{content:"{";font-weight:800;color:#27272a}._1gfvr5dg:after{content:"}";font-weight:800;color:#27272a}._1gfvr5dh{width:100%;display:flex;flex-direction:column;gap:.125rem}._1gfvr5di{min-height:1.125rem;height:-moz-fit-content;height:fit-content;max-width:-moz-fit-content;max-width:fit-content;color:#16a34a}._1gfvr5dj{min-height:1.125rem;color:#0891b2}._1gfvr5dk{pointer-events:none}._1gfvr5dl{font-style:italic}._1gfvr5dm{color:var(--_6zygq27)}._1gfvr5dn{position:relative;z-index:1}._1gfvr5dq{position:absolute;z-index:-1;left:-.25rem;right:-.25rem;top:0;bottom:0;border-radius:.25rem;transition-property:opacity;transition-duration:.15s;transition-delay:0ms;transition-timing-function:cubic-bezier(.4,0,.2,1);background-color:var(--_1gfvr5do, var(--_6zygq25));opacity:var(--_1gfvr5dp, 0)}._1gfvr5dr{--_1gfvr5dp: 0;color:#d97706;text-transform:lowercase}._1gfvr5dr:hover{--_1gfvr5dp: .6}._1gfvr5dr:before{content:"<";color:var(--_6zygq27)}._1gfvr5dr:after{content:"/>";color:var(--_6zygq27)}@media screen and (prefers-color-scheme: dark){._1gfvr5dc{color:#a1a1aa}._1gfvr5dd{color:#e4e4e7}._1gfvr5dd[data-signal=true]{color:#f59e0b}._1gfvr5df{color:#e4e4e7}._1gfvr5di,._1gfvr5dj{color:#16a34a}._1gfvr5dr{color:#f59e0b}}.ue1o9y0{height:100%;display:grid;grid-template-rows:2rem 1fr;grid-template-columns:100%}.ue1o9y1{padding:0 .5rem 0 1rem;display:flex;align-items:center;justify-content:space-between;border-bottom:var(--_6zygq21)}.ue1o9y4{display:flex;align-items:center;-moz-column-gap:.25rem;column-gap:.25rem}.ue1o9y5{--ue1o9y3: 0;--ue1o9y2: .85;width:1.5rem;height:1.5rem;border-radius:.25rem;display:flex;align-items:center;justify-content:center;color:rgb(var(--_6zygq28) / var(--ue1o9y2));background-color:rgb(var(--_6zygq28) / var(--ue1o9y3));transition-property:background-color color;transition-duration:.15s;transition-delay:0ms;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ue1o9y5:hover{--ue1o9y3: .15;--ue1o9y2: 1}.ue1o9y6{width:1rem;height:1rem}.ue1o9y7{width:100%;overflow:hidden}.ue1o9y8{min-width:100%;width:-moz-fit-content;width:fit-content;padding:1rem 1rem 4rem;display:flex;flex-direction:column;row-gap:1rem}.ue1o9y9{color:var(--_6zygq27);margin-bottom:.25rem;text-transform:capitalize}.ue1o9ya{margin-top:.25rem;margin-left:2ch;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}._1fpdl0t0{display:flex;align-items:center;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:.75rem}._1fpdl0t1{font-size:.875rem}._1fpdl0t2{color:var(--_6zygq29)}._1fpdl0t0[data-frozen=true] ._1fpdl0t2{color:var(--_6zygq27)}._1fpdl0t0[data-frozen=true] ._1fpdl0t2:after{content:"";position:absolute;z-index:-1;top:50%;left:0;right:0;height:1px;background-color:currentcolor}._1fpdl0t3{color:var(--_6zygq2a)}._1fpdl0t3:before{content:"<";color:var(--_6zygq27)}._1fpdl0t3:after{content:">";color:var(--_6zygq27)}._1fpdl0t4{font-size:.8em;-webkit-user-select:none;-moz-user-select:none;user-select:none;color:var(--_6zygq27)}._1fpdl0t0[data-frozen=true] ._1fpdl0t4:after{content:"";position:absolute;z-index:-1;top:50%;left:0;right:0;height:1px;background-color:currentcolor}._1fpdl0t5{width:.75rem;height:.75rem;margin-right:.25rem;margin-bottom:-1px;color:var(--_6zygq27)}._9kuowo0{height:100%;width:100%;overflow:hidden;display:flex;flex-direction:column}._9kuowo4{padding:1.125rem 0;height:calc(var(--_9kuowo1) * 1.125rem);box-sizing:content-box}._9kuowo5{transform:translateY(calc(var(--_9kuowo2) * 1.125rem))}._9kuowo6{margin-left:calc(var(--_9kuowo3) * -.875rem);transition-property:margin-left;transition-duration:.3s;transition-delay:0ms;transition-timing-function:cubic-bezier(.4,0,.2,1)}._1ha08ns1{height:1.125rem;position:relative;display:flex;align-items:center;padding-right:1rem;cursor:pointer}._1ha08ns2{position:absolute;z-index:-1;top:0;bottom:0;left:.25rem;right:.25rem;border-radius:.25rem;background-color:var(--_6zygq25);border:var(--_6zygq26);opacity:0;transition-property:opacity;transition-duration:.1s;transition-delay:0ms;transition-timing-function:cubic-bezier(.4,0,.2,1)}._1ha08ns1[data-hovered=true] ._1ha08ns2{opacity:.2}._1ha08ns1[data-selected=true] ._1ha08ns2{opacity:.45}._1ha08ns4{--_1ha08ns3: #e4e4e7;position:relative;z-index:-2;margin-left:.75rem;width:calc(var(--_1ha08ns0) * .875rem + .625rem);transition-property:width;transition-duration:.15s;transition-delay:0ms;transition-timing-function:cubic-bezier(.4,0,.2,1);height:calc(1.125rem + .95px);background:repeating-linear-gradient(to right,transparent,transparent calc(.875rem - .95px),var(--_1ha08ns3) calc(.875rem - .95px),var(--_1ha08ns3) .875rem);mask-image:linear-gradient(to right,rgba(0,0,0,.4),black 12rem);-webkit-mask-image:linear-gradient(to right,rgba(0,0,0,.4),black 12rem)}._1ha08ns5{position:relative;display:flex;align-items:center;-moz-column-gap:.5rem;column-gap:.5rem;min-width:9rem}._1ha08ns6{position:absolute;left:calc(-1.125rem - 2px);opacity:0;transition-property:background-color;transition-duration:.15s;transition-delay:0ms;transition-timing-function:cubic-bezier(.4,0,.2,1)}._1ha08ns6:before{content:"";position:absolute;z-index:-2;inset:.125rem;border-radius:9999px;background-color:#fff;transition-property:background-color;transition-duration:.15s;transition-delay:0ms;transition-timing-function:cubic-bezier(.4,0,.2,1)}._1ha08ns1:is([data-hovered="true"],[data-selected="true"]) ._1ha08ns6{opacity:1}._1ha08ns6:hover:before{background-color:#e4e4e7}._1ha08ns6[aria-selected=true]{opacity:1}@media screen and (prefers-color-scheme: dark){._1ha08ns4{--_1ha08ns3: #52525b}._1ha08ns6:before{background-color:#27272a}._1ha08ns6:hover:before{background-color:#3f3f46}}._133vkr70{flex-shrink:0;height:1.125rem;width:100%;position:relative;display:flex}._133vkr71{height:100%;background-color:#3f3f46}._133vkr72{position:absolute;z-index:1;bottom:0;left:0;right:0;min-height:1.125rem;height:1.125rem;overflow:hidden;width:100%;box-sizing:border-box;display:flex;align-items:flex-end;padding:.0625rem .5rem;border-top:var(--_6zygq21);background-color:var(--_6zygq20)}._133vkr72:hover{height:auto;padding-top:.125rem}._133vkr73{position:absolute;inset:0;pointer-events:none;z-index:2;background-image:linear-gradient(to right,var(--_6zygq20) 2rem,transparent 8rem);display:flex;align-items:center;padding-left:.75rem}._133vkr72:hover ._133vkr73{opacity:0}._133vkr74{width:.75rem;height:.75rem;color:var(--_6zygq27)}._133vkr75{display:flex;flex-wrap:wrap;font-size:.625rem;line-height:.75rem;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}._133vkr76{width:.75rem;height:1rem;margin-right:.25rem;display:flex;align-items:center;justify-content:center}._133vkr75 ._133vkr76:first-child{display:none}._133vkr77{width:.5rem;height:.5rem;color:var(--_6zygq27)}._133vkr78{position:relative;z-index:1}._133vkr7b{position:absolute;z-index:-1;left:-.25rem;right:-.25rem;top:0;bottom:0;border-radius:.25rem;transition-property:opacity;transition-duration:.15s;transition-delay:0ms;transition-timing-function:cubic-bezier(.4,0,.2,1);background-color:var(--_133vkr79, var(--_6zygq25));opacity:var(--_133vkr7a, 0)}._133vkr7c{--_133vkr7a: 0;height:.75rem;padding:.0625rem 0;margin:.0625rem .25rem .0625rem 0;display:flex;align-items:center;-moz-column-gap:.25rem;column-gap:.25rem;cursor:pointer}._133vkr7c:last-child{margin-right:0}._133vkr7c[data-hovered=true]{--_133vkr7a: .3}._133vkr7d{border:1px solid #a1a1aa;border-radius:.125rem}._133vkr7e{width:.625rem;height:.625rem;color:var(--_6zygq27)}._133vkr7f{transform:translateY(.2px);color:#52525b}@media screen and (prefers-color-scheme: dark){._133vkr7f{color:#e4e4e7}}._2sb15m0{height:100%;width:100%;overflow:hidden;display:grid;grid-template-rows:3rem 1fr;background-color:var(--_6zygq20);color:var(--_6zygq29);font-size:.75rem;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}._2sb15m1{padding:.5rem;display:flex;align-items:center;-moz-column-gap:.5rem;column-gap:.5rem;background-color:var(--_6zygq20);border-bottom:var(--_6zygq21);color:var(--_6zygq29)}._2sb15m2{color:var(--_6zygq27);font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:.625rem;margin-top:.25rem}._2sb15m3{width:1.75rem;height:1.75rem}._2sb15m4{width:1.125rem;height:1.125rem}._2sb15m5{position:relative;height:1.75rem;overflow:hidden}._2sb15m6{height:1.75rem;box-sizing:border-box;width:12rem;outline:unset;background:unset;color:inherit;font-family:inherit;border:var(--_6zygq21);border-radius:.25rem;padding:0 1.5rem;transition-property:padding;transition-duration:.15s;transition-delay:0ms;transition-timing-function:cubic-bezier(.4,0,.2,1);line-height:2rem}._2sb15m6::-moz-placeholder{color:var(--_6zygq27)}._2sb15m6::placeholder{color:var(--_6zygq27)}._2sb15m6:focus{border-color:var(--_6zygq24)}._2sb15m5:focus-within ._2sb15m6{padding-left:.5rem}._2sb15m7{position:absolute;height:calc(100% - .5rem);top:.25rem;bottom:.25rem;display:flex;align-items:center;justify-content:center}._2sb15m8{width:1rem;height:1rem;color:var(--_6zygq27)}._2sb15m9{left:0;padding-left:.375rem;transition-property:transform;transition-duration:.15s;transition-delay:0ms;transition-timing-function:cubic-bezier(.4,0,.2,1)}._2sb15m5:focus-within ._2sb15m9{transform:translate(-100%)}._2sb15ma{right:.25rem;padding:0 .125rem;border-radius:.25rem}._2sb15ma:hover{background-color:#3f3f46}._2sb15mb{position:relative;margin-left:auto}._2sb15mc{margin-left:auto;width:1.75rem;height:1.75rem}._2sb15md{width:1.125rem;height:1.125rem}._2sb15me{position:absolute;z-index:9999;width:-moz-max-content;width:max-content;top:0;right:100%;margin-right:.5rem;padding:.5rem;border-radius:.375rem;background-color:#f4f4f5;border:1px solid #e4e4e7}._2sb15mf{display:flex;flex-direction:column;align-items:stretch;gap:.5rem}._2sb15mg{overflow:hidden}\n';

// src/styles.css
var styles_default = ".overlay__container {\n  --height: calc(var(--progress) * 100vh);\n}\n\n.overlay__container[data-open='true'] {\n  height: var(--height);\n}\n\n.overlay__container__fixed {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: var(--height);\n  transform: translateY(100%);\n  z-index: 999999;\n}\n.overlay__container:not(.no-padding) .overlay__container__fixed {\n  padding: 0 0.5rem 0.5rem 0.5rem;\n}\n.overlay__container[data-open='true'] .overlay__container__fixed {\n  transition: transform 200ms;\n  transform: translateY(0);\n}\n\n.overlay__container:not(.no-padding) .overlay__container__inner {\n  border-radius: 0.5rem;\n}\n.overlay__container__inner {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  /* border: 1px solid #89b6ff; */\n}\n\n.overlay__container__resizer {\n  position: absolute;\n  right: 30%;\n  left: 30%;\n  bottom: 100%;\n  margin: 0.2rem;\n  height: 0.3rem;\n  border-radius: 0.5rem;\n  background-color: #fafafa;\n  opacity: 0.2;\n  cursor: row-resize;\n  display: none;\n  user-select: none;\n}\n.overlay__container[data-open='true'] .overlay__container__resizer {\n  display: block;\n}\n.overlay__container__resizer:hover {\n  opacity: 0.3;\n}\n\n.overlay__toggle-button {\n  position: absolute;\n  bottom: 100%;\n  right: 0;\n  margin: 0.5rem;\n  height: 1.2rem;\n  padding: 0 0.3rem;\n  font-size: 0.7rem;\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',\n    'Courier New', monospace;\n  background: rgb(6 33 68 / 0.9);\n  border: 1px solid #89b6ff;\n  color: #89b6ff;\n  border-radius: 0.4rem;\n  cursor: pointer;\n  user-select: none;\n  display: flex;\n  align-items: center;\n  column-gap: 0.2rem;\n  padding-bottom: 1px;\n}\n.overlay__toggle-button:hover {\n  background: rgb(12 55 113 / 0.9);\n}\n.overlay__toggle-button:active {\n  background: rgb(10 47 96 / 0.9);\n}\n\n.overlay__toggle-button__icon {\n  width: 0.9rem;\n  height: 0.9rem;\n}\n\n@media (prefers-color-scheme: dark) {\n  .overlay__container__resizer {\n    background-color: #2a2a2a;\n  }\n}\n";

// src/index.tsx
var _tmpl$ = /* @__PURE__ */ _$template(`<div class="overlay__container__resizer"></div>`, 2);
var _tmpl$2 = /* @__PURE__ */ _$template(`<div class="overlay__container"><div class="overlay__container__fixed"><div class="overlay__container__inner"></div></div></div>`, 6);
var _tmpl$3 = /* @__PURE__ */ _$template(`<style></style>`, 2);
var _tmpl$4 = /* @__PURE__ */ _$template(`<button class="overlay__toggle-button">Devtools</button>`, 2);
var isAlreadyMounted = false;
function attachDevtoolsOverlay(props) {
  if (isAlreadyMounted) {
    warn2("Devtools overlay is already mounted");
    return () => {
    };
  }
  isAlreadyMounted = true;
  let dispose;
  setTimeout(() => {
    createInternalRoot((_dispose) => {
      dispose = _dispose;
      return _$createComponent(Overlay, props);
    });
  });
  return onRootCleanup2(() => {
    isAlreadyMounted = false;
    dispose && dispose();
  });
}
var Overlay = ({
  defaultOpen,
  alwaysOpen,
  noPadding
}) => {
  const [isOpen, setOpen] = (() => {
    if (alwaysOpen)
      return [() => true, () => {
      }];
    const [isOpen2, setOpen2] = createSignal3(defaultOpen ?? false);
    onCleanup4(() => setOpen2(false));
    return [isOpen2, setOpen2];
  })();
  useDebugger2().setUserEnabledSignal(isOpen);
  const isMobile = useIsMobile();
  const isTouch = useIsTouch();
  const [progress, setProgress] = createSignal3(0.5);
  const [dragging, setDragging] = createSignal3(false);
  createComputed2(() => setProgress(isMobile() ? 0.8 : 0.5));
  makeEventListener2(window, "pointermove", (e) => {
    if (!dragging())
      return;
    const vh = window.innerHeight;
    setProgress(1 - clamp2(e.y, 0, vh - 300) / vh);
  });
  makeEventListener2(window, "pointerup", setDragging.bind(void 0, false));
  createBodyCursor2(() => dragging() && "row-resize");
  return _$createComponent(Portal, {
    useShadow: true,
    get mount() {
      return document.documentElement;
    },
    get children() {
      return [(() => {
        const _el$ = _tmpl$2.cloneNode(true), _el$2 = _el$.firstChild, _el$4 = _el$2.firstChild;
        _el$.classList.toggle("no-padding", noPadding);
        _$insert(_el$2, !alwaysOpen && (() => {
          const _el$7 = _tmpl$4.cloneNode(true), _el$8 = _el$7.firstChild;
          _el$7.$$click = () => setOpen((p3) => !p3);
          _$insert(_el$7, _$createComponent(Dynamic, {
            get component() {
              return isOpen() ? S2.EyeSlash : S2.Eye;
            },
            "class": "overlay__toggle-button__icon"
          }), null);
          return _el$7;
        })(), _el$4);
        _$insert(_el$2, _$createComponent(Show2, {
          get when() {
            return !isTouch();
          },
          get children() {
            const _el$3 = _tmpl$.cloneNode(true);
            _el$3.$$pointerdown = (e) => {
              e.preventDefault();
              setDragging(true);
            };
            return _el$3;
          }
        }), _el$4);
        _$insert(_el$4, _$createComponent(Show2, {
          get when() {
            return isOpen();
          },
          children: () => {
            const controller = createController();
            return _$createComponent(lm2, {
              controller
            });
          }
        }));
        _$effect((_p$) => {
          const _v$ = isOpen(), _v$2 = progress();
          _v$ !== _p$._v$ && _$setAttribute(_el$, "data-open", _p$._v$ = _v$);
          _v$2 !== _p$._v$2 && _el$.style.setProperty("--progress", _p$._v$2 = _v$2);
          return _p$;
        }, {
          _v$: void 0,
          _v$2: void 0
        });
        return _el$;
      })(), _$createComponent(ar, {}), (() => {
        const _el$5 = _tmpl$3.cloneNode(true);
        _$insert(_el$5, dist_default);
        return _el$5;
      })(), (() => {
        const _el$6 = _tmpl$3.cloneNode(true);
        _$insert(_el$6, styles_default);
        return _el$6;
      })()];
    }
  });
};
_$delegateEvents(["pointerdown", "click"]);
export {
  attachDevtoolsOverlay
};
