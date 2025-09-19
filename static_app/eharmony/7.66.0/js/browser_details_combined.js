/* Build: 9/8/2025, 3:37:43 PM */
/*! 2025-09-08 15:09:18 */
window.browserDetails = window.browserDetails || {},
function(e) {
    e.isSupported = function() {
        var e = !0 === /Edge?\/(12[89]|1[3-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([5-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android.+Firefox\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+/.test(navigator.userAgent)
          , t = "Promise"in window && "flat"in Array.prototype && "customElements"in window && "Intl"in window && "DateTimeFormat"in Intl;
        return e && t
    }
    ,
    e.features = {
        hasStorageAccessStored: null,
        init: function() {
            "ontouchstart"in window ? document.querySelector("html").classList.add("touchevents") : document.querySelector("html").classList.add("no-touchevents")
        },
        hasStorageAccess: function() {
            if (null !== this.hasStorageAccessStored)
                return this.hasStorageAccessStored;
            try {
                return localStorage.setItem("featureTest", "true"),
                localStorage.removeItem("featureTest"),
                this.hasStorageAccessStored = !0,
                !0
            } catch (e) {
                return this.hasStorageAccessStored = !1,
                !1
            }
        }
    },
    e.userAgent = {
        init: function() {
            /iPad|iPhone|iPod/.test(navigator.userAgent) && document.querySelector("html").classList.add("ios"),
            /^((?!chrome|android|iPad|iPhone|iPod).)*safari/i.test(navigator.userAgent) && document.querySelector("html").classList.add("macSafari")
        }
    },
    e.legacyInfo = {
        show: function() {
            var t = this;
            if (null !== document.querySelector("#legacyBrowser")) {
                var o = !1;
                e.features.hasStorageAccess() && (o = "true" !== sessionStorage.getItem("hideLegacyBrowserBar")),
                o && !1 === e.isSupported() && (document.querySelector("html").classList.add("legacybrowser"),
                document.querySelector("#legacyBrowser .hideInfoBar").addEventListener("click", function() {
                    t.hide()
                }))
            }
        },
        hide: function() {
            document.querySelector("html").classList.remove("legacybrowser"),
            e.features.hasStorageAccess() && sessionStorage.setItem("hideLegacyBrowserBar", "true")
        }
    },
    e.features.init(),
    e.userAgent.init(),
    document.addEventListener("ajaxShellPage:loadingDone", function() {
        e.legacyInfo.show()
    }),
    document.addEventListener("DOMContentLoaded", function() {
        e.legacyInfo.show()
    })
}(window.browserDetails);
