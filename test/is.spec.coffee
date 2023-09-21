import {
    isBoolean
    isNumber
    isString
    isArray
    isObject
    isFunction
    typeGet
} from '../'

class TestClass

booleans = [
    true
    false
    new Boolean true
    new Boolean false
]

numbers = [
    0
    1
    -2.2
    new Number 333
    Infinity
]

strings = [
    ""
    "str"
    new String "string"
]

arrays = [
    [[1, 2, 3]]         # Jest has bug with arrays unwrapping
    new Array [4, 5, 6]
]

objects = [
    { prop: 'value' }
    new Object { field: 'field' }
    new TestClass()
]

functions = [
    () ->
    () =>
    TestClass
    Number
    String
    Array
    Object
    Date
]

nulls = [
    null
    undefined
]

nan = [
    NaN
]

notBooleans =   [].concat           numbers, strings, arrays, objects, functions, nulls, nan
notNumbers =    [].concat booleans,          strings, arrays, objects, functions, nulls, nan
notStrings =    [].concat booleans, numbers,          arrays, objects, functions, nulls, nan
notArrays =     [].concat booleans, numbers, strings,         objects, functions, nulls, nan
notObjects =    [].concat booleans, numbers, strings, arrays,          functions, nulls, nan
notFunctions =  [].concat booleans, numbers, strings, arrays, objects,            nulls, nan

tableIs = [
    ['Boolean',   isBoolean, booleans, notBooleans]
    ['Number',    isNumber, numbers, notNumbers]
    ['String',    isString, strings, notStrings]
    ['Array',     isArray, arrays, notArrays]
    ['Object',    isObject, objects, notObjects]
    ['Function',  isFunction, functions, notFunctions]
]

tableTypeGet = [
    ['Boolean',   isBoolean, booleans, notBooleans]
    ['Number',    isNumber, numbers, notNumbers.filter (v) => !isNaN v ] # Exclude NaN
    ['String',    isString, strings, notStrings]
    ['Array',     isArray, arrays, notArrays]
    ['Object',    isObject, objects, notObjects]
    ['Function',  isFunction, functions, notFunctions]
]

describe 'is', =>
    describe.each(tableIs) '%s', (type, xt, isType, notType) =>
        describe 'true', =>
            it.each(isType) '%s', (value) =>
                expect(xt value).toBe true

        describe 'false', =>
            it.each(notType) '%s', (value) =>
                expect(xt value).toBe false


describe 'typeGet', =>
    describe.each(tableTypeGet) '%s', (type, xt, isType, notType) =>
        describe 'is', =>
            it.each(isType) '%s', (value) =>
                expect(typeGet value).toBe type

        describe 'not', =>
            it.each(notType) '%s', (value) =>
                expect(typeGet value).not.toBe type
