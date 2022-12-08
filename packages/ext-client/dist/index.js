import {
  makeMessageListener,
  makePostMessage,
  startListeningWindowMessages
} from "./chunk-KUECBDNB.js";

// src/index.ts
import { enableRootsAutoattach } from "@solid-devtools/debugger";

// src/client.ts
import { createEffect, createSignal, onCleanup } from "solid-js";
import { createInternalRoot, useDebugger } from "@solid-devtools/debugger";
import { defer } from "@solid-devtools/shared/primitives";
startListeningWindowMessages();
var fromContent = makeMessageListener();
var toContent = makePostMessage();
toContent("ResetPanel");
toContent("ClientConnected", "0.23.1");
var loadedBefore = false;
createInternalRoot(() => {
  const debug = useDebugger();
  const [enabled, setEnabled] = createSignal(false);
  debug.setUserEnabledSignal(enabled);
  fromContent("DevtoolsOpened", () => setEnabled(true));
  fromContent("DevtoolsClosed", () => setEnabled(false));
  createEffect(() => {
    if (!enabled())
      return;
    if (loadedBefore)
      debug.forceTriggerUpdate();
    else
      loadedBefore = true;
    onCleanup(fromContent("ForceUpdate", () => debug.forceTriggerUpdate()));
    onCleanup(fromContent("InspectValue", debug.inspector.toggleValueNode));
    onCleanup(fromContent("InspectNode", debug.inspector.setInspectedNode));
    debug.listenTo("StructureUpdates", (updates) => toContent("StructureUpdate", updates));
    debug.listenTo("ComputationUpdates", (updates) => {
      toContent("ComputationUpdates", updates);
    });
    debug.listenTo("InspectorUpdate", (update) => toContent("InspectorUpdate", update));
    debug.listenTo("InspectedNodeDetails", (details) => toContent("InspectedDetails", details));
    onCleanup(fromContent("LocatorMode", debug.locator.toggleEnabled));
    createEffect(defer(debug.locator.enabledByDebugger, (state) => toContent("LocatorMode", state)));
    debug.locator.addClickInterceptor((e, component) => {
      e.preventDefault();
      e.stopPropagation();
      toContent("ClientInspectedNode", component.id);
      return false;
    });
    debug.locator.onHoveredComponent((data) => toContent("HoverComponent", data));
    onCleanup(fromContent("HighlightElement", (payload) => debug.locator.setHighlightTarget(payload)));
    onCleanup(fromContent("OpenLocation", debug.openInspectedNodeLocation));
  });
});

// src/index.ts
import {
  Debugger,
  attachDebugger,
  useDebugger as useDebugger2,
  useLocator,
  makeSolidUpdateListener
} from "@solid-devtools/debugger";
enableRootsAutoattach();
export {
  Debugger,
  attachDebugger,
  makeSolidUpdateListener,
  useDebugger2 as useDebugger,
  useLocator
};
