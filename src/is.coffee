t = Object.prototype.toString

export isBoolean =     (v) -> t.call(v) is '[object Boolean]'
export isNumber =      (v) -> (t.call(v) is '[object Number]') and (`Number(v).valueOf() == v`) # Excludes NaN, includes Number() and Infinity
export isString =      (v) -> t.call(v) is '[object String]'
export isArray =       Array.isArray    # t.call(v) is '[object Array]'
export isObject =      (v) -> t.call(v) is '[object Object]'
export isFunction =    (v) -> typeof v is 'function'
export typeGet =       (v) -> t.call(v).slice 8, -1     # WARNING! typeGet(NaN) === 'Number'
