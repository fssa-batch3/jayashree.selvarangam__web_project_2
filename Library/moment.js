!(function (e, t) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = t())
    : typeof define === "function" && define.amd
    ? define(t)
    : (e.moment = t());
})(this, () => {
  let H;
  function f() {
    return H.apply(null, arguments);
  }
  function a(e) {
    return (
      e instanceof Array ||
      Object.prototype.toString.call(e) === "[object Array]"
    );
  }
  function F(e) {
    return e != null && Object.prototype.toString.call(e) === "[object Object]";
  }
  function c(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function L(e) {
    if (Object.getOwnPropertyNames)
      return Object.getOwnPropertyNames(e).length === 0;
    for (const t in e) if (c(e, t)) return;
    return 1;
  }
  function o(e) {
    return void 0 === e;
  }
  function u(e) {
    return (
      typeof e === "number" ||
      Object.prototype.toString.call(e) === "[object Number]"
    );
  }
  function V(e) {
    return (
      e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
    );
  }
  function G(e, t) {
    for (var n = [], s = e.length, i = 0; i < s; ++i) n.push(t(e[i], i));
    return n;
  }
  function E(e, t) {
    for (const n in t) c(t, n) && (e[n] = t[n]);
    return (
      c(t, "toString") && (e.toString = t.toString),
      c(t, "valueOf") && (e.valueOf = t.valueOf),
      e
    );
  }
  function l(e, t, n, s) {
    return Pt(e, t, n, s, !0).utc();
  }
  function m(e) {
    return (
      e._pf == null &&
        (e._pf = {
          empty: !1,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: !1,
          invalidEra: null,
          invalidMonth: null,
          invalidFormat: !1,
          userInvalidated: !1,
          iso: !1,
          parsedDateParts: [],
          era: null,
          meridiem: null,
          rfc2822: !1,
          weekdayMismatch: !1,
        }),
      e._pf
    );
  }
  function A(e) {
    if (e._isValid == null) {
      const t = m(e);
      var n = j.call(t.parsedDateParts, (e) => e != null);
      var n =
        !isNaN(e._d.getTime()) &&
        t.overflow < 0 &&
        !t.empty &&
        !t.invalidEra &&
        !t.invalidMonth &&
        !t.invalidWeekday &&
        !t.weekdayMismatch &&
        !t.nullInput &&
        !t.invalidFormat &&
        !t.userInvalidated &&
        (!t.meridiem || (t.meridiem && n));
      if (
        (e._strict &&
          (n =
            n &&
            t.charsLeftOver === 0 &&
            t.unusedTokens.length === 0 &&
            void 0 === t.bigHour),
        Object.isFrozen != null && Object.isFrozen(e))
      )
        return n;
      e._isValid = n;
    }
    return e._isValid;
  }
  function I(e) {
    const t = l(NaN);
    return e != null ? E(m(t), e) : (m(t).userInvalidated = !0), t;
  }
  var j =
    Array.prototype.some ||
    function (e) {
      for (let t = Object(this), n = t.length >>> 0, s = 0; s < n; s++)
        if (s in t && e.call(this, t[s], s, t)) return !0;
      return !1;
    };
  const Z = (f.momentProperties = []);
  let z = !1;
  function $(e, t) {
    let n;
    let s;
    let i;
    const r = Z.length;
    if (
      (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
      o(t._i) || (e._i = t._i),
      o(t._f) || (e._f = t._f),
      o(t._l) || (e._l = t._l),
      o(t._strict) || (e._strict = t._strict),
      o(t._tzm) || (e._tzm = t._tzm),
      o(t._isUTC) || (e._isUTC = t._isUTC),
      o(t._offset) || (e._offset = t._offset),
      o(t._pf) || (e._pf = m(t)),
      o(t._locale) || (e._locale = t._locale),
      r > 0)
    )
      for (n = 0; n < r; n++) o((i = t[(s = Z[n])])) || (e[s] = i);
    return e;
  }
  function q(e) {
    $(this, e),
      (this._d = new Date(e._d != null ? e._d.getTime() : NaN)),
      this.isValid() || (this._d = new Date(NaN)),
      !1 === z && ((z = !0), f.updateOffset(this), (z = !1));
  }
  function h(e) {
    return e instanceof q || (e != null && e._isAMomentObject != null);
  }
  function B(e) {
    !1 === f.suppressDeprecationWarnings &&
      typeof console !== "undefined" &&
      console.warn &&
      console.warn(`Deprecation warning: ${e}`);
  }
  function e(r, a) {
    let o = !0;
    return E(function () {
      if ((f.deprecationHandler != null && f.deprecationHandler(null, r), o)) {
        for (var e, t, n = [], s = arguments.length, i = 0; i < s; i++) {
          if (((e = ""), typeof arguments[i] === "object")) {
            for (t in ((e += `\n[${i}] `), arguments[0]))
              c(arguments[0], t) && (e += `${t}: ${arguments[0][t]}, `);
            e = e.slice(0, -2);
          } else e = arguments[i];
          n.push(e);
        }
        B(
          `${r}\nArguments: ${Array.prototype.slice.call(n).join("")}\n${
            new Error().stack
          }`
        ),
          (o = !1);
      }
      return a.apply(this, arguments);
    }, a);
  }
  const J = {};
  function Q(e, t) {
    f.deprecationHandler != null && f.deprecationHandler(e, t),
      J[e] || (B(t), (J[e] = !0));
  }
  function d(e) {
    return (
      (typeof Function !== "undefined" && e instanceof Function) ||
      Object.prototype.toString.call(e) === "[object Function]"
    );
  }
  function X(e, t) {
    let n;
    const s = E({}, e);
    for (n in t)
      c(t, n) &&
        (F(e[n]) && F(t[n])
          ? ((s[n] = {}), E(s[n], e[n]), E(s[n], t[n]))
          : t[n] != null
          ? (s[n] = t[n])
          : delete s[n]);
    for (n in e) c(e, n) && !c(t, n) && F(e[n]) && (s[n] = E({}, s[n]));
    return s;
  }
  function K(e) {
    e != null && this.set(e);
  }
  (f.suppressDeprecationWarnings = !1), (f.deprecationHandler = null);
  const ee =
    Object.keys ||
    function (e) {
      let t;
      const n = [];
      for (t in e) c(e, t) && n.push(t);
      return n;
    };
  function r(e, t, n) {
    const s = `${Math.abs(e)}`;
    return (
      (e >= 0 ? (n ? "+" : "") : "-") +
      (10 ** Math.max(0, t - s.length)).toString().substr(1) +
      s
    );
  }
  const te =
    /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
  const ne = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
  const se = {};
  const ie = {};
  function s(e, t, n, s) {
    const i =
      typeof s === "string"
        ? function () {
            return this[s]();
          }
        : s;
    e && (ie[e] = i),
      t &&
        (ie[t[0]] = function () {
          return r(i.apply(this, arguments), t[1], t[2]);
        }),
      n &&
        (ie[n] = function () {
          return this.localeData().ordinal(i.apply(this, arguments), e);
        });
  }
  function re(e, t) {
    return e.isValid()
      ? ((t = ae(t, e.localeData())),
        (se[t] =
          se[t] ||
          (function (s) {
            for (var e, i = s.match(te), t = 0, r = i.length; t < r; t++)
              ie[i[t]]
                ? (i[t] = ie[i[t]])
                : (i[t] = (e = i[t]).match(/\[[\s\S]/)
                    ? e.replace(/^\[|\]$/g, "")
                    : e.replace(/\\/g, ""));
            return function (e) {
              for (var t = "", n = 0; n < r; n++)
                t += d(i[n]) ? i[n].call(e, s) : i[n];
              return t;
            };
          })(t)),
        se[t](e))
      : e.localeData().invalidDate();
  }
  function ae(e, t) {
    let n = 5;
    function s(e) {
      return t.longDateFormat(e) || e;
    }
    for (ne.lastIndex = 0; n >= 0 && ne.test(e); )
      (e = e.replace(ne, s)), (ne.lastIndex = 0), --n;
    return e;
  }
  const oe = {};
  function t(e, t) {
    const n = e.toLowerCase();
    oe[n] = oe[`${n}s`] = oe[t] = e;
  }
  function _(e) {
    return typeof e === "string" ? oe[e] || oe[e.toLowerCase()] : void 0;
  }
  function ue(e) {
    let t;
    let n;
    const s = {};
    for (n in e) c(e, n) && (t = _(n)) && (s[t] = e[n]);
    return s;
  }
  const le = {};
  function n(e, t) {
    le[e] = t;
  }
  function he(e) {
    return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
  }
  function y(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
  }
  function g(e) {
    var e = +e;
    let t = 0;
    return (t = e != 0 && isFinite(e) ? y(e) : t);
  }
  function de(t, n) {
    return function (e) {
      return e != null
        ? (fe(this, t, e), f.updateOffset(this, n), this)
        : ce(this, t);
    };
  }
  function ce(e, t) {
    return e.isValid() ? e._d[`get${e._isUTC ? "UTC" : ""}${t}`]() : NaN;
  }
  function fe(e, t, n) {
    e.isValid() &&
      !isNaN(n) &&
      (t === "FullYear" && he(e.year()) && e.month() === 1 && e.date() === 29
        ? ((n = g(n)),
          e._d[`set${e._isUTC ? "UTC" : ""}${t}`](
            n,
            e.month(),
            We(n, e.month())
          ))
        : e._d[`set${e._isUTC ? "UTC" : ""}${t}`](n));
  }
  let i = /\d/;
  var w = /\d\d/;
  let me = /\d{3}/;
  var _e = /\d{4}/;
  var ye = /[+-]?\d{6}/;
  const p = /\d\d?/;
  let ge = /\d\d\d\d?/;
  let we = /\d\d\d\d\d\d?/;
  let pe = /\d{1,3}/;
  var ke = /\d{1,4}/;
  var ve = /[+-]?\d{1,6}/;
  const Me = /\d+/;
  const De = /[+-]?\d+/;
  const Se = /Z|[+-]\d\d:?\d\d/gi;
  const Ye = /Z|[+-]\d\d(?::?\d\d)?/gi;
  let k =
    /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
  function v(e, n, s) {
    be[e] = d(n)
      ? n
      : function (e, t) {
          return e && s ? s : n;
        };
  }
  function Oe(e, t) {
    return c(be, e)
      ? be[e](t._strict, t._locale)
      : new RegExp(
          M(
            e
              .replace("\\", "")
              .replace(
                /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                (e, t, n, s, i) => t || n || s || i
              )
          )
        );
  }
  function M(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  var be = {};
  const xe = {};
  function D(e, n) {
    let t;
    let s;
    let i = n;
    for (
      typeof e === "string" && (e = [e]),
        u(n) &&
          (i = function (e, t) {
            t[n] = g(e);
          }),
        s = e.length,
        t = 0;
      t < s;
      t++
    )
      xe[e[t]] = i;
  }
  function Te(e, i) {
    D(e, (e, t, n, s) => {
      (n._w = n._w || {}), i(e, n._w, n, s);
    });
  }
  let S;
  const Y = 0;
  const O = 1;
  const b = 2;
  const x = 3;
  const T = 4;
  const N = 5;
  const Ne = 6;
  const Pe = 7;
  const Re = 8;
  function We(e, t) {
    if (isNaN(e) || isNaN(t)) return NaN;
    var n = ((t % (n = 12)) + n) % n;
    return (e += (t - n) / 12), n == 1 ? (he(e) ? 29 : 28) : 31 - ((n % 7) % 2);
  }
  (S =
    Array.prototype.indexOf ||
    function (e) {
      for (let t = 0; t < this.length; ++t) if (this[t] === e) return t;
      return -1;
    }),
    s("M", ["MM", 2], "Mo", function () {
      return this.month() + 1;
    }),
    s("MMM", 0, 0, function (e) {
      return this.localeData().monthsShort(this, e);
    }),
    s("MMMM", 0, 0, function (e) {
      return this.localeData().months(this, e);
    }),
    t("month", "M"),
    n("month", 8),
    v("M", p),
    v("MM", p, w),
    v("MMM", (e, t) => t.monthsShortRegex(e)),
    v("MMMM", (e, t) => t.monthsRegex(e)),
    D(["M", "MM"], (e, t) => {
      t[O] = g(e) - 1;
    }),
    D(["MMM", "MMMM"], (e, t, n, s) => {
      s = n._locale.monthsParse(e, s, n._strict);
      s != null ? (t[O] = s) : (m(n).invalidMonth = e);
    });
  let Ce =
    "January_February_March_April_May_June_July_August_September_October_November_December".split(
      "_"
    );
  const Ue = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
  const He = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
  const Fe = k;
  const Le = k;
  function Ve(e, t) {
    let n;
    if (e.isValid()) {
      if (typeof t === "string")
        if (/^\d+$/.test(t)) t = g(t);
        else if (!u((t = e.localeData().monthsParse(t)))) return;
      (n = Math.min(e.date(), We(e.year(), t))),
        e._d[`set${e._isUTC ? "UTC" : ""}Month`](t, n);
    }
  }
  function Ge(e) {
    return e != null
      ? (Ve(this, e), f.updateOffset(this, !0), this)
      : ce(this, "Month");
  }
  function Ee() {
    function e(e, t) {
      return t.length - e.length;
    }
    for (var t, n = [], s = [], i = [], r = 0; r < 12; r++)
      (t = l([2e3, r])),
        n.push(this.monthsShort(t, "")),
        s.push(this.months(t, "")),
        i.push(this.months(t, "")),
        i.push(this.monthsShort(t, ""));
    for (n.sort(e), s.sort(e), i.sort(e), r = 0; r < 12; r++)
      (n[r] = M(n[r])), (s[r] = M(s[r]));
    for (r = 0; r < 24; r++) i[r] = M(i[r]);
    (this._monthsRegex = new RegExp(`^(${i.join("|")})`, "i")),
      (this._monthsShortRegex = this._monthsRegex),
      (this._monthsStrictRegex = new RegExp(`^(${s.join("|")})`, "i")),
      (this._monthsShortStrictRegex = new RegExp(`^(${n.join("|")})`, "i"));
  }
  function Ae(e) {
    return he(e) ? 366 : 365;
  }
  s("Y", 0, 0, function () {
    const e = this.year();
    return e <= 9999 ? r(e, 4) : `+${e}`;
  }),
    s(0, ["YY", 2], 0, function () {
      return this.year() % 100;
    }),
    s(0, ["YYYY", 4], 0, "year"),
    s(0, ["YYYYY", 5], 0, "year"),
    s(0, ["YYYYYY", 6, !0], 0, "year"),
    t("year", "y"),
    n("year", 1),
    v("Y", De),
    v("YY", p, w),
    v("YYYY", ke, _e),
    v("YYYYY", ve, ye),
    v("YYYYYY", ve, ye),
    D(["YYYYY", "YYYYYY"], Y),
    D("YYYY", (e, t) => {
      t[Y] = e.length === 2 ? f.parseTwoDigitYear(e) : g(e);
    }),
    D("YY", (e, t) => {
      t[Y] = f.parseTwoDigitYear(e);
    }),
    D("Y", (e, t) => {
      t[Y] = parseInt(e, 10);
    }),
    (f.parseTwoDigitYear = function (e) {
      return g(e) + (g(e) > 68 ? 1900 : 2e3);
    });
  var Ie = de("FullYear", !0);
  function je(e, t, n, s, i, r, a) {
    let o;
    return (
      e < 100 && e >= 0
        ? ((o = new Date(e + 400, t, n, s, i, r, a)),
          isFinite(o.getFullYear()) && o.setFullYear(e))
        : (o = new Date(e, t, n, s, i, r, a)),
      o
    );
  }
  function Ze(e) {
    let t;
    return (
      e < 100 && e >= 0
        ? (((t = Array.prototype.slice.call(arguments))[0] = e + 400),
          (t = new Date(Date.UTC.apply(null, t))),
          isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
        : (t = new Date(Date.UTC.apply(null, arguments))),
      t
    );
  }
  function ze(e, t, n) {
    n = 7 + t - n;
    return n - ((7 + Ze(e, 0, n).getUTCDay() - t) % 7) - 1;
  }
  function $e(e, t, n, s, i) {
    let r;
    var t = 1 + 7 * (t - 1) + ((7 + n - s) % 7) + ze(e, s, i);
    var n =
      t <= 0
        ? Ae((r = e - 1)) + t
        : t > Ae(e)
        ? ((r = e + 1), t - Ae(e))
        : ((r = e), t);
    return { year: r, dayOfYear: n };
  }
  function qe(e, t, n) {
    let s;
    let i;
    var r = ze(e.year(), t, n);
    var r = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
    return (
      r < 1
        ? (s = r + P((i = e.year() - 1), t, n))
        : r > P(e.year(), t, n)
        ? ((s = r - P(e.year(), t, n)), (i = e.year() + 1))
        : ((i = e.year()), (s = r)),
      { week: s, year: i }
    );
  }
  function P(e, t, n) {
    const s = ze(e, t, n);
    var t = ze(e + 1, t, n);
    return (Ae(e) - s + t) / 7;
  }
  s("w", ["ww", 2], "wo", "week"),
    s("W", ["WW", 2], "Wo", "isoWeek"),
    t("week", "w"),
    t("isoWeek", "W"),
    n("week", 5),
    n("isoWeek", 5),
    v("w", p),
    v("ww", p, w),
    v("W", p),
    v("WW", p, w),
    Te(["w", "ww", "W", "WW"], (e, t, n, s) => {
      t[s.substr(0, 1)] = g(e);
    });
  function Be(e, t) {
    return e.slice(t, 7).concat(e.slice(0, t));
  }
  s("d", 0, "do", "day"),
    s("dd", 0, 0, function (e) {
      return this.localeData().weekdaysMin(this, e);
    }),
    s("ddd", 0, 0, function (e) {
      return this.localeData().weekdaysShort(this, e);
    }),
    s("dddd", 0, 0, function (e) {
      return this.localeData().weekdays(this, e);
    }),
    s("e", 0, 0, "weekday"),
    s("E", 0, 0, "isoWeekday"),
    t("day", "d"),
    t("weekday", "e"),
    t("isoWeekday", "E"),
    n("day", 11),
    n("weekday", 11),
    n("isoWeekday", 11),
    v("d", p),
    v("e", p),
    v("E", p),
    v("dd", (e, t) => t.weekdaysMinRegex(e)),
    v("ddd", (e, t) => t.weekdaysShortRegex(e)),
    v("dddd", (e, t) => t.weekdaysRegex(e)),
    Te(["dd", "ddd", "dddd"], (e, t, n, s) => {
      s = n._locale.weekdaysParse(e, s, n._strict);
      s != null ? (t.d = s) : (m(n).invalidWeekday = e);
    }),
    Te(["d", "e", "E"], (e, t, n, s) => {
      t[s] = g(e);
    });
  let Je = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
    "_"
  );
  const Qe = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
  let Xe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
  const Ke = k;
  const et = k;
  const tt = k;
  function nt() {
    function e(e, t) {
      return t.length - e.length;
    }
    for (var t, n, s, i = [], r = [], a = [], o = [], u = 0; u < 7; u++)
      (s = l([2e3, 1]).day(u)),
        (t = M(this.weekdaysMin(s, ""))),
        (n = M(this.weekdaysShort(s, ""))),
        (s = M(this.weekdays(s, ""))),
        i.push(t),
        r.push(n),
        a.push(s),
        o.push(t),
        o.push(n),
        o.push(s);
    i.sort(e),
      r.sort(e),
      a.sort(e),
      o.sort(e),
      (this._weekdaysRegex = new RegExp(`^(${o.join("|")})`, "i")),
      (this._weekdaysShortRegex = this._weekdaysRegex),
      (this._weekdaysMinRegex = this._weekdaysRegex),
      (this._weekdaysStrictRegex = new RegExp(`^(${a.join("|")})`, "i")),
      (this._weekdaysShortStrictRegex = new RegExp(`^(${r.join("|")})`, "i")),
      (this._weekdaysMinStrictRegex = new RegExp(`^(${i.join("|")})`, "i"));
  }
  function st() {
    return this.hours() % 12 || 12;
  }
  function it(e, t) {
    s(e, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), t);
    });
  }
  function rt(e, t) {
    return t._meridiemParse;
  }
  s("H", ["HH", 2], 0, "hour"),
    s("h", ["hh", 2], 0, st),
    s("k", ["kk", 2], 0, function () {
      return this.hours() || 24;
    }),
    s("hmm", 0, 0, function () {
      return `${st.apply(this)}${r(this.minutes(), 2)}`;
    }),
    s("hmmss", 0, 0, function () {
      return `${st.apply(this)}${r(this.minutes(), 2)}${r(this.seconds(), 2)}`;
    }),
    s("Hmm", 0, 0, function () {
      return `${this.hours()}${r(this.minutes(), 2)}`;
    }),
    s("Hmmss", 0, 0, function () {
      return `${this.hours()}${r(this.minutes(), 2)}${r(this.seconds(), 2)}`;
    }),
    it("a", !0),
    it("A", !1),
    t("hour", "h"),
    n("hour", 13),
    v("a", rt),
    v("A", rt),
    v("H", p),
    v("h", p),
    v("k", p),
    v("HH", p, w),
    v("hh", p, w),
    v("kk", p, w),
    v("hmm", ge),
    v("hmmss", we),
    v("Hmm", ge),
    v("Hmmss", we),
    D(["H", "HH"], x),
    D(["k", "kk"], (e, t, n) => {
      e = g(e);
      t[x] = e === 24 ? 0 : e;
    }),
    D(["a", "A"], (e, t, n) => {
      (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
    }),
    D(["h", "hh"], (e, t, n) => {
      (t[x] = g(e)), (m(n).bigHour = !0);
    }),
    D("hmm", (e, t, n) => {
      const s = e.length - 2;
      (t[x] = g(e.substr(0, s))), (t[T] = g(e.substr(s))), (m(n).bigHour = !0);
    }),
    D("hmmss", (e, t, n) => {
      const s = e.length - 4;
      const i = e.length - 2;
      (t[x] = g(e.substr(0, s))),
        (t[T] = g(e.substr(s, 2))),
        (t[N] = g(e.substr(i))),
        (m(n).bigHour = !0);
    }),
    D("Hmm", (e, t, n) => {
      const s = e.length - 2;
      (t[x] = g(e.substr(0, s))), (t[T] = g(e.substr(s)));
    }),
    D("Hmmss", (e, t, n) => {
      const s = e.length - 4;
      const i = e.length - 2;
      (t[x] = g(e.substr(0, s))),
        (t[T] = g(e.substr(s, 2))),
        (t[N] = g(e.substr(i)));
    });
  k = de("Hours", !0);
  let at;
  const ot = {
    calendar: {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L",
    },
    longDateFormat: {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A",
    },
    invalidDate: "Invalid date",
    ordinal: "%d",
    dayOfMonthOrdinalParse: /\d{1,2}/,
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      w: "a week",
      ww: "%d weeks",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years",
    },
    months: Ce,
    monthsShort: Ue,
    week: { dow: 0, doy: 6 },
    weekdays: Je,
    weekdaysMin: Xe,
    weekdaysShort: Qe,
    meridiemParse: /[ap]\.?m?\.?/i,
  };
  const R = {};
  const ut = {};
  function lt(e) {
    return e && e.toLowerCase().replace("_", "-");
  }
  function ht(e) {
    for (var t, n, s, i, r = 0; r < e.length; ) {
      for (
        t = (i = lt(e[r]).split("-")).length,
          n = (n = lt(e[r + 1])) ? n.split("-") : null;
        t > 0;

      ) {
        if ((s = dt(i.slice(0, t).join("-")))) return s;
        if (
          n &&
          n.length >= t &&
          (function (e, t) {
            for (var n = Math.min(e.length, t.length), s = 0; s < n; s += 1)
              if (e[s] !== t[s]) return s;
            return n;
          })(i, n) >=
            t - 1
        )
          break;
        t--;
      }
      r++;
    }
    return at;
  }
  function dt(t) {
    let e;
    if (
      void 0 === R[t] &&
      typeof module !== "undefined" &&
      module &&
      module.exports &&
      t.match("^[^/\\\\]*$") != null
    )
      try {
        (e = at._abbr), require(`./locale/${t}`), ct(e);
      } catch (e) {
        R[t] = null;
      }
    return R[t];
  }
  function ct(e, t) {
    return (
      e &&
        ((t = o(t) ? mt(e) : ft(e, t))
          ? (at = t)
          : typeof console !== "undefined" &&
            console.warn &&
            console.warn(`Locale ${e} not found. Did you forget to load it?`)),
      at._abbr
    );
  }
  function ft(e, t) {
    if (t === null) return delete R[e], null;
    let n;
    let s = ot;
    if (((t.abbr = e), R[e] != null))
      Q(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ),
        (s = R[e]._config);
    else if (t.parentLocale != null)
      if (R[t.parentLocale] != null) s = R[t.parentLocale]._config;
      else {
        if ((n = dt(t.parentLocale)) == null)
          return (
            ut[t.parentLocale] || (ut[t.parentLocale] = []),
            ut[t.parentLocale].push({ name: e, config: t }),
            null
          );
        s = n._config;
      }
    return (
      (R[e] = new K(X(s, t))),
      ut[e] &&
        ut[e].forEach((e) => {
          ft(e.name, e.config);
        }),
      ct(e),
      R[e]
    );
  }
  function mt(e) {
    let t;
    if (!(e = e && e._locale && e._locale._abbr ? e._locale._abbr : e))
      return at;
    if (!a(e)) {
      if ((t = dt(e))) return t;
      e = [e];
    }
    return ht(e);
  }
  function _t(e) {
    let t = e._a;
    return (
      t &&
        m(e).overflow === -2 &&
        ((t =
          t[O] < 0 || t[O] > 11
            ? O
            : t[b] < 1 || t[b] > We(t[Y], t[O])
            ? b
            : t[x] < 0 ||
              t[x] > 24 ||
              (t[x] === 24 && (t[T] !== 0 || t[N] !== 0 || t[Ne] !== 0))
            ? x
            : t[T] < 0 || t[T] > 59
            ? T
            : t[N] < 0 || t[N] > 59
            ? N
            : t[Ne] < 0 || t[Ne] > 999
            ? Ne
            : -1),
        m(e)._overflowDayOfYear && (t < Y || b < t) && (t = b),
        m(e)._overflowWeeks && t === -1 && (t = Pe),
        m(e)._overflowWeekday && t === -1 && (t = Re),
        (m(e).overflow = t)),
      e
    );
  }
  const yt =
    /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
  const gt =
    /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
  const wt = /Z|[+-]\d\d(?::?\d\d)?/;
  const pt = [
    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
    ["YYYY-DDD", /\d{4}-\d{3}/],
    ["YYYY-MM", /\d{4}-\d\d/, !1],
    ["YYYYYYMMDD", /[+-]\d{10}/],
    ["YYYYMMDD", /\d{8}/],
    ["GGGG[W]WWE", /\d{4}W\d{3}/],
    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
    ["YYYYDDD", /\d{7}/],
    ["YYYYMM", /\d{6}/, !1],
    ["YYYY", /\d{4}/, !1],
  ];
  const kt = [
    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
    ["HH:mm", /\d\d:\d\d/],
    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
    ["HHmmss", /\d\d\d\d\d\d/],
    ["HHmm", /\d\d\d\d/],
    ["HH", /\d\d/],
  ];
  const vt = /^\/?Date\((-?\d+)/i;
  const Mt =
    /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
  const Dt = {
    UT: 0,
    GMT: 0,
    EDT: -240,
    EST: -300,
    CDT: -300,
    CST: -360,
    MDT: -360,
    MST: -420,
    PDT: -420,
    PST: -480,
  };
  function St(e) {
    let t;
    let n;
    let s;
    let i;
    let r;
    let a;
    var o = e._i;
    const u = yt.exec(o) || gt.exec(o);
    var o = pt.length;
    const l = kt.length;
    if (u) {
      for (m(e).iso = !0, t = 0, n = o; t < n; t++)
        if (pt[t][1].exec(u[1])) {
          (i = pt[t][0]), (s = !1 !== pt[t][2]);
          break;
        }
      if (i == null) e._isValid = !1;
      else {
        if (u[3]) {
          for (t = 0, n = l; t < n; t++)
            if (kt[t][1].exec(u[3])) {
              r = (u[2] || " ") + kt[t][0];
              break;
            }
          if (r == null) return void (e._isValid = !1);
        }
        if (s || r == null) {
          if (u[4]) {
            if (!wt.exec(u[4])) return void (e._isValid = !1);
            a = "Z";
          }
          (e._f = i + (r || "") + (a || "")), Tt(e);
        } else e._isValid = !1;
      }
    } else e._isValid = !1;
  }
  function Yt(e, t, n, s, i, r) {
    e = [
      (function (e) {
        e = parseInt(e, 10);
        {
          if (e <= 49) return 2e3 + e;
          if (e <= 999) return 1900 + e;
        }
        return e;
      })(e),
      Ue.indexOf(t),
      parseInt(n, 10),
      parseInt(s, 10),
      parseInt(i, 10),
    ];
    return r && e.push(parseInt(r, 10)), e;
  }
  function Ot(e) {
    let t;
    let n;
    let s;
    let i;
    const r = Mt.exec(
      e._i
        .replace(/\([^()]*\)|[\n\t]/g, " ")
        .replace(/(\s\s+)/g, " ")
        .replace(/^\s\s*/, "")
        .replace(/\s\s*$/, "")
    );
    r
      ? ((t = Yt(r[4], r[3], r[2], r[5], r[6], r[7])),
        (n = r[1]),
        (s = t),
        (i = e),
        n && Qe.indexOf(n) !== new Date(s[0], s[1], s[2]).getDay()
          ? ((m(i).weekdayMismatch = !0), (i._isValid = !1))
          : ((e._a = t),
            (e._tzm =
              ((n = r[8]),
              (s = r[9]),
              (i = r[10]),
              n
                ? Dt[n]
                : s
                ? 0
                : 60 * (((n = parseInt(i, 10)) - (s = n % 100)) / 100) + s)),
            (e._d = Ze.apply(null, e._a)),
            e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            (m(e).rfc2822 = !0)))
      : (e._isValid = !1);
  }
  function bt(e, t, n) {
    return e != null ? e : t != null ? t : n;
  }
  function xt(e) {
    let t;
    let n;
    let s;
    let i;
    let r;
    let a;
    let o;
    let u;
    let l;
    let h;
    let d;
    const c = [];
    if (!e._d) {
      for (
        s = e,
          i = new Date(f.now()),
          n = s._useUTC
            ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()]
            : [i.getFullYear(), i.getMonth(), i.getDate()],
          e._w &&
            e._a[b] == null &&
            e._a[O] == null &&
            ((i = (s = e)._w).GG != null || i.W != null || i.E != null
              ? ((u = 1),
                (l = 4),
                (r = bt(i.GG, s._a[Y], qe(W(), 1, 4).year)),
                (a = bt(i.W, 1)),
                ((o = bt(i.E, 1)) < 1 || o > 7) && (h = !0))
              : ((u = s._locale._week.dow),
                (l = s._locale._week.doy),
                (d = qe(W(), u, l)),
                (r = bt(i.gg, s._a[Y], d.year)),
                (a = bt(i.w, d.week)),
                i.d != null
                  ? ((o = i.d) < 0 || o > 6) && (h = !0)
                  : i.e != null
                  ? ((o = i.e + u), (i.e < 0 || i.e > 6) && (h = !0))
                  : (o = u)),
            a < 1 || a > P(r, u, l)
              ? (m(s)._overflowWeeks = !0)
              : h != null
              ? (m(s)._overflowWeekday = !0)
              : ((d = $e(r, a, o, u, l)),
                (s._a[Y] = d.year),
                (s._dayOfYear = d.dayOfYear))),
          e._dayOfYear != null &&
            ((i = bt(e._a[Y], n[Y])),
            (e._dayOfYear > Ae(i) || e._dayOfYear === 0) &&
              (m(e)._overflowDayOfYear = !0),
            (h = Ze(i, 0, e._dayOfYear)),
            (e._a[O] = h.getUTCMonth()),
            (e._a[b] = h.getUTCDate())),
          t = 0;
        t < 3 && e._a[t] == null;
        ++t
      )
        e._a[t] = c[t] = n[t];
      for (; t < 7; t++)
        e._a[t] = c[t] = e._a[t] == null ? (t === 2 ? 1 : 0) : e._a[t];
      e._a[x] === 24 &&
        e._a[T] === 0 &&
        e._a[N] === 0 &&
        e._a[Ne] === 0 &&
        ((e._nextDay = !0), (e._a[x] = 0)),
        (e._d = (e._useUTC ? Ze : je).apply(null, c)),
        (r = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
        e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
        e._nextDay && (e._a[x] = 24),
        e._w &&
          void 0 !== e._w.d &&
          e._w.d !== r &&
          (m(e).weekdayMismatch = !0);
    }
  }
  function Tt(e) {
    if (e._f === f.ISO_8601) St(e);
    else if (e._f === f.RFC_2822) Ot(e);
    else {
      (e._a = []), (m(e).empty = !0);
      for (
        var t,
          n,
          s,
          i,
          r,
          a = `${e._i}`,
          o = a.length,
          u = 0,
          l = ae(e._f, e._locale).match(te) || [],
          h = l.length,
          d = 0;
        d < h;
        d++
      )
        (n = l[d]),
          (t = (a.match(Oe(n, e)) || [])[0]) &&
            ((s = a.substr(0, a.indexOf(t))).length > 0 &&
              m(e).unusedInput.push(s),
            (a = a.slice(a.indexOf(t) + t.length)),
            (u += t.length)),
          ie[n]
            ? (t ? (m(e).empty = !1) : m(e).unusedTokens.push(n),
              (s = n),
              (r = e),
              (i = t) != null && c(xe, s) && xe[s](i, r._a, r, s))
            : e._strict && !t && m(e).unusedTokens.push(n);
      (m(e).charsLeftOver = o - u),
        a.length > 0 && m(e).unusedInput.push(a),
        e._a[x] <= 12 &&
          !0 === m(e).bigHour &&
          e._a[x] > 0 &&
          (m(e).bigHour = void 0),
        (m(e).parsedDateParts = e._a.slice(0)),
        (m(e).meridiem = e._meridiem),
        (e._a[x] = (function (e, t, n) {
          if (n == null) return t;
          return e.meridiemHour != null
            ? e.meridiemHour(t, n)
            : e.isPM != null
            ? ((e = e.isPM(n)) && t < 12 && (t += 12),
              (t = e || t !== 12 ? t : 0))
            : t;
        })(e._locale, e._a[x], e._meridiem)),
        (o = m(e).era) !== null &&
          (e._a[Y] = e._locale.erasConvertYear(o, e._a[Y])),
        xt(e),
        _t(e);
    }
  }
  function Nt(e) {
    let t;
    let n;
    let s;
    let i = e._i;
    let r = e._f;
    if (
      ((e._locale = e._locale || mt(e._l)),
      i === null || (void 0 === r && i === ""))
    )
      return I({ nullInput: !0 });
    if ((typeof i === "string" && (e._i = i = e._locale.preparse(i)), h(i)))
      return new q(_t(i));
    if (V(i)) e._d = i;
    else if (a(r))
      !(function (e) {
        let t;
        let n;
        let s;
        let i;
        let r;
        let a;
        let o = !1;
        const u = e._f.length;
        if (u === 0) return (m(e).invalidFormat = !0), (e._d = new Date(NaN));
        for (i = 0; i < u; i++)
          (r = 0),
            (a = !1),
            (t = $({}, e)),
            e._useUTC != null && (t._useUTC = e._useUTC),
            (t._f = e._f[i]),
            Tt(t),
            A(t) && (a = !0),
            (r = (r += m(t).charsLeftOver) + 10 * m(t).unusedTokens.length),
            (m(t).score = r),
            o
              ? r < s && ((s = r), (n = t))
              : (s == null || r < s || a) && ((s = r), (n = t), a && (o = !0));
        E(e, n || t);
      })(e);
    else if (r) Tt(e);
    else if (o((r = (i = e)._i))) i._d = new Date(f.now());
    else
      V(r)
        ? (i._d = new Date(r.valueOf()))
        : typeof r === "string"
        ? ((n = i),
          (t = vt.exec(n._i)) !== null
            ? (n._d = new Date(+t[1]))
            : (St(n),
              !1 === n._isValid &&
                (delete n._isValid,
                Ot(n),
                !1 === n._isValid &&
                  (delete n._isValid,
                  n._strict
                    ? (n._isValid = !1)
                    : f.createFromInputFallback(n)))))
        : a(r)
        ? ((i._a = G(r.slice(0), (e) => parseInt(e, 10))), xt(i))
        : F(r)
        ? (t = i)._d ||
          ((s = void 0 === (n = ue(t._i)).day ? n.date : n.day),
          (t._a = G(
            [n.year, n.month, s, n.hour, n.minute, n.second, n.millisecond],
            (e) => e && parseInt(e, 10)
          )),
          xt(t))
        : u(r)
        ? (i._d = new Date(r))
        : f.createFromInputFallback(i);
    return A(e) || (e._d = null), e;
  }
  function Pt(e, t, n, s, i) {
    const r = {};
    return (
      (!0 !== t && !1 !== t) || ((s = t), (t = void 0)),
      (!0 !== n && !1 !== n) || ((s = n), (n = void 0)),
      ((F(e) && L(e)) || (a(e) && e.length === 0)) && (e = void 0),
      (r._isAMomentObject = !0),
      (r._useUTC = r._isUTC = i),
      (r._l = n),
      (r._i = e),
      (r._f = t),
      (r._strict = s),
      (i = new q(_t(Nt((i = r)))))._nextDay &&
        (i.add(1, "d"), (i._nextDay = void 0)),
      i
    );
  }
  function W(e, t, n, s) {
    return Pt(e, t, n, s, !1);
  }
  (f.createFromInputFallback = e(
    "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
    (e) => {
      e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
    }
  )),
    (f.ISO_8601 = function () {}),
    (f.RFC_2822 = function () {});
  (ge = e(
    "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
    function () {
      const e = W.apply(null, arguments);
      return this.isValid() && e.isValid() ? (e < this ? this : e) : I();
    }
  )),
    (we = e(
      "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
      function () {
        const e = W.apply(null, arguments);
        return this.isValid() && e.isValid() ? (this < e ? this : e) : I();
      }
    ));
  function Rt(e, t) {
    let n;
    let s;
    if (!(t = t.length === 1 && a(t[0]) ? t[0] : t).length) return W();
    for (n = t[0], s = 1; s < t.length; ++s)
      (t[s].isValid() && !t[s][e](n)) || (n = t[s]);
    return n;
  }
  const Wt = [
    "year",
    "quarter",
    "month",
    "week",
    "day",
    "hour",
    "minute",
    "second",
    "millisecond",
  ];
  function Ct(e) {
    var e = ue(e);
    const t = e.year || 0;
    const n = e.quarter || 0;
    const s = e.month || 0;
    const i = e.week || e.isoWeek || 0;
    const r = e.day || 0;
    const a = e.hour || 0;
    const o = e.minute || 0;
    const u = e.second || 0;
    const l = e.millisecond || 0;
    (this._isValid = (function (e) {
      let t;
      let n;
      let s = !1;
      const i = Wt.length;
      for (t in e)
        if (c(e, t) && (S.call(Wt, t) === -1 || (e[t] != null && isNaN(e[t]))))
          return !1;
      for (n = 0; n < i; ++n)
        if (e[Wt[n]]) {
          if (s) return !1;
          parseFloat(e[Wt[n]]) !== g(e[Wt[n]]) && (s = !0);
        }
      return !0;
    })(e)),
      (this._milliseconds = +l + 1e3 * u + 6e4 * o + 1e3 * a * 60 * 60),
      (this._days = +r + 7 * i),
      (this._months = +s + 3 * n + 12 * t),
      (this._data = {}),
      (this._locale = mt()),
      this._bubble();
  }
  function Ut(e) {
    return e instanceof Ct;
  }
  function Ht(e) {
    return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
  }
  function Ft(e, n) {
    s(e, 0, 0, function () {
      let e = this.utcOffset();
      let t = "+";
      return (
        e < 0 && ((e = -e), (t = "-")),
        t + r(~~(e / 60), 2) + n + r(~~e % 60, 2)
      );
    });
  }
  Ft("Z", ":"),
    Ft("ZZ", ""),
    v("Z", Ye),
    v("ZZ", Ye),
    D(["Z", "ZZ"], (e, t, n) => {
      (n._useUTC = !0), (n._tzm = Vt(Ye, e));
    });
  const Lt = /([\+\-]|\d\d)/gi;
  function Vt(e, t) {
    var t = (t || "").match(e);
    return t === null
      ? null
      : (t =
          60 * (e = `${t[t.length - 1] || []}`.match(Lt) || ["-", 0, 0])[1] +
          g(e[2])) === 0
      ? 0
      : e[0] === "+"
      ? t
      : -t;
  }
  function Gt(e, t) {
    let n;
    return t._isUTC
      ? ((t = t.clone()),
        (n = (h(e) || V(e) ? e : W(e)).valueOf() - t.valueOf()),
        t._d.setTime(t._d.valueOf() + n),
        f.updateOffset(t, !1),
        t)
      : W(e).local();
  }
  function Et(e) {
    return -Math.round(e._d.getTimezoneOffset());
  }
  function At() {
    return !!this.isValid() && this._isUTC && this._offset === 0;
  }
  f.updateOffset = function () {};
  const It = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/;
  const jt =
    /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  function C(e, t) {
    let n;
    let s = e;
    let i = null;
    return (
      Ut(e)
        ? (s = { ms: e._milliseconds, d: e._days, M: e._months })
        : u(e) || !isNaN(+e)
        ? ((s = {}), t ? (s[t] = +e) : (s.milliseconds = +e))
        : (i = It.exec(e))
        ? ((n = i[1] === "-" ? -1 : 1),
          (s = {
            y: 0,
            d: g(i[b]) * n,
            h: g(i[x]) * n,
            m: g(i[T]) * n,
            s: g(i[N]) * n,
            ms: g(Ht(1e3 * i[Ne])) * n,
          }))
        : (i = jt.exec(e))
        ? ((n = i[1] === "-" ? -1 : 1),
          (s = {
            y: Zt(i[2], n),
            M: Zt(i[3], n),
            w: Zt(i[4], n),
            d: Zt(i[5], n),
            h: Zt(i[6], n),
            m: Zt(i[7], n),
            s: Zt(i[8], n),
          }))
        : s == null
        ? (s = {})
        : typeof s === "object" &&
          ("from" in s || "to" in s) &&
          ((t = (function (e, t) {
            let n;
            if (!e.isValid() || !t.isValid())
              return { milliseconds: 0, months: 0 };
            (t = Gt(t, e)),
              e.isBefore(t)
                ? (n = zt(e, t))
                : (((n = zt(t, e)).milliseconds = -n.milliseconds),
                  (n.months = -n.months));
            return n;
          })(W(s.from), W(s.to))),
          ((s = {}).ms = t.milliseconds),
          (s.M = t.months)),
      (i = new Ct(s)),
      Ut(e) && c(e, "_locale") && (i._locale = e._locale),
      Ut(e) && c(e, "_isValid") && (i._isValid = e._isValid),
      i
    );
  }
  function Zt(e, t) {
    e = e && parseFloat(e.replace(",", "."));
    return (isNaN(e) ? 0 : e) * t;
  }
  function zt(e, t) {
    const n = {};
    return (
      (n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
      e.clone().add(n.months, "M").isAfter(t) && --n.months,
      (n.milliseconds = +t - +e.clone().add(n.months, "M")),
      n
    );
  }
  function $t(s, i) {
    return function (e, t) {
      let n;
      return (
        t === null ||
          isNaN(+t) ||
          (Q(
            i,
            `moment().${i}(period, number) is deprecated. Please use moment().${i}(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.`
          ),
          (n = e),
          (e = t),
          (t = n)),
        qt(this, C(e, t), s),
        this
      );
    };
  }
  function qt(e, t, n, s) {
    const i = t._milliseconds;
    const r = Ht(t._days);
    var t = Ht(t._months);
    e.isValid() &&
      ((s = s == null || s),
      t && Ve(e, ce(e, "Month") + t * n),
      r && fe(e, "Date", ce(e, "Date") + r * n),
      i && e._d.setTime(e._d.valueOf() + i * n),
      s && f.updateOffset(e, r || t));
  }
  (C.fn = Ct.prototype),
    (C.invalid = function () {
      return C(NaN);
    });
  (Ce = $t(1, "add")), (Je = $t(-1, "subtract"));
  function Bt(e) {
    return typeof e === "string" || e instanceof String;
  }
  function Jt(e) {
    return (
      h(e) ||
      V(e) ||
      Bt(e) ||
      u(e) ||
      (function (t) {
        const e = a(t);
        let n = !1;
        e && (n = t.filter((e) => !u(e) && Bt(t)).length === 0);
        return e && n;
      })(e) ||
      (function (e) {
        let t;
        let n;
        const s = F(e) && !L(e);
        let i = !1;
        const r = [
          "years",
          "year",
          "y",
          "months",
          "month",
          "M",
          "days",
          "day",
          "d",
          "dates",
          "date",
          "D",
          "hours",
          "hour",
          "h",
          "minutes",
          "minute",
          "m",
          "seconds",
          "second",
          "s",
          "milliseconds",
          "millisecond",
          "ms",
        ];
        const a = r.length;
        for (t = 0; t < a; t += 1) (n = r[t]), (i = i || c(e, n));
        return s && i;
      })(e) ||
      e == null
    );
  }
  function Qt(e, t) {
    if (e.date() < t.date()) return -Qt(t, e);
    const n = 12 * (t.year() - e.year()) + (t.month() - e.month());
    const s = e.clone().add(n, "months");
    var t =
      t - s < 0
        ? (t - s) / (s - e.clone().add(n - 1, "months"))
        : (t - s) / (e.clone().add(1 + n, "months") - s);
    return -(n + t) || 0;
  }
  function Xt(e) {
    return void 0 === e
      ? this._locale._abbr
      : ((e = mt(e)) != null && (this._locale = e), this);
  }
  (f.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
    (f.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
  Xe = e(
    "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
    function (e) {
      return void 0 === e ? this.localeData() : this.locale(e);
    }
  );
  function Kt() {
    return this._locale;
  }
  const en = 126227808e5;
  function tn(e, t) {
    return ((e % t) + t) % t;
  }
  function nn(e, t, n) {
    return e < 100 && e >= 0
      ? new Date(e + 400, t, n) - en
      : new Date(e, t, n).valueOf();
  }
  function sn(e, t, n) {
    return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - en : Date.UTC(e, t, n);
  }
  function rn(e, t) {
    return t.erasAbbrRegex(e);
  }
  function an() {
    for (
      var e = [], t = [], n = [], s = [], i = this.eras(), r = 0, a = i.length;
      r < a;
      ++r
    )
      t.push(M(i[r].name)),
        e.push(M(i[r].abbr)),
        n.push(M(i[r].narrow)),
        s.push(M(i[r].name)),
        s.push(M(i[r].abbr)),
        s.push(M(i[r].narrow));
    (this._erasRegex = new RegExp(`^(${s.join("|")})`, "i")),
      (this._erasNameRegex = new RegExp(`^(${t.join("|")})`, "i")),
      (this._erasAbbrRegex = new RegExp(`^(${e.join("|")})`, "i")),
      (this._erasNarrowRegex = new RegExp(`^(${n.join("|")})`, "i"));
  }
  function on(e, t) {
    s(0, [e, e.length], 0, t);
  }
  function un(e, t, n, s, i) {
    let r;
    return e == null
      ? qe(this, s, i).year
      : ((r = P(e, s, i)),
        function (e, t, n, s, i) {
          (e = $e(e, t, n, s, i)), (t = Ze(e.year, 0, e.dayOfYear));
          return (
            this.year(t.getUTCFullYear()),
            this.month(t.getUTCMonth()),
            this.date(t.getUTCDate()),
            this
          );
        }.call(this, e, (t = r < t ? r : t), n, s, i));
  }
  s("N", 0, 0, "eraAbbr"),
    s("NN", 0, 0, "eraAbbr"),
    s("NNN", 0, 0, "eraAbbr"),
    s("NNNN", 0, 0, "eraName"),
    s("NNNNN", 0, 0, "eraNarrow"),
    s("y", ["y", 1], "yo", "eraYear"),
    s("y", ["yy", 2], 0, "eraYear"),
    s("y", ["yyy", 3], 0, "eraYear"),
    s("y", ["yyyy", 4], 0, "eraYear"),
    v("N", rn),
    v("NN", rn),
    v("NNN", rn),
    v("NNNN", (e, t) => t.erasNameRegex(e)),
    v("NNNNN", (e, t) => t.erasNarrowRegex(e)),
    D(["N", "NN", "NNN", "NNNN", "NNNNN"], (e, t, n, s) => {
      s = n._locale.erasParse(e, s, n._strict);
      s ? (m(n).era = s) : (m(n).invalidEra = e);
    }),
    v("y", Me),
    v("yy", Me),
    v("yyy", Me),
    v("yyyy", Me),
    v("yo", (e, t) => t._eraYearOrdinalRegex || Me),
    D(["y", "yy", "yyy", "yyyy"], Y),
    D(["yo"], (e, t, n, s) => {
      let i;
      n._locale._eraYearOrdinalRegex &&
        (i = e.match(n._locale._eraYearOrdinalRegex)),
        n._locale.eraYearOrdinalParse
          ? (t[Y] = n._locale.eraYearOrdinalParse(e, i))
          : (t[Y] = parseInt(e, 10));
    }),
    s(0, ["gg", 2], 0, function () {
      return this.weekYear() % 100;
    }),
    s(0, ["GG", 2], 0, function () {
      return this.isoWeekYear() % 100;
    }),
    on("gggg", "weekYear"),
    on("ggggg", "weekYear"),
    on("GGGG", "isoWeekYear"),
    on("GGGGG", "isoWeekYear"),
    t("weekYear", "gg"),
    t("isoWeekYear", "GG"),
    n("weekYear", 1),
    n("isoWeekYear", 1),
    v("G", De),
    v("g", De),
    v("GG", p, w),
    v("gg", p, w),
    v("GGGG", ke, _e),
    v("gggg", ke, _e),
    v("GGGGG", ve, ye),
    v("ggggg", ve, ye),
    Te(["gggg", "ggggg", "GGGG", "GGGGG"], (e, t, n, s) => {
      t[s.substr(0, 2)] = g(e);
    }),
    Te(["gg", "GG"], (e, t, n, s) => {
      t[s] = f.parseTwoDigitYear(e);
    }),
    s("Q", 0, "Qo", "quarter"),
    t("quarter", "Q"),
    n("quarter", 7),
    v("Q", i),
    D("Q", (e, t) => {
      t[O] = 3 * (g(e) - 1);
    }),
    s("D", ["DD", 2], "Do", "date"),
    t("date", "D"),
    n("date", 9),
    v("D", p),
    v("DD", p, w),
    v("Do", (e, t) =>
      e
        ? t._dayOfMonthOrdinalParse || t._ordinalParse
        : t._dayOfMonthOrdinalParseLenient
    ),
    D(["D", "DD"], b),
    D("Do", (e, t) => {
      t[b] = g(e.match(p)[0]);
    });
  ke = de("Date", !0);
  s("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
    t("dayOfYear", "DDD"),
    n("dayOfYear", 4),
    v("DDD", pe),
    v("DDDD", me),
    D(["DDD", "DDDD"], (e, t, n) => {
      n._dayOfYear = g(e);
    }),
    s("m", ["mm", 2], 0, "minute"),
    t("minute", "m"),
    n("minute", 14),
    v("m", p),
    v("mm", p, w),
    D(["m", "mm"], T);
  let ln;
  var _e = de("Minutes", !1);
  var ve =
    (s("s", ["ss", 2], 0, "second"),
    t("second", "s"),
    n("second", 15),
    v("s", p),
    v("ss", p, w),
    D(["s", "ss"], N),
    de("Seconds", !1));
  for (
    s("S", 0, 0, function () {
      return ~~(this.millisecond() / 100);
    }),
      s(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10);
      }),
      s(0, ["SSS", 3], 0, "millisecond"),
      s(0, ["SSSS", 4], 0, function () {
        return 10 * this.millisecond();
      }),
      s(0, ["SSSSS", 5], 0, function () {
        return 100 * this.millisecond();
      }),
      s(0, ["SSSSSS", 6], 0, function () {
        return 1e3 * this.millisecond();
      }),
      s(0, ["SSSSSSS", 7], 0, function () {
        return 1e4 * this.millisecond();
      }),
      s(0, ["SSSSSSSS", 8], 0, function () {
        return 1e5 * this.millisecond();
      }),
      s(0, ["SSSSSSSSS", 9], 0, function () {
        return 1e6 * this.millisecond();
      }),
      t("millisecond", "ms"),
      n("millisecond", 16),
      v("S", pe, i),
      v("SS", pe, w),
      v("SSS", pe, me),
      ln = "SSSS";
    ln.length <= 9;
    ln += "S"
  )
    v(ln, Me);
  function hn(e, t) {
    t[Ne] = g(1e3 * `0.${e}`);
  }
  for (ln = "S"; ln.length <= 9; ln += "S") D(ln, hn);
  (ye = de("Milliseconds", !1)),
    s("z", 0, 0, "zoneAbbr"),
    s("zz", 0, 0, "zoneName");
  i = q.prototype;
  function dn(e) {
    return e;
  }
  (i.add = Ce),
    (i.calendar = function (e, t) {
      arguments.length === 1 &&
        (arguments[0]
          ? Jt(arguments[0])
            ? ((e = arguments[0]), (t = void 0))
            : (function (e) {
                for (
                  var t = F(e) && !L(e),
                    n = !1,
                    s = [
                      "sameDay",
                      "nextDay",
                      "lastDay",
                      "nextWeek",
                      "lastWeek",
                      "sameElse",
                    ],
                    i = 0;
                  i < s.length;
                  i += 1
                )
                  n = n || c(e, s[i]);
                return t && n;
              })(arguments[0]) && ((t = arguments[0]), (e = void 0))
          : (t = e = void 0));
      var e = e || W();
      var n = Gt(e, this).startOf("day");
      var n = f.calendarFormat(this, n) || "sameElse";
      var t = t && (d(t[n]) ? t[n].call(this, e) : t[n]);
      return this.format(t || this.localeData().calendar(n, this, W(e)));
    }),
    (i.clone = function () {
      return new q(this);
    }),
    (i.diff = function (e, t, n) {
      let s;
      let i;
      let r;
      if (!this.isValid()) return NaN;
      if (!(s = Gt(e, this)).isValid()) return NaN;
      switch (((i = 6e4 * (s.utcOffset() - this.utcOffset())), (t = _(t)))) {
        case "year":
          r = Qt(this, s) / 12;
          break;
        case "month":
          r = Qt(this, s);
          break;
        case "quarter":
          r = Qt(this, s) / 3;
          break;
        case "second":
          r = (this - s) / 1e3;
          break;
        case "minute":
          r = (this - s) / 6e4;
          break;
        case "hour":
          r = (this - s) / 36e5;
          break;
        case "day":
          r = (this - s - i) / 864e5;
          break;
        case "week":
          r = (this - s - i) / 6048e5;
          break;
        default:
          r = this - s;
      }
      return n ? r : y(r);
    }),
    (i.endOf = function (e) {
      let t;
      let n;
      if (void 0 === (e = _(e)) || e === "millisecond" || !this.isValid())
        return this;
      switch (((n = this._isUTC ? sn : nn), e)) {
        case "year":
          t = n(this.year() + 1, 0, 1) - 1;
          break;
        case "quarter":
          t = n(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
          break;
        case "month":
          t = n(this.year(), this.month() + 1, 1) - 1;
          break;
        case "week":
          t =
            n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
          break;
        case "isoWeek":
          t =
            n(
              this.year(),
              this.month(),
              this.date() - (this.isoWeekday() - 1) + 7
            ) - 1;
          break;
        case "day":
        case "date":
          t = n(this.year(), this.month(), this.date() + 1) - 1;
          break;
        case "hour":
          (t = this._d.valueOf()),
            (t +=
              36e5 -
              tn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) -
              1);
          break;
        case "minute":
          (t = this._d.valueOf()), (t += 6e4 - tn(t, 6e4) - 1);
          break;
        case "second":
          (t = this._d.valueOf()), (t += 1e3 - tn(t, 1e3) - 1);
          break;
      }
      return this._d.setTime(t), f.updateOffset(this, !0), this;
    }),
    (i.format = function (e) {
      return (
        (e = e || (this.isUtc() ? f.defaultFormatUtc : f.defaultFormat)),
        (e = re(this, e)),
        this.localeData().postformat(e)
      );
    }),
    (i.from = function (e, t) {
      return this.isValid() && ((h(e) && e.isValid()) || W(e).isValid())
        ? C({ to: this, from: e }).locale(this.locale()).humanize(!t)
        : this.localeData().invalidDate();
    }),
    (i.fromNow = function (e) {
      return this.from(W(), e);
    }),
    (i.to = function (e, t) {
      return this.isValid() && ((h(e) && e.isValid()) || W(e).isValid())
        ? C({ from: this, to: e }).locale(this.locale()).humanize(!t)
        : this.localeData().invalidDate();
    }),
    (i.toNow = function (e) {
      return this.to(W(), e);
    }),
    (i.get = function (e) {
      return d(this[(e = _(e))]) ? this[e]() : this;
    }),
    (i.invalidAt = function () {
      return m(this).overflow;
    }),
    (i.isAfter = function (e, t) {
      return (
        (e = h(e) ? e : W(e)),
        !(!this.isValid() || !e.isValid()) &&
          ((t = _(t) || "millisecond") === "millisecond"
            ? this.valueOf() > e.valueOf()
            : e.valueOf() < this.clone().startOf(t).valueOf())
      );
    }),
    (i.isBefore = function (e, t) {
      return (
        (e = h(e) ? e : W(e)),
        !(!this.isValid() || !e.isValid()) &&
          ((t = _(t) || "millisecond") === "millisecond"
            ? this.valueOf() < e.valueOf()
            : this.clone().endOf(t).valueOf() < e.valueOf())
      );
    }),
    (i.isBetween = function (e, t, n, s) {
      return (
        (e = h(e) ? e : W(e)),
        (t = h(t) ? t : W(t)),
        !!(this.isValid() && e.isValid() && t.isValid()) &&
          ((s = s || "()")[0] === "("
            ? this.isAfter(e, n)
            : !this.isBefore(e, n)) &&
          (s[1] === ")" ? this.isBefore(t, n) : !this.isAfter(t, n))
      );
    }),
    (i.isSame = function (e, t) {
      var e = h(e) ? e : W(e);
      return (
        !(!this.isValid() || !e.isValid()) &&
        ((t = _(t) || "millisecond") === "millisecond"
          ? this.valueOf() === e.valueOf()
          : ((e = e.valueOf()),
            this.clone().startOf(t).valueOf() <= e &&
              e <= this.clone().endOf(t).valueOf()))
      );
    }),
    (i.isSameOrAfter = function (e, t) {
      return this.isSame(e, t) || this.isAfter(e, t);
    }),
    (i.isSameOrBefore = function (e, t) {
      return this.isSame(e, t) || this.isBefore(e, t);
    }),
    (i.isValid = function () {
      return A(this);
    }),
    (i.lang = Xe),
    (i.locale = Xt),
    (i.localeData = Kt),
    (i.max = we),
    (i.min = ge),
    (i.parsingFlags = function () {
      return E({}, m(this));
    }),
    (i.set = function (e, t) {
      if (typeof e === "object")
        for (
          let n = (function (e) {
              let t;
              const n = [];
              for (t in e) c(e, t) && n.push({ unit: t, priority: le[t] });
              return n.sort((e, t) => e.priority - t.priority), n;
            })((e = ue(e))),
            s = n.length,
            i = 0;
          i < s;
          i++
        )
          this[n[i].unit](e[n[i].unit]);
      else if (d(this[(e = _(e))])) return this[e](t);
      return this;
    }),
    (i.startOf = function (e) {
      let t;
      let n;
      if (void 0 === (e = _(e)) || e === "millisecond" || !this.isValid())
        return this;
      switch (((n = this._isUTC ? sn : nn), e)) {
        case "year":
          t = n(this.year(), 0, 1);
          break;
        case "quarter":
          t = n(this.year(), this.month() - (this.month() % 3), 1);
          break;
        case "month":
          t = n(this.year(), this.month(), 1);
          break;
        case "week":
          t = n(this.year(), this.month(), this.date() - this.weekday());
          break;
        case "isoWeek":
          t = n(
            this.year(),
            this.month(),
            this.date() - (this.isoWeekday() - 1)
          );
          break;
        case "day":
        case "date":
          t = n(this.year(), this.month(), this.date());
          break;
        case "hour":
          (t = this._d.valueOf()),
            (t -= tn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5));
          break;
        case "minute":
          (t = this._d.valueOf()), (t -= tn(t, 6e4));
          break;
        case "second":
          (t = this._d.valueOf()), (t -= tn(t, 1e3));
          break;
      }
      return this._d.setTime(t), f.updateOffset(this, !0), this;
    }),
    (i.subtract = Je),
    (i.toArray = function () {
      const e = this;
      return [
        e.year(),
        e.month(),
        e.date(),
        e.hour(),
        e.minute(),
        e.second(),
        e.millisecond(),
      ];
    }),
    (i.toObject = function () {
      const e = this;
      return {
        years: e.year(),
        months: e.month(),
        date: e.date(),
        hours: e.hours(),
        minutes: e.minutes(),
        seconds: e.seconds(),
        milliseconds: e.milliseconds(),
      };
    }),
    (i.toDate = function () {
      return new Date(this.valueOf());
    }),
    (i.toISOString = function (e) {
      if (!this.isValid()) return null;
      const t = (e = !0 !== e) ? this.clone().utc() : this;
      return t.year() < 0 || t.year() > 9999
        ? re(
            t,
            e
              ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
              : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
          )
        : d(Date.prototype.toISOString)
        ? e
          ? this.toDate().toISOString()
          : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
              .toISOString()
              .replace("Z", re(t, "Z"))
        : re(
            t,
            e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
          );
    }),
    (i.inspect = function () {
      if (!this.isValid()) return `moment.invalid(/* ${this._i} */)`;
      let e;
      let t = "moment";
      let n = "";
      return (
        this.isLocal() ||
          ((t = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone"),
          (n = "Z")),
        (t = `[${t}("]`),
        (e = this.year() >= 0 && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
        this.format(`${t + e}-MM-DD[T]HH:mm:ss.SSS${n}[")]`)
      );
    }),
    typeof Symbol !== "undefined" &&
      Symbol.for != null &&
      (i[Symbol.for("nodejs.util.inspect.custom")] = function () {
        return `Moment<${this.format()}>`;
      }),
    (i.toJSON = function () {
      return this.isValid() ? this.toISOString() : null;
    }),
    (i.toString = function () {
      return this.clone()
        .locale("en")
        .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }),
    (i.unix = function () {
      return Math.floor(this.valueOf() / 1e3);
    }),
    (i.valueOf = function () {
      return this._d.valueOf() - 6e4 * (this._offset || 0);
    }),
    (i.creationData = function () {
      return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict,
      };
    }),
    (i.eraName = function () {
      for (
        var e, t = this.localeData().eras(), n = 0, s = t.length;
        n < s;
        ++n
      ) {
        if (
          ((e = this.clone().startOf("day").valueOf()),
          t[n].since <= e && e <= t[n].until)
        )
          return t[n].name;
        if (t[n].until <= e && e <= t[n].since) return t[n].name;
      }
      return "";
    }),
    (i.eraNarrow = function () {
      for (
        var e, t = this.localeData().eras(), n = 0, s = t.length;
        n < s;
        ++n
      ) {
        if (
          ((e = this.clone().startOf("day").valueOf()),
          t[n].since <= e && e <= t[n].until)
        )
          return t[n].narrow;
        if (t[n].until <= e && e <= t[n].since) return t[n].narrow;
      }
      return "";
    }),
    (i.eraAbbr = function () {
      for (
        var e, t = this.localeData().eras(), n = 0, s = t.length;
        n < s;
        ++n
      ) {
        if (
          ((e = this.clone().startOf("day").valueOf()),
          t[n].since <= e && e <= t[n].until)
        )
          return t[n].abbr;
        if (t[n].until <= e && e <= t[n].since) return t[n].abbr;
      }
      return "";
    }),
    (i.eraYear = function () {
      for (
        var e, t, n = this.localeData().eras(), s = 0, i = n.length;
        s < i;
        ++s
      )
        if (
          ((e = n[s].since <= n[s].until ? 1 : -1),
          (t = this.clone().startOf("day").valueOf()),
          (n[s].since <= t && t <= n[s].until) ||
            (n[s].until <= t && t <= n[s].since))
        )
          return (this.year() - f(n[s].since).year()) * e + n[s].offset;
      return this.year();
    }),
    (i.year = Ie),
    (i.isLeapYear = function () {
      return he(this.year());
    }),
    (i.weekYear = function (e) {
      return un.call(
        this,
        e,
        this.week(),
        this.weekday(),
        this.localeData()._week.dow,
        this.localeData()._week.doy
      );
    }),
    (i.isoWeekYear = function (e) {
      return un.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
    }),
    (i.quarter = i.quarters =
      function (e) {
        return e == null
          ? Math.ceil((this.month() + 1) / 3)
          : this.month(3 * (e - 1) + (this.month() % 3));
      }),
    (i.month = Ge),
    (i.daysInMonth = function () {
      return We(this.year(), this.month());
    }),
    (i.week = i.weeks =
      function (e) {
        const t = this.localeData().week(this);
        return e == null ? t : this.add(7 * (e - t), "d");
      }),
    (i.isoWeek = i.isoWeeks =
      function (e) {
        const t = qe(this, 1, 4).week;
        return e == null ? t : this.add(7 * (e - t), "d");
      }),
    (i.weeksInYear = function () {
      const e = this.localeData()._week;
      return P(this.year(), e.dow, e.doy);
    }),
    (i.weeksInWeekYear = function () {
      const e = this.localeData()._week;
      return P(this.weekYear(), e.dow, e.doy);
    }),
    (i.isoWeeksInYear = function () {
      return P(this.year(), 1, 4);
    }),
    (i.isoWeeksInISOWeekYear = function () {
      return P(this.isoWeekYear(), 1, 4);
    }),
    (i.date = ke),
    (i.day = i.days =
      function (e) {
        if (!this.isValid()) return e != null ? this : NaN;
        let t;
        let n;
        const s = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return e != null
          ? ((t = e),
            (n = this.localeData()),
            (e =
              typeof t !== "string"
                ? t
                : isNaN(t)
                ? typeof (t = n.weekdaysParse(t)) === "number"
                  ? t
                  : null
                : parseInt(t, 10)),
            this.add(e - s, "d"))
          : s;
      }),
    (i.weekday = function (e) {
      if (!this.isValid()) return e != null ? this : NaN;
      const t = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return e == null ? t : this.add(e - t, "d");
    }),
    (i.isoWeekday = function (e) {
      return this.isValid()
        ? e != null
          ? ((t = e),
            (n = this.localeData()),
            (n =
              typeof t === "string"
                ? n.weekdaysParse(t) % 7 || 7
                : isNaN(t)
                ? null
                : t),
            this.day(this.day() % 7 ? n : n - 7))
          : this.day() || 7
        : e != null
        ? this
        : NaN;
      let t;
      let n;
    }),
    (i.dayOfYear = function (e) {
      const t =
        Math.round(
          (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
        ) + 1;
      return e == null ? t : this.add(e - t, "d");
    }),
    (i.hour = i.hours = k),
    (i.minute = i.minutes = _e),
    (i.second = i.seconds = ve),
    (i.millisecond = i.milliseconds = ye),
    (i.utcOffset = function (e, t, n) {
      let s;
      const i = this._offset || 0;
      if (!this.isValid()) return e != null ? this : NaN;
      if (e == null) return this._isUTC ? i : Et(this);
      if (typeof e === "string") {
        if ((e = Vt(Ye, e)) === null) return this;
      } else Math.abs(e) < 16 && !n && (e *= 60);
      return (
        !this._isUTC && t && (s = Et(this)),
        (this._offset = e),
        (this._isUTC = !0),
        s != null && this.add(s, "m"),
        i !== e &&
          (!t || this._changeInProgress
            ? qt(this, C(e - i, "m"), 1, !1)
            : this._changeInProgress ||
              ((this._changeInProgress = !0),
              f.updateOffset(this, !0),
              (this._changeInProgress = null))),
        this
      );
    }),
    (i.utc = function (e) {
      return this.utcOffset(0, e);
    }),
    (i.local = function (e) {
      return (
        this._isUTC &&
          (this.utcOffset(0, e),
          (this._isUTC = !1),
          e && this.subtract(Et(this), "m")),
        this
      );
    }),
    (i.parseZone = function () {
      let e;
      return (
        this._tzm != null
          ? this.utcOffset(this._tzm, !1, !0)
          : typeof this._i === "string" &&
            ((e = Vt(Se, this._i)) != null
              ? this.utcOffset(e)
              : this.utcOffset(0, !0)),
        this
      );
    }),
    (i.hasAlignedHourOffset = function (e) {
      return (
        !!this.isValid() &&
        ((e = e ? W(e).utcOffset() : 0), (this.utcOffset() - e) % 60 == 0)
      );
    }),
    (i.isDST = function () {
      return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
      );
    }),
    (i.isLocal = function () {
      return !!this.isValid() && !this._isUTC;
    }),
    (i.isUtcOffset = function () {
      return !!this.isValid() && this._isUTC;
    }),
    (i.isUtc = At),
    (i.isUTC = At),
    (i.zoneAbbr = function () {
      return this._isUTC ? "UTC" : "";
    }),
    (i.zoneName = function () {
      return this._isUTC ? "Coordinated Universal Time" : "";
    }),
    (i.dates = e("dates accessor is deprecated. Use date instead.", ke)),
    (i.months = e("months accessor is deprecated. Use month instead", Ge)),
    (i.years = e("years accessor is deprecated. Use year instead", Ie)),
    (i.zone = e(
      "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
      function (e, t) {
        return e != null
          ? (this.utcOffset((e = typeof e !== "string" ? -e : e), t), this)
          : -this.utcOffset();
      }
    )),
    (i.isDSTShifted = e(
      "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
      function () {
        if (!o(this._isDSTShifted)) return this._isDSTShifted;
        let e;
        let t = {};
        return (
          $(t, this),
          (t = Nt(t))._a
            ? ((e = (t._isUTC ? l : W)(t._a)),
              (this._isDSTShifted =
                this.isValid() &&
                (function (e, t, n) {
                  for (
                    var s = Math.min(e.length, t.length),
                      i = Math.abs(e.length - t.length),
                      r = 0,
                      a = 0;
                    a < s;
                    a++
                  )
                    ((n && e[a] !== t[a]) || (!n && g(e[a]) !== g(t[a]))) &&
                      r++;
                  return r + i;
                })(t._a, e.toArray()) > 0))
            : (this._isDSTShifted = !1),
          this._isDSTShifted
        );
      }
    ));
  w = K.prototype;
  function cn(e, t, n, s) {
    const i = mt();
    var s = l().set(s, t);
    return i[n](s, e);
  }
  function fn(e, t, n) {
    if ((u(e) && ((t = e), (e = void 0)), (e = e || ""), t != null))
      return cn(e, t, n, "month");
    for (var s = [], i = 0; i < 12; i++) s[i] = cn(e, i, n, "month");
    return s;
  }
  function mn(e, t, n, s) {
    t =
      (typeof e === "boolean"
        ? u(t) && ((n = t), (t = void 0))
        : ((t = e), (e = !1), u((n = t)) && ((n = t), (t = void 0))),
      t || "");
    let i;
    const r = mt();
    const a = e ? r._week.dow : 0;
    const o = [];
    if (n != null) return cn(t, (n + a) % 7, s, "day");
    for (i = 0; i < 7; i++) o[i] = cn(t, (i + a) % 7, s, "day");
    return o;
  }
  (w.calendar = function (e, t, n) {
    return d((e = this._calendar[e] || this._calendar.sameElse))
      ? e.call(t, n)
      : e;
  }),
    (w.longDateFormat = function (e) {
      const t = this._longDateFormat[e];
      const n = this._longDateFormat[e.toUpperCase()];
      return t || !n
        ? t
        : ((this._longDateFormat[e] = n
            .match(te)
            .map((e) =>
              e === "MMMM" || e === "MM" || e === "DD" || e === "dddd"
                ? e.slice(1)
                : e
            )
            .join("")),
          this._longDateFormat[e]);
    }),
    (w.invalidDate = function () {
      return this._invalidDate;
    }),
    (w.ordinal = function (e) {
      return this._ordinal.replace("%d", e);
    }),
    (w.preparse = dn),
    (w.postformat = dn),
    (w.relativeTime = function (e, t, n, s) {
      const i = this._relativeTime[n];
      return d(i) ? i(e, t, n, s) : i.replace(/%d/i, e);
    }),
    (w.pastFuture = function (e, t) {
      return d((e = this._relativeTime[e > 0 ? "future" : "past"]))
        ? e(t)
        : e.replace(/%s/i, t);
    }),
    (w.set = function (e) {
      let t;
      let n;
      for (n in e)
        c(e, n) && (d((t = e[n])) ? (this[n] = t) : (this[`_${n}`] = t));
      (this._config = e),
        (this._dayOfMonthOrdinalParseLenient = new RegExp(
          `${
            this._dayOfMonthOrdinalParse.source || this._ordinalParse.source
          }|${/\d{1,2}/.source}`
        ));
    }),
    (w.eras = function (e, t) {
      for (
        var n, s = this._eras || mt("en")._eras, i = 0, r = s.length;
        i < r;
        ++i
      ) {
        switch (typeof s[i].since) {
          case "string":
            (n = f(s[i].since).startOf("day")), (s[i].since = n.valueOf());
            break;
        }
        switch (typeof s[i].until) {
          case "undefined":
            s[i].until = 1 / 0;
            break;
          case "string":
            (n = f(s[i].until).startOf("day").valueOf()),
              (s[i].until = n.valueOf());
            break;
        }
      }
      return s;
    }),
    (w.erasParse = function (e, t, n) {
      let s;
      let i;
      let r;
      let a;
      let o;
      const u = this.eras();
      for (e = e.toUpperCase(), s = 0, i = u.length; s < i; ++s)
        if (
          ((r = u[s].name.toUpperCase()),
          (a = u[s].abbr.toUpperCase()),
          (o = u[s].narrow.toUpperCase()),
          n)
        )
          switch (t) {
            case "N":
            case "NN":
            case "NNN":
              if (a === e) return u[s];
              break;
            case "NNNN":
              if (r === e) return u[s];
              break;
            case "NNNNN":
              if (o === e) return u[s];
              break;
          }
        else if ([r, a, o].indexOf(e) >= 0) return u[s];
    }),
    (w.erasConvertYear = function (e, t) {
      const n = e.since <= e.until ? 1 : -1;
      return void 0 === t
        ? f(e.since).year()
        : f(e.since).year() + (t - e.offset) * n;
    }),
    (w.erasAbbrRegex = function (e) {
      return (
        c(this, "_erasAbbrRegex") || an.call(this),
        e ? this._erasAbbrRegex : this._erasRegex
      );
    }),
    (w.erasNameRegex = function (e) {
      return (
        c(this, "_erasNameRegex") || an.call(this),
        e ? this._erasNameRegex : this._erasRegex
      );
    }),
    (w.erasNarrowRegex = function (e) {
      return (
        c(this, "_erasNarrowRegex") || an.call(this),
        e ? this._erasNarrowRegex : this._erasRegex
      );
    }),
    (w.months = function (e, t) {
      return e
        ? (a(this._months)
            ? this._months
            : this._months[
                (this._months.isFormat || He).test(t) ? "format" : "standalone"
              ])[e.month()]
        : a(this._months)
        ? this._months
        : this._months.standalone;
    }),
    (w.monthsShort = function (e, t) {
      return e
        ? (a(this._monthsShort)
            ? this._monthsShort
            : this._monthsShort[He.test(t) ? "format" : "standalone"])[
            e.month()
          ]
        : a(this._monthsShort)
        ? this._monthsShort
        : this._monthsShort.standalone;
    }),
    (w.monthsParse = function (e, t, n) {
      let s;
      let i;
      if (this._monthsParseExact)
        return function (e, t, n) {
          let s;
          let i;
          let r;
          var e = e.toLocaleLowerCase();
          if (!this._monthsParse)
            for (
              this._monthsParse = [],
                this._longMonthsParse = [],
                this._shortMonthsParse = [],
                s = 0;
              s < 12;
              ++s
            )
              (r = l([2e3, s])),
                (this._shortMonthsParse[s] = this.monthsShort(
                  r,
                  ""
                ).toLocaleLowerCase()),
                (this._longMonthsParse[s] = this.months(
                  r,
                  ""
                ).toLocaleLowerCase());
          return n
            ? t === "MMM"
              ? (i = S.call(this._shortMonthsParse, e)) !== -1
                ? i
                : null
              : (i = S.call(this._longMonthsParse, e)) !== -1
              ? i
              : null
            : t === "MMM"
            ? (i = S.call(this._shortMonthsParse, e)) !== -1 ||
              (i = S.call(this._longMonthsParse, e)) !== -1
              ? i
              : null
            : (i = S.call(this._longMonthsParse, e)) !== -1 ||
              (i = S.call(this._shortMonthsParse, e)) !== -1
            ? i
            : null;
        }.call(this, e, t, n);
      for (
        this._monthsParse ||
          ((this._monthsParse = []),
          (this._longMonthsParse = []),
          (this._shortMonthsParse = [])),
          s = 0;
        s < 12;
        s++
      ) {
        if (
          ((i = l([2e3, s])),
          n &&
            !this._longMonthsParse[s] &&
            ((this._longMonthsParse[s] = new RegExp(
              `^${this.months(i, "").replace(".", "")}$`,
              "i"
            )),
            (this._shortMonthsParse[s] = new RegExp(
              `^${this.monthsShort(i, "").replace(".", "")}$`,
              "i"
            ))),
          n ||
            this._monthsParse[s] ||
            ((i = `^${this.months(i, "")}|^${this.monthsShort(i, "")}`),
            (this._monthsParse[s] = new RegExp(i.replace(".", ""), "i"))),
          n && t === "MMMM" && this._longMonthsParse[s].test(e))
        )
          return s;
        if (n && t === "MMM" && this._shortMonthsParse[s].test(e)) return s;
        if (!n && this._monthsParse[s].test(e)) return s;
      }
    }),
    (w.monthsRegex = function (e) {
      return this._monthsParseExact
        ? (c(this, "_monthsRegex") || Ee.call(this),
          e ? this._monthsStrictRegex : this._monthsRegex)
        : (c(this, "_monthsRegex") || (this._monthsRegex = Le),
          this._monthsStrictRegex && e
            ? this._monthsStrictRegex
            : this._monthsRegex);
    }),
    (w.monthsShortRegex = function (e) {
      return this._monthsParseExact
        ? (c(this, "_monthsRegex") || Ee.call(this),
          e ? this._monthsShortStrictRegex : this._monthsShortRegex)
        : (c(this, "_monthsShortRegex") || (this._monthsShortRegex = Fe),
          this._monthsShortStrictRegex && e
            ? this._monthsShortStrictRegex
            : this._monthsShortRegex);
    }),
    (w.week = function (e) {
      return qe(e, this._week.dow, this._week.doy).week;
    }),
    (w.firstDayOfYear = function () {
      return this._week.doy;
    }),
    (w.firstDayOfWeek = function () {
      return this._week.dow;
    }),
    (w.weekdays = function (e, t) {
      return (
        (t = a(this._weekdays)
          ? this._weekdays
          : this._weekdays[
              e && !0 !== e && this._weekdays.isFormat.test(t)
                ? "format"
                : "standalone"
            ]),
        !0 === e ? Be(t, this._week.dow) : e ? t[e.day()] : t
      );
    }),
    (w.weekdaysMin = function (e) {
      return !0 === e
        ? Be(this._weekdaysMin, this._week.dow)
        : e
        ? this._weekdaysMin[e.day()]
        : this._weekdaysMin;
    }),
    (w.weekdaysShort = function (e) {
      return !0 === e
        ? Be(this._weekdaysShort, this._week.dow)
        : e
        ? this._weekdaysShort[e.day()]
        : this._weekdaysShort;
    }),
    (w.weekdaysParse = function (e, t, n) {
      let s;
      let i;
      if (this._weekdaysParseExact)
        return function (e, t, n) {
          let s;
          let i;
          let r;
          var e = e.toLocaleLowerCase();
          if (!this._weekdaysParse)
            for (
              this._weekdaysParse = [],
                this._shortWeekdaysParse = [],
                this._minWeekdaysParse = [],
                s = 0;
              s < 7;
              ++s
            )
              (r = l([2e3, 1]).day(s)),
                (this._minWeekdaysParse[s] = this.weekdaysMin(
                  r,
                  ""
                ).toLocaleLowerCase()),
                (this._shortWeekdaysParse[s] = this.weekdaysShort(
                  r,
                  ""
                ).toLocaleLowerCase()),
                (this._weekdaysParse[s] = this.weekdays(
                  r,
                  ""
                ).toLocaleLowerCase());
          return n
            ? t === "dddd"
              ? (i = S.call(this._weekdaysParse, e)) !== -1
                ? i
                : null
              : t === "ddd"
              ? (i = S.call(this._shortWeekdaysParse, e)) !== -1
                ? i
                : null
              : (i = S.call(this._minWeekdaysParse, e)) !== -1
              ? i
              : null
            : t === "dddd"
            ? (i = S.call(this._weekdaysParse, e)) !== -1 ||
              (i = S.call(this._shortWeekdaysParse, e)) !== -1 ||
              (i = S.call(this._minWeekdaysParse, e)) !== -1
              ? i
              : null
            : t === "ddd"
            ? (i = S.call(this._shortWeekdaysParse, e)) !== -1 ||
              (i = S.call(this._weekdaysParse, e)) !== -1 ||
              (i = S.call(this._minWeekdaysParse, e)) !== -1
              ? i
              : null
            : (i = S.call(this._minWeekdaysParse, e)) !== -1 ||
              (i = S.call(this._weekdaysParse, e)) !== -1 ||
              (i = S.call(this._shortWeekdaysParse, e)) !== -1
            ? i
            : null;
        }.call(this, e, t, n);
      for (
        this._weekdaysParse ||
          ((this._weekdaysParse = []),
          (this._minWeekdaysParse = []),
          (this._shortWeekdaysParse = []),
          (this._fullWeekdaysParse = [])),
          s = 0;
        s < 7;
        s++
      ) {
        if (
          ((i = l([2e3, 1]).day(s)),
          n &&
            !this._fullWeekdaysParse[s] &&
            ((this._fullWeekdaysParse[s] = new RegExp(
              `^${this.weekdays(i, "").replace(".", "\\.?")}$`,
              "i"
            )),
            (this._shortWeekdaysParse[s] = new RegExp(
              `^${this.weekdaysShort(i, "").replace(".", "\\.?")}$`,
              "i"
            )),
            (this._minWeekdaysParse[s] = new RegExp(
              `^${this.weekdaysMin(i, "").replace(".", "\\.?")}$`,
              "i"
            ))),
          this._weekdaysParse[s] ||
            ((i = `^${this.weekdays(i, "")}|^${this.weekdaysShort(
              i,
              ""
            )}|^${this.weekdaysMin(i, "")}`),
            (this._weekdaysParse[s] = new RegExp(i.replace(".", ""), "i"))),
          n && t === "dddd" && this._fullWeekdaysParse[s].test(e))
        )
          return s;
        if (n && t === "ddd" && this._shortWeekdaysParse[s].test(e)) return s;
        if (n && t === "dd" && this._minWeekdaysParse[s].test(e)) return s;
        if (!n && this._weekdaysParse[s].test(e)) return s;
      }
    }),
    (w.weekdaysRegex = function (e) {
      return this._weekdaysParseExact
        ? (c(this, "_weekdaysRegex") || nt.call(this),
          e ? this._weekdaysStrictRegex : this._weekdaysRegex)
        : (c(this, "_weekdaysRegex") || (this._weekdaysRegex = Ke),
          this._weekdaysStrictRegex && e
            ? this._weekdaysStrictRegex
            : this._weekdaysRegex);
    }),
    (w.weekdaysShortRegex = function (e) {
      return this._weekdaysParseExact
        ? (c(this, "_weekdaysRegex") || nt.call(this),
          e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        : (c(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = et),
          this._weekdaysShortStrictRegex && e
            ? this._weekdaysShortStrictRegex
            : this._weekdaysShortRegex);
    }),
    (w.weekdaysMinRegex = function (e) {
      return this._weekdaysParseExact
        ? (c(this, "_weekdaysRegex") || nt.call(this),
          e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        : (c(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = tt),
          this._weekdaysMinStrictRegex && e
            ? this._weekdaysMinStrictRegex
            : this._weekdaysMinRegex);
    }),
    (w.isPM = function (e) {
      return `${e}`.toLowerCase().charAt(0) === "p";
    }),
    (w.meridiem = function (e, t, n) {
      return e > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM";
    }),
    ct("en", {
      eras: [
        {
          since: "0001-01-01",
          until: 1 / 0,
          offset: 1,
          name: "Anno Domini",
          narrow: "AD",
          abbr: "AD",
        },
        {
          since: "0000-12-31",
          until: -1 / 0,
          offset: 1,
          name: "Before Christ",
          narrow: "BC",
          abbr: "BC",
        },
      ],
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal(e) {
        const t = e % 10;
        return (
          e +
          (g((e % 100) / 10) === 1
            ? "th"
            : t == 1
            ? "st"
            : t == 2
            ? "nd"
            : t == 3
            ? "rd"
            : "th")
        );
      },
    }),
    (f.lang = e("moment.lang is deprecated. Use moment.locale instead.", ct)),
    (f.langData = e(
      "moment.langData is deprecated. Use moment.localeData instead.",
      mt
    ));
  const _n = Math.abs;
  function yn(e, t, n, s) {
    t = C(t, n);
    return (
      (e._milliseconds += s * t._milliseconds),
      (e._days += s * t._days),
      (e._months += s * t._months),
      e._bubble()
    );
  }
  function gn(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e);
  }
  function wn(e) {
    return (4800 * e) / 146097;
  }
  function pn(e) {
    return (146097 * e) / 4800;
  }
  function kn(e) {
    return function () {
      return this.as(e);
    };
  }
  (pe = kn("ms")),
    (me = kn("s")),
    (Ce = kn("m")),
    (we = kn("h")),
    (ge = kn("d")),
    (Je = kn("w")),
    (k = kn("M")),
    (_e = kn("Q")),
    (ve = kn("y"));
  function vn(e) {
    return function () {
      return this.isValid() ? this._data[e] : NaN;
    };
  }
  var ye = vn("milliseconds");
  var ke = vn("seconds");
  var Ie = vn("minutes");
  var w = vn("hours");
  const Mn = vn("days");
  const Dn = vn("months");
  const Sn = vn("years");
  let Yn = Math.round;
  const On = {
    ss: 44,
    s: 45,
    m: 45,
    h: 22,
    d: 26,
    w: null,
    M: 11,
  };
  function bn(e, t, n, s) {
    var i = C(e).abs();
    var r = Yn(i.as("s"));
    const a = Yn(i.as("m"));
    const o = Yn(i.as("h"));
    const u = Yn(i.as("d"));
    const l = Yn(i.as("M"));
    const h = Yn(i.as("w"));
    var i = Yn(i.as("y"));
    var r =
      (r <= n.ss ? ["s", r] : r < n.s && ["ss", r]) ||
      (a <= 1 && ["m"]) ||
      (a < n.m && ["mm", a]) ||
      (o <= 1 && ["h"]) ||
      (o < n.h && ["hh", o]) ||
      (u <= 1 && ["d"]) ||
      (u < n.d && ["dd", u]);
    return (
      ((r = (r =
        n.w != null ? r || (h <= 1 && ["w"]) || (h < n.w && ["ww", h]) : r) ||
        (l <= 1 && ["M"]) ||
        (l < n.M && ["MM", l]) ||
        (i <= 1 && ["y"]) || ["yy", i])[2] = t),
      (r[3] = +e > 0),
      (r[4] = s),
      function (e, t, n, s, i) {
        return i.relativeTime(t || 1, !!n, e, s);
      }.apply(null, r)
    );
  }
  const xn = Math.abs;
  function Tn(e) {
    return (e > 0) - (e < 0) || +e;
  }
  function Nn() {
    if (!this.isValid()) return this.localeData().invalidDate();
    let e;
    let t;
    let n;
    let s;
    let i;
    let r;
    let a;
    let o = xn(this._milliseconds) / 1e3;
    const u = xn(this._days);
    let l = xn(this._months);
    const h = this.asSeconds();
    return h
      ? ((e = y(o / 60)),
        (t = y(e / 60)),
        (o %= 60),
        (e %= 60),
        (n = y(l / 12)),
        (l %= 12),
        (s = o ? o.toFixed(3).replace(/\.?0+$/, "") : ""),
        (i = Tn(this._months) !== Tn(h) ? "-" : ""),
        (r = Tn(this._days) !== Tn(h) ? "-" : ""),
        (a = Tn(this._milliseconds) !== Tn(h) ? "-" : ""),
        `${h < 0 ? "-" : ""}P${n ? `${i + n}Y` : ""}${l ? `${i + l}M` : ""}${
          u ? `${r + u}D` : ""
        }${t || e || o ? "T" : ""}${t ? `${a + t}H` : ""}${
          e ? `${a + e}M` : ""
        }${o ? `${a + s}S` : ""}`)
      : "P0D";
  }
  const U = Ct.prototype;
  return (
    (U.isValid = function () {
      return this._isValid;
    }),
    (U.abs = function () {
      const e = this._data;
      return (
        (this._milliseconds = _n(this._milliseconds)),
        (this._days = _n(this._days)),
        (this._months = _n(this._months)),
        (e.milliseconds = _n(e.milliseconds)),
        (e.seconds = _n(e.seconds)),
        (e.minutes = _n(e.minutes)),
        (e.hours = _n(e.hours)),
        (e.months = _n(e.months)),
        (e.years = _n(e.years)),
        this
      );
    }),
    (U.add = function (e, t) {
      return yn(this, e, t, 1);
    }),
    (U.subtract = function (e, t) {
      return yn(this, e, t, -1);
    }),
    (U.as = function (e) {
      if (!this.isValid()) return NaN;
      let t;
      let n;
      const s = this._milliseconds;
      if ((e = _(e)) === "month" || e === "quarter" || e === "year")
        switch (((t = this._days + s / 864e5), (n = this._months + wn(t)), e)) {
          case "month":
            return n;
          case "quarter":
            return n / 3;
          case "year":
            return n / 12;
        }
      else
        switch (((t = this._days + Math.round(pn(this._months))), e)) {
          case "week":
            return t / 7 + s / 6048e5;
          case "day":
            return t + s / 864e5;
          case "hour":
            return 24 * t + s / 36e5;
          case "minute":
            return 1440 * t + s / 6e4;
          case "second":
            return 86400 * t + s / 1e3;
          case "millisecond":
            return Math.floor(864e5 * t) + s;
          default:
            throw new Error(`Unknown unit ${e}`);
        }
    }),
    (U.asMilliseconds = pe),
    (U.asSeconds = me),
    (U.asMinutes = Ce),
    (U.asHours = we),
    (U.asDays = ge),
    (U.asWeeks = Je),
    (U.asMonths = k),
    (U.asQuarters = _e),
    (U.asYears = ve),
    (U.valueOf = function () {
      return this.isValid()
        ? this._milliseconds +
            864e5 * this._days +
            (this._months % 12) * 2592e6 +
            31536e6 * g(this._months / 12)
        : NaN;
    }),
    (U._bubble = function () {
      let e = this._milliseconds;
      let t = this._days;
      let n = this._months;
      const s = this._data;
      return (
        (e >= 0 && t >= 0 && n >= 0) ||
          (e <= 0 && t <= 0 && n <= 0) ||
          ((e += 864e5 * gn(pn(n) + t)), (n = t = 0)),
        (s.milliseconds = e % 1e3),
        (e = y(e / 1e3)),
        (s.seconds = e % 60),
        (e = y(e / 60)),
        (s.minutes = e % 60),
        (e = y(e / 60)),
        (s.hours = e % 24),
        (t += y(e / 24)),
        (n += e = y(wn(t))),
        (t -= gn(pn(e))),
        (e = y(n / 12)),
        (n %= 12),
        (s.days = t),
        (s.months = n),
        (s.years = e),
        this
      );
    }),
    (U.clone = function () {
      return C(this);
    }),
    (U.get = function (e) {
      return (e = _(e)), this.isValid() ? this[`${e}s`]() : NaN;
    }),
    (U.milliseconds = ye),
    (U.seconds = ke),
    (U.minutes = Ie),
    (U.hours = w),
    (U.days = Mn),
    (U.weeks = function () {
      return y(this.days() / 7);
    }),
    (U.months = Dn),
    (U.years = Sn),
    (U.humanize = function (e, t) {
      if (!this.isValid()) return this.localeData().invalidDate();
      let n = !1;
      let s = On;
      return (
        typeof e === "object" && ((t = e), (e = !1)),
        typeof e === "boolean" && (n = e),
        typeof t === "object" &&
          ((s = { ...On, ...t }),
          t.s != null && t.ss == null && (s.ss = t.s - 1)),
        (e = this.localeData()),
        (t = bn(this, !n, s, e)),
        n && (t = e.pastFuture(+this, t)),
        e.postformat(t)
      );
    }),
    (U.toISOString = Nn),
    (U.toString = Nn),
    (U.toJSON = Nn),
    (U.locale = Xt),
    (U.localeData = Kt),
    (U.toIsoString = e(
      "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
      Nn
    )),
    (U.lang = Xe),
    s("X", 0, 0, "unix"),
    s("x", 0, 0, "valueOf"),
    v("x", De),
    v("X", /[+-]?\d+(\.\d{1,3})?/),
    D("X", (e, t, n) => {
      n._d = new Date(1e3 * parseFloat(e));
    }),
    D("x", (e, t, n) => {
      n._d = new Date(g(e));
    }),
    (f.version = "2.29.4"),
    (H = W),
    (f.fn = i),
    (f.min = function () {
      return Rt("isBefore", [].slice.call(arguments, 0));
    }),
    (f.max = function () {
      return Rt("isAfter", [].slice.call(arguments, 0));
    }),
    (f.now = function () {
      return Date.now ? Date.now() : +new Date();
    }),
    (f.utc = l),
    (f.unix = function (e) {
      return W(1e3 * e);
    }),
    (f.months = function (e, t) {
      return fn(e, t, "months");
    }),
    (f.isDate = V),
    (f.locale = ct),
    (f.invalid = I),
    (f.duration = C),
    (f.isMoment = h),
    (f.weekdays = function (e, t, n) {
      return mn(e, t, n, "weekdays");
    }),
    (f.parseZone = function () {
      return W.apply(null, arguments).parseZone();
    }),
    (f.localeData = mt),
    (f.isDuration = Ut),
    (f.monthsShort = function (e, t) {
      return fn(e, t, "monthsShort");
    }),
    (f.weekdaysMin = function (e, t, n) {
      return mn(e, t, n, "weekdaysMin");
    }),
    (f.defineLocale = ft),
    (f.updateLocale = function (e, t) {
      let n;
      let s;
      return (
        t != null
          ? ((s = ot),
            R[e] != null && R[e].parentLocale != null
              ? R[e].set(X(R[e]._config, t))
              : ((t = X((s = (n = dt(e)) != null ? n._config : s), t)),
                n == null && (t.abbr = e),
                ((s = new K(t)).parentLocale = R[e]),
                (R[e] = s)),
            ct(e))
          : R[e] != null &&
            (R[e].parentLocale != null
              ? ((R[e] = R[e].parentLocale), e === ct() && ct(e))
              : R[e] != null && delete R[e]),
        R[e]
      );
    }),
    (f.locales = function () {
      return ee(R);
    }),
    (f.weekdaysShort = function (e, t, n) {
      return mn(e, t, n, "weekdaysShort");
    }),
    (f.normalizeUnits = _),
    (f.relativeTimeRounding = function (e) {
      return void 0 === e ? Yn : typeof e === "function" && ((Yn = e), !0);
    }),
    (f.relativeTimeThreshold = function (e, t) {
      return (
        void 0 !== On[e] &&
        (void 0 === t ? On[e] : ((On[e] = t), e === "s" && (On.ss = t - 1), !0))
      );
    }),
    (f.calendarFormat = function (e, t) {
      return (e = e.diff(t, "days", !0)) < -6
        ? "sameElse"
        : e < -1
        ? "lastWeek"
        : e < 0
        ? "lastDay"
        : e < 1
        ? "sameDay"
        : e < 2
        ? "nextDay"
        : e < 7
        ? "nextWeek"
        : "sameElse";
    }),
    (f.prototype = i),
    (f.HTML5_FMT = {
      DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
      DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
      DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
      DATE: "YYYY-MM-DD",
      TIME: "HH:mm",
      TIME_SECONDS: "HH:mm:ss",
      TIME_MS: "HH:mm:ss.SSS",
      WEEK: "GGGG-[W]WW",
      MONTH: "YYYY-MM",
    }),
    f
  );
});
// # sourceMappingURL=moment.min.js.map
