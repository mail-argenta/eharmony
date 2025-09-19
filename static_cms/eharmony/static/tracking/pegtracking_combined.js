/* 5/20/2025, 3:05:15 PM */
/**
 * @file postscribe
 * @description Asynchronously write javascript, even with document.write.
 * @version v2.0.8
 * @see {@link https://krux.github.io/postscribe}
 * @license MIT
 * @author Derek Brans
 * @copyright 2016 Krux Digital, Inc
 */
!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.postscribe = e() : t.postscribe = e()
}(this, (function() {
    return function(t) {
        var e = {};
        function n(r) {
            if (e[r])
                return e[r].exports;
            var o = e[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return t[r].call(o.exports, o, o.exports, n),
            o.loaded = !0,
            o.exports
        }
        return n.m = t,
        n.c = e,
        n.p = "",
        n(0)
    }([function(t, e, n) {
        "use strict";
        var r, o = n(1), i = (r = o) && r.__esModule ? r : {
            default: r
        };
        t.exports = i.default
    }
    , function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }
        ;
        e.default = m;
        var o, i = n(2), a = (o = i) && o.__esModule ? o : {
            default: o
        }, s = function(t) {
            if (t && t.__esModule)
                return t;
            var e = {};
            if (null != t)
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e.default = t,
            e
        }(n(4));
        function c() {}
        var u = {
            afterAsync: c,
            afterDequeue: c,
            afterStreamStart: c,
            afterWrite: c,
            autoFix: !0,
            beforeEnqueue: c,
            beforeWriteToken: function(t) {
                return t
            },
            beforeWrite: function(t) {
                return t
            },
            done: c,
            error: function(t) {
                throw new Error(t.msg)
            },
            releaseAsync: !1
        }
          , l = 0
          , p = []
          , d = null;
        function f() {
            var t = p.shift();
            if (t) {
                var e = s.last(t);
                e.afterDequeue(),
                t.stream = g.apply(void 0, t),
                e.afterStreamStart()
            }
        }
        function g(t, e, n) {
            (d = new a.default(t,n)).id = l++,
            d.name = n.name || d.id,
            m.streams[d.name] = d;
            var o = t.ownerDocument
              , i = {
                close: o.close,
                open: o.open,
                write: o.write,
                writeln: o.writeln
            };
            function s(t) {
                t = n.beforeWrite(t),
                d.write(t),
                n.afterWrite(t)
            }
            r(o, {
                close: c,
                open: c,
                write: function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                        e[n] = arguments[n];
                    return s(e.join(""))
                },
                writeln: function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                        e[n] = arguments[n];
                    return s(e.join("") + "\n")
                }
            });
            var u = d.win.onerror || c;
            return d.win.onerror = function(t, e, r) {
                n.error({
                    msg: t + " - " + e + ": " + r
                }),
                u.apply(d.win, [t, e, r])
            }
            ,
            d.write(e, (function() {
                r(o, i),
                d.win.onerror = u,
                n.done(),
                d = null,
                f()
            }
            )),
            d
        }
        function m(t, e, n) {
            if (s.isFunction(n))
                n = {
                    done: n
                };
            else if ("clear" === n)
                return p = [],
                d = null,
                void (l = 0);
            n = s.defaults(n, u);
            var r = [t = /^#/.test(t) ? window.document.getElementById(t.substr(1)) : t.jquery ? t[0] : t, e, n];
            return t.postscribe = {
                cancel: function() {
                    r.stream ? r.stream.abort() : r[1] = c
                }
            },
            n.beforeEnqueue(r),
            p.push(r),
            d || f(),
            t.postscribe
        }
        r(m, {
            streams: {},
            queue: p,
            WriteStream: a.default
        })
    }
    , function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r, o = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }
        , i = n(3), a = (r = i) && r.__esModule ? r : {
            default: r
        }, s = function(t) {
            if (t && t.__esModule)
                return t;
            var e = {};
            if (null != t)
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e.default = t,
            e
        }(n(4));
        var c = "data-ps-"
          , u = "ps-style"
          , l = "ps-script";
        function p(t, e) {
            var n = c + e
              , r = t.getAttribute(n);
            return s.existy(r) ? String(r) : r
        }
        function d(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
              , r = c + e;
            s.existy(n) && "" !== n ? t.setAttribute(r, n) : t.removeAttribute(r)
        }
        var f = function() {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this.root = e,
                this.options = n,
                this.doc = e.ownerDocument,
                this.win = this.doc.defaultView || this.doc.parentWindow,
                this.parser = new a.default("",{
                    autoFix: n.autoFix
                }),
                this.actuals = [e],
                this.proxyHistory = "",
                this.proxyRoot = this.doc.createElement(e.nodeName),
                this.scriptStack = [],
                this.writeQueue = [],
                d(this.proxyRoot, "proxyof", 0)
            }
            return t.prototype.write = function() {
                var t;
                for ((t = this.writeQueue).push.apply(t, arguments); !this.deferredRemote && this.writeQueue.length; ) {
                    var e = this.writeQueue.shift();
                    s.isFunction(e) ? this._callFunction(e) : this._writeImpl(e)
                }
            }
            ,
            t.prototype._callFunction = function(t) {
                var e = {
                    type: "function",
                    value: t.name || t.toString()
                };
                this._onScriptStart(e),
                t.call(this.win, this.doc),
                this._onScriptDone(e)
            }
            ,
            t.prototype._writeImpl = function(t) {
                this.parser.append(t);
                for (var e = void 0, n = void 0, r = void 0, o = []; (e = this.parser.readToken()) && !(n = s.isScript(e)) && !(r = s.isStyle(e)); )
                    (e = this.options.beforeWriteToken(e)) && o.push(e);
                o.length > 0 && this._writeStaticTokens(o),
                n && this._handleScriptToken(e),
                r && this._handleStyleToken(e)
            }
            ,
            t.prototype._writeStaticTokens = function(t) {
                var e = this._buildChunk(t);
                return e.actual ? (e.html = this.proxyHistory + e.actual,
                this.proxyHistory += e.proxy,
                this.proxyRoot.innerHTML = e.html,
                this._walkChunk(),
                e) : null
            }
            ,
            t.prototype._buildChunk = function(t) {
                for (var e = this.actuals.length, n = [], r = [], o = [], i = t.length, a = 0; a < i; a++) {
                    var s = t[a]
                      , p = s.toString();
                    if (n.push(p),
                    s.attrs) {
                        if (!/^noscript$/i.test(s.tagName)) {
                            var d = e++;
                            r.push(p.replace(/(\/?>)/, " " + c + "id=" + d + " $1")),
                            s.attrs.id !== l && s.attrs.id !== u && o.push("atomicTag" === s.type ? "" : "<" + s.tagName + " " + c + "proxyof=" + d + (s.unary ? " />" : ">"))
                        }
                    } else
                        r.push(p),
                        o.push("endTag" === s.type ? p : "")
                }
                return {
                    tokens: t,
                    raw: n.join(""),
                    actual: r.join(""),
                    proxy: o.join("")
                }
            }
            ,
            t.prototype._walkChunk = function() {
                for (var t = void 0, e = [this.proxyRoot]; s.existy(t = e.shift()); ) {
                    var n = 1 === t.nodeType;
                    if (!(n && p(t, "proxyof"))) {
                        n && (this.actuals[p(t, "id")] = t,
                        d(t, "id"));
                        var r = t.parentNode && p(t.parentNode, "proxyof");
                        r && this.actuals[r].appendChild(t)
                    }
                    e.unshift.apply(e, s.toArray(t.childNodes))
                }
            }
            ,
            t.prototype._handleScriptToken = function(t) {
                var e = this
                  , n = this.parser.clear();
                n && this.writeQueue.unshift(n),
                t.src = t.attrs.src || t.attrs.SRC,
                (t = this.options.beforeWriteToken(t)) && (t.src && this.scriptStack.length ? this.deferredRemote = t : this._onScriptStart(t),
                this._writeScriptToken(t, (function() {
                    e._onScriptDone(t)
                }
                )))
            }
            ,
            t.prototype._handleStyleToken = function(t) {
                var e = this.parser.clear();
                e && this.writeQueue.unshift(e),
                t.type = t.attrs.type || t.attrs.TYPE || "text/css",
                (t = this.options.beforeWriteToken(t)) && this._writeStyleToken(t),
                e && this.write()
            }
            ,
            t.prototype._writeStyleToken = function(t) {
                var e = this._buildStyle(t);
                this._insertCursor(e, u),
                t.content && (e.styleSheet && !e.sheet ? e.styleSheet.cssText = t.content : e.appendChild(this.doc.createTextNode(t.content)))
            }
            ,
            t.prototype._buildStyle = function(t) {
                var e = this.doc.createElement(t.tagName);
                return e.setAttribute("type", t.type),
                s.eachKey(t.attrs, (function(t, n) {
                    e.setAttribute(t, n)
                }
                )),
                e
            }
            ,
            t.prototype._insertCursor = function(t, e) {
                this._writeImpl('<span id="' + e + '"/>');
                var n = this.doc.getElementById(e);
                n && n.parentNode.replaceChild(t, n)
            }
            ,
            t.prototype._onScriptStart = function(t) {
                t.outerWrites = this.writeQueue,
                this.writeQueue = [],
                this.scriptStack.unshift(t)
            }
            ,
            t.prototype._onScriptDone = function(t) {
                t === this.scriptStack[0] ? (this.scriptStack.shift(),
                this.write.apply(this, t.outerWrites),
                !this.scriptStack.length && this.deferredRemote && (this._onScriptStart(this.deferredRemote),
                this.deferredRemote = null)) : this.options.error({
                    msg: "Bad script nesting or script finished twice"
                })
            }
            ,
            t.prototype._writeScriptToken = function(t, e) {
                var n = this._buildScript(t)
                  , r = this._shouldRelease(n)
                  , o = this.options.afterAsync;
                t.src && (n.src = t.src,
                this._scriptLoadHandler(n, r ? o : function() {
                    e(),
                    o()
                }
                ));
                try {
                    this._insertCursor(n, l),
                    n.src && !r || e()
                } catch (t) {
                    this.options.error(t),
                    e()
                }
            }
            ,
            t.prototype._buildScript = function(t) {
                var e = this.doc.createElement(t.tagName);
                return s.eachKey(t.attrs, (function(t, n) {
                    e.setAttribute(t, n)
                }
                )),
                t.content && (e.text = t.content),
                e
            }
            ,
            t.prototype._scriptLoadHandler = function(t, e) {
                function n() {
                    t = t.onload = t.onreadystatechange = t.onerror = null
                }
                var r = this.options.error;
                function i() {
                    n(),
                    null != e && e(),
                    e = null
                }
                function a(t) {
                    n(),
                    r(t),
                    null != e && e(),
                    e = null
                }
                function s(t, e) {
                    var n = t["on" + e];
                    null != n && (t["_on" + e] = n)
                }
                s(t, "load"),
                s(t, "error"),
                o(t, {
                    onload: function() {
                        if (t._onload)
                            try {
                                t._onload.apply(this, Array.prototype.slice.call(arguments, 0))
                            } catch (e) {
                                a({
                                    msg: "onload handler failed " + e + " @ " + t.src
                                })
                            }
                        i()
                    },
                    onerror: function() {
                        if (t._onerror)
                            try {
                                t._onerror.apply(this, Array.prototype.slice.call(arguments, 0))
                            } catch (e) {
                                return void a({
                                    msg: "onerror handler failed " + e + " @ " + t.src
                                })
                            }
                        a({
                            msg: "remote script failed " + t.src
                        })
                    },
                    onreadystatechange: function() {
                        /^(loaded|complete)$/.test(t.readyState) && i()
                    }
                })
            }
            ,
            t.prototype._shouldRelease = function(t) {
                return !/^script$/i.test(t.nodeName) || !!(this.options.releaseAsync && t.src && t.hasAttribute("async"))
            }
            ,
            t
        }();
        e.default = f
    }
    , function(t, e, n) {
        /**
	 * @file prescribe
	 * @description Tiny, forgiving HTML parser
	 * @version vundefined
	 * @see {@link https://github.com/krux/prescribe/}
	 * @license MIT
	 * @author Derek Brans
	 * @copyright 2016 Krux Digital, Inc
	 */
        var r;
        r = function() {
            return function(t) {
                var e = {};
                function n(r) {
                    if (e[r])
                        return e[r].exports;
                    var o = e[r] = {
                        exports: {},
                        id: r,
                        loaded: !1
                    };
                    return t[r].call(o.exports, o, o.exports, n),
                    o.loaded = !0,
                    o.exports
                }
                return n.m = t,
                n.c = e,
                n.p = "",
                n(0)
            }([function(t, e, n) {
                "use strict";
                var r, o = n(1), i = (r = o) && r.__esModule ? r : {
                    default: r
                };
                t.exports = i.default
            }
            , function(t, e, n) {
                "use strict";
                e.__esModule = !0;
                var r, o = u(n(2)), i = u(n(3)), a = n(6), s = (r = a) && r.__esModule ? r : {
                    default: r
                }, c = n(5);
                function u(t) {
                    if (t && t.__esModule)
                        return t;
                    var e = {};
                    if (null != t)
                        for (var n in t)
                            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e.default = t,
                    e
                }
                var l = {
                    comment: /^<!--/,
                    endTag: /^<\//,
                    atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
                    startTag: /^</,
                    chars: /^[^<]/
                }
                  , p = function() {
                    function t() {
                        var e = this
                          , n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                          , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        !function(t, e) {
                            if (!(t instanceof e))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                        this.stream = n;
                        var i = !1
                          , a = {};
                        for (var c in o)
                            o.hasOwnProperty(c) && (r.autoFix && (a[c + "Fix"] = !0),
                            i = i || a[c + "Fix"]);
                        i ? (this._readToken = (0,
                        s.default)(this, a, (function() {
                            return e._readTokenImpl()
                        }
                        )),
                        this._peekToken = (0,
                        s.default)(this, a, (function() {
                            return e._peekTokenImpl()
                        }
                        ))) : (this._readToken = this._readTokenImpl,
                        this._peekToken = this._peekTokenImpl)
                    }
                    return t.prototype.append = function(t) {
                        this.stream += t
                    }
                    ,
                    t.prototype.prepend = function(t) {
                        this.stream = t + this.stream
                    }
                    ,
                    t.prototype._readTokenImpl = function() {
                        var t = this._peekTokenImpl();
                        if (t)
                            return this.stream = this.stream.slice(t.length),
                            t
                    }
                    ,
                    t.prototype._peekTokenImpl = function() {
                        for (var t in l)
                            if (l.hasOwnProperty(t) && l[t].test(this.stream)) {
                                var e = i[t](this.stream);
                                if (e)
                                    return "startTag" === e.type && /script|style/i.test(e.tagName) ? null : (e.text = this.stream.substr(0, e.length),
                                    e)
                            }
                    }
                    ,
                    t.prototype.peekToken = function() {
                        return this._peekToken()
                    }
                    ,
                    t.prototype.readToken = function() {
                        return this._readToken()
                    }
                    ,
                    t.prototype.readTokens = function(t) {
                        for (var e = void 0; e = this.readToken(); )
                            if (t[e.type] && !1 === t[e.type](e))
                                return
                    }
                    ,
                    t.prototype.clear = function() {
                        var t = this.stream;
                        return this.stream = "",
                        t
                    }
                    ,
                    t.prototype.rest = function() {
                        return this.stream
                    }
                    ,
                    t
                }();
                for (var d in e.default = p,
                p.tokenToString = function(t) {
                    return t.toString()
                }
                ,
                p.escapeAttributes = function(t) {
                    var e = {};
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[n] = (0,
                        c.escapeQuotes)(t[n], null));
                    return e
                }
                ,
                p.supports = o,
                o)
                    o.hasOwnProperty(d) && (p.browserHasFlaw = p.browserHasFlaw || !o[d] && d)
            }
            , function(t, e) {
                "use strict";
                e.__esModule = !0;
                var n = !1
                  , r = !1
                  , o = window.document.createElement("div");
                try {
                    var i = "<P><I></P></I>";
                    o.innerHTML = i,
                    e.tagSoup = n = o.innerHTML !== i
                } catch (t) {
                    e.tagSoup = n = !1
                }
                try {
                    o.innerHTML = "<P><i><P></P></i></P>",
                    e.selfClose = r = 2 === o.childNodes.length
                } catch (t) {
                    e.selfClose = r = !1
                }
                o = null,
                e.tagSoup = n,
                e.selfClose = r
            }
            , function(t, e, n) {
                "use strict";
                e.__esModule = !0;
                var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ;
                e.comment = function(t) {
                    var e = t.indexOf("--\x3e");
                    if (e >= 0)
                        return new o.CommentToken(t.substr(4, e - 1),e + 3)
                }
                ,
                e.chars = function(t) {
                    var e = t.indexOf("<");
                    return new o.CharsToken(e >= 0 ? e : t.length)
                }
                ,
                e.startTag = a,
                e.atomicTag = function(t) {
                    var e = a(t);
                    if (e) {
                        var n = t.slice(e.length);
                        if (n.match(new RegExp("</\\s*" + e.tagName + "\\s*>","i"))) {
                            var r = n.match(new RegExp("([\\s\\S]*?)</\\s*" + e.tagName + "\\s*>","i"));
                            if (r)
                                return new o.AtomicTagToken(e.tagName,r[0].length + e.length,e.attrs,e.booleanAttrs,r[1])
                        }
                    }
                }
                ,
                e.endTag = function(t) {
                    var e = t.match(i.endTag);
                    if (e)
                        return new o.EndTagToken(e[1],e[0].length)
                }
                ;
                var o = n(4)
                  , i = {
                    startTag: /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
                    endTag: /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
                    attr: /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,
                    fillAttr: /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i
                };
                function a(t) {
                    var e, n, a;
                    if (-1 !== t.indexOf(">")) {
                        var s = t.match(i.startTag);
                        if (s) {
                            var c = (e = {},
                            n = {},
                            a = s[2],
                            s[2].replace(i.attr, (function(t, r) {
                                arguments[2] || arguments[3] || arguments[4] || arguments[5] ? arguments[5] ? (e[arguments[5]] = "",
                                n[arguments[5]] = !0) : e[r] = arguments[2] || arguments[3] || arguments[4] || i.fillAttr.test(r) && r || "" : e[r] = "",
                                a = a.replace(t, "")
                            }
                            )),
                            {
                                v: new o.StartTagToken(s[1],s[0].length,e,n,!!s[3],a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""))
                            });
                            if ("object" === (void 0 === c ? "undefined" : r(c)))
                                return c.v
                        }
                    }
                }
            }
            , function(t, e, n) {
                "use strict";
                e.__esModule = !0,
                e.EndTagToken = e.AtomicTagToken = e.StartTagToken = e.TagToken = e.CharsToken = e.CommentToken = e.Token = void 0;
                var r = n(5);
                function o(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }
                e.Token = function t(e, n) {
                    o(this, t),
                    this.type = e,
                    this.length = n,
                    this.text = ""
                }
                ,
                e.CommentToken = function() {
                    function t(e, n) {
                        o(this, t),
                        this.type = "comment",
                        this.length = n || (e ? e.length : 0),
                        this.text = "",
                        this.content = e
                    }
                    return t.prototype.toString = function() {
                        return "\x3c!--" + this.content
                    }
                    ,
                    t
                }(),
                e.CharsToken = function() {
                    function t(e) {
                        o(this, t),
                        this.type = "chars",
                        this.length = e,
                        this.text = ""
                    }
                    return t.prototype.toString = function() {
                        return this.text
                    }
                    ,
                    t
                }();
                var i = e.TagToken = function() {
                    function t(e, n, r, i, a) {
                        o(this, t),
                        this.type = e,
                        this.length = r,
                        this.text = "",
                        this.tagName = n,
                        this.attrs = i,
                        this.booleanAttrs = a,
                        this.unary = !1,
                        this.html5Unary = !1
                    }
                    return t.formatTag = function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                          , n = "<" + t.tagName;
                        for (var o in t.attrs)
                            if (t.attrs.hasOwnProperty(o)) {
                                n += " " + o;
                                var i = t.attrs[o];
                                void 0 !== t.booleanAttrs && void 0 !== t.booleanAttrs[o] || (n += '="' + (0,
                                r.escapeQuotes)(i) + '"')
                            }
                        return t.rest && (n += " " + t.rest),
                        t.unary && !t.html5Unary ? n += "/>" : n += ">",
                        null != e && (n += e + "</" + t.tagName + ">"),
                        n
                    }
                    ,
                    t
                }();
                e.StartTagToken = function() {
                    function t(e, n, r, i, a, s) {
                        o(this, t),
                        this.type = "startTag",
                        this.length = n,
                        this.text = "",
                        this.tagName = e,
                        this.attrs = r,
                        this.booleanAttrs = i,
                        this.html5Unary = !1,
                        this.unary = a,
                        this.rest = s
                    }
                    return t.prototype.toString = function() {
                        return i.formatTag(this)
                    }
                    ,
                    t
                }(),
                e.AtomicTagToken = function() {
                    function t(e, n, r, i, a) {
                        o(this, t),
                        this.type = "atomicTag",
                        this.length = n,
                        this.text = "",
                        this.tagName = e,
                        this.attrs = r,
                        this.booleanAttrs = i,
                        this.unary = !1,
                        this.html5Unary = !1,
                        this.content = a
                    }
                    return t.prototype.toString = function() {
                        return i.formatTag(this, this.content)
                    }
                    ,
                    t
                }(),
                e.EndTagToken = function() {
                    function t(e, n) {
                        o(this, t),
                        this.type = "endTag",
                        this.length = n,
                        this.text = "",
                        this.tagName = e
                    }
                    return t.prototype.toString = function() {
                        return "</" + this.tagName + ">"
                    }
                    ,
                    t
                }()
            }
            , function(t, e) {
                "use strict";
                e.__esModule = !0,
                e.escapeQuotes = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return t ? t.replace(/([^"]*)"/g, (function(t, e) {
                        return /\\/.test(e) ? e + '"' : e + '\\"'
                    }
                    )) : e
                }
            }
            , function(t, e) {
                "use strict";
                e.__esModule = !0,
                e.default = function(t, e, n) {
                    var a = function() {
                        var t = [];
                        return t.last = function() {
                            return this[this.length - 1]
                        }
                        ,
                        t.lastTagNameEq = function(t) {
                            var e = this.last();
                            return e && e.tagName && e.tagName.toUpperCase() === t.toUpperCase()
                        }
                        ,
                        t.containsTagName = function(t) {
                            for (var e, n = 0; e = this[n]; n++)
                                if (e.tagName === t)
                                    return !0;
                            return !1
                        }
                        ,
                        t
                    }()
                      , s = {
                        startTag: function(n) {
                            var o = n.tagName;
                            "TR" === o.toUpperCase() && a.lastTagNameEq("TABLE") ? (t.prepend("<TBODY>"),
                            c()) : e.selfCloseFix && r.test(o) && a.containsTagName(o) ? a.lastTagNameEq(o) ? i(t, a) : (t.prepend("</" + n.tagName + ">"),
                            c()) : n.unary || a.push(n)
                        },
                        endTag: function(r) {
                            a.last() ? e.tagSoupFix && !a.lastTagNameEq(r.tagName) ? i(t, a) : a.pop() : e.tagSoupFix && (n(),
                            c())
                        }
                    };
                    function c() {
                        var e = function(t, e) {
                            var n = t.stream
                              , r = o(e());
                            return t.stream = n,
                            r
                        }(t, n);
                        e && s[e.type] && s[e.type](e)
                    }
                    return function() {
                        return c(),
                        o(n())
                    }
                }
                ;
                var n = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i
                  , r = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;
                function o(t) {
                    return t && "startTag" === t.type && (t.unary = n.test(t.tagName) || t.unary,
                    t.html5Unary = !/\/>$/.test(t.text)),
                    t
                }
                function i(t, e) {
                    var n = e.pop();
                    t.prepend("</" + n.tagName + ">")
                }
            }
            ])
        }
        ,
        t.exports = r()
    }
    , function(t, e) {
        "use strict";
        e.__esModule = !0;
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ;
        function r(t) {
            return null != t
        }
        function o(t, e, n) {
            var r = void 0
              , o = t && t.length || 0;
            for (r = 0; r < o; r++)
                e.call(n, t[r], r)
        }
        function i(t, e, n) {
            for (var r in t)
                t.hasOwnProperty(r) && e.call(n, r, t[r])
        }
        function a(t, e) {
            return !(!t || "startTag" !== t.type && "atomicTag" !== t.type || !("tagName"in t)) && !!~t.tagName.toLowerCase().indexOf(e)
        }
        e.existy = r,
        e.isFunction = function(t) {
            return "function" == typeof t
        }
        ,
        e.each = o,
        e.eachKey = i,
        e.defaults = function(t, e) {
            return t = t || {},
            i(e, (function(e, n) {
                r(t[e]) || (t[e] = n)
            }
            )),
            t
        }
        ,
        e.toArray = function(t) {
            try {
                return Array.prototype.slice.call(t)
            } catch (i) {
                var e = (r = [],
                o(t, (function(t) {
                    r.push(t)
                }
                )),
                {
                    v: r
                });
                if ("object" === (void 0 === e ? "undefined" : n(e)))
                    return e.v
            }
            var r
        }
        ,
        e.last = function(t) {
            return t[t.length - 1]
        }
        ,
        e.isTag = a,
        e.isScript = function(t) {
            return a(t, "script")
        }
        ,
        e.isStyle = function(t) {
            return a(t, "style")
        }
    }
    ])
}
));
var _tms = {
    debug: !1,
    host: location.hostname,
    domain: function() {
        var t = location.hostname
          , e = t.match(/(.co.uk|.com.mx|.com.au)$/) ? -3 : -2;
        return t.split(".").slice(e).join(".")
    }(),
    getGet: function(t) {
        return this.getSecureGetParam(t)
    },
    getSecureGetParam: function(t) {
        var e = location.href.split("?")[1];
        if (void 0 !== e)
            for (pa = e.split("&"),
            i = 0; i < pa.length; i++) {
                if (kv = pa[i].split("="),
                kv[0] == t)
                    return encodeURIComponent(kv[1]).replace(/[%'()]/g, "")
            }
        return null
    },
    isDevSystem: function() {
        var t = this.host;
        return t.indexOf(".dev") > -1 || t.indexOf(".internal") > -1 || t.indexOf(".office") > -1 || t.indexOf("localhost") > -1
    },
    isEharmony: function() {
        var t = this.host.indexOf("eharmony") > -1
          , e = !1;
        return null !== document.querySelector("#domPageVars") && (e = "eh" === document.querySelector("#domPageVars").getAttribute("data-brand-id")),
        t || e
    },
    getTmsDomain: function() {
        var t = this.host;
        return this.isDevSystem() && this.isEharmony() ? "eht.greatviews.de" : this.isDevSystem() || t.indexOf(".it") > -1 || t.indexOf("parship.co.uk") > -1 ? "trf.greatviews.de" : "tms" + pegTracking.util.getMainDomain(t)
    },
    getCid: function() {
        var t = "1421";
        return this.isEharmony() && (t = "1521"),
        t
    },
    getCookie: function(t) {
        var e = document.cookie.split(" ");
        if (void 0 !== e)
            for (i = 0; i < e.length; i++)
                if (kv = e[i].split("="),
                kv[0] == t)
                    return kv.slice(1).join("=");
        return null
    },
    setCookie: function(t, e, n, r) {
        var o = t + "=" + e + "; path=/; domain=";
        o += r || "." + _tms.domain,
        n && n > 0 && (exp = new Date,
        exp.setTime(exp.getTime() + 24 * n * 60 * 60 * 1e3),
        o += "; expires=" + exp.toGMTString() + ";"),
        _tms.debug && console.log("(i) _tms.setCookie: " + o),
        document.cookie = o
    },
    ga: [],
    ge: [],
    send: function(t, e) {
        t[0].indexOf("_trackEvent") > -1 && ga((function() {
            for (var e = ga.getAll(), n = 0; n < e.length; ++n) {
                e[n].send("event", t[0][1], t[0][2], t[0][3])
            }
        }
        )),
        t[0].indexOf("_trackPageview") > -1 && ga((function() {
            for (var e = ga.getAll(), n = 0; n < e.length; ++n) {
                e[n].send("pageview", {
                    page: t[0][1]
                })
            }
        }
        )),
        t[0].indexOf("_trackTiming") > -1 && ga((function() {
            for (var e = ga.getAll(), n = 0; n < e.length; ++n) {
                e[n].send("timing", {
                    timingCategory: t[0][1],
                    timingVar: t[0][2],
                    timingValue: t[0][3],
                    transport: "beacon"
                })
            }
        }
        ))
    },
    sendForHome: function() {}
}
  , pageVars = function(t) {
    return t.pageUrl = encodeURI(document.URL).replace(/[%'();]/g, ""),
    t
}(pageVars || {});
pegTracking = {
    init: function() {
        const t = this
          , e = -1 === document.location.host.indexOf("webapi.") && -1 === document.location.search.indexOf("app=true") && -1 === document.location.search.indexOf("androidapp=true") && -1 === document.location.search.indexOf("iosapp=true")
          , n = null === document.getElementById("htlp")
          , r = -1 === document.location.host.indexOf("secure")
          , o = "customElements"in window && document.head.attachShadow;
        e && (n ? pegTracking.util.callDynamicConf((function() {
            void 0 !== dynamicConf.cmp && "" !== dynamicConf.cmp.usercentricSettingsId ? r ? o ? (t.cmp2tms.preparePaymentForms(),
            t.loadCustomLayerComponent()) : t.callTms() : (t.cmp2tms.restorePsgOptinCookieForPayment(),
            t.callTms()) : t.callTms()
        }
        )) : t.callTms())
    },
    onUcInitialized: function() {
        document.querySelectorAll('[href="#uc-first-modal-show"], [href="#uc-info-modal-show"]').forEach((t => {
            t.addEventListener("click", (t => {
                t.preventDefault(),
                UC_UI.showSecondLayer()
            }
            ))
        }
        )),
        window.addEventListener("UC_CONSENT", ( () => {
            pegTracking.setCookieAndCallTms()
        }
        )),
        pegTracking.setCookieAndCallTms()
    },
    setCookieAndCallTms: function() {
        UC_UI.areAllConsentsAccepted() ? pegTracking.util.setCookie("psg_optin", "all") : __ucCmp.getConsentDetails().then((t => {
            const e = t.services;
            let n = {};
            for (const t in e) {
                const r = e[t];
                r.consent.given && (n[r.name] = 1)
            }
            n.Essential = 1,
            n = JSON.stringify(n),
            pegTracking.util.setCookie("psg_optin", encodeURIComponent(n))
        }
        )),
        pegTracking.callTms()
    },
    loadCustomLayerComponent: function() {
        if (!0 === dynamicConf.cmp.isNativeUsercentricsCmpEnabled)
            if (null === document.querySelector("script#usercentrics-cmp")) {
                window.addEventListener("UC_UI_INITIALIZED", this.onUcInitialized);
                const t = document.createElement("script");
                t.src = "https://web.cmp.usercentrics.eu/tcf/stub.js";
                const e = document.createElement("script");
                e.id = "usercentrics-cmp",
                e.dataset.settingsId = dynamicConf.cmp.usercentricSettingsId,
                e.async = !0,
                e.src = "https://web.cmp.usercentrics.eu/ui/loader.js",
                document.body.appendChild(t),
                document.body.appendChild(e)
            } else
                try {
                    pegTracking.setCookieAndCallTms()
                } catch (t) {}
        else if (null === document.querySelector("uc-custom-layer")) {
            this.util._loadScript(`/static_cms/${pegTracking.util.getBrandName()}/static/peg_utils/tracking/uc_custom_layer_combined.js`, null, !0);
            const t = document.createElement("uc-custom-layer");
            document.body.appendChild(t)
        } else
            try {
                document.querySelector("uc-custom-layer").callUsercentric()
            } catch (t) {}
    },
    callTms: function() {
        if (null !== document.querySelector("peg-methodform-cc"))
            return;
        const t = this;
        this.setCookiesViaBackend((function(e) {
            const n = "undefined" != typeof ptr
              , r = "undefined" != typeof encodedPTR
              , o = null !== document.querySelector("#webtracking") && void 0 !== document.querySelector("#webtracking").dataset.encodedptr
              , i = null !== document.querySelector("#pegTrackingContainer") && void 0 !== document.querySelector("#pegTrackingContainer").dataset.encodedptr;
            n ? null === document.getElementById("htlp") && t.lpTracking.init(e) : r ? t.webAppTracking.init(encodedPTR) : o ? t.webAppTracking.init(document.querySelector("#webtracking").dataset.encodedptr) : i && t.webAppTracking.init(document.querySelector("#pegTrackingContainer").dataset.encodedptr, e),
            t.removeNviUtCookie()
        }
        ))
    },
    setCookiesViaBackend: function(t) {
        const e = new XMLHttpRequest;
        let n = pegTracking.util.getGetParamFromUrl(document.URL, "pscode");
        null === n && (n = "");
        const r = "?url_path=" + this.util.getUrlPath() + "&pscode=" + n + "&ref=" + this.util.sanitizeUrlString(document.referrer);
        e.open("GET", "/nocache/nvi" + r),
        e.onreadystatechange = function() {
            if (4 === e.readyState)
                if (200 === e.status)
                    "" !== e.responseText ? t(JSON.parse(e.responseText)) : t();
                else
                    t()
        }
        ,
        e.send()
    },
    removeNviUtCookie: function() {
        this.util.setCookie("NVI_UT", "", "0", this.util.getMainDomain(window.location.hostname))
    }
},
null !== document.querySelector("peg-app-shell") && document.addEventListener("ajaxShellPage:loadingDone", (function() {
    pegTracking.init(),
    null !== document.querySelector("peg-registration-featured-profile ul.actionButtons") && (document.querySelector("peg-registration-featured-profile ul.actionButtons").style.opacity = "1")
}
)),
document.addEventListener("DOMContentLoaded", (function() {
    null === document.querySelector("peg-app-shell") && pegTracking.init(),
    null !== document.querySelector("peg-registration-featured-profile ul.actionButtons") && (document.querySelector("peg-registration-featured-profile ul.actionButtons").style.opacity = "1")
}
)),
pegTracking = pegTracking || {},
pegTracking.util = {
    callDynamicConf: function(t) {
        if ("object" == typeof dynamicConf)
            void 0 !== t && t();
        else if (-1 === document.location.href.indexOf("www.parship.com")) {
            let e = "";
            null !== document.querySelector("div.config") && null !== document.querySelector("div.config").getAttribute("data-tid") && (e = "?tid=" + document.querySelector("div.config").getAttribute("data-tid")),
            this._loadScript("/common/dynamicconf" + e, t)
        }
    },
    _loadScript: function(t, e, n) {
        const r = document.createElement("script");
        r.setAttribute("src", t),
        !0 === n && r.setAttribute("type", "module"),
        document.getElementsByTagName("head")[0].appendChild(r),
        r.onloadDone || null == e || (r.onloadDone = !0,
        r.onload = function() {
            e()
        }
        )
    },
    _createPostscribeContainer: function() {
        if (null === document.querySelector("#postscribeTracking")) {
            const t = document.createElement("div");
            t.setAttribute("id", "postscribeTracking"),
            null !== document.querySelector("#pegTrackingContainer") ? document.querySelector("#pegTrackingContainer").appendChild(t) : null !== document.querySelector("#webtracking") ? document.querySelector("#webtracking").appendChild(t) : document.body.appendChild(t)
        }
    },
    _loadIframe: function(t) {
        var e = document.createElement("iframe");
        e.setAttribute("src", t),
        e.style.width = "1px",
        e.style.height = "1px",
        null !== document.querySelector("#pegTrackingContainer") ? document.querySelector("#pegTrackingContainer").appendChild(e) : null !== document.querySelector("#webtracking") ? document.querySelector("#webtracking").appendChild(e) : document.body.appendChild(e)
    },
    getCookie: function(t) {
        if (!document.cookie)
            return null;
        const e = document.cookie.split(";");
        for (let n = 0; n < e.length; n++) {
            const r = e[n].split("=", 2);
            if (r[0].trim() === t)
                return r[1]
        }
        return null
    },
    setCookie: function(t, e) {
        let n, r = null, o = null;
        n = void 0 === this.setCookie.arguments ? arguments : this.setCookie.arguments,
        n.length > 2 && (r = n[2]),
        n.length > 3 && (o = n[3]);
        let i = t + "=" + e + "; path=/";
        if (null !== r) {
            let t = r;
            if (-1 !== r) {
                let e = new Date;
                e.setTime(e.getTime() + 1e3 * r),
                t = e.toGMTString(),
                i += "; expires=" + t
            }
        }
        i += null !== o ? "; domain=" + o : "; domain=" + pegTracking.util.getMainDomain(window.location.hostname),
        document.cookie = i
    },
    getGetParamFromUrl: function(t, e) {
        if (null === t || null === e || -1 === t.indexOf("?"))
            return null;
        const n = t.split("?", 2)[1].split("&");
        for (let t = 0; t < n.length; t++) {
            const r = n[t].split("=", 2);
            if (r[0] === e)
                return encodeURIComponent(r[1]).replace(/[%'()]/g, "")
        }
        return null
    },
    getUrlPath: function() {
        return pegTracking.util.sanitizeUrlString(document.location.pathname)
    },
    getTimezoneCookie: function() {
        return pegTracking.util.sanitizeUrlString(this.getCookie("timezone"))
    },
    getTfvEnabledUrlParam: function() {
        return null !== pegTracking.util.getCookie("tfvEnabled") ? "&no_tags=true" : ""
    },
    getForwardUrlParams: function(t) {
        if ("iframe" === t) {
            const t = ["gclid", "awc", "fbevent"];
            let e = "";
            return t.forEach(( (n, r) => {
                if (null !== this.getGetParamFromUrl(document.URL, t[r])) {
                    const n = this.getGetParamFromUrl(document.URL, t[r]);
                    e += "&" + t[r] + "=" + n
                }
            }
            )),
            e.replace(/[<>'();]/g, "")
        }
        return ""
    },
    sanitizeUrlString: function(t) {
        return encodeURIComponent(t).replace(/[<>'();]/g, "")
    },
    hasLocalStorage: function() {
        try {
            return localStorage.setItem("featureDetectLocalStorage", ""),
            localStorage.removeItem("featureDetectLocalStorage"),
            !0
        } catch (t) {
            return !1
        }
    },
    getMainDomain: function(t) {
        const e = /^.*?((\.?[^.]+?)(\.([^.]+?)\.[^.]+?))$/.exec(t);
        if (e) {
            const t = e[4];
            let n = e[3];
            return "co" !== t && "com" !== t || (n = e[1]),
            n
        }
        return t
    },
    getBrandName: function() {
        let t = "parship";
        return window.location.hostname.indexOf("elitepartner") > -1 ? t = "elitepartner" : window.location.hostname.indexOf("eharmony") > -1 && (t = "eharmony"),
        t
    },
    _triggerCustomEvent: function(t, e) {
        if ("CustomEvent"in window && ("function" == typeof window.CustomEvent || window.CustomEvent.toString().indexOf("CustomEventConstructor") > -1)) {
            const n = new CustomEvent(t,{
                detail: e
            });
            document.dispatchEvent(n)
        }
    },
    _getMappedUserType: function(t) {
        let e = "";
        return void 0 !== t && ("rv" === t.ut ? e = "repeat_visitor" : "ft" === t.ut && (e = "firsttime_visitor")),
        e
    }
},
pegTracking = pegTracking || {},
pegTracking.cmp2tms = {
    getOptinUrlParam: function() {
        let t = "";
        if (void 0 !== dynamicConf.cmp && "" !== dynamicConf.cmp.usercentricSettingsId) {
            let e = !1;
            const n = _tms.getTmsDomain().indexOf("trf.greatviews.de") > -1 || _tms.getTmsDomain().indexOf("eht.greatviews.de") > -1
              , r = null === pegTracking.util.getCookie("psg_optin");
            if (n) {
                const n = decodeURIComponent(pegTracking.util.getCookie("psg_optin"))
                  , r = "all" === n;
                !1 === r && (e = JSON.parse(decodeURIComponent(n))),
                (r || e) && (t = "&psg_optin=" + pegTracking.util.getCookie("psg_optin"))
            } else
                r && (t = "&no_tags=true")
        }
        return t
    },
    preparePaymentForms: function() {
        const t = document.querySelectorAll('[action="/payment/runtime"]').length > 0
          , e = null !== document.getElementById("crmLoginForm") && document.getElementById("crmLoginForm").getAttribute("action").indexOf("/specialoffer/unauthorizedbuy") > -1;
        if (t || e) {
            const t = pegTracking.util.getCookie("psg_optin");
            if (null !== t) {
                let e = "";
                document.querySelectorAll('[action="/payment/runtime"], #crmLoginForm').forEach((function(n) {
                    e = document.createElement("input"),
                    e.setAttribute("type", "hidden"),
                    e.setAttribute("name", "psg_optin"),
                    e.setAttribute("value", encodeURIComponent(t)),
                    n.appendChild(e)
                }
                ))
            }
        }
    },
    restorePsgOptinCookieForPayment: function() {
        if (document.location.host.indexOf("secure") > -1) {
            const t = this.getPsgOptinFromUrl();
            void 0 !== t && pegTracking.util.setCookie("psg_optin", t)
        }
    },
    getPsgOptinFromUrl: function() {
        const t = document.URL;
        if (-1 === t.indexOf("?"))
            return null;
        const e = t.split("?", 2)[1].split("&");
        for (let t = 0; t < e.length; t++) {
            const n = e[t].split("=", 2);
            if ("psg_optin" === n[0]) {
                const t = decodeURIComponent(decodeURIComponent(n[1]));
                try {
                    if ("all" === t || JSON.parse(t))
                        return n[1]
                } catch (t) {}
            }
        }
    }
},
pegTracking = pegTracking || {},
pegTracking.lpTracking = {
    usertype: null,
    init: function(t) {
        this.usertype = pegTracking.util._getMappedUserType(t),
        pegTracking.util._createPostscribeContainer(),
        postscribe("#postscribeTracking", '<script src="' + this.getTmsUrl("inlineScript") + '"><\/script>'),
        pegTracking.util._loadIframe(this.getTmsUrl("iframe"))
    },
    getTmsUrl: function(t) {
        let e = "j";
        "iframe" === t && (e = "fnl");
        let n = "//" + _tms.getTmsDomain() + "/tms?cid=" + _tms.getCid() + "&m315=" + e + "&pscode=" + pegTracking.util.getGetParamFromUrl(document.URL, "pscode") + "&ref=" + pegTracking.util.sanitizeUrlString(document.referrer) + "&env=" + this.getEnvironment() + "&url_path=" + pegTracking.util.getUrlPath() + "&usertype=" + this.usertype + "&timezone=" + pegTracking.util.getTimezoneCookie() + pegTracking.util.getTfvEnabledUrlParam() + pegTracking.util.getForwardUrlParams(t) + pegTracking.cmp2tms.getOptinUrlParam();
        for (let t in ptr)
            n += "&" + t + "=" + encodeURI(ptr[t]);
        return n
    },
    getEnvironment: function() {
        let t = "prod";
        return _tms.isDevSystem() && (t = "dev"),
        t
    }
},
pegTracking = pegTracking || {},
pegTracking.webAppTracking = {
    usertypeString: "",
    encodedPtrString: "",
    init: function(t, e) {
        this.encodedPtrString = t,
        void 0 !== e && (this.usertypeString = "&usertype=" + pegTracking.util._getMappedUserType(e)),
        pegTracking.util._createPostscribeContainer(),
        postscribe("#postscribeTracking", '<script src="' + this.getTmsUrl("inlineScript") + '"><\/script>'),
        pegTracking.util._loadIframe(this.getTmsUrl("iframe"))
    },
    getTmsUrl: function(t) {
        let e = "j";
        return "iframe" === t && (e = "fnl"),
        "//" + _tms.getTmsDomain() + "/tms?cid=" + _tms.getCid() + "&m315=" + e + "&v=" + this.encodedPtrString + this.usertypeString + "&ref=" + encodeURIComponent(this.getMyReferrer()) + "&timezone=" + pegTracking.util.getTimezoneCookie() + pegTracking.util.getTfvEnabledUrlParam() + pegTracking.util.getForwardUrlParams(t) + pegTracking.cmp2tms.getOptinUrlParam()
    },
    getMyReferrer: function() {
        let t = "";
        return t = pegTracking.util.hasLocalStorage() && null !== localStorage.getItem("pageReferrer") && null !== document.querySelector("peg-app-shell") ? localStorage.getItem("pageReferrer") : document.referrer,
        t
    }
};
