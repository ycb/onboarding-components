import * as T from "react";
import Je, { forwardRef as tt, createElement as cr, useState as de, useEffect as nt, useCallback as re } from "react";
var Be = { exports: {} }, ke = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dr;
function at() {
  if (dr)
    return ke;
  dr = 1;
  var r = Je, n = Symbol.for("react.element"), a = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(c, f, m) {
    var v, p = {}, b = null, S = null;
    m !== void 0 && (b = "" + m), f.key !== void 0 && (b = "" + f.key), f.ref !== void 0 && (S = f.ref);
    for (v in f)
      o.call(f, v) && !l.hasOwnProperty(v) && (p[v] = f[v]);
    if (c && c.defaultProps)
      for (v in f = c.defaultProps, f)
        p[v] === void 0 && (p[v] = f[v]);
    return { $$typeof: n, type: c, key: b, ref: S, props: p, _owner: s.current };
  }
  return ke.Fragment = a, ke.jsx = d, ke.jsxs = d, ke;
}
var Re = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ur;
function ot() {
  return ur || (ur = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Je, n = Symbol.for("react.element"), a = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), A = Symbol.iterator, _ = "@@iterator";
    function M(e) {
      if (e === null || typeof e != "object")
        return null;
      var i = A && e[A] || e[_];
      return typeof i == "function" ? i : null;
    }
    var R = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function N(e) {
      {
        for (var i = arguments.length, u = new Array(i > 1 ? i - 1 : 0), g = 1; g < i; g++)
          u[g - 1] = arguments[g];
        oe("error", e, u);
      }
    }
    function oe(e, i, u) {
      {
        var g = R.ReactDebugCurrentFrame, C = g.getStackAddendum();
        C !== "" && (i += "%s", u = u.concat([C]));
        var k = u.map(function(j) {
          return String(j);
        });
        k.unshift("Warning: " + i), Function.prototype.apply.call(console[e], console, k);
      }
    }
    var U = !1, te = !1, me = !1, ve = !1, se = !1, L;
    L = Symbol.for("react.module.reference");
    function W(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === l || se || e === s || e === m || e === v || ve || e === S || U || te || me || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === p || e.$$typeof === d || e.$$typeof === c || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === L || e.getModuleId !== void 0));
    }
    function Q(e, i, u) {
      var g = e.displayName;
      if (g)
        return g;
      var C = i.displayName || i.name || "";
      return C !== "" ? u + "(" + C + ")" : u;
    }
    function y(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && N("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case a:
          return "Portal";
        case l:
          return "Profiler";
        case s:
          return "StrictMode";
        case m:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            var i = e;
            return y(i) + ".Consumer";
          case d:
            var u = e;
            return y(u._context) + ".Provider";
          case f:
            return Q(e, e.render, "ForwardRef");
          case p:
            var g = e.displayName || null;
            return g !== null ? g : O(e.type) || "Memo";
          case b: {
            var C = e, k = C._payload, j = C._init;
            try {
              return O(j(k));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, G = 0, J, ne, ee, Y, ie, q, K;
    function F() {
    }
    F.__reactDisabledLog = !0;
    function Ie() {
      {
        if (G === 0) {
          J = console.log, ne = console.info, ee = console.warn, Y = console.error, ie = console.group, q = console.groupCollapsed, K = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: F,
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
    function Me() {
      {
        if (G--, G === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: J
            }),
            info: D({}, e, {
              value: ne
            }),
            warn: D({}, e, {
              value: ee
            }),
            error: D({}, e, {
              value: Y
            }),
            group: D({}, e, {
              value: ie
            }),
            groupCollapsed: D({}, e, {
              value: q
            }),
            groupEnd: D({}, e, {
              value: K
            })
          });
        }
        G < 0 && N("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ye = R.ReactCurrentDispatcher, we;
    function ge(e, i, u) {
      {
        if (we === void 0)
          try {
            throw Error();
          } catch (C) {
            var g = C.stack.trim().match(/\n( *(at )?)/);
            we = g && g[1] || "";
          }
        return `
` + we + e;
      }
    }
    var je = !1, be;
    {
      var w = typeof WeakMap == "function" ? WeakMap : Map;
      be = new w();
    }
    function $(e, i) {
      if (!e || je)
        return "";
      {
        var u = be.get(e);
        if (u !== void 0)
          return u;
      }
      var g;
      je = !0;
      var C = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var k;
      k = ye.current, ye.current = null, Ie();
      try {
        if (i) {
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
              g = V;
            }
            Reflect.construct(e, [], j);
          } else {
            try {
              j.call();
            } catch (V) {
              g = V;
            }
            e.call(j.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (V) {
            g = V;
          }
          e();
        }
      } catch (V) {
        if (V && g && typeof V.stack == "string") {
          for (var h = V.stack.split(`
`), z = g.stack.split(`
`), P = h.length - 1, I = z.length - 1; P >= 1 && I >= 0 && h[P] !== z[I]; )
            I--;
          for (; P >= 1 && I >= 0; P--, I--)
            if (h[P] !== z[I]) {
              if (P !== 1 || I !== 1)
                do
                  if (P--, I--, I < 0 || h[P] !== z[I]) {
                    var B = `
` + h[P].replace(" at new ", " at ");
                    return e.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", e.displayName)), typeof e == "function" && be.set(e, B), B;
                  }
                while (P >= 1 && I >= 0);
              break;
            }
        }
      } finally {
        je = !1, ye.current = k, Me(), Error.prepareStackTrace = C;
      }
      var xe = e ? e.displayName || e.name : "", ce = xe ? ge(xe) : "";
      return typeof e == "function" && be.set(e, ce), ce;
    }
    function H(e, i, u) {
      return $(e, !1);
    }
    function Le(e) {
      var i = e.prototype;
      return !!(i && i.isReactComponent);
    }
    function le(e, i, u) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return $(e, Le(e));
      if (typeof e == "string")
        return ge(e);
      switch (e) {
        case m:
          return ge("Suspense");
        case v:
          return ge("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return H(e.render);
          case p:
            return le(e.type, i, u);
          case b: {
            var g = e, C = g._payload, k = g._init;
            try {
              return le(k(C), i, u);
            } catch {
            }
          }
        }
      return "";
    }
    var Ce = Object.prototype.hasOwnProperty, He = {}, Ze = R.ReactDebugCurrentFrame;
    function Se(e) {
      if (e) {
        var i = e._owner, u = le(e.type, e._source, i ? i.type : null);
        Ze.setExtraStackFrame(u);
      } else
        Ze.setExtraStackFrame(null);
    }
    function Ir(e, i, u, g, C) {
      {
        var k = Function.call.bind(Ce);
        for (var j in e)
          if (k(e, j)) {
            var h = void 0;
            try {
              if (typeof e[j] != "function") {
                var z = Error((g || "React class") + ": " + u + " type `" + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[j] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              h = e[j](i, j, g, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (P) {
              h = P;
            }
            h && !(h instanceof Error) && (Se(C), N("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", u, j, typeof h), Se(null)), h instanceof Error && !(h.message in He) && (He[h.message] = !0, Se(C), N("Failed %s type: %s", u, h.message), Se(null));
          }
      }
    }
    var Mr = Array.isArray;
    function Fe(e) {
      return Mr(e);
    }
    function Lr(e) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, u = i && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u;
      }
    }
    function Fr(e) {
      try {
        return Ue(e), !1;
      } catch {
        return !0;
      }
    }
    function Ue(e) {
      return "" + e;
    }
    function Qe(e) {
      if (Fr(e))
        return N("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Lr(e)), Ue(e);
    }
    var Ne = R.ReactCurrentOwner, $r = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, er, rr, $e;
    $e = {};
    function Dr(e) {
      if (Ce.call(e, "ref")) {
        var i = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function zr(e) {
      if (Ce.call(e, "key")) {
        var i = Object.getOwnPropertyDescriptor(e, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Wr(e, i) {
      if (typeof e.ref == "string" && Ne.current && i && Ne.current.stateNode !== i) {
        var u = O(Ne.current.type);
        $e[u] || (N('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(Ne.current.type), e.ref), $e[u] = !0);
      }
    }
    function Gr(e, i) {
      {
        var u = function() {
          er || (er = !0, N("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function Vr(e, i) {
      {
        var u = function() {
          rr || (rr = !0, N("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var Br = function(e, i, u, g, C, k, j) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: i,
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
        value: g
      }), Object.defineProperty(h, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function Yr(e, i, u, g, C) {
      {
        var k, j = {}, h = null, z = null;
        u !== void 0 && (Qe(u), h = "" + u), zr(i) && (Qe(i.key), h = "" + i.key), Dr(i) && (z = i.ref, Wr(i, C));
        for (k in i)
          Ce.call(i, k) && !$r.hasOwnProperty(k) && (j[k] = i[k]);
        if (e && e.defaultProps) {
          var P = e.defaultProps;
          for (k in P)
            j[k] === void 0 && (j[k] = P[k]);
        }
        if (h || z) {
          var I = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          h && Gr(j, I), z && Vr(j, I);
        }
        return Br(e, h, z, C, g, Ne.current, j);
      }
    }
    var De = R.ReactCurrentOwner, tr = R.ReactDebugCurrentFrame;
    function he(e) {
      if (e) {
        var i = e._owner, u = le(e.type, e._source, i ? i.type : null);
        tr.setExtraStackFrame(u);
      } else
        tr.setExtraStackFrame(null);
    }
    var ze;
    ze = !1;
    function We(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function nr() {
      {
        if (De.current) {
          var e = O(De.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function qr(e) {
      {
        if (e !== void 0) {
          var i = e.fileName.replace(/^.*[\\\/]/, ""), u = e.lineNumber;
          return `

Check your code at ` + i + ":" + u + ".";
        }
        return "";
      }
    }
    var ar = {};
    function Xr(e) {
      {
        var i = nr();
        if (!i) {
          var u = typeof e == "string" ? e : e.displayName || e.name;
          u && (i = `

Check the top-level render call using <` + u + ">.");
        }
        return i;
      }
    }
    function or(e, i) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var u = Xr(i);
        if (ar[u])
          return;
        ar[u] = !0;
        var g = "";
        e && e._owner && e._owner !== De.current && (g = " It was passed a child from " + O(e._owner.type) + "."), he(e), N('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, g), he(null);
      }
    }
    function sr(e, i) {
      {
        if (typeof e != "object")
          return;
        if (Fe(e))
          for (var u = 0; u < e.length; u++) {
            var g = e[u];
            We(g) && or(g, i);
          }
        else if (We(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var C = M(e);
          if (typeof C == "function" && C !== e.entries)
            for (var k = C.call(e), j; !(j = k.next()).done; )
              We(j.value) && or(j.value, i);
        }
      }
    }
    function Jr(e) {
      {
        var i = e.type;
        if (i == null || typeof i == "string")
          return;
        var u;
        if (typeof i == "function")
          u = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === p))
          u = i.propTypes;
        else
          return;
        if (u) {
          var g = O(i);
          Ir(u, e.props, "prop", g, e);
        } else if (i.PropTypes !== void 0 && !ze) {
          ze = !0;
          var C = O(i);
          N("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", C || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && N("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Kr(e) {
      {
        for (var i = Object.keys(e.props), u = 0; u < i.length; u++) {
          var g = i[u];
          if (g !== "children" && g !== "key") {
            he(e), N("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), he(null);
            break;
          }
        }
        e.ref !== null && (he(e), N("Invalid attribute `ref` supplied to `React.Fragment`."), he(null));
      }
    }
    var ir = {};
    function lr(e, i, u, g, C, k) {
      {
        var j = W(e);
        if (!j) {
          var h = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = qr(C);
          z ? h += z : h += nr();
          var P;
          e === null ? P = "null" : Fe(e) ? P = "array" : e !== void 0 && e.$$typeof === n ? (P = "<" + (O(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : P = typeof e, N("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", P, h);
        }
        var I = Yr(e, i, u, C, k);
        if (I == null)
          return I;
        if (j) {
          var B = i.children;
          if (B !== void 0)
            if (g)
              if (Fe(B)) {
                for (var xe = 0; xe < B.length; xe++)
                  sr(B[xe], e);
                Object.freeze && Object.freeze(B);
              } else
                N("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              sr(B, e);
        }
        if (Ce.call(i, "key")) {
          var ce = O(e), V = Object.keys(i).filter(function(rt) {
            return rt !== "key";
          }), Ge = V.length > 0 ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ir[ce + Ge]) {
            var et = V.length > 0 ? "{" + V.join(": ..., ") + ": ...}" : "{}";
            N(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ge, ce, et, ce), ir[ce + Ge] = !0;
          }
        }
        return e === o ? Kr(I) : Jr(I), I;
      }
    }
    function Hr(e, i, u) {
      return lr(e, i, u, !0);
    }
    function Zr(e, i, u) {
      return lr(e, i, u, !1);
    }
    var Ur = Zr, Qr = Hr;
    Re.Fragment = o, Re.jsx = Ur, Re.jsxs = Qr;
  }()), Re;
}
process.env.NODE_ENV === "production" ? Be.exports = at() : Be.exports = ot();
var t = Be.exports, st = {
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
const it = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), lt = (r, n) => {
  const a = tt(
    ({ color: o = "currentColor", size: s = 24, strokeWidth: l = 2, absoluteStrokeWidth: d, children: c, ...f }, m) => cr(
      "svg",
      {
        ref: m,
        ...st,
        width: s,
        height: s,
        stroke: o,
        strokeWidth: d ? Number(l) * 24 / Number(s) : l,
        className: `lucide lucide-${it(r)}`,
        ...f
      },
      [
        ...n.map(([v, p]) => cr(v, p)),
        ...(Array.isArray(c) ? c : [c]) || []
      ]
    )
  );
  return a.displayName = `${r}`, a;
};
var fe = lt;
const fr = fe("AlertTriangle", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
      key: "c3ski4"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]), ct = fe("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]), Ae = fe("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["polyline", { points: "22 4 12 14.01 9 11.01", key: "6xbx8j" }]
]), wr = fe("FileText", [
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
]), dt = fe("Linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
]), ut = fe("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]), pr = fe("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
]);
function jr(r) {
  var n, a, o = "";
  if (typeof r == "string" || typeof r == "number")
    o += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var s = r.length;
      for (n = 0; n < s; n++)
        r[n] && (a = jr(r[n])) && (o && (o += " "), o += a);
    } else
      for (a in r)
        r[a] && (o && (o += " "), o += a);
  return o;
}
function Cr() {
  for (var r, n, a = 0, o = "", s = arguments.length; a < s; a++)
    (r = arguments[a]) && (n = jr(r)) && (o && (o += " "), o += n);
  return o;
}
function ft() {
  for (var r = 0, n, a, o = ""; r < arguments.length; )
    (n = arguments[r++]) && (a = Nr(n)) && (o && (o += " "), o += a);
  return o;
}
function Nr(r) {
  if (typeof r == "string")
    return r;
  for (var n, a = "", o = 0; o < r.length; o++)
    r[o] && (n = Nr(r[o])) && (a && (a += " "), a += n);
  return a;
}
var Ke = "-";
function pt(r) {
  var n = vt(r), a = r.conflictingClassGroups, o = r.conflictingClassGroupModifiers, s = o === void 0 ? {} : o;
  function l(c) {
    var f = c.split(Ke);
    return f[0] === "" && f.length !== 1 && f.shift(), kr(f, n) || mt(c);
  }
  function d(c, f) {
    var m = a[c] || [];
    return f && s[c] ? [].concat(m, s[c]) : m;
  }
  return {
    getClassGroupId: l,
    getConflictingClassGroupIds: d
  };
}
function kr(r, n) {
  var d;
  if (r.length === 0)
    return n.classGroupId;
  var a = r[0], o = n.nextPart.get(a), s = o ? kr(r.slice(1), o) : void 0;
  if (s)
    return s;
  if (n.validators.length !== 0) {
    var l = r.join(Ke);
    return (d = n.validators.find(function(c) {
      var f = c.validator;
      return f(l);
    })) == null ? void 0 : d.classGroupId;
  }
}
var mr = /^\[(.+)\]$/;
function mt(r) {
  if (mr.test(r)) {
    var n = mr.exec(r)[1], a = n == null ? void 0 : n.substring(0, n.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}
function vt(r) {
  var n = r.theme, a = r.prefix, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, s = bt(Object.entries(r.classGroups), a);
  return s.forEach(function(l) {
    var d = l[0], c = l[1];
    Ye(c, o, d, n);
  }), o;
}
function Ye(r, n, a, o) {
  r.forEach(function(s) {
    if (typeof s == "string") {
      var l = s === "" ? n : vr(n, s);
      l.classGroupId = a;
      return;
    }
    if (typeof s == "function") {
      if (gt(s)) {
        Ye(s(o), n, a, o);
        return;
      }
      n.validators.push({
        validator: s,
        classGroupId: a
      });
      return;
    }
    Object.entries(s).forEach(function(d) {
      var c = d[0], f = d[1];
      Ye(f, vr(n, c), a, o);
    });
  });
}
function vr(r, n) {
  var a = r;
  return n.split(Ke).forEach(function(o) {
    a.nextPart.has(o) || a.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(o);
  }), a;
}
function gt(r) {
  return r.isThemeGetter;
}
function bt(r, n) {
  return n ? r.map(function(a) {
    var o = a[0], s = a[1], l = s.map(function(d) {
      return typeof d == "string" ? n + d : typeof d == "object" ? Object.fromEntries(Object.entries(d).map(function(c) {
        var f = c[0], m = c[1];
        return [n + f, m];
      })) : d;
    });
    return [o, l];
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
  var n = 0, a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  function s(l, d) {
    a.set(l, d), n++, n > r && (n = 0, o = a, a = /* @__PURE__ */ new Map());
  }
  return {
    get: function(d) {
      var c = a.get(d);
      if (c !== void 0)
        return c;
      if ((c = o.get(d)) !== void 0)
        return s(d, c), c;
    },
    set: function(d, c) {
      a.has(d) ? a.set(d, c) : s(d, c);
    }
  };
}
var Rr = "!";
function xt(r) {
  var n = r.separator || ":", a = n.length === 1, o = n[0], s = n.length;
  return function(d) {
    for (var c = [], f = 0, m = 0, v, p = 0; p < d.length; p++) {
      var b = d[p];
      if (f === 0) {
        if (b === o && (a || d.slice(p, p + s) === n)) {
          c.push(d.slice(m, p)), m = p + s;
          continue;
        }
        if (b === "/") {
          v = p;
          continue;
        }
      }
      b === "[" ? f++ : b === "]" && f--;
    }
    var S = c.length === 0 ? d : d.substring(m), A = S.startsWith(Rr), _ = A ? S.substring(1) : S, M = v && v > m ? v - m : void 0;
    return {
      modifiers: c,
      hasImportantModifier: A,
      baseClassName: _,
      maybePostfixModifierPosition: M
    };
  };
}
function yt(r) {
  if (r.length <= 1)
    return r;
  var n = [], a = [];
  return r.forEach(function(o) {
    var s = o[0] === "[";
    s ? (n.push.apply(n, a.sort().concat([o])), a = []) : a.push(o);
  }), n.push.apply(n, a.sort()), n;
}
function wt(r) {
  return {
    cache: ht(r.cacheSize),
    splitModifiers: xt(r),
    ...pt(r)
  };
}
var jt = /\s+/;
function Ct(r, n) {
  var a = n.splitModifiers, o = n.getClassGroupId, s = n.getConflictingClassGroupIds, l = /* @__PURE__ */ new Set();
  return r.trim().split(jt).map(function(d) {
    var c = a(d), f = c.modifiers, m = c.hasImportantModifier, v = c.baseClassName, p = c.maybePostfixModifierPosition, b = o(p ? v.substring(0, p) : v), S = !!p;
    if (!b) {
      if (!p)
        return {
          isTailwindClass: !1,
          originalClassName: d
        };
      if (b = o(v), !b)
        return {
          isTailwindClass: !1,
          originalClassName: d
        };
      S = !1;
    }
    var A = yt(f).join(":"), _ = m ? A + Rr : A;
    return {
      isTailwindClass: !0,
      modifierId: _,
      classGroupId: b,
      originalClassName: d,
      hasPostfixModifier: S
    };
  }).reverse().filter(function(d) {
    if (!d.isTailwindClass)
      return !0;
    var c = d.modifierId, f = d.classGroupId, m = d.hasPostfixModifier, v = c + f;
    return l.has(v) ? !1 : (l.add(v), s(f, m).forEach(function(p) {
      return l.add(c + p);
    }), !0);
  }).reverse().map(function(d) {
    return d.originalClassName;
  }).join(" ");
}
function Nt() {
  for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
    n[a] = arguments[a];
  var o, s, l, d = c;
  function c(m) {
    var v = n[0], p = n.slice(1), b = p.reduce(function(S, A) {
      return A(S);
    }, v());
    return o = wt(b), s = o.cache.get, l = o.cache.set, d = f, f(m);
  }
  function f(m) {
    var v = s(m);
    if (v)
      return v;
    var p = Ct(m, o);
    return l(m, p), p;
  }
  return function() {
    return d(ft.apply(null, arguments));
  };
}
function E(r) {
  var n = function(o) {
    return o[r] || [];
  };
  return n.isThemeGetter = !0, n;
}
var Er = /^\[(?:([a-z-]+):)?(.+)\]$/i, kt = /^\d+\/\d+$/, Rt = /* @__PURE__ */ new Set(["px", "full", "screen"]), Et = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, _t = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Tt = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function X(r) {
  return ue(r) || Rt.has(r) || kt.test(r) || qe(r);
}
function qe(r) {
  return pe(r, "length", Mt);
}
function St(r) {
  return pe(r, "size", _r);
}
function Pt(r) {
  return pe(r, "position", _r);
}
function At(r) {
  return pe(r, "url", Lt);
}
function Pe(r) {
  return pe(r, "number", ue);
}
function ue(r) {
  return !Number.isNaN(Number(r));
}
function Ot(r) {
  return r.endsWith("%") && ue(r.slice(0, -1));
}
function Ee(r) {
  return gr(r) || pe(r, "number", gr);
}
function x(r) {
  return Er.test(r);
}
function _e() {
  return !0;
}
function ae(r) {
  return Et.test(r);
}
function It(r) {
  return pe(r, "", Ft);
}
function pe(r, n, a) {
  var o = Er.exec(r);
  return o ? o[1] ? o[1] === n : a(o[2]) : !1;
}
function Mt(r) {
  return _t.test(r);
}
function _r() {
  return !1;
}
function Lt(r) {
  return r.startsWith("url(");
}
function gr(r) {
  return Number.isInteger(Number(r));
}
function Ft(r) {
  return Tt.test(r);
}
function $t() {
  var r = E("colors"), n = E("spacing"), a = E("blur"), o = E("brightness"), s = E("borderColor"), l = E("borderRadius"), d = E("borderSpacing"), c = E("borderWidth"), f = E("contrast"), m = E("grayscale"), v = E("hueRotate"), p = E("invert"), b = E("gap"), S = E("gradientColorStops"), A = E("gradientColorStopPositions"), _ = E("inset"), M = E("margin"), R = E("opacity"), N = E("padding"), oe = E("saturate"), U = E("scale"), te = E("sepia"), me = E("skew"), ve = E("space"), se = E("translate"), L = function() {
    return ["auto", "contain", "none"];
  }, W = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, Q = function() {
    return ["auto", x, n];
  }, y = function() {
    return [x, n];
  }, O = function() {
    return ["", X];
  }, D = function() {
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
  }, ie = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, q = function() {
    return [ue, Pe];
  }, K = function() {
    return [ue, x];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [_e],
      spacing: [X],
      blur: ["none", "", ae, x],
      brightness: q(),
      borderColor: [r],
      borderRadius: ["none", "", "full", ae, x],
      borderSpacing: y(),
      borderWidth: O(),
      contrast: q(),
      grayscale: Y(),
      hueRotate: K(),
      invert: Y(),
      gap: y(),
      gradientColorStops: [r],
      gradientColorStopPositions: [Ot, qe],
      inset: Q(),
      margin: Q(),
      opacity: q(),
      padding: y(),
      saturate: q(),
      scale: q(),
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
        overscroll: L()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": L()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": L()
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
        inset: [_]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [_]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [_]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [_]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [_]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [_]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [_]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [_]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [_]
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
        z: ["auto", Ee]
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
        order: ["first", "last", "none", Ee]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [_e]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ee]
        }, x]
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
        "grid-rows": [_e]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ee]
        }, x]
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
        p: [N]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [N]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [N]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [N]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [N]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [N]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [N]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [N]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [N]
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
        "space-x": [ve]
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
        "space-y": [ve]
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
        w: ["auto", "min", "max", "fit", x, n]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", x, X]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [ae]
        }, ae, x]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [x, n, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", x, X]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [x, n, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ae, qe]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Pe]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [_e]
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
        "line-clamp": ["none", ue, Pe]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", x, X]
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
        "placeholder-opacity": [R]
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
        "text-opacity": [R]
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
        decoration: ["auto", "from-font", X]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", x, X]
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
        "bg-opacity": [R]
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
        bg: [].concat(G(), [Pt])
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
        from: [S]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [S]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [S]
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
        "border-opacity": [R]
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
        "divide-opacity": [R]
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
        "outline-offset": [x, X]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [X]
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
        ring: O()
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
        "ring-opacity": [R]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [X]
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
        shadow: [_e]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [R]
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
        blur: [a]
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
        "drop-shadow": ["", "none", ae, x]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [m]
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
        invert: [p]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [oe]
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
        "backdrop-blur": [a]
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
        "backdrop-grayscale": [m]
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
        "backdrop-invert": [p]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [R]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [oe]
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
        rotate: [Ee, x]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [se]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [se]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [me]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [me]
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
        stroke: [X, Pe]
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
var Dt = /* @__PURE__ */ Nt($t);
function Z(...r) {
  return Dt(Cr(r));
}
const Oe = T.forwardRef(({ className: r, ...n }, a) => /* @__PURE__ */ t.jsx(
  "div",
  {
    ref: a,
    className: Z(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      r
    ),
    ...n
  }
));
Oe.displayName = "Card";
const Tr = T.forwardRef(({ className: r, ...n }, a) => /* @__PURE__ */ t.jsx(
  "div",
  {
    ref: a,
    className: Z("flex flex-col space-y-1.5 p-6", r),
    ...n
  }
));
Tr.displayName = "CardHeader";
const Sr = T.forwardRef(({ className: r, ...n }, a) => /* @__PURE__ */ t.jsx(
  "h3",
  {
    ref: a,
    className: Z(
      "text-2xl font-semibold leading-none tracking-tight",
      r
    ),
    ...n
  }
));
Sr.displayName = "CardTitle";
const zt = T.forwardRef(({ className: r, ...n }, a) => /* @__PURE__ */ t.jsx(
  "p",
  {
    ref: a,
    className: Z("text-sm text-muted-foreground", r),
    ...n
  }
));
zt.displayName = "CardDescription";
const Pr = T.forwardRef(({ className: r, ...n }, a) => /* @__PURE__ */ t.jsx("div", { ref: a, className: Z("p-6 pt-0", r), ...n }));
Pr.displayName = "CardContent";
const Wt = T.forwardRef(({ className: r, ...n }, a) => /* @__PURE__ */ t.jsx(
  "div",
  {
    ref: a,
    className: Z("flex items-center p-6 pt-0", r),
    ...n
  }
));
Wt.displayName = "CardFooter";
function Qt({ steps: r, currentStep: n, className: a }) {
  return /* @__PURE__ */ t.jsx(Oe, { className: `p-6 ${a || ""}`, children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-center relative", children: [
    /* @__PURE__ */ t.jsx("h3", { className: "font-semibold text-gray-900 absolute left-0", children: "Progress" }),
    /* @__PURE__ */ t.jsx("div", { className: "flex items-center space-x-8", children: r.map((o, s) => /* @__PURE__ */ t.jsxs(Je.Fragment, { children: [
      /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ t.jsx("div", { className: "relative", children: o.status === "current" ? /* @__PURE__ */ t.jsx("div", { className: "w-8 h-8 rounded-full border-2 border-blue-500 bg-blue-500 flex items-center justify-center", children: /* @__PURE__ */ t.jsx("div", { className: "w-3 h-3 rounded-full bg-white" }) }) : o.status === "completed" ? /* @__PURE__ */ t.jsx(Ae, { className: "w-8 h-8 text-green-500" }) : /* @__PURE__ */ t.jsx("div", { className: "w-8 h-8 rounded-full border-2 border-gray-300 bg-white" }) }),
        /* @__PURE__ */ t.jsx("span", { className: `text-sm font-medium ${o.status === "current" ? "text-blue-600" : "text-gray-900"}`, children: o.label })
      ] }),
      s < r.length - 1 && /* @__PURE__ */ t.jsx("div", { className: "w-12 h-0.5 bg-gray-200" })
    ] }, o.id)) })
  ] }) });
}
function br(r, n) {
  if (typeof r == "function")
    return r(n);
  r != null && (r.current = n);
}
function Gt(...r) {
  return (n) => {
    let a = !1;
    const o = r.map((s) => {
      const l = br(s, n);
      return !a && typeof l == "function" && (a = !0), l;
    });
    if (a)
      return () => {
        for (let s = 0; s < o.length; s++) {
          const l = o[s];
          typeof l == "function" ? l() : br(r[s], null);
        }
      };
  };
}
// @__NO_SIDE_EFFECTS__
function Vt(r) {
  const n = /* @__PURE__ */ Yt(r), a = T.forwardRef((o, s) => {
    const { children: l, ...d } = o, c = T.Children.toArray(l), f = c.find(Xt);
    if (f) {
      const m = f.props.children, v = c.map((p) => p === f ? T.Children.count(m) > 1 ? T.Children.only(null) : T.isValidElement(m) ? m.props.children : null : p);
      return /* @__PURE__ */ t.jsx(n, { ...d, ref: s, children: T.isValidElement(m) ? T.cloneElement(m, void 0, v) : null });
    }
    return /* @__PURE__ */ t.jsx(n, { ...d, ref: s, children: l });
  });
  return a.displayName = `${r}.Slot`, a;
}
var Bt = /* @__PURE__ */ Vt("Slot");
// @__NO_SIDE_EFFECTS__
function Yt(r) {
  const n = T.forwardRef((a, o) => {
    const { children: s, ...l } = a;
    if (T.isValidElement(s)) {
      const d = Kt(s), c = Jt(l, s.props);
      return s.type !== T.Fragment && (c.ref = o ? Gt(o, d) : d), T.cloneElement(s, c);
    }
    return T.Children.count(s) > 1 ? T.Children.only(null) : null;
  });
  return n.displayName = `${r}.SlotClone`, n;
}
var qt = Symbol("radix.slottable");
function Xt(r) {
  return T.isValidElement(r) && typeof r.type == "function" && "__radixId" in r.type && r.type.__radixId === qt;
}
function Jt(r, n) {
  const a = { ...n };
  for (const o in n) {
    const s = r[o], l = n[o];
    /^on[A-Z]/.test(o) ? s && l ? a[o] = (...c) => {
      const f = l(...c);
      return s(...c), f;
    } : s && (a[o] = s) : o === "style" ? a[o] = { ...s, ...l } : o === "className" && (a[o] = [s, l].filter(Boolean).join(" "));
  }
  return { ...r, ...a };
}
function Kt(r) {
  var o, s;
  let n = (o = Object.getOwnPropertyDescriptor(r.props, "ref")) == null ? void 0 : o.get, a = n && "isReactWarning" in n && n.isReactWarning;
  return a ? r.ref : (n = (s = Object.getOwnPropertyDescriptor(r, "ref")) == null ? void 0 : s.get, a = n && "isReactWarning" in n && n.isReactWarning, a ? r.props.ref : r.props.ref || r.ref);
}
const hr = (r) => typeof r == "boolean" ? `${r}` : r === 0 ? "0" : r, xr = Cr, Ar = (r, n) => (a) => {
  var o;
  if ((n == null ? void 0 : n.variants) == null)
    return xr(r, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
  const { variants: s, defaultVariants: l } = n, d = Object.keys(s).map((m) => {
    const v = a == null ? void 0 : a[m], p = l == null ? void 0 : l[m];
    if (v === null)
      return null;
    const b = hr(v) || hr(p);
    return s[m][b];
  }), c = a && Object.entries(a).reduce((m, v) => {
    let [p, b] = v;
    return b === void 0 || (m[p] = b), m;
  }, {}), f = n == null || (o = n.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((m, v) => {
    let { class: p, className: b, ...S } = v;
    return Object.entries(S).every((A) => {
      let [_, M] = A;
      return Array.isArray(M) ? M.includes({
        ...l,
        ...c
      }[_]) : {
        ...l,
        ...c
      }[_] === M;
    }) ? [
      ...m,
      p,
      b
    ] : m;
  }, []);
  return xr(r, d, f, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
}, Ht = Ar(
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
), Te = T.forwardRef(
  ({ className: r, variant: n, size: a, asChild: o = !1, ...s }, l) => {
    const d = o ? Bt : "button";
    return /* @__PURE__ */ t.jsx(
      d,
      {
        className: Z(Ht({ variant: n, size: a, className: r })),
        ref: l,
        ...s
      }
    );
  }
);
Te.displayName = "Button";
const Or = T.forwardRef(
  ({ className: r, type: n, ...a }, o) => /* @__PURE__ */ t.jsx(
    "input",
    {
      type: n,
      className: Z(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        r
      ),
      ref: o,
      ...a
    }
  )
);
Or.displayName = "Input";
const Xe = T.forwardRef(
  ({ className: r, ...n }, a) => /* @__PURE__ */ t.jsx(
    "textarea",
    {
      className: Z(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        r
      ),
      ref: a,
      ...n
    }
  )
);
Xe.displayName = "Textarea";
const Zt = Ar(
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
function yr({ className: r, variant: n, ...a }) {
  return /* @__PURE__ */ t.jsx("div", { className: Z(Zt({ variant: n }), r), ...a });
}
function Ve({
  type: r,
  title: n,
  description: a,
  icon: o,
  onFileUpload: s,
  onLinkedInUrl: l,
  onTextInput: d,
  required: c = !1,
  optional: f = !1,
  disabled: m = !1,
  currentValue: v,
  onUploadComplete: p,
  onUploadError: b
}) {
  const [S, A] = de(!1), [_, M] = de(""), [R, N] = de(v || ""), [oe, U] = de(null), [te, me] = de(null), [ve, se] = de(null), [L, W] = de(null);
  nt(() => {
    r === "coverLetter" && v && N(v);
  }, [v, r]);
  const Q = ({ message: w }) => /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-2 text-red-600 text-sm mt-2", children: [
    /* @__PURE__ */ t.jsx(fr, { className: "w-4 h-4" }),
    /* @__PURE__ */ t.jsx("span", { children: w })
  ] }), y = oe !== null, O = typeof R == "string" && R.trim().length >= 10, D = y && O, G = v && (r === "resume" || r === "coverLetter" || r === "caseStudies" ? v instanceof File : r === "linkedin" ? typeof v == "string" && v.length > 0 : !1) || oe !== null, J = re((w) => {
    w.preventDefault(), A(!0);
  }, []), ne = re((w) => {
    w.preventDefault(), A(!1);
  }, []), ee = re((w) => {
    w.preventDefault(), A(!1);
    const $ = Array.from(w.dataTransfer.files);
    if ($.length === 0)
      return;
    const H = $[0];
    K(H);
  }, []), Y = re((w) => {
    var H;
    const $ = (H = w.target.files) == null ? void 0 : H[0];
    $ && K($);
  }, []), ie = re((w) => {
    M(w.target.value), L && W(null);
  }, [L]), q = re((w) => {
    N(w.target.value), L && W(null);
  }, [L]), K = re((w) => {
    var le;
    if (!s)
      return;
    W(null);
    const $ = 5 * 1024 * 1024;
    if (w.size > $) {
      W("File size must be less than 5MB");
      return;
    }
    const H = [".pdf", ".docx", ".txt", ".md"], Le = "." + ((le = w.name.split(".").pop()) == null ? void 0 : le.toLowerCase());
    if (!H.includes(Le)) {
      W("File type must be PDF, DOCX, TXT, or MD");
      return;
    }
    s(r, w), se(w.name), U(`${w.name}_${Date.now()}`), p == null || p(`${w.name}_${Date.now()}`, r);
  }, [s, r, p]), F = re(() => {
    if (!l)
      return;
    W(null);
    const w = _.trim();
    if (!/^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/.test(w)) {
      W("Please enter a valid LinkedIn profile URL (e.g., https://linkedin.com/in/username)");
      return;
    }
    l(w), U(`linkedin_${Date.now()}`), p == null || p(`linkedin_${Date.now()}`, "linkedin");
  }, [_, l, p]), Ie = re(async () => {
    if (!y && !O) {
      b == null || b("Please upload a file or enter text");
      return;
    }
    try {
      let w, $;
      D ? (w = `${te}

--- Additional Context ---
${R}`, $ = "Combined file and text") : y ? (w = te, $ = "Uploaded file") : (w = typeof R == "string" ? R : "", $ = "Manual text"), console.log(`Processing ${$}:`, { length: w.length }), await new Promise((H) => setTimeout(H, 1e3)), console.log(`${$} saved successfully`), d == null || d(w), p == null || p(`${$}_${Date.now()}`, "coverLetter");
    } catch (w) {
      b == null || b(w instanceof Error ? w.message : "Failed to save content");
    }
  }, [y, O, D, te, R, d, p, b]), Me = () => D ? "Combine File & Text" : y ? "Process Uploaded File" : "Add Cover Letter Text", ye = () => !y && !O, we = () => /* @__PURE__ */ t.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: `border-2 border-dashed rounded-lg p-6 text-center transition-colors ${S ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"}`,
        onDragOver: J,
        onDragLeave: ne,
        onDrop: ee,
        children: [
          /* @__PURE__ */ t.jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ t.jsx(pr, { className: "w-12 h-12 text-gray-400" }) }),
          /* @__PURE__ */ t.jsx("p", { className: "text-gray-600 mb-6", children: "Drag and drop your file here, or" }),
          /* @__PURE__ */ t.jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ t.jsx(
              "input",
              {
                type: "file",
                className: "hidden",
                accept: ".pdf,.docx,.txt,.md",
                onChange: Y,
                id: `${r}-file`
              }
            ),
            /* @__PURE__ */ t.jsx(
              "label",
              {
                htmlFor: `${r}-file`,
                className: "inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer",
                children: "Choose File"
              }
            )
          ] }),
          /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-500", children: "PDF, DOCX, TXT, MD (max 5MB)" }),
          L && /* @__PURE__ */ t.jsx(Q, { message: L })
        ]
      }
    ),
    r === "resume" && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ t.jsx("div", { className: "w-full border-t border-gray-300" }) }),
        /* @__PURE__ */ t.jsx("div", { className: "relative flex justify-center text-sm", children: /* @__PURE__ */ t.jsx("span", { className: "px-2 bg-white text-gray-500", children: "OR" }) })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ t.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Paste resume content directly for fast and reliable processing" }),
        /* @__PURE__ */ t.jsx(
          Xe,
          {
            placeholder: "Paste your resume content here...",
            value: typeof R == "string" ? R : "",
            onChange: q,
            rows: 3
          }
        )
      ] })
    ] })
  ] }), ge = () => /* @__PURE__ */ t.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ t.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ t.jsx("label", { className: "text-sm font-medium text-gray-700", children: "LinkedIn Profile URL" }),
    /* @__PURE__ */ t.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ t.jsx(
        Or,
        {
          type: "url",
          placeholder: "https://linkedin.com/in/yourprofile",
          value: _,
          onChange: ie,
          className: "flex-1"
        }
      ),
      /* @__PURE__ */ t.jsx(
        Te,
        {
          onClick: F,
          disabled: !_.trim(),
          size: "sm",
          className: "bg-blue-500 hover:bg-blue-600 text-white",
          children: "Connect"
        }
      )
    ] }),
    G && /* @__PURE__ */ t.jsx("p", { className: "text-sm text-green-600", children: "Valid LinkedIn URL" }),
    L && /* @__PURE__ */ t.jsx(Q, { message: L })
  ] }) }), je = () => /* @__PURE__ */ t.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: `border-2 border-dashed rounded-lg p-6 text-center transition-colors ${S ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"}`,
        onDragOver: J,
        onDragLeave: ne,
        onDrop: ee,
        children: [
          /* @__PURE__ */ t.jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ t.jsx(pr, { className: "w-12 h-12 text-gray-400" }) }),
          /* @__PURE__ */ t.jsx("p", { className: "text-gray-600 mb-6", children: "Drag and drop your file here, or" }),
          /* @__PURE__ */ t.jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ t.jsx(
              "input",
              {
                type: "file",
                className: "hidden",
                accept: ".pdf,.docx,.txt,.md",
                onChange: Y,
                id: "cover-letter-file"
              }
            ),
            /* @__PURE__ */ t.jsx(
              "label",
              {
                htmlFor: "cover-letter-file",
                className: "inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer",
                children: "Choose File"
              }
            )
          ] }),
          /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-500", children: "PDF, DOCX, TXT, MD (max 5MB)" }),
          L && /* @__PURE__ */ t.jsx(Q, { message: L })
        ]
      }
    ),
    /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ t.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ t.jsx("div", { className: "w-full border-t border-gray-300" }) }),
      /* @__PURE__ */ t.jsx("div", { className: "relative flex justify-center text-sm", children: /* @__PURE__ */ t.jsx("span", { className: "px-2 bg-white text-gray-500", children: "OR" }) })
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ t.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Or paste cover letter content directly for fast and reliable processing" }),
      /* @__PURE__ */ t.jsx(
        Xe,
        {
          placeholder: "Paste your best cover letter content here...",
          value: typeof R == "string" ? R : "",
          onChange: q,
          rows: 3
        }
      )
    ] }),
    D && /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-2 text-blue-600 text-sm bg-blue-50 p-3 rounded-lg", children: [
      /* @__PURE__ */ t.jsx("div", { className: "w-2 h-2 bg-blue-600 rounded-full" }),
      /* @__PURE__ */ t.jsx("span", { children: "You have both a file and text. We'll combine them into one submission." })
    ] }),
    L && /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-2 text-red-600 text-sm", children: [
      /* @__PURE__ */ t.jsx(fr, { className: "w-4 h-4" }),
      L
    ] }),
    (O || y) && /* @__PURE__ */ t.jsx(
      Te,
      {
        onClick: Ie,
        disabled: ye(),
        className: "w-full",
        children: Me()
      }
    )
  ] }), be = () => r === "linkedin" ? ge() : r === "coverLetter" ? je() : we();
  return /* @__PURE__ */ t.jsxs(Oe, { className: `transition-all duration-200 ${G ? "ring-2 ring-green-200 bg-green-50" : ""} ${m ? "opacity-50 pointer-events-none" : ""}`, children: [
    /* @__PURE__ */ t.jsx(Tr, { className: "!p-6", children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ t.jsx("div", { className: `w-12 h-12 rounded-lg flex items-center justify-center ${G ? "bg-green-100" : "bg-gray-100"}`, children: /* @__PURE__ */ t.jsx(o, { className: `w-6 h-6 ${G ? "text-green-600" : "text-gray-600"}` }) }),
      /* @__PURE__ */ t.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ t.jsxs(Sr, { className: "text-lg text-gray-900 flex items-center gap-2", children: [
          n,
          c && /* @__PURE__ */ t.jsx(yr, { variant: "destructive", className: "text-xs", children: "Required" }),
          f && /* @__PURE__ */ t.jsx(yr, { variant: "secondary", className: "text-xs", children: "Optional" })
        ] }),
        /* @__PURE__ */ t.jsx("p", { className: "text-gray-600", children: a })
      ] })
    ] }) }),
    /* @__PURE__ */ t.jsx(Pr, { children: G && r !== "linkedin" ? /* @__PURE__ */ t.jsx("div", { className: "space-y-3", children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg border", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ t.jsx("div", { className: "w-8 h-8 bg-blue-100 rounded flex items-center justify-center", children: /* @__PURE__ */ t.jsx(wr, { className: "w-4 h-4 text-blue-600" }) }),
        /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsx("p", { className: "font-medium text-gray-900", children: ve || "File uploaded" }) })
      ] }),
      /* @__PURE__ */ t.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ t.jsx(
        Te,
        {
          variant: "secondary",
          size: "sm",
          onClick: () => {
            U(null), se(null), me(null), W(null), s == null || s(r, null);
          },
          className: "text-gray-600 border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:underline",
          children: "Remove"
        }
      ) })
    ] }) }) : be() })
  ] });
}
function en({
  currentStep: r,
  onFileUpload: n,
  onLinkedInUrl: a,
  onTextInput: o,
  onUploadComplete: s,
  onUploadError: l,
  onNextStep: d,
  isProcessing: c = !1,
  onboardingData: f,
  linkedinUrl: m
}) {
  return /* @__PURE__ */ t.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ t.jsx(Oe, { className: "p-6", children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-center relative", children: [
      /* @__PURE__ */ t.jsx("h3", { className: "font-semibold text-gray-900 absolute left-0", children: "Progress" }),
      /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-8", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ t.jsx("div", { className: "relative", children: r === "welcome" ? /* @__PURE__ */ t.jsx("div", { className: "w-8 h-8 rounded-full border-2 border-blue-500 bg-blue-500 flex items-center justify-center", children: /* @__PURE__ */ t.jsx("div", { className: "w-3 h-3 rounded-full bg-white" }) }) : /* @__PURE__ */ t.jsx(Ae, { className: "w-8 h-8 text-green-500" }) }),
          /* @__PURE__ */ t.jsx("span", { className: `text-sm font-medium ${r === "welcome" ? "text-blue-600" : "text-gray-900"}`, children: "Welcome" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "w-12 h-0.5 bg-gray-200" }),
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ t.jsx("div", { className: "relative", children: r === "upload" ? /* @__PURE__ */ t.jsx("div", { className: "w-8 h-8 rounded-full border-2 border-blue-500 bg-blue-500 flex items-center justify-center", children: /* @__PURE__ */ t.jsx("div", { className: "w-3 h-3 rounded-full bg-white" }) }) : r === "welcome" ? /* @__PURE__ */ t.jsx("div", { className: "w-8 h-8 rounded-full border-2 border-gray-300 bg-white" }) : /* @__PURE__ */ t.jsx(Ae, { className: "w-8 h-8 text-green-500" }) }),
          /* @__PURE__ */ t.jsx("span", { className: `text-sm font-medium ${r === "upload" ? "text-blue-600" : "text-gray-900"}`, children: "Content" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "w-12 h-0.5 bg-gray-200" }),
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ t.jsx("div", { className: "relative", children: r === "review" ? /* @__PURE__ */ t.jsx("div", { className: "w-8 h-8 rounded-full border-2 border-blue-500 bg-blue-500 flex items-center justify-center", children: /* @__PURE__ */ t.jsx("div", { className: "w-3 h-3 rounded-full bg-white" }) }) : ["welcome", "upload"].includes(r) ? /* @__PURE__ */ t.jsx("div", { className: "w-8 h-8 rounded-full border-2 border-gray-300 bg-white" }) : /* @__PURE__ */ t.jsx(Ae, { className: "w-8 h-8 text-green-500" }) }),
          /* @__PURE__ */ t.jsx("span", { className: `text-sm font-medium ${r === "review" ? "text-blue-600" : "text-gray-900"}`, children: "Review" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ t.jsx("div", { className: "text-center space-y-4", children: /* @__PURE__ */ t.jsx("h2", { className: "text-3xl font-bold text-foreground", children: "Add Your Content" }) }),
    /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col gap-6", children: [
      /* @__PURE__ */ t.jsx(
        Ve,
        {
          type: "resume",
          title: "Resume",
          description: "",
          icon: wr,
          onFileUpload: n,
          onUploadComplete: s,
          onUploadError: l,
          currentValue: f.resume
        }
      ),
      /* @__PURE__ */ t.jsx(
        Ve,
        {
          type: "linkedin",
          title: "LinkedIn Profile",
          description: "Enter your LinkedIn profile URL to import work history and skills",
          icon: dt,
          onLinkedInUrl: a,
          onUploadComplete: s,
          onUploadError: l,
          currentValue: m
        }
      ),
      /* @__PURE__ */ t.jsx(
        Ve,
        {
          type: "coverLetter",
          title: "Best Cover Letter",
          description: "",
          icon: ut,
          onTextInput: o,
          onFileUpload: n,
          onUploadComplete: s,
          onUploadError: l,
          currentValue: f.coverLetter
        }
      )
    ] }),
    /* @__PURE__ */ t.jsx("div", { className: "text-center", children: /* @__PURE__ */ t.jsx(
      Te,
      {
        size: "lg",
        onClick: d,
        disabled: !f.resume || !f.coverLetter && !f.coverLetterFile,
        className: "px-8 py-3 text-lg bg-blue-500 hover:bg-blue-600 text-white",
        children: c ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
          /* @__PURE__ */ t.jsx("div", { className: "animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" }),
          "Analyzing..."
        ] }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
          "Review & Approve",
          /* @__PURE__ */ t.jsx(ct, { className: "ml-2 w-5 h-5" })
        ] })
      }
    ) })
  ] });
}
export {
  yr as Badge,
  Te as Button,
  Oe as Card,
  Pr as CardContent,
  zt as CardDescription,
  Wt as CardFooter,
  Tr as CardHeader,
  Sr as CardTitle,
  en as ContentUploadModule,
  Ve as FileUploadCard,
  Or as Input,
  Qt as ProgressBar,
  Xe as Textarea,
  Zt as badgeVariants,
  Ht as buttonVariants
};
