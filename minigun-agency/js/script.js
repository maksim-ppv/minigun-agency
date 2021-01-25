
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
if($('.step-slider__items').length>0){
	$('.step-slider__items').slick({
	// autoplay: true,
	infinite: false,
	dots: false,
	arrows: true,
	fade: true,
	cssEase: 'linear',
	accessibility:false,
	slidesToShow:1,
	speed: 1000,
	autoplaySpeed: 3000,
	adaptiveHeight: true,
	//asNavFor:'',
	// appendDots:$('.step-slider__controls'),
	appendArrows:$('.step-slider__btn-group'),
	nextArrow:'<button type="button" class="step-slider__next"></button>',
	prevArrow:'<button type="button" class="step-slider__prev"></button>',
	// responsive: [{
	// 	breakpoint: 768,
	// 	settings: {	adaptiveHeight: true}
	// 	}]
	});
	$('.step-slider-controls__li').click(function() {
		$('.step-slider-controls__li').removeClass("step-slider-controls__li_active");
		var $this = $(this);
		var newImage = $(this).index();
	
		$('.step-slider-controls__li').eq(newImage).addClass("step-slider-controls__li_active");
		$('.step-slider__items').slick('slickGoTo', $this.data('index'))
	  });
	  $('.step-slider__btn-group .slick-arrow').click(function() {
		$('.step-slider-controls__li').removeClass("step-slider-controls__li_active");
		var newImage = $('.step-slider__items .slick-active').index();
	
		$('.step-slider-controls__li').eq(newImage).addClass("step-slider-controls__li_active");
	  });
	  
};

if($('.feedback-slider__items').length>0){
	$('.feedback-slider__items').slick({
	// autoplay: true,
	// infinite: false,
	dots: false,
	arrows: true,
	fade: true,
	cssEase: 'linear',
	accessibility:false,
	slidesToShow:1,
	speed: 1000,
	autoplaySpeed: 3000,
	adaptiveHeight: true,
	appendArrows:$('.feedback-slider__btns'),
	nextArrow:'<button type="button" class="step-slider__next"></button>',
	prevArrow:'<button type="button" class="step-slider__prev"></button>',

	});
	const feedbackNumbersFirst = document.querySelector('.feedback-slider__numbers-first');
	const feedbackNumbersTwo = document.querySelector('.feedback-slider__numbers-two');
	feedbackNumbersTwo.textContent = $('.feedback-slider__item').length;

	$('.feedback-slider__btns .slick-arrow').click(function() {
		var newItem = $('.feedback-slider__items .slick-active').index();
		console.log('newItem: ', newItem);
		feedbackNumbersFirst.textContent = ++newItem;
	  }); 
};


if($('.design__items').length>0){
	$('.design__items').slick({
	// autoplay: true,
	// infinite: false,
	dots: false,
	arrows: true,
	fade: true,
	cssEase: 'linear',
	accessibility:false,
	slidesToShow:1,
	speed: 1000,
	autoplaySpeed: 3000,
	adaptiveHeight: true,
	appendArrows:$('.design__btns'),
	nextArrow:'<button type="button" class="step-slider__next"></button>',
	prevArrow:'<button type="button" class="step-slider__prev"></button>',

	});
	const DesignNumbersFirst = document.querySelector('.design__numbers-first');
	const DesignNumbersTwo = document.querySelector('.design__numbers-two');
	const designNumber = document.querySelectorAll('.design__number');
	const designNumberSpan = document.querySelectorAll('.design__number_span');
	const DesignNumbersTwoSpan = document.querySelector('.design__numbers-two span');
	if($('.design__item').length >= 10){
		DesignNumbersTwo.textContent = $('.design__item').length;
	} else {
		DesignNumbersTwoSpan.textContent = $('.design__item').length;
	}

	$('.design__btns .slick-arrow').click(function() {
		var newItem = $('.design__items .slick-active').index();
		var ChangeItem = $('.design__items .slick-active').index();
		DesignNumbersFirst.textContent = ++ChangeItem;
        designNumberSpan.forEach((item, i)=>{
			if(i == newItem && i < 10){
				item.textContent = ChangeItem;
			}
			if(i == newItem && i >= 10){
				designNumber.forEach((itemNumber, index)=>{
					if(index == newItem){
						itemNumber.textContent = ChangeItem;
					}
				})
			}
	})

}); 
};



//wow on
// wow = new WOW({
// 	mobile: false,
// 	offset: 80
  
//   })
// wow.init();

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


;
// Dynamic Adapt v.1
// HTML data-move="where(uniq class name),position(digi),when(breakpoint)"
// e.x. data-move="item,2,992"
// Andrikanych Yevhen 2020

var move_array = [];
var move_objects = document.querySelectorAll("[data-move]");

if (move_objects.length > 0) {
	for (var _index10 = 0; _index10 < move_objects.length; _index10++) {
		var _el6 = move_objects[_index10];

		var data_move = _el6.getAttribute("data-move");

		if (data_move != "" || data_move != null) {
			_el6.setAttribute("data-move-index", _index10);

			move_array[_index10] = {
				parent: _el6.parentNode,
				index: index_in_parent(_el6)
			};
		}
	}
}

function dynamic_adapt() {
	var w = document.querySelector("body").offsetWidth;

	if (move_objects.length > 0) {
		for (var _index11 = 0; _index11 < move_objects.length; _index11++) {
			var _el7 = move_objects[_index11];

			var _data_move = _el7.getAttribute("data-move");

			if (_data_move != "" || _data_move != null) {
				var data_array = _data_move.split(",");

				var data_parent = document.querySelector("." + data_array[0]);
				var data_index = data_array[1];
				var data_bp = data_array[2];

				if (w < data_bp) {
					if (!_el7.classList.contains("js-move_done_" + data_bp)) {
						if (data_index > 0) {
							//insertAfter
							var actual_index = index_of_elements(data_parent)[data_index];
							data_parent.insertBefore(_el7, data_parent.childNodes[actual_index]);
						} else {
							data_parent.insertBefore(_el7, data_parent.firstChild);
						}

						_el7.classList.add("js-move_done_" + data_bp);
					}
				} else {
					if (_el7.classList.contains("js-move_done_" + data_bp)) {
						dynamic_adaptive_back(_el7);

						_el7.classList.remove("js-move_done_" + data_bp);
					}
				}
			}
		}
	}

	custom_adapt(w);
}

function dynamic_adaptive_back(el) {
	var index_original = el.getAttribute("data-move-index");
	var move_place = move_array[index_original];
	var parent_place = move_place["parent"];
	var index_place = move_place["index"];

	if (index_place > 0) {
		//insertAfter
		var actual_index = index_of_elements(parent_place)[index_place];
		parent_place.insertBefore(el, parent_place.childNodes[actual_index]);
	} else {
		parent_place.insertBefore(el, parent_place.firstChild);
	}
}

function index_in_parent(node) {
	var children = node.parentNode.childNodes;
	var num = 0;

	for (var _i2 = 0; _i2 < children.length; _i2++) {
		if (children[_i2] == node) return num;
		if (children[_i2].nodeType == 1) num++;
	}

	return -1;
}

function index_of_elements(parent) {
	var children = [];

	for (var _i3 = 0; _i3 < parent.childNodes.length; _i3++) {
		if (parent.childNodes[_i3].nodeType == 1 && parent.childNodes[_i3].getAttribute("data-move") == null) {
			children.push(_i3);
		}
	}

	return children;
}

window.addEventListener("resize", function (event) {
	dynamic_adapt();
});
dynamic_adapt();

function custom_adapt(w) { };
var ua = navigator.userAgent,
	evens = (ua.match(/iPad/i)) ? "touchstart" : "click";

var number = 0;
var maxNumber = $(".quiz__page").length - 1;
var $element = $(".quiz__page").find("input, select, textarea");
var btnNext = $('.quiz__next');
var testTextNum = maxNumber;
var testText = $('.quiz__gift-count');
var $elementRadio = $(".quiz__page").not('.final, .no-focus').find("input[type='radio'], input[type='checkbox'] ");
var isValid;
var dataBlock;
var activeSlede = [];

var btnPrev = $('.quiz__prev');








for (var i = 0; i < maxNumber; i++) {
	activeSlede[i] = false;
}

$element.on('change input', function (e) {
	var value = $(this).val().trim();
	isValid = value !== "";
	btnActive(!isValid);
});

function btnActive(isValid) {
	if (number === 0) {
		// btnPrev.prop('disabled', 'false');
	} else {
		// btnPrev.prop('disabled', false);
		if (activeSlede[number] === true || isValid === false) {
			btnNext.prop('disabled', false);
		} else {
			btnNext.prop('disabled', true);
		}

	}

}

// sidebar
var $barLevel = Math.floor(100 / (maxNumber));
var $barWidth = $barLevel;

function progress(num) {
	var testBlock = ".quiz__block-" + num;
	var testCircle = ".quiz__circle-" + (num + 1);
	$(testBlock).addClass('quiz__block_active');
	$(testCircle).addClass('quiz__circle_active');
	$(".quiz__progress-bar").text($barWidth + '%');
}
progress(0);

function progress_prev(num) {
	var testBlock_prev = ".quiz__block-" + num;
	var testCircle_prev = ".quiz__circle-" + (num + 1);
	jQuery(testBlock_prev).removeClass('quiz__block_active');
	jQuery(testCircle_prev).removeClass('quiz__circle_active');
	jQuery(".quiz__progress-bar").text($barWidth + '%');
}


var otv = [];
// btn

function btnClick() {

	btnNext.bind(evens, next);
	btnPrev.bind(evens, prev);
	$elementRadio.on('input, change', next);
	// $('.quiz__input_txt').on('input, change',next);
}
btnClick();
function next() {
	event.preventDefault();
	
	activeSlede[number] = true;
	++number;

	setTimeout(function () {
		$(".quiz__page").hide();
		$(".quiz__page").eq(number).fadeIn(1000);
	}, 300);


	btnActive(!isValid);
	if (activeSlede[number] === true) {
		btnNext.prop('disabled', false);
	} else {
		btnNext.prop('disabled', true);
	}

	$barWidth += $barLevel;
	console.log('maxNumber: ', maxNumber);
	console.log('number: ', number);
	if (number < maxNumber - 1) {
		$(".right__text-cont-item").hide();
		$(".right__text-cont-item").eq(number).fadeIn(1000);
	} else if (number > maxNumber - 1) {
		$barWidth = 100;
	}

	if (number === maxNumber) {
		$('.quiz__gift-count, .quiz__gift-title').hide();
		$('.quiz__gift-title-final, .quiz__gift-count-final').fadeIn();
		$('.quiz__for_mocup').addClass('active');
		$('.quiz__visual').hide(1000);
		

		for (var i = 0; i < maxNumber; i++) {
			var val = '';
			$(".quiz__page").eq(i).find('input').each(function (index, el) {
				if ($(this).prop('checked')) {
					val = val + $(this).val() + ' ,';
				}
			});
			otv[i] = val;
		}

		for (var i = 0; i < maxNumber; i++) {
			var str = otv[i].substring(0, otv[i].length - 1);
			$('.text-final-ul').append('<p class="text-small text-final-li">'
				+ str + '</p>');
		}
	}
	if (testTextNum != 1) {
		testTextNum -= 1;
		console.log('testTextNum: ', testTextNum);
		if (testTextNum < 5 && testTextNum > 1) {
			testText.text(testTextNum + ' вопросa');
		} else if (testTextNum < 2) {
			testText.text(testTextNum + ' вопрос');
		} else {
			testText.text(testTextNum + ' вопросов');
		}
	}
	setTimeout(function () {
		progress(number);
	}, 300);
	// }
}

function prev() {
	event.preventDefault();
	
	--number;
	activeSlede[number] = true;

	setTimeout(function () {
		$(".quiz__page").hide();
		$(".quiz__page").eq(number).fadeIn(1000);
	}, 300);


	btnActive(!isValid);
	if(true){
		btnNext.prop('disabled', false);
	}


	$barWidth -= $barLevel;
	if (number < maxNumber - 1) {
		$(".right__text-cont-item").hide();
		$(".right__text-cont-item").eq(number).fadeIn(1000);
	} else if (number > maxNumber - 1) {
		$barWidth = 100;
	}

	if (number === 6) {
		$('.test__righ-t1').hide();
		$('.test__righ-t2').fadeIn();
	}
	if (number === 7) {
		$('.test__righ-t2').hide();
		$('.test__righ-t3').fadeIn();
		$('.present-img-item').attr({
			"src": $('.gift-box-item_new img').attr('src'),
		});

		for (var i = 0; i < maxNumber; i++) {
			var val = '';
			$(".quiz__page").eq(i).find('input').each(function (index, el) {
				if ($(this).prop('checked')) {
					val = val + $(this).val() + ' ,';
				}
			});
			otv[i] = val;
		}

		for (var i = 0; i < maxNumber; i++) {
			var str = otv[i].substring(0, otv[i].length - 1);
			$('.text-final-ul').append('<p class="text-small text-final-li">'
				+ str + '</p>');
		}
		$('.test__btn-block').hide();
		// console.log(otv);
	}
	// if(number === maxNumber - 1){
	//      $(".test__btn-block").hide();
	//      setTimeout(function(){
	//        $(".quiz__page").hide();
	//        $(".quiz__page").eq(number + 1).fadeIn(1000);
	//        $(".test-item__number-furst").text(number + 1);
	//        $barWidth += $barLevel;
	//        progress(number);

	//        animateTop ();
	//      },2700);
	// }else{
	if (testTextNum != 0) {
		testTextNum += 1;
		if (testTextNum < 5 && testTextNum > 1) {
			testText.text(testTextNum + ' вопросa');
		} else if (testTextNum < 2) {
			testText.text(testTextNum + ' вопрос');
		} else {
			testText.text(testTextNum + ' вопросов');
		}
	}
	setTimeout(function () {
		$(".test-item__number-furst").text(number + 1);
		// $barWidth += $barLevel;
		progress_prev(number + 1);

		//   animateTop ();
	}, 300);
	// }
}
var inpTrue = false;
$('.gift').find('input').on('change input', function () {

	// $('.test__righ-t1').hide();
	// $('.test__righ-t2').fadeIn();
	$('.gift-box-item img').attr({
		"src": $(this).parents('.item-wq-6').find('.iw6i').attr('src'),
	});
	$('.text-prs').text($(this).parents('.item-wq-6').find('.text-small-test').text().trim());
	$('.title-presents-6').text($(this).val());
	$('.present-img').css({ display: 'none' });
	$('.gift-title').css({
		marginTop: '-2vw'
	})
	$('.gift-box').css({
		marginTop: '18vw'
	})

});

// $('.qw3-no-inp').on('change input', function() {
//   $('.test-qw3-inpt').hide();
//   $('.test-qw3-inpt').find('input').val('');
//   inpTrue = false;
// });


function animateTop() {
	var elem = $('.form-test');
	var top = elem.offset().top - 15;
	$('body,html').animate({ scrollTop: top }, 400);
}


$('.popup__form, .finished_project_section--form').submit(function () {
	$.ajax({
		type: "POST",
		url: "http://minigun-agency.by/wp-content/themes/minigun/assets/mail.php",
		data: $(this).serialize(),
	}).done(function () {
		$('.js-overlay-thanks').fadeIn();
		$('.popup__overlay-form').fadeOut();
		$('.popup__form, .finished_project_section--form').trigger('reset');
		gtag('event', 'submit', { 'event_category': 'form', 'event_label': 'popup__form' });
		ym(62814052, 'reachGoal', 'popup__form'); return true;
		// $('.quiz__page-final').hide();
		// $('.quiz__page-first, .quiz__prev-first, .quiz__next-first').fadeIn();
	});
	return false;
});

$('.quiz__form').submit(function () {
	$.ajax({
		type: "POST",
		url: "http://minigun-agency.by/wp-content/themes/minigun/assets/mail.php",
		data: $(this).serialize()
	}).done(function () {
		$('.quiz__thanks').fadeIn();
		$('.quiz__page-final, .quiz__proc, .quiz__visual').fadeOut();
		$('.quiz__for_mocup').removeClass('active');
		gtag('event', 'submit', { 'event_category': 'quiz', 'event_label': 'quiz__form' });
		ym(62814052, 'reachGoal', 'quiz__form'); return true;
		// $('.quiz__form').trigger('reset');
		// $('.quiz__page-final').hide();
		// $('.quiz__page-first, .quiz__prev-first, .quiz__next-first').fadeIn();
	});
	return false;
});
;

// var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

const popupFormname = document.querySelectorAll('.popup__form-name');
const popupThanksTitle = document.querySelectorAll('.popup-thanks__title');



//FORMS
function forms(){
	//OPTION
	$.each($('.option_one.active'), function(index, val) {
		$(this).find('input').prop('checked', true);
	});
	$('.option_one').click(function(event) {
		if(!$(this).hasClass('disable')){
				var target = $(event.target);
			if (!target.is("a")){
				if($(this).hasClass('active') && $(this).hasClass('order') ){
					$(this).toggleClass('orderactive');
				}
    				$(this).parents('.options').find('.option_one').removeClass('active');
					$(this).toggleClass('active');

			}
		}
    });

    $.each($('.option_all'), function(index, val) {
        if($(this).find('input').prop('checked')==true){
            $(this).addClass('active');
        }
    });
    $('body').off('click','.option_all',function(event){});
    $('body').on('click','.option_all',function(event){
        if(!$(this).hasClass('disable')){
                var target = $(event.target);
            if (!target.is("a")){
                    $(this).toggleClass('active');
                if($(this).hasClass('active')){
                    $(this).find('input').prop('checked', true);
                }else{
                    $(this).find('input').prop('checked', false);
                }
            }
        }
    });
}
forms();


//VALIDATE FORMS
$('form button[type=submit]').click(function(){
	var er=0;
	var form=$(this).parents('form');
	var ms=form.data('ms');
	var nums=form.data('nums');
$.each(form.find('.req'), function(index, val) {
	er+=formValidate($(this));
});
if(er==0){
	removeFormError(form);
	if(ms!=null && ms!=''){
		showMessageByClass(ms, nums);
		return false;
	}
}else{
	return false;
}
});
function formValidate(input){
	var er=0;
	var form=input.parents('form');
	if(input.val()=='' || input.val()==input.attr('data-value')){
		er++;
		addError(input);
	}else{
		removeError(input);
	}
	return er;
}

function showMessageByClass(ms, nums){

    function popupThanks(ms) {

        const popupMassive = [...popupFormname];
        const resultInput = popupMassive.filter(item=> {
            return item.value !== '';
        });
        popupFormname.forEach(item=>{
            const name = `Спасибо!`;
            popupThanksTitle.forEach(item=>{
                item.textContent = name;
            })
        })
        resultInput.forEach(item=>{
            const name = `Спасибо, ${item.value}!`;
            popupThanksTitle.forEach(item=>{
                item.textContent = name;
            })
        })
        popupFormname.forEach(item=>{
            item.value = '';
        })
        const msPopup = document.getElementById(ms);
        popupOpen(msPopup);
        
    };
    if(nums == '4'){
        let th = $(".popup__fors");
        $.ajax({
            type: "POST",
			url: "https://zox.by/wp-content/themes/zox/mail.php",
            data: th.serialize()
        }).done(popupThanks(ms),
        setTimeout(function() {
            th.trigger("reset");
        }, 1000)
        );
    };
    if(nums == '3'){
        let th = $(".popup__forsm");
		$.ajax({
			type: "POST",
			url: "https://zox.by/wp-content/themes/zox/mail.php",
			data: th.serialize()
        }).done(popupThanks(ms),
        setTimeout(function() {
            th.trigger("reset");
        }, 1000)
        );
	};
	if(ms == 'video'){
		popupThanks(ms);
	};
	if(nums == '1'){
        let th = $(".popup__for_mail_1");
		$.ajax({
			type: "POST",
			url: "https://zox.by/wp-content/themes/zox/mail.php",
			data: th.serialize()
        }).done(popupThanks(ms),
        setTimeout(function() {
            th.trigger("reset");
        }, 1000)
        );
	};
	if(nums == '2'){
        let th = $(".popup__for_mail_2");
		$.ajax({
			type: "POST",
			url: "https://zox.by/wp-content/themes/zox/mail.php",
			data: th.serialize()
        }).done(popupThanks(ms),
        setTimeout(function() {
            th.trigger("reset");
        }, 1000)
        );
	};
		

}


function addError(input){
	input.addClass('err');
}
function removeFormError(form){
form.find('.form__generalerror').hide().html('');
}
function removeError(input){
input.removeClass('err');
}

function maskclear(n){
if(n.val()==""){
	n.inputmask('remove');
	if(!n.hasClass('l')){
		n.val(n.attr('data-value'));
	}
	n.removeClass('focus');
	n.parent().removeClass('focus');
}
}

	//RANGE
	const range = document.querySelectorAll('.range');
	const range2 = document.querySelectorAll('.range_2');
	const range3 = document.querySelectorAll('.range_3');
	
	range.forEach(item=>{
		const rangeto = item.querySelector('.rangeto');
		const rangeControl = item.querySelector('.range_control');
		if($(rangeControl).length>0){
			$(rangeControl).slider({
				range: "min",
				min: 0,
				max: 3000,
				value: 500,
				slide: function( event, ui ){
					$(rangeto).val(ui.value);
				}
			});
			$(rangeto).val($(rangeControl).slider( "value"));
	
		}
	});
	range2.forEach(item=>{
		const rangeto = item.querySelector('.rangeto');
		const rangeControl = item.querySelector('.range_control');
		if($(rangeControl).length>0){
			$(rangeControl).slider({
				range: "min",
				min: 0,
				max: 300,
				value: 43,
				slide: function( event, ui ){
					$(rangeto).val(ui.value);
				}
			});
			$(rangeto).val($(rangeControl).slider( "value"));
	
		}
	});
	range3.forEach(item=>{
		const rangeto = item.querySelector('.rangeto');
		const rangeControl = item.querySelector('.range_control');
		if($(rangeControl).length>0){
			$(rangeControl).slider({
				range: "min",
				min: 0,
				max: 25,
				value: 4,
				slide: function( event, ui ){
					$(rangeto).val(ui.value);
				}
			});
			$(rangeto).val($(rangeControl).slider( "value"));
	
		}
	});





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