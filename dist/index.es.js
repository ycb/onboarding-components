import * as T from "react";
import Be, { forwardRef as rt, createElement as sr, useState as be, useEffect as tt, useCallback as oe } from "react";
var $e = { exports: {} }, we = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ir;
function nt() {
  if (ir)
    return we;
  ir = 1;
  var r = Be, t = Symbol.for("react.element"), o = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(d, p, f) {
    var m, v = {}, x = null, _ = null;
    f !== void 0 && (x = "" + f), p.key !== void 0 && (x = "" + p.key), p.ref !== void 0 && (_ = p.ref);
    for (m in p)
      a.call(p, m) && !l.hasOwnProperty(m) && (v[m] = p[m]);
    if (d && d.defaultProps)
      for (m in p = d.defaultProps, p)
        v[m] === void 0 && (v[m] = p[m]);
    return { $$typeof: t, type: d, key: x, ref: _, props: v, _owner: i.current };
  }
  return we.Fragment = o, we.jsx = c, we.jsxs = c, we;
}
var je = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lr;
function ot() {
  return lr || (lr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Be, t = Symbol.for("react.element"), o = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), O = Symbol.iterator, R = "@@iterator";
    function P(e) {
      if (e === null || typeof e != "object")
        return null;
      var s = O && e[O] || e[R];
      return typeof s == "function" ? s : null;
    }
    var I = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(e) {
      {
        for (var s = arguments.length, u = new Array(s > 1 ? s - 1 : 0), g = 1; g < s; g++)
          u[g - 1] = arguments[g];
        pe("error", e, u);
      }
    }
    function pe(e, s, u) {
      {
        var g = I.ReactDebugCurrentFrame, w = g.getStackAddendum();
        w !== "" && (s += "%s", u = u.concat([w]));
        var k = u.map(function(y) {
          return String(y);
        });
        k.unshift("Warning: " + s), Function.prototype.apply.call(console[e], console, k);
      }
    }
    var ee = !1, F = !1, W = !1, re = !1, me = !1, te;
    te = Symbol.for("react.module.reference");
    function se(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === l || me || e === i || e === f || e === m || re || e === _ || ee || F || W || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === v || e.$$typeof === c || e.$$typeof === d || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function V(e, s, u) {
      var g = e.displayName;
      if (g)
        return g;
      var w = s.displayName || s.name || "";
      return w !== "" ? u + "(" + w + ")" : u;
    }
    function C(e) {
      return e.displayName || "Context";
    }
    function L(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case a:
          return "Fragment";
        case o:
          return "Portal";
        case l:
          return "Profiler";
        case i:
          return "StrictMode";
        case f:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var s = e;
            return C(s) + ".Consumer";
          case c:
            var u = e;
            return C(u._context) + ".Provider";
          case p:
            return V(e, e.render, "ForwardRef");
          case v:
            var g = e.displayName || null;
            return g !== null ? g : L(e.type) || "Memo";
          case x: {
            var w = e, k = w._payload, y = w._init;
            try {
              return L(y(k));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, B = 0, H, ne, Z, U, ie, q, Q;
    function M() {
    }
    M.__reactDisabledLog = !0;
    function N() {
      {
        if (B === 0) {
          H = console.log, ne = console.info, Z = console.warn, U = console.error, ie = console.group, q = console.groupCollapsed, Q = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: M,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        B++;
      }
    }
    function X() {
      {
        if (B--, B === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: H
            }),
            info: D({}, e, {
              value: ne
            }),
            warn: D({}, e, {
              value: Z
            }),
            error: D({}, e, {
              value: U
            }),
            group: D({}, e, {
              value: ie
            }),
            groupCollapsed: D({}, e, {
              value: q
            }),
            groupEnd: D({}, e, {
              value: Q
            })
          });
        }
        B < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = I.ReactCurrentDispatcher, he;
    function le(e, s, u) {
      {
        if (he === void 0)
          try {
            throw Error();
          } catch (w) {
            var g = w.stack.trim().match(/\n( *(at )?)/);
            he = g && g[1] || "";
          }
        return `
` + he + e;
      }
    }
    var Ae = !1, Ne;
    {
      var Sr = typeof WeakMap == "function" ? WeakMap : Map;
      Ne = new Sr();
    }
    function Ue(e, s) {
      if (!e || Ae)
        return "";
      {
        var u = Ne.get(e);
        if (u !== void 0)
          return u;
      }
      var g;
      Ae = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var k;
      k = J.current, J.current = null, N();
      try {
        if (s) {
          var y = function() {
            throw Error();
          };
          if (Object.defineProperty(y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(y, []);
            } catch ($) {
              g = $;
            }
            Reflect.construct(e, [], y);
          } else {
            try {
              y.call();
            } catch ($) {
              g = $;
            }
            e.call(y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($) {
            g = $;
          }
          e();
        }
      } catch ($) {
        if ($ && g && typeof $.stack == "string") {
          for (var b = $.stack.split(`
`), z = g.stack.split(`
`), S = b.length - 1, A = z.length - 1; S >= 1 && A >= 0 && b[S] !== z[A]; )
            A--;
          for (; S >= 1 && A >= 0; S--, A--)
            if (b[S] !== z[A]) {
              if (S !== 1 || A !== 1)
                do
                  if (S--, A--, A < 0 || b[S] !== z[A]) {
                    var G = `
` + b[S].replace(" at new ", " at ");
                    return e.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", e.displayName)), typeof e == "function" && Ne.set(e, G), G;
                  }
                while (S >= 1 && A >= 0);
              break;
            }
        }
      } finally {
        Ae = !1, J.current = k, X(), Error.prepareStackTrace = w;
      }
      var ge = e ? e.displayName || e.name : "", ce = ge ? le(ge) : "";
      return typeof e == "function" && Ne.set(e, ce), ce;
    }
    function Pr(e, s, u) {
      return Ue(e, !1);
    }
    function Ar(e) {
      var s = e.prototype;
      return !!(s && s.isReactComponent);
    }
    function Re(e, s, u) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ue(e, Ar(e));
      if (typeof e == "string")
        return le(e);
      switch (e) {
        case f:
          return le("Suspense");
        case m:
          return le("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return Pr(e.render);
          case v:
            return Re(e.type, s, u);
          case x: {
            var g = e, w = g._payload, k = g._init;
            try {
              return Re(k(w), s, u);
            } catch {
            }
          }
        }
      return "";
    }
    var xe = Object.prototype.hasOwnProperty, qe = {}, Xe = I.ReactDebugCurrentFrame;
    function Ee(e) {
      if (e) {
        var s = e._owner, u = Re(e.type, e._source, s ? s.type : null);
        Xe.setExtraStackFrame(u);
      } else
        Xe.setExtraStackFrame(null);
    }
    function Or(e, s, u, g, w) {
      {
        var k = Function.call.bind(xe);
        for (var y in e)
          if (k(e, y)) {
            var b = void 0;
            try {
              if (typeof e[y] != "function") {
                var z = Error((g || "React class") + ": " + u + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              b = e[y](s, y, g, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              b = S;
            }
            b && !(b instanceof Error) && (Ee(w), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", u, y, typeof b), Ee(null)), b instanceof Error && !(b.message in qe) && (qe[b.message] = !0, Ee(w), j("Failed %s type: %s", u, b.message), Ee(null));
          }
      }
    }
    var Ir = Array.isArray;
    function Oe(e) {
      return Ir(e);
    }
    function Mr(e) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, u = s && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u;
      }
    }
    function Lr(e) {
      try {
        return Je(e), !1;
      } catch {
        return !0;
      }
    }
    function Je(e) {
      return "" + e;
    }
    function Ke(e) {
      if (Lr(e))
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Mr(e)), Je(e);
    }
    var ye = I.ReactCurrentOwner, Fr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, He, Ze, Ie;
    Ie = {};
    function Dr(e) {
      if (xe.call(e, "ref")) {
        var s = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function zr(e) {
      if (xe.call(e, "key")) {
        var s = Object.getOwnPropertyDescriptor(e, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function $r(e, s) {
      if (typeof e.ref == "string" && ye.current && s && ye.current.stateNode !== s) {
        var u = L(ye.current.type);
        Ie[u] || (j('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(ye.current.type), e.ref), Ie[u] = !0);
      }
    }
    function Wr(e, s) {
      {
        var u = function() {
          He || (He = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function Gr(e, s) {
      {
        var u = function() {
          Ze || (Ze = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var Vr = function(e, s, u, g, w, k, y) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: s,
        ref: u,
        props: y,
        // Record the component responsible for creating this element.
        _owner: k
      };
      return b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(b, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function Br(e, s, u, g, w) {
      {
        var k, y = {}, b = null, z = null;
        u !== void 0 && (Ke(u), b = "" + u), zr(s) && (Ke(s.key), b = "" + s.key), Dr(s) && (z = s.ref, $r(s, w));
        for (k in s)
          xe.call(s, k) && !Fr.hasOwnProperty(k) && (y[k] = s[k]);
        if (e && e.defaultProps) {
          var S = e.defaultProps;
          for (k in S)
            y[k] === void 0 && (y[k] = S[k]);
        }
        if (b || z) {
          var A = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          b && Wr(y, A), z && Gr(y, A);
        }
        return Vr(e, b, z, w, g, ye.current, y);
      }
    }
    var Me = I.ReactCurrentOwner, Qe = I.ReactDebugCurrentFrame;
    function ve(e) {
      if (e) {
        var s = e._owner, u = Re(e.type, e._source, s ? s.type : null);
        Qe.setExtraStackFrame(u);
      } else
        Qe.setExtraStackFrame(null);
    }
    var Le;
    Le = !1;
    function Fe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function er() {
      {
        if (Me.current) {
          var e = L(Me.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Yr(e) {
      {
        if (e !== void 0) {
          var s = e.fileName.replace(/^.*[\\\/]/, ""), u = e.lineNumber;
          return `

Check your code at ` + s + ":" + u + ".";
        }
        return "";
      }
    }
    var rr = {};
    function Ur(e) {
      {
        var s = er();
        if (!s) {
          var u = typeof e == "string" ? e : e.displayName || e.name;
          u && (s = `

Check the top-level render call using <` + u + ">.");
        }
        return s;
      }
    }
    function tr(e, s) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var u = Ur(s);
        if (rr[u])
          return;
        rr[u] = !0;
        var g = "";
        e && e._owner && e._owner !== Me.current && (g = " It was passed a child from " + L(e._owner.type) + "."), ve(e), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, g), ve(null);
      }
    }
    function nr(e, s) {
      {
        if (typeof e != "object")
          return;
        if (Oe(e))
          for (var u = 0; u < e.length; u++) {
            var g = e[u];
            Fe(g) && tr(g, s);
          }
        else if (Fe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var w = P(e);
          if (typeof w == "function" && w !== e.entries)
            for (var k = w.call(e), y; !(y = k.next()).done; )
              Fe(y.value) && tr(y.value, s);
        }
      }
    }
    function qr(e) {
      {
        var s = e.type;
        if (s == null || typeof s == "string")
          return;
        var u;
        if (typeof s == "function")
          u = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === v))
          u = s.propTypes;
        else
          return;
        if (u) {
          var g = L(s);
          Or(u, e.props, "prop", g, e);
        } else if (s.PropTypes !== void 0 && !Le) {
          Le = !0;
          var w = L(s);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Xr(e) {
      {
        for (var s = Object.keys(e.props), u = 0; u < s.length; u++) {
          var g = s[u];
          if (g !== "children" && g !== "key") {
            ve(e), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), ve(null);
            break;
          }
        }
        e.ref !== null && (ve(e), j("Invalid attribute `ref` supplied to `React.Fragment`."), ve(null));
      }
    }
    var or = {};
    function ar(e, s, u, g, w, k) {
      {
        var y = se(e);
        if (!y) {
          var b = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = Yr(w);
          z ? b += z : b += er();
          var S;
          e === null ? S = "null" : Oe(e) ? S = "array" : e !== void 0 && e.$$typeof === t ? (S = "<" + (L(e.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : S = typeof e, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", S, b);
        }
        var A = Br(e, s, u, w, k);
        if (A == null)
          return A;
        if (y) {
          var G = s.children;
          if (G !== void 0)
            if (g)
              if (Oe(G)) {
                for (var ge = 0; ge < G.length; ge++)
                  nr(G[ge], e);
                Object.freeze && Object.freeze(G);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              nr(G, e);
        }
        if (xe.call(s, "key")) {
          var ce = L(e), $ = Object.keys(s).filter(function(et) {
            return et !== "key";
          }), De = $.length > 0 ? "{key: someKey, " + $.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!or[ce + De]) {
            var Qr = $.length > 0 ? "{" + $.join(": ..., ") + ": ...}" : "{}";
            j(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, De, ce, Qr, ce), or[ce + De] = !0;
          }
        }
        return e === a ? Xr(A) : qr(A), A;
      }
    }
    function Jr(e, s, u) {
      return ar(e, s, u, !0);
    }
    function Kr(e, s, u) {
      return ar(e, s, u, !1);
    }
    var Hr = Kr, Zr = Jr;
    je.Fragment = a, je.jsx = Hr, je.jsxs = Zr;
  }()), je;
}
process.env.NODE_ENV === "production" ? $e.exports = nt() : $e.exports = ot();
var n = $e.exports, at = {
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
const st = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), it = (r, t) => {
  const o = rt(
    ({ color: a = "currentColor", size: i = 24, strokeWidth: l = 2, absoluteStrokeWidth: c, children: d, ...p }, f) => sr(
      "svg",
      {
        ref: f,
        ...at,
        width: i,
        height: i,
        stroke: a,
        strokeWidth: c ? Number(l) * 24 / Number(i) : l,
        className: `lucide lucide-${st(r)}`,
        ...p
      },
      [
        ...t.map(([m, v]) => sr(m, v)),
        ...(Array.isArray(d) ? d : [d]) || []
      ]
    )
  );
  return o.displayName = `${r}`, o;
};
var ue = it;
const lt = ue("AlertTriangle", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
      key: "c3ski4"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]), ct = ue("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]), Te = ue("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["polyline", { points: "22 4 12 14.01 9 11.01", key: "6xbx8j" }]
]), br = ue("FileText", [
  [
    "path",
    {
      d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
      key: "1nnpy2"
    }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["line", { x1: "16", x2: "8", y1: "13", y2: "13", key: "14keom" }],
  ["line", { x1: "16", x2: "8", y1: "17", y2: "17", key: "17nazh" }],
  ["line", { x1: "10", x2: "8", y1: "9", y2: "9", key: "1a5vjj" }]
]), dt = ue("Linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
]), ut = ue("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]), cr = ue("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
]);
function hr(r) {
  var t, o, a = "";
  if (typeof r == "string" || typeof r == "number")
    a += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var i = r.length;
      for (t = 0; t < i; t++)
        r[t] && (o = hr(r[t])) && (a && (a += " "), a += o);
    } else
      for (o in r)
        r[o] && (a && (a += " "), a += o);
  return a;
}
function xr() {
  for (var r, t, o = 0, a = "", i = arguments.length; o < i; o++)
    (r = arguments[o]) && (t = hr(r)) && (a && (a += " "), a += t);
  return a;
}
function ft() {
  for (var r = 0, t, o, a = ""; r < arguments.length; )
    (t = arguments[r++]) && (o = yr(t)) && (a && (a += " "), a += o);
  return a;
}
function yr(r) {
  if (typeof r == "string")
    return r;
  for (var t, o = "", a = 0; a < r.length; a++)
    r[a] && (t = yr(r[a])) && (o && (o += " "), o += t);
  return o;
}
var Ye = "-";
function pt(r) {
  var t = vt(r), o = r.conflictingClassGroups, a = r.conflictingClassGroupModifiers, i = a === void 0 ? {} : a;
  function l(d) {
    var p = d.split(Ye);
    return p[0] === "" && p.length !== 1 && p.shift(), wr(p, t) || mt(d);
  }
  function c(d, p) {
    var f = o[d] || [];
    return p && i[d] ? [].concat(f, i[d]) : f;
  }
  return {
    getClassGroupId: l,
    getConflictingClassGroupIds: c
  };
}
function wr(r, t) {
  var c;
  if (r.length === 0)
    return t.classGroupId;
  var o = r[0], a = t.nextPart.get(o), i = a ? wr(r.slice(1), a) : void 0;
  if (i)
    return i;
  if (t.validators.length !== 0) {
    var l = r.join(Ye);
    return (c = t.validators.find(function(d) {
      var p = d.validator;
      return p(l);
    })) == null ? void 0 : c.classGroupId;
  }
}
var dr = /^\[(.+)\]$/;
function mt(r) {
  if (dr.test(r)) {
    var t = dr.exec(r)[1], o = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}
function vt(r) {
  var t = r.theme, o = r.prefix, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, i = bt(Object.entries(r.classGroups), o);
  return i.forEach(function(l) {
    var c = l[0], d = l[1];
    We(d, a, c, t);
  }), a;
}
function We(r, t, o, a) {
  r.forEach(function(i) {
    if (typeof i == "string") {
      var l = i === "" ? t : ur(t, i);
      l.classGroupId = o;
      return;
    }
    if (typeof i == "function") {
      if (gt(i)) {
        We(i(a), t, o, a);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: o
      });
      return;
    }
    Object.entries(i).forEach(function(c) {
      var d = c[0], p = c[1];
      We(p, ur(t, d), o, a);
    });
  });
}
function ur(r, t) {
  var o = r;
  return t.split(Ye).forEach(function(a) {
    o.nextPart.has(a) || o.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(a);
  }), o;
}
function gt(r) {
  return r.isThemeGetter;
}
function bt(r, t) {
  return t ? r.map(function(o) {
    var a = o[0], i = o[1], l = i.map(function(c) {
      return typeof c == "string" ? t + c : typeof c == "object" ? Object.fromEntries(Object.entries(c).map(function(d) {
        var p = d[0], f = d[1];
        return [t + p, f];
      })) : c;
    });
    return [a, l];
  }) : r;
}
function ht(r) {
  if (r < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  function i(l, c) {
    o.set(l, c), t++, t > r && (t = 0, a = o, o = /* @__PURE__ */ new Map());
  }
  return {
    get: function(c) {
      var d = o.get(c);
      if (d !== void 0)
        return d;
      if ((d = a.get(c)) !== void 0)
        return i(c, d), d;
    },
    set: function(c, d) {
      o.has(c) ? o.set(c, d) : i(c, d);
    }
  };
}
var jr = "!";
function xt(r) {
  var t = r.separator || ":", o = t.length === 1, a = t[0], i = t.length;
  return function(c) {
    for (var d = [], p = 0, f = 0, m, v = 0; v < c.length; v++) {
      var x = c[v];
      if (p === 0) {
        if (x === a && (o || c.slice(v, v + i) === t)) {
          d.push(c.slice(f, v)), f = v + i;
          continue;
        }
        if (x === "/") {
          m = v;
          continue;
        }
      }
      x === "[" ? p++ : x === "]" && p--;
    }
    var _ = d.length === 0 ? c : c.substring(f), O = _.startsWith(jr), R = O ? _.substring(1) : _, P = m && m > f ? m - f : void 0;
    return {
      modifiers: d,
      hasImportantModifier: O,
      baseClassName: R,
      maybePostfixModifierPosition: P
    };
  };
}
function yt(r) {
  if (r.length <= 1)
    return r;
  var t = [], o = [];
  return r.forEach(function(a) {
    var i = a[0] === "[";
    i ? (t.push.apply(t, o.sort().concat([a])), o = []) : o.push(a);
  }), t.push.apply(t, o.sort()), t;
}
function wt(r) {
  return {
    cache: ht(r.cacheSize),
    splitModifiers: xt(r),
    ...pt(r)
  };
}
var jt = /\s+/;
function Ct(r, t) {
  var o = t.splitModifiers, a = t.getClassGroupId, i = t.getConflictingClassGroupIds, l = /* @__PURE__ */ new Set();
  return r.trim().split(jt).map(function(c) {
    var d = o(c), p = d.modifiers, f = d.hasImportantModifier, m = d.baseClassName, v = d.maybePostfixModifierPosition, x = a(v ? m.substring(0, v) : m), _ = !!v;
    if (!x) {
      if (!v)
        return {
          isTailwindClass: !1,
          originalClassName: c
        };
      if (x = a(m), !x)
        return {
          isTailwindClass: !1,
          originalClassName: c
        };
      _ = !1;
    }
    var O = yt(p).join(":"), R = f ? O + jr : O;
    return {
      isTailwindClass: !0,
      modifierId: R,
      classGroupId: x,
      originalClassName: c,
      hasPostfixModifier: _
    };
  }).reverse().filter(function(c) {
    if (!c.isTailwindClass)
      return !0;
    var d = c.modifierId, p = c.classGroupId, f = c.hasPostfixModifier, m = d + p;
    return l.has(m) ? !1 : (l.add(m), i(p, f).forEach(function(v) {
      return l.add(d + v);
    }), !0);
  }).reverse().map(function(c) {
    return c.originalClassName;
  }).join(" ");
}
function kt() {
  for (var r = arguments.length, t = new Array(r), o = 0; o < r; o++)
    t[o] = arguments[o];
  var a, i, l, c = d;
  function d(f) {
    var m = t[0], v = t.slice(1), x = v.reduce(function(_, O) {
      return O(_);
    }, m());
    return a = wt(x), i = a.cache.get, l = a.cache.set, c = p, p(f);
  }
  function p(f) {
    var m = i(f);
    if (m)
      return m;
    var v = Ct(f, a);
    return l(f, v), v;
  }
  return function() {
    return c(ft.apply(null, arguments));
  };
}
function E(r) {
  var t = function(a) {
    return a[r] || [];
  };
  return t.isThemeGetter = !0, t;
}
var Cr = /^\[(?:([a-z-]+):)?(.+)\]$/i, Nt = /^\d+\/\d+$/, Rt = /* @__PURE__ */ new Set(["px", "full", "screen"]), Et = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, _t = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Tt = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Y(r) {
  return de(r) || Rt.has(r) || Nt.test(r) || Ge(r);
}
function Ge(r) {
  return fe(r, "length", Mt);
}
function St(r) {
  return fe(r, "size", kr);
}
function Pt(r) {
  return fe(r, "position", kr);
}
function At(r) {
  return fe(r, "url", Lt);
}
function _e(r) {
  return fe(r, "number", de);
}
function de(r) {
  return !Number.isNaN(Number(r));
}
function Ot(r) {
  return r.endsWith("%") && de(r.slice(0, -1));
}
function Ce(r) {
  return fr(r) || fe(r, "number", fr);
}
function h(r) {
  return Cr.test(r);
}
function ke() {
  return !0;
}
function ae(r) {
  return Et.test(r);
}
function It(r) {
  return fe(r, "", Ft);
}
function fe(r, t, o) {
  var a = Cr.exec(r);
  return a ? a[1] ? a[1] === t : o(a[2]) : !1;
}
function Mt(r) {
  return _t.test(r);
}
function kr() {
  return !1;
}
function Lt(r) {
  return r.startsWith("url(");
}
function fr(r) {
  return Number.isInteger(Number(r));
}
function Ft(r) {
  return Tt.test(r);
}
function Dt() {
  var r = E("colors"), t = E("spacing"), o = E("blur"), a = E("brightness"), i = E("borderColor"), l = E("borderRadius"), c = E("borderSpacing"), d = E("borderWidth"), p = E("contrast"), f = E("grayscale"), m = E("hueRotate"), v = E("invert"), x = E("gap"), _ = E("gradientColorStops"), O = E("gradientColorStopPositions"), R = E("inset"), P = E("margin"), I = E("opacity"), j = E("padding"), pe = E("saturate"), ee = E("scale"), F = E("sepia"), W = E("skew"), re = E("space"), me = E("translate"), te = function() {
    return ["auto", "contain", "none"];
  }, se = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, V = function() {
    return ["auto", h, t];
  }, C = function() {
    return [h, t];
  }, L = function() {
    return ["", Y];
  }, D = function() {
    return ["auto", de, h];
  }, B = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, H = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, ne = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, Z = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, U = function() {
    return ["", "0", h];
  }, ie = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, q = function() {
    return [de, _e];
  }, Q = function() {
    return [de, h];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [ke],
      spacing: [Y],
      blur: ["none", "", ae, h],
      brightness: q(),
      borderColor: [r],
      borderRadius: ["none", "", "full", ae, h],
      borderSpacing: C(),
      borderWidth: L(),
      contrast: q(),
      grayscale: U(),
      hueRotate: Q(),
      invert: U(),
      gap: C(),
      gradientColorStops: [r],
      gradientColorStopPositions: [Ot, Ge],
      inset: V(),
      margin: V(),
      opacity: q(),
      padding: C(),
      saturate: q(),
      scale: q(),
      sepia: U(),
      skew: Q(),
      space: C(),
      translate: C()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", h]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ae]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ie()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ie()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [].concat(B(), [h])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: se()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": se()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": se()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: te()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": te()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": te()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [R]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [R]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [R]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [R]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [R]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [R]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [R]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [R]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [R]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Ce]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: V()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", h]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: U()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: U()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Ce]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ke]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ce]
        }, h]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": D()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": D()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ke]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ce]
        }, h]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": D()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": D()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", h]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", h]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [x]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [x]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [x]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(Z())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal"].concat(Z(), ["baseline"])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [].concat(Z(), ["baseline"])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [j]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [j]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [j]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [j]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [j]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [j]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [j]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [j]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [j]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [P]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [P]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [P]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [P]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [P]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [P]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [P]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [P]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [P]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [re]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [re]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", h, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", h, Y]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [ae]
        }, ae, h]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [h, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", h, Y]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [h, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ae, Ge]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", _e]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ke]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", h]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", de, _e]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", h, Y]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", h]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", h]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [r]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [I]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [r]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [I]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [].concat(H(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Y]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", h, Y]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [r]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: C()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", h]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", h]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [I]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [].concat(B(), [Pt])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", St]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, At]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [r]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [O]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [O]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [O]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [_]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [_]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [_]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [l]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [l]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [l]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [l]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [l]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [l]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [l]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [l]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [l]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [l]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [l]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [l]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [l]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [l]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [l]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [d]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [d]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [d]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [d]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [d]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [d]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [d]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [d]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [d]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [I]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(H(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [d]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [d]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [I]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: H()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [i]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [i]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [i]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [i]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [i]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [i]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [i]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [i]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(H())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [h, Y]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Y]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [r]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: L()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [r]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [I]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Y]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [r]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", ae, It]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ke]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [I]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": ne()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ne()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [o]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [a]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [p]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", ae, h]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [f]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [m]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [v]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [pe]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [F]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [o]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [a]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [p]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [f]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [m]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [v]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [I]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [pe]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [F]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [c]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [c]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [c]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", h]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Q()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", h]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Q()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", h]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [ee]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [ee]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [ee]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Ce, h]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [me]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [me]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [W]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [W]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", h]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", r]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", h]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [r]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": C()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": C()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": C()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": C()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": C()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": C()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": C()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": C()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": C()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": C()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": C()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": C()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": C()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": C()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": C()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": C()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": C()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": C()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", h]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [r, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Y, _e]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [r, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
var zt = /* @__PURE__ */ kt(Dt);
function K(...r) {
  return zt(xr(r));
}
const Pe = T.forwardRef(({ className: r, ...t }, o) => /* @__PURE__ */ n.jsx(
  "div",
  {
    ref: o,
    className: K(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      r
    ),
    ...t
  }
));
Pe.displayName = "Card";
const Nr = T.forwardRef(({ className: r, ...t }, o) => /* @__PURE__ */ n.jsx(
  "div",
  {
    ref: o,
    className: K("flex flex-col space-y-1.5 p-6", r),
    ...t
  }
));
Nr.displayName = "CardHeader";
const Rr = T.forwardRef(({ className: r, ...t }, o) => /* @__PURE__ */ n.jsx(
  "h3",
  {
    ref: o,
    className: K(
      "text-2xl font-semibold leading-none tracking-tight",
      r
    ),
    ...t
  }
));
Rr.displayName = "CardTitle";
const $t = T.forwardRef(({ className: r, ...t }, o) => /* @__PURE__ */ n.jsx(
  "p",
  {
    ref: o,
    className: K("text-sm text-muted-foreground", r),
    ...t
  }
));
$t.displayName = "CardDescription";
const Er = T.forwardRef(({ className: r, ...t }, o) => /* @__PURE__ */ n.jsx("div", { ref: o, className: K("p-6 pt-0", r), ...t }));
Er.displayName = "CardContent";
const Wt = T.forwardRef(({ className: r, ...t }, o) => /* @__PURE__ */ n.jsx(
  "div",
  {
    ref: o,
    className: K("flex items-center p-6 pt-0", r),
    ...t
  }
));
Wt.displayName = "CardFooter";
function Qt({ steps: r, currentStep: t, className: o }) {
  return /* @__PURE__ */ n.jsx(Pe, { className: `p-6 ${o || ""}`, children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-center relative", children: [
    /* @__PURE__ */ n.jsx("h3", { className: "font-semibold text-gray-900 absolute left-0", children: "Progress" }),
    /* @__PURE__ */ n.jsx("div", { className: "flex items-center space-x-8", children: r.map((a, i) => /* @__PURE__ */ n.jsxs(Be.Fragment, { children: [
      /* @__PURE__ */ n.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ n.jsx("div", { className: "relative", children: a.status === "current" ? /* @__PURE__ */ n.jsx("div", { className: "w-8 h-8 rounded-full border-2 border-blue-500 bg-blue-500 flex items-center justify-center", children: /* @__PURE__ */ n.jsx("div", { className: "w-3 h-3 rounded-full bg-white" }) }) : a.status === "completed" ? /* @__PURE__ */ n.jsx(Te, { className: "w-8 h-8 text-green-500" }) : /* @__PURE__ */ n.jsx("div", { className: "w-8 h-8 rounded-full border-2 border-gray-300 bg-white" }) }),
        /* @__PURE__ */ n.jsx("span", { className: `text-sm font-medium ${a.status === "current" ? "text-blue-600" : "text-gray-900"}`, children: a.label })
      ] }),
      i < r.length - 1 && /* @__PURE__ */ n.jsx("div", { className: "w-12 h-0.5 bg-gray-200" })
    ] }, a.id)) })
  ] }) });
}
function pr(r, t) {
  if (typeof r == "function")
    return r(t);
  r != null && (r.current = t);
}
function Gt(...r) {
  return (t) => {
    let o = !1;
    const a = r.map((i) => {
      const l = pr(i, t);
      return !o && typeof l == "function" && (o = !0), l;
    });
    if (o)
      return () => {
        for (let i = 0; i < a.length; i++) {
          const l = a[i];
          typeof l == "function" ? l() : pr(r[i], null);
        }
      };
  };
}
// @__NO_SIDE_EFFECTS__
function Vt(r) {
  const t = /* @__PURE__ */ Yt(r), o = T.forwardRef((a, i) => {
    const { children: l, ...c } = a, d = T.Children.toArray(l), p = d.find(qt);
    if (p) {
      const f = p.props.children, m = d.map((v) => v === p ? T.Children.count(f) > 1 ? T.Children.only(null) : T.isValidElement(f) ? f.props.children : null : v);
      return /* @__PURE__ */ n.jsx(t, { ...c, ref: i, children: T.isValidElement(f) ? T.cloneElement(f, void 0, m) : null });
    }
    return /* @__PURE__ */ n.jsx(t, { ...c, ref: i, children: l });
  });
  return o.displayName = `${r}.Slot`, o;
}
var Bt = /* @__PURE__ */ Vt("Slot");
// @__NO_SIDE_EFFECTS__
function Yt(r) {
  const t = T.forwardRef((o, a) => {
    const { children: i, ...l } = o;
    if (T.isValidElement(i)) {
      const c = Jt(i), d = Xt(l, i.props);
      return i.type !== T.Fragment && (d.ref = a ? Gt(a, c) : c), T.cloneElement(i, d);
    }
    return T.Children.count(i) > 1 ? T.Children.only(null) : null;
  });
  return t.displayName = `${r}.SlotClone`, t;
}
var Ut = Symbol("radix.slottable");
function qt(r) {
  return T.isValidElement(r) && typeof r.type == "function" && "__radixId" in r.type && r.type.__radixId === Ut;
}
function Xt(r, t) {
  const o = { ...t };
  for (const a in t) {
    const i = r[a], l = t[a];
    /^on[A-Z]/.test(a) ? i && l ? o[a] = (...d) => {
      const p = l(...d);
      return i(...d), p;
    } : i && (o[a] = i) : a === "style" ? o[a] = { ...i, ...l } : a === "className" && (o[a] = [i, l].filter(Boolean).join(" "));
  }
  return { ...r, ...o };
}
function Jt(r) {
  var a, i;
  let t = (a = Object.getOwnPropertyDescriptor(r.props, "ref")) == null ? void 0 : a.get, o = t && "isReactWarning" in t && t.isReactWarning;
  return o ? r.ref : (t = (i = Object.getOwnPropertyDescriptor(r, "ref")) == null ? void 0 : i.get, o = t && "isReactWarning" in t && t.isReactWarning, o ? r.props.ref : r.props.ref || r.ref);
}
const mr = (r) => typeof r == "boolean" ? `${r}` : r === 0 ? "0" : r, vr = xr, _r = (r, t) => (o) => {
  var a;
  if ((t == null ? void 0 : t.variants) == null)
    return vr(r, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
  const { variants: i, defaultVariants: l } = t, c = Object.keys(i).map((f) => {
    const m = o == null ? void 0 : o[f], v = l == null ? void 0 : l[f];
    if (m === null)
      return null;
    const x = mr(m) || mr(v);
    return i[f][x];
  }), d = o && Object.entries(o).reduce((f, m) => {
    let [v, x] = m;
    return x === void 0 || (f[v] = x), f;
  }, {}), p = t == null || (a = t.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((f, m) => {
    let { class: v, className: x, ..._ } = m;
    return Object.entries(_).every((O) => {
      let [R, P] = O;
      return Array.isArray(P) ? P.includes({
        ...l,
        ...d
      }[R]) : {
        ...l,
        ...d
      }[R] === P;
    }) ? [
      ...f,
      v,
      x
    ] : f;
  }, []);
  return vr(r, c, p, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
}, Kt = _r(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Se = T.forwardRef(
  ({ className: r, variant: t, size: o, asChild: a = !1, ...i }, l) => {
    const c = a ? Bt : "button";
    return /* @__PURE__ */ n.jsx(
      c,
      {
        className: K(Kt({ variant: t, size: o, className: r })),
        ref: l,
        ...i
      }
    );
  }
);
Se.displayName = "Button";
const Tr = T.forwardRef(
  ({ className: r, type: t, ...o }, a) => /* @__PURE__ */ n.jsx(
    "input",
    {
      type: t,
      className: K(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        r
      ),
      ref: a,
      ...o
    }
  )
);
Tr.displayName = "Input";
const Ve = T.forwardRef(
  ({ className: r, ...t }, o) => /* @__PURE__ */ n.jsx(
    "textarea",
    {
      className: K(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        r
      ),
      ref: o,
      ...t
    }
  )
);
Ve.displayName = "Textarea";
const Ht = _r(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function gr({ className: r, variant: t, ...o }) {
  return /* @__PURE__ */ n.jsx("div", { className: K(Ht({ variant: t }), r), ...o });
}
function ze({
  type: r,
  title: t,
  description: o,
  icon: a,
  onFileUpload: i,
  onLinkedInUrl: l,
  required: c = !1,
  optional: d = !1,
  disabled: p = !1,
  currentValue: f,
  onUploadComplete: m
}) {
  const [v, x] = be(!1), [_, O] = be(""), [R, P] = be(f || ""), [I, j] = be(null), [pe, ee] = be(null), [F, W] = be(null);
  tt(() => {
    r === "coverLetter" && f && P(f);
  }, [f, r]);
  const re = ({ message: N }) => /* @__PURE__ */ n.jsxs("div", { className: "flex items-center gap-2 text-red-600 text-sm mt-2", children: [
    /* @__PURE__ */ n.jsx(lt, { className: "w-4 h-4" }),
    /* @__PURE__ */ n.jsx("span", { children: N })
  ] }), me = I !== null, te = typeof R == "string" && R.trim().length >= 10, se = me && te, V = f && (r === "resume" || r === "coverLetter" || r === "caseStudies" ? f instanceof File : r === "linkedin" ? typeof f == "string" && f.length > 0 : !1) || I !== null, C = oe((N) => {
    N.preventDefault(), x(!0);
  }, []), L = oe((N) => {
    N.preventDefault(), x(!1);
  }, []), D = oe((N) => {
    N.preventDefault(), x(!1);
    const X = Array.from(N.dataTransfer.files);
    if (X.length === 0)
      return;
    const J = X[0];
    Z(J);
  }, []), B = oe((N) => {
    var J;
    const X = (J = N.target.files) == null ? void 0 : J[0];
    X && Z(X);
  }, []), H = oe((N) => {
    O(N.target.value), F && W(null);
  }, [F]), ne = oe((N) => {
    P(N.target.value), F && W(null);
  }, [F]), Z = oe((N) => {
    var le;
    if (!i)
      return;
    W(null);
    const X = 5 * 1024 * 1024;
    if (N.size > X) {
      W("File size must be less than 5MB");
      return;
    }
    const J = [".pdf", ".docx", ".txt", ".md"], he = "." + ((le = N.name.split(".").pop()) == null ? void 0 : le.toLowerCase());
    if (!J.includes(he)) {
      W("File type must be PDF, DOCX, TXT, or MD");
      return;
    }
    i(r, N), ee(N.name), j(`${N.name}_${Date.now()}`), m == null || m(`${N.name}_${Date.now()}`, r);
  }, [i, r, m]), U = oe(() => {
    if (!l)
      return;
    W(null);
    const N = _.trim();
    if (!/^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/.test(N)) {
      W("Please enter a valid LinkedIn profile URL (e.g., https://linkedin.com/in/username)");
      return;
    }
    l(N), j(`linkedin_${Date.now()}`), m == null || m(`linkedin_${Date.now()}`, "linkedin");
  }, [_, l, m]), ie = () => /* @__PURE__ */ n.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: `border-2 border-dashed rounded-lg p-6 text-center transition-colors ${v ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"}`,
        onDragOver: C,
        onDragLeave: L,
        onDrop: D,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ n.jsx(cr, { className: "w-12 h-12 text-gray-400" }) }),
          /* @__PURE__ */ n.jsx("p", { className: "text-gray-600 mb-6", children: "Drag and drop your file here, or" }),
          /* @__PURE__ */ n.jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ n.jsx(
              "input",
              {
                type: "file",
                className: "hidden",
                accept: ".pdf,.docx,.txt,.md",
                onChange: B,
                id: `${r}-file`
              }
            ),
            /* @__PURE__ */ n.jsx(
              "label",
              {
                htmlFor: `${r}-file`,
                className: "inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer",
                children: "Choose File"
              }
            )
          ] }),
          /* @__PURE__ */ n.jsx("p", { className: "text-sm text-gray-500", children: "PDF, DOCX, TXT, MD (max 5MB)" }),
          F && /* @__PURE__ */ n.jsx(re, { message: F })
        ]
      }
    ),
    r === "resume" && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ n.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ n.jsx("div", { className: "w-full border-t border-gray-300" }) }),
        /* @__PURE__ */ n.jsx("div", { className: "relative flex justify-center text-sm", children: /* @__PURE__ */ n.jsx("span", { className: "px-2 bg-white text-gray-500", children: "OR" }) })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ n.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Paste resume content directly for fast and reliable processing" }),
        /* @__PURE__ */ n.jsx(
          Ve,
          {
            placeholder: "Paste your resume content here...",
            value: typeof R == "string" ? R : "",
            onChange: ne,
            rows: 3
          }
        )
      ] })
    ] })
  ] }), q = () => /* @__PURE__ */ n.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ n.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ n.jsx("label", { className: "text-sm font-medium text-gray-700", children: "LinkedIn Profile URL" }),
    /* @__PURE__ */ n.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ n.jsx(
        Tr,
        {
          type: "url",
          placeholder: "https://linkedin.com/in/yourprofile",
          value: _,
          onChange: H,
          className: "flex-1"
        }
      ),
      /* @__PURE__ */ n.jsx(
        Se,
        {
          onClick: U,
          disabled: !_.trim(),
          size: "sm",
          variant: "secondary",
          children: "Connect"
        }
      )
    ] }),
    V && /* @__PURE__ */ n.jsx("p", { className: "text-sm text-green-600", children: "Valid LinkedIn URL" }),
    F && /* @__PURE__ */ n.jsx(re, { message: F })
  ] }) }), Q = () => /* @__PURE__ */ n.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: `border-2 border-dashed rounded-lg p-6 text-center transition-colors ${v ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"}`,
        onDragOver: C,
        onDragLeave: L,
        onDrop: D,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ n.jsx(cr, { className: "w-12 h-12 text-gray-400" }) }),
          /* @__PURE__ */ n.jsx("p", { className: "text-gray-600 mb-6", children: "Drag and drop your file here, or" }),
          /* @__PURE__ */ n.jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ n.jsx(
              "input",
              {
                type: "file",
                className: "hidden",
                accept: ".pdf,.docx,.txt,.md",
                onChange: B,
                id: "cover-letter-file"
              }
            ),
            /* @__PURE__ */ n.jsx(
              "label",
              {
                htmlFor: "cover-letter-file",
                className: "inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer",
                children: "Choose File"
              }
            )
          ] }),
          /* @__PURE__ */ n.jsx("p", { className: "text-sm text-gray-500", children: "PDF, DOCX, TXT, MD (max 5MB)" }),
          F && /* @__PURE__ */ n.jsx(re, { message: F })
        ]
      }
    ),
    /* @__PURE__ */ n.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ n.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ n.jsx("div", { className: "w-full border-t border-gray-300" }) }),
      /* @__PURE__ */ n.jsx("div", { className: "relative flex justify-center text-sm", children: /* @__PURE__ */ n.jsx("span", { className: "px-2 bg-white text-gray-500", children: "OR" }) })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ n.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Or paste cover letter content directly for fast and reliable processing" }),
      /* @__PURE__ */ n.jsx(
        Ve,
        {
          placeholder: "Paste your best cover letter content here...",
          value: typeof R == "string" ? R : "",
          onChange: ne,
          rows: 3
        }
      )
    ] }),
    se && /* @__PURE__ */ n.jsxs("div", { className: "flex items-center gap-2 text-blue-600 text-sm bg-blue-50 p-3 rounded-lg", children: [
      /* @__PURE__ */ n.jsx("div", { className: "w-2 h-2 bg-blue-600 rounded-full" }),
      /* @__PURE__ */ n.jsx("span", { children: "You have both a file and text. We'll combine them into one submission." })
    ] })
  ] }), M = () => r === "linkedin" ? q() : r === "coverLetter" ? Q() : ie();
  return /* @__PURE__ */ n.jsxs(Pe, { className: `transition-all duration-200 ${V ? "ring-2 ring-green-200 bg-green-50" : ""} ${p ? "opacity-50 pointer-events-none" : ""}`, children: [
    /* @__PURE__ */ n.jsx(Nr, { className: "pb-4 -mx-6 -mt-6 px-6 pt-6", children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ n.jsx("div", { className: `w-12 h-12 rounded-lg flex items-center justify-center ${V ? "bg-green-100" : "bg-gray-100"}`, children: /* @__PURE__ */ n.jsx(a, { className: `w-6 h-6 ${V ? "text-green-600" : "text-gray-600"}` }) }),
      /* @__PURE__ */ n.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ n.jsxs(Rr, { className: "text-lg text-gray-900 flex items-center gap-2", children: [
          t,
          c && /* @__PURE__ */ n.jsx(gr, { variant: "destructive", className: "text-xs", children: "Required" }),
          d && /* @__PURE__ */ n.jsx(gr, { variant: "secondary", className: "text-xs", children: "Optional" })
        ] }),
        /* @__PURE__ */ n.jsx("p", { className: "text-gray-600", children: o })
      ] })
    ] }) }),
    /* @__PURE__ */ n.jsx(Er, { children: V && r !== "linkedin" ? /* @__PURE__ */ n.jsx("div", { className: "space-y-3", children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg border", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ n.jsx("div", { className: "w-8 h-8 bg-blue-100 rounded flex items-center justify-center", children: /* @__PURE__ */ n.jsx(br, { className: "w-4 h-4 text-blue-600" }) }),
        /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "font-medium text-gray-900", children: pe || "File uploaded" }) })
      ] }),
      /* @__PURE__ */ n.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ n.jsx(
        Se,
        {
          variant: "outline",
          size: "sm",
          onClick: () => {
            j(null), ee(null), W(null), i == null || i(r, null);
          },
          className: "text-gray-600 border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:underline",
          children: "Remove"
        }
      ) })
    ] }) }) : M() })
  ] });
}
function en({
  currentStep: r,
  onFileUpload: t,
  onLinkedInUrl: o,
  onUploadComplete: a,
  onNextStep: i,
  isProcessing: l = !1,
  onboardingData: c,
  linkedinUrl: d
}) {
  return /* @__PURE__ */ n.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ n.jsx(Pe, { className: "p-6", children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-center relative", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "font-semibold text-gray-900 absolute left-0", children: "Progress" }),
      /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-8", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ n.jsx("div", { className: "relative", children: r === "welcome" ? /* @__PURE__ */ n.jsx("div", { className: "w-8 h-8 rounded-full border-2 border-blue-500 bg-blue-500 flex items-center justify-center", children: /* @__PURE__ */ n.jsx("div", { className: "w-3 h-3 rounded-full bg-white" }) }) : /* @__PURE__ */ n.jsx(Te, { className: "w-8 h-8 text-green-500" }) }),
          /* @__PURE__ */ n.jsx("span", { className: `text-sm font-medium ${r === "welcome" ? "text-blue-600" : "text-gray-900"}`, children: "Welcome" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "w-12 h-0.5 bg-gray-200" }),
        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ n.jsx("div", { className: "relative", children: r === "upload" ? /* @__PURE__ */ n.jsx("div", { className: "w-8 h-8 rounded-full border-2 border-blue-500 bg-blue-500 flex items-center justify-center", children: /* @__PURE__ */ n.jsx("div", { className: "w-3 h-3 rounded-full bg-white" }) }) : r === "welcome" ? /* @__PURE__ */ n.jsx("div", { className: "w-8 h-8 rounded-full border-2 border-gray-300 bg-white" }) : /* @__PURE__ */ n.jsx(Te, { className: "w-8 h-8 text-green-500" }) }),
          /* @__PURE__ */ n.jsx("span", { className: `text-sm font-medium ${r === "upload" ? "text-blue-600" : "text-gray-900"}`, children: "Content" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "w-12 h-0.5 bg-gray-200" }),
        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ n.jsx("div", { className: "relative", children: r === "review" ? /* @__PURE__ */ n.jsx("div", { className: "w-8 h-8 rounded-full border-2 border-blue-500 bg-blue-500 flex items-center justify-center", children: /* @__PURE__ */ n.jsx("div", { className: "w-3 h-3 rounded-full bg-white" }) }) : ["welcome", "upload"].includes(r) ? /* @__PURE__ */ n.jsx("div", { className: "w-8 h-8 rounded-full border-2 border-gray-300 bg-white" }) : /* @__PURE__ */ n.jsx(Te, { className: "w-8 h-8 text-green-500" }) }),
          /* @__PURE__ */ n.jsx("span", { className: `text-sm font-medium ${r === "review" ? "text-blue-600" : "text-gray-900"}`, children: "Review" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ n.jsx("div", { className: "text-center space-y-4", children: /* @__PURE__ */ n.jsx("h2", { className: "text-3xl font-bold text-foreground", children: "Add Your Content" }) }),
    /* @__PURE__ */ n.jsxs("div", { className: "flex flex-col gap-6", children: [
      /* @__PURE__ */ n.jsx(
        ze,
        {
          type: "resume",
          title: "Resume",
          description: "",
          icon: br,
          onFileUpload: t,
          onUploadComplete: a,
          currentValue: c.resume
        }
      ),
      /* @__PURE__ */ n.jsx(
        ze,
        {
          type: "linkedin",
          title: "LinkedIn Profile",
          description: "Enter your LinkedIn profile URL to import work history and skills",
          icon: dt,
          onLinkedInUrl: o,
          onUploadComplete: a,
          currentValue: d
        }
      ),
      /* @__PURE__ */ n.jsx(
        ze,
        {
          type: "coverLetter",
          title: "Best Cover Letter",
          description: "",
          icon: ut,
          onFileUpload: t,
          onUploadComplete: a,
          currentValue: c.coverLetter
        }
      )
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: "text-center", children: /* @__PURE__ */ n.jsx(
      Se,
      {
        size: "lg",
        onClick: i,
        disabled: !c.resume || !c.coverLetter && !c.coverLetterFile,
        className: "px-8 py-3 text-lg",
        children: l ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          /* @__PURE__ */ n.jsx("div", { className: "animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" }),
          "Analyzing..."
        ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          "Review & Approve",
          /* @__PURE__ */ n.jsx(ct, { className: "ml-2 w-5 h-5" })
        ] })
      }
    ) })
  ] });
}
export {
  gr as Badge,
  Se as Button,
  Pe as Card,
  Er as CardContent,
  $t as CardDescription,
  Wt as CardFooter,
  Nr as CardHeader,
  Rr as CardTitle,
  en as ContentUploadModule,
  ze as FileUploadCard,
  Tr as Input,
  Qt as ProgressBar,
  Ve as Textarea,
  Ht as badgeVariants,
  Kt as buttonVariants
};
