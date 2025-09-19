/* Build: 9/8/2025, 3:37:40 PM */
var _excluded = ["headers"]
  , _excluded2 = ["headers"]
  , _excluded3 = ["headers"];
function _readOnlyError(e) {
    throw new TypeError('"' + e + '" is read-only')
}
function _createForOfIteratorHelper(e, t) {
    var o = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (!o) {
        if (Array.isArray(e) || (o = _unsupportedIterableToArray2(e)) || t && e && "number" == typeof e.length) {
            o && (e = o);
            var n = 0
              , r = function() {};
            return {
                s: r,
                n: function() {
                    return n >= e.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: e[n++]
                    }
                },
                e: function(e) {
                    throw e
                },
                f: r
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var i, a = !0, s = !1;
    return {
        s: function() {
            o = o.call(e)
        },
        n: function() {
            var e = o.next();
            return a = e.done,
            e
        },
        e: function(e) {
            s = !0,
            i = e
        },
        f: function() {
            try {
                a || null == o.return || o.return()
            } finally {
                if (s)
                    throw i
            }
        }
    }
}
function _unsupportedIterableToArray2(e, t) {
    if (e) {
        if ("string" == typeof e)
            return _arrayLikeToArray2(e, t);
        var o = {}.toString.call(e).slice(8, -1);
        return "Object" === o && e.constructor && (o = e.constructor.name),
        "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? _arrayLikeToArray2(e, t) : void 0
    }
}
function _arrayLikeToArray2(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var o = 0, n = Array(t); o < t; o++)
        n[o] = e[o];
    return n
}
function _callSuper(e, t, o) {
    return t = _getPrototypeOf(t),
    _possibleConstructorReturn(e, _isNativeReflectConstruct() ? Reflect.construct(t, o || [], _getPrototypeOf(e).constructor) : t.apply(e, o))
}
function _possibleConstructorReturn(e, t) {
    if (t && ("object" == _typeof2(t) || "function" == typeof t))
        return t;
    if (void 0 !== t)
        throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(e)
}
function _assertThisInitialized(e) {
    if (void 0 === e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function _inherits(e, t) {
    if ("function" != typeof t && null !== t)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    t && _setPrototypeOf(e, t)
}
function _wrapNativeSuper(e) {
    var t = "function" == typeof Map ? new Map : void 0;
    return _wrapNativeSuper = function(e) {
        if (null === e || !_isNativeFunction(e))
            return e;
        if ("function" != typeof e)
            throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== t) {
            if (t.has(e))
                return t.get(e);
            t.set(e, o)
        }
        function o() {
            return _construct(e, arguments, _getPrototypeOf(this).constructor)
        }
        return o.prototype = Object.create(e.prototype, {
            constructor: {
                value: o,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        _setPrototypeOf(o, e)
    }
    ,
    _wrapNativeSuper(e)
}
function _construct(e, t, o) {
    if (_isNativeReflectConstruct())
        return Reflect.construct.apply(null, arguments);
    var n = [null];
    n.push.apply(n, t);
    var r = new (e.bind.apply(e, n));
    return o && _setPrototypeOf(r, o.prototype),
    r
}
function _isNativeReflectConstruct() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch (e) {}
    return (_isNativeReflectConstruct = function() {
        return !!e
    }
    )()
}
function _isNativeFunction(e) {
    try {
        return -1 !== Function.toString.call(e).indexOf("[native code]")
    } catch (t) {
        return "function" == typeof e
    }
}
function _setPrototypeOf(e, t) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t,
        e
    }
    ,
    _setPrototypeOf(e, t)
}
function _getPrototypeOf(e) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    }
    ,
    _getPrototypeOf(e)
}
function _objectWithoutProperties(e, t) {
    if (null == e)
        return {};
    var o, n, r = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++)
            o = i[n],
            -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (r[o] = e[o])
    }
    return r
}
function _objectWithoutPropertiesLoose(e, t) {
    if (null == e)
        return {};
    var o = {};
    for (var n in e)
        if ({}.hasOwnProperty.call(e, n)) {
            if (-1 !== t.indexOf(n))
                continue;
            o[n] = e[n]
        }
    return o
}
function _regenerator() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    var e, t, o = "function" == typeof Symbol ? Symbol : {}, n = o.iterator || "@@iterator", r = o.toStringTag || "@@toStringTag";
    function i(o, n, r, i) {
        var l = n && n.prototype instanceof s ? n : s
          , c = Object.create(l.prototype);
        return _regeneratorDefine2(c, "_invoke", function(o, n, r) {
            var i, s, l, c = 0, d = r || [], u = !1, h = {
                p: 0,
                n: 0,
                v: e,
                a: f,
                f: f.bind(e, 4),
                d: function(t, o) {
                    return i = t,
                    s = 0,
                    l = e,
                    h.n = o,
                    a
                }
            };
            function f(o, n) {
                for (s = o,
                l = n,
                t = 0; !u && c && !r && t < d.length; t++) {
                    var r, i = d[t], f = h.p, m = i[2];
                    o > 3 ? (r = m === n) && (l = i[(s = i[4]) ? 5 : (s = 3,
                    3)],
                    i[4] = i[5] = e) : i[0] <= f && ((r = o < 2 && f < i[1]) ? (s = 0,
                    h.v = n,
                    h.n = i[1]) : f < m && (r = o < 3 || i[0] > n || n > m) && (i[4] = o,
                    i[5] = n,
                    h.n = m,
                    s = 0))
                }
                if (r || o > 1)
                    return a;
                throw u = !0,
                n
            }
            return function(r, d, m) {
                if (c > 1)
                    throw TypeError("Generator is already running");
                for (u && 1 === d && f(d, m),
                s = d,
                l = m; (t = s < 2 ? e : l) || !u; ) {
                    i || (s ? s < 3 ? (s > 1 && (h.n = -1),
                    f(s, l)) : h.n = l : h.v = l);
                    try {
                        if (c = 2,
                        i) {
                            if (s || (r = "next"),
                            t = i[r]) {
                                if (!(t = t.call(i, l)))
                                    throw TypeError("iterator result is not an object");
                                if (!t.done)
                                    return t;
                                l = t.value,
                                s < 2 && (s = 0)
                            } else
                                1 === s && (t = i.return) && t.call(i),
                                s < 2 && (l = TypeError("The iterator does not provide a '" + r + "' method"),
                                s = 1);
                            i = e
                        } else if ((t = (u = h.n < 0) ? l : o.call(n, h)) !== a)
                            break
                    } catch (t) {
                        i = e,
                        s = 1,
                        l = t
                    } finally {
                        c = 1
                    }
                }
                return {
                    value: t,
                    done: u
                }
            }
        }(o, r, i), !0),
        c
    }
    var a = {};
    function s() {}
    function l() {}
    function c() {}
    t = Object.getPrototypeOf;
    var d = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function() {
        return this
    }),
    t)
      , u = c.prototype = s.prototype = Object.create(d);
    function h(e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, c) : (e.__proto__ = c,
        _regeneratorDefine2(e, r, "GeneratorFunction")),
        e.prototype = Object.create(u),
        e
    }
    return l.prototype = c,
    _regeneratorDefine2(u, "constructor", c),
    _regeneratorDefine2(c, "constructor", l),
    l.displayName = "GeneratorFunction",
    _regeneratorDefine2(c, r, "GeneratorFunction"),
    _regeneratorDefine2(u),
    _regeneratorDefine2(u, r, "Generator"),
    _regeneratorDefine2(u, n, function() {
        return this
    }),
    _regeneratorDefine2(u, "toString", function() {
        return "[object Generator]"
    }),
    (_regenerator = function() {
        return {
            w: i,
            m: h
        }
    }
    )()
}
function _regeneratorDefine2(e, t, o, n) {
    var r = Object.defineProperty;
    try {
        r({}, "", {})
    } catch (e) {
        r = 0
    }
    _regeneratorDefine2 = function(e, t, o, n) {
        function i(t, o) {
            _regeneratorDefine2(e, t, function(e) {
                return this._invoke(t, o, e)
            })
        }
        t ? r ? r(e, t, {
            value: o,
            enumerable: !n,
            configurable: !n,
            writable: !n
        }) : e[t] = o : (i("next", 0),
        i("throw", 1),
        i("return", 2))
    }
    ,
    _regeneratorDefine2(e, t, o, n)
}
function ownKeys(e, t) {
    var o = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })),
        o.push.apply(o, n)
    }
    return o
}
function _objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var o = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ownKeys(Object(o), !0).forEach(function(t) {
            _defineProperty2(e, t, o[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : ownKeys(Object(o)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
        })
    }
    return e
}
function _defineProperty2(e, t, o) {
    return (t = _toPropertyKey2(t))in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = o,
    e
}
function asyncGeneratorStep(e, t, o, n, r, i, a) {
    try {
        var s = e[i](a)
          , l = s.value
    } catch (e) {
        return void o(e)
    }
    s.done ? t(l) : Promise.resolve(l).then(n, r)
}
function _asyncToGenerator(e) {
    return function() {
        var t = this
          , o = arguments;
        return new Promise(function(n, r) {
            var i = e.apply(t, o);
            function a(e) {
                asyncGeneratorStep(i, n, r, a, s, "next", e)
            }
            function s(e) {
                asyncGeneratorStep(i, n, r, a, s, "throw", e)
            }
            a(void 0)
        }
        )
    }
}
function _classCallCheck2(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function _defineProperties(e, t) {
    for (var o = 0; o < t.length; o++) {
        var n = t[o];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value"in n && (n.writable = !0),
        Object.defineProperty(e, _toPropertyKey2(n.key), n)
    }
}
function _createClass2(e, t, o) {
    return t && _defineProperties(e.prototype, t),
    o && _defineProperties(e, o),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function _toPropertyKey2(e) {
    var t = _toPrimitive2(e, "string");
    return "symbol" == _typeof2(t) ? t : t + ""
}
function _toPrimitive2(e, t) {
    if ("object" != _typeof2(e) || !e)
        return e;
    var o = e[Symbol.toPrimitive];
    if (void 0 !== o) {
        var n = o.call(e, t || "default");
        if ("object" != _typeof2(n))
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return ("string" === t ? String : Number)(e)
}
function _typeof2(e) {
    return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    ,
    _typeof2(e)
    /*! 2025-09-08 15:09:17 */
}
var $j = jQuery.noConflict()
  , jPar = {
    state: {
        wdkDialog: {
            openedDialogList: []
        }
    }
};
deepMerge = function(e) {
    function t() {
        return e.apply(this, arguments)
    }
    return t.toString = function() {
        return e.toString()
    }
    ,
    t
}(function() {
    var e, t, o, n, r, i, a = arguments[0] || {}, s = 1, l = arguments.length, c = !1;
    for ("boolean" == typeof a && (c = a,
    a = arguments[s] || {},
    s++),
    "object" === _typeof2(a) || isFunction(a) || (a = {}),
    s === l && (a = this,
    s--); s < l; s++)
        if (null !== (e = arguments[s]))
            for (t in e)
                if (Object.prototype.hasOwnProperty.call(e, t)) {
                    if (n = e[t],
                    "__proto__" === t || a === n)
                        continue;
                    c && n && (jQuery.isPlainObject(n) || (r = Array.isArray(n))) ? (o = a[t],
                    i = r && !Array.isArray(o) ? [] : r || jQuery.isPlainObject(o) ? o : {},
                    r = !1,
                    a[t] = deepMerge(c, i, n)) : void 0 !== n && (a[t] = n)
                }
    return a
}),
$j.extend(!0, jPar, {
    Tracking: {
        init: function() {
            try {
                this.setEventForUnhandledRejection()
            } catch (e) {
                console.error("jPar.Tracking.init failed!")
            }
        },
        setEventForUnhandledRejection: function() {
            window.addEventListener("unhandledrejection", function(e) {
                if (void 0 !== e) {
                    e.preventDefault();
                    var t = void 0 !== e.reason
                      , o = t && void 0 !== e.reason.stack
                      , n = t && void 0 !== e.reason.message;
                    o && "" !== e.reason.stack ? jPar.util.log.error(e.reason.stack, "unhandledrejection (event.reason.stack) Caught_2") : n && jPar.util.log.error(e.reason.message, "unhandledrejection (event.reason.message) Caught_2")
                }
            })
        },
        parmacontoTeaser: {
            init: function() {
                var e = this;
                document.addEventListener("scroll", function() {
                    e.onScrollOrResizeViewed()
                }, {
                    passive: !0,
                    signal: jPar.util.getGlobalAbortSignal()
                }),
                window.addEventListener("resize", function() {
                    e.onScrollOrResizeViewed()
                }, {
                    passive: !0,
                    signal: jPar.util.getGlobalAbortSignal()
                })
            },
            onScrollOrResizeViewed: function() {
                var e = this
                  , t = $j(".urcCard [data-urclayout]:not(.is-viewed)");
                t.length > 0 && t.each(function() {
                    e.slotViewed($j(this))
                })
            },
            slotLoaded: function(e) {
                e.height() > 0 && this.triggerPegLoggerEvent(e, "loaded")
            },
            slotViewed: function(e) {
                e.isOnScreen(function(t) {
                    return t.top >= .75 * e.height() && t.bottom >= $j(this).height()
                }) && (e.addClass("is-viewed"),
                this.triggerPegLoggerEvent(e, "viewed"))
            },
            slotClicked: function(e) {
                var t = this;
                e.on("click", function() {
                    t.triggerPegLoggerEvent($j(this), "click")
                })
            },
            addParamsToParmacontoLink: function(e) {
                var t = e.find("a").attr("href");
                if (null != t) {
                    var o = -1 === t.lastIndexOf("?") ? "?" : "&"
                      , n = t + o + ("target_id=" + e.data("urc-id")) + ("&urcTitle=" + e.data("urc-title")) + ("&slotName=" + e.parents(".urcCard").attr("id")) + ("&displaySize=" + jPar.wdk.screensize.getCurrentScreenSize());
                    e.attr("href", n)
                }
            },
            triggerPegLoggerEvent: function(e, t) {
                var o = e.data("urc-slot")
                  , n = e.data("urc-id")
                  , r = e.data("urc-title");
                jPar.util.log.bigData({
                    category: "parmacontoTeaser",
                    subcategory: o,
                    targetId: n + ":" + r,
                    action: t
                })
            }
        },
        registration: {
            trackLayer: function(e) {
                jPar.util.log.devConsole("Deprecated Tracking.registration.trackLayer() ", e)
            }
        }
    }
});
var FetchIt = function() {
    "use strict";
    return _createClass2(function e() {
        _classCallCheck2(this, e),
        this.defaultBrowserTimeout = 15e3
    }, [{
        key: "get",
        value: (n = _asyncToGenerator(_regenerator().m(function e(t) {
            var o, n, r, i, a, s, l, c, d, u, h = arguments;
            return _regenerator().w(function(e) {
                for (; ; )
                    switch (e.p = e.n) {
                    case 0:
                        return n = (o = h.length > 1 && void 0 !== h[1] ? h[1] : {}).timeout,
                        r = void 0 === n ? this.defaultBrowserTimeout : n,
                        i = new AbortController,
                        a = window.setTimeout(function() {
                            i.abort(new TechnicalFetchCommandError("browserTimeout"))
                        }, r),
                        e.p = 1,
                        e.n = 2,
                        fetch(t, _objectSpread({
                            method: "GET",
                            headers: {
                                "x-requested-with": "XMLHttpRequest"
                            },
                            signal: i.signal
                        }, o));
                    case 2:
                        if (s = e.v,
                        window.clearTimeout(a),
                        s.ok) {
                            e.n = 4;
                            break
                        }
                        if (418 !== s.status) {
                            e.n = 3;
                            break
                        }
                        throw new TechnicalFetchCommandError("offline");
                    case 3:
                        throw new TechnicalFetchCommandError(s.status);
                    case 4:
                        return e.n = 5,
                        s.text();
                    case 5:
                        if (l = e.v,
                        !this.isJson(l)) {
                            e.n = 6;
                            break
                        }
                        return e.a(2, this.getJson(l));
                    case 6:
                        if (!l.includes("loginPage")) {
                            e.n = 7;
                            break
                        }
                        throw new TechnicalFetchCommandError("sessionExpired");
                    case 7:
                        return e.a(2, l);
                    case 8:
                        e.n = 11;
                        break;
                    case 9:
                        if (e.p = 9,
                        u = e.v,
                        null === (c = i.signal) || void 0 === c || !c.aborted) {
                            e.n = 10;
                            break
                        }
                        throw null !== (d = i.signal.reason) && void 0 !== d ? d : new TechnicalFetchCommandError("browserTimeout");
                    case 10:
                        throw u instanceof FetchCommandError ? u : new TechnicalFetchCommandError(u);
                    case 11:
                        return e.a(2)
                    }
            }, e, this, [[1, 9]])
        })),
        function(e) {
            return n.apply(this, arguments)
        }
        )
    }, {
        key: "post",
        value: (o = _asyncToGenerator(_regenerator().m(function e(t) {
            var o, n, r, i, a, s, l, c, d, u, h, f, m, p, g = arguments;
            return _regenerator().w(function(e) {
                for (; ; )
                    switch (e.p = e.n) {
                    case 0:
                        return o = g.length > 1 && void 0 !== g[1] ? g[1] : {},
                        r = (n = g.length > 2 && void 0 !== g[2] ? g[2] : {}).timeout,
                        i = void 0 === r ? this.defaultBrowserTimeout : r,
                        a = new AbortController,
                        s = window.setTimeout(function() {
                            a.abort(new TechnicalFetchCommandError("browserTimeout"))
                        }, i),
                        e.p = 1,
                        l = n.headers,
                        c = _objectWithoutProperties(n, _excluded),
                        e.n = 2,
                        fetch(t, _objectSpread({
                            method: "POST",
                            headers: _objectSpread({
                                "X-CSRF-TOKEN": jPar.wdk.security.csrf.getToken(),
                                "x-requested-with": "XMLHttpRequest",
                                "Content-Type": o instanceof URLSearchParams ? "application/x-www-form-urlencoded" : "application/json"
                            }, l),
                            body: o,
                            signal: a.signal
                        }, c));
                    case 2:
                        if (d = e.v,
                        window.clearTimeout(s),
                        d.ok) {
                            e.n = 6;
                            break
                        }
                        m = d.status,
                        e.n = 418 === m ? 3 : 403 === m ? 4 : 5;
                        break;
                    case 3:
                        throw new TechnicalFetchCommandError("offline");
                    case 4:
                        throw new TechnicalFetchCommandError("sessionExpired");
                    case 5:
                        throw new TechnicalFetchCommandError(d.status);
                    case 6:
                        return e.n = 7,
                        d.text();
                    case 7:
                        if (u = e.v,
                        !this.isJson(u)) {
                            e.n = 8;
                            break
                        }
                        return e.a(2, this.getJson(u));
                    case 8:
                        if (!u.includes("loginPage")) {
                            e.n = 9;
                            break
                        }
                        throw new TechnicalFetchCommandError("sessionExpired");
                    case 9:
                        return e.a(2, u);
                    case 10:
                        e.n = 13;
                        break;
                    case 11:
                        if (e.p = 11,
                        p = e.v,
                        null === (h = a.signal) || void 0 === h || !h.aborted) {
                            e.n = 12;
                            break
                        }
                        throw null !== (f = a.signal.reason) && void 0 !== f ? f : new TechnicalFetchCommandError("browserTimeout");
                    case 12:
                        throw p instanceof FetchCommandError ? p : new TechnicalFetchCommandError(p);
                    case 13:
                        return e.a(2)
                    }
            }, e, this, [[1, 11]])
        })),
        function(e) {
            return o.apply(this, arguments)
        }
        )
    }, {
        key: "put",
        value: (t = _asyncToGenerator(_regenerator().m(function e(t) {
            var o, n, r, i, a, s, l, c, d, u, h, f, m, p, g = arguments;
            return _regenerator().w(function(e) {
                for (; ; )
                    switch (e.p = e.n) {
                    case 0:
                        return o = g.length > 1 && void 0 !== g[1] ? g[1] : {},
                        r = (n = g.length > 2 && void 0 !== g[2] ? g[2] : {}).timeout,
                        i = void 0 === r ? this.defaultBrowserTimeout : r,
                        a = new AbortController,
                        s = window.setTimeout(function() {
                            a.abort(new TechnicalFetchCommandError("browserTimeout"))
                        }, i),
                        e.p = 1,
                        l = n.headers,
                        c = _objectWithoutProperties(n, _excluded2),
                        e.n = 2,
                        fetch(t, _objectSpread({
                            method: "PUT",
                            headers: _objectSpread({
                                "X-CSRF-TOKEN": jPar.wdk.security.csrf.getToken(),
                                "x-requested-with": "XMLHttpRequest",
                                "Content-Type": o instanceof URLSearchParams ? "application/x-www-form-urlencoded" : "application/json"
                            }, l),
                            body: o,
                            signal: a.signal
                        }, c));
                    case 2:
                        if (d = e.v,
                        window.clearTimeout(s),
                        d.ok) {
                            e.n = 6;
                            break
                        }
                        m = d.status,
                        e.n = 418 === m ? 3 : 403 === m ? 4 : 5;
                        break;
                    case 3:
                        throw new TechnicalFetchCommandError("offline");
                    case 4:
                        throw new TechnicalFetchCommandError("sessionExpired");
                    case 5:
                        throw new TechnicalFetchCommandError(d.status);
                    case 6:
                        return e.n = 7,
                        d.text();
                    case 7:
                        if (u = e.v,
                        !this.isJson(u)) {
                            e.n = 8;
                            break
                        }
                        return e.a(2, this.getJson(u));
                    case 8:
                        if (!u.includes("loginPage")) {
                            e.n = 9;
                            break
                        }
                        throw new TechnicalFetchCommandError("sessionExpired");
                    case 9:
                        return e.a(2, u);
                    case 10:
                        e.n = 13;
                        break;
                    case 11:
                        if (e.p = 11,
                        p = e.v,
                        null === (h = a.signal) || void 0 === h || !h.aborted) {
                            e.n = 12;
                            break
                        }
                        throw null !== (f = a.signal.reason) && void 0 !== f ? f : new TechnicalFetchCommandError("browserTimeout");
                    case 12:
                        throw p instanceof FetchCommandError ? p : new TechnicalFetchCommandError(p);
                    case 13:
                        return e.a(2)
                    }
            }, e, this, [[1, 11]])
        })),
        function(e) {
            return t.apply(this, arguments)
        }
        )
    }, {
        key: "delete",
        value: (e = _asyncToGenerator(_regenerator().m(function e(t) {
            var o, n, r, i, a, s, l, c, d, u, h, f, m, p, g = arguments;
            return _regenerator().w(function(e) {
                for (; ; )
                    switch (e.p = e.n) {
                    case 0:
                        return o = g.length > 1 && void 0 !== g[1] ? g[1] : {},
                        r = (n = g.length > 2 && void 0 !== g[2] ? g[2] : {}).timeout,
                        i = void 0 === r ? this.defaultBrowserTimeout : r,
                        a = new AbortController,
                        s = window.setTimeout(function() {
                            a.abort(new TechnicalFetchCommandError("browserTimeout"))
                        }, i),
                        e.p = 1,
                        l = n.headers,
                        c = _objectWithoutProperties(n, _excluded3),
                        e.n = 2,
                        fetch(t, _objectSpread({
                            method: "DELETE",
                            headers: _objectSpread({
                                "X-CSRF-TOKEN": jPar.wdk.security.csrf.getToken(),
                                "x-requested-with": "XMLHttpRequest",
                                "Content-Type": o instanceof URLSearchParams ? "application/x-www-form-urlencoded" : "application/json"
                            }, l),
                            body: o,
                            signal: a.signal
                        }, c));
                    case 2:
                        if (d = e.v,
                        window.clearTimeout(s),
                        d.ok) {
                            e.n = 6;
                            break
                        }
                        m = d.status,
                        e.n = 418 === m ? 3 : 403 === m ? 4 : 5;
                        break;
                    case 3:
                        throw new TechnicalFetchCommandError("offline");
                    case 4:
                        throw new TechnicalFetchCommandError("sessionExpired");
                    case 5:
                        throw new TechnicalFetchCommandError(d.status);
                    case 6:
                        return e.n = 7,
                        d.text();
                    case 7:
                        if (u = e.v,
                        !this.isJson(u)) {
                            e.n = 8;
                            break
                        }
                        return e.a(2, this.getJson(u));
                    case 8:
                        if (!u.includes("loginPage")) {
                            e.n = 9;
                            break
                        }
                        throw new TechnicalFetchCommandError("sessionExpired");
                    case 9:
                        return e.a(2, u);
                    case 10:
                        e.n = 13;
                        break;
                    case 11:
                        if (e.p = 11,
                        p = e.v,
                        null === (h = a.signal) || void 0 === h || !h.aborted) {
                            e.n = 12;
                            break
                        }
                        throw null !== (f = a.signal.reason) && void 0 !== f ? f : new TechnicalFetchCommandError("browserTimeout");
                    case 12:
                        throw p instanceof FetchCommandError ? p : new TechnicalFetchCommandError(p);
                    case 13:
                        return e.a(2)
                    }
            }, e, this, [[1, 11]])
        })),
        function(t) {
            return e.apply(this, arguments)
        }
        )
    }, {
        key: "tryParseJson",
        value: function(e) {
            return this.isJson(e) ? this.getJson(e) : e
        }
    }, {
        key: "isJson",
        value: function(e) {
            e = "string" != typeof e ? JSON.stringify(e) : e;
            try {
                e = JSON.parse(e)
            } catch (e) {
                return !1
            }
            return "object" === _typeof2(e) && null !== e
        }
    }, {
        key: "getJson",
        value: function(e) {
            if (e = "string" != typeof e ? JSON.stringify(e) : e,
            "object" === _typeof2(e = JSON.parse(e)) && null !== e)
                return e
        }
    }]);
    var e, t, o, n
}();
fetchIt = new FetchIt;
var FetchCommandError = function() {
    "use strict";
    function e(t, o) {
        var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "FetchCommandError";
        return _classCallCheck2(this, e),
        (n = _callSuper(this, e)).name = r,
        n.type = t,
        n.message = "object" === _typeof2(o) ? o : null == o ? void 0 : o.toString().replace("Error: ", ""),
        n
    }
    return _inherits(e, _wrapNativeSuper(Error)),
    _createClass2(e)
}()
  , PermissionFetchCommandError = function() {
    "use strict";
    function e(t) {
        return _classCallCheck2(this, e),
        _callSuper(this, e, ["permission", t, "PermissionFetchCommandError"])
    }
    return _inherits(e, FetchCommandError),
    _createClass2(e)
}()
  , TechnicalFetchCommandError = function() {
    "use strict";
    function e(t) {
        return _classCallCheck2(this, e),
        _callSuper(this, e, ["technicalError", t, "TechnicalFetchCommandError"])
    }
    return _inherits(e, FetchCommandError),
    _createClass2(e)
}();
jPar.app = jPar.app || {},
jPar.app.appState = jPar.app.appState || {},
$j.extend(!0, jPar.app.appState, {
    set: function(e, t, o, n) {
        if (browserDetails.features.hasStorageAccess()) {
            var r = this._getStorageType(e)
              , i = r.getItem(t);
            if (null !== i && "" !== i) {
                var a = JSON.parse(i);
                a[o] = n,
                r.setItem(t, JSON.stringify(a))
            } else {
                var s = {};
                s[o] = n,
                r.setItem(t, JSON.stringify(s))
            }
        }
    },
    get: function(e, t, o) {
        if (browserDetails.features.hasStorageAccess()) {
            var n = this._getStorageType(e).getItem(t);
            if (null === n || "" === n || "{}" === n)
                return null;
            var r = JSON.parse(n);
            return void 0 === r[o] ? null : r[o]
        }
    },
    getNameSpace: function(e, t) {
        if (browserDetails.features.hasStorageAccess()) {
            var o = this._getStorageType(e).getItem(t);
            return null === o || "" === o || "{}" === o ? null : JSON.parse(o)
        }
    },
    addEntry: function(e, t, o, n) {
        if (browserDetails.features.hasStorageAccess()) {
            var r = this._getStorageType(e)
              , i = r.getItem(t);
            if (null !== i && "" !== i) {
                var a, s = JSON.parse(i), l = void 0 !== s[o] ? s[o] : "";
                if (n.indexOf(",") > -1)
                    return void console.error('Adding Values with "," is not allowed');
                if (!1 === l.includes(n))
                    0 === l.length ? a = [n] : (l.push(n),
                    a = l),
                    s[o] = a,
                    r.setItem(t, JSON.stringify(s))
            } else {
                var c = {};
                c[o] = [n],
                r.setItem(t, JSON.stringify(c))
            }
        }
    },
    remove: function(e, t, o, n) {
        void 0 !== n ? this._removeEntry(e, t, o, n) : void 0 !== o && void 0 === n ? this._removeCategory(e, t, o) : void 0 !== t && this._removeNamespace(e, t, o)
    },
    _removeCategory: function(e, t, o) {
        if (browserDetails.features.hasStorageAccess()) {
            var n = this._getStorageType(e)
              , r = n.getItem(t);
            if (null !== r && "" !== r) {
                var i = JSON.parse(r);
                delete i[o],
                n.setItem(t, JSON.stringify(i))
            }
        }
    },
    _removeEntry: function(e, t, o, n) {
        if (browserDetails.features.hasStorageAccess()) {
            var r = this._getStorageType(e)
              , i = r.getItem(t);
            if (null !== i && "" !== i) {
                var a = JSON.parse(i)
                  , s = a[o]
                  , l = s;
                "string" == typeof s && (l = s.split(",")),
                l.indexOf(n) > -1 && (l.splice(l.indexOf(n), 1),
                a[o] = l,
                r.setItem(t, JSON.stringify(a)))
            }
        }
    },
    _removeNamespace: function(e, t) {
        browserDetails.features.hasStorageAccess() && this._getStorageType(e).removeItem(t)
    },
    _getStorageType: function(e) {
        return "sessionStorage" === e ? sessionStorage : "localStorage" === e ? localStorage : (console.error("Storage Type not Supported", e),
        null)
    }
}),
jPar.util = jPar.util || {},
deepMerge(!0, jPar.util, {
    isTouch: function() {
        return window.matchMedia("(pointer: coarse)").matches
    },
    isMouse: function() {
        return window.matchMedia("(pointer: fine)").matches
    },
    prefersReducedMotion: function() {
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    },
    setCookie: function(e, t) {
        var o = new Date;
        o.setTime(o.getTime() + 85536e5);
        var n = "".concat(e, "=").concat(t, "; path=/; domain=").concat(this.getTopLevelDomain(), "; expires=").concat(o.toGMTString(), ";");
        document.cookie = n
    },
    getCookie: function(e) {
        var t = document.cookie.split(" ");
        if (void 0 !== t)
            for (var o = 0; o < t.length; o++) {
                var n = t[o].split("=");
                if (n[0] === e)
                    return n.slice(1).join("=")
            }
        return null
    },
    loadScript: function(e, t) {
        var o = $j("#domPageVars").data("jsPath")
          , n = document.createElement("script")
          , r = "";
        document.location.href.indexOf(".dev") > -1 && !0 === $j("#domPageVars").data("useCacheBreaker") && (r = "?ts" + Date.now()),
        e.indexOf("https:") > -1 ? n.setAttribute("src", e) : n.setAttribute("src", o + e + ".js" + r),
        document.getElementsByTagName("head")[0].appendChild(n),
        n.onloadDone || void 0 === t || (n.onloadDone = !0,
        n.onload = function() {
            t()
        }
        )
    },
    vibrate: function() {
        void 0 !== window.navigator.vibrate && window.navigator.vibrate(30)
    },
    getTopLevelDomain: function() {
        var e = location.hostname
          , t = e.match(/(.co.uk|.com.mx|.com.au)$/) ? -3 : -2;
        return e.split(".").slice(t).join(".")
    },
    getGetParamFromUrl: function(e) {
        var t, o, n = decodeURIComponent(window.location.search.substring(1)).split("&");
        for (o = 0; o < n.length; o++)
            if ((t = n[o].split("="))[0] === e)
                return void 0 === t[1] || t[1]
    },
    putCursorAtEnd: function(e) {
        if ($j("html.no-touchevents").length > 0) {
            var t = e.val();
            e.trigger("focus"),
            e.val(""),
            e.val(t)
        }
    },
    setFocusOnFirstFocusableElement: function(e) {
        e.filter("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable], summary").filter(":visible:not([aria-hidden=true])").first().trigger("focus")
    },
    serializeForm: function(e) {
        var t, o = {}, n = new FormData(e), r = _createForOfIteratorHelper(n.keys());
        try {
            for (r.s(); !(t = r.n()).done; ) {
                var i = t.value
                  , a = n.getAll(i);
                o[i] = fetchIt.tryParseJson(1 === a.length ? a[0] : a)
            }
        } catch (e) {
            r.e(e)
        } finally {
            r.f()
        }
        return o
    },
    awaitTimeout: function(e) {
        return new Promise(function(t) {
            return setTimeout(t, e)
        }
        )
    },
    waitForChildNodes: function() {
        var e = _asyncToGenerator(_regenerator().m(function e() {
            return _regenerator().w(function(e) {
                for (; ; )
                    if (0 === e.n)
                        return e.a(2, new Promise(requestAnimationFrame))
            }, e)
        }));
        return function() {
            return e.apply(this, arguments)
        }
    }(),
    getGlobalAbortSignal: function() {
        if (null !== document.querySelector("peg-app-shell")) {
            var e, t = null === (e = document.querySelector("peg-app-shell")) || void 0 === e ? void 0 : e.getAppShellAbortController().signal;
            return void 0 !== t ? t : (jPar.util.log.error("getGlobalAbortSignal failed", "AbortSignal was requested before AbortController was created"),
            null)
        }
        return (new AbortController).signal
    }
}),
window.addEventListener("beforeinstallprompt", function(e) {
    e.preventDefault(),
    jPar.app.installPromptEvent = e
}),
jPar.util = jPar.util || {},
deepMerge(!0, jPar.util, {
    pwa: {
        newServiceworkerAvailable: !1,
        isOfflineSwEnabled: !1,
        swListenerInit: !1,
        init: function() {
            var e = this
              , t = null !== document.querySelector("#serviceWorkerKillSwitch");
            this.isOfflineSwEnabled = null !== document.querySelector("#offlineError"),
            this.createServiceWorker(),
            this.isOfflineSwEnabled ? (document.addEventListener("peg:newUserLogin", function() {
                e.killDefaultCache()
            }, {
                signal: jPar.util.getGlobalAbortSignal()
            }),
            this.lieFi.init(),
            this.offline.init(),
            this.installOption.init(),
            this.checkStandalone()) : t && this.killDefaultCache()
        },
        createServiceWorker: function() {
            void 0 !== navigator.serviceWorker && (!1 === this.swListenerInit && (navigator.serviceWorker.addEventListener("message", this.handleSwEvents),
            this.swListenerInit = !0),
            navigator.serviceWorker.register("/service-worker").then(function() {}, function() {}).catch(function(e) {
                jPar.util.log.error("PWA Serviceworker:", e)
            }))
        },
        handleSwEvents: function(e) {
            var t, o, n;
            "logJsError" === (null === (t = e.data) || void 0 === t ? void 0 : t.command) && jPar.util.log.error("PWA", e.data.stacktrace),
            "pageAnsweredFromCache" === (null === (o = e.data) || void 0 === o ? void 0 : o.command) && (document.querySelector("html").setAttribute("data-origin", "cacheStorageAjax"),
            jPar.util.pwa.lieFi.gotCachedPage()),
            "pageAnsweredFromNetwork" === (null === (n = e.data) || void 0 === n ? void 0 : n.command) && jPar.util.pwa.lieFi.gotNetworkPage()
        },
        hasNewServiceWorker: function() {
            void 0 !== navigator.serviceWorker && this.isOfflineSwEnabled && navigator.serviceWorker.getRegistrations().then(function(e) {
                e.length > 0 && null !== e[0].active && e[0].update()
            })
        },
        killServiceWorker: function() {
            void 0 !== navigator.serviceWorker && navigator.serviceWorker.getRegistrations().then(function(e) {
                e.length > 0 && (navigator.serviceWorker.addEventListener("message", function(e) {
                    "killSwitchSwDeleted" === e.data && document.location.reload()
                }),
                navigator.serviceWorker.controller.postMessage("killSwitch"))
            }, function() {})
        },
        killDefaultCache: function() {
            try {
                caches.keys().then(function(e) {
                    e.forEach(function(e) {
                        e.indexOf("defaultCache-") > -1 && (console.log("killDefaultCache"),
                        caches.delete(e).then(function() {}))
                    })
                }).catch(function(e) {
                    jPar.util.log.error(e, "killDefaultCaches: failed")
                })
            } catch (e) {}
        },
        killCaches: function() {
            caches.keys().then(function(e) {
                e.forEach(function(e) {
                    caches.delete(e).then(function() {})
                })
            }).catch(function(e) {
                jPar.util.log.error(e, "killCaches: failed")
            })
        },
        lieFi: {
            init: function() {
                this.handleCachedPageTracking(),
                this.checkDomForCachedHtml(),
                document.querySelector("#lieFiNotification a").removeEventListener("click", this.handleReloadClick),
                document.querySelector("#lieFiNotification a").addEventListener("click", this.handleReloadClick)
            },
            isOnCachedPage: function() {
                return null !== document.querySelector('html[data-origin="cacheStorage"]') || null !== document.querySelector('html[data-origin="cacheStorageAjax"]')
            },
            checkDomForCachedHtml: function() {
                null !== document.querySelector("html[data-origin=cacheStorage]") && jPar.util.pwa.lieFi.gotCachedPage()
            },
            handleCachedPageTracking: function() {
                if (void 0 !== document.querySelector("#domPageVars").dataset.userId && void 0 !== jPar.app) {
                    var e = jPar.app.appState.get("localStorage", "pwa", "dayOfSwData")
                      , t = jPar.app.appState.get("localStorage", "pwa", "slowPageFromCacheCount")
                      , o = jPar.app.appState.get("localStorage", "pwa", "offlinePageFromCacheCount");
                    null !== e && !0 === navigator.onLine && parseInt(e) !== (new Date).getDate() && (null !== t && (jPar.util.log.ux(t, "pwa:slowPageFromCacheCount delivered last Session for this User"),
                    jPar.app.appState.remove("localStorage", "pwa", "slowPageFromCacheCount")),
                    null !== o && (jPar.util.log.ux(o, "pwa:offlinePageFromCacheCount delivered last Session for this User"),
                    jPar.app.appState.remove("localStorage", "pwa", "offlinePageFromCacheCount")),
                    jPar.app.appState.remove("localStorage", "pwa", "dayOfSwData"))
                }
            },
            gotCachedPage: function() {
                var e, t, o, n, r = this;
                !0 === navigator.onLine ? (null === (e = document.querySelector("#lieFiNotification")) || void 0 === e || e.classList.remove("noDisplay"),
                null === (t = document.querySelector("#offlineError")) || void 0 === t || t.classList.add("noDisplay")) : (null === (o = document.querySelector("#lieFiNotification")) || void 0 === o || o.classList.add("noDisplay"),
                null === (n = document.querySelector("#offlineError")) || void 0 === n || n.classList.remove("noDisplay"));
                this.setCachedPageCount(),
                document.removeEventListener("scroll", this.handlePageInteraction, {
                    once: !0
                }),
                document.addEventListener("scroll", this.handlePageInteraction, {
                    once: !0
                }),
                window.setTimeout(function() {
                    r.handlePageInteraction()
                }, 15e3)
            },
            gotNetworkPage: function() {
                null !== document.querySelector("#lieFiNotification") && (document.querySelector("#lieFiNotification").classList.add("noDisplay"),
                document.querySelector("#offlineError").classList.add("noDisplay"),
                document.querySelector("html").removeAttribute("data-origin"))
            },
            handlePageInteraction: function() {
                var e;
                null === (e = document.querySelector("#lieFiNotification")) || void 0 === e || e.classList.add("noDisplay"),
                document.removeEventListener("scroll", this.handlePageInteraction, {
                    once: !0
                })
            },
            handleReloadClick: function(e) {
                e.preventDefault(),
                document.location.reload()
            },
            setCachedPageCount: function() {
                if (void 0 !== jPar.app && void 0 !== document.querySelector("#domPageVars").dataset.userId) {
                    var e = null !== document.querySelector("peg-app-shell") && null !== document.querySelector('html[data-origin="cacheStorageAjax"]')
                      , t = null !== document.querySelector("peg-app-shell") && null !== document.querySelector('html[data-origin="cacheStorage"]');
                    if (e || t)
                        if (null === jPar.app.appState.get("localStorage", "pwa", "dayOfSwData") && jPar.app.appState.set("localStorage", "pwa", "dayOfSwData", (new Date).getDate()),
                        !1 === navigator.onLine) {
                            var o = jPar.app.appState.get("localStorage", "pwa", "offlinePageFromCacheCount");
                            null === o && (o = 0);
                            var n = parseInt(o) + 1;
                            jPar.app.appState.set("localStorage", "pwa", "offlinePageFromCacheCount", n)
                        } else {
                            var r = jPar.app.appState.get("localStorage", "pwa", "slowPageFromCacheCount");
                            null === r && (r = 0);
                            var i = parseInt(r) + 1;
                            jPar.app.appState.set("localStorage", "pwa", "slowPageFromCacheCount", i)
                        }
                }
            }
        },
        offline: {
            init: function() {
                var e = void 0 !== document.querySelector("#domPageVars").dataset.userId
                  , t = null === document.querySelector("peg-registration-featured-profile, #partnerCompatibilityPage, #partnerCompatibilityPage2025")
                  , o = void 0 !== navigator.serviceWorker && null !== navigator.serviceWorker.controller;
                e && o && t && navigator.serviceWorker.controller.postMessage("prepareDefaultCache"),
                this.checkOnlineState(),
                document.querySelector("#offlineError").addEventListener("animationend", function() {
                    document.querySelector("#offlineError").classList.remove("attention")
                })
            },
            forceClearAllCaches: function() {
                navigator.serviceWorker.controller ? navigator.serviceWorker.controller.postMessage({
                    command: "clearAllCaches",
                    message: "true"
                }) : console.log("No ServiceWorker")
            },
            checkOnlineState: function() {
                window.removeEventListener("offline", this.handleOfflineMode.bind(this)),
                window.addEventListener("offline", this.handleOfflineMode.bind(this)),
                window.removeEventListener("online", this.handleInlineMode),
                window.addEventListener("online", this.handleInlineMode)
            },
            handleOfflineMode: function() {
                var e = this;
                document.querySelector("html").classList.add("is-offline"),
                document.querySelector("#offlineError").classList.remove("noDisplay"),
                $j(".js-onlineOnly").on("click.onlineOnly", function(t) {
                    t.preventDefault(),
                    t.stopPropagation(),
                    t.stopImmediatePropagation(),
                    e.triggerOfflineAttention()
                })
            },
            handleInlineMode: function() {
                $j("#offlineError").addClass("noDisplay"),
                $j("html").removeClass("is-offline"),
                $j(".js-onlineOnly").off("click.onlineOnly")
            },
            triggerOfflineAttention: function() {
                var e;
                null === (e = document.querySelector("#offlineError")) || void 0 === e || e.classList.remove("noDisplay"),
                $j("#offlineError").removeClass("attention"),
                $j("#offlineError").css("color"),
                $j("#offlineError").addClass("attention")
            }
        },
        installOption: {
            installPromptEvent: void 0,
            installVia: "BrowserPrompt",
            init: function() {
                null !== document.querySelector('[rel="manifest"]') && (this.tracking(),
                this.showInstallButton())
            },
            showInstallButton: function() {
                var e = this;
                void 0 !== jPar.app.installPromptEvent && null !== document.querySelector("#burgerMenu .js-installPwa") && (document.querySelector("#burgerMenu .js-installPwa").closest("li").classList.remove("noDisplay"),
                document.querySelectorAll("#burgerMenu .js-installPwa").forEach(function(t) {
                    t.addEventListener("click", function(t) {
                        t.preventDefault(),
                        e.installVia = "BurgerMenu",
                        e.handlePrompt()
                    })
                }))
            },
            handlePrompt: function() {
                var e = this;
                jPar.app.installPromptEvent.prompt(),
                jPar.app.installPromptEvent.userChoice.then(function(t) {
                    var o;
                    "accepted" === t.outcome ? null === (o = document.querySelector(".js-installPwa")) || void 0 === o || o.closest("li").classList.add("noDisplay") : jPar.util.log.ux("installVia: " + e.installVia, "pwa:appInstallRejected")
                })
            },
            tracking: function() {
                var e = this;
                if (window.location.search.indexOf("platform=pwa") > -1) {
                    jPar.util.log.ux("pwa:appOpenend", "pwa:appOpenend");
                    var t = jPar.app.util.getUrlWithRemovedParam(document.location.href, "platform");
                    history.replaceState(null, null, t)
                }
                window.addEventListener("appinstalled", function() {
                    jPar.util.log.ux("installVia: " + e.installVia, "pwa:appInstalled")
                })
            }
        },
        checkStandalone: function() {
            var e = window.matchMedia("(display-mode: standalone)").matches
              , t = !0 === window.navigator.standalone;
            (e || t) && $j("html").addClass("is-inPWA")
        }
    }
}),
jPar.util = jPar.util || {},
deepMerge(!0, jPar.util, {
    log: {
        error: function(e, t) {
            try {
                var o = "object" === _typeof2(e) ? JSON.stringify(e) : e.toString();
                console.trace("%c----CAUGHT ERROR: " + o + " -> " + t.toString() + " ----", "color: red; font-size: 14px;");
                var n = new CustomEvent("pegLogger-logJsError",{
                    detail: {
                        message: e,
                        stacktrace: t.toString(),
                        origin: "Caught_JSError"
                    }
                });
                document.dispatchEvent(n)
            } catch (e) {
                console.error("call of jPar.util.log.error() failed")
            }
        },
        ux: function(e, t) {
            console.log("%c----UX: " + e + " -> " + t.toString() + " ----", "color: blue; font-size: 14px;");
            var o = new CustomEvent("pegLogger-logJsError",{
                detail: {
                    message: e,
                    stacktrace: t.toString(),
                    origin: "UXLogging"
                }
            });
            document.dispatchEvent(o)
        },
        bigData: function(e) {
            window.requestIdleCallback(function() {
                var t = new CustomEvent("pegLogger-logWebAppEvents",{
                    detail: e
                });
                document.dispatchEvent(t)
            }, {
                timeout: 100
            })
        },
        devConsole: function(e) {
            var t;
            $j("#domPageVars").length > 0 && ((void 0 !== $j("#domPageVars").data("isDevSystem") || document.location.href.indexOf(".dev") > -1) && (console.log(e),
            null === (t = document.querySelector("bst-opener")) || void 0 === t || t.appLogging(e)))
        }
    }
}),
jPar.util = jPar.util || {},
deepMerge(!0, jPar.util, {
    network: {
        hasValidSessionAndCsrfToken: function(e) {
            return void 0 !== e && e.hasOwnProperty("status") ? 403 !== e.status : "string" != typeof e || -1 === e.indexOf("<html") && -1 === e.indexOf("<body") && -1 === e.indexOf("loginForm")
        },
        reloadIfResponseInvalid: function(e) {
            if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) && !1 !== this.hasValidSessionAndCsrfToken(e))
                return !0;
            null === document.querySelector("#errorModalboxSessionExpired.is-open") && (jPar.wdk.modalbox.show({
                modalboxId: "#errorModalboxSessionExpired"
            }),
            window.setTimeout(function() {
                var e = document.URL.split("#")[0];
                location.replace(e)
            }, 500))
        },
        reloadForSessionExpired: function() {
            this.reloadIfResponseInvalid(null, !0)
        },
        defaultErrorHandling: function(e) {
            if ("technicalError" !== e.type)
                throw e;
            "browserTimeout" === e.message ? document.querySelector("wdk-snackbar#timeoutNotification").show() : "sessionExpired" === e.message ? jPar.util.network.reloadForSessionExpired() : "offline" === e.message ? jPar.util.pwa.offline.triggerOfflineAttention() : null !== document.querySelector("#errorDialog500") ? document.querySelector("#errorDialog500").openModal() : jPar.wdk.modalbox.show({
                modalboxId: "errorModalbox500"
            })
        },
        setGlobalAjaxTimeout: function() {
            $j.ajaxSetup({
                timeout: "15000"
            })
        }
    }
}),
jPar.util = jPar.util || {},
deepMerge(!0, jPar.util, {
    validate: {
        checkboxIsChecked: function(e) {
            if (null !== e) {
                if (e instanceof jQuery)
                    return !0 === e.prop("checked");
                if (!(e.length > 1))
                    return !!e.checked;
                e.forEach(function(e) {
                    return !!e.checked
                })
            }
        },
        selectBoxHasValue: function(e, t) {
            return e instanceof jQuery ? $j.trim(e.val()) === t : e instanceof HTMLElement ? e.value.trim() === t : void 0
        },
        toggleIsChecked: function(e) {
            return e instanceof jQuery ? e.filter(":checked").length > 0 : e instanceof HTMLElement ? !0 === e.checked : void 0
        },
        textfieldIsEmpty: function(e) {
            if (null !== e) {
                if (e instanceof jQuery)
                    return "" === $j.trim(e.val());
                if (!(e.length > 1))
                    return "" === e.value.trim();
                e.forEach(function(e) {
                    return "" === e.value.trim()
                })
            }
        },
        hasMinimumWordsFilled: function(e, t) {
            var o = new RegExp("([^ ]+ +){" + (t - 1) + ",}[^ ]+","g")
              , n = $j.trim(e.value);
            return o.test(n)
        },
        isNumber: function(e) {
            var t = e.val().trim().replace(/ /g, "");
            return $j.isNumeric(t)
        },
        isEmailAddress: function(e) {
            if (null !== e) {
                var t = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (e instanceof jQuery)
                    return !0 === t.test(e.val());
                if (e instanceof HTMLElement)
                    return !0 === t.test(e.value)
            }
        },
        isNotTabOrShiftKey: function(e) {
            return 9 !== e && 16 !== e
        },
        isMouseclickEnterOrSpaceKey: function(e) {
            return void 0 === e || 13 === e || 32 === e
        }
    }
}),
jPar.util = jPar.util || {},
deepMerge(!0, jPar.util, {
    timezone: {
        setTimezone: function() {
            var e = null === jPar.app.appState.get("sessionStorage", "webapp", "hasFreshTimezoneForSession")
              , t = null === jPar.util.getCookie("timezone");
            if (e || t)
                try {
                    var o = this.getTimezoneForModernBrowsers();
                    this.writeTimezoneToCookie(o)
                } catch (e) {}
        },
        getTimezoneForModernBrowsers: function() {
            if ("string" != typeof Intl.DateTimeFormat().resolvedOptions().timeZone)
                throw new Error("Timezone could not be resolved by Intl.DateTimeFormat");
            return Intl.DateTimeFormat().resolvedOptions().timeZone
        },
        writeTimezoneToCookie: function(e) {
            jPar.util.setCookie("timezone", e),
            jPar.app.appState.set("sessionStorage", "webapp", "hasFreshTimezoneForSession", !0)
        }
    }
}),
jPar.wdk = jPar.wdk || {},
$j.extend(!0, jPar.wdk, {
    security: {
        _charsToHTMLEntityMap: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "`": "&#96;"
        },
        _htmlEntityToCharMap: {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'",
            "&#96;": "`"
        },
        escapeStringForHtml: function(e) {
            var t = this;
            return String(e).replace(/[&<>"'`]/g, function(e) {
                return t._charsToHTMLEntityMap[e]
            })
        },
        sanitizeEvilHtml: function(e) {
            return e.indexOf("matchingWheelData") > -1 ? String(e).replace(/\bonerror=|\bonload=|\bonmouseover=|\bonmouseout=|\bonpagehide=|\bonpageshow=|\bonmessage=|\bonhashchange=|\bonbeforeunload=|\bonpopstate=|\bonresize=|\bonunload=|\bonkeydown=|\bonkeyup=|\bonkeypress=|\bonfocus=|\bonblur=|\bonchange=|\bonsubmit=|\bonreset=|\bonselect=|\bondblclick=|\bondrag=|\bondragend=|\bondragenter=|\bondragleave=|\bondragover=|\bondragstart=|\bondrop=|\bonwheel=|\boncopy=|\boncut=|\bonpaste=|\bonanimationend=|\bonanimationiteration=|\bonanimationstart=|\bontransitionend=|\bontouchcancel=|\bontouchend=|\bontouchmove=|\bontouchstart=|\bonclick=/gi, "") : String(e).replace(/<script\b|\bonerror=|\bonload=|\bonmouseover=|\bonmouseout=|\bonpagehide=|\bonpageshow=|\bonmessage=|\bonhashchange=|\bonbeforeunload=|\bonpopstate=|\bonresize=|\bonunload=|\bonkeydown=|\bonkeyup=|\bonkeypress=|\bonfocus=|\bonblur=|\bonchange=|\bonsubmit=|\bonreset=|\bonselect=|\bondblclick=|\bondrag=|\bondragend=|\bondragenter=|\bondragleave=|\bondragover=|\bondragstart=|\bondrop=|\bonwheel=|\boncopy=|\boncut=|\bonpaste=|\bonanimationend=|\bonanimationiteration=|\bonanimationstart=|\bontransitionend=|\bontouchcancel=|\bontouchend=|\bontouchmove=|\bontouchstart=|\bonclick=/gi, "")
        },
        htmlEntitiesToChars: function(e) {
            var t = this;
            return String(e).replace(/&[^;]+;/g, function(e) {
                return "" !== t._htmlEntityToCharMap[e] ? t._htmlEntityToCharMap[e] : e
            })
        },
        csrf: {
            getToken: function() {
                var e = "";
                return null !== document.querySelector('meta[name="_csrf"]') && (e = document.querySelector('meta[name="_csrf"]').getAttribute("content")),
                e
            },
            updateToken: function(e) {
                var t;
                null === (t = document.querySelector('meta[name="_csrf"]')) || void 0 === t || t.setAttribute("content", e),
                this.setValidstate(!0)
            },
            hasValidToken: function() {
                var e;
                return !1 === (null === (e = document.querySelector("meta[name=_csrf]")) || void 0 === e ? void 0 : e.hasAttribute("data-invalid"))
            },
            setValidstate: function(e) {
                var t;
                !0 === e ? null === (t = document.querySelector("meta[name=_csrf]")) || void 0 === t || t.removeAttribute("data-invalid") : document.querySelector("meta[name=_csrf]").dataset.invalid = !0
            }
        }
    }
}),
jPar.wdk = jPar.wdk || {},
$j.extend(!0, jPar.wdk, {
    brands: {
        forBrands: function(e) {
            if ($j("#domPageVars").length > 0)
                return e.some(function(e) {
                    return $j("#domPageVars").data("brandId") === e
                });
            window.setTimeout(function() {
                return e.some(function(e) {
                    return $j("#domPageVars").data("brandId") === e
                })
            }, 1e3)
        }
    }
}),
jPar.wdk = jPar.wdk || {},
$j.extend(!0, jPar.wdk, {
    screensize: {
        getCurrentScreenSize: function() {
            var e, t = this.getInnerWidth();
            return t >= 0 && t < 481 ? e = "S" : t >= 481 && t < 768 ? e = "M" : t >= 768 && t < 980 ? e = "L" : t >= 980 && (e = "XL"),
            e
        },
        isBreakpoint: function(e) {
            return e.indexOf(jPar.wdk.screensize.getCurrentScreenSize()) > -1
        },
        getInnerWidth: function(e) {
            return null === document.querySelector("peg-app-shell") || e ? window.innerWidth : document.querySelector("peg-app-shell").getCachedWindowWidth()
        },
        setScreenSizeCookie: function() {
            var e = this;
            try {
                window.requestIdleCallback(function() {
                    var t = e.getCurrentScreenSize();
                    setCookie("currentScreenSize", t),
                    $j("#specialOfferScreensize").length > 0 && $j("#specialOfferScreensize").val(t)
                })
            } catch (e) {
                jPar.util.log.error("failed to set screensize-cookie on page " + $j("body").attr("id") + " - " + e, "jPar.wdk.screensize.setScreenSizeCookie()")
            }
        }
    }
}),
jPar.wdk = jPar.wdk || {},
$j.extend(!0, jPar.wdk, {
    modalbox: {
        conf: {},
        show: function(e) {
            var t;
            jPar.wdk.modalbox.hide(!0),
            null === (t = document.querySelector("wdk-dialog[open]")) || void 0 === t || t.closeModal(!0),
            this.modalboxAbortController = new AbortController,
            this.setConfig(e),
            this.conf.isAjaxModalbox ? this.loadAjax() : this.loadInline(),
            document.dispatchEvent(new CustomEvent("wdkModalBox:shown"))
        },
        setConfig: function(e) {
            this.conf = {
                $currentModalbox: null,
                jqxhr: null,
                isAjaxModalbox: !1,
                url: null,
                ajaxSettings: null,
                closeOnBgClick: !1,
                closeOnEsc: !1,
                originalPageScrollPosition: null,
                previousActiveElement: null,
                onSuccess: null,
                onFail: null,
                onAlways: null,
                onBeforeClose: null
            };
            var t = $j(e.modalboxId);
            -1 === e.modalboxId.indexOf("#") && (t = $j("#" + e.modalboxId));
            var o = t;
            if (!(o.length > 0))
                throw jPar.wdk.modalbox.show({
                    modalboxId: "errorModalbox500"
                }),
                new Error("wdkmodalbox: Modalbox ID not found on Page " + e.modalboxId);
            this.conf.$currentModalbox = o,
            void 0 !== o.data("url") && (this.conf.isAjaxModalbox = !0,
            this.conf.url = o.data("url"),
            void 0 !== e.ajaxSettings && (this.conf.ajaxSettings = e.ajaxSettings),
            void 0 !== e.onFail && (this.conf.onFail = e.onFail),
            void 0 !== e.onAlways && (this.conf.onAlways = e.onAlways)),
            void 0 !== o.data("closeOnBgClick") && (this.conf.closeOnBgClick = o.data("closeOnBgClick")),
            void 0 !== o.data("closeOnEsc") && (this.conf.closeOnEsc = o.data("closeOnEsc")),
            this.conf.originalPageScrollPosition = $j(document).scrollTop(),
            this.conf.previousActiveElement = document.activeElement,
            void 0 !== e.onSuccess && (this.conf.onSuccess = e.onSuccess),
            void 0 !== e.onBeforeClose && (this.conf.onBeforeClose = e.onBeforeClose)
        },
        loadAjax: function() {
            var e = this
              , t = this.conf.$currentModalbox
              , o = "";
            null !== e.conf.ajaxSettings && (o = e.conf.ajaxSettings),
            this.conf.jqxhr = $j.ajax(e.conf.url, o).done(function(o) {
                e.handleSessionExpired(o),
                t.html(o),
                e.setCloseEvents(),
                e.handleSpecialDataConfigs(),
                e.makeVisible(),
                null !== e.conf.onSuccess && e.conf.onSuccess()
            }).fail(function(o, n, r) {
                "function" == typeof e.conf.onFail && e.conf.onFail(o, n, r),
                e.handleNetworkErrors(o, n, r, t)
            }).always(function() {
                "function" == typeof e.conf.onAlways && e.conf.onAlways()
            })
        },
        loadInline: function() {
            this.setCloseEvents(),
            this.makeVisible(),
            null !== this.conf.onSuccess && this.conf.onSuccess()
        },
        handleSpecialDataConfigs: function() {
            this.conf.$currentModalbox.find("[data-set-small-content-class=true]").length > 0 && this.conf.$currentModalbox.addClass("has-smallContent"),
            this.conf.$currentModalbox.find("[data-set-full-bg-image-class=true]").length > 0 && this.conf.$currentModalbox.addClass("has-fullBgImage")
        },
        makeVisible: function() {
            var e;
            this.conf.$currentModalbox[0].classList.remove("noDisplay"),
            this.moveModalboxDomToBottom(),
            $j("html").addClass("has-modalboxOpen"),
            this.conf.$currentModalbox.hasClass("wdk-modalbox") ? e = this.conf.$currentModalbox : this.conf.$currentModalbox.find(".wdk-modalbox").length > 0 && (e = this.conf.$currentModalbox.find(".wdk-modalbox")),
            e.find("textarea").length > 0 && e.addClass("has-textarea"),
            e.css("color"),
            e.addClass("is-open transition-in"),
            this.setA11yForOpenModal(),
            this.setInitialFocus(),
            this.hideCloseButtonInApps(),
            document.dispatchEvent(new CustomEvent("wdk:modalbox:isOpened",{
                detail: {
                    $modalboxObj: e
                }
            }))
        },
        setA11yForOpenModal: function() {
            var e = this;
            Array.prototype.slice.call(document.body.children).forEach(function(t) {
                null !== t.getAttribute("inert") && t.setAttribute("data-inert-before", !0);
                var o = t !== e.conf.$currentModalbox[0]
                  , n = "backstageOpenerRwd" !== t.getAttribute("id");
                o && n ? t.setAttribute("inert", !0) : t.removeAttribute("inert")
            })
        },
        setA11yForClosedModal: function() {
            Array.prototype.slice.call(document.body.children).forEach(function(e) {
                null !== e.getAttribute("data-inert-before") ? (e.setAttribute("inert", !0),
                e.removeAttribute("data-inert-before")) : e.removeAttribute("inert")
            })
        },
        setInitialFocus: function() {
            var e = this
              , t = null
              , o = 0 === this.conf.$currentModalbox.find(".js-focusField").length
              , n = 0 === this.conf.$currentModalbox.filter("[aria-labelledby]").length;
            o && (this.conf.$currentModalbox.find("header h3").length > 0 && "" !== this.conf.$currentModalbox.find("header h3").text().trim() ? t = "header h3" : this.conf.$currentModalbox.find("h3").length > 0 && "" !== this.conf.$currentModalbox.find("h3").text().trim() ? t = "h3" : this.conf.$currentModalbox.find("header").length > 0 && "" !== this.conf.$currentModalbox.find("header").text().trim() ? t = "header" : this.conf.$currentModalbox.find("article").length > 0 && (t = "article"),
            n && null !== t ? this.conf.$currentModalbox.one("transitionend", function() {
                e.conf.$currentModalbox.find(t).attr("tabindex", "0").trigger("focus")
            }) : this.conf.$currentModalbox.one("transitionend", function() {
                jPar.util.setFocusOnFirstFocusableElement(e.conf.$currentModalbox.find("article *"))
            }))
        },
        setPreviousFocus: function() {
            var e = this;
            this.conf.$currentModalbox.one("transitionend", function() {
                e.conf.previousActiveElement.focus()
            })
        },
        hide: function(e) {
            var t = $j(".wdk-modalbox.is-open");
            if (t.length > 0) {
                var o = this;
                if (t.find(".layerInModalbox.is-open").length > 0)
                    jPar.wdk.modalbox.layerInModalbox.hide();
                else if (null === this.conf.onBeforeClose || !0 === this.conf.onBeforeClose()) {
                    var n = $j(".wdk-modalbox.is-open");
                    n.one("transitionend", function() {
                        $j("html").removeClass("has-modalboxOpen"),
                        o.moveModalboxDomToOriginalPosition(),
                        $j(".wdk-modalbox.is-open").removeClass("is-open transition-out"),
                        o.removeEventListener(),
                        window.setTimeout(function() {
                            window.scrollTo(0, o.conf.originalPageScrollPosition)
                        }, 1),
                        document.dispatchEvent(new CustomEvent("wdk:modalbox:isHidden",{
                            detail: {
                                $modalboxObj: n
                            }
                        }))
                    }),
                    n[0].removeAttribute("popover"),
                    n.removeClass("transition-in").addClass("transition-out"),
                    this.setA11yForClosedModal(),
                    this.setPreviousFocus(),
                    this.showCloseButtonInApps(),
                    (e || jPar.wdk.screensize.isBreakpoint(["S", "M"])) && n.trigger("transitionend"),
                    o.modalboxAbortController.abort()
                }
            }
        },
        closeCurrentModalbox: function() {
            $j(".wdk-modalbox.is-open").length > 0 && jPar.wdk.modalbox.hide(!0)
        },
        moveModalboxDomToBottom: function() {
            $j('<div class="modalboxPlaceholder"></div>').insertBefore(this.conf.$currentModalbox),
            this.conf.$currentModalbox.detach().appendTo("body")
        },
        moveModalboxDomToOriginalPosition: function() {
            this.conf.isAjaxModalbox ? ($j(".wdk-modalbox.is-open").empty(),
            $j(".wdk-modalbox.is-open").remove().insertAfter(".modalboxPlaceholder")) : $j(".wdk-modalbox.is-open").insertAfter(".modalboxPlaceholder"),
            $j(".modalboxPlaceholder").remove()
        },
        removeEventListener: function() {
            $j(document).off(".modalboxEvent"),
            $j(document).off("touchmove"),
            $j("body").off("touchstart", ".scrollable"),
            $j("body").off("touchmove", ".scrollable")
        },
        setCloseEvents: function() {
            var e, t = this;
            document.addEventListener("click", function(e) {
                var o = "#" + t.conf.$currentModalbox.attr("id") + " .js-closeModalbox";
                Array.from(document.querySelectorAll(o)).includes(e.target) && (e.preventDefault(),
                t.hide())
            }, {
                signal: this.modalboxAbortController.signal
            }),
            null === (e = this.conf.$currentModalbox[0].querySelector(".js-reloadPage")) || void 0 === e || e.addEventListener("click", function(e) {
                e.preventDefault(),
                e.stopPropagation(),
                e.stopImmediatePropagation(),
                document.location.reload()
            }, {
                signal: this.modalboxAbortController.signal
            }),
            !0 === this.conf.closeOnBgClick && document.addEventListener("mousedown", function(e) {
                e.target.matches(".wdk-modalbox .modalboxContent") || e.target.closest(".wdk-modalbox .modalboxContent") || t.hide()
            }, {
                signal: this.modalboxAbortController.signal
            }),
            !0 === this.conf.closeOnEsc && document.addEventListener("keyup", function(e) {
                "Escape" === e.key && t.hide()
            }, {
                signal: this.modalboxAbortController.signal
            })
        },
        showCloseButtonInApps: function() {
            var e, t;
            !1 === this.conf.$currentModalbox.hasClass("has-smallContent") && (void 0 !== (null === (e = window.webkit) || void 0 === e || null === (e = e.messageHandlers) || void 0 === e ? void 0 : e.showCloseButton) && window.webkit.messageHandlers.showCloseButton.postMessage(!0),
            void 0 !== (null === (t = window.Android) || void 0 === t ? void 0 : t.showCloseButton) && Android.showCloseButton())
        },
        hideCloseButtonInApps: function() {
            var e, t;
            !1 === this.conf.$currentModalbox.hasClass("has-smallContent") && (void 0 !== (null === (e = window.webkit) || void 0 === e || null === (e = e.messageHandlers) || void 0 === e ? void 0 : e.hideCloseButton) && window.webkit.messageHandlers.hideCloseButton.postMessage(!0),
            void 0 !== (null === (t = window.Android) || void 0 === t ? void 0 : t.hideCloseButton) && Android.hideCloseButton())
        },
        handleNetworkErrors: function(e, t, o, n) {
            this.conf.jqxhr.fail(function() {
                "timeout" === t ? document.querySelector("wdk-snackbar#timeoutNotification").show() : (jPar.wdk.modalbox.show({
                    modalboxId: "errorModalbox500"
                }),
                0 !== e.status && jPar.util.log.error(n.attr("id") + " on Page " + $j("body").attr("id") + " reported " + e.status + " - " + o, "Error opening wdkmodalbox"))
            })
        },
        handleSessionExpired: function(e) {
            if (!1 === jPar.util.network.hasValidSessionAndCsrfToken(e))
                throw jPar.util.network.reloadIfResponseInvalid(e),
                new Error("wdkmodalbox: Session expired")
        },
        layerInModalbox: {
            previousActiveElementInModal: null,
            show: function(e) {
                var t, o = this, n = document.querySelector(".wdk-modalbox.is-open " + e);
                null !== n && (this.previousActiveElementInModal = document.activeElement,
                n.classList.add("is-open"),
                null === (t = n.querySelector("header h3")) || void 0 === t || t.focus(),
                $j(".wdk-modalbox.is-open .js-closeLayerInLayer").on("click", function(e) {
                    e.preventDefault(),
                    o.hide()
                }))
            },
            hide: function() {
                var e = document.querySelector(".wdk-modalbox.is-open .layerInModalbox.is-open");
                null !== e && (e.classList.remove("is-open"),
                this.previousActiveElementInModal.focus(),
                $j(".wdk-modalbox.is-open .js-closeLayerInLayer").off("click"))
            }
        }
    }
}),
jPar.wdk = jPar.wdk || {},
$j.extend(!0, jPar.wdk, {
    hintbox: {
        addClassNoDisplay: function(e) {
            e.addClass("noDisplay"),
            e.removeAttr("role"),
            e.attr("aria-hidden", "true"),
            e.attr("inert", "true")
        },
        removeClassNoDisplay: function(e) {
            e.removeClass("noDisplay"),
            e.attr("role", "alert"),
            e.attr("aria-hidden", "false"),
            e.removeAttr("inert")
        },
        addClassIsVisible: function(e) {
            e.addClass("is-visible"),
            e.attr("role", "alert"),
            e.attr("aria-hidden", "false"),
            e.removeAttr("inert")
        },
        removeClassIsVisible: function(e) {
            e.removeClass("is-visible"),
            e.removeAttr("role"),
            e.attr("aria-hidden", "true"),
            e.attr("inert", "true")
        }
    }
}),
jPar.wdk = jPar.wdk || {},
$j.extend(!0, jPar.wdk, {
    forms: {
        props: {
            selector: ""
        },
        init: function(e) {
            this.textElement.init(e)
        },
        showError: function(e) {
            if (e instanceof jQuery) {
                e.addClass("is-visible"),
                e.attr("role", "alert"),
                e.attr("aria-hidden", "false"),
                e.removeAttr("inert");
                var t = e.parents(".wdk-form-text, .wdk-form-toggles, .wdk-form-dropdown, .wdk-form-customDropdown");
                t.length > 0 && (t.addClass("has-error"),
                t.find("input,textarea").attr("aria-invalid", "true"),
                t.find("input,textarea").attr("aria-describedby", e.attr("id")))
            } else if (null !== e && void 0 !== e.classList) {
                e.classList.add("is-visible"),
                e.setAttribute("role", "alert"),
                e.setAttribute("aria-hidden", "false"),
                e.removeAttribute("inert");
                var o = e.closest(".wdk-form-text, .wdk-form-toggles, .wdk-form-dropdown, .wdk-form-customDropdown");
                null !== o && (o.classList.add("has-error"),
                o.querySelector("input,textarea,select").setAttribute("aria-invalid", "true"),
                o.querySelector("input,textarea,select").setAttribute("aria-describedby", e.getAttribute("id")))
            }
        },
        hideError: function(e) {
            if (e instanceof jQuery) {
                e.removeClass("is-visible"),
                e.removeAttr("role"),
                e.attr("aria-hidden", "true"),
                e.attr("inert", "true");
                var t = e.parents(".wdk-form-text, .wdk-form-toggles, .wdk-form-dropdown, .wdk-form-customDropdown");
                0 === t.find(".error.is-visible").length && (t.removeClass("has-error"),
                t.find("input,textarea").removeAttr("aria-invalid", "false"),
                t.find("input,textarea").removeAttr("aria-describedby"))
            } else if (null !== e && void 0 !== e.classList) {
                e.classList.remove("is-visible"),
                e.removeAttribute("role"),
                e.setAttribute("aria-hidden", "true"),
                e.setAttribute("inert", "true");
                var o = e.closest(".wdk-form-text, .wdk-form-toggles, .wdk-form-dropdown, .wdk-form-customDropdown");
                if (null !== o && null === o.querySelector(".error.is-visible"))
                    o.classList.remove("has-error"),
                    o.querySelectorAll("input,textarea,select").forEach(function(e) {
                        e.removeAttribute("aria-invalid"),
                        e.removeAttribute("aria-describedby")
                    })
            }
        },
        hasVisibleErrors: function(e) {
            if (e instanceof jQuery)
                return e.find('.wdk-styledHintBox[class*=" t-error"].is-visible').length > 0;
            if (null !== e && void 0 !== e.classList) {
                var t = null !== e.querySelector("wdk-hintbox-error[show]")
                  , o = e.querySelectorAll('.wdk-styledHintBox[class*=" t-error"].is-visible').length > 0;
                return t || o
            }
        },
        textElement: {
            defaultSelector: ".wdk-form-text",
            selector: "",
            init: function(e) {
                this.setSelectorProperty(e),
                this.initCharCounter()
            },
            setSelectorProperty: function(e) {
                this.selector = void 0 !== e ? e + " " + this.defaultSelector : this.defaultSelector
            },
            initCharCounter: function() {
                var e = this
                  , t = $j(this.selector).find("textarea, input");
                t.on("keyup blur change paste cut", function() {
                    var t = $j(this);
                    window.setTimeout(function() {
                        e.updateCounter(t)
                    }, 10)
                }),
                t.each(function() {
                    e.updateCounter($j(this))
                })
            },
            updateCounter: function(e) {
                if (void 0 !== e.attr("maxlength")) {
                    var t = e.attr("maxlength")
                      , o = t / 100 * 80
                      , n = e.val().length
                      , r = e.parents(this.selector)
                      , i = r.find(".limitReachedInfo");
                    r.find(".charCounter span").text(n),
                    n >= o ? r.addClass("is-nearLimit") : r.removeClass("is-nearLimit"),
                    n >= t ? (r.addClass("is-limitReached"),
                    i.length > 0 && i.text(i.data("alertText"))) : (r.removeClass("is-limitReached"),
                    i.text(""))
                }
            }
        },
        customDropdown: {
            callback: null,
            isAnimating: !1,
            init: function(e, t) {
                var o = this;
                this.callback = t,
                $j(e).length > 0 && ($j(e).find(".wdk-form-customDropdown a").off("click keydown").on("click keydown", function(e) {
                    if (jPar.util.validate.isMouseclickEnterOrSpaceKey(e.keyCode)) {
                        if (!0 === o.isAnimating)
                            return;
                        o.isAnimating = !0,
                        e.preventDefault(),
                        o.toggle(e),
                        setTimeout(function() {
                            o.isAnimating = !1
                        }, 280)
                    }
                }),
                $j(e).find(".wdk-form-customDropdown li").off("click keydown").on("click keydown", function(e) {
                    jPar.util.validate.isMouseclickEnterOrSpaceKey(e.keyCode) && (e.preventDefault(),
                    o.selectCurrentElement(e))
                }))
            },
            toggle: function(e) {
                var t = $j(e.target).parents(".wdk-form-customDropdown")
                  , o = t.find(".selection");
                t.hasClass("is-open") ? t.removeClass("is-open") : t.addClass("is-open"),
                o.slideToggle("fast")
            },
            selectCurrentElement: function(e) {
                var t = $j(e.target);
                t.parents(".wdk-form-customDropdown").find(".selection").find("li").removeClass("selectedListItem"),
                t.addClass("selectedListItem"),
                t.parents(".wdk-form-customDropdown").find("a").html(t.html()),
                this.toggle(e),
                "function" == typeof this.callback && (t.parents(".wdk-form-customDropdown").find('input[name="selectedItem"]').val(t.data("value")),
                this.callback(e))
            }
        },
        autofillDropdown: {
            callback: null,
            initList: function(e, t) {
                var o = this;
                this.callback = t,
                $j(e).length > 0 && $j(e).find(".autofillDropdownDatalist li:not(.noResult)").off("click").on("click", function(e) {
                    e.preventDefault(),
                    o.selectCurrentElement(e)
                })
            },
            initTextfield: function(e, t) {
                var o = this
                  , n = 1;
                this.callback = t,
                this.preventEnterToSubmitForm(e),
                $j(e).find(".js-autofillDropdownTextfield").on("click", function(e) {
                    "function" == typeof o.callback && t($j(e.target))
                }),
                $j(e).find(".js-autofillDropdownTextfield").on("keyup", function(r) {
                    r.preventDefault();
                    var i = 38 === r.keyCode
                      , a = 40 === r.keyCode
                      , s = 13 === r.keyCode
                      , l = $j(e).find(".autofillDropdownDatalist .selection li.isKeyboardSelected");
                    if (i || a) {
                        var c = $j(e).find(".autofillDropdownDatalist .selection li").length;
                        if (c > 0) {
                            n = l.index() + 1;
                            var d = a && n < c;
                            i && n > 1 ? n -= 1 : d && (n += 1),
                            l.removeClass("isKeyboardSelected"),
                            $j(e).find(".autofillDropdownDatalist .selection li:nth-child(".concat(n, ")")).addClass("isKeyboardSelected"),
                            $j(e).find(".js-autofillDropdownTextfield").attr("aria-activedescendant", "autocompleteOption" + n),
                            $j(e).find(".isKeyboardSelected").length && $j(e).find(".isKeyboardSelected")[0].scrollIntoView(!0)
                        }
                    } else
                        s && 1 === l.length ? l.trigger("click") : "function" == typeof o.callback && t($j(r.target))
                })
            },
            preventEnterToSubmitForm: function(e) {
                $j(e).find(".js-autofillDropdownTextfield").on("keydown", function(e) {
                    13 === e.keyCode && e.preventDefault()
                })
            },
            open: function(e) {
                var t = e.find(".selection");
                e.parents(".row").find(".js-autofillDropdownTextfield").attr("aria-expanded", "true"),
                e.addClass("is-open"),
                t.slideDown("fast")
            },
            close: function(e) {
                var t = e.find(".selection");
                e.parents(".row").find(".js-autofillDropdownTextfield").attr("aria-expanded", "false"),
                e.removeClass("is-open"),
                t.slideUp("fast")
            },
            selectCurrentElement: function(e) {
                var t = $j(e.target);
                this.close(t.parents(".wdk-form-autofillDropdown .autofillDropdownDatalist"));
                var o = t.text();
                t.parents(".wdk-form-autofillDropdown").find(".js-autofillDropdownTextfield").val(o),
                "function" == typeof this.callback && this.callback(t)
            }
        }
    }
}),
jPar.wdk = jPar.wdk || {},
$j.extend(!0, jPar.wdk, {
    loadingIndicator: {
        indicatorTimer: null,
        show: function(e) {
            this.stopTimer(),
            null !== e && (e.length > 1 ? (e instanceof jQuery && (e = e.toArray()),
            e.forEach(function(e) {
                e.classList.add("disabled"),
                e.disabled = !0,
                this.indicatorTimer = window.setTimeout(function() {
                    e.classList.add("is-loading")
                }, 1500)
            })) : (e instanceof jQuery && (e = e[0]),
            void 0 !== e && (e.classList.add("disabled"),
            e.disabled = !0,
            this.indicatorTimer = window.setTimeout(function() {
                e.classList.add("is-loading")
            }, 1500))))
        },
        hide: function(e) {
            this.stopTimer(),
            null !== e && (e.length > 1 ? (e instanceof jQuery && (e = e.toArray()),
            e.forEach(function(e) {
                e.classList.remove("disabled", "is-loading"),
                e.disabled = !1
            })) : (e instanceof jQuery && (e = e[0]),
            void 0 !== e && (e.classList.remove("disabled", "is-loading"),
            e.disabled = !1)))
        },
        stopTimer: function() {
            window.clearTimeout(this.indicatorTimer)
        }
    }
}),
jPar.wdk = jPar.wdk || {},
deepMerge(!0, jPar.wdk, {
    buttonWithLottie: {
        show: function(e) {
            var t, o;
            e.querySelector(".wdk-icon").classList.add("noDisplay"),
            e.querySelector("wdk-lottie-animation").classList.remove("noDisplay"),
            null === (t = e.querySelector("wdk-lottie-animation").myAnimation) || void 0 === t || t.play(),
            null === (o = e.querySelector("wdk-lottie-animation").myAnimation) || void 0 === o || o.addEventListener("complete", function() {
                e.querySelector(".wdk-icon").classList.remove("noDisplay"),
                window.setTimeout(function() {
                    var t;
                    e.querySelector("wdk-lottie-animation").classList.add("noDisplay"),
                    null === (t = e.querySelector("wdk-lottie-animation").myAnimation) || void 0 === t || t.stop()
                }, 200)
            })
        },
        showIfPossible: function(e) {
            e.classList.contains("t-lottieAnimation") && this.show(e)
        }
    }
}),
jPar.wdk = jPar.wdk || {},
$j.extend(!0, jPar.wdk, {
    passwordRestrictionBox: {
        conf: {
            boxName: "",
            emailNoticeInputs: "",
            passwordInputId: ""
        },
        init: function() {
            var e = "input.checkPassword";
            this.conf.boxName = "#wdk-passwordRestrictionBox",
            this.conf.emailNoticeInputs = "#regFormEmail",
            this.conf.passwordInputId = "#" + $j(e + "[type=password]:first").attr("id");
            var t = this;
            !1 === $j(this.conf.boxName).data("showAlways") && ($j(e + "[type=password]").on("focus", function() {
                t.showRestrictionBox()
            }),
            $j(e + "[type=password]").on("blur", function() {
                t.hideRestrictionBox()
            })),
            $j(e).on("keyup change", function() {
                t.checkPasswordRestrictions()
            })
        },
        showRestrictionBox: function() {
            this.checkPasswordRestrictions(),
            $j(this.conf.boxName).fadeIn(400)
        },
        hideRestrictionBox: function() {
            $j(this.conf.boxName).fadeOut(400)
        },
        checkPasswordRestrictions: function() {
            this.checkLength(),
            this.checkLettersAndNumbers(),
            $j("#partOfEmail").length && this.checkPartOfEmail(),
            $j(this.conf.boxName + " ul li").length === $j(this.conf.boxName + " ul li.success").length ? $j(this.conf.boxName).addClass("success") : $j(this.conf.boxName).removeClass("success")
        },
        checkLength: function() {
            $j(this.conf.passwordInputId).val().length >= 8 ? this.setRestrictionToSuccess("#minCharacters") : this.setRestrictionToError("#minCharacters")
        },
        checkLettersAndNumbers: function() {
            var e = $j(this.conf.passwordInputId).val()
              , t = /.*[a-zA-Z]+.*/g.test(e)
              , o = /.*[0-9]+.*/g.test(e)
              , n = /.*[^a-zA-Z0-9\s]+.*/g.test(e);
            t && o || t && n ? this.setRestrictionToSuccess("#lettersAndNumbers") : this.setRestrictionToError("#lettersAndNumbers")
        },
        checkPartOfEmail: function() {
            var e = $j(this.conf.emailNoticeInputs).val().split("@")[0]
              , t = $j(this.conf.passwordInputId).val().length > 0
              , o = $j(this.conf.passwordInputId).val().indexOf(e) < 0;
            t && ("" === e || o) ? this.setRestrictionToSuccess("#partOfEmail") : this.setRestrictionToError("#partOfEmail")
        },
        setRestrictionToSuccess: function(e) {
            $j(e).removeClass("error"),
            $j(e).addClass("success")
        },
        setRestrictionToError: function(e) {
            $j(e).removeClass("success"),
            $j(e).addClass("error")
        },
        isPasswordValid: function() {
            return $j(this.conf.boxName + " ul li").length === $j(this.conf.boxName + " ul li.success").length
        }
    }
}),
jPar.loginAndRegistration = jPar.loginAndRegistration || {},
$j(function() {
    try {
        jPar.Tracking.init()
    } catch (e) {
        jPar.util.log.error(e.stack, "jPar.loginAndRegistration: Init external libs failed")
    }
    "loginPage" === document.body.id && jPar.loginAndRegistration.loginPage.init(),
    "verificationPage" === document.body.id && jPar.loginAndRegistration.verificationPage.init(),
    "registrationPage" === document.body.id && jPar.loginAndRegistration.registrationPage.init(),
    "passwordPage" === document.body.id && jPar.loginAndRegistration.passwordPage.init(),
    document.querySelector("#genderSelectionPage") && (document.body.classList.contains("isNewGenderScreenEnabled") ? jPar.loginAndRegistration.genderSelectPage.init() : jPar.loginAndRegistration.genderSelectPage_deprecated.init()),
    document.querySelector("#searchGenderSelectionPage") && jPar.loginAndRegistration.searchGenderSelectPage.init();
    try {
        jPar.util.pwa.init(),
        jPar.wdk.screensize.setScreenSizeCookie(),
        jPar.util.timezone.setTimezone()
    } catch (e) {
        jPar.util.log.error(e.stack, "jPar.loginAndRegistration: low prio failed")
    }
}),
jPar.loginAndRegistration.util = jPar.loginAndRegistration.util || {},
$j.extend(!0, jPar.loginAndRegistration, {
    util: {
        showLoadingAnimation: function() {
            $j("#wrapperForLoadingAnimation").addClass("hidden"),
            $j("#loadingText").addClass("is-visible"),
            $j("#regFormSubmit").attr("disabled", !0)
        },
        hideLoadingAnimation: function() {
            $j(".directSocialSignOn").removeClass("directSocialSignOn"),
            $j("#wrapperForLoadingAnimation").removeClass("hidden"),
            $j("#loadingText").removeClass("is-visible"),
            $j("#regFormSubmit").attr("disabled", !1)
        }
    }
}),
jPar.loginAndRegistration = jPar.loginAndRegistration || {},
$j.extend(!0, jPar.loginAndRegistration, {
    genderSelectPage_deprecated: {
        init: function() {
            var e = this;
            jPar.wdk.forms.init(),
            this.genderSelectBox.init(),
            document.querySelector("#formGenderSelection").addEventListener("submit", function(t) {
                e.validate.validateForm(),
                jPar.wdk.forms.hasVisibleErrors(t.target) && t.preventDefault()
            })
        },
        genderSelectBox: {
            hasEsSex: !0,
            init: function() {
                var e = this;
                this.hasEsSex = null !== document.querySelector("#essexRow"),
                document.querySelectorAll("#formGenderSelection #mysexRow input[type=radio]").forEach(function(t) {
                    t.addEventListener("click", function(t) {
                        e.mySexClick(t)
                    })
                }),
                document.querySelectorAll("#formGenderSelection #essexRow input[type=checkbox]").forEach(function(t) {
                    t.addEventListener("click", function(t) {
                        e.esSexClick(t)
                    })
                })
            },
            mySexClick: function(e) {
                this.preselectEsSex(e.target),
                this.handleHideError()
            },
            esSexClick: function(e) {
                e.preventDefault(),
                e.stopPropagation(),
                window.setTimeout(function() {
                    if (!1 === e.target.checked)
                        e.target.checked = !0;
                    else {
                        var t = "essexM" === e.target.id ? "essexW" : "essexM";
                        !0 === document.querySelector("#formGenderSelection #essexRow #" + t).checked && (e.target.checked = !1)
                    }
                }, 0),
                this.preselectMySex(e.target),
                this.syncEsSexForSubmit(),
                this.handleHideError()
            },
            preselectMySex: function(e) {
                jPar.wdk.brands.forBrands(["ps", "ep"]) && (0 === document.querySelectorAll("#formGenderSelection #mysexRow [type=radio]:checked").length && ("0" === e.value ? document.querySelector("#formGenderSelection #mysexW").click() : document.querySelector("#formGenderSelection #mysexM").click()))
            },
            preselectEsSex: function(e) {
                jPar.wdk.brands.forBrands(["ps", "ep"]) && this.hasEsSex && (0 === document.querySelectorAll("#formGenderSelection #essexRow [type=checkbox]:checked").length && ("0" === e.value ? document.querySelector("#formGenderSelection #essexW").click() : document.querySelector("#formGenderSelection #essexM").click()))
            },
            syncEsSexForSubmit: function() {
                var e = null !== document.querySelector("#formGenderSelection #essexRow #essexW:checked")
                  , t = null !== document.querySelector("#formGenderSelection #essexRow #essexM:checked");
                e && t ? document.querySelector("#formGenderSelection #hiddenEssex").value = "3" : e ? document.querySelector("#formGenderSelection #hiddenEssex").value = "1" : t && (document.querySelector("#formGenderSelection #hiddenEssex").value = "0")
            },
            handleHideError: function() {
                var e, t = 1 === document.querySelectorAll('#formGenderSelection input[name="mysex"]:checked').length;
                e = !this.hasEsSex || "" !== document.querySelector('#formGenderSelection input[name="essex"]').value,
                t && e && jPar.wdk.forms.hideError(document.querySelector("#formGenderSelection  #regsexError"))
            }
        },
        validate: {
            validateForm: function() {
                this.validateSex()
            },
            validateSex: function() {
                jPar.wdk.forms.showError(document.querySelector("#regsexError"));
                var e, t = 0 === document.querySelectorAll('#formGenderSelection input[name="mysex"]:checked').length;
                e = !!jPar.loginAndRegistration.genderSelectPage_deprecated.genderSelectBox.hasEsSex && "" === document.querySelector('#formGenderSelection input[name="essex"]').value,
                t || e ? jPar.wdk.forms.showError(document.querySelector("#regsexError")) : jPar.wdk.forms.hideError(document.querySelector("#regsexError"))
            }
        }
    }
}),
jPar.loginAndRegistration = jPar.loginAndRegistration || {},
$j.extend(!0, jPar.loginAndRegistration, {
    genderSelectPage: {
        initialValueMainGender: null,
        init: function() {
            var e, t = this;
            this.tracking.trackPageView(),
            this.renderInitialState(),
            document.querySelectorAll('#changeGenderForm input[name="gender"]').forEach(function(e) {
                e.addEventListener("click", function(e) {
                    var o = e.currentTarget.value;
                    o !== t.initialValueMainGender && (t.selectMainGender(),
                    t.tracking.trackMainGenderChange(o, t.initialValueMainGender),
                    t.initialValueMainGender = o)
                })
            }),
            this.initialValueMainGender = null === (e = document.querySelector("#changeGenderForm input:checked")) || void 0 === e ? void 0 : e.value
        },
        renderInitialState: function() {
            document.querySelector('#changeGenderForm input[name="gender"]:checked') && (document.querySelector("#nextButton").disabled = !1)
        },
        selectMainGender: function() {
            document.querySelector("#nextButton").disabled = !1
        },
        tracking: {
            trackPageView: function() {
                jPar.util.log.bigData({
                    category: "registration",
                    subcategory: "own_gender_select_screen",
                    action: "screen_view"
                })
            },
            trackMainGenderChange: function(e, t) {
                var o = function(e) {
                    switch (e) {
                    case "MALE":
                        return "button_man";
                    case "FEMALE":
                        return "button_woman";
                    case "DIVERSE":
                        return "button_nonbinary"
                    }
                };
                jPar.util.log.bigData({
                    category: "registration",
                    subcategory: "own_gender_select_screen",
                    action: "click",
                    targetId: "gender",
                    cd1: o(t) || "",
                    cd2: o(e)
                })
            }
        }
    }
}),
jPar.loginAndRegistration = jPar.loginAndRegistration || {},
$j.extend(!0, jPar.loginAndRegistration, {
    loginPage: {
        init: function() {
            jPar.wdk.forms.init(),
            this.validate.init(),
            this.socialSignOn.init(),
            this.stayLoggedInInfo(),
            this.accessTokenSubmit();
            try {
                this.loginDelay()
            } catch (e) {
                jPar.util.log.error(e.stack, "jPar.loginAndRegistration.loginPage.init: low prio failed")
            }
            $j("#verificationCodeFailedModal").length > 0 && jPar.wdk.modalbox.show({
                modalboxId: "verificationCodeFailedModal"
            }),
            parent.postMessage({
                domLoaded: "loginPage"
            }, window.location.origin)
        },
        emailPermissionRetries: 0,
        validate: {
            init: function() {
                try {
                    var e = this;
                    $j("#loginFormSubmit").on("click", function(t) {
                        e.submitForm(t)
                    }),
                    $j("#loginFormEmail").on("change", function(t) {
                        jPar.util.validate.isNotTabOrShiftKey(t.keyCode) && "" !== $j(this).val() && e.validateEmail()
                    }),
                    $j("#loginFormPasswort").on("keyup change", function(t) {
                        jPar.util.validate.isNotTabOrShiftKey(t.keyCode) && e.validatePassword()
                    })
                } catch (e) {
                    jPar.util.log.error(e.stack, "jPar.loginAndRegistration.loginPage.validate.init")
                }
            },
            validateEmail: function() {
                var e = $j("#emailRow")
                  , t = e.find("#loginFormEmailError")
                  , o = e.find("#loginFormEmail")
                  , n = jPar.util.validate.textfieldIsEmpty(o);
                !1 === jPar.util.validate.isEmailAddress(o) || n ? jPar.wdk.forms.showError(t) : jPar.wdk.forms.hideError(t)
            },
            validatePassword: function() {
                var e = $j("#passwordRow")
                  , t = e.find("#loginFormPasswordError");
                jPar.util.validate.textfieldIsEmpty(e.find("#loginFormPasswort")) ? jPar.wdk.forms.showError(t) : jPar.wdk.forms.hideError(t)
            },
            validateCompleteForm: function() {
                jPar.wdk.forms.hideError($j("#loginError2")),
                this.validateEmail(),
                this.validatePassword()
            },
            hasValidationErrors: function() {
                return jPar.wdk.forms.hasVisibleErrors($j("#loginForm"))
            },
            submitForm: function(e) {
                this.validateCompleteForm(),
                this.hasValidationErrors() ? e.preventDefault() : jPar.loginAndRegistration.util.showLoadingAnimation()
            }
        },
        loginDelay: function() {
            var e = $j("#loadingText").data("logindelay");
            void 0 !== e && window.setTimeout(function() {
                jPar.loginAndRegistration.util.hideLoadingAnimation()
            }, e)
        },
        stayLoggedInInfo: function() {
            $j(".js-showStayLoggedInModal").on("click", function(e) {
                e.preventDefault(),
                jPar.wdk.modalbox.show({
                    modalboxId: "stayLoggedInModal"
                })
            })
        },
        accessTokenSubmit: function() {
            null !== document.querySelector("body.accessTokenPage") && document.getElementById("loginForm").submit()
        }
    }
}),
jPar.loginAndRegistration.loginPage = jPar.loginAndRegistration.loginPage || {},
deepMerge(!0, jPar.loginAndRegistration.loginPage, {
    socialSignOn: {
        init: function() {
            var e = null !== document.querySelector("peg-apple-social-button")
              , t = null !== document.querySelector("peg-google-social-button");
            e && this.apple.checkAutosubmit(),
            t && this.google.init()
        },
        google: {
            init: function() {
                this.error.showGoogleBackendErrorModal(),
                this.error.showErrorNoEMailAdressModal(),
                this.checkAutosubmit()
            },
            checkAutosubmit: function() {
                var e = void 0 !== jPar.util.getGetParamFromUrl("scope")
                  , t = void 0 === jPar.util.getGetParamFromUrl("error")
                  , o = void 0 !== jPar.util.getGetParamFromUrl("code");
                if (e && t && o) {
                    var n = document.querySelector("#loginForm");
                    this.addHiddenInputfields(n),
                    n.submit()
                }
            },
            addHiddenInputfields: function(e) {
                var t = document.createElement("input");
                t.type = "hidden",
                t.name = "socialProvider",
                t.value = "GOOGLE";
                var o = document.createElement("input");
                o.type = "hidden",
                o.name = "socialAccessToken",
                o.value = jPar.util.getGetParamFromUrl("code"),
                e.appendChild(t),
                e.appendChild(o)
            },
            error: {
                showGoogleBackendErrorModal: function() {
                    null !== document.querySelector("#googleBackendErrorModal") && jPar.wdk.modalbox.show({
                        modalboxId: "googleBackendErrorModal"
                    })
                },
                showErrorNoEMailAdressModal: function() {
                    null !== document.querySelector("#googleNoEMailAdress") && jPar.wdk.modalbox.show({
                        modalboxId: "googleNoEMailAdress"
                    })
                }
            }
        },
        apple: {
            checkAutosubmit: function() {
                var e = "APPLE" === jPar.util.getGetParamFromUrl("socialProvider")
                  , t = void 0 === jPar.util.getGetParamFromUrl("error");
                this.error.showAppleBackendErrorModal(),
                e && t && (this.localFormPreparation(),
                jPar.loginAndRegistration.util.showLoadingAnimation(),
                document.querySelector("#loginForm").submit())
            },
            localFormPreparation: function() {
                var e = jPar.wdk.security.escapeStringForHtml(jPar.util.getGetParamFromUrl("id_token"))
                  , t = jPar.wdk.security.escapeStringForHtml(jPar.util.getGetParamFromUrl("code"))
                  , o = jPar.util.getGetParamFromUrl("user")
                  , n = document.createElement("template")
                  , r = '\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<input type="hidden" name="socialProvider" value="APPLE">\n\t\t\t\t\t\t<input type="hidden" name="id_token" value="'.concat(e, '">\n\t\t\t\t\t\t<input type="hidden" name="code" value="').concat(t, '">\n\t\t\t\t\t\t<input type="hidden" name="user" value="').concat(o, '">\n\t\t\t\t\t</div>\n\t\t\t\t');
                n.innerHTML = jPar.wdk.security.sanitizeEvilHtml(r);
                var i = n.content.firstElementChild;
                document.querySelector("#loginForm").appendChild(i)
            },
            error: {
                showAppleBackendErrorModal: function() {
                    null !== document.querySelector("#appleBackendErrorModal") && jPar.wdk.modalbox.show({
                        modalboxId: "appleBackendErrorModal"
                    })
                }
            }
        }
    }
}),
jPar.loginAndRegistration = jPar.loginAndRegistration || {},
$j.extend(!0, jPar.loginAndRegistration, {
    countdown: {
        start: function(e, t, o, n) {
            var r = this;
            return o(this.getRemainingTime(e)),
            setInterval(function() {
                var t = r.getRemainingTime(e);
                o(t),
                t.total <= 0 && n()
            }, t)
        },
        stop: function(e) {
            clearInterval(e)
        },
        getRemainingTime: function(e) {
            var t = Date.parse(new Date(e)) - (new Date).getTime()
              , o = Math.floor(t / 1e3 % 60)
              , n = Math.floor(t / 1e3 / 60 % 60)
              , r = Math.floor(t / 36e5 % 24);
            return {
                total: t,
                days: Math.floor(t / 864e5),
                hours: r,
                minutes: n,
                seconds: o
            }
        }
    }
}),
jPar.loginAndRegistration = jPar.loginAndRegistration || {},
deepMerge(!0, jPar.loginAndRegistration, {
    passwordPage: {
        init: function() {
            var e = this;
            jPar.wdk.forms.init(),
            this.trackingInit();
            try {
                jPar.wdk.passwordRestrictionBox.init(),
                document.querySelector("#passwordForm").addEventListener("submit", function(t) {
                    e.validatePassword(),
                    jPar.wdk.forms.hasVisibleErrors(document.querySelector("#passwordForm")) && t.preventDefault()
                })
            } catch (e) {
                jPar.util.log.error(e.stack, "jPar.loginAndRegistration.passwordPage.init: low prio failed")
            }
        },
        validatePassword: function() {
            jPar.wdk.passwordRestrictionBox.checkPasswordRestrictions();
            var e = document.querySelector("#passwordEmptyError")
              , t = document.querySelector("#passwordNotValidError");
            jPar.util.validate.textfieldIsEmpty(document.querySelector("#passFormPassword")) ? (jPar.wdk.forms.showError(e),
            jPar.wdk.forms.hideError(t)) : !1 === jPar.wdk.passwordRestrictionBox.isPasswordValid() ? (jPar.wdk.forms.showError(t),
            jPar.wdk.forms.hideError(e)) : (jPar.wdk.forms.hideError(t),
            jPar.wdk.forms.hideError(e))
        },
        trackingInit: function() {
            jPar.util.log.bigData({
                category: "registration",
                subcategory: "password_start_screen",
                action: "view"
            }),
            document.querySelector("#passwordForm").addEventListener("submit", function() {
                jPar.util.log.bigData({
                    category: "registration",
                    subcategory: "password_start_screen",
                    action: "submit",
                    targetId: "button_password"
                })
            })
        }
    }
}),
jPar.loginAndRegistration = jPar.loginAndRegistration || {},
$j.extend(!0, jPar.loginAndRegistration, {
    registrationPage: {
        conf: {
            emailNoticeInput: "#regFormEmail",
            emailNoticeBox: "#emailNoticeBox"
        },
        emailPermissionRetries: 0,
        init: function() {
            this.validate.init(),
            this.genderSelectBox.init(),
            jPar.wdk.forms.init(),
            this.socialSignOn.init(),
            this.trackingInit();
            try {
                this.emailNoticeBox(),
                jPar.wdk.passwordRestrictionBox.init(),
                this.openDuplicateEmailModal()
            } catch (e) {
                jPar.util.log.error(e.stack, "jPar.loginAndRegistration.registrationPage.init: low prio failed")
            }
        },
        openDuplicateEmailModal: function() {
            $j("#duplicateEmail").length > 0 && jPar.wdk.modalbox.show({
                modalboxId: "duplicateEmail"
            })
        },
        genderSelectBox: {
            init: function() {
                var e = this;
                document.querySelectorAll("#formRegistration #mysexRow input[type=radio]").forEach(function(t) {
                    t.addEventListener("click", function(t) {
                        e.mySexClick(t)
                    })
                }),
                document.querySelectorAll("#formRegistration #essexRow input[type=checkbox]").forEach(function(t) {
                    t.addEventListener("click", function(t) {
                        e.esSexClick(t)
                    })
                })
            },
            mySexClick: function(e) {
                document.querySelectorAll("#formRegistration input[type=radio]").forEach(function(e) {
                    e.closest("label").classList.remove("selected")
                }),
                e.target.closest("label").classList.add("selected"),
                this.preselectEsSex(e.target),
                this.handleHideError()
            },
            esSexClick: function(e) {
                e.preventDefault(),
                e.stopPropagation(),
                window.setTimeout(function() {
                    if (!1 === e.target.checked)
                        e.target.checked = !0,
                        e.target.closest("label").classList.add("selected");
                    else {
                        var t = "essexM" === e.target.id ? "essexW" : "essexM";
                        !0 === document.querySelector("#essexRow #" + t).checked && (e.target.checked = !1,
                        e.target.closest("label").classList.remove("selected"))
                    }
                }, 0),
                this.preselectMySex(e.target),
                this.syncEsSexForSubmit(),
                this.handleHideError()
            },
            preselectMySex: function(e) {
                if (jPar.wdk.brands.forBrands(["ps", "ep"]) && 0 === document.querySelectorAll("#formRegistration #mysexRow [type=radio]:checked").length) {
                    var t = e.value
                      , o = "1" === t && null !== document.querySelector("#formRegistration.gay")
                      , n = "0" === t && null !== document.querySelector("#formRegistration.hetero");
                    o || n ? document.querySelector("#formRegistration #mysexW").click() : document.querySelector("#formRegistration #mysexM").click()
                }
            },
            preselectEsSex: function(e) {
                if (jPar.wdk.brands.forBrands(["ps", "ep"]) && 0 === document.querySelectorAll("#formRegistration #essexRow [type=checkbox]:checked").length) {
                    var t = e.value
                      , o = "1" === t && null !== document.querySelector("#formRegistration.gay")
                      , n = "0" === t && null !== document.querySelector("#formRegistration.hetero");
                    o || n ? document.querySelector("#formRegistration #essexW").click() : document.querySelector("#formRegistration #essexM").click()
                }
            },
            syncEsSexForSubmit: function() {
                var e = null !== document.querySelector("#formRegistration #essexRow #essexW:checked")
                  , t = null !== document.querySelector("#formRegistration #essexRow #essexM:checked");
                e && t ? document.querySelector("#hiddenEssex").value = "3" : e ? document.querySelector("#hiddenEssex").value = "1" : t && (document.querySelector("#hiddenEssex").value = "0")
            },
            handleHideError: function() {
                var e = 1 === document.querySelectorAll("#formRegistration #mysexRow [type=radio]:checked").length
                  , t = document.querySelectorAll("#formRegistration #essexRow [type=checkbox]:checked").length >= 1;
                e && t && jPar.wdk.forms.hideError($j("#regsexError"))
            }
        },
        emailNoticeBox: function() {
            var e = this;
            $j(e.conf.emailNoticeInput).on("focus", function() {
                $j(e.conf.emailNoticeBox).fadeIn(400)
            }),
            $j(e.conf.emailNoticeInput).on("blur", function() {
                $j(e.conf.emailNoticeBox).fadeOut(400)
            })
        },
        trackingInit: function() {
            jPar.util.log.bigData({
                category: "registration",
                subcategory: "registration_start_screen",
                action: "view"
            }),
            document.querySelector("#formRegistration").addEventListener("submit", function() {
                jPar.util.log.bigData({
                    category: "registration",
                    subcategory: "registration_start_screen",
                    action: "click",
                    targetId: "button_registration"
                })
            })
        }
    }
}),
jPar.loginAndRegistration.registrationPage = jPar.loginAndRegistration.registrationPage || {},
deepMerge(!0, jPar.loginAndRegistration.registrationPage, {
    socialSignOn: {
        init: function() {
            var e = null !== document.querySelector("peg-apple-social-button")
              , t = null !== document.querySelector("peg-google-social-button");
            e && this.apple.init(),
            t && this.google.init()
        },
        google: {
            init: function() {
                this.error.showGoogleBackendErrorModal(),
                this.error.showErrorNoEMailAdressModal(),
                this.checkAutosubmit()
            },
            checkAutosubmit: function() {
                var e = void 0 !== jPar.util.getGetParamFromUrl("scope")
                  , t = void 0 === jPar.util.getGetParamFromUrl("error")
                  , o = void 0 !== jPar.util.getGetParamFromUrl("code");
                if (e && t && o) {
                    var n = document.querySelector("#formRegistration");
                    n.dataset.clickFromSocialLogin = "true",
                    this.addHiddenInputfields(n),
                    n.submit()
                }
            },
            addHiddenInputfields: function(e) {
                var t = document.createElement("input");
                t.type = "hidden",
                t.name = "socialProvider",
                t.value = "GOOGLE";
                var o = document.createElement("input");
                o.type = "hidden",
                o.name = "socialAccessToken",
                o.value = jPar.util.getGetParamFromUrl("code"),
                e.appendChild(t),
                e.appendChild(o);
                var n = jPar.util.getGetParamFromUrl("state");
                if (n && (n = decodeURIComponent(n),
                null === document.querySelector("#mysexEssexRow"))) {
                    var r = decodeURIComponent(n)
                      , i = new URLSearchParams(r)
                      , a = i.get("search")
                      , s = i.get("mysex")
                      , l = i.get("searchGenders")
                      , c = document.createElement("input");
                    c.type = "hidden",
                    c.name = "gender",
                    c.value = a;
                    var d = document.createElement("input");
                    c.type = "hidden",
                    c.name = "mysex",
                    c.value = s;
                    var u = document.createElement("input");
                    u.type = "hidden",
                    u.name = "searchGenders",
                    u.value = l,
                    e.appendChild(c),
                    e.appendChild(d),
                    e.appendChild(u)
                }
            },
            error: {
                showGoogleBackendErrorModal: function() {
                    null !== document.querySelector("#googleBackendErrorModal") && jPar.wdk.modalbox.show({
                        modalboxId: "googleBackendErrorModal"
                    })
                },
                showErrorNoEMailAdressModal: function() {
                    null !== document.querySelector("#googleNoEMailAdress") && jPar.wdk.modalbox.show({
                        modalboxId: "googleNoEMailAdress"
                    })
                }
            }
        },
        apple: {
            init: function() {
                this.setEventlistener(),
                this.error.showAppleBackendErrorModal(),
                this.error.showErrorNoRegModal(),
                this.checkAutosubmit()
            },
            setEventlistener: function() {
                var e = !1;
                document.querySelectorAll("#formRegistration input[type=radio], #formRegistration input[type=checkbox]").forEach(function(t) {
                    t.addEventListener("click", function() {
                        setTimeout(function() {
                            e = !0;
                            var t = document.querySelector("#mysexRow input:checked").value
                              , o = document.querySelector("#essexRow #hiddenEssex").value;
                            document.querySelector("peg-apple-social-button").setAttribute("orientation", t + o)
                        }, 50)
                    })
                }),
                document.querySelector("peg-apple-social-button").addEventListener("click", function() {
                    !1 === e && (event.preventDefault(),
                    jPar.loginAndRegistration.registrationPage.validate.validateSex({}))
                })
            },
            checkAutosubmit: function() {
                var e = "APPLE" === jPar.util.getGetParamFromUrl("socialProvider")
                  , t = void 0 === jPar.util.getGetParamFromUrl("error");
                if (e && t) {
                    this.selectGenderInUi();
                    var o = document.querySelector("#formRegistration");
                    o.dataset.clickFromSocialLogin = "true",
                    this.localFormPreparation(),
                    o.submit()
                }
            },
            selectGenderInUi: function() {
                var e = window.location.href
                  , t = new URLSearchParams(e.split("?")[1]).get("state")
                  , o = decodeURIComponent(t)
                  , n = new URLSearchParams(o).get("search");
                "10" === n ? (document.querySelector("#mysexW").click(),
                document.querySelector("#essexM").click()) : "01" === n ? (document.querySelector("#mysexM").click(),
                document.querySelector("#essexW").click()) : "11" === n ? (document.querySelector("#mysexW").click(),
                document.querySelector("#essexW").click()) : "00" === n && (document.querySelector("#mysexM").click(),
                document.querySelector("#essexM").click())
            },
            localFormPreparation: function() {
                var e = jPar.wdk.security.escapeStringForHtml(jPar.util.getGetParamFromUrl("id_token"))
                  , t = jPar.wdk.security.escapeStringForHtml(jPar.util.getGetParamFromUrl("code"))
                  , o = jPar.util.getGetParamFromUrl("user")
                  , n = document.createElement("template")
                  , r = '\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<input type="hidden" name="socialProvider" value="APPLE">\n\t\t\t\t\t\t<input type="hidden" name="id_token" value="'.concat(e, '">\n\t\t\t\t\t\t<input type="hidden" name="code" value="').concat(t, '">\n\t\t\t\t\t\t<input type="hidden" name="user" value="').concat(o, '">\n\t\t\t\t\t</div>\n\t\t\t\t');
                n.innerHTML = jPar.wdk.security.sanitizeEvilHtml(r);
                var i = n.content.firstElementChild;
                document.querySelector("#formRegistration").appendChild(i)
            },
            error: {
                showAppleBackendErrorModal: function() {
                    null !== document.querySelector("#appleBackendErrorModal") && jPar.wdk.modalbox.show({
                        modalboxId: "appleBackendErrorModal"
                    })
                },
                showErrorNoRegModal: function() {
                    null !== document.querySelector("#appleNoReg") && jPar.wdk.modalbox.show({
                        modalboxId: "appleNoReg"
                    })
                }
            }
        }
    }
}),
jPar.loginAndRegistration.registrationPage = jPar.loginAndRegistration.registrationPage || {},
$j.extend(!0, jPar.loginAndRegistration.registrationPage, {
    validate: {
        conf: {
            registrationFormName: "#formRegistration"
        },
        init: function() {
            try {
                var e = this;
                $j(this.conf.registrationFormName + " #regFormEmail").on("keyup change", function() {
                    $j("#regFormEmail").parents(".wdk-form-text").hasClass("has-error") && e.validateEmail()
                }),
                $j(this.conf.registrationFormName + " input.checkPassword[type=password]").on("focus", function() {
                    jPar.wdk.forms.hideError($j("#regPasswordEmptyError")),
                    jPar.wdk.forms.hideError($j("#regPasswordNotValidError"))
                }),
                $j(this.conf.registrationFormName).on("submit", function(t) {
                    var o;
                    e.validateForm({
                        clickFromSocialLogin: $j("#formRegistration").data("clickFromSocialLogin")
                    }),
                    $j("#formRegistration").data("clickFromSocialLogin", !1);
                    var n = !1 === (null === (o = document.querySelector("".concat(e.conf.registrationFormName, " peg-turnstile"))) || void 0 === o ? void 0 : o.validate());
                    jPar.wdk.forms.hasVisibleErrors($j(e.conf.registrationFormName)) || n ? t.preventDefault() : jPar.loginAndRegistration.util.showLoadingAnimation()
                })
            } catch (e) {
                jPar.util.log.error(e.stack, "jPar.loginAndRegistration.registrationPage.validate.init")
            }
        },
        validateForm: function(e) {
            e = e || {},
            this.validateSex(e),
            this.validateEmail(e),
            this.validatePassword(e)
        },
        validateSex: function() {
            null !== document.querySelector("#mysexEssexRow") && ($j('input[name="mysex"]:checked').length && "" !== !$j('input[name="essex"]').val() ? jPar.wdk.forms.hideError($j("#regsexError")) : jPar.wdk.forms.showError($j("#regsexError")))
        },
        validateEmail: function(e) {
            e = e || {};
            var t = $j("#regFormEmail")
              , o = jPar.util.validate.textfieldIsEmpty(t) || !1 === jPar.util.validate.isEmailAddress(t);
            !1 === e.clickFromSocialLogin && o ? jPar.wdk.forms.showError($j("#regEmailError")) : jPar.wdk.forms.hideError($j("#regEmailError"))
        },
        validatePassword: function(e) {
            !0 === (e = e || {}).clickFromSocialLogin ? (jPar.wdk.forms.hideError($j("#regPasswordEmptyError")),
            jPar.wdk.forms.hideError($j("#regPasswordNotValidError"))) : (jPar.wdk.passwordRestrictionBox.checkPasswordRestrictions(),
            jPar.util.validate.textfieldIsEmpty($j("#regFormPassword")) ? (jPar.wdk.forms.showError($j("#regPasswordEmptyError")),
            jPar.wdk.forms.hideError($j("#regPasswordNotValidError"))) : !1 === jPar.wdk.passwordRestrictionBox.isPasswordValid() ? (jPar.wdk.forms.hideError($j("#regPasswordEmptyError")),
            jPar.wdk.forms.showError($j("#regPasswordNotValidError"))) : (jPar.wdk.forms.hideError($j("#regPasswordEmptyError")),
            jPar.wdk.forms.hideError($j("#regPasswordNotValidError"))))
        }
    }
}),
jPar.loginAndRegistration = jPar.loginAndRegistration || {},
$j.extend(!0, jPar.loginAndRegistration, {
    searchGenderSelectPage: {
        init: function() {
            var e = this;
            this.tracking.trackPageView();
            var t = document.querySelector("#changeSearchGenderForm");
            t.querySelector('input[name="selectedGenders"]:checked') && (document.querySelector("#nextButton").disabled = !1,
            document.querySelector(".infoText").classList.remove("noDisplay")),
            t.querySelectorAll('input[name="selectedGenders"]').forEach(function(o) {
                o.addEventListener("click", function(o) {
                    var n = 0 === t.querySelectorAll('input[name="selectedGenders"]:checked').length;
                    document.querySelector("#nextButton").disabled = n,
                    document.querySelector(".infoText").classList.remove("noDisplay"),
                    e.tracking.trackSearchGenderChange(o.currentTarget.value)
                })
            }),
            t.addEventListener("submit", function(e) {
                e.preventDefault();
                var o = Array.from(t.querySelectorAll("input")).map(function(e) {
                    return e.checked ? e.value : null
                }).filter(function(e) {
                    return null !== e
                })
                  , n = new URLSearchParams({
                    selectedGenders: o,
                    _csrf: jPar.wdk.security.csrf.getToken()
                });
                fetch(t.action, {
                    method: "POST",
                    body: n,
                    headers: {
                        "X-CSRF-TOKEN": jPar.wdk.security.csrf.getToken(),
                        "x-requested-with": "XMLHttpRequest",
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(function(e) {
                    e.redirected && (window.location.href = e.url)
                })
            })
        },
        tracking: {
            trackPageView: function() {
                jPar.util.log.bigData({
                    category: "registration",
                    subcategory: "search_gender_select_screen",
                    action: "screen_view"
                })
            },
            trackSearchGenderChange: function(e) {
                var t = "";
                switch (e) {
                case "MALE":
                    t = "button_man";
                    break;
                case "FEMALE":
                    t = "button_woman";
                    break;
                case "DIVERSE":
                    t = "button_nonbinary"
                }
                jPar.util.log.bigData({
                    category: "registration",
                    subcategory: "search_gender_select_screen",
                    action: "click",
                    targetId: t
                })
            }
        }
    }
}),
jPar.loginAndRegistration = jPar.loginAndRegistration || {},
$j.extend(!0, jPar.loginAndRegistration, {
    verificationPage: {
        resendCountDownStarted: !1,
        resendCountdownInterval: 0,
        init: function() {
            this.setFormEvents(),
            this.setHelpEvents(),
            this.countDown(),
            this.trackViewScreen();
            try {
                this.loginDelay()
            } catch (e) {
                jPar.util.log.error(e.stack, "jPar.loginAndRegistration.verificationPage.init: low prio failed")
            }
        },
        countDown: function() {
            if ($j("#verificationTimeoutError").length > 0) {
                $j("#code").attr("readonly", !0),
                $j(".codeWrapper").hide();
                var e = (new Date).getTime() + parseInt($j("#verificationTimeoutError").data("countDown"));
                jPar.loginAndRegistration.countdown.start(e, 1e3, function(e) {
                    $j(".countDown").html(e.minutes + ":" + e.seconds.toString().padStart(2, "0"))
                }, function() {
                    $j(".countDown").html("0:00"),
                    location.assign("/login?login_error=verification_code_failed")
                })
            }
        },
        setFormEvents: function() {
            var e = this;
            $j("#verificationForm").on("keydown keyup", "#code", function(t) {
                return e.hideCursor(t),
                e.submitCode(t),
                e.isWantedCharacter(t)
            }),
            $j("#verificationForm").on("change", "#code", function(t) {
                e.submitCode(t)
            }),
            $j("#verificationForm").on("paste", "#code", function(t) {
                e.removeNotWantedCharacters(t)
            }),
            document.querySelector(".verificationError") && e.trackSubmitCodeInvalid()
        },
        setHelpEvents: function() {
            var e = this;
            $j(".js-openModalDrawer").on("click", function() {
                jPar.wdk.modalbox.show({
                    modalboxId: "helpModal"
                }),
                e.trackOpenHelpModal()
            }),
            $j("#resendButton").on("click", function() {
                e.resendCode(),
                e.trackResendCode()
            }),
            $j("#openOscHelpPages").on("click", function() {
                jPar.wdk.modalbox.hide(),
                e.trackClickHelpCenter()
            }),
            $j("#cancelButton").on("click", function() {
                jPar.wdk.modalbox.hide(),
                e.trackClickCancelHelpModal()
            })
        },
        isWantedCharacter: function(e) {
            if (this.isNumber(e.key))
                return !0;
            var t = this.getKeyCode(e)
              , o = 8 === t || 46 === t
              , n = t >= 37 && t <= 40
              , r = 9 === t;
            return e.ctrlKey && 86 === t || o || n || r || t >= 112 && t <= 123
        },
        getKeyCode: function(e) {
            return e.which ? e.which : e.keyCode
        },
        isNumber: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        hideCursor: function(e) {
            "keydown" === e.type && (this.isCodeAlmostComplete() && this.isNumber(e.key) ? $j(e.target).addClass("cursorHidden") : $j(e.target).removeClass("cursorHidden"))
        },
        isCodeAlmostComplete: function() {
            var e = parseInt($j("#verificationForm #code").attr("maxLength"))
              , t = $j("#verificationForm #code").val().length;
            return e > 0 && t + 1 >= e
        },
        isCodeComplete: function() {
            var e = $j("#verificationForm #code").attr("maxLength")
              , t = "" + $j("#verificationForm #code").val().length;
            return e > 0 && t === e
        },
        removeNotWantedCharacters: function(e) {
            var t = e.originalEvent.clipboardData.getData("text");
            if ("" !== t)
                return $j("#code").val(t.replace(/\D+/g, "")),
                e.preventDefault(),
                !1
        },
        submitCode: function(e) {
            "keyup" === e.type && !$j("#verificationForm").hasClass("submitInProgress") && this.isCodeComplete() && ($j("#verificationForm").addClass("submitInProgress"),
            $j("#code").attr("readonly", !0),
            this.trackSubmitCode(),
            $j("#verificationForm").trigger("submit"))
        },
        resendCode: function() {
            var e = this;
            $j.ajax({
                type: "POST",
                url: $j("#verificationForm").data("resendUrl"),
                data: {
                    _csrf: jPar.wdk.security.csrf.getToken(),
                    j_username: $j('#verificationForm input[name="j_username"]').val()
                },
                success: function(t) {
                    if (jPar.wdk.modalbox.hide(),
                    t.success)
                        jPar.wdk.modalbox.show({
                            modalboxId: "resendSuccessModal"
                        }),
                        e.trackResendCodeSuccess();
                    else if (t.blockedDurationInMs) {
                        var o = t.blockedDurationInMs;
                        $j(".resendBlockedCounter").data("countDown", o),
                        jPar.wdk.modalbox.show({
                            modalboxId: "resendBlockedModal"
                        }),
                        e.resendCountDown()
                    } else
                        jPar.wdk.modalbox.show({
                            modalboxId: "errorModalbox500"
                        })
                },
                error: function() {
                    jPar.wdk.modalbox.show({
                        modalboxId: "errorModalbox500"
                    })
                }
            })
        },
        resendCountDown: function() {
            var e = this;
            if ("" !== $j(".resendBlockedCounter").data("countDown") && !this.resendCountDownStarted) {
                this.resendCountDownStarted = !0;
                var t = (new Date).getTime() + parseInt($j(".resendBlockedCounter").data("countDown"));
                this.resendCountdownInterval = jPar.loginAndRegistration.countdown.start(t, 1e3, function(e) {
                    $j(".resendBlockedCounter").html(e.minutes + ":" + e.seconds.toString().padStart(2, "0"))
                }, function() {
                    e.resendCountDownStarted = !1,
                    $j(".resendBlockedCounter").html("0:00"),
                    jPar.loginAndRegistration.countdown.stop(e.resendCountdownInterval)
                })
            }
        },
        loginDelay: function() {
            var e = $j("#loadingText").data("logindelay");
            void 0 !== e && window.setTimeout(function() {
                jPar.loginAndRegistration.util.hideLoadingAnimation()
            }, e)
        },
        trackViewScreen: function() {
            jPar.util.log.bigData({
                category: "authentication",
                subcategory: "authentication_screen",
                action: "screen_view"
            })
        },
        trackSubmitCode: function() {
            jPar.util.log.bigData({
                category: "authentication",
                subcategory: "authentication_screen",
                action: "submit"
            })
        },
        trackSubmitCodeInvalid: function() {
            document.querySelectorAll(".verificationError").forEach(function(e) {
                var t = e.dataset.error;
                jPar.util.log.bigData({
                    category: "authentication",
                    subcategory: "authentication_screen",
                    action: "authentication_invalid",
                    targetId: t
                })
            })
        },
        trackOpenHelpModal: function() {
            jPar.util.log.bigData({
                category: "authentication",
                subcategory: "authentication_screen",
                action: "click",
                targetId: "link_help"
            })
        },
        trackResendCode: function() {
            jPar.util.log.bigData({
                category: "authentication",
                subcategory: "authentication_screen",
                action: "click",
                targetId: "button_resend_code"
            })
        },
        trackResendCodeSuccess: function() {
            jPar.util.log.bigData({
                category: "authentication",
                subcategory: "authentication_screen",
                action: "code_sent"
            })
        },
        trackClickHelpCenter: function() {
            jPar.util.log.bigData({
                category: "authentication",
                subcategory: "authentication_screen",
                action: "click",
                targetId: "button_visit_help_center"
            })
        },
        trackClickCancelHelpModal: function() {
            jPar.util.log.bigData({
                category: "authentication",
                subcategory: "authentication_screen",
                action: "click",
                targetId: "button_cancel"
            })
        }
    }
}),
/*!
 * Cropper.js v1.6.2
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2024-04-21T07:43:05.335Z
 */
function(e, t) {
    "object" === ("undefined" == typeof exports ? "undefined" : _typeof2(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Cropper = t()
}(this, function() {
    "use strict";
    function e(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            o.push.apply(o, n)
        }
        return o
    }
    function t(t) {
        for (var o = 1; o < arguments.length; o++) {
            var n = null != arguments[o] ? arguments[o] : {};
            o % 2 ? e(Object(n), !0).forEach(function(e) {
                i(t, e, n[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : e(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            })
        }
        return t
    }
    function o(e) {
        var t = function(e, t) {
            if ("object" != _typeof2(e) || !e)
                return e;
            var o = e[Symbol.toPrimitive];
            if (void 0 !== o) {
                var n = o.call(e, t || "default");
                if ("object" != _typeof2(n))
                    return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == _typeof2(t) ? t : t + ""
    }
    function n(e) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        n(e)
    }
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, o(r.key), r)
        }
    }
    function i(e, t, n) {
        return (t = o(t))in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function a(e) {
        return function(e) {
            if (Array.isArray(e))
                return s(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }(e) || function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return s(e, t);
            var o = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === o && e.constructor && (o = e.constructor.name);
            if ("Map" === o || "Set" === o)
                return Array.from(e);
            if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
                return s(e, t)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var o = 0, n = new Array(t); o < t; o++)
            n[o] = e[o];
        return n
    }
    var l = "undefined" != typeof window && void 0 !== window.document
      , c = l ? window : {}
      , d = !(!l || !c.document.documentElement) && "ontouchstart"in c.document.documentElement
      , u = !!l && "PointerEvent"in c
      , h = "cropper"
      , f = "all"
      , m = "crop"
      , p = "move"
      , g = "zoom"
      , v = "e"
      , w = "w"
      , b = "s"
      , y = "n"
      , x = "ne"
      , P = "nw"
      , S = "se"
      , k = "sw"
      , j = "".concat(h, "-crop")
      , C = "".concat(h, "-disabled")
      , E = "".concat(h, "-hidden")
      , M = "".concat(h, "-hide")
      , D = "".concat(h, "-invisible")
      , A = "".concat(h, "-modal")
      , T = "".concat(h, "-move")
      , F = "".concat(h, "Action")
      , R = "".concat(h, "Preview")
      , O = "crop"
      , I = "move"
      , L = "none"
      , $ = "crop"
      , _ = "cropend"
      , q = "cropmove"
      , B = "cropstart"
      , N = "dblclick"
      , G = u ? "pointerdown" : d ? "touchstart" : "mousedown"
      , W = u ? "pointermove" : d ? "touchmove" : "mousemove"
      , U = u ? "pointerup pointercancel" : d ? "touchend touchcancel" : "mouseup"
      , H = "ready"
      , z = "resize"
      , V = "wheel"
      , X = "zoom"
      , Y = "image/jpeg"
      , J = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/
      , K = /^data:/
      , Q = /^data:image\/jpeg;base64,/
      , Z = /^img|canvas$/i
      , ee = {
        viewMode: 0,
        dragMode: O,
        initialAspectRatio: NaN,
        aspectRatio: NaN,
        data: null,
        preview: "",
        responsive: !0,
        restore: !0,
        checkCrossOrigin: !0,
        checkOrientation: !0,
        modal: !0,
        guides: !0,
        center: !0,
        highlight: !0,
        background: !0,
        autoCrop: !0,
        autoCropArea: .8,
        movable: !0,
        rotatable: !0,
        scalable: !0,
        zoomable: !0,
        zoomOnTouch: !0,
        zoomOnWheel: !0,
        wheelZoomRatio: .1,
        cropBoxMovable: !0,
        cropBoxResizable: !0,
        toggleDragModeOnDblclick: !0,
        minCanvasWidth: 0,
        minCanvasHeight: 0,
        minCropBoxWidth: 0,
        minCropBoxHeight: 0,
        minContainerWidth: 200,
        minContainerHeight: 100,
        ready: null,
        cropstart: null,
        cropmove: null,
        cropend: null,
        crop: null,
        zoom: null
    }
      , te = Number.isNaN || c.isNaN;
    function oe(e) {
        return "number" == typeof e && !te(e)
    }
    var ne = function(e) {
        return e > 0 && e < 1 / 0
    };
    function re(e) {
        return void 0 === e
    }
    function ie(e) {
        return "object" === n(e) && null !== e
    }
    var ae = Object.prototype.hasOwnProperty;
    function se(e) {
        if (!ie(e))
            return !1;
        try {
            var t = e.constructor
              , o = t.prototype;
            return t && o && ae.call(o, "isPrototypeOf")
        } catch (e) {
            return !1
        }
    }
    function le(e) {
        return "function" == typeof e
    }
    var ce = Array.prototype.slice;
    function de(e) {
        return Array.from ? Array.from(e) : ce.call(e)
    }
    function ue(e, t) {
        return e && le(t) && (Array.isArray(e) || oe(e.length) ? de(e).forEach(function(o, n) {
            t.call(e, o, n, e)
        }) : ie(e) && Object.keys(e).forEach(function(o) {
            t.call(e, e[o], o, e)
        })),
        e
    }
    var he = Object.assign || function(e) {
        for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
            o[n - 1] = arguments[n];
        return ie(e) && o.length > 0 && o.forEach(function(t) {
            ie(t) && Object.keys(t).forEach(function(o) {
                e[o] = t[o]
            })
        }),
        e
    }
      , fe = /\.\d*(?:0|9){12}\d*$/;
    function me(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e11;
        return fe.test(e) ? Math.round(e * t) / t : e
    }
    var pe = /^width|height|left|top|marginLeft|marginTop$/;
    function ge(e, t) {
        var o = e.style;
        ue(t, function(e, t) {
            pe.test(t) && oe(e) && (e = "".concat(e, "px")),
            o[t] = e
        })
    }
    function ve(e, t) {
        if (t)
            if (oe(e.length))
                ue(e, function(e) {
                    ve(e, t)
                });
            else if (e.classList)
                e.classList.add(t);
            else {
                var o = e.className.trim();
                o ? o.indexOf(t) < 0 && (e.className = "".concat(o, " ").concat(t)) : e.className = t
            }
    }
    function we(e, t) {
        t && (oe(e.length) ? ue(e, function(e) {
            we(e, t)
        }) : e.classList ? e.classList.remove(t) : e.className.indexOf(t) >= 0 && (e.className = e.className.replace(t, "")))
    }
    function be(e, t, o) {
        t && (oe(e.length) ? ue(e, function(e) {
            be(e, t, o)
        }) : o ? ve(e, t) : we(e, t))
    }
    var ye = /([a-z\d])([A-Z])/g;
    function xe(e) {
        return e.replace(ye, "$1-$2").toLowerCase()
    }
    function Pe(e, t) {
        return ie(e[t]) ? e[t] : e.dataset ? e.dataset[t] : e.getAttribute("data-".concat(xe(t)))
    }
    function Se(e, t, o) {
        ie(o) ? e[t] = o : e.dataset ? e.dataset[t] = o : e.setAttribute("data-".concat(xe(t)), o)
    }
    var ke = /\s\s*/
      , je = function() {
        var e = !1;
        if (l) {
            var t = !1
              , o = function() {}
              , n = Object.defineProperty({}, "once", {
                get: function() {
                    return e = !0,
                    t
                },
                set: function(e) {
                    t = e
                }
            });
            c.addEventListener("test", o, n),
            c.removeEventListener("test", o, n)
        }
        return e
    }();
    function Ce(e, t, o) {
        var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
          , r = o;
        t.trim().split(ke).forEach(function(t) {
            if (!je) {
                var i = e.listeners;
                i && i[t] && i[t][o] && (r = i[t][o],
                delete i[t][o],
                0 === Object.keys(i[t]).length && delete i[t],
                0 === Object.keys(i).length && delete e.listeners)
            }
            e.removeEventListener(t, r, n)
        })
    }
    function Ee(e, t, o) {
        var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
          , r = o;
        t.trim().split(ke).forEach(function(t) {
            if (n.once && !je) {
                var i = e.listeners
                  , a = void 0 === i ? {} : i;
                r = function() {
                    delete a[t][o],
                    e.removeEventListener(t, r, n);
                    for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++)
                        s[l] = arguments[l];
                    o.apply(e, s)
                }
                ,
                a[t] || (a[t] = {}),
                a[t][o] && e.removeEventListener(t, a[t][o], n),
                a[t][o] = r,
                e.listeners = a
            }
            e.addEventListener(t, r, n)
        })
    }
    function Me(e, t, o) {
        var n;
        return le(Event) && le(CustomEvent) ? n = new CustomEvent(t,{
            detail: o,
            bubbles: !0,
            cancelable: !0
        }) : (n = document.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, o),
        e.dispatchEvent(n)
    }
    function De(e) {
        var t = e.getBoundingClientRect();
        return {
            left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
            top: t.top + (window.pageYOffset - document.documentElement.clientTop)
        }
    }
    var Ae = c.location
      , Te = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
    function Fe(e) {
        var t = e.match(Te);
        return null !== t && (t[1] !== Ae.protocol || t[2] !== Ae.hostname || t[3] !== Ae.port)
    }
    function Re(e) {
        var t = "timestamp=".concat((new Date).getTime());
        return e + (-1 === e.indexOf("?") ? "?" : "&") + t
    }
    function Oe(e) {
        var t = e.rotate
          , o = e.scaleX
          , n = e.scaleY
          , r = e.translateX
          , i = e.translateY
          , a = [];
        oe(r) && 0 !== r && a.push("translateX(".concat(r, "px)")),
        oe(i) && 0 !== i && a.push("translateY(".concat(i, "px)")),
        oe(t) && 0 !== t && a.push("rotate(".concat(t, "deg)")),
        oe(o) && 1 !== o && a.push("scaleX(".concat(o, ")")),
        oe(n) && 1 !== n && a.push("scaleY(".concat(n, ")"));
        var s = a.length ? a.join(" ") : "none";
        return {
            WebkitTransform: s,
            msTransform: s,
            transform: s
        }
    }
    function Ie(e, o) {
        var n = e.pageX
          , r = e.pageY
          , i = {
            endX: n,
            endY: r
        };
        return o ? i : t({
            startX: n,
            startY: r
        }, i)
    }
    function Le(e) {
        var t = e.aspectRatio
          , o = e.height
          , n = e.width
          , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "contain"
          , i = ne(n)
          , a = ne(o);
        if (i && a) {
            var s = o * t;
            "contain" === r && s > n || "cover" === r && s < n ? o = n / t : n = o * t
        } else
            i ? o = n / t : a && (n = o * t);
        return {
            width: n,
            height: o
        }
    }
    var $e = String.fromCharCode;
    var _e = /^data:.*,/;
    function qe(e) {
        var t, o = new DataView(e);
        try {
            var n, r, i;
            if (255 === o.getUint8(0) && 216 === o.getUint8(1))
                for (var a = o.byteLength, s = 2; s + 1 < a; ) {
                    if (255 === o.getUint8(s) && 225 === o.getUint8(s + 1)) {
                        r = s;
                        break
                    }
                    s += 1
                }
            if (r) {
                var l = r + 10;
                if ("Exif" === function(e, t, o) {
                    var n = "";
                    o += t;
                    for (var r = t; r < o; r += 1)
                        n += $e(e.getUint8(r));
                    return n
                }(o, r + 4, 4)) {
                    var c = o.getUint16(l);
                    if (((n = 18761 === c) || 19789 === c) && 42 === o.getUint16(l + 2, n)) {
                        var d = o.getUint32(l + 4, n);
                        d >= 8 && (i = l + d)
                    }
                }
            }
            if (i) {
                var u, h, f = o.getUint16(i, n);
                for (h = 0; h < f; h += 1)
                    if (u = i + 12 * h + 2,
                    274 === o.getUint16(u, n)) {
                        u += 8,
                        t = o.getUint16(u, n),
                        o.setUint16(u, 1, n);
                        break
                    }
            }
        } catch (e) {
            t = 1
        }
        return t
    }
    var Be = {
        render: function() {
            this.initContainer(),
            this.initCanvas(),
            this.initCropBox(),
            this.renderCanvas(),
            this.cropped && this.renderCropBox()
        },
        initContainer: function() {
            var e = this.element
              , t = this.options
              , o = this.container
              , n = this.cropper
              , r = Number(t.minContainerWidth)
              , i = Number(t.minContainerHeight);
            ve(n, E),
            we(e, E);
            var a = {
                width: Math.max(o.offsetWidth, r >= 0 ? r : 200),
                height: Math.max(o.offsetHeight, i >= 0 ? i : 100)
            };
            this.containerData = a,
            ge(n, {
                width: a.width,
                height: a.height
            }),
            ve(e, E),
            we(n, E)
        },
        initCanvas: function() {
            var e = this.containerData
              , t = this.imageData
              , o = this.options.viewMode
              , n = Math.abs(t.rotate) % 180 == 90
              , r = n ? t.naturalHeight : t.naturalWidth
              , i = n ? t.naturalWidth : t.naturalHeight
              , a = r / i
              , s = e.width
              , l = e.height;
            e.height * a > e.width ? 3 === o ? s = e.height * a : l = e.width / a : 3 === o ? l = e.width / a : s = e.height * a;
            var c = {
                aspectRatio: a,
                naturalWidth: r,
                naturalHeight: i,
                width: s,
                height: l
            };
            this.canvasData = c,
            this.limited = 1 === o || 2 === o,
            this.limitCanvas(!0, !0),
            c.width = Math.min(Math.max(c.width, c.minWidth), c.maxWidth),
            c.height = Math.min(Math.max(c.height, c.minHeight), c.maxHeight),
            c.left = (e.width - c.width) / 2,
            c.top = (e.height - c.height) / 2,
            c.oldLeft = c.left,
            c.oldTop = c.top,
            this.initialCanvasData = he({}, c)
        },
        limitCanvas: function(e, t) {
            var o = this.options
              , n = this.containerData
              , r = this.canvasData
              , i = this.cropBoxData
              , a = o.viewMode
              , s = r.aspectRatio
              , l = this.cropped && i;
            if (e) {
                var c = Number(o.minCanvasWidth) || 0
                  , d = Number(o.minCanvasHeight) || 0;
                a > 1 ? (c = Math.max(c, n.width),
                d = Math.max(d, n.height),
                3 === a && (d * s > c ? c = d * s : d = c / s)) : a > 0 && (c ? c = Math.max(c, l ? i.width : 0) : d ? d = Math.max(d, l ? i.height : 0) : l && (c = i.width,
                (d = i.height) * s > c ? c = d * s : d = c / s));
                var u = Le({
                    aspectRatio: s,
                    width: c,
                    height: d
                });
                c = u.width,
                d = u.height,
                r.minWidth = c,
                r.minHeight = d,
                r.maxWidth = 1 / 0,
                r.maxHeight = 1 / 0
            }
            if (t)
                if (a > (l ? 0 : 1)) {
                    var h = n.width - r.width
                      , f = n.height - r.height;
                    r.minLeft = Math.min(0, h),
                    r.minTop = Math.min(0, f),
                    r.maxLeft = Math.max(0, h),
                    r.maxTop = Math.max(0, f),
                    l && this.limited && (r.minLeft = Math.min(i.left, i.left + (i.width - r.width)),
                    r.minTop = Math.min(i.top, i.top + (i.height - r.height)),
                    r.maxLeft = i.left,
                    r.maxTop = i.top,
                    2 === a && (r.width >= n.width && (r.minLeft = Math.min(0, h),
                    r.maxLeft = Math.max(0, h)),
                    r.height >= n.height && (r.minTop = Math.min(0, f),
                    r.maxTop = Math.max(0, f))))
                } else
                    r.minLeft = -r.width,
                    r.minTop = -r.height,
                    r.maxLeft = n.width,
                    r.maxTop = n.height
        },
        renderCanvas: function(e, t) {
            var o = this.canvasData
              , n = this.imageData;
            if (t) {
                var r = function(e) {
                    var t = e.width
                      , o = e.height
                      , n = e.degree;
                    if (90 == (n = Math.abs(n) % 180))
                        return {
                            width: o,
                            height: t
                        };
                    var r = n % 90 * Math.PI / 180
                      , i = Math.sin(r)
                      , a = Math.cos(r)
                      , s = t * a + o * i
                      , l = t * i + o * a;
                    return n > 90 ? {
                        width: l,
                        height: s
                    } : {
                        width: s,
                        height: l
                    }
                }({
                    width: n.naturalWidth * Math.abs(n.scaleX || 1),
                    height: n.naturalHeight * Math.abs(n.scaleY || 1),
                    degree: n.rotate || 0
                })
                  , i = r.width
                  , a = r.height
                  , s = o.width * (i / o.naturalWidth)
                  , l = o.height * (a / o.naturalHeight);
                o.left -= (s - o.width) / 2,
                o.top -= (l - o.height) / 2,
                o.width = s,
                o.height = l,
                o.aspectRatio = i / a,
                o.naturalWidth = i,
                o.naturalHeight = a,
                this.limitCanvas(!0, !1)
            }
            (o.width > o.maxWidth || o.width < o.minWidth) && (o.left = o.oldLeft),
            (o.height > o.maxHeight || o.height < o.minHeight) && (o.top = o.oldTop),
            o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth),
            o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight),
            this.limitCanvas(!1, !0),
            o.left = Math.min(Math.max(o.left, o.minLeft), o.maxLeft),
            o.top = Math.min(Math.max(o.top, o.minTop), o.maxTop),
            o.oldLeft = o.left,
            o.oldTop = o.top,
            ge(this.canvas, he({
                width: o.width,
                height: o.height
            }, Oe({
                translateX: o.left,
                translateY: o.top
            }))),
            this.renderImage(e),
            this.cropped && this.limited && this.limitCropBox(!0, !0)
        },
        renderImage: function(e) {
            var t = this.canvasData
              , o = this.imageData
              , n = o.naturalWidth * (t.width / t.naturalWidth)
              , r = o.naturalHeight * (t.height / t.naturalHeight);
            he(o, {
                width: n,
                height: r,
                left: (t.width - n) / 2,
                top: (t.height - r) / 2
            }),
            ge(this.image, he({
                width: o.width,
                height: o.height
            }, Oe(he({
                translateX: o.left,
                translateY: o.top
            }, o)))),
            e && this.output()
        },
        initCropBox: function() {
            var e = this.options
              , t = this.canvasData
              , o = e.aspectRatio || e.initialAspectRatio
              , n = Number(e.autoCropArea) || .8
              , r = {
                width: t.width,
                height: t.height
            };
            o && (t.height * o > t.width ? r.height = r.width / o : r.width = r.height * o),
            this.cropBoxData = r,
            this.limitCropBox(!0, !0),
            r.width = Math.min(Math.max(r.width, r.minWidth), r.maxWidth),
            r.height = Math.min(Math.max(r.height, r.minHeight), r.maxHeight),
            r.width = Math.max(r.minWidth, r.width * n),
            r.height = Math.max(r.minHeight, r.height * n),
            r.left = t.left + (t.width - r.width) / 2,
            r.top = t.top + (t.height - r.height) / 2,
            r.oldLeft = r.left,
            r.oldTop = r.top,
            this.initialCropBoxData = he({}, r)
        },
        limitCropBox: function(e, t) {
            var o = this.options
              , n = this.containerData
              , r = this.canvasData
              , i = this.cropBoxData
              , a = this.limited
              , s = o.aspectRatio;
            if (e) {
                var l = Number(o.minCropBoxWidth) || 0
                  , c = Number(o.minCropBoxHeight) || 0
                  , d = a ? Math.min(n.width, r.width, r.width + r.left, n.width - r.left) : n.width
                  , u = a ? Math.min(n.height, r.height, r.height + r.top, n.height - r.top) : n.height;
                l = Math.min(l, n.width),
                c = Math.min(c, n.height),
                s && (l && c ? c * s > l ? c = l / s : l = c * s : l ? c = l / s : c && (l = c * s),
                u * s > d ? u = d / s : d = u * s),
                i.minWidth = Math.min(l, d),
                i.minHeight = Math.min(c, u),
                i.maxWidth = d,
                i.maxHeight = u
            }
            t && (a ? (i.minLeft = Math.max(0, r.left),
            i.minTop = Math.max(0, r.top),
            i.maxLeft = Math.min(n.width, r.left + r.width) - i.width,
            i.maxTop = Math.min(n.height, r.top + r.height) - i.height) : (i.minLeft = 0,
            i.minTop = 0,
            i.maxLeft = n.width - i.width,
            i.maxTop = n.height - i.height))
        },
        renderCropBox: function() {
            var e = this.options
              , t = this.containerData
              , o = this.cropBoxData;
            (o.width > o.maxWidth || o.width < o.minWidth) && (o.left = o.oldLeft),
            (o.height > o.maxHeight || o.height < o.minHeight) && (o.top = o.oldTop),
            o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth),
            o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight),
            this.limitCropBox(!1, !0),
            o.left = Math.min(Math.max(o.left, o.minLeft), o.maxLeft),
            o.top = Math.min(Math.max(o.top, o.minTop), o.maxTop),
            o.oldLeft = o.left,
            o.oldTop = o.top,
            e.movable && e.cropBoxMovable && Se(this.face, F, o.width >= t.width && o.height >= t.height ? p : f),
            ge(this.cropBox, he({
                width: o.width,
                height: o.height
            }, Oe({
                translateX: o.left,
                translateY: o.top
            }))),
            this.cropped && this.limited && this.limitCanvas(!0, !0),
            this.disabled || this.output()
        },
        output: function() {
            this.preview(),
            Me(this.element, $, this.getData())
        }
    }
      , Ne = {
        initPreview: function() {
            var e = this.element
              , t = this.crossOrigin
              , o = this.options.preview
              , n = t ? this.crossOriginUrl : this.url
              , r = e.alt || "The image to preview"
              , i = document.createElement("img");
            if (t && (i.crossOrigin = t),
            i.src = n,
            i.alt = r,
            this.viewBox.appendChild(i),
            this.viewBoxImage = i,
            o) {
                var a = o;
                "string" == typeof o ? a = e.ownerDocument.querySelectorAll(o) : o.querySelector && (a = [o]),
                this.previews = a,
                ue(a, function(e) {
                    var o = document.createElement("img");
                    Se(e, R, {
                        width: e.offsetWidth,
                        height: e.offsetHeight,
                        html: e.innerHTML
                    }),
                    t && (o.crossOrigin = t),
                    o.src = n,
                    o.alt = r,
                    o.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',
                    e.innerHTML = "",
                    e.appendChild(o)
                })
            }
        },
        resetPreview: function() {
            ue(this.previews, function(e) {
                var t = Pe(e, R);
                ge(e, {
                    width: t.width,
                    height: t.height
                }),
                e.innerHTML = t.html,
                function(e, t) {
                    if (ie(e[t]))
                        try {
                            delete e[t]
                        } catch (o) {
                            e[t] = void 0
                        }
                    else if (e.dataset)
                        try {
                            delete e.dataset[t]
                        } catch (o) {
                            e.dataset[t] = void 0
                        }
                    else
                        e.removeAttribute("data-".concat(xe(t)))
                }(e, R)
            })
        },
        preview: function() {
            var e = this.imageData
              , t = this.canvasData
              , o = this.cropBoxData
              , n = o.width
              , r = o.height
              , i = e.width
              , a = e.height
              , s = o.left - t.left - e.left
              , l = o.top - t.top - e.top;
            this.cropped && !this.disabled && (ge(this.viewBoxImage, he({
                width: i,
                height: a
            }, Oe(he({
                translateX: -s,
                translateY: -l
            }, e)))),
            ue(this.previews, function(t) {
                var o = Pe(t, R)
                  , c = o.width
                  , d = o.height
                  , u = c
                  , h = d
                  , f = 1;
                n && (h = r * (f = c / n)),
                r && h > d && (u = n * (f = d / r),
                h = d),
                ge(t, {
                    width: u,
                    height: h
                }),
                ge(t.getElementsByTagName("img")[0], he({
                    width: i * f,
                    height: a * f
                }, Oe(he({
                    translateX: -s * f,
                    translateY: -l * f
                }, e))))
            }))
        }
    }
      , Ge = {
        bind: function() {
            var e = this.element
              , t = this.options
              , o = this.cropper;
            le(t.cropstart) && Ee(e, B, t.cropstart),
            le(t.cropmove) && Ee(e, q, t.cropmove),
            le(t.cropend) && Ee(e, _, t.cropend),
            le(t.crop) && Ee(e, $, t.crop),
            le(t.zoom) && Ee(e, X, t.zoom),
            Ee(o, G, this.onCropStart = this.cropStart.bind(this)),
            t.zoomable && t.zoomOnWheel && Ee(o, V, this.onWheel = this.wheel.bind(this), {
                passive: !1,
                capture: !0
            }),
            t.toggleDragModeOnDblclick && Ee(o, N, this.onDblclick = this.dblclick.bind(this)),
            Ee(e.ownerDocument, W, this.onCropMove = this.cropMove.bind(this)),
            Ee(e.ownerDocument, U, this.onCropEnd = this.cropEnd.bind(this)),
            t.responsive && Ee(window, z, this.onResize = this.resize.bind(this))
        },
        unbind: function() {
            var e = this.element
              , t = this.options
              , o = this.cropper;
            le(t.cropstart) && Ce(e, B, t.cropstart),
            le(t.cropmove) && Ce(e, q, t.cropmove),
            le(t.cropend) && Ce(e, _, t.cropend),
            le(t.crop) && Ce(e, $, t.crop),
            le(t.zoom) && Ce(e, X, t.zoom),
            Ce(o, G, this.onCropStart),
            t.zoomable && t.zoomOnWheel && Ce(o, V, this.onWheel, {
                passive: !1,
                capture: !0
            }),
            t.toggleDragModeOnDblclick && Ce(o, N, this.onDblclick),
            Ce(e.ownerDocument, W, this.onCropMove),
            Ce(e.ownerDocument, U, this.onCropEnd),
            t.responsive && Ce(window, z, this.onResize)
        }
    }
      , We = {
        resize: function() {
            if (!this.disabled) {
                var e, t, o = this.options, n = this.container, r = this.containerData, i = n.offsetWidth / r.width, a = n.offsetHeight / r.height, s = Math.abs(i - 1) > Math.abs(a - 1) ? i : a;
                if (1 !== s)
                    o.restore && (e = this.getCanvasData(),
                    t = this.getCropBoxData()),
                    this.render(),
                    o.restore && (this.setCanvasData(ue(e, function(t, o) {
                        e[o] = t * s
                    })),
                    this.setCropBoxData(ue(t, function(e, o) {
                        t[o] = e * s
                    })))
            }
        },
        dblclick: function() {
            var e, t;
            this.disabled || this.options.dragMode === L || this.setDragMode((e = this.dragBox,
            t = j,
            (e.classList ? e.classList.contains(t) : e.className.indexOf(t) > -1) ? I : O))
        },
        wheel: function(e) {
            var t = this
              , o = Number(this.options.wheelZoomRatio) || .1
              , n = 1;
            this.disabled || (e.preventDefault(),
            this.wheeling || (this.wheeling = !0,
            setTimeout(function() {
                t.wheeling = !1
            }, 50),
            e.deltaY ? n = e.deltaY > 0 ? 1 : -1 : e.wheelDelta ? n = -e.wheelDelta / 120 : e.detail && (n = e.detail > 0 ? 1 : -1),
            this.zoom(-n * o, e)))
        },
        cropStart: function(e) {
            var t = e.buttons
              , o = e.button;
            if (!(this.disabled || ("mousedown" === e.type || "pointerdown" === e.type && "mouse" === e.pointerType) && (oe(t) && 1 !== t || oe(o) && 0 !== o || e.ctrlKey))) {
                var n, r = this.options, i = this.pointers;
                e.changedTouches ? ue(e.changedTouches, function(e) {
                    i[e.identifier] = Ie(e)
                }) : i[e.pointerId || 0] = Ie(e),
                n = Object.keys(i).length > 1 && r.zoomable && r.zoomOnTouch ? g : Pe(e.target, F),
                J.test(n) && !1 !== Me(this.element, B, {
                    originalEvent: e,
                    action: n
                }) && (e.preventDefault(),
                this.action = n,
                this.cropping = !1,
                n === m && (this.cropping = !0,
                ve(this.dragBox, A)))
            }
        },
        cropMove: function(e) {
            var t = this.action;
            if (!this.disabled && t) {
                var o = this.pointers;
                e.preventDefault(),
                !1 !== Me(this.element, q, {
                    originalEvent: e,
                    action: t
                }) && (e.changedTouches ? ue(e.changedTouches, function(e) {
                    he(o[e.identifier] || {}, Ie(e, !0))
                }) : he(o[e.pointerId || 0] || {}, Ie(e, !0)),
                this.change(e))
            }
        },
        cropEnd: function(e) {
            if (!this.disabled) {
                var t = this.action
                  , o = this.pointers;
                e.changedTouches ? ue(e.changedTouches, function(e) {
                    delete o[e.identifier]
                }) : delete o[e.pointerId || 0],
                t && (e.preventDefault(),
                Object.keys(o).length || (this.action = ""),
                this.cropping && (this.cropping = !1,
                be(this.dragBox, A, this.cropped && this.options.modal)),
                Me(this.element, _, {
                    originalEvent: e,
                    action: t
                }))
            }
        }
    }
      , Ue = {
        change: function(e) {
            var o, n = this.options, r = this.canvasData, i = this.containerData, a = this.cropBoxData, s = this.pointers, l = this.action, c = n.aspectRatio, d = a.left, u = a.top, h = a.width, j = a.height, C = d + h, M = u + j, D = 0, A = 0, T = i.width, F = i.height, R = !0;
            !c && e.shiftKey && (c = h && j ? h / j : 1),
            this.limited && (D = a.minLeft,
            A = a.minTop,
            T = D + Math.min(i.width, r.width, r.left + r.width),
            F = A + Math.min(i.height, r.height, r.top + r.height));
            var O = s[Object.keys(s)[0]]
              , I = {
                x: O.endX - O.startX,
                y: O.endY - O.startY
            }
              , L = function(e) {
                switch (e) {
                case v:
                    C + I.x > T && (I.x = T - C);
                    break;
                case w:
                    d + I.x < D && (I.x = D - d);
                    break;
                case y:
                    u + I.y < A && (I.y = A - u);
                    break;
                case b:
                    M + I.y > F && (I.y = F - M)
                }
            };
            switch (l) {
            case f:
                d += I.x,
                u += I.y;
                break;
            case v:
                if (I.x >= 0 && (C >= T || c && (u <= A || M >= F))) {
                    R = !1;
                    break
                }
                L(v),
                (h += I.x) < 0 && (l = w,
                d -= h = -h),
                c && (j = h / c,
                u += (a.height - j) / 2);
                break;
            case y:
                if (I.y <= 0 && (u <= A || c && (d <= D || C >= T))) {
                    R = !1;
                    break
                }
                L(y),
                j -= I.y,
                u += I.y,
                j < 0 && (l = b,
                u -= j = -j),
                c && (h = j * c,
                d += (a.width - h) / 2);
                break;
            case w:
                if (I.x <= 0 && (d <= D || c && (u <= A || M >= F))) {
                    R = !1;
                    break
                }
                L(w),
                h -= I.x,
                d += I.x,
                h < 0 && (l = v,
                d -= h = -h),
                c && (j = h / c,
                u += (a.height - j) / 2);
                break;
            case b:
                if (I.y >= 0 && (M >= F || c && (d <= D || C >= T))) {
                    R = !1;
                    break
                }
                L(b),
                (j += I.y) < 0 && (l = y,
                u -= j = -j),
                c && (h = j * c,
                d += (a.width - h) / 2);
                break;
            case x:
                if (c) {
                    if (I.y <= 0 && (u <= A || C >= T)) {
                        R = !1;
                        break
                    }
                    L(y),
                    j -= I.y,
                    u += I.y,
                    h = j * c
                } else
                    L(y),
                    L(v),
                    I.x >= 0 ? C < T ? h += I.x : I.y <= 0 && u <= A && (R = !1) : h += I.x,
                    I.y <= 0 ? u > A && (j -= I.y,
                    u += I.y) : (j -= I.y,
                    u += I.y);
                h < 0 && j < 0 ? (l = k,
                u -= j = -j,
                d -= h = -h) : h < 0 ? (l = P,
                d -= h = -h) : j < 0 && (l = S,
                u -= j = -j);
                break;
            case P:
                if (c) {
                    if (I.y <= 0 && (u <= A || d <= D)) {
                        R = !1;
                        break
                    }
                    L(y),
                    j -= I.y,
                    u += I.y,
                    h = j * c,
                    d += a.width - h
                } else
                    L(y),
                    L(w),
                    I.x <= 0 ? d > D ? (h -= I.x,
                    d += I.x) : I.y <= 0 && u <= A && (R = !1) : (h -= I.x,
                    d += I.x),
                    I.y <= 0 ? u > A && (j -= I.y,
                    u += I.y) : (j -= I.y,
                    u += I.y);
                h < 0 && j < 0 ? (l = S,
                u -= j = -j,
                d -= h = -h) : h < 0 ? (l = x,
                d -= h = -h) : j < 0 && (l = k,
                u -= j = -j);
                break;
            case k:
                if (c) {
                    if (I.x <= 0 && (d <= D || M >= F)) {
                        R = !1;
                        break
                    }
                    L(w),
                    h -= I.x,
                    d += I.x,
                    j = h / c
                } else
                    L(b),
                    L(w),
                    I.x <= 0 ? d > D ? (h -= I.x,
                    d += I.x) : I.y >= 0 && M >= F && (R = !1) : (h -= I.x,
                    d += I.x),
                    I.y >= 0 ? M < F && (j += I.y) : j += I.y;
                h < 0 && j < 0 ? (l = x,
                u -= j = -j,
                d -= h = -h) : h < 0 ? (l = S,
                d -= h = -h) : j < 0 && (l = P,
                u -= j = -j);
                break;
            case S:
                if (c) {
                    if (I.x >= 0 && (C >= T || M >= F)) {
                        R = !1;
                        break
                    }
                    L(v),
                    j = (h += I.x) / c
                } else
                    L(b),
                    L(v),
                    I.x >= 0 ? C < T ? h += I.x : I.y >= 0 && M >= F && (R = !1) : h += I.x,
                    I.y >= 0 ? M < F && (j += I.y) : j += I.y;
                h < 0 && j < 0 ? (l = P,
                u -= j = -j,
                d -= h = -h) : h < 0 ? (l = k,
                d -= h = -h) : j < 0 && (l = x,
                u -= j = -j);
                break;
            case p:
                this.move(I.x, I.y),
                R = !1;
                break;
            case g:
                this.zoom(function(e) {
                    var o = t({}, e)
                      , n = 0;
                    return ue(e, function(e, t) {
                        delete o[t],
                        ue(o, function(t) {
                            var o = Math.abs(e.startX - t.startX)
                              , r = Math.abs(e.startY - t.startY)
                              , i = Math.abs(e.endX - t.endX)
                              , a = Math.abs(e.endY - t.endY)
                              , s = Math.sqrt(o * o + r * r)
                              , l = (Math.sqrt(i * i + a * a) - s) / s;
                            Math.abs(l) > Math.abs(n) && (n = l)
                        })
                    }),
                    n
                }(s), e),
                R = !1;
                break;
            case m:
                if (!I.x || !I.y) {
                    R = !1;
                    break
                }
                o = De(this.cropper),
                d = O.startX - o.left,
                u = O.startY - o.top,
                h = a.minWidth,
                j = a.minHeight,
                I.x > 0 ? l = I.y > 0 ? S : x : I.x < 0 && (d -= h,
                l = I.y > 0 ? k : P),
                I.y < 0 && (u -= j),
                this.cropped || (we(this.cropBox, E),
                this.cropped = !0,
                this.limited && this.limitCropBox(!0, !0))
            }
            R && (a.width = h,
            a.height = j,
            a.left = d,
            a.top = u,
            this.action = l,
            this.renderCropBox()),
            ue(s, function(e) {
                e.startX = e.endX,
                e.startY = e.endY
            })
        }
    }
      , He = {
        crop: function() {
            return !this.ready || this.cropped || this.disabled || (this.cropped = !0,
            this.limitCropBox(!0, !0),
            this.options.modal && ve(this.dragBox, A),
            we(this.cropBox, E),
            this.setCropBoxData(this.initialCropBoxData)),
            this
        },
        reset: function() {
            return this.ready && !this.disabled && (this.imageData = he({}, this.initialImageData),
            this.canvasData = he({}, this.initialCanvasData),
            this.cropBoxData = he({}, this.initialCropBoxData),
            this.renderCanvas(),
            this.cropped && this.renderCropBox()),
            this
        },
        clear: function() {
            return this.cropped && !this.disabled && (he(this.cropBoxData, {
                left: 0,
                top: 0,
                width: 0,
                height: 0
            }),
            this.cropped = !1,
            this.renderCropBox(),
            this.limitCanvas(!0, !0),
            this.renderCanvas(),
            we(this.dragBox, A),
            ve(this.cropBox, E)),
            this
        },
        replace: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return !this.disabled && e && (this.isImg && (this.element.src = e),
            t ? (this.url = e,
            this.image.src = e,
            this.ready && (this.viewBoxImage.src = e,
            ue(this.previews, function(t) {
                t.getElementsByTagName("img")[0].src = e
            }))) : (this.isImg && (this.replaced = !0),
            this.options.data = null,
            this.uncreate(),
            this.load(e))),
            this
        },
        enable: function() {
            return this.ready && this.disabled && (this.disabled = !1,
            we(this.cropper, C)),
            this
        },
        disable: function() {
            return this.ready && !this.disabled && (this.disabled = !0,
            ve(this.cropper, C)),
            this
        },
        destroy: function() {
            var e = this.element;
            return e[h] ? (e[h] = void 0,
            this.isImg && this.replaced && (e.src = this.originalUrl),
            this.uncreate(),
            this) : this
        },
        move: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e
              , o = this.canvasData
              , n = o.left
              , r = o.top;
            return this.moveTo(re(e) ? e : n + Number(e), re(t) ? t : r + Number(t))
        },
        moveTo: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e
              , o = this.canvasData
              , n = !1;
            return e = Number(e),
            t = Number(t),
            this.ready && !this.disabled && this.options.movable && (oe(e) && (o.left = e,
            n = !0),
            oe(t) && (o.top = t,
            n = !0),
            n && this.renderCanvas(!0)),
            this
        },
        zoom: function(e, t) {
            var o = this.canvasData;
            return e = (e = Number(e)) < 0 ? 1 / (1 - e) : 1 + e,
            this.zoomTo(o.width * e / o.naturalWidth, null, t)
        },
        zoomTo: function(e, t, o) {
            var n = this.options
              , r = this.canvasData
              , i = r.width
              , a = r.height
              , s = r.naturalWidth
              , l = r.naturalHeight;
            if ((e = Number(e)) >= 0 && this.ready && !this.disabled && n.zoomable) {
                var c = s * e
                  , d = l * e;
                if (!1 === Me(this.element, X, {
                    ratio: e,
                    oldRatio: i / s,
                    originalEvent: o
                }))
                    return this;
                if (o) {
                    var u = this.pointers
                      , h = De(this.cropper)
                      , f = u && Object.keys(u).length ? function(e) {
                        var t = 0
                          , o = 0
                          , n = 0;
                        return ue(e, function(e) {
                            var r = e.startX
                              , i = e.startY;
                            t += r,
                            o += i,
                            n += 1
                        }),
                        {
                            pageX: t /= n,
                            pageY: o /= n
                        }
                    }(u) : {
                        pageX: o.pageX,
                        pageY: o.pageY
                    };
                    r.left -= (c - i) * ((f.pageX - h.left - r.left) / i),
                    r.top -= (d - a) * ((f.pageY - h.top - r.top) / a)
                } else
                    se(t) && oe(t.x) && oe(t.y) ? (r.left -= (c - i) * ((t.x - r.left) / i),
                    r.top -= (d - a) * ((t.y - r.top) / a)) : (r.left -= (c - i) / 2,
                    r.top -= (d - a) / 2);
                r.width = c,
                r.height = d,
                this.renderCanvas(!0)
            }
            return this
        },
        rotate: function(e) {
            return this.rotateTo((this.imageData.rotate || 0) + Number(e))
        },
        rotateTo: function(e) {
            return oe(e = Number(e)) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = e % 360,
            this.renderCanvas(!0, !0)),
            this
        },
        scaleX: function(e) {
            var t = this.imageData.scaleY;
            return this.scale(e, oe(t) ? t : 1)
        },
        scaleY: function(e) {
            var t = this.imageData.scaleX;
            return this.scale(oe(t) ? t : 1, e)
        },
        scale: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e
              , o = this.imageData
              , n = !1;
            return e = Number(e),
            t = Number(t),
            this.ready && !this.disabled && this.options.scalable && (oe(e) && (o.scaleX = e,
            n = !0),
            oe(t) && (o.scaleY = t,
            n = !0),
            n && this.renderCanvas(!0, !0)),
            this
        },
        getData: function() {
            var e, t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], o = this.options, n = this.imageData, r = this.canvasData, i = this.cropBoxData;
            if (this.ready && this.cropped) {
                e = {
                    x: i.left - r.left,
                    y: i.top - r.top,
                    width: i.width,
                    height: i.height
                };
                var a = n.width / n.naturalWidth;
                if (ue(e, function(t, o) {
                    e[o] = t / a
                }),
                t) {
                    var s = Math.round(e.y + e.height)
                      , l = Math.round(e.x + e.width);
                    e.x = Math.round(e.x),
                    e.y = Math.round(e.y),
                    e.width = l - e.x,
                    e.height = s - e.y
                }
            } else
                e = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                };
            return o.rotatable && (e.rotate = n.rotate || 0),
            o.scalable && (e.scaleX = n.scaleX || 1,
            e.scaleY = n.scaleY || 1),
            e
        },
        setData: function(e) {
            var t = this.options
              , o = this.imageData
              , n = this.canvasData
              , r = {};
            if (this.ready && !this.disabled && se(e)) {
                var i = !1;
                t.rotatable && oe(e.rotate) && e.rotate !== o.rotate && (o.rotate = e.rotate,
                i = !0),
                t.scalable && (oe(e.scaleX) && e.scaleX !== o.scaleX && (o.scaleX = e.scaleX,
                i = !0),
                oe(e.scaleY) && e.scaleY !== o.scaleY && (o.scaleY = e.scaleY,
                i = !0)),
                i && this.renderCanvas(!0, !0);
                var a = o.width / o.naturalWidth;
                oe(e.x) && (r.left = e.x * a + n.left),
                oe(e.y) && (r.top = e.y * a + n.top),
                oe(e.width) && (r.width = e.width * a),
                oe(e.height) && (r.height = e.height * a),
                this.setCropBoxData(r)
            }
            return this
        },
        getContainerData: function() {
            return this.ready ? he({}, this.containerData) : {}
        },
        getImageData: function() {
            return this.sized ? he({}, this.imageData) : {}
        },
        getCanvasData: function() {
            var e = this.canvasData
              , t = {};
            return this.ready && ue(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(o) {
                t[o] = e[o]
            }),
            t
        },
        setCanvasData: function(e) {
            var t = this.canvasData
              , o = t.aspectRatio;
            return this.ready && !this.disabled && se(e) && (oe(e.left) && (t.left = e.left),
            oe(e.top) && (t.top = e.top),
            oe(e.width) ? (t.width = e.width,
            t.height = e.width / o) : oe(e.height) && (t.height = e.height,
            t.width = e.height * o),
            this.renderCanvas(!0)),
            this
        },
        getCropBoxData: function() {
            var e, t = this.cropBoxData;
            return this.ready && this.cropped && (e = {
                left: t.left,
                top: t.top,
                width: t.width,
                height: t.height
            }),
            e || {}
        },
        setCropBoxData: function(e) {
            var t, o, n = this.cropBoxData, r = this.options.aspectRatio;
            return this.ready && this.cropped && !this.disabled && se(e) && (oe(e.left) && (n.left = e.left),
            oe(e.top) && (n.top = e.top),
            oe(e.width) && e.width !== n.width && (t = !0,
            n.width = e.width),
            oe(e.height) && e.height !== n.height && (o = !0,
            n.height = e.height),
            r && (t ? n.height = n.width / r : o && (n.width = n.height * r)),
            this.renderCropBox()),
            this
        },
        getCroppedCanvas: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (!this.ready || !window.HTMLCanvasElement)
                return null;
            var t = this.canvasData
              , o = function(e, t, o, n) {
                var r = t.aspectRatio
                  , i = t.naturalWidth
                  , s = t.naturalHeight
                  , l = t.rotate
                  , c = void 0 === l ? 0 : l
                  , d = t.scaleX
                  , u = void 0 === d ? 1 : d
                  , h = t.scaleY
                  , f = void 0 === h ? 1 : h
                  , m = o.aspectRatio
                  , p = o.naturalWidth
                  , g = o.naturalHeight
                  , v = n.fillColor
                  , w = void 0 === v ? "transparent" : v
                  , b = n.imageSmoothingEnabled
                  , y = void 0 === b || b
                  , x = n.imageSmoothingQuality
                  , P = void 0 === x ? "low" : x
                  , S = n.maxWidth
                  , k = void 0 === S ? 1 / 0 : S
                  , j = n.maxHeight
                  , C = void 0 === j ? 1 / 0 : j
                  , E = n.minWidth
                  , M = void 0 === E ? 0 : E
                  , D = n.minHeight
                  , A = void 0 === D ? 0 : D
                  , T = document.createElement("canvas")
                  , F = T.getContext("2d")
                  , R = Le({
                    aspectRatio: m,
                    width: k,
                    height: C
                })
                  , O = Le({
                    aspectRatio: m,
                    width: M,
                    height: A
                }, "cover")
                  , I = Math.min(R.width, Math.max(O.width, p))
                  , L = Math.min(R.height, Math.max(O.height, g))
                  , $ = Le({
                    aspectRatio: r,
                    width: k,
                    height: C
                })
                  , _ = Le({
                    aspectRatio: r,
                    width: M,
                    height: A
                }, "cover")
                  , q = Math.min($.width, Math.max(_.width, i))
                  , B = Math.min($.height, Math.max(_.height, s))
                  , N = [-q / 2, -B / 2, q, B];
                return T.width = me(I),
                T.height = me(L),
                F.fillStyle = w,
                F.fillRect(0, 0, I, L),
                F.save(),
                F.translate(I / 2, L / 2),
                F.rotate(c * Math.PI / 180),
                F.scale(u, f),
                F.imageSmoothingEnabled = y,
                F.imageSmoothingQuality = P,
                F.drawImage.apply(F, [e].concat(a(N.map(function(e) {
                    return Math.floor(me(e))
                })))),
                F.restore(),
                T
            }(this.image, this.imageData, t, e);
            if (!this.cropped)
                return o;
            var n = this.getData(e.rounded)
              , r = n.x
              , i = n.y
              , s = n.width
              , l = n.height
              , c = o.width / Math.floor(t.naturalWidth);
            1 !== c && (r *= c,
            i *= c,
            s *= c,
            l *= c);
            var d = s / l
              , u = Le({
                aspectRatio: d,
                width: e.maxWidth || 1 / 0,
                height: e.maxHeight || 1 / 0
            })
              , h = Le({
                aspectRatio: d,
                width: e.minWidth || 0,
                height: e.minHeight || 0
            }, "cover")
              , f = Le({
                aspectRatio: d,
                width: e.width || (1 !== c ? o.width : s),
                height: e.height || (1 !== c ? o.height : l)
            })
              , m = f.width
              , p = f.height;
            m = Math.min(u.width, Math.max(h.width, m)),
            p = Math.min(u.height, Math.max(h.height, p));
            var g = document.createElement("canvas")
              , v = g.getContext("2d");
            g.width = me(m),
            g.height = me(p),
            v.fillStyle = e.fillColor || "transparent",
            v.fillRect(0, 0, m, p);
            var w = e.imageSmoothingEnabled
              , b = void 0 === w || w
              , y = e.imageSmoothingQuality;
            v.imageSmoothingEnabled = b,
            y && (v.imageSmoothingQuality = y);
            var x, P, S, k, j, C, E = o.width, M = o.height, D = r, A = i;
            D <= -s || D > E ? (D = 0,
            x = 0,
            S = 0,
            j = 0) : D <= 0 ? (S = -D,
            D = 0,
            j = x = Math.min(E, s + D)) : D <= E && (S = 0,
            j = x = Math.min(s, E - D)),
            x <= 0 || A <= -l || A > M ? (A = 0,
            P = 0,
            k = 0,
            C = 0) : A <= 0 ? (k = -A,
            A = 0,
            C = P = Math.min(M, l + A)) : A <= M && (k = 0,
            C = P = Math.min(l, M - A));
            var T = [D, A, x, P];
            if (j > 0 && C > 0) {
                var F = m / s;
                T.push(S * F, k * F, j * F, C * F)
            }
            return v.drawImage.apply(v, [o].concat(a(T.map(function(e) {
                return Math.floor(me(e))
            })))),
            g
        },
        setAspectRatio: function(e) {
            var t = this.options;
            return this.disabled || re(e) || (t.aspectRatio = Math.max(0, e) || NaN,
            this.ready && (this.initCropBox(),
            this.cropped && this.renderCropBox())),
            this
        },
        setDragMode: function(e) {
            var t = this.options
              , o = this.dragBox
              , n = this.face;
            if (this.ready && !this.disabled) {
                var r = e === O
                  , i = t.movable && e === I;
                e = r || i ? e : L,
                t.dragMode = e,
                Se(o, F, e),
                be(o, j, r),
                be(o, T, i),
                t.cropBoxMovable || (Se(n, F, e),
                be(n, j, r),
                be(n, T, i))
            }
            return this
        }
    }
      , ze = c.Cropper
      , Ve = function() {
        function e(t) {
            var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            !t || !Z.test(t.tagName))
                throw new Error("The first argument is required and must be an <img> or <canvas> element.");
            this.element = t,
            this.options = he({}, ee, se(o) && o),
            this.cropped = !1,
            this.disabled = !1,
            this.pointers = {},
            this.ready = !1,
            this.reloading = !1,
            this.replaced = !1,
            this.sized = !1,
            this.sizing = !1,
            this.init()
        }
        return t = e,
        n = [{
            key: "noConflict",
            value: function() {
                return window.Cropper = ze,
                e
            }
        }, {
            key: "setDefaults",
            value: function(e) {
                he(ee, se(e) && e)
            }
        }],
        (o = [{
            key: "init",
            value: function() {
                var e, t = this.element, o = t.tagName.toLowerCase();
                if (!t[h]) {
                    if (t[h] = this,
                    "img" === o) {
                        if (this.isImg = !0,
                        e = t.getAttribute("src") || "",
                        this.originalUrl = e,
                        !e)
                            return;
                        e = t.src
                    } else
                        "canvas" === o && window.HTMLCanvasElement && (e = t.toDataURL());
                    this.load(e)
                }
            }
        }, {
            key: "load",
            value: function(e) {
                var t = this;
                if (e) {
                    this.url = e,
                    this.imageData = {};
                    var o = this.element
                      , n = this.options;
                    if (n.rotatable || n.scalable || (n.checkOrientation = !1),
                    n.checkOrientation && window.ArrayBuffer)
                        if (K.test(e))
                            Q.test(e) ? this.read((r = e.replace(_e, ""),
                            i = atob(r),
                            a = new ArrayBuffer(i.length),
                            ue(s = new Uint8Array(a), function(e, t) {
                                s[t] = i.charCodeAt(t)
                            }),
                            a)) : this.clone();
                        else {
                            var r, i, a, s, l = new XMLHttpRequest, c = this.clone.bind(this);
                            this.reloading = !0,
                            this.xhr = l,
                            l.onabort = c,
                            l.onerror = c,
                            l.ontimeout = c,
                            l.onprogress = function() {
                                l.getResponseHeader("content-type") !== Y && l.abort()
                            }
                            ,
                            l.onload = function() {
                                t.read(l.response)
                            }
                            ,
                            l.onloadend = function() {
                                t.reloading = !1,
                                t.xhr = null
                            }
                            ,
                            n.checkCrossOrigin && Fe(e) && o.crossOrigin && (e = Re(e)),
                            l.open("GET", e, !0),
                            l.responseType = "arraybuffer",
                            l.withCredentials = "use-credentials" === o.crossOrigin,
                            l.send()
                        }
                    else
                        this.clone()
                }
            }
        }, {
            key: "read",
            value: function(e) {
                var t = this.options
                  , o = this.imageData
                  , n = qe(e)
                  , r = 0
                  , i = 1
                  , a = 1;
                if (n > 1) {
                    this.url = function(e, t) {
                        for (var o = [], n = new Uint8Array(e); n.length > 0; )
                            o.push($e.apply(null, de(n.subarray(0, 8192)))),
                            n = n.subarray(8192);
                        return "data:".concat(t, ";base64,").concat(btoa(o.join("")))
                    }(e, Y);
                    var s = function(e) {
                        var t = 0
                          , o = 1
                          , n = 1;
                        switch (e) {
                        case 2:
                            o = -1;
                            break;
                        case 3:
                            t = -180;
                            break;
                        case 4:
                            n = -1;
                            break;
                        case 5:
                            t = 90,
                            n = -1;
                            break;
                        case 6:
                            t = 90;
                            break;
                        case 7:
                            t = 90,
                            o = -1;
                            break;
                        case 8:
                            t = -90
                        }
                        return {
                            rotate: t,
                            scaleX: o,
                            scaleY: n
                        }
                    }(n);
                    r = s.rotate,
                    i = s.scaleX,
                    a = s.scaleY
                }
                t.rotatable && (o.rotate = r),
                t.scalable && (o.scaleX = i,
                o.scaleY = a),
                this.clone()
            }
        }, {
            key: "clone",
            value: function() {
                var e = this.element
                  , t = this.url
                  , o = e.crossOrigin
                  , n = t;
                this.options.checkCrossOrigin && Fe(t) && (o || (o = "anonymous"),
                n = Re(t)),
                this.crossOrigin = o,
                this.crossOriginUrl = n;
                var r = document.createElement("img");
                o && (r.crossOrigin = o),
                r.src = n || t,
                r.alt = e.alt || "The image to crop",
                this.image = r,
                r.onload = this.start.bind(this),
                r.onerror = this.stop.bind(this),
                ve(r, M),
                e.parentNode.insertBefore(r, e.nextSibling)
            }
        }, {
            key: "start",
            value: function() {
                var e = this
                  , t = this.image;
                t.onload = null,
                t.onerror = null,
                this.sizing = !0;
                var o = c.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(c.navigator.userAgent)
                  , n = function(t, o) {
                    he(e.imageData, {
                        naturalWidth: t,
                        naturalHeight: o,
                        aspectRatio: t / o
                    }),
                    e.initialImageData = he({}, e.imageData),
                    e.sizing = !1,
                    e.sized = !0,
                    e.build()
                };
                if (!t.naturalWidth || o) {
                    var r = document.createElement("img")
                      , i = document.body || document.documentElement;
                    this.sizingImage = r,
                    r.onload = function() {
                        n(r.width, r.height),
                        o || i.removeChild(r)
                    }
                    ,
                    r.src = t.src,
                    o || (r.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",
                    i.appendChild(r))
                } else
                    n(t.naturalWidth, t.naturalHeight)
            }
        }, {
            key: "stop",
            value: function() {
                var e = this.image;
                e.onload = null,
                e.onerror = null,
                e.parentNode.removeChild(e),
                this.image = null
            }
        }, {
            key: "build",
            value: function() {
                if (this.sized && !this.ready) {
                    var e = this.element
                      , t = this.options
                      , o = this.image
                      , n = e.parentNode
                      , r = document.createElement("div");
                    r.innerHTML = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';
                    var i = r.querySelector(".".concat(h, "-container"))
                      , a = i.querySelector(".".concat(h, "-canvas"))
                      , s = i.querySelector(".".concat(h, "-drag-box"))
                      , l = i.querySelector(".".concat(h, "-crop-box"))
                      , c = l.querySelector(".".concat(h, "-face"));
                    this.container = n,
                    this.cropper = i,
                    this.canvas = a,
                    this.dragBox = s,
                    this.cropBox = l,
                    this.viewBox = i.querySelector(".".concat(h, "-view-box")),
                    this.face = c,
                    a.appendChild(o),
                    ve(e, E),
                    n.insertBefore(i, e.nextSibling),
                    we(o, M),
                    this.initPreview(),
                    this.bind(),
                    t.initialAspectRatio = Math.max(0, t.initialAspectRatio) || NaN,
                    t.aspectRatio = Math.max(0, t.aspectRatio) || NaN,
                    t.viewMode = Math.max(0, Math.min(3, Math.round(t.viewMode))) || 0,
                    ve(l, E),
                    t.guides || ve(l.getElementsByClassName("".concat(h, "-dashed")), E),
                    t.center || ve(l.getElementsByClassName("".concat(h, "-center")), E),
                    t.background && ve(i, "".concat(h, "-bg")),
                    t.highlight || ve(c, D),
                    t.cropBoxMovable && (ve(c, T),
                    Se(c, F, f)),
                    t.cropBoxResizable || (ve(l.getElementsByClassName("".concat(h, "-line")), E),
                    ve(l.getElementsByClassName("".concat(h, "-point")), E)),
                    this.render(),
                    this.ready = !0,
                    this.setDragMode(t.dragMode),
                    t.autoCrop && this.crop(),
                    this.setData(t.data),
                    le(t.ready) && Ee(e, H, t.ready, {
                        once: !0
                    }),
                    Me(e, H)
                }
            }
        }, {
            key: "unbuild",
            value: function() {
                if (this.ready) {
                    this.ready = !1,
                    this.unbind(),
                    this.resetPreview();
                    var e = this.cropper.parentNode;
                    e && e.removeChild(this.cropper),
                    we(this.element, E)
                }
            }
        }, {
            key: "uncreate",
            value: function() {
                this.ready ? (this.unbuild(),
                this.ready = !1,
                this.cropped = !1) : this.sizing ? (this.sizingImage.onload = null,
                this.sizing = !1,
                this.sized = !1) : this.reloading ? (this.xhr.onabort = null,
                this.xhr.abort()) : this.image && this.stop()
            }
        }]) && r(t.prototype, o),
        n && r(t, n),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        t;
        var t, o, n
    }();
    return he(Ve.prototype, Be, Ne, Ge, We, Ue, He),
    Ve
}),
function() {
    var e = !1
      , t = function(e) {
        return e instanceof t ? e : this instanceof t ? void (this.EXIFwrapped = e) : new t(e)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = t),
    exports.EXIF = t) : this.EXIF = t;
    var o = t.Tags = {
        36864: "ExifVersion",
        40960: "FlashpixVersion",
        40961: "ColorSpace",
        40962: "PixelXDimension",
        40963: "PixelYDimension",
        37121: "ComponentsConfiguration",
        37122: "CompressedBitsPerPixel",
        37500: "MakerNote",
        37510: "UserComment",
        40964: "RelatedSoundFile",
        36867: "DateTimeOriginal",
        36868: "DateTimeDigitized",
        37520: "SubsecTime",
        37521: "SubsecTimeOriginal",
        37522: "SubsecTimeDigitized",
        33434: "ExposureTime",
        33437: "FNumber",
        34850: "ExposureProgram",
        34852: "SpectralSensitivity",
        34855: "ISOSpeedRatings",
        34856: "OECF",
        37377: "ShutterSpeedValue",
        37378: "ApertureValue",
        37379: "BrightnessValue",
        37380: "ExposureBias",
        37381: "MaxApertureValue",
        37382: "SubjectDistance",
        37383: "MeteringMode",
        37384: "LightSource",
        37385: "Flash",
        37396: "SubjectArea",
        37386: "FocalLength",
        41483: "FlashEnergy",
        41484: "SpatialFrequencyResponse",
        41486: "FocalPlaneXResolution",
        41487: "FocalPlaneYResolution",
        41488: "FocalPlaneResolutionUnit",
        41492: "SubjectLocation",
        41493: "ExposureIndex",
        41495: "SensingMethod",
        41728: "FileSource",
        41729: "SceneType",
        41730: "CFAPattern",
        41985: "CustomRendered",
        41986: "ExposureMode",
        41987: "WhiteBalance",
        41988: "DigitalZoomRation",
        41989: "FocalLengthIn35mmFilm",
        41990: "SceneCaptureType",
        41991: "GainControl",
        41992: "Contrast",
        41993: "Saturation",
        41994: "Sharpness",
        41995: "DeviceSettingDescription",
        41996: "SubjectDistanceRange",
        40965: "InteroperabilityIFDPointer",
        42016: "ImageUniqueID"
    }
      , n = t.TiffTags = {
        256: "ImageWidth",
        257: "ImageHeight",
        34665: "ExifIFDPointer",
        34853: "GPSInfoIFDPointer",
        40965: "InteroperabilityIFDPointer",
        258: "BitsPerSample",
        259: "Compression",
        262: "PhotometricInterpretation",
        274: "Orientation",
        277: "SamplesPerPixel",
        284: "PlanarConfiguration",
        530: "YCbCrSubSampling",
        531: "YCbCrPositioning",
        282: "XResolution",
        283: "YResolution",
        296: "ResolutionUnit",
        273: "StripOffsets",
        278: "RowsPerStrip",
        279: "StripByteCounts",
        513: "JPEGInterchangeFormat",
        514: "JPEGInterchangeFormatLength",
        301: "TransferFunction",
        318: "WhitePoint",
        319: "PrimaryChromaticities",
        529: "YCbCrCoefficients",
        532: "ReferenceBlackWhite",
        306: "DateTime",
        270: "ImageDescription",
        271: "Make",
        272: "Model",
        305: "Software",
        315: "Artist",
        33432: "Copyright"
    }
      , r = t.GPSTags = {
        0: "GPSVersionID",
        1: "GPSLatitudeRef",
        2: "GPSLatitude",
        3: "GPSLongitudeRef",
        4: "GPSLongitude",
        5: "GPSAltitudeRef",
        6: "GPSAltitude",
        7: "GPSTimeStamp",
        8: "GPSSatellites",
        9: "GPSStatus",
        10: "GPSMeasureMode",
        11: "GPSDOP",
        12: "GPSSpeedRef",
        13: "GPSSpeed",
        14: "GPSTrackRef",
        15: "GPSTrack",
        16: "GPSImgDirectionRef",
        17: "GPSImgDirection",
        18: "GPSMapDatum",
        19: "GPSDestLatitudeRef",
        20: "GPSDestLatitude",
        21: "GPSDestLongitudeRef",
        22: "GPSDestLongitude",
        23: "GPSDestBearingRef",
        24: "GPSDestBearing",
        25: "GPSDestDistanceRef",
        26: "GPSDestDistance",
        27: "GPSProcessingMethod",
        28: "GPSAreaInformation",
        29: "GPSDateStamp",
        30: "GPSDifferential"
    }
      , i = t.IFD1Tags = {
        256: "ImageWidth",
        257: "ImageHeight",
        258: "BitsPerSample",
        259: "Compression",
        262: "PhotometricInterpretation",
        273: "StripOffsets",
        274: "Orientation",
        277: "SamplesPerPixel",
        278: "RowsPerStrip",
        279: "StripByteCounts",
        282: "XResolution",
        283: "YResolution",
        284: "PlanarConfiguration",
        296: "ResolutionUnit",
        513: "JpegIFOffset",
        514: "JpegIFByteCount",
        529: "YCbCrCoefficients",
        530: "YCbCrSubSampling",
        531: "YCbCrPositioning",
        532: "ReferenceBlackWhite"
    }
      , a = t.StringValues = {
        ExposureProgram: {
            0: "Not defined",
            1: "Manual",
            2: "Normal program",
            3: "Aperture priority",
            4: "Shutter priority",
            5: "Creative program",
            6: "Action program",
            7: "Portrait mode",
            8: "Landscape mode"
        },
        MeteringMode: {
            0: "Unknown",
            1: "Average",
            2: "CenterWeightedAverage",
            3: "Spot",
            4: "MultiSpot",
            5: "Pattern",
            6: "Partial",
            255: "Other"
        },
        LightSource: {
            0: "Unknown",
            1: "Daylight",
            2: "Fluorescent",
            3: "Tungsten (incandescent light)",
            4: "Flash",
            9: "Fine weather",
            10: "Cloudy weather",
            11: "Shade",
            12: "Daylight fluorescent (D 5700 - 7100K)",
            13: "Day white fluorescent (N 4600 - 5400K)",
            14: "Cool white fluorescent (W 3900 - 4500K)",
            15: "White fluorescent (WW 3200 - 3700K)",
            17: "Standard light A",
            18: "Standard light B",
            19: "Standard light C",
            20: "D55",
            21: "D65",
            22: "D75",
            23: "D50",
            24: "ISO studio tungsten",
            255: "Other"
        },
        Flash: {
            0: "Flash did not fire",
            1: "Flash fired",
            5: "Strobe return light not detected",
            7: "Strobe return light detected",
            9: "Flash fired, compulsory flash mode",
            13: "Flash fired, compulsory flash mode, return light not detected",
            15: "Flash fired, compulsory flash mode, return light detected",
            16: "Flash did not fire, compulsory flash mode",
            24: "Flash did not fire, auto mode",
            25: "Flash fired, auto mode",
            29: "Flash fired, auto mode, return light not detected",
            31: "Flash fired, auto mode, return light detected",
            32: "No flash function",
            65: "Flash fired, red-eye reduction mode",
            69: "Flash fired, red-eye reduction mode, return light not detected",
            71: "Flash fired, red-eye reduction mode, return light detected",
            73: "Flash fired, compulsory flash mode, red-eye reduction mode",
            77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
            79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
            89: "Flash fired, auto mode, red-eye reduction mode",
            93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
            95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
        },
        SensingMethod: {
            1: "Not defined",
            2: "One-chip color area sensor",
            3: "Two-chip color area sensor",
            4: "Three-chip color area sensor",
            5: "Color sequential area sensor",
            7: "Trilinear sensor",
            8: "Color sequential linear sensor"
        },
        SceneCaptureType: {
            0: "Standard",
            1: "Landscape",
            2: "Portrait",
            3: "Night scene"
        },
        SceneType: {
            1: "Directly photographed"
        },
        CustomRendered: {
            0: "Normal process",
            1: "Custom process"
        },
        WhiteBalance: {
            0: "Auto white balance",
            1: "Manual white balance"
        },
        GainControl: {
            0: "None",
            1: "Low gain up",
            2: "High gain up",
            3: "Low gain down",
            4: "High gain down"
        },
        Contrast: {
            0: "Normal",
            1: "Soft",
            2: "Hard"
        },
        Saturation: {
            0: "Normal",
            1: "Low saturation",
            2: "High saturation"
        },
        Sharpness: {
            0: "Normal",
            1: "Soft",
            2: "Hard"
        },
        SubjectDistanceRange: {
            0: "Unknown",
            1: "Macro",
            2: "Close view",
            3: "Distant view"
        },
        FileSource: {
            3: "DSC"
        },
        Components: {
            0: "",
            1: "Y",
            2: "Cb",
            3: "Cr",
            4: "R",
            5: "G",
            6: "B"
        }
    };
    function s(e) {
        return !!e.exifdata
    }
    function l(o, n) {
        function r(r) {
            var i = c(r);
            o.exifdata = i || {};
            var a = function(t) {
                var o = new DataView(t);
                e;
                if (255 != o.getUint8(0) || 216 != o.getUint8(1))
                    return !1;
                var n = 2
                  , r = t.byteLength
                  , i = function(e, t) {
                    return 56 === e.getUint8(t) && 66 === e.getUint8(t + 1) && 73 === e.getUint8(t + 2) && 77 === e.getUint8(t + 3) && 4 === e.getUint8(t + 4) && 4 === e.getUint8(t + 5)
                };
                for (; n < r; ) {
                    if (i(o, n)) {
                        var a = o.getUint8(n + 7);
                        return a % 2 != 0 && (a += 1),
                        0 === a && (a = 4),
                        u(t, n + 8 + a, o.getUint16(n + 6 + a))
                    }
                    n++
                }
            }(r);
            if (o.iptcdata = a || {},
            t.isXmpEnabled) {
                var s = function(t) {
                    if (!("DOMParser"in self))
                        return;
                    var o = new DataView(t);
                    e;
                    if (255 != o.getUint8(0) || 216 != o.getUint8(1))
                        return !1;
                    var n = 2
                      , r = t.byteLength
                      , i = new DOMParser;
                    for (; n < r - 4; ) {
                        if ("http" == m(o, n, 4)) {
                            var a = n - 1
                              , s = o.getUint16(n - 2) - 1
                              , l = m(o, a, s)
                              , c = l.indexOf("xmpmeta>") + 8
                              , d = (l = l.substring(l.indexOf("<x:xmpmeta"), c)).indexOf("x:xmpmeta") + 10;
                            return l = l.slice(0, d) + 'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" ' + l.slice(d),
                            v(i.parseFromString(l, "text/xml"))
                        }
                        n++
                    }
                }(r);
                o.xmpdata = s || {}
            }
            n && n.call(o)
        }
        if (o.src)
            if (/^data\:/i.test(o.src))
                r(function(e, t) {
                    t = t || e.match(/^data\:([^\;]+)\;base64,/im)[1] || "",
                    e = e.replace(/^data\:([^\;]+)\;base64,/gim, "");
                    for (var o = atob(e), n = o.length, r = new ArrayBuffer(n), i = new Uint8Array(r), a = 0; a < n; a++)
                        i[a] = o.charCodeAt(a);
                    return r
                }(o.src));
            else if (/^blob\:/i.test(o.src)) {
                (a = new FileReader).onload = function(e) {
                    r(e.target.result)
                }
                ,
                function(e, t) {
                    var o = new XMLHttpRequest;
                    o.open("GET", e, !0),
                    o.responseType = "blob",
                    o.onload = function(e) {
                        200 != this.status && 0 !== this.status || t(this.response)
                    }
                    ,
                    o.send()
                }(o.src, function(e) {
                    a.readAsArrayBuffer(e)
                })
            } else {
                var i = new XMLHttpRequest;
                i.onload = function() {
                    if (200 != this.status && 0 !== this.status)
                        throw "Could not load image";
                    r(i.response),
                    i = null
                }
                ,
                i.open("GET", o.src, !0),
                i.responseType = "arraybuffer",
                i.send(null)
            }
        else if (self.FileReader && (o instanceof self.Blob || o instanceof self.File)) {
            var a;
            (a = new FileReader).onload = function(e) {
                r(e.target.result)
            }
            ,
            a.readAsArrayBuffer(o)
        }
    }
    function c(e) {
        var t = new DataView(e);
        if (255 != t.getUint8(0) || 216 != t.getUint8(1))
            return !1;
        for (var o = 2, n = e.byteLength; o < n; ) {
            if (255 != t.getUint8(o))
                return !1;
            if (225 == t.getUint8(o + 1))
                return p(t, o + 4, t.getUint16(o + 2));
            o += 2 + t.getUint16(o + 2)
        }
    }
    var d = {
        120: "caption",
        110: "credit",
        25: "keywords",
        55: "dateCreated",
        80: "byline",
        85: "bylineTitle",
        122: "captionWriter",
        105: "headline",
        116: "copyright",
        15: "category"
    };
    function u(e, t, o) {
        for (var n, r, i, a, s = new DataView(e), l = {}, c = t; c < t + o; )
            28 === s.getUint8(c) && 2 === s.getUint8(c + 1) && (a = s.getUint8(c + 2))in d && ((i = s.getInt16(c + 3)) + 5,
            r = d[a],
            n = m(s, c + 5, i),
            l.hasOwnProperty(r) ? l[r]instanceof Array ? l[r].push(n) : l[r] = [l[r], n] : l[r] = n),
            c++;
        return l
    }
    function h(e, t, o, n, r) {
        var i, a, s = e.getUint16(o, !r), l = {};
        for (a = 0; a < s; a++)
            i = o + 12 * a + 2,
            l[n[e.getUint16(i, !r)]] = f(e, i, t, o, r);
        return l
    }
    function f(e, t, o, n, r) {
        var i, a, s, l, c, d, u = e.getUint16(t + 2, !r), h = e.getUint32(t + 4, !r), f = e.getUint32(t + 8, !r) + o;
        switch (u) {
        case 1:
        case 7:
            if (1 == h)
                return e.getUint8(t + 8, !r);
            for (i = h > 4 ? f : t + 8,
            a = [],
            l = 0; l < h; l++)
                a[l] = e.getUint8(i + l);
            return a;
        case 2:
            return m(e, i = h > 4 ? f : t + 8, h - 1);
        case 3:
            if (1 == h)
                return e.getUint16(t + 8, !r);
            for (i = h > 2 ? f : t + 8,
            a = [],
            l = 0; l < h; l++)
                a[l] = e.getUint16(i + 2 * l, !r);
            return a;
        case 4:
            if (1 == h)
                return e.getUint32(t + 8, !r);
            for (a = [],
            l = 0; l < h; l++)
                a[l] = e.getUint32(f + 4 * l, !r);
            return a;
        case 5:
            if (1 == h)
                return c = e.getUint32(f, !r),
                d = e.getUint32(f + 4, !r),
                (s = new Number(c / d)).numerator = c,
                s.denominator = d,
                s;
            for (a = [],
            l = 0; l < h; l++)
                c = e.getUint32(f + 8 * l, !r),
                d = e.getUint32(f + 4 + 8 * l, !r),
                a[l] = new Number(c / d),
                a[l].numerator = c,
                a[l].denominator = d;
            return a;
        case 9:
            if (1 == h)
                return e.getInt32(t + 8, !r);
            for (a = [],
            l = 0; l < h; l++)
                a[l] = e.getInt32(f + 4 * l, !r);
            return a;
        case 10:
            if (1 == h)
                return e.getInt32(f, !r) / e.getInt32(f + 4, !r);
            for (a = [],
            l = 0; l < h; l++)
                a[l] = e.getInt32(f + 8 * l, !r) / e.getInt32(f + 4 + 8 * l, !r);
            return a
        }
    }
    function m(e, t, o) {
        for (var n = "", r = t; r < t + o; r++)
            n += String.fromCharCode(e.getUint8(r));
        return n
    }
    function p(e, t) {
        if ("Exif" != m(e, t, 4))
            return !1;
        var s, l, c, d, u, f = t + 6;
        if (18761 == e.getUint16(f))
            s = !1;
        else {
            if (19789 != e.getUint16(f))
                return !1;
            s = !0
        }
        if (42 != e.getUint16(f + 2, !s))
            return !1;
        var p = e.getUint32(f + 4, !s);
        if (p < 8)
            return !1;
        if ((l = h(e, f, f + p, n, s)).ExifIFDPointer)
            for (c in d = h(e, f, f + l.ExifIFDPointer, o, s)) {
                switch (c) {
                case "LightSource":
                case "Flash":
                case "MeteringMode":
                case "ExposureProgram":
                case "SensingMethod":
                case "SceneCaptureType":
                case "SceneType":
                case "CustomRendered":
                case "WhiteBalance":
                case "GainControl":
                case "Contrast":
                case "Saturation":
                case "Sharpness":
                case "SubjectDistanceRange":
                case "FileSource":
                    d[c] = a[c][d[c]];
                    break;
                case "ExifVersion":
                case "FlashpixVersion":
                    d[c] = String.fromCharCode(d[c][0], d[c][1], d[c][2], d[c][3]);
                    break;
                case "ComponentsConfiguration":
                    d[c] = a.Components[d[c][0]] + a.Components[d[c][1]] + a.Components[d[c][2]] + a.Components[d[c][3]]
                }
                l[c] = d[c]
            }
        if (l.GPSInfoIFDPointer)
            for (c in u = h(e, f, f + l.GPSInfoIFDPointer, r, s)) {
                if ("GPSVersionID" === c)
                    u[c] = u[c][0] + "." + u[c][1] + "." + u[c][2] + "." + u[c][3];
                l[c] = u[c]
            }
        return l.thumbnail = function(e, t, o, n) {
            var r = function(e, t, o) {
                var n = e.getUint16(t, !o);
                return e.getUint32(t + 2 + 12 * n, !o)
            }(e, t + o, n);
            if (!r)
                return {};
            if (r > e.byteLength)
                return {};
            var a = h(e, t, t + r, i, n);
            if (a.Compression)
                switch (a.Compression) {
                case 6:
                    if (a.JpegIFOffset && a.JpegIFByteCount) {
                        var s = t + a.JpegIFOffset
                          , l = a.JpegIFByteCount;
                        a.blob = new Blob([new Uint8Array(e.buffer,s,l)],{
                            type: "image/jpeg"
                        })
                    }
                    break;
                case 1:
                    console.log("Thumbnail image format is TIFF, which is not implemented.");
                    break;
                default:
                    console.log("Unknown thumbnail image format '%s'", a.Compression)
                }
            else
                2 == a.PhotometricInterpretation && console.log("Thumbnail image format is RGB, which is not implemented.");
            return a
        }(e, f, p, s),
        l
    }
    function g(e) {
        var t = {};
        if (1 == e.nodeType) {
            if (e.attributes.length > 0) {
                t["@attributes"] = {};
                for (var o = 0; o < e.attributes.length; o++) {
                    var n = e.attributes.item(o);
                    t["@attributes"][n.nodeName] = n.nodeValue
                }
            }
        } else if (3 == e.nodeType)
            return e.nodeValue;
        if (e.hasChildNodes())
            for (var r = 0; r < e.childNodes.length; r++) {
                var i = e.childNodes.item(r)
                  , a = i.nodeName;
                if (null == t[a])
                    t[a] = g(i);
                else {
                    if (null == t[a].push) {
                        var s = t[a];
                        t[a] = [],
                        t[a].push(s)
                    }
                    t[a].push(g(i))
                }
            }
        return t
    }
    function v(e) {
        try {
            var t = {};
            if (e.children.length > 0)
                for (var o = 0; o < e.children.length; o++) {
                    var n = e.children.item(o)
                      , r = n.attributes;
                    for (var i in r) {
                        var a = r[i]
                          , s = a.nodeName
                          , l = a.nodeValue;
                        void 0 !== s && (t[s] = l)
                    }
                    var c = n.nodeName;
                    if (void 0 === t[c])
                        t[c] = g(n);
                    else {
                        if (void 0 === t[c].push) {
                            var d = t[c];
                            t[c] = [],
                            t[c].push(d)
                        }
                        t[c].push(g(n))
                    }
                }
            else
                t = e.textContent;
            return t
        } catch (e) {
            console.log(e.message)
        }
    }
    t.enableXmp = function() {
        t.isXmpEnabled = !0
    }
    ,
    t.disableXmp = function() {
        t.isXmpEnabled = !1
    }
    ,
    t.getData = function(e, t) {
        return !((self.Image && e instanceof self.Image || self.HTMLImageElement && e instanceof self.HTMLImageElement) && !e.complete) && (s(e) ? t && t.call(e) : l(e, t),
        !0)
    }
    ,
    t.getTag = function(e, t) {
        if (s(e))
            return e.exifdata[t]
    }
    ,
    t.getIptcTag = function(e, t) {
        if (s(e))
            return e.iptcdata[t]
    }
    ,
    t.getAllTags = function(e) {
        if (!s(e))
            return {};
        var t, o = e.exifdata, n = {};
        for (t in o)
            o.hasOwnProperty(t) && (n[t] = o[t]);
        return n
    }
    ,
    t.getAllIptcTags = function(e) {
        if (!s(e))
            return {};
        var t, o = e.iptcdata, n = {};
        for (t in o)
            o.hasOwnProperty(t) && (n[t] = o[t]);
        return n
    }
    ,
    t.pretty = function(e) {
        if (!s(e))
            return "";
        var t, o = e.exifdata, n = "";
        for (t in o)
            o.hasOwnProperty(t) && ("object" == _typeof2(o[t]) ? o[t]instanceof Number ? n += t + " : " + o[t] + " [" + o[t].numerator + "/" + o[t].denominator + "]\r\n" : n += t + " : [" + o[t].length + " values]\r\n" : n += t + " : " + o[t] + "\r\n");
        return n
    }
    ,
    t.readFromBinaryFile = function(e) {
        return c(e)
    }
    ,
    "function" == typeof define && define.amd && define("exif-js", [], function() {
        return t
    })
}
.call(this);
var oldFunc = window.Cropper.prototype.getCroppedCanvas;
window.Cropper.prototype.getCroppedCanvas = function() {
    for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
        t[o] = arguments[o];
    var n = Math.floor
      , r = 0;
    Math.floor = function(e) {
        return r++ < 2 ? e : n.apply(this, arguments)
    }
    ;
    var i = oldFunc.apply(this, t);
    return Math.floor = n,
    i
}
;
