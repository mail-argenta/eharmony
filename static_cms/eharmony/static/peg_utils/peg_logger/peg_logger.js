/* 3/25/2025, 4:27:16 PM */
!(function (e) {
  e.util = {
    preparedJsonString: function (e) {
      return JSON.stringify(e);
    },
    getUserAgent: function () {
      return navigator.userAgent;
    },
    getPathName: function () {
      return window.location.pathname;
    },
    getHostname: function () {
      return window.location.hostname;
    },
    getChiffre: function () {
      let e = document.getElementById("domPageVars"),
        t = null;
      return (
        null !== e &&
          null !== e.getAttribute("data-user-id") &&
          (t = e.getAttribute("data-user-id")),
        t
      );
    },
    getGuid: function () {
      try {
        let e = window.navigator,
          t = window.screen,
          n = e.mimeTypes.length;
        return (
          (n += e.userAgent.replace(/\D+/g, "")),
          (n += e.plugins.length),
          (n += t.height || ""),
          (n += t.width || ""),
          (n += t.pixelDepth || ""),
          (n += encodeURIComponent(window.btoa(this.getHostname()))),
          n
        );
      } catch (e) {
        return "couldNMotGenerateGuid" + e;
      }
    },
    getChiffreOrGuid: function () {
      let e = this.getChiffre();
      return null === e && (e = this.getGuid()), e;
    },
    getBrandId: function () {
      let e = "";
      return (
        window.location.hostname.indexOf("parship") > -1
          ? (e = "ps")
          : window.location.hostname.indexOf("eharmony") > -1
          ? (e = "eh")
          : window.location.hostname.indexOf("elitepartner") > -1 && (e = "ep"),
        e
      );
    },
    getTimeStamp: function () {
      return new Date().getTime();
    },
    getCustomerJourneyId: function () {
      return this.getCookie("cjcookie");
    },
    getCookie: function (e) {
      if (!document.cookie) return null;
      let t = document.cookie.split(";");
      for (let n = 0; n < t.length; n++) {
        let i = t[n].split("=", 2);
        if (i[0].trim() === e) return i[1];
      }
      return null;
    },
    isDevSystem: function () {
      let e = location.hostname;
      return (
        !1 === e.indexOf(".ehprod.") > -1 &&
        (e.indexOf(".dev") > -1 ||
          e.indexOf(".internal") > -1 ||
          e.indexOf(".office") > -1 ||
          e.indexOf("localhost") > -1)
      );
    },
    isLegacyBrowser: function () {
      const t =
          !0 ===
          /Edge?\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(13[4-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(18\.([1-9]|\d{2,})|(19|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android.+Firefox\/(13[5-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[3-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|SamsungBrowser\/(2[7-9]|[3-9]\d|\d{3,})\.\d+/.test(
            e.util.getUserAgent()
          ),
        n =
          "Promise" in window &&
          "flat" in Array.prototype &&
          "customElements" in window &&
          "Intl" in window &&
          "DateTimeFormat" in Intl;
      return !t || !n;
    },
    hasLocalStorage: function () {
      try {
        return (
          localStorage.setItem("featureDetectLocalStorage", ""),
          localStorage.removeItem("featureDetectLocalStorage"),
          !0
        );
      } catch (e) {
        return !1;
      }
    },
    devConsole: function (e) {
      !0 === this.isDevSystem() && console.log(e);
    },
    getQaTestModeFor: function (e) {
      var t = this.getCookie("qaTestMode");
      return null !== t && t.indexOf(e) > -1;
    },
    getCurrentScreenSize: function () {
      let e,
        t = window.innerWidth;
      try {
        (e = window
          .getComputedStyle(document.body, ":after")
          .getPropertyValue("content")),
          (e = e.replace(/"/g, "").replace(/'/g, ""));
      } catch (t) {
        e = "XL";
      }
      return (
        "S" !== e &&
          "M" !== e &&
          "L" !== e &&
          "XL" !== e &&
          (e =
            t >= 0 && t < 481
              ? "S"
              : t >= 481 && t < 768
              ? "M"
              : t >= 768 && t < 980
              ? "L"
              : "XL"),
        e
      );
    },
    getTimezone: function () {
      try {
        if ("Intl" in window) {
          return "string" ==
            typeof Intl.DateTimeFormat().resolvedOptions().timeZone
            ? Intl.DateTimeFormat().resolvedOptions().timeZone
            : "";
        }
        return "";
      } catch (e) {
        return "";
      }
    },
    getVariation: function () {
      const e = /var=([^&]+)/.exec(location.search);
      return e ? e[1] : "default";
    },
    getPlatform: function () {
      const e = null !== document.querySelector("html.is-inPWA"),
        t =
          document.location.hostname.indexOf("webapi.") > -1 ||
          document.location.hostname.indexOf("web-api.") > -1 ||
          null !== document.querySelector("body.inNativeAppContext");
      return e ? "pwa" : t ? "webview" : "webapp";
    },
    getReferrer: function () {
      let e = "";
      return (
        (e =
          this.hasLocalStorage() &&
          null !== localStorage.getItem("pageReferrer") &&
          null !== document.querySelector("peg-app-shell")
            ? localStorage.getItem("pageReferrer")
            : document.referrer),
        e
      );
    },
    customEvent: {
      trigger: function (e, t) {
        this._polyfillCustomEvent();
        var n = new CustomEvent(e, { detail: t });
        document.dispatchEvent(n);
      },
      _polyfillCustomEvent: function () {
        !(function () {
          if (
            "CustomEvent" in window &&
            "function" == typeof window.CustomEvent
          )
            return !1;
          function e(e, t) {
            t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
          }
          (e.prototype = window.Event.prototype), (window.CustomEvent = e);
        })();
      },
    },
  };
})((window.pegLogger = window.pegLogger || {})),
  (function (e) {
    function t() {
      var t, n, i, o, r, a, c;
      !1 === e.util.isDevSystem() &&
        ("undefined" == typeof InstanaEumObject &&
          ((t = window),
          (n = document),
          (i = "script"),
          (o = "https://eum.instana.io/eum.min.js"),
          (r = "ineum"),
          (t.InstanaEumObject = r),
          (t[r] =
            t[r] ||
            function () {
              (t[r].q = t[r].q || []).push(arguments);
            }),
          (t[r].l = 1 * new Date()),
          (a = n.createElement(i)),
          (c = n.getElementsByTagName(i)[0]),
          (a.async = 1),
          (a.src = o),
          c.parentNode.insertBefore(a, c)),
        ineum("reportingUrl", "https://eum-eu-west-1.instana.io"),
        (function () {
          try {
            let e = document
              .querySelector("meta[name=_ibtid]")
              .getAttribute("content");
            null !== e && ineum("traceId", e);
          } catch (e) {}
        })(),
        (function () {
          let t = "";
          e.util.isDevSystem()
            ? (t = "3QqON4bzShmMdfJUWCKXwg")
            : "ps" === e.util.getBrandId()
            ? (t = "J_6i8IVCSV-6IC4dKfe6NA")
            : "ep" === e.util.getBrandId()
            ? (t = "uzIBlQLNTOu7WgZRakZ9iA")
            : "eh" === e.util.getBrandId() && (t = "VDyLMwT6QW2j93YpxKH-wA");
          ineum("apiKey", t);
        })(),
        (function () {
          let e = document.querySelector("body").getAttribute("id");
          null !== e && ineum("page", e);
        })(),
        ineum("meta", "user-agent", e.util.getUserAgent()),
        (function () {
          let t = e.util.getChiffre();
          null !== t && ineum("user", t);
        })());
    }
    !(function () {
      try {
        null !== document.querySelector("peg-app-shell")
          ? document.addEventListener("ajaxShellPage:loadingDone", function () {
              t();
            })
          : document.addEventListener("DOMContentLoaded", function () {
              null === document.querySelector("peg-app-shell") && t();
            });
      } catch (t) {
        e.util.devConsole("Instana script not initialized"),
          e.util.devConsole(t);
      }
    })();
  })((window.pegLogger = window.pegLogger || {})),
  (function (e) {
    !(function () {
      let t = function (e) {
        let t = window.document.createElement("a");
        return (t.href = e), t;
      };
      window.onerror = function (i, o, r, a, c) {
        try {
          let e = "",
            s = !1,
            d = !1,
            u = !1,
            g = "No Stacktrace from Browser";
          if (
            (void 0 !== o &&
              ((e = t(o).hostname),
              (s = e === window.location.hostname),
              (d =
                o.indexOf("_combined.js") > 0 || o.indexOf("sso_lib.js") > 0),
              (u = o.indexOf("/wp-content/") > 0)),
            void 0 === a && (a = ""),
            null == i && (i = ""),
            void 0 === c && (c = ""),
            void 0 !== c.stack && (g = c.stack),
            "string" == typeof i && i.indexOf("Script error.") > -1)
          )
            return;
          s && d
            ? n({
                stacktrace:
                  i +
                  " UNCAUGHT ERROR: in " +
                  o +
                  " LINE: " +
                  r +
                  " column: " +
                  a +
                  " errorObj: " +
                  c,
                origin: "Uncaught_pegJSError",
                message: g,
              })
            : o === window.location.href ||
              n(
                "" === o
                  ? {
                      stacktrace:
                        i +
                        " UNCAUGHT ERROR: in " +
                        o +
                        " LINE: " +
                        r +
                        " errorObj: " +
                        c,
                      origin: "Uncaught_externalJSerror",
                      message: g,
                    }
                  : s && u
                  ? {
                      stacktrace:
                        i +
                        " UNCAUGHT ERROR: in " +
                        o +
                        " LINE: " +
                        r +
                        " errorObj: " +
                        c,
                      origin: "Uncaught_JsError_WP",
                      message: g,
                    }
                  : {
                      stacktrace:
                        i +
                        " UNCAUGHT ERROR: in " +
                        o +
                        " LINE: " +
                        r +
                        " errorObj: " +
                        c,
                      origin: "Uncaught_unknownSrcJSerror",
                      message: g,
                    }
              );
        } catch (t) {
          e.util.devConsole("window.onerror failed in jserror_logger: " + t);
        }
      };
    })(),
      document.addEventListener("pegLogger-logJsError", function (e) {
        n(e.detail);
      }),
      document.addEventListener("pegLogger-logJsError-WP", function (e) {
        n(e.detail);
      });
    let t = 0;
    function n(n) {
      let o = new Date().getTime(),
        r = new XMLHttpRequest();
      r.open("POST", "/ls/?" + o, !0),
        r.setRequestHeader("Content-Type", "application/json;charset=UTF-8"),
        r.setRequestHeader("X-Requested-With", "XMLHttpsRequest");
      let a = {
        userAgent: e.util.getUserAgent(),
        breakpoint: e.util.getCurrentScreenSize(),
        domain: e.util.getHostname(),
        pathName: e.util.getPathName(),
        chiffre: e.util.getChiffreOrGuid(),
        message: i(n.message),
        stacktrace: n.stacktrace,
        origin: n.origin,
        loggingType: "JsError",
      };
      if (t < 10) {
        let i = !0;
        e.util.isLegacyBrowser() && (i = !1),
          void 0 !== n.stacktrace &&
            ((n.stacktrace.indexOf("innerText") > -1 ||
              n.stacktrace.indexOf("invalid content returned for slot") > -1) &&
              (i = !1),
            (n.stacktrace.indexOf("QuotaExceededError") > -1 ||
              n.stacktrace.indexOf("wdkmodalbox: Session expired") > -1 ||
              n.stacktrace.indexOf("e.targetTouches[0].pageX") > -1) &&
              (i = !1),
            n.stacktrace.indexOf("https://www.googletagmanager.com/gtag/js") >
              -1 && (i = !1),
            (n.stacktrace.indexOf(
              "https://connect.facebook.net/en_US/fbevents.js"
            ) > -1 ||
              n.stacktrace.indexOf("moz-extension://") > -1 ||
              n.stacktrace.indexOf("chrome-extension://") > -1 ||
              n.stacktrace.indexOf("www.googleadservices.com") > -1 ||
              n.stacktrace.indexOf("https://bat.bing.com") > -1 ||
              n.stacktrace.indexOf("www.dwin1.com") > -1 ||
              n.stacktrace.indexOf("eum.instana.io/eum.min.js") > -1 ||
              n.stacktrace.indexOf(
                'Die Eigenschaft "message" eines undefinierten oder Nullverweises kann nicht abgerufen werden'
              ) > -1) &&
              (i = !1),
            n.stacktrace.indexOf("Caught_2") > -1 &&
              (n.stacktrace.indexOf("unhandledrejection (event.promise)") >
                -1 && (i = !1),
              "string" == typeof n.message &&
                ((n.message.indexOf("TypeError: Cannot read property") > -1 &&
                  n.message.indexOf("top") > -1) ||
                  n.message.indexOf("isLoadNextContactsNeeded") > -1 ||
                  n.message.indexOf(!1) ||
                  n.message.indexOf(
                    "The media resource indicated by the src attribute or assigned media provider"
                  ) > -1 ||
                  n.message.indexOf("play") > -1) &&
                (i = !1)),
            n.stacktrace.indexOf("ReferenceError: jQuery is not defined") >
              -1 && (i = !1),
            void 0 !== e.util.getUserAgent() &&
              ((e.util.getUserAgent().indexOf("Firefox/") > -1 &&
                n.stacktrace.indexOf("killDefaultCaches: failed") > -1) ||
                (e.util.getUserAgent().indexOf("Firefox/") > -1 &&
                  n.stacktrace.indexOf("Caught_10") > -1)) &&
              (i = !1)),
          "string" == typeof n.message &&
            (0 === n.message.length && (i = !1),
            n.message.indexOf("wdcLottieAnimation") > -1 && (i = !1),
            n.message.indexOf("static.cloudflareinsights.com/beacon.min.js") >
              -1 && (i = !1),
            n.message.indexOf("safari-extension") > -1 && (i = !1)),
          (e.util.getPathName().indexOf("htlp") > -1 ||
            e.util.getPathName().indexOf("aff_c") > -1) &&
            (i = !1),
          i && (r.send(e.util.preparedJsonString(a)), (t += 1));
      }
      void 0 !== n.stacktrace
        ? e.util.devConsole(
            "peg_logger: " + e.util.preparedJsonString(n.stacktrace)
          )
        : e.util.devConsole("peg_logger send");
    }
    function i(e) {
      return "object" == typeof e ? JSON.stringify(e) : e;
    }
  })((window.pegLogger = window.pegLogger || {})),
  (function (e) {
    let t = 0;
    !(function () {
      try {
        (n = window.alert),
          (window.alert = function (i) {
            return (
              (function (n) {
                let i = !0,
                  o = new Date().getTime(),
                  r = new XMLHttpRequest();
                r.open("POST", "/ls/?" + o, !0),
                  r.setRequestHeader(
                    "Content-Type",
                    "application/json;charset=UTF-8"
                  ),
                  r.setRequestHeader("X-Requested-With", "XMLHttpsRequest");
                let a = {
                  userAgent: e.util.getUserAgent(),
                  breakpoint: e.util.getCurrentScreenSize(),
                  domain: e.util.getHostname(),
                  pathName: e.util.getPathName(),
                  chiffre: e.util.getChiffreOrGuid(),
                  message: n.message,
                  stacktrace: n.stacktrace,
                  origin: n.origin,
                  loggingType: "JsError",
                };
                void 0 !== n.stacktrace &&
                  (n.stacktrace.indexOf(
                    "Cannot%20contact%20reCAPTCHA.%20Check%20your%20connection%20and%20try%20again"
                  ) > -1 ||
                    n.stacktrace.indexOf(
                      "Please%20switch%20tabs%20to%20reactivate%20the%20PayPal%20window"
                    ) > -1) &&
                  (i = !1),
                  i &&
                    t < 50 &&
                    (r.send(e.util.preparedJsonString(a)),
                    (t += 1),
                    void 0 !== n.stacktrace
                      ? e.util.devConsole(
                          "peg_logger: " +
                            e.util.preparedJsonString(n.stacktrace)
                        )
                      : e.util.devConsole("peg_logger send"));
              })({
                message: "alert called",
                stacktrace:
                  "UrlParams:" +
                  encodeURI(document.location.search) +
                  " - param: " +
                  encodeURI(i),
                origin: "Caught_jsXception",
              }),
              n.apply(this, arguments)
            );
          });
      } catch (e) {}
      var n;
    })();
  })((window.pegLogger = window.pegLogger || {})),
  (function (e) {
    document.addEventListener("pegLogger-trackingPermission", function (e) {
      n(e.detail);
    }),
      document.addEventListener("pegLogger-logTmsEvents", function (e) {
        n(e.detail);
      }),
      document.addEventListener("pegLogger-logWebAppEvents", function (e) {
        n(e.detail);
      }),
      document.addEventListener("pegLogger-logWpEvents", function (e) {
        n(e.detail);
      });
    let t = "/bd/collection?" + e.util.getTimeStamp();
    function n(n) {
      if (
        (r = n).category &&
        "" !== r.category &&
        r.action &&
        "" !== r.action
      ) {
        let r = {
          brand: e.util.getBrandId(),
          chiffre: e.util.getChiffre(),
          category: n.category,
          subcategory: n.subcategory,
          target_id: n.targetId,
          action: n.action,
          cd1: n.cd1,
          cd2: n.cd2,
          cd3: n.cd3,
          cd4: n.cd4,
          cd5: n.cd5,
          cd6: n.cd6,
          cj_id: e.util.getCustomerJourneyId(),
          domain: e.util.getHostname(),
          path_name: o(n),
          user_agent: e.util.getUserAgent(),
          display_size: e.util.getCurrentScreenSize(),
          client_timestamp: e.util.getTimeStamp(),
          timezone: e.util.getTimezone(),
          variation: n.variation || e.util.getVariation(),
          platform: e.util.getPlatform(),
          referrer: e.util.getReferrer(),
        };
        const a = e.util.preparedJsonString(r);
        if (navigator && navigator.sendBeacon)
          try {
            navigator.sendBeacon(t, a);
          } catch (e) {
            i(a);
          }
        else i(a);
      } else
        e.util.customEvent.trigger("pegLogger-logJsError", {
          message: "pegLogger.sherLogger._logEvent",
          stacktrace: "invalid eventData",
          origin: "Caught_JSError",
        });
      var r;
    }
    function i(n) {
      let i = new XMLHttpRequest();
      i.open("POST", t, !0),
        i.setRequestHeader("Content-Type", "text/plain"),
        i.setRequestHeader("X-Requested-With", "XMLHttpsRequest"),
        (i.onreadystatechange = function () {
          i.readyState === XMLHttpRequest.DONE &&
            e.util.customEvent.trigger("sherLogger-xhrDone");
        }),
        i.send(e.util.preparedJsonString(n));
    }
    function o(e) {
      let t = "";
      return (
        void 0 !== e.pseudoPath && (t = e.pseudoPath),
        window.location.pathname + t
      );
    }
  })((window.pegLogger = window.pegLogger || {}));
