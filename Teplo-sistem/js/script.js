
window.onload = function() {
    setTimeout(function(){
        let preloader = document.getElementById('cube-loader');
        
        if(!preloader.classList.contains('done')){
            preloader.classList.add('done');
        }
    }, 1000);
};;
const btn = document.querySelector('.menu-button');
const menu = document.querySelector('.mobile__navbar');



const modal = ()=>{
   menu.classList.toggle('hide');
   menu.classList.toggle('show');
   btn.classList.toggle('line_active');
}

menu.addEventListener('click', event => {
   const target = event.target
   if(!target.closest('.menu-mobile__body')){
      modal();
   }
});
btn.addEventListener('click', modal);
;
! function (t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Parallax = t()
    }
}(function () {
    return function t(e, i, n) {
        function o(r, a) {
            if (!i[r]) {
                if (!e[r]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(r, !0);
                    if (s) return s(r, !0);
                    var h = new Error("Cannot find module '" + r + "'");
                    throw h.code = "MODULE_NOT_FOUND", h
                }
                var u = i[r] = {
                    exports: {}
                };
                e[r][0].call(u.exports, function (t) {
                    var i = e[r][1][t];
                    return o(i || t)
                }, u, u.exports, t, e, i, n)
            }
            return i[r].exports
        }
        for (var s = "function" == typeof require && require, r = 0; r < n.length; r++) o(n[r]);
        return o
    }({
        1: [function (t, e, i) {
            "use strict";

            function n(t) {
                if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(t)
            }
            var o = Object.getOwnPropertySymbols,
                s = Object.prototype.hasOwnProperty,
                r = Object.prototype.propertyIsEnumerable;
            e.exports = function () {
                try {
                    if (!Object.assign) return !1;
                    var t = new String("abc");
                    if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                    for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
                    if ("0123456789" !== Object.getOwnPropertyNames(e).map(function (t) {
                            return e[t]
                        }).join("")) return !1;
                    var n = {};
                    return "abcdefghijklmnopqrst".split("").forEach(function (t) {
                        n[t] = t
                    }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                } catch (t) {
                    return !1
                }
            }() ? Object.assign : function (t, e) {
                for (var i, a, l = n(t), h = 1; h < arguments.length; h++) {
                    i = Object(arguments[h]);
                    for (var u in i) s.call(i, u) && (l[u] = i[u]);
                    if (o) {
                        a = o(i);
                        for (var c = 0; c < a.length; c++) r.call(i, a[c]) && (l[a[c]] = i[a[c]])
                    }
                }
                return l
            }
        }, {}],
        2: [function (t, e, i) {
            (function (t) {
                (function () {
                    var i, n, o, s, r, a;
                    "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function () {
                        return performance.now()
                    } : void 0 !== t && null !== t && t.hrtime ? (e.exports = function () {
                        return (i() - r) / 1e6
                    }, n = t.hrtime, s = (i = function () {
                        var t;
                        return 1e9 * (t = n())[0] + t[1]
                    })(), a = 1e9 * t.uptime(), r = s - a) : Date.now ? (e.exports = function () {
                        return Date.now() - o
                    }, o = Date.now()) : (e.exports = function () {
                        return (new Date).getTime() - o
                    }, o = (new Date).getTime())
                }).call(this)
            }).call(this, t("_process"))
        }, {
            _process: 3
        }],
        3: [function (t, e, i) {
            function n() {
                throw new Error("setTimeout has not been defined")
            }

            function o() {
                throw new Error("clearTimeout has not been defined")
            }

            function s(t) {
                if (c === setTimeout) return setTimeout(t, 0);
                if ((c === n || !c) && setTimeout) return c = setTimeout, setTimeout(t, 0);
                try {
                    return c(t, 0)
                } catch (e) {
                    try {
                        return c.call(null, t, 0)
                    } catch (e) {
                        return c.call(this, t, 0)
                    }
                }
            }

            function r(t) {
                if (d === clearTimeout) return clearTimeout(t);
                if ((d === o || !d) && clearTimeout) return d = clearTimeout, clearTimeout(t);
                try {
                    return d(t)
                } catch (e) {
                    try {
                        return d.call(null, t)
                    } catch (e) {
                        return d.call(this, t)
                    }
                }
            }

            function a() {
                v && p && (v = !1, p.length ? f = p.concat(f) : y = -1, f.length && l())
            }

            function l() {
                if (!v) {
                    var t = s(a);
                    v = !0;
                    for (var e = f.length; e;) {
                        for (p = f, f = []; ++y < e;) p && p[y].run();
                        y = -1, e = f.length
                    }
                    p = null, v = !1, r(t)
                }
            }

            function h(t, e) {
                this.fun = t, this.array = e
            }

            function u() {}
            var c, d, m = e.exports = {};
            ! function () {
                try {
                    c = "function" == typeof setTimeout ? setTimeout : n
                } catch (t) {
                    c = n
                }
                try {
                    d = "function" == typeof clearTimeout ? clearTimeout : o
                } catch (t) {
                    d = o
                }
            }();
            var p, f = [],
                v = !1,
                y = -1;
            m.nextTick = function (t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                f.push(new h(t, e)), 1 !== f.length || v || s(l)
            }, h.prototype.run = function () {
                this.fun.apply(null, this.array)
            }, m.title = "browser", m.browser = !0, m.env = {}, m.argv = [], m.version = "", m.versions = {}, m.on = u, m.addListener = u, m.once = u, m.off = u, m.removeListener = u, m.removeAllListeners = u, m.emit = u, m.prependListener = u, m.prependOnceListener = u, m.listeners = function (t) {
                return []
            }, m.binding = function (t) {
                throw new Error("process.binding is not supported")
            }, m.cwd = function () {
                return "/"
            }, m.chdir = function (t) {
                throw new Error("process.chdir is not supported")
            }, m.umask = function () {
                return 0
            }
        }, {}],
        4: [function (t, e, i) {
            (function (i) {
                for (var n = t("performance-now"), o = "undefined" == typeof window ? i : window, s = ["moz", "webkit"], r = "AnimationFrame", a = o["request" + r], l = o["cancel" + r] || o["cancelRequest" + r], h = 0; !a && h < s.length; h++) a = o[s[h] + "Request" + r], l = o[s[h] + "Cancel" + r] || o[s[h] + "CancelRequest" + r];
                if (!a || !l) {
                    var u = 0,
                        c = 0,
                        d = [];
                    a = function (t) {
                        if (0 === d.length) {
                            var e = n(),
                                i = Math.max(0, 1e3 / 60 - (e - u));
                            u = i + e, setTimeout(function () {
                                var t = d.slice(0);
                                d.length = 0;
                                for (var e = 0; e < t.length; e++)
                                    if (!t[e].cancelled) try {
                                        t[e].callback(u)
                                    } catch (t) {
                                        setTimeout(function () {
                                            throw t
                                        }, 0)
                                    }
                            }, Math.round(i))
                        }
                        return d.push({
                            handle: ++c,
                            callback: t,
                            cancelled: !1
                        }), c
                    }, l = function (t) {
                        for (var e = 0; e < d.length; e++) d[e].handle === t && (d[e].cancelled = !0)
                    }
                }
                e.exports = function (t) {
                    return a.call(o, t)
                }, e.exports.cancel = function () {
                    l.apply(o, arguments)
                }, e.exports.polyfill = function () {
                    o.requestAnimationFrame = a, o.cancelAnimationFrame = l
                }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "performance-now": 2
        }],
        5: [function (t, e, i) {
            "use strict";

            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            var o = function () {
                    function t(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function (e, i, n) {
                        return i && t(e.prototype, i), n && t(e, n), e
                    }
                }(),
                s = t("raf"),
                r = t("object-assign"),
                a = {
                    propertyCache: {},
                    vendors: [null, ["-webkit-", "webkit"],
                        ["-moz-", "Moz"],
                        ["-o-", "O"],
                        ["-ms-", "ms"]
                    ],
                    clamp: function (t, e, i) {
                        return e < i ? t < e ? e : t > i ? i : t : t < i ? i : t > e ? e : t
                    },
                    data: function (t, e) {
                        return a.deserialize(t.getAttribute("data-" + e))
                    },
                    deserialize: function (t) {
                        return "true" === t || "false" !== t && ("null" === t ? null : !isNaN(parseFloat(t)) && isFinite(t) ? parseFloat(t) : t)
                    },
                    camelCase: function (t) {
                        return t.replace(/-+(.)?/g, function (t, e) {
                            return e ? e.toUpperCase() : ""
                        })
                    },
                    accelerate: function (t) {
                        a.css(t, "transform", "translate3d(0,0,0) rotate(0.0001deg)"), a.css(t, "transform-style", "preserve-3d"), a.css(t, "backface-visibility", "hidden")
                    },
                    transformSupport: function (t) {
                        for (var e = document.createElement("div"), i = !1, n = null, o = !1, s = null, r = null, l = 0, h = a.vendors.length; l < h; l++)
                            if (null !== a.vendors[l] ? (s = a.vendors[l][0] + "transform", r = a.vendors[l][1] + "Transform") : (s = "transform", r = "transform"), void 0 !== e.style[r]) {
                                i = !0;
                                break
                            } switch (t) {
                            case "2D":
                                o = i;
                                break;
                            case "3D":
                                if (i) {
                                    var u = document.body || document.createElement("body"),
                                        c = document.documentElement,
                                        d = c.style.overflow,
                                        m = !1;
                                    document.body || (m = !0, c.style.overflow = "hidden", c.appendChild(u), u.style.overflow = "hidden", u.style.background = ""), u.appendChild(e), e.style[r] = "translate3d(1px,1px,1px)", o = void 0 !== (n = window.getComputedStyle(e).getPropertyValue(s)) && n.length > 0 && "none" !== n, c.style.overflow = d, u.removeChild(e), m && (u.removeAttribute("style"), u.parentNode.removeChild(u))
                                }
                        }
                        return o
                    },
                    css: function (t, e, i) {
                        var n = a.propertyCache[e];
                        if (!n)
                            for (var o = 0, s = a.vendors.length; o < s; o++)
                                if (n = null !== a.vendors[o] ? a.camelCase(a.vendors[o][1] + "-" + e) : e, void 0 !== t.style[n]) {
                                    a.propertyCache[e] = n;
                                    break
                                } t.style[n] = i
                    }
                },
                l = {
                    relativeInput: !1,
                    clipRelativeInput: !1,
                    inputElement: null,
                    hoverOnly: !1,
                    calibrationThreshold: 100,
                    calibrationDelay: 500,
                    supportDelay: 500,
                    calibrateX: !1,
                    calibrateY: !0,
                    invertX: !0,
                    invertY: !0,
                    limitX: !1,
                    limitY: !1,
                    scalarX: 10,
                    scalarY: 10,
                    frictionX: .1,
                    frictionY: .1,
                    originX: .5,
                    originY: .5,
                    pointerEvents: !1,
                    precision: 1,
                    onReady: null,
                    selector: null
                },
                h = function () {
                    function t(e, i) {
                        n(this, t), this.element = e;
                        var o = {
                            calibrateX: a.data(this.element, "calibrate-x"),
                            calibrateY: a.data(this.element, "calibrate-y"),
                            invertX: a.data(this.element, "invert-x"),
                            invertY: a.data(this.element, "invert-y"),
                            limitX: a.data(this.element, "limit-x"),
                            limitY: a.data(this.element, "limit-y"),
                            scalarX: a.data(this.element, "scalar-x"),
                            scalarY: a.data(this.element, "scalar-y"),
                            frictionX: a.data(this.element, "friction-x"),
                            frictionY: a.data(this.element, "friction-y"),
                            originX: a.data(this.element, "origin-x"),
                            originY: a.data(this.element, "origin-y"),
                            pointerEvents: a.data(this.element, "pointer-events"),
                            precision: a.data(this.element, "precision"),
                            relativeInput: a.data(this.element, "relative-input"),
                            clipRelativeInput: a.data(this.element, "clip-relative-input"),
                            hoverOnly: a.data(this.element, "hover-only"),
                            inputElement: document.querySelector(a.data(this.element, "input-element")),
                            selector: a.data(this.element, "selector")
                        };
                        for (var s in o) null === o[s] && delete o[s];
                        r(this, l, o, i), this.inputElement || (this.inputElement = this.element), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depthsX = [], this.depthsY = [], this.raf = null, this.bounds = null, this.elementPositionX = 0, this.elementPositionY = 0, this.elementWidth = 0, this.elementHeight = 0, this.elementCenterX = 0, this.elementCenterY = 0, this.elementRangeX = 0, this.elementRangeY = 0, this.calibrationX = 0, this.calibrationY = 0, this.inputX = 0, this.inputY = 0, this.motionX = 0, this.motionY = 0, this.velocityX = 0, this.velocityY = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onDeviceMotion = this.onDeviceMotion.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onMotionTimer = this.onMotionTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.windowWidth = null, this.windowHeight = null, this.windowCenterX = null, this.windowCenterY = null, this.windowRadiusX = null, this.windowRadiusY = null, this.portrait = !1, this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), this.motionSupport = !!window.DeviceMotionEvent && !this.desktop, this.orientationSupport = !!window.DeviceOrientationEvent && !this.desktop, this.orientationStatus = 0, this.motionStatus = 0, this.initialise()
                    }
                    return o(t, [{
                        key: "initialise",
                        value: function () {
                            void 0 === this.transform2DSupport && (this.transform2DSupport = a.transformSupport("2D"), this.transform3DSupport = a.transformSupport("3D")), this.transform3DSupport && a.accelerate(this.element), "static" === window.getComputedStyle(this.element).getPropertyValue("position") && (this.element.style.position = "relative"), this.pointerEvents || (this.element.style.pointerEvents = "none"), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
                        }
                    }, {
                        key: "doReadyCallback",
                        value: function () {
                            this.onReady && this.onReady()
                        }
                    }, {
                        key: "updateLayers",
                        value: function () {
                            this.selector ? this.layers = this.element.querySelectorAll(this.selector) : this.layers = this.element.children, this.layers.length || console.warn("ParallaxJS: Your scene does not have any layers."), this.depthsX = [], this.depthsY = [];
                            for (var t = 0; t < this.layers.length; t++) {
                                var e = this.layers[t];
                                this.transform3DSupport && a.accelerate(e), e.style.position = t ? "absolute" : "relative", e.style.display = "block", e.style.left = 0, e.style.top = 0;
                                var i = a.data(e, "depth") || 0;
                                this.depthsX.push(a.data(e, "depth-x") || i), this.depthsY.push(a.data(e, "depth-y") || i)
                            }
                        }
                    }, {
                        key: "updateDimensions",
                        value: function () {
                            this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight, this.windowCenterX = this.windowWidth * this.originX, this.windowCenterY = this.windowHeight * this.originY, this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX), this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY)
                        }
                    }, {
                        key: "updateBounds",
                        value: function () {
                            this.bounds = this.inputElement.getBoundingClientRect(), this.elementPositionX = this.bounds.left, this.elementPositionY = this.bounds.top, this.elementWidth = this.bounds.width, this.elementHeight = this.bounds.height, this.elementCenterX = this.elementWidth * this.originX, this.elementCenterY = this.elementHeight * this.originY, this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX), this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY)
                        }
                    }, {
                        key: "queueCalibration",
                        value: function (t) {
                            clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t)
                        }
                    }, {
                        key: "enable",
                        value: function () {
                            this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = !1, window.addEventListener("deviceorientation", this.onDeviceOrientation), this.detectionTimer = setTimeout(this.onOrientationTimer, this.supportDelay)) : this.motionSupport ? (this.portrait = !1, window.addEventListener("devicemotion", this.onDeviceMotion), this.detectionTimer = setTimeout(this.onMotionTimer, this.supportDelay)) : (this.calibrationX = 0, this.calibrationY = 0, this.portrait = !1, window.addEventListener("mousemove", this.onMouseMove), this.doReadyCallback()), window.addEventListener("resize", this.onWindowResize), this.raf = s(this.onAnimationFrame))
                        }
                    }, {
                        key: "disable",
                        value: function () {
                            this.enabled && (this.enabled = !1, this.orientationSupport ? window.removeEventListener("deviceorientation", this.onDeviceOrientation) : this.motionSupport ? window.removeEventListener("devicemotion", this.onDeviceMotion) : window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("resize", this.onWindowResize), s.cancel(this.raf))
                        }
                    }, {
                        key: "calibrate",
                        value: function (t, e) {
                            this.calibrateX = void 0 === t ? this.calibrateX : t, this.calibrateY = void 0 === e ? this.calibrateY : e
                        }
                    }, {
                        key: "invert",
                        value: function (t, e) {
                            this.invertX = void 0 === t ? this.invertX : t, this.invertY = void 0 === e ? this.invertY : e
                        }
                    }, {
                        key: "friction",
                        value: function (t, e) {
                            this.frictionX = void 0 === t ? this.frictionX : t, this.frictionY = void 0 === e ? this.frictionY : e
                        }
                    }, {
                        key: "scalar",
                        value: function (t, e) {
                            this.scalarX = void 0 === t ? this.scalarX : t, this.scalarY = void 0 === e ? this.scalarY : e
                        }
                    }, {
                        key: "limit",
                        value: function (t, e) {
                            this.limitX = void 0 === t ? this.limitX : t, this.limitY = void 0 === e ? this.limitY : e
                        }
                    }, {
                        key: "origin",
                        value: function (t, e) {
                            this.originX = void 0 === t ? this.originX : t, this.originY = void 0 === e ? this.originY : e
                        }
                    }, {
                        key: "setInputElement",
                        value: function (t) {
                            this.inputElement = t, this.updateDimensions()
                        }
                    }, {
                        key: "setPosition",
                        value: function (t, e, i) {
                            e = e.toFixed(this.precision) + "px", i = i.toFixed(this.precision) + "px", this.transform3DSupport ? a.css(t, "transform", "translate3d(" + e + "," + i + ",0)") : this.transform2DSupport ? a.css(t, "transform", "translate(" + e + "," + i + ")") : (t.style.left = e, t.style.top = i)
                        }
                    }, {
                        key: "onOrientationTimer",
                        value: function () {
                            this.orientationSupport && 0 === this.orientationStatus ? (this.disable(), this.orientationSupport = !1, this.enable()) : this.doReadyCallback()
                        }
                    }, {
                        key: "onMotionTimer",
                        value: function () {
                            this.motionSupport && 0 === this.motionStatus ? (this.disable(), this.motionSupport = !1, this.enable()) : this.doReadyCallback()
                        }
                    }, {
                        key: "onCalibrationTimer",
                        value: function () {
                            this.calibrationFlag = !0
                        }
                    }, {
                        key: "onWindowResize",
                        value: function () {
                            this.updateDimensions()
                        }
                    }, {
                        key: "onAnimationFrame",
                        value: function () {
                            this.updateBounds();
                            var t = this.inputX - this.calibrationX,
                                e = this.inputY - this.calibrationY;
                            (Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.motionX = this.calibrateX ? e : this.inputY, this.motionY = this.calibrateY ? t : this.inputX) : (this.motionX = this.calibrateX ? t : this.inputX, this.motionY = this.calibrateY ? e : this.inputY), this.motionX *= this.elementWidth * (this.scalarX / 100), this.motionY *= this.elementHeight * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.motionX = a.clamp(this.motionX, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.motionY = a.clamp(this.motionY, -this.limitY, this.limitY)), this.velocityX += (this.motionX - this.velocityX) * this.frictionX, this.velocityY += (this.motionY - this.velocityY) * this.frictionY;
                            for (var i = 0; i < this.layers.length; i++) {
                                var n = this.layers[i],
                                    o = this.depthsX[i],
                                    r = this.depthsY[i],
                                    l = this.velocityX * (o * (this.invertX ? -1 : 1)),
                                    h = this.velocityY * (r * (this.invertY ? -1 : 1));
                                this.setPosition(n, l, h)
                            }
                            this.raf = s(this.onAnimationFrame)
                        }
                    }, {
                        key: "rotate",
                        value: function (t, e) {
                            var i = (t || 0) / 30,
                                n = (e || 0) / 30,
                                o = this.windowHeight > this.windowWidth;
                            this.portrait !== o && (this.portrait = o, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.calibrationX = i, this.calibrationY = n), this.inputX = i, this.inputY = n
                        }
                    }, {
                        key: "onDeviceOrientation",
                        value: function (t) {
                            var e = t.beta,
                                i = t.gamma;
                            null !== e && null !== i && (this.orientationStatus = 1, this.rotate(e, i))
                        }
                    }, {
                        key: "onDeviceMotion",
                        value: function (t) {
                            var e = t.rotationRate.beta,
                                i = t.rotationRate.gamma;
                            null !== e && null !== i && (this.motionStatus = 1, this.rotate(e, i))
                        }
                    }, {
                        key: "onMouseMove",
                        value: function (t) {
                            var e = t.clientX,
                                i = t.clientY;
                            if (this.hoverOnly && (e < this.elementPositionX || e > this.elementPositionX + this.elementWidth || i < this.elementPositionY || i > this.elementPositionY + this.elementHeight)) return this.inputX = 0, void(this.inputY = 0);
                            this.relativeInput ? (this.clipRelativeInput && (e = Math.max(e, this.elementPositionX), e = Math.min(e, this.elementPositionX + this.elementWidth), i = Math.max(i, this.elementPositionY), i = Math.min(i, this.elementPositionY + this.elementHeight)), this.elementRangeX && this.elementRangeY && (this.inputX = (e - this.elementPositionX - this.elementCenterX) / this.elementRangeX, this.inputY = (i - this.elementPositionY - this.elementCenterY) / this.elementRangeY)) : this.windowRadiusX && this.windowRadiusY && (this.inputX = (e - this.windowCenterX) / this.windowRadiusX, this.inputY = (i - this.windowCenterY) / this.windowRadiusY)
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            this.disable(), clearTimeout(this.calibrationTimer), clearTimeout(this.detectionTimer), this.element.removeAttribute("style");
                            for (var t = 0; t < this.layers.length; t++) this.layers[t].removeAttribute("style");
                            delete this.element, delete this.layers
                        }
                    }, {
                        key: "version",
                        value: function () {
                            return "3.1.0"
                        }
                    }]), t
                }();
            e.exports = h
        }, {
            "object-assign": 1,
            raf: 4
        }]
    }, {}, [5])(5)
});
//# sourceMappingURL=parallax.min.js.map;
/*!
 * jquery.inputmask.bundle.js
 * https://github.com/RobinHerbots/jquery.inputmask
 * Copyright (c) 2010 - 2017 Robin Herbots
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 3.3.5-178
 */
! function (a) {
    window.Inputmask = a(window.dependencyLib || jQuery, window, document)
}(function (a, b, c, d) {
    function e(b, c, g) {
        return this instanceof e ? (this.el = d, this.events = {}, this.maskset = d, this.refreshValue = !1, void(g !== !0 && (a.isPlainObject(b) ? c = b : (c = c || {}, c.alias = b), this.opts = a.extend(!0, {}, this.defaults, c), this.noMasksCache = c && c.definitions !== d, this.userOptions = c || {}, this.isRTL = this.opts.numericInput, f(this.opts.alias, c, this.opts)))) : new e(b, c, g)
    }

    function f(b, c, g) {
        var h = e.prototype.aliases[b];
        return h ? (h.alias && f(h.alias, d, g), a.extend(!0, g, h), a.extend(!0, g, c), !0) : (null === g.mask && (g.mask = b), !1)
    }

    function g(b, c) {
        function f(b, f, g) {
            if (null !== b && "" !== b || (b = "*{*}"), 1 === b.length && g.greedy === !1 && 0 !== g.repeat && (g.placeholder = ""), g.repeat > 0 || "*" === g.repeat || "+" === g.repeat) {
                var h = "*" === g.repeat ? 0 : "+" === g.repeat ? 1 : g.repeat;
                b = g.groupmarker.start + b + g.groupmarker.end + g.quantifiermarker.start + h + "," + g.repeat + g.quantifiermarker.end
            }
            var i;
            return e.prototype.masksCache[b] === d || c === !0 ? (i = {
                mask: b,
                maskToken: e.prototype.analyseMask(b, g),
                validPositions: {},
                _buffer: d,
                buffer: d,
                tests: {},
                metadata: f,
                maskLength: d
            }, c !== !0 && (e.prototype.masksCache[g.numericInput ? b.split("").reverse().join("") : b] = i, i = a.extend(!0, {}, e.prototype.masksCache[g.numericInput ? b.split("").reverse().join("") : b]))) : i = a.extend(!0, {}, e.prototype.masksCache[g.numericInput ? b.split("").reverse().join("") : b]), i
        }
        var g;
        if (a.isFunction(b.mask) && (b.mask = b.mask(b)), a.isArray(b.mask)) {
            if (b.mask.length > 1) {
                b.keepStatic = null === b.keepStatic || b.keepStatic;
                var h = b.groupmarker.start;
                return a.each(b.numericInput ? b.mask.reverse() : b.mask, function (c, e) {
                    h.length > 1 && (h += b.groupmarker.end + b.alternatormarker + b.groupmarker.start), h += e.mask === d || a.isFunction(e.mask) ? e : e.mask
                }), h += b.groupmarker.end, f(h, b.mask, b)
            }
            b.mask = b.mask.pop()
        }
        return g = b.mask && b.mask.mask !== d && !a.isFunction(b.mask.mask) ? f(b.mask.mask, b.mask, b) : f(b.mask, b.mask, b)
    }

    function h(f, g, i) {
        function n(a, b, c) {
            b = b || 0;
            var e, f, g, h = [],
                j = 0,
                k = q();
            V = Y !== d ? Y.maxLength : d, V === -1 && (V = d);
            do a === !0 && o().validPositions[j] ? (g = o().validPositions[j], f = g.match, e = g.locator.slice(), h.push(c === !0 ? g.input : c === !1 ? f.nativeDef : I(j, f))) : (g = t(j, e, j - 1), f = g.match, e = g.locator.slice(), (i.jitMasking === !1 || j < k || "number" == typeof i.jitMasking && isFinite(i.jitMasking) && i.jitMasking > j) && h.push(c === !1 ? f.nativeDef : I(j, f))), j++; while ((V === d || j < V) && (null !== f.fn || "" !== f.def) || b > j);
            return "" === h[h.length - 1] && h.pop(), o().maskLength = j + 1, h
        }

        function o() {
            return g
        }

        function p(a) {
            var b = o();
            b.buffer = d, a !== !0 && (b.validPositions = {}, b.p = 0)
        }

        function q(a, b, c) {
            var e = -1,
                f = -1,
                g = c || o().validPositions;
            a === d && (a = -1);
            for (var h in g) {
                var i = parseInt(h);
                g[i] && (b || g[i].generatedInput !== !0) && (i <= a && (e = i), i >= a && (f = i))
            }
            return e !== -1 && a - e > 1 || f < a ? e : f
        }

        function r(b, c, e, f) {
            function g(a) {
                var b = o().validPositions[a];
                if (b !== d && null === b.match.fn) {
                    var c = o().validPositions[a - 1],
                        e = o().validPositions[a + 1];
                    return c !== d && e !== d
                }
                return !1
            }
            var h, j = b,
                k = a.extend(!0, {}, o().validPositions),
                l = !1;
            for (o().p = b, h = c - 1; h >= j; h--) o().validPositions[h] !== d && (e !== !0 && (!o().validPositions[h].match.optionality && g(h) || i.canClearPosition(o(), h, q(), f, i) === !1) || delete o().validPositions[h]);
            for (p(!0), h = j + 1; h <= q();) {
                for (; o().validPositions[j] !== d;) j++;
                if (h < j && (h = j + 1), o().validPositions[h] === d && D(h)) h++;
                else {
                    var m = t(h);
                    l === !1 && k[j] && k[j].match.def === m.match.def ? (o().validPositions[j] = a.extend(!0, {}, k[j]), o().validPositions[j].input = m.input, delete o().validPositions[h], h++) : v(j, m.match.def) ? C(j, m.input || I(h), !0) !== !1 && (delete o().validPositions[h], h++, l = !0) : D(h) || (h++, j--), j++
                }
            }
            p(!0)
        }

        function s(a, b) {
            for (var c, e = a, f = q(), g = o().validPositions[f] || w(0)[0], h = g.alternation !== d ? g.locator[g.alternation].toString().split(",") : [], j = 0; j < e.length && (c = e[j], !(c.match && (i.greedy && c.match.optionalQuantifier !== !0 || (c.match.optionality === !1 || c.match.newBlockMarker === !1) && c.match.optionalQuantifier !== !0) && (g.alternation === d || g.alternation !== c.alternation || c.locator[g.alternation] !== d && B(c.locator[g.alternation].toString().split(","), h))) || b === !0 && (null !== c.match.fn || /[0-9a-bA-Z]/.test(c.match.def))); j++);
            return c
        }

        function t(a, b, c) {
            return o().validPositions[a] || s(w(a, b ? b.slice() : b, c))
        }

        function u(a) {
            return o().validPositions[a] ? o().validPositions[a] : w(a)[0]
        }

        function v(a, b) {
            for (var c = !1, d = w(a), e = 0; e < d.length; e++)
                if (d[e].match && d[e].match.def === b) {
                    c = !0;
                    break
                } return c
        }

        function w(b, c, e) {
            function f(c, e, g, h) {
                function k(g, h, m) {
                    function r(b, c) {
                        var d = 0 === a.inArray(b, c.matches);
                        return d || a.each(c.matches, function (a, e) {
                            if (e.isQuantifier === !0 && (d = r(b, c.matches[a - 1]))) return !1
                        }), d
                    }

                    function s(b, c, e) {
                        var f, g;
                        return (o().tests[b] || o().validPositions[b]) && a.each(o().tests[b] || [o().validPositions[b]], function (a, b) {
                            var h = e !== d ? e : b.alternation,
                                i = b.locator[h] !== d ? b.locator[h].toString().indexOf(c) : -1;
                            (g === d || i < g) && i !== -1 && (f = b, g = i)
                        }), f ? f.locator.slice((e !== d ? e : f.alternation) + 1) : e !== d ? s(b, c) : d
                    }

                    function t(a, c) {
                        return null === a.match.fn && null !== c.match.fn && c.match.fn.test(a.match.def, o(), b, !1, i, !1)
                    }
                    if (l > 1e4) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + o().mask;
                    if (l === b && g.matches === d) return n.push({
                        match: g,
                        locator: h.reverse(),
                        cd: q
                    }), !0;
                    if (g.matches !== d) {
                        if (g.isGroup && m !== g) {
                            if (g = k(c.matches[a.inArray(g, c.matches) + 1], h)) return !0
                        } else if (g.isOptional) {
                            var u = g;
                            if (g = f(g, e, h, m)) {
                                if (j = n[n.length - 1].match, !r(j, u)) return !0;
                                p = !0, l = b
                            }
                        } else if (g.isAlternator) {
                            var v, w = g,
                                x = [],
                                y = n.slice(),
                                z = h.length,
                                A = e.length > 0 ? e.shift() : -1;
                            if (A === -1 || "string" == typeof A) {
                                var B, C = l,
                                    D = e.slice(),
                                    E = [];
                                if ("string" == typeof A) E = A.split(",");
                                else
                                    for (B = 0; B < w.matches.length; B++) E.push(B);
                                for (var F = 0; F < E.length; F++) {
                                    if (B = parseInt(E[F]), n = [], e = s(l, B, z) || D.slice(), g = k(w.matches[B] || c.matches[B], [B].concat(h), m) || g, g !== !0 && g !== d && E[E.length - 1] < w.matches.length) {
                                        var G = a.inArray(g, c.matches) + 1;
                                        c.matches.length > G && (g = k(c.matches[G], [G].concat(h.slice(1, h.length)), m), g && (E.push(G.toString()), a.each(n, function (a, b) {
                                            b.alternation = h.length - 1
                                        })))
                                    }
                                    v = n.slice(), l = C, n = [];
                                    for (var H = 0; H < v.length; H++) {
                                        var I = v[H],
                                            J = !1;
                                        I.alternation = I.alternation || z;
                                        for (var K = 0; K < x.length; K++) {
                                            var L = x[K];
                                            if (("string" != typeof A || a.inArray(I.locator[I.alternation].toString(), E) !== -1) && (I.match.def === L.match.def || t(I, L))) {
                                                J = I.match.nativeDef === L.match.nativeDef, I.alternation == L.alternation && L.locator[L.alternation].toString().indexOf(I.locator[I.alternation]) === -1 && (L.locator[L.alternation] = L.locator[L.alternation] + "," + I.locator[I.alternation], L.alternation = I.alternation, null == I.match.fn && (L.na = L.na || I.locator[I.alternation].toString(), L.na.indexOf(I.locator[I.alternation]) === -1 && (L.na = L.na + "," + I.locator[I.alternation])));
                                                break
                                            }
                                        }
                                        J || x.push(I)
                                    }
                                }
                                "string" == typeof A && (x = a.map(x, function (b, c) {
                                    if (isFinite(c)) {
                                        var e, f = b.alternation,
                                            g = b.locator[f].toString().split(",");
                                        b.locator[f] = d, b.alternation = d;
                                        for (var h = 0; h < g.length; h++) e = a.inArray(g[h], E) !== -1, e && (b.locator[f] !== d ? (b.locator[f] += ",", b.locator[f] += g[h]) : b.locator[f] = parseInt(g[h]), b.alternation = f);
                                        if (b.locator[f] !== d) return b
                                    }
                                })), n = y.concat(x), l = b, p = n.length > 0, e = D.slice()
                            } else g = k(w.matches[A] || c.matches[A], [A].concat(h), m);
                            if (g) return !0
                        } else if (g.isQuantifier && m !== c.matches[a.inArray(g, c.matches) - 1])
                            for (var M = g, N = e.length > 0 ? e.shift() : 0; N < (isNaN(M.quantifier.max) ? N + 1 : M.quantifier.max) && l <= b; N++) {
                                var O = c.matches[a.inArray(M, c.matches) - 1];
                                if (g = k(O, [N].concat(h), O)) {
                                    if (j = n[n.length - 1].match, j.optionalQuantifier = N > M.quantifier.min - 1, r(j, O)) {
                                        if (N > M.quantifier.min - 1) {
                                            p = !0, l = b;
                                            break
                                        }
                                        return !0
                                    }
                                    return !0
                                }
                            } else if (g = f(g, e, h, m)) return !0
                    } else l++
                }
                for (var m = e.length > 0 ? e.shift() : 0; m < c.matches.length; m++)
                    if (c.matches[m].isQuantifier !== !0) {
                        var r = k(c.matches[m], [m].concat(g), h);
                        if (r && l === b) return r;
                        if (l > b) break
                    }
            }

            function g(b) {
                var c = [];
                return a.isArray(b) || (b = [b]), b.length > 0 && (b[0].alternation === d ? (c = s(b.slice()).locator.slice(), 0 === c.length && (c = b[0].locator.slice())) : a.each(b, function (a, b) {
                    if ("" !== b.def)
                        if (0 === c.length) c = b.locator.slice();
                        else
                            for (var d = 0; d < c.length; d++) b.locator[d] && c[d].toString().indexOf(b.locator[d]) === -1 && (c[d] += "," + b.locator[d])
                })), c
            }

            function h(a) {
                return i.keepStatic && b > 0 && a.length > 1 + ("" === a[a.length - 1].match.def ? 1 : 0) && a[0].match.optionality !== !0 && a[0].match.optionalQuantifier !== !0 && null === a[0].match.fn && !/[0-9a-bA-Z]/.test(a[0].match.def) ? [s(a)] : a
            }
            var j, k = o().maskToken,
                l = c ? e : 0,
                m = c ? c.slice() : [0],
                n = [],
                p = !1,
                q = c ? c.join("") : "";
            if (b > -1) {
                if (c === d) {
                    for (var r, t = b - 1;
                        (r = o().validPositions[t] || o().tests[t]) === d && t > -1;) t--;
                    r !== d && t > -1 && (m = g(r), q = m.join(""), l = t)
                }
                if (o().tests[b] && o().tests[b][0].cd === q) return h(o().tests[b]);
                for (var u = m.shift(); u < k.length; u++) {
                    var v = f(k[u], m, [u]);
                    if (v && l === b || l > b) break
                }
            }
            return (0 === n.length || p) && n.push({
                match: {
                    fn: null,
                    cardinality: 0,
                    optionality: !0,
                    casing: null,
                    def: "",
                    placeholder: ""
                },
                locator: [],
                cd: q
            }), c !== d && o().tests[b] ? h(a.extend(!0, [], n)) : (o().tests[b] = a.extend(!0, [], n), h(o().tests[b]))
        }

        function x() {
            return o()._buffer === d && (o()._buffer = n(!1, 1), o().buffer === d && (o().buffer = o()._buffer.slice())), o()._buffer
        }

        function y(a) {
            return o().buffer !== d && a !== !0 || (o().buffer = n(!0, q(), !0)), o().buffer
        }

        function z(a, b, c) {
            var e, f;
            if (a === !0) p(), a = 0, b = c.length;
            else
                for (e = a; e < b; e++) delete o().validPositions[e];
            for (f = a, e = a; e < b; e++)
                if (p(!0), c[e] !== i.skipOptionalPartCharacter) {
                    var g = C(f, c[e], !0, !0);
                    g !== !1 && (p(!0), f = g.caret !== d ? g.caret : g.pos + 1)
                }
        }

        function A(a, b, c) {
            switch (i.casing || b.casing) {
                case "upper":
                    a = a.toUpperCase();
                    break;
                case "lower":
                    a = a.toLowerCase();
                    break;
                case "title":
                    var d = o().validPositions[c - 1];
                    a = 0 === c || d && d.input === String.fromCharCode(e.keyCode.SPACE) ? a.toUpperCase() : a.toLowerCase()
            }
            return a
        }

        function B(b, c, e) {
            for (var f, g = i.greedy ? c : c.slice(0, 1), h = !1, j = e !== d ? e.split(",") : [], k = 0; k < j.length; k++)(f = b.indexOf(j[k])) !== -1 && b.splice(f, 1);
            for (var l = 0; l < b.length; l++)
                if (a.inArray(b[l], g) !== -1) {
                    h = !0;
                    break
                } return h
        }

        function C(b, c, f, g, h) {
            function j(a) {
                var b = Z ? a.begin - a.end > 1 || a.begin - a.end === 1 : a.end - a.begin > 1 || a.end - a.begin === 1;
                return b && 0 === a.begin && a.end === o().maskLength ? "full" : b
            }

            function k(c, e, f) {
                var h = !1;
                return a.each(w(c), function (k, l) {
                    for (var m = l.match, s = e ? 1 : 0, t = "", u = m.cardinality; u > s; u--) t += G(c - (u - 1));
                    if (e && (t += e), y(!0), h = null != m.fn ? m.fn.test(t, o(), c, f, i, j(b)) : (e === m.def || e === i.skipOptionalPartCharacter) && "" !== m.def && {
                            c: I(c, m, !0) || m.def,
                            pos: c
                        }, h !== !1) {
                        var v = h.c !== d ? h.c : e;
                        v = v === i.skipOptionalPartCharacter && null === m.fn ? I(c, m, !0) || m.def : v;
                        var w = c,
                            x = y();
                        if (h.remove !== d && (a.isArray(h.remove) || (h.remove = [h.remove]), a.each(h.remove.sort(function (a, b) {
                                return b - a
                            }), function (a, b) {
                                r(b, b + 1, !0)
                            })), h.insert !== d && (a.isArray(h.insert) || (h.insert = [h.insert]), a.each(h.insert.sort(function (a, b) {
                                return a - b
                            }), function (a, b) {
                                C(b.pos, b.c, !0, g)
                            })), h.refreshFromBuffer) {
                            var B = h.refreshFromBuffer;
                            if (z(B === !0 ? B : B.start, B.end, x), h.pos === d && h.c === d) return h.pos = q(), !1;
                            if (w = h.pos !== d ? h.pos : c, w !== c) return h = a.extend(h, C(w, v, !0, g)), !1
                        } else if (h !== !0 && h.pos !== d && h.pos !== c && (w = h.pos, z(c, w, y().slice()), w !== c)) return h = a.extend(h, C(w, v, !0)), !1;
                        return (h === !0 || h.pos !== d || h.c !== d) && (k > 0 && p(!0), n(w, a.extend({}, l, {
                            input: A(v, m, w)
                        }), g, j(b)) || (h = !1), !1)
                    }
                }), h
            }

            function l(b, c, e) {
                var f, h, j, k, l, m, n, r, s = a.extend(!0, {}, o().validPositions),
                    t = !1,
                    u = q();
                for (k = o().validPositions[u]; u >= 0; u--)
                    if (j = o().validPositions[u], j && j.alternation !== d) {
                        if (f = u, h = o().validPositions[f].alternation, k.locator[j.alternation] !== j.locator[j.alternation]) break;
                        k = j
                    } if (h !== d) {
                    r = parseInt(f);
                    var v = k.locator[k.alternation || h] !== d ? k.locator[k.alternation || h] : n[0];
                    v.length > 0 && (v = v.split(",")[0]);
                    var x = o().validPositions[r],
                        y = o().validPositions[r - 1];
                    a.each(w(r, y ? y.locator : d, r - 1), function (f, j) {
                        n = j.locator[h] ? j.locator[h].toString().split(",") : [];
                        for (var k = 0; k < n.length; k++) {
                            var u = [],
                                w = 0,
                                y = 0,
                                z = !1;
                            if (v < n[k] && (j.na === d || a.inArray(n[k], j.na.split(",")) === -1)) {
                                o().validPositions[r] = a.extend(!0, {}, j);
                                var A = o().validPositions[r].locator;
                                for (o().validPositions[r].locator[h] = parseInt(n[k]), null == j.match.fn ? (x.input !== j.match.def && (z = !0, x.generatedInput !== !0 && u.push(x.input)), y++, o().validPositions[r].generatedInput = !/[0-9a-bA-Z]/.test(j.match.def), o().validPositions[r].input = j.match.def) : o().validPositions[r].input = x.input, l = r + 1; l < q(d, !0) + 1; l++) m = o().validPositions[l], m && m.generatedInput !== !0 && /[0-9a-bA-Z]/.test(m.input) ? u.push(m.input) : l < b && w++, delete o().validPositions[l];
                                for (z && u[0] === j.match.def && u.shift(), p(!0), t = !0; u.length > 0;) {
                                    var B = u.shift();
                                    if (B !== i.skipOptionalPartCharacter && !(t = C(q(d, !0) + 1, B, !1, g, !0))) break
                                }
                                if (t) {
                                    o().validPositions[r].locator = A;
                                    var D = q(b) + 1;
                                    for (l = r + 1; l < q() + 1; l++) m = o().validPositions[l], (m === d || null == m.match.fn) && l < b + (y - w) && y++;
                                    b += y - w, t = C(b > D ? D : b, c, e, g, !0)
                                }
                                if (t) return !1;
                                p(), o().validPositions = a.extend(!0, {}, s)
                            }
                        }
                    })
                }
                return t
            }

            function m(b, c) {
                var e = o().validPositions[c];
                if (e)
                    for (var f = e.locator, g = f.length, h = b; h < c; h++)
                        if (o().validPositions[h] === d && !D(h, !0)) {
                            var i = w(h).slice(),
                                j = s(i, !0),
                                l = -1;
                            "" === i[i.length - 1].match.def && i.pop(), a.each(i, function (a, b) {
                                for (var c = 0; c < g; c++) {
                                    if (b.locator[c] === d || !B(b.locator[c].toString().split(","), f[c].toString().split(","), b.na)) {
                                        var e = f[c],
                                            h = j.locator[c],
                                            i = b.locator[c];
                                        e - h > Math.abs(e - i) && (j = b);
                                        break
                                    }
                                    l < c && (l = c, j = b)
                                }
                            }), j = a.extend({}, j, {
                                input: I(h, j.match, !0) || j.match.def
                            }), j.generatedInput = !0, n(h, j, !0), o().validPositions[c] = d, k(c, e.input, !0)
                        }
            }

            function n(b, c, e, f) {
                if (f || i.insertMode && o().validPositions[b] !== d && e === d) {
                    var g, h = a.extend(!0, {}, o().validPositions),
                        j = q(d, !0);
                    for (g = b; g <= j; g++) delete o().validPositions[g];
                    o().validPositions[b] = a.extend(!0, {}, c);
                    var k, l = !0,
                        m = o().validPositions,
                        n = !1,
                        r = o().maskLength;
                    for (g = k = b; g <= j; g++) {
                        var s = h[g];
                        if (s !== d)
                            for (var t = k; t < o().maskLength && (null === s.match.fn && m[g] && (m[g].match.optionalQuantifier === !0 || m[g].match.optionality === !0) || null != s.match.fn);) {
                                if (t++, n === !1 && h[t] && h[t].match.def === s.match.def) o().validPositions[t] = a.extend(!0, {}, h[t]), o().validPositions[t].input = s.input, u(t), k = t, l = !0;
                                else if (v(t, s.match.def)) {
                                    var w = C(t, s.input, !0, !0);
                                    l = w !== !1, k = w.caret || w.insert ? q() : t, n = !0
                                } else if (l = s.generatedInput === !0, !l && t >= o().maskLength - 1) break;
                                if (o().maskLength < r && (o().maskLength = r), l) break
                            }
                        if (!l) break
                    }
                    if (!l) return o().validPositions = a.extend(!0, {}, h), p(!0), !1
                } else o().validPositions[b] = a.extend(!0, {}, c);
                return p(!0), !0
            }

            function u(b) {
                for (var c = b - 1; c > -1 && !o().validPositions[c]; c--);
                var e, f;
                for (c++; c < b; c++) o().validPositions[c] === d && (i.jitMasking === !1 || i.jitMasking > c) && (f = w(c, t(c - 1).locator, c - 1).slice(), "" === f[f.length - 1].match.def && f.pop(), e = s(f), e && (e.match.def === i.radixPointDefinitionSymbol || !D(c, !0) || a.inArray(i.radixPoint, y()) < c && e.match.fn && e.match.fn.test(I(c), o(), c, !1, i)) && (F = k(c, I(c, e.match, !0) || (null == e.match.fn ? e.match.def : "" !== I(c) ? I(c) : y()[c]), !0), F !== !1 && (o().validPositions[F.pos || c].generatedInput = !0)))
            }
            f = f === !0;
            var x = b;
            b.begin !== d && (x = Z && !j(b) ? b.end : b.begin);
            var F = !0,
                H = a.extend(!0, {}, o().validPositions);
            if (a.isFunction(i.preValidation) && !f && g !== !0 && (F = i.preValidation(y(), x, c, j(b), i)), F === !0) {
                if (u(x), j(b) && (P(d, e.keyCode.DELETE, b), x = o().p), x < o().maskLength && (F = k(x, c, f), (!f || g === !0) && F === !1)) {
                    var J = o().validPositions[x];
                    if (!J || null !== J.match.fn || J.match.def !== c && c !== i.skipOptionalPartCharacter) {
                        if ((i.insertMode || o().validPositions[E(x)] === d) && !D(x, !0))
                            for (var K = x + 1, L = E(x); K <= L; K++)
                                if (F = k(K, c, f), F !== !1) {
                                    m(x, F.pos !== d ? F.pos : K), x = K;
                                    break
                                }
                    } else F = {
                        caret: E(x)
                    }
                }
                F === !1 && i.keepStatic && !f && h !== !0 && (F = l(x, c, f)), F === !0 && (F = {
                    pos: x
                })
            }
            if (a.isFunction(i.postValidation) && F !== !1 && !f && g !== !0) {
                var M = i.postValidation(y(!0), F, i);
                if (M.refreshFromBuffer && M.buffer) {
                    var N = M.refreshFromBuffer;
                    z(N === !0 ? N : N.start, N.end, M.buffer)
                }
                F = M === !0 ? F : M
            }
            return F.pos === d && (F.pos = x), F === !1 && (p(!0), o().validPositions = a.extend(!0, {}, H)), F
        }

        function D(a, b) {
            var c = t(a).match;
            if ("" === c.def && (c = u(a).match), null != c.fn) return c.fn;
            if (b !== !0 && a > -1) {
                var d = w(a);
                return d.length > 1 + ("" === d[d.length - 1].match.def ? 1 : 0)
            }
            return !1
        }

        function E(a, b) {
            var c = o().maskLength;
            if (a >= c) return c;
            for (var d = a; ++d < c && (b === !0 && (u(d).match.newBlockMarker !== !0 || !D(d)) || b !== !0 && !D(d)););
            return d
        }

        function F(a, b) {
            var c, d = a;
            if (d <= 0) return 0;
            for (; --d > 0 && (b === !0 && u(d).match.newBlockMarker !== !0 || b !== !0 && !D(d) && (c = w(d), c.length < 2 || 2 === c.length && "" === c[1].match.def)););
            return d
        }

        function G(a) {
            return o().validPositions[a] === d ? I(a) : o().validPositions[a].input
        }

        function H(b, c, e, f, g) {
            if (f && a.isFunction(i.onBeforeWrite)) {
                var h = i.onBeforeWrite(f, c, e, i);
                if (h) {
                    if (h.refreshFromBuffer) {
                        var j = h.refreshFromBuffer;
                        z(j === !0 ? j : j.start, j.end, h.buffer || c), c = y(!0)
                    }
                    e !== d && (e = h.caret !== d ? h.caret : e)
                }
            }
            b !== d && (b.inputmask._valueSet(c.join("")), e === d || f !== d && "blur" === f.type ? R(b, c, e) : m && "input" === f.type ? setTimeout(function () {
                L(b, e)
            }, 0) : L(b, e), g === !0 && (_ = !0, a(b).trigger("input")))
        }

        function I(b, c, e) {
            if (c = c || u(b).match, c.placeholder !== d || e === !0) return a.isFunction(c.placeholder) ? c.placeholder(i) : c.placeholder;
            if (null === c.fn) {
                if (b > -1 && o().validPositions[b] === d) {
                    var f, g = w(b),
                        h = [];
                    if (g.length > 1 + ("" === g[g.length - 1].match.def ? 1 : 0))
                        for (var j = 0; j < g.length; j++)
                            if (g[j].match.optionality !== !0 && g[j].match.optionalQuantifier !== !0 && (null === g[j].match.fn || f === d || g[j].match.fn.test(f.match.def, o(), b, !0, i) !== !1) && (h.push(g[j]), null === g[j].match.fn && (f = g[j]), h.length > 1 && /[0-9a-bA-Z]/.test(h[0].match.def))) return i.placeholder.charAt(b % i.placeholder.length)
                }
                return c.def
            }
            return i.placeholder.charAt(b % i.placeholder.length)
        }

        function J(b, f, g, h, j) {
            function k(a, b) {
                var c = x().slice(a, E(a)).join("").indexOf(b);
                return c !== -1 && !D(a) && u(a).match.nativeDef === b.charAt(b.length - 1)
            }
            var l = h.slice(),
                m = "",
                n = 0,
                r = d;
            if (p(), o().p = E(-1), !g)
                if (i.autoUnmask !== !0) {
                    var s = x().slice(0, E(-1)).join(""),
                        v = l.join("").match(new RegExp("^" + e.escapeRegex(s), "g"));
                    v && v.length > 0 && (l.splice(0, v.length * s.length), n = E(n))
                } else n = E(n);
            if (a.each(l, function (c, e) {
                    if (e !== d) {
                        var f = new a.Event("_checkval");
                        f.which = e.charCodeAt(0), m += e;
                        var h = q(d, !0),
                            j = o().validPositions[h],
                            l = t(h + 1, j ? j.locator.slice() : d, h);
                        if (!k(n, m) || g || i.autoUnmask) {
                            var s = g ? c : null == l.match.fn && l.match.optionality && h + 1 < o().p ? h + 1 : o().p;
                            r = da.keypressEvent.call(b, f, !0, !1, g, s), n = s + 1, m = ""
                        } else r = da.keypressEvent.call(b, f, !0, !1, !0, h + 1);
                        if (!g && a.isFunction(i.onBeforeWrite)) {
                            var u = r.forwardPosition;
                            if (r = i.onBeforeWrite(f, y(), r.forwardPosition, i), r.forwardPosition = u, r && r.refreshFromBuffer) {
                                var v = r.refreshFromBuffer;
                                z(v === !0 ? v : v.start, v.end, r.buffer), p(!0), r.caret && (o().p = r.caret, r.forwardPosition = r.caret)
                            }
                        }
                    }
                }), f) {
                var w = d;
                c.activeElement === b && r && (w = i.numericInput ? F(r.forwardPosition) : r.forwardPosition), H(b, y(), w, j || new a.Event("checkval"))
            }
        }

        function K(b) {
            if (b) {
                if (b.inputmask === d) return b.value;
                b.inputmask && b.inputmask.refreshValue && da.setValueEvent.call(b)
            }
            var c = [],
                e = o().validPositions;
            for (var f in e) e[f].match && null != e[f].match.fn && c.push(e[f].input);
            var g = 0 === c.length ? "" : (Z ? c.reverse() : c).join("");
            if (a.isFunction(i.onUnMask)) {
                var h = (Z ? y().slice().reverse() : y()).join("");
                g = i.onUnMask(h, g, i)
            }
            return g
        }

        function L(a, e, f, g) {
            function h(a) {
                if (g !== !0 && Z && "number" == typeof a && (!i.greedy || "" !== i.placeholder)) {
                    var b = y().join("").length;
                    a = b - a
                }
                return a
            }
            var k;
            if ("number" != typeof e) return a.setSelectionRange ? (e = a.selectionStart, f = a.selectionEnd) : b.getSelection ? (k = b.getSelection().getRangeAt(0), k.commonAncestorContainer.parentNode !== a && k.commonAncestorContainer !== a || (e = k.startOffset, f = k.endOffset)) : c.selection && c.selection.createRange && (k = c.selection.createRange(), e = 0 - k.duplicate().moveStart("character", -a.inputmask._valueGet().length), f = e + k.text.length), {
                begin: h(e),
                end: h(f)
            };
            e = h(e), f = h(f), f = "number" == typeof f ? f : e;
            var l = parseInt(((a.ownerDocument.defaultView || b).getComputedStyle ? (a.ownerDocument.defaultView || b).getComputedStyle(a, null) : a.currentStyle).fontSize) * f;
            if (a.scrollLeft = l > a.scrollWidth ? l : 0, j || i.insertMode !== !1 || e !== f || f++, a.setSelectionRange) a.selectionStart = e, a.selectionEnd = f;
            else if (b.getSelection) {
                if (k = c.createRange(), a.firstChild === d || null === a.firstChild) {
                    var m = c.createTextNode("");
                    a.appendChild(m)
                }
                k.setStart(a.firstChild, e < a.inputmask._valueGet().length ? e : a.inputmask._valueGet().length), k.setEnd(a.firstChild, f < a.inputmask._valueGet().length ? f : a.inputmask._valueGet().length), k.collapse(!0);
                var n = b.getSelection();
                n.removeAllRanges(), n.addRange(k)
            } else a.createTextRange && (k = a.createTextRange(), k.collapse(!0), k.moveEnd("character", f), k.moveStart("character", e), k.select());
            R(a, d, {
                begin: e,
                end: f
            })
        }

        function M(b) {
            var c, e, f = y(),
                g = f.length,
                h = q(),
                i = {},
                j = o().validPositions[h],
                k = j !== d ? j.locator.slice() : d;
            for (c = h + 1; c < f.length; c++) e = t(c, k, c - 1), k = e.locator.slice(), i[c] = a.extend(!0, {}, e);
            var l = j && j.alternation !== d ? j.locator[j.alternation] : d;
            for (c = g - 1; c > h && (e = i[c], (e.match.optionality || e.match.optionalQuantifier || l && (l !== i[c].locator[j.alternation] && null != e.match.fn || null === e.match.fn && e.locator[j.alternation] && B(e.locator[j.alternation].toString().split(","), l.toString().split(",")) && "" !== w(c)[0].def)) && f[c] === I(c, e.match)); c--) g--;
            return b ? {
                l: g,
                def: i[g] ? i[g].match : d
            } : g
        }

        function N(a) {
            for (var b, c = M(), d = a.length; c < d && !D(c + 1) && (b = u(c + 1)) && b.match.optionality !== !0 && b.match.optionalQuantifier !== !0;) c++;
            for (;
                (b = u(c - 1)) && b.match.optionality && b.input === i.skipOptionalPartCharacter;) c--;
            return a.splice(c), a
        }

        function O(b) {
            if (a.isFunction(i.isComplete)) return i.isComplete(b, i);
            if ("*" === i.repeat) return d;
            var c = !1,
                e = M(!0),
                f = F(e.l);
            if (e.def === d || e.def.newBlockMarker || e.def.optionality || e.def.optionalQuantifier) {
                c = !0;
                for (var g = 0; g <= f; g++) {
                    var h = t(g).match;
                    if (null !== h.fn && o().validPositions[g] === d && h.optionality !== !0 && h.optionalQuantifier !== !0 || null === h.fn && b[g] !== I(g, h)) {
                        c = !1;
                        break
                    }
                }
            }
            return c
        }

        function P(b, c, f, g) {
            function h() {
                if (i.keepStatic) {
                    for (var c = [], e = q(-1, !0), f = a.extend(!0, {}, o().validPositions), g = o().validPositions[e]; e >= 0; e--) {
                        var h = o().validPositions[e];
                        if (h) {
                            if (h.generatedInput !== !0 && /[0-9a-bA-Z]/.test(h.input) && c.push(h.input), delete o().validPositions[e], h.alternation !== d && h.locator[h.alternation] !== g.locator[h.alternation]) break;
                            g = h
                        }
                    }
                    if (e > -1)
                        for (o().p = E(q(-1, !0)); c.length > 0;) {
                            var j = new a.Event("keypress");
                            j.which = c.pop().charCodeAt(0), da.keypressEvent.call(b, j, !0, !1, !1, o().p)
                        } else o().validPositions = a.extend(!0, {}, f)
                }
            }
            if ((i.numericInput || Z) && (c === e.keyCode.BACKSPACE ? c = e.keyCode.DELETE : c === e.keyCode.DELETE && (c = e.keyCode.BACKSPACE), Z)) {
                var j = f.end;
                f.end = f.begin, f.begin = j
            }
            c === e.keyCode.BACKSPACE && (f.end - f.begin < 1 || i.insertMode === !1) ? (f.begin = F(f.begin), o().validPositions[f.begin] === d || o().validPositions[f.begin].input !== i.groupSeparator && o().validPositions[f.begin].input !== i.radixPoint || f.begin--) : c === e.keyCode.DELETE && f.begin === f.end && (f.end = D(f.end, !0) ? f.end + 1 : E(f.end) + 1, o().validPositions[f.begin] === d || o().validPositions[f.begin].input !== i.groupSeparator && o().validPositions[f.begin].input !== i.radixPoint || f.end++), r(f.begin, f.end, !1, g), g !== !0 && h();
            var k = q(f.begin, !0);
            k < f.begin ? o().p = E(k) : g !== !0 && (o().p = f.begin)
        }

        function Q(d) {
            function e(a) {
                var b, e = c.createElement("span");
                for (var f in h) isNaN(f) && f.indexOf("font") !== -1 && (e.style[f] = h[f]);
                e.style.textTransform = h.textTransform, e.style.letterSpacing = h.letterSpacing, e.style.position = "absolute", e.style.height = "auto", e.style.width = "auto", e.style.visibility = "hidden", e.style.whiteSpace = "nowrap", c.body.appendChild(e);
                var g, i = d.inputmask._valueGet(),
                    j = 0;
                for (b = 0, g = i.length; b <= g; b++) {
                    if (e.innerHTML += i.charAt(b) || "_", e.offsetWidth >= a) {
                        var k = a - j,
                            l = e.offsetWidth - a;
                        e.innerHTML = i.charAt(b), k -= e.offsetWidth / 3, b = k < l ? b - 1 : b;
                        break
                    }
                    j = e.offsetWidth
                }
                return c.body.removeChild(e), b
            }

            function f() {
                W.style.position = "absolute", W.style.top = g.top + "px", W.style.left = g.left + "px", W.style.width = parseInt(d.offsetWidth) - parseInt(h.paddingLeft) - parseInt(h.paddingRight) - parseInt(h.borderLeftWidth) - parseInt(h.borderRightWidth) + "px", W.style.height = parseInt(d.offsetHeight) - parseInt(h.paddingTop) - parseInt(h.paddingBottom) - parseInt(h.borderTopWidth) - parseInt(h.borderBottomWidth) + "px", W.style.lineHeight = W.style.height, W.style.zIndex = isNaN(h.zIndex) ? -1 : h.zIndex - 1, W.style.webkitAppearance = "textfield", W.style.mozAppearance = "textfield", W.style.Appearance = "textfield"
            }
            var g = a(d).position(),
                h = (d.ownerDocument.defaultView || b).getComputedStyle(d, null);
            d.parentNode;
            W = c.createElement("div"), c.body.appendChild(W);
            for (var j in h) isNaN(j) && "cssText" !== j && j.indexOf("webkit") == -1 && (W.style[j] = h[j]);
            d.style.backgroundColor = "transparent", d.style.color = "transparent", d.style.webkitAppearance = "caret", d.style.mozAppearance = "caret", d.style.Appearance = "caret", f(), a(b).on("resize", function (c) {
                g = a(d).position(), h = (d.ownerDocument.defaultView || b).getComputedStyle(d, null), f()
            }), a(d).on("click", function (a) {
                return L(d, e(a.clientX)), da.clickEvent.call(this, [a])
            }), a(d).on("keydown", function (a) {
                a.shiftKey || i.insertMode === !1 || setTimeout(function () {
                    R(d)
                }, 0)
            })
        }

        function R(a, b, e) {
            function f() {
                h || null !== k.fn && l.input !== d ? h && null !== k.fn && l.input !== d && (h = !1, g += "</span>") : (h = !0, g += "<span class='im-static''>")
            }
            if (W !== d) {
                b = b || y(), e === d ? e = L(a) : e.begin === d && (e = {
                    begin: e,
                    end: e
                });
                var g = "",
                    h = !1;
                if ("" != b) {
                    var j, k, l, m = 0,
                        n = q();
                    do m === e.begin && c.activeElement === a && (g += "<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>"), o().validPositions[m] ? (l = o().validPositions[m], k = l.match, j = l.locator.slice(), f(), g += l.input) : (l = t(m, j, m - 1), k = l.match, j = l.locator.slice(), (i.jitMasking === !1 || m < n || "number" == typeof i.jitMasking && isFinite(i.jitMasking) && i.jitMasking > m) && (f(), g += I(m, k))), m++; while ((V === d || m < V) && (null !== k.fn || "" !== k.def) || n > m)
                }
                W.innerHTML = g
            }
        }

        function S(b) {
            function e(b, e) {
                function f(b) {
                    function f(b) {
                        if (a.valHooks && (a.valHooks[b] === d || a.valHooks[b].inputmaskpatch !== !0)) {
                            var c = a.valHooks[b] && a.valHooks[b].get ? a.valHooks[b].get : function (a) {
                                    return a.value
                                },
                                f = a.valHooks[b] && a.valHooks[b].set ? a.valHooks[b].set : function (a, b) {
                                    return a.value = b, a
                                };
                            a.valHooks[b] = {
                                get: function (a) {
                                    if (a.inputmask) {
                                        if (a.inputmask.opts.autoUnmask) return a.inputmask.unmaskedvalue();
                                        var b = c(a);
                                        return q(d, d, a.inputmask.maskset.validPositions) !== -1 || e.nullable !== !0 ? b : ""
                                    }
                                    return c(a)
                                },
                                set: function (b, c) {
                                    var d, e = a(b);
                                    return d = f(b, c), b.inputmask && e.trigger("setvalue"), d
                                },
                                inputmaskpatch: !0
                            }
                        }
                    }

                    function g() {
                        return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : q() !== -1 || e.nullable !== !0 ? c.activeElement === this && e.clearMaskOnLostFocus ? (Z ? N(y().slice()).reverse() : N(y().slice())).join("") : j.call(this) : "" : j.call(this)
                    }

                    function h(b) {
                        k.call(this, b), this.inputmask && a(this).trigger("setvalue")
                    }

                    function i(b) {
                        ca.on(b, "mouseenter", function (b) {
                            var c = a(this),
                                d = this,
                                e = d.inputmask._valueGet();
                            e !== y().join("") && c.trigger("setvalue")
                        })
                    }
                    var j, k;
                    if (!b.inputmask.__valueGet) {
                        if (e.noValuePatching !== !0) {
                            if (Object.getOwnPropertyDescriptor) {
                                "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" == typeof "test".__proto__ ? function (a) {
                                    return a.__proto__
                                } : function (a) {
                                    return a.constructor.prototype
                                });
                                var l = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b), "value") : d;
                                l && l.get && l.set ? (j = l.get, k = l.set, Object.defineProperty(b, "value", {
                                    get: g,
                                    set: h,
                                    configurable: !0
                                })) : "INPUT" !== b.tagName && (j = function () {
                                    return this.textContent
                                }, k = function (a) {
                                    this.textContent = a
                                }, Object.defineProperty(b, "value", {
                                    get: g,
                                    set: h,
                                    configurable: !0
                                }))
                            } else c.__lookupGetter__ && b.__lookupGetter__("value") && (j = b.__lookupGetter__("value"), k = b.__lookupSetter__("value"), b.__defineGetter__("value", g), b.__defineSetter__("value", h));
                            b.inputmask.__valueGet = j, b.inputmask.__valueSet = k
                        }
                        b.inputmask._valueGet = function (a) {
                            return Z && a !== !0 ? j.call(this.el).split("").reverse().join("") : j.call(this.el)
                        }, b.inputmask._valueSet = function (a, b) {
                            k.call(this.el, null === a || a === d ? "" : b !== !0 && Z ? a.split("").reverse().join("") : a)
                        }, j === d && (j = function () {
                            return this.value
                        }, k = function (a) {
                            this.value = a
                        }, f(b.type), i(b))
                    }
                }
                var g = b.getAttribute("type"),
                    h = "INPUT" === b.tagName && a.inArray(g, e.supportsInputType) !== -1 || b.isContentEditable || "TEXTAREA" === b.tagName;
                if (!h)
                    if ("INPUT" === b.tagName) {
                        var i = c.createElement("input");
                        i.setAttribute("type", g), h = "text" === i.type, i = null
                    } else h = "partial";
                return h !== !1 && f(b), h
            }
            ca.off(b);
            var f = e(b, i);
            if (f !== !1 && (Y = b, U = a(Y), ("rtl" === Y.dir || i.rightAlign) && (Y.style.textAlign = "right"), ("rtl" === Y.dir || i.numericInput) && (Y.dir = "ltr", Y.removeAttribute("dir"), Y.inputmask.isRTL = !0, Z = !0), i.colorMask === !0 && Q(Y), m && (Y.hasOwnProperty("inputmode") && (Y.inputmode = i.inputmode, Y.setAttribute("inputmode", i.inputmode)), "rtfm" === i.androidHack && (i.colorMask !== !0 && Q(Y), Y.type = "password")), f === !0 && (ca.on(Y, "submit", da.submitEvent), ca.on(Y, "reset", da.resetEvent), ca.on(Y, "mouseenter", da.mouseenterEvent), ca.on(Y, "blur", da.blurEvent), ca.on(Y, "focus", da.focusEvent), ca.on(Y, "mouseleave", da.mouseleaveEvent), i.colorMask !== !0 && ca.on(Y, "click", da.clickEvent), ca.on(Y, "dblclick", da.dblclickEvent), ca.on(Y, "paste", da.pasteEvent), ca.on(Y, "dragdrop", da.pasteEvent), ca.on(Y, "drop", da.pasteEvent), ca.on(Y, "cut", da.cutEvent), ca.on(Y, "complete", i.oncomplete), ca.on(Y, "incomplete", i.onincomplete), ca.on(Y, "cleared", i.oncleared), m || i.inputEventOnly === !0 || (ca.on(Y, "keydown", da.keydownEvent), ca.on(Y, "keypress", da.keypressEvent)), ca.on(Y, "compositionstart", a.noop), ca.on(Y, "compositionupdate", a.noop), ca.on(Y, "compositionend", a.noop), ca.on(Y, "keyup", a.noop), ca.on(Y, "input", da.inputFallBackEvent), ca.on(Y, "beforeinput", a.noop)), ca.on(Y, "setvalue", da.setValueEvent), x(), "" !== Y.inputmask._valueGet(!0) || i.clearMaskOnLostFocus === !1 || c.activeElement === Y)) {
                var g = a.isFunction(i.onBeforeMask) ? i.onBeforeMask(Y.inputmask._valueGet(!0), i) || Y.inputmask._valueGet(!0) : Y.inputmask._valueGet(!0);
                "" !== g && J(Y, !0, !1, Z ? g.split("").reverse() : g.split(""));
                var h = y().slice();
                T = h.join(""), O(h) === !1 && i.clearIncomplete && p(), i.clearMaskOnLostFocus && c.activeElement !== Y && (q() === -1 ? h = [] : N(h)), H(Y, h), c.activeElement === Y && L(Y, E(q()))
            }
        }
        g = g || this.maskset, i = i || this.opts;
        var T, U, V, W, X, Y = this.el,
            Z = this.isRTL,
            $ = !1,
            _ = !1,
            aa = !1,
            ba = !1,
            ca = {
                on: function (b, c, f) {
                    var g = function (b) {
                        if (this.inputmask === d && "FORM" !== this.nodeName) {
                            var c = a.data(this, "_inputmask_opts");
                            c ? new e(c).mask(this) : ca.off(this)
                        } else {
                            if ("setvalue" === b.type || "FORM" === this.nodeName || !(this.disabled || this.readOnly && !("keydown" === b.type && b.ctrlKey && 67 === b.keyCode || i.tabThrough === !1 && b.keyCode === e.keyCode.TAB))) {
                                switch (b.type) {
                                    case "input":
                                        if (_ === !0) return _ = !1, b.preventDefault();
                                        break;
                                    case "keydown":
                                        $ = !1, _ = !1;
                                        break;
                                    case "keypress":
                                        if ($ === !0) return b.preventDefault();
                                        $ = !0;
                                        break;
                                    case "click":
                                        if (k || l) {
                                            var g = this,
                                                h = arguments;
                                            return setTimeout(function () {
                                                f.apply(g, h)
                                            }, 0), !1
                                        }
                                }
                                var j = f.apply(this, arguments);
                                return j === !1 && (b.preventDefault(), b.stopPropagation()), j
                            }
                            b.preventDefault()
                        }
                    };
                    b.inputmask.events[c] = b.inputmask.events[c] || [], b.inputmask.events[c].push(g), a.inArray(c, ["submit", "reset"]) !== -1 ? null != b.form && a(b.form).on(c, g) : a(b).on(c, g)
                },
                off: function (b, c) {
                    if (b.inputmask && b.inputmask.events) {
                        var d;
                        c ? (d = [], d[c] = b.inputmask.events[c]) : d = b.inputmask.events, a.each(d, function (c, d) {
                            for (; d.length > 0;) {
                                var e = d.pop();
                                a.inArray(c, ["submit", "reset"]) !== -1 ? null != b.form && a(b.form).off(c, e) : a(b).off(c, e)
                            }
                            delete b.inputmask.events[c]
                        })
                    }
                }
            },
            da = {
                keydownEvent: function (b) {
                    function d(a) {
                        var b = c.createElement("input"),
                            d = "on" + a,
                            e = d in b;
                        return e || (b.setAttribute(d, "return;"), e = "function" == typeof b[d]), b = null, e
                    }
                    var f = this,
                        g = a(f),
                        h = b.keyCode,
                        j = L(f);
                    if (h === e.keyCode.BACKSPACE || h === e.keyCode.DELETE || l && h === e.keyCode.BACKSPACE_SAFARI || b.ctrlKey && h === e.keyCode.X && !d("cut")) b.preventDefault(), P(f, h, j), H(f, y(!0), o().p, b, f.inputmask._valueGet() !== y().join("")), f.inputmask._valueGet() === x().join("") ? g.trigger("cleared") : O(y()) === !0 && g.trigger("complete");
                    else if (h === e.keyCode.END || h === e.keyCode.PAGE_DOWN) {
                        b.preventDefault();
                        var k = E(q());
                        i.insertMode || k !== o().maskLength || b.shiftKey || k--, L(f, b.shiftKey ? j.begin : k, k, !0)
                    } else h === e.keyCode.HOME && !b.shiftKey || h === e.keyCode.PAGE_UP ? (b.preventDefault(), L(f, 0, b.shiftKey ? j.begin : 0, !0)) : (i.undoOnEscape && h === e.keyCode.ESCAPE || 90 === h && b.ctrlKey) && b.altKey !== !0 ? (J(f, !0, !1, T.split("")), g.trigger("click")) : h !== e.keyCode.INSERT || b.shiftKey || b.ctrlKey ? i.tabThrough === !0 && h === e.keyCode.TAB ? (b.shiftKey === !0 ? (null === u(j.begin).match.fn && (j.begin = E(j.begin)), j.end = F(j.begin, !0), j.begin = F(j.end, !0)) : (j.begin = E(j.begin, !0), j.end = E(j.begin, !0), j.end < o().maskLength && j.end--), j.begin < o().maskLength && (b.preventDefault(), L(f, j.begin, j.end))) : b.shiftKey || i.insertMode === !1 && (h === e.keyCode.RIGHT ? setTimeout(function () {
                        var a = L(f);
                        L(f, a.begin)
                    }, 0) : h === e.keyCode.LEFT && setTimeout(function () {
                        var a = L(f);
                        L(f, Z ? a.begin + 1 : a.begin - 1)
                    }, 0)) : (i.insertMode = !i.insertMode, L(f, i.insertMode || j.begin !== o().maskLength ? j.begin : j.begin - 1));
                    i.onKeyDown.call(this, b, y(), L(f).begin, i), aa = a.inArray(h, i.ignorables) !== -1
                },
                keypressEvent: function (b, c, f, g, h) {
                    var j = this,
                        k = a(j),
                        l = b.which || b.charCode || b.keyCode;
                    if (!(c === !0 || b.ctrlKey && b.altKey) && (b.ctrlKey || b.metaKey || aa)) return l === e.keyCode.ENTER && T !== y().join("") && (T = y().join(""), setTimeout(function () {
                        k.trigger("change")
                    }, 0)), !0;
                    if (l) {
                        46 === l && b.shiftKey === !1 && "" !== i.radixPoint && (l = i.radixPoint.charCodeAt(0));
                        var m, n = c ? {
                                begin: h,
                                end: h
                            } : L(j),
                            q = String.fromCharCode(l);
                        o().writeOutBuffer = !0;
                        var r = C(n, q, g);
                        if (r !== !1 && (p(!0), m = r.caret !== d ? r.caret : c ? r.pos + 1 : E(r.pos), o().p = m), f !== !1) {
                            var s = this;
                            if (setTimeout(function () {
                                    i.onKeyValidation.call(s, l, r, i)
                                }, 0), o().writeOutBuffer && r !== !1) {
                                var t = y();
                                H(j, t, i.numericInput && r.caret === d ? F(m) : m, b, c !== !0), c !== !0 && setTimeout(function () {
                                    O(t) === !0 && k.trigger("complete")
                                }, 0)
                            }
                        }
                        if (b.preventDefault(), c) return r.forwardPosition = m, r
                    }
                },
                pasteEvent: function (c) {
                    var d, e = this,
                        f = c.originalEvent || c,
                        g = a(e),
                        h = e.inputmask._valueGet(!0),
                        j = L(e);
                    Z && (d = j.end, j.end = j.begin, j.begin = d);
                    var k = h.substr(0, j.begin),
                        l = h.substr(j.end, h.length);
                    if (k === (Z ? x().reverse() : x()).slice(0, j.begin).join("") && (k = ""), l === (Z ? x().reverse() : x()).slice(j.end).join("") && (l = ""), Z && (d = k, k = l, l = d), b.clipboardData && b.clipboardData.getData) h = k + b.clipboardData.getData("Text") + l;
                    else {
                        if (!f.clipboardData || !f.clipboardData.getData) return !0;
                        h = k + f.clipboardData.getData("text/plain") + l
                    }
                    var m = h;
                    if (a.isFunction(i.onBeforePaste)) {
                        if (m = i.onBeforePaste(h, i), m === !1) return c.preventDefault();
                        m || (m = h)
                    }
                    return J(e, !1, !1, Z ? m.split("").reverse() : m.toString().split("")), H(e, y(), E(q()), c, T !== y().join("")), O(y()) === !0 && g.trigger("complete"), c.preventDefault()
                },
                inputFallBackEvent: function (b) {
                    var c = this,
                        d = c.inputmask._valueGet();
                    if (y().join("") !== d) {
                        var f = L(c);
                        if ("." === d.charAt(f.begin - 1) && "" !== i.radixPoint && (d = d.split(""), d[f.begin - 1] = i.radixPoint.charAt(0), d = d.join("")), d.charAt(f.begin - 1) === i.radixPoint && d.length > y().length) {
                            var g = new a.Event("keypress");
                            return g.which = i.radixPoint.charCodeAt(0), da.keypressEvent.call(c, g, !0, !0, !1, f.begin), !1
                        }
                        if (d = d.replace(new RegExp("(" + e.escapeRegex(x().join("")) + ")*"), ""), k) {
                            var h = d.replace(y().join(""), "");
                            if (1 === h.length) {
                                var g = new a.Event("keypress");
                                return g.which = h.charCodeAt(0), da.keypressEvent.call(c, g, !0, !0, !1, o().validPositions[f.begin - 1] ? f.begin : f.begin - 1), !1
                            }
                        }
                        if (f.begin > d.length && (L(c, d.length), f = L(c)), y().length - d.length !== 1 || d.charAt(f.begin) === y()[f.begin] || d.charAt(f.begin + 1) === y()[f.begin] || D(f.begin)) {
                            var j = [],
                                l = n(!0, 1).join("");
                            for (j.push(d.substr(0, f.begin)), j.push(d.substr(f.begin)); null === d.match(e.escapeRegex(l) + "$");) l = l.slice(1);
                            d = d.replace(l, ""), a.isFunction(i.onBeforeMask) && (d = i.onBeforeMask(d, i) || d), J(c, !0, !1, d.split(""), b);
                            var p = L(c).begin,
                                q = c.inputmask._valueGet(),
                                r = q.indexOf(j[0]);
                            if (0 === r && p !== j[0].length) L(c, j[0].length), m && setTimeout(function () {
                                L(c, j[0].length)
                            }, 0);
                            else {
                                for (; null === q.match(e.escapeRegex(j[1]) + "$");) j[1] = j[1].substr(1);
                                var s = q.indexOf(j[1]);
                                s !== -1 && "" !== j[1] && p > s && s > r && (L(c, s), m && setTimeout(function () {
                                    L(c, s)
                                }, 0))
                            }
                            O(y()) === !0 && a(c).trigger("complete")
                        } else b.keyCode = e.keyCode.BACKSPACE, da.keydownEvent.call(c, b);
                        b.preventDefault()
                    }
                },
                setValueEvent: function (b) {
                    this.inputmask.refreshValue = !1;
                    var c = this,
                        d = c.inputmask._valueGet(!0);
                    a.isFunction(i.onBeforeMask) && (d = i.onBeforeMask(d, i) || d), d = d.split(""), J(c, !0, !1, Z ? d.reverse() : d), T = y().join(""), (i.clearMaskOnLostFocus || i.clearIncomplete) && c.inputmask._valueGet() === x().join("") && c.inputmask._valueSet("")
                },
                focusEvent: function (a) {
                    var b = this,
                        c = b.inputmask._valueGet();
                    i.showMaskOnFocus && (!i.showMaskOnHover || i.showMaskOnHover && "" === c) && (b.inputmask._valueGet() !== y().join("") ? H(b, y(), E(q())) : ba === !1 && L(b, E(q()))), i.positionCaretOnTab === !0 && ba === !1 && da.clickEvent.apply(b, [a, !0]), T = y().join("")
                },
                mouseleaveEvent: function (a) {
                    var b = this;
                    if (ba = !1, i.clearMaskOnLostFocus && c.activeElement !== b) {
                        var d = y().slice(),
                            e = b.inputmask._valueGet();
                        e !== b.getAttribute("placeholder") && "" !== e && (q() === -1 && e === x().join("") ? d = [] : N(d), H(b, d))
                    }
                },
                clickEvent: function (b, e) {
                    function f(b) {
                        if ("" !== i.radixPoint) {
                            var c = o().validPositions;
                            if (c[b] === d || c[b].input === I(b)) {
                                if (b < E(-1)) return !0;
                                var e = a.inArray(i.radixPoint, y());
                                if (e !== -1) {
                                    for (var f in c)
                                        if (e < f && c[f].input !== I(f)) return !1;
                                    return !0
                                }
                            }
                        }
                        return !1
                    }
                    var g = this;
                    setTimeout(function () {
                        if (c.activeElement === g) {
                            var a = L(g);
                            if (e && (Z ? a.end = a.begin : a.begin = a.end), a.begin === a.end) switch (i.positionCaretOnClick) {
                                case "none":
                                    break;
                                case "radixFocus":
                                    if (f(a.begin)) {
                                        var b = y().join("").indexOf(i.radixPoint);
                                        L(g, i.numericInput ? E(b) : b);
                                        break
                                    }
                                    default:
                                        var d = a.begin,
                                            h = q(d, !0),
                                            j = E(h);
                                        if (d < j) L(g, D(d) || D(d - 1) ? d : E(d));
                                        else {
                                            var k = I(j);
                                            ("" !== k && y()[j] !== k && u(j).match.optionalQuantifier !== !0 || !D(j) && u(j).match.def === k) && (j = E(j)), L(g, j)
                                        }
                            }
                        }
                    }, 0)
                },
                dblclickEvent: function (a) {
                    var b = this;
                    setTimeout(function () {
                        L(b, 0, E(q()))
                    }, 0)
                },
                cutEvent: function (d) {
                    var f = this,
                        g = a(f),
                        h = L(f),
                        i = d.originalEvent || d,
                        j = b.clipboardData || i.clipboardData,
                        k = Z ? y().slice(h.end, h.begin) : y().slice(h.begin, h.end);
                    j.setData("text", Z ? k.reverse().join("") : k.join("")), c.execCommand && c.execCommand("copy"), P(f, e.keyCode.DELETE, h), H(f, y(), o().p, d, T !== y().join("")), f.inputmask._valueGet() === x().join("") && g.trigger("cleared")
                },
                blurEvent: function (b) {
                    var c = a(this),
                        e = this;
                    if (e.inputmask) {
                        var f = e.inputmask._valueGet(),
                            g = y().slice();
                        T !== g.join("") && setTimeout(function () {
                            c.trigger("change"), T = g.join("")
                        }, 0), "" !== f && (i.clearMaskOnLostFocus && (q() === -1 && f === x().join("") ? g = [] : N(g)), O(g) === !1 && (setTimeout(function () {
                            c.trigger("incomplete")
                        }, 0), i.clearIncomplete && (p(), g = i.clearMaskOnLostFocus ? [] : x().slice())), H(e, g, d, b))
                    }
                },
                mouseenterEvent: function (a) {
                    var b = this;
                    ba = !0, c.activeElement !== b && i.showMaskOnHover && b.inputmask._valueGet() !== y().join("") && H(b, y())
                },
                submitEvent: function (a) {
                    T !== y().join("") && U.trigger("change"), i.clearMaskOnLostFocus && q() === -1 && Y.inputmask._valueGet && Y.inputmask._valueGet() === x().join("") && Y.inputmask._valueSet(""), i.removeMaskOnSubmit && (Y.inputmask._valueSet(Y.inputmask.unmaskedvalue(), !0), setTimeout(function () {
                        H(Y, y())
                    }, 0))
                },
                resetEvent: function (a) {
                    Y.inputmask.refreshValue = !0, setTimeout(function () {
                        U.trigger("setvalue")
                    }, 0)
                }
            };
        if (f !== d) switch (f.action) {
            case "isComplete":
                return Y = f.el, O(y());
            case "unmaskedvalue":
                return Y !== d && f.value === d || (X = f.value, X = (a.isFunction(i.onBeforeMask) ? i.onBeforeMask(X, i) || X : X).split(""), J(d, !1, !1, Z ? X.reverse() : X), a.isFunction(i.onBeforeWrite) && i.onBeforeWrite(d, y(), 0, i)), K(Y);
            case "mask":
                S(Y);
                break;
            case "format":
                return X = (a.isFunction(i.onBeforeMask) ? i.onBeforeMask(f.value, i) || f.value : f.value).split(""), J(d, !0, !1, Z ? X.reverse() : X), f.metadata ? {
                    value: Z ? y().slice().reverse().join("") : y().join(""),
                    metadata: h.call(this, {
                        action: "getmetadata"
                    }, g, i)
                } : Z ? y().slice().reverse().join("") : y().join("");
            case "isValid":
                f.value ? (X = f.value.split(""), J(d, !0, !0, Z ? X.reverse() : X)) : f.value = y().join("");
                for (var ea = y(), fa = M(), ga = ea.length - 1; ga > fa && !D(ga); ga--);
                return ea.splice(fa, ga + 1 - fa), O(ea) && f.value === y().join("");
            case "getemptymask":
                return x().join("");
            case "remove":
                if (Y && Y.inputmask) {
                    U = a(Y), Y.inputmask._valueSet(i.autoUnmask ? K(Y) : Y.inputmask._valueGet(!0)), ca.off(Y);
                    var ha;
                    Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? (ha = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Y), "value"), ha && Y.inputmask.__valueGet && Object.defineProperty(Y, "value", {
                        get: Y.inputmask.__valueGet,
                        set: Y.inputmask.__valueSet,
                        configurable: !0
                    })) : c.__lookupGetter__ && Y.__lookupGetter__("value") && Y.inputmask.__valueGet && (Y.__defineGetter__("value", Y.inputmask.__valueGet), Y.__defineSetter__("value", Y.inputmask.__valueSet)), Y.inputmask = d
                }
                return Y;
            case "getmetadata":
                if (a.isArray(g.metadata)) {
                    var ia = n(!0, 0, !1).join("");
                    return a.each(g.metadata, function (a, b) {
                        if (b.mask === ia) return ia = b, !1
                    }), ia
                }
                return g.metadata
        }
    }
    var i = navigator.userAgent,
        j = /mobile/i.test(i),
        k = /iemobile/i.test(i),
        l = /iphone/i.test(i) && !k,
        m = /android/i.test(i) && !k;
    return e.prototype = {
        dataAttribute: "data-inputmask",
        defaults: {
            placeholder: "_",
            optionalmarker: {
                start: "[",
                end: "]"
            },
            quantifiermarker: {
                start: "{",
                end: "}"
            },
            groupmarker: {
                start: "(",
                end: ")"
            },
            alternatormarker: "|",
            escapeChar: "\\",
            mask: null,
            oncomplete: a.noop,
            onincomplete: a.noop,
            oncleared: a.noop,
            repeat: 0,
            greedy: !0,
            autoUnmask: !1,
            removeMaskOnSubmit: !1,
            clearMaskOnLostFocus: !0,
            insertMode: !0,
            clearIncomplete: !1,
            alias: null,
            onKeyDown: a.noop,
            onBeforeMask: null,
            onBeforePaste: function (b, c) {
                return a.isFunction(c.onBeforeMask) ? c.onBeforeMask(b, c) : b
            },
            onBeforeWrite: null,
            onUnMask: null,
            showMaskOnFocus: !0,
            showMaskOnHover: !0,
            onKeyValidation: a.noop,
            skipOptionalPartCharacter: " ",
            numericInput: !1,
            rightAlign: !1,
            undoOnEscape: !0,
            radixPoint: "",
            radixPointDefinitionSymbol: d,
            groupSeparator: "",
            keepStatic: null,
            positionCaretOnTab: !0,
            tabThrough: !1,
            supportsInputType: ["text", "tel", "password"],
            ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
            isComplete: null,
            canClearPosition: a.noop,
            preValidation: null,
            postValidation: null,
            staticDefinitionSymbol: d,
            jitMasking: !1,
            nullable: !0,
            inputEventOnly: !1,
            noValuePatching: !1,
            positionCaretOnClick: "lvp",
            casing: null,
            inputmode: "verbatim",
            colorMask: !1,
            androidHack: !1
        },
        definitions: {
            9: {
                validator: "[0-9]",
                cardinality: 1,
                definitionSymbol: "*"
            },
            a: {
                validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                cardinality: 1,
                definitionSymbol: "*"
            },
            "*": {
                validator: function () {
                    return !0
                },
                cardinality: 1
            }
        },
        aliases: {},
        masksCache: {},
        mask: function (i) {
            function j(c, e, g, h) {
                function i(a, e) {
                    e = e !== d ? e : c.getAttribute(h + "-" + a), null !== e && ("string" == typeof e && (0 === a.indexOf("on") ? e = b[e] : "false" === e ? e = !1 : "true" === e && (e = !0)), g[a] = e)
                }
                var j, k, l, m, n = c.getAttribute(h);
                if (n && "" !== n && (n = n.replace(new RegExp("'", "g"), '"'), k = JSON.parse("{" + n + "}")), k) {
                    l = d;
                    for (m in k)
                        if ("alias" === m.toLowerCase()) {
                            l = k[m];
                            break
                        }
                }
                i("alias", l), g.alias && f(g.alias, g, e);
                for (j in e) {
                    if (k) {
                        l = d;
                        for (m in k)
                            if (m.toLowerCase() === j.toLowerCase()) {
                                l = k[m];
                                break
                            }
                    }
                    i(j, l)
                }
                return a.extend(!0, e, g), e
            }
            var k = this;
            return "string" == typeof i && (i = c.getElementById(i) || c.querySelectorAll(i)), i = i.nodeName ? [i] : i, a.each(i, function (b, c) {
                var f = a.extend(!0, {}, k.opts);
                j(c, f, a.extend(!0, {}, k.userOptions), k.dataAttribute);
                var i = g(f, k.noMasksCache);
                i !== d && (c.inputmask !== d && c.inputmask.remove(), c.inputmask = new e(d, d, (!0)), c.inputmask.opts = f, c.inputmask.noMasksCache = k.noMasksCache, c.inputmask.userOptions = a.extend(!0, {}, k.userOptions), c.inputmask.isRTL = k.isRTL, c.inputmask.el = c, c.inputmask.maskset = i, a.data(c, "_inputmask_opts", f), h.call(c.inputmask, {
                    action: "mask"
                }))
            }), i && i[0] ? i[0].inputmask || this : this
        },
        option: function (b, c) {
            return "string" == typeof b ? this.opts[b] : "object" == typeof b ? (a.extend(this.userOptions, b), this.el && c !== !0 && this.mask(this.el), this) : void 0
        },
        unmaskedvalue: function (a) {
            return this.maskset = this.maskset || g(this.opts, this.noMasksCache), h.call(this, {
                action: "unmaskedvalue",
                value: a
            })
        },
        remove: function () {
            return h.call(this, {
                action: "remove"
            })
        },
        getemptymask: function () {
            return this.maskset = this.maskset || g(this.opts, this.noMasksCache), h.call(this, {
                action: "getemptymask"
            })
        },
        hasMaskedValue: function () {
            return !this.opts.autoUnmask
        },
        isComplete: function () {
            return this.maskset = this.maskset || g(this.opts, this.noMasksCache), h.call(this, {
                action: "isComplete"
            })
        },
        getmetadata: function () {
            return this.maskset = this.maskset || g(this.opts, this.noMasksCache), h.call(this, {
                action: "getmetadata"
            })
        },
        isValid: function (a) {
            return this.maskset = this.maskset || g(this.opts, this.noMasksCache), h.call(this, {
                action: "isValid",
                value: a
            })
        },
        format: function (a, b) {
            return this.maskset = this.maskset || g(this.opts, this.noMasksCache), h.call(this, {
                action: "format",
                value: a,
                metadata: b
            })
        },
        analyseMask: function (b, c) {
            function f(a, b, c, d) {
                this.matches = [], this.openGroup = a || !1, this.isGroup = a || !1, this.isOptional = b || !1, this.isQuantifier = c || !1, this.isAlternator = d || !1, this.quantifier = {
                    min: 1,
                    max: 1
                }
            }

            function g(a, b, f) {
                var g = (c.definitions ? c.definitions[b] : d) || e.prototype.definitions[b];
                f = f !== d ? f : a.matches.length;
                var h = a.matches[f - 1];
                if (g && !s) {
                    for (var i = g.prevalidator, j = i ? i.length : 0, k = 1; k < g.cardinality; k++) {
                        var l = j >= k ? i[k - 1] : [],
                            m = l.validator,
                            n = l.cardinality;
                        a.matches.splice(f++, 0, {
                            fn: m ? "string" == typeof m ? new RegExp(m) : new function () {
                                this.test = m
                            } : new RegExp("."),
                            cardinality: n ? n : 1,
                            optionality: a.isOptional,
                            newBlockMarker: h === d || h.def !== (g.definitionSymbol || b),
                            casing: g.casing,
                            def: g.definitionSymbol || b,
                            placeholder: g.placeholder,
                            nativeDef: b
                        }), h = a.matches[f - 1]
                    }
                    a.matches.splice(f++, 0, {
                        fn: g.validator ? "string" == typeof g.validator ? new RegExp(g.validator) : new function () {
                            this.test = g.validator
                        } : new RegExp("."),
                        cardinality: g.cardinality,
                        optionality: a.isOptional,
                        newBlockMarker: h === d || h.def !== (g.definitionSymbol || b),
                        casing: g.casing,
                        def: g.definitionSymbol || b,
                        placeholder: g.placeholder,
                        nativeDef: b
                    })
                } else a.matches.splice(f++, 0, {
                    fn: null,
                    cardinality: 0,
                    optionality: a.isOptional,
                    newBlockMarker: h === d || h.def !== b,
                    casing: null,
                    def: c.staticDefinitionSymbol || b,
                    placeholder: c.staticDefinitionSymbol !== d ? b : d,
                    nativeDef: b
                }), s = !1
            }

            function h(b) {
                b && b.matches && a.each(b.matches, function (a, e) {
                    var f = b.matches[a + 1];
                    (f === d || f.matches === d || f.isQuantifier === !1) && e && e.isGroup && (e.isGroup = !1, g(e, c.groupmarker.start, 0), e.openGroup !== !0 && g(e, c.groupmarker.end)), h(e)
                })
            }

            function i() {
                if (u.length > 0) {
                    if (n = u[u.length - 1], g(n, l), n.isAlternator) {
                        o = u.pop();
                        for (var a = 0; a < o.matches.length; a++) o.matches[a].isGroup = !1;
                        u.length > 0 ? (n = u[u.length - 1], n.matches.push(o)) : t.matches.push(o)
                    }
                } else g(t, l)
            }

            function j(a) {
                function b(a) {
                    return a === c.optionalmarker.start ? a = c.optionalmarker.end : a === c.optionalmarker.end ? a = c.optionalmarker.start : a === c.groupmarker.start ? a = c.groupmarker.end : a === c.groupmarker.end && (a = c.groupmarker.start), a
                }
                a.matches = a.matches.reverse();
                for (var e in a.matches)
                    if (a.matches.hasOwnProperty(e)) {
                        var f = parseInt(e);
                        if (a.matches[e].isQuantifier && a.matches[f + 1] && a.matches[f + 1].isGroup) {
                            var g = a.matches[e];
                            a.matches.splice(e, 1), a.matches.splice(f + 1, 0, g)
                        }
                        a.matches[e].matches !== d ? a.matches[e] = j(a.matches[e]) : a.matches[e] = b(a.matches[e])
                    } return a
            }
            for (var k, l, m, n, o, p, q, r = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g, s = !1, t = new f, u = [], v = []; k = r.exec(b);)
                if (l = k[0], s) i();
                else switch (l.charAt(0)) {
                    case c.escapeChar:
                        s = !0;
                        break;
                    case c.optionalmarker.end:
                    case c.groupmarker.end:
                        if (m = u.pop(), m.openGroup = !1, m !== d)
                            if (u.length > 0) {
                                if (n = u[u.length - 1], n.matches.push(m), n.isAlternator) {
                                    o = u.pop();
                                    for (var w = 0; w < o.matches.length; w++) o.matches[w].isGroup = !1;
                                    u.length > 0 ? (n = u[u.length - 1], n.matches.push(o)) : t.matches.push(o)
                                }
                            } else t.matches.push(m);
                        else i();
                        break;
                    case c.optionalmarker.start:
                        u.push(new f((!1), (!0)));
                        break;
                    case c.groupmarker.start:
                        u.push(new f((!0)));
                        break;
                    case c.quantifiermarker.start:
                        var x = new f((!1), (!1), (!0));
                        l = l.replace(/[{}]/g, "");
                        var y = l.split(","),
                            z = isNaN(y[0]) ? y[0] : parseInt(y[0]),
                            A = 1 === y.length ? z : isNaN(y[1]) ? y[1] : parseInt(y[1]);
                        if ("*" !== A && "+" !== A || (z = "*" === A ? 0 : 1), x.quantifier = {
                                min: z,
                                max: A
                            }, u.length > 0) {
                            var B = u[u.length - 1].matches;
                            k = B.pop(), k.isGroup || (q = new f((!0)), q.matches.push(k), k = q), B.push(k), B.push(x)
                        } else k = t.matches.pop(), k.isGroup || (q = new f((!0)), q.matches.push(k), k = q), t.matches.push(k), t.matches.push(x);
                        break;
                    case c.alternatormarker:
                        u.length > 0 ? (n = u[u.length - 1], p = n.matches.pop()) : p = t.matches.pop(), p.isAlternator ? u.push(p) : (o = new f((!1), (!1), (!1), (!0)), o.matches.push(p), u.push(o));
                        break;
                    default:
                        i()
                }
            for (; u.length > 0;) m = u.pop(), t.matches.push(m);
            return t.matches.length > 0 && (h(t), v.push(t)), c.numericInput && j(v[0]), v
        }
    }, e.extendDefaults = function (b) {
        a.extend(!0, e.prototype.defaults, b)
    }, e.extendDefinitions = function (b) {
        a.extend(!0, e.prototype.definitions, b)
    }, e.extendAliases = function (b) {
        a.extend(!0, e.prototype.aliases, b)
    }, e.format = function (a, b, c) {
        return e(b).format(a, c)
    }, e.unmask = function (a, b) {
        return e(b).unmaskedvalue(a)
    }, e.isValid = function (a, b) {
        return e(b).isValid(a)
    }, e.remove = function (b) {
        a.each(b, function (a, b) {
            b.inputmask && b.inputmask.remove()
        })
    }, e.escapeRegex = function (a) {
        var b = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"];
        return a.replace(new RegExp("(\\" + b.join("|\\") + ")", "gim"), "\\$1")
    }, e.keyCode = {
        ALT: 18,
        BACKSPACE: 8,
        BACKSPACE_SAFARI: 127,
        CAPS_LOCK: 20,
        COMMA: 188,
        COMMAND: 91,
        COMMAND_LEFT: 91,
        COMMAND_RIGHT: 93,
        CONTROL: 17,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        INSERT: 45,
        LEFT: 37,
        MENU: 93,
        NUMPAD_ADD: 107,
        NUMPAD_DECIMAL: 110,
        NUMPAD_DIVIDE: 111,
        NUMPAD_ENTER: 108,
        NUMPAD_MULTIPLY: 106,
        NUMPAD_SUBTRACT: 109,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SHIFT: 16,
        SPACE: 32,
        TAB: 9,
        UP: 38,
        WINDOWS: 91,
        X: 88
    }, e
}),
function (a) {
    a(jQuery, window.Inputmask)
}(function (a, b) {
    return void 0 === a.fn.inputmask && (a.fn.inputmask = function (c, d) {
        var e, f = this[0];
        if (void 0 === d && (d = {}), "string" == typeof c) switch (c) {
            case "unmaskedvalue":
                return f && f.inputmask ? f.inputmask.unmaskedvalue() : a(f).val();
            case "remove":
                return this.each(function () {
                    this.inputmask && this.inputmask.remove()
                });
            case "getemptymask":
                return f && f.inputmask ? f.inputmask.getemptymask() : "";
            case "hasMaskedValue":
                return !(!f || !f.inputmask) && f.inputmask.hasMaskedValue();
            case "isComplete":
                return !f || !f.inputmask || f.inputmask.isComplete();
            case "getmetadata":
                return f && f.inputmask ? f.inputmask.getmetadata() : void 0;
            case "setvalue":
                a(f).val(d), f && void 0 === f.inputmask && a(f).triggerHandler("setvalue");
                break;
            case "option":
                if ("string" != typeof d) return this.each(function () {
                    if (void 0 !== this.inputmask) return this.inputmask.option(d)
                });
                if (f && void 0 !== f.inputmask) return f.inputmask.option(d);
                break;
            default:
                return d.alias = c, e = new b(d), this.each(function () {
                    e.mask(this)
                })
        } else {
            if ("object" == typeof c) return e = new b(c), void 0 === c.mask && void 0 === c.alias ? this.each(function () {
                return void 0 !== this.inputmask ? this.inputmask.option(c) : void e.mask(this)
            }) : this.each(function () {
                e.mask(this)
            });
            if (void 0 === c) return this.each(function () {
                e = new b(d), e.mask(this)
            })
        }
    }), a.fn.inputmask
}),
function (a, b) {}(jQuery, Inputmask),
function (a) {
    a(window.dependencyLib || jQuery, window.Inputmask)
}(function (a, b) {
    function c(a) {
        return isNaN(a) || 29 === new Date(a, 2, 0).getDate()
    }
    return b.extendAliases({
        "dd/mm/yyyy": {
            mask: "1/2/y",
            placeholder: "dd/mm/yyyy",
            regex: {
                val1pre: new RegExp("[0-3]"),
                val1: new RegExp("0[1-9]|[12][0-9]|3[01]"),
                val2pre: function (a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[1-9]|[12][0-9]|3[01])" + c + "[01])")
                },
                val2: function (a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[1-9]|[12][0-9])" + c + "(0[1-9]|1[012]))|(30" + c + "(0[13-9]|1[012]))|(31" + c + "(0[13578]|1[02]))")
                }
            },
            leapday: "29/02/",
            separator: "/",
            yearrange: {
                minyear: 1900,
                maxyear: 2099
            },
            isInYearRange: function (a, b, c) {
                if (isNaN(a)) return !1;
                var d = parseInt(a.concat(b.toString().slice(a.length))),
                    e = parseInt(a.concat(c.toString().slice(a.length)));
                return !isNaN(d) && (b <= d && d <= c) || !isNaN(e) && (b <= e && e <= c)
            },
            determinebaseyear: function (a, b, c) {
                var d = (new Date).getFullYear();
                if (a > d) return a;
                if (b < d) {
                    for (var e = b.toString().slice(0, 2), f = b.toString().slice(2, 4); b < e + c;) e--;
                    var g = e + f;
                    return a > g ? a : g
                }
                if (a <= d && d <= b) {
                    for (var h = d.toString().slice(0, 2); b < h + c;) h--;
                    var i = h + c;
                    return i < a ? a : i
                }
                return d
            },
            onKeyDown: function (c, d, e, f) {
                var g = a(this);
                if (c.ctrlKey && c.keyCode === b.keyCode.RIGHT) {
                    var h = new Date;
                    g.val(h.getDate().toString() + (h.getMonth() + 1).toString() + h.getFullYear().toString()), g.trigger("setvalue")
                }
            },
            getFrontValue: function (a, b, c) {
                for (var d = 0, e = 0, f = 0; f < a.length && "2" !== a.charAt(f); f++) {
                    var g = c.definitions[a.charAt(f)];
                    g ? (d += e, e = g.cardinality) : e++
                }
                return b.join("").substr(d, e)
            },
            postValidation: function (a, b, d) {
                var e, f, g = a.join("");
                return 0 === d.mask.indexOf("y") ? (f = g.substr(0, 4), e = g.substr(4, 11)) : (f = g.substr(6, 11), e = g.substr(0, 6)), b && (e !== d.leapday || c(f))
            },
            definitions: {
                1: {
                    validator: function (a, b, c, d, e) {
                        var f = e.regex.val1.test(a);
                        return d || f || a.charAt(1) !== e.separator && "-./".indexOf(a.charAt(1)) === -1 || !(f = e.regex.val1.test("0" + a.charAt(0))) ? f : (b.buffer[c - 1] = "0", {
                            refreshFromBuffer: {
                                start: c - 1,
                                end: c
                            },
                            pos: c,
                            c: a.charAt(0)
                        })
                    },
                    cardinality: 2,
                    prevalidator: [{
                        validator: function (a, b, c, d, e) {
                            var f = a;
                            isNaN(b.buffer[c + 1]) || (f += b.buffer[c + 1]);
                            var g = 1 === f.length ? e.regex.val1pre.test(f) : e.regex.val1.test(f);
                            if (!d && !g) {
                                if (g = e.regex.val1.test(a + "0")) return b.buffer[c] = a, b.buffer[++c] = "0", {
                                    pos: c,
                                    c: "0"
                                };
                                if (g = e.regex.val1.test("0" + a)) return b.buffer[c] = "0", c++, {
                                    pos: c
                                }
                            }
                            return g
                        },
                        cardinality: 1
                    }]
                },
                2: {
                    validator: function (a, b, c, d, e) {
                        var f = e.getFrontValue(b.mask, b.buffer, e);
                        f.indexOf(e.placeholder[0]) !== -1 && (f = "01" + e.separator);
                        var g = e.regex.val2(e.separator).test(f + a);
                        return d || g || a.charAt(1) !== e.separator && "-./".indexOf(a.charAt(1)) === -1 || !(g = e.regex.val2(e.separator).test(f + "0" + a.charAt(0))) ? g : (b.buffer[c - 1] = "0", {
                            refreshFromBuffer: {
                                start: c - 1,
                                end: c
                            },
                            pos: c,
                            c: a.charAt(0)
                        })
                    },
                    cardinality: 2,
                    prevalidator: [{
                        validator: function (a, b, c, d, e) {
                            isNaN(b.buffer[c + 1]) || (a += b.buffer[c + 1]);
                            var f = e.getFrontValue(b.mask, b.buffer, e);
                            f.indexOf(e.placeholder[0]) !== -1 && (f = "01" + e.separator);
                            var g = 1 === a.length ? e.regex.val2pre(e.separator).test(f + a) : e.regex.val2(e.separator).test(f + a);
                            return d || g || !(g = e.regex.val2(e.separator).test(f + "0" + a)) ? g : (b.buffer[c] = "0", c++, {
                                pos: c
                            })
                        },
                        cardinality: 1
                    }]
                },
                y: {
                    validator: function (a, b, c, d, e) {
                        return e.isInYearRange(a, e.yearrange.minyear, e.yearrange.maxyear)
                    },
                    cardinality: 4,
                    prevalidator: [{
                        validator: function (a, b, c, d, e) {
                            var f = e.isInYearRange(a, e.yearrange.minyear, e.yearrange.maxyear);
                            if (!d && !f) {
                                var g = e.determinebaseyear(e.yearrange.minyear, e.yearrange.maxyear, a + "0").toString().slice(0, 1);
                                if (f = e.isInYearRange(g + a, e.yearrange.minyear, e.yearrange.maxyear)) return b.buffer[c++] = g.charAt(0), {
                                    pos: c
                                };
                                if (g = e.determinebaseyear(e.yearrange.minyear, e.yearrange.maxyear, a + "0").toString().slice(0, 2), f = e.isInYearRange(g + a, e.yearrange.minyear, e.yearrange.maxyear)) return b.buffer[c++] = g.charAt(0), b.buffer[c++] = g.charAt(1), {
                                    pos: c
                                }
                            }
                            return f
                        },
                        cardinality: 1
                    }, {
                        validator: function (a, b, c, d, e) {
                            var f = e.isInYearRange(a, e.yearrange.minyear, e.yearrange.maxyear);
                            if (!d && !f) {
                                var g = e.determinebaseyear(e.yearrange.minyear, e.yearrange.maxyear, a).toString().slice(0, 2);
                                if (f = e.isInYearRange(a[0] + g[1] + a[1], e.yearrange.minyear, e.yearrange.maxyear)) return b.buffer[c++] = g.charAt(1), {
                                    pos: c
                                };
                                if (g = e.determinebaseyear(e.yearrange.minyear, e.yearrange.maxyear, a).toString().slice(0, 2), f = e.isInYearRange(g + a, e.yearrange.minyear, e.yearrange.maxyear)) return b.buffer[c - 1] = g.charAt(0), b.buffer[c++] = g.charAt(1), b.buffer[c++] = a.charAt(0), {
                                    refreshFromBuffer: {
                                        start: c - 3,
                                        end: c
                                    },
                                    pos: c
                                }
                            }
                            return f
                        },
                        cardinality: 2
                    }, {
                        validator: function (a, b, c, d, e) {
                            return e.isInYearRange(a, e.yearrange.minyear, e.yearrange.maxyear)
                        },
                        cardinality: 3
                    }]
                }
            },
            insertMode: !1,
            autoUnmask: !1
        },
        "mm/dd/yyyy": {
            placeholder: "mm/dd/yyyy",
            alias: "dd/mm/yyyy",
            regex: {
                val2pre: function (a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[13-9]|1[012])" + c + "[0-3])|(02" + c + "[0-2])")
                },
                val2: function (a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[1-9]|1[012])" + c + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + c + "30)|((0[13578]|1[02])" + c + "31)")
                },
                val1pre: new RegExp("[01]"),
                val1: new RegExp("0[1-9]|1[012]")
            },
            leapday: "02/29/",
            onKeyDown: function (c, d, e, f) {
                var g = a(this);
                if (c.ctrlKey && c.keyCode === b.keyCode.RIGHT) {
                    var h = new Date;
                    g.val((h.getMonth() + 1).toString() + h.getDate().toString() + h.getFullYear().toString()), g.trigger("setvalue")
                }
            }
        },
        "yyyy/mm/dd": {
            mask: "y/1/2",
            placeholder: "yyyy/mm/dd",
            alias: "mm/dd/yyyy",
            leapday: "/02/29",
            onKeyDown: function (c, d, e, f) {
                var g = a(this);
                if (c.ctrlKey && c.keyCode === b.keyCode.RIGHT) {
                    var h = new Date;
                    g.val(h.getFullYear().toString() + (h.getMonth() + 1).toString() + h.getDate().toString()), g.trigger("setvalue")
                }
            }
        },
        "dd.mm.yyyy": {
            mask: "1.2.y",
            placeholder: "dd.mm.yyyy",
            leapday: "29.02.",
            separator: ".",
            alias: "dd/mm/yyyy"
        },
        "dd-mm-yyyy": {
            mask: "1-2-y",
            placeholder: "dd-mm-yyyy",
            leapday: "29-02-",
            separator: "-",
            alias: "dd/mm/yyyy"
        },
        "mm.dd.yyyy": {
            mask: "1.2.y",
            placeholder: "mm.dd.yyyy",
            leapday: "02.29.",
            separator: ".",
            alias: "mm/dd/yyyy"
        },
        "mm-dd-yyyy": {
            mask: "1-2-y",
            placeholder: "mm-dd-yyyy",
            leapday: "02-29-",
            separator: "-",
            alias: "mm/dd/yyyy"
        },
        "yyyy.mm.dd": {
            mask: "y.1.2",
            placeholder: "yyyy.mm.dd",
            leapday: ".02.29",
            separator: ".",
            alias: "yyyy/mm/dd"
        },
        "yyyy-mm-dd": {
            mask: "y-1-2",
            placeholder: "yyyy-mm-dd",
            leapday: "-02-29",
            separator: "-",
            alias: "yyyy/mm/dd"
        },
        datetime: {
            mask: "1/2/y h:s",
            placeholder: "dd/mm/yyyy hh:mm",
            alias: "dd/mm/yyyy",
            regex: {
                hrspre: new RegExp("[012]"),
                hrs24: new RegExp("2[0-4]|1[3-9]"),
                hrs: new RegExp("[01][0-9]|2[0-4]"),
                ampm: new RegExp("^[a|p|A|P][m|M]"),
                mspre: new RegExp("[0-5]"),
                ms: new RegExp("[0-5][0-9]")
            },
            timeseparator: ":",
            hourFormat: "24",
            definitions: {
                h: {
                    validator: function (a, b, c, d, e) {
                        if ("24" === e.hourFormat && 24 === parseInt(a, 10)) return b.buffer[c - 1] = "0", b.buffer[c] = "0", {
                            refreshFromBuffer: {
                                start: c - 1,
                                end: c
                            },
                            c: "0"
                        };
                        var f = e.regex.hrs.test(a);
                        if (!d && !f && (a.charAt(1) === e.timeseparator || "-.:".indexOf(a.charAt(1)) !== -1) && (f = e.regex.hrs.test("0" + a.charAt(0)))) return b.buffer[c - 1] = "0", b.buffer[c] = a.charAt(0), c++, {
                            refreshFromBuffer: {
                                start: c - 2,
                                end: c
                            },
                            pos: c,
                            c: e.timeseparator
                        };
                        if (f && "24" !== e.hourFormat && e.regex.hrs24.test(a)) {
                            var g = parseInt(a, 10);
                            return 24 === g ? (b.buffer[c + 5] = "a", b.buffer[c + 6] = "m") : (b.buffer[c + 5] = "p", b.buffer[c + 6] = "m"), g -= 12, g < 10 ? (b.buffer[c] = g.toString(), b.buffer[c - 1] = "0") : (b.buffer[c] = g.toString().charAt(1), b.buffer[c - 1] = g.toString().charAt(0)), {
                                refreshFromBuffer: {
                                    start: c - 1,
                                    end: c + 6
                                },
                                c: b.buffer[c]
                            }
                        }
                        return f
                    },
                    cardinality: 2,
                    prevalidator: [{
                        validator: function (a, b, c, d, e) {
                            var f = e.regex.hrspre.test(a);
                            return d || f || !(f = e.regex.hrs.test("0" + a)) ? f : (b.buffer[c] = "0", c++, {
                                pos: c
                            })
                        },
                        cardinality: 1
                    }]
                },
                s: {
                    validator: "[0-5][0-9]",
                    cardinality: 2,
                    prevalidator: [{
                        validator: function (a, b, c, d, e) {
                            var f = e.regex.mspre.test(a);
                            return d || f || !(f = e.regex.ms.test("0" + a)) ? f : (b.buffer[c] = "0", c++, {
                                pos: c
                            })
                        },
                        cardinality: 1
                    }]
                },
                t: {
                    validator: function (a, b, c, d, e) {
                        return e.regex.ampm.test(a + "m")
                    },
                    casing: "lower",
                    cardinality: 1
                }
            },
            insertMode: !1,
            autoUnmask: !1
        },
        datetime12: {
            mask: "1/2/y h:s t\\m",
            placeholder: "dd/mm/yyyy hh:mm xm",
            alias: "datetime",
            hourFormat: "12"
        },
        "mm/dd/yyyy hh:mm xm": {
            mask: "1/2/y h:s t\\m",
            placeholder: "mm/dd/yyyy hh:mm xm",
            alias: "datetime12",
            regex: {
                val2pre: function (a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[13-9]|1[012])" + c + "[0-3])|(02" + c + "[0-2])")
                },
                val2: function (a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[1-9]|1[012])" + c + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + c + "30)|((0[13578]|1[02])" + c + "31)")
                },
                val1pre: new RegExp("[01]"),
                val1: new RegExp("0[1-9]|1[012]")
            },
            leapday: "02/29/",
            onKeyDown: function (c, d, e, f) {
                var g = a(this);
                if (c.ctrlKey && c.keyCode === b.keyCode.RIGHT) {
                    var h = new Date;
                    g.val((h.getMonth() + 1).toString() + h.getDate().toString() + h.getFullYear().toString()), g.trigger("setvalue")
                }
            }
        },
        "hh:mm t": {
            mask: "h:s t\\m",
            placeholder: "hh:mm xm",
            alias: "datetime",
            hourFormat: "12"
        },
        "h:s t": {
            mask: "h:s t\\m",
            placeholder: "hh:mm xm",
            alias: "datetime",
            hourFormat: "12"
        },
        "hh:mm:ss": {
            mask: "h:s:s",
            placeholder: "hh:mm:ss",
            alias: "datetime",
            autoUnmask: !1
        },
        "hh:mm": {
            mask: "h:s",
            placeholder: "hh:mm",
            alias: "datetime",
            autoUnmask: !1
        },
        date: {
            alias: "dd/mm/yyyy"
        },
        "mm/yyyy": {
            mask: "1/y",
            placeholder: "mm/yyyy",
            leapday: "donotuse",
            separator: "/",
            alias: "mm/dd/yyyy"
        },
        shamsi: {
            regex: {
                val2pre: function (a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[1-9]|1[012])" + c + "[0-3])")
                },
                val2: function (a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[1-9]|1[012])" + c + "(0[1-9]|[12][0-9]))|((0[1-9]|1[012])" + c + "30)|((0[1-6])" + c + "31)")
                },
                val1pre: new RegExp("[01]"),
                val1: new RegExp("0[1-9]|1[012]")
            },
            yearrange: {
                minyear: 1300,
                maxyear: 1499
            },
            mask: "y/1/2",
            leapday: "/12/30",
            placeholder: "yyyy/mm/dd",
            alias: "mm/dd/yyyy",
            clearIncomplete: !0
        },
        "yyyy-mm-dd hh:mm:ss": {
            mask: "y-1-2 h:s:s",
            placeholder: "yyyy-mm-dd hh:mm:ss",
            alias: "datetime",
            separator: "-",
            leapday: "-02-29",
            regex: {
                val2pre: function (a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[13-9]|1[012])" + c + "[0-3])|(02" + c + "[0-2])")
                },
                val2: function (a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[1-9]|1[012])" + c + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + c + "30)|((0[13578]|1[02])" + c + "31)")
                },
                val1pre: new RegExp("[01]"),
                val1: new RegExp("0[1-9]|1[012]")
            },
            onKeyDown: function (a, b, c, d) {}
        }
    }), b
}),
function (a) {
    a(window.dependencyLib || jQuery, window.Inputmask)
}(function (a, b) {
    return b.extendDefinitions({
        A: {
            validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
            cardinality: 1,
            casing: "upper"
        },
        "&": {
            validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
            cardinality: 1,
            casing: "upper"
        },
        "#": {
            validator: "[0-9A-Fa-f]",
            cardinality: 1,
            casing: "upper"
        }
    }), b.extendAliases({
        url: {
            definitions: {
                i: {
                    validator: ".",
                    cardinality: 1
                }
            },
            mask: "(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",
            insertMode: !1,
            autoUnmask: !1,
            inputmode: "url"
        },
        ip: {
            mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
            definitions: {
                i: {
                    validator: function (a, b, c, d, e) {
                        return c - 1 > -1 && "." !== b.buffer[c - 1] ? (a = b.buffer[c - 1] + a, a = c - 2 > -1 && "." !== b.buffer[c - 2] ? b.buffer[c - 2] + a : "0" + a) : a = "00" + a, new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(a)
                    },
                    cardinality: 1
                }
            },
            onUnMask: function (a, b, c) {
                return a
            },
            inputmode: "numeric"
        },
        email: {
            mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
            greedy: !1,
            onBeforePaste: function (a, b) {
                return a = a.toLowerCase(), a.replace("mailto:", "")
            },
            definitions: {
                "*": {
                    validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
                    cardinality: 1,
                    casing: "lower"
                },
                "-": {
                    validator: "[0-9A-Za-z-]",
                    cardinality: 1,
                    casing: "lower"
                }
            },
            onUnMask: function (a, b, c) {
                return a
            },
            inputmode: "email"
        },
        mac: {
            mask: "##:##:##:##:##:##"
        },
        vin: {
            mask: "V{13}9{4}",
            definitions: {
                V: {
                    validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                    cardinality: 1,
                    casing: "upper"
                }
            },
            clearIncomplete: !0,
            autoUnmask: !0
        }
    }), b
}),
function (a) {
    a(window.dependencyLib || jQuery, window.Inputmask)
}(function (a, b, c) {
    function d(a, b) {
        for (var c = "", d = 0; d < a.length; d++) c += b.definitions[a.charAt(d)] || b.optionalmarker.start === a.charAt(d) || b.optionalmarker.end === a.charAt(d) || b.quantifiermarker.start === a.charAt(d) || b.quantifiermarker.end === a.charAt(d) || b.groupmarker.start === a.charAt(d) || b.groupmarker.end === a.charAt(d) || b.alternatormarker === a.charAt(d) ? "\\" + a.charAt(d) : a.charAt(d);
        return c
    }
    return b.extendAliases({
        numeric: {
            mask: function (a) {
                if (0 !== a.repeat && isNaN(a.integerDigits) && (a.integerDigits = a.repeat), a.repeat = 0, a.groupSeparator === a.radixPoint && ("." === a.radixPoint ? a.groupSeparator = "," : "," === a.radixPoint ? a.groupSeparator = "." : a.groupSeparator = ""), " " === a.groupSeparator && (a.skipOptionalPartCharacter = c), a.autoGroup = a.autoGroup && "" !== a.groupSeparator, a.autoGroup && ("string" == typeof a.groupSize && isFinite(a.groupSize) && (a.groupSize = parseInt(a.groupSize)), isFinite(a.integerDigits))) {
                    var b = Math.floor(a.integerDigits / a.groupSize),
                        e = a.integerDigits % a.groupSize;
                    a.integerDigits = parseInt(a.integerDigits) + (0 === e ? b - 1 : b), a.integerDigits < 1 && (a.integerDigits = "*")
                }
                a.placeholder.length > 1 && (a.placeholder = a.placeholder.charAt(0)), "radixFocus" === a.positionCaretOnClick && "" === a.placeholder && a.integerOptional === !1 && (a.positionCaretOnClick = "lvp"), a.definitions[";"] = a.definitions["~"], a.definitions[";"].definitionSymbol = "~", a.numericInput === !0 && (a.positionCaretOnClick = "radixFocus" === a.positionCaretOnClick ? "lvp" : a.positionCaretOnClick, a.digitsOptional = !1, isNaN(a.digits) && (a.digits = 2), a.decimalProtect = !1);
                var f = "[+]";
                if (f += d(a.prefix, a), f += a.integerOptional === !0 ? "~{1," + a.integerDigits + "}" : "~{" + a.integerDigits + "}", a.digits !== c) {
                    a.radixPointDefinitionSymbol = a.decimalProtect ? ":" : a.radixPoint;
                    var g = a.digits.toString().split(",");
                    isFinite(g[0] && g[1] && isFinite(g[1])) ? f += a.radixPointDefinitionSymbol + ";{" + a.digits + "}" : (isNaN(a.digits) || parseInt(a.digits) > 0) && (f += a.digitsOptional ? "[" + a.radixPointDefinitionSymbol + ";{1," + a.digits + "}]" : a.radixPointDefinitionSymbol + ";{" + a.digits + "}")
                }
                return f += d(a.suffix, a), f += "[-]", a.greedy = !1, f
            },
            placeholder: "",
            greedy: !1,
            digits: "*",
            digitsOptional: !0,
            radixPoint: ".",
            positionCaretOnClick: "radixFocus",
            groupSize: 3,
            groupSeparator: "",
            autoGroup: !1,
            allowMinus: !0,
            negationSymbol: {
                front: "-",
                back: ""
            },
            integerDigits: "+",
            integerOptional: !0,
            prefix: "",
            suffix: "",
            rightAlign: !0,
            decimalProtect: !0,
            min: null,
            max: null,
            step: 1,
            insertMode: !0,
            autoUnmask: !1,
            unmaskAsNumber: !1,
            inputmode: "numeric",
            preValidation: function (b, d, e, f, g) {
                if ("-" === e || e == g.negationSymbol.front) return g.allowMinus === !0 && (g.isNegative = g.isNegative === c || !g.isNegative, "" === b.join("") || {
                    caret: d,
                    dopost: !0
                });
                if (f === !1 && e === g.radixPoint && g.digits !== c && (isNaN(g.digits) || parseInt(g.digits) > 0)) {
                    var h = a.inArray(g.radixPoint, b);
                    if (h !== -1) return g.numericInput === !0 ? d === h : {
                        caret: h + 1
                    }
                }
                return !0
            },
            postValidation: function (d, e, f) {
                function g(a, b) {
                    var c = "";
                    if (c += "(" + b.groupSeparator + "*{" + b.groupSize + "}){*}", "" !== b.radixPoint) {
                        var d = a.join("").split(b.radixPoint);
                        d[1] && (c += b.radixPoint + "*{" + d[1].match(/^\d*\??\d*/)[0].length + "}")
                    }
                    return c
                }
                var h = f.suffix.split(""),
                    i = f.prefix.split("");
                if (e.pos == c && e.caret !== c && e.dopost !== !0) return e;
                var j = e.caret != c ? e.caret : e.pos,
                    k = d.slice();
                f.numericInput && (j = k.length - j - 1, k = k.reverse());
                var l = k[j];
                if (l === f.groupSeparator && (j += 1, l = k[j]), j == k.length - f.suffix.length - 1 && l === f.radixPoint) return e;
                l !== c && l !== f.radixPoint && l !== f.negationSymbol.front && l !== f.negationSymbol.back && (k[j] = "?", f.prefix.length > 0 && j >= (f.isNegative === !1 ? 1 : 0) && j < f.prefix.length - 1 + (f.isNegative === !1 ? 1 : 0) ? i[j - (f.isNegative === !1 ? 1 : 0)] = "?" : f.suffix.length > 0 && j >= k.length - f.suffix.length - (f.isNegative === !1 ? 1 : 0) && (h[j - (k.length - f.suffix.length - (f.isNegative === !1 ? 1 : 0))] = "?")), i = i.join(""), h = h.join("");
                var m = k.join("").replace(i, "");
                if (m = m.replace(h, ""), m = m.replace(new RegExp(b.escapeRegex(f.groupSeparator), "g"), ""), m = m.replace(new RegExp("[-" + b.escapeRegex(f.negationSymbol.front) + "]", "g"), ""), m = m.replace(new RegExp(b.escapeRegex(f.negationSymbol.back) + "$"), ""), isNaN(f.placeholder) && (m = m.replace(new RegExp(b.escapeRegex(f.placeholder), "g"), "")), m.length > 1 && 1 !== m.indexOf(f.radixPoint) && ("0" == l && (m = m.replace(/^\?/g, "")), m = m.replace(/^0/g, "")), m.charAt(0) === f.radixPoint && f.numericInput !== !0 && (m = "0" + m), "" !== m) {
                    if (m = m.split(""), !f.digitsOptional && isFinite(f.digits)) {
                        var n = a.inArray(f.radixPoint, m),
                            o = a.inArray(f.radixPoint, k);
                        n === -1 && (m.push(f.radixPoint), n = m.length - 1);
                        for (var p = 1; p <= f.digits; p++) f.digitsOptional || m[n + p] !== c && m[n + p] !== f.placeholder.charAt(0) ? o !== -1 && k[o + p] !== c && (m[n + p] = m[n + p] || k[o + p]) : m[n + p] = e.placeholder || f.placeholder.charAt(0)
                    }
                    f.autoGroup !== !0 || "" === f.groupSeparator || l === f.radixPoint && e.pos === c && !e.dopost ? m = m.join("") : (m = b(g(m, f), {
                        numericInput: !0,
                        jitMasking: !0,
                        definitions: {
                            "*": {
                                validator: "[0-9?]",
                                cardinality: 1
                            }
                        }
                    }).format(m.join("")), m.charAt(0) === f.groupSeparator && m.substr(1))
                }
                if (f.isNegative && "blur" === e.event && (f.isNegative = "0" !== m), m = i + m, m += h, f.isNegative && (m = f.negationSymbol.front + m, m += f.negationSymbol.back), m = m.split(""), l !== c)
                    if (l !== f.radixPoint && l !== f.negationSymbol.front && l !== f.negationSymbol.back) j = a.inArray("?", m), j > -1 ? m[j] = l : j = e.caret || 0;
                    else if (l === f.radixPoint || l === f.negationSymbol.front || l === f.negationSymbol.back) {
                    var q = a.inArray(l, m);
                    q !== -1 && (j = q)
                }
                f.numericInput && (j = m.length - j - 1, m = m.reverse());
                var r = {
                    caret: l === c || e.pos !== c ? j + (f.numericInput ? -1 : 1) : j,
                    buffer: m,
                    refreshFromBuffer: e.dopost || d.join("") !== m.join("")
                };
                return r.refreshFromBuffer ? r : e
            },
            onBeforeWrite: function (d, e, f, g) {
                function h(a) {
                    a.parseMinMaxOptions === c && (null !== a.min && (a.min = a.min.toString().replace(new RegExp(b.escapeRegex(a.groupSeparator), "g"), ""), "," === a.radixPoint && (a.min = a.min.replace(a.radixPoint, ".")), a.min = isFinite(a.min) ? parseFloat(a.min) : NaN, isNaN(a.min) && (a.min = Number.MIN_VALUE)), null !== a.max && (a.max = a.max.toString().replace(new RegExp(b.escapeRegex(a.groupSeparator), "g"), ""), "," === a.radixPoint && (a.max = a.max.replace(a.radixPoint, ".")), a.max = isFinite(a.max) ? parseFloat(a.max) : NaN, isNaN(a.max) && (a.max = Number.MAX_VALUE)), a.parseMinMaxOptions = "done")
                }
                if (d) switch (d.type) {
                    case "keydown":
                        return g.postValidation(e, {
                            caret: f,
                            dopost: !0
                        }, g);
                    case "blur":
                    case "checkval":
                        var i;
                        if (h(g), null !== g.min || null !== g.max) {
                            if (i = g.onUnMask(e.join(""), c, a.extend({}, g, {
                                    unmaskAsNumber: !0
                                })), null !== g.min && i < g.min) return g.isNegative = g.min < 0, g.postValidation(g.min.toString().replace(".", g.radixPoint).split(""), {
                                caret: f,
                                dopost: !0,
                                placeholder: "0"
                            }, g);
                            if (null !== g.max && i > g.max) return g.isNegative = g.max < 0, g.postValidation(g.max.toString().replace(".", g.radixPoint).split(""), {
                                caret: f,
                                dopost: !0,
                                placeholder: "0"
                            }, g)
                        }
                        return g.postValidation(e, {
                            caret: f,
                            dopost: !0,
                            placeholder: "0",
                            event: "blur"
                        }, g);
                    case "_checkval":
                        return {
                            caret: f
                        }
                }
            },
            regex: {
                integerPart: function (a, c) {
                    return c ? new RegExp("[" + b.escapeRegex(a.negationSymbol.front) + "+]?") : new RegExp("[" + b.escapeRegex(a.negationSymbol.front) + "+]?\\d+")
                },
                integerNPart: function (a) {
                    return new RegExp("[\\d" + b.escapeRegex(a.groupSeparator) + b.escapeRegex(a.placeholder.charAt(0)) + "]+")
                }
            },
            definitions: {
                "~": {
                    validator: function (a, d, e, f, g, h) {
                        var i = f ? new RegExp("[0-9" + b.escapeRegex(g.groupSeparator) + "]").test(a) : new RegExp("[0-9]").test(a);
                        if (i === !0) {
                            if (g.numericInput !== !0 && d.validPositions[e] !== c && "~" === d.validPositions[e].match.def && !h) {
                                var j = d.buffer.join("");
                                j = j.replace(new RegExp("[-" + b.escapeRegex(g.negationSymbol.front) + "]", "g"), ""), j = j.replace(new RegExp(b.escapeRegex(g.negationSymbol.back) + "$"), ""), j = j.replace(/0/g, g.placeholder.charAt(0));
                                var k = d._buffer.join("");
                                for (j === g.radixPoint && (j = k); null === j.match(b.escapeRegex(k) + "$");) k = k.slice(1);
                                j = j.replace(k, ""), j = j.split(""), i = j[e] === c ? {
                                    pos: e,
                                    remove: e
                                } : {
                                    pos: e
                                }
                            }
                        } else f || a !== g.radixPoint || d.validPositions[e - 1] !== c || (d.buffer[e] = "0", i = {
                            pos: e + 1
                        });
                        return i
                    },
                    cardinality: 1
                },
                "+": {
                    validator: function (a, b, c, d, e) {
                        return e.allowMinus && ("-" === a || a === e.negationSymbol.front)
                    },
                    cardinality: 1,
                    placeholder: ""
                },
                "-": {
                    validator: function (a, b, c, d, e) {
                        return e.allowMinus && a === e.negationSymbol.back
                    },
                    cardinality: 1,
                    placeholder: ""
                },
                ":": {
                    validator: function (a, c, d, e, f) {
                        var g = "[" + b.escapeRegex(f.radixPoint) + "]";
                        return isValid = new RegExp(g).test(a), isValid && c.validPositions[d] && c.validPositions[d].match.placeholder === f.radixPoint && (isValid = {
                            caret: d + 1
                        }), isValid
                    },
                    cardinality: 1,
                    placeholder: function (a) {
                        return a.radixPoint
                    }
                }
            },
            onUnMask: function (a, c, d) {
                if ("" === c && d.nullable === !0) return c;
                var e = a.replace(d.prefix, "");
                return e = e.replace(d.suffix, ""), e = e.replace(new RegExp(b.escapeRegex(d.groupSeparator), "g"), ""), "" !== d.placeholder.charAt(0) && (e = e.replace(new RegExp(d.placeholder.charAt(0), "g"), "0")), d.unmaskAsNumber ? ("" !== d.radixPoint && e.indexOf(d.radixPoint) !== -1 && (e = e.replace(b.escapeRegex.call(this, d.radixPoint), ".")), Number(e)) : e
            },
            isComplete: function (a, c) {
                var d = a.join(""),
                    e = a.slice();
                if (e.join("") !== d) return !1;
                var f = d.replace(c.prefix, "");
                return f = f.replace(c.suffix, ""), f = f.replace(new RegExp(b.escapeRegex(c.groupSeparator), "g"), ""), "," === c.radixPoint && (f = f.replace(b.escapeRegex(c.radixPoint), ".")), isFinite(f)
            },
            onBeforeMask: function (a, d) {
                if (d.isNegative = c, a = a.toString().charAt(a.length - 1) === d.radixPoint ? a.toString().substr(0, a.length - 1) : a.toString(), "" !== d.radixPoint && isFinite(a)) {
                    var e = a.split("."),
                        f = "" !== d.groupSeparator ? parseInt(d.groupSize) : 0;
                    2 === e.length && (e[0].length > f || e[1].length > f || e[0].length < f && e[1].length < f) && (a = a.replace(".", d.radixPoint))
                }
                var g = a.match(/,/g),
                    h = a.match(/\./g);
                if (h && g ? h.length > g.length ? (a = a.replace(/\./g, ""), a = a.replace(",", d.radixPoint)) : g.length > h.length ? (a = a.replace(/,/g, ""), a = a.replace(".", d.radixPoint)) : a = a.indexOf(".") < a.indexOf(",") ? a.replace(/\./g, "") : a = a.replace(/,/g, "") : a = a.replace(new RegExp(b.escapeRegex(d.groupSeparator), "g"), ""), 0 === d.digits && (a.indexOf(".") !== -1 ? a = a.substring(0, a.indexOf(".")) : a.indexOf(",") !== -1 && (a = a.substring(0, a.indexOf(",")))), "" !== d.radixPoint && isFinite(d.digits) && a.indexOf(d.radixPoint) !== -1) {
                    var i = a.split(d.radixPoint),
                        j = i[1].match(new RegExp("\\d*"))[0];
                    if (parseInt(d.digits) < j.toString().length) {
                        var k = Math.pow(10, parseInt(d.digits));
                        a = a.replace(b.escapeRegex(d.radixPoint), "."), a = Math.round(parseFloat(a) * k) / k, a = a.toString().replace(".", d.radixPoint)
                    }
                }
                return a
            },
            canClearPosition: function (a, b, c, d, e) {
                var f = a.validPositions[b],
                    g = f.input !== e.radixPoint || null !== a.validPositions[b].match.fn && e.decimalProtect === !1 || f.input === e.radixPoint && a.validPositions[b + 1] && null === a.validPositions[b + 1].match.fn || isFinite(f.input) || b === c || f.input === e.groupSeparator || f.input === e.negationSymbol.front || f.input === e.negationSymbol.back;
                return !g || "+" != f.match.nativeDef && "-" != f.match.nativeDef || (e.isNegative = !1), g
            },
            onKeyDown: function (c, d, e, f) {
                var g = a(this);
                if (c.ctrlKey) switch (c.keyCode) {
                    case b.keyCode.UP:
                        g.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(f.step)), g.trigger("setvalue");
                        break;
                    case b.keyCode.DOWN:
                        g.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(f.step)), g.trigger("setvalue")
                }
            }
        },
        currency: {
            prefix: "$ ",
            groupSeparator: ",",
            alias: "numeric",
            placeholder: "0",
            autoGroup: !0,
            digits: 2,
            digitsOptional: !1,
            clearMaskOnLostFocus: !1
        },
        decimal: {
            alias: "numeric"
        },
        integer: {
            alias: "numeric",
            digits: 0,
            radixPoint: ""
        },
        percentage: {
            alias: "numeric",
            digits: 2,
            digitsOptional: !0,
            radixPoint: ".",
            placeholder: "0",
            autoGroup: !1,
            min: 0,
            max: 100,
            suffix: " %",
            allowMinus: !1
        }
    }), b
}),
function (a) {
    a(window.dependencyLib || jQuery, window.Inputmask)
}(function (a, b) {
    function c(a, b) {
        var c = (a.mask || a).replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""),
            d = (b.mask || b).replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""),
            e = (a.mask || a).split("#")[0],
            f = (b.mask || b).split("#")[0];
        return 0 === f.indexOf(e) ? -1 : 0 === e.indexOf(f) ? 1 : c.localeCompare(d)
    }
    var d = b.prototype.analyseMask;
    return b.prototype.analyseMask = function (b, c) {
        function e(a, c, d) {
            c = c || "", d = d || g, "" !== c && (d[c] = {});
            for (var f = "", h = d[c] || d, i = a.length - 1; i >= 0; i--) b = a[i].mask || a[i], f = b.substr(0, 1), h[f] = h[f] || [], h[f].unshift(b.substr(1)), a.splice(i, 1);
            for (var j in h) h[j].length > 500 && e(h[j].slice(), j, h)
        }

        function f(b) {
            var d = "",
                e = [];
            for (var g in b) a.isArray(b[g]) ? 1 === b[g].length ? e.push(g + b[g]) : e.push(g + c.groupmarker.start + b[g].join(c.groupmarker.end + c.alternatormarker + c.groupmarker.start) + c.groupmarker.end) : e.push(g + f(b[g]));
            return d += 1 === e.length ? e[0] : c.groupmarker.start + e.join(c.groupmarker.end + c.alternatormarker + c.groupmarker.start) + c.groupmarker.end
        }
        var g = {};
        c.phoneCodes && (c.phoneCodes && c.phoneCodes.length > 1e3 && (b = b.substr(1, b.length - 2), e(b.split(c.groupmarker.end + c.alternatormarker + c.groupmarker.start)), b = f(g)), b = b.replace(/9/g, "\\9"));
        var h = d.call(this, b, c);
        return h
    }, b.extendAliases({
        abstractphone: {
            groupmarker: {
                start: "<",
                end: ">"
            },
            countrycode: "",
            phoneCodes: [],
            mask: function (a) {
                return a.definitions = {
                    "#": b.prototype.definitions[9]
                }, a.phoneCodes.sort(c)
            },
            keepStatic: !0,
            onBeforeMask: function (a, b) {
                var c = a.replace(/^0{1,2}/, "").replace(/[\s]/g, "");
                return (c.indexOf(b.countrycode) > 1 || c.indexOf(b.countrycode) === -1) && (c = "+" + b.countrycode + c), c
            },
            onUnMask: function (a, b, c) {
                return b
            },
            inputmode: "tel"
        }
    }), b
}),
function (a) {
    a(window.dependencyLib || jQuery, window.Inputmask)
}(function (a, b) {
    return b.extendAliases({
        Regex: {
            mask: "r",
            greedy: !1,
            repeat: "*",
            regex: null,
            regexTokens: null,
            tokenizer: /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
            quantifierFilter: /[0-9]+[^,]/,
            isComplete: function (a, b) {
                return new RegExp(b.regex, b.casing ? "i" : "").test(a.join(""))
            },
            definitions: {
                r: {
                    validator: function (b, c, d, e, f) {
                        function g(a, b) {
                            this.matches = [], this.isGroup = a || !1, this.isQuantifier = b || !1, this.quantifier = {
                                min: 1,
                                max: 1
                            }, this.repeaterPart = void 0
                        }

                        function h() {
                            var a, b, c = new g,
                                d = [];
                            for (f.regexTokens = []; a = f.tokenizer.exec(f.regex);) switch (b = a[0], b.charAt(0)) {
                                case "(":
                                    d.push(new g((!0)));
                                    break;
                                case ")":
                                    k = d.pop(), d.length > 0 ? d[d.length - 1].matches.push(k) : c.matches.push(k);
                                    break;
                                case "{":
                                case "+":
                                case "*":
                                    var e = new g((!1), (!0));
                                    b = b.replace(/[{}]/g, "");
                                    var h = b.split(","),
                                        i = isNaN(h[0]) ? h[0] : parseInt(h[0]),
                                        j = 1 === h.length ? i : isNaN(h[1]) ? h[1] : parseInt(h[1]);
                                    if (e.quantifier = {
                                            min: i,
                                            max: j
                                        }, d.length > 0) {
                                        var l = d[d.length - 1].matches;
                                        a = l.pop(), a.isGroup || (k = new g((!0)), k.matches.push(a), a = k), l.push(a), l.push(e)
                                    } else a = c.matches.pop(), a.isGroup || (k = new g((!0)), k.matches.push(a), a = k), c.matches.push(a), c.matches.push(e);
                                    break;
                                default:
                                    d.length > 0 ? d[d.length - 1].matches.push(b) : c.matches.push(b)
                            }
                            c.matches.length > 0 && f.regexTokens.push(c)
                        }

                        function i(b, c) {
                            var d = !1;
                            c && (m += "(", o++);
                            for (var e = 0; e < b.matches.length; e++) {
                                var g = b.matches[e];
                                if (g.isGroup === !0) d = i(g, !0);
                                else if (g.isQuantifier === !0) {
                                    var h = a.inArray(g, b.matches),
                                        k = b.matches[h - 1],
                                        l = m;
                                    if (isNaN(g.quantifier.max)) {
                                        for (; g.repeaterPart && g.repeaterPart !== m && g.repeaterPart.length > m.length && !(d = i(k, !0)););
                                        d = d || i(k, !0), d && (g.repeaterPart = m), m = l + g.quantifier.max
                                    } else {
                                        for (var n = 0, p = g.quantifier.max - 1; n < p && !(d = i(k, !0)); n++);
                                        m = l + "{" + g.quantifier.min + "," + g.quantifier.max + "}"
                                    }
                                } else if (void 0 !== g.matches)
                                    for (var q = 0; q < g.length && !(d = i(g[q], c)); q++);
                                else {
                                    var r;
                                    if ("[" == g.charAt(0)) {
                                        r = m, r += g;
                                        for (var s = 0; s < o; s++) r += ")";
                                        var t = new RegExp("^(" + r + ")$", f.casing ? "i" : "");
                                        d = t.test(j)
                                    } else
                                        for (var u = 0, v = g.length; u < v; u++)
                                            if ("\\" !== g.charAt(u)) {
                                                r = m, r += g.substr(0, u + 1), r = r.replace(/\|$/, "");
                                                for (var s = 0; s < o; s++) r += ")";
                                                var t = new RegExp("^(" + r + ")$", f.casing ? "i" : "");
                                                if (d = t.test(j)) break
                                            } m += g
                                }
                                if (d) break
                            }
                            return c && (m += ")", o--), d
                        }
                        var j, k, l = c.buffer.slice(),
                            m = "",
                            n = !1,
                            o = 0;
                        null === f.regexTokens && h(), l.splice(d, 0, b), j = l.join("");
                        for (var p = 0; p < f.regexTokens.length; p++) {
                            var q = f.regexTokens[p];
                            if (n = i(q, q.isGroup)) break
                        }
                        return n
                    },
                    cardinality: 1
                }
            }
        }
    }), b
});;
! function (i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function (i) {
    "use strict";
    var e = window.Slick || {};
    (e = function () {
        var e = 0;
        return function (t, o) {
            var s, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(t),
                appendDots: i(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (e, t) {
                    return i('<button type="button" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
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
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, n.initials = {
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
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
        }
    }()).prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
        var s = this;
        if ("boolean" == typeof t) o = t, t = null;
        else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e)
        }), s.$slidesCache = s.$slides, s.reinit()
    }, e.prototype.animateHeight = function () {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({
                height: e
            }, i.options.speed)
        }
    }, e.prototype.animateSlide = function (e, t) {
        var o = {},
            s = this;
        s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
            left: e
        }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
            top: e
        }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({
            animStart: s.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function (i) {
                i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o))
            },
            complete: function () {
                t && t.call()
            }
        })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
            s.disableTransition(), t.call()
        }, s.options.speed))
    }, e.prototype.getNavTarget = function () {
        var e = this,
            t = e.options.asNavFor;
        return t && null !== t && (t = i(t).not(e.$slider)), t
    }, e.prototype.asNavFor = function (e) {
        var t = this.getNavTarget();
        null !== t && "object" == typeof t && t.each(function () {
            var t = i(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0)
        })
    }, e.prototype.applyTransition = function (i) {
        var e = this,
            t = {};
        !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.autoPlay = function () {
        var i = this;
        i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function () {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function () {
        var i = this,
            e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e))
    }, e.prototype.buildArrows = function () {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, e.prototype.buildDots = function () {
        var e, t, o = this;
        if (!0 === o.options.dots) {
            for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
            o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
        }
    }, e.prototype.buildOut = function () {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function () {
        var i, e, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
            for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
                var d = document.createElement("div");
                for (e = 0; e < l.options.rows; e++) {
                    var a = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = i * r + (e * l.options.slidesPerRow + t);
                        n.get(c) && a.appendChild(n.get(c))
                    }
                    d.appendChild(a)
                }
                o.appendChild(d)
            }
            l.$slider.empty().append(o), l.$slider.children().children().children().css({
                width: 100 / l.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, e.prototype.checkResponsive = function (e, t) {
        var o, s, n, r = this,
            l = !1,
            d = r.$slider.width(),
            a = window.innerWidth || i(window).width();
        if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            s = null;
            for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
        }
    }, e.prototype.changeSlide = function (e, t) {
        var o, s, n, r = this,
            l = i(e.currentTarget);
        switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
            case "previous":
                s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                break;
            case "next":
                s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                break;
            case "index":
                var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function (i) {
        var e, t;
        if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];
        else
            for (var o in e) {
                if (i < e[o]) {
                    i = t;
                    break
                }
                t = e[o]
            }
        return i
    }, e.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpSlideEvents = function () {
        var e = this;
        e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.cleanUpRows = function () {
        var i, e = this;
        e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i))
    }, e.prototype.clickHandler = function (i) {
        !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
    }, e.prototype.destroy = function (e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            i(this).attr("style", i(this).data("originalStyling"))
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
    }, e.prototype.disableTransition = function (i) {
        var e = this,
            t = {};
        t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.fadeSlide = function (i, e) {
        var t = this;
        !1 === t.cssTransitions ? (t.$slides.eq(i).css({
            zIndex: t.options.zIndex
        }), t.$slides.eq(i).animate({
            opacity: 1
        }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
            opacity: 1,
            zIndex: t.options.zIndex
        }), e && setTimeout(function () {
            t.disableTransition(i), e.call()
        }, t.options.speed))
    }, e.prototype.fadeSlideOut = function (i) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(i).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.focusHandler = function () {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
            t.stopImmediatePropagation();
            var o = i(this);
            setTimeout(function () {
                e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay())
            }, 0)
        })
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
        return this.currentSlide
    }, e.prototype.getDotCount = function () {
        var i = this,
            e = 0,
            t = 0,
            o = 0;
        if (!0 === i.options.infinite)
            if (i.slideCount <= i.options.slidesToShow) ++o;
            else
                for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else if (!0 === i.options.centerMode) o = i.slideCount;
        else if (i.options.asNavFor)
            for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return o - 1
    }, e.prototype.getLeft = function (i) {
        var e, t, o, s, n = this,
            r = 0;
        return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
        return this.options[i]
    }, e.prototype.getNavigableIndexes = function () {
        var i, e = this,
            t = 0,
            o = 0,
            s = [];
        for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s
    }, e.prototype.getSlick = function () {
        return this
    }, e.prototype.getSlideCount = function () {
        var e, t, o = this;
        return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
            if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1
        }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(i)
            }
        }, e)
    }, e.prototype.init = function (e) {
        var t = this;
        i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
    }, e.prototype.initADA = function () {
        var e = this,
            t = Math.ceil(e.slideCount / e.options.slidesToShow),
            o = e.getNavigableIndexes().filter(function (i) {
                return i >= 0 && i < e.slideCount
            });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
            var s = o.indexOf(t);
            i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1
            }), -1 !== s && i(this).attr({
                "aria-describedby": "slick-slide-control" + e.instanceUid + s
            })
        }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
            var n = o[s];
            i(this).attr({
                role: "presentation"
            }), i(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + s,
                "aria-controls": "slick-slide" + e.instanceUid + n,
                "aria-label": s + 1 + " of " + t,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(e.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
        e.activateADA()
    }, e.prototype.initArrowEvents = function () {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)))
    }, e.prototype.initDotEvents = function () {
        var e = this;
        !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.initSlideEvents = function () {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
    }, e.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition)
    }, e.prototype.initUI = function () {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
    }, e.prototype.keyHandler = function (i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }))
    }, e.prototype.lazyLoad = function () {
        function e(e) {
            i("img[data-lazy]", e).each(function () {
                var e = i(this),
                    t = i(this).attr("data-lazy"),
                    o = i(this).attr("data-srcset"),
                    s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
                    r = document.createElement("img");
                r.onload = function () {
                    e.animate({
                        opacity: 0
                    }, 100, function () {
                        o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function () {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), n.$slider.trigger("lazyLoaded", [n, e, t])
                    })
                }, r.onerror = function () {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t])
                }, r.src = t
            })
        }
        var t, o, s, n = this;
        if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad)
            for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
        e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }, e.prototype.loadSlider = function () {
        var i = this;
        i.setPosition(), i.$slideTrack.css({
            opacity: 1
        }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function () {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, e.prototype.orientationChange = function () {
        var i = this;
        i.checkResponsive(), i.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function () {
        var i = this;
        i.autoPlayClear(), i.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function () {
        var i = this;
        i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
    }, e.prototype.postSlide = function (e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
    }, e.prototype.prev = e.prototype.slickPrev = function () {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, e.prototype.preventDefault = function (i) {
        i.preventDefault()
    }, e.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var t, o, s, n, r, l = this,
            d = i("img[data-lazy]", l.$slider);
        d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad()
        }, r.onerror = function () {
            e < 3 ? setTimeout(function () {
                l.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad())
        }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
    }, e.prototype.refresh = function (e) {
        var t, o, s = this;
        o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
            currentSlide: t
        }), s.init(), e || s.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }, e.prototype.registerBreakpoints = function () {
        var e, t, o, s = this,
            n = s.options.responsive || null;
        if ("array" === i.type(n) && n.length) {
            s.respondTo = s.options.respondTo || "window";
            for (e in n)
                if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
                    for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
                    s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings
                } s.breakpoints.sort(function (i, e) {
                return s.options.mobileFirst ? i - e : e - i
            })
        }
    }, e.prototype.reinit = function () {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, e.prototype.resize = function () {
        var e = this;
        i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
            e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
        var o = this;
        if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
        o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
    }, e.prototype.setCSS = function (i) {
        var e, t, o = this,
            s = {};
        !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)))
    }, e.prototype.setDimensions = function () {
        var i = this;
        !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
            padding: "0px " + i.options.centerPadding
        }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
            padding: i.options.centerPadding + " 0px"
        })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
    }, e.prototype.setFade = function () {
        var e, t = this;
        t.$slides.each(function (o, s) {
            e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            })
        }), t.$slides.eq(t.currentSlide).css({
            zIndex: t.options.zIndex - 1,
            opacity: 1
        })
    }, e.prototype.setHeight = function () {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function () {
        var e, t, o, s, n, r = this,
            l = !1;
        if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;
        else if ("multiple" === n) i.each(o, function (i, e) {
            r.options[i] = e
        });
        else if ("responsive" === n)
            for (t in s)
                if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];
                else {
                    for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
                    r.options.responsive.push(s[t])
                } l && (r.unload(), r.reinit())
    }, e.prototype.setPosition = function () {
        var i = this;
        i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
    }, e.prototype.setProps = function () {
        var i = this,
            e = document.body.style;
        i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
    }, e.prototype.setSlideClasses = function (i) {
        var e, t, o, s, n = this;
        if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
            var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")
        } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }, e.prototype.setupInfinite = function () {
        var e, t, o, s = this;
        if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
            for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                i(this).attr("id", "")
            })
        }
    }, e.prototype.interrupt = function (i) {
        var e = this;
        i || e.autoPlay(), e.interrupted = i
    }, e.prototype.selectHandler = function (e) {
        var t = this,
            o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
            s = parseInt(o.attr("data-slick-index"));
        s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
    }, e.prototype.slideHandler = function (i, e, t) {
        var o, s, n, r, l, d = null,
            a = this;
        if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i))
            if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
                a.postSlide(o)
            }) : a.postSlide(o));
            else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
            a.postSlide(o)
        }) : a.postSlide(o));
        else {
            if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
                a.postSlide(s)
            })) : a.postSlide(s), void a.animateHeight();
            !0 !== t ? a.animateSlide(d, function () {
                a.postSlide(s)
            }) : a.postSlide(s)
        }
    }, e.prototype.startLoad = function () {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function () {
        var i, e, t, o, s = this;
        return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
    }, e.prototype.swipeEnd = function (i) {
        var e, t, o = this;
        if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
        if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
                case "left":
                case "down":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
            }
            "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
    }, e.prototype.swipeHandler = function (i) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
            case "start":
                e.swipeStart(i);
                break;
            case "move":
                e.swipeMove(i);
                break;
            case "end":
                e.swipeEnd(i)
        }
    }, e.prototype.swipeMove = function (i) {
        var e, t, o, s, n, r, l = this;
        return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))))
    }, e.prototype.swipeStart = function (i) {
        var e, t = this;
        if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
        void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
        var i = this;
        null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
    }, e.prototype.unload = function () {
        var e = this;
        i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function (i) {
        var e = this;
        e.$slider.trigger("unslick", [e, i]), e.destroy()
    }, e.prototype.updateArrows = function () {
        var i = this;
        Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function () {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
    }, e.prototype.visibility = function () {
        var i = this;
        i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
    }, i.fn.slick = function () {
        var i, t, o = this,
            s = arguments[0],
            n = Array.prototype.slice.call(arguments, 1),
            r = o.length;
        for (i = 0; i < r; i++)
            if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
        return o
    }
});;
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const video = document.querySelectorAll('.video');

const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup__overlay'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup__overlay.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup__overlay'));
			}
		});
	}
}



function popupClose(popupActive, doUnlock = true) {
	if (unlock) {

		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		};
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup__overlay.open');
		popupClose(popupActive);
	}
});

video.forEach((item,i)=>{
	item.addEventListener('click', event=>{
		const elem = document.getElementById(i);
		elem.classList.add('show_rel')
		elem.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
	});
});


(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();

;
//MASKS//
//'+7(999) 999 9999'
//'+38(999) 999 9999'
//'+375(99)999-99-99'
$.each($('input.phone'), function(index, val) {
    $(this).attr('type','tel');
    $(this).focus(function(){
        $(this).inputmask('+375(99)999-99-99',{clearIncomplete: true,clearMaskOnLostFocus: false,
            "onincomplete": function(){maskclear($(this));}
        });
        $(this).addClass('focus');
        $(this).parent().addClass('focus');
        $(this).parent().removeClass('err');
        $(this).removeClass('err');
    });
});
$('input.phone').focusout(function(event) {
    maskclear($(this));
});





//SLIDERS
if($('.slider').length>0){
	$('.slider').slick({
	autoplay: true,
	infinite: true,
	dots: false,
	arrows: true,
	fade: false,
	accessibility:false,
	slidesToShow: 3,
	speed: 1000,
	autoplaySpeed: 3000,
	adaptiveHeight: false,
	//asNavFor:'',
	// appendDots:$('.step-slider__controls'),
	// appendArrows:$('.slider-btn__group'),
	// nextArrow:'<button type="button" class="slider__prev slick-prev"></button>',
	// prevArrow:'<button type="button" class="slider__next slick-next"></button>',
	responsive: [{
		breakpoint: 1198,
		settings: {	slidesToShow: 2}
		},
		{
			breakpoint: 768,
			settings: {	slidesToShow: 1}
			}]
	});

	  
};


if($('.slider-three').length>0){
	$('.slider-three').slick({
	// autoplay: true,
	infinite: true,
	dots: false,
	arrows: true,
	fade: false,
	accessibility:false,
	slidesToShow: 3,
	speed: 1000,
	autoplaySpeed: 3000,
	adaptiveHeight: false,
	//asNavFor:'',
	// appendDots:$('.step-slider__controls'),
	// appendArrows:$('.slider-btn__group'),
	// nextArrow:'<button type="button" class="slider__prev slick-prev"></button>',
	// prevArrow:'<button type="button" class="slider__next slick-next"></button>',
	responsive: [{
		breakpoint: 1198,
		settings: {	slidesToShow: 2}
		},
		{
			breakpoint: 768,
			settings: {	slidesToShow: 1}
			}]
	});

	  
};




// parallax

if(window.matchMedia('(min-width: 991px)').matches){
		var scene = document.querySelectorAll('.parallax');
			scene.forEach(item=>{
				const picture = item.querySelector('picture');
				picture.classList.toggle('parallax');
				var parallaxInstance = new Parallax(picture);
			})

		}
// //ibg

function ibg(){

	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
	if(ibg[i].querySelector('img')){
	ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
	}
	}
}
	
ibg();


	




$(window).scroll(function(){
    if ($(window).scrollTop() > 780) {
		$('.sticky-buttons').addClass('show');
    }
    else {
		$('.sticky-buttons').removeClass('show');
    }
});


// scroll 
$(document).ready(()=> {$(".arrow__link").click(function (e) {var elementClick = $(this).attr("href");var destination = $(elementClick).offset().top;jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);e.preventDefault();return false;});});




AOS.init();
;



function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});