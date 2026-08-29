var e = Object.create,
    t = Object.defineProperty,
    n = Object.getOwnPropertyDescriptor,
    r = Object.getOwnPropertyNames,
    i = Object.getPrototypeOf,
    a = Object.prototype.hasOwnProperty,
    o = (e, t) => () => (t || (e((t = {
        exports: {}
    }).exports, t), e = null), t.exports),
    s = (e, i, o, s) => {
        if (i && typeof i == `object` || typeof i == `function`)
            for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
                d = c[l],
                !a.call(e, d) && d !== o && t(e, d, {
                    get: (e => i[e]).bind(null, d),
                    enumerable: !(s = n(i, d)) || s.enumerable
                });
        return e
    },
    c = (n, r, o) => (o = n == null ? {} : e(i(n)), s(r || !n || !n.__esModule || !a.call(n, `default`) ? t(o, `default`, {
        value: n,
        enumerable: !0
    }) : o, n));
(function() {
    let e = document.createElement(`link`).relList;
    if (e && e.supports && e.supports(`modulepreload`))
        return;
    for (let e of document.querySelectorAll(`link[rel="modulepreload"]`))
        n(e);
    new MutationObserver(e => {
        for (let t of e)
            if (t.type === `childList`)
                for (let e of t.addedNodes)
                    e.tagName === `LINK` && e.rel === `modulepreload` && n(e)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });
    function t(e) {
        let t = {};
        return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), t.credentials = e.crossOrigin === `use-credentials` ? `include` : e.crossOrigin === `anonymous` ? `omit` : `same-origin`, t
    }
    function n(e) {
        if (e.ep)
            return;
        e.ep = !0;
        let n = t(e);
        fetch(e.href, n)
    }
})();
var l = o((e => {
        var t = Symbol.for(`react.transitional.element`),
            n = Symbol.for(`react.portal`),
            r = Symbol.for(`react.fragment`),
            i = Symbol.for(`react.strict_mode`),
            a = Symbol.for(`react.profiler`),
            o = Symbol.for(`react.consumer`),
            s = Symbol.for(`react.context`),
            c = Symbol.for(`react.forward_ref`),
            l = Symbol.for(`react.suspense`),
            u = Symbol.for(`react.memo`),
            d = Symbol.for(`react.lazy`),
            f = Symbol.for(`react.activity`),
            p = Symbol.iterator;
        function m(e) {
            return typeof e != `object` || !e ? null : (e = p && e[p] || e[`@@iterator`], typeof e == `function` ? e : null)
        }
        var h = {
                isMounted: function() {
                    return !1
                },
                enqueueForceUpdate: function() {},
                enqueueReplaceState: function() {},
                enqueueSetState: function() {}
            },
            g = Object.assign,
            _ = {};
        function v(e, t, n) {
            this.props = e,
            this.context = t,
            this.refs = _,
            this.updater = n || h
        }
        v.prototype.isReactComponent = {},
        v.prototype.setState = function(e, t) {
            if (typeof e != `object` && typeof e != `function` && e != null)
                throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);
            this.updater.enqueueSetState(this, e, t, `setState`)
        },
        v.prototype.forceUpdate = function(e) {
            this.updater.enqueueForceUpdate(this, e, `forceUpdate`)
        };
        function y() {}
        y.prototype = v.prototype;
        function b(e, t, n) {
            this.props = e,
            this.context = t,
            this.refs = _,
            this.updater = n || h
        }
        var x = b.prototype = new y;
        x.constructor = b,
        g(x, v.prototype),
        x.isPureReactComponent = !0;
        var S = Array.isArray;
        function C() {}
        var w = {
                H: null,
                A: null,
                T: null,
                S: null
            },
            ee = Object.prototype.hasOwnProperty;
        function te(e, n, r) {
            var i = r.ref;
            return {
                $$typeof: t,
                type: e,
                key: n,
                ref: i === void 0 ? null : i,
                props: r
            }
        }
        function ne(e, t) {
            return te(e.type, t, e.props)
        }
        function T(e) {
            return typeof e == `object` && !!e && e.$$typeof === t
        }
        function re(e) {
            var t = {
                "=": `=0`,
                ":": `=2`
            };
            return `$` + e.replace(/[=:]/g, function(e) {
                return t[e]
            })
        }
        var ie = /\/+/g;
        function ae(e, t) {
            return typeof e == `object` && e && e.key != null ? re(`` + e.key) : t.toString(36)
        }
        function oe(e) {
            switch (e.status) {
            case `fulfilled`:
                return e.value;
            case `rejected`:
                throw e.reason;
            default:
                switch (typeof e.status == `string` ? e.then(C, C) : (e.status = `pending`, e.then(function(t) {
                    e.status === `pending` && (e.status = `fulfilled`, e.value = t)
                }, function(t) {
                    e.status === `pending` && (e.status = `rejected`, e.reason = t)
                })), e.status) {
                case `fulfilled`:
                    return e.value;
                case `rejected`:
                    throw e.reason
                }
            }
            throw e
        }
        function se(e, r, i, a, o) {
            var s = typeof e;
            (s === `undefined` || s === `boolean`) && (e = null);
            var c = !1;
            if (e === null)
                c = !0;
            else
                switch (s) {
                case `bigint`:
                case `string`:
                case `number`:
                    c = !0;
                    break;
                case `object`:
                    switch (e.$$typeof) {
                    case t:
                    case n:
                        c = !0;
                        break;
                    case d:
                        return c = e._init, se(c(e._payload), r, i, a, o)
                    }
                }
            if (c)
                return o = o(e), c = a === `` ? `.` + ae(e, 0) : a, S(o) ? (i = ``, c != null && (i = c.replace(ie, `$&/`) + `/`), se(o, r, i, ``, function(e) {
                    return e
                })) : o != null && (T(o) && (o = ne(o, i + (o.key == null || e && e.key === o.key ? `` : (`` + o.key).replace(ie, `$&/`) + `/`) + c)), r.push(o)), 1;
            c = 0;
            var l = a === `` ? `.` : a + `:`;
            if (S(e))
                for (var u = 0; u < e.length; u++)
                    a = e[u],
                    s = l + ae(a, u),
                    c += se(a, r, i, s, o);
            else if (u = m(e), typeof u == `function`)
                for (e = u.call(e), u = 0; !(a = e.next()).done;)
                    a = a.value,
                    s = l + ae(a, u++),
                    c += se(a, r, i, s, o);
            else if (s === `object`) {
                if (typeof e.then == `function`)
                    return se(oe(e), r, i, a, o);
                throw r = String(e), Error(`Objects are not valid as a React child (found: ` + (r === `[object Object]` ? `object with keys {` + Object.keys(e).join(`, `) + `}` : r) + `). If you meant to render a collection of children, use an array instead.`)
            }
            return c
        }
        function ce(e, t, n) {
            if (e == null)
                return e;
            var r = [],
                i = 0;
            return se(e, r, ``, ``, function(e) {
                return t.call(n, e, i++)
            }), r
        }
        function le(e) {
            if (e._status === -1) {
                var t = e._result;
                t = t(),
                t.then(function(t) {
                    (e._status === 0 || e._status === -1) && (e._status = 1, e._result = t)
                }, function(t) {
                    (e._status === 0 || e._status === -1) && (e._status = 2, e._result = t)
                }),
                e._status === -1 && (e._status = 0, e._result = t)
            }
            if (e._status === 1)
                return e._result.default;
            throw e._result
        }
        var E = typeof reportError == `function` ? reportError : function(e) {
                if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
                    var t = new window.ErrorEvent(`error`, {
                        bubbles: !0,
                        cancelable: !0,
                        message: typeof e == `object` && e && typeof e.message == `string` ? String(e.message) : String(e),
                        error: e
                    });
                    if (!window.dispatchEvent(t))
                        return
                } else if (typeof process == `object` && typeof process.emit == `function`) {
                    process.emit(`uncaughtException`, e);
                    return
                }
                console.error(e)
            },
            D = {
                map: ce,
                forEach: function(e, t, n) {
                    ce(e, function() {
                        t.apply(this, arguments)
                    }, n)
                },
                count: function(e) {
                    var t = 0;
                    return ce(e, function() {
                        t++
                    }), t
                },
                toArray: function(e) {
                    return ce(e, function(e) {
                            return e
                        }) || []
                },
                only: function(e) {
                    if (!T(e))
                        throw Error(`React.Children.only expected to receive a single React element child.`);
                    return e
                }
            };
        e.Activity = f,
        e.Children = D,
        e.Component = v,
        e.Fragment = r,
        e.Profiler = a,
        e.PureComponent = b,
        e.StrictMode = i,
        e.Suspense = l,
        e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w,
        e.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function(e) {
                return w.H.useMemoCache(e)
            }
        },
        e.cache = function(e) {
            return function() {
                return e.apply(null, arguments)
            }
        },
        e.cacheSignal = function() {
            return null
        },
        e.cloneElement = function(e, t, n) {
            if (e == null)
                throw Error(`The argument must be a React element, but you passed ` + e + `.`);
            var r = g({}, e.props),
                i = e.key;
            if (t != null)
                for (a in t.key !== void 0 && (i = `` + t.key), t)
                    !ee.call(t, a) || a === `key` || a === `__self` || a === `__source` || a === `ref` && t.ref === void 0 || (r[a] = t[a]);
            var a = arguments.length - 2;
            if (a === 1)
                r.children = n;
            else if (1 < a) {
                for (var o = Array(a), s = 0; s < a; s++)
                    o[s] = arguments[s + 2];
                r.children = o
            }
            return te(e.type, i, r)
        },
        e.createContext = function(e) {
            return e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            }, e.Provider = e, e.Consumer = {
                $$typeof: o,
                _context: e
            }, e
        },
        e.createElement = function(e, t, n) {
            var r,
                i = {},
                a = null;
            if (t != null)
                for (r in t.key !== void 0 && (a = `` + t.key), t)
                    ee.call(t, r) && r !== `key` && r !== `__self` && r !== `__source` && (i[r] = t[r]);
            var o = arguments.length - 2;
            if (o === 1)
                i.children = n;
            else if (1 < o) {
                for (var s = Array(o), c = 0; c < o; c++)
                    s[c] = arguments[c + 2];
                i.children = s
            }
            if (e && e.defaultProps)
                for (r in o = e.defaultProps, o)
                    i[r] === void 0 && (i[r] = o[r]);
            return te(e, a, i)
        },
        e.createRef = function() {
            return {
                current: null
            }
        },
        e.forwardRef = function(e) {
            return {
                $$typeof: c,
                render: e
            }
        },
        e.isValidElement = T,
        e.lazy = function(e) {
            return {
                $$typeof: d,
                _payload: {
                    _status: -1,
                    _result: e
                },
                _init: le
            }
        },
        e.memo = function(e, t) {
            return {
                $$typeof: u,
                type: e,
                compare: t === void 0 ? null : t
            }
        },
        e.startTransition = function(e) {
            var t = w.T,
                n = {};
            w.T = n;
            try {
                var r = e(),
                    i = w.S;
                i !== null && i(n, r),
                typeof r == `object` && r && typeof r.then == `function` && r.then(C, E)
            } catch (e) {
                E(e)
            } finally {
                t !== null && n.types !== null && (t.types = n.types),
                w.T = t
            }
        },
        e.unstable_useCacheRefresh = function() {
            return w.H.useCacheRefresh()
        },
        e.use = function(e) {
            return w.H.use(e)
        },
        e.useActionState = function(e, t, n) {
            return w.H.useActionState(e, t, n)
        },
        e.useCallback = function(e, t) {
            return w.H.useCallback(e, t)
        },
        e.useContext = function(e) {
            return w.H.useContext(e)
        },
        e.useDebugValue = function() {},
        e.useDeferredValue = function(e, t) {
            return w.H.useDeferredValue(e, t)
        },
        e.useEffect = function(e, t) {
            return w.H.useEffect(e, t)
        },
        e.useEffectEvent = function(e) {
            return w.H.useEffectEvent(e)
        },
        e.useId = function() {
            return w.H.useId()
        },
        e.useImperativeHandle = function(e, t, n) {
            return w.H.useImperativeHandle(e, t, n)
        },
        e.useInsertionEffect = function(e, t) {
            return w.H.useInsertionEffect(e, t)
        },
        e.useLayoutEffect = function(e, t) {
            return w.H.useLayoutEffect(e, t)
        },
        e.useMemo = function(e, t) {
            return w.H.useMemo(e, t)
        },
        e.useOptimistic = function(e, t) {
            return w.H.useOptimistic(e, t)
        },
        e.useReducer = function(e, t, n) {
            return w.H.useReducer(e, t, n)
        },
        e.useRef = function(e) {
            return w.H.useRef(e)
        },
        e.useState = function(e) {
            return w.H.useState(e)
        },
        e.useSyncExternalStore = function(e, t, n) {
            return w.H.useSyncExternalStore(e, t, n)
        },
        e.useTransition = function() {
            return w.H.useTransition()
        },
        e.version = `19.2.8`
    })),
    u = o(((e, t) => {
        t.exports = l()
    })),
    d = o((e => {
        function t(e, t) {
            var n = e.length;
            e.push(t);
            a:
            for (; 0 < n;) {
                var r = n - 1 >>> 1,
                    a = e[r];
                if (0 < i(a, t))
                    e[r] = t,
                    e[n] = a,
                    n = r;
                else
                    break a
            }
        }
        function n(e) {
            return e.length === 0 ? null : e[0]
        }
        function r(e) {
            if (e.length === 0)
                return null;
            var t = e[0],
                n = e.pop();
            if (n !== t) {
                e[0] = n;
                a:
                for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
                    var s = 2 * (r + 1) - 1,
                        c = e[s],
                        l = s + 1,
                        u = e[l];
                    if (0 > i(c, n))
                        l < a && 0 > i(u, c) ? (e[r] = u, e[l] = n, r = l) : (e[r] = c, e[s] = n, r = s);
                    else if (l < a && 0 > i(u, n))
                        e[r] = u,
                        e[l] = n,
                        r = l;
                    else
                        break a
                }
            }
            return t
        }
        function i(e, t) {
            var n = e.sortIndex - t.sortIndex;
            return n === 0 ? e.id - t.id : n
        }
        if (e.unstable_now = void 0, typeof performance == `object` && typeof performance.now == `function`) {
            var a = performance;
            e.unstable_now = function() {
                return a.now()
            }
        } else {
            var o = Date,
                s = o.now();
            e.unstable_now = function() {
                return o.now() - s
            }
        }
        var c = [],
            l = [],
            u = 1,
            d = null,
            f = 3,
            p = !1,
            m = !1,
            h = !1,
            g = !1,
            _ = typeof setTimeout == `function` ? setTimeout : null,
            v = typeof clearTimeout == `function` ? clearTimeout : null,
            y = typeof setImmediate < `u` ? setImmediate : null;
        function b(e) {
            for (var i = n(l); i !== null;) {
                if (i.callback === null)
                    r(l);
                else if (i.startTime <= e)
                    r(l),
                    i.sortIndex = i.expirationTime,
                    t(c, i);
                else
                    break;
                i = n(l)
            }
        }
        function x(e) {
            if (h = !1, b(e), !m) {
                if (n(c) !== null)
                    m = !0,
                    S || (S = !0, T());
                else {
                    var t = n(l);
                    t !== null && ae(x, t.startTime - e)
                }
            }
        }
        var S = !1,
            C = -1,
            w = 5,
            ee = -1;
        function te() {
            return g ? !0 : !(e.unstable_now() - ee < w)
        }
        function ne() {
            if (g = !1, S) {
                var t = e.unstable_now();
                ee = t;
                var i = !0;
                try {
                    a:
                    {
                        m = !1,
                        h && (h = !1, v(C), C = -1),
                        p = !0;
                        var a = f;
                        try {
                            b:
                            {
                                for (b(t), d = n(c); d !== null && !(d.expirationTime > t && te());) {
                                    var o = d.callback;
                                    if (typeof o == `function`) {
                                        d.callback = null,
                                        f = d.priorityLevel;
                                        var s = o(d.expirationTime <= t);
                                        if (t = e.unstable_now(), typeof s == `function`) {
                                            d.callback = s,
                                            b(t),
                                            i = !0;
                                            break b
                                        }
                                        d === n(c) && r(c),
                                        b(t)
                                    } else
                                        r(c);
                                    d = n(c)
                                }
                                if (d !== null)
                                    i = !0;
                                else {
                                    var u = n(l);
                                    u !== null && ae(x, u.startTime - t),
                                    i = !1
                                }
                            }break a
                        } finally {
                            d = null,
                            f = a,
                            p = !1
                        }
                    }
                } finally {
                    i ? T() : S = !1
                }
            }
        }
        var T;
        if (typeof y == `function`)
            T = function() {
                y(ne)
            };
        else if (typeof MessageChannel < `u`) {
            var re = new MessageChannel,
                ie = re.port2;
            re.port1.onmessage = ne,
            T = function() {
                ie.postMessage(null)
            }
        } else
            T = function() {
                _(ne, 0)
            };
        function ae(t, n) {
            C = _(function() {
                t(e.unstable_now())
            }, n)
        }
        e.unstable_IdlePriority = 5,
        e.unstable_ImmediatePriority = 1,
        e.unstable_LowPriority = 4,
        e.unstable_NormalPriority = 3,
        e.unstable_Profiling = null,
        e.unstable_UserBlockingPriority = 2,
        e.unstable_cancelCallback = function(e) {
            e.callback = null
        },
        e.unstable_forceFrameRate = function(e) {
            0 > e || 125 < e ? console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`) : w = 0 < e ? Math.floor(1e3 / e) : 5
        },
        e.unstable_getCurrentPriorityLevel = function() {
            return f
        },
        e.unstable_next = function(e) {
            switch (f) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default:
                t = f
            }
            var n = f;
            f = t;
            try {
                return e()
            } finally {
                f = n
            }
        },
        e.unstable_requestPaint = function() {
            g = !0
        },
        e.unstable_runWithPriority = function(e, t) {
            switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                e = 3
            }
            var n = f;
            f = e;
            try {
                return t()
            } finally {
                f = n
            }
        },
        e.unstable_scheduleCallback = function(r, i, a) {
            var o = e.unstable_now();
            switch (typeof a == `object` && a ? (a = a.delay, a = typeof a == `number` && 0 < a ? o + a : o) : a = o, r) {
            case 1:
                var s = -1;
                break;
            case 2:
                s = 250;
                break;
            case 5:
                s = 1073741823;
                break;
            case 4:
                s = 1e4;
                break;
            default:
                s = 5e3
            }
            return s = a + s, r = {
                id: u++,
                callback: i,
                priorityLevel: r,
                startTime: a,
                expirationTime: s,
                sortIndex: -1
            }, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (v(C), C = -1) : h = !0, ae(x, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, S || (S = !0, T()))), r
        },
        e.unstable_shouldYield = te,
        e.unstable_wrapCallback = function(e) {
            var t = f;
            return function() {
                var n = f;
                f = t;
                try {
                    return e.apply(this, arguments)
                } finally {
                    f = n
                }
            }
        }
    })),
    f = o(((e, t) => {
        t.exports = d()
    })),
    p = o((e => {
        var t = u();
        function n(e) {
            var t = `https://react.dev/errors/` + e;
            if (1 < arguments.length) {
                t += `?args[]=` + encodeURIComponent(arguments[1]);
                for (var n = 2; n < arguments.length; n++)
                    t += `&args[]=` + encodeURIComponent(arguments[n])
            }
            return `Minified React error #` + e + `; visit ` + t + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
        }
        function r() {}
        var i = {
                d: {
                    f: r,
                    r: function() {
                        throw Error(n(522))
                    },
                    D: r,
                    C: r,
                    L: r,
                    m: r,
                    X: r,
                    S: r,
                    M: r
                },
                p: 0,
                findDOMNode: null
            },
            a = Symbol.for(`react.portal`);
        function o(e, t, n) {
            var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
            return {
                $$typeof: a,
                key: r == null ? null : `` + r,
                children: e,
                containerInfo: t,
                implementation: n
            }
        }
        var s = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function c(e, t) {
            if (e === `font`)
                return ``;
            if (typeof t == `string`)
                return t === `use-credentials` ? t : ``
        }
        e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i,
        e.createPortal = function(e, t) {
            var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
                throw Error(n(299));
            return o(e, t, null, r)
        },
        e.flushSync = function(e) {
            var t = s.T,
                n = i.p;
            try {
                if (s.T = null, i.p = 2, e)
                    return e()
            } finally {
                s.T = t,
                i.p = n,
                i.d.f()
            }
        },
        e.preconnect = function(e, t) {
            typeof e == `string` && (t ? (t = t.crossOrigin, t = typeof t == `string` ? t === `use-credentials` ? t : `` : void 0) : t = null, i.d.C(e, t))
        },
        e.prefetchDNS = function(e) {
            typeof e == `string` && i.d.D(e)
        },
        e.preinit = function(e, t) {
            if (typeof e == `string` && t && typeof t.as == `string`) {
                var n = t.as,
                    r = c(n, t.crossOrigin),
                    a = typeof t.integrity == `string` ? t.integrity : void 0,
                    o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0;
                n === `style` ? i.d.S(e, typeof t.precedence == `string` ? t.precedence : void 0, {
                    crossOrigin: r,
                    integrity: a,
                    fetchPriority: o
                }) : n === `script` && i.d.X(e, {
                    crossOrigin: r,
                    integrity: a,
                    fetchPriority: o,
                    nonce: typeof t.nonce == `string` ? t.nonce : void 0
                })
            }
        },
        e.preinitModule = function(e, t) {
            if (typeof e == `string`) {
                if (typeof t == `object` && t) {
                    if (t.as == null || t.as === `script`) {
                        var n = c(t.as, t.crossOrigin);
                        i.d.M(e, {
                            crossOrigin: n,
                            integrity: typeof t.integrity == `string` ? t.integrity : void 0,
                            nonce: typeof t.nonce == `string` ? t.nonce : void 0
                        })
                    }
                } else
                    t ?? i.d.M(e)
            }
        },
        e.preload = function(e, t) {
            if (typeof e == `string` && typeof t == `object` && t && typeof t.as == `string`) {
                var n = t.as,
                    r = c(n, t.crossOrigin);
                i.d.L(e, n, {
                    crossOrigin: r,
                    integrity: typeof t.integrity == `string` ? t.integrity : void 0,
                    nonce: typeof t.nonce == `string` ? t.nonce : void 0,
                    type: typeof t.type == `string` ? t.type : void 0,
                    fetchPriority: typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
                    referrerPolicy: typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0,
                    imageSrcSet: typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0,
                    imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : void 0,
                    media: typeof t.media == `string` ? t.media : void 0
                })
            }
        },
        e.preloadModule = function(e, t) {
            if (typeof e == `string`) {
                if (t) {
                    var n = c(t.as, t.crossOrigin);
                    i.d.m(e, {
                        as: typeof t.as == `string` && t.as !== `script` ? t.as : void 0,
                        crossOrigin: n,
                        integrity: typeof t.integrity == `string` ? t.integrity : void 0
                    })
                } else
                    i.d.m(e)
            }
        },
        e.requestFormReset = function(e) {
            i.d.r(e)
        },
        e.unstable_batchedUpdates = function(e, t) {
            return e(t)
        },
        e.useFormState = function(e, t, n) {
            return s.H.useFormState(e, t, n)
        },
        e.useFormStatus = function() {
            return s.H.useHostTransitionStatus()
        },
        e.version = `19.2.8`
    })),
    m = o(((e, t) => {
        function n() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`))
                try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
                } catch (e) {
                    console.error(e)
                }
        }
        n(),
        t.exports = p()
    })),
    h = o((e => {
        var t = f(),
            n = u(),
            r = m();
        function i(e) {
            var t = `https://react.dev/errors/` + e;
            if (1 < arguments.length) {
                t += `?args[]=` + encodeURIComponent(arguments[1]);
                for (var n = 2; n < arguments.length; n++)
                    t += `&args[]=` + encodeURIComponent(arguments[n])
            }
            return `Minified React error #` + e + `; visit ` + t + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
        }
        function a(e) {
            return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
        }
        function o(e) {
            var t = e,
                n = e;
            if (e.alternate)
                for (; t.return;)
                    t = t.return;
            else {
                e = t;
                do t = e,
                t.flags & 4098 && (n = t.return),
                e = t.return;
                while (e)
            }
            return t.tag === 3 ? n : null
        }
        function s(e) {
            if (e.tag === 13) {
                var t = e.memoizedState;
                if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
                    return t.dehydrated
            }
            return null
        }
        function c(e) {
            if (e.tag === 31) {
                var t = e.memoizedState;
                if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
                    return t.dehydrated
            }
            return null
        }
        function l(e) {
            if (o(e) !== e)
                throw Error(i(188))
        }
        function d(e) {
            var t = e.alternate;
            if (!t) {
                if (t = o(e), t === null)
                    throw Error(i(188));
                return t === e ? e : null
            }
            for (var n = e, r = t;;) {
                var a = n.return;
                if (a === null)
                    break;
                var s = a.alternate;
                if (s === null) {
                    if (r = a.return, r !== null) {
                        n = r;
                        continue
                    }
                    break
                }
                if (a.child === s.child) {
                    for (s = a.child; s;) {
                        if (s === n)
                            return l(a), e;
                        if (s === r)
                            return l(a), t;
                        s = s.sibling
                    }
                    throw Error(i(188))
                }
                if (n.return !== r.return)
                    n = a,
                    r = s;
                else {
                    for (var c = !1, u = a.child; u;) {
                        if (u === n) {
                            c = !0,
                            n = a,
                            r = s;
                            break
                        }
                        if (u === r) {
                            c = !0,
                            r = a,
                            n = s;
                            break
                        }
                        u = u.sibling
                    }
                    if (!c) {
                        for (u = s.child; u;) {
                            if (u === n) {
                                c = !0,
                                n = s,
                                r = a;
                                break
                            }
                            if (u === r) {
                                c = !0,
                                r = s,
                                n = a;
                                break
                            }
                            u = u.sibling
                        }
                        if (!c)
                            throw Error(i(189))
                    }
                }
                if (n.alternate !== r)
                    throw Error(i(190))
            }
            if (n.tag !== 3)
                throw Error(i(188));
            return n.stateNode.current === n ? e : t
        }
        function p(e) {
            var t = e.tag;
            if (t === 5 || t === 26 || t === 27 || t === 6)
                return e;
            for (e = e.child; e !== null;) {
                if (t = p(e), t !== null)
                    return t;
                e = e.sibling
            }
            return null
        }
        var h = Object.assign,
            g = Symbol.for(`react.element`),
            _ = Symbol.for(`react.transitional.element`),
            v = Symbol.for(`react.portal`),
            y = Symbol.for(`react.fragment`),
            b = Symbol.for(`react.strict_mode`),
            x = Symbol.for(`react.profiler`),
            S = Symbol.for(`react.consumer`),
            C = Symbol.for(`react.context`),
            w = Symbol.for(`react.forward_ref`),
            ee = Symbol.for(`react.suspense`),
            te = Symbol.for(`react.suspense_list`),
            ne = Symbol.for(`react.memo`),
            T = Symbol.for(`react.lazy`),
            re = Symbol.for(`react.activity`),
            ie = Symbol.for(`react.memo_cache_sentinel`),
            ae = Symbol.iterator;
        function oe(e) {
            return typeof e != `object` || !e ? null : (e = ae && e[ae] || e[`@@iterator`], typeof e == `function` ? e : null)
        }
        var se = Symbol.for(`react.client.reference`);
        function ce(e) {
            if (e == null)
                return null;
            if (typeof e == `function`)
                return e.$$typeof === se ? null : e.displayName || e.name || null;
            if (typeof e == `string`)
                return e;
            switch (e) {
            case y:
                return `Fragment`;
            case x:
                return `Profiler`;
            case b:
                return `StrictMode`;
            case ee:
                return `Suspense`;
            case te:
                return `SuspenseList`;
            case re:
                return `Activity`
            }
            if (typeof e == `object`)
                switch (e.$$typeof) {
                case v:
                    return `Portal`;
                case C:
                    return e.displayName || `Context`;
                case S:
                    return (e._context.displayName || `Context`) + `.Consumer`;
                case w:
                    var t = e.render;
                    return e = e.displayName, e ||= (e = t.displayName || t.name || ``, e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`), e;
                case ne:
                    return t = e.displayName || null, t === null ? ce(e.type) || `Memo` : t;
                case T:
                    t = e._payload,
                    e = e._init;
                    try {
                        return ce(e(t))
                    } catch {}
                }
            return null
        }
        var le = Array.isArray,
            E = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
            D = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
            ue = {
                pending: !1,
                data: null,
                method: null,
                action: null
            },
            de = [],
            fe = -1;
        function pe(e) {
            return {
                current: e
            }
        }
        function me(e) {
            0 > fe || (e.current = de[fe], de[fe] = null, fe--)
        }
        function O(e, t) {
            fe++,
            de[fe] = e.current,
            e.current = t
        }
        var he = pe(null),
            ge = pe(null),
            _e = pe(null),
            ve = pe(null);
        function ye(e, t) {
            switch (O(_e, t), O(ge, e), O(he, null), t.nodeType) {
            case 9:
            case 11:
                e = (e = t.documentElement) && (e = e.namespaceURI) ? Wd(e) : 0;
                break;
            default:
                if (e = t.tagName, t = t.namespaceURI)
                    t = Wd(t),
                    e = Gd(t, e);
                else
                    switch (e) {
                    case `svg`:
                        e = 1;
                        break;
                    case `math`:
                        e = 2;
                        break;
                    default:
                        e = 0
                    }
            }
            me(he),
            O(he, e)
        }
        function be() {
            me(he),
            me(ge),
            me(_e)
        }
        function xe(e) {
            e.memoizedState !== null && O(ve, e);
            var t = he.current,
                n = Gd(t, e.type);
            t !== n && (O(ge, e), O(he, n))
        }
        function Se(e) {
            ge.current === e && (me(he), me(ge)),
            ve.current === e && (me(ve), $f._currentValue = ue)
        }
        var Ce,
            we;
        function Te(e) {
            if (Ce === void 0)
                try {
                    throw Error()
                } catch (e) {
                    var t = e.stack.trim().match(/\n( *(at )?)/);
                    Ce = t && t[1] || ``,
                    we = -1 < e.stack.indexOf(`
                        at`) ? ` (<anonymous>)` : -1 < e.stack.indexOf(`@`) ? `@unknown:0:0` : ``
                }
            return `
            ` + Ce + e + we
        }
        var Ee = !1;
        function De(e, t) {
            if (!e || Ee)
                return ``;
            Ee = !0;
            var n = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
                var r = {
                    DetermineComponentFrameRoot: function() {
                        try {
                            if (t) {
                                var n = function() {
                                    throw Error()
                                };
                                if (Object.defineProperty(n.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), typeof Reflect == `object` && Reflect.construct) {
                                    try {
                                        Reflect.construct(n, [])
                                    } catch (e) {
                                        var r = e
                                    }
                                    Reflect.construct(e, [], n)
                                } else {
                                    try {
                                        n.call()
                                    } catch (e) {
                                        r = e
                                    }
                                    e.call(n.prototype)
                                }
                            } else {
                                try {
                                    throw Error()
                                } catch (e) {
                                    r = e
                                }
                                (n = e()) && typeof n.catch == `function` && n.catch(function() {})
                            }
                        } catch (e) {
                            if (e && r && typeof e.stack == `string`)
                                return [e.stack, r.stack]
                        }
                        return [null, null]
                    }
                };
                r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
                var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, `name`);
                i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                    value: `DetermineComponentFrameRoot`
                });
                var a = r.DetermineComponentFrameRoot(),
                    o = a[0],
                    s = a[1];
                if (o && s) {
                    var c = o.split(`
                        `),
                        l = s.split(`
                        `);
                    for (i = r = 0; r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);)
                        r++;
                    for (; i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);)
                        i++;
                    if (r === c.length || i === l.length)
                        for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];)
                            i--;
                    for (; 1 <= r && 0 <= i; r--, i--)
                        if (c[r] !== l[i]) {
                            if (r !== 1 || i !== 1)
                                do if (r--, i--, 0 > i || c[r] !== l[i]) {
                                    var u = `
                                    ` + c[r].replace(` at new `, ` at `);
                                    return e.displayName && u.includes(`<anonymous>`) && (u = u.replace(`<anonymous>`, e.displayName)), u
                                }
                                while (1 <= r && 0 <= i);
                            break
                        }
                }
            } finally {
                Ee = !1,
                Error.prepareStackTrace = n
            }
            return (n = e ? e.displayName || e.name : ``) ? Te(n) : ``
        }
        function Oe(e, t) {
            switch (e.tag) {
            case 26:
            case 27:
            case 5:
                return Te(e.type);
            case 16:
                return Te(`Lazy`);
            case 13:
                return e.child !== t && t !== null ? Te(`Suspense Fallback`) : Te(`Suspense`);
            case 19:
                return Te(`SuspenseList`);
            case 0:
            case 15:
                return De(e.type, !1);
            case 11:
                return De(e.type.render, !1);
            case 1:
                return De(e.type, !0);
            case 31:
                return Te(`Activity`);
            default:
                return ``
            }
        }
        function ke(e) {
            try {
                var t = ``,
                    n = null;
                do t += Oe(e, n),
                n = e,
                e = e.return;
                while (e);
                return t
            } catch (e) {
                return `
                Error generating stack: ` + e.message + `
                ` + e.stack
            }
        }
        var Ae = Object.prototype.hasOwnProperty,
            je = t.unstable_scheduleCallback,
            Me = t.unstable_cancelCallback,
            Ne = t.unstable_shouldYield,
            Pe = t.unstable_requestPaint,
            Fe = t.unstable_now,
            Ie = t.unstable_getCurrentPriorityLevel,
            k = t.unstable_ImmediatePriority,
            Le = t.unstable_UserBlockingPriority,
            Re = t.unstable_NormalPriority,
            ze = t.unstable_LowPriority,
            Be = t.unstable_IdlePriority,
            Ve = t.log,
            He = t.unstable_setDisableYieldValue,
            Ue = null,
            We = null;
        function Ge(e) {
            if (typeof Ve == `function` && He(e), We && typeof We.setStrictMode == `function`)
                try {
                    We.setStrictMode(Ue, e)
                } catch {}
        }
        var Ke = Math.clz32 ? Math.clz32 : Ye,
            qe = Math.log,
            Je = Math.LN2;
        function Ye(e) {
            return e >>>= 0, e === 0 ? 32 : 31 - (qe(e) / Je | 0) | 0
        }
        var Xe = 256,
            Ze = 262144,
            Qe = 4194304;
        function $e(e) {
            var t = e & 42;
            if (t !== 0)
                return t;
            switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
                return e & 261888;
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 3932160;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return e & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return e
            }
        }
        function et(e, t, n) {
            var r = e.pendingLanes;
            if (r === 0)
                return 0;
            var i = 0,
                a = e.suspendedLanes,
                o = e.pingedLanes;
            e = e.warmLanes;
            var s = r & 134217727;
            return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = $e(n))) : i = $e(o) : i = $e(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = $e(n))) : i = $e(o)) : i = $e(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i
        }
        function tt(e, t) {
            return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
        }
        function nt(e, t) {
            switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return t + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
            }
        }
        function rt() {
            var e = Qe;
            return Qe <<= 1, !(Qe & 62914560) && (Qe = 4194304), e
        }
        function it(e) {
            for (var t = [], n = 0; 31 > n; n++)
                t.push(e);
            return t
        }
        function at(e, t) {
            e.pendingLanes |= t,
            t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0)
        }
        function ot(e, t, n, r, i, a) {
            var o = e.pendingLanes;
            e.pendingLanes = n,
            e.suspendedLanes = 0,
            e.pingedLanes = 0,
            e.warmLanes = 0,
            e.expiredLanes &= n,
            e.entangledLanes &= n,
            e.errorRecoveryDisabledLanes &= n,
            e.shellSuspendCounter = 0;
            var s = e.entanglements,
                c = e.expirationTimes,
                l = e.hiddenUpdates;
            for (n = o & ~n; 0 < n;) {
                var u = 31 - Ke(n),
                    d = 1 << u;
                s[u] = 0,
                c[u] = -1;
                var f = l[u];
                if (f !== null)
                    for (l[u] = null, u = 0; u < f.length; u++) {
                        var p = f[u];
                        p !== null && (p.lane &= -536870913)
                    }
                n &= ~d
            }
            r !== 0 && st(e, r, 0),
            a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t))
        }
        function st(e, t, n) {
            e.pendingLanes |= t,
            e.suspendedLanes &= ~t;
            var r = 31 - Ke(t);
            e.entangledLanes |= t,
            e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930
        }
        function ct(e, t) {
            var n = e.entangledLanes |= t;
            for (e = e.entanglements; n;) {
                var r = 31 - Ke(n),
                    i = 1 << r;
                i & t | e[r] & t && (e[r] |= t),
                n &= ~i
            }
        }
        function lt(e, t) {
            var n = t & -t;
            return n = n & 42 ? 1 : ut(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0
        }
        function ut(e) {
            switch (e) {
            case 2:
                e = 1;
                break;
            case 8:
                e = 4;
                break;
            case 32:
                e = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                e = 128;
                break;
            case 268435456:
                e = 134217728;
                break;
            default:
                e = 0
            }
            return e
        }
        function dt(e) {
            return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2
        }
        function A() {
            var e = D.p;
            return e === 0 ? (e = window.event, e === void 0 ? 32 : hp(e.type)) : e
        }
        function ft(e, t) {
            var n = D.p;
            try {
                return D.p = e, t()
            } finally {
                D.p = n
            }
        }
        var pt = Math.random().toString(36).slice(2),
            mt = `__reactFiber$` + pt,
            ht = `__reactProps$` + pt,
            j = `__reactContainer$` + pt,
            gt = `__reactEvents$` + pt,
            _t = `__reactListeners$` + pt,
            vt = `__reactHandles$` + pt,
            yt = `__reactResources$` + pt,
            bt = `__reactMarker$` + pt;
        function xt(e) {
            delete e[mt],
            delete e[ht],
            delete e[gt],
            delete e[_t],
            delete e[vt]
        }
        function St(e) {
            var t = e[mt];
            if (t)
                return t;
            for (var n = e.parentNode; n;) {
                if (t = n[j] || n[mt]) {
                    if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                        for (e = ff(e); e !== null;) {
                            if (n = e[mt])
                                return n;
                            e = ff(e)
                        }
                    return t
                }
                e = n,
                n = e.parentNode
            }
            return null
        }
        function Ct(e) {
            if (e = e[mt] || e[j]) {
                var t = e.tag;
                if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
                    return e
            }
            return null
        }
        function wt(e) {
            var t = e.tag;
            if (t === 5 || t === 26 || t === 27 || t === 6)
                return e.stateNode;
            throw Error(i(33))
        }
        function Tt(e) {
            var t = e[yt];
            return t ||= e[yt] = {
                hoistableStyles: new Map,
                hoistableScripts: new Map
            }, t
        }
        function Et(e) {
            e[bt] = !0
        }
        var Dt = new Set,
            Ot = {};
        function kt(e, t) {
            At(e, t),
            At(e + `Capture`, t)
        }
        function At(e, t) {
            for (Ot[e] = t, e = 0; e < t.length; e++)
                Dt.add(t[e])
        }
        var jt = RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),
            Mt = {},
            Nt = {};
        function Pt(e) {
            return Ae.call(Nt, e) ? !0 : Ae.call(Mt, e) ? !1 : jt.test(e) ? Nt[e] = !0 : (Mt[e] = !0, !1)
        }
        function M(e, t, n) {
            if (Pt(t)) {
                if (n === null)
                    e.removeAttribute(t);
                else {
                    switch (typeof n) {
                    case `undefined`:
                    case `function`:
                    case `symbol`:
                        e.removeAttribute(t);
                        return;
                    case `boolean`:
                        var r = t.toLowerCase().slice(0, 5);
                        if (r !== `data-` && r !== `aria-`) {
                            e.removeAttribute(t);
                            return
                        }
                    }
                    e.setAttribute(t, `` + n)
                }
            }
        }
        function Ft(e, t, n) {
            if (n === null)
                e.removeAttribute(t);
            else {
                switch (typeof n) {
                case `undefined`:
                case `function`:
                case `symbol`:
                case `boolean`:
                    e.removeAttribute(t);
                    return
                }
                e.setAttribute(t, `` + n)
            }
        }
        function It(e, t, n, r) {
            if (r === null)
                e.removeAttribute(n);
            else {
                switch (typeof r) {
                case `undefined`:
                case `function`:
                case `symbol`:
                case `boolean`:
                    e.removeAttribute(n);
                    return
                }
                e.setAttributeNS(t, n, `` + r)
            }
        }
        function Lt(e) {
            switch (typeof e) {
            case `bigint`:
            case `boolean`:
            case `number`:
            case `string`:
            case `undefined`:
                return e;
            case `object`:
                return e;
            default:
                return ``
            }
        }
        function Rt(e) {
            var t = e.type;
            return (e = e.nodeName) && e.toLowerCase() === `input` && (t === `checkbox` || t === `radio`)
        }
        function zt(e, t, n) {
            var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
            if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == `function` && typeof r.set == `function`) {
                var i = r.get,
                    a = r.set;
                return Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function() {
                        return i.call(this)
                    },
                    set: function(e) {
                        n = `` + e,
                        a.call(this, e)
                    }
                }), Object.defineProperty(e, t, {
                    enumerable: r.enumerable
                }), {
                    getValue: function() {
                        return n
                    },
                    setValue: function(e) {
                        n = `` + e
                    },
                    stopTracking: function() {
                        e._valueTracker = null,
                        delete e[t]
                    }
                }
            }
        }
        function Bt(e) {
            if (!e._valueTracker) {
                var t = Rt(e) ? `checked` : `value`;
                e._valueTracker = zt(e, t, `` + e[t])
            }
        }
        function Vt(e) {
            if (!e)
                return !1;
            var t = e._valueTracker;
            if (!t)
                return !0;
            var n = t.getValue(),
                r = ``;
            return e && (r = Rt(e) ? e.checked ? `true` : `false` : e.value), e = r, e !== n && (t.setValue(e), !0)
        }
        function Ht(e) {
            if (e ||= typeof document < `u` ? document : void 0, e === void 0)
                return null;
            try {
                return e.activeElement || e.body
            } catch {
                return e.body
            }
        }
        var Ut = /[\n"\\]/g;
        function Wt(e) {
            return e.replace(Ut, function(e) {
                return `\\` + e.charCodeAt(0).toString(16) + ` `
            })
        }
        function Gt(e, t, n, r, i, a, o, s) {
            e.name = ``,
            o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean` ? e.type = o : e.removeAttribute(`type`),
            t == null ? o !== `submit` && o !== `reset` || e.removeAttribute(`value`) : o === `number` ? (t === 0 && e.value === `` || e.value != t) && (e.value = `` + Lt(t)) : e.value !== `` + Lt(t) && (e.value = `` + Lt(t)),
            t == null ? n == null ? r != null && e.removeAttribute(`value`) : qt(e, o, Lt(n)) : qt(e, o, Lt(t)),
            i == null && a != null && (e.defaultChecked = !!a),
            i != null && (e.checked = i && typeof i != `function` && typeof i != `symbol`),
            s != null && typeof s != `function` && typeof s != `symbol` && typeof s != `boolean` ? e.name = `` + Lt(s) : e.removeAttribute(`name`)
        }
        function Kt(e, t, n, r, i, a, o, s) {
            if (a != null && typeof a != `function` && typeof a != `symbol` && typeof a != `boolean` && (e.type = a), t != null || n != null) {
                if (!(a !== `submit` && a !== `reset` || t != null)) {
                    Bt(e);
                    return
                }
                n = n == null ? `` : `` + Lt(n),
                t = t == null ? n : `` + Lt(t),
                s || t === e.value || (e.value = t),
                e.defaultValue = t
            }
            r ??= i,
            r = typeof r != `function` && typeof r != `symbol` && !!r,
            e.checked = s ? e.checked : !!r,
            e.defaultChecked = !!r,
            o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean` && (e.name = o),
            Bt(e)
        }
        function qt(e, t, n) {
            t === `number` && Ht(e.ownerDocument) === e || e.defaultValue === `` + n || (e.defaultValue = `` + n)
        }
        function Jt(e, t, n, r) {
            if (e = e.options, t) {
                t = {};
                for (var i = 0; i < n.length; i++)
                    t[`$` + n[i]] = !0;
                for (n = 0; n < e.length; n++)
                    i = t.hasOwnProperty(`$` + e[n].value),
                    e[n].selected !== i && (e[n].selected = i),
                    i && r && (e[n].defaultSelected = !0)
            } else {
                for (n = `` + Lt(n), t = null, i = 0; i < e.length; i++) {
                    if (e[i].value === n) {
                        e[i].selected = !0,
                        r && (e[i].defaultSelected = !0);
                        return
                    }
                    t !== null || e[i].disabled || (t = e[i])
                }
                t !== null && (t.selected = !0)
            }
        }
        function Yt(e, t, n) {
            if (t != null && (t = `` + Lt(t), t !== e.value && (e.value = t), n == null)) {
                e.defaultValue !== t && (e.defaultValue = t);
                return
            }
            e.defaultValue = n == null ? `` : `` + Lt(n)
        }
        function Xt(e, t, n, r) {
            if (t == null) {
                if (r != null) {
                    if (n != null)
                        throw Error(i(92));
                    if (le(r)) {
                        if (1 < r.length)
                            throw Error(i(93));
                        r = r[0]
                    }
                    n = r
                }
                n ??= ``,
                t = n
            }
            n = Lt(t),
            e.defaultValue = n,
            r = e.textContent,
            r === n && r !== `` && r !== null && (e.value = r),
            Bt(e)
        }
        function Zt(e, t) {
            if (t) {
                var n = e.firstChild;
                if (n && n === e.lastChild && n.nodeType === 3) {
                    n.nodeValue = t;
                    return
                }
            }
            e.textContent = t
        }
        var Qt = new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));
        function $t(e, t, n) {
            var r = t.indexOf(`--`) === 0;
            n == null || typeof n == `boolean` || n === `` ? r ? e.setProperty(t, ``) : t === `float` ? e.cssFloat = `` : e[t] = `` : r ? e.setProperty(t, n) : typeof n != `number` || n === 0 || Qt.has(t) ? t === `float` ? e.cssFloat = n : e[t] = (`` + n).trim() : e[t] = n + `px`
        }
        function en(e, t, n) {
            if (t != null && typeof t != `object`)
                throw Error(i(62));
            if (e = e.style, n != null) {
                for (var r in n)
                    !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf(`--`) === 0 ? e.setProperty(r, ``) : r === `float` ? e.cssFloat = `` : e[r] = ``);
                for (var a in t)
                    r = t[a],
                    t.hasOwnProperty(a) && n[a] !== r && $t(e, a, r)
            } else
                for (var o in t)
                    t.hasOwnProperty(o) && $t(e, o, t[o])
        }
        function tn(e) {
            if (e.indexOf(`-`) === -1)
                return !1;
            switch (e) {
            case `annotation-xml`:
            case `color-profile`:
            case `font-face`:
            case `font-face-src`:
            case `font-face-uri`:
            case `font-face-format`:
            case `font-face-name`:
            case `missing-glyph`:
                return !1;
            default:
                return !0
            }
        }
        var nn = new Map([[`acceptCharset`, `accept-charset`], [`htmlFor`, `for`], [`httpEquiv`, `http-equiv`], [`crossOrigin`, `crossorigin`], [`accentHeight`, `accent-height`], [`alignmentBaseline`, `alignment-baseline`], [`arabicForm`, `arabic-form`], [`baselineShift`, `baseline-shift`], [`capHeight`, `cap-height`], [`clipPath`, `clip-path`], [`clipRule`, `clip-rule`], [`colorInterpolation`, `color-interpolation`], [`colorInterpolationFilters`, `color-interpolation-filters`], [`colorProfile`, `color-profile`], [`colorRendering`, `color-rendering`], [`dominantBaseline`, `dominant-baseline`], [`enableBackground`, `enable-background`], [`fillOpacity`, `fill-opacity`], [`fillRule`, `fill-rule`], [`floodColor`, `flood-color`], [`floodOpacity`, `flood-opacity`], [`fontFamily`, `font-family`], [`fontSize`, `font-size`], [`fontSizeAdjust`, `font-size-adjust`], [`fontStretch`, `font-stretch`], [`fontStyle`, `font-style`], [`fontVariant`, `font-variant`], [`fontWeight`, `font-weight`], [`glyphName`, `glyph-name`], [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`], [`glyphOrientationVertical`, `glyph-orientation-vertical`], [`horizAdvX`, `horiz-adv-x`], [`horizOriginX`, `horiz-origin-x`], [`imageRendering`, `image-rendering`], [`letterSpacing`, `letter-spacing`], [`lightingColor`, `lighting-color`], [`markerEnd`, `marker-end`], [`markerMid`, `marker-mid`], [`markerStart`, `marker-start`], [`overlinePosition`, `overline-position`], [`overlineThickness`, `overline-thickness`], [`paintOrder`, `paint-order`], [`panose-1`, `panose-1`], [`pointerEvents`, `pointer-events`], [`renderingIntent`, `rendering-intent`], [`shapeRendering`, `shape-rendering`], [`stopColor`, `stop-color`], [`stopOpacity`, `stop-opacity`], [`strikethroughPosition`, `strikethrough-position`], [`strikethroughThickness`, `strikethrough-thickness`], [`strokeDasharray`, `stroke-dasharray`], [`strokeDashoffset`, `stroke-dashoffset`], [`strokeLinecap`, `stroke-linecap`], [`strokeLinejoin`, `stroke-linejoin`], [`strokeMiterlimit`, `stroke-miterlimit`], [`strokeOpacity`, `stroke-opacity`], [`strokeWidth`, `stroke-width`], [`textAnchor`, `text-anchor`], [`textDecoration`, `text-decoration`], [`textRendering`, `text-rendering`], [`transformOrigin`, `transform-origin`], [`underlinePosition`, `underline-position`], [`underlineThickness`, `underline-thickness`], [`unicodeBidi`, `unicode-bidi`], [`unicodeRange`, `unicode-range`], [`unitsPerEm`, `units-per-em`], [`vAlphabetic`, `v-alphabetic`], [`vHanging`, `v-hanging`], [`vIdeographic`, `v-ideographic`], [`vMathematical`, `v-mathematical`], [`vectorEffect`, `vector-effect`], [`vertAdvY`, `vert-adv-y`], [`vertOriginX`, `vert-origin-x`], [`vertOriginY`, `vert-origin-y`], [`wordSpacing`, `word-spacing`], [`writingMode`, `writing-mode`], [`xmlnsXlink`, `xmlns:xlink`], [`xHeight`, `x-height`]]),
            rn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function an(e) {
            return rn.test(`` + e) ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')` : e
        }
        function on() {}
        var sn = null;
        function cn(e) {
            return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
        }
        var ln = null,
            un = null;
        function dn(e) {
            var t = Ct(e);
            if (t && (e = t.stateNode)) {
                var n = e[ht] || null;
                a:
                switch (e = t.stateNode, t.type) {
                case `input`:
                    if (Gt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === `radio` && t != null) {
                        for (n = e; n.parentNode;)
                            n = n.parentNode;
                        for (n = n.querySelectorAll(`input[name="` + Wt(`` + t) + `"][type="radio"]`), t = 0; t < n.length; t++) {
                            var r = n[t];
                            if (r !== e && r.form === e.form) {
                                var a = r[ht] || null;
                                if (!a)
                                    throw Error(i(90));
                                Gt(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name)
                            }
                        }
                        for (t = 0; t < n.length; t++)
                            r = n[t],
                            r.form === e.form && Vt(r)
                    }
                    break a;
                case `textarea`:
                    Yt(e, n.value, n.defaultValue);
                    break a;
                case `select`:
                    t = n.value,
                    t != null && Jt(e, !!n.multiple, t, !1)
                }
            }
        }
        var fn = !1;
        function pn(e, t, n) {
            if (fn)
                return e(t, n);
            fn = !0;
            try {
                return e(t)
            } finally {
                if (fn = !1, (ln !== null || un !== null) && (Tu(), ln && (t = ln, e = un, un = ln = null, dn(t), e)))
                    for (t = 0; t < e.length; t++)
                        dn(e[t])
            }
        }
        function mn(e, t) {
            var n = e.stateNode;
            if (n === null)
                return null;
            var r = n[ht] || null;
            if (r === null)
                return null;
            n = r[t];
            a:
            switch (t) {
            case `onClick`:
            case `onClickCapture`:
            case `onDoubleClick`:
            case `onDoubleClickCapture`:
            case `onMouseDown`:
            case `onMouseDownCapture`:
            case `onMouseMove`:
            case `onMouseMoveCapture`:
            case `onMouseUp`:
            case `onMouseUpCapture`:
            case `onMouseEnter`:
                (r = !r.disabled) || (e = e.type, r = e !== `button` && e !== `input` && e !== `select` && e !== `textarea`),
                e = !r;
                break a;
            default:
                e = !1
            }
            if (e)
                return null;
            if (n && typeof n != `function`)
                throw Error(i(231, t, typeof n));
            return n
        }
        var hn = !(typeof window > `u` || window.document === void 0 || window.document.createElement === void 0),
            gn = !1;
        if (hn)
            try {
                var _n = {};
                Object.defineProperty(_n, "passive", {
                    get: function() {
                        gn = !0
                    }
                }),
                window.addEventListener(`test`, _n, _n),
                window.removeEventListener(`test`, _n, _n)
            } catch {
                gn = !1
            }
        var vn = null,
            yn = null,
            bn = null;
        function xn() {
            if (bn)
                return bn;
            var e,
                t = yn,
                n = t.length,
                r,
                i = `value` in vn ? vn.value : vn.textContent,
                a = i.length;
            for (e = 0; e < n && t[e] === i[e]; e++)
                ;
            var o = n - e;
            for (r = 1; r <= o && t[n - r] === i[a - r]; r++)
                ;
            return bn = i.slice(e, 1 < r ? 1 - r : void 0)
        }
        function Sn(e) {
            var t = e.keyCode;
            return `charCode` in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
        }
        function Cn() {
            return !0
        }
        function wn() {
            return !1
        }
        function Tn(e) {
            function t(t, n, r, i, a) {
                for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e)
                    e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
                return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? Cn : wn, this.isPropagationStopped = wn, this
            }
            return h(t.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var e = this.nativeEvent;
                    e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != `unknown` && (e.returnValue = !1), this.isDefaultPrevented = Cn)
                },
                stopPropagation: function() {
                    var e = this.nativeEvent;
                    e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0), this.isPropagationStopped = Cn)
                },
                persist: function() {},
                isPersistent: Cn
            }), t
        }
        var En = {
                eventPhase: 0,
                bubbles: 0,
                cancelable: 0,
                timeStamp: function(e) {
                    return e.timeStamp || Date.now()
                },
                defaultPrevented: 0,
                isTrusted: 0
            },
            Dn = Tn(En),
            On = h({}, En, {
                view: 0,
                detail: 0
            }),
            kn = Tn(On),
            An,
            jn,
            Mn,
            Nn = h({}, On, {
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                pageX: 0,
                pageY: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                getModifierState: Wn,
                button: 0,
                buttons: 0,
                relatedTarget: function(e) {
                    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                },
                movementX: function(e) {
                    return `movementX` in e ? e.movementX : (e !== Mn && (Mn && e.type === `mousemove` ? (An = e.screenX - Mn.screenX, jn = e.screenY - Mn.screenY) : jn = An = 0, Mn = e), An)
                },
                movementY: function(e) {
                    return `movementY` in e ? e.movementY : jn
                }
            }),
            Pn = Tn(Nn),
            Fn = Tn(h({}, Nn, {
                dataTransfer: 0
            })),
            In = Tn(h({}, On, {
                relatedTarget: 0
            })),
            Ln = Tn(h({}, En, {
                animationName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            })),
            Rn = Tn(h({}, En, {
                clipboardData: function(e) {
                    return `clipboardData` in e ? e.clipboardData : window.clipboardData
                }
            })),
            zn = Tn(h({}, En, {
                data: 0
            })),
            Bn = {
                Esc: `Escape`,
                Spacebar: ` `,
                Left: `ArrowLeft`,
                Up: `ArrowUp`,
                Right: `ArrowRight`,
                Down: `ArrowDown`,
                Del: `Delete`,
                Win: `OS`,
                Menu: `ContextMenu`,
                Apps: `ContextMenu`,
                Scroll: `ScrollLock`,
                MozPrintableKey: `Unidentified`
            },
            Vn = {
                8: `Backspace`,
                9: `Tab`,
                12: `Clear`,
                13: `Enter`,
                16: `Shift`,
                17: `Control`,
                18: `Alt`,
                19: `Pause`,
                20: `CapsLock`,
                27: `Escape`,
                32: ` `,
                33: `PageUp`,
                34: `PageDown`,
                35: `End`,
                36: `Home`,
                37: `ArrowLeft`,
                38: `ArrowUp`,
                39: `ArrowRight`,
                40: `ArrowDown`,
                45: `Insert`,
                46: `Delete`,
                112: `F1`,
                113: `F2`,
                114: `F3`,
                115: `F4`,
                116: `F5`,
                117: `F6`,
                118: `F7`,
                119: `F8`,
                120: `F9`,
                121: `F10`,
                122: `F11`,
                123: `F12`,
                144: `NumLock`,
                145: `ScrollLock`,
                224: `Meta`
            },
            Hn = {
                Alt: `altKey`,
                Control: `ctrlKey`,
                Meta: `metaKey`,
                Shift: `shiftKey`
            };
        function Un(e) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(e) : (e = Hn[e]) ? !!t[e] : !1
        }
        function Wn() {
            return Un
        }
        var Gn = Tn(h({}, On, {
                key: function(e) {
                    if (e.key) {
                        var t = Bn[e.key] || e.key;
                        if (t !== `Unidentified`)
                            return t
                    }
                    return e.type === `keypress` ? (e = Sn(e), e === 13 ? `Enter` : String.fromCharCode(e)) : e.type === `keydown` || e.type === `keyup` ? Vn[e.keyCode] || `Unidentified` : ``
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: Wn,
                charCode: function(e) {
                    return e.type === `keypress` ? Sn(e) : 0
                },
                keyCode: function(e) {
                    return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0
                },
                which: function(e) {
                    return e.type === `keypress` ? Sn(e) : e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0
                }
            })),
            Kn = Tn(h({}, Nn, {
                pointerId: 0,
                width: 0,
                height: 0,
                pressure: 0,
                tangentialPressure: 0,
                tiltX: 0,
                tiltY: 0,
                twist: 0,
                pointerType: 0,
                isPrimary: 0
            })),
            qn = Tn(h({}, On, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: Wn
            })),
            Jn = Tn(h({}, En, {
                propertyName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            })),
            Yn = Tn(h({}, Nn, {
                deltaX: function(e) {
                    return `deltaX` in e ? e.deltaX : `wheelDeltaX` in e ? -e.wheelDeltaX : 0
                },
                deltaY: function(e) {
                    return `deltaY` in e ? e.deltaY : `wheelDeltaY` in e ? -e.wheelDeltaY : `wheelDelta` in e ? -e.wheelDelta : 0
                },
                deltaZ: 0,
                deltaMode: 0
            })),
            Xn = Tn(h({}, En, {
                newState: 0,
                oldState: 0
            })),
            Zn = [9, 13, 27, 32],
            Qn = hn && `CompositionEvent` in window,
            $n = null;
        hn && `documentMode` in document && ($n = document.documentMode);
        var er = hn && `TextEvent` in window && !$n,
            tr = hn && (!Qn || $n && 8 < $n && 11 >= $n),
            nr = ` `,
            rr = !1;
        function ir(e, t) {
            switch (e) {
            case `keyup`:
                return Zn.indexOf(t.keyCode) !== -1;
            case `keydown`:
                return t.keyCode !== 229;
            case `keypress`:
            case `mousedown`:
            case `focusout`:
                return !0;
            default:
                return !1
            }
        }
        function ar(e) {
            return e = e.detail, typeof e == `object` && `data` in e ? e.data : null
        }
        var or = !1;
        function sr(e, t) {
            switch (e) {
            case `compositionend`:
                return ar(t);
            case `keypress`:
                return t.which === 32 ? (rr = !0, nr) : null;
            case `textInput`:
                return e = t.data, e === nr && rr ? null : e;
            default:
                return null
            }
        }
        function cr(e, t) {
            if (or)
                return e === `compositionend` || !Qn && ir(e, t) ? (e = xn(), bn = yn = vn = null, or = !1, e) : null;
            switch (e) {
            case `paste`:
                return null;
            case `keypress`:
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length)
                        return t.char;
                    if (t.which)
                        return String.fromCharCode(t.which)
                }
                return null;
            case `compositionend`:
                return tr && t.locale !== `ko` ? null : t.data;
            default:
                return null
            }
        }
        var lr = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        };
        function ur(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t === `input` ? !!lr[e.type] : t === `textarea`
        }
        function dr(e, t, n, r) {
            ln ? un ? un.push(r) : un = [r] : ln = r,
            t = kd(t, `onChange`),
            0 < t.length && (n = new Dn(`onChange`, `change`, null, n, r), e.push({
                event: n,
                listeners: t
            }))
        }
        var fr = null,
            pr = null;
        function mr(e) {
            Cd(e, 0)
        }
        function hr(e) {
            if (Vt(wt(e)))
                return e
        }
        function gr(e, t) {
            if (e === `change`)
                return t
        }
        var _r = !1;
        if (hn) {
            var vr;
            if (hn) {
                var yr = `oninput` in document;
                if (!yr) {
                    var br = document.createElement(`div`);
                    br.setAttribute(`oninput`, `return;`),
                    yr = typeof br.oninput == `function`
                }
                vr = yr
            } else
                vr = !1;
            _r = vr && (!document.documentMode || 9 < document.documentMode)
        }
        function xr() {
            fr && (fr.detachEvent(`onpropertychange`, Sr), pr = fr = null)
        }
        function Sr(e) {
            if (e.propertyName === `value` && hr(pr)) {
                var t = [];
                dr(t, pr, e, cn(e)),
                pn(mr, t)
            }
        }
        function Cr(e, t, n) {
            e === `focusin` ? (xr(), fr = t, pr = n, fr.attachEvent(`onpropertychange`, Sr)) : e === `focusout` && xr()
        }
        function wr(e) {
            if (e === `selectionchange` || e === `keyup` || e === `keydown`)
                return hr(pr)
        }
        function Tr(e, t) {
            if (e === `click`)
                return hr(t)
        }
        function Er(e, t) {
            if (e === `input` || e === `change`)
                return hr(t)
        }
        function Dr(e, t) {
            return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t
        }
        var Or = typeof Object.is == `function` ? Object.is : Dr;
        function kr(e, t) {
            if (Or(e, t))
                return !0;
            if (typeof e != `object` || !e || typeof t != `object` || !t)
                return !1;
            var n = Object.keys(e),
                r = Object.keys(t);
            if (n.length !== r.length)
                return !1;
            for (r = 0; r < n.length; r++) {
                var i = n[r];
                if (!Ae.call(t, i) || !Or(e[i], t[i]))
                    return !1
            }
            return !0
        }
        function Ar(e) {
            for (; e && e.firstChild;)
                e = e.firstChild;
            return e
        }
        function jr(e, t) {
            var n = Ar(e);
            e = 0;
            for (var r; n;) {
                if (n.nodeType === 3) {
                    if (r = e + n.textContent.length, e <= t && r >= t)
                        return {
                            node: n,
                            offset: t - e
                        };
                    e = r
                }
                a:
                {
                    for (; n;) {
                        if (n.nextSibling) {
                            n = n.nextSibling;
                            break a
                        }
                        n = n.parentNode
                    }
                    n = void 0
                }n = Ar(n)
            }
        }
        function Mr(e, t) {
            return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Mr(e, t.parentNode) : `contains` in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
        }
        function Nr(e) {
            e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
            for (var t = Ht(e.document); t instanceof e.HTMLIFrameElement;) {
                try {
                    var n = typeof t.contentWindow.location.href == `string`
                } catch {
                    n = !1
                }
                if (n)
                    e = t.contentWindow;
                else
                    break;
                t = Ht(e.document)
            }
            return t
        }
        function Pr(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && (t === `input` && (e.type === `text` || e.type === `search` || e.type === `tel` || e.type === `url` || e.type === `password`) || t === `textarea` || e.contentEditable === `true`)
        }
        var Fr = hn && `documentMode` in document && 11 >= document.documentMode,
            Ir = null,
            Lr = null,
            Rr = null,
            zr = !1;
        function Br(e, t, n) {
            var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
            zr || Ir == null || Ir !== Ht(r) || (r = Ir, `selectionStart` in r && Pr(r) ? r = {
                start: r.selectionStart,
                end: r.selectionEnd
            } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
                anchorNode: r.anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset
            }), Rr && kr(Rr, r) || (Rr = r, r = kd(Lr, `onSelect`), 0 < r.length && (t = new Dn(`onSelect`, `select`, null, t, n), e.push({
                event: t,
                listeners: r
            }), t.target = Ir)))
        }
        function Vr(e, t) {
            var n = {};
            return n[e.toLowerCase()] = t.toLowerCase(), n[`Webkit` + e] = `webkit` + t, n[`Moz` + e] = `moz` + t, n
        }
        var Hr = {
                animationend: Vr(`Animation`, `AnimationEnd`),
                animationiteration: Vr(`Animation`, `AnimationIteration`),
                animationstart: Vr(`Animation`, `AnimationStart`),
                transitionrun: Vr(`Transition`, `TransitionRun`),
                transitionstart: Vr(`Transition`, `TransitionStart`),
                transitioncancel: Vr(`Transition`, `TransitionCancel`),
                transitionend: Vr(`Transition`, `TransitionEnd`)
            },
            Ur = {},
            Wr = {};
        hn && (Wr = document.createElement(`div`).style, `AnimationEvent` in window || (delete Hr.animationend.animation, delete Hr.animationiteration.animation, delete Hr.animationstart.animation), `TransitionEvent` in window || delete Hr.transitionend.transition);
        function Gr(e) {
            if (Ur[e])
                return Ur[e];
            if (!Hr[e])
                return e;
            var t = Hr[e],
                n;
            for (n in t)
                if (t.hasOwnProperty(n) && n in Wr)
                    return Ur[e] = t[n];
            return e
        }
        var Kr = Gr(`animationend`),
            qr = Gr(`animationiteration`),
            Jr = Gr(`animationstart`),
            Yr = Gr(`transitionrun`),
            Xr = Gr(`transitionstart`),
            Zr = Gr(`transitioncancel`),
            Qr = Gr(`transitionend`),
            $r = new Map,
            ei = `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);
        ei.push(`scrollEnd`);
        function ti(e, t) {
            $r.set(e, t),
            kt(t, [e])
        }
        var ni = typeof reportError == `function` ? reportError : function(e) {
                if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
                    var t = new window.ErrorEvent(`error`, {
                        bubbles: !0,
                        cancelable: !0,
                        message: typeof e == `object` && e && typeof e.message == `string` ? String(e.message) : String(e),
                        error: e
                    });
                    if (!window.dispatchEvent(t))
                        return
                } else if (typeof process == `object` && typeof process.emit == `function`) {
                    process.emit(`uncaughtException`, e);
                    return
                }
                console.error(e)
            },
            ri = [],
            ii = 0,
            ai = 0;
        function oi() {
            for (var e = ii, t = ai = ii = 0; t < e;) {
                var n = ri[t];
                ri[t++] = null;
                var r = ri[t];
                ri[t++] = null;
                var i = ri[t];
                ri[t++] = null;
                var a = ri[t];
                if (ri[t++] = null, r !== null && i !== null) {
                    var o = r.pending;
                    o === null ? i.next = i : (i.next = o.next, o.next = i),
                    r.pending = i
                }
                a !== 0 && ui(n, i, a)
            }
        }
        function si(e, t, n, r) {
            ri[ii++] = e,
            ri[ii++] = t,
            ri[ii++] = n,
            ri[ii++] = r,
            ai |= r,
            e.lanes |= r,
            e = e.alternate,
            e !== null && (e.lanes |= r)
        }
        function ci(e, t, n, r) {
            return si(e, t, n, r), di(e)
        }
        function li(e, t) {
            return si(e, null, null, t), di(e)
        }
        function ui(e, t, n) {
            e.lanes |= n;
            var r = e.alternate;
            r !== null && (r.lanes |= n);
            for (var i = !1, a = e.return; a !== null;)
                a.childLanes |= n,
                r = a.alternate,
                r !== null && (r.childLanes |= n),
                a.tag === 22 && (e = a.stateNode, e === null || e._visibility & 1 || (i = !0)),
                e = a,
                a = a.return;
            return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - Ke(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null
        }
        function di(e) {
            if (50 < _u)
                throw _u = 0, vu = null, Error(i(185));
            for (var t = e.return; t !== null;)
                e = t,
                t = e.return;
            return e.tag === 3 ? e.stateNode : null
        }
        var fi = {};
        function pi(e, t, n, r) {
            this.tag = e,
            this.key = n,
            this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
            this.index = 0,
            this.refCleanup = this.ref = null,
            this.pendingProps = t,
            this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
            this.mode = r,
            this.subtreeFlags = this.flags = 0,
            this.deletions = null,
            this.childLanes = this.lanes = 0,
            this.alternate = null
        }
        function mi(e, t, n, r) {
            return new pi(e, t, n, r)
        }
        function hi(e) {
            return e = e.prototype, !(!e || !e.isReactComponent)
        }
        function gi(e, t) {
            var n = e.alternate;
            return n === null ? (n = mi(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n
        }
        function _i(e, t) {
            e.flags &= 65011714;
            var n = e.alternate;
            return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }), e
        }
        function vi(e, t, n, r, a, o) {
            var s = 0;
            if (r = e, typeof e == `function`)
                hi(e) && (s = 1);
            else if (typeof e == `string`)
                s = Wf(e, n, he.current) ? 26 : e === `html` || e === `head` || e === `body` ? 27 : 5;
            else
                a:
                switch (e) {
                case re:
                    return e = mi(31, n, t, a), e.elementType = re, e.lanes = o, e;
                case y:
                    return yi(n.children, a, o, t);
                case b:
                    s = 8,
                    a |= 24;
                    break;
                case x:
                    return e = mi(12, n, t, a | 2), e.elementType = x, e.lanes = o, e;
                case ee:
                    return e = mi(13, n, t, a), e.elementType = ee, e.lanes = o, e;
                case te:
                    return e = mi(19, n, t, a), e.elementType = te, e.lanes = o, e;
                default:
                    if (typeof e == `object` && e)
                        switch (e.$$typeof) {
                        case C:
                            s = 10;
                            break a;
                        case S:
                            s = 9;
                            break a;
                        case w:
                            s = 11;
                            break a;
                        case ne:
                            s = 14;
                            break a;
                        case T:
                            s = 16,
                            r = null;
                            break a
                        }
                    s = 29,
                    n = Error(i(130, e === null ? `null` : typeof e, ``)),
                    r = null
                }
            return t = mi(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t
        }
        function yi(e, t, n, r) {
            return e = mi(7, e, r, t), e.lanes = n, e
        }
        function bi(e, t, n) {
            return e = mi(6, e, null, t), e.lanes = n, e
        }
        function xi(e) {
            var t = mi(18, null, null, 0);
            return t.stateNode = e, t
        }
        function Si(e, t, n) {
            return t = mi(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            }, t
        }
        var Ci = new WeakMap;
        function wi(e, t) {
            if (typeof e == `object` && e) {
                var n = Ci.get(e);
                return n === void 0 ? (t = {
                    value: e,
                    source: t,
                    stack: ke(t)
                }, Ci.set(e, t), t) : n
            }
            return {
                value: e,
                source: t,
                stack: ke(t)
            }
        }
        var Ti = [],
            Ei = 0,
            Di = null,
            Oi = 0,
            ki = [],
            Ai = 0,
            ji = null,
            Mi = 1,
            Ni = ``;
        function Pi(e, t) {
            Ti[Ei++] = Oi,
            Ti[Ei++] = Di,
            Di = e,
            Oi = t
        }
        function Fi(e, t, n) {
            ki[Ai++] = Mi,
            ki[Ai++] = Ni,
            ki[Ai++] = ji,
            ji = e;
            var r = Mi;
            e = Ni;
            var i = 32 - Ke(r) - 1;
            r &= ~(1 << i),
            n += 1;
            var a = 32 - Ke(t) + i;
            if (30 < a) {
                var o = i - i % 5;
                a = (r & (1 << o) - 1).toString(32),
                r >>= o,
                i -= o,
                Mi = 1 << 32 - Ke(t) + i | n << i | r,
                Ni = a + e
            } else
                Mi = 1 << a | n << i | r,
                Ni = e
        }
        function Ii(e) {
            e.return !== null && (Pi(e, 1), Fi(e, 1, 0))
        }
        function Li(e) {
            for (; e === Di;)
                Di = Ti[--Ei],
                Ti[Ei] = null,
                Oi = Ti[--Ei],
                Ti[Ei] = null;
            for (; e === ji;)
                ji = ki[--Ai],
                ki[Ai] = null,
                Ni = ki[--Ai],
                ki[Ai] = null,
                Mi = ki[--Ai],
                ki[Ai] = null
        }
        function Ri(e, t) {
            ki[Ai++] = Mi,
            ki[Ai++] = Ni,
            ki[Ai++] = ji,
            Mi = t.id,
            Ni = t.overflow,
            ji = e
        }
        var zi = null,
            N = null,
            P = !1,
            Bi = null,
            Vi = !1,
            Hi = Error(i(519));
        function Ui(e) {
            throw Yi(wi(Error(i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? `text` : `HTML`, ``)), e)), Hi
        }
        function Wi(e) {
            var t = e.stateNode,
                n = e.type,
                r = e.memoizedProps;
            switch (t[mt] = e, t[ht] = r, n) {
            case `dialog`:
                J(`cancel`, t),
                J(`close`, t);
                break;
            case `iframe`:
            case `object`:
            case `embed`:
                J(`load`, t);
                break;
            case `video`:
            case `audio`:
                for (n = 0; n < xd.length; n++)
                    J(xd[n], t);
                break;
            case `source`:
                J(`error`, t);
                break;
            case `img`:
            case `image`:
            case `link`:
                J(`error`, t),
                J(`load`, t);
                break;
            case `details`:
                J(`toggle`, t);
                break;
            case `input`:
                J(`invalid`, t),
                Kt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
                break;
            case `select`:
                J(`invalid`, t);
                break;
            case `textarea`:
                J(`invalid`, t),
                Xt(t, r.value, r.defaultValue, r.children)
            }
            n = r.children,
            typeof n != `string` && typeof n != `number` && typeof n != `bigint` || t.textContent === `` + n || !0 === r.suppressHydrationWarning || Fd(t.textContent, n) ? (r.popover != null && (J(`beforetoggle`, t), J(`toggle`, t)), r.onScroll != null && J(`scroll`, t), r.onScrollEnd != null && J(`scrollend`, t), r.onClick != null && (t.onclick = on), t = !0) : t = !1,
            t || Ui(e, !0)
        }
        function Gi(e) {
            for (zi = e.return; zi;)
                switch (zi.tag) {
                case 5:
                case 31:
                case 13:
                    Vi = !1;
                    return;
                case 27:
                case 3:
                    Vi = !0;
                    return;
                default:
                    zi = zi.return
                }
        }
        function Ki(e) {
            if (e !== zi)
                return !1;
            if (!P)
                return Gi(e), P = !0, !1;
            var t = e.tag,
                n;
            if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = n === `form` || n === `button` || Kd(e.type, e.memoizedProps)), n = !n), n && N && Ui(e), Gi(e), t === 13) {
                if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e)
                    throw Error(i(317));
                N = df(e)
            } else if (t === 31) {
                if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e)
                    throw Error(i(317));
                N = df(e)
            } else
                t === 27 ? (t = N, ef(e.type) ? (e = uf, uf = null, N = e) : N = t) : N = zi ? lf(e.stateNode.nextSibling) : null;
            return !0
        }
        function qi() {
            N = zi = null,
            P = !1
        }
        function Ji() {
            var e = Bi;
            return e !== null && (ru === null ? ru = e : ru.push.apply(ru, e), Bi = null), e
        }
        function Yi(e) {
            Bi === null ? Bi = [e] : Bi.push(e)
        }
        var Xi = pe(null),
            Zi = null,
            Qi = null;
        function $i(e, t, n) {
            O(Xi, t._currentValue),
            t._currentValue = n
        }
        function ea(e) {
            e._currentValue = Xi.current,
            me(Xi)
        }
        function ta(e, t, n) {
            for (; e !== null;) {
                var r = e.alternate;
                if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n)
                    break;
                e = e.return
            }
        }
        function na(e, t, n, r) {
            var a = e.child;
            for (a !== null && (a.return = e); a !== null;) {
                var o = a.dependencies;
                if (o !== null) {
                    var s = a.child;
                    o = o.firstContext;
                    a:
                    for (; o !== null;) {
                        var c = o;
                        o = a;
                        for (var l = 0; l < t.length; l++)
                            if (c.context === t[l]) {
                                o.lanes |= n,
                                c = o.alternate,
                                c !== null && (c.lanes |= n),
                                ta(o.return, n, e),
                                r || (s = null);
                                break a
                            }
                        o = c.next
                    }
                } else if (a.tag === 18) {
                    if (s = a.return, s === null)
                        throw Error(i(341));
                    s.lanes |= n,
                    o = s.alternate,
                    o !== null && (o.lanes |= n),
                    ta(s, n, e),
                    s = null
                } else
                    s = a.child;
                if (s !== null)
                    s.return = a;
                else
                    for (s = a; s !== null;) {
                        if (s === e) {
                            s = null;
                            break
                        }
                        if (a = s.sibling, a !== null) {
                            a.return = s.return,
                            s = a;
                            break
                        }
                        s = s.return
                    }
                a = s
            }
        }
        function ra(e, t, n, r) {
            e = null;
            for (var a = t, o = !1; a !== null;) {
                if (!o) {
                    if (a.flags & 524288)
                        o = !0;
                    else if (a.flags & 262144)
                        break
                }
                if (a.tag === 10) {
                    var s = a.alternate;
                    if (s === null)
                        throw Error(i(387));
                    if (s = s.memoizedProps, s !== null) {
                        var c = a.type;
                        Or(a.pendingProps.value, s.value) || (e === null ? e = [c] : e.push(c))
                    }
                } else if (a === ve.current) {
                    if (s = a.alternate, s === null)
                        throw Error(i(387));
                    s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e === null ? e = [$f] : e.push($f))
                }
                a = a.return
            }
            e !== null && na(t, e, n, r),
            t.flags |= 262144
        }
        function ia(e) {
            for (e = e.firstContext; e !== null;) {
                if (!Or(e.context._currentValue, e.memoizedValue))
                    return !0;
                e = e.next
            }
            return !1
        }
        function aa(e) {
            Zi = e,
            Qi = null,
            e = e.dependencies,
            e !== null && (e.firstContext = null)
        }
        function oa(e) {
            return ca(Zi, e)
        }
        function sa(e, t) {
            return Zi === null && aa(e), ca(e, t)
        }
        function ca(e, t) {
            var n = t._currentValue;
            if (t = {
                context: t,
                memoizedValue: n,
                next: null
            }, Qi === null) {
                if (e === null)
                    throw Error(i(308));
                Qi = t,
                e.dependencies = {
                    lanes: 0,
                    firstContext: t
                },
                e.flags |= 524288
            } else
                Qi = Qi.next = t;
            return n
        }
        var la = typeof AbortController < `u` ? AbortController : function() {
                var e = [],
                    t = this.signal = {
                        aborted: !1,
                        addEventListener: function(t, n) {
                            e.push(n)
                        }
                    };
                this.abort = function() {
                    t.aborted = !0,
                    e.forEach(function(e) {
                        return e()
                    })
                }
            },
            ua = t.unstable_scheduleCallback,
            da = t.unstable_NormalPriority,
            fa = {
                $$typeof: C,
                Consumer: null,
                Provider: null,
                _currentValue: null,
                _currentValue2: null,
                _threadCount: 0
            };
        function pa() {
            return {
                controller: new la,
                data: new Map,
                refCount: 0
            }
        }
        function ma(e) {
            e.refCount--,
            e.refCount === 0 && ua(da, function() {
                e.controller.abort()
            })
        }
        var ha = null,
            ga = 0,
            _a = 0,
            va = null;
        function ya(e, t) {
            if (ha === null) {
                var n = ha = [];
                ga = 0,
                _a = q(),
                va = {
                    status: `pending`,
                    value: void 0,
                    then: function(e) {
                        n.push(e)
                    }
                }
            }
            return ga++, t.then(ba, ba), t
        }
        function ba() {
            if (--ga === 0 && ha !== null) {
                va !== null && (va.status = `fulfilled`);
                var e = ha;
                ha = null,
                _a = 0,
                va = null;
                for (var t = 0; t < e.length; t++)
                    (0, e[t])()
            }
        }
        function xa(e, t) {
            var n = [],
                r = {
                    status: `pending`,
                    value: null,
                    reason: null,
                    then: function(e) {
                        n.push(e)
                    }
                };
            return e.then(function() {
                r.status = `fulfilled`,
                r.value = t;
                for (var e = 0; e < n.length; e++)
                    (0, n[e])(t)
            }, function(e) {
                for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++)
                    (0, n[e])(void 0)
            }), r
        }
        var Sa = E.S;
        E.S = function(e, t) {
            ou = Fe(),
            typeof t == `object` && t && typeof t.then == `function` && ya(e, t),
            Sa !== null && Sa(e, t)
        };
        var Ca = pe(null);
        function wa() {
            var e = Ca.current;
            return e === null ? V.pooledCache : e
        }
        function Ta(e, t) {
            t === null ? O(Ca, Ca.current) : O(Ca, t.pool)
        }
        function Ea() {
            var e = wa();
            return e === null ? null : {
                parent: fa._currentValue,
                pool: e
            }
        }
        var Da = Error(i(460)),
            Oa = Error(i(474)),
            ka = Error(i(542)),
            Aa = {
                then: function() {}
            };
        function ja(e) {
            return e = e.status, e === `fulfilled` || e === `rejected`
        }
        function Ma(e, t, n) {
            switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(on, on), t = n), t.status) {
            case `fulfilled`:
                return t.value;
            case `rejected`:
                throw e = t.reason, Fa(e), e;
            default:
                if (typeof t.status == `string`)
                    t.then(on, on);
                else {
                    if (e = V, e !== null && 100 < e.shellSuspendCounter)
                        throw Error(i(482));
                    e = t,
                    e.status = `pending`,
                    e.then(function(e) {
                        if (t.status === `pending`) {
                            var n = t;
                            n.status = `fulfilled`,
                            n.value = e
                        }
                    }, function(e) {
                        if (t.status === `pending`) {
                            var n = t;
                            n.status = `rejected`,
                            n.reason = e
                        }
                    })
                }
                switch (t.status) {
                case `fulfilled`:
                    return t.value;
                case `rejected`:
                    throw e = t.reason, Fa(e), e
                }
                throw Na = t, Da
            }
        }
        function F(e) {
            try {
                var t = e._init;
                return t(e._payload)
            } catch (e) {
                throw typeof e == `object` && e && typeof e.then == `function` ? (Na = e, Da) : e
            }
        }
        var Na = null;
        function Pa() {
            if (Na === null)
                throw Error(i(459));
            var e = Na;
            return Na = null, e
        }
        function Fa(e) {
            if (e === Da || e === ka)
                throw Error(i(483))
        }
        var Ia = null,
            La = 0;
        function Ra(e) {
            var t = La;
            return La += 1, Ia === null && (Ia = []), Ma(Ia, e, t)
        }
        function za(e, t) {
            t = t.props.ref,
            e.ref = t === void 0 ? null : t
        }
        function Ba(e, t) {
            throw t.$$typeof === g ? Error(i(525)) : (e = Object.prototype.toString.call(t), Error(i(31, e === `[object Object]` ? `object with keys {` + Object.keys(t).join(`, `) + `}` : e)))
        }
        function Va(e) {
            function t(t, n) {
                if (e) {
                    var r = t.deletions;
                    r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n)
                }
            }
            function n(n, r) {
                if (!e)
                    return null;
                for (; r !== null;)
                    t(n, r),
                    r = r.sibling;
                return null
            }
            function r(e) {
                for (var t = new Map; e !== null;)
                    e.key === null ? t.set(e.index, e) : t.set(e.key, e),
                    e = e.sibling;
                return t
            }
            function a(e, t) {
                return e = gi(e, t), e.index = 0, e.sibling = null, e
            }
            function o(t, n, r) {
                return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 67108866, n) : (r = r.index, r < n ? (t.flags |= 67108866, n) : r)) : (t.flags |= 1048576, n)
            }
            function s(t) {
                return e && t.alternate === null && (t.flags |= 67108866), t
            }
            function c(e, t, n, r) {
                return t === null || t.tag !== 6 ? (t = bi(n, e.mode, r), t.return = e, t) : (t = a(t, n), t.return = e, t)
            }
            function l(e, t, n, r) {
                var i = n.type;
                return i === y ? d(e, t, n.props.children, r, n.key) : t !== null && (t.elementType === i || typeof i == `object` && i && i.$$typeof === T && F(i) === t.type) ? (t = a(t, n.props), za(t, n), t.return = e, t) : (t = vi(n.type, n.key, n.props, null, e.mode, r), za(t, n), t.return = e, t)
            }
            function u(e, t, n, r) {
                return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = Si(n, e.mode, r), t.return = e, t) : (t = a(t, n.children || []), t.return = e, t)
            }
            function d(e, t, n, r, i) {
                return t === null || t.tag !== 7 ? (t = yi(n, e.mode, r, i), t.return = e, t) : (t = a(t, n), t.return = e, t)
            }
            function f(e, t, n) {
                if (typeof t == `string` && t !== `` || typeof t == `number` || typeof t == `bigint`)
                    return t = bi(`` + t, e.mode, n), t.return = e, t;
                if (typeof t == `object` && t) {
                    switch (t.$$typeof) {
                    case _:
                        return n = vi(t.type, t.key, t.props, null, e.mode, n), za(n, t), n.return = e, n;
                    case v:
                        return t = Si(t, e.mode, n), t.return = e, t;
                    case T:
                        return t = F(t), f(e, t, n)
                    }
                    if (le(t) || oe(t))
                        return t = yi(t, e.mode, n, null), t.return = e, t;
                    if (typeof t.then == `function`)
                        return f(e, Ra(t), n);
                    if (t.$$typeof === C)
                        return f(e, sa(e, t), n);
                    Ba(e, t)
                }
                return null
            }
            function p(e, t, n, r) {
                var i = t === null ? null : t.key;
                if (typeof n == `string` && n !== `` || typeof n == `number` || typeof n == `bigint`)
                    return i === null ? c(e, t, `` + n, r) : null;
                if (typeof n == `object` && n) {
                    switch (n.$$typeof) {
                    case _:
                        return n.key === i ? l(e, t, n, r) : null;
                    case v:
                        return n.key === i ? u(e, t, n, r) : null;
                    case T:
                        return n = F(n), p(e, t, n, r)
                    }
                    if (le(n) || oe(n))
                        return i === null ? d(e, t, n, r, null) : null;
                    if (typeof n.then == `function`)
                        return p(e, t, Ra(n), r);
                    if (n.$$typeof === C)
                        return p(e, t, sa(e, n), r);
                    Ba(e, n)
                }
                return null
            }
            function m(e, t, n, r, i) {
                if (typeof r == `string` && r !== `` || typeof r == `number` || typeof r == `bigint`)
                    return e = e.get(n) || null, c(t, e, `` + r, i);
                if (typeof r == `object` && r) {
                    switch (r.$$typeof) {
                    case _:
                        return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
                    case v:
                        return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
                    case T:
                        return r = F(r), m(e, t, n, r, i)
                    }
                    if (le(r) || oe(r))
                        return e = e.get(n) || null, d(t, e, r, i, null);
                    if (typeof r.then == `function`)
                        return m(e, t, n, Ra(r), i);
                    if (r.$$typeof === C)
                        return m(e, t, n, sa(t, r), i);
                    Ba(t, r)
                }
                return null
            }
            function h(i, a, s, c) {
                for (var l = null, u = null, d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
                    d.index > h ? (g = d, d = null) : g = d.sibling;
                    var _ = p(i, d, s[h], c);
                    if (_ === null) {
                        d === null && (d = g);
                        break
                    }
                    e && d && _.alternate === null && t(i, d),
                    a = o(_, a, h),
                    u === null ? l = _ : u.sibling = _,
                    u = _,
                    d = g
                }
                if (h === s.length)
                    return n(i, d), P && Pi(i, h), l;
                if (d === null) {
                    for (; h < s.length; h++)
                        d = f(i, s[h], c),
                        d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
                    return P && Pi(i, h), l
                }
                for (d = r(d); h < s.length; h++)
                    g = m(d, i, h, s[h], c),
                    g !== null && (e && g.alternate !== null && d.delete(g.key === null ? h : g.key), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
                return e && d.forEach(function(e) {
                    return t(i, e)
                }), P && Pi(i, h), l
            }
            function g(a, s, c, l) {
                if (c == null)
                    throw Error(i(151));
                for (var u = null, d = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
                    h.index > g ? (_ = h, h = null) : _ = h.sibling;
                    var y = p(a, h, v.value, l);
                    if (y === null) {
                        h === null && (h = _);
                        break
                    }
                    e && h && y.alternate === null && t(a, h),
                    s = o(y, s, g),
                    d === null ? u = y : d.sibling = y,
                    d = y,
                    h = _
                }
                if (v.done)
                    return n(a, h), P && Pi(a, g), u;
                if (h === null) {
                    for (; !v.done; g++, v = c.next())
                        v = f(a, v.value, l),
                        v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
                    return P && Pi(a, g), u
                }
                for (h = r(h); !v.done; g++, v = c.next())
                    v = m(h, a, g, v.value, l),
                    v !== null && (e && v.alternate !== null && h.delete(v.key === null ? g : v.key), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
                return e && h.forEach(function(e) {
                    return t(a, e)
                }), P && Pi(a, g), u
            }
            function b(e, r, o, c) {
                if (typeof o == `object` && o && o.type === y && o.key === null && (o = o.props.children), typeof o == `object` && o) {
                    switch (o.$$typeof) {
                    case _:
                        a:
                        {
                            for (var l = o.key; r !== null;) {
                                if (r.key === l) {
                                    if (l = o.type, l === y) {
                                        if (r.tag === 7) {
                                            n(e, r.sibling),
                                            c = a(r, o.props.children),
                                            c.return = e,
                                            e = c;
                                            break a
                                        }
                                    } else if (r.elementType === l || typeof l == `object` && l && l.$$typeof === T && F(l) === r.type) {
                                        n(e, r.sibling),
                                        c = a(r, o.props),
                                        za(c, o),
                                        c.return = e,
                                        e = c;
                                        break a
                                    }
                                    n(e, r);
                                    break
                                }
                                t(e, r),
                                r = r.sibling
                            }
                            o.type === y ? (c = yi(o.props.children, e.mode, c, o.key), c.return = e, e = c) : (c = vi(o.type, o.key, o.props, null, e.mode, c), za(c, o), c.return = e, e = c)
                        }return s(e);
                    case v:
                        a:
                        {
                            for (l = o.key; r !== null;) {
                                if (r.key === l) {
                                    if (r.tag === 4 && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
                                        n(e, r.sibling),
                                        c = a(r, o.children || []),
                                        c.return = e,
                                        e = c;
                                        break a
                                    }
                                    n(e, r);
                                    break
                                }
                                t(e, r),
                                r = r.sibling
                            }
                            c = Si(o, e.mode, c),
                            c.return = e,
                            e = c
                        }return s(e);
                    case T:
                        return o = F(o), b(e, r, o, c)
                    }
                    if (le(o))
                        return h(e, r, o, c);
                    if (oe(o)) {
                        if (l = oe(o), typeof l != `function`)
                            throw Error(i(150));
                        return o = l.call(o), g(e, r, o, c)
                    }
                    if (typeof o.then == `function`)
                        return b(e, r, Ra(o), c);
                    if (o.$$typeof === C)
                        return b(e, r, sa(e, o), c);
                    Ba(e, o)
                }
                return typeof o == `string` && o !== `` || typeof o == `number` || typeof o == `bigint` ? (o = `` + o, r !== null && r.tag === 6 ? (n(e, r.sibling), c = a(r, o), c.return = e, e = c) : (n(e, r), c = bi(o, e.mode, c), c.return = e, e = c), s(e)) : n(e, r)
            }
            return function(e, t, n, r) {
                try {
                    La = 0;
                    var i = b(e, t, n, r);
                    return Ia = null, i
                } catch (t) {
                    if (t === Da || t === ka)
                        throw t;
                    var a = mi(29, t, null, e.mode);
                    return a.lanes = r, a.return = e, a
                }
            }
        }
        var Ha = Va(!0),
            Ua = Va(!1),
            Wa = !1;
        function Ga(e) {
            e.updateQueue = {
                baseState: e.memoizedState,
                firstBaseUpdate: null,
                lastBaseUpdate: null,
                shared: {
                    pending: null,
                    lanes: 0,
                    hiddenCallbacks: null
                },
                callbacks: null
            }
        }
        function Ka(e, t) {
            e = e.updateQueue,
            t.updateQueue === e && (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null
            })
        }
        function qa(e) {
            return {
                lane: e,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            }
        }
        function Ja(e, t, n) {
            var r = e.updateQueue;
            if (r === null)
                return null;
            if (r = r.shared, B & 2) {
                var i = r.pending;
                return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = di(e), ui(e, null, n), t
            }
            return si(e, r, t, n), di(e)
        }
        function Ya(e, t, n) {
            if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
                var r = t.lanes;
                r &= e.pendingLanes,
                n |= r,
                t.lanes = n,
                ct(e, n)
            }
        }
        function Xa(e, t) {
            var n = e.updateQueue,
                r = e.alternate;
            if (r !== null && (r = r.updateQueue, n === r)) {
                var i = null,
                    a = null;
                if (n = n.firstBaseUpdate, n !== null) {
                    do {
                        var o = {
                            lane: n.lane,
                            tag: n.tag,
                            payload: n.payload,
                            callback: null,
                            next: null
                        };
                        a === null ? i = a = o : a = a.next = o,
                        n = n.next
                    } while (n !== null);
                    a === null ? i = a = t : a = a.next = t
                } else
                    i = a = t;
                n = {
                    baseState: r.baseState,
                    firstBaseUpdate: i,
                    lastBaseUpdate: a,
                    shared: r.shared,
                    callbacks: r.callbacks
                },
                e.updateQueue = n;
                return
            }
            e = n.lastBaseUpdate,
            e === null ? n.firstBaseUpdate = t : e.next = t,
            n.lastBaseUpdate = t
        }
        var Za = !1;
        function Qa() {
            if (Za) {
                var e = va;
                if (e !== null)
                    throw e
            }
        }
        function $a(e, t, n, r) {
            Za = !1;
            var i = e.updateQueue;
            Wa = !1;
            var a = i.firstBaseUpdate,
                o = i.lastBaseUpdate,
                s = i.shared.pending;
            if (s !== null) {
                i.shared.pending = null;
                var c = s,
                    l = c.next;
                c.next = null,
                o === null ? a = l : o.next = l,
                o = c;
                var u = e.alternate;
                u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c))
            }
            if (a !== null) {
                var d = i.baseState;
                o = 0,
                u = l = c = null,
                s = a;
                do {
                    var f = s.lane & -536870913,
                        p = f !== s.lane;
                    if (p ? (U & f) === f : (r & f) === f) {
                        f !== 0 && f === _a && (Za = !0),
                        u !== null && (u = u.next = {
                            lane: 0,
                            tag: s.tag,
                            payload: s.payload,
                            callback: null,
                            next: null
                        });
                        a:
                        {
                            var m = e,
                                g = s;
                            f = t;
                            var _ = n;
                            switch (g.tag) {
                            case 1:
                                if (m = g.payload, typeof m == `function`) {
                                    d = m.call(_, d, f);
                                    break a
                                }
                                d = m;
                                break a;
                            case 3:
                                m.flags = m.flags & -65537 | 128;
                            case 0:
                                if (m = g.payload, f = typeof m == `function` ? m.call(_, d, f) : m, f == null)
                                    break a;
                                d = h({}, d, f);
                                break a;
                            case 2:
                                Wa = !0
                            }
                        }f = s.callback,
                        f !== null && (e.flags |= 64, p && (e.flags |= 8192), p = i.callbacks, p === null ? i.callbacks = [f] : p.push(f))
                    } else
                        p = {
                            lane: f,
                            tag: s.tag,
                            payload: s.payload,
                            callback: s.callback,
                            next: null
                        },
                        u === null ? (l = u = p, c = d) : u = u.next = p,
                        o |= f;
                    if (s = s.next, s === null) {
                        if (s = i.shared.pending, s === null)
                            break;
                        p = s,
                        s = p.next,
                        p.next = null,
                        i.lastBaseUpdate = p,
                        i.shared.pending = null
                    }
                } while (1);
                u === null && (c = d),
                i.baseState = c,
                i.firstBaseUpdate = l,
                i.lastBaseUpdate = u,
                a === null && (i.shared.lanes = 0),
                Zl |= o,
                e.lanes = o,
                e.memoizedState = d
            }
        }
        function eo(e, t) {
            if (typeof e != `function`)
                throw Error(i(191, e));
            e.call(t)
        }
        function to(e, t) {
            var n = e.callbacks;
            if (n !== null)
                for (e.callbacks = null, e = 0; e < n.length; e++)
                    eo(n[e], t)
        }
        var no = pe(null),
            ro = pe(0);
        function io(e, t) {
            e = Yl,
            O(ro, e),
            O(no, t),
            Yl = e | t.baseLanes
        }
        function ao() {
            O(ro, Yl),
            O(no, no.current)
        }
        function oo() {
            Yl = ro.current,
            me(no),
            me(ro)
        }
        var so = pe(null),
            co = null;
        function lo(e) {
            var t = e.alternate;
            O(ho, ho.current & 1),
            O(so, e),
            co === null && (t === null || no.current !== null || t.memoizedState !== null) && (co = e)
        }
        function uo(e) {
            O(ho, ho.current),
            O(so, e),
            co === null && (co = e)
        }
        function fo(e) {
            e.tag === 22 ? (O(ho, ho.current), O(so, e), co === null && (co = e)) : po(e)
        }
        function po() {
            O(ho, ho.current),
            O(so, so.current)
        }
        function mo(e) {
            me(so),
            co === e && (co = null),
            me(ho)
        }
        var ho = pe(0);
        function go(e) {
            for (var t = e; t !== null;) {
                if (t.tag === 13) {
                    var n = t.memoizedState;
                    if (n !== null && (n = n.dehydrated, n === null || Q(n) || sf(n)))
                        return t
                } else if (t.tag === 19 && (t.memoizedProps.revealOrder === `forwards` || t.memoizedProps.revealOrder === `backwards` || t.memoizedProps.revealOrder === `unstable_legacy-backwards` || t.memoizedProps.revealOrder === `together`)) {
                    if (t.flags & 128)
                        return t
                } else if (t.child !== null) {
                    t.child.return = t,
                    t = t.child;
                    continue
                }
                if (t === e)
                    break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e)
                        return null;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
            return null
        }
        var _o = 0,
            I = null,
            L = null,
            vo = null,
            yo = !1,
            bo = !1,
            xo = !1,
            So = 0,
            Co = 0,
            wo = null,
            To = 0;
        function Eo() {
            throw Error(i(321))
        }
        function Do(e, t) {
            if (t === null)
                return !1;
            for (var n = 0; n < t.length && n < e.length; n++)
                if (!Or(e[n], t[n]))
                    return !1;
            return !0
        }
        function Oo(e, t, n, r, i, a) {
            return _o = a, I = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, E.H = e === null || e.memoizedState === null ? Gs : Ks, xo = !1, a = n(r, i), xo = !1, bo && (a = Ao(t, n, r, i)), ko(e), a
        }
        function ko(e) {
            E.H = Ws;
            var t = L !== null && L.next !== null;
            if (_o = 0, vo = L = I = null, yo = !1, Co = 0, wo = null, t)
                throw Error(i(300));
            e === null || lc || (e = e.dependencies, e !== null && ia(e) && (lc = !0))
        }
        function Ao(e, t, n, r) {
            I = e;
            var a = 0;
            do {
                if (bo && (wo = null), Co = 0, bo = !1, 25 <= a)
                    throw Error(i(301));
                if (a += 1, vo = L = null, e.updateQueue != null) {
                    var o = e.updateQueue;
                    o.lastEffect = null,
                    o.events = null,
                    o.stores = null,
                    o.memoCache != null && (o.memoCache.index = 0)
                }
                E.H = qs,
                o = t(n, r)
            } while (bo);
            return o
        }
        function jo() {
            var e = E.H,
                t = e.useState()[0];
            return t = typeof t.then == `function` ? Ro(t) : t, e = e.useState()[0], (L === null ? null : L.memoizedState) !== e && (I.flags |= 1024), t
        }
        function Mo() {
            var e = So !== 0;
            return So = 0, e
        }
        function No(e, t, n) {
            t.updateQueue = e.updateQueue,
            t.flags &= -2053,
            e.lanes &= ~n
        }
        function Po(e) {
            if (yo) {
                for (e = e.memoizedState; e !== null;) {
                    var t = e.queue;
                    t !== null && (t.pending = null),
                    e = e.next
                }
                yo = !1
            }
            _o = 0,
            vo = L = I = null,
            bo = !1,
            Co = So = 0,
            wo = null
        }
        function Fo() {
            var e = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return vo === null ? I.memoizedState = vo = e : vo = vo.next = e, vo
        }
        function Io() {
            if (L === null) {
                var e = I.alternate;
                e = e === null ? null : e.memoizedState
            } else
                e = L.next;
            var t = vo === null ? I.memoizedState : vo.next;
            if (t !== null)
                vo = t,
                L = e;
            else {
                if (e === null)
                    throw I.alternate === null ? Error(i(467)) : Error(i(310));
                L = e,
                e = {
                    memoizedState: L.memoizedState,
                    baseState: L.baseState,
                    baseQueue: L.baseQueue,
                    queue: L.queue,
                    next: null
                },
                vo === null ? I.memoizedState = vo = e : vo = vo.next = e
            }
            return vo
        }
        function Lo() {
            return {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null
            }
        }
        function Ro(e) {
            var t = Co;
            return Co += 1, wo === null && (wo = []), e = Ma(wo, e, t), t = I, (vo === null ? t.memoizedState : vo.next) === null && (t = t.alternate, E.H = t === null || t.memoizedState === null ? Gs : Ks), e
        }
        function zo(e) {
            if (typeof e == `object` && e) {
                if (typeof e.then == `function`)
                    return Ro(e);
                if (e.$$typeof === C)
                    return oa(e)
            }
            throw Error(i(438, String(e)))
        }
        function Bo(e) {
            var t = null,
                n = I.updateQueue;
            if (n !== null && (t = n.memoCache), t == null) {
                var r = I.alternate;
                r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
                    data: r.data.map(function(e) {
                        return e.slice()
                    }),
                    index: 0
                })))
            }
            if (t ??= {
                data: [],
                index: 0
            }, n === null && (n = Lo(), I.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
                for (n = t.data[t.index] = Array(e), r = 0; r < e; r++)
                    n[r] = ie;
            return t.index++, n
        }
        function Vo(e, t) {
            return typeof t == `function` ? t(e) : t
        }
        function Ho(e) {
            return Uo(Io(), L, e)
        }
        function Uo(e, t, n) {
            var r = e.queue;
            if (r === null)
                throw Error(i(311));
            r.lastRenderedReducer = n;
            var a = e.baseQueue,
                o = r.pending;
            if (o !== null) {
                if (a !== null) {
                    var s = a.next;
                    a.next = o.next,
                    o.next = s
                }
                t.baseQueue = a = o,
                r.pending = null
            }
            if (o = e.baseState, a === null)
                e.memoizedState = o;
            else {
                t = a.next;
                var c = s = null,
                    l = null,
                    u = t,
                    d = !1;
                do {
                    var f = u.lane & -536870913;
                    if (f === u.lane ? (_o & f) === f : (U & f) === f) {
                        var p = u.revertLane;
                        if (p === 0)
                            l !== null && (l = l.next = {
                                lane: 0,
                                revertLane: 0,
                                gesture: null,
                                action: u.action,
                                hasEagerState: u.hasEagerState,
                                eagerState: u.eagerState,
                                next: null
                            }),
                            f === _a && (d = !0);
                        else if ((_o & p) === p) {
                            u = u.next,
                            p === _a && (d = !0);
                            continue
                        } else
                            f = {
                                lane: 0,
                                revertLane: u.revertLane,
                                gesture: null,
                                action: u.action,
                                hasEagerState: u.hasEagerState,
                                eagerState: u.eagerState,
                                next: null
                            },
                            l === null ? (c = l = f, s = o) : l = l.next = f,
                            I.lanes |= p,
                            Zl |= p;
                        f = u.action,
                        xo && n(o, f),
                        o = u.hasEagerState ? u.eagerState : n(o, f)
                    } else
                        p = {
                            lane: f,
                            revertLane: u.revertLane,
                            gesture: u.gesture,
                            action: u.action,
                            hasEagerState: u.hasEagerState,
                            eagerState: u.eagerState,
                            next: null
                        },
                        l === null ? (c = l = p, s = o) : l = l.next = p,
                        I.lanes |= f,
                        Zl |= f;
                    u = u.next
                } while (u !== null && u !== t);
                if (l === null ? s = o : l.next = c, !Or(o, e.memoizedState) && (lc = !0, d && (n = va, n !== null)))
                    throw n;
                e.memoizedState = o,
                e.baseState = s,
                e.baseQueue = l,
                r.lastRenderedState = o
            }
            return a === null && (r.lanes = 0), [e.memoizedState, r.dispatch]
        }
        function Wo(e) {
            var t = Io(),
                n = t.queue;
            if (n === null)
                throw Error(i(311));
            n.lastRenderedReducer = e;
            var r = n.dispatch,
                a = n.pending,
                o = t.memoizedState;
            if (a !== null) {
                n.pending = null;
                var s = a = a.next;
                do o = e(o, s.action),
                s = s.next;
                while (s !== a);
                Or(o, t.memoizedState) || (lc = !0),
                t.memoizedState = o,
                t.baseQueue === null && (t.baseState = o),
                n.lastRenderedState = o
            }
            return [o, r]
        }
        function Go(e, t, n) {
            var r = I,
                a = Io(),
                o = P;
            if (o) {
                if (n === void 0)
                    throw Error(i(407));
                n = n()
            } else
                n = t();
            var s = !Or((L || a).memoizedState, n);
            if (s && (a.memoizedState = n, lc = !0), a = a.queue, gs(Jo.bind(null, r, a, e), [e]), a.getSnapshot !== t || s || vo !== null && vo.memoizedState.tag & 1) {
                if (r.flags |= 2048, ds(9, {
                    destroy: void 0
                }, qo.bind(null, r, a, n, t), null), V === null)
                    throw Error(i(349));
                o || _o & 127 || Ko(r, t, n)
            }
            return n
        }
        function Ko(e, t, n) {
            e.flags |= 16384,
            e = {
                getSnapshot: t,
                value: n
            },
            t = I.updateQueue,
            t === null ? (t = Lo(), I.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
        }
        function qo(e, t, n, r) {
            t.value = n,
            t.getSnapshot = r,
            Yo(t) && Xo(e)
        }
        function Jo(e, t, n) {
            return n(function() {
                Yo(t) && Xo(e)
            })
        }
        function Yo(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var n = t();
                return !Or(e, n)
            } catch {
                return !0
            }
        }
        function Xo(e) {
            var t = li(e, 2);
            t !== null && xu(t, e, 2)
        }
        function Zo(e) {
            var t = Fo();
            if (typeof e == `function`) {
                var n = e;
                if (e = n(), xo) {
                    Ge(!0);
                    try {
                        n()
                    } finally {
                        Ge(!1)
                    }
                }
            }
            return t.memoizedState = t.baseState = e, t.queue = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Vo,
                lastRenderedState: e
            }, t
        }
        function Qo(e, t, n, r) {
            return e.baseState = n, Uo(e, L, typeof r == `function` ? r : Vo)
        }
        function $o(e, t, n, r, a) {
            if (Vs(e))
                throw Error(i(485));
            if (e = t.action, e !== null) {
                var o = {
                    payload: a,
                    action: e,
                    next: null,
                    isTransition: !0,
                    status: `pending`,
                    value: null,
                    reason: null,
                    listeners: [],
                    then: function(e) {
                        o.listeners.push(e)
                    }
                };
                E.T === null ? o.isTransition = !1 : n(!0),
                r(o),
                n = t.pending,
                n === null ? (o.next = t.pending = o, es(t, o)) : (o.next = n.next, t.pending = n.next = o)
            }
        }
        function es(e, t) {
            var n = t.action,
                r = t.payload,
                i = e.state;
            if (t.isTransition) {
                var a = E.T,
                    o = {};
                E.T = o;
                try {
                    var s = n(i, r),
                        c = E.S;
                    c !== null && c(o, s),
                    ts(e, t, s)
                } catch (n) {
                    rs(e, t, n)
                } finally {
                    a !== null && o.types !== null && (a.types = o.types),
                    E.T = a
                }
            } else
                try {
                    a = n(i, r),
                    ts(e, t, a)
                } catch (n) {
                    rs(e, t, n)
                }
        }
        function ts(e, t, n) {
            typeof n == `object` && n && typeof n.then == `function` ? n.then(function(n) {
                ns(e, t, n)
            }, function(n) {
                return rs(e, t, n)
            }) : ns(e, t, n)
        }
        function ns(e, t, n) {
            t.status = `fulfilled`,
            t.value = n,
            is(t),
            e.state = n,
            t = e.pending,
            t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, es(e, n)))
        }
        function rs(e, t, n) {
            var r = e.pending;
            if (e.pending = null, r !== null) {
                r = r.next;
                do t.status = `rejected`,
                t.reason = n,
                is(t),
                t = t.next;
                while (t !== r)
            }
            e.action = null
        }
        function is(e) {
            e = e.listeners;
            for (var t = 0; t < e.length; t++)
                (0, e[t])()
        }
        function as(e, t) {
            return t
        }
        function os(e, t) {
            if (P) {
                var n = V.formState;
                if (n !== null) {
                    a:
                    {
                        var r = I;
                        if (P) {
                            if (N) {
                                b:
                                {
                                    for (var i = N, a = Vi; i.nodeType !== 8;) {
                                        if (!a) {
                                            i = null;
                                            break b
                                        }
                                        if (i = lf(i.nextSibling), i === null) {
                                            i = null;
                                            break b
                                        }
                                    }
                                    a = i.data,
                                    i = a === `F!` || a === `F` ? i : null
                                }if (i) {
                                    N = lf(i.nextSibling),
                                    r = i.data === `F!`;
                                    break a
                                }
                            }
                            Ui(r)
                        }
                        r = !1
                    }r && (t = n[0])
                }
            }
            return n = Fo(), n.memoizedState = n.baseState = t, r = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: as,
                lastRenderedState: t
            }, n.queue = r, n = Rs.bind(null, I, r), r.dispatch = n, r = Zo(!1), a = Bs.bind(null, I, !1, r.queue), r = Fo(), i = {
                state: t,
                dispatch: null,
                action: e,
                pending: null
            }, r.queue = i, n = $o.bind(null, I, i, a, n), i.dispatch = n, r.memoizedState = e, [t, n, !1]
        }
        function ss(e) {
            return cs(Io(), L, e)
        }
        function cs(e, t, n) {
            if (t = Uo(e, t, as)[0], e = Ho(Vo)[0], typeof t == `object` && t && typeof t.then == `function`)
                try {
                    var r = Ro(t)
                } catch (e) {
                    throw e === Da ? ka : e
                }
            else
                r = t;
            t = Io();
            var i = t.queue,
                a = i.dispatch;
            return n !== t.memoizedState && (I.flags |= 2048, ds(9, {
                destroy: void 0
            }, ls.bind(null, i, n), null)), [r, a, e]
        }
        function ls(e, t) {
            e.action = t
        }
        function us(e) {
            var t = Io(),
                n = L;
            if (n !== null)
                return cs(t, n, e);
            Io(),
            t = t.memoizedState,
            n = Io();
            var r = n.queue.dispatch;
            return n.memoizedState = e, [t, r, !1]
        }
        function ds(e, t, n, r) {
            return e = {
                tag: e,
                create: n,
                deps: r,
                inst: t,
                next: null
            }, t = I.updateQueue, t === null && (t = Lo(), I.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
        }
        function fs() {
            return Io().memoizedState
        }
        function ps(e, t, n, r) {
            var i = Fo();
            I.flags |= e,
            i.memoizedState = ds(1 | t, {
                destroy: void 0
            }, n, r === void 0 ? null : r)
        }
        function ms(e, t, n, r) {
            var i = Io();
            r = r === void 0 ? null : r;
            var a = i.memoizedState.inst;
            L !== null && r !== null && Do(r, L.memoizedState.deps) ? i.memoizedState = ds(t, a, n, r) : (I.flags |= e, i.memoizedState = ds(1 | t, a, n, r))
        }
        function hs(e, t) {
            ps(8390656, 8, e, t)
        }
        function gs(e, t) {
            ms(2048, 8, e, t)
        }
        function _s(e) {
            I.flags |= 4;
            var t = I.updateQueue;
            if (t === null)
                t = Lo(),
                I.updateQueue = t,
                t.events = [e];
            else {
                var n = t.events;
                n === null ? t.events = [e] : n.push(e)
            }
        }
        function vs(e) {
            var t = Io().memoizedState;
            return _s({
                ref: t,
                nextImpl: e
            }), function() {
                if (B & 2)
                    throw Error(i(440));
                return t.impl.apply(void 0, arguments)
            }
        }
        function ys(e, t) {
            return ms(4, 2, e, t)
        }
        function bs(e, t) {
            return ms(4, 4, e, t)
        }
        function xs(e, t) {
            if (typeof t == `function`) {
                e = e();
                var n = t(e);
                return function() {
                    typeof n == `function` ? n() : t(null)
                }
            }
            if (t != null)
                return e = e(), t.current = e, function() {
                    t.current = null
                }
        }
        function Ss(e, t, n) {
            n = n == null ? null : n.concat([e]),
            ms(4, 4, xs.bind(null, t, e), n)
        }
        function Cs() {}
        function ws(e, t) {
            var n = Io();
            t = t === void 0 ? null : t;
            var r = n.memoizedState;
            return t !== null && Do(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
        }
        function Ts(e, t) {
            var n = Io();
            t = t === void 0 ? null : t;
            var r = n.memoizedState;
            if (t !== null && Do(t, r[1]))
                return r[0];
            if (r = e(), xo) {
                Ge(!0);
                try {
                    e()
                } finally {
                    Ge(!1)
                }
            }
            return n.memoizedState = [r, t], r
        }
        function Es(e, t, n) {
            return n === void 0 || _o & 1073741824 && !(U & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = bu(), I.lanes |= e, Zl |= e, n)
        }
        function Ds(e, t, n, r) {
            return Or(n, t) ? n : no.current === null ? !(_o & 42) || _o & 1073741824 && !(U & 261930) ? (lc = !0, e.memoizedState = n) : (e = bu(), I.lanes |= e, Zl |= e, t) : (e = Es(e, n, r), Or(e, t) || (lc = !0), e)
        }
        function Os(e, t, n, r, i) {
            var a = D.p;
            D.p = a !== 0 && 8 > a ? a : 8;
            var o = E.T,
                s = {};
            E.T = s,
            Bs(e, !1, t, n);
            try {
                var c = i(),
                    l = E.S;
                l !== null && l(s, c),
                typeof c == `object` && c && typeof c.then == `function` ? zs(e, t, xa(c, r), yu(e)) : zs(e, t, r, yu(e))
            } catch (n) {
                zs(e, t, {
                    then: function() {},
                    status: `rejected`,
                    reason: n
                }, yu())
            } finally {
                D.p = a,
                o !== null && s.types !== null && (o.types = s.types),
                E.T = o
            }
        }
        function ks() {}
        function As(e, t, n, r) {
            if (e.tag !== 5)
                throw Error(i(476));
            var a = js(e).queue;
            Os(e, a, t, ue, n === null ? ks : function() {
                return Ms(e), n(r)
            })
        }
        function js(e) {
            var t = e.memoizedState;
            if (t !== null)
                return t;
            t = {
                memoizedState: ue,
                baseState: ue,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Vo,
                    lastRenderedState: ue
                },
                next: null
            };
            var n = {};
            return t.next = {
                memoizedState: n,
                baseState: n,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Vo,
                    lastRenderedState: n
                },
                next: null
            }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t
        }
        function Ms(e) {
            var t = js(e);
            t.next === null && (t = e.alternate.memoizedState),
            zs(e, t.next.queue, {}, yu())
        }
        function Ns() {
            return oa($f)
        }
        function Ps() {
            return Io().memoizedState
        }
        function Fs() {
            return Io().memoizedState
        }
        function Is(e) {
            for (var t = e.return; t !== null;) {
                switch (t.tag) {
                case 24:
                case 3:
                    var n = yu();
                    e = qa(n);
                    var r = Ja(t, e, n);
                    r !== null && (xu(r, t, n), Ya(r, t, n)),
                    t = {
                        cache: pa()
                    },
                    e.payload = t;
                    return
                }
                t = t.return
            }
        }
        function Ls(e, t, n) {
            var r = yu();
            n = {
                lane: r,
                revertLane: 0,
                gesture: null,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            },
            Vs(e) ? Hs(t, n) : (n = ci(e, t, n, r), n !== null && (xu(n, e, r), Us(n, t, r)))
        }
        function Rs(e, t, n) {
            zs(e, t, n, yu())
        }
        function zs(e, t, n, r) {
            var i = {
                lane: r,
                revertLane: 0,
                gesture: null,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
            if (Vs(e))
                Hs(t, i);
            else {
                var a = e.alternate;
                if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null))
                    try {
                        var o = t.lastRenderedState,
                            s = a(o, n);
                        if (i.hasEagerState = !0, i.eagerState = s, Or(s, o))
                            return si(e, t, i, 0), V === null && oi(), !1
                    } catch {}
                if (n = ci(e, t, i, r), n !== null)
                    return xu(n, e, r), Us(n, t, r), !0
            }
            return !1
        }
        function Bs(e, t, n, r) {
            if (r = {
                lane: 2,
                revertLane: q(),
                gesture: null,
                action: r,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Vs(e)) {
                if (t)
                    throw Error(i(479))
            } else
                t = ci(e, n, r, 2),
                t !== null && xu(t, e, 2)
        }
        function Vs(e) {
            var t = e.alternate;
            return e === I || t !== null && t === I
        }
        function Hs(e, t) {
            bo = yo = !0;
            var n = e.pending;
            n === null ? t.next = t : (t.next = n.next, n.next = t),
            e.pending = t
        }
        function Us(e, t, n) {
            if (n & 4194048) {
                var r = t.lanes;
                r &= e.pendingLanes,
                n |= r,
                t.lanes = n,
                ct(e, n)
            }
        }
        var Ws = {
            readContext: oa,
            use: zo,
            useCallback: Eo,
            useContext: Eo,
            useEffect: Eo,
            useImperativeHandle: Eo,
            useLayoutEffect: Eo,
            useInsertionEffect: Eo,
            useMemo: Eo,
            useReducer: Eo,
            useRef: Eo,
            useState: Eo,
            useDebugValue: Eo,
            useDeferredValue: Eo,
            useTransition: Eo,
            useSyncExternalStore: Eo,
            useId: Eo,
            useHostTransitionStatus: Eo,
            useFormState: Eo,
            useActionState: Eo,
            useOptimistic: Eo,
            useMemoCache: Eo,
            useCacheRefresh: Eo
        };
        Ws.useEffectEvent = Eo;
        var Gs = {
                readContext: oa,
                use: zo,
                useCallback: function(e, t) {
                    return Fo().memoizedState = [e, t === void 0 ? null : t], e
                },
                useContext: oa,
                useEffect: hs,
                useImperativeHandle: function(e, t, n) {
                    n = n == null ? null : n.concat([e]),
                    ps(4194308, 4, xs.bind(null, t, e), n)
                },
                useLayoutEffect: function(e, t) {
                    return ps(4194308, 4, e, t)
                },
                useInsertionEffect: function(e, t) {
                    ps(4, 2, e, t)
                },
                useMemo: function(e, t) {
                    var n = Fo();
                    t = t === void 0 ? null : t;
                    var r = e();
                    if (xo) {
                        Ge(!0);
                        try {
                            e()
                        } finally {
                            Ge(!1)
                        }
                    }
                    return n.memoizedState = [r, t], r
                },
                useReducer: function(e, t, n) {
                    var r = Fo();
                    if (n !== void 0) {
                        var i = n(t);
                        if (xo) {
                            Ge(!0);
                            try {
                                n(t)
                            } finally {
                                Ge(!1)
                            }
                        }
                    } else
                        i = t;
                    return r.memoizedState = r.baseState = i, e = {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: i
                    }, r.queue = e, e = e.dispatch = Ls.bind(null, I, e), [r.memoizedState, e]
                },
                useRef: function(e) {
                    var t = Fo();
                    return e = {
                        current: e
                    }, t.memoizedState = e
                },
                useState: function(e) {
                    e = Zo(e);
                    var t = e.queue,
                        n = Rs.bind(null, I, t);
                    return t.dispatch = n, [e.memoizedState, n]
                },
                useDebugValue: Cs,
                useDeferredValue: function(e, t) {
                    return Es(Fo(), e, t)
                },
                useTransition: function() {
                    var e = Zo(!1);
                    return e = Os.bind(null, I, e.queue, !0, !1), Fo().memoizedState = e, [!1, e]
                },
                useSyncExternalStore: function(e, t, n) {
                    var r = I,
                        a = Fo();
                    if (P) {
                        if (n === void 0)
                            throw Error(i(407));
                        n = n()
                    } else {
                        if (n = t(), V === null)
                            throw Error(i(349));
                        U & 127 || Ko(r, t, n)
                    }
                    a.memoizedState = n;
                    var o = {
                        value: n,
                        getSnapshot: t
                    };
                    return a.queue = o, hs(Jo.bind(null, r, o, e), [e]), r.flags |= 2048, ds(9, {
                        destroy: void 0
                    }, qo.bind(null, r, o, n, t), null), n
                },
                useId: function() {
                    var e = Fo(),
                        t = V.identifierPrefix;
                    if (P) {
                        var n = Ni,
                            r = Mi;
                        n = (r & ~(1 << 32 - Ke(r) - 1)).toString(32) + n,
                        t = `_` + t + `R_` + n,
                        n = So++,
                        0 < n && (t += `H` + n.toString(32)),
                        t += `_`
                    } else
                        n = To++,
                        t = `_` + t + `r_` + n.toString(32) + `_`;
                    return e.memoizedState = t
                },
                useHostTransitionStatus: Ns,
                useFormState: os,
                useActionState: os,
                useOptimistic: function(e) {
                    var t = Fo();
                    t.memoizedState = t.baseState = e;
                    var n = {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: null,
                        lastRenderedState: null
                    };
                    return t.queue = n, t = Bs.bind(null, I, !0, n), n.dispatch = t, [e, t]
                },
                useMemoCache: Bo,
                useCacheRefresh: function() {
                    return Fo().memoizedState = Is.bind(null, I)
                },
                useEffectEvent: function(e) {
                    var t = Fo(),
                        n = {
                            impl: e
                        };
                    return t.memoizedState = n, function() {
                        if (B & 2)
                            throw Error(i(440));
                        return n.impl.apply(void 0, arguments)
                    }
                }
            },
            Ks = {
                readContext: oa,
                use: zo,
                useCallback: ws,
                useContext: oa,
                useEffect: gs,
                useImperativeHandle: Ss,
                useInsertionEffect: ys,
                useLayoutEffect: bs,
                useMemo: Ts,
                useReducer: Ho,
                useRef: fs,
                useState: function() {
                    return Ho(Vo)
                },
                useDebugValue: Cs,
                useDeferredValue: function(e, t) {
                    return Ds(Io(), L.memoizedState, e, t)
                },
                useTransition: function() {
                    var e = Ho(Vo)[0],
                        t = Io().memoizedState;
                    return [typeof e == `boolean` ? e : Ro(e), t]
                },
                useSyncExternalStore: Go,
                useId: Ps,
                useHostTransitionStatus: Ns,
                useFormState: ss,
                useActionState: ss,
                useOptimistic: function(e, t) {
                    return Qo(Io(), L, e, t)
                },
                useMemoCache: Bo,
                useCacheRefresh: Fs
            };
        Ks.useEffectEvent = vs;
        var qs = {
            readContext: oa,
            use: zo,
            useCallback: ws,
            useContext: oa,
            useEffect: gs,
            useImperativeHandle: Ss,
            useInsertionEffect: ys,
            useLayoutEffect: bs,
            useMemo: Ts,
            useReducer: Wo,
            useRef: fs,
            useState: function() {
                return Wo(Vo)
            },
            useDebugValue: Cs,
            useDeferredValue: function(e, t) {
                var n = Io();
                return L === null ? Es(n, e, t) : Ds(n, L.memoizedState, e, t)
            },
            useTransition: function() {
                var e = Wo(Vo)[0],
                    t = Io().memoizedState;
                return [typeof e == `boolean` ? e : Ro(e), t]
            },
            useSyncExternalStore: Go,
            useId: Ps,
            useHostTransitionStatus: Ns,
            useFormState: us,
            useActionState: us,
            useOptimistic: function(e, t) {
                var n = Io();
                return L === null ? (n.baseState = e, [e, n.queue.dispatch]) : Qo(n, L, e, t)
            },
            useMemoCache: Bo,
            useCacheRefresh: Fs
        };
        qs.useEffectEvent = vs;
        function Js(e, t, n, r) {
            t = e.memoizedState,
            n = n(r, t),
            n = n == null ? t : h({}, t, n),
            e.memoizedState = n,
            e.lanes === 0 && (e.updateQueue.baseState = n)
        }
        var Ys = {
            enqueueSetState: function(e, t, n) {
                e = e._reactInternals;
                var r = yu(),
                    i = qa(r);
                i.payload = t,
                n != null && (i.callback = n),
                t = Ja(e, i, r),
                t !== null && (xu(t, e, r), Ya(t, e, r))
            },
            enqueueReplaceState: function(e, t, n) {
                e = e._reactInternals;
                var r = yu(),
                    i = qa(r);
                i.tag = 1,
                i.payload = t,
                n != null && (i.callback = n),
                t = Ja(e, i, r),
                t !== null && (xu(t, e, r), Ya(t, e, r))
            },
            enqueueForceUpdate: function(e, t) {
                e = e._reactInternals;
                var n = yu(),
                    r = qa(n);
                r.tag = 2,
                t != null && (r.callback = t),
                t = Ja(e, r, n),
                t !== null && (xu(t, e, n), Ya(t, e, n))
            }
        };
        function Xs(e, t, n, r, i, a, o) {
            return e = e.stateNode, typeof e.shouldComponentUpdate == `function` ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !kr(n, r) || !kr(i, a) : !0
        }
        function Zs(e, t, n, r) {
            e = t.state,
            typeof t.componentWillReceiveProps == `function` && t.componentWillReceiveProps(n, r),
            typeof t.UNSAFE_componentWillReceiveProps == `function` && t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Ys.enqueueReplaceState(t, t.state, null)
        }
        function Qs(e, t) {
            var n = t;
            if (`ref` in t)
                for (var r in n = {}, t)
                    r !== `ref` && (n[r] = t[r]);
            if (e = e.defaultProps)
                for (var i in n === t && (n = h({}, n)), e)
                    n[i] === void 0 && (n[i] = e[i]);
            return n
        }
        function $s(e) {
            ni(e)
        }
        function ec(e) {
            console.error(e)
        }
        function tc(e) {
            ni(e)
        }
        function nc(e, t) {
            try {
                var n = e.onUncaughtError;
                n(t.value, {
                    componentStack: t.stack
                })
            } catch (e) {
                setTimeout(function() {
                    throw e
                })
            }
        }
        function rc(e, t, n) {
            try {
                var r = e.onCaughtError;
                r(n.value, {
                    componentStack: n.stack,
                    errorBoundary: t.tag === 1 ? t.stateNode : null
                })
            } catch (e) {
                setTimeout(function() {
                    throw e
                })
            }
        }
        function ic(e, t, n) {
            return n = qa(n), n.tag = 3, n.payload = {
                element: null
            }, n.callback = function() {
                nc(e, t)
            }, n
        }
        function ac(e) {
            return e = qa(e), e.tag = 3, e
        }
        function oc(e, t, n, r) {
            var i = n.type.getDerivedStateFromError;
            if (typeof i == `function`) {
                var a = r.value;
                e.payload = function() {
                    return i(a)
                },
                e.callback = function() {
                    rc(t, n, r)
                }
            }
            var o = n.stateNode;
            o !== null && typeof o.componentDidCatch == `function` && (e.callback = function() {
                rc(t, n, r),
                typeof i != `function` && (lu === null ? lu = new Set([this]) : lu.add(this));
                var e = r.stack;
                this.componentDidCatch(r.value, {
                    componentStack: e === null ? `` : e
                })
            })
        }
        function sc(e, t, n, r, a) {
            if (n.flags |= 32768, typeof r == `object` && r && typeof r.then == `function`) {
                if (t = n.alternate, t !== null && ra(t, n, a, !0), n = so.current, n !== null) {
                    switch (n.tag) {
                    case 31:
                    case 13:
                        return co === null ? Mu() : n.alternate === null && Xl === 0 && (Xl = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, r === Aa ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = new Set([r]) : t.add(r), Xu(e, r, a)), !1;
                    case 22:
                        return n.flags |= 65536, r === Aa ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([r])
                        }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = new Set([r]) : n.add(r)), Xu(e, r, a)), !1
                    }
                    throw Error(i(435, n.tag))
                }
                return Xu(e, r, a), Mu(), !1
            }
            if (P)
                return t = so.current, t === null ? (r !== Hi && (t = Error(i(423), {
                    cause: r
                }), Yi(wi(t, n))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, r = wi(r, n), a = ic(e.stateNode, r, a), Xa(e, a), Xl !== 4 && (Xl = 2)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, r !== Hi && (e = Error(i(422), {
                    cause: r
                }), Yi(wi(e, n)))), !1;
            var o = Error(i(520), {
                cause: r
            });
            if (o = wi(o, n), nu === null ? nu = [o] : nu.push(o), Xl !== 4 && (Xl = 2), t === null)
                return !0;
            r = wi(r, n),
            n = t;
            do {
                switch (n.tag) {
                case 3:
                    return n.flags |= 65536, e = a & -a, n.lanes |= e, e = ic(n.stateNode, r, e), Xa(n, e), !1;
                case 1:
                    if (t = n.type, o = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == `function` || o !== null && typeof o.componentDidCatch == `function` && (lu === null || !lu.has(o))))
                        return n.flags |= 65536, a &= -a, n.lanes |= a, a = ac(a), oc(a, e, n, r), Xa(n, a), !1
                }
                n = n.return
            } while (n !== null);
            return !1
        }
        var cc = Error(i(461)),
            lc = !1;
        function uc(e, t, n, r) {
            t.child = e === null ? Ua(t, null, n, r) : Ha(t, e.child, n, r)
        }
        function dc(e, t, n, r, i) {
            n = n.render;
            var a = t.ref;
            if (`ref` in r) {
                var o = {};
                for (var s in r)
                    s !== `ref` && (o[s] = r[s])
            } else
                o = r;
            return aa(t), r = Oo(e, t, n, o, a, i), s = Mo(), e !== null && !lc ? (No(e, t, i), Pc(e, t, i)) : (P && s && Ii(t), t.flags |= 1, uc(e, t, r, i), t.child)
        }
        function fc(e, t, n, r, i) {
            if (e === null) {
                var a = n.type;
                return typeof a == `function` && !hi(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = a, pc(e, t, a, r, i)) : (e = vi(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
            }
            if (a = e.child, !Fc(e, i)) {
                var o = a.memoizedProps;
                if (n = n.compare, n = n === null ? kr : n, n(o, r) && e.ref === t.ref)
                    return Pc(e, t, i)
            }
            return t.flags |= 1, e = gi(a, r), e.ref = t.ref, e.return = t, t.child = e
        }
        function pc(e, t, n, r, i) {
            if (e !== null) {
                var a = e.memoizedProps;
                if (kr(a, r) && e.ref === t.ref) {
                    if (lc = !1, t.pendingProps = r = a, Fc(e, i))
                        e.flags & 131072 && (lc = !0);
                    else
                        return t.lanes = e.lanes, Pc(e, t, i)
                }
            }
            return xc(e, t, n, r, i)
        }
        function mc(e, t, n, r) {
            var i = r.children,
                a = e === null ? null : e.memoizedState;
            if (e === null && t.stateNode === null && (t.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }), r.mode === `hidden`) {
                if (t.flags & 128) {
                    if (a = a === null ? n : a.baseLanes | n, e !== null) {
                        for (r = t.child = e.child, i = 0; r !== null;)
                            i = i | r.lanes | r.childLanes,
                            r = r.sibling;
                        r = i & ~a
                    } else
                        r = 0,
                        t.child = null;
                    return gc(e, t, a, n, r)
                }
                if (n & 536870912)
                    t.memoizedState = {
                        baseLanes: 0,
                        cachePool: null
                    },
                    e !== null && Ta(t, a === null ? null : a.cachePool),
                    a === null ? ao() : io(t, a),
                    fo(t);
                else
                    return r = t.lanes = 536870912, gc(e, t, a === null ? n : a.baseLanes | n, n, r)
            } else
                a === null ? (e !== null && Ta(t, null), ao(), po(t)) : (Ta(t, a.cachePool), io(t, a), po(t), t.memoizedState = null);
            return uc(e, t, i, n), t.child
        }
        function hc(e, t) {
            return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }), t.sibling
        }
        function gc(e, t, n, r, i) {
            var a = wa();
            return a = a === null ? null : {
                parent: fa._currentValue,
                pool: a
            }, t.memoizedState = {
                baseLanes: n,
                cachePool: a
            }, e !== null && Ta(t, null), ao(), fo(t), e !== null && ra(e, t, r, !0), t.childLanes = i, null
        }
        function _c(e, t) {
            return t = R({
                mode: t.mode,
                children: t.children
            }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t
        }
        function vc(e, t, n) {
            return Ha(t, e.child, null, n), e = _c(t, t.pendingProps), e.flags |= 2, mo(t), t.memoizedState = null, e
        }
        function yc(e, t, n) {
            var r = t.pendingProps,
                a = !!(t.flags & 128);
            if (t.flags &= -129, e === null) {
                if (P) {
                    if (r.mode === `hidden`)
                        return e = _c(t, r), t.lanes = 536870912, hc(null, e);
                    if (uo(t), (e = N) ? (e = Z(e, Vi), e = e !== null && e.data === `&` ? e : null, e !== null && (t.memoizedState = {
                        dehydrated: e,
                        treeContext: ji === null ? null : {
                            id: Mi,
                            overflow: Ni
                        },
                        retryLane: 536870912,
                        hydrationErrors: null
                    }, n = xi(e), n.return = t, t.child = n, zi = t, N = null)) : e = null, e === null)
                        throw Ui(t);
                    return t.lanes = 536870912, null
                }
                return _c(t, r)
            }
            var o = e.memoizedState;
            if (o !== null) {
                var s = o.dehydrated;
                if (uo(t), a) {
                    if (t.flags & 256)
                        t.flags &= -257,
                        t = vc(e, t, n);
                    else if (t.memoizedState !== null)
                        t.child = e.child,
                        t.flags |= 128,
                        t = null;
                    else
                        throw Error(i(558))
                } else if (lc || ra(e, t, n, !1), a = (n & e.childLanes) !== 0, lc || a) {
                    if (r = V, r !== null && (s = lt(r, n), s !== 0 && s !== o.retryLane))
                        throw o.retryLane = s, li(e, s), xu(r, e, s), cc;
                    Mu(),
                    t = vc(e, t, n)
                } else
                    e = o.treeContext,
                    N = lf(s.nextSibling),
                    zi = t,
                    P = !0,
                    Bi = null,
                    Vi = !1,
                    e !== null && Ri(t, e),
                    t = _c(t, r),
                    t.flags |= 4096;
                return t
            }
            return e = gi(e.child, {
                mode: r.mode,
                children: r.children
            }), e.ref = t.ref, t.child = e, e.return = t, e
        }
        function bc(e, t) {
            var n = t.ref;
            if (n === null)
                e !== null && e.ref !== null && (t.flags |= 4194816);
            else {
                if (typeof n != `function` && typeof n != `object`)
                    throw Error(i(284));
                (e === null || e.ref !== n) && (t.flags |= 4194816)
            }
        }
        function xc(e, t, n, r, i) {
            return aa(t), n = Oo(e, t, n, r, void 0, i), r = Mo(), e !== null && !lc ? (No(e, t, i), Pc(e, t, i)) : (P && r && Ii(t), t.flags |= 1, uc(e, t, n, i), t.child)
        }
        function Sc(e, t, n, r, i, a) {
            return aa(t), t.updateQueue = null, n = Ao(t, r, n, i), ko(e), r = Mo(), e !== null && !lc ? (No(e, t, a), Pc(e, t, a)) : (P && r && Ii(t), t.flags |= 1, uc(e, t, n, a), t.child)
        }
        function Cc(e, t, n, r, i) {
            if (aa(t), t.stateNode === null) {
                var a = fi,
                    o = n.contextType;
                typeof o == `object` && o && (a = oa(o)),
                a = new n(r, a),
                t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null,
                a.updater = Ys,
                t.stateNode = a,
                a._reactInternals = t,
                a = t.stateNode,
                a.props = r,
                a.state = t.memoizedState,
                a.refs = {},
                Ga(t),
                o = n.contextType,
                a.context = typeof o == `object` && o ? oa(o) : fi,
                a.state = t.memoizedState,
                o = n.getDerivedStateFromProps,
                typeof o == `function` && (Js(t, n, o, r), a.state = t.memoizedState),
                typeof n.getDerivedStateFromProps == `function` || typeof a.getSnapshotBeforeUpdate == `function` || typeof a.UNSAFE_componentWillMount != `function` && typeof a.componentWillMount != `function` || (o = a.state, typeof a.componentWillMount == `function` && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == `function` && a.UNSAFE_componentWillMount(), o !== a.state && Ys.enqueueReplaceState(a, a.state, null), $a(t, r, a, i), Qa(), a.state = t.memoizedState),
                typeof a.componentDidMount == `function` && (t.flags |= 4194308),
                r = !0
            } else if (e === null) {
                a = t.stateNode;
                var s = t.memoizedProps,
                    c = Qs(n, s);
                a.props = c;
                var l = a.context,
                    u = n.contextType;
                o = fi,
                typeof u == `object` && u && (o = oa(u));
                var d = n.getDerivedStateFromProps;
                u = typeof d == `function` || typeof a.getSnapshotBeforeUpdate == `function`,
                s = t.pendingProps !== s,
                u || typeof a.UNSAFE_componentWillReceiveProps != `function` && typeof a.componentWillReceiveProps != `function` || (s || l !== o) && Zs(t, a, r, o),
                Wa = !1;
                var f = t.memoizedState;
                a.state = f,
                $a(t, r, a, i),
                Qa(),
                l = t.memoizedState,
                s || f !== l || Wa ? (typeof d == `function` && (Js(t, n, d, r), l = t.memoizedState), (c = Wa || Xs(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != `function` && typeof a.componentWillMount != `function` || (typeof a.componentWillMount == `function` && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == `function` && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == `function` && (t.flags |= 4194308)) : (typeof a.componentDidMount == `function` && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = o, r = c) : (typeof a.componentDidMount == `function` && (t.flags |= 4194308), r = !1)
            } else {
                a = t.stateNode,
                Ka(e, t),
                o = t.memoizedProps,
                u = Qs(n, o),
                a.props = u,
                d = t.pendingProps,
                f = a.context,
                l = n.contextType,
                c = fi,
                typeof l == `object` && l && (c = oa(l)),
                s = n.getDerivedStateFromProps,
                (l = typeof s == `function` || typeof a.getSnapshotBeforeUpdate == `function`) || typeof a.UNSAFE_componentWillReceiveProps != `function` && typeof a.componentWillReceiveProps != `function` || (o !== d || f !== c) && Zs(t, a, r, c),
                Wa = !1,
                f = t.memoizedState,
                a.state = f,
                $a(t, r, a, i),
                Qa();
                var p = t.memoizedState;
                o !== d || f !== p || Wa || e !== null && e.dependencies !== null && ia(e.dependencies) ? (typeof s == `function` && (Js(t, n, s, r), p = t.memoizedState), (u = Wa || Xs(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && ia(e.dependencies)) ? (l || typeof a.UNSAFE_componentWillUpdate != `function` && typeof a.componentWillUpdate != `function` || (typeof a.componentWillUpdate == `function` && a.componentWillUpdate(r, p, c), typeof a.UNSAFE_componentWillUpdate == `function` && a.UNSAFE_componentWillUpdate(r, p, c)), typeof a.componentDidUpdate == `function` && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == `function` && (t.flags |= 1024)) : (typeof a.componentDidUpdate != `function` || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != `function` || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = c, r = u) : (typeof a.componentDidUpdate != `function` || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != `function` || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
            }
            return a = r, bc(e, t), r = !!(t.flags & 128), a || r ? (a = t.stateNode, n = r && typeof n.getDerivedStateFromError != `function` ? null : a.render(), t.flags |= 1, e !== null && r ? (t.child = Ha(t, e.child, null, i), t.child = Ha(t, null, n, i)) : uc(e, t, n, i), t.memoizedState = a.state, e = t.child) : e = Pc(e, t, i), e
        }
        function wc(e, t, n, r) {
            return qi(), t.flags |= 256, uc(e, t, n, r), t.child
        }
        var Tc = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0,
            hydrationErrors: null
        };
        function Ec(e) {
            return {
                baseLanes: e,
                cachePool: Ea()
            }
        }
        function Dc(e, t, n) {
            return e = e === null ? 0 : e.childLanes & ~n, t && (e |= eu), e
        }
        function Oc(e, t, n) {
            var r = t.pendingProps,
                a = !1,
                o = !!(t.flags & 128),
                s;
            if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : !!(ho.current & 2)), s && (a = !0, t.flags &= -129), s = !!(t.flags & 32), t.flags &= -33, e === null) {
                if (P) {
                    if (a ? lo(t) : po(t), (e = N) ? (e = Z(e, Vi), e = e !== null && e.data !== `&` ? e : null, e !== null && (t.memoizedState = {
                        dehydrated: e,
                        treeContext: ji === null ? null : {
                            id: Mi,
                            overflow: Ni
                        },
                        retryLane: 536870912,
                        hydrationErrors: null
                    }, n = xi(e), n.return = t, t.child = n, zi = t, N = null)) : e = null, e === null)
                        throw Ui(t);
                    return sf(e) ? t.lanes = 32 : t.lanes = 536870912, null
                }
                var c = r.children;
                return r = r.fallback, a ? (po(t), a = t.mode, c = R({
                    mode: `hidden`,
                    children: c
                }, a), r = yi(r, a, n, null), c.return = t, r.return = t, c.sibling = r, t.child = c, r = t.child, r.memoizedState = Ec(n), r.childLanes = Dc(e, s, n), t.memoizedState = Tc, hc(null, r)) : (lo(t), kc(t, c))
            }
            var l = e.memoizedState;
            if (l !== null && (c = l.dehydrated, c !== null)) {
                if (o)
                    t.flags & 256 ? (lo(t), t.flags &= -257, t = Ac(e, t, n)) : t.memoizedState === null ? (po(t), c = r.fallback, a = t.mode, r = R({
                        mode: `visible`,
                        children: r.children
                    }, a), c = yi(c, a, n, null), c.flags |= 2, r.return = t, c.return = t, r.sibling = c, t.child = r, Ha(t, e.child, null, n), r = t.child, r.memoizedState = Ec(n), r.childLanes = Dc(e, s, n), t.memoizedState = Tc, t = hc(null, r)) : (po(t), t.child = e.child, t.flags |= 128, t = null);
                else if (lo(t), sf(c)) {
                    if (s = c.nextSibling && c.nextSibling.dataset, s)
                        var u = s.dgst;
                    s = u,
                    r = Error(i(419)),
                    r.stack = ``,
                    r.digest = s,
                    Yi({
                        value: r,
                        source: null,
                        stack: null
                    }),
                    t = Ac(e, t, n)
                } else if (lc || ra(e, t, n, !1), s = (n & e.childLanes) !== 0, lc || s) {
                    if (s = V, s !== null && (r = lt(s, n), r !== 0 && r !== l.retryLane))
                        throw l.retryLane = r, li(e, r), xu(s, e, r), cc;
                    Q(c) || Mu(),
                    t = Ac(e, t, n)
                } else
                    Q(c) ? (t.flags |= 192, t.child = e.child, t = null) : (e = l.treeContext, N = lf(c.nextSibling), zi = t, P = !0, Bi = null, Vi = !1, e !== null && Ri(t, e), t = kc(t, r.children), t.flags |= 4096);
                return t
            }
            return a ? (po(t), c = r.fallback, a = t.mode, l = e.child, u = l.sibling, r = gi(l, {
                mode: `hidden`,
                children: r.children
            }), r.subtreeFlags = l.subtreeFlags & 65011712, u === null ? (c = yi(c, a, n, null), c.flags |= 2) : c = gi(u, c), c.return = t, r.return = t, r.sibling = c, t.child = r, hc(null, r), r = t.child, c = e.child.memoizedState, c === null ? c = Ec(n) : (a = c.cachePool, a === null ? a = Ea() : (l = fa._currentValue, a = a.parent === l ? a : {
                parent: l,
                pool: l
            }), c = {
                baseLanes: c.baseLanes | n,
                cachePool: a
            }), r.memoizedState = c, r.childLanes = Dc(e, s, n), t.memoizedState = Tc, hc(e.child, r)) : (lo(t), n = e.child, e = n.sibling, n = gi(n, {
                mode: `visible`,
                children: r.children
            }), n.return = t, n.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = n, t.memoizedState = null, n)
        }
        function kc(e, t) {
            return t = R({
                mode: `visible`,
                children: t
            }, e.mode), t.return = e, e.child = t
        }
        function R(e, t) {
            return e = mi(22, e, null, t), e.lanes = 0, e
        }
        function Ac(e, t, n) {
            return Ha(t, e.child, null, n), e = kc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
        }
        function jc(e, t, n) {
            e.lanes |= t;
            var r = e.alternate;
            r !== null && (r.lanes |= t),
            ta(e.return, t, n)
        }
        function Mc(e, t, n, r, i, a) {
            var o = e.memoizedState;
            o === null ? e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: i,
                treeForkCount: a
            } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.treeForkCount = a)
        }
        function Nc(e, t, n) {
            var r = t.pendingProps,
                i = r.revealOrder,
                a = r.tail;
            r = r.children;
            var o = ho.current,
                s = !!(o & 2);
            if (s ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, O(ho, o), uc(e, t, r, n), r = P ? Oi : 0, !s && e !== null && e.flags & 128)
                a:
                for (e = t.child; e !== null;) {
                    if (e.tag === 13)
                        e.memoizedState !== null && jc(e, n, t);
                    else if (e.tag === 19)
                        jc(e, n, t);
                    else if (e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break a;
                    for (; e.sibling === null;) {
                        if (e.return === null || e.return === t)
                            break a;
                        e = e.return
                    }
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            switch (i) {
            case `forwards`:
                for (n = t.child, i = null; n !== null;)
                    e = n.alternate,
                    e !== null && go(e) === null && (i = n),
                    n = n.sibling;
                n = i,
                n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null),
                Mc(t, !1, i, n, a, r);
                break;
            case `backwards`:
            case `unstable_legacy-backwards`:
                for (n = null, i = t.child, t.child = null; i !== null;) {
                    if (e = i.alternate, e !== null && go(e) === null) {
                        t.child = i;
                        break
                    }
                    e = i.sibling,
                    i.sibling = n,
                    n = i,
                    i = e
                }
                Mc(t, !0, n, null, a, r);
                break;
            case `together`:
                Mc(t, !1, null, null, void 0, r);
                break;
            default:
                t.memoizedState = null
            }
            return t.child
        }
        function Pc(e, t, n) {
            if (e !== null && (t.dependencies = e.dependencies), Zl |= t.lanes, (n & t.childLanes) === 0) {
                if (e !== null) {
                    if (ra(e, t, n, !1), (n & t.childLanes) === 0)
                        return null
                } else
                    return null
            }
            if (e !== null && t.child !== e.child)
                throw Error(i(153));
            if (t.child !== null) {
                for (e = t.child, n = gi(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
                    e = e.sibling,
                    n = n.sibling = gi(e, e.pendingProps),
                    n.return = t;
                n.sibling = null
            }
            return t.child
        }
        function Fc(e, t) {
            return (e.lanes & t) !== 0 || (e = e.dependencies, !!(e !== null && ia(e)))
        }
        function Ic(e, t, n) {
            switch (t.tag) {
            case 3:
                ye(t, t.stateNode.containerInfo),
                $i(t, fa, e.memoizedState.cache),
                qi();
                break;
            case 27:
            case 5:
                xe(t);
                break;
            case 4:
                ye(t, t.stateNode.containerInfo);
                break;
            case 10:
                $i(t, t.type, t.memoizedProps.value);
                break;
            case 31:
                if (t.memoizedState !== null)
                    return t.flags |= 128, uo(t), null;
                break;
            case 13:
                var r = t.memoizedState;
                if (r !== null)
                    return r.dehydrated === null ? (n & t.child.childLanes) === 0 ? (lo(t), e = Pc(e, t, n), e === null ? null : e.sibling) : Oc(e, t, n) : (lo(t), t.flags |= 128, null);
                lo(t);
                break;
            case 19:
                var i = !!(e.flags & 128);
                if (r = (n & t.childLanes) !== 0, r ||= (ra(e, t, n, !1), (n & t.childLanes) !== 0), i) {
                    if (r)
                        return Nc(e, t, n);
                    t.flags |= 128
                }
                if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), O(ho, ho.current), r)
                    break;
                return null;
            case 22:
                return t.lanes = 0, mc(e, t, n, t.pendingProps);
            case 24:
                $i(t, fa, e.memoizedState.cache)
            }
            return Pc(e, t, n)
        }
        function Lc(e, t, n) {
            if (e !== null) {
                if (e.memoizedProps !== t.pendingProps)
                    lc = !0;
                else {
                    if (!Fc(e, n) && !(t.flags & 128))
                        return lc = !1, Ic(e, t, n);
                    lc = !!(e.flags & 131072)
                }
            } else
                lc = !1,
                P && t.flags & 1048576 && Fi(t, Oi, t.index);
            switch (t.lanes = 0, t.tag) {
            case 16:
                a:
                {
                    var r = t.pendingProps;
                    if (e = F(t.elementType), t.type = e, typeof e == `function`)
                        hi(e) ? (r = Qs(e, r), t.tag = 1, t = Cc(null, t, e, r, n)) : (t.tag = 0, t = xc(null, t, e, r, n));
                    else {
                        if (e != null) {
                            var a = e.$$typeof;
                            if (a === w) {
                                t.tag = 11,
                                t = dc(null, t, e, r, n);
                                break a
                            }
                            if (a === ne) {
                                t.tag = 14,
                                t = fc(null, t, e, r, n);
                                break a
                            }
                        }
                        throw t = ce(e) || e, Error(i(306, t, ``))
                    }
                }return t;
            case 0:
                return xc(e, t, t.type, t.pendingProps, n);
            case 1:
                return r = t.type, a = Qs(r, t.pendingProps), Cc(e, t, r, a, n);
            case 3:
                a:
                {
                    if (ye(t, t.stateNode.containerInfo), e === null)
                        throw Error(i(387));
                    r = t.pendingProps;
                    var o = t.memoizedState;
                    a = o.element,
                    Ka(e, t),
                    $a(t, r, null, n);
                    var s = t.memoizedState;
                    if (r = s.cache, $i(t, fa, r), r !== o.cache && na(t, [fa], n, !0), Qa(), r = s.element, o.isDehydrated) {
                        if (o = {
                            element: r,
                            isDehydrated: !1,
                            cache: s.cache
                        }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                            t = wc(e, t, r, n);
                            break a
                        }
                        if (r !== a) {
                            a = wi(Error(i(424)), t),
                            Yi(a),
                            t = wc(e, t, r, n);
                            break a
                        }
                        switch (e = t.stateNode.containerInfo, e.nodeType) {
                        case 9:
                            e = e.body;
                            break;
                        default:
                            e = e.nodeName === `HTML` ? e.ownerDocument.body : e
                        }
                        for (N = lf(e.firstChild), zi = t, P = !0, Bi = null, Vi = !0, n = Ua(t, null, r, n), t.child = n; n;)
                            n.flags = n.flags & -3 | 4096,
                            n = n.sibling
                    } else {
                        if (qi(), r === a) {
                            t = Pc(e, t, n);
                            break a
                        }
                        uc(e, t, r, n)
                    }
                    t = t.child
                }return t;
            case 26:
                return bc(e, t), e === null ? (n = Af(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : P || (n = t.type, e = t.pendingProps, r = Ud(_e.current).createElement(n), r[mt] = t, r[ht] = e, Ld(r, n, e), Et(r), t.stateNode = r) : t.memoizedState = Af(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
            case 27:
                return xe(t), e === null && P && (r = t.stateNode = pf(t.type, t.pendingProps, _e.current), zi = t, Vi = !0, a = N, ef(t.type) ? (uf = a, N = lf(r.firstChild)) : N = a), uc(e, t, t.pendingProps.children, n), bc(e, t), e === null && (t.flags |= 4194304), t.child;
            case 5:
                return e === null && P && ((a = r = N) && (r = af(r, t.type, t.pendingProps, Vi), r === null ? a = !1 : (t.stateNode = r, zi = t, N = lf(r.firstChild), Vi = !1, a = !0)), a || Ui(t)), xe(t), a = t.type, o = t.pendingProps, s = e === null ? null : e.memoizedProps, r = o.children, Kd(a, o) ? r = null : s !== null && Kd(a, s) && (t.flags |= 32), t.memoizedState !== null && (a = Oo(e, t, jo, null, null, n), $f._currentValue = a), bc(e, t), uc(e, t, r, n), t.child;
            case 6:
                return e === null && P && ((e = n = N) && (n = of(n, t.pendingProps, Vi), n === null ? e = !1 : (t.stateNode = n, zi = t, N = null, e = !0)), e || Ui(t)), null;
            case 13:
                return Oc(e, t, n);
            case 4:
                return ye(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ha(t, null, r, n) : uc(e, t, r, n), t.child;
            case 11:
                return dc(e, t, t.type, t.pendingProps, n);
            case 7:
                return uc(e, t, t.pendingProps, n), t.child;
            case 8:
                return uc(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return uc(e, t, t.pendingProps.children, n), t.child;
            case 10:
                return r = t.pendingProps, $i(t, t.type, r.value), uc(e, t, r.children, n), t.child;
            case 9:
                return a = t.type._context, r = t.pendingProps.children, aa(t), a = oa(a), r = r(a), t.flags |= 1, uc(e, t, r, n), t.child;
            case 14:
                return fc(e, t, t.type, t.pendingProps, n);
            case 15:
                return pc(e, t, t.type, t.pendingProps, n);
            case 19:
                return Nc(e, t, n);
            case 31:
                return yc(e, t, n);
            case 22:
                return mc(e, t, n, t.pendingProps);
            case 24:
                return aa(t), r = oa(fa), e === null ? (a = wa(), a === null && (a = V, o = pa(), a.pooledCache = o, o.refCount++, o !== null && (a.pooledCacheLanes |= n), a = o), t.memoizedState = {
                    parent: r,
                    cache: a
                }, Ga(t), $i(t, fa, a)) : ((e.lanes & n) !== 0 && (Ka(e, t), $a(t, null, null, n), Qa()), a = e.memoizedState, o = t.memoizedState, a.parent === r ? (r = o.cache, $i(t, fa, r), r !== a.cache && na(t, [fa], n, !0)) : (a = {
                    parent: r,
                    cache: r
                }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), $i(t, fa, r))), uc(e, t, t.pendingProps.children, n), t.child;
            case 29:
                throw t.pendingProps
            }
            throw Error(i(156, t.tag))
        }
        function Rc(e) {
            e.flags |= 4
        }
        function zc(e, t, n, r, i) {
            if ((t = !!(e.mode & 32)) && (t = !1), t) {
                if (e.flags |= 16777216, (i & 335544128) === i) {
                    if (e.stateNode.complete)
                        e.flags |= 8192;
                    else if (ku())
                        e.flags |= 8192;
                    else
                        throw Na = Aa, Oa
                }
            } else
                e.flags &= -16777217
        }
        function Bc(e, t) {
            if (t.type !== `stylesheet` || t.state.loading & 4)
                e.flags &= -16777217;
            else if (e.flags |= 16777216, !Gf(t)) {
                if (ku())
                    e.flags |= 8192;
                else
                    throw Na = Aa, Oa
            }
        }
        function Vc(e, t) {
            t !== null && (e.flags |= 4),
            e.flags & 16384 && (t = e.tag === 22 ? 536870912 : rt(), e.lanes |= t, tu |= t)
        }
        function Hc(e, t) {
            if (!P)
                switch (e.tailMode) {
                case `hidden`:
                    t = e.tail;
                    for (var n = null; t !== null;)
                        t.alternate !== null && (n = t),
                        t = t.sibling;
                    n === null ? e.tail = null : n.sibling = null;
                    break;
                case `collapsed`:
                    n = e.tail;
                    for (var r = null; n !== null;)
                        n.alternate !== null && (r = n),
                        n = n.sibling;
                    r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
                }
        }
        function z(e) {
            var t = e.alternate !== null && e.alternate.child === e.child,
                n = 0,
                r = 0;
            if (t)
                for (var i = e.child; i !== null;)
                    n |= i.lanes | i.childLanes,
                    r |= i.subtreeFlags & 65011712,
                    r |= i.flags & 65011712,
                    i.return = e,
                    i = i.sibling;
            else
                for (i = e.child; i !== null;)
                    n |= i.lanes | i.childLanes,
                    r |= i.subtreeFlags,
                    r |= i.flags,
                    i.return = e,
                    i = i.sibling;
            return e.subtreeFlags |= r, e.childLanes = n, t
        }
        function Uc(e, t, n) {
            var r = t.pendingProps;
            switch (Li(t), t.tag) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return z(t), null;
            case 1:
                return z(t), null;
            case 3:
                return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), ea(fa), be(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Ki(t) ? Rc(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ji())), z(t), null;
            case 26:
                var a = t.type,
                    o = t.memoizedState;
                return e === null ? (Rc(t), o === null ? (z(t), zc(t, a, null, r, n)) : (z(t), Bc(t, o))) : o ? o === e.memoizedState ? (z(t), t.flags &= -16777217) : (Rc(t), z(t), Bc(t, o)) : (e = e.memoizedProps, e !== r && Rc(t), z(t), zc(t, a, e, r, n)), null;
            case 27:
                if (Se(t), n = _e.current, a = t.type, e !== null && t.stateNode != null)
                    e.memoizedProps !== r && Rc(t);
                else {
                    if (!r) {
                        if (t.stateNode === null)
                            throw Error(i(166));
                        return z(t), null
                    }
                    e = he.current,
                    Ki(t) ? Wi(t, e) : (e = pf(a, r, n), t.stateNode = e, Rc(t))
                }
                return z(t), null;
            case 5:
                if (Se(t), a = t.type, e !== null && t.stateNode != null)
                    e.memoizedProps !== r && Rc(t);
                else {
                    if (!r) {
                        if (t.stateNode === null)
                            throw Error(i(166));
                        return z(t), null
                    }
                    if (o = he.current, Ki(t))
                        Wi(t, o);
                    else {
                        var s = Ud(_e.current);
                        switch (o) {
                        case 1:
                            o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                            break;
                        case 2:
                            o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, a);
                            break;
                        default:
                            switch (a) {
                            case `svg`:
                                o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                                break;
                            case `math`:
                                o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, a);
                                break;
                            case `script`:
                                o = s.createElement(`div`),
                                o.innerHTML = `<script><\/script>`,
                                o = o.removeChild(o.firstChild);
                                break;
                            case `select`:
                                o = typeof r.is == `string` ? s.createElement(`select`, {
                                    is: r.is
                                }) : s.createElement(`select`),
                                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size);
                                break;
                            default:
                                o = typeof r.is == `string` ? s.createElement(a, {
                                    is: r.is
                                }) : s.createElement(a)
                            }
                        }
                        o[mt] = t,
                        o[ht] = r;
                        a:
                        for (s = t.child; s !== null;) {
                            if (s.tag === 5 || s.tag === 6)
                                o.appendChild(s.stateNode);
                            else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                                s.child.return = s,
                                s = s.child;
                                continue
                            }
                            if (s === t)
                                break a;
                            for (; s.sibling === null;) {
                                if (s.return === null || s.return === t)
                                    break a;
                                s = s.return
                            }
                            s.sibling.return = s.return,
                            s = s.sibling
                        }
                        t.stateNode = o;
                        a:
                        switch (Ld(o, a, r), a) {
                        case `button`:
                        case `input`:
                        case `select`:
                        case `textarea`:
                            r = !!r.autoFocus;
                            break a;
                        case `img`:
                            r = !0;
                            break a;
                        default:
                            r = !1
                        }
                        r && Rc(t)
                    }
                }
                return z(t), zc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
            case 6:
                if (e && t.stateNode != null)
                    e.memoizedProps !== r && Rc(t);
                else {
                    if (typeof r != `string` && t.stateNode === null)
                        throw Error(i(166));
                    if (e = _e.current, Ki(t)) {
                        if (e = t.stateNode, n = t.memoizedProps, r = null, a = zi, a !== null)
                            switch (a.tag) {
                            case 27:
                            case 5:
                                r = a.memoizedProps
                            }
                        e[mt] = t,
                        e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || Fd(e.nodeValue, n)),
                        e || Ui(t, !0)
                    } else
                        e = Ud(e).createTextNode(r),
                        e[mt] = t,
                        t.stateNode = e
                }
                return z(t), null;
            case 31:
                if (n = t.memoizedState, e === null || e.memoizedState !== null) {
                    if (r = Ki(t), n !== null) {
                        if (e === null) {
                            if (!r)
                                throw Error(i(318));
                            if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e)
                                throw Error(i(557));
                            e[mt] = t
                        } else
                            qi(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            t.flags |= 4;
                        z(t),
                        e = !1
                    } else
                        n = Ji(),
                        e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
                        e = !0;
                    if (!e)
                        return t.flags & 256 ? (mo(t), t) : (mo(t), null);
                    if (t.flags & 128)
                        throw Error(i(558))
                }
                return z(t), null;
            case 13:
                if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (a = Ki(t), r !== null && r.dehydrated !== null) {
                        if (e === null) {
                            if (!a)
                                throw Error(i(318));
                            if (a = t.memoizedState, a = a === null ? null : a.dehydrated, !a)
                                throw Error(i(317));
                            a[mt] = t
                        } else
                            qi(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            t.flags |= 4;
                        z(t),
                        a = !1
                    } else
                        a = Ji(),
                        e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a),
                        a = !0;
                    if (!a)
                        return t.flags & 256 ? (mo(t), t) : (mo(t), null)
                }
                return mo(t), t.flags & 128 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, a = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (a = r.alternate.memoizedState.cachePool.pool), o = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), o !== a && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Vc(t, t.updateQueue), z(t), null);
            case 4:
                return be(), e === null && Ed(t.stateNode.containerInfo), z(t), null;
            case 10:
                return ea(t.type), z(t), null;
            case 19:
                if (me(ho), r = t.memoizedState, r === null)
                    return z(t), null;
                if (a = !!(t.flags & 128), o = r.rendering, o === null) {
                    if (a)
                        Hc(r, !1);
                    else {
                        if (Xl !== 0 || e !== null && e.flags & 128)
                            for (e = t.child; e !== null;) {
                                if (o = go(e), o !== null) {
                                    for (t.flags |= 128, Hc(r, !1), e = o.updateQueue, t.updateQueue = e, Vc(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;)
                                        _i(n, e),
                                        n = n.sibling;
                                    return O(ho, ho.current & 1 | 2), P && Pi(t, r.treeForkCount), t.child
                                }
                                e = e.sibling
                            }
                        r.tail !== null && Fe() > su && (t.flags |= 128, a = !0, Hc(r, !1), t.lanes = 4194304)
                    }
                } else {
                    if (!a) {
                        if (e = go(o), e !== null) {
                            if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, Vc(t, e), Hc(r, !0), r.tail === null && r.tailMode === `hidden` && !o.alternate && !P)
                                return z(t), null
                        } else
                            2 * Fe() - r.renderingStartTime > su && n !== 536870912 && (t.flags |= 128, a = !0, Hc(r, !1), t.lanes = 4194304)
                    }
                    r.isBackwards ? (o.sibling = t.child, t.child = o) : (e = r.last, e === null ? t.child = o : e.sibling = o, r.last = o)
                }
                return r.tail === null ? (z(t), null) : (e = r.tail, r.rendering = e, r.tail = e.sibling, r.renderingStartTime = Fe(), e.sibling = null, n = ho.current, O(ho, a ? n & 1 | 2 : n & 1), P && Pi(t, r.treeForkCount), e);
            case 22:
            case 23:
                return mo(t), oo(), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (z(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : z(t), n = t.updateQueue, n !== null && Vc(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && me(Ca), null;
            case 24:
                return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), ea(fa), z(t), null;
            case 25:
                return null;
            case 30:
                return null
            }
            throw Error(i(156, t.tag))
        }
        function Wc(e, t) {
            switch (Li(t), t.tag) {
            case 1:
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return ea(fa), be(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
            case 26:
            case 27:
            case 5:
                return Se(t), null;
            case 31:
                if (t.memoizedState !== null) {
                    if (mo(t), t.alternate === null)
                        throw Error(i(340));
                    qi()
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 13:
                if (mo(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null)
                        throw Error(i(340));
                    qi()
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return me(ho), null;
            case 4:
                return be(), null;
            case 10:
                return ea(t.type), null;
            case 22:
            case 23:
                return mo(t), oo(), e !== null && me(Ca), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 24:
                return ea(fa), null;
            case 25:
                return null;
            default:
                return null
            }
        }
        function Gc(e, t) {
            switch (Li(t), t.tag) {
            case 3:
                ea(fa),
                be();
                break;
            case 26:
            case 27:
            case 5:
                Se(t);
                break;
            case 4:
                be();
                break;
            case 31:
                t.memoizedState !== null && mo(t);
                break;
            case 13:
                mo(t);
                break;
            case 19:
                me(ho);
                break;
            case 10:
                ea(t.type);
                break;
            case 22:
            case 23:
                mo(t),
                oo(),
                e !== null && me(Ca);
                break;
            case 24:
                ea(fa)
            }
        }
        function Kc(e, t) {
            try {
                var n = t.updateQueue,
                    r = n === null ? null : n.lastEffect;
                if (r !== null) {
                    var i = r.next;
                    n = i;
                    do {
                        if ((n.tag & e) === e) {
                            r = void 0;
                            var a = n.create,
                                o = n.inst;
                            r = a(),
                            o.destroy = r
                        }
                        n = n.next
                    } while (n !== i)
                }
            } catch (e) {
                K(t, t.return, e)
            }
        }
        function qc(e, t, n) {
            try {
                var r = t.updateQueue,
                    i = r === null ? null : r.lastEffect;
                if (i !== null) {
                    var a = i.next;
                    r = a;
                    do {
                        if ((r.tag & e) === e) {
                            var o = r.inst,
                                s = o.destroy;
                            if (s !== void 0) {
                                o.destroy = void 0,
                                i = t;
                                var c = n,
                                    l = s;
                                try {
                                    l()
                                } catch (e) {
                                    K(i, c, e)
                                }
                            }
                        }
                        r = r.next
                    } while (r !== a)
                }
            } catch (e) {
                K(t, t.return, e)
            }
        }
        function Jc(e) {
            var t = e.updateQueue;
            if (t !== null) {
                var n = e.stateNode;
                try {
                    to(t, n)
                } catch (t) {
                    K(e, e.return, t)
                }
            }
        }
        function Yc(e, t, n) {
            n.props = Qs(e.type, e.memoizedProps),
            n.state = e.memoizedState;
            try {
                n.componentWillUnmount()
            } catch (n) {
                K(e, t, n)
            }
        }
        function Xc(e, t) {
            try {
                var n = e.ref;
                if (n !== null) {
                    switch (e.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var r = e.stateNode;
                        break;
                    case 30:
                        r = e.stateNode;
                        break;
                    default:
                        r = e.stateNode
                    }
                    typeof n == `function` ? e.refCleanup = n(r) : n.current = r
                }
            } catch (n) {
                K(e, t, n)
            }
        }
        function Zc(e, t) {
            var n = e.ref,
                r = e.refCleanup;
            if (n !== null) {
                if (typeof r == `function`)
                    try {
                        r()
                    } catch (n) {
                        K(e, t, n)
                    } finally {
                        e.refCleanup = null,
                        e = e.alternate,
                        e != null && (e.refCleanup = null)
                    }
                else if (typeof n == `function`)
                    try {
                        n(null)
                    } catch (n) {
                        K(e, t, n)
                    }
                else
                    n.current = null
            }
        }
        function Qc(e) {
            var t = e.type,
                n = e.memoizedProps,
                r = e.stateNode;
            try {
                a:
                switch (t) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                    n.autoFocus && r.focus();
                    break a;
                case `img`:
                    n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet)
                }
            } catch (t) {
                K(e, e.return, t)
            }
        }
        function $c(e, t, n) {
            try {
                var r = e.stateNode;
                Rd(r, e.type, n, t),
                r[ht] = t
            } catch (t) {
                K(e, e.return, t)
            }
        }
        function el(e) {
            return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && ef(e.type) || e.tag === 4
        }
        function tl(e) {
            a:
            for (;;) {
                for (; e.sibling === null;) {
                    if (e.return === null || el(e.return))
                        return null;
                    e = e.return
                }
                for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                    if (e.tag === 27 && ef(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                        continue a;
                    e.child.return = e,
                    e = e.child
                }
                if (!(e.flags & 2))
                    return e.stateNode
            }
        }
        function nl(e, t, n) {
            var r = e.tag;
            if (r === 5 || r === 6)
                e = e.stateNode,
                t ? (n.nodeType === 9 ? n.body : n.nodeName === `HTML` ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === `HTML` ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = on));
            else if (r !== 4 && (r === 27 && ef(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
                for (nl(e, t, n), e = e.sibling; e !== null;)
                    nl(e, t, n),
                    e = e.sibling
        }
        function rl(e, t, n) {
            var r = e.tag;
            if (r === 5 || r === 6)
                e = e.stateNode,
                t ? n.insertBefore(e, t) : n.appendChild(e);
            else if (r !== 4 && (r === 27 && ef(e.type) && (n = e.stateNode), e = e.child, e !== null))
                for (rl(e, t, n), e = e.sibling; e !== null;)
                    rl(e, t, n),
                    e = e.sibling
        }
        function il(e) {
            var t = e.stateNode,
                n = e.memoizedProps;
            try {
                for (var r = e.type, i = t.attributes; i.length;)
                    t.removeAttributeNode(i[0]);
                Ld(t, r, n),
                t[mt] = e,
                t[ht] = n
            } catch (t) {
                K(e, e.return, t)
            }
        }
        var al = !1,
            ol = !1,
            sl = !1,
            cl = typeof WeakSet == `function` ? WeakSet : Set,
            ll = null;
        function ul(e, t) {
            if (e = e.containerInfo, Vd = cp, e = Nr(e), Pr(e)) {
                if (`selectionStart` in e)
                    var n = {
                        start: e.selectionStart,
                        end: e.selectionEnd
                    };
                else
                    a:
                    {
                        n = (n = e.ownerDocument) && n.defaultView || window;
                        var r = n.getSelection && n.getSelection();
                        if (r && r.rangeCount !== 0) {
                            n = r.anchorNode;
                            var a = r.anchorOffset,
                                o = r.focusNode;
                            r = r.focusOffset;
                            try {
                                n.nodeType,
                                o.nodeType
                            } catch {
                                n = null;
                                break a
                            }
                            var s = 0,
                                c = -1,
                                l = -1,
                                u = 0,
                                d = 0,
                                f = e,
                                p = null;
                            b:
                            for (;;) {
                                for (var m; f !== n || a !== 0 && f.nodeType !== 3 || (c = s + a), f !== o || r !== 0 && f.nodeType !== 3 || (l = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;)
                                    p = f,
                                    f = m;
                                for (;;) {
                                    if (f === e)
                                        break b;
                                    if (p === n && ++u === a && (c = s), p === o && ++d === r && (l = s), (m = f.nextSibling) !== null)
                                        break;
                                    f = p,
                                    p = f.parentNode
                                }
                                f = m
                            }
                            n = c === -1 || l === -1 ? null : {
                                start: c,
                                end: l
                            }
                        } else
                            n = null
                    }n ||= {
                    start: 0,
                    end: 0
                }
            } else
                n = null;
            for (Hd = {
                focusedElem: e,
                selectionRange: n
            }, cp = !1, ll = t; ll !== null;)
                if (t = ll, e = t.child, t.subtreeFlags & 1028 && e !== null)
                    e.return = t,
                    ll = e;
                else
                    for (; ll !== null;) {
                        switch (t = ll, o = t.alternate, e = t.flags, t.tag) {
                        case 0:
                            if (e & 4 && (e = t.updateQueue, e = e === null ? null : e.events, e !== null))
                                for (n = 0; n < e.length; n++)
                                    a = e[n],
                                    a.ref.impl = a.nextImpl;
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (e & 1024 && o !== null) {
                                e = void 0,
                                n = t,
                                a = o.memoizedProps,
                                o = o.memoizedState,
                                r = n.stateNode;
                                try {
                                    var h = Qs(n.type, a);
                                    e = r.getSnapshotBeforeUpdate(h, o),
                                    r.__reactInternalSnapshotBeforeUpdate = e
                                } catch (e) {
                                    K(n, n.return, e)
                                }
                            }
                            break;
                        case 3:
                            if (e & 1024) {
                                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                                    rf(e);
                                else if (n === 1)
                                    switch (e.nodeName) {
                                    case `HEAD`:
                                    case `HTML`:
                                    case `BODY`:
                                        rf(e);
                                        break;
                                    default:
                                        e.textContent = ``
                                    }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if (e & 1024)
                                throw Error(i(163))
                        }
                        if (e = t.sibling, e !== null) {
                            e.return = t.return,
                            ll = e;
                            break
                        }
                        ll = t.return
                    }
        }
        function dl(e, t, n) {
            var r = n.flags;
            switch (n.tag) {
            case 0:
            case 11:
            case 15:
                El(e, n),
                r & 4 && Kc(5, n);
                break;
            case 1:
                if (El(e, n), r & 4) {
                    if (e = n.stateNode, t === null)
                        try {
                            e.componentDidMount()
                        } catch (e) {
                            K(n, n.return, e)
                        }
                    else {
                        var i = Qs(n.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate)
                        } catch (e) {
                            K(n, n.return, e)
                        }
                    }
                }
                r & 64 && Jc(n),
                r & 512 && Xc(n, n.return);
                break;
            case 3:
                if (El(e, n), r & 64 && (e = n.updateQueue, e !== null)) {
                    if (t = null, n.child !== null)
                        switch (n.child.tag) {
                        case 27:
                        case 5:
                            t = n.child.stateNode;
                            break;
                        case 1:
                            t = n.child.stateNode
                        }
                    try {
                        to(e, t)
                    } catch (e) {
                        K(n, n.return, e)
                    }
                }
                break;
            case 27:
                t === null && r & 4 && il(n);
            case 26:
            case 5:
                El(e, n),
                t === null && r & 4 && Qc(n),
                r & 512 && Xc(n, n.return);
                break;
            case 12:
                El(e, n);
                break;
            case 31:
                El(e, n),
                r & 4 && _l(e, n);
                break;
            case 13:
                El(e, n),
                r & 4 && vl(e, n),
                r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = $u.bind(null, n), cf(e, n))));
                break;
            case 22:
                if (r = n.memoizedState !== null || al, !r) {
                    t = t !== null && t.memoizedState !== null || ol,
                    i = al;
                    var a = ol;
                    al = r,
                    (ol = t) && !a ? Ol(e, n, !!(n.subtreeFlags & 8772)) : El(e, n),
                    al = i,
                    ol = a
                }
                break;
            case 30:
                break;
            default:
                El(e, n)
            }
        }
        function fl(e) {
            var t = e.alternate;
            t !== null && (e.alternate = null, fl(t)),
            e.child = null,
            e.deletions = null,
            e.sibling = null,
            e.tag === 5 && (t = e.stateNode, t !== null && xt(t)),
            e.stateNode = null,
            e.return = null,
            e.dependencies = null,
            e.memoizedProps = null,
            e.memoizedState = null,
            e.pendingProps = null,
            e.stateNode = null,
            e.updateQueue = null
        }
        var pl = null,
            ml = !1;
        function hl(e, t, n) {
            for (n = n.child; n !== null;)
                gl(e, t, n),
                n = n.sibling
        }
        function gl(e, t, n) {
            if (We && typeof We.onCommitFiberUnmount == `function`)
                try {
                    We.onCommitFiberUnmount(Ue, n)
                } catch {}
            switch (n.tag) {
            case 26:
                ol || Zc(n, t),
                hl(e, t, n),
                n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
                break;
            case 27:
                ol || Zc(n, t);
                var r = pl,
                    i = ml;
                ef(n.type) && (pl = n.stateNode, ml = !1),
                hl(e, t, n),
                mf(n.stateNode),
                pl = r,
                ml = i;
                break;
            case 5:
                ol || Zc(n, t);
            case 6:
                if (r = pl, i = ml, pl = null, hl(e, t, n), pl = r, ml = i, pl !== null) {
                    if (ml)
                        try {
                            (pl.nodeType === 9 ? pl.body : pl.nodeName === `HTML` ? pl.ownerDocument.body : pl).removeChild(n.stateNode)
                        } catch (e) {
                            K(n, t, e)
                        }
                    else
                        try {
                            pl.removeChild(n.stateNode)
                        } catch (e) {
                            K(n, t, e)
                        }
                }
                break;
            case 18:
                pl !== null && (ml ? (e = pl, tf(e.nodeType === 9 ? e.body : e.nodeName === `HTML` ? e.ownerDocument.body : e, n.stateNode), Np(e)) : tf(pl, n.stateNode));
                break;
            case 4:
                r = pl,
                i = ml,
                pl = n.stateNode.containerInfo,
                ml = !0,
                hl(e, t, n),
                pl = r,
                ml = i;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                qc(2, n, t),
                ol || qc(4, n, t),
                hl(e, t, n);
                break;
            case 1:
                ol || (Zc(n, t), r = n.stateNode, typeof r.componentWillUnmount == `function` && Yc(n, t, r)),
                hl(e, t, n);
                break;
            case 21:
                hl(e, t, n);
                break;
            case 22:
                ol = (r = ol) || n.memoizedState !== null,
                hl(e, t, n),
                ol = r;
                break;
            default:
                hl(e, t, n)
            }
        }
        function _l(e, t) {
            if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
                e = e.dehydrated;
                try {
                    Np(e)
                } catch (e) {
                    K(t, t.return, e)
                }
            }
        }
        function vl(e, t) {
            if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
                try {
                    Np(e)
                } catch (e) {
                    K(t, t.return, e)
                }
        }
        function yl(e) {
            switch (e.tag) {
            case 31:
            case 13:
            case 19:
                var t = e.stateNode;
                return t === null && (t = e.stateNode = new cl), t;
            case 22:
                return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new cl), t;
            default:
                throw Error(i(435, e.tag))
            }
        }
        function bl(e, t) {
            var n = yl(e);
            t.forEach(function(t) {
                if (!n.has(t)) {
                    n.add(t);
                    var r = ed.bind(null, e, t);
                    t.then(r, r)
                }
            })
        }
        function xl(e, t) {
            var n = t.deletions;
            if (n !== null)
                for (var r = 0; r < n.length; r++) {
                    var a = n[r],
                        o = e,
                        s = t,
                        c = s;
                    a:
                    for (; c !== null;) {
                        switch (c.tag) {
                        case 27:
                            if (ef(c.type)) {
                                pl = c.stateNode,
                                ml = !1;
                                break a
                            }
                            break;
                        case 5:
                            pl = c.stateNode,
                            ml = !1;
                            break a;
                        case 3:
                        case 4:
                            pl = c.stateNode.containerInfo,
                            ml = !0;
                            break a
                        }
                        c = c.return
                    }
                    if (pl === null)
                        throw Error(i(160));
                    gl(o, s, a),
                    pl = null,
                    ml = !1,
                    o = a.alternate,
                    o !== null && (o.return = null),
                    a.return = null
                }
            if (t.subtreeFlags & 13886)
                for (t = t.child; t !== null;)
                    Cl(t, e),
                    t = t.sibling
        }
        var Sl = null;
        function Cl(e, t) {
            var n = e.alternate,
                r = e.flags;
            switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                xl(t, e),
                wl(e),
                r & 4 && (qc(3, e, e.return), Kc(3, e), qc(5, e, e.return));
                break;
            case 1:
                xl(t, e),
                wl(e),
                r & 512 && (ol || n === null || Zc(n, n.return)),
                r & 64 && al && (e = e.updateQueue, e !== null && (r = e.callbacks, r !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? r : n.concat(r))));
                break;
            case 26:
                var a = Sl;
                if (xl(t, e), wl(e), r & 512 && (ol || n === null || Zc(n, n.return)), r & 4) {
                    var o = n === null ? null : n.memoizedState;
                    if (r = e.memoizedState, n === null) {
                        if (r === null) {
                            if (e.stateNode === null) {
                                a:
                                {
                                    r = e.type,
                                    n = e.memoizedProps,
                                    a = a.ownerDocument || a;
                                    b:
                                    switch (r) {
                                    case `title`:
                                        o = a.getElementsByTagName(`title`)[0],
                                        (!o || o[bt] || o[mt] || o.namespaceURI === `http://www.w3.org/2000/svg` || o.hasAttribute(`itemprop`)) && (o = a.createElement(r), a.head.insertBefore(o, a.querySelector(`head > title`))),
                                        Ld(o, r, n),
                                        o[mt] = e,
                                        Et(o),
                                        r = o;
                                        break a;
                                    case `link`:
                                        var s = Hf(`link`, `href`, a).get(r + (n.href || ``));
                                        if (s) {
                                            for (var c = 0; c < s.length; c++)
                                                if (o = s[c], o.getAttribute(`href`) === (n.href == null || n.href === `` ? null : n.href) && o.getAttribute(`rel`) === (n.rel == null ? null : n.rel) && o.getAttribute(`title`) === (n.title == null ? null : n.title) && o.getAttribute(`crossorigin`) === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                                    s.splice(c, 1);
                                                    break b
                                                }
                                        }
                                        o = a.createElement(r),
                                        Ld(o, r, n),
                                        a.head.appendChild(o);
                                        break;
                                    case `meta`:
                                        if (s = Hf(`meta`, `content`, a).get(r + (n.content || ``))) {
                                            for (c = 0; c < s.length; c++)
                                                if (o = s[c], o.getAttribute(`content`) === (n.content == null ? null : `` + n.content) && o.getAttribute(`name`) === (n.name == null ? null : n.name) && o.getAttribute(`property`) === (n.property == null ? null : n.property) && o.getAttribute(`http-equiv`) === (n.httpEquiv == null ? null : n.httpEquiv) && o.getAttribute(`charset`) === (n.charSet == null ? null : n.charSet)) {
                                                    s.splice(c, 1);
                                                    break b
                                                }
                                        }
                                        o = a.createElement(r),
                                        Ld(o, r, n),
                                        a.head.appendChild(o);
                                        break;
                                    default:
                                        throw Error(i(468, r))
                                    }
                                    o[mt] = e,
                                    Et(o),
                                    r = o
                                }e.stateNode = r
                            } else
                                Uf(a, e.type, e.stateNode)
                        } else
                            e.stateNode = Lf(a, r, e.memoizedProps)
                    } else
                        o === r ? r === null && e.stateNode !== null && $c(e, e.memoizedProps, n.memoizedProps) : (o === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : o.count--, r === null ? Uf(a, e.type, e.stateNode) : Lf(a, r, e.memoizedProps))
                }
                break;
            case 27:
                xl(t, e),
                wl(e),
                r & 512 && (ol || n === null || Zc(n, n.return)),
                n !== null && r & 4 && $c(e, e.memoizedProps, n.memoizedProps);
                break;
            case 5:
                if (xl(t, e), wl(e), r & 512 && (ol || n === null || Zc(n, n.return)), e.flags & 32) {
                    a = e.stateNode;
                    try {
                        Zt(a, ``)
                    } catch (t) {
                        K(e, e.return, t)
                    }
                }
                r & 4 && e.stateNode != null && (a = e.memoizedProps, $c(e, a, n === null ? a : n.memoizedProps)),
                r & 1024 && (sl = !0);
                break;
            case 6:
                if (xl(t, e), wl(e), r & 4) {
                    if (e.stateNode === null)
                        throw Error(i(162));
                    r = e.memoizedProps,
                    n = e.stateNode;
                    try {
                        n.nodeValue = r
                    } catch (t) {
                        K(e, e.return, t)
                    }
                }
                break;
            case 3:
                if (Vf = null, a = Sl, Sl = _f(t.containerInfo), xl(t, e), Sl = a, wl(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
                    try {
                        Np(t.containerInfo)
                    } catch (t) {
                        K(e, e.return, t)
                    }
                sl && (sl = !1, Tl(e));
                break;
            case 4:
                r = Sl,
                Sl = _f(e.stateNode.containerInfo),
                xl(t, e),
                wl(e),
                Sl = r;
                break;
            case 12:
                xl(t, e),
                wl(e);
                break;
            case 31:
                xl(t, e),
                wl(e),
                r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, bl(e, r)));
                break;
            case 13:
                xl(t, e),
                wl(e),
                e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (au = Fe()),
                r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, bl(e, r)));
                break;
            case 22:
                a = e.memoizedState !== null;
                var l = n !== null && n.memoizedState !== null,
                    u = al,
                    d = ol;
                if (al = u || a, ol = d || l, xl(t, e), ol = d, al = u, wl(e), r & 8192)
                    a:
                    for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (n === null || l || al || ol || Dl(e)), n = null, t = e;;) {
                        if (t.tag === 5 || t.tag === 26) {
                            if (n === null) {
                                l = n = t;
                                try {
                                    if (o = l.stateNode, a)
                                        s = o.style,
                                        typeof s.setProperty == `function` ? s.setProperty(`display`, `none`, `important`) : s.display = `none`;
                                    else {
                                        c = l.stateNode;
                                        var f = l.memoizedProps.style,
                                            p = f != null && f.hasOwnProperty(`display`) ? f.display : null;
                                        c.style.display = p == null || typeof p == `boolean` ? `` : (`` + p).trim()
                                    }
                                } catch (e) {
                                    K(l, l.return, e)
                                }
                            }
                        } else if (t.tag === 6) {
                            if (n === null) {
                                l = t;
                                try {
                                    l.stateNode.nodeValue = a ? `` : l.memoizedProps
                                } catch (e) {
                                    K(l, l.return, e)
                                }
                            }
                        } else if (t.tag === 18) {
                            if (n === null) {
                                l = t;
                                try {
                                    var m = l.stateNode;
                                    a ? nf(m, !0) : nf(l.stateNode, !1)
                                } catch (e) {
                                    K(l, l.return, e)
                                }
                            }
                        } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                            t.child.return = t,
                            t = t.child;
                            continue
                        }
                        if (t === e)
                            break a;
                        for (; t.sibling === null;) {
                            if (t.return === null || t.return === e)
                                break a;
                            n === t && (n = null),
                            t = t.return
                        }
                        n === t && (n = null),
                        t.sibling.return = t.return,
                        t = t.sibling
                    }
                r & 4 && (r = e.updateQueue, r !== null && (n = r.retryQueue, n !== null && (r.retryQueue = null, bl(e, n))));
                break;
            case 19:
                xl(t, e),
                wl(e),
                r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, bl(e, r)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                xl(t, e),
                wl(e)
            }
        }
        function wl(e) {
            var t = e.flags;
            if (t & 2) {
                try {
                    for (var n, r = e.return; r !== null;) {
                        if (el(r)) {
                            n = r;
                            break
                        }
                        r = r.return
                    }
                    if (n == null)
                        throw Error(i(160));
                    switch (n.tag) {
                    case 27:
                        var a = n.stateNode;
                        rl(e, tl(e), a);
                        break;
                    case 5:
                        var o = n.stateNode;
                        n.flags & 32 && (Zt(o, ``), n.flags &= -33),
                        rl(e, tl(e), o);
                        break;
                    case 3:
                    case 4:
                        var s = n.stateNode.containerInfo;
                        nl(e, tl(e), s);
                        break;
                    default:
                        throw Error(i(161))
                    }
                } catch (t) {
                    K(e, e.return, t)
                }
                e.flags &= -3
            }
            t & 4096 && (e.flags &= -4097)
        }
        function Tl(e) {
            if (e.subtreeFlags & 1024)
                for (e = e.child; e !== null;) {
                    var t = e;
                    Tl(t),
                    t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                    e = e.sibling
                }
        }
        function El(e, t) {
            if (t.subtreeFlags & 8772)
                for (t = t.child; t !== null;)
                    dl(e, t.alternate, t),
                    t = t.sibling
        }
        function Dl(e) {
            for (e = e.child; e !== null;) {
                var t = e;
                switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    qc(4, t, t.return),
                    Dl(t);
                    break;
                case 1:
                    Zc(t, t.return);
                    var n = t.stateNode;
                    typeof n.componentWillUnmount == `function` && Yc(t, t.return, n),
                    Dl(t);
                    break;
                case 27:
                    mf(t.stateNode);
                case 26:
                case 5:
                    Zc(t, t.return),
                    Dl(t);
                    break;
                case 22:
                    t.memoizedState === null && Dl(t);
                    break;
                case 30:
                    Dl(t);
                    break;
                default:
                    Dl(t)
                }
                e = e.sibling
            }
        }
        function Ol(e, t, n) {
            for (n &&= !!(t.subtreeFlags & 8772), t = t.child; t !== null;) {
                var r = t.alternate,
                    i = e,
                    a = t,
                    o = a.flags;
                switch (a.tag) {
                case 0:
                case 11:
                case 15:
                    Ol(i, a, n),
                    Kc(4, a);
                    break;
                case 1:
                    if (Ol(i, a, n), r = a, i = r.stateNode, typeof i.componentDidMount == `function`)
                        try {
                            i.componentDidMount()
                        } catch (e) {
                            K(r, r.return, e)
                        }
                    if (r = a, i = r.updateQueue, i !== null) {
                        var s = r.stateNode;
                        try {
                            var c = i.shared.hiddenCallbacks;
                            if (c !== null)
                                for (i.shared.hiddenCallbacks = null, i = 0; i < c.length; i++)
                                    eo(c[i], s)
                        } catch (e) {
                            K(r, r.return, e)
                        }
                    }
                    n && o & 64 && Jc(a),
                    Xc(a, a.return);
                    break;
                case 27:
                    il(a);
                case 26:
                case 5:
                    Ol(i, a, n),
                    n && r === null && o & 4 && Qc(a),
                    Xc(a, a.return);
                    break;
                case 12:
                    Ol(i, a, n);
                    break;
                case 31:
                    Ol(i, a, n),
                    n && o & 4 && _l(i, a);
                    break;
                case 13:
                    Ol(i, a, n),
                    n && o & 4 && vl(i, a);
                    break;
                case 22:
                    a.memoizedState === null && Ol(i, a, n),
                    Xc(a, a.return);
                    break;
                case 30:
                    break;
                default:
                    Ol(i, a, n)
                }
                t = t.sibling
            }
        }
        function kl(e, t) {
            var n = null;
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool),
            e = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
            e !== n && (e != null && e.refCount++, n != null && ma(n))
        }
        function Al(e, t) {
            e = null,
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== e && (t.refCount++, e != null && ma(e))
        }
        function jl(e, t, n, r) {
            if (t.subtreeFlags & 10256)
                for (t = t.child; t !== null;)
                    Ml(e, t, n, r),
                    t = t.sibling
        }
        function Ml(e, t, n, r) {
            var i = t.flags;
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                jl(e, t, n, r),
                i & 2048 && Kc(9, t);
                break;
            case 1:
                jl(e, t, n, r);
                break;
            case 3:
                jl(e, t, n, r),
                i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ma(e)));
                break;
            case 12:
                if (i & 2048) {
                    jl(e, t, n, r),
                    e = t.stateNode;
                    try {
                        var a = t.memoizedProps,
                            o = a.id,
                            s = a.onPostCommit;
                        typeof s == `function` && s(o, t.alternate === null ? `mount` : `update`, e.passiveEffectDuration, -0)
                    } catch (e) {
                        K(t, t.return, e)
                    }
                } else
                    jl(e, t, n, r);
                break;
            case 31:
                jl(e, t, n, r);
                break;
            case 13:
                jl(e, t, n, r);
                break;
            case 23:
                break;
            case 22:
                a = t.stateNode,
                o = t.alternate,
                t.memoizedState === null ? a._visibility & 2 ? jl(e, t, n, r) : (a._visibility |= 2, Nl(e, t, n, r, !!(t.subtreeFlags & 10256) || !1)) : a._visibility & 2 ? jl(e, t, n, r) : Pl(e, t),
                i & 2048 && kl(o, t);
                break;
            case 24:
                jl(e, t, n, r),
                i & 2048 && Al(t.alternate, t);
                break;
            default:
                jl(e, t, n, r)
            }
        }
        function Nl(e, t, n, r, i) {
            for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null;) {
                var a = e,
                    o = t,
                    s = n,
                    c = r,
                    l = o.flags;
                switch (o.tag) {
                case 0:
                case 11:
                case 15:
                    Nl(a, o, s, c, i),
                    Kc(8, o);
                    break;
                case 23:
                    break;
                case 22:
                    var u = o.stateNode;
                    o.memoizedState === null ? (u._visibility |= 2, Nl(a, o, s, c, i)) : u._visibility & 2 ? Nl(a, o, s, c, i) : Pl(a, o),
                    i && l & 2048 && kl(o.alternate, o);
                    break;
                case 24:
                    Nl(a, o, s, c, i),
                    i && l & 2048 && Al(o.alternate, o);
                    break;
                default:
                    Nl(a, o, s, c, i)
                }
                t = t.sibling
            }
        }
        function Pl(e, t) {
            if (t.subtreeFlags & 10256)
                for (t = t.child; t !== null;) {
                    var n = e,
                        r = t,
                        i = r.flags;
                    switch (r.tag) {
                    case 22:
                        Pl(n, r),
                        i & 2048 && kl(r.alternate, r);
                        break;
                    case 24:
                        Pl(n, r),
                        i & 2048 && Al(r.alternate, r);
                        break;
                    default:
                        Pl(n, r)
                    }
                    t = t.sibling
                }
        }
        var Fl = 8192;
        function Il(e, t, n) {
            if (e.subtreeFlags & Fl)
                for (e = e.child; e !== null;)
                    Ll(e, t, n),
                    e = e.sibling
        }
        function Ll(e, t, n) {
            switch (e.tag) {
            case 26:
                Il(e, t, n),
                e.flags & Fl && e.memoizedState !== null && Kf(n, Sl, e.memoizedState, e.memoizedProps);
                break;
            case 5:
                Il(e, t, n);
                break;
            case 3:
            case 4:
                var r = Sl;
                Sl = _f(e.stateNode.containerInfo),
                Il(e, t, n),
                Sl = r;
                break;
            case 22:
                e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = Fl, Fl = 16777216, Il(e, t, n), Fl = r) : Il(e, t, n));
                break;
            default:
                Il(e, t, n)
            }
        }
        function Rl(e) {
            var t = e.alternate;
            if (t !== null && (e = t.child, e !== null)) {
                t.child = null;
                do t = e.sibling,
                e.sibling = null,
                e = t;
                while (e !== null)
            }
        }
        function zl(e) {
            var t = e.deletions;
            if (e.flags & 16) {
                if (t !== null)
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        ll = r,
                        Hl(r, e)
                    }
                Rl(e)
            }
            if (e.subtreeFlags & 10256)
                for (e = e.child; e !== null;)
                    Bl(e),
                    e = e.sibling
        }
        function Bl(e) {
            switch (e.tag) {
            case 0:
            case 11:
            case 15:
                zl(e),
                e.flags & 2048 && qc(9, e, e.return);
                break;
            case 3:
                zl(e);
                break;
            case 12:
                zl(e);
                break;
            case 22:
                var t = e.stateNode;
                e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Vl(e)) : zl(e);
                break;
            default:
                zl(e)
            }
        }
        function Vl(e) {
            var t = e.deletions;
            if (e.flags & 16) {
                if (t !== null)
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        ll = r,
                        Hl(r, e)
                    }
                Rl(e)
            }
            for (e = e.child; e !== null;) {
                switch (t = e, t.tag) {
                case 0:
                case 11:
                case 15:
                    qc(8, t, t.return),
                    Vl(t);
                    break;
                case 22:
                    n = t.stateNode,
                    n._visibility & 2 && (n._visibility &= -3, Vl(t));
                    break;
                default:
                    Vl(t)
                }
                e = e.sibling
            }
        }
        function Hl(e, t) {
            for (; ll !== null;) {
                var n = ll;
                switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    qc(8, n, t);
                    break;
                case 23:
                case 22:
                    if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                        var r = n.memoizedState.cachePool.pool;
                        r != null && r.refCount++
                    }
                    break;
                case 24:
                    ma(n.memoizedState.cache)
                }
                if (r = n.child, r !== null)
                    r.return = n,
                    ll = r;
                else
                    a:
                    for (n = e; ll !== null;) {
                        r = ll;
                        var i = r.sibling,
                            a = r.return;
                        if (fl(r), r === n) {
                            ll = null;
                            break a
                        }
                        if (i !== null) {
                            i.return = a,
                            ll = i;
                            break a
                        }
                        ll = a
                    }
            }
        }
        var Ul = {
                getCacheForType: function(e) {
                    var t = oa(fa),
                        n = t.data.get(e);
                    return n === void 0 && (n = e(), t.data.set(e, n)), n
                },
                cacheSignal: function() {
                    return oa(fa).controller.signal
                }
            },
            Wl = typeof WeakMap == `function` ? WeakMap : Map,
            B = 0,
            V = null,
            H = null,
            U = 0,
            W = 0,
            Gl = null,
            Kl = !1,
            ql = !1,
            Jl = !1,
            Yl = 0,
            Xl = 0,
            Zl = 0,
            Ql = 0,
            $l = 0,
            eu = 0,
            tu = 0,
            nu = null,
            ru = null,
            iu = !1,
            au = 0,
            ou = 0,
            su = 1 / 0,
            cu = null,
            lu = null,
            uu = 0,
            du = null,
            fu = null,
            pu = 0,
            mu = 0,
            hu = null,
            gu = null,
            _u = 0,
            vu = null;
        function yu() {
            return B & 2 && U !== 0 ? U & -U : E.T === null ? A() : q()
        }
        function bu() {
            if (eu === 0) {
                if (!(U & 536870912) || P) {
                    var e = Ze;
                    Ze <<= 1,
                    !(Ze & 3932160) && (Ze = 262144),
                    eu = e
                } else
                    eu = 536870912
            }
            return e = so.current, e !== null && (e.flags |= 32), eu
        }
        function xu(e, t, n) {
            (e === V && (W === 2 || W === 9) || e.cancelPendingCommit !== null) && (Du(e, 0), wu(e, U, eu, !1)),
            at(e, n),
            (!(B & 2) || e !== V) && (e === V && (!(B & 2) && (Ql |= n), Xl === 4 && wu(e, U, eu, !1)), cd(e))
        }
        function Su(e, t, n) {
            if (B & 6)
                throw Error(i(327));
            var r = !n && !(t & 127) && (t & e.expiredLanes) === 0 || tt(e, t),
                a = r ? Fu(e, t) : Nu(e, t, !0),
                o = r;
            do {
                if (a === 0) {
                    ql && !r && wu(e, t, 0, !1);
                    break
                }
                if (n = e.current.alternate, o && !Cu(n)) {
                    a = Nu(e, t, !1),
                    o = !1;
                    continue
                }
                if (a === 2) {
                    if (o = t, e.errorRecoveryDisabledLanes & o)
                        var s = 0;
                    else
                        s = e.pendingLanes & -536870913,
                        s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
                    if (s !== 0) {
                        t = s;
                        a:
                        {
                            var c = e;
                            a = nu;
                            var l = c.current.memoizedState.isDehydrated;
                            if (l && (Du(c, s).flags |= 256), s = Nu(c, s, !1), s !== 2) {
                                if (Jl && !l) {
                                    c.errorRecoveryDisabledLanes |= o,
                                    Ql |= o,
                                    a = 4;
                                    break a
                                }
                                o = ru,
                                ru = a,
                                o !== null && (ru === null ? ru = o : ru.push.apply(ru, o))
                            }
                            a = s
                        }if (o = !1, a !== 2)
                            continue
                    }
                }
                if (a === 1) {
                    Du(e, 0),
                    wu(e, t, 0, !0);
                    break
                }
                a:
                {
                    switch (r = e, o = a, o) {
                    case 0:
                    case 1:
                        throw Error(i(345));
                    case 4:
                        if ((t & 4194048) !== t)
                            break;
                    case 6:
                        wu(r, t, eu, !Kl);
                        break a;
                    case 2:
                        ru = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(i(329))
                    }
                    if ((t & 62914560) === t && (a = au + 300 - Fe(), 10 < a)) {
                        if (wu(r, t, eu, !Kl), et(r, 0, !0) !== 0)
                            break a;
                        pu = t,
                        r.timeoutHandle = Yd(G.bind(null, r, n, ru, cu, iu, t, eu, Ql, tu, Kl, o, `Throttled`, -0, 0), a);
                        break a
                    }
                    G(r, n, ru, cu, iu, t, eu, Ql, tu, Kl, o, null, -0, 0)
                }break
            } while (1);
            cd(e)
        }
        function G(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
            if (e.timeoutHandle = -1, d = t.subtreeFlags, d & 8192 || (d & 16785408) == 16785408) {
                d = {
                    stylesheets: null,
                    count: 0,
                    imgCount: 0,
                    imgBytes: 0,
                    suspenseyImages: [],
                    waitingForImages: !0,
                    waitingForViewTransition: !1,
                    unsuspend: on
                },
                Ll(t, a, d);
                var m = (a & 62914560) === a ? au - Fe() : (a & 4194048) === a ? ou - Fe() : 0;
                if (m = Jf(d, m), m !== null) {
                    pu = a,
                    e.cancelPendingCommit = m(Hu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p)),
                    wu(e, a, o, !l);
                    return
                }
            }
            Hu(e, t, a, n, r, i, o, s, c)
        }
        function Cu(e) {
            for (var t = e;;) {
                var n = t.tag;
                if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
                    for (var r = 0; r < n.length; r++) {
                        var i = n[r],
                            a = i.getSnapshot;
                        i = i.value;
                        try {
                            if (!Or(a(), i))
                                return !1
                        } catch {
                            return !1
                        }
                    }
                if (n = t.child, t.subtreeFlags & 16384 && n !== null)
                    n.return = t,
                    t = n;
                else {
                    if (t === e)
                        break;
                    for (; t.sibling === null;) {
                        if (t.return === null || t.return === e)
                            return !0;
                        t = t.return
                    }
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            }
            return !0
        }
        function wu(e, t, n, r) {
            t &= ~$l,
            t &= ~Ql,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            r && (e.warmLanes |= t),
            r = e.expirationTimes;
            for (var i = t; 0 < i;) {
                var a = 31 - Ke(i),
                    o = 1 << a;
                r[a] = -1,
                i &= ~o
            }
            n !== 0 && st(e, n, t)
        }
        function Tu() {
            return B & 6 ? !0 : (ld(0, !1), !1)
        }
        function Eu() {
            if (H !== null) {
                if (W === 0)
                    var e = H.return;
                else
                    e = H,
                    Qi = Zi = null,
                    Po(e),
                    Ia = null,
                    La = 0,
                    e = H;
                for (; e !== null;)
                    Gc(e.alternate, e),
                    e = e.return;
                H = null
            }
        }
        function Du(e, t) {
            var n = e.timeoutHandle;
            n !== -1 && (e.timeoutHandle = -1, Xd(n)),
            n = e.cancelPendingCommit,
            n !== null && (e.cancelPendingCommit = null, n()),
            pu = 0,
            Eu(),
            V = e,
            H = n = gi(e.current, null),
            U = t,
            W = 0,
            Gl = null,
            Kl = !1,
            ql = tt(e, t),
            Jl = !1,
            tu = eu = $l = Ql = Zl = Xl = 0,
            ru = nu = null,
            iu = !1,
            t & 8 && (t |= t & 32);
            var r = e.entangledLanes;
            if (r !== 0)
                for (e = e.entanglements, r &= t; 0 < r;) {
                    var i = 31 - Ke(r),
                        a = 1 << i;
                    t |= e[i],
                    r &= ~a
                }
            return Yl = t, oi(), n
        }
        function Ou(e, t) {
            I = null,
            E.H = Ws,
            t === Da || t === ka ? (t = Pa(), W = 3) : t === Oa ? (t = Pa(), W = 4) : W = t === cc ? 8 : typeof t == `object` && t && typeof t.then == `function` ? 6 : 1,
            Gl = t,
            H === null && (Xl = 1, nc(e, wi(t, e.current)))
        }
        function ku() {
            var e = so.current;
            return e === null ? !0 : (U & 4194048) === U ? co === null : (U & 62914560) === U || U & 536870912 ? e === co : !1
        }
        function Au() {
            var e = E.H;
            return E.H = Ws, e === null ? Ws : e
        }
        function ju() {
            var e = E.A;
            return E.A = Ul, e
        }
        function Mu() {
            Xl = 4,
            Kl || (U & 4194048) !== U && so.current !== null || (ql = !0),
            !(Zl & 134217727) && !(Ql & 134217727) || V === null || wu(V, U, eu, !1)
        }
        function Nu(e, t, n) {
            var r = B;
            B |= 2;
            var i = Au(),
                a = ju();
            (V !== e || U !== t) && (cu = null, Du(e, t)),
            t = !1;
            var o = Xl;
            a:
            do try {
                if (W !== 0 && H !== null) {
                    var s = H,
                        c = Gl;
                    switch (W) {
                    case 8:
                        Eu(),
                        o = 6;
                        break a;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        so.current === null && (t = !0);
                        var l = W;
                        if (W = 0, Gl = null, zu(e, s, c, l), n && ql) {
                            o = 0;
                            break a
                        }
                        break;
                    default:
                        l = W,
                        W = 0,
                        Gl = null,
                        zu(e, s, c, l)
                    }
                }
                Pu(),
                o = Xl;
                break
            } catch (t) {
                Ou(e, t)
            }
            while (1);
            return t && e.shellSuspendCounter++, Qi = Zi = null, B = r, E.H = i, E.A = a, H === null && (V = null, U = 0, oi()), o
        }
        function Pu() {
            for (; H !== null;)
                Lu(H)
        }
        function Fu(e, t) {
            var n = B;
            B |= 2;
            var r = Au(),
                a = ju();
            V !== e || U !== t ? (cu = null, su = Fe() + 500, Du(e, t)) : ql = tt(e, t);
            a:
            do try {
                if (W !== 0 && H !== null) {
                    t = H;
                    var o = Gl;
                    b:
                    switch (W) {
                    case 1:
                        W = 0,
                        Gl = null,
                        zu(e, t, o, 1);
                        break;
                    case 2:
                    case 9:
                        if (ja(o)) {
                            W = 0,
                            Gl = null,
                            Ru(t);
                            break
                        }
                        t = function() {
                            W !== 2 && W !== 9 || V !== e || (W = 7),
                            cd(e)
                        },
                        o.then(t, t);
                        break a;
                    case 3:
                        W = 7;
                        break a;
                    case 4:
                        W = 5;
                        break a;
                    case 7:
                        ja(o) ? (W = 0, Gl = null, Ru(t)) : (W = 0, Gl = null, zu(e, t, o, 7));
                        break;
                    case 5:
                        var s = null;
                        switch (H.tag) {
                        case 26:
                            s = H.memoizedState;
                        case 5:
                        case 27:
                            var c = H;
                            if (s ? Gf(s) : c.stateNode.complete) {
                                W = 0,
                                Gl = null;
                                var l = c.sibling;
                                if (l !== null)
                                    H = l;
                                else {
                                    var u = c.return;
                                    u === null ? H = null : (H = u, Bu(u))
                                }
                                break b
                            }
                        }
                        W = 0,
                        Gl = null,
                        zu(e, t, o, 5);
                        break;
                    case 6:
                        W = 0,
                        Gl = null,
                        zu(e, t, o, 6);
                        break;
                    case 8:
                        Eu(),
                        Xl = 6;
                        break a;
                    default:
                        throw Error(i(462))
                    }
                }
                Iu();
                break
            } catch (t) {
                Ou(e, t)
            }
            while (1);
            return Qi = Zi = null, E.H = r, E.A = a, B = n, H === null ? (V = null, U = 0, oi(), Xl) : 0
        }
        function Iu() {
            for (; H !== null && !Ne();)
                Lu(H)
        }
        function Lu(e) {
            var t = Lc(e.alternate, e, Yl);
            e.memoizedProps = e.pendingProps,
            t === null ? Bu(e) : H = t
        }
        function Ru(e) {
            var t = e,
                n = t.alternate;
            switch (t.tag) {
            case 15:
            case 0:
                t = Sc(n, t, t.pendingProps, t.type, void 0, U);
                break;
            case 11:
                t = Sc(n, t, t.pendingProps, t.type.render, t.ref, U);
                break;
            case 5:
                Po(t);
            default:
                Gc(n, t),
                t = H = _i(t, Yl),
                t = Lc(n, t, Yl)
            }
            e.memoizedProps = e.pendingProps,
            t === null ? Bu(e) : H = t
        }
        function zu(e, t, n, r) {
            Qi = Zi = null,
            Po(t),
            Ia = null,
            La = 0;
            var i = t.return;
            try {
                if (sc(e, i, t, n, U)) {
                    Xl = 1,
                    nc(e, wi(n, e.current)),
                    H = null;
                    return
                }
            } catch (t) {
                if (i !== null)
                    throw H = i, t;
                Xl = 1,
                nc(e, wi(n, e.current)),
                H = null;
                return
            }
            t.flags & 32768 ? (P || r === 1 ? e = !0 : ql || U & 536870912 ? e = !1 : (Kl = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = so.current, r !== null && r.tag === 13 && (r.flags |= 16384))), Vu(t, e)) : Bu(t)
        }
        function Bu(e) {
            var t = e;
            do {
                if (t.flags & 32768) {
                    Vu(t, Kl);
                    return
                }
                e = t.return;
                var n = Uc(t.alternate, t, Yl);
                if (n !== null) {
                    H = n;
                    return
                }
                if (t = t.sibling, t !== null) {
                    H = t;
                    return
                }
                H = t = e
            } while (t !== null);
            Xl === 0 && (Xl = 5)
        }
        function Vu(e, t) {
            do {
                var n = Wc(e.alternate, e);
                if (n !== null) {
                    n.flags &= 32767,
                    H = n;
                    return
                }
                if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
                    H = e;
                    return
                }
                H = e = n
            } while (e !== null);
            Xl = 6,
            H = null
        }
        function Hu(e, t, n, r, a, o, s, c, l) {
            e.cancelPendingCommit = null;
            do qu();
            while (uu !== 0);
            if (B & 6)
                throw Error(i(327));
            if (t !== null) {
                if (t === e.current)
                    throw Error(i(177));
                if (o = t.lanes | t.childLanes, o |= ai, ot(e, n, o, s, c, l), e === V && (H = V = null, U = 0), fu = t, du = e, pu = n, mu = o, hu = a, gu = r, t.subtreeFlags & 10256 || t.flags & 10256 ? (e.callbackNode = null, e.callbackPriority = 0, td(Re, function() {
                    return Ju(), null
                })) : (e.callbackNode = null, e.callbackPriority = 0), r = !!(t.flags & 13878), t.subtreeFlags & 13878 || r) {
                    r = E.T,
                    E.T = null,
                    a = D.p,
                    D.p = 2,
                    s = B,
                    B |= 4;
                    try {
                        ul(e, t, n)
                    } finally {
                        B = s,
                        D.p = a,
                        E.T = r
                    }
                }
                uu = 1,
                Uu(),
                Wu(),
                Gu()
            }
        }
        function Uu() {
            if (uu === 1) {
                uu = 0;
                var e = du,
                    t = fu,
                    n = !!(t.flags & 13878);
                if (t.subtreeFlags & 13878 || n) {
                    n = E.T,
                    E.T = null;
                    var r = D.p;
                    D.p = 2;
                    var i = B;
                    B |= 4;
                    try {
                        Cl(t, e);
                        var a = Hd,
                            o = Nr(e.containerInfo),
                            s = a.focusedElem,
                            c = a.selectionRange;
                        if (o !== s && s && s.ownerDocument && Mr(s.ownerDocument.documentElement, s)) {
                            if (c !== null && Pr(s)) {
                                var l = c.start,
                                    u = c.end;
                                if (u === void 0 && (u = l), `selectionStart` in s)
                                    s.selectionStart = l,
                                    s.selectionEnd = Math.min(u, s.value.length);
                                else {
                                    var d = s.ownerDocument || document,
                                        f = d && d.defaultView || window;
                                    if (f.getSelection) {
                                        var p = f.getSelection(),
                                            m = s.textContent.length,
                                            h = Math.min(c.start, m),
                                            g = c.end === void 0 ? h : Math.min(c.end, m);
                                        !p.extend && h > g && (o = g, g = h, h = o);
                                        var _ = jr(s, h),
                                            v = jr(s, g);
                                        if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
                                            var y = d.createRange();
                                            y.setStart(_.node, _.offset),
                                            p.removeAllRanges(),
                                            h > g ? (p.addRange(y), p.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset), p.addRange(y))
                                        }
                                    }
                                }
                            }
                            for (d = [], p = s; p = p.parentNode;)
                                p.nodeType === 1 && d.push({
                                    element: p,
                                    left: p.scrollLeft,
                                    top: p.scrollTop
                                });
                            for (typeof s.focus == `function` && s.focus(), s = 0; s < d.length; s++) {
                                var b = d[s];
                                b.element.scrollLeft = b.left,
                                b.element.scrollTop = b.top
                            }
                        }
                        cp = !!Vd,
                        Hd = Vd = null
                    } finally {
                        B = i,
                        D.p = r,
                        E.T = n
                    }
                }
                e.current = t,
                uu = 2
            }
        }
        function Wu() {
            if (uu === 2) {
                uu = 0;
                var e = du,
                    t = fu,
                    n = !!(t.flags & 8772);
                if (t.subtreeFlags & 8772 || n) {
                    n = E.T,
                    E.T = null;
                    var r = D.p;
                    D.p = 2;
                    var i = B;
                    B |= 4;
                    try {
                        dl(e, t.alternate, t)
                    } finally {
                        B = i,
                        D.p = r,
                        E.T = n
                    }
                }
                uu = 3
            }
        }
        function Gu() {
            if (uu === 4 || uu === 3) {
                uu = 0,
                Pe();
                var e = du,
                    t = fu,
                    n = pu,
                    r = gu;
                t.subtreeFlags & 10256 || t.flags & 10256 ? uu = 5 : (uu = 0, fu = du = null, Ku(e, e.pendingLanes));
                var i = e.pendingLanes;
                if (i === 0 && (lu = null), dt(n), t = t.stateNode, We && typeof We.onCommitFiberRoot == `function`)
                    try {
                        We.onCommitFiberRoot(Ue, t, void 0, (t.current.flags & 128) == 128)
                    } catch {}
                if (r !== null) {
                    t = E.T,
                    i = D.p,
                    D.p = 2,
                    E.T = null;
                    try {
                        for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
                            var s = r[o];
                            a(s.value, {
                                componentStack: s.stack
                            })
                        }
                    } finally {
                        E.T = t,
                        D.p = i
                    }
                }
                pu & 3 && qu(),
                cd(e),
                i = e.pendingLanes,
                n & 261930 && i & 42 ? e === vu ? _u++ : (_u = 0, vu = e) : _u = 0,
                ld(0, !1)
            }
        }
        function Ku(e, t) {
            (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ma(t)))
        }
        function qu() {
            return Uu(), Wu(), Gu(), Ju()
        }
        function Ju() {
            if (uu !== 5)
                return !1;
            var e = du,
                t = mu;
            mu = 0;
            var n = dt(pu),
                r = E.T,
                a = D.p;
            try {
                D.p = 32 > n ? 32 : n,
                E.T = null,
                n = hu,
                hu = null;
                var o = du,
                    s = pu;
                if (uu = 0, fu = du = null, pu = 0, B & 6)
                    throw Error(i(331));
                var c = B;
                if (B |= 4, Bl(o.current), Ml(o, o.current, s, n), B = c, ld(0, !1), We && typeof We.onPostCommitFiberRoot == `function`)
                    try {
                        We.onPostCommitFiberRoot(Ue, o)
                    } catch {}
                return !0
            } finally {
                D.p = a,
                E.T = r,
                Ku(e, t)
            }
        }
        function Yu(e, t, n) {
            t = wi(n, t),
            t = ic(e.stateNode, t, 2),
            e = Ja(e, t, 2),
            e !== null && (at(e, 2), cd(e))
        }
        function K(e, t, n) {
            if (e.tag === 3)
                Yu(e, e, n);
            else
                for (; t !== null;) {
                    if (t.tag === 3) {
                        Yu(t, e, n);
                        break
                    }
                    if (t.tag === 1) {
                        var r = t.stateNode;
                        if (typeof t.type.getDerivedStateFromError == `function` || typeof r.componentDidCatch == `function` && (lu === null || !lu.has(r))) {
                            e = wi(n, e),
                            n = ac(2),
                            r = Ja(t, n, 2),
                            r !== null && (oc(n, r, t, e), at(r, 2), cd(r));
                            break
                        }
                    }
                    t = t.return
                }
        }
        function Xu(e, t, n) {
            var r = e.pingCache;
            if (r === null) {
                r = e.pingCache = new Wl;
                var i = new Set;
                r.set(t, i)
            } else
                i = r.get(t),
                i === void 0 && (i = new Set, r.set(t, i));
            i.has(n) || (Jl = !0, i.add(n), e = Zu.bind(null, e, t, n), t.then(e, e))
        }
        function Zu(e, t, n) {
            var r = e.pingCache;
            r !== null && r.delete(t),
            e.pingedLanes |= e.suspendedLanes & n,
            e.warmLanes &= ~n,
            V === e && (U & n) === n && (Xl === 4 || Xl === 3 && (U & 62914560) === U && 300 > Fe() - au ? !(B & 2) && Du(e, 0) : $l |= n, tu === U && (tu = 0)),
            cd(e)
        }
        function Qu(e, t) {
            t === 0 && (t = rt()),
            e = li(e, t),
            e !== null && (at(e, t), cd(e))
        }
        function $u(e) {
            var t = e.memoizedState,
                n = 0;
            t !== null && (n = t.retryLane),
            Qu(e, n)
        }
        function ed(e, t) {
            var n = 0;
            switch (e.tag) {
            case 31:
            case 13:
                var r = e.stateNode,
                    a = e.memoizedState;
                a !== null && (n = a.retryLane);
                break;
            case 19:
                r = e.stateNode;
                break;
            case 22:
                r = e.stateNode._retryCache;
                break;
            default:
                throw Error(i(314))
            }
            r !== null && r.delete(t),
            Qu(e, n)
        }
        function td(e, t) {
            return je(e, t)
        }
        var nd = null,
            rd = null,
            id = !1,
            ad = !1,
            od = !1,
            sd = 0;
        function cd(e) {
            e !== rd && e.next === null && (rd === null ? nd = rd = e : rd = rd.next = e),
            ad = !0,
            id || (id = !0, hd())
        }
        function ld(e, t) {
            if (!od && ad) {
                od = !0;
                do for (var n = !1, r = nd; r !== null;) {
                    if (!t) {
                        if (e !== 0) {
                            var i = r.pendingLanes;
                            if (i === 0)
                                var a = 0;
                            else {
                                var o = r.suspendedLanes,
                                    s = r.pingedLanes;
                                a = (1 << 31 - Ke(42 | e) + 1) - 1,
                                a &= i & ~(o & ~s),
                                a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0
                            }
                            a !== 0 && (n = !0, md(r, a))
                        } else
                            a = U,
                            a = et(r, r === V ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1),
                            !(a & 3) || tt(r, a) || (n = !0, md(r, a))
                    }
                    r = r.next
                }
                while (n);
                od = !1
            }
        }
        function ud() {
            dd()
        }
        function dd() {
            ad = id = !1;
            var e = 0;
            sd !== 0 && Jd() && (e = sd);
            for (var t = Fe(), n = null, r = nd; r !== null;) {
                var i = r.next,
                    a = fd(r, t);
                a === 0 ? (r.next = null, n === null ? nd = i : n.next = i, i === null && (rd = n)) : (n = r, (e !== 0 || a & 3) && (ad = !0)),
                r = i
            }
            uu !== 0 && uu !== 5 || ld(e, !1),
            sd !== 0 && (sd = 0)
        }
        function fd(e, t) {
            for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
                var o = 31 - Ke(a),
                    s = 1 << o,
                    c = i[o];
                c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = nt(s, t)) : c <= t && (e.expiredLanes |= s),
                a &= ~s
            }
            if (t = V, n = U, n = et(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && (W === 2 || W === 9) || e.cancelPendingCommit !== null)
                return r !== null && r !== null && Me(r), e.callbackNode = null, e.callbackPriority = 0;
            if (!(n & 3) || tt(e, n)) {
                if (t = n & -n, t === e.callbackPriority)
                    return t;
                switch (r !== null && Me(r), dt(n)) {
                case 2:
                case 8:
                    n = Le;
                    break;
                case 32:
                    n = Re;
                    break;
                case 268435456:
                    n = Be;
                    break;
                default:
                    n = Re
                }
                return r = pd.bind(null, e), n = je(n, r), e.callbackPriority = t, e.callbackNode = n, t
            }
            return r !== null && r !== null && Me(r), e.callbackPriority = 2, e.callbackNode = null, 2
        }
        function pd(e, t) {
            if (uu !== 0 && uu !== 5)
                return e.callbackNode = null, e.callbackPriority = 0, null;
            var n = e.callbackNode;
            if (qu() && e.callbackNode !== n)
                return null;
            var r = U;
            return r = et(e, e === V ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (Su(e, r, t), fd(e, Fe()), e.callbackNode != null && e.callbackNode === n ? pd.bind(null, e) : null)
        }
        function md(e, t) {
            if (qu())
                return null;
            Su(e, t, !0)
        }
        function hd() {
            Qd(function() {
                B & 6 ? je(k, ud) : dd()
            })
        }
        function q() {
            if (sd === 0) {
                var e = _a;
                e === 0 && (e = Xe, Xe <<= 1, !(Xe & 261888) && (Xe = 256)),
                sd = e
            }
            return sd
        }
        function gd(e) {
            return e == null || typeof e == `symbol` || typeof e == `boolean` ? null : typeof e == `function` ? e : an(`` + e)
        }
        function _d(e, t) {
            var n = t.ownerDocument.createElement(`input`);
            return n.name = t.name, n.value = t.value, e.id && n.setAttribute(`form`, e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e
        }
        function vd(e, t, n, r, i) {
            if (t === `submit` && n && n.stateNode === i) {
                var a = gd((i[ht] || null).action),
                    o = r.submitter;
                o && (t = (t = o[ht] || null) ? gd(t.formAction) : o.getAttribute(`formAction`), t !== null && (a = t, o = null));
                var s = new Dn(`action`, `action`, null, r, i);
                e.push({
                    event: s,
                    listeners: [{
                        instance: null,
                        listener: function() {
                            if (r.defaultPrevented) {
                                if (sd !== 0) {
                                    var e = o ? _d(i, o) : new FormData(i);
                                    As(n, {
                                        pending: !0,
                                        data: e,
                                        method: i.method,
                                        action: a
                                    }, null, e)
                                }
                            } else
                                typeof a == `function` && (s.preventDefault(), e = o ? _d(i, o) : new FormData(i), As(n, {
                                    pending: !0,
                                    data: e,
                                    method: i.method,
                                    action: a
                                }, a, e))
                        },
                        currentTarget: i
                    }]
                })
            }
        }
        for (var yd = 0; yd < ei.length; yd++) {
            var bd = ei[yd];
            ti(bd.toLowerCase(), `on` + (bd[0].toUpperCase() + bd.slice(1)))
        }
        ti(Kr, `onAnimationEnd`),
        ti(qr, `onAnimationIteration`),
        ti(Jr, `onAnimationStart`),
        ti(`dblclick`, `onDoubleClick`),
        ti(`focusin`, `onFocus`),
        ti(`focusout`, `onBlur`),
        ti(Yr, `onTransitionRun`),
        ti(Xr, `onTransitionStart`),
        ti(Zr, `onTransitionCancel`),
        ti(Qr, `onTransitionEnd`),
        At(`onMouseEnter`, [`mouseout`, `mouseover`]),
        At(`onMouseLeave`, [`mouseout`, `mouseover`]),
        At(`onPointerEnter`, [`pointerout`, `pointerover`]),
        At(`onPointerLeave`, [`pointerout`, `pointerover`]),
        kt(`onChange`, `change click focusin focusout input keydown keyup selectionchange`.split(` `)),
        kt(`onSelect`, `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),
        kt(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
        kt(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)),
        kt(`onCompositionStart`, `compositionstart focusout keydown keypress keyup mousedown`.split(` `)),
        kt(`onCompositionUpdate`, `compositionupdate focusout keydown keypress keyup mousedown`.split(` `));
        var xd = `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),
            Sd = new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(xd));
        function Cd(e, t) {
            t = !!(t & 4);
            for (var n = 0; n < e.length; n++) {
                var r = e[n],
                    i = r.event;
                r = r.listeners;
                a:
                {
                    var a = void 0;
                    if (t)
                        for (var o = r.length - 1; 0 <= o; o--) {
                            var s = r[o],
                                c = s.instance,
                                l = s.currentTarget;
                            if (s = s.listener, c !== a && i.isPropagationStopped())
                                break a;
                            a = s,
                            i.currentTarget = l;
                            try {
                                a(i)
                            } catch (e) {
                                ni(e)
                            }
                            i.currentTarget = null,
                            a = c
                        }
                    else
                        for (o = 0; o < r.length; o++) {
                            if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped())
                                break a;
                            a = s,
                            i.currentTarget = l;
                            try {
                                a(i)
                            } catch (e) {
                                ni(e)
                            }
                            i.currentTarget = null,
                            a = c
                        }
                }
            }
        }
        function J(e, t) {
            var n = t[gt];
            n === void 0 && (n = t[gt] = new Set);
            var r = e + `__bubble`;
            n.has(r) || (Dd(t, e, 2, !1), n.add(r))
        }
        function wd(e, t, n) {
            var r = 0;
            t && (r |= 4),
            Dd(n, e, r, t)
        }
        var Td = `_reactListening` + Math.random().toString(36).slice(2);
        function Ed(e) {
            if (!e[Td]) {
                e[Td] = !0,
                Dt.forEach(function(t) {
                    t !== `selectionchange` && (Sd.has(t) || wd(t, !1, e), wd(t, !0, e))
                });
                var t = e.nodeType === 9 ? e : e.ownerDocument;
                t === null || t[Td] || (t[Td] = !0, wd(`selectionchange`, !1, t))
            }
        }
        function Dd(e, t, n, r) {
            switch (hp(t)) {
            case 2:
                var i = lp;
                break;
            case 8:
                i = up;
                break;
            default:
                i = dp
            }
            n = i.bind(null, t, n, e),
            i = void 0,
            !gn || t !== `touchstart` && t !== `touchmove` && t !== `wheel` || (i = !0),
            r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
                capture: !0,
                passive: i
            }) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, {
                passive: i
            })
        }
        function Od(e, t, n, r, i) {
            var a = r;
            if (!(t & 1) && !(t & 2) && r !== null)
                a:
                for (;;) {
                    if (r === null)
                        return;
                    var s = r.tag;
                    if (s === 3 || s === 4) {
                        var c = r.stateNode.containerInfo;
                        if (c === i)
                            break;
                        if (s === 4)
                            for (s = r.return; s !== null;) {
                                var l = s.tag;
                                if ((l === 3 || l === 4) && s.stateNode.containerInfo === i)
                                    return;
                                s = s.return
                            }
                        for (; c !== null;) {
                            if (s = St(c), s === null)
                                return;
                            if (l = s.tag, l === 5 || l === 6 || l === 26 || l === 27) {
                                r = a = s;
                                continue a
                            }
                            c = c.parentNode
                        }
                    }
                    r = r.return
                }
            pn(function() {
                var r = a,
                    i = cn(n),
                    s = [];
                a:
                {
                    var c = $r.get(e);
                    if (c !== void 0) {
                        var l = Dn,
                            u = e;
                        switch (e) {
                        case `keypress`:
                            if (Sn(n) === 0)
                                break a;
                        case `keydown`:
                        case `keyup`:
                            l = Gn;
                            break;
                        case `focusin`:
                            u = `focus`,
                            l = In;
                            break;
                        case `focusout`:
                            u = `blur`,
                            l = In;
                            break;
                        case `beforeblur`:
                        case `afterblur`:
                            l = In;
                            break;
                        case `click`:
                            if (n.button === 2)
                                break a;
                        case `auxclick`:
                        case `dblclick`:
                        case `mousedown`:
                        case `mousemove`:
                        case `mouseup`:
                        case `mouseout`:
                        case `mouseover`:
                        case `contextmenu`:
                            l = Pn;
                            break;
                        case `drag`:
                        case `dragend`:
                        case `dragenter`:
                        case `dragexit`:
                        case `dragleave`:
                        case `dragover`:
                        case `dragstart`:
                        case `drop`:
                            l = Fn;
                            break;
                        case `touchcancel`:
                        case `touchend`:
                        case `touchmove`:
                        case `touchstart`:
                            l = qn;
                            break;
                        case Kr:
                        case qr:
                        case Jr:
                            l = Ln;
                            break;
                        case Qr:
                            l = Jn;
                            break;
                        case `scroll`:
                        case `scrollend`:
                            l = kn;
                            break;
                        case `wheel`:
                            l = Yn;
                            break;
                        case `copy`:
                        case `cut`:
                        case `paste`:
                            l = Rn;
                            break;
                        case `gotpointercapture`:
                        case `lostpointercapture`:
                        case `pointercancel`:
                        case `pointerdown`:
                        case `pointermove`:
                        case `pointerout`:
                        case `pointerover`:
                        case `pointerup`:
                            l = Kn;
                            break;
                        case `toggle`:
                        case `beforetoggle`:
                            l = Xn
                        }
                        var d = !!(t & 4),
                            f = !d && (e === `scroll` || e === `scrollend`),
                            p = d ? c === null ? null : c + `Capture` : c;
                        d = [];
                        for (var m = r, h; m !== null;) {
                            var g = m;
                            if (h = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = mn(m, p), g != null && d.push(Y(m, g, h))), f)
                                break;
                            m = m.return
                        }
                        0 < d.length && (c = new l(c, u, null, n, i), s.push({
                            event: c,
                            listeners: d
                        }))
                    }
                }if (!(t & 7)) {
                    a:
                    {
                        if (c = e === `mouseover` || e === `pointerover`, l = e === `mouseout` || e === `pointerout`, c && n !== sn && (u = n.relatedTarget || n.fromElement) && (St(u) || u[j]))
                            break a;
                        if ((l || c) && (c = i.window === i ? i : (c = i.ownerDocument) ? c.defaultView || c.parentWindow : window, l ? (u = n.relatedTarget || n.toElement, l = r, u = u ? St(u) : null, u !== null && (f = o(u), d = u.tag, u !== f || d !== 5 && d !== 27 && d !== 6) && (u = null)) : (l = null, u = r), l !== u)) {
                            if (d = Pn, g = `onMouseLeave`, p = `onMouseEnter`, m = `mouse`, (e === `pointerout` || e === `pointerover`) && (d = Kn, g = `onPointerLeave`, p = `onPointerEnter`, m = `pointer`), f = l == null ? c : wt(l), h = u == null ? c : wt(u), c = new d(g, m + `leave`, l, n, i), c.target = f, c.relatedTarget = h, g = null, St(i) === r && (d = new d(p, m + `enter`, u, n, i), d.target = h, d.relatedTarget = f, g = d), f = g, l && u)
                                b:
                                {
                                    for (d = Ad, p = l, m = u, h = 0, g = p; g; g = d(g))
                                        h++;
                                    g = 0;
                                    for (var _ = m; _; _ = d(_))
                                        g++;
                                    for (; 0 < h - g;)
                                        p = d(p),
                                        h--;
                                    for (; 0 < g - h;)
                                        m = d(m),
                                        g--;
                                    for (; h--;) {
                                        if (p === m || m !== null && p === m.alternate) {
                                            d = p;
                                            break b
                                        }
                                        p = d(p),
                                        m = d(m)
                                    }
                                    d = null
                                } else
                                d = null;
                            l !== null && jd(s, c, l, d, !1),
                            u !== null && f !== null && jd(s, f, u, d, !0)
                        }
                    }a:
                    {
                        if (c = r ? wt(r) : window, l = c.nodeName && c.nodeName.toLowerCase(), l === `select` || l === `input` && c.type === `file`)
                            var v = gr;
                        else if (ur(c)) {
                            if (_r)
                                v = Er;
                            else {
                                v = wr;
                                var y = Cr
                            }
                        } else
                            l = c.nodeName,
                            !l || l.toLowerCase() !== `input` || c.type !== `checkbox` && c.type !== `radio` ? r && tn(r.elementType) && (v = gr) : v = Tr;
                        if (v &&= v(e, r)) {
                            dr(s, v, n, i);
                            break a
                        }
                        y && y(e, c, r),
                        e === `focusout` && r && c.type === `number` && r.memoizedProps.value != null && qt(c, `number`, c.value)
                    }switch (y = r ? wt(r) : window, e) {
                    case `focusin`:
                        (ur(y) || y.contentEditable === `true`) && (Ir = y, Lr = r, Rr = null);
                        break;
                    case `focusout`:
                        Rr = Lr = Ir = null;
                        break;
                    case `mousedown`:
                        zr = !0;
                        break;
                    case `contextmenu`:
                    case `mouseup`:
                    case `dragend`:
                        zr = !1,
                        Br(s, n, i);
                        break;
                    case `selectionchange`:
                        if (Fr)
                            break;
                    case `keydown`:
                    case `keyup`:
                        Br(s, n, i)
                    }
                    var b;
                    if (Qn)
                        b:
                        {
                            switch (e) {
                            case `compositionstart`:
                                var x = `onCompositionStart`;
                                break b;
                            case `compositionend`:
                                x = `onCompositionEnd`;
                                break b;
                            case `compositionupdate`:
                                x = `onCompositionUpdate`;
                                break b
                            }
                            x = void 0
                        } else
                        or ? ir(e, n) && (x = `onCompositionEnd`) : e === `keydown` && n.keyCode === 229 && (x = `onCompositionStart`);
                    x && (tr && n.locale !== `ko` && (or || x !== `onCompositionStart` ? x === `onCompositionEnd` && or && (b = xn()) : (vn = i, yn = `value` in vn ? vn.value : vn.textContent, or = !0)), y = kd(r, x), 0 < y.length && (x = new zn(x, e, null, n, i), s.push({
                        event: x,
                        listeners: y
                    }), b ? x.data = b : (b = ar(n), b !== null && (x.data = b)))),
                    (b = er ? sr(e, n) : cr(e, n)) && (x = kd(r, `onBeforeInput`), 0 < x.length && (y = new zn(`onBeforeInput`, `beforeinput`, null, n, i), s.push({
                        event: y,
                        listeners: x
                    }), y.data = b)),
                    vd(s, e, r, n, i)
                }
                Cd(s, t)
            })
        }
        function Y(e, t, n) {
            return {
                instance: e,
                listener: t,
                currentTarget: n
            }
        }
        function kd(e, t) {
            for (var n = t + `Capture`, r = []; e !== null;) {
                var i = e,
                    a = i.stateNode;
                if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = mn(e, n), i != null && r.unshift(Y(e, i, a)), i = mn(e, t), i != null && r.push(Y(e, i, a))), e.tag === 3)
                    return r;
                e = e.return
            }
            return []
        }
        function Ad(e) {
            if (e === null)
                return null;
            do e = e.return;
            while (e && e.tag !== 5 && e.tag !== 27);
            return e || null
        }
        function jd(e, t, n, r, i) {
            for (var a = t._reactName, o = []; n !== null && n !== r;) {
                var s = n,
                    c = s.alternate,
                    l = s.stateNode;
                if (s = s.tag, c !== null && c === r)
                    break;
                s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = mn(n, a), l != null && o.unshift(Y(n, l, c))) : i || (l = mn(n, a), l != null && o.push(Y(n, l, c)))),
                n = n.return
            }
            o.length !== 0 && e.push({
                event: t,
                listeners: o
            })
        }
        var Md = /\r\n?/g,
            Nd = /\u0000|\uFFFD/g;
        function Pd(e) {
            return (typeof e == `string` ? e : `` + e).replace(Md, `
            `).replace(Nd, ``)
        }
        function Fd(e, t) {
            return t = Pd(t), Pd(e) === t
        }
        function X(e, t, n, r, a, o) {
            switch (n) {
            case `children`:
                typeof r == `string` ? t === `body` || t === `textarea` && r === `` || Zt(e, r) : (typeof r == `number` || typeof r == `bigint`) && t !== `body` && Zt(e, `` + r);
                break;
            case `className`:
                Ft(e, `class`, r);
                break;
            case `tabIndex`:
                Ft(e, `tabindex`, r);
                break;
            case `dir`:
            case `role`:
            case `viewBox`:
            case `width`:
            case `height`:
                Ft(e, n, r);
                break;
            case `style`:
                en(e, r, o);
                break;
            case `data`:
                if (t !== `object`) {
                    Ft(e, `data`, r);
                    break
                }
            case `src`:
            case `href`:
                if (r === `` && (t !== `a` || n !== `href`)) {
                    e.removeAttribute(n);
                    break
                }
                if (r == null || typeof r == `function` || typeof r == `symbol` || typeof r == `boolean`) {
                    e.removeAttribute(n);
                    break
                }
                r = an(`` + r),
                e.setAttribute(n, r);
                break;
            case `action`:
            case `formAction`:
                if (typeof r == `function`) {
                    e.setAttribute(n, `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);
                    break
                }
                if (typeof o == `function` && (n === `formAction` ? (t !== `input` && X(e, t, `name`, a.name, a, null), X(e, t, `formEncType`, a.formEncType, a, null), X(e, t, `formMethod`, a.formMethod, a, null), X(e, t, `formTarget`, a.formTarget, a, null)) : (X(e, t, `encType`, a.encType, a, null), X(e, t, `method`, a.method, a, null), X(e, t, `target`, a.target, a, null))), r == null || typeof r == `symbol` || typeof r == `boolean`) {
                    e.removeAttribute(n);
                    break
                }
                r = an(`` + r),
                e.setAttribute(n, r);
                break;
            case `onClick`:
                r != null && (e.onclick = on);
                break;
            case `onScroll`:
                r != null && J(`scroll`, e);
                break;
            case `onScrollEnd`:
                r != null && J(`scrollend`, e);
                break;
            case `dangerouslySetInnerHTML`:
                if (r != null) {
                    if (typeof r != `object` || !(`__html` in r))
                        throw Error(i(61));
                    if (n = r.__html, n != null) {
                        if (a.children != null)
                            throw Error(i(60));
                        e.innerHTML = n
                    }
                }
                break;
            case `multiple`:
                e.multiple = r && typeof r != `function` && typeof r != `symbol`;
                break;
            case `muted`:
                e.muted = r && typeof r != `function` && typeof r != `symbol`;
                break;
            case `suppressContentEditableWarning`:
            case `suppressHydrationWarning`:
            case `defaultValue`:
            case `defaultChecked`:
            case `innerHTML`:
            case `ref`:
                break;
            case `autoFocus`:
                break;
            case `xlinkHref`:
                if (r == null || typeof r == `function` || typeof r == `boolean` || typeof r == `symbol`) {
                    e.removeAttribute(`xlink:href`);
                    break
                }
                n = an(`` + r),
                e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n);
                break;
            case `contentEditable`:
            case `spellCheck`:
            case `draggable`:
            case `value`:
            case `autoReverse`:
            case `externalResourcesRequired`:
            case `focusable`:
            case `preserveAlpha`:
                r != null && typeof r != `function` && typeof r != `symbol` ? e.setAttribute(n, `` + r) : e.removeAttribute(n);
                break;
            case `inert`:
            case `allowFullScreen`:
            case `async`:
            case `autoPlay`:
            case `controls`:
            case `default`:
            case `defer`:
            case `disabled`:
            case `disablePictureInPicture`:
            case `disableRemotePlayback`:
            case `formNoValidate`:
            case `hidden`:
            case `loop`:
            case `noModule`:
            case `noValidate`:
            case `open`:
            case `playsInline`:
            case `readOnly`:
            case `required`:
            case `reversed`:
            case `scoped`:
            case `seamless`:
            case `itemScope`:
                r && typeof r != `function` && typeof r != `symbol` ? e.setAttribute(n, ``) : e.removeAttribute(n);
                break;
            case `capture`:
            case `download`:
                !0 === r ? e.setAttribute(n, ``) : !1 !== r && r != null && typeof r != `function` && typeof r != `symbol` ? e.setAttribute(n, r) : e.removeAttribute(n);
                break;
            case `cols`:
            case `rows`:
            case `size`:
            case `span`:
                r != null && typeof r != `function` && typeof r != `symbol` && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
                break;
            case `rowSpan`:
            case `start`:
                r == null || typeof r == `function` || typeof r == `symbol` || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
                break;
            case `popover`:
                J(`beforetoggle`, e),
                J(`toggle`, e),
                M(e, `popover`, r);
                break;
            case `xlinkActuate`:
                It(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
                break;
            case `xlinkArcrole`:
                It(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
                break;
            case `xlinkRole`:
                It(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
                break;
            case `xlinkShow`:
                It(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
                break;
            case `xlinkTitle`:
                It(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
                break;
            case `xlinkType`:
                It(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
                break;
            case `xmlBase`:
                It(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
                break;
            case `xmlLang`:
                It(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
                break;
            case `xmlSpace`:
                It(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
                break;
            case `is`:
                M(e, `is`, r);
                break;
            case `innerText`:
            case `textContent`:
                break;
            default:
                (!(2 < n.length) || n[0] !== `o` && n[0] !== `O` || n[1] !== `n` && n[1] !== `N`) && (n = nn.get(n) || n, M(e, n, r))
            }
        }
        function Id(e, t, n, r, a, o) {
            switch (n) {
            case `style`:
                en(e, r, o);
                break;
            case `dangerouslySetInnerHTML`:
                if (r != null) {
                    if (typeof r != `object` || !(`__html` in r))
                        throw Error(i(61));
                    if (n = r.__html, n != null) {
                        if (a.children != null)
                            throw Error(i(60));
                        e.innerHTML = n
                    }
                }
                break;
            case `children`:
                typeof r == `string` ? Zt(e, r) : (typeof r == `number` || typeof r == `bigint`) && Zt(e, `` + r);
                break;
            case `onScroll`:
                r != null && J(`scroll`, e);
                break;
            case `onScrollEnd`:
                r != null && J(`scrollend`, e);
                break;
            case `onClick`:
                r != null && (e.onclick = on);
                break;
            case `suppressContentEditableWarning`:
            case `suppressHydrationWarning`:
            case `innerHTML`:
            case `ref`:
                break;
            case `innerText`:
            case `textContent`:
                break;
            default:
                if (!Ot.hasOwnProperty(n))
                    a:
                    {
                        if (n[0] === `o` && n[1] === `n` && (a = n.endsWith(`Capture`), t = n.slice(2, a ? n.length - 7 : void 0), o = e[ht] || null, o = o == null ? null : o[n], typeof o == `function` && e.removeEventListener(t, o, a), typeof r == `function`)) {
                            typeof o != `function` && o !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)),
                            e.addEventListener(t, r, a);
                            break a
                        }
                        n in e ? e[n] = r : !0 === r ? e.setAttribute(n, ``) : M(e, n, r)
                    }
            }
        }
        function Ld(e, t, n) {
            switch (t) {
            case `div`:
            case `span`:
            case `svg`:
            case `path`:
            case `a`:
            case `g`:
            case `p`:
            case `li`:
                break;
            case `img`:
                J(`error`, e),
                J(`load`, e);
                var r = !1,
                    a = !1,
                    o;
                for (o in n)
                    if (n.hasOwnProperty(o)) {
                        var s = n[o];
                        if (s != null)
                            switch (o) {
                            case `src`:
                                r = !0;
                                break;
                            case `srcSet`:
                                a = !0;
                                break;
                            case `children`:
                            case `dangerouslySetInnerHTML`:
                                throw Error(i(137, t));
                            default:
                                X(e, t, o, s, n, null)
                            }
                    }
                a && X(e, t, `srcSet`, n.srcSet, n, null),
                r && X(e, t, `src`, n.src, n, null);
                return;
            case `input`:
                J(`invalid`, e);
                var c = o = s = a = null,
                    l = null,
                    u = null;
                for (r in n)
                    if (n.hasOwnProperty(r)) {
                        var d = n[r];
                        if (d != null)
                            switch (r) {
                            case `name`:
                                a = d;
                                break;
                            case `type`:
                                s = d;
                                break;
                            case `checked`:
                                l = d;
                                break;
                            case `defaultChecked`:
                                u = d;
                                break;
                            case `value`:
                                o = d;
                                break;
                            case `defaultValue`:
                                c = d;
                                break;
                            case `children`:
                            case `dangerouslySetInnerHTML`:
                                if (d != null)
                                    throw Error(i(137, t));
                                break;
                            default:
                                X(e, t, r, d, n, null)
                            }
                    }
                Kt(e, o, c, l, u, s, a, !1);
                return;
            case `select`:
                for (a in J(`invalid`, e), r = s = o = null, n)
                    if (n.hasOwnProperty(a) && (c = n[a], c != null))
                        switch (a) {
                        case `value`:
                            o = c;
                            break;
                        case `defaultValue`:
                            s = c;
                            break;
                        case `multiple`:
                            r = c;
                        default:
                            X(e, t, a, c, n, null)
                        }
                t = o,
                n = s,
                e.multiple = !!r,
                t == null ? n != null && Jt(e, !!r, n, !0) : Jt(e, !!r, t, !1);
                return;
            case `textarea`:
                for (s in J(`invalid`, e), o = a = r = null, n)
                    if (n.hasOwnProperty(s) && (c = n[s], c != null))
                        switch (s) {
                        case `value`:
                            r = c;
                            break;
                        case `defaultValue`:
                            a = c;
                            break;
                        case `children`:
                            o = c;
                            break;
                        case `dangerouslySetInnerHTML`:
                            if (c != null)
                                throw Error(i(91));
                            break;
                        default:
                            X(e, t, s, c, n, null)
                        }
                Xt(e, r, a, o);
                return;
            case `option`:
                for (l in n)
                    if (n.hasOwnProperty(l) && (r = n[l], r != null))
                        switch (l) {
                        case `selected`:
                            e.selected = r && typeof r != `function` && typeof r != `symbol`;
                            break;
                        default:
                            X(e, t, l, r, n, null)
                        }
                return;
            case `dialog`:
                J(`beforetoggle`, e),
                J(`toggle`, e),
                J(`cancel`, e),
                J(`close`, e);
                break;
            case `iframe`:
            case `object`:
                J(`load`, e);
                break;
            case `video`:
            case `audio`:
                for (r = 0; r < xd.length; r++)
                    J(xd[r], e);
                break;
            case `image`:
                J(`error`, e),
                J(`load`, e);
                break;
            case `details`:
                J(`toggle`, e);
                break;
            case `embed`:
            case `source`:
            case `link`:
                J(`error`, e),
                J(`load`, e);
            case `area`:
            case `base`:
            case `br`:
            case `col`:
            case `hr`:
            case `keygen`:
            case `meta`:
            case `param`:
            case `track`:
            case `wbr`:
            case `menuitem`:
                for (u in n)
                    if (n.hasOwnProperty(u) && (r = n[u], r != null))
                        switch (u) {
                        case `children`:
                        case `dangerouslySetInnerHTML`:
                            throw Error(i(137, t));
                        default:
                            X(e, t, u, r, n, null)
                        }
                return;
            default:
                if (tn(t)) {
                    for (d in n)
                        n.hasOwnProperty(d) && (r = n[d], r !== void 0 && Id(e, t, d, r, n, void 0));
                    return
                }
            }
            for (c in n)
                n.hasOwnProperty(c) && (r = n[c], r != null && X(e, t, c, r, n, null))
        }
        function Rd(e, t, n, r) {
            switch (t) {
            case `div`:
            case `span`:
            case `svg`:
            case `path`:
            case `a`:
            case `g`:
            case `p`:
            case `li`:
                break;
            case `input`:
                var a = null,
                    o = null,
                    s = null,
                    c = null,
                    l = null,
                    u = null,
                    d = null;
                for (m in n) {
                    var f = n[m];
                    if (n.hasOwnProperty(m) && f != null)
                        switch (m) {
                        case `checked`:
                            break;
                        case `value`:
                            break;
                        case `defaultValue`:
                            l = f;
                        default:
                            r.hasOwnProperty(m) || X(e, t, m, null, r, f)
                        }
                }
                for (var p in r) {
                    var m = r[p];
                    if (f = n[p], r.hasOwnProperty(p) && (m != null || f != null))
                        switch (p) {
                        case `type`:
                            o = m;
                            break;
                        case `name`:
                            a = m;
                            break;
                        case `checked`:
                            u = m;
                            break;
                        case `defaultChecked`:
                            d = m;
                            break;
                        case `value`:
                            s = m;
                            break;
                        case `defaultValue`:
                            c = m;
                            break;
                        case `children`:
                        case `dangerouslySetInnerHTML`:
                            if (m != null)
                                throw Error(i(137, t));
                            break;
                        default:
                            m !== f && X(e, t, p, m, r, f)
                        }
                }
                Gt(e, s, c, l, u, d, o, a);
                return;
            case `select`:
                for (o in m = s = c = p = null, n)
                    if (l = n[o], n.hasOwnProperty(o) && l != null)
                        switch (o) {
                        case `value`:
                            break;
                        case `multiple`:
                            m = l;
                        default:
                            r.hasOwnProperty(o) || X(e, t, o, null, r, l)
                        }
                for (a in r)
                    if (o = r[a], l = n[a], r.hasOwnProperty(a) && (o != null || l != null))
                        switch (a) {
                        case `value`:
                            p = o;
                            break;
                        case `defaultValue`:
                            c = o;
                            break;
                        case `multiple`:
                            s = o;
                        default:
                            o !== l && X(e, t, a, o, r, l)
                        }
                t = c,
                n = s,
                r = m,
                p == null ? !!r != !!n && (t == null ? Jt(e, !!n, n ? [] : ``, !1) : Jt(e, !!n, t, !0)) : Jt(e, !!n, p, !1);
                return;
            case `textarea`:
                for (c in m = p = null, n)
                    if (a = n[c], n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c))
                        switch (c) {
                        case `value`:
                            break;
                        case `children`:
                            break;
                        default:
                            X(e, t, c, null, r, a)
                        }
                for (s in r)
                    if (a = r[s], o = n[s], r.hasOwnProperty(s) && (a != null || o != null))
                        switch (s) {
                        case `value`:
                            p = a;
                            break;
                        case `defaultValue`:
                            m = a;
                            break;
                        case `children`:
                            break;
                        case `dangerouslySetInnerHTML`:
                            if (a != null)
                                throw Error(i(91));
                            break;
                        default:
                            a !== o && X(e, t, s, a, r, o)
                        }
                Yt(e, p, m);
                return;
            case `option`:
                for (var h in n)
                    if (p = n[h], n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h))
                        switch (h) {
                        case `selected`:
                            e.selected = !1;
                            break;
                        default:
                            X(e, t, h, null, r, p)
                        }
                for (l in r)
                    if (p = r[l], m = n[l], r.hasOwnProperty(l) && p !== m && (p != null || m != null))
                        switch (l) {
                        case `selected`:
                            e.selected = p && typeof p != `function` && typeof p != `symbol`;
                            break;
                        default:
                            X(e, t, l, p, r, m)
                        }
                return;
            case `img`:
            case `link`:
            case `area`:
            case `base`:
            case `br`:
            case `col`:
            case `embed`:
            case `hr`:
            case `keygen`:
            case `meta`:
            case `param`:
            case `source`:
            case `track`:
            case `wbr`:
            case `menuitem`:
                for (var g in n)
                    p = n[g],
                    n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && X(e, t, g, null, r, p);
                for (u in r)
                    if (p = r[u], m = n[u], r.hasOwnProperty(u) && p !== m && (p != null || m != null))
                        switch (u) {
                        case `children`:
                        case `dangerouslySetInnerHTML`:
                            if (p != null)
                                throw Error(i(137, t));
                            break;
                        default:
                            X(e, t, u, p, r, m)
                        }
                return;
            default:
                if (tn(t)) {
                    for (var _ in n)
                        p = n[_],
                        n.hasOwnProperty(_) && p !== void 0 && !r.hasOwnProperty(_) && Id(e, t, _, void 0, r, p);
                    for (d in r)
                        p = r[d],
                        m = n[d],
                        !r.hasOwnProperty(d) || p === m || p === void 0 && m === void 0 || Id(e, t, d, p, r, m);
                    return
                }
            }
            for (var v in n)
                p = n[v],
                n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && X(e, t, v, null, r, p);
            for (f in r)
                p = r[f],
                m = n[f],
                !r.hasOwnProperty(f) || p === m || p == null && m == null || X(e, t, f, p, r, m)
        }
        function zd(e) {
            switch (e) {
            case `css`:
            case `script`:
            case `font`:
            case `img`:
            case `image`:
            case `input`:
            case `link`:
                return !0;
            default:
                return !1
            }
        }
        function Bd() {
            if (typeof performance.getEntriesByType == `function`) {
                for (var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0; r < n.length; r++) {
                    var i = n[r],
                        a = i.transferSize,
                        o = i.initiatorType,
                        s = i.duration;
                    if (a && s && zd(o)) {
                        for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
                            var c = n[r],
                                l = c.startTime;
                            if (l > s)
                                break;
                            var u = c.transferSize,
                                d = c.initiatorType;
                            u && zd(d) && (c = c.responseEnd, o += u * (c < s ? 1 : (s - l) / (c - l)))
                        }
                        if (--r, t += 8 * (a + o) / (i.duration / 1e3), e++, 10 < e)
                            break
                    }
                }
                if (0 < e)
                    return t / e / 1e6
            }
            return navigator.connection && (e = navigator.connection.downlink, typeof e == `number`) ? e : 5
        }
        var Vd = null,
            Hd = null;
        function Ud(e) {
            return e.nodeType === 9 ? e : e.ownerDocument
        }
        function Wd(e) {
            switch (e) {
            case `http://www.w3.org/2000/svg`:
                return 1;
            case `http://www.w3.org/1998/Math/MathML`:
                return 2;
            default:
                return 0
            }
        }
        function Gd(e, t) {
            if (e === 0)
                switch (t) {
                case `svg`:
                    return 1;
                case `math`:
                    return 2;
                default:
                    return 0
                }
            return e === 1 && t === `foreignObject` ? 0 : e
        }
        function Kd(e, t) {
            return e === `textarea` || e === `noscript` || typeof t.children == `string` || typeof t.children == `number` || typeof t.children == `bigint` || typeof t.dangerouslySetInnerHTML == `object` && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
        }
        var qd = null;
        function Jd() {
            var e = window.event;
            return e && e.type === `popstate` ? e !== qd && (qd = e, !0) : (qd = null, !1)
        }
        var Yd = typeof setTimeout == `function` ? setTimeout : void 0,
            Xd = typeof clearTimeout == `function` ? clearTimeout : void 0,
            Zd = typeof Promise == `function` ? Promise : void 0,
            Qd = typeof queueMicrotask == `function` ? queueMicrotask : Zd === void 0 ? Yd : function(e) {
                return Zd.resolve(null).then(e).catch($d)
            };
        function $d(e) {
            setTimeout(function() {
                throw e
            })
        }
        function ef(e) {
            return e === `head`
        }
        function tf(e, t) {
            var n = t,
                r = 0;
            do {
                var i = n.nextSibling;
                if (e.removeChild(n), i && i.nodeType === 8) {
                    if (n = i.data, n === `/$` || n === `/&`) {
                        if (r === 0) {
                            e.removeChild(i),
                            Np(t);
                            return
                        }
                        r--
                    } else if (n === `$` || n === `$?` || n === `$~` || n === `$!` || n === `&`)
                        r++;
                    else if (n === `html`)
                        mf(e.ownerDocument.documentElement);
                    else if (n === `head`) {
                        n = e.ownerDocument.head,
                        mf(n);
                        for (var a = n.firstChild; a;) {
                            var o = a.nextSibling,
                                s = a.nodeName;
                            a[bt] || s === `SCRIPT` || s === `STYLE` || s === `LINK` && a.rel.toLowerCase() === `stylesheet` || n.removeChild(a),
                            a = o
                        }
                    } else
                        n === `body` && mf(e.ownerDocument.body)
                }
                n = i
            } while (n);
            Np(t)
        }
        function nf(e, t) {
            var n = e;
            e = 0;
            do {
                var r = n.nextSibling;
                if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = `none`) : (n.style.display = n._stashedDisplay || ``, n.getAttribute(`style`) === `` && n.removeAttribute(`style`)) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = ``) : n.nodeValue = n._stashedText || ``), r && r.nodeType === 8) {
                    if (n = r.data, n === `/$`) {
                        if (e === 0)
                            break;
                        e--
                    } else
                        n !== `$` && n !== `$?` && n !== `$~` && n !== `$!` || e++
                }
                n = r
            } while (n)
        }
        function rf(e) {
            var t = e.firstChild;
            for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
                var n = t;
                switch (t = t.nextSibling, n.nodeName) {
                case `HTML`:
                case `HEAD`:
                case `BODY`:
                    rf(n),
                    xt(n);
                    continue;
                case `SCRIPT`:
                case `STYLE`:
                    continue;
                case `LINK`:
                    if (n.rel.toLowerCase() === `stylesheet`)
                        continue
                }
                e.removeChild(n)
            }
        }
        function af(e, t, n, r) {
            for (; e.nodeType === 1;) {
                var i = n;
                if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                    if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`))
                        break
                } else if (!r) {
                    if (t === `input` && e.type === `hidden`) {
                        var a = i.name == null ? null : `` + i.name;
                        if (i.type === `hidden` && e.getAttribute(`name`) === a)
                            return e
                    } else
                        return e
                } else if (!e[bt])
                    switch (t) {
                    case `meta`:
                        if (!e.hasAttribute(`itemprop`))
                            break;
                        return e;
                    case `link`:
                        if (a = e.getAttribute(`rel`), a === `stylesheet` && e.hasAttribute(`data-precedence`) || a !== i.rel || e.getAttribute(`href`) !== (i.href == null || i.href === `` ? null : i.href) || e.getAttribute(`crossorigin`) !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute(`title`) !== (i.title == null ? null : i.title))
                            break;
                        return e;
                    case `style`:
                        if (e.hasAttribute(`data-precedence`))
                            break;
                        return e;
                    case `script`:
                        if (a = e.getAttribute(`src`), (a !== (i.src == null ? null : i.src) || e.getAttribute(`type`) !== (i.type == null ? null : i.type) || e.getAttribute(`crossorigin`) !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute(`async`) && !e.hasAttribute(`itemprop`))
                            break;
                        return e;
                    default:
                        return e
                    }
                if (e = lf(e.nextSibling), e === null)
                    break
            }
            return null
        }
        function of(e, t, n) {
            if (t === ``)
                return null;
            for (; e.nodeType !== 3;)
                if ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !n || (e = lf(e.nextSibling), e === null))
                    return null;
            return e
        }
        function Z(e, t) {
            for (; e.nodeType !== 8;)
                if ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !t || (e = lf(e.nextSibling), e === null))
                    return null;
            return e
        }
        function Q(e) {
            return e.data === `$?` || e.data === `$~`
        }
        function sf(e) {
            return e.data === `$!` || e.data === `$?` && e.ownerDocument.readyState !== `loading`
        }
        function cf(e, t) {
            var n = e.ownerDocument;
            if (e.data === `$~`)
                e._reactRetry = t;
            else if (e.data !== `$?` || n.readyState !== `loading`)
                t();
            else {
                var r = function() {
                    t(),
                    n.removeEventListener(`DOMContentLoaded`, r)
                };
                n.addEventListener(`DOMContentLoaded`, r),
                e._reactRetry = r
            }
        }
        function lf(e) {
            for (; e != null; e = e.nextSibling) {
                var t = e.nodeType;
                if (t === 1 || t === 3)
                    break;
                if (t === 8) {
                    if (t = e.data, t === `$` || t === `$!` || t === `$?` || t === `$~` || t === `&` || t === `F!` || t === `F`)
                        break;
                    if (t === `/$` || t === `/&`)
                        return null
                }
            }
            return e
        }
        var uf = null;
        function df(e) {
            e = e.nextSibling;
            for (var t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === `/$` || n === `/&`) {
                        if (t === 0)
                            return lf(e.nextSibling);
                        t--
                    } else
                        n !== `$` && n !== `$!` && n !== `$?` && n !== `$~` && n !== `&` || t++
                }
                e = e.nextSibling
            }
            return null
        }
        function ff(e) {
            e = e.previousSibling;
            for (var t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === `$` || n === `$!` || n === `$?` || n === `$~` || n === `&`) {
                        if (t === 0)
                            return e;
                        t--
                    } else
                        n !== `/$` && n !== `/&` || t++
                }
                e = e.previousSibling
            }
            return null
        }
        function pf(e, t, n) {
            switch (t = Ud(n), e) {
            case `html`:
                if (e = t.documentElement, !e)
                    throw Error(i(452));
                return e;
            case `head`:
                if (e = t.head, !e)
                    throw Error(i(453));
                return e;
            case `body`:
                if (e = t.body, !e)
                    throw Error(i(454));
                return e;
            default:
                throw Error(i(451))
            }
        }
        function mf(e) {
            for (var t = e.attributes; t.length;)
                e.removeAttributeNode(t[0]);
            xt(e)
        }
        var hf = new Map,
            gf = new Set;
        function _f(e) {
            return typeof e.getRootNode == `function` ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
        }
        var vf = D.d;
        D.d = {
            f: yf,
            r: bf,
            D: Cf,
            C: wf,
            L: Tf,
            m: Ef,
            X: Of,
            S: Df,
            M: kf
        };
        function yf() {
            var e = vf.f(),
                t = Tu();
            return e || t
        }
        function bf(e) {
            var t = Ct(e);
            t !== null && t.tag === 5 && t.type === `form` ? Ms(t) : vf.r(e)
        }
        var xf = typeof document > `u` ? null : document;
        function Sf(e, t, n) {
            var r = xf;
            if (r && typeof t == `string` && t) {
                var i = Wt(t);
                i = `link[rel="` + e + `"][href="` + i + `"]`,
                typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
                gf.has(i) || (gf.add(i), e = {
                    rel: e,
                    crossOrigin: n,
                    href: t
                }, r.querySelector(i) === null && (t = r.createElement(`link`), Ld(t, `link`, e), Et(t), r.head.appendChild(t)))
            }
        }
        function Cf(e) {
            vf.D(e),
            Sf(`dns-prefetch`, e, null)
        }
        function wf(e, t) {
            vf.C(e, t),
            Sf(`preconnect`, e, t)
        }
        function Tf(e, t, n) {
            vf.L(e, t, n);
            var r = xf;
            if (r && e && t) {
                var i = `link[rel="preload"][as="` + Wt(t) + `"]`;
                t === `image` && n && n.imageSrcSet ? (i += `[imagesrcset="` + Wt(n.imageSrcSet) + `"]`, typeof n.imageSizes == `string` && (i += `[imagesizes="` + Wt(n.imageSizes) + `"]`)) : i += `[href="` + Wt(e) + `"]`;
                var a = i;
                switch (t) {
                case `style`:
                    a = jf(e);
                    break;
                case `script`:
                    a = Ff(e)
                }
                hf.has(a) || (e = h({
                    rel: `preload`,
                    href: t === `image` && n && n.imageSrcSet ? void 0 : e,
                    as: t
                }, n), hf.set(a, e), r.querySelector(i) !== null || t === `style` && r.querySelector(Mf(a)) || t === `script` && r.querySelector(If(a)) || (t = r.createElement(`link`), Ld(t, `link`, e), Et(t), r.head.appendChild(t)))
            }
        }
        function Ef(e, t) {
            vf.m(e, t);
            var n = xf;
            if (n && e) {
                var r = t && typeof t.as == `string` ? t.as : `script`,
                    i = `link[rel="modulepreload"][as="` + Wt(r) + `"][href="` + Wt(e) + `"]`,
                    a = i;
                switch (r) {
                case `audioworklet`:
                case `paintworklet`:
                case `serviceworker`:
                case `sharedworker`:
                case `worker`:
                case `script`:
                    a = Ff(e)
                }
                if (!hf.has(a) && (e = h({
                    rel: `modulepreload`,
                    href: e
                }, t), hf.set(a, e), n.querySelector(i) === null)) {
                    switch (r) {
                    case `audioworklet`:
                    case `paintworklet`:
                    case `serviceworker`:
                    case `sharedworker`:
                    case `worker`:
                    case `script`:
                        if (n.querySelector(If(a)))
                            return
                    }
                    r = n.createElement(`link`),
                    Ld(r, `link`, e),
                    Et(r),
                    n.head.appendChild(r)
                }
            }
        }
        function Df(e, t, n) {
            vf.S(e, t, n);
            var r = xf;
            if (r && e) {
                var i = Tt(r).hoistableStyles,
                    a = jf(e);
                t ||= `default`;
                var o = i.get(a);
                if (!o) {
                    var s = {
                        loading: 0,
                        preload: null
                    };
                    if (o = r.querySelector(Mf(a)))
                        s.loading = 5;
                    else {
                        e = h({
                            rel: `stylesheet`,
                            href: e,
                            "data-precedence": t
                        }, n),
                        (n = hf.get(a)) && zf(e, n);
                        var c = o = r.createElement(`link`);
                        Et(c),
                        Ld(c, `link`, e),
                        c._p = new Promise(function(e, t) {
                            c.onload = e,
                            c.onerror = t
                        }),
                        c.addEventListener(`load`, function() {
                            s.loading |= 1
                        }),
                        c.addEventListener(`error`, function() {
                            s.loading |= 2
                        }),
                        s.loading |= 4,
                        Rf(o, t, r)
                    }
                    o = {
                        type: `stylesheet`,
                        instance: o,
                        count: 1,
                        state: s
                    },
                    i.set(a, o)
                }
            }
        }
        function Of(e, t) {
            vf.X(e, t);
            var n = xf;
            if (n && e) {
                var r = Tt(n).hoistableScripts,
                    i = Ff(e),
                    a = r.get(i);
                a || (a = n.querySelector(If(i)), a || (e = h({
                    src: e,
                    async: !0
                }, t), (t = hf.get(i)) && Bf(e, t), a = n.createElement(`script`), Et(a), Ld(a, `link`, e), n.head.appendChild(a)), a = {
                    type: `script`,
                    instance: a,
                    count: 1,
                    state: null
                }, r.set(i, a))
            }
        }
        function kf(e, t) {
            vf.M(e, t);
            var n = xf;
            if (n && e) {
                var r = Tt(n).hoistableScripts,
                    i = Ff(e),
                    a = r.get(i);
                a || (a = n.querySelector(If(i)), a || (e = h({
                    src: e,
                    async: !0,
                    type: `module`
                }, t), (t = hf.get(i)) && Bf(e, t), a = n.createElement(`script`), Et(a), Ld(a, `link`, e), n.head.appendChild(a)), a = {
                    type: `script`,
                    instance: a,
                    count: 1,
                    state: null
                }, r.set(i, a))
            }
        }
        function Af(e, t, n, r) {
            var a = (a = _e.current) ? _f(a) : null;
            if (!a)
                throw Error(i(446));
            switch (e) {
            case `meta`:
            case `title`:
                return null;
            case `style`:
                return typeof n.precedence == `string` && typeof n.href == `string` ? (t = jf(n.href), n = Tt(a).hoistableStyles, r = n.get(t), r || (r = {
                    type: `style`,
                    instance: null,
                    count: 0,
                    state: null
                }, n.set(t, r)), r) : {
                    type: `void`,
                    instance: null,
                    count: 0,
                    state: null
                };
            case `link`:
                if (n.rel === `stylesheet` && typeof n.href == `string` && typeof n.precedence == `string`) {
                    e = jf(n.href);
                    var o = Tt(a).hoistableStyles,
                        s = o.get(e);
                    if (s || (a = a.ownerDocument || a, s = {
                        type: `stylesheet`,
                        instance: null,
                        count: 0,
                        state: {
                            loading: 0,
                            preload: null
                        }
                    }, o.set(e, s), (o = a.querySelector(Mf(e))) && !o._p && (s.instance = o, s.state.loading = 5), hf.has(e) || (n = {
                        rel: `preload`,
                        as: `style`,
                        href: n.href,
                        crossOrigin: n.crossOrigin,
                        integrity: n.integrity,
                        media: n.media,
                        hrefLang: n.hrefLang,
                        referrerPolicy: n.referrerPolicy
                    }, hf.set(e, n), o || Pf(a, e, n, s.state))), t && r === null)
                        throw Error(i(528, ``));
                    return s
                }
                if (t && r !== null)
                    throw Error(i(529, ``));
                return null;
            case `script`:
                return t = n.async, n = n.src, typeof n == `string` && t && typeof t != `function` && typeof t != `symbol` ? (t = Ff(n), n = Tt(a).hoistableScripts, r = n.get(t), r || (r = {
                    type: `script`,
                    instance: null,
                    count: 0,
                    state: null
                }, n.set(t, r)), r) : {
                    type: `void`,
                    instance: null,
                    count: 0,
                    state: null
                };
            default:
                throw Error(i(444, e))
            }
        }
        function jf(e) {
            return `href="` + Wt(e) + `"`
        }
        function Mf(e) {
            return `link[rel="stylesheet"][` + e + `]`
        }
        function Nf(e) {
            return h({}, e, {
                "data-precedence": e.precedence,
                precedence: null
            })
        }
        function Pf(e, t, n, r) {
            e.querySelector(`link[rel="preload"][as="style"][` + t + `]`) ? r.loading = 1 : (t = e.createElement(`link`), r.preload = t, t.addEventListener(`load`, function() {
                return r.loading |= 1
            }), t.addEventListener(`error`, function() {
                return r.loading |= 2
            }), Ld(t, `link`, n), Et(t), e.head.appendChild(t))
        }
        function Ff(e) {
            return `[src="` + Wt(e) + `"]`
        }
        function If(e) {
            return `script[async]` + e
        }
        function Lf(e, t, n) {
            if (t.count++, t.instance === null)
                switch (t.type) {
                case `style`:
                    var r = e.querySelector(`style[data-href~="` + Wt(n.href) + `"]`);
                    if (r)
                        return t.instance = r, Et(r), r;
                    var a = h({}, n, {
                        "data-href": n.href,
                        "data-precedence": n.precedence,
                        href: null,
                        precedence: null
                    });
                    return r = (e.ownerDocument || e).createElement(`style`), Et(r), Ld(r, `style`, a), Rf(r, n.precedence, e), t.instance = r;
                case `stylesheet`:
                    a = jf(n.href);
                    var o = e.querySelector(Mf(a));
                    if (o)
                        return t.state.loading |= 4, t.instance = o, Et(o), o;
                    r = Nf(n),
                    (a = hf.get(a)) && zf(r, a),
                    o = (e.ownerDocument || e).createElement(`link`),
                    Et(o);
                    var s = o;
                    return s._p = new Promise(function(e, t) {
                        s.onload = e,
                        s.onerror = t
                    }), Ld(o, `link`, r), t.state.loading |= 4, Rf(o, n.precedence, e), t.instance = o;
                case `script`:
                    return o = Ff(n.src), (a = e.querySelector(If(o))) ? (t.instance = a, Et(a), a) : (r = n, (a = hf.get(o)) && (r = h({}, n), Bf(r, a)), e = e.ownerDocument || e, a = e.createElement(`script`), Et(a), Ld(a, `link`, r), e.head.appendChild(a), t.instance = a);
                case `void`:
                    return null;
                default:
                    throw Error(i(443, t.type))
                }
            else
                t.type === `stylesheet` && !(t.state.loading & 4) && (r = t.instance, t.state.loading |= 4, Rf(r, n.precedence, e));
            return t.instance
        }
        function Rf(e, t, n) {
            for (var r = n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
                var s = r[o];
                if (s.dataset.precedence === t)
                    a = s;
                else if (a !== i)
                    break
            }
            a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild))
        }
        function zf(e, t) {
            e.crossOrigin ??= t.crossOrigin,
            e.referrerPolicy ??= t.referrerPolicy,
            e.title ??= t.title
        }
        function Bf(e, t) {
            e.crossOrigin ??= t.crossOrigin,
            e.referrerPolicy ??= t.referrerPolicy,
            e.integrity ??= t.integrity
        }
        var Vf = null;
        function Hf(e, t, n) {
            if (Vf === null) {
                var r = new Map,
                    i = Vf = new Map;
                i.set(n, r)
            } else
                i = Vf,
                r = i.get(n),
                r || (r = new Map, i.set(n, r));
            if (r.has(e))
                return r;
            for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
                var a = n[i];
                if (!(a[bt] || a[mt] || e === `link` && a.getAttribute(`rel`) === `stylesheet`) && a.namespaceURI !== `http://www.w3.org/2000/svg`) {
                    var o = a.getAttribute(t) || ``;
                    o = e + o;
                    var s = r.get(o);
                    s ? s.push(a) : r.set(o, [a])
                }
            }
            return r
        }
        function Uf(e, t, n) {
            e = e.ownerDocument || e,
            e.head.insertBefore(n, t === `title` ? e.querySelector(`head > title`) : null)
        }
        function Wf(e, t, n) {
            if (n === 1 || t.itemProp != null)
                return !1;
            switch (e) {
            case `meta`:
            case `title`:
                return !0;
            case `style`:
                if (typeof t.precedence != `string` || typeof t.href != `string` || t.href === ``)
                    break;
                return !0;
            case `link`:
                if (typeof t.rel != `string` || typeof t.href != `string` || t.href === `` || t.onLoad || t.onError)
                    break;
                switch (t.rel) {
                case `stylesheet`:
                    return e = t.disabled, typeof t.precedence == `string` && e == null;
                default:
                    return !0
                }
            case `script`:
                if (t.async && typeof t.async != `function` && typeof t.async != `symbol` && !t.onLoad && !t.onError && t.src && typeof t.src == `string`)
                    return !0
            }
            return !1
        }
        function Gf(e) {
            return !(e.type === `stylesheet` && !(e.state.loading & 3))
        }
        function Kf(e, t, n, r) {
            if (n.type === `stylesheet` && (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) && !(n.state.loading & 4)) {
                if (n.instance === null) {
                    var i = jf(r.href),
                        a = t.querySelector(Mf(i));
                    if (a) {
                        t = a._p,
                        typeof t == `object` && t && typeof t.then == `function` && (e.count++, e = Yf.bind(e), t.then(e, e)),
                        n.state.loading |= 4,
                        n.instance = a,
                        Et(a);
                        return
                    }
                    a = t.ownerDocument || t,
                    r = Nf(r),
                    (i = hf.get(i)) && zf(r, i),
                    a = a.createElement(`link`),
                    Et(a);
                    var o = a;
                    o._p = new Promise(function(e, t) {
                        o.onload = e,
                        o.onerror = t
                    }),
                    Ld(a, `link`, r),
                    n.instance = a
                }
                e.stylesheets === null && (e.stylesheets = new Map),
                e.stylesheets.set(n, t),
                (t = n.state.preload) && !(n.state.loading & 3) && (e.count++, n = Yf.bind(e), t.addEventListener(`load`, n), t.addEventListener(`error`, n))
            }
        }
        var qf = 0;
        function Jf(e, t) {
            return e.stylesheets && e.count === 0 && Zf(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
                var r = setTimeout(function() {
                    if (e.stylesheets && Zf(e, e.stylesheets), e.unsuspend) {
                        var t = e.unsuspend;
                        e.unsuspend = null,
                        t()
                    }
                }, 6e4 + t);
                0 < e.imgBytes && qf === 0 && (qf = 62500 * Bd());
                var i = setTimeout(function() {
                    if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Zf(e, e.stylesheets), e.unsuspend)) {
                        var t = e.unsuspend;
                        e.unsuspend = null,
                        t()
                    }
                }, (e.imgBytes > qf ? 50 : 800) + t);
                return e.unsuspend = n, function() {
                    e.unsuspend = null,
                    clearTimeout(r),
                    clearTimeout(i)
                }
            } : null
        }
        function Yf() {
            if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
                if (this.stylesheets)
                    Zf(this, this.stylesheets);
                else if (this.unsuspend) {
                    var e = this.unsuspend;
                    this.unsuspend = null,
                    e()
                }
            }
        }
        var Xf = null;
        function Zf(e, t) {
            e.stylesheets = null,
            e.unsuspend !== null && (e.count++, Xf = new Map, t.forEach(Qf, e), Xf = null, Yf.call(e))
        }
        function Qf(e, t) {
            if (!(t.state.loading & 4)) {
                var n = Xf.get(e);
                if (n)
                    var r = n.get(null);
                else {
                    n = new Map,
                    Xf.set(e, n);
                    for (var i = e.querySelectorAll(`link[data-precedence],style[data-precedence]`), a = 0; a < i.length; a++) {
                        var o = i[a];
                        (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) && (n.set(o.dataset.precedence, o), r = o)
                    }
                    r && n.set(null, r)
                }
                i = t.instance,
                o = i.getAttribute(`data-precedence`),
                a = n.get(o) || r,
                a === r && n.set(null, i),
                n.set(o, i),
                this.count++,
                r = Yf.bind(this),
                i.addEventListener(`load`, r),
                i.addEventListener(`error`, r),
                a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)),
                t.state.loading |= 4
            }
        }
        var $f = {
            $$typeof: C,
            Provider: null,
            Consumer: null,
            _currentValue: ue,
            _currentValue2: ue,
            _threadCount: 0
        };
        function ep(e, t, n, r, i, a, o, s, c) {
            this.tag = 1,
            this.containerInfo = e,
            this.pingCache = this.current = this.pendingChildren = null,
            this.timeoutHandle = -1,
            this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
            this.callbackPriority = 0,
            this.expirationTimes = it(-1),
            this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
            this.entanglements = it(0),
            this.hiddenUpdates = it(null),
            this.identifierPrefix = r,
            this.onUncaughtError = i,
            this.onCaughtError = a,
            this.onRecoverableError = o,
            this.pooledCache = null,
            this.pooledCacheLanes = 0,
            this.formState = c,
            this.incompleteTransitions = new Map
        }
        function tp(e, t, n, r, i, a, o, s, c, l, u, d) {
            return e = new ep(e, t, n, o, c, l, u, d, s), t = 1, !0 === a && (t |= 24), a = mi(3, null, null, t), e.current = a, a.stateNode = e, t = pa(), t.refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = {
                element: r,
                isDehydrated: n,
                cache: t
            }, Ga(a), e
        }
        function np(e) {
            return e ? (e = fi, e) : fi
        }
        function rp(e, t, n, r, i, a) {
            i = np(i),
            r.context === null ? r.context = i : r.pendingContext = i,
            r = qa(t),
            r.payload = {
                element: n
            },
            a = a === void 0 ? null : a,
            a !== null && (r.callback = a),
            n = Ja(e, r, t),
            n !== null && (xu(n, e, t), Ya(n, e, t))
        }
        function ip(e, t) {
            if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
                var n = e.retryLane;
                e.retryLane = n !== 0 && n < t ? n : t
            }
        }
        function ap(e, t) {
            ip(e, t),
            (e = e.alternate) && ip(e, t)
        }
        function op(e) {
            if (e.tag === 13 || e.tag === 31) {
                var t = li(e, 67108864);
                t !== null && xu(t, e, 67108864),
                ap(e, 67108864)
            }
        }
        function sp(e) {
            if (e.tag === 13 || e.tag === 31) {
                var t = yu();
                t = ut(t);
                var n = li(e, t);
                n !== null && xu(n, e, t),
                ap(e, t)
            }
        }
        var cp = !0;
        function lp(e, t, n, r) {
            var i = E.T;
            E.T = null;
            var a = D.p;
            try {
                D.p = 2,
                dp(e, t, n, r)
            } finally {
                D.p = a,
                E.T = i
            }
        }
        function up(e, t, n, r) {
            var i = E.T;
            E.T = null;
            var a = D.p;
            try {
                D.p = 8,
                dp(e, t, n, r)
            } finally {
                D.p = a,
                E.T = i
            }
        }
        function dp(e, t, n, r) {
            if (cp) {
                var i = fp(r);
                if (i === null)
                    Od(e, t, r, pp, n),
                    wp(e, r);
                else if (Ep(i, e, t, n, r))
                    r.stopPropagation();
                else if (wp(e, r), t & 4 && -1 < Cp.indexOf(e)) {
                    for (; i !== null;) {
                        var a = Ct(i);
                        if (a !== null)
                            switch (a.tag) {
                            case 3:
                                if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
                                    var o = $e(a.pendingLanes);
                                    if (o !== 0) {
                                        var s = a;
                                        for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
                                            var c = 1 << 31 - Ke(o);
                                            s.entanglements[1] |= c,
                                            o &= ~c
                                        }
                                        cd(a),
                                        !(B & 6) && (su = Fe() + 500, ld(0, !1))
                                    }
                                }
                                break;
                            case 31:
                            case 13:
                                s = li(a, 2),
                                s !== null && xu(s, a, 2),
                                Tu(),
                                ap(a, 2)
                            }
                        if (a = fp(r), a === null && Od(e, t, r, pp, n), a === i)
                            break;
                        i = a
                    }
                    i !== null && r.stopPropagation()
                } else
                    Od(e, t, r, null, n)
            }
        }
        function fp(e) {
            return e = cn(e), mp(e)
        }
        var pp = null;
        function mp(e) {
            if (pp = null, e = St(e), e !== null) {
                var t = o(e);
                if (t === null)
                    e = null;
                else {
                    var n = t.tag;
                    if (n === 13) {
                        if (e = s(t), e !== null)
                            return e;
                        e = null
                    } else if (n === 31) {
                        if (e = c(t), e !== null)
                            return e;
                        e = null
                    } else if (n === 3) {
                        if (t.stateNode.current.memoizedState.isDehydrated)
                            return t.tag === 3 ? t.stateNode.containerInfo : null;
                        e = null
                    } else
                        t !== e && (e = null)
                }
            }
            return pp = e, null
        }
        function hp(e) {
            switch (e) {
            case `beforetoggle`:
            case `cancel`:
            case `click`:
            case `close`:
            case `contextmenu`:
            case `copy`:
            case `cut`:
            case `auxclick`:
            case `dblclick`:
            case `dragend`:
            case `dragstart`:
            case `drop`:
            case `focusin`:
            case `focusout`:
            case `input`:
            case `invalid`:
            case `keydown`:
            case `keypress`:
            case `keyup`:
            case `mousedown`:
            case `mouseup`:
            case `paste`:
            case `pause`:
            case `play`:
            case `pointercancel`:
            case `pointerdown`:
            case `pointerup`:
            case `ratechange`:
            case `reset`:
            case `resize`:
            case `seeked`:
            case `submit`:
            case `toggle`:
            case `touchcancel`:
            case `touchend`:
            case `touchstart`:
            case `volumechange`:
            case `change`:
            case `selectionchange`:
            case `textInput`:
            case `compositionstart`:
            case `compositionend`:
            case `compositionupdate`:
            case `beforeblur`:
            case `afterblur`:
            case `beforeinput`:
            case `blur`:
            case `fullscreenchange`:
            case `focus`:
            case `hashchange`:
            case `popstate`:
            case `select`:
            case `selectstart`:
                return 2;
            case `drag`:
            case `dragenter`:
            case `dragexit`:
            case `dragleave`:
            case `dragover`:
            case `mousemove`:
            case `mouseout`:
            case `mouseover`:
            case `pointermove`:
            case `pointerout`:
            case `pointerover`:
            case `scroll`:
            case `touchmove`:
            case `wheel`:
            case `mouseenter`:
            case `mouseleave`:
            case `pointerenter`:
            case `pointerleave`:
                return 8;
            case `message`:
                switch (Ie()) {
                case k:
                    return 2;
                case Le:
                    return 8;
                case Re:
                case ze:
                    return 32;
                case Be:
                    return 268435456;
                default:
                    return 32
                }
            default:
                return 32
            }
        }
        var gp = !1,
            _p = null,
            vp = null,
            yp = null,
            bp = new Map,
            xp = new Map,
            Sp = [],
            Cp = `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);
        function wp(e, t) {
            switch (e) {
            case `focusin`:
            case `focusout`:
                _p = null;
                break;
            case `dragenter`:
            case `dragleave`:
                vp = null;
                break;
            case `mouseover`:
            case `mouseout`:
                yp = null;
                break;
            case `pointerover`:
            case `pointerout`:
                bp.delete(t.pointerId);
                break;
            case `gotpointercapture`:
            case `lostpointercapture`:
                xp.delete(t.pointerId)
            }
        }
        function Tp(e, t, n, r, i, a) {
            return e === null || e.nativeEvent !== a ? (e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [i]
            }, t !== null && (t = Ct(t), t !== null && op(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
        }
        function Ep(e, t, n, r, i) {
            switch (t) {
            case `focusin`:
                return _p = Tp(_p, e, t, n, r, i), !0;
            case `dragenter`:
                return vp = Tp(vp, e, t, n, r, i), !0;
            case `mouseover`:
                return yp = Tp(yp, e, t, n, r, i), !0;
            case `pointerover`:
                var a = i.pointerId;
                return bp.set(a, Tp(bp.get(a) || null, e, t, n, r, i)), !0;
            case `gotpointercapture`:
                return a = i.pointerId, xp.set(a, Tp(xp.get(a) || null, e, t, n, r, i)), !0
            }
            return !1
        }
        function Dp(e) {
            var t = St(e.target);
            if (t !== null) {
                var n = o(t);
                if (n !== null) {
                    if (t = n.tag, t === 13) {
                        if (t = s(n), t !== null) {
                            e.blockedOn = t,
                            ft(e.priority, function() {
                                sp(n)
                            });
                            return
                        }
                    } else if (t === 31) {
                        if (t = c(n), t !== null) {
                            e.blockedOn = t,
                            ft(e.priority, function() {
                                sp(n)
                            });
                            return
                        }
                    } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                        return
                    }
                }
            }
            e.blockedOn = null
        }
        function Op(e) {
            if (e.blockedOn !== null)
                return !1;
            for (var t = e.targetContainers; 0 < t.length;) {
                var n = fp(e.nativeEvent);
                if (n === null) {
                    n = e.nativeEvent;
                    var r = new n.constructor(n.type, n);
                    sn = r,
                    n.target.dispatchEvent(r),
                    sn = null
                } else
                    return t = Ct(n), t !== null && op(t), e.blockedOn = n, !1;
                t.shift()
            }
            return !0
        }
        function kp(e, t, n) {
            Op(e) && n.delete(t)
        }
        function Ap() {
            gp = !1,
            _p !== null && Op(_p) && (_p = null),
            vp !== null && Op(vp) && (vp = null),
            yp !== null && Op(yp) && (yp = null),
            bp.forEach(kp),
            xp.forEach(kp)
        }
        function $(e, n) {
            e.blockedOn === n && (e.blockedOn = null, gp || (gp = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, Ap)))
        }
        var jp = null;
        function Mp(e) {
            jp !== e && (jp = e, t.unstable_scheduleCallback(t.unstable_NormalPriority, function() {
                jp === e && (jp = null);
                for (var t = 0; t < e.length; t += 3) {
                    var n = e[t],
                        r = e[t + 1],
                        i = e[t + 2];
                    if (typeof r != `function`) {
                        if (mp(r || n) === null)
                            continue;
                        break
                    }
                    var a = Ct(n);
                    a !== null && (e.splice(t, 3), t -= 3, As(a, {
                        pending: !0,
                        data: i,
                        method: n.method,
                        action: r
                    }, r, i))
                }
            }))
        }
        function Np(e) {
            function t(t) {
                return $(t, e)
            }
            _p !== null && $(_p, e),
            vp !== null && $(vp, e),
            yp !== null && $(yp, e),
            bp.forEach(t),
            xp.forEach(t);
            for (var n = 0; n < Sp.length; n++) {
                var r = Sp[n];
                r.blockedOn === e && (r.blockedOn = null)
            }
            for (; 0 < Sp.length && (n = Sp[0], n.blockedOn === null);)
                Dp(n),
                n.blockedOn === null && Sp.shift();
            if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
                for (r = 0; r < n.length; r += 3) {
                    var i = n[r],
                        a = n[r + 1],
                        o = i[ht] || null;
                    if (typeof a == `function`)
                        o || Mp(n);
                    else if (o) {
                        var s = null;
                        if (a && a.hasAttribute(`formAction`)) {
                            if (i = a, o = a[ht] || null)
                                s = o.formAction;
                            else if (mp(i) !== null)
                                continue
                        } else
                            s = o.action;
                        typeof s == `function` ? n[r + 1] = s : (n.splice(r, 3), r -= 3),
                        Mp(n)
                    }
                }
        }
        function Pp() {
            function e(e) {
                e.canIntercept && e.info === `react-transition` && e.intercept({
                    handler: function() {
                        return new Promise(function(e) {
                            return i = e
                        })
                    },
                    focusReset: `manual`,
                    scroll: `manual`
                })
            }
            function t() {
                i !== null && (i(), i = null),
                r || setTimeout(n, 20)
            }
            function n() {
                if (!r && !navigation.transition) {
                    var e = navigation.currentEntry;
                    e && e.url != null && navigation.navigate(e.url, {
                        state: e.getState(),
                        info: `react-transition`,
                        history: `replace`
                    })
                }
            }
            if (typeof navigation == `object`) {
                var r = !1,
                    i = null;
                return navigation.addEventListener(`navigate`, e), navigation.addEventListener(`navigatesuccess`, t), navigation.addEventListener(`navigateerror`, t), setTimeout(n, 100), function() {
                    r = !0,
                    navigation.removeEventListener(`navigate`, e),
                    navigation.removeEventListener(`navigatesuccess`, t),
                    navigation.removeEventListener(`navigateerror`, t),
                    i !== null && (i(), i = null)
                }
            }
        }
        function Fp(e) {
            this._internalRoot = e
        }
        Ip.prototype.render = Fp.prototype.render = function(e) {
            var t = this._internalRoot;
            if (t === null)
                throw Error(i(409));
            var n = t.current;
            rp(n, yu(), e, t, null, null)
        },
        Ip.prototype.unmount = Fp.prototype.unmount = function() {
            var e = this._internalRoot;
            if (e !== null) {
                this._internalRoot = null;
                var t = e.containerInfo;
                rp(e.current, 2, null, e, null, null),
                Tu(),
                t[j] = null
            }
        };
        function Ip(e) {
            this._internalRoot = e
        }
        Ip.prototype.unstable_scheduleHydration = function(e) {
            if (e) {
                var t = A();
                e = {
                    blockedOn: null,
                    target: e,
                    priority: t
                };
                for (var n = 0; n < Sp.length && t !== 0 && t < Sp[n].priority; n++)
                    ;
                Sp.splice(n, 0, e),
                n === 0 && Dp(e)
            }
        };
        var Lp = n.version;
        if (Lp !== `19.2.8`)
            throw Error(i(527, Lp, `19.2.8`));
        D.findDOMNode = function(e) {
            var t = e._reactInternals;
            if (t === void 0)
                throw typeof e.render == `function` ? Error(i(188)) : (e = Object.keys(e).join(`,`), Error(i(268, e)));
            return e = d(t), e = e === null ? null : p(e), e = e === null ? null : e.stateNode, e
        };
        var Rp = {
            bundleType: 0,
            version: `19.2.8`,
            rendererPackageName: `react-dom`,
            currentDispatcherRef: E,
            reconcilerVersion: `19.2.8`
        };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
            var zp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!zp.isDisabled && zp.supportsFiber)
                try {
                    Ue = zp.inject(Rp),
                    We = zp
                } catch {}
        }
        e.createRoot = function(e, t) {
            if (!a(e))
                throw Error(i(299));
            var n = !1,
                r = ``,
                o = $s,
                s = ec,
                c = tc;
            return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = tp(e, 1, !1, null, null, n, r, null, o, s, c, Pp), e[j] = t.current, Ed(e), new Fp(t)
        }
    })),
    g = o(((e, t) => {
        function n() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`))
                try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
                } catch (e) {
                    console.error(e)
                }
        }
        n(),
        t.exports = h()
    })),
    _ = c(u(), 1),
    v = g(),
    y = o((e => {
        var t = Symbol.for(`react.transitional.element`),
            n = Symbol.for(`react.fragment`);
        function r(e, n, r) {
            var i = null;
            if (r !== void 0 && (i = `` + r), n.key !== void 0 && (i = `` + n.key), `key` in n)
                for (var a in r = {}, n)
                    a !== `key` && (r[a] = n[a]);
            else
                r = n;
            return n = r.ref, {
                $$typeof: t,
                type: e,
                key: i,
                ref: n === void 0 ? null : n,
                props: r
            }
        }
        e.Fragment = n,
        e.jsx = r,
        e.jsxs = r
    })),
    b = o(((e, t) => {
        t.exports = y()
    })),
    x = (0, _.createContext)({});
function S(e) {
    let t = (0, _.useRef)(null);
    return t.current === null && (t.current = e()), t.current
}
var C = typeof window < `u` ? _.useLayoutEffect : _.useEffect,
    w = (0, _.createContext)(null);
function ee(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function te(e, t) {
    let n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
var ne = (e, t, n) => n > t ? t : n < e ? e : n,
    T = {},
    re = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
    ie = e => typeof e == `object` && !!e,
    ae = e => /^0[^.\s]+$/u.test(e);
function oe(e) {
    let t;
    return () => (t === void 0 && (t = e()), t)
}
var se = e => e,
    ce = (...e) => e.reduce((e, t) => n => t(e(n))),
    le = (e, t, n) => {
        let r = t - e;
        return r ? (n - e) / r : 1
    },
    E = class {
        constructor()
        {
            this.subscriptions = []
        }
        add(e)
        {
            return ee(this.subscriptions, e), () => te(this.subscriptions, e)
        }
        notify(e, t, n)
        {
            let r = this.subscriptions.length;
            if (r) {
                if (r === 1)
                    this.subscriptions[0](e, t, n);
                else
                    for (let i = 0; i < r; i++) {
                        let r = this.subscriptions[i];
                        r && r(e, t, n)
                    }
            }
        }
        getSize()
        {
            return this.subscriptions.length
        }
        clear()
        {
            this.subscriptions.length = 0
        }
    }
    ,
    D = e => e * 1e3,
    ue = e => e / 1e3,
    de = (e, t) => t ? 1e3 / t * e : 0,
    fe = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
    pe = 1e-7,
    me = 12;
function O(e, t, n, r, i) {
    let a,
        o,
        s = 0;
    do o = t + (n - t) / 2,
    a = fe(o, r, i) - e,
    a > 0 ? n = o : t = o;
    while (Math.abs(a) > pe && ++s < me);
    return o
}
function he(e, t, n, r) {
    if (e === t && n === r)
        return se;
    let i = t => O(t, 0, 1, e, n);
    return e => e === 0 || e === 1 ? e : fe(i(e), t, r)
}
var ge = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    _e = e => t => 1 - e(1 - t),
    ve = he(.33, 1.53, .69, .99),
    ye = _e(ve),
    be = ge(ye),
    xe = e => e >= 1 ? 1 : (e *= 2) < 1 ? .5 * ye(e) : .5 * (2 - 2 ** (-10 * (e - 1))),
    Se = e => 1 - Math.sin(Math.acos(e)),
    Ce = _e(Se),
    we = ge(Se),
    Te = he(.42, 0, 1, 1),
    Ee = he(0, 0, .58, 1),
    De = he(.42, 0, .58, 1),
    Oe = e => Array.isArray(e) && typeof e[0] != `number`,
    ke = e => Array.isArray(e) && typeof e[0] == `number`,
    Ae = {
        linear: se,
        easeIn: Te,
        easeInOut: De,
        easeOut: Ee,
        circIn: Se,
        circInOut: we,
        circOut: Ce,
        backIn: ye,
        backInOut: be,
        backOut: ve,
        anticipate: xe
    },
    je = e => typeof e == `string`,
    Me = e => {
        if (ke(e)) {
            e.length;
            let [t, n, r, i] = e;
            return he(t, n, r, i)
        }
        return je(e) ? (Ae[e], `${e}`, Ae[e]) : e
    },
    Ne = [`setup`, `read`, `resolveKeyframes`, `preUpdate`, `update`, `preRender`, `render`, `postRender`];
function Pe(e) {
    let t = new Set,
        n = new Set,
        r = !1,
        i = !1,
        a = new WeakSet,
        o = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        };
    function s(t) {
        a.has(t) && (c.schedule(t), e()),
        t(o)
    }
    let c = {
        schedule: (e, i=!1, o=!1) => {
            let s = o && r ? t : n;
            return i && a.add(e), s.add(e), e
        },
        cancel: e => {
            n.delete(e),
            a.delete(e)
        },
        process: e => {
            if (o = e, r) {
                i = !0;
                return
            }
            r = !0;
            let a = t;
            t = n,
            n = a,
            t.forEach(s),
            t.clear(),
            r = !1,
            i && (i = !1, c.process(e))
        }
    };
    return c
}
var Fe = 40;
function Ie(e, t) {
    let n = !1,
        r = !0,
        i = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        a = () => n = !0,
        o = Ne.reduce((e, t) => (e[t] = Pe(a), e), {}),
        {setup: s, read: c, resolveKeyframes: l, preUpdate: u, update: d, preRender: f, render: p, postRender: m} = o,
        h = () => {
            let a = T.useManualTiming,
                o = a ? i.timestamp : performance.now();
            n = !1,
            a || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(o - i.timestamp, Fe), 1)),
            i.timestamp = o,
            i.isProcessing = !0,
            s.process(i),
            c.process(i),
            l.process(i),
            u.process(i),
            d.process(i),
            f.process(i),
            p.process(i),
            m.process(i),
            i.isProcessing = !1,
            n && t && (r = !1, e(h))
        },
        g = () => {
            n = !0,
            r = !0,
            i.isProcessing || e(h)
        };
    return {
        schedule: Ne.reduce((e, t) => {
            let r = o[t];
            return e[t] = (e, t=!1, i=!1) => (n || g(), r.schedule(e, t, i)), e
        }, {}),
        cancel: e => {
            for (let t = 0; t < Ne.length; t++)
                o[Ne[t]].cancel(e)
        },
        state: i,
        steps: o
    }
}
var {schedule: k, cancel: Le, state: Re, steps: ze} = Ie(typeof requestAnimationFrame < `u` ? requestAnimationFrame : se, !0),
    Be;
function Ve() {
    Be = void 0
}
var He = {
        now: () => (Be === void 0 && He.set(Re.isProcessing || T.useManualTiming ? Re.timestamp : performance.now()), Be),
        set: e => {
            Be = e,
            queueMicrotask(Ve)
        }
    },
    Ue = e => t => typeof t == `string` && t.startsWith(e),
    We = Ue(`--`),
    Ge = Ue(`var(--`),
    Ke = e => Ge(e) ? qe.test(e.split(`/*`)[0].trim()) : !1,
    qe = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Je(e) {
    return typeof e == `string` && e.split(`/*`)[0].includes(`var(--`)
}
var Ye = {
        test: e => typeof e == `number`,
        parse: parseFloat,
        transform: e => e
    },
    Xe = {
        ...Ye,
        transform: e => ne(0, 1, e)
    },
    Ze = {
        ...Ye,
        default: 1
    },
    Qe = e => Math.round(e * 1e5) / 1e5,
    $e = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function et(e) {
    return e == null
}
var tt = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    nt = (e, t) => n => !!(typeof n == `string` && tt.test(n) && n.startsWith(e) || t && !et(n) && Object.prototype.hasOwnProperty.call(n, t)),
    rt = (e, t, n) => r => {
        if (typeof r != `string`)
            return r;
        let [i, a, o, s] = r.match($e);
        return {
            [e]: parseFloat(i),
            [t]: parseFloat(a),
            [n]: parseFloat(o),
            alpha: s === void 0 ? 1 : parseFloat(s)
        }
    },
    it = e => ne(0, 255, e),
    at = {
        ...Ye,
        transform: e => Math.round(it(e))
    },
    ot = {
        test: nt(`rgb`, `red`),
        parse: rt(`red`, `green`, `blue`),
        transform: ({red: e, green: t, blue: n, alpha: r=1}) => `rgba(` + at.transform(e) + `, ` + at.transform(t) + `, ` + at.transform(n) + `, ` + Qe(Xe.transform(r)) + `)`
    };
function st(e) {
    let t = ``,
        n = ``,
        r = ``,
        i = ``;
    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
var ct = {
        test: nt(`#`),
        parse: st,
        transform: ot.transform
    },
    lt = e => ({
        test: t => typeof t == `string` && t.endsWith(e) && t.split(` `).length === 1,
        parse: parseFloat,
        transform: t => `${t}${e}`
    }),
    ut = lt(`deg`),
    dt = lt(`%`),
    A = lt(`px`),
    ft = lt(`vh`),
    pt = lt(`vw`),
    mt = {
        ...dt,
        parse: e => dt.parse(e) / 100,
        transform: e => dt.transform(e * 100)
    },
    ht = {
        test: nt(`hsl`, `hue`),
        parse: rt(`hue`, `saturation`, `lightness`),
        transform: ({hue: e, saturation: t, lightness: n, alpha: r=1}) => `hsla(` + Math.round(e) + `, ` + dt.transform(Qe(t)) + `, ` + dt.transform(Qe(n)) + `, ` + Qe(Xe.transform(r)) + `)`
    },
    j = {
        test: e => ot.test(e) || ct.test(e) || ht.test(e),
        parse: e => ot.test(e) ? ot.parse(e) : ht.test(e) ? ht.parse(e) : ct.parse(e),
        transform: e => typeof e == `string` ? e : e.hasOwnProperty(`red`) ? ot.transform(e) : ht.transform(e),
        getAnimatableNone: e => {
            let t = j.parse(e);
            return t.alpha = 0, j.transform(t)
        }
    },
    gt = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function _t(e) {
    return isNaN(e) && typeof e == `string` && (e.match($e)?.length || 0) + (e.match(gt)?.length || 0) > 0
}
var vt = `number`,
    yt = `color`,
    bt = `var`,
    xt = `var(`,
    St = "${}",
    Ct = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function wt(e) {
    let t = e.toString(),
        n = [],
        r = {
            color: [],
            number: [],
            var: []
        },
        i = [],
        a = 0;
    return {
        values: n,
        split: t.replace(Ct, e => (j.test(e) ? (r.color.push(a), i.push(yt), n.push(j.parse(e))) : e.startsWith(xt) ? (r.var.push(a), i.push(bt), n.push(e)) : (r.number.push(a), i.push(vt), n.push(parseFloat(e))), ++a, St)).split(St),
        indexes: r,
        types: i
    }
}
function Tt(e) {
    return wt(e).values
}
function Et({split: e, types: t}) {
    let n = e.length;
    return r => {
        let i = ``;
        for (let a = 0; a < n; a++)
            if (i += e[a], r[a] !== void 0) {
                let e = t[a];
                i += e === vt ? Qe(r[a]) : e === yt ? j.transform(r[a]) : r[a]
            }
        return i
    }
}
function Dt(e) {
    return Et(wt(e))
}
var Ot = e => typeof e == `number` ? 0 : j.test(e) ? j.getAnimatableNone(e) : e,
    kt = (e, t) => typeof e == `number` ? t?.trim().endsWith(`/`) ? e : 0 : Ot(e);
function At(e) {
    let t = wt(e);
    return Et(t)(t.values.map((e, n) => kt(e, t.split[n])))
}
var jt = {
    test: _t,
    parse: Tt,
    createTransformer: Dt,
    getAnimatableNone: At
};
function Mt(e, t, n) {
    return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function Nt({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let i = 0,
        a = 0,
        o = 0;
    if (!t)
        i = a = o = n;
    else {
        let r = n < .5 ? n * (1 + t) : n + t - n * t,
            s = 2 * n - r;
        i = Mt(s, r, e + 1 / 3),
        a = Mt(s, r, e),
        o = Mt(s, r, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(a * 255),
        blue: Math.round(o * 255),
        alpha: r
    }
}
function Pt(e, t) {
    return n => n > 0 ? t : e
}
var M = (e, t, n) => e + (t - e) * n,
    Ft = (e, t, n) => {
        let r = e * e,
            i = n * (t * t - r) + r;
        return i < 0 ? 0 : Math.sqrt(i)
    },
    It = [ct, ot, ht],
    Lt = e => It.find(t => t.test(e));
function Rt(e) {
    let t = Lt(e);
    if (`${e}`, !t)
        return !1;
    let n = t.parse(e);
    return t === ht && (n = Nt(n)), n
}
var zt = (e, t) => {
        let n = Rt(e),
            r = Rt(t);
        if (!n || !r)
            return Pt(e, t);
        let i = {
            ...n
        };
        return e => (i.red = Ft(n.red, r.red, e), i.green = Ft(n.green, r.green, e), i.blue = Ft(n.blue, r.blue, e), i.alpha = M(n.alpha, r.alpha, e), ot.transform(i))
    },
    Bt = new Set([`none`, `hidden`]);
function Vt(e, t) {
    return Bt.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}
function Ht(e, t) {
    return n => M(e, t, n)
}
function Ut(e) {
    return typeof e == `number` ? Ht : typeof e == `string` ? Ke(e) ? Pt : j.test(e) ? zt : qt : Array.isArray(e) ? Wt : typeof e == `object` ? j.test(e) ? zt : Gt : Pt
}
function Wt(e, t) {
    let n = [...e],
        r = n.length,
        i = e.map((e, n) => Ut(e)(e, t[n]));
    return e => {
        for (let t = 0; t < r; t++)
            n[t] = i[t](e);
        return n
    }
}
function Gt(e, t) {
    let n = {
            ...e,
            ...t
        },
        r = {};
    for (let i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = Ut(e[i])(e[i], t[i]));
    return e => {
        for (let t in r)
            n[t] = r[t](e);
        return n
    }
}
function Kt(e, t) {
    let n = [],
        r = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let i = 0; i < t.values.length; i++) {
        let a = t.types[i],
            o = e.indexes[a][r[a]],
            s = e.values[o] ?? 0;
        n[i] = s,
        r[a]++
    }
    return n
}
var qt = (e, t) => {
    let n = jt.createTransformer(t),
        r = wt(e),
        i = wt(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Bt.has(e) && !i.values.length || Bt.has(t) && !r.values.length ? Vt(e, t) : ce(Wt(Kt(r, i), i.values), n) : (`${e}${t}`, Pt(e, t))
};
function Jt(e, t, n) {
    return typeof e == `number` && typeof t == `number` && typeof n == `number` ? M(e, t, n) : Ut(e)(e, t)
}
var Yt = e => {
        let t = ({timestamp: t}) => e(t);
        return {
            start: (e=!0) => k.update(t, e),
            stop: () => Le(t),
            now: () => Re.isProcessing ? Re.timestamp : He.now()
        }
    },
    Xt = (e, t, n=10) => {
        let r = ``,
            i = Math.max(Math.round(t / n), 2);
        for (let t = 0; t < i; t++)
            r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + `, `;
        return `linear(${r.substring(0, r.length - 2)})`
    },
    Zt = 2e4;
function Qt(e) {
    let t = 0,
        n = e.next(t);
    for (; !n.done && t < 2e4;)
        t += 50,
        n = e.next(t);
    return t >= 2e4 ? 1 / 0 : t
}
function $t(e, t=100, n) {
    let r = n({
            ...e,
            keyframes: [0, t]
        }),
        i = Math.min(Qt(r), Zt);
    return {
        type: `keyframes`,
        ease: e => r.next(i * e).value / t,
        duration: ue(i)
    }
}
var en = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
};
function tn(e, t) {
    return e * Math.sqrt(1 - t * t)
}
var nn = 12;
function rn(e, t, n) {
    let r = n;
    for (let n = 1; n < nn; n++)
        r -= e(r) / t(r);
    return r
}
var an = .001;
function on({duration: e=en.duration, bounce: t=en.bounce, velocity: n=en.velocity, mass: r=en.mass}) {
    let i,
        a;
    en.maxDuration;
    let o = 1 - t;
    o = ne(en.minDamping, en.maxDamping, o),
    e = ne(en.minDuration, en.maxDuration, ue(e)),
    o < 1 ? (i = t => {
        let r = t * o,
            i = r * e,
            a = r - n,
            s = tn(t, o),
            c = Math.exp(-i);
        return an - a / s * c
    }, a = t => {
        let r = t * o * e,
            a = r * n + n,
            s = o ** 2 * t ** 2 * e,
            c = Math.exp(-r),
            l = tn(t ** 2, o);
        return (-i(t) + an > 0 ? -1 : 1) * ((a - s) * c) / l
    }) : (i = t => -.001 + Math.exp(-t * e) * ((t - n) * e + 1), a = t => Math.exp(-t * e) * ((n - t) * (e * e)));
    let s = 5 / e,
        c = rn(i, a, s);
    if (e = D(e), isNaN(c))
        return {
            stiffness: en.stiffness,
            damping: en.damping,
            duration: e
        };
    {
        let t = c ** 2 * r;
        return {
            stiffness: t,
            damping: o * 2 * Math.sqrt(r * t),
            duration: e
        }
    }
}
var sn = [`duration`, `bounce`],
    cn = [`stiffness`, `damping`, `mass`];
function ln(e, t) {
    return t.some(t => e[t] !== void 0)
}
function un(e) {
    let t = {
        velocity: en.velocity,
        stiffness: en.stiffness,
        damping: en.damping,
        mass: en.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!ln(e, cn) && ln(e, sn)) {
        if (t.velocity = 0, e.visualDuration) {
            let n = e.visualDuration,
                r = 2 * Math.PI / (n * 1.2),
                i = r * r,
                a = 2 * ne(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
            t = {
                ...t,
                mass: en.mass,
                stiffness: i,
                damping: a
            }
        } else {
            let n = on({
                ...e,
                velocity: 0
            });
            t = {
                ...t,
                ...n,
                mass: en.mass
            },
            t.isResolvedFromDuration = !0
        }
    }
    return t
}
function dn(e=en.visualDuration, t=en.bounce) {
    let n = typeof e == `object` ? e : {
            visualDuration: e,
            keyframes: [0, 1],
            bounce: t
        },
        {restSpeed: r, restDelta: i} = n,
        a = n.keyframes[0],
        o = n.keyframes[n.keyframes.length - 1],
        s = {
            done: !1,
            value: a
        },
        {stiffness: c, damping: l, mass: u, duration: d, velocity: f, isResolvedFromDuration: p} = un({
            ...n,
            velocity: -ue(n.velocity || 0)
        }),
        m = f || 0,
        h = l / (2 * Math.sqrt(c * u)),
        g = o - a,
        _ = ue(Math.sqrt(c / u)),
        v = Math.abs(g) < 5;
    r ||= v ? en.restSpeed.granular : en.restSpeed.default,
    i ||= v ? en.restDelta.granular : en.restDelta.default;
    let y,
        b,
        x,
        S,
        C,
        w;
    if (h < 1)
        x = tn(_, h),
        S = (m + h * _ * g) / x,
        y = e => {
            let t = Math.exp(-h * _ * e);
            return o - t * (S * Math.sin(x * e) + g * Math.cos(x * e))
        },
        C = h * _ * S + g * x,
        w = h * _ * g - S * x,
        b = e => Math.exp(-h * _ * e) * (C * Math.sin(x * e) + w * Math.cos(x * e));
    else if (h === 1) {
        y = e => o - Math.exp(-_ * e) * (g + (m + _ * g) * e);
        let e = m + _ * g;
        b = t => Math.exp(-_ * t) * (_ * e * t - m)
    } else {
        let e = _ * Math.sqrt(h * h - 1);
        y = t => {
            let n = Math.exp(-h * _ * t),
                r = Math.min(e * t, 300);
            return o - n * ((m + h * _ * g) * Math.sinh(r) + e * g * Math.cosh(r)) / e
        };
        let t = (m + h * _ * g) / e,
            n = h * _ * t - g * e,
            r = h * _ * g - t * e;
        b = t => {
            let i = Math.exp(-h * _ * t),
                a = Math.min(e * t, 300);
            return i * (n * Math.sinh(a) + r * Math.cosh(a))
        }
    }
    let ee = {
        calculatedDuration: p && d || null,
        velocity: e => D(b(e)),
        next: e => {
            if (!p && h < 1) {
                let t = Math.exp(-h * _ * e),
                    n = Math.sin(x * e),
                    a = Math.cos(x * e),
                    c = o - t * (S * n + g * a),
                    l = D(t * (C * n + w * a));
                return s.done = Math.abs(l) <= r && Math.abs(o - c) <= i, s.value = s.done ? o : c, s
            }
            let t = y(e);
            if (p)
                s.done = e >= d;
            else {
                let n = D(b(e));
                s.done = Math.abs(n) <= r && Math.abs(o - t) <= i
            }
            return s.value = s.done ? o : t, s
        },
        toString: () => {
            let e = Math.min(Qt(ee), Zt),
                t = Xt(t => ee.next(e * t).value, e, 30);
            return e + `ms ` + t
        },
        toTransition: () => {}
    };
    return ee
}
dn.applyToOptions = e => {
    let t = $t(e, 100, dn);
    return e.ease = t.ease, e.duration = D(t.duration), e.type = `keyframes`, e
};
var fn = 5;
function pn(e, t, n) {
    let r = Math.max(t - fn, 0);
    return de(n - e(r), t - r)
}
function mn({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: i=10, bounceStiffness: a=500, modifyTarget: o, min: s, max: c, restDelta: l=.5, restSpeed: u}) {
    let d = e[0],
        f = {
            done: !1,
            value: d
        },
        p = e => s !== void 0 && e < s || c !== void 0 && e > c,
        m = e => s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c,
        h = n * t,
        g = d + h,
        _ = o === void 0 ? g : o(g);
    _ !== g && (h = _ - d);
    let v = e => -h * Math.exp(-e / r),
        y = e => _ + v(e),
        b = e => {
            let t = v(e),
                n = y(e);
            f.done = Math.abs(t) <= l,
            f.value = f.done ? _ : n
        },
        x,
        S,
        C = e => {
            p(f.value) && (x = e, S = dn({
                keyframes: [f.value, m(f.value)],
                velocity: pn(y, e, f.value),
                damping: i,
                stiffness: a,
                restDelta: l,
                restSpeed: u
            }))
        };
    return C(0), {
        calculatedDuration: null,
        next: e => {
            let t = !1;
            return !S && x === void 0 && (t = !0, b(e), C(e)), x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f)
        }
    }
}
function hn(e, t, n) {
    let r = [],
        i = n || T.mix || Jt,
        a = e.length - 1;
    for (let n = 0; n < a; n++) {
        let a = i(e[n], e[n + 1]);
        t && (a = ce(Array.isArray(t) ? t[n] || se : t, a)),
        r.push(a)
    }
    return r
}
function gn(e, t, {clamp: n=!0, ease: r, mixer: i}={}) {
    let a = e.length;
    if (t.length, a === 1)
        return () => t[0];
    if (a === 2 && t[0] === t[1])
        return () => t[1];
    let o = e[0] === e[1];
    e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
    let s = hn(t, r, i),
        c = s.length,
        l = n => {
            if (o && n < e[0])
                return t[0];
            let r = 0;
            if (c > 1)
                for (; r < e.length - 2 && !(n < e[r + 1]); r++)
                    ;
            let i = le(e[r], e[r + 1], n);
            return s[r](i)
        };
    return n ? t => l(ne(e[0], e[a - 1], t)) : l
}
function _n(e, t) {
    let n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        let i = le(0, t, r);
        e.push(M(n, 1, i))
    }
}
function vn(e) {
    let t = [0];
    return _n(t, e.length - 1), t
}
function yn(e, t) {
    return e.map(e => e * t)
}
function bn(e, t) {
    return e.map(() => t || De).splice(0, e.length - 1)
}
function xn({duration: e=300, keyframes: t, times: n, ease: r=`easeInOut`}) {
    let i = Oe(r) ? r.map(Me) : Me(r),
        a = {
            done: !1,
            value: t[0]
        },
        o = gn(yn(n && n.length === t.length ? n : vn(t), e), t, {
            ease: Array.isArray(i) ? i : bn(t, i)
        });
    return {
        calculatedDuration: e,
        next: t => (a.value = o(t), a.done = t >= e, a)
    }
}
var Sn = e => e !== null;
function Cn(e, {repeat: t, repeatType: n=`loop`}, r, i=1) {
    let a = e.filter(Sn),
        o = i < 0 || t && n !== `loop` && t % 2 == 1 ? 0 : a.length - 1;
    return !o || r === void 0 ? a[o] : r
}
var wn = {
    decay: mn,
    inertia: mn,
    tween: xn,
    keyframes: xn,
    spring: dn
};
function Tn(e) {
    typeof e.type == `string` && (e.type = wn[e.type])
}
var En = class {
        constructor()
        {
            this.updateFinished()
        }
        get finished()
        {
            return this._finished
        }
        updateFinished()
        {
            this._finished = new Promise(e => {
                this.resolve = e
            })
        }
        notifyFinished()
        {
            this.resolve()
        }
        then(e, t)
        {
            return this.finished.then(e, t)
        }
    }
    ,
    Dn = e => e / 100,
    On = class  extends En{
        constructor(e)
        {
            super(),
            this.state = `idle`,
            this.startTime = null,
            this.isStopped = !1,
            this.currentTime = 0,
            this.holdTime = null,
            this.playbackSpeed = 1,
            this.delayState = {
                done: !1,
                value: void 0
            },
            this.stop = () => {
                let {motionValue: e} = this.options;
                e && e.updatedAt !== He.now() && this.tick(He.now()),
                this.isStopped = !0,
                this.state !== `idle` && (this.teardown(), this.options.onStop?.())
            },
            this.options = e,
            this.initAnimation(),
            this.play(),
            e.autoplay === !1 && this.pause()
        }
        initAnimation()
        {
            let {options: e} = this;
            Tn(e);
            let {type: t=xn, repeat: n=0, repeatDelay: r=0, repeatType: i, velocity: a=0} = e,
                {keyframes: o} = e,
                s = t || xn;
            s !== xn && typeof o[0] != `number` && (this.mixKeyframes = ce(Dn, Jt(o[0], o[1])), o = [0, 100]);
            let c = s({
                ...e,
                keyframes: o
            });
            i === `mirror` && (this.mirroredGenerator = s({
                ...e,
                keyframes: [...o].reverse(),
                velocity: -a
            })),
            c.calculatedDuration === null && (c.calculatedDuration = Qt(c));
            let {calculatedDuration: l} = c;
            this.calculatedDuration = l,
            this.resolvedDuration = l + r,
            this.totalDuration = this.resolvedDuration * (n + 1) - r,
            this.generator = c
        }
        updateTime(e)
        {
            let t = Math.round(e - this.startTime) * this.playbackSpeed;
            this.currentTime = this.holdTime === null ? t : this.holdTime
        }
        tick(e, t=!1)
        {
            let {generator: n, totalDuration: r, mixKeyframes: i, mirroredGenerator: a, resolvedDuration: o, calculatedDuration: s} = this;
            if (this.startTime === null)
                return n.next(0);
            let {delay: c=0, keyframes: l, repeat: u, repeatType: d, repeatDelay: f, type: p, onUpdate: m, finalKeyframe: h} = this.options;
            this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - r / this.speed, this.startTime)),
            t ? this.currentTime = e : this.updateTime(e);
            let g = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1),
                _ = this.playbackSpeed >= 0 ? g < 0 : g > r;
            this.currentTime = Math.max(g, 0),
            this.state === `finished` && this.holdTime === null && (this.currentTime = r);
            let v = this.currentTime,
                y = n;
            if (u) {
                let e = Math.min(this.currentTime, r) / o,
                    t = Math.floor(e),
                    n = e % 1;
                !n && e >= 1 && (n = 1),
                n === 1 && t--,
                t = Math.min(t, u + 1),
                t % 2 && (d === `reverse` ? (n = 1 - n, f && (n -= f / o)) : d === `mirror` && (y = a)),
                v = ne(0, 1, n) * o
            }
            let b;
            _ ? (this.delayState.value = l[0], b = this.delayState) : b = y.next(v),
            i && !_ && (b.value = i(b.value));
            let {done: x} = b;
            !_ && s !== null && (x = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
            let S = this.holdTime === null && (this.state === `finished` || this.state === `running` && x);
            return S && p !== mn && (b.value = Cn(l, this.options, h, this.speed)), m && m(b.value), S && this.finish(), b
        }
        then(e, t)
        {
            return this.finished.then(e, t)
        }
        get duration()
        {
            return ue(this.calculatedDuration)
        }
        get iterationDuration()
        {
            let {delay: e=0} = this.options || {};
            return this.duration + ue(e)
        }
        get time()
        {
            return ue(this.currentTime)
        }
        set time(e)
        {
            e = D(e),
            this.currentTime = e,
            this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed),
            this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = `paused`, this.holdTime = e, this.tick(e))
        }
        getGeneratorVelocity()
        {
            let e = this.currentTime;
            if (e <= 0)
                return this.options.velocity || 0;
            if (this.generator.velocity)
                return this.generator.velocity(e);
            let t = this.generator.next(e).value;
            return pn(e => this.generator.next(e).value, e, t)
        }
        get speed()
        {
            return this.playbackSpeed
        }
        set speed(e)
        {
            let t = this.playbackSpeed !== e;
            t && this.driver && this.updateTime(He.now()),
            this.playbackSpeed = e,
            t && this.driver && (this.time = ue(this.currentTime))
        }
        play()
        {
            if (this.isStopped)
                return;
            let {driver: e=Yt, startTime: t} = this.options;
            this.driver ||= e(e => this.tick(e)),
            this.options.onPlay?.();
            let n = this.driver.now();
            this.state === `finished` ? (this.updateFinished(), this.startTime = n) : this.holdTime === null ? this.startTime ||= t ?? n : this.startTime = n - this.holdTime,
            this.state === `finished` && this.speed < 0 && (this.startTime += this.calculatedDuration),
            this.holdTime = null,
            this.state = `running`,
            this.driver.start()
        }
        pause()
        {
            this.state = `paused`,
            this.updateTime(He.now()),
            this.holdTime = this.currentTime
        }
        complete()
        {
            this.state !== `running` && this.play(),
            this.state = `finished`,
            this.holdTime = null
        }
        finish()
        {
            this.notifyFinished(),
            this.teardown(),
            this.state = `finished`,
            this.options.onComplete?.()
        }
        cancel()
        {
            this.holdTime = null,
            this.startTime = 0,
            this.tick(0),
            this.teardown(),
            this.options.onCancel?.()
        }
        teardown()
        {
            this.state = `idle`,
            this.stopDriver(),
            this.startTime = this.holdTime = null
        }
        stopDriver()
        {
            this.driver &&= (this.driver.stop(), void 0)
        }
        sample(e)
        {
            return this.startTime = 0, this.tick(e, !0)
        }
        attachTimeline(e)
        {
            return this.options.allowFlatten && (this.options.type = `keyframes`, this.options.ease = `linear`, this.initAnimation()), this.driver?.stop(), e.observe(this)
        }
    }
    ;
function kn(e) {
    for (let t = 1; t < e.length; t++)
        e[t] ?? (e[t] = e[t - 1])
}
var An = e => e * 180 / Math.PI,
    jn = e => Nn(An(Math.atan2(e[1], e[0]))),
    Mn = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
        rotate: jn,
        rotateZ: jn,
        skewX: e => An(Math.atan(e[1])),
        skewY: e => An(Math.atan(e[2])),
        skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
    },
    Nn = e => (e %= 360, e < 0 && (e += 360), e),
    Pn = jn,
    Fn = e => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
    In = e => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
    Ln = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: Fn,
        scaleY: In,
        scale: e => (Fn(e) + In(e)) / 2,
        rotateX: e => Nn(An(Math.atan2(e[6], e[5]))),
        rotateY: e => Nn(An(Math.atan2(-e[2], e[0]))),
        rotateZ: Pn,
        rotate: Pn,
        skewX: e => An(Math.atan(e[4])),
        skewY: e => An(Math.atan(e[1])),
        skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
    };
function Rn(e) {
    return +!!e.includes(`scale`)
}
function zn(e, t) {
    if (!e || e === `none`)
        return Rn(t);
    let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),
        r,
        i;
    if (n)
        r = Ln,
        i = n;
    else {
        let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        r = Mn,
        i = t
    }
    if (!i)
        return Rn(t);
    let a = r[t],
        o = i[1].split(`,`).map(Vn);
    return typeof a == `function` ? a(o) : o[a]
}
var Bn = (e, t) => {
    let {transform: n=`none`} = getComputedStyle(e);
    return zn(n, t)
};
function Vn(e) {
    return parseFloat(e.trim())
}
var Hn = [`transformPerspective`, `x`, `y`, `z`, `translateX`, `translateY`, `translateZ`, `scale`, `scaleX`, `scaleY`, `rotate`, `rotateX`, `rotateY`, `rotateZ`, `skew`, `skewX`, `skewY`],
    Un = new Set([...Hn, `pathRotation`]),
    Wn = e => e === Ye || e === A,
    Gn = new Set([`x`, `y`, `z`]),
    Kn = Hn.filter(e => !Gn.has(e));
function qn(e) {
    let t = [];
    return Kn.forEach(n => {
        let r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith(`scale`)))
    }), t
}
var Jn = {
    width: ({x: e}, {paddingLeft: t=`0`, paddingRight: n=`0`, boxSizing: r}) => {
        let i = e.max - e.min;
        return r === `border-box` ? i : i - parseFloat(t) - parseFloat(n)
    },
    height: ({y: e}, {paddingTop: t=`0`, paddingBottom: n=`0`, boxSizing: r}) => {
        let i = e.max - e.min;
        return r === `border-box` ? i : i - parseFloat(t) - parseFloat(n)
    },
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: (e, {transform: t}) => zn(t, `x`),
    y: (e, {transform: t}) => zn(t, `y`)
};
Jn.translateX = Jn.x,
Jn.translateY = Jn.y;
var Yn = new Set,
    Xn = !1,
    Zn = !1,
    Qn = !1;
function $n() {
    if (Zn) {
        let e = Array.from(Yn).filter(e => e.needsMeasurement),
            t = new Set(e.map(e => e.element)),
            n = new Map;
        t.forEach(e => {
            let t = qn(e);
            t.length && (n.set(e, t), e.render())
        }),
        e.forEach(e => e.measureInitialState()),
        t.forEach(e => {
            e.render();
            let t = n.get(e);
            t && t.forEach(([t, n]) => {
                e.getValue(t)?.set(n)
            })
        }),
        e.forEach(e => e.measureEndState()),
        e.forEach(e => {
            e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY)
        })
    }
    Zn = !1,
    Xn = !1,
    Yn.forEach(e => e.complete(Qn)),
    Yn.clear()
}
function er() {
    Yn.forEach(e => {
        e.readKeyframes(),
        e.needsMeasurement && (Zn = !0)
    })
}
function tr() {
    Qn = !0,
    er(),
    $n(),
    Qn = !1
}
var nr = class {
        constructor(e, t, n, r, i, a=!1)
        {
            this.state = `pending`,
            this.isAsync = !1,
            this.needsMeasurement = !1,
            this.unresolvedKeyframes = [...e],
            this.onComplete = t,
            this.name = n,
            this.motionValue = r,
            this.element = i,
            this.isAsync = a
        }
        scheduleResolve()
        {
            this.state = `scheduled`,
            this.isAsync ? (Yn.add(this), Xn || (Xn = !0, k.read(er), k.resolveKeyframes($n))) : (this.readKeyframes(), this.complete())
        }
        readKeyframes()
        {
            let {unresolvedKeyframes: e, name: t, element: n, motionValue: r} = this;
            if (e[0] === null) {
                let i = r?.get(),
                    a = e[e.length - 1];
                if (i !== void 0)
                    e[0] = i;
                else if (n && t) {
                    let r = n.readValue(t, a);
                    r != null && (e[0] = r)
                }
                e[0] === void 0 && (e[0] = a),
                r && i === void 0 && r.set(e[0])
            }
            kn(e)
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(e=!1)
        {
            this.state = `complete`,
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
            Yn.delete(this)
        }
        cancel()
        {
            this.state === `scheduled` && (Yn.delete(this), this.state = `pending`)
        }
        resume()
        {
            this.state === `pending` && this.scheduleResolve()
        }
    }
    ,
    rr = e => e.startsWith(`--`);
function ir(e, t, n) {
    rr(t) ? e.style.setProperty(t, n) : e.style[t] = n
}
var ar = {};
function or(e, t) {
    let n = oe(e);
    return () => ar[t] ?? n()
}
var sr = or(() => window.ScrollTimeline !== void 0, `scrollTimeline`),
    cr = or(() => window.ViewTimeline !== void 0, `viewTimeline`),
    lr = or(() => {
        try {
            document.createElement(`div`).animate({
                opacity: 0
            }, {
                easing: `linear(0, 1)`
            })
        } catch {
            return !1
        }
        return !0
    }, `linearEasing`),
    ur = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
    dr = {
        linear: `linear`,
        ease: `ease`,
        easeIn: `ease-in`,
        easeOut: `ease-out`,
        easeInOut: `ease-in-out`,
        circIn: ur([0, .65, .55, 1]),
        circOut: ur([.55, 0, 1, .45]),
        backIn: ur([.31, .01, .66, -.59]),
        backOut: ur([.33, 1.53, .69, .99])
    };
function fr(e, t) {
    if (e)
        return typeof e == `function` ? lr() ? Xt(e, t) : `ease-out` : ke(e) ? ur(e) : Array.isArray(e) ? e.map(e => fr(e, t) || dr.easeOut) : dr[e]
}
function pr(e, t, n, {delay: r=0, duration: i=300, repeat: a=0, repeatType: o=`loop`, ease: s=`easeOut`, times: c}={}, l=void 0) {
    let u = {
        [t]: n
    };
    c && (u.offset = c);
    let d = fr(s, i);
    Array.isArray(d) && (u.easing = d);
    let f = {
        delay: r,
        duration: i,
        easing: Array.isArray(d) ? `linear` : d,
        fill: `both`,
        iterations: a + 1,
        direction: o === `reverse` ? `alternate` : `normal`
    };
    return l && (f.pseudoElement = l), e.animate(u, f)
}
function mr(e) {
    return typeof e == `function` && `applyToOptions` in e
}
function hr({type: e, ...t}) {
    return mr(e) && lr() ? e.applyToOptions(t) : (t.duration ??= 300, t.ease ??= `easeOut`, t)
}
var gr = class  extends En{
        constructor(e)
        {
            if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e)
                return;
            let {element: t, name: n, keyframes: r, pseudoElement: i, allowFlatten: a=!1, finalKeyframe: o, onComplete: s} = e;
            this.isPseudoElement = !!i,
            this.allowFlatten = a,
            this.options = e,
            e.type;
            let c = hr(e);
            this.animation = pr(t, n, r, c, i),
            c.autoplay === !1 && this.animation.pause(),
            this.animation.onfinish = () => {
                if (this.finishedTime = this.time, !i) {
                    let e = Cn(r, this.options, o, this.speed);
                    this.updateMotionValue && this.updateMotionValue(e),
                    ir(t, n, e),
                    this.animation.cancel()
                }
                s?.(),
                this.notifyFinished()
            }
        }
        play()
        {
            this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === `finished` && this.updateFinished())
        }
        pause()
        {
            this.animation.pause()
        }
        complete()
        {
            this.animation.finish?.()
        }
        cancel()
        {
            try {
                this.animation.cancel()
            } catch {}
        }
        stop()
        {
            if (this.isStopped)
                return;
            this.isStopped = !0;
            let {state: e} = this;
            e !== `idle` && e !== `finished` && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
        }
        commitStyles()
        {
            let e = this.options?.element;
            !this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.()
        }
        get duration()
        {
            let e = this.animation.effect?.getComputedTiming?.().duration || 0;
            return ue(Number(e))
        }
        get iterationDuration()
        {
            let {delay: e=0} = this.options || {};
            return this.duration + ue(e)
        }
        get time()
        {
            return ue(Number(this.animation.currentTime) || 0)
        }
        set time(e)
        {
            let t = this.finishedTime !== null;
            this.manualStartTime = null,
            this.finishedTime = null,
            this.animation.currentTime = D(e),
            t && this.animation.pause()
        }
        get speed()
        {
            return this.animation.playbackRate
        }
        set speed(e)
        {
            e < 0 && (this.finishedTime = null),
            this.animation.playbackRate = e
        }
        get state()
        {
            return this.finishedTime === null ? this.animation.playState : `finished`
        }
        get startTime()
        {
            return this.manualStartTime ?? Number(this.animation.startTime)
        }
        set startTime(e)
        {
            this.manualStartTime = this.animation.startTime = e
        }
        attachTimeline({timeline: e, rangeStart: t, rangeEnd: n, observe: r})
        {
            return this.allowFlatten && this.animation.effect?.updateTiming({
                easing: `linear`
            }), this.animation.onfinish = null, e && sr() ? (this.animation.timeline = e, t && (this.animation.rangeStart = t), n && (this.animation.rangeEnd = n), se) : r(this)
        }
    }
    ,
    _r = {
        anticipate: xe,
        backInOut: be,
        circInOut: we
    };
function vr(e) {
    return e in _r
}
function yr(e) {
    typeof e.ease == `string` && vr(e.ease) && (e.ease = _r[e.ease])
}
var br = 10,
    xr = class  extends gr{
        constructor(e)
        {
            yr(e),
            Tn(e),
            super(e),
            e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime),
            this.options = e
        }
        updateMotionValue(e)
        {
            let {motionValue: t, onUpdate: n, onComplete: r, element: i, ...a} = this.options;
            if (!t)
                return;
            if (e !== void 0) {
                t.set(e);
                return
            }
            let o = new On({
                    ...a,
                    autoplay: !1
                }),
                s = Math.max(br, He.now() - this.startTime),
                c = ne(0, br, s - br),
                l = o.sample(s).value,
                {name: u} = this.options;
            i && u && ir(i, u, l),
            t.setWithVelocity(o.sample(Math.max(0, s - c)).value, l, c),
            o.stop()
        }
    }
    ,
    Sr = (e, t) => t !== `zIndex` && !!(typeof e == `number` || Array.isArray(e) || typeof e == `string` && (jt.test(e) || e === `0`) && !e.startsWith(`url(`));
function Cr(e) {
    let t = e[0];
    if (e.length === 1)
        return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t)
            return !0
}
function wr(e, t, n, r) {
    let i = e[0];
    if (i === null)
        return !1;
    if (t === `display` || t === `visibility`)
        return !0;
    let a = e[e.length - 1],
        o = Sr(i, t),
        s = Sr(a, t);
    return `${t}${i}${a}${o ? a : i}`, !o || !s ? !1 : Cr(e) || (n === `spring` || mr(n)) && r
}
function Tr(e) {
    e.duration = 0,
    e.type = `keyframes`
}
var Er = new Set([`opacity`, `clipPath`, `filter`, `transform`, `backgroundColor`]),
    Dr = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function Or(e) {
    for (let t = 0; t < e.length; t++)
        if (typeof e[t] == `string` && Dr.test(e[t]))
            return !0;
    return !1
}
var kr = new Set([`color`, `backgroundColor`, `outlineColor`, `fill`, `stroke`, `borderColor`, `borderTopColor`, `borderRightColor`, `borderBottomColor`, `borderLeftColor`]),
    Ar = oe(() => Object.hasOwnProperty.call(Element.prototype, `animate`));
function jr(e) {
    let {motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: a, type: o, keyframes: s} = e,
        c = t?.owner?.current;
    if (!(c instanceof HTMLElement) && !(c instanceof SVGElement))
        return !1;
    let {onUpdate: l, transformTemplate: u} = t.owner.getProps();
    return Ar() && n && (Er.has(n) || kr.has(n) && Or(s)) && (n !== `transform` || !u) && !l && !r && i !== `mirror` && a !== 0 && o !== `inertia`
}
var Mr = 40,
    Nr = class  extends En{
        constructor({autoplay: e=!0, delay: t=0, type: n=`keyframes`, repeat: r=0, repeatDelay: i=0, repeatType: a=`loop`, keyframes: o, name: s, motionValue: c, element: l, ...u})
        {
            super(),
            this.stop = () => {
                this._animation && (this._animation.stop(), this.stopTimeline?.()),
                this.keyframeResolver?.cancel()
            },
            this.createdAt = He.now();
            let d = {
                    autoplay: e,
                    delay: t,
                    type: n,
                    repeat: r,
                    repeatDelay: i,
                    repeatType: a,
                    name: s,
                    motionValue: c,
                    element: l,
                    ...u
                },
                f = l?.KeyframeResolver || nr;
            this.keyframeResolver = new f(o, (e, t, n) => this.onKeyframesResolved(e, t, d, !n), s, c, l),
            this.keyframeResolver?.scheduleResolve()
        }
        onKeyframesResolved(e, t, n, r)
        {
            this.keyframeResolver = void 0;
            let {name: i, type: a, velocity: o, delay: s, isHandoff: c, onUpdate: l} = n;
            this.resolvedAt = He.now();
            let u = !0;
            wr(e, i, a, o) || (u = !1, (T.instantAnimations || !s) && l?.(Cn(e, n, t)), e[0] = e[e.length - 1], Tr(n), n.repeat = 0);
            let d = {
                    startTime: r ? this.resolvedAt && this.resolvedAt - this.createdAt > Mr ? this.resolvedAt : this.createdAt : void 0,
                    finalKeyframe: t,
                    ...n,
                    keyframes: e
                },
                f = u && !c && jr(d),
                p = d.motionValue?.owner?.current,
                m;
            if (f)
                try {
                    m = new xr({
                        ...d,
                        element: p
                    })
                } catch {
                    m = new On(d)
                }
            else
                m = new On(d);
            m.finished.then(() => {
                this.notifyFinished()
            }).catch(se),
            this.pendingTimeline &&= (this.stopTimeline = m.attachTimeline(this.pendingTimeline), void 0),
            this._animation = m
        }
        get finished()
        {
            return this._animation ? this.animation.finished : this._finished
        }
        then(e, t)
        {
            return this.finished.finally(e).then(() => {})
        }
        get animation()
        {
            return this._animation || (this.keyframeResolver?.resume(), tr()), this._animation
        }
        get duration()
        {
            return this.animation.duration
        }
        get iterationDuration()
        {
            return this.animation.iterationDuration
        }
        get time()
        {
            return this.animation.time
        }
        set time(e)
        {
            this.animation.time = e
        }
        get speed()
        {
            return this.animation.speed
        }
        get state()
        {
            return this.animation.state
        }
        set speed(e)
        {
            this.animation.speed = e
        }
        get startTime()
        {
            return this.animation.startTime
        }
        attachTimeline(e)
        {
            return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop()
        }
        play()
        {
            this.animation.play()
        }
        pause()
        {
            this.animation.pause()
        }
        complete()
        {
            this.animation.complete()
        }
        cancel()
        {
            this._animation && this.animation.cancel(),
            this.keyframeResolver?.cancel()
        }
    }
    ;
function Pr(e, t, n, r=0, i=1) {
    let a = Array.from(e).sort((e, t) => e.sortNodePosition(t)).indexOf(t),
        o = e.size,
        s = (o - 1) * r;
    return typeof n == `function` ? n(a, o) : i === 1 ? a * r : s - a * r
}
var Fr = 30,
    Ir = e => !isNaN(parseFloat(e)),
    Lr = {
        current: void 0
    },
    Rr = class {
        constructor(e, t={})
        {
            this.canTrackVelocity = null,
            this.events = {},
            this.updateAndNotify = e => {
                let t = He.now();
                if (this.updatedAt !== t && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
                    for (let e of this.dependents)
                        e.dirty()
            },
            this.hasAnimated = !1,
            this.setCurrent(e),
            this.owner = t.owner
        }
        setCurrent(e)
        {
            this.current = e,
            this.updatedAt = He.now(),
            this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = Ir(this.current))
        }
        setPrevFrameValue(e=this.current)
        {
            this.prevFrameValue = e,
            this.prevUpdatedAt = this.updatedAt
        }
        onChange(e)
        {
            return this.on(`change`, e)
        }
        on(e, t)
        {
            this.events[e] || (this.events[e] = new E);
            let n = this.events[e].add(t);
            return e === `change` ? () => {
                n(),
                k.read(() => {
                    this.events.change.getSize() || this.stop()
                })
            } : n
        }
        clearListeners()
        {
            for (let e in this.events)
                this.events[e].clear()
        }
        attach(e, t)
        {
            this.passiveEffect = e,
            this.stopPassiveEffect = t
        }
        set(e)
        {
            this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e)
        }
        setWithVelocity(e, t, n)
        {
            this.set(t),
            this.prev = void 0,
            this.prevFrameValue = e,
            this.prevUpdatedAt = this.updatedAt - n
        }
        jump(e, t=!0)
        {
            this.updateAndNotify(e),
            this.prev = e,
            this.prevUpdatedAt = this.prevFrameValue = void 0,
            t && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect()
        }
        dirty()
        {
            this.events.change?.notify(this.current)
        }
        addDependent(e)
        {
            this.dependents ||= new Set,
            this.dependents.add(e)
        }
        removeDependent(e)
        {
            this.dependents && this.dependents.delete(e)
        }
        get()
        {
            return Lr.current && Lr.current.push(this), this.current
        }
        getPrevious()
        {
            return this.prev
        }
        getVelocity()
        {
            let e = He.now();
            if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Fr)
                return 0;
            let t = Math.min(this.updatedAt - this.prevUpdatedAt, Fr);
            return de(parseFloat(this.current) - parseFloat(this.prevFrameValue), t)
        }
        start(e)
        {
            return this.stop(), new Promise(t => {
                this.hasAnimated = !0,
                this.animation = e(t),
                this.events.animationStart && this.events.animationStart.notify()
            }).then(() => {
                this.events.animationComplete && this.events.animationComplete.notify(),
                this.clearAnimation()
            })
        }
        stop()
        {
            this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()),
            this.clearAnimation()
        }
        isAnimating()
        {
            return !!this.animation
        }
        clearAnimation()
        {
            delete this.animation
        }
        destroy()
        {
            this.dependents?.clear(),
            this.events.destroy?.notify(),
            this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect()
        }
    }
    ;
function zr(e, t) {
    return new Rr(e, t)
}
function Br(e, t) {
    if (e?.inherit && t) {
        let {inherit: n, ...r} = e;
        return {
            ...t,
            ...r
        }
    }
    return e
}
function Vr(e, t) {
    let n = e?.[t] ?? e?.default ?? e;
    return n === e ? n : Br(n, e)
}
var Hr = {
        type: `spring`,
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    Ur = e => ({
        type: `spring`,
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    Wr = {
        type: `keyframes`,
        duration: .8
    },
    Gr = {
        type: `keyframes`,
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    Kr = (e, {keyframes: t}) => t.length > 2 ? Wr : Un.has(e) ? e.startsWith(`scale`) ? Ur(t[1]) : Hr : Gr,
    qr = new Set([`when`, `delay`, `delayChildren`, `staggerChildren`, `staggerDirection`, `repeat`, `repeatType`, `repeatDelay`, `from`, `elapsed`]);
function Jr(e) {
    for (let t in e)
        if (!qr.has(t))
            return !0;
    return !1
}
var Yr = (e, t, n, r={}, i, a) => o => {
        let s = Vr(r, e) || {},
            c = s.delay || r.delay || 0,
            {elapsed: l=0} = r;
        l -= D(c);
        let u = {
            keyframes: Array.isArray(n) ? n : [null, n],
            ease: `easeOut`,
            velocity: t.getVelocity(),
            ...s,
            delay: -l,
            onUpdate: e => {
                t.set(e),
                s.onUpdate && s.onUpdate(e)
            },
            onComplete: () => {
                o(),
                s.onComplete && s.onComplete()
            },
            name: e,
            motionValue: t,
            element: a ? void 0 : i
        };
        Jr(s) || Object.assign(u, Kr(e, u)),
        u.duration &&= D(u.duration),
        u.repeatDelay &&= D(u.repeatDelay),
        u.from !== void 0 && (u.keyframes[0] = u.from);
        let d = !1;
        if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (Tr(u), u.delay === 0 && (d = !0)), (T.instantAnimations || T.skipAnimations || i?.shouldSkipAnimations || s.skipAnimations) && (d = !0, Tr(u), u.delay = 0), u.allowFlatten = !s.type && !s.ease, d && !a && t.get() !== void 0) {
            let e = Cn(u.keyframes, s);
            if (e !== void 0) {
                k.update(() => {
                    u.onUpdate(e),
                    u.onComplete()
                });
                return
            }
        }
        return s.isSync ? new On(u) : new Nr(u)
    },
    Xr = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Zr(e) {
    let t = Xr.exec(e);
    if (!t)
        return [, ];
    let [, n, r, i] = t;
    return [`--${n ?? r}`, i]
}
function Qr(e, t, n=1) {
    `${e}`;
    let [r, i] = Zr(e);
    if (!r)
        return;
    let a = window.getComputedStyle(t).getPropertyValue(r);
    if (a) {
        let e = a.trim();
        return re(e) ? parseFloat(e) : e
    }
    return Ke(i) ? Qr(i, t, n + 1) : i
}
function $r(e) {
    let t = [{}, {}];
    return e?.values.forEach((e, n) => {
        t[0][n] = e.get(),
        t[1][n] = e.getVelocity()
    }), t
}
function ei(e, t, n, r) {
    if (typeof t == `function`) {
        let [i, a] = $r(r);
        t = t(n === void 0 ? e.custom : n, i, a)
    }
    if (typeof t == `string` && (t = e.variants && e.variants[t]), typeof t == `function`) {
        let [i, a] = $r(r);
        t = t(n === void 0 ? e.custom : n, i, a)
    }
    return t
}
function ti(e, t, n) {
    let r = e.getProps();
    return ei(r, t, n === void 0 ? r.custom : n, e)
}
var ni = new Set([`width`, `height`, `top`, `left`, `right`, `bottom`, ...Hn]),
    ri = e => Array.isArray(e);
function ii(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, zr(n))
}
function ai(e) {
    return ri(e) ? e[e.length - 1] || 0 : e
}
function oi(e, t) {
    let {transitionEnd: n={}, transition: r={}, ...i} = ti(e, t) || {};
    i = {
        ...i,
        ...n
    };
    for (let t in i)
        ii(e, t, ai(i[t]))
}
var si = e => !!(e && e.getVelocity);
function ci(e) {
    return !!(si(e) && e.add)
}
function li(e, t) {
    let n = e.getValue(`willChange`);
    if (ci(n))
        return n.add(t);
    if (!n && T.WillChange) {
        let n = new T.WillChange(`auto`);
        e.addValue(`willChange`, n),
        n.add(t)
    }
}
function ui(e) {
    return e.replace(/([A-Z])/g, e => `-${e.toLowerCase()}`)
}
var di = `data-` + ui(`framerAppearId`);
function fi(e) {
    return e.props[di]
}
function pi({protectedKeys: e, needsAnimating: t}, n) {
    let r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, r
}
function mi(e, t, {delay: n=0, transitionOverride: r, type: i}={}) {
    let {transition: a, transitionEnd: o, ...s} = t,
        c = e.getDefaultTransition();
    a = a ? Br(a, c) : c;
    let l = a?.reduceMotion,
        u = a?.skipAnimations;
    r && (a = r);
    let d = [],
        f = i && e.animationState && e.animationState.getState()[i],
        p = a?.path;
    p && p.animateVisualElement(e, s, a, n, d);
    for (let t in s) {
        let r = e.getValue(t, e.latestValues[t] ?? null),
            i = s[t];
        if (i === void 0 || f && pi(f, t))
            continue;
        let o = {
            delay: n,
            ...Vr(a || {}, t)
        };
        u && (o.skipAnimations = !0);
        let c = r.get();
        if (c !== void 0 && !r.isAnimating() && !Array.isArray(i) && i === c && !o.velocity) {
            k.update(() => r.set(i));
            continue
        }
        let p = !1;
        if (window.MotionHandoffAnimation) {
            let n = fi(e);
            if (n) {
                let e = window.MotionHandoffAnimation(n, t, k);
                e !== null && (o.startTime = e, p = !0)
            }
        }
        li(e, t);
        let m = l ?? e.shouldReduceMotion;
        r.start(Yr(t, r, i, m && ni.has(t) ? {
            type: !1
        } : o, e, p));
        let h = r.animation;
        h && d.push(h)
    }
    if (o) {
        let t = () => k.update(() => {
            o && oi(e, o)
        });
        d.length ? Promise.all(d).then(t) : t()
    }
    return d
}
function hi(e, t, n={}) {
    let r = ti(e, t, n.type === `exit` ? e.presenceContext?.custom : void 0),
        {transition: i=e.getDefaultTransition() || {}} = r || {};
    n.transitionOverride && (i = n.transitionOverride);
    let a = r ? () => Promise.all(mi(e, r, n)) : () => Promise.resolve(),
        o = e.variantChildren && e.variantChildren.size ? (r=0) => {
            let {delayChildren: a=0, staggerChildren: o, staggerDirection: s} = i;
            return gi(e, t, r, a, o, s, n)
        } : () => Promise.resolve(),
        {when: s} = i;
    if (s) {
        let [e, t] = s === `beforeChildren` ? [a, o] : [o, a];
        return e().then(() => t())
    }
    return Promise.all([a(), o(n.delay)])
}
function gi(e, t, n=0, r=0, i=0, a=1, o) {
    let s = [];
    for (let c of e.variantChildren)
        c.notify(`AnimationStart`, t),
        s.push(hi(c, t, {
            ...o,
            delay: n + (typeof r == `function` ? 0 : r) + Pr(e.variantChildren, c, r, i, a)
        }).then(() => c.notify(`AnimationComplete`, t)));
    return Promise.all(s)
}
function _i(e, t, n={}) {
    e.notify(`AnimationStart`, t);
    let r;
    if (Array.isArray(t)) {
        let i = t.map(t => hi(e, t, n));
        r = Promise.all(i)
    } else if (typeof t == `string`)
        r = hi(e, t, n);
    else {
        let i = typeof t == `function` ? ti(e, t, n.custom) : t;
        r = Promise.all(mi(e, i, n))
    }
    return r.then(() => {
        e.notify(`AnimationComplete`, t)
    })
}
var vi = {
        test: e => e === `auto`,
        parse: e => e
    },
    yi = e => t => t.test(e),
    bi = [Ye, A, dt, ut, pt, ft, vi],
    xi = e => bi.find(yi(e));
function Si(e) {
    return typeof e == `number` ? e === 0 : e === null || e === `none` || e === `0` || ae(e)
}
var Ci = new Set([`brightness`, `contrast`, `saturate`, `opacity`]);
function wi(e) {
    let [t, n] = e.slice(0, -1).split(`(`);
    if (t === `drop-shadow`)
        return e;
    let [r] = n.match($e) || [];
    if (!r)
        return e;
    let i = n.replace(r, ``),
        a = +!!Ci.has(t);
    return r !== n && (a *= 100), t + `(` + a + i + `)`
}
var Ti = /\b([a-z-]*)\(.*?\)/gu,
    Ei = {
        ...jt,
        getAnimatableNone: e => {
            let t = e.match(Ti);
            return t ? t.map(wi).join(` `) : e
        }
    },
    Di = {
        ...jt,
        getAnimatableNone: e => {
            let t = jt.parse(e);
            return jt.createTransformer(e)(t.map(e => typeof e == `number` ? 0 : typeof e == `object` ? {
                ...e,
                alpha: 1
            } : e))
        }
    },
    Oi = {
        ...Ye,
        transform: Math.round
    },
    ki = {
        borderWidth: A,
        borderTopWidth: A,
        borderRightWidth: A,
        borderBottomWidth: A,
        borderLeftWidth: A,
        borderRadius: A,
        borderTopLeftRadius: A,
        borderTopRightRadius: A,
        borderBottomRightRadius: A,
        borderBottomLeftRadius: A,
        width: A,
        maxWidth: A,
        height: A,
        maxHeight: A,
        top: A,
        right: A,
        bottom: A,
        left: A,
        inset: A,
        insetBlock: A,
        insetBlockStart: A,
        insetBlockEnd: A,
        insetInline: A,
        insetInlineStart: A,
        insetInlineEnd: A,
        padding: A,
        paddingTop: A,
        paddingRight: A,
        paddingBottom: A,
        paddingLeft: A,
        paddingBlock: A,
        paddingBlockStart: A,
        paddingBlockEnd: A,
        paddingInline: A,
        paddingInlineStart: A,
        paddingInlineEnd: A,
        margin: A,
        marginTop: A,
        marginRight: A,
        marginBottom: A,
        marginLeft: A,
        marginBlock: A,
        marginBlockStart: A,
        marginBlockEnd: A,
        marginInline: A,
        marginInlineStart: A,
        marginInlineEnd: A,
        fontSize: A,
        backgroundPositionX: A,
        backgroundPositionY: A,
        rotate: ut,
        pathRotation: ut,
        rotateX: ut,
        rotateY: ut,
        rotateZ: ut,
        scale: Ze,
        scaleX: Ze,
        scaleY: Ze,
        scaleZ: Ze,
        skew: ut,
        skewX: ut,
        skewY: ut,
        distance: A,
        translateX: A,
        translateY: A,
        translateZ: A,
        x: A,
        y: A,
        z: A,
        perspective: A,
        transformPerspective: A,
        opacity: Xe,
        originX: mt,
        originY: mt,
        originZ: A,
        zIndex: Oi,
        fillOpacity: Xe,
        strokeOpacity: Xe,
        numOctaves: Oi
    },
    Ai = {
        ...ki,
        color: j,
        backgroundColor: j,
        outlineColor: j,
        fill: j,
        stroke: j,
        borderColor: j,
        borderTopColor: j,
        borderRightColor: j,
        borderBottomColor: j,
        borderLeftColor: j,
        filter: Ei,
        WebkitFilter: Ei,
        mask: Di,
        WebkitMask: Di
    },
    ji = e => Ai[e],
    Mi = new Set([Ei, Di]);
function Ni(e, t) {
    let n = ji(e);
    return Mi.has(n) || (n = jt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
var Pi = new Set([`auto`, `none`, `0`]);
function Fi(e, t, n) {
    let r = 0,
        i;
    for (; r < e.length && !i;) {
        let t = e[r];
        typeof t == `string` && !Pi.has(t) && wt(t).values.length && (i = e[r]),
        r++
    }
    if (i && n)
        for (let r of t)
            e[r] = Ni(n, i)
}
var Ii = class  extends nr{
        constructor(e, t, n, r, i)
        {
            super(e, t, n, r, i, !0)
        }
        readKeyframes()
        {
            let {unresolvedKeyframes: e, element: t, name: n} = this;
            if (!t || !t.current)
                return;
            super.readKeyframes();
            for (let n = 0; n < e.length; n++) {
                let r = e[n];
                if (typeof r == `string` && (r = r.trim(), Ke(r))) {
                    let i = Qr(r, t.current);
                    i !== void 0 && (e[n] = i),
                    n === e.length - 1 && (this.finalKeyframe = r)
                }
            }
            if (this.resolveNoneKeyframes(), !ni.has(n) || e.length !== 2)
                return;
            let [r, i] = e,
                a = xi(r),
                o = xi(i);
            if (Je(r) !== Je(i) && Jn[n]) {
                this.needsMeasurement = !0;
                return
            }
            if (a !== o) {
                if (Wn(a) && Wn(o))
                    for (let t = 0; t < e.length; t++) {
                        let n = e[t];
                        typeof n == `string` && (e[t] = parseFloat(n))
                    }
                else
                    Jn[n] && (this.needsMeasurement = !0)
            }
        }
        resolveNoneKeyframes()
        {
            let {unresolvedKeyframes: e, name: t} = this,
                n = [];
            for (let t = 0; t < e.length; t++)
                (e[t] === null || Si(e[t])) && n.push(t);
            n.length && Fi(e, n, t)
        }
        measureInitialState()
        {
            let {element: e, unresolvedKeyframes: t, name: n} = this;
            if (!e || !e.current)
                return;
            n === `height` && (this.suspendedScrollY = window.pageYOffset),
            this.measuredOrigin = Jn[n](e.measureViewportBox(), window.getComputedStyle(e.current)),
            t[0] = this.measuredOrigin;
            let r = t[t.length - 1];
            r !== void 0 && e.getValue(n, r).jump(r, !1)
        }
        measureEndState()
        {
            let {element: e, name: t, unresolvedKeyframes: n} = this;
            if (!e || !e.current)
                return;
            let r = e.getValue(t);
            r && r.jump(this.measuredOrigin, !1);
            let i = n.length - 1,
                a = n[i];
            n[i] = Jn[t](e.measureViewportBox(), window.getComputedStyle(e.current)),
            a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
            this.removedTransforms?.length && this.removedTransforms.forEach(([t, n]) => {
                e.getValue(t).set(n)
            }),
            this.resolveNoneKeyframes()
        }
    }
    ,
    Li = [`borderTopLeftRadius`, `borderTopRightRadius`, `borderBottomRightRadius`, `borderBottomLeftRadius`];
function Ri(e, t, n) {
    if (e == null)
        return [];
    if (e instanceof EventTarget)
        return [e];
    if (typeof e == `string`) {
        let r = document;
        t && (r = t.current);
        let i = n?.[e] ?? r.querySelectorAll(e);
        return i ? Array.from(i) : []
    }
    return Array.from(e).filter(e => e != null)
}
var zi = (e, t) => t && typeof e == `number` ? t.transform(e) : e;
function N(e) {
    return ie(e) && `offsetHeight` in e && !(`ownerSVGElement` in e)
}
var {schedule: P, cancel: Bi} = Ie(queueMicrotask, !1),
    Vi = {
        x: !1,
        y: !1
    };
function Hi() {
    return Vi.x || Vi.y
}
function Ui(e) {
    return e === `x` || e === `y` ? Vi[e] ? null : (Vi[e] = !0, () => {
        Vi[e] = !1
    }) : Vi.x || Vi.y ? null : (Vi.x = Vi.y = !0, () => {
        Vi.x = Vi.y = !1
    })
}
function Wi(e, t) {
    let n = Ri(e),
        r = new AbortController;
    return [n, {
        passive: !0,
        ...t,
        signal: r.signal
    }, () => r.abort()]
}
function Gi(e) {
    return !(e.pointerType === `touch` || Hi())
}
function Ki(e, t, n={}) {
    let [r, i, a] = Wi(e, n);
    return r.forEach(e => {
        let n = !1,
            r = !1,
            a,
            o = () => {
                e.removeEventListener(`pointerleave`, u)
            },
            s = e => {
                a &&= (a(e), void 0),
                o()
            },
            c = e => {
                n = !1,
                window.removeEventListener(`pointerup`, c),
                window.removeEventListener(`pointercancel`, c),
                r && (r = !1, s(e))
            },
            l = () => {
                n = !0,
                window.addEventListener(`pointerup`, c, i),
                window.addEventListener(`pointercancel`, c, i)
            },
            u = e => {
                if (e.pointerType !== `touch`) {
                    if (n) {
                        r = !0;
                        return
                    }
                    s(e)
                }
            };
        e.addEventListener(`pointerenter`, n => {
            if (!Gi(n))
                return;
            r = !1;
            let o = t(e, n);
            typeof o == `function` && (a = o, e.addEventListener(`pointerleave`, u, i))
        }, i),
        e.addEventListener(`pointerdown`, l, i)
    }), a
}
var qi = (e, t) => t ? e === t || qi(e, t.parentElement) : !1,
    Ji = e => e.pointerType === `mouse` ? typeof e.button != `number` || e.button <= 0 : e.isPrimary !== !1,
    Yi = new Set([`BUTTON`, `INPUT`, `SELECT`, `TEXTAREA`, `A`]);
function Xi(e) {
    return Yi.has(e.tagName) || e.isContentEditable === !0
}
var Zi = new Set([`INPUT`, `SELECT`, `TEXTAREA`]);
function Qi(e) {
    return Zi.has(e.tagName) || e.isContentEditable === !0
}
var $i = new WeakSet;
function ea(e) {
    return t => {
        t.key === `Enter` && e(t)
    }
}
function ta(e, t) {
    e.dispatchEvent(new PointerEvent(`pointer` + t, {
        isPrimary: !0,
        bubbles: !0
    }))
}
var na = (e, t) => {
    let n = e.currentTarget;
    if (!n)
        return;
    let r = ea(() => {
        if ($i.has(n))
            return;
        ta(n, `down`);
        let e = ea(() => {
            ta(n, `up`)
        });
        n.addEventListener(`keyup`, e, t),
        n.addEventListener(`blur`, () => ta(n, `cancel`), t)
    });
    n.addEventListener(`keydown`, r, t),
    n.addEventListener(`blur`, () => n.removeEventListener(`keydown`, r), t)
};
function ra(e) {
    return Ji(e) && !Hi()
}
var ia = new WeakSet;
function aa(e, t, n={}) {
    let [r, i, a] = Wi(e, n),
        o = e => {
            let r = e.currentTarget;
            if (!ra(e) || ia.has(e))
                return;
            $i.add(r),
            n.stopPropagation && ia.add(e);
            let a = t(r, e),
                o = {
                    ...i,
                    capture: !0
                },
                s = (e, t) => {
                    window.removeEventListener(`pointerup`, c, o),
                    window.removeEventListener(`pointercancel`, l, o),
                    $i.has(r) && $i.delete(r),
                    ra(e) && typeof a == `function` && a(e, {
                        success: t
                    })
                },
                c = e => {
                    s(e, r === window || r === document || n.useGlobalTarget || qi(r, e.target))
                },
                l = e => {
                    s(e, !1)
                };
            window.addEventListener(`pointerup`, c, o),
            window.addEventListener(`pointercancel`, l, o)
        };
    return r.forEach(e => {
        (n.useGlobalTarget ? window : e).addEventListener(`pointerdown`, o, i),
        N(e) && (e.addEventListener(`focus`, e => na(e, i)), !Xi(e) && !e.hasAttribute(`tabindex`) && (e.tabIndex = 0))
    }), a
}
function oa(e) {
    return ie(e) && `ownerSVGElement` in e
}
var sa = new WeakMap,
    ca,
    la = (e, t, n) => (r, i) => i && i[0] ? i[0][e + `Size`] : oa(r) && `getBBox` in r ? r.getBBox()[t] : r[n],
    ua = la(`inline`, `width`, `offsetWidth`),
    da = la(`block`, `height`, `offsetHeight`);
function fa({target: e, borderBoxSize: t}) {
    sa.get(e)?.forEach(n => {
        n(e, {
            get width() {
                return ua(e, t)
            },
            get height() {
                return da(e, t)
            }
        })
    })
}
function pa(e) {
    e.forEach(fa)
}
function ma() {
    typeof ResizeObserver > `u` || (ca = new ResizeObserver(pa))
}
function ha(e, t) {
    ca || ma();
    let n = Ri(e);
    return n.forEach(e => {
        let n = sa.get(e);
        n || (n = new Set, sa.set(e, n)),
        n.add(t),
        ca?.observe(e)
    }), () => {
        n.forEach(e => {
            let n = sa.get(e);
            n?.delete(t),
            n?.size || ca?.unobserve(e)
        })
    }
}
var ga = new Set,
    _a;
function va() {
    _a = () => {
        let e = {
            get width() {
                return window.innerWidth
            },
            get height() {
                return window.innerHeight
            }
        };
        ga.forEach(t => t(e))
    },
    window.addEventListener(`resize`, _a)
}
function ya(e) {
    return ga.add(e), _a || va(), () => {
        ga.delete(e),
        !ga.size && typeof _a == `function` && (window.removeEventListener(`resize`, _a), _a = void 0)
    }
}
function ba(e, t) {
    return typeof e == `function` ? ya(e) : ha(e, t)
}
function xa(e, t) {
    let n,
        r = () => {
            let {currentTime: r} = t,
                i = (r === null ? 0 : r.value) / 100;
            n !== i && e(i),
            n = i
        };
    return k.preUpdate(r, !0), () => Le(r)
}
var Sa = {
    value: null,
    addProjectionMetrics: null
};
function Ca(e) {
    return oa(e) && e.tagName === `svg`
}
function wa(...e) {
    let t = !Array.isArray(e[0]),
        n = t ? 0 : -1,
        r = e[0 + n],
        i = e[1 + n],
        a = e[2 + n],
        o = e[3 + n],
        s = gn(i, a, o);
    return t ? s(r) : s
}
function Ta(e, t, n={}) {
    let r = e.get(),
        i = null,
        a = r,
        o,
        s = typeof r == `string` ? r.replace(/[\d.-]/g, ``) : void 0,
        c = () => {
            i &&= (i.stop(), null),
            e.animation = void 0
        },
        l = () => {
            let t = Da(e.get()),
                r = Da(a);
            if (t === r) {
                c();
                return
            }
            let s = i ? i.getGeneratorVelocity() : e.getVelocity();
            c(),
            i = new On({
                keyframes: [t, r],
                velocity: s,
                type: `spring`,
                restDelta: .001,
                restSpeed: .01,
                ...n,
                onUpdate: o
            })
        },
        u = () => {
            l(),
            e.animation = i ?? void 0,
            e.events.animationStart?.notify(),
            i?.then(() => {
                e.animation = void 0,
                e.events.animationComplete?.notify()
            })
        };
    if (e.attach((e, t) => {
        a = e,
        o = e => t(Ea(e, s)),
        k.postRender(u)
    }, c), si(t)) {
        let r = n.skipInitialAnimation === !0,
            i = t.on(`change`, t => {
                r ? (r = !1, e.jump(Ea(t, s), !1)) : e.set(Ea(t, s))
            }),
            a = e.on(`destroy`, i);
        return () => {
            i(),
            a()
        }
    }
    return c
}
function Ea(e, t) {
    return t ? e + t : e
}
function Da(e) {
    return typeof e == `number` ? e : parseFloat(e)
}
var Oa = [...bi, j, jt],
    ka = e => Oa.find(yi(e)),
    Aa = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    ja = () => ({
        x: Aa(),
        y: Aa()
    }),
    Ma = () => ({
        min: 0,
        max: 0
    }),
    F = () => ({
        x: Ma(),
        y: Ma()
    }),
    Na = new WeakMap;
function Pa(e) {
    return typeof e == `object` && !!e && typeof e.start == `function`
}
function Fa(e) {
    return typeof e == `string` || Array.isArray(e)
}
var Ia = [`animate`, `whileInView`, `whileFocus`, `whileHover`, `whileTap`, `whileDrag`, `exit`],
    La = [`initial`, ...Ia];
function Ra(e) {
    return Pa(e.animate) || La.some(t => Fa(e[t]))
}
function za(e) {
    return !!(Ra(e) || e.variants)
}
function Ba(e, t, n) {
    for (let r in t) {
        let i = t[r],
            a = n[r];
        if (si(i))
            e.addValue(r, i);
        else if (si(a))
            e.addValue(r, zr(i, {
                owner: e
            }));
        else if (a !== i) {
            if (e.hasValue(r)) {
                let t = e.getValue(r);
                t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i)
            } else {
                let t = e.getStaticValue(r);
                e.addValue(r, zr(t === void 0 ? i : t, {
                    owner: e
                }))
            }
        }
    }
    for (let r in n)
        t[r] === void 0 && e.removeValue(r);
    return t
}
var Va = {
        current: null
    },
    Ha = {
        current: !1
    },
    Ua = typeof window < `u`;
function Wa() {
    if (Ha.current = !0, Ua) {
        if (window.matchMedia) {
            let e = window.matchMedia(`(prefers-reduced-motion)`),
                t = () => Va.current = e.matches;
            e.addEventListener(`change`, t),
            t()
        } else
            Va.current = !1
    }
}
var Ga = [`AnimationStart`, `AnimationComplete`, `Update`, `BeforeLayoutMeasure`, `LayoutMeasure`, `LayoutAnimationStart`, `LayoutAnimationComplete`],
    Ka = {};
function qa(e) {
    Ka = e
}
function Ja() {
    return Ka
}
var Ya = class {
        scrapeMotionValuesFromProps(e, t, n)
        {
            return {}
        }
        constructor({parent: e, props: t, presenceContext: n, reducedMotionConfig: r, skipAnimations: i, blockInitialAnimation: a, visualState: o}, s={})
        {
            this.current = null,
            this.children = new Set,
            this.isVariantNode = !1,
            this.isControllingVariants = !1,
            this.shouldReduceMotion = null,
            this.shouldSkipAnimations = !1,
            this.values = new Map,
            this.KeyframeResolver = nr,
            this.features = {},
            this.valueSubscriptions = new Map,
            this.prevMotionValues = {},
            this.hasBeenMounted = !1,
            this.events = {},
            this.propEventSubscriptions = {},
            this.notifyUpdate = () => this.notify(`Update`, this.latestValues),
            this.render = () => {
                this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
            },
            this.renderScheduledAt = 0,
            this.scheduleRender = () => {
                let e = He.now();
                this.renderScheduledAt < e && (this.renderScheduledAt = e, k.render(this.render, !1, !0))
            };
            let {latestValues: c, renderState: l} = o;
            this.latestValues = c,
            this.baseTarget = {
                ...c
            },
            this.initialValues = t.initial ? {
                ...c
            } : {},
            this.renderState = l,
            this.parent = e,
            this.props = t,
            this.presenceContext = n,
            this.depth = e ? e.depth + 1 : 0,
            this.reducedMotionConfig = r,
            this.skipAnimationsConfig = i,
            this.options = s,
            this.blockInitialAnimation = !!a,
            this.isControllingVariants = Ra(t),
            this.isVariantNode = za(t),
            this.isVariantNode && (this.variantChildren = new Set),
            this.manuallyAnimateOnMount = !!(e && e.current);
            let {willChange: u, ...d} = this.scrapeMotionValuesFromProps(t, {}, this);
            for (let e in d) {
                let t = d[e];
                c[e] !== void 0 && si(t) && t.set(c[e])
            }
        }
        mount(e)
        {
            if (this.hasBeenMounted)
                for (let e in this.initialValues)
                    this.values.get(e)?.jump(this.initialValues[e]),
                    this.latestValues[e] = this.initialValues[e];
            this.current = e,
            Na.set(e, this),
            this.projection && !this.projection.instance && this.projection.mount(e),
            this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
            this.reducedMotionConfig === `never` ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === `always` ? this.shouldReduceMotion = !0 : (Ha.current || Wa(), this.shouldReduceMotion = Va.current),
            this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1,
            this.parent?.addChild(this),
            this.update(this.props, this.presenceContext),
            this.hasBeenMounted = !0
        }
        unmount()
        {
            this.projection && this.projection.unmount(),
            Le(this.notifyUpdate),
            Le(this.render),
            this.valueSubscriptions.forEach(e => e()),
            this.valueSubscriptions.clear(),
            this.removeFromVariantTree && this.removeFromVariantTree(),
            this.parent?.removeChild(this);
            for (let e in this.events)
                this.events[e].clear();
            for (let e in this.features) {
                let t = this.features[e];
                t && (t.unmount(), t.isMounted = !1)
            }
            this.current = null
        }
        addChild(e)
        {
            this.children.add(e),
            this.enteringChildren ??= new Set,
            this.enteringChildren.add(e)
        }
        removeChild(e)
        {
            this.children.delete(e),
            this.enteringChildren && this.enteringChildren.delete(e)
        }
        bindToMotionValue(e, t)
        {
            if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(), t.accelerate && Er.has(e) && this.current instanceof HTMLElement) {
                let {factory: n, keyframes: r, times: i, ease: a, duration: o} = t.accelerate,
                    s = new gr({
                        element: this.current,
                        name: e,
                        keyframes: r,
                        times: i,
                        ease: a,
                        duration: D(o)
                    }),
                    c = n(s);
                this.valueSubscriptions.set(e, () => {
                    c(),
                    s.cancel()
                });
                return
            }
            let n = Un.has(e);
            n && this.onBindTransform && this.onBindTransform();
            let r = t.on(`change`, t => {
                    this.latestValues[e] = t,
                    this.props.onUpdate && k.preRender(this.notifyUpdate),
                    n && this.projection && (this.projection.isTransformDirty = !0),
                    this.scheduleRender()
                }),
                i;
            typeof window < `u` && window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, e, t)),
            this.valueSubscriptions.set(e, () => {
                r(),
                i && i()
            })
        }
        sortNodePosition(e)
        {
            return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
        }
        updateFeatures()
        {
            let e = `animation`;
            for (e in Ka) {
                let t = Ka[e];
                if (!t)
                    continue;
                let {isEnabled: n, Feature: r} = t;
                if (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)), this.features[e]) {
                    let t = this.features[e];
                    t.isMounted ? t.update() : (t.mount(), t.isMounted = !0)
                }
            }
        }
        triggerBuild()
        {
            this.build(this.renderState, this.latestValues, this.props)
        }
        measureViewportBox()
        {
            return this.current ? this.measureInstanceViewportBox(this.current, this.props) : F()
        }
        getStaticValue(e)
        {
            return this.latestValues[e]
        }
        setStaticValue(e, t)
        {
            this.latestValues[e] = t
        }
        update(e, t)
        {
            (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
            this.prevProps = this.props,
            this.props = e,
            this.prevPresenceContext = this.presenceContext,
            this.presenceContext = t;
            for (let t = 0; t < Ga.length; t++) {
                let n = Ga[t];
                this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
                let r = e[`on` + n];
                r && (this.propEventSubscriptions[n] = this.on(n, r))
            }
            this.prevMotionValues = Ba(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues),
            this.handleChildMotionValue && this.handleChildMotionValue()
        }
        getProps()
        {
            return this.props
        }
        getVariant(e)
        {
            return this.props.variants ? this.props.variants[e] : void 0
        }
        getDefaultTransition()
        {
            return this.props.transition
        }
        getTransformPagePoint()
        {
            return this.props.transformPagePoint
        }
        getClosestVariantNode()
        {
            return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
        }
        addVariantChild(e)
        {
            let t = this.getClosestVariantNode();
            if (t)
                return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e)
        }
        addValue(e, t)
        {
            let n = this.values.get(e);
            t !== n && (n && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), this.latestValues[e] = t.get())
        }
        removeValue(e)
        {
            this.values.delete(e);
            let t = this.valueSubscriptions.get(e);
            t && (t(), this.valueSubscriptions.delete(e)),
            delete this.latestValues[e],
            this.removeValueFromRenderState(e, this.renderState)
        }
        hasValue(e)
        {
            return this.values.has(e)
        }
        getValue(e, t)
        {
            if (this.props.values && this.props.values[e])
                return this.props.values[e];
            let n = this.values.get(e);
            return n === void 0 && t !== void 0 && (n = zr(t === null ? void 0 : t, {
                owner: this
            }), this.addValue(e, n)), n
        }
        readValue(e, t)
        {
            let n = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
            return n != null && (typeof n == `string` && (re(n) || ae(n)) ? n = parseFloat(n) : !ka(n) && jt.test(t) && (n = Ni(e, t)), this.setBaseTarget(e, si(n) ? n.get() : n)), si(n) ? n.get() : n
        }
        setBaseTarget(e, t)
        {
            this.baseTarget[e] = t
        }
        getBaseTarget(e)
        {
            let {initial: t} = this.props,
                n;
            if (typeof t == `string` || typeof t == `object`) {
                let r = ei(this.props, t, this.presenceContext?.custom);
                r && (n = r[e])
            }
            if (t && n !== void 0)
                return n;
            let r = this.getBaseTargetFromProps(this.props, e);
            return r !== void 0 && !si(r) ? r : this.initialValues[e] !== void 0 && n === void 0 ? void 0 : this.baseTarget[e]
        }
        on(e, t)
        {
            return this.events[e] || (this.events[e] = new E), this.events[e].add(t)
        }
        notify(e, ...t)
        {
            this.events[e] && this.events[e].notify(...t)
        }
        scheduleRenderMicrotask()
        {
            P.render(this.render)
        }
    }
    ,
    Xa = class  extends Ya{
        constructor()
        {
            super(...arguments),
            this.KeyframeResolver = Ii
        }
        sortInstanceNodePosition(e, t)
        {
            return e.compareDocumentPosition(t) & 2 ? 1 : -1
        }
        getBaseTargetFromProps(e, t)
        {
            let n = e.style;
            return n ? n[t] : void 0
        }
        removeValueFromRenderState(e, {vars: t, style: n})
        {
            delete t[e],
            delete n[e]
        }
        handleChildMotionValue()
        {
            this.childSubscription && (this.childSubscription(), delete this.childSubscription);
            let {children: e} = this.props;
            si(e) && (this.childSubscription = e.on(`change`, e => {
                this.current && (this.current.textContent = `${e}`)
            }))
        }
    }
    ,
    Za = class {
        constructor(e)
        {
            this.isMounted = !1,
            this.node = e
        }
        update() {}
    }
    ;
function Qa({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function $a({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function eo(e, t) {
    if (!t)
        return e;
    let n = t({
            x: e.left,
            y: e.top
        }),
        r = t({
            x: e.right,
            y: e.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function to(e) {
    return e === void 0 || e === 1
}
function no({scale: e, scaleX: t, scaleY: n}) {
    return !to(e) || !to(t) || !to(n)
}
function ro(e) {
    return no(e) || io(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function io(e) {
    return ao(e.x) || ao(e.y)
}
function ao(e) {
    return e && e !== `0%`
}
function oo(e, t, n) {
    return n + t * (e - n)
}
function so(e, t, n, r, i) {
    return i !== void 0 && (e = oo(e, i, r)), oo(e, n, r) + t
}
function co(e, t=0, n=1, r, i) {
    e.min = so(e.min, t, n, r, i),
    e.max = so(e.max, t, n, r, i)
}
function lo(e, {x: t, y: n}) {
    co(e.x, t.translate, t.scale, t.originPoint),
    co(e.y, n.translate, n.scale, n.originPoint)
}
var uo = .999999999999,
    fo = 1.0000000000001;
function po(e, t, n, r=!1) {
    let i = n.length;
    if (!i)
        return;
    t.x = t.y = 1;
    let a,
        o;
    for (let s = 0; s < i; s++) {
        a = n[s],
        o = a.projectionDelta;
        let {visualElement: i} = a.options;
        i && i.props.style && i.props.style.display === `contents` || (r && a.options.layoutScroll && a.scroll && a !== a.root && (mo(e.x, -a.scroll.offset.x), mo(e.y, -a.scroll.offset.y)), o && (t.x *= o.x.scale, t.y *= o.y.scale, lo(e, o)), r && ro(a.latestValues) && _o(e, a.latestValues, a.layout?.layoutBox))
    }
    t.x < fo && t.x > uo && (t.x = 1),
    t.y < fo && t.y > uo && (t.y = 1)
}
function mo(e, t) {
    e.min += t,
    e.max += t
}
function ho(e, t, n, r, i=.5) {
    co(e, t, n, M(e.min, e.max, i), r)
}
function go(e, t) {
    return typeof e == `string` ? parseFloat(e) / 100 * (t.max - t.min) : e
}
function _o(e, t, n) {
    let r = n ?? e;
    ho(e.x, go(t.x, r.x), t.scaleX, t.scale, t.originX),
    ho(e.y, go(t.y, r.y), t.scaleY, t.scale, t.originY)
}
function I(e, t) {
    return Qa(eo(e.getBoundingClientRect(), t))
}
function L(e, t, n) {
    let r = I(e, n),
        {scroll: i} = t;
    return i && (mo(r.x, i.offset.x), mo(r.y, i.offset.y)), r
}
var vo = {
        x: `translateX`,
        y: `translateY`,
        z: `translateZ`,
        transformPerspective: `perspective`
    },
    yo = Hn.length;
function bo(e, t, n) {
    let r = ``,
        i = !0;
    for (let a = 0; a < yo; a++) {
        let o = Hn[a],
            s = e[o];
        if (s === void 0)
            continue;
        let c = !0;
        if (typeof s == `number`)
            c = s === +!!o.startsWith(`scale`);
        else {
            let e = parseFloat(s);
            c = o.startsWith(`scale`) ? e === 1 : e === 0
        }
        if (!c || n) {
            let e = zi(s, ki[o]);
            if (!c) {
                i = !1;
                let t = vo[o] || o;
                r += `${t}(${e}) `
            }
            n && (t[o] = e)
        }
    }
    let a = e.pathRotation;
    return a && (i = !1, r += `rotate(${zi(a, ki.pathRotation)}) `), r = r.trim(), n ? r = n(t, i ? `` : r) : i && (r = `none`), r
}
function xo(e, t, n) {
    let {style: r, vars: i, transformOrigin: a} = e,
        o = !1,
        s = !1;
    for (let e in t) {
        let n = t[e];
        if (Un.has(e)) {
            o = !0;
            continue
        }
        if (We(e)) {
            i[e] = n;
            continue
        }
        {
            let t = zi(n, ki[e]);
            e.startsWith(`origin`) ? (s = !0, a[e] = t) : r[e] = t
        }
    }
    if (t.transform || (o || n ? r.transform = bo(t, e.transform, n) : r.transform &&= `none`), s) {
        let {originX: e=`50%`, originY: t=`50%`, originZ: n=0} = a;
        r.transformOrigin = `${e} ${t} ${n}`
    }
}
function So(e, {style: t, vars: n}, r, i) {
    let a = e.style,
        o;
    for (o in t)
        a[o] = t[o];
    for (o in i?.applyProjectionStyles(a, r), n)
        a.setProperty(o, n[o])
}
function Co(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
var wo = {
        correct: (e, t) => {
            if (!t.target)
                return e;
            if (typeof e == `string`) {
                if (A.test(e))
                    e = parseFloat(e);
                else
                    return e
            }
            return `${Co(e, t.target.x)}% ${Co(e, t.target.y)}%`
        }
    },
    To = {
        correct: (e, {treeScale: t, projectionDelta: n}) => {
            let r = e,
                i = jt.parse(e);
            if (i.length > 5)
                return r;
            let a = jt.createTransformer(e),
                o = typeof i[0] == `number` ? 0 : 1,
                s = n.x.scale * t.x,
                c = n.y.scale * t.y;
            i[0 + o] /= s,
            i[1 + o] /= c;
            let l = M(s, c, .5);
            return typeof i[2 + o] == `number` && (i[2 + o] /= l), typeof i[3 + o] == `number` && (i[3 + o] /= l), a(i)
        }
    },
    Eo = {
        borderRadius: {
            ...wo,
            applyTo: [...Li]
        },
        borderTopLeftRadius: wo,
        borderTopRightRadius: wo,
        borderBottomLeftRadius: wo,
        borderBottomRightRadius: wo,
        boxShadow: To
    };
function Do(e, {layout: t, layoutId: n}) {
    return Un.has(e) || e.startsWith(`origin`) || (t || n !== void 0) && (!!Eo[e] || e === `opacity`)
}
function Oo(e, t, n) {
    let r = e.style,
        i = t?.style,
        a = {};
    if (!r)
        return a;
    for (let t in r)
        (si(r[t]) || i && si(i[t]) || Do(t, e) || n?.getValue(t)?.liveStyle !== void 0) && (a[t] = r[t]);
    return a
}
function ko(e) {
    return window.getComputedStyle(e)
}
var Ao = class  extends Xa{
        constructor()
        {
            super(...arguments),
            this.type = `html`,
            this.renderInstance = So
        }
        mount(e)
        {
            e.style,
            super.mount(e)
        }
        readValueFromInstance(e, t)
        {
            if (Un.has(t))
                return this.projection?.isProjecting ? Rn(t) : Bn(e, t);
            {
                let n = ko(e),
                    r = (We(t) ? n.getPropertyValue(t) : n[t]) || 0;
                return typeof r == `string` ? r.trim() : r
            }
        }
        measureInstanceViewportBox(e, {transformPagePoint: t})
        {
            return I(e, t)
        }
        build(e, t, n)
        {
            xo(e, t, n.transformTemplate)
        }
        scrapeMotionValuesFromProps(e, t, n)
        {
            return Oo(e, t, n)
        }
    }
    ,
    jo = {
        offset: `stroke-dashoffset`,
        array: `stroke-dasharray`
    },
    Mo = {
        offset: `strokeDashoffset`,
        array: `strokeDasharray`
    };
function No(e, t, n=1, r=0, i=!0) {
    e.pathLength = 1;
    let a = i ? jo : Mo;
    e[a.offset] = `${-r}`,
    e[a.array] = `${t} ${n}`
}
var Po = [`transform`, `opacity`, `offsetDistance`, `offsetPath`, `offsetRotate`, `offsetAnchor`];
function Fo(e, {attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: a=1, pathOffset: o=0, ...s}, c, l, u) {
    if (xo(e, s, l), c) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    let {attrs: d, style: f} = e;
    for (let e of Po)
        d[e] !== void 0 && (f[e] = d[e], delete d[e]);
    (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? `50% 50%`, delete d.transformOrigin),
    f.transform && (f.transformBox = u?.transformBox ?? `fill-box`, delete d.transformBox),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    i !== void 0 && No(d, i, a, o, !1)
}
var Io = new Set([`baseFrequency`, `diffuseConstant`, `kernelMatrix`, `kernelUnitLength`, `keySplines`, `keyTimes`, `limitingConeAngle`, `markerHeight`, `markerWidth`, `numOctaves`, `targetX`, `targetY`, `surfaceScale`, `specularConstant`, `specularExponent`, `stdDeviation`, `tableValues`, `viewBox`, `gradientTransform`, `pathLength`, `startOffset`, `textLength`, `lengthAdjust`]),
    Lo = e => typeof e == `string` && e.toLowerCase() === `svg`;
function Ro(e, t, n, r) {
    So(e, t, void 0, r);
    for (let n in t.attrs)
        e.setAttribute(Io.has(n) ? n : ui(n), t.attrs[n])
}
function zo(e, t, n) {
    let r = Oo(e, t, n);
    for (let n in e)
        if (si(e[n]) || si(t[n])) {
            let t = Hn.indexOf(n) === -1 ? n : `attr` + n.charAt(0).toUpperCase() + n.substring(1);
            r[t] = e[n]
        }
    return r
}
var Bo = class  extends Xa{
        constructor()
        {
            super(...arguments),
            this.type = `svg`,
            this.isSVGTag = !1,
            this.measureInstanceViewportBox = F
        }
        getBaseTargetFromProps(e, t)
        {
            return e[t]
        }
        readValueFromInstance(e, t)
        {
            if (Un.has(t)) {
                let e = ji(t);
                return e && e.default || 0
            }
            if (Po.includes(t)) {
                let n = getComputedStyle(e)[t];
                if (typeof n == `string` && n)
                    return n.trim()
            }
            return t = Io.has(t) ? t : ui(t), e.getAttribute(t)
        }
        scrapeMotionValuesFromProps(e, t, n)
        {
            return zo(e, t, n)
        }
        build(e, t, n)
        {
            Fo(e, t, this.isSVGTag, n.transformTemplate, n.style)
        }
        renderInstance(e, t, n, r)
        {
            Ro(e, t, n, r)
        }
        mount(e)
        {
            this.isSVGTag = Lo(e.tagName),
            super.mount(e)
        }
    }
    ,
    Vo = La.length;
function Ho(e) {
    if (!e)
        return;
    if (!e.isControllingVariants) {
        let t = e.parent && Ho(e.parent) || {};
        return e.props.initial !== void 0 && (t.initial = e.props.initial), t
    }
    let t = {};
    for (let n = 0; n < Vo; n++) {
        let r = La[n],
            i = e.props[r];
        (Fa(i) || i === !1) && (t[r] = i)
    }
    return t
}
function Uo(e, t) {
    if (!Array.isArray(t))
        return !1;
    let n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
var Wo = [...Ia].reverse(),
    Go = Ia.length;
function Ko(e) {
    return t => Promise.all(t.map(({animation: t, options: n}) => _i(e, t, n)))
}
function qo(e) {
    let t = Ko(e),
        n = Xo(),
        r = !0,
        i = !1,
        a = t => (n, r) => {
            let i = ti(e, r, t === `exit` ? e.presenceContext?.custom : void 0);
            if (i) {
                let {transition: e, transitionEnd: t, ...r} = i;
                n = {
                    ...n,
                    ...r,
                    ...t
                }
            }
            return n
        };
    function o(n) {
        t = n(e)
    }
    function s(o) {
        let {props: s} = e,
            c = Ho(e.parent) || {},
            l = [],
            u = new Set,
            d = {},
            f = 1 / 0;
        for (let t = 0; t < Go; t++) {
            let p = Wo[t],
                m = n[p],
                h = s[p] === void 0 ? c[p] : s[p],
                g = Fa(h),
                _ = p === o ? m.isActive : null;
            _ === !1 && (f = t);
            let v = h === c[p] && h !== s[p] && g;
            if (v && (r || i) && e.manuallyAnimateOnMount && (v = !1), m.protectedKeys = {
                ...d
            }, !m.isActive && _ === null || !h && !m.prevProp || Pa(h) || typeof h == `boolean`)
                continue;
            if (p === `exit` && m.isActive && _ !== !0) {
                m.prevResolvedValues && (d = {
                    ...d,
                    ...m.prevResolvedValues
                });
                continue
            }
            let y = Jo(m.prevProp, h),
                b = y || p === o && m.isActive && !v && g || t > f && g,
                x = !1,
                S = Array.isArray(h) ? h : [h],
                C = S.reduce(a(p), {});
            _ === !1 && (C = {});
            let {prevResolvedValues: w={}} = m,
                ee = {
                    ...w,
                    ...C
                },
                te = t => {
                    b = !0,
                    u.has(t) && (x = !0, u.delete(t)),
                    m.needsAnimating[t] = !0;
                    let n = e.getValue(t);
                    n && (n.liveStyle = !1)
                };
            for (let e in ee) {
                let t = C[e],
                    n = w[e];
                if (d.hasOwnProperty(e))
                    continue;
                let r = !1;
                r = ri(t) && ri(n) ? !Uo(t, n) || y : t !== n,
                r ? t == null ? u.add(e) : te(e) : t !== void 0 && u.has(e) ? te(e) : m.protectedKeys[e] = !0
            }
            m.prevProp = h,
            m.prevResolvedValues = C,
            m.isActive && (d = {
                ...d,
                ...C
            }),
            (r || i) && e.blockInitialAnimation && (b = !1);
            let ne = v && y;
            b && (!ne || x) && l.push(...S.map(t => {
                let n = {
                    type: p
                };
                if (typeof t == `string` && (r || i) && !ne && e.manuallyAnimateOnMount && e.parent) {
                    let {parent: r} = e,
                        i = ti(r, t);
                    if (r.enteringChildren && i) {
                        let {delayChildren: t} = i.transition || {};
                        n.delay = Pr(r.enteringChildren, e, t)
                    }
                }
                return {
                    animation: t,
                    options: n
                }
            }))
        }
        if (u.size) {
            let t = {};
            if (typeof s.initial != `boolean`) {
                let n = ti(e, Array.isArray(s.initial) ? s.initial[0] : s.initial);
                n && n.transition && (t.transition = n.transition)
            }
            u.forEach(n => {
                let r = e.getBaseTarget(n),
                    i = e.getValue(n);
                i && (i.liveStyle = !0),
                t[n] = r ?? null
            }),
            l.push({
                animation: t
            })
        }
        let p = !!l.length;
        return r && (s.initial === !1 || s.initial === s.animate) && !e.manuallyAnimateOnMount && (p = !1), r = !1, i = !1, p ? t(l) : Promise.resolve()
    }
    function c(t, r) {
        if (n[t].isActive === r)
            return Promise.resolve();
        e.variantChildren?.forEach(e => e.animationState?.setActive(t, r)),
        n[t].isActive = r;
        let i = s(t);
        for (let e in n)
            n[e].protectedKeys = {};
        return i
    }
    return {
        animateChanges: s,
        setActive: c,
        setAnimateFunction: o,
        getState: () => n,
        reset: () => {
            n = Xo(),
            i = !0
        }
    }
}
function Jo(e, t) {
    return typeof t == `string` ? t !== e : Array.isArray(t) ? !Uo(t, e) : !1
}
function Yo(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function Xo() {
    return {
        animate: Yo(!0),
        whileInView: Yo(),
        whileHover: Yo(),
        whileTap: Yo(),
        whileDrag: Yo(),
        whileFocus: Yo(),
        exit: Yo()
    }
}
function Zo(e, t) {
    e.min = t.min,
    e.max = t.max
}
function Qo(e, t) {
    Zo(e.x, t.x),
    Zo(e.y, t.y)
}
function $o(e, t) {
    e.translate = t.translate,
    e.scale = t.scale,
    e.originPoint = t.originPoint,
    e.origin = t.origin
}
var es = .9999,
    ts = 1.0001,
    ns = -.01,
    rs = .01;
function is(e) {
    return e.max - e.min
}
function as(e, t, n) {
    return Math.abs(e - t) <= n
}
function os(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = M(t.min, t.max, e.origin),
    e.scale = is(n) / is(t),
    e.translate = M(n.min, n.max, e.origin) - e.originPoint,
    (e.scale >= es && e.scale <= ts || isNaN(e.scale)) && (e.scale = 1),
    (e.translate >= ns && e.translate <= rs || isNaN(e.translate)) && (e.translate = 0)
}
function ss(e, t, n, r) {
    os(e.x, t.x, n.x, r ? r.originX : void 0),
    os(e.y, t.y, n.y, r ? r.originY : void 0)
}
function cs(e, t, n, r=0) {
    e.min = (r ? M(n.min, n.max, r) : n.min) + t.min,
    e.max = e.min + is(t)
}
function ls(e, t, n, r) {
    cs(e.x, t.x, n.x, r?.x),
    cs(e.y, t.y, n.y, r?.y)
}
function us(e, t, n, r=0) {
    let i = r ? M(n.min, n.max, r) : n.min;
    e.min = t.min - i,
    e.max = e.min + is(t)
}
function ds(e, t, n, r) {
    us(e.x, t.x, n.x, r?.x),
    us(e.y, t.y, n.y, r?.y)
}
function fs(e, t, n, r, i) {
    return e -= t, e = oo(e, 1 / n, r), i !== void 0 && (e = oo(e, 1 / i, r)), e
}
function ps(e, t=0, n=1, r=.5, i, a=e, o=e) {
    if (dt.test(t) && (t = parseFloat(t), t = M(o.min, o.max, t / 100) - o.min), typeof t != `number`)
        return;
    let s = M(a.min, a.max, r);
    e === a && (s -= t),
    e.min = fs(e.min, t, n, s, i),
    e.max = fs(e.max, t, n, s, i)
}
function ms(e, t, [n, r, i], a, o) {
    ps(e, t[n], t[r], t[i], t.scale, a, o)
}
var hs = [`x`, `scaleX`, `originX`],
    gs = [`y`, `scaleY`, `originY`];
function _s(e, t, n, r) {
    ms(e.x, t, hs, n ? n.x : void 0, r ? r.x : void 0),
    ms(e.y, t, gs, n ? n.y : void 0, r ? r.y : void 0)
}
function vs(e) {
    return e.translate === 0 && e.scale === 1
}
function ys(e) {
    return vs(e.x) && vs(e.y)
}
function bs(e, t) {
    return e.min === t.min && e.max === t.max
}
function xs(e, t) {
    return bs(e.x, t.x) && bs(e.y, t.y)
}
function Ss(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}
function Cs(e, t) {
    return Ss(e.x, t.x) && Ss(e.y, t.y)
}
function ws(e) {
    return is(e.x) / is(e.y)
}
function Ts(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
function Es(e) {
    return [e(`x`), e(`y`)]
}
function Ds(e, t, n) {
    let r = ``,
        i = e.x.translate / t.x,
        a = e.y.translate / t.y,
        o = n?.z || 0;
    if ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
        let {transformPerspective: e, rotate: t, pathRotation: i, rotateX: a, rotateY: o, skewX: s, skewY: c} = n;
        e && (r = `perspective(${e}px) ${r}`),
        t && (r += `rotate(${t}deg) `),
        i && (r += `rotate(${i}deg) `),
        a && (r += `rotateX(${a}deg) `),
        o && (r += `rotateY(${o}deg) `),
        s && (r += `skewX(${s}deg) `),
        c && (r += `skewY(${c}deg) `)
    }
    let s = e.x.scale * t.x,
        c = e.y.scale * t.y;
    return (s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || `none`
}
var Os = Li.length,
    ks = e => typeof e == `string` ? parseFloat(e) : e,
    As = e => typeof e == `number` || A.test(e);
function js(e, t, n, r, i, a) {
    i ? (e.opacity = M(0, n.opacity ?? 1, Ns(r)), e.opacityExit = M(t.opacity ?? 1, 0, Ps(r))) : a && (e.opacity = M(t.opacity ?? 1, n.opacity ?? 1, r));
    for (let i = 0; i < Os; i++) {
        let a = Li[i],
            o = Ms(t, a),
            s = Ms(n, a);
        (o !== void 0 || s !== void 0) && (o ||= 0, s ||= 0, o === 0 || s === 0 || As(o) === As(s) ? (e[a] = Math.max(M(ks(o), ks(s), r), 0), (dt.test(s) || dt.test(o)) && (e[a] += `%`)) : e[a] = s)
    }
    (t.rotate || n.rotate) && (e.rotate = M(t.rotate || 0, n.rotate || 0, r))
}
function Ms(e, t) {
    return e[t] === void 0 ? e.borderRadius : e[t]
}
var Ns = Fs(0, .5, Ce),
    Ps = Fs(.5, .95, se);
function Fs(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(le(e, t, r))
}
function Is(e, t, n) {
    let r = si(e) ? e : zr(e);
    return r.start(Yr(``, r, t, n)), r.animation
}
function Ls(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)
}
var Rs = (e, t) => e.depth - t.depth,
    zs = class {
        constructor()
        {
            this.children = [],
            this.isDirty = !1
        }
        add(e)
        {
            ee(this.children, e),
            this.isDirty = !0
        }
        remove(e)
        {
            te(this.children, e),
            this.isDirty = !0
        }
        forEach(e)
        {
            this.isDirty && this.children.sort(Rs),
            this.isDirty = !1,
            this.children.forEach(e)
        }
    }
    ;
function Bs(e, t) {
    let n = He.now(),
        r = ({timestamp: i}) => {
            let a = i - n;
            a >= t && (Le(r), e(a - t))
        };
    return k.setup(r, !0), () => Le(r)
}
function Vs(e) {
    return si(e) ? e.get() : e
}
var Hs = class {
        constructor()
        {
            this.members = []
        }
        add(e)
        {
            ee(this.members, e);
            for (let t = this.members.length - 1; t >= 0; t--) {
                let n = this.members[t];
                if (n === e || n === this.lead || n === this.prevLead)
                    continue;
                let r = n.instance;
                (!r || r.isConnected === !1) && !n.snapshot && (te(this.members, n), n.unmount())
            }
            e.scheduleRender()
        }
        remove(e)
        {
            if (te(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
                let e = this.members[this.members.length - 1];
                e && this.promote(e)
            }
        }
        relegate(e)
        {
            for (let t = this.members.indexOf(e) - 1; t >= 0; t--) {
                let e = this.members[t];
                if (e.isPresent !== !1 && e.instance?.isConnected !== !1)
                    return this.promote(e), !0
            }
            return !1
        }
        promote(e, t)
        {
            let n = this.lead;
            if (e !== n && (this.prevLead = n, this.lead = e, e.show(), n)) {
                n.updateSnapshot(),
                e.scheduleRender();
                let {layoutDependency: r} = n.options,
                    {layoutDependency: i} = e.options;
                (r === void 0 || r !== i) && (e.resumeFrom = n, t && (n.preserveOpacity = !0), n.snapshot && (e.snapshot = n.snapshot, e.snapshot.latestValues = n.animationValues || n.latestValues), e.root?.isUpdating && (e.isLayoutDirty = !0)),
                e.options.crossfade === !1 && n.hide()
            }
        }
        exitAnimationComplete()
        {
            this.members.forEach(e => {
                e.options.onExitComplete?.(),
                e.resumingFrom?.options.onExitComplete?.()
            })
        }
        scheduleRender()
        {
            this.members.forEach(e => e.instance && e.scheduleRender(!1))
        }
        removeLeadSnapshot()
        {
            this.lead?.snapshot && (this.lead.snapshot = void 0)
        }
    }
    ,
    Us = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    },
    Ws = {
        nodes: 0,
        calculatedTargetDeltas: 0,
        calculatedProjections: 0
    },
    Gs = [``, `X`, `Y`, `Z`],
    Ks = 1e3,
    qs = 0;
function Js(e, t, n, r) {
    let {latestValues: i} = t;
    i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0))
}
function Ys(e) {
    if (e.hasCheckedOptimisedAppear = !0, e.root === e)
        return;
    let {visualElement: t} = e.options;
    if (!t)
        return;
    let n = fi(t);
    if (window.MotionHasOptimisedAnimation(n, `transform`)) {
        let {layout: t, layoutId: r} = e.options;
        window.MotionCancelOptimisedAnimation(n, `transform`, k, !(t || r))
    }
    let {parent: r} = e;
    r && !r.hasCheckedOptimisedAppear && Ys(r)
}
function Xs({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
    return class {
        constructor(e={}, n=t?.())
        {
            this.id = qs++,
            this.animationId = 0,
            this.animationCommitId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.layoutVersion = 0,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            },
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                Sa.value && (Ws.nodes = Ws.calculatedTargetDeltas = Ws.calculatedProjections = 0),
                this.nodes.forEach($s),
                this.nodes.forEach(cc),
                this.nodes.forEach(lc),
                this.nodes.forEach(ec),
                Sa.addProjectionMetrics && Sa.addProjectionMetrics(Ws)
            },
            this.resolvedRelativeTargetAt = 0,
            this.linkedParentVersion = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = e,
            this.root = n ? n.root || n : this,
            this.path = n ? [...n.path, n] : [],
            this.parent = n,
            this.depth = n ? n.depth + 1 : 0;
            for (let e = 0; e < this.path.length; e++)
                this.path[e].shouldResetTransform = !0;
            this.root === this && (this.nodes = new zs)
        }
        addEventListener(e, t)
        {
            return this.eventHandlers.has(e) || this.eventHandlers.set(e, new E), this.eventHandlers.get(e).add(t)
        }
        notifyListeners(e, ...t)
        {
            let n = this.eventHandlers.get(e);
            n && n.notify(...t)
        }
        hasListeners(e)
        {
            return this.eventHandlers.has(e)
        }
        mount(t)
        {
            if (this.instance)
                return;
            this.isSVG = oa(t) && !Ca(t),
            this.instance = t;
            let {layoutId: n, layout: r, visualElement: i} = this.options;
            if (i && !i.current && i.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (r || n) && (this.isLayoutDirty = !0), e) {
                let n,
                    r = 0,
                    i = () => this.root.updateBlockedByResize = !1;
                k.read(() => {
                    r = window.innerWidth
                }),
                e(t, () => {
                    let e = window.innerWidth;
                    e !== r && (r = e, this.root.updateBlockedByResize = !0, n && n(), n = Bs(i, 250), Us.hasAnimatedSinceResize && (Us.hasAnimatedSinceResize = !1, this.nodes.forEach(sc)))
                })
            }
            n && this.root.registerSharedNode(n, this),
            this.options.animate !== !1 && i && (n || r) && this.addEventListener(`didUpdate`, ({delta: e, hasLayoutChanged: t, hasRelativeLayoutChanged: n, layout: r}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                let a = this.options.transition || i.getDefaultTransition() || gc,
                    {onLayoutAnimationStart: o, onLayoutAnimationComplete: s} = i.getProps(),
                    c = !this.targetLayout || !Cs(this.targetLayout, r),
                    l = !t && n;
                if (this.options.layoutRoot || this.resumeFrom || l || t && (c || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                    let t = {
                        ...Vr(a, `layout`),
                        onPlay: o,
                        onComplete: s
                    };
                    (i.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1),
                    this.startAnimation(t),
                    this.setAnimationOrigin(e, l, t.path)
                } else
                    t || sc(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = r
            })
        }
        unmount()
        {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            let e = this.getStack();
            e && e.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            this.eventHandlers.clear(),
            Le(this.updateProjection)
        }
        blockUpdate()
        {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate()
        {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked()
        {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked()
        {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate()
        {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(uc), this.animationId++)
        }
        getTransformTemplate()
        {
            let {visualElement: e} = this.options;
            return e && e.getProps().transformTemplate
        }
        willUpdate(e=!0)
        {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Ys(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let e = 0; e < this.path.length; e++) {
                let t = this.path[e];
                t.shouldResetTransform = !0,
                (typeof t.latestValues.x == `string` || typeof t.latestValues.y == `string`) && (t.isLayoutDirty = !0),
                t.updateScroll(`snapshot`),
                t.options.layoutRoot && t.willUpdate(!1)
            }
            let {layoutId: t, layout: n} = this.options;
            if (t === void 0 && !n)
                return;
            let r = this.getTransformTemplate();
            this.prevTransformTemplateValue = r ? r(this.latestValues, ``) : void 0,
            this.updateSnapshot(),
            e && this.notifyListeners(`willUpdate`)
        }
        update()
        {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                let e = this.updateBlockedByResize;
                this.unblockUpdate(),
                this.updateBlockedByResize = !1,
                this.clearAllSnapshots(),
                e && this.nodes.forEach(rc),
                this.nodes.forEach(nc);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(ic);
                return
            }
            this.animationCommitId = this.animationId,
            this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(ac), this.nodes.forEach(oc), this.nodes.forEach(Zs), this.nodes.forEach(Qs)) : this.nodes.forEach(ic),
            this.clearAllSnapshots();
            let e = He.now();
            Re.delta = ne(0, 1e3 / 60, e - Re.timestamp),
            Re.timestamp = e,
            Re.isProcessing = !0,
            ze.update.process(Re),
            ze.preRender.process(Re),
            ze.render.process(Re),
            Re.isProcessing = !1
        }
        didUpdate()
        {
            this.updateScheduled || (this.updateScheduled = !0, P.read(this.scheduleUpdate))
        }
        clearAllSnapshots()
        {
            this.nodes.forEach(tc),
            this.sharedNodes.forEach(dc)
        }
        scheduleUpdateProjection()
        {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, k.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount()
        {
            k.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot()
        {
            this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !is(this.snapshot.measuredBox.x) && !is(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout()
        {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let e = 0; e < this.path.length; e++)
                    this.path[e].updateScroll();
            let e = this.layout;
            this.layout = this.measure(!1),
            this.layoutVersion++,
            this.layoutCorrected ||= F(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners(`measure`, this.layout.layoutBox);
            let {visualElement: t} = this.options;
            t && t.notify(`LayoutMeasure`, this.layout.layoutBox, e ? e.layoutBox : void 0)
        }
        updateScroll(e=`measure`)
        {
            let t = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t && this.instance) {
                let t = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: e,
                    isRoot: t,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : t
                }
            }
        }
        resetTransform()
        {
            if (!i)
                return;
            let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                t = this.projectionDelta && !ys(this.projectionDelta),
                n = this.getTransformTemplate(),
                r = n ? n(this.latestValues, ``) : void 0,
                a = r !== this.prevTransformTemplateValue;
            e && this.instance && (t || ro(this.latestValues) || a) && (i(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(e=!0)
        {
            let t = this.measurePageBox(),
                n = this.removeElementScroll(t);
            return e && (n = this.removeTransform(n)), bc(n), {
                animationId: this.root.animationId,
                measuredBox: t,
                layoutBox: n,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox()
        {
            let {visualElement: e} = this.options;
            if (!e)
                return F();
            let t = e.measureViewportBox();
            if (!(this.scroll?.wasRoot || this.path.some(Sc))) {
                let {scroll: e} = this.root;
                e && (mo(t.x, e.offset.x), mo(t.y, e.offset.y))
            }
            return t
        }
        removeElementScroll(e)
        {
            let t = F();
            if (Qo(t, e), this.scroll?.wasRoot)
                return t;
            for (let n = 0; n < this.path.length; n++) {
                let r = this.path[n],
                    {scroll: i, options: a} = r;
                r !== this.root && i && a.layoutScroll && (i.wasRoot && Qo(t, e), mo(t.x, i.offset.x), mo(t.y, i.offset.y))
            }
            return t
        }
        applyTransform(e, t=!1, n)
        {
            let r = n || F();
            Qo(r, e);
            for (let e = 0; e < this.path.length; e++) {
                let n = this.path[e];
                !t && n.options.layoutScroll && n.scroll && n !== n.root && (mo(r.x, -n.scroll.offset.x), mo(r.y, -n.scroll.offset.y)),
                ro(n.latestValues) && _o(r, n.latestValues, n.layout?.layoutBox)
            }
            return ro(this.latestValues) && _o(r, this.latestValues, this.layout?.layoutBox), r
        }
        removeTransform(e)
        {
            let t = F();
            Qo(t, e);
            for (let e = 0; e < this.path.length; e++) {
                let n = this.path[e];
                if (!ro(n.latestValues))
                    continue;
                let r;
                n.instance && (no(n.latestValues) && n.updateSnapshot(), r = F(), Qo(r, n.measurePageBox())),
                _s(t, n.latestValues, n.snapshot?.layoutBox, r)
            }
            return ro(this.latestValues) && _s(t, this.latestValues), t
        }
        setTargetDelta(e)
        {
            this.targetDelta = e,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(e)
        {
            this.options = {
                ...this.options,
                ...e,
                crossfade: e.crossfade === void 0 || e.crossfade
            }
        }
        clearMeasurements()
        {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget()
        {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Re.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(e=!1)
        {
            let t = this.getLead();
            this.isProjectionDirty ||= t.isProjectionDirty,
            this.isTransformDirty ||= t.isTransformDirty,
            this.isSharedProjectionDirty ||= t.isSharedProjectionDirty;
            let n = !!this.resumingFrom || this !== t;
            if (!(e || n && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            let {layout: r, layoutId: i} = this.options;
            if (!this.layout || !(r || i))
                return;
            this.resolvedRelativeTargetAt = Re.timestamp;
            let a = this.getClosestProjectingParent();
            a && this.linkedParentVersion !== a.layoutVersion && !a.options.layoutRoot && this.removeRelativeTarget(),
            !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && a && a.layout ? this.createRelativeTarget(a, this.layout.layoutBox, a.layout.layoutBox) : this.removeRelativeTarget()),
            !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = F(), this.targetWithTransforms = F()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), ls(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Qo(this.target, this.layout.layoutBox), lo(this.target, this.targetDelta)) : Qo(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && a && !!a.resumingFrom == !!this.resumingFrom && !a.options.layoutScroll && a.target && this.animationProgress !== 1 ? this.createRelativeTarget(a, this.target, a.target) : this.relativeParent = this.relativeTarget = void 0), Sa.value && Ws.calculatedTargetDeltas++)
        }
        getClosestProjectingParent()
        {
            if (!(!this.parent || no(this.parent.latestValues) || io(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting()
        {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        createRelativeTarget(e, t, n)
        {
            this.relativeParent = e,
            this.linkedParentVersion = e.layoutVersion,
            this.forceRelativeParentToResolveTarget(),
            this.relativeTarget = F(),
            this.relativeTargetOrigin = F(),
            ds(this.relativeTargetOrigin, t, n, this.options.layoutAnchor || void 0),
            Qo(this.relativeTarget, this.relativeTargetOrigin)
        }
        removeRelativeTarget()
        {
            this.relativeParent = this.relativeTarget = void 0
        }
        calcProjection()
        {
            let e = this.getLead(),
                t = !!this.resumingFrom || this !== e,
                n = !0;
            if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1), t && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === Re.timestamp && (n = !1), n)
                return;
            let {layout: r, layoutId: i} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || i))
                return;
            Qo(this.layoutCorrected, this.layout.layoutBox);
            let a = this.treeScale.x,
                o = this.treeScale.y;
            po(this.layoutCorrected, this.treeScale, this.path, t),
            e.layout && !e.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (e.target = e.layout.layoutBox, e.targetWithTransforms = F());
            let {target: s} = e;
            if (!s) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : ($o(this.prevProjectionDelta.x, this.projectionDelta.x), $o(this.prevProjectionDelta.y, this.projectionDelta.y)),
            ss(this.projectionDelta, this.layoutCorrected, s, this.latestValues),
            (this.treeScale.x !== a || this.treeScale.y !== o || !Ts(this.projectionDelta.x, this.prevProjectionDelta.x) || !Ts(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners(`projectionUpdate`, s)),
            Sa.value && Ws.calculatedProjections++
        }
        hide()
        {
            this.isVisible = !1
        }
        show()
        {
            this.isVisible = !0
        }
        scheduleRender(e=!0)
        {
            if (this.options.visualElement?.scheduleRender(), e) {
                let e = this.getStack();
                e && e.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas()
        {
            this.prevProjectionDelta = ja(),
            this.projectionDelta = ja(),
            this.projectionDeltaWithTransform = ja()
        }
        setAnimationOrigin(e, t=!1, n)
        {
            let r = this.snapshot,
                i = r ? r.latestValues : {},
                a = {
                    ...this.latestValues
                },
                o = ja();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !t;
            let s = F(),
                c = (r ? r.source : void 0) !== (this.layout ? this.layout.source : void 0),
                l = this.getStack(),
                u = !l || l.members.length <= 1,
                d = !!(c && !u && this.options.crossfade === !0 && !this.path.some(hc));
            this.animationProgress = 0;
            let f,
                p = n?.interpolateProjection(e);
            this.mixTargetDelta = t => {
                let n = t / 1e3,
                    r = p?.(n);
                r ? (o.x.translate = r.x, o.x.scale = M(e.x.scale, 1, n), o.x.origin = e.x.origin, o.x.originPoint = e.x.originPoint, o.y.translate = r.y, o.y.scale = M(e.y.scale, 1, n), o.y.origin = e.y.origin, o.y.originPoint = e.y.originPoint) : (fc(o.x, e.x, n), fc(o.y, e.y, n)),
                this.setTargetDelta(o),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ds(s, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), mc(this.relativeTarget, this.relativeTargetOrigin, s, n), f && xs(this.relativeTarget, f) && (this.isProjectionDirty = !1), f ||= F(), Qo(f, this.relativeTarget)),
                c && (this.animationValues = a, js(a, i, this.latestValues, n, d, u)),
                r && r.rotate !== void 0 && (this.animationValues ||= a, this.animationValues.pathRotation = r.rotate),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = n
            },
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(e)
        {
            this.notifyListeners(`animationStart`),
            this.currentAnimation?.stop(),
            this.resumingFrom?.currentAnimation?.stop(),
            this.pendingAnimation &&= (Le(this.pendingAnimation), void 0),
            this.pendingAnimation = k.update(() => {
                Us.hasAnimatedSinceResize = !0,
                this.motionValue ||= zr(0),
                this.motionValue.jump(0, !1),
                this.currentAnimation = Is(this.motionValue, [0, 1e3], {
                    ...e,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: t => {
                        this.mixTargetDelta(t),
                        e.onUpdate && e.onUpdate(t)
                    },
                    onComplete: () => {
                        e.onComplete && e.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            })
        }
        completeAnimation()
        {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            let e = this.getStack();
            e && e.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners(`animationComplete`)
        }
        finishAnimation()
        {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Ks), this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget()
        {
            let e = this.getLead(),
                {targetWithTransforms: t, target: n, layout: r, latestValues: i} = e;
            if (!(!t || !n || !r)) {
                if (this !== e && this.layout && r && xc(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                    n = this.target || F();
                    let t = is(this.layout.layoutBox.x);
                    n.x.min = e.target.x.min,
                    n.x.max = n.x.min + t;
                    let r = is(this.layout.layoutBox.y);
                    n.y.min = e.target.y.min,
                    n.y.max = n.y.min + r
                }
                Qo(t, n),
                _o(t, i),
                ss(this.projectionDeltaWithTransform, this.layoutCorrected, t, i)
            }
        }
        registerSharedNode(e, t)
        {
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new Hs),
            this.sharedNodes.get(e).add(t);
            let n = t.options.initialPromotionConfig;
            t.promote({
                transition: n ? n.transition : void 0,
                preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0
            })
        }
        isLead()
        {
            let e = this.getStack();
            return !e || e.lead === this
        }
        getLead()
        {
            let {layoutId: e} = this.options;
            return e && this.getStack()?.lead || this
        }
        getPrevLead()
        {
            let {layoutId: e} = this.options;
            return e ? this.getStack()?.prevLead : void 0
        }
        getStack()
        {
            let {layoutId: e} = this.options;
            if (e)
                return this.root.sharedNodes.get(e)
        }
        promote({needsReset: e, transition: t, preserveFollowOpacity: n}={})
        {
            let r = this.getStack();
            r && r.promote(this, n),
            e && (this.projectionDelta = void 0, this.needsReset = !0),
            t && this.setOptions({
                transition: t
            })
        }
        relegate()
        {
            let e = this.getStack();
            return e ? e.relegate(this) : !1
        }
        resetSkewAndRotation()
        {
            let {visualElement: e} = this.options;
            if (!e)
                return;
            let t = !1,
                {latestValues: n} = e;
            if ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (t = !0), !t)
                return;
            let r = {};
            n.z && Js(`z`, e, r, this.animationValues);
            for (let t = 0; t < Gs.length; t++)
                Js(`rotate${Gs[t]}`, e, r, this.animationValues),
                Js(`skew${Gs[t]}`, e, r, this.animationValues);
            e.render();
            for (let t in r)
                e.setStaticValue(t, r[t]),
                this.animationValues && (this.animationValues[t] = r[t]);
            e.scheduleRender()
        }
        applyProjectionStyles(e, t)
        {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible) {
                e.visibility = `hidden`;
                return
            }
            let n = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1,
                e.visibility = ``,
                e.opacity = ``,
                e.pointerEvents = Vs(t?.pointerEvents) || ``,
                e.transform = n ? n(this.latestValues, ``) : `none`;
                return
            }
            let r = this.getLead();
            if (!this.projectionDelta || !this.layout || !r.target) {
                this.options.layoutId && (e.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity, e.pointerEvents = Vs(t?.pointerEvents) || ``),
                this.hasProjected && !ro(this.latestValues) && (e.transform = n ? n({}, ``) : `none`, this.hasProjected = !1);
                return
            }
            e.visibility = ``;
            let i = r.animationValues || r.latestValues;
            this.applyTransformsToTarget();
            let a = Ds(this.projectionDeltaWithTransform, this.treeScale, i);
            n && (a = n(i, a)),
            e.transform = a;
            let {x: o, y: s} = this.projectionDelta;
            e.transformOrigin = `${o.origin * 100}% ${s.origin * 100}% 0`,
            e.opacity = r.animationValues ? r === this ? i.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : i.opacityExit : r === this ? i.opacity === void 0 ? `` : i.opacity : i.opacityExit === void 0 ? 0 : i.opacityExit;
            for (let t in Eo) {
                if (i[t] === void 0)
                    continue;
                let {correct: n, applyTo: o, isCSSVariable: s} = Eo[t],
                    c = a === `none` ? i[t] : n(i[t], r);
                if (o) {
                    let t = o.length;
                    for (let n = 0; n < t; n++)
                        e[o[n]] = c
                } else
                    s ? this.options.visualElement.renderState.vars[t] = c : e[t] = c
            }
            this.options.layoutId && (e.pointerEvents = r === this ? Vs(t?.pointerEvents) || `` : `none`)
        }
        clearSnapshot()
        {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree()
        {
            this.root.nodes.forEach(e => e.currentAnimation?.stop()),
            this.root.nodes.forEach(nc),
            this.root.sharedNodes.clear()
        }
    }
}
function Zs(e) {
    e.updateLayout()
}
function Qs(e) {
    let t = e.resumeFrom?.snapshot || e.snapshot;
    if (e.isLead() && e.layout && t && e.hasListeners(`didUpdate`)) {
        let {layoutBox: n, measuredBox: r} = e.layout,
            {animationType: i} = e.options,
            a = t.source !== e.layout.source;
        if (i === `size`)
            Es(e => {
                let r = a ? t.measuredBox[e] : t.layoutBox[e],
                    i = is(r);
                r.min = n[e].min,
                r.max = r.min + i
            });
        else if (i === `x` || i === `y`) {
            let e = i === `x` ? `y` : `x`;
            Zo(a ? t.measuredBox[e] : t.layoutBox[e], n[e])
        } else
            xc(i, t.layoutBox, n) && Es(r => {
                let i = a ? t.measuredBox[r] : t.layoutBox[r],
                    o = is(n[r]);
                i.max = i.min + o,
                e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[r].max = e.relativeTarget[r].min + o)
            });
        let o = ja();
        ss(o, n, t.layoutBox);
        let s = ja();
        a ? ss(s, e.applyTransform(r, !0), t.measuredBox) : ss(s, n, t.layoutBox);
        let c = !ys(o),
            l = !1;
        if (!e.resumeFrom) {
            let r = e.getClosestProjectingParent();
            if (r && !r.resumeFrom) {
                let {snapshot: i, layout: a} = r;
                if (i && a) {
                    let o = e.options.layoutAnchor || void 0,
                        s = F();
                    ds(s, t.layoutBox, i.layoutBox, o);
                    let c = F();
                    ds(c, n, a.layoutBox, o),
                    Cs(s, c) || (l = !0),
                    r.options.layoutRoot && (e.relativeTarget = c, e.relativeTargetOrigin = s, e.relativeParent = r)
                }
            }
        }
        e.notifyListeners(`didUpdate`, {
            layout: n,
            snapshot: t,
            delta: s,
            layoutDelta: o,
            hasLayoutChanged: c,
            hasRelativeLayoutChanged: l
        })
    } else if (e.isLead()) {
        let {onExitComplete: t} = e.options;
        t && t()
    }
    e.options.transition = void 0
}
function $s(e) {
    Sa.value && Ws.nodes++,
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty ||= !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty), e.isTransformDirty ||= e.parent.isTransformDirty)
}
function ec(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function tc(e) {
    e.clearSnapshot()
}
function nc(e) {
    e.clearMeasurements()
}
function rc(e) {
    e.isLayoutDirty = !0,
    e.updateLayout()
}
function ic(e) {
    e.isLayoutDirty = !1
}
function ac(e) {
    e.isAnimationBlocked && e.layout && !e.isLayoutDirty && (e.snapshot = e.layout, e.isLayoutDirty = !0)
}
function oc(e) {
    let {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify(`BeforeLayoutMeasure`),
    e.resetTransform()
}
function sc(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function cc(e) {
    e.resolveTargetDelta()
}
function lc(e) {
    e.calcProjection()
}
function uc(e) {
    e.resetSkewAndRotation()
}
function dc(e) {
    e.removeLeadSnapshot()
}
function fc(e, t, n) {
    e.translate = M(t.translate, 0, n),
    e.scale = M(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function pc(e, t, n, r) {
    e.min = M(t.min, n.min, r),
    e.max = M(t.max, n.max, r)
}
function mc(e, t, n, r) {
    pc(e.x, t.x, n.x, r),
    pc(e.y, t.y, n.y, r)
}
function hc(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
var gc = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    _c = e => typeof navigator < `u` && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
    vc = _c(`applewebkit/`) && !_c(`chrome/`) ? Math.round : se;
function yc(e) {
    e.min = vc(e.min),
    e.max = vc(e.max)
}
function bc(e) {
    yc(e.x),
    yc(e.y)
}
function xc(e, t, n) {
    return e === `position` || e === `preserve-aspect` && !as(ws(t), ws(n), .2)
}
function Sc(e) {
    return e !== e.root && e.scroll?.wasRoot
}
var Cc = Xs({
        attachResizeListener: (e, t) => Ls(e, `resize`, t),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
            y: document.documentElement.scrollTop || document.body?.scrollTop || 0
        }),
        checkIsScrollRoot: () => !0
    }),
    wc = {
        current: void 0
    },
    Tc = Xs({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!wc.current) {
                let e = new Cc({});
                e.mount(window),
                e.setOptions({
                    layoutScroll: !0
                }),
                wc.current = e
            }
            return wc.current
        },
        resetTransform: (e, t) => {
            e.style.transform = t === void 0 ? `none` : t
        },
        checkIsScrollRoot: e => window.getComputedStyle(e).position === `fixed`
    }),
    Ec = (0, _.createContext)({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: `never`
    });
function Dc(e, t) {
    if (typeof e == `function`)
        return e(t);
    e != null && (e.current = t)
}
function Oc(...e) {
    return t => {
        let n = !1,
            r = e.map(e => {
                let r = Dc(e, t);
                return !n && typeof r == `function` && (n = !0), r
            });
        if (n)
            return () => {
                for (let t = 0; t < r.length; t++) {
                    let n = r[t];
                    typeof n == `function` ? n() : Dc(e[t], null)
                }
            }
    }
}
function kc(...e) {
    return _.useCallback(Oc(...e), e)
}
var R = b(),
    Ac = class  extends _.Component{
        getSnapshotBeforeUpdate(e)
        {
            let t = this.props.childRef.current;
            if (N(t) && e.isPresent && !this.props.isPresent && this.props.pop !== !1) {
                let e = t.offsetParent,
                    n = N(e) && e.offsetWidth || 0,
                    r = N(e) && e.offsetHeight || 0,
                    i = getComputedStyle(t),
                    a = this.props.sizeRef.current;
                a.height = parseFloat(i.height),
                a.width = parseFloat(i.width),
                a.top = t.offsetTop,
                a.left = t.offsetLeft,
                a.right = n - a.width - a.left,
                a.bottom = r - a.height - a.top,
                a.direction = i.direction
            }
            return null
        }
        componentDidUpdate() {}
        render()
        {
            return this.props.children
        }
    }
    ;
function jc({children: e, isPresent: t, anchorX: n, anchorY: r, root: i, pop: a}) {
    let o = (0, _.useId)(),
        s = (0, _.useRef)(null),
        c = (0, _.useRef)({
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            direction: `ltr`
        }),
        {nonce: l} = (0, _.useContext)(Ec),
        u = kc(s, a === !1 ? void 0 : e.props?.ref ?? e?.ref);
    return (0, _.useInsertionEffect)(() => {
        let {width: e, height: u, top: d, left: f, right: p, bottom: m, direction: h} = c.current;
        if (t || a === !1 || !s.current || !e || !u)
            return;
        let g = h === `rtl`,
            _ = n === `left` ? g ? `right: ${p}` : `left: ${f}` : g ? `left: ${f}` : `right: ${p}`,
            v = r === `bottom` ? `bottom: ${m}` : `top: ${d}`;
        s.current.dataset.motionPopId = o;
        let y = document.createElement(`style`);
        l && (y.nonce = l);
        let b = i ?? document.head;
        return b.appendChild(y), y.sheet && y.sheet.insertRule(`
                  [data-motion-pop-id="${o}"] {
                    position: absolute !important;
                    width: ${e}px !important;
                    height: ${u}px !important;
                    ${_}px !important;
                    ${v}px !important;
                  }
                `), () => {
            s.current?.removeAttribute(`data-motion-pop-id`),
            b.contains(y) && b.removeChild(y)
        }
    }, [t]), (0, R.jsx)(Ac, {
        isPresent: t,
        childRef: s,
        sizeRef: c,
        pop: a,
        children: a === !1 ? e : _.cloneElement(e, {
            ref: u
        })
    })
}
var Mc = ({children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: a, mode: o, anchorX: s, anchorY: c, root: l}) => {
    let u = S(Nc),
        d = (0, _.useId)(),
        f = (0, _.useRef)(n),
        p = (0, _.useRef)(r);
    C(() => {
        f.current = n,
        p.current = r
    });
    let m = !0,
        h = (0, _.useMemo)(() => (m = !1, {
            id: d,
            initial: t,
            isPresent: n,
            custom: i,
            onExitComplete: e => {
                u.set(e, !0);
                for (let e of u.values())
                    if (!e)
                        return;
                r && r()
            },
            register: e => (u.set(e, !1), () => {
                u.delete(e),
                !f.current && !u.size && p.current?.()
            })
        }), [n, u, r]);
    return a && m && (h = {
        ...h
    }), (0, _.useMemo)(() => {
        u.forEach((e, t) => u.set(t, !1))
    }, [n]), _.useEffect(() => {
        !n && !u.size && r && r()
    }, [n]), e = (0, R.jsx)(jc, {
        pop: o === `popLayout`,
        isPresent: n,
        anchorX: s,
        anchorY: c,
        root: l,
        children: e
    }), (0, R.jsx)(w.Provider, {
        value: h,
        children: e
    })
};
function Nc() {
    return new Map
}
function Pc(e=!0) {
    let t = (0, _.useContext)(w);
    if (t === null)
        return [!0, null];
    let {isPresent: n, onExitComplete: r, register: i} = t,
        a = (0, _.useId)();
    (0, _.useEffect)(() => {
        if (e)
            return i(a)
    }, [e]);
    let o = (0, _.useCallback)(() => e && r && r(a), [a, r, e]);
    return !n && r ? [!1, o] : [!0]
}
var Fc = e => e.key || ``;
function Ic(e) {
    let t = [];
    return _.Children.forEach(e, e => {
        (0, _.isValidElement)(e) && t.push(e)
    }), t
}
var Lc = ({children: e, custom: t, initial: n=!0, onExitComplete: r, presenceAffectsLayout: i=!0, mode: a=`sync`, propagate: o=!1, anchorX: s=`left`, anchorY: c=`top`, root: l}) => {
        let [u, d] = Pc(o),
            f = (0, _.useMemo)(() => Ic(e), [e]),
            p = o && !u ? [] : f.map(Fc),
            m = (0, _.useRef)(!0),
            h = (0, _.useRef)(f),
            g = S(() => new Map),
            v = (0, _.useRef)(new Set),
            [y, b] = (0, _.useState)(f),
            [w, ee] = (0, _.useState)(f);
        C(() => {
            o && !u && !w.length && d?.()
        }, [u, o, w.length, d]),
        C(() => {
            m.current = !1,
            h.current = f;
            for (let e = 0; e < w.length; e++) {
                let t = Fc(w[e]);
                p.includes(t) ? (g.delete(t), v.current.delete(t)) : g.get(t) !== !0 && g.set(t, !1)
            }
        }, [w, p.length, p.join(`-`)]);
        let te = [];
        if (f !== y) {
            let e = [...f];
            for (let t = 0; t < w.length; t++) {
                let n = w[t],
                    r = Fc(n);
                p.includes(r) || (e.splice(t, 0, n), te.push(n))
            }
            return a === `wait` && te.length && (e = te), ee(Ic(e)), b(f), null
        }
        let {forceRender: ne} = (0, _.useContext)(x);
        return (0, R.jsx)(R.Fragment, {
            children: w.map(e => {
                let _ = Fc(e),
                    y = o && !u ? !1 : f === w || p.includes(_);
                return (0, R.jsx)(Mc, {
                    isPresent: y,
                    initial: !m.current || n ? void 0 : !1,
                    custom: t,
                    presenceAffectsLayout: i,
                    mode: a,
                    root: l,
                    onExitComplete: y ? void 0 : () => {
                        if (v.current.has(_))
                            return;
                        if (g.has(_))
                            v.current.add(_),
                            g.set(_, !0);
                        else
                            return;
                        let e = !0;
                        g.forEach(t => {
                            t || (e = !1)
                        }),
                        e && (ne?.(), ee(h.current), o && d?.(), r && r())
                    },
                    anchorX: s,
                    anchorY: c,
                    children: e
                }, _)
            })
        })
    },
    Rc = (0, _.createContext)({
        strict: !1
    }),
    zc = {
        animation: [`animate`, `variants`, `whileHover`, `whileTap`, `exit`, `whileInView`, `whileFocus`, `whileDrag`],
        exit: [`exit`],
        drag: [`drag`, `dragControls`],
        focus: [`whileFocus`],
        hover: [`whileHover`, `onHoverStart`, `onHoverEnd`],
        tap: [`whileTap`, `onTap`, `onTapStart`, `onTapCancel`],
        pan: [`onPan`, `onPanStart`, `onPanSessionStart`, `onPanEnd`],
        inView: [`whileInView`, `onViewportEnter`, `onViewportLeave`],
        layout: [`layout`, `layoutId`]
    },
    Bc = !1;
function Vc() {
    if (Bc)
        return;
    let e = {};
    for (let t in zc)
        e[t] = {
            isEnabled: e => zc[t].some(t => !!e[t])
        };
    qa(e),
    Bc = !0
}
function Hc() {
    return Vc(), Ja()
}
function z(e) {
    let t = Hc();
    for (let n in e)
        t[n] = {
            ...t[n],
            ...e[n]
        };
    qa(t)
}
var Uc = (0, _.createContext)({});
function Wc(e, t) {
    if (Ra(e)) {
        let {initial: t, animate: n} = e;
        return {
            initial: t === !1 || Fa(t) ? t : void 0,
            animate: Fa(n) ? n : void 0
        }
    }
    return e.inherit === !1 ? {} : t
}
function Gc(e) {
    let {initial: t, animate: n} = Wc(e, (0, _.useContext)(Uc));
    return (0, _.useMemo)(() => ({
        initial: t,
        animate: n
    }), [Kc(t), Kc(n)])
}
function Kc(e) {
    return Array.isArray(e) ? e.join(` `) : e
}
var qc = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function Jc(e, t, n) {
    for (let r in t)
        !si(t[r]) && !Do(r, n) && (e[r] = t[r])
}
function Yc({transformTemplate: e}, t) {
    return (0, _.useMemo)(() => {
        let n = qc();
        return xo(n, t, e), Object.assign({}, n.vars, n.style)
    }, [t])
}
function Xc(e, t) {
    let n = e.style || {},
        r = {};
    return Jc(r, n, e), Object.assign(r, Yc(e, t)), r
}
function Zc(e, t) {
    let n = {},
        r = Xc(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = `none`, r.touchAction = e.drag === !0 ? `none` : `pan-${e.drag === `x` ? `y` : `x`}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n
}
var Qc = () => ({
    ...qc(),
    attrs: {}
});
function $c(e, t, n, r) {
    let i = (0, _.useMemo)(() => {
        let n = Qc();
        return Fo(n, t, Lo(r), e.transformTemplate, e.style), {
            ...n.attrs,
            style: {
                ...n.style
            }
        }
    }, [t]);
    if (e.style) {
        let t = {};
        Jc(t, e.style, e),
        i.style = {
            ...t,
            ...i.style
        }
    }
    return i
}
var el = new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));
function tl(e) {
    return e.startsWith(`while`) || e.startsWith(`drag`) && e !== `draggable` || e.startsWith(`layout`) || e.startsWith(`onTap`) || e.startsWith(`onPan`) || e.startsWith(`onLayout`) || el.has(e)
}
function nl(e, t) {
    return e.startsWith(`on`) ? !tl(e) : t?.(e) ?? !tl(e)
}
function rl(e, t, n, r) {
    let i = {};
    for (let a in e)
        (a !== `values` || typeof e.values != `object`) && (si(e[a]) || (nl(a, r) || n === !0 && tl(a) || !t && !tl(a) || e.draggable && a.startsWith(`onDrag`)) && (i[a] = e[a]));
    return i
}
var il = [`animate`, `circle`, `defs`, `desc`, `ellipse`, `g`, `image`, `line`, `filter`, `marker`, `mask`, `metadata`, `path`, `pattern`, `polygon`, `polyline`, `rect`, `stop`, `switch`, `symbol`, `svg`, `text`, `tspan`, `use`, `view`];
function al(e) {
    return typeof e != `string` || e.includes(`-`) ? !1 : !!(il.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function ol(e, t, n, {latestValues: r}, i, a=!1, o, s) {
    let c = (o ?? al(e) ? $c : Zc)(t, r, i, e),
        l = rl(t, typeof e == `string`, a, s),
        u = e === _.Fragment ? {} : {
            ...l,
            ...c,
            ref: n
        },
        {children: d} = t,
        f = (0, _.useMemo)(() => si(d) ? d.get() : d, [d]);
    return (0, _.createElement)(e, {
        ...u,
        children: f
    })
}
function sl({scrapeMotionValuesFromProps: e, createRenderState: t}, n, r, i) {
    return {
        latestValues: cl(n, r, i, e),
        renderState: t()
    }
}
function cl(e, t, n, r) {
    let i = {},
        a = r(e, {});
    for (let e in a)
        i[e] = Vs(a[e]);
    let {initial: o, animate: s} = e,
        c = Ra(e),
        l = za(e);
    t && l && !c && e.inherit !== !1 && (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
    let u = n ? n.initial === !1 : !1;
    u ||= o === !1;
    let d = u ? s : o;
    if (d && typeof d != `boolean` && !Pa(d)) {
        let t = Array.isArray(d) ? d : [d];
        for (let n = 0; n < t.length; n++) {
            let r = ei(e, t[n]);
            if (r) {
                let {transitionEnd: e, transition: t, ...n} = r;
                for (let e in n) {
                    let t = n[e];
                    if (Array.isArray(t)) {
                        let e = u ? t.length - 1 : 0;
                        t = t[e]
                    }
                    t !== null && (i[e] = t)
                }
                for (let t in e)
                    i[t] = e[t]
            }
        }
    }
    return i
}
var ll = e => (t, n) => {
        let r = (0, _.useContext)(Uc),
            i = (0, _.useContext)(w),
            a = () => sl(e, t, r, i);
        return n ? a() : S(a)
    },
    ul = ll({
        scrapeMotionValuesFromProps: Oo,
        createRenderState: qc
    }),
    dl = ll({
        scrapeMotionValuesFromProps: zo,
        createRenderState: Qc
    }),
    fl = Symbol.for(`motionComponentSymbol`);
function pl(e, t, n) {
    let r = (0, _.useRef)(n);
    (0, _.useInsertionEffect)(() => {
        r.current = n
    });
    let i = (0, _.useRef)(null);
    return (0, _.useCallback)(n => {
        n && e.onMount?.(n),
        t && (n ? t.mount(n) : t.unmount());
        let a = r.current;
        if (typeof a == `function`) {
            if (n) {
                let e = a(n);
                typeof e == `function` && (i.current = e)
            } else
                i.current ? (i.current(), i.current = null) : a(n)
        } else
            a && (a.current = n)
    }, [t])
}
var ml = (0, _.createContext)({});
function hl(e) {
    return e && typeof e == `object` && Object.prototype.hasOwnProperty.call(e, `current`)
}
function gl(e, t, n, r, i, a) {
    let {visualElement: o} = (0, _.useContext)(Uc),
        s = (0, _.useContext)(Rc),
        c = (0, _.useContext)(w),
        l = (0, _.useContext)(Ec),
        u = l.reducedMotion,
        d = l.skipAnimations,
        f = (0, _.useRef)(null),
        p = (0, _.useRef)(!1);
    r ||= s.renderer,
    !f.current && r && (f.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: c,
        blockInitialAnimation: c ? c.initial === !1 : !1,
        reducedMotionConfig: u,
        skipAnimations: d,
        isSVG: a
    }), p.current && f.current && (f.current.manuallyAnimateOnMount = !0));
    let m = f.current,
        h = (0, _.useContext)(ml);
    m && !m.projection && i && (m.type === `html` || m.type === `svg`) && _l(f.current, n, i, h);
    let g = (0, _.useRef)(!1);
    (0, _.useInsertionEffect)(() => {
        m && g.current && m.update(n, c)
    });
    let v = n[di],
        y = (0, _.useRef)(!!v && typeof window < `u` && !window.MotionHandoffIsComplete?.(v) && window.MotionHasOptimisedAnimation?.(v));
    return C(() => {
        p.current = !0,
        m && (g.current = !0, window.MotionIsMounted = !0, m.updateFeatures(), m.scheduleRenderMicrotask(), y.current && m.animationState && m.animationState.animateChanges())
    }), (0, _.useEffect)(() => {
        m && (!y.current && m.animationState && m.animationState.animateChanges(), y.current &&= (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(v)
        }), !1), m.enteringChildren = void 0)
    }), m
}
function _l(e, t, n, r) {
    let {layoutId: i, layout: a, drag: o, dragConstraints: s, layoutScroll: c, layoutRoot: l, layoutAnchor: u, layoutCrossfade: d} = t;
    e.projection = new n(e.latestValues, t[`data-framer-portal-id`] ? void 0 : vl(e.parent)),
    e.projection.setOptions({
        layoutId: i,
        layout: a,
        alwaysMeasureLayout: !!o || s && hl(s),
        visualElement: e,
        animationType: typeof a == `string` ? a : `both`,
        initialPromotionConfig: r,
        crossfade: d,
        layoutScroll: c,
        layoutRoot: l,
        layoutAnchor: u
    })
}
function vl(e) {
    if (e)
        return e.options.allowProjection === !1 ? vl(e.parent) : e.projection
}
function yl(e, {forwardMotionProps: t=!1, type: n}={}, r, i) {
    r && z(r);
    let a = n ? n === `svg` : al(e),
        o = a ? dl : ul;
    function s(n, s) {
        let c,
            l = {
                ...(0, _.useContext)(Ec),
                ...n,
                layoutId: bl(n)
            },
            {isStatic: u, isValidProp: d} = l,
            f = Gc(n),
            p = o(n, u);
        if (!u && typeof window < `u`) {
            xl(l, r);
            let t = Sl(l);
            c = t.MeasureLayout,
            f.visualElement = gl(e, p, l, i, t.ProjectionNode, a)
        }
        return (0, R.jsxs)(Uc.Provider, {
            value: f,
            children: [c && f.visualElement ? (0, R.jsx)(c, {
                visualElement: f.visualElement,
                ...l
            }) : null, ol(e, n, pl(p, f.visualElement, s), p, u, t, a, d)]
        })
    }
    s.displayName = `motion.${typeof e == `string` ? e : `create(${e.displayName ?? e.name ?? ``})`}`;
    let c = (0, _.forwardRef)(s);
    return c[fl] = e, c
}
function bl({layoutId: e}) {
    let t = (0, _.useContext)(x).id;
    return t && e !== void 0 ? t + `-` + e : e
}
function xl(e, t) {
    (0, _.useContext)(Rc).strict
}
function Sl(e) {
    let {drag: t, layout: n} = Hc();
    if (!t && !n)
        return {};
    let r = {
        ...t,
        ...n
    };
    return {
        MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
        ProjectionNode: r.ProjectionNode
    }
}
function Cl(e, t) {
    if (typeof Proxy > `u`)
        return yl;
    let n = new Map,
        r = (n, r) => yl(n, r, e, t);
    return new Proxy((e, t) => r(e, t), {
        get: (i, a) => a === `create` ? r : (n.has(a) || n.set(a, yl(a, void 0, e, t)), n.get(a))
    })
}
var wl = (e, t) => t.isSVG ?? al(e) ? new Bo(t) : new Ao(t, {
        allowProjection: e !== _.Fragment
    }),
    Tl = class  extends Za{
        constructor(e)
        {
            super(e),
            e.animationState ||= qo(e)
        }
        updateAnimationControlsSubscription()
        {
            let {animate: e} = this.node.getProps();
            Pa(e) && (this.unmountControls = e.subscribe(this.node))
        }
        mount()
        {
            this.updateAnimationControlsSubscription()
        }
        update()
        {
            let {animate: e} = this.node.getProps(),
                {animate: t} = this.node.prevProps || {};
            e !== t && this.updateAnimationControlsSubscription()
        }
        unmount()
        {
            this.node.animationState.reset(),
            this.unmountControls?.()
        }
    }
    ,
    El = 0,
    Dl = {
        animation: {
            Feature: Tl
        },
        exit: {
            Feature: class  extends Za{
                constructor()
                {
                    super(...arguments),
                    this.id = El++,
                    this.isExitComplete = !1
                }
                update()
                {
                    if (!this.node.presenceContext)
                        return;
                    let {isPresent: e, onExitComplete: t} = this.node.presenceContext,
                        {isPresent: n} = this.node.prevPresenceContext || {};
                    if (!this.node.animationState || e === n)
                        return;
                    if (e && n === !1) {
                        if (this.isExitComplete) {
                            let {initial: e, custom: t} = this.node.getProps();
                            if (typeof e == `string` || typeof e == `object` && e && !Array.isArray(e)) {
                                let n = ti(this.node, e, t);
                                if (n) {
                                    let {transition: e, transitionEnd: t, ...r} = n;
                                    for (let e in r)
                                        this.node.getValue(e)?.jump(r[e])
                                }
                            }
                            this.node.animationState.reset(),
                            this.node.animationState.animateChanges()
                        } else
                            this.node.animationState.setActive(`exit`, !1);
                        this.isExitComplete = !1;
                        return
                    }
                    let r = this.node.animationState.setActive(`exit`, !e);
                    t && !e && r.then(() => {
                        this.isExitComplete = !0,
                        t(this.id)
                    })
                }
                mount()
                {
                    let {register: e, onExitComplete: t} = this.node.presenceContext || {};
                    t && t(this.id),
                    e && (this.unmount = e(this.id))
                }
                unmount() {}
            }
        }
    };
function Ol(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
var kl = e => t => Ji(t) && e(t, Ol(t));
function Al(e, t, n, r) {
    return Ls(e, t, kl(n), r)
}
var jl = ({current: e}) => e ? e.ownerDocument.defaultView : null,
    Ml = (e, t) => Math.abs(e - t);
function Nl(e, t) {
    let n = Ml(e.x, t.x),
        r = Ml(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
var Pl = new Set([`auto`, `scroll`]),
    Fl = class {
        constructor(e, t, {transformPagePoint: n, contextWindow: r=window, dragSnapToOrigin: i=!1, distanceThreshold: a=3, element: o}={})
        {
            if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = new Map, this.removeScrollListeners = null, this.onElementScroll = e => {
                this.handleScroll(e.target)
            }, this.onWindowScroll = () => {
                this.handleScroll(window)
            }, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                    return;
                this.lastRawMoveEventInfo && (this.lastMoveEventInfo = Il(this.lastRawMoveEventInfo, this.transformPagePoint));
                let e = Rl(this.lastMoveEventInfo, this.history),
                    t = this.startEvent !== null,
                    n = Nl(e.offset, {
                        x: 0,
                        y: 0
                    }) >= this.distanceThreshold;
                if (!t && !n)
                    return;
                let {point: r} = e,
                    {timestamp: i} = Re;
                this.history.push({
                    ...r,
                    timestamp: i
                });
                let {onStart: a, onMove: o} = this.handlers;
                t || (a && a(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent),
                o && o(this.lastMoveEvent, e)
            }, this.handlePointerMove = (e, t) => {
                this.lastMoveEvent = e,
                this.lastRawMoveEventInfo = t,
                this.lastMoveEventInfo = Il(t, this.transformPagePoint),
                k.update(this.updatePoint, !0)
            }, this.handlePointerUp = (e, t) => {
                this.end();
                let {onEnd: n, onSessionEnd: r, resumeAnimation: i} = this.handlers;
                if ((this.dragSnapToOrigin || !this.startEvent) && i && i(), !(this.lastMoveEvent && this.lastMoveEventInfo))
                    return;
                let a = Rl(e.type === `pointercancel` ? this.lastMoveEventInfo : Il(t, this.transformPagePoint), this.history);
                this.startEvent && n && n(e, a),
                r && r(e, a)
            }, !Ji(e))
                return;
            this.dragSnapToOrigin = i,
            this.handlers = t,
            this.transformPagePoint = n,
            this.distanceThreshold = a,
            this.contextWindow = r || window;
            let s = Il(Ol(e), this.transformPagePoint),
                {point: c} = s,
                {timestamp: l} = Re;
            this.history = [{
                ...c,
                timestamp: l
            }];
            let {onSessionStart: u} = t;
            u && u(e, Rl(s, this.history));
            let d = {
                passive: !0,
                capture: !0
            };
            this.removeListeners = ce(Al(this.contextWindow, `pointermove`, this.handlePointerMove, d), Al(this.contextWindow, `pointerup`, this.handlePointerUp, d), Al(this.contextWindow, `pointercancel`, this.handlePointerUp, d)),
            o && this.startScrollTracking(o)
        }
        startScrollTracking(e)
        {
            let t = e.parentElement;
            for (; t;) {
                let e = getComputedStyle(t);
                (Pl.has(e.overflowX) || Pl.has(e.overflowY)) && this.scrollPositions.set(t, {
                    x: t.scrollLeft,
                    y: t.scrollTop
                }),
                t = t.parentElement
            }
            this.scrollPositions.set(window, {
                x: window.scrollX,
                y: window.scrollY
            }),
            window.addEventListener(`scroll`, this.onElementScroll, {
                capture: !0
            }),
            window.addEventListener(`scroll`, this.onWindowScroll),
            this.removeScrollListeners = () => {
                window.removeEventListener(`scroll`, this.onElementScroll, {
                    capture: !0
                }),
                window.removeEventListener(`scroll`, this.onWindowScroll)
            }
        }
        handleScroll(e)
        {
            let t = this.scrollPositions.get(e);
            if (!t)
                return;
            let n = e === window,
                r = n ? {
                    x: window.scrollX,
                    y: window.scrollY
                } : {
                    x: e.scrollLeft,
                    y: e.scrollTop
                },
                i = {
                    x: r.x - t.x,
                    y: r.y - t.y
                };
            (i.x !== 0 || i.y !== 0) && (n ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += i.x, this.lastMoveEventInfo.point.y += i.y) : this.history.length > 0 && (this.history[0].x -= i.x, this.history[0].y -= i.y), this.scrollPositions.set(e, r), k.update(this.updatePoint, !0))
        }
        updateHandlers(e)
        {
            this.handlers = e
        }
        end()
        {
            this.removeListeners && this.removeListeners(),
            this.removeScrollListeners && this.removeScrollListeners(),
            this.scrollPositions.clear(),
            Le(this.updatePoint)
        }
    }
    ;
function Il(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function Ll(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function Rl({point: e}, t) {
    return {
        point: e,
        delta: Ll(e, Bl(t)),
        offset: Ll(e, zl(t)),
        velocity: Vl(t, .1)
    }
}
function zl(e) {
    return e[0]
}
function Bl(e) {
    return e[e.length - 1]
}
function Vl(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1,
        r = null,
        i = Bl(e);
    for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > D(t)));)
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    r === e[0] && e.length > 2 && i.timestamp - r.timestamp > D(t) * 2 && (r = e[1]);
    let a = ue(i.timestamp - r.timestamp);
    if (a === 0)
        return {
            x: 0,
            y: 0
        };
    let o = {
        x: (i.x - r.x) / a,
        y: (i.y - r.y) / a
    };
    return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
}
function Hl(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? M(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? M(n, e, r.max) : Math.min(e, n)), e
}
function Ul(e, t, n) {
    return {
        min: t === void 0 ? void 0 : e.min + t,
        max: n === void 0 ? void 0 : e.max + n - (e.max - e.min)
    }
}
function Wl(e, {top: t, left: n, bottom: r, right: i}) {
    return {
        x: Ul(e.x, n, i),
        y: Ul(e.y, t, r)
    }
}
function B(e, t) {
    let n = t.min - e.min,
        r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
        min: n,
        max: r
    }
}
function V(e, t) {
    return {
        x: B(e.x, t.x),
        y: B(e.y, t.y)
    }
}
function H(e, t) {
    let n = .5,
        r = is(e),
        i = is(t);
    return i > r ? n = le(t.min, t.max - r, e.min) : r > i && (n = le(e.min, e.max - i, t.min)), ne(0, 1, n)
}
function U(e, t) {
    let n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}
var W = .35;
function Gl(e=W) {
    return e === !1 ? e = 0 : e === !0 && (e = W), {
        x: Kl(e, `left`, `right`),
        y: Kl(e, `top`, `bottom`)
    }
}
function Kl(e, t, n) {
    return {
        min: ql(e, t),
        max: ql(e, n)
    }
}
function ql(e, t) {
    return typeof e == `number` ? e : e[t] || 0
}
var Jl = new WeakMap,
    Yl = class {
        constructor(e)
        {
            this.openDragLock = null,
            this.isDragging = !1,
            this.currentDirection = null,
            this.originPoint = {
                x: 0,
                y: 0
            },
            this.constraints = !1,
            this.hasMutatedConstraints = !1,
            this.elastic = F(),
            this.latestPointerEvent = null,
            this.latestPanInfo = null,
            this.visualElement = e
        }
        start(e, {snapToCursor: t=!1, distanceThreshold: n}={})
        {
            let {presenceContext: r} = this.visualElement;
            if (r && r.isPresent === !1)
                return;
            let i = e => {
                    t && this.snapToCursor(Ol(e).point),
                    this.stopAnimation()
                },
                a = (e, t) => {
                    let {drag: n, dragPropagation: r, onDragStart: i} = this.getProps();
                    if (n && !r && (this.openDragLock && this.openDragLock(), this.openDragLock = Ui(n), !this.openDragLock))
                        return;
                    this.latestPointerEvent = e,
                    this.latestPanInfo = t,
                    this.isDragging = !0,
                    this.currentDirection = null,
                    this.resolveConstraints(),
                    this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0),
                    Es(e => {
                        let t = this.getAxisMotionValue(e).get() || 0;
                        if (dt.test(t)) {
                            let {projection: n} = this.visualElement;
                            if (n && n.layout) {
                                let r = n.layout.layoutBox[e];
                                r && (t = is(r) * (parseFloat(t) / 100))
                            }
                        }
                        this.originPoint[e] = t
                    }),
                    i && k.update(() => i(e, t), !1, !0),
                    li(this.visualElement, `transform`);
                    let {animationState: a} = this.visualElement;
                    a && a.setActive(`whileDrag`, !0)
                },
                o = (e, t) => {
                    this.latestPointerEvent = e,
                    this.latestPanInfo = t;
                    let {dragPropagation: n, dragDirectionLock: r, onDirectionLock: i, onDrag: a} = this.getProps();
                    if (!n && !this.openDragLock)
                        return;
                    let {offset: o} = t;
                    if (r && this.currentDirection === null) {
                        this.currentDirection = $l(o),
                        this.currentDirection !== null && i && i(this.currentDirection);
                        return
                    }
                    this.updateAxis(`x`, t.point, o),
                    this.updateAxis(`y`, t.point, o),
                    this.visualElement.render(),
                    a && k.update(() => a(e, t), !1, !0)
                },
                s = (e, t) => {
                    this.latestPointerEvent = e,
                    this.latestPanInfo = t,
                    this.stop(e, t),
                    this.latestPointerEvent = null,
                    this.latestPanInfo = null
                },
                c = () => {
                    let {dragSnapToOrigin: e} = this.getProps();
                    (e || this.constraints) && this.startAnimation({
                        x: 0,
                        y: 0
                    })
                },
                {dragSnapToOrigin: l} = this.getProps();
            this.panSession = new Fl(e, {
                onSessionStart: i,
                onStart: a,
                onMove: o,
                onSessionEnd: s,
                resumeAnimation: c
            }, {
                transformPagePoint: this.visualElement.getTransformPagePoint(),
                dragSnapToOrigin: l,
                distanceThreshold: n,
                contextWindow: jl(this.visualElement),
                element: this.visualElement.current
            })
        }
        stop(e, t)
        {
            let n = e || this.latestPointerEvent,
                r = t || this.latestPanInfo,
                i = this.isDragging;
            if (this.cancel(), !i || !r || !n)
                return;
            let {velocity: a} = r;
            this.startAnimation(a);
            let {onDragEnd: o} = this.getProps();
            o && k.postRender(() => o(n, r))
        }
        cancel()
        {
            this.isDragging = !1;
            let {projection: e, animationState: t} = this.visualElement;
            e && (e.isAnimationBlocked = !1),
            this.endPanSession();
            let {dragPropagation: n} = this.getProps();
            !n && this.openDragLock && (this.openDragLock(), this.openDragLock = null),
            t && t.setActive(`whileDrag`, !1)
        }
        endPanSession()
        {
            this.panSession && this.panSession.end(),
            this.panSession = void 0
        }
        updateAxis(e, t, n)
        {
            let {drag: r} = this.getProps();
            if (!n || !Ql(e, r, this.currentDirection))
                return;
            let i = this.getAxisMotionValue(e),
                a = this.originPoint[e] + n[e];
            this.constraints && this.constraints[e] && (a = Hl(a, this.constraints[e], this.elastic[e])),
            i.set(a)
        }
        resolveConstraints()
        {
            let {dragConstraints: e, dragElastic: t} = this.getProps(),
                n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout,
                r = this.constraints;
            e && hl(e) ? this.constraints ||= this.resolveRefConstraints() : this.constraints = e && n ? Wl(n.layoutBox, e) : !1,
            this.elastic = Gl(t),
            r !== this.constraints && !hl(e) && n && this.constraints && !this.hasMutatedConstraints && Es(e => {
                this.constraints !== !1 && this.getAxisMotionValue(e) && (this.constraints[e] = U(n.layoutBox[e], this.constraints[e]))
            })
        }
        resolveRefConstraints()
        {
            let {dragConstraints: e, onMeasureDragConstraints: t} = this.getProps();
            if (!e || !hl(e))
                return !1;
            let n = e.current,
                {projection: r} = this.visualElement;
            if (!r || !r.layout)
                return !1;
            r.root && (r.root.scroll = void 0, r.root.updateScroll());
            let i = L(n, r.root, this.visualElement.getTransformPagePoint()),
                a = V(r.layout.layoutBox, i);
            if (t) {
                let e = t($a(a));
                this.hasMutatedConstraints = !!e,
                e && (a = Qa(e))
            }
            return a
        }
        startAnimation(e)
        {
            let {drag: t, dragMomentum: n, dragElastic: r, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: o} = this.getProps(),
                s = this.constraints || {},
                c = Es(o => {
                    if (!Ql(o, t, this.currentDirection))
                        return;
                    let c = s && s[o] || {};
                    (a === !0 || a === o) && (c = {
                        min: 0,
                        max: 0
                    });
                    let l = r ? 200 : 1e6,
                        u = r ? 40 : 1e7,
                        d = {
                            type: `inertia`,
                            velocity: n ? e[o] : 0,
                            bounceStiffness: l,
                            bounceDamping: u,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...i,
                            ...c
                        };
                    return this.startAxisValueAnimation(o, d)
                });
            return Promise.all(c).then(o)
        }
        startAxisValueAnimation(e, t)
        {
            let n = this.getAxisMotionValue(e);
            return li(this.visualElement, e), n.start(Yr(e, n, 0, t, this.visualElement, !1))
        }
        stopAnimation()
        {
            Es(e => this.getAxisMotionValue(e).stop())
        }
        getAxisMotionValue(e)
        {
            let t = `_drag${e.toUpperCase()}`;
            return this.visualElement.getProps()[t] || this.visualElement.getValue(e, this.visualElement.latestValues[e] ?? 0)
        }
        snapToCursor(e)
        {
            Es(t => {
                let {drag: n} = this.getProps();
                if (!Ql(t, n, this.currentDirection))
                    return;
                let {projection: r} = this.visualElement,
                    i = this.getAxisMotionValue(t);
                if (r && r.layout) {
                    let {min: n, max: a} = r.layout.layoutBox[t],
                        o = i.get() || 0;
                    i.set(e[t] - M(n, a, .5) + o)
                }
            })
        }
        scalePositionWithinConstraints()
        {
            if (!this.visualElement.current)
                return;
            let {drag: e, dragConstraints: t} = this.getProps(),
                {projection: n} = this.visualElement;
            if (!hl(t) || !n || !this.constraints)
                return;
            this.stopAnimation();
            let r = {
                x: 0,
                y: 0
            };
            Es(e => {
                let t = this.getAxisMotionValue(e);
                if (t && this.constraints !== !1) {
                    let n = t.get();
                    r[e] = H({
                        min: n,
                        max: n
                    }, this.constraints[e])
                }
            });
            let {transformTemplate: i} = this.visualElement.getProps();
            this.visualElement.current.style.transform = i ? i({}, ``) : `none`,
            n.root && n.root.updateScroll(),
            n.updateLayout(),
            this.constraints = !1,
            this.resolveConstraints(),
            Es(t => {
                if (!Ql(t, e, null))
                    return;
                let n = this.getAxisMotionValue(t),
                    {min: i, max: a} = this.constraints[t];
                n.set(M(i, a, r[t]))
            }),
            this.visualElement.render()
        }
        addListeners()
        {
            if (!this.visualElement.current)
                return;
            Jl.set(this.visualElement, this);
            let e = this.visualElement.current,
                t = Al(e, `pointerdown`, t => {
                    let {drag: n, dragListener: r=!0} = this.getProps(),
                        i = t.target,
                        a = i !== e && Qi(i);
                    n && r && !a && this.start(t)
                }),
                n,
                r = () => {
                    let {dragConstraints: t} = this.getProps();
                    hl(t) && t.current && (this.constraints = this.resolveRefConstraints(), n ||= Zl(e, t.current, () => this.scalePositionWithinConstraints()))
                },
                {projection: i} = this.visualElement,
                a = i.addEventListener(`measure`, r);
            i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            k.read(r);
            let o = Ls(window, `resize`, () => this.scalePositionWithinConstraints()),
                s = i.addEventListener(`didUpdate`, (({delta: e, hasLayoutChanged: t}) => {
                    this.isDragging && t && (Es(t => {
                        let n = this.getAxisMotionValue(t);
                        n && (this.originPoint[t] += e[t].translate, n.set(n.get() + e[t].translate))
                    }), this.visualElement.render())
                }));
            return () => {
                o(),
                t(),
                a(),
                s && s(),
                n && n()
            }
        }
        getProps()
        {
            let e = this.visualElement.getProps(),
                {drag: t=!1, dragDirectionLock: n=!1, dragPropagation: r=!1, dragConstraints: i=!1, dragElastic: a=W, dragMomentum: o=!0} = e;
            return {
                ...e,
                drag: t,
                dragDirectionLock: n,
                dragPropagation: r,
                dragConstraints: i,
                dragElastic: a,
                dragMomentum: o
            }
        }
    }
    ;
function Xl(e) {
    let t = !0;
    return () => {
        if (t) {
            t = !1;
            return
        }
        e()
    }
}
function Zl(e, t, n) {
    let r = ba(e, Xl(n)),
        i = ba(t, Xl(n));
    return () => {
        r(),
        i()
    }
}
function Ql(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function $l(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = `y` : Math.abs(e.x) > t && (n = `x`), n
}
var eu = class  extends Za{
        constructor(e)
        {
            super(e),
            this.removeGroupControls = se,
            this.removeListeners = se,
            this.controls = new Yl(e)
        }
        mount()
        {
            let {dragControls: e} = this.node.getProps();
            e && (this.removeGroupControls = e.subscribe(this.controls)),
            this.removeListeners = this.controls.addListeners() || se
        }
        update()
        {
            let {dragControls: e} = this.node.getProps(),
                {dragControls: t} = this.node.prevProps || {};
            e !== t && (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)))
        }
        unmount()
        {
            this.removeGroupControls(),
            this.removeListeners(),
            this.controls.isDragging || this.controls.endPanSession()
        }
    }
    ,
    tu = e => (t, n) => {
        e && k.update(() => e(t, n), !1, !0)
    },
    nu = class  extends Za{
        constructor()
        {
            super(...arguments),
            this.removePointerDownListener = se
        }
        onPointerDown(e)
        {
            this.session = new Fl(e, this.createPanHandlers(), {
                transformPagePoint: this.node.getTransformPagePoint(),
                contextWindow: jl(this.node)
            })
        }
        createPanHandlers()
        {
            let {onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r} = this.node.getProps();
            return {
                onSessionStart: tu(e),
                onStart: tu(t),
                onMove: tu(n),
                onEnd: (e, t) => {
                    delete this.session,
                    r && k.postRender(() => r(e, t))
                }
            }
        }
        mount()
        {
            this.removePointerDownListener = Al(this.node.current, `pointerdown`, e => this.onPointerDown(e))
        }
        update()
        {
            this.session && this.session.updateHandlers(this.createPanHandlers())
        }
        unmount()
        {
            this.removePointerDownListener(),
            this.session && this.session.end()
        }
    }
    ,
    ru = !1,
    iu = class  extends _.Component{
        componentDidMount()
        {
            let {visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r} = this.props,
                {projection: i} = e;
            i && (t.group && t.group.add(i), n && n.register && r && n.register(i), ru && i.root.didUpdate(), i.addEventListener(`animationComplete`, () => {
                this.safeToRemove()
            }), i.setOptions({
                ...i.options,
                layoutDependency: this.props.layoutDependency,
                onExitComplete: () => this.safeToRemove()
            })),
            Us.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(e)
        {
            let {layoutDependency: t, visualElement: n, drag: r, isPresent: i} = this.props,
                {projection: a} = n;
            return a ? (a.isPresent = i, e.layoutDependency !== t && a.setOptions({
                ...a.options,
                layoutDependency: t
            }), ru = !0, r || e.layoutDependency !== t || t === void 0 || e.isPresent !== i ? a.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? a.promote() : a.relegate() || k.postRender(() => {
                let e = a.getStack();
                (!e || !e.members.length) && this.safeToRemove()
            })), null) : null
        }
        componentDidUpdate()
        {
            let {visualElement: e, layoutAnchor: t} = this.props,
                {projection: n} = e;
            n && (n.options.layoutAnchor = t, n.root.didUpdate(), P.postRender(() => {
                !n.currentAnimation && n.isLead() && this.safeToRemove()
            }))
        }
        componentWillUnmount()
        {
            let {visualElement: e, layoutGroup: t, switchLayoutGroup: n} = this.props,
                {projection: r} = e;
            ru = !0,
            r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), n && n.deregister && n.deregister(r))
        }
        safeToRemove()
        {
            let {safeToRemove: e} = this.props;
            e && e()
        }
        render()
        {
            return null
        }
    }
    ;
function au(e) {
    let [t, n] = Pc(),
        r = (0, _.useContext)(x);
    return (0, R.jsx)(iu, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: (0, _.useContext)(ml),
        isPresent: t,
        safeToRemove: n
    })
}
var ou = {
    pan: {
        Feature: nu
    },
    drag: {
        Feature: eu,
        ProjectionNode: Tc,
        MeasureLayout: au
    }
};
function su(e, t, n) {
    let {props: r} = e;
    e.animationState && r.whileHover && e.animationState.setActive(`whileHover`, n === `Start`);
    let i = r[`onHover` + n];
    i && k.postRender(() => i(t, Ol(t)))
}
var cu = class  extends Za{
        mount()
        {
            let {current: e} = this.node;
            e && (this.unmount = Ki(e, (e, t) => (su(this.node, t, `Start`), e => su(this.node, e, `End`))))
        }
        unmount() {}
    }
    ,
    lu = class  extends Za{
        constructor()
        {
            super(...arguments),
            this.isActive = !1
        }
        onFocus()
        {
            let e = !1;
            try {
                e = this.node.current.matches(`:focus-visible`)
            } catch {
                e = !0
            }
            !e || !this.node.animationState || (this.node.animationState.setActive(`whileFocus`, !0), this.isActive = !0)
        }
        onBlur()
        {
            !this.isActive || !this.node.animationState || (this.node.animationState.setActive(`whileFocus`, !1), this.isActive = !1)
        }
        mount()
        {
            this.unmount = ce(Ls(this.node.current, `focus`, () => this.onFocus()), Ls(this.node.current, `blur`, () => this.onBlur()))
        }
        unmount() {}
    }
    ;
function uu(e, t, n) {
    let {props: r} = e;
    if (e.current instanceof HTMLButtonElement && e.current.disabled)
        return;
    e.animationState && r.whileTap && e.animationState.setActive(`whileTap`, n === `Start`);
    let i = r[`onTap` + (n === `End` ? `` : n)];
    i && k.postRender(() => i(t, Ol(t)))
}
var du = class  extends Za{
        mount()
        {
            let {current: e} = this.node;
            if (!e)
                return;
            let {globalTapTarget: t, propagate: n} = this.node.props;
            this.unmount = aa(e, (e, t) => (uu(this.node, t, `Start`), (e, {success: t}) => uu(this.node, e, t ? `End` : `Cancel`)), {
                useGlobalTarget: t,
                stopPropagation: n?.tap === !1
            })
        }
        unmount() {}
    }
    ,
    fu = new WeakMap,
    pu = new WeakMap,
    mu = e => {
        let t = fu.get(e.target);
        t && t(e)
    },
    hu = e => {
        e.forEach(mu)
    };
function gu({root: e, ...t}) {
    let n = e || document;
    pu.has(n) || pu.set(n, {});
    let r = pu.get(n),
        i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(hu, {
        root: e,
        ...t
    })), r[i]
}
function _u(e, t, n) {
    let r = gu(t);
    return fu.set(e, n), r.observe(e), () => {
        fu.delete(e),
        r.unobserve(e)
    }
}
var vu = {
        some: 0,
        all: 1
    },
    yu = class  extends Za{
        constructor()
        {
            super(...arguments),
            this.hasEnteredView = !1,
            this.isInView = !1
        }
        startObserver()
        {
            this.stopObserver?.();
            let {viewport: e={}} = this.node.getProps(),
                {root: t, margin: n, amount: r=`some`, once: i} = e,
                a = {
                    root: t ? t.current : void 0,
                    rootMargin: n,
                    threshold: typeof r == `number` ? r : vu[r]
                },
                o = e => {
                    let {isIntersecting: t} = e;
                    if (this.isInView === t || (this.isInView = t, i && !t && this.hasEnteredView))
                        return;
                    t && (this.hasEnteredView = !0),
                    this.node.animationState && this.node.animationState.setActive(`whileInView`, t);
                    let {onViewportEnter: n, onViewportLeave: r} = this.node.getProps(),
                        a = t ? n : r;
                    a && a(e)
                };
            this.stopObserver = _u(this.node.current, a, o)
        }
        mount()
        {
            this.startObserver()
        }
        update()
        {
            if (typeof IntersectionObserver > `u`)
                return;
            let {props: e, prevProps: t} = this.node;
            [`amount`, `margin`, `root`].some(bu(e, t)) && this.startObserver()
        }
        unmount()
        {
            this.stopObserver?.(),
            this.hasEnteredView = !1,
            this.isInView = !1
        }
    }
    ;
function bu({viewport: e={}}, {viewport: t={}}={}) {
    return n => e[n] !== t[n]
}
var xu = {
        inView: {
            Feature: yu
        },
        tap: {
            Feature: du
        },
        focus: {
            Feature: lu
        },
        hover: {
            Feature: cu
        }
    },
    Su = {
        layout: {
            ProjectionNode: Tc,
            MeasureLayout: au
        }
    },
    G = Cl({
        ...Dl,
        ...xu,
        ...ou,
        ...Su
    }, wl);
function Cu(e, t, n) {
    (0, _.useInsertionEffect)(() => e.on(t, n), [e, t, n])
}
function wu(e) {
    return typeof window > `u` ? !1 : e ? cr() : sr()
}
var Tu = 50,
    Eu = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0
    }),
    Du = () => ({
        time: 0,
        x: Eu(),
        y: Eu()
    }),
    Ou = {
        x: {
            length: `Width`,
            position: `Left`
        },
        y: {
            length: `Height`,
            position: `Top`
        }
    };
function ku(e, t, n, r) {
    let i = n[t],
        {length: a, position: o} = Ou[t],
        s = i.current,
        c = n.time;
    i.current = Math.abs(e[`scroll${o}`]),
    i.scrollLength = e[`scroll${a}`] - e[`client${a}`],
    i.offset.length = 0,
    i.offset[0] = 0,
    i.offset[1] = i.scrollLength,
    i.progress = le(0, i.scrollLength, i.current);
    let l = r - c;
    i.velocity = l > Tu ? 0 : de(i.current - s, l)
}
function Au(e, t, n) {
    ku(e, `x`, t, n),
    ku(e, `y`, t, n),
    t.time = n
}
function ju(e, t) {
    let n = {
            x: 0,
            y: 0
        },
        r = e;
    for (; r && r !== t;)
        if (N(r))
            n.x += r.offsetLeft,
            n.y += r.offsetTop,
            r = r.offsetParent;
        else if (r.tagName === `svg`) {
            let e = r.getBoundingClientRect();
            r = r.parentElement;
            let t = r.getBoundingClientRect();
            n.x += e.left - t.left,
            n.y += e.top - t.top
        } else if (r instanceof SVGGraphicsElement) {
            let {x: e, y: t} = r.getBBox();
            n.x += e,
            n.y += t;
            let i = null,
                a = r.parentNode;
            for (; !i;)
                a.tagName === `svg` && (i = a),
                a = r.parentNode;
            r = i
        } else
            break;
    return n
}
var Mu = {
    start: 0,
    center: .5,
    end: 1
};
function Nu(e, t, n=0) {
    let r = 0;
    if (e in Mu && (e = Mu[e]), typeof e == `string`) {
        let t = parseFloat(e);
        e.endsWith(`px`) ? r = t : e.endsWith(`%`) ? e = t / 100 : e.endsWith(`vw`) ? r = t / 100 * document.documentElement.clientWidth : e.endsWith(`vh`) ? r = t / 100 * document.documentElement.clientHeight : e = t
    }
    return typeof e == `number` && (r = t * e), n + r
}
var Pu = [0, 0];
function Fu(e, t, n, r) {
    let i = Array.isArray(e) ? e : Pu,
        a = 0,
        o = 0;
    return typeof e == `number` ? i = [e, e] : typeof e == `string` && (e = e.trim(), i = e.includes(` `) ? e.split(` `) : [e, Mu[e] ? e : `0`]), a = Nu(i[0], n, r), o = Nu(i[1], t), a - o
}
var Iu = {
        Enter: [[0, 1], [1, 1]],
        Exit: [[0, 0], [1, 0]],
        Any: [[1, 0], [0, 1]],
        All: [[0, 0], [1, 1]]
    },
    Lu = {
        x: 0,
        y: 0
    };
function Ru(e) {
    return `getBBox` in e && e.tagName !== `svg` ? e.getBBox() : {
        width: e.clientWidth,
        height: e.clientHeight
    }
}
function zu(e, t, n) {
    let {offset: r=Iu.All} = n,
        {target: i=e, axis: a=`y`} = n,
        o = a === `y` ? `height` : `width`,
        s = i === e ? Lu : ju(i, e),
        c = i === e ? {
            width: e.scrollWidth,
            height: e.scrollHeight
        } : Ru(i),
        l = {
            width: e.clientWidth,
            height: e.clientHeight
        };
    t[a].offset.length = 0;
    let u = !t[a].interpolate,
        d = r.length;
    for (let e = 0; e < d; e++) {
        let n = Fu(r[e], l[o], c[o], s[a]);
        !u && n !== t[a].interpolatorOffsets[e] && (u = !0),
        t[a].offset[e] = n
    }
    u && (t[a].interpolate = gn(t[a].offset, vn(r), {
        clamp: !1
    }), t[a].interpolatorOffsets = [...t[a].offset]),
    t[a].progress = ne(0, 1, t[a].interpolate(t[a].current))
}
function Bu(e, t=e, n) {
    if (n.x.targetOffset = 0, n.y.targetOffset = 0, t !== e) {
        let r = t;
        for (; r && r !== e;)
            n.x.targetOffset += r.offsetLeft,
            n.y.targetOffset += r.offsetTop,
            r = r.offsetParent
    }
    n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth,
    n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight,
    n.x.containerLength = e.clientWidth,
    n.y.containerLength = e.clientHeight
}
function Vu(e, t, n, r={}) {
    return {
        measure: t => {
            Bu(e, r.target, n),
            Au(e, n, t),
            (r.offset || r.target) && zu(e, n, r)
        },
        notify: () => t(n)
    }
}
var Hu = new WeakMap,
    Uu = new WeakMap,
    Wu = new WeakMap,
    Gu = new WeakMap,
    Ku = new WeakMap,
    qu = e => e === document.scrollingElement ? window : e;
function Ju(e, {container: t=document.scrollingElement, trackContentSize: n=!1, ...r}={}) {
    if (!t)
        return se;
    let i = Wu.get(t);
    i || (i = new Set, Wu.set(t, i));
    let a = Vu(t, e, Du(), r);
    if (i.add(a), !Hu.has(t)) {
        let e = () => {
                for (let e of i)
                    e.measure(Re.timestamp);
                k.preUpdate(n)
            },
            n = () => {
                for (let e of i)
                    e.notify()
            },
            r = () => k.read(e);
        Hu.set(t, r);
        let a = qu(t);
        window.addEventListener(`resize`, r),
        t !== document.documentElement && Uu.set(t, ba(t, r)),
        a.addEventListener(`scroll`, r),
        r()
    }
    if (n && !Ku.has(t)) {
        let e = Hu.get(t),
            n = {
                width: t.scrollWidth,
                height: t.scrollHeight
            };
        Gu.set(t, n);
        let r = k.read(() => {
            let r = t.scrollWidth,
                i = t.scrollHeight;
            (n.width !== r || n.height !== i) && (e(), n.width = r, n.height = i)
        }, !0);
        Ku.set(t, r)
    }
    let o = Hu.get(t);
    return k.read(o, !1, !0), () => {
        Le(o);
        let e = Wu.get(t);
        if (!e || (e.delete(a), e.size))
            return;
        let n = Hu.get(t);
        Hu.delete(t),
        n && (qu(t).removeEventListener(`scroll`, n), Uu.get(t)?.(), window.removeEventListener(`resize`, n));
        let r = Ku.get(t);
        r && (Le(r), Ku.delete(t)),
        Gu.delete(t)
    }
}
var Yu = [[Iu.Enter, `entry`], [Iu.Exit, `exit`], [Iu.Any, `cover`], [Iu.All, `contain`]],
    K = {
        start: 0,
        end: 1
    };
function Xu(e) {
    let t = e.trim().split(/\s+/);
    if (t.length !== 2)
        return;
    let n = K[t[0]],
        r = K[t[1]];
    if (n !== void 0 && r !== void 0)
        return [n, r]
}
function Zu(e) {
    if (e.length !== 2)
        return;
    let t = [];
    for (let n of e)
        if (Array.isArray(n))
            t.push(n);
        else if (typeof n == `string`) {
            let e = Xu(n);
            if (!e)
                return;
            t.push(e)
        } else
            return;
    return t
}
function Qu(e, t) {
    let n = Zu(e);
    if (!n)
        return !1;
    for (let e = 0; e < 2; e++) {
        let r = n[e],
            i = t[e];
        if (r[0] !== i[0] || r[1] !== i[1])
            return !1
    }
    return !0
}
function $u(e) {
    if (!e)
        return {
            rangeStart: `contain 0%`,
            rangeEnd: `contain 100%`
        };
    for (let [t, n] of Yu)
        if (Qu(e, t))
            return {
                rangeStart: `${n} 0%`,
                rangeEnd: `${n} 100%`
            }
}
var ed = new Map;
function td(e) {
    let t = {
        value: 0
    };
    return {
        currentTime: t,
        cancel: Ju(n => {
            t.value = n[e.axis].progress * 100
        }, e)
    }
}
function nd({source: e, container: t, ...n}) {
    let {axis: r} = n;
    e && (t = e);
    let i = ed.get(t);
    i || (i = new Map, ed.set(t, i));
    let a = n.target ?? `self`,
        o = i.get(a);
    o || (o = {}, i.set(a, o));
    let s = r + (n.offset ?? []).join(`,`);
    return o[s] || (n.target && wu(n.target) ? $u(n.offset) ? o[s] = new ViewTimeline({
        subject: n.target,
        axis: r
    }) : o[s] = td({
        container: t,
        ...n
    }) : wu() ? o[s] = new ScrollTimeline({
        source: t,
        axis: r
    }) : o[s] = td({
        container: t,
        ...n
    })), o[s]
}
function rd(e, t) {
    let n = nd(t),
        r = t.target ? $u(t.offset) : void 0,
        i = t.target ? wu(t.target) && !!r : wu();
    return e.attachTimeline({
        timeline: i ? n : void 0,
        ...r && i && {
            rangeStart: r.rangeStart,
            rangeEnd: r.rangeEnd
        },
        observe: e => (e.pause(), xa(t => {
            e.time = e.iterationDuration * t
        }, n))
    })
}
function id(e) {
    return e && (e.target || e.offset)
}
function ad(e) {
    return e.length === 2
}
function od(e, t) {
    return ad(e) || id(t) ? Ju(n => {
        e(n[t.axis].progress, n)
    }, t) : xa(e, nd(t))
}
function sd(e, {axis: t=`y`, container: n=document.scrollingElement, ...r}={}) {
    if (!n)
        return se;
    let i = {
        axis: t,
        container: n,
        ...r
    };
    return typeof e == `function` ? od(e, i) : rd(e, i)
}
var cd = () => ({
        scrollX: zr(0),
        scrollY: zr(0),
        scrollXProgress: zr(0),
        scrollYProgress: zr(0)
    }),
    ld = e => e ? !e.current : !1;
function ud(e, t, n, r) {
    return {
        factory: i => {
            let a,
                o = () => {
                    if (ld(n) || ld(r)) {
                        P.read(o);
                        return
                    }
                    a = sd(i, {
                        ...t,
                        axis: e,
                        container: n?.current || void 0,
                        target: r?.current || void 0
                    })
                };
            return P.read(o), () => {
                Bi(o),
                a?.()
            }
        },
        times: [0, 1],
        keyframes: [0, 1],
        ease: e => e,
        duration: 1
    }
}
function dd(e, t) {
    return typeof window > `u` ? !1 : e ? cr() && !!$u(t) : sr()
}
function fd({container: e, target: t, ...n}={}) {
    let r = S(cd);
    dd(t, n.offset) && (r.scrollXProgress.accelerate = ud(`x`, n, e, t), r.scrollYProgress.accelerate = ud(`y`, n, e, t));
    let i = (0, _.useRef)(null),
        a = (0, _.useRef)(!1),
        o = (0, _.useCallback)(() => (i.current = sd((e, {x: t, y: n}) => {
            r.scrollX.set(t.current),
            r.scrollXProgress.set(t.progress),
            r.scrollY.set(n.current),
            r.scrollYProgress.set(n.progress)
        }, {
            ...n,
            container: e?.current || void 0,
            target: t?.current || void 0
        }), () => {
            i.current?.()
        }), [e, t, JSON.stringify(n.offset)]);
    return C(() => {
        if (a.current = !1, ld(e) || ld(t)) {
            a.current = !0;
            return
        }
        return o()
    }, [o]), (0, _.useEffect)(() => {
        if (!a.current)
            return;
        let n,
            r = () => {
                let r = ld(e),
                    i = ld(t);
                !r && !i && (n = o())
            };
        return P.read(r), () => {
            Bi(r),
            n?.()
        }
    }, [o]), r
}
function pd(e) {
    let t = S(() => zr(e)),
        {isStatic: n} = (0, _.useContext)(Ec);
    if (n) {
        let [, n] = (0, _.useState)(e);
        (0, _.useEffect)(() => t.on(`change`, n), [])
    }
    return t
}
function md(e, t) {
    let n = pd(t()),
        r = () => n.set(t());
    return r(), C(() => {
        let t = () => k.preRender(r, !1, !0),
            n = e.map(e => e.on(`change`, t));
        return () => {
            n.forEach(e => e()),
            Le(r)
        }
    }), n
}
function hd(e) {
    Lr.current = [],
    e();
    let t = md(Lr.current, e);
    return Lr.current = void 0, t
}
function q(e, t, n, r) {
    if (typeof e == `function`)
        return hd(e);
    if (n !== void 0 && !Array.isArray(n) && typeof t != `function`)
        return _d(e, t, n, r);
    let i = typeof t == `function` ? t : wa(t, n, r),
        a = Array.isArray(e) ? gd(e, i) : gd([e], ([e]) => i(e)),
        o = Array.isArray(e) ? void 0 : e.accelerate;
    return o && !o.isTransformed && typeof t != `function` && Array.isArray(n) && r?.clamp !== !1 && (a.accelerate = {
        ...o,
        times: t,
        keyframes: n,
        isTransformed: !0,
        ...r?.ease ? {
            ease: r.ease
        } : {}
    }), a
}
function gd(e, t) {
    let n = S(() => []);
    return md(e, () => {
        n.length = 0;
        let r = e.length;
        for (let t = 0; t < r; t++)
            n[t] = e[t].get();
        return t(n)
    })
}
function _d(e, t, n, r) {
    let i = S(() => Object.keys(n)),
        a = S(() => ({}));
    for (let o of i)
        a[o] = q(e, t, n[o], r);
    return a
}
function vd(e, t={}) {
    let {isStatic: n} = (0, _.useContext)(Ec),
        r = () => si(e) ? e.get() : e;
    if (n)
        return q(r);
    let i = pd(r());
    return (0, _.useInsertionEffect)(() => Ta(i, e, t), [i, JSON.stringify(t)]), i
}
function yd(e, t={}) {
    return vd(e, {
        type: `spring`,
        ...t
    })
}
function bd() {
    !Ha.current && Wa();
    let [e] = (0, _.useState)(Va.current);
    return e
}
var xd = (...e) => e.filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t).join(` `).trim(),
    Sd = e => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
    Cd = e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()),
    J = e => {
        let t = Cd(e);
        return t.charAt(0).toUpperCase() + t.slice(1)
    },
    wd = {
        xmlns: `http://www.w3.org/2000/svg`,
        width: 24,
        height: 24,
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: 2,
        strokeLinecap: `round`,
        strokeLinejoin: `round`
    },
    Td = e => {
        for (let t in e)
            if (t.startsWith(`aria-`) || t === `role` || t === `title`)
                return !0;
        return !1
    },
    Ed = (0, _.createContext)({}),
    Dd = () => (0, _.useContext)(Ed),
    Od = (0, _.forwardRef)(({color: e, size: t, strokeWidth: n, absoluteStrokeWidth: r, className: i=``, children: a, iconNode: o, ...s}, c) => {
        let {size: l=24, strokeWidth: u=2, absoluteStrokeWidth: d=!1, color: f=`currentColor`, className: p=``} = Dd() ?? {},
            m = r ?? d ? Number(n ?? u) * 24 / Number(t ?? l) : n ?? u;
        return (0, _.createElement)(`svg`, {
            ref: c,
            ...wd,
            width: t ?? l ?? wd.width,
            height: t ?? l ?? wd.height,
            stroke: e ?? f,
            strokeWidth: m,
            className: xd(`lucide`, p, i),
            ...!a && !Td(s) && {
                "aria-hidden": `true`
            },
            ...s
        }, [...o.map(([e, t]) => (0, _.createElement)(e, t)), ...Array.isArray(a) ? a : [a]])
    }),
    Y = (e, t) => {
        let n = (0, _.forwardRef)(({className: n, ...r}, i) => (0, _.createElement)(Od, {
            ref: i,
            iconNode: t,
            className: xd(`lucide-${Sd(J(e))}`, `lucide-${e}`, n),
            ...r
        }));
        return n.displayName = J(e), n
    },
    kd = Y(`activity`, [[`path`, {
        d: `M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2`,
        key: `169zse`
    }]]),
    Ad = Y(`arrow-left`, [[`path`, {
        d: `m12 19-7-7 7-7`,
        key: `1l729n`
    }], [`path`, {
        d: `M19 12H5`,
        key: `x3x0zl`
    }]]),
    jd = Y(`arrow-right`, [[`path`, {
        d: `M5 12h14`,
        key: `1ays0h`
    }], [`path`, {
        d: `m12 5 7 7-7 7`,
        key: `xquz4c`
    }]]),
    Md = Y(`arrow-up-right`, [[`path`, {
        d: `M7 7h10v10`,
        key: `1tivn9`
    }], [`path`, {
        d: `M7 17 17 7`,
        key: `1vkiza`
    }]]),
    Nd = Y(`arrow-up`, [[`path`, {
        d: `m5 12 7-7 7 7`,
        key: `hav0vg`
    }], [`path`, {
        d: `M12 19V5`,
        key: `x0mq9r`
    }]]),
    Pd = Y(`book-open`, [[`path`, {
        d: `M12 5v16`,
        key: `1f6ucr`
    }], [`path`, {
        d: `M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z`,
        key: `1fyvmf`
    }]]),
    Fd = Y(`bot`, [[`path`, {
        d: `M12 8V4H8`,
        key: `hb8ula`
    }], [`rect`, {
        width: `16`,
        height: `12`,
        x: `4`,
        y: `8`,
        rx: `2`,
        key: `enze0r`
    }], [`path`, {
        d: `M2 14h2`,
        key: `vft8re`
    }], [`path`, {
        d: `M20 14h2`,
        key: `4cs60a`
    }], [`path`, {
        d: `M15 13v2`,
        key: `1xurst`
    }], [`path`, {
        d: `M9 13v2`,
        key: `rq6x2g`
    }]]),
    X = Y(`brain-circuit`, [[`path`, {
        d: `M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z`,
        key: `l5xja`
    }], [`path`, {
        d: `M9 13a4.5 4.5 0 0 0 3-4`,
        key: `10igwf`
    }], [`path`, {
        d: `M6.003 5.125A3 3 0 0 0 6.401 6.5`,
        key: `105sqy`
    }], [`path`, {
        d: `M3.477 10.896a4 4 0 0 1 .585-.396`,
        key: `ql3yin`
    }], [`path`, {
        d: `M6 18a4 4 0 0 1-1.967-.516`,
        key: `2e4loj`
    }], [`path`, {
        d: `M12 13h4`,
        key: `1ku699`
    }], [`path`, {
        d: `M12 18h6a2 2 0 0 1 2 2v1`,
        key: `105ag5`
    }], [`path`, {
        d: `M12 8h8`,
        key: `1lhi5i`
    }], [`path`, {
        d: `M16 8V5a2 2 0 0 1 2-2`,
        key: `u6izg6`
    }], [`circle`, {
        cx: `16`,
        cy: `13`,
        r: `.5`,
        key: `ry7gng`
    }], [`circle`, {
        cx: `18`,
        cy: `3`,
        r: `.5`,
        key: `1aiba7`
    }], [`circle`, {
        cx: `20`,
        cy: `21`,
        r: `.5`,
        key: `yhc1fs`
    }], [`circle`, {
        cx: `20`,
        cy: `8`,
        r: `.5`,
        key: `1e43v0`
    }]]),
    Id = Y(`chevron-left`, [[`path`, {
        d: `m15 18-6-6 6-6`,
        key: `1wnfg3`
    }]]),
    Ld = Y(`chevron-right`, [[`path`, {
        d: `m9 18 6-6-6-6`,
        key: `mthhwq`
    }]]),
    Rd = Y(`circle-check`, [[`circle`, {
        cx: `12`,
        cy: `12`,
        r: `10`,
        key: `1mglay`
    }], [`path`, {
        d: `m9 12 2 2 4-4`,
        key: `dzmm74`
    }]]),
    zd = Y(`code-xml`, [[`path`, {
        d: `m18 16 4-4-4-4`,
        key: `1inbqp`
    }], [`path`, {
        d: `m6 8-4 4 4 4`,
        key: `15zrgr`
    }], [`path`, {
        d: `m14.5 4-5 16`,
        key: `e7oirm`
    }]]),
    Bd = Y(`external-link`, [[`path`, {
        d: `M15 3h6v6`,
        key: `1q9fwt`
    }], [`path`, {
        d: `M10 14 21 3`,
        key: `gplh6r`
    }], [`path`, {
        d: `M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,
        key: `a6xqqp`
    }]]),
    Vd = Y(`flag`, [[`path`, {
        d: `M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528`,
        key: `1jaruq`
    }]]),
    Hd = Y(`gamepad-2`, [[`line`, {
        x1: `6`,
        x2: `10`,
        y1: `11`,
        y2: `11`,
        key: `1gktln`
    }], [`line`, {
        x1: `8`,
        x2: `8`,
        y1: `9`,
        y2: `13`,
        key: `qnk9ow`
    }], [`line`, {
        x1: `15`,
        x2: `15.01`,
        y1: `12`,
        y2: `12`,
        key: `krot7o`
    }], [`line`, {
        x1: `18`,
        x2: `18.01`,
        y1: `10`,
        y2: `10`,
        key: `1lcuu1`
    }], [`path`, {
        d: `M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z`,
        key: `mfqc10`
    }]]),
    Ud = Y(`graduation-cap`, [[`path`, {
        d: `M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z`,
        key: `j76jl0`
    }], [`path`, {
        d: `M22 10v6`,
        key: `1lu8f3`
    }], [`path`, {
        d: `M6 12.5V16a6 3 0 0 0 12 0v-3.5`,
        key: `1r8lef`
    }]]),
    Wd = Y(`hammer`, [[`path`, {
        d: `m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9`,
        key: `1hayfq`
    }], [`path`, {
        d: `m18 15 4-4`,
        key: `16gjal`
    }], [`path`, {
        d: `m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5`,
        key: `15ts47`
    }]]),
    Gd = Y(`mail`, [[`path`, {
        d: `m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,
        key: `132q7q`
    }], [`rect`, {
        x: `2`,
        y: `4`,
        width: `20`,
        height: `16`,
        rx: `2`,
        key: `izxlao`
    }]]),
    Kd = Y(`maximize-2`, [[`path`, {
        d: `M15 3h6v6`,
        key: `1q9fwt`
    }], [`path`, {
        d: `m21 3-7 7`,
        key: `1l2asr`
    }], [`path`, {
        d: `m3 21 7-7`,
        key: `tjx5ai`
    }], [`path`, {
        d: `M9 21H3v-6`,
        key: `wtvkvv`
    }]]),
    qd = Y(`menu`, [[`path`, {
        d: `M4 5h16`,
        key: `1tepv9`
    }], [`path`, {
        d: `M4 12h16`,
        key: `1lakjw`
    }], [`path`, {
        d: `M4 19h16`,
        key: `1djgab`
    }]]),
    Jd = Y(`plus`, [[`path`, {
        d: `M5 12h14`,
        key: `1ays0h`
    }], [`path`, {
        d: `M12 5v14`,
        key: `s699le`
    }]]),
    Yd = Y(`rocket`, [[`path`, {
        d: `M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5`,
        key: `qeys4`
    }], [`path`, {
        d: `M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09`,
        key: `u4xsad`
    }], [`path`, {
        d: `M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z`,
        key: `676m9`
    }], [`path`, {
        d: `M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05`,
        key: `92ym6u`
    }]]),
    Xd = Y(`rotate-ccw`, [[`path`, {
        d: `M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,
        key: `1357e3`
    }], [`path`, {
        d: `M3 3v5h5`,
        key: `1xhq8a`
    }]]),
    Zd = Y(`shield-check`, [[`path`, {
        d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,
        key: `oel41y`
    }], [`path`, {
        d: `m9 12 2 2 4-4`,
        key: `dzmm74`
    }]]),
    Qd = Y(`sparkles`, [[`path`, {
        d: `M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,
        key: `1s2grr`
    }], [`path`, {
        d: `M20 2v4`,
        key: `1rf3ol`
    }], [`path`, {
        d: `M22 4h-4`,
        key: `gwowj6`
    }], [`circle`, {
        cx: `4`,
        cy: `20`,
        r: `2`,
        key: `6kqj1y`
    }]]),
    $d = Y(`target`, [[`circle`, {
        cx: `12`,
        cy: `12`,
        r: `10`,
        key: `1mglay`
    }], [`circle`, {
        cx: `12`,
        cy: `12`,
        r: `6`,
        key: `1vlfrh`
    }], [`circle`, {
        cx: `12`,
        cy: `12`,
        r: `2`,
        key: `1c9p78`
    }]]),
    ef = Y(`terminal`, [[`path`, {
        d: `M12 19h8`,
        key: `baeox8`
    }], [`path`, {
        d: `m4 17 6-6-6-6`,
        key: `1yngyt`
    }]]),
    tf = Y(`trophy`, [[`path`, {
        d: `M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2`,
        key: `pwuv1l`
    }], [`path`, {
        d: `M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2`,
        key: `1y54w1`
    }], [`path`, {
        d: `M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3`,
        key: `e30mpu`
    }], [`path`, {
        d: `M4 22h16`,
        key: `57wxv0`
    }], [`path`, {
        d: `M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z`,
        key: `1mhfuq`
    }], [`path`, {
        d: `M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3`,
        key: `i0yafy`
    }]]),
    nf = Y(`video`, [[`path`, {
        d: `m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5`,
        key: `ftymec`
    }], [`rect`, {
        x: `2`,
        y: `6`,
        width: `14`,
        height: `12`,
        rx: `2`,
        key: `158x01`
    }]]),
    rf = Y(`volume-2`, [[`path`, {
        d: `M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,
        key: `uqj9uw`
    }], [`path`, {
        d: `M16 9a5 5 0 0 1 0 6`,
        key: `1q6k2b`
    }], [`path`, {
        d: `M19.364 18.364a9 9 0 0 0 0-12.728`,
        key: `ijwkga`
    }]]),
    af = Y(`volume-x`, [[`path`, {
        d: `M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,
        key: `uqj9uw`
    }], [`line`, {
        x1: `22`,
        x2: `16`,
        y1: `9`,
        y2: `15`,
        key: `1ewh16`
    }], [`line`, {
        x1: `16`,
        x2: `22`,
        y1: `9`,
        y2: `15`,
        key: `5ykzw1`
    }]]),
    of = Y(`x`, [[`path`, {
        d: `M18 6 6 18`,
        key: `1bl5f8`
    }], [`path`, {
        d: `m6 6 12 12`,
        key: `d8bk6v`
    }]]),
   var Z = {
    name: "Rohit Savan",
    firstName: "Rohit",
    role: "Developer • AI/ML • Full Stack",
    tagline: "B.Tech CCE student shipping AI-powered tools & full-stack experiments — from student performance predictors to AI code reviewers.",
    status: "Currently building AI Code Reviewer",
    bio: [
        "I'm a B.Tech CCE student who enjoys taking ideas from 'what if?' to something that actually works. I learn by building — and that's led me into web development, AI/ML, full-stack, and game development, plus plenty of experiments along the way.",
        "I now have 6 shipped projects (AI Code Reviewer, Student Performance AI, AI News Summarizer, Weather App, and more) and I'm keeping momentum — building AI-powered tools, exploring game dev, and experimenting with new technologies."
    ],
    education: "B.Tech — Computer & Communication Engineering",
    links: {
        github: "https://github.com/Rohits533",
        linkedin: "https://www.linkedin.com/in/rohit-savan-34465639b/",
        email: "rohitsavan360@gmail.com"
    },
    creator: {
        gaming: {
            label: "Gaming",
            handle: "@RohitGaming",
            url: "",
            note: "gaming content"
        },
        vlogs: {
            label: "Vlogging",
            handle: "@RohitVlogs",
            url: "",
            note: "vlogs & life content"
        }
    }
};
function Q({children: e, delay: t=0, y: n=24, className: r}) {
    return bd() ? (0, R.jsx)(`div`, {
        className: r,
        children: e
    }) : (0, R.jsx)(G.div, {
        className: r,
        initial: {
            opacity: 0,
            y: n
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: !0,
            margin: `-70px`
        },
        transition: {
            duration: .6,
            delay: t,
            ease: [.21, .47, .32, .98]
        },
        children: e
    })
}
function sf({eyebrow: e, title: t, description: n, align: r=`left`, chapter: i}) {
    let a = r === `center` ? `items-center text-center` : `items-start text-left`,
        o = bd(),
        s = t.split(` `);
    return (0, R.jsxs)(Q, {
        className: `relative flex flex-col ${a}`,
        children: [i && (0, R.jsx)(`span`, {
            className: `pointer-events-none absolute -top-14 right-0 select-none font-serif text-[clamp(5rem,12vw,11rem)] leading-none text-white/[0.04]`,
            "aria-hidden": `true`,
            children: i
        }), (0, R.jsxs)(`p`, {
            className: `relative flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-accent`,
            children: [(0, R.jsx)(`span`, {
                className: `inline-block h-2 w-2 bg-accent`,
                "aria-hidden": `true`
            }), `// `, e]
        }), (0, R.jsx)(`h2`, {
            className: `relative mt-4 font-serif text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[0.98] tracking-tight text-zinc-100`,
            children: o ? t : s.map((e, t) => (0, R.jsxs)(_.Fragment, {
                children: [(0, R.jsx)(`span`, {
                    className: `inline-block overflow-hidden pb-1 align-bottom`,
                    children: (0, R.jsx)(G.span, {
                        className: `inline-block`,
                        initial: {
                            y: `110%`
                        },
                        whileInView: {
                            y: 0
                        },
                        viewport: {
                            once: !0,
                            margin: `-60px`
                        },
                        transition: {
                            duration: .55,
                            delay: .05 * t,
                            ease: [.21, .47, .32, .98]
                        },
                        children: e
                    })
                }), ` `]
            }, `${e}-${t}`))
        }), (0, R.jsx)(`svg`, {
            className: `squiggle relative mt-3`,
            viewBox: `0 0 200 10`,
            preserveAspectRatio: `none`,
            "aria-hidden": `true`,
            children: (0, R.jsx)(`path`, {
                d: `M2 8 C 45 2, 95 9, 140 5 S 190 3, 198 6`
            })
        }), n && (0, R.jsx)(`p`, {
            className: `relative mt-5 max-w-2xl text-base leading-relaxed text-zinc-400`,
            children: n
        })]
    })
}
var cf = [`BUILD`, `EXPERIMENT`, `LEARN`, `IMPROVE`, `SHIP`],
    lf = [{
        icon: $d,
        label: `Data Structures & Algorithms`,
        note: `LeetCode · NeetCode`
    }, {
        icon: Hd,
        label: `Game development`,
        note: `interactive experiences`
    }, {
        icon: Fd,
        label: `AI experiments`,
        note: `AI-assisted building`
    }, {
        icon: Zd,
        label: `Cybersecurity`,
        note: `security fundamentals`
    }, {
        icon: Pd,
        label: `Web projects`,
        note: `shipping what I learn`
    }];
function uf() {
    return (0, R.jsx)(`section`, {
        id: `about`,
        className: `relative py-28 md:py-36`,
        children: (0, R.jsxs)(`div`, {
            className: `mx-auto w-full max-w-6xl px-6 md:px-10`,
            children: [(0, R.jsx)(sf, {
                eyebrow: `About`,
                title: `Learning by building.`,
                chapter: `01`
            }), (0, R.jsx)(Q, {
                delay: .1,
                className: `mt-10`,
                children: (0, R.jsxs)(`blockquote`, {
                    className: `border-l-2 border-accent pl-6 font-display text-2xl font-bold leading-snug text-zinc-100 md:text-4xl`,
                    children: [`I learn by `, (0, R.jsx)(`span`, {
                        className: `line`,
                        children: `building.`
                    })]
                })
            }), (0, R.jsxs)(`div`, {
                className: `mt-14 grid gap-14 lg:grid-cols-[1.15fr_0.85fr]`,
                children: [(0, R.jsxs)(`div`, {
                    children: [(0, R.jsx)(Q, {
                        delay: .05,
                        children: (0, R.jsx)(`div`, {
                            className: `space-y-5 text-base leading-relaxed text-zinc-400`,
                            children: Z.bio.map((e, t) => (0, R.jsx)(`p`, {
                                children: e
                            }, t))
                        })
                    }), (0, R.jsxs)(Q, {
                        delay: .15,
                        className: `mt-10`,
                        children: [(0, R.jsx)(`p`, {
                            className: `font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-500`,
                            children: `How I work`
                        }), (0, R.jsx)(`div`, {
                            className: `mt-4 flex flex-wrap items-center gap-2`,
                            children: cf.map((e, t) => (0, R.jsxs)(`span`, {
                                className: `flex items-center gap-2`,
                                children: [(0, R.jsx)(`span`, {
                                    style: {
                                        transform: `rotate(${[-1.4, 1, -.8, 1.2, 0][t % 5]}deg)`
                                    },
                                    className: `rounded-md border px-3 py-1.5 font-mono text-xs font-semibold tracking-wide ${t === cf.length - 1 ? `border-accent/60 bg-accent text-ink` : `border-edge bg-panel text-zinc-300`}`,
                                    children: e
                                }), t < cf.length - 1 && (0, R.jsx)(jd, {
                                    className: `h-3.5 w-3.5 text-zinc-600`,
                                    "aria-hidden": `true`
                                })]
                            }, e))
                        })]
                    })]
                }), (0, R.jsx)(Q, {
                    delay: .1,
                    children: (0, R.jsxs)(`div`, {
                        className: `rounded-2xl border border-edge bg-panel p-7`,
                        children: [(0, R.jsx)(`p`, {
                            className: `font-mono text-[11px] uppercase tracking-[0.3em] text-accent`,
                            children: `now`
                        }), (0, R.jsx)(`ul`, {
                            className: `mt-5 space-y-4`,
                            children: lf.map(e => (0, R.jsxs)(`li`, {
                                className: `flex items-start gap-3.5`,
                                children: [(0, R.jsx)(`span`, {
                                    className: `mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-edge bg-ink text-accent`,
                                    children: (0, R.jsx)(e.icon, {
                                        className: `h-4 w-4`,
                                        "aria-hidden": `true`
                                    })
                                }), (0, R.jsxs)(`span`, {
                                    children: [(0, R.jsx)(`span`, {
                                        className: `block text-sm font-semibold text-zinc-200`,
                                        children: e.label
                                    }), (0, R.jsx)(`span`, {
                                        className: `block text-xs text-zinc-500`,
                                        children: e.note
                                    })]
                                })]
                            }, e.label))
                        }), (0, R.jsxs)(`div`, {
                            className: `mt-6 flex items-center gap-2.5 border-t border-edge pt-5 text-xs text-zinc-500`,
                            children: [(0, R.jsx)(Ud, {
                                className: `h-4 w-4 text-accent`,
                                "aria-hidden": `true`
                            }), Z.education]
                        })]
                    })
                })]
            })]
        })
    })
}
var df = [{
    icon: "rocket",
    title: "10+ Projects Built",
    subtitle: "AI & Full Stack",
    text: "From AI tools to full-stack apps — shipped and deployed.",
    year: "2026",
    featured: true
}, {
    icon: "sparkles",
    title: "6 Public Repositories",
    subtitle: "Open Source",
    text: "Open source code available on GitHub.",
    year: "2026",
    featured: true
}, {
    icon: "trophy",
    title: "AI/ML Focus",
    subtitle: "Core Expertise",
    text: "Building AI-powered solutions and experiments.",
    year: "2026",
    featured: false
}, {
    icon: "target",
    title: "First Public Deployment",
    subtitle: "AI Code Reviewer",
    text: "AI Code Reviewer — live on Vercel.",
    year: "2026",
    featured: false
}];
    ff = {
        trophy: tf,
        sparkles: Qd,
        rocket: Yd,
        gamepad: Hd
    };
function pf({a: e, index: t}) {
    let n = ff[e.icon] ?? tf;
    return (0, R.jsx)(Q, {
        delay: t * .08,
        className: `h-full`,
        children: (0, R.jsxs)(`div`, {
            className: `card-lift group relative h-full overflow-hidden rounded-2xl border border-edge bg-panel p-8`,
            children: [(0, R.jsxs)(`span`, {
                className: `pointer-events-none absolute -right-2 -top-6 font-display text-[7rem] font-bold leading-none text-white/[0.03]`,
                "aria-hidden": `true`,
                children: [`0`, t + 1]
            }), (0, R.jsxs)(`div`, {
                className: `relative`,
                children: [(0, R.jsxs)(`div`, {
                    className: `flex items-start justify-between gap-4`,
                    children: [(0, R.jsx)(`span`, {
                        className: `flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-105`,
                        children: (0, R.jsx)(n, {
                            className: `h-6 w-6`,
                            "aria-hidden": `true`
                        })
                    }), (0, R.jsx)(`span`, {
                        className: `rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent`,
                        children: e.year
                    })]
                }), (0, R.jsx)(`h3`, {
                    className: `mt-6 font-display text-2xl font-bold leading-tight text-zinc-100`,
                    children: e.title
                }), (0, R.jsx)(`p`, {
                    className: `mt-1.5 text-xs font-semibold uppercase tracking-wide text-accent`,
                    children: e.subtitle
                }), (0, R.jsx)(`p`, {
                    className: `mt-3 text-sm leading-relaxed text-zinc-400`,
                    children: e.text
                })]
            })]
        })
    })
}
function mf({a: e, index: t}) {
    let n = ff[e.icon] ?? tf;
    return (0, R.jsx)(Q, {
        delay: t * .08,
        className: `h-full`,
        children: (0, R.jsxs)(`div`, {
            className: `card-lift group flex h-full items-start gap-4 rounded-2xl border border-edge bg-panel p-5`,
            children: [(0, R.jsx)(`span`, {
                className: `flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-edge bg-ink text-accent transition-transform duration-300 group-hover:scale-105`,
                children: (0, R.jsx)(n, {
                    className: `h-4 w-4`,
                    "aria-hidden": `true`
                })
            }), (0, R.jsxs)(`div`, {
                children: [(0, R.jsx)(`h3`, {
                    className: `font-display text-base font-bold leading-snug text-zinc-100`,
                    children: e.title
                }), (0, R.jsx)(`p`, {
                    className: `mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-zinc-500`,
                    children: e.subtitle
                }), (0, R.jsx)(`p`, {
                    className: `mt-1.5 text-xs leading-relaxed text-zinc-500`,
                    children: e.text
                })]
            })]
        })
    })
}
function hf() {
    let e = df.filter(e => e.featured),
        t = df.filter(e => !e.featured);
    return (0, R.jsx)(`section`, {
        id: `achievements`,
        className: `relative py-28 md:py-36`,
        children: (0, R.jsxs)(`div`, {
            className: `mx-auto w-full max-w-6xl px-6 md:px-10`,
            children: [(0, R.jsx)(sf, {
                eyebrow: `Achievements`,
                title: `Proof of work — so far.`,
                description: `A short, factual list of things that actually happened. The list is young, and that's fine.`,
                chapter: `04`
            }), (0, R.jsx)(`div`, {
                className: `mt-14 grid gap-5 md:grid-cols-2`,
                children: e.map((e, t) => (0, R.jsx)(pf, {
                    a: e,
                    index: t
                }, e.title))
            }), (0, R.jsx)(`div`, {
                className: `mt-5 grid gap-5 sm:grid-cols-2`,
                children: t.map((e, t) => (0, R.jsx)(mf, {
                    a: e,
                    index: t
                }, e.title))
            })]
        })
    })
}
var Gf = [
    {
        id: "ai-code-reviewer",
        name: "AI Code Reviewer",
        shipped: true,
        status: "live",
        category: "Web",
        oneLiner: "Full-stack AI-powered code review tool — catches bugs, suggests improvements.",
        accent: "#6C63FF",
        glyph: "AC",
        technologies: ["JavaScript", "Node.js", "AI", "Vercel"],
        links: {
            demo: "https://ai-code-reviewer-js.vercel.app",
            github: "https://github.com/Rohits533/AI-Code-Reviewer-JS"
        }
    },
    {
        id: "student-performance-ai",
        name: "Student Performance AI",
        shipped: true,
        status: "live",
        category: "AI/ML",
        oneLiner: "ML web app predicting student performance based on study hours, attendance, marks.",
        accent: "#5b9dff",
        glyph: "SP",
        technologies: ["Python", "ML", "Flask", "Pandas"],
        links: {
            github: "https://github.com/Rohits533/student-performance-ai"
        }
    },
    {
        id: "ai-news-summarizer",
        name: "AI News Summarizer",
        shipped: true,
        status: "live",
        category: "AI/ML",
        oneLiner: "News analyzer that summarizes articles and extracts key insights using NLP.",
        accent: "#fbbf24",
        glyph: "NS",
        technologies: ["Python", "NLP", "Web Scraping"],
        links: {
            github: "https://github.com/Rohits533/ai-news-summarizer"
        }
    },
    {
        id: "weather-app",
        name: "Weather App",
        shipped: true,
        status: "live",
        category: "Web",
        oneLiner: "Clean weather app with live API data — HTML, CSS, JavaScript.",
        accent: "#00D4FF",
        glyph: "WA",
        technologies: ["HTML", "CSS", "JS", "API"],
        links: {
            github: "https://github.com/Rohits533/weather-app"
        }
    },
    {
        id: "ai-resume-builder",
        name: "AI Resume Builder",
        shipped: false,
        status: "building",
        category: "AI/ML",
        oneLiner: "AI-powered resume builder with smart content suggestions.",
        accent: "#6C63FF",
        glyph: "RB",
        technologies: ["Python", "AI", "NLP"],
        links: {
            github: "https://github.com/Rohits533/ai-resume-builder"
        }
    },
    {
        id: "mario-streamlit-game",
        name: "Mario Streamlit Game",
        shipped: false,
        status: "building",
        category: "Game",
        oneLiner: "Interactive game built with Streamlit and Python.",
        accent: "#f59e0b",
        glyph: "MG",
        technologies: ["Python", "Streamlit", "Game Dev"],
        links: {
            github: "https://github.com/Rohits533/mario-streamlit-game"
        }
    }
];
function _f() {
    let e = gf.filter(e => e.url);
    return e.length === 0 ? null : (0, R.jsx)(`section`, {
        id: `beyond`,
        className: `relative py-28 md:py-32`,
        children: (0, R.jsxs)(`div`, {
            className: `mx-auto w-full max-w-6xl px-6 md:px-10`,
            children: [(0, R.jsx)(sf, {
                eyebrow: `Beyond code`,
                title: `Also, I make content.`,
                description: `A smaller side of the story — gaming and vlogging, when I'm not building.`,
                chapter: `10`
            }), (0, R.jsx)(`div`, {
                className: `mt-12 grid max-w-3xl gap-5 sm:grid-cols-2`,
                children: e.map((e, t) => (0, R.jsx)(Q, {
                    delay: t * .08,
                    children: (0, R.jsxs)(`a`, {
                        href: e.url,
                        target: `_blank`,
                        rel: `noreferrer`,
                        className: `card-lift group flex items-center gap-5 rounded-2xl border border-edge bg-panel p-6`,
                        children: [(0, R.jsx)(`span`, {
                            className: `flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-edge bg-ink text-accent transition-transform duration-300 group-hover:scale-110`,
                            children: (0, R.jsx)(e.icon, {
                                className: `h-5 w-5`,
                                "aria-hidden": `true`
                            })
                        }), (0, R.jsxs)(`span`, {
                            className: `min-w-0`,
                            children: [(0, R.jsxs)(`span`, {
                                className: `flex items-center gap-2`,
                                children: [(0, R.jsx)(`span`, {
                                    className: `font-display text-base font-bold text-zinc-100`,
                                    children: e.title
                                }), (0, R.jsx)(Md, {
                                    className: `h-4 w-4 text-zinc-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent`,
                                    "aria-hidden": `true`
                                })]
                            }), (0, R.jsx)(`span`, {
                                className: `mt-0.5 block truncate font-mono text-xs text-zinc-500`,
                                children: e.handle
                            }), (0, R.jsx)(`span`, {
                                className: `mt-0.5 block text-xs text-zinc-600`,
                                children: e.note
                            })]
                        })]
                    })
                }, e.title))
            })]
        })
    })
}
var vf = [{
    id: `top`,
    num: `00`,
    label: `Intro`
}, {
    id: `about`,
    num: `01`,
    label: `About`
}, {
    id: `what-i-build`,
    num: `02`,
    label: `Build`
}, {
    id: `work`,
    num: `03`,
    label: `Work`
}, {
    id: `achievements`,
    num: `04`,
    label: `Proof`
}, {
    id: `journey`,
    num: `05`,
    label: `Journey`
}, {
    id: `skills`,
    num: `06`,
    label: `Skills`
}, {
    id: `now`,
    num: `07`,
    label: `Now`
}, {
    id: `code`,
    num: `08`,
    label: `Code`
}, {
    id: `beyond`,
    num: `09`,
    label: `Beyond`
}, {
    id: `contact`,
    num: `10`,
    label: `Contact`
}];
function yf() {
    let e = bd(),
        [t, n] = (0, _.useState)(0),
        r = (0, _.useRef)([]);
    return (0, _.useEffect)(() => {
        let e = 0,
            t = () => {
                let e = window.innerHeight * .4,
                    t = 0;
                vf.forEach((n, i) => {
                    let a = document.getElementById(n.id),
                        o = r.current[i];
                    if (!a || !o)
                        return;
                    let s = a.getBoundingClientRect(),
                        c = s.top,
                        l = s.bottom,
                        u = Math.min(Math.max((e - c) / Math.max(l - c, 1), 0), 1);
                    o.style.transform = `scaleY(${u})`,
                    c <= e && l >= e && (t = i)
                }),
                n(t)
            },
            i = () => {
                cancelAnimationFrame(e),
                e = requestAnimationFrame(t)
            };
        return t(), window.addEventListener(`scroll`, i, {
            passive: !0
        }), window.addEventListener(`resize`, i), () => {
            cancelAnimationFrame(e),
            window.removeEventListener(`scroll`, i),
            window.removeEventListener(`resize`, i)
        }
    }, []), (0, R.jsx)(`nav`, {
        "aria-label": `Chapters`,
        className: `fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3.5 lg:flex`,
        children: vf.map((n, i) => {
            let a = i === t;
            return (0, R.jsxs)(`a`, {
                href: `#${n.id}`,
                "aria-current": a ? `true` : void 0,
                className: `group flex items-center gap-3`,
                children: [(0, R.jsx)(G.span, {
                    animate: e ? void 0 : {
                        opacity: a ? 1 : .55
                    },
                    className: `font-mono text-[10px] tabular-nums transition-colors ${a ? `text-accent` : `text-zinc-500`}`,
                    children: n.num
                }), (0, R.jsx)(`span`, {
                    className: `font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${a ? `text-zinc-200` : `text-zinc-500 group-hover:text-zinc-300`}`,
                    children: n.label
                }), (0, R.jsx)(`span`, {
                    className: `relative h-10 w-px overflow-hidden bg-white/10`,
                    children: (0, R.jsx)(`span`, {
                        ref: e => {
                            r.current[i] = e
                        },
                        className: `absolute inset-0 origin-top bg-accent`,
                        style: {
                            transform: `scaleY(0)`
                        }
                    })
                })]
            }, n.id)
        })
    })
}
var bf = [{
    id: `srujana-2026`,
    title: `Srujana 2026 Hackathon`,
    level: `1st Place — Open Innovation`,
    issuer: `Srujana Hackathon`,
    year: `2026`,
    image: `assets/certificates/srujana-1st.jpg`
}, {
    id: `worldquant-gold`,
    title: `WorldQuant Championship`,
    level: `Gold Level`,
    issuer: `WorldQuant`,
    year: ``,
    image: `assets/certificates/worldquant-gold.jpg`
}, {
    id: `worldquant-silver`,
    title: `WorldQuant Championship`,
    level: `Silver Level`,
    issuer: `WorldQuant`,
    year: ``,
    image: `assets/certificates/worldquant-silver.jpg`
}, {
    id: `international-quant`,
    title: `International Quant Championship`,
    level: `Certificate of Recognition`,
    issuer: `Quant Championship`,
    year: ``,
    image: `assets/certificates/international-quant-recognition.jpg`
}, {
    id: `globals-goal`,
    title: `Globals Goal Hackathon`,
    level: `Participation`,
    issuer: `Globals Goal`,
    year: ``,
    image: `assets/certificates/globals-goal-hackathon.jpg`
}, {
    id: `code-clash`,
    title: `Code Clash`,
    level: `Participation`,
    issuer: `Code Clash`,
    year: ``,
    image: `assets/certificates/code-clash-participation.jpg`
}, {
    id: `outthinkx`,
    title: `OutThinkX`,
    level: `Participation`,
    issuer: `OutThinkX`,
    year: ``,
    image: `assets/certificates/outthinkx-participation.png`
}, {
    id: `unstop-week-of-wins`,
    title: `Unstop Week of Wins`,
    level: `Participation`,
    issuer: `Unstop`,
    year: ``,
    image: `assets/certificates/unstop-week-of-wins.jpg`
}];
function xf() {
    return (0, R.jsx)(`span`, {
        className: `absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#8a2c1c] bg-gradient-to-br from-[#c2432c] to-[#7e2214] text-sm font-bold text-[#ffd9a8] shadow-[0_2px_10px_rgba(0,0,0,0.5)]`,
        "aria-hidden": `true`,
        children: `AM`
    })
}
function Sf({onOpen: e}) {
    return (0, R.jsx)(`div`, {
        className: `mx-auto w-full max-w-md [perspective:1400px]`,
        children: (0, R.jsxs)(`button`, {
            type: `button`,
            onClick: e,
            "aria-label": `Open the envelope to view certificates`,
            className: `group block w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-accent`,
            children: [(0, R.jsxs)(`div`, {
                className: `relative aspect-[5/3] w-full select-none`,
                children: [(0, R.jsx)(`div`, {
                    className: `absolute inset-0 rounded-2xl border border-edge bg-gradient-to-br from-[#26262e] to-[#181820] shadow-2xl`
                }), (0, R.jsxs)(G.div, {
                    animate: {
                        y: 10
                    },
                    transition: {
                        duration: .4,
                        repeat: 1 / 0,
                        repeatType: `mirror`,
                        repeatDelay: 2.6
                    },
                    className: `absolute inset-x-5 bottom-7 top-3 rounded-lg border border-edge bg-[#f5f1e6] p-4 shadow-lg`,
                    children: [(0, R.jsx)(`div`, {
                        className: `mx-auto mt-1 h-2 w-24 rounded-full bg-zinc-300`
                    }), (0, R.jsx)(`div`, {
                        className: `mx-auto mt-3 h-1.5 w-32 rounded-full bg-zinc-200`
                    }), (0, R.jsx)(`div`, {
                        className: `mx-auto mt-2 h-1.5 w-28 rounded-full bg-zinc-200`
                    }), (0, R.jsx)(`div`, {
                        className: `mx-auto mt-6 flex items-center justify-center gap-2 font-serif text-sm italic text-zinc-400`,
                        children: `sealed with care — open to read`
                    })]
                }), (0, R.jsx)(`div`, {
                    className: `absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2c2c36] to-[#1d1d25]`,
                    style: {
                        clipPath: `polygon(0 0, 50% 50%, 0 100%)`
                    },
                    "aria-hidden": `true`
                }), (0, R.jsx)(`div`, {
                    className: `absolute inset-0 rounded-2xl bg-gradient-to-bl from-[#2c2c36] to-[#1d1d25]`,
                    style: {
                        clipPath: `polygon(100% 0, 50% 50%, 100% 100%)`
                    },
                    "aria-hidden": `true`
                }), (0, R.jsx)(G.div, {
                    initial: {
                        rotateX: 0
                    },
                    whileHover: {
                        rotateX: 14
                    },
                    className: `absolute inset-x-0 top-0 h-[52%] rounded-t-2xl bg-gradient-to-b from-[#33333e] to-[#24242c]`,
                    style: {
                        clipPath: `polygon(0 0, 100% 0, 50% 100%)`,
                        transformOrigin: `top`,
                        transformStyle: `preserve-3d`
                    },
                    "aria-hidden": `true`,
                    children: (0, R.jsx)(`div`, {
                        className: `absolute inset-x-0 top-0 h-full opacity-40`,
                        style: {
                            clipPath: `polygon(0 0, 100% 0, 50% 100%)`,
                            background: `repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0 6px, transparent 6px 12px)`
                        }
                    })
                }), (0, R.jsx)(G.div, {
                    initial: {
                        y: 0
                    },
                    whileHover: {
                        y: -6
                    },
                    className: `absolute inset-0`,
                    "aria-hidden": `true`,
                    children: (0, R.jsx)(xf, {})
                })]
            }), (0, R.jsxs)(`div`, {
                className: `mt-6 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-500 transition-colors group-hover:text-accent`,
                children: [(0, R.jsx)(`span`, {
                    className: `inline-block h-2 w-2 animate-pulse bg-accent`,
                    "aria-hidden": `true`
                }), `click the envelope to open`]
            })]
        })
    })
}
function Cf({cert: e, children: t}) {
    return (0, R.jsxs)(`div`, {
        className: `relative`,
        children: [(0, R.jsx)(`div`, {
            className: `absolute -inset-3 rounded-2xl bg-gradient-to-br from-accent/25 via-transparent to-accent/10 blur-xl`,
            "aria-hidden": `true`
        }), (0, R.jsx)(`div`, {
            className: `relative rounded-xl border border-accent/40 bg-gradient-to-br from-[#3a3a22] via-[#26261c] to-[#2e2e22] p-[3px] shadow-2xl`,
            children: (0, R.jsxs)(`div`, {
                className: `relative overflow-hidden rounded-lg border border-[#d8c98a]/60 bg-[#faf6ea] p-2`,
                children: [(0, R.jsx)(`span`, {
                    className: `pointer-events-none absolute left-2 top-2 h-5 w-5 border-l-2 border-t-2 border-[#c9b56a]`,
                    "aria-hidden": `true`
                }), (0, R.jsx)(`span`, {
                    className: `pointer-events-none absolute right-2 top-2 h-5 w-5 border-r-2 border-t-2 border-[#c9b56a]`,
                    "aria-hidden": `true`
                }), (0, R.jsx)(`span`, {
                    className: `pointer-events-none absolute bottom-2 left-2 h-5 w-5 border-b-2 border-l-2 border-[#c9b56a]`,
                    "aria-hidden": `true`
                }), (0, R.jsx)(`span`, {
                    className: `pointer-events-none absolute bottom-2 right-2 h-5 w-5 border-b-2 border-r-2 border-[#c9b56a]`,
                    "aria-hidden": `true`
                }), (0, R.jsx)(`div`, {
                    className: `pointer-events-none absolute inset-0 overflow-hidden rounded-lg`,
                    "aria-hidden": `true`,
                    children: (0, R.jsx)(`div`, {
                        className: `absolute inset-y-0 -left-1/2 w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 group-hover:translate-x-[300%]`
                    })
                }), (0, R.jsx)(`img`, {
                    src: e.image,
                    alt: `${e.title} — ${e.level}`,
                    className: `block h-auto w-full rounded-sm`,
                    loading: `lazy`
                })]
            })
        })]
    })
}
function wf({cert: e}) {
    return (0, R.jsx)(G.figure, {
        initial: {
            opacity: 0,
            x: 80,
            rotateY: 8
        },
        animate: {
            opacity: 1,
            x: 0,
            rotateY: 0
        },
        exit: {
            opacity: 0,
            x: -80,
            rotateY: -8
        },
        transition: {
            duration: .45,
            ease: [.21, .47, .32, .98]
        },
        className: `group text-center`,
        children: (0, R.jsx)(Cf, {
            cert: e,
            children: (0, R.jsxs)(`figcaption`, {
                className: `mt-6`,
                children: [(0, R.jsxs)(`div`, {
                    className: `flex flex-wrap items-center justify-center gap-2`,
                    children: [(0, R.jsx)(`span`, {
                        className: `rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-accent`,
                        children: e.level
                    }), e.year && (0, R.jsx)(`span`, {
                        className: `rounded-full border border-edge bg-panel px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-zinc-400`,
                        children: e.year
                    })]
                }), (0, R.jsx)(`h3`, {
                    className: `mt-3 font-display text-2xl font-bold tracking-tight text-zinc-100`,
                    children: e.title
                }), (0, R.jsx)(`p`, {
                    className: `mt-1 font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500`,
                    children: e.issuer
                })]
            })
        })
    }, e.id)
}
function Tf({onReset: e}) {
    let [t, n] = (0, _.useState)(0),
        [r, i] = (0, _.useState)(1),
        a = bf.length,
        o = bf[t],
        s = e => {
            i(e),
            n(t => (t + e + a) % a)
        };
    return (0, R.jsxs)(`div`, {
        className: `mx-auto w-full max-w-2xl`,
        children: [(0, R.jsx)(Lc, {
            mode: `wait`,
            initial: !1,
            custom: r,
            children: (0, R.jsx)(wf, {
                cert: o
            }, o.id)
        }), (0, R.jsxs)(`div`, {
            className: `mt-8 flex items-center justify-center gap-5`,
            children: [(0, R.jsx)(`button`, {
                type: `button`,
                onClick: () => s(-1),
                "aria-label": `Previous certificate`,
                className: `flex h-11 w-11 items-center justify-center rounded-full border border-edge bg-panel text-zinc-300 transition-colors hover:border-accent/50 hover:text-accent`,
                children: (0, R.jsx)(Id, {
                    className: `h-5 w-5`,
                    "aria-hidden": `true`
                })
            }), (0, R.jsx)(`div`, {
                className: `flex items-center gap-2`,
                children: bf.map((e, r) => (0, R.jsx)(`button`, {
                    type: `button`,
                    onClick: () => {
                        i(r > t ? 1 : -1),
                        n(r)
                    },
                    "aria-label": `Go to certificate ${r + 1}: ${e.title}`,
                    className: `h-1.5 rounded-full transition-all`,
                    style: {
                        width: r === t ? 24 : 8,
                        backgroundColor: r === t ? `var(--color-accent)` : `rgba(255,255,255,0.18)`
                    }
                }, e.id))
            }), (0, R.jsx)(`button`, {
                type: `button`,
                onClick: () => s(1),
                "aria-label": `Next certificate`,
                className: `flex h-11 w-11 items-center justify-center rounded-full border border-edge bg-panel text-zinc-300 transition-colors hover:border-accent/50 hover:text-accent`,
                children: (0, R.jsx)(Ld, {
                    className: `h-5 w-5`,
                    "aria-hidden": `true`
                })
            })]
        }), (0, R.jsxs)(`div`, {
            className: `mt-6 flex items-center justify-center gap-4`,
            children: [(0, R.jsxs)(`span`, {
                className: `font-mono text-[10px] tracking-[0.3em] text-zinc-500`,
                children: [String(t + 1).padStart(2, `0`), ` / `, String(a).padStart(2, `0`)]
            }), (0, R.jsxs)(`button`, {
                type: `button`,
                onClick: e,
                className: `inline-flex items-center gap-2 rounded-lg border border-edge bg-panel px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:border-accent/50 hover:text-accent`,
                children: [(0, R.jsx)(Xd, {
                    className: `h-3 w-3`,
                    "aria-hidden": `true`
                }), ` reseal`]
            })]
        })]
    })
}
function Ef() {
    return (0, R.jsx)(`div`, {
        className: `grid gap-6 sm:grid-cols-2`,
        children: bf.map((e, t) => (0, R.jsxs)(Q, {
            delay: t % 2 * .08,
            children: [(0, R.jsx)(Cf, {
                cert: e
            }), (0, R.jsxs)(`div`, {
                className: `mt-3 text-center`,
                children: [(0, R.jsx)(`span`, {
                    className: `rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-accent`,
                    children: e.level
                }), (0, R.jsx)(`h3`, {
                    className: `mt-2 font-display text-lg font-bold text-zinc-100`,
                    children: e.title
                })]
            })]
        }, e.id))
    })
}
function Df() {
    let e = bd(),
        [t, n] = (0, _.useState)(!1),
        [r, i] = (0, _.useState)(`envelope`);
    return (0, _.useEffect)(() => {
        if (r !== `opening`)
            return;
        let e = setTimeout(() => i(`deck`), 900);
        return () => clearTimeout(e)
    }, [r]), (0, R.jsx)(`section`, {
        id: `certificates`,
        className: `relative py-28 md:py-36`,
        children: (0, R.jsxs)(`div`, {
            className: `mx-auto w-full max-w-6xl px-6 md:px-10`,
            children: [(0, R.jsx)(sf, {
                eyebrow: `Certificates`,
                title: `Sealed proof of effort.`,
                description: `Every participation, win, and milestone — saved as a certificate. Click the envelope to unseal the collection.`,
                chapter: `05`
            }), (0, R.jsx)(`div`, {
                className: `mt-16`,
                children: e ? (0, R.jsx)(Ef, {}) : (0, R.jsx)(Lc, {
                    mode: `wait`,
                    children: r === `deck` ? (0, R.jsx)(G.div, {
                        initial: {
                            opacity: 0,
                            y: 40
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .5,
                            ease: [.21, .47, .32, .98]
                        },
                        children: (0, R.jsx)(Tf, {
                            onReset: () => {
                                n(!1),
                                i(`envelope`)
                            }
                        })
                    }, `deck`) : (0, R.jsx)(G.div, {
                        initial: {
                            opacity: 0,
                            y: 40
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -60,
                            scale: .96
                        },
                        transition: {
                            duration: .5,
                            ease: [.21, .47, .32, .98]
                        },
                        children: (0, R.jsx)(Sf, {
                            onOpen: () => {
                                t || (n(!0), i(`opening`))
                            }
                        })
                    }, `envelope`)
                })
            })]
        })
    })
}
function Of({children: e, className: t=`h-4 w-4`, label: n}) {
    return (0, R.jsx)(`svg`, {
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        className: t,
        role: `img`,
        "aria-label": n,
        "aria-hidden": n ? void 0 : `true`,
        children: e
    })
}
function kf({className: e}) {
    return (0, R.jsx)(Of, {
        className: e,
        label: `GitHub`,
        children: (0, R.jsx)(`path`, {
            d: `M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12`
        })
    })
}
function Af({className: e}) {
    return (0, R.jsx)(Of, {
        className: e,
        label: `LinkedIn`,
        children: (0, R.jsx)(`path`, {
            d: `M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z`
        })
    })
}
function jf({className: e}) {
    return (0, R.jsx)(Of, {
        className: e,
        label: `Instagram`,
        children: (0, R.jsx)(`path`, {
            d: `M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z`
        })
    })
}
function Mf({className: e}) {
    return (0, R.jsx)(Of, {
        className: e,
        label: `YouTube`,
        children: (0, R.jsx)(`path`, {
            d: `M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z`
        })
    })
}
var Nf = [{
        name: `birthday-cake`,
        description: `A personalized birthday wishing web experience — my first publicly deployed project.`,
        language: `HTML`,
        url: `https://github.com/InterestingAary/birthday-cake`
    }, {
        name: `Rural-Guards`,
        description: `Hackathon-winning rural safety & assistance platform (Srujana 2026).`,
        language: `HTML`,
        url: `https://github.com/InterestingAary/Rural-Guards`
    }, {
        name: `neetcode-submissions`,
        description: `My NeetCode practice submissions — DSA solutions in Python.`,
        language: `Python`,
        url: `https://github.com/InterestingAary/neetcode-submissions`
    }, {
        name: `Javascript-Learning-Journey`,
        description: `JavaScript learning notes and practice code.`,
        language: `JavaScript`,
        url: `https://github.com/InterestingAary/Javascript-Learning-Journey`
    }],
    Pf = {
        JavaScript: `#f1e05a`,
        TypeScript: `#3178c6`,
        Python: `#3572A5`,
        C: `#555555`,
        "C++": `#f34b7d`,
        HTML: `#e34c26`,
        CSS: `#563d7c`,
        Shell: `#89e051`,
        Lua: `#000080`
    };
function Ff(e) {
    try {
        return new Date(e).toLocaleDateString(`en-US`, {
            month: `short`,
            year: `numeric`
        })
    } catch {
        return ``
    }
}
function If({repo: e, index: t}) {
    let n = Pf[e.language] ?? `#8b949e`;
    return (0, R.jsx)(Q, {
        delay: t * .06,
        children: (0, R.jsxs)(`div`, {
            className: `group flex h-full flex-col rounded-2xl border border-edge bg-panel p-6 transition-colors duration-300 hover:border-accent/50`,
            children: [(0, R.jsxs)(`div`, {
                className: `flex items-center justify-between gap-3`,
                children: [(0, R.jsxs)(`h3`, {
                    className: `flex min-w-0 items-center gap-2 font-mono text-sm font-semibold text-zinc-100`,
                    children: [(0, R.jsx)(kf, {
                        className: `h-4 w-4 shrink-0 text-zinc-500`,
                        "aria-hidden": `true`
                    }), (0, R.jsx)(`span`, {
                        className: `truncate`,
                        children: e.name
                    })]
                }), e.url && (0, R.jsx)(`a`, {
                    href: e.url,
                    target: `_blank`,
                    rel: `noreferrer`,
                    "aria-label": `Open ${e.name} on GitHub`,
                    className: `shrink-0 rounded-lg border border-edge p-1.5 text-zinc-400 transition-colors hover:border-accent/50 hover:text-accent`,
                    children: (0, R.jsx)(Md, {
                        className: `h-4 w-4`
                    })
                })]
            }), (0, R.jsx)(`p`, {
                className: `mt-3 flex-1 text-xs leading-relaxed text-zinc-500`,
                children: e.description || `No description yet.`
            }), (0, R.jsxs)(`p`, {
                className: `mt-4 flex items-center gap-2 font-mono text-[11px] text-zinc-500`,
                children: [(0, R.jsx)(`span`, {
                    className: `h-2.5 w-2.5 rounded-full`,
                    style: {
                        backgroundColor: n
                    },
                    "aria-hidden": `true`
                }), e.language, e.updatedAt && (0, R.jsxs)(`span`, {
                    className: `text-zinc-600`,
                    children: [`· updated `, e.updatedAt]
                })]
            })]
        })
    })
}
function Lf() {
    let e = Z.links.github ? Z.links.github.split(`/`).filter(Boolean).pop() : ``,
        [t, n] = (0, _.useState)(null);
    (0, _.useEffect)(() => {
        if (!e)
            return;
        let t = !1;
        return fetch(`https://api.github.com/users/${e}/repos?sort=updated&per_page=6`).then(e => {
            if (!e.ok)
                throw Error(`github api`);
            return e.json()
        }).then(e => {
            if (t)
                return;
            let r = (e ?? []).map(e => ({
                name: e.name,
                description: e.description,
                language: e.language,
                url: e.html_url,
                updatedAt: Ff(e.updated_at)
            }));
            n(r.length ? r : [])
        }).catch(() => {
            t || n(`error`)
        }), () => {
            t = !0
        }
    }, [e]);
    let r = t === `error`,
        i = t === null && !!e,
        a = r || !e ? Nf : t;
    return (0, R.jsx)(`section`, {
        id: `code`,
        className: `relative py-28 md:py-36`,
        children: (0, R.jsxs)(`div`, {
            className: `mx-auto w-full max-w-6xl px-6 md:px-10`,
            children: [(0, R.jsx)(sf, {
                eyebrow: `Open source / code`,
                title: `Work in public.`,
                description: `Straight from my GitHub — no inflated stats, just code.`,
                chapter: `09`
            }), (0, R.jsxs)(`div`, {
                className: `mt-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]`,
                children: [(0, R.jsx)(Q, {
                    children: (0, R.jsxs)(`div`, {
                        className: `rounded-2xl border border-edge bg-panel p-7`,
                        children: [(0, R.jsxs)(`div`, {
                            className: `flex items-center gap-4`,
                            children: [(0, R.jsx)(`span`, {
                                className: `flex h-16 w-16 items-center justify-center rounded-2xl font-display text-2xl font-bold text-ink`,
                                style: {
                                    background: `linear-gradient(135deg, #5b9dff 0%, #3f7fdd 100%)`
                                },
                                "aria-hidden": `true`,
                                children: `A`
                            }), (0, R.jsxs)(`div`, {
                                children: [(0, R.jsx)(`p`, {
                                    className: `font-display text-xl font-bold text-zinc-100`,
                                    children: Z.name
                                }), (0, R.jsx)(`p`, {
                                    className: `mt-0.5 text-xs text-zinc-500`,
                                    children: e ? `github.com/${e}` : `GitHub handle — add in src/data/profile.js`
                                })]
                            })]
                        }), (0, R.jsx)(`p`, {
                            className: `mt-5 text-sm leading-relaxed text-zinc-400`,
                            children: `Most of my code lives here — projects, experiments, and DSA practice.`
                        }), Z.links.github && (0, R.jsxs)(`a`, {
                            href: Z.links.github,
                            target: `_blank`,
                            rel: `noreferrer`,
                            className: `btn-accent`,
                            children: [(0, R.jsx)(kf, {
                                className: `h-4 w-4`
                            }), ` Visit GitHub`]
                        })]
                    })
                }), i ? (0, R.jsx)(`div`, {
                    className: `grid gap-5 sm:grid-cols-2`,
                    "aria-busy": `true`,
                    children: [0, 1, 2, 3].map(e => (0, R.jsx)(`div`, {
                        className: `h-36 animate-pulse rounded-2xl border border-edge bg-panel`
                    }, e))
                }) : a.length > 0 ? (0, R.jsx)(`div`, {
                    className: `grid gap-5 sm:grid-cols-2`,
                    children: a.slice(0, 6).map((e, t) => (0, R.jsx)(If, {
                        repo: e,
                        index: t
                    }, e.name))
                }) : (0, R.jsx)(`div`, {
                    className: `flex items-center justify-center rounded-2xl border border-dashed border-edge p-10 text-sm text-zinc-600`,
                    children: `Repositories are being published here as I go.`
                })]
            })]
        })
    })
}
var Rf = [{
    size: 240,
    color: `rgba(214,255,77,0.5)`,
    x: 18,
    y: 28,
    delay: 0,
    dur: 11
}, {
    size: 200,
    color: `rgba(91,157,255,0.42)`,
    x: 62,
    y: 18,
    delay: .8,
    dur: 13
}, {
    size: 220,
    color: `rgba(167,139,250,0.4)`,
    x: 76,
    y: 62,
    delay: 1.6,
    dur: 12
}, {
    size: 170,
    color: `rgba(214,255,77,0.35)`,
    x: 34,
    y: 68,
    delay: 2.4,
    dur: 10
}, {
    size: 150,
    color: `rgba(91,157,255,0.35)`,
    x: 10,
    y: 74,
    delay: .4,
    dur: 14
}];
function zf({className: e=``, blobs: t=Rf, opacity: n=.7}) {
    let r = bd(),
        i = (0, _.useId)().replace(/[^a-zA-Z0-9]/g, ``);
    return (0, R.jsxs)(`div`, {
        className: `pointer-events-none absolute inset-0 overflow-hidden ${e}`,
        "aria-hidden": `true`,
        children: [(0, R.jsx)(`svg`, {
            className: `absolute h-0 w-0`,
            "aria-hidden": `true`,
            focusable: `false`,
            children: (0, R.jsx)(`defs`, {
                children: (0, R.jsxs)(`filter`, {
                    id: `goo-${i}`,
                    children: [(0, R.jsx)(`feGaussianBlur`, {
                        in: `SourceGraphic`,
                        stdDeviation: `22`,
                        result: `blur`
                    }), (0, R.jsx)(`feColorMatrix`, {
                        in: `blur`,
                        mode: `matrix`,
                        values: `1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -10`,
                        result: `goo`
                    }), (0, R.jsx)(`feComposite`, {
                        in: `SourceGraphic`,
                        in2: `goo`,
                        operator: `atop`
                    })]
                })
            })
        }), (0, R.jsx)(`div`, {
            className: `absolute inset-0`,
            style: {
                filter: `url(#goo-${i})`,
                opacity: n
            },
            children: t.map((e, t) => (0, R.jsx)(`span`, {
                className: `absolute rounded-full ${r ? `` : `metaball-blob`}`,
                style: {
                    width: e.size,
                    height: e.size,
                    left: `${e.x}%`,
                    top: `${e.y}%`,
                    transform: `translate(-50%, -50%)`,
                    background: `radial-gradient(circle at 50% 50%, ${e.color} 0%, transparent 72%)`,
                    animationDelay: `${e.delay}s`,
                    animationDuration: `${e.dur}s`
                }
            }, t))
        })]
    })
}
var Bf = [{
    icon: kf,
    label: `GitHub`,
    url: Z.links.github
}, {
    icon: Af,
    label: `LinkedIn`,
    url: Z.links.linkedin
}, {
    icon: jf,
    label: `Instagram`,
    url: Z.links.instagram
}, {
    icon: Mf,
    label: `YouTube — Gaming`,
    url: Z.links.youtube
}, {
    icon: Mf,
    label: `YouTube — Vlogs`,
    url: Z.links.youtubeVlogs
}];
function Vf() {
    let e = Z.links.email ? `mailto:${Z.links.email}` : ``;
    return (0, R.jsxs)(`section`, {
        id: `contact`,
        className: `relative overflow-hidden py-32 md:py-40`,
        children: [(0, R.jsx)(zf, {
            className: `opacity-40`
        }), (0, R.jsxs)(`div`, {
            className: `relative mx-auto w-full max-w-4xl px-6 text-center md:px-10`,
            children: [(0, R.jsxs)(Q, {
                children: [(0, R.jsx)(`p`, {
                    className: `font-mono text-[11px] uppercase tracking-[0.3em] text-accent`,
                    children: `Contact`
                }), (0, R.jsx)(`h2`, {
                    className: `mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-zinc-100 md:text-6xl`,
                    children: `HAVE AN IDEA?`
                }), (0, R.jsxs)(`p`, {
                    className: `mt-2 font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl`,
                    children: [`LET'S `, (0, R.jsx)(`span`, {
                        className: `text-accent`,
                        children: `BUILD IT.`
                    })]
                })]
            }), (0, R.jsx)(Q, {
                delay: .1,
                children: (0, R.jsx)(`p`, {
                    className: `mx-auto mt-8 max-w-xl text-base leading-relaxed text-zinc-400`,
                    children: `Whether it's a project, collaboration, hackathon, or just a conversation about technology — I'd love to hear from you.`
                })
            }), (0, R.jsxs)(Q, {
                delay: .18,
                className: `mt-10 flex flex-wrap items-center justify-center gap-4`,
                children: [e && (0, R.jsxs)(`a`, {
                    href: e,
                    className: `btn-accent`,
                    children: [(0, R.jsx)(Gd, {
                        className: `h-4 w-4`
                    }), ` Email Me`]
                }), Z.links.linkedin && (0, R.jsxs)(`a`, {
                    href: Z.links.linkedin,
                    target: `_blank`,
                    rel: `noreferrer`,
                    className: `btn-ghost`,
                    children: [(0, R.jsx)(Af, {
                        className: `h-4 w-4`
                    }), ` LinkedIn`]
                })]
            }), (0, R.jsx)(Q, {
                delay: .25,
                children: (0, R.jsx)(`div`, {
                    className: `mt-12 flex items-center justify-center gap-3`,
                    children: Bf.filter(e => e.url).map(e => (0, R.jsx)(`a`, {
                        href: e.url,
                        target: `_blank`,
                        rel: `noreferrer`,
                        "aria-label": e.label,
                        className: `rounded-xl border border-edge bg-panel p-3 text-zinc-400 transition-colors hover:border-accent/50 hover:text-accent`,
                        children: (0, R.jsx)(e.icon, {
                            className: `h-4 w-4`
                        })
                    }, e.label))
                })
            })]
        })]
    })
}
var Hf = [{
    icon: Hd,
    title: `Game Development`,
    note: `interactive experiences & worlds`
}, {
    icon: Zd,
    title: `Cybersecurity`,
    note: `security-focused ideas`
}, {
    icon: Fd,
    title: `AI / Fitness Projects`,
    note: `AI-assisted product ideas`
}, {
    icon: zd,
    title: `Web Projects`,
    note: `more apps & tools`
}, {
    icon: X,
    title: `DSA`,
    note: `daily problem solving`
}];
function Uf() {
    return (0, R.jsx)(`section`, {
        id: `now`,
        className: `relative py-28 md:py-32`,
        children: (0, R.jsxs)(`div`, {
            className: `mx-auto w-full max-w-6xl px-6 md:px-10`,
            children: [(0, R.jsx)(sf, {
                eyebrow: `Currently building`,
                title: `A living roadmap.`,
                description: `A live snapshot of what I'm exploring and building right now.`,
                chapter: `08`
            }), (0, R.jsxs)(`div`, {
                className: `mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3`,
                children: [Hf.map((e, t) => (0, R.jsx)(Q, {
                    delay: t * .06,
                    children: (0, R.jsxs)(`div`, {
                        className: `card-lift group relative flex h-full items-start gap-4 rounded-2xl border border-edge bg-panel p-6 ${t % 2 == 0 ? `-rotate-[0.4deg]` : `rotate-[0.5deg]`}`,
                        children: [(0, R.jsx)(`span`, {
                            className: `tape ${t % 3 == 0 ? `tape-amber` : t % 3 == 1 ? `tape-blue` : `tape`}`,
                            "aria-hidden": `true`
                        }), (0, R.jsxs)(`span`, {
                            className: `relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-edge bg-ink text-accent`,
                            children: [(0, R.jsx)(e.icon, {
                                className: `h-5 w-5`,
                                "aria-hidden": `true`
                            }), (0, R.jsx)(`span`, {
                                className: `absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-amber-400`,
                                "aria-hidden": `true`,
                                children: (0, R.jsx)(`span`, {
                                    className: `absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-60`
                                })
                            })]
                        }), (0, R.jsxs)(`span`, {
                            className: `min-w-0`,
                            children: [(0, R.jsxs)(`span`, {
                                className: `flex items-baseline gap-2`,
                                children: [(0, R.jsxs)(`span`, {
                                    className: `font-mono text-[10px] font-semibold text-accent`,
                                    children: [`0`, t + 1]
                                }), (0, R.jsx)(`span`, {
                                    className: `block truncate font-display text-base font-bold text-zinc-100`,
                                    children: e.title
                                })]
                            }), (0, R.jsx)(`span`, {
                                className: `mt-1 block text-xs text-zinc-500`,
                                children: e.note
                            })]
                        })]
                    })
                }, e.title)), (0, R.jsx)(Q, {
                    delay: .3,
                    children: (0, R.jsxs)(`div`, {
                        className: `flex h-full items-center justify-center gap-2.5 rounded-2xl border border-dashed border-edge bg-transparent p-6 text-sm text-zinc-600`,
                        children: [(0, R.jsx)(Jd, {
                            className: `h-4 w-4`,
                            "aria-hidden": `true`
                        }), ` More experiments ahead.`]
                    })
                })]
            })]
        })
    })
}
function Wf() {
    let e = (0, _.useRef)(null),
        t = (0, _.useRef)(null),
        [n, r] = (0, _.useState)(!1);
    return (0, _.useEffect)(() => {
        let e = window.matchMedia(`(pointer: fine)`).matches,
            t = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
        r(e && !t)
    }, []), (0, _.useEffect)(() => {
        if (!n)
            return;
        document.documentElement.classList.add(`cursor-on`);
        let r = e.current,
            i = t.current;
        if (!r || !i)
            return;
        let a = -100,
            o = -100,
            s = -100,
            c = -100,
            l = null,
            u = !1,
            d = () => {
                s += (a - s) * .16,
                c += (o - c) * .16,
                i.style.transform = `translate3d(${s}px, ${c}px, 0) translate(-50%, -50%) scale(${u ? 1.6 : 1})`,
                l = null
            },
            f = e => {
                a = e.clientX,
                o = e.clientY,
                r.style.transform = `translate3d(${a}px, ${o}px, 0) translate(-50%, -50%)`,
                l ||= requestAnimationFrame(d)
            },
            p = e => {
                let t = !!e.target.closest(`iframe`),
                    n = !t && !!e.target.closest(`a, button, [role='button'], input, select, textarea, label, [data-cursor]`);
                u = n,
                r.style.opacity = +!t,
                i.style.opacity = +!t,
                i.classList.toggle(`cursor-hover`, n)
            },
            m = () => {
                r.style.opacity = 0,
                i.style.opacity = 0
            },
            h = () => {
                r.style.opacity = 1,
                i.style.opacity = 1
            };
        return window.addEventListener(`mousemove`, f, {
            passive: !0
        }), document.addEventListener(`mouseover`, p, !0), document.documentElement.addEventListener(`mouseleave`, m), document.documentElement.addEventListener(`mouseenter`, h), () => {
            document.documentElement.classList.remove(`cursor-on`),
            window.removeEventListener(`mousemove`, f),
            document.removeEventListener(`mouseover`, p, !0),
            document.documentElement.removeEventListener(`mouseleave`, m),
            document.documentElement.removeEventListener(`mouseenter`, h),
            l && cancelAnimationFrame(l)
        }
    }, [n]), n ? (0, R.jsxs)(R.Fragment, {
        children: [(0, R.jsx)(`div`, {
            ref: e,
            className: `cursor-dot`,
            "aria-hidden": `true`
        }), (0, R.jsx)(`div`, {
            ref: t,
            className: `cursor-ring`,
            "aria-hidden": `true`
        })]
    }) : null
}
var Gf = [{
        id: `dsaglazer`,
        name: `DSAglazzer`,
        shipped: !0,
        status: `live`,
        category: `Web`,
        oneLiner: `Spaced repetition DSA revision tracker — remember what you solve, revise on time.`,
        accent: `#14b8a6`,
        glyph: `DG`,
        image: `assets/projects/dsaglazer.png`,
        milestone: `Latest shipped · PWA + Extension`,
        overview: `DSAglazzer is an offline-first DSA revision tracker built with React 19 + Vite + Tailwind CSS v4. Every solved problem is scheduled through spaced repetition (Day 3 → Day 7 → Day 30 — fully customizable) so you revisit patterns at the exact moment you'd otherwise forget them. It includes a 365-day GitHub-style heatmap, streaks, smart filters (topic, difficulty, platform, 23 algorithm tags), calendar with dots and agenda drawer, and analytics (Recharts). It's PWA-installable, supports dark/light themes, browser notifications, import/export, and a Chrome Extension (MV3) that auto-detects Accepted solves on LeetCode, GFG, Codeforces, CodeChef, and AtCoder.`,
        problem: `Solving many DSA problems doesn't help if you forget the patterns — most revision trackers are manual spreadsheets or lack timing logic, so hard-earned patterns fade before interviews.`,
        solution: `Automate the revision schedule: log a solve once, let the spaced repetition engine surface it on Day 3, 7, and 30 (or your own intervals), and give one-tap Complete / Skip / Overdue flows with a Today's Revision queue that keeps you honest.`,
        features: [`Spaced repetition engine (3/7/30 defaults, editable 1–365 days)`, `Offline-first — 100% LocalStorage, PWA installable`, `365-day GitHub-style heatmap (teal scale) + smart daily streak`, `Full CRUD & smart filters (topic/difficulty/platform/23 tags/favourites)`, `Calendar month view with overdue/due/upcoming dots + agenda drawer`, `Analytics — Recharts difficulty donut + top topics + completion rate`, `Portfolio-grade UI — Inter + Space Grotesk + Instrument Serif, grain + dot-grid + Lenis + Reveal`, `Dark/Light token themes, notifications, import/export JSON`, `Chrome Extension (MV3) auto-detects Accepted solves on 5 platforms`],
        technologies: [`React 19`, `TypeScript`, `Vite 8`, `Tailwind CSS 4`, `Framer Motion 13`, `Lenis`, `Recharts`, `React Router 7`, `PWA (vite-plugin-pwa)`, `Vitest`, `Chrome Extension (MV3)`],
        role: `Designed, built, and shipped solo — from spaced repetition logic and data model to UI, PWA, extension, tests (49), and CI/CD to GitHub Pages.`,
        challenges: [`Tuning spaced repetition intervals so they feel helpful rather than noisy`, `Building a Chrome Extension that reliably detects Accepted on 5 different sites`, `Keeping an offline-first LocalStorage + PWA app fast and consistent across views`],
        learned: [`How spaced repetition and active recall actually improve retention for DSA`, `Shipping a full PWA with installability, theming, and offline caching`, `End-to-end CI/CD with GitHub Actions to Pages and keeping a polished portfolio-grade UI consistent`],
        links: {
            demo: `https://interestingaary.github.io/DSAglazzer/`,
            github: `https://github.com/InterestingAary/DSAglazzer`
        }
    }, {
        id: `rural-guards`,
        name: `Rural Guards`,
        shipped: !0,
        status: `winner`,
        category: `Software`,
        oneLiner: `Hackathon-winning rural safety & assistance platform for farmers and fishermen.`,
        accent: `#5b9dff`,
        glyph: `RG`,
        image: `assets/projects/rural-guards.png`,
        achievement: `1st Place — Open Innovation · Srujana 2026`,
        overview: `Rural Guards is a rural support and emergency safety platform for farmers and fishermen — built with my team for the Srujana 2026 hackathon. It combines AI crop disease detection, weather guidance, government scheme awareness, dealer discovery, and dam-alert communication with role-based controls, an interactive map, and voice assistance.`,
        problem: `Farmers and fishermen can face fragmented access to information, weather guidance, emergency alerts, and support resources — and critical warnings may not reach the right people in time.`,
        solution: `Build one platform combining useful rural assistance and emergency communication — bringing crop help, weather, schemes, dealers, and dam alerts together in a single, accessible system.`,
        features: [`AI crop disease detection`, `Weather-based agricultural guidance`, `Government scheme awareness`, `Dealer discovery with interactive maps`, `Dam alert communication`, `Role-based controls`, `Emergency communication`, `Voice assistance`],
        technologies: [`HTML`, `CSS`, `JavaScript`, `Node.js`, `Express.js`, `Python`, `APIs`, `Leaflet`, `Twilio`, `ElevenLabs`],
        role: `Worked with my team across the stack — frontend, backend, API integrations, and the map and alert features.`,
        challenges: [`Building a working product with a team under hackathon time pressure`, `Coordinating multiple APIs (maps, SMS, voice) into one smooth flow`, `Keeping the platform simple enough for non-technical rural users`],
        learned: [`How to ship a working product with a team under a tight deadline`, `Hands-on experience with real APIs, maps, and alert systems`, `That designing for real users changes how you choose features`],
        links: {
            demo: ``,
            github: `https://github.com/InterestingAary/Rural-Guards`
        }
    }, {
        id: `birthday-wishes`,
        name: `Birthday Wishes`,
        shipped: !0,
        status: `live`,
        category: `Web`,
        oneLiner: `A personalized, shareable birthday web experience built as my first publicly deployed website.`,
        accent: `#7aa7f7`,
        glyph: `BW`,
        image: `assets/projects/birthday-wishes.png`,
        milestone: `First public deployment`,
        overview: `A small personalized web experience where a sender customizes a birthday website for someone, shares the link, and the receiver gets a personal experience. Built to explore interactive web design and deployment — my first public website.`,
        problem: `I wanted to learn the full journey of shipping a web project — from designing an interactive experience to deploying it publicly.`,
        solution: `Built a customizable birthday experience with playful, interactive styling, then deployed it so anyone with the link can open it.`,
        features: [`Customizable birthday experience`, `Interactive, playful design`, `Responsive on phones`, `Publicly deployed & shareable`],
        technologies: [`HTML`, `CSS`, `JavaScript`],
        role: `Designed, built, and deployed it solo — front to back.`,
        challenges: [`First deployment — figuring out hosting and domains`, `Making the design feel intentional rather than template-like`],
        learned: [`The complete build → deploy loop for a web project`, `That small, well-made projects are worth shipping`],
        links: {
            demo: `https://interestingaary.github.io/birthday-cake/`,
            github: `https://github.com/InterestingAary/birthday-cake`
        }
    }, {
        id: `muzilo`,
        name: `Muzilo`,
        shipped: !1,
        status: `building`,
        category: `Software`,
        oneLiner: `Project currently being developed.`,
        accent: `#5b9dff`,
        glyph: `MZ`,
        overview: ``,
        problem: ``,
        solution: ``,
        features: [],
        technologies: [],
        role: ``,
        challenges: [],
        learned: [],
        links: {
            demo: ``,
            github: ``
        }
    }, {
        id: `omnitriage`,
        name: `OmniTriage`,
        shipped: !1,
        status: `building`,
        category: `Software`,
        oneLiner: `Project currently being developed.`,
        accent: `#6f93e8`,
        glyph: `OT`,
        overview: ``,
        problem: ``,
        solution: ``,
        features: [],
        technologies: [],
        role: ``,
        challenges: [],
        learned: [],
        links: {
            demo: ``,
            github: ``
        }
    }, {
        id: `gym-training`,
        name: `Gym Training`,
        shipped: !1,
        status: `building`,
        category: `Software`,
        oneLiner: `Project currently being developed.`,
        accent: `#5b9dff`,
        glyph: `GT`,
        overview: ``,
        problem: ``,
        solution: ``,
        features: [],
        technologies: [],
        role: ``,
        challenges: [],
        learned: [],
        links: {
            demo: ``,
            github: ``
        }
    }],
    Kf = `EVERY PROJECT IS A LESSON.`,
    qf = `EVERY LESSON GETS SHIPPED.`;
function Jf() {
    let e = bd(),
        t = (0, _.useRef)(null),
        {scrollYProgress: n} = fd({
            target: t,
            offset: [`start end`, `end start`]
        }),
        r = q(n, [0, 1], [`-6%`, `6%`]),
        i = q(n, [0, 1], [`8%`, `-8%`]),
        a = typeof window < `u` && window.innerWidth >= 768,
        o = q(r, e => a ? e : 0),
        s = q(i, e => a ? e : 0),
        c = q(n, [.35, .65], [0, 1]),
        l = q(n, [.35, .65], [40, 0]),
        u = q(c, e => a ? e : 1),
        d = q(l, e => a ? e : 0),
        f = [{
            num: String(df.length).padStart(2, `0`),
            label: `milestones`
        }, {
            num: String(Gf.length).padStart(2, `0`),
            label: `projects shipped`
        }, {
            num: `01`,
            label: `hackathon win`,
            extra: df.filter(e => e.featured).length > 0
        }];
    return (0, R.jsx)(`section`, {
        ref: t,
        id: `doctrine`,
        className: `relative ${e ? `` : `md:h-[160vh]`}`,
        children: (0, R.jsx)(`div`, {
            className: `relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden py-24 md:min-h-screen`,
            children: e ? (0, R.jsxs)(`div`, {
                className: `flex flex-col items-center gap-8 px-6`,
                children: [(0, R.jsx)(`p`, {
                    className: `font-mono text-[11px] uppercase tracking-[0.35em] text-accent`,
                    children: `// doctrine`
                }), (0, R.jsx)(`h2`, {
                    className: `text-center font-serif text-[clamp(2rem,7vw,5.5rem)] leading-[0.95] tracking-tight text-zinc-100`,
                    children: Kf
                }), (0, R.jsx)(`h2`, {
                    className: `text-center font-serif text-[clamp(2rem,7vw,5.5rem)] leading-[0.95] tracking-tight text-zinc-600`,
                    children: qf
                }), (0, R.jsx)(`div`, {
                    className: `mt-10 flex gap-14`,
                    children: f.map(e => (0, R.jsxs)(`div`, {
                        className: `text-center`,
                        children: [(0, R.jsx)(`p`, {
                            className: `font-serif text-5xl text-zinc-100`,
                            children: e.num
                        }), (0, R.jsx)(`p`, {
                            className: `mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500`,
                            children: e.label
                        })]
                    }, e.label))
                })]
            }) : (0, R.jsxs)(`div`, {
                className: `w-full`,
                children: [(0, R.jsx)(`p`, {
                    className: `mb-6 px-6 font-mono text-[11px] uppercase tracking-[0.35em] text-accent md:px-10`,
                    children: `// doctrine`
                }), (0, R.jsx)(`div`, {
                    className: `overflow-hidden py-2`,
                    children: (0, R.jsx)(G.h2, {
                        style: {
                            x: o
                        },
                        className: `whitespace-nowrap text-center font-serif text-[clamp(2.2rem,8vw,7rem)] leading-[0.95] tracking-tight text-zinc-100`,
                        "aria-label": Kf,
                        children: Kf
                    })
                }), (0, R.jsx)(`div`, {
                    className: `overflow-hidden py-2`,
                    children: (0, R.jsx)(G.h2, {
                        style: {
                            x: s
                        },
                        className: `whitespace-nowrap text-center font-serif text-[clamp(2.2rem,8vw,7rem)] leading-[0.95] tracking-tight text-zinc-600`,
                        "aria-label": qf,
                        children: qf
                    })
                }), (0, R.jsx)(G.div, {
                    style: {
                        opacity: u,
                        y: d
                    },
                    className: `doctrine-stats mt-14 flex items-start justify-center gap-10 px-6 md:mt-20 md:gap-24`,
                    children: f.map(e => (0, R.jsxs)(`div`, {
                        className: `flex items-baseline gap-3`,
                        children: [(0, R.jsx)(`span`, {
                            className: `font-serif text-5xl text-zinc-100 md:text-7xl`,
                            children: e.num
                        }), (0, R.jsxs)(`span`, {
                            className: `max-w-[7rem] font-mono text-[10px] uppercase leading-relaxed tracking-[0.2em] text-zinc-500`,
                            children: [e.label, e.extra ? (0, R.jsx)(`span`, {
                                className: `mt-1 block text-accent`,
                                children: `featured`
                            }) : null]
                        })]
                    }, e.label))
                })]
            })
        })
    })
}
var Yf = `STITCHED BY HAND`,
    Xf = `Every project here was stitched from experiments, late nights, and builds that didn't make the cut — yet it shipped.`,
    Zf = Yf.split(` `),
    Qf = Xf.split(` `),
    $f = [...Zf, ...Qf],
    ep = [`GSA 2026`, `Srujana — 1st Place`, `B.Tech CCE`],
    tp = [{
        x: 28,
        y: 40
    }, {
        x: 15,
        y: 95
    }, {
        x: 35,
        y: 150
    }, {
        x: 24,
        y: 200
    }, {
        x: 33,
        y: 250
    }, {
        x: 18,
        y: 300
    }, {
        x: 30,
        y: 345
    }, {
        x: 30,
        y: 390
    }];
function np() {
    let e = bd(),
        t = (0, _.useRef)(null),
        n = (0, _.useRef)([]),
        r = (0, _.useRef)(null),
        i = (0, _.useRef)(null),
        a = (0, _.useRef)(null),
        o = (0, _.useRef)([]),
        s = (0, _.useRef)([]),
        {scrollYProgress: c} = fd({
            target: t,
            offset: [`start 0%`, `end 100%`]
        });
    Cu(c, `change`, t => {
        if (e)
            return;
        let c = Math.min(Math.max(t, 0), 1),
            l = .1,
            u = .62;
        $f.forEach((e, t) => {
            let r = n.current[t];
            if (!r)
                return;
            let i = l + t / $f.length * u,
                a = l + (t + 1) / $f.length * u,
                o = Math.min(Math.max((c - i) / (a - i), 0), 1);
            r.style.backgroundPosition = `${100 - o * 100}% 0`,
            r.style.opacity = `${.35 + o * .65}`
        }),
        r.current && r.current.__path && (r.current.__path.style.strokeDashoffset = `${r.current.__len * (1 - c)}`),
        a.current && a.current.__line && (a.current.__line.style.strokeDashoffset = `${a.current.__len * (1 - c)}`),
        i.current && (i.current.style.top = `${c * 372}px`),
        o.current.forEach((e, t) => {
            if (e) {
                let n = .06 + (t + 1) * .09,
                    r = Math.min(Math.max((c - n) / .05, 0), 1);
                e.style.opacity = `${r}`
            }
        }),
        s.current.forEach(e => {
            if (e) {
                let t = Math.min(Math.max((c - .78) / .09, 0), 1);
                e.style.opacity = `${t}`,
                e.style.transform = `translateY(${(1 - t) * 14}px)`
            }
        })
    });
    let l = {
        color: `transparent`,
        backgroundImage: `linear-gradient(90deg, var(--color-accent) 0%, var(--color-fg) 100%)`,
        backgroundSize: `200% 100%`,
        backgroundPosition: `100% 0`,
        backgroundRepeat: `no-repeat`,
        WebkitBackgroundClip: `text`,
        backgroundClip: `text`
    };
    return (0, R.jsx)(`section`, {
        ref: t,
        id: `embroidery-section`,
        className: `relative`,
        style: e ? void 0 : {
            height: `190vh`
        },
        children: (0, R.jsx)(`div`, {
            className: e ? `relative flex min-h-[70vh] items-center py-24` : `sticky top-0 flex h-svh items-center px-6`,
            children: (0, R.jsxs)(`div`, {
                className: `mx-auto grid w-full max-w-5xl items-center gap-14 md:grid-cols-[200px_1fr]`,
                children: [(0, R.jsxs)(`div`, {
                    className: `relative hidden h-[420px] md:block`,
                    "aria-hidden": `true`,
                    children: [(0, R.jsx)(`svg`, {
                        className: `absolute inset-0`,
                        width: `60`,
                        height: `420`,
                        viewBox: `0 0 60 420`,
                        fill: `none`,
                        children: (0, R.jsx)(`path`, {
                            d: `M30 0 C8 90 52 180 30 270 C8 360 30 410 30 420`,
                            stroke: `currentColor`,
                            strokeOpacity: `0.14`,
                            strokeWidth: `1.6`,
                            strokeDasharray: `2 8`,
                            strokeLinecap: `round`
                        })
                    }), (0, R.jsx)(`svg`, {
                        ref: t => {
                            if (r.current = t, t && !e) {
                                let e = t.querySelector(`path`);
                                t.__path = e,
                                t.__len = e ? e.getTotalLength() : 0,
                                e && (e.style.strokeDashoffset = `${t.__len}`)
                            }
                        },
                        className: `embroidery-section-drawn absolute inset-0`,
                        width: `60`,
                        height: `420`,
                        viewBox: `0 0 60 420`,
                        fill: `none`,
                        style: {
                            color: `var(--color-accent)`
                        },
                        children: (0, R.jsx)(`path`, {
                            d: `M30 0 C8 90 52 180 30 270 C8 360 30 410 30 420`,
                            stroke: `currentColor`,
                            strokeWidth: `2`,
                            strokeDasharray: `3 9`,
                            strokeLinecap: `round`
                        })
                    }), tp.map((e, t) => (0, R.jsx)(`span`, {
                        ref: e => {
                            o.current[t] = e
                        },
                        className: `absolute h-1.5 w-1.5 rounded-full opacity-0`,
                        style: {
                            left: e.x,
                            top: e.y,
                            backgroundColor: `var(--color-accent)`,
                            boxShadow: `0 0 6px color-mix(in srgb, var(--color-accent) 60%, transparent)`
                        }
                    }, t)), (0, R.jsxs)(`svg`, {
                        ref: i,
                        className: `embroidery-needle absolute left-1/2 top-0 -translate-x-1/2`,
                        width: `14`,
                        height: `26`,
                        viewBox: `0 0 14 26`,
                        fill: `none`,
                        stroke: `currentColor`,
                        strokeWidth: `1.8`,
                        strokeLinecap: `round`,
                        style: {
                            color: `var(--color-accent)`,
                            top: e ? `372px` : void 0
                        },
                        children: [(0, R.jsx)(`circle`, {
                            cx: `7`,
                            cy: `4`,
                            r: `2.6`
                        }), (0, R.jsx)(`path`, {
                            d: `M7 7.5v14`
                        })]
                    })]
                }), (0, R.jsxs)(`div`, {
                    children: [(0, R.jsxs)(`p`, {
                        className: `flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-accent`,
                        children: [(0, R.jsx)(`span`, {
                            className: `inline-block h-2 w-2 bg-accent`,
                            "aria-hidden": `true`
                        }), `// stitched`]
                    }), (0, R.jsx)(`h2`, {
                        className: `mt-8 font-display text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[1.02] tracking-tight`,
                        children: Zf.map((t, r) => (0, R.jsxs)(`span`, {
                            ref: e => {
                                n.current[r] = e
                            },
                            className: `inline-block whitespace-pre`,
                            style: e ? void 0 : l,
                            children: [t, ` `]
                        }, r))
                    }), (0, R.jsx)(`p`, {
                        className: `mt-6 max-w-xl text-lg leading-relaxed text-zinc-300 md:text-xl`,
                        children: Qf.map((t, r) => (0, R.jsxs)(`span`, {
                            ref: e => {
                                n.current[Zf.length + r] = e
                            },
                            className: `inline-block whitespace-pre`,
                            style: e ? void 0 : l,
                            children: [t, ` `]
                        }, r))
                    }), (0, R.jsx)(`svg`, {
                        ref: t => {
                            if (a.current = t, t && !e) {
                                let e = t.querySelector(`line`);
                                t.__line = e,
                                t.__len = e ? e.getTotalLength() : 0,
                                e && (e.style.strokeDashoffset = `${t.__len}`)
                            }
                        },
                        className: `mt-4 w-full max-w-xl`,
                        height: `10`,
                        viewBox: `0 0 600 10`,
                        preserveAspectRatio: `none`,
                        fill: `none`,
                        "aria-hidden": `true`,
                        children: (0, R.jsx)(`line`, {
                            x1: `0`,
                            y1: `5`,
                            x2: `600`,
                            y2: `5`,
                            stroke: `var(--color-accent)`,
                            strokeWidth: `2`,
                            strokeDasharray: `5 7`,
                            strokeLinecap: `round`
                        })
                    }), (0, R.jsxs)(`div`, {
                        className: `mt-8 flex flex-wrap items-center gap-3`,
                        children: [ep.map((t, n) => (0, R.jsx)(`span`, {
                            ref: e => {
                                s.current[n] = e
                            },
                            className: `rounded-full border border-edge bg-panel px-3.5 py-1.5 text-xs text-zinc-300`,
                            style: e ? void 0 : {
                                opacity: 0
                            },
                            children: t
                        }, t)), Z.links.linkedin && (0, R.jsxs)(`a`, {
                            href: Z.links.linkedin,
                            target: `_blank`,
                            rel: `noreferrer`,
                            ref: e => {
                                s.current[ep.length] = e
                            },
                            className: `btn-accent`,
                            style: e ? void 0 : {
                                opacity: 0
                            },
                            children: [(0, R.jsx)(Af, {
                                className: `h-4 w-4`
                            }), ` Connect on LinkedIn`]
                        })]
                    })]
                })]
            })
        })
    })
}
var rp = [{
        id: `profile`,
        icon: `person`
    }, {
        id: `work`,
        icon: `rocket`
    }, {
        id: `achievements`,
        icon: `trophy`
    }, {
        id: `journey`,
        icon: `flag`
    }, {
        id: `skills`,
        icon: `gear`
    }, {
        id: `now`,
        icon: `bolt`
    }, {
        id: `code`,
        icon: `terminal`
    }, {
        id: `beyond`,
        icon: `note`
    }, {
        id: `contact`,
        icon: `envelope`
    }],
    ip = {
        person: (0, R.jsx)(`path`, {
            d: `M13 6a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0 3c-5 0-9 3.4-9 8v3h18v-3c0-4.6-4-8-9-8Z`
        }),
        rocket: (0, R.jsx)(`path`, {
            d: `M13 24c4-5 6-10 6-14 0-4-3-7-6-7s-6 3-6 7c0 4 2 9 6 14Zm-5-12a5 5 0 1 1 10 0M13 20l2 4M11 27l3 2`
        }),
        trophy: (0, R.jsx)(`path`, {
            d: `M8 3h10M8 4H5v3c0 4 2.5 6.5 8 6.5S21 11 21 7V4h-3M13 13.5V18M9 21h8M9 18h8M10 21c0-1.5-1-2-2-3M14 21c0-1.5 1-2 2-3`
        }),
        flag: (0, R.jsx)(`path`, {
            d: `M13 3v20M13 4c3 0 4.5 1.5 7 1.5 1 0 1.7-.3 2.5-.8v9c-.8.5-1.5.8-2.5.8-2.5 0-4-1.5-7-1.5M6 6v17`
        }),
        gear: (0, R.jsx)(`path`, {
            d: `M13 9a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0-3v2.5M13 18v2.5M5.5 13H3m5.6-4.4-1.8-1.8M19.2 19.2l-1.8-1.8M20.5 13H23m-5.6 4.4 1.8 1.8M5.6 17.4l1.8-1.8`
        }),
        bolt: (0, R.jsx)(`path`, {
            d: `M14 3 6 14h5.5L11 23l8-11h-5.5L14 3Z`
        }),
        terminal: (0, R.jsx)(`path`, {
            d: `M4 6h18v14H4V6Zm3 3 4 4-4 4m7 0h5`
        }),
        note: (0, R.jsx)(`path`, {
            d: `M10 20a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm0 0V6l10-2v14a3 3 0 1 1-6 0 3 3 0 0 1 6 0`
        }),
        envelope: (0, R.jsx)(`path`, {
            d: `M4 6h18v14H4V6Zm0 1.5L13 14l9-6.5`
        })
    };
function ap() {
    let e = (0, _.useRef)(null),
        t = (0, _.useRef)(null),
        n = (0, _.useRef)([]),
        r = (0, _.useRef)([]),
        i = (0, _.useRef)(1);
    return (0, _.useEffect)(() => {
        let a = () => {
            i.current = document.documentElement.scrollHeight,
            r.current = rp.map(e => {
                let t = document.getElementById(e.id);
                return t ? t.offsetTop : 0
            })
        };
        if (a(), window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) {
            e.current && (e.current.style.height = `100%`),
            t.current && (t.current.style.top = `${i.current - 24}px`),
            n.current.forEach((e, t) => {
                e && (e.style.top = `${r.current[t] + 84}px`, e.style.strokeDashoffset = `0`)
            });
            return
        }
        let o = 0,
            s = () => {
                let a = i.current,
                    c = window.innerHeight,
                    l = Math.max(a - c, 1),
                    u = window.scrollY,
                    d = Math.min(Math.max(u / l, 0), 1);
                e.current && (e.current.style.height = `${(d * 100).toFixed(2)}%`),
                t.current && (t.current.style.top = `${(d * a).toFixed(0)}px`),
                n.current.forEach((e, t) => {
                    if (!e)
                        return;
                    let n = Math.min(Math.max((u + c * .65 - r.current[t]) / 130, 0), 1);
                    e.style.top = `${r.current[t] + 84}px`,
                    e.style.strokeDashoffset = `${(60 * (1 - n)).toFixed(1)}`
                }),
                o = requestAnimationFrame(s)
            };
        o = requestAnimationFrame(s);
        let c = () => a();
        return window.addEventListener(`resize`, c), () => {
            cancelAnimationFrame(o),
            window.removeEventListener(`resize`, c)
        }
    }, []), (0, R.jsxs)(`div`, {
        "aria-hidden": `true`,
        className: `pointer-events-none absolute inset-y-0 left-6 z-[5] hidden w-9 md:block`,
        children: [(0, R.jsx)(`div`, {
            className: `embroidery-base absolute inset-y-0 left-1/2 w-px -translate-x-1/2`
        }), (0, R.jsx)(`div`, {
            ref: e,
            className: `embroidery-form absolute left-1/2 top-0 h-0 w-[2px] -translate-x-1/2`
        }), (0, R.jsxs)(`svg`, {
            ref: t,
            className: `embroidery-needle absolute left-1/2 -translate-x-1/2`,
            width: `14`,
            height: `26`,
            viewBox: `0 0 14 26`,
            fill: `none`,
            stroke: `currentColor`,
            strokeWidth: `1.8`,
            strokeLinecap: `round`,
            style: {
                color: `var(--color-accent)`
            },
            children: [(0, R.jsx)(`circle`, {
                cx: `7`,
                cy: `4`,
                r: `2.6`
            }), (0, R.jsx)(`path`, {
                d: `M7 7.5v14`
            })]
        }), rp.map((e, t) => (0, R.jsx)(`svg`, {
            ref: e => {
                n.current[t] = e
            },
            "data-i": t,
            className: `embroidery-motif absolute left-1/2 -translate-x-1/2`,
            style: {
                top: 0
            },
            width: `26`,
            height: `26`,
            viewBox: `0 0 26 26`,
            fill: `none`,
            stroke: `currentColor`,
            strokeWidth: `1.6`,
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
            strokeDasharray: `60`,
            strokeDashoffset: `60`,
            children: ip[e.icon]
        }, e.id))]
    })
}
function op() {
    return (0, R.jsx)(`footer`, {
        className: `border-t border-edge`,
        children: (0, R.jsxs)(`div`, {
            className: `mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-center text-xs text-zinc-500 md:flex-row md:px-10 md:text-left`,
            children: [(0, R.jsx)(`p`, {
                className: `font-display font-semibold text-zinc-400`,
                children: Z.name
            }), (0, R.jsxs)(`p`, {
                children: [`Built with curiosity, caffeine & code.`, (0, R.jsx)(`span`, {
                    className: `blink text-accent`,
                    "aria-hidden": `true`,
                    children: `_`
                })]
            }), (0, R.jsxs)(`div`, {
                className: `flex items-center gap-4`,
                children: [(0, R.jsxs)(`span`, {
                    children: [`© 2026 `, Z.name]
                }), (0, R.jsx)(`a`, {
                    href: `#top`,
                    "aria-label": `Back to top`,
                    className: `rounded-lg border border-edge p-2 text-zinc-400 transition-colors hover:border-accent/50 hover:text-accent`,
                    children: (0, R.jsx)(Nd, {
                        className: `h-3.5 w-3.5`
                    })
                })]
            })]
        })
    })
}
var sp = {
    winner: {
        label: `Hackathon Winner`,
        cls: `border-accent/30 bg-accent/10 text-accent`,
        icon: `trophy`
    },
    live: {
        label: `Live`,
        cls: `border-emerald-400/25 bg-emerald-400/10 text-emerald-300`,
        icon: `dot`
    },
    building: {
        label: `In Development`,
        cls: `border-amber-400/25 bg-amber-400/10 text-amber-300`,
        icon: `pulse`
    },
    demo: {
        label: `Demo`,
        cls: `border-zinc-400/25 bg-zinc-400/10 text-zinc-300`,
        icon: `dot`
    }
};
function cp({status: e, className: t=``}) {
    let n = sp[e] ?? sp.demo;
    return (0, R.jsxs)(`span`, {
        className: `inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${n.cls} ${t}`,
        children: [n.icon === `trophy` && (0, R.jsx)(tf, {
            className: `h-3 w-3`,
            "aria-hidden": `true`
        }), n.icon === `dot` && (0, R.jsx)(`span`, {
            className: `h-1.5 w-1.5 rounded-full bg-current`,
            "aria-hidden": `true`
        }), n.icon === `pulse` && (0, R.jsxs)(`span`, {
            className: `relative flex h-1.5 w-1.5`,
            "aria-hidden": `true`,
            children: [(0, R.jsx)(`span`, {
                className: `absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60`
            }), (0, R.jsx)(`span`, {
                className: `relative inline-flex h-1.5 w-1.5 rounded-full bg-current`
            })]
        }), n.label]
    })
}
var lp = `inline-flex items-center gap-2 rounded-lg border border-edge bg-ink p-2.5 text-zinc-300 transition-colors hover:border-accent/50 hover:text-accent disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-edge disabled:hover:text-zinc-300`;
function up({project: e, projects: t, onClose: n, onNavigate: r}) {
    let i = bd(),
        a = (0, _.useRef)(null),
        o = e ? t.findIndex(t => t.id === e.id) : -1;
    (0, _.useEffect)(() => {
        if (!e)
            return;
        document.body.style.overflow = `hidden`,
        a.current?.focus();
        let i = e => {
            e.key === `Escape` && n(),
            e.key === `ArrowLeft` && o > 0 && r(o - 1),
            e.key === `ArrowRight` && o < t.length - 1 && r(o + 1)
        };
        return window.addEventListener(`keydown`, i), () => {
            document.body.style.overflow = ``,
            window.removeEventListener(`keydown`, i)
        }
    }, [e, n, r, o, t.length]);
    let s = i ? {
            opacity: 0
        } : {
            clipPath: `circle(0% at 50% 42%)`
        },
        c = i ? {
            opacity: 1
        } : {
            clipPath: `circle(150% at 50% 42%)`
        },
        l = i ? {
            opacity: 0
        } : {
            clipPath: `circle(0% at 88% 6%)`
        };
    return (0, R.jsx)(Lc, {
        children: e && (0, R.jsxs)(G.div, {
            role: `dialog`,
            "aria-modal": `true`,
            "aria-label": `${e.name} — fullscreen interface preview`,
            className: `fixed inset-0 z-[100] flex flex-col bg-ink`,
            initial: s,
            animate: c,
            exit: l,
            transition: {
                duration: .5,
                ease: [.65, 0, .35, 1]
            },
            children: [(0, R.jsxs)(`div`, {
                className: `relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-edge bg-panel/90 px-4 py-3 backdrop-blur md:px-6`,
                children: [(0, R.jsxs)(`div`, {
                    className: `flex items-center gap-3`,
                    children: [(0, R.jsx)(`span`, {
                        className: `flex h-9 w-9 items-center justify-center rounded-lg border border-edge bg-ink font-display text-sm font-bold text-accent`,
                        children: e.glyph
                    }), (0, R.jsxs)(`div`, {
                        children: [(0, R.jsx)(`p`, {
                            className: `font-display text-base font-bold text-zinc-100`,
                            children: e.name
                        }), (0, R.jsxs)(`div`, {
                            className: `flex items-center gap-2`,
                            children: [(0, R.jsx)(cp, {
                                status: e.status,
                                className: `px-2 py-0.5 text-[9px]`
                            }), (0, R.jsx)(`span`, {
                                className: `font-mono text-[10px] uppercase tracking-wider text-zinc-500`,
                                children: e.category
                            })]
                        })]
                    })]
                }), (0, R.jsxs)(`div`, {
                    className: `hidden items-center gap-2 md:flex`,
                    children: [(0, R.jsx)(`span`, {
                        className: `rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-accent`,
                        children: `interface preview`
                    }), (0, R.jsx)(`span`, {
                        className: `font-mono text-[10px] uppercase tracking-wider text-zinc-500`,
                        children: `screenshot — full product in the works`
                    })]
                }), (0, R.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [(0, R.jsx)(`button`, {
                        type: `button`,
                        onClick: () => r(o - 1),
                        disabled: o <= 0,
                        "aria-label": `Previous project`,
                        className: lp,
                        children: (0, R.jsx)(Ad, {
                            className: `h-4 w-4`
                        })
                    }), (0, R.jsx)(`button`, {
                        type: `button`,
                        onClick: () => r(o + 1),
                        disabled: o >= t.length - 1,
                        "aria-label": `Next project`,
                        className: lp,
                        children: (0, R.jsx)(jd, {
                            className: `h-4 w-4`
                        })
                    }), e.links.demo && (0, R.jsx)(`a`, {
                        href: e.links.demo,
                        target: `_blank`,
                        rel: `noreferrer`,
                        "aria-label": `${e.name} — open deployed site in a new tab`,
                        className: lp,
                        children: (0, R.jsx)(Bd, {
                            className: `h-4 w-4`
                        })
                    }), (0, R.jsxs)(`button`, {
                        ref: a,
                        type: `button`,
                        onClick: n,
                        "aria-label": `Exit fullscreen`,
                        className: `inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-4 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-ink`,
                        children: [(0, R.jsx)(of, {
                            className: `h-4 w-4`
                        }), (0, R.jsx)(`span`, {
                            className: `hidden sm:inline`,
                            children: `Exit Fullscreen`
                        })]
                    })]
                })]
            }), e.image ? (0, R.jsx)(`div`, {
                className: `relative min-h-0 flex-1 overflow-hidden bg-panel`,
                children: (0, R.jsx)(`img`, {
                    src: e.image,
                    alt: `${e.name} — interface screenshot`,
                    className: `h-full w-full object-cover object-top`
                })
            }) : (0, R.jsxs)(`div`, {
                className: `relative flex min-h-0 flex-1 items-center justify-center overflow-hidden`,
                children: [(0, R.jsx)(`div`, {
                    className: `grid-bg absolute inset-0`,
                    "aria-hidden": `true`
                }), (0, R.jsx)(`div`, {
                    className: `absolute inset-0`,
                    "aria-hidden": `true`,
                    style: {
                        background: `radial-gradient(80% 60% at 50% 40%, ${e.accent}1f 0%, transparent 60%)`
                    }
                }), (0, R.jsxs)(`div`, {
                    className: `relative flex max-w-md flex-col items-center gap-5 px-6 text-center`,
                    children: [(0, R.jsx)(`span`, {
                        className: `font-display text-7xl font-bold tracking-tight text-white/10`,
                        "aria-hidden": `true`,
                        children: e.glyph
                    }), (0, R.jsxs)(`span`, {
                        className: `inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-accent`,
                        children: [(0, R.jsx)(Kd, {
                            className: `h-3 w-3`,
                            "aria-hidden": `true`
                        }), ` HTML file only`]
                    }), (0, R.jsx)(`h4`, {
                        className: `font-display text-2xl font-bold text-zinc-100`,
                        children: `Interface under construction`
                    }), (0, R.jsx)(`p`, {
                        className: `text-sm leading-relaxed text-zinc-400`,
                        children: `This is only an HTML file for now — the full experience is being built and will appear here once it's ready.`
                    }), (0, R.jsx)(`button`, {
                        type: `button`,
                        onClick: n,
                        className: `btn-ghost`,
                        children: `Back to projects`
                    })]
                })]
            }), (0, R.jsxs)(`div`, {
                className: `relative z-10 flex items-center justify-between border-t border-edge bg-panel/90 px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider text-zinc-500 backdrop-blur md:px-6`,
                children: [(0, R.jsxs)(`span`, {
                    className: `flex items-center gap-2`,
                    children: [(0, R.jsx)(Ad, {
                        className: `h-3 w-3`,
                        "aria-hidden": `true`
                    }), (0, R.jsx)(jd, {
                        className: `h-3 w-3`,
                        "aria-hidden": `true`
                    }), `drag the deck or use arrow keys to switch`]
                }), (0, R.jsx)(`span`, {
                    className: `hidden text-accent sm:inline`,
                    children: `interface preview · fullscreen`
                })]
            })]
        })
    })
}
var dp = `M40 18a20 20 0 0 0-20 20c0 5.5 2.2 10.3 5.8 13.7V64a5 5 0 0 0 5 5h18.4a5 5 0 0 0 5-5v-12.3c3.6-3.4 5.8-8.2 5.8-13.7a20 20 0 0 0-20-20Zm-8.5 17a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm17 0a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11ZM40 51c4.3 0 8 1.6 10.4 4l-3.5 3.4c-1.9-1.8-4.3-2.8-6.9-2.8s-5 1-6.9 2.8l-3.5-3.4C32 52.6 35.7 51 40 51Z`,
    fp = [{
        top: `12%`,
        left: `7%`,
        size: 58,
        opacity: .2,
        duration: `10s`,
        delay: `0s`,
        rot: -12,
        speed: .1
    }, {
        top: `30%`,
        left: `84%`,
        size: 38,
        opacity: .15,
        duration: `8s`,
        delay: `-2s`,
        rot: 8,
        speed: .07
    }, {
        top: `47%`,
        left: `5%`,
        size: 30,
        opacity: .13,
        duration: `9s`,
        delay: `-5s`,
        rot: 14,
        speed: .12
    }, {
        top: `60%`,
        left: `78%`,
        size: 52,
        opacity: .18,
        duration: `11s`,
        delay: `-7s`,
        rot: -6,
        speed: .05
    }, {
        top: `76%`,
        left: `12%`,
        size: 44,
        opacity: .16,
        duration: `9.5s`,
        delay: `-3s`,
        rot: 10,
        speed: .09
    }, {
        top: `88%`,
        left: `66%`,
        size: 34,
        opacity: .14,
        duration: `8.5s`,
        delay: `-6s`,
        rot: -14,
        speed: .06
    }, {
        top: `40%`,
        left: `45%`,
        size: 26,
        opacity: .1,
        duration: `7.5s`,
        delay: `-4s`,
        rot: 4,
        speed: .11
    }, {
        top: `8%`,
        left: `46%`,
        size: 24,
        opacity: .12,
        duration: `8s`,
        delay: `-1s`,
        rot: -20,
        speed: .08
    }, {
        top: `22%`,
        left: `28%`,
        size: 32,
        opacity: .15,
        duration: `10.5s`,
        delay: `-8s`,
        rot: 18,
        speed: .06
    }, {
        top: `55%`,
        left: `93%`,
        size: 28,
        opacity: .11,
        duration: `7s`,
        delay: `-2.5s`,
        rot: -9,
        speed: .1
    }, {
        top: `70%`,
        left: `55%`,
        size: 40,
        opacity: .17,
        duration: `9s`,
        delay: `-5.5s`,
        rot: 22,
        speed: .07
    }, {
        top: `85%`,
        left: `30%`,
        size: 22,
        opacity: .1,
        duration: `6.5s`,
        delay: `-3.5s`,
        rot: -16,
        speed: .12
    }];
function pp() {
    let e = (0, _.useRef)([]);
    return (0, _.useEffect)(() => {
        if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)
            return;
        let t = 0,
            n = () => {
                let r = window.scrollY;
                e.current.forEach((e, t) => {
                    e && (e.style.transform = `translate3d(0, ${Math.min(r * fp[t].speed, 150)}px, 0)`)
                }),
                t = requestAnimationFrame(n)
            };
        return t = requestAnimationFrame(n), () => cancelAnimationFrame(t)
    }, []), (0, R.jsx)(R.Fragment, {
        children: fp.map((t, n) => (0, R.jsx)(`div`, {
            ref: t => {
                e.current[n] = t
            },
            style: {
                top: t.top,
                left: t.left
            },
            className: `pointer-events-none fixed z-0`,
            "aria-hidden": `true`,
            children: (0, R.jsx)(`div`, {
                className: `hell-skull`,
                style: {
                    width: t.size,
                    height: t.size,
                    opacity: t.opacity,
                    animation: `skull-float ${t.duration} ease-in-out infinite`,
                    animationDelay: t.delay,
                    transform: `rotate(${t.rot}deg)`
                },
                children: (0, R.jsxs)(`svg`, {
                    viewBox: `0 0 80 80`,
                    width: t.size,
                    height: t.size,
                    fill: `none`,
                    children: [(0, R.jsx)(`path`, {
                        d: dp,
                        fill: `#ff3030`,
                        opacity: `0.85`
                    }), (0, R.jsxs)(`g`, {
                        className: `hell-skull-eyes`,
                        children: [(0, R.jsx)(`circle`, {
                            cx: `31.5`,
                            cy: `35`,
                            r: `2`,
                            fill: `#ffb3b3`
                        }), (0, R.jsx)(`circle`, {
                            cx: `48.5`,
                            cy: `35`,
                            r: `2`,
                            fill: `#ffb3b3`
                        })]
                    })]
                })
            })
        }, n))
    })
}
var mp = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: .12,
                delayChildren: .15
            }
        }
    },
    hp = {
        hidden: {
            opacity: 0,
            y: 28
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .7,
                ease: [.21, .47, .32, .98]
            }
        }
    },
    gp = [`01 / WHOAMI`, `02 / BUILD`, `03 / CONTEXT`, `04 / ACTION`],
    _p = [{
        name: `Rural Guards`,
        chip: `🏆 WINNER`,
        chipCls: `bg-accent/10 text-accent border-accent/30`,
        tech: `node.js · leaflet · twilio`,
        pos: `left-1 top-28 w-60 -rotate-3 md:w-64`,
        depth: 28,
        z: 20
    }, {
        name: `Birthday Wishes`,
        chip: `● LIVE`,
        chipCls: `bg-emerald-400/10 text-emerald-300 border-emerald-400/25`,
        tech: `html · css · js`,
        pos: `right-0 top-2 w-52 rotate-2 md:w-56`,
        depth: 18,
        z: 10
    }, {
        name: `Muzilo`,
        chip: `IN DEV`,
        chipCls: `bg-amber-400/10 text-amber-300 border-amber-400/25`,
        tech: `building…`,
        pos: `bottom-10 left-12 w-48 rotate-1 md:w-52`,
        depth: 38,
        z: 30
    }];
function vp({card: e, mx: t, my: n}) {
    let r = q(t, t => t * e.depth),
        i = q(n, t => t * e.depth);
    return (0, R.jsx)(G.div, {
        className: `absolute ${e.pos}`,
        style: {
            zIndex: e.z,
            x: r,
            y: i
        },
        children: (0, R.jsx)(`div`, {
            className: `float-slow`,
            children: (0, R.jsxs)(`div`, {
                className: `rounded-2xl border border-edge bg-panel/90 p-4 shadow-2xl shadow-black/50 backdrop-blur`,
                children: [(0, R.jsxs)(`div`, {
                    className: `flex items-center justify-between gap-3`,
                    children: [(0, R.jsx)(`p`, {
                        className: `font-display text-sm font-semibold text-zinc-100`,
                        children: e.name
                    }), (0, R.jsx)(`span`, {
                        className: `rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${e.chipCls}`,
                        children: e.chip
                    })]
                }), (0, R.jsx)(`p`, {
                    className: `mt-2 font-mono text-[10px] text-zinc-500`,
                    children: e.tech
                }), (0, R.jsxs)(`div`, {
                    className: `mt-3 flex items-center gap-1.5`,
                    children: [(0, R.jsx)(`span`, {
                        className: `h-1 w-8 rounded-full bg-accent/40`
                    }), (0, R.jsx)(`span`, {
                        className: `h-1 w-3 rounded-full bg-zinc-700`
                    }), (0, R.jsx)(`span`, {
                        className: `h-1 w-5 rounded-full bg-zinc-700`
                    })]
                })]
            })
        })
    })
}
function yp() {
    let e = bd(),
        t = pd(0),
        n = pd(0),
        r = yd(t, {
            stiffness: 50,
            damping: 18
        }),
        i = yd(n, {
            stiffness: 50,
            damping: 18
        }),
        a = yd(0, {
            stiffness: 220,
            damping: 16
        }),
        o = yd(0, {
            stiffness: 220,
            damping: 16
        }),
        s = r => {
            if (e)
                return;
            let i = r.currentTarget.getBoundingClientRect();
            t.set((r.clientX - i.left) / i.width - .5),
            n.set((r.clientY - i.top) / i.height - .5)
        },
        c = t => {
            if (e)
                return;
            let n = t.currentTarget.getBoundingClientRect();
            a.set((t.clientX - n.left - n.width / 2) * .18),
            o.set((t.clientY - n.top - n.height / 2) * .18)
        },
        l = () => {
            a.set(0),
            o.set(0)
        },
        u = (0, _.useRef)(null),
        {scrollYProgress: d} = fd({
            target: u,
            offset: [`start 0%`, `end 100%`]
        }),
        f = q(d, [.12, .24], [1, 0]),
        p = q(d, [.12, .24], [0, -14]),
        m = q(d, [.26, .38, .88, 1], [0, 1, 1, 0]),
        h = q(d, [.26, .38], [20, 0]),
        g = q(d, [.5, .64, .88, 1], [0, 1, 1, 0]),
        v = q(d, [.5, .64], [32, 0]),
        y = q(d, [.68, .82, .88, 1], [0, 1, 1, 0]),
        b = q(d, [.68, .82], [90, 0]),
        x = q(d, [.68, .84, .88, 1], [0, 1, 1, 0]),
        S = q(d, [.68, .84], [24, 0]),
        C = q(d, [.3, .55], [1, 1.35]),
        w = q(d, [0, 1], [0, -30]),
        ee = q(d, [.84, 1], [0, -3.5]),
        te = q(d, [.84, 1], [1, .93]),
        ne = q(d, [.84, 1], [0, 70]),
        T = q(d, [.88, 1], [1, 0]),
        re = q(d, [.12, .22], [1, 0]),
        ie = q(d, [.85, 1], [1, 0]),
        ae = e ? void 0 : {
            y: w
        },
        oe = (0, _.useRef)(null),
        se = (0, _.useRef)([]);
    return Cu(d, `change`, e => {
        let t = Math.min(gp.length - 1, Math.floor(e * gp.length));
        oe.current && (oe.current.textContent = gp[t]),
        se.current.forEach((e, n) => {
            e && (e.style.backgroundColor = n <= t ? `var(--color-accent)` : `rgba(255,255,255,0.18)`)
        })
    }), (0, R.jsx)(`section`, {
        ref: u,
        id: `top`,
        className: `relative`,
        style: e ? void 0 : {
            height: `300vh`
        },
        children: (0, R.jsxs)(G.div, {
            style: e ? void 0 : {
                rotate: ee,
                scale: te,
                y: ne,
                opacity: T
            },
            className: e ? `relative flex min-h-screen items-center overflow-hidden` : `sticky top-0 flex h-svh items-center overflow-hidden`,
            onMouseMove: s,
            children: [(0, R.jsx)(`div`, {
                className: `grid-bg absolute inset-0`,
                "aria-hidden": `true`
            }), (0, R.jsx)(G.div, {
                className: `absolute inset-0`,
                style: e ? void 0 : {
                    scale: C
                },
                children: (0, R.jsx)(zf, {
                    className: `opacity-70`
                })
            }), (0, R.jsxs)(G.div, {
                style: ae,
                className: `relative mx-auto grid w-full max-w-6xl items-center gap-16 px-6 pb-24 pt-32 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28 lg:pt-36`,
                children: [(0, R.jsxs)(G.div, {
                    variants: mp,
                    initial: !e && `hidden`,
                    animate: `show`,
                    children: [(0, R.jsx)(G.div, {
                        variants: hp,
                        style: e ? void 0 : {
                            opacity: f,
                            y: p
                        },
                        children: (0, R.jsxs)(`span`, {
                            className: `inline-flex items-center gap-2 rounded-full border border-edge bg-panel px-3.5 py-1.5 text-xs text-zinc-400`,
                            children: [(0, R.jsxs)(`span`, {
                                className: `relative flex h-2 w-2`,
                                "aria-hidden": `true`,
                                children: [(0, R.jsx)(`span`, {
                                    className: `absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60`
                                }), (0, R.jsx)(`span`, {
                                    className: `relative inline-flex h-2 w-2 rounded-full bg-emerald-400`
                                })]
                            }), Z.status]
                        })
                    }), (0, R.jsxs)(G.div, {
                        variants: hp,
                        style: e ? void 0 : {
                            opacity: f,
                            y: p
                        },
                        className: `mt-8 flex items-center gap-3`,
                        children: [(0, R.jsx)(`span`, {
                            className: `h-px w-8 bg-accent/50`,
                            "aria-hidden": `true`
                        }), (0, R.jsxs)(`p`, {
                            className: `font-mono text-sm text-zinc-400`,
                            children: [(0, R.jsx)(`span`, {
                                className: `text-accent`,
                                children: `$`
                            }), ` whoami`, (0, R.jsx)(`span`, {
                                className: `blink ml-1 inline-block h-4 w-2 translate-y-0.5 bg-accent`,
                                "aria-hidden": `true`
                            })]
                        })]
                    }), (0, R.jsxs)(`h1`, {
                        className: `relative mt-6 font-display font-bold leading-[0.98] tracking-tight`,
                        children: [(0, R.jsx)(G.span, {
                            style: e ? void 0 : {
                                opacity: f,
                                y: p
                            },
                            className: `block text-[clamp(2.2rem,5.8vw,4.25rem)] text-zinc-100`,
                            children: [`I`, `don't`, `just`, `learn`, `technology.`].map((e, t) => (0, R.jsxs)(_.Fragment, {
                                children: [(0, R.jsx)(G.span, {
                                    variants: hp,
                                    className: `inline-block ${e === `technology.` ? `text-outline` : ``}`,
                                    children: e
                                }), ` `]
                            }, `${e}-${t}`))
                        }), (0, R.jsx)(G.span, {
                            style: e ? void 0 : {
                                opacity: m,
                                y: h
                            },
                            className: `absolute inset-x-0 top-0 block text-[clamp(2.2rem,5.8vw,4.25rem)]`,
                            children: [`I`, `build`, `with`, `it.`].map((e, t) => (0, R.jsxs)(_.Fragment, {
                                children: [(0, R.jsx)(G.span, {
                                    variants: hp,
                                    className: `inline-block ${e === `build` ? `font-serif italic text-accent` : `text-zinc-100`}`,
                                    children: e
                                }), ` `]
                            }, `${e}-${t}`))
                        })]
                    }), (0, R.jsxs)(G.div, {
                        style: e ? void 0 : {
                            opacity: g,
                            y: v
                        },
                        children: [(0, R.jsx)(G.p, {
                            variants: hp,
                            className: `mt-8 max-w-xl text-lg font-medium text-zinc-200 md:text-xl`,
                            children: Z.tagline.split(`turning ideas into working projects`).flatMap((e, t, n) => t === n.length - 1 ? [e] : [e, (0, R.jsx)(`mark`, {
                                className: `line text-zinc-100`,
                                children: `turning ideas into working projects`
                            }, t)])
                        }), (0, R.jsxs)(G.ul, {
                            variants: hp,
                            "aria-label": `Highlights`,
                            className: `mt-10 flex flex-wrap items-center gap-2 lg:hidden`,
                            children: [(0, R.jsxs)(`li`, {
                                className: `inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent`,
                                children: [(0, R.jsx)(tf, {
                                    className: `h-3.5 w-3.5`,
                                    "aria-hidden": `true`
                                }), ` Hackathon Winner`]
                            }), (0, R.jsxs)(`li`, {
                                className: `inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300`,
                                children: [(0, R.jsx)(Yd, {
                                    className: `h-3.5 w-3.5`,
                                    "aria-hidden": `true`
                                }), ` First Ship`]
                            }), (0, R.jsxs)(`li`, {
                                className: `inline-flex items-center gap-1.5 rounded-full border border-edge bg-panel px-3 py-1.5 text-xs font-semibold text-zinc-300`,
                                children: [(0, R.jsx)(Hd, {
                                    className: `h-3.5 w-3.5`,
                                    "aria-hidden": `true`
                                }), ` Game Dev`]
                            })]
                        })]
                    }), (0, R.jsx)(G.div, {
                        style: e ? void 0 : {
                            opacity: x,
                            y: S
                        },
                        children: (0, R.jsxs)(G.div, {
                            variants: hp,
                            className: `mt-10 flex flex-wrap items-center gap-4`,
                            children: [(0, R.jsxs)(G.a, {
                                href: `#work`,
                                className: `btn-accent`,
                                style: e ? void 0 : {
                                    x: a,
                                    y: o
                                },
                                onMouseMove: c,
                                onMouseLeave: l,
                                children: [`Explore My Work`, (0, R.jsx)(jd, {
                                    className: `h-4 w-4 transition-transform duration-300 hover:translate-x-0.5`
                                })]
                            }), Z.links.github && (0, R.jsxs)(`a`, {
                                href: Z.links.github,
                                target: `_blank`,
                                rel: `noreferrer`,
                                className: `btn-ghost`,
                                children: [(0, R.jsx)(kf, {
                                    className: `h-4 w-4`
                                }), ` GitHub`]
                            }), (0, R.jsx)(`a`, {
                                href: `#contact`,
                                className: `inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-zinc-300 transition-colors hover:text-white`,
                                children: `Contact Me`
                            })]
                        })
                    })]
                }), (0, R.jsx)(G.div, {
                    "aria-hidden": `true`,
                    className: `relative hidden h-[440px] select-none lg:block`,
                    style: e ? void 0 : {
                        opacity: y,
                        x: b
                    },
                    children: _p.map(e => (0, R.jsx)(vp, {
                        card: e,
                        mx: r,
                        my: i
                    }, e.name))
                })]
            }), (0, R.jsxs)(G.div, {
                className: `absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex [@media(max-height:780px)]:hidden`,
                style: e ? void 0 : {
                    opacity: re
                },
                children: [(0, R.jsx)(`span`, {
                    className: `font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600`,
                    children: `scroll`
                }), (0, R.jsx)(`span`, {
                    className: `h-10 w-px animate-pulse bg-gradient-to-b from-accent/60 to-transparent`
                })]
            }), !e && (0, R.jsxs)(G.div, {
                className: `absolute bottom-8 left-6 z-30 flex items-center gap-3`,
                style: {
                    opacity: ie
                },
                children: [(0, R.jsx)(`span`, {
                    ref: oe,
                    className: `font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500`,
                    children: `01 / WHOAMI`
                }), (0, R.jsx)(`span`, {
                    className: `flex items-center gap-1`,
                    children: gp.map((e, t) => (0, R.jsx)(`span`, {
                        ref: e => {
                            se.current[t] = e
                        },
                        className: `h-1 w-5 rounded-full`,
                        style: {
                            backgroundColor: t === 0 ? `var(--color-accent)` : `rgba(255,255,255,0.18)`
                        }
                    }, t))
                })]
            })]
        })
    })
}
var bp = [{
    icon: ef,
    label: "Started",
    text: "Learned to program — and fell in love with building software.",
    highlight: false
}, {
    icon: Wd,
    label: "Built",
    text: "Started creating real projects: websites, tools, experiments.",
    highlight: false
}, {
    icon: Vd,
    label: "Competed",
    text: "Entered hackathons with teammates, building under pressure.",
    highlight: false
}, {
    icon: tf,
    label: "Won",
    text: "AI News Summarizer — NLP project.",
    highlight: true
}, {
    icon: Qd,
    label: "Shipped",
    text: "Deployed my first public web projects — AI tools and apps.",
    highlight: false
}, {
    icon: kd,
    label: "Now",
    text: "Building larger projects. Learning AI, game dev, and full-stack.",
    highlight: false
}];
function xp() {
    let e = bd(),
        t = (0, _.useRef)(null),
        {scrollYProgress: n} = fd({
            target: t,
            offset: [`start 0.75`, `end 0.55`]
        }),
        r = yd(n, {
            stiffness: 70,
            damping: 22
        });
    return (0, R.jsx)(`section`, {
        id: `journey`,
        className: `relative py-28 md:py-36`,
        children: (0, R.jsxs)(`div`, {
            className: `mx-auto w-full max-w-6xl px-6 md:px-10`,
            children: [(0, R.jsx)(sf, {
                eyebrow: `Journey`,
                title: `A story, not a résumé.`,
                description: `Still early — but the trajectory is real: started, built, competed, won, shipped.`,
                chapter: `06`
            }), (0, R.jsxs)(`div`, {
                className: `relative mt-16`,
                children: [e ? (0, R.jsx)(`div`, {
                    className: `absolute left-[13px] top-1 bottom-1 w-px bg-gradient-to-b from-accent/50 via-edge to-transparent md:left-[15px]`,
                    "aria-hidden": `true`
                }) : (0, R.jsx)(G.div, {
                    style: {
                        scaleY: r,
                        transformOrigin: `top`
                    },
                    className: `absolute left-[13px] top-1 bottom-1 w-px bg-gradient-to-b from-accent/50 via-edge to-transparent md:left-[15px]`,
                    "aria-hidden": `true`
                }), (0, R.jsx)(`ol`, {
                    ref: t,
                    className: `space-y-10`,
                    children: bp.map((e, t) => (0, R.jsx)(`li`, {
                        children: (0, R.jsxs)(Q, {
                            delay: t * .06,
                            className: `flex gap-6`,
                            children: [(0, R.jsx)(`span`, {
                                className: `relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border md:h-8 md:w-8 ${e.highlight ? `border-accent bg-accent/15` : `border-edge bg-ink`}`,
                                "aria-hidden": `true`,
                                children: (0, R.jsx)(e.icon, {
                                    className: `h-3.5 w-3.5 ${e.highlight ? `text-accent` : `text-zinc-500`}`
                                })
                            }), (0, R.jsxs)(`div`, {
                                className: `pt-0.5`,
                                children: [(0, R.jsx)(`p`, {
                                    className: `font-display text-lg font-bold ${e.highlight ? `text-accent` : `text-zinc-100`}`,
                                    children: e.label
                                }), (0, R.jsx)(`p`, {
                                    className: `mt-1 max-w-xl text-sm leading-relaxed text-zinc-400`,
                                    children: e.text
                                })]
                            })]
                        })
                    }, e.label))
                })]
            })]
        })
    })
}
function Sp() {
    let e = bd(),
        [t, n] = (0, _.useState)(!1);
    if ((0, _.useEffect)(() => {
        if (e) {
            n(!0);
            return
        }
        let t = () => n(!0);
        return window.addEventListener(`wheel`, t, {
            passive: !0
        }), window.addEventListener(`pointerdown`, t), window.addEventListener(`keydown`, t), window.addEventListener(`touchstart`, t, {
            passive: !0
        }), () => {
            window.removeEventListener(`wheel`, t),
            window.removeEventListener(`pointerdown`, t),
            window.removeEventListener(`keydown`, t),
            window.removeEventListener(`touchstart`, t)
        }
    }, [e]), e)
        return null;
    let [r, ...i] = Z.name.split(` `),
        a = i.join(` `);
    return (0, R.jsx)(Lc, {
        children: !t && (0, R.jsx)(G.div, {
            className: `fixed inset-0 z-[120] flex items-center justify-center bg-ink`,
            style: {
                pointerEvents: `none`
            },
            exit: {
                y: `-100%`,
                transition: {
                    duration: .7,
                    ease: [.76, 0, .24, 1]
                }
            },
            "aria-hidden": `true`,
            children: (0, R.jsxs)(`div`, {
                className: `flex flex-col items-center overflow-hidden px-6`,
                children: [(0, R.jsxs)(`div`, {
                    className: `text-center font-serif leading-[0.9] tracking-tight text-zinc-100`,
                    children: [(0, R.jsx)(`span`, {
                        className: `block overflow-hidden`,
                        children: (0, R.jsx)(G.span, {
                            initial: {
                                y: `110%`
                            },
                            animate: {
                                y: 0
                            },
                            transition: {
                                delay: .1,
                                duration: .8,
                                ease: [.76, 0, .24, 1]
                            },
                            className: `block text-[clamp(3rem,11vw,9rem)]`,
                            children: r
                        })
                    }), a ? (0, R.jsx)(`span`, {
                        className: `block overflow-hidden`,
                        children: (0, R.jsx)(G.span, {
                            initial: {
                                y: `110%`
                            },
                            animate: {
                                y: 0
                            },
                            transition: {
                                delay: .28,
                                duration: .8,
                                ease: [.76, 0, .24, 1]
                            },
                            className: `block text-[clamp(3rem,11vw,9rem)] text-zinc-600`,
                            children: a
                        })
                    }) : null]
                }), (0, R.jsxs)(G.p, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: .9,
                        duration: .5
                    },
                    className: `mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500 md:text-[11px]`,
                    children: [(0, R.jsx)(`span`, {
                        className: `inline-block h-2 w-2 animate-pulse bg-accent`,
                        "aria-hidden": `true`
                    }), `click anywhere to activate the experience`]
                })]
            })
        }, `loader`)
    })
}
function Cp({items: e, reverse: t=!1, className: n=``}) {
    let r = t => (0, R.jsx)(`div`, {
        className: `flex shrink-0 items-center gap-8 pr-8`,
        "aria-hidden": t || void 0,
        children: e.map((e, t) => (0, R.jsxs)(`span`, {
            className: `flex items-center gap-8 whitespace-nowrap font-mono text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400`,
            children: [e, (0, R.jsx)(`span`, {
                className: `text-accent`,
                "aria-hidden": `true`,
                children: `✦`
            })]
        }, t))
    });
    return (0, R.jsx)(`div`, {
        className: `tape-band marquee-paused relative overflow-hidden border-y border-edge py-3.5 ${n}`,
        "aria-hidden": `true`,
        children: (0, R.jsxs)(`div`, {
            className: `marquee-track flex w-max ${t ? `marquee-reverse` : ``}`,
            children: [r(!1), r(!0)]
        })
    })
}
var wp = `I don't just learn technology — I build with it, break it, and ship what survives.`.split(` `);
function Tp() {
    let e = bd(),
        t = (0, _.useRef)(null),
        n = (0, _.useRef)([]),
        {scrollYProgress: r} = fd({
            target: t,
            offset: [`start 0%`, `end 100%`]
        });
    return Cu(r, `change`, e => {
        let t = .12,
            r = .66;
        n.current.forEach((n, i) => {
            if (!n)
                return;
            let a = t + i / wp.length * r,
                o = t + (i + 1) / wp.length * r,
                s = Math.min(Math.max((e - a) / (o - a), 0), 1);
            n.style.backgroundPosition = `${100 - s * 100}% 0`
        })
    }), (0, R.jsx)(`section`, {
        ref: t,
        id: `manifesto`,
        className: `relative`,
        style: e ? void 0 : {
            height: `130vh`
        },
        children: (0, R.jsx)(`div`, {
            className: e ? `relative flex min-h-[60vh] items-center py-24` : `sticky top-0 flex h-svh items-center px-6`,
            children: (0, R.jsxs)(`div`, {
                className: `mx-auto w-full max-w-5xl`,
                children: [(0, R.jsxs)(`p`, {
                    className: `flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-accent`,
                    children: [(0, R.jsx)(`span`, {
                        className: `inline-block h-2 w-2 bg-accent`,
                        "aria-hidden": `true`
                    }), `// manifesto`]
                }), (0, R.jsx)(`p`, {
                    className: e ? `mt-10 font-display text-[clamp(1.8rem,4.2vw,3.4rem)] font-bold leading-[1.15] tracking-tight text-zinc-100` : `mt-10 font-display text-[clamp(1.8rem,4.2vw,3.4rem)] font-bold leading-[1.15] tracking-tight`,
                    children: wp.map((t, r) => e ? (0, R.jsxs)(`span`, {
                        className: `inline-block whitespace-pre`,
                        children: [t, ` `]
                    }, r) : (0, R.jsxs)(`span`, {
                        ref: e => {
                            n.current[r] = e
                        },
                        className: `inline-block whitespace-pre`,
                        style: {
                            color: `transparent`,
                            backgroundImage: `linear-gradient(90deg, var(--color-accent) 0%, var(--color-fg) 100%)`,
                            backgroundSize: `200% 100%`,
                            backgroundPosition: `100% 0`,
                            backgroundRepeat: `no-repeat`,
                            WebkitBackgroundClip: `text`,
                            backgroundClip: `text`
                        },
                        children: [t, ` `]
                    }, r))
                }), (0, R.jsx)(`p`, {
                    className: `mt-8 max-w-xl text-base leading-relaxed text-zinc-400`,
                    children: `Every project here started as a question I couldn't put down — and ended as something you can click, play, or read. Scroll the work below.`
                })]
            })
        })
    })
}
var Ep = `portfolio-sound`,
    Dp = [{
        notes: [110, 277.18, 329.63, 493.88]
    }, {
        notes: [92.5, 220, 277.18, 329.63]
    }, {
        notes: [73.42, 220, 277.18, 369.99]
    }, {
        notes: [82.41, 207.65, 246.94, 329.63]
    }],
    Op = 8,
    kp = 1.6,
    Ap = null,
    $ = null,
    jp = null,
    Mp = null,
    Np = !1,
    Pp = 0,
    Fp = 0,
    Ip = null,
    Lp = 0,
    Rp = 0,
    zp = 0,
    Bp = 0,
    Vp = new Set;
function Hp() {
    try {
        return localStorage.getItem(Ep) !== `off`
    } catch {
        return !0
    }
}
function Up(e) {
    try {
        localStorage.setItem(Ep, e ? `on` : `off`)
    } catch {}
}
function Wp() {
    for (let e of Vp)
        e(!!Ap)
}
function Gp() {
    if ($)
        return $;
    let e = window.AudioContext || window.webkitAudioContext;
    return e ? ($ = new e, jp = $.createGain(), jp.gain.value = .9, jp.connect($.destination), Mp = $.createGain(), Mp.gain.value = 0, Mp.connect(jp), $) : null
}
function Kp(e, t, n, r) {
    let i = $.createOscillator();
    i.type = `triangle`,
    i.frequency.value = e;
    let a = $.createGain();
    a.gain.setValueAtTime(0, t),
    a.gain.linearRampToValueAtTime(.05, t + kp),
    a.gain.setValueAtTime(.05, t + n - kp),
    a.gain.linearRampToValueAtTime(0, t + n);
    let o = $.createBiquadFilter();
    o.type = `lowpass`,
    o.frequency.value = 1100;
    let s = $.createStereoPanner ? $.createStereoPanner() : null;
    s && (s.pan.value = r),
    i.connect(o),
    o.connect(a),
    s ? (a.connect(s), s.connect(Mp)) : a.connect(Mp),
    i.start(t),
    i.stop(t + n + .05)
}
function qp(e, t, n) {
    let r = $.createOscillator();
    r.type = `sine`,
    r.frequency.value = e;
    let i = $.createGain();
    i.gain.setValueAtTime(0, t),
    i.gain.linearRampToValueAtTime(n, t + .02),
    i.gain.exponentialRampToValueAtTime(1e-4, t + 1.6);
    let a = $.createStereoPanner ? $.createStereoPanner() : null;
    a && (a.pan.value = (Math.random() - .5) * .6),
    r.connect(i),
    a ? (i.connect(a), a.connect(Mp)) : i.connect(Mp),
    r.start(t),
    r.stop(t + 1.7)
}
function Jp(e, t) {
    e.notes.forEach((e, n) => {
        Kp(e, t, Op, n % 2 == 0 ? -.35 : .35)
    })
}
function Yp(e, t) {
    let n = [...e.notes.slice(1), e.notes[1] * 2, e.notes[2] * 2],
        r = t + .4;
    for (; r < t + Op - 1;) {
        let e = n[Math.floor(Math.random() * n.length)];
        qp(e, r, .035 + Math.random() * .02),
        r += 1.1 + Math.random() * .9
    }
}
function Xp() {
    if (!(!Np || !$))
        for (; Fp < $.currentTime + .8;) {
            let e = Dp[Pp];
            Jp(e, Fp),
            Yp(e, Fp),
            Fp += Op,
            Pp = (Pp + 1) % Dp.length
        }
}
function Zp() {
    Np || !$ || (Np = !0, Mp.gain.cancelScheduledValues($.currentTime), Mp.gain.setValueAtTime(Mp.gain.value, $.currentTime), Mp.gain.linearRampToValueAtTime(1, $.currentTime + 1.5), Fp = $.currentTime + .1, Xp(), Ip = setInterval(Xp, 250))
}
function Qp() {
    if (!Np || !$)
        return;
    Np = !1,
    Ip &&= (clearInterval(Ip), null);
    let e = $.currentTime;
    Mp.gain.cancelScheduledValues(e),
    Mp.gain.setValueAtTime(Mp.gain.value, e),
    Mp.gain.linearRampToValueAtTime(0, e + .6)
}
function $p() {
    if (!$ || !jp)
        return;
    let e = $.currentTime,
        t = $.createOscillator();
    t.type = `triangle`,
    t.frequency.setValueAtTime(760, e),
    t.frequency.exponentialRampToValueAtTime(340, e + .07);
    let n = $.createGain();
    n.gain.setValueAtTime(.14, e),
    n.gain.exponentialRampToValueAtTime(1e-4, e + .1),
    t.connect(n),
    n.connect(jp),
    t.start(e),
    t.stop(e + .12)
}
function em(e) {
    if (!$ || !jp)
        return;
    let t = $.currentTime,
        n = Math.max(0, Math.min(1, e || .4)),
        r = $.createOscillator();
    r.type = `sine`;
    let i = 620 + n * 420;
    r.frequency.setValueAtTime(i, t),
    r.frequency.exponentialRampToValueAtTime(i * .68, t + .05);
    let a = $.createGain(),
        o = .018 + n * .03;
    a.gain.setValueAtTime(o, t),
    a.gain.exponentialRampToValueAtTime(1e-4, t + .09),
    r.connect(a),
    a.connect(jp),
    r.start(t),
    r.stop(t + .1)
}
function tm() {
    if (!$ || !jp)
        return;
    let e = $.currentTime,
        t = $.createOscillator();
    t.type = `sine`,
    t.frequency.setValueAtTime(430, e),
    t.frequency.exponentialRampToValueAtTime(780, e + .055);
    let n = $.createGain();
    n.gain.setValueAtTime(1e-4, e),
    n.gain.linearRampToValueAtTime(.055, e + .018),
    n.gain.exponentialRampToValueAtTime(1e-4, e + .13),
    t.connect(n),
    n.connect(jp),
    t.start(e),
    t.stop(e + .15)
}
function nm() {
    return Ap === null && (Ap = Hp()), Ap
}
function rm(e) {
    Ap = !!e,
    Up(Ap),
    Ap ? (Gp(), $ && ($.state === `suspended` && $.resume(), Zp())) : Qp(),
    Wp()
}
function im(e) {
    return Vp.add(e), e(nm()), () => Vp.delete(e)
}
function am() {
    if (Ap === null && (Ap = Hp()), typeof window > `u` || !(`AudioContext` in window || `webkitAudioContext` in window))
        return;
    let e = () => {
        let e = Gp();
        e && (e.state === `suspended` && e.resume(), Ap && Zp())
    };
    window.addEventListener(`pointerdown`, () => {
        if (e(), !Ap)
            return;
        let t = performance.now();
        t - Lp < 70 || (Lp = t, $p())
    }, !0),
    window.addEventListener(`keydown`, e, !0),
    window.addEventListener(`wheel`, t => {
        if (e(), !Ap)
            return;
        let n = performance.now();
        n - Rp < 70 || (Bp += Math.abs(t.deltaY), !(Bp < 110) && (Bp = 0, Rp = n, em(Math.min(1, Math.abs(t.deltaY) / 260))))
    }, {
        passive: !0
    }),
    window.addEventListener(`pointerover`, e => {
        if (e.pointerType === `touch`)
            return;
        let t = e.target;
        if (!t || !(t instanceof Element) || !t.closest(`a, button, [role='button'], input, select, textarea, summary, [tabindex]`))
            return;
        let n = performance.now();
        n - zp < 90 || (zp = n, Ap && tm())
    }, !0)
}
var om = [{
    label: `Work`,
    href: `#work`
}, {
    label: `Achievements`,
    href: `#achievements`
}, {
    label: `Journey`,
    href: `#journey`
}, {
    label: `Skills`,
    href: `#skills`
}, {
    label: `Code`,
    href: `#code`
}, {
    label: `Contact`,
    href: `#contact`
}];
function sm() {
    let [e, t] = (0, _.useState)(!1),
        [n, r] = (0, _.useState)(!1),
        [i, a] = (0, _.useState)(``),
        [o, s] = (0, _.useState)(!0);
    (0, _.useEffect)(() => im(s), []);
    let c = () => rm(!o);
    (0, _.useEffect)(() => {
        let e = () => t(window.scrollY > 24);
        return e(), window.addEventListener(`scroll`, e, {
            passive: !0
        }), () => window.removeEventListener(`scroll`, e)
    }, []),
    (0, _.useEffect)(() => {
        let e = om.map(e => document.querySelector(e.href)).filter(Boolean),
            t = new IntersectionObserver(e => {
                for (let t of e)
                    t.isIntersecting && a(`#${t.target.id}`)
            }, {
                rootMargin: `-40% 0px -55% 0px`
            });
        return e.forEach(e => t.observe(e)), () => t.disconnect()
    }, []),
    (0, _.useEffect)(() => (document.body.style.overflow = n ? `hidden` : ``, () => {
        document.body.style.overflow = ``
    }), [n]),
    (0, _.useEffect)(() => {
        let e = e => e.key === `Escape` && r(!1);
        return window.addEventListener(`keydown`, e), () => window.removeEventListener(`keydown`, e)
    }, []);
    let l = e => {
            let t = document.querySelector(e);
            if (!t)
                return;
            let n = t.getBoundingClientRect().top + window.scrollY;
            window.__lenis ? window.__lenis.scrollTo(n, {
                duration: 1.2
            }) : window.scrollTo({
                top: n
            })
        },
        u = () => {
            window.__lenis ? window.__lenis.scrollTo(0, {
                duration: 1.2
            }) : window.scrollTo({
                top: 0
            })
        };
    return (0, R.jsxs)(`header`, {
        className: `fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${e || n ? `border-b border-edge bg-ink/85 backdrop-blur-md` : `border-b border-transparent`}`,
        children: [(0, R.jsxs)(`nav`, {
            className: `mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-10`,
            "aria-label": `Main navigation`,
            children: [(0, R.jsxs)(`a`, {
                href: `#top`,
                className: `font-display text-lg font-bold tracking-tight text-zinc-100`,
                onClick: e => {
                    e.preventDefault(),
                    r(!1),
                    setTimeout(u, 50)
                },
                children: [`aaryan`, (0, R.jsx)(`span`, {
                    className: `blink text-accent`,
                    children: `.`
                }), `mittal`]
            }), (0, R.jsxs)(`div`, {
                className: `hidden items-center gap-7 md:flex`,
                children: [om.map(e => (0, R.jsxs)(`a`, {
                    href: e.href,
                    "aria-current": i === e.href ? `true` : void 0,
                    className: `relative text-sm transition-colors ${i === e.href ? `text-accent` : `text-zinc-400 hover:text-zinc-100`}`,
                    children: [e.label, (0, R.jsx)(`span`, {
                        className: `absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent transition-opacity duration-300 ${i === e.href ? `opacity-100` : `opacity-0`}`,
                        "aria-hidden": `true`
                    })]
                }, e.href)), Z.links.github && (0, R.jsx)(`a`, {
                    href: Z.links.github,
                    target: `_blank`,
                    rel: `noreferrer`,
                    "aria-label": `GitHub profile`,
                    className: `text-zinc-400 transition-colors hover:text-zinc-100`,
                    children: (0, R.jsx)(kf, {
                        className: `h-[18px] w-[18px]`
                    })
                }), (0, R.jsx)(`button`, {
                    type: `button`,
                    onClick: c,
                    "aria-label": o ? `Mute sounds` : `Enable sounds`,
                    "aria-pressed": o,
                    title: o ? `Mute sounds` : `Enable sounds`,
                    className: `inline-flex h-9 w-9 items-center justify-center rounded-lg border border-edge bg-panel/60 text-zinc-400 transition-colors hover:border-accent/50 hover:text-accent`,
                    children: o ? (0, R.jsx)(rf, {
                        className: `h-4 w-4`
                    }) : (0, R.jsx)(af, {
                        className: `h-4 w-4`
                    })
                })]
            }), (0, R.jsx)(`button`, {
                type: `button`,
                className: `flex h-10 w-10 items-center justify-center rounded-lg text-zinc-300 transition-colors hover:bg-panel md:hidden`,
                onClick: () => r(e => !e),
                "aria-expanded": n,
                "aria-controls": `mobile-menu`,
                "aria-label": n ? `Close menu` : `Open menu`,
                children: n ? (0, R.jsx)(of, {
                    className: `h-5 w-5`
                }) : (0, R.jsx)(qd, {
                    className: `h-5 w-5`
                })
            })]
        }), (0, R.jsx)(Lc, {
            children: n && (0, R.jsx)(G.div, {
                id: `mobile-menu`,
                initial: {
                    opacity: 0,
                    height: 0
                },
                animate: {
                    opacity: 1,
                    height: `auto`
                },
                exit: {
                    opacity: 0,
                    height: 0
                },
                transition: {
                    duration: .25,
                    ease: `easeOut`
                },
                className: `overflow-hidden border-t border-edge bg-ink md:hidden`,
                children: (0, R.jsxs)(`div`, {
                    className: `flex flex-col gap-1 px-6 py-5`,
                    children: [om.map(e => (0, R.jsx)(`a`, {
                        href: e.href,
                        onClick: t => {
                            t.preventDefault(),
                            r(!1),
                            setTimeout(() => l(e.href), 50)
                        },
                        className: `rounded-lg px-3 py-3 font-display text-xl font-semibold text-zinc-200 transition-colors hover:bg-panel hover:text-accent`,
                        children: e.label
                    }, e.href)), Z.links.github && (0, R.jsxs)(`a`, {
                        href: Z.links.github,
                        target: `_blank`,
                        rel: `noreferrer`,
                        onClick: () => r(!1),
                        className: `mt-2 inline-flex items-center gap-2 rounded-lg px-3 py-3 text-sm text-zinc-400`,
                        children: [(0, R.jsx)(kf, {
                            className: `h-4 w-4`
                        }), ` GitHub`]
                    }), (0, R.jsxs)(`button`, {
                        type: `button`,
                        onClick: c,
                        "aria-label": o ? `Mute sounds` : `Enable sounds`,
                        "aria-pressed": o,
                        className: `mt-2 inline-flex items-center gap-2 rounded-lg px-3 py-3 text-sm text-zinc-400 transition-colors hover:text-accent`,
                        children: [o ? (0, R.jsx)(rf, {
                            className: `h-4 w-4`
                        }) : (0, R.jsx)(af, {
                            className: `h-4 w-4`
                        }), o ? `Sound on` : `Sound off`]
                    })]
                })
            })
        })]
    })
}
function cm() {
    let e = (0, _.useRef)(null),
        t = (0, _.useRef)(null),
        n = (0, _.useRef)(null);
    return (0, _.useEffect)(() => {
        if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)
            return;
        let r = 0,
            i = () => {
                let a = window.scrollY;
                e.current && (e.current.style.backgroundPosition = `0 ${a * .06 % 220}px`),
                t.current && (t.current.style.backgroundPosition = `0 ${a * .13 % 340}px`),
                n.current && (n.current.style.transform = `translate3d(0, ${Math.min(a * .02, 160)}px, 0)`),
                r = requestAnimationFrame(i)
            };
        return r = requestAnimationFrame(i), () => cancelAnimationFrame(r)
    }, []), (0, R.jsxs)(R.Fragment, {
        children: [(0, R.jsx)(`div`, {
            ref: e,
            className: `starfield`,
            "aria-hidden": `true`
        }), (0, R.jsx)(`div`, {
            ref: t,
            className: `starfield-2`,
            "aria-hidden": `true`
        }), (0, R.jsx)(`div`, {
            ref: n,
            className: `galaxy`,
            "aria-hidden": `true`
        }), [{
            top: `22%`,
            left: `68%`,
            delay: `-1.2s`
        }, {
            top: `48%`,
            left: `14%`,
            delay: `-5.4s`
        }, {
            top: `74%`,
            left: `58%`,
            delay: `-8.1s`
        }].map((e, t) => (0, R.jsx)(`div`, {
            className: `shooting-star`,
            style: {
                top: e.top,
                left: e.left,
                animationDelay: e.delay
            },
            "aria-hidden": `true`
        }, t))]
    })
}
function lm() {
    let e = (0, _.useRef)(null);
    return (0, _.useEffect)(() => {
        if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)
            return;
        let t = 0,
            n = () => {
                e.current && (e.current.style.transform = `translate3d(0, ${Math.min(window.scrollY * .08, 140)}px, 0)`),
                t = requestAnimationFrame(n)
            };
        return t = requestAnimationFrame(n), () => cancelAnimationFrame(t)
    }, []), (0, R.jsx)(`div`, {
        ref: e,
        className: `pointer-events-none fixed inset-0 z-0`,
        "aria-hidden": `true`,
        children: (0, R.jsx)(`div`, {
            className: `ocean-bubbles`
        })
    })
}
var um = `M24 2C34 9 38 20 36.5 31 35 41 29 50 24 58 19 50 13 41 11.5 31 10 20 14 9 24 2Z`,
    dm = [{
        top: `14%`,
        left: `10%`,
        size: 42,
        opacity: .55,
        duration: `7s`,
        delay: `0s`,
        rot: 24,
        speed: .09
    }, {
        top: `32%`,
        left: `86%`,
        size: 34,
        opacity: .45,
        duration: `8s`,
        delay: `-2s`,
        rot: -18,
        speed: .07
    }, {
        top: `50%`,
        left: `6%`,
        size: 38,
        opacity: .5,
        duration: `7.5s`,
        delay: `-4s`,
        rot: 12,
        speed: .11
    }, {
        top: `64%`,
        left: `82%`,
        size: 46,
        opacity: .6,
        duration: `9s`,
        delay: `-5.5s`,
        rot: -26,
        speed: .06
    }, {
        top: `78%`,
        left: `12%`,
        size: 30,
        opacity: .4,
        duration: `6.5s`,
        delay: `-3s`,
        rot: 30,
        speed: .1
    }, {
        top: `90%`,
        left: `68%`,
        size: 36,
        opacity: .48,
        duration: `8.5s`,
        delay: `-7s`,
        rot: -10,
        speed: .08
    }, {
        top: `42%`,
        left: `47%`,
        size: 26,
        opacity: .35,
        duration: `7s`,
        delay: `-6s`,
        rot: 16,
        speed: .12
    }];
function fm() {
    let e = (0, _.useRef)([]);
    return (0, _.useEffect)(() => {
        if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)
            return;
        let t = 0,
            n = () => {
                let r = window.scrollY;
                e.current.forEach((e, t) => {
                    e && (e.style.transform = `translate3d(0, ${Math.min(r * dm[t].speed, 150)}px, 0)`)
                }),
                t = requestAnimationFrame(n)
            };
        return t = requestAnimationFrame(n), () => cancelAnimationFrame(t)
    }, []), (0, R.jsx)(R.Fragment, {
        children: dm.map((t, n) => (0, R.jsx)(`div`, {
            ref: t => {
                e.current[n] = t
            },
            style: {
                top: t.top,
                left: t.left
            },
            className: `pointer-events-none fixed z-0`,
            "aria-hidden": `true`,
            children: (0, R.jsx)(`div`, {
                className: `feather-fall`,
                style: {
                    width: t.size,
                    height: t.size * 2.1,
                    opacity: t.opacity,
                    animation: `feather-fall ${t.duration} ease-in-out infinite`,
                    animationDelay: t.delay,
                    transform: `rotate(${t.rot}deg)`
                },
                children: (0, R.jsxs)(`svg`, {
                    viewBox: `0 0 48 100`,
                    width: `100%`,
                    height: `100%`,
                    fill: `none`,
                    children: [(0, R.jsx)(`path`, {
                        d: um,
                        fill: `#fdf6e3`
                    }), (0, R.jsx)(`path`, {
                        d: `M24 6C27.5 12 29.5 19 29.2 26.5 28.9 34 27 41 24 48M24 6C20.5 12 18.5 19 18.8 26.5 19.1 34 21 41 24 48`,
                        stroke: `#d9b45c`,
                        strokeWidth: `0.8`,
                        strokeLinecap: `round`
                    }), (0, R.jsx)(`line`, {
                        x1: `24`,
                        y1: `6`,
                        x2: `24`,
                        y2: `92`,
                        stroke: `#c9a227`,
                        strokeWidth: `1.4`,
                        strokeLinecap: `round`
                    }), (0, R.jsx)(`path`, {
                        d: `M24 86c2 2 3.4 4 4.2 7`,
                        stroke: `#c9a227`,
                        strokeWidth: `1.2`,
                        strokeLinecap: `round`
                    })]
                })
            })
        }, n))
    })
}
function pm({title: e, children: t}) {
    return t ? (0, R.jsxs)(`div`, {
        className: `mt-8`,
        children: [(0, R.jsx)(`h4`, {
            className: `font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-accent`,
            children: e
        }), (0, R.jsx)(`div`, {
            className: `mt-3 text-sm leading-relaxed text-zinc-400`,
            children: t
        })]
    }) : null
}
function mm({items: e}) {
    return !e || e.length === 0 ? null : (0, R.jsx)(`ul`, {
        className: `mt-2 grid gap-2 sm:grid-cols-2`,
        children: e.map(e => (0, R.jsxs)(`li`, {
            className: `flex items-start gap-2 text-sm text-zinc-400`,
            children: [(0, R.jsx)(Rd, {
                className: `mt-0.5 h-4 w-4 shrink-0 text-accent`,
                "aria-hidden": `true`
            }), e]
        }, e))
    })
}
function hm({project: e, onClose: t}) {
    let n = (0, _.useRef)(null);
    (0, _.useEffect)(() => {
        if (!e)
            return;
        document.body.style.overflow = `hidden`,
        n.current?.focus();
        let r = e => e.key === `Escape` && t();
        return window.addEventListener(`keydown`, r), () => {
            document.body.style.overflow = ``,
            window.removeEventListener(`keydown`, r)
        }
    }, [e, t]);
    let r = e && !e.shipped,
        i = e && (e.links.demo || e.links.github);
    return (0, R.jsx)(Lc, {
        children: e && (0, R.jsxs)(G.div, {
            className: `fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6`,
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: .2
            },
            role: `dialog`,
            "aria-modal": `true`,
            "aria-label": `${e.name} — case study`,
            children: [(0, R.jsx)(`div`, {
                className: `absolute inset-0 bg-black/70 backdrop-blur-sm`,
                onClick: t,
                "aria-hidden": `true`
            }), (0, R.jsxs)(G.div, {
                initial: {
                    opacity: 0,
                    y: 40,
                    scale: .98
                },
                animate: {
                    opacity: 1,
                    y: 0,
                    scale: 1
                },
                exit: {
                    opacity: 0,
                    y: 30,
                    scale: .98
                },
                transition: {
                    duration: .3,
                    ease: [.21, .47, .32, .98]
                },
                className: `relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl border border-edge bg-panel shadow-2xl shadow-black/60 sm:rounded-2xl`,
                children: [(0, R.jsxs)(`div`, {
                    className: `relative h-40 shrink-0 overflow-hidden sm:h-48`,
                    style: {
                        background: `radial-gradient(120% 140% at 15% 0%, ${e.accent}2e 0%, transparent 55%), linear-gradient(180deg, var(--color-panel) 0%, var(--color-ink) 100%)`
                    },
                    children: [(0, R.jsx)(`div`, {
                        className: `grid-bg absolute inset-0`,
                        "aria-hidden": `true`
                    }), (0, R.jsxs)(`div`, {
                        className: `absolute left-5 top-5 flex items-center gap-2.5`,
                        children: [(0, R.jsx)(`span`, {
                            className: `rounded-full border border-edge bg-ink/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-400 backdrop-blur`,
                            children: e.category
                        }), (0, R.jsx)(cp, {
                            status: e.status,
                            className: `bg-ink/80 backdrop-blur`
                        })]
                    }), (0, R.jsx)(`button`, {
                        ref: n,
                        type: `button`,
                        onClick: t,
                        "aria-label": `Close case study`,
                        className: `absolute right-4 top-4 rounded-lg border border-edge bg-ink/80 p-2 text-zinc-300 backdrop-blur transition-colors hover:border-accent/50 hover:text-white`,
                        children: (0, R.jsx)(of, {
                            className: `h-4 w-4`
                        })
                    }), (0, R.jsx)(`span`, {
                        className: `absolute bottom-3 left-6 font-display text-6xl font-bold tracking-tight text-white/5`,
                        "aria-hidden": `true`,
                        children: e.glyph
                    })]
                }), (0, R.jsxs)(`div`, {
                    className: `p-6 sm:p-8`,
                    children: [(0, R.jsx)(`h3`, {
                        className: `font-display text-2xl font-bold text-zinc-100 md:text-3xl`,
                        children: e.name
                    }), (0, R.jsx)(`p`, {
                        className: `mt-2 text-sm text-zinc-400`,
                        children: e.oneLiner
                    }), e.achievement && (0, R.jsxs)(`p`, {
                        className: `mt-3 inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-accent`,
                        children: [(0, R.jsx)(tf, {
                            className: `h-3.5 w-3.5`,
                            "aria-hidden": `true`
                        }), e.achievement]
                    }), r && (0, R.jsx)(`div`, {
                        className: `mt-6 rounded-xl border border-amber-400/25 bg-amber-400/10 p-4 text-sm leading-relaxed text-amber-200`,
                        children: `This project is actively being built. The case study will fill in as the project progresses.`
                    }), (0, R.jsx)(pm, {
                        title: `Overview`,
                        children: e.overview
                    }), (0, R.jsx)(pm, {
                        title: `Problem`,
                        children: e.problem
                    }), (0, R.jsx)(pm, {
                        title: `Solution`,
                        children: e.solution
                    }), e.features?.length > 0 && (0, R.jsx)(pm, {
                        title: `Features`,
                        children: (0, R.jsx)(mm, {
                            items: e.features
                        })
                    }), e.technologies?.length > 0 && (0, R.jsx)(pm, {
                        title: `Technology`,
                        children: (0, R.jsx)(`div`, {
                            className: `flex flex-wrap gap-1.5`,
                            children: e.technologies.map(e => (0, R.jsx)(`span`, {
                                className: `rounded-md border border-edge bg-ink px-2.5 py-1 font-mono text-xs text-zinc-300`,
                                children: e
                            }, e))
                        })
                    }), (0, R.jsx)(pm, {
                        title: `My Role`,
                        children: e.role
                    }), e.challenges?.length > 0 && (0, R.jsx)(pm, {
                        title: `Challenges`,
                        children: (0, R.jsx)(`ul`, {
                            className: `mt-2 space-y-2`,
                            children: e.challenges.map(e => (0, R.jsxs)(`li`, {
                                className: `flex items-start gap-2 text-sm text-zinc-400`,
                                children: [(0, R.jsx)(`span`, {
                                    className: `mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent`,
                                    "aria-hidden": `true`
                                }), e]
                            }, e))
                        })
                    }), e.learned?.length > 0 && (0, R.jsx)(pm, {
                        title: `What I Learned`,
                        children: (0, R.jsx)(`ul`, {
                            className: `mt-2 space-y-2`,
                            children: e.learned.map(e => (0, R.jsxs)(`li`, {
                                className: `flex items-start gap-2 text-sm text-zinc-400`,
                                children: [(0, R.jsx)(`span`, {
                                    className: `mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent`,
                                    "aria-hidden": `true`
                                }), e]
                            }, e))
                        })
                    }), (0, R.jsxs)(`div`, {
                        className: `mt-9 flex flex-wrap items-center gap-3 border-t border-edge pt-6`,
                        children: [e.links.github && (0, R.jsxs)(`a`, {
                            href: e.links.github,
                            target: `_blank`,
                            rel: `noreferrer`,
                            className: `btn-ghost`,
                            children: [(0, R.jsx)(kf, {
                                className: `h-4 w-4`
                            }), ` Source`]
                        }), e.links.demo && (0, R.jsxs)(`a`, {
                            href: e.links.demo,
                            target: `_blank`,
                            rel: `noreferrer`,
                            className: `btn-accent`,
                            children: [(0, R.jsx)(Bd, {
                                className: `h-4 w-4`
                            }), ` Live Demo`]
                        }), !i && (0, R.jsx)(`p`, {
                            className: `text-xs text-zinc-500`,
                            children: r ? `Demo & source links will be added here as the project progresses.` : `Demo & source links will be added here once available.`
                        })]
                    })]
                })]
            })]
        })
    })
}
function gm({project: e, featured: t}) {
    let n = t ? `h-56 md:h-72` : `h-44`,
        [r, i] = (0, _.useState)(!1);
    (0, _.useEffect)(() => {
        i(!1)
    }, [e.id]);
    let a = e.image && !r;
    return (0, R.jsxs)(`div`, {
        className: `relative overflow-hidden ${n}`,
        children: [(0, R.jsx)(`div`, {
            className: `absolute inset-0`,
            "aria-hidden": `true`,
            style: {
                background: `radial-gradient(120% 140% at 15% 0%, ${e.accent}26 0%, transparent 55%), linear-gradient(180deg, var(--color-panel) 0%, var(--color-ink) 100%)`
            }
        }), a ? (0, R.jsx)(`img`, {
            src: e.image,
            alt: `${e.name} — project screenshot`,
            loading: `lazy`,
            onError: () => i(!0),
            className: `absolute inset-0 z-20 h-full w-full object-cover object-top transition-all duration-500 group-hover:scale-[1.03] group-hover:brightness-110`
        }) : (0, R.jsxs)(`div`, {
            className: `relative flex h-full w-full flex-col`,
            children: [(0, R.jsxs)(`div`, {
                className: `flex items-center gap-1.5 border-b border-edge/60 px-4 py-2.5`,
                children: [(0, R.jsx)(`span`, {
                    className: `h-2 w-2 rounded-full bg-zinc-700`
                }), (0, R.jsx)(`span`, {
                    className: `h-2 w-2 rounded-full bg-zinc-700`
                }), (0, R.jsx)(`span`, {
                    className: `h-2 w-2 rounded-full bg-zinc-700`
                }), (0, R.jsx)(`span`, {
                    className: `ml-3 flex-1 rounded-md bg-white/5 px-2 py-0.5 font-mono text-[10px] text-zinc-600`,
                    children: e.name.toLowerCase().replace(/\s+/g, `-`)
                })]
            }), (0, R.jsxs)(`div`, {
                className: `relative flex flex-1 items-center justify-center`,
                children: [(0, R.jsx)(`div`, {
                    className: `grid-bg absolute inset-0`,
                    "aria-hidden": `true`
                }), (0, R.jsx)(`span`, {
                    className: `font-display text-5xl font-bold tracking-tight text-white/5 transition-colors duration-500 group-hover:text-white/10 md:text-6xl`,
                    "aria-hidden": `true`,
                    children: e.glyph
                })]
            })]
        }), (0, R.jsx)(`div`, {
            className: `pointer-events-none absolute left-4 top-4 z-30`,
            children: (0, R.jsx)(`span`, {
                className: `rounded-full border border-edge bg-ink/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-400 backdrop-blur`,
                children: e.category
            })
        }), (0, R.jsx)(`div`, {
            className: `pointer-events-none absolute right-4 top-4 z-30`,
            children: (0, R.jsx)(cp, {
                status: e.status,
                className: `bg-ink/80 backdrop-blur`
            })
        }), e.achievement && (0, R.jsxs)(`div`, {
            className: `pointer-events-none absolute inset-x-0 bottom-0 z-30 flex items-center gap-2 bg-gradient-to-t from-black/85 via-black/60 to-transparent px-4 pb-3 pt-8`,
            children: [(0, R.jsx)(tf, {
                className: `h-4 w-4 shrink-0 text-accent`,
                "aria-hidden": `true`
            }), (0, R.jsx)(`span`, {
                className: `text-xs font-bold uppercase tracking-wide text-accent`,
                children: e.achievement
            })]
        }), e.milestone && !e.achievement && (0, R.jsx)(`div`, {
            className: `pointer-events-none absolute bottom-3 left-4 z-30`,
            children: (0, R.jsxs)(`span`, {
                className: `inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300 backdrop-blur`,
                children: [(0, R.jsx)(Yd, {
                    className: `h-3 w-3`,
                    "aria-hidden": `true`
                }), e.milestone]
            })
        })]
    })
}
function _m({project: e, onOpen: t, featured: n=!1}) {
    let r = n ? 6 : 4,
        i = !!(e.links.demo || e.links.github);
    return (0, R.jsxs)(`article`, {
        onMouseMove: e => {
            let t = e.currentTarget.getBoundingClientRect();
            e.currentTarget.style.setProperty(`--mx`, `${e.clientX - t.left}px`),
            e.currentTarget.style.setProperty(`--my`, `${e.clientY - t.top}px`)
        },
        className: `card-lift spotlight-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-edge bg-panel ${n ? `lg:min-h-[480px]` : ``}`,
        children: [(0, R.jsx)(`button`, {
            type: `button`,
            onClick: t,
            "aria-label": `Open case study: ${e.name}`,
            className: `absolute inset-0 z-10 cursor-pointer`
        }), (0, R.jsx)(gm, {
            project: e,
            featured: n
        }), (0, R.jsxs)(`div`, {
            className: `relative flex flex-1 flex-col p-6`,
            children: [(0, R.jsx)(`div`, {
                className: `pointer-events-none absolute inset-0`,
                "aria-hidden": `true`,
                style: {
                    background: `radial-gradient(460px circle at var(--mx, 50%) var(--my, 50%), ${e.accent}14, transparent 55%)`
                }
            }), (0, R.jsxs)(`div`, {
                className: `flex items-center justify-between gap-3`,
                children: [(0, R.jsx)(`h4`, {
                    className: `font-display text-xl font-bold text-zinc-100`,
                    children: e.name
                }), n && (0, R.jsxs)(`span`, {
                    className: `hidden shrink-0 items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent sm:inline-flex`,
                    children: [(0, R.jsx)(tf, {
                        className: `h-3 w-3`,
                        "aria-hidden": `true`
                    }), ` Winner`]
                })]
            }), (0, R.jsx)(`p`, {
                className: `mt-2 text-sm leading-relaxed text-zinc-400`,
                children: e.oneLiner
            }), e.technologies.length > 0 && (0, R.jsxs)(`div`, {
                className: `mt-4 flex flex-wrap gap-2`,
                children: [e.technologies.slice(0, r).map((e, t) => (0, R.jsx)(`span`, {
                    style: {
                        transform: `rotate(${[-1, 1.4, -1.8, .8, -.6, 1.8][t % 6]}deg)`
                    },
                    className: `rounded-md border border-edge bg-ink px-2 py-1 font-mono text-[10px] text-zinc-400 transition-colors hover:border-accent/40 hover:text-zinc-200`,
                    children: e
                }, e)), e.technologies.length > r && (0, R.jsxs)(`span`, {
                    className: `rounded-md border border-edge bg-ink px-2 py-1 font-mono text-[10px] text-zinc-500`,
                    children: [`+`, e.technologies.length - r]
                })]
            }), (0, R.jsxs)(`div`, {
                className: `mt-auto flex items-center justify-between pt-6`,
                children: [(0, R.jsxs)(`span`, {
                    className: `inline-flex items-center gap-1.5 rounded-md border border-accent/40 bg-accent/10 px-4 py-2 font-mono text-xs font-bold tracking-wider text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-ink`,
                    children: [`[ open case study ]`, (0, R.jsx)(jd, {
                        className: `h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5`,
                        "aria-hidden": `true`
                    })]
                }), i && (0, R.jsxs)(`span`, {
                    className: `relative z-20 flex items-center gap-2`,
                    children: [e.links.github && (0, R.jsx)(`a`, {
                        href: e.links.github,
                        target: `_blank`,
                        rel: `noreferrer`,
                        "aria-label": `${e.name} source code on GitHub`,
                        className: `rounded-lg border border-edge bg-ink p-2 text-zinc-400 transition-colors hover:border-accent/50 hover:text-accent`,
                        children: (0, R.jsx)(kf, {
                            className: `h-4 w-4`
                        })
                    }), e.links.demo && (0, R.jsx)(`a`, {
                        href: e.links.demo,
                        target: `_blank`,
                        rel: `noreferrer`,
                        "aria-label": `${e.name} live demo`,
                        className: `rounded-lg border border-edge bg-ink p-2 text-zinc-400 transition-colors hover:border-accent/50 hover:text-accent`,
                        children: (0, R.jsx)(Bd, {
                            className: `h-4 w-4`
                        })
                    })]
                })]
            })]
        })]
    })
}
var vm = 3,
    ym = [{
        project: Gf[0],
        chapter: `SHIPPED & LIVE`
    }, {
        project: Gf[3],
        chapter: `IN DEVELOPMENT`
    }, {
        project: null,
        chapter: `WHAT'S NEXT`
    }],
    bm = [{
        label: `SHIPPED & LIVE`,
        range: [0, 1 / 3]
    }, {
        label: `IN DEVELOPMENT`,
        range: [1 / 3, 2 / 3]
    }, {
        label: `WHAT'S NEXT`,
        range: [2 / 3, 1]
    }];
function xm({text: e, progress: t}) {
    let n = e.split(` `),
        r = n.length;
    return (0, R.jsx)(R.Fragment, {
        children: n.map((e, n) => {
            let i = q(t, [n / r, (n + 1) / r], [0, 1]),
                a = q(t, [n / r, (n + 1) / r], [8, 0]);
            return (0, R.jsxs)(G.span, {
                className: `inline-block whitespace-pre`,
                style: {
                    opacity: i,
                    y: a
                },
                children: [e, ` `]
            }, n)
        })
    })
}
function Sm({index: e, label: t, range: n, progress: r, onClick: i}) {
    let a = q(r, e => Math.min(1, Math.max(0, (e - n[0]) / (n[1] - n[0]))));
    return (0, R.jsxs)(`button`, {
        type: `button`,
        onClick: i,
        "aria-label": `Go to project pair ${e + 1}`,
        className: `group flex flex-col gap-2 text-left`,
        children: [(0, R.jsxs)(`span`, {
            className: `flex items-baseline gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 transition-colors group-hover:text-zinc-300`,
            children: [(0, R.jsxs)(`span`, {
                className: `text-accent`,
                children: [`0`, e + 1]
            }), t]
        }), (0, R.jsx)(`span`, {
            className: `relative h-px w-full overflow-hidden bg-white/10`,
            children: (0, R.jsx)(G.span, {
                className: `absolute inset-0 origin-left bg-accent`,
                style: {
                    scaleX: a
                }
            })
        })]
    })
}
function Cm({project: e, index: t, isLast: n, ms: r, onExplore: i, onCaseStudy: a}) {
    let o = e => {
            let t = e.currentTarget.getBoundingClientRect();
            e.currentTarget.style.setProperty(`--mx`, `${e.clientX - t.left}px`),
            e.currentTarget.style.setProperty(`--my`, `${e.clientY - t.top}px`)
        },
        s = q(r.opacity, e => e),
        c = q(r.y, e => e),
        l = q(r.bgScale, e => e),
        u = q(r.glyphX, e => e),
        d = q(r.pointerEvents, e => e);
    return (0, R.jsxs)(G.div, {
        className: `absolute inset-0`,
        style: {
            opacity: s,
            y: c,
            pointerEvents: d
        },
        children: [(0, R.jsxs)(G.div, {
            className: `absolute inset-0`,
            style: {
                scale: l
            },
            "aria-hidden": `true`,
            children: [(0, R.jsx)(`div`, {
                className: `absolute inset-0`,
                style: {
                    background: `radial-gradient(110% 90% at 70% 0%, ${e.accent}26 0%, transparent 55%), linear-gradient(180deg, var(--color-panel) 0%, var(--color-ink) 100%)`
                }
            }), (0, R.jsx)(`div`, {
                className: `grid-bg absolute inset-0 opacity-50`
            })]
        }), (0, R.jsxs)(`article`, {
            onMouseMove: o,
            className: `spotlight-card group relative h-full w-full overflow-hidden`,
            "aria-label": e.name,
            children: [(0, R.jsx)(G.span, {
                style: {
                    x: u
                },
                className: `pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 font-display text-[clamp(10rem,26vw,26rem)] font-bold leading-none tracking-tight text-white/[0.04] transition-colors duration-700 group-hover:text-white/[0.07]`,
                "aria-hidden": `true`,
                children: e.glyph
            }), (0, R.jsxs)(`span`, {
                className: `absolute left-6 top-6 font-mono text-[11px] tracking-[0.3em] text-zinc-600 md:left-10 md:top-10`,
                children: [`0`, t + 1, ` `, (0, R.jsxs)(`span`, {
                    className: `text-zinc-700`,
                    children: [`/ 0`, vm]
                })]
            }), (0, R.jsxs)(`div`, {
                className: `relative z-10 flex h-full flex-col justify-end p-6 pb-14 md:p-16 md:pb-20 lg:pl-24 xl:pr-72`,
                children: [(0, R.jsxs)(`div`, {
                    className: `flex items-center gap-3`,
                    children: [(0, R.jsx)(`span`, {
                        className: `font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-500`,
                        children: e.category
                    }), (0, R.jsx)(cp, {
                        status: e.status
                    })]
                }), (0, R.jsx)(`h4`, {
                    className: `mt-5 font-display text-[clamp(2.8rem,8.5vw,7.5rem)] font-bold leading-[0.95] tracking-tight text-zinc-100`,
                    children: t === 0 ? e.name : (0, R.jsx)(xm, {
                        text: e.name,
                        progress: r.opacity
                    })
                }), (0, R.jsx)(`p`, {
                    className: `mt-5 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-lg`,
                    children: e.oneLiner
                }), (0, R.jsxs)(`div`, {
                    className: `mt-9 flex flex-wrap items-center gap-3`,
                    children: [e.image && (0, R.jsxs)(`button`, {
                        type: `button`,
                        onClick: () => i(e),
                        className: `btn-accent`,
                        children: [(0, R.jsx)(Kd, {
                            className: `h-4 w-4`,
                            "aria-hidden": `true`
                        }), ` Open Interface`]
                    }), e.shipped && (0, R.jsxs)(`button`, {
                        type: `button`,
                        onClick: () => a(e),
                        "aria-label": `Open case study: ${e.name}`,
                        className: `inline-flex items-center gap-2 rounded-lg border border-edge bg-ink/60 px-4 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-accent/50 hover:text-white`,
                        children: [(0, R.jsx)(Pd, {
                            className: `h-4 w-4`,
                            "aria-hidden": `true`
                        }), ` Case Study`]
                    })]
                })]
            })]
        })]
    })
}
function wm({ms: e, index: t}) {
    let n = [Gf[1], Gf[2], Gf[4], Gf[5]],
        r = q(e.opacity, e => e),
        i = q(e.y, e => e),
        a = q(e.bgScale, e => e),
        o = q(e.pointerEvents, e => e);
    return (0, R.jsxs)(G.div, {
        className: `absolute inset-0`,
        style: {
            opacity: r,
            y: i,
            pointerEvents: o
        },
        children: [(0, R.jsxs)(G.div, {
            className: `absolute inset-0`,
            style: {
                scale: a
            },
            "aria-hidden": `true`,
            children: [(0, R.jsx)(`div`, {
                className: `absolute inset-0`,
                style: {
                    background: `radial-gradient(110% 90% at 30% 0%, rgba(214,255,77,0.10) 0%, transparent 55%), linear-gradient(180deg, var(--color-panel) 0%, var(--color-ink) 100%)`
                }
            }), (0, R.jsx)(`div`, {
                className: `grid-bg absolute inset-0 opacity-50`
            })]
        }), (0, R.jsxs)(`div`, {
            className: `relative z-10 flex h-full flex-col justify-end p-6 pb-14 md:p-16 md:pb-20 lg:pl-24 xl:pr-72`,
            children: [(0, R.jsxs)(`div`, {
                className: `flex items-center gap-3`,
                children: [(0, R.jsx)(`span`, {
                    className: `font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-accent`,
                    children: `what's next`
                }), (0, R.jsxs)(`span`, {
                    className: `font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600`,
                    children: [`0`, t + 1, ` / 0`, vm]
                })]
            }), (0, R.jsx)(`h4`, {
                className: `mt-5 max-w-3xl font-display text-[clamp(2.4rem,7vw,6rem)] font-bold leading-[0.95] tracking-tight text-zinc-100`,
                children: `More projects are being built right now.`
            }), (0, R.jsx)(`div`, {
                className: `mt-8 flex flex-wrap gap-x-10 gap-y-3`,
                children: n.map((e, t) => (0, R.jsxs)(`span`, {
                    className: `flex items-baseline gap-2 font-mono text-sm text-zinc-400`,
                    children: [(0, R.jsxs)(`span`, {
                        className: `text-accent`,
                        children: [`0`, t + 1]
                    }), ` `, e.name]
                }, e.id))
            }), (0, R.jsxs)(`div`, {
                className: `mt-10 flex flex-wrap items-center gap-3`,
                children: [(0, R.jsxs)(`button`, {
                    type: `button`,
                    onClick: () => {
                        let e = document.getElementById(`now`);
                        e && (window.__lenis ? window.__lenis.scrollTo(e, {
                            offset: 0,
                            duration: 1.2
                        }) : e.scrollIntoView())
                    },
                    className: `btn-accent`,
                    children: [`See what I'm building now `, (0, R.jsx)(jd, {
                        className: `h-4 w-4`,
                        "aria-hidden": `true`
                    })]
                }), (0, R.jsx)(`span`, {
                    className: `font-mono text-xs uppercase tracking-wider text-zinc-500`,
                    children: `or keep scrolling for the full list`
                })]
            })]
        })]
    })
}
function Tm({onExplore: e, onCaseStudy: t}) {
    return (0, R.jsx)(`div`, {
        className: `grid gap-6 md:grid-cols-2`,
        children: Gf.map(n => (0, R.jsxs)(`article`, {
            className: `card-lift relative flex flex-col overflow-hidden rounded-2xl border border-edge bg-panel p-7`,
            children: [(0, R.jsx)(`div`, {
                className: `grid-bg absolute inset-0 opacity-60`,
                "aria-hidden": `true`
            }), (0, R.jsxs)(`div`, {
                className: `relative z-10`,
                children: [(0, R.jsx)(`span`, {
                    className: `font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-500`,
                    children: n.category
                }), (0, R.jsx)(`h4`, {
                    className: `mt-3 font-display text-3xl font-bold tracking-tight text-zinc-100`,
                    children: n.name
                }), (0, R.jsx)(`p`, {
                    className: `mt-3 text-sm leading-relaxed text-zinc-400`,
                    children: n.oneLiner
                }), (0, R.jsxs)(`div`, {
                    className: `mt-6 flex flex-wrap items-center gap-3`,
                    children: [n.image && (0, R.jsxs)(`button`, {
                        type: `button`,
                        onClick: () => e(n),
                        className: `btn-accent`,
                        children: [(0, R.jsx)(Kd, {
                            className: `h-4 w-4`,
                            "aria-hidden": `true`
                        }), ` Open Interface`]
                    }), n.shipped && (0, R.jsxs)(`button`, {
                        type: `button`,
                        onClick: () => t(n),
                        "aria-label": `Open case study: ${n.name}`,
                        className: `inline-flex items-center gap-2 rounded-lg border border-edge bg-ink/60 px-4 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-accent/50 hover:text-white`,
                        children: [(0, R.jsx)(Pd, {
                            className: `h-4 w-4`,
                            "aria-hidden": `true`
                        }), ` Case Study`]
                    })]
                })]
            })]
        }, n.id))
    })
}
function Em({onExplore: e, onCaseStudy: t}) {
    let n = bd(),
        r = (0, _.useRef)(null),
        {scrollYProgress: i} = fd({
            target: r,
            offset: [`start 0%`, `end 100%`]
        }),
        a = ym.map((e, t) => {
            let n = t / vm,
                r = (t + 1) / vm,
                a = n,
                o = n + .1,
                s = r - .1,
                c = r,
                l = t === 0,
                u = t === 2;
            return {
                opacity: q(i, l ? [n, s, c] : u ? [a, o, s] : [a, o, s, c], l ? [1, 1, 0] : u ? [0, 1, 1] : [0, 1, 1, 0]),
                y: q(i, l ? [n, s, c] : u ? [a, o, s] : [a, o, s, c], l ? [0, 0, -180] : u ? [180, 0, 0] : [180, 0, 0, -180]),
                bgScale: q(i, [n, o], [1.12, 1]),
                glyphX: q(i, [n, o], [120, 0]),
                pointerEvents: q(i, l ? [n, s, c] : u ? [a, o, s] : [a, o, s, c], l ? [`auto`, `auto`, `none`] : u ? [`none`, `auto`, `auto`] : [`none`, `auto`, `auto`, `none`])
            }
        }),
        o = (0, _.useRef)([]);
    Cu(i, `change`, e => {
        let t = Math.min(2, Math.floor(e * vm));
        o.current.forEach((e, n) => {
            e && (e.style.backgroundColor = n <= t ? `var(--color-accent)` : `rgba(255,255,255,0.18)`)
        }),
        document.querySelectorAll(`[data-counter]`).forEach(e => {
            e.textContent = String(t + 1).padStart(2, `0`)
        })
    });
    let s = e => () => {
        let t = r.current;
        if (!t)
            return;
        let i = t.getBoundingClientRect().top + window.scrollY,
            a = t.getBoundingClientRect().height - window.innerHeight;
        window.scrollTo({
            top: i + (e + .5) / vm * a,
            behavior: n ? `auto` : `smooth`
        })
    };
    return (0, R.jsx)(`section`, {
        ref: r,
        id: `showcase`,
        className: `relative ${n ? `` : `h-[300vh] max-md:h-auto`}`,
        children: (0, R.jsx)(`div`, {
            className: n ? `relative overflow-hidden py-6` : `sticky top-0 flex h-svh items-center overflow-hidden max-md:static max-md:h-auto max-md:items-stretch max-md:overflow-visible`,
            children: n ? (0, R.jsx)(Tm, {
                onExplore: e,
                onCaseStudy: t
            }) : (0, R.jsxs)(R.Fragment, {
                children: [(0, R.jsxs)(`div`, {
                    className: `relative hidden h-full w-full md:block`,
                    children: [a.map((n, r) => ym[r].project ? (0, R.jsx)(Cm, {
                        project: ym[r].project,
                        index: r,
                        isLast: r === 2,
                        ms: n,
                        onExplore: e,
                        onCaseStudy: t
                    }, r) : (0, R.jsx)(wm, {
                        ms: n,
                        index: r
                    }, r)), (0, R.jsxs)(`div`, {
                        className: `absolute right-6 top-1/2 z-30 hidden w-44 -translate-y-1/2 flex-col gap-7 xl:flex`,
                        children: [bm.map((e, t) => (0, R.jsx)(Sm, {
                            index: t,
                            label: e.label,
                            range: e.range,
                            progress: i,
                            onClick: s(t)
                        }, e.label)), (0, R.jsxs)(`span`, {
                            className: `mt-2 flex items-center gap-1 font-mono text-[10px] tracking-[0.2em] text-zinc-500`,
                            children: [(0, R.jsx)(`span`, {
                                "data-counter": !0,
                                children: `01`
                            }), (0, R.jsx)(`span`, {
                                className: `text-zinc-700`,
                                children: `/ 03`
                            })]
                        })]
                    }), (0, R.jsxs)(`div`, {
                        className: `absolute right-5 top-1/2 z-30 flex -translate-y-1/2 flex-col items-center gap-2.5 xl:hidden`,
                        children: [(0, R.jsx)(`div`, {
                            className: `flex flex-col items-center gap-2.5`,
                            children: ym.map((e, t) => (0, R.jsx)(`button`, {
                                type: `button`,
                                onClick: s(t),
                                "aria-label": `Go to project pair ${t + 1}`,
                                className: `h-1 w-6 rounded-full transition-colors`,
                                style: {
                                    backgroundColor: t === 0 ? `var(--color-accent)` : `rgba(255,255,255,0.18)`
                                }
                            }, t))
                        }), (0, R.jsxs)(`span`, {
                            className: `mt-4 flex items-center gap-1 font-mono text-[10px] tracking-[0.2em] text-zinc-500`,
                            children: [(0, R.jsx)(`span`, {
                                "data-counter": !0,
                                children: `01`
                            }), (0, R.jsx)(`span`, {
                                className: `text-zinc-700`,
                                children: `/ 03`
                            })]
                        })]
                    }), (0, R.jsxs)(`div`, {
                        className: `pointer-events-none absolute bottom-6 left-1/2 z-30 -translate-x-1/2 flex-col items-center gap-2`,
                        children: [(0, R.jsx)(`span`, {
                            className: `font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600`,
                            children: `scroll to flip`
                        }), (0, R.jsx)(`span`, {
                            className: `h-8 w-px animate-pulse bg-gradient-to-b from-accent/60 to-transparent`
                        })]
                    })]
                }), (0, R.jsx)(`div`, {
                    className: `flex flex-col gap-6 py-6 md:hidden`,
                    children: Gf.map(n => (0, R.jsxs)(`article`, {
                        className: `card-lift relative flex flex-col overflow-hidden rounded-2xl border border-edge bg-panel p-7`,
                        children: [(0, R.jsx)(`div`, {
                            className: `grid-bg absolute inset-0 opacity-60`,
                            "aria-hidden": `true`
                        }), (0, R.jsxs)(`div`, {
                            className: `relative z-10`,
                            children: [(0, R.jsx)(`span`, {
                                className: `font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-500`,
                                children: n.category
                            }), (0, R.jsx)(`h4`, {
                                className: `mt-3 font-display text-3xl font-bold tracking-tight text-zinc-100`,
                                children: n.name
                            }), (0, R.jsx)(`p`, {
                                className: `mt-3 text-sm leading-relaxed text-zinc-400`,
                                children: n.oneLiner
                            }), (0, R.jsxs)(`div`, {
                                className: `mt-6 flex flex-wrap items-center gap-3`,
                                children: [n.image && (0, R.jsxs)(`button`, {
                                    type: `button`,
                                    onClick: () => e(n),
                                    className: `btn-accent`,
                                    children: [(0, R.jsx)(Kd, {
                                        className: `h-4 w-4`,
                                        "aria-hidden": `true`
                                    }), ` Open Interface`]
                                }), n.shipped && (0, R.jsxs)(`button`, {
                                    type: `button`,
                                    onClick: () => t(n),
                                    "aria-label": `Open case study: ${n.name}`,
                                    className: `inline-flex items-center gap-2 rounded-lg border border-edge bg-ink/60 px-4 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-accent/50 hover:text-white`,
                                    children: [(0, R.jsx)(Pd, {
                                        className: `h-4 w-4`,
                                        "aria-hidden": `true`
                                    }), ` Case Study`]
                                })]
                            })]
                        })]
                    }, n.id))
                })]
            })
        })
    })
}
function Dm({label: e, note: t, dotClass: n}) {
    return (0, R.jsxs)(Q, {
        className: `mt-20 flex flex-wrap items-center gap-4 first:mt-14`,
        children: [(0, R.jsx)(`span`, {
            className: `h-2.5 w-2.5 -rotate-45 rounded-[3px] ${n}`,
            "aria-hidden": `true`
        }), (0, R.jsxs)(`h3`, {
            className: `font-mono text-sm font-bold uppercase tracking-[0.3em] text-zinc-100`,
            children: [`[ `, e, ` ]`]
        }), (0, R.jsx)(`span`, {
            className: `h-px flex-1 bg-gradient-to-r from-edge to-transparent`,
            "aria-hidden": `true`
        }), (0, R.jsx)(`span`, {
            className: `font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500`,
            children: t
        })]
    })
}
function Om({progress: e, range: t, children: n}) {
    let r = bd(),
        i = q(e, [0, 1], t);
    return r ? (0, R.jsx)(R.Fragment, {
        children: n
    }) : (0, R.jsx)(G.div, {
        style: {
            y: i
        },
        children: n
    })
}
function km({projects: e, onExplore: t}) {
    let n = (0, _.useRef)(null),
        r = (0, _.useRef)({
            down: !1,
            startX: 0,
            startScroll: 0,
            moved: !1,
            projectId: null
        }),
        i = bd(),
        a = e => {
            let t = n.current;
            if (!t)
                return;
            let i = e.target.closest(`button[data-project]`);
            r.current = {
                down: !0,
                startX: e.clientX,
                startScroll: t.scrollLeft,
                moved: !1,
                projectId: i ? i.dataset.project : null
            },
            t.setPointerCapture?.(e.pointerId)
        },
        o = e => {
            let t = r.current,
                i = n.current;
            if (!t.down || !i || e.pointerType === `touch`)
                return;
            let a = e.clientX - t.startX;
            Math.abs(a) > 6 && (t.moved = !0),
            t.moved && (i.scrollLeft = t.startScroll - a)
        },
        s = () => {
            let n = r.current;
            if (r.current.down = !1, !n.moved && n.projectId) {
                let r = e.find(e => e.id === n.projectId);
                r && t(r)
            }
        },
        c = () => {
            r.current.down = !1
        },
        l = e => () => {
            let t = n.current;
            t && t.scrollBy({
                left: e * Math.round(t.clientWidth * .7),
                behavior: i ? `auto` : `smooth`
            })
        };
    return (0, R.jsxs)(`div`, {
        className: `mt-16`,
        children: [(0, R.jsxs)(`div`, {
            className: `flex items-end justify-between gap-4`,
            children: [(0, R.jsxs)(`div`, {
                children: [(0, R.jsx)(`p`, {
                    className: `font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-accent`,
                    children: `pick a project`
                }), (0, R.jsx)(`h3`, {
                    className: `mt-2 font-display text-2xl font-bold text-zinc-100 md:text-3xl`,
                    children: `Which one do you want to explore?`
                }), (0, R.jsx)(`p`, {
                    className: `mt-2 font-mono text-xs uppercase tracking-wider text-zinc-500`,
                    children: `drag the deck — every card opens its interface fullscreen`
                })]
            }), (0, R.jsxs)(`div`, {
                className: `hidden shrink-0 gap-2 sm:flex`,
                children: [(0, R.jsx)(`button`, {
                    type: `button`,
                    onClick: l(-1),
                    "aria-label": `Scroll projects left`,
                    className: `rounded-lg border border-edge bg-panel p-2.5 text-zinc-300 transition-colors hover:border-accent/50 hover:text-accent`,
                    children: (0, R.jsx)(Ad, {
                        className: `h-4 w-4`
                    })
                }), (0, R.jsx)(`button`, {
                    type: `button`,
                    onClick: l(1),
                    "aria-label": `Scroll projects right`,
                    className: `rounded-lg border border-edge bg-panel p-2.5 text-zinc-300 transition-colors hover:border-accent/50 hover:text-accent`,
                    children: (0, R.jsx)(jd, {
                        className: `h-4 w-4`
                    })
                })]
            })]
        }), (0, R.jsxs)(`div`, {
            ref: n,
            onPointerDown: a,
            onPointerMove: o,
            onPointerUp: s,
            onPointerLeave: c,
            onPointerCancel: c,
            className: `scrollbar-hide -mx-6 mt-8 flex cursor-grab snap-x gap-6 overflow-x-auto px-6 pb-4 select-none active:cursor-grabbing md:-mx-10 md:px-10`,
            style: {
                touchAction: `pan-x`
            },
            children: [(0, R.jsx)(`div`, {
                className: `w-72 shrink-0 snap-start`,
                children: (0, R.jsxs)(`div`, {
                    className: `flex h-full min-h-[264px] flex-col justify-between rounded-2xl border border-accent/40 bg-accent/5 p-6`,
                    children: [(0, R.jsxs)(`div`, {
                        children: [(0, R.jsx)(`p`, {
                            className: `font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-accent`,
                            children: `explore deck`
                        }), (0, R.jsx)(`p`, {
                            className: `mt-3 font-display text-2xl font-bold leading-snug text-zinc-100`,
                            children: `Which one do you want to explore?`
                        })]
                    }), (0, R.jsx)(`p`, {
                        className: `mt-6 text-xs leading-relaxed text-zinc-400`,
                        children: `drag the deck and pick a card — it opens the project interface in fullscreen. exit anytime.`
                    })]
                })
            }), e.map(e => (0, R.jsxs)(`button`, {
                type: `button`,
                "data-project": e.id,
                onClick: () => t(e),
                "aria-label": `Explore ${e.name} in fullscreen`,
                className: `card-lift group relative w-72 shrink-0 snap-start overflow-hidden rounded-2xl border border-edge bg-panel text-left`,
                children: [(0, R.jsxs)(`div`, {
                    className: `relative h-32 overflow-hidden`,
                    style: {
                        background: `radial-gradient(120% 140% at 15% 0%, ${e.accent}26 0%, transparent 55%), linear-gradient(180deg, var(--color-panel) 0%, var(--color-ink) 100%)`
                    },
                    children: [(0, R.jsx)(`div`, {
                        className: `grid-bg absolute inset-0`,
                        "aria-hidden": `true`
                    }), (0, R.jsx)(`span`, {
                        className: `absolute left-4 top-4 font-display text-4xl font-bold tracking-tight text-white/10 transition-colors duration-500 group-hover:text-white/20`,
                        "aria-hidden": `true`,
                        children: e.glyph
                    }), (0, R.jsx)(`div`, {
                        className: `absolute right-3 top-3`,
                        children: (0, R.jsx)(cp, {
                            status: e.status,
                            className: `bg-ink/80 backdrop-blur`
                        })
                    }), (0, R.jsx)(`span`, {
                        className: `absolute bottom-3 left-4 rounded-full border border-edge bg-ink/80 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-zinc-400 backdrop-blur`,
                        children: e.category
                    })]
                }), (0, R.jsxs)(`div`, {
                    className: `p-5`,
                    children: [(0, R.jsx)(`p`, {
                        className: `font-display text-lg font-bold text-zinc-100`,
                        children: e.name
                    }), (0, R.jsx)(`p`, {
                        className: `mt-1 line-clamp-2 text-xs leading-relaxed text-zinc-500`,
                        children: e.oneLiner
                    }), (0, R.jsxs)(`div`, {
                        className: `mt-4 flex items-center justify-between border-t border-edge/60 pt-3`,
                        children: [(0, R.jsx)(`span`, {
                            className: `font-mono text-[10px] font-bold uppercase tracking-wider text-accent transition-colors group-hover:underline`,
                            children: `explore fullscreen`
                        }), (0, R.jsx)(Kd, {
                            className: `h-3.5 w-3.5 text-zinc-600 transition-colors group-hover:text-accent`,
                            "aria-hidden": `true`
                        })]
                    })]
                })]
            }, e.id))]
        })]
    })
}
function Am({onOpenProject: e, onExploreProject: t}) {
    let n = (0, _.useRef)(null),
        {scrollYProgress: r} = fd({
            target: n,
            offset: [`start end`, `end start`]
        }),
        i = Gf.filter(e => e.shipped),
        a = Gf.filter(e => !e.shipped);
    return (0, R.jsx)(`section`, {
        id: `work`,
        ref: n,
        className: `relative py-28 md:py-36`,
        children: (0, R.jsxs)(`div`, {
            className: `relative mx-auto w-full max-w-6xl px-6 md:px-10`,
            children: [(0, R.jsx)(sf, {
                eyebrow: `Work`,
                title: `Shipped — and what's next.`,
                description: `I keep two honest lists: things that are live or won, and things I'm actively building right now. Nothing here is pretend-finished.`,
                chapter: `03`
            }), (0, R.jsx)(Em, {
                onExplore: t,
                onCaseStudy: e
            }), (0, R.jsx)(km, {
                projects: Gf,
                onExplore: t
            }), (0, R.jsx)(Dm, {
                label: `SHIPPED`,
                note: `live, deployed, or competition winners`,
                dotClass: `bg-emerald-400`
            }), (0, R.jsx)(`div`, {
                className: `mt-8 grid gap-6 lg:grid-cols-3`,
                children: i.map((t, n) => (0, R.jsx)(Om, {
                    progress: r,
                    range: n === 0 ? [56, -56] : n % 2 == 0 ? [38, -38] : [16, -16],
                    children: (0, R.jsx)(Q, {
                        delay: n * .08,
                        className: n === 0 ? `lg:col-span-2` : ``,
                        children: (0, R.jsx)(_m, {
                            project: t,
                            featured: n === 0,
                            onOpen: () => e(t)
                        })
                    })
                }, t.id))
            }), (0, R.jsx)(Dm, {
                label: `BUILDING`,
                note: `in progress — being built right now`,
                dotClass: `bg-amber-400`
            }), (0, R.jsx)(`div`, {
                className: `mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3`,
                children: a.map((t, n) => (0, R.jsx)(Om, {
                    progress: r,
                    range: n % 2 == 0 ? [34, -34] : [14, -14],
                    children: (0, R.jsx)(Q, {
                        delay: n * .08,
                        children: (0, R.jsx)(_m, {
                            project: t,
                            onOpen: () => e(t)
                        })
                    })
                }, t.id))
            })]
        })
    })
}
function jm() {
    let [e, t] = (0, _.useState)(0);
    return (0, _.useEffect)(() => {
        let e = null,
            n = () => {
                let n = document.documentElement.scrollHeight - window.innerHeight;
                t(n > 0 ? Math.min(100, window.scrollY / n * 100) : 0),
                e = null
            },
            r = () => {
                e ||= requestAnimationFrame(n)
            };
        return n(), window.addEventListener(`scroll`, r, {
            passive: !0
        }), window.addEventListener(`resize`, r, {
            passive: !0
        }), () => {
            window.removeEventListener(`scroll`, r),
            window.removeEventListener(`resize`, r),
            e && cancelAnimationFrame(e)
        }
    }, []), (0, R.jsx)(`div`, {
        "aria-hidden": `true`,
        className: `fixed inset-x-0 top-0 z-[70] h-[3px] bg-transparent`,
        children: (0, R.jsx)(`div`, {
            className: `h-full bg-accent transition-[width] duration-150 ease-out`,
            style: {
                width: `${e}%`
            }
        })
    })
}
var Mm = [{
    title: "Programming",
    items: ["Python", "JavaScript", "HTML", "CSS", "SQL"]
}, {
    title: "Web",
    items: ["React", "Node.js", "Flask", "REST APIs", "Vercel", "Render"]
}, {
    title: "AI / ML",
    items: ["Pandas", "Scikit-learn", "NLP", "Streamlit"]
}, {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "APIs", "Deployment"]
}];
    Nm = [`Data Structures & Algorithms`, `LeetCode`, `NeetCode`, `Advanced TypeScript & React`, `PWA & Offline-First`, `Game Development`, `AI-assisted Development`, `Cybersecurity`],
    Pm = {
        platforms: [{
            name: `LeetCode`,
            url: `https://leetcode.com/u/Aryan_Mittal12312/`
        }, {
            name: `NeetCode`,
            url: `https://neetcode.io/user/GrandLuxray263`
        }],
        topics: [`Arrays`, `Strings`, `Hash Maps`, `Linked Lists`]
    },
    Fm = [-1.5, 1, -.8, 1.6, -1.2, .9, -1, 1.3, -.7],
    Im = [{
        tape: `tape`,
        chip: `border-accent/25 bg-accent/5 hover:border-accent/60 hover:bg-accent/10`,
        text: `text-accent`
    }, {
        tape: `tape tape-blue`,
        chip: `border-[#5b9dff]/25 bg-[#5b9dff]/5 hover:border-[#5b9dff]/60 hover:bg-[#5b9dff]/10`,
        text: `text-[#7db4ff]`
    }, {
        tape: `tape tape-purple`,
        chip: `border-[#a78bfa]/25 bg-[#a78bfa]/5 hover:border-[#a78bfa]/60 hover:bg-[#a78bfa]/10`,
        text: `text-[#c4b5fd]`
    }];
function Lm() {
    let e = Pm.topics;
    return (0, R.jsx)(`section`, {
        id: `skills`,
        className: `relative py-28 md:py-36`,
        children: (0, R.jsxs)(`div`, {
            className: `mx-auto w-full max-w-6xl px-6 md:px-10`,
            children: [(0, R.jsx)(sf, {
                eyebrow: `Skills`,
                title: `Technologies I build with.`,
                description: `Categorized and honest — no percentage bars, because a skill isn't a loading bar.`,
                chapter: `07`
            }), (0, R.jsxs)(`div`, {
                className: `mt-16 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]`,
                children: [(0, R.jsx)(`div`, {
                    className: `space-y-10`,
                    children: Mm.map((e, t) => {
                        let n = Im[t % Im.length];
                        return (0, R.jsx)(Q, {
                            delay: t * .06,
                            children: (0, R.jsxs)(`div`, {
                                className: `card-lift relative rounded-2xl border border-edge bg-panel p-7 ${t % 2 == 0 ? `-rotate-[0.6deg]` : `rotate-[0.5deg]`}`,
                                children: [(0, R.jsx)(`span`, {
                                    className: `${n.tape}`,
                                    "aria-hidden": `true`
                                }), (0, R.jsxs)(`div`, {
                                    className: `flex items-baseline justify-between gap-4`,
                                    children: [(0, R.jsxs)(`h3`, {
                                        className: `font-mono text-[11px] font-semibold uppercase tracking-[0.3em] ${n.text}`,
                                        children: [`// `, e.title]
                                    }), (0, R.jsxs)(`span`, {
                                        className: `font-mono text-[10px] text-zinc-600`,
                                        children: [`0`, t + 1]
                                    })]
                                }), (0, R.jsx)(`div`, {
                                    className: `mt-5 flex flex-wrap gap-2.5`,
                                    children: e.items.map((e, t) => (0, R.jsx)(`span`, {
                                        style: {
                                            transform: `rotate(${Fm[t % Fm.length]}deg)`
                                        },
                                        className: `rounded-lg border px-3 py-1.5 text-sm text-zinc-300 transition-colors ${n.chip}`,
                                        children: e
                                    }, e))
                                })]
                            })
                        }, e.title)
                    })
                }), (0, R.jsxs)(`div`, {
                    className: `space-y-10`,
                    children: [(0, R.jsx)(Q, {
                        delay: .08,
                        children: (0, R.jsxs)(`div`, {
                            className: `card-lift overflow-hidden rounded-2xl border border-edge bg-panel`,
                            children: [(0, R.jsxs)(`div`, {
                                className: `flex items-center gap-1.5 border-b border-edge bg-ink/70 px-4 py-2.5`,
                                children: [(0, R.jsx)(`span`, {
                                    className: `h-2.5 w-2.5 rounded-full bg-[#ff5f57]`,
                                    "aria-hidden": `true`
                                }), (0, R.jsx)(`span`, {
                                    className: `h-2.5 w-2.5 rounded-full bg-[#febc2e]`,
                                    "aria-hidden": `true`
                                }), (0, R.jsx)(`span`, {
                                    className: `h-2.5 w-2.5 rounded-full bg-[#28c840]`,
                                    "aria-hidden": `true`
                                }), (0, R.jsx)(`span`, {
                                    className: `ml-3 font-mono text-[10px] text-zinc-500`,
                                    children: `problem-solving.ts`
                                })]
                            }), (0, R.jsxs)(`div`, {
                                className: `p-7`,
                                children: [(0, R.jsx)(`p`, {
                                    className: `font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-accent`,
                                    children: `> Problem Solving`
                                }), (0, R.jsx)(`p`, {
                                    className: `mt-3 text-sm leading-relaxed text-zinc-400`,
                                    children: `Practicing data structures and algorithms through structured problem solving and consistent practice.`
                                }), (0, R.jsx)(`div`, {
                                    className: `mt-5 space-y-2.5`,
                                    children: Pm.platforms.map(e => e.url ? (0, R.jsxs)(`a`, {
                                        href: e.url,
                                        target: `_blank`,
                                        rel: `noreferrer`,
                                        className: `flex items-center justify-between rounded-xl border border-edge bg-ink px-4 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-accent/50 hover:text-white`,
                                        children: [e.name, (0, R.jsx)(Bd, {
                                            className: `h-4 w-4 text-accent`,
                                            "aria-hidden": `true`
                                        })]
                                    }, e.name) : (0, R.jsxs)(`div`, {
                                        className: `flex items-center justify-between rounded-xl border border-edge bg-ink px-4 py-3 text-sm font-medium text-zinc-400`,
                                        children: [e.name, (0, R.jsx)(`span`, {
                                            className: `font-mono text-[10px] uppercase tracking-wider text-zinc-600`,
                                            children: `daily practice`
                                        })]
                                    }, e.name))
                                }), e.length > 0 && (0, R.jsxs)(`div`, {
                                    className: `mt-6 border-t border-edge pt-5`,
                                    children: [(0, R.jsx)(`p`, {
                                        className: `text-xs font-semibold uppercase tracking-wide text-zinc-500`,
                                        children: `Topics practiced`
                                    }), (0, R.jsx)(`div`, {
                                        className: `mt-3 flex flex-wrap gap-1.5`,
                                        children: e.map((e, t) => (0, R.jsx)(`span`, {
                                            style: {
                                                transform: `rotate(${Fm[t % Fm.length]}deg)`
                                            },
                                            className: `rounded-md border border-edge bg-ink px-2.5 py-1 font-mono text-xs text-zinc-300`,
                                            children: e
                                        }, e))
                                    })]
                                })]
                            })]
                        })
                    }), (0, R.jsx)(Q, {
                        delay: .14,
                        children: (0, R.jsxs)(`div`, {
                            className: `card-lift relative rotate-[1.2deg] rounded-lg border border-amber-300/25 bg-amber-400/[0.07] p-7 shadow-[0_14px_34px_-14px_rgba(0,0,0,0.6)]`,
                            children: [(0, R.jsx)(`span`, {
                                className: `tape tape-amber`,
                                "aria-hidden": `true`
                            }), (0, R.jsxs)(`h3`, {
                                className: `flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-300`,
                                children: [(0, R.jsx)(Qd, {
                                    className: `h-3.5 w-3.5`,
                                    "aria-hidden": `true`
                                }), ` Currently learning`]
                            }), (0, R.jsx)(`div`, {
                                className: `mt-5 flex flex-wrap gap-2`,
                                children: Nm.map((e, t) => (0, R.jsx)(`span`, {
                                    style: {
                                        transform: `rotate(${Fm[t % Fm.length]}deg)`
                                    },
                                    className: `rounded-lg border border-amber-400/20 bg-amber-400/10 px-3 py-1.5 text-sm text-amber-200/90 transition-colors hover:border-amber-300/50 hover:bg-amber-400/20`,
                                    children: e
                                }, e))
                            })]
                        })
                    })]
                })]
            })]
        })
    })
}
var Rm = `1.3.26`;
function zm(e, t, n) {
    return Math.max(e, Math.min(t, n))
}
function Bm(e, t, n) {
    return (1 - n) * e + n * t
}
function Vm(e, t, n, r) {
    return Bm(e, t, 1 - Math.exp(-n * r))
}
function Hm(e, t) {
    return (e % t + t) % t
}
var Um = class {
    isRunning = !1;
    value = 0;
    from = 0;
    to = 0;
    currentTime = 0;
    lerp;
    duration;
    easing;
    onUpdate;
    advance(e)
    {
        if (!this.isRunning)
            return;
        let t = !1;
        if (this.duration && this.easing) {
            this.currentTime += e;
            let n = zm(0, this.currentTime / this.duration, 1);
            t = n >= 1;
            let r = t ? 1 : this.easing(n);
            this.value = this.from + (this.to - this.from) * r
        } else
            this.lerp ? (this.value = Vm(this.value, this.to, this.lerp * 60, e), Math.round(this.value) === Math.round(this.to) && (this.value = this.to, t = !0)) : (this.value = this.to, t = !0);
        t && this.stop(),
        this.onUpdate?.(this.value, t)
    }
    stop()
    {
        this.isRunning = !1
    }
    fromTo(e, t, {lerp: n, duration: r, easing: i, onStart: a, onUpdate: o})
    {
        this.from = this.value = e,
        this.to = t,
        this.lerp = n,
        this.duration = r,
        this.easing = i,
        this.currentTime = 0,
        this.isRunning = !0,
        a?.(),
        this.onUpdate = o
    }
}
;
function Wm(e, t) {
    let n;
    return function(...r) {
        clearTimeout(n),
        n = setTimeout(() => {
            n = void 0,
            e.apply(this, r)
        }, t)
    }
}
var Gm = class {
        width = 0;
        height = 0;
        scrollHeight = 0;
        scrollWidth = 0;
        debouncedResize;
        wrapperResizeObserver;
        contentResizeObserver;
        constructor(e, t, {autoResize: n=!0, debounce: r=250}={})
        {
            this.wrapper = e,
            this.content = t,
            n && (this.debouncedResize = Wm(this.resize, r), this.wrapper instanceof Window ? window.addEventListener(`resize`, this.debouncedResize) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)),
            this.resize()
        }
        destroy()
        {
            this.wrapperResizeObserver?.disconnect(),
            this.contentResizeObserver?.disconnect(),
            this.wrapper === window && this.debouncedResize && window.removeEventListener(`resize`, this.debouncedResize)
        }
        resize = () => {
            this.onWrapperResize(),
            this.onContentResize()
        };
        onWrapperResize = () => {
            this.wrapper instanceof Window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
        };
        onContentResize = () => {
            this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth)
        };
        get limit()
        {
            return {
                x: this.scrollWidth - this.width,
                y: this.scrollHeight - this.height
            }
        }
    }
    ,
    Km = class {
        events = {};
        emit(e, ...t)
        {
            let n = this.events[e] || [];
            for (let e = 0, r = n.length; e < r; e++)
                n[e]?.(...t)
        }
        on(e, t)
        {
            return this.events[e] ? this.events[e].push(t) : this.events[e] = [t], () => {
                this.events[e] = this.events[e]?.filter(e => t !== e)
            }
        }
        off(e, t)
        {
            this.events[e] = this.events[e]?.filter(e => t !== e)
        }
        destroy()
        {
            this.events = {}
        }
    }
    ,
    qm = 100 / 6,
    Jm = {
        passive: !1
    };
function Ym(e, t) {
    return e === 1 ? qm : e === 2 ? t : 1
}
var Xm = class {
        touchStart = {
            x: 0,
            y: 0
        };
        lastDelta = {
            x: 0,
            y: 0
        };
        window = {
            width: 0,
            height: 0
        };
        emitter = new Km;
        constructor(e, t={
            wheelMultiplier: 1,
            touchMultiplier: 1
        })
        {
            this.element = e,
            this.options = t,
            window.addEventListener(`resize`, this.onWindowResize),
            this.onWindowResize(),
            this.element.addEventListener(`wheel`, this.onWheel, Jm),
            this.element.addEventListener(`touchstart`, this.onTouchStart, Jm),
            this.element.addEventListener(`touchmove`, this.onTouchMove, Jm),
            this.element.addEventListener(`touchend`, this.onTouchEnd, Jm)
        }
        on(e, t)
        {
            return this.emitter.on(e, t)
        }
        destroy()
        {
            this.emitter.destroy(),
            window.removeEventListener(`resize`, this.onWindowResize),
            this.element.removeEventListener(`wheel`, this.onWheel, Jm),
            this.element.removeEventListener(`touchstart`, this.onTouchStart, Jm),
            this.element.removeEventListener(`touchmove`, this.onTouchMove, Jm),
            this.element.removeEventListener(`touchend`, this.onTouchEnd, Jm)
        }
        onTouchStart = e => {
            let {clientX: t, clientY: n} = e.targetTouches ? e.targetTouches[0] : e;
            this.touchStart.x = t,
            this.touchStart.y = n,
            this.lastDelta = {
                x: 0,
                y: 0
            },
            this.emitter.emit(`scroll`, {
                deltaX: 0,
                deltaY: 0,
                event: e
            })
        };
        onTouchMove = e => {
            let {clientX: t, clientY: n} = e.targetTouches ? e.targetTouches[0] : e,
                r = -(t - this.touchStart.x) * this.options.touchMultiplier,
                i = -(n - this.touchStart.y) * this.options.touchMultiplier;
            this.touchStart.x = t,
            this.touchStart.y = n,
            this.lastDelta = {
                x: r,
                y: i
            },
            this.emitter.emit(`scroll`, {
                deltaX: r,
                deltaY: i,
                event: e
            })
        };
        onTouchEnd = e => {
            this.emitter.emit(`scroll`, {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: e
            })
        };
        onWheel = e => {
            let {deltaX: t, deltaY: n, deltaMode: r} = e,
                i = Ym(r, this.window.width),
                a = Ym(r, this.window.height);
            t *= i,
            n *= a,
            t *= this.options.wheelMultiplier,
            n *= this.options.wheelMultiplier,
            this.emitter.emit(`scroll`, {
                deltaX: t,
                deltaY: n,
                event: e
            })
        };
        onWindowResize = () => {
            this.window = {
                width: window.innerWidth,
                height: window.innerHeight
            }
        }
    }
    ,
    Zm = e => Math.min(1, 1.001 - 2 ** (-10 * e)),
    Qm = class {
        _isScrolling = !1;
        _isStopped = !1;
        _isLocked = !1;
        _preventNextNativeScrollEvent = !1;
        _resetVelocityTimeout = null;
        _rafId = null;
        _isDraggingSelection = !1;
        reducedMotionMediaQuery = window.matchMedia(`(prefers-reduced-motion: reduce)`);
        isTouching;
        isIos;
        time = 0;
        userData = {};
        lastVelocity = 0;
        velocity = 0;
        direction = 0;
        options;
        targetScroll;
        animatedScroll;
        animate = new Um;
        emitter = new Km;
        dimensions;
        virtualScroll;
        constructor({wrapper: e=window, content: t=document.documentElement, eventsTarget: n=e, smoothWheel: r=!0, syncTouch: i=!1, syncTouchLerp: a=.075, touchInertiaExponent: o=1.7, duration: s, easing: c, lerp: l=.1, infinite: u=!1, orientation: d=`vertical`, gestureOrientation: f=d === `horizontal` ? `both` : `vertical`, touchMultiplier: p=1, wheelMultiplier: m=1, autoResize: h=!0, prevent: g, virtualScroll: _, overscroll: v=!0, autoRaf: y=!1, anchors: b=!1, autoToggle: x=!1, allowNestedScroll: S=!1, __experimental__naiveDimensions: C=!1, naiveDimensions: w=C, stopInertiaOnNavigate: ee=!1, respectReducedMotion: te=!0}={})
        {
            window.lenisVersion = Rm,
            window.lenis || (window.lenis = {}),
            window.lenis.version = Rm,
            d === `horizontal` && (window.lenis.horizontal = !0),
            i === !0 && (window.lenis.touch = !0),
            this.isIos = /(iPad|iPhone|iPod)/g.test(navigator.userAgent),
            (!e || e === document.documentElement) && (e = window),
            typeof s == `number` && typeof c != `function` ? c = Zm : typeof c == `function` && typeof s != `number` && (s = 1),
            this.options = {
                wrapper: e,
                content: t,
                eventsTarget: n,
                smoothWheel: r,
                syncTouch: i,
                syncTouchLerp: a,
                touchInertiaExponent: o,
                duration: s,
                easing: c,
                lerp: l,
                infinite: u,
                gestureOrientation: f,
                orientation: d,
                touchMultiplier: p,
                wheelMultiplier: m,
                autoResize: h,
                prevent: g,
                virtualScroll: _,
                overscroll: v,
                autoRaf: y,
                anchors: b,
                autoToggle: x,
                allowNestedScroll: S,
                naiveDimensions: w,
                stopInertiaOnNavigate: ee,
                respectReducedMotion: te
            },
            this.dimensions = new Gm(e, t, {
                autoResize: h
            }),
            this.updateClassName(),
            this.targetScroll = this.animatedScroll = this.actualScroll,
            this.options.wrapper.addEventListener(`scroll`, this.onNativeScroll),
            this.options.wrapper.addEventListener(`scrollend`, this.onScrollEnd, {
                capture: !0
            }),
            (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.addEventListener(`click`, this.onClick),
            this.options.wrapper.addEventListener(`pointerdown`, this.onPointerDown),
            this.virtualScroll = new Xm(n, {
                touchMultiplier: p,
                wheelMultiplier: m
            }),
            this.virtualScroll.on(`scroll`, this.onVirtualScroll),
            this.options.autoToggle && (this.checkOverflow(), this.rootElement.addEventListener(`transitionend`, this.onTransitionEnd)),
            this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf))
        }
        destroy()
        {
            this.emitter.destroy(),
            this.options.wrapper.removeEventListener(`scroll`, this.onNativeScroll),
            this.options.wrapper.removeEventListener(`scrollend`, this.onScrollEnd, {
                capture: !0
            }),
            this.options.wrapper.removeEventListener(`pointerdown`, this.onPointerDown),
            (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.removeEventListener(`click`, this.onClick),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.cleanUpClassName(),
            this._rafId && cancelAnimationFrame(this._rafId)
        }
        on(e, t)
        {
            return this.emitter.on(e, t)
        }
        off(e, t)
        {
            return this.emitter.off(e, t)
        }
        onScrollEnd = e => {
            e instanceof CustomEvent || (this.isScrolling === `smooth` || this.isScrolling === !1) && e.stopPropagation()
        };
        dispatchScrollendEvent = () => {
            this.options.wrapper.dispatchEvent(new CustomEvent(`scrollend`, {
                bubbles: this.options.wrapper === window,
                detail: {
                    lenisScrollEnd: !0
                }
            }))
        };
        get overflow()
        {
            let e = this.isHorizontal ? `overflow-x` : `overflow-y`;
            return getComputedStyle(this.rootElement)[e]
        }
        checkOverflow()
        {
            [`hidden`, `clip`].includes(this.overflow) ? this.internalStop() : this.internalStart()
        }
        onTransitionEnd = e => {
            e.propertyName?.includes(`overflow`) && e.target === this.rootElement && this.checkOverflow()
        };
        setScroll(e)
        {
            this.isHorizontal ? this.options.wrapper.scrollTo({
                left: e,
                behavior: `instant`
            }) : this.options.wrapper.scrollTo({
                top: e,
                behavior: `instant`
            })
        }
        onClick = e => {
            let t = e.composedPath().filter(e => e instanceof HTMLAnchorElement && e.href).map(e => new URL(e.href)),
                n = new URL(window.location.href);
            if (this.options.anchors) {
                let e = t.find(e => n.host === e.host && n.pathname === e.pathname && e.hash);
                if (e) {
                    let t = typeof this.options.anchors == `object` && this.options.anchors ? this.options.anchors : void 0,
                        n = decodeURIComponent(e.hash);
                    this.scrollTo(n, t);
                    return
                }
            }
            if (this.options.stopInertiaOnNavigate && t.some(e => n.host === e.host && n.pathname !== e.pathname)) {
                this.reset();
                return
            }
        };
        onPointerDown = e => {
            e.button === 1 && this.reset()
        };
        isTouchOnSelectionHandle(e)
        {
            let t = window.getSelection();
            if (!t || t.isCollapsed || t.rangeCount === 0)
                return !1;
            let n = e.targetTouches[0] ?? e.changedTouches[0];
            if (!n)
                return !1;
            let r = t.getRangeAt(0).getClientRects();
            if (r.length === 0)
                return !1;
            let i = r[0],
                a = r[r.length - 1],
                o = Math.hypot(n.clientX - i.left, n.clientY - i.top) <= 40,
                s = Math.hypot(n.clientX - a.right, n.clientY - a.bottom) <= 40;
            return o || s
        }
        onVirtualScroll = e => {
            if (typeof this.options.virtualScroll == `function` && this.options.virtualScroll(e) === !1)
                return;
            let {deltaX: t, deltaY: n, event: r} = e;
            if (this.emitter.emit(`virtual-scroll`, {
                deltaX: t,
                deltaY: n,
                event: r
            }), r.ctrlKey || r.lenisStopPropagation)
                return;
            let i = r.type.includes(`touch`),
                a = r.type.includes(`wheel`);
            if (i && this.isIos && (r.type === `touchstart` && (this._isDraggingSelection = this.isTouchOnSelectionHandle(r)), this._isDraggingSelection)) {
                r.type === `touchend` && (this._isDraggingSelection = !1);
                return
            }
            this.isTouching = r.type === `touchstart` || r.type === `touchmove`;
            let o = t === 0 && n === 0;
            if (this.options.syncTouch && i && r.type === `touchstart` && o && !this.isStopped && !this.isLocked) {
                this.reset();
                return
            }
            let s = this.options.gestureOrientation === `vertical` && n === 0 || this.options.gestureOrientation === `horizontal` && t === 0;
            if (o || s)
                return;
            let c = r.composedPath();
            c = c.slice(0, c.indexOf(this.rootElement));
            let l = this.options.prevent,
                u = Math.abs(t) >= Math.abs(n) ? `horizontal` : `vertical`;
            if (c.find(e => e instanceof HTMLElement && (typeof l == `function` && l?.(e) || e.hasAttribute?.(`data-lenis-prevent`) || u === `vertical` && e.hasAttribute?.(`data-lenis-prevent-vertical`) || u === `horizontal` && e.hasAttribute?.(`data-lenis-prevent-horizontal`) || i && e.hasAttribute?.(`data-lenis-prevent-touch`) || a && e.hasAttribute?.(`data-lenis-prevent-wheel`) || this.options.allowNestedScroll && this.hasNestedScroll(e, {
                deltaX: t,
                deltaY: n
            }))))
                return;
            if (this.isStopped || this.isLocked) {
                r.cancelable && r.preventDefault();
                return
            }
            if (!(this.options.syncTouch && i || this.options.smoothWheel && a)) {
                this.isScrolling = `native`,
                this.animate.stop(),
                r.lenisStopPropagation = !0;
                return
            }
            let d = n;
            this.options.gestureOrientation === `both` ? d = Math.abs(n) > Math.abs(t) ? n : t : this.options.gestureOrientation === `horizontal` && (d = t),
            (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && n > 0 || this.animatedScroll === this.limit && n < 0)) && (r.lenisStopPropagation = !0),
            r.cancelable && r.preventDefault();
            let f = i && this.options.syncTouch,
                p = i && r.type === `touchend`;
            p && (d = Math.sign(d) * Math.abs(this.velocity) ** this.options.touchInertiaExponent),
            this.scrollTo(this.targetScroll + d, {
                programmatic: !1,
                ...f ? {
                    lerp: p ? this.options.syncTouchLerp : 1
                } : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing
                }
            })
        };
        resize()
        {
            this.dimensions.resize(),
            this.animatedScroll = this.targetScroll = this.actualScroll,
            this.emit()
        }
        emit()
        {
            this.emitter.emit(`scroll`, this)
        }
        onNativeScroll = () => {
            if (this._resetVelocityTimeout !== null && (clearTimeout(this._resetVelocityTimeout), this._resetVelocityTimeout = null), this._preventNextNativeScrollEvent) {
                this._preventNextNativeScrollEvent = !1;
                return
            }
            if (this.isScrolling === !1 || this.isScrolling === `native`) {
                let e = this.animatedScroll;
                this.animatedScroll = this.targetScroll = this.actualScroll,
                this.lastVelocity = this.velocity,
                this.velocity = this.animatedScroll - e,
                this.direction = Math.sign(this.animatedScroll - e),
                this.isStopped || (this.isScrolling = `native`),
                this.emit(),
                this.velocity !== 0 && (this._resetVelocityTimeout = setTimeout(() => {
                    this.lastVelocity = this.velocity,
                    this.velocity = 0,
                    this.isScrolling = !1,
                    this.emit()
                }, 400))
            }
        };
        reset()
        {
            this.isLocked = !1,
            this.isScrolling = !1,
            this.animatedScroll = this.targetScroll = this.actualScroll,
            this.lastVelocity = this.velocity = 0,
            this.animate.stop()
        }
        start()
        {
            if (this.isStopped) {
                if (this.options.autoToggle) {
                    this.rootElement.style.removeProperty(`overflow`);
                    return
                }
                this.internalStart()
            }
        }
        internalStart()
        {
            this.isStopped && (this.reset(), this.isStopped = !1, this.emit())
        }
        stop()
        {
            if (!this.isStopped) {
                if (this.options.autoToggle) {
                    this.rootElement.style.setProperty(`overflow`, `clip`);
                    return
                }
                this.internalStop()
            }
        }
        internalStop()
        {
            this.isStopped || (this.reset(), this.isStopped = !0, this.emit())
        }
        raf = e => {
            let t = e - (this.time || e);
            this.time = e,
            this.animate.advance(t * .001),
            this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf))
        };
        scrollTo(e, {offset: t=0, immediate: n=!1, lock: r=!1, programmatic: i=!0, lerp: a=i ? this.options.lerp : void 0, duration: o=i ? this.options.duration : void 0, easing: s=i ? this.options.easing : void 0, onStart: c, onComplete: l, force: u=!1, userData: d}={})
        {
            if (this.prefersReducedMotion && (i ? n = !0 : (a = 1, o = void 0, s = void 0)), (this.isStopped || this.isLocked) && !u)
                return;
            let f = e,
                p = t;
            if (typeof f == `string` && [`top`, `left`, `start`, `#`].includes(f))
                f = 0;
            else if (typeof f == `string` && [`bottom`, `right`, `end`].includes(f))
                f = this.limit;
            else {
                let e = null;
                if (typeof f == `string` ? (e = f.startsWith(`#`) ? document.getElementById(f.slice(1)) : document.querySelector(f), e || (f === `#top` ? f = 0 : console.warn(`Lenis: Target not found`, f))) : f instanceof HTMLElement && f?.nodeType && (e = f), e) {
                    if (this.options.wrapper !== window) {
                        let e = this.rootElement.getBoundingClientRect();
                        p -= this.isHorizontal ? e.left : e.top
                    }
                    let t = e.getBoundingClientRect(),
                        n = getComputedStyle(e),
                        r = this.isHorizontal ? Number.parseFloat(n.scrollMarginLeft) : Number.parseFloat(n.scrollMarginTop),
                        i = getComputedStyle(this.rootElement),
                        a = this.isHorizontal ? Number.parseFloat(i.scrollPaddingLeft) : Number.parseFloat(i.scrollPaddingTop);
                    f = (this.isHorizontal ? t.left : t.top) + this.animatedScroll - (Number.isNaN(r) ? 0 : r) - (Number.isNaN(a) ? 0 : a)
                }
            }
            if (typeof f == `number`) {
                if (f += p, this.options.infinite) {
                    if (i) {
                        this.targetScroll = this.animatedScroll = this.scroll;
                        let e = f - this.animatedScroll;
                        e > this.limit / 2 ? f -= this.limit : e < -this.limit / 2 && (f += this.limit)
                    }
                } else
                    f = zm(0, f, this.limit);
                if (f === this.targetScroll) {
                    c?.(this),
                    l?.(this);
                    return
                }
                if (this.userData = d ?? {}, n) {
                    this.animatedScroll = this.targetScroll = f,
                    this.setScroll(this.scroll),
                    this.reset(),
                    this.preventNextNativeScrollEvent(),
                    this.emit(),
                    l?.(this),
                    this.userData = {},
                    requestAnimationFrame(() => {
                        this.dispatchScrollendEvent()
                    });
                    return
                }
                i || (this.targetScroll = f),
                typeof o == `number` && typeof s != `function` ? s = Zm : typeof s == `function` && typeof o != `number` && (o = 1),
                this.animate.fromTo(this.animatedScroll, f, {
                    duration: o,
                    easing: s,
                    lerp: a,
                    onStart: () => {
                        r && (this.isLocked = !0),
                        this.isScrolling = `smooth`,
                        c?.(this)
                    },
                    onUpdate: (e, t) => {
                        this.isScrolling = `smooth`,
                        this.lastVelocity = this.velocity,
                        this.velocity = e - this.animatedScroll,
                        this.direction = Math.sign(this.velocity),
                        this.animatedScroll = e,
                        this.setScroll(this.scroll),
                        i && (this.targetScroll = e),
                        t || this.emit(),
                        t && (this.reset(), this.emit(), l?.(this), this.userData = {}, requestAnimationFrame(() => {
                            this.dispatchScrollendEvent()
                        }), this.preventNextNativeScrollEvent())
                    }
                })
            }
        }
        preventNextNativeScrollEvent()
        {
            this._preventNextNativeScrollEvent = !0,
            requestAnimationFrame(() => {
                this._preventNextNativeScrollEvent = !1
            })
        }
        hasNestedScroll(e, {deltaX: t, deltaY: n})
        {
            let r = Date.now();
            e._lenis ||= {};
            let i = e._lenis,
                a,
                o,
                s,
                c,
                l,
                u,
                d,
                f,
                p,
                m;
            if (r - (i.time ?? 0) > 2e3) {
                i.time = Date.now();
                let t = window.getComputedStyle(e);
                if (i.computedStyle = t, a = [`auto`, `overlay`, `scroll`].includes(t.overflowX), o = [`auto`, `overlay`, `scroll`].includes(t.overflowY), l = [`auto`].includes(t.overscrollBehaviorX), u = [`auto`].includes(t.overscrollBehaviorY), i.hasOverflowX = a, i.hasOverflowY = o, !(a || o))
                    return !1;
                d = e.scrollWidth,
                f = e.scrollHeight,
                p = e.clientWidth,
                m = e.clientHeight,
                s = d > p,
                c = f > m,
                i.isScrollableX = s,
                i.isScrollableY = c,
                i.scrollWidth = d,
                i.scrollHeight = f,
                i.clientWidth = p,
                i.clientHeight = m,
                i.hasOverscrollBehaviorX = l,
                i.hasOverscrollBehaviorY = u
            } else
                s = i.isScrollableX,
                c = i.isScrollableY,
                a = i.hasOverflowX,
                o = i.hasOverflowY,
                d = i.scrollWidth,
                f = i.scrollHeight,
                p = i.clientWidth,
                m = i.clientHeight,
                l = i.hasOverscrollBehaviorX,
                u = i.hasOverscrollBehaviorY;
            if (!(a && s || o && c))
                return !1;
            let h = Math.abs(t) >= Math.abs(n) ? `horizontal` : `vertical`,
                g,
                _,
                v,
                y,
                b,
                x;
            if (h === `horizontal`)
                g = Math.round(e.scrollLeft),
                _ = d - p,
                v = t,
                y = a,
                b = s,
                x = l;
            else if (h === `vertical`)
                g = Math.round(e.scrollTop),
                _ = f - m,
                v = n,
                y = o,
                b = c,
                x = u;
            else
                return !1;
            return !x && (g >= _ || g <= 0) || (v > 0 ? g < _ : g > 0) && y && b
        }
        get rootElement()
        {
            return this.options.wrapper === window ? document.documentElement : this.options.wrapper
        }
        get limit()
        {
            return this.options.naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? `x` : `y`]
        }
        get isHorizontal()
        {
            return this.options.orientation === `horizontal`
        }
        get actualScroll()
        {
            let e = this.options.wrapper;
            return this.isHorizontal ? e.scrollX ?? e.scrollLeft : e.scrollY ?? e.scrollTop
        }
        get scroll()
        {
            return this.options.infinite ? Hm(this.animatedScroll, this.limit) : this.animatedScroll
        }
        get progress()
        {
            return this.limit === 0 ? 1 : this.scroll / this.limit
        }
        get isScrolling()
        {
            return this._isScrolling
        }
        set isScrolling(e)
        {
            this._isScrolling !== e && (this._isScrolling = e, this.updateClassName())
        }
        get isStopped()
        {
            return this._isStopped
        }
        set isStopped(e)
        {
            this._isStopped !== e && (this._isStopped = e, this.updateClassName())
        }
        get isLocked()
        {
            return this._isLocked
        }
        set isLocked(e)
        {
            this._isLocked !== e && (this._isLocked = e, this.updateClassName())
        }
        get isSmooth()
        {
            return this.isScrolling === `smooth`
        }
        get prefersReducedMotion()
        {
            return this.options.respectReducedMotion && this.reducedMotionMediaQuery.matches
        }
        get className()
        {
            let e = `lenis`;
            return this.options.autoToggle && (e += ` lenis-autoToggle`), this.isStopped && (e += ` lenis-stopped`), this.isLocked && (e += ` lenis-locked`), this.isScrolling && (e += ` lenis-scrolling`), this.isScrolling === `smooth` && (e += ` lenis-smooth`), e
        }
        updateClassName()
        {
            this.cleanUpClassName(),
            this.className.split(` `).forEach(e => {
                this.rootElement.classList.add(e)
            })
        }
        cleanUpClassName()
        {
            for (let e of Array.from(this.rootElement.classList))
                (e === `lenis` || e.startsWith(`lenis-`)) && this.rootElement.classList.remove(e)
        }
    }
    ;
function $m() {
    let e = bd();
    return (0, _.useEffect)(() => {
        if (e)
            return;
        let t = new Qm({
                lerp: .1,
                wheelMultiplier: 1,
                touchMultiplier: 1.6,
                smoothWheel: !0,
                syncTouch: !1
            }),
            n = 0,
            r = e => {
                t.raf(e),
                n = requestAnimationFrame(r)
            };
        n = requestAnimationFrame(r),
        window.__lenis = t;
        let i = window.scrollY;
        t.on(`scroll`, e => {
            i = e.scroll
        });
        let a = () => {
            let e = window.scrollY;
            Math.abs(e - i) > 1.5 && (i = e, t.scrollTo(e, {
                immediate: !0
            }))
        };
        window.addEventListener(`scroll`, a, {
            passive: !0
        });
        let o = () => {
                document.body.style.overflow === `hidden` ? t.stop() : t.start()
            },
            s = new MutationObserver(o);
        return s.observe(document.body, {
            attributes: !0,
            attributeFilter: [`style`]
        }), o(), () => {
            cancelAnimationFrame(n),
            window.removeEventListener(`scroll`, a),
            s.disconnect(),
            window.__lenis === t && delete window.__lenis,
            t.destroy()
        }
    }, [e]), null
}
var eh = [{
    id: `nebula`,
    label: `Nebula`,
    swatch: `#d6ff4d`,
    desc: `Deep space`
}, {
    id: `ocean`,
    label: `Ocean`,
    swatch: `#22d3ee`,
    desc: `Deep sea`
}, {
    id: `heavenly`,
    label: `Heavenly`,
    swatch: `#c9a227`,
    desc: `Golden light`
}, {
    id: `hell`,
    label: `Hell`,
    swatch: `#ff3030`,
    desc: `Blood & ember`
}];
function th({theme: e, onChange: t}) {
    let [n, r] = (0, _.useState)(!1),
        i = eh.find(t => t.id === e) ?? eh[0];
    return (0, R.jsxs)(`div`, {
        className: `fixed bottom-5 left-5 z-50`,
        children: [(0, R.jsx)(Lc, {
            children: n && (0, R.jsxs)(G.div, {
                initial: {
                    opacity: 0,
                    y: 10,
                    scale: .95
                },
                animate: {
                    opacity: 1,
                    y: 0,
                    scale: 1
                },
                exit: {
                    opacity: 0,
                    y: 10,
                    scale: .95
                },
                transition: {
                    duration: .18
                },
                className: `absolute bottom-14 left-0 w-44 overflow-hidden rounded-xl border border-edge bg-panel p-1.5 shadow-2xl shadow-black/40`,
                children: [(0, R.jsx)(`p`, {
                    className: `px-3 pb-1.5 pt-2 font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-500`,
                    children: `Theme`
                }), eh.map(n => (0, R.jsxs)(`button`, {
                    type: `button`,
                    onClick: () => {
                        t(n.id),
                        r(!1)
                    },
                    "aria-current": n.id === e ? `true` : void 0,
                    className: `flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${n.id === e ? `bg-accent/10 text-accent` : `text-zinc-300 hover:bg-panel-2 hover:text-zinc-100`}`,
                    children: [(0, R.jsx)(`span`, {
                        "aria-hidden": `true`,
                        className: `h-3 w-3 shrink-0 rounded-full border border-black/20`,
                        style: {
                            backgroundColor: n.swatch
                        }
                    }), (0, R.jsxs)(`span`, {
                        className: `flex-1`,
                        children: [(0, R.jsx)(`span`, {
                            className: `block font-medium`,
                            children: n.label
                        }), (0, R.jsx)(`span`, {
                            className: `block text-[10px] text-zinc-500`,
                            children: n.desc
                        })]
                    })]
                }, n.id))]
            })
        }), (0, R.jsxs)(`button`, {
            type: `button`,
            onClick: () => r(e => !e),
            "aria-expanded": n,
            "aria-label": `Change theme`,
            className: `group flex items-center gap-2.5 rounded-full border border-edge bg-panel/90 py-2 pl-3 pr-4 text-sm font-medium text-zinc-300 shadow-lg shadow-black/30 backdrop-blur transition-colors hover:border-accent/50 hover:text-zinc-100`,
            children: [(0, R.jsx)(`span`, {
                "aria-hidden": `true`,
                className: `h-3 w-3 rounded-full border border-black/20 transition-transform group-hover:scale-110`,
                style: {
                    backgroundColor: i.swatch
                }
            }), (0, R.jsx)(`span`, {
                className: `font-mono text-[10px] uppercase tracking-[0.2em]`,
                children: i.label
            }), (0, R.jsx)(`span`, {
                "aria-hidden": `true`,
                className: `text-zinc-500 transition-transform duration-200 ${n ? `rotate-180` : ``}`,
                children: (0, R.jsx)(`svg`, {
                    width: `10`,
                    height: `10`,
                    viewBox: `0 0 10 10`,
                    fill: `none`,
                    children: (0, R.jsx)(`path`, {
                        d: `M1 3.5 5 7l4-3.5`,
                        stroke: `currentColor`,
                        strokeWidth: `1.5`,
                        strokeLinecap: `round`,
                        strokeLinejoin: `round`
                    })
                })
            })]
        })]
    })
}
function nh({nav: e, onMidway: t, onDone: n}) {
    return (0, _.useEffect)(() => {
        if (!e)
            return;
        let r = setTimeout(() => {
                let n = document.documentElement,
                    r = n.style.scrollBehavior;
                n.style.scrollBehavior = `auto`,
                document.getElementById(e.id)?.scrollIntoView({
                    block: `start`
                }),
                n.style.scrollBehavior = r,
                t()
            }, 360),
            i = setTimeout(n, 720);
        return () => {
            clearTimeout(r),
            clearTimeout(i)
        }
    }, [e, t, n]), (0, R.jsx)(Lc, {
        children: e && (0, R.jsxs)(G.div, {
            className: `fixed inset-0 z-[110] flex items-center justify-center bg-ink`,
            initial: {
                clipPath: `circle(0% at 50% 45%)`
            },
            animate: {
                clipPath: `circle(150% at 50% 45%)`
            },
            exit: {
                clipPath: `circle(0% at 88% 8%)`
            },
            transition: {
                duration: .4,
                ease: [.65, 0, .35, 1]
            },
            "aria-hidden": `true`,
            children: [(0, R.jsx)(`div`, {
                className: `grid-bg absolute inset-0`,
                "aria-hidden": `true`
            }), (0, R.jsxs)(`div`, {
                className: `relative flex flex-col items-center gap-3`,
                children: [(0, R.jsx)(`span`, {
                    className: `font-mono text-[10px] uppercase tracking-[0.4em] text-accent`,
                    children: `navigating`
                }), (0, R.jsx)(`span`, {
                    className: `font-display text-2xl font-bold text-zinc-100 md:text-3xl`,
                    children: e.label
                }), (0, R.jsx)(`span`, {
                    className: `h-px w-24 bg-accent/40`,
                    "aria-hidden": `true`
                })]
            })]
        })
    })
}
var rh = [{
    icon: zd,
    title: `Software`,
    desc: `Web applications, APIs, tools, and experiments.`,
    href: `#work`
}, {
    icon: Hd,
    title: `Games`,
    desc: `Game development and interactive experiences.`,
    href: `#work`
}, {
    icon: Fd,
    title: `AI`,
    desc: `AI-powered experiments and intelligent systems.`,
    href: `#work`
}, {
    icon: Zd,
    title: `Security`,
    desc: `Cybersecurity and safety-focused ideas.`,
    href: `#work`
}];
function ih() {
    return (0, R.jsx)(`section`, {
        id: `what-i-build`,
        className: `relative py-28 md:py-32`,
        children: (0, R.jsxs)(`div`, {
            className: `mx-auto w-full max-w-6xl px-6 md:px-10`,
            children: [(0, R.jsx)(sf, {
                eyebrow: `What I build`,
                title: `Four lanes, one mindset.`,
                description: `I explore across software, games, AI, and security — shipping experiments in each one.`,
                chapter: `02`
            }), (0, R.jsx)(`div`, {
                className: `mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4`,
                children: rh.map((e, t) => (0, R.jsx)(Q, {
                    delay: t * .08,
                    children: (0, R.jsxs)(`a`, {
                        href: e.href,
                        className: `card-lift group relative block h-full overflow-hidden rounded-2xl border border-edge bg-panel p-7 ${t % 2 == 0 ? `-rotate-[0.5deg]` : `rotate-[0.6deg]`}`,
                        onMouseMove: e => {
                            let t = e.currentTarget.getBoundingClientRect();
                            e.currentTarget.style.setProperty(`--mx`, `${e.clientX - t.left}px`),
                            e.currentTarget.style.setProperty(`--my`, `${e.clientY - t.top}px`)
                        },
                        children: [(0, R.jsx)(`div`, {
                            className: `pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100`,
                            style: {
                                background: `radial-gradient(260px circle at var(--mx, 50%) var(--my, 50%), rgba(214,255,77,0.09), transparent 65%)`
                            },
                            "aria-hidden": `true`
                        }), (0, R.jsxs)(`span`, {
                            className: `pointer-events-none absolute right-4 top-3 font-mono text-[10px] font-semibold text-zinc-600`,
                            "aria-hidden": `true`,
                            children: [`0`, t + 1]
                        }), (0, R.jsxs)(`div`, {
                            className: `relative`,
                            children: [(0, R.jsx)(`span`, {
                                className: `flex h-12 w-12 items-center justify-center rounded-xl border border-edge bg-ink text-accent transition-transform duration-300 group-hover:scale-110`,
                                children: (0, R.jsx)(e.icon, {
                                    className: `h-5 w-5`,
                                    "aria-hidden": `true`
                                })
                            }), (0, R.jsx)(`h3`, {
                                className: `mt-6 font-display text-lg font-bold tracking-wide text-zinc-100`,
                                children: e.title.toUpperCase()
                            }), (0, R.jsx)(`p`, {
                                className: `mt-2 text-sm leading-relaxed text-zinc-400`,
                                children: e.desc
                            }), (0, R.jsxs)(`span`, {
                                className: `mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-accent opacity-0 transition-all duration-300 group-hover:opacity-100`,
                                children: [`Explore `, (0, R.jsx)(jd, {
                                    className: `h-3.5 w-3.5`,
                                    "aria-hidden": `true`
                                })]
                            })]
                        })]
                    })
                }, e.title))
            })]
        })
    })
}
var ah = [`ArrowUp`, `ArrowUp`, `ArrowDown`, `ArrowDown`, `ArrowLeft`, `ArrowRight`, `ArrowLeft`, `ArrowRight`, `b`, `a`],
    oh = 0;
function sh() {
    document.body.classList.remove(`egg-mode`),
    document.body.offsetWidth,
    document.body.classList.add(`egg-mode`),
    setTimeout(() => document.body.classList.remove(`egg-mode`), 4e3)
}
function ch() {
    console.log(`%cAARYAN MITTAL%c
    BUILD → EXPERIMENT → LEARN → IMPROVE → SHIP`, `color:#5b9dff;font-family:ui-monospace,monospace;font-size:15px;font-weight:700`, `color:#a1a1aa;font-family:ui-monospace,monospace;font-size:12px`),
    console.log(`%cNice of you to open DevTools. Try the Konami code → ↑ ↑ ↓ ↓ ← → ← → B A`, `color:#71717a;font-size:11px`),
    window.addEventListener(`keydown`, e => {
        e.key === ah[oh] ? (oh += 1, oh === ah.length && (oh = 0, sh())) : oh = +(e.key === ah[0])
    })
}
var lh = [...Mm.flatMap(e => e.items), ...Nm, ...Pm.topics],
    uh = [`BUILD`, `EXPERIMENT`, `LEARN`, `IMPROVE`, `SHIP`, `REPEAT`],
    dh = {
        top: `Intro`,
        about: `About`,
        "what-i-build": `What I Build`,
        work: `Projects`,
        achievements: `Achievements`,
        certificates: `Certificates`,
        journey: `Journey`,
        skills: `Skills`,
        now: `Now Building`,
        code: `Code`,
        beyond: `Beyond Code`,
        contact: `Contact`
    },
    fh = [`nebula`, `ocean`, `heavenly`, `hell`];
function ph() {
    let e = bd(),
        [t, n] = (0, _.useState)(() => {
            try {
                let e = localStorage.getItem(`portfolio-theme`);
                return fh.includes(e) ? e : `nebula`
            } catch {
                return `nebula`
            }
        }),
        [r, i] = (0, _.useState)(null),
        [a, o] = (0, _.useState)(null),
        [s, c] = (0, _.useState)(null),
        [l, u] = (0, _.useState)(0);
    (0, _.useEffect)(() => {
        ch(),
        am()
    }, []),
    (0, _.useEffect)(() => {
        document.documentElement.dataset.theme = t;
        try {
            localStorage.setItem(`portfolio-theme`, t)
        } catch {}
        let e = document.querySelector(`meta[name="theme-color"]`);
        e && (e.content = t === `heavenly` ? `#faf6ec` : t === `hell` ? `#0a0505` : t === `ocean` ? `#051019` : `#0a0a0e`)
    }, [t]),
    (0, _.useEffect)(() => {
        if (e)
            return;
        let t = e => {
            if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
                return;
            let t = e.target.closest?.(`a[href^="#"]`);
            if (!t || t.getAttribute(`target`))
                return;
            let n = t.getAttribute(`href`).slice(1);
            if (!n || n === `main`)
                return;
            let r = document.getElementById(n);
            !r || !r.closest(`main`) || (e.preventDefault(), c({
                id: n,
                label: dh[n] || n.replace(/-/g, ` `)
            }))
        };
        return document.addEventListener(`click`, t), () => document.removeEventListener(`click`, t)
    }, [e]);
    let d = (0, _.useCallback)(() => u(e => e + 1), []),
        f = (0, _.useCallback)(() => c(null), []);
    return (0, R.jsxs)(`div`, {
        className: `relative min-h-screen text-zinc-100 antialiased`,
        children: [(0, R.jsx)(`a`, {
            href: `#main`,
            className: `sr-only z-[110] rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4`,
            children: `Skip to content`
        }), (0, R.jsx)(`div`, {
            className: `dot-grid`,
            "aria-hidden": `true`
        }), t === `nebula` && (0, R.jsx)(cm, {}), t === `heavenly` && (0, R.jsx)(fm, {}), t === `hell` && (0, R.jsx)(pp, {}), t === `ocean` && (0, R.jsx)(lm, {}), (0, R.jsx)(ap, {}), (0, R.jsx)($m, {}), (0, R.jsx)(jm, {}), (0, R.jsx)(Wf, {}), (0, R.jsx)(Sp, {}), (0, R.jsx)(sm, {}), (0, R.jsx)(yf, {}), (0, R.jsx)(th, {
            theme: t,
            onChange: n
        }), (0, R.jsxs)(`main`, {
            id: `main`,
            children: [(0, R.jsx)(yp, {}), (0, R.jsx)(Cp, {
                items: lh
            }), (0, R.jsx)(Tp, {}), (0, R.jsx)(np, {}), (0, R.jsx)(uf, {}), (0, R.jsx)(ih, {}), (0, R.jsx)(Am, {
                onOpenProject: i,
                onExploreProject: o
            }), (0, R.jsx)(hf, {}), (0, R.jsx)(Df, {}), (0, R.jsx)(xp, {}), (0, R.jsx)(Lm, {}), (0, R.jsx)(Jf, {}), (0, R.jsx)(Uf, {}), (0, R.jsx)(Lf, {}), (0, R.jsx)(_f, {}), (0, R.jsx)(Cp, {
                items: uh,
                reverse: !0
            }), (0, R.jsx)(Vf, {})]
        }, l), (0, R.jsx)(op, {}), (0, R.jsx)(hm, {
            project: r,
            onClose: () => i(null)
        }), (0, R.jsx)(up, {
            project: a,
            projects: Gf,
            onClose: () => o(null),
            onNavigate: e => {
                e >= 0 && e < Gf.length && o(Gf[e])
            }
        }), (0, R.jsx)(nh, {
            nav: s,
            onMidway: d,
            onDone: f
        })]
    })
}
(0, v.createRoot)(document.getElementById(`root`)).render((0, R.jsx)(_.StrictMode, {
    children: (0, R.jsx)(ph, {})
}));
