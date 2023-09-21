# is

Set of shortands of `Object.prototype.toString` for simple type check. Need to fast and basic type check of some data and don't want to include heavy libraries? You are welcome. Here is only few lines of code. In case if you need more complex data check - that set isn't what you looking for. Try to take a look to Schema, lodash and others.

Набор сокращений `Object.prototype.toString` для простой проверки типов. Нужна быстрая и простая проверка типа и не хочется подключать тяжелые комбайны? Эта библиотека именно то, что вам нужно. Если вам нужна более тщательная и сложная проверка данных - этот набор не то, что вы ищета. Попробуйте взглянуть на Schema, lodash или другие аналоги.

## Install

    npm i @voidvolker/is

No any additional dependencies is used.

## Use

ES module:

```javascript
import {
    isBoolean,
    isNumber,
    isString,
    isArray,
    isObject,
    isFunction,
    typeGet
} from '@voidvolker/is'

console.log(isBoolean(true)
console.log(isString('string'))
console.log(typeGet([]))
```

Require:

```javascript
const {
    isBoolean,
    isNumber,
    isString,
    isArray,
    isObject,
    isFunction,
    typeGet
} = require('@voidvolker/is') // -> dist/commonjs/is.cjs

console.log(isBoolean(true)
console.log(isString('string'))
console.log(typeGet([]))
```

Coffee script:

```coffee
import {
    isBoolean
    isNumber
    isString
    isArray
    isObject
    isFunction
    typeGet
} from '@voidvolker/is'

console.log isBoolean true
console.log isString 'string'
console.log typeGet []
```

## Exports

-   `isBoolean(v)`
-   `isNumber(v)` - Excludes NaN, includes `Number()` type and Infinity
-   `isString(v)`
-   `isArray(v)` -> `Array.isArray`
-   `isObject(v)`
-   `isFunction(v)`
-   `typeGet(v)` - returns string with string like `Boolean`,`Number` and etc. Warning! Useless for NaN: `typeGet(NaN) === 'Number'`

## Exactly types checks

Run command to get full report for each value type results:

    npm i -D
    npm test

Details can be found in `test/is.spec.coffee` file.

## Dev

To update dependencies use `ncu` module.

### Build

    npm run build

`rollup` and `babel` is used for bundling and transforming code for browsers. Take a look to dist folder and take what you need.
Only compile coffee:

    npm run make

### Test

    npm test

And command to watch tests in realtime:

    npm run wt

### Watch

    npm run w
