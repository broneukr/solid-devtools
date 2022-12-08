import {
  createUnownedRoot
} from "./chunk-RHO6TF2P.js";
import {
  INFINITY,
  NAN,
  NEGATIVE_INFINITY,
  NodeType,
  ValueType,
  getValueItemId
} from "./chunk-VY6BZOAC.js";

// src/server.ts
import { createRoot } from "solid-js";
var Debugger = (props) => props.children;
var attachDebugger = () => void 0;
var useDebugger = () => ({
  triggerUpdate: () => void 0,
  forceTriggerUpdate: () => void 0,
  listenTo: () => () => void 0,
  setInspectedNode: () => void 0,
  handlePropsUpdate: () => () => void 0,
  setInspectedSignal: () => null,
  setInspectedProp: () => void 0,
  inspectedDetails: () => null,
  setInspectedValue: () => null,
  setUserEnabledSignal: () => void 0,
  openInspectedNodeLocation: () => void 0,
  inspector: {
    setInspectedNode: () => void 0,
    toggleValueNode: () => void 0
  },
  locator: {
    toggleEnabled: () => void 0,
    addClickInterceptor: () => void 0,
    enabledByDebugger: () => false,
    setHighlightTarget: () => void 0,
    onHoveredComponent: () => () => void 0
  }
});
var enableRootsAutoattach = () => void 0;
var useLocator = () => void 0;
var unobserveAllRoots = () => void 0;
var makeSolidUpdateListener = () => () => void 0;
var makeCreateRootListener = () => () => void 0;
var observeComputationUpdate = () => void 0;
var interceptComputationRerun = () => void 0;
var observeValueUpdate = () => void 0;
var makeValueUpdateListener = () => void 0;
var removeValueUpdateObserver = () => void 0;
var markComponentLoc = () => void 0;
var getOwner = () => null;
var getOwnerType = () => 5 /* Computation */;
var getNodeType = () => 5 /* Computation */;
var getNodeName = () => "(unnamed)";
var isSolidComputation = (o) => false;
var isSolidMemo = (o) => false;
var isSolidOwner = (o) => false;
var isSolidRoot = (o) => false;
var isSolidStore = (o) => false;
var onOwnerCleanup = () => () => void 0;
var onParentCleanup = () => () => void 0;
var getFunctionSources = () => [];
var createInternalRoot = createRoot;
var lookupOwner = () => null;
export {
  Debugger,
  INFINITY,
  NAN,
  NEGATIVE_INFINITY,
  NodeType,
  ValueType,
  attachDebugger,
  createInternalRoot,
  createUnownedRoot,
  enableRootsAutoattach,
  getFunctionSources,
  getNodeName,
  getNodeType,
  getOwner,
  getOwnerType,
  getValueItemId,
  interceptComputationRerun,
  isSolidComputation,
  isSolidMemo,
  isSolidOwner,
  isSolidRoot,
  isSolidStore,
  lookupOwner,
  makeCreateRootListener,
  makeSolidUpdateListener,
  makeValueUpdateListener,
  markComponentLoc,
  observeComputationUpdate,
  observeValueUpdate,
  onOwnerCleanup,
  onParentCleanup,
  removeValueUpdateObserver,
  unobserveAllRoots,
  useDebugger,
  useLocator
};
