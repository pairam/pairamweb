! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function o(e) {
        var t = e.length,
            o = re.type(e);
        return "function" === o || re.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === o || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function i(e, t, o) {
        if (re.isFunction(t)) return re.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== o
        });
        if (t.nodeType) return re.grep(e, function(e) {
            return e === t !== o
        });
        if ("string" == typeof t) {
            if (he.test(t)) return re.filter(t, e, o);
            t = re.filter(t, e)
        }
        return re.grep(e, function(e) {
            return re.inArray(e, t) >= 0 !== o
        })
    }

    function n(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function r(e) {
        var t = xe[e] = {};
        return re.each(e.match(be) || [], function(e, o) {
            t[o] = !0
        }), t
    }

    function s() {
        me.addEventListener ? (me.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1)) : (me.detachEvent("onreadystatechange", a), e.detachEvent("onload", a))
    }

    function a() {
        (me.addEventListener || "load" === event.type || "complete" === me.readyState) && (s(), re.ready())
    }

    function l(e, t, o) {
        if (void 0 === o && 1 === e.nodeType) {
            var i = "data-" + t.replace(Ee, "-$1").toLowerCase();
            if (o = e.getAttribute(i), "string" == typeof o) {
                try {
                    o = "true" === o ? !0 : "false" === o ? !1 : "null" === o ? null : +o + "" === o ? +o : Ce.test(o) ? re.parseJSON(o) : o
                } catch (n) {}
                re.data(e, t, o)
            } else o = void 0
        }
        return o
    }

    function c(e) {
        var t;
        for (t in e)
            if (("data" !== t || !re.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function d(e, t, o, i) {
        if (re.acceptData(e)) {
            var n, r, s = re.expando,
                a = e.nodeType,
                l = a ? re.cache : e,
                c = a ? e[s] : e[s] && s;
            if (c && l[c] && (i || l[c].data) || void 0 !== o || "string" != typeof t) return c || (c = a ? e[s] = V.pop() || re.guid++ : s), l[c] || (l[c] = a ? {} : {
                toJSON: re.noop
            }), ("object" == typeof t || "function" == typeof t) && (i ? l[c] = re.extend(l[c], t) : l[c].data = re.extend(l[c].data, t)), r = l[c], i || (r.data || (r.data = {}), r = r.data), void 0 !== o && (r[re.camelCase(t)] = o), "string" == typeof t ? (n = r[t], null == n && (n = r[re.camelCase(t)])) : n = r, n
        }
    }

    function u(e, t, o) {
        if (re.acceptData(e)) {
            var i, n, r = e.nodeType,
                s = r ? re.cache : e,
                a = r ? e[re.expando] : re.expando;
            if (s[a]) {
                if (t && (i = o ? s[a] : s[a].data)) {
                    re.isArray(t) ? t = t.concat(re.map(t, re.camelCase)) : t in i ? t = [t] : (t = re.camelCase(t), t = t in i ? [t] : t.split(" ")), n = t.length;
                    for (; n--;) delete i[t[n]];
                    if (o ? !c(i) : !re.isEmptyObject(i)) return
                }(o || (delete s[a].data, c(s[a]))) && (r ? re.cleanData([e], !0) : ie.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
            }
        }
    }

    function p() {
        return !0
    }

    function h() {
        return !1
    }

    function f() {
        try {
            return me.activeElement
        } catch (e) {}
    }

    function m(e) {
        var t = Pe.split("|"),
            o = e.createDocumentFragment();
        if (o.createElement)
            for (; t.length;) o.createElement(t.pop());
        return o
    }

    function g(e, t) {
        var o, i, n = 0,
            r = typeof e.getElementsByTagName !== Se ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Se ? e.querySelectorAll(t || "*") : void 0;
        if (!r)
            for (r = [], o = e.childNodes || e; null != (i = o[n]); n++) !t || re.nodeName(i, t) ? r.push(i) : re.merge(r, g(i, t));
        return void 0 === t || t && re.nodeName(e, t) ? re.merge([e], r) : r
    }

    function v(e) {
        Me.test(e.type) && (e.defaultChecked = e.checked)
    }

    function y(e, t) {
        return re.nodeName(e, "table") && re.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function w(e) {
        return e.type = (null !== re.find.attr(e, "type")) + "/" + e.type, e
    }

    function b(e) {
        var t = Ve.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function x(e, t) {
        for (var o, i = 0; null != (o = e[i]); i++) re._data(o, "globalEval", !t || re._data(t[i], "globalEval"))
    }

    function T(e, t) {
        if (1 === t.nodeType && re.hasData(e)) {
            var o, i, n, r = re._data(e),
                s = re._data(t, r),
                a = r.events;
            if (a) {
                delete s.handle, s.events = {};
                for (o in a)
                    for (i = 0, n = a[o].length; n > i; i++) re.event.add(t, o, a[o][i])
            }
            s.data && (s.data = re.extend({}, s.data))
        }
    }

    function k(e, t) {
        var o, i, n;
        if (1 === t.nodeType) {
            if (o = t.nodeName.toLowerCase(), !ie.noCloneEvent && t[re.expando]) {
                n = re._data(t);
                for (i in n.events) re.removeEvent(t, i, n.handle);
                t.removeAttribute(re.expando)
            }
            "script" === o && t.text !== e.text ? (w(t).text = e.text, b(t)) : "object" === o ? (t.parentNode && (t.outerHTML = e.outerHTML), ie.html5Clone && e.innerHTML && !re.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === o && Me.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === o ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === o || "textarea" === o) && (t.defaultValue = e.defaultValue)
        }
    }

    function S(t, o) {
        var i = re(o.createElement(t)).appendTo(o.body),
            n = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(i[0]).display : re.css(i[0], "display");
        return i.detach(), n
    }

    function C(e) {
        var t = me,
            o = et[e];
        return o || (o = S(e, t), "none" !== o && o || (Je = (Je || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Je[0].contentWindow || Je[0].contentDocument).document, t.write(), t.close(), o = S(e, t), Je.detach()), et[e] = o), o
    }

    function E(e, t) {
        return {
            get: function() {
                var o = e();
                return null != o ? o ? void delete this.get : (this.get = t).apply(this, arguments) : void 0
            }
        }
    }

    function N(e, t) {
        if (t in e) return t;
        for (var o = t.charAt(0).toUpperCase() + t.slice(1), i = t, n = ht.length; n--;)
            if (t = ht[n] + o, t in e) return t;
        return i
    }

    function z(e, t) {
        for (var o, i, n, r = [], s = 0, a = e.length; a > s; s++) i = e[s], i.style && (r[s] = re._data(i, "olddisplay"), o = i.style.display, t ? (r[s] || "none" !== o || (i.style.display = ""), "" === i.style.display && Le(i) && (r[s] = re._data(i, "olddisplay", C(i.nodeName)))) : r[s] || (n = Le(i), (o && "none" !== o || !n) && re._data(i, "olddisplay", n ? o : re.css(i, "display"))));
        for (s = 0; a > s; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[s] || "" : "none"));
        return e
    }

    function L(e, t, o) {
        var i = ct.exec(t);
        return i ? Math.max(0, i[1] - (o || 0)) + (i[2] || "px") : t
    }

    function $(e, t, o, i, n) {
        for (var r = o === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === o && (s += re.css(e, o + ze[r], !0, n)), i ? ("content" === o && (s -= re.css(e, "padding" + ze[r], !0, n)), "margin" !== o && (s -= re.css(e, "border" + ze[r] + "Width", !0, n))) : (s += re.css(e, "padding" + ze[r], !0, n), "padding" !== o && (s += re.css(e, "border" + ze[r] + "Width", !0, n)));
        return s
    }

    function M(e, t, o) {
        var i = !0,
            n = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = tt(e),
            s = ie.boxSizing() && "border-box" === re.css(e, "boxSizing", !1, r);
        if (0 >= n || null == n) {
            if (n = ot(e, t, r), (0 > n || null == n) && (n = e.style[t]), nt.test(n)) return n;
            i = s && (ie.boxSizingReliable() || n === e.style[t]), n = parseFloat(n) || 0
        }
        return n + $(e, t, o || (s ? "border" : "content"), i, r) + "px"
    }

    function A(e, t, o, i, n) {
        return new A.prototype.init(e, t, o, i, n)
    }

    function H() {
        return setTimeout(function() {
            ft = void 0
        }), ft = re.now()
    }

    function D(e, t) {
        var o, i = {
                height: e
            },
            n = 0;
        for (t = t ? 1 : 0; 4 > n; n += 2 - t) o = ze[n], i["margin" + o] = i["padding" + o] = e;
        return t && (i.opacity = i.width = e), i
    }

    function j(e, t, o) {
        for (var i, n = (bt[t] || []).concat(bt["*"]), r = 0, s = n.length; s > r; r++)
            if (i = n[r].call(o, t, e)) return i
    }

    function O(e, t, o) {
        var i, n, r, s, a, l, c, d, u = this,
            p = {},
            h = e.style,
            f = e.nodeType && Le(e),
            m = re._data(e, "fxshow");
        o.queue || (a = re._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, u.always(function() {
            u.always(function() {
                a.unqueued--, re.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (o.overflow = [h.overflow, h.overflowX, h.overflowY], c = re.css(e, "display"), d = C(e.nodeName), "none" === c && (c = d), "inline" === c && "none" === re.css(e, "float") && (ie.inlineBlockNeedsLayout && "inline" !== d ? h.zoom = 1 : h.display = "inline-block")), o.overflow && (h.overflow = "hidden", ie.shrinkWrapBlocks() || u.always(function() {
            h.overflow = o.overflow[0], h.overflowX = o.overflow[1], h.overflowY = o.overflow[2]
        }));
        for (i in t)
            if (n = t[i], gt.exec(n)) {
                if (delete t[i], r = r || "toggle" === n, n === (f ? "hide" : "show")) {
                    if ("show" !== n || !m || void 0 === m[i]) continue;
                    f = !0
                }
                p[i] = m && m[i] || re.style(e, i)
            }
        if (!re.isEmptyObject(p)) {
            m ? "hidden" in m && (f = m.hidden) : m = re._data(e, "fxshow", {}), r && (m.hidden = !f), f ? re(e).show() : u.done(function() {
                re(e).hide()
            }), u.done(function() {
                var t;
                re._removeData(e, "fxshow");
                for (t in p) re.style(e, t, p[t])
            });
            for (i in p) s = j(f ? m[i] : 0, i, u), i in m || (m[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function P(e, t) {
        var o, i, n, r, s;
        for (o in e)
            if (i = re.camelCase(o), n = t[i], r = e[o], re.isArray(r) && (n = r[1], r = e[o] = r[0]), o !== i && (e[i] = r, delete e[o]), s = re.cssHooks[i], s && "expand" in s) {
                r = s.expand(r), delete e[i];
                for (o in r) o in e || (e[o] = r[o], t[o] = n)
            } else t[i] = n
    }

    function q(e, t, o) {
        var i, n, r = 0,
            s = wt.length,
            a = re.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (n) return !1;
                for (var t = ft || H(), o = Math.max(0, c.startTime + c.duration - t), i = o / c.duration || 0, r = 1 - i, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(r);
                return a.notifyWith(e, [c, r, o]), 1 > r && l ? o : (a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: re.extend({}, t),
                opts: re.extend(!0, {
                    specialEasing: {}
                }, o),
                originalProperties: t,
                originalOptions: o,
                startTime: ft || H(),
                duration: o.duration,
                tweens: [],
                createTween: function(t, o) {
                    var i = re.Tween(e, c.opts, t, o, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(t) {
                    var o = 0,
                        i = t ? c.tweens.length : 0;
                    if (n) return this;
                    for (n = !0; i > o; o++) c.tweens[o].run(1);
                    return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]), this
                }
            }),
            d = c.props;
        for (P(d, c.opts.specialEasing); s > r; r++)
            if (i = wt[r].call(c, e, d, c.opts)) return i;
        return re.map(d, j, c), re.isFunction(c.opts.start) && c.opts.start.call(e, c), re.fx.timer(re.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function _(e) {
        return function(t, o) {
            "string" != typeof t && (o = t, t = "*");
            var i, n = 0,
                r = t.toLowerCase().match(be) || [];
            if (re.isFunction(o))
                for (; i = r[n++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(o)) : (e[i] = e[i] || []).push(o)
        }
    }

    function R(e, t, o, i) {
        function n(a) {
            var l;
            return r[a] = !0, re.each(e[a] || [], function(e, a) {
                var c = a(t, o, i);
                return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), n(c), !1)
            }), l
        }
        var r = {},
            s = e === Ft;
        return n(t.dataTypes[0]) || !r["*"] && n("*")
    }

    function I(e, t) {
        var o, i, n = re.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((n[i] ? e : o || (o = {}))[i] = t[i]);
        return o && re.extend(!0, e, o), e
    }

    function W(e, t, o) {
        for (var i, n, r, s, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
        if (n)
            for (s in a)
                if (a[s] && a[s].test(n)) {
                    l.unshift(s);
                    break
                }
        if (l[0] in o) r = l[0];
        else {
            for (s in o) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    r = s;
                    break
                }
                i || (i = s)
            }
            r = r || i
        }
        return r ? (r !== l[0] && l.unshift(r), o[r]) : void 0
    }

    function B(e, t, o, i) {
        var n, r, s, a, l, c = {},
            d = e.dataTypes.slice();
        if (d[1])
            for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
        for (r = d.shift(); r;)
            if (e.responseFields[r] && (o[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = d.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (s = c[l + " " + r] || c["* " + r], !s)
                for (n in c)
                    if (a = n.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                        s === !0 ? s = c[n] : c[n] !== !0 && (r = a[0], d.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (u) {
                    return {
                        state: "parsererror",
                        error: s ? u : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function F(e, t, o, i) {
        var n;
        if (re.isArray(t)) re.each(t, function(t, n) {
            o || Vt.test(e) ? i(e, n) : F(e + "[" + ("object" == typeof n ? t : "") + "]", n, o, i)
        });
        else if (o || "object" !== re.type(t)) i(e, t);
        else
            for (n in t) F(e + "[" + n + "]", t[n], o, i)
    }

    function X() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function Y() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function U(e) {
        return re.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var V = [],
        Z = V.slice,
        Q = V.concat,
        K = V.push,
        G = V.indexOf,
        J = {},
        ee = J.toString,
        te = J.hasOwnProperty,
        oe = "".trim,
        ie = {},
        ne = "1.11.0",
        re = function(e, t) {
            return new re.fn.init(e, t)
        },
        se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ae = /^-ms-/,
        le = /-([\da-z])/gi,
        ce = function(e, t) {
            return t.toUpperCase()
        };
    re.fn = re.prototype = {
        jquery: ne,
        constructor: re,
        selector: "",
        length: 0,
        toArray: function() {
            return Z.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : Z.call(this)
        },
        pushStack: function(e) {
            var t = re.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return re.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(re.map(this, function(t, o) {
                return e.call(t, o, t)
            }))
        },
        slice: function() {
            return this.pushStack(Z.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                o = +e + (0 > e ? t : 0);
            return this.pushStack(o >= 0 && t > o ? [this[o]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: K,
        sort: V.sort,
        splice: V.splice
    }, re.extend = re.fn.extend = function() {
        var e, t, o, i, n, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || re.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
            if (null != (n = arguments[a]))
                for (i in n) e = s[i], o = n[i], s !== o && (c && o && (re.isPlainObject(o) || (t = re.isArray(o))) ? (t ? (t = !1, r = e && re.isArray(e) ? e : []) : r = e && re.isPlainObject(e) ? e : {}, s[i] = re.extend(c, r, o)) : void 0 !== o && (s[i] = o));
        return s
    }, re.extend({
        expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === re.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === re.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return e - parseFloat(e) >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== re.type(e) || e.nodeType || re.isWindow(e)) return !1;
            try {
                if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (o) {
                return !1
            }
            if (ie.ownLast)
                for (t in e) return te.call(e, t);
            for (t in e);
            return void 0 === t || te.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? J[ee.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && re.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(ae, "ms-").replace(le, ce)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, i) {
            var n, r = 0,
                s = e.length,
                a = o(e);
            if (i) {
                if (a)
                    for (; s > r && (n = t.apply(e[r], i), n !== !1); r++);
                else
                    for (r in e)
                        if (n = t.apply(e[r], i), n === !1) break
            } else if (a)
                for (; s > r && (n = t.call(e[r], r, e[r]), n !== !1); r++);
            else
                for (r in e)
                    if (n = t.call(e[r], r, e[r]), n === !1) break; return e
        },
        trim: oe && !oe.call("\ufeff ") ? function(e) {
            return null == e ? "" : oe.call(e)
        } : function(e) {
            return null == e ? "" : (e + "").replace(se, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (o(Object(e)) ? re.merge(i, "string" == typeof e ? [e] : e) : K.call(i, e)), i
        },
        inArray: function(e, t, o) {
            var i;
            if (t) {
                if (G) return G.call(t, e, o);
                for (i = t.length, o = o ? 0 > o ? Math.max(0, i + o) : o : 0; i > o; o++)
                    if (o in t && t[o] === e) return o
            }
            return -1
        },
        merge: function(e, t) {
            for (var o = +t.length, i = 0, n = e.length; o > i;) e[n++] = t[i++];
            if (o !== o)
                for (; void 0 !== t[i];) e[n++] = t[i++];
            return e.length = n, e
        },
        grep: function(e, t, o) {
            for (var i, n = [], r = 0, s = e.length, a = !o; s > r; r++) i = !t(e[r], r), i !== a && n.push(e[r]);
            return n
        },
        map: function(e, t, i) {
            var n, r = 0,
                s = e.length,
                a = o(e),
                l = [];
            if (a)
                for (; s > r; r++) n = t(e[r], r, i), null != n && l.push(n);
            else
                for (r in e) n = t(e[r], r, i), null != n && l.push(n);
            return Q.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var o, i, n;
            return "string" == typeof t && (n = e[t], t = e, e = n), re.isFunction(e) ? (o = Z.call(arguments, 2), i = function() {
                return e.apply(t || this, o.concat(Z.call(arguments)))
            }, i.guid = e.guid = e.guid || re.guid++, i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ie
    }), re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        J["[object " + t + "]"] = t.toLowerCase()
    });
    var de = function(e) {
        function t(e, t, o, i) {
            var n, r, s, a, l, c, u, f, m, g;
            if ((t ? t.ownerDocument || t : R) !== A && M(t), t = t || A, o = o || [], !e || "string" != typeof e) return o;
            if (1 !== (a = t.nodeType) && 9 !== a) return [];
            if (D && !i) {
                if (n = ye.exec(e))
                    if (s = n[1]) {
                        if (9 === a) {
                            if (r = t.getElementById(s), !r || !r.parentNode) return o;
                            if (r.id === s) return o.push(r), o
                        } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(s)) && q(t, r) && r.id === s) return o.push(r), o
                    } else {
                        if (n[2]) return J.apply(o, t.getElementsByTagName(e)), o;
                        if ((s = n[3]) && k.getElementsByClassName && t.getElementsByClassName) return J.apply(o, t.getElementsByClassName(s)), o
                    }
                if (k.qsa && (!j || !j.test(e))) {
                    if (f = u = _, m = t, g = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (c = p(e), (u = t.getAttribute("id")) ? f = u.replace(be, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = c.length; l--;) c[l] = f + h(c[l]);
                        m = we.test(e) && d(t.parentNode) || t, g = c.join(",")
                    }
                    if (g) try {
                        return J.apply(o, m.querySelectorAll(g)), o
                    } catch (v) {} finally {
                        u || t.removeAttribute("id")
                    }
                }
            }
            return x(e.replace(le, "$1"), t, o, i)
        }

        function o() {
            function e(o, i) {
                return t.push(o + " ") > S.cacheLength && delete e[t.shift()], e[o + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[_] = !0, e
        }

        function n(e) {
            var t = A.createElement("div");
            try {
                return !!e(t)
            } catch (o) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function r(e, t) {
            for (var o = e.split("|"), i = e.length; i--;) S.attrHandle[o[i]] = t
        }

        function s(e, t) {
            var o = t && e,
                i = o && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (i) return i;
            if (o)
                for (; o = o.nextSibling;)
                    if (o === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function(t) {
                var o = t.nodeName.toLowerCase();
                return "input" === o && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var o = t.nodeName.toLowerCase();
                return ("input" === o || "button" === o) && t.type === e
            }
        }

        function c(e) {
            return i(function(t) {
                return t = +t, i(function(o, i) {
                    for (var n, r = e([], o.length, t), s = r.length; s--;) o[n = r[s]] && (o[n] = !(i[n] = o[n]))
                })
            })
        }

        function d(e) {
            return e && typeof e.getElementsByTagName !== U && e
        }

        function u() {}

        function p(e, o) {
            var i, n, r, s, a, l, c, d = F[e + " "];
            if (d) return o ? 0 : d.slice(0);
            for (a = e, l = [], c = S.preFilter; a;) {
                (!i || (n = ce.exec(a))) && (n && (a = a.slice(n[0].length) || a), l.push(r = [])), i = !1, (n = de.exec(a)) && (i = n.shift(), r.push({
                    value: i,
                    type: n[0].replace(le, " ")
                }), a = a.slice(i.length));
                for (s in S.filter) !(n = fe[s].exec(a)) || c[s] && !(n = c[s](n)) || (i = n.shift(), r.push({
                    value: i,
                    type: s,
                    matches: n
                }), a = a.slice(i.length));
                if (!i) break
            }
            return o ? a.length : a ? t.error(e) : F(e, l).slice(0)
        }

        function h(e) {
            for (var t = 0, o = e.length, i = ""; o > t; t++) i += e[t].value;
            return i
        }

        function f(e, t, o) {
            var i = t.dir,
                n = o && "parentNode" === i,
                r = W++;
            return t.first ? function(t, o, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || n) return e(t, o, r)
            } : function(t, o, s) {
                var a, l, c = [I, r];
                if (s) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || n) && e(t, o, s)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || n) {
                            if (l = t[_] || (t[_] = {}), (a = l[i]) && a[0] === I && a[1] === r) return c[2] = a[2];
                            if (l[i] = c, c[2] = e(t, o, s)) return !0
                        }
            }
        }

        function m(e) {
            return e.length > 1 ? function(t, o, i) {
                for (var n = e.length; n--;)
                    if (!e[n](t, o, i)) return !1;
                return !0
            } : e[0]
        }

        function g(e, t, o, i, n) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; l > a; a++)(r = e[a]) && (!o || o(r, i, n)) && (s.push(r), c && t.push(a));
            return s
        }

        function v(e, t, o, n, r, s) {
            return n && !n[_] && (n = v(n)), r && !r[_] && (r = v(r, s)), i(function(i, s, a, l) {
                var c, d, u, p = [],
                    h = [],
                    f = s.length,
                    m = i || b(t || "*", a.nodeType ? [a] : a, []),
                    v = !e || !i && t ? m : g(m, p, e, a, l),
                    y = o ? r || (i ? e : f || n) ? [] : s : v;
                if (o && o(v, y, a, l), n)
                    for (c = g(y, h), n(c, [], a, l), d = c.length; d--;)(u = c[d]) && (y[h[d]] = !(v[h[d]] = u));
                if (i) {
                    if (r || e) {
                        if (r) {
                            for (c = [], d = y.length; d--;)(u = y[d]) && c.push(v[d] = u);
                            r(null, y = [], c, l)
                        }
                        for (d = y.length; d--;)(u = y[d]) && (c = r ? te.call(i, u) : p[d]) > -1 && (i[c] = !(s[c] = u))
                    }
                } else y = g(y === s ? y.splice(f, y.length) : y), r ? r(null, s, y, l) : J.apply(s, y)
            })
        }

        function y(e) {
            for (var t, o, i, n = e.length, r = S.relative[e[0].type], s = r || S.relative[" "], a = r ? 1 : 0, l = f(function(e) {
                    return e === t
                }, s, !0), c = f(function(e) {
                    return te.call(t, e) > -1
                }, s, !0), d = [function(e, o, i) {
                    return !r && (i || o !== z) || ((t = o).nodeType ? l(e, o, i) : c(e, o, i))
                }]; n > a; a++)
                if (o = S.relative[e[a].type]) d = [f(m(d), o)];
                else {
                    if (o = S.filter[e[a].type].apply(null, e[a].matches), o[_]) {
                        for (i = ++a; n > i && !S.relative[e[i].type]; i++);
                        return v(a > 1 && m(d), a > 1 && h(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(le, "$1"), o, i > a && y(e.slice(a, i)), n > i && y(e = e.slice(i)), n > i && h(e))
                    }
                    d.push(o)
                }
            return m(d)
        }

        function w(e, o) {
            var n = o.length > 0,
                r = e.length > 0,
                s = function(i, s, a, l, c) {
                    var d, u, p, h = 0,
                        f = "0",
                        m = i && [],
                        v = [],
                        y = z,
                        w = i || r && S.find.TAG("*", c),
                        b = I += null == y ? 1 : Math.random() || .1,
                        x = w.length;
                    for (c && (z = s !== A && s); f !== x && null != (d = w[f]); f++) {
                        if (r && d) {
                            for (u = 0; p = e[u++];)
                                if (p(d, s, a)) {
                                    l.push(d);
                                    break
                                }
                            c && (I = b)
                        }
                        n && ((d = !p && d) && h--, i && m.push(d))
                    }
                    if (h += f, n && f !== h) {
                        for (u = 0; p = o[u++];) p(m, v, s, a);
                        if (i) {
                            if (h > 0)
                                for (; f--;) m[f] || v[f] || (v[f] = K.call(l));
                            v = g(v)
                        }
                        J.apply(l, v), c && !i && v.length > 0 && h + o.length > 1 && t.uniqueSort(l)
                    }
                    return c && (I = b, z = y), m
                };
            return n ? i(s) : s
        }

        function b(e, o, i) {
            for (var n = 0, r = o.length; r > n; n++) t(e, o[n], i);
            return i
        }

        function x(e, t, o, i) {
            var n, r, s, a, l, c = p(e);
            if (!i && 1 === c.length) {
                if (r = c[0] = c[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && k.getById && 9 === t.nodeType && D && S.relative[r[1].type]) {
                    if (t = (S.find.ID(s.matches[0].replace(xe, Te), t) || [])[0], !t) return o;
                    e = e.slice(r.shift().value.length)
                }
                for (n = fe.needsContext.test(e) ? 0 : r.length; n-- && (s = r[n], !S.relative[a = s.type]);)
                    if ((l = S.find[a]) && (i = l(s.matches[0].replace(xe, Te), we.test(r[0].type) && d(t.parentNode) || t))) {
                        if (r.splice(n, 1), e = i.length && h(r), !e) return J.apply(o, i), o;
                        break
                    }
            }
            return N(e, c)(i, t, !D, o, we.test(e) && d(t.parentNode) || t), o
        }
        var T, k, S, C, E, N, z, L, $, M, A, H, D, j, O, P, q, _ = "sizzle" + -new Date,
            R = e.document,
            I = 0,
            W = 0,
            B = o(),
            F = o(),
            X = o(),
            Y = function(e, t) {
                return e === t && ($ = !0), 0
            },
            U = "undefined",
            V = 1 << 31,
            Z = {}.hasOwnProperty,
            Q = [],
            K = Q.pop,
            G = Q.push,
            J = Q.push,
            ee = Q.slice,
            te = Q.indexOf || function(e) {
                for (var t = 0, o = this.length; o > t; t++)
                    if (this[t] === e) return t;
                return -1
            },
            oe = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ie = "[\\x20\\t\\r\\n\\f]",
            ne = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            re = ne.replace("w", "w#"),
            se = "\\[" + ie + "*(" + ne + ")" + ie + "*(?:([*^$|!~]?=)" + ie + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + re + ")|)|)" + ie + "*\\]",
            ae = ":(" + ne + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + se.replace(3, 8) + ")*)|.*)\\)|)",
            le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
            ce = new RegExp("^" + ie + "*," + ie + "*"),
            de = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
            ue = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
            pe = new RegExp(ae),
            he = new RegExp("^" + re + "$"),
            fe = {
                ID: new RegExp("^#(" + ne + ")"),
                CLASS: new RegExp("^\\.(" + ne + ")"),
                TAG: new RegExp("^(" + ne.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + se),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + oe + ")$", "i"),
                needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
            },
            me = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            we = /[+~]/,
            be = /'|\\/g,
            xe = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
            Te = function(e, t, o) {
                var i = "0x" + t - 65536;
                return i !== i || o ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            };
        try {
            J.apply(Q = ee.call(R.childNodes), R.childNodes), Q[R.childNodes.length].nodeType
        } catch (ke) {
            J = {
                apply: Q.length ? function(e, t) {
                    G.apply(e, ee.call(t))
                } : function(e, t) {
                    for (var o = e.length, i = 0; e[o++] = t[i++];);
                    e.length = o - 1
                }
            }
        }
        k = t.support = {}, E = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, M = t.setDocument = function(e) {
            var t, o = e ? e.ownerDocument || e : R,
                i = o.defaultView;
            return o !== A && 9 === o.nodeType && o.documentElement ? (A = o, H = o.documentElement, D = !E(o), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                M()
            }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                M()
            })), k.attributes = n(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), k.getElementsByTagName = n(function(e) {
                return e.appendChild(o.createComment("")), !e.getElementsByTagName("*").length
            }), k.getElementsByClassName = ve.test(o.getElementsByClassName) && n(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), k.getById = n(function(e) {
                return H.appendChild(e).id = _, !o.getElementsByName || !o.getElementsByName(_).length
            }), k.getById ? (S.find.ID = function(e, t) {
                if (typeof t.getElementById !== U && D) {
                    var o = t.getElementById(e);
                    return o && o.parentNode ? [o] : []
                }
            }, S.filter.ID = function(e) {
                var t = e.replace(xe, Te);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete S.find.ID, S.filter.ID = function(e) {
                var t = e.replace(xe, Te);
                return function(e) {
                    var o = typeof e.getAttributeNode !== U && e.getAttributeNode("id");
                    return o && o.value === t
                }
            }), S.find.TAG = k.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== U ? t.getElementsByTagName(e) : void 0
            } : function(e, t) {
                var o, i = [],
                    n = 0,
                    r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; o = r[n++];) 1 === o.nodeType && i.push(o);
                    return i
                }
                return r
            }, S.find.CLASS = k.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== U && D ? t.getElementsByClassName(e) : void 0
            }, O = [], j = [], (k.qsa = ve.test(o.querySelectorAll)) && (n(function(e) {
                e.innerHTML = "<select t=''><option selected=''></option></select>", e.querySelectorAll("[t^='']").length && j.push("[*^$]=" + ie + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || j.push("\\[" + ie + "*(?:value|" + oe + ")"), e.querySelectorAll(":checked").length || j.push(":checked")
            }), n(function(e) {
                var t = o.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && j.push("name" + ie + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || j.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), j.push(",.*:")
            })), (k.matchesSelector = ve.test(P = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && n(function(e) {
                k.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), O.push("!=", ae)
            }), j = j.length && new RegExp(j.join("|")), O = O.length && new RegExp(O.join("|")), t = ve.test(H.compareDocumentPosition), q = t || ve.test(H.contains) ? function(e, t) {
                var o = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(o.contains ? o.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, Y = t ? function(e, t) {
                if (e === t) return $ = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !k.sortDetached && t.compareDocumentPosition(e) === i ? e === o || e.ownerDocument === R && q(R, e) ? -1 : t === o || t.ownerDocument === R && q(R, t) ? 1 : L ? te.call(L, e) - te.call(L, t) : 0 : 4 & i ? -1 : 1)
            } : function(e, t) {
                if (e === t) return $ = !0, 0;
                var i, n = 0,
                    r = e.parentNode,
                    a = t.parentNode,
                    l = [e],
                    c = [t];
                if (!r || !a) return e === o ? -1 : t === o ? 1 : r ? -1 : a ? 1 : L ? te.call(L, e) - te.call(L, t) : 0;
                if (r === a) return s(e, t);
                for (i = e; i = i.parentNode;) l.unshift(i);
                for (i = t; i = i.parentNode;) c.unshift(i);
                for (; l[n] === c[n];) n++;
                return n ? s(l[n], c[n]) : l[n] === R ? -1 : c[n] === R ? 1 : 0
            }, o) : A
        }, t.matches = function(e, o) {
            return t(e, null, null, o)
        }, t.matchesSelector = function(e, o) {
            if ((e.ownerDocument || e) !== A && M(e), o = o.replace(ue, "='$1']"), !(!k.matchesSelector || !D || O && O.test(o) || j && j.test(o))) try {
                var i = P.call(e, o);
                if (i || k.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (n) {}
            return t(o, A, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== A && M(e), q(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== A && M(e);
            var o = S.attrHandle[t.toLowerCase()],
                i = o && Z.call(S.attrHandle, t.toLowerCase()) ? o(e, t, !D) : void 0;
            return void 0 !== i ? i : k.attributes || !D ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, o = [],
                i = 0,
                n = 0;
            if ($ = !k.detectDuplicates, L = !k.sortStable && e.slice(0), e.sort(Y), $) {
                for (; t = e[n++];) t === e[n] && (i = o.push(n));
                for (; i--;) e.splice(o[i], 1)
            }
            return L = null, e
        }, C = t.getText = function(e) {
            var t, o = "",
                i = 0,
                n = e.nodeType;
            if (n) {
                if (1 === n || 9 === n || 11 === n) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) o += C(e)
                } else if (3 === n || 4 === n) return e.nodeValue
            } else
                for (; t = e[i++];) o += C(t);
            return o
        }, S = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(xe, Te), e[3] = (e[4] || e[5] || "").replace(xe, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, o = !e[5] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : o && pe.test(o) && (t = p(o, !0)) && (t = o.indexOf(")", o.length - t) - o.length) && (e[0] = e[0].slice(0, t), e[2] = o.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(xe, Te).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = B[e + " "];
                    return t || (t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) && B(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== U && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, o, i) {
                    return function(n) {
                        var r = t.attr(n, e);
                        return null == r ? "!=" === o : o ? (r += "", "=" === o ? r === i : "!=" === o ? r !== i : "^=" === o ? i && 0 === r.indexOf(i) : "*=" === o ? i && r.indexOf(i) > -1 : "$=" === o ? i && r.slice(-i.length) === i : "~=" === o ? (" " + r + " ").indexOf(i) > -1 : "|=" === o ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, o, i, n) {
                    var r = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === i && 0 === n ? function(e) {
                        return !!e.parentNode
                    } : function(t, o, l) {
                        var c, d, u, p, h, f, m = r !== s ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !l && !a;
                        if (g) {
                            if (r) {
                                for (; m;) {
                                    for (u = t; u = u[m];)
                                        if (a ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                    f = m = "only" === e && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [s ? g.firstChild : g.lastChild], s && y) {
                                for (d = g[_] || (g[_] = {}), c = d[e] || [], h = c[0] === I && c[1], p = c[0] === I && c[2], u = h && g.childNodes[h]; u = ++h && u && u[m] || (p = h = 0) || f.pop();)
                                    if (1 === u.nodeType && ++p && u === t) {
                                        d[e] = [I, h, p];
                                        break
                                    }
                            } else if (y && (c = (t[_] || (t[_] = {}))[e]) && c[0] === I) p = c[1];
                            else
                                for (;
                                    (u = ++h && u && u[m] || (p = h = 0) || f.pop()) && ((a ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++p || (y && ((u[_] || (u[_] = {}))[e] = [I, p]), u !== t)););
                            return p -= n, p === i || p % i === 0 && p / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var n, r = S.pseudos[e] || S.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[_] ? r(o) : r.length > 1 ? (n = [e, e, "", o], S.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, n = r(e, o), s = n.length; s--;) i = te.call(e, n[s]), e[i] = !(t[i] = n[s])
                    }) : function(e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        o = [],
                        n = N(e.replace(le, "$1"));
                    return n[_] ? i(function(e, t, o, i) {
                        for (var r, s = n(e, null, i, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                    }) : function(e, i, r) {
                        return t[0] = e, n(t, null, r, o), !o.pop()
                    }
                }),
                has: i(function(e) {
                    return function(o) {
                        return t(e, o).length > 0
                    }
                }),
                contains: i(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }),
                lang: i(function(e) {
                    return he.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, Te).toLowerCase(),
                        function(t) {
                            var o;
                            do
                                if (o = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return o = o.toLowerCase(), o === e || 0 === o.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var o = e.location && e.location.hash;
                    return o && o.slice(1) === t.id
                },
                root: function(e) {
                    return e === H
                },
                focus: function(e) {
                    return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !S.pseudos.empty(e)
                },
                header: function(e) {
                    return ge.test(e.nodeName)
                },
                input: function(e) {
                    return me.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, o) {
                    return [0 > o ? o + t : o]
                }),
                even: c(function(e, t) {
                    for (var o = 0; t > o; o += 2) e.push(o);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var o = 1; t > o; o += 2) e.push(o);
                    return e
                }),
                lt: c(function(e, t, o) {
                    for (var i = 0 > o ? o + t : o; --i >= 0;) e.push(i);
                    return e
                }),
                gt: c(function(e, t, o) {
                    for (var i = 0 > o ? o + t : o; ++i < t;) e.push(i);
                    return e
                })
            }
        }, S.pseudos.nth = S.pseudos.eq;
        for (T in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) S.pseudos[T] = a(T);
        for (T in {
                submit: !0,
                reset: !0
            }) S.pseudos[T] = l(T);
        return u.prototype = S.filters = S.pseudos, S.setFilters = new u, N = t.compile = function(e, t) {
            var o, i = [],
                n = [],
                r = X[e + " "];
            if (!r) {
                for (t || (t = p(e)), o = t.length; o--;) r = y(t[o]), r[_] ? i.push(r) : n.push(r);
                r = X(e, w(n, i))
            }
            return r
        }, k.sortStable = _.split("").sort(Y).join("") === _, k.detectDuplicates = !!$, M(), k.sortDetached = n(function(e) {
            return 1 & e.compareDocumentPosition(A.createElement("div"))
        }), n(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(e, t, o) {
            return o ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), k.attributes && n(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || r("value", function(e, t, o) {
            return o || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), n(function(e) {
            return null == e.getAttribute("disabled")
        }) || r(oe, function(e, t, o) {
            var i;
            return o ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    re.find = de, re.expr = de.selectors, re.expr[":"] = re.expr.pseudos, re.unique = de.uniqueSort, re.text = de.getText, re.isXMLDoc = de.isXML, re.contains = de.contains;
    var ue = re.expr.match.needsContext,
        pe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        he = /^.[^:#\[\.,]*$/;
    re.filter = function(e, t, o) {
        var i = t[0];
        return o && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? re.find.matchesSelector(i, e) ? [i] : [] : re.find.matches(e, re.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, re.fn.extend({
        find: function(e) {
            var t, o = [],
                i = this,
                n = i.length;
            if ("string" != typeof e) return this.pushStack(re(e).filter(function() {
                for (t = 0; n > t; t++)
                    if (re.contains(i[t], this)) return !0
            }));
            for (t = 0; n > t; t++) re.find(e, i[t], o);
            return o = this.pushStack(n > 1 ? re.unique(o) : o), o.selector = this.selector ? this.selector + " " + e : e, o
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && ue.test(e) ? re(e) : e || [], !1).length
        }
    });
    var fe, me = e.document,
        ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ve = re.fn.init = function(e, t) {
            var o, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (o = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ge.exec(e), !o || !o[1] && t) return !t || t.jquery ? (t || fe).find(e) : this.constructor(t).find(e);
                if (o[1]) {
                    if (t = t instanceof re ? t[0] : t, re.merge(this, re.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : me, !0)), pe.test(o[1]) && re.isPlainObject(t))
                        for (o in t) re.isFunction(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                    return this
                }
                if (i = me.getElementById(o[2]), i && i.parentNode) {
                    if (i.id !== o[2]) return fe.find(e);
                    this.length = 1, this[0] = i
                }
                return this.context = me, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : re.isFunction(e) ? "undefined" != typeof fe.ready ? fe.ready(e) : e(re) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), re.makeArray(e, this))
        };
    ve.prototype = re.fn, fe = re(me);
    var ye = /^(?:parents|prev(?:Until|All))/,
        we = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    re.extend({
        dir: function(e, t, o) {
            for (var i = [], n = e[t]; n && 9 !== n.nodeType && (void 0 === o || 1 !== n.nodeType || !re(n).is(o));) 1 === n.nodeType && i.push(n), n = n[t];
            return i
        },
        sibling: function(e, t) {
            for (var o = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && o.push(e);
            return o
        }
    }), re.fn.extend({
        has: function(e) {
            var t, o = re(e, this),
                i = o.length;
            return this.filter(function() {
                for (t = 0; i > t; t++)
                    if (re.contains(this, o[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var o, i = 0, n = this.length, r = [], s = ue.test(e) || "string" != typeof e ? re(e, t || this.context) : 0; n > i; i++)
                for (o = this[i]; o && o !== t; o = o.parentNode)
                    if (o.nodeType < 11 && (s ? s.index(o) > -1 : 1 === o.nodeType && re.find.matchesSelector(o, e))) {
                        r.push(o);
                        break
                    }
            return this.pushStack(r.length > 1 ? re.unique(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? re.inArray(this[0], re(e)) : re.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(re.unique(re.merge(this.get(), re(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), re.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return re.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, o) {
            return re.dir(e, "parentNode", o)
        },
        next: function(e) {
            return n(e, "nextSibling")
        },
        prev: function(e) {
            return n(e, "previousSibling")
        },
        nextAll: function(e) {
            return re.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return re.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, o) {
            return re.dir(e, "nextSibling", o)
        },
        prevUntil: function(e, t, o) {
            return re.dir(e, "previousSibling", o)
        },
        siblings: function(e) {
            return re.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return re.sibling(e.firstChild)
        },
        contents: function(e) {
            return re.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : re.merge([], e.childNodes)
        }
    }, function(e, t) {
        re.fn[e] = function(o, i) {
            var n = re.map(this, t, o);
            return "Until" !== e.slice(-5) && (i = o), i && "string" == typeof i && (n = re.filter(i, n)), this.length > 1 && (we[e] || (n = re.unique(n)), ye.test(e) && (n = n.reverse())), this.pushStack(n)
        }
    });
    var be = /\S+/g,
        xe = {};
    re.Callbacks = function(e) {
        e = "string" == typeof e ? xe[e] || r(e) : re.extend({}, e);
        var t, o, i, n, s, a, l = [],
            c = !e.once && [],
            d = function(r) {
                for (o = e.memory && r, i = !0, s = a || 0, a = 0, n = l.length, t = !0; l && n > s; s++)
                    if (l[s].apply(r[0], r[1]) === !1 && e.stopOnFalse) {
                        o = !1;
                        break
                    }
                t = !1, l && (c ? c.length && d(c.shift()) : o ? l = [] : u.disable())
            },
            u = {
                add: function() {
                    if (l) {
                        var i = l.length;
                        ! function r(t) {
                            re.each(t, function(t, o) {
                                var i = re.type(o);
                                "function" === i ? e.unique && u.has(o) || l.push(o) : o && o.length && "string" !== i && r(o)
                            })
                        }(arguments), t ? n = l.length : o && (a = i, d(o))
                    }
                    return this
                },
                remove: function() {
                    return l && re.each(arguments, function(e, o) {
                        for (var i;
                            (i = re.inArray(o, l, i)) > -1;) l.splice(i, 1), t && (n >= i && n--, s >= i && s--)
                    }), this
                },
                has: function(e) {
                    return e ? re.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], n = 0, this
                },
                disable: function() {
                    return l = c = o = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return c = void 0, o || u.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(e, o) {
                    return !l || i && !c || (o = o || [], o = [e, o.slice ? o.slice() : o], t ? c.push(o) : d(o)), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return u
    }, re.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", re.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", re.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", re.Callbacks("memory")]
                ],
                o = "pending",
                i = {
                    state: function() {
                        return o
                    },
                    always: function() {
                        return n.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return re.Deferred(function(o) {
                            re.each(t, function(t, r) {
                                var s = re.isFunction(e[t]) && e[t];
                                n[r[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && re.isFunction(e.promise) ? e.promise().done(o.resolve).fail(o.reject).progress(o.notify) : o[r[0] + "With"](this === i ? o.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? re.extend(e, i) : i
                    }
                },
                n = {};
            return i.pipe = i.then, re.each(t, function(e, r) {
                var s = r[2],
                    a = r[3];
                i[r[1]] = s.add, a && s.add(function() {
                    o = a
                }, t[1 ^ e][2].disable, t[2][2].lock), n[r[0]] = function() {
                    return n[r[0] + "With"](this === n ? i : this, arguments), this
                }, n[r[0] + "With"] = s.fireWith
            }), i.promise(n), e && e.call(n, n), n
        },
        when: function(e) {
            var t, o, i, n = 0,
                r = Z.call(arguments),
                s = r.length,
                a = 1 !== s || e && re.isFunction(e.promise) ? s : 0,
                l = 1 === a ? e : re.Deferred(),
                c = function(e, o, i) {
                    return function(n) {
                        o[e] = this, i[e] = arguments.length > 1 ? Z.call(arguments) : n, i === t ? l.notifyWith(o, i) : --a || l.resolveWith(o, i)
                    }
                };
            if (s > 1)
                for (t = new Array(s), o = new Array(s), i = new Array(s); s > n; n++) r[n] && re.isFunction(r[n].promise) ? r[n].promise().done(c(n, i, r)).fail(l.reject).progress(c(n, o, t)) : --a;
            return a || l.resolveWith(i, r), l.promise()
        }
    });
    var Te;
    re.fn.ready = function(e) {
        return re.ready.promise().done(e), this
    }, re.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? re.readyWait++ : re.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--re.readyWait : !re.isReady) {
                if (!me.body) return setTimeout(re.ready);
                re.isReady = !0, e !== !0 && --re.readyWait > 0 || (Te.resolveWith(me, [re]), re.fn.trigger && re(me).trigger("ready").off("ready"))
            }
        }
    }), re.ready.promise = function(t) {
        if (!Te)
            if (Te = re.Deferred(), "complete" === me.readyState) setTimeout(re.ready);
            else if (me.addEventListener) me.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1);
        else {
            me.attachEvent("onreadystatechange", a), e.attachEvent("onload", a);
            var o = !1;
            try {
                o = null == e.frameElement && me.documentElement
            } catch (i) {}
            o && o.doScroll && ! function n() {
                if (!re.isReady) {
                    try {
                        o.doScroll("left")
                    } catch (e) {
                        return setTimeout(n, 50)
                    }
                    s(), re.ready()
                }
            }()
        }
        return Te.promise(t)
    };
    var ke, Se = "undefined";
    for (ke in re(ie)) break;
    ie.ownLast = "0" !== ke, ie.inlineBlockNeedsLayout = !1, re(function() {
            var e, t, o = me.getElementsByTagName("body")[0];
            o && (e = me.createElement("div"), e.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", t = me.createElement("div"), o.appendChild(e).appendChild(t), typeof t.style.zoom !== Se && (t.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (ie.inlineBlockNeedsLayout = 3 === t.offsetWidth) && (o.style.zoom = 1)), o.removeChild(e), e = t = null)
        }),
        function() {
            var e = me.createElement("div");
            if (null == ie.deleteExpando) {
                ie.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    ie.deleteExpando = !1
                }
            }
            e = null
        }(), re.acceptData = function(e) {
            var t = re.noData[(e.nodeName + " ").toLowerCase()],
                o = +e.nodeType || 1;
            return 1 !== o && 9 !== o ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ee = /([A-Z])/g;
    re.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? re.cache[e[re.expando]] : e[re.expando], !!e && !c(e)
        },
        data: function(e, t, o) {
            return d(e, t, o)
        },
        removeData: function(e, t) {
            return u(e, t)
        },
        _data: function(e, t, o) {
            return d(e, t, o, !0)
        },
        _removeData: function(e, t) {
            return u(e, t, !0)
        }
    }), re.fn.extend({
        data: function(e, t) {
            var o, i, n, r = this[0],
                s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (n = re.data(r), 1 === r.nodeType && !re._data(r, "parsedAttrs"))) {
                    for (o = s.length; o--;) i = s[o].name, 0 === i.indexOf("data-") && (i = re.camelCase(i.slice(5)), l(r, i, n[i]));
                    re._data(r, "parsedAttrs", !0)
                }
                return n
            }
            return "object" == typeof e ? this.each(function() {
                re.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                re.data(this, e, t)
            }) : r ? l(r, e, re.data(r, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                re.removeData(this, e)
            })
        }
    }), re.extend({
        queue: function(e, t, o) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = re._data(e, t), o && (!i || re.isArray(o) ? i = re._data(e, t, re.makeArray(o)) : i.push(o)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var o = re.queue(e, t),
                i = o.length,
                n = o.shift(),
                r = re._queueHooks(e, t),
                s = function() {
                    re.dequeue(e, t)
                };
            "inprogress" === n && (n = o.shift(), i--), n && ("fx" === t && o.unshift("inprogress"), delete r.stop, n.call(e, s, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var o = t + "queueHooks";
            return re._data(e, o) || re._data(e, o, {
                empty: re.Callbacks("once memory").add(function() {
                    re._removeData(e, t + "queue"), re._removeData(e, o)
                })
            })
        }
    }), re.fn.extend({
        queue: function(e, t) {
            var o = 2;
            return "string" != typeof e && (t = e, e = "fx", o--), arguments.length < o ? re.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var o = re.queue(this, e, t);
                re._queueHooks(this, e), "fx" === e && "inprogress" !== o[0] && re.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                re.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var o, i = 1,
                n = re.Deferred(),
                r = this,
                s = this.length,
                a = function() {
                    --i || n.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) o = re._data(r[s], e + "queueHooks"), o && o.empty && (i++, o.empty.add(a));
            return a(), n.promise(t)
        }
    });
    var Ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ze = ["Top", "Right", "Bottom", "Left"],
        Le = function(e, t) {
            return e = t || e, "none" === re.css(e, "display") || !re.contains(e.ownerDocument, e)
        },
        $e = re.access = function(e, t, o, i, n, r, s) {
            var a = 0,
                l = e.length,
                c = null == o;
            if ("object" === re.type(o)) {
                n = !0;
                for (a in o) re.access(e, t, a, o[a], !0, r, s)
            } else if (void 0 !== i && (n = !0, re.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, o) {
                    return c.call(re(e), o)
                })), t))
                for (; l > a; a++) t(e[a], o, s ? i : i.call(e[a], a, t(e[a], o)));
            return n ? e : c ? t.call(e) : l ? t(e[0], o) : r
        },
        Me = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = me.createDocumentFragment(),
            t = me.createElement("div"),
            o = me.createElement("input");
        if (t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a>", ie.leadingWhitespace = 3 === t.firstChild.nodeType, ie.tbody = !t.getElementsByTagName("tbody").length, ie.htmlSerialize = !!t.getElementsByTagName("link").length, ie.html5Clone = "<:nav></:nav>" !== me.createElement("nav").cloneNode(!0).outerHTML, o.type = "checkbox", o.checked = !0, e.appendChild(o), ie.appendChecked = o.checked, t.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ie.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                ie.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == ie.deleteExpando) {
            ie.deleteExpando = !0;
            try {
                delete t.test
            } catch (i) {
                ie.deleteExpando = !1
            }
        }
        e = t = o = null
    }(),
    function() {
        var t, o, i = me.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) o = "on" + t, (ie[t + "Bubbles"] = o in e) || (i.setAttribute(o, "t"), ie[t + "Bubbles"] = i.attributes[o].expando === !1);
        i = null
    }();
    var Ae = /^(?:input|select|textarea)$/i,
        He = /^key/,
        De = /^(?:mouse|contextmenu)|click/,
        je = /^(?:focusinfocus|focusoutblur)$/,
        Oe = /^([^.]*)(?:\.(.+)|)$/;
    re.event = {
        global: {},
        add: function(e, t, o, i, n) {
            var r, s, a, l, c, d, u, p, h, f, m, g = re._data(e);
            if (g) {
                for (o.handler && (l = o, o = l.handler, n = l.selector), o.guid || (o.guid = re.guid++), (s = g.events) || (s = g.events = {}), (d = g.handle) || (d = g.handle = function(e) {
                        return typeof re === Se || e && re.event.triggered === e.type ? void 0 : re.event.dispatch.apply(d.elem, arguments)
                    }, d.elem = e), t = (t || "").match(be) || [""], a = t.length; a--;) r = Oe.exec(t[a]) || [], h = m = r[1], f = (r[2] || "").split(".").sort(), h && (c = re.event.special[h] || {}, h = (n ? c.delegateType : c.bindType) || h, c = re.event.special[h] || {}, u = re.extend({
                    type: h,
                    origType: m,
                    data: i,
                    handler: o,
                    guid: o.guid,
                    selector: n,
                    needsContext: n && re.expr.match.needsContext.test(n),
                    namespace: f.join(".")
                }, l), (p = s[h]) || (p = s[h] = [], p.delegateCount = 0, c.setup && c.setup.call(e, i, f, d) !== !1 || (e.addEventListener ? e.addEventListener(h, d, !1) : e.attachEvent && e.attachEvent("on" + h, d))), c.add && (c.add.call(e, u), u.handler.guid || (u.handler.guid = o.guid)), n ? p.splice(p.delegateCount++, 0, u) : p.push(u), re.event.global[h] = !0);
                e = null
            }
        },
        remove: function(e, t, o, i, n) {
            var r, s, a, l, c, d, u, p, h, f, m, g = re.hasData(e) && re._data(e);
            if (g && (d = g.events)) {
                for (t = (t || "").match(be) || [""], c = t.length; c--;)
                    if (a = Oe.exec(t[c]) || [], h = m = a[1], f = (a[2] || "").split(".").sort(), h) {
                        for (u = re.event.special[h] || {}, h = (i ? u.delegateType : u.bindType) || h, p = d[h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = p.length; r--;) s = p[r], !n && m !== s.origType || o && o.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (p.splice(r, 1), s.selector && p.delegateCount--, u.remove && u.remove.call(e, s));
                        l && !p.length && (u.teardown && u.teardown.call(e, f, g.handle) !== !1 || re.removeEvent(e, h, g.handle), delete d[h])
                    } else
                        for (h in d) re.event.remove(e, h + t[c], o, i, !0);
                re.isEmptyObject(d) && (delete g.handle, re._removeData(e, "events"))
            }
        },
        trigger: function(t, o, i, n) {
            var r, s, a, l, c, d, u, p = [i || me],
                h = te.call(t, "type") ? t.type : t,
                f = te.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = d = i = i || me, 3 !== i.nodeType && 8 !== i.nodeType && !je.test(h + re.event.triggered) && (h.indexOf(".") >= 0 && (f = h.split("."), h = f.shift(), f.sort()), s = h.indexOf(":") < 0 && "on" + h, t = t[re.expando] ? t : new re.Event(h, "object" == typeof t && t), t.isTrigger = n ? 2 : 3, t.namespace = f.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), o = null == o ? [t] : re.makeArray(o, [t]), c = re.event.special[h] || {}, n || !c.trigger || c.trigger.apply(i, o) !== !1)) {
                if (!n && !c.noBubble && !re.isWindow(i)) {
                    for (l = c.delegateType || h, je.test(l + h) || (a = a.parentNode); a; a = a.parentNode) p.push(a), d = a;
                    d === (i.ownerDocument || me) && p.push(d.defaultView || d.parentWindow || e)
                }
                for (u = 0;
                    (a = p[u++]) && !t.isPropagationStopped();) t.type = u > 1 ? l : c.bindType || h, r = (re._data(a, "events") || {})[t.type] && re._data(a, "handle"), r && r.apply(a, o), r = s && a[s], r && r.apply && re.acceptData(a) && (t.result = r.apply(a, o), t.result === !1 && t.preventDefault());
                if (t.type = h, !n && !t.isDefaultPrevented() && (!c._default || c._default.apply(p.pop(), o) === !1) && re.acceptData(i) && s && i[h] && !re.isWindow(i)) {
                    d = i[s], d && (i[s] = null), re.event.triggered = h;
                    try {
                        i[h]()
                    } catch (m) {}
                    re.event.triggered = void 0, d && (i[s] = d)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = re.event.fix(e);
            var t, o, i, n, r, s = [],
                a = Z.call(arguments),
                l = (re._data(this, "events") || {})[e.type] || [],
                c = re.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (s = re.event.handlers.call(this, e, l), t = 0;
                    (n = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = n.elem, r = 0;
                        (i = n.handlers[r++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, o = ((re.event.special[i.origType] || {}).handle || i.handler).apply(n.elem, a), void 0 !== o && (e.result = o) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var o, i, n, r, s = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (n = [], r = 0; a > r; r++) i = t[r], o = i.selector + " ", void 0 === n[o] && (n[o] = i.needsContext ? re(o, this).index(l) >= 0 : re.find(o, this, null, [l]).length), n[o] && n.push(i);
                        n.length && s.push({
                            elem: l,
                            handlers: n
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        fix: function(e) {
            if (e[re.expando]) return e;
            var t, o, i, n = e.type,
                r = e,
                s = this.fixHooks[n];
            for (s || (this.fixHooks[n] = s = De.test(n) ? this.mouseHooks : He.test(n) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new re.Event(r), t = i.length; t--;) o = i[t], e[o] = r[o];
            return e.target || (e.target = r.srcElement || me), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, r) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var o, i, n, r = t.button,
                    s = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || me, n = i.documentElement, o = i.body, e.pageX = t.clientX + (n && n.scrollLeft || o && o.scrollLeft || 0) - (n && n.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (n && n.scrollTop || o && o.scrollTop || 0) - (n && n.clientTop || o && o.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== f() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return re.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return re.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, o, i) {
            var n = re.extend(new re.Event, o, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? re.event.trigger(n, null, t) : re.event.dispatch.call(t, n), n.isDefaultPrevented() && o.preventDefault()
        }
    }, re.removeEvent = me.removeEventListener ? function(e, t, o) {
        e.removeEventListener && e.removeEventListener(t, o, !1)
    } : function(e, t, o) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === Se && (e[i] = null), e.detachEvent(i, o))
    }, re.Event = function(e, t) {
        return this instanceof re.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && (e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault()) ? p : h) : this.type = e, t && re.extend(this, t), this.timeStamp = e && e.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(e, t)
    }, re.Event.prototype = {
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = p, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = p, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = p, this.stopPropagation()
        }
    }, re.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        re.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var o, i = this,
                    n = e.relatedTarget,
                    r = e.handleObj;
                return (!n || n !== i && !re.contains(i, n)) && (e.type = r.origType, o = r.handler.apply(this, arguments), e.type = t), o
            }
        }
    }), ie.submitBubbles || (re.event.special.submit = {
        setup: function() {
            return re.nodeName(this, "form") ? !1 : void re.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    o = re.nodeName(t, "input") || re.nodeName(t, "button") ? t.form : void 0;
                o && !re._data(o, "submitBubbles") && (re.event.add(o, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), re._data(o, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && re.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return re.nodeName(this, "form") ? !1 : void re.event.remove(this, "._submit")
        }
    }), ie.changeBubbles || (re.event.special.change = {
        setup: function() {
            return Ae.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (re.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), re.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), re.event.simulate("change", this, e, !0)
            })), !1) : void re.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Ae.test(t.nodeName) && !re._data(t, "changeBubbles") && (re.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || re.event.simulate("change", this.parentNode, e, !0)
                }), re._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return re.event.remove(this, "._change"), !Ae.test(this.nodeName)
        }
    }), ie.focusinBubbles || re.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var o = function(e) {
            re.event.simulate(t, e.target, re.event.fix(e), !0)
        };
        re.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    n = re._data(i, t);
                n || i.addEventListener(e, o, !0), re._data(i, t, (n || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    n = re._data(i, t) - 1;
                n ? re._data(i, t, n) : (i.removeEventListener(e, o, !0), re._removeData(i, t))
            }
        }
    }), re.fn.extend({
        on: function(e, t, o, i, n) {
            var r, s;
            if ("object" == typeof e) {
                "string" != typeof t && (o = o || t, t = void 0);
                for (r in e) this.on(r, t, o, e[r], n);
                return this
            }
            if (null == o && null == i ? (i = t, o = t = void 0) : null == i && ("string" == typeof t ? (i = o, o = void 0) : (i = o, o = t, t = void 0)), i === !1) i = h;
            else if (!i) return this;
            return 1 === n && (s = i, i = function(e) {
                return re().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = re.guid++)), this.each(function() {
                re.event.add(this, e, i, o, t)
            })
        },
        one: function(e, t, o, i) {
            return this.on(e, t, o, i, 1)
        },
        off: function(e, t, o) {
            var i, n;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, re(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (n in e) this.off(n, t, e[n]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (o = t, t = void 0), o === !1 && (o = h), this.each(function() {
                re.event.remove(this, e, o, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                re.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var o = this[0];
            return o ? re.event.trigger(e, t, o, !0) : void 0
        }
    });
    var Pe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        qe = / jQuery\d+="(?:null|\d+)"/g,
        _e = new RegExp("<(?:" + Pe + ")[\\s/>]", "i"),
        Re = /^\s+/,
        Ie = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        We = /<([\w:]+)/,
        Be = /<tbody/i,
        Fe = /<|&#?\w+;/,
        Xe = /<(?:script|style|link)/i,
        Ye = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ue = /^$|\/(?:java|ecma)script/i,
        Ve = /^true\/(.*)/,
        Ze = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Qe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Ke = m(me),
        Ge = Ke.appendChild(me.createElement("div"));
    Qe.optgroup = Qe.option, Qe.tbody = Qe.tfoot = Qe.colgroup = Qe.caption = Qe.thead, Qe.th = Qe.td, re.extend({
        clone: function(e, t, o) {
            var i, n, r, s, a, l = re.contains(e.ownerDocument, e);
            if (ie.html5Clone || re.isXMLDoc(e) || !_e.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (Ge.innerHTML = e.outerHTML, Ge.removeChild(r = Ge.firstChild)), !(ie.noCloneEvent && ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || re.isXMLDoc(e)))
                for (i = g(r), a = g(e), s = 0; null != (n = a[s]); ++s) i[s] && k(n, i[s]);
            if (t)
                if (o)
                    for (a = a || g(e), i = i || g(r), s = 0; null != (n = a[s]); s++) T(n, i[s]);
                else T(e, r);
            return i = g(r, "script"), i.length > 0 && x(i, !l && g(e, "script")), i = a = n = null, r
        },
        buildFragment: function(e, t, o, i) {
            for (var n, r, s, a, l, c, d, u = e.length, p = m(t), h = [], f = 0; u > f; f++)
                if (r = e[f], r || 0 === r)
                    if ("object" === re.type(r)) re.merge(h, r.nodeType ? [r] : r);
                    else if (Fe.test(r)) {
                for (a = a || p.appendChild(t.createElement("div")), l = (We.exec(r) || ["", ""])[1].toLowerCase(), d = Qe[l] || Qe._default, a.innerHTML = d[1] + r.replace(Ie, "<$1></$2>") + d[2], n = d[0]; n--;) a = a.lastChild;
                if (!ie.leadingWhitespace && Re.test(r) && h.push(t.createTextNode(Re.exec(r)[0])), !ie.tbody)
                    for (r = "table" !== l || Be.test(r) ? "<table>" !== d[1] || Be.test(r) ? 0 : a : a.firstChild, n = r && r.childNodes.length; n--;) re.nodeName(c = r.childNodes[n], "tbody") && !c.childNodes.length && r.removeChild(c);
                for (re.merge(h, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = p.lastChild
            } else h.push(t.createTextNode(r));
            for (a && p.removeChild(a), ie.appendChecked || re.grep(g(h, "input"), v), f = 0; r = h[f++];)
                if ((!i || -1 === re.inArray(r, i)) && (s = re.contains(r.ownerDocument, r), a = g(p.appendChild(r), "script"), s && x(a), o))
                    for (n = 0; r = a[n++];) Ue.test(r.type || "") && o.push(r);
            return a = null, p
        },
        cleanData: function(e, t) {
            for (var o, i, n, r, s = 0, a = re.expando, l = re.cache, c = ie.deleteExpando, d = re.event.special; null != (o = e[s]); s++)
                if ((t || re.acceptData(o)) && (n = o[a], r = n && l[n])) {
                    if (r.events)
                        for (i in r.events) d[i] ? re.event.remove(o, i) : re.removeEvent(o, i, r.handle);
                    l[n] && (delete l[n], c ? delete o[a] : typeof o.removeAttribute !== Se ? o.removeAttribute(a) : o[a] = null, V.push(n))
                }
        }
    }), re.fn.extend({
        text: function(e) {
            return $e(this, function(e) {
                return void 0 === e ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || me).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var o, i = e ? re.filter(e, this) : this, n = 0; null != (o = i[n]); n++) t || 1 !== o.nodeType || re.cleanData(g(o)), o.parentNode && (t && re.contains(o.ownerDocument, o) && x(g(o, "script")), o.parentNode.removeChild(o));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && re.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && re.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return re.clone(this, e, t)
            })
        },
        html: function(e) {
            return $e(this, function(e) {
                var t = this[0] || {},
                    o = 0,
                    i = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(qe, "") : void 0;
                if (!("string" != typeof e || Xe.test(e) || !ie.htmlSerialize && _e.test(e) || !ie.leadingWhitespace && Re.test(e) || Qe[(We.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Ie, "<$1></$2>");
                    try {
                        for (; i > o; o++) t = this[o] || {}, 1 === t.nodeType && (re.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (n) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, re.cleanData(g(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = Q.apply([], e);
            var o, i, n, r, s, a, l = 0,
                c = this.length,
                d = this,
                u = c - 1,
                p = e[0],
                h = re.isFunction(p);
            if (h || c > 1 && "string" == typeof p && !ie.checkClone && Ye.test(p)) return this.each(function(o) {
                var i = d.eq(o);
                h && (e[0] = p.call(this, o, i.html())), i.domManip(e, t)
            });
            if (c && (a = re.buildFragment(e, this[0].ownerDocument, !1, this), o = a.firstChild, 1 === a.childNodes.length && (a = o), o)) {
                for (r = re.map(g(a, "script"), w), n = r.length; c > l; l++) i = a, l !== u && (i = re.clone(i, !0, !0), n && re.merge(r, g(i, "script"))), t.call(this[l], i, l);
                if (n)
                    for (s = r[r.length - 1].ownerDocument, re.map(r, b), l = 0; n > l; l++) i = r[l], Ue.test(i.type || "") && !re._data(i, "globalEval") && re.contains(s, i) && (i.src ? re._evalUrl && re._evalUrl(i.src) : re.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ze, "")));
                a = o = null
            }
            return this
        }
    }), re.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        re.fn[e] = function(e) {
            for (var o, i = 0, n = [], r = re(e), s = r.length - 1; s >= i; i++) o = i === s ? this : this.clone(!0), re(r[i])[t](o), K.apply(n, o.get());
            return this.pushStack(n)
        }
    });
    var Je, et = {};
    ! function() {
        var e, t, o = me.createElement("div"),
            i = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        o.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = o.getElementsByTagName("a")[0], e.style.cssText = "float:left;opacity:.5", ie.opacity = /^0.5/.test(e.style.opacity), ie.cssFloat = !!e.style.cssFloat, o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === o.style.backgroundClip, e = o = null, ie.shrinkWrapBlocks = function() {
            var e, o, n, r;
            if (null == t) {
                if (e = me.getElementsByTagName("body")[0], !e) return;
                r = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", o = me.createElement("div"), n = me.createElement("div"), e.appendChild(o).appendChild(n), t = !1, typeof n.style.zoom !== Se && (n.style.cssText = i + ";width:1px;padding:1px;zoom:1", n.innerHTML = "<div></div>", n.firstChild.style.width = "5px", t = 3 !== n.offsetWidth), e.removeChild(o), e = o = n = null
            }
            return t
        }
    }();
    var tt, ot, it = /^margin/,
        nt = new RegExp("^(" + Ne + ")(?!px)[a-z%]+$", "i"),
        rt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (tt = function(e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null)
    }, ot = function(e, t, o) {
        var i, n, r, s, a = e.style;
        return o = o || tt(e), s = o ? o.getPropertyValue(t) || o[t] : void 0, o && ("" !== s || re.contains(e.ownerDocument, e) || (s = re.style(e, t)), nt.test(s) && it.test(t) && (i = a.width, n = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s,
            s = o.width, a.width = i, a.minWidth = n, a.maxWidth = r)), void 0 === s ? s : s + ""
    }) : me.documentElement.currentStyle && (tt = function(e) {
        return e.currentStyle
    }, ot = function(e, t, o) {
        var i, n, r, s, a = e.style;
        return o = o || tt(e), s = o ? o[t] : void 0, null == s && a && a[t] && (s = a[t]), nt.test(s) && !rt.test(t) && (i = a.left, n = e.runtimeStyle, r = n && n.left, r && (n.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : s, s = a.pixelLeft + "px", a.left = i, r && (n.left = r)), void 0 === s ? s : s + "" || "auto"
    }), ! function() {
        function t() {
            var t, o, i = me.getElementsByTagName("body")[0];
            i && (t = me.createElement("div"), o = me.createElement("div"), t.style.cssText = c, i.appendChild(t).appendChild(o), o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", re.swap(i, null != i.style.zoom ? {
                zoom: 1
            } : {}, function() {
                n = 4 === o.offsetWidth
            }), r = !0, s = !1, a = !0, e.getComputedStyle && (s = "1%" !== (e.getComputedStyle(o, null) || {}).top, r = "4px" === (e.getComputedStyle(o, null) || {
                width: "4px"
            }).width), i.removeChild(t), o = i = null)
        }
        var o, i, n, r, s, a, l = me.createElement("div"),
            c = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
            d = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", o = l.getElementsByTagName("a")[0], o.style.cssText = "float:left;opacity:.5", ie.opacity = /^0.5/.test(o.style.opacity), ie.cssFloat = !!o.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === l.style.backgroundClip, o = l = null, re.extend(ie, {
            reliableHiddenOffsets: function() {
                if (null != i) return i;
                var e, t, o, n = me.createElement("div"),
                    r = me.getElementsByTagName("body")[0];
                return r ? (n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = me.createElement("div"), e.style.cssText = c, r.appendChild(e).appendChild(n), n.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = n.getElementsByTagName("td"), t[0].style.cssText = "padding:0;margin:0;border:0;display:none", o = 0 === t[0].offsetHeight, t[0].style.display = "", t[1].style.display = "none", i = o && 0 === t[0].offsetHeight, r.removeChild(e), n = r = null, i) : void 0
            },
            boxSizing: function() {
                return null == n && t(), n
            },
            boxSizingReliable: function() {
                return null == r && t(), r
            },
            pixelPosition: function() {
                return null == s && t(), s
            },
            reliableMarginRight: function() {
                var t, o, i, n;
                if (null == a && e.getComputedStyle) {
                    if (t = me.getElementsByTagName("body")[0], !t) return;
                    o = me.createElement("div"), i = me.createElement("div"), o.style.cssText = c, t.appendChild(o).appendChild(i), n = i.appendChild(me.createElement("div")), n.style.cssText = i.style.cssText = d, n.style.marginRight = n.style.width = "0", i.style.width = "1px", a = !parseFloat((e.getComputedStyle(n, null) || {}).marginRight), t.removeChild(o)
                }
                return a
            }
        })
    }(), re.swap = function(e, t, o, i) {
        var n, r, s = {};
        for (r in t) s[r] = e.style[r], e.style[r] = t[r];
        n = o.apply(e, i || []);
        for (r in t) e.style[r] = s[r];
        return n
    };
    var st = /alpha\([^)]*\)/i,
        at = /opacity\s*=\s*([^)]*)/,
        lt = /^(none|table(?!-c[ea]).+)/,
        ct = new RegExp("^(" + Ne + ")(.*)$", "i"),
        dt = new RegExp("^([+-])=(" + Ne + ")", "i"),
        ut = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        pt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        ht = ["Webkit", "O", "Moz", "ms"];
    re.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var o = ot(e, "opacity");
                        return "" === o ? "1" : o
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ie.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, o, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var n, r, s, a = re.camelCase(t),
                    l = e.style;
                if (t = re.cssProps[a] || (re.cssProps[a] = N(l, a)), s = re.cssHooks[t] || re.cssHooks[a], void 0 === o) return s && "get" in s && void 0 !== (n = s.get(e, !1, i)) ? n : l[t];
                if (r = typeof o, "string" === r && (n = dt.exec(o)) && (o = (n[1] + 1) * n[2] + parseFloat(re.css(e, t)), r = "number"), null != o && o === o && ("number" !== r || re.cssNumber[a] || (o += "px"), ie.clearCloneStyle || "" !== o || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(s && "set" in s && void 0 === (o = s.set(e, o, i))))) try {
                    l[t] = "", l[t] = o
                } catch (c) {}
            }
        },
        css: function(e, t, o, i) {
            var n, r, s, a = re.camelCase(t);
            return t = re.cssProps[a] || (re.cssProps[a] = N(e.style, a)), s = re.cssHooks[t] || re.cssHooks[a], s && "get" in s && (r = s.get(e, !0, o)), void 0 === r && (r = ot(e, t, i)), "normal" === r && t in pt && (r = pt[t]), "" === o || o ? (n = parseFloat(r), o === !0 || re.isNumeric(n) ? n || 0 : r) : r
        }
    }), re.each(["height", "width"], function(e, t) {
        re.cssHooks[t] = {
            get: function(e, o, i) {
                return o ? 0 === e.offsetWidth && lt.test(re.css(e, "display")) ? re.swap(e, ut, function() {
                    return M(e, t, i)
                }) : M(e, t, i) : void 0
            },
            set: function(e, o, i) {
                var n = i && tt(e);
                return L(e, o, i ? $(e, t, i, ie.boxSizing() && "border-box" === re.css(e, "boxSizing", !1, n), n) : 0)
            }
        }
    }), ie.opacity || (re.cssHooks.opacity = {
        get: function(e, t) {
            return at.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var o = e.style,
                i = e.currentStyle,
                n = re.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                r = i && i.filter || o.filter || "";
            o.zoom = 1, (t >= 1 || "" === t) && "" === re.trim(r.replace(st, "")) && o.removeAttribute && (o.removeAttribute("filter"), "" === t || i && !i.filter) || (o.filter = st.test(r) ? r.replace(st, n) : r + " " + n)
        }
    }), re.cssHooks.marginRight = E(ie.reliableMarginRight, function(e, t) {
        return t ? re.swap(e, {
            display: "inline-block"
        }, ot, [e, "marginRight"]) : void 0
    }), re.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        re.cssHooks[e + t] = {
            expand: function(o) {
                for (var i = 0, n = {}, r = "string" == typeof o ? o.split(" ") : [o]; 4 > i; i++) n[e + ze[i] + t] = r[i] || r[i - 2] || r[0];
                return n
            }
        }, it.test(e) || (re.cssHooks[e + t].set = L)
    }), re.fn.extend({
        css: function(e, t) {
            return $e(this, function(e, t, o) {
                var i, n, r = {},
                    s = 0;
                if (re.isArray(t)) {
                    for (i = tt(e), n = t.length; n > s; s++) r[t[s]] = re.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== o ? re.style(e, t, o) : re.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return z(this, !0)
        },
        hide: function() {
            return z(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Le(this) ? re(this).show() : re(this).hide()
            })
        }
    }), re.Tween = A, A.prototype = {
        constructor: A,
        init: function(e, t, o, i, n, r) {
            this.elem = e, this.prop = o, this.easing = n || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (re.cssNumber[o] ? "" : "px")
        },
        cur: function() {
            var e = A.propHooks[this.prop];
            return e && e.get ? e.get(this) : A.propHooks._default.get(this)
        },
        run: function(e) {
            var t, o = A.propHooks[this.prop];
            return this.pos = t = this.options.duration ? re.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), o && o.set ? o.set(this) : A.propHooks._default.set(this), this
        }
    }, A.prototype.init.prototype = A.prototype, A.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = re.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                re.fx.step[e.prop] ? re.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[re.cssProps[e.prop]] || re.cssHooks[e.prop]) ? re.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, A.propHooks.scrollTop = A.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, re.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, re.fx = A.prototype.init, re.fx.step = {};
    var ft, mt, gt = /^(?:toggle|show|hide)$/,
        vt = new RegExp("^(?:([+-])=|)(" + Ne + ")([a-z%]*)$", "i"),
        yt = /queueHooks$/,
        wt = [O],
        bt = {
            "*": [function(e, t) {
                var o = this.createTween(e, t),
                    i = o.cur(),
                    n = vt.exec(t),
                    r = n && n[3] || (re.cssNumber[e] ? "" : "px"),
                    s = (re.cssNumber[e] || "px" !== r && +i) && vt.exec(re.css(o.elem, e)),
                    a = 1,
                    l = 20;
                if (s && s[3] !== r) {
                    r = r || s[3], n = n || [], s = +i || 1;
                    do a = a || ".5", s /= a, re.style(o.elem, e, s + r); while (a !== (a = o.cur() / i) && 1 !== a && --l)
                }
                return n && (s = o.start = +s || +i || 0, o.unit = r, o.end = n[1] ? s + (n[1] + 1) * n[2] : +n[2]), o
            }]
        };
    re.Animation = re.extend(q, {
            tweener: function(e, t) {
                re.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var o, i = 0, n = e.length; n > i; i++) o = e[i], bt[o] = bt[o] || [], bt[o].unshift(t)
            },
            prefilter: function(e, t) {
                t ? wt.unshift(e) : wt.push(e)
            }
        }), re.speed = function(e, t, o) {
            var i = e && "object" == typeof e ? re.extend({}, e) : {
                complete: o || !o && t || re.isFunction(e) && e,
                duration: e,
                easing: o && t || t && !re.isFunction(t) && t
            };
            return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                re.isFunction(i.old) && i.old.call(this), i.queue && re.dequeue(this, i.queue)
            }, i
        }, re.fn.extend({
            fadeTo: function(e, t, o, i) {
                return this.filter(Le).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, o, i)
            },
            animate: function(e, t, o, i) {
                var n = re.isEmptyObject(e),
                    r = re.speed(t, o, i),
                    s = function() {
                        var t = q(this, re.extend({}, e), r);
                        (n || re._data(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, n || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function(e, t, o) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(o)
                };
                return "string" != typeof e && (o = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        n = null != e && e + "queueHooks",
                        r = re.timers,
                        s = re._data(this);
                    if (n) s[n] && s[n].stop && i(s[n]);
                    else
                        for (n in s) s[n] && s[n].stop && yt.test(n) && i(s[n]);
                    for (n = r.length; n--;) r[n].elem !== this || null != e && r[n].queue !== e || (r[n].anim.stop(o), t = !1, r.splice(n, 1));
                    (t || !o) && re.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, o = re._data(this),
                        i = o[e + "queue"],
                        n = o[e + "queueHooks"],
                        r = re.timers,
                        s = i ? i.length : 0;
                    for (o.finish = !0, re.queue(this, e, []), n && n.stop && n.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete o.finish
                })
            }
        }), re.each(["toggle", "show", "hide"], function(e, t) {
            var o = re.fn[t];
            re.fn[t] = function(e, i, n) {
                return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(D(t, !0), e, i, n)
            }
        }), re.each({
            slideDown: D("show"),
            slideUp: D("hide"),
            slideToggle: D("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            re.fn[e] = function(e, o, i) {
                return this.animate(t, e, o, i)
            }
        }), re.timers = [], re.fx.tick = function() {
            var e, t = re.timers,
                o = 0;
            for (ft = re.now(); o < t.length; o++) e = t[o], e() || t[o] !== e || t.splice(o--, 1);
            t.length || re.fx.stop(), ft = void 0
        }, re.fx.timer = function(e) {
            re.timers.push(e), e() ? re.fx.start() : re.timers.pop()
        }, re.fx.interval = 13, re.fx.start = function() {
            mt || (mt = setInterval(re.fx.tick, re.fx.interval))
        }, re.fx.stop = function() {
            clearInterval(mt), mt = null
        }, re.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, re.fn.delay = function(e, t) {
            return e = re.fx ? re.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, o) {
                var i = setTimeout(t, e);
                o.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        function() {
            var e, t, o, i, n = me.createElement("div");
            n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], o = me.createElement("select"), i = o.appendChild(me.createElement("option")), t = n.getElementsByTagName("input")[0], e.style.cssText = "top:1px", ie.getSetAttribute = "t" !== n.className, ie.style = /top/.test(e.getAttribute("style")), ie.hrefNormalized = "/a" === e.getAttribute("href"), ie.checkOn = !!t.value, ie.optSelected = i.selected, ie.enctype = !!me.createElement("form").enctype, o.disabled = !0, ie.optDisabled = !i.disabled, t = me.createElement("input"), t.setAttribute("value", ""), ie.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ie.radioValue = "t" === t.value, e = t = o = i = n = null
        }();
    var xt = /\r/g;
    re.fn.extend({
        val: function(e) {
            var t, o, i, n = this[0];
            return arguments.length ? (i = re.isFunction(e), this.each(function(o) {
                var n;
                1 === this.nodeType && (n = i ? e.call(this, o, re(this).val()) : e, null == n ? n = "" : "number" == typeof n ? n += "" : re.isArray(n) && (n = re.map(n, function(e) {
                    return null == e ? "" : e + ""
                })), t = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, n, "value") || (this.value = n))
            })) : n ? (t = re.valHooks[n.type] || re.valHooks[n.nodeName.toLowerCase()], t && "get" in t && void 0 !== (o = t.get(n, "value")) ? o : (o = n.value, "string" == typeof o ? o.replace(xt, "") : null == o ? "" : o)) : void 0
        }
    }), re.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = re.find.attr(e, "value");
                    return null != t ? t : re.text(e)
                }
            },
            select: {
                get: function(e) {
                    for (var t, o, i = e.options, n = e.selectedIndex, r = "select-one" === e.type || 0 > n, s = r ? null : [], a = r ? n + 1 : i.length, l = 0 > n ? a : r ? n : 0; a > l; l++)
                        if (o = i[l], !(!o.selected && l !== n || (ie.optDisabled ? o.disabled : null !== o.getAttribute("disabled")) || o.parentNode.disabled && re.nodeName(o.parentNode, "optgroup"))) {
                            if (t = re(o).val(), r) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var o, i, n = e.options, r = re.makeArray(t), s = n.length; s--;)
                        if (i = n[s], re.inArray(re.valHooks.option.get(i), r) >= 0) try {
                            i.selected = o = !0
                        } catch (a) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return o || (e.selectedIndex = -1), n
                }
            }
        }
    }), re.each(["radio", "checkbox"], function() {
        re.valHooks[this] = {
            set: function(e, t) {
                return re.isArray(t) ? e.checked = re.inArray(re(e).val(), t) >= 0 : void 0
            }
        }, ie.checkOn || (re.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Tt, kt, St = re.expr.attrHandle,
        Ct = /^(?:checked|selected)$/i,
        Et = ie.getSetAttribute,
        Nt = ie.input;
    re.fn.extend({
        attr: function(e, t) {
            return $e(this, re.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                re.removeAttr(this, e)
            })
        }
    }), re.extend({
        attr: function(e, t, o) {
            var i, n, r = e.nodeType;
            return e && 3 !== r && 8 !== r && 2 !== r ? typeof e.getAttribute === Se ? re.prop(e, t, o) : (1 === r && re.isXMLDoc(e) || (t = t.toLowerCase(), i = re.attrHooks[t] || (re.expr.match.bool.test(t) ? kt : Tt)), void 0 === o ? i && "get" in i && null !== (n = i.get(e, t)) ? n : (n = re.find.attr(e, t), null == n ? void 0 : n) : null !== o ? i && "set" in i && void 0 !== (n = i.set(e, o, t)) ? n : (e.setAttribute(t, o + ""), o) : void re.removeAttr(e, t)) : void 0
        },
        removeAttr: function(e, t) {
            var o, i, n = 0,
                r = t && t.match(be);
            if (r && 1 === e.nodeType)
                for (; o = r[n++];) i = re.propFix[o] || o, re.expr.match.bool.test(o) ? Nt && Et || !Ct.test(o) ? e[i] = !1 : e[re.camelCase("default-" + o)] = e[i] = !1 : re.attr(e, o, ""), e.removeAttribute(Et ? o : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ie.radioValue && "radio" === t && re.nodeName(e, "input")) {
                        var o = e.value;
                        return e.setAttribute("type", t), o && (e.value = o), t
                    }
                }
            }
        }
    }), kt = {
        set: function(e, t, o) {
            return t === !1 ? re.removeAttr(e, o) : Nt && Et || !Ct.test(o) ? e.setAttribute(!Et && re.propFix[o] || o, o) : e[re.camelCase("default-" + o)] = e[o] = !0, o
        }
    }, re.each(re.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var o = St[t] || re.find.attr;
        St[t] = Nt && Et || !Ct.test(t) ? function(e, t, i) {
            var n, r;
            return i || (r = St[t], St[t] = n, n = null != o(e, t, i) ? t.toLowerCase() : null, St[t] = r), n
        } : function(e, t, o) {
            return o ? void 0 : e[re.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Nt && Et || (re.attrHooks.value = {
        set: function(e, t, o) {
            return re.nodeName(e, "input") ? void(e.defaultValue = t) : Tt && Tt.set(e, t, o)
        }
    }), Et || (Tt = {
        set: function(e, t, o) {
            var i = e.getAttributeNode(o);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(o)), i.value = t += "", "value" === o || t === e.getAttribute(o) ? t : void 0
        }
    }, St.id = St.name = St.coords = function(e, t, o) {
        var i;
        return o ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, re.valHooks.button = {
        get: function(e, t) {
            var o = e.getAttributeNode(t);
            return o && o.specified ? o.value : void 0
        },
        set: Tt.set
    }, re.attrHooks.contenteditable = {
        set: function(e, t, o) {
            Tt.set(e, "" === t ? !1 : t, o)
        }
    }, re.each(["width", "height"], function(e, t) {
        re.attrHooks[t] = {
            set: function(e, o) {
                return "" === o ? (e.setAttribute(t, "auto"), o) : void 0
            }
        }
    })), ie.style || (re.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var zt = /^(?:input|select|textarea|button|object)$/i,
        Lt = /^(?:a|area)$/i;
    re.fn.extend({
        prop: function(e, t) {
            return $e(this, re.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = re.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), re.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, o) {
            var i, n, r, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? (r = 1 !== s || !re.isXMLDoc(e), r && (t = re.propFix[t] || t, n = re.propHooks[t]), void 0 !== o ? n && "set" in n && void 0 !== (i = n.set(e, o, t)) ? i : e[t] = o : n && "get" in n && null !== (i = n.get(e, t)) ? i : e[t]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = re.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : zt.test(e.nodeName) || Lt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), ie.hrefNormalized || re.each(["href", "src"], function(e, t) {
        re.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ie.optSelected || (re.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        re.propFix[this.toLowerCase()] = this
    }), ie.enctype || (re.propFix.enctype = "encoding");
    var $t = /[\t\r\n\f]/g;
    re.fn.extend({
        addClass: function(e) {
            var t, o, i, n, r, s, a = 0,
                l = this.length,
                c = "string" == typeof e && e;
            if (re.isFunction(e)) return this.each(function(t) {
                re(this).addClass(e.call(this, t, this.className))
            });
            if (c)
                for (t = (e || "").match(be) || []; l > a; a++)
                    if (o = this[a], i = 1 === o.nodeType && (o.className ? (" " + o.className + " ").replace($t, " ") : " ")) {
                        for (r = 0; n = t[r++];) i.indexOf(" " + n + " ") < 0 && (i += n + " ");
                        s = re.trim(i), o.className !== s && (o.className = s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, o, i, n, r, s, a = 0,
                l = this.length,
                c = 0 === arguments.length || "string" == typeof e && e;
            if (re.isFunction(e)) return this.each(function(t) {
                re(this).removeClass(e.call(this, t, this.className))
            });
            if (c)
                for (t = (e || "").match(be) || []; l > a; a++)
                    if (o = this[a], i = 1 === o.nodeType && (o.className ? (" " + o.className + " ").replace($t, " ") : "")) {
                        for (r = 0; n = t[r++];)
                            for (; i.indexOf(" " + n + " ") >= 0;) i = i.replace(" " + n + " ", " ");
                        s = e ? re.trim(i) : "", o.className !== s && (o.className = s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var o = typeof e;
            return "boolean" == typeof t && "string" === o ? t ? this.addClass(e) : this.removeClass(e) : this.each(re.isFunction(e) ? function(o) {
                re(this).toggleClass(e.call(this, o, this.className, t), t)
            } : function() {
                if ("string" === o)
                    for (var t, i = 0, n = re(this), r = e.match(be) || []; t = r[i++];) n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
                else(o === Se || "boolean" === o) && (this.className && re._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : re._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", o = 0, i = this.length; i > o; o++)
                if (1 === this[o].nodeType && (" " + this[o].className + " ").replace($t, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        re.fn[t] = function(e, o) {
            return arguments.length > 0 ? this.on(t, null, e, o) : this.trigger(t)
        }
    }), re.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, o) {
            return this.on(e, null, t, o)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, o, i) {
            return this.on(t, e, o, i)
        },
        undelegate: function(e, t, o) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", o)
        }
    });
    var Mt = re.now(),
        At = /\?/,
        Ht = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    re.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var o, i = null,
            n = re.trim(t + "");
        return n && !re.trim(n.replace(Ht, function(e, t, n, r) {
            return o && t && (i = 0), 0 === i ? e : (o = n || t, i += !r - !n, "")
        })) ? Function("return " + n)() : re.error("Invalid JSON: " + t)
    }, re.parseXML = function(t) {
        var o, i;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (i = new DOMParser, o = i.parseFromString(t, "text/xml")) : (o = new ActiveXObject("Microsoft.XMLDOM"), o.async = "false", o.loadXML(t))
        } catch (n) {
            o = void 0
        }
        return o && o.documentElement && !o.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + t), o
    };
    var Dt, jt, Ot = /#.*$/,
        Pt = /([?&])_=[^&]*/,
        qt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        _t = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Rt = /^(?:GET|HEAD)$/,
        It = /^\/\//,
        Wt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Bt = {},
        Ft = {},
        Xt = "*/".concat("*");
    try {
        jt = location.href
    } catch (Yt) {
        jt = me.createElement("a"), jt.href = "", jt = jt.href
    }
    Dt = Wt.exec(jt.toLowerCase()) || [], re.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: jt,
            type: "GET",
            isLocal: _t.test(Dt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": re.parseJSON,
                "text xml": re.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? I(I(e, re.ajaxSettings), t) : I(re.ajaxSettings, e)
        },
        ajaxPrefilter: _(Bt),
        ajaxTransport: _(Ft),
        ajax: function(e, t) {
            function o(e, t, o, i) {
                var n, d, v, y, b, T = t;
                2 !== w && (w = 2, a && clearTimeout(a), c = void 0, s = i || "", x.readyState = e > 0 ? 4 : 0, n = e >= 200 && 300 > e || 304 === e, o && (y = W(u, x, o)), y = B(u, y, x, n), n ? (u.ifModified && (b = x.getResponseHeader("Last-Modified"), b && (re.lastModified[r] = b), b = x.getResponseHeader("etag"), b && (re.etag[r] = b)), 204 === e || "HEAD" === u.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, d = y.data, v = y.error, n = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || T) + "", n ? f.resolveWith(p, [d, T, x]) : f.rejectWith(p, [x, T, v]), x.statusCode(g), g = void 0, l && h.trigger(n ? "ajaxSuccess" : "ajaxError", [x, u, n ? d : v]), m.fireWith(p, [x, T]), l && (h.trigger("ajaxComplete", [x, u]), --re.active || re.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, n, r, s, a, l, c, d, u = re.ajaxSetup({}, t),
                p = u.context || u,
                h = u.context && (p.nodeType || p.jquery) ? re(p) : re.event,
                f = re.Deferred(),
                m = re.Callbacks("once memory"),
                g = u.statusCode || {},
                v = {},
                y = {},
                w = 0,
                b = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === w) {
                            if (!d)
                                for (d = {}; t = qt.exec(s);) d[t[1].toLowerCase()] = t[2];
                            t = d[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var o = e.toLowerCase();
                        return w || (e = y[o] = y[o] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return w || (u.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > w)
                                for (t in e) g[t] = [g[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || b;
                        return c && c.abort(t), o(0, t), this
                    }
                };
            if (f.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, u.url = ((e || u.url || jt) + "").replace(Ot, "").replace(It, Dt[1] + "//"), u.type = t.method || t.type || u.method || u.type, u.dataTypes = re.trim(u.dataType || "*").toLowerCase().match(be) || [""], null == u.crossDomain && (i = Wt.exec(u.url.toLowerCase()), u.crossDomain = !(!i || i[1] === Dt[1] && i[2] === Dt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Dt[3] || ("http:" === Dt[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = re.param(u.data, u.traditional)), R(Bt, u, t, x), 2 === w) return x;
            l = u.global, l && 0 === re.active++ && re.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !Rt.test(u.type), r = u.url, u.hasContent || (u.data && (r = u.url += (At.test(r) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = Pt.test(r) ? r.replace(Pt, "$1_=" + Mt++) : r + (At.test(r) ? "&" : "?") + "_=" + Mt++)), u.ifModified && (re.lastModified[r] && x.setRequestHeader("If-Modified-Since", re.lastModified[r]), re.etag[r] && x.setRequestHeader("If-None-Match", re.etag[r])), (u.data && u.hasContent && u.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", u.contentType), x.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Xt + "; q=0.01" : "") : u.accepts["*"]);
            for (n in u.headers) x.setRequestHeader(n, u.headers[n]);
            if (u.beforeSend && (u.beforeSend.call(p, x, u) === !1 || 2 === w)) return x.abort();
            b = "abort";
            for (n in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[n](u[n]);
            if (c = R(Ft, u, t, x)) {
                x.readyState = 1, l && h.trigger("ajaxSend", [x, u]), u.async && u.timeout > 0 && (a = setTimeout(function() {
                    x.abort("timeout")
                }, u.timeout));
                try {
                    w = 1, c.send(v, o)
                } catch (T) {
                    if (!(2 > w)) throw T;
                    o(-1, T)
                }
            } else o(-1, "No Transport");
            return x
        },
        getJSON: function(e, t, o) {
            return re.get(e, t, o, "json")
        },
        getScript: function(e, t) {
            return re.get(e, void 0, t, "script")
        }
    }), re.each(["get", "post"], function(e, t) {
        re[t] = function(e, o, i, n) {
            return re.isFunction(o) && (n = n || i, i = o, o = void 0), re.ajax({
                url: e,
                type: t,
                dataType: n,
                data: o,
                success: i
            })
        }
    }), re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        re.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), re._evalUrl = function(e) {
        return re.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, re.fn.extend({
        wrapAll: function(e) {
            if (re.isFunction(e)) return this.each(function(t) {
                re(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = re(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(re.isFunction(e) ? function(t) {
                re(this).wrapInner(e.call(this, t))
            } : function() {
                var t = re(this),
                    o = t.contents();
                o.length ? o.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = re.isFunction(e);
            return this.each(function(o) {
                re(this).wrapAll(t ? e.call(this, o) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
            }).end()
        }
    }), re.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ie.reliableHiddenOffsets() && "none" === (e.style && e.style.display || re.css(e, "display"))
    }, re.expr.filters.visible = function(e) {
        return !re.expr.filters.hidden(e)
    };
    var Ut = /%20/g,
        Vt = /\[\]$/,
        Zt = /\r?\n/g,
        Qt = /^(?:submit|button|image|reset|file)$/i,
        Kt = /^(?:input|select|textarea|keygen)/i;
    re.param = function(e, t) {
        var o, i = [],
            n = function(e, t) {
                t = re.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(e) || e.jquery && !re.isPlainObject(e)) re.each(e, function() {
            n(this.name, this.value)
        });
        else
            for (o in e) F(o, e[o], t, n);
        return i.join("&").replace(Ut, "+")
    }, re.fn.extend({
        serialize: function() {
            return re.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = re.prop(this, "elements");
                return e ? re.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !re(this).is(":disabled") && Kt.test(this.nodeName) && !Qt.test(e) && (this.checked || !Me.test(e))
            }).map(function(e, t) {
                var o = re(this).val();
                return null == o ? null : re.isArray(o) ? re.map(o, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Zt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: o.replace(Zt, "\r\n")
                }
            }).get()
        }
    }), re.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || Y()
    } : X;
    var Gt = 0,
        Jt = {},
        eo = re.ajaxSettings.xhr();
    e.ActiveXObject && re(e).on("unload", function() {
        for (var e in Jt) Jt[e](void 0, !0)
    }), ie.cors = !!eo && "withCredentials" in eo, eo = ie.ajax = !!eo, eo && re.ajaxTransport(function(e) {
        if (!e.crossDomain || ie.cors) {
            var t;
            return {
                send: function(o, i) {
                    var n, r = e.xhr(),
                        s = ++Gt;
                    if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (n in e.xhrFields) r[n] = e.xhrFields[n];
                    e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    for (n in o) void 0 !== o[n] && r.setRequestHeader(n, o[n] + "");
                    r.send(e.hasContent && e.data || null), t = function(o, n) {
                        var a, l, c;
                        if (t && (n || 4 === r.readyState))
                            if (delete Jt[s], t = void 0, r.onreadystatechange = re.noop, n) 4 !== r.readyState && r.abort();
                            else {
                                c = {}, a = r.status, "string" == typeof r.responseText && (c.text = r.responseText);
                                try {
                                    l = r.statusText
                                } catch (d) {
                                    l = ""
                                }
                                a || !e.isLocal || e.crossDomain ? 1223 === a && (a = 204) : a = c.text ? 200 : 404
                            }
                        c && i(a, l, c, r.getAllResponseHeaders())
                    }, e.async ? 4 === r.readyState ? setTimeout(t) : r.onreadystatechange = Jt[s] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }), re.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return re.globalEval(e), e
            }
        }
    }), re.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), re.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, o = me.head || re("head")[0] || me.documentElement;
            return {
                send: function(i, n) {
                    t = me.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, o) {
                        (o || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, o || n(200, "success"))
                    }, o.insertBefore(t, o.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var to = [],
        oo = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = to.pop() || re.expando + "_" + Mt++;
            return this[e] = !0, e
        }
    }), re.ajaxPrefilter("json jsonp", function(t, o, i) {
        var n, r, s, a = t.jsonp !== !1 && (oo.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && oo.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (n = t.jsonpCallback = re.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(oo, "$1" + n) : t.jsonp !== !1 && (t.url += (At.test(t.url) ? "&" : "?") + t.jsonp + "=" + n), t.converters["script json"] = function() {
            return s || re.error(n + " was not called"), s[0]
        }, t.dataTypes[0] = "json", r = e[n], e[n] = function() {
            s = arguments
        }, i.always(function() {
            e[n] = r, t[n] && (t.jsonpCallback = o.jsonpCallback, to.push(n)), s && re.isFunction(r) && r(s[0]), s = r = void 0
        }), "script") : void 0
    }), re.parseHTML = function(e, t, o) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (o = t, t = !1), t = t || me;
        var i = pe.exec(e),
            n = !o && [];
        return i ? [t.createElement(i[1])] : (i = re.buildFragment([e], t, n), n && n.length && re(n).remove(), re.merge([], i.childNodes))
    };
    var io = re.fn.load;
    re.fn.load = function(e, t, o) {
        if ("string" != typeof e && io) return io.apply(this, arguments);
        var i, n, r, s = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), re.isFunction(t) ? (o = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && re.ajax({
            url: e,
            type: r,
            dataType: "html",
            data: t
        }).done(function(e) {
            n = arguments, s.html(i ? re("<div>").append(re.parseHTML(e)).find(i) : e)
        }).complete(o && function(e, t) {
            s.each(o, n || [e.responseText, t, e])
        }), this
    }, re.expr.filters.animated = function(e) {
        return re.grep(re.timers, function(t) {
            return e === t.elem
        }).length
    };
    var no = e.document.documentElement;
    re.offset = {
        setOffset: function(e, t, o) {
            var i, n, r, s, a, l, c, d = re.css(e, "position"),
                u = re(e),
                p = {};
            "static" === d && (e.style.position = "relative"), a = u.offset(), r = re.css(e, "top"), l = re.css(e, "left"), c = ("absolute" === d || "fixed" === d) && re.inArray("auto", [r, l]) > -1, c ? (i = u.position(), s = i.top, n = i.left) : (s = parseFloat(r) || 0, n = parseFloat(l) || 0), re.isFunction(t) && (t = t.call(e, o, a)), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + n), "using" in t ? t.using.call(e, p) : u.css(p)
        }
    }, re.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                re.offset.setOffset(this, e, t)
            });
            var t, o, i = {
                    top: 0,
                    left: 0
                },
                n = this[0],
                r = n && n.ownerDocument;
            return r ? (t = r.documentElement, re.contains(t, n) ? (typeof n.getBoundingClientRect !== Se && (i = n.getBoundingClientRect()), o = U(r), {
                top: i.top + (o.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: i.left + (o.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, o = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === re.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), re.nodeName(e[0], "html") || (o = e.offset()), o.top += re.css(e[0], "borderTopWidth", !0), o.left += re.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - o.top - re.css(i, "marginTop", !0),
                    left: t.left - o.left - re.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || no; e && !re.nodeName(e, "html") && "static" === re.css(e, "position");) e = e.offsetParent;
                return e || no
            })
        }
    }), re.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var o = /Y/.test(t);
        re.fn[e] = function(i) {
            return $e(this, function(e, i, n) {
                var r = U(e);
                return void 0 === n ? r ? t in r ? r[t] : r.document.documentElement[i] : e[i] : void(r ? r.scrollTo(o ? re(r).scrollLeft() : n, o ? n : re(r).scrollTop()) : e[i] = n);
            }, e, i, arguments.length, null)
        }
    }), re.each(["top", "left"], function(e, t) {
        re.cssHooks[t] = E(ie.pixelPosition, function(e, o) {
            return o ? (o = ot(e, t), nt.test(o) ? re(e).position()[t] + "px" : o) : void 0
        })
    }), re.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        re.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(o, i) {
            re.fn[i] = function(i, n) {
                var r = arguments.length && (o || "boolean" != typeof i),
                    s = o || (i === !0 || n === !0 ? "margin" : "border");
                return $e(this, function(t, o, i) {
                    var n;
                    return re.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (n = t.documentElement, Math.max(t.body["scroll" + e], n["scroll" + e], t.body["offset" + e], n["offset" + e], n["client" + e])) : void 0 === i ? re.css(t, o, s) : re.style(t, o, i, s)
                }, t, r ? i : void 0, r, null)
            }
        })
    }), re.fn.size = function() {
        return this.length
    }, re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return re
    });
    var ro = e.jQuery,
        so = e.$;
    return re.noConflict = function(t) {
        return e.$ === re && (e.$ = so), t && e.jQuery === re && (e.jQuery = ro), re
    }, typeof t === Se && (e.jQuery = e.$ = re), re
}), ! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    "use strict";
    var t = window.Slick || {};
    t = function() {
        function t(t, i) {
            var n, r, s, a = this;
            if (a.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: e(t),
                    appendDots: e(t),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(e, t) {
                        return '<button type="button" data-role="none">' + (t + 1) + "</button>"
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0
                }, a.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1
                }, e.extend(a, a.initials), a.activeBreakpoint = null, a.animType = null, a.animProp = null, a.breakpoints = [], a.breakpointSettings = [], a.cssTransitions = !1, a.hidden = "hidden", a.paused = !1, a.positionProp = null, a.respondTo = null, a.rowCount = 1, a.shouldClick = !0, a.$slider = e(t), a.$slidesCache = null, a.transformType = null, a.transitionType = null, a.visibilityChange = "visibilitychange", a.windowWidth = 0, a.windowTimer = null, n = e(t).data("slick") || {}, a.options = e.extend({}, a.defaults, n, i), a.currentSlide = a.options.initialSlide, a.originalSettings = a.options, r = a.options.responsive || null, r && r.length > -1) {
                a.respondTo = a.options.respondTo || "window";
                for (s in r) r.hasOwnProperty(s) && (a.breakpoints.push(r[s].breakpoint), a.breakpointSettings[r[s].breakpoint] = r[s].settings);
                a.breakpoints.sort(function(e, t) {
                    return a.options.mobileFirst === !0 ? e - t : t - e
                })
            }
            "undefined" != typeof document.mozHidden ? (a.hidden = "mozHidden", a.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (a.hidden = "msHidden", a.visibilityChange = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (a.hidden = "webkitHidden", a.visibilityChange = "webkitvisibilitychange"), a.autoPlay = e.proxy(a.autoPlay, a), a.autoPlayClear = e.proxy(a.autoPlayClear, a), a.changeSlide = e.proxy(a.changeSlide, a), a.clickHandler = e.proxy(a.clickHandler, a), a.selectHandler = e.proxy(a.selectHandler, a), a.setPosition = e.proxy(a.setPosition, a), a.swipeHandler = e.proxy(a.swipeHandler, a), a.dragHandler = e.proxy(a.dragHandler, a), a.keyHandler = e.proxy(a.keyHandler, a), a.autoPlayIterator = e.proxy(a.autoPlayIterator, a), a.instanceUid = o++, a.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, a.init(), a.checkResponsive(!0)
        }
        var o = 0;
        return t
    }(), t.prototype.addSlide = t.prototype.slickAdd = function(t, o, i) {
        var n = this;
        if ("boolean" == typeof o) i = o, o = null;
        else if (0 > o || o >= n.slideCount) return !1;
        n.unload(), "number" == typeof o ? 0 === o && 0 === n.$slides.length ? e(t).appendTo(n.$slideTrack) : i ? e(t).insertBefore(n.$slides.eq(o)) : e(t).insertAfter(n.$slides.eq(o)) : i === !0 ? e(t).prependTo(n.$slideTrack) : e(t).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each(function(t, o) {
            e(o).attr("data-slick-index", t)
        }), n.$slidesCache = n.$slides, n.reinit()
    }, t.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed)
        }
    }, t.prototype.animateSlide = function(t, o) {
        var i = {},
            n = this;
        n.animateHeight(), n.options.rtl === !0 && n.options.vertical === !1 && (t = -t), n.transformsEnabled === !1 ? n.options.vertical === !1 ? n.$slideTrack.animate({
            left: t
        }, n.options.speed, n.options.easing, o) : n.$slideTrack.animate({
            top: t
        }, n.options.speed, n.options.easing, o) : n.cssTransitions === !1 ? (n.options.rtl === !0 && (n.currentLeft = -n.currentLeft), e({
            animStart: n.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: n.options.speed,
            easing: n.options.easing,
            step: function(e) {
                e = Math.ceil(e), n.options.vertical === !1 ? (i[n.animType] = "translate(" + e + "px, 0px)", n.$slideTrack.css(i)) : (i[n.animType] = "translate(0px," + e + "px)", n.$slideTrack.css(i))
            },
            complete: function() {
                o && o.call()
            }
        })) : (n.applyTransition(), t = Math.ceil(t), n.options.vertical === !1 ? i[n.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[n.animType] = "translate3d(0px," + t + "px, 0px)", n.$slideTrack.css(i), o && setTimeout(function() {
            n.disableTransition(), o.call()
        }, n.options.speed))
    }, t.prototype.asNavFor = function(t) {
        var o = this,
            i = null !== o.options.asNavFor ? e(o.options.asNavFor).slick("getSlick") : null;
        null !== i && i.slideHandler(t, !0)
    }, t.prototype.applyTransition = function(e) {
        var t = this,
            o = {};
        t.options.fade === !1 ? o[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : o[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(o) : t.$slides.eq(e).css(o)
    }, t.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer), e.slideCount > e.options.slidesToShow && e.paused !== !0 && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, t.prototype.autoPlayClear = function() {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer)
    }, t.prototype.autoPlayIterator = function() {
        var e = this;
        e.options.infinite === !1 ? 1 === e.direction ? (e.currentSlide + 1 === e.slideCount - 1 && (e.direction = 0), e.slideHandler(e.currentSlide + e.options.slidesToScroll)) : (e.currentSlide - 1 === 0 && (e.direction = 1), e.slideHandler(e.currentSlide - e.options.slidesToScroll)) : e.slideHandler(e.currentSlide + e.options.slidesToScroll)
    }, t.prototype.buildArrows = function() {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow = e(t.options.prevArrow), t.$nextArrow = e(t.options.nextArrow), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.appendTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled"))
    }, t.prototype.buildDots = function() {
        var t, o, i = this;
        if (i.options.dots === !0 && i.slideCount > i.options.slidesToShow) {
            for (o = '<ul class="' + i.options.dotsClass + '">', t = 0; t <= i.getDotCount(); t += 1) o += "<li>" + i.options.customPaging.call(this, i, t) + "</li>";
            o += "</ul>", i.$dots = e(o).appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, t.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, o) {
            e(o).attr("data-slick-index", t)
        }), t.$slidesCache = t.$slides, t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (t.options.centerMode === !0 || t.options.swipeToSlide === !0) && (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.options.accessibility === !0 && t.$list.prop("tabIndex", 0), t.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), t.options.draggable === !0 && t.$list.addClass("draggable")
    }, t.prototype.buildRows = function() {
        var e, t, o, i, n, r, s, a = this;
        if (i = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
            for (s = a.options.slidesPerRow * a.options.rows, n = Math.ceil(r.length / s), e = 0; n > e; e++) {
                var l = document.createElement("div");
                for (t = 0; t < a.options.rows; t++) {
                    var c = document.createElement("div");
                    for (o = 0; o < a.options.slidesPerRow; o++) {
                        var d = e * s + (t * a.options.slidesPerRow + o);
                        r.get(d) && c.appendChild(r.get(d))
                    }
                    l.appendChild(c)
                }
                i.appendChild(l)
            }
            a.$slider.html(i), a.$slider.children().children().children().width(100 / a.options.slidesPerRow + "%").css({
                display: "inline-block"
            })
        }
    }, t.prototype.checkResponsive = function(t) {
        var o, i, n, r = this,
            s = r.$slider.width(),
            a = window.innerWidth || e(window).width();
        if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = s : "min" === r.respondTo && (n = Math.min(a, s)), r.originalSettings.responsive && r.originalSettings.responsive.length > -1 && null !== r.originalSettings.responsive) {
            i = null;
            for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (r.originalSettings.mobileFirst === !1 ? n < r.breakpoints[o] && (i = r.breakpoints[o]) : n > r.breakpoints[o] && (i = r.breakpoints[o]));
            null !== i ? null !== r.activeBreakpoint ? i !== r.activeBreakpoint && (r.activeBreakpoint = i, "unslick" === r.breakpointSettings[i] ? r.unslick() : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[i]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh())) : (r.activeBreakpoint = i, "unslick" === r.breakpointSettings[i] ? r.unslick() : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[i]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh())) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh())
        }
    }, t.prototype.changeSlide = function(t, o) {
        var i, n, r, s = this,
            a = e(t.target);
        switch (a.is("a") && t.preventDefault(), r = s.slideCount % s.options.slidesToScroll !== 0, i = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
            case "previous":
                n = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - n, !1, o);
                break;
            case "next":
                n = 0 === i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + n, !1, o);
                break;
            case "index":
                var l = 0 === t.data.index ? 0 : t.data.index || e(t.target).parent().index() * s.options.slidesToScroll;
                s.slideHandler(s.checkNavigable(l), !1, o);
                break;
            default:
                return
        }
    }, t.prototype.checkNavigable = function(e) {
        var t, o, i = this;
        if (t = i.getNavigableIndexes(), o = 0, e > t[t.length - 1]) e = t[t.length - 1];
        else
            for (var n in t) {
                if (e < t[n]) {
                    e = o;
                    break
                }
                o = t[n]
            }
        return e
    }, t.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).off("click.slick", t.changeSlide), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && e("li", t.$dots).off("mouseenter.slick", t.setPaused.bind(t, !0)).off("mouseleave.slick", t.setPaused.bind(t, !1)), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), t.options.autoplay === !0 && e(document).off(t.visibilityChange, t.visibility), t.$list.off("mouseenter.slick", t.setPaused.bind(t, !0)), t.$list.off("mouseleave.slick", t.setPaused.bind(t, !1)), t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.cleanUpRows = function() {
        var e, t = this;
        t.options.rows > 1 && (e = t.$slides.children().children(), e.removeAttr("style"), t.$slider.html(e))
    }, t.prototype.clickHandler = function(e) {
        var t = this;
        t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, t.prototype.destroy = function() {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && "object" != typeof t.options.prevArrow && t.$prevArrow.remove(), t.$nextArrow && "object" != typeof t.options.nextArrow && t.$nextArrow.remove(), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible").attr("aria-hidden", "true").removeAttr("data-slick-index").css({
            position: "",
            left: "",
            top: "",
            zIndex: "",
            opacity: "",
            width: ""
        }), t.$slider.html(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized")
    }, t.prototype.disableTransition = function(e) {
        var t = this,
            o = {};
        o[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(o) : t.$slides.eq(e).css(o)
    }, t.prototype.fadeSlide = function(e, t) {
        var o = this;
        o.cssTransitions === !1 ? (o.$slides.eq(e).css({
            zIndex: 1e3
        }), o.$slides.eq(e).animate({
            opacity: 1
        }, o.options.speed, o.options.easing, t)) : (o.applyTransition(e), o.$slides.eq(e).css({
            opacity: 1,
            zIndex: 1e3
        }), t && setTimeout(function() {
            o.disableTransition(e), t.call()
        }, o.options.speed))
    }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
        var e = this;
        return e.currentSlide
    }, t.prototype.getDotCount = function() {
        var e = this,
            t = 0,
            o = 0,
            i = 0;
        if (e.options.infinite === !0) i = Math.ceil(e.slideCount / e.options.slidesToScroll);
        else if (e.options.centerMode === !0) i = e.slideCount;
        else
            for (; t < e.slideCount;) ++i, t = o + e.options.slidesToShow, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return i - 1
    }, t.prototype.getLeft = function(e) {
        var t, o, i, n = this,
            r = 0;
        return n.slideOffset = 0, o = n.$slides.first().outerHeight(), n.options.infinite === !0 ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, r = o * n.options.slidesToShow * -1), n.slideCount % n.options.slidesToScroll !== 0 && e + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (e > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (e - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (e - n.slideCount)) * o * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * o * -1))) : e + n.options.slidesToShow > n.slideCount && (n.slideOffset = (e + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (e + n.options.slidesToShow - n.slideCount) * o), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), n.options.centerMode === !0 && n.options.infinite === !0 ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : n.options.centerMode === !0 && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), t = n.options.vertical === !1 ? e * n.slideWidth * -1 + n.slideOffset : e * o * -1 + r, n.options.variableWidth === !0 && (i = n.$slideTrack.children(".slick-slide").eq(n.slideCount <= n.options.slidesToShow || n.options.infinite === !1 ? e : e + n.options.slidesToShow), t = i[0] ? -1 * i[0].offsetLeft : 0, n.options.centerMode === !0 && (i = n.$slideTrack.children(".slick-slide").eq(n.options.infinite === !1 ? e : e + n.options.slidesToShow + 1), t = i[0] ? -1 * i[0].offsetLeft : 0, t += (n.$list.width() - i.outerWidth()) / 2)), t
    }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
        var t = this;
        return t.options[e]
    }, t.prototype.getNavigableIndexes = function() {
        var e, t = this,
            o = 0,
            i = 0,
            n = [];
        for (t.options.infinite === !1 ? (e = t.slideCount - t.options.slidesToShow + 1, t.options.centerMode === !0 && (e = t.slideCount)) : (o = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); e > o;) n.push(o), o = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return n
    }, t.prototype.getSlick = function() {
        return this
    }, t.prototype.getSlideCount = function() {
        var t, o, i, n = this;
        return i = n.options.centerMode === !0 ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, n.options.swipeToSlide === !0 ? (n.$slideTrack.find(".slick-slide").each(function(t, r) {
            return r.offsetLeft - i + e(r).outerWidth() / 2 > -1 * n.swipeLeft ? (o = r, !1) : void 0
        }), t = Math.abs(e(o).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
    }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
        var o = this;
        o.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }, t.prototype.init = function() {
        var t = this;
        e(t.$slider).hasClass("slick-initialized") || (e(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots()), t.$slider.trigger("init", [t])
    }, t.prototype.initArrowEvents = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.on("click.slick", {
            message: "previous"
        }, e.changeSlide), e.$nextArrow.on("click.slick", {
            message: "next"
        }, e.changeSlide))
    }, t.prototype.initDotEvents = function() {
        var t = this;
        t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && e("li", t.$dots).on("mouseenter.slick", t.setPaused.bind(t, !0)).on("mouseleave.slick", t.setPaused.bind(t, !1))
    }, t.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), t.options.autoplay === !0 && e(document).on(t.visibilityChange, t.visibility.bind(t)), t.$list.on("mouseenter.slick", t.setPaused.bind(t, !0)), t.$list.on("mouseleave.slick", t.setPaused.bind(t, !1)), t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange.bind(t)), e(window).on("resize.slick.slick-" + t.instanceUid, t.resize.bind(t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.initUI = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show(), e.options.autoplay === !0 && e.autoPlay()
    }, t.prototype.keyHandler = function(e) {
        var t = this;
        37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({
            data: {
                message: "previous"
            }
        }) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({
            data: {
                message: "next"
            }
        })
    }, t.prototype.lazyLoad = function() {
        function t(t) {
            e("img[data-lazy]", t).each(function() {
                var t = e(this),
                    o = e(this).attr("data-lazy"),
                    i = document.createElement("img");
                i.onload = function() {
                    t.animate({
                        opacity: 1
                    }, 200)
                }, i.src = o, t.css({
                    opacity: 0
                }).attr("src", o).removeAttr("data-lazy").removeClass("slick-loading")
            })
        }
        var o, i, n, r, s = this;
        s.options.centerMode === !0 ? s.options.infinite === !0 ? (n = s.currentSlide + (s.options.slidesToShow / 2 + 1), r = n + s.options.slidesToShow + 2) : (n = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), r = 2 + (s.options.slidesToShow / 2 + 1) + s.currentSlide) : (n = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, r = n + s.options.slidesToShow, s.options.fade === !0 && (n > 0 && n--, r <= s.slideCount && r++)), o = s.$slider.find(".slick-slide").slice(n, r), t(o), s.slideCount <= s.options.slidesToShow ? (i = s.$slider.find(".slick-slide"), t(i)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (i = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), t(i)) : 0 === s.currentSlide && (i = s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow), t(i))
    }, t.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(), e.$slideTrack.css({
            opacity: 1
        }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, t.prototype.next = t.prototype.slickNext = function() {
        var e = this;
        e.changeSlide({
            data: {
                message: "next"
            }
        })
    }, t.prototype.orientationChange = function() {
        var e = this;
        e.checkResponsive(), e.setPosition()
    }, t.prototype.pause = t.prototype.slickPause = function() {
        var e = this;
        e.autoPlayClear(), e.paused = !0
    }, t.prototype.play = t.prototype.slickPlay = function() {
        var e = this;
        e.paused = !1, e.autoPlay()
    }, t.prototype.postSlide = function(e) {
        var t = this;
        t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay === !0 && t.paused === !1 && t.autoPlay()
    }, t.prototype.prev = t.prototype.slickPrev = function() {
        var e = this;
        e.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, t.prototype.preventDefault = function(e) {
        e.preventDefault()
    }, t.prototype.progressiveLazyLoad = function() {
        var t, o, i = this;
        t = e("img[data-lazy]", i.$slider).length, t > 0 && (o = e("img[data-lazy]", i.$slider).first(), o.attr("src", o.attr("data-lazy")).removeClass("slick-loading").load(function() {
            o.removeAttr("data-lazy"), i.progressiveLazyLoad(), i.options.adaptiveHeight === !0 && i.setPosition()
        }).error(function() {
            o.removeAttr("data-lazy"), i.progressiveLazyLoad()
        }))
    }, t.prototype.refresh = function() {
        var t = this,
            o = t.currentSlide;
        t.destroy(), e.extend(t, t.initials), t.init(), t.changeSlide({
            data: {
                message: "index",
                index: o
            }
        }, !1)
    }, t.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses(0), t.setPosition(), t.$slider.trigger("reInit", [t])
    }, t.prototype.resize = function() {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
            t.windowWidth = e(window).width(), t.checkResponsive(), t.setPosition()
        }, 50))
    }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, o) {
        var i = this;
        return "boolean" == typeof e ? (t = e, e = t === !0 ? 0 : i.slideCount - 1) : e = t === !0 ? --e : e, i.slideCount < 1 || 0 > e || e > i.slideCount - 1 ? !1 : (i.unload(), o === !0 ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, void i.reinit())
    }, t.prototype.setCSS = function(e) {
        var t, o, i = this,
            n = {};
        i.options.rtl === !0 && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", o = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", n[i.positionProp] = e, i.transformsEnabled === !1 ? i.$slideTrack.css(n) : (n = {}, i.cssTransitions === !1 ? (n[i.animType] = "translate(" + t + ", " + o + ")", i.$slideTrack.css(n)) : (n[i.animType] = "translate3d(" + t + ", " + o + ", 0px)", i.$slideTrack.css(n)))
    }, t.prototype.setDimensions = function() {
        var e = this;
        e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1 ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : e.options.variableWidth === !0 ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, t.prototype.setFade = function() {
        var t, o = this;
        o.$slides.each(function(i, n) {
            t = o.slideWidth * i * -1, e(n).css(o.options.rtl === !0 ? {
                position: "relative",
                right: t,
                top: 0,
                zIndex: 800,
                opacity: 0
            } : {
                position: "relative",
                left: t,
                top: 0,
                zIndex: 800,
                opacity: 0
            })
        }), o.$slides.eq(o.currentSlide).css({
            zIndex: 900,
            opacity: 1
        })
    }, t.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }, t.prototype.setOption = t.prototype.slickSetOption = function(e, t, o) {
        var i = this;
        i.options[e] = t, o === !0 && (i.unload(), i.reinit())
    }, t.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, t.prototype.setProps = function() {
        var e = this,
            t = document.body.style;
        e.positionProp = e.options.vertical === !0 ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && e.options.useCSS === !0 && (e.cssTransitions = !0), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = null !== e.animType && e.animType !== !1
    }, t.prototype.setSlideClasses = function(e) {
        var t, o, i, n, r = this;
        r.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true").removeClass("slick-center"), o = r.$slider.find(".slick-slide"), r.options.centerMode === !0 ? (t = Math.floor(r.options.slidesToShow / 2), r.options.infinite === !0 && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e, o.slice(i - t + 1, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? o.eq(o.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && o.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : o.length <= r.options.slidesToShow ? o.addClass("slick-active").attr("aria-hidden", "false") : (n = r.slideCount % r.options.slidesToShow, i = r.options.infinite === !0 ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? o.slice(i - (r.options.slidesToShow - n), i + n).addClass("slick-active").attr("aria-hidden", "false") : o.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === r.options.lazyLoad && r.lazyLoad()
    }, t.prototype.setupInfinite = function() {
        var t, o, i, n = this;
        if (n.options.fade === !0 && (n.options.centerMode = !1), n.options.infinite === !0 && n.options.fade === !1 && (o = null, n.slideCount > n.options.slidesToShow)) {
            for (i = n.options.centerMode === !0 ? n.options.slidesToShow + 1 : n.options.slidesToShow, t = n.slideCount; t > n.slideCount - i; t -= 1) o = t - 1, e(n.$slides[o]).clone(!0).attr("id", "").attr("data-slick-index", o - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
            for (t = 0; i > t; t += 1) o = t, e(n.$slides[o]).clone(!0).attr("id", "").attr("data-slick-index", o + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
            n.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                e(this).attr("id", "")
            })
        }
    }, t.prototype.setPaused = function(e) {
        var t = this;
        t.options.autoplay === !0 && t.options.pauseOnHover === !0 && (t.paused = e, t.autoPlayClear())
    }, t.prototype.selectHandler = function(t) {
        var o = this,
            i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
            n = parseInt(i.attr("data-slick-index"));
        return n || (n = 0), o.slideCount <= o.options.slidesToShow ? (o.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true"), o.$slides.eq(n).addClass("slick-active").attr("aria-hidden", "false"), o.options.centerMode === !0 && (o.$slider.find(".slick-slide").removeClass("slick-center"), o.$slides.eq(n).addClass("slick-center")), void o.asNavFor(n)) : void o.slideHandler(n)
    }, t.prototype.slideHandler = function(e, t, o) {
        var i, n, r, s, a = null,
            l = this;
        return t = t || !1, l.animating === !0 && l.options.waitForAnimate === !0 || l.options.fade === !0 && l.currentSlide === e || l.slideCount <= l.options.slidesToShow ? void 0 : (t === !1 && l.asNavFor(e), i = e, a = l.getLeft(i), s = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? s : l.swipeLeft, l.options.infinite === !1 && l.options.centerMode === !1 && (0 > e || e > l.getDotCount() * l.options.slidesToScroll) ? void(l.options.fade === !1 && (i = l.currentSlide, o !== !0 ? l.animateSlide(s, function() {
            l.postSlide(i)
        }) : l.postSlide(i))) : l.options.infinite === !1 && l.options.centerMode === !0 && (0 > e || e > l.slideCount - l.options.slidesToScroll) ? void(l.options.fade === !1 && (i = l.currentSlide, o !== !0 ? l.animateSlide(s, function() {
            l.postSlide(i)
        }) : l.postSlide(i))) : (l.options.autoplay === !0 && clearInterval(l.autoPlayTimer), n = 0 > i ? l.slideCount % l.options.slidesToScroll !== 0 ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + i : i >= l.slideCount ? l.slideCount % l.options.slidesToScroll !== 0 ? 0 : i - l.slideCount : i, l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, n]), r = l.currentSlide, l.currentSlide = n, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), l.options.fade === !0 ? (o !== !0 ? l.fadeSlide(n, function() {
            l.postSlide(n)
        }) : l.postSlide(n), void l.animateHeight()) : void(o !== !0 ? l.animateSlide(a, function() {
            l.postSlide(n)
        }) : l.postSlide(n))))
    }, t.prototype.startLoad = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, t.prototype.swipeDirection = function() {
        var e, t, o, i, n = this;
        return e = n.touchObject.startX - n.touchObject.curX, t = n.touchObject.startY - n.touchObject.curY, o = Math.atan2(t, e), i = Math.round(180 * o / Math.PI), 0 > i && (i = 360 - Math.abs(i)), 45 >= i && i >= 0 ? n.options.rtl === !1 ? "left" : "right" : 360 >= i && i >= 315 ? n.options.rtl === !1 ? "left" : "right" : i >= 135 && 225 >= i ? n.options.rtl === !1 ? "right" : "left" : n.options.verticalSwiping === !0 ? i >= 35 && 135 >= i ? "left" : "right" : "vertical";
    }, t.prototype.swipeEnd = function(e) {
        var t, o = this;
        if (o.dragging = !1, o.shouldClick = o.touchObject.swipeLength > 10 ? !1 : !0, void 0 === o.touchObject.curX) return !1;
        if (o.touchObject.edgeHit === !0 && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) switch (o.swipeDirection()) {
            case "left":
                t = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.slideHandler(t), o.currentDirection = 0, o.touchObject = {}, o.$slider.trigger("swipe", [o, "left"]);
                break;
            case "right":
                t = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.slideHandler(t), o.currentDirection = 1, o.touchObject = {}, o.$slider.trigger("swipe", [o, "right"])
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
    }, t.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
        }
    }, t.prototype.swipeMove = function(e) {
        var t, o, i, n, r, s = this;
        return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !s.dragging || r && 1 !== r.length ? !1 : (t = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, s.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), s.options.verticalSwiping === !0 && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))), o = s.swipeDirection(), "vertical" !== o ? (void 0 !== e.originalEvent && s.touchObject.swipeLength > 4 && e.preventDefault(), n = (s.options.rtl === !1 ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), s.options.verticalSwiping === !0 && (n = s.touchObject.curY > s.touchObject.startY ? 1 : -1), i = s.touchObject.swipeLength, s.touchObject.edgeHit = !1, s.options.infinite === !1 && (0 === s.currentSlide && "right" === o || s.currentSlide >= s.getDotCount() && "left" === o) && (i = s.touchObject.swipeLength * s.options.edgeFriction, s.touchObject.edgeHit = !0), s.options.vertical === !1 ? s.swipeLeft = t + i * n : s.swipeLeft = t + i * (s.$list.height() / s.listWidth) * n, s.options.verticalSwiping === !0 && (s.swipeLeft = t + i * n), s.options.fade === !0 || s.options.touchMove === !1 ? !1 : s.animating === !0 ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft)) : void 0)
    }, t.prototype.swipeStart = function(e) {
        var t, o = this;
        return 1 !== o.touchObject.fingerCount || o.slideCount <= o.options.slidesToShow ? (o.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), o.touchObject.startX = o.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, o.touchObject.startY = o.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(o.dragging = !0))
    }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, t.prototype.unload = function() {
        var t = this;
        e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && "object" != typeof t.options.prevArrow && t.$prevArrow.remove(), t.$nextArrow && "object" != typeof t.options.nextArrow && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible").attr("aria-hidden", "true").css("width", "")
    }, t.prototype.unslick = function() {
        var e = this;
        e.destroy()
    }, t.prototype.updateArrows = function() {
        var e, t = this;
        e = Math.floor(t.options.slidesToShow / 2), t.options.arrows === !0 && t.options.infinite !== !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.removeClass("slick-disabled"), t.$nextArrow.removeClass("slick-disabled"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled"), t.$nextArrow.removeClass("slick-disabled")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1 ? (t.$nextArrow.addClass("slick-disabled"), t.$prevArrow.removeClass("slick-disabled")) : t.currentSlide >= t.slideCount - 1 && t.options.centerMode === !0 && (t.$nextArrow.addClass("slick-disabled"), t.$prevArrow.removeClass("slick-disabled")))
    }, t.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, t.prototype.visibility = function() {
        var e = this;
        document[e.hidden] ? (e.paused = !0, e.autoPlayClear()) : (e.paused = !1, e.autoPlay())
    }, e.fn.slick = function() {
        var e, o = this,
            i = arguments[0],
            n = Array.prototype.slice.call(arguments, 1),
            r = o.length,
            s = 0;
        for (s; r > s; s++)
            if ("object" == typeof i || "undefined" == typeof i ? o[s].slick = new t(o[s], i) : e = o[s].slick[i].apply(o[s].slick, n), "undefined" != typeof e) return e;
        return o
    }
}), ! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
    "use strict";

    function t() {
        var e = document.getElementsByTagName("script"),
            t = e[e.length - 1].src.split("?")[0];
        return t.split("/").length > 0 ? t.split("/").slice(0, -1).join("/") + "/" : ""
    }

    function o(e, t, o) {
        for (var i = 0; i < t.length; i++) o(e, t[i])
    }
    var i = !1,
        n = !1,
        r = 0,
        s = 2e3,
        a = 0,
        l = e,
        c = ["webkit", "ms", "moz", "o"],
        d = window.requestAnimationFrame || !1,
        u = window.cancelAnimationFrame || !1;
    if (!d)
        for (var p in c) {
            var h = c[p];
            d || (d = window[h + "RequestAnimationFrame"]), u || (u = window[h + "CancelAnimationFrame"] || window[h + "CancelRequestAnimationFrame"])
        }
    var f = window.MutationObserver || window.WebKitMutationObserver || !1,
        m = {
            zindex: "auto",
            cursoropacitymin: 0,
            cursoropacitymax: 1,
            cursorcolor: "#424242",
            cursorwidth: "5px",
            cursorborder: "1px solid #fff",
            cursorborderradius: "5px",
            scrollspeed: 60,
            mousescrollstep: 24,
            touchbehavior: !1,
            hwacceleration: !0,
            usetransition: !0,
            boxzoom: !1,
            dblclickzoom: !0,
            gesturezoom: !0,
            grabcursorenabled: !0,
            autohidemode: !0,
            background: "",
            iframeautoresize: !0,
            cursorminheight: 32,
            preservenativescrolling: !0,
            railoffset: !1,
            railhoffset: !1,
            bouncescroll: !0,
            spacebarenabled: !0,
            railpadding: {
                top: 0,
                right: 0,
                left: 0,
                bottom: 0
            },
            disableoutline: !0,
            horizrailenabled: !0,
            railalign: "right",
            railvalign: "bottom",
            enabletranslate3d: !0,
            enablemousewheel: !0,
            enablekeyboard: !0,
            smoothscroll: !0,
            sensitiverail: !0,
            enablemouselockapi: !0,
            cursorfixedheight: !1,
            directionlockdeadzone: 6,
            hidecursordelay: 400,
            nativeparentscrolling: !0,
            enablescrollonselection: !0,
            overflowx: !0,
            overflowy: !0,
            cursordragspeed: .3,
            rtlmode: "auto",
            cursordragontouch: !1,
            oneaxismousemode: "auto",
            scriptpath: t(),
            preventmultitouchscrolling: !0
        },
        g = !1,
        v = function() {
            function e() {
                var e = ["-webkit-grab", "-moz-grab", "grab"];
                (r.ischrome && !r.ischrome22 || r.isie) && (e = []);
                for (var t = 0; t < e.length; t++) {
                    var i = e[t];
                    if (o.cursor = i, o.cursor == i) return i
                }
                return "url(//mail.google.com/mail/images/2/openhand.cur),n-resize"
            }
            if (g) return g;
            var t = document.createElement("DIV"),
                o = t.style,
                i = navigator.userAgent,
                n = navigator.platform,
                r = {};
            r.haspointerlock = "pointerLockElement" in document || "webkitPointerLockElement" in document || "mozPointerLockElement" in document, r.isopera = "opera" in window, r.isopera12 = r.isopera && "getUserMedia" in navigator, r.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(window.operamini), r.isie = "all" in document && "attachEvent" in t && !r.isopera, r.isieold = r.isie && !("msInterpolationMode" in o), r.isie7 = !(!r.isie || r.isieold || "documentMode" in document && 7 != document.documentMode), r.isie8 = r.isie && "documentMode" in document && 8 == document.documentMode, r.isie9 = r.isie && "performance" in window && document.documentMode >= 9, r.isie10 = r.isie && "performance" in window && 10 == document.documentMode, r.isie11 = "msRequestFullscreen" in t && document.documentMode >= 11, r.isie9mobile = /iemobile.9/i.test(i), r.isie9mobile && (r.isie9 = !1), r.isie7mobile = !r.isie9mobile && r.isie7 && /iemobile/i.test(i), r.ismozilla = "MozAppearance" in o, r.iswebkit = "WebkitAppearance" in o, r.ischrome = "chrome" in window, r.ischrome22 = r.ischrome && r.haspointerlock, r.ischrome26 = r.ischrome && "transition" in o, r.cantouch = "ontouchstart" in document.documentElement || "ontouchstart" in window, r.hasmstouch = window.MSPointerEvent || !1, r.hasw3ctouch = window.PointerEvent || !1, r.ismac = /^mac$/i.test(n), r.isios = r.cantouch && /iphone|ipad|ipod/i.test(n), r.isios4 = r.isios && !("seal" in Object), r.isios7 = r.isios && "webkitHidden" in document, r.isandroid = /android/i.test(i), r.haseventlistener = "addEventListener" in t, r.trstyle = !1, r.hastransform = !1, r.hastranslate3d = !1, r.transitionstyle = !1, r.hastransition = !1, r.transitionend = !1;
            var s, a = ["transform", "msTransform", "webkitTransform", "MozTransform", "OTransform"];
            for (s = 0; s < a.length; s++)
                if ("undefined" != typeof o[a[s]]) {
                    r.trstyle = a[s];
                    break
                }
            r.hastransform = !!r.trstyle, r.hastransform && (o[r.trstyle] = "translate3d(1px,2px,3px)", r.hastranslate3d = /translate3d/.test(o[r.trstyle])), r.transitionstyle = !1, r.prefixstyle = "", r.transitionend = !1, a = ["transition", "webkitTransition", "msTransition", "MozTransition", "OTransition", "OTransition", "KhtmlTransition"];
            var l = ["", "-webkit-", "-ms-", "-moz-", "-o-", "-o", "-khtml-"],
                c = ["transitionend", "webkitTransitionEnd", "msTransitionEnd", "transitionend", "otransitionend", "oTransitionEnd", "KhtmlTransitionEnd"];
            for (s = 0; s < a.length; s++)
                if (a[s] in o) {
                    r.transitionstyle = a[s], r.prefixstyle = l[s], r.transitionend = c[s];
                    break
                }
            return r.ischrome26 && (r.prefixstyle = l[1]), r.hastransition = r.transitionstyle, r.cursorgrabvalue = e(), r.hasmousecapture = "setCapture" in t, r.hasMutationObserver = f !== !1, t = null, g = r, r
        },
        y = function(e, t) {
            function o() {
                var e = y.doc.css(x.trstyle);
                return e && "matrix" == e.substr(0, 6) ? e.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/) : !1
            }

            function c() {
                var e = y.win;
                if ("zIndex" in e) return e.zIndex();
                for (; e.length > 0;) {
                    if (9 == e[0].nodeType) return !1;
                    var t = e.css("zIndex");
                    if (!isNaN(t) && 0 != t) return parseInt(t);
                    e = e.parent()
                }
                return !1
            }

            function p(e, t, o) {
                var i = e.css(t),
                    n = parseFloat(i);
                if (isNaN(n)) {
                    n = C[i] || 0;
                    var r = 3 == n ? o ? y.win.outerHeight() - y.win.innerHeight() : y.win.outerWidth() - y.win.innerWidth() : 1;
                    return y.isie8 && n && (n += 1), r ? n : 0
                }
                return n
            }

            function h(e, t, o, i) {
                y._bind(e, t, function(i) {
                    var i = i ? i : window.event,
                        n = {
                            original: i,
                            target: i.target || i.srcElement,
                            type: "wheel",
                            deltaMode: "MozMousePixelScroll" == i.type ? 0 : 1,
                            deltaX: 0,
                            deltaZ: 0,
                            preventDefault: function() {
                                return i.preventDefault ? i.preventDefault() : i.returnValue = !1, !1
                            },
                            stopImmediatePropagation: function() {
                                i.stopImmediatePropagation ? i.stopImmediatePropagation() : i.cancelBubble = !0
                            }
                        };
                    return "mousewheel" == t ? (n.deltaY = -1 / 40 * i.wheelDelta, i.wheelDeltaX && (n.deltaX = -1 / 40 * i.wheelDeltaX)) : n.deltaY = i.detail, o.call(e, n)
                }, i)
            }

            function g(e, t, o) {
                var i, n;
                if (0 == e.deltaMode ? (i = -Math.floor(e.deltaX * (y.opt.mousescrollstep / 54)), n = -Math.floor(e.deltaY * (y.opt.mousescrollstep / 54))) : 1 == e.deltaMode && (i = -Math.floor(e.deltaX * y.opt.mousescrollstep), n = -Math.floor(e.deltaY * y.opt.mousescrollstep)), t && y.opt.oneaxismousemode && 0 == i && n && (i = n, n = 0, o)) {
                    var r = 0 > i ? y.getScrollLeft() >= y.page.maxw : y.getScrollLeft() <= 0;
                    r && (n = i, i = 0)
                }
                if (i && (y.scrollmom && y.scrollmom.stop(), y.lastdeltax += i, y.debounced("mousewheelx", function() {
                        var e = y.lastdeltax;
                        y.lastdeltax = 0, y.rail.drag || y.doScrollLeftBy(e)
                    }, 15)), n) {
                    if (y.opt.nativeparentscrolling && o && !y.ispage && !y.zoomactive)
                        if (0 > n) {
                            if (y.getScrollTop() >= y.page.maxh) return !0
                        } else if (y.getScrollTop() <= 0) return !0;
                    y.scrollmom && y.scrollmom.stop(), y.lastdeltay += n, y.debounced("mousewheely", function() {
                        var e = y.lastdeltay;
                        y.lastdeltay = 0, y.rail.drag || y.doScrollBy(e)
                    }, 15)
                }
                return e.stopImmediatePropagation(), e.preventDefault()
            }
            var y = this;
            if (this.version = "3.6.0", this.name = "nicescroll", this.me = t, this.opt = {
                    doc: l("body"),
                    win: !1
                }, l.extend(this.opt, m), this.opt.snapbackspeed = 80, e)
                for (var b in y.opt) "undefined" != typeof e[b] && (y.opt[b] = e[b]);
            this.doc = y.opt.doc, this.iddoc = this.doc && this.doc[0] ? this.doc[0].id || "" : "", this.ispage = /^BODY|HTML/.test(y.opt.win ? y.opt.win[0].nodeName : this.doc[0].nodeName), this.haswrapper = y.opt.win !== !1, this.win = y.opt.win || (this.ispage ? l(window) : this.doc), this.docscroll = this.ispage && !this.haswrapper ? l(window) : this.win, this.body = l("body"), this.viewport = !1, this.isfixed = !1, this.iframe = !1, this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName, this.istextarea = "TEXTAREA" == this.win[0].nodeName, this.forcescreen = !1, this.canshowonmouseevent = "scroll" != y.opt.autohidemode, this.onmousedown = !1, this.onmouseup = !1, this.onmousemove = !1, this.onmousewheel = !1, this.onkeypress = !1, this.ongesturezoom = !1, this.onclick = !1, this.onscrollstart = !1, this.onscrollend = !1, this.onscrollcancel = !1, this.onzoomin = !1, this.onzoomout = !1, this.view = !1, this.page = !1, this.scroll = {
                x: 0,
                y: 0
            }, this.scrollratio = {
                x: 0,
                y: 0
            }, this.cursorheight = 20, this.scrollvaluemax = 0, this.isrtlmode = "auto" == this.opt.rtlmode ? "rtl" == (this.win[0] == window ? this.body : this.win).css("direction") : this.opt.rtlmode === !0, this.scrollrunning = !1, this.scrollmom = !1, this.observer = !1, this.observerremover = !1, this.observerbody = !1;
            do this.id = "ascrail" + s++; while (document.getElementById(this.id));
            this.rail = !1, this.cursor = !1, this.cursorfreezed = !1, this.selectiondrag = !1, this.zoom = !1, this.zoomactive = !1, this.hasfocus = !1, this.hasmousefocus = !1, this.visibility = !0, this.railslocked = !1, this.locked = !1, this.hidden = !1, this.cursoractive = !0, this.wheelprevented = !1, this.overflowx = y.opt.overflowx, this.overflowy = y.opt.overflowy, this.nativescrollingarea = !1, this.checkarea = 0, this.events = [], this.saved = {}, this.delaylist = {}, this.synclist = {}, this.lastdeltax = 0, this.lastdeltay = 0, this.detected = v();
            var x = l.extend({}, this.detected);
            this.canhwscroll = x.hastransform && y.opt.hwacceleration, this.ishwscroll = this.canhwscroll && y.haswrapper, this.hasreversehr = this.isrtlmode && !x.iswebkit, this.istouchcapable = !1, !x.cantouch || x.isios || x.isandroid || !x.iswebkit && !x.ismozilla || (this.istouchcapable = !0, x.cantouch = !1), y.opt.enablemouselockapi || (x.hasmousecapture = !1, x.haspointerlock = !1), this.debounced = function(e, t, o) {
                var i = y.delaylist[e];
                y.delaylist[e] = t, i || setTimeout(function() {
                    var t = y.delaylist[e];
                    y.delaylist[e] = !1, t.call(y)
                }, o)
            };
            var T = !1;
            this.synched = function(e, t) {
                function o() {
                    T || (d(function() {
                        T = !1;
                        for (var e in y.synclist) {
                            var t = y.synclist[e];
                            t && t.call(y), y.synclist[e] = !1
                        }
                    }), T = !0)
                }
                return y.synclist[e] = t, o(), e
            }, this.unsynched = function(e) {
                y.synclist[e] && (y.synclist[e] = !1)
            }, this.css = function(e, t) {
                for (var o in t) y.saved.css.push([e, o, e.css(o)]), e.css(o, t[o])
            }, this.scrollTop = function(e) {
                return "undefined" == typeof e ? y.getScrollTop() : y.setScrollTop(e)
            }, this.scrollLeft = function(e) {
                return "undefined" == typeof e ? y.getScrollLeft() : y.setScrollLeft(e)
            };
            var k = function(e, t, o, i, n, r, s) {
                this.st = e, this.ed = t, this.spd = o, this.p1 = i || 0, this.p2 = n || 1, this.p3 = r || 0, this.p4 = s || 1, this.ts = (new Date).getTime(), this.df = this.ed - this.st
            };
            if (k.prototype = {
                    B2: function(e) {
                        return 3 * e * e * (1 - e)
                    },
                    B3: function(e) {
                        return 3 * e * (1 - e) * (1 - e)
                    },
                    B4: function(e) {
                        return (1 - e) * (1 - e) * (1 - e)
                    },
                    getNow: function() {
                        var e = (new Date).getTime(),
                            t = 1 - (e - this.ts) / this.spd,
                            o = this.B2(t) + this.B3(t) + this.B4(t);
                        return 0 > t ? this.ed : this.st + Math.round(this.df * o)
                    },
                    update: function(e, t) {
                        return this.st = this.getNow(), this.ed = e, this.spd = t, this.ts = (new Date).getTime(), this.df = this.ed - this.st, this
                    }
                }, this.ishwscroll) {
                this.doc.translate = {
                    x: 0,
                    y: 0,
                    tx: "0px",
                    ty: "0px"
                }, x.hastranslate3d && x.isios && this.doc.css("-webkit-backface-visibility", "hidden"), this.getScrollTop = function(e) {
                    if (!e) {
                        var t = o();
                        if (t) return 16 == t.length ? -t[13] : -t[5];
                        if (y.timerscroll && y.timerscroll.bz) return y.timerscroll.bz.getNow()
                    }
                    return y.doc.translate.y
                }, this.getScrollLeft = function(e) {
                    if (!e) {
                        var t = o();
                        if (t) return 16 == t.length ? -t[12] : -t[4];
                        if (y.timerscroll && y.timerscroll.bh) return y.timerscroll.bh.getNow()
                    }
                    return y.doc.translate.x
                }, this.notifyScrollEvent = function(e) {
                    var t = document.createEvent("UIEvents");
                    t.initUIEvent("scroll", !1, !0, window, 1), t.niceevent = !0, e.dispatchEvent(t)
                };
                var S = this.isrtlmode ? 1 : -1;
                x.hastranslate3d && y.opt.enabletranslate3d ? (this.setScrollTop = function(e, t) {
                    y.doc.translate.y = e, y.doc.translate.ty = -1 * e + "px", y.doc.css(x.trstyle, "translate3d(" + y.doc.translate.tx + "," + y.doc.translate.ty + ",0px)"), t || y.notifyScrollEvent(y.win[0])
                }, this.setScrollLeft = function(e, t) {
                    y.doc.translate.x = e, y.doc.translate.tx = e * S + "px", y.doc.css(x.trstyle, "translate3d(" + y.doc.translate.tx + "," + y.doc.translate.ty + ",0px)"), t || y.notifyScrollEvent(y.win[0])
                }) : (this.setScrollTop = function(e, t) {
                    y.doc.translate.y = e, y.doc.translate.ty = -1 * e + "px", y.doc.css(x.trstyle, "translate(" + y.doc.translate.tx + "," + y.doc.translate.ty + ")"), t || y.notifyScrollEvent(y.win[0])
                }, this.setScrollLeft = function(e, t) {
                    y.doc.translate.x = e, y.doc.translate.tx = e * S + "px", y.doc.css(x.trstyle, "translate(" + y.doc.translate.tx + "," + y.doc.translate.ty + ")"), t || y.notifyScrollEvent(y.win[0])
                })
            } else this.getScrollTop = function() {
                return y.docscroll.scrollTop()
            }, this.setScrollTop = function(e) {
                return y.docscroll.scrollTop(e)
            }, this.getScrollLeft = function() {
                return y.detected.ismozilla && y.isrtlmode ? Math.abs(y.docscroll.scrollLeft()) : y.docscroll.scrollLeft()
            }, this.setScrollLeft = function(e) {
                return y.docscroll.scrollLeft(y.detected.ismozilla && y.isrtlmode ? -e : e)
            };
            this.getTarget = function(e) {
                return e ? e.target ? e.target : e.srcElement ? e.srcElement : !1 : !1
            }, this.hasParent = function(e, t) {
                if (!e) return !1;
                for (var o = e.target || e.srcElement || e || !1; o && o.id != t;) o = o.parentNode || !1;
                return o !== !1
            };
            var C = {
                thin: 1,
                medium: 3,
                thick: 5
            };
            this.getDocumentScrollOffset = function() {
                return {
                    top: window.pageYOffset || document.documentElement.scrollTop,
                    left: window.pageXOffset || document.documentElement.scrollLeft
                }
            }, this.getOffset = function() {
                if (y.isfixed) {
                    var e = y.win.offset(),
                        t = y.getDocumentScrollOffset();
                    return e.top -= t.top, e.left -= t.left, e
                }
                var o = y.win.offset();
                if (!y.viewport) return o;
                var i = y.viewport.offset();
                return {
                    top: o.top - i.top,
                    left: o.left - i.left
                }
            }, this.updateScrollBar = function(e) {
                if (y.ishwscroll) y.rail.css({
                    height: y.win.innerHeight() - (y.opt.railpadding.top + y.opt.railpadding.bottom)
                }), y.railh && y.railh.css({
                    width: y.win.innerWidth() - (y.opt.railpadding.left + y.opt.railpadding.right)
                });
                else {
                    var t = y.getOffset(),
                        o = {
                            top: t.top,
                            left: t.left - (y.opt.railpadding.left + y.opt.railpadding.right)
                        };
                    o.top += p(y.win, "border-top-width", !0), o.left += y.rail.align ? y.win.outerWidth() - p(y.win, "border-right-width") - y.rail.width : p(y.win, "border-left-width");
                    var i = y.opt.railoffset;
                    if (i && (i.top && (o.top += i.top), y.rail.align && i.left && (o.left += i.left)), y.railslocked || y.rail.css({
                            top: o.top,
                            left: o.left,
                            height: (e ? e.h : y.win.innerHeight()) - (y.opt.railpadding.top + y.opt.railpadding.bottom)
                        }), y.zoom && y.zoom.css({
                            top: o.top + 1,
                            left: 1 == y.rail.align ? o.left - 20 : o.left + y.rail.width + 4
                        }), y.railh && !y.railslocked) {
                        var o = {
                                top: t.top,
                                left: t.left
                            },
                            i = y.opt.railhoffset;
                        i && (i.top && (o.top += i.top), i.left && (o.left += i.left));
                        var n = y.railh.align ? o.top + p(y.win, "border-top-width", !0) + y.win.innerHeight() - y.railh.height : o.top + p(y.win, "border-top-width", !0),
                            r = o.left + p(y.win, "border-left-width");
                        y.railh.css({
                            top: n - (y.opt.railpadding.top + y.opt.railpadding.bottom),
                            left: r,
                            width: y.railh.width
                        })
                    }
                }
            }, this.doRailClick = function(e, t, o) {
                var i, n, r, s;
                y.railslocked || (y.cancelEvent(e), t ? (i = o ? y.doScrollLeft : y.doScrollTop, r = o ? (e.pageX - y.railh.offset().left - y.cursorwidth / 2) * y.scrollratio.x : (e.pageY - y.rail.offset().top - y.cursorheight / 2) * y.scrollratio.y, i(r)) : (i = o ? y.doScrollLeftBy : y.doScrollBy, r = o ? y.scroll.x : y.scroll.y, s = o ? e.pageX - y.railh.offset().left : e.pageY - y.rail.offset().top, n = o ? y.view.w : y.view.h, i(r >= s ? n : -n)))
            }, y.hasanimationframe = d, y.hascancelanimationframe = u, y.hasanimationframe ? y.hascancelanimationframe || (u = function() {
                y.cancelAnimationFrame = !0
            }) : (d = function(e) {
                return setTimeout(e, 15 - Math.floor(+new Date / 1e3) % 16)
            }, u = clearInterval), this.init = function() {
                if (y.saved.css = [], x.isie7mobile) return !0;
                if (x.isoperamini) return !0;
                if (x.hasmstouch && y.css(y.ispage ? l("html") : y.win, {
                        "-ms-touch-action": "none"
                    }), y.zindex = "auto", y.ispage || "auto" != y.opt.zindex ? y.zindex = y.opt.zindex : y.zindex = c() || "auto", y.ispage || "auto" == y.zindex || y.zindex > a && (a = y.zindex), y.isie && 0 == y.zindex && "auto" == y.opt.zindex && (y.zindex = "auto"), !y.ispage || !x.cantouch && !x.isieold && !x.isie9mobile) {
                    var e = y.docscroll;
                    y.ispage && (e = y.haswrapper ? y.win : y.doc), x.isie9mobile || y.css(e, {
                        "overflow-y": "hidden"
                    }), y.ispage && x.isie7 && ("BODY" == y.doc[0].nodeName ? y.css(l("html"), {
                        "overflow-y": "hidden"
                    }) : "HTML" == y.doc[0].nodeName && y.css(l("body"), {
                        "overflow-y": "hidden"
                    })), !x.isios || y.ispage || y.haswrapper || y.css(l("body"), {
                        "-webkit-overflow-scrolling": "touch"
                    });
                    var t = l(document.createElement("div"));
                    t.css({
                        position: "relative",
                        top: 0,
                        "float": "right",
                        width: y.opt.cursorwidth,
                        height: "0px",
                        "background-color": y.opt.cursorcolor,
                        border: y.opt.cursorborder,
                        "background-clip": "padding-box",
                        "-webkit-border-radius": y.opt.cursorborderradius,
                        "-moz-border-radius": y.opt.cursorborderradius,
                        "border-radius": y.opt.cursorborderradius
                    }), t.hborder = parseFloat(t.outerHeight() - t.innerHeight()), t.addClass("nicescroll-cursors"), y.cursor = t;
                    var o = l(document.createElement("div"));
                    o.attr("id", y.id), o.addClass("nicescroll-rails nicescroll-rails-vr");
                    var s, d, u = ["left", "right", "top", "bottom"];
                    for (var p in u) d = u[p], s = y.opt.railpadding[d], s ? o.css("padding-" + d, s + "px") : y.opt.railpadding[d] = 0;
                    o.append(t), o.width = Math.max(parseFloat(y.opt.cursorwidth), t.outerWidth()), o.css({
                        width: o.width + "px",
                        zIndex: y.zindex,
                        background: y.opt.background,
                        cursor: "default"
                    }), o.visibility = !0, o.scrollable = !0, o.align = "left" == y.opt.railalign ? 0 : 1, y.rail = o, y.rail.drag = !1;
                    var h = !1;
                    !y.opt.boxzoom || y.ispage || x.isieold || (h = document.createElement("div"), y.bind(h, "click", y.doZoom), y.bind(h, "mouseenter", function() {
                        y.zoom.css("opacity", y.opt.cursoropacitymax)
                    }), y.bind(h, "mouseleave", function() {
                        y.zoom.css("opacity", y.opt.cursoropacitymin)
                    }), y.zoom = l(h), y.zoom.css({
                        cursor: "pointer",
                        "z-index": y.zindex,
                        backgroundImage: "url(" + y.opt.scriptpath + "zoomico.png)",
                        height: 18,
                        width: 18,
                        backgroundPosition: "0px 0px"
                    }), y.opt.dblclickzoom && y.bind(y.win, "dblclick", y.doZoom), x.cantouch && y.opt.gesturezoom && (y.ongesturezoom = function(e) {
                        return e.scale > 1.5 && y.doZoomIn(e), e.scale < .8 && y.doZoomOut(e), y.cancelEvent(e)
                    }, y.bind(y.win, "gestureend", y.ongesturezoom))), y.railh = !1;
                    var m;
                    if (y.opt.horizrailenabled) {
                        y.css(e, {
                            "overflow-x": "hidden"
                        });
                        var t = l(document.createElement("div"));
                        t.css({
                            position: "absolute",
                            top: 0,
                            height: y.opt.cursorwidth,
                            width: "0px",
                            "background-color": y.opt.cursorcolor,
                            border: y.opt.cursorborder,
                            "background-clip": "padding-box",
                            "-webkit-border-radius": y.opt.cursorborderradius,
                            "-moz-border-radius": y.opt.cursorborderradius,
                            "border-radius": y.opt.cursorborderradius
                        }), x.isieold && t.css({
                            overflow: "hidden"
                        }), t.wborder = parseFloat(t.outerWidth() - t.innerWidth()), t.addClass("nicescroll-cursors"), y.cursorh = t, m = l(document.createElement("div")), m.attr("id", y.id + "-hr"), m.addClass("nicescroll-rails nicescroll-rails-hr"), m.height = Math.max(parseFloat(y.opt.cursorwidth), t.outerHeight()), m.css({
                            height: m.height + "px",
                            zIndex: y.zindex,
                            background: y.opt.background
                        }), m.append(t), m.visibility = !0, m.scrollable = !0, m.align = "top" == y.opt.railvalign ? 0 : 1, y.railh = m, y.railh.drag = !1
                    }
                    if (y.ispage) o.css({
                        position: "fixed",
                        top: "0px",
                        height: "100%"
                    }), o.css(o.align ? {
                        right: "0px"
                    } : {
                        left: "0px"
                    }), y.body.append(o), y.railh && (m.css({
                        position: "fixed",
                        left: "0px",
                        width: "100%"
                    }), m.css(m.align ? {
                        bottom: "0px"
                    } : {
                        top: "0px"
                    }), y.body.append(m));
                    else {
                        if (y.ishwscroll) {
                            "static" == y.win.css("position") && y.css(y.win, {
                                position: "relative"
                            });
                            var g = "HTML" == y.win[0].nodeName ? y.body : y.win;
                            l(g).scrollTop(0).scrollLeft(0), y.zoom && (y.zoom.css({
                                position: "absolute",
                                top: 1,
                                right: 0,
                                "margin-right": o.width + 4
                            }), g.append(y.zoom)), o.css({
                                position: "absolute",
                                top: 0
                            }), o.css(o.align ? {
                                right: 0
                            } : {
                                left: 0
                            }), g.append(o), m && (m.css({
                                position: "absolute",
                                left: 0,
                                bottom: 0
                            }), m.css(m.align ? {
                                bottom: 0
                            } : {
                                top: 0
                            }), g.append(m))
                        } else {
                            y.isfixed = "fixed" == y.win.css("position");
                            var v = y.isfixed ? "fixed" : "absolute";
                            y.isfixed || (y.viewport = y.getViewport(y.win[0])), y.viewport && (y.body = y.viewport, 0 == /fixed|absolute/.test(y.viewport.css("position")) && y.css(y.viewport, {
                                position: "relative"
                            })), o.css({
                                position: v
                            }), y.zoom && y.zoom.css({
                                position: v
                            }), y.updateScrollBar(), y.body.append(o), y.zoom && y.body.append(y.zoom), y.railh && (m.css({
                                position: v
                            }), y.body.append(m))
                        }
                        x.isios && y.css(y.win, {
                            "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                            "-webkit-touch-callout": "none"
                        }), x.isie && y.opt.disableoutline && y.win.attr("hideFocus", "true"), x.iswebkit && y.opt.disableoutline && y.win.css({
                            outline: "none"
                        })
                    }
                    if (y.opt.autohidemode === !1 ? (y.autohidedom = !1, y.rail.css({
                            opacity: y.opt.cursoropacitymax
                        }), y.railh && y.railh.css({
                            opacity: y.opt.cursoropacitymax
                        })) : y.opt.autohidemode === !0 || "leave" === y.opt.autohidemode ? (y.autohidedom = l().add(y.rail), x.isie8 && (y.autohidedom = y.autohidedom.add(y.cursor)), y.railh && (y.autohidedom = y.autohidedom.add(y.railh)), y.railh && x.isie8 && (y.autohidedom = y.autohidedom.add(y.cursorh))) : "scroll" == y.opt.autohidemode ? (y.autohidedom = l().add(y.rail), y.railh && (y.autohidedom = y.autohidedom.add(y.railh))) : "cursor" == y.opt.autohidemode ? (y.autohidedom = l().add(y.cursor), y.railh && (y.autohidedom = y.autohidedom.add(y.cursorh))) : "hidden" == y.opt.autohidemode && (y.autohidedom = !1, y.hide(), y.railslocked = !1), x.isie9mobile) {
                        y.scrollmom = new w(y), y.onmangotouch = function() {
                            var e = y.getScrollTop(),
                                t = y.getScrollLeft();
                            if (e == y.scrollmom.lastscrolly && t == y.scrollmom.lastscrollx) return !0;
                            var o = e - y.mangotouch.sy,
                                i = t - y.mangotouch.sx,
                                n = Math.round(Math.sqrt(Math.pow(i, 2) + Math.pow(o, 2)));
                            if (0 != n) {
                                var r = 0 > o ? -1 : 1,
                                    s = 0 > i ? -1 : 1,
                                    a = +new Date;
                                if (y.mangotouch.lazy && clearTimeout(y.mangotouch.lazy), a - y.mangotouch.tm > 80 || y.mangotouch.dry != r || y.mangotouch.drx != s) y.scrollmom.stop(), y.scrollmom.reset(t, e), y.mangotouch.sy = e, y.mangotouch.ly = e, y.mangotouch.sx = t, y.mangotouch.lx = t, y.mangotouch.dry = r, y.mangotouch.drx = s, y.mangotouch.tm = a;
                                else {
                                    y.scrollmom.stop(), y.scrollmom.update(y.mangotouch.sx - i, y.mangotouch.sy - o), y.mangotouch.tm = a;
                                    var l = Math.max(Math.abs(y.mangotouch.ly - e), Math.abs(y.mangotouch.lx - t));
                                    y.mangotouch.ly = e, y.mangotouch.lx = t, l > 2 && (y.mangotouch.lazy = setTimeout(function() {
                                        y.mangotouch.lazy = !1, y.mangotouch.dry = 0, y.mangotouch.drx = 0, y.mangotouch.tm = 0, y.scrollmom.doMomentum(30)
                                    }, 100))
                                }
                            }
                        };
                        var b = y.getScrollTop(),
                            T = y.getScrollLeft();
                        y.mangotouch = {
                            sy: b,
                            ly: b,
                            dry: 0,
                            sx: T,
                            lx: T,
                            drx: 0,
                            lazy: !1,
                            tm: 0
                        }, y.bind(y.docscroll, "scroll", y.onmangotouch)
                    } else {
                        if (x.cantouch || y.istouchcapable || y.opt.touchbehavior || x.hasmstouch) {
                            y.scrollmom = new w(y), y.ontouchstart = function(e) {
                                if (e.pointerType && 2 != e.pointerType && "touch" != e.pointerType) return !1;
                                if (y.hasmoving = !1, !y.railslocked) {
                                    var t;
                                    if (x.hasmstouch)
                                        for (t = e.target ? e.target : !1; t;) {
                                            var o = l(t).getNiceScroll();
                                            if (o.length > 0 && o[0].me == y.me) break;
                                            if (o.length > 0) return !1;
                                            if ("DIV" == t.nodeName && t.id == y.id) break;
                                            t = t.parentNode ? t.parentNode : !1
                                        }
                                    if (y.cancelScroll(), t = y.getTarget(e)) {
                                        var i = /INPUT/i.test(t.nodeName) && /range/i.test(t.type);
                                        if (i) return y.stopPropagation(e)
                                    }
                                    if (!("clientX" in e) && "changedTouches" in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY), y.forcescreen) {
                                        var n = e;
                                        e = {
                                            original: e.original ? e.original : e
                                        }, e.clientX = n.screenX, e.clientY = n.screenY
                                    }
                                    if (y.rail.drag = {
                                            x: e.clientX,
                                            y: e.clientY,
                                            sx: y.scroll.x,
                                            sy: y.scroll.y,
                                            st: y.getScrollTop(),
                                            sl: y.getScrollLeft(),
                                            pt: 2,
                                            dl: !1
                                        }, y.ispage || !y.opt.directionlockdeadzone) y.rail.drag.dl = "f";
                                    else {
                                        var r = {
                                                w: l(window).width(),
                                                h: l(window).height()
                                            },
                                            s = {
                                                w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                                                h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                                            },
                                            a = Math.max(0, s.h - r.h),
                                            c = Math.max(0, s.w - r.w);
                                        !y.rail.scrollable && y.railh.scrollable ? y.rail.drag.ck = a > 0 ? "v" : !1 : y.rail.scrollable && !y.railh.scrollable ? y.rail.drag.ck = c > 0 ? "h" : !1 : y.rail.drag.ck = !1, y.rail.drag.ck || (y.rail.drag.dl = "f")
                                    }
                                    if (y.opt.touchbehavior && y.isiframe && x.isie) {
                                        var d = y.win.position();
                                        y.rail.drag.x += d.left, y.rail.drag.y += d.top
                                    }
                                    if (y.hasmoving = !1, y.lastmouseup = !1, y.scrollmom.reset(e.clientX, e.clientY), !x.cantouch && !this.istouchcapable && !e.pointerType) {
                                        var u = t ? /INPUT|SELECT|TEXTAREA/i.test(t.nodeName) : !1;
                                        if (!u) return !y.ispage && x.hasmousecapture && t.setCapture(), y.opt.touchbehavior ? (t.onclick && !t._onclick && (t._onclick = t.onclick, t.onclick = function(e) {
                                            return y.hasmoving ? !1 : void t._onclick.call(this, e)
                                        }), y.cancelEvent(e)) : y.stopPropagation(e);
                                        /SUBMIT|CANCEL|BUTTON/i.test(l(t).attr("type")) && (pc = {
                                            tg: t,
                                            click: !1
                                        }, y.preventclick = pc)
                                    }
                                }
                            }, y.ontouchend = function(e) {
                                if (!y.rail.drag) return !0;
                                if (2 == y.rail.drag.pt) {
                                    if (e.pointerType && 2 != e.pointerType && "touch" != e.pointerType) return !1;
                                    if (y.scrollmom.doMomentum(), y.rail.drag = !1, y.hasmoving && (y.lastmouseup = !0, y.hideCursor(), x.hasmousecapture && document.releaseCapture(), !x.cantouch)) return y.cancelEvent(e)
                                } else if (1 == y.rail.drag.pt) return y.onmouseup(e)
                            };
                            var k = y.opt.touchbehavior && y.isiframe && !x.hasmousecapture;
                            y.ontouchmove = function(e, t) {
                                if (!y.rail.drag) return !1;
                                if (e.targetTouches && y.opt.preventmultitouchscrolling && e.targetTouches.length > 1) return !1;
                                if (e.pointerType && 2 != e.pointerType && "touch" != e.pointerType) return !1;
                                if (2 == y.rail.drag.pt) {
                                    if (x.cantouch && x.isios && "undefined" == typeof e.original) return !0;
                                    y.hasmoving = !0, y.preventclick && !y.preventclick.click && (y.preventclick.click = y.preventclick.tg.onclick || !1, y.preventclick.tg.onclick = y.onpreventclick);
                                    var o = l.extend({
                                        original: e
                                    }, e);
                                    if (e = o, "changedTouches" in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY), y.forcescreen) {
                                        var i = e;
                                        e = {
                                            original: e.original ? e.original : e
                                        }, e.clientX = i.screenX, e.clientY = i.screenY
                                    }
                                    var n, r;
                                    if (r = n = 0, k && !t) {
                                        var s = y.win.position();
                                        r = -s.left, n = -s.top
                                    }
                                    var a = e.clientY + n,
                                        c = a - y.rail.drag.y,
                                        d = e.clientX + r,
                                        u = d - y.rail.drag.x,
                                        p = y.rail.drag.st - c;
                                    y.ishwscroll && y.opt.bouncescroll ? 0 > p ? p = Math.round(p / 2) : p > y.page.maxh && (p = y.page.maxh + Math.round((p - y.page.maxh) / 2)) : (0 > p && (p = 0, a = 0), p > y.page.maxh && (p = y.page.maxh, a = 0));
                                    var h;
                                    y.railh && y.railh.scrollable && (h = y.isrtlmode ? u - y.rail.drag.sl : y.rail.drag.sl - u, y.ishwscroll && y.opt.bouncescroll ? 0 > h ? h = Math.round(h / 2) : h > y.page.maxw && (h = y.page.maxw + Math.round((h - y.page.maxw) / 2)) : (0 > h && (h = 0, d = 0), h > y.page.maxw && (h = y.page.maxw, d = 0)));
                                    var f = !1;
                                    if (y.rail.drag.dl) f = !0, "v" == y.rail.drag.dl ? h = y.rail.drag.sl : "h" == y.rail.drag.dl && (p = y.rail.drag.st);
                                    else {
                                        var m = Math.abs(c),
                                            g = Math.abs(u),
                                            v = y.opt.directionlockdeadzone;
                                        if ("v" == y.rail.drag.ck) {
                                            if (m > v && .3 * m >= g) return y.rail.drag = !1, !0;
                                            g > v && (y.rail.drag.dl = "f", l("body").scrollTop(l("body").scrollTop()))
                                        } else if ("h" == y.rail.drag.ck) {
                                            if (g > v && .3 * g >= m) return y.rail.drag = !1, !0;
                                            m > v && (y.rail.drag.dl = "f", l("body").scrollLeft(l("body").scrollLeft()))
                                        }
                                    }
                                    if (y.synched("touchmove", function() {
                                            y.rail.drag && 2 == y.rail.drag.pt && (y.prepareTransition && y.prepareTransition(0), y.rail.scrollable && y.setScrollTop(p), y.scrollmom.update(d, a), y.railh && y.railh.scrollable ? (y.setScrollLeft(h), y.showCursor(p, h)) : y.showCursor(p), x.isie10 && document.selection.clear())
                                        }), x.ischrome && y.istouchcapable && (f = !1), f) return y.cancelEvent(e)
                                } else if (1 == y.rail.drag.pt) return y.onmousemove(e)
                            }
                        }
                        if (y.onmousedown = function(e, t) {
                                if (!y.rail.drag || 1 == y.rail.drag.pt) {
                                    if (y.railslocked) return y.cancelEvent(e);
                                    y.cancelScroll(), y.rail.drag = {
                                        x: e.clientX,
                                        y: e.clientY,
                                        sx: y.scroll.x,
                                        sy: y.scroll.y,
                                        pt: 1,
                                        hr: !!t
                                    };
                                    var o = y.getTarget(e);
                                    return !y.ispage && x.hasmousecapture && o.setCapture(), y.isiframe && !x.hasmousecapture && (y.saved.csspointerevents = y.doc.css("pointer-events"), y.css(y.doc, {
                                        "pointer-events": "none"
                                    })), y.hasmoving = !1, y.cancelEvent(e)
                                }
                            }, y.onmouseup = function(e) {
                                return y.rail.drag ? 1 != y.rail.drag.pt ? !0 : (x.hasmousecapture && document.releaseCapture(), y.isiframe && !x.hasmousecapture && y.doc.css("pointer-events", y.saved.csspointerevents), y.rail.drag = !1, y.hasmoving && y.triggerScrollEnd(), y.cancelEvent(e)) : void 0
                            }, y.onmousemove = function(e) {
                                if (y.rail.drag) {
                                    if (1 != y.rail.drag.pt) return;
                                    if (x.ischrome && 0 == e.which) return y.onmouseup(e);
                                    if (y.cursorfreezed = !0, y.hasmoving = !0, y.rail.drag.hr) {
                                        y.scroll.x = y.rail.drag.sx + (e.clientX - y.rail.drag.x), y.scroll.x < 0 && (y.scroll.x = 0);
                                        var t = y.scrollvaluemaxw;
                                        y.scroll.x > t && (y.scroll.x = t)
                                    } else {
                                        y.scroll.y = y.rail.drag.sy + (e.clientY - y.rail.drag.y), y.scroll.y < 0 && (y.scroll.y = 0);
                                        var o = y.scrollvaluemax;
                                        y.scroll.y > o && (y.scroll.y = o)
                                    }
                                    return y.synched("mousemove", function() {
                                        y.rail.drag && 1 == y.rail.drag.pt && (y.showCursor(), y.rail.drag.hr ? y.hasreversehr ? y.doScrollLeft(y.scrollvaluemaxw - Math.round(y.scroll.x * y.scrollratio.x), y.opt.cursordragspeed) : y.doScrollLeft(Math.round(y.scroll.x * y.scrollratio.x), y.opt.cursordragspeed) : y.doScrollTop(Math.round(y.scroll.y * y.scrollratio.y), y.opt.cursordragspeed))
                                    }), y.cancelEvent(e)
                                }
                            }, x.cantouch || y.opt.touchbehavior) y.onpreventclick = function(e) {
                            return y.preventclick ? (y.preventclick.tg.onclick = y.preventclick.click, y.preventclick = !1, y.cancelEvent(e)) : void 0
                        }, y.bind(y.win, "mousedown", y.ontouchstart), y.onclick = x.isios ? !1 : function(e) {
                            return y.lastmouseup ? (y.lastmouseup = !1, y.cancelEvent(e)) : !0
                        }, y.opt.grabcursorenabled && x.cursorgrabvalue && (y.css(y.ispage ? y.doc : y.win, {
                            cursor: x.cursorgrabvalue
                        }), y.css(y.rail, {
                            cursor: x.cursorgrabvalue
                        }));
                        else {
                            var S = function(e) {
                                if (y.selectiondrag) {
                                    if (e) {
                                        var t = y.win.outerHeight(),
                                            o = e.pageY - y.selectiondrag.top;
                                        o > 0 && t > o && (o = 0), o >= t && (o -= t), y.selectiondrag.df = o
                                    }
                                    if (0 != y.selectiondrag.df) {
                                        var i = 2 * -Math.floor(y.selectiondrag.df / 6);
                                        y.doScrollBy(i), y.debounced("doselectionscroll", function() {
                                            S()
                                        }, 50)
                                    }
                                }
                            };
                            "getSelection" in document ? y.hasTextSelected = function() {
                                return document.getSelection().rangeCount > 0
                            } : "selection" in document ? y.hasTextSelected = function() {
                                return "None" != document.selection.type
                            } : y.hasTextSelected = function() {
                                return !1
                            }, y.onselectionstart = function(e) {
                                y.ispage || (y.selectiondrag = y.win.offset())
                            }, y.onselectionend = function(e) {
                                y.selectiondrag = !1
                            }, y.onselectiondrag = function(e) {
                                y.selectiondrag && y.hasTextSelected() && y.debounced("selectionscroll", function() {
                                    S(e)
                                }, 250)
                            }
                        }
                        x.hasw3ctouch ? (y.css(y.rail, {
                            "touch-action": "none"
                        }), y.css(y.cursor, {
                            "touch-action": "none"
                        }), y.bind(y.win, "pointerdown", y.ontouchstart), y.bind(document, "pointerup", y.ontouchend), y.bind(document, "pointermove", y.ontouchmove)) : x.hasmstouch ? (y.css(y.rail, {
                            "-ms-touch-action": "none"
                        }), y.css(y.cursor, {
                            "-ms-touch-action": "none"
                        }), y.bind(y.win, "MSPointerDown", y.ontouchstart), y.bind(document, "MSPointerUp", y.ontouchend), y.bind(document, "MSPointerMove", y.ontouchmove), y.bind(y.cursor, "MSGestureHold", function(e) {
                            e.preventDefault()
                        }), y.bind(y.cursor, "contextmenu", function(e) {
                            e.preventDefault()
                        })) : this.istouchcapable && (y.bind(y.win, "touchstart", y.ontouchstart), y.bind(document, "touchend", y.ontouchend), y.bind(document, "touchcancel", y.ontouchend), y.bind(document, "touchmove", y.ontouchmove)), (y.opt.cursordragontouch || !x.cantouch && !y.opt.touchbehavior) && (y.rail.css({
                            cursor: "default"
                        }), y.railh && y.railh.css({
                            cursor: "default"
                        }), y.jqbind(y.rail, "mouseenter", function() {
                            return y.ispage || y.win.is(":visible") ? (y.canshowonmouseevent && y.showCursor(), void(y.rail.active = !0)) : !1
                        }), y.jqbind(y.rail, "mouseleave", function() {
                            y.rail.active = !1, y.rail.drag || y.hideCursor()
                        }), y.opt.sensitiverail && (y.bind(y.rail, "click", function(e) {
                            y.doRailClick(e, !1, !1)
                        }), y.bind(y.rail, "dblclick", function(e) {
                            y.doRailClick(e, !0, !1)
                        }), y.bind(y.cursor, "click", function(e) {
                            y.cancelEvent(e)
                        }), y.bind(y.cursor, "dblclick", function(e) {
                            y.cancelEvent(e)
                        })), y.railh && (y.jqbind(y.railh, "mouseenter", function() {
                            return y.ispage || y.win.is(":visible") ? (y.canshowonmouseevent && y.showCursor(), void(y.rail.active = !0)) : !1
                        }), y.jqbind(y.railh, "mouseleave", function() {
                            y.rail.active = !1, y.rail.drag || y.hideCursor()
                        }), y.opt.sensitiverail && (y.bind(y.railh, "click", function(e) {
                            y.doRailClick(e, !1, !0)
                        }), y.bind(y.railh, "dblclick", function(e) {
                            y.doRailClick(e, !0, !0)
                        }), y.bind(y.cursorh, "click", function(e) {
                            y.cancelEvent(e)
                        }), y.bind(y.cursorh, "dblclick", function(e) {
                            y.cancelEvent(e)
                        })))), x.cantouch || y.opt.touchbehavior ? (y.bind(x.hasmousecapture ? y.win : document, "mouseup", y.ontouchend), y.bind(document, "mousemove", y.ontouchmove), y.onclick && y.bind(document, "click", y.onclick), y.opt.cursordragontouch && (y.bind(y.cursor, "mousedown", y.onmousedown), y.bind(y.cursor, "mouseup", y.onmouseup), y.cursorh && y.bind(y.cursorh, "mousedown", function(e) {
                            y.onmousedown(e, !0)
                        }), y.cursorh && y.bind(y.cursorh, "mouseup", y.onmouseup))) : (y.bind(x.hasmousecapture ? y.win : document, "mouseup", y.onmouseup), y.bind(document, "mousemove", y.onmousemove), y.onclick && y.bind(document, "click", y.onclick), y.bind(y.cursor, "mousedown", y.onmousedown), y.bind(y.cursor, "mouseup", y.onmouseup), y.railh && (y.bind(y.cursorh, "mousedown", function(e) {
                            y.onmousedown(e, !0)
                        }), y.bind(y.cursorh, "mouseup", y.onmouseup)), !y.ispage && y.opt.enablescrollonselection && (y.bind(y.win[0], "mousedown", y.onselectionstart), y.bind(document, "mouseup", y.onselectionend), y.bind(y.cursor, "mouseup", y.onselectionend), y.cursorh && y.bind(y.cursorh, "mouseup", y.onselectionend), y.bind(document, "mousemove", y.onselectiondrag)), y.zoom && (y.jqbind(y.zoom, "mouseenter", function() {
                            y.canshowonmouseevent && y.showCursor(), y.rail.active = !0
                        }), y.jqbind(y.zoom, "mouseleave", function() {
                            y.rail.active = !1, y.rail.drag || y.hideCursor()
                        }))), y.opt.enablemousewheel && (y.isiframe || y.bind(x.isie && y.ispage ? document : y.win, "mousewheel", y.onmousewheel), y.bind(y.rail, "mousewheel", y.onmousewheel), y.railh && y.bind(y.railh, "mousewheel", y.onmousewheelhr)), y.ispage || x.cantouch || /HTML|^BODY/.test(y.win[0].nodeName) || (y.win.attr("tabindex") || y.win.attr({
                            tabindex: r++
                        }), y.jqbind(y.win, "focus", function(e) {
                            i = y.getTarget(e).id || !0, y.hasfocus = !0, y.canshowonmouseevent && y.noticeCursor()
                        }), y.jqbind(y.win, "blur", function(e) {
                            i = !1, y.hasfocus = !1
                        }), y.jqbind(y.win, "mouseenter", function(e) {
                            n = y.getTarget(e).id || !0, y.hasmousefocus = !0, y.canshowonmouseevent && y.noticeCursor()
                        }), y.jqbind(y.win, "mouseleave", function() {
                            n = !1, y.hasmousefocus = !1, y.rail.drag || y.hideCursor()
                        }))
                    }
                    if (y.onkeypress = function(e) {
                            if (y.railslocked && 0 == y.page.maxh) return !0;
                            e = e ? e : window.e;
                            var t = y.getTarget(e);
                            if (t && /INPUT|TEXTAREA|SELECT|OPTION/.test(t.nodeName)) {
                                var o = t.getAttribute("type") || t.type || !1;
                                if (!o || !/submit|button|cancel/i.tp) return !0
                            }
                            if (l(t).attr("contenteditable")) return !0;
                            if (y.hasfocus || y.hasmousefocus && !i || y.ispage && !i && !n) {
                                var r = e.keyCode;
                                if (y.railslocked && 27 != r) return y.cancelEvent(e);
                                var s = e.ctrlKey || !1,
                                    a = e.shiftKey || !1,
                                    c = !1;
                                switch (r) {
                                    case 38:
                                    case 63233:
                                        y.doScrollBy(72), c = !0;
                                        break;
                                    case 40:
                                    case 63235:
                                        y.doScrollBy(-72), c = !0;
                                        break;
                                    case 37:
                                    case 63232:
                                        y.railh && (s ? y.doScrollLeft(0) : y.doScrollLeftBy(72), c = !0);
                                        break;
                                    case 39:
                                    case 63234:
                                        y.railh && (s ? y.doScrollLeft(y.page.maxw) : y.doScrollLeftBy(-72), c = !0);
                                        break;
                                    case 33:
                                    case 63276:
                                        y.doScrollBy(y.view.h), c = !0;
                                        break;
                                    case 34:
                                    case 63277:
                                        y.doScrollBy(-y.view.h), c = !0;
                                        break;
                                    case 36:
                                    case 63273:
                                        y.railh && s ? y.doScrollPos(0, 0) : y.doScrollTo(0), c = !0;
                                        break;
                                    case 35:
                                    case 63275:
                                        y.railh && s ? y.doScrollPos(y.page.maxw, y.page.maxh) : y.doScrollTo(y.page.maxh), c = !0;
                                        break;
                                    case 32:
                                        y.opt.spacebarenabled && (y.doScrollBy(a ? y.view.h : -y.view.h), c = !0);
                                        break;
                                    case 27:
                                        y.zoomactive && (y.doZoom(), c = !0)
                                }
                                if (c) return y.cancelEvent(e)
                            }
                        }, y.opt.enablekeyboard && y.bind(document, x.isopera && !x.isopera12 ? "keypress" : "keydown", y.onkeypress), y.bind(document, "keydown", function(e) {
                            var t = e.ctrlKey || !1;
                            t && (y.wheelprevented = !0)
                        }), y.bind(document, "keyup", function(e) {
                            var t = e.ctrlKey || !1;
                            t || (y.wheelprevented = !1)
                        }), y.bind(window, "blur", function(e) {
                            y.wheelprevented = !1
                        }), y.bind(window, "resize", y.lazyResize), y.bind(window, "orientationchange", y.lazyResize), y.bind(window, "load", y.lazyResize), x.ischrome && !y.ispage && !y.haswrapper) {
                        var C = y.win.attr("style"),
                            E = parseFloat(y.win.css("width")) + 1;
                        y.win.css("width", E), y.synched("chromefix", function() {
                            y.win.attr("style", C)
                        })
                    }
                    y.onAttributeChange = function(e) {
                        y.lazyResize(y.isieold ? 250 : 30)
                    }, f !== !1 && (y.observerbody = new f(function(e) {
                        return e.forEach(function(e) {
                            return "attributes" == e.type ? l("body").hasClass("modal-open") ? y.hide() : y.show() : void 0
                        }), document.body.scrollHeight != y.page.maxh ? y.lazyResize(30) : void 0
                    }), y.observerbody.observe(document.body, {
                        childList: !0,
                        subtree: !0,
                        characterData: !1,
                        attributes: !0,
                        attributeFilter: ["class"]
                    })), y.ispage || y.haswrapper || (f !== !1 ? (y.observer = new f(function(e) {
                        e.forEach(y.onAttributeChange)
                    }), y.observer.observe(y.win[0], {
                        childList: !0,
                        characterData: !1,
                        attributes: !0,
                        subtree: !1
                    }), y.observerremover = new f(function(e) {
                        e.forEach(function(e) {
                            if (e.removedNodes.length > 0)
                                for (var t in e.removedNodes)
                                    if (y && e.removedNodes[t] == y.win[0]) return y.remove()
                        })
                    }), y.observerremover.observe(y.win[0].parentNode, {
                        childList: !0,
                        characterData: !1,
                        attributes: !1,
                        subtree: !1
                    })) : (y.bind(y.win, x.isie && !x.isie9 ? "propertychange" : "DOMAttrModified", y.onAttributeChange), x.isie9 && y.win[0].attachEvent("onpropertychange", y.onAttributeChange), y.bind(y.win, "DOMNodeRemoved", function(e) {
                        e.target == y.win[0] && y.remove()
                    }))), !y.ispage && y.opt.boxzoom && y.bind(window, "resize", y.resizeZoom), y.istextarea && y.bind(y.win, "mouseup", y.lazyResize), y.lazyResize(30)
                }
                if ("IFRAME" == this.doc[0].nodeName) {
                    var N = function() {
                        y.iframexd = !1;
                        var e;
                        try {
                            e = "contentDocument" in this ? this.contentDocument : this.contentWindow.document, e.domain
                        } catch (t) {
                            y.iframexd = !0, e = !1
                        }
                        if (y.iframexd) return "console" in window && console.log("NiceScroll error: policy restriced iframe"), !0;
                        if (y.forcescreen = !0, y.isiframe && (y.iframe = {
                                doc: l(e),
                                html: y.doc.contents().find("html")[0],
                                body: y.doc.contents().find("body")[0]
                            }, y.getContentSize = function() {
                                return {
                                    w: Math.max(y.iframe.html.scrollWidth, y.iframe.body.scrollWidth),
                                    h: Math.max(y.iframe.html.scrollHeight, y.iframe.body.scrollHeight)
                                }
                            }, y.docscroll = l(y.iframe.body)), !x.isios && y.opt.iframeautoresize && !y.isiframe) {
                            y.win.scrollTop(0), y.doc.height("");
                            var o = Math.max(e.getElementsByTagName("html")[0].scrollHeight, e.body.scrollHeight);
                            y.doc.height(o)
                        }
                        y.lazyResize(30), x.isie7 && y.css(l(y.iframe.html), {
                            "overflow-y": "hidden"
                        }), y.css(l(y.iframe.body), {
                            "overflow-y": "hidden"
                        }), x.isios && y.haswrapper && y.css(l(e.body), {
                            "-webkit-transform": "translate3d(0,0,0)"
                        }), "contentWindow" in this ? y.bind(this.contentWindow, "scroll", y.onscroll) : y.bind(e, "scroll", y.onscroll), y.opt.enablemousewheel && y.bind(e, "mousewheel", y.onmousewheel), y.opt.enablekeyboard && y.bind(e, x.isopera ? "keypress" : "keydown", y.onkeypress), (x.cantouch || y.opt.touchbehavior) && (y.bind(e, "mousedown", y.ontouchstart), y.bind(e, "mousemove", function(e) {
                            return y.ontouchmove(e, !0)
                        }), y.opt.grabcursorenabled && x.cursorgrabvalue && y.css(l(e.body), {
                            cursor: x.cursorgrabvalue
                        })), y.bind(e, "mouseup", y.ontouchend), y.zoom && (y.opt.dblclickzoom && y.bind(e, "dblclick", y.doZoom), y.ongesturezoom && y.bind(e, "gestureend", y.ongesturezoom))
                    };
                    this.doc[0].readyState && "complete" == this.doc[0].readyState && setTimeout(function() {
                        N.call(y.doc[0], !1)
                    }, 500), y.bind(this.doc, "load", N)
                }
            }, this.showCursor = function(e, t) {
                if (y.cursortimeout && (clearTimeout(y.cursortimeout), y.cursortimeout = 0), y.rail) {
                    if (y.autohidedom && (y.autohidedom.stop().css({
                            opacity: y.opt.cursoropacitymax
                        }), y.cursoractive = !0), y.rail.drag && 1 == y.rail.drag.pt || ("undefined" != typeof e && e !== !1 && (y.scroll.y = Math.round(1 * e / y.scrollratio.y)), "undefined" != typeof t && (y.scroll.x = Math.round(1 * t / y.scrollratio.x))), y.cursor.css({
                            height: y.cursorheight,
                            top: y.scroll.y
                        }), y.cursorh) {
                        var o = y.hasreversehr ? y.scrollvaluemaxw - y.scroll.x : y.scroll.x;
                        y.cursorh.css(!y.rail.align && y.rail.visibility ? {
                            width: y.cursorwidth,
                            left: o + y.rail.width
                        } : {
                            width: y.cursorwidth,
                            left: o
                        }), y.cursoractive = !0
                    }
                    y.zoom && y.zoom.stop().css({
                        opacity: y.opt.cursoropacitymax
                    })
                }
            }, this.hideCursor = function(e) {
                y.cursortimeout || y.rail && y.autohidedom && (y.hasmousefocus && "leave" == y.opt.autohidemode || (y.cursortimeout = setTimeout(function() {
                    y.rail.active && y.showonmouseevent || (y.autohidedom.stop().animate({
                        opacity: y.opt.cursoropacitymin
                    }), y.zoom && y.zoom.stop().animate({
                        opacity: y.opt.cursoropacitymin
                    }), y.cursoractive = !1), y.cursortimeout = 0
                }, e || y.opt.hidecursordelay)))
            }, this.noticeCursor = function(e, t, o) {
                y.showCursor(t, o), y.rail.active || y.hideCursor(e)
            }, this.getContentSize = y.ispage ? function() {
                return {
                    w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                    h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }
            } : y.haswrapper ? function() {
                return {
                    w: y.doc.outerWidth() + parseInt(y.win.css("paddingLeft")) + parseInt(y.win.css("paddingRight")),
                    h: y.doc.outerHeight() + parseInt(y.win.css("paddingTop")) + parseInt(y.win.css("paddingBottom"))
                }
            } : function() {
                return {
                    w: y.docscroll[0].scrollWidth,
                    h: y.docscroll[0].scrollHeight
                }
            }, this.onResize = function(e, t) {
                if (!y || !y.win) return !1;
                if (!y.haswrapper && !y.ispage) {
                    if ("none" == y.win.css("display")) return y.visibility && y.hideRail().hideRailHr(), !1;
                    y.hidden || y.visibility || y.showRail().showRailHr()
                }
                var o = y.page.maxh,
                    i = y.page.maxw,
                    n = {
                        h: y.view.h,
                        w: y.view.w
                    };
                if (y.view = {
                        w: y.ispage ? y.win.width() : parseInt(y.win[0].clientWidth),
                        h: y.ispage ? y.win.height() : parseInt(y.win[0].clientHeight)
                    }, y.page = t ? t : y.getContentSize(), y.page.maxh = Math.max(0, y.page.h - y.view.h), y.page.maxw = Math.max(0, y.page.w - y.view.w), y.page.maxh == o && y.page.maxw == i && y.view.w == n.w && y.view.h == n.h) {
                    if (y.ispage) return y;
                    var r = y.win.offset();
                    if (y.lastposition) {
                        var s = y.lastposition;
                        if (s.top == r.top && s.left == r.left) return y
                    }
                    y.lastposition = r
                }
                if (0 == y.page.maxh ? (y.hideRail(), y.scrollvaluemax = 0, y.scroll.y = 0, y.scrollratio.y = 0, y.cursorheight = 0, y.setScrollTop(0), y.rail.scrollable = !1) : (y.page.maxh -= y.opt.railpadding.top + y.opt.railpadding.bottom, y.rail.scrollable = !0), 0 == y.page.maxw ? (y.hideRailHr(), y.scrollvaluemaxw = 0, y.scroll.x = 0, y.scrollratio.x = 0, y.cursorwidth = 0, y.setScrollLeft(0), y.railh.scrollable = !1) : (y.page.maxw -= y.opt.railpadding.left + y.opt.railpadding.right, y.railh.scrollable = !0), y.railslocked = y.locked || 0 == y.page.maxh && 0 == y.page.maxw, y.railslocked) return y.ispage || y.updateScrollBar(y.view), !1;
                y.hidden || y.visibility ? y.hidden || y.railh.visibility || y.showRailHr() : y.showRail().showRailHr(), y.istextarea && y.win.css("resize") && "none" != y.win.css("resize") && (y.view.h -= 20), y.cursorheight = Math.min(y.view.h, Math.round(y.view.h * (y.view.h / y.page.h))), y.cursorheight = y.opt.cursorfixedheight ? y.opt.cursorfixedheight : Math.max(y.opt.cursorminheight, y.cursorheight), y.cursorwidth = Math.min(y.view.w, Math.round(y.view.w * (y.view.w / y.page.w))), y.cursorwidth = y.opt.cursorfixedheight ? y.opt.cursorfixedheight : Math.max(y.opt.cursorminheight, y.cursorwidth), y.scrollvaluemax = y.view.h - y.cursorheight - y.cursor.hborder - (y.opt.railpadding.top + y.opt.railpadding.bottom), y.railh && (y.railh.width = y.page.maxh > 0 ? y.view.w - y.rail.width : y.view.w, y.scrollvaluemaxw = y.railh.width - y.cursorwidth - y.cursorh.wborder - (y.opt.railpadding.left + y.opt.railpadding.right)), y.ispage || y.updateScrollBar(y.view), y.scrollratio = {
                    x: y.page.maxw / y.scrollvaluemaxw,
                    y: y.page.maxh / y.scrollvaluemax
                };
                var a = y.getScrollTop();
                return a > y.page.maxh ? y.doScrollTop(y.page.maxh) : (y.scroll.y = Math.round(y.getScrollTop() * (1 / y.scrollratio.y)), y.scroll.x = Math.round(y.getScrollLeft() * (1 / y.scrollratio.x)), y.cursoractive && y.noticeCursor()), y.scroll.y && 0 == y.getScrollTop() && y.doScrollTo(Math.floor(y.scroll.y * y.scrollratio.y)), y
            }, this.resize = y.onResize, this.lazyResize = function(e) {
                return e = isNaN(e) ? 30 : e, y.debounced("resize", y.resize, e), y
            }, this.jqbind = function(e, t, o) {
                y.events.push({
                    e: e,
                    n: t,
                    f: o,
                    q: !0
                }), l(e).bind(t, o)
            }, this.bind = function(e, t, o, i) {
                var n = "jquery" in e ? e[0] : e;
                if ("mousewheel" == t)
                    if (window.addEventListener || "onwheel" in document) y._bind(n, "wheel", o, i || !1);
                    else {
                        var r = "undefined" != typeof document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
                        h(n, r, o, i || !1), "DOMMouseScroll" == r && h(n, "MozMousePixelScroll", o, i || !1)
                    }
                else if (n.addEventListener) {
                    if (x.cantouch && /mouseup|mousedown|mousemove/.test(t)) {
                        var s = "mousedown" == t ? "touchstart" : "mouseup" == t ? "touchend" : "touchmove";
                        y._bind(n, s, function(e) {
                            if (e.touches) {
                                if (e.touches.length < 2) {
                                    var t = e.touches.length ? e.touches[0] : e;
                                    t.original = e, o.call(this, t)
                                }
                            } else if (e.changedTouches) {
                                var t = e.changedTouches[0];
                                t.original = e, o.call(this, t)
                            }
                        }, i || !1)
                    }
                    y._bind(n, t, o, i || !1), x.cantouch && "mouseup" == t && y._bind(n, "touchcancel", o, i || !1)
                } else y._bind(n, t, function(e) {
                    return e = e || window.event || !1, e && e.srcElement && (e.target = e.srcElement), "pageY" in e || (e.pageX = e.clientX + document.documentElement.scrollLeft, e.pageY = e.clientY + document.documentElement.scrollTop), o.call(n, e) === !1 || i === !1 ? y.cancelEvent(e) : !0
                })
            }, x.haseventlistener ? (this._bind = function(e, t, o, i) {
                y.events.push({
                    e: e,
                    n: t,
                    f: o,
                    b: i,
                    q: !1
                }), e.addEventListener(t, o, i || !1)
            }, this.cancelEvent = function(e) {
                if (!e) return !1;
                var e = e.original ? e.original : e;
                return e.preventDefault(), e.stopPropagation(), e.preventManipulation && e.preventManipulation(), !1
            }, this.stopPropagation = function(e) {
                if (!e) return !1;
                var e = e.original ? e.original : e;
                return e.stopPropagation(), !1
            }, this._unbind = function(e, t, o, i) {
                e.removeEventListener(t, o, i)
            }) : (this._bind = function(e, t, o, i) {
                y.events.push({
                    e: e,
                    n: t,
                    f: o,
                    b: i,
                    q: !1
                }), e.attachEvent ? e.attachEvent("on" + t, o) : e["on" + t] = o
            }, this.cancelEvent = function(e) {
                var e = window.event || !1;
                return e ? (e.cancelBubble = !0, e.cancel = !0, e.returnValue = !1, !1) : !1
            }, this.stopPropagation = function(e) {
                var e = window.event || !1;
                return e ? (e.cancelBubble = !0, !1) : !1
            }, this._unbind = function(e, t, o, i) {
                e.detachEvent ? e.detachEvent("on" + t, o) : e["on" + t] = !1
            }), this.unbindAll = function() {
                for (var e = 0; e < y.events.length; e++) {
                    var t = y.events[e];
                    t.q ? t.e.unbind(t.n, t.f) : y._unbind(t.e, t.n, t.f, t.b)
                }
            }, this.showRail = function() {
                return 0 == y.page.maxh || !y.ispage && "none" == y.win.css("display") || (y.visibility = !0, y.rail.visibility = !0, y.rail.css("display", "block")), y
            }, this.showRailHr = function() {
                return y.railh ? (0 == y.page.maxw || !y.ispage && "none" == y.win.css("display") || (y.railh.visibility = !0, y.railh.css("display", "block")), y) : y
            }, this.hideRail = function() {
                return y.visibility = !1, y.rail.visibility = !1, y.rail.css("display", "none"), y
            }, this.hideRailHr = function() {
                return y.railh ? (y.railh.visibility = !1, y.railh.css("display", "none"), y) : y
            }, this.show = function() {
                return y.hidden = !1, y.railslocked = !1, y.showRail().showRailHr()
            }, this.hide = function() {
                return y.hidden = !0, y.railslocked = !0, y.hideRail().hideRailHr()
            }, this.toggle = function() {
                return y.hidden ? y.show() : y.hide()
            }, this.remove = function() {
                y.stop(), y.cursortimeout && clearTimeout(y.cursortimeout), y.doZoomOut(), y.unbindAll(), x.isie9 && y.win[0].detachEvent("onpropertychange", y.onAttributeChange), y.observer !== !1 && y.observer.disconnect(), y.observerremover !== !1 && y.observerremover.disconnect(), y.observerbody !== !1 && y.observerbody.disconnect(), y.events = null, y.cursor && y.cursor.remove(), y.cursorh && y.cursorh.remove(), y.rail && y.rail.remove(), y.railh && y.railh.remove(), y.zoom && y.zoom.remove();
                for (var e = 0; e < y.saved.css.length; e++) {
                    var t = y.saved.css[e];
                    t[0].css(t[1], "undefined" == typeof t[2] ? "" : t[2])
                }
                y.saved = !1, y.me.data("__nicescroll", "");
                var o = l.nicescroll;
                o.each(function(e) {
                    if (this && this.id === y.id) {
                        delete o[e];
                        for (var t = ++e; t < o.length; t++, e++) o[e] = o[t];
                        o.length--, o.length && delete o[o.length]
                    }
                });
                for (var i in y) y[i] = null, delete y[i];
                y = null
            }, this.scrollstart = function(e) {
                return this.onscrollstart = e, y
            }, this.scrollend = function(e) {
                return this.onscrollend = e, y
            }, this.scrollcancel = function(e) {
                return this.onscrollcancel = e, y
            }, this.zoomin = function(e) {
                return this.onzoomin = e, y
            }, this.zoomout = function(e) {
                return this.onzoomout = e, y
            }, this.isScrollable = function(e) {
                var t = e.target ? e.target : e;
                if ("OPTION" == t.nodeName) return !0;
                for (; t && 1 == t.nodeType && !/^BODY|HTML/.test(t.nodeName);) {
                    var o = l(t),
                        i = o.css("overflowY") || o.css("overflowX") || o.css("overflow") || "";
                    if (/scroll|auto/.test(i)) return t.clientHeight != t.scrollHeight;
                    t = t.parentNode ? t.parentNode : !1
                }
                return !1
            }, this.getViewport = function(e) {
                for (var t = e && e.parentNode ? e.parentNode : !1; t && 1 == t.nodeType && !/^BODY|HTML/.test(t.nodeName);) {
                    var o = l(t);
                    if (/fixed|absolute/.test(o.css("position"))) return o;
                    var i = o.css("overflowY") || o.css("overflowX") || o.css("overflow") || "";
                    if (/scroll|auto/.test(i) && t.clientHeight != t.scrollHeight) return o;
                    if (o.getNiceScroll().length > 0) return o;
                    t = t.parentNode ? t.parentNode : !1
                }
                return !1
            }, this.triggerScrollEnd = function() {
                if (y.onscrollend) {
                    var e = y.getScrollLeft(),
                        t = y.getScrollTop(),
                        o = {
                            type: "scrollend",
                            current: {
                                x: e,
                                y: t
                            },
                            end: {
                                x: e,
                                y: t
                            }
                        };
                    y.onscrollend.call(y, o)
                }
            }, this.onmousewheel = function(e) {
                if (!y.wheelprevented) {
                    if (y.railslocked) return y.debounced("checkunlock", y.resize, 250), !0;
                    if (y.rail.drag) return y.cancelEvent(e);
                    if ("auto" == y.opt.oneaxismousemode && 0 != e.deltaX && (y.opt.oneaxismousemode = !1), y.opt.oneaxismousemode && 0 == e.deltaX && !y.rail.scrollable) return y.railh && y.railh.scrollable ? y.onmousewheelhr(e) : !0;
                    var t = +new Date,
                        o = !1;
                    if (y.opt.preservenativescrolling && y.checkarea + 600 < t && (y.nativescrollingarea = y.isScrollable(e), o = !0), y.checkarea = t, y.nativescrollingarea) return !0;
                    var i = g(e, !1, o);
                    return i && (y.checkarea = 0), i
                }
            }, this.onmousewheelhr = function(e) {
                if (!y.wheelprevented) {
                    if (y.railslocked || !y.railh.scrollable) return !0;
                    if (y.rail.drag) return y.cancelEvent(e);
                    var t = +new Date,
                        o = !1;
                    return y.opt.preservenativescrolling && y.checkarea + 600 < t && (y.nativescrollingarea = y.isScrollable(e), o = !0), y.checkarea = t, y.nativescrollingarea ? !0 : y.railslocked ? y.cancelEvent(e) : g(e, !0, o)
                }
            }, this.stop = function() {
                return y.cancelScroll(), y.scrollmon && y.scrollmon.stop(), y.cursorfreezed = !1, y.scroll.y = Math.round(y.getScrollTop() * (1 / y.scrollratio.y)), y.noticeCursor(), y
            }, this.getTransitionSpeed = function(e) {
                var t = Math.round(10 * y.opt.scrollspeed),
                    o = Math.min(t, Math.round(e / 20 * y.opt.scrollspeed));
                return o > 20 ? o : 0
            }, y.opt.smoothscroll ? y.ishwscroll && x.hastransition && y.opt.usetransition && y.opt.smoothscroll ? (this.prepareTransition = function(e, t) {
                var o = t ? e > 20 ? e : 0 : y.getTransitionSpeed(e),
                    i = o ? x.prefixstyle + "transform " + o + "ms ease-out" : "";
                return y.lasttransitionstyle && y.lasttransitionstyle == i || (y.lasttransitionstyle = i, y.doc.css(x.transitionstyle, i)), o
            }, this.doScrollLeft = function(e, t) {
                var o = y.scrollrunning ? y.newscrolly : y.getScrollTop();
                y.doScrollPos(e, o, t)
            }, this.doScrollTop = function(e, t) {
                var o = y.scrollrunning ? y.newscrollx : y.getScrollLeft();
                y.doScrollPos(o, e, t)
            }, this.doScrollPos = function(e, t, o) {
                var i = y.getScrollTop(),
                    n = y.getScrollLeft();
                return ((y.newscrolly - i) * (t - i) < 0 || (y.newscrollx - n) * (e - n) < 0) && y.cancelScroll(), 0 == y.opt.bouncescroll && (0 > t ? t = 0 : t > y.page.maxh && (t = y.page.maxh), 0 > e ? e = 0 : e > y.page.maxw && (e = y.page.maxw)), y.scrollrunning && e == y.newscrollx && t == y.newscrolly ? !1 : (y.newscrolly = t, y.newscrollx = e, y.newscrollspeed = o || !1, y.timer ? !1 : void(y.timer = setTimeout(function() {
                    var o = y.getScrollTop(),
                        i = y.getScrollLeft(),
                        n = {};
                    n.x = e - i, n.y = t - o, n.px = i, n.py = o;
                    var r = Math.round(Math.sqrt(Math.pow(n.x, 2) + Math.pow(n.y, 2))),
                        s = y.newscrollspeed && y.newscrollspeed > 1 ? y.newscrollspeed : y.getTransitionSpeed(r);
                    if (y.newscrollspeed && y.newscrollspeed <= 1 && (s *= y.newscrollspeed), y.prepareTransition(s, !0), y.timerscroll && y.timerscroll.tm && clearInterval(y.timerscroll.tm), s > 0) {
                        if (!y.scrollrunning && y.onscrollstart) {
                            var a = {
                                type: "scrollstart",
                                current: {
                                    x: i,
                                    y: o
                                },
                                request: {
                                    x: e,
                                    y: t
                                },
                                end: {
                                    x: y.newscrollx,
                                    y: y.newscrolly
                                },
                                speed: s
                            };
                            y.onscrollstart.call(y, a)
                        }
                        x.transitionend ? y.scrollendtrapped || (y.scrollendtrapped = !0, y.bind(y.doc, x.transitionend, y.onScrollTransitionEnd, !1)) : (y.scrollendtrapped && clearTimeout(y.scrollendtrapped), y.scrollendtrapped = setTimeout(y.onScrollTransitionEnd, s));
                        var l = o,
                            c = i;
                        y.timerscroll = {
                            bz: new k(l, y.newscrolly, s, 0, 0, .58, 1),
                            bh: new k(c, y.newscrollx, s, 0, 0, .58, 1)
                        }, y.cursorfreezed || (y.timerscroll.tm = setInterval(function() {
                            y.showCursor(y.getScrollTop(), y.getScrollLeft())
                        }, 60))
                    }
                    y.synched("doScroll-set", function() {
                        y.timer = 0, y.scrollendtrapped && (y.scrollrunning = !0), y.setScrollTop(y.newscrolly), y.setScrollLeft(y.newscrollx), y.scrollendtrapped || y.onScrollTransitionEnd()
                    })
                }, 50)))
            }, this.cancelScroll = function() {
                if (!y.scrollendtrapped) return !0;
                var e = y.getScrollTop(),
                    t = y.getScrollLeft();
                return y.scrollrunning = !1, x.transitionend || clearTimeout(x.transitionend), y.scrollendtrapped = !1, y._unbind(y.doc[0], x.transitionend, y.onScrollTransitionEnd), y.prepareTransition(0), y.setScrollTop(e), y.railh && y.setScrollLeft(t), y.timerscroll && y.timerscroll.tm && clearInterval(y.timerscroll.tm), y.timerscroll = !1, y.cursorfreezed = !1, y.showCursor(e, t), y
            }, this.onScrollTransitionEnd = function() {
                y.scrollendtrapped && y._unbind(y.doc[0], x.transitionend, y.onScrollTransitionEnd), y.scrollendtrapped = !1, y.prepareTransition(0), y.timerscroll && y.timerscroll.tm && clearInterval(y.timerscroll.tm), y.timerscroll = !1;
                var e = y.getScrollTop(),
                    t = y.getScrollLeft();
                return y.setScrollTop(e), y.railh && y.setScrollLeft(t), y.noticeCursor(!1, e, t), y.cursorfreezed = !1, 0 > e ? e = 0 : e > y.page.maxh && (e = y.page.maxh), 0 > t ? t = 0 : t > y.page.maxw && (t = y.page.maxw), e != y.newscrolly || t != y.newscrollx ? y.doScrollPos(t, e, y.opt.snapbackspeed) : (y.onscrollend && y.scrollrunning && y.triggerScrollEnd(), void(y.scrollrunning = !1))
            }) : (this.doScrollLeft = function(e, t) {
                var o = y.scrollrunning ? y.newscrolly : y.getScrollTop();
                y.doScrollPos(e, o, t)
            }, this.doScrollTop = function(e, t) {
                var o = y.scrollrunning ? y.newscrollx : y.getScrollLeft();
                y.doScrollPos(o, e, t)
            }, this.doScrollPos = function(e, t, o) {
                function i() {
                    if (y.cancelAnimationFrame) return !0;
                    if (y.scrollrunning = !0, p = 1 - p) return y.timer = d(i) || 1;
                    var e, t, o = 0,
                        n = t = y.getScrollTop();
                    if (y.dst.ay) {
                        n = y.bzscroll ? y.dst.py + y.bzscroll.getNow() * y.dst.ay : y.newscrolly;
                        var r = n - t;
                        (0 > r && n < y.newscrolly || r > 0 && n > y.newscrolly) && (n = y.newscrolly), y.setScrollTop(n), n == y.newscrolly && (o = 1)
                    } else o = 1;
                    var s = e = y.getScrollLeft();
                    if (y.dst.ax) {
                        s = y.bzscroll ? y.dst.px + y.bzscroll.getNow() * y.dst.ax : y.newscrollx;
                        var r = s - e;
                        (0 > r && s < y.newscrollx || r > 0 && s > y.newscrollx) && (s = y.newscrollx), y.setScrollLeft(s), s == y.newscrollx && (o += 1)
                    } else o += 1;
                    2 == o ? (y.timer = 0, y.cursorfreezed = !1, y.bzscroll = !1, y.scrollrunning = !1, 0 > n ? n = 0 : n > y.page.maxh && (n = y.page.maxh), 0 > s ? s = 0 : s > y.page.maxw && (s = y.page.maxw), s != y.newscrollx || n != y.newscrolly ? y.doScrollPos(s, n) : y.onscrollend && y.triggerScrollEnd()) : y.timer = d(i) || 1
                }
                var t = "undefined" == typeof t || t === !1 ? y.getScrollTop(!0) : t;
                if (y.timer && y.newscrolly == t && y.newscrollx == e) return !0;
                y.timer && u(y.timer), y.timer = 0;
                var n = y.getScrollTop(),
                    r = y.getScrollLeft();
                ((y.newscrolly - n) * (t - n) < 0 || (y.newscrollx - r) * (e - r) < 0) && y.cancelScroll(), y.newscrolly = t, y.newscrollx = e, y.bouncescroll && y.rail.visibility || (y.newscrolly < 0 ? y.newscrolly = 0 : y.newscrolly > y.page.maxh && (y.newscrolly = y.page.maxh)), y.bouncescroll && y.railh.visibility || (y.newscrollx < 0 ? y.newscrollx = 0 : y.newscrollx > y.page.maxw && (y.newscrollx = y.page.maxw)), y.dst = {}, y.dst.x = e - r, y.dst.y = t - n, y.dst.px = r, y.dst.py = n;
                var s = Math.round(Math.sqrt(Math.pow(y.dst.x, 2) + Math.pow(y.dst.y, 2)));
                y.dst.ax = y.dst.x / s, y.dst.ay = y.dst.y / s;
                var a = 0,
                    l = s;
                0 == y.dst.x ? (a = n, l = t, y.dst.ay = 1, y.dst.py = 0) : 0 == y.dst.y && (a = r, l = e, y.dst.ax = 1, y.dst.px = 0);
                var c = y.getTransitionSpeed(s);
                if (o && 1 >= o && (c *= o), c > 0 ? y.bzscroll = y.bzscroll ? y.bzscroll.update(l, c) : new k(a, l, c, 0, 1, 0, 1) : y.bzscroll = !1, !y.timer) {
                    (n == y.page.maxh && t >= y.page.maxh || r == y.page.maxw && e >= y.page.maxw) && y.checkContentSize();
                    var p = 1;
                    if (y.cancelAnimationFrame = !1, y.timer = 1, y.onscrollstart && !y.scrollrunning) {
                        var h = {
                            type: "scrollstart",
                            current: {
                                x: r,
                                y: n
                            },
                            request: {
                                x: e,
                                y: t
                            },
                            end: {
                                x: y.newscrollx,
                                y: y.newscrolly
                            },
                            speed: c
                        };
                        y.onscrollstart.call(y, h)
                    }
                    i(), (n == y.page.maxh && t >= n || r == y.page.maxw && e >= r) && y.checkContentSize(), y.noticeCursor()
                }
            }, this.cancelScroll = function() {
                return y.timer && u(y.timer), y.timer = 0, y.bzscroll = !1, y.scrollrunning = !1, y
            }) : (this.doScrollLeft = function(e, t) {
                var o = y.getScrollTop();
                y.doScrollPos(e, o, t)
            }, this.doScrollTop = function(e, t) {
                var o = y.getScrollLeft();
                y.doScrollPos(o, e, t)
            }, this.doScrollPos = function(e, t, o) {
                var i = e > y.page.maxw ? y.page.maxw : e;
                0 > i && (i = 0);
                var n = t > y.page.maxh ? y.page.maxh : t;
                0 > n && (n = 0), y.synched("scroll", function() {
                    y.setScrollTop(n), y.setScrollLeft(i)
                })
            }, this.cancelScroll = function() {}), this.doScrollBy = function(e, t) {
                var o = 0;
                if (t) o = Math.floor((y.scroll.y - e) * y.scrollratio.y);
                else {
                    var i = y.timer ? y.newscrolly : y.getScrollTop(!0);
                    o = i - e
                }
                if (y.bouncescroll) {
                    var n = Math.round(y.view.h / 2); - n > o ? o = -n : o > y.page.maxh + n && (o = y.page.maxh + n)
                }
                y.cursorfreezed = !1;
                var r = y.getScrollTop(!0);
                return 0 > o && 0 >= r ? y.noticeCursor() : o > y.page.maxh && r >= y.page.maxh ? (y.checkContentSize(), y.noticeCursor()) : void y.doScrollTop(o)
            }, this.doScrollLeftBy = function(e, t) {
                var o = 0;
                if (t) o = Math.floor((y.scroll.x - e) * y.scrollratio.x);
                else {
                    var i = y.timer ? y.newscrollx : y.getScrollLeft(!0);
                    o = i - e
                }
                if (y.bouncescroll) {
                    var n = Math.round(y.view.w / 2); - n > o ? o = -n : o > y.page.maxw + n && (o = y.page.maxw + n)
                }
                y.cursorfreezed = !1;
                var r = y.getScrollLeft(!0);
                return 0 > o && 0 >= r ? y.noticeCursor() : o > y.page.maxw && r >= y.page.maxw ? y.noticeCursor() : void y.doScrollLeft(o)
            }, this.doScrollTo = function(e, t) {
                var o = t ? Math.round(e * y.scrollratio.y) : e;
                0 > o ? o = 0 : o > y.page.maxh && (o = y.page.maxh), y.cursorfreezed = !1, y.doScrollTop(e)
            }, this.checkContentSize = function() {
                var e = y.getContentSize();
                (e.h != y.page.h || e.w != y.page.w) && y.resize(!1, e)
            }, y.onscroll = function(e) {
                y.rail.drag || y.cursorfreezed || y.synched("scroll", function() {
                    y.scroll.y = Math.round(y.getScrollTop() * (1 / y.scrollratio.y)), y.railh && (y.scroll.x = Math.round(y.getScrollLeft() * (1 / y.scrollratio.x))), y.noticeCursor()
                })
            }, y.bind(y.docscroll, "scroll", y.onscroll), this.doZoomIn = function(e) {
                if (!y.zoomactive) {
                    y.zoomactive = !0, y.zoomrestore = {
                        style: {}
                    };
                    var t = ["position", "top", "left", "zIndex", "backgroundColor", "marginTop", "marginBottom", "marginLeft", "marginRight"],
                        o = y.win[0].style;
                    for (var i in t) {
                        var n = t[i];
                        y.zoomrestore.style[n] = "undefined" != typeof o[n] ? o[n] : ""
                    }
                    y.zoomrestore.style.width = y.win.css("width"), y.zoomrestore.style.height = y.win.css("height"), y.zoomrestore.padding = {
                        w: y.win.outerWidth() - y.win.width(),
                        h: y.win.outerHeight() - y.win.height()
                    }, x.isios4 && (y.zoomrestore.scrollTop = l(window).scrollTop(), l(window).scrollTop(0)), y.win.css({
                        position: x.isios4 ? "absolute" : "fixed",
                        top: 0,
                        left: 0,
                        "z-index": a + 100,
                        margin: "0px"
                    });
                    var r = y.win.css("backgroundColor");
                    return ("" == r || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(r)) && y.win.css("backgroundColor", "#fff"), y.rail.css({
                        "z-index": a + 101
                    }), y.zoom.css({
                        "z-index": a + 102
                    }), y.zoom.css("backgroundPosition", "0px -18px"), y.resizeZoom(), y.onzoomin && y.onzoomin.call(y), y.cancelEvent(e)
                }
            }, this.doZoomOut = function(e) {
                return y.zoomactive ? (y.zoomactive = !1, y.win.css("margin", ""), y.win.css(y.zoomrestore.style), x.isios4 && l(window).scrollTop(y.zoomrestore.scrollTop), y.rail.css({
                    "z-index": y.zindex
                }), y.zoom.css({
                    "z-index": y.zindex
                }), y.zoomrestore = !1, y.zoom.css("backgroundPosition", "0px 0px"), y.onResize(), y.onzoomout && y.onzoomout.call(y), y.cancelEvent(e)) : void 0
            }, this.doZoom = function(e) {
                return y.zoomactive ? y.doZoomOut(e) : y.doZoomIn(e)
            }, this.resizeZoom = function() {
                if (y.zoomactive) {
                    var e = y.getScrollTop();
                    y.win.css({
                        width: l(window).width() - y.zoomrestore.padding.w + "px",
                        height: l(window).height() - y.zoomrestore.padding.h + "px"
                    }), y.onResize(), y.setScrollTop(Math.min(y.page.maxh, e))
                }
            }, this.init(), l.nicescroll.push(this)
        },
        w = function(e) {
            var t = this;
            this.nc = e, this.lastx = 0, this.lasty = 0, this.speedx = 0, this.speedy = 0, this.lasttime = 0, this.steptime = 0, this.snapx = !1, this.snapy = !1, this.demulx = 0, this.demuly = 0, this.lastscrollx = -1, this.lastscrolly = -1, this.chkx = 0, this.chky = 0, this.timer = 0, this.time = function() {
                return +new Date
            }, this.reset = function(e, o) {
                t.stop();
                var i = t.time();
                t.steptime = 0, t.lasttime = i, t.speedx = 0, t.speedy = 0, t.lastx = e, t.lasty = o, t.lastscrollx = -1, t.lastscrolly = -1
            }, this.update = function(e, o) {
                var i = t.time();
                t.steptime = i - t.lasttime, t.lasttime = i;
                var n = o - t.lasty,
                    r = e - t.lastx,
                    s = t.nc.getScrollTop(),
                    a = t.nc.getScrollLeft(),
                    l = s + n,
                    c = a + r;
                t.snapx = 0 > c || c > t.nc.page.maxw, t.snapy = 0 > l || l > t.nc.page.maxh, t.speedx = r, t.speedy = n, t.lastx = e, t.lasty = o
            }, this.stop = function() {
                t.nc.unsynched("domomentum2d"), t.timer && clearTimeout(t.timer), t.timer = 0, t.lastscrollx = -1, t.lastscrolly = -1
            }, this.doSnapy = function(e, o) {
                var i = !1;
                0 > o ? (o = 0, i = !0) : o > t.nc.page.maxh && (o = t.nc.page.maxh, i = !0), 0 > e ? (e = 0, i = !0) : e > t.nc.page.maxw && (e = t.nc.page.maxw, i = !0), i ? t.nc.doScrollPos(e, o, t.nc.opt.snapbackspeed) : t.nc.triggerScrollEnd()
            }, this.doMomentum = function(e) {
                var o = t.time(),
                    i = e ? o + e : t.lasttime,
                    n = t.nc.getScrollLeft(),
                    r = t.nc.getScrollTop(),
                    s = t.nc.page.maxh,
                    a = t.nc.page.maxw;
                t.speedx = a > 0 ? Math.min(60, t.speedx) : 0, t.speedy = s > 0 ? Math.min(60, t.speedy) : 0;
                var l = i && 60 >= o - i;
                (0 > r || r > s || 0 > n || n > a) && (l = !1);
                var c = t.speedy && l ? t.speedy : !1,
                    d = t.speedx && l ? t.speedx : !1;
                if (c || d) {
                    var u = Math.max(16, t.steptime);
                    if (u > 50) {
                        var p = u / 50;
                        t.speedx *= p, t.speedy *= p, u = 50
                    }
                    t.demulxy = 0, t.lastscrollx = t.nc.getScrollLeft(), t.chkx = t.lastscrollx, t.lastscrolly = t.nc.getScrollTop(), t.chky = t.lastscrolly;
                    var h = t.lastscrollx,
                        f = t.lastscrolly,
                        m = function() {
                            var e = t.time() - o > 600 ? .04 : .02;
                            t.speedx && (h = Math.floor(t.lastscrollx - t.speedx * (1 - t.demulxy)), t.lastscrollx = h, (0 > h || h > a) && (e = .1)), t.speedy && (f = Math.floor(t.lastscrolly - t.speedy * (1 - t.demulxy)), t.lastscrolly = f, (0 > f || f > s) && (e = .1)), t.demulxy = Math.min(1, t.demulxy + e), t.nc.synched("domomentum2d", function() {
                                if (t.speedx) {
                                    var e = t.nc.getScrollLeft();
                                    e != t.chkx && t.stop(), t.chkx = h, t.nc.setScrollLeft(h)
                                }
                                if (t.speedy) {
                                    var o = t.nc.getScrollTop();
                                    o != t.chky && t.stop(), t.chky = f, t.nc.setScrollTop(f)
                                }
                                t.timer || (t.nc.hideCursor(), t.doSnapy(h, f))
                            }), t.demulxy < 1 ? t.timer = setTimeout(m, u) : (t.stop(), t.nc.hideCursor(), t.doSnapy(h, f))
                        };
                    m()
                } else t.doSnapy(t.nc.getScrollLeft(), t.nc.getScrollTop())
            }
        },
        b = e.fn.scrollTop;
    e.cssHooks.pageYOffset = {
        get: function(e, t, o) {
            var i = l.data(e, "__nicescroll") || !1;
            return i && i.ishwscroll ? i.getScrollTop() : b.call(e)
        },
        set: function(e, t) {
            var o = l.data(e, "__nicescroll") || !1;
            return o && o.ishwscroll ? o.setScrollTop(parseInt(t)) : b.call(e, t), this
        }
    }, e.fn.scrollTop = function(e) {
        if ("undefined" == typeof e) {
            var t = this[0] ? l.data(this[0], "__nicescroll") || !1 : !1;
            return t && t.ishwscroll ? t.getScrollTop() : b.call(this);
        }
        return this.each(function() {
            var t = l.data(this, "__nicescroll") || !1;
            t && t.ishwscroll ? t.setScrollTop(parseInt(e)) : b.call(l(this), e)
        })
    };
    var x = e.fn.scrollLeft;
    l.cssHooks.pageXOffset = {
        get: function(e, t, o) {
            var i = l.data(e, "__nicescroll") || !1;
            return i && i.ishwscroll ? i.getScrollLeft() : x.call(e)
        },
        set: function(e, t) {
            var o = l.data(e, "__nicescroll") || !1;
            return o && o.ishwscroll ? o.setScrollLeft(parseInt(t)) : x.call(e, t), this
        }
    }, e.fn.scrollLeft = function(e) {
        if ("undefined" == typeof e) {
            var t = this[0] ? l.data(this[0], "__nicescroll") || !1 : !1;
            return t && t.ishwscroll ? t.getScrollLeft() : x.call(this)
        }
        return this.each(function() {
            var t = l.data(this, "__nicescroll") || !1;
            t && t.ishwscroll ? t.setScrollLeft(parseInt(e)) : x.call(l(this), e)
        })
    };
    var T = function(e) {
        var t = this;
        if (this.length = 0, this.name = "nicescrollarray", this.each = function(e) {
                for (var o = 0, i = 0; o < t.length; o++) e.call(t[o], i++);
                return t
            }, this.push = function(e) {
                t[t.length] = e, t.length++
            }, this.eq = function(e) {
                return t[e]
            }, e)
            for (var o = 0; o < e.length; o++) {
                var i = l.data(e[o], "__nicescroll") || !1;
                i && (this[this.length] = i, this.length++)
            }
        return this
    };
    o(T.prototype, ["show", "hide", "toggle", "onResize", "resize", "remove", "stop", "doScrollPos"], function(e, t) {
        e[t] = function() {
            var e = arguments;
            return this.each(function() {
                this[t].apply(this, e)
            })
        }
    }), e.fn.getNiceScroll = function(e) {
        if ("undefined" == typeof e) return new T(this);
        var t = this[e] && l.data(this[e], "__nicescroll") || !1;
        return t
    }, e.extend(e.expr[":"], {
        nicescroll: function(e) {
            return l.data(e, "__nicescroll") ? !0 : !1
        }
    }), l.fn.niceScroll = function(e, t) {
        "undefined" == typeof t && ("object" != typeof e || "jquery" in e || (t = e, e = !1)), t = l.extend({}, t);
        var o = new T;
        "undefined" == typeof t && (t = {}), e && (t.doc = l(e), t.win = l(this));
        var i = !("doc" in t);
        return i || "win" in t || (t.win = l(this)), this.each(function() {
            var e = l(this).data("__nicescroll") || !1;
            e || (t.doc = i ? l(this) : t.doc, e = new y(t, l(this)), l(this).data("__nicescroll", e)), o.push(e)
        }), 1 == o.length ? o[0] : o
    }, window.NiceScroll = {
        getjQuery: function() {
            return e
        }
    }, l.nicescroll || (l.nicescroll = new T, l.nicescroll.options = m)
}), jQuery(document).ready(function(e) {
    function t(e) {
        var t = e.nodeValue,
            o = t.replace(/(\s\w)\s/g, "$1 ");
        e.nodeValue = o
    }

    function o(e) {
        for (var i = e.childNodes, n = i.length, r = 0; n > r; r++) {
            var s = i.item(r);
            3 == s.nodeType ? t(s) : o(s)
        }
    }

    function i() {
        o(document.body)
    }

    function n() {
        e(window).width() > 1400 && e("#people .slide").each(function() {
            var t = parseInt(e(".rotate", this).css("paddingTop")),
                o = parseInt(e(".rotate", this).css("paddingTop")) + e(".rotate .info", this).outerHeight(),
                i = e(".text", this).width() + 583;
            e(".text .info .before", this).width(i - t - 52 - 7), e(".text .info .after", this).width(i - o - 4 - 4)
        })
    }

    function r() {
        var e = document.getElementById("map-canvas"),
            t = new google.maps.LatLng(50.076638, 14.510277),
            o = new google.maps.LatLng(50.076344, 14.498112),
            i = {
                center: o,
                scrollwheel: !1,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            },
            n = {
                url: site_url + "/wp-content/themes/theme/images/marker.png",
                anchor: new google.maps.Point(25, 50)
            },
            r = new google.maps.Map(e, i);
        new google.maps.Marker({
            position: t,
            map: r,
            icon: n,
            title: "Pairam Solution s.r.o."
        })
    }
    document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1") ? e('img[src*="svg"]').addClass("svg") : e('img[src*="svg"]').attr("src", function() {
        return e(this).attr("src").replace(".svg", ".png")
    }), e("img.svg.convert").each(function() {
        var t = jQuery(this),
            o = t.attr("class"),
            i = t.attr("src");
        e.get(i, function(e) {
            var i = jQuery(e).find("svg");
            "undefined" != typeof o && (i = i.attr("class", o + " replaced-svg")), i = i.removeAttr("xmlns:a"), t.replaceWith(i)
        }, "xml")
    }), e('a[href^="#"]').on("click", function(t) {
        t.preventDefault();
        var o = this.hash,
            i = e(o);
        "" != o && e("html, body").stop().animate({
            scrollTop: i.offset().top
        }, 900, "swing", function() {
            window.location.hash = o
        })
    }), i(), e(".slider").slick({
        infinite: !0,
        slidesToShow: 1,
        pauseOnHover: !1,
        slidesToScroll: 1,
        prevArrow: '<span class="arrow prev"></span>',
        nextArrow: '<span class="arrow next"></span>',
        slide: "img"
    }), e(window).width() > 720 && (e("#people").on("init", function(t) {
        n(), setTimeout(function() {
            e("#blackCover").hide(), e(".topSlick .control li:first-child").trigger("click")
        }, 2e3)
    }), e("#people").slick({
        infinite: !0,
        slidesToShow: 1,
        pauseOnHover: !1,
        dots: !0,
        draggable: !1,
        slidesToScroll: 1,
        prevArrow: '<span class="arrow prev"></span>',
        nextArrow: '<span class="arrow next"></span>'
    }), e("#reference .bottom").slick({
        infinite: !0,
        slidesToShow: 1,
        pauseOnHover: !1,
        draggable: !1,
        slidesToScroll: 1,
        prevArrow: '<span class="arrow prev ref"></span>',
        nextArrow: '<span class="arrow next ref"></span>'
    }), e(".single-reference .top .gallery .image").length > 6 && e(".single-reference .top .gallery").slick({
        infinite: !0,
        slidesToShow: 6,
        arrows: !1,
        pauseOnHover: !1,
        draggable: !1,
        slidesToScroll: 1,
        autoplay: !0,
        respondTo: "slider",
        autoplaySpeed: 2e3
    })), /*e("article#aboutus .bottomSlick #who .text .rotate, article#aboutus .bottomSlick #story .text .rotate, article#aboutus .bottomSlick #career .text .rotate").niceScroll(),*/ e("#openMenu").click(function() {
        e("#menuMobile").slideToggle()
    }), e(window).resize(function() {
        n()
    }), e(".one .position span").click(function() {
        e(this).parent().find(".hidden").hasClass("otevreno") ? e("#aboutus .one .position .hidden").slideUp().removeClass("otevreno") : (e("#aboutus .one .position .hidden").slideUp().removeClass("otevreno"), e(this).parent().find(".hidden").slideDown().addClass("otevreno"))
    }), 0 == e("#reference .bottom .slide").length && e("#reference").remove(), e(".topSlick .control li").on("click", function() {
        e("#aboutus .topSlick .control li").removeClass("active"), e(this).addClass("active");
        var t = e(this).attr("data-id");
        e("#aboutus .topSlick .title h2").hide(), e("#aboutus .topSlick .title h2." + t).show(), e("#aboutus .bottomSlick .one").hide(), e("#aboutus .bottomSlick .one#" + t).show()
    }), e("#people .slide .gallery li").click(function() {
        var t = e(this).attr("data-id");
        e("#people .slick-dots li:nth-of-type(" + t + ") button").trigger("click")
    }), e(".wpcf7-form br").remove(), e("#reference .bottom .nextprev .prev").click(function() {
        e("#reference .bottom .arrow.prev.ref").trigger("click")
    }), e("#reference .bottom .nextprev .next").click(function() {
        e("#reference .bottom .arrow.next.ref").trigger("click")
    }), e('input[type="number"]').each(function() {
        e(this).parent().prepend('<a class="up" data-id="up"  onclick="updateSpinner(this);"></a>'), e(this).parent().append('<a class="down" data-id="down" onclick="updateSpinner(this);"></a>')
    }), e(".order").click(function() {
        e("#order").show(), e("#cover").show(), e(window).width() < 720 && e("html, body").scrollTop(0)
    }), e(".mailing").click(function() {
        e("#mailing").show(), e("#cover").show(), e(window).width() < 720 && e("html, body").scrollTop(0)
    }), e("#cover, #closeOrder").click(function() {
        e("#order").hide(), e("#mailing").hide(), e("#cover").hide()
    }), e("#order input[type=submit]").click(function() {
        setTimeout(function() {
            e("#order form").hasClass("sent") && e("#closeOrder").trigger("click")
        }, 3e3)
    }), e("#menu-prvni-menu li:nth-child(2) .sub-menu li:first-child a").click(function() {
        e("body").hasClass("home") ? e("html, body").stop().animate({
            scrollTop: e("#onas").offset().top
        }, 900, "swing", function() {
            e("#aboutus .control li:first-child").trigger("click")
        }) : window.location.href = window.location.protocol + "//" + window.location.host + "/?link=1"
    }), window.location.href.indexOf("?link=1") > -1 && (e("html, body").scrollTop(e("#onas").offset().top), setTimeout(function() {
        e("#aboutus .control li:nth-child(1)").trigger("click")
    }, 2010)), e("#menu-prvni-menu li:nth-child(2) .sub-menu li:nth-child(2) a, #lide").on("click", function(t) {
        t.preventDefault(), e("body").hasClass("home") ? e(window).width() >= 720 ? e("html, body").stop().animate({
            scrollTop: e("#onas").offset().top
        }, 900, "swing", function() {
            e("#aboutus .control li:nth-child(2)").trigger("click")
        }) : e("html, body").scrollTop(e("#peoplea").offset().top) : window.location.href = window.location.protocol + "//" + window.location.host + "/?link=2"
    }), window.location.href.indexOf("?link=2") > -1 && (e("html, body").scrollTop(e("#onas").offset().top), setTimeout(function() {
        e("#aboutus .control li:nth-child(2)").trigger("click")
    }, 2010)), e("#menu-prvni-menu li:nth-child(2) .sub-menu li:nth-child(3) a").click(function() {
        e("body").hasClass("home") ? e("html, body").stop().animate({
            scrollTop: e("#onas").offset().top
        }, 900, "swing", function() {
            e("#aboutus .control li:nth-child(3)").trigger("click")
        }) : window.location.href = window.location.protocol + "//" + window.location.host + "/?link=3"
    }), window.location.href.indexOf("?link=3") > -1 && (e("html, body").scrollTop(e("#onas").offset().top), setTimeout(function() {
        e("#aboutus .control li:nth-child(3)").trigger("click")
    }, 2010)), e("#menu-prvni-menu li:nth-child(2) .sub-menu li:nth-child(4) a").click(function() {
        e("body").hasClass("home") ? e("html, body").stop().animate({
            scrollTop: e("#onas").offset().top
        }, 900, "swing", function() {
            e("#aboutus .control li:nth-child(4)").trigger("click")
        }) : window.location.href = window.location.protocol + "//" + window.location.host + "/?link=4"
    }), window.location.href.indexOf("?link=4") > -1 && (e("html, body").scrollTop(e("#onas").offset().top), setTimeout(function() {
        e("#aboutus .control li:nth-child(4)").trigger("click")
    }, 2010))
});