var t;
t = Object.prototype.toString;
export var isBoolean = function (v) {
  return t.call(v) === '[object Boolean]';
};
export var isNumber = function (v) {
  return t.call(v) === '[object Number]' && Number(v).valueOf() == v;
};
export var isString = function (v) {
  return t.call(v) === '[object String]';
};
export var isArray = Array.isArray;
export var isObject = function (v) {
  return t.call(v) === '[object Object]';
};
export var isFunction = function (v) {
  return typeof v === 'function';
};
export var typeGet = function (v) {
  return t.call(v).slice(8, -1);
};
//# sourceMappingURL=is.js.map