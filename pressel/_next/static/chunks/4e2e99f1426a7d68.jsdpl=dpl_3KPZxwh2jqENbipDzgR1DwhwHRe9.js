(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 45694, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
        Object.defineProperty(r, "warnOnce", {
            enumerable: !0,
            get: function () {
                return n
            }
        });
    let n = e => { }
}
    , 41567, (e, t, r) => {
        "use strict";
        function n({ widthInt: e, heightInt: t, blurWidth: r, blurHeight: n, blurDataURL: i, objectFit: a }) {
            let s = r ? 40 * r : e
                , l = n ? 40 * n : t
                , o = s && l ? `viewBox='0 0 ${s} ${l}'` : "";
            return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${o}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${o ? "none" : "contain" === a ? "xMidYMid" : "cover" === a ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${i}'/%3E%3C/svg%3E`
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
            Object.defineProperty(r, "getImageBlurSvg", {
                enumerable: !0,
                get: function () {
                    return n
                }
            })
    }
    , 9560, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = {
            VALID_LOADERS: function () {
                return a
            },
            imageConfigDefault: function () {
                return s
            }
        };
        for (var i in n)
            Object.defineProperty(r, i, {
                enumerable: !0,
                get: n[i]
            });
        let a = ["default", "imgix", "cloudinary", "akamai", "custom"]
            , s = {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [32, 48, 64, 96, 128, 256, 384],
                path: "/_next/image",
                loader: "default",
                loaderFile: "",
                domains: [],
                disableStaticImages: !1,
                minimumCacheTTL: 14400,
                formats: ["image/webp"],
                maximumRedirects: 3,
                maximumResponseBody: 5e7,
                dangerouslyAllowLocalIP: !1,
                dangerouslyAllowSVG: !1,
                contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
                contentDispositionType: "attachment",
                localPatterns: void 0,
                remotePatterns: [],
                qualities: [75],
                unoptimized: !1
            }
    }
    , 35070, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
            Object.defineProperty(r, "getImgProps", {
                enumerable: !0,
                get: function () {
                    return d
                }
            }),
            e.r(45694);
        let n = e.r(75527)
            , i = e.r(41567)
            , a = e.r(9560)
            , s = ["-moz-initial", "fill", "none", "scale-down", void 0];
        function l(e) {
            return void 0 !== e.default
        }
        function o(e) {
            return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
        }
        function d({ src: e, sizes: t, unoptimized: r = !1, priority: d = !1, preload: u = !1, loading: c, className: f, quality: m, width: p, height: h, fill: g = !1, style: x, overrideSrc: b, onLoad: y, onLoadingComplete: v, placeholder: j = "empty", blurDataURL: w, fetchPriority: _, decoding: P = "async", layout: N, objectFit: C, objectPosition: O, lazyBoundary: E, lazyRoot: S, ...R }, M) {
            var z;
            let k, I, $, { imgConf: A, showAltText: D, blurComplete: T, defaultLoader: L } = M, U = A || a.imageConfigDefault;
            if ("allSizes" in U)
                k = U;
            else {
                let e = [...U.deviceSizes, ...U.imageSizes].sort((e, t) => e - t)
                    , t = U.deviceSizes.sort((e, t) => e - t)
                    , r = U.qualities?.sort((e, t) => e - t);
                k = {
                    ...U,
                    allSizes: e,
                    deviceSizes: t,
                    qualities: r
                }
            }
            if (void 0 === L)
                throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
                    value: "E163",
                    enumerable: !1,
                    configurable: !0
                });
            let q = R.loader || L;
            delete R.loader,
                delete R.srcSet;
            let B = "__next_img_default" in q;
            if (B) {
                if ("custom" === k.loader)
                    throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                        value: "E252",
                        enumerable: !1,
                        configurable: !0
                    })
            } else {
                let e = q;
                q = t => {
                    let { config: r, ...n } = t;
                    return e(n)
                }
            }
            if (N) {
                "fill" === N && (g = !0);
                let e = {
                    intrinsic: {
                        maxWidth: "100%",
                        height: "auto"
                    },
                    responsive: {
                        width: "100%",
                        height: "auto"
                    }
                }[N];
                e && (x = {
                    ...x,
                    ...e
                });
                let r = {
                    responsive: "100vw",
                    fill: "100vw"
                }[N];
                r && !t && (t = r)
            }
            let F = ""
                , W = o(p)
                , G = o(h);
            if ((z = e) && "object" == typeof z && (l(z) || void 0 !== z.src)) {
                let t = l(e) ? e.default : e;
                if (!t.src)
                    throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                        value: "E460",
                        enumerable: !1,
                        configurable: !0
                    });
                if (!t.height || !t.width)
                    throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                        value: "E48",
                        enumerable: !1,
                        configurable: !0
                    });
                if (I = t.blurWidth,
                    $ = t.blurHeight,
                    w = w || t.blurDataURL,
                    F = t.src,
                    !g)
                    if (W || G) {
                        if (W && !G) {
                            let e = W / t.width;
                            G = Math.round(t.height * e)
                        } else if (!W && G) {
                            let e = G / t.height;
                            W = Math.round(t.width * e)
                        }
                    } else
                        W = t.width,
                            G = t.height
            }
            let V = !d && !u && ("lazy" === c || void 0 === c);
            (!(e = "string" == typeof e ? e : F) || e.startsWith("data:") || e.startsWith("blob:")) && (r = !0,
                V = !1),
                k.unoptimized && (r = !0),
                B && !k.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (r = !0);
            let X = o(m)
                , H = Object.assign(g ? {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    objectFit: C,
                    objectPosition: O
                } : {}, D ? {} : {
                    color: "transparent"
                }, x)
                , J = T || "empty" === j ? null : "blur" === j ? `url("data:image/svg+xml;charset=utf-8,${(0,
                    i.getImageBlurSvg)({
                        widthInt: W,
                        heightInt: G,
                        blurWidth: I,
                        blurHeight: $,
                        blurDataURL: w || "",
                        objectFit: H.objectFit
                    })}")` : `url("${j}")`
                , K = s.includes(H.objectFit) ? "fill" === H.objectFit ? "100% 100%" : "cover" : H.objectFit
                , Q = J ? {
                    backgroundSize: K,
                    backgroundPosition: H.objectPosition || "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: J
                } : {}
                , Y = function ({ config: e, src: t, unoptimized: r, width: i, quality: a, sizes: s, loader: l }) {
                    if (r) {
                        let e = (0,
                            n.getDeploymentId)();
                        if (t.startsWith("/") && !t.startsWith("//") && e) {
                            let r = t.includes("?") ? "&" : "?";
                            t = `${t}${r}dpl=${e}`
                        }
                        return {
                            src: t,
                            srcSet: void 0,
                            sizes: void 0
                        }
                    }
                    let { widths: o, kind: d } = function ({ deviceSizes: e, allSizes: t }, r, n) {
                        if (n) {
                            let r = /(^|\s)(1?\d?\d)vw/g
                                , i = [];
                            for (let e; e = r.exec(n);)
                                i.push(parseInt(e[2]));
                            if (i.length) {
                                let r = .01 * Math.min(...i);
                                return {
                                    widths: t.filter(t => t >= e[0] * r),
                                    kind: "w"
                                }
                            }
                            return {
                                widths: t,
                                kind: "w"
                            }
                        }
                        return "number" != typeof r ? {
                            widths: e,
                            kind: "w"
                        } : {
                            widths: [...new Set([r, 2 * r].map(e => t.find(t => t >= e) || t[t.length - 1]))],
                            kind: "x"
                        }
                    }(e, i, s)
                        , u = o.length - 1;
                    return {
                        sizes: s || "w" !== d ? s : "100vw",
                        srcSet: o.map((r, n) => `${l({
                            config: e,
                            src: t,
                            quality: a,
                            width: r
                        })} ${"w" === d ? r : n + 1}${d}`).join(", "),
                        src: l({
                            config: e,
                            src: t,
                            quality: a,
                            width: o[u]
                        })
                    }
                }({
                    config: k,
                    src: e,
                    unoptimized: r,
                    width: W,
                    quality: X,
                    sizes: t,
                    loader: q
                })
                , Z = V ? "lazy" : c;
            return {
                props: {
                    ...R,
                    loading: Z,
                    fetchPriority: _,
                    width: W,
                    height: G,
                    decoding: P,
                    className: f,
                    style: {
                        ...H,
                        ...Q
                    },
                    sizes: Y.sizes,
                    srcSet: Y.srcSet,
                    src: b || Y.src
                },
                meta: {
                    unoptimized: r,
                    preload: u || d,
                    placeholder: j,
                    fill: g
                }
            }
        }
    }
    , 34038, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
            Object.defineProperty(r, "default", {
                enumerable: !0,
                get: function () {
                    return l
                }
            });
        let n = e.r(44440)
            , i = "u" < typeof window
            , a = i ? () => { }
                : n.useLayoutEffect
            , s = i ? () => { }
                : n.useEffect;
        function l(e) {
            let { headManager: t, reduceComponentsToState: r } = e;
            function l() {
                if (t && t.mountedInstances) {
                    let e = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                    t.updateHead(r(e))
                }
            }
            return i && (t?.mountedInstances?.add(e.children),
                l()),
                a(() => (t?.mountedInstances?.add(e.children),
                    () => {
                        t?.mountedInstances?.delete(e.children)
                    }
                )),
                a(() => (t && (t._pendingUpdate = l),
                    () => {
                        t && (t._pendingUpdate = l)
                    }
                )),
                s(() => (t && t._pendingUpdate && (t._pendingUpdate(),
                    t._pendingUpdate = null),
                    () => {
                        t && t._pendingUpdate && (t._pendingUpdate(),
                            t._pendingUpdate = null)
                    }
                )),
                null
        }
    }
    , 90080, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = {
            default: function () {
                return h
            },
            defaultHead: function () {
                return c
            }
        };
        for (var i in n)
            Object.defineProperty(r, i, {
                enumerable: !0,
                get: n[i]
            });
        let a = e.r(81258)
            , s = e.r(44066)
            , l = e.r(87433)
            , o = s._(e.r(44440))
            , d = a._(e.r(34038))
            , u = e.r(75648);
        function c() {
            return [(0,
                l.jsx)("meta", {
                    charSet: "utf-8"
                }, "charset"), (0,
                    l.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width"
                    }, "viewport")]
        }
        function f(e, t) {
            return "string" == typeof t || "number" == typeof t ? e : t.type === o.default.Fragment ? e.concat(o.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
        }
        e.r(45694);
        let m = ["name", "httpEquiv", "charSet", "itemProp"];
        function p(e) {
            let t, r, n, i;
            return e.reduce(f, []).reverse().concat(c().reverse()).filter((t = new Set,
                r = new Set,
                n = new Set,
                i = {},
                e => {
                    let a = !0
                        , s = !1;
                    if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                        s = !0;
                        let r = e.key.slice(e.key.indexOf("$") + 1);
                        t.has(r) ? a = !1 : t.add(r)
                    }
                    switch (e.type) {
                        case "title":
                        case "base":
                            r.has(e.type) ? a = !1 : r.add(e.type);
                            break;
                        case "meta":
                            for (let t = 0, r = m.length; t < r; t++) {
                                let r = m[t];
                                if (e.props.hasOwnProperty(r))
                                    if ("charSet" === r)
                                        n.has(r) ? a = !1 : n.add(r);
                                    else {
                                        let t = e.props[r]
                                            , n = i[r] || new Set;
                                        ("name" !== r || !s) && n.has(t) ? a = !1 : (n.add(t),
                                            i[r] = n)
                                    }
                            }
                    }
                    return a
                }
            )).reverse().map((e, t) => {
                let r = e.key || t;
                return o.default.cloneElement(e, {
                    key: r
                })
            }
            )
        }
        let h = function ({ children: e }) {
            let t = (0,
                o.useContext)(u.HeadManagerContext);
            return (0,
                l.jsx)(d.default, {
                    reduceComponentsToState: p,
                    headManager: t,
                    children: e
                })
        };
        ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
            value: !0
        }),
            Object.assign(r.default, r),
            t.exports = r.default)
    }
    , 19335, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
            Object.defineProperty(r, "ImageConfigContext", {
                enumerable: !0,
                get: function () {
                    return a
                }
            });
        let n = e.r(81258)._(e.r(44440))
            , i = e.r(9560)
            , a = n.default.createContext(i.imageConfigDefault)
    }
    , 96318, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
            Object.defineProperty(r, "RouterContext", {
                enumerable: !0,
                get: function () {
                    return n
                }
            });
        let n = e.r(81258)._(e.r(44440)).default.createContext(null)
    }
    , 886, (e, t, r) => {
        "use strict";
        function n(e, t) {
            let r = e || 75;
            return t?.qualities?.length ? t.qualities.reduce((e, t) => Math.abs(t - r) < Math.abs(e - r) ? t : e, 0) : r
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
            Object.defineProperty(r, "findClosestQuality", {
                enumerable: !0,
                get: function () {
                    return n
                }
            })
    }
    , 97689, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
            Object.defineProperty(r, "default", {
                enumerable: !0,
                get: function () {
                    return s
                }
            });
        let n = e.r(886)
            , i = e.r(75527);
        function a({ config: e, src: t, width: r, quality: a }) {
            if (t.startsWith("/") && t.includes("?") && e.localPatterns?.length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search)
                throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
                    value: "E871",
                    enumerable: !1,
                    configurable: !0
                });
            let s = (0,
                n.findClosestQuality)(a, e)
                , l = (0,
                    i.getDeploymentId)();
            return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${s}${t.startsWith("/") && l ? `&dpl=${l}` : ""}`
        }
        a.__next_img_default = !0;
        let s = a
    }
    , 36770, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
            Object.defineProperty(r, "useMergedRef", {
                enumerable: !0,
                get: function () {
                    return i
                }
            });
        let n = e.r(44440);
        function i(e, t) {
            let r = (0,
                n.useRef)(null)
                , i = (0,
                    n.useRef)(null);
            return (0,
                n.useCallback)(n => {
                    if (null === n) {
                        let e = r.current;
                        e && (r.current = null,
                            e());
                        let t = i.current;
                        t && (i.current = null,
                            t())
                    } else
                        e && (r.current = a(e, n)),
                            t && (i.current = a(t, n))
                }
                    , [e, t])
        }
        function a(e, t) {
            if ("function" != typeof e)
                return e.current = t,
                    () => {
                        e.current = null
                    }
                    ;
            {
                let r = e(t);
                return "function" == typeof r ? r : () => e(null)
            }
        }
        ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
            value: !0
        }),
            Object.assign(r.default, r),
            t.exports = r.default)
    }
    , 89315, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
            Object.defineProperty(r, "Image", {
                enumerable: !0,
                get: function () {
                    return v
                }
            });
        let n = e.r(81258)
            , i = e.r(44066)
            , a = e.r(87433)
            , s = i._(e.r(44440))
            , l = n._(e.r(65596))
            , o = n._(e.r(90080))
            , d = e.r(35070)
            , u = e.r(9560)
            , c = e.r(19335);
        e.r(45694);
        let f = e.r(96318)
            , m = n._(e.r(97689))
            , p = e.r(36770)
            , h = {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [32, 48, 64, 96, 128, 256, 384],
                qualities: [75],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !0
            };
        function g(e, t, r, n, i, a, s) {
            let l = e?.src;
            e && e["data-loaded-src"] !== l && (e["data-loaded-src"] = l,
                ("decode" in e ? e.decode() : Promise.resolve()).catch(() => { }
                ).then(() => {
                    if (e.parentElement && e.isConnected) {
                        if ("empty" !== t && i(!0),
                            r?.current) {
                            let t = new Event("load");
                            Object.defineProperty(t, "target", {
                                writable: !1,
                                value: e
                            });
                            let n = !1
                                , i = !1;
                            r.current({
                                ...t,
                                nativeEvent: t,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: () => n,
                                isPropagationStopped: () => i,
                                persist: () => { }
                                ,
                                preventDefault: () => {
                                    n = !0,
                                        t.preventDefault()
                                }
                                ,
                                stopPropagation: () => {
                                    i = !0,
                                        t.stopPropagation()
                                }
                            })
                        }
                        n?.current && n.current(e)
                    }
                }
                ))
        }
        function x(e) {
            return s.use ? {
                fetchPriority: e
            } : {
                fetchpriority: e
            }
        }
        "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
        let b = (0,
            s.forwardRef)(({ src: e, srcSet: t, sizes: r, height: n, width: i, decoding: l, className: o, style: d, fetchPriority: u, placeholder: c, loading: f, unoptimized: m, fill: h, onLoadRef: b, onLoadingCompleteRef: y, setBlurComplete: v, setShowAltText: j, sizesInput: w, onLoad: _, onError: P, ...N }, C) => {
                let O = (0,
                    s.useCallback)(e => {
                        e && (P && (e.src = e.src),
                            e.complete && g(e, c, b, y, v, m, w))
                    }
                        , [e, c, b, y, v, P, m, w])
                    , E = (0,
                        p.useMergedRef)(C, O);
                return (0,
                    a.jsx)("img", {
                        ...N,
                        ...x(u),
                        loading: f,
                        width: i,
                        height: n,
                        decoding: l,
                        "data-nimg": h ? "fill" : "1",
                        className: o,
                        style: d,
                        sizes: r,
                        srcSet: t,
                        src: e,
                        ref: E,
                        onLoad: e => {
                            g(e.currentTarget, c, b, y, v, m, w)
                        }
                        ,
                        onError: e => {
                            j(!0),
                                "empty" !== c && v(!0),
                                P && P(e)
                        }
                    })
            }
            );
        function y({ isAppRouter: e, imgAttributes: t }) {
            let r = {
                as: "image",
                imageSrcSet: t.srcSet,
                imageSizes: t.sizes,
                crossOrigin: t.crossOrigin,
                referrerPolicy: t.referrerPolicy,
                ...x(t.fetchPriority)
            };
            return e && l.default.preload ? (l.default.preload(t.src, r),
                null) : (0,
                    a.jsx)(o.default, {
                        children: (0,
                            a.jsx)("link", {
                                rel: "preload",
                                href: t.srcSet ? void 0 : t.src,
                                ...r
                            }, "__nimg-" + t.src + t.srcSet + t.sizes)
                    })
        }
        let v = (0,
            s.forwardRef)((e, t) => {
                let r = (0,
                    s.useContext)(f.RouterContext)
                    , n = (0,
                        s.useContext)(c.ImageConfigContext)
                    , i = (0,
                        s.useMemo)(() => {
                            let e = h || n || u.imageConfigDefault
                                , t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t)
                                , r = e.deviceSizes.sort((e, t) => e - t)
                                , i = e.qualities?.sort((e, t) => e - t);
                            return {
                                ...e,
                                allSizes: t,
                                deviceSizes: r,
                                qualities: i,
                                localPatterns: "u" < typeof window ? n?.localPatterns : e.localPatterns
                            }
                        }
                            , [n])
                    , { onLoad: l, onLoadingComplete: o } = e
                    , p = (0,
                        s.useRef)(l);
                (0,
                    s.useEffect)(() => {
                        p.current = l
                    }
                        , [l]);
                let g = (0,
                    s.useRef)(o);
                (0,
                    s.useEffect)(() => {
                        g.current = o
                    }
                        , [o]);
                let [x, v] = (0,
                    s.useState)(!1)
                    , [j, w] = (0,
                        s.useState)(!1)
                    , { props: _, meta: P } = (0,
                        d.getImgProps)(e, {
                            defaultLoader: m.default,
                            imgConf: i,
                            blurComplete: x,
                            showAltText: j
                        });
                return (0,
                    a.jsxs)(a.Fragment, {
                        children: [(0,
                            a.jsx)(b, {
                                ..._,
                                unoptimized: P.unoptimized,
                                placeholder: P.placeholder,
                                fill: P.fill,
                                onLoadRef: p,
                                onLoadingCompleteRef: g,
                                setBlurComplete: v,
                                setShowAltText: w,
                                sizesInput: e.sizes,
                                ref: t
                            }), P.preload ? (0,
                                a.jsx)(y, {
                                    isAppRouter: !r,
                                    imgAttributes: _
                                }) : null]
                    })
            }
            );
        ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
            value: !0
        }),
            Object.assign(r.default, r),
            t.exports = r.default)
    }
    , 32419, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = {
            default: function () {
                return u
            },
            getImageProps: function () {
                return d
            }
        };
        for (var i in n)
            Object.defineProperty(r, i, {
                enumerable: !0,
                get: n[i]
            });
        let a = e.r(81258)
            , s = e.r(35070)
            , l = e.r(89315)
            , o = a._(e.r(97689));
        function d(e) {
            let { props: t } = (0,
                s.getImgProps)(e, {
                    defaultLoader: o.default,
                    imgConf: {
                        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                        imageSizes: [32, 48, 64, 96, 128, 256, 384],
                        qualities: [75],
                        path: "/_next/image",
                        loader: "default",
                        dangerouslyAllowSVG: !1,
                        unoptimized: !0
                    }
                });
            for (let [e, r] of Object.entries(t))
                void 0 === r && delete t[e];
            return {
                props: t
            }
        }
        let u = l.Image
    }
    , 96027, (e, t, r) => {
        t.exports = e.r(32419)
    }
    , 31713, e => {
        "use strict";
        var t = e.i(87433)
            , r = e.i(96027)
            , n = e.i(44440);
        let i = e => {
            let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) => r ? r.toUpperCase() : t.toLowerCase());
            return t.charAt(0).toUpperCase() + t.slice(1)
        }
            , a = (...e) => e.filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim();
        var s = {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        };
        let l = (0,
            n.forwardRef)(({ color: e = "currentColor", size: t = 24, strokeWidth: r = 2, absoluteStrokeWidth: i, className: l = "", children: o, iconNode: d, ...u }, c) => (0,
                n.createElement)("svg", {
                    ref: c,
                    ...s,
                    width: t,
                    height: t,
                    stroke: e,
                    strokeWidth: i ? 24 * Number(r) / Number(t) : r,
                    className: a("lucide", l),
                    ...!o && !(e => {
                        for (let t in e)
                            if (t.startsWith("aria-") || "role" === t || "title" === t)
                                return !0
                    }
                    )(u) && {
                        "aria-hidden": "true"
                    },
                    ...u
                }, [...d.map(([e, t]) => (0,
                    n.createElement)(e, t)), ...Array.isArray(o) ? o : [o]]))
            , o = (e, t) => {
                let r = (0,
                    n.forwardRef)(({ className: r, ...s }, o) => (0,
                        n.createElement)(l, {
                            ref: o,
                            iconNode: t,
                            className: a(`lucide-${i(e).replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}`, `lucide-${e}`, r),
                            ...s
                        }));
                return r.displayName = i(e),
                    r
            }
            , d = o("shield-check", [["path", {
                d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
                key: "oel41y"
            }], ["path", {
                d: "m9 12 2 2 4-4",
                key: "dzmm74"
            }]])
            , u = o("headphones", [["path", {
                d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
                key: "1xhozi"
            }]]);
        function c() {
            return (0,
                t.jsxs)("header", {
                    className: "relative overflow-hidden bg-gradient-to-r from-primary via-accent to-primary px-6 py-4",
                    children: [(0,
                        t.jsx)("div", {
                            className: "absolute -left-8 -bottom-8 h-20 w-20 rounded-full bg-secondary/30",
                            "aria-hidden": "true"
                        }), (0,
                            t.jsx)("div", {
                                className: "absolute -right-5 -top-5 h-12 w-12 rounded-full bg-primary-foreground/10",
                                "aria-hidden": "true"
                            }), (0,
                                t.jsxs)("div", {
                                    className: "relative flex items-center gap-3",
                                    children: [(0,
                                        t.jsx)("div", {
                                            className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/15 ring-1 ring-primary-foreground/25 backdrop-blur-sm",
                                            children: (0,
                                                t.jsx)(u, {
                                                    className: "h-5 w-5 text-primary-foreground",
                                                    "aria-hidden": "true"
                                                })
                                        }), (0,
                                            t.jsxs)("div", {
                                                className: "flex flex-col",
                                                children: [(0,
                                                    t.jsx)("span", {
                                                        className: "text-[0.55rem] font-semibold uppercase tracking-[0.25em] text-primary-foreground/80",
                                                        children: "Suporte Oficial"
                                                    }), (0,
                                                        t.jsx)("h1", {
                                                            className: "text-base font-bold leading-tight text-primary-foreground text-balance",
                                                            children: "Central de Atendimento"
                                                        })]
                                            })]
                                })]
                })
        }
        function f({ onComplete: e }) {
            let [r, i] = (0,
                n.useState)(0);
            (0,
                n.useEffect)(() => {
                    let t = setInterval(() => {
                        i(r => {
                            let n = r + 1;
                            return n >= 100 ? (clearInterval(t),
                                setTimeout(() => e(), 150),
                                100) : n
                        }
                        )
                    }
                        , 30);
                    return () => clearInterval(t)
                }
                    , [e]);
            let a = Math.round(r);
            return (0,
                t.jsx)("main", {
                    className: "flex min-h-dvh items-center justify-center bg-background px-4 py-8",
                    children: (0,
                        t.jsxs)("div", {
                            className: "w-full max-w-sm overflow-hidden rounded-2xl bg-card shadow-xl",
                            children: [(0,
                                t.jsx)(c, {}), (0,
                                    t.jsxs)("div", {
                                        className: "flex flex-col items-center px-6 py-10",
                                        children: [(0,
                                            t.jsx)("div", {
                                                className: "mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-md",
                                                children: (0,
                                                    t.jsx)(u, {
                                                        className: "h-9 w-9 text-primary-foreground",
                                                        "aria-hidden": "true"
                                                    })
                                            }), (0,
                                                t.jsx)("h2", {
                                                    className: "mb-1 text-center text-xl font-bold text-primary",
                                                    children: "Conectando você..."
                                                }), (0,
                                                    t.jsx)("p", {
                                                        className: "mb-6 text-center text-sm text-muted-foreground",
                                                        children: "Estamos preparando seu atendimento."
                                                    }), (0,
                                                        t.jsxs)("div", {
                                                            className: "w-full",
                                                            children: [(0,
                                                                t.jsx)("div", {
                                                                    className: "mb-2 h-2 w-full overflow-hidden rounded-full bg-muted",
                                                                    children: (0,
                                                                        t.jsx)("div", {
                                                                            className: "h-full rounded-full bg-primary transition-all duration-75 ease-linear",
                                                                            style: {
                                                                                width: `${r}%`
                                                                            }
                                                                        })
                                                                }), (0,
                                                                    t.jsxs)("div", {
                                                                        className: "flex items-center justify-between text-xs text-muted-foreground",
                                                                        children: [(0,
                                                                            t.jsx)("span", {
                                                                                children: "Carregando"
                                                                            }), (0,
                                                                                t.jsxs)("span", {
                                                                                    children: [a, "%"]
                                                                                })]
                                                                    })]
                                                        })]
                                    })]
                        })
                })
        }
        function m() {
            return (0,
                t.jsxs)("div", {
                    className: "flex items-center gap-4 rounded-2xl border border-border bg-muted/50 p-4",
                    children: [(0,
                        t.jsx)("div", {
                            className: "relative shrink-0 overflow-hidden rounded-full border-2 border-primary/15 shadow-md",
                            children: (0,
                                t.jsx)(r.default, {
                                    src: "/atendente.png",
                                    alt: "Consultora de atendimento",
                                    width: 140,
                                    height: 140,
                                    sizes: "72px",
                                    quality: 70,
                                    className: "block h-[4.5rem] w-[4.5rem] object-cover",
                                    priority: !0,
                                    fetchPriority: "high"
                                })
                        }), (0,
                            t.jsxs)("div", {
                                className: "flex flex-col text-left",
                                children: [(0,
                                    t.jsx)("span", {
                                        className: "text-base font-bold text-card-foreground",
                                        children: "Equipe de Suporte"
                                    }), (0,
                                        t.jsx)("span", {
                                            className: "text-xs text-muted-foreground",
                                            children: "Pronta para te ajudar agora"
                                        }), (0,
                                            t.jsxs)("span", {
                                                className: "mt-1.5 inline-flex w-fit items-center gap-1.5 rounded-full bg-secondary/40 px-2.5 py-0.5",
                                                children: [(0,
                                                    t.jsx)("span", {
                                                        className: "h-1.5 w-1.5 animate-pulse rounded-full bg-green-500",
                                                        "aria-hidden": "true"
                                                    }), (0,
                                                        t.jsx)("span", {
                                                            className: "text-[0.7rem] font-medium text-card-foreground",
                                                            children: "Online agora"
                                                        })]
                                            })]
                            })]
                })
        }
        function p({ text: e, style: r }) {
            return (0,
                t.jsx)("a", {
                    href: "https://simeboavione.site/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: `flex h-12 w-full items-center justify-center rounded-full text-base font-semibold shadow-sm transition-all hover:opacity-90 ${"primary" === r ? "bg-primary text-primary-foreground" : "border-2 border-primary bg-transparent text-primary"}`,
                    children: e
                })
        }
        function h() {
            return (0,
                t.jsxs)("div", {
                    className: "mt-4 flex items-center gap-3 text-xs text-muted-foreground",
                    children: [(0,
                        t.jsx)("a", {
                            href: "/politica-de-privacidade",
                            className: "hover:underline",
                            children: "Política de Privacidade"
                        }), (0,
                            t.jsx)("span", {
                                className: "text-border",
                                "aria-hidden": "true",
                                children: "|"
                            }), (0,
                                t.jsx)("a", {
                                    href: "/termos-de-uso",
                                    className: "hover:underline",
                                    children: "Termos de Uso"
                                })]
                })
        }
        function g() {
            let [e, r] = (0,
                n.useState)(!1)
                , i = (0,
                    n.useCallback)(() => r(!0), []);
            return e ? (0,
                t.jsx)("main", {
                    className: "flex min-h-dvh items-center justify-center bg-background px-4 py-8",
                    children: (0,
                        t.jsxs)("article", {
                            className: "w-full max-w-sm overflow-hidden rounded-2xl bg-card shadow-xl",
                            children: [(0,
                                t.jsx)(c, {}), (0,
                                    t.jsxs)("div", {
                                        className: "flex flex-col px-6 pb-5 pt-5",
                                        children: [(0,
                                            t.jsx)("div", {
                                                className: "mb-4",
                                                children: (0,
                                                    t.jsx)(m, {})
                                            }), (0,
                                                t.jsxs)("div", {
                                                    className: "mb-5 text-center",
                                                    children: [(0,
                                                        t.jsx)("p", {
                                                            className: "text-xl font-bold text-card-foreground text-balance",
                                                            children: "Tem alguma dúvida?"
                                                        }), (0,
                                                            t.jsxs)("p", {
                                                                className: "mt-1 text-base text-card-foreground",
                                                                children: ["Fale com ", (0,
                                                                    t.jsx)("strong", {
                                                                        className: "text-primary",
                                                                        children: "nossos especialistas!"
                                                                    })]
                                                            }), (0,
                                                                t.jsx)("p", {
                                                                    className: "mt-3 rounded-xl bg-accent/10 px-4 py-3 text-sm text-muted-foreground",
                                                                    children: "Atendimento digital para esclarecimento de informações gerais."
                                                                })]
                                                }), (0,
                                                    t.jsxs)("div", {
                                                        className: "flex w-full flex-col gap-3",
                                                        children: [(0,
                                                            t.jsx)(p, {
                                                                text: "Iniciar Atendimento",
                                                                style: "primary"
                                                            }), (0,
                                                                t.jsx)(p, {
                                                                    text: "Saiba Mais",
                                                                    style: "secondary"
                                                                })]
                                                    }), (0,
                                                        t.jsxs)("div", {
                                                            className: "mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary/5 py-2.5 text-xs font-medium text-muted-foreground",
                                                            children: [(0,
                                                                t.jsx)(d, {
                                                                    className: "h-4 w-4 text-accent",
                                                                    "aria-hidden": "true"
                                                                }), (0,
                                                                    t.jsx)("span", {
                                                                        children: "Atendimento seguro e confidencial"
                                                                    })]
                                                        }), (0,
                                                            t.jsx)("div", {
                                                                className: "flex justify-center",
                                                                children: (0,
                                                                    t.jsx)(h, {})
                                                            })]
                                    })]
                        })
                }) : (0,
                    t.jsx)(f, {
                        onComplete: i
                    })
        }
        e.s(["default", () => g], 31713)
    }
]);
