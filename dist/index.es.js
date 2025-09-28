import * as _ from "react";
import $e, { forwardRef as Zr, createElement as nr, useState as ve, useCallback as de } from "react";
var De = { exports: {} }, ge = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var or;
function Qr() {
  if (or)
    return ge;
  or = 1;
  var r = $e, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(l, f, p) {
    var v, g = {}, m = null, T = null;
    p !== void 0 && (m = "" + p), f.key !== void 0 && (m = "" + f.key), f.ref !== void 0 && (T = f.ref);
    for (v in f)
      o.call(f, v) && !s.hasOwnProperty(v) && (g[v] = f[v]);
    if (l && l.defaultProps)
      for (v in f = l.defaultProps, f)
        g[v] === void 0 && (g[v] = f[v]);
    return { $$typeof: t, type: l, key: m, ref: T, props: g, _owner: i.current };
  }
  return ge.Fragment = n, ge.jsx = u, ge.jsxs = u, ge;
}
var be = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ar;
function et() {
  return ar || (ar = 1, process.env.NODE_ENV !== "production" && function() {
    var r = $e, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), l = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), A = Symbol.iterator, S = "@@iterator";
    function O(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = A && e[A] || e[S];
      return typeof a == "function" ? a : null;
    }
    var I = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(e) {
      {
        for (var a = arguments.length, c = new Array(a > 1 ? a - 1 : 0), b = 1; b < a; b++)
          c[b - 1] = arguments[b];
        ae("error", e, c);
      }
    }
    function ae(e, a, c) {
      {
        var b = I.ReactDebugCurrentFrame, j = b.getStackAddendum();
        j !== "" && (a += "%s", c = c.concat([j]));
        var k = c.map(function(x) {
          return String(x);
        });
        k.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, k);
      }
    }
    var X = !1, ie = !1, se = !1, le = !1, D = !1, J;
    J = Symbol.for("react.module.reference");
    function Z(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === s || D || e === i || e === p || e === v || le || e === T || X || ie || se || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === g || e.$$typeof === u || e.$$typeof === l || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === J || e.getModuleId !== void 0));
    }
    function Q(e, a, c) {
      var b = e.displayName;
      if (b)
        return b;
      var j = a.displayName || a.name || "";
      return j !== "" ? c + "(" + j + ")" : c;
    }
    function C(e) {
      return e.displayName || "Context";
    }
    function L(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case p:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            var a = e;
            return C(a) + ".Consumer";
          case u:
            var c = e;
            return C(c._context) + ".Provider";
          case f:
            return Q(e, e.render, "ForwardRef");
          case g:
            var b = e.displayName || null;
            return b !== null ? b : L(e.type) || "Memo";
          case m: {
            var j = e, k = j._payload, x = j._init;
            try {
              return L(x(k));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, B = 0, q, ee, K, R, F, H, re;
    function M() {
    }
    M.__reactDisabledLog = !0;
    function kr() {
      {
        if (B === 0) {
          q = console.log, ee = console.info, K = console.warn, R = console.error, F = console.group, H = console.groupCollapsed, re = console.groupEnd;
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
    function Er() {
      {
        if (B--, B === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, e, {
              value: q
            }),
            info: z({}, e, {
              value: ee
            }),
            warn: z({}, e, {
              value: K
            }),
            error: z({}, e, {
              value: R
            }),
            group: z({}, e, {
              value: F
            }),
            groupCollapsed: z({}, e, {
              value: H
            }),
            groupEnd: z({}, e, {
              value: re
            })
          });
        }
        B < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ee = I.ReactCurrentDispatcher, Se;
    function ye(e, a, c) {
      {
        if (Se === void 0)
          try {
            throw Error();
          } catch (j) {
            var b = j.stack.trim().match(/\n( *(at )?)/);
            Se = b && b[1] || "";
          }
        return `
` + Se + e;
      }
    }
    var _e = !1, xe;
    {
      var Sr = typeof WeakMap == "function" ? WeakMap : Map;
      xe = new Sr();
    }
    function Ve(e, a) {
      if (!e || _e)
        return "";
      {
        var c = xe.get(e);
        if (c !== void 0)
          return c;
      }
      var b;
      _e = !0;
      var j = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var k;
      k = Ee.current, Ee.current = null, kr();
      try {
        if (a) {
          var x = function() {
            throw Error();
          };
          if (Object.defineProperty(x.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(x, []);
            } catch ($) {
              b = $;
            }
            Reflect.construct(e, [], x);
          } else {
            try {
              x.call();
            } catch ($) {
              b = $;
            }
            e.call(x.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($) {
            b = $;
          }
          e();
        }
      } catch ($) {
        if ($ && b && typeof $.stack == "string") {
          for (var h = $.stack.split(`
`), W = b.stack.split(`
`), N = h.length - 1, P = W.length - 1; N >= 1 && P >= 0 && h[N] !== W[P]; )
            P--;
          for (; N >= 1 && P >= 0; N--, P--)
            if (h[N] !== W[P]) {
              if (N !== 1 || P !== 1)
                do
                  if (N--, P--, P < 0 || h[N] !== W[P]) {
                    var G = `
` + h[N].replace(" at new ", " at ");
                    return e.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", e.displayName)), typeof e == "function" && xe.set(e, G), G;
                  }
                while (N >= 1 && P >= 0);
              break;
            }
        }
      } finally {
        _e = !1, Ee.current = k, Er(), Error.prepareStackTrace = j;
      }
      var ue = e ? e.displayName || e.name : "", te = ue ? ye(ue) : "";
      return typeof e == "function" && xe.set(e, te), te;
    }
    function _r(e, a, c) {
      return Ve(e, !1);
    }
    function Tr(e) {
      var a = e.prototype;
      return !!(a && a.isReactComponent);
    }
    function we(e, a, c) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ve(e, Tr(e));
      if (typeof e == "string")
        return ye(e);
      switch (e) {
        case p:
          return ye("Suspense");
        case v:
          return ye("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return _r(e.render);
          case g:
            return we(e.type, a, c);
          case m: {
            var b = e, j = b._payload, k = b._init;
            try {
              return we(k(j), a, c);
            } catch {
            }
          }
        }
      return "";
    }
    var fe = Object.prototype.hasOwnProperty, Be = {}, Ye = I.ReactDebugCurrentFrame;
    function je(e) {
      if (e) {
        var a = e._owner, c = we(e.type, e._source, a ? a.type : null);
        Ye.setExtraStackFrame(c);
      } else
        Ye.setExtraStackFrame(null);
    }
    function Nr(e, a, c, b, j) {
      {
        var k = Function.call.bind(fe);
        for (var x in e)
          if (k(e, x)) {
            var h = void 0;
            try {
              if (typeof e[x] != "function") {
                var W = Error((b || "React class") + ": " + c + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw W.name = "Invariant Violation", W;
              }
              h = e[x](a, x, b, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (N) {
              h = N;
            }
            h && !(h instanceof Error) && (je(j), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", b || "React class", c, x, typeof h), je(null)), h instanceof Error && !(h.message in Be) && (Be[h.message] = !0, je(j), w("Failed %s type: %s", c, h.message), je(null));
          }
      }
    }
    var Pr = Array.isArray;
    function Te(e) {
      return Pr(e);
    }
    function Ar(e) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, c = a && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c;
      }
    }
    function Or(e) {
      try {
        return qe(e), !1;
      } catch {
        return !0;
      }
    }
    function qe(e) {
      return "" + e;
    }
    function Je(e) {
      if (Or(e))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ar(e)), qe(e);
    }
    var pe = I.ReactCurrentOwner, Ir = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ke, He, Ne;
    Ne = {};
    function Mr(e) {
      if (fe.call(e, "ref")) {
        var a = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Dr(e) {
      if (fe.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Lr(e, a) {
      if (typeof e.ref == "string" && pe.current && a && pe.current.stateNode !== a) {
        var c = L(pe.current.type);
        Ne[c] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(pe.current.type), e.ref), Ne[c] = !0);
      }
    }
    function Wr(e, a) {
      {
        var c = function() {
          Ke || (Ke = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function zr(e, a) {
      {
        var c = function() {
          He || (He = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var $r = function(e, a, c, b, j, k, x) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: a,
        ref: c,
        props: x,
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
        value: b
      }), Object.defineProperty(h, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function Gr(e, a, c, b, j) {
      {
        var k, x = {}, h = null, W = null;
        c !== void 0 && (Je(c), h = "" + c), Dr(a) && (Je(a.key), h = "" + a.key), Mr(a) && (W = a.ref, Lr(a, j));
        for (k in a)
          fe.call(a, k) && !Ir.hasOwnProperty(k) && (x[k] = a[k]);
        if (e && e.defaultProps) {
          var N = e.defaultProps;
          for (k in N)
            x[k] === void 0 && (x[k] = N[k]);
        }
        if (h || W) {
          var P = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          h && Wr(x, P), W && zr(x, P);
        }
        return $r(e, h, W, j, b, pe.current, x);
      }
    }
    var Pe = I.ReactCurrentOwner, Ue = I.ReactDebugCurrentFrame;
    function ce(e) {
      if (e) {
        var a = e._owner, c = we(e.type, e._source, a ? a.type : null);
        Ue.setExtraStackFrame(c);
      } else
        Ue.setExtraStackFrame(null);
    }
    var Ae;
    Ae = !1;
    function Oe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Xe() {
      {
        if (Pe.current) {
          var e = L(Pe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Fr(e) {
      {
        if (e !== void 0) {
          var a = e.fileName.replace(/^.*[\\\/]/, ""), c = e.lineNumber;
          return `

Check your code at ` + a + ":" + c + ".";
        }
        return "";
      }
    }
    var Ze = {};
    function Vr(e) {
      {
        var a = Xe();
        if (!a) {
          var c = typeof e == "string" ? e : e.displayName || e.name;
          c && (a = `

Check the top-level render call using <` + c + ">.");
        }
        return a;
      }
    }
    function Qe(e, a) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var c = Vr(a);
        if (Ze[c])
          return;
        Ze[c] = !0;
        var b = "";
        e && e._owner && e._owner !== Pe.current && (b = " It was passed a child from " + L(e._owner.type) + "."), ce(e), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, b), ce(null);
      }
    }
    function er(e, a) {
      {
        if (typeof e != "object")
          return;
        if (Te(e))
          for (var c = 0; c < e.length; c++) {
            var b = e[c];
            Oe(b) && Qe(b, a);
          }
        else if (Oe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var j = O(e);
          if (typeof j == "function" && j !== e.entries)
            for (var k = j.call(e), x; !(x = k.next()).done; )
              Oe(x.value) && Qe(x.value, a);
        }
      }
    }
    function Br(e) {
      {
        var a = e.type;
        if (a == null || typeof a == "string")
          return;
        var c;
        if (typeof a == "function")
          c = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === g))
          c = a.propTypes;
        else
          return;
        if (c) {
          var b = L(a);
          Nr(c, e.props, "prop", b, e);
        } else if (a.PropTypes !== void 0 && !Ae) {
          Ae = !0;
          var j = L(a);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", j || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Yr(e) {
      {
        for (var a = Object.keys(e.props), c = 0; c < a.length; c++) {
          var b = a[c];
          if (b !== "children" && b !== "key") {
            ce(e), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", b), ce(null);
            break;
          }
        }
        e.ref !== null && (ce(e), w("Invalid attribute `ref` supplied to `React.Fragment`."), ce(null));
      }
    }
    var rr = {};
    function tr(e, a, c, b, j, k) {
      {
        var x = Z(e);
        if (!x) {
          var h = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var W = Fr(j);
          W ? h += W : h += Xe();
          var N;
          e === null ? N = "null" : Te(e) ? N = "array" : e !== void 0 && e.$$typeof === t ? (N = "<" + (L(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : N = typeof e, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", N, h);
        }
        var P = Gr(e, a, c, j, k);
        if (P == null)
          return P;
        if (x) {
          var G = a.children;
          if (G !== void 0)
            if (b)
              if (Te(G)) {
                for (var ue = 0; ue < G.length; ue++)
                  er(G[ue], e);
                Object.freeze && Object.freeze(G);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              er(G, e);
        }
        if (fe.call(a, "key")) {
          var te = L(e), $ = Object.keys(a).filter(function(Xr) {
            return Xr !== "key";
          }), Ie = $.length > 0 ? "{key: someKey, " + $.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!rr[te + Ie]) {
            var Ur = $.length > 0 ? "{" + $.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ie, te, Ur, te), rr[te + Ie] = !0;
          }
        }
        return e === o ? Yr(P) : Br(P), P;
      }
    }
    function qr(e, a, c) {
      return tr(e, a, c, !0);
    }
    function Jr(e, a, c) {
      return tr(e, a, c, !1);
    }
    var Kr = Jr, Hr = qr;
    be.Fragment = o, be.jsx = Kr, be.jsxs = Hr;
  }()), be;
}
process.env.NODE_ENV === "production" ? De.exports = Qr() : De.exports = et();
var d = De.exports, rt = {
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
const tt = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), nt = (r, t) => {
  const n = Zr(
    ({ color: o = "currentColor", size: i = 24, strokeWidth: s = 2, absoluteStrokeWidth: u, children: l, ...f }, p) => nr(
      "svg",
      {
        ref: p,
        ...rt,
        width: i,
        height: i,
        stroke: o,
        strokeWidth: u ? Number(s) * 24 / Number(i) : s,
        className: `lucide lucide-${tt(r)}`,
        ...f
      },
      [
        ...t.map(([v, g]) => nr(v, g)),
        ...(Array.isArray(l) ? l : [l]) || []
      ]
    )
  );
  return n.displayName = `${r}`, n;
};
var ke = nt;
const ot = ke("AlertTriangle", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
      key: "c3ski4"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]), Re = ke("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["polyline", { points: "22 4 12 14.01 9 11.01", key: "6xbx8j" }]
]), at = ke("Link", [
  [
    "path",
    {
      d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
      key: "1cjeqo"
    }
  ],
  [
    "path",
    {
      d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
      key: "19qd67"
    }
  ]
]), it = ke("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
]);
function fr(r) {
  var t, n, o = "";
  if (typeof r == "string" || typeof r == "number")
    o += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var i = r.length;
      for (t = 0; t < i; t++)
        r[t] && (n = fr(r[t])) && (o && (o += " "), o += n);
    } else
      for (n in r)
        r[n] && (o && (o += " "), o += n);
  return o;
}
function pr() {
  for (var r, t, n = 0, o = "", i = arguments.length; n < i; n++)
    (r = arguments[n]) && (t = fr(r)) && (o && (o += " "), o += t);
  return o;
}
function st() {
  for (var r = 0, t, n, o = ""; r < arguments.length; )
    (t = arguments[r++]) && (n = vr(t)) && (o && (o += " "), o += n);
  return o;
}
function vr(r) {
  if (typeof r == "string")
    return r;
  for (var t, n = "", o = 0; o < r.length; o++)
    r[o] && (t = vr(r[o])) && (n && (n += " "), n += t);
  return n;
}
var Ge = "-";
function lt(r) {
  var t = ut(r), n = r.conflictingClassGroups, o = r.conflictingClassGroupModifiers, i = o === void 0 ? {} : o;
  function s(l) {
    var f = l.split(Ge);
    return f[0] === "" && f.length !== 1 && f.shift(), gr(f, t) || ct(l);
  }
  function u(l, f) {
    var p = n[l] || [];
    return f && i[l] ? [].concat(p, i[l]) : p;
  }
  return {
    getClassGroupId: s,
    getConflictingClassGroupIds: u
  };
}
function gr(r, t) {
  var u;
  if (r.length === 0)
    return t.classGroupId;
  var n = r[0], o = t.nextPart.get(n), i = o ? gr(r.slice(1), o) : void 0;
  if (i)
    return i;
  if (t.validators.length !== 0) {
    var s = r.join(Ge);
    return (u = t.validators.find(function(l) {
      var f = l.validator;
      return f(s);
    })) == null ? void 0 : u.classGroupId;
  }
}
var ir = /^\[(.+)\]$/;
function ct(r) {
  if (ir.test(r)) {
    var t = ir.exec(r)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function ut(r) {
  var t = r.theme, n = r.prefix, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, i = ft(Object.entries(r.classGroups), n);
  return i.forEach(function(s) {
    var u = s[0], l = s[1];
    Le(l, o, u, t);
  }), o;
}
function Le(r, t, n, o) {
  r.forEach(function(i) {
    if (typeof i == "string") {
      var s = i === "" ? t : sr(t, i);
      s.classGroupId = n;
      return;
    }
    if (typeof i == "function") {
      if (dt(i)) {
        Le(i(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: n
      });
      return;
    }
    Object.entries(i).forEach(function(u) {
      var l = u[0], f = u[1];
      Le(f, sr(t, l), n, o);
    });
  });
}
function sr(r, t) {
  var n = r;
  return t.split(Ge).forEach(function(o) {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}
function dt(r) {
  return r.isThemeGetter;
}
function ft(r, t) {
  return t ? r.map(function(n) {
    var o = n[0], i = n[1], s = i.map(function(u) {
      return typeof u == "string" ? t + u : typeof u == "object" ? Object.fromEntries(Object.entries(u).map(function(l) {
        var f = l[0], p = l[1];
        return [t + f, p];
      })) : u;
    });
    return [o, s];
  }) : r;
}
function pt(r) {
  if (r < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  function i(s, u) {
    n.set(s, u), t++, t > r && (t = 0, o = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get: function(u) {
      var l = n.get(u);
      if (l !== void 0)
        return l;
      if ((l = o.get(u)) !== void 0)
        return i(u, l), l;
    },
    set: function(u, l) {
      n.has(u) ? n.set(u, l) : i(u, l);
    }
  };
}
var br = "!";
function vt(r) {
  var t = r.separator || ":", n = t.length === 1, o = t[0], i = t.length;
  return function(u) {
    for (var l = [], f = 0, p = 0, v, g = 0; g < u.length; g++) {
      var m = u[g];
      if (f === 0) {
        if (m === o && (n || u.slice(g, g + i) === t)) {
          l.push(u.slice(p, g)), p = g + i;
          continue;
        }
        if (m === "/") {
          v = g;
          continue;
        }
      }
      m === "[" ? f++ : m === "]" && f--;
    }
    var T = l.length === 0 ? u : u.substring(p), A = T.startsWith(br), S = A ? T.substring(1) : T, O = v && v > p ? v - p : void 0;
    return {
      modifiers: l,
      hasImportantModifier: A,
      baseClassName: S,
      maybePostfixModifierPosition: O
    };
  };
}
function gt(r) {
  if (r.length <= 1)
    return r;
  var t = [], n = [];
  return r.forEach(function(o) {
    var i = o[0] === "[";
    i ? (t.push.apply(t, n.sort().concat([o])), n = []) : n.push(o);
  }), t.push.apply(t, n.sort()), t;
}
function bt(r) {
  return {
    cache: pt(r.cacheSize),
    splitModifiers: vt(r),
    ...lt(r)
  };
}
var mt = /\s+/;
function ht(r, t) {
  var n = t.splitModifiers, o = t.getClassGroupId, i = t.getConflictingClassGroupIds, s = /* @__PURE__ */ new Set();
  return r.trim().split(mt).map(function(u) {
    var l = n(u), f = l.modifiers, p = l.hasImportantModifier, v = l.baseClassName, g = l.maybePostfixModifierPosition, m = o(g ? v.substring(0, g) : v), T = !!g;
    if (!m) {
      if (!g)
        return {
          isTailwindClass: !1,
          originalClassName: u
        };
      if (m = o(v), !m)
        return {
          isTailwindClass: !1,
          originalClassName: u
        };
      T = !1;
    }
    var A = gt(f).join(":"), S = p ? A + br : A;
    return {
      isTailwindClass: !0,
      modifierId: S,
      classGroupId: m,
      originalClassName: u,
      hasPostfixModifier: T
    };
  }).reverse().filter(function(u) {
    if (!u.isTailwindClass)
      return !0;
    var l = u.modifierId, f = u.classGroupId, p = u.hasPostfixModifier, v = l + f;
    return s.has(v) ? !1 : (s.add(v), i(f, p).forEach(function(g) {
      return s.add(l + g);
    }), !0);
  }).reverse().map(function(u) {
    return u.originalClassName;
  }).join(" ");
}
function yt() {
  for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
    t[n] = arguments[n];
  var o, i, s, u = l;
  function l(p) {
    var v = t[0], g = t.slice(1), m = g.reduce(function(T, A) {
      return A(T);
    }, v());
    return o = bt(m), i = o.cache.get, s = o.cache.set, u = f, f(p);
  }
  function f(p) {
    var v = i(p);
    if (v)
      return v;
    var g = ht(p, o);
    return s(p, g), g;
  }
  return function() {
    return u(st.apply(null, arguments));
  };
}
function E(r) {
  var t = function(o) {
    return o[r] || [];
  };
  return t.isThemeGetter = !0, t;
}
var mr = /^\[(?:([a-z-]+):)?(.+)\]$/i, xt = /^\d+\/\d+$/, wt = /* @__PURE__ */ new Set(["px", "full", "screen"]), jt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ct = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Rt = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function V(r) {
  return ne(r) || wt.has(r) || xt.test(r) || We(r);
}
function We(r) {
  return oe(r, "length", Nt);
}
function kt(r) {
  return oe(r, "size", hr);
}
function Et(r) {
  return oe(r, "position", hr);
}
function St(r) {
  return oe(r, "url", Pt);
}
function Ce(r) {
  return oe(r, "number", ne);
}
function ne(r) {
  return !Number.isNaN(Number(r));
}
function _t(r) {
  return r.endsWith("%") && ne(r.slice(0, -1));
}
function me(r) {
  return lr(r) || oe(r, "number", lr);
}
function y(r) {
  return mr.test(r);
}
function he() {
  return !0;
}
function U(r) {
  return jt.test(r);
}
function Tt(r) {
  return oe(r, "", At);
}
function oe(r, t, n) {
  var o = mr.exec(r);
  return o ? o[1] ? o[1] === t : n(o[2]) : !1;
}
function Nt(r) {
  return Ct.test(r);
}
function hr() {
  return !1;
}
function Pt(r) {
  return r.startsWith("url(");
}
function lr(r) {
  return Number.isInteger(Number(r));
}
function At(r) {
  return Rt.test(r);
}
function Ot() {
  var r = E("colors"), t = E("spacing"), n = E("blur"), o = E("brightness"), i = E("borderColor"), s = E("borderRadius"), u = E("borderSpacing"), l = E("borderWidth"), f = E("contrast"), p = E("grayscale"), v = E("hueRotate"), g = E("invert"), m = E("gap"), T = E("gradientColorStops"), A = E("gradientColorStopPositions"), S = E("inset"), O = E("margin"), I = E("opacity"), w = E("padding"), ae = E("saturate"), X = E("scale"), ie = E("sepia"), se = E("skew"), le = E("space"), D = E("translate"), J = function() {
    return ["auto", "contain", "none"];
  }, Z = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, Q = function() {
    return ["auto", y, t];
  }, C = function() {
    return [y, t];
  }, L = function() {
    return ["", V];
  }, z = function() {
    return ["auto", ne, y];
  }, B = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, q = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, ee = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, K = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, R = function() {
    return ["", "0", y];
  }, F = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, H = function() {
    return [ne, Ce];
  }, re = function() {
    return [ne, y];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [he],
      spacing: [V],
      blur: ["none", "", U, y],
      brightness: H(),
      borderColor: [r],
      borderRadius: ["none", "", "full", U, y],
      borderSpacing: C(),
      borderWidth: L(),
      contrast: H(),
      grayscale: R(),
      hueRotate: re(),
      invert: R(),
      gap: C(),
      gradientColorStops: [r],
      gradientColorStopPositions: [_t, We],
      inset: Q(),
      margin: Q(),
      opacity: H(),
      padding: C(),
      saturate: H(),
      scale: H(),
      sepia: R(),
      skew: re(),
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
        aspect: ["auto", "square", "video", y]
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
        columns: [U]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": F()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": F()
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
        object: [].concat(B(), [y])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Z()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Z()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Z()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: J()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": J()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": J()
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
        z: ["auto", me]
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
        flex: ["1", "auto", "initial", "none", y]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: R()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: R()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", me]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [he]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", me]
        }, y]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": z()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": z()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [he]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [me]
        }, y]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": z()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": z()
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
        "auto-cols": ["auto", "min", "max", "fr", y]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", y]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [m]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [m]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [m]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(K())
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
        content: ["normal"].concat(K(), ["baseline"])
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
        "place-content": [].concat(K(), ["baseline"])
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
        p: [w]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [w]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [w]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [w]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [w]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [w]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [w]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [w]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [w]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [O]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [O]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [O]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [O]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [O]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [O]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [O]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [O]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [O]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [le]
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
        "space-y": [le]
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
        w: ["auto", "min", "max", "fit", y, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", y, V]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [U]
        }, U, y]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [y, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", y, V]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [y, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", U, We]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ce]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [he]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", y]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ne, Ce]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", y, V]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", y]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", y]
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
        decoration: [].concat(q(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", V]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", y, V]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", y]
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
        content: ["none", y]
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
        bg: [].concat(B(), [Et])
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
        bg: ["auto", "cover", "contain", kt]
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
        from: [A]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [A]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [A]
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
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [l]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [l]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [l]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [l]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [l]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [l]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [l]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [l]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [l]
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
        border: [].concat(q(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [l]
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
        "divide-y": [l]
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
        divide: q()
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
        outline: [""].concat(q())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [y, V]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [V]
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
        "ring-offset": [V]
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
        shadow: ["", "inner", "none", U, Tt]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [he]
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
        "mix-blend": ee()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ee()
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
        contrast: [f]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", U, y]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [p]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [v]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [g]
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
        sepia: [ie]
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
        "backdrop-contrast": [f]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [p]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [v]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [g]
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
        "backdrop-saturate": [ae]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [ie]
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
        "border-spacing": [u]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [u]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [u]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", y]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: re()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", y]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: re()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", y]
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
        scale: [X]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [X]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [X]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [me, y]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [D]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [D]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [se]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [se]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", y]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", y]
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
        "will-change": ["auto", "scroll", "contents", "transform", y]
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
        stroke: [V, Ce]
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
var It = /* @__PURE__ */ yt(Ot);
function Y(...r) {
  return It(pr(r));
}
const Fe = _.forwardRef(({ className: r, ...t }, n) => /* @__PURE__ */ d.jsx(
  "div",
  {
    ref: n,
    className: Y(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      r
    ),
    ...t
  }
));
Fe.displayName = "Card";
const yr = _.forwardRef(({ className: r, ...t }, n) => /* @__PURE__ */ d.jsx(
  "div",
  {
    ref: n,
    className: Y("flex flex-col space-y-1.5 p-6", r),
    ...t
  }
));
yr.displayName = "CardHeader";
const xr = _.forwardRef(({ className: r, ...t }, n) => /* @__PURE__ */ d.jsx(
  "h3",
  {
    ref: n,
    className: Y(
      "text-2xl font-semibold leading-none tracking-tight",
      r
    ),
    ...t
  }
));
xr.displayName = "CardTitle";
const Mt = _.forwardRef(({ className: r, ...t }, n) => /* @__PURE__ */ d.jsx(
  "p",
  {
    ref: n,
    className: Y("text-sm text-muted-foreground", r),
    ...t
  }
));
Mt.displayName = "CardDescription";
const wr = _.forwardRef(({ className: r, ...t }, n) => /* @__PURE__ */ d.jsx("div", { ref: n, className: Y("p-6 pt-0", r), ...t }));
wr.displayName = "CardContent";
const Dt = _.forwardRef(({ className: r, ...t }, n) => /* @__PURE__ */ d.jsx(
  "div",
  {
    ref: n,
    className: Y("flex items-center p-6 pt-0", r),
    ...t
  }
));
Dt.displayName = "CardFooter";
function Kt({ steps: r, currentStep: t, className: n }) {
  return /* @__PURE__ */ d.jsx(Fe, { className: `p-6 ${n || ""}`, children: /* @__PURE__ */ d.jsxs("div", { className: "flex items-center justify-center relative", children: [
    /* @__PURE__ */ d.jsx("h3", { className: "font-semibold text-gray-900 absolute left-0", children: "Progress" }),
    /* @__PURE__ */ d.jsx("div", { className: "flex items-center space-x-8", children: r.map((o, i) => /* @__PURE__ */ d.jsxs($e.Fragment, { children: [
      /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ d.jsx("div", { className: "relative", children: o.status === "current" ? /* @__PURE__ */ d.jsx("div", { className: "w-8 h-8 rounded-full border-2 border-blue-500 bg-blue-500 flex items-center justify-center", children: /* @__PURE__ */ d.jsx("div", { className: "w-3 h-3 rounded-full bg-white" }) }) : o.status === "completed" ? /* @__PURE__ */ d.jsx(Re, { className: "w-8 h-8 text-green-500" }) : /* @__PURE__ */ d.jsx("div", { className: "w-8 h-8 rounded-full border-2 border-gray-300 bg-white" }) }),
        /* @__PURE__ */ d.jsx("span", { className: `text-sm font-medium ${o.status === "current" ? "text-blue-600" : "text-gray-900"}`, children: o.label })
      ] }),
      i < r.length - 1 && /* @__PURE__ */ d.jsx("div", { className: "w-12 h-0.5 bg-gray-200" })
    ] }, o.id)) })
  ] }) });
}
function cr(r, t) {
  if (typeof r == "function")
    return r(t);
  r != null && (r.current = t);
}
function Lt(...r) {
  return (t) => {
    let n = !1;
    const o = r.map((i) => {
      const s = cr(i, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let i = 0; i < o.length; i++) {
          const s = o[i];
          typeof s == "function" ? s() : cr(r[i], null);
        }
      };
  };
}
// @__NO_SIDE_EFFECTS__
function Wt(r) {
  const t = /* @__PURE__ */ $t(r), n = _.forwardRef((o, i) => {
    const { children: s, ...u } = o, l = _.Children.toArray(s), f = l.find(Ft);
    if (f) {
      const p = f.props.children, v = l.map((g) => g === f ? _.Children.count(p) > 1 ? _.Children.only(null) : _.isValidElement(p) ? p.props.children : null : g);
      return /* @__PURE__ */ d.jsx(t, { ...u, ref: i, children: _.isValidElement(p) ? _.cloneElement(p, void 0, v) : null });
    }
    return /* @__PURE__ */ d.jsx(t, { ...u, ref: i, children: s });
  });
  return n.displayName = `${r}.Slot`, n;
}
var zt = /* @__PURE__ */ Wt("Slot");
// @__NO_SIDE_EFFECTS__
function $t(r) {
  const t = _.forwardRef((n, o) => {
    const { children: i, ...s } = n;
    if (_.isValidElement(i)) {
      const u = Bt(i), l = Vt(s, i.props);
      return i.type !== _.Fragment && (l.ref = o ? Lt(o, u) : u), _.cloneElement(i, l);
    }
    return _.Children.count(i) > 1 ? _.Children.only(null) : null;
  });
  return t.displayName = `${r}.SlotClone`, t;
}
var Gt = Symbol("radix.slottable");
function Ft(r) {
  return _.isValidElement(r) && typeof r.type == "function" && "__radixId" in r.type && r.type.__radixId === Gt;
}
function Vt(r, t) {
  const n = { ...t };
  for (const o in t) {
    const i = r[o], s = t[o];
    /^on[A-Z]/.test(o) ? i && s ? n[o] = (...l) => {
      const f = s(...l);
      return i(...l), f;
    } : i && (n[o] = i) : o === "style" ? n[o] = { ...i, ...s } : o === "className" && (n[o] = [i, s].filter(Boolean).join(" "));
  }
  return { ...r, ...n };
}
function Bt(r) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(r.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? r.ref : (t = (i = Object.getOwnPropertyDescriptor(r, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? r.props.ref : r.props.ref || r.ref);
}
const ur = (r) => typeof r == "boolean" ? `${r}` : r === 0 ? "0" : r, dr = pr, jr = (r, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null)
    return dr(r, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: i, defaultVariants: s } = t, u = Object.keys(i).map((p) => {
    const v = n == null ? void 0 : n[p], g = s == null ? void 0 : s[p];
    if (v === null)
      return null;
    const m = ur(v) || ur(g);
    return i[p][m];
  }), l = n && Object.entries(n).reduce((p, v) => {
    let [g, m] = v;
    return m === void 0 || (p[g] = m), p;
  }, {}), f = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((p, v) => {
    let { class: g, className: m, ...T } = v;
    return Object.entries(T).every((A) => {
      let [S, O] = A;
      return Array.isArray(O) ? O.includes({
        ...s,
        ...l
      }[S]) : {
        ...s,
        ...l
      }[S] === O;
    }) ? [
      ...p,
      g,
      m
    ] : p;
  }, []);
  return dr(r, u, f, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Yt = jr(
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
), ze = _.forwardRef(
  ({ className: r, variant: t, size: n, asChild: o = !1, ...i }, s) => {
    const u = o ? zt : "button";
    return /* @__PURE__ */ d.jsx(
      u,
      {
        className: Y(Yt({ variant: t, size: n, className: r })),
        ref: s,
        ...i
      }
    );
  }
);
ze.displayName = "Button";
const Cr = _.forwardRef(
  ({ className: r, type: t, ...n }, o) => /* @__PURE__ */ d.jsx(
    "input",
    {
      type: t,
      className: Y(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        r
      ),
      ref: o,
      ...n
    }
  )
);
Cr.displayName = "Input";
const Rr = _.forwardRef(
  ({ className: r, ...t }, n) => /* @__PURE__ */ d.jsx(
    "textarea",
    {
      className: Y(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        r
      ),
      ref: n,
      ...t
    }
  )
);
Rr.displayName = "Textarea";
const qt = jr(
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
function Me({ className: r, variant: t, ...n }) {
  return /* @__PURE__ */ d.jsx("div", { className: Y(qt({ variant: t }), r), ...n });
}
function Ht({
  config: r,
  currentValue: t,
  onFileUpload: n,
  onLinkedInUrl: o,
  onTextInput: i,
  onUploadComplete: s,
  onUploadError: u,
  className: l
}) {
  const [f, p] = ve(!1), [v, g] = ve(""), [m, T] = ve(""), [A, S] = ve(null), [O, I] = ve(!1), { type: w, title: ae, description: X, icon: ie, required: se, optional: le, disabled: D } = r, J = de((R) => {
    R.preventDefault(), p(!0);
  }, []), Z = de((R) => {
    R.preventDefault(), p(!1);
  }, []), Q = de((R) => {
    R.preventDefault(), p(!1);
    const F = Array.from(R.dataTransfer.files);
    F.length > 0 && C(F[0]);
  }, []), C = de((R) => {
    D || (S(null), I(!0), setTimeout(() => {
      I(!1), n == null || n(R), s == null || s("mock-file-id", w);
    }, 1e3));
  }, [D, n, s, w]), L = de(() => {
    if (!v.trim()) {
      S("Please enter a LinkedIn URL");
      return;
    }
    S(null), o == null || o(v), s == null || s("mock-linkedin-id", "linkedin");
  }, [v, o, s]), z = de(() => {
    if (!m.trim()) {
      S("Please enter cover letter text");
      return;
    }
    S(null), i == null || i(m), s == null || s("mock-text-id", "coverLetter");
  }, [m, i, s]), B = () => /* @__PURE__ */ d.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ d.jsxs(
      "div",
      {
        className: `border-2 border-dashed rounded-lg p-6 text-center transition-colors ${f ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"} ${D ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`,
        onDragOver: J,
        onDragLeave: Z,
        onDrop: Q,
        onClick: () => {
          var R;
          return !D && ((R = document.getElementById(`file-input-${w}`)) == null ? void 0 : R.click());
        },
        children: [
          /* @__PURE__ */ d.jsx(it, { className: "w-8 h-8 mx-auto mb-2 text-gray-400" }),
          /* @__PURE__ */ d.jsx("p", { className: "text-sm text-gray-600", children: f ? "Drop file here" : "Drag & drop or click to upload" }),
          /* @__PURE__ */ d.jsx(
            "input",
            {
              id: `file-input-${w}`,
              type: "file",
              className: "hidden",
              accept: ".pdf,.doc,.docx,.txt",
              onChange: (R) => {
                var F;
                return ((F = R.target.files) == null ? void 0 : F[0]) && C(R.target.files[0]);
              },
              disabled: D
            }
          )
        ]
      }
    ),
    t && /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-2 text-green-600 text-sm", children: [
      /* @__PURE__ */ d.jsx(Re, { className: "w-4 h-4" }),
      /* @__PURE__ */ d.jsx("span", { children: "File uploaded successfully" })
    ] })
  ] }), q = () => /* @__PURE__ */ d.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ d.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ d.jsx(
        Cr,
        {
          type: "url",
          placeholder: "https://linkedin.com/in/yourprofile",
          value: v,
          onChange: (R) => g(R.target.value),
          disabled: D,
          className: "flex-1"
        }
      ),
      /* @__PURE__ */ d.jsxs(
        ze,
        {
          onClick: L,
          disabled: D || !v.trim(),
          children: [
            /* @__PURE__ */ d.jsx(at, { className: "w-4 h-4 mr-2" }),
            "Connect"
          ]
        }
      )
    ] }),
    t && /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-2 text-green-600 text-sm", children: [
      /* @__PURE__ */ d.jsx(Re, { className: "w-4 h-4" }),
      /* @__PURE__ */ d.jsx("span", { children: "LinkedIn profile connected" })
    ] })
  ] }), ee = () => /* @__PURE__ */ d.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ d.jsx(
      Rr,
      {
        placeholder: "Paste your cover letter text here...",
        value: m,
        onChange: (R) => T(R.target.value),
        disabled: D,
        rows: 6
      }
    ),
    /* @__PURE__ */ d.jsx(
      ze,
      {
        onClick: z,
        disabled: D || !m.trim(),
        className: "w-full",
        children: "Add Cover Letter Text"
      }
    ),
    t && /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-2 text-green-600 text-sm", children: [
      /* @__PURE__ */ d.jsx(Re, { className: "w-4 h-4" }),
      /* @__PURE__ */ d.jsx("span", { children: "Cover letter text added" })
    ] })
  ] }), K = () => t ? /* @__PURE__ */ d.jsx(Me, { variant: "secondary", className: "bg-green-100 text-green-800", children: "Complete" }) : se ? /* @__PURE__ */ d.jsx(Me, { variant: "destructive", children: "Required" }) : le ? /* @__PURE__ */ d.jsx(Me, { variant: "outline", children: "Optional" }) : null;
  return /* @__PURE__ */ d.jsxs(Fe, { className: `${l || ""} ${D ? "opacity-50" : ""}`, children: [
    /* @__PURE__ */ d.jsx(yr, { children: /* @__PURE__ */ d.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ d.jsx("div", { className: "w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ d.jsx(ie, { className: "w-5 h-5 text-blue-600" }) }),
        /* @__PURE__ */ d.jsxs("div", { children: [
          /* @__PURE__ */ d.jsx(xr, { className: "text-lg", children: ae }),
          /* @__PURE__ */ d.jsx("p", { className: "text-sm text-gray-600", children: X })
        ] })
      ] }),
      K()
    ] }) }),
    /* @__PURE__ */ d.jsxs(wr, { children: [
      w === "linkedin" ? q() : w === "coverLetter" ? ee() : B(),
      A && /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-2 text-red-600 text-sm mt-2", children: [
        /* @__PURE__ */ d.jsx(ot, { className: "w-4 h-4" }),
        /* @__PURE__ */ d.jsx("span", { children: A })
      ] }),
      O && /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-2 text-blue-600 text-sm mt-2", children: [
        /* @__PURE__ */ d.jsx("div", { className: "w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" }),
        /* @__PURE__ */ d.jsx("span", { children: "Uploading..." })
      ] })
    ] })
  ] });
}
export {
  Me as Badge,
  ze as Button,
  Fe as Card,
  wr as CardContent,
  Mt as CardDescription,
  Dt as CardFooter,
  yr as CardHeader,
  xr as CardTitle,
  Ht as ContentUpload,
  Cr as Input,
  Kt as ProgressBar,
  Rr as Textarea,
  qt as badgeVariants,
  Yt as buttonVariants
};
