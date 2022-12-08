import {
  INFINITY,
  NAN,
  NEGATIVE_INFINITY
} from "./chunk-VY6BZOAC.js";

// src/main/roots.ts
import { createEffect as createEffect3, onCleanup as onCleanup4, untrack as untrack4 } from "solid-js";
import { throttle as throttle4 } from "@solid-primitives/scheduled";
import { untrackedCallback } from "@solid-devtools/shared/primitives";
import { warn as warn3 } from "@solid-devtools/shared/utils";

// src/main/utils.ts
import {
  createComputed,
  createRoot,
  onCleanup,
  runWithOwner,
  getOwner as _getOwner
} from "solid-js";
import { throttle } from "@solid-primitives/scheduled";
import { trimString } from "@solid-devtools/shared/utils";
import { DEV as _STORE_DEV } from "solid-js/store";
var STORE_DEV = _STORE_DEV;
var getOwner = _getOwner;
var isSolidComputation = (o) => "fn" in o;
var isSolidMemo = (o) => "sdtType" in o ? o.sdtType === 4 /* Memo */ : isSolidComputation(o) && _isMemo(o);
var isSolidOwner = (o) => "owned" in o;
var isSolidRoot = (o) => o.sdtType === 0 /* Root */ || !isSolidComputation(o);
var isSolidComponent = (o) => "props" in o;
var isStoreNode = (o) => STORE_DEV.$NAME in o;
var isSolidStore = (o) => {
  return !("observers" in o) && STORE_DEV.$NAME in o.value;
};
var _isMemo = (o) => "value" in o && "comparator" in o && o.pure === true;
function getOwnerName(owner) {
  const { name, componentName: component } = owner;
  if (component && typeof component === "string")
    return component.startsWith("_Hot$$") ? component.slice(6) : component;
  return name || "(unnamed)";
}
function getSignalName(signal) {
  return signal.name || "(unnamed)";
}
var getStoreNodeName = (node) => node[STORE_DEV.$NAME] || "(unnamed)";
function getNodeName(o) {
  const name = isSolidOwner(o) ? getOwnerName(o) : isSolidStore(o) ? getStoreNodeName(o) : getSignalName(o);
  return getDisplayName(name);
}
function getDisplayName(name) {
  return trimString(name, 16);
}
function getNodeType(o) {
  if (isSolidOwner(o))
    return getOwnerType(o);
  return isSolidStore(o) ? 9 /* Store */ : 8 /* Signal */;
}
var getOwnerType = (o) => {
  if (typeof o.sdtType !== "undefined")
    return o.sdtType;
  if (!isSolidComputation(o))
    return 0 /* Root */;
  if (isSolidComponent(o))
    return 1 /* Component */;
  if (_isMemo(o)) {
    let parent, parentName;
    if ((parent = o.owner) && isSolidComponent(parent) && (parentName = parent.componentName) && parentName.startsWith("_Hot$$"))
      return 6 /* Refresh */;
    return 4 /* Memo */;
  }
  if (o.pure === false) {
    if (o.user === true)
      return 2 /* Effect */;
    if (o.context !== null)
      return 7 /* Context */;
    return 3 /* Render */;
  }
  return 5 /* Computation */;
};
var LAST_ID = 0;
var getNewSdtId = () => (LAST_ID++).toString(36);
function markOwnerName(o) {
  if (o.sdtName !== void 0)
    return o.sdtName;
  return o.sdtName = getNodeName(o);
}
function markOwnerType(o, type) {
  if (o.sdtType !== void 0)
    return o.sdtType;
  return o.sdtType = type ?? getOwnerType(o);
}
function markNodeID(o) {
  if (o.sdtId !== void 0)
    return o.sdtId;
  return o.sdtId = getNewSdtId();
}
function getComponentRefreshNode(owner) {
  const { owned } = owner;
  let refresh;
  if (owned && owned.length === 1 && markOwnerType(refresh = owned[0]) === 6 /* Refresh */) {
    return refresh;
  }
  return null;
}
function resolveElements(value) {
  let resolved = getResolvedElements(value);
  if (Array.isArray(resolved) && !resolved.length)
    resolved = null;
  return resolved;
}
function getResolvedElements(value) {
  if (typeof value === "function" && !value.length && value.name === "bound readSignal")
    return getResolvedElements(value());
  if (Array.isArray(value)) {
    const results = [];
    for (const item of value) {
      const result = getResolvedElements(item);
      if (result)
        Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
    }
    return results;
  }
  return value instanceof HTMLElement ? value : null;
}
function lookupOwner(owner, predicate) {
  do {
    if (predicate(owner))
      return owner;
    owner = owner.owner;
  } while (owner.owner);
  return null;
}
function setDebuggerContext(owner, ctx) {
  owner.sdtContext = ctx;
}
function getDebuggerContext(owner) {
  while (!owner.sdtContext && owner.owner)
    owner = owner.owner;
  return owner.sdtContext;
}
function removeDebuggerContext(owner) {
  delete owner.sdtContext;
}
var tryOnCleanup = (fn) => getOwner() ? onCleanup(fn) : fn;
function onOwnerCleanup(owner, fn, prepend = false) {
  if (owner.cleanups === null)
    owner.cleanups = [fn];
  else if (prepend)
    owner.cleanups.splice(0, 0, fn);
  else
    owner.cleanups.push(fn);
  return () => owner.cleanups?.splice(owner.cleanups.indexOf(fn), 1);
}
function onParentCleanup(owner, fn, prepend = false) {
  if (owner.owner)
    return onOwnerCleanup(owner.owner, fn, prepend);
  return () => {
  };
}
var DISPOSE_ID = Symbol("Dispose ID");
function createUnownedRoot(fn) {
  return runWithOwner(null, () => createRoot(fn));
}
function getFunctionSources(fn) {
  let nodes;
  let init = true;
  runWithOwner(
    null,
    () => createRoot(
      (dispose) => createComputed(() => {
        if (!init)
          return;
        init = false;
        fn();
        const sources = getOwner().sources;
        if (sources)
          nodes = [...sources];
        dispose();
      })
    )
  );
  return nodes ?? [];
}
var SkipInternalRoot = null;
var INTERNAL = Symbol("internal");
var createInternalRoot = (fn, detachedOwner) => {
  SkipInternalRoot = fn;
  const v = createRoot((dispose) => {
    const owner = getOwner();
    setDebuggerContext(owner, INTERNAL);
    return fn(dispose);
  }, detachedOwner);
  if (SkipInternalRoot === fn)
    SkipInternalRoot = null;
  return v;
};
var skipInternalRoot = () => {
  const skip = !!SkipInternalRoot;
  if (skip)
    SkipInternalRoot = null;
  return skip;
};
function dedupeArrayById(input) {
  const ids = /* @__PURE__ */ new Set();
  const deduped = [];
  for (let i = input.length - 1; i >= 0; i--) {
    const update = input[i];
    if (ids.has(update.id))
      continue;
    ids.add(update.id);
    deduped.push(update);
  }
  return deduped;
}
function createBatchedUpdateEmitter(emit) {
  const updates = [];
  const triggerUpdateEmit = throttle(() => {
    const deduped = dedupeArrayById(updates);
    updates.length = 0;
    emit(deduped);
  });
  return (update) => {
    updates.push(update);
    triggerUpdateEmit();
  };
}

// src/main/update.ts
import { untrack } from "solid-js";
var GraphUpdateListeners = /* @__PURE__ */ new Set();
{
  const runListeners = () => GraphUpdateListeners.forEach((f) => f());
  if (typeof window._$afterUpdate === "function") {
    GraphUpdateListeners.add(window._$afterUpdate);
  }
  window._$afterUpdate = runListeners;
}
function makeSolidUpdateListener(onUpdate) {
  GraphUpdateListeners.add(onUpdate);
  return tryOnCleanup(() => {
    GraphUpdateListeners.delete(onUpdate);
  });
}
var CreateRootListeners = /* @__PURE__ */ new Set();
{
  const runListeners = (root) => {
    if (skipInternalRoot())
      return;
    CreateRootListeners.forEach((f) => f(root));
  };
  if (typeof window._$afterCreateRoot === "function") {
    CreateRootListeners.add(window._$afterCreateRoot);
  }
  window._$afterCreateRoot = runListeners;
}
function makeCreateRootListener(onUpdate) {
  CreateRootListeners.add(onUpdate);
  return tryOnCleanup(() => CreateRootListeners.delete(onUpdate));
}
function observeComputationUpdate(owner, onRun) {
  if (owner.onComputationUpdate)
    return void (owner.onComputationUpdate = onRun);
  owner.onComputationUpdate = onRun;
  interceptComputationRerun(owner, (fn) => {
    untrack(owner.onComputationUpdate);
    fn();
  });
}
function interceptComputationRerun(owner, onRun) {
  const _fn = owner.fn;
  let v;
  let prev;
  const fn = () => v = _fn(prev);
  owner.fn = !!owner.fn.length ? (p) => {
    onRun(fn, prev = p);
    return v;
  } : () => {
    onRun(fn, void 0);
    return v;
  };
}
function observeValueUpdate(node, onUpdate, symbol) {
  if (node.onValueUpdate) {
    node.onValueUpdate[symbol] = onUpdate;
    return;
  }
  const map = node.onValueUpdate = { [symbol]: onUpdate };
  let value = node.value;
  Object.defineProperty(node, "value", {
    get: () => value,
    set: (newValue) => {
      for (let sym of Object.getOwnPropertySymbols(map))
        map[sym](newValue, value);
      value = newValue;
    }
  });
}
function removeValueUpdateObserver(node, symbol) {
  if (node.onValueUpdate)
    delete node.onValueUpdate[symbol];
}
function makeValueUpdateListener(node, onUpdate, symbol) {
  observeValueUpdate(node, onUpdate, symbol);
  tryOnCleanup(() => removeValueUpdateObserver(node, symbol));
}

// src/main/walker.ts
var $inspectedId;
var $rootId;
var $onComputationUpdate;
var $components = [];
var $inspectedOwner;
function mapChildren(owner, mapped) {
  const { owned } = owner;
  if (!owned || !owned.length)
    return mapped;
  const children = Array(owned.length);
  for (let i = 0; i < children.length; i++)
    children[i] = mapOwner(owned[i]);
  mapped.children = children;
  return mapped;
}
function mapComputation(owner, idToUpdate, mapped) {
  observeComputationUpdate(
    owner,
    $onComputationUpdate.bind(void 0, $rootId, idToUpdate)
  );
  if (!owner.sources || owner.sources.length === 0)
    mapped.frozen = true;
}
function mapOwner(owner) {
  const type = markOwnerType(owner);
  const id = markNodeID(owner);
  const name = type === 1 /* Component */ || type === 4 /* Memo */ || type === 2 /* Effect */ || type === 5 /* Computation */ ? markOwnerName(owner) : void 0;
  const mapped = { id, type };
  if (name)
    mapped.name = name;
  if (id === $inspectedId)
    $inspectedOwner = owner;
  if (type === 1 /* Component */) {
    let contextNode;
    if (name === "provider" && owner.owned && owner.owned.length === 1 && markOwnerType(contextNode = owner.owned[0]) === 7 /* Context */) {
      const id2 = markNodeID(contextNode);
      if (id2 === $inspectedId)
        $inspectedOwner = contextNode;
      return mapChildren(contextNode.owned[0], { id: id2, type: 7 /* Context */ });
    }
    const element = resolveElements(owner.value);
    if (element)
      $components.push({ id, name, element });
    let showMemoCondition;
    let showMemoNode;
    if (name === "Show" && owner.owned?.length === 2 && isSolidMemo(showMemoCondition = owner.owned[0]) && isSolidMemo(showMemoNode = owner.owned[1])) {
      showMemoCondition.name = "condition";
      showMemoNode.name = "value";
    }
    let forMemo;
    if (name === "For" && owner.owned?.length === 1 && isSolidMemo(forMemo = owner.owned[0])) {
      forMemo.name = "value";
    }
    let hmr = false;
    let refresh = getComponentRefreshNode(owner);
    if (refresh) {
      hmr = true;
      owner = refresh;
    }
    mapped.hmr = hmr;
  } else if (type !== 7 /* Context */)
    mapComputation(owner, id, mapped);
  return mapChildren(owner, mapped);
}
function mapRoot(root, id, attached) {
  if (id === $inspectedId)
    $inspectedOwner = root;
  const mapped = { id, type: 0 /* Root */ };
  mapChildren(root, mapped);
  if (attached)
    mapped.attached = markNodeID(attached);
  return mapped;
}
function walkSolidTree(owner, config) {
  $inspectedId = config.inspectedId;
  $rootId = config.rootId;
  $onComputationUpdate = config.onComputationUpdate;
  $inspectedOwner = null;
  $components = [];
  const root = mapRoot(owner, $rootId, owner.sdtAttached);
  return { root, inspectedOwner: $inspectedOwner, components: $components };
}

// src/main/plugin.ts
import { batch, createComputed as createComputed2, createMemo as createMemo3, createSignal } from "solid-js";
import {
  createEventHub,
  createSimpleEmitter as createSimpleEmitter2
} from "@solid-primitives/event-bus";
import { throttle as throttle3 } from "@solid-primitives/scheduled";
import { atom as atom2, defer as defer2 } from "@solid-devtools/shared/primitives";

// src/locator/index.ts
import { createEffect, createMemo as createMemo2, onCleanup as onCleanup2, getOwner as getOwner2, runWithOwner as runWithOwner2 } from "solid-js";
import { makeEventListener } from "@solid-primitives/event-listener";
import { createKeyHold } from "@solid-primitives/keyboard";
import { asArray, onRootCleanup } from "@solid-primitives/utils";
import { createSimpleEmitter } from "@solid-primitives/event-bus";
import { atom, defer, makeHoverElementListener } from "@solid-devtools/shared/primitives";
import { warn } from "@solid-devtools/shared/utils";

// src/locator/findComponent.ts
import {
  LOCATION_ATTRIBUTE_NAME,
  WINDOW_PROJECTPATH_PROPERTY
} from "@solid-devtools/transform/types";
import { isWindows } from "@solid-primitives/platform";
var LOC_ATTR_REGEX_WIN = /^((?:\\?[^\s][^/\\:\"\?\*<>\|]+)+):([0-9]+):([0-9]+)$/;
var LOC_ATTR_REGEX_UNIX = /^((?:(?:\.\/|\.\.\/|\/)?(?:\.?\w+\/)*)(?:\.?\w+\.?\w+)):([0-9]+):([0-9]+)$/;
var LOC_ATTR_REGEX = isWindows ? LOC_ATTR_REGEX_WIN : LOC_ATTR_REGEX_UNIX;
function getLocationAttr(element) {
  const attr = element.getAttribute(LOCATION_ATTRIBUTE_NAME);
  if (!attr || !LOC_ATTR_REGEX.test(attr))
    return;
  return attr;
}
var targetIDEMap = {
  vscode: ({ projectPath, filePath, line, column }) => `vscode://file/${projectPath}/${filePath}:${line}:${column}`,
  "vscode-insiders": ({ projectPath, filePath, line, column }) => `vscode-insiders://file/${projectPath}/${filePath}:${line}:${column}`,
  atom: ({ projectPath, filePath, line, column }) => `atom://core/open/file?filename=${projectPath}/${filePath}&line=${line}&column=${column}`,
  webstorm: ({ projectPath, filePath, line, column }) => `webstorm://open?file=${projectPath}/${filePath}&line=${line}&column=${column}`
};
function getTargetURL(target, data) {
  if (typeof target === "function")
    return target(data);
  return targetIDEMap[target](data);
}
function getSourceCodeData(location, element) {
  const projectPath = window[WINDOW_PROJECTPATH_PROPERTY];
  if (!projectPath)
    return;
  const match = location.match(LOC_ATTR_REGEX);
  if (!match)
    return;
  const [, filePath, line, column] = match;
  return { filePath, line: +line, column: +column, projectPath, element };
}
function openSourceCode(target, data) {
  const url = getTargetURL(target, data);
  if (typeof url === "string")
    window.open(url, "_blank");
}
var findComponentCache = /* @__PURE__ */ new Map();
var prevCompMap = {};
function findLocatorComponent(compMap, target) {
  if (prevCompMap !== compMap) {
    findComponentCache.clear();
    prevCompMap = compMap;
  }
  const checked = [];
  const toCheck = [target];
  let location;
  let element;
  for (const el of toCheck) {
    if (!location) {
      const loc = getLocationAttr(el);
      if (loc) {
        location = loc;
        element = el;
      }
    }
    const cached = findComponentCache.get(el);
    if (cached !== void 0) {
      checked.forEach((cel) => findComponentCache.set(cel, cached));
      return cached ? { ...cached, location: location ?? cached.location, element: element ?? cached.element } : null;
    }
    checked.push(el);
    for (const [rootId, comps] of Object.entries(compMap)) {
      for (let i = comps.length - 1; i >= 0; i--) {
        const comp = comps[i];
        const { element: resolved } = comp;
        if (Array.isArray(resolved) && resolved.some((e) => e === el) || el === resolved) {
          const obj = { ...comp, element: element ?? el, location, rootId };
          checked.forEach((cel) => findComponentCache.set(cel, obj));
          return obj;
        }
      }
    }
    el.parentElement && toCheck.push(el.parentElement);
  }
  return null;
}

// src/locator/ElementOverlay.tsx
import { template as _$template } from "solid-js/web";
import { className as _$className } from "solid-js/web";
import { effect as _$effect } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { createComponent as _$createComponent } from "solid-js/web";
import { createMemo, Show, Index } from "solid-js";
import { Portal } from "solid-js/web";
import { createElementCursor } from "@solid-primitives/cursor";
import { createElementBounds } from "@solid-primitives/bounds";
var _tmpl$ = /* @__PURE__ */ _$template(`<style>
.element-overlay {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  pointer-events: none;
  transition-duration: 100ms;
  transition-property: transform, width, height;
  --color: 14 116 144;
}
.border {
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border: 2px solid rgb(var(--color) / 0.8);
  background-color: rgb(var(--color) / 0.3);
  border-radius: 0.25rem;
}
.name-container {
  position: absolute;
  z-index: 10000;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  color: white;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1rem;
}
.name-container.bottom {
  top: 100%;
}
.name-container.top {
  bottom: 100%;
}
.name-animated-container {
  position: relative;
  margin: 0.5rem auto;
  padding: 0.25rem 0.5rem;
}
.name-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(var(--color) / 0.8);
  border-radius: 0.25rem;
}
.name-text {
  position: absolute;
}
.name-text span {
  color: #a5f3fc;
}
.name-invisible {
  visibility: hidden;
}
</style>`, 2);
var _tmpl$2 = /* @__PURE__ */ _$template(`<div><div class="name-animated-container"><div class="name-background"></div><div class="name-text">: <span></span></div><div class="name-invisible">: </div></div></div>`, 12);
var _tmpl$3 = /* @__PURE__ */ _$template(`<div class="element-overlay"><div class="border"></div></div>`, 4);
function attachElementOverlay(selected) {
  return _$createComponent(Portal, {
    useShadow: true,
    get children() {
      return _$createComponent(Index, {
        get each() {
          return selected();
        },
        children: (component) => {
          createElementCursor(() => component().element, "pointer");
          const bounds = createElementBounds(() => component().element);
          return _$createComponent(ElementOverlay, _$mergeProps(bounds, {
            get tag() {
              return component().element.tagName.toLocaleLowerCase();
            },
            get name() {
              return component().name;
            }
          }));
        }
      });
    }
  });
}
var ElementOverlay = (props) => {
  const left = createMemo((prev) => props.left === null ? prev : props.left, 0);
  const top = createMemo((prev) => props.top === null ? prev : props.top, 0);
  const width = createMemo((prev) => props.width === null ? prev : props.width, 0);
  const height = createMemo((prev) => props.height === null ? prev : props.height, 0);
  const transform = createMemo(() => `translate(${Math.round(left())}px, ${Math.round(top())}px)`);
  const placeOnTop = createMemo(() => top() > window.innerHeight / 2);
  return [_tmpl$.cloneNode(true), (() => {
    const _el$2 = _tmpl$3.cloneNode(true), _el$3 = _el$2.firstChild;
    _$insert(_el$2, _$createComponent(Show, {
      get when() {
        return !!props.name;
      },
      get children() {
        const _el$4 = _tmpl$2.cloneNode(true), _el$5 = _el$4.firstChild, _el$6 = _el$5.firstChild, _el$7 = _el$6.nextSibling, _el$8 = _el$7.firstChild, _el$9 = _el$8.nextSibling, _el$10 = _el$7.nextSibling, _el$11 = _el$10.firstChild;
        _$insert(_el$7, () => props.name, _el$8);
        _$insert(_el$9, () => props.tag);
        _$insert(_el$10, () => props.name, _el$11);
        _$insert(_el$10, () => props.tag, null);
        _$effect(() => _$className(_el$4, `name-container ${placeOnTop() ? "top" : "bottom"}`));
        return _el$4;
      }
    }), null);
    _$effect((_p$) => {
      const _v$ = transform(), _v$2 = width() + "px", _v$3 = height() + "px";
      _v$ !== _p$._v$ && _el$2.style.setProperty("transform", _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && _el$2.style.setProperty("width", _p$._v$2 = _v$2);
      _v$3 !== _p$._v$3 && _el$2.style.setProperty("height", _p$._v$3 = _v$3);
      return _p$;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0
    });
    return _el$2;
  })()];
};

// src/locator/markComponent.ts
import { MARK_COMPONENT_FN_NAME } from "@solid-devtools/transform/types";
function markComponentLoc(location) {
  let owner = getOwner();
  if (!owner)
    return;
  const type = getOwnerType(owner);
  if (type === 1 /* Component */)
    owner.location = location;
  else if (type === 6 /* Refresh */)
    owner.owner.location = location;
}
globalThis[MARK_COMPONENT_FN_NAME] = markComponentLoc;

// src/locator/index.ts
function createLocator({
  components,
  debuggerEnabled,
  findComponent,
  getElementById,
  setLocatorEnabledSignal
}) {
  const enabledByPlugin = atom(false);
  const enabledByPressingSignal = atom();
  const enabledByPressing = createMemo2(() => !!enabledByPressingSignal()?.());
  setLocatorEnabledSignal(enabledByPressing);
  const locatorEnabled = createMemo2(
    () => debuggerEnabled() && (enabledByPressing() || enabledByPlugin())
  );
  function togglePluginLocatorMode(state) {
    enabledByPlugin((p) => state ?? !p);
  }
  const hoverTarget = atom(null);
  const pluginTarget = atom(
    null
  );
  const highlightedComponents = createMemo2(
    defer(
      [components, () => hoverTarget() ?? pluginTarget()],
      ([components2, target]) => {
        if (!target)
          return [];
        if (target instanceof HTMLElement) {
          const comp = findLocatorComponent(components2, target);
          return comp ? [comp] : [];
        }
        return asArray(target.element).map((element) => ({
          location: getLocationAttr(element),
          element,
          id: target.id,
          rootId: target.rootId,
          name: target.name
        }));
      },
      []
    )
  );
  setTimeout(() => {
    createInternalRoot(() => attachElementOverlay(highlightedComponents));
  }, 1e3);
  const [onDebuggerHoveredComponentChange, emitDebuggerHoveredComponentChange] = createSimpleEmitter();
  createEffect((prev) => {
    const target = hoverTarget();
    if (!target)
      return;
    const comp = findLocatorComponent(components(), target);
    if (prev)
      emitDebuggerHoveredComponentChange({ nodeId: prev, state: false });
    if (comp)
      emitDebuggerHoveredComponentChange({ nodeId: comp.id, state: true });
    return comp?.id;
  });
  function setPluginHighlightTarget(data) {
    if (!data)
      return pluginTarget(null);
    if ("nodeId" in data) {
      const { rootId, nodeId } = data;
      const component = findComponent(rootId, nodeId);
      component && pluginTarget({ ...component, rootId });
    } else {
      const element = getElementById(data.elementId);
      if (!element)
        return warn("No element found", data);
      pluginTarget(element);
    }
  }
  const clickInterceptors = /* @__PURE__ */ new Set();
  function runClickInterceptors(...[e, c, l]) {
    for (const interceptor of clickInterceptors) {
      interceptor(e, c, l);
      if (e.defaultPrevented)
        return true;
    }
  }
  function addClickInterceptor(interceptor) {
    clickInterceptors.add(interceptor);
    onRootCleanup(() => clickInterceptors.delete(interceptor));
  }
  let targetIDE;
  createEffect(() => {
    if (!locatorEnabled())
      return;
    makeHoverElementListener((el) => hoverTarget(el));
    onCleanup2(() => hoverTarget(null));
    makeEventListener(
      window,
      "click",
      (e) => {
        const { target } = e;
        if (!(target instanceof HTMLElement))
          return;
        const highlighted = highlightedComponents();
        const comp = highlighted.find(({ element }) => target.contains(element)) ?? highlighted[0];
        if (!comp)
          return;
        const sourceCodeData = comp.location && getSourceCodeData(comp.location, comp.element);
        if (!runClickInterceptors(e, comp, sourceCodeData) && targetIDE && sourceCodeData) {
          e.preventDefault();
          e.stopPropagation();
          openSourceCode(targetIDE, sourceCodeData);
        }
      },
      true
    );
  });
  let locatorUsed = false;
  const owner = getOwner2();
  function useLocator2(options) {
    runWithOwner2(owner, () => {
      enableRootsAutoattach();
      if (locatorUsed)
        return warn("useLocator can be called only once.");
      locatorUsed = true;
      if (options.targetIDE)
        targetIDE = options.targetIDE;
      const isHoldingKey = createKeyHold(options.key ?? "Alt", { preventDefault: true });
      enabledByPressingSignal(() => isHoldingKey);
    });
  }
  function openElementSourceCode(location, element) {
    if (!targetIDE)
      return warn("Please set `targetIDE` it in useLocator options.");
    const sourceCodeData = getSourceCodeData(location, element);
    sourceCodeData && openSourceCode(targetIDE, sourceCodeData);
  }
  return {
    useLocator: useLocator2,
    togglePluginLocatorMode,
    enabledByDebugger: enabledByPressing,
    addClickInterceptor,
    setPluginHighlightTarget,
    onDebuggerHoveredComponentChange,
    openElementSourceCode
  };
}

// src/inspector/index.ts
import { createEffect as createEffect2, onCleanup as onCleanup3, untrack as untrack3 } from "solid-js";
import { throttle as throttle2, scheduleIdle } from "@solid-primitives/scheduled";
import { warn as warn2 } from "@solid-devtools/shared/utils";

// src/inspector/serialize.ts
import { unwrap } from "solid-js/store";
function encodeValue(value, deep, nodeMap, handleStore, inStore = false) {
  if (typeof value === "number") {
    if (value === Infinity)
      return { type: 0 /* Number */, value: INFINITY };
    if (value === -Infinity)
      return { type: 0 /* Number */, value: NEGATIVE_INFINITY };
    if (Number.isNaN(value))
      return { type: 0 /* Number */, value: NAN };
    return { type: 0 /* Number */, value };
  }
  if (typeof value === "boolean")
    return { type: 1 /* Boolean */, value };
  if (typeof value === "string")
    return { type: 2 /* String */, value };
  if (value === null)
    return { type: 3 /* Null */ };
  if (value === void 0)
    return { type: 4 /* Undefined */ };
  if (typeof value === "symbol")
    return { type: 5 /* Symbol */, value: value.description ?? "" };
  if (typeof value === "function")
    return { type: 8 /* Function */, value: value.name };
  if (value instanceof HTMLElement)
    return {
      type: 10 /* Element */,
      value: { name: value.tagName, id: nodeMap.set(value) }
    };
  if (!inStore && isStoreNode(value)) {
    const node = unwrap(value);
    const id = nodeMap.set(node);
    handleStore && handleStore(id, node);
    return {
      type: 12 /* Store */,
      value: {
        value: encodeValue(node, deep, nodeMap, void 0, true),
        id
      }
    };
  }
  if (Array.isArray(value)) {
    const payload = {
      type: 6 /* Array */,
      value: value.length
    };
    if (deep)
      payload.children = value.map(
        (item) => encodeValue(item, true, nodeMap, handleStore, inStore)
      );
    return payload;
  }
  const s = Object.prototype.toString.call(value);
  const name = s.slice(8, -1);
  if (name === "Object") {
    const obj = value;
    const payload = {
      type: 7 /* Object */,
      value: Object.keys(obj).length
    };
    if (deep) {
      const children = payload.children = {};
      for (const [key, descriptor] of Object.entries(Object.getOwnPropertyDescriptors(value))) {
        children[key] = descriptor.get ? { type: 9 /* Getter */, value: key } : encodeValue(descriptor.value, true, nodeMap, handleStore, inStore);
      }
    }
    return payload;
  }
  return { type: 11 /* Instance */, value: name };
}
var lastId = 0;
var NodeIDMap = class {
  obj = {};
  map = /* @__PURE__ */ new WeakMap();
  get(id) {
    return this.obj[id];
  }
  getId(element) {
    return this.map.get(element);
  }
  set(element) {
    let id = this.map.get(element);
    if (id !== void 0)
      return id;
    id = (lastId++).toString(36);
    this.obj[id] = element;
    this.map.set(element, id);
    return id;
  }
};

// src/inspector/store.ts
import { untrack as untrack2 } from "solid-js";
import { DEV as STORE_DEV2, unwrap as unwrap2 } from "solid-js/store";
var DEV = STORE_DEV2;
var $listeners = /* @__PURE__ */ new WeakMap();
globalThis._$onStoreNodeUpdate = (node, property, value, prev) => {
  const listeners = $listeners.get(node);
  if (listeners)
    for (const fn of listeners)
      fn(node, property, value, prev);
};
function forEachStoreProp(node, fn) {
  if (Array.isArray(node)) {
    for (let i = 0; i < node.length; i++) {
      const child = node[i];
      DEV.isWrappable(child) && fn(i.toString(), child);
    }
  } else {
    for (const key in node) {
      const { value, get } = Object.getOwnPropertyDescriptor(node, key);
      if (!get && DEV.isWrappable(value))
        fn(key, value);
    }
  }
}
function matchHandler({ storePath, storeSymbol }, symbol, path) {
  if (storeSymbol !== symbol || storePath.length !== path.length)
    return false;
  if (storePath == path)
    return true;
  for (let i = 0; i < storePath.length; i++) {
    if (storePath[i] != path[i])
      return false;
  }
  return true;
}
function observeStoreNode(rootNode, onUpdate) {
  rootNode = unwrap2(rootNode);
  const symbol = Symbol("inspect-store");
  return untrack2(() => {
    trackStore(rootNode, []);
    return () => untrackStore(rootNode, []);
  });
  function trackStore(node, path) {
    const handlers = $listeners.get(node);
    if (handlers && handlers.some((fn) => matchHandler(fn, symbol, path)))
      return;
    const handler = (_, property, value, prev) => {
      if (typeof property === "symbol")
        return;
      const propertyPath = [...path, property];
      untrack2(() => {
        if (property === "length" && typeof value === "number" && Array.isArray(node)) {
          onUpdate({ path, property, length: value });
        } else {
          if (DEV.isWrappable(prev))
            untrackStore(prev, propertyPath);
          if (DEV.isWrappable(value))
            trackStore(value, propertyPath);
          onUpdate({ path, property, value });
        }
      });
    };
    handler.storePath = path;
    handler.storeSymbol = symbol;
    handlers ? handlers.push(handler) : $listeners.set(node, [handler]);
    forEachStoreProp(node, (property, child) => trackStore(child, [...path, property]));
  }
  function untrackStore(node, path) {
    const handlers = $listeners.get(node);
    if (!handlers)
      return;
    const r = handlers.splice(
      handlers.findIndex((h) => matchHandler(h, symbol, path)),
      1
    );
    if (handlers.length === 0)
      $listeners.delete(node);
    if (r.length)
      forEachStoreProp(node, (property, child) => untrackStore(child, [...path, property]));
  }
}

// src/inspector/inspector.ts
import { $PROXY } from "solid-js";
var ValueNode = class {
  constructor(getValue) {
    this.getValue = getValue;
  }
  trackedStores = [];
  selected = false;
  addStoreObserver(unsub) {
    this.trackedStores.push(unsub);
  }
  unsubscribe() {
    for (const unsub of this.trackedStores)
      unsub();
    this.trackedStores = [];
  }
  reset() {
    this.unsubscribe();
    this.selected = false;
  }
  isSelected() {
    return this.selected;
  }
  setSelected(selected) {
    this.selected = selected;
    if (!selected)
      this.unsubscribe();
  }
};
var ValueNodeMap = class {
  record = {};
  get(id) {
    return this.record[id];
  }
  add(id, getValue) {
    this.record[id] = new ValueNode(getValue);
  }
  reset() {
    for (const signal of Object.values(this.record))
      signal.reset();
  }
};
var $nodeIdMap;
var $valueMap;
var INSPECTOR = Symbol("inspector");
function mapSignalNode(node, handler) {
  const { value } = node;
  const id = markNodeID(node);
  let name;
  $valueMap.add(`signal:${id}`, () => node.value);
  if (isSolidStore(node)) {
    name = getDisplayName(getStoreNodeName(value));
  } else {
    name = getNodeName(node);
    observeValueUpdate(node, (v) => handler(id, v), INSPECTOR);
  }
  return {
    type: getNodeType(node),
    name,
    id,
    value: encodeValue(value, false, $nodeIdMap)
  };
}
function clearOwnerObservers(owner) {
  if (isSolidComputation(owner)) {
    removeValueUpdateObserver(owner, INSPECTOR);
  }
  if (owner.sourceMap) {
    for (const node of Object.values(owner.sourceMap))
      removeValueUpdateObserver(node, INSPECTOR);
  }
  if (owner.owned) {
    for (const node of owner.owned)
      removeValueUpdateObserver(node, INSPECTOR);
  }
}
function collectOwnerDetails(owner, config) {
  const { onSignalUpdate, onValueUpdate } = config;
  $nodeIdMap = new NodeIDMap();
  $valueMap = new ValueNodeMap();
  const id = markNodeID(owner);
  const type = markOwnerType(owner);
  const name = markOwnerName(owner);
  let { sourceMap, owned } = owner;
  let getValue = () => owner.value;
  const details = { id, name, type };
  if (type === 7 /* Context */) {
    sourceMap = void 0;
    owned = null;
    const symbols = Object.getOwnPropertySymbols(owner.context);
    if (symbols.length !== 1) {
      throw new Error("Context field has more than one symbol. This is not expected.");
    } else {
      const contextValue = owner.context[symbols[0]];
      getValue = () => contextValue;
    }
  }
  let checkProxyProps;
  if (isSolidComputation(owner)) {
    if (isSolidComponent(owner)) {
      let refresh = getComponentRefreshNode(owner);
      if (refresh) {
        sourceMap = refresh.sourceMap;
        owned = refresh.owned;
        getValue = () => refresh.value;
      } else {
      }
      const proxy = !!owner.props[$PROXY];
      const record = {};
      for (const [key, desc] of Object.entries(Object.getOwnPropertyDescriptors(owner.props))) {
        if (desc.get) {
          record[key] = { type: 9 /* Getter */, value: key };
        } else {
          record[key] = encodeValue(desc.value, false, $nodeIdMap);
          desc.value instanceof Object && $valueMap.add(`prop:${key}`, () => desc.value);
        }
      }
      details.props = { proxy, record };
      if (owner.location)
        details.location = owner.location;
      if (proxy) {
        let oldKeys = Object.keys(record);
        checkProxyProps = () => {
          const newKeys = Object.keys(owner.props);
          const added = new Set(newKeys);
          const removed = [];
          let changed = false;
          for (const key of oldKeys) {
            if (added.has(key))
              added.delete(key);
            else {
              changed = true;
              removed.push(key);
            }
          }
          if (!changed && !added.size)
            return;
          oldKeys = newKeys;
          return { added: Array.from(added), removed };
        };
      }
    } else {
      observeValueUpdate(owner, onValueUpdate, INSPECTOR);
    }
    details.value = encodeValue(getValue(), false, $nodeIdMap);
  }
  if (sourceMap) {
    const signalNodes = Object.values(sourceMap);
    details.signals = Array(signalNodes.length);
    for (let i = 0; i < signalNodes.length; i++) {
      details.signals[i] = mapSignalNode(signalNodes[i], onSignalUpdate);
    }
  } else
    details.signals = [];
  if (owned) {
    for (const node of owned) {
      if (isSolidMemo(node))
        details.signals.push(mapSignalNode(node, onSignalUpdate));
    }
  }
  $valueMap.add("value", getValue);
  return {
    details,
    valueMap: $valueMap,
    nodeIdMap: $nodeIdMap,
    checkProxyProps
  };
}

// src/inspector/index.ts
function createInspector(debuggerEnabled, { eventHub }) {
  let lastDetails;
  let inspectedOwner;
  let nodeIdMap = new NodeIDMap();
  let valueMap = new ValueNodeMap();
  let checkProxyProps;
  const { pushStoreUpdate, pushValueUpdate, triggerPropsCheck, clearUpdates } = (() => {
    let valueUpdates = /* @__PURE__ */ new Set();
    let storeUpdates = [];
    let checkProps = false;
    const flush = scheduleIdle(() => {
      const batchedUpdates = [];
      for (const id of valueUpdates) {
        const node = valueMap.get(id);
        if (!node || !node.getValue)
          continue;
        const selected = node.isSelected();
        const encoded = encodeValue(
          node.getValue(),
          selected,
          nodeIdMap,
          selected && handleStoreNode.bind(null, id, node)
        );
        batchedUpdates.push(["value", { id, value: encoded }]);
      }
      valueUpdates.clear();
      for (const [valueNodeId, storeId, data] of storeUpdates)
        batchedUpdates.push([
          "store",
          {
            valueNodeId,
            storeId,
            value: "length" in data ? data.length : data.value === void 0 ? void 0 : encodeValue(data.value, true, nodeIdMap, void 0, true),
            path: data.path,
            property: data.property
          }
        ]);
      storeUpdates = [];
      if (checkProps && checkProxyProps) {
        const keys = checkProxyProps();
        if (keys)
          batchedUpdates.push(["props", { added: keys.added, removed: keys.removed }]);
        checkProps = false;
      }
      batchedUpdates.length && eventHub.emit("InspectorUpdate", batchedUpdates);
    });
    const flushPropsCheck = throttle2(flush, 200);
    return {
      pushValueUpdate(id) {
        valueUpdates.add(id);
        flush();
      },
      pushStoreUpdate(valueNodeId, storeId, data) {
        storeUpdates.push([valueNodeId, storeId, data]);
        flush();
      },
      triggerPropsCheck() {
        checkProps = true;
        flushPropsCheck();
      },
      clearUpdates() {
        valueUpdates.clear();
        storeUpdates = [];
        checkProps = false;
        flush.clear();
        flushPropsCheck.clear();
      }
    };
  })();
  function handleStoreNode(valueId, valueNode, storeNodeId, storeNode) {
    valueNode.addStoreObserver(
      observeStoreNode(storeNode, (data) => pushStoreUpdate(valueId, storeNodeId, data))
    );
  }
  function setInspectedDetails(owner) {
    inspectedOwner && clearOwnerObservers(inspectedOwner);
    inspectedOwner = owner;
    checkProxyProps = void 0;
    lastDetails = void 0;
    valueMap.reset();
    clearUpdates();
    if (!owner)
      return;
    untrack3(() => {
      const result = collectOwnerDetails(owner, {
        onSignalUpdate: (id) => pushValueUpdate(`signal:${id}`),
        onValueUpdate: () => pushValueUpdate("value")
      });
      eventHub.emit("InspectedNodeDetails", result.details);
      valueMap = result.valueMap;
      nodeIdMap = result.nodeIdMap;
      lastDetails = result.details;
      checkProxyProps = result.checkProxyProps;
    });
  }
  createEffect2(() => {
    if (!debuggerEnabled())
      return;
    onCleanup3(() => setInspectedDetails(void 0));
    makeSolidUpdateListener(() => {
      if (checkProxyProps)
        triggerPropsCheck();
    });
  });
  return {
    getLastDetails: () => lastDetails,
    setInspectedNode(data) {
      if (!data)
        return setInspectedDetails(void 0);
      const { rootId, nodeId } = data;
      const walkResult = walkSolidRoot(rootId, nodeId);
      if (!walkResult || !walkResult.inspectedOwner)
        return setInspectedDetails(void 0);
      setInspectedDetails(walkResult.inspectedOwner);
    },
    toggleValueNode({ id, selected }) {
      const node = valueMap.get(id);
      if (!node)
        return warn2("Could not find value node:", id);
      node.setSelected(selected);
      pushValueUpdate(id);
    },
    getElementById(id) {
      const el = nodeIdMap.get(id);
      if (el instanceof HTMLElement)
        return el;
    }
  };
}

// src/main/plugin.ts
var plugin_default = createInternalRoot(() => {
  const [onUpdate, triggerUpdate] = createSimpleEmitter2();
  const [onForceUpdate, forceTriggerUpdate] = createSimpleEmitter2();
  const eventHub = createEventHub((bus) => ({
    ComputationUpdates: bus(),
    StructureUpdates: bus(),
    InspectorUpdate: bus(),
    InspectedNodeDetails: bus()
  }));
  const [debuggerEnabled, setUserEnabledSignal, setLocatorEnabledSignal] = (() => {
    const locatorEnabledSignal = atom2();
    const userEnabledSignal = atom2();
    const combinedEnabled = atom2(false);
    createComputed2(
      defer2(
        createMemo3(() => !!locatorEnabledSignal()?.() || !!userEnabledSignal()?.()),
        (enabled) => {
          batch(() => {
            debuggerEnabled(enabled);
            if (!enabled) {
              setComponents({});
              locator.togglePluginLocatorMode(false);
              locator.setPluginHighlightTarget(null);
              inspector.setInspectedNode(null);
            }
          });
        }
      )
    );
    return [
      combinedEnabled,
      (signal) => void userEnabledSignal(() => signal),
      (signal) => void locatorEnabledSignal(() => signal)
    ];
  })();
  const [components, setComponents] = createSignal({});
  function findComponent(rootId, nodeId) {
    const componentsList = components()[rootId];
    if (!componentsList)
      return;
    for (const c of componentsList) {
      if (c.id === nodeId)
        return c;
    }
  }
  function removeRoot(rootId) {
    setComponents((prev) => {
      const copy = Object.assign({}, prev);
      delete copy[rootId];
      return copy;
    });
    pushStructureUpdate({ removed: rootId });
  }
  function updateRoot(newRoot, newComponents) {
    setComponents((prev) => Object.assign(prev, { [newRoot.id]: newComponents }));
    pushStructureUpdate({ updated: newRoot });
  }
  const pushStructureUpdate = (() => {
    const updates = [];
    const removedIds = /* @__PURE__ */ new Set();
    const trigger = throttle3(() => {
      const updated = {};
      for (let i = updates.length - 1; i >= 0; i--) {
        const update = updates[i];
        const { id } = update;
        if (!removedIds.has(id) && !updated[id])
          updated[id] = update;
      }
      eventHub.emit("StructureUpdates", { updated, removed: [...removedIds] });
      updates.length = 0;
      removedIds.clear();
    }, 50);
    const pushStructureUpdate2 = (update) => {
      if ("removed" in update)
        removedIds.add(update.removed);
      else if (removedIds.has(update.updated.id))
        return;
      else
        updates.push(update.updated);
      trigger();
    };
    return pushStructureUpdate2;
  })();
  const _pushComputationUpdate = createBatchedUpdateEmitter((updates) => {
    eventHub.emit("ComputationUpdates", updates);
  });
  const pushComputationUpdate = (rootId, id) => {
    _pushComputationUpdate({ rootId, id });
  };
  const inspector = createInspector(debuggerEnabled, { eventHub });
  const locator = createLocator({
    components,
    debuggerEnabled,
    findComponent,
    getElementById: inspector.getElementById,
    setLocatorEnabledSignal
  });
  function openInspectedNodeLocation() {
    const details = inspector.getLastDetails();
    if (!details || !details.location)
      return;
    locator.openElementSourceCode(details.location, details.name);
  }
  function useDebugger2() {
    return {
      listenTo: eventHub.on,
      setUserEnabledSignal,
      triggerUpdate,
      forceTriggerUpdate,
      openInspectedNodeLocation,
      inspector: {
        setInspectedNode: inspector.setInspectedNode,
        toggleValueNode: inspector.toggleValueNode
      },
      locator: {
        toggleEnabled: locator.togglePluginLocatorMode,
        enabledByDebugger: locator.enabledByDebugger,
        addClickInterceptor: locator.addClickInterceptor,
        setHighlightTarget: locator.setPluginHighlightTarget,
        onHoveredComponent: locator.onDebuggerHoveredComponentChange
      }
    };
  }
  return {
    onUpdate,
    onForceUpdate,
    enabled: debuggerEnabled,
    useDebugger: useDebugger2,
    updateRoot,
    removeRoot,
    pushComputationUpdate,
    useLocator: locator.useLocator
  };
});

// src/main/roots.ts
var RootMap = /* @__PURE__ */ new Map();
var walkSolidRoot = (rootId, inspectedId) => {
  const root = RootMap.get(rootId);
  return root ? root.forceUpdate(inspectedId) : null;
};
function createGraphRoot(owner) {
  createInternalRoot((dispose) => {
    onOwnerCleanup(owner, dispose);
    const rootId = markNodeID(owner);
    const onComputationUpdate = (rootId2, nodeId) => {
      if (owner.isDisposed)
        return;
      if (untrack4(plugin_default.enabled))
        triggerRootUpdate();
      plugin_default.pushComputationUpdate(rootId2, nodeId);
    };
    const forceRootUpdate = untrackedCallback((inspectedId) => {
      if (owner.isDisposed)
        return null;
      const result = walkSolidTree(owner, {
        onComputationUpdate,
        rootId,
        inspectedId: inspectedId ?? null
      });
      plugin_default.updateRoot(result.root, result.components);
      return result;
    });
    const triggerRootUpdate = throttle4(forceRootUpdate, 300);
    RootMap.set(rootId, { forceUpdate: forceRootUpdate, dispose });
    plugin_default.onUpdate(triggerRootUpdate);
    plugin_default.onForceUpdate(forceRootUpdate);
    createEffect3(() => {
      plugin_default.enabled() && forceRootUpdate();
    });
    setDebuggerContext(owner, { rootId, triggerRootUpdate, forceRootUpdate });
    onCleanup4(() => {
      removeDebuggerContext(owner);
      plugin_default.removeRoot(rootId);
      owner.isDisposed = true;
      RootMap.delete(rootId);
    });
  });
}
function attachDebugger(_owner = getOwner()) {
  let owner = _owner;
  if (!owner)
    return warn3("reatachOwner helper should be called synchronously in a reactive owner.");
  forEachLookupRoot(owner, (root, ctx) => {
    if (ctx === INTERNAL)
      return;
    root.sdtAttached = null;
    markOwnerType(root, 0 /* Root */);
    createGraphRoot(root);
    if (ctx) {
      ctx.triggerRootUpdate();
      let parent = findClosestAliveParent(root);
      if (!parent.owner)
        return warn3("PARENT_SHOULD_BE_ALIVE");
      root.sdtAttached = parent.owner;
      const onParentCleanup2 = () => {
        const newParent = findClosestAliveParent(root);
        if (newParent.owner) {
          parent = newParent;
          root.sdtAttached = parent.owner;
          onOwnerCleanup(parent.root, onParentCleanup2);
        } else {
          root.sdtAttached = null;
          removeOwnCleanup();
        }
      };
      const removeParentCleanup = onOwnerCleanup(parent.root, onParentCleanup2);
      const removeOwnCleanup = onOwnerCleanup(root, () => {
        root.isDisposed = true;
        root.sdtAttached = null;
        removeParentCleanup();
        ctx.triggerRootUpdate();
      });
    }
  });
}
function unobserveAllRoots() {
  RootMap.forEach((r) => r.dispose());
}
var autoattachEnabled = false;
function enableRootsAutoattach() {
  if (autoattachEnabled)
    return;
  autoattachEnabled = true;
  makeCreateRootListener((root) => attachDebugger(root));
}
function findClosestAliveParent(owner) {
  let disposed = null;
  let closestAliveRoot = null;
  let current = owner;
  while (current.owner && !closestAliveRoot) {
    current = current.owner;
    if (isSolidRoot(current)) {
      if (current.isDisposed)
        disposed = current;
      else
        closestAliveRoot = current;
    }
  }
  if (!closestAliveRoot)
    return { owner: null, root: null };
  return { owner: disposed?.owner ?? owner.owner, root: closestAliveRoot };
}
function forEachLookupRoot(owner, callback) {
  const roots = [];
  let ctx;
  do {
    if (isSolidRoot(owner)) {
      if ("sdtAttached" in owner) {
        if (!ctx)
          ctx = getDebuggerContext(owner);
        break;
      }
      if (owner.sdtContext === INTERNAL) {
        ctx = INTERNAL;
        break;
      }
      roots.push(owner);
    }
    owner = owner.owner;
  } while (owner);
  for (let i = roots.length - 1; i >= 0; i--) {
    const root = roots[i];
    callback(root, ctx);
    if (root.sdtContext)
      ctx = root.sdtContext;
  }
}

// src/index.ts
var Debugger = (props) => {
  attachDebugger();
  return props.children;
};
var useDebugger = plugin_default.useDebugger;
var useLocator = plugin_default.useLocator;

export {
  getOwner,
  isSolidComputation,
  isSolidMemo,
  isSolidOwner,
  isSolidRoot,
  isSolidStore,
  getNodeName,
  getNodeType,
  getOwnerType,
  lookupOwner,
  onOwnerCleanup,
  onParentCleanup,
  createUnownedRoot,
  getFunctionSources,
  createInternalRoot,
  makeSolidUpdateListener,
  makeCreateRootListener,
  observeComputationUpdate,
  interceptComputationRerun,
  observeValueUpdate,
  removeValueUpdateObserver,
  makeValueUpdateListener,
  markComponentLoc,
  attachDebugger,
  unobserveAllRoots,
  enableRootsAutoattach,
  Debugger,
  useDebugger,
  useLocator
};
