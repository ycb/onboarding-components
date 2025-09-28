import * as _ from "react";
import Ye, { forwardRef as Ur, createElement as sr, useState as de, useEffect as Qr, useCallback as re } from "react";
var We = { exports: {} }, Re = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lr;
function et() {
  if (lr)
    return Re;
  lr = 1;
  var r = Ye, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(c, p, v) {
    var g, f = {}, b = null, T = null;
    v !== void 0 && (b = "" + v), p.key !== void 0 && (b = "" + p.key), p.ref !== void 0 && (T = p.ref);
    for (g in p)
      o.call(p, g) && !l.hasOwnProperty(g) && (f[g] = p[g]);
    if (c && c.defaultProps)
      for (g in p = c.defaultProps, p)
        f[g] === void 0 && (f[g] = p[g]);
    return { $$typeof: t, type: c, key: b, ref: T, props: f, _owner: s.current };
  }
  return Re.Fragment = n, Re.jsx = d, Re.jsxs = d, Re;
}
var ke = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cr;
function rt() {
  return cr || (cr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Ye, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), c = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), O = Symbol.iterator, S = "@@iterator";
    function M(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = O && e[O] || e[S];
      return typeof a == "function" ? a : null;
    }
    var N = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(e) {
      {
        for (var a = arguments.length, u = new Array(a > 1 ? a - 1 : 0), m = 1; m < a; m++)
          u[m - 1] = arguments[m];
        ae("error", e, u);
      }
    }
    function ae(e, a, u) {
      {
        var m = N.ReactDebugCurrentFrame, C = m.getStackAddendum();
        C !== "" && (a += "%s", u = u.concat([C]));
        var k = u.map(function(j) {
          return String(j);
        });
        k.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, k);
      }
    }
    var U = !1, te = !1, pe = !1, ge = !1, ie = !1, F;
    F = Symbol.for("react.module.reference");
    function W(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === l || ie || e === s || e === v || e === g || ge || e === T || U || te || pe || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === f || e.$$typeof === d || e.$$typeof === c || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === F || e.getModuleId !== void 0));
    }
    function Q(e, a, u) {
      var m = e.displayName;
      if (m)
        return m;
      var C = a.displayName || a.name || "";
      return C !== "" ? u + "(" + C + ")" : u;
    }
    function y(e) {
      return e.displayName || "Context";
    }
    function A(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case l:
          return "Profiler";
        case s:
          return "StrictMode";
        case v:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            var a = e;
            return y(a) + ".Consumer";
          case d:
            var u = e;
            return y(u._context) + ".Provider";
          case p:
            return Q(e, e.render, "ForwardRef");
          case f:
            var m = e.displayName || null;
            return m !== null ? m : A(e.type) || "Memo";
          case b: {
            var C = e, k = C._payload, j = C._init;
            try {
              return A(j(k));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, G = 0, J, ne, ee, Y, se, X, K;
    function D() {
    }
    D.__reactDisabledLog = !0;
    function Oe() {
      {
        if (G === 0) {
          J = console.log, ne = console.info, ee = console.warn, Y = console.error, se = console.group, X = console.groupCollapsed, K = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: D,
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
        G++;
      }
    }
    function Ae() {
      {
        if (G--, G === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, e, {
              value: J
            }),
            info: L({}, e, {
              value: ne
            }),
            warn: L({}, e, {
              value: ee
            }),
            error: L({}, e, {
              value: Y
            }),
            group: L({}, e, {
              value: se
            }),
            groupCollapsed: L({}, e, {
              value: X
            }),
            groupEnd: L({}, e, {
              value: K
            })
          });
        }
        G < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var xe = N.ReactCurrentDispatcher, ye;
    function ve(e, a, u) {
      {
        if (ye === void 0)
          try {
            throw Error();
          } catch (C) {
            var m = C.stack.trim().match(/\n( *(at )?)/);
            ye = m && m[1] || "";
          }
        return `
` + ye + e;
      }
    }
    var we = !1, me;
    {
      var w = typeof WeakMap == "function" ? WeakMap : Map;
      me = new w();
    }
    function $(e, a) {
      if (!e || we)
        return "";
      {
        var u = me.get(e);
        if (u !== void 0)
          return u;
      }
      var m;
      we = !0;
      var C = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var k;
      k = xe.current, xe.current = null, Oe();
      try {
        if (a) {
          var j = function() {
            throw Error();
          };
          if (Object.defineProperty(j.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(j, []);
            } catch (V) {
              m = V;
            }
            Reflect.construct(e, [], j);
          } else {
            try {
              j.call();
            } catch (V) {
              m = V;
            }
            e.call(j.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (V) {
            m = V;
          }
          e();
        }
      } catch (V) {
        if (V && m && typeof V.stack == "string") {
          for (var h = V.stack.split(`
`), z = m.stack.split(`
`), P = h.length - 1, I = z.length - 1; P >= 1 && I >= 0 && h[P] !== z[I]; )
            I--;
          for (; P >= 1 && I >= 0; P--, I--)
            if (h[P] !== z[I]) {
              if (P !== 1 || I !== 1)
                do
                  if (P--, I--, I < 0 || h[P] !== z[I]) {
                    var B = `
` + h[P].replace(" at new ", " at ");
                    return e.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", e.displayName)), typeof e == "function" && me.set(e, B), B;
                  }
                while (P >= 1 && I >= 0);
              break;
            }
        }
      } finally {
        we = !1, xe.current = k, Ae(), Error.prepareStackTrace = C;
      }
      var he = e ? e.displayName || e.name : "", ce = he ? ve(he) : "";
      return typeof e == "function" && me.set(e, ce), ce;
    }
    function H(e, a, u) {
      return $(e, !1);
    }
    function Ie(e) {
      var a = e.prototype;
      return !!(a && a.isReactComponent);
    }
    function le(e, a, u) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return $(e, Ie(e));
      if (typeof e == "string")
        return ve(e);
      switch (e) {
        case v:
          return ve("Suspense");
        case g:
          return ve("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return H(e.render);
          case f:
            return le(e.type, a, u);
          case b: {
            var m = e, C = m._payload, k = m._init;
            try {
              return le(k(C), a, u);
            } catch {
            }
          }
        }
      return "";
    }
    var je = Object.prototype.hasOwnProperty, Je = {}, Ke = N.ReactDebugCurrentFrame;
    function Se(e) {
      if (e) {
        var a = e._owner, u = le(e.type, e._source, a ? a.type : null);
        Ke.setExtraStackFrame(u);
      } else
        Ke.setExtraStackFrame(null);
    }
    function Tr(e, a, u, m, C) {
      {
        var k = Function.call.bind(je);
        for (var j in e)
          if (k(e, j)) {
            var h = void 0;
            try {
              if (typeof e[j] != "function") {
                var z = Error((m || "React class") + ": " + u + " type `" + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[j] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              h = e[j](a, j, m, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (P) {
              h = P;
            }
            h && !(h instanceof Error) && (Se(C), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", m || "React class", u, j, typeof h), Se(null)), h instanceof Error && !(h.message in Je) && (Je[h.message] = !0, Se(C), R("Failed %s type: %s", u, h.message), Se(null));
          }
      }
    }
    var Pr = Array.isArray;
    function Me(e) {
      return Pr(e);
    }
    function Or(e) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, u = a && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u;
      }
    }
    function Ar(e) {
      try {
        return He(e), !1;
      } catch {
        return !0;
      }
    }
    function He(e) {
      return "" + e;
    }
    function Ze(e) {
      if (Ar(e))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Or(e)), He(e);
    }
    var Ce = N.ReactCurrentOwner, Ir = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ue, Qe, De;
    De = {};
    function Mr(e) {
      if (je.call(e, "ref")) {
        var a = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Dr(e) {
      if (je.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Fr(e, a) {
      if (typeof e.ref == "string" && Ce.current && a && Ce.current.stateNode !== a) {
        var u = A(Ce.current.type);
        De[u] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(Ce.current.type), e.ref), De[u] = !0);
      }
    }
    function Lr(e, a) {
      {
        var u = function() {
          Ue || (Ue = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function $r(e, a) {
      {
        var u = function() {
          Qe || (Qe = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var zr = function(e, a, u, m, C, k, j) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: a,
        ref: u,
        props: j,
        // Record the component responsible for creating this element.
        _owner: k
      };
      return h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(h, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: m
      }), Object.defineProperty(h, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function Wr(e, a, u, m, C) {
      {
        var k, j = {}, h = null, z = null;
        u !== void 0 && (Ze(u), h = "" + u), Dr(a) && (Ze(a.key), h = "" + a.key), Mr(a) && (z = a.ref, Fr(a, C));
        for (k in a)
          je.call(a, k) && !Ir.hasOwnProperty(k) && (j[k] = a[k]);
        if (e && e.defaultProps) {
          var P = e.defaultProps;
          for (k in P)
            j[k] === void 0 && (j[k] = P[k]);
        }
        if (h || z) {
          var I = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          h && Lr(j, I), z && $r(j, I);
        }
        return zr(e, h, z, C, m, Ce.current, j);
      }
    }
    var Fe = N.ReactCurrentOwner, er = N.ReactDebugCurrentFrame;
    function be(e) {
      if (e) {
        var a = e._owner, u = le(e.type, e._source, a ? a.type : null);
        er.setExtraStackFrame(u);
      } else
        er.setExtraStackFrame(null);
    }
    var Le;
    Le = !1;
    function $e(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function rr() {
      {
        if (Fe.current) {
          var e = A(Fe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Gr(e) {
      {
        if (e !== void 0) {
          var a = e.fileName.replace(/^.*[\\\/]/, ""), u = e.lineNumber;
          return `

Check your code at ` + a + ":" + u + ".";
        }
        return "";
      }
    }
    var tr = {};
    function Vr(e) {
      {
        var a = rr();
        if (!a) {
          var u = typeof e == "string" ? e : e.displayName || e.name;
          u && (a = `

Check the top-level render call using <` + u + ">.");
        }
        return a;
      }
    }
    function nr(e, a) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var u = Vr(a);
        if (tr[u])
          return;
        tr[u] = !0;
        var m = "";
        e && e._owner && e._owner !== Fe.current && (m = " It was passed a child from " + A(e._owner.type) + "."), be(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, m), be(null);
      }
    }
    function or(e, a) {
      {
        if (typeof e != "object")
          return;
        if (Me(e))
          for (var u = 0; u < e.length; u++) {
            var m = e[u];
            $e(m) && nr(m, a);
          }
        else if ($e(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var C = M(e);
          if (typeof C == "function" && C !== e.entries)
            for (var k = C.call(e), j; !(j = k.next()).done; )
              $e(j.value) && nr(j.value, a);
        }
      }
    }
    function Br(e) {
      {
        var a = e.type;
        if (a == null || typeof a == "string")
          return;
        var u;
        if (typeof a == "function")
          u = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === f))
          u = a.propTypes;
        else
          return;
        if (u) {
          var m = A(a);
          Tr(u, e.props, "prop", m, e);
        } else if (a.PropTypes !== void 0 && !Le) {
          Le = !0;
          var C = A(a);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", C || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Yr(e) {
      {
        for (var a = Object.keys(e.props), u = 0; u < a.length; u++) {
          var m = a[u];
          if (m !== "children" && m !== "key") {
            be(e), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", m), be(null);
            break;
          }
        }
        e.ref !== null && (be(e), R("Invalid attribute `ref` supplied to `React.Fragment`."), be(null));
      }
    }
    var ar = {};
    function ir(e, a, u, m, C, k) {
      {
        var j = W(e);
        if (!j) {
          var h = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = Gr(C);
          z ? h += z : h += rr();
          var P;
          e === null ? P = "null" : Me(e) ? P = "array" : e !== void 0 && e.$$typeof === t ? (P = "<" + (A(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : P = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", P, h);
        }
        var I = Wr(e, a, u, C, k);
        if (I == null)
          return I;
        if (j) {
          var B = a.children;
          if (B !== void 0)
            if (m)
              if (Me(B)) {
                for (var he = 0; he < B.length; he++)
                  or(B[he], e);
                Object.freeze && Object.freeze(B);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              or(B, e);
        }
        if (je.call(a, "key")) {
          var ce = A(e), V = Object.keys(a).filter(function(Zr) {
            return Zr !== "key";
          }), ze = V.length > 0 ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ar[ce + ze]) {
            var Hr = V.length > 0 ? "{" + V.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ze, ce, Hr, ce), ar[ce + ze] = !0;
          }
        }
        return e === o ? Yr(I) : Br(I), I;
      }
    }
    function Xr(e, a, u) {
      return ir(e, a, u, !0);
    }
    function qr(e, a, u) {
      return ir(e, a, u, !1);
    }
    var Jr = qr, Kr = Xr;
    ke.Fragment = o, ke.jsx = Jr, ke.jsxs = Kr;
  }()), ke;
}
process.env.NODE_ENV === "production" ? We.exports = et() : We.exports = rt();
var i = We.exports, tt = {
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
const nt = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ot = (r, t) => {
  const n = Ur(
    ({ color: o = "currentColor", size: s = 24, strokeWidth: l = 2, absoluteStrokeWidth: d, children: c, ...p }, v) => sr(
      "svg",
      {
        ref: v,
        ...tt,
        width: s,
        height: s,
        stroke: o,
        strokeWidth: d ? Number(l) * 24 / Number(s) : l,
        className: `lucide lucide-${nt(r)}`,
        ...p
      },
      [
        ...t.map(([g, f]) => sr(g, f)),
        ...(Array.isArray(c) ? c : [c]) || []
      ]
    )
  );
  return n.displayName = `${r}`, n;
};
var Pe = ot;
const at = Pe("AlertTriangle", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
      key: "c3ski4"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]), it = Pe("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["polyline", { points: "22 4 12 14.01 9 11.01", key: "6xbx8j" }]
]), st = Pe("FileText", [
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
]), dr = Pe("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
]);
function hr(r) {
  var t, n, o = "";
  if (typeof r == "string" || typeof r == "number")
    o += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var s = r.length;
      for (t = 0; t < s; t++)
        r[t] && (n = hr(r[t])) && (o && (o += " "), o += n);
    } else
      for (n in r)
        r[n] && (o && (o += " "), o += n);
  return o;
}
function xr() {
  for (var r, t, n = 0, o = "", s = arguments.length; n < s; n++)
    (r = arguments[n]) && (t = hr(r)) && (o && (o += " "), o += t);
  return o;
}
function lt() {
  for (var r = 0, t, n, o = ""; r < arguments.length; )
    (t = arguments[r++]) && (n = yr(t)) && (o && (o += " "), o += n);
  return o;
}
function yr(r) {
  if (typeof r == "string")
    return r;
  for (var t, n = "", o = 0; o < r.length; o++)
    r[o] && (t = yr(r[o])) && (n && (n += " "), n += t);
  return n;
}
var Xe = "-";
function ct(r) {
  var t = ut(r), n = r.conflictingClassGroups, o = r.conflictingClassGroupModifiers, s = o === void 0 ? {} : o;
  function l(c) {
    var p = c.split(Xe);
    return p[0] === "" && p.length !== 1 && p.shift(), wr(p, t) || dt(c);
  }
  function d(c, p) {
    var v = n[c] || [];
    return p && s[c] ? [].concat(v, s[c]) : v;
  }
  return {
    getClassGroupId: l,
    getConflictingClassGroupIds: d
  };
}
function wr(r, t) {
  var d;
  if (r.length === 0)
    return t.classGroupId;
  var n = r[0], o = t.nextPart.get(n), s = o ? wr(r.slice(1), o) : void 0;
  if (s)
    return s;
  if (t.validators.length !== 0) {
    var l = r.join(Xe);
    return (d = t.validators.find(function(c) {
      var p = c.validator;
      return p(l);
    })) == null ? void 0 : d.classGroupId;
  }
}
var ur = /^\[(.+)\]$/;
function dt(r) {
  if (ur.test(r)) {
    var t = ur.exec(r)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function ut(r) {
  var t = r.theme, n = r.prefix, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, s = pt(Object.entries(r.classGroups), n);
  return s.forEach(function(l) {
    var d = l[0], c = l[1];
    Ge(c, o, d, t);
  }), o;
}
function Ge(r, t, n, o) {
  r.forEach(function(s) {
    if (typeof s == "string") {
      var l = s === "" ? t : fr(t, s);
      l.classGroupId = n;
      return;
    }
    if (typeof s == "function") {
      if (ft(s)) {
        Ge(s(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: n
      });
      return;
    }
    Object.entries(s).forEach(function(d) {
      var c = d[0], p = d[1];
      Ge(p, fr(t, c), n, o);
    });
  });
}
function fr(r, t) {
  var n = r;
  return t.split(Xe).forEach(function(o) {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}
function ft(r) {
  return r.isThemeGetter;
}
function pt(r, t) {
  return t ? r.map(function(n) {
    var o = n[0], s = n[1], l = s.map(function(d) {
      return typeof d == "string" ? t + d : typeof d == "object" ? Object.fromEntries(Object.entries(d).map(function(c) {
        var p = c[0], v = c[1];
        return [t + p, v];
      })) : d;
    });
    return [o, l];
  }) : r;
}
function gt(r) {
  if (r < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  function s(l, d) {
    n.set(l, d), t++, t > r && (t = 0, o = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get: function(d) {
      var c = n.get(d);
      if (c !== void 0)
        return c;
      if ((c = o.get(d)) !== void 0)
        return s(d, c), c;
    },
    set: function(d, c) {
      n.has(d) ? n.set(d, c) : s(d, c);
    }
  };
}
var jr = "!";
function vt(r) {
  var t = r.separator || ":", n = t.length === 1, o = t[0], s = t.length;
  return function(d) {
    for (var c = [], p = 0, v = 0, g, f = 0; f < d.length; f++) {
      var b = d[f];
      if (p === 0) {
        if (b === o && (n || d.slice(f, f + s) === t)) {
          c.push(d.slice(v, f)), v = f + s;
          continue;
        }
        if (b === "/") {
          g = f;
          continue;
        }
      }
      b === "[" ? p++ : b === "]" && p--;
    }
    var T = c.length === 0 ? d : d.substring(v), O = T.startsWith(jr), S = O ? T.substring(1) : T, M = g && g > v ? g - v : void 0;
    return {
      modifiers: c,
      hasImportantModifier: O,
      baseClassName: S,
      maybePostfixModifierPosition: M
    };
  };
}
function mt(r) {
  if (r.length <= 1)
    return r;
  var t = [], n = [];
  return r.forEach(function(o) {
    var s = o[0] === "[";
    s ? (t.push.apply(t, n.sort().concat([o])), n = []) : n.push(o);
  }), t.push.apply(t, n.sort()), t;
}
function bt(r) {
  return {
    cache: gt(r.cacheSize),
    splitModifiers: vt(r),
    ...ct(r)
  };
}
var ht = /\s+/;
function xt(r, t) {
  var n = t.splitModifiers, o = t.getClassGroupId, s = t.getConflictingClassGroupIds, l = /* @__PURE__ */ new Set();
  return r.trim().split(ht).map(function(d) {
    var c = n(d), p = c.modifiers, v = c.hasImportantModifier, g = c.baseClassName, f = c.maybePostfixModifierPosition, b = o(f ? g.substring(0, f) : g), T = !!f;
    if (!b) {
      if (!f)
        return {
          isTailwindClass: !1,
          originalClassName: d
        };
      if (b = o(g), !b)
        return {
          isTailwindClass: !1,
          originalClassName: d
        };
      T = !1;
    }
    var O = mt(p).join(":"), S = v ? O + jr : O;
    return {
      isTailwindClass: !0,
      modifierId: S,
      classGroupId: b,
      originalClassName: d,
      hasPostfixModifier: T
    };
  }).reverse().filter(function(d) {
    if (!d.isTailwindClass)
      return !0;
    var c = d.modifierId, p = d.classGroupId, v = d.hasPostfixModifier, g = c + p;
    return l.has(g) ? !1 : (l.add(g), s(p, v).forEach(function(f) {
      return l.add(c + f);
    }), !0);
  }).reverse().map(function(d) {
    return d.originalClassName;
  }).join(" ");
}
function yt() {
  for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
    t[n] = arguments[n];
  var o, s, l, d = c;
  function c(v) {
    var g = t[0], f = t.slice(1), b = f.reduce(function(T, O) {
      return O(T);
    }, g());
    return o = bt(b), s = o.cache.get, l = o.cache.set, d = p, p(v);
  }
  function p(v) {
    var g = s(v);
    if (g)
      return g;
    var f = xt(v, o);
    return l(v, f), f;
  }
  return function() {
    return d(lt.apply(null, arguments));
  };
}
function E(r) {
  var t = function(o) {
    return o[r] || [];
  };
  return t.isThemeGetter = !0, t;
}
var Cr = /^\[(?:([a-z-]+):)?(.+)\]$/i, wt = /^\d+\/\d+$/, jt = /* @__PURE__ */ new Set(["px", "full", "screen"]), Ct = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Rt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, kt = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function q(r) {
  return ue(r) || jt.has(r) || wt.test(r) || Ve(r);
}
function Ve(r) {
  return fe(r, "length", Pt);
}
function Nt(r) {
  return fe(r, "size", Rr);
}
function Et(r) {
  return fe(r, "position", Rr);
}
function St(r) {
  return fe(r, "url", Ot);
}
function _e(r) {
  return fe(r, "number", ue);
}
function ue(r) {
  return !Number.isNaN(Number(r));
}
function _t(r) {
  return r.endsWith("%") && ue(r.slice(0, -1));
}
function Ne(r) {
  return pr(r) || fe(r, "number", pr);
}
function x(r) {
  return Cr.test(r);
}
function Ee() {
  return !0;
}
function oe(r) {
  return Ct.test(r);
}
function Tt(r) {
  return fe(r, "", At);
}
function fe(r, t, n) {
  var o = Cr.exec(r);
  return o ? o[1] ? o[1] === t : n(o[2]) : !1;
}
function Pt(r) {
  return Rt.test(r);
}
function Rr() {
  return !1;
}
function Ot(r) {
  return r.startsWith("url(");
}
function pr(r) {
  return Number.isInteger(Number(r));
}
function At(r) {
  return kt.test(r);
}
function It() {
  var r = E("colors"), t = E("spacing"), n = E("blur"), o = E("brightness"), s = E("borderColor"), l = E("borderRadius"), d = E("borderSpacing"), c = E("borderWidth"), p = E("contrast"), v = E("grayscale"), g = E("hueRotate"), f = E("invert"), b = E("gap"), T = E("gradientColorStops"), O = E("gradientColorStopPositions"), S = E("inset"), M = E("margin"), N = E("opacity"), R = E("padding"), ae = E("saturate"), U = E("scale"), te = E("sepia"), pe = E("skew"), ge = E("space"), ie = E("translate"), F = function() {
    return ["auto", "contain", "none"];
  }, W = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, Q = function() {
    return ["auto", x, t];
  }, y = function() {
    return [x, t];
  }, A = function() {
    return ["", q];
  }, L = function() {
    return ["auto", ue, x];
  }, G = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, J = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, ne = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, ee = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, Y = function() {
    return ["", "0", x];
  }, se = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, X = function() {
    return [ue, _e];
  }, K = function() {
    return [ue, x];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Ee],
      spacing: [q],
      blur: ["none", "", oe, x],
      brightness: X(),
      borderColor: [r],
      borderRadius: ["none", "", "full", oe, x],
      borderSpacing: y(),
      borderWidth: A(),
      contrast: X(),
      grayscale: Y(),
      hueRotate: K(),
      invert: Y(),
      gap: y(),
      gradientColorStops: [r],
      gradientColorStopPositions: [_t, Ve],
      inset: Q(),
      margin: Q(),
      opacity: X(),
      padding: y(),
      saturate: X(),
      scale: X(),
      sepia: Y(),
      skew: K(),
      space: y(),
      translate: y()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", x]
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
        columns: [oe]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": se()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": se()
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
        object: [].concat(G(), [x])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: W()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": W()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": W()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: F()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": F()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": F()
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
        inset: [S]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [S]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [S]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [S]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [S]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [S]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [S]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [S]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [S]
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
        z: ["auto", Ne]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: Q()
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
        flex: ["1", "auto", "initial", "none", x]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: Y()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Y()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Ne]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Ee]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ne]
        }, x]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": L()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": L()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Ee]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ne]
        }, x]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": L()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": L()
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
        "auto-cols": ["auto", "min", "max", "fr", x]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", x]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [b]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [b]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [b]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(ee())
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
        content: ["normal"].concat(ee(), ["baseline"])
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
        "place-content": [].concat(ee(), ["baseline"])
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
        p: [R]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [R]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [R]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [R]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [R]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [R]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [R]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [R]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [R]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [M]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [M]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [M]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [M]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [M]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [M]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [M]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [M]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [M]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [ge]
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
        "space-y": [ge]
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
        w: ["auto", "min", "max", "fit", x, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", x, q]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [oe]
        }, oe, x]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [x, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", x, q]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [x, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", oe, Ve]
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
        font: [Ee]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", x]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ue, _e]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", x, q]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", x]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", x]
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
        "placeholder-opacity": [N]
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
        "text-opacity": [N]
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
        decoration: [].concat(J(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", q]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", x, q]
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
        indent: y()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", x]
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
        content: ["none", x]
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
        "bg-opacity": [N]
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
        bg: [].concat(G(), [Et])
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
        bg: ["auto", "cover", "contain", Nt]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, St]
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
        from: [T]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [T]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [T]
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
        border: [c]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [c]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [c]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [c]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [c]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [c]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [c]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [c]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [c]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [N]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(J(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [c]
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
        "divide-y": [c]
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
        "divide-opacity": [N]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: J()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [s]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [s]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [s]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [s]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [s]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [s]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [s]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [s]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(J())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [x, q]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [q]
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
        ring: A()
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
        "ring-opacity": [N]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [q]
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
        shadow: ["", "inner", "none", oe, Tt]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Ee]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [N]
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
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [o]
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
        "drop-shadow": ["", "none", oe, x]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [v]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [g]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ae]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [te]
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
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [o]
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
        "backdrop-grayscale": [v]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [g]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [f]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [N]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ae]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [te]
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
        "border-spacing": [d]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [d]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [d]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", x]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: K()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", x]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: K()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", x]
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
        scale: [U]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [U]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [U]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Ne, x]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [ie]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [ie]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [pe]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [pe]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", x]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", x]
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
        "scroll-m": y()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": y()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": y()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": y()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": y()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": y()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": y()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": y()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": y()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": y()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": y()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": y()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": y()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": y()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": y()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": y()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": y()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": y()
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
        "will-change": ["auto", "scroll", "contents", "transform", x]
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
        stroke: [q, _e]
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
var Mt = /* @__PURE__ */ yt(It);
function Z(...r) {
  return Mt(xr(r));
}
const qe = _.forwardRef(({ className: r, ...t }, n) => /* @__PURE__ */ i.jsx(
  "div",
  {
    ref: n,
    className: Z(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      r
    ),
    ...t
  }
));
qe.displayName = "Card";
const kr = _.forwardRef(({ className: r, ...t }, n) => /* @__PURE__ */ i.jsx(
  "div",
  {
    ref: n,
    className: Z("flex flex-col space-y-1.5 p-6", r),
    ...t
  }
));
kr.displayName = "CardHeader";
const Nr = _.forwardRef(({ className: r, ...t }, n) => /* @__PURE__ */ i.jsx(
  "h3",
  {
    ref: n,
    className: Z(
      "text-2xl font-semibold leading-none tracking-tight",
      r
    ),
    ...t
  }
));
Nr.displayName = "CardTitle";
const Dt = _.forwardRef(({ className: r, ...t }, n) => /* @__PURE__ */ i.jsx(
  "p",
  {
    ref: n,
    className: Z("text-sm text-muted-foreground", r),
    ...t
  }
));
Dt.displayName = "CardDescription";
const Er = _.forwardRef(({ className: r, ...t }, n) => /* @__PURE__ */ i.jsx("div", { ref: n, className: Z("p-6 pt-0", r), ...t }));
Er.displayName = "CardContent";
const Ft = _.forwardRef(({ className: r, ...t }, n) => /* @__PURE__ */ i.jsx(
  "div",
  {
    ref: n,
    className: Z("flex items-center p-6 pt-0", r),
    ...t
  }
));
Ft.displayName = "CardFooter";
function Kt({ steps: r, currentStep: t, className: n }) {
  return /* @__PURE__ */ i.jsx(qe, { className: `p-6 ${n || ""}`, children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-center relative", children: [
    /* @__PURE__ */ i.jsx("h3", { className: "font-semibold text-gray-900 absolute left-0", children: "Progress" }),
    /* @__PURE__ */ i.jsx("div", { className: "flex items-center space-x-8", children: r.map((o, s) => /* @__PURE__ */ i.jsxs(Ye.Fragment, { children: [
      /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ i.jsx("div", { className: "relative", children: o.status === "current" ? /* @__PURE__ */ i.jsx("div", { className: "w-8 h-8 rounded-full border-2 border-blue-500 bg-blue-500 flex items-center justify-center", children: /* @__PURE__ */ i.jsx("div", { className: "w-3 h-3 rounded-full bg-white" }) }) : o.status === "completed" ? /* @__PURE__ */ i.jsx(it, { className: "w-8 h-8 text-green-500" }) : /* @__PURE__ */ i.jsx("div", { className: "w-8 h-8 rounded-full border-2 border-gray-300 bg-white" }) }),
        /* @__PURE__ */ i.jsx("span", { className: `text-sm font-medium ${o.status === "current" ? "text-blue-600" : "text-gray-900"}`, children: o.label })
      ] }),
      s < r.length - 1 && /* @__PURE__ */ i.jsx("div", { className: "w-12 h-0.5 bg-gray-200" })
    ] }, o.id)) })
  ] }) });
}
function gr(r, t) {
  if (typeof r == "function")
    return r(t);
  r != null && (r.current = t);
}
function Lt(...r) {
  return (t) => {
    let n = !1;
    const o = r.map((s) => {
      const l = gr(s, t);
      return !n && typeof l == "function" && (n = !0), l;
    });
    if (n)
      return () => {
        for (let s = 0; s < o.length; s++) {
          const l = o[s];
          typeof l == "function" ? l() : gr(r[s], null);
        }
      };
  };
}
// @__NO_SIDE_EFFECTS__
function $t(r) {
  const t = /* @__PURE__ */ Wt(r), n = _.forwardRef((o, s) => {
    const { children: l, ...d } = o, c = _.Children.toArray(l), p = c.find(Vt);
    if (p) {
      const v = p.props.children, g = c.map((f) => f === p ? _.Children.count(v) > 1 ? _.Children.only(null) : _.isValidElement(v) ? v.props.children : null : f);
      return /* @__PURE__ */ i.jsx(t, { ...d, ref: s, children: _.isValidElement(v) ? _.cloneElement(v, void 0, g) : null });
    }
    return /* @__PURE__ */ i.jsx(t, { ...d, ref: s, children: l });
  });
  return n.displayName = `${r}.Slot`, n;
}
var zt = /* @__PURE__ */ $t("Slot");
// @__NO_SIDE_EFFECTS__
function Wt(r) {
  const t = _.forwardRef((n, o) => {
    const { children: s, ...l } = n;
    if (_.isValidElement(s)) {
      const d = Yt(s), c = Bt(l, s.props);
      return s.type !== _.Fragment && (c.ref = o ? Lt(o, d) : d), _.cloneElement(s, c);
    }
    return _.Children.count(s) > 1 ? _.Children.only(null) : null;
  });
  return t.displayName = `${r}.SlotClone`, t;
}
var Gt = Symbol("radix.slottable");
function Vt(r) {
  return _.isValidElement(r) && typeof r.type == "function" && "__radixId" in r.type && r.type.__radixId === Gt;
}
function Bt(r, t) {
  const n = { ...t };
  for (const o in t) {
    const s = r[o], l = t[o];
    /^on[A-Z]/.test(o) ? s && l ? n[o] = (...c) => {
      const p = l(...c);
      return s(...c), p;
    } : s && (n[o] = s) : o === "style" ? n[o] = { ...s, ...l } : o === "className" && (n[o] = [s, l].filter(Boolean).join(" "));
  }
  return { ...r, ...n };
}
function Yt(r) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(r.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? r.ref : (t = (s = Object.getOwnPropertyDescriptor(r, "ref")) == null ? void 0 : s.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? r.props.ref : r.props.ref || r.ref);
}
const vr = (r) => typeof r == "boolean" ? `${r}` : r === 0 ? "0" : r, mr = xr, Sr = (r, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null)
    return mr(r, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: s, defaultVariants: l } = t, d = Object.keys(s).map((v) => {
    const g = n == null ? void 0 : n[v], f = l == null ? void 0 : l[v];
    if (g === null)
      return null;
    const b = vr(g) || vr(f);
    return s[v][b];
  }), c = n && Object.entries(n).reduce((v, g) => {
    let [f, b] = g;
    return b === void 0 || (v[f] = b), v;
  }, {}), p = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((v, g) => {
    let { class: f, className: b, ...T } = g;
    return Object.entries(T).every((O) => {
      let [S, M] = O;
      return Array.isArray(M) ? M.includes({
        ...l,
        ...c
      }[S]) : {
        ...l,
        ...c
      }[S] === M;
    }) ? [
      ...v,
      f,
      b
    ] : v;
  }, []);
  return mr(r, d, p, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Xt = Sr(
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
), Te = _.forwardRef(
  ({ className: r, variant: t, size: n, asChild: o = !1, ...s }, l) => {
    const d = o ? zt : "button";
    return /* @__PURE__ */ i.jsx(
      d,
      {
        className: Z(Xt({ variant: t, size: n, className: r })),
        ref: l,
        ...s
      }
    );
  }
);
Te.displayName = "Button";
const _r = _.forwardRef(
  ({ className: r, type: t, ...n }, o) => /* @__PURE__ */ i.jsx(
    "input",
    {
      type: t,
      className: Z(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        r
      ),
      ref: o,
      ...n
    }
  )
);
_r.displayName = "Input";
const Be = _.forwardRef(
  ({ className: r, ...t }, n) => /* @__PURE__ */ i.jsx(
    "textarea",
    {
      className: Z(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        r
      ),
      ref: n,
      ...t
    }
  )
);
Be.displayName = "Textarea";
const qt = Sr(
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
function br({ className: r, variant: t, ...n }) {
  return /* @__PURE__ */ i.jsx("div", { className: Z(qt({ variant: t }), r), ...n });
}
function Ht({
  type: r,
  title: t,
  description: n,
  icon: o,
  onFileUpload: s,
  onLinkedInUrl: l,
  onTextInput: d,
  required: c = !1,
  optional: p = !1,
  disabled: v = !1,
  currentValue: g,
  onUploadComplete: f,
  onUploadError: b
}) {
  const [T, O] = de(!1), [S, M] = de(""), [N, R] = de(g || ""), [ae, U] = de(null), [te, pe] = de(null), [ge, ie] = de(null), [F, W] = de(null);
  Qr(() => {
    r === "coverLetter" && g && R(g);
  }, [g, r]);
  const Q = ({ message: w }) => /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2 text-red-600 text-sm mt-2", children: [
    /* @__PURE__ */ i.jsx(at, { className: "w-4 h-4" }),
    /* @__PURE__ */ i.jsx("span", { children: w })
  ] }), y = ae !== null, A = typeof N == "string" && N.trim().length >= 10, L = y && A, G = g && (r === "resume" || r === "coverLetter" || r === "caseStudies" ? g instanceof File : r === "linkedin" ? typeof g == "string" && g.length > 0 : !1) || ae !== null, J = re((w) => {
    w.preventDefault(), O(!0);
  }, []), ne = re((w) => {
    w.preventDefault(), O(!1);
  }, []), ee = re((w) => {
    w.preventDefault(), O(!1);
    const $ = Array.from(w.dataTransfer.files);
    if ($.length === 0)
      return;
    const H = $[0];
    K(H);
  }, []), Y = re((w) => {
    var H;
    const $ = (H = w.target.files) == null ? void 0 : H[0];
    $ && K($);
  }, []), se = re((w) => {
    M(w.target.value), F && W(null);
  }, [F]), X = re((w) => {
    R(w.target.value), F && W(null);
  }, [F]), K = re((w) => {
    var le;
    if (!s)
      return;
    W(null);
    const $ = 5 * 1024 * 1024;
    if (w.size > $) {
      W("File size must be less than 5MB");
      return;
    }
    const H = [".pdf", ".docx", ".txt", ".md"], Ie = "." + ((le = w.name.split(".").pop()) == null ? void 0 : le.toLowerCase());
    if (!H.includes(Ie)) {
      W("File type must be PDF, DOCX, TXT, or MD");
      return;
    }
    s(r, w), ie(w.name), U(`${w.name}_${Date.now()}`), f == null || f(`${w.name}_${Date.now()}`, r);
  }, [s, r, f]), D = re(() => {
    if (!l)
      return;
    W(null);
    const w = S.trim();
    if (!/^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/.test(w)) {
      W("Please enter a valid LinkedIn profile URL (e.g., https://linkedin.com/in/username)");
      return;
    }
    l(w), U(`linkedin_${Date.now()}`), f == null || f(`linkedin_${Date.now()}`, "linkedin");
  }, [S, l, f]), Oe = re(async () => {
    if (!y && !A) {
      b == null || b("Please upload a file or enter text");
      return;
    }
    try {
      let w, $;
      L ? (w = `${te}

--- Additional Context ---
${N}`, $ = "Combined file and text") : y ? (w = te, $ = "Uploaded file") : (w = typeof N == "string" ? N : "", $ = "Manual text"), console.log(`Processing ${$}:`, { length: w.length }), await new Promise((H) => setTimeout(H, 1e3)), d == null || d(w), f == null || f(`${r}_${Date.now()}`, r);
    } catch (w) {
      b == null || b(w instanceof Error ? w.message : "Failed to save content");
    }
  }, [y, A, L, te, N, d, f, b, r]), Ae = () => L ? "Combine File & Text" : y ? "Process Uploaded File" : "Add Cover Letter Text", xe = () => !y && !A, ye = () => /* @__PURE__ */ i.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `border-2 border-dashed rounded-lg p-6 text-center transition-colors ${T ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"}`,
        onDragOver: J,
        onDragLeave: ne,
        onDrop: ee,
        children: [
          /* @__PURE__ */ i.jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ i.jsx(dr, { className: "w-12 h-12 text-gray-400" }) }),
          /* @__PURE__ */ i.jsx("p", { className: "text-gray-600 mb-6", children: "Drag and drop your file here, or" }),
          /* @__PURE__ */ i.jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "file",
                className: "hidden",
                accept: ".pdf,.docx,.txt,.md",
                onChange: Y,
                id: `${r}-file`
              }
            ),
            /* @__PURE__ */ i.jsx(
              "label",
              {
                htmlFor: `${r}-file`,
                className: "inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer",
                children: "Choose File"
              }
            )
          ] }),
          /* @__PURE__ */ i.jsx("p", { className: "text-sm text-gray-500", children: "PDF, DOCX, TXT, MD (max 5MB)" }),
          F && /* @__PURE__ */ i.jsx(Q, { message: F })
        ]
      }
    ),
    r === "resume" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ i.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ i.jsx("div", { className: "w-full border-t border-gray-300" }) }),
        /* @__PURE__ */ i.jsx("div", { className: "relative flex justify-center text-sm", children: /* @__PURE__ */ i.jsx("span", { className: "px-2 bg-white text-gray-500", children: "OR" }) })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ i.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Paste resume content directly for fast and reliable processing" }),
        /* @__PURE__ */ i.jsx(
          Be,
          {
            placeholder: "Paste your resume content here...",
            value: typeof N == "string" ? N : "",
            onChange: X,
            rows: 3
          }
        )
      ] })
    ] })
  ] }), ve = () => /* @__PURE__ */ i.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ i.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ i.jsx("label", { className: "text-sm font-medium text-gray-700", children: "LinkedIn Profile URL" }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ i.jsx(
        _r,
        {
          type: "url",
          placeholder: "https://linkedin.com/in/yourprofile",
          value: S,
          onChange: se,
          className: "flex-1"
        }
      ),
      /* @__PURE__ */ i.jsx(
        Te,
        {
          onClick: D,
          disabled: !S.trim(),
          size: "sm",
          variant: "secondary",
          children: "Connect"
        }
      )
    ] }),
    G && /* @__PURE__ */ i.jsx("p", { className: "text-sm text-green-600", children: "Valid LinkedIn URL" }),
    F && /* @__PURE__ */ i.jsx(Q, { message: F })
  ] }) }), we = () => /* @__PURE__ */ i.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `border-2 border-dashed rounded-lg p-6 text-center transition-colors ${T ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"}`,
        onDragOver: J,
        onDragLeave: ne,
        onDrop: ee,
        children: [
          /* @__PURE__ */ i.jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ i.jsx(dr, { className: "w-12 h-12 text-gray-400" }) }),
          /* @__PURE__ */ i.jsx("p", { className: "text-gray-600 mb-6", children: "Drag and drop your file here, or" }),
          /* @__PURE__ */ i.jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "file",
                className: "hidden",
                accept: ".pdf,.docx,.txt,.md",
                onChange: Y,
                id: "cover-letter-file"
              }
            ),
            /* @__PURE__ */ i.jsx(
              "label",
              {
                htmlFor: "cover-letter-file",
                className: "inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer",
                children: "Choose File"
              }
            )
          ] }),
          /* @__PURE__ */ i.jsx("p", { className: "text-sm text-gray-500", children: "PDF, DOCX, TXT, MD (max 5MB)" }),
          F && /* @__PURE__ */ i.jsx(Q, { message: F })
        ]
      }
    ),
    /* @__PURE__ */ i.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ i.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ i.jsx("div", { className: "w-full border-t border-gray-300" }) }),
      /* @__PURE__ */ i.jsx("div", { className: "relative flex justify-center text-sm", children: /* @__PURE__ */ i.jsx("span", { className: "px-2 bg-white text-gray-500", children: "OR" }) })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ i.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Or paste cover letter content directly for fast and reliable processing" }),
      /* @__PURE__ */ i.jsx(
        Be,
        {
          placeholder: "Paste your best cover letter content here...",
          value: typeof N == "string" ? N : "",
          onChange: X,
          rows: 3
        }
      )
    ] }),
    L && /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2 text-blue-600 text-sm bg-blue-50 p-3 rounded-lg", children: [
      /* @__PURE__ */ i.jsx("div", { className: "w-2 h-2 bg-blue-600 rounded-full" }),
      /* @__PURE__ */ i.jsx("span", { children: "You have both a file and text. We'll combine them into one submission." })
    ] }),
    (A || y) && /* @__PURE__ */ i.jsx(
      Te,
      {
        onClick: Oe,
        disabled: xe(),
        className: "w-full",
        children: Ae()
      }
    )
  ] }), me = () => r === "linkedin" ? ve() : r === "coverLetter" ? we() : ye();
  return /* @__PURE__ */ i.jsxs(qe, { className: `transition-all duration-200 ${G ? "ring-2 ring-green-200 bg-green-50" : ""} ${v ? "opacity-50 pointer-events-none" : ""}`, children: [
    /* @__PURE__ */ i.jsx(kr, { className: "pb-4 -mx-6 -mt-6 px-6 pt-6", children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ i.jsx("div", { className: `w-12 h-12 rounded-lg flex items-center justify-center ${G ? "bg-green-100" : "bg-gray-100"}`, children: /* @__PURE__ */ i.jsx(o, { className: `w-6 h-6 ${G ? "text-green-600" : "text-gray-600"}` }) }),
      /* @__PURE__ */ i.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ i.jsxs(Nr, { className: "text-lg text-gray-900 flex items-center gap-2", children: [
          t,
          c && /* @__PURE__ */ i.jsx(br, { variant: "destructive", className: "text-xs", children: "Required" }),
          p && /* @__PURE__ */ i.jsx(br, { variant: "secondary", className: "text-xs", children: "Optional" })
        ] }),
        /* @__PURE__ */ i.jsx("p", { className: "text-gray-600", children: n })
      ] })
    ] }) }),
    /* @__PURE__ */ i.jsx(Er, { children: G && r !== "linkedin" ? /* @__PURE__ */ i.jsx("div", { className: "space-y-3", children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg border", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ i.jsx("div", { className: "w-8 h-8 bg-blue-100 rounded flex items-center justify-center", children: /* @__PURE__ */ i.jsx(st, { className: "w-4 h-4 text-blue-600" }) }),
        /* @__PURE__ */ i.jsx("div", { children: /* @__PURE__ */ i.jsx("p", { className: "font-medium text-gray-900", children: ge || "File uploaded" }) })
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ i.jsx(
        Te,
        {
          variant: "outline",
          size: "sm",
          onClick: () => {
            U(null), ie(null), pe(null), W(null), s == null || s(r, null);
          },
          className: "text-gray-600 border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:underline",
          children: "Remove"
        }
      ) })
    ] }) }) : me() })
  ] });
}
export {
  br as Badge,
  Te as Button,
  qe as Card,
  Er as CardContent,
  Dt as CardDescription,
  Ft as CardFooter,
  kr as CardHeader,
  Nr as CardTitle,
  Ht as FileUploadCard,
  _r as Input,
  Kt as ProgressBar,
  Be as Textarea,
  qt as badgeVariants,
  Xt as buttonVariants
};
