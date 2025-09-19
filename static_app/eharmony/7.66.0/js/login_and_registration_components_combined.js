/* Build: 9/8/2025, 3:37:09 PM */
class t extends HTMLElement {
    static get observedAttributes() {
        return ["orientation"]
    }
    async connectedCallback() {
        await jPar.util.waitForChildNodes(),
        this.abortController = new AbortController,
        this.#t(),
        this.#e(),
        this.shadowRoot.querySelector("a").addEventListener("click", t => {
            this.hasAttribute("disabled") && t.preventDefault()
        }
        )
    }
    disconnectedCallback() {
        this.abortController?.abort()
    }
    #t() {
        const t = document.createElement("template");
        t.innerHTML = this.#n('<style>\n\t\t\t\t\t:host {\n\t\t\t\t\t\toverflow: hidden;\n\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t:host([disabled]) a {\n\t\t\t\t\t\tbackground-color: var(--COLOR_supportDark_100); /* TODO 70% machen */\n\t\t\t\t\t\topacity: .6;\n\t\t\t\t\t\tcursor: default;\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t:host a {\n\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\tjustify-content: center;\n\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\tmargin-top: 4px;\n\t\t\t\t\t\theight: 44px;\n\t\t\t\t\t\tcolor: var(--COLOR_supportLight_100);\n\t\t\t\t\t\tborder: 0;\n\t\t\t\t\t\tbackground-color: var(--COLOR_supportDark_100);\n\t\t\t\t\t\tborder-radius: var(--borderRadius_button);\n\t\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t\ttext-decoration: none;\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t::slotted([slot="icon"].wdk-icon) {\n\t\t\t\t\t\tmargin-bottom: 2px;\n\t\t\t\t\t\tmargin-right: 4px;\n\t\t\t\t\t\tfill: var(--COLOR_supportLight_100) !important;\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t:host a span {\n\t\t\t\t\t\tfont: var(--FONT_highlight_75);\n\t\t\t\t\t}\n\t\t\t\t</style>\n\t\t\t\t<a aria-label="Apple Login" role="button" href="#">\n\t\t\t\t\t<slot name="icon"></slot>\n\t\t\t\t\t<span class="text"><slot name="buttonText"></slot></span>\n\t\t\t\t</a>\n\t\t\t');
        const e = document.importNode(t.content, !0);
        this.shadowRoot || (this.attachShadow({
            mode: "open"
        }),
        this.shadowRoot.appendChild(e))
    }
    attributeChangedCallback(t, e, n) {
        "orientation" === t && e !== n && this.#o(n)
    }
    #o(t) {
        const e = void 0 !== t ? `&search=${t}` : ""
          , n = null !== this.getAttribute("special-callback") ? this.getAttribute("special-callback") : "appleCallback"
          , o = "https://appleid.apple.com/auth/authorize" + ("?client_id=" + dynamicConf.apple.clientId) + `&redirect_uri=${encodeURIComponent(dynamicConf.apple.callbackDomain)}%2F${n}` + `&response_type=${encodeURIComponent("code id_token")}&response_mode=form_post&scope=email` + `&state=action%3D${null !== this.getAttribute("orientation") ? "reg" : "login"}%26oid%3D${this.getAttribute("oid")}${encodeURIComponent(e)}`;
        this.shadowRoot.querySelector("a").setAttribute("href", o)
    }
    #e() {
        if ("object" == typeof dynamicConf)
            this.#o();
        else {
            const t = document.createElement("script");
            t.setAttribute("src", "/common/dynamicconf"),
            this.shadowRoot.appendChild(t),
            t.onloadDone || (t.onloadDone = !0,
            t.onload = () => {
                this.#o()
            }
            )
        }
    }
    #n(t) {
        return String(t).replace(/<script\b|\bonerror=|\bonload=|\bonmouseover=|\bonmouseout=|\bonpagehide=|\bonpageshow=|\bonmessage=|\bonhashchange=|\bonbeforeunload=|\bonpopstate=|\bonresize=|\bonunload=|\bonkeydown=|\bonkeyup=|\bonkeypress=|\bonfocus=|\bonblur=|\bonchange=|\bonsubmit=|\bonreset=|\bonselect=|\bondblclick=|\bondrag=|\bondragend=|\bondragenter=|\bondragleave=|\bondragover=|\bondragstart=|\bondrop=|\bonwheel=|\boncopy=|\boncut=|\bonpaste=|\bonanimationend=|\bonanimationiteration=|\bonanimationstart=|\bontransitionend=|\bontouchcancel=|\bontouchend=|\bontouchmove=|\bontouchstart=|\bonclick=/gi, "")
    }
}
class e extends HTMLElement {
    async connectedCallback() {
        await jPar.util.waitForChildNodes(),
        this.#t(),
        this.#e()
    }
    #t() {
        const t = document.createElement("template");
        t.innerHTML = this.#n('<style>\n\t\t\t\t\t:host {\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\toverflow: hidden;\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t:host a {\n\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\tjustify-content: center;\n\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\tgap: 4px;\n\t\t\t\t\t\twidth: calc(100% - 2px);\n\t\t\t\t\t\theight: 42px;\n\t\t\t\t\t\tcolor: var(--COLOR_supportDark_100);\n\t\t\t\t\t\tbackground-color: var(--COLOR_supportLight_100);\n\t\t\t\t\t\tborder-radius: var(--borderRadius_button);\n\t\t\t\t\t\tborder: var(--COLOR_supportDark_100) 1px solid;\n\t\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t\ttext-decoration: none;\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t::slotted([slot="icon"].wdk-icon) {\n\t\t\t\t\t\theight: 16px !important;\n\t\t\t\t\t\twidth: 16px !important;\n\t\t\t\t\t\tmargin-right: 4px;\n\t\t\t\t\t\tfill: var(--COLOR_supportDark_100) !important;\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t:host a span {\n\t\t\t\t\t\tfont: var(--FONT_highlight_75);\n\t\t\t\t\t}\n\t\t\t\t</style>\n\t\t\t\t<a aria-label="Google Login" role="button" href="#">\n\t\t\t\t\t<slot name="icon"></slot>\n\t\t\t\t\t<span class="text"><slot name="buttonText"></slot></span>\n\t\t\t\t</a>\n\t\t\t');
        const e = document.importNode(t.content, !0);
        this.shadowRoot || (this.attachShadow({
            mode: "open"
        }),
        this.shadowRoot.appendChild(e))
    }
    #o() {
        const t = "https://accounts.google.com/o/oauth2/v2/auth" + ("?client_id=" + dynamicConf.google.clientId) + ("&redirect_uri=" + this.getAttribute("redirect-url")) + "&response_type=code&access_type=offline&scope=profile%20email";
        this.shadowRoot.querySelector("a").setAttribute("href", t)
    }
    #e() {
        if ("object" == typeof dynamicConf)
            this.#o();
        else {
            const t = document.createElement("script");
            t.setAttribute("src", "/common/dynamicconf"),
            this.shadowRoot.appendChild(t),
            t.onloadDone || (t.onloadDone = !0,
            t.onload = () => {
                this.#o()
            }
            )
        }
    }
    #n(t) {
        return String(t).replace(/<script\b|\bonerror=|\bonload=|\bonmouseover=|\bonmouseout=|\bonpagehide=|\bonpageshow=|\bonmessage=|\bonhashchange=|\bonbeforeunload=|\bonpopstate=|\bonresize=|\bonunload=|\bonkeydown=|\bonkeyup=|\bonkeypress=|\bonfocus=|\bonblur=|\bonchange=|\bonsubmit=|\bonreset=|\bonselect=|\bondblclick=|\bondrag=|\bondragend=|\bondragenter=|\bondragleave=|\bondragover=|\bondragstart=|\bondrop=|\bonwheel=|\boncopy=|\boncut=|\bonpaste=|\bonanimationend=|\bonanimationiteration=|\bonanimationstart=|\bontransitionend=|\bontouchcancel=|\bontouchend=|\bontouchmove=|\bontouchstart=|\bonclick=/gi, "")
    }
}
class n extends HTMLElement {
    connectedCallback() {
        this.#i(),
        this.#t(),
        this.#r()
    }
    disconnectedCallback() {}
    #t() {
        const t = document.createElement("template");
        t.innerHTML = this.#n('<style>\n\t\t\t\t\t:host {\n\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t}\n\n\t\t\t\t\t:host([open]) {\n\t\t\t\t\t\tcontainer-type: inline-size;\n\t\t\t\t\t\tcontainer-name: cookieBanner;\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\tposition: fixed;\n\t\t\t\t\t\tbottom: 0;\n\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\tright: 0;\n\t\t\t\t\t\tz-index: 999;\n\t\t\t\t\t\t--COLOR_text: var(--COLOR_supportLight_100);\n\t\t\t\t\t\t--COLOR_background: var(--COLOR_primary_100);\n\t\t\t\t\t}\n\n\t\t\t\t\t:host([brand="elitepartner"]) .inner {\n\t\t\t\t\t\t@container cookieBanner (min-width: 768px) {\n\t\t\t\t\t\t\t--COLOR_text: var(--COLOR_supportDark_300);\n\t\t\t\t\t\t\t--COLOR_background: var(--COLOR_supportLight_100);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t:host([open]) .inner {\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\tfont-family: \'Open Sans\', Arial, Helvetica, sans-serif;\n\t\t\t\t\t\tline-height: 14px;\n\t\t\t\t\t\tfont-weight: normal;\n\t\t\t\t\t\talign-items: flex-start;\n\t\t\t\t\t\tpadding: 10px 110px 10px 20px;\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\tmax-height: 200px;\n\t\t\t\t\t\toverflow: auto;\n\t\t\t\t\t\t-webkit-overflow-scrolling: touch;\n\t\t\t\t\t\tfont-size: 11px;\n\t\t\t\t\t\tborder-top: 1px solid rgba(255,255,255, .2);\n\t\t\t\t\t\tbackground-color: var(--COLOR_background);\n\t\t\t\t\t\tcolor: var(--COLOR_text);\n\t\t\t\t\t}\n\n\t\t\t\t\t:host .inner span {\n\t\t\t\t\t\tpadding: 6px 0 4px 0;\n\t\t\t\t\t}\n\n\t\t\t\t\t:host .inner a {\n\t\t\t\t\t\tcolor: var(--COLOR_text);\n\t\t\t\t\t\ttext-decoration: underline;\n\t\t\t\t\t\t\n\t\t\t\t\t\t&:focus-visible {\n\t\t\t\t\t\t\toutline: 2px dashed currentColor;\n\t\t\t\t\t\t\toutline-offset: 2px;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t:host .inner button {\n\t\t\t\t\t\tposition: fixed;\n\t\t\t\t\t\tright: 0;\n\t\t\t\t\t\tmax-width: 80px;\n\t\t\t\t\t\tmargin: 10px 20px 0 0;\n\t\t\t\t\t\tpadding: 8px 12px;\n\t\t\t\t\t\tborder: 2px solid var(--COLOR_text);\n\t\t\t\t\t\tcolor: var(--COLOR_text);\n\t\t\t\t\t\tborder-radius: 4px; /* lokaler radius */\n\t\t\t\t\t\ttext-decoration: none;\n\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\tfont-weight: 600;\n\t\t\t\t\t\tfont-size: 13px;\n\t\t\t\t\t\tz-index: 1000;\n\t\t\t\t\t\tbackground: none;\n\t\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t\t\n\t\t\t\t\t\t&:focus-visible {\n\t\t\t\t\t\t\toutline: 2px dashed currentColor;\n\t\t\t\t\t\t\toutline-offset: 2px;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t</style>\n\t\t\t\t<div class="inner">\n\t\t\t\t\t<span data-target="bannertext"></span>\n\t\t\t\t\t<button></button>\n\t\t\t\t</div>\n\t\t\t');
        const e = document.importNode(t.content, !0);
        this.shadowRoot || (this.attachShadow({
            mode: "open"
        }),
        this.shadowRoot.appendChild(e))
    }
    #r() {
        null === getCookie("tms_infobanner") && (this.setAttribute("open", ""),
        this.shadowRoot.querySelector('[data-target="bannertext"]').innerHTML = this.#n(this.querySelector('[data-role="bannertext"]').innerHTML),
        this.shadowRoot.querySelector("button").innerText = this.querySelector('[data-role="buttontext"]').innerText,
        this.querySelector('[data-role="bannertext"]').remove(),
        this.querySelector('[data-role="buttontext"]').remove(),
        this.#a(),
        this.shadowRoot.querySelector("button").addEventListener("click", () => {
            this.#s(),
            this.#l(),
            this.remove()
        }
        , {
            once: !0
        }))
    }
    #i() {
        "true" === this.getAttribute("is-loggedin") && this.#s()
    }
    #s() {
        setCookie("tms_infobanner", "dismiss", "760")
    }
    #n(t) {
        return String(t).replace(/<script\b|\bonerror=|\bonload=|\bonmouseover=|\bonmouseout=|\bonpagehide=|\bonpageshow=|\bonmessage=|\bonhashchange=|\bonbeforeunload=|\bonpopstate=|\bonresize=|\bonunload=|\bonkeydown=|\bonkeyup=|\bonkeypress=|\bonfocus=|\bonblur=|\bonchange=|\bonsubmit=|\bonreset=|\bonselect=|\bondblclick=|\bondrag=|\bondragend=|\bondragenter=|\bondragleave=|\bondragover=|\bondragstart=|\bondrop=|\bonwheel=|\boncopy=|\boncut=|\bonpaste=|\bonanimationend=|\bonanimationiteration=|\bonanimationstart=|\bontransitionend=|\bontouchcancel=|\bontouchend=|\bontouchmove=|\bontouchstart=|\bonclick=/gi, "")
    }
    #a() {
        document.dispatchEvent(new CustomEvent("pegLogger-logWebAppEvents",{
            detail: {
                category: "tracking_choice",
                subcategory: "tracking_choice_dialog",
                targetId: "dialog",
                action: "show"
            }
        }))
    }
    #l() {
        document.dispatchEvent(new CustomEvent("pegLogger-logWebAppEvents",{
            detail: {
                category: "tracking_choice",
                subcategory: "tracking_choice_dialog",
                targetId: "ok_button",
                action: "click"
            }
        }))
    }
}
class o extends HTMLElement {
    connectedCallback() {
        const t = document.createElement("template")
          , e = this.innerHTML
          , n = `<style>\n\t\t\t\t\t:host {\n\t\t\t\t\t\t/*position: absolute;*/\n\t\t\t\t\t\tz-index: 999;\n\t\t\t\t\t}\n\t\n\t\t\t\t\tcode {\n\t\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\t\tbackground-color: lightcoral;\n\t\t\t\t\t\tpadding: 0;\n\t\t\t\t\t\tfont-size: 12px;\n\t\t\t\t\t\tfont-weight: normal;\n\t\t\t\t\t\tline-height: 18px;\n\t\t\t\t\t\toverflow: hidden;\n\t\t\t\t\t\tmax-width: 16px;\n\t\t\t\t\t\theight: 16px;\n\t\t\t\t\t\tborder-radius: var(--borderRadius_circle);\n\t\t\t\t\t\tcursor: copy;\n\t\t\t\t\t\tcolor: rgba(255, 255, 255, 0);\n\t\t\t\t\t}\n\t\t\t\t\t\t\n\t\t\t\t\tcode.is-open {\n\t\t\t\t\t\ttransition: max-width .5s ease-in-out, padding .5s ease-in, color ease-in .5s;\n\t\t\t\t\t\tpadding: 4px;\n\t\t\t\t\t\tmax-width: 700px;\n\t\t\t\t\t\theight: auto;\n\t\t\t\t\t\tcolor: rgba(255, 255, 255, 1);\n\t\t\t\t\t\tborder-radius: 6px; /* lokaler radius */\n\t\t\t\t\t\t/*cursor: zoom-out;*/\n\t\t\t\t\t}\n\t\t\t\t</style>\n\t\t\t\t<code class="is-open">${e}</code>\n\t\t\t`;
        t.innerHTML = this.sanitizeEvilHtml(n);
        const o = document.importNode(t.content, !0);
        this.shadowRoot || (this.attachShadow({
            mode: "open"
        }),
        this.shadowRoot.appendChild(o)),
        this.addEventListener("click", async t => {
            t.preventDefault(),
            t.stopPropagation(),
            t.stopImmediatePropagation();
            const n = e.replaceAll("{", "").replaceAll("}", "");
            await navigator.clipboard.writeText(n);
            const o = this.shadowRoot.querySelector("code")
              , i = o.style.backgroundColor;
            o.style.backgroundColor = "#4CAF50",
            setTimeout( () => {
                o.style.backgroundColor = i
            }
            , 300)
        }
        )
    }
    sanitizeEvilHtml(t) {
        return String(t).replace(/<script|onerror|onload|onmouseover|onmouseout|onpagehide|onpageshow|onmessage|onhashchange|onbeforeunload|onpopstate|onresize|onunload/g, "")
    }
    disconnectedCallback() {}
}
class i extends HTMLElement {
    async connectedCallback() {
        await jPar.util.waitForChildNodes()
    }
    disconnectedCallback() {}
}
class r extends HTMLElement {
    connectedCallback() {
        this.abortController = new AbortController,
        this.#d()
    }
    disconnectedCallback() {
        this.abortController.abort()
    }
    #d() {
        jPar.util.log.bigData({
            category: "adaptive_blocking",
            subcategory: "otp_verification_screen",
            action: "screen_view"
        })
    }
}
class a extends HTMLElement {
    async connectedCallback() {
        await new Promise(requestAnimationFrame),
        this.abortController = new AbortController,
        this.#c(),
        this.#h(),
        setTimeout( () => {
            this.querySelector("#termsAndConditionsReadInput").checked = !1,
            this.querySelector("#electronicDisclosureReadInput").checked = !1
        }
        , 100)
    }
    async disconnectedCallback() {
        await new Promise(requestAnimationFrame),
        this.abortController.abort()
    }
    #c() {
        this.querySelector(".startLivenessCheck").addEventListener("click", async t => {
            t.target.classList.contains("disabled") ? t.preventDefault() : (this.#p(),
            this.querySelector("wdk-hintbox-error.tokenError").hide(),
            await this.#u(),
            this.#g(),
            this.#b())
        }
        , {
            signal: this.abortController.signal
        }),
        this.querySelector("#termsAndConditionsRead").addEventListener("change", () => {
            this.#m()
        }
        , {
            signal: this.abortController.signal
        }),
        this.querySelector("#electronicDisclosureRead").addEventListener("change", () => {
            this.#m()
        }
        , {
            signal: this.abortController.signal
        })
    }
    async #v() {
        try {
            return (await fetchIt.get("/user/verification/liveness/token")).token
        } catch (t) {
            return jPar.util.log.error(t.toString(), "page_method.fetchTokenToGetTheToken.js fetchTokenToGetTheToken failed"),
            location.href = "/login",
            null
        }
    }
    #w() {
        let t;
        return t = jPar.wdk.brands.forBrands(["ps"]) ? "parship" : jPar.wdk.brands.forBrands(["eh"]) ? "eharmony" : "elitepartner",
        t
    }
    async #u() {
        try {
            const t = await this.#v();
            if (!t)
                throw new Error("Kein Subject-Token erhalten");
            const e = this.#w()
              , n = this.querySelector(".startLivenessCheck")
              , o = n.getAttribute("data-access-token-url")
              , i = n.getAttribute("data-gateway-url")
              , r = {
                locale: "en",
                hostAppName: e,
                hostAppVersion: "1.0.0",
                credentials: btoa(`${e}:secret`),
                authUrl: o,
                authToken: t,
                gatewayUrl: i
            }
              , a = `${e}:user:${this.getAttribute("user-id")}`
              , s = new TMGWebSDK(r);
            s.registerProfile(a, {}),
            s.getJWT( (t, e) => {
                if (t)
                    return this.#y(),
                    this.querySelector("wdk-hintbox-error.tokenError").show(),
                    void console.error(t);
                this.#k(e)
            }
            )
        } catch (t) {
            return this.#y(),
            this.querySelector("wdk-hintbox-error.tokenError").show(),
            jPar.util.log.error(t.toString(), "page_method.fetchAccessToken.js fetchAccessToken failed"),
            console.error(t),
            null
        }
    }
    #k(t) {
        const e = this.querySelector(".startLivenessCheck")
          , n = e.getAttribute("data-redirect-url")
          , o = e.getAttribute("data-liveness-check-url");
        location.href = o + `&access_token=${encodeURIComponent(t)}&redirect_url=${encodeURIComponent(n)}`
    }
    #y() {
        jPar.wdk.loadingIndicator.hide(this.querySelector(".startLivenessCheck")),
        this.querySelector("#termsAndConditionsReadInput").removeAttribute("disabled"),
        this.querySelector("#electronicDisclosureReadInput").removeAttribute("disabled")
    }
    #p() {
        jPar.wdk.loadingIndicator.show(this.querySelector(".startLivenessCheck")),
        this.querySelector("#termsAndConditionsReadInput").setAttribute("disabled", ""),
        this.querySelector("#electronicDisclosureReadInput").setAttribute("disabled", "")
    }
    async #g() {
        try {
            await fetchIt.post("/user/verification/liveness/triggerEmail", {})
        } catch (t) {
            return jPar.util.log.error(t.toString(), "page_method.triggerEmailSendout.js triggerEmail/status failed"),
            await jPar.util.awaitTimeout(5e3),
            "FAILED"
        }
    }
    #m() {
        const t = this.querySelector("#termsAndConditionsReadInput").checked
          , e = this.querySelector("#electronicDisclosureReadInput").checked
          , n = t && e;
        this.querySelector(".startLivenessCheck").classList.toggle("disabled", !n)
    }
    #h() {
        jPar.util.log.bigData({
            category: "adaptive_blocking",
            subcategory: "liveness_verification_initialization",
            action: "page_view"
        })
    }
    #b() {
        jPar.util.log.bigData({
            category: "adaptive_blocking",
            subcategory: "liveness_verification_initialization",
            action: "click",
            targetId: "click_button_verify"
        })
    }
}
class s extends HTMLElement {
    async connectedCallback() {
        await new Promise(requestAnimationFrame),
        this.abortController = new AbortController,
        this.startTime = Date.now(),
        this.countRetries = 0,
        this.#c(),
        this.#h(),
        this.#f()
    }
    async disconnectedCallback() {
        await new Promise(requestAnimationFrame),
        this.abortController.abort()
    }
    #c() {
        this.querySelector(".reloadPage").addEventListener("click", () => {
            this.#C(),
            location.href = "/user/verification/liveness"
        }
        , {
            signal: this.abortController.signal
        }),
        this.querySelector(".callCustomerSupport").addEventListener("click", () => {
            this.#x()
        }
        , {
            signal: this.abortController.signal
        })
    }
    #f() {
        this.#E().then(t => {
            if ("REDIRECT" === t)
                location.replace("/profile/welcomepage");
            else if ("REFRESHLIMITREACHED" === t)
                this.querySelector(".spinnerWrapper").remove(),
                this.querySelector(".refreshLimitReachedWrapper").classList.remove("noDisplay");
            else if ("FAILED" === t)
                throw new Error("Failed to get a valid response from the backend after several retries.")
        }
        ).catch(t => {
            jPar.util.log.error(t.toString(), "page_method.pollBackendStatus.js EventBridge/status failed")
        }
        )
    }
    async #E() {
        return this.countRetries++,
        fetchIt.get(`/user/verification/liveness/done/status?refreshCount=${this.countRetries}`).then(async t => t.refreshLimitReached ? "REFRESHLIMITREACHED" : t.blocked ? (await jPar.util.awaitTimeout(1e3 * parseInt(t.cooldownTimeInSeconds, 10)),
        this.#f()) : "REDIRECT").catch(async t => (jPar.util.log.error(t.toString(), "page_method.waitForEventBridgeResponse.js EventBridge/status failed"),
        await jPar.util.awaitTimeout(5e3),
        "FAILED"))
    }
    #S() {
        return Math.round((Date.now() - this.startTime) / 1e3)
    }
    #h() {
        jPar.util.log.bigData({
            category: "adaptive_blocking",
            subcategory: "liveness_verification_done",
            action: "page_view"
        })
    }
    #C() {
        jPar.util.log.bigData({
            category: "adaptive_blocking",
            subcategory: "liveness_verification_done",
            action: "click",
            targetId: "click_link_retry",
            cd2: this.#S(),
            cd3: this.countRetries
        })
    }
    #x() {
        jPar.util.log.bigData({
            category: "adaptive_blocking",
            subcategory: "livenessPageDone",
            action: "click",
            targetId: "click_button_support",
            cd2: this.#S(),
            cd3: this.countRetries
        })
    }
}
class l extends HTMLElement {
    async connectedCallback() {
        await new Promise(requestAnimationFrame),
        this.abortController = new AbortController,
        this.#c(),
        this.#h()
    }
    async disconnectedCallback() {
        await new Promise(requestAnimationFrame),
        this.abortController.abort()
    }
    #c() {
        this.querySelector("#uploadPicture").addEventListener("click", () => {
            this.#_()
        }
        , {
            signal: this.abortController.signal
        }),
        this.addEventListener("pegPhotoUploader:uploadSuccess", () => {
            window.location.replace("/lists/partnersuggestions")
        }
        , {
            signal: this.abortController.signal
        })
    }
    #_() {
        jPar.util.log.bigData({
            category: "adaptive_blocking",
            subcategory: "mandatory_photo_initialization_screen",
            action: "click",
            targetId: "click_button_upload"
        })
    }
    #h() {
        jPar.util.log.bigData({
            category: "adaptive_blocking",
            subcategory: "mandatory_photo_initialization_screen",
            action: "screen_view"
        })
    }
}
class d extends HTMLElement {
    connectedCallback() {
        this.abortController = new AbortController,
        this.startTime = Date.now(),
        this.inputElement = this.querySelector("#code"),
        this.#c()
    }
    disconnectedCallback() {
        this.abortController.abort()
    }
    #c() {
        this.querySelector("form").addEventListener("submit", t => {
            t.preventDefault()
        }
        ),
        this.inputElement.addEventListener("focus", () => {
            this.#L()
        }
        , {
            signal: this.abortController.signal
        }),
        this.inputElement.addEventListener("input", t => {
            this.#A(t),
            this.#R()
        }
        , {
            signal: this.abortController.signal
        }),
        this.inputElement.addEventListener("paste", t => {
            this.#A(t)
        }
        , {
            signal: this.abortController.signal
        }),
        this.inputElement.addEventListener("beforeinput", t => {
            "insertFromPaste" !== t.inputType && "insertFromPasteAsPlainText" !== t.inputType || this.#A(t)
        }
        , {
            signal: this.abortController.signal
        })
    }
    #L() {
        this.querySelectorAll(".wdk-styledHintBox[data-error]").forEach(t => {
            t.classList.remove("is-visible")
        }
        )
    }
    async #R() {
        if (this.#D() && this.#q()) {
            this.querySelector("form").classList.add("submitInProgress"),
            this.inputElement.setAttribute("readonly", !0);
            try {
                const t = {
                    _csrf: jPar.wdk.security.csrf.getToken(),
                    code: this.inputElement.value
                }
                  , e = await fetchIt.post("/user/verification/oneTimePassword", JSON.stringify(t));
                this.#T(),
                jPar.util.network.hasValidSessionAndCsrfToken(e) && (e.verified ? (this.#O(),
                location.replace("/profile/welcomepage")) : (this.#P(e.error),
                this.#I(e.error)))
            } catch (t) {
                jPar.util.network.defaultErrorHandling(t)
            }
        }
    }
    #P(t) {
        this.querySelector(`.wdk-styledHintBox[data-error="${t}"]`).classList.add("is-visible"),
        this.querySelector("form").classList.remove("submitInProgress"),
        this.inputElement.removeAttribute("readonly"),
        this.inputElement.value = "",
        this.inputElement.blur()
    }
    #q() {
        return !this.querySelector("form").classList.contains("submitInProgress")
    }
    #D() {
        const t = parseInt(this.inputElement.getAttribute("maxlength"), 10)
          , e = this.inputElement.value.length;
        return t > 0 && e === t
    }
    #A(t) {
        t.preventDefault(),
        this.inputElement.value = this.inputElement.value.replace(/\D/g, "")
    }
    #T() {
        const t = Math.round((Date.now() - this.startTime) / 1e3);
        jPar.util.log.bigData({
            category: "adaptive_blocking",
            subcategory: "otp_verification_screen",
            action: "submit",
            cd2: t
        })
    }
    #O() {
        jPar.util.log.bigData({
            category: "adaptive_blocking",
            subcategory: "otp_verification_screen",
            action: "success"
        })
    }
    #I(t) {
        jPar.util.log.bigData({
            category: "adaptive_blocking",
            subcategory: "otp_verification_screen",
            action: "authentication_invalid",
            targetId: t
        })
    }
}
class c extends HTMLElement {
    connectedCallback() {
        this.abortController = new AbortController,
        this.#c()
    }
    disconnectedCallback() {
        this.abortController.abort()
    }
    #c() {
        this.querySelector("#resendButton").addEventListener("click", () => {
            this.#H(),
            this.#M()
        }
        , {
            signal: this.abortController.signal
        }),
        this.querySelector("#openOscHelpPages").addEventListener("click", () => {
            this.#j()
        }
        , {
            signal: this.abortController.signal
        }),
        this.querySelector("#cancelButton").addEventListener("click", () => {
            this.#F()
        }
        , {
            signal: this.abortController.signal
        })
    }
    async #H() {
        try {
            const t = {
                _csrf: jPar.wdk.security.csrf.getToken(),
                userId: this.getAttribute("user-id")
            }
              , e = await fetchIt.post("/user/verification/oneTimePassword/resend", JSON.stringify(t));
            jPar.util.network.hasValidSessionAndCsrfToken(e) ? e.success ? (document.querySelector("wdk-dialog#resendSuccessModal").openModal(),
            this.#B()) : "VERIFICATION_NOT_NEEDED" === e.errorCode ? document.querySelector("wdk-dialog#resendVerificationNotNeededModal").openModal() : document.querySelector("wdk-dialog#resendBlockedModal").openModal() : jPar.wdk.modalbox.show({
                modalboxId: "errorModalbox500"
            })
        } catch (t) {
            jPar.util.network.defaultErrorHandling(t)
        }
    }
    #B() {
        jPar.util.log.bigData({
            category: "adaptive_blocking",
            subcategory: "otp_verification_screen",
            action: "code_sent"
        })
    }
    #M() {
        jPar.util.log.bigData({
            category: "adaptive_blocking",
            subcategory: "otp_verification_screen",
            action: "click",
            targetId: "button_resend_code"
        })
    }
    #j() {
        jPar.util.log.bigData({
            category: "adaptive_blocking",
            subcategory: "otp_verification_screen",
            action: "click",
            targetId: "button_visit_help_center"
        })
    }
    #F() {
        jPar.util.log.bigData({
            category: "adaptive_blocking",
            subcategory: "otp_verification_screen",
            action: "click",
            targetId: "button_cancel"
        })
    }
}
class h extends HTMLElement {
    connectedCallback() {
        this.sitekey = this.getAttribute("sitekey"),
        this.isInteractiveChallenge = !1,
        this.turnstileContainer = this.querySelector(".turnstile-container"),
        this.errorMessage = this.querySelector("#regTurnstileError"),
        this.#z()
    }
    #z() {
        const t = document.createElement("script");
        t.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",
        t.defer = !0,
        t.onload = () => this.#N(),
        this.append(t)
    }
    #N() {
        turnstile.render(this.turnstileContainer, {
            sitekey: this.sitekey,
            size: "flexible",
            retry: "never",
            appearance: "interaction-only",
            callback: () => this.#V(),
            "error-callback": t => this.#U(t),
            "before-interactive-callback": () => this.#W(),
            language: document.documentElement.lang.toLowerCase()
        })
    }
    #V() {
        jPar.wdk.forms.hideError(this.errorMessage)
    }
    #U(t) {
        jPar.util.log.bigData({
            category: "registration",
            subcategory: "registration_start_screen",
            action: "turnstile_error",
            targetId: "turnstile_error",
            cd1: t,
            cd2: this.sitekey
        })
    }
    #W() {
        this.setAttribute("is-interactive-challenge", ""),
        this.isInteractiveChallenge = !0
    }
    validate() {
        const t = void 0 !== turnstile?.getResponse(this.turnstileContainer);
        return !t && this.isInteractiveChallenge && jPar.wdk.forms.showError(this.errorMessage),
        t
    }
}
class p extends HTMLElement {
    async connectedCallback() {
        await new Promise(requestAnimationFrame),
        this.abortController = new AbortController,
        this.#$(),
        this.#X()
    }
    disconnectedCallback() {
        this.abortController.abort()
    }
    #$() {
        this.addEventListener("pegPhotoUploader:uploadFailed", () => {
            document.querySelector("#errorDialog500").openModal()
        }
        , {
            signal: this.abortController.signal
        }),
        this.addEventListener("pegPhotoUploader:maxPhotosReached", () => {
            this.querySelector("#errorMaxImageReached").openModal()
        }
        , {
            signal: this.abortController.signal
        }),
        this.querySelectorAll("#uploadButton button, #dragDropArea").forEach(t => {
            t.addEventListener("click", () => {
                this.hideAllUploadErrors(),
                this.querySelector("#uploadPictureField").click(),
                this.trackInitUploadButton()
            }
            , {
                signal: this.abortController.signal
            })
        }
        ),
        this.querySelector("#uploadPictureField").addEventListener("change", t => {
            this.#K(t.target.files[0])
        }
        , {
            signal: this.abortController.signal
        })
    }
    #X() {
        const t = this.querySelector("#dragDropArea");
        for (const t of ["dragenter", "dragover", "dragleave", "drop"])
            document.addEventListener(t, t => {
                t.preventDefault(),
                t.stopPropagation()
            }
            , {
                signal: this.abortController.signal
            });
        t.addEventListener("dragenter", () => {
            t.classList.add("dragOver")
        }
        , {
            signal: this.abortController.signal
        }),
        t.addEventListener("dragover", () => {
            t.classList.add("dragOver")
        }
        , {
            signal: this.abortController.signal
        }),
        t.addEventListener("dragleave", () => {
            t.classList.remove("dragOver")
        }
        , {
            signal: this.abortController.signal
        }),
        t.addEventListener("drop", t => {
            this.#K(t.dataTransfer.files[0])
        }
        , {
            signal: this.abortController.signal
        })
    }
    async #J(t) {
        await this.querySelector("#photoEditorDialog").openModal(),
        this.querySelector("peg-photo-editor").startCropper(t)
    }
    async #K(t) {
        try {
            if (this.hideAllUploadErrors(),
            !t || !1 === this.isValidFileType(t))
                return void this.showWrongFileTypeError();
            if (!1 === this.isValidFileSize(t))
                return void this.showFileSizeExceededError();
            if (!1 === await this.isValidImageDimensions(t))
                return void this.showImageToSmallError();
            const e = await this.readExif(t);
            this.creationDate = this.transformToIsoDate(e?.DateTimeOriginal || e?.DateTime),
            this.trackUploadProcessStarted(),
            await this.presentImage(t)
        } catch (t) {
            console.error(t.message),
            this.querySelector("#uploadPictureField").value = "",
            this.querySelector("#errorBox_wrongFiletype").classList.add("is-visible")
        }
    }
    transformToIsoDate(t) {
        if (!t)
            return (new Date).toJSON();
        const e = t.split(/\D/);
        return new Date(e[0],e[1] - 1,e[2],e[3],e[4],e[5]).toJSON()
    }
    showWrongFileTypeError() {
        this.querySelector("#errorBox_wrongFiletype").classList.add("is-visible"),
        this.querySelector("#uploadPictureField").value = "",
        this.trackValidationError("wrong_format")
    }
    showFileSizeExceededError() {
        this.querySelector("#errorBox_filesizeExceeded").classList.add("is-visible"),
        this.querySelector("#uploadPictureField").value = "",
        this.trackValidationError("file_too_big")
    }
    showImageToSmallError() {
        this.querySelector("#errorBox_imageToSmall").classList.add("is-visible"),
        this.querySelector("#uploadPictureField").value = "",
        this.trackValidationError("file_dimensions")
    }
    presentImage(t) {
        return new Promise( (e, n) => {
            const o = new FileReader;
            o.onload = async t => {
                await this.#J(t.target.result),
                this.querySelector("#uploadPictureField").value = null,
                e()
            }
            ,
            o.onerror = n,
            o.readAsDataURL(t)
        }
        )
    }
    isValidFileType(t) {
        return new RegExp("gif|jpg|jpeg|png").test(t.type)
    }
    isValidFileSize(t) {
        return t.size <= 10485760
    }
    isValidImageDimensions(t) {
        return new Promise( (e, n) => {
            const o = new FileReader;
            o.onload = t => {
                const o = new Image;
                o.onload = () => {
                    const t = o.width >= 500 && o.height >= 500;
                    e(t)
                }
                ,
                o.onerror = n,
                o.src = t.target.result
            }
            ,
            o.onerror = n,
            o.readAsDataURL(t)
        }
        )
    }
    hideAllUploadErrors() {
        this.querySelectorAll("#errorBox_wrongFiletype, #errorBox_filesizeExceeded, #errorBox_imageToSmall").forEach(t => {
            t.classList.remove("is-visible")
        }
        ),
        this.querySelector("#dragDropArea").classList.remove("dragOver")
    }
    trackUploadProcessStarted() {
        jPar.util.log.bigData({
            category: "photo_upload",
            subcategory: this.getAttribute("tracking-subcategory"),
            targetId: "button_upload",
            action: "upload_started"
        })
    }
    trackValidationError(t) {
        jPar.util.log.bigData({
            category: "photo_upload",
            subcategory: this.getAttribute("tracking-subcategory"),
            targetId: t,
            action: "error"
        })
    }
    trackInitUploadButton() {
        jPar.util.log.bigData({
            category: "photo_upload",
            subcategory: this.getAttribute("tracking-subcategory"),
            action: "click",
            targetId: this.getAttribute("tracking-target-id")
        })
    }
    async readExif(t) {
        try {
            const e = await t.arrayBuffer();
            return EXIF.readFromBinaryFile(e)
        } catch (t) {
            console.error(t)
        }
    }
}
class u extends HTMLElement {
    connectedCallback() {}
    async startPhotoUpload(t, e) {
        try {
            this.#G(),
            await this.#Y(t, e),
            this.#Z(),
            this.#Q(),
            this.#tt()
        } catch (t) {
            "max_photos_reached" === t.type ? this.dispatchEvent(new CustomEvent("pegPhotoUploader:maxPhotosReached",{
                detail: t.error,
                bubbles: !0
            })) : this.dispatchEvent(new CustomEvent("pegPhotoUploader:uploadFailed",{
                detail: t.error,
                bubbles: !0
            }))
        }
    }
    #Z() {
        this.dispatchEvent(new CustomEvent("pegPhotoUploader:uploadSuccess",{
            bubbles: !0
        }))
    }
    #G() {
        this.removeAttribute("hidden")
    }
    #tt() {
        this.setAttribute("hidden", "")
    }
    #Q() {
        jPar.util.log.bigData({
            category: "photo_upload",
            subcategory: this.getAttribute("tracking-subcategory"),
            targetId: "button_save",
            action: "click"
        })
    }
    handleUploadMyProfile() {}
    async #Y(t, e) {
        const n = this.querySelector("#uploadProgressBar")
          , o = jPar.wdk.security.csrf.getToken()
          , i = this.closest("peg-photo-selector")?.creationDate || ""
          , r = new FormData;
        return r.append("file", t, "image.jpeg"),
        r.append("caption", e),
        r.append("creationDate", i),
        new Promise( (t, e) => {
            const i = new XMLHttpRequest;
            i.upload.addEventListener("progress", t => {
                const {lengthComputable: e, loaded: o, total: i} = t;
                e && (n.value = o / i * 100)
            }
            ),
            i.addEventListener("loadend", () => {
                if (i.readyState === XMLHttpRequest.DONE) {
                    if (200 === i.status)
                        return void t();
                    n.value = 0,
                    this.#tt(),
                    i.responseText?.includes("Maximum number of photos reached") ? e({
                        error: new Error("Maximum number of photos reached"),
                        type: "max_photos_reached"
                    }) : e({
                        error: new Error(`server error:${i.status}`),
                        type: "500"
                    })
                }
            }
            ),
            i.open("POST", "/photos", !0),
            i.setRequestHeader("x-csrf-token", o),
            i.send(r)
        }
        )
    }
}
class g extends HTMLElement {
    constructor() {
        super(),
        this.cropper = null,
        this.abortController = null
    }
    connectedCallback() {
        this.abortController = new AbortController
    }
    disconnectedCallback() {
        this.destroyCropper(),
        this.abortController.abort()
    }
    startCropper(t) {
        this.initCropperPlugin(t);
        const e = this.abortController.signal;
        document.body.addEventListener("keydown", t => this.onArrowKeys(t.code), {
            signal: e
        }),
        this.querySelector("#rotateLeft").addEventListener("click", () => this.cropper.rotate(-90), {
            signal: e
        }),
        this.querySelector("#rotateRight").addEventListener("click", () => this.cropper.rotate(90), {
            signal: e
        }),
        this.querySelector("#zoomPlus").addEventListener("click", () => this.cropper.zoom(.1), {
            signal: e
        }),
        this.querySelector("#zoomMinus").addEventListener("click", () => this.cropper.zoom(-.1), {
            signal: e
        })
    }
    destroyCropper() {
        this.cropper?.destroy(),
        this.querySelector("#imageContainer img")?.remove()
    }
    initCropperPlugin(t) {
        const e = Object.assign(document.createElement("img"), {
            src: "",
            alt: ""
        });
        this.querySelector("#imageContainer").appendChild(e),
        e.onload = () => {
            this.cropper = new Cropper(e,{
                aspectRatio: 2 / 3,
                minCropBoxHeight: 280,
                minContainerHeight: 380,
                viewMode: 1,
                checkCrossOrigin: !1,
                dragMode: "move",
                cropBoxMovable: !1,
                cropBoxResizable: !1
            })
        }
        ,
        e.src = t
    }
    onArrowKeys(t) {
        switch (t) {
        case "ArrowLeft":
            event.preventDefault(),
            this.cropper.move(1, 0);
            break;
        case "ArrowUp":
            event.preventDefault(),
            this.cropper.move(0, 1);
            break;
        case "ArrowRight":
            event.preventDefault(),
            this.cropper.move(-1, 0);
            break;
        case "ArrowDown":
            event.preventDefault(),
            this.cropper.move(0, -1)
        }
    }
    save(t="") {
        this.cropper.getCroppedCanvas({
            imageSmoothingEnabled: !1,
            maxHeight: 2880
        });
        this.cropper.getCroppedCanvas({
            imageSmoothingEnabled: !1,
            maxHeight: 2880
        }).toBlob(e => {
            this.closest("peg-photo-selector").querySelector("peg-photo-uploader").startPhotoUpload(e, t),
            this.closest("wdk-dialog").closeModal()
        }
        , "image/jpeg")
    }
}
class b extends HTMLElement {
    connectedCallback() {
        this.abortController = new AbortController,
        this.#c()
    }
    disconnectedCallback() {
        this.abortController.abort()
    }
    #c() {
        const t = this.hasAttribute("enable-photo-description")
          , e = this.querySelector("[data-tab='photo-description']")
          , n = this.querySelector("[data-tab='photo-editor']");
        this.querySelector(".save").addEventListener("click", () => {
            const e = t ? this.querySelector("#pictureSubtext")?.value : "";
            this.querySelector("peg-photo-editor").save(e)
        }
        , {
            signal: this.abortController?.signal
        }),
        t && (this.querySelector("button.continue").addEventListener("click", () => {
            n.setAttribute("inert", ""),
            e.removeAttribute("inert")
        }
        , {
            signal: this.abortController?.signal
        }),
        this.querySelector("button.back").addEventListener("click", () => {
            e.setAttribute("inert", ""),
            n.removeAttribute("inert")
        }
        , {
            signal: this.abortController?.signal
        })),
        this.querySelectorAll(".js-closeDialog").forEach(t => {
            t.addEventListener("click", () => {
                this.#et()
            }
            , {
                signal: this.abortController?.signal
            })
        }
        )
    }
    #et() {
        jPar.util.log.bigData({
            category: "photo_upload",
            subcategory: this.getAttribute("tracking-subcategory"),
            targetId: "button_cancel",
            action: "click"
        })
    }
}
class m extends HTMLElement {
    static get observedAttributes() {
        return ["show"]
    }
    async connectedCallback() {
        this.currentComponent = this,
        this.setAttribute("inert", "true");
        const t = `<style>\n\t\t\t\t\t:host {\n\t\t\t\t\t\t--maxHeight: 300px;\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\tflex-shrink: 0;\n\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\tcolor: var(--COLOR_supportLight_100);\n\t\t\t\t\t\tborder-radius: var(--borderRadius_75);\n\t\t\t\t\t\theight: auto;\n\t\t\t\t\t\ttext-align: left;\n\t\t\t\t\t\tmax-height: var(--maxHeight);\n\t\t\t\t\t\topacity: 1;\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t/* *** skin error *** */\n\t\t\t\t\t:host([skin="error"]) {\n\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t\tmargin-top: 8px;\n\t\t\t\t\t\tfont: var(--FONT_default_75);\n\t\t\t\t\t\tbackground-color: var(--COLOR_alertError_200);\n\t\t\t\t\t\tcolor: var(--COLOR_alertError_100);\n\t\t\t\t\t\toverflow: hidden;\n\t\t\t\t\t\tpadding: 8px;\n\t\t\t\t\t\topacity: 0;\n\t\t\t\t\t\ttransition: opacity .2s linear, display .3s ease allow-discrete;\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t:host([skin="error"]) a {\n\t\t\t\t\t\tcolor: var(--COLOR_alertError_100);\n\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t:host([skin="error"][show]) {\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\topacity: 1;\n\t\t\t\t\t\t\n\t\t\t\t\t\t@starting-style {\n\t\t\t\t\t\t\topacity: 0;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t/* *** inFormElement on-brand *** */\n\t\t\t\t\t:host([skin="inFormElement"][on-brand]) {\n\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t\topacity: 0;\n\t\t\t\t\t\tpadding: 4px 8px;\n\t\t\t\t\t    gap: 4px;\n\t\t\t\t\t\toverflow: hidden;\n\t\t\t\t\t\tfont: var(--FONT_default_50);\n\t\t\t\t\t\tbackground-color: var(--COLOR_supportDark_070);\n\t\t\t\t\t\ttransition: max-height .3s linear, opacity .3s linear, display .3s ease allow-discrete;\n\t\t\t\t\t}\n\n\t\t\t\t\t:host([skin="inFormElement"][on-brand][show]) {\n\t\t\t\t\t\topacity: 1;\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t    \n\t\t\t\t\t\t@starting-style {\n\t\t\t\t\t\t\topacity: 0;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t:host([skin="inFormElement"][on-brand]) ::slotted([slot="icon"].wdk-icon) {\n\t\t\t\t\t\twidth: 14px !important;\n\t\t\t\t\t\theight: 14px !important;\n\t\t\t\t\t\tfill: var(--COLOR_supportLight_100) !important;\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t/* *** inFormElement NOT on-brand *** */\n\t\t\t\t\t:host([skin="inFormElement"]:not([on-brand])) {\n\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t\topacity: 0;\n\t\t\t\t\t\toverflow: hidden;\n\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\tpadding: 8px;\n\t\t\t\t\t\tfont: var(--FONT_default_75);\n\t\t\t\t\t\tcolor: var(--COLOR_alertError_100);\n\t\t\t\t\t\ttransition: opacity .3s linear, display .3s ease allow-discrete;\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t:host([skin="inFormElement"][show]:not([on-brand])) {\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\topacity: 1;\n\t\t\t\t\t\t\n\t\t\t\t\t\t@starting-style {\n\t\t\t\t\t\t\topacity: 0;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t:host([skin="inFormElement"]:not([on-brand])) a {\n\t\t\t\t\t\tcolor: var(--COLOR_alertError_100);\n\t\t\t\t\t}\n\n\t\t\t\t\t/* *** General *** */\n\t\t\t\t\t:host([skin="inFormElement"]:not([on-brand])) ::slotted([slot="icon"].wdk-icon),\n\t\t\t\t\t:host([skin="error"]) ::slotted([slot="icon"].wdk-icon) {\n\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\tleft: 8px;\n\t\t\t\t\t\ttop: 50%;\n\t\t\t\t\t\tmargin-top: -16px;\n\t\t\t\t\t\tpadding-right: 8px;\n\t\t\t\t\t\twidth: 32px !important;\n\t\t\t\t\t\theight: 32px !important;\n\t\t\t\t\t\tfill: var(--COLOR_alertError_100) !important;\n\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t:host([skin="inFormElement"]:not([on-brand])) slot,\n\t\t\t\t\t:host([skin="error"]) slot {\n\t\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\t\tpadding-left: 39px;\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t:host([skin="inFormElement"]:not([on-brand])) slot.is-empty,\n\t\t\t\t\t:host([skin="error"]) slot.is-empty {\n\t\t\t\t\t\tpadding-left: 0;\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t:host .visuallyHidden {\n\t\t\t\t\t\tposition: absolute !important;\n\t\t\t\t\t\tleft: -10000px;\n\t\t\t\t\t\ttop: auto;\n\t\t\t\t\t\twidth: 1px;\n\t\t\t\t\t\theight: 1px;\n\t\t\t\t\t\toverflow: hidden;\n\t\t\t\t\t\tclip: rect(0 0 0 0);\n\t\t\t\t\t\tclip-path: inset(50%);\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t:host button {\n\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\tborder: none;\n\t\t\t\t\t\tbackground: transparent;\n\t\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t\talign-self: flex-start;\n    \t\t\t\t\tmargin: 0;\n    \t\t\t\t\tpadding: 0;\n    \t\t\t\t\twidth: 18px;\n    \t\t\t\t\theight: 18px;\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t:host button:focus-visible {\n\t\t\t\t\t\toutline: 2px dashed currentColor;\n\t\t\t\t\t\toutline-offset: 10px;\n\t\t\t\t\t}\n\n\t\t\t\t\t:host button:after {\n\t\t\t\t\t\tcontent: "";\n    \t\t\t\t\tposition: absolute;\n    \t\t\t\t\ttop: 50%;\n    \t\t\t\t\tleft: 50%;\n    \t\t\t\t\ttransform: translate(-50%, -50%);\n    \t\t\t\t\theight: 48px;\n    \t\t\t\t\twidth: 48px;\n\t\t\t\t\t}\n\n\t\t\t\t\t:host button:hover {\n\t\t\t\t\t\topacity: .7;\n\t\t\t\t\t}\n\n\t\t\t\t\t:host button svg {\n\t\t\t\t\t\twidth: 16px;\n\t\t\t\t\t\theight: 16px;\n\t\t\t\t\t\tfill: var(--COLOR_supportDark_200);\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t#a11yWrapper {\n\t\t\t\t\t\tflex-grow: 1;\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t.wdkA11yRepeat {\n\t\t\t\t\t\tposition:absolute;\n\t\t\t\t\t\tleft:-9999px;\n\t\t\t\t\t\twidth: 1px;\n\t\t\t\t\t\theight: 1px;\n\t\t\t\t\t}\n\t\t\t\t</style>\n\t\t\t\t<slot name="icon"></slot>\n\t\t\t\t<div id="a11yWrapper" aria-live="polite" aria-atomic="true"></div>\n\t\t\t\t${this.#nt()}\n\t\t\t`
          , e = document.createElement("template");
        e.innerHTML = jPar.wdk.security.sanitizeEvilHtml(t);
        const n = document.importNode(e.content, !0);
        this.shadowRoot || (this.attachShadow({
            mode: "open"
        }),
        this.shadowRoot.appendChild(n)),
        this.fillA11yWrapper(),
        this.handleEmptyIcon(),
        this.shadowRoot.querySelector(".js-close")?.addEventListener("click", () => {
            this.hide()
        }
        )
    }
    attributeChangedCallback(t) {
        "show" === t && this.fillA11yWrapper()
    }
    #nt() {
        return null !== this.getAttribute("closable") ? '<button part="base" class="js-close" type="button" role="button" aria-disabled="false" aria-label="Close" tabindex="0">\n        \t\t\t<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">\n\t\t\t\t\t\t<path id="icon_x-a" fill-rule="evenodd" clip-rule="evenodd" d="M19.7044 18.2864C19.8936 18.4741 20 18.7295 20 18.996C20 19.2624 19.8936 19.5179 19.7044 19.7055C19.5168 19.8947 19.2614 20.0011 18.9949 20.0011C18.7285 20.0011 18.4731 19.8947 18.2854 19.7055L12 13.4194L5.71456 19.7055C5.52692 19.8947 5.27151 20.0011 5.00507 20.0011C4.73863 20.0011 4.48321 19.8947 4.29558 19.7055C4.10641 19.5179 4 19.2624 4 18.996C4 18.7295 4.10641 18.4741 4.29558 18.2864L10.581 12.0003L4.29558 5.71418C3.90375 5.3223 3.90375 4.68693 4.29558 4.29505C4.68742 3.90317 5.32272 3.90317 5.71456 4.29505L12 10.5812L18.2854 4.29505C18.6773 3.90317 19.3126 3.90317 19.7044 4.29505C20.0963 4.68693 20.0963 5.3223 19.7044 5.71418L13.419 12.0003L19.7044 18.2864Z"/>\n\t\t\t\t\t</svg>\n      \t\t\t</button>\n\t\t\t\t' : ""
    }
    fillA11yWrapper() {
        const t = document.importNode(this.querySelector("template").content, !0);
        null !== this.shadowRoot && (this.shadowRoot.querySelector("#a11yWrapper").innerHTML = "",
        this.shadowRoot.querySelector("#a11yWrapper").appendChild(t),
        this.handleReloadLink(),
        this.triggerA11yRepeat(),
        this.handleShow())
    }
    handleEmptyIcon() {
        0 === this.shadowRoot.querySelector("slot").assignedElements().length ? this.shadowRoot.querySelector("slot").classList.add("is-empty") : this.shadowRoot.querySelector("slot").classList.remove("is-empty")
    }
    show(t=!1) {
        this.setAttribute("show", "true"),
        t && window.setTimeout( () => {
            this.scrollIntoView({
                behavior: "smooth",
                block: "end"
            })
        }
        , 300)
    }
    handleShow() {
        this.hasAttribute("show") && (this.removeAttribute("inert"),
        this.dispatchEvent(new CustomEvent("wdk-hintbox-error",{
            bubbles: !0,
            detail: {
                state: "shown",
                element: this
            }
        })))
    }
    hide() {
        this.removeAttribute("show"),
        this.setAttribute("inert", "true"),
        this.dispatchEvent(new CustomEvent("wdk-hintbox-error",{
            bubbles: !0,
            detail: {
                state: "hidden",
                element: this
            }
        }))
    }
    isVisible() {
        return "true" === this.getAttribute("show")
    }
    triggerA11yRepeat() {
        window.setTimeout( () => {
            this.shadowRoot.querySelector(".wdkA11yRepeat")?.remove();
            const t = document.createElement("div");
            t.classList.add("wdkA11yRepeat"),
            t.innerText = "!",
            this.shadowRoot.querySelector("#a11yWrapper").appendChild(t)
        }
        , 200)
    }
    handleReloadLink() {
        this.shadowRoot.querySelectorAll(".js-reloadPage").forEach(t => {
            t.addEventListener("click", t => {
                t.preventDefault(),
                document.location.reload()
            }
            )
        }
        )
    }
}
class v extends HTMLElement {
    static get observedAttributes() {
        return ["disabled"]
    }
    attributeChangedCallback(t) {
        this.#ot(t)
    }
    connectedCallback() {
        this.abortController = new AbortController,
        this.#it(),
        this.inputElement = this.querySelector(".inputWrapper input"),
        this.#ot(),
        this.#rt()
    }
    disconnectedCallback() {
        this.abortController?.abort()
    }
    #ot(t) {
        void 0 !== this.inputElement && ("disabled" === t || this.hasAttribute("disabled")) && (this.inputElement.disabled = this.hasAttribute("disabled"))
    }
    #it() {
        const t = document.createElement("template")
          , e = null !== this.getAttribute("switch");
        t.innerHTML = `\n\t\t\t<div class="designWrapper">\n\t\t\t\t<div class="inputWrapper ${this.#n(e ? "switch" : "")}">\n\t\t\t\t\t<input type="checkbox" />\n\t\t\t\t\t${this.#n(e ? '<div class="switchSlider"><div class="switchBg"></div><div class="switchKnob"></div></div>' : "")}\n\t\t\t\t</div>\n\t\t\t\t<div class="labelWrapper">\n\t\t\t\t\t<label for="${this.#n(this.#at())}Input"></label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="errors"></div>\n  \t\t`;
        const n = this.querySelector("template");
        if (n) {
            this.appendChild(t.content);
            const e = document.importNode(n.content, !0);
            this.#st(e),
            this.#lt(e),
            this.#dt(e),
            n.remove()
        }
    }
    #rt() {
        this.inputElement.addEventListener("input", () => {
            this.inputElement.checkValidity() && this.hideErrors()
        }
        ),
        this.inputElement.addEventListener("blur", () => {
            this.inputElement.checkValidity() && this.hideErrors()
        }
        ),
        this.inputElement.addEventListener("invalid", () => {
            this.hideErrors(),
            this.#ct()
        }
        )
    }
    #ct() {
        const t = [{
            type: "valueMissing",
            condition: this.inputElement.validity.valueMissing
        }, {
            type: "rangeOverflow",
            condition: this.inputElement.validity.rangeOverflow
        }, {
            type: "generic",
            condition: !0
        }];
        for (const e of t) {
            const t = this.querySelector(`wdk-hintbox-error[frontend-error="${e.type}"]`);
            if (e.condition && t) {
                t.show();
                break
            }
        }
    }
    showBackendError(t) {
        const e = this.querySelector(`wdk-hintbox-error[backend-error="${t}"]`);
        null !== e && (this.hideErrors(),
        e.show())
    }
    hideErrors() {
        this.querySelectorAll(".errors wdk-hintbox-error").forEach(t => {
            t.hide()
        }
        )
    }
    getValue() {
        return this.inputElement.value
    }
    #at() {
        if (this.getAttribute("id"))
            return this.getAttribute("id");
        console.error("No id specified!")
    }
    #st(t) {
        const e = t.querySelector('div[data-slot="label"]');
        this.querySelector(".labelWrapper label").innerHTML = this.#n(e.innerHTML),
        null !== this.getAttribute("invisible-label") && this.querySelector(".labelWrapper").classList.add("visuallyHidden")
    }
    #lt(t) {
        const e = t.querySelector('div[data-slot="input"]');
        e ? (this.querySelector(".inputWrapper input").outerHTML = this.#n(e.innerHTML),
        this.querySelector(".inputWrapper input").id = this.#at() + "Input") : (this.querySelector(".inputWrapper input").remove(),
        console.error("No input element specified!"))
    }
    #dt(t) {
        const e = t.querySelector('div[data-slot="errors"]');
        e ? this.querySelector(".errors").innerHTML = this.#n(e.innerHTML) : this.querySelector(".errors").remove()
    }
    #n(t) {
        return String(t).replace(/<script\b|\bonerror=|\bonload=|\bonmouseover=|\bonmouseout=|\bonpagehide=|\bonpageshow=|\bonmessage=|\bonhashchange=|\bonbeforeunload=|\bonpopstate=|\bonresize=|\bonunload=|\bonkeydown=|\bonkeyup=|\bonkeypress=|\bonfocus=|\bonblur=|\bonchange=|\bonsubmit=|\bonreset=|\bonselect=|\bondblclick=|\bondrag=|\bondragend=|\bondragenter=|\bondragleave=|\bondragover=|\bondragstart=|\bondrop=|\bonwheel=|\boncopy=|\boncut=|\bonpaste=|\bonanimationend=|\bonanimationiteration=|\bonanimationstart=|\bontransitionend=|\bontouchcancel=|\bontouchend=|\bontouchmove=|\bontouchstart=|\bonclick=/gi, "")
    }
}
class w extends HTMLElement {
    async connectedCallback() {
        this.#ht(),
        this.#pt()
    }
    #ht() {
        const t = document.createElement("template");
        t.innerHTML = `\n\t\t\t${this.#n('\n<style>\n\t/*\n\tAttantion! if you add some new params for styling purpose, \n\tthe funtion passAttributesToDialogBody needs to be updated in wdk-dialog.js\n\t*/\n\n\t:host {\n\t\tdisplay: block;\n\t\tmax-width: 600px;\n\t\t--inline-padding: 12px;\n\t\t/*line-height: 24px; EP: 27px */ /* Workaround for CSS line-height calculation: Will calculate scroll height wrong of the article, because our line height is lower than the renderbox of the Text. Nicht globalgmeacht, weil wir dann überall 2px mehr line-hieght haben. Nur lokal implementieren, wenn notwendig https://stackoverflow.com/questions/16443642/scroll-bars-showing-up-when-not-expecting-them-line-height-and-overflow-y-issue */\n\t}\n\t\n\t/*Fix for Chrome only (July 2024): When content is not wide enough the width of the \n\tDialog is to small and jumps second later to the right width.*/\n\t@media only screen and (min-width: 360px) {\n\t\t:host {\n\t\t\tmin-width: 360px;\n\t\t}\n\t\t\n\t\t:host([mobile-center]) {\n\t\t\tmin-width: calc(360px - 16px);\n\t\t}\n\t}\n\t\n\t@media only screen and (min-width: 375px) {\n\t\t:host {\n\t\t\tmin-width: 375px;\n\t\t}\n\t\t\n\t\t:host([mobile-center]) {\n\t\t\tmin-width: calc(375px - 16px);\n\t\t}\n\t}\n\t\n\t@media only screen and (min-width: 390px) {\n\t\t:host {\n\t\t\tmin-width: 390px;\n\t\t}\n\t\t\n\t\t:host([mobile-center]) {\n\t\t\tmin-width: calc(390px - 16px);\n\t\t}\n\t}\n\t\n\t@media only screen and (min-width: 425px) {\n\t\t:host {\n\t\t\tmin-width: 425px;\n\t\t}\n\t\t\n\t\t:host([mobile-center]) {\n\t\t\tmin-width: calc(425px - 16px);\n\t\t}\n\t}\n\t\n\t@media only screen and (min-width: 601px) {\n\t\t:host {\n\t\t\t--inline-padding: 24px;\n\t\t\twidth: var(--wdk-dialog-width-desktop);\n\t\t\tmin-width: auto !important;\n\t\t\tmax-width: none;\n\t\t}\n\t}\n\t\n\t.dialogContent {\n\t\tdisplay: flex;\n\t\tflex-flow: column;\n\t\tmax-height: 80dvh; /* Default height */\n\t\twidth: 100%;\n\t\tborder-top-left-radius: var(--borderRadius_100);\n\t\tborder-top-right-radius: var(--borderRadius_100);\n\t\tbackground-color: var(--wdk-dialog-body-default-bg-color, var(--COLOR_supportLight_100));\n\t}\n\t\n\t.dialogContent:not(:has(header)) { /* if no closingX oder X is outside we don\'t have to reserve some space in dialogContent */\t\n\t\tpadding-top: 16px;\n\t\tmax-height: calc(80dvh - 16px); \n\t}\n\t\n\t:host([closing-x="inside"]) .dialogContent:not(:has(header)) { /* Reserve Space so that content does not run into ClosingX */\n\t\tpadding-top: 48px;\n\t\tmax-height: calc(80dvh - 48px);  \n\t}\n\t\n\t@media only screen and (max-width: 600px) { /* SM */\n\t\t:host([mobile-full-height]) .dialogContent {\n\t\t\theight: 100dvh; /* Default height when header is present */\n\t\t\tmax-height: 100dvh;\n\t\t\tborder-top-left-radius: 0;\n\t\t\tborder-top-right-radius: 0;\n\t\t}\n\t\t\n\t\t:host([mobile-full-height]) .dialogContent:not(:has(header)) { /* Full height without closingX, but no header */\n\t\t\theight: calc(100dvh - 16px); \n\t\t\tmax-height: calc(100dvh - 16px);\n\t\t}\n\t\t\n\t\t:host([closing-x="inside"][mobile-full-height]) .dialogContent:not(:has(header)) {\n\t\t\theight: calc(100dvh - 48px); \n\t\t\tmax-height: calc(100dvh - 48px);\n\t\t}\n\t}\n\n\t:host([mobile-center]) .dialogContent { /* If mobile-center we want to have the rounded border also for SM */\n\t\tborder-bottom-left-radius: var(--borderRadius_100);\n\t\tborder-bottom-right-radius: var(--borderRadius_100);\n\t}\n\t\n\t@media only screen and (min-width: 601px) { /* Rounded border in every case if we are in XL */\n\t\t.dialogContent {\n\t\t\tborder-bottom-left-radius: var(--borderRadius_100);\n\t\t\tborder-bottom-right-radius: var(--borderRadius_100);\t\t\t\n\t\t}\n\t}\n\t\t\n\t/*:host([mobile-full-height]) .dialogContent {\n\t\tbackground-color: var(--COLOR_supportLight_100);\n\t}*/\n\t\n\t.dialogContent > header {\n\t\twidth: 100%;\n\t}\n\t\n\t.dialogContent > header h2 {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tmin-height: 60px;\n\t\tmargin: 0;\n\t\tpadding: 18px var(--inline-padding) var(--inline-padding) var(--inline-padding);\n\t\tfont: var(--FONT_default_200);\n\t\tcolor: var(--COLOR_defaultText);\n\t}\n\t\n\t:host([closing-x="inside"]) .dialogContent > header h2 {\n\t\tpadding: 18px 68px var(--inline-padding) var(--inline-padding);\n\t}\n\t\n\t.dialogContent > article {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tpadding: 0 var(--inline-padding) var(--inline-padding) var(--inline-padding);\n\t\toverflow-y: auto;\n\t\tflex-grow: 1;\n\t}\n\t\n\t.dialogContent:has(footer) > article {\n\t\tpadding-bottom: 0;\n\t}\n\t\n\t.dialogContent > article::-webkit-scrollbar {\n\t\twidth: 12px;\n\t\theight: 12px;\n\t}\n\t\n\t.dialogContent > article::-webkit-scrollbar-track {\n\t\tbackground: transparent;\n\t\tborder-radius: var(--borderRadius_rounded);\n\t}\n\t\n\t.dialogContent > article::-webkit-scrollbar-thumb {\n\t\tbackground: var(--COLOR_supportDark_500);\n\t\tborder: 3px solid transparent;\n\t\tborder-radius: var(--borderRadius_rounded);\n\t\tbackground-clip: content-box;\n\t}\n\t\n\t.dialogContent > article::-webkit-scrollbar-thumb:hover {\n\t\tbackground: var(--COLOR_supportDark_400);\n\t\tbackground-clip: content-box;\n\t}\n\t\n\t/* .dialogContent > article ::slotted(form) {\n\t\t!*not sure if we should style the form here or if this should be styled outside the component*!\n\t\t  display: flex;\n\t\tflex-direction: column;\n\t\theight: 100%;\n\t}*/\n\t\n\t.dialogContent > footer {\n\t\tpadding: 16px 24px;\n\t}\n\t\n\t@media only screen and (min-width: 375px) {\n\t\t.dialogContent > footer {\n\t\t\tpadding: 24px;\n\t\t}\n\t}\n\n\t@media only screen and (min-width: 601px) {\n\t\t.dialogContent > footer {\n\t\t\tpadding: 32px 24px;\n\t\t}\n\t}\n\t\n\t.dialogContent > footer ul {\n\t\twidth: 100%;\n\t\tdisplay: flex;\n\t\tflex-flow: wrap;\n\t\tgap: 20px;\n\t\tjustify-content: space-between;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n\t\n\t.dialogContent > footer ul li {\n\t\tflex-basis: calc(40% - 20px);\n\t\tflex-grow: 1;\n\t\tlist-style: none;\n\t\ttext-align: center;\n\t\tvertical-align: top;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n\t\n\t/* Full width for Buttons if shown in 2 lines */\n\t.dialogContent > footer:has(li:nth-child(2)) ::slotted([slot^=\'button_\']) {\n\t\twidth: 100%;\n\t}\n\t\n\t/* Buttons always one below another */\n\t\n\t:host([buttons-vertical]) .dialogContent > footer ul {\n\t\tdisplay: grid;\n\t\tgrid-template-rows: auto;\n\t\tjustify-content: center;\n\t\tgap: 8px;\n\t}\n\t\n\t:host([buttons-vertical]) .dialogContent > footer ul li {\n\t\tflex-basis: auto;\n\t}\n</style>\n')}\n\t\t\t<div class="dialogContent">\n\t\t\t\t<header><h2><slot name="header"></slot></h2></header>\n\t\t\t\t<article><slot></slot></article>\n\t\t\t\t<footer>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li><slot name="button_1"></slot></li>\n\t\t\t\t\t\t<li><slot name="button_2"></slot></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</footer>\n\t\t\t</div>\n\t\t`;
        const e = document.importNode(t.content, !0);
        this.shadowRoot || (this.attachShadow({
            mode: "open"
        }),
        this.shadowRoot.appendChild(e))
    }
    #pt() {
        window.setTimeout( () => {
            !1 === this.#ut("header") && this.shadowRoot.querySelector("header").remove(),
            !1 === this.#ut("button_1") && !1 === this.#ut("button_2") && this.shadowRoot.querySelector("footer").remove(),
            !1 === this.#ut("button_1") && !0 === this.#ut("button_2") && this.shadowRoot.querySelector("li:first-of-type").remove(),
            !0 === this.#ut("button_1") && !1 === this.#ut("button_2") && this.shadowRoot.querySelector("li:last-of-type").remove()
        }
        )
    }
    #ut(t) {
        const e = Array.from(this.shadowRoot.querySelectorAll("slot")).filter(e => e.name === t && 0 !== e.assignedElements().length);
        return Boolean(e.length)
    }
    #n(t) {
        return String(t).replace(/<script\b|\bonerror=|\bonload=|\bonmouseover=|\bonmouseout=|\bonpagehide=|\bonpageshow=|\bonmessage=|\bonhashchange=|\bonbeforeunload=|\bonpopstate=|\bonresize=|\bonunload=|\bonkeydown=|\bonkeyup=|\bonkeypress=|\bonfocus=|\bonblur=|\bonchange=|\bonsubmit=|\bonreset=|\bonselect=|\bondblclick=|\bondrag=|\bondragend=|\bondragenter=|\bondragleave=|\bondragover=|\bondragstart=|\bondrop=|\bonwheel=|\boncopy=|\boncut=|\bonpaste=|\bonanimationend=|\bonanimationiteration=|\bonanimationstart=|\bontransitionend=|\bontouchcancel=|\bontouchend=|\bontouchmove=|\bontouchstart=|\bonclick=/gi, "")
    }
}
class y extends HTMLElement {
    async connectedCallback() {
        await new Promise(requestAnimationFrame),
        this.#gt(),
        this.querySelector(".js-closeConfirm")?.addEventListener("click", t => {
            t.preventDefault(),
            this.closeConfirm()
        }
        ),
        this.closest("wdk-dialog").querySelector("wdk-dialog-confirm .js-forceCloseDialog")?.addEventListener("click", () => {
            this.closest("wdk-dialog").closeModal(!0)
        }
        )
    }
    #gt() {
        const t = document.createElement("template");
        t.innerHTML = '\n\t\t\t<style>\n\t\t\t\t:host(:not([open])) {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t:host {\n\t\t\t\t\t--inline-padding: 12px;\n\t\t\t\t}\n\n\t\t\t\t@media only screen and (min-width: 601px) {\n\t\t\t\t\t:host {\n\t\t\t\t\t\t--inline-padding: 24px;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t:host([open]) {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\tbackground-color: var(--COLOR_supportDark_050);\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tborder-radius: var(--borderRadius_100);\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t.dialogContent {\n\t\t\t\t\theight: fit-content;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\tmargin: 0 16px;\n\t\t\t\t\tbackground-color: var(--COLOR_supportLight_100);\n\t\t\t\t\tborder-radius: var(--borderRadius_100);\n\t\t\t\t\tbox-shadow: var(--boxShadow_mid);\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t@media only screen and (min-width: 601px) {\n\t\t\t\t\t.dialogContent {\n\t\t\t\t\t\twidth: 70%;\n\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t.dialogContent > header h2 {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tmin-height: 60px;\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\tpadding: 18px var(--inline-padding) var(--inline-padding) var(--inline-padding);\n\t\t\t\t\tfont: var(--FONT_default_200);\n\t\t\t\t\tcolor: var(--COLOR_defaultText);\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t.dialogContent > article {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\tpadding: 0 var(--inline-padding);\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t.dialogContent > footer {\n\t\t\t\t\tpadding: 24px var(--inline-padding);\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t.dialogContent > footer ul {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-flow: wrap;\n\t\t\t\t\tgap: 20px;\n\t\t\t\t\tjustify-content: space-between;\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\tpadding: 0;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t.dialogContent > footer ul li {\n\t\t\t\t\tflex-basis: calc(40% - 20px);\n\t\t\t\t\tflex-grow: 1;\n\t\t\t\t\tlist-style: none;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tvertical-align: top;\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\tpadding: 0;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t/* Full width for Buttons if shown in 2 lines */\n\t\t\t\t.dialogContent > footer:has(li:nth-child(2)) ::slotted([slot^=\'button_\']) {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}\n\t\t\t</style>\n\t\t\t<div class="dialogContent">\n\t\t\t\t<header><h2><slot name="headline"></slot></h2></header>\n\t\t\t\t<article><slot></slot></article>\n\t\t\t\t<footer>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li><slot name="button_1"></slot></li>\n\t\t\t\t\t\t<li><slot name="button_2"></slot></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</footer>\n\t\t\t</div>\n\t\t';
        const e = document.importNode(t.content, !0);
        this.shadowRoot || (this.attachShadow({
            mode: "open"
        }),
        this.shadowRoot.appendChild(e))
    }
    openConfirm() {
        this.setAttribute("open", "")
    }
    closeConfirm() {
        this.removeAttribute("open")
    }
}
class k extends HTMLElement {
    async connectedCallback() {
        const t = document.createElement("template");
        t.innerHTML = `\n\t\t\t${this.#n("\n<style>\n\t:host {\n\t\tdisplay: block;\n\t\t--inline-padding: 12px;\n\t}\n\t\n\t@media only screen and (min-width: 601px) {\n\t\t:host {\n\t\t\t--inline-padding: 24px;\n\t\t\twidth: var(--wdk-dialog-width-desktop);\n\t\t}\n\t}\n\t\n\t.dialogContent {\n\t\tdisplay: flex;\n\t\tflex-flow: column;\n\t\tmax-height: 80dvh;\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t\tcolor: var(--COLOR_supportLight_100);\n\t}\n\t\n\t@media only screen and (max-width: 600px) {\n\t\t:host([mobile-full-height]) .dialogContent {\n\t\t\theight: 100dvh;\n\t\t\tmax-height: 100dvh;\n\t\t}\n\t}\n\t\n\t.dialogContent > header h2 {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tmin-height: 60px;\n\t\tmargin: 0;\n\t\tpadding: 18px var(--inline-padding) var(--inline-padding) var(--inline-padding);\n\t\tfont: var(--FONT_default_200);\n\t}\n\t\n\t:host([closing-x=\"inside\"]) .dialogContent > header h2 {\n\t\tpadding: 18px 68px var(--inline-padding) var(--inline-padding);\n\t}\n\t\n\t.dialogContent > article {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tpadding: 0 var(--inline-padding) var(--inline-padding) var(--inline-padding);\n\t\toverflow-y: auto;\n\t\tscrollbar-color: var(--COLOR_supportDark_500) var(--COLOR_supportLight_100);\n\t\tscrollbar-width: thin;\n\t\tflex-grow: 1;\n\t}\n\t\n\t.dialogContent:has(footer) > article {\n\t\tpadding: 0 var(--inline-padding);\n\t}\n\t\n\t/* Safari doesn't support the above and needs this webkit selectors */\n\t.dialogContent > article::-webkit-scrollbar {\n\t\twidth: 12px;\n\t\theight: 12px;\n\t}\n\t\n\t.dialogContent > article::-webkit-scrollbar-track {\n\t\tbackground: transparent;\n\t\tborder-radius: var(--borderRadius_rounded);\n\t}\n\t\n\t.dialogContent > article::-webkit-scrollbar-thumb {\n\t\tbackground: var(--COLOR_supportDark_500);\n\t\tborder: 3px solid transparent;\n\t\tborder-radius: var(--borderRadius_rounded);\n\t\tbackground-clip: content-box;\n\t}\n\t\n\t.dialogContent > article::-webkit-scrollbar-thumb:hover {\n\t\tbackground: var(--COLOR_supportDark_400);\n\t\tborder: 3px solid red;\n\t\tbackground-clip: content-box;\n\t}\n\t\n\t.dialogContent > footer {\n\t\tpadding: 24px var(--inline-padding);\n\t}\n\t\n\t.dialogContent > footer ul {\n\t\twidth: 100%;\n\t\tdisplay: flex;\n\t\tflex-flow: wrap;\n\t\tgap: 20px;\n\t\tjustify-content: space-between;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n\t\n\t.dialogContent > footer ul li {\n\t\tflex-basis: calc(40% - 20px);\n\t\tflex-grow: 1;\n\t\tlist-style: none;\n\t\ttext-align: center;\n\t\tvertical-align: top;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n\t\n\t/* Full width for Buttons if shown in 2 lines */\n\t.dialogContent > footer:has(li:nth-child(2)) ::slotted([slot^='button_']) {\n\t\twidth: 100%;\n\t}\n\t\n\t.dialogContent > footer small {\n\t\tdisplay: block;\n    \tfont: var(--FONT_default_50);\n    \tmargin-top: 32px;\n\t}\n</style>\n")}\n\t\t\t<div class="dialogContent">\n\t\t\t\t<header><h2><slot name="header"></slot></h2></header>\n\t\t\t\t<article><slot></slot></article>\n\t\t\t\t<footer>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li><slot name="button_1"></slot></li>\n\t\t\t\t\t\t<li><slot name="button_2"></slot></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<small><slot name="belowButtons"></slot></small>\n\t\t\t\t</footer>\n\t\t\t</div>\n\t\t`;
        const e = document.importNode(t.content, !0);
        this.shadowRoot || (this.attachShadow({
            mode: "open"
        }),
        this.shadowRoot.appendChild(e)),
        this.#bt()
    }
    #bt() {
        window.setTimeout( () => {
            !1 === this.#ut("header") && this.shadowRoot.querySelector("header").remove(),
            !1 === this.#ut("button_1") && !1 === this.#ut("button_2") && this.shadowRoot.querySelector("footer").remove(),
            !1 === this.#ut("button_1") && !0 === this.#ut("button_2") && this.shadowRoot.querySelector("li:first-of-type").remove(),
            !0 === this.#ut("button_1") && !1 === this.#ut("button_2") && this.shadowRoot.querySelector("li:last-of-type").remove(),
            !1 === this.#ut("belowButtons") && this.shadowRoot.querySelector("footer small").remove()
        }
        )
    }
    #ut(t) {
        const e = Array.from(this.shadowRoot.querySelectorAll("slot")).filter(e => e.name === t && 0 !== e.assignedElements().length);
        return Boolean(e.length)
    }
    #n(t) {
        return String(t).replace(/<script\b|\bonerror=|\bonload=|\bonmouseover=|\bonmouseout=|\bonpagehide=|\bonpageshow=|\bonmessage=|\bonhashchange=|\bonbeforeunload=|\bonpopstate=|\bonresize=|\bonunload=|\bonkeydown=|\bonkeyup=|\bonkeypress=|\bonfocus=|\bonblur=|\bonchange=|\bonsubmit=|\bonreset=|\bonselect=|\bondblclick=|\bondrag=|\bondragend=|\bondragenter=|\bondragleave=|\bondragover=|\bondragstart=|\bondrop=|\bonwheel=|\boncopy=|\boncut=|\bonpaste=|\bonanimationend=|\bonanimationiteration=|\bonanimationstart=|\bontransitionend=|\bontouchcancel=|\bontouchend=|\bontouchmove=|\bontouchstart=|\bonclick=/gi, "")
    }
}
class f extends HTMLElement {
    async connectedCallback() {
        const t = document.createElement("template");
        t.innerHTML = '\n\t\t\t<style>\n\t\t\t\t:host {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t@media only screen and (min-width: 601px) {\n\t\t\t\t\t:host {\n\t\t\t\t\t\twidth: var(--wdk-dialog-width-desktop);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t@media only screen and (max-width: 600px) {\n\t\t\t\t\t:host([mobile-full-height]) .dialogContent {\n\t\t\t\t\t\theight: 100dvh;\n\t\t\t\t\t\tmax-height: 100dvh;\n\t\t\t\t\t\tborder-top-left-radius: 0;\n\t\t\t\t\t\tborder-top-right-radius: 0;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t</style>\n\t\t\t<div class="dialogContent">\n\t\t\t\t<article><slot></slot></article>\n\t\t\t</div>\n\t\t';
        const e = document.importNode(t.content, !0);
        this.shadowRoot || (this.attachShadow({
            mode: "open"
        }),
        this.shadowRoot.appendChild(e))
    }
}
class C extends HTMLElement {
    #mt = null;
    #vt = null;
    async connectedCallback() {
        this.#mt = new AbortController,
        this.#vt = this.getAttribute("dialog-id"),
        await jPar.util.waitForChildNodes(),
        this.addEventListener("click", () => {
            document.querySelector("#" + this.#vt).openModal(),
            this.trackClick()
        }
        , {
            signal: this.#mt.signal
        })
    }
    trackClick() {
        const t = this.querySelector("template[data-tracking]");
        if (null !== t) {
            let e = {};
            try {
                const n = t.content.textContent.trim();
                e = JSON.parse(n).tracking;
                const o = {
                    category: e.category || "",
                    subcategory: e.subcategory || "",
                    targetId: e.targetId || "",
                    action: e.action || "click"
                };
                ["cd1", "cd2", "cd3", "cd4", "cd5", "cd6"].forEach(t => {
                    e[t] && e[t].trim() && (o[t] = e[t])
                }
                ),
                jPar.util.log.bigData(o)
            } catch (t) {
                console.error("Fehler beim Parsen der JSON Tracking-Konfiguration aus dem Template", t)
            }
        }
    }
    async disconnectedCallback() {
        this.#mt?.abort()
    }
}
customElements.define("wdk-dialog-body-default", w),
customElements.define("wdk-dialog-body-destructive", k),
customElements.define("wdk-dialog-body-freestyle", f),
customElements.define("wdk-dialog-confirm", y),
customElements.define("wdk-dialog-trigger", C);
class x extends HTMLElement {
    async connectedCallback() {
        await new Promise(requestAnimationFrame),
        this.abortController = new AbortController,
        this.loadingSpinnterTimer = null,
        this.isNotInAppShell = null === document.querySelector("peg-app-shell"),
        null !== this.getAttribute("open") && this.openModal({
            preventOpenAnimation: !0
        })
    }
    async disconnectedCallback() {
        await new Promise(requestAnimationFrame),
        this.abortController.abort()
    }
    async openModal(t) {
        const e = (t = t || {}).fetchUrl || null
          , n = t.preventOpenAnimation || !1;
        void 0 === t.keepCurrentDialogOpen && await this.#wt(),
        this.#yt(),
        this.#kt(n),
        this.isNotInAppShell && window.history.pushState({}, "", window.location.href + "#wdkDialogOpen"),
        this.setAttribute("open", ""),
        await this.#ft(e),
        this.dialog.showModal(),
        this.dialog.focus(),
        this.#Ct(),
        this.#xt(),
        this.#Et("openDialog")
    }
    #yt() {
        const t = document.createElement("template");
        t.innerHTML = `\n\t\t\t${this.#n('\n\t<style>\n\t\thtml:has(wdk-dialog dialog[open]) {\n\t\t\toverflow: hidden;\n\t\t}\n\t\t\t\t\n\t\t/* Just to make the Component "visible" to Tests. So we don\'t have to check for the real dialog Element in here */\n\t\twdk-dialog:has(dialog[open]) {\n\t\t\tposition: fixed;\n    \t\tinset: 0;\n\t\t}\n\t\t\n\t\twdk-dialog {\n\t\t\t--wdk-dialog-width-desktop: 560px;\n\t\t}\n\t\t/*\n\t\t--BREAKPOINT_S: 320px;\n\t\t--BREAKPOINT_M: 601px;\n\t\t--BREAKPOINT_L: 768px;\n\t\t--BREAKPOINT_XL: 980px;\n\t\t*/\n\t\n\t\t /* \n\t\tdon\'t change anything about height and width \n\t\t-> this was evil to get it work in all variants \n\t\t(long text, short text, only one word text etc., mobile, desktop, mobile-full-height and not mobile-full-height\n\t\t*/\n\t\twdk-dialog dialog {\n\t\t\tinset: 0;\n\t\t\twidth: 100%;\n\t\t\tmax-width: 100%;\n\t\t\tmax-height: 80dvh;\n\t\t\toverflow: hidden;\n\t\t\tborder: none;\n\t\t\tpadding: 0;\n\t\t\tmargin-block-end: 0;\n\t\t\tbackground-color: transparent;\n\t\t\ttransition: display .5s allow-discrete, overlay .5s allow-discrete;\n\t\t\tanimation: close .5s forwards;\n\t\t}\n\t\t\n\t\thtml.macSafari wdk-dialog dialog {\n\t\t\ttransition: none;\n\t\t}\n\t\t\n\t\thtml.ios {\n\t\t\ttransition: none;\n\t\t}\n\t\n\t\t\n\t\twdk-dialog[open] dialog {\n\t\t\tanimation: open .5s forwards;\n\t\t}\n\t\t\n\t\t@media only screen and (min-width: 601px) {\n\t\t\twdk-dialog dialog {\n\t\t\t\tmax-width: none;\n\t\t\t\twidth: var(--wdk-dialog-width-desktop);\n\t\t\t\tmargin-bottom: auto;\n\t\t\t}\n\t\t}\n\t\t\n\t\twdk-dialog[mobile-full-height] dialog {\n\t\t\theight: 100dvh;\n\t\t\tmax-height: 100dvh;\n\t\t}\n\t\t\n\t\t@media only screen and (min-width: 601px) {\n\t\t\twdk-dialog[mobile-full-height] dialog {\n\t\t\t\theight: fit-content;\n\t\t\t\tmax-height: 80dvh;\n\t\t\t}\n\t\t}\n\n\t\t@media only screen and (max-width: 600px) {\n\t\t\twdk-dialog[mobile-center] dialog {\n\t\t\t\tmargin-block-end: auto;\n\t\t\t\tpadding-inline: 8px;\n\t\t\t}\n\t\t}\n\t\t\t\t \n\t\twdk-dialog dialog[open]::backdrop {\n\t\t\tbackdrop-filter: blur(16px);\n\t\t\t-webkit-backdrop-filter: blur(16px);\n\t\t\tbackground-color: #00000A99; /* 99 = 60% opacity -> Safari has a bug with vars for background-color on backdrop*/\n\t\t}\n\t\t\n\t\twdk-dialog[no-backdrop] dialog::backdrop {\n\t\t\tbackground-color: transparent;\n\t\t\tbackdrop-filter: blur(0);\n\t\t\t-webkit-backdrop-filter: blur(0);\n\t\t}\n\t\t\n\t\twdk-dialog[closing-x="inside"] dialog .closingX {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\tposition: absolute;\n\t\t\tz-index: 1;\n\t\t\ttop: 20px;\n\t\t\tright: 20px;\n\t\t\theight: 32px;\n\t\t\twidth: 32px;\n\t\t\tpadding: 0;\n\t\t\tborder: 0;\n\t\t\tcursor: pointer;\n\t\t\tbackground-color: transparent;\n\t\t}\n\t\t\n\t\twdk-dialog[closing-x="inside"] dialog .closingX:hover {\n\t\t\topacity: .5;\n\t\t}\n\t\t\n\t\twdk-dialog[closing-x="inside"] dialog .closingX svg {\n\t\t\tdisplay: block;\n\t\t\twidth: 32px;\n\t\t\theight: 32px; \n\t\t}\n\n\t\twdk-dialog[closing-x="inside"] dialog .closingX svg line {\n\t\t\tstroke: var(--wdk-dialog-closing-x-color, var(--COLOR_supportDark_100));\n\t\t\tstroke-width: 1.8px;\n\t\t}\n\n\t\twdk-dialog[closing-x="outside"] dialog {\n\t\t\tpadding-bottom: 100px;\n\t\t}\n\n\t\t@media only screen and (min-width: 601px) {\n\t\t\twdk-dialog[closing-x="outside"] dialog {\n\t\t\t\tpadding-bottom: 50px;\n\t\t\t}\n\t\t}\n\t\t\n\t\twdk-dialog[closing-x="outside"] dialog .closingX {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\tposition: absolute;\n\t\t\tbottom: 20px;\n\t\t\tleft: calc(50% - 16px);\n\t\t\theight: 32px;\n\t\t\twidth: 32px;\n\t\t\tpadding: 0;\n\t\t\tbackground-color: transparent;\n\t\t\tborder: 0;\n\t\t\tborder-radius: 30px;\n\t\t\tcursor: pointer;\n\t\t}\n\t\t\n\t\t@media only screen and (min-width: 601px) {\n\t\t\twdk-dialog[closing-x="outside"] dialog .closingX {\n\t\t\t\tbottom: 0;\n\t\t\t}\n\t\t}\n\t\t\n\t\twdk-dialog[closing-x="outside"] dialog .closingX:hover {\n\t\t\topacity: .5;\n\t\t}\n\t\t\n\t\twdk-dialog[closing-x="outside"] dialog .closingX svg {\n\t\t\tdisplay: block;\n\t\t\theight: 32px;\n\t\t\twidth: 32px;\n\t\t}\n\t\t\n\t\twdk-dialog[closing-x="outside"] dialog .closingX svg line {\n\t\t\tstroke: var(--COLOR_supportLight_100);\n\t\t\tstroke-width: 1.8px;\n\t\t}\n\t\t\n\t\twdk-dialog dialog:has(.wdk-loadingSpinner) {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\tpadding-bottom: 32px;\n\t\t}\n\t\t\n\t\twdk-dialog dialog:has(wdk-dialog-body-freestyle) {\n\t\t\toverflow-y: auto;\n\t\t}\n\t\t\n\t\t@keyframes open {\n\t\t\tfrom {\n\t\t\t\topacity: 0;\n\t\t\t\ttransform: translateY(100%);\n\t\t\t}\n\t\t\tto {\n\t\t\t\topacity: 1;\n\t\t\t\ttransform: translateY(0);\n\t\t\t}\n\t\t}\n\t\t\n\t\t@keyframes close {\n\t\t\tfrom {\n\t\t\t\topacity: 1;\n\t\t\t\ttransform: translateY(0);\n\t\t\t}\n\t\t\tto {\n\t\t\t\topacity: 0;\n\t\t\t\ttransform: translateY(100%);\n\t\t\t}\n\t\t}\n\t\t\n\t</style>\n')}\n\t\t\t<dialog></dialog>\n\t\t`;
        const e = document.importNode(t.content, !0);
        this.appendChild(e),
        this.dialog = this.querySelector("dialog"),
        this.#St(),
        this.#_t()
    }
    #Lt() {
        this.dialog.innerHTML = this.#n('<div class="wdk-loadingSpinner noDisplay is-loading t-white t-size200"></div>'),
        this.loadingSpinnterTimer = window.setTimeout( () => {
            this.dialog.querySelector(".wdk-loadingSpinner")?.classList.remove("noDisplay")
        }
        , 1500)
    }
    #At() {
        window.clearTimeout(this.loadingSpinnterTimer),
        this.dialog.querySelector(".wdk-loadingSpinner")?.remove()
    }
    async #ft(t=null) {
        if (null !== this.getAttribute("url") || null !== t)
            try {
                this.#Lt();
                const e = this.getAttribute("url") || t
                  , n = await fetchIt.get(e);
                this.dialog.innerHTML = this.#n(n),
                this.#Rt(),
                this.dispatchEvent(new CustomEvent("wdk-dialog:fetch-success",{
                    bubbles: !0
                }))
            } catch (t) {
                await this.#Dt(t)
            } finally {
                this.#At()
            }
        else {
            const t = this.querySelector("template")
              , e = document.importNode(t.content, !0);
            this.dialog.appendChild(e),
            this.#Rt()
        }
    }
    #Rt() {
        if (null !== this.getAttribute("closing-x")) {
            const t = this.#qt("closeButtonLabel")
              , e = document.createElement("template")
              , n = `\n\t\t\t\t\t<button type="button" class="closingX js-closeDialog" aria-label="${t}">\n\t\t\t\t\t\t<svg viewBox="0 0 24 24">\n\t\t\t\t\t\t  <line x1="18" y1="6" x2="6" y2="18" stroke="black" stroke-width="1"/>\n\t\t\t\t\t\t  <line x1="6" y1="6" x2="18" y2="18" stroke="black" stroke-width="1"/>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</button>\n\t\t\t\t`;
            e.innerHTML = this.#n(n);
            const o = document.importNode(e.content, !0);
            this.dialog.prepend(o)
        }
    }
    #kt(t) {
        this.dialog.style.removeProperty("animation-name"),
        this.dialog.style.removeProperty("transition"),
        t && (this.dialog.style.transition = "none",
        this.dialog.style.animationName = "none")
    }
    async closeModal(t=!1, e=!1) {
        await this.#Tt(t, e)
    }
    async #wt() {
        const t = document.querySelector("wdk-dialog dialog[open]");
        if (null !== t) {
            const e = t.closest("wdk-dialog[open]");
            e.setAttribute("prevent-close-animation", ""),
            await e.closeModal(!0)
        }
    }
    async #Dt(t) {
        if ("technicalError" !== t.type)
            throw t;
        switch (await this.#Tt(),
        this.dispatchEvent(new CustomEvent("wdk-dialog:fetch-fail",{
            detail: {
                response: t
            }
        })),
        t.message) {
        case "browserTimeout":
            document.querySelector("wdk-snackbar#timeoutNotification").show();
            break;
        case "sessionExpired":
            jPar.util.network.reloadForSessionExpired();
            break;
        case "offline":
            jPar.util.pwa.offline.triggerOfflineAttention();
            break;
        default:
            null !== document.querySelector("#errorDialog500") ? await document.querySelector("#errorDialog500").openModal() : jPar.wdk.modalbox.show({
                modalboxId: "errorModalbox500"
            }),
            console.error(t)
        }
    }
    preventClose() {
        this.isClosePrevented = !0
    }
    async #Tt(t=!1, e=!1) {
        if (this.#kt(e),
        this.isClosePrevented = !1,
        this.dispatchEvent(new CustomEvent("wdk-dialog:closing",{
            detail: {
                wdkDialog: this,
                isForceClose: t
            },
            bubbles: !0
        })),
        !0 === t && (this.isClosePrevented = !1),
        !1 === this.isClosePrevented) {
            if (this.isNotInAppShell) {
                const t = function(t, e) {
                    const n = new URL(t)
                      , o = new URLSearchParams(n.search);
                    for (; o.has(e); )
                        o.delete(e);
                    const i = o.toString()
                      , r = "" !== i ? "?" : "";
                    return n.origin + n.pathname + r + i
                }(document.location.href, "wdkDialogOpen");
                history.replaceState(null, null, t)
            }
            this.removeAttribute("open"),
            this.#Et("closeDialog"),
            this.dialog.close(),
            await this.#Ot(),
            this.#Pt(),
            this.dispatchEvent(new CustomEvent("wdk-dialog:closed",{
                detail: {
                    wdkDialog: this,
                    isForceClose: t
                },
                bubbles: !0
            }))
        }
    }
    #St() {
        null === this.getAttribute("prevent-light-dismiss") ? (this.dialog.addEventListener("click", async t => {
            "DIALOG" === t.target.nodeName && await this.#Tt()
        }
        ),
        this.dialog.addEventListener("keydown", async t => {
            "Escape" === t.code && await this.#Tt()
        }
        )) : this.dialog.addEventListener("keydown", t => {
            "Escape" === t.code && t.preventDefault()
        }
        ),
        this.isNotInAppShell && window.addEventListener("popstate", async () => {
            window.location.hash.includes("wdkDialogOpen") || await this.#Tt()
        }
        , {
            signal: this.abortController?.signal
        })
    }
    #Et(t) {
        const e = jPar.state.wdkDialog.openedDialogList;
        if ("openDialog" === t)
            jPar.state.wdkDialog.openedDialogList.includes(this.id) || jPar.state.wdkDialog.openedDialogList.unshift(this.id),
            e.slice(1).forEach(t => {
                document.querySelector(`#${t}`).setAttribute("no-backdrop", "")
            }
            );
        else if ("closeDialog" === t) {
            const t = jPar.state.wdkDialog.openedDialogList.indexOf(this.id);
            t > -1 && jPar.state.wdkDialog.openedDialogList.splice(t, 1),
            document.querySelector(`#${e[0]}`)?.removeAttribute("no-backdrop")
        }
    }
    #xt() {
        const t = this.querySelector("wdk-dialog-body-default, wdk-dialog-body-destructive");
        if (null !== t) {
            const e = ["mobile-full-height", "mobile-center", "buttons-vertical", "closing-x"];
            for (const n of this.attributes)
                e.includes(n.name) && t.setAttribute(n.name, n.value)
        }
    }
    #Ct() {
        this.dialog.querySelectorAll(".js-closeDialog").forEach(t => {
            t.addEventListener("click", async () => {
                await this.#Tt()
            }
            )
        }
        ),
        this.dialog.querySelector('[type="submit"]')?.addEventListener("click", t => {
            t.preventDefault(),
            this.dialog.querySelector("form")?.requestSubmit()
        }
        )
    }
    #n(t) {
        return String(t).replace(/<script\b|\bonerror=|\bonload=|\bonmouseover=|\bonmouseout=|\bonpagehide=|\bonpageshow=|\bonmessage=|\bonhashchange=|\bonbeforeunload=|\bonpopstate=|\bonresize=|\bonunload=|\bonkeydown=|\bonkeyup=|\bonkeypress=|\bonfocus=|\bonblur=|\bonchange=|\bonsubmit=|\bonreset=|\bonselect=|\bondblclick=|\bondrag=|\bondragend=|\bondragenter=|\bondragleave=|\bondragover=|\bondragstart=|\bondrop=|\bonwheel=|\boncopy=|\boncut=|\bonpaste=|\bonanimationend=|\bonanimationiteration=|\bonanimationstart=|\bontransitionend=|\bontouchcancel=|\bontouchend=|\bontouchmove=|\bontouchstart=|\bonclick=/gi, "")
    }
    #Ot() {
        return this.hasAttribute("prevent-open-animation") || this.hasAttribute("prevent-close-animation") ? new Promise(t => t()) : new Promise(t => setTimeout(t, 500))
    }
    #_t() {
        new MutationObserver(t => {
            t.forEach(async t => {
                if ("open" === t.attributeName) {
                    this.dialog.hasAttribute("open") && (this.dispatchEvent(new CustomEvent("wdk-dialog:opening",{
                        bubbles: !0
                    })),
                    await this.#Ot(),
                    this.dispatchEvent(new CustomEvent("wdk-dialog:opened",{
                        detail: {
                            wdkDialog: this
                        },
                        bubbles: !0
                    })))
                }
            }
            )
        }
        ).observe(this.dialog, {
            attributes: !0
        })
    }
    #Pt() {
        Array.from(this.children).forEach(t => {
            "template" !== t.tagName.toLowerCase() && this.removeChild(t)
        }
        ),
        this.removeAttribute("prevent-close-animation"),
        this.removeAttribute("prevent-open-animation")
    }
    #qt(t) {
        const e = {
            en: {
                closeButtonLabel: "Close"
            },
            de: {
                closeButtonLabel: "Schließen"
            },
            fr: {
                closeButtonLabel: "Fermer"
            },
            es: {
                closeButtonLabel: "Cerrar"
            },
            nl: {
                closeButtonLabel: "Sluiten"
            }
        }
          , n = navigator.languages;
        for (const o of n) {
            const n = o.split("-")[0];
            if (e[n] && e[n][t])
                return e[n][t]
        }
        return e.en[t]
    }
}
class E extends HTMLElement {
    connectedCallback() {
        this.querySelectorAll(".js-reloadPage").forEach(t => {
            t.addEventListener("click", t => {
                t.preventDefault(),
                document.location.reload()
            }
            )
        }
        )
    }
}
customElements.define("peg-apple-social-button", t),
customElements.define("peg-google-social-button", e),
customElements.define("peg-cookiebanner", n),
customElements.define("bst-message-keys", o),
customElements.define("peg-footer", i),
customElements.define("peg-otp-page", r),
customElements.define("peg-liveness-page", a),
customElements.define("peg-liveness-page-done", s),
customElements.define("peg-mandatoryphotoupload-page", l),
customElements.define("peg-verification-code", d),
customElements.define("peg-otp-help-dialog", c),
customElements.define("peg-error-dialog-500", E),
customElements.define("peg-turnstile", h),
customElements.define("peg-photo-selector", p),
customElements.define("peg-photo-uploader", u),
customElements.define("peg-photo-editor", g),
customElements.define("peg-photo-upload-dialog", b),
customElements.define("wdk-hintbox-error", m),
customElements.define("wdk-input-checkbox", v),
customElements.define("wdk-dialog", x);
