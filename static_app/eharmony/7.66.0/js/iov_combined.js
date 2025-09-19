/* Build: 9/8/2025, 3:37:44 PM */
/*! 2025-09-08 15:09:18 */
window.io_global_object_name = "IGLOO",
window.IGLOO = window.IGLOO || {
    enable_flash: !1,
    enable_atrip: !1,
    bb_callback: function(e) {
        Array.from(document.getElementsByClassName("fd")).forEach(function(t) {
            t.value = e
        })
    },
    loader: {
        uri_hook: "/fd",
        version: "general5"
    }
},
function() {
    !function e() {
        function t(e, t) {
            var a, o = {};
            for (a = e.length - 1; -1 < a; a--)
                0 < a ? o[a] = function() {
                    var n = a;
                    return function() {
                        return r(e[n], o[n + 1], t)
                    }
                }() : r(e[a], o[a + 1], t)
        }
        function r(e, t, r) {
            var o = document.createElement("script")
              , i = n(l[r] && l[r].staticVer && l[r].staticVer + "/" || e[1]);
            e[0] = e[0].replace("##version##", i);
            var s = e[0].split("?")[0].split("/")
              , d = s[s.length - 1].split(".")[0];
            u.test(e[1]) && i !== e[1] && a("loader: Overriding configured version with staticVer."),
            o.setAttribute("src", e[0]),
            o && o.addEventListener ? o.addEventListener("error", function() {
                p[r + "_" + d + "_load_failure"] = "true"
            }) : o.attachEvent && o.attachEvent("onerror", function() {
                p[r + "_" + d + "_load_failure"] = "true"
            }),
            t && (o.onload = t),
            document.getElementsByTagName("head")[0].appendChild(o)
        }
        function a(e) {
            if ("function" == typeof l.trace_handler)
                try {
                    var t = l.trace_handler(e)
                } catch (e) {
                    t = !1
                }
            return t
        }
        function o(e, t) {
            var r = null != e;
            return !(!r || "1" !== e.toString() && "true" !== e.toString().toLowerCase()) || (!r || "0" !== e.toString() && "false" !== e.toString().toLowerCase()) && ("boolean" == typeof t && t)
        }
        function n(e) {
            return a("********** version before replace: " + e + " **********"),
            a('localNamespace[ "url_dots_to_dashes" ]: ' + p.url_dots_to_dashes),
            a("numericVersionPattern.test( output ): " + u.test(e)),
            p.url_dots_to_dashes && u.test(e) && (e = e.replace(/\./g, "-")),
            a("version after replace: " + e),
            e
        }
        var i = window
          , s = i.io_global_object_name || "IGLOO"
          , l = i[s] = i[s] || {}
          , p = l.loader = l.loader || {}
          , d = []
          , c = []
          , u = /^[0-9]{1,3}(\.[0-9]{1,3}){2}\/$/;
        if (p.loaderMain)
            return a("loader: Loader script has already run, try reducing the number of places it's being included."),
            !1;
        p.loaderMain = e,
        p.loaderVer = "5.8.1",
        function() {
            for (var e = o(p.tp, !0), t = o(p.fp_static, !0), r = o(p.fp_dyn, !0), s = o(p.enable_legacy_compatibility), u = o(p.tp_split), f = p.tp_host; f && "/" === f.charAt(f.length - 1); )
                f = f.slice(0, -1);
            var _ = f || "https://mpsnare.iesnare.com"
              , h = void 0 !== p.uri_hook ? p.uri_hook + "/" : "/iojs/"
              , y = p.subkey ? i.encodeURIComponent(p.subkey) + "/" : "";
            f = p.tp_resource || "wdp.js";
            var v = p.tp_host ? "&tp_host=" + i.encodeURIComponent(p.tp_host) : ""
              , m = p.fp_static_override_uri
              , g = m ? "&fp_static_uri=" + i.encodeURIComponent(m) : ""
              , b = o(p.enable_ip, !0)
              , w = (p.version || "versionOrAliasIsRequired") + "/";
            p.tp_host = _,
            v = "?loaderVer=" + p.loaderVer + "&compat=" + s + "&tp=" + e + "&tp_split=" + u + v + "&fp_static=" + t + "&fp_dyn=" + r + g + (b ? "" : "&enable_ip=" + b),
            e || t || a("loader: Not currently configured to load fp_static or tp script(s)."),
            l.fp && l.fp.staticVer && l.fp.staticVer + "/" !== w && (w = n(l.fp.staticVer + "/"),
            a("loader: Configured version replaced with that from pre-loaded static script.")),
            t || l.fp && l.fp.staticMain ? (h = (h + "##version##" + y).replace(/\/\//g, "/"),
            t && (l.fp && l.fp.staticMain ? s && !l.fp.preCompatMain && a("loader: enable_legacy_compatibility on, but included static does not have the compat wrapper.") : m ? d.push([m, ""]) : d.push([h + "static_wdp.js" + v, w])),
            !r || l.fp && l.fp.dynMain ? l.fp && l.fp.dynMain && a("loader: First party dynamic script has already been loaded, disable fp_dyn or make sure you're not manually including the dynamic file separately.") : d.push([h + "dyn_wdp.js" + v, w])) : o(p.fp_dyn) && a("loader: Invalid Config, first party dynamic script set to load without static."),
            e && (l.io && l.io.staticMain ? a("loader: Third party script has already been loaded.") : (e = _ + "/##version##" + y,
            u ? (c.push([e + "static_wdp.js" + v, w]),
            c.push([e + "dyn_wdp.js" + v, w]),
            p.tp_resource && a("loader: Invalid Config: both tp_resource and tp_split set. Ignoring tp_resource.")) : c.push([e + f + v, w])))
        }(),
        t(d, "fp"),
        t(c, "io")
    }()
}
.call(this);
