// src/main/types.ts
var getValueItemId = (type, id) => {
  if (type === "value")
    return "value";
  return `${type}:${id}`;
};

// src/main/constants.ts
var INFINITY = "__$sdt-Infinity__";
var NEGATIVE_INFINITY = "__$sdt-NegativeInfinity__";
var NAN = "__$sdt-NaN__";
var NodeType = /* @__PURE__ */ ((NodeType2) => {
  NodeType2[NodeType2["Root"] = 0] = "Root";
  NodeType2[NodeType2["Component"] = 1] = "Component";
  NodeType2[NodeType2["Effect"] = 2] = "Effect";
  NodeType2[NodeType2["Render"] = 3] = "Render";
  NodeType2[NodeType2["Memo"] = 4] = "Memo";
  NodeType2[NodeType2["Computation"] = 5] = "Computation";
  NodeType2[NodeType2["Refresh"] = 6] = "Refresh";
  NodeType2[NodeType2["Context"] = 7] = "Context";
  NodeType2[NodeType2["Signal"] = 8] = "Signal";
  NodeType2[NodeType2["Store"] = 9] = "Store";
  return NodeType2;
})(NodeType || {});
var ValueType = /* @__PURE__ */ ((ValueType2) => {
  ValueType2[ValueType2["Number"] = 0] = "Number";
  ValueType2[ValueType2["Boolean"] = 1] = "Boolean";
  ValueType2[ValueType2["String"] = 2] = "String";
  ValueType2[ValueType2["Null"] = 3] = "Null";
  ValueType2[ValueType2["Undefined"] = 4] = "Undefined";
  ValueType2[ValueType2["Symbol"] = 5] = "Symbol";
  ValueType2[ValueType2["Array"] = 6] = "Array";
  ValueType2[ValueType2["Object"] = 7] = "Object";
  ValueType2[ValueType2["Function"] = 8] = "Function";
  ValueType2[ValueType2["Getter"] = 9] = "Getter";
  ValueType2[ValueType2["Element"] = 10] = "Element";
  ValueType2[ValueType2["Instance"] = 11] = "Instance";
  ValueType2[ValueType2["Store"] = 12] = "Store";
  return ValueType2;
})(ValueType || {});

export {
  INFINITY,
  NEGATIVE_INFINITY,
  NAN,
  NodeType,
  ValueType,
  getValueItemId
};
