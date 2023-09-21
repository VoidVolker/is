var t;
t = Object.prototype.toString;
var isBoolean = function (v) {
  return t.call(v) === '[object Boolean]';
};
var isNumber = function (v) {
  return t.call(v) === '[object Number]' && Number(v).valueOf() == v;
};
var isString = function (v) {
  return t.call(v) === '[object String]';
};
var isArray = Array.isArray;
var isObject = function (v) {
  return t.call(v) === '[object Object]';
};
var isFunction = function (v) {
  return typeof v === 'function';
};
var typeGet = function (v) {
  return t.call(v).slice(8, -1);
};
export { isArray, isBoolean, isFunction, isNumber, isObject, isString, typeGet };

//# sourceMappingURL=is.bundle.js.map