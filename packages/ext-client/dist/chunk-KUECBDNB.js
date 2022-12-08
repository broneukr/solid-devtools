// src/bridge.ts
var makePostMessage = () => (id, payload) => postMessage({ id, payload }, "*");
var onAllMessages;
var listeners = {};
function startListeningWindowMessages() {
  if (typeof window === "undefined")
    return;
  addEventListener("message", (event) => {
    const id = event.data?.id;
    if (typeof id !== "string")
      return;
    const arr = listeners[id];
    if (arr)
      arr.forEach((f) => f(event.data.payload));
    else if (onAllMessages)
      onAllMessages(event.data);
  });
}
var makeMessageListener = () => (id, handler) => {
  let arr = listeners[id];
  if (!arr)
    arr = listeners[id] = [];
  arr.push(handler);
  return () => listeners[id] = arr.filter((l) => l !== handler);
};
var onAllClientMessages = (fn) => {
  onAllMessages = fn;
};
var isForwardMessage = (data) => typeof data === "object" && data !== null && data.forwarding === true && "id" in data;
var forwardMessageToWindow = (message) => {
  postMessage({ id: message.id, payload: message.payload }, "*");
};
function once(method, id, handler) {
  const unsub = method(id, (...cbArgs) => {
    unsub();
    return handler(...cbArgs);
  });
  return unsub;
}

export {
  makePostMessage,
  startListeningWindowMessages,
  makeMessageListener,
  onAllClientMessages,
  isForwardMessage,
  forwardMessageToWindow,
  once
};
