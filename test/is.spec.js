// Generated by CoffeeScript 2.7.0
var TestClass, arrays, booleans, functions, nan, notArrays, notBooleans, notFunctions, notNumbers, notObjects, notStrings, nulls, numbers, objects, strings, tableIs, tableTypeGet;

import {
  isBoolean,
  isNumber,
  isString,
  isArray,
  isObject,
  isFunction,
  typeGet
} from '../';

TestClass = class TestClass {};

booleans = [true, false, new Boolean(true), new Boolean(false)];

numbers = [0, 1, -2.2, new Number(333), 2e308];

strings = ["", "str", new String("string")];

arrays = [
  [
    [
      1,
      2,
      3 // Jest has bug with arrays unwrapping
    ]
  ],
  new Array([4,
  5,
  6])
];

objects = [
  {
    prop: 'value'
  },
  new Object({
    field: 'field'
  }),
  new TestClass()
];

functions = [function() {}, () => {}, TestClass, Number, String, Array, Object, Date];

nulls = [null, void 0];

nan = [0/0];

notBooleans = [].concat(numbers, strings, arrays, objects, functions, nulls, nan);

notNumbers = [].concat(booleans, strings, arrays, objects, functions, nulls, nan);

notStrings = [].concat(booleans, numbers, arrays, objects, functions, nulls, nan);

notArrays = [].concat(booleans, numbers, strings, objects, functions, nulls, nan);

notObjects = [].concat(booleans, numbers, strings, arrays, functions, nulls, nan);

notFunctions = [].concat(booleans, numbers, strings, arrays, objects, nulls, nan);

tableIs = [['Boolean', isBoolean, booleans, notBooleans], ['Number', isNumber, numbers, notNumbers], ['String', isString, strings, notStrings], ['Array', isArray, arrays, notArrays], ['Object', isObject, objects, notObjects], ['Function', isFunction, functions, notFunctions]];

tableTypeGet = [
  ['Boolean',
  isBoolean,
  booleans,
  notBooleans],
  [
    'Number',
    isNumber,
    numbers,
    notNumbers.filter((v) => {
      return !isNaN(v); // Exclude NaN
    })
  ],
  ['String',
  isString,
  strings,
  notStrings],
  ['Array',
  isArray,
  arrays,
  notArrays],
  ['Object',
  isObject,
  objects,
  notObjects],
  ['Function',
  isFunction,
  functions,
  notFunctions]
];

describe('is', () => {
  return describe.each(tableIs)('%s', (type, xt, isType, notType) => {
    describe('true', () => {
      return it.each(isType)('%s', (value) => {
        return expect(xt(value)).toBe(true);
      });
    });
    return describe('false', () => {
      return it.each(notType)('%s', (value) => {
        return expect(xt(value)).toBe(false);
      });
    });
  });
});

describe('typeGet', () => {
  return describe.each(tableTypeGet)('%s', (type, xt, isType, notType) => {
    describe('is', () => {
      return it.each(isType)('%s', (value) => {
        return expect(typeGet(value)).toBe(type);
      });
    });
    return describe('not', () => {
      return it.each(notType)('%s', (value) => {
        return expect(typeGet(value)).not.toBe(type);
      });
    });
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIuLi8iLCJzb3VyY2VzIjpbInRlc3QvaXMuc3BlYy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUEsU0FBQSxFQUFBLE1BQUEsRUFBQSxRQUFBLEVBQUEsU0FBQSxFQUFBLEdBQUEsRUFBQSxTQUFBLEVBQUEsV0FBQSxFQUFBLFlBQUEsRUFBQSxVQUFBLEVBQUEsVUFBQSxFQUFBLFVBQUEsRUFBQSxLQUFBLEVBQUEsT0FBQSxFQUFBLE9BQUEsRUFBQSxPQUFBLEVBQUEsT0FBQSxFQUFBOztBQUFBLE9BQUE7RUFDSSxTQURKO0VBRUksUUFGSjtFQUdJLFFBSEo7RUFJSSxPQUpKO0VBS0ksUUFMSjtFQU1JLFVBTko7RUFPSSxPQVBKO0NBQUEsTUFBQTs7QUFVTSxZQUFOLE1BQUEsVUFBQSxDQUFBOztBQUVBLFFBQUEsR0FBVyxDQUNQLElBRE8sRUFFUCxLQUZPLEVBR1AsSUFBSSxPQUFKLENBQVksSUFBWixDQUhPLEVBSVAsSUFBSSxPQUFKLENBQVksS0FBWixDQUpPOztBQU9YLE9BQUEsR0FBVSxDQUNOLENBRE0sRUFFTixDQUZNLEVBR04sQ0FBQyxHQUhLLEVBSU4sSUFBSSxNQUFKLENBQVcsR0FBWCxDQUpNLEVBS04sS0FMTTs7QUFRVixPQUFBLEdBQVUsQ0FDTixFQURNLEVBRU4sS0FGTSxFQUdOLElBQUksTUFBSixDQUFXLFFBQVgsQ0FITTs7QUFNVixNQUFBLEdBQVM7RUFDTDtJQUFDO01BQUMsQ0FBRDtNQUFJLENBQUo7TUFBTyxDQUFQO0tBQUQ7R0FESztFQUVMLElBQUksS0FBSixDQUFVLENBQUMsQ0FBRDtFQUFJLENBQUo7RUFBTyxDQUFQLENBQVYsQ0FGSzs7O0FBS1QsT0FBQSxHQUFVO0VBQ047SUFBRSxJQUFBLEVBQU07RUFBUixDQURNO0VBRU4sSUFBSSxNQUFKLENBQVc7SUFBRSxLQUFBLEVBQU87RUFBVCxDQUFYLENBRk07RUFHTixJQUFJLFNBQUosQ0FBQSxDQUhNOzs7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QUFPLE9BQUEsQ0FBUSxLQUFSLENBQVAsQ0FBcUIsQ0FBQyxHQUFHLENBQUMsSUFBMUIsQ0FBK0IsSUFBL0I7TUFEbUIsQ0FBdkI7SUFEWSxDQUFoQjtFQUw4QixDQUFsQztBQURnQixDQUFwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgaXNCb29sZWFuXG4gICAgaXNOdW1iZXJcbiAgICBpc1N0cmluZ1xuICAgIGlzQXJyYXlcbiAgICBpc09iamVjdFxuICAgIGlzRnVuY3Rpb25cbiAgICB0eXBlR2V0XG59IGZyb20gJy4uLydcblxuY2xhc3MgVGVzdENsYXNzXG5cbmJvb2xlYW5zID0gW1xuICAgIHRydWVcbiAgICBmYWxzZVxuICAgIG5ldyBCb29sZWFuIHRydWVcbiAgICBuZXcgQm9vbGVhbiBmYWxzZVxuXVxuXG5udW1iZXJzID0gW1xuICAgIDBcbiAgICAxXG4gICAgLTIuMlxuICAgIG5ldyBOdW1iZXIgMzMzXG4gICAgSW5maW5pdHlcbl1cblxuc3RyaW5ncyA9IFtcbiAgICBcIlwiXG4gICAgXCJzdHJcIlxuICAgIG5ldyBTdHJpbmcgXCJzdHJpbmdcIlxuXVxuXG5hcnJheXMgPSBbXG4gICAgW1sxLCAyLCAzXV0gICAgICAgICAjIEplc3QgaGFzIGJ1ZyB3aXRoIGFycmF5cyB1bndyYXBwaW5nXG4gICAgbmV3IEFycmF5IFs0LCA1LCA2XVxuXVxuXG5vYmplY3RzID0gW1xuICAgIHsgcHJvcDogJ3ZhbHVlJyB9XG4gICAgbmV3IE9iamVjdCB7IGZpZWxkOiAnZmllbGQnIH1cbiAgICBuZXcgVGVzdENsYXNzKClcbl1cblxuZnVuY3Rpb25zID0gW1xuICAgICgpIC0+XG4gICAgKCkgPT5cbiAgICBUZXN0Q2xhc3NcbiAgICBOdW1iZXJcbiAgICBTdHJpbmdcbiAgICBBcnJheVxuICAgIE9iamVjdFxuICAgIERhdGVcbl1cblxubnVsbHMgPSBbXG4gICAgbnVsbFxuICAgIHVuZGVmaW5lZFxuXVxuXG5uYW4gPSBbXG4gICAgTmFOXG5dXG5cbm5vdEJvb2xlYW5zID0gICBbXS5jb25jYXQgICAgICAgICAgIG51bWJlcnMsIHN0cmluZ3MsIGFycmF5cywgb2JqZWN0cywgZnVuY3Rpb25zLCBudWxscywgbmFuXG5ub3ROdW1iZXJzID0gICAgW10uY29uY2F0IGJvb2xlYW5zLCAgICAgICAgICBzdHJpbmdzLCBhcnJheXMsIG9iamVjdHMsIGZ1bmN0aW9ucywgbnVsbHMsIG5hblxubm90U3RyaW5ncyA9ICAgIFtdLmNvbmNhdCBib29sZWFucywgbnVtYmVycywgICAgICAgICAgYXJyYXlzLCBvYmplY3RzLCBmdW5jdGlvbnMsIG51bGxzLCBuYW5cbm5vdEFycmF5cyA9ICAgICBbXS5jb25jYXQgYm9vbGVhbnMsIG51bWJlcnMsIHN0cmluZ3MsICAgICAgICAgb2JqZWN0cywgZnVuY3Rpb25zLCBudWxscywgbmFuXG5ub3RPYmplY3RzID0gICAgW10uY29uY2F0IGJvb2xlYW5zLCBudW1iZXJzLCBzdHJpbmdzLCBhcnJheXMsICAgICAgICAgIGZ1bmN0aW9ucywgbnVsbHMsIG5hblxubm90RnVuY3Rpb25zID0gIFtdLmNvbmNhdCBib29sZWFucywgbnVtYmVycywgc3RyaW5ncywgYXJyYXlzLCBvYmplY3RzLCAgICAgICAgICAgIG51bGxzLCBuYW5cblxudGFibGVJcyA9IFtcbiAgICBbJ0Jvb2xlYW4nLCAgIGlzQm9vbGVhbiwgYm9vbGVhbnMsIG5vdEJvb2xlYW5zXVxuICAgIFsnTnVtYmVyJywgICAgaXNOdW1iZXIsIG51bWJlcnMsIG5vdE51bWJlcnNdXG4gICAgWydTdHJpbmcnLCAgICBpc1N0cmluZywgc3RyaW5ncywgbm90U3RyaW5nc11cbiAgICBbJ0FycmF5JywgICAgIGlzQXJyYXksIGFycmF5cywgbm90QXJyYXlzXVxuICAgIFsnT2JqZWN0JywgICAgaXNPYmplY3QsIG9iamVjdHMsIG5vdE9iamVjdHNdXG4gICAgWydGdW5jdGlvbicsICBpc0Z1bmN0aW9uLCBmdW5jdGlvbnMsIG5vdEZ1bmN0aW9uc11cbl1cblxudGFibGVUeXBlR2V0ID0gW1xuICAgIFsnQm9vbGVhbicsICAgaXNCb29sZWFuLCBib29sZWFucywgbm90Qm9vbGVhbnNdXG4gICAgWydOdW1iZXInLCAgICBpc051bWJlciwgbnVtYmVycywgbm90TnVtYmVycy5maWx0ZXIgKHYpID0+ICFpc05hTiB2IF0gIyBFeGNsdWRlIE5hTlxuICAgIFsnU3RyaW5nJywgICAgaXNTdHJpbmcsIHN0cmluZ3MsIG5vdFN0cmluZ3NdXG4gICAgWydBcnJheScsICAgICBpc0FycmF5LCBhcnJheXMsIG5vdEFycmF5c11cbiAgICBbJ09iamVjdCcsICAgIGlzT2JqZWN0LCBvYmplY3RzLCBub3RPYmplY3RzXVxuICAgIFsnRnVuY3Rpb24nLCAgaXNGdW5jdGlvbiwgZnVuY3Rpb25zLCBub3RGdW5jdGlvbnNdXG5dXG5cbmRlc2NyaWJlICdpcycsID0+XG4gICAgZGVzY3JpYmUuZWFjaCh0YWJsZUlzKSAnJXMnLCAodHlwZSwgeHQsIGlzVHlwZSwgbm90VHlwZSkgPT5cbiAgICAgICAgZGVzY3JpYmUgJ3RydWUnLCA9PlxuICAgICAgICAgICAgaXQuZWFjaChpc1R5cGUpICclcycsICh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICBleHBlY3QoeHQgdmFsdWUpLnRvQmUgdHJ1ZVxuXG4gICAgICAgIGRlc2NyaWJlICdmYWxzZScsID0+XG4gICAgICAgICAgICBpdC5lYWNoKG5vdFR5cGUpICclcycsICh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICBleHBlY3QoeHQgdmFsdWUpLnRvQmUgZmFsc2VcblxuXG5kZXNjcmliZSAndHlwZUdldCcsID0+XG4gICAgZGVzY3JpYmUuZWFjaCh0YWJsZVR5cGVHZXQpICclcycsICh0eXBlLCB4dCwgaXNUeXBlLCBub3RUeXBlKSA9PlxuICAgICAgICBkZXNjcmliZSAnaXMnLCA9PlxuICAgICAgICAgICAgaXQuZWFjaChpc1R5cGUpICclcycsICh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICBleHBlY3QodHlwZUdldCB2YWx1ZSkudG9CZSB0eXBlXG5cbiAgICAgICAgZGVzY3JpYmUgJ25vdCcsID0+XG4gICAgICAgICAgICBpdC5lYWNoKG5vdFR5cGUpICclcycsICh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICBleHBlY3QodHlwZUdldCB2YWx1ZSkubm90LnRvQmUgdHlwZVxuIl19
