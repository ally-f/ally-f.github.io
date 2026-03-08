import {
  __commonJS,
  __toESM,
  require_react
} from "./chunk-G4V7ITBN.js";

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    (function() {
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
          case REACT_ACTIVITY_TYPE:
            return "Activity";
        }
        if ("object" === typeof type)
          switch ("number" === typeof type.tag && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), type.$$typeof) {
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_CONTEXT_TYPE:
              return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
              return type;
            case REACT_MEMO_TYPE:
              return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x2) {
              }
          }
        return null;
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = false;
        } catch (e2) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0
          );
          return testStringCoercion(value);
        }
      }
      function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
          return "<...>";
        try {
          var name = getComponentNameFromType(type);
          return name ? "<" + name + ">" : "<...>";
        } catch (x2) {
          return "<...>";
        }
      }
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      function UnknownOwner() {
        return Error("react-stack-top-frame");
      }
      function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config, "key").get;
          if (getter && getter.isReactWarning) return false;
        }
        return void 0 !== config.key;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
        }
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          props,
          _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
          enumerable: false,
          get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null
        });
        Object.defineProperty(type, "_debugStack", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children)
          if (isStaticChildren)
            if (isArrayImpl(children)) {
              for (isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)
                validateChildKeys(children[isStaticChildren]);
              Object.freeze && Object.freeze(children);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
          children = getComponentNameFromType(type);
          var keys = Object.keys(config).filter(function(k2) {
            return "key" !== k2;
          });
          isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
          didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error(
            'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
            isStaticChildren,
            children,
            keys,
            children
          ), didWarnAboutKeySpread[children + isStaticChildren] = true);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
          maybeKey = {};
          for (var propName in config)
            "key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(
          maybeKey,
          "function" === typeof type ? type.displayName || type.name || "Unknown" : type
        );
        return ReactElement(
          type,
          children,
          maybeKey,
          getOwner(),
          debugStack,
          debugTask
        );
      }
      function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
      }
      function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      var React = require_react(), REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo"), REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = /* @__PURE__ */ Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = /* @__PURE__ */ Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
      };
      React = {
        react_stack_bottom_frame: function(callStackForError) {
          return callStackForError();
        }
      };
      var specialPropKeyWarningShown;
      var didWarnAboutElementRef = {};
      var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(
        React,
        UnknownOwner
      )();
      var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
      var didWarnAboutKeySpread = {};
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.jsx = function(type, config, maybeKey) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(
          type,
          config,
          maybeKey,
          false,
          trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
          trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
      exports.jsxs = function(type, config, maybeKey) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(
          type,
          config,
          maybeKey,
          true,
          trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
          trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
    })();
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/react-image-gallery/build/image-gallery.es.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react = __toESM(require_react());
var m = {};
function h(e2) {
  var t2, n2, r2 = "";
  if ("string" == typeof e2 || "number" == typeof e2) r2 += e2;
  else if ("object" == typeof e2) if (Array.isArray(e2)) {
    var l2 = e2.length;
    for (t2 = 0; t2 < l2; t2++) e2[t2] && (n2 = h(e2[t2])) && (r2 && (r2 += " "), r2 += n2);
  } else for (n2 in e2) e2[n2] && (r2 && (r2 += " "), r2 += n2);
  return r2;
}
m.d = (e2, t2) => {
  for (var n2 in t2) m.o(t2, n2) && !m.o(e2, n2) && Object.defineProperty(e2, n2, { enumerable: true, get: t2[n2] });
}, m.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2);
var g = function() {
  for (var e2, t2, n2 = 0, r2 = "", l2 = arguments.length; n2 < l2; n2++) (e2 = arguments[n2]) && (t2 = h(e2)) && (r2 && (r2 += " "), r2 += t2);
  return r2;
};
var f = (0, import_react.memo)((function({ index: e2, isActive: n2 = false, bulletClass: r2 = "", onClick: l2 }) {
  const i2 = g("image-gallery-bullet", r2, { active: n2 });
  return (0, import_jsx_runtime.jsx)("button", { "aria-label": `Go to Slide ${e2 + 1}`, "aria-pressed": n2 ? "true" : "false", className: i2, type: "button", onClick: l2 }, `bullet-${e2}`);
}));
var b = (0, import_react.memo)((function({ bullets: e2 = [], slideVertically: n2 = false, currentIndex: r2 = 0, maxBullets: l2 }) {
  const i2 = (0, import_react.useRef)(null), [a2, o2] = (0, import_react.useState)(0), m2 = void 0 !== l2 && l2 < 3 ? 3 : l2, h2 = g("image-gallery-bullets", { "image-gallery-bullets-vertical": n2 });
  (0, import_react.useEffect)((() => {
    const t2 = () => {
      if (i2.current && m2 && e2.length > 0) {
        const e3 = i2.current.querySelector(".image-gallery-bullet");
        if (e3) {
          const t3 = window.getComputedStyle(e3), r4 = e3.offsetWidth, l3 = parseFloat(t3.marginLeft) || 0, i3 = parseFloat(t3.marginRight) || 0, a3 = e3.offsetHeight, s2 = parseFloat(t3.marginTop) || 0, u2 = parseFloat(t3.marginBottom) || 0;
          o2(n2 ? a3 + s2 + u2 : r4 + l3 + i3);
        }
      }
    };
    t2();
    const r3 = new ResizeObserver((() => {
      t2();
    }));
    return i2.current && r3.observe(i2.current), () => {
      r3.disconnect();
    };
  }), [e2.length, m2, n2]);
  const f2 = (0, import_react.useMemo)((() => {
    if (!m2 || m2 >= e2.length || 0 === a2) return {};
    const t2 = e2.length, l3 = Math.floor(m2 / 2);
    let i3;
    return i3 = r2 <= l3 ? 0 : r2 >= t2 - l3 - 1 ? -(t2 - m2) * a2 : -(r2 - l3) * a2, { transform: n2 ? `translateY(${i3}px)` : `translateX(${i3}px)`, transition: "transform 0.3s ease-out" };
  }), [e2.length, r2, m2, a2, n2]), b2 = (0, import_react.useMemo)((() => {
    if (!m2 || m2 >= e2.length || 0 === a2) return {};
    const t2 = m2 * a2;
    return n2 ? { height: `${t2}px`, overflow: "hidden" } : { width: `${t2}px`, overflow: "hidden" };
  }), [m2, e2.length, a2, n2]);
  return e2 && 0 !== e2.length ? (0, import_jsx_runtime.jsx)("div", { className: h2, children: (0, import_jsx_runtime.jsx)("div", { "aria-label": "Bullet Navigation", className: "image-gallery-bullets-container", role: "navigation", style: b2, children: (0, import_jsx_runtime.jsx)("div", { ref: i2, className: "image-gallery-bullets-inner", style: f2, children: e2 }) }) }) : null;
}));
var p = 550;
var y = 3e3;
var v = 0.4;
var w = 30;
var S = "cubic-bezier(0.4, 0, 0.2, 1)";
var T = { left: (0, import_jsx_runtime.jsx)("polyline", { points: "15 18 9 12 15 6" }), right: (0, import_jsx_runtime.jsx)("polyline", { points: "9 18 15 12 9 6" }), top: (0, import_jsx_runtime.jsx)("polyline", { points: "6 15 12 9 18 15" }), bottom: (0, import_jsx_runtime.jsx)("polyline", { points: "6 9 12 15 18 9" }), maximize: (0, import_jsx_runtime.jsx)("path", { d: "M8 3H3v5m18 0V3h-5m0 18h5v-5M3 16v5h5" }), minimize: (0, import_jsx_runtime.jsx)("path", { d: "M8 3v5H3m18 0h-5V3m0 18v-5h5M3 16h5v5" }), play: (0, import_jsx_runtime.jsx)("polygon", { points: "5 3 19 12 5 21 5 3" }), pause: (0, import_jsx_runtime.jsxs)(import_react.default.Fragment, { children: [(0, import_jsx_runtime.jsx)("rect", { height: "16", width: "4", x: "6", y: "4" }), (0, import_jsx_runtime.jsx)("rect", { height: "16", width: "4", x: "14", y: "4" })] }) };
var x = { strokeWidth: 1, viewBox: "0 0 24 24" };
var C = (e2) => {
  const { strokeWidth: n2, viewBox: r2, icon: l2 } = { ...x, ...e2 };
  return (0, import_jsx_runtime.jsx)("svg", { className: "image-gallery-svg", fill: "none", stroke: "currentColor", strokeLinecap: "square", strokeLinejoin: "miter", strokeWidth: n2, viewBox: r2, xmlns: "http://www.w3.org/2000/svg", children: T[l2] });
};
var I = import_react.default.memo((({ disabled: e2, onClick: n2 }) => (0, import_jsx_runtime.jsx)("button", { "aria-label": "Next Slide", className: "image-gallery-icon image-gallery-bottom-nav", disabled: e2, type: "button", onClick: n2, children: (0, import_jsx_runtime.jsx)(C, { icon: "bottom", viewBox: "6 0 12 24" }) })));
I.displayName = "BottomNav";
var R = I;
var F = import_react.default.memo((({ isFullscreen: e2, onClick: n2 }) => (0, import_jsx_runtime.jsx)("button", { "aria-label": "Open Fullscreen", className: "image-gallery-icon image-gallery-fullscreen-button", type: "button", onClick: n2, children: (0, import_jsx_runtime.jsx)(C, { icon: e2 ? "minimize" : "maximize", strokeWidth: 2 }) })));
F.displayName = "Fullscreen";
var N = F;
var L = import_react.default.memo((({ disabled: e2, onClick: n2 }) => (0, import_jsx_runtime.jsx)("button", { "aria-label": "Previous Slide", className: "image-gallery-icon image-gallery-left-nav", disabled: e2, type: "button", onClick: n2, children: (0, import_jsx_runtime.jsx)(C, { icon: "left", viewBox: "6 0 12 24" }) })));
L.displayName = "LeftNav";
var k = L;
var M = import_react.default.memo((({ isPlaying: e2, onClick: n2 }) => (0, import_jsx_runtime.jsx)("button", { "aria-label": "Play or Pause Slideshow", className: "image-gallery-icon image-gallery-play-button", type: "button", onClick: n2, children: (0, import_jsx_runtime.jsx)(C, { icon: e2 ? "pause" : "play", strokeWidth: 2 }) })));
M.displayName = "PlayPause";
var $ = M;
var E = import_react.default.memo((({ disabled: e2, onClick: n2 }) => (0, import_jsx_runtime.jsx)("button", { "aria-label": "Next Slide", className: "image-gallery-icon image-gallery-right-nav", disabled: e2, type: "button", onClick: n2, children: (0, import_jsx_runtime.jsx)(C, { icon: "right", viewBox: "6 0 12 24" }) })));
E.displayName = "RightNav";
var W = E;
var P = import_react.default.memo((({ disabled: e2, onClick: n2 }) => (0, import_jsx_runtime.jsx)("button", { "aria-label": "Previous Slide", className: "image-gallery-icon image-gallery-top-nav", disabled: e2, type: "button", onClick: n2, children: (0, import_jsx_runtime.jsx)(C, { icon: "top", viewBox: "6 0 12 24" }) })));
P.displayName = "TopNav";
var D = P;
function B(e2, t2, n2 = {}) {
  const { leading: r2 = true, trailing: l2 = true } = n2;
  let i2 = 0, a2 = null, s2 = null, o2 = null;
  function u2() {
    null !== s2 && (e2.apply(o2, s2), i2 = Date.now(), s2 = null, o2 = null);
  }
  return function(...e3) {
    const n3 = Date.now(), c2 = n3 - i2;
    s2 = e3, o2 = this, c2 >= t2 ? (a2 && (clearTimeout(a2), a2 = null), r2 ? u2() : i2 = n3) : l2 && !a2 && (a2 = setTimeout((() => {
      a2 = null, s2 && u2();
    }), t2 - c2));
  };
}
function z(e2, t2) {
  let n2;
  return function(...r2) {
    clearTimeout(n2), n2 = setTimeout((() => {
      e2.apply(this, r2);
    }), t2);
  };
}
var H = (0, import_react.memo)((function({ currentIndex: e2, totalItems: r2, indexSeparator: l2 = " / " }) {
  return (0, import_jsx_runtime.jsxs)("div", { className: "image-gallery-index", children: [(0, import_jsx_runtime.jsx)("span", { className: "image-gallery-index-current", children: e2 + 1 }), (0, import_jsx_runtime.jsx)("span", { className: "image-gallery-index-separator", children: l2 }), (0, import_jsx_runtime.jsx)("span", { className: "image-gallery-index-total", children: r2 })] });
}));
var O = { description: "", fullscreen: "", isFullscreen: false, originalAlt: "", originalHeight: "", originalWidth: "", originalTitle: "", sizes: "", srcSet: "", loading: "eager" };
var A = import_react.default.memo(((e2) => {
  const { description: l2, fullscreen: i2, handleImageLoaded: a2, isFullscreen: s2, onImageError: o2, original: u2, originalAlt: c2, originalHeight: d2, originalWidth: m2, originalTitle: h2, sizes: g2, srcSet: f2, loading: b2 } = { ...O, ...e2 }, p2 = s2 && i2 || u2;
  return (0, import_jsx_runtime.jsxs)(import_react.default.Fragment, { children: [(0, import_jsx_runtime.jsx)("img", { alt: c2, className: "image-gallery-image", height: d2, loading: b2, sizes: g2, src: p2, srcSet: f2, title: h2, width: m2, onError: o2, onLoad: (e3) => a2(e3, u2) }), l2 && (0, import_jsx_runtime.jsx)("span", { className: "image-gallery-description", children: l2 })] });
}));
A.displayName = "Item";
var q = A;
var U = (0, import_react.memo)((function({ index: e2, alignment: n2 = "", originalClass: r2 = "", style: l2 = {}, onClick: i2, onKeyUp: a2, onTouchMove: s2, onTouchEnd: o2, onTouchStart: u2, onMouseOver: c2, onMouseLeave: d2, children: m2 = null }) {
  return (0, import_jsx_runtime.jsx)("div", { "aria-label": `Go to Slide ${e2 + 1}`, className: `image-gallery-slide ${n2} ${r2}`, role: "button", style: l2, tabIndex: -1, onClick: i2, onFocus: c2, onKeyUp: a2, onMouseLeave: d2, onMouseOver: c2, onTouchEnd: o2, onTouchMove: s2, onTouchStart: u2, children: m2 }, `slide-${e2}`);
}));
function X(e2, t2) {
  return Math.abs(e2) >= Math.abs(t2) ? e2 > 0 ? "Right" : "Left" : t2 > 0 ? "Down" : "Up";
}
function Y(e2) {
  if (e2.length < 2) return 0;
  const t2 = e2[0], n2 = e2[e2.length - 1], r2 = n2.time - t2.time;
  if (0 === r2) return 0;
  const l2 = n2.x - t2.x, i2 = n2.y - t2.y;
  return Math.sqrt(l2 * l2 + i2 * i2) / r2;
}
var K = { className: "", delta: 0, onSwiping: () => {
}, onSwiped: () => {
} };
var V = (e2) => {
  const { children: n2, className: r2, delta: l2, onSwiping: i2, onSwiped: s2 } = { ...K, ...e2 }, { ref: o2 } = (function({ delta: e3 = 0, onSwiping: t2, onSwiped: n3 }) {
    const r3 = (0, import_react.useRef)({ swiping: false, startX: 0, startY: 0, samples: [] }), l3 = (0, import_react.useRef)({ delta: e3, onSwiping: t2, onSwiped: n3 });
    l3.current = { delta: e3, onSwiping: t2, onSwiped: n3 };
    const i3 = (0, import_react.useRef)(null);
    if (!i3.current) {
      const e4 = (e5) => {
        const t4 = e5.touches[0], n5 = r3.current;
        n5.startX = t4.clientX, n5.startY = t4.clientY, n5.swiping = false, n5.samples = [{ x: t4.clientX, y: t4.clientY, time: Date.now() }];
      }, t3 = (e5) => {
        const t4 = e5.touches[0], n5 = r3.current, { delta: i4, onSwiping: a2 } = l3.current, s4 = t4.clientX - n5.startX, o3 = t4.clientY - n5.startY, u2 = Math.abs(s4), c2 = Math.abs(o3), d2 = Date.now();
        n5.samples.push({ x: t4.clientX, y: t4.clientY, time: d2 });
        const m2 = d2 - 100;
        for (; n5.samples.length > 1 && n5.samples[0].time < m2; ) n5.samples.shift();
        if (!n5.swiping) {
          if (Math.max(u2, c2) < i4) return;
          n5.swiping = true;
        }
        a2 && a2({ event: e5, absX: u2, absY: c2, dir: X(s4, o3), velocity: Y(n5.samples) });
      }, n4 = (e5) => {
        const t4 = r3.current, { onSwiped: n5 } = l3.current;
        if (t4.swiping) {
          if (t4.swiping = false, n5) {
            const r4 = (e5.changedTouches[0]?.clientX ?? 0) - t4.startX, l4 = (e5.changedTouches[0]?.clientY ?? 0) - t4.startY;
            n5({ event: e5, absX: Math.abs(r4), absY: Math.abs(l4), dir: X(r4, l4), velocity: Y(t4.samples) });
          }
          t4.samples = [];
        }
      };
      i3.current = { touchstart: e4, touchmove: t3, touchend: n4 };
    }
    const s3 = (0, import_react.useRef)(null);
    return { ref: (0, import_react.useCallback)(((e4) => {
      const t3 = i3.current;
      s3.current && (s3.current.removeEventListener("touchstart", t3.touchstart), s3.current.removeEventListener("touchmove", t3.touchmove), s3.current.removeEventListener("touchend", t3.touchend)), s3.current = e4, e4 && (e4.addEventListener("touchstart", t3.touchstart, { passive: true }), e4.addEventListener("touchmove", t3.touchmove, { passive: false }), e4.addEventListener("touchend", t3.touchend, { passive: true }));
    }), []) };
  })({ delta: l2, onSwiping: i2, onSwiped: s2 });
  return (0, import_jsx_runtime.jsx)("div", { ref: o2, className: r2, children: n2 });
};
var j = (0, import_react.memo)((function({ index: e2, isActive: n2 = false, thumbnailClass: r2 = "", onMouseLeave: l2, onMouseOver: i2, onFocus: a2, onKeyUp: s2, onClick: o2, children: u2 = null }) {
  const c2 = g("image-gallery-thumbnail", r2, { active: n2 });
  return (0, import_jsx_runtime.jsx)("button", { "aria-label": `Go to Slide ${e2 + 1}`, "aria-pressed": n2 ? "true" : "false", className: c2, tabIndex: 0, type: "button", onClick: o2 ?? void 0, onFocus: a2 ?? void 0, onKeyUp: s2 ?? void 0, onMouseLeave: l2 ?? void 0, onMouseOver: i2 ?? void 0, children: u2 }, `thumbnail-${e2}`);
}));
var G = (0, import_react.memo)((function({ thumbnails: e2 = [], thumbnailPosition: n2 = "bottom", thumbnailStyle: r2 = {}, thumbnailBarHeight: l2 = {}, isRTL: i2 = false, disableThumbnailSwipe: a2 = false, onSwiping: s2, onSwiped: o2, thumbnailsWrapperRef: u2, thumbnailsRef: c2 }) {
  const d2 = "left" === n2 || "right" === n2, m2 = g("image-gallery-thumbnails-wrapper", ((e3) => {
    const t2 = { left: "image-gallery-thumbnails-left", right: "image-gallery-thumbnails-right", bottom: "image-gallery-thumbnails-bottom", top: "image-gallery-thumbnails-top" };
    return t2[e3] ? ` ${t2[e3]}` : "";
  })(n2), { "thumbnails-wrapper-rtl": !d2 && i2 }, { "thumbnails-swipe-horizontal": !d2 && !a2 }, { "thumbnails-swipe-vertical": d2 && !a2 });
  return e2 && 0 !== e2.length ? (0, import_jsx_runtime.jsx)(V, { className: m2, delta: 0, onSwiped: a2 ? void 0 : o2 ?? void 0, onSwiping: a2 ? void 0 : s2 ?? void 0, children: (0, import_jsx_runtime.jsx)("div", { ref: u2, className: "image-gallery-thumbnails", style: l2, children: (0, import_jsx_runtime.jsx)("nav", { ref: c2, "aria-label": "Thumbnail Navigation", className: "image-gallery-thumbnails-container", style: r2, children: e2 }) }) }) : null;
}));
var J = ["fullscreenchange", "MSFullscreenChange", "mozfullscreenchange", "webkitfullscreenchange"];
function Q(e2) {
  const t2 = parseInt(String(e2.keyCode || e2.which || 0), 10);
  return 13 === t2 || 32 === t2;
}
function Z(e2) {
  return { left: " image-gallery-thumbnails-left", right: " image-gallery-thumbnails-right", bottom: " image-gallery-thumbnails-bottom", top: " image-gallery-thumbnails-top" }[e2] || "";
}
var _ = (0, import_react.forwardRef)((function(r2, l2) {
  const { additionalClass: i2 = "", autoPlay: m2 = false, disableKeyDown: h2 = false, disableSwipe: T2 = false, disableThumbnailScroll: x2 = false, disableThumbnailSwipe: C2 = false, flickThreshold: I2 = v, indexSeparator: F2 = " / ", infinite: L2 = true, isRTL: M2 = false, items: E2, lazyLoad: P2 = false, onBeforeSlide: O2, onBulletClick: A2, onClick: X2, onErrorImageURL: Y2 = "", onImageError: K2, onImageLoad: _2, onMouseLeave: ee, onMouseOver: te, onPause: ne, onPlay: re, onScreenChange: le, onSlide: ie, onThumbnailClick: ae, onThumbnailError: se, onTouchEnd: oe, onTouchMove: ue, onTouchStart: ce, renderBottomNav: de = (e2, n2) => (0, import_jsx_runtime.jsx)(R, { disabled: n2, onClick: e2 }), renderCustomControls: me, renderFullscreenButton: he = (e2, n2) => (0, import_jsx_runtime.jsx)(N, { isFullscreen: n2, onClick: e2 }), renderItem: ge, renderLeftNav: fe = (e2, n2) => (0, import_jsx_runtime.jsx)(k, { disabled: n2, onClick: e2 }), renderPlayPauseButton: be = (e2, n2) => (0, import_jsx_runtime.jsx)($, { isPlaying: n2, onClick: e2 }), renderRightNav: pe = (e2, n2) => (0, import_jsx_runtime.jsx)(W, { disabled: n2, onClick: e2 }), renderThumbInner: ye, renderTopNav: ve = (e2, n2) => (0, import_jsx_runtime.jsx)(D, { disabled: n2, onClick: e2 }), showBullets: we = false, maxBullets: Se, showFullscreenButton: Te = true, showIndex: xe = false, showNav: Ce = true, showPlayButton: Ie = true, showThumbnails: Re = true, slideDuration: Fe = p, slideInterval: Ne = y, slideOnThumbnailOver: Le = false, slideVertically: ke = false, startIndex: Me = 0, stopPropagation: $e = false, swipeThreshold: Ee = w, thumbnailPosition: We = "bottom", useBrowserFullscreen: Pe = true, useTranslate3D: De = true, useWindowKeyDown: Be = true } = r2, ze = (0, import_react.useRef)(null), He = (0, import_react.useRef)(null), Oe = (0, import_react.useRef)(null), Ae = (0, import_react.useRef)({}), qe = (0, import_react.useRef)([]), Ue = (0, import_react.useRef)(null), Xe = (0, import_react.useRef)(null), [Ye, Ke] = (0, import_react.useState)(0), [Ve, je] = (0, import_react.useState)(0), [Ge, Je] = (0, import_react.useState)(0), Qe = (0, import_react.useRef)(false), Ze = (0, import_react.useRef)(false), _e = (0, import_react.useRef)(null), et = (0, import_react.useRef)(0), tt = (0, import_react.useRef)(null), nt = E2.length, rt = nt >= 2, { currentIndex: lt, displayIndex: it, isTransitioning: at, currentSlideOffset: st, canSlideLeft: ot, canSlideRight: ut, slideToIndex: ct, slideToIndexCore: dt, slideToIndexWithStyleReset: mt, slideLeft: ht, slideRight: gt, getContainerStyle: ft, getExtendedSlides: bt, getAlignmentClass: pt, setCurrentSlideOffset: yt, setSlideStyle: vt, setIsTransitioning: wt, totalDisplaySlides: St } = (function({ items: e2, startIndex: t2 = 0, infinite: n2 = true, isRTL: r3 = false, slideDuration: l3 = p, onSlide: i3, onBeforeSlide: o2 }) {
    const [u2, m3] = (0, import_react.useState)(t2), [h3, g2] = (0, import_react.useState)(t2), [f2, b2] = (0, import_react.useState)(false), [y2, v2] = (0, import_react.useState)(0), [w2, T3] = (0, import_react.useState)(n2 && e2.length > 1 ? t2 + 1 : t2), [x3, C3] = (0, import_react.useState)({ transition: `transform ${l3}ms ${S}` }), I3 = (0, import_react.useRef)(null), R2 = (0, import_react.useRef)(null), F3 = (0, import_react.useRef)(false), N2 = e2.length, L3 = N2 >= 2, k2 = n2 && N2 > 1 ? N2 + 2 : N2;
    (0, import_react.useEffect)((() => () => {
      I3.current && window.clearTimeout(I3.current), R2.current && window.clearTimeout(R2.current);
    }), []), (0, import_react.useEffect)((() => {
      m3(t2), T3(n2 && e2.length > 1 ? t2 + 1 : t2), C3({ transition: "none" });
    }), [e2, t2, n2]);
    const M3 = (0, import_react.useCallback)((() => u2 > 0), [u2]), $2 = (0, import_react.useCallback)((() => u2 < N2 - 1), [u2, N2]), E3 = (0, import_react.useCallback)((() => n2 || (r3 ? $2() : M3())), [n2, r3, $2, M3]), W2 = (0, import_react.useCallback)((() => n2 || (r3 ? M3() : $2())), [n2, r3, $2, M3]), P3 = (0, import_react.useCallback)((() => {
      I3.current = window.setTimeout((() => {
        f2 && (b2(false), i3 && i3(u2));
      }), l3 + 50);
    }), [f2, u2, l3, i3]), D2 = (0, import_react.useCallback)(((e3) => n2 && N2 > 1 ? e3 + 1 : e3), [n2, N2]), z2 = (0, import_react.useCallback)(((e3, t3) => {
      F3.current = true, C3({ transition: "none" }), T3(t3), R2.current = window.setTimeout((() => {
        C3({ transition: `transform ${l3}ms ${S}` }), F3.current = false;
      }), 50);
    }), [l3]), H2 = (0, import_react.useCallback)(((e3, t3, r4 = false, a2) => {
      if ((f2 || F3.current) && !r4) return;
      const s2 = a2 ?? l3, c2 = N2 - 1;
      let d2, h4 = e3, p2 = false, y3 = null;
      e3 < 0 ? (h4 = c2, p2 = true, y3 = "start") : e3 > c2 && (h4 = 0, p2 = true, y3 = "end"), d2 = n2 && N2 > 1 ? p2 && "start" === y3 ? 0 : p2 && "end" === y3 ? k2 - 1 : h4 + 1 : h4, o2 && h4 !== u2 && o2(h4), g2(u2), m3(h4), T3(d2), b2(h4 !== u2 || p2), v2(0), C3({ transition: `transform ${s2}ms ${S}` }), n2 && N2 > 1 && p2 && (I3.current = window.setTimeout((() => {
        b2(false), i3 && i3(h4);
        const e4 = D2(h4);
        z2(h4, e4);
      }), s2 + 20));
    }), [u2, N2, k2, l3, o2, i3, f2, n2, D2, z2]), O3 = (0, import_react.useRef)(B(((e3, t3) => {
      H2(e3, t3, false);
    }), l3, { trailing: false }));
    (0, import_react.useEffect)((() => {
      O3.current = B(((e3, t3) => {
        H2(e3, t3, false);
      }), l3, { trailing: false });
    }), [l3, H2]);
    const A3 = (0, import_react.useCallback)(((e3, t3) => {
      O3.current(e3, t3);
    }), []), q2 = (0, import_react.useCallback)(((e3, t3) => {
      v2(((t4) => t4 + (u2 > e3 ? 1e-3 : -1e-3))), C3({ transition: "none" }), window.setTimeout((() => {
        H2(e3, t3);
      }), 25);
    }), [u2, H2]), U2 = (0, import_react.useCallback)(((e3) => {
      const t3 = u2 + ("left" == (r3 ? "right" : "left") ? -1 : 1);
      f2 || F3.current || (2 === N2 ? q2(t3, e3) : A3(t3, e3));
    }), [r3, u2, f2, N2, q2, A3]), X3 = (0, import_react.useCallback)(((e3) => {
      const t3 = u2 + ("left" == (r3 ? "left" : "right") ? -1 : 1);
      f2 || F3.current || (2 === N2 ? q2(t3, e3) : A3(t3, e3));
    }), [r3, u2, f2, N2, q2, A3]), Y3 = (0, import_react.useCallback)((({ useTranslate3D: e3 = true, slideVertically: t3 = false } = {}) => {
      const n3 = -(100 * w2 - y2 * (r3 ? -1 : 1)), l4 = t3 ? e3 ? `translate3d(0, ${n3}%, 0)` : `translate(0, ${n3}%)` : e3 ? `translate3d(${n3}%, 0, 0)` : `translate(${n3}%, 0)`;
      return { transform: l4, WebkitTransform: l4, MozTransform: l4, msTransform: l4, OTransform: l4, ...x3 };
    }), [w2, y2, x3, r3]), K3 = (0, import_react.useCallback)((() => {
      if (!n2 || N2 <= 1) return { extendedItems: e2, getSlideKey: (e3) => `slide-${e3}`, getRealIndex: (e3) => e3 };
      const t3 = [e2[N2 - 1], ...e2, e2[0]];
      return { extendedItems: t3, getSlideKey: (e3) => 0 === e3 ? "slide-clone-last" : e3 === t3.length - 1 ? "slide-clone-first" : "slide-" + (e3 - 1), getRealIndex: (e3) => 0 === e3 ? N2 - 1 : e3 === t3.length - 1 ? 0 : e3 - 1 };
    }), [e2, N2, n2]), V2 = (0, import_react.useCallback)(((e3) => {
      const { getRealIndex: t3 } = K3(), n3 = t3(e3);
      return n3 === u2 ? "image-gallery-center" : n3 === (u2 - 1 + N2) % N2 ? "image-gallery-left" : n3 === (u2 + 1) % N2 ? "image-gallery-right" : "";
    }), [u2, N2, K3]);
    return (0, import_react.useEffect)((() => {
      f2 && !F3.current && P3();
    }), [f2, P3]), { currentIndex: u2, previousIndex: h3, displayIndex: w2, isTransitioning: f2, currentSlideOffset: y2, slideStyle: x3, canSlide: L3, canSlideLeft: E3, canSlideRight: W2, canSlidePrevious: M3, canSlideNext: $2, slideToIndex: A3, slideToIndexCore: H2, slideToIndexWithStyleReset: q2, slideLeft: U2, slideRight: X3, getContainerStyle: Y3, getExtendedSlides: K3, getAlignmentClass: V2, setCurrentSlideOffset: v2, setSlideStyle: C3, setIsTransitioning: b2, totalDisplaySlides: k2 };
  })({ items: E2, startIndex: Me, infinite: L2, isRTL: M2, slideDuration: Fe, onSlide: ie, onBeforeSlide: O2 }), { thumbsTranslate: Tt, setThumbsTranslate: xt, thumbsSwipedTranslate: Ct, setThumbsSwipedTranslate: It, setThumbsStyle: Rt, thumbnailsWrapperWidth: Ft, thumbnailsWrapperHeight: Nt, isSwipingThumbnail: Lt, setIsSwipingThumbnail: kt, thumbnailsWrapperRef: Mt, thumbnailsRef: $t, isThumbnailVertical: Et, getThumbnailStyle: Wt, getThumbnailBarHeight: Pt, initResizeObserver: Dt, removeResizeObserver: Bt } = (function({ currentIndex: e2, items: t2, thumbnailPosition: n2 = "bottom", disableThumbnailScroll: r3 = false, slideDuration: l3 = p, isRTL: i3 = false, useTranslate3D: o2 = true }) {
    const [u2, m3] = (0, import_react.useState)(0), [h3, g2] = (0, import_react.useState)(0), [f2, b2] = (0, import_react.useState)({ transition: `all ${l3}ms ease-out` }), [y2, v2] = (0, import_react.useState)(0), [w2, S2] = (0, import_react.useState)(0), [T3, x3] = (0, import_react.useState)(false), C3 = (0, import_react.useRef)(null), I3 = (0, import_react.useRef)(null), R2 = (0, import_react.useRef)(null), F3 = (0, import_react.useRef)(e2), N2 = (0, import_react.useCallback)((() => "left" === n2 || "right" === n2), [n2]), L3 = (0, import_react.useCallback)(((e3) => {
      if (r3) return 0;
      const n3 = I3.current;
      if (!n3) return 0;
      let l4;
      if (N2()) {
        if (n3.scrollHeight <= w2) return 0;
        l4 = n3.scrollHeight - w2;
      } else {
        if (n3.scrollWidth <= y2 || y2 <= 0) return 0;
        l4 = n3.scrollWidth - y2;
      }
      return e3 * (l4 / (t2.length - 1));
    }), [r3, t2.length, y2, w2, N2]), k2 = (0, import_react.useCallback)((() => {
      if (T3) return;
      const t3 = -L3(e2);
      b2({ transition: `all ${l3}ms ease-out` }), 0 === e2 ? (m3(0), g2(0)) : (m3(t3), g2(t3));
    }), [e2, L3, T3, l3]);
    (0, import_react.useEffect)((() => {
      F3.current !== e2 && (F3.current = e2, k2());
    }), [e2, k2]);
    const M3 = (0, import_react.useRef)(n2);
    (0, import_react.useEffect)((() => {
      if (M3.current !== n2) {
        M3.current = n2, b2({ transition: "none" }), m3(0), g2(0);
        const r4 = () => {
          if (!C3.current || !I3.current) return;
          const r5 = C3.current.getBoundingClientRect(), i4 = r5.width, a2 = r5.height;
          v2(i4), S2(a2);
          const s2 = "left" === n2 || "right" === n2, o3 = I3.current;
          let u3;
          if (s2) {
            if (o3.scrollHeight <= a2) return void b2({ transition: `all ${l3}ms ease-out` });
            u3 = o3.scrollHeight - a2;
          } else {
            if (o3.scrollWidth <= i4) return void b2({ transition: `all ${l3}ms ease-out` });
            u3 = o3.scrollWidth - i4;
          }
          const c2 = u3 / (t2.length - 1), d2 = -e2 * c2;
          m3(d2), g2(d2), requestAnimationFrame((() => {
            b2({ transition: `all ${l3}ms ease-out` });
          }));
        };
        requestAnimationFrame((() => {
          requestAnimationFrame((() => {
            setTimeout(r4, 100);
          }));
        }));
      }
    }), [n2, e2, t2.length, l3]);
    const $2 = (0, import_react.useCallback)((() => {
      const e3 = i3 ? -1 * u2 : u2;
      let t3;
      return t3 = N2() ? o2 ? `translate3d(0, ${u2}px, 0)` : `translate(0, ${u2}px)` : o2 ? `translate3d(${e3}px, 0, 0)` : `translate(${e3}px, 0)`, { WebkitTransform: t3, MozTransform: t3, msTransform: t3, OTransform: t3, transform: t3, ...f2 };
    }), [u2, f2, i3, o2, N2]), E3 = (0, import_react.useCallback)(((e3) => N2() ? { height: e3 } : {}), [N2]), W2 = (0, import_react.useCallback)(((e3) => {
      e3?.current && (R2.current = new ResizeObserver(z(((e4) => {
        e4 && e4.forEach(((e5) => {
          v2(e5.contentRect.width), S2(e5.contentRect.height);
        }));
      }), 50)), R2.current.observe(e3.current));
    }), []), P3 = (0, import_react.useCallback)((() => {
      R2.current && C3.current && (R2.current.unobserve(C3.current), R2.current = null);
    }), []), D2 = (0, import_react.useRef)({ width: 0, height: 0 });
    (0, import_react.useEffect)((() => {
      if (0 === y2 && 0 === w2) return;
      if (D2.current.width === y2 && D2.current.height === w2) return;
      if (D2.current = { width: y2, height: w2 }, T3) return;
      const n3 = I3.current;
      if (!n3) return;
      let r4;
      if (N2()) {
        if (n3.scrollHeight <= w2) return m3(0), void g2(0);
        r4 = n3.scrollHeight - w2;
      } else {
        if (n3.scrollWidth <= y2) return m3(0), void g2(0);
        r4 = n3.scrollWidth - y2;
      }
      const l4 = r4 / (t2.length - 1), i4 = -e2 * l4;
      m3(i4), g2(i4);
    }), [y2, w2, e2, t2.length, T3, N2]), (0, import_react.useEffect)((() => () => {
      P3();
    }), [P3]);
    const B2 = (0, import_react.useCallback)((() => {
      x3(true), g2(u2), b2({ transition: `all ${l3}ms ease-out` });
    }), [u2, l3]), H2 = (0, import_react.useCallback)((() => {
      x3(false);
    }), []);
    return { thumbsTranslate: u2, setThumbsTranslate: m3, thumbsSwipedTranslate: h3, setThumbsSwipedTranslate: g2, thumbsStyle: f2, setThumbsStyle: b2, thumbnailsWrapperWidth: y2, thumbnailsWrapperHeight: w2, isSwipingThumbnail: T3, setIsSwipingThumbnail: x3, thumbnailsWrapperRef: C3, thumbnailsRef: I3, isThumbnailVertical: N2, getThumbsTranslate: L3, getThumbnailStyle: $2, getThumbnailBarHeight: E3, slideThumbnailBar: k2, initResizeObserver: W2, removeResizeObserver: P3, handleThumbnailSwipeEnd: B2, resetSwipingThumbnail: H2 };
  })({ currentIndex: lt, items: E2, thumbnailPosition: We, disableThumbnailScroll: x2, slideDuration: Fe, isRTL: M2, useTranslate3D: De }), { isFullscreen: zt, modalFullscreen: Ht, fullScreen: Ot, exitFullScreen: At, toggleFullScreen: qt, handleScreenChange: Ut } = (function({ useBrowserFullscreen: e2 = true, onScreenChange: t2, galleryRef: n2 }) {
    const [r3, l3] = (0, import_react.useState)(false), [i3, s2] = (0, import_react.useState)(false), o2 = (0, import_react.useCallback)((() => {
      const r4 = document, i4 = r4.fullscreenElement || r4.msFullscreenElement || r4.mozFullScreenElement || r4.webkitFullscreenElement, a2 = n2?.current === i4;
      t2 && t2(a2), e2 && l3(a2);
    }), [n2, e2, t2]), u2 = (0, import_react.useCallback)(((e3) => {
      s2(e3), t2 && t2(e3);
    }), [t2]), c2 = (0, import_react.useCallback)((() => {
      const t3 = n2?.current;
      t3 && (e2 ? t3.requestFullscreen ? t3.requestFullscreen() : t3.msRequestFullscreen ? t3.msRequestFullscreen() : t3.mozRequestFullScreen ? t3.mozRequestFullScreen() : t3.webkitRequestFullscreen ? t3.webkitRequestFullscreen() : u2(true) : u2(true), l3(true));
    }), [n2, e2, u2]), m3 = (0, import_react.useCallback)((() => {
      if (!r3) return;
      const t3 = document;
      e2 ? t3.exitFullscreen ? t3.exitFullscreen() : t3.webkitExitFullscreen ? t3.webkitExitFullscreen() : t3.mozCancelFullScreen ? t3.mozCancelFullScreen() : t3.msExitFullscreen ? t3.msExitFullscreen() : u2(false) : u2(false), l3(false);
    }), [r3, e2, u2]), h3 = (0, import_react.useCallback)((() => {
      r3 ? m3() : c2();
    }), [r3, m3, c2]);
    return { isFullscreen: r3, modalFullscreen: i3, fullScreen: c2, exitFullScreen: m3, toggleFullScreen: h3, handleScreenChange: o2 };
  })({ useBrowserFullscreen: Pe, onScreenChange: le, galleryRef: ze }), { isPlaying: Xt, playPauseIntervalRef: Yt, play: Kt, pause: Vt, togglePlay: jt } = (function({ autoPlay: e2 = false, slideInterval: t2 = y, slideDuration: n2 = p, infinite: r3 = true, totalSlides: l3, currentIndex: i3, canSlideRight: o2, slideToIndexCore: u2, slideToIndexWithStyleReset: m3, onPlay: h3, onPause: g2 }) {
    const [f2, b2] = (0, import_react.useState)(false), v2 = (0, import_react.useRef)(null), w2 = (0, import_react.useRef)(null), S2 = (0, import_react.useCallback)((() => {
      if (r3 || o2()) {
        const e3 = i3 + 1;
        2 === l3 ? m3(e3) : u2(e3);
      } else v2.current && (clearInterval(v2.current), v2.current = null, b2(false), g2 && g2(i3));
    }), [r3, o2, i3, l3, u2, m3, g2]);
    w2.current = S2;
    const T3 = (0, import_react.useCallback)(((e3 = true) => {
      v2.current || (b2(true), v2.current = setInterval((() => w2.current?.()), Math.max(t2, n2)), h3 && e3 && h3(i3));
    }), [t2, n2, h3, i3]), x3 = (0, import_react.useCallback)(((e3 = true) => {
      v2.current && (clearInterval(v2.current), v2.current = null, b2(false), g2 && e3 && g2(i3));
    }), [g2, i3]), C3 = (0, import_react.useCallback)((() => {
      v2.current ? x3() : T3();
    }), [T3, x3]), I3 = (0, import_react.useRef)(T3), R2 = (0, import_react.useRef)(x3);
    return I3.current = T3, R2.current = x3, (0, import_react.useEffect)((() => {
      f2 && (R2.current(false), I3.current(false));
    }), [t2, n2, f2]), (0, import_react.useEffect)((() => {
      e2 && !v2.current && I3.current();
    }), [e2]), (0, import_react.useEffect)((() => () => {
      v2.current && (clearInterval(v2.current), v2.current = null);
    }), []), { isPlaying: f2, playPauseIntervalRef: v2, play: T3, pause: x3, togglePlay: C3 };
  })({ autoPlay: m2, slideInterval: Ne, slideDuration: Fe, infinite: L2, totalSlides: nt, currentIndex: lt, canSlideRight: ut, slideToIndexCore: dt, slideToIndexWithStyleReset: mt, onPlay: re, onPause: ne }), Gt = (0, import_react.useCallback)((() => {
    Qe.current = false, Ze.current = false;
  }), []), Jt = (0, import_react.useCallback)((() => {
    return e2 = et.current, t2 = Ee, Math.abs(e2) > t2;
    var e2, t2;
  }), [Ee]), Qt = (0, import_react.useCallback)((({ event: e2, absX: t2, absY: n2, dir: r3 }) => {
    const l3 = r3, i3 = Qe.current, a2 = Ze.current;
    if (("Up" === l3 || "Down" === l3 || i3) && !a2 && (i3 || (Qe.current = true), !ke)) return;
    if ("Left" !== l3 && "Right" !== l3 || a2 || (Ze.current = true), T2) return;
    (!ke && Ze.current || ke && Qe.current) && e2.preventDefault(), $e && e2.preventDefault();
    const s2 = !i3 && !a2;
    if (at && !s2) return void (et.current = 0);
    if (at && s2 && wt(false), /* @__PURE__ */ (function(e3, t3) {
      return !("Left" !== e3 && "Right" !== e3 || !t3) || !("Up" !== e3 && "Down" !== e3 || t3);
    })(l3, ke)) return;
    const o2 = (function(e3, t3, n3, r4, l4, i4) {
      const a3 = { Left: -1, Right: 1, Up: -1, Down: 1 }[l4];
      let s3 = i4 ? t3 / r4 * 100 : e3 / n3 * 100;
      return Math.abs(s3) >= 100 && (s3 = 100), a3 * s3;
    })(t2, n2, Ye, Ve, l3, ke);
    et.current = o2;
    const u2 = _e.current;
    u2 && (s2 && (u2.style.transition = "none"), null !== tt.current && cancelAnimationFrame(tt.current), tt.current = requestAnimationFrame((() => {
      tt.current = null;
      const e3 = et.current * (M2 ? -1 : 1), t3 = -(100 * it - e3), n3 = ke ? De ? `translate3d(0, ${t3}%, 0)` : `translate(0, ${t3}%)` : De ? `translate3d(${t3}%, 0, 0)` : `translate(${t3}%, 0)`;
      u2.style.transform = n3;
    })));
  }), [T2, $e, at, Ye, Ve, ke, it, M2, De, wt]), Zt = (0, import_react.useCallback)(((e2, t2, n2) => {
    null !== tt.current && (cancelAnimationFrame(tt.current), tt.current = null);
    const r3 = et.current, l3 = (function(e3, t3, n3, r4, l4, i4, a3) {
      let s3 = e3;
      return !n3 && !r4 || l4 || (s3 += t3), -1 !== t3 || i4 || (s3 = e3), 1 !== t3 || a3 || (s3 = e3), s3;
    })(lt, e2, Jt(), t2, at, ot(), ut()), i3 = (function(e3, t3, n3, r4, l4, i4) {
      const a3 = Math.abs(e3), s3 = (t3 !== n3 ? 100 - a3 : a3) / 100 * i4;
      return r4 > 0 ? Math.min(l4, Math.max(80, Math.round(s3 / r4))) : l4;
    })(r3, l3, lt, n2, Fe, ke ? Ve : Ye), a2 = (function(e3, t3, n3, r4) {
      const l4 = t3 - 1;
      return e3 < 0 ? 0 : e3 > l4 ? r4 && t3 > 1 ? n3 - 1 : l4 : r4 && t3 > 1 ? e3 + 1 : e3;
    })(l3, nt, St, L2), s2 = _e.current;
    if (s2) {
      s2.getBoundingClientRect(), s2.style.transition = `transform ${i3}ms ${S}`;
      const e3 = -100 * a2;
      s2.style.transform = ke ? De ? `translate3d(0, ${e3}%, 0)` : `translate(0, ${e3}%)` : De ? `translate3d(${e3}%, 0, 0)` : `translate(${e3}%, 0)`;
    }
    yt(r3), dt(l3, void 0, false, i3), et.current = 0;
  }), [lt, nt, St, L2, at, Fe, ke, De, Ye, Ve, Jt, ot, ut, dt, yt]), _t = (0, import_react.useCallback)((({ event: e2, dir: t2, velocity: n2 }) => {
    if (T2) return;
    $e && e2.stopPropagation(), Gt();
    const r3 = t2, l3 = (function(e3, t3, n3) {
      return n3 ? "Up" === e3 ? 1 : -1 : ("Left" === e3 ? 1 : -1) * (t3 ? -1 : 1);
    })(r3, M2, ke), i3 = (function(e3, t3, n3, r4) {
      return r4 ? e3 > t3 && !("Left" === n3 || "Right" === n3) : e3 > t3 && !("Up" === n3 || "Down" === n3);
    })(n2, I2, r3, ke);
    Zt(l3, i3, n2);
  }), [T2, $e, Gt, M2, ke, I2, Zt]), en = (0, import_react.useCallback)((({ event: e2, absX: t2, absY: n2, dir: r3 }) => {
    const l3 = r3, i3 = Et(), a2 = Qe.current, s2 = Ze.current;
    if (i3) {
      if (("Left" === l3 || "Right" === l3 || s2) && !a2) return void (s2 || (Ze.current = true));
      "Up" !== l3 && "Down" !== l3 || a2 || (Qe.current = true);
    } else {
      if (("Up" === l3 || "Down" === l3 || a2) && !s2) return void (a2 || (Qe.current = true));
      "Left" !== l3 && "Right" !== l3 || s2 || (Ze.current = true);
    }
    const o2 = $t.current;
    if (!o2) return;
    let u2, c2, d2, m3, h3;
    i3 ? (u2 = Ct + ("Down" === l3 ? n2 : -n2), c2 = o2.scrollHeight - Nt + 0, d2 = Math.abs(u2) > c2, m3 = u2 > 0, h3 = o2.scrollHeight <= Nt) : (u2 = Ct + ("Right" === l3 ? t2 : -t2), c2 = o2.scrollWidth - Ft + 0, d2 = Math.abs(u2) > c2, m3 = u2 > 0, h3 = o2.scrollWidth <= Ft), h3 || ("Left" !== l3 && "Up" !== l3 || !d2) && ("Right" !== l3 && "Down" !== l3 || !m3) && ($e && e2.stopPropagation(), xt(u2), Lt || (Rt({ transition: "none" }), kt(true)));
  }), [Et, Nt, Ft, Ct, $e, Lt, $t, xt, Rt, kt]), tn = (0, import_react.useCallback)((({ velocity: e2, dir: t2 }) => {
    Gt();
    const n2 = $t.current, r3 = Et(), l3 = r3 ? n2?.scrollHeight ?? 0 : n2?.scrollWidth ?? 0, i3 = r3 ? Nt : Ft, { targetTranslate: a2, transitionStyle: s2 } = (function(e3) {
      const { velocity: t3, direction: n3, isVertical: r4, currentTranslate: l4, scrollSize: i4, wrapperSize: a3, slideDuration: s3, emptySpaceMargin: o2 = 0, momentumMultiplier: u2 = 150 } = e3, c2 = (function(e4, t4 = 150) {
        return e4 * t4;
      })(t3, u2), d2 = /* @__PURE__ */ (function(e4, t4) {
        return t4 ? "Down" === e4 ? 1 : -1 : "Right" === e4 ? 1 : -1;
      })(n3, r4);
      let m3 = l4 + c2 * d2;
      const h3 = i4 - a3 + o2;
      h3 > 0 && (m3 = (function(e4, t4, n4 = 0) {
        let r5 = Math.min(n4, e4);
        return r5 = Math.max(-t4, r5), r5;
      })(m3, h3, o2));
      const g2 = (function(e4, t4 = p, n4 = 700) {
        return Math.min(n4, t4 + 100 * e4);
      })(t3, s3);
      return { targetTranslate: m3, transitionDuration: g2, transitionStyle: `all ${g2}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)` };
    })({ velocity: e2, direction: t2, isVertical: r3, currentTranslate: Tt, scrollSize: l3, wrapperSize: i3, slideDuration: Fe });
    Rt({ transition: s2 }), xt(a2), It(a2), kt(false);
  }), [Gt, Tt, xt, It, kt, Rt, Fe, Et, $t, Nt, Ft]), nn = (0, import_react.useCallback)(((e2) => {
    if (ze.current?.classList.remove("image-gallery-using-mouse"), !h2) switch (parseInt(String(e2.keyCode || e2.which || 0), 10)) {
      case 37:
        ot() && !Yt?.current && ht(e2);
        break;
      case 39:
        ut() && !Yt?.current && gt(e2);
        break;
      case 27:
        zt && !Pe && At();
    }
  }), [h2, ot, ut, ht, gt, zt, Pe, At, Yt]);
  Xe.current = nn;
  const rn = (0, import_react.useCallback)(((e2) => {
    Xe.current?.(e2);
  }), []), ln = (0, import_react.useCallback)((() => {
    ze.current?.classList.add("image-gallery-using-mouse");
  }), []), an = (0, import_react.useCallback)(((e2) => {
    Q(e2) && X2 && X2(e2);
  }), [X2]), sn = (0, import_react.useCallback)(((e2, t2) => {
    Oe.current && (window.clearTimeout(Oe.current), Oe.current = null), Oe.current = window.setTimeout((() => {
      ct(t2), Vt();
    }), 300);
  }), [ct, Vt]), on = (0, import_react.useCallback)((() => {
    Oe.current && (window.clearTimeout(Oe.current), Oe.current = null, m2 && Kt());
  }), [m2, Kt]), un = (0, import_react.useCallback)(((e2, t2) => {
    Le && sn(e2, t2);
  }), [Le, sn]), cn = (0, import_react.useCallback)(((e2, t2) => {
    Q(e2) && ae?.(e2, t2);
  }), [ae]), dn = (0, import_react.useCallback)(((e2, t2) => {
    const n2 = e2.target.parentNode?.parentNode;
    n2?.blur && n2.blur(), lt !== t2 && (2 === nt ? mt(t2, e2) : ct(t2, e2)), ae && ae(e2, t2);
  }), [lt, nt, ct, mt, ae]), mn = (0, import_react.useCallback)(((e2, t2) => {
    e2.target.blur(), lt !== t2 && (2 === nt ? mt(t2, e2) : ct(t2, e2)), A2 && A2(e2, t2);
  }), [lt, nt, ct, mt, A2]), hn = (0, import_react.useCallback)(((e2) => {
    Y2 && -1 === e2.currentTarget.src.indexOf(Y2) && (e2.currentTarget.src = Y2);
  }), [Y2]), gn = (0, import_react.useCallback)(((e2, t2) => {
    Ae.current[t2] || (Ae.current[t2] = true, _2 && _2(e2), ke && Cn.current?.());
  }), [_2, ke]), fn = (0, import_react.useCallback)((() => {
    if (!ze.current) return;
    const e2 = ze.current.offsetWidth;
    if (Ke(e2), je(ze.current.offsetHeight), He.current) if (ke) {
      const t2 = He.current.offsetWidth || e2, n2 = He.current.querySelector(".image-gallery-center .image-gallery-image") ?? He.current.querySelector(".image-gallery-image");
      if (n2 && n2.naturalWidth > 0 && n2.naturalHeight > 0) {
        const e3 = n2.naturalHeight / n2.naturalWidth, r3 = Math.round(t2 * e3), l3 = window.innerHeight - 80;
        Je(Math.min(r3, l3));
      } else Je(He.current.offsetHeight);
    } else Je(He.current.offsetHeight);
  }), [ke]), bn = (0, import_react.useCallback)(((e2) => {
    e2?.current && (Ue.current = new ResizeObserver(z(((e3) => {
      e3 && e3.forEach((() => {
        fn();
      }));
    }), 50)), Ue.current.observe(e2.current));
  }), [fn]), pn = (0, import_react.useCallback)((() => {
    Ue.current && He.current && (Ue.current.unobserve(He.current), Ue.current = null);
  }), []), yn = (0, import_react.useRef)(null), vn = (0, import_react.useRef)(null), wn = (0, import_react.useRef)(null), Sn = (0, import_react.useRef)(null), Tn = (0, import_react.useRef)(null), xn = (0, import_react.useRef)(null), Cn = (0, import_react.useRef)(null);
  yn.current = ln, vn.current = Ut, wn.current = bn, Sn.current = Dt, Tn.current = pn, xn.current = Bt, Cn.current = fn;
  const In = (0, import_react.useCallback)((() => {
    yn.current?.();
  }), []), Rn = (0, import_react.useCallback)((() => {
    vn.current?.();
  }), []), Fn = (0, import_react.useCallback)(((e2) => {
    const n2 = K2 || hn;
    return (0, import_jsx_runtime.jsx)(q, { description: e2.description, fullscreen: e2.fullscreen, handleImageLoaded: gn, isFullscreen: zt, loading: e2.loading, original: e2.original, originalAlt: e2.originalAlt, originalHeight: e2.originalHeight, originalTitle: e2.originalTitle, originalWidth: e2.originalWidth, sizes: e2.sizes, srcSet: e2.srcSet, onImageError: n2 });
  }), [zt, K2, hn, gn]), Nn = (0, import_react.useCallback)(((e2) => {
    const r3 = se || hn;
    return (0, import_jsx_runtime.jsxs)("span", { className: "image-gallery-thumbnail-inner", children: [(0, import_jsx_runtime.jsx)("img", { alt: e2.thumbnailAlt, className: "image-gallery-thumbnail-image", height: e2.thumbnailHeight, loading: e2.thumbnailLoading, src: e2.thumbnail, title: e2.thumbnailTitle, width: e2.thumbnailWidth, onError: r3 }), e2.thumbnailLabel && (0, import_jsx_runtime.jsx)("div", { className: "image-gallery-thumbnail-label", children: e2.thumbnailLabel })] });
  }), [se, hn]), Ln = (0, import_react.useMemo)((() => ft({ useTranslate3D: De, slideVertically: ke })), [ft, De, ke]), kn = (0, import_react.useMemo)((() => {
    const e2 = [], n2 = [], r3 = [], { extendedItems: l3, getSlideKey: i3, getRealIndex: a2 } = bt();
    return l3.forEach(((n3, r4) => {
      const l4 = a2(r4), s2 = pt(r4), o2 = n3.originalClass ? ` ${n3.originalClass}` : "", u2 = n3.renderItem || ge || Fn, c2 = !P2 || s2 || qe.current[l4];
      c2 && P2 && !qe.current[l4] && (qe.current[l4] = true), e2.push((0, import_jsx_runtime.jsx)(U, { alignment: s2, index: l4, originalClass: o2, onClick: X2, onKeyUp: an, onMouseLeave: ee, onMouseOver: te, onTouchEnd: oe, onTouchMove: ue, onTouchStart: ce, children: c2 ? u2(n3) : (0, import_jsx_runtime.jsx)("div", { style: { height: "100%" } }) }, i3(r4)));
    })), E2.forEach(((e3, l4) => {
      const i4 = e3.thumbnailClass ? ` ${e3.thumbnailClass}` : "", a3 = e3.renderThumbInner || ye || Nn;
      Re && e3.thumbnail && n2.push((0, import_jsx_runtime.jsx)(j, { index: l4, isActive: lt === l4, thumbnailClass: i4, onClick: (e4) => dn(e4, l4), onFocus: (e4) => un(e4, l4), onKeyUp: (e4) => cn(e4, l4), onMouseLeave: Le ? on : null, onMouseOver: (e4) => un(e4, l4), children: a3(e3) }, `thumbnail-${l4}`)), we && r3.push((0, import_jsx_runtime.jsx)(f, { bulletClass: e3.bulletClass, index: l4, isActive: lt === l4, onClick: (e4) => mn(e4, l4) }, `bullet-${l4}`));
    })), { slides: e2, thumbnails: n2, bullets: r3 };
  }), [E2, lt, bt, pt, P2, Re, we, Le, Fn, Nn, ge, ye, X2, an, ue, oe, ce, te, ee, on, un, cn, dn, mn]);
  (0, import_react.useEffect)((() => {
    const e2 = ze.current;
    return Be ? window.addEventListener("keydown", rn) : e2?.addEventListener("keydown", rn), window.addEventListener("mousedown", In), wn.current?.(He), Sn.current?.(Mt), J.forEach(((e3) => {
      document.addEventListener(e3, Rn);
    })), () => {
      window.removeEventListener("mousedown", In), window.removeEventListener("keydown", rn), e2?.removeEventListener("keydown", rn), J.forEach(((e3) => {
        document.removeEventListener(e3, Rn);
      })), Tn.current?.(), xn.current?.();
    };
  }), [Be, rn, In, Rn, Mt]), (0, import_react.useEffect)((() => {
    Tn.current?.(), xn.current?.(), wn.current?.(He), Sn.current?.(Mt);
  }), [We, Mt]), (0, import_react.useEffect)((() => {
    Re ? Sn.current?.(Mt) : xn.current?.(), Cn.current?.();
  }), [Re, Mt]), (0, import_react.useEffect)((() => {
    Tn.current?.(), xn.current?.(), wn.current?.(He), Sn.current?.(Mt), Cn.current?.();
  }), [ke, Mt]), (0, import_react.useEffect)((() => {
    P2 && (qe.current = []), Cn.current?.();
  }), [E2, P2]);
  const Mn = (0, import_react.useRef)(Kt), $n = (0, import_react.useRef)(Vt), En = (0, import_react.useRef)(jt), Wn = (0, import_react.useRef)(Ot), Pn = (0, import_react.useRef)(At), Dn = (0, import_react.useRef)(qt), Bn = (0, import_react.useRef)(dt), zn = (0, import_react.useRef)(lt);
  Mn.current = Kt, $n.current = Vt, En.current = jt, Wn.current = Ot, Pn.current = At, Dn.current = qt, Bn.current = dt, zn.current = lt, (0, import_react.useImperativeHandle)(l2, (() => ({ play: (e2) => Mn.current(e2), pause: (e2) => $n.current(e2), togglePlay: () => En.current(), fullScreen: () => Wn.current(), exitFullScreen: () => Pn.current(), toggleFullScreen: () => Dn.current(), slideToIndex: (e2, t2) => Bn.current(e2, t2), getCurrentIndex: () => zn.current })), []);
  const { slides: Hn, thumbnails: On, bullets: An } = kn, qn = g("image-gallery-slide-wrapper", Z(We), { "image-gallery-rtl": M2 }), Un = (0, import_jsx_runtime.jsxs)("div", { ref: He, className: qn, children: [me && me(), rt ? (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [Ce && (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [ke ? ve(ht, !ot()) : fe(ht, !ot()), ke ? de(gt, !ut()) : pe(gt, !ut())] }), (0, import_jsx_runtime.jsx)(V, { className: "image-gallery-swipe", delta: 0, onSwiped: _t, onSwiping: Qt, children: (0, import_jsx_runtime.jsx)("div", { className: "image-gallery-slides", style: ke ? { height: Ge } : void 0, children: (0, import_jsx_runtime.jsx)("div", { ref: _e, className: g("image-gallery-slides-container", { vertical: ke }), style: Ln, children: Hn }) }) })] }) : (0, import_jsx_runtime.jsx)("div", { className: "image-gallery-slides", style: ke ? { height: Ge } : void 0, children: (0, import_jsx_runtime.jsx)("div", { ref: _e, className: g("image-gallery-slides-container", { vertical: ke }), style: Ln, children: Hn }) }), Ie && be(jt, Xt), we && (0, import_jsx_runtime.jsx)(b, { bullets: An, currentIndex: lt, maxBullets: Se, slideVertically: ke }), Te && he(qt, zt), xe && (0, import_jsx_runtime.jsx)(H, { currentIndex: lt, indexSeparator: F2, totalItems: nt })] }), Xn = g("image-gallery", i2, { "fullscreen-modal": Ht }), Yn = g("image-gallery-content", Z(We), { fullscreen: zt });
  return (0, import_jsx_runtime.jsx)("div", { ref: ze, "aria-live": "polite", className: Xn, children: (0, import_jsx_runtime.jsxs)("div", { className: Yn, children: [("bottom" === We || "right" === We) && Un, Re && On.length > 0 && (0, import_jsx_runtime.jsx)(G, { disableThumbnailSwipe: C2, isRTL: M2, thumbnailBarHeight: Pt(Ge), thumbnailPosition: We, thumbnails: On, thumbnailsRef: $t, thumbnailStyle: Wt(), thumbnailsWrapperRef: Mt, onSwiped: tn, onSwiping: en }), ("top" === We || "left" === We) && Un] }) });
}));
export {
  _ as default
};
//# sourceMappingURL=react-image-gallery.js.map
