function uiUploader(a) {
  "use strict";
  function b(a) {
    for (var b = 0; b < a.length; b++) i.files.push(a[b]);
  }
  function c() {
    return i.files;
  }
  function d(a) {
    i.options = a;
    for (
      var b = 0;
      b < i.files.length && i.activeUploads != i.options.concurrency;
      b++
    )
      i.files[b].active || h(i.files[b], i.options.url);
  }
  function e(a) {
    i.files.splice(i.files.indexOf(a), 1);
  }
  function f() {
    i.files.splice(0, i.files.length);
  }
  function g(a) {
    var b = [
        "n/a",
        "bytes",
        "KiB",
        "MiB",
        "GiB",
        "TB",
        "PB",
        "EiB",
        "ZiB",
        "YiB"
      ],
      c = +Math.floor(Math.log(a) / Math.log(1024));
    return (
      (a / Math.pow(1024, c)).toFixed(c ? 1 : 0) + " " + b[isNaN(a) ? 0 : c + 1]
    );
  }
  function h(a, b) {
    var c,
      e,
      f,
      h = "",
      j = "file";
    if (
      ((i.activeUploads += 1),
      (a.active = !0),
      (c = new window.XMLHttpRequest()),
      (e = new window.FormData()),
      c.open("POST", b),
      (c.upload.onloadstart = function() {}),
      (c.upload.onprogress = function(b) {
        b.lengthComputable &&
          ((a.loaded = b.loaded),
          (a.humanSize = g(b.loaded)),
          i.options.onProgress(a));
      }),
      (c.onload = function() {
        (i.activeUploads -= 1),
          d(i.options),
          i.options.onCompleted(a, c.responseText);
      }),
      (c.onerror = function() {}),
      h)
    )
      for (f in h) h.hasOwnProperty(f) && e.append(f, h[f]);
    return e.append(j, a, a.name), c.send(e), c;
  }
  var i = this;
  return (
    (i.files = []),
    (i.options = {}),
    (i.activeUploads = 0),
    a.info("uiUploader loaded"),
    {
      addFiles: b,
      getFiles: c,
      files: i.files,
      startUpload: d,
      removeFile: e,
      removeAll: f
    }
  );
}
if (
  ((function(a, b) {
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = a.document
          ? b(a, !0)
          : function(a) {
              if (!a.document)
                throw new Error("jQuery requires a window with a document");
              return b(a);
            })
      : b(a);
  })("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
      var b = "length" in a && a.length,
        c = _.type(a);
      return "function" === c || _.isWindow(a)
        ? !1
        : 1 === a.nodeType && b
        ? !0
        : "array" === c ||
          0 === b ||
          ("number" == typeof b && b > 0 && b - 1 in a);
    }
    function d(a, b, c) {
      if (_.isFunction(b))
        return _.grep(a, function(a, d) {
          return !!b.call(a, d, a) !== c;
        });
      if (b.nodeType)
        return _.grep(a, function(a) {
          return (a === b) !== c;
        });
      if ("string" == typeof b) {
        if (ha.test(b)) return _.filter(b, a, c);
        b = _.filter(b, a);
      }
      return _.grep(a, function(a) {
        return U.call(b, a) >= 0 !== c;
      });
    }
    function e(a, b) {
      for (; (a = a[b]) && 1 !== a.nodeType; );
      return a;
    }
    function f(a) {
      var b = (oa[a] = {});
      return (
        _.each(a.match(na) || [], function(a, c) {
          b[c] = !0;
        }),
        b
      );
    }
    function g() {
      Z.removeEventListener("DOMContentLoaded", g, !1),
        a.removeEventListener("load", g, !1),
        _.ready();
    }
    function h() {
      Object.defineProperty((this.cache = {}), 0, {
        get: function() {
          return {};
        }
      }),
        (this.expando = _.expando + h.uid++);
    }
    function i(a, b, c) {
      var d;
      if (void 0 === c && 1 === a.nodeType)
        if (
          ((d = "data-" + b.replace(ua, "-$1").toLowerCase()),
          (c = a.getAttribute(d)),
          "string" == typeof c)
        ) {
          try {
            c =
              "true" === c
                ? !0
                : "false" === c
                ? !1
                : "null" === c
                ? null
                : +c + "" === c
                ? +c
                : ta.test(c)
                ? _.parseJSON(c)
                : c;
          } catch (e) {}
          sa.set(a, b, c);
        } else c = void 0;
      return c;
    }
    function j() {
      return !0;
    }
    function k() {
      return !1;
    }
    function l() {
      try {
        return Z.activeElement;
      } catch (a) {}
    }
    function m(a, b) {
      return _.nodeName(a, "table") &&
        _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
        ? a.getElementsByTagName("tbody")[0] ||
            a.appendChild(a.ownerDocument.createElement("tbody"))
        : a;
    }
    function n(a) {
      return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
    }
    function o(a) {
      var b = Ka.exec(a.type);
      return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
    }
    function p(a, b) {
      for (var c = 0, d = a.length; d > c; c++)
        ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval"));
    }
    function q(a, b) {
      var c, d, e, f, g, h, i, j;
      if (1 === b.nodeType) {
        if (
          ra.hasData(a) &&
          ((f = ra.access(a)), (g = ra.set(b, f)), (j = f.events))
        ) {
          delete g.handle, (g.events = {});
          for (e in j)
            for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c]);
        }
        sa.hasData(a) &&
          ((h = sa.access(a)), (i = _.extend({}, h)), sa.set(b, i));
      }
    }
    function r(a, b) {
      var c = a.getElementsByTagName
        ? a.getElementsByTagName(b || "*")
        : a.querySelectorAll
        ? a.querySelectorAll(b || "*")
        : [];
      return void 0 === b || (b && _.nodeName(a, b)) ? _.merge([a], c) : c;
    }
    function s(a, b) {
      var c = b.nodeName.toLowerCase();
      "input" === c && ya.test(a.type)
        ? (b.checked = a.checked)
        : ("input" === c || "textarea" === c) &&
          (b.defaultValue = a.defaultValue);
    }
    function t(b, c) {
      var d,
        e = _(c.createElement(b)).appendTo(c.body),
        f =
          a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0]))
            ? d.display
            : _.css(e[0], "display");
      return e.detach(), f;
    }
    function u(a) {
      var b = Z,
        c = Oa[a];
      return (
        c ||
          ((c = t(a, b)),
          ("none" !== c && c) ||
            ((Na = (
              Na || _("<iframe frameborder='0' width='0' height='0'/>")
            ).appendTo(b.documentElement)),
            (b = Na[0].contentDocument),
            b.write(),
            b.close(),
            (c = t(a, b)),
            Na.detach()),
          (Oa[a] = c)),
        c
      );
    }
    function v(a, b, c) {
      var d,
        e,
        f,
        g,
        h = a.style;
      return (
        (c = c || Ra(a)),
        c && (g = c.getPropertyValue(b) || c[b]),
        c &&
          ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)),
          Qa.test(g) &&
            Pa.test(b) &&
            ((d = h.width),
            (e = h.minWidth),
            (f = h.maxWidth),
            (h.minWidth = h.maxWidth = h.width = g),
            (g = c.width),
            (h.width = d),
            (h.minWidth = e),
            (h.maxWidth = f))),
        void 0 !== g ? g + "" : g
      );
    }
    function w(a, b) {
      return {
        get: function() {
          return a()
            ? void delete this.get
            : (this.get = b).apply(this, arguments);
        }
      };
    }
    function x(a, b) {
      if (b in a) return b;
      for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--; )
        if (((b = Xa[e] + c), b in a)) return b;
      return d;
    }
    function y(a, b, c) {
      var d = Ta.exec(b);
      return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function z(a, b, c, d, e) {
      for (
        var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
          g = 0;
        4 > f;
        f += 2
      )
        "margin" === c && (g += _.css(a, c + wa[f], !0, e)),
          d
            ? ("content" === c && (g -= _.css(a, "padding" + wa[f], !0, e)),
              "margin" !== c &&
                (g -= _.css(a, "border" + wa[f] + "Width", !0, e)))
            : ((g += _.css(a, "padding" + wa[f], !0, e)),
              "padding" !== c &&
                (g += _.css(a, "border" + wa[f] + "Width", !0, e)));
      return g;
    }
    function A(a, b, c) {
      var d = !0,
        e = "width" === b ? a.offsetWidth : a.offsetHeight,
        f = Ra(a),
        g = "border-box" === _.css(a, "boxSizing", !1, f);
      if (0 >= e || null == e) {
        if (
          ((e = v(a, b, f)),
          (0 > e || null == e) && (e = a.style[b]),
          Qa.test(e))
        )
          return e;
        (d = g && (Y.boxSizingReliable() || e === a.style[b])),
          (e = parseFloat(e) || 0);
      }
      return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    function B(a, b) {
      for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
        (d = a[g]),
          d.style &&
            ((f[g] = ra.get(d, "olddisplay")),
            (c = d.style.display),
            b
              ? (f[g] || "none" !== c || (d.style.display = ""),
                "" === d.style.display &&
                  xa(d) &&
                  (f[g] = ra.access(d, "olddisplay", u(d.nodeName))))
              : ((e = xa(d)),
                ("none" === c && e) ||
                  ra.set(d, "olddisplay", e ? c : _.css(d, "display"))));
      for (g = 0; h > g; g++)
        (d = a[g]),
          d.style &&
            ((b && "none" !== d.style.display && "" !== d.style.display) ||
              (d.style.display = b ? f[g] || "" : "none"));
      return a;
    }
    function C(a, b, c, d, e) {
      return new C.prototype.init(a, b, c, d, e);
    }
    function D() {
      return (
        setTimeout(function() {
          Ya = void 0;
        }),
        (Ya = _.now())
      );
    }
    function E(a, b) {
      var c,
        d = 0,
        e = { height: a };
      for (b = b ? 1 : 0; 4 > d; d += 2 - b)
        (c = wa[d]), (e["margin" + c] = e["padding" + c] = a);
      return b && (e.opacity = e.width = a), e;
    }
    function F(a, b, c) {
      for (
        var d, e = (cb[b] || []).concat(cb["*"]), f = 0, g = e.length;
        g > f;
        f++
      )
        if ((d = e[f].call(c, b, a))) return d;
    }
    function G(a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = this,
        m = {},
        n = a.style,
        o = a.nodeType && xa(a),
        p = ra.get(a, "fxshow");
      c.queue ||
        ((h = _._queueHooks(a, "fx")),
        null == h.unqueued &&
          ((h.unqueued = 0),
          (i = h.empty.fire),
          (h.empty.fire = function() {
            h.unqueued || i();
          })),
        h.unqueued++,
        l.always(function() {
          l.always(function() {
            h.unqueued--, _.queue(a, "fx").length || h.empty.fire();
          });
        })),
        1 === a.nodeType &&
          ("height" in b || "width" in b) &&
          ((c.overflow = [n.overflow, n.overflowX, n.overflowY]),
          (j = _.css(a, "display")),
          (k = "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j),
          "inline" === k &&
            "none" === _.css(a, "float") &&
            (n.display = "inline-block")),
        c.overflow &&
          ((n.overflow = "hidden"),
          l.always(function() {
            (n.overflow = c.overflow[0]),
              (n.overflowX = c.overflow[1]),
              (n.overflowY = c.overflow[2]);
          }));
      for (d in b)
        if (((e = b[d]), $a.exec(e))) {
          if (
            (delete b[d],
            (f = f || "toggle" === e),
            e === (o ? "hide" : "show"))
          ) {
            if ("show" !== e || !p || void 0 === p[d]) continue;
            o = !0;
          }
          m[d] = (p && p[d]) || _.style(a, d);
        } else j = void 0;
      if (_.isEmptyObject(m))
        "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
      else {
        p ? "hidden" in p && (o = p.hidden) : (p = ra.access(a, "fxshow", {})),
          f && (p.hidden = !o),
          o
            ? _(a).show()
            : l.done(function() {
                _(a).hide();
              }),
          l.done(function() {
            var b;
            ra.remove(a, "fxshow");
            for (b in m) _.style(a, b, m[b]);
          });
        for (d in m)
          (g = F(o ? p[d] : 0, d, l)),
            d in p ||
              ((p[d] = g.start),
              o &&
                ((g.end = g.start),
                (g.start = "width" === d || "height" === d ? 1 : 0)));
      }
    }
    function H(a, b) {
      var c, d, e, f, g;
      for (c in a)
        if (
          ((d = _.camelCase(c)),
          (e = b[d]),
          (f = a[c]),
          _.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
          c !== d && ((a[d] = f), delete a[c]),
          (g = _.cssHooks[d]),
          g && "expand" in g)
        ) {
          (f = g.expand(f)), delete a[d];
          for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
        } else b[d] = e;
    }
    function I(a, b, c) {
      var d,
        e,
        f = 0,
        g = bb.length,
        h = _.Deferred().always(function() {
          delete i.elem;
        }),
        i = function() {
          if (e) return !1;
          for (
            var b = Ya || D(),
              c = Math.max(0, j.startTime + j.duration - b),
              d = c / j.duration || 0,
              f = 1 - d,
              g = 0,
              i = j.tweens.length;
            i > g;
            g++
          )
            j.tweens[g].run(f);
          return (
            h.notifyWith(a, [j, f, c]),
            1 > f && i ? c : (h.resolveWith(a, [j]), !1)
          );
        },
        j = h.promise({
          elem: a,
          props: _.extend({}, b),
          opts: _.extend(!0, { specialEasing: {} }, c),
          originalProperties: b,
          originalOptions: c,
          startTime: Ya || D(),
          duration: c.duration,
          tweens: [],
          createTween: function(b, c) {
            var d = _.Tween(
              a,
              j.opts,
              b,
              c,
              j.opts.specialEasing[b] || j.opts.easing
            );
            return j.tweens.push(d), d;
          },
          stop: function(b) {
            var c = 0,
              d = b ? j.tweens.length : 0;
            if (e) return this;
            for (e = !0; d > c; c++) j.tweens[c].run(1);
            return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
          }
        }),
        k = j.props;
      for (H(k, j.opts.specialEasing); g > f; f++)
        if ((d = bb[f].call(j, a, k, j.opts))) return d;
      return (
        _.map(k, F, j),
        _.isFunction(j.opts.start) && j.opts.start.call(a, j),
        _.fx.timer(_.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
        j
          .progress(j.opts.progress)
          .done(j.opts.done, j.opts.complete)
          .fail(j.opts.fail)
          .always(j.opts.always)
      );
    }
    function J(a) {
      return function(b, c) {
        "string" != typeof b && ((c = b), (b = "*"));
        var d,
          e = 0,
          f = b.toLowerCase().match(na) || [];
        if (_.isFunction(c))
          for (; (d = f[e++]); )
            "+" === d[0]
              ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
              : (a[d] = a[d] || []).push(c);
      };
    }
    function K(a, b, c, d) {
      function e(h) {
        var i;
        return (
          (f[h] = !0),
          _.each(a[h] || [], function(a, h) {
            var j = h(b, c, d);
            return "string" != typeof j || g || f[j]
              ? g
                ? !(i = j)
                : void 0
              : (b.dataTypes.unshift(j), e(j), !1);
          }),
          i
        );
      }
      var f = {},
        g = a === tb;
      return e(b.dataTypes[0]) || (!f["*"] && e("*"));
    }
    function L(a, b) {
      var c,
        d,
        e = _.ajaxSettings.flatOptions || {};
      for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
      return d && _.extend(!0, a, d), a;
    }
    function M(a, b, c) {
      for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; )
        i.shift(),
          void 0 === d &&
            (d = a.mimeType || b.getResponseHeader("Content-Type"));
      if (d)
        for (e in h)
          if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break;
          }
      if (i[0] in c) f = i[0];
      else {
        for (e in c) {
          if (!i[0] || a.converters[e + " " + i[0]]) {
            f = e;
            break;
          }
          g || (g = e);
        }
        f = f || g;
      }
      return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function N(a, b, c, d) {
      var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();
      if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
      for (f = k.shift(); f; )
        if (
          (a.responseFields[f] && (c[a.responseFields[f]] = b),
          !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
          (i = f),
          (f = k.shift()))
        )
          if ("*" === f) f = i;
          else if ("*" !== i && i !== f) {
            if (((g = j[i + " " + f] || j["* " + f]), !g))
              for (e in j)
                if (
                  ((h = e.split(" ")),
                  h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
                ) {
                  g === !0
                    ? (g = j[e])
                    : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                  break;
                }
            if (g !== !0)
              if (g && a["throws"]) b = g(b);
              else
                try {
                  b = g(b);
                } catch (l) {
                  return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                  };
                }
          }
      return { state: "success", data: b };
    }
    function O(a, b, c, d) {
      var e;
      if (_.isArray(b))
        _.each(b, function(b, e) {
          c || yb.test(a)
            ? d(a, e)
            : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
        });
      else if (c || "object" !== _.type(b)) d(a, b);
      else for (e in b) O(a + "[" + e + "]", b[e], c, d);
    }
    function P(a) {
      return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    var Q = [],
      R = Q.slice,
      S = Q.concat,
      T = Q.push,
      U = Q.indexOf,
      V = {},
      W = V.toString,
      X = V.hasOwnProperty,
      Y = {},
      Z = a.document,
      $ = "2.1.4",
      _ = function(a, b) {
        return new _.fn.init(a, b);
      },
      aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      ba = /^-ms-/,
      ca = /-([\da-z])/gi,
      da = function(a, b) {
        return b.toUpperCase();
      };
    (_.fn = _.prototype = {
      jquery: $,
      constructor: _,
      selector: "",
      length: 0,
      toArray: function() {
        return R.call(this);
      },
      get: function(a) {
        return null != a
          ? 0 > a
            ? this[a + this.length]
            : this[a]
          : R.call(this);
      },
      pushStack: function(a) {
        var b = _.merge(this.constructor(), a);
        return (b.prevObject = this), (b.context = this.context), b;
      },
      each: function(a, b) {
        return _.each(this, a, b);
      },
      map: function(a) {
        return this.pushStack(
          _.map(this, function(b, c) {
            return a.call(b, c, b);
          })
        );
      },
      slice: function() {
        return this.pushStack(R.apply(this, arguments));
      },
      first: function() {
        return this.eq(0);
      },
      last: function() {
        return this.eq(-1);
      },
      eq: function(a) {
        var b = this.length,
          c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
      },
      end: function() {
        return this.prevObject || this.constructor(null);
      },
      push: T,
      sort: Q.sort,
      splice: Q.splice
    }),
      (_.extend = _.fn.extend = function() {
        var a,
          b,
          c,
          d,
          e,
          f,
          g = arguments[0] || {},
          h = 1,
          i = arguments.length,
          j = !1;
        for (
          "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
            "object" == typeof g || _.isFunction(g) || (g = {}),
            h === i && ((g = this), h--);
          i > h;
          h++
        )
          if (null != (a = arguments[h]))
            for (b in a)
              (c = g[b]),
                (d = a[b]),
                g !== d &&
                  (j && d && (_.isPlainObject(d) || (e = _.isArray(d)))
                    ? (e
                        ? ((e = !1), (f = c && _.isArray(c) ? c : []))
                        : (f = c && _.isPlainObject(c) ? c : {}),
                      (g[b] = _.extend(j, f, d)))
                    : void 0 !== d && (g[b] = d));
        return g;
      }),
      _.extend({
        expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
          throw new Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
          return "function" === _.type(a);
        },
        isArray: Array.isArray,
        isWindow: function(a) {
          return null != a && a === a.window;
        },
        isNumeric: function(a) {
          return !_.isArray(a) && a - parseFloat(a) + 1 >= 0;
        },
        isPlainObject: function(a) {
          return "object" !== _.type(a) || a.nodeType || _.isWindow(a)
            ? !1
            : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf")
            ? !1
            : !0;
        },
        isEmptyObject: function(a) {
          var b;
          for (b in a) return !1;
          return !0;
        },
        type: function(a) {
          return null == a
            ? a + ""
            : "object" == typeof a || "function" == typeof a
            ? V[W.call(a)] || "object"
            : typeof a;
        },
        globalEval: function(a) {
          var b,
            c = eval;
          (a = _.trim(a)),
            a &&
              (1 === a.indexOf("use strict")
                ? ((b = Z.createElement("script")),
                  (b.text = a),
                  Z.head.appendChild(b).parentNode.removeChild(b))
                : c(a));
        },
        camelCase: function(a) {
          return a.replace(ba, "ms-").replace(ca, da);
        },
        nodeName: function(a, b) {
          return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function(a, b, d) {
          var e,
            f = 0,
            g = a.length,
            h = c(a);
          if (d) {
            if (h) for (; g > f && ((e = b.apply(a[f], d)), e !== !1); f++);
            else for (f in a) if (((e = b.apply(a[f], d)), e === !1)) break;
          } else if (h)
            for (; g > f && ((e = b.call(a[f], f, a[f])), e !== !1); f++);
          else for (f in a) if (((e = b.call(a[f], f, a[f])), e === !1)) break;
          return a;
        },
        trim: function(a) {
          return null == a ? "" : (a + "").replace(aa, "");
        },
        makeArray: function(a, b) {
          var d = b || [];
          return (
            null != a &&
              (c(Object(a))
                ? _.merge(d, "string" == typeof a ? [a] : a)
                : T.call(d, a)),
            d
          );
        },
        inArray: function(a, b, c) {
          return null == b ? -1 : U.call(b, a, c);
        },
        merge: function(a, b) {
          for (var c = +b.length, d = 0, e = a.length; c > d; d++)
            a[e++] = b[d];
          return (a.length = e), a;
        },
        grep: function(a, b, c) {
          for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
            (d = !b(a[f], f)), d !== h && e.push(a[f]);
          return e;
        },
        map: function(a, b, d) {
          var e,
            f = 0,
            g = a.length,
            h = c(a),
            i = [];
          if (h) for (; g > f; f++) (e = b(a[f], f, d)), null != e && i.push(e);
          else for (f in a) (e = b(a[f], f, d)), null != e && i.push(e);
          return S.apply([], i);
        },
        guid: 1,
        proxy: function(a, b) {
          var c, d, e;
          return (
            "string" == typeof b && ((c = a[b]), (b = a), (a = c)),
            _.isFunction(a)
              ? ((d = R.call(arguments, 2)),
                (e = function() {
                  return a.apply(b || this, d.concat(R.call(arguments)));
                }),
                (e.guid = a.guid = a.guid || _.guid++),
                e)
              : void 0
          );
        },
        now: Date.now,
        support: Y
      }),
      _.each(
        "Boolean Number String Function Array Date RegExp Object Error".split(
          " "
        ),
        function(a, b) {
          V["[object " + b + "]"] = b.toLowerCase();
        }
      );
    var ea = (function(a) {
      function b(a, b, c, d) {
        var e, f, g, h, i, j, l, n, o, p;
        if (
          ((b ? b.ownerDocument || b : O) !== G && F(b),
          (b = b || G),
          (c = c || []),
          (h = b.nodeType),
          "string" != typeof a || !a || (1 !== h && 9 !== h && 11 !== h))
        )
          return c;
        if (!d && I) {
          if (11 !== h && (e = sa.exec(a)))
            if ((g = e[1])) {
              if (9 === h) {
                if (((f = b.getElementById(g)), !f || !f.parentNode)) return c;
                if (f.id === g) return c.push(f), c;
              } else if (
                b.ownerDocument &&
                (f = b.ownerDocument.getElementById(g)) &&
                M(b, f) &&
                f.id === g
              )
                return c.push(f), c;
            } else {
              if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
              if ((g = e[3]) && v.getElementsByClassName)
                return $.apply(c, b.getElementsByClassName(g)), c;
            }
          if (v.qsa && (!J || !J.test(a))) {
            if (
              ((n = l = N),
              (o = b),
              (p = 1 !== h && a),
              1 === h && "object" !== b.nodeName.toLowerCase())
            ) {
              for (
                j = z(a),
                  (l = b.getAttribute("id"))
                    ? (n = l.replace(ua, "\\$&"))
                    : b.setAttribute("id", n),
                  n = "[id='" + n + "'] ",
                  i = j.length;
                i--;

              )
                j[i] = n + m(j[i]);
              (o = (ta.test(a) && k(b.parentNode)) || b), (p = j.join(","));
            }
            if (p)
              try {
                return $.apply(c, o.querySelectorAll(p)), c;
              } catch (q) {
              } finally {
                l || b.removeAttribute("id");
              }
          }
        }
        return B(a.replace(ia, "$1"), b, c, d);
      }
      function c() {
        function a(c, d) {
          return (
            b.push(c + " ") > w.cacheLength && delete a[b.shift()],
            (a[c + " "] = d)
          );
        }
        var b = [];
        return a;
      }
      function d(a) {
        return (a[N] = !0), a;
      }
      function e(a) {
        var b = G.createElement("div");
        try {
          return !!a(b);
        } catch (c) {
          return !1;
        } finally {
          b.parentNode && b.parentNode.removeChild(b), (b = null);
        }
      }
      function f(a, b) {
        for (var c = a.split("|"), d = a.length; d--; ) w.attrHandle[c[d]] = b;
      }
      function g(a, b) {
        var c = b && a,
          d =
            c &&
            1 === a.nodeType &&
            1 === b.nodeType &&
            (~b.sourceIndex || V) - (~a.sourceIndex || V);
        if (d) return d;
        if (c) for (; (c = c.nextSibling); ) if (c === b) return -1;
        return a ? 1 : -1;
      }
      function h(a) {
        return function(b) {
          var c = b.nodeName.toLowerCase();
          return "input" === c && b.type === a;
        };
      }
      function i(a) {
        return function(b) {
          var c = b.nodeName.toLowerCase();
          return ("input" === c || "button" === c) && b.type === a;
        };
      }
      function j(a) {
        return d(function(b) {
          return (
            (b = +b),
            d(function(c, d) {
              for (var e, f = a([], c.length, b), g = f.length; g--; )
                c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
            })
          );
        });
      }
      function k(a) {
        return a && "undefined" != typeof a.getElementsByTagName && a;
      }
      function l() {}
      function m(a) {
        for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
        return d;
      }
      function n(a, b, c) {
        var d = b.dir,
          e = c && "parentNode" === d,
          f = Q++;
        return b.first
          ? function(b, c, f) {
              for (; (b = b[d]); ) if (1 === b.nodeType || e) return a(b, c, f);
            }
          : function(b, c, g) {
              var h,
                i,
                j = [P, f];
              if (g) {
                for (; (b = b[d]); )
                  if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
              } else
                for (; (b = b[d]); )
                  if (1 === b.nodeType || e) {
                    if (
                      ((i = b[N] || (b[N] = {})),
                      (h = i[d]) && h[0] === P && h[1] === f)
                    )
                      return (j[2] = h[2]);
                    if (((i[d] = j), (j[2] = a(b, c, g)))) return !0;
                  }
            };
      }
      function o(a) {
        return a.length > 1
          ? function(b, c, d) {
              for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
              return !0;
            }
          : a[0];
      }
      function p(a, c, d) {
        for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
        return d;
      }
      function q(a, b, c, d, e) {
        for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
          (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
        return g;
      }
      function r(a, b, c, e, f, g) {
        return (
          e && !e[N] && (e = r(e)),
          f && !f[N] && (f = r(f, g)),
          d(function(d, g, h, i) {
            var j,
              k,
              l,
              m = [],
              n = [],
              o = g.length,
              r = d || p(b || "*", h.nodeType ? [h] : h, []),
              s = !a || (!d && b) ? r : q(r, m, a, h, i),
              t = c ? (f || (d ? a : o || e) ? [] : g) : s;
            if ((c && c(s, t, h, i), e))
              for (j = q(t, n), e(j, [], h, i), k = j.length; k--; )
                (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
            if (d) {
              if (f || a) {
                if (f) {
                  for (j = [], k = t.length; k--; )
                    (l = t[k]) && j.push((s[k] = l));
                  f(null, (t = []), j, i);
                }
                for (k = t.length; k--; )
                  (l = t[k]) &&
                    (j = f ? aa(d, l) : m[k]) > -1 &&
                    (d[j] = !(g[j] = l));
              }
            } else (t = q(t === g ? t.splice(o, t.length) : t)), f ? f(null, g, t, i) : $.apply(g, t);
          })
        );
      }
      function s(a) {
        for (
          var b,
            c,
            d,
            e = a.length,
            f = w.relative[a[0].type],
            g = f || w.relative[" "],
            h = f ? 1 : 0,
            i = n(
              function(a) {
                return a === b;
              },
              g,
              !0
            ),
            j = n(
              function(a) {
                return aa(b, a) > -1;
              },
              g,
              !0
            ),
            k = [
              function(a, c, d) {
                var e =
                  (!f && (d || c !== C)) ||
                  ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                return (b = null), e;
              }
            ];
          e > h;
          h++
        )
          if ((c = w.relative[a[h].type])) k = [n(o(k), c)];
          else {
            if (((c = w.filter[a[h].type].apply(null, a[h].matches)), c[N])) {
              for (d = ++h; e > d && !w.relative[a[d].type]; d++);
              return r(
                h > 1 && o(k),
                h > 1 &&
                  m(
                    a
                      .slice(0, h - 1)
                      .concat({ value: " " === a[h - 2].type ? "*" : "" })
                  ).replace(ia, "$1"),
                c,
                d > h && s(a.slice(h, d)),
                e > d && s((a = a.slice(d))),
                e > d && m(a)
              );
            }
            k.push(c);
          }
        return o(k);
      }
      function t(a, c) {
        var e = c.length > 0,
          f = a.length > 0,
          g = function(d, g, h, i, j) {
            var k,
              l,
              m,
              n = 0,
              o = "0",
              p = d && [],
              r = [],
              s = C,
              t = d || (f && w.find.TAG("*", j)),
              u = (P += null == s ? 1 : Math.random() || 0.1),
              v = t.length;
            for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
              if (f && k) {
                for (l = 0; (m = a[l++]); )
                  if (m(k, g, h)) {
                    i.push(k);
                    break;
                  }
                j && (P = u);
              }
              e && ((k = !m && k) && n--, d && p.push(k));
            }
            if (((n += o), e && o !== n)) {
              for (l = 0; (m = c[l++]); ) m(p, r, g, h);
              if (d) {
                if (n > 0) for (; o--; ) p[o] || r[o] || (r[o] = Y.call(i));
                r = q(r);
              }
              $.apply(i, r),
                j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i);
            }
            return j && ((P = u), (C = s)), p;
          };
        return e ? d(g) : g;
      }
      var u,
        v,
        w,
        x,
        y,
        z,
        A,
        B,
        C,
        D,
        E,
        F,
        G,
        H,
        I,
        J,
        K,
        L,
        M,
        N = "sizzle" + 1 * new Date(),
        O = a.document,
        P = 0,
        Q = 0,
        R = c(),
        S = c(),
        T = c(),
        U = function(a, b) {
          return a === b && (E = !0), 0;
        },
        V = 1 << 31,
        W = {}.hasOwnProperty,
        X = [],
        Y = X.pop,
        Z = X.push,
        $ = X.push,
        _ = X.slice,
        aa = function(a, b) {
          for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
          return -1;
        },
        ba =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ca = "[\\x20\\t\\r\\n\\f]",
        da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ea = da.replace("w", "w#"),
        fa =
          "\\[" +
          ca +
          "*(" +
          da +
          ")(?:" +
          ca +
          "*([*^$|!~]?=)" +
          ca +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          ea +
          "))|)" +
          ca +
          "*\\]",
        ga =
          ":(" +
          da +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          fa +
          ")*)|.*)\\)|)",
        ha = new RegExp(ca + "+", "g"),
        ia = new RegExp(
          "^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$",
          "g"
        ),
        ja = new RegExp("^" + ca + "*," + ca + "*"),
        ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
        la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
        ma = new RegExp(ga),
        na = new RegExp("^" + ea + "$"),
        oa = {
          ID: new RegExp("^#(" + da + ")"),
          CLASS: new RegExp("^\\.(" + da + ")"),
          TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + fa),
          PSEUDO: new RegExp("^" + ga),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              ca +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              ca +
              "*(?:([+-]|)" +
              ca +
              "*(\\d+)|))" +
              ca +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + ba + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              ca +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              ca +
              "*((?:-\\d)?\\d*)" +
              ca +
              "*\\)|)(?=[^-]|$)",
            "i"
          )
        },
        pa = /^(?:input|select|textarea|button)$/i,
        qa = /^h\d$/i,
        ra = /^[^{]+\{\s*\[native \w/,
        sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ta = /[+~]/,
        ua = /'|\\/g,
        va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
        wa = function(a, b, c) {
          var d = "0x" + b - 65536;
          return d !== d || c
            ? b
            : 0 > d
            ? String.fromCharCode(d + 65536)
            : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
        },
        xa = function() {
          F();
        };
      try {
        $.apply((X = _.call(O.childNodes)), O.childNodes),
          X[O.childNodes.length].nodeType;
      } catch (ya) {
        $ = {
          apply: X.length
            ? function(a, b) {
                Z.apply(a, _.call(b));
              }
            : function(a, b) {
                for (var c = a.length, d = 0; (a[c++] = b[d++]); );
                a.length = c - 1;
              }
        };
      }
      (v = b.support = {}),
        (y = b.isXML = function(a) {
          var b = a && (a.ownerDocument || a).documentElement;
          return b ? "HTML" !== b.nodeName : !1;
        }),
        (F = b.setDocument = function(a) {
          var b,
            c,
            d = a ? a.ownerDocument || a : O;
          return d !== G && 9 === d.nodeType && d.documentElement
            ? ((G = d),
              (H = d.documentElement),
              (c = d.defaultView),
              c &&
                c !== c.top &&
                (c.addEventListener
                  ? c.addEventListener("unload", xa, !1)
                  : c.attachEvent && c.attachEvent("onunload", xa)),
              (I = !y(d)),
              (v.attributes = e(function(a) {
                return (a.className = "i"), !a.getAttribute("className");
              })),
              (v.getElementsByTagName = e(function(a) {
                return (
                  a.appendChild(d.createComment("")),
                  !a.getElementsByTagName("*").length
                );
              })),
              (v.getElementsByClassName = ra.test(d.getElementsByClassName)),
              (v.getById = e(function(a) {
                return (
                  (H.appendChild(a).id = N),
                  !d.getElementsByName || !d.getElementsByName(N).length
                );
              })),
              v.getById
                ? ((w.find.ID = function(a, b) {
                    if ("undefined" != typeof b.getElementById && I) {
                      var c = b.getElementById(a);
                      return c && c.parentNode ? [c] : [];
                    }
                  }),
                  (w.filter.ID = function(a) {
                    var b = a.replace(va, wa);
                    return function(a) {
                      return a.getAttribute("id") === b;
                    };
                  }))
                : (delete w.find.ID,
                  (w.filter.ID = function(a) {
                    var b = a.replace(va, wa);
                    return function(a) {
                      var c =
                        "undefined" != typeof a.getAttributeNode &&
                        a.getAttributeNode("id");
                      return c && c.value === b;
                    };
                  })),
              (w.find.TAG = v.getElementsByTagName
                ? function(a, b) {
                    return "undefined" != typeof b.getElementsByTagName
                      ? b.getElementsByTagName(a)
                      : v.qsa
                      ? b.querySelectorAll(a)
                      : void 0;
                  }
                : function(a, b) {
                    var c,
                      d = [],
                      e = 0,
                      f = b.getElementsByTagName(a);
                    if ("*" === a) {
                      for (; (c = f[e++]); ) 1 === c.nodeType && d.push(c);
                      return d;
                    }
                    return f;
                  }),
              (w.find.CLASS =
                v.getElementsByClassName &&
                function(a, b) {
                  return I ? b.getElementsByClassName(a) : void 0;
                }),
              (K = []),
              (J = []),
              (v.qsa = ra.test(d.querySelectorAll)) &&
                (e(function(a) {
                  (H.appendChild(a).innerHTML =
                    "<a id='" +
                    N +
                    "'></a><select id='" +
                    N +
                    "-\f]' msallowcapture=''><option selected=''></option></select>"),
                    a.querySelectorAll("[msallowcapture^='']").length &&
                      J.push("[*^$]=" + ca + "*(?:''|\"\")"),
                    a.querySelectorAll("[selected]").length ||
                      J.push("\\[" + ca + "*(?:value|" + ba + ")"),
                    a.querySelectorAll("[id~=" + N + "-]").length ||
                      J.push("~="),
                    a.querySelectorAll(":checked").length || J.push(":checked"),
                    a.querySelectorAll("a#" + N + "+*").length ||
                      J.push(".#.+[+~]");
                }),
                e(function(a) {
                  var b = d.createElement("input");
                  b.setAttribute("type", "hidden"),
                    a.appendChild(b).setAttribute("name", "D"),
                    a.querySelectorAll("[name=d]").length &&
                      J.push("name" + ca + "*[*^$|!~]?="),
                    a.querySelectorAll(":enabled").length ||
                      J.push(":enabled", ":disabled"),
                    a.querySelectorAll("*,:x"),
                    J.push(",.*:");
                })),
              (v.matchesSelector = ra.test(
                (L =
                  H.matches ||
                  H.webkitMatchesSelector ||
                  H.mozMatchesSelector ||
                  H.oMatchesSelector ||
                  H.msMatchesSelector)
              )) &&
                e(function(a) {
                  (v.disconnectedMatch = L.call(a, "div")),
                    L.call(a, "[s!='']:x"),
                    K.push("!=", ga);
                }),
              (J = J.length && new RegExp(J.join("|"))),
              (K = K.length && new RegExp(K.join("|"))),
              (b = ra.test(H.compareDocumentPosition)),
              (M =
                b || ra.test(H.contains)
                  ? function(a, b) {
                      var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                      return (
                        a === d ||
                        !(
                          !d ||
                          1 !== d.nodeType ||
                          !(c.contains
                            ? c.contains(d)
                            : a.compareDocumentPosition &&
                              16 & a.compareDocumentPosition(d))
                        )
                      );
                    }
                  : function(a, b) {
                      if (b)
                        for (; (b = b.parentNode); ) if (b === a) return !0;
                      return !1;
                    }),
              (U = b
                ? function(a, b) {
                    if (a === b) return (E = !0), 0;
                    var c =
                      !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return c
                      ? c
                      : ((c =
                          (a.ownerDocument || a) === (b.ownerDocument || b)
                            ? a.compareDocumentPosition(b)
                            : 1),
                        1 & c ||
                        (!v.sortDetached && b.compareDocumentPosition(a) === c)
                          ? a === d || (a.ownerDocument === O && M(O, a))
                            ? -1
                            : b === d || (b.ownerDocument === O && M(O, b))
                            ? 1
                            : D
                            ? aa(D, a) - aa(D, b)
                            : 0
                          : 4 & c
                          ? -1
                          : 1);
                  }
                : function(a, b) {
                    if (a === b) return (E = !0), 0;
                    var c,
                      e = 0,
                      f = a.parentNode,
                      h = b.parentNode,
                      i = [a],
                      j = [b];
                    if (!f || !h)
                      return a === d
                        ? -1
                        : b === d
                        ? 1
                        : f
                        ? -1
                        : h
                        ? 1
                        : D
                        ? aa(D, a) - aa(D, b)
                        : 0;
                    if (f === h) return g(a, b);
                    for (c = a; (c = c.parentNode); ) i.unshift(c);
                    for (c = b; (c = c.parentNode); ) j.unshift(c);
                    for (; i[e] === j[e]; ) e++;
                    return e
                      ? g(i[e], j[e])
                      : i[e] === O
                      ? -1
                      : j[e] === O
                      ? 1
                      : 0;
                  }),
              d)
            : G;
        }),
        (b.matches = function(a, c) {
          return b(a, null, null, c);
        }),
        (b.matchesSelector = function(a, c) {
          if (
            ((a.ownerDocument || a) !== G && F(a),
            (c = c.replace(la, "='$1']")),
            !(!v.matchesSelector || !I || (K && K.test(c)) || (J && J.test(c))))
          )
            try {
              var d = L.call(a, c);
              if (
                d ||
                v.disconnectedMatch ||
                (a.document && 11 !== a.document.nodeType)
              )
                return d;
            } catch (e) {}
          return b(c, G, null, [a]).length > 0;
        }),
        (b.contains = function(a, b) {
          return (a.ownerDocument || a) !== G && F(a), M(a, b);
        }),
        (b.attr = function(a, b) {
          (a.ownerDocument || a) !== G && F(a);
          var c = w.attrHandle[b.toLowerCase()],
            d =
              c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
          return void 0 !== d
            ? d
            : v.attributes || !I
            ? a.getAttribute(b)
            : (d = a.getAttributeNode(b)) && d.specified
            ? d.value
            : null;
        }),
        (b.error = function(a) {
          throw new Error("Syntax error, unrecognized expression: " + a);
        }),
        (b.uniqueSort = function(a) {
          var b,
            c = [],
            d = 0,
            e = 0;
          if (
            ((E = !v.detectDuplicates),
            (D = !v.sortStable && a.slice(0)),
            a.sort(U),
            E)
          ) {
            for (; (b = a[e++]); ) b === a[e] && (d = c.push(e));
            for (; d--; ) a.splice(c[d], 1);
          }
          return (D = null), a;
        }),
        (x = b.getText = function(a) {
          var b,
            c = "",
            d = 0,
            e = a.nodeType;
          if (e) {
            if (1 === e || 9 === e || 11 === e) {
              if ("string" == typeof a.textContent) return a.textContent;
              for (a = a.firstChild; a; a = a.nextSibling) c += x(a);
            } else if (3 === e || 4 === e) return a.nodeValue;
          } else for (; (b = a[d++]); ) c += x(b);
          return c;
        }),
        (w = b.selectors = {
          cacheLength: 50,
          createPseudo: d,
          match: oa,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" }
          },
          preFilter: {
            ATTR: function(a) {
              return (
                (a[1] = a[1].replace(va, wa)),
                (a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa)),
                "~=" === a[2] && (a[3] = " " + a[3] + " "),
                a.slice(0, 4)
              );
            },
            CHILD: function(a) {
              return (
                (a[1] = a[1].toLowerCase()),
                "nth" === a[1].slice(0, 3)
                  ? (a[3] || b.error(a[0]),
                    (a[4] = +(a[4]
                      ? a[5] + (a[6] || 1)
                      : 2 * ("even" === a[3] || "odd" === a[3]))),
                    (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                  : a[3] && b.error(a[0]),
                a
              );
            },
            PSEUDO: function(a) {
              var b,
                c = !a[6] && a[2];
              return oa.CHILD.test(a[0])
                ? null
                : (a[3]
                    ? (a[2] = a[4] || a[5] || "")
                    : c &&
                      ma.test(c) &&
                      (b = z(c, !0)) &&
                      (b = c.indexOf(")", c.length - b) - c.length) &&
                      ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                  a.slice(0, 3));
            }
          },
          filter: {
            TAG: function(a) {
              var b = a.replace(va, wa).toLowerCase();
              return "*" === a
                ? function() {
                    return !0;
                  }
                : function(a) {
                    return a.nodeName && a.nodeName.toLowerCase() === b;
                  };
            },
            CLASS: function(a) {
              var b = R[a + " "];
              return (
                b ||
                ((b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) &&
                  R(a, function(a) {
                    return b.test(
                      ("string" == typeof a.className && a.className) ||
                        ("undefined" != typeof a.getAttribute &&
                          a.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function(a, c, d) {
              return function(e) {
                var f = b.attr(e, a);
                return null == f
                  ? "!=" === c
                  : c
                  ? ((f += ""),
                    "=" === c
                      ? f === d
                      : "!=" === c
                      ? f !== d
                      : "^=" === c
                      ? d && 0 === f.indexOf(d)
                      : "*=" === c
                      ? d && f.indexOf(d) > -1
                      : "$=" === c
                      ? d && f.slice(-d.length) === d
                      : "~=" === c
                      ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1
                      : "|=" === c
                      ? f === d || f.slice(0, d.length + 1) === d + "-"
                      : !1)
                  : !0;
              };
            },
            CHILD: function(a, b, c, d, e) {
              var f = "nth" !== a.slice(0, 3),
                g = "last" !== a.slice(-4),
                h = "of-type" === b;
              return 1 === d && 0 === e
                ? function(a) {
                    return !!a.parentNode;
                  }
                : function(b, c, i) {
                    var j,
                      k,
                      l,
                      m,
                      n,
                      o,
                      p = f !== g ? "nextSibling" : "previousSibling",
                      q = b.parentNode,
                      r = h && b.nodeName.toLowerCase(),
                      s = !i && !h;
                    if (q) {
                      if (f) {
                        for (; p; ) {
                          for (l = b; (l = l[p]); )
                            if (
                              h
                                ? l.nodeName.toLowerCase() === r
                                : 1 === l.nodeType
                            )
                              return !1;
                          o = p = "only" === a && !o && "nextSibling";
                        }
                        return !0;
                      }
                      if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                        for (
                          k = q[N] || (q[N] = {}),
                            j = k[a] || [],
                            n = j[0] === P && j[1],
                            m = j[0] === P && j[2],
                            l = n && q.childNodes[n];
                          (l = (++n && l && l[p]) || (m = n = 0) || o.pop());

                        )
                          if (1 === l.nodeType && ++m && l === b) {
                            k[a] = [P, n, m];
                            break;
                          }
                      } else if (
                        s &&
                        (j = (b[N] || (b[N] = {}))[a]) &&
                        j[0] === P
                      )
                        m = j[1];
                      else
                        for (
                          ;
                          (l = (++n && l && l[p]) || (m = n = 0) || o.pop()) &&
                          ((h
                            ? l.nodeName.toLowerCase() !== r
                            : 1 !== l.nodeType) ||
                            !++m ||
                            (s && ((l[N] || (l[N] = {}))[a] = [P, m]),
                            l !== b));

                        );
                      return (m -= e), m === d || (m % d === 0 && m / d >= 0);
                    }
                  };
            },
            PSEUDO: function(a, c) {
              var e,
                f =
                  w.pseudos[a] ||
                  w.setFilters[a.toLowerCase()] ||
                  b.error("unsupported pseudo: " + a);
              return f[N]
                ? f(c)
                : f.length > 1
                ? ((e = [a, a, "", c]),
                  w.setFilters.hasOwnProperty(a.toLowerCase())
                    ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--; )
                          (d = aa(a, e[g])), (a[d] = !(b[d] = e[g]));
                      })
                    : function(a) {
                        return f(a, 0, e);
                      })
                : f;
            }
          },
          pseudos: {
            not: d(function(a) {
              var b = [],
                c = [],
                e = A(a.replace(ia, "$1"));
              return e[N]
                ? d(function(a, b, c, d) {
                    for (var f, g = e(a, null, d, []), h = a.length; h--; )
                      (f = g[h]) && (a[h] = !(b[h] = f));
                  })
                : function(a, d, f) {
                    return (
                      (b[0] = a), e(b, null, f, c), (b[0] = null), !c.pop()
                    );
                  };
            }),
            has: d(function(a) {
              return function(c) {
                return b(a, c).length > 0;
              };
            }),
            contains: d(function(a) {
              return (
                (a = a.replace(va, wa)),
                function(b) {
                  return (b.textContent || b.innerText || x(b)).indexOf(a) > -1;
                }
              );
            }),
            lang: d(function(a) {
              return (
                na.test(a || "") || b.error("unsupported lang: " + a),
                (a = a.replace(va, wa).toLowerCase()),
                function(b) {
                  var c;
                  do
                    if (
                      (c = I
                        ? b.lang
                        : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                    )
                      return (
                        (c = c.toLowerCase()),
                        c === a || 0 === c.indexOf(a + "-")
                      );
                  while ((b = b.parentNode) && 1 === b.nodeType);
                  return !1;
                }
              );
            }),
            target: function(b) {
              var c = a.location && a.location.hash;
              return c && c.slice(1) === b.id;
            },
            root: function(a) {
              return a === H;
            },
            focus: function(a) {
              return (
                a === G.activeElement &&
                (!G.hasFocus || G.hasFocus()) &&
                !!(a.type || a.href || ~a.tabIndex)
              );
            },
            enabled: function(a) {
              return a.disabled === !1;
            },
            disabled: function(a) {
              return a.disabled === !0;
            },
            checked: function(a) {
              var b = a.nodeName.toLowerCase();
              return (
                ("input" === b && !!a.checked) ||
                ("option" === b && !!a.selected)
              );
            },
            selected: function(a) {
              return (
                a.parentNode && a.parentNode.selectedIndex, a.selected === !0
              );
            },
            empty: function(a) {
              for (a = a.firstChild; a; a = a.nextSibling)
                if (a.nodeType < 6) return !1;
              return !0;
            },
            parent: function(a) {
              return !w.pseudos.empty(a);
            },
            header: function(a) {
              return qa.test(a.nodeName);
            },
            input: function(a) {
              return pa.test(a.nodeName);
            },
            button: function(a) {
              var b = a.nodeName.toLowerCase();
              return ("input" === b && "button" === a.type) || "button" === b;
            },
            text: function(a) {
              var b;
              return (
                "input" === a.nodeName.toLowerCase() &&
                "text" === a.type &&
                (null == (b = a.getAttribute("type")) ||
                  "text" === b.toLowerCase())
              );
            },
            first: j(function() {
              return [0];
            }),
            last: j(function(a, b) {
              return [b - 1];
            }),
            eq: j(function(a, b, c) {
              return [0 > c ? c + b : c];
            }),
            even: j(function(a, b) {
              for (var c = 0; b > c; c += 2) a.push(c);
              return a;
            }),
            odd: j(function(a, b) {
              for (var c = 1; b > c; c += 2) a.push(c);
              return a;
            }),
            lt: j(function(a, b, c) {
              for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
              return a;
            }),
            gt: j(function(a, b, c) {
              for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
              return a;
            })
          }
        }),
        (w.pseudos.nth = w.pseudos.eq);
      for (u in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        w.pseudos[u] = h(u);
      for (u in { submit: !0, reset: !0 }) w.pseudos[u] = i(u);
      return (
        (l.prototype = w.filters = w.pseudos),
        (w.setFilters = new l()),
        (z = b.tokenize = function(a, c) {
          var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k = S[a + " "];
          if (k) return c ? 0 : k.slice(0);
          for (h = a, i = [], j = w.preFilter; h; ) {
            (!d || (e = ja.exec(h))) &&
              (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
              (d = !1),
              (e = ka.exec(h)) &&
                ((d = e.shift()),
                f.push({ value: d, type: e[0].replace(ia, " ") }),
                (h = h.slice(d.length)));
            for (g in w.filter)
              !(e = oa[g].exec(h)) ||
                (j[g] && !(e = j[g](e))) ||
                ((d = e.shift()),
                f.push({ value: d, type: g, matches: e }),
                (h = h.slice(d.length)));
            if (!d) break;
          }
          return c ? h.length : h ? b.error(a) : S(a, i).slice(0);
        }),
        (A = b.compile = function(a, b) {
          var c,
            d = [],
            e = [],
            f = T[a + " "];
          if (!f) {
            for (b || (b = z(a)), c = b.length; c--; )
              (f = s(b[c])), f[N] ? d.push(f) : e.push(f);
            (f = T(a, t(e, d))), (f.selector = a);
          }
          return f;
        }),
        (B = b.select = function(a, b, c, d) {
          var e,
            f,
            g,
            h,
            i,
            j = "function" == typeof a && a,
            l = !d && z((a = j.selector || a));
          if (((c = c || []), 1 === l.length)) {
            if (
              ((f = l[0] = l[0].slice(0)),
              f.length > 2 &&
                "ID" === (g = f[0]).type &&
                v.getById &&
                9 === b.nodeType &&
                I &&
                w.relative[f[1].type])
            ) {
              if (
                ((b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0]),
                !b)
              )
                return c;
              j && (b = b.parentNode), (a = a.slice(f.shift().value.length));
            }
            for (
              e = oa.needsContext.test(a) ? 0 : f.length;
              e-- && ((g = f[e]), !w.relative[(h = g.type)]);

            )
              if (
                (i = w.find[h]) &&
                (d = i(
                  g.matches[0].replace(va, wa),
                  (ta.test(f[0].type) && k(b.parentNode)) || b
                ))
              ) {
                if ((f.splice(e, 1), (a = d.length && m(f)), !a))
                  return $.apply(c, d), c;
                break;
              }
          }
          return (
            (j || A(a, l))(d, b, !I, c, (ta.test(a) && k(b.parentNode)) || b), c
          );
        }),
        (v.sortStable =
          N.split("")
            .sort(U)
            .join("") === N),
        (v.detectDuplicates = !!E),
        F(),
        (v.sortDetached = e(function(a) {
          return 1 & a.compareDocumentPosition(G.createElement("div"));
        })),
        e(function(a) {
          return (
            (a.innerHTML = "<a href='#'></a>"),
            "#" === a.firstChild.getAttribute("href")
          );
        }) ||
          f("type|href|height|width", function(a, b, c) {
            return c
              ? void 0
              : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
          }),
        (v.attributes &&
          e(function(a) {
            return (
              (a.innerHTML = "<input/>"),
              a.firstChild.setAttribute("value", ""),
              "" === a.firstChild.getAttribute("value")
            );
          })) ||
          f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase()
              ? void 0
              : a.defaultValue;
          }),
        e(function(a) {
          return null == a.getAttribute("disabled");
        }) ||
          f(ba, function(a, b, c) {
            var d;
            return c
              ? void 0
              : a[b] === !0
              ? b.toLowerCase()
              : (d = a.getAttributeNode(b)) && d.specified
              ? d.value
              : null;
          }),
        b
      );
    })(a);
    (_.find = ea),
      (_.expr = ea.selectors),
      (_.expr[":"] = _.expr.pseudos),
      (_.unique = ea.uniqueSort),
      (_.text = ea.getText),
      (_.isXMLDoc = ea.isXML),
      (_.contains = ea.contains);
    var fa = _.expr.match.needsContext,
      ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      ha = /^.[^:#\[\.,]*$/;
    (_.filter = function(a, b, c) {
      var d = b[0];
      return (
        c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType
          ? _.find.matchesSelector(d, a)
            ? [d]
            : []
          : _.find.matches(
              a,
              _.grep(b, function(a) {
                return 1 === a.nodeType;
              })
            )
      );
    }),
      _.fn.extend({
        find: function(a) {
          var b,
            c = this.length,
            d = [],
            e = this;
          if ("string" != typeof a)
            return this.pushStack(
              _(a).filter(function() {
                for (b = 0; c > b; b++) if (_.contains(e[b], this)) return !0;
              })
            );
          for (b = 0; c > b; b++) _.find(a, e[b], d);
          return (
            (d = this.pushStack(c > 1 ? _.unique(d) : d)),
            (d.selector = this.selector ? this.selector + " " + a : a),
            d
          );
        },
        filter: function(a) {
          return this.pushStack(d(this, a || [], !1));
        },
        not: function(a) {
          return this.pushStack(d(this, a || [], !0));
        },
        is: function(a) {
          return !!d(
            this,
            "string" == typeof a && fa.test(a) ? _(a) : a || [],
            !1
          ).length;
        }
      });
    var ia,
      ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      ka = (_.fn.init = function(a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
          if (
            ((c =
              "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3
                ? [null, a, null]
                : ja.exec(a)),
            !c || (!c[1] && b))
          )
            return !b || b.jquery
              ? (b || ia).find(a)
              : this.constructor(b).find(a);
          if (c[1]) {
            if (
              ((b = b instanceof _ ? b[0] : b),
              _.merge(
                this,
                _.parseHTML(
                  c[1],
                  b && b.nodeType ? b.ownerDocument || b : Z,
                  !0
                )
              ),
              ga.test(c[1]) && _.isPlainObject(b))
            )
              for (c in b)
                _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
            return this;
          }
          return (
            (d = Z.getElementById(c[2])),
            d && d.parentNode && ((this.length = 1), (this[0] = d)),
            (this.context = Z),
            (this.selector = a),
            this
          );
        }
        return a.nodeType
          ? ((this.context = this[0] = a), (this.length = 1), this)
          : _.isFunction(a)
          ? "undefined" != typeof ia.ready
            ? ia.ready(a)
            : a(_)
          : (void 0 !== a.selector &&
              ((this.selector = a.selector), (this.context = a.context)),
            _.makeArray(a, this));
      });
    (ka.prototype = _.fn), (ia = _(Z));
    var la = /^(?:parents|prev(?:Until|All))/,
      ma = { children: !0, contents: !0, next: !0, prev: !0 };
    _.extend({
      dir: function(a, b, c) {
        for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; )
          if (1 === a.nodeType) {
            if (e && _(a).is(c)) break;
            d.push(a);
          }
        return d;
      },
      sibling: function(a, b) {
        for (var c = []; a; a = a.nextSibling)
          1 === a.nodeType && a !== b && c.push(a);
        return c;
      }
    }),
      _.fn.extend({
        has: function(a) {
          var b = _(a, this),
            c = b.length;
          return this.filter(function() {
            for (var a = 0; c > a; a++) if (_.contains(this, b[a])) return !0;
          });
        },
        closest: function(a, b) {
          for (
            var c,
              d = 0,
              e = this.length,
              f = [],
              g =
                fa.test(a) || "string" != typeof a
                  ? _(a, b || this.context)
                  : 0;
            e > d;
            d++
          )
            for (c = this[d]; c && c !== b; c = c.parentNode)
              if (
                c.nodeType < 11 &&
                (g
                  ? g.index(c) > -1
                  : 1 === c.nodeType && _.find.matchesSelector(c, a))
              ) {
                f.push(c);
                break;
              }
          return this.pushStack(f.length > 1 ? _.unique(f) : f);
        },
        index: function(a) {
          return a
            ? "string" == typeof a
              ? U.call(_(a), this[0])
              : U.call(this, a.jquery ? a[0] : a)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function(a, b) {
          return this.pushStack(_.unique(_.merge(this.get(), _(a, b))));
        },
        addBack: function(a) {
          return this.add(
            null == a ? this.prevObject : this.prevObject.filter(a)
          );
        }
      }),
      _.each(
        {
          parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
          },
          parents: function(a) {
            return _.dir(a, "parentNode");
          },
          parentsUntil: function(a, b, c) {
            return _.dir(a, "parentNode", c);
          },
          next: function(a) {
            return e(a, "nextSibling");
          },
          prev: function(a) {
            return e(a, "previousSibling");
          },
          nextAll: function(a) {
            return _.dir(a, "nextSibling");
          },
          prevAll: function(a) {
            return _.dir(a, "previousSibling");
          },
          nextUntil: function(a, b, c) {
            return _.dir(a, "nextSibling", c);
          },
          prevUntil: function(a, b, c) {
            return _.dir(a, "previousSibling", c);
          },
          siblings: function(a) {
            return _.sibling((a.parentNode || {}).firstChild, a);
          },
          children: function(a) {
            return _.sibling(a.firstChild);
          },
          contents: function(a) {
            return a.contentDocument || _.merge([], a.childNodes);
          }
        },
        function(a, b) {
          _.fn[a] = function(c, d) {
            var e = _.map(this, b, c);
            return (
              "Until" !== a.slice(-5) && (d = c),
              d && "string" == typeof d && (e = _.filter(d, e)),
              this.length > 1 &&
                (ma[a] || _.unique(e), la.test(a) && e.reverse()),
              this.pushStack(e)
            );
          };
        }
      );
    var na = /\S+/g,
      oa = {};
    (_.Callbacks = function(a) {
      a = "string" == typeof a ? oa[a] || f(a) : _.extend({}, a);
      var b,
        c,
        d,
        e,
        g,
        h,
        i = [],
        j = !a.once && [],
        k = function(f) {
          for (
            b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0;
            i && g > h;
            h++
          )
            if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
              b = !1;
              break;
            }
          (d = !1),
            i && (j ? j.length && k(j.shift()) : b ? (i = []) : l.disable());
        },
        l = {
          add: function() {
            if (i) {
              var c = i.length;
              !(function f(b) {
                _.each(b, function(b, c) {
                  var d = _.type(c);
                  "function" === d
                    ? (a.unique && l.has(c)) || i.push(c)
                    : c && c.length && "string" !== d && f(c);
                });
              })(arguments),
                d ? (g = i.length) : b && ((e = c), k(b));
            }
            return this;
          },
          remove: function() {
            return (
              i &&
                _.each(arguments, function(a, b) {
                  for (var c; (c = _.inArray(b, i, c)) > -1; )
                    i.splice(c, 1), d && (g >= c && g--, h >= c && h--);
                }),
              this
            );
          },
          has: function(a) {
            return a ? _.inArray(a, i) > -1 : !(!i || !i.length);
          },
          empty: function() {
            return (i = []), (g = 0), this;
          },
          disable: function() {
            return (i = j = b = void 0), this;
          },
          disabled: function() {
            return !i;
          },
          lock: function() {
            return (j = void 0), b || l.disable(), this;
          },
          locked: function() {
            return !j;
          },
          fireWith: function(a, b) {
            return (
              !i ||
                (c && !j) ||
                ((b = b || []),
                (b = [a, b.slice ? b.slice() : b]),
                d ? j.push(b) : k(b)),
              this
            );
          },
          fire: function() {
            return l.fireWith(this, arguments), this;
          },
          fired: function() {
            return !!c;
          }
        };
      return l;
    }),
      _.extend({
        Deferred: function(a) {
          var b = [
              ["resolve", "done", _.Callbacks("once memory"), "resolved"],
              ["reject", "fail", _.Callbacks("once memory"), "rejected"],
              ["notify", "progress", _.Callbacks("memory")]
            ],
            c = "pending",
            d = {
              state: function() {
                return c;
              },
              always: function() {
                return e.done(arguments).fail(arguments), this;
              },
              then: function() {
                var a = arguments;
                return _.Deferred(function(c) {
                  _.each(b, function(b, f) {
                    var g = _.isFunction(a[b]) && a[b];
                    e[f[1]](function() {
                      var a = g && g.apply(this, arguments);
                      a && _.isFunction(a.promise)
                        ? a
                            .promise()
                            .done(c.resolve)
                            .fail(c.reject)
                            .progress(c.notify)
                        : c[f[0] + "With"](
                            this === d ? c.promise() : this,
                            g ? [a] : arguments
                          );
                    });
                  }),
                    (a = null);
                }).promise();
              },
              promise: function(a) {
                return null != a ? _.extend(a, d) : d;
              }
            },
            e = {};
          return (
            (d.pipe = d.then),
            _.each(b, function(a, f) {
              var g = f[2],
                h = f[3];
              (d[f[1]] = g.add),
                h &&
                  g.add(
                    function() {
                      c = h;
                    },
                    b[1 ^ a][2].disable,
                    b[2][2].lock
                  ),
                (e[f[0]] = function() {
                  return (
                    e[f[0] + "With"](this === e ? d : this, arguments), this
                  );
                }),
                (e[f[0] + "With"] = g.fireWith);
            }),
            d.promise(e),
            a && a.call(e, e),
            e
          );
        },
        when: function(a) {
          var b,
            c,
            d,
            e = 0,
            f = R.call(arguments),
            g = f.length,
            h = 1 !== g || (a && _.isFunction(a.promise)) ? g : 0,
            i = 1 === h ? a : _.Deferred(),
            j = function(a, c, d) {
              return function(e) {
                (c[a] = this),
                  (d[a] = arguments.length > 1 ? R.call(arguments) : e),
                  d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d);
              };
            };
          if (g > 1)
            for (
              b = new Array(g), c = new Array(g), d = new Array(g);
              g > e;
              e++
            )
              f[e] && _.isFunction(f[e].promise)
                ? f[e]
                    .promise()
                    .done(j(e, d, f))
                    .fail(i.reject)
                    .progress(j(e, c, b))
                : --h;
          return h || i.resolveWith(d, f), i.promise();
        }
      });
    var pa;
    (_.fn.ready = function(a) {
      return _.ready.promise().done(a), this;
    }),
      _.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
          a ? _.readyWait++ : _.ready(!0);
        },
        ready: function(a) {
          (a === !0 ? --_.readyWait : _.isReady) ||
            ((_.isReady = !0),
            (a !== !0 && --_.readyWait > 0) ||
              (pa.resolveWith(Z, [_]),
              _.fn.triggerHandler &&
                (_(Z).triggerHandler("ready"), _(Z).off("ready"))));
        }
      }),
      (_.ready.promise = function(b) {
        return (
          pa ||
            ((pa = _.Deferred()),
            "complete" === Z.readyState
              ? setTimeout(_.ready)
              : (Z.addEventListener("DOMContentLoaded", g, !1),
                a.addEventListener("load", g, !1))),
          pa.promise(b)
        );
      }),
      _.ready.promise();
    var qa = (_.access = function(a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === _.type(c)) {
        e = !0;
        for (h in c) _.access(a, b, h, c[h], !0, f, g);
      } else if (
        void 0 !== d &&
        ((e = !0),
        _.isFunction(d) || (g = !0),
        j &&
          (g
            ? (b.call(a, d), (b = null))
            : ((j = b),
              (b = function(a, b, c) {
                return j.call(_(a), c);
              }))),
        b)
      )
        for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    });
    (_.acceptData = function(a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    }),
      (h.uid = 1),
      (h.accepts = _.acceptData),
      (h.prototype = {
        key: function(a) {
          if (!h.accepts(a)) return 0;
          var b = {},
            c = a[this.expando];
          if (!c) {
            c = h.uid++;
            try {
              (b[this.expando] = { value: c }), Object.defineProperties(a, b);
            } catch (d) {
              (b[this.expando] = c), _.extend(a, b);
            }
          }
          return this.cache[c] || (this.cache[c] = {}), c;
        },
        set: function(a, b, c) {
          var d,
            e = this.key(a),
            f = this.cache[e];
          if ("string" == typeof b) f[b] = c;
          else if (_.isEmptyObject(f)) _.extend(this.cache[e], b);
          else for (d in b) f[d] = b[d];
          return f;
        },
        get: function(a, b) {
          var c = this.cache[this.key(a)];
          return void 0 === b ? c : c[b];
        },
        access: function(a, b, c) {
          var d;
          return void 0 === b || (b && "string" == typeof b && void 0 === c)
            ? ((d = this.get(a, b)),
              void 0 !== d ? d : this.get(a, _.camelCase(b)))
            : (this.set(a, b, c), void 0 !== c ? c : b);
        },
        remove: function(a, b) {
          var c,
            d,
            e,
            f = this.key(a),
            g = this.cache[f];
          if (void 0 === b) this.cache[f] = {};
          else {
            _.isArray(b)
              ? (d = b.concat(b.map(_.camelCase)))
              : ((e = _.camelCase(b)),
                b in g
                  ? (d = [b, e])
                  : ((d = e), (d = d in g ? [d] : d.match(na) || []))),
              (c = d.length);
            for (; c--; ) delete g[d[c]];
          }
        },
        hasData: function(a) {
          return !_.isEmptyObject(this.cache[a[this.expando]] || {});
        },
        discard: function(a) {
          a[this.expando] && delete this.cache[a[this.expando]];
        }
      });
    var ra = new h(),
      sa = new h(),
      ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ua = /([A-Z])/g;
    _.extend({
      hasData: function(a) {
        return sa.hasData(a) || ra.hasData(a);
      },
      data: function(a, b, c) {
        return sa.access(a, b, c);
      },
      removeData: function(a, b) {
        sa.remove(a, b);
      },
      _data: function(a, b, c) {
        return ra.access(a, b, c);
      },
      _removeData: function(a, b) {
        ra.remove(a, b);
      }
    }),
      _.fn.extend({
        data: function(a, b) {
          var c,
            d,
            e,
            f = this[0],
            g = f && f.attributes;
          if (void 0 === a) {
            if (
              this.length &&
              ((e = sa.get(f)), 1 === f.nodeType && !ra.get(f, "hasDataAttrs"))
            ) {
              for (c = g.length; c--; )
                g[c] &&
                  ((d = g[c].name),
                  0 === d.indexOf("data-") &&
                    ((d = _.camelCase(d.slice(5))), i(f, d, e[d])));
              ra.set(f, "hasDataAttrs", !0);
            }
            return e;
          }
          return "object" == typeof a
            ? this.each(function() {
                sa.set(this, a);
              })
            : qa(
                this,
                function(b) {
                  var c,
                    d = _.camelCase(a);
                  if (f && void 0 === b) {
                    if (((c = sa.get(f, a)), void 0 !== c)) return c;
                    if (((c = sa.get(f, d)), void 0 !== c)) return c;
                    if (((c = i(f, d, void 0)), void 0 !== c)) return c;
                  } else
                    this.each(function() {
                      var c = sa.get(this, d);
                      sa.set(this, d, b),
                        -1 !== a.indexOf("-") &&
                          void 0 !== c &&
                          sa.set(this, a, b);
                    });
                },
                null,
                b,
                arguments.length > 1,
                null,
                !0
              );
        },
        removeData: function(a) {
          return this.each(function() {
            sa.remove(this, a);
          });
        }
      }),
      _.extend({
        queue: function(a, b, c) {
          var d;
          return a
            ? ((b = (b || "fx") + "queue"),
              (d = ra.get(a, b)),
              c &&
                (!d || _.isArray(c)
                  ? (d = ra.access(a, b, _.makeArray(c)))
                  : d.push(c)),
              d || [])
            : void 0;
        },
        dequeue: function(a, b) {
          b = b || "fx";
          var c = _.queue(a, b),
            d = c.length,
            e = c.shift(),
            f = _._queueHooks(a, b),
            g = function() {
              _.dequeue(a, b);
            };
          "inprogress" === e && ((e = c.shift()), d--),
            e &&
              ("fx" === b && c.unshift("inprogress"),
              delete f.stop,
              e.call(a, g, f)),
            !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
          var c = b + "queueHooks";
          return (
            ra.get(a, c) ||
            ra.access(a, c, {
              empty: _.Callbacks("once memory").add(function() {
                ra.remove(a, [b + "queue", c]);
              })
            })
          );
        }
      }),
      _.fn.extend({
        queue: function(a, b) {
          var c = 2;
          return (
            "string" != typeof a && ((b = a), (a = "fx"), c--),
            arguments.length < c
              ? _.queue(this[0], a)
              : void 0 === b
              ? this
              : this.each(function() {
                  var c = _.queue(this, a, b);
                  _._queueHooks(this, a),
                    "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a);
                })
          );
        },
        dequeue: function(a) {
          return this.each(function() {
            _.dequeue(this, a);
          });
        },
        clearQueue: function(a) {
          return this.queue(a || "fx", []);
        },
        promise: function(a, b) {
          var c,
            d = 1,
            e = _.Deferred(),
            f = this,
            g = this.length,
            h = function() {
              --d || e.resolveWith(f, [f]);
            };
          for (
            "string" != typeof a && ((b = a), (a = void 0)), a = a || "fx";
            g--;

          )
            (c = ra.get(f[g], a + "queueHooks")),
              c && c.empty && (d++, c.empty.add(h));
          return h(), e.promise(b);
        }
      });
    var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      wa = ["Top", "Right", "Bottom", "Left"],
      xa = function(a, b) {
        return (
          (a = b || a),
          "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
        );
      },
      ya = /^(?:checkbox|radio)$/i;
    !(function() {
      var a = Z.createDocumentFragment(),
        b = a.appendChild(Z.createElement("div")),
        c = Z.createElement("input");
      c.setAttribute("type", "radio"),
        c.setAttribute("checked", "checked"),
        c.setAttribute("name", "t"),
        b.appendChild(c),
        (Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (b.innerHTML = "<textarea>x</textarea>"),
        (Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
    })();
    var za = "undefined";
    Y.focusinBubbles = "onfocusin" in a;
    var Aa = /^key/,
      Ba = /^(?:mouse|pointer|contextmenu)|click/,
      Ca = /^(?:focusinfocus|focusoutblur)$/,
      Da = /^([^.]*)(?:\.(.+)|)$/;
    (_.event = {
      global: {},
      add: function(a, b, c, d, e) {
        var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = ra.get(a);
        if (q)
          for (
            c.handler && ((f = c), (c = f.handler), (e = f.selector)),
              c.guid || (c.guid = _.guid++),
              (i = q.events) || (i = q.events = {}),
              (g = q.handle) ||
                (g = q.handle = function(b) {
                  return typeof _ !== za && _.event.triggered !== b.type
                    ? _.event.dispatch.apply(a, arguments)
                    : void 0;
                }),
              b = (b || "").match(na) || [""],
              j = b.length;
            j--;

          )
            (h = Da.exec(b[j]) || []),
              (n = p = h[1]),
              (o = (h[2] || "").split(".").sort()),
              n &&
                ((l = _.event.special[n] || {}),
                (n = (e ? l.delegateType : l.bindType) || n),
                (l = _.event.special[n] || {}),
                (k = _.extend(
                  {
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && _.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                  },
                  f
                )),
                (m = i[n]) ||
                  ((m = i[n] = []),
                  (m.delegateCount = 0),
                  (l.setup && l.setup.call(a, d, o, g) !== !1) ||
                    (a.addEventListener && a.addEventListener(n, g, !1))),
                l.add &&
                  (l.add.call(a, k),
                  k.handler.guid || (k.handler.guid = c.guid)),
                e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                (_.event.global[n] = !0));
      },
      remove: function(a, b, c, d, e) {
        var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = ra.hasData(a) && ra.get(a);
        if (q && (i = q.events)) {
          for (b = (b || "").match(na) || [""], j = b.length; j--; )
            if (
              ((h = Da.exec(b[j]) || []),
              (n = p = h[1]),
              (o = (h[2] || "").split(".").sort()),
              n)
            ) {
              for (
                l = _.event.special[n] || {},
                  n = (d ? l.delegateType : l.bindType) || n,
                  m = i[n] || [],
                  h =
                    h[2] &&
                    new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  g = f = m.length;
                f--;

              )
                (k = m[f]),
                  (!e && p !== k.origType) ||
                    (c && c.guid !== k.guid) ||
                    (h && !h.test(k.namespace)) ||
                    (d && d !== k.selector && ("**" !== d || !k.selector)) ||
                    (m.splice(f, 1),
                    k.selector && m.delegateCount--,
                    l.remove && l.remove.call(a, k));
              g &&
                !m.length &&
                ((l.teardown && l.teardown.call(a, o, q.handle) !== !1) ||
                  _.removeEvent(a, n, q.handle),
                delete i[n]);
            } else for (n in i) _.event.remove(a, n + b[j], c, d, !0);
          _.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"));
        }
      },
      trigger: function(b, c, d, e) {
        var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m = [d || Z],
          n = X.call(b, "type") ? b.type : b,
          o = X.call(b, "namespace") ? b.namespace.split(".") : [];
        if (
          ((g = h = d = d || Z),
          3 !== d.nodeType &&
            8 !== d.nodeType &&
            !Ca.test(n + _.event.triggered) &&
            (n.indexOf(".") >= 0 &&
              ((o = n.split(".")), (n = o.shift()), o.sort()),
            (j = n.indexOf(":") < 0 && "on" + n),
            (b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b)),
            (b.isTrigger = e ? 2 : 3),
            (b.namespace = o.join(".")),
            (b.namespace_re = b.namespace
              ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (b.result = void 0),
            b.target || (b.target = d),
            (c = null == c ? [b] : _.makeArray(c, [b])),
            (l = _.event.special[n] || {}),
            e || !l.trigger || l.trigger.apply(d, c) !== !1))
        ) {
          if (!e && !l.noBubble && !_.isWindow(d)) {
            for (
              i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode);
              g;
              g = g.parentNode
            )
              m.push(g), (h = g);
            h === (d.ownerDocument || Z) &&
              m.push(h.defaultView || h.parentWindow || a);
          }
          for (f = 0; (g = m[f++]) && !b.isPropagationStopped(); )
            (b.type = f > 1 ? i : l.bindType || n),
              (k = (ra.get(g, "events") || {})[b.type] && ra.get(g, "handle")),
              k && k.apply(g, c),
              (k = j && g[j]),
              k &&
                k.apply &&
                _.acceptData(g) &&
                ((b.result = k.apply(g, c)),
                b.result === !1 && b.preventDefault());
          return (
            (b.type = n),
            e ||
              b.isDefaultPrevented() ||
              (l._default && l._default.apply(m.pop(), c) !== !1) ||
              !_.acceptData(d) ||
              (j &&
                _.isFunction(d[n]) &&
                !_.isWindow(d) &&
                ((h = d[j]),
                h && (d[j] = null),
                (_.event.triggered = n),
                d[n](),
                (_.event.triggered = void 0),
                h && (d[j] = h))),
            b.result
          );
        }
      },
      dispatch: function(a) {
        a = _.event.fix(a);
        var b,
          c,
          d,
          e,
          f,
          g = [],
          h = R.call(arguments),
          i = (ra.get(this, "events") || {})[a.type] || [],
          j = _.event.special[a.type] || {};
        if (
          ((h[0] = a),
          (a.delegateTarget = this),
          !j.preDispatch || j.preDispatch.call(this, a) !== !1)
        ) {
          for (
            g = _.event.handlers.call(this, a, i), b = 0;
            (e = g[b++]) && !a.isPropagationStopped();

          )
            for (
              a.currentTarget = e.elem, c = 0;
              (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();

            )
              (!a.namespace_re || a.namespace_re.test(f.namespace)) &&
                ((a.handleObj = f),
                (a.data = f.data),
                (d = (
                  (_.event.special[f.origType] || {}).handle || f.handler
                ).apply(e.elem, h)),
                void 0 !== d &&
                  (a.result = d) === !1 &&
                  (a.preventDefault(), a.stopPropagation()));
          return j.postDispatch && j.postDispatch.call(this, a), a.result;
        }
      },
      handlers: function(a, b) {
        var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;
        if (h && i.nodeType && (!a.button || "click" !== a.type))
          for (; i !== this; i = i.parentNode || this)
            if (i.disabled !== !0 || "click" !== a.type) {
              for (d = [], c = 0; h > c; c++)
                (f = b[c]),
                  (e = f.selector + " "),
                  void 0 === d[e] &&
                    (d[e] = f.needsContext
                      ? _(e, this).index(i) >= 0
                      : _.find(e, this, null, [i]).length),
                  d[e] && d.push(f);
              d.length && g.push({ elem: i, handlers: d });
            }
        return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function(a, b) {
          return (
            null == a.which &&
              (a.which = null != b.charCode ? b.charCode : b.keyCode),
            a
          );
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
        filter: function(a, b) {
          var c,
            d,
            e,
            f = b.button;
          return (
            null == a.pageX &&
              null != b.clientX &&
              ((c = a.target.ownerDocument || Z),
              (d = c.documentElement),
              (e = c.body),
              (a.pageX =
                b.clientX +
                ((d && d.scrollLeft) || (e && e.scrollLeft) || 0) -
                ((d && d.clientLeft) || (e && e.clientLeft) || 0)),
              (a.pageY =
                b.clientY +
                ((d && d.scrollTop) || (e && e.scrollTop) || 0) -
                ((d && d.clientTop) || (e && e.clientTop) || 0))),
            a.which ||
              void 0 === f ||
              (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
            a
          );
        }
      },
      fix: function(a) {
        if (a[_.expando]) return a;
        var b,
          c,
          d,
          e = a.type,
          f = a,
          g = this.fixHooks[e];
        for (
          g ||
            (this.fixHooks[e] = g = Ba.test(e)
              ? this.mouseHooks
              : Aa.test(e)
              ? this.keyHooks
              : {}),
            d = g.props ? this.props.concat(g.props) : this.props,
            a = new _.Event(f),
            b = d.length;
          b--;

        )
          (c = d[b]), (a[c] = f[c]);
        return (
          a.target || (a.target = Z),
          3 === a.target.nodeType && (a.target = a.target.parentNode),
          g.filter ? g.filter(a, f) : a
        );
      },
      special: {
        load: { noBubble: !0 },
        focus: {
          trigger: function() {
            return this !== l() && this.focus ? (this.focus(), !1) : void 0;
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function() {
            return this === l() && this.blur ? (this.blur(), !1) : void 0;
          },
          delegateType: "focusout"
        },
        click: {
          trigger: function() {
            return "checkbox" === this.type &&
              this.click &&
              _.nodeName(this, "input")
              ? (this.click(), !1)
              : void 0;
          },
          _default: function(a) {
            return _.nodeName(a.target, "a");
          }
        },
        beforeunload: {
          postDispatch: function(a) {
            void 0 !== a.result &&
              a.originalEvent &&
              (a.originalEvent.returnValue = a.result);
          }
        }
      },
      simulate: function(a, b, c, d) {
        var e = _.extend(new _.Event(), c, {
          type: a,
          isSimulated: !0,
          originalEvent: {}
        });
        d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e),
          e.isDefaultPrevented() && c.preventDefault();
      }
    }),
      (_.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
      }),
      (_.Event = function(a, b) {
        return this instanceof _.Event
          ? (a && a.type
              ? ((this.originalEvent = a),
                (this.type = a.type),
                (this.isDefaultPrevented =
                  a.defaultPrevented ||
                  (void 0 === a.defaultPrevented && a.returnValue === !1)
                    ? j
                    : k))
              : (this.type = a),
            b && _.extend(this, b),
            (this.timeStamp = (a && a.timeStamp) || _.now()),
            void (this[_.expando] = !0))
          : new _.Event(a, b);
      }),
      (_.Event.prototype = {
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        preventDefault: function() {
          var a = this.originalEvent;
          (this.isDefaultPrevented = j),
            a && a.preventDefault && a.preventDefault();
        },
        stopPropagation: function() {
          var a = this.originalEvent;
          (this.isPropagationStopped = j),
            a && a.stopPropagation && a.stopPropagation();
        },
        stopImmediatePropagation: function() {
          var a = this.originalEvent;
          (this.isImmediatePropagationStopped = j),
            a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
            this.stopPropagation();
        }
      }),
      _.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
        },
        function(a, b) {
          _.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
              var c,
                d = this,
                e = a.relatedTarget,
                f = a.handleObj;
              return (
                (!e || (e !== d && !_.contains(d, e))) &&
                  ((a.type = f.origType),
                  (c = f.handler.apply(this, arguments)),
                  (a.type = b)),
                c
              );
            }
          };
        }
      ),
      Y.focusinBubbles ||
        _.each({ focus: "focusin", blur: "focusout" }, function(a, b) {
          var c = function(a) {
            _.event.simulate(b, a.target, _.event.fix(a), !0);
          };
          _.event.special[b] = {
            setup: function() {
              var d = this.ownerDocument || this,
                e = ra.access(d, b);
              e || d.addEventListener(a, c, !0), ra.access(d, b, (e || 0) + 1);
            },
            teardown: function() {
              var d = this.ownerDocument || this,
                e = ra.access(d, b) - 1;
              e
                ? ra.access(d, b, e)
                : (d.removeEventListener(a, c, !0), ra.remove(d, b));
            }
          };
        }),
      _.fn.extend({
        on: function(a, b, c, d, e) {
          var f, g;
          if ("object" == typeof a) {
            "string" != typeof b && ((c = c || b), (b = void 0));
            for (g in a) this.on(g, b, c, a[g], e);
            return this;
          }
          if (
            (null == c && null == d
              ? ((d = b), (c = b = void 0))
              : null == d &&
                ("string" == typeof b
                  ? ((d = c), (c = void 0))
                  : ((d = c), (c = b), (b = void 0))),
            d === !1)
          )
            d = k;
          else if (!d) return this;
          return (
            1 === e &&
              ((f = d),
              (d = function(a) {
                return _().off(a), f.apply(this, arguments);
              }),
              (d.guid = f.guid || (f.guid = _.guid++))),
            this.each(function() {
              _.event.add(this, a, d, c, b);
            })
          );
        },
        one: function(a, b, c, d) {
          return this.on(a, b, c, d, 1);
        },
        off: function(a, b, c) {
          var d, e;
          if (a && a.preventDefault && a.handleObj)
            return (
              (d = a.handleObj),
              _(a.delegateTarget).off(
                d.namespace ? d.origType + "." + d.namespace : d.origType,
                d.selector,
                d.handler
              ),
              this
            );
          if ("object" == typeof a) {
            for (e in a) this.off(e, b, a[e]);
            return this;
          }
          return (
            (b === !1 || "function" == typeof b) && ((c = b), (b = void 0)),
            c === !1 && (c = k),
            this.each(function() {
              _.event.remove(this, a, c, b);
            })
          );
        },
        trigger: function(a, b) {
          return this.each(function() {
            _.event.trigger(a, b, this);
          });
        },
        triggerHandler: function(a, b) {
          var c = this[0];
          return c ? _.event.trigger(a, b, c, !0) : void 0;
        }
      });
    var Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      Fa = /<([\w:]+)/,
      Ga = /<|&#?\w+;/,
      Ha = /<(?:script|style|link)/i,
      Ia = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ja = /^$|\/(?:java|ecma)script/i,
      Ka = /^true\/(.*)/,
      La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      Ma = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
    (Ma.optgroup = Ma.option),
      (Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead),
      (Ma.th = Ma.td),
      _.extend({
        clone: function(a, b, c) {
          var d,
            e,
            f,
            g,
            h = a.cloneNode(!0),
            i = _.contains(a.ownerDocument, a);
          if (
            !(
              Y.noCloneChecked ||
              (1 !== a.nodeType && 11 !== a.nodeType) ||
              _.isXMLDoc(a)
            )
          )
            for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++)
              s(f[d], g[d]);
          if (b)
            if (c)
              for (
                f = f || r(a), g = g || r(h), d = 0, e = f.length;
                e > d;
                d++
              )
                q(f[d], g[d]);
            else q(a, h);
          return (
            (g = r(h, "script")), g.length > 0 && p(g, !i && r(a, "script")), h
          );
        },
        buildFragment: function(a, b, c, d) {
          for (
            var e,
              f,
              g,
              h,
              i,
              j,
              k = b.createDocumentFragment(),
              l = [],
              m = 0,
              n = a.length;
            n > m;
            m++
          )
            if (((e = a[m]), e || 0 === e))
              if ("object" === _.type(e)) _.merge(l, e.nodeType ? [e] : e);
              else if (Ga.test(e)) {
                for (
                  f = f || k.appendChild(b.createElement("div")),
                    g = (Fa.exec(e) || ["", ""])[1].toLowerCase(),
                    h = Ma[g] || Ma._default,
                    f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2],
                    j = h[0];
                  j--;

                )
                  f = f.lastChild;
                _.merge(l, f.childNodes),
                  (f = k.firstChild),
                  (f.textContent = "");
              } else l.push(b.createTextNode(e));
          for (k.textContent = "", m = 0; (e = l[m++]); )
            if (
              (!d || -1 === _.inArray(e, d)) &&
              ((i = _.contains(e.ownerDocument, e)),
              (f = r(k.appendChild(e), "script")),
              i && p(f),
              c)
            )
              for (j = 0; (e = f[j++]); ) Ja.test(e.type || "") && c.push(e);
          return k;
        },
        cleanData: function(a) {
          for (
            var b, c, d, e, f = _.event.special, g = 0;
            void 0 !== (c = a[g]);
            g++
          ) {
            if (
              _.acceptData(c) &&
              ((e = c[ra.expando]), e && (b = ra.cache[e]))
            ) {
              if (b.events)
                for (d in b.events)
                  f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
              ra.cache[e] && delete ra.cache[e];
            }
            delete sa.cache[c[sa.expando]];
          }
        }
      }),
      _.fn.extend({
        text: function(a) {
          return qa(
            this,
            function(a) {
              return void 0 === a
                ? _.text(this)
                : this.empty().each(function() {
                    (1 === this.nodeType ||
                      11 === this.nodeType ||
                      9 === this.nodeType) &&
                      (this.textContent = a);
                  });
            },
            null,
            a,
            arguments.length
          );
        },
        append: function() {
          return this.domManip(arguments, function(a) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var b = m(this, a);
              b.appendChild(a);
            }
          });
        },
        prepend: function() {
          return this.domManip(arguments, function(a) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var b = m(this, a);
              b.insertBefore(a, b.firstChild);
            }
          });
        },
        before: function() {
          return this.domManip(arguments, function(a) {
            this.parentNode && this.parentNode.insertBefore(a, this);
          });
        },
        after: function() {
          return this.domManip(arguments, function(a) {
            this.parentNode &&
              this.parentNode.insertBefore(a, this.nextSibling);
          });
        },
        remove: function(a, b) {
          for (
            var c, d = a ? _.filter(a, this) : this, e = 0;
            null != (c = d[e]);
            e++
          )
            b || 1 !== c.nodeType || _.cleanData(r(c)),
              c.parentNode &&
                (b && _.contains(c.ownerDocument, c) && p(r(c, "script")),
                c.parentNode.removeChild(c));
          return this;
        },
        empty: function() {
          for (var a, b = 0; null != (a = this[b]); b++)
            1 === a.nodeType && (_.cleanData(r(a, !1)), (a.textContent = ""));
          return this;
        },
        clone: function(a, b) {
          return (
            (a = null == a ? !1 : a),
            (b = null == b ? a : b),
            this.map(function() {
              return _.clone(this, a, b);
            })
          );
        },
        html: function(a) {
          return qa(
            this,
            function(a) {
              var b = this[0] || {},
                c = 0,
                d = this.length;
              if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
              if (
                "string" == typeof a &&
                !Ha.test(a) &&
                !Ma[(Fa.exec(a) || ["", ""])[1].toLowerCase()]
              ) {
                a = a.replace(Ea, "<$1></$2>");
                try {
                  for (; d > c; c++)
                    (b = this[c] || {}),
                      1 === b.nodeType &&
                        (_.cleanData(r(b, !1)), (b.innerHTML = a));
                  b = 0;
                } catch (e) {}
              }
              b && this.empty().append(a);
            },
            null,
            a,
            arguments.length
          );
        },
        replaceWith: function() {
          var a = arguments[0];
          return (
            this.domManip(arguments, function(b) {
              (a = this.parentNode),
                _.cleanData(r(this)),
                a && a.replaceChild(b, this);
            }),
            a && (a.length || a.nodeType) ? this : this.remove()
          );
        },
        detach: function(a) {
          return this.remove(a, !0);
        },
        domManip: function(a, b) {
          a = S.apply([], a);
          var c,
            d,
            e,
            f,
            g,
            h,
            i = 0,
            j = this.length,
            k = this,
            l = j - 1,
            m = a[0],
            p = _.isFunction(m);
          if (
            p ||
            (j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m))
          )
            return this.each(function(c) {
              var d = k.eq(c);
              p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b);
            });
          if (
            j &&
            ((c = _.buildFragment(a, this[0].ownerDocument, !1, this)),
            (d = c.firstChild),
            1 === c.childNodes.length && (c = d),
            d)
          ) {
            for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++)
              (g = c),
                i !== l &&
                  ((g = _.clone(g, !0, !0)), f && _.merge(e, r(g, "script"))),
                b.call(this[i], g, i);
            if (f)
              for (
                h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0;
                f > i;
                i++
              )
                (g = e[i]),
                  Ja.test(g.type || "") &&
                    !ra.access(g, "globalEval") &&
                    _.contains(h, g) &&
                    (g.src
                      ? _._evalUrl && _._evalUrl(g.src)
                      : _.globalEval(g.textContent.replace(La, "")));
          }
          return this;
        }
      }),
      _.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
        },
        function(a, b) {
          _.fn[a] = function(a) {
            for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++)
              (c = g === f ? this : this.clone(!0)),
                _(e[g])[b](c),
                T.apply(d, c.get());
            return this.pushStack(d);
          };
        }
      );
    var Na,
      Oa = {},
      Pa = /^margin/,
      Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"),
      Ra = function(b) {
        return b.ownerDocument.defaultView.opener
          ? b.ownerDocument.defaultView.getComputedStyle(b, null)
          : a.getComputedStyle(b, null);
      };
    !(function() {
      function b() {
        (g.style.cssText =
          "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
          (g.innerHTML = ""),
          e.appendChild(f);
        var b = a.getComputedStyle(g, null);
        (c = "1%" !== b.top), (d = "4px" === b.width), e.removeChild(f);
      }
      var c,
        d,
        e = Z.documentElement,
        f = Z.createElement("div"),
        g = Z.createElement("div");
      g.style &&
        ((g.style.backgroundClip = "content-box"),
        (g.cloneNode(!0).style.backgroundClip = ""),
        (Y.clearCloneStyle = "content-box" === g.style.backgroundClip),
        (f.style.cssText =
          "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute"),
        f.appendChild(g),
        a.getComputedStyle &&
          _.extend(Y, {
            pixelPosition: function() {
              return b(), c;
            },
            boxSizingReliable: function() {
              return null == d && b(), d;
            },
            reliableMarginRight: function() {
              var b,
                c = g.appendChild(Z.createElement("div"));
              return (
                (c.style.cssText = g.style.cssText =
                  "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                (c.style.marginRight = c.style.width = "0"),
                (g.style.width = "1px"),
                e.appendChild(f),
                (b = !parseFloat(a.getComputedStyle(c, null).marginRight)),
                e.removeChild(f),
                g.removeChild(c),
                b
              );
            }
          }));
    })(),
      (_.swap = function(a, b, c, d) {
        var e,
          f,
          g = {};
        for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e;
      });
    var Sa = /^(none|table(?!-c[ea]).+)/,
      Ta = new RegExp("^(" + va + ")(.*)$", "i"),
      Ua = new RegExp("^([+-])=(" + va + ")", "i"),
      Va = { position: "absolute", visibility: "hidden", display: "block" },
      Wa = { letterSpacing: "0", fontWeight: "400" },
      Xa = ["Webkit", "O", "Moz", "ms"];
    _.extend({
      cssHooks: {
        opacity: {
          get: function(a, b) {
            if (b) {
              var c = v(a, "opacity");
              return "" === c ? "1" : c;
            }
          }
        }
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: { float: "cssFloat" },
      style: function(a, b, c, d) {
        if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
          var e,
            f,
            g,
            h = _.camelCase(b),
            i = a.style;
          return (
            (b = _.cssProps[h] || (_.cssProps[h] = x(i, h))),
            (g = _.cssHooks[b] || _.cssHooks[h]),
            void 0 === c
              ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
                ? e
                : i[b]
              : ((f = typeof c),
                "string" === f &&
                  (e = Ua.exec(c)) &&
                  ((c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b))),
                  (f = "number")),
                null != c &&
                  c === c &&
                  ("number" !== f || _.cssNumber[h] || (c += "px"),
                  Y.clearCloneStyle ||
                    "" !== c ||
                    0 !== b.indexOf("background") ||
                    (i[b] = "inherit"),
                  (g && "set" in g && void 0 === (c = g.set(a, c, d))) ||
                    (i[b] = c)),
                void 0)
          );
        }
      },
      css: function(a, b, c, d) {
        var e,
          f,
          g,
          h = _.camelCase(b);
        return (
          (b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h))),
          (g = _.cssHooks[b] || _.cssHooks[h]),
          g && "get" in g && (e = g.get(a, !0, c)),
          void 0 === e && (e = v(a, b, d)),
          "normal" === e && b in Wa && (e = Wa[b]),
          "" === c || c
            ? ((f = parseFloat(e)), c === !0 || _.isNumeric(f) ? f || 0 : e)
            : e
        );
      }
    }),
      _.each(["height", "width"], function(a, b) {
        _.cssHooks[b] = {
          get: function(a, c, d) {
            return c
              ? Sa.test(_.css(a, "display")) && 0 === a.offsetWidth
                ? _.swap(a, Va, function() {
                    return A(a, b, d);
                  })
                : A(a, b, d)
              : void 0;
          },
          set: function(a, c, d) {
            var e = d && Ra(a);
            return y(
              a,
              c,
              d
                ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e)
                : 0
            );
          }
        };
      }),
      (_.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
        return b
          ? _.swap(a, { display: "inline-block" }, v, [a, "marginRight"])
          : void 0;
      })),
      _.each({ margin: "", padding: "", border: "Width" }, function(a, b) {
        (_.cssHooks[a + b] = {
          expand: function(c) {
            for (
              var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
              4 > d;
              d++
            )
              e[a + wa[d] + b] = f[d] || f[d - 2] || f[0];
            return e;
          }
        }),
          Pa.test(a) || (_.cssHooks[a + b].set = y);
      }),
      _.fn.extend({
        css: function(a, b) {
          return qa(
            this,
            function(a, b, c) {
              var d,
                e,
                f = {},
                g = 0;
              if (_.isArray(b)) {
                for (d = Ra(a), e = b.length; e > g; g++)
                  f[b[g]] = _.css(a, b[g], !1, d);
                return f;
              }
              return void 0 !== c ? _.style(a, b, c) : _.css(a, b);
            },
            a,
            b,
            arguments.length > 1
          );
        },
        show: function() {
          return B(this, !0);
        },
        hide: function() {
          return B(this);
        },
        toggle: function(a) {
          return "boolean" == typeof a
            ? a
              ? this.show()
              : this.hide()
            : this.each(function() {
                xa(this) ? _(this).show() : _(this).hide();
              });
        }
      }),
      (_.Tween = C),
      (C.prototype = {
        constructor: C,
        init: function(a, b, c, d, e, f) {
          (this.elem = a),
            (this.prop = c),
            (this.easing = e || "swing"),
            (this.options = b),
            (this.start = this.now = this.cur()),
            (this.end = d),
            (this.unit = f || (_.cssNumber[c] ? "" : "px"));
        },
        cur: function() {
          var a = C.propHooks[this.prop];
          return a && a.get ? a.get(this) : C.propHooks._default.get(this);
        },
        run: function(a) {
          var b,
            c = C.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = b = _.easing[this.easing](
                  a,
                  this.options.duration * a,
                  0,
                  1,
                  this.options.duration
                ))
              : (this.pos = b = a),
            (this.now = (this.end - this.start) * b + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : C.propHooks._default.set(this),
            this
          );
        }
      }),
      (C.prototype.init.prototype = C.prototype),
      (C.propHooks = {
        _default: {
          get: function(a) {
            var b;
            return null == a.elem[a.prop] ||
              (a.elem.style && null != a.elem.style[a.prop])
              ? ((b = _.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0)
              : a.elem[a.prop];
          },
          set: function(a) {
            _.fx.step[a.prop]
              ? _.fx.step[a.prop](a)
              : a.elem.style &&
                (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop])
              ? _.style(a.elem, a.prop, a.now + a.unit)
              : (a.elem[a.prop] = a.now);
          }
        }
      }),
      (C.propHooks.scrollTop = C.propHooks.scrollLeft = {
        set: function(a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
      }),
      (_.easing = {
        linear: function(a) {
          return a;
        },
        swing: function(a) {
          return 0.5 - Math.cos(a * Math.PI) / 2;
        }
      }),
      (_.fx = C.prototype.init),
      (_.fx.step = {});
    var Ya,
      Za,
      $a = /^(?:toggle|show|hide)$/,
      _a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"),
      ab = /queueHooks$/,
      bb = [G],
      cb = {
        "*": [
          function(a, b) {
            var c = this.createTween(a, b),
              d = c.cur(),
              e = _a.exec(b),
              f = (e && e[3]) || (_.cssNumber[a] ? "" : "px"),
              g =
                (_.cssNumber[a] || ("px" !== f && +d)) &&
                _a.exec(_.css(c.elem, a)),
              h = 1,
              i = 20;
            if (g && g[3] !== f) {
              (f = f || g[3]), (e = e || []), (g = +d || 1);
              do (h = h || ".5"), (g /= h), _.style(c.elem, a, g + f);
              while (h !== (h = c.cur() / d) && 1 !== h && --i);
            }
            return (
              e &&
                ((g = c.start = +g || +d || 0),
                (c.unit = f),
                (c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2])),
              c
            );
          }
        ]
      };
    (_.Animation = _.extend(I, {
      tweener: function(a, b) {
        _.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.split(" "));
        for (var c, d = 0, e = a.length; e > d; d++)
          (c = a[d]), (cb[c] = cb[c] || []), cb[c].unshift(b);
      },
      prefilter: function(a, b) {
        b ? bb.unshift(a) : bb.push(a);
      }
    })),
      (_.speed = function(a, b, c) {
        var d =
          a && "object" == typeof a
            ? _.extend({}, a)
            : {
                complete: c || (!c && b) || (_.isFunction(a) && a),
                duration: a,
                easing: (c && b) || (b && !_.isFunction(b) && b)
              };
        return (
          (d.duration = _.fx.off
            ? 0
            : "number" == typeof d.duration
            ? d.duration
            : d.duration in _.fx.speeds
            ? _.fx.speeds[d.duration]
            : _.fx.speeds._default),
          (null == d.queue || d.queue === !0) && (d.queue = "fx"),
          (d.old = d.complete),
          (d.complete = function() {
            _.isFunction(d.old) && d.old.call(this),
              d.queue && _.dequeue(this, d.queue);
          }),
          d
        );
      }),
      _.fn.extend({
        fadeTo: function(a, b, c, d) {
          return this.filter(xa)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: b }, a, c, d);
        },
        animate: function(a, b, c, d) {
          var e = _.isEmptyObject(a),
            f = _.speed(b, c, d),
            g = function() {
              var b = I(this, _.extend({}, a), f);
              (e || ra.get(this, "finish")) && b.stop(!0);
            };
          return (
            (g.finish = g),
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
          );
        },
        stop: function(a, b, c) {
          var d = function(a) {
            var b = a.stop;
            delete a.stop, b(c);
          };
          return (
            "string" != typeof a && ((c = b), (b = a), (a = void 0)),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
              var b = !0,
                e = null != a && a + "queueHooks",
                f = _.timers,
                g = ra.get(this);
              if (e) g[e] && g[e].stop && d(g[e]);
              else for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
              for (e = f.length; e--; )
                f[e].elem !== this ||
                  (null != a && f[e].queue !== a) ||
                  (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
              (b || !c) && _.dequeue(this, a);
            })
          );
        },
        finish: function(a) {
          return (
            a !== !1 && (a = a || "fx"),
            this.each(function() {
              var b,
                c = ra.get(this),
                d = c[a + "queue"],
                e = c[a + "queueHooks"],
                f = _.timers,
                g = d ? d.length : 0;
              for (
                c.finish = !0,
                  _.queue(this, a, []),
                  e && e.stop && e.stop.call(this, !0),
                  b = f.length;
                b--;

              )
                f[b].elem === this &&
                  f[b].queue === a &&
                  (f[b].anim.stop(!0), f.splice(b, 1));
              for (b = 0; g > b; b++)
                d[b] && d[b].finish && d[b].finish.call(this);
              delete c.finish;
            })
          );
        }
      }),
      _.each(["toggle", "show", "hide"], function(a, b) {
        var c = _.fn[b];
        _.fn[b] = function(a, d, e) {
          return null == a || "boolean" == typeof a
            ? c.apply(this, arguments)
            : this.animate(E(b, !0), a, d, e);
        };
      }),
      _.each(
        {
          slideDown: E("show"),
          slideUp: E("hide"),
          slideToggle: E("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" }
        },
        function(a, b) {
          _.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
          };
        }
      ),
      (_.timers = []),
      (_.fx.tick = function() {
        var a,
          b = 0,
          c = _.timers;
        for (Ya = _.now(); b < c.length; b++)
          (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
        c.length || _.fx.stop(), (Ya = void 0);
      }),
      (_.fx.timer = function(a) {
        _.timers.push(a), a() ? _.fx.start() : _.timers.pop();
      }),
      (_.fx.interval = 13),
      (_.fx.start = function() {
        Za || (Za = setInterval(_.fx.tick, _.fx.interval));
      }),
      (_.fx.stop = function() {
        clearInterval(Za), (Za = null);
      }),
      (_.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (_.fn.delay = function(a, b) {
        return (
          (a = _.fx ? _.fx.speeds[a] || a : a),
          (b = b || "fx"),
          this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
              clearTimeout(d);
            };
          })
        );
      }),
      (function() {
        var a = Z.createElement("input"),
          b = Z.createElement("select"),
          c = b.appendChild(Z.createElement("option"));
        (a.type = "checkbox"),
          (Y.checkOn = "" !== a.value),
          (Y.optSelected = c.selected),
          (b.disabled = !0),
          (Y.optDisabled = !c.disabled),
          (a = Z.createElement("input")),
          (a.value = "t"),
          (a.type = "radio"),
          (Y.radioValue = "t" === a.value);
      })();
    var db,
      eb,
      fb = _.expr.attrHandle;
    _.fn.extend({
      attr: function(a, b) {
        return qa(this, _.attr, a, b, arguments.length > 1);
      },
      removeAttr: function(a) {
        return this.each(function() {
          _.removeAttr(this, a);
        });
      }
    }),
      _.extend({
        attr: function(a, b, c) {
          var d,
            e,
            f = a.nodeType;
          if (a && 3 !== f && 8 !== f && 2 !== f)
            return typeof a.getAttribute === za
              ? _.prop(a, b, c)
              : ((1 === f && _.isXMLDoc(a)) ||
                  ((b = b.toLowerCase()),
                  (d =
                    _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db))),
                void 0 === c
                  ? d && "get" in d && null !== (e = d.get(a, b))
                    ? e
                    : ((e = _.find.attr(a, b)), null == e ? void 0 : e)
                  : null !== c
                  ? d && "set" in d && void 0 !== (e = d.set(a, c, b))
                    ? e
                    : (a.setAttribute(b, c + ""), c)
                  : void _.removeAttr(a, b));
        },
        removeAttr: function(a, b) {
          var c,
            d,
            e = 0,
            f = b && b.match(na);
          if (f && 1 === a.nodeType)
            for (; (c = f[e++]); )
              (d = _.propFix[c] || c),
                _.expr.match.bool.test(c) && (a[d] = !1),
                a.removeAttribute(c);
        },
        attrHooks: {
          type: {
            set: function(a, b) {
              if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                var c = a.value;
                return a.setAttribute("type", b), c && (a.value = c), b;
              }
            }
          }
        }
      }),
      (eb = {
        set: function(a, b, c) {
          return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c;
        }
      }),
      _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = fb[b] || _.find.attr;
        fb[b] = function(a, b, d) {
          var e, f;
          return (
            d ||
              ((f = fb[b]),
              (fb[b] = e),
              (e = null != c(a, b, d) ? b.toLowerCase() : null),
              (fb[b] = f)),
            e
          );
        };
      });
    var gb = /^(?:input|select|textarea|button)$/i;
    _.fn.extend({
      prop: function(a, b) {
        return qa(this, _.prop, a, b, arguments.length > 1);
      },
      removeProp: function(a) {
        return this.each(function() {
          delete this[_.propFix[a] || a];
        });
      }
    }),
      _.extend({
        propFix: { for: "htmlFor", class: "className" },
        prop: function(a, b, c) {
          var d,
            e,
            f,
            g = a.nodeType;
          if (a && 3 !== g && 8 !== g && 2 !== g)
            return (
              (f = 1 !== g || !_.isXMLDoc(a)),
              f && ((b = _.propFix[b] || b), (e = _.propHooks[b])),
              void 0 !== c
                ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                  ? d
                  : (a[b] = c)
                : e && "get" in e && null !== (d = e.get(a, b))
                ? d
                : a[b]
            );
        },
        propHooks: {
          tabIndex: {
            get: function(a) {
              return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href
                ? a.tabIndex
                : -1;
            }
          }
        }
      }),
      Y.optSelected ||
        (_.propHooks.selected = {
          get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
          }
        }),
      _.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable"
        ],
        function() {
          _.propFix[this.toLowerCase()] = this;
        }
      );
    var hb = /[\t\r\n\f]/g;
    _.fn.extend({
      addClass: function(a) {
        var b,
          c,
          d,
          e,
          f,
          g,
          h = "string" == typeof a && a,
          i = 0,
          j = this.length;
        if (_.isFunction(a))
          return this.each(function(b) {
            _(this).addClass(a.call(this, b, this.className));
          });
        if (h)
          for (b = (a || "").match(na) || []; j > i; i++)
            if (
              ((c = this[i]),
              (d =
                1 === c.nodeType &&
                (c.className
                  ? (" " + c.className + " ").replace(hb, " ")
                  : " ")))
            ) {
              for (f = 0; (e = b[f++]); )
                d.indexOf(" " + e + " ") < 0 && (d += e + " ");
              (g = _.trim(d)), c.className !== g && (c.className = g);
            }
        return this;
      },
      removeClass: function(a) {
        var b,
          c,
          d,
          e,
          f,
          g,
          h = 0 === arguments.length || ("string" == typeof a && a),
          i = 0,
          j = this.length;
        if (_.isFunction(a))
          return this.each(function(b) {
            _(this).removeClass(a.call(this, b, this.className));
          });
        if (h)
          for (b = (a || "").match(na) || []; j > i; i++)
            if (
              ((c = this[i]),
              (d =
                1 === c.nodeType &&
                (c.className
                  ? (" " + c.className + " ").replace(hb, " ")
                  : "")))
            ) {
              for (f = 0; (e = b[f++]); )
                for (; d.indexOf(" " + e + " ") >= 0; )
                  d = d.replace(" " + e + " ", " ");
              (g = a ? _.trim(d) : ""), c.className !== g && (c.className = g);
            }
        return this;
      },
      toggleClass: function(a, b) {
        var c = typeof a;
        return "boolean" == typeof b && "string" === c
          ? b
            ? this.addClass(a)
            : this.removeClass(a)
          : _.isFunction(a)
          ? this.each(function(c) {
              _(this).toggleClass(a.call(this, c, this.className, b), b);
            })
          : this.each(function() {
              if ("string" === c)
                for (
                  var b, d = 0, e = _(this), f = a.match(na) || [];
                  (b = f[d++]);

                )
                  e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
              else
                (c === za || "boolean" === c) &&
                  (this.className &&
                    ra.set(this, "__className__", this.className),
                  (this.className =
                    this.className || a === !1
                      ? ""
                      : ra.get(this, "__className__") || ""));
            });
      },
      hasClass: function(a) {
        for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
          if (
            1 === this[c].nodeType &&
            (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >= 0
          )
            return !0;
        return !1;
      }
    });
    var ib = /\r/g;
    _.fn.extend({
      val: function(a) {
        var b,
          c,
          d,
          e = this[0];
        {
          if (arguments.length)
            return (
              (d = _.isFunction(a)),
              this.each(function(c) {
                var e;
                1 === this.nodeType &&
                  ((e = d ? a.call(this, c, _(this).val()) : a),
                  null == e
                    ? (e = "")
                    : "number" == typeof e
                    ? (e += "")
                    : _.isArray(e) &&
                      (e = _.map(e, function(a) {
                        return null == a ? "" : a + "";
                      })),
                  (b =
                    _.valHooks[this.type] ||
                    _.valHooks[this.nodeName.toLowerCase()]),
                  (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                    (this.value = e));
              })
            );
          if (e)
            return (
              (b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()]),
              b && "get" in b && void 0 !== (c = b.get(e, "value"))
                ? c
                : ((c = e.value),
                  "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c)
            );
        }
      }
    }),
      _.extend({
        valHooks: {
          option: {
            get: function(a) {
              var b = _.find.attr(a, "value");
              return null != b ? b : _.trim(_.text(a));
            }
          },
          select: {
            get: function(a) {
              for (
                var b,
                  c,
                  d = a.options,
                  e = a.selectedIndex,
                  f = "select-one" === a.type || 0 > e,
                  g = f ? null : [],
                  h = f ? e + 1 : d.length,
                  i = 0 > e ? h : f ? e : 0;
                h > i;
                i++
              )
                if (
                  ((c = d[i]),
                  !(
                    (!c.selected && i !== e) ||
                    (Y.optDisabled
                      ? c.disabled
                      : null !== c.getAttribute("disabled")) ||
                    (c.parentNode.disabled &&
                      _.nodeName(c.parentNode, "optgroup"))
                  ))
                ) {
                  if (((b = _(c).val()), f)) return b;
                  g.push(b);
                }
              return g;
            },
            set: function(a, b) {
              for (
                var c, d, e = a.options, f = _.makeArray(b), g = e.length;
                g--;

              )
                (d = e[g]),
                  (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
              return c || (a.selectedIndex = -1), f;
            }
          }
        }
      }),
      _.each(["radio", "checkbox"], function() {
        (_.valHooks[this] = {
          set: function(a, b) {
            return _.isArray(b)
              ? (a.checked = _.inArray(_(a).val(), b) >= 0)
              : void 0;
          }
        }),
          Y.checkOn ||
            (_.valHooks[this].get = function(a) {
              return null === a.getAttribute("value") ? "on" : a.value;
            });
      }),
      _.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
          " "
        ),
        function(a, b) {
          _.fn[b] = function(a, c) {
            return arguments.length > 0
              ? this.on(b, null, a, c)
              : this.trigger(b);
          };
        }
      ),
      _.fn.extend({
        hover: function(a, b) {
          return this.mouseenter(a).mouseleave(b || a);
        },
        bind: function(a, b, c) {
          return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
          return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
          return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
          return 1 === arguments.length
            ? this.off(a, "**")
            : this.off(b, a || "**", c);
        }
      });
    var jb = _.now(),
      kb = /\?/;
    (_.parseJSON = function(a) {
      return JSON.parse(a + "");
    }),
      (_.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
          (c = new DOMParser()), (b = c.parseFromString(a, "text/xml"));
        } catch (d) {
          b = void 0;
        }
        return (
          (!b || b.getElementsByTagName("parsererror").length) &&
            _.error("Invalid XML: " + a),
          b
        );
      });
    var lb = /#.*$/,
      mb = /([?&])_=[^&]*/,
      nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      pb = /^(?:GET|HEAD)$/,
      qb = /^\/\//,
      rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      sb = {},
      tb = {},
      ub = "*/".concat("*"),
      vb = a.location.href,
      wb = rb.exec(vb.toLowerCase()) || [];
    _.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: vb,
        type: "GET",
        isLocal: ob.test(wb[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": ub,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": _.parseJSON,
          "text xml": _.parseXML
        },
        flatOptions: { url: !0, context: !0 }
      },
      ajaxSetup: function(a, b) {
        return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a);
      },
      ajaxPrefilter: J(sb),
      ajaxTransport: J(tb),
      ajax: function(a, b) {
        function c(a, b, c, g) {
          var i,
            k,
            r,
            s,
            u,
            w = b;
          2 !== t &&
            ((t = 2),
            h && clearTimeout(h),
            (d = void 0),
            (f = g || ""),
            (v.readyState = a > 0 ? 4 : 0),
            (i = (a >= 200 && 300 > a) || 304 === a),
            c && (s = M(l, v, c)),
            (s = N(l, s, v, i)),
            i
              ? (l.ifModified &&
                  ((u = v.getResponseHeader("Last-Modified")),
                  u && (_.lastModified[e] = u),
                  (u = v.getResponseHeader("etag")),
                  u && (_.etag[e] = u)),
                204 === a || "HEAD" === l.type
                  ? (w = "nocontent")
                  : 304 === a
                  ? (w = "notmodified")
                  : ((w = s.state), (k = s.data), (r = s.error), (i = !r)))
              : ((r = w), (a || !w) && ((w = "error"), 0 > a && (a = 0))),
            (v.status = a),
            (v.statusText = (b || w) + ""),
            i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]),
            v.statusCode(q),
            (q = void 0),
            j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]),
            p.fireWith(m, [v, w]),
            j &&
              (n.trigger("ajaxComplete", [v, l]),
              --_.active || _.event.trigger("ajaxStop")));
        }
        "object" == typeof a && ((b = a), (a = void 0)), (b = b || {});
        var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = _.ajaxSetup({}, b),
          m = l.context || l,
          n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event,
          o = _.Deferred(),
          p = _.Callbacks("once memory"),
          q = l.statusCode || {},
          r = {},
          s = {},
          t = 0,
          u = "canceled",
          v = {
            readyState: 0,
            getResponseHeader: function(a) {
              var b;
              if (2 === t) {
                if (!g)
                  for (g = {}; (b = nb.exec(f)); ) g[b[1].toLowerCase()] = b[2];
                b = g[a.toLowerCase()];
              }
              return null == b ? null : b;
            },
            getAllResponseHeaders: function() {
              return 2 === t ? f : null;
            },
            setRequestHeader: function(a, b) {
              var c = a.toLowerCase();
              return t || ((a = s[c] = s[c] || a), (r[a] = b)), this;
            },
            overrideMimeType: function(a) {
              return t || (l.mimeType = a), this;
            },
            statusCode: function(a) {
              var b;
              if (a)
                if (2 > t) for (b in a) q[b] = [q[b], a[b]];
                else v.always(a[v.status]);
              return this;
            },
            abort: function(a) {
              var b = a || u;
              return d && d.abort(b), c(0, b), this;
            }
          };
        if (
          ((o.promise(v).complete = p.add),
          (v.success = v.done),
          (v.error = v.fail),
          (l.url = ((a || l.url || vb) + "")
            .replace(lb, "")
            .replace(qb, wb[1] + "//")),
          (l.type = b.method || b.type || l.method || l.type),
          (l.dataTypes = _.trim(l.dataType || "*")
            .toLowerCase()
            .match(na) || [""]),
          null == l.crossDomain &&
            ((i = rb.exec(l.url.toLowerCase())),
            (l.crossDomain = !(
              !i ||
              (i[1] === wb[1] &&
                i[2] === wb[2] &&
                (i[3] || ("http:" === i[1] ? "80" : "443")) ===
                  (wb[3] || ("http:" === wb[1] ? "80" : "443")))
            ))),
          l.data &&
            l.processData &&
            "string" != typeof l.data &&
            (l.data = _.param(l.data, l.traditional)),
          K(sb, l, b, v),
          2 === t)
        )
          return v;
        (j = _.event && l.global),
          j && 0 === _.active++ && _.event.trigger("ajaxStart"),
          (l.type = l.type.toUpperCase()),
          (l.hasContent = !pb.test(l.type)),
          (e = l.url),
          l.hasContent ||
            (l.data &&
              ((e = l.url += (kb.test(e) ? "&" : "?") + l.data), delete l.data),
            l.cache === !1 &&
              (l.url = mb.test(e)
                ? e.replace(mb, "$1_=" + jb++)
                : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)),
          l.ifModified &&
            (_.lastModified[e] &&
              v.setRequestHeader("If-Modified-Since", _.lastModified[e]),
            _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])),
          ((l.data && l.hasContent && l.contentType !== !1) || b.contentType) &&
            v.setRequestHeader("Content-Type", l.contentType),
          v.setRequestHeader(
            "Accept",
            l.dataTypes[0] && l.accepts[l.dataTypes[0]]
              ? l.accepts[l.dataTypes[0]] +
                  ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "")
              : l.accepts["*"]
          );
        for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
        if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t))
          return v.abort();
        u = "abort";
        for (k in { success: 1, error: 1, complete: 1 }) v[k](l[k]);
        if ((d = K(tb, l, b, v))) {
          (v.readyState = 1),
            j && n.trigger("ajaxSend", [v, l]),
            l.async &&
              l.timeout > 0 &&
              (h = setTimeout(function() {
                v.abort("timeout");
              }, l.timeout));
          try {
            (t = 1), d.send(r, c);
          } catch (w) {
            if (!(2 > t)) throw w;
            c(-1, w);
          }
        } else c(-1, "No Transport");
        return v;
      },
      getJSON: function(a, b, c) {
        return _.get(a, b, c, "json");
      },
      getScript: function(a, b) {
        return _.get(a, void 0, b, "script");
      }
    }),
      _.each(["get", "post"], function(a, b) {
        _[b] = function(a, c, d, e) {
          return (
            _.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
            _.ajax({ url: a, type: b, dataType: e, data: c, success: d })
          );
        };
      }),
      (_._evalUrl = function(a) {
        return _.ajax({
          url: a,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          throws: !0
        });
      }),
      _.fn.extend({
        wrapAll: function(a) {
          var b;
          return _.isFunction(a)
            ? this.each(function(b) {
                _(this).wrapAll(a.call(this, b));
              })
            : (this[0] &&
                ((b = _(a, this[0].ownerDocument)
                  .eq(0)
                  .clone(!0)),
                this[0].parentNode && b.insertBefore(this[0]),
                b
                  .map(function() {
                    for (var a = this; a.firstElementChild; )
                      a = a.firstElementChild;
                    return a;
                  })
                  .append(this)),
              this);
        },
        wrapInner: function(a) {
          return _.isFunction(a)
            ? this.each(function(b) {
                _(this).wrapInner(a.call(this, b));
              })
            : this.each(function() {
                var b = _(this),
                  c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
              });
        },
        wrap: function(a) {
          var b = _.isFunction(a);
          return this.each(function(c) {
            _(this).wrapAll(b ? a.call(this, c) : a);
          });
        },
        unwrap: function() {
          return this.parent()
            .each(function() {
              _.nodeName(this, "body") || _(this).replaceWith(this.childNodes);
            })
            .end();
        }
      }),
      (_.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0;
      }),
      (_.expr.filters.visible = function(a) {
        return !_.expr.filters.hidden(a);
      });
    var xb = /%20/g,
      yb = /\[\]$/,
      zb = /\r?\n/g,
      Ab = /^(?:submit|button|image|reset|file)$/i,
      Bb = /^(?:input|select|textarea|keygen)/i;
    (_.param = function(a, b) {
      var c,
        d = [],
        e = function(a, b) {
          (b = _.isFunction(b) ? b() : null == b ? "" : b),
            (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
        };
      if (
        (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional),
        _.isArray(a) || (a.jquery && !_.isPlainObject(a)))
      )
        _.each(a, function() {
          e(this.name, this.value);
        });
      else for (c in a) O(c, a[c], b, e);
      return d.join("&").replace(xb, "+");
    }),
      _.fn.extend({
        serialize: function() {
          return _.param(this.serializeArray());
        },
        serializeArray: function() {
          return this.map(function() {
            var a = _.prop(this, "elements");
            return a ? _.makeArray(a) : this;
          })
            .filter(function() {
              var a = this.type;
              return (
                this.name &&
                !_(this).is(":disabled") &&
                Bb.test(this.nodeName) &&
                !Ab.test(a) &&
                (this.checked || !ya.test(a))
              );
            })
            .map(function(a, b) {
              var c = _(this).val();
              return null == c
                ? null
                : _.isArray(c)
                ? _.map(c, function(a) {
                    return { name: b.name, value: a.replace(zb, "\r\n") };
                  })
                : { name: b.name, value: c.replace(zb, "\r\n") };
            })
            .get();
        }
      }),
      (_.ajaxSettings.xhr = function() {
        try {
          return new XMLHttpRequest();
        } catch (a) {}
      });
    var Cb = 0,
      Db = {},
      Eb = { 0: 200, 1223: 204 },
      Fb = _.ajaxSettings.xhr();
    a.attachEvent &&
      a.attachEvent("onunload", function() {
        for (var a in Db) Db[a]();
      }),
      (Y.cors = !!Fb && "withCredentials" in Fb),
      (Y.ajax = Fb = !!Fb),
      _.ajaxTransport(function(a) {
        var b;
        return Y.cors || (Fb && !a.crossDomain)
          ? {
              send: function(c, d) {
                var e,
                  f = a.xhr(),
                  g = ++Cb;
                if (
                  (f.open(a.type, a.url, a.async, a.username, a.password),
                  a.xhrFields)
                )
                  for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType &&
                  f.overrideMimeType &&
                  f.overrideMimeType(a.mimeType),
                  a.crossDomain ||
                    c["X-Requested-With"] ||
                    (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                (b = function(a) {
                  return function() {
                    b &&
                      (delete Db[g],
                      (b = f.onload = f.onerror = null),
                      "abort" === a
                        ? f.abort()
                        : "error" === a
                        ? d(f.status, f.statusText)
                        : d(
                            Eb[f.status] || f.status,
                            f.statusText,
                            "string" == typeof f.responseText
                              ? { text: f.responseText }
                              : void 0,
                            f.getAllResponseHeaders()
                          ));
                  };
                }),
                  (f.onload = b()),
                  (f.onerror = b("error")),
                  (b = Db[g] = b("abort"));
                try {
                  f.send((a.hasContent && a.data) || null);
                } catch (h) {
                  if (b) throw h;
                }
              },
              abort: function() {
                b && b();
              }
            }
          : void 0;
      }),
      _.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: { script: /(?:java|ecma)script/ },
        converters: {
          "text script": function(a) {
            return _.globalEval(a), a;
          }
        }
      }),
      _.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
      }),
      _.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
          var b, c;
          return {
            send: function(d, e) {
              (b = _("<script>")
                .prop({ async: !0, charset: a.scriptCharset, src: a.url })
                .on(
                  "load error",
                  (c = function(a) {
                    b.remove(),
                      (c = null),
                      a && e("error" === a.type ? 404 : 200, a.type);
                  })
                )),
                Z.head.appendChild(b[0]);
            },
            abort: function() {
              c && c();
            }
          };
        }
      });
    var Gb = [],
      Hb = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var a = Gb.pop() || _.expando + "_" + jb++;
        return (this[a] = !0), a;
      }
    }),
      _.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e,
          f,
          g,
          h =
            b.jsonp !== !1 &&
            (Hb.test(b.url)
              ? "url"
              : "string" == typeof b.data &&
                !(b.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
                Hb.test(b.data) &&
                "data");
        return h || "jsonp" === b.dataTypes[0]
          ? ((e = b.jsonpCallback = _.isFunction(b.jsonpCallback)
              ? b.jsonpCallback()
              : b.jsonpCallback),
            h
              ? (b[h] = b[h].replace(Hb, "$1" + e))
              : b.jsonp !== !1 &&
                (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
            (b.converters["script json"] = function() {
              return g || _.error(e + " was not called"), g[0];
            }),
            (b.dataTypes[0] = "json"),
            (f = a[e]),
            (a[e] = function() {
              g = arguments;
            }),
            d.always(function() {
              (a[e] = f),
                b[e] && ((b.jsonpCallback = c.jsonpCallback), Gb.push(e)),
                g && _.isFunction(f) && f(g[0]),
                (g = f = void 0);
            }),
            "script")
          : void 0;
      }),
      (_.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && ((c = b), (b = !1)), (b = b || Z);
        var d = ga.exec(a),
          e = !c && [];
        return d
          ? [b.createElement(d[1])]
          : ((d = _.buildFragment([a], b, e)),
            e && e.length && _(e).remove(),
            _.merge([], d.childNodes));
      });
    var Ib = _.fn.load;
    (_.fn.load = function(a, b, c) {
      if ("string" != typeof a && Ib) return Ib.apply(this, arguments);
      var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");
      return (
        h >= 0 && ((d = _.trim(a.slice(h))), (a = a.slice(0, h))),
        _.isFunction(b)
          ? ((c = b), (b = void 0))
          : b && "object" == typeof b && (e = "POST"),
        g.length > 0 &&
          _.ajax({ url: a, type: e, dataType: "html", data: b })
            .done(function(a) {
              (f = arguments),
                g.html(
                  d
                    ? _("<div>")
                        .append(_.parseHTML(a))
                        .find(d)
                    : a
                );
            })
            .complete(
              c &&
                function(a, b) {
                  g.each(c, f || [a.responseText, b, a]);
                }
            ),
        this
      );
    }),
      _.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend"
        ],
        function(a, b) {
          _.fn[b] = function(a) {
            return this.on(b, a);
          };
        }
      ),
      (_.expr.filters.animated = function(a) {
        return _.grep(_.timers, function(b) {
          return a === b.elem;
        }).length;
      });
    var Jb = a.document.documentElement;
    (_.offset = {
      setOffset: function(a, b, c) {
        var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = _.css(a, "position"),
          l = _(a),
          m = {};
        "static" === k && (a.style.position = "relative"),
          (h = l.offset()),
          (f = _.css(a, "top")),
          (i = _.css(a, "left")),
          (j =
            ("absolute" === k || "fixed" === k) &&
            (f + i).indexOf("auto") > -1),
          j
            ? ((d = l.position()), (g = d.top), (e = d.left))
            : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
          _.isFunction(b) && (b = b.call(a, c, h)),
          null != b.top && (m.top = b.top - h.top + g),
          null != b.left && (m.left = b.left - h.left + e),
          "using" in b ? b.using.call(a, m) : l.css(m);
      }
    }),
      _.fn.extend({
        offset: function(a) {
          if (arguments.length)
            return void 0 === a
              ? this
              : this.each(function(b) {
                  _.offset.setOffset(this, a, b);
                });
          var b,
            c,
            d = this[0],
            e = { top: 0, left: 0 },
            f = d && d.ownerDocument;
          if (f)
            return (
              (b = f.documentElement),
              _.contains(b, d)
                ? (typeof d.getBoundingClientRect !== za &&
                    (e = d.getBoundingClientRect()),
                  (c = P(f)),
                  {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                  })
                : e
            );
        },
        position: function() {
          if (this[0]) {
            var a,
              b,
              c = this[0],
              d = { top: 0, left: 0 };
            return (
              "fixed" === _.css(c, "position")
                ? (b = c.getBoundingClientRect())
                : ((a = this.offsetParent()),
                  (b = this.offset()),
                  _.nodeName(a[0], "html") || (d = a.offset()),
                  (d.top += _.css(a[0], "borderTopWidth", !0)),
                  (d.left += _.css(a[0], "borderLeftWidth", !0))),
              {
                top: b.top - d.top - _.css(c, "marginTop", !0),
                left: b.left - d.left - _.css(c, "marginLeft", !0)
              }
            );
          }
        },
        offsetParent: function() {
          return this.map(function() {
            for (
              var a = this.offsetParent || Jb;
              a && !_.nodeName(a, "html") && "static" === _.css(a, "position");

            )
              a = a.offsetParent;
            return a || Jb;
          });
        }
      }),
      _.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(
        b,
        c
      ) {
        var d = "pageYOffset" === c;
        _.fn[b] = function(e) {
          return qa(
            this,
            function(b, e, f) {
              var g = P(b);
              return void 0 === f
                ? g
                  ? g[c]
                  : b[e]
                : void (g
                    ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset)
                    : (b[e] = f));
            },
            b,
            e,
            arguments.length,
            null
          );
        };
      }),
      _.each(["top", "left"], function(a, b) {
        _.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
          return c
            ? ((c = v(a, b)), Qa.test(c) ? _(a).position()[b] + "px" : c)
            : void 0;
        });
      }),
      _.each({ Height: "height", Width: "width" }, function(a, b) {
        _.each({ padding: "inner" + a, content: b, "": "outer" + a }, function(
          c,
          d
        ) {
          _.fn[d] = function(d, e) {
            var f = arguments.length && (c || "boolean" != typeof d),
              g = c || (d === !0 || e === !0 ? "margin" : "border");
            return qa(
              this,
              function(b, c, d) {
                var e;
                return _.isWindow(b)
                  ? b.document.documentElement["client" + a]
                  : 9 === b.nodeType
                  ? ((e = b.documentElement),
                    Math.max(
                      b.body["scroll" + a],
                      e["scroll" + a],
                      b.body["offset" + a],
                      e["offset" + a],
                      e["client" + a]
                    ))
                  : void 0 === d
                  ? _.css(b, c, g)
                  : _.style(b, c, d, g);
              },
              b,
              f ? d : void 0,
              f,
              null
            );
          };
        });
      }),
      (_.fn.size = function() {
        return this.length;
      }),
      (_.fn.andSelf = _.fn.addBack),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function() {
          return _;
        });
    var Kb = a.jQuery,
      Lb = a.$;
    return (
      (_.noConflict = function(b) {
        return (
          a.$ === _ && (a.$ = Lb), b && a.jQuery === _ && (a.jQuery = Kb), _
        );
      }),
      typeof b === za && (a.jQuery = a.$ = _),
      _
    );
  }),
  !(function(a, b) {
    "function" == typeof define && define.amd
      ? define(b)
      : "object" == typeof exports
      ? (module.exports = b(require, exports, module))
      : (a.Tether = b());
  })(this, function(a, b, c) {
    "use strict";
    function d(a, b) {
      if (!(a instanceof b))
        throw new TypeError("Cannot call a class as a function");
    }
    function e(a) {
      var b = a.getBoundingClientRect(),
        c = {};
      for (var d in b) c[d] = b[d];
      if (a.ownerDocument !== document) {
        var f = a.ownerDocument.defaultView.frameElement;
        if (f) {
          var g = e(f);
          (c.top += g.top),
            (c.bottom += g.top),
            (c.left += g.left),
            (c.right += g.left);
        }
      }
      return c;
    }
    function f(a) {
      var b = getComputedStyle(a) || {},
        c = b.position,
        d = [];
      if ("fixed" === c) return [a];
      for (var e = a; (e = e.parentNode) && e && 1 === e.nodeType; ) {
        var f = void 0;
        try {
          f = getComputedStyle(e);
        } catch (g) {}
        if ("undefined" == typeof f || null === f) return d.push(e), d;
        var h = f,
          i = h.overflow,
          j = h.overflowX,
          k = h.overflowY;
        /(auto|scroll)/.test(i + k + j) &&
          ("absolute" !== c ||
            ["relative", "absolute", "fixed"].indexOf(f.position) >= 0) &&
          d.push(e);
      }
      return (
        d.push(a.ownerDocument.body),
        a.ownerDocument !== document && d.push(a.ownerDocument.defaultView),
        d
      );
    }
    function g() {
      z && document.body.removeChild(z), (z = null);
    }
    function h(a) {
      var b = void 0;
      a === document
        ? ((b = document), (a = document.documentElement))
        : (b = a.ownerDocument);
      var c = b.documentElement,
        d = e(a),
        f = C();
      return (
        (d.top -= f.top),
        (d.left -= f.left),
        "undefined" == typeof d.width &&
          (d.width = document.body.scrollWidth - d.left - d.right),
        "undefined" == typeof d.height &&
          (d.height = document.body.scrollHeight - d.top - d.bottom),
        (d.top = d.top - c.clientTop),
        (d.left = d.left - c.clientLeft),
        (d.right = b.body.clientWidth - d.width - d.left),
        (d.bottom = b.body.clientHeight - d.height - d.top),
        d
      );
    }
    function i(a) {
      return a.offsetParent || document.documentElement;
    }
    function j() {
      if (D) return D;
      var a = document.createElement("div");
      (a.style.width = "100%"), (a.style.height = "200px");
      var b = document.createElement("div");
      k(b.style, {
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        visibility: "hidden",
        width: "200px",
        height: "150px",
        overflow: "hidden"
      }),
        b.appendChild(a),
        document.body.appendChild(b);
      var c = a.offsetWidth;
      b.style.overflow = "scroll";
      var d = a.offsetWidth;
      c === d && (d = b.clientWidth), document.body.removeChild(b);
      var e = c - d;
      return (D = { width: e, height: e });
    }
    function k() {
      var a =
          arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
        b = [];
      return (
        Array.prototype.push.apply(b, arguments),
        b.slice(1).forEach(function(b) {
          if (b)
            for (var c in b) ({}.hasOwnProperty.call(b, c) && (a[c] = b[c]));
        }),
        a
      );
    }
    function l(a, b) {
      if ("undefined" != typeof a.classList)
        b.split(" ").forEach(function(b) {
          b.trim() && a.classList.remove(b);
        });
      else {
        var c = new RegExp("(^| )" + b.split(" ").join("|") + "( |$)", "gi"),
          d = o(a).replace(c, " ");
        p(a, d);
      }
    }
    function m(a, b) {
      if ("undefined" != typeof a.classList)
        b.split(" ").forEach(function(b) {
          b.trim() && a.classList.add(b);
        });
      else {
        l(a, b);
        var c = o(a) + (" " + b);
        p(a, c);
      }
    }
    function n(a, b) {
      if ("undefined" != typeof a.classList) return a.classList.contains(b);
      var c = o(a);
      return new RegExp("(^| )" + b + "( |$)", "gi").test(c);
    }
    function o(a) {
      return a.className instanceof
        a.ownerDocument.defaultView.SVGAnimatedString
        ? a.className.baseVal
        : a.className;
    }
    function p(a, b) {
      a.setAttribute("class", b);
    }
    function q(a, b, c) {
      c.forEach(function(c) {
        -1 === b.indexOf(c) && n(a, c) && l(a, c);
      }),
        b.forEach(function(b) {
          n(a, b) || m(a, b);
        });
    }
    function d(a, b) {
      if (!(a instanceof b))
        throw new TypeError("Cannot call a class as a function");
    }
    function r(a, b) {
      if ("function" != typeof b && null !== b)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof b
        );
      (a.prototype = Object.create(b && b.prototype, {
        constructor: {
          value: a,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        b &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(a, b)
            : (a.__proto__ = b));
    }
    function s(a, b) {
      var c =
        arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
      return a + c >= b && b >= a - c;
    }
    function t() {
      return "undefined" != typeof performance &&
        "undefined" != typeof performance.now
        ? performance.now()
        : +new Date();
    }
    function u() {
      for (
        var a = { top: 0, left: 0 }, b = arguments.length, c = Array(b), d = 0;
        b > d;
        d++
      )
        c[d] = arguments[d];
      return (
        c.forEach(function(b) {
          var c = b.top,
            d = b.left;
          "string" == typeof c && (c = parseFloat(c, 10)),
            "string" == typeof d && (d = parseFloat(d, 10)),
            (a.top += c),
            (a.left += d);
        }),
        a
      );
    }
    function v(a, b) {
      return (
        "string" == typeof a.left &&
          -1 !== a.left.indexOf("%") &&
          (a.left = (parseFloat(a.left, 10) / 100) * b.width),
        "string" == typeof a.top &&
          -1 !== a.top.indexOf("%") &&
          (a.top = (parseFloat(a.top, 10) / 100) * b.height),
        a
      );
    }
    function w(a, b) {
      return (
        "scrollParent" === b
          ? (b = a.scrollParents[0])
          : "window" === b &&
            (b = [
              pageXOffset,
              pageYOffset,
              innerWidth + pageXOffset,
              innerHeight + pageYOffset
            ]),
        b === document && (b = b.documentElement),
        "undefined" != typeof b.nodeType &&
          !(function() {
            var a = b,
              c = h(b),
              d = c,
              e = getComputedStyle(b);
            if (
              ((b = [d.left, d.top, c.width + d.left, c.height + d.top]),
              a.ownerDocument !== document)
            ) {
              var f = a.ownerDocument.defaultView;
              (b[0] += f.pageXOffset),
                (b[1] += f.pageYOffset),
                (b[2] += f.pageXOffset),
                (b[3] += f.pageYOffset);
            }
            X.forEach(function(a, c) {
              (a = a[0].toUpperCase() + a.substr(1)),
                "Top" === a || "Left" === a
                  ? (b[c] += parseFloat(e["border" + a + "Width"]))
                  : (b[c] -= parseFloat(e["border" + a + "Width"]));
            });
          })(),
        b
      );
    }
    var x = (function() {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            (d.enumerable = d.enumerable || !1),
              (d.configurable = !0),
              "value" in d && (d.writable = !0),
              Object.defineProperty(a, d.key, d);
          }
        }
        return function(b, c, d) {
          return c && a(b.prototype, c), d && a(b, d), b;
        };
      })(),
      y = void 0;
    "undefined" == typeof y && (y = { modules: [] });
    var z = null,
      A = (function() {
        var a = 0;
        return function() {
          return ++a;
        };
      })(),
      B = {},
      C = function() {
        var a = z;
        a ||
          ((a = document.createElement("div")),
          a.setAttribute("data-tether-id", A()),
          k(a.style, { top: 0, left: 0, position: "absolute" }),
          document.body.appendChild(a),
          (z = a));
        var b = a.getAttribute("data-tether-id");
        return (
          "undefined" == typeof B[b] &&
            ((B[b] = e(a)),
            F(function() {
              delete B[b];
            })),
          B[b]
        );
      },
      D = null,
      E = [],
      F = function(a) {
        E.push(a);
      },
      G = function() {
        for (var a = void 0; (a = E.pop()); ) a();
      },
      H = (function() {
        function a() {
          d(this, a);
        }
        return (
          x(a, [
            {
              key: "on",
              value: function(a, b, c) {
                var d =
                  arguments.length <= 3 || void 0 === arguments[3]
                    ? !1
                    : arguments[3];
                "undefined" == typeof this.bindings && (this.bindings = {}),
                  "undefined" == typeof this.bindings[a] &&
                    (this.bindings[a] = []),
                  this.bindings[a].push({ handler: b, ctx: c, once: d });
              }
            },
            {
              key: "once",
              value: function(a, b, c) {
                this.on(a, b, c, !0);
              }
            },
            {
              key: "off",
              value: function(a, b) {
                if (
                  "undefined" != typeof this.bindings &&
                  "undefined" != typeof this.bindings[a]
                )
                  if ("undefined" == typeof b) delete this.bindings[a];
                  else
                    for (var c = 0; c < this.bindings[a].length; )
                      this.bindings[a][c].handler === b
                        ? this.bindings[a].splice(c, 1)
                        : ++c;
              }
            },
            {
              key: "trigger",
              value: function(a) {
                if ("undefined" != typeof this.bindings && this.bindings[a]) {
                  for (
                    var b = 0,
                      c = arguments.length,
                      d = Array(c > 1 ? c - 1 : 0),
                      e = 1;
                    c > e;
                    e++
                  )
                    d[e - 1] = arguments[e];
                  for (; b < this.bindings[a].length; ) {
                    var f = this.bindings[a][b],
                      g = f.handler,
                      h = f.ctx,
                      i = f.once,
                      j = h;
                    "undefined" == typeof j && (j = this),
                      g.apply(j, d),
                      i ? this.bindings[a].splice(b, 1) : ++b;
                  }
                }
              }
            }
          ]),
          a
        );
      })();
    y.Utils = {
      getActualBoundingClientRect: e,
      getScrollParents: f,
      getBounds: h,
      getOffsetParent: i,
      extend: k,
      addClass: m,
      removeClass: l,
      hasClass: n,
      updateClasses: q,
      defer: F,
      flush: G,
      uniqueId: A,
      Evented: H,
      getScrollBarSize: j,
      removeUtilElements: g
    };
    var I = (function() {
        function a(a, b) {
          var c = [],
            d = !0,
            e = !1,
            f = void 0;
          try {
            for (
              var g, h = a[Symbol.iterator]();
              !(d = (g = h.next()).done) &&
              (c.push(g.value), !b || c.length !== b);
              d = !0
            );
          } catch (i) {
            (e = !0), (f = i);
          } finally {
            try {
              !d && h["return"] && h["return"]();
            } finally {
              if (e) throw f;
            }
          }
          return c;
        }
        return function(b, c) {
          if (Array.isArray(b)) return b;
          if (Symbol.iterator in Object(b)) return a(b, c);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        };
      })(),
      x = (function() {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            (d.enumerable = d.enumerable || !1),
              (d.configurable = !0),
              "value" in d && (d.writable = !0),
              Object.defineProperty(a, d.key, d);
          }
        }
        return function(b, c, d) {
          return c && a(b.prototype, c), d && a(b, d), b;
        };
      })(),
      J = function(a, b, c) {
        for (var d = !0; d; ) {
          var e = a,
            f = b,
            g = c;
          (d = !1), null === e && (e = Function.prototype);
          var h = Object.getOwnPropertyDescriptor(e, f);
          if (void 0 !== h) {
            if ("value" in h) return h.value;
            var i = h.get;
            if (void 0 === i) return;
            return i.call(g);
          }
          var j = Object.getPrototypeOf(e);
          if (null === j) return;
          (a = j), (b = f), (c = g), (d = !0), (h = j = void 0);
        }
      };
    if ("undefined" == typeof y)
      throw new Error("You must include the utils.js file before tether.js");
    var K = y.Utils,
      f = K.getScrollParents,
      h = K.getBounds,
      i = K.getOffsetParent,
      k = K.extend,
      m = K.addClass,
      l = K.removeClass,
      q = K.updateClasses,
      F = K.defer,
      G = K.flush,
      j = K.getScrollBarSize,
      g = K.removeUtilElements,
      L = (function() {
        if ("undefined" == typeof document) return "";
        for (
          var a = document.createElement("div"),
            b = [
              "transform",
              "WebkitTransform",
              "OTransform",
              "MozTransform",
              "msTransform"
            ],
            c = 0;
          c < b.length;
          ++c
        ) {
          var d = b[c];
          if (void 0 !== a.style[d]) return d;
        }
      })(),
      M = [],
      N = function() {
        M.forEach(function(a) {
          a.position(!1);
        }),
          G();
      };
    !(function() {
      var a = null,
        b = null,
        c = null,
        d = function e() {
          return "undefined" != typeof b && b > 16
            ? ((b = Math.min(b - 16, 250)), void (c = setTimeout(e, 250)))
            : void (
                ("undefined" != typeof a && t() - a < 10) ||
                (null != c && (clearTimeout(c), (c = null)),
                (a = t()),
                N(),
                (b = t() - a))
              );
        };
      "undefined" != typeof window &&
        "undefined" != typeof window.addEventListener &&
        ["resize", "scroll", "touchmove"].forEach(function(a) {
          window.addEventListener(a, d);
        });
    })();
    var O = { center: "center", left: "right", right: "left" },
      P = { middle: "middle", top: "bottom", bottom: "top" },
      Q = {
        top: 0,
        left: 0,
        middle: "50%",
        center: "50%",
        bottom: "100%",
        right: "100%"
      },
      R = function(a, b) {
        var c = a.left,
          d = a.top;
        return (
          "auto" === c && (c = O[b.left]),
          "auto" === d && (d = P[b.top]),
          { left: c, top: d }
        );
      },
      S = function(a) {
        var b = a.left,
          c = a.top;
        return (
          "undefined" != typeof Q[a.left] && (b = Q[a.left]),
          "undefined" != typeof Q[a.top] && (c = Q[a.top]),
          { left: b, top: c }
        );
      },
      T = function(a) {
        var b = a.split(" "),
          c = I(b, 2),
          d = c[0],
          e = c[1];
        return { top: d, left: e };
      },
      U = T,
      V = (function(a) {
        function b(a) {
          var c = this;
          d(this, b),
            J(Object.getPrototypeOf(b.prototype), "constructor", this).call(
              this
            ),
            (this.position = this.position.bind(this)),
            M.push(this),
            (this.history = []),
            this.setOptions(a, !1),
            y.modules.forEach(function(a) {
              "undefined" != typeof a.initialize && a.initialize.call(c);
            }),
            this.position();
        }
        return (
          r(b, a),
          x(b, [
            {
              key: "getClass",
              value: function() {
                var a =
                    arguments.length <= 0 || void 0 === arguments[0]
                      ? ""
                      : arguments[0],
                  b = this.options.classes;
                return "undefined" != typeof b && b[a]
                  ? this.options.classes[a]
                  : this.options.classPrefix
                  ? this.options.classPrefix + "-" + a
                  : a;
              }
            },
            {
              key: "setOptions",
              value: function(a) {
                var b = this,
                  c =
                    arguments.length <= 1 || void 0 === arguments[1]
                      ? !0
                      : arguments[1],
                  d = {
                    offset: "0 0",
                    targetOffset: "0 0",
                    targetAttachment: "auto auto",
                    classPrefix: "tether"
                  };
                this.options = k(d, a);
                var e = this.options,
                  g = e.element,
                  h = e.target,
                  i = e.targetModifier;
                if (
                  ((this.element = g),
                  (this.target = h),
                  (this.targetModifier = i),
                  "viewport" === this.target
                    ? ((this.target = document.body),
                      (this.targetModifier = "visible"))
                    : "scroll-handle" === this.target &&
                      ((this.target = document.body),
                      (this.targetModifier = "scroll-handle")),
                  ["element", "target"].forEach(function(a) {
                    if ("undefined" == typeof b[a])
                      throw new Error(
                        "Tether Error: Both element and target must be defined"
                      );
                    "undefined" != typeof b[a].jquery
                      ? (b[a] = b[a][0])
                      : "string" == typeof b[a] &&
                        (b[a] = document.querySelector(b[a]));
                  }),
                  m(this.element, this.getClass("element")),
                  this.options.addTargetClasses !== !1 &&
                    m(this.target, this.getClass("target")),
                  !this.options.attachment)
                )
                  throw new Error(
                    "Tether Error: You must provide an attachment"
                  );
                (this.targetAttachment = U(this.options.targetAttachment)),
                  (this.attachment = U(this.options.attachment)),
                  (this.offset = T(this.options.offset)),
                  (this.targetOffset = T(this.options.targetOffset)),
                  "undefined" != typeof this.scrollParents && this.disable(),
                  "scroll-handle" === this.targetModifier
                    ? (this.scrollParents = [this.target])
                    : (this.scrollParents = f(this.target)),
                  this.options.enabled !== !1 && this.enable(c);
              }
            },
            {
              key: "getTargetBounds",
              value: function() {
                if ("undefined" == typeof this.targetModifier)
                  return h(this.target);
                if ("visible" === this.targetModifier) {
                  if (this.target === document.body)
                    return {
                      top: pageYOffset,
                      left: pageXOffset,
                      height: innerHeight,
                      width: innerWidth
                    };
                  var a = h(this.target),
                    b = {
                      height: a.height,
                      width: a.width,
                      top: a.top,
                      left: a.left
                    };
                  return (
                    (b.height = Math.min(
                      b.height,
                      a.height - (pageYOffset - a.top)
                    )),
                    (b.height = Math.min(
                      b.height,
                      a.height -
                        (a.top + a.height - (pageYOffset + innerHeight))
                    )),
                    (b.height = Math.min(innerHeight, b.height)),
                    (b.height -= 2),
                    (b.width = Math.min(
                      b.width,
                      a.width - (pageXOffset - a.left)
                    )),
                    (b.width = Math.min(
                      b.width,
                      a.width - (a.left + a.width - (pageXOffset + innerWidth))
                    )),
                    (b.width = Math.min(innerWidth, b.width)),
                    (b.width -= 2),
                    b.top < pageYOffset && (b.top = pageYOffset),
                    b.left < pageXOffset && (b.left = pageXOffset),
                    b
                  );
                }
                if ("scroll-handle" === this.targetModifier) {
                  var a = void 0,
                    c = this.target;
                  c === document.body
                    ? ((c = document.documentElement),
                      (a = {
                        left: pageXOffset,
                        top: pageYOffset,
                        height: innerHeight,
                        width: innerWidth
                      }))
                    : (a = h(c));
                  var d = getComputedStyle(c),
                    e =
                      c.scrollWidth > c.clientWidth ||
                      [d.overflow, d.overflowX].indexOf("scroll") >= 0 ||
                      this.target !== document.body,
                    f = 0;
                  e && (f = 15);
                  var g =
                      a.height -
                      parseFloat(d.borderTopWidth) -
                      parseFloat(d.borderBottomWidth) -
                      f,
                    b = {
                      width: 15,
                      height: 0.975 * g * (g / c.scrollHeight),
                      left:
                        a.left + a.width - parseFloat(d.borderLeftWidth) - 15
                    },
                    i = 0;
                  408 > g &&
                    this.target === document.body &&
                    (i = -11e-5 * Math.pow(g, 2) - 0.00727 * g + 22.58),
                    this.target !== document.body &&
                      (b.height = Math.max(b.height, 24));
                  var j = this.target.scrollTop / (c.scrollHeight - g);
                  return (
                    (b.top =
                      j * (g - b.height - i) +
                      a.top +
                      parseFloat(d.borderTopWidth)),
                    this.target === document.body &&
                      (b.height = Math.max(b.height, 24)),
                    b
                  );
                }
              }
            },
            {
              key: "clearCache",
              value: function() {
                this._cache = {};
              }
            },
            {
              key: "cache",
              value: function(a, b) {
                return (
                  "undefined" == typeof this._cache && (this._cache = {}),
                  "undefined" == typeof this._cache[a] &&
                    (this._cache[a] = b.call(this)),
                  this._cache[a]
                );
              }
            },
            {
              key: "enable",
              value: function() {
                var a = this,
                  b =
                    arguments.length <= 0 || void 0 === arguments[0]
                      ? !0
                      : arguments[0];
                this.options.addTargetClasses !== !1 &&
                  m(this.target, this.getClass("enabled")),
                  m(this.element, this.getClass("enabled")),
                  (this.enabled = !0),
                  this.scrollParents.forEach(function(b) {
                    b !== a.target.ownerDocument &&
                      b.addEventListener("scroll", a.position);
                  }),
                  b && this.position();
              }
            },
            {
              key: "disable",
              value: function() {
                var a = this;
                l(this.target, this.getClass("enabled")),
                  l(this.element, this.getClass("enabled")),
                  (this.enabled = !1),
                  "undefined" != typeof this.scrollParents &&
                    this.scrollParents.forEach(function(b) {
                      b.removeEventListener("scroll", a.position);
                    });
              }
            },
            {
              key: "destroy",
              value: function() {
                var a = this;
                this.disable(),
                  M.forEach(function(b, c) {
                    b === a && M.splice(c, 1);
                  }),
                  0 === M.length && g();
              }
            },
            {
              key: "updateAttachClasses",
              value: function(a, b) {
                var c = this;
                (a = a || this.attachment), (b = b || this.targetAttachment);
                var d = ["left", "top", "bottom", "right", "middle", "center"];
                "undefined" != typeof this._addAttachClasses &&
                  this._addAttachClasses.length &&
                  this._addAttachClasses.splice(
                    0,
                    this._addAttachClasses.length
                  ),
                  "undefined" == typeof this._addAttachClasses &&
                    (this._addAttachClasses = []);
                var e = this._addAttachClasses;
                a.top &&
                  e.push(this.getClass("element-attached") + "-" + a.top),
                  a.left &&
                    e.push(this.getClass("element-attached") + "-" + a.left),
                  b.top &&
                    e.push(this.getClass("target-attached") + "-" + b.top),
                  b.left &&
                    e.push(this.getClass("target-attached") + "-" + b.left);
                var f = [];
                d.forEach(function(a) {
                  f.push(c.getClass("element-attached") + "-" + a),
                    f.push(c.getClass("target-attached") + "-" + a);
                }),
                  F(function() {
                    "undefined" != typeof c._addAttachClasses &&
                      (q(c.element, c._addAttachClasses, f),
                      c.options.addTargetClasses !== !1 &&
                        q(c.target, c._addAttachClasses, f),
                      delete c._addAttachClasses);
                  });
              }
            },
            {
              key: "position",
              value: function() {
                var a = this,
                  b =
                    arguments.length <= 0 || void 0 === arguments[0]
                      ? !0
                      : arguments[0];
                if (this.enabled) {
                  this.clearCache();
                  var c = R(this.targetAttachment, this.attachment);
                  this.updateAttachClasses(this.attachment, c);
                  var d = this.cache("element-bounds", function() {
                      return h(a.element);
                    }),
                    e = d.width,
                    f = d.height;
                  if (
                    0 === e &&
                    0 === f &&
                    "undefined" != typeof this.lastSize
                  ) {
                    var g = this.lastSize;
                    (e = g.width), (f = g.height);
                  } else this.lastSize = { width: e, height: f };
                  var k = this.cache("target-bounds", function() {
                      return a.getTargetBounds();
                    }),
                    l = k,
                    m = v(S(this.attachment), { width: e, height: f }),
                    n = v(S(c), l),
                    o = v(this.offset, { width: e, height: f }),
                    p = v(this.targetOffset, l);
                  (m = u(m, o)), (n = u(n, p));
                  for (
                    var q = k.left + n.left - m.left,
                      r = k.top + n.top - m.top,
                      s = 0;
                    s < y.modules.length;
                    ++s
                  ) {
                    var t = y.modules[s],
                      w = t.position.call(this, {
                        left: q,
                        top: r,
                        targetAttachment: c,
                        targetPos: k,
                        elementPos: d,
                        offset: m,
                        targetOffset: n,
                        manualOffset: o,
                        manualTargetOffset: p,
                        scrollbarSize: B,
                        attachment: this.attachment
                      });
                    if (w === !1) return !1;
                    "undefined" != typeof w &&
                      "object" == typeof w &&
                      ((r = w.top), (q = w.left));
                  }
                  var x = {
                      page: { top: r, left: q },
                      viewport: {
                        top: r - pageYOffset,
                        bottom: pageYOffset - r - f + innerHeight,
                        left: q - pageXOffset,
                        right: pageXOffset - q - e + innerWidth
                      }
                    },
                    z = this.target.ownerDocument,
                    A = z.defaultView,
                    B = void 0;
                  return (
                    A.innerHeight > z.documentElement.clientHeight &&
                      ((B = this.cache("scrollbar-size", j)),
                      (x.viewport.bottom -= B.height)),
                    A.innerWidth > z.documentElement.clientWidth &&
                      ((B = this.cache("scrollbar-size", j)),
                      (x.viewport.right -= B.width)),
                    (-1 === ["", "static"].indexOf(z.body.style.position) ||
                      -1 ===
                        ["", "static"].indexOf(
                          z.body.parentElement.style.position
                        )) &&
                      ((x.page.bottom = z.body.scrollHeight - r - f),
                      (x.page.right = z.body.scrollWidth - q - e)),
                    "undefined" != typeof this.options.optimizations &&
                      this.options.optimizations.moveElement !== !1 &&
                      "undefined" == typeof this.targetModifier &&
                      !(function() {
                        var b = a.cache("target-offsetparent", function() {
                            return i(a.target);
                          }),
                          c = a.cache("target-offsetparent-bounds", function() {
                            return h(b);
                          }),
                          d = getComputedStyle(b),
                          e = c,
                          f = {};
                        if (
                          (["Top", "Left", "Bottom", "Right"].forEach(function(
                            a
                          ) {
                            f[a.toLowerCase()] = parseFloat(
                              d["border" + a + "Width"]
                            );
                          }),
                          (c.right =
                            z.body.scrollWidth - c.left - e.width + f.right),
                          (c.bottom =
                            z.body.scrollHeight - c.top - e.height + f.bottom),
                          x.page.top >= c.top + f.top &&
                            x.page.bottom >= c.bottom &&
                            x.page.left >= c.left + f.left &&
                            x.page.right >= c.right)
                        ) {
                          var g = b.scrollTop,
                            j = b.scrollLeft;
                          x.offset = {
                            top: x.page.top - c.top + g - f.top,
                            left: x.page.left - c.left + j - f.left
                          };
                        }
                      })(),
                    this.move(x),
                    this.history.unshift(x),
                    this.history.length > 3 && this.history.pop(),
                    b && G(),
                    !0
                  );
                }
              }
            },
            {
              key: "move",
              value: function(a) {
                var b = this;
                if ("undefined" != typeof this.element.parentNode) {
                  var c = {};
                  for (var d in a) {
                    c[d] = {};
                    for (var e in a[d]) {
                      for (var f = !1, g = 0; g < this.history.length; ++g) {
                        var h = this.history[g];
                        if (
                          "undefined" != typeof h[d] &&
                          !s(h[d][e], a[d][e])
                        ) {
                          f = !0;
                          break;
                        }
                      }
                      f || (c[d][e] = !0);
                    }
                  }
                  var j = { top: "", left: "", right: "", bottom: "" },
                    l = function(a, c) {
                      var d = "undefined" != typeof b.options.optimizations,
                        e = d ? b.options.optimizations.gpu : null;
                      if (e !== !1) {
                        var f = void 0,
                          g = void 0;
                        if (
                          (a.top
                            ? ((j.top = 0), (f = c.top))
                            : ((j.bottom = 0), (f = -c.bottom)),
                          a.left
                            ? ((j.left = 0), (g = c.left))
                            : ((j.right = 0), (g = -c.right)),
                          window.matchMedia)
                        ) {
                          var h =
                            window.matchMedia(
                              "only screen and (min-resolution: 1.3dppx)"
                            ).matches ||
                            window.matchMedia(
                              "only screen and (-webkit-min-device-pixel-ratio: 1.3)"
                            ).matches;
                          h || ((g = Math.round(g)), (f = Math.round(f)));
                        }
                        (j[L] =
                          "translateX(" + g + "px) translateY(" + f + "px)"),
                          "msTransform" !== L && (j[L] += " translateZ(0)");
                      } else
                        a.top
                          ? (j.top = c.top + "px")
                          : (j.bottom = c.bottom + "px"),
                          a.left
                            ? (j.left = c.left + "px")
                            : (j.right = c.right + "px");
                    },
                    m = !1;
                  if (
                    ((c.page.top || c.page.bottom) &&
                    (c.page.left || c.page.right)
                      ? ((j.position = "absolute"), l(c.page, a.page))
                      : (c.viewport.top || c.viewport.bottom) &&
                        (c.viewport.left || c.viewport.right)
                      ? ((j.position = "fixed"), l(c.viewport, a.viewport))
                      : "undefined" != typeof c.offset &&
                        c.offset.top &&
                        c.offset.left
                      ? !(function() {
                          j.position = "absolute";
                          var d = b.cache("target-offsetparent", function() {
                            return i(b.target);
                          });
                          i(b.element) !== d &&
                            F(function() {
                              b.element.parentNode.removeChild(b.element),
                                d.appendChild(b.element);
                            }),
                            l(c.offset, a.offset),
                            (m = !0);
                        })()
                      : ((j.position = "absolute"),
                        l({ top: !0, left: !0 }, a.page)),
                    !m)
                  ) {
                    for (
                      var n = !0, o = this.element.parentNode;
                      o && 1 === o.nodeType && "BODY" !== o.tagName;

                    ) {
                      if ("static" !== getComputedStyle(o).position) {
                        n = !1;
                        break;
                      }
                      o = o.parentNode;
                    }
                    n ||
                      (this.element.parentNode.removeChild(this.element),
                      this.element.ownerDocument.body.appendChild(
                        this.element
                      ));
                  }
                  var p = {},
                    q = !1;
                  for (var e in j) {
                    var r = j[e],
                      t = this.element.style[e];
                    t !== r && ((q = !0), (p[e] = r));
                  }
                  q &&
                    F(function() {
                      k(b.element.style, p), b.trigger("repositioned");
                    });
                }
              }
            }
          ]),
          b
        );
      })(H);
    (V.modules = []), (y.position = N);
    var W = k(V, y),
      I = (function() {
        function a(a, b) {
          var c = [],
            d = !0,
            e = !1,
            f = void 0;
          try {
            for (
              var g, h = a[Symbol.iterator]();
              !(d = (g = h.next()).done) &&
              (c.push(g.value), !b || c.length !== b);
              d = !0
            );
          } catch (i) {
            (e = !0), (f = i);
          } finally {
            try {
              !d && h["return"] && h["return"]();
            } finally {
              if (e) throw f;
            }
          }
          return c;
        }
        return function(b, c) {
          if (Array.isArray(b)) return b;
          if (Symbol.iterator in Object(b)) return a(b, c);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        };
      })(),
      K = y.Utils,
      h = K.getBounds,
      k = K.extend,
      q = K.updateClasses,
      F = K.defer,
      X = ["left", "top", "right", "bottom"];
    y.modules.push({
      position: function(a) {
        var b = this,
          c = a.top,
          d = a.left,
          e = a.targetAttachment;
        if (!this.options.constraints) return !0;
        var f = this.cache("element-bounds", function() {
            return h(b.element);
          }),
          g = f.height,
          i = f.width;
        if (0 === i && 0 === g && "undefined" != typeof this.lastSize) {
          var j = this.lastSize;
          (i = j.width), (g = j.height);
        }
        var l = this.cache("target-bounds", function() {
            return b.getTargetBounds();
          }),
          m = l.height,
          n = l.width,
          o = [this.getClass("pinned"), this.getClass("out-of-bounds")];
        this.options.constraints.forEach(function(a) {
          var b = a.outOfBoundsClass,
            c = a.pinnedClass;
          b && o.push(b), c && o.push(c);
        }),
          o.forEach(function(a) {
            ["left", "top", "right", "bottom"].forEach(function(b) {
              o.push(a + "-" + b);
            });
          });
        var p = [],
          r = k({}, e),
          s = k({}, this.attachment);
        return (
          this.options.constraints.forEach(function(a) {
            var f = a.to,
              h = a.attachment,
              j = a.pin;
            "undefined" == typeof h && (h = "");
            var k = void 0,
              l = void 0;
            if (h.indexOf(" ") >= 0) {
              var o = h.split(" "),
                q = I(o, 2);
              (l = q[0]), (k = q[1]);
            } else k = l = h;
            var t = w(b, f);
            ("target" === l || "both" === l) &&
              (c < t[1] && "top" === r.top && ((c += m), (r.top = "bottom")),
              c + g > t[3] &&
                "bottom" === r.top &&
                ((c -= m), (r.top = "top"))),
              "together" === l &&
                ("top" === r.top &&
                  ("bottom" === s.top && c < t[1]
                    ? ((c += m), (r.top = "bottom"), (c += g), (s.top = "top"))
                    : "top" === s.top &&
                      c + g > t[3] &&
                      c - (g - m) >= t[1] &&
                      ((c -= g - m), (r.top = "bottom"), (s.top = "bottom"))),
                "bottom" === r.top &&
                  ("top" === s.top && c + g > t[3]
                    ? ((c -= m), (r.top = "top"), (c -= g), (s.top = "bottom"))
                    : "bottom" === s.top &&
                      c < t[1] &&
                      c + (2 * g - m) <= t[3] &&
                      ((c += g - m), (r.top = "top"), (s.top = "top"))),
                "middle" === r.top &&
                  (c + g > t[3] && "top" === s.top
                    ? ((c -= g), (s.top = "bottom"))
                    : c < t[1] &&
                      "bottom" === s.top &&
                      ((c += g), (s.top = "top")))),
              ("target" === k || "both" === k) &&
                (d < t[0] &&
                  "left" === r.left &&
                  ((d += n), (r.left = "right")),
                d + i > t[2] &&
                  "right" === r.left &&
                  ((d -= n), (r.left = "left"))),
              "together" === k &&
                (d < t[0] && "left" === r.left
                  ? "right" === s.left
                    ? ((d += n),
                      (r.left = "right"),
                      (d += i),
                      (s.left = "left"))
                    : "left" === s.left &&
                      ((d += n),
                      (r.left = "right"),
                      (d -= i),
                      (s.left = "right"))
                  : d + i > t[2] && "right" === r.left
                  ? "left" === s.left
                    ? ((d -= n),
                      (r.left = "left"),
                      (d -= i),
                      (s.left = "right"))
                    : "right" === s.left &&
                      ((d -= n), (r.left = "left"), (d += i), (s.left = "left"))
                  : "center" === r.left &&
                    (d + i > t[2] && "left" === s.left
                      ? ((d -= i), (s.left = "right"))
                      : d < t[0] &&
                        "right" === s.left &&
                        ((d += i), (s.left = "left")))),
              ("element" === l || "both" === l) &&
                (c < t[1] && "bottom" === s.top && ((c += g), (s.top = "top")),
                c + g > t[3] &&
                  "top" === s.top &&
                  ((c -= g), (s.top = "bottom"))),
              ("element" === k || "both" === k) &&
                (d < t[0] &&
                  ("right" === s.left
                    ? ((d += i), (s.left = "left"))
                    : "center" === s.left && ((d += i / 2), (s.left = "left"))),
                d + i > t[2] &&
                  ("left" === s.left
                    ? ((d -= i), (s.left = "right"))
                    : "center" === s.left &&
                      ((d -= i / 2), (s.left = "right")))),
              "string" == typeof j
                ? (j = j.split(",").map(function(a) {
                    return a.trim();
                  }))
                : j === !0 && (j = ["top", "left", "right", "bottom"]),
              (j = j || []);
            var u = [],
              v = [];
            c < t[1] &&
              (j.indexOf("top") >= 0
                ? ((c = t[1]), u.push("top"))
                : v.push("top")),
              c + g > t[3] &&
                (j.indexOf("bottom") >= 0
                  ? ((c = t[3] - g), u.push("bottom"))
                  : v.push("bottom")),
              d < t[0] &&
                (j.indexOf("left") >= 0
                  ? ((d = t[0]), u.push("left"))
                  : v.push("left")),
              d + i > t[2] &&
                (j.indexOf("right") >= 0
                  ? ((d = t[2] - i), u.push("right"))
                  : v.push("right")),
              u.length &&
                !(function() {
                  var a = void 0;
                  (a =
                    "undefined" != typeof b.options.pinnedClass
                      ? b.options.pinnedClass
                      : b.getClass("pinned")),
                    p.push(a),
                    u.forEach(function(b) {
                      p.push(a + "-" + b);
                    });
                })(),
              v.length &&
                !(function() {
                  var a = void 0;
                  (a =
                    "undefined" != typeof b.options.outOfBoundsClass
                      ? b.options.outOfBoundsClass
                      : b.getClass("out-of-bounds")),
                    p.push(a),
                    v.forEach(function(b) {
                      p.push(a + "-" + b);
                    });
                })(),
              (u.indexOf("left") >= 0 || u.indexOf("right") >= 0) &&
                (s.left = r.left = !1),
              (u.indexOf("top") >= 0 || u.indexOf("bottom") >= 0) &&
                (s.top = r.top = !1),
              (r.top !== e.top ||
                r.left !== e.left ||
                s.top !== b.attachment.top ||
                s.left !== b.attachment.left) &&
                (b.updateAttachClasses(s, r),
                b.trigger("update", { attachment: s, targetAttachment: r }));
          }),
          F(function() {
            b.options.addTargetClasses !== !1 && q(b.target, p, o),
              q(b.element, p, o);
          }),
          { top: c, left: d }
        );
      }
    });
    var K = y.Utils,
      h = K.getBounds,
      q = K.updateClasses,
      F = K.defer;
    y.modules.push({
      position: function(a) {
        var b = this,
          c = a.top,
          d = a.left,
          e = this.cache("element-bounds", function() {
            return h(b.element);
          }),
          f = e.height,
          g = e.width,
          i = this.getTargetBounds(),
          j = c + f,
          k = d + g,
          l = [];
        c <= i.bottom &&
          j >= i.top &&
          ["left", "right"].forEach(function(a) {
            var b = i[a];
            (b === d || b === k) && l.push(a);
          }),
          d <= i.right &&
            k >= i.left &&
            ["top", "bottom"].forEach(function(a) {
              var b = i[a];
              (b === c || b === j) && l.push(a);
            });
        var m = [],
          n = [],
          o = ["left", "top", "right", "bottom"];
        return (
          m.push(this.getClass("abutted")),
          o.forEach(function(a) {
            m.push(b.getClass("abutted") + "-" + a);
          }),
          l.length && n.push(this.getClass("abutted")),
          l.forEach(function(a) {
            n.push(b.getClass("abutted") + "-" + a);
          }),
          F(function() {
            b.options.addTargetClasses !== !1 && q(b.target, n, m),
              q(b.element, n, m);
          }),
          !0
        );
      }
    });
    var I = (function() {
      function a(a, b) {
        var c = [],
          d = !0,
          e = !1,
          f = void 0;
        try {
          for (
            var g, h = a[Symbol.iterator]();
            !(d = (g = h.next()).done) &&
            (c.push(g.value), !b || c.length !== b);
            d = !0
          );
        } catch (i) {
          (e = !0), (f = i);
        } finally {
          try {
            !d && h["return"] && h["return"]();
          } finally {
            if (e) throw f;
          }
        }
        return c;
      }
      return function(b, c) {
        if (Array.isArray(b)) return b;
        if (Symbol.iterator in Object(b)) return a(b, c);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      };
    })();
    return (
      y.modules.push({
        position: function(a) {
          var b = a.top,
            c = a.left;
          if (this.options.shift) {
            var d = this.options.shift;
            "function" == typeof this.options.shift &&
              (d = this.options.shift.call(this, { top: b, left: c }));
            var e = void 0,
              f = void 0;
            if ("string" == typeof d) {
              (d = d.split(" ")), (d[1] = d[1] || d[0]);
              var g = d,
                h = I(g, 2);
              (e = h[0]),
                (f = h[1]),
                (e = parseFloat(e, 10)),
                (f = parseFloat(f, 10));
            } else (e = d.top), (f = d.left);
            return (b += e), (c += f), { top: b, left: c };
          }
        }
      }),
      W
    );
  }),
  "undefined" == typeof jQuery)
)
  throw new Error("Bootstrap's JavaScript requires jQuery");
+(function(a) {
  var b = a.fn.jquery.split(" ")[0].split(".");
  if (
    (b[0] < 2 && b[1] < 9) ||
    (1 == b[0] && 9 == b[1] && b[2] < 1) ||
    b[0] >= 4
  )
    throw new Error(
      "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
    );
})(jQuery),
  +(function(a) {
    "use strict";
    function b(a, b) {
      if ("function" != typeof b && null !== b)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof b
        );
      (a.prototype = Object.create(b && b.prototype, {
        constructor: {
          value: a,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        b &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(a, b)
            : (a.__proto__ = b));
    }
    function c(a, b) {
      if (!(a instanceof b))
        throw new TypeError("Cannot call a class as a function");
    }
    var d = function(a, b, c) {
        for (var d = !0; d; ) {
          var e = a,
            f = b,
            g = c;
          (d = !1), null === e && (e = Function.prototype);
          var h = Object.getOwnPropertyDescriptor(e, f);
          if (void 0 !== h) {
            if ("value" in h) return h.value;
            var i = h.get;
            return void 0 === i ? void 0 : i.call(g);
          }
          var j = Object.getPrototypeOf(e);
          if (null === j) return void 0;
          (a = j), (b = f), (c = g), (d = !0), (h = j = void 0);
        }
      },
      e = (function() {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            (d.enumerable = d.enumerable || !1),
              (d.configurable = !0),
              "value" in d && (d.writable = !0),
              Object.defineProperty(a, d.key, d);
          }
        }
        return function(b, c, d) {
          return c && a(b.prototype, c), d && a(b, d), b;
        };
      })(),
      f = (function(a) {
        function b(a) {
          return {}.toString
            .call(a)
            .match(/\s([a-zA-Z]+)/)[1]
            .toLowerCase();
        }
        function c(a) {
          return (a[0] || a).nodeType;
        }
        function d() {
          return {
            bindType: h.end,
            delegateType: h.end,
            handle: function(b) {
              return a(b.target).is(this)
                ? b.handleObj.handler.apply(this, arguments)
                : void 0;
            }
          };
        }
        function e() {
          if (window.QUnit) return !1;
          var a = document.createElement("bootstrap");
          for (var b in j) if (void 0 !== a.style[b]) return { end: j[b] };
          return !1;
        }
        function f(b) {
          var c = this,
            d = !1;
          return (
            a(this).one(k.TRANSITION_END, function() {
              d = !0;
            }),
            setTimeout(function() {
              d || k.triggerTransitionEnd(c);
            }, b),
            this
          );
        }
        function g() {
          (h = e()),
            (a.fn.emulateTransitionEnd = f),
            k.supportsTransitionEnd() &&
              (a.event.special[k.TRANSITION_END] = d());
        }
        var h = !1,
          i = 1e6,
          j = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
          },
          k = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(a) {
              do a += ~~(Math.random() * i);
              while (document.getElementById(a));
              return a;
            },
            getSelectorFromElement: function(a) {
              var b = a.getAttribute("data-target");
              return (
                b ||
                  ((b = a.getAttribute("href") || ""),
                  (b = /^#[a-z]/i.test(b) ? b : null)),
                b
              );
            },
            reflow: function(a) {
              new Function("bs", "return bs")(a.offsetHeight);
            },
            triggerTransitionEnd: function(b) {
              a(b).trigger(h.end);
            },
            supportsTransitionEnd: function() {
              return Boolean(h);
            },
            typeCheckConfig: function(a, d, e) {
              for (var f in e)
                if (e.hasOwnProperty(f)) {
                  var g = e[f],
                    h = d[f],
                    i = void 0;
                  if (
                    ((i = h && c(h) ? "element" : b(h)), !new RegExp(g).test(i))
                  )
                    throw new Error(
                      a.toUpperCase() +
                        ": " +
                        ('Option "' + f + '" provided type "' + i + '" ') +
                        ('but expected type "' + g + '".')
                    );
                }
            }
          };
        return g(), k;
      })(jQuery),
      g = ((function(a) {
        var b = "alert",
          d = "4.0.0-alpha.4",
          g = "bs.alert",
          h = "." + g,
          i = ".data-api",
          j = a.fn[b],
          k = 150,
          l = { DISMISS: '[data-dismiss="alert"]' },
          m = {
            CLOSE: "close" + h,
            CLOSED: "closed" + h,
            CLICK_DATA_API: "click" + h + i
          },
          n = { ALERT: "alert", FADE: "fade", IN: "in" },
          o = (function() {
            function b(a) {
              c(this, b), (this._element = a);
            }
            return (
              e(
                b,
                [
                  {
                    key: "close",
                    value: function(a) {
                      a = a || this._element;
                      var b = this._getRootElement(a),
                        c = this._triggerCloseEvent(b);
                      c.isDefaultPrevented() || this._removeElement(b);
                    }
                  },
                  {
                    key: "dispose",
                    value: function() {
                      a.removeData(this._element, g), (this._element = null);
                    }
                  },
                  {
                    key: "_getRootElement",
                    value: function(b) {
                      var c = f.getSelectorFromElement(b),
                        d = !1;
                      return (
                        c && (d = a(c)[0]),
                        d || (d = a(b).closest("." + n.ALERT)[0]),
                        d
                      );
                    }
                  },
                  {
                    key: "_triggerCloseEvent",
                    value: function(b) {
                      var c = a.Event(m.CLOSE);
                      return a(b).trigger(c), c;
                    }
                  },
                  {
                    key: "_removeElement",
                    value: function(b) {
                      return (
                        a(b).removeClass(n.IN),
                        f.supportsTransitionEnd() && a(b).hasClass(n.FADE)
                          ? void a(b)
                              .one(
                                f.TRANSITION_END,
                                a.proxy(this._destroyElement, this, b)
                              )
                              .emulateTransitionEnd(k)
                          : void this._destroyElement(b)
                      );
                    }
                  },
                  {
                    key: "_destroyElement",
                    value: function(b) {
                      a(b)
                        .detach()
                        .trigger(m.CLOSED)
                        .remove();
                    }
                  }
                ],
                [
                  {
                    key: "_jQueryInterface",
                    value: function(c) {
                      return this.each(function() {
                        var d = a(this),
                          e = d.data(g);
                        e || ((e = new b(this)), d.data(g, e)),
                          "close" === c && e[c](this);
                      });
                    }
                  },
                  {
                    key: "_handleDismiss",
                    value: function(a) {
                      return function(b) {
                        b && b.preventDefault(), a.close(this);
                      };
                    }
                  },
                  {
                    key: "VERSION",
                    get: function() {
                      return d;
                    }
                  }
                ]
              ),
              b
            );
          })();
        return (
          a(document).on(
            m.CLICK_DATA_API,
            l.DISMISS,
            o._handleDismiss(new o())
          ),
          (a.fn[b] = o._jQueryInterface),
          (a.fn[b].Constructor = o),
          (a.fn[b].noConflict = function() {
            return (a.fn[b] = j), o._jQueryInterface;
          }),
          o
        );
      })(jQuery),
      (function(a) {
        var b = "button",
          d = "4.0.0-alpha.4",
          f = "bs.button",
          g = "." + f,
          h = ".data-api",
          i = a.fn[b],
          j = { ACTIVE: "active", BUTTON: "btn", FOCUS: "focus" },
          k = {
            DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
            DATA_TOGGLE: '[data-toggle="buttons"]',
            INPUT: "input",
            ACTIVE: ".active",
            BUTTON: ".btn"
          },
          l = {
            CLICK_DATA_API: "click" + g + h,
            FOCUS_BLUR_DATA_API: "focus" + g + h + " " + ("blur" + g + h)
          },
          m = (function() {
            function b(a) {
              c(this, b), (this._element = a);
            }
            return (
              e(
                b,
                [
                  {
                    key: "toggle",
                    value: function() {
                      var b = !0,
                        c = a(this._element).closest(k.DATA_TOGGLE)[0];
                      if (c) {
                        var d = a(this._element).find(k.INPUT)[0];
                        if (d) {
                          if ("radio" === d.type)
                            if (
                              d.checked &&
                              a(this._element).hasClass(j.ACTIVE)
                            )
                              b = !1;
                            else {
                              var e = a(c).find(k.ACTIVE)[0];
                              e && a(e).removeClass(j.ACTIVE);
                            }
                          b &&
                            ((d.checked = !a(this._element).hasClass(j.ACTIVE)),
                            a(this._element).trigger("change")),
                            d.focus();
                        }
                      } else
                        this._element.setAttribute(
                          "aria-pressed",
                          !a(this._element).hasClass(j.ACTIVE)
                        );
                      b && a(this._element).toggleClass(j.ACTIVE);
                    }
                  },
                  {
                    key: "dispose",
                    value: function() {
                      a.removeData(this._element, f), (this._element = null);
                    }
                  }
                ],
                [
                  {
                    key: "_jQueryInterface",
                    value: function(c) {
                      return this.each(function() {
                        var d = a(this).data(f);
                        d || ((d = new b(this)), a(this).data(f, d)),
                          "toggle" === c && d[c]();
                      });
                    }
                  },
                  {
                    key: "VERSION",
                    get: function() {
                      return d;
                    }
                  }
                ]
              ),
              b
            );
          })();
        return (
          a(document)
            .on(l.CLICK_DATA_API, k.DATA_TOGGLE_CARROT, function(b) {
              b.preventDefault();
              var c = b.target;
              a(c).hasClass(j.BUTTON) || (c = a(c).closest(k.BUTTON)),
                m._jQueryInterface.call(a(c), "toggle");
            })
            .on(l.FOCUS_BLUR_DATA_API, k.DATA_TOGGLE_CARROT, function(b) {
              var c = a(b.target).closest(k.BUTTON)[0];
              a(c).toggleClass(j.FOCUS, /^focus(in)?$/.test(b.type));
            }),
          (a.fn[b] = m._jQueryInterface),
          (a.fn[b].Constructor = m),
          (a.fn[b].noConflict = function() {
            return (a.fn[b] = i), m._jQueryInterface;
          }),
          m
        );
      })(jQuery),
      (function(a) {
        var b = "carousel",
          d = "4.0.0-alpha.4",
          g = "bs.carousel",
          h = "." + g,
          i = ".data-api",
          j = a.fn[b],
          k = 600,
          l = 37,
          m = 39,
          n = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
          },
          o = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
          },
          p = { NEXT: "next", PREVIOUS: "prev" },
          q = {
            SLIDE: "slide" + h,
            SLID: "slid" + h,
            KEYDOWN: "keydown" + h,
            MOUSEENTER: "mouseenter" + h,
            MOUSELEAVE: "mouseleave" + h,
            LOAD_DATA_API: "load" + h + i,
            CLICK_DATA_API: "click" + h + i
          },
          r = {
            CAROUSEL: "carousel",
            ACTIVE: "active",
            SLIDE: "slide",
            RIGHT: "right",
            LEFT: "left",
            ITEM: "carousel-item"
          },
          s = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".next, .prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
          },
          t = (function() {
            function i(b, d) {
              c(this, i),
                (this._items = null),
                (this._interval = null),
                (this._activeElement = null),
                (this._isPaused = !1),
                (this._isSliding = !1),
                (this._config = this._getConfig(d)),
                (this._element = a(b)[0]),
                (this._indicatorsElement = a(this._element).find(
                  s.INDICATORS
                )[0]),
                this._addEventListeners();
            }
            return (
              e(
                i,
                [
                  {
                    key: "next",
                    value: function() {
                      this._isSliding || this._slide(p.NEXT);
                    }
                  },
                  {
                    key: "nextWhenVisible",
                    value: function() {
                      document.hidden || this.next();
                    }
                  },
                  {
                    key: "prev",
                    value: function() {
                      this._isSliding || this._slide(p.PREVIOUS);
                    }
                  },
                  {
                    key: "pause",
                    value: function(b) {
                      b || (this._isPaused = !0),
                        a(this._element).find(s.NEXT_PREV)[0] &&
                          f.supportsTransitionEnd() &&
                          (f.triggerTransitionEnd(this._element),
                          this.cycle(!0)),
                        clearInterval(this._interval),
                        (this._interval = null);
                    }
                  },
                  {
                    key: "cycle",
                    value: function(b) {
                      b || (this._isPaused = !1),
                        this._interval &&
                          (clearInterval(this._interval),
                          (this._interval = null)),
                        this._config.interval &&
                          !this._isPaused &&
                          (this._interval = setInterval(
                            a.proxy(
                              document.visibilityState
                                ? this.nextWhenVisible
                                : this.next,
                              this
                            ),
                            this._config.interval
                          ));
                    }
                  },
                  {
                    key: "to",
                    value: function(b) {
                      var c = this;
                      this._activeElement = a(this._element).find(
                        s.ACTIVE_ITEM
                      )[0];
                      var d = this._getItemIndex(this._activeElement);
                      if (!(b > this._items.length - 1 || 0 > b)) {
                        if (this._isSliding)
                          return void a(this._element).one(q.SLID, function() {
                            return c.to(b);
                          });
                        if (d === b) return this.pause(), void this.cycle();
                        var e = b > d ? p.NEXT : p.PREVIOUS;
                        this._slide(e, this._items[b]);
                      }
                    }
                  },
                  {
                    key: "dispose",
                    value: function() {
                      a(this._element).off(h),
                        a.removeData(this._element, g),
                        (this._items = null),
                        (this._config = null),
                        (this._element = null),
                        (this._interval = null),
                        (this._isPaused = null),
                        (this._isSliding = null),
                        (this._activeElement = null),
                        (this._indicatorsElement = null);
                    }
                  },
                  {
                    key: "_getConfig",
                    value: function(c) {
                      return (
                        (c = a.extend({}, n, c)), f.typeCheckConfig(b, c, o), c
                      );
                    }
                  },
                  {
                    key: "_addEventListeners",
                    value: function() {
                      this._config.keyboard &&
                        a(this._element).on(
                          q.KEYDOWN,
                          a.proxy(this._keydown, this)
                        ),
                        "hover" !== this._config.pause ||
                          "ontouchstart" in document.documentElement ||
                          a(this._element)
                            .on(q.MOUSEENTER, a.proxy(this.pause, this))
                            .on(q.MOUSELEAVE, a.proxy(this.cycle, this));
                    }
                  },
                  {
                    key: "_keydown",
                    value: function(a) {
                      if (
                        (a.preventDefault(),
                        !/input|textarea/i.test(a.target.tagName))
                      )
                        switch (a.which) {
                          case l:
                            this.prev();
                            break;
                          case m:
                            this.next();
                            break;
                          default:
                            return;
                        }
                    }
                  },
                  {
                    key: "_getItemIndex",
                    value: function(b) {
                      return (
                        (this._items = a.makeArray(
                          a(b)
                            .parent()
                            .find(s.ITEM)
                        )),
                        this._items.indexOf(b)
                      );
                    }
                  },
                  {
                    key: "_getItemByDirection",
                    value: function(a, b) {
                      var c = a === p.NEXT,
                        d = a === p.PREVIOUS,
                        e = this._getItemIndex(b),
                        f = this._items.length - 1,
                        g = (d && 0 === e) || (c && e === f);
                      if (g && !this._config.wrap) return b;
                      var h = a === p.PREVIOUS ? -1 : 1,
                        i = (e + h) % this._items.length;
                      return -1 === i
                        ? this._items[this._items.length - 1]
                        : this._items[i];
                    }
                  },
                  {
                    key: "_triggerSlideEvent",
                    value: function(b, c) {
                      var d = a.Event(q.SLIDE, {
                        relatedTarget: b,
                        direction: c
                      });
                      return a(this._element).trigger(d), d;
                    }
                  },
                  {
                    key: "_setActiveIndicatorElement",
                    value: function(b) {
                      if (this._indicatorsElement) {
                        a(this._indicatorsElement)
                          .find(s.ACTIVE)
                          .removeClass(r.ACTIVE);
                        var c = this._indicatorsElement.children[
                          this._getItemIndex(b)
                        ];
                        c && a(c).addClass(r.ACTIVE);
                      }
                    }
                  },
                  {
                    key: "_slide",
                    value: function(b, c) {
                      var d = this,
                        e = a(this._element).find(s.ACTIVE_ITEM)[0],
                        g = c || (e && this._getItemByDirection(b, e)),
                        h = Boolean(this._interval),
                        i = b === p.NEXT ? r.LEFT : r.RIGHT;
                      if (g && a(g).hasClass(r.ACTIVE))
                        return void (this._isSliding = !1);
                      var j = this._triggerSlideEvent(g, i);
                      if (!j.isDefaultPrevented() && e && g) {
                        (this._isSliding = !0),
                          h && this.pause(),
                          this._setActiveIndicatorElement(g);
                        var l = a.Event(q.SLID, {
                          relatedTarget: g,
                          direction: i
                        });
                        f.supportsTransitionEnd() &&
                        a(this._element).hasClass(r.SLIDE)
                          ? (a(g).addClass(b),
                            f.reflow(g),
                            a(e).addClass(i),
                            a(g).addClass(i),
                            a(e)
                              .one(f.TRANSITION_END, function() {
                                a(g)
                                  .removeClass(i)
                                  .removeClass(b),
                                  a(g).addClass(r.ACTIVE),
                                  a(e)
                                    .removeClass(r.ACTIVE)
                                    .removeClass(b)
                                    .removeClass(i),
                                  (d._isSliding = !1),
                                  setTimeout(function() {
                                    return a(d._element).trigger(l);
                                  }, 0);
                              })
                              .emulateTransitionEnd(k))
                          : (a(e).removeClass(r.ACTIVE),
                            a(g).addClass(r.ACTIVE),
                            (this._isSliding = !1),
                            a(this._element).trigger(l)),
                          h && this.cycle();
                      }
                    }
                  }
                ],
                [
                  {
                    key: "_jQueryInterface",
                    value: function(b) {
                      return this.each(function() {
                        var c = a(this).data(g),
                          d = a.extend({}, n, a(this).data());
                        "object" == typeof b && a.extend(d, b);
                        var e = "string" == typeof b ? b : d.slide;
                        if (
                          (c || ((c = new i(this, d)), a(this).data(g, c)),
                          "number" == typeof b)
                        )
                          c.to(b);
                        else if ("string" == typeof e) {
                          if (void 0 === c[e])
                            throw new Error('No method named "' + e + '"');
                          c[e]();
                        } else d.interval && (c.pause(), c.cycle());
                      });
                    }
                  },
                  {
                    key: "_dataApiClickHandler",
                    value: function(b) {
                      var c = f.getSelectorFromElement(this);
                      if (c) {
                        var d = a(c)[0];
                        if (d && a(d).hasClass(r.CAROUSEL)) {
                          var e = a.extend({}, a(d).data(), a(this).data()),
                            h = this.getAttribute("data-slide-to");
                          h && (e.interval = !1),
                            i._jQueryInterface.call(a(d), e),
                            h &&
                              a(d)
                                .data(g)
                                .to(h),
                            b.preventDefault();
                        }
                      }
                    }
                  },
                  {
                    key: "VERSION",
                    get: function() {
                      return d;
                    }
                  },
                  {
                    key: "Default",
                    get: function() {
                      return n;
                    }
                  }
                ]
              ),
              i
            );
          })();
        return (
          a(document).on(
            q.CLICK_DATA_API,
            s.DATA_SLIDE,
            t._dataApiClickHandler
          ),
          a(window).on(q.LOAD_DATA_API, function() {
            a(s.DATA_RIDE).each(function() {
              var b = a(this);
              t._jQueryInterface.call(b, b.data());
            });
          }),
          (a.fn[b] = t._jQueryInterface),
          (a.fn[b].Constructor = t),
          (a.fn[b].noConflict = function() {
            return (a.fn[b] = j), t._jQueryInterface;
          }),
          t
        );
      })(jQuery),
      (function(a) {
        var b = "collapse",
          d = "4.0.0-alpha.4",
          g = "bs.collapse",
          h = "." + g,
          i = ".data-api",
          j = a.fn[b],
          k = 600,
          l = { toggle: !0, parent: "" },
          m = { toggle: "boolean", parent: "string" },
          n = {
            SHOW: "show" + h,
            SHOWN: "shown" + h,
            HIDE: "hide" + h,
            HIDDEN: "hidden" + h,
            CLICK_DATA_API: "click" + h + i
          },
          o = {
            IN: "in",
            COLLAPSE: "collapse",
            COLLAPSING: "collapsing",
            COLLAPSED: "collapsed"
          },
          p = { WIDTH: "width", HEIGHT: "height" },
          q = {
            ACTIVES: ".panel > .in, .panel > .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
          },
          r = (function() {
            function h(b, d) {
              c(this, h),
                (this._isTransitioning = !1),
                (this._element = b),
                (this._config = this._getConfig(d)),
                (this._triggerArray = a.makeArray(
                  a(
                    '[data-toggle="collapse"][href="#' +
                      b.id +
                      '"],' +
                      ('[data-toggle="collapse"][data-target="#' + b.id + '"]')
                  )
                )),
                (this._parent = this._config.parent ? this._getParent() : null),
                this._config.parent ||
                  this._addAriaAndCollapsedClass(
                    this._element,
                    this._triggerArray
                  ),
                this._config.toggle && this.toggle();
            }
            return (
              e(
                h,
                [
                  {
                    key: "toggle",
                    value: function() {
                      a(this._element).hasClass(o.IN)
                        ? this.hide()
                        : this.show();
                    }
                  },
                  {
                    key: "show",
                    value: function() {
                      var b = this;
                      if (
                        !this._isTransitioning &&
                        !a(this._element).hasClass(o.IN)
                      ) {
                        var c = void 0,
                          d = void 0;
                        if (
                          (this._parent &&
                            ((c = a.makeArray(a(q.ACTIVES))),
                            c.length || (c = null)),
                          !(c && ((d = a(c).data(g)), d && d._isTransitioning)))
                        ) {
                          var e = a.Event(n.SHOW);
                          if (
                            (a(this._element).trigger(e),
                            !e.isDefaultPrevented())
                          ) {
                            c &&
                              (h._jQueryInterface.call(a(c), "hide"),
                              d || a(c).data(g, null));
                            var i = this._getDimension();
                            a(this._element)
                              .removeClass(o.COLLAPSE)
                              .addClass(o.COLLAPSING),
                              (this._element.style[i] = 0),
                              this._element.setAttribute("aria-expanded", !0),
                              this._triggerArray.length &&
                                a(this._triggerArray)
                                  .removeClass(o.COLLAPSED)
                                  .attr("aria-expanded", !0),
                              this.setTransitioning(!0);
                            var j = function() {
                              a(b._element)
                                .removeClass(o.COLLAPSING)
                                .addClass(o.COLLAPSE)
                                .addClass(o.IN),
                                (b._element.style[i] = ""),
                                b.setTransitioning(!1),
                                a(b._element).trigger(n.SHOWN);
                            };
                            if (!f.supportsTransitionEnd()) return void j();
                            var l = i[0].toUpperCase() + i.slice(1),
                              m = "scroll" + l;
                            a(this._element)
                              .one(f.TRANSITION_END, j)
                              .emulateTransitionEnd(k),
                              (this._element.style[i] =
                                this._element[m] + "px");
                          }
                        }
                      }
                    }
                  },
                  {
                    key: "hide",
                    value: function() {
                      var b = this;
                      if (
                        !this._isTransitioning &&
                        a(this._element).hasClass(o.IN)
                      ) {
                        var c = a.Event(n.HIDE);
                        if (
                          (a(this._element).trigger(c), !c.isDefaultPrevented())
                        ) {
                          var d = this._getDimension(),
                            e = d === p.WIDTH ? "offsetWidth" : "offsetHeight";
                          (this._element.style[d] = this._element[e] + "px"),
                            f.reflow(this._element),
                            a(this._element)
                              .addClass(o.COLLAPSING)
                              .removeClass(o.COLLAPSE)
                              .removeClass(o.IN),
                            this._element.setAttribute("aria-expanded", !1),
                            this._triggerArray.length &&
                              a(this._triggerArray)
                                .addClass(o.COLLAPSED)
                                .attr("aria-expanded", !1),
                            this.setTransitioning(!0);
                          var g = function() {
                            b.setTransitioning(!1),
                              a(b._element)
                                .removeClass(o.COLLAPSING)
                                .addClass(o.COLLAPSE)
                                .trigger(n.HIDDEN);
                          };
                          return (
                            (this._element.style[d] = 0),
                            f.supportsTransitionEnd()
                              ? void a(this._element)
                                  .one(f.TRANSITION_END, g)
                                  .emulateTransitionEnd(k)
                              : void g()
                          );
                        }
                      }
                    }
                  },
                  {
                    key: "setTransitioning",
                    value: function(a) {
                      this._isTransitioning = a;
                    }
                  },
                  {
                    key: "dispose",
                    value: function() {
                      a.removeData(this._element, g),
                        (this._config = null),
                        (this._parent = null),
                        (this._element = null),
                        (this._triggerArray = null),
                        (this._isTransitioning = null);
                    }
                  },
                  {
                    key: "_getConfig",
                    value: function(c) {
                      return (
                        (c = a.extend({}, l, c)),
                        (c.toggle = Boolean(c.toggle)),
                        f.typeCheckConfig(b, c, m),
                        c
                      );
                    }
                  },
                  {
                    key: "_getDimension",
                    value: function() {
                      var b = a(this._element).hasClass(p.WIDTH);
                      return b ? p.WIDTH : p.HEIGHT;
                    }
                  },
                  {
                    key: "_getParent",
                    value: function() {
                      var b = this,
                        c = a(this._config.parent)[0],
                        d =
                          '[data-toggle="collapse"][data-parent="' +
                          this._config.parent +
                          '"]';
                      return (
                        a(c)
                          .find(d)
                          .each(function(a, c) {
                            b._addAriaAndCollapsedClass(
                              h._getTargetFromElement(c),
                              [c]
                            );
                          }),
                        c
                      );
                    }
                  },
                  {
                    key: "_addAriaAndCollapsedClass",
                    value: function(b, c) {
                      if (b) {
                        var d = a(b).hasClass(o.IN);
                        b.setAttribute("aria-expanded", d),
                          c.length &&
                            a(c)
                              .toggleClass(o.COLLAPSED, !d)
                              .attr("aria-expanded", d);
                      }
                    }
                  }
                ],
                [
                  {
                    key: "_getTargetFromElement",
                    value: function(b) {
                      var c = f.getSelectorFromElement(b);
                      return c ? a(c)[0] : null;
                    }
                  },
                  {
                    key: "_jQueryInterface",
                    value: function(b) {
                      return this.each(function() {
                        var c = a(this),
                          d = c.data(g),
                          e = a.extend(
                            {},
                            l,
                            c.data(),
                            "object" == typeof b && b
                          );
                        if (
                          (!d &&
                            e.toggle &&
                            /show|hide/.test(b) &&
                            (e.toggle = !1),
                          d || ((d = new h(this, e)), c.data(g, d)),
                          "string" == typeof b)
                        ) {
                          if (void 0 === d[b])
                            throw new Error('No method named "' + b + '"');
                          d[b]();
                        }
                      });
                    }
                  },
                  {
                    key: "VERSION",
                    get: function() {
                      return d;
                    }
                  },
                  {
                    key: "Default",
                    get: function() {
                      return l;
                    }
                  }
                ]
              ),
              h
            );
          })();
        return (
          a(document).on(n.CLICK_DATA_API, q.DATA_TOGGLE, function(b) {
            b.preventDefault();
            var c = r._getTargetFromElement(this),
              d = a(c).data(g),
              e = d ? "toggle" : a(this).data();
            r._jQueryInterface.call(a(c), e);
          }),
          (a.fn[b] = r._jQueryInterface),
          (a.fn[b].Constructor = r),
          (a.fn[b].noConflict = function() {
            return (a.fn[b] = j), r._jQueryInterface;
          }),
          r
        );
      })(jQuery),
      (function(a) {
        var b = "dropdown",
          d = "4.0.0-alpha.4",
          g = "bs.dropdown",
          h = "." + g,
          i = ".data-api",
          j = a.fn[b],
          k = 27,
          l = 38,
          m = 40,
          n = 3,
          o = {
            HIDE: "hide" + h,
            HIDDEN: "hidden" + h,
            SHOW: "show" + h,
            SHOWN: "shown" + h,
            CLICK: "click" + h,
            CLICK_DATA_API: "click" + h + i,
            KEYDOWN_DATA_API: "keydown" + h + i
          },
          p = {
            BACKDROP: "dropdown-backdrop",
            DISABLED: "disabled",
            OPEN: "open"
          },
          q = {
            BACKDROP: ".dropdown-backdrop",
            DATA_TOGGLE: '[data-toggle="dropdown"]',
            FORM_CHILD: ".dropdown form",
            ROLE_MENU: '[role="menu"]',
            ROLE_LISTBOX: '[role="listbox"]',
            NAVBAR_NAV: ".navbar-nav",
            VISIBLE_ITEMS:
              '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'
          },
          r = (function() {
            function b(a) {
              c(this, b), (this._element = a), this._addEventListeners();
            }
            return (
              e(
                b,
                [
                  {
                    key: "toggle",
                    value: function() {
                      if (this.disabled || a(this).hasClass(p.DISABLED))
                        return !1;
                      var c = b._getParentFromElement(this),
                        d = a(c).hasClass(p.OPEN);
                      if ((b._clearMenus(), d)) return !1;
                      if (
                        "ontouchstart" in document.documentElement &&
                        !a(c).closest(q.NAVBAR_NAV).length
                      ) {
                        var e = document.createElement("div");
                        (e.className = p.BACKDROP),
                          a(e).insertBefore(this),
                          a(e).on("click", b._clearMenus);
                      }
                      var f = { relatedTarget: this },
                        g = a.Event(o.SHOW, f);
                      return (
                        a(c).trigger(g),
                        g.isDefaultPrevented()
                          ? !1
                          : (this.focus(),
                            this.setAttribute("aria-expanded", "true"),
                            a(c).toggleClass(p.OPEN),
                            a(c).trigger(a.Event(o.SHOWN, f)),
                            !1)
                      );
                    }
                  },
                  {
                    key: "dispose",
                    value: function() {
                      a.removeData(this._element, g),
                        a(this._element).off(h),
                        (this._element = null);
                    }
                  },
                  {
                    key: "_addEventListeners",
                    value: function() {
                      a(this._element).on(o.CLICK, this.toggle);
                    }
                  }
                ],
                [
                  {
                    key: "_jQueryInterface",
                    value: function(c) {
                      return this.each(function() {
                        var d = a(this).data(g);
                        if (
                          (d || a(this).data(g, (d = new b(this))),
                          "string" == typeof c)
                        ) {
                          if (void 0 === d[c])
                            throw new Error('No method named "' + c + '"');
                          d[c].call(this);
                        }
                      });
                    }
                  },
                  {
                    key: "_clearMenus",
                    value: function(c) {
                      if (!c || c.which !== n) {
                        var d = a(q.BACKDROP)[0];
                        d && d.parentNode.removeChild(d);
                        for (
                          var e = a.makeArray(a(q.DATA_TOGGLE)), f = 0;
                          f < e.length;
                          f++
                        ) {
                          var g = b._getParentFromElement(e[f]),
                            h = { relatedTarget: e[f] };
                          if (
                            a(g).hasClass(p.OPEN) &&
                            !(
                              c &&
                              "click" === c.type &&
                              /input|textarea/i.test(c.target.tagName) &&
                              a.contains(g, c.target)
                            )
                          ) {
                            var i = a.Event(o.HIDE, h);
                            a(g).trigger(i),
                              i.isDefaultPrevented() ||
                                (e[f].setAttribute("aria-expanded", "false"),
                                a(g)
                                  .removeClass(p.OPEN)
                                  .trigger(a.Event(o.HIDDEN, h)));
                          }
                        }
                      }
                    }
                  },
                  {
                    key: "_getParentFromElement",
                    value: function(b) {
                      var c = void 0,
                        d = f.getSelectorFromElement(b);
                      return d && (c = a(d)[0]), c || b.parentNode;
                    }
                  },
                  {
                    key: "_dataApiKeydownHandler",
                    value: function(c) {
                      if (
                        /(38|40|27|32)/.test(c.which) &&
                        !/input|textarea/i.test(c.target.tagName) &&
                        (c.preventDefault(),
                        c.stopPropagation(),
                        !this.disabled && !a(this).hasClass(p.DISABLED))
                      ) {
                        var d = b._getParentFromElement(this),
                          e = a(d).hasClass(p.OPEN);
                        if ((!e && c.which !== k) || (e && c.which === k)) {
                          if (c.which === k) {
                            var f = a(d).find(q.DATA_TOGGLE)[0];
                            a(f).trigger("focus");
                          }
                          return void a(this).trigger("click");
                        }
                        var g = a.makeArray(a(q.VISIBLE_ITEMS));
                        if (
                          ((g = g.filter(function(a) {
                            return a.offsetWidth || a.offsetHeight;
                          })),
                          g.length)
                        ) {
                          var h = g.indexOf(c.target);
                          c.which === l && h > 0 && h--,
                            c.which === m && h < g.length - 1 && h++,
                            0 > h && (h = 0),
                            g[h].focus();
                        }
                      }
                    }
                  },
                  {
                    key: "VERSION",
                    get: function() {
                      return d;
                    }
                  }
                ]
              ),
              b
            );
          })();
        return (
          a(document)
            .on(o.KEYDOWN_DATA_API, q.DATA_TOGGLE, r._dataApiKeydownHandler)
            .on(o.KEYDOWN_DATA_API, q.ROLE_MENU, r._dataApiKeydownHandler)
            .on(o.KEYDOWN_DATA_API, q.ROLE_LISTBOX, r._dataApiKeydownHandler)
            .on(o.CLICK_DATA_API, r._clearMenus)
            .on(o.CLICK_DATA_API, q.DATA_TOGGLE, r.prototype.toggle)
            .on(o.CLICK_DATA_API, q.FORM_CHILD, function(a) {
              a.stopPropagation();
            }),
          (a.fn[b] = r._jQueryInterface),
          (a.fn[b].Constructor = r),
          (a.fn[b].noConflict = function() {
            return (a.fn[b] = j), r._jQueryInterface;
          }),
          r
        );
      })(jQuery),
      (function(a) {
        var b = "modal",
          d = "4.0.0-alpha.4",
          g = "bs.modal",
          h = "." + g,
          i = ".data-api",
          j = a.fn[b],
          k = 300,
          l = 150,
          m = 27,
          n = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
          o = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
          },
          p = {
            HIDE: "hide" + h,
            HIDDEN: "hidden" + h,
            SHOW: "show" + h,
            SHOWN: "shown" + h,
            FOCUSIN: "focusin" + h,
            RESIZE: "resize" + h,
            CLICK_DISMISS: "click.dismiss" + h,
            KEYDOWN_DISMISS: "keydown.dismiss" + h,
            MOUSEUP_DISMISS: "mouseup.dismiss" + h,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + h,
            CLICK_DATA_API: "click" + h + i
          },
          q = {
            SCROLLBAR_MEASURER: "modal-scrollbar-measure",
            BACKDROP: "modal-backdrop",
            OPEN: "modal-open",
            FADE: "fade",
            IN: "in"
          },
          r = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed"
          },
          s = (function() {
            function i(b, d) {
              c(this, i),
                (this._config = this._getConfig(d)),
                (this._element = b),
                (this._dialog = a(b).find(r.DIALOG)[0]),
                (this._backdrop = null),
                (this._isShown = !1),
                (this._isBodyOverflowing = !1),
                (this._ignoreBackdropClick = !1),
                (this._originalBodyPadding = 0),
                (this._scrollbarWidth = 0);
            }
            return (
              e(
                i,
                [
                  {
                    key: "toggle",
                    value: function(a) {
                      return this._isShown ? this.hide() : this.show(a);
                    }
                  },
                  {
                    key: "show",
                    value: function(b) {
                      var c = this,
                        d = a.Event(p.SHOW, { relatedTarget: b });
                      a(this._element).trigger(d),
                        this._isShown ||
                          d.isDefaultPrevented() ||
                          ((this._isShown = !0),
                          this._checkScrollbar(),
                          this._setScrollbar(),
                          a(document.body).addClass(q.OPEN),
                          this._setEscapeEvent(),
                          this._setResizeEvent(),
                          a(this._element).on(
                            p.CLICK_DISMISS,
                            r.DATA_DISMISS,
                            a.proxy(this.hide, this)
                          ),
                          a(this._dialog).on(p.MOUSEDOWN_DISMISS, function() {
                            a(c._element).one(p.MOUSEUP_DISMISS, function(b) {
                              a(b.target).is(c._element) &&
                                (c._ignoreBackdropClick = !0);
                            });
                          }),
                          this._showBackdrop(
                            a.proxy(this._showElement, this, b)
                          ));
                    }
                  },
                  {
                    key: "hide",
                    value: function(b) {
                      b && b.preventDefault();
                      var c = a.Event(p.HIDE);
                      a(this._element).trigger(c),
                        this._isShown &&
                          !c.isDefaultPrevented() &&
                          ((this._isShown = !1),
                          this._setEscapeEvent(),
                          this._setResizeEvent(),
                          a(document).off(p.FOCUSIN),
                          a(this._element).removeClass(q.IN),
                          a(this._element).off(p.CLICK_DISMISS),
                          a(this._dialog).off(p.MOUSEDOWN_DISMISS),
                          f.supportsTransitionEnd() &&
                          a(this._element).hasClass(q.FADE)
                            ? a(this._element)
                                .one(
                                  f.TRANSITION_END,
                                  a.proxy(this._hideModal, this)
                                )
                                .emulateTransitionEnd(k)
                            : this._hideModal());
                    }
                  },
                  {
                    key: "dispose",
                    value: function() {
                      a.removeData(this._element, g),
                        a(window).off(h),
                        a(document).off(h),
                        a(this._element).off(h),
                        a(this._backdrop).off(h),
                        (this._config = null),
                        (this._element = null),
                        (this._dialog = null),
                        (this._backdrop = null),
                        (this._isShown = null),
                        (this._isBodyOverflowing = null),
                        (this._ignoreBackdropClick = null),
                        (this._originalBodyPadding = null),
                        (this._scrollbarWidth = null);
                    }
                  },
                  {
                    key: "_getConfig",
                    value: function(c) {
                      return (
                        (c = a.extend({}, n, c)), f.typeCheckConfig(b, c, o), c
                      );
                    }
                  },
                  {
                    key: "_showElement",
                    value: function(b) {
                      var c = this,
                        d =
                          f.supportsTransitionEnd() &&
                          a(this._element).hasClass(q.FADE);
                      (this._element.parentNode &&
                        this._element.parentNode.nodeType ===
                          Node.ELEMENT_NODE) ||
                        document.body.appendChild(this._element),
                        (this._element.style.display = "block"),
                        this._element.removeAttribute("aria-hidden"),
                        (this._element.scrollTop = 0),
                        d && f.reflow(this._element),
                        a(this._element).addClass(q.IN),
                        this._config.focus && this._enforceFocus();
                      var e = a.Event(p.SHOWN, { relatedTarget: b }),
                        g = function() {
                          c._config.focus && c._element.focus(),
                            a(c._element).trigger(e);
                        };
                      d
                        ? a(this._dialog)
                            .one(f.TRANSITION_END, g)
                            .emulateTransitionEnd(k)
                        : g();
                    }
                  },
                  {
                    key: "_enforceFocus",
                    value: function() {
                      var b = this;
                      a(document)
                        .off(p.FOCUSIN)
                        .on(p.FOCUSIN, function(c) {
                          document === c.target ||
                            b._element === c.target ||
                            a(b._element).has(c.target).length ||
                            b._element.focus();
                        });
                    }
                  },
                  {
                    key: "_setEscapeEvent",
                    value: function() {
                      var b = this;
                      this._isShown && this._config.keyboard
                        ? a(this._element).on(p.KEYDOWN_DISMISS, function(a) {
                            a.which === m && b.hide();
                          })
                        : this._isShown ||
                          a(this._element).off(p.KEYDOWN_DISMISS);
                    }
                  },
                  {
                    key: "_setResizeEvent",
                    value: function() {
                      this._isShown
                        ? a(window).on(
                            p.RESIZE,
                            a.proxy(this._handleUpdate, this)
                          )
                        : a(window).off(p.RESIZE);
                    }
                  },
                  {
                    key: "_hideModal",
                    value: function() {
                      var b = this;
                      (this._element.style.display = "none"),
                        this._element.setAttribute("aria-hidden", "true"),
                        this._showBackdrop(function() {
                          a(document.body).removeClass(q.OPEN),
                            b._resetAdjustments(),
                            b._resetScrollbar(),
                            a(b._element).trigger(p.HIDDEN);
                        });
                    }
                  },
                  {
                    key: "_removeBackdrop",
                    value: function() {
                      this._backdrop &&
                        (a(this._backdrop).remove(), (this._backdrop = null));
                    }
                  },
                  {
                    key: "_showBackdrop",
                    value: function(b) {
                      var c = this,
                        d = a(this._element).hasClass(q.FADE) ? q.FADE : "";
                      if (this._isShown && this._config.backdrop) {
                        var e = f.supportsTransitionEnd() && d;
                        if (
                          ((this._backdrop = document.createElement("div")),
                          (this._backdrop.className = q.BACKDROP),
                          d && a(this._backdrop).addClass(d),
                          a(this._backdrop).appendTo(document.body),
                          a(this._element).on(p.CLICK_DISMISS, function(a) {
                            return c._ignoreBackdropClick
                              ? void (c._ignoreBackdropClick = !1)
                              : void (
                                  a.target === a.currentTarget &&
                                  ("static" === c._config.backdrop
                                    ? c._element.focus()
                                    : c.hide())
                                );
                          }),
                          e && f.reflow(this._backdrop),
                          a(this._backdrop).addClass(q.IN),
                          !b)
                        )
                          return;
                        if (!e) return void b();
                        a(this._backdrop)
                          .one(f.TRANSITION_END, b)
                          .emulateTransitionEnd(l);
                      } else if (!this._isShown && this._backdrop) {
                        a(this._backdrop).removeClass(q.IN);
                        var g = function() {
                          c._removeBackdrop(), b && b();
                        };
                        f.supportsTransitionEnd() &&
                        a(this._element).hasClass(q.FADE)
                          ? a(this._backdrop)
                              .one(f.TRANSITION_END, g)
                              .emulateTransitionEnd(l)
                          : g();
                      } else b && b();
                    }
                  },
                  {
                    key: "_handleUpdate",
                    value: function() {
                      this._adjustDialog();
                    }
                  },
                  {
                    key: "_adjustDialog",
                    value: function() {
                      var a =
                        this._element.scrollHeight >
                        document.documentElement.clientHeight;
                      !this._isBodyOverflowing &&
                        a &&
                        (this._element.style.paddingLeft =
                          this._scrollbarWidth + "px"),
                        this._isBodyOverflowing &&
                          !a &&
                          (this._element.style.paddingRight =
                            this._scrollbarWidth + "px");
                    }
                  },
                  {
                    key: "_resetAdjustments",
                    value: function() {
                      (this._element.style.paddingLeft = ""),
                        (this._element.style.paddingRight = "");
                    }
                  },
                  {
                    key: "_checkScrollbar",
                    value: function() {
                      (this._isBodyOverflowing =
                        document.body.clientWidth < window.innerWidth),
                        (this._scrollbarWidth = this._getScrollbarWidth());
                    }
                  },
                  {
                    key: "_setScrollbar",
                    value: function() {
                      var b = parseInt(
                        a(r.FIXED_CONTENT).css("padding-right") || 0,
                        10
                      );
                      (this._originalBodyPadding =
                        document.body.style.paddingRight || ""),
                        this._isBodyOverflowing &&
                          (document.body.style.paddingRight =
                            b + this._scrollbarWidth + "px");
                    }
                  },
                  {
                    key: "_resetScrollbar",
                    value: function() {
                      document.body.style.paddingRight = this._originalBodyPadding;
                    }
                  },
                  {
                    key: "_getScrollbarWidth",
                    value: function() {
                      var a = document.createElement("div");
                      (a.className = q.SCROLLBAR_MEASURER),
                        document.body.appendChild(a);
                      var b = a.offsetWidth - a.clientWidth;
                      return document.body.removeChild(a), b;
                    }
                  }
                ],
                [
                  {
                    key: "_jQueryInterface",
                    value: function(b, c) {
                      return this.each(function() {
                        var d = a(this).data(g),
                          e = a.extend(
                            {},
                            i.Default,
                            a(this).data(),
                            "object" == typeof b && b
                          );
                        if (
                          (d || ((d = new i(this, e)), a(this).data(g, d)),
                          "string" == typeof b)
                        ) {
                          if (void 0 === d[b])
                            throw new Error('No method named "' + b + '"');
                          d[b](c);
                        } else e.show && d.show(c);
                      });
                    }
                  },
                  {
                    key: "VERSION",
                    get: function() {
                      return d;
                    }
                  },
                  {
                    key: "Default",
                    get: function() {
                      return n;
                    }
                  }
                ]
              ),
              i
            );
          })();
        return (
          a(document).on(p.CLICK_DATA_API, r.DATA_TOGGLE, function(b) {
            var c = this,
              d = void 0,
              e = f.getSelectorFromElement(this);
            e && (d = a(e)[0]);
            var h = a(d).data(g)
              ? "toggle"
              : a.extend({}, a(d).data(), a(this).data());
            "A" === this.tagName && b.preventDefault();
            var i = a(d).one(p.SHOW, function(b) {
              b.isDefaultPrevented() ||
                i.one(p.HIDDEN, function() {
                  a(c).is(":visible") && c.focus();
                });
            });
            s._jQueryInterface.call(a(d), h, this);
          }),
          (a.fn[b] = s._jQueryInterface),
          (a.fn[b].Constructor = s),
          (a.fn[b].noConflict = function() {
            return (a.fn[b] = j), s._jQueryInterface;
          }),
          s
        );
      })(jQuery),
      (function(a) {
        var b = "scrollspy",
          d = "4.0.0-alpha.4",
          g = "bs.scrollspy",
          h = "." + g,
          i = ".data-api",
          j = a.fn[b],
          k = { offset: 10, method: "auto", target: "" },
          l = {
            offset: "number",
            method: "string",
            target: "(string|element)"
          },
          m = {
            ACTIVATE: "activate" + h,
            SCROLL: "scroll" + h,
            LOAD_DATA_API: "load" + h + i
          },
          n = {
            DROPDOWN_ITEM: "dropdown-item",
            DROPDOWN_MENU: "dropdown-menu",
            NAV_LINK: "nav-link",
            NAV: "nav",
            ACTIVE: "active"
          },
          o = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            LIST_ITEM: ".list-item",
            LI: "li",
            LI_DROPDOWN: "li.dropdown",
            NAV_LINKS: ".nav-link",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
          },
          p = { OFFSET: "offset", POSITION: "position" },
          q = (function() {
            function i(b, d) {
              c(this, i),
                (this._element = b),
                (this._scrollElement = "BODY" === b.tagName ? window : b),
                (this._config = this._getConfig(d)),
                (this._selector =
                  this._config.target +
                  " " +
                  o.NAV_LINKS +
                  "," +
                  (this._config.target + " " + o.DROPDOWN_ITEMS)),
                (this._offsets = []),
                (this._targets = []),
                (this._activeTarget = null),
                (this._scrollHeight = 0),
                a(this._scrollElement).on(
                  m.SCROLL,
                  a.proxy(this._process, this)
                ),
                this.refresh(),
                this._process();
            }
            return (
              e(
                i,
                [
                  {
                    key: "refresh",
                    value: function() {
                      var b = this,
                        c =
                          this._scrollElement !== this._scrollElement.window
                            ? p.POSITION
                            : p.OFFSET,
                        d =
                          "auto" === this._config.method
                            ? c
                            : this._config.method,
                        e = d === p.POSITION ? this._getScrollTop() : 0;
                      (this._offsets = []),
                        (this._targets = []),
                        (this._scrollHeight = this._getScrollHeight());
                      var g = a.makeArray(a(this._selector));
                      g.map(function(b) {
                        var c = void 0,
                          g = f.getSelectorFromElement(b);
                        return (
                          g && (c = a(g)[0]),
                          c && (c.offsetWidth || c.offsetHeight)
                            ? [a(c)[d]().top + e, g]
                            : null
                        );
                      })
                        .filter(function(a) {
                          return a;
                        })
                        .sort(function(a, b) {
                          return a[0] - b[0];
                        })
                        .forEach(function(a) {
                          b._offsets.push(a[0]), b._targets.push(a[1]);
                        });
                    }
                  },
                  {
                    key: "dispose",
                    value: function() {
                      a.removeData(this._element, g),
                        a(this._scrollElement).off(h),
                        (this._element = null),
                        (this._scrollElement = null),
                        (this._config = null),
                        (this._selector = null),
                        (this._offsets = null),
                        (this._targets = null),
                        (this._activeTarget = null),
                        (this._scrollHeight = null);
                    }
                  },
                  {
                    key: "_getConfig",
                    value: function(c) {
                      if (
                        ((c = a.extend({}, k, c)), "string" != typeof c.target)
                      ) {
                        var d = a(c.target).attr("id");
                        d || ((d = f.getUID(b)), a(c.target).attr("id", d)),
                          (c.target = "#" + d);
                      }
                      return f.typeCheckConfig(b, c, l), c;
                    }
                  },
                  {
                    key: "_getScrollTop",
                    value: function() {
                      return this._scrollElement === window
                        ? this._scrollElement.scrollY
                        : this._scrollElement.scrollTop;
                    }
                  },
                  {
                    key: "_getScrollHeight",
                    value: function() {
                      return (
                        this._scrollElement.scrollHeight ||
                        Math.max(
                          document.body.scrollHeight,
                          document.documentElement.scrollHeight
                        )
                      );
                    }
                  },
                  {
                    key: "_process",
                    value: function() {
                      var a = this._getScrollTop() + this._config.offset,
                        b = this._getScrollHeight(),
                        c =
                          this._config.offset +
                          b -
                          this._scrollElement.offsetHeight;
                      if (
                        (this._scrollHeight !== b && this.refresh(), a >= c)
                      ) {
                        var d = this._targets[this._targets.length - 1];
                        this._activeTarget !== d && this._activate(d);
                      }
                      if (this._activeTarget && a < this._offsets[0])
                        return (this._activeTarget = null), void this._clear();
                      for (var e = this._offsets.length; e--; ) {
                        var f =
                          this._activeTarget !== this._targets[e] &&
                          a >= this._offsets[e] &&
                          (void 0 === this._offsets[e + 1] ||
                            a < this._offsets[e + 1]);
                        f && this._activate(this._targets[e]);
                      }
                    }
                  },
                  {
                    key: "_activate",
                    value: function(b) {
                      (this._activeTarget = b), this._clear();
                      var c = this._selector.split(",");
                      c = c.map(function(a) {
                        return (
                          a +
                          '[data-target="' +
                          b +
                          '"],' +
                          (a + '[href="' + b + '"]')
                        );
                      });
                      var d = a(c.join(","));
                      d.hasClass(n.DROPDOWN_ITEM)
                        ? (d
                            .closest(o.DROPDOWN)
                            .find(o.DROPDOWN_TOGGLE)
                            .addClass(n.ACTIVE),
                          d.addClass(n.ACTIVE))
                        : d
                            .parents(o.LI)
                            .find(o.NAV_LINKS)
                            .addClass(n.ACTIVE),
                        a(this._scrollElement).trigger(m.ACTIVATE, {
                          relatedTarget: b
                        });
                    }
                  },
                  {
                    key: "_clear",
                    value: function() {
                      a(this._selector)
                        .filter(o.ACTIVE)
                        .removeClass(n.ACTIVE);
                    }
                  }
                ],
                [
                  {
                    key: "_jQueryInterface",
                    value: function(b) {
                      return this.each(function() {
                        var c = a(this).data(g),
                          d = ("object" == typeof b && b) || null;
                        if (
                          (c || ((c = new i(this, d)), a(this).data(g, c)),
                          "string" == typeof b)
                        ) {
                          if (void 0 === c[b])
                            throw new Error('No method named "' + b + '"');
                          c[b]();
                        }
                      });
                    }
                  },
                  {
                    key: "VERSION",
                    get: function() {
                      return d;
                    }
                  },
                  {
                    key: "Default",
                    get: function() {
                      return k;
                    }
                  }
                ]
              ),
              i
            );
          })();
        return (
          a(window).on(m.LOAD_DATA_API, function() {
            for (var b = a.makeArray(a(o.DATA_SPY)), c = b.length; c--; ) {
              var d = a(b[c]);
              q._jQueryInterface.call(d, d.data());
            }
          }),
          (a.fn[b] = q._jQueryInterface),
          (a.fn[b].Constructor = q),
          (a.fn[b].noConflict = function() {
            return (a.fn[b] = j), q._jQueryInterface;
          }),
          q
        );
      })(jQuery),
      (function(a) {
        var b = "tab",
          d = "4.0.0-alpha.4",
          g = "bs.tab",
          h = "." + g,
          i = ".data-api",
          j = a.fn[b],
          k = 150,
          l = {
            HIDE: "hide" + h,
            HIDDEN: "hidden" + h,
            SHOW: "show" + h,
            SHOWN: "shown" + h,
            CLICK_DATA_API: "click" + h + i
          },
          m = {
            DROPDOWN_MENU: "dropdown-menu",
            ACTIVE: "active",
            FADE: "fade",
            IN: "in"
          },
          n = {
            A: "a",
            LI: "li",
            DROPDOWN: ".dropdown",
            UL: "ul:not(.dropdown-menu)",
            FADE_CHILD: "> .nav-item .fade, > .fade",
            ACTIVE: ".active",
            ACTIVE_CHILD: "> .nav-item > .active, > .active",
            DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
            DROPDOWN_TOGGLE: ".dropdown-toggle",
            DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
          },
          o = (function() {
            function b(a) {
              c(this, b), (this._element = a);
            }
            return (
              e(
                b,
                [
                  {
                    key: "show",
                    value: function() {
                      var b = this;
                      if (
                        !this._element.parentNode ||
                        this._element.parentNode.nodeType !==
                          Node.ELEMENT_NODE ||
                        !a(this._element).hasClass(m.ACTIVE)
                      ) {
                        var c = void 0,
                          d = void 0,
                          e = a(this._element).closest(n.UL)[0],
                          g = f.getSelectorFromElement(this._element);
                        e &&
                          ((d = a.makeArray(a(e).find(n.ACTIVE))),
                          (d = d[d.length - 1]));
                        var h = a.Event(l.HIDE, {
                            relatedTarget: this._element
                          }),
                          i = a.Event(l.SHOW, { relatedTarget: d });
                        if (
                          (d && a(d).trigger(h),
                          a(this._element).trigger(i),
                          !i.isDefaultPrevented() && !h.isDefaultPrevented())
                        ) {
                          g && (c = a(g)[0]), this._activate(this._element, e);
                          var j = function() {
                            var c = a.Event(l.HIDDEN, {
                                relatedTarget: b._element
                              }),
                              e = a.Event(l.SHOWN, { relatedTarget: d });
                            a(d).trigger(c), a(b._element).trigger(e);
                          };
                          c ? this._activate(c, c.parentNode, j) : j();
                        }
                      }
                    }
                  },
                  {
                    key: "dispose",
                    value: function() {
                      a.removeClass(this._element, g), (this._element = null);
                    }
                  },
                  {
                    key: "_activate",
                    value: function(b, c, d) {
                      var e = a(c).find(n.ACTIVE_CHILD)[0],
                        g =
                          d &&
                          f.supportsTransitionEnd() &&
                          ((e && a(e).hasClass(m.FADE)) ||
                            Boolean(a(c).find(n.FADE_CHILD)[0])),
                        h = a.proxy(this._transitionComplete, this, b, e, g, d);
                      e && g
                        ? a(e)
                            .one(f.TRANSITION_END, h)
                            .emulateTransitionEnd(k)
                        : h(),
                        e && a(e).removeClass(m.IN);
                    }
                  },
                  {
                    key: "_transitionComplete",
                    value: function(b, c, d, e) {
                      if (c) {
                        a(c).removeClass(m.ACTIVE);
                        var g = a(c).find(n.DROPDOWN_ACTIVE_CHILD)[0];
                        g && a(g).removeClass(m.ACTIVE),
                          c.setAttribute("aria-expanded", !1);
                      }
                      if (
                        (a(b).addClass(m.ACTIVE),
                        b.setAttribute("aria-expanded", !0),
                        d
                          ? (f.reflow(b), a(b).addClass(m.IN))
                          : a(b).removeClass(m.FADE),
                        b.parentNode &&
                          a(b.parentNode).hasClass(m.DROPDOWN_MENU))
                      ) {
                        var h = a(b).closest(n.DROPDOWN)[0];
                        h &&
                          a(h)
                            .find(n.DROPDOWN_TOGGLE)
                            .addClass(m.ACTIVE),
                          b.setAttribute("aria-expanded", !0);
                      }
                      e && e();
                    }
                  }
                ],
                [
                  {
                    key: "_jQueryInterface",
                    value: function(c) {
                      return this.each(function() {
                        var d = a(this),
                          e = d.data(g);
                        if (
                          (e || ((e = e = new b(this)), d.data(g, e)),
                          "string" == typeof c)
                        ) {
                          if (void 0 === e[c])
                            throw new Error('No method named "' + c + '"');
                          e[c]();
                        }
                      });
                    }
                  },
                  {
                    key: "VERSION",
                    get: function() {
                      return d;
                    }
                  }
                ]
              ),
              b
            );
          })();
        return (
          a(document).on(l.CLICK_DATA_API, n.DATA_TOGGLE, function(b) {
            b.preventDefault(), o._jQueryInterface.call(a(this), "show");
          }),
          (a.fn[b] = o._jQueryInterface),
          (a.fn[b].Constructor = o),
          (a.fn[b].noConflict = function() {
            return (a.fn[b] = j), o._jQueryInterface;
          }),
          o
        );
      })(jQuery),
      (function(a) {
        if (void 0 === window.Tether)
          throw new Error(
            "Bootstrap tooltips require Tether (http://github.hubspot.com/tether/)"
          );
        var b = "tooltip",
          d = "4.0.0-alpha.4",
          g = "bs.tooltip",
          h = "." + g,
          i = a.fn[b],
          j = 150,
          k = "bs-tether",
          l = {
            animation: !0,
            template:
              '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: "0 0",
            constraints: []
          },
          m = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "string",
            constraints: "array"
          },
          n = {
            TOP: "bottom center",
            RIGHT: "middle left",
            BOTTOM: "top center",
            LEFT: "middle right"
          },
          o = { IN: "in", OUT: "out" },
          p = {
            HIDE: "hide" + h,
            HIDDEN: "hidden" + h,
            SHOW: "show" + h,
            SHOWN: "shown" + h,
            INSERTED: "inserted" + h,
            CLICK: "click" + h,
            FOCUSIN: "focusin" + h,
            FOCUSOUT: "focusout" + h,
            MOUSEENTER: "mouseenter" + h,
            MOUSELEAVE: "mouseleave" + h
          },
          q = { FADE: "fade", IN: "in" },
          r = { TOOLTIP: ".tooltip", TOOLTIP_INNER: ".tooltip-inner" },
          s = { element: !1, enabled: !1 },
          t = {
            HOVER: "hover",
            FOCUS: "focus",
            CLICK: "click",
            MANUAL: "manual"
          },
          u = (function() {
            function i(a, b) {
              c(this, i),
                (this._isEnabled = !0),
                (this._timeout = 0),
                (this._hoverState = ""),
                (this._activeTrigger = {}),
                (this._tether = null),
                (this.element = a),
                (this.config = this._getConfig(b)),
                (this.tip = null),
                this._setListeners();
            }
            return (
              e(
                i,
                [
                  {
                    key: "enable",
                    value: function() {
                      this._isEnabled = !0;
                    }
                  },
                  {
                    key: "disable",
                    value: function() {
                      this._isEnabled = !1;
                    }
                  },
                  {
                    key: "toggleEnabled",
                    value: function() {
                      this._isEnabled = !this._isEnabled;
                    }
                  },
                  {
                    key: "toggle",
                    value: function(b) {
                      if (b) {
                        var c = this.constructor.DATA_KEY,
                          d = a(b.currentTarget).data(c);
                        d ||
                          ((d = new this.constructor(
                            b.currentTarget,
                            this._getDelegateConfig()
                          )),
                          a(b.currentTarget).data(c, d)),
                          (d._activeTrigger.click = !d._activeTrigger.click),
                          d._isWithActiveTrigger()
                            ? d._enter(null, d)
                            : d._leave(null, d);
                      } else {
                        if (a(this.getTipElement()).hasClass(q.IN))
                          return void this._leave(null, this);
                        this._enter(null, this);
                      }
                    }
                  },
                  {
                    key: "dispose",
                    value: function() {
                      clearTimeout(this._timeout),
                        this.cleanupTether(),
                        a.removeData(this.element, this.constructor.DATA_KEY),
                        a(this.element).off(this.constructor.EVENT_KEY),
                        this.tip && a(this.tip).remove(),
                        (this._isEnabled = null),
                        (this._timeout = null),
                        (this._hoverState = null),
                        (this._activeTrigger = null),
                        (this._tether = null),
                        (this.element = null),
                        (this.config = null),
                        (this.tip = null);
                    }
                  },
                  {
                    key: "show",
                    value: function() {
                      var b = this,
                        c = a.Event(this.constructor.Event.SHOW);
                      if (this.isWithContent() && this._isEnabled) {
                        a(this.element).trigger(c);
                        var d = a.contains(
                          this.element.ownerDocument.documentElement,
                          this.element
                        );
                        if (c.isDefaultPrevented() || !d) return;
                        var e = this.getTipElement(),
                          g = f.getUID(this.constructor.NAME);
                        e.setAttribute("id", g),
                          this.element.setAttribute("aria-describedby", g),
                          this.setContent(),
                          this.config.animation && a(e).addClass(q.FADE);
                        var h =
                            "function" == typeof this.config.placement
                              ? this.config.placement.call(
                                  this,
                                  e,
                                  this.element
                                )
                              : this.config.placement,
                          j = this._getAttachment(h);
                        a(e)
                          .data(this.constructor.DATA_KEY, this)
                          .appendTo(document.body),
                          a(this.element).trigger(
                            this.constructor.Event.INSERTED
                          ),
                          (this._tether = new Tether({
                            attachment: j,
                            element: e,
                            target: this.element,
                            classes: s,
                            classPrefix: k,
                            offset: this.config.offset,
                            constraints: this.config.constraints,
                            addTargetClasses: !1
                          })),
                          f.reflow(e),
                          this._tether.position(),
                          a(e).addClass(q.IN);
                        var l = function() {
                          var c = b._hoverState;
                          (b._hoverState = null),
                            a(b.element).trigger(b.constructor.Event.SHOWN),
                            c === o.OUT && b._leave(null, b);
                        };
                        if (
                          f.supportsTransitionEnd() &&
                          a(this.tip).hasClass(q.FADE)
                        )
                          return void a(this.tip)
                            .one(f.TRANSITION_END, l)
                            .emulateTransitionEnd(i._TRANSITION_DURATION);
                        l();
                      }
                    }
                  },
                  {
                    key: "hide",
                    value: function(b) {
                      var c = this,
                        d = this.getTipElement(),
                        e = a.Event(this.constructor.Event.HIDE),
                        g = function() {
                          c._hoverState !== o.IN &&
                            d.parentNode &&
                            d.parentNode.removeChild(d),
                            c.element.removeAttribute("aria-describedby"),
                            a(c.element).trigger(c.constructor.Event.HIDDEN),
                            c.cleanupTether(),
                            b && b();
                        };
                      a(this.element).trigger(e),
                        e.isDefaultPrevented() ||
                          (a(d).removeClass(q.IN),
                          f.supportsTransitionEnd() &&
                          a(this.tip).hasClass(q.FADE)
                            ? a(d)
                                .one(f.TRANSITION_END, g)
                                .emulateTransitionEnd(j)
                            : g(),
                          (this._hoverState = ""));
                    }
                  },
                  {
                    key: "isWithContent",
                    value: function() {
                      return Boolean(this.getTitle());
                    }
                  },
                  {
                    key: "getTipElement",
                    value: function() {
                      return (this.tip =
                        this.tip || a(this.config.template)[0]);
                    }
                  },
                  {
                    key: "setContent",
                    value: function() {
                      var b = a(this.getTipElement());
                      this.setElementContent(
                        b.find(r.TOOLTIP_INNER),
                        this.getTitle()
                      ),
                        b.removeClass(q.FADE).removeClass(q.IN),
                        this.cleanupTether();
                    }
                  },
                  {
                    key: "setElementContent",
                    value: function(b, c) {
                      var d = this.config.html;
                      "object" == typeof c && (c.nodeType || c.jquery)
                        ? d
                          ? a(c)
                              .parent()
                              .is(b) || b.empty().append(c)
                          : b.text(a(c).text())
                        : b[d ? "html" : "text"](c);
                    }
                  },
                  {
                    key: "getTitle",
                    value: function() {
                      var a = this.element.getAttribute("data-original-title");
                      return (
                        a ||
                          (a =
                            "function" == typeof this.config.title
                              ? this.config.title.call(this.element)
                              : this.config.title),
                        a
                      );
                    }
                  },
                  {
                    key: "cleanupTether",
                    value: function() {
                      this._tether && this._tether.destroy();
                    }
                  },
                  {
                    key: "_getAttachment",
                    value: function(a) {
                      return n[a.toUpperCase()];
                    }
                  },
                  {
                    key: "_setListeners",
                    value: function() {
                      var b = this,
                        c = this.config.trigger.split(" ");
                      c.forEach(function(c) {
                        if ("click" === c)
                          a(b.element).on(
                            b.constructor.Event.CLICK,
                            b.config.selector,
                            a.proxy(b.toggle, b)
                          );
                        else if (c !== t.MANUAL) {
                          var d =
                              c === t.HOVER
                                ? b.constructor.Event.MOUSEENTER
                                : b.constructor.Event.FOCUSIN,
                            e =
                              c === t.HOVER
                                ? b.constructor.Event.MOUSELEAVE
                                : b.constructor.Event.FOCUSOUT;
                          a(b.element)
                            .on(d, b.config.selector, a.proxy(b._enter, b))
                            .on(e, b.config.selector, a.proxy(b._leave, b));
                        }
                      }),
                        this.config.selector
                          ? (this.config = a.extend({}, this.config, {
                              trigger: "manual",
                              selector: ""
                            }))
                          : this._fixTitle();
                    }
                  },
                  {
                    key: "_fixTitle",
                    value: function() {
                      var a = typeof this.element.getAttribute(
                        "data-original-title"
                      );
                      (this.element.getAttribute("title") || "string" !== a) &&
                        (this.element.setAttribute(
                          "data-original-title",
                          this.element.getAttribute("title") || ""
                        ),
                        this.element.setAttribute("title", ""));
                    }
                  },
                  {
                    key: "_enter",
                    value: function(b, c) {
                      var d = this.constructor.DATA_KEY;
                      return (
                        (c = c || a(b.currentTarget).data(d)),
                        c ||
                          ((c = new this.constructor(
                            b.currentTarget,
                            this._getDelegateConfig()
                          )),
                          a(b.currentTarget).data(d, c)),
                        b &&
                          (c._activeTrigger[
                            "focusin" === b.type ? t.FOCUS : t.HOVER
                          ] = !0),
                        a(c.getTipElement()).hasClass(q.IN) ||
                        c._hoverState === o.IN
                          ? void (c._hoverState = o.IN)
                          : (clearTimeout(c._timeout),
                            (c._hoverState = o.IN),
                            c.config.delay && c.config.delay.show
                              ? void (c._timeout = setTimeout(function() {
                                  c._hoverState === o.IN && c.show();
                                }, c.config.delay.show))
                              : void c.show())
                      );
                    }
                  },
                  {
                    key: "_leave",
                    value: function(b, c) {
                      var d = this.constructor.DATA_KEY;
                      return (
                        (c = c || a(b.currentTarget).data(d)),
                        c ||
                          ((c = new this.constructor(
                            b.currentTarget,
                            this._getDelegateConfig()
                          )),
                          a(b.currentTarget).data(d, c)),
                        b &&
                          (c._activeTrigger[
                            "focusout" === b.type ? t.FOCUS : t.HOVER
                          ] = !1),
                        c._isWithActiveTrigger()
                          ? void 0
                          : (clearTimeout(c._timeout),
                            (c._hoverState = o.OUT),
                            c.config.delay && c.config.delay.hide
                              ? void (c._timeout = setTimeout(function() {
                                  c._hoverState === o.OUT && c.hide();
                                }, c.config.delay.hide))
                              : void c.hide())
                      );
                    }
                  },
                  {
                    key: "_isWithActiveTrigger",
                    value: function() {
                      for (var a in this._activeTrigger)
                        if (this._activeTrigger[a]) return !0;
                      return !1;
                    }
                  },
                  {
                    key: "_getConfig",
                    value: function(c) {
                      return (
                        (c = a.extend(
                          {},
                          this.constructor.Default,
                          a(this.element).data(),
                          c
                        )),
                        c.delay &&
                          "number" == typeof c.delay &&
                          (c.delay = { show: c.delay, hide: c.delay }),
                        f.typeCheckConfig(b, c, this.constructor.DefaultType),
                        c
                      );
                    }
                  },
                  {
                    key: "_getDelegateConfig",
                    value: function() {
                      var a = {};
                      if (this.config)
                        for (var b in this.config)
                          this.constructor.Default[b] !== this.config[b] &&
                            (a[b] = this.config[b]);
                      return a;
                    }
                  }
                ],
                [
                  {
                    key: "_jQueryInterface",
                    value: function(b) {
                      return this.each(function() {
                        var c = a(this).data(g),
                          d = "object" == typeof b ? b : null;
                        if (
                          (c || !/destroy|hide/.test(b)) &&
                          (c || ((c = new i(this, d)), a(this).data(g, c)),
                          "string" == typeof b)
                        ) {
                          if (void 0 === c[b])
                            throw new Error('No method named "' + b + '"');
                          c[b]();
                        }
                      });
                    }
                  },
                  {
                    key: "VERSION",
                    get: function() {
                      return d;
                    }
                  },
                  {
                    key: "Default",
                    get: function() {
                      return l;
                    }
                  },
                  {
                    key: "NAME",
                    get: function() {
                      return b;
                    }
                  },
                  {
                    key: "DATA_KEY",
                    get: function() {
                      return g;
                    }
                  },
                  {
                    key: "Event",
                    get: function() {
                      return p;
                    }
                  },
                  {
                    key: "EVENT_KEY",
                    get: function() {
                      return h;
                    }
                  },
                  {
                    key: "DefaultType",
                    get: function() {
                      return m;
                    }
                  }
                ]
              ),
              i
            );
          })();
        return (
          (a.fn[b] = u._jQueryInterface),
          (a.fn[b].Constructor = u),
          (a.fn[b].noConflict = function() {
            return (a.fn[b] = i), u._jQueryInterface;
          }),
          u
        );
      })(jQuery));
    (function(a) {
      var f = "popover",
        h = "4.0.0-alpha.4",
        i = "bs.popover",
        j = "." + i,
        k = a.fn[f],
        l = a.extend({}, g.Default, {
          placement: "right",
          trigger: "click",
          content: "",
          template:
            '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }),
        m = a.extend({}, g.DefaultType, {
          content: "(string|element|function)"
        }),
        n = { FADE: "fade", IN: "in" },
        o = {
          TITLE: ".popover-title",
          CONTENT: ".popover-content",
          ARROW: ".popover-arrow"
        },
        p = {
          HIDE: "hide" + j,
          HIDDEN: "hidden" + j,
          SHOW: "show" + j,
          SHOWN: "shown" + j,
          INSERTED: "inserted" + j,
          CLICK: "click" + j,
          FOCUSIN: "focusin" + j,
          FOCUSOUT: "focusout" + j,
          MOUSEENTER: "mouseenter" + j,
          MOUSELEAVE: "mouseleave" + j
        },
        q = (function(g) {
          function k() {
            c(this, k),
              d(Object.getPrototypeOf(k.prototype), "constructor", this).apply(
                this,
                arguments
              );
          }
          return (
            b(k, g),
            e(
              k,
              [
                {
                  key: "isWithContent",
                  value: function() {
                    return this.getTitle() || this._getContent();
                  }
                },
                {
                  key: "getTipElement",
                  value: function() {
                    return (this.tip = this.tip || a(this.config.template)[0]);
                  }
                },
                {
                  key: "setContent",
                  value: function() {
                    var b = a(this.getTipElement());
                    this.setElementContent(b.find(o.TITLE), this.getTitle()),
                      this.setElementContent(
                        b.find(o.CONTENT),
                        this._getContent()
                      ),
                      b.removeClass(n.FADE).removeClass(n.IN),
                      this.cleanupTether();
                  }
                },
                {
                  key: "_getContent",
                  value: function() {
                    return (
                      this.element.getAttribute("data-content") ||
                      ("function" == typeof this.config.content
                        ? this.config.content.call(this.element)
                        : this.config.content)
                    );
                  }
                }
              ],
              [
                {
                  key: "_jQueryInterface",
                  value: function(b) {
                    return this.each(function() {
                      var c = a(this).data(i),
                        d = "object" == typeof b ? b : null;
                      if (
                        (c || !/destroy|hide/.test(b)) &&
                        (c || ((c = new k(this, d)), a(this).data(i, c)),
                        "string" == typeof b)
                      ) {
                        if (void 0 === c[b])
                          throw new Error('No method named "' + b + '"');
                        c[b]();
                      }
                    });
                  }
                },
                {
                  key: "VERSION",
                  get: function() {
                    return h;
                  }
                },
                {
                  key: "Default",
                  get: function() {
                    return l;
                  }
                },
                {
                  key: "NAME",
                  get: function() {
                    return f;
                  }
                },
                {
                  key: "DATA_KEY",
                  get: function() {
                    return i;
                  }
                },
                {
                  key: "Event",
                  get: function() {
                    return p;
                  }
                },
                {
                  key: "EVENT_KEY",
                  get: function() {
                    return j;
                  }
                },
                {
                  key: "DefaultType",
                  get: function() {
                    return m;
                  }
                }
              ]
            ),
            k
          );
        })(g);
      return (
        (a.fn[f] = q._jQueryInterface),
        (a.fn[f].Constructor = q),
        (a.fn[f].noConflict = function() {
          return (a.fn[f] = k), q._jQueryInterface;
        }),
        q
      );
    })(jQuery);
  })(jQuery),
  function() {
    var a,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      v,
      w,
      x,
      y,
      z,
      A,
      B,
      C,
      D,
      E,
      F,
      G,
      H,
      I,
      J,
      K,
      L,
      M,
      N,
      O,
      P,
      Q,
      R,
      S,
      T,
      U,
      V,
      W,
      X = [].slice,
      Y = {}.hasOwnProperty,
      Z = function(a, b) {
        function c() {
          this.constructor = a;
        }
        for (var d in b) Y.call(b, d) && (a[d] = b[d]);
        return (
          (c.prototype = b.prototype),
          (a.prototype = new c()),
          (a.__super__ = b.prototype),
          a
        );
      },
      $ =
        [].indexOf ||
        function(a) {
          for (var b = 0, c = this.length; c > b; b++)
            if (b in this && this[b] === a) return b;
          return -1;
        };
    for (
      u = {
        catchupTime: 100,
        initialRate: 0.03,
        minTime: 250,
        ghostTime: 100,
        maxProgressPerFrame: 20,
        easeFactor: 1.25,
        startOnPageLoad: !0,
        restartOnPushState: !0,
        restartOnRequestAfter: 500,
        target: "body",
        elements: { checkInterval: 100, selectors: ["body"] },
        eventLag: { minSamples: 10, sampleCount: 3, lagThreshold: 3 },
        ajax: { trackMethods: ["GET"], trackWebSockets: !0, ignoreURLs: [] }
      },
        C = function() {
          var a;
          return null !=
            (a =
              "undefined" != typeof performance &&
              null !== performance &&
              "function" == typeof performance.now
                ? performance.now()
                : void 0)
            ? a
            : +new Date();
        },
        E =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.msRequestAnimationFrame,
        t = window.cancelAnimationFrame || window.mozCancelAnimationFrame,
        null == E &&
          ((E = function(a) {
            return setTimeout(a, 50);
          }),
          (t = function(a) {
            return clearTimeout(a);
          })),
        G = function(a) {
          var b, c;
          return (
            (b = C()),
            (c = function() {
              var d;
              return (
                (d = C() - b),
                d >= 33
                  ? ((b = C()),
                    a(d, function() {
                      return E(c);
                    }))
                  : setTimeout(c, 33 - d)
              );
            })()
          );
        },
        F = function() {
          var a, b, c;
          return (
            (c = arguments[0]),
            (b = arguments[1]),
            (a = 3 <= arguments.length ? X.call(arguments, 2) : []),
            "function" == typeof c[b] ? c[b].apply(c, a) : c[b]
          );
        },
        v = function() {
          var a, b, c, d, e, f, g;
          for (
            b = arguments[0],
              d = 2 <= arguments.length ? X.call(arguments, 1) : [],
              f = 0,
              g = d.length;
            g > f;
            f++
          )
            if ((c = d[f]))
              for (a in c)
                Y.call(c, a) &&
                  ((e = c[a]),
                  null != b[a] &&
                  "object" == typeof b[a] &&
                  null != e &&
                  "object" == typeof e
                    ? v(b[a], e)
                    : (b[a] = e));
          return b;
        },
        q = function(a) {
          var b, c, d, e, f;
          for (c = b = 0, e = 0, f = a.length; f > e; e++)
            (d = a[e]), (c += Math.abs(d)), b++;
          return c / b;
        },
        x = function(a, b) {
          var c, d, e;
          if (
            (null == a && (a = "options"),
            null == b && (b = !0),
            (e = document.querySelector("[data-pace-" + a + "]")))
          ) {
            if (((c = e.getAttribute("data-pace-" + a)), !b)) return c;
            try {
              return JSON.parse(c);
            } catch (f) {
              return (
                (d = f),
                "undefined" != typeof console && null !== console
                  ? console.error("Error parsing inline pace options", d)
                  : void 0
              );
            }
          }
        },
        g = (function() {
          function a() {}
          return (
            (a.prototype.on = function(a, b, c, d) {
              var e;
              return (
                null == d && (d = !1),
                null == this.bindings && (this.bindings = {}),
                null == (e = this.bindings)[a] && (e[a] = []),
                this.bindings[a].push({ handler: b, ctx: c, once: d })
              );
            }),
            (a.prototype.once = function(a, b, c) {
              return this.on(a, b, c, !0);
            }),
            (a.prototype.off = function(a, b) {
              var c, d, e;
              if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
                if (null == b) return delete this.bindings[a];
                for (c = 0, e = []; c < this.bindings[a].length; )
                  e.push(
                    this.bindings[a][c].handler === b
                      ? this.bindings[a].splice(c, 1)
                      : c++
                  );
                return e;
              }
            }),
            (a.prototype.trigger = function() {
              var a, b, c, d, e, f, g, h, i;
              if (
                ((c = arguments[0]),
                (a = 2 <= arguments.length ? X.call(arguments, 1) : []),
                null != (g = this.bindings) ? g[c] : void 0)
              ) {
                for (e = 0, i = []; e < this.bindings[c].length; )
                  (h = this.bindings[c][e]),
                    (d = h.handler),
                    (b = h.ctx),
                    (f = h.once),
                    d.apply(null != b ? b : this, a),
                    i.push(f ? this.bindings[c].splice(e, 1) : e++);
                return i;
              }
            }),
            a
          );
        })(),
        j = window.Pace || {},
        window.Pace = j,
        v(j, g.prototype),
        D = j.options = v({}, u, window.paceOptions, x()),
        U = ["ajax", "document", "eventLag", "elements"],
        Q = 0,
        S = U.length;
      S > Q;
      Q++
    )
      (K = U[Q]), D[K] === !0 && (D[K] = u[K]);
    (i = (function(a) {
      function b() {
        return (V = b.__super__.constructor.apply(this, arguments));
      }
      return Z(b, a), b;
    })(Error)),
      (b = (function() {
        function a() {
          this.progress = 0;
        }
        return (
          (a.prototype.getElement = function() {
            var a;
            if (null == this.el) {
              if (((a = document.querySelector(D.target)), !a)) throw new i();
              (this.el = document.createElement("div")),
                (this.el.className = "pace pace-active"),
                (document.body.className = document.body.className.replace(
                  /pace-done/g,
                  ""
                )),
                (document.body.className += " pace-running"),
                (this.el.innerHTML =
                  '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>'),
                null != a.firstChild
                  ? a.insertBefore(this.el, a.firstChild)
                  : a.appendChild(this.el);
            }
            return this.el;
          }),
          (a.prototype.finish = function() {
            var a;
            return (
              (a = this.getElement()),
              (a.className = a.className.replace("pace-active", "")),
              (a.className += " pace-inactive"),
              (document.body.className = document.body.className.replace(
                "pace-running",
                ""
              )),
              (document.body.className += " pace-done")
            );
          }),
          (a.prototype.update = function(a) {
            return (this.progress = a), this.render();
          }),
          (a.prototype.destroy = function() {
            try {
              this.getElement().parentNode.removeChild(this.getElement());
            } catch (a) {
              i = a;
            }
            return (this.el = void 0);
          }),
          (a.prototype.render = function() {
            var a, b, c, d, e, f, g;
            if (null == document.querySelector(D.target)) return !1;
            for (
              a = this.getElement(),
                d = "translate3d(" + this.progress + "%, 0, 0)",
                g = ["webkitTransform", "msTransform", "transform"],
                e = 0,
                f = g.length;
              f > e;
              e++
            )
              (b = g[e]), (a.children[0].style[b] = d);
            return (
              (!this.lastRenderedProgress ||
                this.lastRenderedProgress | (0 !== this.progress) | 0) &&
                (a.children[0].setAttribute(
                  "data-progress-text",
                  "" + (0 | this.progress) + "%"
                ),
                this.progress >= 100
                  ? (c = "99")
                  : ((c = this.progress < 10 ? "0" : ""),
                    (c += 0 | this.progress)),
                a.children[0].setAttribute("data-progress", "" + c)),
              (this.lastRenderedProgress = this.progress)
            );
          }),
          (a.prototype.done = function() {
            return this.progress >= 100;
          }),
          a
        );
      })()),
      (h = (function() {
        function a() {
          this.bindings = {};
        }
        return (
          (a.prototype.trigger = function(a, b) {
            var c, d, e, f, g;
            if (null != this.bindings[a]) {
              for (
                f = this.bindings[a], g = [], d = 0, e = f.length;
                e > d;
                d++
              )
                (c = f[d]), g.push(c.call(this, b));
              return g;
            }
          }),
          (a.prototype.on = function(a, b) {
            var c;
            return (
              null == (c = this.bindings)[a] && (c[a] = []),
              this.bindings[a].push(b)
            );
          }),
          a
        );
      })()),
      (P = window.XMLHttpRequest),
      (O = window.XDomainRequest),
      (N = window.WebSocket),
      (w = function(a, b) {
        var c, d, e;
        e = [];
        for (d in b.prototype)
          try {
            e.push(
              null == a[d] && "function" != typeof b[d]
                ? "function" == typeof Object.defineProperty
                  ? Object.defineProperty(a, d, {
                      get: function() {
                        return b.prototype[d];
                      },
                      configurable: !0,
                      enumerable: !0
                    })
                  : (a[d] = b.prototype[d])
                : void 0
            );
          } catch (f) {
            c = f;
          }
        return e;
      }),
      (A = []),
      (j.ignore = function() {
        var a, b, c;
        return (
          (b = arguments[0]),
          (a = 2 <= arguments.length ? X.call(arguments, 1) : []),
          A.unshift("ignore"),
          (c = b.apply(null, a)),
          A.shift(),
          c
        );
      }),
      (j.track = function() {
        var a, b, c;
        return (
          (b = arguments[0]),
          (a = 2 <= arguments.length ? X.call(arguments, 1) : []),
          A.unshift("track"),
          (c = b.apply(null, a)),
          A.shift(),
          c
        );
      }),
      (J = function(a) {
        var b;
        if ((null == a && (a = "GET"), "track" === A[0])) return "force";
        if (!A.length && D.ajax) {
          if ("socket" === a && D.ajax.trackWebSockets) return !0;
          if (((b = a.toUpperCase()), $.call(D.ajax.trackMethods, b) >= 0))
            return !0;
        }
        return !1;
      }),
      (k = (function(a) {
        function b() {
          var a,
            c = this;
          b.__super__.constructor.apply(this, arguments),
            (a = function(a) {
              var b;
              return (
                (b = a.open),
                (a.open = function(d, e) {
                  return (
                    J(d) &&
                      c.trigger("request", { type: d, url: e, request: a }),
                    b.apply(a, arguments)
                  );
                })
              );
            }),
            (window.XMLHttpRequest = function(b) {
              var c;
              return (c = new P(b)), a(c), c;
            });
          try {
            w(window.XMLHttpRequest, P);
          } catch (d) {}
          if (null != O) {
            window.XDomainRequest = function() {
              var b;
              return (b = new O()), a(b), b;
            };
            try {
              w(window.XDomainRequest, O);
            } catch (d) {}
          }
          if (null != N && D.ajax.trackWebSockets) {
            window.WebSocket = function(a, b) {
              var d;
              return (
                (d = null != b ? new N(a, b) : new N(a)),
                J("socket") &&
                  c.trigger("request", {
                    type: "socket",
                    url: a,
                    protocols: b,
                    request: d
                  }),
                d
              );
            };
            try {
              w(window.WebSocket, N);
            } catch (d) {}
          }
        }
        return Z(b, a), b;
      })(h)),
      (R = null),
      (y = function() {
        return null == R && (R = new k()), R;
      }),
      (I = function(a) {
        var b, c, d, e;
        for (e = D.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++)
          if (((b = e[c]), "string" == typeof b)) {
            if (-1 !== a.indexOf(b)) return !0;
          } else if (b.test(a)) return !0;
        return !1;
      }),
      y().on("request", function(b) {
        var c, d, e, f, g;
        return (
          (f = b.type),
          (e = b.request),
          (g = b.url),
          I(g)
            ? void 0
            : j.running || (D.restartOnRequestAfter === !1 && "force" !== J(f))
            ? void 0
            : ((d = arguments),
              (c = D.restartOnRequestAfter || 0),
              "boolean" == typeof c && (c = 0),
              setTimeout(function() {
                var b, c, g, h, i, k;
                if (
                  (b =
                    "socket" === f
                      ? e.readyState < 2
                      : 0 < (h = e.readyState) && 4 > h)
                ) {
                  for (
                    j.restart(), i = j.sources, k = [], c = 0, g = i.length;
                    g > c;
                    c++
                  ) {
                    if (((K = i[c]), K instanceof a)) {
                      K.watch.apply(K, d);
                      break;
                    }
                    k.push(void 0);
                  }
                  return k;
                }
              }, c))
        );
      }),
      (a = (function() {
        function a() {
          var a = this;
          (this.elements = []),
            y().on("request", function() {
              return a.watch.apply(a, arguments);
            });
        }
        return (
          (a.prototype.watch = function(a) {
            var b, c, d, e;
            return (
              (d = a.type),
              (b = a.request),
              (e = a.url),
              I(e)
                ? void 0
                : ((c = "socket" === d ? new n(b) : new o(b)),
                  this.elements.push(c))
            );
          }),
          a
        );
      })()),
      (o = (function() {
        function a(a) {
          var b,
            c,
            d,
            e,
            f,
            g,
            h = this;
          if (((this.progress = 0), null != window.ProgressEvent))
            for (
              c = null,
                a.addEventListener(
                  "progress",
                  function(a) {
                    return (h.progress = a.lengthComputable
                      ? (100 * a.loaded) / a.total
                      : h.progress + (100 - h.progress) / 2);
                  },
                  !1
                ),
                g = ["load", "abort", "timeout", "error"],
                d = 0,
                e = g.length;
              e > d;
              d++
            )
              (b = g[d]),
                a.addEventListener(
                  b,
                  function() {
                    return (h.progress = 100);
                  },
                  !1
                );
          else
            (f = a.onreadystatechange),
              (a.onreadystatechange = function() {
                var b;
                return (
                  0 === (b = a.readyState) || 4 === b
                    ? (h.progress = 100)
                    : 3 === a.readyState && (h.progress = 50),
                  "function" == typeof f ? f.apply(null, arguments) : void 0
                );
              });
        }
        return a;
      })()),
      (n = (function() {
        function a(a) {
          var b,
            c,
            d,
            e,
            f = this;
          for (
            this.progress = 0, e = ["error", "open"], c = 0, d = e.length;
            d > c;
            c++
          )
            (b = e[c]),
              a.addEventListener(
                b,
                function() {
                  return (f.progress = 100);
                },
                !1
              );
        }
        return a;
      })()),
      (d = (function() {
        function a(a) {
          var b, c, d, f;
          for (
            null == a && (a = {}),
              this.elements = [],
              null == a.selectors && (a.selectors = []),
              f = a.selectors,
              c = 0,
              d = f.length;
            d > c;
            c++
          )
            (b = f[c]), this.elements.push(new e(b));
        }
        return a;
      })()),
      (e = (function() {
        function a(a) {
          (this.selector = a), (this.progress = 0), this.check();
        }
        return (
          (a.prototype.check = function() {
            var a = this;
            return document.querySelector(this.selector)
              ? this.done()
              : setTimeout(function() {
                  return a.check();
                }, D.elements.checkInterval);
          }),
          (a.prototype.done = function() {
            return (this.progress = 100);
          }),
          a
        );
      })()),
      (c = (function() {
        function a() {
          var a,
            b,
            c = this;
          (this.progress =
            null != (b = this.states[document.readyState]) ? b : 100),
            (a = document.onreadystatechange),
            (document.onreadystatechange = function() {
              return (
                null != c.states[document.readyState] &&
                  (c.progress = c.states[document.readyState]),
                "function" == typeof a ? a.apply(null, arguments) : void 0
              );
            });
        }
        return (
          (a.prototype.states = { loading: 0, interactive: 50, complete: 100 }),
          a
        );
      })()),
      (f = (function() {
        function a() {
          var a,
            b,
            c,
            d,
            e,
            f = this;
          (this.progress = 0),
            (a = 0),
            (e = []),
            (d = 0),
            (c = C()),
            (b = setInterval(function() {
              var g;
              return (
                (g = C() - c - 50),
                (c = C()),
                e.push(g),
                e.length > D.eventLag.sampleCount && e.shift(),
                (a = q(e)),
                ++d >= D.eventLag.minSamples && a < D.eventLag.lagThreshold
                  ? ((f.progress = 100), clearInterval(b))
                  : (f.progress = 100 * (3 / (a + 3)))
              );
            }, 50));
        }
        return a;
      })()),
      (m = (function() {
        function a(a) {
          (this.source = a),
            (this.last = this.sinceLastUpdate = 0),
            (this.rate = D.initialRate),
            (this.catchup = 0),
            (this.progress = this.lastProgress = 0),
            null != this.source && (this.progress = F(this.source, "progress"));
        }
        return (
          (a.prototype.tick = function(a, b) {
            var c;
            return (
              null == b && (b = F(this.source, "progress")),
              b >= 100 && (this.done = !0),
              b === this.last
                ? (this.sinceLastUpdate += a)
                : (this.sinceLastUpdate &&
                    (this.rate = (b - this.last) / this.sinceLastUpdate),
                  (this.catchup = (b - this.progress) / D.catchupTime),
                  (this.sinceLastUpdate = 0),
                  (this.last = b)),
              b > this.progress && (this.progress += this.catchup * a),
              (c = 1 - Math.pow(this.progress / 100, D.easeFactor)),
              (this.progress += c * this.rate * a),
              (this.progress = Math.min(
                this.lastProgress + D.maxProgressPerFrame,
                this.progress
              )),
              (this.progress = Math.max(0, this.progress)),
              (this.progress = Math.min(100, this.progress)),
              (this.lastProgress = this.progress),
              this.progress
            );
          }),
          a
        );
      })()),
      (L = null),
      (H = null),
      (r = null),
      (M = null),
      (p = null),
      (s = null),
      (j.running = !1),
      (z = function() {
        return D.restartOnPushState ? j.restart() : void 0;
      }),
      null != window.history.pushState &&
        ((T = window.history.pushState),
        (window.history.pushState = function() {
          return z(), T.apply(window.history, arguments);
        })),
      null != window.history.replaceState &&
        ((W = window.history.replaceState),
        (window.history.replaceState = function() {
          return z(), W.apply(window.history, arguments);
        })),
      (l = { ajax: a, elements: d, document: c, eventLag: f }),
      (B = function() {
        var a, c, d, e, f, g, h, i;
        for (
          j.sources = L = [],
            g = ["ajax", "elements", "document", "eventLag"],
            c = 0,
            e = g.length;
          e > c;
          c++
        )
          (a = g[c]), D[a] !== !1 && L.push(new l[a](D[a]));
        for (
          i = null != (h = D.extraSources) ? h : [], d = 0, f = i.length;
          f > d;
          d++
        )
          (K = i[d]), L.push(new K(D));
        return (j.bar = r = new b()), (H = []), (M = new m());
      })(),
      (j.stop = function() {
        return (
          j.trigger("stop"),
          (j.running = !1),
          r.destroy(),
          (s = !0),
          null != p && ("function" == typeof t && t(p), (p = null)),
          B()
        );
      }),
      (j.restart = function() {
        return j.trigger("restart"), j.stop(), j.start();
      }),
      (j.go = function() {
        var a;
        return (
          (j.running = !0),
          r.render(),
          (a = C()),
          (s = !1),
          (p = G(function(b, c) {
            var d, e, f, g, h, i, k, l, n, o, p, q, t, u, v, w;
            for (
              l = 100 - r.progress, e = p = 0, f = !0, i = q = 0, u = L.length;
              u > q;
              i = ++q
            )
              for (
                K = L[i],
                  o = null != H[i] ? H[i] : (H[i] = []),
                  h = null != (w = K.elements) ? w : [K],
                  k = t = 0,
                  v = h.length;
                v > t;
                k = ++t
              )
                (g = h[k]),
                  (n = null != o[k] ? o[k] : (o[k] = new m(g))),
                  (f &= n.done),
                  n.done || (e++, (p += n.tick(b)));
            return (
              (d = p / e),
              r.update(M.tick(b, d)),
              r.done() || f || s
                ? (r.update(100),
                  j.trigger("done"),
                  setTimeout(function() {
                    return r.finish(), (j.running = !1), j.trigger("hide");
                  }, Math.max(D.ghostTime, Math.max(D.minTime - (C() - a), 0))))
                : c()
            );
          }))
        );
      }),
      (j.start = function(a) {
        v(D, a), (j.running = !0);
        try {
          r.render();
        } catch (b) {
          i = b;
        }
        return document.querySelector(".pace")
          ? (j.trigger("start"), j.go())
          : setTimeout(j.start, 50);
      }),
      "function" == typeof define && define.amd
        ? define(["pace"], function() {
            return j;
          })
        : "object" == typeof exports
        ? (module.exports = j)
        : D.startOnPageLoad && j.start();
  }.call(this),
  (function(a, b, c) {
    "use strict";
    function d(a, b) {
      return (
        (b = b || Error),
        function() {
          var c,
            d,
            e = 2,
            f = arguments,
            g = f[0],
            h = "[" + (a ? a + ":" : "") + g + "] ",
            i = f[1];
          for (
            h += i.replace(/\{\d+\}/g, function(a) {
              var b = +a.slice(1, -1),
                c = b + e;
              return c < f.length ? ua(f[c]) : a;
            }),
              h +=
                "\nhttp://errors.angularjs.org/1.5.3/" + (a ? a + "/" : "") + g,
              d = e,
              c = "?";
            d < f.length;
            d++, c = "&"
          )
            h += c + "p" + (d - e) + "=" + encodeURIComponent(ua(f[d]));
          return new b(h);
        }
      );
    }
    function e(a) {
      if (null == a || C(a)) return !1;
      if (Td(a) || x(a) || (Id && a instanceof Id)) return !0;
      var b = "length" in Object(a) && a.length;
      return (
        y(b) &&
        ((b >= 0 && (b - 1 in a || a instanceof Array)) ||
          "function" == typeof a.item)
      );
    }
    function f(a, b, c) {
      var d, g;
      if (a)
        if (A(a))
          for (d in a)
            "prototype" == d ||
              "length" == d ||
              "name" == d ||
              (a.hasOwnProperty && !a.hasOwnProperty(d)) ||
              b.call(c, a[d], d, a);
        else if (Td(a) || e(a)) {
          var h = "object" != typeof a;
          for (d = 0, g = a.length; g > d; d++)
            (h || d in a) && b.call(c, a[d], d, a);
        } else if (a.forEach && a.forEach !== f) a.forEach(b, c, a);
        else if (w(a)) for (d in a) b.call(c, a[d], d, a);
        else if ("function" == typeof a.hasOwnProperty)
          for (d in a) a.hasOwnProperty(d) && b.call(c, a[d], d, a);
        else for (d in a) Cd.call(a, d) && b.call(c, a[d], d, a);
      return a;
    }
    function g(a, b, c) {
      for (var d = Object.keys(a).sort(), e = 0; e < d.length; e++)
        b.call(c, a[d[e]], d[e]);
      return d;
    }
    function h(a) {
      return function(b, c) {
        a(c, b);
      };
    }
    function i() {
      return ++Sd;
    }
    function j(a, b) {
      b ? (a.$$hashKey = b) : delete a.$$hashKey;
    }
    function k(a, b, c) {
      for (var d = a.$$hashKey, e = 0, f = b.length; f > e; ++e) {
        var g = b[e];
        if (v(g) || A(g))
          for (var h = Object.keys(g), i = 0, l = h.length; l > i; i++) {
            var m = h[i],
              n = g[m];
            c && v(n)
              ? z(n)
                ? (a[m] = new Date(n.valueOf()))
                : B(n)
                ? (a[m] = new RegExp(n))
                : n.nodeName
                ? (a[m] = n.cloneNode(!0))
                : L(n)
                ? (a[m] = n.clone())
                : (v(a[m]) || (a[m] = Td(n) ? [] : {}), k(a[m], [n], !0))
              : (a[m] = n);
          }
      }
      return j(a, d), a;
    }
    function l(a) {
      return k(a, Ld.call(arguments, 1), !1);
    }
    function m(a) {
      return k(a, Ld.call(arguments, 1), !0);
    }
    function n(a) {
      return parseInt(a, 10);
    }
    function o(a, b) {
      return l(Object.create(a), b);
    }
    function p() {}
    function q(a) {
      return a;
    }
    function r(a) {
      return function() {
        return a;
      };
    }
    function s(a) {
      return A(a.toString) && a.toString !== Od;
    }
    function t(a) {
      return "undefined" == typeof a;
    }
    function u(a) {
      return "undefined" != typeof a;
    }
    function v(a) {
      return null !== a && "object" == typeof a;
    }
    function w(a) {
      return null !== a && "object" == typeof a && !Pd(a);
    }
    function x(a) {
      return "string" == typeof a;
    }
    function y(a) {
      return "number" == typeof a;
    }
    function z(a) {
      return "[object Date]" === Od.call(a);
    }
    function A(a) {
      return "function" == typeof a;
    }
    function B(a) {
      return "[object RegExp]" === Od.call(a);
    }
    function C(a) {
      return a && a.window === a;
    }
    function D(a) {
      return a && a.$evalAsync && a.$watch;
    }
    function E(a) {
      return "[object File]" === Od.call(a);
    }
    function F(a) {
      return "[object FormData]" === Od.call(a);
    }
    function G(a) {
      return "[object Blob]" === Od.call(a);
    }
    function H(a) {
      return "boolean" == typeof a;
    }
    function I(a) {
      return a && A(a.then);
    }
    function J(a) {
      return a && y(a.length) && Ud.test(Od.call(a));
    }
    function K(a) {
      return "[object ArrayBuffer]" === Od.call(a);
    }
    function L(a) {
      return !(!a || !(a.nodeName || (a.prop && a.attr && a.find)));
    }
    function M(a) {
      var b,
        c = {},
        d = a.split(",");
      for (b = 0; b < d.length; b++) c[d[b]] = !0;
      return c;
    }
    function N(a) {
      return Dd(a.nodeName || (a[0] && a[0].nodeName));
    }
    function O(a, b) {
      var c = a.indexOf(b);
      return c >= 0 && a.splice(c, 1), c;
    }
    function P(a, b) {
      function d(a, b) {
        var c,
          d = b.$$hashKey;
        if (Td(a)) for (var f = 0, g = a.length; g > f; f++) b.push(e(a[f]));
        else if (w(a)) for (c in a) b[c] = e(a[c]);
        else if (a && "function" == typeof a.hasOwnProperty)
          for (c in a) a.hasOwnProperty(c) && (b[c] = e(a[c]));
        else for (c in a) Cd.call(a, c) && (b[c] = e(a[c]));
        return j(b, d), b;
      }
      function e(a) {
        if (!v(a)) return a;
        var b = h.indexOf(a);
        if (-1 !== b) return i[b];
        if (C(a) || D(a))
          throw Qd(
            "cpws",
            "Can't copy! Making copies of Window or Scope instances is not supported."
          );
        var e = !1,
          f = g(a);
        return (
          f === c && ((f = Td(a) ? [] : Object.create(Pd(a))), (e = !0)),
          h.push(a),
          i.push(f),
          e ? d(a, f) : f
        );
      }
      function g(a) {
        switch (Od.call(a)) {
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return new a.constructor(e(a.buffer));
          case "[object ArrayBuffer]":
            if (!a.slice) {
              var b = new ArrayBuffer(a.byteLength);
              return new Uint8Array(b).set(new Uint8Array(a)), b;
            }
            return a.slice(0);
          case "[object Boolean]":
          case "[object Number]":
          case "[object String]":
          case "[object Date]":
            return new a.constructor(a.valueOf());
          case "[object RegExp]":
            var c = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]);
            return (c.lastIndex = a.lastIndex), c;
          case "[object Blob]":
            return new a.constructor([a], { type: a.type });
        }
        return A(a.cloneNode) ? a.cloneNode(!0) : void 0;
      }
      var h = [],
        i = [];
      if (b) {
        if (J(b) || K(b))
          throw Qd(
            "cpta",
            "Can't copy! TypedArray destination cannot be mutated."
          );
        if (a === b)
          throw Qd("cpi", "Can't copy! Source and destination are identical.");
        return (
          Td(b)
            ? (b.length = 0)
            : f(b, function(a, c) {
                "$$hashKey" !== c && delete b[c];
              }),
          h.push(a),
          i.push(b),
          d(a, b)
        );
      }
      return e(a);
    }
    function Q(a, b) {
      if (Td(a)) {
        b = b || [];
        for (var c = 0, d = a.length; d > c; c++) b[c] = a[c];
      } else if (v(a)) {
        b = b || {};
        for (var e in a)
          ("$" !== e.charAt(0) || "$" !== e.charAt(1)) && (b[e] = a[e]);
      }
      return b || a;
    }
    function R(a, b) {
      if (a === b) return !0;
      if (null === a || null === b) return !1;
      if (a !== a && b !== b) return !0;
      var c,
        d,
        e,
        f = typeof a,
        g = typeof b;
      if (f == g && "object" == f) {
        if (!Td(a)) {
          if (z(a)) return z(b) ? R(a.getTime(), b.getTime()) : !1;
          if (B(a)) return B(b) ? a.toString() == b.toString() : !1;
          if (D(a) || D(b) || C(a) || C(b) || Td(b) || z(b) || B(b)) return !1;
          e = ra();
          for (d in a)
            if ("$" !== d.charAt(0) && !A(a[d])) {
              if (!R(a[d], b[d])) return !1;
              e[d] = !0;
            }
          for (d in b)
            if (!(d in e) && "$" !== d.charAt(0) && u(b[d]) && !A(b[d]))
              return !1;
          return !0;
        }
        if (!Td(b)) return !1;
        if ((c = a.length) == b.length) {
          for (d = 0; c > d; d++) if (!R(a[d], b[d])) return !1;
          return !0;
        }
      }
      return !1;
    }
    function S(a, b, c) {
      return a.concat(Ld.call(b, c));
    }
    function T(a, b) {
      return Ld.call(a, b || 0);
    }
    function U(a, b) {
      var c = arguments.length > 2 ? T(arguments, 2) : [];
      return !A(b) || b instanceof RegExp
        ? b
        : c.length
        ? function() {
            return arguments.length
              ? b.apply(a, S(c, arguments, 0))
              : b.apply(a, c);
          }
        : function() {
            return arguments.length ? b.apply(a, arguments) : b.call(a);
          };
    }
    function V(a, d) {
      var e = d;
      return (
        "string" == typeof a && "$" === a.charAt(0) && "$" === a.charAt(1)
          ? (e = c)
          : C(d)
          ? (e = "$WINDOW")
          : d && b === d
          ? (e = "$DOCUMENT")
          : D(d) && (e = "$SCOPE"),
        e
      );
    }
    function W(a, b) {
      return t(a) ? c : (y(b) || (b = b ? 2 : null), JSON.stringify(a, V, b));
    }
    function X(a) {
      return x(a) ? JSON.parse(a) : a;
    }
    function Y(a, b) {
      a = a.replace(Zd, "");
      var c = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6e4;
      return isNaN(c) ? b : c;
    }
    function Z(a, b) {
      return (a = new Date(a.getTime())), a.setMinutes(a.getMinutes() + b), a;
    }
    function $(a, b, c) {
      c = c ? -1 : 1;
      var d = a.getTimezoneOffset(),
        e = Y(b, d);
      return Z(a, c * (e - d));
    }
    function _(a) {
      a = Id(a).clone();
      try {
        a.empty();
      } catch (b) {}
      var c = Id("<div>")
        .append(a)
        .html();
      try {
        return a[0].nodeType === de
          ? Dd(c)
          : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
              return "<" + Dd(b);
            });
      } catch (b) {
        return Dd(c);
      }
    }
    function aa(a) {
      try {
        return decodeURIComponent(a);
      } catch (b) {}
    }
    function ba(a) {
      var b = {};
      return (
        f((a || "").split("&"), function(a) {
          var c, d, e;
          a &&
            ((d = a = a.replace(/\+/g, "%20")),
            (c = a.indexOf("=")),
            -1 !== c && ((d = a.substring(0, c)), (e = a.substring(c + 1))),
            (d = aa(d)),
            u(d) &&
              ((e = u(e) ? aa(e) : !0),
              Cd.call(b, d)
                ? Td(b[d])
                  ? b[d].push(e)
                  : (b[d] = [b[d], e])
                : (b[d] = e)));
        }),
        b
      );
    }
    function ca(a) {
      var b = [];
      return (
        f(a, function(a, c) {
          Td(a)
            ? f(a, function(a) {
                b.push(ea(c, !0) + (a === !0 ? "" : "=" + ea(a, !0)));
              })
            : b.push(ea(c, !0) + (a === !0 ? "" : "=" + ea(a, !0)));
        }),
        b.length ? b.join("&") : ""
      );
    }
    function da(a) {
      return ea(a, !0)
        .replace(/%26/gi, "&")
        .replace(/%3D/gi, "=")
        .replace(/%2B/gi, "+");
    }
    function ea(a, b) {
      return encodeURIComponent(a)
        .replace(/%40/gi, "@")
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%3B/gi, ";")
        .replace(/%20/g, b ? "%20" : "+");
    }
    function fa(a, b) {
      var c,
        d,
        e = $d.length;
      for (d = 0; e > d; ++d)
        if (((c = $d[d] + b), x((c = a.getAttribute(c))))) return c;
      return null;
    }
    function ga(a, b) {
      var c,
        d,
        e = {};
      f($d, function(b) {
        var e = b + "app";
        !c &&
          a.hasAttribute &&
          a.hasAttribute(e) &&
          ((c = a), (d = a.getAttribute(e)));
      }),
        f($d, function(b) {
          var e,
            f = b + "app";
          !c &&
            (e = a.querySelector("[" + f.replace(":", "\\:") + "]")) &&
            ((c = e), (d = e.getAttribute(f)));
        }),
        c &&
          ((e.strictDi = null !== fa(c, "strict-di")), b(c, d ? [d] : [], e));
    }
    function ha(c, d, e) {
      v(e) || (e = {});
      var g = { strictDi: !1 };
      e = l(g, e);
      var h = function() {
          if (((c = Id(c)), c.injector())) {
            var a = c[0] === b ? "document" : _(c);
            throw Qd(
              "btstrpd",
              "App Already Bootstrapped with this Element '{0}'",
              a.replace(/</, "&lt;").replace(/>/, "&gt;")
            );
          }
          (d = d || []),
            d.unshift([
              "$provide",
              function(a) {
                a.value("$rootElement", c);
              }
            ]),
            e.debugInfoEnabled &&
              d.push([
                "$compileProvider",
                function(a) {
                  a.debugInfoEnabled(!0);
                }
              ]),
            d.unshift("ng");
          var f = eb(d, e.strictDi);
          return (
            f.invoke([
              "$rootScope",
              "$rootElement",
              "$compile",
              "$injector",
              function(a, b, c, d) {
                a.$apply(function() {
                  b.data("$injector", d), c(b)(a);
                });
              }
            ]),
            f
          );
        },
        i = /^NG_ENABLE_DEBUG_INFO!/,
        j = /^NG_DEFER_BOOTSTRAP!/;
      return (
        a &&
          i.test(a.name) &&
          ((e.debugInfoEnabled = !0), (a.name = a.name.replace(i, ""))),
        a && !j.test(a.name)
          ? h()
          : ((a.name = a.name.replace(j, "")),
            (Rd.resumeBootstrap = function(a) {
              return (
                f(a, function(a) {
                  d.push(a);
                }),
                h()
              );
            }),
            void (
              A(Rd.resumeDeferredBootstrap) && Rd.resumeDeferredBootstrap()
            ))
      );
    }
    function ia() {
      (a.name = "NG_ENABLE_DEBUG_INFO!" + a.name), a.location.reload();
    }
    function ja(a) {
      var b = Rd.element(a).injector();
      if (!b)
        throw Qd(
          "test",
          "no injector found for element argument to getTestability"
        );
      return b.get("$$testability");
    }
    function ka(a, b) {
      return (
        (b = b || "_"),
        a.replace(_d, function(a, c) {
          return (c ? b : "") + a.toLowerCase();
        })
      );
    }
    function la() {
      var b;
      if (!ae) {
        var d = Yd();
        (Jd = t(d) ? a.jQuery : d ? a[d] : c),
          Jd && Jd.fn.on
            ? ((Id = Jd),
              l(Jd.fn, {
                scope: we.scope,
                isolateScope: we.isolateScope,
                controller: we.controller,
                injector: we.injector,
                inheritedData: we.inheritedData
              }),
              (b = Jd.cleanData),
              (Jd.cleanData = function(a) {
                for (var c, d, e = 0; null != (d = a[e]); e++)
                  (c = Jd._data(d, "events")),
                    c && c.$destroy && Jd(d).triggerHandler("$destroy");
                b(a);
              }))
            : (Id = Fa),
          (Rd.element = Id),
          (ae = !0);
      }
    }
    function ma(a, b, c) {
      if (!a)
        throw Qd("areq", "Argument '{0}' is {1}", b || "?", c || "required");
      return a;
    }
    function na(a, b, c) {
      return (
        c && Td(a) && (a = a[a.length - 1]),
        ma(
          A(a),
          b,
          "not a function, got " +
            (a && "object" == typeof a
              ? a.constructor.name || "Object"
              : typeof a)
        ),
        a
      );
    }
    function oa(a, b) {
      if ("hasOwnProperty" === a)
        throw Qd("badname", "hasOwnProperty is not a valid {0} name", b);
    }
    function pa(a, b, c) {
      if (!b) return a;
      for (var d, e = b.split("."), f = a, g = e.length, h = 0; g > h; h++)
        (d = e[h]), a && (a = (f = a)[d]);
      return !c && A(a) ? U(f, a) : a;
    }
    function qa(a) {
      for (
        var b, c = a[0], d = a[a.length - 1], e = 1;
        c !== d && (c = c.nextSibling);
        e++
      )
        (b || a[e] !== c) && (b || (b = Id(Ld.call(a, 0, e))), b.push(c));
      return b || a;
    }
    function ra() {
      return Object.create(null);
    }
    function sa(a) {
      function b(a, b, c) {
        return a[b] || (a[b] = c());
      }
      var c = d("$injector"),
        e = d("ng"),
        f = b(a, "angular", Object);
      return (
        (f.$$minErr = f.$$minErr || d),
        b(f, "module", function() {
          var a = {};
          return function(d, f, g) {
            var h = function(a, b) {
              if ("hasOwnProperty" === a)
                throw e("badname", "hasOwnProperty is not a valid {0} name", b);
            };
            return (
              h(d, "module"),
              f && a.hasOwnProperty(d) && (a[d] = null),
              b(a, d, function() {
                function a(a, b, c, d) {
                  return (
                    d || (d = e),
                    function() {
                      return d[c || "push"]([a, b, arguments]), k;
                    }
                  );
                }
                function b(a, b) {
                  return function(c, f) {
                    return (
                      f && A(f) && (f.$$moduleName = d),
                      e.push([a, b, arguments]),
                      k
                    );
                  };
                }
                if (!f)
                  throw c(
                    "nomod",
                    "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.",
                    d
                  );
                var e = [],
                  h = [],
                  i = [],
                  j = a("$injector", "invoke", "push", h),
                  k = {
                    _invokeQueue: e,
                    _configBlocks: h,
                    _runBlocks: i,
                    requires: f,
                    name: d,
                    provider: b("$provide", "provider"),
                    factory: b("$provide", "factory"),
                    service: b("$provide", "service"),
                    value: a("$provide", "value"),
                    constant: a("$provide", "constant", "unshift"),
                    decorator: b("$provide", "decorator"),
                    animation: b("$animateProvider", "register"),
                    filter: b("$filterProvider", "register"),
                    controller: b("$controllerProvider", "register"),
                    directive: b("$compileProvider", "directive"),
                    component: b("$compileProvider", "component"),
                    config: j,
                    run: function(a) {
                      return i.push(a), this;
                    }
                  };
                return g && j(g), k;
              })
            );
          };
        })
      );
    }
    function ta(a) {
      var b = [];
      return JSON.stringify(a, function(a, c) {
        if (((c = V(a, c)), v(c))) {
          if (b.indexOf(c) >= 0) return "...";
          b.push(c);
        }
        return c;
      });
    }
    function ua(a) {
      return "function" == typeof a
        ? a.toString().replace(/ \{[\s\S]*$/, "")
        : t(a)
        ? "undefined"
        : "string" != typeof a
        ? ta(a)
        : a;
    }
    function va(b) {
      l(b, {
        bootstrap: ha,
        copy: P,
        extend: l,
        merge: m,
        equals: R,
        element: Id,
        forEach: f,
        injector: eb,
        noop: p,
        bind: U,
        toJson: W,
        fromJson: X,
        identity: q,
        isUndefined: t,
        isDefined: u,
        isString: x,
        isFunction: A,
        isObject: v,
        isNumber: y,
        isElement: L,
        isArray: Td,
        version: he,
        isDate: z,
        lowercase: Dd,
        uppercase: Ed,
        callbacks: { counter: 0 },
        getTestability: ja,
        $$minErr: d,
        $$csp: Xd,
        reloadWithDebugInfo: ia
      }),
        (Kd = sa(a))(
          "ng",
          ["ngLocale"],
          [
            "$provide",
            function(a) {
              a.provider({ $$sanitizeUri: wc }),
                a
                  .provider("$compile", ob)
                  .directive({
                    a: Df,
                    input: Wf,
                    textarea: Wf,
                    form: If,
                    script: Rg,
                    select: Ug,
                    style: Wg,
                    option: Vg,
                    ngBind: Zf,
                    ngBindHtml: _f,
                    ngBindTemplate: $f,
                    ngClass: bg,
                    ngClassEven: dg,
                    ngClassOdd: cg,
                    ngCloak: eg,
                    ngController: fg,
                    ngForm: Jf,
                    ngHide: Kg,
                    ngIf: ig,
                    ngInclude: jg,
                    ngInit: lg,
                    ngNonBindable: Bg,
                    ngPluralize: Fg,
                    ngRepeat: Gg,
                    ngShow: Jg,
                    ngStyle: Lg,
                    ngSwitch: Mg,
                    ngSwitchWhen: Ng,
                    ngSwitchDefault: Og,
                    ngOptions: Eg,
                    ngTransclude: Qg,
                    ngModel: yg,
                    ngList: mg,
                    ngChange: ag,
                    pattern: Yg,
                    ngPattern: Yg,
                    required: Xg,
                    ngRequired: Xg,
                    minlength: $g,
                    ngMinlength: $g,
                    maxlength: Zg,
                    ngMaxlength: Zg,
                    ngValue: Yf,
                    ngModelOptions: Ag
                  })
                  .directive({ ngInclude: kg })
                  .directive(Ef)
                  .directive(gg),
                a.provider({
                  $anchorScroll: fb,
                  $animate: Me,
                  $animateCss: Pe,
                  $$animateJs: Ke,
                  $$animateQueue: Le,
                  $$AnimateRunner: Oe,
                  $$animateAsyncRun: Ne,
                  $browser: lb,
                  $cacheFactory: mb,
                  $controller: tb,
                  $document: ub,
                  $exceptionHandler: vb,
                  $filter: Kc,
                  $$forceReflow: Ue,
                  $interpolate: Jb,
                  $interval: Kb,
                  $http: Fb,
                  $httpParamSerializer: xb,
                  $httpParamSerializerJQLike: yb,
                  $httpBackend: Hb,
                  $xhrFactory: Gb,
                  $location: Yb,
                  $log: Zb,
                  $parse: qc,
                  $rootScope: vc,
                  $q: rc,
                  $$q: sc,
                  $sce: Ac,
                  $sceDelegate: zc,
                  $sniffer: Bc,
                  $templateCache: nb,
                  $templateRequest: Cc,
                  $$testability: Dc,
                  $timeout: Ec,
                  $window: Hc,
                  $$rAF: uc,
                  $$jqLite: $a,
                  $$HashMap: Ae,
                  $$cookieReader: Jc
                });
            }
          ]
        );
    }
    function wa() {
      return ++je;
    }
    function xa(a) {
      return a
        .replace(me, function(a, b, c, d) {
          return d ? c.toUpperCase() : c;
        })
        .replace(ne, "Moz$1");
    }
    function ya(a) {
      return !re.test(a);
    }
    function za(a) {
      var b = a.nodeType;
      return b === be || !b || b === fe;
    }
    function Aa(a) {
      for (var b in ie[a.ng339]) return !0;
      return !1;
    }
    function Ba(a) {
      for (var b = 0, c = a.length; c > b; b++) Ja(a[b]);
    }
    function Ca(a, b) {
      var c,
        d,
        e,
        g,
        h = b.createDocumentFragment(),
        i = [];
      if (ya(a)) i.push(b.createTextNode(a));
      else {
        for (
          c = c || h.appendChild(b.createElement("div")),
            d = (se.exec(a) || ["", ""])[1].toLowerCase(),
            e = ue[d] || ue._default,
            c.innerHTML = e[1] + a.replace(te, "<$1></$2>") + e[2],
            g = e[0];
          g--;

        )
          c = c.lastChild;
        (i = S(i, c.childNodes)), (c = h.firstChild), (c.textContent = "");
      }
      return (
        (h.textContent = ""),
        (h.innerHTML = ""),
        f(i, function(a) {
          h.appendChild(a);
        }),
        h
      );
    }
    function Da(a, c) {
      c = c || b;
      var d;
      return (d = qe.exec(a))
        ? [c.createElement(d[1])]
        : (d = Ca(a, c))
        ? d.childNodes
        : [];
    }
    function Ea(a, b) {
      var c = a.parentNode;
      c && c.replaceChild(b, a), b.appendChild(a);
    }
    function Fa(a) {
      if (a instanceof Fa) return a;
      var b;
      if ((x(a) && ((a = Vd(a)), (b = !0)), !(this instanceof Fa))) {
        if (b && "<" != a.charAt(0))
          throw pe(
            "nosel",
            "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element"
          );
        return new Fa(a);
      }
      b ? Pa(this, Da(a)) : Pa(this, a);
    }
    function Ga(a) {
      return a.cloneNode(!0);
    }
    function Ha(a, b) {
      if ((b || Ja(a), a.querySelectorAll))
        for (var c = a.querySelectorAll("*"), d = 0, e = c.length; e > d; d++)
          Ja(c[d]);
    }
    function Ia(a, b, c, d) {
      if (u(d))
        throw pe(
          "offargs",
          "jqLite#off() does not support the `selector` argument"
        );
      var e = Ka(a),
        g = e && e.events,
        h = e && e.handle;
      if (h)
        if (b) {
          var i = function(b) {
            var d = g[b];
            u(c) && O(d || [], c),
              (u(c) && d && d.length > 0) || (le(a, b, h), delete g[b]);
          };
          f(b.split(" "), function(a) {
            i(a), oe[a] && i(oe[a]);
          });
        } else for (b in g) "$destroy" !== b && le(a, b, h), delete g[b];
    }
    function Ja(a, b) {
      var d = a.ng339,
        e = d && ie[d];
      if (e) {
        if (b) return void delete e.data[b];
        e.handle && (e.events.$destroy && e.handle({}, "$destroy"), Ia(a)),
          delete ie[d],
          (a.ng339 = c);
      }
    }
    function Ka(a, b) {
      var d = a.ng339,
        e = d && ie[d];
      return (
        b &&
          !e &&
          ((a.ng339 = d = wa()),
          (e = ie[d] = { events: {}, data: {}, handle: c })),
        e
      );
    }
    function La(a, b, c) {
      if (za(a)) {
        var d = u(c),
          e = !d && b && !v(b),
          f = !b,
          g = Ka(a, !e),
          h = g && g.data;
        if (d) h[b] = c;
        else {
          if (f) return h;
          if (e) return h && h[b];
          l(h, b);
        }
      }
    }
    function Ma(a, b) {
      return a.getAttribute
        ? (" " + (a.getAttribute("class") || "") + " ")
            .replace(/[\n\t]/g, " ")
            .indexOf(" " + b + " ") > -1
        : !1;
    }
    function Na(a, b) {
      b &&
        a.setAttribute &&
        f(b.split(" "), function(b) {
          a.setAttribute(
            "class",
            Vd(
              (" " + (a.getAttribute("class") || "") + " ")
                .replace(/[\n\t]/g, " ")
                .replace(" " + Vd(b) + " ", " ")
            )
          );
        });
    }
    function Oa(a, b) {
      if (b && a.setAttribute) {
        var c = (" " + (a.getAttribute("class") || "") + " ").replace(
          /[\n\t]/g,
          " "
        );
        f(b.split(" "), function(a) {
          (a = Vd(a)), -1 === c.indexOf(" " + a + " ") && (c += a + " ");
        }),
          a.setAttribute("class", Vd(c));
      }
    }
    function Pa(a, b) {
      if (b)
        if (b.nodeType) a[a.length++] = b;
        else {
          var c = b.length;
          if ("number" == typeof c && b.window !== b) {
            if (c) for (var d = 0; c > d; d++) a[a.length++] = b[d];
          } else a[a.length++] = b;
        }
    }
    function Qa(a, b) {
      return Ra(a, "$" + (b || "ngController") + "Controller");
    }
    function Ra(a, b, c) {
      a.nodeType == fe && (a = a.documentElement);
      for (var d = Td(b) ? b : [b]; a; ) {
        for (var e = 0, f = d.length; f > e; e++)
          if (u((c = Id.data(a, d[e])))) return c;
        a = a.parentNode || (a.nodeType === ge && a.host);
      }
    }
    function Sa(a) {
      for (Ha(a, !0); a.firstChild; ) a.removeChild(a.firstChild);
    }
    function Ta(a, b) {
      b || Ha(a);
      var c = a.parentNode;
      c && c.removeChild(a);
    }
    function Ua(b, c) {
      (c = c || a),
        "complete" === c.document.readyState
          ? c.setTimeout(b)
          : Id(c).on("load", b);
    }
    function Va(a, b) {
      var c = xe[b.toLowerCase()];
      return c && ye[N(a)] && c;
    }
    function Wa(a) {
      return ze[a];
    }
    function Xa(a, b) {
      var c = function(c, d) {
        c.isDefaultPrevented = function() {
          return c.defaultPrevented;
        };
        var e = b[d || c.type],
          f = e ? e.length : 0;
        if (f) {
          if (t(c.immediatePropagationStopped)) {
            var g = c.stopImmediatePropagation;
            c.stopImmediatePropagation = function() {
              (c.immediatePropagationStopped = !0),
                c.stopPropagation && c.stopPropagation(),
                g && g.call(c);
            };
          }
          c.isImmediatePropagationStopped = function() {
            return c.immediatePropagationStopped === !0;
          };
          var h = e.specialHandlerWrapper || Ya;
          f > 1 && (e = Q(e));
          for (var i = 0; f > i; i++)
            c.isImmediatePropagationStopped() || h(a, c, e[i]);
        }
      };
      return (c.elem = a), c;
    }
    function Ya(a, b, c) {
      c.call(a, b);
    }
    function Za(a, b, c) {
      var d = b.relatedTarget;
      (!d || (d !== a && !ve.call(a, d))) && c.call(a, b);
    }
    function $a() {
      this.$get = function() {
        return l(Fa, {
          hasClass: function(a, b) {
            return a.attr && (a = a[0]), Ma(a, b);
          },
          addClass: function(a, b) {
            return a.attr && (a = a[0]), Oa(a, b);
          },
          removeClass: function(a, b) {
            return a.attr && (a = a[0]), Na(a, b);
          }
        });
      };
    }
    function _a(a, b) {
      var c = a && a.$$hashKey;
      if (c) return "function" == typeof c && (c = a.$$hashKey()), c;
      var d = typeof a;
      return (c =
        "function" == d || ("object" == d && null !== a)
          ? (a.$$hashKey = d + ":" + (b || i)())
          : d + ":" + a);
    }
    function ab(a, b) {
      if (b) {
        var c = 0;
        this.nextUid = function() {
          return ++c;
        };
      }
      f(a, this.put, this);
    }
    function bb(a) {
      var b = a.toString().replace(Fe, ""),
        c = b.match(Be) || b.match(Ce);
      return c;
    }
    function cb(a) {
      var b = bb(a);
      return b
        ? "function(" + (b[1] || "").replace(/[\s\r\n]+/, " ") + ")"
        : "fn";
    }
    function db(a, b, c) {
      var d, e, g;
      if ("function" == typeof a) {
        if (!(d = a.$inject)) {
          if (((d = []), a.length)) {
            if (b)
              throw ((x(c) && c) || (c = a.name || cb(a)),
              Ge(
                "strictdi",
                "{0} is not using explicit annotation and cannot be invoked in strict mode",
                c
              ));
            (e = bb(a)),
              f(e[1].split(De), function(a) {
                a.replace(Ee, function(a, b, c) {
                  d.push(c);
                });
              });
          }
          a.$inject = d;
        }
      } else
        Td(a)
          ? ((g = a.length - 1), na(a[g], "fn"), (d = a.slice(0, g)))
          : na(a, "fn", !0);
      return d;
    }
    function eb(a, b) {
      function d(a) {
        return function(b, c) {
          return v(b) ? void f(b, h(a)) : a(b, c);
        };
      }
      function e(a, b) {
        if (
          (oa(a, "service"), (A(b) || Td(b)) && (b = y.instantiate(b)), !b.$get)
        )
          throw Ge(
            "pget",
            "Provider '{0}' must define $get factory method.",
            a
          );
        return (w[a + q] = b);
      }
      function g(a, b) {
        return function() {
          var c = C.invoke(b, this);
          if (t(c))
            throw Ge(
              "undef",
              "Provider '{0}' must return a value from $get factory method.",
              a
            );
          return c;
        };
      }
      function i(a, b, c) {
        return e(a, { $get: c !== !1 ? g(a, b) : b });
      }
      function j(a, b) {
        return i(a, [
          "$injector",
          function(a) {
            return a.instantiate(b);
          }
        ]);
      }
      function k(a, b) {
        return i(a, r(b), !1);
      }
      function l(a, b) {
        oa(a, "constant"), (w[a] = b), (z[a] = b);
      }
      function m(a, b) {
        var c = y.get(a + q),
          d = c.$get;
        c.$get = function() {
          var a = C.invoke(d, c);
          return C.invoke(b, null, { $delegate: a });
        };
      }
      function n(a) {
        ma(t(a) || Td(a), "modulesToLoad", "not an array");
        var b,
          c = [];
        return (
          f(a, function(a) {
            function d(a) {
              var b, c;
              for (b = 0, c = a.length; c > b; b++) {
                var d = a[b],
                  e = y.get(d[0]);
                e[d[1]].apply(e, d[2]);
              }
            }
            if (!u.get(a)) {
              u.put(a, !0);
              try {
                x(a)
                  ? ((b = Kd(a)),
                    (c = c.concat(n(b.requires)).concat(b._runBlocks)),
                    d(b._invokeQueue),
                    d(b._configBlocks))
                  : A(a)
                  ? c.push(y.invoke(a))
                  : Td(a)
                  ? c.push(y.invoke(a))
                  : na(a, "module");
              } catch (e) {
                throw (Td(a) && (a = a[a.length - 1]),
                e.message &&
                  e.stack &&
                  -1 == e.stack.indexOf(e.message) &&
                  (e = e.message + "\n" + e.stack),
                Ge(
                  "modulerr",
                  "Failed to instantiate module {0} due to:\n{1}",
                  a,
                  e.stack || e.message || e
                ));
              }
            }
          }),
          c
        );
      }
      function o(a, c) {
        function d(b, d) {
          if (a.hasOwnProperty(b)) {
            if (a[b] === p)
              throw Ge(
                "cdep",
                "Circular dependency found: {0}",
                b + " <- " + s.join(" <- ")
              );
            return a[b];
          }
          try {
            return s.unshift(b), (a[b] = p), (a[b] = c(b, d));
          } catch (e) {
            throw (a[b] === p && delete a[b], e);
          } finally {
            s.shift();
          }
        }
        function e(a, c, e) {
          for (
            var f = [], g = eb.$$annotate(a, b, e), h = 0, i = g.length;
            i > h;
            h++
          ) {
            var j = g[h];
            if ("string" != typeof j)
              throw Ge(
                "itkn",
                "Incorrect injection token! Expected service name as string, got {0}",
                j
              );
            f.push(c && c.hasOwnProperty(j) ? c[j] : d(j, e));
          }
          return f;
        }
        function f(a) {
          return 11 >= Hd
            ? !1
            : "function" == typeof a &&
                /^(?:class\s|constructor\()/.test(
                  Function.prototype.toString.call(a)
                );
        }
        function g(a, b, c, d) {
          "string" == typeof c && ((d = c), (c = null));
          var g = e(a, c, d);
          return (
            Td(a) && (a = a[a.length - 1]),
            f(a)
              ? (g.unshift(null), new (Function.prototype.bind.apply(a, g))())
              : a.apply(b, g)
          );
        }
        function h(a, b, c) {
          var d = Td(a) ? a[a.length - 1] : a,
            f = e(a, b, c);
          return f.unshift(null), new (Function.prototype.bind.apply(d, f))();
        }
        return {
          invoke: g,
          instantiate: h,
          get: d,
          annotate: eb.$$annotate,
          has: function(b) {
            return w.hasOwnProperty(b + q) || a.hasOwnProperty(b);
          }
        };
      }
      b = b === !0;
      var p = {},
        q = "Provider",
        s = [],
        u = new ab([], !0),
        w = {
          $provide: {
            provider: d(e),
            factory: d(i),
            service: d(j),
            value: d(k),
            constant: d(l),
            decorator: m
          }
        },
        y = (w.$injector = o(w, function(a, b) {
          throw (Rd.isString(b) && s.push(b),
          Ge("unpr", "Unknown provider: {0}", s.join(" <- ")));
        })),
        z = {},
        B = o(z, function(a, b) {
          var d = y.get(a + q, b);
          return C.invoke(d.$get, d, c, a);
        }),
        C = B;
      w["$injector" + q] = { $get: r(B) };
      var D = n(a);
      return (
        (C = B.get("$injector")),
        (C.strictDi = b),
        f(D, function(a) {
          a && C.invoke(a);
        }),
        C
      );
    }
    function fb() {
      var a = !0;
      (this.disableAutoScrolling = function() {
        a = !1;
      }),
        (this.$get = [
          "$window",
          "$location",
          "$rootScope",
          function(b, c, d) {
            function e(a) {
              var b = null;
              return (
                Array.prototype.some.call(a, function(a) {
                  return "a" === N(a) ? ((b = a), !0) : void 0;
                }),
                b
              );
            }
            function f() {
              var a = h.yOffset;
              if (A(a)) a = a();
              else if (L(a)) {
                var c = a[0],
                  d = b.getComputedStyle(c);
                a =
                  "fixed" !== d.position ? 0 : c.getBoundingClientRect().bottom;
              } else y(a) || (a = 0);
              return a;
            }
            function g(a) {
              if (a) {
                a.scrollIntoView();
                var c = f();
                if (c) {
                  var d = a.getBoundingClientRect().top;
                  b.scrollBy(0, d - c);
                }
              } else b.scrollTo(0, 0);
            }
            function h(a) {
              a = x(a) ? a : c.hash();
              var b;
              a
                ? (b = i.getElementById(a))
                  ? g(b)
                  : (b = e(i.getElementsByName(a)))
                  ? g(b)
                  : "top" === a && g(null)
                : g(null);
            }
            var i = b.document;
            return (
              a &&
                d.$watch(
                  function() {
                    return c.hash();
                  },
                  function(a, b) {
                    (a !== b || "" !== a) &&
                      Ua(function() {
                        d.$evalAsync(h);
                      });
                  }
                ),
              h
            );
          }
        ]);
    }
    function gb(a, b) {
      return a || b
        ? a
          ? b
            ? (Td(a) && (a = a.join(" ")),
              Td(b) && (b = b.join(" ")),
              a + " " + b)
            : a
          : b
        : "";
    }
    function hb(a) {
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if (c.nodeType === Ie) return c;
      }
    }
    function ib(a) {
      x(a) && (a = a.split(" "));
      var b = ra();
      return (
        f(a, function(a) {
          a.length && (b[a] = !0);
        }),
        b
      );
    }
    function jb(a) {
      return v(a) ? a : {};
    }
    function kb(a, b, c, d) {
      function e(a) {
        try {
          a.apply(null, T(arguments, 1));
        } finally {
          if ((r--, 0 === r))
            for (; s.length; )
              try {
                s.pop()();
              } catch (b) {
                c.error(b);
              }
        }
      }
      function g(a) {
        var b = a.indexOf("#");
        return -1 === b ? "" : a.substr(b);
      }
      function h() {
        (y = null), i(), j();
      }
      function i() {
        (u = z()), (u = t(u) ? null : u), R(u, C) && (u = C), (C = u);
      }
      function j() {
        (w !== k.url() || v !== u) &&
          ((w = k.url()),
          (v = u),
          f(A, function(a) {
            a(k.url(), u);
          }));
      }
      var k = this,
        l = a.location,
        m = a.history,
        n = a.setTimeout,
        o = a.clearTimeout,
        q = {};
      k.isMock = !1;
      var r = 0,
        s = [];
      (k.$$completeOutstandingRequest = e),
        (k.$$incOutstandingRequestCount = function() {
          r++;
        }),
        (k.notifyWhenNoOutstandingRequests = function(a) {
          0 === r ? a() : s.push(a);
        });
      var u,
        v,
        w = l.href,
        x = b.find("base"),
        y = null,
        z = d.history
          ? function() {
              try {
                return m.state;
              } catch (a) {}
            }
          : p;
      i(),
        (v = u),
        (k.url = function(b, c, e) {
          if (
            (t(e) && (e = null),
            l !== a.location && (l = a.location),
            m !== a.history && (m = a.history),
            b)
          ) {
            var f = v === e;
            if (w === b && (!d.history || f)) return k;
            var h = w && Pb(w) === Pb(b);
            return (
              (w = b),
              (v = e),
              !d.history || (h && f)
                ? ((!h || y) && (y = b),
                  c ? l.replace(b) : h ? (l.hash = g(b)) : (l.href = b),
                  l.href !== b && (y = b))
                : (m[c ? "replaceState" : "pushState"](e, "", b), i(), (v = u)),
              k
            );
          }
          return y || l.href.replace(/%27/g, "'");
        }),
        (k.state = function() {
          return u;
        });
      var A = [],
        B = !1,
        C = null;
      (k.onUrlChange = function(b) {
        return (
          B ||
            (d.history && Id(a).on("popstate", h),
            Id(a).on("hashchange", h),
            (B = !0)),
          A.push(b),
          b
        );
      }),
        (k.$$applicationDestroyed = function() {
          Id(a).off("hashchange popstate", h);
        }),
        (k.$$checkUrlChange = j),
        (k.baseHref = function() {
          var a = x.attr("href");
          return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
        }),
        (k.defer = function(a, b) {
          var c;
          return (
            r++,
            (c = n(function() {
              delete q[c], e(a);
            }, b || 0)),
            (q[c] = !0),
            c
          );
        }),
        (k.defer.cancel = function(a) {
          return q[a] ? (delete q[a], o(a), e(p), !0) : !1;
        });
    }
    function lb() {
      this.$get = [
        "$window",
        "$log",
        "$sniffer",
        "$document",
        function(a, b, c, d) {
          return new kb(a, d, b, c);
        }
      ];
    }
    function mb() {
      this.$get = function() {
        function a(a, c) {
          function e(a) {
            a != m &&
              (n ? n == a && (n = a.n) : (n = a),
              f(a.n, a.p),
              f(a, m),
              (m = a),
              (m.n = null));
          }
          function f(a, b) {
            a != b && (a && (a.p = b), b && (b.n = a));
          }
          if (a in b)
            throw d("$cacheFactory")(
              "iid",
              "CacheId '{0}' is already taken!",
              a
            );
          var g = 0,
            h = l({}, c, { id: a }),
            i = ra(),
            j = (c && c.capacity) || Number.MAX_VALUE,
            k = ra(),
            m = null,
            n = null;
          return (b[a] = {
            put: function(a, b) {
              if (!t(b)) {
                if (j < Number.MAX_VALUE) {
                  var c = k[a] || (k[a] = { key: a });
                  e(c);
                }
                return (
                  a in i || g++, (i[a] = b), g > j && this.remove(n.key), b
                );
              }
            },
            get: function(a) {
              if (j < Number.MAX_VALUE) {
                var b = k[a];
                if (!b) return;
                e(b);
              }
              return i[a];
            },
            remove: function(a) {
              if (j < Number.MAX_VALUE) {
                var b = k[a];
                if (!b) return;
                b == m && (m = b.p),
                  b == n && (n = b.n),
                  f(b.n, b.p),
                  delete k[a];
              }
              a in i && (delete i[a], g--);
            },
            removeAll: function() {
              (i = ra()), (g = 0), (k = ra()), (m = n = null);
            },
            destroy: function() {
              (i = null), (h = null), (k = null), delete b[a];
            },
            info: function() {
              return l({}, h, { size: g });
            }
          });
        }
        var b = {};
        return (
          (a.info = function() {
            var a = {};
            return (
              f(b, function(b, c) {
                a[c] = b.info();
              }),
              a
            );
          }),
          (a.get = function(a) {
            return b[a];
          }),
          a
        );
      };
    }
    function nb() {
      this.$get = [
        "$cacheFactory",
        function(a) {
          return a("templates");
        }
      ];
    }
    function ob(a, d) {
      function e(a, b, c) {
        var d = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,
          e = {};
        return (
          f(a, function(a, f) {
            if (a in z) return void (e[f] = z[a]);
            var g = a.match(d);
            if (!g)
              throw Qe(
                "iscp",
                "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}",
                b,
                f,
                a,
                c
                  ? "controller bindings definition"
                  : "isolate scope definition"
              );
            (e[f] = {
              mode: g[1][0],
              collection: "*" === g[2],
              optional: "?" === g[3],
              attrName: g[4] || f
            }),
              g[4] && (z[a] = e[f]);
          }),
          e
        );
      }
      function g(a, b) {
        var c = { isolateScope: null, bindToController: null };
        if (
          (v(a.scope) &&
            (a.bindToController === !0
              ? ((c.bindToController = e(a.scope, b, !0)),
                (c.isolateScope = {}))
              : (c.isolateScope = e(a.scope, b, !1))),
          v(a.bindToController) &&
            (c.bindToController = e(a.bindToController, b, !0)),
          v(c.bindToController))
        ) {
          var d = a.controller,
            f = a.controllerAs;
          if (!d)
            throw Qe(
              "noctrl",
              "Cannot bind to controller without directive '{0}'s controller.",
              b
            );
          if (!sb(d, f))
            throw Qe(
              "noident",
              "Cannot bind to controller without identifier for directive '{0}'.",
              b
            );
        }
        return c;
      }
      function i(a) {
        var b = a.charAt(0);
        if (!b || b !== Dd(b))
          throw Qe(
            "baddir",
            "Directive/Component name '{0}' is invalid. The first character must be a lowercase letter",
            a
          );
        if (a !== a.trim())
          throw Qe(
            "baddir",
            "Directive/Component name '{0}' is invalid. The name should not contain leading or trailing whitespaces",
            a
          );
      }
      var j = {},
        k = "Directive",
        m = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
        n = /(([\w\-]+)(?:\:([^;]+))?;?)/,
        s = M("ngSrc,ngSrcset,src,srcset"),
        w = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
        y = /^(on[a-z]+|formaction)$/,
        z = ra();
      (this.directive = function E(b, c) {
        return (
          oa(b, "directive"),
          x(b)
            ? (i(b),
              ma(c, "directiveFactory"),
              j.hasOwnProperty(b) ||
                ((j[b] = []),
                a.factory(b + k, [
                  "$injector",
                  "$exceptionHandler",
                  function(a, c) {
                    var d = [];
                    return (
                      f(j[b], function(e, f) {
                        try {
                          var g = a.invoke(e);
                          A(g)
                            ? (g = { compile: r(g) })
                            : !g.compile && g.link && (g.compile = r(g.link)),
                            (g.priority = g.priority || 0),
                            (g.index = f),
                            (g.name = g.name || b),
                            (g.require = g.require || (g.controller && g.name)),
                            (g.restrict = g.restrict || "EA"),
                            (g.$$moduleName = e.$$moduleName),
                            d.push(g);
                        } catch (h) {
                          c(h);
                        }
                      }),
                      d
                    );
                  }
                ])),
              j[b].push(c))
            : f(b, h(E)),
          this
        );
      }),
        (this.component = function(a, b) {
          function c(a) {
            function c(b) {
              return A(b) || Td(b)
                ? function(c, d) {
                    return a.invoke(b, this, { $element: c, $attrs: d });
                  }
                : b;
            }
            var e = b.template || b.templateUrl ? b.template : "";
            return {
              controller: d,
              controllerAs: sb(b.controller) || b.controllerAs || "$ctrl",
              template: c(e),
              templateUrl: c(b.templateUrl),
              transclude: b.transclude,
              scope: {},
              bindToController: b.bindings || {},
              restrict: "E",
              require: b.require
            };
          }
          var d = b.controller || p;
          return (
            f(b, function(a, b) {
              "$" === b.charAt(0) && ((c[b] = a), (d[b] = a));
            }),
            (c.$inject = ["$injector"]),
            this.directive(a, c)
          );
        }),
        (this.aHrefSanitizationWhitelist = function(a) {
          return u(a)
            ? (d.aHrefSanitizationWhitelist(a), this)
            : d.aHrefSanitizationWhitelist();
        }),
        (this.imgSrcSanitizationWhitelist = function(a) {
          return u(a)
            ? (d.imgSrcSanitizationWhitelist(a), this)
            : d.imgSrcSanitizationWhitelist();
        });
      var B = !0;
      this.debugInfoEnabled = function(a) {
        return u(a) ? ((B = a), this) : B;
      };
      var C = 10;
      (this.onChangesTtl = function(a) {
        return arguments.length ? ((C = a), this) : C;
      }),
        (this.$get = [
          "$injector",
          "$interpolate",
          "$exceptionHandler",
          "$templateRequest",
          "$parse",
          "$controller",
          "$rootScope",
          "$sce",
          "$animate",
          "$$sanitizeUri",
          function(a, d, e, h, i, r, u, z, E, F) {
            function G() {
              try {
                if (!--ua)
                  throw ((qa = c),
                  Qe(
                    "infchng",
                    "{0} $onChanges() iterations reached. Aborting!\n",
                    C
                  ));
                u.$apply(function() {
                  for (var a = 0, b = qa.length; b > a; ++a) qa[a]();
                  qa = c;
                });
              } finally {
                ua++;
              }
            }
            function I(a, b) {
              if (b) {
                var c,
                  d,
                  e,
                  f = Object.keys(b);
                for (c = 0, d = f.length; d > c; c++)
                  (e = f[c]), (this[e] = b[e]);
              } else this.$attr = {};
              this.$$element = a;
            }
            function J(a, b, c) {
              ta.innerHTML = "<span " + b + ">";
              var d = ta.firstChild.attributes,
                e = d[0];
              d.removeNamedItem(e.name),
                (e.value = c),
                a.attributes.setNamedItem(e);
            }
            function K(a, b) {
              try {
                a.addClass(b);
              } catch (c) {}
            }
            function L(a, c, d, e, f) {
              a instanceof Id || (a = Id(a));
              for (var g = /\S+/, h = 0, i = a.length; i > h; h++) {
                var j = a[h];
                j.nodeType === de &&
                  j.nodeValue.match(g) &&
                  Ea(j, (a[h] = b.createElement("span")));
              }
              var k = P(a, c, a, d, e, f);
              L.$$addScopeClass(a);
              var l = null;
              return function(b, c, d) {
                ma(b, "scope"),
                  f && f.needsNewScope && (b = b.$parent.$new()),
                  (d = d || {});
                var e = d.parentBoundTranscludeFn,
                  g = d.transcludeControllers,
                  h = d.futureParentElement;
                e && e.$$boundTransclude && (e = e.$$boundTransclude),
                  l || (l = M(h));
                var i;
                if (
                  ((i =
                    "html" !== l
                      ? Id(
                          ha(
                            l,
                            Id("<div>")
                              .append(a)
                              .html()
                          )
                        )
                      : c
                      ? we.clone.call(a)
                      : a),
                  g)
                )
                  for (var j in g)
                    i.data("$" + j + "Controller", g[j].instance);
                return (
                  L.$$addScopeInfo(i, b), c && c(i, b), k && k(b, i, i, e), i
                );
              };
            }
            function M(a) {
              var b = a && a[0];
              return b && "foreignobject" !== N(b) && Od.call(b).match(/SVG/)
                ? "svg"
                : "html";
            }
            function P(a, b, d, e, f, g) {
              function h(a, d, e, f) {
                var g, h, i, j, k, l, m, n, q;
                if (o) {
                  var r = d.length;
                  for (q = new Array(r), k = 0; k < p.length; k += 3)
                    (m = p[k]), (q[m] = d[m]);
                } else q = d;
                for (k = 0, l = p.length; l > k; )
                  (i = q[p[k++]]),
                    (g = p[k++]),
                    (h = p[k++]),
                    g
                      ? (g.scope
                          ? ((j = a.$new()), L.$$addScopeInfo(Id(i), j))
                          : (j = a),
                        (n = g.transcludeOnThisElement
                          ? Q(a, g.transclude, f)
                          : !g.templateOnThisElement && f
                          ? f
                          : !f && b
                          ? Q(a, b)
                          : null),
                        g(h, j, i, e, n))
                      : h && h(a, i.childNodes, c, f);
              }
              for (var i, j, k, l, m, n, o, p = [], q = 0; q < a.length; q++)
                (i = new I()),
                  (j = S(a[q], [], i, 0 === q ? e : c, f)),
                  (k = j.length ? X(j, a[q], i, b, d, null, [], [], g) : null),
                  k && k.scope && L.$$addScopeClass(i.$$element),
                  (m =
                    (k && k.terminal) || !(l = a[q].childNodes) || !l.length
                      ? null
                      : P(
                          l,
                          k
                            ? (k.transcludeOnThisElement ||
                                !k.templateOnThisElement) &&
                                k.transclude
                            : b
                        )),
                  (k || m) && (p.push(q, k, m), (n = !0), (o = o || k)),
                  (g = null);
              return n ? h : null;
            }
            function Q(a, b, c) {
              function d(d, e, f, g, h) {
                return (
                  d || ((d = a.$new(!1, h)), (d.$$transcluded = !0)),
                  b(d, e, {
                    parentBoundTranscludeFn: c,
                    transcludeControllers: f,
                    futureParentElement: g
                  })
                );
              }
              var e = (d.$$slots = ra());
              for (var f in b.$$slots)
                b.$$slots[f] ? (e[f] = Q(a, b.$$slots[f], c)) : (e[f] = null);
              return d;
            }
            function S(a, b, c, d, e) {
              var f,
                g,
                h = a.nodeType,
                i = c.$attr;
              switch (h) {
                case be:
                  aa(b, pb(N(a)), "E", d, e);
                  for (
                    var j,
                      k,
                      l,
                      o,
                      p,
                      q,
                      r = a.attributes,
                      s = 0,
                      t = r && r.length;
                    t > s;
                    s++
                  ) {
                    var u = !1,
                      w = !1;
                    (j = r[s]),
                      (k = j.name),
                      (p = Vd(j.value)),
                      (o = pb(k)),
                      (q = za.test(o)) &&
                        (k = k
                          .replace(Re, "")
                          .substr(8)
                          .replace(/_(.)/g, function(a, b) {
                            return b.toUpperCase();
                          }));
                    var y = o.match(Aa);
                    y &&
                      ba(y[1]) &&
                      ((u = k),
                      (w = k.substr(0, k.length - 5) + "end"),
                      (k = k.substr(0, k.length - 6))),
                      (l = pb(k.toLowerCase())),
                      (i[l] = k),
                      (q || !c.hasOwnProperty(l)) &&
                        ((c[l] = p), Va(a, l) && (c[l] = !0)),
                      ja(a, b, p, l, q),
                      aa(b, l, "A", d, e, u, w);
                  }
                  if (
                    ((g = a.className),
                    v(g) && (g = g.animVal),
                    x(g) && "" !== g)
                  )
                    for (; (f = n.exec(g)); )
                      (l = pb(f[2])),
                        aa(b, l, "C", d, e) && (c[l] = Vd(f[3])),
                        (g = g.substr(f.index + f[0].length));
                  break;
                case de:
                  if (11 === Hd)
                    for (
                      ;
                      a.parentNode &&
                      a.nextSibling &&
                      a.nextSibling.nodeType === de;

                    )
                      (a.nodeValue = a.nodeValue + a.nextSibling.nodeValue),
                        a.parentNode.removeChild(a.nextSibling);
                  ga(b, a.nodeValue);
                  break;
                case ee:
                  try {
                    (f = m.exec(a.nodeValue)),
                      f &&
                        ((l = pb(f[1])),
                        aa(b, l, "M", d, e) && (c[l] = Vd(f[2])));
                  } catch (z) {}
              }
              return b.sort(ea), b;
            }
            function U(a, b, c) {
              var d = [],
                e = 0;
              if (b && a.hasAttribute && a.hasAttribute(b)) {
                do {
                  if (!a)
                    throw Qe(
                      "uterdir",
                      "Unterminated attribute, found '{0}' but no matching '{1}' found.",
                      b,
                      c
                    );
                  a.nodeType == be &&
                    (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--),
                    d.push(a),
                    (a = a.nextSibling);
                } while (e > 0);
              } else d.push(a);
              return Id(d);
            }
            function V(a, b, c) {
              return function(d, e, f, g, h) {
                return (e = U(e[0], b, c)), a(d, e, f, g, h);
              };
            }
            function W(a, b, c, d, e, f) {
              var g;
              return a
                ? L(b, c, d, e, f)
                : function() {
                    return (
                      g || ((g = L(b, c, d, e, f)), (b = c = f = null)),
                      g.apply(this, arguments)
                    );
                  };
            }
            function X(a, b, d, g, h, i, j, k, m) {
              function n(a, b, c, d) {
                a &&
                  (c && (a = V(a, c, d)),
                  (a.require = p.require),
                  (a.directiveName = q),
                  (z === p || p.$$isolateScope) &&
                    (a = na(a, { isolateScope: !0 })),
                  j.push(a)),
                  b &&
                    (c && (b = V(b, c, d)),
                    (b.require = p.require),
                    (b.directiveName = q),
                    (z === p || p.$$isolateScope) &&
                      (b = na(b, { isolateScope: !0 })),
                    k.push(b));
              }
              function o(a, e, g, h, i) {
                function m(a, b, d, e) {
                  var f;
                  if (
                    (D(a) || ((e = d), (d = b), (b = a), (a = c)),
                    G && (f = s),
                    d || (d = G ? w.parent() : w),
                    !e)
                  )
                    return i(a, b, f, d, O);
                  var g = i.$$slots[e];
                  if (g) return g(a, b, f, d, O);
                  if (t(g))
                    throw Qe(
                      "noslot",
                      'No parent directive that requires a transclusion with slot name "{0}". Element: {1}',
                      e,
                      _(w)
                    );
                }
                var n, o, p, q, r, s, u, w, C, E, F;
                b === g
                  ? ((C = d), (w = d.$$element))
                  : ((w = Id(g)), (C = new I(w, d))),
                  (r = e),
                  z ? (q = e.$new(!0)) : x && (r = e.$parent),
                  i &&
                    ((u = m),
                    (u.$$boundTransclude = i),
                    (u.isSlotFilled = function(a) {
                      return !!i.$$slots[a];
                    })),
                  y && (s = Z(w, C, u, y, q, e, z)),
                  z &&
                    (L.$$addScopeInfo(
                      w,
                      q,
                      !0,
                      !(B && (B === z || B === z.$$originalDirective))
                    ),
                    L.$$addScopeClass(w, !0),
                    (q.$$isolateBindings = z.$$isolateBindings),
                    (E = pa(e, C, q, q.$$isolateBindings, z)),
                    E && q.$on("$destroy", E));
                for (var H in s) {
                  var J = y[H],
                    K = s[H],
                    M = J.$$bindings.bindToController;
                  K.identifier && M && (F = pa(r, C, K.instance, M, J));
                  var N = K();
                  N !== K.instance &&
                    ((K.instance = N),
                    w.data("$" + J.name + "Controller", N),
                    F && F(),
                    (F = pa(r, C, K.instance, M, J)));
                }
                for (
                  f(y, function(a, b) {
                    var c = a.require;
                    a.bindToController &&
                      !Td(c) &&
                      v(c) &&
                      l(s[b].instance, Y(b, c, w, s));
                  }),
                    f(s, function(a) {
                      var b = a.instance;
                      A(b.$onInit) && b.$onInit(),
                        A(b.$onDestroy) &&
                          r.$on("$destroy", function() {
                            b.$onDestroy();
                          });
                    }),
                    n = 0,
                    o = j.length;
                  o > n;
                  n++
                )
                  (p = j[n]),
                    oa(
                      p,
                      p.isolateScope ? q : e,
                      w,
                      C,
                      p.require && Y(p.directiveName, p.require, w, s),
                      u
                    );
                var O = e;
                for (
                  z && (z.template || null === z.templateUrl) && (O = q),
                    a && a(O, g.childNodes, c, i),
                    n = k.length - 1;
                  n >= 0;
                  n--
                )
                  (p = k[n]),
                    oa(
                      p,
                      p.isolateScope ? q : e,
                      w,
                      C,
                      p.require && Y(p.directiveName, p.require, w, s),
                      u
                    );
                f(s, function(a) {
                  var b = a.instance;
                  A(b.$postLink) && b.$postLink();
                });
              }
              m = m || {};
              for (
                var p,
                  q,
                  r,
                  s,
                  u,
                  w = -Number.MAX_VALUE,
                  x = m.newScopeDirective,
                  y = m.controllerDirectives,
                  z = m.newIsolateScopeDirective,
                  B = m.templateDirective,
                  C = m.nonTlbTranscludeDirective,
                  E = !1,
                  F = !1,
                  G = m.hasElementTranscludeDirective,
                  H = (d.$$element = Id(b)),
                  J = i,
                  K = g,
                  M = !1,
                  O = !1,
                  P = 0,
                  Q = a.length;
                Q > P;
                P++
              ) {
                p = a[P];
                var R = p.$$start,
                  X = p.$$end;
                if ((R && (H = U(b, R, X)), (r = c), w > p.priority)) break;
                if (
                  ((u = p.scope) &&
                    (p.templateUrl ||
                      (v(u)
                        ? (fa("new/isolated scope", z || x, p, H), (z = p))
                        : fa("new/isolated scope", z, p, H)),
                    (x = x || p)),
                  (q = p.name),
                  !M &&
                    ((p.replace && (p.templateUrl || p.template)) ||
                      (p.transclude && !p.$$tlb)))
                ) {
                  for (var aa, ba = P + 1; (aa = a[ba++]); )
                    if (
                      (aa.transclude && !aa.$$tlb) ||
                      (aa.replace && (aa.templateUrl || aa.template))
                    ) {
                      O = !0;
                      break;
                    }
                  M = !0;
                }
                if (
                  (!p.templateUrl &&
                    p.controller &&
                    ((u = p.controller),
                    (y = y || ra()),
                    fa("'" + q + "' controller", y[q], p, H),
                    (y[q] = p)),
                  (u = p.transclude))
                )
                  if (
                    ((E = !0),
                    p.$$tlb || (fa("transclusion", C, p, H), (C = p)),
                    "element" == u)
                  )
                    (G = !0),
                      (w = p.priority),
                      (r = H),
                      (H = d.$$element = Id(L.$$createComment(q, d[q]))),
                      (b = H[0]),
                      la(h, T(r), b),
                      (r[0].$$parentNode = r[0].parentNode),
                      (K = W(O, r, g, w, J && J.name, {
                        nonTlbTranscludeDirective: C
                      }));
                  else {
                    var ea = ra();
                    if (((r = Id(Ga(b)).contents()), v(u))) {
                      r = [];
                      var ga = ra(),
                        ia = ra();
                      f(u, function(a, b) {
                        var c = "?" === a.charAt(0);
                        (a = c ? a.substring(1) : a),
                          (ga[a] = b),
                          (ea[b] = null),
                          (ia[b] = c);
                      }),
                        f(H.contents(), function(a) {
                          var b = ga[pb(N(a))];
                          b
                            ? ((ia[b] = !0),
                              (ea[b] = ea[b] || []),
                              ea[b].push(a))
                            : r.push(a);
                        }),
                        f(ia, function(a, b) {
                          if (!a)
                            throw Qe(
                              "reqslot",
                              "Required transclusion slot `{0}` was not filled.",
                              b
                            );
                        });
                      for (var ja in ea) ea[ja] && (ea[ja] = W(O, ea[ja], g));
                    }
                    H.empty(),
                      (K = W(O, r, g, c, c, {
                        needsNewScope: p.$$isolateScope || p.$$newScope
                      })),
                      (K.$$slots = ea);
                  }
                if (p.template)
                  if (
                    ((F = !0),
                    fa("template", B, p, H),
                    (B = p),
                    (u = A(p.template) ? p.template(H, d) : p.template),
                    (u = xa(u)),
                    p.replace)
                  ) {
                    if (
                      ((J = p),
                      (r = ya(u) ? [] : rb(ha(p.templateNamespace, Vd(u)))),
                      (b = r[0]),
                      1 != r.length || b.nodeType !== be)
                    )
                      throw Qe(
                        "tplrt",
                        "Template for directive '{0}' must have exactly one root element. {1}",
                        q,
                        ""
                      );
                    la(h, H, b);
                    var ka = { $attr: {} },
                      ma = S(b, [], ka),
                      qa = a.splice(P + 1, a.length - (P + 1));
                    (z || x) && $(ma, z, x),
                      (a = a.concat(ma).concat(qa)),
                      ca(d, ka),
                      (Q = a.length);
                  } else H.html(u);
                if (p.templateUrl)
                  (F = !0),
                    fa("template", B, p, H),
                    (B = p),
                    p.replace && (J = p),
                    (o = da(a.splice(P, a.length - P), H, d, h, E && K, j, k, {
                      controllerDirectives: y,
                      newScopeDirective: x !== p && x,
                      newIsolateScopeDirective: z,
                      templateDirective: B,
                      nonTlbTranscludeDirective: C
                    })),
                    (Q = a.length);
                else if (p.compile)
                  try {
                    (s = p.compile(H, d, K)),
                      A(s) ? n(null, s, R, X) : s && n(s.pre, s.post, R, X);
                  } catch (sa) {
                    e(sa, _(H));
                  }
                p.terminal &&
                  ((o.terminal = !0), (w = Math.max(w, p.priority)));
              }
              return (
                (o.scope = x && x.scope === !0),
                (o.transcludeOnThisElement = E),
                (o.templateOnThisElement = F),
                (o.transclude = K),
                (m.hasElementTranscludeDirective = G),
                o
              );
            }
            function Y(a, b, c, d) {
              var e;
              if (x(b)) {
                var g = b.match(w),
                  h = b.substring(g[0].length),
                  i = g[1] || g[3],
                  j = "?" === g[2];
                if (
                  ("^^" === i
                    ? (c = c.parent())
                    : ((e = d && d[h]), (e = e && e.instance)),
                  !e)
                ) {
                  var k = "$" + h + "Controller";
                  e = i ? c.inheritedData(k) : c.data(k);
                }
                if (!e && !j)
                  throw Qe(
                    "ctreq",
                    "Controller '{0}', required by directive '{1}', can't be found!",
                    h,
                    a
                  );
              } else if (Td(b)) {
                e = [];
                for (var l = 0, m = b.length; m > l; l++)
                  e[l] = Y(a, b[l], c, d);
              } else
                v(b) &&
                  ((e = {}),
                  f(b, function(b, f) {
                    e[f] = Y(a, b, c, d);
                  }));
              return e || null;
            }
            function Z(a, b, c, d, e, f, g) {
              var h = ra();
              for (var i in d) {
                var j = d[i],
                  k = {
                    $scope: j === g || j.$$isolateScope ? e : f,
                    $element: a,
                    $attrs: b,
                    $transclude: c
                  },
                  l = j.controller;
                "@" == l && (l = b[j.name]);
                var m = r(l, k, !0, j.controllerAs);
                (h[j.name] = m),
                  a.data("$" + j.name + "Controller", m.instance);
              }
              return h;
            }
            function $(a, b, c) {
              for (var d = 0, e = a.length; e > d; d++)
                a[d] = o(a[d], { $$isolateScope: b, $$newScope: c });
            }
            function aa(b, c, d, f, h, i, l) {
              if (c === h) return null;
              var m = null;
              if (j.hasOwnProperty(c))
                for (var n, p = a.get(c + k), q = 0, r = p.length; r > q; q++)
                  try {
                    if (
                      ((n = p[q]),
                      (t(f) || f > n.priority) && -1 != n.restrict.indexOf(d))
                    ) {
                      if (
                        (i && (n = o(n, { $$start: i, $$end: l })),
                        !n.$$bindings)
                      ) {
                        var s = (n.$$bindings = g(n, n.name));
                        v(s.isolateScope) &&
                          (n.$$isolateBindings = s.isolateScope);
                      }
                      b.push(n), (m = n);
                    }
                  } catch (u) {
                    e(u);
                  }
              return m;
            }
            function ba(b) {
              if (j.hasOwnProperty(b))
                for (var c, d = a.get(b + k), e = 0, f = d.length; f > e; e++)
                  if (((c = d[e]), c.multiElement)) return !0;
              return !1;
            }
            function ca(a, b) {
              var c = b.$attr,
                d = a.$attr,
                e = a.$$element;
              f(a, function(d, e) {
                "$" != e.charAt(0) &&
                  (b[e] &&
                    b[e] !== d &&
                    (d += ("style" === e ? ";" : " ") + b[e]),
                  a.$set(e, d, !0, c[e]));
              }),
                f(b, function(b, f) {
                  "class" == f
                    ? (K(e, b),
                      (a["class"] = (a["class"] ? a["class"] + " " : "") + b))
                    : "style" == f
                    ? (e.attr("style", e.attr("style") + ";" + b),
                      (a.style = (a.style ? a.style + ";" : "") + b))
                    : "$" == f.charAt(0) ||
                      a.hasOwnProperty(f) ||
                      ((a[f] = b), (d[f] = c[f]));
                });
            }
            function da(a, b, c, d, e, g, i, j) {
              var k,
                l,
                m = [],
                n = b[0],
                p = a.shift(),
                q = o(p, {
                  templateUrl: null,
                  transclude: null,
                  replace: null,
                  $$originalDirective: p
                }),
                r = A(p.templateUrl) ? p.templateUrl(b, c) : p.templateUrl,
                s = p.templateNamespace;
              return (
                b.empty(),
                h(r).then(function(h) {
                  var o, t, u, w;
                  if (((h = xa(h)), p.replace)) {
                    if (
                      ((u = ya(h) ? [] : rb(ha(s, Vd(h)))),
                      (o = u[0]),
                      1 != u.length || o.nodeType !== be)
                    )
                      throw Qe(
                        "tplrt",
                        "Template for directive '{0}' must have exactly one root element. {1}",
                        p.name,
                        r
                      );
                    (t = { $attr: {} }), la(d, b, o);
                    var x = S(o, [], t);
                    v(p.scope) && $(x, !0), (a = x.concat(a)), ca(c, t);
                  } else (o = n), b.html(h);
                  for (
                    a.unshift(q),
                      k = X(a, o, c, e, b, p, g, i, j),
                      f(d, function(a, c) {
                        a == o && (d[c] = b[0]);
                      }),
                      l = P(b[0].childNodes, e);
                    m.length;

                  ) {
                    var y = m.shift(),
                      z = m.shift(),
                      A = m.shift(),
                      B = m.shift(),
                      C = b[0];
                    if (!y.$$destroyed) {
                      if (z !== n) {
                        var D = z.className;
                        (j.hasElementTranscludeDirective && p.replace) ||
                          (C = Ga(o)),
                          la(A, Id(z), C),
                          K(Id(C), D);
                      }
                      (w = k.transcludeOnThisElement
                        ? Q(y, k.transclude, B)
                        : B),
                        k(l, y, C, d, w);
                    }
                  }
                  m = null;
                }),
                function(a, b, c, d, e) {
                  var f = e;
                  b.$$destroyed ||
                    (m
                      ? m.push(b, c, d, f)
                      : (k.transcludeOnThisElement &&
                          (f = Q(b, k.transclude, e)),
                        k(l, b, c, d, f)));
                }
              );
            }
            function ea(a, b) {
              var c = b.priority - a.priority;
              return 0 !== c
                ? c
                : a.name !== b.name
                ? a.name < b.name
                  ? -1
                  : 1
                : a.index - b.index;
            }
            function fa(a, b, c, d) {
              function e(a) {
                return a ? " (module: " + a + ")" : "";
              }
              if (b)
                throw Qe(
                  "multidir",
                  "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}",
                  b.name,
                  e(b.$$moduleName),
                  c.name,
                  e(c.$$moduleName),
                  a,
                  _(d)
                );
            }
            function ga(a, b) {
              var c = d(b, !0);
              c &&
                a.push({
                  priority: 0,
                  compile: function(a) {
                    var b = a.parent(),
                      d = !!b.length;
                    return (
                      d && L.$$addBindingClass(b),
                      function(a, b) {
                        var e = b.parent();
                        d || L.$$addBindingClass(e),
                          L.$$addBindingInfo(e, c.expressions),
                          a.$watch(c, function(a) {
                            b[0].nodeValue = a;
                          });
                      }
                    );
                  }
                });
            }
            function ha(a, c) {
              switch ((a = Dd(a || "html"))) {
                case "svg":
                case "math":
                  var d = b.createElement("div");
                  return (
                    (d.innerHTML = "<" + a + ">" + c + "</" + a + ">"),
                    d.childNodes[0].childNodes
                  );
                default:
                  return c;
              }
            }
            function ia(a, b) {
              if ("srcdoc" == b) return z.HTML;
              var c = N(a);
              return "xlinkHref" == b ||
                ("form" == c && "action" == b) ||
                ("img" != c && ("src" == b || "ngSrc" == b))
                ? z.RESOURCE_URL
                : void 0;
            }
            function ja(a, b, c, e, f) {
              var g = ia(a, e);
              f = s[e] || f;
              var h = d(c, !0, g, f);
              if (h) {
                if ("multiple" === e && "select" === N(a))
                  throw Qe(
                    "selmulti",
                    "Binding to the 'multiple' attribute is not supported. Element: {0}",
                    _(a)
                  );
                b.push({
                  priority: 100,
                  compile: function() {
                    return {
                      pre: function(a, b, i) {
                        var j = i.$$observers || (i.$$observers = ra());
                        if (y.test(e))
                          throw Qe(
                            "nodomevents",
                            "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead."
                          );
                        var k = i[e];
                        k !== c && ((h = k && d(k, !0, g, f)), (c = k)),
                          h &&
                            ((i[e] = h(a)),
                            ((j[e] || (j[e] = [])).$$inter = !0),
                            (
                              (i.$$observers && i.$$observers[e].$$scope) ||
                              a
                            ).$watch(h, function(a, b) {
                              "class" === e && a != b
                                ? i.$updateClass(a, b)
                                : i.$set(e, a);
                            }));
                      }
                    };
                  }
                });
              }
            }
            function la(a, c, d) {
              var e,
                f,
                g = c[0],
                h = c.length,
                i = g.parentNode;
              if (a)
                for (e = 0, f = a.length; f > e; e++)
                  if (a[e] == g) {
                    a[e++] = d;
                    for (
                      var j = e, k = j + h - 1, l = a.length;
                      l > j;
                      j++, k++
                    )
                      l > k ? (a[j] = a[k]) : delete a[j];
                    (a.length -= h - 1), a.context === g && (a.context = d);
                    break;
                  }
              i && i.replaceChild(d, g);
              var m = b.createDocumentFragment();
              for (e = 0; h > e; e++) m.appendChild(c[e]);
              for (
                Id.hasData(g) &&
                  (Id.data(d, Id.data(g)), Id(g).off("$destroy")),
                  Id.cleanData(m.querySelectorAll("*")),
                  e = 1;
                h > e;
                e++
              )
                delete c[e];
              (c[0] = d), (c.length = 1);
            }
            function na(a, b) {
              return l(
                function() {
                  return a.apply(null, arguments);
                },
                a,
                b
              );
            }
            function oa(a, b, c, d, f, g) {
              try {
                a(b, c, d, f, g);
              } catch (h) {
                e(h, _(c));
              }
            }
            function pa(a, b, e, g, h) {
              function j(b, c, d) {
                A(e.$onChanges) &&
                  c !== d &&
                  (qa || (a.$$postDigest(G), (qa = [])),
                  l || ((l = {}), qa.push(k)),
                  l[b] && (d = l[b].previousValue),
                  (l[b] = { previousValue: d, currentValue: c }));
              }
              function k() {
                e.$onChanges(l), (l = c);
              }
              var l,
                m = [];
              return (
                f(g, function(c, f) {
                  var g,
                    k,
                    l,
                    n,
                    o,
                    q = c.attrName,
                    r = c.optional,
                    s = c.mode;
                  switch (s) {
                    case "@":
                      r || Cd.call(b, q) || (e[f] = b[q] = void 0),
                        b.$observe(q, function(a) {
                          if (x(a)) {
                            var b = e[f];
                            j(f, a, b), (e[f] = a);
                          }
                        }),
                        (b.$$observers[q].$$scope = a),
                        (g = b[q]),
                        x(g) ? (e[f] = d(g)(a)) : H(g) && (e[f] = g);
                      break;
                    case "=":
                      if (!Cd.call(b, q)) {
                        if (r) break;
                        b[q] = void 0;
                      }
                      if (r && !b[q]) break;
                      (k = i(b[q])),
                        (n = k.literal
                          ? R
                          : function(a, b) {
                              return a === b || (a !== a && b !== b);
                            }),
                        (l =
                          k.assign ||
                          function() {
                            throw ((g = e[f] = k(a)),
                            Qe(
                              "nonassign",
                              "Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!",
                              b[q],
                              q,
                              h.name
                            ));
                          }),
                        (g = e[f] = k(a));
                      var t = function(b) {
                        return (
                          n(b, e[f]) ||
                            (n(b, g) ? l(a, (b = e[f])) : (e[f] = b)),
                          (g = b)
                        );
                      };
                      (t.$stateful = !0),
                        (o = c.collection
                          ? a.$watchCollection(b[q], t)
                          : a.$watch(i(b[q], t), null, k.literal)),
                        m.push(o);
                      break;
                    case "<":
                      if (!Cd.call(b, q)) {
                        if (r) break;
                        b[q] = void 0;
                      }
                      if (r && !b[q]) break;
                      (k = i(b[q])),
                        (e[f] = k(a)),
                        (o = a.$watch(
                          k,
                          function(a) {
                            var b = e[f];
                            j(f, a, b), (e[f] = a);
                          },
                          k.literal
                        )),
                        m.push(o);
                      break;
                    case "&":
                      if (
                        ((k = b.hasOwnProperty(q) ? i(b[q]) : p), k === p && r)
                      )
                        break;
                      e[f] = function(b) {
                        return k(a, b);
                      };
                  }
                }),
                m.length &&
                  function() {
                    for (var a = 0, b = m.length; b > a; ++a) m[a]();
                  }
              );
            }
            var qa,
              sa = /^\w/,
              ta = b.createElement("div"),
              ua = C;
            I.prototype = {
              $normalize: pb,
              $addClass: function(a) {
                a && a.length > 0 && E.addClass(this.$$element, a);
              },
              $removeClass: function(a) {
                a && a.length > 0 && E.removeClass(this.$$element, a);
              },
              $updateClass: function(a, b) {
                var c = qb(a, b);
                c && c.length && E.addClass(this.$$element, c);
                var d = qb(b, a);
                d && d.length && E.removeClass(this.$$element, d);
              },
              $set: function(a, b, c, d) {
                var g,
                  h = this.$$element[0],
                  i = Va(h, a),
                  j = Wa(a),
                  k = a;
                if (
                  (i
                    ? (this.$$element.prop(a, b), (d = i))
                    : j && ((this[j] = b), (k = j)),
                  (this[a] = b),
                  d
                    ? (this.$attr[a] = d)
                    : ((d = this.$attr[a]),
                      d || (this.$attr[a] = d = ka(a, "-"))),
                  (g = N(this.$$element)),
                  ("a" === g && ("href" === a || "xlinkHref" === a)) ||
                    ("img" === g && "src" === a))
                )
                  this[a] = b = F(b, "src" === a);
                else if ("img" === g && "srcset" === a) {
                  for (
                    var l = "",
                      m = Vd(b),
                      n = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,
                      o = /\s/.test(m) ? n : /(,)/,
                      p = m.split(o),
                      q = Math.floor(p.length / 2),
                      r = 0;
                    q > r;
                    r++
                  ) {
                    var s = 2 * r;
                    (l += F(Vd(p[s]), !0)), (l += " " + Vd(p[s + 1]));
                  }
                  var u = Vd(p[2 * r]).split(/\s/);
                  (l += F(Vd(u[0]), !0)),
                    2 === u.length && (l += " " + Vd(u[1])),
                    (this[a] = b = l);
                }
                c !== !1 &&
                  (null === b || t(b)
                    ? this.$$element.removeAttr(d)
                    : sa.test(d)
                    ? this.$$element.attr(d, b)
                    : J(this.$$element[0], d, b));
                var v = this.$$observers;
                v &&
                  f(v[k], function(a) {
                    try {
                      a(b);
                    } catch (c) {
                      e(c);
                    }
                  });
              },
              $observe: function(a, b) {
                var c = this,
                  d = c.$$observers || (c.$$observers = ra()),
                  e = d[a] || (d[a] = []);
                return (
                  e.push(b),
                  u.$evalAsync(function() {
                    e.$$inter || !c.hasOwnProperty(a) || t(c[a]) || b(c[a]);
                  }),
                  function() {
                    O(e, b);
                  }
                );
              }
            };
            var va = d.startSymbol(),
              wa = d.endSymbol(),
              xa =
                "{{" == va && "}}" == wa
                  ? q
                  : function(a) {
                      return a.replace(/\{\{/g, va).replace(/}}/g, wa);
                    },
              za = /^ngAttr[A-Z]/,
              Aa = /^(.+)Start$/;
            return (
              (L.$$addBindingInfo = B
                ? function(a, b) {
                    var c = a.data("$binding") || [];
                    Td(b) ? (c = c.concat(b)) : c.push(b),
                      a.data("$binding", c);
                  }
                : p),
              (L.$$addBindingClass = B
                ? function(a) {
                    K(a, "ng-binding");
                  }
                : p),
              (L.$$addScopeInfo = B
                ? function(a, b, c, d) {
                    var e = c
                      ? d
                        ? "$isolateScopeNoTemplate"
                        : "$isolateScope"
                      : "$scope";
                    a.data(e, b);
                  }
                : p),
              (L.$$addScopeClass = B
                ? function(a, b) {
                    K(a, b ? "ng-isolate-scope" : "ng-scope");
                  }
                : p),
              (L.$$createComment = function(a, c) {
                var d = "";
                return (
                  B && (d = " " + (a || "") + ": " + (c || "") + " "),
                  b.createComment(d)
                );
              }),
              L
            );
          }
        ]);
    }
    function pb(a) {
      return xa(a.replace(Re, ""));
    }
    function qb(a, b) {
      var c = "",
        d = a.split(/\s+/),
        e = b.split(/\s+/);
      a: for (var f = 0; f < d.length; f++) {
        for (var g = d[f], h = 0; h < e.length; h++) if (g == e[h]) continue a;
        c += (c.length > 0 ? " " : "") + g;
      }
      return c;
    }
    function rb(a) {
      a = Id(a);
      var b = a.length;
      if (1 >= b) return a;
      for (; b--; ) {
        var c = a[b];
        c.nodeType === ee && Md.call(a, b, 1);
      }
      return a;
    }
    function sb(a, b) {
      if (b && x(b)) return b;
      if (x(a)) {
        var c = Te.exec(a);
        if (c) return c[3];
      }
    }
    function tb() {
      var a = {},
        b = !1;
      (this.has = function(b) {
        return a.hasOwnProperty(b);
      }),
        (this.register = function(b, c) {
          oa(b, "controller"), v(b) ? l(a, b) : (a[b] = c);
        }),
        (this.allowGlobals = function() {
          b = !0;
        }),
        (this.$get = [
          "$injector",
          "$window",
          function(e, f) {
            function g(a, b, c, e) {
              if (!a || !v(a.$scope))
                throw d("$controller")(
                  "noscp",
                  "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.",
                  e,
                  b
                );
              a.$scope[b] = c;
            }
            return function(d, h, i, j) {
              var k, m, n, o;
              if (((i = i === !0), j && x(j) && (o = j), x(d))) {
                if (((m = d.match(Te)), !m))
                  throw Se(
                    "ctrlfmt",
                    "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.",
                    d
                  );
                (n = m[1]),
                  (o = o || m[3]),
                  (d = a.hasOwnProperty(n)
                    ? a[n]
                    : pa(h.$scope, n, !0) || (b ? pa(f, n, !0) : c)),
                  na(d, n, !0);
              }
              if (i) {
                var p = (Td(d) ? d[d.length - 1] : d).prototype;
                (k = Object.create(p || null)), o && g(h, o, k, n || d.name);
                var q;
                return (q = l(
                  function() {
                    var a = e.invoke(d, k, h, n);
                    return (
                      a !== k &&
                        (v(a) || A(a)) &&
                        ((k = a), o && g(h, o, k, n || d.name)),
                      k
                    );
                  },
                  { instance: k, identifier: o }
                ));
              }
              return (
                (k = e.instantiate(d, h, n)), o && g(h, o, k, n || d.name), k
              );
            };
          }
        ]);
    }
    function ub() {
      this.$get = [
        "$window",
        function(a) {
          return Id(a.document);
        }
      ];
    }
    function vb() {
      this.$get = [
        "$log",
        function(a) {
          return function(b, c) {
            a.error.apply(a, arguments);
          };
        }
      ];
    }
    function wb(a) {
      return v(a) ? (z(a) ? a.toISOString() : W(a)) : a;
    }
    function xb() {
      this.$get = function() {
        return function(a) {
          if (!a) return "";
          var b = [];
          return (
            g(a, function(a, c) {
              null === a ||
                t(a) ||
                (Td(a)
                  ? f(a, function(a) {
                      b.push(ea(c) + "=" + ea(wb(a)));
                    })
                  : b.push(ea(c) + "=" + ea(wb(a))));
            }),
            b.join("&")
          );
        };
      };
    }
    function yb() {
      this.$get = function() {
        return function(a) {
          function b(a, d, e) {
            null === a ||
              t(a) ||
              (Td(a)
                ? f(a, function(a, c) {
                    b(a, d + "[" + (v(a) ? c : "") + "]");
                  })
                : v(a) && !z(a)
                ? g(a, function(a, c) {
                    b(a, d + (e ? "" : "[") + c + (e ? "" : "]"));
                  })
                : c.push(ea(d) + "=" + ea(wb(a))));
          }
          if (!a) return "";
          var c = [];
          return b(a, "", !0), c.join("&");
        };
      };
    }
    function zb(a, b) {
      if (x(a)) {
        var c = a.replace(Ze, "").trim();
        if (c) {
          var d = b("Content-Type");
          ((d && 0 === d.indexOf(Ve)) || Ab(c)) && (a = X(c));
        }
      }
      return a;
    }
    function Ab(a) {
      var b = a.match(Xe);
      return b && Ye[b[0]].test(a);
    }
    function Bb(a) {
      function b(a, b) {
        a && (d[a] = d[a] ? d[a] + ", " + b : b);
      }
      var c,
        d = ra();
      return (
        x(a)
          ? f(a.split("\n"), function(a) {
              (c = a.indexOf(":")),
                b(Dd(Vd(a.substr(0, c))), Vd(a.substr(c + 1)));
            })
          : v(a) &&
            f(a, function(a, c) {
              b(Dd(c), Vd(a));
            }),
        d
      );
    }
    function Cb(a) {
      var b;
      return function(c) {
        if ((b || (b = Bb(a)), c)) {
          var d = b[Dd(c)];
          return void 0 === d && (d = null), d;
        }
        return b;
      };
    }
    function Db(a, b, c, d) {
      return A(d)
        ? d(a, b, c)
        : (f(d, function(d) {
            a = d(a, b, c);
          }),
          a);
    }
    function Eb(a) {
      return a >= 200 && 300 > a;
    }
    function Fb() {
      var a = (this.defaults = {
          transformResponse: [zb],
          transformRequest: [
            function(a) {
              return !v(a) || E(a) || G(a) || F(a) ? a : W(a);
            }
          ],
          headers: {
            common: { Accept: "application/json, text/plain, */*" },
            post: Q(We),
            put: Q(We),
            patch: Q(We)
          },
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          paramSerializer: "$httpParamSerializer"
        }),
        b = !1;
      this.useApplyAsync = function(a) {
        return u(a) ? ((b = !!a), this) : b;
      };
      var e = !0;
      this.useLegacyPromiseExtensions = function(a) {
        return u(a) ? ((e = !!a), this) : e;
      };
      var g = (this.interceptors = []);
      this.$get = [
        "$httpBackend",
        "$$cookieReader",
        "$cacheFactory",
        "$rootScope",
        "$q",
        "$injector",
        function(h, i, j, k, m, n) {
          function o(b) {
            function g(a) {
              var b = l({}, a);
              return (
                (b.data = Db(a.data, a.headers, a.status, j.transformResponse)),
                Eb(a.status) ? b : m.reject(b)
              );
            }
            function h(a, b) {
              var c,
                d = {};
              return (
                f(a, function(a, e) {
                  A(a) ? ((c = a(b)), null != c && (d[e] = c)) : (d[e] = a);
                }),
                d
              );
            }
            function i(b) {
              var c,
                d,
                e,
                f = a.headers,
                g = l({}, b.headers);
              f = l({}, f.common, f[Dd(b.method)]);
              a: for (c in f) {
                d = Dd(c);
                for (e in g) if (Dd(e) === d) continue a;
                g[c] = f[c];
              }
              return h(g, Q(b));
            }
            if (!v(b))
              throw d("$http")(
                "badreq",
                "Http request configuration must be an object.  Received: {0}",
                b
              );
            if (!x(b.url))
              throw d("$http")(
                "badreq",
                "Http request configuration url must be a string.  Received: {0}",
                b.url
              );
            var j = l(
              {
                method: "get",
                transformRequest: a.transformRequest,
                transformResponse: a.transformResponse,
                paramSerializer: a.paramSerializer
              },
              b
            );
            (j.headers = i(b)),
              (j.method = Ed(j.method)),
              (j.paramSerializer = x(j.paramSerializer)
                ? n.get(j.paramSerializer)
                : j.paramSerializer);
            var k = function(b) {
                var d = b.headers,
                  e = Db(b.data, Cb(d), c, b.transformRequest);
                return (
                  t(e) &&
                    f(d, function(a, b) {
                      "content-type" === Dd(b) && delete d[b];
                    }),
                  t(b.withCredentials) &&
                    !t(a.withCredentials) &&
                    (b.withCredentials = a.withCredentials),
                  r(b, e).then(g, g)
                );
              },
              o = [k, c],
              p = m.when(j);
            for (
              f(y, function(a) {
                (a.request || a.requestError) &&
                  o.unshift(a.request, a.requestError),
                  (a.response || a.responseError) &&
                    o.push(a.response, a.responseError);
              });
              o.length;

            ) {
              var q = o.shift(),
                s = o.shift();
              p = p.then(q, s);
            }
            return (
              e
                ? ((p.success = function(a) {
                    return (
                      na(a, "fn"),
                      p.then(function(b) {
                        a(b.data, b.status, b.headers, j);
                      }),
                      p
                    );
                  }),
                  (p.error = function(a) {
                    return (
                      na(a, "fn"),
                      p.then(null, function(b) {
                        a(b.data, b.status, b.headers, j);
                      }),
                      p
                    );
                  }))
                : ((p.success = _e("success")), (p.error = _e("error"))),
              p
            );
          }
          function p(a) {
            f(arguments, function(a) {
              o[a] = function(b, c) {
                return o(l({}, c || {}, { method: a, url: b }));
              };
            });
          }
          function q(a) {
            f(arguments, function(a) {
              o[a] = function(b, c, d) {
                return o(l({}, d || {}, { method: a, url: b, data: c }));
              };
            });
          }
          function r(d, e) {
            function f(a, c, d, e) {
              function f() {
                g(c, a, d, e);
              }
              n && (Eb(a) ? n.put(y, [a, c, Bb(d), e]) : n.remove(y)),
                b ? k.$applyAsync(f) : (f(), k.$$phase || k.$apply());
            }
            function g(a, b, c, e) {
              (b = b >= -1 ? b : 0),
                (Eb(b) ? q.resolve : q.reject)({
                  data: a,
                  status: b,
                  headers: Cb(c),
                  config: d,
                  statusText: e
                });
            }
            function j(a) {
              g(a.data, a.status, Q(a.headers()), a.statusText);
            }
            function l() {
              var a = o.pendingRequests.indexOf(d);
              -1 !== a && o.pendingRequests.splice(a, 1);
            }
            var n,
              p,
              q = m.defer(),
              r = q.promise,
              x = d.headers,
              y = s(d.url, d.paramSerializer(d.params));
            if (
              (o.pendingRequests.push(d),
              r.then(l, l),
              (!d.cache && !a.cache) ||
                d.cache === !1 ||
                ("GET" !== d.method && "JSONP" !== d.method) ||
                (n = v(d.cache) ? d.cache : v(a.cache) ? a.cache : w),
              n &&
                ((p = n.get(y)),
                u(p)
                  ? I(p)
                    ? p.then(j, j)
                    : Td(p)
                    ? g(p[1], p[0], Q(p[2]), p[3])
                    : g(p, 200, {}, "OK")
                  : n.put(y, r)),
              t(p))
            ) {
              var z = Gc(d.url) ? i()[d.xsrfCookieName || a.xsrfCookieName] : c;
              z && (x[d.xsrfHeaderName || a.xsrfHeaderName] = z),
                h(
                  d.method,
                  y,
                  e,
                  f,
                  x,
                  d.timeout,
                  d.withCredentials,
                  d.responseType
                );
            }
            return r;
          }
          function s(a, b) {
            return (
              b.length > 0 && (a += (-1 == a.indexOf("?") ? "?" : "&") + b), a
            );
          }
          var w = j("$http");
          a.paramSerializer = x(a.paramSerializer)
            ? n.get(a.paramSerializer)
            : a.paramSerializer;
          var y = [];
          return (
            f(g, function(a) {
              y.unshift(x(a) ? n.get(a) : n.invoke(a));
            }),
            (o.pendingRequests = []),
            p("get", "delete", "head", "jsonp"),
            q("post", "put", "patch"),
            (o.defaults = a),
            o
          );
        }
      ];
    }
    function Gb() {
      this.$get = function() {
        return function() {
          return new a.XMLHttpRequest();
        };
      };
    }
    function Hb() {
      this.$get = [
        "$browser",
        "$window",
        "$document",
        "$xhrFactory",
        function(a, b, c, d) {
          return Ib(a, d, a.defer, b.angular.callbacks, c[0]);
        }
      ];
    }
    function Ib(a, b, c, d, e) {
      function g(a, b, c) {
        var f = e.createElement("script"),
          g = null;
        return (
          (f.type = "text/javascript"),
          (f.src = a),
          (f.async = !0),
          (g = function(a) {
            le(f, "load", g),
              le(f, "error", g),
              e.body.removeChild(f),
              (f = null);
            var h = -1,
              i = "unknown";
            a &&
              ("load" !== a.type || d[b].called || (a = { type: "error" }),
              (i = a.type),
              (h = "error" === a.type ? 404 : 200)),
              c && c(h, i);
          }),
          ke(f, "load", g),
          ke(f, "error", g),
          e.body.appendChild(f),
          g
        );
      }
      return function(e, h, i, j, k, l, m, n) {
        function o() {
          s && s(), v && v.abort();
        }
        function q(b, d, e, f, g) {
          u(y) && c.cancel(y),
            (s = v = null),
            b(d, e, f, g),
            a.$$completeOutstandingRequest(p);
        }
        if (
          (a.$$incOutstandingRequestCount(),
          (h = h || a.url()),
          "jsonp" == Dd(e))
        ) {
          var r = "_" + (d.counter++).toString(36);
          d[r] = function(a) {
            (d[r].data = a), (d[r].called = !0);
          };
          var s = g(
            h.replace("JSON_CALLBACK", "angular.callbacks." + r),
            r,
            function(a, b) {
              q(j, a, d[r].data, "", b), (d[r] = p);
            }
          );
        } else {
          var v = b(e, h);
          v.open(e, h, !0),
            f(k, function(a, b) {
              u(a) && v.setRequestHeader(b, a);
            }),
            (v.onload = function() {
              var a = v.statusText || "",
                b = "response" in v ? v.response : v.responseText,
                c = 1223 === v.status ? 204 : v.status;
              0 === c && (c = b ? 200 : "file" == Fc(h).protocol ? 404 : 0),
                q(j, c, b, v.getAllResponseHeaders(), a);
            });
          var w = function() {
            q(j, -1, null, null, "");
          };
          if (
            ((v.onerror = w), (v.onabort = w), m && (v.withCredentials = !0), n)
          )
            try {
              v.responseType = n;
            } catch (x) {
              if ("json" !== n) throw x;
            }
          v.send(t(i) ? null : i);
        }
        if (l > 0) var y = c(o, l);
        else I(l) && l.then(o);
      };
    }
    function Jb() {
      var a = "{{",
        b = "}}";
      (this.startSymbol = function(b) {
        return b ? ((a = b), this) : a;
      }),
        (this.endSymbol = function(a) {
          return a ? ((b = a), this) : b;
        }),
        (this.$get = [
          "$parse",
          "$exceptionHandler",
          "$sce",
          function(c, d, e) {
            function f(a) {
              return "\\\\\\" + a;
            }
            function g(c) {
              return c.replace(n, a).replace(o, b);
            }
            function h(a) {
              if (null == a) return "";
              switch (typeof a) {
                case "string":
                  break;
                case "number":
                  a = "" + a;
                  break;
                default:
                  a = W(a);
              }
              return a;
            }
            function i(a, b, c, d) {
              var e;
              return (e = a.$watch(
                function(a) {
                  return e(), d(a);
                },
                b,
                c
              ));
            }
            function j(f, j, n, o) {
              function p(a) {
                try {
                  return (a = G(a)), o && !u(a) ? a : h(a);
                } catch (b) {
                  d(af.interr(f, b));
                }
              }
              if (!f.length || -1 === f.indexOf(a)) {
                var q;
                if (!j) {
                  var s = g(f);
                  (q = r(s)),
                    (q.exp = f),
                    (q.expressions = []),
                    (q.$$watchDelegate = i);
                }
                return q;
              }
              o = !!o;
              for (
                var v,
                  w,
                  x,
                  y = 0,
                  z = [],
                  B = [],
                  C = f.length,
                  D = [],
                  E = [];
                C > y;

              ) {
                if (
                  -1 == (v = f.indexOf(a, y)) ||
                  -1 == (w = f.indexOf(b, v + k))
                ) {
                  y !== C && D.push(g(f.substring(y)));
                  break;
                }
                y !== v && D.push(g(f.substring(y, v))),
                  (x = f.substring(v + k, w)),
                  z.push(x),
                  B.push(c(x, p)),
                  (y = w + m),
                  E.push(D.length),
                  D.push("");
              }
              if ((n && D.length > 1 && af.throwNoconcat(f), !j || z.length)) {
                var F = function(a) {
                    for (var b = 0, c = z.length; c > b; b++) {
                      if (o && t(a[b])) return;
                      D[E[b]] = a[b];
                    }
                    return D.join("");
                  },
                  G = function(a) {
                    return n ? e.getTrusted(n, a) : e.valueOf(a);
                  };
                return l(
                  function(a) {
                    var b = 0,
                      c = z.length,
                      e = new Array(c);
                    try {
                      for (; c > b; b++) e[b] = B[b](a);
                      return F(e);
                    } catch (g) {
                      d(af.interr(f, g));
                    }
                  },
                  {
                    exp: f,
                    expressions: z,
                    $$watchDelegate: function(a, b) {
                      var c;
                      return a.$watchGroup(B, function(d, e) {
                        var f = F(d);
                        A(b) && b.call(this, f, d !== e ? c : f, a), (c = f);
                      });
                    }
                  }
                );
              }
            }
            var k = a.length,
              m = b.length,
              n = new RegExp(a.replace(/./g, f), "g"),
              o = new RegExp(b.replace(/./g, f), "g");
            return (
              (j.startSymbol = function() {
                return a;
              }),
              (j.endSymbol = function() {
                return b;
              }),
              j
            );
          }
        ]);
    }
    function Kb() {
      this.$get = [
        "$rootScope",
        "$window",
        "$q",
        "$$q",
        "$browser",
        function(a, b, c, d, e) {
          function f(f, h, i, j) {
            function k() {
              l ? f.apply(null, m) : f(p);
            }
            var l = arguments.length > 4,
              m = l ? T(arguments, 4) : [],
              n = b.setInterval,
              o = b.clearInterval,
              p = 0,
              q = u(j) && !j,
              r = (q ? d : c).defer(),
              s = r.promise;
            return (
              (i = u(i) ? i : 0),
              (s.$$intervalId = n(function() {
                q ? e.defer(k) : a.$evalAsync(k),
                  r.notify(p++),
                  i > 0 &&
                    p >= i &&
                    (r.resolve(p), o(s.$$intervalId), delete g[s.$$intervalId]),
                  q || a.$apply();
              }, h)),
              (g[s.$$intervalId] = r),
              s
            );
          }
          var g = {};
          return (
            (f.cancel = function(a) {
              return a && a.$$intervalId in g
                ? (g[a.$$intervalId].reject("canceled"),
                  b.clearInterval(a.$$intervalId),
                  delete g[a.$$intervalId],
                  !0)
                : !1;
            }),
            f
          );
        }
      ];
    }
    function Lb(a) {
      for (var b = a.split("/"), c = b.length; c--; ) b[c] = da(b[c]);
      return b.join("/");
    }
    function Mb(a, b) {
      var c = Fc(a);
      (b.$$protocol = c.protocol),
        (b.$$host = c.hostname),
        (b.$$port = n(c.port) || cf[c.protocol] || null);
    }
    function Nb(a, b) {
      var c = "/" !== a.charAt(0);
      c && (a = "/" + a);
      var d = Fc(a);
      (b.$$path = decodeURIComponent(
        c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname
      )),
        (b.$$search = ba(d.search)),
        (b.$$hash = decodeURIComponent(d.hash)),
        b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path);
    }
    function Ob(a, b) {
      return 0 === b.indexOf(a) ? b.substr(a.length) : void 0;
    }
    function Pb(a) {
      var b = a.indexOf("#");
      return -1 == b ? a : a.substr(0, b);
    }
    function Qb(a) {
      return a.replace(/(#.+)|#$/, "$1");
    }
    function Rb(a) {
      return a.substr(0, Pb(a).lastIndexOf("/") + 1);
    }
    function Sb(a) {
      return a.substring(0, a.indexOf("/", a.indexOf("//") + 2));
    }
    function Tb(a, b, c) {
      (this.$$html5 = !0),
        (c = c || ""),
        Mb(a, this),
        (this.$$parse = function(a) {
          var c = Ob(b, a);
          if (!x(c))
            throw df(
              "ipthprfx",
              'Invalid url "{0}", missing path prefix "{1}".',
              a,
              b
            );
          Nb(c, this), this.$$path || (this.$$path = "/"), this.$$compose();
        }),
        (this.$$compose = function() {
          var a = ca(this.$$search),
            c = this.$$hash ? "#" + da(this.$$hash) : "";
          (this.$$url = Lb(this.$$path) + (a ? "?" + a : "") + c),
            (this.$$absUrl = b + this.$$url.substr(1));
        }),
        (this.$$parseLinkUrl = function(d, e) {
          if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
          var f, g, h;
          return (
            u((f = Ob(a, d)))
              ? ((g = f),
                (h = u((f = Ob(c, f))) ? b + (Ob("/", f) || f) : a + g))
              : u((f = Ob(b, d)))
              ? (h = b + f)
              : b == d + "/" && (h = b),
            h && this.$$parse(h),
            !!h
          );
        });
    }
    function Ub(a, b, c) {
      Mb(a, this),
        (this.$$parse = function(d) {
          function e(a, b, c) {
            var d,
              e = /^\/[A-Z]:(\/.*)/;
            return (
              0 === b.indexOf(c) && (b = b.replace(c, "")),
              e.exec(b) ? a : ((d = e.exec(a)), d ? d[1] : a)
            );
          }
          var f,
            g = Ob(a, d) || Ob(b, d);
          t(g) || "#" !== g.charAt(0)
            ? this.$$html5
              ? (f = g)
              : ((f = ""), t(g) && ((a = d), this.replace()))
            : ((f = Ob(c, g)), t(f) && (f = g)),
            Nb(f, this),
            (this.$$path = e(this.$$path, f, a)),
            this.$$compose();
        }),
        (this.$$compose = function() {
          var b = ca(this.$$search),
            d = this.$$hash ? "#" + da(this.$$hash) : "";
          (this.$$url = Lb(this.$$path) + (b ? "?" + b : "") + d),
            (this.$$absUrl = a + (this.$$url ? c + this.$$url : ""));
        }),
        (this.$$parseLinkUrl = function(b, c) {
          return Pb(a) == Pb(b) ? (this.$$parse(b), !0) : !1;
        });
    }
    function Vb(a, b, c) {
      (this.$$html5 = !0),
        Ub.apply(this, arguments),
        (this.$$parseLinkUrl = function(d, e) {
          if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
          var f, g;
          return (
            a == Pb(d)
              ? (f = d)
              : (g = Ob(b, d))
              ? (f = a + c + g)
              : b === d + "/" && (f = b),
            f && this.$$parse(f),
            !!f
          );
        }),
        (this.$$compose = function() {
          var b = ca(this.$$search),
            d = this.$$hash ? "#" + da(this.$$hash) : "";
          (this.$$url = Lb(this.$$path) + (b ? "?" + b : "") + d),
            (this.$$absUrl = a + c + this.$$url);
        });
    }
    function Wb(a) {
      return function() {
        return this[a];
      };
    }
    function Xb(a, b) {
      return function(c) {
        return t(c) ? this[a] : ((this[a] = b(c)), this.$$compose(), this);
      };
    }
    function Yb() {
      var a = "",
        b = { enabled: !1, requireBase: !0, rewriteLinks: !0 };
      (this.hashPrefix = function(b) {
        return u(b) ? ((a = b), this) : a;
      }),
        (this.html5Mode = function(a) {
          return H(a)
            ? ((b.enabled = a), this)
            : v(a)
            ? (H(a.enabled) && (b.enabled = a.enabled),
              H(a.requireBase) && (b.requireBase = a.requireBase),
              H(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks),
              this)
            : b;
        }),
        (this.$get = [
          "$rootScope",
          "$browser",
          "$sniffer",
          "$rootElement",
          "$window",
          function(c, d, e, f, g) {
            function h(a, b, c) {
              var e = j.url(),
                f = j.$$state;
              try {
                d.url(a, b, c), (j.$$state = d.state());
              } catch (g) {
                throw (j.url(e), (j.$$state = f), g);
              }
            }
            function i(a, b) {
              c.$broadcast(
                "$locationChangeSuccess",
                j.absUrl(),
                a,
                j.$$state,
                b
              );
            }
            var j,
              k,
              l,
              m = d.baseHref(),
              n = d.url();
            if (b.enabled) {
              if (!m && b.requireBase)
                throw df(
                  "nobase",
                  "$location in HTML5 mode requires a <base> tag to be present!"
                );
              (l = Sb(n) + (m || "/")), (k = e.history ? Tb : Vb);
            } else (l = Pb(n)), (k = Ub);
            var o = Rb(l);
            (j = new k(l, o, "#" + a)),
              j.$$parseLinkUrl(n, n),
              (j.$$state = d.state());
            var p = /^\s*(javascript|mailto):/i;
            f.on("click", function(a) {
              if (
                b.rewriteLinks &&
                !a.ctrlKey &&
                !a.metaKey &&
                !a.shiftKey &&
                2 != a.which &&
                2 != a.button
              ) {
                for (var e = Id(a.target); "a" !== N(e[0]); )
                  if (e[0] === f[0] || !(e = e.parent())[0]) return;
                var h = e.prop("href"),
                  i = e.attr("href") || e.attr("xlink:href");
                v(h) &&
                  "[object SVGAnimatedString]" === h.toString() &&
                  (h = Fc(h.animVal).href),
                  p.test(h) ||
                    !h ||
                    e.attr("target") ||
                    a.isDefaultPrevented() ||
                    (j.$$parseLinkUrl(h, i) &&
                      (a.preventDefault(),
                      j.absUrl() != d.url() &&
                        (c.$apply(),
                        (g.angular["ff-684208-preventDefault"] = !0))));
              }
            }),
              Qb(j.absUrl()) != Qb(n) && d.url(j.absUrl(), !0);
            var q = !0;
            return (
              d.onUrlChange(function(a, b) {
                return t(Ob(o, a))
                  ? void (g.location.href = a)
                  : (c.$evalAsync(function() {
                      var d,
                        e = j.absUrl(),
                        f = j.$$state;
                      (a = Qb(a)),
                        j.$$parse(a),
                        (j.$$state = b),
                        (d = c.$broadcast("$locationChangeStart", a, e, b, f)
                          .defaultPrevented),
                        j.absUrl() === a &&
                          (d
                            ? (j.$$parse(e), (j.$$state = f), h(e, !1, f))
                            : ((q = !1), i(e, f)));
                    }),
                    void (c.$$phase || c.$digest()));
              }),
              c.$watch(function() {
                var a = Qb(d.url()),
                  b = Qb(j.absUrl()),
                  f = d.state(),
                  g = j.$$replace,
                  k = a !== b || (j.$$html5 && e.history && f !== j.$$state);
                (q || k) &&
                  ((q = !1),
                  c.$evalAsync(function() {
                    var b = j.absUrl(),
                      d = c.$broadcast(
                        "$locationChangeStart",
                        b,
                        a,
                        j.$$state,
                        f
                      ).defaultPrevented;
                    j.absUrl() === b &&
                      (d
                        ? (j.$$parse(a), (j.$$state = f))
                        : (k && h(b, g, f === j.$$state ? null : j.$$state),
                          i(a, f)));
                  })),
                  (j.$$replace = !1);
              }),
              j
            );
          }
        ]);
    }
    function Zb() {
      var a = !0,
        b = this;
      (this.debugEnabled = function(b) {
        return u(b) ? ((a = b), this) : a;
      }),
        (this.$get = [
          "$window",
          function(c) {
            function d(a) {
              return (
                a instanceof Error &&
                  (a.stack
                    ? (a =
                        a.message && -1 === a.stack.indexOf(a.message)
                          ? "Error: " + a.message + "\n" + a.stack
                          : a.stack)
                    : a.sourceURL &&
                      (a = a.message + "\n" + a.sourceURL + ":" + a.line)),
                a
              );
            }
            function e(a) {
              var b = c.console || {},
                e = b[a] || b.log || p,
                g = !1;
              try {
                g = !!e.apply;
              } catch (h) {}
              return g
                ? function() {
                    var a = [];
                    return (
                      f(arguments, function(b) {
                        a.push(d(b));
                      }),
                      e.apply(b, a)
                    );
                  }
                : function(a, b) {
                    e(a, null == b ? "" : b);
                  };
            }
            return {
              log: e("log"),
              info: e("info"),
              warn: e("warn"),
              error: e("error"),
              debug: (function() {
                var c = e("debug");
                return function() {
                  a && c.apply(b, arguments);
                };
              })()
            };
          }
        ]);
    }
    function $b(a, b) {
      if (
        "__defineGetter__" === a ||
        "__defineSetter__" === a ||
        "__lookupGetter__" === a ||
        "__lookupSetter__" === a ||
        "__proto__" === a
      )
        throw ff(
          "isecfld",
          "Attempting to access a disallowed field in Angular expressions! Expression: {0}",
          b
        );
      return a;
    }
    function _b(a) {
      return a + "";
    }
    function ac(a, b) {
      if (a) {
        if (a.constructor === a)
          throw ff(
            "isecfn",
            "Referencing Function in Angular expressions is disallowed! Expression: {0}",
            b
          );
        if (a.window === a)
          throw ff(
            "isecwindow",
            "Referencing the Window in Angular expressions is disallowed! Expression: {0}",
            b
          );
        if (a.children && (a.nodeName || (a.prop && a.attr && a.find)))
          throw ff(
            "isecdom",
            "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}",
            b
          );
        if (a === Object)
          throw ff(
            "isecobj",
            "Referencing Object in Angular expressions is disallowed! Expression: {0}",
            b
          );
      }
      return a;
    }
    function bc(a, b) {
      if (a) {
        if (a.constructor === a)
          throw ff(
            "isecfn",
            "Referencing Function in Angular expressions is disallowed! Expression: {0}",
            b
          );
        if (a === gf || a === hf || a === jf)
          throw ff(
            "isecff",
            "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}",
            b
          );
      }
    }
    function cc(a, b) {
      if (
        a &&
        (a === (0).constructor ||
          a === (!1).constructor ||
          a === "".constructor ||
          a === {}.constructor ||
          a === [].constructor ||
          a === Function.constructor)
      )
        throw ff(
          "isecaf",
          "Assigning to a constructor is disallowed! Expression: {0}",
          b
        );
    }
    function dc(a, b) {
      return "undefined" != typeof a ? a : b;
    }
    function ec(a, b) {
      return "undefined" == typeof a ? b : "undefined" == typeof b ? a : a + b;
    }
    function fc(a, b) {
      var c = a(b);
      return !c.$stateful;
    }
    function gc(a, b) {
      var c, d;
      switch (a.type) {
        case nf.Program:
          (c = !0),
            f(a.body, function(a) {
              gc(a.expression, b), (c = c && a.expression.constant);
            }),
            (a.constant = c);
          break;
        case nf.Literal:
          (a.constant = !0), (a.toWatch = []);
          break;
        case nf.UnaryExpression:
          gc(a.argument, b),
            (a.constant = a.argument.constant),
            (a.toWatch = a.argument.toWatch);
          break;
        case nf.BinaryExpression:
          gc(a.left, b),
            gc(a.right, b),
            (a.constant = a.left.constant && a.right.constant),
            (a.toWatch = a.left.toWatch.concat(a.right.toWatch));
          break;
        case nf.LogicalExpression:
          gc(a.left, b),
            gc(a.right, b),
            (a.constant = a.left.constant && a.right.constant),
            (a.toWatch = a.constant ? [] : [a]);
          break;
        case nf.ConditionalExpression:
          gc(a.test, b),
            gc(a.alternate, b),
            gc(a.consequent, b),
            (a.constant =
              a.test.constant && a.alternate.constant && a.consequent.constant),
            (a.toWatch = a.constant ? [] : [a]);
          break;
        case nf.Identifier:
          (a.constant = !1), (a.toWatch = [a]);
          break;
        case nf.MemberExpression:
          gc(a.object, b),
            a.computed && gc(a.property, b),
            (a.constant =
              a.object.constant && (!a.computed || a.property.constant)),
            (a.toWatch = [a]);
          break;
        case nf.CallExpression:
          (c = a.filter ? fc(b, a.callee.name) : !1),
            (d = []),
            f(a.arguments, function(a) {
              gc(a, b),
                (c = c && a.constant),
                a.constant || d.push.apply(d, a.toWatch);
            }),
            (a.constant = c),
            (a.toWatch = a.filter && fc(b, a.callee.name) ? d : [a]);
          break;
        case nf.AssignmentExpression:
          gc(a.left, b),
            gc(a.right, b),
            (a.constant = a.left.constant && a.right.constant),
            (a.toWatch = [a]);
          break;
        case nf.ArrayExpression:
          (c = !0),
            (d = []),
            f(a.elements, function(a) {
              gc(a, b),
                (c = c && a.constant),
                a.constant || d.push.apply(d, a.toWatch);
            }),
            (a.constant = c),
            (a.toWatch = d);
          break;
        case nf.ObjectExpression:
          (c = !0),
            (d = []),
            f(a.properties, function(a) {
              gc(a.value, b),
                (c = c && a.value.constant),
                a.value.constant || d.push.apply(d, a.value.toWatch);
            }),
            (a.constant = c),
            (a.toWatch = d);
          break;
        case nf.ThisExpression:
          (a.constant = !1), (a.toWatch = []);
          break;
        case nf.LocalsExpression:
          (a.constant = !1), (a.toWatch = []);
      }
    }
    function hc(a) {
      if (1 == a.length) {
        var b = a[0].expression,
          d = b.toWatch;
        return 1 !== d.length ? d : d[0] !== b ? d : c;
      }
    }
    function ic(a) {
      return a.type === nf.Identifier || a.type === nf.MemberExpression;
    }
    function jc(a) {
      return 1 === a.body.length && ic(a.body[0].expression)
        ? {
            type: nf.AssignmentExpression,
            left: a.body[0].expression,
            right: { type: nf.NGValueParameter },
            operator: "="
          }
        : void 0;
    }
    function kc(a) {
      return (
        0 === a.body.length ||
        (1 === a.body.length &&
          (a.body[0].expression.type === nf.Literal ||
            a.body[0].expression.type === nf.ArrayExpression ||
            a.body[0].expression.type === nf.ObjectExpression))
      );
    }
    function lc(a) {
      return a.constant;
    }
    function mc(a, b) {
      (this.astBuilder = a), (this.$filter = b);
    }
    function nc(a, b) {
      (this.astBuilder = a), (this.$filter = b);
    }
    function oc(a) {
      return "constructor" == a;
    }
    function pc(a) {
      return A(a.valueOf) ? a.valueOf() : pf.call(a);
    }
    function qc() {
      var a = ra(),
        b = ra(),
        d = { true: !0, false: !1, null: null, undefined: c };
      (this.addLiteral = function(a, b) {
        d[a] = b;
      }),
        (this.$get = [
          "$filter",
          function(e) {
            function g(c, d, f) {
              var g, i, o;
              switch (((f = f || s), typeof c)) {
                case "string":
                  (c = c.trim()), (o = c);
                  var t = f ? b : a;
                  if (((g = t[o]), !g)) {
                    ":" === c.charAt(0) &&
                      ":" === c.charAt(1) &&
                      ((i = !0), (c = c.substring(2)));
                    var u = f ? r : q,
                      v = new mf(u),
                      w = new of(v, e, u);
                    (g = w.parse(c)),
                      g.constant
                        ? (g.$$watchDelegate = m)
                        : i
                        ? (g.$$watchDelegate = g.literal ? l : k)
                        : g.inputs && (g.$$watchDelegate = j),
                      f && (g = h(g)),
                      (t[o] = g);
                  }
                  return n(g, d);
                case "function":
                  return n(c, d);
                default:
                  return n(p, d);
              }
            }
            function h(a) {
              function b(b, c, d, e) {
                var f = s;
                s = !0;
                try {
                  return a(b, c, d, e);
                } finally {
                  s = f;
                }
              }
              if (!a) return a;
              (b.$$watchDelegate = a.$$watchDelegate),
                (b.assign = h(a.assign)),
                (b.constant = a.constant),
                (b.literal = a.literal);
              for (var c = 0; a.inputs && c < a.inputs.length; ++c)
                a.inputs[c] = h(a.inputs[c]);
              return (b.inputs = a.inputs), b;
            }
            function i(a, b) {
              return null == a || null == b
                ? a === b
                : "object" == typeof a && ((a = pc(a)), "object" == typeof a)
                ? !1
                : a === b || (a !== a && b !== b);
            }
            function j(a, b, d, e, f) {
              var g,
                h = e.inputs;
              if (1 === h.length) {
                var j = i;
                return (
                  (h = h[0]),
                  a.$watch(
                    function(a) {
                      var b = h(a);
                      return (
                        i(b, j) || ((g = e(a, c, c, [b])), (j = b && pc(b))), g
                      );
                    },
                    b,
                    d,
                    f
                  )
                );
              }
              for (var k = [], l = [], m = 0, n = h.length; n > m; m++)
                (k[m] = i), (l[m] = null);
              return a.$watch(
                function(a) {
                  for (var b = !1, d = 0, f = h.length; f > d; d++) {
                    var j = h[d](a);
                    (b || (b = !i(j, k[d]))) &&
                      ((l[d] = j), (k[d] = j && pc(j)));
                  }
                  return b && (g = e(a, c, c, l)), g;
                },
                b,
                d,
                f
              );
            }
            function k(a, b, c, d) {
              var e, f;
              return (e = a.$watch(
                function(a) {
                  return d(a);
                },
                function(a, c, d) {
                  (f = a),
                    A(b) && b.apply(this, arguments),
                    u(a) &&
                      d.$$postDigest(function() {
                        u(f) && e();
                      });
                },
                c
              ));
            }
            function l(a, b, c, d) {
              function e(a) {
                var b = !0;
                return (
                  f(a, function(a) {
                    u(a) || (b = !1);
                  }),
                  b
                );
              }
              var g, h;
              return (g = a.$watch(
                function(a) {
                  return d(a);
                },
                function(a, c, d) {
                  (h = a),
                    A(b) && b.call(this, a, c, d),
                    e(a) &&
                      d.$$postDigest(function() {
                        e(h) && g();
                      });
                },
                c
              ));
            }
            function m(a, b, c, d) {
              var e;
              return (e = a.$watch(
                function(a) {
                  return e(), d(a);
                },
                b,
                c
              ));
            }
            function n(a, b) {
              if (!b) return a;
              var c = a.$$watchDelegate,
                d = !1,
                e = c !== l && c !== k,
                f = e
                  ? function(c, e, f, g) {
                      var h = d && g ? g[0] : a(c, e, f, g);
                      return b(h, c, e);
                    }
                  : function(c, d, e, f) {
                      var g = a(c, d, e, f),
                        h = b(g, c, d);
                      return u(g) ? h : g;
                    };
              return (
                a.$$watchDelegate && a.$$watchDelegate !== j
                  ? (f.$$watchDelegate = a.$$watchDelegate)
                  : b.$stateful ||
                    ((f.$$watchDelegate = j),
                    (d = !a.inputs),
                    (f.inputs = a.inputs ? a.inputs : [a])),
                f
              );
            }
            var o = Xd().noUnsafeEval,
              q = { csp: o, expensiveChecks: !1, literals: P(d) },
              r = { csp: o, expensiveChecks: !0, literals: P(d) },
              s = !1;
            return (
              (g.$$runningExpensiveChecks = function() {
                return s;
              }),
              g
            );
          }
        ]);
    }
    function rc() {
      this.$get = [
        "$rootScope",
        "$exceptionHandler",
        function(a, b) {
          return tc(function(b) {
            a.$evalAsync(b);
          }, b);
        }
      ];
    }
    function sc() {
      this.$get = [
        "$browser",
        "$exceptionHandler",
        function(a, b) {
          return tc(function(b) {
            a.defer(b);
          }, b);
        }
      ];
    }
    function tc(a, b) {
      function e() {
        this.$$state = { status: 0 };
      }
      function g(a, b) {
        return function(c) {
          b.call(a, c);
        };
      }
      function h(a) {
        var d, e, f;
        (f = a.pending), (a.processScheduled = !1), (a.pending = c);
        for (var g = 0, h = f.length; h > g; ++g) {
          (e = f[g][0]), (d = f[g][a.status]);
          try {
            A(d)
              ? e.resolve(d(a.value))
              : 1 === a.status
              ? e.resolve(a.value)
              : e.reject(a.value);
          } catch (i) {
            e.reject(i), b(i);
          }
        }
      }
      function i(b) {
        !b.processScheduled &&
          b.pending &&
          ((b.processScheduled = !0),
          a(function() {
            h(b);
          }));
      }
      function j() {
        this.promise = new e();
      }
      function k(a) {
        var b = new j(),
          c = 0,
          d = Td(a) ? [] : {};
        return (
          f(a, function(a, e) {
            c++,
              r(a).then(
                function(a) {
                  d.hasOwnProperty(e) || ((d[e] = a), --c || b.resolve(d));
                },
                function(a) {
                  d.hasOwnProperty(e) || b.reject(a);
                }
              );
          }),
          0 === c && b.resolve(d),
          b.promise
        );
      }
      var m = d("$q", TypeError),
        n = function() {
          var a = new j();
          return (
            (a.resolve = g(a, a.resolve)),
            (a.reject = g(a, a.reject)),
            (a.notify = g(a, a.notify)),
            a
          );
        };
      l(e.prototype, {
        then: function(a, b, c) {
          if (t(a) && t(b) && t(c)) return this;
          var d = new j();
          return (
            (this.$$state.pending = this.$$state.pending || []),
            this.$$state.pending.push([d, a, b, c]),
            this.$$state.status > 0 && i(this.$$state),
            d.promise
          );
        },
        catch: function(a) {
          return this.then(null, a);
        },
        finally: function(a, b) {
          return this.then(
            function(b) {
              return q(b, !0, a);
            },
            function(b) {
              return q(b, !1, a);
            },
            b
          );
        }
      }),
        l(j.prototype, {
          resolve: function(a) {
            this.promise.$$state.status ||
              (a === this.promise
                ? this.$$reject(
                    m(
                      "qcycle",
                      "Expected promise to be resolved with value other than itself '{0}'",
                      a
                    )
                  )
                : this.$$resolve(a));
          },
          $$resolve: function(a) {
            function c(a) {
              h || ((h = !0), f.$$resolve(a));
            }
            function d(a) {
              h || ((h = !0), f.$$reject(a));
            }
            var e,
              f = this,
              h = !1;
            try {
              (v(a) || A(a)) && (e = a && a.then),
                A(e)
                  ? ((this.promise.$$state.status = -1),
                    e.call(a, c, d, g(this, this.notify)))
                  : ((this.promise.$$state.value = a),
                    (this.promise.$$state.status = 1),
                    i(this.promise.$$state));
            } catch (j) {
              d(j), b(j);
            }
          },
          reject: function(a) {
            this.promise.$$state.status || this.$$reject(a);
          },
          $$reject: function(a) {
            (this.promise.$$state.value = a),
              (this.promise.$$state.status = 2),
              i(this.promise.$$state);
          },
          notify: function(c) {
            var d = this.promise.$$state.pending;
            this.promise.$$state.status <= 0 &&
              d &&
              d.length &&
              a(function() {
                for (var a, e, f = 0, g = d.length; g > f; f++) {
                  (e = d[f][0]), (a = d[f][3]);
                  try {
                    e.notify(A(a) ? a(c) : c);
                  } catch (h) {
                    b(h);
                  }
                }
              });
          }
        });
      var o = function(a) {
          var b = new j();
          return b.reject(a), b.promise;
        },
        p = function(a, b) {
          var c = new j();
          return b ? c.resolve(a) : c.reject(a), c.promise;
        },
        q = function(a, b, c) {
          var d = null;
          try {
            A(c) && (d = c());
          } catch (e) {
            return p(e, !1);
          }
          return I(d)
            ? d.then(
                function() {
                  return p(a, b);
                },
                function(a) {
                  return p(a, !1);
                }
              )
            : p(a, b);
        },
        r = function(a, b, c, d) {
          var e = new j();
          return e.resolve(a), e.promise.then(b, c, d);
        },
        s = r,
        u = function(a) {
          function b(a) {
            d.resolve(a);
          }
          function c(a) {
            d.reject(a);
          }
          if (!A(a)) throw m("norslvr", "Expected resolverFn, got '{0}'", a);
          var d = new j();
          return a(b, c), d.promise;
        };
      return (
        (u.prototype = e.prototype),
        (u.defer = n),
        (u.reject = o),
        (u.when = r),
        (u.resolve = s),
        (u.all = k),
        u
      );
    }
    function uc() {
      this.$get = [
        "$window",
        "$timeout",
        function(a, b) {
          var c = a.requestAnimationFrame || a.webkitRequestAnimationFrame,
            d =
              a.cancelAnimationFrame ||
              a.webkitCancelAnimationFrame ||
              a.webkitCancelRequestAnimationFrame,
            e = !!c,
            f = e
              ? function(a) {
                  var b = c(a);
                  return function() {
                    d(b);
                  };
                }
              : function(a) {
                  var c = b(a, 16.66, !1);
                  return function() {
                    b.cancel(c);
                  };
                };
          return (f.supported = e), f;
        }
      ];
    }
    function vc() {
      function a(a) {
        function b() {
          (this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null),
            (this.$$listeners = {}),
            (this.$$listenerCount = {}),
            (this.$$watchersCount = 0),
            (this.$id = i()),
            (this.$$ChildScope = null);
        }
        return (b.prototype = a), b;
      }
      var b = 10,
        c = d("$rootScope"),
        g = null,
        h = null;
      (this.digestTtl = function(a) {
        return arguments.length && (b = a), b;
      }),
        (this.$get = [
          "$exceptionHandler",
          "$parse",
          "$browser",
          function(d, j, k) {
            function l(a) {
              a.currentScope.$$destroyed = !0;
            }
            function m(a) {
              9 === Hd &&
                (a.$$childHead && m(a.$$childHead),
                a.$$nextSibling && m(a.$$nextSibling)),
                (a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null);
            }
            function n() {
              (this.$id = i()),
                (this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null),
                (this.$root = this),
                (this.$$destroyed = !1),
                (this.$$listeners = {}),
                (this.$$listenerCount = {}),
                (this.$$watchersCount = 0),
                (this.$$isolateBindings = null);
            }
            function o(a) {
              if (y.$$phase)
                throw c("inprog", "{0} already in progress", y.$$phase);
              y.$$phase = a;
            }
            function q() {
              y.$$phase = null;
            }
            function r(a, b) {
              do a.$$watchersCount += b;
              while ((a = a.$parent));
            }
            function s(a, b, c) {
              do
                (a.$$listenerCount[c] -= b),
                  0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
              while ((a = a.$parent));
            }
            function u() {}
            function w() {
              for (; C.length; )
                try {
                  C.shift()();
                } catch (a) {
                  d(a);
                }
              h = null;
            }
            function x() {
              null === h &&
                (h = k.defer(function() {
                  y.$apply(w);
                }));
            }
            n.prototype = {
              constructor: n,
              $new: function(b, c) {
                var d;
                return (
                  (c = c || this),
                  b
                    ? ((d = new n()), (d.$root = this.$root))
                    : (this.$$ChildScope || (this.$$ChildScope = a(this)),
                      (d = new this.$$ChildScope())),
                  (d.$parent = c),
                  (d.$$prevSibling = c.$$childTail),
                  c.$$childHead
                    ? ((c.$$childTail.$$nextSibling = d), (c.$$childTail = d))
                    : (c.$$childHead = c.$$childTail = d),
                  (b || c != this) && d.$on("$destroy", l),
                  d
                );
              },
              $watch: function(a, b, c, d) {
                var e = j(a);
                if (e.$$watchDelegate)
                  return e.$$watchDelegate(this, b, c, e, a);
                var f = this,
                  h = f.$$watchers,
                  i = { fn: b, last: u, get: e, exp: d || a, eq: !!c };
                return (
                  (g = null),
                  A(b) || (i.fn = p),
                  h || (h = f.$$watchers = []),
                  h.unshift(i),
                  r(this, 1),
                  function() {
                    O(h, i) >= 0 && r(f, -1), (g = null);
                  }
                );
              },
              $watchGroup: function(a, b) {
                function c() {
                  (i = !1), j ? ((j = !1), b(e, e, h)) : b(e, d, h);
                }
                var d = new Array(a.length),
                  e = new Array(a.length),
                  g = [],
                  h = this,
                  i = !1,
                  j = !0;
                if (!a.length) {
                  var k = !0;
                  return (
                    h.$evalAsync(function() {
                      k && b(e, e, h);
                    }),
                    function() {
                      k = !1;
                    }
                  );
                }
                return 1 === a.length
                  ? this.$watch(a[0], function(a, c, f) {
                      (e[0] = a), (d[0] = c), b(e, a === c ? e : d, f);
                    })
                  : (f(a, function(a, b) {
                      var f = h.$watch(a, function(a, f) {
                        (e[b] = a),
                          (d[b] = f),
                          i || ((i = !0), h.$evalAsync(c));
                      });
                      g.push(f);
                    }),
                    function() {
                      for (; g.length; ) g.shift()();
                    });
              },
              $watchCollection: function(a, b) {
                function c(a) {
                  f = a;
                  var b, c, d, h, i;
                  if (!t(f)) {
                    if (v(f))
                      if (e(f)) {
                        g !== n && ((g = n), (q = g.length = 0), l++),
                          (b = f.length),
                          q !== b && (l++, (g.length = q = b));
                        for (var j = 0; b > j; j++)
                          (i = g[j]),
                            (h = f[j]),
                            (d = i !== i && h !== h),
                            d || i === h || (l++, (g[j] = h));
                      } else {
                        g !== o && ((g = o = {}), (q = 0), l++), (b = 0);
                        for (c in f)
                          Cd.call(f, c) &&
                            (b++,
                            (h = f[c]),
                            (i = g[c]),
                            c in g
                              ? ((d = i !== i && h !== h),
                                d || i === h || (l++, (g[c] = h)))
                              : (q++, (g[c] = h), l++));
                        if (q > b) {
                          l++;
                          for (c in g) Cd.call(f, c) || (q--, delete g[c]);
                        }
                      }
                    else g !== f && ((g = f), l++);
                    return l;
                  }
                }
                function d() {
                  if ((p ? ((p = !1), b(f, f, i)) : b(f, h, i), k))
                    if (v(f))
                      if (e(f)) {
                        h = new Array(f.length);
                        for (var a = 0; a < f.length; a++) h[a] = f[a];
                      } else {
                        h = {};
                        for (var c in f) Cd.call(f, c) && (h[c] = f[c]);
                      }
                    else h = f;
                }
                c.$stateful = !0;
                var f,
                  g,
                  h,
                  i = this,
                  k = b.length > 1,
                  l = 0,
                  m = j(a, c),
                  n = [],
                  o = {},
                  p = !0,
                  q = 0;
                return this.$watch(m, d);
              },
              $digest: function() {
                var a,
                  e,
                  f,
                  i,
                  j,
                  l,
                  m,
                  n,
                  p,
                  r,
                  s,
                  t,
                  v = b,
                  x = this,
                  C = [];
                o("$digest"),
                  k.$$checkUrlChange(),
                  this === y && null !== h && (k.defer.cancel(h), w()),
                  (g = null);
                do {
                  for (n = !1, r = x; z.length; ) {
                    try {
                      (t = z.shift()), t.scope.$eval(t.expression, t.locals);
                    } catch (D) {
                      d(D);
                    }
                    g = null;
                  }
                  a: do {
                    if ((l = r.$$watchers))
                      for (m = l.length; m--; )
                        try {
                          if ((a = l[m]))
                            if (
                              ((j = a.get),
                              (e = j(r)) === (f = a.last) ||
                                (a.eq
                                  ? R(e, f)
                                  : "number" == typeof e &&
                                    "number" == typeof f &&
                                    isNaN(e) &&
                                    isNaN(f)))
                            ) {
                              if (a === g) {
                                n = !1;
                                break a;
                              }
                            } else
                              (n = !0),
                                (g = a),
                                (a.last = a.eq ? P(e, null) : e),
                                (i = a.fn),
                                i(e, f === u ? e : f, r),
                                5 > v &&
                                  ((s = 4 - v),
                                  C[s] || (C[s] = []),
                                  C[s].push({
                                    msg: A(a.exp)
                                      ? "fn: " +
                                        (a.exp.name || a.exp.toString())
                                      : a.exp,
                                    newVal: e,
                                    oldVal: f
                                  }));
                        } catch (D) {
                          d(D);
                        }
                    if (
                      !(p =
                        (r.$$watchersCount && r.$$childHead) ||
                        (r !== x && r.$$nextSibling))
                    )
                      for (; r !== x && !(p = r.$$nextSibling); ) r = r.$parent;
                  } while ((r = p));
                  if ((n || z.length) && !v--)
                    throw (q(),
                    c(
                      "infdig",
                      "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}",
                      b,
                      C
                    ));
                } while (n || z.length);
                for (q(); B.length; )
                  try {
                    B.shift()();
                  } catch (D) {
                    d(D);
                  }
              },
              $destroy: function() {
                if (!this.$$destroyed) {
                  var a = this.$parent;
                  this.$broadcast("$destroy"),
                    (this.$$destroyed = !0),
                    this === y && k.$$applicationDestroyed(),
                    r(this, -this.$$watchersCount);
                  for (var b in this.$$listenerCount)
                    s(this, this.$$listenerCount[b], b);
                  a &&
                    a.$$childHead == this &&
                    (a.$$childHead = this.$$nextSibling),
                    a &&
                      a.$$childTail == this &&
                      (a.$$childTail = this.$$prevSibling),
                    this.$$prevSibling &&
                      (this.$$prevSibling.$$nextSibling = this.$$nextSibling),
                    this.$$nextSibling &&
                      (this.$$nextSibling.$$prevSibling = this.$$prevSibling),
                    (this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = p),
                    (this.$on = this.$watch = this.$watchGroup = function() {
                      return p;
                    }),
                    (this.$$listeners = {}),
                    (this.$$nextSibling = null),
                    m(this);
                }
              },
              $eval: function(a, b) {
                return j(a)(this, b);
              },
              $evalAsync: function(a, b) {
                y.$$phase ||
                  z.length ||
                  k.defer(function() {
                    z.length && y.$digest();
                  }),
                  z.push({ scope: this, expression: j(a), locals: b });
              },
              $$postDigest: function(a) {
                B.push(a);
              },
              $apply: function(a) {
                try {
                  o("$apply");
                  try {
                    return this.$eval(a);
                  } finally {
                    q();
                  }
                } catch (b) {
                  d(b);
                } finally {
                  try {
                    y.$digest();
                  } catch (b) {
                    throw (d(b), b);
                  }
                }
              },
              $applyAsync: function(a) {
                function b() {
                  c.$eval(a);
                }
                var c = this;
                a && C.push(b), (a = j(a)), x();
              },
              $on: function(a, b) {
                var c = this.$$listeners[a];
                c || (this.$$listeners[a] = c = []), c.push(b);
                var d = this;
                do
                  d.$$listenerCount[a] || (d.$$listenerCount[a] = 0),
                    d.$$listenerCount[a]++;
                while ((d = d.$parent));
                var e = this;
                return function() {
                  var d = c.indexOf(b);
                  -1 !== d && ((c[d] = null), s(e, 1, a));
                };
              },
              $emit: function(a, b) {
                var c,
                  e,
                  f,
                  g = [],
                  h = this,
                  i = !1,
                  j = {
                    name: a,
                    targetScope: h,
                    stopPropagation: function() {
                      i = !0;
                    },
                    preventDefault: function() {
                      j.defaultPrevented = !0;
                    },
                    defaultPrevented: !1
                  },
                  k = S([j], arguments, 1);
                do {
                  for (
                    c = h.$$listeners[a] || g,
                      j.currentScope = h,
                      e = 0,
                      f = c.length;
                    f > e;
                    e++
                  )
                    if (c[e])
                      try {
                        c[e].apply(null, k);
                      } catch (l) {
                        d(l);
                      }
                    else c.splice(e, 1), e--, f--;
                  if (i) return (j.currentScope = null), j;
                  h = h.$parent;
                } while (h);
                return (j.currentScope = null), j;
              },
              $broadcast: function(a, b) {
                var c = this,
                  e = c,
                  f = c,
                  g = {
                    name: a,
                    targetScope: c,
                    preventDefault: function() {
                      g.defaultPrevented = !0;
                    },
                    defaultPrevented: !1
                  };
                if (!c.$$listenerCount[a]) return g;
                for (var h, i, j, k = S([g], arguments, 1); (e = f); ) {
                  for (
                    g.currentScope = e,
                      h = e.$$listeners[a] || [],
                      i = 0,
                      j = h.length;
                    j > i;
                    i++
                  )
                    if (h[i])
                      try {
                        h[i].apply(null, k);
                      } catch (l) {
                        d(l);
                      }
                    else h.splice(i, 1), i--, j--;
                  if (
                    !(f =
                      (e.$$listenerCount[a] && e.$$childHead) ||
                      (e !== c && e.$$nextSibling))
                  )
                    for (; e !== c && !(f = e.$$nextSibling); ) e = e.$parent;
                }
                return (g.currentScope = null), g;
              }
            };
            var y = new n(),
              z = (y.$$asyncQueue = []),
              B = (y.$$postDigestQueue = []),
              C = (y.$$applyAsyncQueue = []);
            return y;
          }
        ]);
    }
    function wc() {
      var a = /^\s*(https?|ftp|mailto|tel|file):/,
        b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
      (this.aHrefSanitizationWhitelist = function(b) {
        return u(b) ? ((a = b), this) : a;
      }),
        (this.imgSrcSanitizationWhitelist = function(a) {
          return u(a) ? ((b = a), this) : b;
        }),
        (this.$get = function() {
          return function(c, d) {
            var e,
              f = d ? b : a;
            return (e = Fc(c).href), "" === e || e.match(f) ? c : "unsafe:" + e;
          };
        });
    }
    function xc(a) {
      if ("self" === a) return a;
      if (x(a)) {
        if (a.indexOf("***") > -1)
          throw qf(
            "iwcard",
            "Illegal sequence *** in string matcher.  String: {0}",
            a
          );
        return (
          (a = Wd(a)
            .replace("\\*\\*", ".*")
            .replace("\\*", "[^:/.?&;]*")),
          new RegExp("^" + a + "$")
        );
      }
      if (B(a)) return new RegExp("^" + a.source + "$");
      throw qf(
        "imatcher",
        'Matchers may only be "self", string patterns or RegExp objects'
      );
    }
    function yc(a) {
      var b = [];
      return (
        u(a) &&
          f(a, function(a) {
            b.push(xc(a));
          }),
        b
      );
    }
    function zc() {
      this.SCE_CONTEXTS = rf;
      var a = ["self"],
        b = [];
      (this.resourceUrlWhitelist = function(b) {
        return arguments.length && (a = yc(b)), a;
      }),
        (this.resourceUrlBlacklist = function(a) {
          return arguments.length && (b = yc(a)), b;
        }),
        (this.$get = [
          "$injector",
          function(c) {
            function d(a, b) {
              return "self" === a ? Gc(b) : !!a.exec(b.href);
            }
            function e(c) {
              var e,
                f,
                g = Fc(c.toString()),
                h = !1;
              for (e = 0, f = a.length; f > e; e++)
                if (d(a[e], g)) {
                  h = !0;
                  break;
                }
              if (h)
                for (e = 0, f = b.length; f > e; e++)
                  if (d(b[e], g)) {
                    h = !1;
                    break;
                  }
              return h;
            }
            function f(a) {
              var b = function(a) {
                this.$$unwrapTrustedValue = function() {
                  return a;
                };
              };
              return (
                a && (b.prototype = new a()),
                (b.prototype.valueOf = function() {
                  return this.$$unwrapTrustedValue();
                }),
                (b.prototype.toString = function() {
                  return this.$$unwrapTrustedValue().toString();
                }),
                b
              );
            }
            function g(a, b) {
              var c = l.hasOwnProperty(a) ? l[a] : null;
              if (!c)
                throw qf(
                  "icontext",
                  "Attempted to trust a value in invalid context. Context: {0}; Value: {1}",
                  a,
                  b
                );
              if (null === b || t(b) || "" === b) return b;
              if ("string" != typeof b)
                throw qf(
                  "itype",
                  "Attempted to trust a non-string value in a content requiring a string: Context: {0}",
                  a
                );
              return new c(b);
            }
            function h(a) {
              return a instanceof k ? a.$$unwrapTrustedValue() : a;
            }
            function i(a, b) {
              if (null === b || t(b) || "" === b) return b;
              var c = l.hasOwnProperty(a) ? l[a] : null;
              if (c && b instanceof c) return b.$$unwrapTrustedValue();
              if (a === rf.RESOURCE_URL) {
                if (e(b)) return b;
                throw qf(
                  "insecurl",
                  "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}",
                  b.toString()
                );
              }
              if (a === rf.HTML) return j(b);
              throw qf(
                "unsafe",
                "Attempting to use an unsafe value in a safe context."
              );
            }
            var j = function(a) {
              throw qf(
                "unsafe",
                "Attempting to use an unsafe value in a safe context."
              );
            };
            c.has("$sanitize") && (j = c.get("$sanitize"));
            var k = f(),
              l = {};
            return (
              (l[rf.HTML] = f(k)),
              (l[rf.CSS] = f(k)),
              (l[rf.URL] = f(k)),
              (l[rf.JS] = f(k)),
              (l[rf.RESOURCE_URL] = f(l[rf.URL])),
              { trustAs: g, getTrusted: i, valueOf: h }
            );
          }
        ]);
    }
    function Ac() {
      var a = !0;
      (this.enabled = function(b) {
        return arguments.length && (a = !!b), a;
      }),
        (this.$get = [
          "$parse",
          "$sceDelegate",
          function(b, c) {
            if (a && 8 > Hd)
              throw qf(
                "iequirks",
                "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information."
              );
            var d = Q(rf);
            (d.isEnabled = function() {
              return a;
            }),
              (d.trustAs = c.trustAs),
              (d.getTrusted = c.getTrusted),
              (d.valueOf = c.valueOf),
              a ||
                ((d.trustAs = d.getTrusted = function(a, b) {
                  return b;
                }),
                (d.valueOf = q)),
              (d.parseAs = function(a, c) {
                var e = b(c);
                return e.literal && e.constant
                  ? e
                  : b(c, function(b) {
                      return d.getTrusted(a, b);
                    });
              });
            var e = d.parseAs,
              g = d.getTrusted,
              h = d.trustAs;
            return (
              f(rf, function(a, b) {
                var c = Dd(b);
                (d[xa("parse_as_" + c)] = function(b) {
                  return e(a, b);
                }),
                  (d[xa("get_trusted_" + c)] = function(b) {
                    return g(a, b);
                  }),
                  (d[xa("trust_as_" + c)] = function(b) {
                    return h(a, b);
                  });
              }),
              d
            );
          }
        ]);
    }
    function Bc() {
      this.$get = [
        "$window",
        "$document",
        function(a, b) {
          var c,
            d,
            e = {},
            f = a.chrome && a.chrome.app && a.chrome.app.runtime,
            g = !f && a.history && a.history.pushState,
            h = n(
              (/android (\d+)/.exec(Dd((a.navigator || {}).userAgent)) || [])[1]
            ),
            i = /Boxee/i.test((a.navigator || {}).userAgent),
            j = b[0] || {},
            k = /^(Moz|webkit|ms)(?=[A-Z])/,
            l = j.body && j.body.style,
            m = !1,
            o = !1;
          if (l) {
            for (var p in l)
              if ((d = k.exec(p))) {
                (c = d[0]), (c = c.substr(0, 1).toUpperCase() + c.substr(1));
                break;
              }
            c || (c = "WebkitOpacity" in l && "webkit"),
              (m = !!("transition" in l || c + "Transition" in l)),
              (o = !!("animation" in l || c + "Animation" in l)),
              !h ||
                (m && o) ||
                ((m = x(l.webkitTransition)), (o = x(l.webkitAnimation)));
          }
          return {
            history: !(!g || 4 > h || i),
            hasEvent: function(a) {
              if ("input" === a && 11 >= Hd) return !1;
              if (t(e[a])) {
                var b = j.createElement("div");
                e[a] = "on" + a in b;
              }
              return e[a];
            },
            csp: Xd(),
            vendorPrefix: c,
            transitions: m,
            animations: o,
            android: h
          };
        }
      ];
    }
    function Cc() {
      var a;
      (this.httpOptions = function(b) {
        return b ? ((a = b), this) : a;
      }),
        (this.$get = [
          "$templateCache",
          "$http",
          "$q",
          "$sce",
          function(b, c, d, e) {
            function f(g, h) {
              function i(a) {
                if (!h)
                  throw sf(
                    "tpload",
                    "Failed to load template: {0} (HTTP status: {1} {2})",
                    g,
                    a.status,
                    a.statusText
                  );
                return d.reject(a);
              }
              f.totalPendingRequests++,
                (x(g) && b.get(g)) || (g = e.getTrustedResourceUrl(g));
              var j = c.defaults && c.defaults.transformResponse;
              return (
                Td(j)
                  ? (j = j.filter(function(a) {
                      return a !== zb;
                    }))
                  : j === zb && (j = null),
                c
                  .get(g, l({ cache: b, transformResponse: j }, a))
                  ["finally"](function() {
                    f.totalPendingRequests--;
                  })
                  .then(function(a) {
                    return b.put(g, a.data), a.data;
                  }, i)
              );
            }
            return (f.totalPendingRequests = 0), f;
          }
        ]);
    }
    function Dc() {
      this.$get = [
        "$rootScope",
        "$browser",
        "$location",
        function(a, b, c) {
          var d = {};
          return (
            (d.findBindings = function(a, b, c) {
              var d = a.getElementsByClassName("ng-binding"),
                e = [];
              return (
                f(d, function(a) {
                  var d = Rd.element(a).data("$binding");
                  d &&
                    f(d, function(d) {
                      if (c) {
                        var f = new RegExp("(^|\\s)" + Wd(b) + "(\\s|\\||$)");
                        f.test(d) && e.push(a);
                      } else -1 != d.indexOf(b) && e.push(a);
                    });
                }),
                e
              );
            }),
            (d.findModels = function(a, b, c) {
              for (
                var d = ["ng-", "data-ng-", "ng\\:"], e = 0;
                e < d.length;
                ++e
              ) {
                var f = c ? "=" : "*=",
                  g = "[" + d[e] + "model" + f + '"' + b + '"]',
                  h = a.querySelectorAll(g);
                if (h.length) return h;
              }
            }),
            (d.getLocation = function() {
              return c.url();
            }),
            (d.setLocation = function(b) {
              b !== c.url() && (c.url(b), a.$digest());
            }),
            (d.whenStable = function(a) {
              b.notifyWhenNoOutstandingRequests(a);
            }),
            d
          );
        }
      ];
    }
    function Ec() {
      this.$get = [
        "$rootScope",
        "$browser",
        "$q",
        "$$q",
        "$exceptionHandler",
        function(a, b, c, d, e) {
          function f(f, h, i) {
            A(f) || ((i = h), (h = f), (f = p));
            var j,
              k = T(arguments, 3),
              l = u(i) && !i,
              m = (l ? d : c).defer(),
              n = m.promise;
            return (
              (j = b.defer(function() {
                try {
                  m.resolve(f.apply(null, k));
                } catch (b) {
                  m.reject(b), e(b);
                } finally {
                  delete g[n.$$timeoutId];
                }
                l || a.$apply();
              }, h)),
              (n.$$timeoutId = j),
              (g[j] = m),
              n
            );
          }
          var g = {};
          return (
            (f.cancel = function(a) {
              return a && a.$$timeoutId in g
                ? (g[a.$$timeoutId].reject("canceled"),
                  delete g[a.$$timeoutId],
                  b.defer.cancel(a.$$timeoutId))
                : !1;
            }),
            f
          );
        }
      ];
    }
    function Fc(a) {
      var b = a;
      return (
        Hd && (tf.setAttribute("href", b), (b = tf.href)),
        tf.setAttribute("href", b),
        {
          href: tf.href,
          protocol: tf.protocol ? tf.protocol.replace(/:$/, "") : "",
          host: tf.host,
          search: tf.search ? tf.search.replace(/^\?/, "") : "",
          hash: tf.hash ? tf.hash.replace(/^#/, "") : "",
          hostname: tf.hostname,
          port: tf.port,
          pathname:
            "/" === tf.pathname.charAt(0) ? tf.pathname : "/" + tf.pathname
        }
      );
    }
    function Gc(a) {
      var b = x(a) ? Fc(a) : a;
      return b.protocol === uf.protocol && b.host === uf.host;
    }
    function Hc() {
      this.$get = r(a);
    }
    function Ic(a) {
      function b(a) {
        try {
          return decodeURIComponent(a);
        } catch (b) {
          return a;
        }
      }
      var c = a[0] || {},
        d = {},
        e = "";
      return function() {
        var a,
          f,
          g,
          h,
          i,
          j = c.cookie || "";
        if (j !== e)
          for (e = j, a = e.split("; "), d = {}, g = 0; g < a.length; g++)
            (f = a[g]),
              (h = f.indexOf("=")),
              h > 0 &&
                ((i = b(f.substring(0, h))),
                t(d[i]) && (d[i] = b(f.substring(h + 1))));
        return d;
      };
    }
    function Jc() {
      this.$get = Ic;
    }
    function Kc(a) {
      function b(d, e) {
        if (v(d)) {
          var g = {};
          return (
            f(d, function(a, c) {
              g[c] = b(c, a);
            }),
            g
          );
        }
        return a.factory(d + c, e);
      }
      var c = "Filter";
      (this.register = b),
        (this.$get = [
          "$injector",
          function(a) {
            return function(b) {
              return a.get(b + c);
            };
          }
        ]),
        b("currency", Pc),
        b("date", cd),
        b("filter", Lc),
        b("json", dd),
        b("limitTo", ed),
        b("lowercase", Bf),
        b("number", Qc),
        b("orderBy", fd),
        b("uppercase", Cf);
    }
    function Lc() {
      return function(a, b, c) {
        if (!e(a)) {
          if (null == a) return a;
          throw d("filter")("notarray", "Expected array but received: {0}", a);
        }
        var f,
          g,
          h = Oc(b);
        switch (h) {
          case "function":
            f = b;
            break;
          case "boolean":
          case "null":
          case "number":
          case "string":
            g = !0;
          case "object":
            f = Mc(b, c, g);
            break;
          default:
            return a;
        }
        return Array.prototype.filter.call(a, f);
      };
    }
    function Mc(a, b, c) {
      var d,
        e = v(a) && "$" in a;
      return (
        b === !0
          ? (b = R)
          : A(b) ||
            (b = function(a, b) {
              return t(a)
                ? !1
                : null === a || null === b
                ? a === b
                : v(b) || (v(a) && !s(a))
                ? !1
                : ((a = Dd("" + a)), (b = Dd("" + b)), -1 !== a.indexOf(b));
            }),
        (d = function(d) {
          return e && !v(d) ? Nc(d, a.$, b, !1) : Nc(d, a, b, c);
        })
      );
    }
    function Nc(a, b, c, d, e) {
      var f = Oc(a),
        g = Oc(b);
      if ("string" === g && "!" === b.charAt(0))
        return !Nc(a, b.substring(1), c, d);
      if (Td(a))
        return a.some(function(a) {
          return Nc(a, b, c, d);
        });
      switch (f) {
        case "object":
          var h;
          if (d) {
            for (h in a)
              if ("$" !== h.charAt(0) && Nc(a[h], b, c, !0)) return !0;
            return e ? !1 : Nc(a, b, c, !1);
          }
          if ("object" === g) {
            for (h in b) {
              var i = b[h];
              if (!A(i) && !t(i)) {
                var j = "$" === h,
                  k = j ? a : a[h];
                if (!Nc(k, i, c, j, j)) return !1;
              }
            }
            return !0;
          }
          return c(a, b);
        case "function":
          return !1;
        default:
          return c(a, b);
      }
    }
    function Oc(a) {
      return null === a ? "null" : typeof a;
    }
    function Pc(a) {
      var b = a.NUMBER_FORMATS;
      return function(a, c, d) {
        return (
          t(c) && (c = b.CURRENCY_SYM),
          t(d) && (d = b.PATTERNS[1].maxFrac),
          null == a
            ? a
            : Tc(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, d).replace(
                /\u00A4/g,
                c
              )
        );
      };
    }
    function Qc(a) {
      var b = a.NUMBER_FORMATS;
      return function(a, c) {
        return null == a
          ? a
          : Tc(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c);
      };
    }
    function Rc(a) {
      var b,
        c,
        d,
        e,
        f,
        g = 0;
      for (
        (c = a.indexOf(wf)) > -1 && (a = a.replace(wf, "")),
          (d = a.search(/e/i)) > 0
            ? (0 > c && (c = d),
              (c += +a.slice(d + 1)),
              (a = a.substring(0, d)))
            : 0 > c && (c = a.length),
          d = 0;
        a.charAt(d) == xf;
        d++
      );
      if (d == (f = a.length)) (b = [0]), (c = 1);
      else {
        for (f--; a.charAt(f) == xf; ) f--;
        for (c -= d, b = [], e = 0; f >= d; d++, e++) b[e] = +a.charAt(d);
      }
      return (
        c > vf && ((b = b.splice(0, vf - 1)), (g = c - 1), (c = 1)),
        { d: b, e: g, i: c }
      );
    }
    function Sc(a, b, c, d) {
      var e = a.d,
        f = e.length - a.i;
      b = t(b) ? Math.min(Math.max(c, f), d) : +b;
      var g = b + a.i,
        h = e[g];
      if (g > 0) {
        e.splice(Math.max(a.i, g));
        for (var i = g; i < e.length; i++) e[i] = 0;
      } else {
        (f = Math.max(0, f)),
          (a.i = 1),
          (e.length = Math.max(1, (g = b + 1))),
          (e[0] = 0);
        for (var j = 1; g > j; j++) e[j] = 0;
      }
      if (h >= 5)
        if (0 > g - 1) {
          for (var k = 0; k > g; k--) e.unshift(0), a.i++;
          e.unshift(1), a.i++;
        } else e[g - 1]++;
      for (; f < Math.max(0, b); f++) e.push(0);
      var l = e.reduceRight(function(a, b, c, d) {
        return (b += a), (d[c] = b % 10), Math.floor(b / 10);
      }, 0);
      l && (e.unshift(l), a.i++);
    }
    function Tc(a, b, c, d, e) {
      if ((!x(a) && !y(a)) || isNaN(a)) return "";
      var f,
        g = !isFinite(a),
        h = !1,
        i = Math.abs(a) + "",
        j = "";
      if (g) j = "∞";
      else {
        (f = Rc(i)), Sc(f, e, b.minFrac, b.maxFrac);
        var k = f.d,
          l = f.i,
          m = f.e,
          n = [];
        for (
          h = k.reduce(function(a, b) {
            return a && !b;
          }, !0);
          0 > l;

        )
          k.unshift(0), l++;
        l > 0 ? (n = k.splice(l)) : ((n = k), (k = [0]));
        var o = [];
        for (
          k.length >= b.lgSize && o.unshift(k.splice(-b.lgSize).join(""));
          k.length > b.gSize;

        )
          o.unshift(k.splice(-b.gSize).join(""));
        k.length && o.unshift(k.join("")),
          (j = o.join(c)),
          n.length && (j += d + n.join("")),
          m && (j += "e+" + m);
      }
      return 0 > a && !h ? b.negPre + j + b.negSuf : b.posPre + j + b.posSuf;
    }
    function Uc(a, b, c, d) {
      var e = "";
      for (
        (0 > a || (d && 0 >= a)) && (d ? (a = -a + 1) : ((a = -a), (e = "-"))),
          a = "" + a;
        a.length < b;

      )
        a = xf + a;
      return c && (a = a.substr(a.length - b)), e + a;
    }
    function Vc(a, b, c, d, e) {
      return (
        (c = c || 0),
        function(f) {
          var g = f["get" + a]();
          return (
            (c > 0 || g > -c) && (g += c),
            0 === g && -12 == c && (g = 12),
            Uc(g, b, d, e)
          );
        }
      );
    }
    function Wc(a, b, c) {
      return function(d, e) {
        var f = d["get" + a](),
          g = (c ? "STANDALONE" : "") + (b ? "SHORT" : ""),
          h = Ed(g + a);
        return e[h][f];
      };
    }
    function Xc(a, b, c) {
      var d = -1 * c,
        e = d >= 0 ? "+" : "";
      return (e +=
        Uc(Math[d > 0 ? "floor" : "ceil"](d / 60), 2) +
        Uc(Math.abs(d % 60), 2));
    }
    function Yc(a) {
      var b = new Date(a, 0, 1).getDay();
      return new Date(a, 0, (4 >= b ? 5 : 12) - b);
    }
    function Zc(a) {
      return new Date(
        a.getFullYear(),
        a.getMonth(),
        a.getDate() + (4 - a.getDay())
      );
    }
    function $c(a) {
      return function(b) {
        var c = Yc(b.getFullYear()),
          d = Zc(b),
          e = +d - +c,
          f = 1 + Math.round(e / 6048e5);
        return Uc(f, a);
      };
    }
    function _c(a, b) {
      return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1];
    }
    function ad(a, b) {
      return a.getFullYear() <= 0 ? b.ERAS[0] : b.ERAS[1];
    }
    function bd(a, b) {
      return a.getFullYear() <= 0 ? b.ERANAMES[0] : b.ERANAMES[1];
    }
    function cd(a) {
      function b(a) {
        var b;
        if ((b = a.match(c))) {
          var d = new Date(0),
            e = 0,
            f = 0,
            g = b[8] ? d.setUTCFullYear : d.setFullYear,
            h = b[8] ? d.setUTCHours : d.setHours;
          b[9] && ((e = n(b[9] + b[10])), (f = n(b[9] + b[11]))),
            g.call(d, n(b[1]), n(b[2]) - 1, n(b[3]));
          var i = n(b[4] || 0) - e,
            j = n(b[5] || 0) - f,
            k = n(b[6] || 0),
            l = Math.round(1e3 * parseFloat("0." + (b[7] || 0)));
          return h.call(d, i, j, k, l), d;
        }
        return a;
      }
      var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
      return function(c, d, e) {
        var g,
          h,
          i = "",
          j = [];
        if (
          ((d = d || "mediumDate"),
          (d = a.DATETIME_FORMATS[d] || d),
          x(c) && (c = Af.test(c) ? n(c) : b(c)),
          y(c) && (c = new Date(c)),
          !z(c) || !isFinite(c.getTime()))
        )
          return c;
        for (; d; )
          (h = zf.exec(d)),
            h ? ((j = S(j, h, 1)), (d = j.pop())) : (j.push(d), (d = null));
        var k = c.getTimezoneOffset();
        return (
          e && ((k = Y(e, k)), (c = $(c, e, !0))),
          f(j, function(b) {
            (g = yf[b]),
              (i += g
                ? g(c, a.DATETIME_FORMATS, k)
                : "''" === b
                ? "'"
                : b.replace(/(^'|'$)/g, "").replace(/''/g, "'"));
          }),
          i
        );
      };
    }
    function dd() {
      return function(a, b) {
        return t(b) && (b = 2), W(a, b);
      };
    }
    function ed() {
      return function(a, b, c) {
        return (
          (b = Math.abs(Number(b)) === 1 / 0 ? Number(b) : n(b)),
          isNaN(b)
            ? a
            : (y(a) && (a = a.toString()),
              Td(a) || x(a)
                ? ((c = !c || isNaN(c) ? 0 : n(c)),
                  (c = 0 > c ? Math.max(0, a.length + c) : c),
                  b >= 0
                    ? a.slice(c, c + b)
                    : 0 === c
                    ? a.slice(b, a.length)
                    : a.slice(Math.max(0, c + b), c))
                : a)
        );
      };
    }
    function fd(a) {
      function b(b, c) {
        return (
          (c = c ? -1 : 1),
          b.map(function(b) {
            var d = 1,
              e = q;
            if (A(b)) e = b;
            else if (
              x(b) &&
              (("+" == b.charAt(0) || "-" == b.charAt(0)) &&
                ((d = "-" == b.charAt(0) ? -1 : 1), (b = b.substring(1))),
              "" !== b && ((e = a(b)), e.constant))
            ) {
              var f = e();
              e = function(a) {
                return a[f];
              };
            }
            return { get: e, descending: d * c };
          })
        );
      }
      function c(a) {
        switch (typeof a) {
          case "number":
          case "boolean":
          case "string":
            return !0;
          default:
            return !1;
        }
      }
      function f(a, b) {
        return "function" == typeof a.valueOf && ((a = a.valueOf()), c(a))
          ? a
          : s(a) && ((a = a.toString()), c(a))
          ? a
          : b;
      }
      function g(a, b) {
        var c = typeof a;
        return (
          null === a
            ? ((c = "string"), (a = "null"))
            : "string" === c
            ? (a = a.toLowerCase())
            : "object" === c && (a = f(a, b)),
          { value: a, type: c }
        );
      }
      function h(a, b) {
        var c = 0;
        return (
          a.type === b.type
            ? a.value !== b.value && (c = a.value < b.value ? -1 : 1)
            : (c = a.type < b.type ? -1 : 1),
          c
        );
      }
      return function(a, c, f) {
        function i(a, b) {
          return {
            value: a,
            predicateValues: k.map(function(c) {
              return g(c.get(a), b);
            })
          };
        }
        function j(a, b) {
          for (
            var c = 0, d = 0, e = k.length;
            e > d &&
            !(c =
              h(a.predicateValues[d], b.predicateValues[d]) * k[d].descending);
            ++d
          );
          return c;
        }
        if (null == a) return a;
        if (!e(a))
          throw d("orderBy")("notarray", "Expected array but received: {0}", a);
        Td(c) || (c = [c]), 0 === c.length && (c = ["+"]);
        var k = b(c, f);
        k.push({
          get: function() {
            return {};
          },
          descending: f ? -1 : 1
        });
        var l = Array.prototype.map.call(a, i);
        return (
          l.sort(j),
          (a = l.map(function(a) {
            return a.value;
          }))
        );
      };
    }
    function gd(a) {
      return A(a) && (a = { link: a }), (a.restrict = a.restrict || "AC"), r(a);
    }
    function hd(a, b) {
      a.$name = b;
    }
    function id(a, b, d, e, g) {
      var h = this,
        i = [];
      (h.$error = {}),
        (h.$$success = {}),
        (h.$pending = c),
        (h.$name = g(b.name || b.ngForm || "")(d)),
        (h.$dirty = !1),
        (h.$pristine = !0),
        (h.$valid = !0),
        (h.$invalid = !1),
        (h.$submitted = !1),
        (h.$$parentForm = Ff),
        (h.$rollbackViewValue = function() {
          f(i, function(a) {
            a.$rollbackViewValue();
          });
        }),
        (h.$commitViewValue = function() {
          f(i, function(a) {
            a.$commitViewValue();
          });
        }),
        (h.$addControl = function(a) {
          oa(a.$name, "input"),
            i.push(a),
            a.$name && (h[a.$name] = a),
            (a.$$parentForm = h);
        }),
        (h.$$renameControl = function(a, b) {
          var c = a.$name;
          h[c] === a && delete h[c], (h[b] = a), (a.$name = b);
        }),
        (h.$removeControl = function(a) {
          a.$name && h[a.$name] === a && delete h[a.$name],
            f(h.$pending, function(b, c) {
              h.$setValidity(c, null, a);
            }),
            f(h.$error, function(b, c) {
              h.$setValidity(c, null, a);
            }),
            f(h.$$success, function(b, c) {
              h.$setValidity(c, null, a);
            }),
            O(i, a),
            (a.$$parentForm = Ff);
        }),
        xd({
          ctrl: this,
          $element: a,
          set: function(a, b, c) {
            var d = a[b];
            if (d) {
              var e = d.indexOf(c);
              -1 === e && d.push(c);
            } else a[b] = [c];
          },
          unset: function(a, b, c) {
            var d = a[b];
            d && (O(d, c), 0 === d.length && delete a[b]);
          },
          $animate: e
        }),
        (h.$setDirty = function() {
          e.removeClass(a, pg),
            e.addClass(a, qg),
            (h.$dirty = !0),
            (h.$pristine = !1),
            h.$$parentForm.$setDirty();
        }),
        (h.$setPristine = function() {
          e.setClass(a, pg, qg + " " + Gf),
            (h.$dirty = !1),
            (h.$pristine = !0),
            (h.$submitted = !1),
            f(i, function(a) {
              a.$setPristine();
            });
        }),
        (h.$setUntouched = function() {
          f(i, function(a) {
            a.$setUntouched();
          });
        }),
        (h.$setSubmitted = function() {
          e.addClass(a, Gf),
            (h.$submitted = !0),
            h.$$parentForm.$setSubmitted();
        });
    }
    function jd(a) {
      a.$formatters.push(function(b) {
        return a.$isEmpty(b) ? b : b.toString();
      });
    }
    function kd(a, b, c, d, e, f) {
      ld(a, b, c, d, e, f), jd(d);
    }
    function ld(a, b, c, d, e, f) {
      var g = Dd(b[0].type);
      if (!e.android) {
        var h = !1;
        b.on("compositionstart", function() {
          h = !0;
        }),
          b.on("compositionend", function() {
            (h = !1), j();
          });
      }
      var i,
        j = function(a) {
          if ((i && (f.defer.cancel(i), (i = null)), !h)) {
            var e = b.val(),
              j = a && a.type;
            "password" === g ||
              (c.ngTrim && "false" === c.ngTrim) ||
              (e = Vd(e)),
              (d.$viewValue !== e || ("" === e && d.$$hasNativeValidators)) &&
                d.$setViewValue(e, j);
          }
        };
      if (e.hasEvent("input")) b.on("input", j);
      else {
        var k = function(a, b, c) {
          i ||
            (i = f.defer(function() {
              (i = null), (b && b.value === c) || j(a);
            }));
        };
        b.on("keydown", function(a) {
          var b = a.keyCode;
          91 === b ||
            (b > 15 && 19 > b) ||
            (b >= 37 && 40 >= b) ||
            k(a, this, this.value);
        }),
          e.hasEvent("paste") && b.on("paste cut", k);
      }
      b.on("change", j),
        Uf[g] &&
          d.$$hasNativeValidators &&
          g === c.type &&
          b.on(Tf, function(a) {
            if (!i) {
              var b = this[Bd],
                c = b.badInput,
                d = b.typeMismatch;
              i = f.defer(function() {
                (i = null), (b.badInput !== c || b.typeMismatch !== d) && j(a);
              });
            }
          }),
        (d.$render = function() {
          var a = d.$isEmpty(d.$viewValue) ? "" : d.$viewValue;
          b.val() !== a && b.val(a);
        });
    }
    function md(a, b) {
      if (z(a)) return a;
      if (x(a)) {
        Qf.lastIndex = 0;
        var c = Qf.exec(a);
        if (c) {
          var d = +c[1],
            e = +c[2],
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = Yc(d),
            k = 7 * (e - 1);
          return (
            b &&
              ((f = b.getHours()),
              (g = b.getMinutes()),
              (h = b.getSeconds()),
              (i = b.getMilliseconds())),
            new Date(d, 0, j.getDate() + k, f, g, h, i)
          );
        }
      }
      return NaN;
    }
    function nd(a, b) {
      return function(c, d) {
        var e, g;
        if (z(c)) return c;
        if (x(c)) {
          if (
            ('"' == c.charAt(0) &&
              '"' == c.charAt(c.length - 1) &&
              (c = c.substring(1, c.length - 1)),
            Kf.test(c))
          )
            return new Date(c);
          if (((a.lastIndex = 0), (e = a.exec(c))))
            return (
              e.shift(),
              (g = d
                ? {
                    yyyy: d.getFullYear(),
                    MM: d.getMonth() + 1,
                    dd: d.getDate(),
                    HH: d.getHours(),
                    mm: d.getMinutes(),
                    ss: d.getSeconds(),
                    sss: d.getMilliseconds() / 1e3
                  }
                : { yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0 }),
              f(e, function(a, c) {
                c < b.length && (g[b[c]] = +a);
              }),
              new Date(
                g.yyyy,
                g.MM - 1,
                g.dd,
                g.HH,
                g.mm,
                g.ss || 0,
                1e3 * g.sss || 0
              )
            );
        }
        return NaN;
      };
    }
    function od(a, b, d, e) {
      return function(f, g, h, i, j, k, l) {
        function m(a) {
          return a && !(a.getTime && a.getTime() !== a.getTime());
        }
        function n(a) {
          return u(a) && !z(a) ? d(a) || c : a;
        }
        pd(f, g, h, i), ld(f, g, h, i, j, k);
        var o,
          p = i && i.$options && i.$options.timezone;
        if (
          ((i.$$parserName = a),
          i.$parsers.push(function(a) {
            if (i.$isEmpty(a)) return null;
            if (b.test(a)) {
              var e = d(a, o);
              return p && (e = $(e, p)), e;
            }
            return c;
          }),
          i.$formatters.push(function(a) {
            if (a && !z(a))
              throw wg("datefmt", "Expected `{0}` to be a date", a);
            return m(a)
              ? ((o = a), o && p && (o = $(o, p, !0)), l("date")(a, e, p))
              : ((o = null), "");
          }),
          u(h.min) || h.ngMin)
        ) {
          var q;
          (i.$validators.min = function(a) {
            return !m(a) || t(q) || d(a) >= q;
          }),
            h.$observe("min", function(a) {
              (q = n(a)), i.$validate();
            });
        }
        if (u(h.max) || h.ngMax) {
          var r;
          (i.$validators.max = function(a) {
            return !m(a) || t(r) || d(a) <= r;
          }),
            h.$observe("max", function(a) {
              (r = n(a)), i.$validate();
            });
        }
      };
    }
    function pd(a, b, d, e) {
      var f = b[0],
        g = (e.$$hasNativeValidators = v(f.validity));
      g &&
        e.$parsers.push(function(a) {
          var d = b.prop(Bd) || {};
          return d.badInput || d.typeMismatch ? c : a;
        });
    }
    function qd(a, b, d, e, f, g) {
      if (
        (pd(a, b, d, e),
        ld(a, b, d, e, f, g),
        (e.$$parserName = "number"),
        e.$parsers.push(function(a) {
          return e.$isEmpty(a) ? null : Nf.test(a) ? parseFloat(a) : c;
        }),
        e.$formatters.push(function(a) {
          if (!e.$isEmpty(a)) {
            if (!y(a)) throw wg("numfmt", "Expected `{0}` to be a number", a);
            a = a.toString();
          }
          return a;
        }),
        u(d.min) || d.ngMin)
      ) {
        var h;
        (e.$validators.min = function(a) {
          return e.$isEmpty(a) || t(h) || a >= h;
        }),
          d.$observe("min", function(a) {
            u(a) && !y(a) && (a = parseFloat(a, 10)),
              (h = y(a) && !isNaN(a) ? a : c),
              e.$validate();
          });
      }
      if (u(d.max) || d.ngMax) {
        var i;
        (e.$validators.max = function(a) {
          return e.$isEmpty(a) || t(i) || i >= a;
        }),
          d.$observe("max", function(a) {
            u(a) && !y(a) && (a = parseFloat(a, 10)),
              (i = y(a) && !isNaN(a) ? a : c),
              e.$validate();
          });
      }
    }
    function rd(a, b, c, d, e, f) {
      ld(a, b, c, d, e, f),
        jd(d),
        (d.$$parserName = "url"),
        (d.$validators.url = function(a, b) {
          var c = a || b;
          return d.$isEmpty(c) || Lf.test(c);
        });
    }
    function sd(a, b, c, d, e, f) {
      ld(a, b, c, d, e, f),
        jd(d),
        (d.$$parserName = "email"),
        (d.$validators.email = function(a, b) {
          var c = a || b;
          return d.$isEmpty(c) || Mf.test(c);
        });
    }
    function td(a, b, c, d) {
      t(c.name) && b.attr("name", i());
      var e = function(a) {
        b[0].checked && d.$setViewValue(c.value, a && a.type);
      };
      b.on("click", e),
        (d.$render = function() {
          var a = c.value;
          b[0].checked = a == d.$viewValue;
        }),
        c.$observe("value", d.$render);
    }
    function ud(a, b, c, d, e) {
      var f;
      if (u(d)) {
        if (((f = a(d)), !f.constant))
          throw wg(
            "constexpr",
            "Expected constant expression for `{0}`, but saw `{1}`.",
            c,
            d
          );
        return f(b);
      }
      return e;
    }
    function vd(a, b, c, d, e, f, g, h) {
      var i = ud(h, a, "ngTrueValue", c.ngTrueValue, !0),
        j = ud(h, a, "ngFalseValue", c.ngFalseValue, !1),
        k = function(a) {
          d.$setViewValue(b[0].checked, a && a.type);
        };
      b.on("click", k),
        (d.$render = function() {
          b[0].checked = d.$viewValue;
        }),
        (d.$isEmpty = function(a) {
          return a === !1;
        }),
        d.$formatters.push(function(a) {
          return R(a, i);
        }),
        d.$parsers.push(function(a) {
          return a ? i : j;
        });
    }
    function wd(a, b) {
      return (
        (a = "ngClass" + a),
        [
          "$animate",
          function(c) {
            function d(a, b) {
              var c = [];
              a: for (var d = 0; d < a.length; d++) {
                for (var e = a[d], f = 0; f < b.length; f++)
                  if (e == b[f]) continue a;
                c.push(e);
              }
              return c;
            }
            function e(a) {
              var b = [];
              return Td(a)
                ? (f(a, function(a) {
                    b = b.concat(e(a));
                  }),
                  b)
                : x(a)
                ? a.split(" ")
                : v(a)
                ? (f(a, function(a, c) {
                    a && (b = b.concat(c.split(" ")));
                  }),
                  b)
                : a;
            }
            return {
              restrict: "AC",
              link: function(g, h, i) {
                function j(a) {
                  var b = l(a, 1);
                  i.$addClass(b);
                }
                function k(a) {
                  var b = l(a, -1);
                  i.$removeClass(b);
                }
                function l(a, b) {
                  var c = h.data("$classCounts") || ra(),
                    d = [];
                  return (
                    f(a, function(a) {
                      (b > 0 || c[a]) &&
                        ((c[a] = (c[a] || 0) + b),
                        c[a] === +(b > 0) && d.push(a));
                    }),
                    h.data("$classCounts", c),
                    d.join(" ")
                  );
                }
                function m(a, b) {
                  var e = d(b, a),
                    f = d(a, b);
                  (e = l(e, 1)),
                    (f = l(f, -1)),
                    e && e.length && c.addClass(h, e),
                    f && f.length && c.removeClass(h, f);
                }
                function n(a) {
                  if (b === !0 || g.$index % 2 === b) {
                    var c = e(a || []);
                    if (o) {
                      if (!R(a, o)) {
                        var d = e(o);
                        m(d, c);
                      }
                    } else j(c);
                  }
                  o = Q(a);
                }
                var o;
                g.$watch(i[a], n, !0),
                  i.$observe("class", function(b) {
                    n(g.$eval(i[a]));
                  }),
                  "ngClass" !== a &&
                    g.$watch("$index", function(c, d) {
                      var f = 1 & c;
                      if (f !== (1 & d)) {
                        var h = e(g.$eval(i[a]));
                        f === b ? j(h) : k(h);
                      }
                    });
              }
            };
          }
        ]
      );
    }
    function xd(a) {
      function b(a, b, i) {
        t(b) ? d("$pending", a, i) : e("$pending", a, i),
          H(b)
            ? b
              ? (l(h.$error, a, i), k(h.$$success, a, i))
              : (k(h.$error, a, i), l(h.$$success, a, i))
            : (l(h.$error, a, i), l(h.$$success, a, i)),
          h.$pending
            ? (f(tg, !0), (h.$valid = h.$invalid = c), g("", null))
            : (f(tg, !1),
              (h.$valid = yd(h.$error)),
              (h.$invalid = !h.$valid),
              g("", h.$valid));
        var j;
        (j =
          h.$pending && h.$pending[a]
            ? c
            : h.$error[a]
            ? !1
            : h.$$success[a]
            ? !0
            : null),
          g(a, j),
          h.$$parentForm.$setValidity(a, j, h);
      }
      function d(a, b, c) {
        h[a] || (h[a] = {}), k(h[a], b, c);
      }
      function e(a, b, d) {
        h[a] && l(h[a], b, d), yd(h[a]) && (h[a] = c);
      }
      function f(a, b) {
        b && !j[a]
          ? (m.addClass(i, a), (j[a] = !0))
          : !b && j[a] && (m.removeClass(i, a), (j[a] = !1));
      }
      function g(a, b) {
        (a = a ? "-" + ka(a, "-") : ""),
          f(ng + a, b === !0),
          f(og + a, b === !1);
      }
      var h = a.ctrl,
        i = a.$element,
        j = {},
        k = a.set,
        l = a.unset,
        m = a.$animate;
      (j[og] = !(j[ng] = i.hasClass(ng))), (h.$setValidity = b);
    }
    function yd(a) {
      if (a) for (var b in a) if (a.hasOwnProperty(b)) return !1;
      return !0;
    }
    function zd(a) {
      a[0].hasAttribute("selected") && (a[0].selected = !0);
    }
    var Ad = /^\/(.+)\/([a-z]*)$/,
      Bd = "validity",
      Cd = Object.prototype.hasOwnProperty,
      Dd = function(a) {
        return x(a) ? a.toLowerCase() : a;
      },
      Ed = function(a) {
        return x(a) ? a.toUpperCase() : a;
      },
      Fd = function(a) {
        return x(a)
          ? a.replace(/[A-Z]/g, function(a) {
              return String.fromCharCode(32 | a.charCodeAt(0));
            })
          : a;
      },
      Gd = function(a) {
        return x(a)
          ? a.replace(/[a-z]/g, function(a) {
              return String.fromCharCode(-33 & a.charCodeAt(0));
            })
          : a;
      };
    "i" !== "I".toLowerCase() && ((Dd = Fd), (Ed = Gd));
    var Hd,
      Id,
      Jd,
      Kd,
      Ld = [].slice,
      Md = [].splice,
      Nd = [].push,
      Od = Object.prototype.toString,
      Pd = Object.getPrototypeOf,
      Qd = d("ng"),
      Rd = a.angular || (a.angular = {}),
      Sd = 0;
    (Hd = b.documentMode), (p.$inject = []), (q.$inject = []);
    var Td = Array.isArray,
      Ud = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,
      Vd = function(a) {
        return x(a) ? a.trim() : a;
      },
      Wd = function(a) {
        return a
          .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
          .replace(/\x08/g, "\\x08");
      },
      Xd = function() {
        function a() {
          try {
            return new Function(""), !1;
          } catch (a) {
            return !0;
          }
        }
        if (!u(Xd.rules)) {
          var c =
            b.querySelector("[ng-csp]") || b.querySelector("[data-ng-csp]");
          if (c) {
            var d = c.getAttribute("ng-csp") || c.getAttribute("data-ng-csp");
            Xd.rules = {
              noUnsafeEval: !d || -1 !== d.indexOf("no-unsafe-eval"),
              noInlineStyle: !d || -1 !== d.indexOf("no-inline-style")
            };
          } else Xd.rules = { noUnsafeEval: a(), noInlineStyle: !1 };
        }
        return Xd.rules;
      },
      Yd = function() {
        if (u(Yd.name_)) return Yd.name_;
        var a,
          c,
          d,
          e,
          f = $d.length;
        for (c = 0; f > c; ++c)
          if (
            ((d = $d[c]),
            (a = b.querySelector("[" + d.replace(":", "\\:") + "jq]")))
          ) {
            e = a.getAttribute(d + "jq");
            break;
          }
        return (Yd.name_ = e);
      },
      Zd = /:/g,
      $d = ["ng-", "data-ng-", "ng:", "x-ng-"],
      _d = /[A-Z]/g,
      ae = !1,
      be = 1,
      ce = 2,
      de = 3,
      ee = 8,
      fe = 9,
      ge = 11,
      he = {
        full: "1.5.3",
        major: 1,
        minor: 5,
        dot: 3,
        codeName: "diplohaplontic-meiosis"
      };
    Fa.expando = "ng339";
    var ie = (Fa.cache = {}),
      je = 1,
      ke = function(a, b, c) {
        a.addEventListener(b, c, !1);
      },
      le = function(a, b, c) {
        a.removeEventListener(b, c, !1);
      };
    Fa._data = function(a) {
      return this.cache[a[this.expando]] || {};
    };
    var me = /([\:\-\_]+(.))/g,
      ne = /^moz([A-Z])/,
      oe = { mouseleave: "mouseout", mouseenter: "mouseover" },
      pe = d("jqLite"),
      qe = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      re = /<|&#?\w+;/,
      se = /<([\w:-]+)/,
      te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      ue = {
        option: [1, '<select multiple="multiple">', "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
    (ue.optgroup = ue.option),
      (ue.tbody = ue.tfoot = ue.colgroup = ue.caption = ue.thead),
      (ue.th = ue.td);
    var ve =
        Node.prototype.contains ||
        function(a) {
          return !!(16 & this.compareDocumentPosition(a));
        },
      we = (Fa.prototype = {
        ready: function(c) {
          function d() {
            e || ((e = !0), c());
          }
          var e = !1;
          "complete" === b.readyState
            ? setTimeout(d)
            : (this.on("DOMContentLoaded", d), Fa(a).on("load", d));
        },
        toString: function() {
          var a = [];
          return (
            f(this, function(b) {
              a.push("" + b);
            }),
            "[" + a.join(", ") + "]"
          );
        },
        eq: function(a) {
          return Id(a >= 0 ? this[a] : this[this.length + a]);
        },
        length: 0,
        push: Nd,
        sort: [].sort,
        splice: [].splice
      }),
      xe = {};
    f(
      "multiple,selected,checked,disabled,readOnly,required,open".split(","),
      function(a) {
        xe[Dd(a)] = a;
      }
    );
    var ye = {};
    f("input,select,option,textarea,button,form,details".split(","), function(
      a
    ) {
      ye[a] = !0;
    });
    var ze = {
      ngMinlength: "minlength",
      ngMaxlength: "maxlength",
      ngMin: "min",
      ngMax: "max",
      ngPattern: "pattern"
    };
    f({ data: La, removeData: Ja, hasData: Aa, cleanData: Ba }, function(a, b) {
      Fa[b] = a;
    }),
      f(
        {
          data: La,
          inheritedData: Ra,
          scope: function(a) {
            return (
              Id.data(a, "$scope") ||
              Ra(a.parentNode || a, ["$isolateScope", "$scope"])
            );
          },
          isolateScope: function(a) {
            return (
              Id.data(a, "$isolateScope") ||
              Id.data(a, "$isolateScopeNoTemplate")
            );
          },
          controller: Qa,
          injector: function(a) {
            return Ra(a, "$injector");
          },
          removeAttr: function(a, b) {
            a.removeAttribute(b);
          },
          hasClass: Ma,
          css: function(a, b, c) {
            return (b = xa(b)), u(c) ? void (a.style[b] = c) : a.style[b];
          },
          attr: function(a, b, d) {
            var e = a.nodeType;
            if (e !== de && e !== ce && e !== ee) {
              var f = Dd(b);
              if (xe[f]) {
                if (!u(d))
                  return a[b] || (a.attributes.getNamedItem(b) || p).specified
                    ? f
                    : c;
                d
                  ? ((a[b] = !0), a.setAttribute(b, f))
                  : ((a[b] = !1), a.removeAttribute(f));
              } else if (u(d)) a.setAttribute(b, d);
              else if (a.getAttribute) {
                var g = a.getAttribute(b, 2);
                return null === g ? c : g;
              }
            }
          },
          prop: function(a, b, c) {
            return u(c) ? void (a[b] = c) : a[b];
          },
          text: (function() {
            function a(a, b) {
              if (t(b)) {
                var c = a.nodeType;
                return c === be || c === de ? a.textContent : "";
              }
              a.textContent = b;
            }
            return (a.$dv = ""), a;
          })(),
          val: function(a, b) {
            if (t(b)) {
              if (a.multiple && "select" === N(a)) {
                var c = [];
                return (
                  f(a.options, function(a) {
                    a.selected && c.push(a.value || a.text);
                  }),
                  0 === c.length ? null : c
                );
              }
              return a.value;
            }
            a.value = b;
          },
          html: function(a, b) {
            return t(b) ? a.innerHTML : (Ha(a, !0), void (a.innerHTML = b));
          },
          empty: Sa
        },
        function(a, b) {
          Fa.prototype[b] = function(b, c) {
            var d,
              e,
              f = this.length;
            if (a !== Sa && t(2 == a.length && a !== Ma && a !== Qa ? b : c)) {
              if (v(b)) {
                for (d = 0; f > d; d++)
                  if (a === La) a(this[d], b);
                  else for (e in b) a(this[d], e, b[e]);
                return this;
              }
              for (
                var g = a.$dv, h = t(g) ? Math.min(f, 1) : f, i = 0;
                h > i;
                i++
              ) {
                var j = a(this[i], b, c);
                g = g ? g + j : j;
              }
              return g;
            }
            for (d = 0; f > d; d++) a(this[d], b, c);
            return this;
          };
        }
      ),
      f(
        {
          removeData: Ja,
          on: function(a, b, d, e) {
            if (u(e))
              throw pe(
                "onargs",
                "jqLite#on() does not support the `selector` or `eventData` parameters"
              );
            if (za(a)) {
              var f = Ka(a, !0),
                g = f.events,
                h = f.handle;
              h || (h = f.handle = Xa(a, g));
              for (
                var i = b.indexOf(" ") >= 0 ? b.split(" ") : [b],
                  j = i.length,
                  k = function(b, c, e) {
                    var f = g[b];
                    f ||
                      ((f = g[b] = []),
                      (f.specialHandlerWrapper = c),
                      "$destroy" === b || e || ke(a, b, h)),
                      f.push(d);
                  };
                j--;

              )
                (b = i[j]), oe[b] ? (k(oe[b], Za), k(b, c, !0)) : k(b);
            }
          },
          off: Ia,
          one: function(a, b, c) {
            (a = Id(a)),
              a.on(b, function d() {
                a.off(b, c), a.off(b, d);
              }),
              a.on(b, c);
          },
          replaceWith: function(a, b) {
            var c,
              d = a.parentNode;
            Ha(a),
              f(new Fa(b), function(b) {
                c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a),
                  (c = b);
              });
          },
          children: function(a) {
            var b = [];
            return (
              f(a.childNodes, function(a) {
                a.nodeType === be && b.push(a);
              }),
              b
            );
          },
          contents: function(a) {
            return a.contentDocument || a.childNodes || [];
          },
          append: function(a, b) {
            var c = a.nodeType;
            if (c === be || c === ge) {
              b = new Fa(b);
              for (var d = 0, e = b.length; e > d; d++) {
                var f = b[d];
                a.appendChild(f);
              }
            }
          },
          prepend: function(a, b) {
            if (a.nodeType === be) {
              var c = a.firstChild;
              f(new Fa(b), function(b) {
                a.insertBefore(b, c);
              });
            }
          },
          wrap: function(a, b) {
            Ea(
              a,
              Id(b)
                .eq(0)
                .clone()[0]
            );
          },
          remove: Ta,
          detach: function(a) {
            Ta(a, !0);
          },
          after: function(a, b) {
            var c = a,
              d = a.parentNode;
            b = new Fa(b);
            for (var e = 0, f = b.length; f > e; e++) {
              var g = b[e];
              d.insertBefore(g, c.nextSibling), (c = g);
            }
          },
          addClass: Oa,
          removeClass: Na,
          toggleClass: function(a, b, c) {
            b &&
              f(b.split(" "), function(b) {
                var d = c;
                t(d) && (d = !Ma(a, b)), (d ? Oa : Na)(a, b);
              });
          },
          parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== ge ? b : null;
          },
          next: function(a) {
            return a.nextElementSibling;
          },
          find: function(a, b) {
            return a.getElementsByTagName ? a.getElementsByTagName(b) : [];
          },
          clone: Ga,
          triggerHandler: function(a, b, c) {
            var d,
              e,
              g,
              h = b.type || b,
              i = Ka(a),
              j = i && i.events,
              k = j && j[h];
            k &&
              ((d = {
                preventDefault: function() {
                  this.defaultPrevented = !0;
                },
                isDefaultPrevented: function() {
                  return this.defaultPrevented === !0;
                },
                stopImmediatePropagation: function() {
                  this.immediatePropagationStopped = !0;
                },
                isImmediatePropagationStopped: function() {
                  return this.immediatePropagationStopped === !0;
                },
                stopPropagation: p,
                type: h,
                target: a
              }),
              b.type && (d = l(d, b)),
              (e = Q(k)),
              (g = c ? [d].concat(c) : [d]),
              f(e, function(b) {
                d.isImmediatePropagationStopped() || b.apply(a, g);
              }));
          }
        },
        function(a, b) {
          (Fa.prototype[b] = function(b, c, d) {
            for (var e, f = 0, g = this.length; g > f; f++)
              t(e)
                ? ((e = a(this[f], b, c, d)), u(e) && (e = Id(e)))
                : Pa(e, a(this[f], b, c, d));
            return u(e) ? e : this;
          }),
            (Fa.prototype.bind = Fa.prototype.on),
            (Fa.prototype.unbind = Fa.prototype.off);
        }
      ),
      (ab.prototype = {
        put: function(a, b) {
          this[_a(a, this.nextUid)] = b;
        },
        get: function(a) {
          return this[_a(a, this.nextUid)];
        },
        remove: function(a) {
          var b = this[(a = _a(a, this.nextUid))];
          return delete this[a], b;
        }
      });
    var Ae = [
        function() {
          this.$get = [
            function() {
              return ab;
            }
          ];
        }
      ],
      Be = /^([^\(]+?)=>/,
      Ce = /^[^\(]*\(\s*([^\)]*)\)/m,
      De = /,/,
      Ee = /^\s*(_?)(\S+?)\1\s*$/,
      Fe = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
      Ge = d("$injector");
    eb.$$annotate = db;
    var He = d("$animate"),
      Ie = 1,
      Je = "ng-animate",
      Ke = function() {
        this.$get = p;
      },
      Le = function() {
        var a = new ab(),
          b = [];
        this.$get = [
          "$$AnimateRunner",
          "$rootScope",
          function(c, d) {
            function e(a, b, c) {
              var d = !1;
              return (
                b &&
                  ((b = x(b) ? b.split(" ") : Td(b) ? b : []),
                  f(b, function(b) {
                    b && ((d = !0), (a[b] = c));
                  })),
                d
              );
            }
            function g() {
              f(b, function(b) {
                var c = a.get(b);
                if (c) {
                  var d = ib(b.attr("class")),
                    e = "",
                    g = "";
                  f(c, function(a, b) {
                    var c = !!d[b];
                    a !== c &&
                      (a
                        ? (e += (e.length ? " " : "") + b)
                        : (g += (g.length ? " " : "") + b));
                  }),
                    f(b, function(a) {
                      e && Oa(a, e), g && Na(a, g);
                    }),
                    a.remove(b);
                }
              }),
                (b.length = 0);
            }
            function h(c, f, h) {
              var i = a.get(c) || {},
                j = e(i, f, !0),
                k = e(i, h, !1);
              (j || k) &&
                (a.put(c, i), b.push(c), 1 === b.length && d.$$postDigest(g));
            }
            return {
              enabled: p,
              on: p,
              off: p,
              pin: p,
              push: function(a, b, d, e) {
                e && e(),
                  (d = d || {}),
                  d.from && a.css(d.from),
                  d.to && a.css(d.to),
                  (d.addClass || d.removeClass) &&
                    h(a, d.addClass, d.removeClass);
                var f = new c();
                return f.complete(), f;
              }
            };
          }
        ];
      },
      Me = [
        "$provide",
        function(a) {
          var b = this;
          (this.$$registeredAnimations = Object.create(null)),
            (this.register = function(c, d) {
              if (c && "." !== c.charAt(0))
                throw He(
                  "notcsel",
                  "Expecting class selector starting with '.' got '{0}'.",
                  c
                );
              var e = c + "-animation";
              (b.$$registeredAnimations[c.substr(1)] = e), a.factory(e, d);
            }),
            (this.classNameFilter = function(a) {
              if (
                1 === arguments.length &&
                ((this.$$classNameFilter = a instanceof RegExp ? a : null),
                this.$$classNameFilter)
              ) {
                var b = new RegExp("(\\s+|\\/)" + Je + "(\\s+|\\/)");
                if (b.test(this.$$classNameFilter.toString()))
                  throw He(
                    "nongcls",
                    '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.',
                    Je
                  );
              }
              return this.$$classNameFilter;
            }),
            (this.$get = [
              "$$animateQueue",
              function(a) {
                function b(a, b, c) {
                  if (c) {
                    var d = hb(c);
                    !d ||
                      d.parentNode ||
                      d.previousElementSibling ||
                      (c = null);
                  }
                  c ? c.after(a) : b.prepend(a);
                }
                return {
                  on: a.on,
                  off: a.off,
                  pin: a.pin,
                  enabled: a.enabled,
                  cancel: function(a) {
                    a.end && a.end();
                  },
                  enter: function(c, d, e, f) {
                    return (
                      (d = d && Id(d)),
                      (e = e && Id(e)),
                      (d = d || e.parent()),
                      b(c, d, e),
                      a.push(c, "enter", jb(f))
                    );
                  },
                  move: function(c, d, e, f) {
                    return (
                      (d = d && Id(d)),
                      (e = e && Id(e)),
                      (d = d || e.parent()),
                      b(c, d, e),
                      a.push(c, "move", jb(f))
                    );
                  },
                  leave: function(b, c) {
                    return a.push(b, "leave", jb(c), function() {
                      b.remove();
                    });
                  },
                  addClass: function(b, c, d) {
                    return (
                      (d = jb(d)),
                      (d.addClass = gb(d.addclass, c)),
                      a.push(b, "addClass", d)
                    );
                  },
                  removeClass: function(b, c, d) {
                    return (
                      (d = jb(d)),
                      (d.removeClass = gb(d.removeClass, c)),
                      a.push(b, "removeClass", d)
                    );
                  },
                  setClass: function(b, c, d, e) {
                    return (
                      (e = jb(e)),
                      (e.addClass = gb(e.addClass, c)),
                      (e.removeClass = gb(e.removeClass, d)),
                      a.push(b, "setClass", e)
                    );
                  },
                  animate: function(b, c, d, e, f) {
                    return (
                      (f = jb(f)),
                      (f.from = f.from ? l(f.from, c) : c),
                      (f.to = f.to ? l(f.to, d) : d),
                      (e = e || "ng-inline-animate"),
                      (f.tempClasses = gb(f.tempClasses, e)),
                      a.push(b, "animate", f)
                    );
                  }
                };
              }
            ]);
        }
      ],
      Ne = function() {
        this.$get = [
          "$$rAF",
          function(a) {
            function b(b) {
              c.push(b),
                c.length > 1 ||
                  a(function() {
                    for (var a = 0; a < c.length; a++) c[a]();
                    c = [];
                  });
            }
            var c = [];
            return function() {
              var a = !1;
              return (
                b(function() {
                  a = !0;
                }),
                function(c) {
                  a ? c() : b(c);
                }
              );
            };
          }
        ];
      },
      Oe = function() {
        this.$get = [
          "$q",
          "$sniffer",
          "$$animateAsyncRun",
          "$document",
          "$timeout",
          function(a, b, c, d, e) {
            function g(a) {
              this.setHost(a);
              var b = c(),
                f = function(a) {
                  e(a, 0, !1);
                };
              (this._doneCallbacks = []),
                (this._tick = function(a) {
                  var c = d[0];
                  c && c.hidden ? f(a) : b(a);
                }),
                (this._state = 0);
            }
            var h = 0,
              i = 1,
              j = 2;
            return (
              (g.chain = function(a, b) {
                function c() {
                  return d === a.length
                    ? void b(!0)
                    : void a[d](function(a) {
                        return a === !1 ? void b(!1) : (d++, void c());
                      });
                }
                var d = 0;
                c();
              }),
              (g.all = function(a, b) {
                function c(c) {
                  (e = e && c), ++d === a.length && b(e);
                }
                var d = 0,
                  e = !0;
                f(a, function(a) {
                  a.done(c);
                });
              }),
              (g.prototype = {
                setHost: function(a) {
                  this.host = a || {};
                },
                done: function(a) {
                  this._state === j ? a() : this._doneCallbacks.push(a);
                },
                progress: p,
                getPromise: function() {
                  if (!this.promise) {
                    var b = this;
                    this.promise = a(function(a, c) {
                      b.done(function(b) {
                        b === !1 ? c() : a();
                      });
                    });
                  }
                  return this.promise;
                },
                then: function(a, b) {
                  return this.getPromise().then(a, b);
                },
                catch: function(a) {
                  return this.getPromise()["catch"](a);
                },
                finally: function(a) {
                  return this.getPromise()["finally"](a);
                },
                pause: function() {
                  this.host.pause && this.host.pause();
                },
                resume: function() {
                  this.host.resume && this.host.resume();
                },
                end: function() {
                  this.host.end && this.host.end(), this._resolve(!0);
                },
                cancel: function() {
                  this.host.cancel && this.host.cancel(), this._resolve(!1);
                },
                complete: function(a) {
                  var b = this;
                  b._state === h &&
                    ((b._state = i),
                    b._tick(function() {
                      b._resolve(a);
                    }));
                },
                _resolve: function(a) {
                  this._state !== j &&
                    (f(this._doneCallbacks, function(b) {
                      b(a);
                    }),
                    (this._doneCallbacks.length = 0),
                    (this._state = j));
                }
              }),
              g
            );
          }
        ];
      },
      Pe = function() {
        this.$get = [
          "$$rAF",
          "$q",
          "$$AnimateRunner",
          function(a, b, c) {
            return function(b, d) {
              function e() {
                return (
                  a(function() {
                    f(), h || i.complete(), (h = !0);
                  }),
                  i
                );
              }
              function f() {
                g.addClass && (b.addClass(g.addClass), (g.addClass = null)),
                  g.removeClass &&
                    (b.removeClass(g.removeClass), (g.removeClass = null)),
                  g.to && (b.css(g.to), (g.to = null));
              }
              var g = d || {};
              g.$$prepared || (g = P(g)),
                g.cleanupStyles && (g.from = g.to = null),
                g.from && (b.css(g.from), (g.from = null));
              var h,
                i = new c();
              return { start: e, end: e };
            };
          }
        ];
      },
      Qe = d("$compile");
    ob.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Re = /^((?:x|data)[\:\-_])/i,
      Se = d("$controller"),
      Te = /^(\S+)(\s+as\s+([\w$]+))?$/,
      Ue = function() {
        this.$get = [
          "$document",
          function(a) {
            return function(b) {
              return (
                b
                  ? !b.nodeType && b instanceof Id && (b = b[0])
                  : (b = a[0].body),
                b.offsetWidth + 1
              );
            };
          }
        ];
      },
      Ve = "application/json",
      We = { "Content-Type": Ve + ";charset=utf-8" },
      Xe = /^\[|^\{(?!\{)/,
      Ye = { "[": /]$/, "{": /}$/ },
      Ze = /^\)\]\}',?\n/,
      $e = d("$http"),
      _e = function(a) {
        return function() {
          throw $e(
            "legacy",
            "The method `{0}` on the promise returned from `$http` has been disabled.",
            a
          );
        };
      },
      af = (Rd.$interpolateMinErr = d("$interpolate"));
    (af.throwNoconcat = function(a) {
      throw af(
        "noconcat",
        "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce",
        a
      );
    }),
      (af.interr = function(a, b) {
        return af("interr", "Can't interpolate: {0}\n{1}", a, b.toString());
      });
    var bf = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
      cf = { http: 80, https: 443, ftp: 21 },
      df = d("$location"),
      ef = {
        $$html5: !1,
        $$replace: !1,
        absUrl: Wb("$$absUrl"),
        url: function(a) {
          if (t(a)) return this.$$url;
          var b = bf.exec(a);
          return (
            (b[1] || "" === a) && this.path(decodeURIComponent(b[1])),
            (b[2] || b[1] || "" === a) && this.search(b[3] || ""),
            this.hash(b[5] || ""),
            this
          );
        },
        protocol: Wb("$$protocol"),
        host: Wb("$$host"),
        port: Wb("$$port"),
        path: Xb("$$path", function(a) {
          return (
            (a = null !== a ? a.toString() : ""),
            "/" == a.charAt(0) ? a : "/" + a
          );
        }),
        search: function(a, b) {
          switch (arguments.length) {
            case 0:
              return this.$$search;
            case 1:
              if (x(a) || y(a)) (a = a.toString()), (this.$$search = ba(a));
              else {
                if (!v(a))
                  throw df(
                    "isrcharg",
                    "The first argument of the `$location#search()` call must be a string or an object."
                  );
                (a = P(a, {})),
                  f(a, function(b, c) {
                    null == b && delete a[c];
                  }),
                  (this.$$search = a);
              }
              break;
            default:
              t(b) || null === b
                ? delete this.$$search[a]
                : (this.$$search[a] = b);
          }
          return this.$$compose(), this;
        },
        hash: Xb("$$hash", function(a) {
          return null !== a ? a.toString() : "";
        }),
        replace: function() {
          return (this.$$replace = !0), this;
        }
      };
    f([Vb, Ub, Tb], function(a) {
      (a.prototype = Object.create(ef)),
        (a.prototype.state = function(b) {
          if (!arguments.length) return this.$$state;
          if (a !== Tb || !this.$$html5)
            throw df(
              "nostate",
              "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API"
            );
          return (this.$$state = t(b) ? null : b), this;
        });
    });
    var ff = d("$parse"),
      gf = Function.prototype.call,
      hf = Function.prototype.apply,
      jf = Function.prototype.bind,
      kf = ra();
    f("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(a) {
      kf[a] = !0;
    });
    var lf = { n: "\n", f: "\f", r: "\r", t: "	", v: "", "'": "'", '"': '"' },
      mf = function(a) {
        this.options = a;
      };
    mf.prototype = {
      constructor: mf,
      lex: function(a) {
        for (
          this.text = a, this.index = 0, this.tokens = [];
          this.index < this.text.length;

        ) {
          var b = this.text.charAt(this.index);
          if ('"' === b || "'" === b) this.readString(b);
          else if (
            this.isNumber(b) ||
            ("." === b && this.isNumber(this.peek()))
          )
            this.readNumber();
          else if (this.isIdent(b)) this.readIdent();
          else if (this.is(b, "(){}[].,;:?"))
            this.tokens.push({ index: this.index, text: b }), this.index++;
          else if (this.isWhitespace(b)) this.index++;
          else {
            var c = b + this.peek(),
              d = c + this.peek(2),
              e = kf[b],
              f = kf[c],
              g = kf[d];
            if (e || f || g) {
              var h = g ? d : f ? c : b;
              this.tokens.push({ index: this.index, text: h, operator: !0 }),
                (this.index += h.length);
            } else
              this.throwError(
                "Unexpected next character ",
                this.index,
                this.index + 1
              );
          }
        }
        return this.tokens;
      },
      is: function(a, b) {
        return -1 !== b.indexOf(a);
      },
      peek: function(a) {
        var b = a || 1;
        return this.index + b < this.text.length
          ? this.text.charAt(this.index + b)
          : !1;
      },
      isNumber: function(a) {
        return a >= "0" && "9" >= a && "string" == typeof a;
      },
      isWhitespace: function(a) {
        return (
          " " === a ||
          "\r" === a ||
          "	" === a ||
          "\n" === a ||
          "" === a ||
          " " === a
        );
      },
      isIdent: function(a) {
        return (
          (a >= "a" && "z" >= a) ||
          (a >= "A" && "Z" >= a) ||
          "_" === a ||
          "$" === a
        );
      },
      isExpOperator: function(a) {
        return "-" === a || "+" === a || this.isNumber(a);
      },
      throwError: function(a, b, c) {
        c = c || this.index;
        var d = u(b)
          ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]"
          : " " + c;
        throw ff(
          "lexerr",
          "Lexer Error: {0} at column{1} in expression [{2}].",
          a,
          d,
          this.text
        );
      },
      readNumber: function() {
        for (var a = "", b = this.index; this.index < this.text.length; ) {
          var c = Dd(this.text.charAt(this.index));
          if ("." == c || this.isNumber(c)) a += c;
          else {
            var d = this.peek();
            if ("e" == c && this.isExpOperator(d)) a += c;
            else if (
              this.isExpOperator(c) &&
              d &&
              this.isNumber(d) &&
              "e" == a.charAt(a.length - 1)
            )
              a += c;
            else {
              if (
                !this.isExpOperator(c) ||
                (d && this.isNumber(d)) ||
                "e" != a.charAt(a.length - 1)
              )
                break;
              this.throwError("Invalid exponent");
            }
          }
          this.index++;
        }
        this.tokens.push({ index: b, text: a, constant: !0, value: Number(a) });
      },
      readIdent: function() {
        for (var a = this.index; this.index < this.text.length; ) {
          var b = this.text.charAt(this.index);
          if (!this.isIdent(b) && !this.isNumber(b)) break;
          this.index++;
        }
        this.tokens.push({
          index: a,
          text: this.text.slice(a, this.index),
          identifier: !0
        });
      },
      readString: function(a) {
        var b = this.index;
        this.index++;
        for (var c = "", d = a, e = !1; this.index < this.text.length; ) {
          var f = this.text.charAt(this.index);
          if (((d += f), e)) {
            if ("u" === f) {
              var g = this.text.substring(this.index + 1, this.index + 5);
              g.match(/[\da-f]{4}/i) ||
                this.throwError("Invalid unicode escape [\\u" + g + "]"),
                (this.index += 4),
                (c += String.fromCharCode(parseInt(g, 16)));
            } else {
              var h = lf[f];
              c += h || f;
            }
            e = !1;
          } else if ("\\" === f) e = !0;
          else {
            if (f === a)
              return (
                this.index++,
                void this.tokens.push({
                  index: b,
                  text: d,
                  constant: !0,
                  value: c
                })
              );
            c += f;
          }
          this.index++;
        }
        this.throwError("Unterminated quote", b);
      }
    };
    var nf = function(a, b) {
      (this.lexer = a), (this.options = b);
    };
    (nf.Program = "Program"),
      (nf.ExpressionStatement = "ExpressionStatement"),
      (nf.AssignmentExpression = "AssignmentExpression"),
      (nf.ConditionalExpression = "ConditionalExpression"),
      (nf.LogicalExpression = "LogicalExpression"),
      (nf.BinaryExpression = "BinaryExpression"),
      (nf.UnaryExpression = "UnaryExpression"),
      (nf.CallExpression = "CallExpression"),
      (nf.MemberExpression = "MemberExpression"),
      (nf.Identifier = "Identifier"),
      (nf.Literal = "Literal"),
      (nf.ArrayExpression = "ArrayExpression"),
      (nf.Property = "Property"),
      (nf.ObjectExpression = "ObjectExpression"),
      (nf.ThisExpression = "ThisExpression"),
      (nf.LocalsExpression = "LocalsExpression"),
      (nf.NGValueParameter = "NGValueParameter"),
      (nf.prototype = {
        ast: function(a) {
          (this.text = a), (this.tokens = this.lexer.lex(a));
          var b = this.program();
          return (
            0 !== this.tokens.length &&
              this.throwError("is an unexpected token", this.tokens[0]),
            b
          );
        },
        program: function() {
          for (var a = []; ; )
            if (
              (this.tokens.length > 0 &&
                !this.peek("}", ")", ";", "]") &&
                a.push(this.expressionStatement()),
              !this.expect(";"))
            )
              return { type: nf.Program, body: a };
        },
        expressionStatement: function() {
          return {
            type: nf.ExpressionStatement,
            expression: this.filterChain()
          };
        },
        filterChain: function() {
          for (var a, b = this.expression(); (a = this.expect("|")); )
            b = this.filter(b);
          return b;
        },
        expression: function() {
          return this.assignment();
        },
        assignment: function() {
          var a = this.ternary();
          return (
            this.expect("=") &&
              (a = {
                type: nf.AssignmentExpression,
                left: a,
                right: this.assignment(),
                operator: "="
              }),
            a
          );
        },
        ternary: function() {
          var a,
            b,
            c = this.logicalOR();
          return this.expect("?") &&
            ((a = this.expression()), this.consume(":"))
            ? ((b = this.expression()),
              {
                type: nf.ConditionalExpression,
                test: c,
                alternate: a,
                consequent: b
              })
            : c;
        },
        logicalOR: function() {
          for (var a = this.logicalAND(); this.expect("||"); )
            a = {
              type: nf.LogicalExpression,
              operator: "||",
              left: a,
              right: this.logicalAND()
            };
          return a;
        },
        logicalAND: function() {
          for (var a = this.equality(); this.expect("&&"); )
            a = {
              type: nf.LogicalExpression,
              operator: "&&",
              left: a,
              right: this.equality()
            };
          return a;
        },
        equality: function() {
          for (
            var a, b = this.relational();
            (a = this.expect("==", "!=", "===", "!=="));

          )
            b = {
              type: nf.BinaryExpression,
              operator: a.text,
              left: b,
              right: this.relational()
            };
          return b;
        },
        relational: function() {
          for (
            var a, b = this.additive();
            (a = this.expect("<", ">", "<=", ">="));

          )
            b = {
              type: nf.BinaryExpression,
              operator: a.text,
              left: b,
              right: this.additive()
            };
          return b;
        },
        additive: function() {
          for (var a, b = this.multiplicative(); (a = this.expect("+", "-")); )
            b = {
              type: nf.BinaryExpression,
              operator: a.text,
              left: b,
              right: this.multiplicative()
            };
          return b;
        },
        multiplicative: function() {
          for (var a, b = this.unary(); (a = this.expect("*", "/", "%")); )
            b = {
              type: nf.BinaryExpression,
              operator: a.text,
              left: b,
              right: this.unary()
            };
          return b;
        },
        unary: function() {
          var a;
          return (a = this.expect("+", "-", "!"))
            ? {
                type: nf.UnaryExpression,
                operator: a.text,
                prefix: !0,
                argument: this.unary()
              }
            : this.primary();
        },
        primary: function() {
          var a;
          this.expect("(")
            ? ((a = this.filterChain()), this.consume(")"))
            : this.expect("[")
            ? (a = this.arrayDeclaration())
            : this.expect("{")
            ? (a = this.object())
            : this.selfReferential.hasOwnProperty(this.peek().text)
            ? (a = P(this.selfReferential[this.consume().text]))
            : this.options.literals.hasOwnProperty(this.peek().text)
            ? (a = {
                type: nf.Literal,
                value: this.options.literals[this.consume().text]
              })
            : this.peek().identifier
            ? (a = this.identifier())
            : this.peek().constant
            ? (a = this.constant())
            : this.throwError("not a primary expression", this.peek());
          for (var b; (b = this.expect("(", "[", ".")); )
            "(" === b.text
              ? ((a = {
                  type: nf.CallExpression,
                  callee: a,
                  arguments: this.parseArguments()
                }),
                this.consume(")"))
              : "[" === b.text
              ? ((a = {
                  type: nf.MemberExpression,
                  object: a,
                  property: this.expression(),
                  computed: !0
                }),
                this.consume("]"))
              : "." === b.text
              ? (a = {
                  type: nf.MemberExpression,
                  object: a,
                  property: this.identifier(),
                  computed: !1
                })
              : this.throwError("IMPOSSIBLE");
          return a;
        },
        filter: function(a) {
          for (
            var b = [a],
              c = {
                type: nf.CallExpression,
                callee: this.identifier(),
                arguments: b,
                filter: !0
              };
            this.expect(":");

          )
            b.push(this.expression());
          return c;
        },
        parseArguments: function() {
          var a = [];
          if (")" !== this.peekToken().text)
            do a.push(this.expression());
            while (this.expect(","));
          return a;
        },
        identifier: function() {
          var a = this.consume();
          return (
            a.identifier || this.throwError("is not a valid identifier", a),
            { type: nf.Identifier, name: a.text }
          );
        },
        constant: function() {
          return { type: nf.Literal, value: this.consume().value };
        },
        arrayDeclaration: function() {
          var a = [];
          if ("]" !== this.peekToken().text)
            do {
              if (this.peek("]")) break;
              a.push(this.expression());
            } while (this.expect(","));
          return this.consume("]"), { type: nf.ArrayExpression, elements: a };
        },
        object: function() {
          var a,
            b = [];
          if ("}" !== this.peekToken().text)
            do {
              if (this.peek("}")) break;
              (a = { type: nf.Property, kind: "init" }),
                this.peek().constant
                  ? (a.key = this.constant())
                  : this.peek().identifier
                  ? (a.key = this.identifier())
                  : this.throwError("invalid key", this.peek()),
                this.consume(":"),
                (a.value = this.expression()),
                b.push(a);
            } while (this.expect(","));
          return (
            this.consume("}"), { type: nf.ObjectExpression, properties: b }
          );
        },
        throwError: function(a, b) {
          throw ff(
            "syntax",
            "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].",
            b.text,
            a,
            b.index + 1,
            this.text,
            this.text.substring(b.index)
          );
        },
        consume: function(a) {
          if (0 === this.tokens.length)
            throw ff("ueoe", "Unexpected end of expression: {0}", this.text);
          var b = this.expect(a);
          return (
            b ||
              this.throwError(
                "is unexpected, expecting [" + a + "]",
                this.peek()
              ),
            b
          );
        },
        peekToken: function() {
          if (0 === this.tokens.length)
            throw ff("ueoe", "Unexpected end of expression: {0}", this.text);
          return this.tokens[0];
        },
        peek: function(a, b, c, d) {
          return this.peekAhead(0, a, b, c, d);
        },
        peekAhead: function(a, b, c, d, e) {
          if (this.tokens.length > a) {
            var f = this.tokens[a],
              g = f.text;
            if (
              g === b ||
              g === c ||
              g === d ||
              g === e ||
              (!b && !c && !d && !e)
            )
              return f;
          }
          return !1;
        },
        expect: function(a, b, c, d) {
          var e = this.peek(a, b, c, d);
          return e ? (this.tokens.shift(), e) : !1;
        },
        selfReferential: {
          this: { type: nf.ThisExpression },
          $locals: { type: nf.LocalsExpression }
        }
      }),
      (mc.prototype = {
        compile: function(a, b) {
          var d = this,
            e = this.astBuilder.ast(a);
          (this.state = {
            nextId: 0,
            filters: {},
            expensiveChecks: b,
            fn: { vars: [], body: [], own: {} },
            assign: { vars: [], body: [], own: {} },
            inputs: []
          }),
            gc(e, d.$filter);
          var g,
            h = "";
          if (((this.stage = "assign"), (g = jc(e)))) {
            this.state.computing = "assign";
            var i = this.nextId();
            this.recurse(g, i),
              this.return_(i),
              (h = "fn.assign=" + this.generateFunction("assign", "s,v,l"));
          }
          var j = hc(e.body);
          (d.stage = "inputs"),
            f(j, function(a, b) {
              var c = "fn" + b;
              (d.state[c] = { vars: [], body: [], own: {} }),
                (d.state.computing = c);
              var e = d.nextId();
              d.recurse(a, e),
                d.return_(e),
                d.state.inputs.push(c),
                (a.watchId = b);
            }),
            (this.state.computing = "fn"),
            (this.stage = "main"),
            this.recurse(e);
          var k =
              '"' +
              this.USE +
              " " +
              this.STRICT +
              '";\n' +
              this.filterPrefix() +
              "var fn=" +
              this.generateFunction("fn", "s,l,a,i") +
              h +
              this.watchFns() +
              "return fn;",
            l = new Function(
              "$filter",
              "ensureSafeMemberName",
              "ensureSafeObject",
              "ensureSafeFunction",
              "getStringValue",
              "ensureSafeAssignContext",
              "ifDefined",
              "plus",
              "text",
              k
            )(this.$filter, $b, ac, bc, _b, cc, dc, ec, a);
          return (
            (this.state = this.stage = c),
            (l.literal = kc(e)),
            (l.constant = lc(e)),
            l
          );
        },
        USE: "use",
        STRICT: "strict",
        watchFns: function() {
          var a = [],
            b = this.state.inputs,
            c = this;
          return (
            f(b, function(b) {
              a.push("var " + b + "=" + c.generateFunction(b, "s"));
            }),
            b.length && a.push("fn.inputs=[" + b.join(",") + "];"),
            a.join("")
          );
        },
        generateFunction: function(a, b) {
          return (
            "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};"
          );
        },
        filterPrefix: function() {
          var a = [],
            b = this;
          return (
            f(this.state.filters, function(c, d) {
              a.push(c + "=$filter(" + b.escape(d) + ")");
            }),
            a.length ? "var " + a.join(",") + ";" : ""
          );
        },
        varsPrefix: function(a) {
          return this.state[a].vars.length
            ? "var " + this.state[a].vars.join(",") + ";"
            : "";
        },
        body: function(a) {
          return this.state[a].body.join("");
        },
        recurse: function(a, b, d, e, g, h) {
          var i,
            j,
            k,
            l,
            m = this;
          if (((e = e || p), !h && u(a.watchId)))
            return (
              (b = b || this.nextId()),
              void this.if_(
                "i",
                this.lazyAssign(b, this.computedMember("i", a.watchId)),
                this.lazyRecurse(a, b, d, e, g, !0)
              )
            );
          switch (a.type) {
            case nf.Program:
              f(a.body, function(b, d) {
                m.recurse(b.expression, c, c, function(a) {
                  j = a;
                }),
                  d !== a.body.length - 1
                    ? m.current().body.push(j, ";")
                    : m.return_(j);
              });
              break;
            case nf.Literal:
              (l = this.escape(a.value)), this.assign(b, l), e(l);
              break;
            case nf.UnaryExpression:
              this.recurse(a.argument, c, c, function(a) {
                j = a;
              }),
                (l = a.operator + "(" + this.ifDefined(j, 0) + ")"),
                this.assign(b, l),
                e(l);
              break;
            case nf.BinaryExpression:
              this.recurse(a.left, c, c, function(a) {
                i = a;
              }),
                this.recurse(a.right, c, c, function(a) {
                  j = a;
                }),
                (l =
                  "+" === a.operator
                    ? this.plus(i, j)
                    : "-" === a.operator
                    ? this.ifDefined(i, 0) + a.operator + this.ifDefined(j, 0)
                    : "(" + i + ")" + a.operator + "(" + j + ")"),
                this.assign(b, l),
                e(l);
              break;
            case nf.LogicalExpression:
              (b = b || this.nextId()),
                m.recurse(a.left, b),
                m.if_(
                  "&&" === a.operator ? b : m.not(b),
                  m.lazyRecurse(a.right, b)
                ),
                e(b);
              break;
            case nf.ConditionalExpression:
              (b = b || this.nextId()),
                m.recurse(a.test, b),
                m.if_(
                  b,
                  m.lazyRecurse(a.alternate, b),
                  m.lazyRecurse(a.consequent, b)
                ),
                e(b);
              break;
            case nf.Identifier:
              (b = b || this.nextId()),
                d &&
                  ((d.context =
                    "inputs" === m.stage
                      ? "s"
                      : this.assign(
                          this.nextId(),
                          this.getHasOwnProperty("l", a.name) + "?l:s"
                        )),
                  (d.computed = !1),
                  (d.name = a.name)),
                $b(a.name),
                m.if_(
                  "inputs" === m.stage ||
                    m.not(m.getHasOwnProperty("l", a.name)),
                  function() {
                    m.if_("inputs" === m.stage || "s", function() {
                      g &&
                        1 !== g &&
                        m.if_(
                          m.not(m.nonComputedMember("s", a.name)),
                          m.lazyAssign(m.nonComputedMember("s", a.name), "{}")
                        ),
                        m.assign(b, m.nonComputedMember("s", a.name));
                    });
                  },
                  b && m.lazyAssign(b, m.nonComputedMember("l", a.name))
                ),
                (m.state.expensiveChecks || oc(a.name)) &&
                  m.addEnsureSafeObject(b),
                e(b);
              break;
            case nf.MemberExpression:
              (i = (d && (d.context = this.nextId())) || this.nextId()),
                (b = b || this.nextId()),
                m.recurse(
                  a.object,
                  i,
                  c,
                  function() {
                    m.if_(
                      m.notNull(i),
                      function() {
                        g && 1 !== g && m.addEnsureSafeAssignContext(i),
                          a.computed
                            ? ((j = m.nextId()),
                              m.recurse(a.property, j),
                              m.getStringValue(j),
                              m.addEnsureSafeMemberName(j),
                              g &&
                                1 !== g &&
                                m.if_(
                                  m.not(m.computedMember(i, j)),
                                  m.lazyAssign(m.computedMember(i, j), "{}")
                                ),
                              (l = m.ensureSafeObject(m.computedMember(i, j))),
                              m.assign(b, l),
                              d && ((d.computed = !0), (d.name = j)))
                            : ($b(a.property.name),
                              g &&
                                1 !== g &&
                                m.if_(
                                  m.not(
                                    m.nonComputedMember(i, a.property.name)
                                  ),
                                  m.lazyAssign(
                                    m.nonComputedMember(i, a.property.name),
                                    "{}"
                                  )
                                ),
                              (l = m.nonComputedMember(i, a.property.name)),
                              (m.state.expensiveChecks ||
                                oc(a.property.name)) &&
                                (l = m.ensureSafeObject(l)),
                              m.assign(b, l),
                              d &&
                                ((d.computed = !1),
                                (d.name = a.property.name)));
                      },
                      function() {
                        m.assign(b, "undefined");
                      }
                    ),
                      e(b);
                  },
                  !!g
                );
              break;
            case nf.CallExpression:
              (b = b || this.nextId()),
                a.filter
                  ? ((j = m.filter(a.callee.name)),
                    (k = []),
                    f(a.arguments, function(a) {
                      var b = m.nextId();
                      m.recurse(a, b), k.push(b);
                    }),
                    (l = j + "(" + k.join(",") + ")"),
                    m.assign(b, l),
                    e(b))
                  : ((j = m.nextId()),
                    (i = {}),
                    (k = []),
                    m.recurse(a.callee, j, i, function() {
                      m.if_(
                        m.notNull(j),
                        function() {
                          m.addEnsureSafeFunction(j),
                            f(a.arguments, function(a) {
                              m.recurse(a, m.nextId(), c, function(a) {
                                k.push(m.ensureSafeObject(a));
                              });
                            }),
                            i.name
                              ? (m.state.expensiveChecks ||
                                  m.addEnsureSafeObject(i.context),
                                (l =
                                  m.member(i.context, i.name, i.computed) +
                                  "(" +
                                  k.join(",") +
                                  ")"))
                              : (l = j + "(" + k.join(",") + ")"),
                            (l = m.ensureSafeObject(l)),
                            m.assign(b, l);
                        },
                        function() {
                          m.assign(b, "undefined");
                        }
                      ),
                        e(b);
                    }));
              break;
            case nf.AssignmentExpression:
              if (((j = this.nextId()), (i = {}), !ic(a.left)))
                throw ff("lval", "Trying to assign a value to a non l-value");
              this.recurse(
                a.left,
                c,
                i,
                function() {
                  m.if_(m.notNull(i.context), function() {
                    m.recurse(a.right, j),
                      m.addEnsureSafeObject(
                        m.member(i.context, i.name, i.computed)
                      ),
                      m.addEnsureSafeAssignContext(i.context),
                      (l =
                        m.member(i.context, i.name, i.computed) +
                        a.operator +
                        j),
                      m.assign(b, l),
                      e(b || l);
                  });
                },
                1
              );
              break;
            case nf.ArrayExpression:
              (k = []),
                f(a.elements, function(a) {
                  m.recurse(a, m.nextId(), c, function(a) {
                    k.push(a);
                  });
                }),
                (l = "[" + k.join(",") + "]"),
                this.assign(b, l),
                e(l);
              break;
            case nf.ObjectExpression:
              (k = []),
                f(a.properties, function(a) {
                  m.recurse(a.value, m.nextId(), c, function(b) {
                    k.push(
                      m.escape(
                        a.key.type === nf.Identifier
                          ? a.key.name
                          : "" + a.key.value
                      ) +
                        ":" +
                        b
                    );
                  });
                }),
                (l = "{" + k.join(",") + "}"),
                this.assign(b, l),
                e(l);
              break;
            case nf.ThisExpression:
              this.assign(b, "s"), e("s");
              break;
            case nf.LocalsExpression:
              this.assign(b, "l"), e("l");
              break;
            case nf.NGValueParameter:
              this.assign(b, "v"), e("v");
          }
        },
        getHasOwnProperty: function(a, b) {
          var c = a + "." + b,
            d = this.current().own;
          return (
            d.hasOwnProperty(c) ||
              (d[c] = this.nextId(
                !1,
                a + "&&(" + this.escape(b) + " in " + a + ")"
              )),
            d[c]
          );
        },
        assign: function(a, b) {
          return a ? (this.current().body.push(a, "=", b, ";"), a) : void 0;
        },
        filter: function(a) {
          return (
            this.state.filters.hasOwnProperty(a) ||
              (this.state.filters[a] = this.nextId(!0)),
            this.state.filters[a]
          );
        },
        ifDefined: function(a, b) {
          return "ifDefined(" + a + "," + this.escape(b) + ")";
        },
        plus: function(a, b) {
          return "plus(" + a + "," + b + ")";
        },
        return_: function(a) {
          this.current().body.push("return ", a, ";");
        },
        if_: function(a, b, c) {
          if (a === !0) b();
          else {
            var d = this.current().body;
            d.push("if(", a, "){"),
              b(),
              d.push("}"),
              c && (d.push("else{"), c(), d.push("}"));
          }
        },
        not: function(a) {
          return "!(" + a + ")";
        },
        notNull: function(a) {
          return a + "!=null";
        },
        nonComputedMember: function(a, b) {
          return a + "." + b;
        },
        computedMember: function(a, b) {
          return a + "[" + b + "]";
        },
        member: function(a, b, c) {
          return c ? this.computedMember(a, b) : this.nonComputedMember(a, b);
        },
        addEnsureSafeObject: function(a) {
          this.current().body.push(this.ensureSafeObject(a), ";");
        },
        addEnsureSafeMemberName: function(a) {
          this.current().body.push(this.ensureSafeMemberName(a), ";");
        },
        addEnsureSafeFunction: function(a) {
          this.current().body.push(this.ensureSafeFunction(a), ";");
        },
        addEnsureSafeAssignContext: function(a) {
          this.current().body.push(this.ensureSafeAssignContext(a), ";");
        },
        ensureSafeObject: function(a) {
          return "ensureSafeObject(" + a + ",text)";
        },
        ensureSafeMemberName: function(a) {
          return "ensureSafeMemberName(" + a + ",text)";
        },
        ensureSafeFunction: function(a) {
          return "ensureSafeFunction(" + a + ",text)";
        },
        getStringValue: function(a) {
          this.assign(a, "getStringValue(" + a + ")");
        },
        ensureSafeAssignContext: function(a) {
          return "ensureSafeAssignContext(" + a + ",text)";
        },
        lazyRecurse: function(a, b, c, d, e, f) {
          var g = this;
          return function() {
            g.recurse(a, b, c, d, e, f);
          };
        },
        lazyAssign: function(a, b) {
          var c = this;
          return function() {
            c.assign(a, b);
          };
        },
        stringEscapeRegex: /[^ a-zA-Z0-9]/g,
        stringEscapeFn: function(a) {
          return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
        },
        escape: function(a) {
          if (x(a))
            return (
              "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'"
            );
          if (y(a)) return a.toString();
          if (a === !0) return "true";
          if (a === !1) return "false";
          if (null === a) return "null";
          if ("undefined" == typeof a) return "undefined";
          throw ff("esc", "IMPOSSIBLE");
        },
        nextId: function(a, b) {
          var c = "v" + this.state.nextId++;
          return a || this.current().vars.push(c + (b ? "=" + b : "")), c;
        },
        current: function() {
          return this.state[this.state.computing];
        }
      }),
      (nc.prototype = {
        compile: function(a, b) {
          var c = this,
            d = this.astBuilder.ast(a);
          (this.expression = a), (this.expensiveChecks = b), gc(d, c.$filter);
          var e, g;
          (e = jc(d)) && (g = this.recurse(e));
          var h,
            i = hc(d.body);
          i &&
            ((h = []),
            f(i, function(a, b) {
              var d = c.recurse(a);
              (a.input = d), h.push(d), (a.watchId = b);
            }));
          var j = [];
          f(d.body, function(a) {
            j.push(c.recurse(a.expression));
          });
          var k =
            0 === d.body.length
              ? p
              : 1 === d.body.length
              ? j[0]
              : function(a, b) {
                  var c;
                  return (
                    f(j, function(d) {
                      c = d(a, b);
                    }),
                    c
                  );
                };
          return (
            g &&
              (k.assign = function(a, b, c) {
                return g(a, c, b);
              }),
            h && (k.inputs = h),
            (k.literal = kc(d)),
            (k.constant = lc(d)),
            k
          );
        },
        recurse: function(a, b, d) {
          var e,
            g,
            h,
            i = this;
          if (a.input) return this.inputs(a.input, a.watchId);
          switch (a.type) {
            case nf.Literal:
              return this.value(a.value, b);
            case nf.UnaryExpression:
              return (
                (g = this.recurse(a.argument)), this["unary" + a.operator](g, b)
              );
            case nf.BinaryExpression:
              return (
                (e = this.recurse(a.left)),
                (g = this.recurse(a.right)),
                this["binary" + a.operator](e, g, b)
              );
            case nf.LogicalExpression:
              return (
                (e = this.recurse(a.left)),
                (g = this.recurse(a.right)),
                this["binary" + a.operator](e, g, b)
              );
            case nf.ConditionalExpression:
              return this["ternary?:"](
                this.recurse(a.test),
                this.recurse(a.alternate),
                this.recurse(a.consequent),
                b
              );
            case nf.Identifier:
              return (
                $b(a.name, i.expression),
                i.identifier(
                  a.name,
                  i.expensiveChecks || oc(a.name),
                  b,
                  d,
                  i.expression
                )
              );
            case nf.MemberExpression:
              return (
                (e = this.recurse(a.object, !1, !!d)),
                a.computed ||
                  ($b(a.property.name, i.expression), (g = a.property.name)),
                a.computed && (g = this.recurse(a.property)),
                a.computed
                  ? this.computedMember(e, g, b, d, i.expression)
                  : this.nonComputedMember(
                      e,
                      g,
                      i.expensiveChecks,
                      b,
                      d,
                      i.expression
                    )
              );
            case nf.CallExpression:
              return (
                (h = []),
                f(a.arguments, function(a) {
                  h.push(i.recurse(a));
                }),
                a.filter && (g = this.$filter(a.callee.name)),
                a.filter || (g = this.recurse(a.callee, !0)),
                a.filter
                  ? function(a, d, e, f) {
                      for (var i = [], j = 0; j < h.length; ++j)
                        i.push(h[j](a, d, e, f));
                      var k = g.apply(c, i, f);
                      return b ? { context: c, name: c, value: k } : k;
                    }
                  : function(a, c, d, e) {
                      var f,
                        j = g(a, c, d, e);
                      if (null != j.value) {
                        ac(j.context, i.expression), bc(j.value, i.expression);
                        for (var k = [], l = 0; l < h.length; ++l)
                          k.push(ac(h[l](a, c, d, e), i.expression));
                        f = ac(j.value.apply(j.context, k), i.expression);
                      }
                      return b ? { value: f } : f;
                    }
              );
            case nf.AssignmentExpression:
              return (
                (e = this.recurse(a.left, !0, 1)),
                (g = this.recurse(a.right)),
                function(a, c, d, f) {
                  var h = e(a, c, d, f),
                    j = g(a, c, d, f);
                  return (
                    ac(h.value, i.expression),
                    cc(h.context),
                    (h.context[h.name] = j),
                    b ? { value: j } : j
                  );
                }
              );
            case nf.ArrayExpression:
              return (
                (h = []),
                f(a.elements, function(a) {
                  h.push(i.recurse(a));
                }),
                function(a, c, d, e) {
                  for (var f = [], g = 0; g < h.length; ++g)
                    f.push(h[g](a, c, d, e));
                  return b ? { value: f } : f;
                }
              );
            case nf.ObjectExpression:
              return (
                (h = []),
                f(a.properties, function(a) {
                  h.push({
                    key:
                      a.key.type === nf.Identifier
                        ? a.key.name
                        : "" + a.key.value,
                    value: i.recurse(a.value)
                  });
                }),
                function(a, c, d, e) {
                  for (var f = {}, g = 0; g < h.length; ++g)
                    f[h[g].key] = h[g].value(a, c, d, e);
                  return b ? { value: f } : f;
                }
              );
            case nf.ThisExpression:
              return function(a) {
                return b ? { value: a } : a;
              };
            case nf.LocalsExpression:
              return function(a, c) {
                return b ? { value: c } : c;
              };
            case nf.NGValueParameter:
              return function(a, c, d) {
                return b ? { value: d } : d;
              };
          }
        },
        "unary+": function(a, b) {
          return function(c, d, e, f) {
            var g = a(c, d, e, f);
            return (g = u(g) ? +g : 0), b ? { value: g } : g;
          };
        },
        "unary-": function(a, b) {
          return function(c, d, e, f) {
            var g = a(c, d, e, f);
            return (g = u(g) ? -g : 0), b ? { value: g } : g;
          };
        },
        "unary!": function(a, b) {
          return function(c, d, e, f) {
            var g = !a(c, d, e, f);
            return b ? { value: g } : g;
          };
        },
        "binary+": function(a, b, c) {
          return function(d, e, f, g) {
            var h = a(d, e, f, g),
              i = b(d, e, f, g),
              j = ec(h, i);
            return c ? { value: j } : j;
          };
        },
        "binary-": function(a, b, c) {
          return function(d, e, f, g) {
            var h = a(d, e, f, g),
              i = b(d, e, f, g),
              j = (u(h) ? h : 0) - (u(i) ? i : 0);
            return c ? { value: j } : j;
          };
        },
        "binary*": function(a, b, c) {
          return function(d, e, f, g) {
            var h = a(d, e, f, g) * b(d, e, f, g);
            return c ? { value: h } : h;
          };
        },
        "binary/": function(a, b, c) {
          return function(d, e, f, g) {
            var h = a(d, e, f, g) / b(d, e, f, g);
            return c ? { value: h } : h;
          };
        },
        "binary%": function(a, b, c) {
          return function(d, e, f, g) {
            var h = a(d, e, f, g) % b(d, e, f, g);
            return c ? { value: h } : h;
          };
        },
        "binary===": function(a, b, c) {
          return function(d, e, f, g) {
            var h = a(d, e, f, g) === b(d, e, f, g);
            return c ? { value: h } : h;
          };
        },
        "binary!==": function(a, b, c) {
          return function(d, e, f, g) {
            var h = a(d, e, f, g) !== b(d, e, f, g);
            return c ? { value: h } : h;
          };
        },
        "binary==": function(a, b, c) {
          return function(d, e, f, g) {
            var h = a(d, e, f, g) == b(d, e, f, g);
            return c ? { value: h } : h;
          };
        },
        "binary!=": function(a, b, c) {
          return function(d, e, f, g) {
            var h = a(d, e, f, g) != b(d, e, f, g);
            return c ? { value: h } : h;
          };
        },
        "binary<": function(a, b, c) {
          return function(d, e, f, g) {
            var h = a(d, e, f, g) < b(d, e, f, g);
            return c ? { value: h } : h;
          };
        },
        "binary>": function(a, b, c) {
          return function(d, e, f, g) {
            var h = a(d, e, f, g) > b(d, e, f, g);
            return c ? { value: h } : h;
          };
        },
        "binary<=": function(a, b, c) {
          return function(d, e, f, g) {
            var h = a(d, e, f, g) <= b(d, e, f, g);
            return c ? { value: h } : h;
          };
        },
        "binary>=": function(a, b, c) {
          return function(d, e, f, g) {
            var h = a(d, e, f, g) >= b(d, e, f, g);
            return c ? { value: h } : h;
          };
        },
        "binary&&": function(a, b, c) {
          return function(d, e, f, g) {
            var h = a(d, e, f, g) && b(d, e, f, g);
            return c ? { value: h } : h;
          };
        },
        "binary||": function(a, b, c) {
          return function(d, e, f, g) {
            var h = a(d, e, f, g) || b(d, e, f, g);
            return c ? { value: h } : h;
          };
        },
        "ternary?:": function(a, b, c, d) {
          return function(e, f, g, h) {
            var i = a(e, f, g, h) ? b(e, f, g, h) : c(e, f, g, h);
            return d ? { value: i } : i;
          };
        },
        value: function(a, b) {
          return function() {
            return b ? { context: c, name: c, value: a } : a;
          };
        },
        identifier: function(a, b, d, e, f) {
          return function(g, h, i, j) {
            var k = h && a in h ? h : g;
            e && 1 !== e && k && !k[a] && (k[a] = {});
            var l = k ? k[a] : c;
            return b && ac(l, f), d ? { context: k, name: a, value: l } : l;
          };
        },
        computedMember: function(a, b, c, d, e) {
          return function(f, g, h, i) {
            var j,
              k,
              l = a(f, g, h, i);
            return (
              null != l &&
                ((j = b(f, g, h, i)),
                (j = _b(j)),
                $b(j, e),
                d && 1 !== d && (cc(l), l && !l[j] && (l[j] = {})),
                (k = l[j]),
                ac(k, e)),
              c ? { context: l, name: j, value: k } : k
            );
          };
        },
        nonComputedMember: function(a, b, d, e, f, g) {
          return function(h, i, j, k) {
            var l = a(h, i, j, k);
            f && 1 !== f && (cc(l), l && !l[b] && (l[b] = {}));
            var m = null != l ? l[b] : c;
            return (
              (d || oc(b)) && ac(m, g),
              e ? { context: l, name: b, value: m } : m
            );
          };
        },
        inputs: function(a, b) {
          return function(c, d, e, f) {
            return f ? f[b] : a(c, d, e);
          };
        }
      });
    var of = function(a, b, c) {
      (this.lexer = a),
        (this.$filter = b),
        (this.options = c),
        (this.ast = new nf(a, c)),
        (this.astCompiler = c.csp ? new nc(this.ast, b) : new mc(this.ast, b));
    };
    of.prototype = {
      constructor: of,
      parse: function(a) {
        return this.astCompiler.compile(a, this.options.expensiveChecks);
      }
    };
    var pf = Object.prototype.valueOf,
      qf = d("$sce"),
      rf = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
      },
      sf = d("$compile"),
      tf = b.createElement("a"),
      uf = Fc(a.location.href);
    (Ic.$inject = ["$document"]), (Kc.$inject = ["$provide"]);
    var vf = 22,
      wf = ".",
      xf = "0";
    (Pc.$inject = ["$locale"]), (Qc.$inject = ["$locale"]);
    var yf = {
        yyyy: Vc("FullYear", 4, 0, !1, !0),
        yy: Vc("FullYear", 2, 0, !0, !0),
        y: Vc("FullYear", 1, 0, !1, !0),
        MMMM: Wc("Month"),
        MMM: Wc("Month", !0),
        MM: Vc("Month", 2, 1),
        M: Vc("Month", 1, 1),
        LLLL: Wc("Month", !1, !0),
        dd: Vc("Date", 2),
        d: Vc("Date", 1),
        HH: Vc("Hours", 2),
        H: Vc("Hours", 1),
        hh: Vc("Hours", 2, -12),
        h: Vc("Hours", 1, -12),
        mm: Vc("Minutes", 2),
        m: Vc("Minutes", 1),
        ss: Vc("Seconds", 2),
        s: Vc("Seconds", 1),
        sss: Vc("Milliseconds", 3),
        EEEE: Wc("Day"),
        EEE: Wc("Day", !0),
        a: _c,
        Z: Xc,
        ww: $c(2),
        w: $c(1),
        G: ad,
        GG: ad,
        GGG: ad,
        GGGG: bd
      },
      zf = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
      Af = /^\-?\d+$/;
    cd.$inject = ["$locale"];
    var Bf = r(Dd),
      Cf = r(Ed);
    fd.$inject = ["$parse"];
    var Df = r({
        restrict: "E",
        compile: function(a, b) {
          return b.href || b.xlinkHref
            ? void 0
            : function(a, b) {
                if ("a" === b[0].nodeName.toLowerCase()) {
                  var c =
                    "[object SVGAnimatedString]" === Od.call(b.prop("href"))
                      ? "xlink:href"
                      : "href";
                  b.on("click", function(a) {
                    b.attr(c) || a.preventDefault();
                  });
                }
              };
        }
      }),
      Ef = {};
    f(xe, function(a, b) {
      function c(a, c, e) {
        a.$watch(e[d], function(a) {
          e.$set(b, !!a);
        });
      }
      if ("multiple" != a) {
        var d = pb("ng-" + b),
          e = c;
        "checked" === a &&
          (e = function(a, b, e) {
            e.ngModel !== e[d] && c(a, b, e);
          }),
          (Ef[d] = function() {
            return { restrict: "A", priority: 100, link: e };
          });
      }
    }),
      f(ze, function(a, b) {
        Ef[b] = function() {
          return {
            priority: 100,
            link: function(a, c, d) {
              if ("ngPattern" === b && "/" == d.ngPattern.charAt(0)) {
                var e = d.ngPattern.match(Ad);
                if (e) return void d.$set("ngPattern", new RegExp(e[1], e[2]));
              }
              a.$watch(d[b], function(a) {
                d.$set(b, a);
              });
            }
          };
        };
      }),
      f(["src", "srcset", "href"], function(a) {
        var b = pb("ng-" + a);
        Ef[b] = function() {
          return {
            priority: 99,
            link: function(c, d, e) {
              var f = a,
                g = a;
              "href" === a &&
                "[object SVGAnimatedString]" === Od.call(d.prop("href")) &&
                ((g = "xlinkHref"), (e.$attr[g] = "xlink:href"), (f = null)),
                e.$observe(b, function(b) {
                  return b
                    ? (e.$set(g, b), void (Hd && f && d.prop(f, e[g])))
                    : void ("href" === a && e.$set(g, null));
                });
            }
          };
        };
      });
    var Ff = {
        $addControl: p,
        $$renameControl: hd,
        $removeControl: p,
        $setValidity: p,
        $setDirty: p,
        $setPristine: p,
        $setSubmitted: p
      },
      Gf = "ng-submitted";
    id.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var Hf = function(a) {
        return [
          "$timeout",
          "$parse",
          function(b, d) {
            function e(a) {
              return "" === a ? d('this[""]').assign : d(a).assign || p;
            }
            var f = {
              name: "form",
              restrict: a ? "EAC" : "E",
              require: ["form", "^^?form"],
              controller: id,
              compile: function(d, f) {
                d.addClass(pg).addClass(ng);
                var g = f.name ? "name" : a && f.ngForm ? "ngForm" : !1;
                return {
                  pre: function(a, d, f, h) {
                    var i = h[0];
                    if (!("action" in f)) {
                      var j = function(b) {
                        a.$apply(function() {
                          i.$commitViewValue(), i.$setSubmitted();
                        }),
                          b.preventDefault();
                      };
                      ke(d[0], "submit", j),
                        d.on("$destroy", function() {
                          b(
                            function() {
                              le(d[0], "submit", j);
                            },
                            0,
                            !1
                          );
                        });
                    }
                    var k = h[1] || i.$$parentForm;
                    k.$addControl(i);
                    var m = g ? e(i.$name) : p;
                    g &&
                      (m(a, i),
                      f.$observe(g, function(b) {
                        i.$name !== b &&
                          (m(a, c),
                          i.$$parentForm.$$renameControl(i, b),
                          (m = e(i.$name))(a, i));
                      })),
                      d.on("$destroy", function() {
                        i.$$parentForm.$removeControl(i), m(a, c), l(i, Ff);
                      });
                  }
                };
              }
            };
            return f;
          }
        ];
      },
      If = Hf(),
      Jf = Hf(!0),
      Kf = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
      Lf = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
      Mf = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
      Nf = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
      Of = /^(\d{4,})-(\d{2})-(\d{2})$/,
      Pf = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      Qf = /^(\d{4,})-W(\d\d)$/,
      Rf = /^(\d{4,})-(\d\d)$/,
      Sf = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      Tf = "keydown wheel mousedown",
      Uf = ra();
    f("date,datetime-local,month,time,week".split(","), function(a) {
      Uf[a] = !0;
    });
    var Vf = {
        text: kd,
        date: od("date", Of, nd(Of, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
        "datetime-local": od(
          "datetimelocal",
          Pf,
          nd(Pf, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]),
          "yyyy-MM-ddTHH:mm:ss.sss"
        ),
        time: od("time", Sf, nd(Sf, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
        week: od("week", Qf, md, "yyyy-Www"),
        month: od("month", Rf, nd(Rf, ["yyyy", "MM"]), "yyyy-MM"),
        number: qd,
        url: rd,
        email: sd,
        radio: td,
        checkbox: vd,
        hidden: p,
        button: p,
        submit: p,
        reset: p,
        file: p
      },
      Wf = [
        "$browser",
        "$sniffer",
        "$filter",
        "$parse",
        function(a, b, c, d) {
          return {
            restrict: "E",
            require: ["?ngModel"],
            link: {
              pre: function(e, f, g, h) {
                h[0] && (Vf[Dd(g.type)] || Vf.text)(e, f, g, h[0], b, a, c, d);
              }
            }
          };
        }
      ],
      Xf = /^(true|false|\d+)$/,
      Yf = function() {
        return {
          restrict: "A",
          priority: 100,
          compile: function(a, b) {
            return Xf.test(b.ngValue)
              ? function(a, b, c) {
                  c.$set("value", a.$eval(c.ngValue));
                }
              : function(a, b, c) {
                  a.$watch(c.ngValue, function(a) {
                    c.$set("value", a);
                  });
                };
          }
        };
      },
      Zf = [
        "$compile",
        function(a) {
          return {
            restrict: "AC",
            compile: function(b) {
              return (
                a.$$addBindingClass(b),
                function(b, c, d) {
                  a.$$addBindingInfo(c, d.ngBind),
                    (c = c[0]),
                    b.$watch(d.ngBind, function(a) {
                      c.textContent = t(a) ? "" : a;
                    });
                }
              );
            }
          };
        }
      ],
      $f = [
        "$interpolate",
        "$compile",
        function(a, b) {
          return {
            compile: function(c) {
              return (
                b.$$addBindingClass(c),
                function(c, d, e) {
                  var f = a(d.attr(e.$attr.ngBindTemplate));
                  b.$$addBindingInfo(d, f.expressions),
                    (d = d[0]),
                    e.$observe("ngBindTemplate", function(a) {
                      d.textContent = t(a) ? "" : a;
                    });
                }
              );
            }
          };
        }
      ],
      _f = [
        "$sce",
        "$parse",
        "$compile",
        function(a, b, c) {
          return {
            restrict: "A",
            compile: function(d, e) {
              var f = b(e.ngBindHtml),
                g = b(e.ngBindHtml, function(a) {
                  return (a || "").toString();
                });
              return (
                c.$$addBindingClass(d),
                function(b, d, e) {
                  c.$$addBindingInfo(d, e.ngBindHtml),
                    b.$watch(g, function() {
                      d.html(a.getTrustedHtml(f(b)) || "");
                    });
                }
              );
            }
          };
        }
      ],
      ag = r({
        restrict: "A",
        require: "ngModel",
        link: function(a, b, c, d) {
          d.$viewChangeListeners.push(function() {
            a.$eval(c.ngChange);
          });
        }
      }),
      bg = wd("", !0),
      cg = wd("Odd", 0),
      dg = wd("Even", 1),
      eg = gd({
        compile: function(a, b) {
          b.$set("ngCloak", c), a.removeClass("ng-cloak");
        }
      }),
      fg = [
        function() {
          return { restrict: "A", scope: !0, controller: "@", priority: 500 };
        }
      ],
      gg = {},
      hg = { blur: !0, focus: !0 };
    f(
      "click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(
        " "
      ),
      function(a) {
        var b = pb("ng-" + a);
        gg[b] = [
          "$parse",
          "$rootScope",
          function(c, d) {
            return {
              restrict: "A",
              compile: function(e, f) {
                var g = c(f[b], null, !0);
                return function(b, c) {
                  c.on(a, function(c) {
                    var e = function() {
                      g(b, { $event: c });
                    };
                    hg[a] && d.$$phase ? b.$evalAsync(e) : b.$apply(e);
                  });
                };
              }
            };
          }
        ];
      }
    );
    var ig = [
        "$animate",
        "$compile",
        function(a, b) {
          return {
            multiElement: !0,
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function(c, d, e, f, g) {
              var h, i, j;
              c.$watch(e.ngIf, function(c) {
                c
                  ? i ||
                    g(function(c, f) {
                      (i = f),
                        (c[c.length++] = b.$$createComment("end ngIf", e.ngIf)),
                        (h = { clone: c }),
                        a.enter(c, d.parent(), d);
                    })
                  : (j && (j.remove(), (j = null)),
                    i && (i.$destroy(), (i = null)),
                    h &&
                      ((j = qa(h.clone)),
                      a.leave(j).then(function() {
                        j = null;
                      }),
                      (h = null)));
              });
            }
          };
        }
      ],
      jg = [
        "$templateRequest",
        "$anchorScroll",
        "$animate",
        function(a, b, c) {
          return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: Rd.noop,
            compile: function(d, e) {
              var f = e.ngInclude || e.src,
                g = e.onload || "",
                h = e.autoscroll;
              return function(d, e, i, j, k) {
                var l,
                  m,
                  n,
                  o = 0,
                  p = function() {
                    m && (m.remove(), (m = null)),
                      l && (l.$destroy(), (l = null)),
                      n &&
                        (c.leave(n).then(function() {
                          m = null;
                        }),
                        (m = n),
                        (n = null));
                  };
                d.$watch(f, function(f) {
                  var i = function() {
                      !u(h) || (h && !d.$eval(h)) || b();
                    },
                    m = ++o;
                  f
                    ? (a(f, !0).then(
                        function(a) {
                          if (!d.$$destroyed && m === o) {
                            var b = d.$new();
                            j.template = a;
                            var h = k(b, function(a) {
                              p(), c.enter(a, null, e).then(i);
                            });
                            (l = b),
                              (n = h),
                              l.$emit("$includeContentLoaded", f),
                              d.$eval(g);
                          }
                        },
                        function() {
                          d.$$destroyed ||
                            (m === o &&
                              (p(), d.$emit("$includeContentError", f)));
                        }
                      ),
                      d.$emit("$includeContentRequested", f))
                    : (p(), (j.template = null));
                });
              };
            }
          };
        }
      ],
      kg = [
        "$compile",
        function(a) {
          return {
            restrict: "ECA",
            priority: -400,
            require: "ngInclude",
            link: function(c, d, e, f) {
              return Od.call(d[0]).match(/SVG/)
                ? (d.empty(),
                  void a(Ca(f.template, b).childNodes)(
                    c,
                    function(a) {
                      d.append(a);
                    },
                    { futureParentElement: d }
                  ))
                : (d.html(f.template), void a(d.contents())(c));
            }
          };
        }
      ],
      lg = gd({
        priority: 450,
        compile: function() {
          return {
            pre: function(a, b, c) {
              a.$eval(c.ngInit);
            }
          };
        }
      }),
      mg = function() {
        return {
          restrict: "A",
          priority: 100,
          require: "ngModel",
          link: function(a, b, d, e) {
            var g = b.attr(d.$attr.ngList) || ", ",
              h = "false" !== d.ngTrim,
              i = h ? Vd(g) : g,
              j = function(a) {
                if (!t(a)) {
                  var b = [];
                  return (
                    a &&
                      f(a.split(i), function(a) {
                        a && b.push(h ? Vd(a) : a);
                      }),
                    b
                  );
                }
              };
            e.$parsers.push(j),
              e.$formatters.push(function(a) {
                return Td(a) ? a.join(g) : c;
              }),
              (e.$isEmpty = function(a) {
                return !a || !a.length;
              });
          }
        };
      },
      ng = "ng-valid",
      og = "ng-invalid",
      pg = "ng-pristine",
      qg = "ng-dirty",
      rg = "ng-untouched",
      sg = "ng-touched",
      tg = "ng-pending",
      ug = "ng-empty",
      vg = "ng-not-empty",
      wg = d("ngModel"),
      xg = [
        "$scope",
        "$exceptionHandler",
        "$attrs",
        "$element",
        "$parse",
        "$animate",
        "$timeout",
        "$rootScope",
        "$q",
        "$interpolate",
        function(a, b, d, e, g, h, i, j, k, l) {
          (this.$viewValue = Number.NaN),
            (this.$modelValue = Number.NaN),
            (this.$$rawModelValue = c),
            (this.$validators = {}),
            (this.$asyncValidators = {}),
            (this.$parsers = []),
            (this.$formatters = []),
            (this.$viewChangeListeners = []),
            (this.$untouched = !0),
            (this.$touched = !1),
            (this.$pristine = !0),
            (this.$dirty = !1),
            (this.$valid = !0),
            (this.$invalid = !1),
            (this.$error = {}),
            (this.$$success = {}),
            (this.$pending = c),
            (this.$name = l(d.name || "", !1)(a)),
            (this.$$parentForm = Ff);
          var m,
            n = g(d.ngModel),
            o = n.assign,
            q = n,
            r = o,
            s = null,
            v = this;
          (this.$$setOptions = function(a) {
            if (((v.$options = a), a && a.getterSetter)) {
              var b = g(d.ngModel + "()"),
                c = g(d.ngModel + "($$$p)");
              (q = function(a) {
                var c = n(a);
                return A(c) && (c = b(a)), c;
              }),
                (r = function(a, b) {
                  A(n(a)) ? c(a, { $$$p: b }) : o(a, b);
                });
            } else if (!n.assign)
              throw wg(
                "nonassign",
                "Expression '{0}' is non-assignable. Element: {1}",
                d.ngModel,
                _(e)
              );
          }),
            (this.$render = p),
            (this.$isEmpty = function(a) {
              return t(a) || "" === a || null === a || a !== a;
            }),
            (this.$$updateEmptyClasses = function(a) {
              v.$isEmpty(a)
                ? (h.removeClass(e, vg), h.addClass(e, ug))
                : (h.removeClass(e, ug), h.addClass(e, vg));
            });
          var w = 0;
          xd({
            ctrl: this,
            $element: e,
            set: function(a, b) {
              a[b] = !0;
            },
            unset: function(a, b) {
              delete a[b];
            },
            $animate: h
          }),
            (this.$setPristine = function() {
              (v.$dirty = !1),
                (v.$pristine = !0),
                h.removeClass(e, qg),
                h.addClass(e, pg);
            }),
            (this.$setDirty = function() {
              (v.$dirty = !0),
                (v.$pristine = !1),
                h.removeClass(e, pg),
                h.addClass(e, qg),
                v.$$parentForm.$setDirty();
            }),
            (this.$setUntouched = function() {
              (v.$touched = !1), (v.$untouched = !0), h.setClass(e, rg, sg);
            }),
            (this.$setTouched = function() {
              (v.$touched = !0), (v.$untouched = !1), h.setClass(e, sg, rg);
            }),
            (this.$rollbackViewValue = function() {
              i.cancel(s),
                (v.$viewValue = v.$$lastCommittedViewValue),
                v.$render();
            }),
            (this.$validate = function() {
              if (!y(v.$modelValue) || !isNaN(v.$modelValue)) {
                var a = v.$$lastCommittedViewValue,
                  b = v.$$rawModelValue,
                  d = v.$valid,
                  e = v.$modelValue,
                  f = v.$options && v.$options.allowInvalid;
                v.$$runValidators(b, a, function(a) {
                  f ||
                    d === a ||
                    ((v.$modelValue = a ? b : c),
                    v.$modelValue !== e && v.$$writeModelToScope());
                });
              }
            }),
            (this.$$runValidators = function(a, b, d) {
              function e() {
                var a = v.$$parserName || "parse";
                return t(m)
                  ? (i(a, null), !0)
                  : (m ||
                      (f(v.$validators, function(a, b) {
                        i(b, null);
                      }),
                      f(v.$asyncValidators, function(a, b) {
                        i(b, null);
                      })),
                    i(a, m),
                    m);
              }
              function g() {
                var c = !0;
                return (
                  f(v.$validators, function(d, e) {
                    var f = d(a, b);
                    (c = c && f), i(e, f);
                  }),
                  c
                    ? !0
                    : (f(v.$asyncValidators, function(a, b) {
                        i(b, null);
                      }),
                      !1)
                );
              }
              function h() {
                var d = [],
                  e = !0;
                f(v.$asyncValidators, function(f, g) {
                  var h = f(a, b);
                  if (!I(h))
                    throw wg(
                      "nopromise",
                      "Expected asynchronous validator to return a promise but got '{0}' instead.",
                      h
                    );
                  i(g, c),
                    d.push(
                      h.then(
                        function() {
                          i(g, !0);
                        },
                        function() {
                          (e = !1), i(g, !1);
                        }
                      )
                    );
                }),
                  d.length
                    ? k.all(d).then(function() {
                        j(e);
                      }, p)
                    : j(!0);
              }
              function i(a, b) {
                l === w && v.$setValidity(a, b);
              }
              function j(a) {
                l === w && d(a);
              }
              w++;
              var l = w;
              return e() && g() ? void h() : void j(!1);
            }),
            (this.$commitViewValue = function() {
              var a = v.$viewValue;
              i.cancel(s),
                (v.$$lastCommittedViewValue !== a ||
                  ("" === a && v.$$hasNativeValidators)) &&
                  (v.$$updateEmptyClasses(a),
                  (v.$$lastCommittedViewValue = a),
                  v.$pristine && this.$setDirty(),
                  this.$$parseAndValidate());
            }),
            (this.$$parseAndValidate = function() {
              function b() {
                v.$modelValue !== g && v.$$writeModelToScope();
              }
              var d = v.$$lastCommittedViewValue,
                e = d;
              if ((m = t(e) ? c : !0))
                for (var f = 0; f < v.$parsers.length; f++)
                  if (((e = v.$parsers[f](e)), t(e))) {
                    m = !1;
                    break;
                  }
              y(v.$modelValue) &&
                isNaN(v.$modelValue) &&
                (v.$modelValue = q(a));
              var g = v.$modelValue,
                h = v.$options && v.$options.allowInvalid;
              (v.$$rawModelValue = e),
                h && ((v.$modelValue = e), b()),
                v.$$runValidators(e, v.$$lastCommittedViewValue, function(a) {
                  h || ((v.$modelValue = a ? e : c), b());
                });
            }),
            (this.$$writeModelToScope = function() {
              r(a, v.$modelValue),
                f(v.$viewChangeListeners, function(a) {
                  try {
                    a();
                  } catch (c) {
                    b(c);
                  }
                });
            }),
            (this.$setViewValue = function(a, b) {
              (v.$viewValue = a),
                (!v.$options || v.$options.updateOnDefault) &&
                  v.$$debounceViewValueCommit(b);
            }),
            (this.$$debounceViewValueCommit = function(b) {
              var c,
                d = 0,
                e = v.$options;
              e &&
                u(e.debounce) &&
                ((c = e.debounce),
                y(c)
                  ? (d = c)
                  : y(c[b])
                  ? (d = c[b])
                  : y(c["default"]) && (d = c["default"])),
                i.cancel(s),
                d
                  ? (s = i(function() {
                      v.$commitViewValue();
                    }, d))
                  : j.$$phase
                  ? v.$commitViewValue()
                  : a.$apply(function() {
                      v.$commitViewValue();
                    });
            }),
            a.$watch(function() {
              var b = q(a);
              if (
                b !== v.$modelValue &&
                (v.$modelValue === v.$modelValue || b === b)
              ) {
                (v.$modelValue = v.$$rawModelValue = b), (m = c);
                for (var d = v.$formatters, e = d.length, f = b; e--; )
                  f = d[e](f);
                v.$viewValue !== f &&
                  (v.$$updateEmptyClasses(f),
                  (v.$viewValue = v.$$lastCommittedViewValue = f),
                  v.$render(),
                  v.$$runValidators(b, f, p));
              }
              return b;
            });
        }
      ],
      yg = [
        "$rootScope",
        function(a) {
          return {
            restrict: "A",
            require: ["ngModel", "^?form", "^?ngModelOptions"],
            controller: xg,
            priority: 1,
            compile: function(b) {
              return (
                b
                  .addClass(pg)
                  .addClass(rg)
                  .addClass(ng),
                {
                  pre: function(a, b, c, d) {
                    var e = d[0],
                      f = d[1] || e.$$parentForm;
                    e.$$setOptions(d[2] && d[2].$options),
                      f.$addControl(e),
                      c.$observe("name", function(a) {
                        e.$name !== a && e.$$parentForm.$$renameControl(e, a);
                      }),
                      a.$on("$destroy", function() {
                        e.$$parentForm.$removeControl(e);
                      });
                  },
                  post: function(b, c, d, e) {
                    var f = e[0];
                    f.$options &&
                      f.$options.updateOn &&
                      c.on(f.$options.updateOn, function(a) {
                        f.$$debounceViewValueCommit(a && a.type);
                      }),
                      c.on("blur", function() {
                        f.$touched ||
                          (a.$$phase
                            ? b.$evalAsync(f.$setTouched)
                            : b.$apply(f.$setTouched));
                      });
                  }
                }
              );
            }
          };
        }
      ],
      zg = /(\s+|^)default(\s+|$)/,
      Ag = function() {
        return {
          restrict: "A",
          controller: [
            "$scope",
            "$attrs",
            function(a, b) {
              var c = this;
              (this.$options = P(a.$eval(b.ngModelOptions))),
                u(this.$options.updateOn)
                  ? ((this.$options.updateOnDefault = !1),
                    (this.$options.updateOn = Vd(
                      this.$options.updateOn.replace(zg, function() {
                        return (c.$options.updateOnDefault = !0), " ";
                      })
                    )))
                  : (this.$options.updateOnDefault = !0);
            }
          ]
        };
      },
      Bg = gd({ terminal: !0, priority: 1e3 }),
      Cg = d("ngOptions"),
      Dg = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
      Eg = [
        "$compile",
        "$parse",
        function(a, c) {
          function d(a, b, d) {
            function f(a, b, c, d, e) {
              (this.selectValue = a),
                (this.viewValue = b),
                (this.label = c),
                (this.group = d),
                (this.disabled = e);
            }
            function g(a) {
              var b;
              if (!j && e(a)) b = a;
              else {
                b = [];
                for (var c in a)
                  a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c);
              }
              return b;
            }
            var h = a.match(Dg);
            if (!h)
              throw Cg(
                "iexp",
                "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}",
                a,
                _(b)
              );
            var i = h[5] || h[7],
              j = h[6],
              k = / as /.test(h[0]) && h[1],
              l = h[9],
              m = c(h[2] ? h[1] : i),
              n = k && c(k),
              o = n || m,
              p = l && c(l),
              q = l
                ? function(a, b) {
                    return p(d, b);
                  }
                : function(a) {
                    return _a(a);
                  },
              r = function(a, b) {
                return q(a, x(a, b));
              },
              s = c(h[2] || h[1]),
              t = c(h[3] || ""),
              u = c(h[4] || ""),
              v = c(h[8]),
              w = {},
              x = j
                ? function(a, b) {
                    return (w[j] = b), (w[i] = a), w;
                  }
                : function(a) {
                    return (w[i] = a), w;
                  };
            return {
              trackBy: l,
              getTrackByValue: r,
              getWatchables: c(v, function(a) {
                var b = [];
                a = a || [];
                for (var c = g(a), e = c.length, f = 0; e > f; f++) {
                  var i = a === c ? f : c[f],
                    j = a[i],
                    k = x(j, i),
                    l = q(j, k);
                  if ((b.push(l), h[2] || h[1])) {
                    var m = s(d, k);
                    b.push(m);
                  }
                  if (h[4]) {
                    var n = u(d, k);
                    b.push(n);
                  }
                }
                return b;
              }),
              getOptions: function() {
                for (
                  var a = [],
                    b = {},
                    c = v(d) || [],
                    e = g(c),
                    h = e.length,
                    i = 0;
                  h > i;
                  i++
                ) {
                  var j = c === e ? i : e[i],
                    k = c[j],
                    m = x(k, j),
                    n = o(d, m),
                    p = q(n, m),
                    w = s(d, m),
                    y = t(d, m),
                    z = u(d, m),
                    A = new f(p, n, w, y, z);
                  a.push(A), (b[p] = A);
                }
                return {
                  items: a,
                  selectValueMap: b,
                  getOptionFromViewValue: function(a) {
                    return b[r(a)];
                  },
                  getViewValueFromOption: function(a) {
                    return l ? Rd.copy(a.viewValue) : a.viewValue;
                  }
                };
              }
            };
          }
          function g(b, c, e, g) {
            function j(a, b) {
              (a.element = b),
                (b.disabled = a.disabled),
                a.label !== b.label &&
                  ((b.label = a.label), (b.textContent = a.label)),
                a.value !== b.value && (b.value = a.selectValue);
            }
            function k(a, b, c, d) {
              var e;
              return (
                b && Dd(b.nodeName) === c
                  ? (e = b)
                  : ((e = d.cloneNode(!1)),
                    b ? a.insertBefore(e, b) : a.appendChild(e)),
                e
              );
            }
            function l(a) {
              for (var b; a; ) (b = a.nextSibling), Ta(a), (a = b);
            }
            function m(a) {
              var b = o && o[0],
                c = x && x[0];
              if (b || c)
                for (
                  ;
                  a &&
                  (a === b ||
                    a === c ||
                    a.nodeType === ee ||
                    ("option" === N(a) && "" === a.value));

                )
                  a = a.nextSibling;
              return a;
            }
            function n() {
              var a = y && p.readValue();
              y = z.getOptions();
              var b = {},
                d = c[0].firstChild;
              if (
                (w && c.prepend(o),
                (d = m(d)),
                y.items.forEach(function(a) {
                  var e, f, g;
                  u(a.group)
                    ? ((e = b[a.group]),
                      e ||
                        ((f = k(c[0], d, "optgroup", i)),
                        (d = f.nextSibling),
                        (f.label = a.group),
                        (e = b[a.group] = {
                          groupElement: f,
                          currentOptionElement: f.firstChild
                        })),
                      (g = k(
                        e.groupElement,
                        e.currentOptionElement,
                        "option",
                        h
                      )),
                      j(a, g),
                      (e.currentOptionElement = g.nextSibling))
                    : ((g = k(c[0], d, "option", h)),
                      j(a, g),
                      (d = g.nextSibling));
                }),
                Object.keys(b).forEach(function(a) {
                  l(b[a].currentOptionElement);
                }),
                l(d),
                q.$render(),
                !q.$isEmpty(a))
              ) {
                var e = p.readValue(),
                  f = z.trackBy || r;
                (f ? R(a, e) : a === e) || (q.$setViewValue(e), q.$render());
              }
            }
            for (
              var o,
                p = g[0],
                q = g[1],
                r = e.multiple,
                s = 0,
                t = c.children(),
                v = t.length;
              v > s;
              s++
            )
              if ("" === t[s].value) {
                o = t.eq(s);
                break;
              }
            var w = !!o,
              x = Id(h.cloneNode(!1));
            x.val("?");
            var y,
              z = d(e.ngOptions, c, b),
              A = function() {
                w || c.prepend(o),
                  c.val(""),
                  o.prop("selected", !0),
                  o.attr("selected", !0);
              },
              B = function() {
                w || o.remove();
              },
              C = function() {
                c.prepend(x),
                  c.val("?"),
                  x.prop("selected", !0),
                  x.attr("selected", !0);
              },
              D = function() {
                x.remove();
              };
            r
              ? ((q.$isEmpty = function(a) {
                  return !a || 0 === a.length;
                }),
                (p.writeValue = function(a) {
                  y.items.forEach(function(a) {
                    a.element.selected = !1;
                  }),
                    a &&
                      a.forEach(function(a) {
                        var b = y.getOptionFromViewValue(a);
                        b && !b.disabled && (b.element.selected = !0);
                      });
                }),
                (p.readValue = function() {
                  var a = c.val() || [],
                    b = [];
                  return (
                    f(a, function(a) {
                      var c = y.selectValueMap[a];
                      c && !c.disabled && b.push(y.getViewValueFromOption(c));
                    }),
                    b
                  );
                }),
                z.trackBy &&
                  b.$watchCollection(
                    function() {
                      return Td(q.$viewValue)
                        ? q.$viewValue.map(function(a) {
                            return z.getTrackByValue(a);
                          })
                        : void 0;
                    },
                    function() {
                      q.$render();
                    }
                  ))
              : ((p.writeValue = function(a) {
                  var b = y.getOptionFromViewValue(a);
                  b && !b.disabled
                    ? (c[0].value !== b.selectValue &&
                        (D(),
                        B(),
                        (c[0].value = b.selectValue),
                        (b.element.selected = !0)),
                      b.element.setAttribute("selected", "selected"))
                    : null === a || w
                    ? (D(), A())
                    : (B(), C());
                }),
                (p.readValue = function() {
                  var a = y.selectValueMap[c.val()];
                  return a && !a.disabled
                    ? (B(), D(), y.getViewValueFromOption(a))
                    : null;
                }),
                z.trackBy &&
                  b.$watch(
                    function() {
                      return z.getTrackByValue(q.$viewValue);
                    },
                    function() {
                      q.$render();
                    }
                  )),
              w
                ? (o.remove(), a(o)(b), o.removeClass("ng-scope"))
                : (o = Id(h.cloneNode(!1))),
              n(),
              b.$watchCollection(z.getWatchables, n);
          }
          var h = b.createElement("option"),
            i = b.createElement("optgroup");
          return {
            restrict: "A",
            terminal: !0,
            require: ["select", "ngModel"],
            link: {
              pre: function(a, b, c, d) {
                d[0].registerOption = p;
              },
              post: g
            }
          };
        }
      ],
      Fg = [
        "$locale",
        "$interpolate",
        "$log",
        function(a, b, c) {
          var d = /{}/g,
            e = /^when(Minus)?(.+)$/;
          return {
            link: function(g, h, i) {
              function j(a) {
                h.text(a || "");
              }
              var k,
                l = i.count,
                m = i.$attr.when && h.attr(i.$attr.when),
                n = i.offset || 0,
                o = g.$eval(m) || {},
                q = {},
                r = b.startSymbol(),
                s = b.endSymbol(),
                u = r + l + "-" + n + s,
                v = Rd.noop;
              f(i, function(a, b) {
                var c = e.exec(b);
                if (c) {
                  var d = (c[1] ? "-" : "") + Dd(c[2]);
                  o[d] = h.attr(i.$attr[b]);
                }
              }),
                f(o, function(a, c) {
                  q[c] = b(a.replace(d, u));
                }),
                g.$watch(l, function(b) {
                  var d = parseFloat(b),
                    e = isNaN(d);
                  if (
                    (e || d in o || (d = a.pluralCat(d - n)),
                    d !== k && !(e && y(k) && isNaN(k)))
                  ) {
                    v();
                    var f = q[d];
                    t(f)
                      ? (null != b &&
                          c.debug(
                            "ngPluralize: no rule defined for '" +
                              d +
                              "' in " +
                              m
                          ),
                        (v = p),
                        j())
                      : (v = g.$watch(f, j)),
                      (k = d);
                  }
                });
            }
          };
        }
      ],
      Gg = [
        "$parse",
        "$animate",
        "$compile",
        function(a, b, g) {
          var h = "$$NG_REMOVED",
            i = d("ngRepeat"),
            j = function(a, b, c, d, e, f, g) {
              (a[c] = d),
                e && (a[e] = f),
                (a.$index = b),
                (a.$first = 0 === b),
                (a.$last = b === g - 1),
                (a.$middle = !(a.$first || a.$last)),
                (a.$odd = !(a.$even = 0 === (1 & b)));
            },
            k = function(a) {
              return a.clone[0];
            },
            l = function(a) {
              return a.clone[a.clone.length - 1];
            };
          return {
            restrict: "A",
            multiElement: !0,
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            $$tlb: !0,
            compile: function(d, m) {
              var n = m.ngRepeat,
                o = g.$$createComment("end ngRepeat", n),
                p = n.match(
                  /^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/
                );
              if (!p)
                throw i(
                  "iexp",
                  "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",
                  n
                );
              var q = p[1],
                r = p[2],
                s = p[3],
                t = p[4];
              if (
                ((p = q.match(
                  /^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/
                )),
                !p)
              )
                throw i(
                  "iidexp",
                  "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.",
                  q
                );
              var u = p[3] || p[1],
                v = p[2];
              if (
                s &&
                (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(s) ||
                  /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(
                    s
                  ))
              )
                throw i(
                  "badident",
                  "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.",
                  s
                );
              var w,
                x,
                y,
                z,
                A = { $id: _a };
              return (
                t
                  ? (w = a(t))
                  : ((y = function(a, b) {
                      return _a(b);
                    }),
                    (z = function(a) {
                      return a;
                    })),
                function(a, d, g, m, p) {
                  w &&
                    (x = function(b, c, d) {
                      return (
                        v && (A[v] = b), (A[u] = c), (A.$index = d), w(a, A)
                      );
                    });
                  var q = ra();
                  a.$watchCollection(r, function(g) {
                    var m,
                      r,
                      t,
                      w,
                      A,
                      B,
                      C,
                      D,
                      E,
                      F,
                      G,
                      H,
                      I = d[0],
                      J = ra();
                    if ((s && (a[s] = g), e(g))) (E = g), (D = x || y);
                    else {
                      (D = x || z), (E = []);
                      for (var K in g)
                        Cd.call(g, K) && "$" !== K.charAt(0) && E.push(K);
                    }
                    for (w = E.length, G = new Array(w), m = 0; w > m; m++)
                      if (
                        ((A = g === E ? m : E[m]),
                        (B = g[A]),
                        (C = D(A, B, m)),
                        q[C])
                      )
                        (F = q[C]), delete q[C], (J[C] = F), (G[m] = F);
                      else {
                        if (J[C])
                          throw (f(G, function(a) {
                            a && a.scope && (q[a.id] = a);
                          }),
                          i(
                            "dupes",
                            "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}",
                            n,
                            C,
                            B
                          ));
                        (G[m] = { id: C, scope: c, clone: c }), (J[C] = !0);
                      }
                    for (var L in q) {
                      if (
                        ((F = q[L]),
                        (H = qa(F.clone)),
                        b.leave(H),
                        H[0].parentNode)
                      )
                        for (m = 0, r = H.length; r > m; m++) H[m][h] = !0;
                      F.scope.$destroy();
                    }
                    for (m = 0; w > m; m++)
                      if (
                        ((A = g === E ? m : E[m]),
                        (B = g[A]),
                        (F = G[m]),
                        F.scope)
                      ) {
                        t = I;
                        do t = t.nextSibling;
                        while (t && t[h]);
                        k(F) != t && b.move(qa(F.clone), null, I),
                          (I = l(F)),
                          j(F.scope, m, u, B, v, A, w);
                      } else
                        p(function(a, c) {
                          F.scope = c;
                          var d = o.cloneNode(!1);
                          (a[a.length++] = d),
                            b.enter(a, null, I),
                            (I = d),
                            (F.clone = a),
                            (J[F.id] = F),
                            j(F.scope, m, u, B, v, A, w);
                        });
                    q = J;
                  });
                }
              );
            }
          };
        }
      ],
      Hg = "ng-hide",
      Ig = "ng-hide-animate",
      Jg = [
        "$animate",
        function(a) {
          return {
            restrict: "A",
            multiElement: !0,
            link: function(b, c, d) {
              b.$watch(d.ngShow, function(b) {
                a[b ? "removeClass" : "addClass"](c, Hg, { tempClasses: Ig });
              });
            }
          };
        }
      ],
      Kg = [
        "$animate",
        function(a) {
          return {
            restrict: "A",
            multiElement: !0,
            link: function(b, c, d) {
              b.$watch(d.ngHide, function(b) {
                a[b ? "addClass" : "removeClass"](c, Hg, { tempClasses: Ig });
              });
            }
          };
        }
      ],
      Lg = gd(function(a, b, c) {
        a.$watch(
          c.ngStyle,
          function(a, c) {
            c &&
              a !== c &&
              f(c, function(a, c) {
                b.css(c, "");
              }),
              a && b.css(a);
          },
          !0
        );
      }),
      Mg = [
        "$animate",
        "$compile",
        function(a, b) {
          return {
            require: "ngSwitch",
            controller: [
              "$scope",
              function() {
                this.cases = {};
              }
            ],
            link: function(c, d, e, g) {
              var h = e.ngSwitch || e.on,
                i = [],
                j = [],
                k = [],
                l = [],
                m = function(a, b) {
                  return function() {
                    a.splice(b, 1);
                  };
                };
              c.$watch(h, function(c) {
                var d, e;
                for (d = 0, e = k.length; e > d; ++d) a.cancel(k[d]);
                for (k.length = 0, d = 0, e = l.length; e > d; ++d) {
                  var h = qa(j[d].clone);
                  l[d].$destroy();
                  var n = (k[d] = a.leave(h));
                  n.then(m(k, d));
                }
                (j.length = 0),
                  (l.length = 0),
                  (i = g.cases["!" + c] || g.cases["?"]) &&
                    f(i, function(c) {
                      c.transclude(function(d, e) {
                        l.push(e);
                        var f = c.element;
                        d[d.length++] = b.$$createComment("end ngSwitchWhen");
                        var g = { clone: d };
                        j.push(g), a.enter(d, f.parent(), f);
                      });
                    });
              });
            }
          };
        }
      ],
      Ng = gd({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function(a, b, c, d, e) {
          (d.cases["!" + c.ngSwitchWhen] = d.cases["!" + c.ngSwitchWhen] || []),
            d.cases["!" + c.ngSwitchWhen].push({ transclude: e, element: b });
        }
      }),
      Og = gd({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function(a, b, c, d, e) {
          (d.cases["?"] = d.cases["?"] || []),
            d.cases["?"].push({ transclude: e, element: b });
        }
      }),
      Pg = d("ngTransclude"),
      Qg = gd({
        restrict: "EAC",
        link: function(a, b, c, d, e) {
          function f(a) {
            a.length && (b.empty(), b.append(a));
          }
          if (
            (c.ngTransclude === c.$attr.ngTransclude && (c.ngTransclude = ""),
            !e)
          )
            throw Pg(
              "orphan",
              "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}",
              _(b)
            );
          var g = c.ngTransclude || c.ngTranscludeSlot;
          e(f, null, g);
        }
      }),
      Rg = [
        "$templateCache",
        function(a) {
          return {
            restrict: "E",
            terminal: !0,
            compile: function(b, c) {
              if ("text/ng-template" == c.type) {
                var d = c.id,
                  e = b[0].text;
                a.put(d, e);
              }
            }
          };
        }
      ],
      Sg = { $setViewValue: p, $render: p },
      Tg = [
        "$element",
        "$scope",
        function(a, d) {
          var e = this,
            f = new ab();
          (e.ngModelCtrl = Sg),
            (e.unknownOption = Id(b.createElement("option"))),
            (e.renderUnknownOption = function(b) {
              var c = "? " + _a(b) + " ?";
              e.unknownOption.val(c), a.prepend(e.unknownOption), a.val(c);
            }),
            d.$on("$destroy", function() {
              e.renderUnknownOption = p;
            }),
            (e.removeUnknownOption = function() {
              e.unknownOption.parent() && e.unknownOption.remove();
            }),
            (e.readValue = function() {
              return e.removeUnknownOption(), a.val();
            }),
            (e.writeValue = function(b) {
              e.hasOption(b)
                ? (e.removeUnknownOption(),
                  a.val(b),
                  "" === b && e.emptyOption.prop("selected", !0))
                : null == b && e.emptyOption
                ? (e.removeUnknownOption(), a.val(""))
                : e.renderUnknownOption(b);
            }),
            (e.addOption = function(a, b) {
              if (b[0].nodeType !== ee) {
                oa(a, '"option value"'), "" === a && (e.emptyOption = b);
                var c = f.get(a) || 0;
                f.put(a, c + 1), e.ngModelCtrl.$render(), zd(b);
              }
            }),
            (e.removeOption = function(a) {
              var b = f.get(a);
              b &&
                (1 === b
                  ? (f.remove(a), "" === a && (e.emptyOption = c))
                  : f.put(a, b - 1));
            }),
            (e.hasOption = function(a) {
              return !!f.get(a);
            }),
            (e.registerOption = function(a, b, c, d, f) {
              if (d) {
                var g;
                c.$observe("value", function(a) {
                  u(g) && e.removeOption(g), (g = a), e.addOption(a, b);
                });
              } else
                f
                  ? a.$watch(f, function(a, d) {
                      c.$set("value", a),
                        d !== a && e.removeOption(d),
                        e.addOption(a, b);
                    })
                  : e.addOption(c.value, b);
              b.on("$destroy", function() {
                e.removeOption(c.value), e.ngModelCtrl.$render();
              });
            });
        }
      ],
      Ug = function() {
        function a(a, b, c, d) {
          var e = d[1];
          if (e) {
            var g = d[0];
            if (
              ((g.ngModelCtrl = e),
              b.on("change", function() {
                a.$apply(function() {
                  e.$setViewValue(g.readValue());
                });
              }),
              c.multiple)
            ) {
              (g.readValue = function() {
                var a = [];
                return (
                  f(b.find("option"), function(b) {
                    b.selected && a.push(b.value);
                  }),
                  a
                );
              }),
                (g.writeValue = function(a) {
                  var c = new ab(a);
                  f(b.find("option"), function(a) {
                    a.selected = u(c.get(a.value));
                  });
                });
              var h,
                i = NaN;
              a.$watch(function() {
                i !== e.$viewValue ||
                  R(h, e.$viewValue) ||
                  ((h = Q(e.$viewValue)), e.$render()),
                  (i = e.$viewValue);
              }),
                (e.$isEmpty = function(a) {
                  return !a || 0 === a.length;
                });
            }
          }
        }
        function b(a, b, c, d) {
          var e = d[1];
          if (e) {
            var f = d[0];
            e.$render = function() {
              f.writeValue(e.$viewValue);
            };
          }
        }
        return {
          restrict: "E",
          require: ["select", "?ngModel"],
          controller: Tg,
          priority: 1,
          link: { pre: a, post: b }
        };
      },
      Vg = [
        "$interpolate",
        function(a) {
          return {
            restrict: "E",
            priority: 100,
            compile: function(b, c) {
              if (u(c.value)) var d = a(c.value, !0);
              else {
                var e = a(b.text(), !0);
                e || c.$set("value", b.text());
              }
              return function(a, b, c) {
                var f = "$selectController",
                  g = b.parent(),
                  h = g.data(f) || g.parent().data(f);
                h && h.registerOption(a, b, c, d, e);
              };
            }
          };
        }
      ],
      Wg = r({ restrict: "E", terminal: !1 }),
      Xg = function() {
        return {
          restrict: "A",
          require: "?ngModel",
          link: function(a, b, c, d) {
            d &&
              ((c.required = !0),
              (d.$validators.required = function(a, b) {
                return !c.required || !d.$isEmpty(b);
              }),
              c.$observe("required", function() {
                d.$validate();
              }));
          }
        };
      },
      Yg = function() {
        return {
          restrict: "A",
          require: "?ngModel",
          link: function(a, b, e, f) {
            if (f) {
              var g,
                h = e.ngPattern || e.pattern;
              e.$observe("pattern", function(a) {
                if (
                  (x(a) && a.length > 0 && (a = new RegExp("^" + a + "$")),
                  a && !a.test)
                )
                  throw d("ngPattern")(
                    "noregexp",
                    "Expected {0} to be a RegExp but was {1}. Element: {2}",
                    h,
                    a,
                    _(b)
                  );
                (g = a || c), f.$validate();
              }),
                (f.$validators.pattern = function(a, b) {
                  return f.$isEmpty(b) || t(g) || g.test(b);
                });
            }
          }
        };
      },
      Zg = function() {
        return {
          restrict: "A",
          require: "?ngModel",
          link: function(a, b, c, d) {
            if (d) {
              var e = -1;
              c.$observe("maxlength", function(a) {
                var b = n(a);
                (e = isNaN(b) ? -1 : b), d.$validate();
              }),
                (d.$validators.maxlength = function(a, b) {
                  return 0 > e || d.$isEmpty(b) || b.length <= e;
                });
            }
          }
        };
      },
      $g = function() {
        return {
          restrict: "A",
          require: "?ngModel",
          link: function(a, b, c, d) {
            if (d) {
              var e = 0;
              c.$observe("minlength", function(a) {
                (e = n(a) || 0), d.$validate();
              }),
                (d.$validators.minlength = function(a, b) {
                  return d.$isEmpty(b) || b.length >= e;
                });
            }
          }
        };
      };
    return a.angular.bootstrap
      ? void (
          a.console &&
          console.log("WARNING: Tried to load angular more than once.")
        )
      : (la(),
        va(Rd),
        Rd.module(
          "ngLocale",
          [],
          [
            "$provide",
            function(a) {
              function b(a) {
                a += "";
                var b = a.indexOf(".");
                return -1 == b ? 0 : a.length - b - 1;
              }
              function d(a, d) {
                var e = d;
                c === e && (e = Math.min(b(a), 3));
                var f = Math.pow(10, e),
                  g = ((a * f) | 0) % f;
                return { v: e, f: g };
              }
              var e = {
                ZERO: "zero",
                ONE: "one",
                TWO: "two",
                FEW: "few",
                MANY: "many",
                OTHER: "other"
              };
              a.value("$locale", {
                DATETIME_FORMATS: {
                  AMPMS: ["AM", "PM"],
                  DAY: [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  ERANAMES: ["Before Christ", "Anno Domini"],
                  ERAS: ["BC", "AD"],
                  FIRSTDAYOFWEEK: 6,
                  MONTH: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"
                  ],
                  SHORTDAY: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                  SHORTMONTH: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec"
                  ],
                  STANDALONEMONTH: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"
                  ],
                  WEEKENDRANGE: [5, 6],
                  fullDate: "EEEE, MMMM d, y",
                  longDate: "MMMM d, y",
                  medium: "MMM d, y h:mm:ss a",
                  mediumDate: "MMM d, y",
                  mediumTime: "h:mm:ss a",
                  short: "M/d/yy h:mm a",
                  shortDate: "M/d/yy",
                  shortTime: "h:mm a"
                },
                NUMBER_FORMATS: {
                  CURRENCY_SYM: "$",
                  DECIMAL_SEP: ".",
                  GROUP_SEP: ",",
                  PATTERNS: [
                    {
                      gSize: 3,
                      lgSize: 3,
                      maxFrac: 3,
                      minFrac: 0,
                      minInt: 1,
                      negPre: "-",
                      negSuf: "",
                      posPre: "",
                      posSuf: ""
                    },
                    {
                      gSize: 3,
                      lgSize: 3,
                      maxFrac: 2,
                      minFrac: 2,
                      minInt: 1,
                      negPre: "-¤",
                      negSuf: "",
                      posPre: "¤",
                      posSuf: ""
                    }
                  ]
                },
                id: "en-us",
                localeID: "en_US",
                pluralCat: function(a, b) {
                  var c = 0 | a,
                    f = d(a, b);
                  return 1 == c && 0 == f.v ? e.ONE : e.OTHER;
                }
              });
            }
          ]
        ),
        void Id(b).ready(function() {
          ga(b, ha);
        }));
  })(window, document),
  !window.angular.$$csp().noInlineStyle &&
    window.angular
      .element(document.head)
      .prepend(
        '<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'
      ),
  (function(a, b, c) {
    "use strict";
    function d(a, b, c) {
      if (!a)
        throw qa("areq", "Argument '{0}' is {1}", b || "?", c || "required");
      return a;
    }
    function e(a, b) {
      return a || b
        ? a
          ? b
            ? (R(a) && (a = a.join(" ")),
              R(b) && (b = b.join(" ")),
              a + " " + b)
            : a
          : b
        : "";
    }
    function f(a) {
      var b = {};
      return a && (a.to || a.from) && ((b.to = a.to), (b.from = a.from)), b;
    }
    function g(a, b, c) {
      var d = "";
      return (
        (a = R(a) ? a : a && S(a) && a.length ? a.split(/\s+/) : []),
        Q(a, function(a, e) {
          a &&
            a.length > 0 &&
            ((d += e > 0 ? " " : ""), (d += c ? b + a : a + b));
        }),
        d
      );
    }
    function h(a, b) {
      var c = a.indexOf(b);
      b >= 0 && a.splice(c, 1);
    }
    function i(a) {
      if (a instanceof P)
        switch (a.length) {
          case 0:
            return [];
          case 1:
            if (a[0].nodeType === Y) return a;
            break;
          default:
            return P(j(a));
        }
      return a.nodeType === Y ? P(a) : void 0;
    }
    function j(a) {
      if (!a[0]) return a;
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if (c.nodeType == Y) return c;
      }
    }
    function k(a, b, c) {
      Q(b, function(b) {
        a.addClass(b, c);
      });
    }
    function l(a, b, c) {
      Q(b, function(b) {
        a.removeClass(b, c);
      });
    }
    function m(a) {
      return function(b, c) {
        c.addClass && (k(a, b, c.addClass), (c.addClass = null)),
          c.removeClass && (l(a, b, c.removeClass), (c.removeClass = null));
      };
    }
    function n(a) {
      if (((a = a || {}), !a.$$prepared)) {
        var b = a.domOperation || M;
        (a.domOperation = function() {
          (a.$$domOperationFired = !0), b(), (b = M);
        }),
          (a.$$prepared = !0);
      }
      return a;
    }
    function o(a, b) {
      p(a, b), q(a, b);
    }
    function p(a, b) {
      b.from && (a.css(b.from), (b.from = null));
    }
    function q(a, b) {
      b.to && (a.css(b.to), (b.to = null));
    }
    function r(a, b, c) {
      var d = b.options || {},
        e = c.options || {},
        f = (d.addClass || "") + " " + (e.addClass || ""),
        g = (d.removeClass || "") + " " + (e.removeClass || ""),
        h = s(a.attr("class"), f, g);
      e.preparationClasses &&
        ((d.preparationClasses = z(e.preparationClasses, d.preparationClasses)),
        delete e.preparationClasses);
      var i = d.domOperation !== M ? d.domOperation : null;
      return (
        O(d, e),
        i && (d.domOperation = i),
        h.addClass ? (d.addClass = h.addClass) : (d.addClass = null),
        h.removeClass
          ? (d.removeClass = h.removeClass)
          : (d.removeClass = null),
        (b.addClass = d.addClass),
        (b.removeClass = d.removeClass),
        d
      );
    }
    function s(a, b, c) {
      function d(a) {
        S(a) && (a = a.split(" "));
        var b = {};
        return (
          Q(a, function(a) {
            a.length && (b[a] = !0);
          }),
          b
        );
      }
      var e = 1,
        f = -1,
        g = {};
      (a = d(a)),
        (b = d(b)),
        Q(b, function(a, b) {
          g[b] = e;
        }),
        (c = d(c)),
        Q(c, function(a, b) {
          g[b] = g[b] === e ? null : f;
        });
      var h = { addClass: "", removeClass: "" };
      return (
        Q(g, function(b, c) {
          var d, g;
          b === e
            ? ((d = "addClass"), (g = !a[c]))
            : b === f && ((d = "removeClass"), (g = a[c])),
            g && (h[d].length && (h[d] += " "), (h[d] += c));
        }),
        h
      );
    }
    function t(a) {
      return a instanceof b.element ? a[0] : a;
    }
    function u(a, b, c) {
      var d = "";
      b && (d = g(b, _, !0)),
        c.addClass && (d = z(d, g(c.addClass, Z))),
        c.removeClass && (d = z(d, g(c.removeClass, $))),
        d.length && ((c.preparationClasses = d), a.addClass(d));
    }
    function v(a, b) {
      b.preparationClasses &&
        (a.removeClass(b.preparationClasses), (b.preparationClasses = null)),
        b.activeClasses &&
          (a.removeClass(b.activeClasses), (b.activeClasses = null));
    }
    function w(a, b) {
      var c = b ? "-" + b + "s" : "";
      return y(a, [oa, c]), [oa, c];
    }
    function x(a, b) {
      var c = b ? "paused" : "",
        d = K + ka;
      return y(a, [d, c]), [d, c];
    }
    function y(a, b) {
      var c = b[0],
        d = b[1];
      a.style[c] = d;
    }
    function z(a, b) {
      return a ? (b ? a + " " + b : a) : b;
    }
    function A(a) {
      return [na, a + "s"];
    }
    function B(a, b) {
      var c = b ? ma : oa;
      return [c, a + "s"];
    }
    function C(a, b, c) {
      var d = Object.create(null),
        e = a.getComputedStyle(b) || {};
      return (
        Q(c, function(a, b) {
          var c = e[a];
          if (c) {
            var f = c.charAt(0);
            ("-" === f || "+" === f || f >= 0) && (c = D(c)),
              0 === c && (c = null),
              (d[b] = c);
          }
        }),
        d
      );
    }
    function D(a) {
      var b = 0,
        c = a.split(/\s*,\s*/);
      return (
        Q(c, function(a) {
          "s" == a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1)),
            (a = parseFloat(a) || 0),
            (b = b ? Math.max(a, b) : a);
        }),
        b
      );
    }
    function E(a) {
      return 0 === a || null != a;
    }
    function F(a, b) {
      var c = I,
        d = a + "s";
      return b ? (c += fa) : (d += " linear all"), [c, d];
    }
    function G() {
      var a = Object.create(null);
      return {
        flush: function() {
          a = Object.create(null);
        },
        count: function(b) {
          var c = a[b];
          return c ? c.total : 0;
        },
        get: function(b) {
          var c = a[b];
          return c && c.value;
        },
        put: function(b, c) {
          a[b] ? a[b].total++ : (a[b] = { total: 1, value: c });
        }
      };
    }
    function H(a, b, c) {
      Q(c, function(c) {
        a[c] = V(a[c]) ? a[c] : b.style.getPropertyValue(c);
      });
    }
    var I,
      J,
      K,
      L,
      M = b.noop,
      N = b.copy,
      O = b.extend,
      P = b.element,
      Q = b.forEach,
      R = b.isArray,
      S = b.isString,
      T = b.isObject,
      U = b.isUndefined,
      V = b.isDefined,
      W = b.isFunction,
      X = b.isElement,
      Y = 1,
      Z = "-add",
      $ = "-remove",
      _ = "ng-",
      aa = "-active",
      ba = "-prepare",
      ca = "ng-animate",
      da = "$$ngAnimateChildren",
      ea = "";
    U(a.ontransitionend) && V(a.onwebkittransitionend)
      ? ((ea = "-webkit-"),
        (I = "WebkitTransition"),
        (J = "webkitTransitionEnd transitionend"))
      : ((I = "transition"), (J = "transitionend")),
      U(a.onanimationend) && V(a.onwebkitanimationend)
        ? ((ea = "-webkit-"),
          (K = "WebkitAnimation"),
          (L = "webkitAnimationEnd animationend"))
        : ((K = "animation"), (L = "animationend"));
    var fa = "Duration",
      ga = "Property",
      ha = "Delay",
      ia = "TimingFunction",
      ja = "IterationCount",
      ka = "PlayState",
      la = 9999,
      ma = K + ha,
      na = K + fa,
      oa = I + ha,
      pa = I + fa,
      qa = b.$$minErr("ng"),
      ra = [
        "$$rAF",
        function(a) {
          function b(a) {
            (d = d.concat(a)), c();
          }
          function c() {
            if (d.length) {
              for (var b = d.shift(), f = 0; f < b.length; f++) b[f]();
              e ||
                a(function() {
                  e || c();
                });
            }
          }
          var d, e;
          return (
            (d = b.queue = []),
            (b.waitUntilQuiet = function(b) {
              e && e(),
                (e = a(function() {
                  (e = null), b(), c();
                }));
            }),
            b
          );
        }
      ],
      sa = [
        "$interpolate",
        function(a) {
          return {
            link: function(c, d, e) {
              function f(a) {
                (a = "on" === a || "true" === a), d.data(da, a);
              }
              var g = e.ngAnimateChildren;
              b.isString(g) && 0 === g.length
                ? d.data(da, !0)
                : (f(a(g)(c)), e.$observe("ngAnimateChildren", f));
            }
          };
        }
      ],
      ta = "$$animateCss",
      ua = 1e3,
      va = 3,
      wa = 1.5,
      xa = {
        transitionDuration: pa,
        transitionDelay: oa,
        transitionProperty: I + ga,
        animationDuration: na,
        animationDelay: ma,
        animationIterationCount: K + ja
      },
      ya = {
        transitionDuration: pa,
        transitionDelay: oa,
        animationDuration: na,
        animationDelay: ma
      },
      za = [
        "$animateProvider",
        function(a) {
          var b = G(),
            c = G();
          this.$get = [
            "$window",
            "$$jqLite",
            "$$AnimateRunner",
            "$timeout",
            "$$forceReflow",
            "$sniffer",
            "$$rAFScheduler",
            "$$animateQueue",
            function(a, d, e, i, j, k, l, r) {
              function s(a, b) {
                var c = "$$ngAnimateParentKey",
                  d = a.parentNode,
                  e = d[c] || (d[c] = ++O);
                return e + "-" + a.getAttribute("class") + "-" + b;
              }
              function u(c, d, e, f) {
                var g = b.get(e);
                return (
                  g ||
                    ((g = C(a, c, f)),
                    "infinite" === g.animationIterationCount &&
                      (g.animationIterationCount = 1)),
                  b.put(e, g),
                  g
                );
              }
              function v(e, f, h, i) {
                var j;
                if (b.count(h) > 0 && ((j = c.get(h)), !j)) {
                  var k = g(f, "-stagger");
                  d.addClass(e, k),
                    (j = C(a, e, i)),
                    (j.animationDuration = Math.max(j.animationDuration, 0)),
                    (j.transitionDuration = Math.max(j.transitionDuration, 0)),
                    d.removeClass(e, k),
                    c.put(h, j);
                }
                return j || {};
              }
              function z(a) {
                P.push(a),
                  l.waitUntilQuiet(function() {
                    b.flush(), c.flush();
                    for (var a = j(), d = 0; d < P.length; d++) P[d](a);
                    P.length = 0;
                  });
              }
              function D(a, b, c) {
                var d = u(a, b, c, xa),
                  e = d.animationDelay,
                  f = d.transitionDelay;
                return (
                  (d.maxDelay = e && f ? Math.max(e, f) : e || f),
                  (d.maxDuration = Math.max(
                    d.animationDuration * d.animationIterationCount,
                    d.transitionDuration
                  )),
                  d
                );
              }
              var G = m(d),
                O = 0,
                P = [];
              return function(a, c) {
                function j() {
                  m();
                }
                function l() {
                  m(!0);
                }
                function m(b) {
                  if (!(V || (X && W))) {
                    (V = !0),
                      (W = !1),
                      S.$$skipPreparationClasses || d.removeClass(a, sa),
                      d.removeClass(a, za),
                      x(U, !1),
                      w(U, !1),
                      Q(ja, function(a) {
                        U.style[a[0]] = "";
                      }),
                      G(a, S),
                      o(a, S),
                      Object.keys(T).length &&
                        Q(T, function(a, b) {
                          a
                            ? U.style.setProperty(b, a)
                            : U.style.removeProperty(b);
                        }),
                      S.onDone && S.onDone(),
                      na && na.length && a.off(na.join(" "), O);
                    var c = a.data(ta);
                    c && (i.cancel(c[0].timer), a.removeData(ta)),
                      Y && Y.complete(!b);
                  }
                }
                function u(a) {
                  Na.blockTransition && w(U, a),
                    Na.blockKeyframeAnimation && x(U, !!a);
                }
                function C() {
                  return (
                    (Y = new e({ end: j, cancel: l })),
                    z(M),
                    m(),
                    {
                      $$willAnimate: !1,
                      start: function() {
                        return Y;
                      },
                      end: j
                    }
                  );
                }
                function O(a) {
                  a.stopPropagation();
                  var b = a.originalEvent || a,
                    c = b.$manualTimeStamp || Date.now(),
                    d = parseFloat(b.elapsedTime.toFixed(va));
                  Math.max(c - ha, 0) >= da && d >= ea && ((X = !0), m());
                }
                function P() {
                  function b() {
                    if (!V) {
                      if (
                        (u(!1),
                        Q(ja, function(a) {
                          var b = a[0],
                            c = a[1];
                          U.style[b] = c;
                        }),
                        G(a, S),
                        d.addClass(a, za),
                        Na.recalculateTimingStyles)
                      ) {
                        if (
                          ((xa = U.className + " " + sa),
                          (Ca = s(U, xa)),
                          (La = D(U, xa, Ca)),
                          (Ma = La.maxDelay),
                          (ca = Math.max(Ma, 0)),
                          (ea = La.maxDuration),
                          0 === ea)
                        )
                          return void m();
                        (Na.hasTransitions = La.transitionDuration > 0),
                          (Na.hasAnimations = La.animationDuration > 0);
                      }
                      if (
                        (Na.applyAnimationDelay &&
                          ((Ma =
                            "boolean" != typeof S.delay && E(S.delay)
                              ? parseFloat(S.delay)
                              : Ma),
                          (ca = Math.max(Ma, 0)),
                          (La.animationDelay = Ma),
                          (Oa = B(Ma, !0)),
                          ja.push(Oa),
                          (U.style[Oa[0]] = Oa[1])),
                        (da = ca * ua),
                        (fa = ea * ua),
                        S.easing)
                      ) {
                        var b,
                          e = S.easing;
                        Na.hasTransitions &&
                          ((b = I + ia), ja.push([b, e]), (U.style[b] = e)),
                          Na.hasAnimations &&
                            ((b = K + ia), ja.push([b, e]), (U.style[b] = e));
                      }
                      La.transitionDuration && na.push(J),
                        La.animationDuration && na.push(L),
                        (ha = Date.now());
                      var f = da + wa * fa,
                        g = ha + f,
                        h = a.data(ta) || [],
                        j = !0;
                      if (h.length) {
                        var k = h[0];
                        (j = g > k.expectedEndTime),
                          j ? i.cancel(k.timer) : h.push(m);
                      }
                      if (j) {
                        var l = i(c, f, !1);
                        (h[0] = { timer: l, expectedEndTime: g }),
                          h.push(m),
                          a.data(ta, h);
                      }
                      na.length && a.on(na.join(" "), O),
                        S.to &&
                          (S.cleanupStyles && H(T, U, Object.keys(S.to)),
                          q(a, S));
                    }
                  }
                  function c() {
                    var b = a.data(ta);
                    if (b) {
                      for (var c = 1; c < b.length; c++) b[c]();
                      a.removeData(ta);
                    }
                  }
                  if (!V) {
                    if (!U.parentNode) return void m();
                    var e = function(a) {
                        if (X) W && a && ((W = !1), m());
                        else if (((W = !a), La.animationDuration)) {
                          var b = x(U, W);
                          W ? ja.push(b) : h(ja, b);
                        }
                      },
                      f =
                        Ja > 0 &&
                        ((La.transitionDuration &&
                          0 === Da.transitionDuration) ||
                          (La.animationDuration &&
                            0 === Da.animationDuration)) &&
                        Math.max(Da.animationDelay, Da.transitionDelay);
                    f ? i(b, Math.floor(f * Ja * ua), !1) : b(),
                      (ba.resume = function() {
                        e(!0);
                      }),
                      (ba.pause = function() {
                        e(!1);
                      });
                  }
                }
                var S = c || {};
                S.$$prepared || (S = n(N(S)));
                var T = {},
                  U = t(a);
                if (!U || !U.parentNode || !r.enabled()) return C();
                var V,
                  W,
                  X,
                  Y,
                  ba,
                  ca,
                  da,
                  ea,
                  fa,
                  ha,
                  ja = [],
                  ka = a.attr("class"),
                  ma = f(S),
                  na = [];
                if (0 === S.duration || (!k.animations && !k.transitions))
                  return C();
                var oa = S.event && R(S.event) ? S.event.join(" ") : S.event,
                  pa = oa && S.structural,
                  qa = "",
                  ra = "";
                pa ? (qa = g(oa, _, !0)) : oa && (qa = oa),
                  S.addClass && (ra += g(S.addClass, Z)),
                  S.removeClass &&
                    (ra.length && (ra += " "), (ra += g(S.removeClass, $))),
                  S.applyClassesEarly && ra.length && G(a, S);
                var sa = [qa, ra].join(" ").trim(),
                  xa = ka + " " + sa,
                  za = g(sa, aa),
                  Aa = ma.to && Object.keys(ma.to).length > 0,
                  Ba = (S.keyframeStyle || "").length > 0;
                if (!Ba && !Aa && !sa) return C();
                var Ca, Da;
                if (S.stagger > 0) {
                  var Ea = parseFloat(S.stagger);
                  Da = {
                    transitionDelay: Ea,
                    animationDelay: Ea,
                    transitionDuration: 0,
                    animationDuration: 0
                  };
                } else (Ca = s(U, xa)), (Da = v(U, sa, Ca, ya));
                S.$$skipPreparationClasses || d.addClass(a, sa);
                var Fa;
                if (S.transitionStyle) {
                  var Ga = [I, S.transitionStyle];
                  y(U, Ga), ja.push(Ga);
                }
                if (S.duration >= 0) {
                  Fa = U.style[I].length > 0;
                  var Ha = F(S.duration, Fa);
                  y(U, Ha), ja.push(Ha);
                }
                if (S.keyframeStyle) {
                  var Ia = [K, S.keyframeStyle];
                  y(U, Ia), ja.push(Ia);
                }
                var Ja = Da
                    ? S.staggerIndex >= 0
                      ? S.staggerIndex
                      : b.count(Ca)
                    : 0,
                  Ka = 0 === Ja;
                Ka && !S.skipBlocking && w(U, la);
                var La = D(U, xa, Ca),
                  Ma = La.maxDelay;
                (ca = Math.max(Ma, 0)), (ea = La.maxDuration);
                var Na = {};
                if (
                  ((Na.hasTransitions = La.transitionDuration > 0),
                  (Na.hasAnimations = La.animationDuration > 0),
                  (Na.hasTransitionAll =
                    Na.hasTransitions && "all" == La.transitionProperty),
                  (Na.applyTransitionDuration =
                    Aa &&
                    ((Na.hasTransitions && !Na.hasTransitionAll) ||
                      (Na.hasAnimations && !Na.hasTransitions))),
                  (Na.applyAnimationDuration = S.duration && Na.hasAnimations),
                  (Na.applyTransitionDelay =
                    E(S.delay) &&
                    (Na.applyTransitionDuration || Na.hasTransitions)),
                  (Na.applyAnimationDelay = E(S.delay) && Na.hasAnimations),
                  (Na.recalculateTimingStyles = ra.length > 0),
                  (Na.applyTransitionDuration || Na.applyAnimationDuration) &&
                    ((ea = S.duration ? parseFloat(S.duration) : ea),
                    Na.applyTransitionDuration &&
                      ((Na.hasTransitions = !0),
                      (La.transitionDuration = ea),
                      (Fa = U.style[I + ga].length > 0),
                      ja.push(F(ea, Fa))),
                    Na.applyAnimationDuration &&
                      ((Na.hasAnimations = !0),
                      (La.animationDuration = ea),
                      ja.push(A(ea)))),
                  0 === ea && !Na.recalculateTimingStyles)
                )
                  return C();
                if (null != S.delay) {
                  var Oa;
                  "boolean" != typeof S.delay &&
                    ((Oa = parseFloat(S.delay)), (ca = Math.max(Oa, 0))),
                    Na.applyTransitionDelay && ja.push(B(Oa)),
                    Na.applyAnimationDelay && ja.push(B(Oa, !0));
                }
                return (
                  null == S.duration &&
                    La.transitionDuration > 0 &&
                    (Na.recalculateTimingStyles =
                      Na.recalculateTimingStyles || Ka),
                  (da = ca * ua),
                  (fa = ea * ua),
                  S.skipBlocking ||
                    ((Na.blockTransition = La.transitionDuration > 0),
                    (Na.blockKeyframeAnimation =
                      La.animationDuration > 0 &&
                      Da.animationDelay > 0 &&
                      0 === Da.animationDuration)),
                  S.from &&
                    (S.cleanupStyles && H(T, U, Object.keys(S.from)), p(a, S)),
                  Na.blockTransition || Na.blockKeyframeAnimation
                    ? u(ea)
                    : S.skipBlocking || w(U, !1),
                  {
                    $$willAnimate: !0,
                    end: j,
                    start: function() {
                      return V
                        ? void 0
                        : ((ba = {
                            end: j,
                            cancel: l,
                            resume: null,
                            pause: null
                          }),
                          (Y = new e(ba)),
                          z(P),
                          Y);
                    }
                  }
                );
              };
            }
          ];
        }
      ],
      Aa = [
        "$$animationProvider",
        function(a) {
          function b(a) {
            return a.parentNode && 11 === a.parentNode.nodeType;
          }
          a.drivers.push("$$animateCssDriver");
          var c = "ng-animate-shim",
            d = "ng-anchor",
            e = "ng-anchor-out",
            f = "ng-anchor-in";
          this.$get = [
            "$animateCss",
            "$rootScope",
            "$$AnimateRunner",
            "$rootElement",
            "$sniffer",
            "$$jqLite",
            "$document",
            function(a, g, h, i, j, k, l) {
              function n(a) {
                return a.replace(/\bng-\S+\b/g, "");
              }
              function o(a, b) {
                return (
                  S(a) && (a = a.split(" ")),
                  S(b) && (b = b.split(" ")),
                  a
                    .filter(function(a) {
                      return -1 === b.indexOf(a);
                    })
                    .join(" ")
                );
              }
              function p(b, g, i) {
                function j(a) {
                  var b = {},
                    c = t(a).getBoundingClientRect();
                  return (
                    Q(["width", "height", "top", "left"], function(a) {
                      var d = c[a];
                      switch (a) {
                        case "top":
                          d += s.scrollTop;
                          break;
                        case "left":
                          d += s.scrollLeft;
                      }
                      b[a] = Math.floor(d) + "px";
                    }),
                    b
                  );
                }
                function k() {
                  var b = a(q, { addClass: e, delay: !0, from: j(g) });
                  return b.$$willAnimate ? b : null;
                }
                function l(a) {
                  return a.attr("class") || "";
                }
                function m() {
                  var b = n(l(i)),
                    c = o(b, r),
                    d = o(r, b),
                    g = a(q, {
                      to: j(i),
                      addClass: f + " " + c,
                      removeClass: e + " " + d,
                      delay: !0
                    });
                  return g.$$willAnimate ? g : null;
                }
                function p() {
                  q.remove(), g.removeClass(c), i.removeClass(c);
                }
                var q = P(t(g).cloneNode(!0)),
                  r = n(l(q));
                g.addClass(c), i.addClass(c), q.addClass(d), v.append(q);
                var u,
                  w = k();
                if (!w && ((u = m()), !u)) return p();
                var x = w || u;
                return {
                  start: function() {
                    function a() {
                      c && c.end();
                    }
                    var b,
                      c = x.start();
                    return (
                      c.done(function() {
                        return (
                          (c = null),
                          !u && (u = m())
                            ? ((c = u.start()),
                              c.done(function() {
                                (c = null), p(), b.complete();
                              }),
                              c)
                            : (p(), void b.complete())
                        );
                      }),
                      (b = new h({ end: a, cancel: a }))
                    );
                  }
                };
              }
              function q(a, b, c, d) {
                var e = r(a, M),
                  f = r(b, M),
                  g = [];
                return (
                  Q(d, function(a) {
                    var b = a.out,
                      d = a["in"],
                      e = p(c, b, d);
                    e && g.push(e);
                  }),
                  e || f || 0 !== g.length
                    ? {
                        start: function() {
                          function a() {
                            Q(b, function(a) {
                              a.end();
                            });
                          }
                          var b = [];
                          e && b.push(e.start()),
                            f && b.push(f.start()),
                            Q(g, function(a) {
                              b.push(a.start());
                            });
                          var c = new h({ end: a, cancel: a });
                          return (
                            h.all(b, function(a) {
                              c.complete(a);
                            }),
                            c
                          );
                        }
                      }
                    : void 0
                );
              }
              function r(b) {
                var c = b.element,
                  d = b.options || {};
                b.structural &&
                  ((d.event = b.event),
                  (d.structural = !0),
                  (d.applyClassesEarly = !0),
                  "leave" === b.event && (d.onDone = d.domOperation)),
                  d.preparationClasses &&
                    (d.event = z(d.event, d.preparationClasses));
                var e = a(c, d);
                return e.$$willAnimate ? e : null;
              }
              if (!j.animations && !j.transitions) return M;
              var s = l[0].body,
                u = t(i),
                v = P(b(u) || s.contains(u) ? u : s);
              m(k);
              return function(a) {
                return a.from && a.to
                  ? q(a.from, a.to, a.classes, a.anchors)
                  : r(a);
              };
            }
          ];
        }
      ],
      Ba = [
        "$animateProvider",
        function(a) {
          this.$get = [
            "$injector",
            "$$AnimateRunner",
            "$$jqLite",
            function(b, c, d) {
              function e(c) {
                c = R(c) ? c : c.split(" ");
                for (var d = [], e = {}, f = 0; f < c.length; f++) {
                  var g = c[f],
                    h = a.$$registeredAnimations[g];
                  h && !e[g] && (d.push(b.get(h)), (e[g] = !0));
                }
                return d;
              }
              var f = m(d);
              return function(a, b, d, g) {
                function h() {
                  g.domOperation(), f(a, g);
                }
                function i() {
                  (m = !0), h(), o(a, g);
                }
                function j(a, b, d, e, f) {
                  var g;
                  switch (d) {
                    case "animate":
                      g = [b, e.from, e.to, f];
                      break;
                    case "setClass":
                      g = [b, r, s, f];
                      break;
                    case "addClass":
                      g = [b, r, f];
                      break;
                    case "removeClass":
                      g = [b, s, f];
                      break;
                    default:
                      g = [b, f];
                  }
                  g.push(e);
                  var h = a.apply(a, g);
                  if (h)
                    if ((W(h.start) && (h = h.start()), h instanceof c))
                      h.done(f);
                    else if (W(h)) return h;
                  return M;
                }
                function k(a, b, d, e, f) {
                  var g = [];
                  return (
                    Q(e, function(e) {
                      var h = e[f];
                      h &&
                        g.push(function() {
                          var e,
                            f,
                            g = !1,
                            i = function(a) {
                              g || ((g = !0), (f || M)(a), e.complete(!a));
                            };
                          return (
                            (e = new c({
                              end: function() {
                                i();
                              },
                              cancel: function() {
                                i(!0);
                              }
                            })),
                            (f = j(h, a, b, d, function(a) {
                              var b = a === !1;
                              i(b);
                            })),
                            e
                          );
                        });
                    }),
                    g
                  );
                }
                function l(a, b, d, e, f) {
                  var g = k(a, b, d, e, f);
                  if (0 === g.length) {
                    var h, i;
                    "beforeSetClass" === f
                      ? ((h = k(a, "removeClass", d, e, "beforeRemoveClass")),
                        (i = k(a, "addClass", d, e, "beforeAddClass")))
                      : "setClass" === f &&
                        ((h = k(a, "removeClass", d, e, "removeClass")),
                        (i = k(a, "addClass", d, e, "addClass"))),
                      h && (g = g.concat(h)),
                      i && (g = g.concat(i));
                  }
                  if (0 !== g.length)
                    return function(a) {
                      var b = [];
                      return (
                        g.length &&
                          Q(g, function(a) {
                            b.push(a());
                          }),
                        b.length ? c.all(b, a) : a(),
                        function(a) {
                          Q(b, function(b) {
                            a ? b.cancel() : b.end();
                          });
                        }
                      );
                    };
                }
                var m = !1;
                3 === arguments.length && T(d) && ((g = d), (d = null)),
                  (g = n(g)),
                  d ||
                    ((d = a.attr("class") || ""),
                    g.addClass && (d += " " + g.addClass),
                    g.removeClass && (d += " " + g.removeClass));
                var p,
                  q,
                  r = g.addClass,
                  s = g.removeClass,
                  t = e(d);
                if (t.length) {
                  var u, v;
                  "leave" == b
                    ? ((v = "leave"), (u = "afterLeave"))
                    : ((v = "before" + b.charAt(0).toUpperCase() + b.substr(1)),
                      (u = b)),
                    "enter" !== b && "move" !== b && (p = l(a, b, g, t, v)),
                    (q = l(a, b, g, t, u));
                }
                if (p || q) {
                  var w;
                  return {
                    $$willAnimate: !0,
                    end: function() {
                      return (
                        w ? w.end() : (i(), (w = new c()), w.complete(!0)), w
                      );
                    },
                    start: function() {
                      function a(a) {
                        i(a), w.complete(a);
                      }
                      function b(b) {
                        m || ((d || M)(b), a(b));
                      }
                      if (w) return w;
                      w = new c();
                      var d,
                        e = [];
                      return (
                        p &&
                          e.push(function(a) {
                            d = p(a);
                          }),
                        e.length
                          ? e.push(function(a) {
                              h(), a(!0);
                            })
                          : h(),
                        q &&
                          e.push(function(a) {
                            d = q(a);
                          }),
                        w.setHost({
                          end: function() {
                            b();
                          },
                          cancel: function() {
                            b(!0);
                          }
                        }),
                        c.chain(e, a),
                        w
                      );
                    }
                  };
                }
              };
            }
          ];
        }
      ],
      Ca = [
        "$$animationProvider",
        function(a) {
          a.drivers.push("$$animateJsDriver"),
            (this.$get = [
              "$$animateJs",
              "$$AnimateRunner",
              function(a, b) {
                function c(b) {
                  var c = b.element,
                    d = b.event,
                    e = b.options,
                    f = b.classes;
                  return a(c, d, f, e);
                }
                return function(a) {
                  if (a.from && a.to) {
                    var d = c(a.from),
                      e = c(a.to);
                    if (!d && !e) return;
                    return {
                      start: function() {
                        function a() {
                          return function() {
                            Q(f, function(a) {
                              a.end();
                            });
                          };
                        }
                        function c(a) {
                          g.complete(a);
                        }
                        var f = [];
                        d && f.push(d.start()),
                          e && f.push(e.start()),
                          b.all(f, c);
                        var g = new b({ end: a(), cancel: a() });
                        return g;
                      }
                    };
                  }
                  return c(a);
                };
              }
            ]);
        }
      ],
      Da = "data-ng-animate",
      Ea = "$ngAnimatePin",
      Fa = [
        "$animateProvider",
        function(a) {
          function b(a) {
            if (!a) return null;
            var b = a.split(k),
              c = Object.create(null);
            return (
              Q(b, function(a) {
                c[a] = !0;
              }),
              c
            );
          }
          function c(a, c) {
            if (a && c) {
              var d = b(c);
              return a.split(k).some(function(a) {
                return d[a];
              });
            }
          }
          function e(a, b, c, d) {
            return l[a].some(function(a) {
              return a(b, c, d);
            });
          }
          function f(a, b) {
            var c = (a.addClass || "").length > 0,
              d = (a.removeClass || "").length > 0;
            return b ? c && d : c || d;
          }
          var g = 1,
            h = 2,
            k = " ",
            l = (this.rules = { skip: [], cancel: [], join: [] });
          l.join.push(function(a, b, c) {
            return !b.structural && f(b);
          }),
            l.skip.push(function(a, b, c) {
              return !b.structural && !f(b);
            }),
            l.skip.push(function(a, b, c) {
              return "leave" == c.event && b.structural;
            }),
            l.skip.push(function(a, b, c) {
              return c.structural && c.state === h && !b.structural;
            }),
            l.cancel.push(function(a, b, c) {
              return c.structural && b.structural;
            }),
            l.cancel.push(function(a, b, c) {
              return c.state === h && b.structural;
            }),
            l.cancel.push(function(a, b, d) {
              if (d.structural) return !1;
              var e = b.addClass,
                f = b.removeClass,
                g = d.addClass,
                h = d.removeClass;
              return (U(e) && U(f)) || (U(g) && U(h)) ? !1 : c(e, h) || c(f, g);
            }),
            (this.$get = [
              "$$rAF",
              "$rootScope",
              "$rootElement",
              "$document",
              "$$HashMap",
              "$$animation",
              "$$AnimateRunner",
              "$templateRequest",
              "$$jqLite",
              "$$forceReflow",
              function(b, c, k, l, p, q, s, w, x, y) {
                function z() {
                  var a = !1;
                  return function(b) {
                    a
                      ? b()
                      : c.$$postDigest(function() {
                          (a = !0), b();
                        });
                  };
                }
                function A(a, b) {
                  return r(a, b, {});
                }
                function B(a, b, c) {
                  var d = t(b),
                    e = t(a),
                    f = [],
                    g = M[c];
                  return (
                    g &&
                      Q(g, function(a) {
                        _.call(a.node, d)
                          ? f.push(a.callback)
                          : "leave" === c &&
                            _.call(a.node, e) &&
                            f.push(a.callback);
                      }),
                    f
                  );
                }
                function C(a, d, j) {
                  function k(c, d, e, f) {
                    C(function() {
                      var c = B(w, a, d);
                      c.length &&
                        b(function() {
                          Q(c, function(b) {
                            b(a, e, f);
                          });
                        });
                    }),
                      c.progress(d, e, f);
                  }
                  function m(b) {
                    v(a, x), $(a, x), o(a, x), x.domOperation(), y.complete(!b);
                  }
                  var p,
                    w,
                    x = N(j);
                  (a = i(a)), a && ((p = t(a)), (w = a.parent())), (x = n(x));
                  var y = new s(),
                    C = z();
                  if (
                    (R(x.addClass) && (x.addClass = x.addClass.join(" ")),
                    x.addClass && !S(x.addClass) && (x.addClass = null),
                    R(x.removeClass) &&
                      (x.removeClass = x.removeClass.join(" ")),
                    x.removeClass &&
                      !S(x.removeClass) &&
                      (x.removeClass = null),
                    x.from && !T(x.from) && (x.from = null),
                    x.to && !T(x.to) && (x.to = null),
                    !p)
                  )
                    return m(), y;
                  var F = [p.className, x.addClass, x.removeClass].join(" ");
                  if (!Z(F)) return m(), y;
                  var L = ["enter", "move", "leave"].indexOf(d) >= 0,
                    M = !K || l[0].hidden || J.get(p),
                    O = (!M && I.get(p)) || {},
                    P = !!O.state;
                  if ((M || (P && O.state == g) || (M = !G(a, w, d)), M))
                    return m(), y;
                  L && D(a);
                  var U = {
                    structural: L,
                    element: a,
                    event: d,
                    addClass: x.addClass,
                    removeClass: x.removeClass,
                    close: m,
                    options: x,
                    runner: y
                  };
                  if (P) {
                    var V = e("skip", a, U, O);
                    if (V)
                      return O.state === h ? (m(), y) : (r(a, O, U), O.runner);
                    var W = e("cancel", a, U, O);
                    if (W)
                      if (O.state === h) O.runner.end();
                      else {
                        if (!O.structural) return r(a, O, U), O.runner;
                        O.close();
                      }
                    else {
                      var X = e("join", a, U, O);
                      if (X) {
                        if (O.state !== h)
                          return (
                            u(a, L ? d : null, x),
                            (d = U.event = O.event),
                            (x = r(a, O, U)),
                            O.runner
                          );
                        A(a, U);
                      }
                    }
                  } else A(a, U);
                  var Y = U.structural;
                  if (
                    (Y ||
                      (Y =
                        ("animate" === U.event &&
                          Object.keys(U.options.to || {}).length > 0) ||
                        f(U)),
                    !Y)
                  )
                    return m(), E(a), y;
                  var _ = (O.counter || 0) + 1;
                  return (
                    (U.counter = _),
                    H(a, g, U),
                    c.$$postDigest(function() {
                      var b = I.get(p),
                        c = !b;
                      b = b || {};
                      var e = a.parent() || [],
                        g =
                          e.length > 0 &&
                          ("animate" === b.event || b.structural || f(b));
                      if (c || b.counter !== _ || !g)
                        return (
                          c && ($(a, x), o(a, x)),
                          (c || (L && b.event !== d)) &&
                            (x.domOperation(), y.end()),
                          void (g || E(a))
                        );
                      (d = !b.structural && f(b, !0) ? "setClass" : b.event),
                        H(a, h);
                      var i = q(a, d, b.options);
                      i.done(function(b) {
                        m(!b);
                        var c = I.get(p);
                        c && c.counter === _ && E(t(a)), k(y, d, "close", {});
                      }),
                        y.setHost(i),
                        k(y, d, "start", {});
                    }),
                    y
                  );
                }
                function D(a) {
                  var b = t(a),
                    c = b.querySelectorAll("[" + Da + "]");
                  Q(c, function(a) {
                    var b = parseInt(a.getAttribute(Da)),
                      c = I.get(a);
                    if (c)
                      switch (b) {
                        case h:
                          c.runner.end();
                        case g:
                          I.remove(a);
                      }
                  });
                }
                function E(a) {
                  var b = t(a);
                  b.removeAttribute(Da), I.remove(b);
                }
                function F(a, b) {
                  return t(a) === t(b);
                }
                function G(a, b, c) {
                  var d,
                    e = P(l[0].body),
                    f = F(a, e) || "HTML" === a[0].nodeName,
                    g = F(a, k),
                    h = !1,
                    i = J.get(t(a)),
                    j = P.data(a[0], Ea);
                  for (
                    j && (b = j), b = t(b);
                    b && (g || (g = F(b, k)), b.nodeType === Y);

                  ) {
                    var m = I.get(b) || {};
                    if (!h) {
                      var n = J.get(b);
                      if (n === !0 && i !== !1) {
                        i = !0;
                        break;
                      }
                      n === !1 && (i = !1), (h = m.structural);
                    }
                    if (U(d) || d === !0) {
                      var o = P.data(b, da);
                      V(o) && (d = o);
                    }
                    if (h && d === !1) break;
                    if ((f || (f = F(b, e)), f && g)) break;
                    b = g || !(j = P.data(b, Ea)) ? b.parentNode : t(j);
                  }
                  var p = (!h || d) && i !== !0;
                  return p && g && f;
                }
                function H(a, b, c) {
                  (c = c || {}), (c.state = b);
                  var d = t(a);
                  d.setAttribute(Da, b);
                  var e = I.get(d),
                    f = e ? O(e, c) : c;
                  I.put(d, f);
                }
                var I = new p(),
                  J = new p(),
                  K = null,
                  L = c.$watch(
                    function() {
                      return 0 === w.totalPendingRequests;
                    },
                    function(a) {
                      a &&
                        (L(),
                        c.$$postDigest(function() {
                          c.$$postDigest(function() {
                            null === K && (K = !0);
                          });
                        }));
                    }
                  ),
                  M = {},
                  W = a.classNameFilter(),
                  Z = W
                    ? function(a) {
                        return W.test(a);
                      }
                    : function() {
                        return !0;
                      },
                  $ = m(x),
                  _ =
                    Node.prototype.contains ||
                    function(a) {
                      return (
                        this === a || !!(16 & this.compareDocumentPosition(a))
                      );
                    },
                  aa = {
                    on: function(a, b, c) {
                      var d = j(b);
                      (M[a] = M[a] || []),
                        M[a].push({ node: d, callback: c }),
                        P(b).on("$destroy", function() {
                          aa.off(a, b, c);
                        });
                    },
                    off: function(a, b, c) {
                      function d(a, b, c) {
                        var d = j(b);
                        return a.filter(function(a) {
                          var b = a.node === d && (!c || a.callback === c);
                          return !b;
                        });
                      }
                      var e = M[a];
                      e && (M[a] = 1 === arguments.length ? null : d(e, b, c));
                    },
                    pin: function(a, b) {
                      d(X(a), "element", "not an element"),
                        d(X(b), "parentElement", "not an element"),
                        a.data(Ea, b);
                    },
                    push: function(a, b, c, d) {
                      return (c = c || {}), (c.domOperation = d), C(a, b, c);
                    },
                    enabled: function(a, b) {
                      var c = arguments.length;
                      if (0 === c) b = !!K;
                      else {
                        var d = X(a);
                        if (d) {
                          var e = t(a),
                            f = J.get(e);
                          1 === c ? (b = !f) : J.put(e, !b);
                        } else b = K = !!a;
                      }
                      return b;
                    }
                  };
                return aa;
              }
            ]);
        }
      ],
      Ga = [
        "$animateProvider",
        function(a) {
          function b(a, b) {
            a.data(h, b);
          }
          function c(a) {
            a.removeData(h);
          }
          function d(a) {
            return a.data(h);
          }
          var f = "ng-animate-ref",
            g = (this.drivers = []),
            h = "$$animationRunner";
          this.$get = [
            "$$jqLite",
            "$rootScope",
            "$injector",
            "$$AnimateRunner",
            "$$HashMap",
            "$$rAFScheduler",
            function(a, h, i, j, k, l) {
              function p(a) {
                function b(a) {
                  if (a.processed) return a;
                  a.processed = !0;
                  var c = a.domNode,
                    d = c.parentNode;
                  f.put(c, a);
                  for (var g; d; ) {
                    if ((g = f.get(d))) {
                      g.processed || (g = b(g));
                      break;
                    }
                    d = d.parentNode;
                  }
                  return (g || e).children.push(a), a;
                }
                function c(a) {
                  var b,
                    c = [],
                    d = [];
                  for (b = 0; b < a.children.length; b++) d.push(a.children[b]);
                  var e = d.length,
                    f = 0,
                    g = [];
                  for (b = 0; b < d.length; b++) {
                    var h = d[b];
                    0 >= e && ((e = f), (f = 0), c.push(g), (g = [])),
                      g.push(h.fn),
                      h.children.forEach(function(a) {
                        f++, d.push(a);
                      }),
                      e--;
                  }
                  return g.length && c.push(g), c;
                }
                var d,
                  e = { children: [] },
                  f = new k();
                for (d = 0; d < a.length; d++) {
                  var g = a[d];
                  f.put(
                    g.domNode,
                    (a[d] = { domNode: g.domNode, fn: g.fn, children: [] })
                  );
                }
                for (d = 0; d < a.length; d++) b(a[d]);
                return c(e);
              }
              var q = [],
                r = m(a);
              return function(k, m, s) {
                function u(a) {
                  var b = "[" + f + "]",
                    c = a.hasAttribute(f) ? [a] : a.querySelectorAll(b),
                    d = [];
                  return (
                    Q(c, function(a) {
                      var b = a.getAttribute(f);
                      b && b.length && d.push(a);
                    }),
                    d
                  );
                }
                function v(a) {
                  var b = [],
                    c = {};
                  Q(a, function(a, d) {
                    var e = a.element,
                      g = t(e),
                      h = a.event,
                      i = ["enter", "move"].indexOf(h) >= 0,
                      j = a.structural ? u(g) : [];
                    if (j.length) {
                      var k = i ? "to" : "from";
                      Q(j, function(a) {
                        var b = a.getAttribute(f);
                        (c[b] = c[b] || {}),
                          (c[b][k] = { animationID: d, element: P(a) });
                      });
                    } else b.push(a);
                  });
                  var d = {},
                    e = {};
                  return (
                    Q(c, function(c, f) {
                      var g = c.from,
                        h = c.to;
                      if (!g || !h) {
                        var i = g ? g.animationID : h.animationID,
                          j = i.toString();
                        return void (d[j] || ((d[j] = !0), b.push(a[i])));
                      }
                      var k = a[g.animationID],
                        l = a[h.animationID],
                        m = g.animationID.toString();
                      if (!e[m]) {
                        var n = (e[m] = {
                          structural: !0,
                          beforeStart: function() {
                            k.beforeStart(), l.beforeStart();
                          },
                          close: function() {
                            k.close(), l.close();
                          },
                          classes: w(k.classes, l.classes),
                          from: k,
                          to: l,
                          anchors: []
                        });
                        n.classes.length ? b.push(n) : (b.push(k), b.push(l));
                      }
                      e[m].anchors.push({ out: g.element, in: h.element });
                    }),
                    b
                  );
                }
                function w(a, b) {
                  (a = a.split(" ")), (b = b.split(" "));
                  for (var c = [], d = 0; d < a.length; d++) {
                    var e = a[d];
                    if ("ng-" !== e.substring(0, 3))
                      for (var f = 0; f < b.length; f++)
                        if (e === b[f]) {
                          c.push(e);
                          break;
                        }
                  }
                  return c.join(" ");
                }
                function x(a) {
                  for (var b = g.length - 1; b >= 0; b--) {
                    var c = g[b];
                    if (i.has(c)) {
                      var d = i.get(c),
                        e = d(a);
                      if (e) return e;
                    }
                  }
                }
                function y() {
                  k.addClass(ca),
                    F && a.addClass(k, F),
                    G && (a.removeClass(k, G), (G = null));
                }
                function z(a, b) {
                  function c(a) {
                    d(a).setHost(b);
                  }
                  a.from && a.to
                    ? (c(a.from.element), c(a.to.element))
                    : c(a.element);
                }
                function A() {
                  var a = d(k);
                  !a || ("leave" === m && s.$$domOperationFired) || a.end();
                }
                function B(b) {
                  k.off("$destroy", A),
                    c(k),
                    r(k, s),
                    o(k, s),
                    s.domOperation(),
                    F && a.removeClass(k, F),
                    k.removeClass(ca),
                    D.complete(!b);
                }
                s = n(s);
                var C = ["enter", "move", "leave"].indexOf(m) >= 0,
                  D = new j({
                    end: function() {
                      B();
                    },
                    cancel: function() {
                      B(!0);
                    }
                  });
                if (!g.length) return B(), D;
                b(k, D);
                var E = e(k.attr("class"), e(s.addClass, s.removeClass)),
                  F = s.tempClasses;
                F && ((E += " " + F), (s.tempClasses = null));
                var G;
                return (
                  C && ((G = "ng-" + m + ba), a.addClass(k, G)),
                  q.push({
                    element: k,
                    classes: E,
                    event: m,
                    structural: C,
                    options: s,
                    beforeStart: y,
                    close: B
                  }),
                  k.on("$destroy", A),
                  q.length > 1
                    ? D
                    : (h.$$postDigest(function() {
                        var a = [];
                        Q(q, function(b) {
                          d(b.element) ? a.push(b) : b.close();
                        }),
                          (q.length = 0);
                        var b = v(a),
                          c = [];
                        Q(b, function(a) {
                          c.push({
                            domNode: t(a.from ? a.from.element : a.element),
                            fn: function() {
                              a.beforeStart();
                              var b,
                                c = a.close,
                                e = a.anchors
                                  ? a.from.element || a.to.element
                                  : a.element;
                              if (d(e)) {
                                var f = x(a);
                                f && (b = f.start);
                              }
                              if (b) {
                                var g = b();
                                g.done(function(a) {
                                  c(!a);
                                }),
                                  z(a, g);
                              } else c();
                            }
                          });
                        }),
                          l(p(c));
                      }),
                      D)
                );
              };
            }
          ];
        }
      ],
      Ha = [
        "$animate",
        "$rootScope",
        function(a, b) {
          return {
            restrict: "A",
            transclude: "element",
            terminal: !0,
            priority: 600,
            link: function(b, c, d, e, f) {
              var g, h;
              b.$watchCollection(d.ngAnimateSwap || d["for"], function(d) {
                g && a.leave(g),
                  h && (h.$destroy(), (h = null)),
                  (d || 0 === d) &&
                    ((h = b.$new()),
                    f(h, function(b) {
                      (g = b), a.enter(b, null, c);
                    }));
              });
            }
          };
        }
      ];
    b.module("ngAnimate", [])
      .directive("ngAnimateSwap", Ha)
      .directive("ngAnimateChildren", sa)
      .factory("$$rAFScheduler", ra)
      .provider("$$animateQueue", Fa)
      .provider("$$animation", Ga)
      .provider("$animateCss", za)
      .provider("$$animateCssDriver", Aa)
      .provider("$$animateJs", Ba)
      .provider("$$animateJsDriver", Ca);
  })(window, window.angular),
  (function(a, b, c) {
    "use strict";
    function d(a) {
      return null != a && "" !== a && "hasOwnProperty" !== a && h.test("." + a);
    }
    function e(a, e) {
      if (!d(e))
        throw g("badmember", 'Dotted member path "@{0}" is invalid.', e);
      for (
        var f = e.split("."), h = 0, i = f.length;
        i > h && b.isDefined(a);
        h++
      ) {
        var j = f[h];
        a = null !== a ? a[j] : c;
      }
      return a;
    }
    function f(a, c) {
      (c = c || {}),
        b.forEach(c, function(a, b) {
          delete c[b];
        });
      for (var d in a)
        !a.hasOwnProperty(d) ||
          ("$" === d.charAt(0) && "$" === d.charAt(1)) ||
          (c[d] = a[d]);
      return c;
    }
    var g = b.$$minErr("$resource"),
      h = /^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;
    b.module("ngResource", ["ng"]).provider("$resource", function() {
      var a = /^https?:\/\/[^\/]*/,
        d = this;
      (this.defaults = {
        stripTrailingSlashes: !0,
        actions: {
          get: { method: "GET" },
          save: { method: "POST" },
          query: { method: "GET", isArray: !0 },
          remove: { method: "DELETE" },
          delete: { method: "DELETE" }
        }
      }),
        (this.$get = [
          "$http",
          "$log",
          "$q",
          "$timeout",
          function(h, i, j, k) {
            function l(a) {
              return m(a, !0)
                .replace(/%26/gi, "&")
                .replace(/%3D/gi, "=")
                .replace(/%2B/gi, "+");
            }
            function m(a, b) {
              return encodeURIComponent(a)
                .replace(/%40/gi, "@")
                .replace(/%3A/gi, ":")
                .replace(/%24/g, "$")
                .replace(/%2C/gi, ",")
                .replace(/%20/g, b ? "%20" : "+");
            }
            function n(a, b) {
              (this.template = a),
                (this.defaults = r({}, d.defaults, b)),
                (this.urlParams = {});
            }
            function o(a, l, m, u) {
              function v(a, b) {
                var c = {};
                return (
                  (b = r({}, l, b)),
                  q(b, function(b, d) {
                    t(b) && (b = b()),
                      (c[d] =
                        b && b.charAt && "@" == b.charAt(0)
                          ? e(a, b.substr(1))
                          : b);
                  }),
                  c
                );
              }
              function w(a) {
                return a.resource;
              }
              function x(a) {
                f(a || {}, this);
              }
              var y = new n(a, u);
              return (
                (m = r({}, d.defaults.actions, m)),
                (x.prototype.toJSON = function() {
                  var a = r({}, this);
                  return delete a.$promise, delete a.$resolved, a;
                }),
                q(m, function(a, e) {
                  var l = /^(POST|PUT|PATCH)$/i.test(a.method),
                    m = a.timeout,
                    n = b.isDefined(a.cancellable)
                      ? a.cancellable
                      : u && b.isDefined(u.cancellable)
                      ? u.cancellable
                      : d.defaults.cancellable;
                  m &&
                    !b.isNumber(m) &&
                    (i.debug(
                      "ngResource:\n  Only numeric values are allowed as `timeout`.\n  Promises are not supported in $resource, because the same value would be used for multiple requests. If you are looking for a way to cancel requests, you should use the `cancellable` option."
                    ),
                    delete a.timeout,
                    (m = null)),
                    (x[e] = function(d, i, o, u) {
                      var z,
                        A,
                        B,
                        C = {};
                      switch (arguments.length) {
                        case 4:
                          (B = u), (A = o);
                        case 3:
                        case 2:
                          if (!t(i)) {
                            (C = d), (z = i), (A = o);
                            break;
                          }
                          if (t(d)) {
                            (A = d), (B = i);
                            break;
                          }
                          (A = i), (B = o);
                        case 1:
                          t(d) ? (A = d) : l ? (z = d) : (C = d);
                          break;
                        case 0:
                          break;
                        default:
                          throw g(
                            "badargs",
                            "Expected up to 4 arguments [params, data, success, error], got {0} arguments",
                            arguments.length
                          );
                      }
                      var D,
                        E,
                        F = this instanceof x,
                        G = F ? z : a.isArray ? [] : new x(z),
                        H = {},
                        I = (a.interceptor && a.interceptor.response) || w,
                        J = (a.interceptor && a.interceptor.responseError) || c;
                      q(a, function(a, b) {
                        switch (b) {
                          default:
                            H[b] = s(a);
                            break;
                          case "params":
                          case "isArray":
                          case "interceptor":
                          case "cancellable":
                        }
                      }),
                        !F &&
                          n &&
                          ((D = j.defer()),
                          (H.timeout = D.promise),
                          m && (E = k(D.resolve, m))),
                        l && (H.data = z),
                        y.setUrlParams(
                          H,
                          r({}, v(z, a.params || {}), C),
                          a.url
                        );
                      var K = h(H).then(
                        function(c) {
                          var d = c.data;
                          if (d) {
                            if (b.isArray(d) !== !!a.isArray)
                              throw g(
                                "badcfg",
                                "Error in resource configuration for action `{0}`. Expected response to contain an {1} but got an {2} (Request: {3} {4})",
                                e,
                                a.isArray ? "array" : "object",
                                b.isArray(d) ? "array" : "object",
                                H.method,
                                H.url
                              );
                            if (a.isArray)
                              (G.length = 0),
                                q(d, function(a) {
                                  "object" == typeof a
                                    ? G.push(new x(a))
                                    : G.push(a);
                                });
                            else {
                              var h = G.$promise;
                              f(d, G), (G.$promise = h);
                            }
                          }
                          return (c.resource = G), c;
                        },
                        function(a) {
                          return (B || p)(a), j.reject(a);
                        }
                      );
                      return (
                        K["finally"](function() {
                          (G.$resolved = !0),
                            !F &&
                              n &&
                              ((G.$cancelRequest = b.noop),
                              k.cancel(E),
                              (D = E = H.timeout = null));
                        }),
                        (K = K.then(function(a) {
                          var b = I(a);
                          return (A || p)(b, a.headers), b;
                        }, J)),
                        F
                          ? K
                          : ((G.$promise = K),
                            (G.$resolved = !1),
                            n && (G.$cancelRequest = D.resolve),
                            G)
                      );
                    }),
                    (x.prototype["$" + e] = function(a, b, c) {
                      t(a) && ((c = b), (b = a), (a = {}));
                      var d = x[e].call(this, a, this, b, c);
                      return d.$promise || d;
                    });
                }),
                (x.bind = function(b) {
                  return o(a, r({}, l, b), m);
                }),
                x
              );
            }
            var p = b.noop,
              q = b.forEach,
              r = b.extend,
              s = b.copy,
              t = b.isFunction;
            return (
              (n.prototype = {
                setUrlParams: function(c, d, e) {
                  var f,
                    h,
                    i = this,
                    j = e || i.template,
                    k = "",
                    n = (i.urlParams = {});
                  q(j.split(/\W/), function(a) {
                    if ("hasOwnProperty" === a)
                      throw g(
                        "badname",
                        "hasOwnProperty is not a valid parameter name."
                      );
                    !new RegExp("^\\d+$").test(a) &&
                      a &&
                      new RegExp("(^|[^\\\\]):" + a + "(\\W|$)").test(j) &&
                      (n[a] = {
                        isQueryParamValue: new RegExp(
                          "\\?.*=:" + a + "(?:\\W|$)"
                        ).test(j)
                      });
                  }),
                    (j = j.replace(/\\:/g, ":")),
                    (j = j.replace(a, function(a) {
                      return (k = a), "";
                    })),
                    (d = d || {}),
                    q(i.urlParams, function(a, c) {
                      (f = d.hasOwnProperty(c) ? d[c] : i.defaults[c]),
                        b.isDefined(f) && null !== f
                          ? ((h = a.isQueryParamValue ? m(f, !0) : l(f)),
                            (j = j.replace(
                              new RegExp(":" + c + "(\\W|$)", "g"),
                              function(a, b) {
                                return h + b;
                              }
                            )))
                          : (j = j.replace(
                              new RegExp("(/?):" + c + "(\\W|$)", "g"),
                              function(a, b, c) {
                                return "/" == c.charAt(0) ? c : b + c;
                              }
                            ));
                    }),
                    i.defaults.stripTrailingSlashes &&
                      (j = j.replace(/\/+$/, "") || "/"),
                    (j = j.replace(/\/\.(?=\w+($|\?))/, ".")),
                    (c.url = k + j.replace(/\/\\\./, "/.")),
                    q(d, function(a, b) {
                      i.urlParams[b] ||
                        ((c.params = c.params || {}), (c.params[b] = a));
                    });
                }
              }),
              o
            );
          }
        ]);
    });
  })(window, window.angular),
  (function(a, b, c) {
    "use strict";
    function d() {
      var a = !1;
      (this.$get = [
        "$$sanitizeUri",
        function(c) {
          return (
            a && b.extend(x, v),
            function(a) {
              var b = [];
              return (
                g(
                  a,
                  j(b, function(a, b) {
                    return !/^unsafe:/.test(c(a, b));
                  })
                ),
                b.join("")
              );
            }
          );
        }
      ]),
        (this.enableSvg = function(c) {
          return b.isDefined(c) ? ((a = c), this) : a;
        });
    }
    function e(a) {
      var c = [],
        d = j(c, b.noop);
      return d.chars(a), c.join("");
    }
    function f(a, c) {
      var d,
        e = {},
        f = a.split(",");
      for (d = 0; d < f.length; d++) e[c ? b.lowercase(f[d]) : f[d]] = !0;
      return e;
    }
    function g(a, b) {
      null === a || a === c ? (a = "") : "string" != typeof a && (a = "" + a),
        (l.innerHTML = a);
      var d = 5;
      do {
        if (0 === d)
          throw m(
            "uinput",
            "Failed to sanitize html because the input is unstable"
          );
        d--,
          document.documentMode <= 11 && k(l),
          (a = l.innerHTML),
          (l.innerHTML = a);
      } while (a !== l.innerHTML);
      for (var e = l.firstChild; e; ) {
        switch (e.nodeType) {
          case 1:
            b.start(e.nodeName.toLowerCase(), h(e.attributes));
            break;
          case 3:
            b.chars(e.textContent);
        }
        var f;
        if (
          !(f = e.firstChild) &&
          (1 == e.nodeType && b.end(e.nodeName.toLowerCase()),
          (f = e.nextSibling),
          !f)
        )
          for (; null == f && ((e = e.parentNode), e !== l); )
            (f = e.nextSibling),
              1 == e.nodeType && b.end(e.nodeName.toLowerCase());
        e = f;
      }
      for (; (e = l.firstChild); ) l.removeChild(e);
    }
    function h(a) {
      for (var b = {}, c = 0, d = a.length; d > c; c++) {
        var e = a[c];
        b[e.name] = e.value;
      }
      return b;
    }
    function i(a) {
      return a
        .replace(/&/g, "&amp;")
        .replace(n, function(a) {
          var b = a.charCodeAt(0),
            c = a.charCodeAt(1);
          return "&#" + (1024 * (b - 55296) + (c - 56320) + 65536) + ";";
        })
        .replace(o, function(a) {
          return "&#" + a.charCodeAt(0) + ";";
        })
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    }
    function j(a, c) {
      var d = !1,
        e = b.bind(a, a.push);
      return {
        start: function(a, f) {
          (a = b.lowercase(a)),
            !d && w[a] && (d = a),
            d ||
              x[a] !== !0 ||
              (e("<"),
              e(a),
              b.forEach(f, function(d, f) {
                var g = b.lowercase(f),
                  h = ("img" === a && "src" === g) || "background" === g;
                B[g] !== !0 ||
                  (y[g] === !0 && !c(d, h)) ||
                  (e(" "), e(f), e('="'), e(i(d)), e('"'));
              }),
              e(">"));
        },
        end: function(a) {
          (a = b.lowercase(a)),
            d || x[a] !== !0 || p[a] === !0 || (e("</"), e(a), e(">")),
            a == d && (d = !1);
        },
        chars: function(a) {
          d || e(i(a));
        }
      };
    }
    function k(a) {
      if (a.nodeType === Node.ELEMENT_NODE)
        for (var b = a.attributes, c = 0, d = b.length; d > c; c++) {
          var e = b[c],
            f = e.name.toLowerCase();
          ("xmlns:ns1" === f || 0 === f.indexOf("ns1:")) &&
            (a.removeAttributeNode(e), c--, d--);
        }
      var g = a.firstChild;
      g && k(g), (g = a.nextSibling), g && k(g);
    }
    var l,
      m = b.$$minErr("$sanitize"),
      n = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      o = /([^\#-~ |!])/g,
      p = f("area,br,col,hr,img,wbr"),
      q = f("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
      r = f("rp,rt"),
      s = b.extend({}, r, q),
      t = b.extend(
        {},
        q,
        f(
          "address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul"
        )
      ),
      u = b.extend(
        {},
        r,
        f(
          "a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"
        )
      ),
      v = f(
        "circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"
      ),
      w = f("script,style"),
      x = b.extend({}, p, t, u, s),
      y = f("background,cite,href,longdesc,src,xlink:href"),
      z = f(
        "abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"
      ),
      A = f(
        "accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
        !0
      ),
      B = b.extend({}, y, A, z);
    !(function(a) {
      var b;
      if (!a.document || !a.document.implementation)
        throw m("noinert", "Can't create an inert html document");
      b = a.document.implementation.createHTMLDocument("inert");
      var c = b.documentElement || b.getDocumentElement(),
        d = c.getElementsByTagName("body");
      if (1 === d.length) l = d[0];
      else {
        var e = b.createElement("html");
        (l = b.createElement("body")), e.appendChild(l), b.appendChild(e);
      }
    })(a),
      b.module("ngSanitize", []).provider("$sanitize", d),
      b.module("ngSanitize").filter("linky", [
        "$sanitize",
        function(a) {
          var c = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
            d = /^mailto:/i,
            f = b.$$minErr("linky"),
            g = b.isString;
          return function(h, i, j) {
            function k(a) {
              a && q.push(e(a));
            }
            function l(a, c) {
              var d;
              if ((q.push("<a "), b.isFunction(j) && (j = j(a)), b.isObject(j)))
                for (d in j) q.push(d + '="' + j[d] + '" ');
              else j = {};
              !b.isDefined(i) || "target" in j || q.push('target="', i, '" '),
                q.push('href="', a.replace(/"/g, "&quot;"), '">'),
                k(c),
                q.push("</a>");
            }
            if (null == h || "" === h) return h;
            if (!g(h))
              throw f("notstring", "Expected string but received: {0}", h);
            for (var m, n, o, p = h, q = []; (m = p.match(c)); )
              (n = m[0]),
                m[2] || m[4] || (n = (m[3] ? "http://" : "mailto:") + n),
                (o = m.index),
                k(p.substr(0, o)),
                l(n, m[0].replace(d, "")),
                (p = p.substring(o + m[0].length));
            return k(p), a(q.join(""));
          };
        }
      ]);
  })(window, window.angular),
  (function(a, b, c) {
    "use strict";
    function d(a) {
      return b.lowercase(a.nodeName || (a[0] && a[0].nodeName));
    }
    function e(a, c) {
      var d = !1,
        e = !1;
      (this.ngClickOverrideEnabled = function(f) {
        return b.isDefined(f)
          ? (f &&
              !e &&
              ((e = !0),
              (h.$$moduleName = "ngTouch"),
              c.directive("ngClick", h),
              a.decorator("ngClickDirective", [
                "$delegate",
                function(a) {
                  if (d) a.shift();
                  else
                    for (var b = a.length - 1; b >= 0; ) {
                      if ("ngTouch" === a[b].$$moduleName) {
                        a.splice(b, 1);
                        break;
                      }
                      b--;
                    }
                  return a;
                }
              ])),
            (d = f),
            this)
          : d;
      }),
        (this.$get = function() {
          return {
            ngClickOverrideEnabled: function() {
              return d;
            }
          };
        });
    }
    function f(a, c, d) {
      g.directive(a, [
        "$parse",
        "$swipe",
        function(e, f) {
          var g = 75,
            h = 0.3,
            i = 30;
          return function(j, k, l) {
            function m(a) {
              if (!n) return !1;
              var b = Math.abs(a.y - n.y),
                d = (a.x - n.x) * c;
              return o && g > b && d > 0 && d > i && h > b / d;
            }
            var n,
              o,
              p = e(l[a]),
              q = ["touch"];
            b.isDefined(l.ngSwipeDisableMouse) || q.push("mouse"),
              f.bind(
                k,
                {
                  start: function(a, b) {
                    (n = a), (o = !0);
                  },
                  cancel: function(a) {
                    o = !1;
                  },
                  end: function(a, b) {
                    m(a) &&
                      j.$apply(function() {
                        k.triggerHandler(d), p(j, { $event: b });
                      });
                  }
                },
                q
              );
          };
        }
      ]);
    }
    var g = b.module("ngTouch", []);
    g.provider("$touch", e),
      (e.$inject = ["$provide", "$compileProvider"]),
      g.factory("$swipe", [
        function() {
          function a(a) {
            var b = a.originalEvent || a,
              c = b.touches && b.touches.length ? b.touches : [b],
              d = (b.changedTouches && b.changedTouches[0]) || c[0];
            return { x: d.clientX, y: d.clientY };
          }
          function c(a, c) {
            var d = [];
            return (
              b.forEach(a, function(a) {
                var b = e[a][c];
                b && d.push(b);
              }),
              d.join(" ")
            );
          }
          var d = 10,
            e = {
              mouse: { start: "mousedown", move: "mousemove", end: "mouseup" },
              touch: {
                start: "touchstart",
                move: "touchmove",
                end: "touchend",
                cancel: "touchcancel"
              }
            };
          return {
            bind: function(b, e, f) {
              var g,
                h,
                i,
                j,
                k = !1;
              (f = f || ["mouse", "touch"]),
                b.on(c(f, "start"), function(b) {
                  (i = a(b)),
                    (k = !0),
                    (g = 0),
                    (h = 0),
                    (j = i),
                    e.start && e.start(i, b);
                });
              var l = c(f, "cancel");
              l &&
                b.on(l, function(a) {
                  (k = !1), e.cancel && e.cancel(a);
                }),
                b.on(c(f, "move"), function(b) {
                  if (k && i) {
                    var c = a(b);
                    if (
                      ((g += Math.abs(c.x - j.x)),
                      (h += Math.abs(c.y - j.y)),
                      (j = c),
                      !(d > g && d > h))
                    )
                      return h > g
                        ? ((k = !1), void (e.cancel && e.cancel(b)))
                        : (b.preventDefault(), void (e.move && e.move(c, b)));
                  }
                }),
                b.on(c(f, "end"), function(b) {
                  k && ((k = !1), e.end && e.end(a(b), b));
                });
            }
          };
        }
      ]);
    var h = [
      "$parse",
      "$timeout",
      "$rootElement",
      function(a, c, e) {
        function f(a, b, c, d) {
          return Math.abs(a - c) < q && Math.abs(b - d) < q;
        }
        function g(a, b, c) {
          for (var d = 0; d < a.length; d += 2)
            if (f(a[d], a[d + 1], b, c)) return a.splice(d, d + 2), !0;
          return !1;
        }
        function h(a) {
          if (!(Date.now() - k > p)) {
            var b = a.touches && a.touches.length ? a.touches : [a],
              c = b[0].clientX,
              e = b[0].clientY;
            (1 > c && 1 > e) ||
              (m && m[0] === c && m[1] === e) ||
              (m && (m = null),
              "label" === d(a.target) && (m = [c, e]),
              g(l, c, e) ||
                (a.stopPropagation(),
                a.preventDefault(),
                a.target && a.target.blur && a.target.blur()));
          }
        }
        function i(a) {
          var b = a.touches && a.touches.length ? a.touches : [a],
            d = b[0].clientX,
            e = b[0].clientY;
          l.push(d, e),
            c(
              function() {
                for (var a = 0; a < l.length; a += 2)
                  if (l[a] == d && l[a + 1] == e)
                    return void l.splice(a, a + 2);
              },
              p,
              !1
            );
        }
        function j(a, b) {
          l ||
            (e[0].addEventListener("click", h, !0),
            e[0].addEventListener("touchstart", i, !0),
            (l = [])),
            (k = Date.now()),
            g(l, a, b);
        }
        var k,
          l,
          m,
          n = 750,
          o = 12,
          p = 2500,
          q = 25,
          r = "ng-click-active";
        return function(c, d, e) {
          function f() {
            (m = !1), d.removeClass(r);
          }
          var g,
            h,
            i,
            k,
            l = a(e.ngClick),
            m = !1;
          d.on("touchstart", function(a) {
            (m = !0),
              (g = a.target ? a.target : a.srcElement),
              3 == g.nodeType && (g = g.parentNode),
              d.addClass(r),
              (h = Date.now());
            var b = a.originalEvent || a,
              c = b.touches && b.touches.length ? b.touches : [b],
              e = c[0];
            (i = e.clientX), (k = e.clientY);
          }),
            d.on("touchcancel", function(a) {
              f();
            }),
            d.on("touchend", function(a) {
              var c = Date.now() - h,
                l = a.originalEvent || a,
                p =
                  l.changedTouches && l.changedTouches.length
                    ? l.changedTouches
                    : l.touches && l.touches.length
                    ? l.touches
                    : [l],
                q = p[0],
                r = q.clientX,
                s = q.clientY,
                t = Math.sqrt(Math.pow(r - i, 2) + Math.pow(s - k, 2));
              m &&
                n > c &&
                o > t &&
                (j(r, s),
                g && g.blur(),
                (b.isDefined(e.disabled) && e.disabled !== !1) ||
                  d.triggerHandler("click", [a])),
                f();
            }),
            (d.onclick = function(a) {}),
            d.on("click", function(a, b) {
              c.$apply(function() {
                l(c, { $event: b || a });
              });
            }),
            d.on("mousedown", function(a) {
              d.addClass(r);
            }),
            d.on("mousemove mouseup", function(a) {
              d.removeClass(r);
            });
        };
      }
    ];
    f("ngSwipeLeft", -1, "swipeleft"), f("ngSwipeRight", 1, "swiperight");
  })(window, window.angular),
  "undefined" != typeof module &&
    "undefined" != typeof exports &&
    module.exports === exports &&
    (module.exports = "ui.router"),
  (function(a, b, c) {
    "use strict";
    function d(a, b) {
      return N(new (N(function() {}, { prototype: a }))(), b);
    }
    function e(a) {
      return (
        M(arguments, function(b) {
          b !== a &&
            M(b, function(b, c) {
              a.hasOwnProperty(c) || (a[c] = b);
            });
        }),
        a
      );
    }
    function f(a, b) {
      var c = [];
      for (var d in a.path) {
        if (a.path[d] !== b.path[d]) break;
        c.push(a.path[d]);
      }
      return c;
    }
    function g(a) {
      if (Object.keys) return Object.keys(a);
      var b = [];
      return (
        M(a, function(a, c) {
          b.push(c);
        }),
        b
      );
    }
    function h(a, b) {
      if (Array.prototype.indexOf)
        return a.indexOf(b, Number(arguments[2]) || 0);
      var c = a.length >>> 0,
        d = Number(arguments[2]) || 0;
      for (
        d = 0 > d ? Math.ceil(d) : Math.floor(d), 0 > d && (d += c);
        c > d;
        d++
      )
        if (d in a && a[d] === b) return d;
      return -1;
    }
    function i(a, b, c, d) {
      var e,
        i = f(c, d),
        j = {},
        k = [];
      for (var l in i)
        if (i[l].params && ((e = g(i[l].params)), e.length))
          for (var m in e)
            h(k, e[m]) >= 0 || (k.push(e[m]), (j[e[m]] = a[e[m]]));
      return N({}, j, b);
    }
    function j(a, b, c) {
      if (!c) {
        c = [];
        for (var d in a) c.push(d);
      }
      for (var e = 0; e < c.length; e++) {
        var f = c[e];
        if (a[f] != b[f]) return !1;
      }
      return !0;
    }
    function k(a, b) {
      var c = {};
      return (
        M(a, function(a) {
          c[a] = b[a];
        }),
        c
      );
    }
    function l(a) {
      var b = {},
        c = Array.prototype.concat.apply(
          Array.prototype,
          Array.prototype.slice.call(arguments, 1)
        );
      return (
        M(c, function(c) {
          c in a && (b[c] = a[c]);
        }),
        b
      );
    }
    function m(a) {
      var b = {},
        c = Array.prototype.concat.apply(
          Array.prototype,
          Array.prototype.slice.call(arguments, 1)
        );
      for (var d in a) -1 == h(c, d) && (b[d] = a[d]);
      return b;
    }
    function n(a, b) {
      var c = L(a),
        d = c ? [] : {};
      return (
        M(a, function(a, e) {
          b(a, e) && (d[c ? d.length : e] = a);
        }),
        d
      );
    }
    function o(a, b) {
      var c = L(a) ? [] : {};
      return (
        M(a, function(a, d) {
          c[d] = b(a, d);
        }),
        c
      );
    }
    function p(a, b) {
      var d = 1,
        f = 2,
        i = {},
        j = [],
        k = i,
        l = N(a.when(i), { $$promises: i, $$values: i });
      (this.study = function(i) {
        function n(a, c) {
          if (s[c] !== f) {
            if ((r.push(c), s[c] === d))
              throw (r.splice(0, h(r, c)),
              new Error("Cyclic dependency: " + r.join(" -> ")));
            if (((s[c] = d), J(a)))
              q.push(
                c,
                [
                  function() {
                    return b.get(a);
                  }
                ],
                j
              );
            else {
              var e = b.annotate(a);
              M(e, function(a) {
                a !== c && i.hasOwnProperty(a) && n(i[a], a);
              }),
                q.push(c, a, e);
            }
            r.pop(), (s[c] = f);
          }
        }
        function o(a) {
          return K(a) && a.then && a.$$promises;
        }
        if (!K(i)) throw new Error("'invocables' must be an object");
        var p = g(i || {}),
          q = [],
          r = [],
          s = {};
        return (
          M(i, n),
          (i = r = s = null),
          function(d, f, g) {
            function h() {
              --u ||
                (v || e(t, f.$$values),
                (r.$$values = t),
                (r.$$promises = r.$$promises || !0),
                delete r.$$inheritedValues,
                n.resolve(t));
            }
            function i(a) {
              (r.$$failure = a), n.reject(a);
            }
            function j(c, e, f) {
              function j(a) {
                l.reject(a), i(a);
              }
              function k() {
                if (!H(r.$$failure))
                  try {
                    l.resolve(b.invoke(e, g, t)),
                      l.promise.then(function(a) {
                        (t[c] = a), h();
                      }, j);
                  } catch (a) {
                    j(a);
                  }
              }
              var l = a.defer(),
                m = 0;
              M(f, function(a) {
                s.hasOwnProperty(a) &&
                  !d.hasOwnProperty(a) &&
                  (m++,
                  s[a].then(function(b) {
                    (t[a] = b), --m || k();
                  }, j));
              }),
                m || k(),
                (s[c] = l.promise);
            }
            if ((o(d) && g === c && ((g = f), (f = d), (d = null)), d)) {
              if (!K(d)) throw new Error("'locals' must be an object");
            } else d = k;
            if (f) {
              if (!o(f))
                throw new Error(
                  "'parent' must be a promise returned by $resolve.resolve()"
                );
            } else f = l;
            var n = a.defer(),
              r = n.promise,
              s = (r.$$promises = {}),
              t = N({}, d),
              u = 1 + q.length / 3,
              v = !1;
            if (H(f.$$failure)) return i(f.$$failure), r;
            f.$$inheritedValues && e(t, m(f.$$inheritedValues, p)),
              N(s, f.$$promises),
              f.$$values
                ? ((v = e(t, m(f.$$values, p))),
                  (r.$$inheritedValues = m(f.$$values, p)),
                  h())
                : (f.$$inheritedValues &&
                    (r.$$inheritedValues = m(f.$$inheritedValues, p)),
                  f.then(h, i));
            for (var w = 0, x = q.length; x > w; w += 3)
              d.hasOwnProperty(q[w]) ? h() : j(q[w], q[w + 1], q[w + 2]);
            return r;
          }
        );
      }),
        (this.resolve = function(a, b, c, d) {
          return this.study(a)(b, c, d);
        });
    }
    function q(a, b, c) {
      (this.fromConfig = function(a, b, c) {
        return H(a.template)
          ? this.fromString(a.template, b)
          : H(a.templateUrl)
          ? this.fromUrl(a.templateUrl, b)
          : H(a.templateProvider)
          ? this.fromProvider(a.templateProvider, b, c)
          : null;
      }),
        (this.fromString = function(a, b) {
          return I(a) ? a(b) : a;
        }),
        (this.fromUrl = function(c, d) {
          return (
            I(c) && (c = c(d)),
            null == c
              ? null
              : a
                  .get(c, { cache: b, headers: { Accept: "text/html" } })
                  .then(function(a) {
                    return a.data;
                  })
          );
        }),
        (this.fromProvider = function(a, b, d) {
          return c.invoke(a, null, d || { params: b });
        });
    }
    function r(a, b, e) {
      function f(b, c, d, e) {
        if ((q.push(b), o[b])) return o[b];
        if (!/^\w+(-+\w+)*(?:\[\])?$/.test(b))
          throw new Error(
            "Invalid parameter name '" + b + "' in pattern '" + a + "'"
          );
        if (p[b])
          throw new Error(
            "Duplicate parameter name '" + b + "' in pattern '" + a + "'"
          );
        return (p[b] = new P.Param(b, c, d, e)), p[b];
      }
      function g(a, b, c, d) {
        var e = ["", ""],
          f = a.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
        if (!b) return f;
        switch (c) {
          case !1:
            e = ["(", ")" + (d ? "?" : "")];
            break;
          case !0:
            e = ["?(", ")?"];
            break;
          default:
            e = ["(" + c + "|", ")?"];
        }
        return f + e[0] + b + e[1];
      }
      function h(e, f) {
        var g, h, i, j, k;
        return (
          (g = e[2] || e[3]),
          (k = b.params[g]),
          (i = a.substring(m, e.index)),
          (h = f ? e[4] : e[4] || ("*" == e[1] ? ".*" : null)),
          (j =
            P.type(h || "string") ||
            d(P.type("string"), {
              pattern: new RegExp(h, b.caseInsensitive ? "i" : c)
            })),
          { id: g, regexp: h, segment: i, type: j, cfg: k }
        );
      }
      b = N({ params: {} }, K(b) ? b : {});
      var i,
        j = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
        k = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
        l = "^",
        m = 0,
        n = (this.segments = []),
        o = e ? e.params : {},
        p = (this.params = e ? e.params.$$new() : new P.ParamSet()),
        q = [];
      this.source = a;
      for (
        var r, s, t;
        (i = j.exec(a)) && ((r = h(i, !1)), !(r.segment.indexOf("?") >= 0));

      )
        (s = f(r.id, r.type, r.cfg, "path")),
          (l += g(r.segment, s.type.pattern.source, s.squash, s.isOptional)),
          n.push(r.segment),
          (m = j.lastIndex);
      t = a.substring(m);
      var u = t.indexOf("?");
      if (u >= 0) {
        var v = (this.sourceSearch = t.substring(u));
        if (
          ((t = t.substring(0, u)),
          (this.sourcePath = a.substring(0, m + u)),
          v.length > 0)
        )
          for (m = 0; (i = k.exec(v)); )
            (r = h(i, !0)),
              (s = f(r.id, r.type, r.cfg, "search")),
              (m = j.lastIndex);
      } else (this.sourcePath = a), (this.sourceSearch = "");
      (l += g(t) + (b.strict === !1 ? "/?" : "") + "$"),
        n.push(t),
        (this.regexp = new RegExp(l, b.caseInsensitive ? "i" : c)),
        (this.prefix = n[0]),
        (this.$$paramNames = q);
    }
    function s(a) {
      N(this, a);
    }
    function t() {
      function a(a) {
        return null != a ? a.toString().replace(/\//g, "%2F") : a;
      }
      function e(a) {
        return null != a ? a.toString().replace(/%2F/g, "/") : a;
      }
      function f() {
        return { strict: p, caseInsensitive: m };
      }
      function i(a) {
        return I(a) || (L(a) && I(a[a.length - 1]));
      }
      function j() {
        for (; w.length; ) {
          var a = w.shift();
          if (a.pattern)
            throw new Error(
              "You cannot override a type's .pattern at runtime."
            );
          b.extend(u[a.name], l.invoke(a.def));
        }
      }
      function k(a) {
        N(this, a || {});
      }
      P = this;
      var l,
        m = !1,
        p = !0,
        q = !1,
        u = {},
        v = !0,
        w = [],
        x = {
          string: {
            encode: a,
            decode: e,
            is: function(a) {
              return null == a || !H(a) || "string" == typeof a;
            },
            pattern: /[^/]*/
          },
          int: {
            encode: a,
            decode: function(a) {
              return parseInt(a, 10);
            },
            is: function(a) {
              return H(a) && this.decode(a.toString()) === a;
            },
            pattern: /\d+/
          },
          bool: {
            encode: function(a) {
              return a ? 1 : 0;
            },
            decode: function(a) {
              return 0 !== parseInt(a, 10);
            },
            is: function(a) {
              return a === !0 || a === !1;
            },
            pattern: /0|1/
          },
          date: {
            encode: function(a) {
              return this.is(a)
                ? [
                    a.getFullYear(),
                    ("0" + (a.getMonth() + 1)).slice(-2),
                    ("0" + a.getDate()).slice(-2)
                  ].join("-")
                : c;
            },
            decode: function(a) {
              if (this.is(a)) return a;
              var b = this.capture.exec(a);
              return b ? new Date(b[1], b[2] - 1, b[3]) : c;
            },
            is: function(a) {
              return a instanceof Date && !isNaN(a.valueOf());
            },
            equals: function(a, b) {
              return (
                this.is(a) && this.is(b) && a.toISOString() === b.toISOString()
              );
            },
            pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
            capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
          },
          json: {
            encode: b.toJson,
            decode: b.fromJson,
            is: b.isObject,
            equals: b.equals,
            pattern: /[^/]*/
          },
          any: {
            encode: b.identity,
            decode: b.identity,
            equals: b.equals,
            pattern: /.*/
          }
        };
      (t.$$getDefaultValue = function(a) {
        if (!i(a.value)) return a.value;
        if (!l)
          throw new Error(
            "Injectable functions cannot be called at configuration time"
          );
        return l.invoke(a.value);
      }),
        (this.caseInsensitive = function(a) {
          return H(a) && (m = a), m;
        }),
        (this.strictMode = function(a) {
          return H(a) && (p = a), p;
        }),
        (this.defaultSquashPolicy = function(a) {
          if (!H(a)) return q;
          if (a !== !0 && a !== !1 && !J(a))
            throw new Error(
              "Invalid squash policy: " +
                a +
                ". Valid policies: false, true, arbitrary-string"
            );
          return (q = a), a;
        }),
        (this.compile = function(a, b) {
          return new r(a, N(f(), b));
        }),
        (this.isMatcher = function(a) {
          if (!K(a)) return !1;
          var b = !0;
          return (
            M(r.prototype, function(c, d) {
              I(c) && (b = b && H(a[d]) && I(a[d]));
            }),
            b
          );
        }),
        (this.type = function(a, b, c) {
          if (!H(b)) return u[a];
          if (u.hasOwnProperty(a))
            throw new Error(
              "A type named '" + a + "' has already been defined."
            );
          return (
            (u[a] = new s(N({ name: a }, b))),
            c && (w.push({ name: a, def: c }), v || j()),
            this
          );
        }),
        M(x, function(a, b) {
          u[b] = new s(N({ name: b }, a));
        }),
        (u = d(u, {})),
        (this.$get = [
          "$injector",
          function(a) {
            return (
              (l = a),
              (v = !1),
              j(),
              M(x, function(a, b) {
                u[b] || (u[b] = new s(a));
              }),
              this
            );
          }
        ]),
        (this.Param = function(a, b, d, e) {
          function f(a) {
            var b = K(a) ? g(a) : [],
              c =
                -1 === h(b, "value") &&
                -1 === h(b, "type") &&
                -1 === h(b, "squash") &&
                -1 === h(b, "array");
            return (
              c && (a = { value: a }),
              (a.$$fn = i(a.value)
                ? a.value
                : function() {
                    return a.value;
                  }),
              a
            );
          }
          function j(b, c, d) {
            if (b.type && c)
              throw new Error("Param '" + a + "' has two type configurations.");
            return c
              ? c
              : b.type
              ? b.type instanceof s
                ? b.type
                : new s(b.type)
              : "config" === d
              ? u.any
              : u.string;
          }
          function k() {
            var b = { array: "search" === e ? "auto" : !1 },
              c = a.match(/\[\]$/) ? { array: !0 } : {};
            return N(b, c, d).array;
          }
          function m(a, b) {
            var c = a.squash;
            if (!b || c === !1) return !1;
            if (!H(c) || null == c) return q;
            if (c === !0 || J(c)) return c;
            throw new Error(
              "Invalid squash policy: '" +
                c +
                "'. Valid policies: false, true, or arbitrary string"
            );
          }
          function p(a, b, d, e) {
            var f,
              g,
              i = [
                { from: "", to: d || b ? c : "" },
                { from: null, to: d || b ? c : "" }
              ];
            return (
              (f = L(a.replace) ? a.replace : []),
              J(e) && f.push({ from: e, to: c }),
              (g = o(f, function(a) {
                return a.from;
              })),
              n(i, function(a) {
                return -1 === h(g, a.from);
              }).concat(f)
            );
          }
          function r() {
            if (!l)
              throw new Error(
                "Injectable functions cannot be called at configuration time"
              );
            var a = l.invoke(d.$$fn);
            if (null !== a && a !== c && !w.type.is(a))
              throw new Error(
                "Default value (" +
                  a +
                  ") for parameter '" +
                  w.id +
                  "' is not an instance of Type (" +
                  w.type.name +
                  ")"
              );
            return a;
          }
          function t(a) {
            function b(a) {
              return function(b) {
                return b.from === a;
              };
            }
            function c(a) {
              var c = o(n(w.replace, b(a)), function(a) {
                return a.to;
              });
              return c.length ? c[0] : a;
            }
            return (a = c(a)), H(a) ? w.type.$normalize(a) : r();
          }
          function v() {
            return (
              "{Param:" +
              a +
              " " +
              b +
              " squash: '" +
              z +
              "' optional: " +
              y +
              "}"
            );
          }
          var w = this;
          (d = f(d)), (b = j(d, b, e));
          var x = k();
          (b = x ? b.$asArray(x, "search" === e) : b),
            "string" !== b.name ||
              x ||
              "path" !== e ||
              d.value !== c ||
              (d.value = "");
          var y = d.value !== c,
            z = m(d, y),
            A = p(d, x, y, z);
          N(this, {
            id: a,
            type: b,
            location: e,
            array: x,
            squash: z,
            replace: A,
            isOptional: y,
            value: t,
            dynamic: c,
            config: d,
            toString: v
          });
        }),
        (k.prototype = {
          $$new: function() {
            return d(this, N(new k(), { $$parent: this }));
          },
          $$keys: function() {
            for (var a = [], b = [], c = this, d = g(k.prototype); c; )
              b.push(c), (c = c.$$parent);
            return (
              b.reverse(),
              M(b, function(b) {
                M(g(b), function(b) {
                  -1 === h(a, b) && -1 === h(d, b) && a.push(b);
                });
              }),
              a
            );
          },
          $$values: function(a) {
            var b = {},
              c = this;
            return (
              M(c.$$keys(), function(d) {
                b[d] = c[d].value(a && a[d]);
              }),
              b
            );
          },
          $$equals: function(a, b) {
            var c = !0,
              d = this;
            return (
              M(d.$$keys(), function(e) {
                var f = a && a[e],
                  g = b && b[e];
                d[e].type.equals(f, g) || (c = !1);
              }),
              c
            );
          },
          $$validates: function(a) {
            var d,
              e,
              f,
              g,
              h,
              i = this.$$keys();
            for (
              d = 0;
              d < i.length &&
              ((e = this[i[d]]),
              (f = a[i[d]]),
              (f !== c && null !== f) || !e.isOptional);
              d++
            ) {
              if (((g = e.type.$normalize(f)), !e.type.is(g))) return !1;
              if (
                ((h = e.type.encode(g)),
                b.isString(h) && !e.type.pattern.exec(h))
              )
                return !1;
            }
            return !0;
          },
          $$parent: c
        }),
        (this.ParamSet = k);
    }
    function u(a, d) {
      function e(a) {
        var b = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(
          a.source
        );
        return null != b ? b[1].replace(/\\(.)/g, "$1") : "";
      }
      function f(a, b) {
        return a.replace(/\$(\$|\d{1,2})/, function(a, c) {
          return b["$" === c ? 0 : Number(c)];
        });
      }
      function g(a, b, c) {
        if (!c) return !1;
        var d = a.invoke(b, b, { $match: c });
        return H(d) ? d : !0;
      }
      function h(d, e, f, g) {
        function h(a, b, c) {
          return "/" === p
            ? a
            : b
            ? p.slice(0, -1) + a
            : c
            ? p.slice(1) + a
            : a;
        }
        function m(a) {
          function b(a) {
            var b = a(f, d);
            return b ? (J(b) && d.replace().url(b), !0) : !1;
          }
          if (!a || !a.defaultPrevented) {
            o && d.url() === o;
            o = c;
            var e,
              g = j.length;
            for (e = 0; g > e; e++) if (b(j[e])) return;
            k && b(k);
          }
        }
        function n() {
          return (i = i || e.$on("$locationChangeSuccess", m));
        }
        var o,
          p = g.baseHref(),
          q = d.url();
        return (
          l || n(),
          {
            sync: function() {
              m();
            },
            listen: function() {
              return n();
            },
            update: function(a) {
              return a
                ? void (q = d.url())
                : void (d.url() !== q && (d.url(q), d.replace()));
            },
            push: function(a, b, e) {
              var f = a.format(b || {});
              null !== f && b && b["#"] && (f += "#" + b["#"]),
                d.url(f),
                (o = e && e.$$avoidResync ? d.url() : c),
                e && e.replace && d.replace();
            },
            href: function(c, e, f) {
              if (!c.validates(e)) return null;
              var g = a.html5Mode();
              b.isObject(g) && (g = g.enabled);
              var i = c.format(e);
              if (
                ((f = f || {}),
                g || null === i || (i = "#" + a.hashPrefix() + i),
                null !== i && e && e["#"] && (i += "#" + e["#"]),
                (i = h(i, g, f.absolute)),
                !f.absolute || !i)
              )
                return i;
              var j = !g && i ? "/" : "",
                k = d.port();
              return (
                (k = 80 === k || 443 === k ? "" : ":" + k),
                [d.protocol(), "://", d.host(), k, j, i].join("")
              );
            }
          }
        );
      }
      var i,
        j = [],
        k = null,
        l = !1;
      (this.rule = function(a) {
        if (!I(a)) throw new Error("'rule' must be a function");
        return j.push(a), this;
      }),
        (this.otherwise = function(a) {
          if (J(a)) {
            var b = a;
            a = function() {
              return b;
            };
          } else if (!I(a)) throw new Error("'rule' must be a function");
          return (k = a), this;
        }),
        (this.when = function(a, b) {
          var c,
            h = J(b);
          if ((J(a) && (a = d.compile(a)), !h && !I(b) && !L(b)))
            throw new Error("invalid 'handler' in when()");
          var i = {
              matcher: function(a, b) {
                return (
                  h &&
                    ((c = d.compile(b)),
                    (b = [
                      "$match",
                      function(a) {
                        return c.format(a);
                      }
                    ])),
                  N(
                    function(c, d) {
                      return g(c, b, a.exec(d.path(), d.search()));
                    },
                    { prefix: J(a.prefix) ? a.prefix : "" }
                  )
                );
              },
              regex: function(a, b) {
                if (a.global || a.sticky)
                  throw new Error("when() RegExp must not be global or sticky");
                return (
                  h &&
                    ((c = b),
                    (b = [
                      "$match",
                      function(a) {
                        return f(c, a);
                      }
                    ])),
                  N(
                    function(c, d) {
                      return g(c, b, a.exec(d.path()));
                    },
                    { prefix: e(a) }
                  )
                );
              }
            },
            j = { matcher: d.isMatcher(a), regex: a instanceof RegExp };
          for (var k in j) if (j[k]) return this.rule(i[k](a, b));
          throw new Error("invalid 'what' in when()");
        }),
        (this.deferIntercept = function(a) {
          a === c && (a = !0), (l = a);
        }),
        (this.$get = h),
        (h.$inject = ["$location", "$rootScope", "$injector", "$browser"]);
    }
    function v(a, e) {
      function f(a) {
        return 0 === a.indexOf(".") || 0 === a.indexOf("^");
      }
      function m(a, b) {
        if (!a) return c;
        var d = J(a),
          e = d ? a : a.name,
          g = f(e);
        if (g) {
          if (!b)
            throw new Error("No reference point given for path '" + e + "'");
          b = m(b);
          for (var h = e.split("."), i = 0, j = h.length, k = b; j > i; i++)
            if ("" !== h[i] || 0 !== i) {
              if ("^" !== h[i]) break;
              if (!k.parent)
                throw new Error(
                  "Path '" + e + "' not valid for state '" + b.name + "'"
                );
              k = k.parent;
            } else k = b;
          (h = h.slice(i).join(".")),
            (e = k.name + (k.name && h ? "." : "") + h);
        }
        var l = z[e];
        return !l || (!d && (d || (l !== a && l.self !== a))) ? c : l;
      }
      function n(a, b) {
        A[a] || (A[a] = []), A[a].push(b);
      }
      function p(a) {
        for (var b = A[a] || []; b.length; ) q(b.shift());
      }
      function q(b) {
        b = d(b, {
          self: b,
          resolve: b.resolve || {},
          toString: function() {
            return this.name;
          }
        });
        var c = b.name;
        if (!J(c) || c.indexOf("@") >= 0)
          throw new Error("State must have a valid name");
        if (z.hasOwnProperty(c))
          throw new Error("State '" + c + "'' is already defined");
        var e =
          -1 !== c.indexOf(".")
            ? c.substring(0, c.lastIndexOf("."))
            : J(b.parent)
            ? b.parent
            : K(b.parent) && J(b.parent.name)
            ? b.parent.name
            : "";
        if (e && !z[e]) return n(e, b.self);
        for (var f in C) I(C[f]) && (b[f] = C[f](b, C.$delegates[f]));
        return (
          (z[c] = b),
          !b[B] &&
            b.url &&
            a.when(b.url, [
              "$match",
              "$stateParams",
              function(a, c) {
                (y.$current.navigable == b && j(a, c)) ||
                  y.transitionTo(b, a, { inherit: !0, location: !1 });
              }
            ]),
          p(c),
          b
        );
      }
      function r(a) {
        return a.indexOf("*") > -1;
      }
      function s(a) {
        for (
          var b = a.split("."),
            c = y.$current.name.split("."),
            d = 0,
            e = b.length;
          e > d;
          d++
        )
          "*" === b[d] && (c[d] = "*");
        return (
          "**" === b[0] && ((c = c.slice(h(c, b[1]))), c.unshift("**")),
          "**" === b[b.length - 1] &&
            (c.splice(h(c, b[b.length - 2]) + 1, Number.MAX_VALUE),
            c.push("**")),
          b.length != c.length ? !1 : c.join("") === b.join("")
        );
      }
      function t(a, b) {
        return J(a) && !H(b)
          ? C[a]
          : I(b) && J(a)
          ? (C[a] && !C.$delegates[a] && (C.$delegates[a] = C[a]),
            (C[a] = b),
            this)
          : this;
      }
      function u(a, b) {
        return K(a) ? (b = a) : (b.name = a), q(b), this;
      }
      function v(a, e, f, h, l, n, p, q, t) {
        function u(b, c, d, f) {
          var g = a.$broadcast("$stateNotFound", b, c, d);
          if (g.defaultPrevented) return p.update(), D;
          if (!g.retry) return null;
          if (f.$retry) return p.update(), E;
          var h = (y.transition = e.when(g.retry));
          return (
            h.then(
              function() {
                return h !== y.transition
                  ? A
                  : ((b.options.$retry = !0),
                    y.transitionTo(b.to, b.toParams, b.options));
              },
              function() {
                return D;
              }
            ),
            p.update(),
            h
          );
        }
        function v(a, c, d, g, i, j) {
          function m() {
            var c = [];
            return (
              M(a.views, function(d, e) {
                var g = d.resolve && d.resolve !== a.resolve ? d.resolve : {};
                (g.$template = [
                  function() {
                    return (
                      f.load(e, {
                        view: d,
                        locals: i.globals,
                        params: n,
                        notify: j.notify
                      }) || ""
                    );
                  }
                ]),
                  c.push(
                    l.resolve(g, i.globals, i.resolve, a).then(function(c) {
                      if (I(d.controllerProvider) || L(d.controllerProvider)) {
                        var f = b.extend({}, g, i.globals);
                        c.$$controller = h.invoke(
                          d.controllerProvider,
                          null,
                          f
                        );
                      } else c.$$controller = d.controller;
                      (c.$$state = a),
                        (c.$$controllerAs = d.controllerAs),
                        (i[e] = c);
                    })
                  );
              }),
              e.all(c).then(function() {
                return i.globals;
              })
            );
          }
          var n = d ? c : k(a.params.$$keys(), c),
            o = { $stateParams: n };
          i.resolve = l.resolve(a.resolve, o, i.resolve, a);
          var p = [
            i.resolve.then(function(a) {
              i.globals = a;
            })
          ];
          return (
            g && p.push(g),
            e
              .all(p)
              .then(m)
              .then(function(a) {
                return i;
              })
          );
        }
        var A = e.reject(new Error("transition superseded")),
          C = e.reject(new Error("transition prevented")),
          D = e.reject(new Error("transition aborted")),
          E = e.reject(new Error("transition failed"));
        return (
          (x.locals = { resolve: null, globals: { $stateParams: {} } }),
          (y = { params: {}, current: x.self, $current: x, transition: null }),
          (y.reload = function(a) {
            return y.transitionTo(y.current, n, {
              reload: a || !0,
              inherit: !1,
              notify: !0
            });
          }),
          (y.go = function(a, b, c) {
            return y.transitionTo(
              a,
              b,
              N({ inherit: !0, relative: y.$current }, c)
            );
          }),
          (y.transitionTo = function(b, c, f) {
            (c = c || {}),
              (f = N(
                {
                  location: !0,
                  inherit: !1,
                  relative: null,
                  notify: !0,
                  reload: !1,
                  $retry: !1
                },
                f || {}
              ));
            var g,
              j = y.$current,
              l = y.params,
              o = j.path,
              q = m(b, f.relative),
              r = c["#"];
            if (!H(q)) {
              var s = { to: b, toParams: c, options: f },
                t = u(s, j.self, l, f);
              if (t) return t;
              if (
                ((b = s.to),
                (c = s.toParams),
                (f = s.options),
                (q = m(b, f.relative)),
                !H(q))
              ) {
                if (!f.relative) throw new Error("No such state '" + b + "'");
                throw new Error(
                  "Could not resolve '" +
                    b +
                    "' from state '" +
                    f.relative +
                    "'"
                );
              }
            }
            if (q[B])
              throw new Error(
                "Cannot transition to abstract state '" + b + "'"
              );
            if (
              (f.inherit && (c = i(n, c || {}, y.$current, q)),
              !q.params.$$validates(c))
            )
              return E;
            (c = q.params.$$values(c)), (b = q);
            var z = b.path,
              D = 0,
              F = z[D],
              G = x.locals,
              I = [];
            if (f.reload) {
              if (J(f.reload) || K(f.reload)) {
                if (K(f.reload) && !f.reload.name)
                  throw new Error("Invalid reload state object");
                var L = f.reload === !0 ? o[0] : m(f.reload);
                if (f.reload && !L)
                  throw new Error(
                    "No such reload state '" +
                      (J(f.reload) ? f.reload : f.reload.name) +
                      "'"
                  );
                for (; F && F === o[D] && F !== L; )
                  (G = I[D] = F.locals), D++, (F = z[D]);
              }
            } else
              for (; F && F === o[D] && F.ownParams.$$equals(c, l); )
                (G = I[D] = F.locals), D++, (F = z[D]);
            if (w(b, c, j, l, G, f))
              return (
                r && (c["#"] = r),
                (y.params = c),
                O(y.params, n),
                f.location &&
                  b.navigable &&
                  b.navigable.url &&
                  (p.push(b.navigable.url, c, {
                    $$avoidResync: !0,
                    replace: "replace" === f.location
                  }),
                  p.update(!0)),
                (y.transition = null),
                e.when(y.current)
              );
            if (
              ((c = k(b.params.$$keys(), c || {})),
              f.notify &&
                a.$broadcast("$stateChangeStart", b.self, c, j.self, l)
                  .defaultPrevented)
            )
              return (
                a.$broadcast("$stateChangeCancel", b.self, c, j.self, l),
                p.update(),
                C
              );
            for (var M = e.when(G), P = D; P < z.length; P++, F = z[P])
              (G = I[P] = d(G)), (M = v(F, c, F === b, M, G, f));
            var Q = (y.transition = M.then(
              function() {
                var d, e, g;
                if (y.transition !== Q) return A;
                for (d = o.length - 1; d >= D; d--)
                  (g = o[d]),
                    g.self.onExit &&
                      h.invoke(g.self.onExit, g.self, g.locals.globals),
                    (g.locals = null);
                for (d = D; d < z.length; d++)
                  (e = z[d]),
                    (e.locals = I[d]),
                    e.self.onEnter &&
                      h.invoke(e.self.onEnter, e.self, e.locals.globals);
                return (
                  r && (c["#"] = r),
                  y.transition !== Q
                    ? A
                    : ((y.$current = b),
                      (y.current = b.self),
                      (y.params = c),
                      O(y.params, n),
                      (y.transition = null),
                      f.location &&
                        b.navigable &&
                        p.push(
                          b.navigable.url,
                          b.navigable.locals.globals.$stateParams,
                          {
                            $$avoidResync: !0,
                            replace: "replace" === f.location
                          }
                        ),
                      f.notify &&
                        a.$broadcast(
                          "$stateChangeSuccess",
                          b.self,
                          c,
                          j.self,
                          l
                        ),
                      p.update(!0),
                      y.current)
                );
              },
              function(d) {
                return y.transition !== Q
                  ? A
                  : ((y.transition = null),
                    (g = a.$broadcast(
                      "$stateChangeError",
                      b.self,
                      c,
                      j.self,
                      l,
                      d
                    )),
                    g.defaultPrevented || p.update(),
                    e.reject(d));
              }
            ));
            return Q;
          }),
          (y.is = function(a, b, d) {
            d = N({ relative: y.$current }, d || {});
            var e = m(a, d.relative);
            return H(e)
              ? y.$current !== e
                ? !1
                : b
                ? j(e.params.$$values(b), n)
                : !0
              : c;
          }),
          (y.includes = function(a, b, d) {
            if (((d = N({ relative: y.$current }, d || {})), J(a) && r(a))) {
              if (!s(a)) return !1;
              a = y.$current.name;
            }
            var e = m(a, d.relative);
            return H(e)
              ? H(y.$current.includes[e.name])
                ? b
                  ? j(e.params.$$values(b), n, g(b))
                  : !0
                : !1
              : c;
          }),
          (y.href = function(a, b, d) {
            d = N(
              { lossy: !0, inherit: !0, absolute: !1, relative: y.$current },
              d || {}
            );
            var e = m(a, d.relative);
            if (!H(e)) return null;
            d.inherit && (b = i(n, b || {}, y.$current, e));
            var f = e && d.lossy ? e.navigable : e;
            return f && f.url !== c && null !== f.url
              ? p.href(f.url, k(e.params.$$keys().concat("#"), b || {}), {
                  absolute: d.absolute
                })
              : null;
          }),
          (y.get = function(a, b) {
            if (0 === arguments.length)
              return o(g(z), function(a) {
                return z[a].self;
              });
            var c = m(a, b || y.$current);
            return c && c.self ? c.self : null;
          }),
          y
        );
      }
      function w(a, b, c, d, e, f) {
        function g(a, b, c) {
          function d(b) {
            return "search" != a.params[b].location;
          }
          var e = a.params.$$keys().filter(d),
            f = l.apply({}, [a.params].concat(e)),
            g = new P.ParamSet(f);
          return g.$$equals(b, c);
        }
        return !f.reload &&
          a === c &&
          (e === c.locals || (a.self.reloadOnSearch === !1 && g(c, d, b)))
          ? !0
          : void 0;
      }
      var x,
        y,
        z = {},
        A = {},
        B = "abstract",
        C = {
          parent: function(a) {
            if (H(a.parent) && a.parent) return m(a.parent);
            var b = /^(.+)\.[^.]+$/.exec(a.name);
            return b ? m(b[1]) : x;
          },
          data: function(a) {
            return (
              a.parent &&
                a.parent.data &&
                (a.data = a.self.data = N({}, a.parent.data, a.data)),
              a.data
            );
          },
          url: function(a) {
            var b = a.url,
              c = { params: a.params || {} };
            if (J(b))
              return "^" == b.charAt(0)
                ? e.compile(b.substring(1), c)
                : (a.parent.navigable || x).url.concat(b, c);
            if (!b || e.isMatcher(b)) return b;
            throw new Error("Invalid url '" + b + "' in state '" + a + "'");
          },
          navigable: function(a) {
            return a.url ? a : a.parent ? a.parent.navigable : null;
          },
          ownParams: function(a) {
            var b = (a.url && a.url.params) || new P.ParamSet();
            return (
              M(a.params || {}, function(a, c) {
                b[c] || (b[c] = new P.Param(c, null, a, "config"));
              }),
              b
            );
          },
          params: function(a) {
            return a.parent && a.parent.params
              ? N(a.parent.params.$$new(), a.ownParams)
              : new P.ParamSet();
          },
          views: function(a) {
            var b = {};
            return (
              M(H(a.views) ? a.views : { "": a }, function(c, d) {
                d.indexOf("@") < 0 && (d += "@" + a.parent.name), (b[d] = c);
              }),
              b
            );
          },
          path: function(a) {
            return a.parent ? a.parent.path.concat(a) : [];
          },
          includes: function(a) {
            var b = a.parent ? N({}, a.parent.includes) : {};
            return (b[a.name] = !0), b;
          },
          $delegates: {}
        };
      (x = q({ name: "", url: "^", views: null, abstract: !0 })),
        (x.navigable = null),
        (this.decorator = t),
        (this.state = u),
        (this.$get = v),
        (v.$inject = [
          "$rootScope",
          "$q",
          "$view",
          "$injector",
          "$resolve",
          "$stateParams",
          "$urlRouter",
          "$location",
          "$urlMatcherFactory"
        ]);
    }
    function w() {
      function a(a, b) {
        return {
          load: function(c, d) {
            var e,
              f = {
                template: null,
                controller: null,
                view: null,
                locals: null,
                notify: !0,
                async: !0,
                params: {}
              };
            return (
              (d = N(f, d)),
              d.view && (e = b.fromConfig(d.view, d.params, d.locals)),
              e && d.notify && a.$broadcast("$viewContentLoading", d),
              e
            );
          }
        };
      }
      (this.$get = a), (a.$inject = ["$rootScope", "$templateFactory"]);
    }
    function x() {
      var a = !1;
      (this.useAnchorScroll = function() {
        a = !0;
      }),
        (this.$get = [
          "$anchorScroll",
          "$timeout",
          function(b, c) {
            return a
              ? b
              : function(a) {
                  return c(
                    function() {
                      a[0].scrollIntoView();
                    },
                    0,
                    !1
                  );
                };
          }
        ]);
    }
    function y(a, c, d, e) {
      function f() {
        return c.has
          ? function(a) {
              return c.has(a) ? c.get(a) : null;
            }
          : function(a) {
              try {
                return c.get(a);
              } catch (b) {
                return null;
              }
            };
      }
      function g(a, b) {
        var c = function() {
          return {
            enter: function(a, b, c) {
              b.after(a), c();
            },
            leave: function(a, b) {
              a.remove(), b();
            }
          };
        };
        if (j)
          return {
            enter: function(a, b, c) {
              var d = j.enter(a, null, b, c);
              d && d.then && d.then(c);
            },
            leave: function(a, b) {
              var c = j.leave(a, b);
              c && c.then && c.then(b);
            }
          };
        if (i) {
          var d = i && i(b, a);
          return {
            enter: function(a, b, c) {
              d.enter(a, null, b), c();
            },
            leave: function(a, b) {
              d.leave(a), b();
            }
          };
        }
        return c();
      }
      var h = f(),
        i = h("$animator"),
        j = h("$animate"),
        k = {
          restrict: "ECA",
          terminal: !0,
          priority: 400,
          transclude: "element",
          compile: function(c, f, h) {
            return function(c, f, i) {
              function j() {
                l && (l.remove(), (l = null)),
                  n && (n.$destroy(), (n = null)),
                  m &&
                    (r.leave(m, function() {
                      l = null;
                    }),
                    (l = m),
                    (m = null));
              }
              function k(g) {
                var k,
                  l = A(c, i, f, e),
                  s = l && a.$current && a.$current.locals[l];
                if (g || s !== o) {
                  (k = c.$new()), (o = a.$current.locals[l]);
                  var t = h(k, function(a) {
                    r.enter(a, f, function() {
                      n && n.$emit("$viewContentAnimationEnded"),
                        ((b.isDefined(q) && !q) || c.$eval(q)) && d(a);
                    }),
                      j();
                  });
                  (m = t), (n = k), n.$emit("$viewContentLoaded"), n.$eval(p);
                }
              }
              var l,
                m,
                n,
                o,
                p = i.onload || "",
                q = i.autoscroll,
                r = g(i, c);
              c.$on("$stateChangeSuccess", function() {
                k(!1);
              }),
                c.$on("$viewContentLoading", function() {
                  k(!1);
                }),
                k(!0);
            };
          }
        };
      return k;
    }
    function z(a, b, c, d) {
      return {
        restrict: "ECA",
        priority: -400,
        compile: function(e) {
          var f = e.html();
          return function(e, g, h) {
            var i = c.$current,
              j = A(e, h, g, d),
              k = i && i.locals[j];
            if (k) {
              g.data("$uiView", { name: j, state: k.$$state }),
                g.html(k.$template ? k.$template : f);
              var l = a(g.contents());
              if (k.$$controller) {
                (k.$scope = e), (k.$element = g);
                var m = b(k.$$controller, k);
                k.$$controllerAs && (e[k.$$controllerAs] = m),
                  g.data("$ngControllerController", m),
                  g.children().data("$ngControllerController", m);
              }
              l(e);
            }
          };
        }
      };
    }
    function A(a, b, c, d) {
      var e = d(b.uiView || b.name || "")(a),
        f = c.inheritedData("$uiView");
      return e.indexOf("@") >= 0 ? e : e + "@" + (f ? f.state.name : "");
    }
    function B(a, b) {
      var c,
        d = a.match(/^\s*({[^}]*})\s*$/);
      if (
        (d && (a = b + "(" + d[1] + ")"),
        (c = a.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/)),
        !c || 4 !== c.length)
      )
        throw new Error("Invalid state ref '" + a + "'");
      return { state: c[1], paramExpr: c[3] || null };
    }
    function C(a) {
      var b = a.parent().inheritedData("$uiView");
      return b && b.state && b.state.name ? b.state : void 0;
    }
    function D(a, c) {
      var d = ["location", "inherit", "reload", "absolute"];
      return {
        restrict: "A",
        require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
        link: function(e, f, g, h) {
          var i = B(g.uiSref, a.current.name),
            j = null,
            k = C(f) || a.$current,
            l =
              "[object SVGAnimatedString]" ===
              Object.prototype.toString.call(f.prop("href"))
                ? "xlink:href"
                : "href",
            m = null,
            n = "A" === f.prop("tagName").toUpperCase(),
            o = "FORM" === f[0].nodeName,
            p = o ? "action" : l,
            q = !0,
            r = { relative: k, inherit: !0 },
            s = e.$eval(g.uiSrefOpts) || {};
          b.forEach(d, function(a) {
            a in s && (r[a] = s[a]);
          });
          var t = function(c) {
            if ((c && (j = b.copy(c)), q)) {
              m = a.href(i.state, j, r);
              var d = h[1] || h[0];
              return (
                d && d.$$addStateInfo(i.state, j),
                null === m ? ((q = !1), !1) : void g.$set(p, m)
              );
            }
          };
          i.paramExpr &&
            (e.$watch(
              i.paramExpr,
              function(a, b) {
                a !== j && t(a);
              },
              !0
            ),
            (j = b.copy(e.$eval(i.paramExpr)))),
            t(),
            o ||
              f.bind("click", function(b) {
                var d = b.which || b.button;
                if (
                  !(
                    d > 1 ||
                    b.ctrlKey ||
                    b.metaKey ||
                    b.shiftKey ||
                    f.attr("target")
                  )
                ) {
                  var e = c(function() {
                    a.go(i.state, j, r);
                  });
                  b.preventDefault();
                  var g = n && !m ? 1 : 0;
                  b.preventDefault = function() {
                    g-- <= 0 && c.cancel(e);
                  };
                }
              });
        }
      };
    }
    function E(a, b, c) {
      return {
        restrict: "A",
        controller: [
          "$scope",
          "$element",
          "$attrs",
          function(b, d, e) {
            function f() {
              g() ? d.addClass(i) : d.removeClass(i);
            }
            function g() {
              for (var a = 0; a < j.length; a++)
                if (h(j[a].state, j[a].params)) return !0;
              return !1;
            }
            function h(b, c) {
              return "undefined" != typeof e.uiSrefActiveEq
                ? a.is(b.name, c)
                : a.includes(b.name, c);
            }
            var i,
              j = [];
            (i = c(e.uiSrefActiveEq || e.uiSrefActive || "", !1)(b)),
              (this.$$addStateInfo = function(b, c) {
                var e = a.get(b, C(d));
                j.push({ state: e || { name: b }, params: c }), f();
              }),
              b.$on("$stateChangeSuccess", f);
          }
        ]
      };
    }
    function F(a) {
      var b = function(b) {
        return a.is(b);
      };
      return (b.$stateful = !0), b;
    }
    function G(a) {
      var b = function(b) {
        return a.includes(b);
      };
      return (b.$stateful = !0), b;
    }
    var H = b.isDefined,
      I = b.isFunction,
      J = b.isString,
      K = b.isObject,
      L = b.isArray,
      M = b.forEach,
      N = b.extend,
      O = b.copy;
    b.module("ui.router.util", ["ng"]),
      b.module("ui.router.router", ["ui.router.util"]),
      b.module("ui.router.state", ["ui.router.router", "ui.router.util"]),
      b.module("ui.router", ["ui.router.state"]),
      b.module("ui.router.compat", ["ui.router"]),
      (p.$inject = ["$q", "$injector"]),
      b.module("ui.router.util").service("$resolve", p),
      (q.$inject = ["$http", "$templateCache", "$injector"]),
      b.module("ui.router.util").service("$templateFactory", q);
    var P;
    (r.prototype.concat = function(a, b) {
      var c = {
        caseInsensitive: P.caseInsensitive(),
        strict: P.strictMode(),
        squash: P.defaultSquashPolicy()
      };
      return new r(this.sourcePath + a + this.sourceSearch, N(c, b), this);
    }),
      (r.prototype.toString = function() {
        return this.source;
      }),
      (r.prototype.exec = function(a, b) {
        function c(a) {
          function b(a) {
            return a
              .split("")
              .reverse()
              .join("");
          }
          function c(a) {
            return a.replace(/\\-/g, "-");
          }
          var d = b(a).split(/-(?!\\)/),
            e = o(d, b);
          return o(e, c).reverse();
        }
        var d = this.regexp.exec(a);
        if (!d) return null;
        b = b || {};
        var e,
          f,
          g,
          h = this.parameters(),
          i = h.length,
          j = this.segments.length - 1,
          k = {};
        if (j !== d.length - 1)
          throw new Error(
            "Unbalanced capture group in route '" + this.source + "'"
          );
        for (e = 0; j > e; e++) {
          g = h[e];
          var l = this.params[g],
            m = d[e + 1];
          for (f = 0; f < l.replace; f++)
            l.replace[f].from === m && (m = l.replace[f].to);
          m && l.array === !0 && (m = c(m)), (k[g] = l.value(m));
        }
        for (; i > e; e++) (g = h[e]), (k[g] = this.params[g].value(b[g]));
        return k;
      }),
      (r.prototype.parameters = function(a) {
        return H(a) ? this.params[a] || null : this.$$paramNames;
      }),
      (r.prototype.validates = function(a) {
        return this.params.$$validates(a);
      }),
      (r.prototype.format = function(a) {
        function b(a) {
          return encodeURIComponent(a).replace(/-/g, function(a) {
            return (
              "%5C%" +
              a
                .charCodeAt(0)
                .toString(16)
                .toUpperCase()
            );
          });
        }
        a = a || {};
        var c = this.segments,
          d = this.parameters(),
          e = this.params;
        if (!this.validates(a)) return null;
        var f,
          g = !1,
          h = c.length - 1,
          i = d.length,
          j = c[0];
        for (f = 0; i > f; f++) {
          var k = h > f,
            l = d[f],
            m = e[l],
            n = m.value(a[l]),
            p = m.isOptional && m.type.equals(m.value(), n),
            q = p ? m.squash : !1,
            r = m.type.encode(n);
          if (k) {
            var s = c[f + 1];
            if (q === !1)
              null != r &&
                (j += L(r) ? o(r, b).join("-") : encodeURIComponent(r)),
                (j += s);
            else if (q === !0) {
              var t = j.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
              j += s.match(t)[1];
            } else J(q) && (j += q + s);
          } else {
            if (null == r || (p && q !== !1)) continue;
            L(r) || (r = [r]),
              (r = o(r, encodeURIComponent).join("&" + l + "=")),
              (j += (g ? "&" : "?") + (l + "=" + r)),
              (g = !0);
          }
        }
        return j;
      }),
      (s.prototype.is = function(a, b) {
        return !0;
      }),
      (s.prototype.encode = function(a, b) {
        return a;
      }),
      (s.prototype.decode = function(a, b) {
        return a;
      }),
      (s.prototype.equals = function(a, b) {
        return a == b;
      }),
      (s.prototype.$subPattern = function() {
        var a = this.pattern.toString();
        return a.substr(1, a.length - 2);
      }),
      (s.prototype.pattern = /.*/),
      (s.prototype.toString = function() {
        return "{Type:" + this.name + "}";
      }),
      (s.prototype.$normalize = function(a) {
        return this.is(a) ? a : this.decode(a);
      }),
      (s.prototype.$asArray = function(a, b) {
        function d(a, b) {
          function d(a, b) {
            return function() {
              return a[b].apply(a, arguments);
            };
          }
          function e(a) {
            return L(a) ? a : H(a) ? [a] : [];
          }
          function f(a) {
            switch (a.length) {
              case 0:
                return c;
              case 1:
                return "auto" === b ? a[0] : a;
              default:
                return a;
            }
          }
          function g(a) {
            return !a;
          }
          function h(a, b) {
            return function(c) {
              c = e(c);
              var d = o(c, a);
              return b === !0 ? 0 === n(d, g).length : f(d);
            };
          }
          function i(a) {
            return function(b, c) {
              var d = e(b),
                f = e(c);
              if (d.length !== f.length) return !1;
              for (var g = 0; g < d.length; g++) if (!a(d[g], f[g])) return !1;
              return !0;
            };
          }
          (this.encode = h(d(a, "encode"))),
            (this.decode = h(d(a, "decode"))),
            (this.is = h(d(a, "is"), !0)),
            (this.equals = i(d(a, "equals"))),
            (this.pattern = a.pattern),
            (this.$normalize = h(d(a, "$normalize"))),
            (this.name = a.name),
            (this.$arrayMode = b);
        }
        if (!a) return this;
        if ("auto" === a && !b)
          throw new Error("'auto' array mode is for query parameters only");
        return new d(this, a);
      }),
      b.module("ui.router.util").provider("$urlMatcherFactory", t),
      b.module("ui.router.util").run(["$urlMatcherFactory", function(a) {}]),
      (u.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"]),
      b.module("ui.router.router").provider("$urlRouter", u),
      (v.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"]),
      b
        .module("ui.router.state")
        .value("$stateParams", {})
        .provider("$state", v),
      (w.$inject = []),
      b.module("ui.router.state").provider("$view", w),
      b.module("ui.router.state").provider("$uiViewScroll", x),
      (y.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate"]),
      (z.$inject = ["$compile", "$controller", "$state", "$interpolate"]),
      b.module("ui.router.state").directive("uiView", y),
      b.module("ui.router.state").directive("uiView", z),
      (D.$inject = ["$state", "$timeout"]),
      (E.$inject = ["$state", "$stateParams", "$interpolate"]),
      b
        .module("ui.router.state")
        .directive("uiSref", D)
        .directive("uiSrefActive", E)
        .directive("uiSrefActiveEq", E),
      (F.$inject = ["$state"]),
      (G.$inject = ["$state"]),
      b
        .module("ui.router.state")
        .filter("isState", F)
        .filter("includedByState", G);
  })(window, window.angular),
  (function(a, b) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["angular"], b)
      : "object" == typeof exports
      ? (module.exports = b(require("angular")))
      : b(a.angular);
  })(this, function(a) {
    "use strict";
    function b(b) {
      return [
        "$rootScope",
        "$window",
        "$log",
        "$timeout",
        function(c, d, e, f) {
          function g(a) {
            var b;
            try {
              b = d[a];
            } catch (c) {
              b = !1;
            }
            if (b && "localStorage" === a) {
              var e = "__" + Math.round(1e7 * Math.random());
              try {
                localStorage.setItem(e, e), localStorage.removeItem(e);
              } catch (c) {
                b = !1;
              }
            }
            return b;
          }
          var h,
            i,
            j =
              g(b) ||
              (e.warn("This browser does not support Web Storage!"),
              { setItem: function() {}, getItem: function() {} }),
            k = {
              $default: function(b) {
                for (var c in b) a.isDefined(k[c]) || (k[c] = b[c]);
                return k;
              },
              $reset: function(a) {
                for (var b in k)
                  "$" === b[0] ||
                    (delete k[b] && j.removeItem("ngStorage-" + b));
                return k.$default(a);
              }
            };
          try {
            (j = d[b]), j.length;
          } catch (l) {
            e.warn("This browser does not support Web Storage!"), (j = {});
          }
          for (var m, n = 0, o = j.length; o > n; n++)
            (m = j.key(n)) &&
              "ngStorage-" === m.slice(0, 10) &&
              (k[m.slice(10)] = a.fromJson(j.getItem(m)));
          return (
            (h = a.copy(k)),
            c.$watch(function() {
              var b;
              i ||
                (i = f(
                  function() {
                    if (((i = null), !a.equals(k, h))) {
                      (b = a.copy(h)),
                        a.forEach(k, function(c, d) {
                          a.isDefined(c) &&
                            "$" !== d[0] &&
                            j.setItem("ngStorage-" + d, a.toJson(c)),
                            delete b[d];
                        });
                      for (var c in b) j.removeItem("ngStorage-" + c);
                      h = a.copy(k);
                    }
                  },
                  100,
                  !1
                ));
            }),
            d.addEventListener &&
              d.addEventListener("storage", function(b) {
                "ngStorage-" === b.key.slice(0, 10) &&
                  (b.newValue
                    ? (k[b.key.slice(10)] = a.fromJson(b.newValue))
                    : delete k[b.key.slice(10)],
                  (h = a.copy(k)),
                  c.$apply());
              }),
            k
          );
        }
      ];
    }
    return a
      .module("ngStorage", [])
      .factory("$localStorage", b("localStorage"))
      .factory("$sessionStorage", b("sessionStorage"));
  }),
  angular.module("ui.alias", []).config([
    "$compileProvider",
    "uiAliasConfig",
    function(a, b) {
      "use strict";
      (b = b || {}),
        angular.forEach(b, function(b, c) {
          angular.isString(b) && (b = { replace: !0, template: b }),
            a.directive(c, function() {
              return b;
            });
        });
    }
  ]),
  angular.module("ui.event", []).directive("uiEvent", [
    "$parse",
    function(a) {
      "use strict";
      return function(b, c, d) {
        var e = b.$eval(d.uiEvent);
        angular.forEach(e, function(d, e) {
          var f = a(d);
          c.bind(e, function(a) {
            var c = Array.prototype.slice.call(arguments);
            (c = c.splice(1)),
              f(b, { $event: a, $params: c }),
              b.$$phase || b.$apply();
          });
        });
      };
    }
  ]),
  angular.module("ui.format", []).filter("format", function() {
    "use strict";
    return function(a, b) {
      var c = a;
      if (angular.isString(c) && void 0 !== b)
        if (
          (angular.isArray(b) || angular.isObject(b) || (b = [b]),
          angular.isArray(b))
        ) {
          var d = b.length,
            e = function(a, c) {
              return (c = parseInt(c, 10)), c >= 0 && d > c ? b[c] : a;
            };
          c = c.replace(/\$([0-9]+)/g, e);
        } else
          angular.forEach(b, function(a, b) {
            c = c.split(":" + b).join(a);
          });
      return c;
    };
  }),
  angular.module("ui.highlight", []).filter("highlight", function() {
    "use strict";
    return function(a, b, c) {
      return a && (b || angular.isNumber(b))
        ? ((a = a.toString()),
          (b = b.toString()),
          c
            ? a.split(b).join('<span class="ui-match">' + b + "</span>")
            : a.replace(
                new RegExp(b, "gi"),
                '<span class="ui-match">$&</span>'
              ))
        : a;
    };
  }),
  angular.module("ui.include", []).directive("uiInclude", [
    "$http",
    "$templateCache",
    "$anchorScroll",
    "$compile",
    function(a, b, c, d) {
      "use strict";
      return {
        restrict: "ECA",
        terminal: !0,
        compile: function(e, f) {
          var g = f.uiInclude || f.src,
            h = f.fragment || "",
            i = f.onload || "",
            j = f.autoscroll;
          return function(e, f) {
            function k() {
              var k = ++m,
                o = e.$eval(g),
                p = e.$eval(h);
              o
                ? a
                    .get(o, { cache: b })
                    .success(function(a) {
                      if (k === m) {
                        l && l.$destroy(), (l = e.$new());
                        var b;
                        (b = p
                          ? angular
                              .element("<div/>")
                              .html(a)
                              .find(p)
                          : angular
                              .element("<div/>")
                              .html(a)
                              .contents()),
                          f.html(b),
                          d(b)(l),
                          !angular.isDefined(j) || (j && !e.$eval(j)) || c(),
                          l.$emit("$includeContentLoaded"),
                          e.$eval(i);
                      }
                    })
                    .error(function() {
                      k === m && n();
                    })
                : n();
            }
            var l,
              m = 0,
              n = function() {
                l && (l.$destroy(), (l = null)), f.html("");
              };
            e.$watch(h, k), e.$watch(g, k);
          };
        }
      };
    }
  ]),
  angular.module("ui.indeterminate", []).directive("uiIndeterminate", [
    function() {
      "use strict";
      return {
        compile: function(a, b) {
          return b.type && "checkbox" === b.type.toLowerCase()
            ? function(a, b, c) {
                a.$watch(c.uiIndeterminate, function(a) {
                  b[0].indeterminate = !!a;
                });
              }
            : angular.noop;
        }
      };
    }
  ]),
  angular.module("ui.inflector", []).filter("inflector", function() {
    "use strict";
    function a(a) {
      return (
        (a = a.replace(/([A-Z])|([\-|\_])/g, function(a, b) {
          return " " + (b || "");
        })),
        a
          .replace(/\s\s+/g, " ")
          .trim()
          .toLowerCase()
          .split(" ")
      );
    }
    function b(a) {
      var b = [];
      return (
        angular.forEach(a, function(a) {
          b.push(a.charAt(0).toUpperCase() + a.substr(1));
        }),
        b
      );
    }
    var c = {
      humanize: function(c) {
        return b(a(c)).join(" ");
      },
      underscore: function(b) {
        return a(b).join("_");
      },
      variable: function(c) {
        return (c = a(c)), (c = c[0] + b(c.slice(1)).join(""));
      }
    };
    return function(a, b) {
      return b !== !1 && angular.isString(a)
        ? ((b = b || "humanize"), c[b](a))
        : a;
    };
  }),
  angular
    .module("ui.jq", [])
    .value("uiJqConfig", {})
    .directive("uiJq", [
      "uiJqConfig",
      "$timeout",
      function(a, b) {
        "use strict";
        return {
          restrict: "A",
          compile: function(c, d) {
            if (!angular.isFunction(c[d.uiJq]))
              throw new Error(
                'ui-jq: The "' + d.uiJq + '" function does not exist'
              );
            var e = a && a[d.uiJq];
            return function(a, c, d) {
              function f() {
                var b = [];
                return (
                  d.uiOptions
                    ? ((b = a.$eval("[" + d.uiOptions + "]")),
                      angular.isObject(e) &&
                        angular.isObject(b[0]) &&
                        (b[0] = angular.extend({}, e, b[0])))
                    : e && (b = [e]),
                  b
                );
              }
              function g() {
                b(
                  function() {
                    c[d.uiJq].apply(c, f());
                  },
                  0,
                  !1
                );
              }
              d.ngModel &&
                c.is("select,input,textarea") &&
                c.bind("change", function() {
                  c.trigger("input");
                }),
                d.uiRefresh &&
                  a.$watch(d.uiRefresh, function() {
                    g();
                  }),
                g();
            };
          }
        };
      }
    ]),
  angular.module("ui.keypress", []).factory("keypressHelper", [
    "$parse",
    function(a) {
      "use strict";
      var b = {
          8: "backspace",
          9: "tab",
          13: "enter",
          27: "esc",
          32: "space",
          33: "pageup",
          34: "pagedown",
          35: "end",
          36: "home",
          37: "left",
          38: "up",
          39: "right",
          40: "down",
          45: "insert",
          46: "delete"
        },
        c = function(a) {
          return a.charAt(0).toUpperCase() + a.slice(1);
        };
      return function(d, e, f, g) {
        var h,
          i = [];
        (h = e.$eval(g["ui" + c(d)])),
          angular.forEach(h, function(b, c) {
            var d, e;
            (e = a(b)),
              angular.forEach(c.split(" "), function(a) {
                (d = { expression: e, keys: {} }),
                  angular.forEach(a.split("-"), function(a) {
                    d.keys[a] = !0;
                  }),
                  i.push(d);
              });
          }),
          f.bind(d, function(a) {
            var c = !(!a.metaKey || a.ctrlKey),
              f = !!a.altKey,
              g = !!a.ctrlKey,
              h = !!a.shiftKey,
              j = a.keyCode;
            "keypress" === d && !h && j >= 97 && 122 >= j && (j -= 32),
              angular.forEach(i, function(d) {
                var i = d.keys[b[j]] || d.keys[j.toString()],
                  k = !!d.keys.meta,
                  l = !!d.keys.alt,
                  m = !!d.keys.ctrl,
                  n = !!d.keys.shift;
                i &&
                  k === c &&
                  l === f &&
                  m === g &&
                  n === h &&
                  e.$apply(function() {
                    d.expression(e, { $event: a });
                  });
              });
          });
      };
    }
  ]),
  angular.module("ui.keypress").directive("uiKeydown", [
    "keypressHelper",
    function(a) {
      "use strict";
      return {
        link: function(b, c, d) {
          a("keydown", b, c, d);
        }
      };
    }
  ]),
  angular.module("ui.keypress").directive("uiKeypress", [
    "keypressHelper",
    function(a) {
      "use strict";
      return {
        link: function(b, c, d) {
          a("keypress", b, c, d);
        }
      };
    }
  ]),
  angular.module("ui.keypress").directive("uiKeyup", [
    "keypressHelper",
    function(a) {
      "use strict";
      return {
        link: function(b, c, d) {
          a("keyup", b, c, d);
        }
      };
    }
  ]),
  angular
    .module("ui.mask", [])
    .value("uiMaskConfig", {
      maskDefinitions: { 9: /\d/, A: /[a-zA-Z]/, "*": /[a-zA-Z0-9]/ },
      clearOnBlur: !0
    })
    .directive("uiMask", [
      "uiMaskConfig",
      "$parse",
      function(a, b) {
        "use strict";
        return {
          priority: 100,
          require: "ngModel",
          restrict: "A",
          compile: function() {
            var c = a;
            return function(a, d, e, f) {
              function g(a) {
                return angular.isDefined(a)
                  ? (t(a), O ? (l(), m(), !0) : k())
                  : k();
              }
              function h(a) {
                angular.isDefined(a) && ((E = a), O && x());
              }
              function i(a) {
                return O
                  ? ((H = p(a || "")),
                    (J = o(H)),
                    f.$setValidity("mask", J),
                    J && H.length ? q(H) : void 0)
                  : a;
              }
              function j(a) {
                return O
                  ? ((H = p(a || "")),
                    (J = o(H)),
                    (f.$viewValue = H.length ? q(H) : ""),
                    f.$setValidity("mask", J),
                    "" === H &&
                      e.required &&
                      f.$setValidity("required", !f.$error.required),
                    J ? H : void 0)
                  : a;
              }
              function k() {
                return (
                  (O = !1),
                  n(),
                  angular.isDefined(Q)
                    ? d.attr("placeholder", Q)
                    : d.removeAttr("placeholder"),
                  angular.isDefined(R)
                    ? d.attr("maxlength", R)
                    : d.removeAttr("maxlength"),
                  d.val(f.$modelValue),
                  (f.$viewValue = f.$modelValue),
                  !1
                );
              }
              function l() {
                (H = L = p(f.$viewValue || "")), (I = K = q(H)), (J = o(H));
                var a = J && H.length ? I : "";
                e.maxlength && d.attr("maxlength", 2 * C[C.length - 1]),
                  d.attr("placeholder", E),
                  d.val(a),
                  (f.$viewValue = a);
              }
              function m() {
                P ||
                  (d.bind("blur", u),
                  d.bind("mousedown mouseup", v),
                  d.bind("input keyup click focus", x),
                  (P = !0));
              }
              function n() {
                P &&
                  (d.unbind("blur", u),
                  d.unbind("mousedown", v),
                  d.unbind("mouseup", v),
                  d.unbind("input", x),
                  d.unbind("keyup", x),
                  d.unbind("click", x),
                  d.unbind("focus", x),
                  (P = !1));
              }
              function o(a) {
                return a.length ? a.length >= G : !0;
              }
              function p(a) {
                var b = "",
                  c = D.slice();
                return (
                  (a = a.toString()),
                  angular.forEach(F, function(b) {
                    a = a.replace(b, "");
                  }),
                  angular.forEach(a.split(""), function(a) {
                    c.length && c[0].test(a) && ((b += a), c.shift());
                  }),
                  b
                );
              }
              function q(a) {
                var b = "",
                  c = C.slice();
                return (
                  angular.forEach(E.split(""), function(d, e) {
                    a.length && e === c[0]
                      ? ((b += a.charAt(0) || "_"),
                        (a = a.substr(1)),
                        c.shift())
                      : (b += d);
                  }),
                  b
                );
              }
              function r(a) {
                var b = e.placeholder;
                return "undefined" != typeof b && b[a] ? b[a] : "_";
              }
              function s() {
                return E.replace(/[_]+/g, "_")
                  .replace(/([^_]+)([a-zA-Z0-9])([^_])/g, "$1$2_$3")
                  .split("_");
              }
              function t(a) {
                var b = 0;
                if (((C = []), (D = []), (E = ""), "string" == typeof a)) {
                  G = 0;
                  var c = !1,
                    d = 0,
                    e = a.split("");
                  angular.forEach(e, function(a, e) {
                    S.maskDefinitions[a]
                      ? (C.push(b),
                        (E += r(e - d)),
                        D.push(S.maskDefinitions[a]),
                        b++,
                        c || G++)
                      : "?" === a
                      ? ((c = !0), d++)
                      : ((E += a), b++);
                  });
                }
                C.push(C.slice().pop() + 1),
                  (F = s()),
                  (O = C.length > 1 ? !0 : !1);
              }
              function u() {
                S.clearOnBlur &&
                  ((M = 0),
                  (N = 0),
                  (J && 0 !== H.length) ||
                    ((I = ""),
                    d.val(""),
                    a.$apply(function() {
                      f.$setViewValue("");
                    })));
              }
              function v(a) {
                "mousedown" === a.type
                  ? d.bind("mouseout", w)
                  : d.unbind("mouseout", w);
              }
              function w() {
                (N = B(this)), d.unbind("mouseout", w);
              }
              function x(b) {
                b = b || {};
                var c = b.which,
                  e = b.type;
                if (16 !== c && 91 !== c) {
                  var g,
                    h = d.val(),
                    i = K,
                    j = p(h),
                    k = L,
                    l = !1,
                    m = z(this) || 0,
                    n = M || 0,
                    o = m - n,
                    r = C[0],
                    s = C[j.length] || C.slice().shift(),
                    t = N || 0,
                    u = B(this) > 0,
                    v = t > 0,
                    w = h.length > i.length || (t && h.length > i.length - t),
                    x = h.length < i.length || (t && h.length === i.length - t),
                    D = c >= 37 && 40 >= c && b.shiftKey,
                    E = 37 === c,
                    F = 8 === c || ("keyup" !== e && x && -1 === o),
                    G = 46 === c || ("keyup" !== e && x && 0 === o && !v),
                    H = (E || F || "click" === e) && m > r;
                  if (
                    ((N = B(this)),
                    !D && (!u || ("click" !== e && "keyup" !== e)))
                  ) {
                    if ("input" === e && x && !v && j === k) {
                      for (; F && m > r && !y(m); ) m--;
                      for (; G && s > m && -1 === C.indexOf(m); ) m++;
                      var I = C.indexOf(m);
                      (j = j.substring(0, I) + j.substring(I + 1)), (l = !0);
                    }
                    for (
                      g = q(j),
                        K = g,
                        L = j,
                        d.val(g),
                        l &&
                          a.$apply(function() {
                            f.$setViewValue(j);
                          }),
                        w && r >= m && (m = r + 1),
                        H && m--,
                        m = m > s ? s : r > m ? r : m;
                      !y(m) && m > r && s > m;

                    )
                      m += H ? -1 : 1;
                    ((H && s > m) || (w && !y(n))) && m++, (M = m), A(this, m);
                  }
                }
              }
              function y(a) {
                return C.indexOf(a) > -1;
              }
              function z(a) {
                if (!a) return 0;
                if (void 0 !== a.selectionStart) return a.selectionStart;
                if (document.selection) {
                  a.focus();
                  var b = document.selection.createRange();
                  return (
                    b.moveStart("character", a.value ? -a.value.length : 0),
                    b.text.length
                  );
                }
                return 0;
              }
              function A(a, b) {
                if (!a) return 0;
                if (0 !== a.offsetWidth && 0 !== a.offsetHeight)
                  if (a.setSelectionRange) a.focus(), a.setSelectionRange(b, b);
                  else if (a.createTextRange) {
                    var c = a.createTextRange();
                    c.collapse(!0),
                      c.moveEnd("character", b),
                      c.moveStart("character", b),
                      c.select();
                  }
              }
              function B(a) {
                return a
                  ? void 0 !== a.selectionStart
                    ? a.selectionEnd - a.selectionStart
                    : document.selection
                    ? document.selection.createRange().text.length
                    : 0
                  : 0;
              }
              var C,
                D,
                E,
                F,
                G,
                H,
                I,
                J,
                K,
                L,
                M,
                N,
                O = !1,
                P = !1,
                Q = e.placeholder,
                R = e.maxlength,
                S = {};
              e.uiOptions
                ? ((S = a.$eval("[" + e.uiOptions + "]")),
                  angular.isObject(S[0]) &&
                    (S = (function(a, b) {
                      for (var c in a)
                        Object.prototype.hasOwnProperty.call(a, c) &&
                          (void 0 === b[c]
                            ? (b[c] = angular.copy(a[c]))
                            : angular.extend(b[c], a[c]));
                      return b;
                    })(c, S[0])))
                : (S = c),
                e.$observe("uiMask", g),
                e.$observe("placeholder", h);
              var T = !1;
              e.$observe("modelViewValue", function(a) {
                "true" === a && (T = !0);
              }),
                a.$watch(e.ngModel, function(c) {
                  if (T && c) {
                    var d = b(e.ngModel);
                    d.assign(a, f.$viewValue);
                  }
                }),
                f.$formatters.push(i),
                f.$parsers.push(j),
                d.bind("mousedown mouseup", v),
                Array.prototype.indexOf ||
                  (Array.prototype.indexOf = function(a) {
                    if (null === this) throw new TypeError();
                    var b = Object(this),
                      c = b.length >>> 0;
                    if (0 === c) return -1;
                    var d = 0;
                    if (
                      (arguments.length > 1 &&
                        ((d = Number(arguments[1])),
                        d !== d
                          ? (d = 0)
                          : 0 !== d &&
                            d !== 1 / 0 &&
                            d !== -(1 / 0) &&
                            (d = (d > 0 || -1) * Math.floor(Math.abs(d)))),
                      d >= c)
                    )
                      return -1;
                    for (
                      var e = d >= 0 ? d : Math.max(c - Math.abs(d), 0);
                      c > e;
                      e++
                    )
                      if (e in b && b[e] === a) return e;
                    return -1;
                  });
            };
          }
        };
      }
    ]),
  angular
    .module("ui.reset", [])
    .value("uiResetConfig", null)
    .directive("uiReset", [
      "uiResetConfig",
      function(a) {
        "use strict";
        var b = null;
        return (
          void 0 !== a && (b = a),
          {
            require: "ngModel",
            link: function(a, c, d, e) {
              var f;
              (f = angular.element('<a class="ui-reset" />')),
                c.wrap('<span class="ui-resetwrap" />').after(f),
                f.bind("click", function(c) {
                  c.preventDefault(),
                    a.$apply(function() {
                      d.uiReset
                        ? e.$setViewValue(a.$eval(d.uiReset))
                        : e.$setViewValue(b),
                        e.$render();
                    });
                });
            }
          }
        );
      }
    ]),
  angular.module("ui.route", []).directive("uiRoute", [
    "$location",
    "$parse",
    function(a, b) {
      "use strict";
      return {
        restrict: "AC",
        scope: !0,
        compile: function(c, d) {
          var e;
          if (d.uiRoute) e = "uiRoute";
          else if (d.ngHref) e = "ngHref";
          else {
            if (!d.href)
              throw new Error(
                "uiRoute missing a route or href property on " + c[0]
              );
            e = "href";
          }
          return function(c, d, f) {
            function g(b) {
              var d = b.indexOf("#");
              d > -1 && (b = b.substr(d + 1)),
                (j = function() {
                  i(c, a.path().indexOf(b) > -1);
                })();
            }
            function h(b) {
              var d = b.indexOf("#");
              d > -1 && (b = b.substr(d + 1)),
                (j = function() {
                  var d = new RegExp("^" + b + "$", ["i"]);
                  i(c, d.test(a.path()));
                })();
            }
            var i = b(f.ngModel || f.routeModel || "$uiRoute").assign,
              j = angular.noop;
            switch (e) {
              case "uiRoute":
                f.uiRoute ? h(f.uiRoute) : f.$observe("uiRoute", h);
                break;
              case "ngHref":
                f.ngHref ? g(f.ngHref) : f.$observe("ngHref", g);
                break;
              case "href":
                g(f.href);
            }
            c.$on("$routeChangeSuccess", function() {
              j();
            }),
              c.$on("$stateChangeSuccess", function() {
                j();
              });
          };
        }
      };
    }
  ]),
  angular
    .module("ui.scroll.jqlite", ["ui.scroll"])
    .service("jqLiteExtras", [
      "$log",
      "$window",
      function(a, b) {
        "use strict";
        return {
          registerFor: function(a) {
            var c, d, e, f, g, h, i;
            return (
              (d = angular.element.prototype.css),
              (a.prototype.css = function(a, b) {
                var c, e;
                return (
                  (e = this),
                  (c = e[0]),
                  c && 3 !== c.nodeType && 8 !== c.nodeType && c.style
                    ? d.call(e, a, b)
                    : void 0
                );
              }),
              (h = function(a) {
                return (
                  a && a.document && a.location && a.alert && a.setInterval
                );
              }),
              (i = function(a, b, c) {
                var d, e, f, g, i;
                return (
                  (d = a[0]),
                  (i = {
                    top: ["scrollTop", "pageYOffset", "scrollLeft"],
                    left: ["scrollLeft", "pageXOffset", "scrollTop"]
                  }[b]),
                  (e = i[0]),
                  (g = i[1]),
                  (f = i[2]),
                  h(d)
                    ? angular.isDefined(c)
                      ? d.scrollTo(a[f].call(a), c)
                      : g in d
                      ? d[g]
                      : d.document.documentElement[e]
                    : angular.isDefined(c)
                    ? (d[e] = c)
                    : d[e]
                );
              }),
              b.getComputedStyle
                ? ((f = function(a) {
                    return b.getComputedStyle(a, null);
                  }),
                  (c = function(a, b) {
                    return parseFloat(b);
                  }))
                : ((f = function(a) {
                    return a.currentStyle;
                  }),
                  (c = function(a, b) {
                    var c, d, e, f, g, h, i;
                    return (
                      (c = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source),
                      (f = new RegExp("^(" + c + ")(?!px)[a-z%]+$", "i")),
                      f.test(b)
                        ? ((i = a.style),
                          (d = i.left),
                          (g = a.runtimeStyle),
                          (h = g && g.left),
                          g && (g.left = i.left),
                          (i.left = b),
                          (e = i.pixelLeft),
                          (i.left = d),
                          h && (g.left = h),
                          e)
                        : parseFloat(b)
                    );
                  })),
              (e = function(a, b) {
                var d, e, g, i, j, k, l, m, n, o, p, q, r;
                return h(a)
                  ? ((d =
                      document.documentElement[
                        {
                          height: "clientHeight",
                          width: "clientWidth"
                        }[b]
                      ]),
                    { base: d, padding: 0, border: 0, margin: 0 })
                  : ((r = {
                      width: [a.offsetWidth, "Left", "Right"],
                      height: [a.offsetHeight, "Top", "Bottom"]
                    }[b]),
                    (d = r[0]),
                    (l = r[1]),
                    (m = r[2]),
                    (k = f(a)),
                    (p = c(a, k["padding" + l]) || 0),
                    (q = c(a, k["padding" + m]) || 0),
                    (e = c(a, k["border" + l + "Width"]) || 0),
                    (g = c(a, k["border" + m + "Width"]) || 0),
                    (i = k["margin" + l]),
                    (j = k["margin" + m]),
                    (n = c(a, i) || 0),
                    (o = c(a, j) || 0),
                    { base: d, padding: p + q, border: e + g, margin: n + o });
              }),
              (g = function(a, b, c) {
                var d, g, h;
                return (
                  (g = e(a, b)),
                  g.base > 0
                    ? {
                        base: g.base - g.padding - g.border,
                        outer: g.base,
                        outerfull: g.base + g.margin
                      }[c]
                    : ((d = f(a)),
                      (h = d[b]),
                      (0 > h || null === h) && (h = a.style[b] || 0),
                      (h = parseFloat(h) || 0),
                      {
                        base: h - g.padding - g.border,
                        outer: h,
                        outerfull: h + g.padding + g.border + g.margin
                      }[c])
                );
              }),
              angular.forEach(
                {
                  before: function(a) {
                    var b, c, d, e, f, g, h;
                    if (
                      ((f = this),
                      (c = f[0]),
                      (e = f.parent()),
                      (b = e.contents()),
                      b[0] === c)
                    )
                      return e.prepend(a);
                    for (
                      d = g = 1, h = b.length - 1;
                      h >= 1 ? h >= g : g >= h;
                      d = h >= 1 ? ++g : --g
                    )
                      if (b[d] === c)
                        return void angular.element(b[d - 1]).after(a);
                    throw new Error("invalid DOM structure " + c.outerHTML);
                  },
                  height: function(a) {
                    var b;
                    return (
                      (b = this),
                      angular.isDefined(a)
                        ? (angular.isNumber(a) && (a += "px"),
                          d.call(b, "height", a))
                        : g(this[0], "height", "base")
                    );
                  },
                  outerHeight: function(a) {
                    return g(this[0], "height", a ? "outerfull" : "outer");
                  },
                  offset: function(a) {
                    var b, c, d, e, f, g;
                    if (((f = this), arguments.length)) {
                      if (void 0 === a) return f;
                      throw new Error(
                        "offset setter method is not implemented"
                      );
                    }
                    return (
                      (b = { top: 0, left: 0 }),
                      (e = f[0]),
                      (c = e && e.ownerDocument)
                        ? ((d = c.documentElement),
                          null != e.getBoundingClientRect &&
                            (b = e.getBoundingClientRect()),
                          (g = c.defaultView || c.parentWindow),
                          {
                            top:
                              b.top +
                              (g.pageYOffset || d.scrollTop) -
                              (d.clientTop || 0),
                            left:
                              b.left +
                              (g.pageXOffset || d.scrollLeft) -
                              (d.clientLeft || 0)
                          })
                        : void 0
                    );
                  },
                  scrollTop: function(a) {
                    return i(this, "top", a);
                  },
                  scrollLeft: function(a) {
                    return i(this, "left", a);
                  }
                },
                function(b, c) {
                  return a.prototype[c] ? void 0 : (a.prototype[c] = b);
                }
              )
            );
          }
        };
      }
    ])
    .run([
      "$log",
      "$window",
      "jqLiteExtras",
      function(a, b, c) {
        "use strict";
        return b.jQuery ? void 0 : c.registerFor(angular.element);
      }
    ]),
  angular
    .module("ui.scroll", [])
    .directive("uiScrollViewport", [
      "$log",
      function() {
        "use strict";
        return {
          controller: [
            "$scope",
            "$element",
            function(a, b) {
              return (this.viewport = b), this;
            }
          ]
        };
      }
    ])
    .directive("uiScroll", [
      "$log",
      "$injector",
      "$rootScope",
      "$timeout",
      function(a, b, c, d) {
        "use strict";
        return {
          require: ["?^uiScrollViewport"],
          transclude: "element",
          priority: 1e3,
          terminal: !0,
          compile: function(e, f, g) {
            return function(e, f, h, i) {
              var j,
                k,
                l,
                m,
                n,
                o,
                p,
                q,
                r,
                s,
                t,
                u,
                v,
                w,
                x,
                y,
                z,
                A,
                B,
                C,
                D,
                E,
                F,
                G,
                H,
                I,
                J,
                K,
                L,
                M,
                N,
                O,
                P,
                Q,
                R,
                S,
                T,
                U,
                V,
                W,
                X,
                Y,
                Z,
                $,
                _,
                aa,
                ba,
                ca,
                da;
              if (
                ((O = a.debug || a.log),
                (P = h.uiScroll.match(/^\s*(\w+)\s+in\s+([\w\.]+)\s*$/)),
                !P)
              )
                throw new Error(
                  "Expected uiScroll in form of '_item_ in _datasource_' but got '" +
                    h.uiScroll +
                    "'"
                );
              if (
                ((M = P[1]),
                (x = P[2]),
                (I = function(a, b) {
                  var c;
                  if (a)
                    return (
                      (c = b.match(/^([\w]+)\.(.+)$/)),
                      c && 3 === c.length ? I(a[c[1]], c[2]) : a[b]
                    );
                }),
                (X = function(a, b, c, d) {
                  var e;
                  if (
                    a &&
                    b &&
                    ((e = b.match(/^([\w]+)\.(.+)$/)) || -1 === b.indexOf("."))
                  )
                    return e && 3 === e.length
                      ? (angular.isObject(a[e[1]]) || d || (a[e[1]] = {}),
                        X(a[e[1]], e[2], c, d))
                      : angular.isObject(a[b]) || d
                      ? (a[b] = c)
                      : (a[b] = c);
                }),
                (w = I(e, x)),
                (L = function() {
                  return angular.isObject(w) && "function" == typeof w.get;
                }),
                !L() && ((w = b.get(x)), !L()))
              )
                throw new Error("" + x + " is not a valid datasource");
              return (
                (s = Math.max(3, +h.bufferSize || 10)),
                (r = function() {
                  return ba.outerHeight() * Math.max(0.1, +h.padding || 0.1);
                }),
                (W = function(a) {
                  var b;
                  return null != (b = a[0].scrollHeight)
                    ? b
                    : a[0].document.documentElement.scrollHeight;
                }),
                (t = null),
                g(e.$new(), function(a) {
                  var b, c, d, g, h, j;
                  if (((g = a[0].localName), "dl" === g))
                    throw new Error(
                      "ui-scroll directive does not support <" +
                        a[0].localName +
                        "> as a repeating tag: " +
                        a[0].outerHTML
                    );
                  return (
                    "li" !== g && "tr" !== g && (g = "div"),
                    (j =
                      i[0] && i[0].viewport
                        ? i[0].viewport
                        : angular.element(window)),
                    j.css({ "overflow-y": "auto", display: "block" }),
                    (d = function(a) {
                      var b, c, d;
                      switch (a) {
                        case "tr":
                          return (
                            (d = angular.element(
                              "<table><tr><td><div></div></td></tr></table>"
                            )),
                            (b = d.find("div")),
                            (c = d.find("tr")),
                            (c.paddingHeight = function() {
                              return b.height.apply(b, arguments);
                            }),
                            c
                          );
                        default:
                          return (
                            (c = angular.element("<" + a + "></" + a + ">")),
                            (c.paddingHeight = c.height),
                            c
                          );
                      }
                    }),
                    (c = function(a, b, c) {
                      return (
                        b[{ top: "before", bottom: "after" }[c]](a),
                        {
                          paddingHeight: function() {
                            return a.paddingHeight.apply(a, arguments);
                          },
                          insert: function(b) {
                            return a[{ top: "after", bottom: "before" }[c]](b);
                          }
                        }
                      );
                    }),
                    (h = c(d(g), f, "top")),
                    (b = c(d(g), f, "bottom")),
                    e.$on("$destroy", a.remove),
                    (t = {
                      viewport: j,
                      topPadding: h.paddingHeight,
                      bottomPadding: b.paddingHeight,
                      append: b.insert,
                      prepend: h.insert,
                      bottomDataPos: function() {
                        return W(j) - b.paddingHeight();
                      },
                      topDataPos: function() {
                        return h.paddingHeight();
                      }
                    })
                  );
                }),
                (ba = t.viewport),
                (ca = ba.scope() || c),
                (_ = function(a) {
                  return (
                    (j.topVisible = a.scope[M]),
                    (j.topVisibleElement = a.element),
                    (j.topVisibleScope = a.scope),
                    h.topVisible && X(ca, h.topVisible, j.topVisible),
                    h.topVisibleElement &&
                      X(ca, h.topVisibleElement, j.topVisibleElement),
                    h.topVisibleScope &&
                      X(ca, h.topVisibleScope, j.topVisibleScope),
                    "function" == typeof w.topVisible ? w.topVisible(a) : void 0
                  );
                }),
                (N = function(a) {
                  return (
                    (j.isLoading = a),
                    h.isLoading && X(e, h.isLoading, a),
                    "function" == typeof w.loading ? w.loading(a) : void 0
                  );
                }),
                (V = 0),
                (H = 1),
                (Q = 1),
                (q = []),
                (R = []),
                (D = !1),
                (o = !1),
                (T = function(a, b) {
                  var c, d;
                  for (
                    c = d = a;
                    b >= a ? b > d : d > b;
                    c = b >= a ? ++d : --d
                  )
                    q[c].scope.$destroy(), q[c].element.remove();
                  return q.splice(a, b - a);
                }),
                (S = function() {
                  return (
                    V++,
                    (H = 1),
                    (Q = 1),
                    T(0, q.length),
                    t.topPadding(0),
                    t.bottomPadding(0),
                    (R = []),
                    (D = !1),
                    (o = !1),
                    l(V)
                  );
                }),
                (p = function() {
                  return ba.scrollTop() + ba.outerHeight();
                }),
                (aa = function() {
                  return ba.scrollTop();
                }),
                (Y = function() {
                  return !D && t.bottomDataPos() < p() + r();
                }),
                (u = function() {
                  var a, b, c, d, e, f, g, h, i, j;
                  for (
                    a = 0, g = 0, b = i = j = q.length - 1;
                    0 >= j ? 0 >= i : i >= 0;
                    b = 0 >= j ? ++i : --i
                  )
                    if (
                      ((c = q[b]),
                      (e = c.element.offset().top),
                      (f = h !== e),
                      (h = e),
                      f && (d = c.element.outerHeight(!0)),
                      t.bottomDataPos() - a - d > p() + r())
                    )
                      f && (a += d), g++, (D = !1);
                    else {
                      if (f) break;
                      g++;
                    }
                  return g > 0
                    ? (t.bottomPadding(t.bottomPadding() + a),
                      T(q.length - g, q.length),
                      (Q -= g))
                    : void 0;
                }),
                (Z = function() {
                  return !o && t.topDataPos() > aa() - r();
                }),
                (v = function() {
                  var a, b, c, d, e, f, g, h, i;
                  for (g = 0, e = 0, h = 0, i = q.length; i > h; h++)
                    if (
                      ((a = q[h]),
                      (c = a.element.offset().top),
                      (d = f !== c),
                      (f = c),
                      d && (b = a.element.outerHeight(!0)),
                      t.topDataPos() + g + b < aa() - r())
                    )
                      d && (g += b), e++, (o = !1);
                    else {
                      if (d) break;
                      e++;
                    }
                  return e > 0
                    ? (t.topPadding(t.topPadding() + g), T(0, e), (H += e))
                    : void 0;
                }),
                (C = function(a, b) {
                  return j.isLoading || N(!0), 1 === R.push(b) ? F(a) : void 0;
                }),
                (J = function(a) {
                  return (
                    (a.displayTemp = a.css("display")), a.css("display", "none")
                  );
                }),
                ($ = function(a) {
                  return a.hasOwnProperty("displayTemp")
                    ? a.css("display", a.displayTemp)
                    : void 0;
                }),
                (K = function(a, b) {
                  var c, d, f;
                  return (
                    (c = e.$new()),
                    (c[M] = b),
                    (d = a > H),
                    (c.$index = a),
                    d && c.$index--,
                    (f = { scope: c }),
                    g(c, function(b) {
                      return (
                        (f.element = b),
                        d
                          ? a === Q
                            ? (J(b), t.append(b), q.push(f))
                            : (q[a - H].element.after(b),
                              q.splice(a - H + 1, 0, f))
                          : (J(b), t.prepend(b), q.unshift(f))
                      );
                    }),
                    { appended: d, wrapper: f }
                  );
                }),
                (m = function(a, b) {
                  var c;
                  return a
                    ? t.bottomPadding(
                        Math.max(
                          0,
                          t.bottomPadding() - b.element.outerHeight(!0)
                        )
                      )
                    : ((c = t.topPadding() - b.element.outerHeight(!0)),
                      c >= 0
                        ? t.topPadding(c)
                        : ba.scrollTop(
                            ba.scrollTop() + b.element.outerHeight(!0)
                          ));
                }),
                (y = function(a, b) {
                  var c, d, e, f, g, h, i, j, k;
                  if (
                    (Y() ? C(a, !0) : Z() && C(a, !1),
                    b && b(a),
                    0 === R.length)
                  ) {
                    for (h = 0, k = [], i = 0, j = q.length; j > i; i++) {
                      if (
                        ((c = q[i]),
                        (e = c.element.offset().top),
                        (f = g !== e),
                        (g = e),
                        f && (d = c.element.outerHeight(!0)),
                        !(f && t.topDataPos() + h + d < aa()))
                      ) {
                        f && _(c);
                        break;
                      }
                      k.push((h += d));
                    }
                    return k;
                  }
                }),
                (l = function(a, b, c) {
                  return b && b.length
                    ? d(function() {
                        var d, e, f, g, h, i, j, k, l;
                        for (h = [], i = 0, k = b.length; k > i; i++)
                          (f = b[i]),
                            (d = f.wrapper.element),
                            $(d),
                            (e = d.offset().top),
                            g !== e && (h.push(f), (g = e));
                        for (j = 0, l = h.length; l > j; j++)
                          (f = h[j]), m(f.appended, f.wrapper);
                        return y(a, c);
                      })
                    : y(a, c);
                }),
                (G = function(a, b) {
                  return l(a, b, function() {
                    return R.shift(), 0 === R.length ? N(!1) : F(a);
                  });
                }),
                (F = function(a) {
                  var b;
                  return (
                    (b = R[0]),
                    b
                      ? q.length && !Y()
                        ? G(a)
                        : w.get(Q, s, function(b) {
                            var c, d, f, g;
                            if (!((a && a !== V) || e.$$destroyed)) {
                              if (
                                ((d = []),
                                b.length < s && ((D = !0), t.bottomPadding(0)),
                                b.length > 0)
                              )
                                for (v(), f = 0, g = b.length; g > f; f++)
                                  (c = b[f]), d.push(K(++Q, c));
                              return G(a, d);
                            }
                          })
                      : q.length && !Z()
                      ? G(a)
                      : w.get(H - s, s, function(b) {
                          var c, d, f, g;
                          if (!((a && a !== V) || e.$$destroyed)) {
                            if (
                              ((d = []),
                              b.length < s && ((o = !0), t.topPadding(0)),
                              b.length > 0)
                            )
                              for (
                                q.length && u(), c = f = g = b.length - 1;
                                0 >= g ? 0 >= f : f >= 0;
                                c = 0 >= g ? ++f : --f
                              )
                                d.unshift(K(--H, b[c]));
                            return G(a, d);
                          }
                        })
                  );
                }),
                (U = function() {
                  return c.$$phase || j.isLoading ? void 0 : (l(), e.$apply());
                }),
                (da = function(a) {
                  var b, c;
                  return (
                    (b = ba[0].scrollTop),
                    (c = ba[0].scrollHeight - ba[0].clientHeight),
                    (0 === b && !o) || (b === c && !D)
                      ? a.preventDefault()
                      : void 0
                  );
                }),
                ba.bind("resize", U),
                ba.bind("scroll", U),
                ba.bind("mousewheel", da),
                e.$watch(w.revision, S),
                (E = w.scope ? w.scope.$new() : e.$new()),
                e.$on("$destroy", function() {
                  var a, b, c;
                  for (b = 0, c = q.length; c > b; b++)
                    (a = q[b]), a.scope.$destroy(), a.element.remove();
                  return (
                    ba.unbind("resize", U),
                    ba.unbind("scroll", U),
                    ba.unbind("mousewheel", da)
                  );
                }),
                (j = {}),
                (j.isLoading = !1),
                (n = function(a, b) {
                  var c, d, e, f, g, h, i, j, k, l, m, n;
                  if (((d = []), angular.isArray(b)))
                    if (b.length) {
                      if (1 === b.length && b[0] === a.scope[M]) return d;
                      for (
                        f = a.scope.$index,
                          h = f > H ? f - H : 1,
                          c = i = 0,
                          l = b.length;
                        l > i;
                        c = ++i
                      )
                        (g = b[c]), d.push(K(f + c, g));
                      for (T(h, h + 1), c = j = 0, m = q.length; m > j; c = ++j)
                        (e = q[c]), (e.scope.$index = H + c);
                    } else
                      for (
                        T(a.scope.$index - H, a.scope.$index - H + 1),
                          Q--,
                          c = k = 0,
                          n = q.length;
                        n > k;
                        c = ++k
                      )
                        (e = q[c]), (e.scope.$index = H + c);
                  return d;
                }),
                (j.applyUpdates = function(a, b) {
                  var c, d, e, f, g, h;
                  if (((c = []), V++, angular.isFunction(a)))
                    for (g = q.slice(0), e = 0, f = g.length; f > e; e++)
                      (d = g[e]),
                        c.concat(c, n(d, a(d.scope[M], d.scope, d.element)));
                  else {
                    if (a % 1 !== 0)
                      throw new Error(
                        "applyUpdates - " +
                          a +
                          " is not a valid index or outside of range"
                      );
                    0 <= (h = a - H - 1) &&
                      h < q.length &&
                      (c = n(q[a - H], b));
                  }
                  return l(V, c);
                }),
                h.adapter &&
                  ((k = I(e, h.adapter)),
                  k || (X(e, h.adapter, {}), (k = I(e, h.adapter))),
                  angular.extend(k, j),
                  (j = k)),
                (B = function(a, b) {
                  var c, d, e, f, g;
                  if (angular.isFunction(a))
                    for (
                      d = function(b) {
                        return a(b.scope);
                      },
                        e = 0,
                        f = q.length;
                      f > e;
                      e++
                    )
                      (c = q[e]), d(c);
                  else
                    0 <= (g = a - H - 1) &&
                      g < q.length &&
                      (q[a - H - 1].scope[M] = b);
                  return null;
                }),
                (z = function(a) {
                  var b, c, d, e, f, g, h, i, j, k, m, n;
                  if (angular.isFunction(a)) {
                    for (d = [], g = 0, j = q.length; j > g; g++)
                      (c = q[g]), d.unshift(c);
                    for (
                      f = function(c) {
                        return a(c.scope)
                          ? (T(d.length - 1 - b, d.length - b), Q--)
                          : void 0;
                      },
                        b = h = 0,
                        k = d.length;
                      k > h;
                      b = ++h
                    )
                      (e = d[b]), f(e);
                  } else
                    0 <= (n = a - H - 1) &&
                      n < q.length &&
                      (T(a - H - 1, a - H), Q--);
                  for (b = i = 0, m = q.length; m > i; b = ++i)
                    (c = q[b]), (c.scope.$index = H + b);
                  return l();
                }),
                (A = function(a, b) {
                  var c, d, e, f, g;
                  if (((d = []), angular.isFunction(a)))
                    throw new Error(
                      "not implemented - Insert with locator function"
                    );
                  for (
                    0 <= (g = a - H - 1) &&
                      g < q.length &&
                      (d.push(K(a, b)), Q++),
                      c = e = 0,
                      f = q.length;
                    f > e;
                    c = ++e
                  )
                    (b = q[c]), (b.scope.$index = H + c);
                  return l(null, d);
                }),
                E.$on("insert.item", function(a, b, c) {
                  return A(b, c);
                }),
                E.$on("update.items", function(a, b, c) {
                  return B(b, c);
                }),
                E.$on("delete.items", function(a, b) {
                  return z(b);
                })
              );
            };
          }
        };
      }
    ]),
  angular
    .module("ui.scrollfix", [])
    .directive("uiScrollfix", [
      "$window",
      function(a) {
        "use strict";
        function b() {
          if (angular.isDefined(a.pageYOffset)) return a.pageYOffset;
          var b =
            document.compatMode && "BackCompat" !== document.compatMode
              ? document.documentElement
              : document.body;
          return b.scrollTop;
        }
        return {
          require: "^?uiScrollfixTarget",
          link: function(c, d, e, f) {
            function g() {
              var a = i ? e.uiScrollfix : d[0].offsetTop + j,
                c = f ? k[0].scrollTop : b();
              !d.hasClass("ui-scrollfix") && c > a
                ? (d.addClass("ui-scrollfix"), (h = a))
                : d.hasClass("ui-scrollfix") &&
                  h > c &&
                  d.removeClass("ui-scrollfix");
            }
            var h,
              i = !0,
              j = 0,
              k = (f && f.$element) || angular.element(a);
            e.uiScrollfix
              ? "string" == typeof e.uiScrollfix &&
                ("-" === e.uiScrollfix.charAt(0)
                  ? ((i = !1), (j = -parseFloat(e.uiScrollfix.substr(1))))
                  : "+" === e.uiScrollfix.charAt(0) &&
                    ((i = !1), (j = parseFloat(e.uiScrollfix.substr(1)))))
              : (i = !1),
              (h = i ? e.uiScrollfix : d[0].offsetTop + j),
              k.on("scroll", g),
              c.$on("$destroy", function() {
                k.off("scroll", g);
              });
          }
        };
      }
    ])
    .directive("uiScrollfixTarget", [
      function() {
        "use strict";
        return {
          controller: [
            "$element",
            function(a) {
              this.$element = a;
            }
          ]
        };
      }
    ]),
  angular
    .module("ui.showhide", [])
    .directive("uiShow", [
      function() {
        "use strict";
        return function(a, b, c) {
          a.$watch(c.uiShow, function(a) {
            a ? b.addClass("ui-show") : b.removeClass("ui-show");
          });
        };
      }
    ])
    .directive("uiHide", [
      function() {
        "use strict";
        return function(a, b, c) {
          a.$watch(c.uiHide, function(a) {
            a ? b.addClass("ui-hide") : b.removeClass("ui-hide");
          });
        };
      }
    ])
    .directive("uiToggle", [
      function() {
        "use strict";
        return function(a, b, c) {
          a.$watch(c.uiToggle, function(a) {
            a
              ? b.removeClass("ui-hide").addClass("ui-show")
              : b.removeClass("ui-show").addClass("ui-hide");
          });
        };
      }
    ]),
  angular.module("ui.unique", []).filter("unique", [
    "$parse",
    function(a) {
      "use strict";
      return function(b, c) {
        if (c === !1) return b;
        if ((c || angular.isUndefined(c)) && angular.isArray(b)) {
          var d = [],
            e = angular.isString(c)
              ? a(c)
              : function(a) {
                  return a;
                },
            f = function(a) {
              return angular.isObject(a) ? e(a) : a;
            };
          angular.forEach(b, function(a) {
            for (var b = !1, c = 0; c < d.length; c++)
              if (angular.equals(f(d[c]), f(a))) {
                b = !0;
                break;
              }
            b || d.push(a);
          }),
            (b = d);
        }
        return b;
      };
    }
  ]),
  angular.module("ui.uploader", []).service("uiUploader", uiUploader),
  (uiUploader.$inject = ["$log"]),
  angular.module("ui.validate", []).directive("uiValidate", function() {
    "use strict";
    return {
      restrict: "A",
      require: "ngModel",
      link: function(a, b, c, d) {
        function e(b) {
          return angular.isString(b)
            ? void a.$watch(b, function() {
                angular.forEach(g, function(a) {
                  a(d.$modelValue);
                });
              })
            : angular.isArray(b)
            ? void angular.forEach(b, function(b) {
                a.$watch(b, function() {
                  angular.forEach(g, function(a) {
                    a(d.$modelValue);
                  });
                });
              })
            : void (
                angular.isObject(b) &&
                angular.forEach(b, function(b, c) {
                  angular.isString(b) &&
                    a.$watch(b, function() {
                      g[c](d.$modelValue);
                    }),
                    angular.isArray(b) &&
                      angular.forEach(b, function(b) {
                        a.$watch(b, function() {
                          g[c](d.$modelValue);
                        });
                      });
                })
              );
        }
        var f,
          g = {},
          h = a.$eval(c.uiValidate);
        h &&
          (angular.isString(h) && (h = { validator: h }),
          angular.forEach(h, function(b, c) {
            (f = function(e) {
              var f = a.$eval(b, { $value: e });
              return angular.isObject(f) && angular.isFunction(f.then)
                ? (f.then(
                    function() {
                      d.$setValidity(c, !0);
                    },
                    function() {
                      d.$setValidity(c, !1);
                    }
                  ),
                  e)
                : f
                ? (d.$setValidity(c, !0), e)
                : (d.$setValidity(c, !1), e);
            }),
              (g[c] = f),
              d.$formatters.push(f),
              d.$parsers.push(f);
          }),
          c.uiValidateWatch && e(a.$eval(c.uiValidateWatch)));
      }
    };
  }),
  angular.module("ui.utils", [
    "ui.event",
    "ui.format",
    "ui.highlight",
    "ui.include",
    "ui.indeterminate",
    "ui.inflector",
    "ui.jq",
    "ui.keypress",
    "ui.mask",
    "ui.reset",
    "ui.route",
    "ui.scrollfix",
    "ui.scroll",
    "ui.scroll.jqlite",
    "ui.showhide",
    "ui.unique",
    "ui.validate"
  ]),
  (function(a, b) {
    "use strict";
    var c = ["ng", "oc.lazyLoad"],
      d = {},
      e = [],
      f = [],
      g = [],
      h = [],
      i = a.noop,
      j = {},
      k = [],
      l = a.module("oc.lazyLoad", ["ng"]);
    l.provider("$ocLazyLoad", [
      "$controllerProvider",
      "$provide",
      "$compileProvider",
      "$filterProvider",
      "$injector",
      "$animateProvider",
      function(l, m, p, q, r, s) {
        function t(b, d, e) {
          if (d) {
            var f,
              h,
              l,
              m = [];
            for (f = d.length - 1; f >= 0; f--)
              if (
                ((h = d[f]),
                a.isString(h) || (h = w(h)),
                h && -1 === k.indexOf(h) && (!y[h] || -1 !== g.indexOf(h)))
              ) {
                var n = -1 === c.indexOf(h);
                if (
                  ((l = o(h)),
                  n && (c.push(h), t(b, l.requires, e)),
                  l._runBlocks.length > 0)
                )
                  for (j[h] = []; l._runBlocks.length > 0; )
                    j[h].push(l._runBlocks.shift());
                a.isDefined(j[h]) && (n || e.rerun) && (m = m.concat(j[h])),
                  v(b, l._invokeQueue, h, e.reconfig),
                  v(b, l._configBlocks, h, e.reconfig),
                  i(
                    n ? "ocLazyLoad.moduleLoaded" : "ocLazyLoad.moduleReloaded",
                    h
                  ),
                  d.pop(),
                  k.push(h);
              }
            var p = b.getInstanceInjector();
            a.forEach(m, function(a) {
              p.invoke(a);
            });
          }
        }
        function u(b, c) {
          function e(b, c) {
            var d,
              e = !0;
            return (
              c.length &&
                ((d = f(b)),
                a.forEach(c, function(a) {
                  e = e && f(a) !== d;
                })),
              e
            );
          }
          function f(b) {
            return a.isArray(b)
              ? F(b.toString())
              : a.isObject(b)
              ? F(E(b))
              : a.isDefined(b) && null !== b
              ? F(b.toString())
              : b;
          }
          var g = b[2][0],
            h = b[1],
            j = !1;
          a.isUndefined(d[c]) && (d[c] = {}),
            a.isUndefined(d[c][h]) && (d[c][h] = {});
          var k = function(a, b) {
            d[c][h].hasOwnProperty(a) || (d[c][h][a] = []),
              e(b, d[c][h][a]) &&
                ((j = !0),
                d[c][h][a].push(b),
                i("ocLazyLoad.componentLoaded", [c, h, a]));
          };
          if (a.isString(g)) k(g, b[2][1]);
          else {
            if (!a.isObject(g)) return !1;
            a.forEach(g, function(b, c) {
              a.isString(b) ? k(b, g[1]) : k(c, b);
            });
          }
          return j;
        }
        function v(b, c, d, f) {
          if (c) {
            var g, h, i, j;
            for (g = 0, h = c.length; h > g; g++)
              if (((i = c[g]), a.isArray(i))) {
                if (null !== b) {
                  if (!b.hasOwnProperty(i[0]))
                    throw new Error("unsupported provider " + i[0]);
                  j = b[i[0]];
                }
                var k = u(i, d);
                if ("invoke" !== i[1])
                  k && a.isDefined(j) && j[i[1]].apply(j, i[2]);
                else {
                  var l = function(b) {
                    var c = e.indexOf(d + "-" + b);
                    (-1 === c || f) &&
                      (-1 === c && e.push(d + "-" + b),
                      a.isDefined(j) && j[i[1]].apply(j, i[2]));
                  };
                  if (a.isFunction(i[2][0])) l(i[2][0]);
                  else if (a.isArray(i[2][0]))
                    for (var m = 0, n = i[2][0].length; n > m; m++)
                      a.isFunction(i[2][0][m]) && l(i[2][0][m]);
                }
              }
          }
        }
        function w(b) {
          var c = null;
          return (
            a.isString(b)
              ? (c = b)
              : a.isObject(b) &&
                b.hasOwnProperty("name") &&
                a.isString(b.name) &&
                (c = b.name),
            c
          );
        }
        function x(b) {
          if (!a.isString(b)) return !1;
          try {
            return o(b);
          } catch (c) {
            if (
              /No module/.test(c) ||
              c.message.indexOf("$injector:nomod") > -1
            )
              return !1;
          }
        }
        var y = {},
          z = {
            $controllerProvider: l,
            $compileProvider: p,
            $filterProvider: q,
            $provide: m,
            $injector: r,
            $animateProvider: s
          },
          A = !1,
          B = !1,
          C = [],
          D = {};
        (C.push = function(a) {
          -1 === this.indexOf(a) && Array.prototype.push.apply(this, arguments);
        }),
          (this.config = function(b) {
            a.isDefined(b.modules) &&
              (a.isArray(b.modules)
                ? a.forEach(b.modules, function(a) {
                    y[a.name] = a;
                  })
                : (y[b.modules.name] = b.modules)),
              a.isDefined(b.debug) && (A = b.debug),
              a.isDefined(b.events) && (B = b.events);
          }),
          (this._init = function(d) {
            if (0 === f.length) {
              var e = [d],
                g = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"],
                i = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/,
                j = function(a) {
                  return a && e.push(a);
                };
              a.forEach(g, function(b) {
                (g[b] = !0),
                  j(document.getElementById(b)),
                  (b = b.replace(":", "\\:")),
                  "undefined" != typeof d[0] &&
                    d[0].querySelectorAll &&
                    (a.forEach(d[0].querySelectorAll("." + b), j),
                    a.forEach(d[0].querySelectorAll("." + b + "\\:"), j),
                    a.forEach(d[0].querySelectorAll("[" + b + "]"), j));
              }),
                a.forEach(e, function(b) {
                  if (0 === f.length) {
                    var c = " " + d.className + " ",
                      e = i.exec(c);
                    e
                      ? f.push((e[2] || "").replace(/\s+/g, ","))
                      : a.forEach(b.attributes, function(a) {
                          0 === f.length && g[a.name] && f.push(a.value);
                        });
                  }
                });
            }
            0 !== f.length ||
              ((b.jasmine || b.mocha) && a.isDefined(a.mock)) ||
              console.error(
                "No module found during bootstrap, unable to init ocLazyLoad. You should always use the ng-app directive or angular.boostrap when you use ocLazyLoad."
              );
            var k = function l(b) {
              if (-1 === c.indexOf(b)) {
                c.push(b);
                var d = a.module(b);
                v(null, d._invokeQueue, b),
                  v(null, d._configBlocks, b),
                  a.forEach(d.requires, l);
              }
            };
            a.forEach(f, function(a) {
              k(a);
            }),
              (f = []),
              h.pop();
          });
        var E = function(b) {
            try {
              return JSON.stringify(b);
            } catch (c) {
              var d = [];
              return JSON.stringify(b, function(b, c) {
                if (a.isObject(c) && null !== c) {
                  if (-1 !== d.indexOf(c)) return;
                  d.push(c);
                }
                return c;
              });
            }
          },
          F = function(a) {
            var b,
              c,
              d,
              e = 0;
            if (0 == a.length) return e;
            for (b = 0, d = a.length; d > b; b++)
              (c = a.charCodeAt(b)), (e = (e << 5) - e + c), (e |= 0);
            return e;
          };
        (this.$get = [
          "$log",
          "$rootElement",
          "$rootScope",
          "$cacheFactory",
          "$q",
          function(b, e, g, j, l) {
            function m(a) {
              var c = l.defer();
              return b.error(a.message), c.reject(a), c.promise;
            }
            var p,
              q = j("ocLazyLoad");
            return (
              A ||
                ((b = {}),
                (b.error = a.noop),
                (b.warn = a.noop),
                (b.info = a.noop)),
              (z.getInstanceInjector = function() {
                return p ? p : (p = e.data("$injector") || a.injector());
              }),
              (i = function(a, c) {
                B && g.$broadcast(a, c), A && b.info(a, c);
              }),
              {
                _broadcast: i,
                _$log: b,
                _getFilesCache: function() {
                  return q;
                },
                toggleWatch: function(a) {
                  a ? h.push(!0) : h.pop();
                },
                getModuleConfig: function(b) {
                  if (!a.isString(b))
                    throw new Error(
                      "You need to give the name of the module to get"
                    );
                  return y[b] ? a.copy(y[b]) : null;
                },
                setModuleConfig: function(b) {
                  if (!a.isObject(b))
                    throw new Error(
                      "You need to give the module config object to set"
                    );
                  return (y[b.name] = b), b;
                },
                getModules: function() {
                  return c;
                },
                isLoaded: function(b) {
                  var d = function(a) {
                    var b = c.indexOf(a) > -1;
                    return b || (b = !!x(a)), b;
                  };
                  if ((a.isString(b) && (b = [b]), a.isArray(b))) {
                    var e, f;
                    for (e = 0, f = b.length; f > e; e++)
                      if (!d(b[e])) return !1;
                    return !0;
                  }
                  throw new Error("You need to define the module(s) name(s)");
                },
                _getModuleName: w,
                _getModule: function(a) {
                  try {
                    return o(a);
                  } catch (b) {
                    throw ((/No module/.test(b) ||
                      b.message.indexOf("$injector:nomod") > -1) &&
                      (b.message =
                        'The module "' +
                        E(a) +
                        '" that you are trying to load does not exist. ' +
                        b.message),
                    b);
                  }
                },
                moduleExists: x,
                _loadDependencies: function(b, c) {
                  var d,
                    e,
                    f,
                    g = [],
                    h = this;
                  if (((b = h._getModuleName(b)), null === b)) return l.when();
                  try {
                    d = h._getModule(b);
                  } catch (i) {
                    return m(i);
                  }
                  return (
                    (e = h.getRequires(d)),
                    a.forEach(e, function(d) {
                      if (a.isString(d)) {
                        var e = h.getModuleConfig(d);
                        if (null === e) return void C.push(d);
                        (d = e), (e.name = void 0);
                      }
                      if (h.moduleExists(d.name))
                        return (
                          (f = d.files.filter(function(a) {
                            return (
                              h.getModuleConfig(d.name).files.indexOf(a) < 0
                            );
                          })),
                          0 !== f.length &&
                            h._$log.warn(
                              'Module "',
                              b,
                              '" attempted to redefine configuration for dependency. "',
                              d.name,
                              '"\n Additional Files Loaded:',
                              f
                            ),
                          a.isDefined(h.filesLoader)
                            ? void g.push(
                                h.filesLoader(d, c).then(function() {
                                  return h._loadDependencies(d);
                                })
                              )
                            : m(
                                new Error(
                                  "Error: New dependencies need to be loaded from external files (" +
                                    d.files +
                                    "), but no loader has been defined."
                                )
                              )
                        );
                      if (a.isArray(d)) {
                        var i = [];
                        a.forEach(d, function(a) {
                          var b = h.getModuleConfig(a);
                          null === b
                            ? i.push(a)
                            : b.files && (i = i.concat(b.files));
                        }),
                          i.length > 0 && (d = { files: i });
                      } else a.isObject(d) && d.hasOwnProperty("name") && d.name && (h.setModuleConfig(d), C.push(d.name));
                      if (a.isDefined(d.files) && 0 !== d.files.length) {
                        if (!a.isDefined(h.filesLoader))
                          return m(
                            new Error(
                              'Error: the module "' +
                                d.name +
                                '" is defined in external files (' +
                                d.files +
                                "), but no loader has been defined."
                            )
                          );
                        g.push(
                          h.filesLoader(d, c).then(function() {
                            return h._loadDependencies(d);
                          })
                        );
                      }
                    }),
                    l.all(g)
                  );
                },
                inject: function(b) {
                  var c =
                      arguments.length <= 1 || void 0 === arguments[1]
                        ? {}
                        : arguments[1],
                    d =
                      arguments.length <= 2 || void 0 === arguments[2]
                        ? !1
                        : arguments[2],
                    e = this,
                    g = l.defer();
                  if (a.isDefined(b) && null !== b) {
                    if (a.isArray(b)) {
                      var h = [];
                      return (
                        a.forEach(b, function(a) {
                          h.push(e.inject(a, c, d));
                        }),
                        l.all(h)
                      );
                    }
                    e._addToLoadList(e._getModuleName(b), !0, d);
                  }
                  if (f.length > 0) {
                    var i = f.slice(),
                      j = function m(a) {
                        C.push(a),
                          (D[a] = g.promise),
                          e._loadDependencies(a, c).then(
                            function() {
                              try {
                                (k = []), t(z, C, c);
                              } catch (a) {
                                return (
                                  e._$log.error(a.message), void g.reject(a)
                                );
                              }
                              f.length > 0 ? m(f.shift()) : g.resolve(i);
                            },
                            function(a) {
                              g.reject(a);
                            }
                          );
                      };
                    j(f.shift());
                  } else {
                    if (c && c.name && D[c.name]) return D[c.name];
                    g.resolve();
                  }
                  return g.promise;
                },
                getRequires: function(b) {
                  var d = [];
                  return (
                    a.forEach(b.requires, function(a) {
                      -1 === c.indexOf(a) && d.push(a);
                    }),
                    d
                  );
                },
                _invokeQueue: v,
                _registerInvokeList: u,
                _register: t,
                _addToLoadList: n,
                _unregister: function(b) {
                  a.isDefined(b) &&
                    a.isArray(b) &&
                    a.forEach(b, function(a) {
                      d[a] = void 0;
                    });
                }
              }
            );
          }
        ]),
          this._init(a.element(b.document));
      }
    ]);
    var m = a.bootstrap;
    a.bootstrap = function(b, c, d) {
      return (
        a.forEach(c.slice(), function(a) {
          n(a, !0, !0);
        }),
        m(b, c, d)
      );
    };
    var n = function(b, c, d) {
        (h.length > 0 || c) &&
          a.isString(b) &&
          -1 === f.indexOf(b) &&
          (f.push(b), d && g.push(b));
      },
      o = a.module;
    (a.module = function(a, b, c) {
      return n(a, !1, !0), o(a, b, c);
    }),
      "undefined" != typeof module &&
        "undefined" != typeof exports &&
        module.exports === exports &&
        (module.exports = "oc.lazyLoad");
  })(angular, window),
  (function(a) {
    "use strict";
    a.module("oc.lazyLoad").directive("ocLazyLoad", [
      "$ocLazyLoad",
      "$compile",
      "$animate",
      "$parse",
      "$timeout",
      function(b, c, d, e, f) {
        return {
          restrict: "A",
          terminal: !0,
          priority: 1e3,
          compile: function(f, g) {
            var h = f[0].innerHTML;
            return (
              f.html(""),
              function(f, g, i) {
                var j = e(i.ocLazyLoad);
                f.$watch(
                  function() {
                    return j(f) || i.ocLazyLoad;
                  },
                  function(e) {
                    a.isDefined(e) &&
                      b.load(e).then(function() {
                        d.enter(h, g), c(g.contents())(f);
                      });
                  },
                  !0
                );
              }
            );
          }
        };
      }
    ]);
  })(angular),
  (function(a) {
    "use strict";
    a.module("oc.lazyLoad").config([
      "$provide",
      function(b) {
        b.decorator("$ocLazyLoad", [
          "$delegate",
          "$q",
          "$window",
          "$interval",
          function(b, c, d, e) {
            var f = !1,
              g = !1,
              h =
                d.document.getElementsByTagName("head")[0] ||
                d.document.getElementsByTagName("body")[0];
            return (
              (b.buildElement = function(i, j, k) {
                var l,
                  m,
                  n = c.defer(),
                  o = b._getFilesCache(),
                  p = function(a) {
                    var b = new Date().getTime();
                    return a.indexOf("?") >= 0
                      ? "&" === a.substring(0, a.length - 1)
                        ? a + "_dc=" + b
                        : a + "&_dc=" + b
                      : a + "?_dc=" + b;
                  };
                switch ((a.isUndefined(o.get(j)) && o.put(j, n.promise), i)) {
                  case "css":
                    (l = d.document.createElement("link")),
                      (l.type = "text/css"),
                      (l.rel = "stylesheet"),
                      (l.href = k.cache === !1 ? p(j) : j);
                    break;
                  case "js":
                    (l = d.document.createElement("script")),
                      (l.src = k.cache === !1 ? p(j) : j);
                    break;
                  default:
                    o.remove(j),
                      n.reject(
                        new Error(
                          'Requested type "' +
                            i +
                            '" is not known. Could not inject "' +
                            j +
                            '"'
                        )
                      );
                }
                (l.onload = l.onreadystatechange = function(a) {
                  (l.readyState && !/^c|loade/.test(l.readyState)) ||
                    m ||
                    ((l.onload = l.onreadystatechange = null),
                    (m = 1),
                    b._broadcast("ocLazyLoad.fileLoaded", j),
                    n.resolve());
                }),
                  (l.onerror = function() {
                    o.remove(j), n.reject(new Error("Unable to load " + j));
                  }),
                  (l.async = k.serie ? 0 : 1);
                var q = h.lastChild;
                if (k.insertBefore) {
                  var r = a.element(
                    a.isDefined(window.jQuery)
                      ? k.insertBefore
                      : document.querySelector(k.insertBefore)
                  );
                  r && r.length > 0 && (q = r[0]);
                }
                if ((q.parentNode.insertBefore(l, q), "css" == i)) {
                  if (!f) {
                    var s = d.navigator.userAgent.toLowerCase();
                    if (/iP(hone|od|ad)/.test(d.navigator.platform)) {
                      var t = d.navigator.appVersion.match(
                          /OS (\d+)_(\d+)_?(\d+)?/
                        ),
                        u = parseFloat(
                          [
                            parseInt(t[1], 10),
                            parseInt(t[2], 10),
                            parseInt(t[3] || 0, 10)
                          ].join(".")
                        );
                      g = 6 > u;
                    } else if (s.indexOf("android") > -1) {
                      var v = parseFloat(s.slice(s.indexOf("android") + 8));
                      g = 4.4 > v;
                    } else if (s.indexOf("safari") > -1) {
                      var w = s.match(/version\/([\.\d]+)/i);
                      g = w && w[1] && parseFloat(w[1]) < 6;
                    }
                  }
                  if (g)
                    var x = 1e3,
                      y = e(function() {
                        try {
                          l.sheet.cssRules, e.cancel(y), l.onload();
                        } catch (a) {
                          --x <= 0 && l.onerror();
                        }
                      }, 20);
                }
                return n.promise;
              }),
              b
            );
          }
        ]);
      }
    ]);
  })(angular),
  (function(a) {
    "use strict";
    a.module("oc.lazyLoad").config([
      "$provide",
      function(b) {
        b.decorator("$ocLazyLoad", [
          "$delegate",
          "$q",
          function(b, c) {
            return (
              (b.filesLoader = function(d) {
                var e =
                    arguments.length <= 1 || void 0 === arguments[1]
                      ? {}
                      : arguments[1],
                  f = [],
                  g = [],
                  h = [],
                  i = [],
                  j = null,
                  k = b._getFilesCache();
                b.toggleWatch(!0), a.extend(e, d);
                var l = function(c) {
                  var d,
                    l = null;
                  if (
                    (a.isObject(c) && ((l = c.type), (c = c.path)),
                    (j = k.get(c)),
                    a.isUndefined(j) || e.cache === !1)
                  ) {
                    if (
                      (null !== (d = /^(css|less|html|htm|js)?(?=!)/.exec(c)) &&
                        ((l = d[1]), (c = c.substr(d[1].length + 1, c.length))),
                      !l)
                    )
                      if (
                        null !==
                        (d = /[.](css|less|html|htm|js)?((\?|#).*)?$/.exec(c))
                      )
                        l = d[1];
                      else {
                        if (
                          b.jsLoader.hasOwnProperty("ocLazyLoadLoader") ||
                          !b.jsLoader.hasOwnProperty("requirejs")
                        )
                          return void b._$log.error(
                            "File type could not be determined. " + c
                          );
                        l = "js";
                      }
                    ("css" !== l && "less" !== l) || -1 !== f.indexOf(c)
                      ? ("html" !== l && "htm" !== l) || -1 !== g.indexOf(c)
                        ? "js" === l || -1 === h.indexOf(c)
                          ? h.push(c)
                          : b._$log.error("File type is not valid. " + c)
                        : g.push(c)
                      : f.push(c);
                  } else j && i.push(j);
                };
                if (
                  (e.serie
                    ? l(e.files.shift())
                    : a.forEach(e.files, function(a) {
                        l(a);
                      }),
                  f.length > 0)
                ) {
                  var m = c.defer();
                  b.cssLoader(
                    f,
                    function(c) {
                      a.isDefined(c) &&
                      b.cssLoader.hasOwnProperty("ocLazyLoadLoader")
                        ? (b._$log.error(c), m.reject(c))
                        : m.resolve();
                    },
                    e
                  ),
                    i.push(m.promise);
                }
                if (g.length > 0) {
                  var n = c.defer();
                  b.templatesLoader(
                    g,
                    function(c) {
                      a.isDefined(c) &&
                      b.templatesLoader.hasOwnProperty("ocLazyLoadLoader")
                        ? (b._$log.error(c), n.reject(c))
                        : n.resolve();
                    },
                    e
                  ),
                    i.push(n.promise);
                }
                if (h.length > 0) {
                  var o = c.defer();
                  b.jsLoader(
                    h,
                    function(c) {
                      a.isDefined(c) &&
                      (b.jsLoader.hasOwnProperty("ocLazyLoadLoader") ||
                        b.jsLoader.hasOwnProperty("requirejs"))
                        ? (b._$log.error(c), o.reject(c))
                        : o.resolve();
                    },
                    e
                  ),
                    i.push(o.promise);
                }
                if (0 === i.length) {
                  var p = c.defer(),
                    q =
                      "Error: no file to load has been found, if you're trying to load an existing module you should use the 'inject' method instead of 'load'.";
                  return b._$log.error(q), p.reject(q), p.promise;
                }
                return e.serie && e.files.length > 0
                  ? c.all(i).then(function() {
                      return b.filesLoader(d, e);
                    })
                  : c.all(i)["finally"](function(a) {
                      return b.toggleWatch(!1), a;
                    });
              }),
              (b.load = function(d) {
                var e,
                  f =
                    arguments.length <= 1 || void 0 === arguments[1]
                      ? {}
                      : arguments[1],
                  g = this,
                  h = null,
                  i = [],
                  j = c.defer(),
                  k = a.copy(d),
                  l = a.copy(f);
                if (a.isArray(k))
                  return (
                    a.forEach(k, function(a) {
                      i.push(g.load(a, l));
                    }),
                    c.all(i).then(
                      function(a) {
                        j.resolve(a);
                      },
                      function(a) {
                        j.reject(a);
                      }
                    ),
                    j.promise
                  );
                if (
                  (a.isString(k)
                    ? ((h = g.getModuleConfig(k)), h || (h = { files: [k] }))
                    : a.isObject(k) &&
                      (h =
                        a.isDefined(k.path) && a.isDefined(k.type)
                          ? { files: [k] }
                          : g.setModuleConfig(k)),
                  null === h)
                ) {
                  var m = g._getModuleName(k);
                  return (
                    (e =
                      'Module "' +
                      (m || "unknown") +
                      '" is not configured, cannot load.'),
                    b._$log.error(e),
                    j.reject(new Error(e)),
                    j.promise
                  );
                }
                a.isDefined(h.template) &&
                  (a.isUndefined(h.files) && (h.files = []),
                  a.isString(h.template)
                    ? h.files.push(h.template)
                    : a.isArray(h.template) && h.files.concat(h.template));
                var n = a.extend({}, l, h);
                return a.isUndefined(h.files) &&
                  a.isDefined(h.name) &&
                  b.moduleExists(h.name)
                  ? b.inject(h.name, n, !0)
                  : (b.filesLoader(h, n).then(
                      function() {
                        b.inject(null, n).then(
                          function(a) {
                            j.resolve(a);
                          },
                          function(a) {
                            j.reject(a);
                          }
                        );
                      },
                      function(a) {
                        j.reject(a);
                      }
                    ),
                    j.promise);
              }),
              b
            );
          }
        ]);
      }
    ]);
  })(angular),
  (function(a) {
    "use strict";
    a.module("oc.lazyLoad").config([
      "$provide",
      function(b) {
        b.decorator("$ocLazyLoad", [
          "$delegate",
          "$q",
          function(b, c) {
            return (
              (b.cssLoader = function(d, e, f) {
                var g = [];
                a.forEach(d, function(a) {
                  g.push(b.buildElement("css", a, f));
                }),
                  c.all(g).then(
                    function() {
                      e();
                    },
                    function(a) {
                      e(a);
                    }
                  );
              }),
              (b.cssLoader.ocLazyLoadLoader = !0),
              b
            );
          }
        ]);
      }
    ]);
  })(angular),
  (function(a) {
    "use strict";
    a.module("oc.lazyLoad").config([
      "$provide",
      function(b) {
        b.decorator("$ocLazyLoad", [
          "$delegate",
          "$q",
          function(b, c) {
            return (
              (b.jsLoader = function(d, e, f) {
                var g = [];
                a.forEach(d, function(a) {
                  g.push(b.buildElement("js", a, f));
                }),
                  c.all(g).then(
                    function() {
                      e();
                    },
                    function(a) {
                      e(a);
                    }
                  );
              }),
              (b.jsLoader.ocLazyLoadLoader = !0),
              b
            );
          }
        ]);
      }
    ]);
  })(angular),
  (function(a) {
    "use strict";
    a.module("oc.lazyLoad").config([
      "$provide",
      function(b) {
        b.decorator("$ocLazyLoad", [
          "$delegate",
          "$templateCache",
          "$q",
          "$http",
          function(b, c, d, e) {
            return (
              (b.templatesLoader = function(f, g, h) {
                var i = [],
                  j = b._getFilesCache();
                return (
                  a.forEach(f, function(b) {
                    var f = d.defer();
                    i.push(f.promise),
                      e
                        .get(b, h)
                        .success(function(d) {
                          a.isString(d) &&
                            d.length > 0 &&
                            a.forEach(a.element(d), function(a) {
                              "SCRIPT" === a.nodeName &&
                                "text/ng-template" === a.type &&
                                c.put(a.id, a.innerHTML);
                            }),
                            a.isUndefined(j.get(b)) && j.put(b, !0),
                            f.resolve();
                        })
                        .error(function(a) {
                          f.reject(
                            new Error(
                              'Unable to load template file "' + b + '": ' + a
                            )
                          );
                        });
                  }),
                  d.all(i).then(
                    function() {
                      g();
                    },
                    function(a) {
                      g(a);
                    }
                  )
                );
              }),
              (b.templatesLoader.ocLazyLoadLoader = !0),
              b
            );
          }
        ]);
      }
    ]);
  })(angular),
  Array.prototype.indexOf ||
    (Array.prototype.indexOf = function(a, b) {
      var c;
      if (null == this) throw new TypeError('"this" is null or not defined');
      var d = Object(this),
        e = d.length >>> 0;
      if (0 === e) return -1;
      var f = +b || 0;
      if ((Math.abs(f) === 1 / 0 && (f = 0), f >= e)) return -1;
      for (c = Math.max(f >= 0 ? f : e - Math.abs(f), 0); e > c; ) {
        if (c in d && d[c] === a) return c;
        c++;
      }
      return -1;
    }),
  (function() {
    "use strict";
    angular.module("app", [
      "ngAnimate",
      "ngResource",
      "ngSanitize",
      "ngTouch",
      "ngStorage",
      "ngStore",
      "ui.router",
      "ui.utils",
      "ui.load",
      "ui.jp",
      "oc.lazyLoad"
    ]);
  })(),
  (function() {
    "use strict";
    angular
      .module("app")
      .constant("MODULE_CONFIG", [
        {
          name: "mgcrea.ngStrap",
          module: !0,
          serie: !0,
          files: [
            "../assets/angular-motion/dist/angular-motion.min.css",
            "../assets/bootstrap-additions/dist/bootstrap-additions.min.css",
            "../libs/angular/angular-strap/dist/angular-strap.js",
            "../libs/angular/angular-strap/dist/angular-strap.tpl.js"
          ]
        },
        {
          name: "ui.bootstrap",
          module: !0,
          serie: !0,
          files: [
            "../libs/angular/angular-bootstrap/ui-bootstrap-tpls.min.js",
            "../libs/angular/angular-bootstrap/ui-bootstrap-tpls.js"
          ]
        },
        {
          name: "ui.select",
          module: !0,
          files: [
            "../libs/angular/angular-ui-select/dist/select.min.js",
            "../libs/angular/angular-ui-select/dist/select.min.css"
          ]
        },
        {
          name: "vr.directives.slider",
          module: !0,
          files: [
            "../libs/angular/venturocket-angular-slider/build/angular-slider.min.js",
            "../libs/angular/venturocket-angular-slider/angular-slider.css"
          ]
        },
        {
          name: "angularBootstrapNavTree",
          module: !0,
          files: [
            "../libs/angular/angular-bootstrap-nav-tree/dist/abn_tree_directive.js",
            "../libs/angular/angular-bootstrap-nav-tree/dist/abn_tree.css"
          ]
        },
        {
          name: "angularFileUpload",
          module: !0,
          files: ["../libs/angular/angular-file-upload/angular-file-upload.js"]
        },
        {
          name: "ngImgCrop",
          module: !0,
          files: [
            "../libs/angular/ngImgCrop/compile/minified/ng-img-crop.js",
            "../libs/angular/ngImgCrop/compile/minified/ng-img-crop.css"
          ]
        },
        {
          name: "smart-table",
          module: !0,
          files: ["../libs/angular/angular-smart-table/dist/smart-table.min.js"]
        },
        {
          name: "ui.map",
          module: !0,
          files: ["../libs/angular/angular-ui-map/ui-map.js"]
        },
        {
          name: "ui.grid",
          module: !0,
          files: [
            "../libs/angular/angular-ui-grid/ui-grid.min.js",
            "../libs/angular/angular-ui-grid/ui-grid.min.css",
            "../libs/angular/angular-ui-grid/ui-grid.bootstrap.css"
          ]
        },
        {
          name: "xeditable",
          module: !0,
          files: [
            "../libs/angular/angular-xeditable/dist/js/xeditable.min.js",
            "../libs/angular/angular-xeditable/dist/css/xeditable.css"
          ]
        },
        {
          name: "smart-table",
          module: !0,
          files: ["../libs/angular/angular-smart-table/dist/smart-table.min.js"]
        },
        {
          name: "ui.calendar",
          module: !0,
          files: ["../libs/angular/angular-ui-calendar/src/calendar.js"]
        },
        {
          name: "summernote",
          module: !0,
          files: [
            "../libs/jquery/summernote/dist/summernote.css",
            "../libs/jquery/summernote/dist/summernote.js",
            "../libs/angular/angular-summernote/dist/angular-summernote.js"
          ]
        },
        {
          name: "dataTable",
          module: !1,
          files: [
            "../libs/jquery/datatables/media/js/jquery.dataTables.min.js",
            "../libs/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.js",
            "../libs/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.css"
          ]
        },
        {
          name: "footable",
          module: !1,
          files: [
            "../libs/jquery/footable/dist/footable.all.min.js",
            "../libs/jquery/footable/css/footable.core.css"
          ]
        },
        {
          name: "easyPieChart",
          module: !1,
          files: [
            "../libs/jquery/jquery.easy-pie-chart/dist/jquery.easypiechart.fill.js"
          ]
        },
        {
          name: "sparkline",
          module: !1,
          files: [
            "../libs/jquery/jquery.sparkline/dist/jquery.sparkline.retina.js"
          ]
        },
        {
          name: "plot",
          module: !1,
          files: [
            "../libs/jquery/flot/jquery.flot.js",
            "../libs/jquery/flot/jquery.flot.resize.js",
            "../libs/jquery/flot/jquery.flot.pie.js",
            "../libs/jquery/flot.tooltip/js/jquery.flot.tooltip.min.js",
            "../libs/jquery/flot-spline/js/jquery.flot.spline.min.js",
            "../libs/jquery/flot.orderbars/js/jquery.flot.orderBars.js"
          ]
        },
        {
          name: "vectorMap",
          module: !1,
          files: [
            "../libs/jquery/bower-jvectormap/jquery-jvectormap-1.2.2.min.js",
            "../libs/jquery/bower-jvectormap/jquery-jvectormap.css",
            "../libs/jquery/bower-jvectormap/jquery-jvectormap-world-mill-en.js",
            "../libs/jquery/bower-jvectormap/jquery-jvectormap-us-aea-en.js"
          ]
        },
        { name: "moment", module: !1, files: ["../libs/js/moment/moment.js"] },
        {
          name: "fullcalendar",
          module: !1,
          files: [
            "../libs/jquery/moment/moment.js",
            "../libs/jquery/fullcalendar/dist/fullcalendar.min.js",
            "../libs/jquery/fullcalendar/dist/fullcalendar.css",
            "../libs/jquery/fullcalendar/dist/fullcalendar.theme.css"
          ]
        },
        {
          name: "sortable",
          module: !1,
          files: ["../libs/jquery/html.sortable/dist/html.sortable.min.js"]
        },
        {
          name: "nestable",
          module: !1,
          files: [
            "../libs/jquery/nestable/jquery.nestable.css",
            "../libs/jquery/nestable/jquery.nestable.js"
          ]
        },
        {
          name: "chart",
          module: !1,
          files: [
            "../libs/js/echarts/build/dist/echarts-all.js",
            "../libs/js/echarts/build/dist/theme.js",
            "../libs/js/echarts/build/dist/jquery.echarts.js"
          ]
        }
      ])
      .config([
        "$ocLazyLoadProvider",
        "MODULE_CONFIG",
        function(a, b) {
          a.config({ debug: !1, events: !1, modules: b });
        }
      ]);
  })(),
  (function() {
    "use strict";
    function a(a, b, c) {
      (a.$state = b), (a.$stateParams = c);
    }
    function b(a, b, c) {
      function d(a, b) {
        return {
          deps: [
            "$ocLazyLoad",
            "$q",
            function(d, e) {
              var f = e.defer(),
                g = !1;
              return (
                (a = angular.isArray(a) ? a : a.split(/\s+/)),
                g || (g = f.promise),
                angular.forEach(a, function(a) {
                  g = g.then(function() {
                    return (
                      angular.forEach(c, function(b) {
                        b.name == a && (a = b.module ? b.name : b.files);
                      }),
                      d.load(a)
                    );
                  });
                }),
                f.resolve(),
                b
                  ? g.then(function() {
                      return b();
                    })
                  : g
              );
            }
          ]
        };
      }
      function e(a) {
        a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var b = new RegExp("[\\?&]" + a + "=([^&#]*)"),
          c = b.exec(location.search);
        return null === c ? "" : decodeURIComponent(c[1].replace(/\+/g, " "));
      }
      var f = e("layout"),
        g = f ? f + "." : "",
        h = "../assets/layout." + g + "html",
        i = "../views/dashboard/dashboard." + g + "html";
      b.otherwise("/app/dashboard"),
        a
          .state("app", {
            abstract: !0,
            url: "/app",
            views: { "": { templateUrl: h } }
          })
          .state("app.dashboard", {
            url: "/dashboard",
            templateUrl: i,
            data: { title: "Dashboard" },
            controller: "ChartCtrl",
            resolve: d(["../assets/chart.js"])
          })
          .state("app.contact", {
            url: "/contact",
            templateUrl: "apps/contact/main.html",
            data: { title: "Contacts", hideFooter: !0 },
            controller: "ContactCtrl",
            resolve: d("apps/contact/contact.js")
          })
          .state("app.calendar", {
            url: "/calendar",
            templateUrl: "apps/calendar/main.html",
            data: { title: "Calendar" },
            controller: "FullcalendarCtrl",
            resolve: d([
              "moment",
              "fullcalendar",
              "ui.calendar",
              "apps/calendar/calendar.js"
            ])
          })
          .state("app.todo", {
            url: "/todo",
            templateUrl: "apps/todo/todo.html",
            data: { title: "Todo" },
            controller: "TodoCtrl",
            resolve: d("apps/todo/todo.js")
          })
          .state("app.todo.list", { url: "/{fold}" })
          .state("app.note", {
            url: "/note",
            templateUrl: "apps/note/main.html",
            data: { title: "Note", hideFooter: !0 }
          })
          .state("app.note.list", {
            url: "/list",
            templateUrl: "apps/note/list.html",
            data: { title: "Note" },
            controller: "NoteCtrl",
            resolve: d(["apps/note/note.js", "moment"])
          })
          .state("app.note.item", {
            url: "/{id}",
            views: {
              "": {
                templateUrl: "apps/note/item.html",
                controller: "NoteItemCtrl",
                resolve: d(["apps/note/note.js", "moment"])
              }
            },
            data: { title: "Note" }
          })
          .state("app.layout", {
            url: "/layout",
            template: "<div ui-view></div>"
          })
          .state("app.layout.header", {
            url: "/header",
            templateUrl: "../views/ui/headers.html",
            data: { title: "Headers" }
          })
          .state("app.layout.aside", {
            url: "/aside",
            templateUrl: "../views/ui/asides.html",
            data: { title: "Asides" }
          })
          .state("app.layout.footer", {
            url: "/footer",
            templateUrl: "../views/ui/footers.html",
            data: { title: "Footers" }
          })
          .state("app.inbox", {
            url: "/inbox",
            templateUrl: "apps/inbox/main.html",
            data: { title: "Inbox" },
            controller: "MainCtrl",
            resolve: d(["apps/inbox/inbox.js", "moment"])
          })
          .state("app.inbox.list", {
            url: "/inbox/{fold}",
            templateUrl: "apps/inbox/list.html",
            controller: "ListCtrl"
          })
          .state("app.inbox.item", {
            url: "/{id:[0-9]{1,4}}",
            templateUrl: "apps/inbox/item.html",
            controller: "DetailCtrl"
          })
          .state("app.inbox.compose", {
            url: "/compose",
            templateUrl: "apps/inbox/new.html",
            controller: "NewCtrl",
            resolve: d(["summernote", "ui.select"])
          })
          .state("app.widget", {
            url: "/widget",
            templateUrl: "../views/ui/widget.html",
            data: { title: "Widgets" }
          })
          .state("app.ui", { url: "/ui", template: "<div ui-view></div>" })
          .state("app.ui.arrow", {
            url: "/arrow",
            templateUrl: "../views/ui/arrow.html",
            data: { title: "Arrows" }
          })
          .state("app.ui.box", {
            url: "/box",
            templateUrl: "../views/ui/box.html",
            data: { title: "Box" }
          })
          .state("app.ui.label", {
            url: "/label",
            templateUrl: "../views/ui/label.html",
            data: { title: "Labels" }
          })
          .state("app.ui.button", {
            url: "/button",
            templateUrl: "../views/ui/button.html",
            data: { title: "Buttons" }
          })
          .state("app.ui.color", {
            url: "/color",
            templateUrl: "../views/ui/color.html",
            data: { title: "Colors" }
          })
          .state("app.ui.dropdown", {
            url: "/dropdown",
            templateUrl: "../views/ui/dropdown.html",
            data: { title: "Dropdowns" }
          })
          .state("app.ui.grid", {
            url: "/grid",
            templateUrl: "../views/ui/grid.html",
            data: { title: "Grids" }
          })
          .state("app.ui.icon", {
            url: "/icons",
            templateUrl: "../views/ui/icon.html",
            data: { title: "Icons" }
          })
          .state("app.ui.list", {
            url: "/list",
            templateUrl: "../views/ui/list.html",
            data: { title: "Lists" }
          })
          .state("app.ui.modal", {
            url: "/modal",
            templateUrl: "../views/ui/modal.html",
            data: { title: "Modals" }
          })
          .state("app.ui.nav", {
            url: "/nav",
            templateUrl: "../views/ui/nav.html",
            data: { title: "Navs" }
          })
          .state("app.ui.progress", {
            url: "/progress",
            templateUrl: "../views/ui/progress.html",
            data: { title: "Progress" }
          })
          .state("app.ui.social", {
            url: "/social",
            templateUrl: "../views/ui/social.html",
            data: { title: "Social" }
          })
          .state("app.ui.sortable", {
            url: "/sortable",
            templateUrl: "../views/ui/sortable.html",
            data: { title: "Sortable" }
          })
          .state("app.ui.streamline", {
            url: "/streamline",
            templateUrl: "../views/ui/streamline.html",
            data: { title: "Streamlines" }
          })
          .state("app.ui.timeline", {
            url: "/timeline",
            templateUrl: "../views/ui/timeline.html",
            data: { title: "Timelines" }
          })
          .state("app.ui.angularstrap", {
            url: "/angularstrap",
            templateUrl: "../views/ui/ng.angularstrap.html",
            data: { title: "AngularStrap" },
            resolve: d([
              "mgcrea.ngStrap",
              "scripts/controllers/angularstrap.js"
            ])
          })
          .state("app.ui.bootstrap", {
            url: "/bootstrap",
            templateUrl: "../views/ui/ng.bootstrap.html",
            data: { title: "UI Bootstrap" },
            resolve: d(["ui.bootstrap", "scripts/controllers/bootstrap.js"])
          })
          .state("app.googlemap", {
            url: "/googlemap",
            templateUrl: "../views/ui/ng.google.html",
            data: { title: "Gmap", hideFooter: !0 },
            controller: "GoogleMapCtrl",
            resolve: d(
              [
                "ui.map",
                "scripts/controllers/load-google-maps.js",
                "scripts/controllers/googlemap.js"
              ],
              function() {
                return loadGoogleMaps();
              }
            )
          })
          .state("app.ui.vectormap", {
            url: "/vectormap",
            templateUrl: "../views/ui/map.vector.html",
            data: { title: "Vector Map" },
            controller: "ChartCtrl",
            resolve: d("../assets/chart.js")
          })
          .state("app.form", { url: "/form", template: "<div ui-view></div>" })
          .state("app.form.layout", {
            url: "/layout",
            templateUrl: "../assets/layout.html",
            data: { title: "Layouts" }
          })
          .state("app.form.element", {
            url: "/element",
            templateUrl: "../views/form/form.element.html",
            data: { title: "Elements" }
          })
          .state("app.form.validation", {
            url: "/validation",
            templateUrl: "../views/form/ng.validation.html",
            data: { title: "Validations" }
          })
          .state("app.form.select", {
            url: "/select",
            templateUrl: "../views/form/ng.select.html",
            data: { title: "Selects" },
            controller: "SelectCtrl",
            resolve: d(["ui.select", "scripts/controllers/select.js"])
          })
          .state("app.form.editor", {
            url: "/editor",
            templateUrl: "../views/form/ng.editor.html",
            data: { title: "Editor" },
            controller: "EditorCtrl",
            resolve: d(["summernote", "scripts/controllers/editor.js"])
          })
          .state("app.form.slider", {
            url: "/slider",
            templateUrl: "../views/form/ng.slider.html",
            data: { title: "Slider" },
            controller: "SliderCtrl",
            resolve: d([
              "vr.directives.slider",
              "scripts/controllers/slider.js"
            ])
          })
          .state("app.form.tree", {
            url: "/tree",
            templateUrl: "../views/form/ng.tree.html",
            data: { title: "Tree" },
            controller: "TreeCtrl",
            resolve: d([
              "angularBootstrapNavTree",
              "scripts/controllers/tree.js"
            ])
          })
          .state("app.form.file-upload", {
            url: "/file-upload",
            templateUrl: "../views/form/ng.file-upload.html",
            data: { title: "File upload" },
            controller: "UploadCtrl",
            resolve: d(["angularFileUpload", "scripts/controllers/upload.js"])
          })
          .state("app.form.image-crop", {
            url: "/image-crop",
            templateUrl: "../views/form/ng.image-crop.html",
            data: { title: "Image Crop" },
            controller: "ImgCropCtrl",
            resolve: d(["ngImgCrop", "scripts/controllers/imgcrop.js"])
          })
          .state("app.form.editable", {
            url: "/editable",
            templateUrl: "../views/form/ng.xeditable.html",
            data: { title: "Xeditable" },
            controller: "XeditableCtrl",
            resolve: d(["xeditable", "scripts/controllers/xeditable.js"])
          })
          .state("app.table", {
            url: "/table",
            template: "<div ui-view></div>"
          })
          .state("app.table.static", {
            url: "/static",
            templateUrl: "../views/table/static.html",
            data: { title: "Static" }
          })
          .state("app.table.datatable", {
            url: "/datatable",
            data: { title: "Datatable" },
            templateUrl: "../views/table/datatable.html"
          })
          .state("app.table.footable", {
            url: "/footable",
            data: { title: "Footable" },
            templateUrl: "../views/table/footable.html"
          })
          .state("app.table.smart", {
            url: "/smart",
            templateUrl: "../views/table/ng.smart.html",
            data: { title: "Smart" },
            controller: "TableCtrl",
            resolve: d(["smart-table", "scripts/controllers/table.js"])
          })
          .state("app.table.uigrid", {
            url: "/uigrid",
            templateUrl: "../views/table/ng.uigrid.html",
            data: { title: "UI Grid" },
            controller: "UiGridCtrl",
            resolve: d(["ui.grid", "scripts/controllers/uigrid.js"])
          })
          .state("app.table.editable", {
            url: "/editable",
            templateUrl: "../views/table/ng.editable.html",
            data: { title: "Editable" },
            controller: "XeditableCtrl",
            resolve: d(["xeditable", "scripts/controllers/xeditable.js"])
          })
          .state("app.chart", {
            url: "/chart",
            templateUrl: "../views/chart/chart.html",
            data: { title: "Charts" },
            controller: "ChartCtrl",
            resolve: d("../assets/chart.js")
          })
          .state("app.echarts", {
            url: "/echarts",
            template: "<div ui-view></div>"
          })
          .state("app.echarts.line", {
            url: "/line",
            templateUrl: "../views/chart/echarts-line.html",
            data: { title: "Echarts Line" }
          })
          .state("app.echarts.bar", {
            url: "/bar",
            templateUrl: "../views/chart/echarts-bar.html",
            data: { title: "Echarts Bar" }
          })
          .state("app.echarts.pie", {
            url: "/pie",
            templateUrl: "../views/chart/echarts-pie.html",
            data: { title: "Echarts Pie" }
          })
          .state("app.echarts.scatter", {
            url: "/scatter",
            templateUrl: "../views/chart/echarts-scatter.html",
            data: { title: "Echarts Scatter" }
          })
          .state("app.echarts.rc", {
            url: "/rc",
            templateUrl: "../views/chart/echarts-radar-chord.html",
            data: { title: "Radar & Chord" }
          })
          .state("app.echarts.gf", {
            url: "/gf",
            templateUrl: "../views/chart/echarts-gauge-funnel.html",
            data: { title: "Gauge & Funnel" }
          })
          .state("app.echarts.map", {
            url: "/map",
            templateUrl: "../views/chart/echarts-map.html",
            data: { title: "Map" }
          })
          .state("app.page", { url: "/page", template: "<div ui-view></div>" })
          .state("app.page.profile", {
            url: "/profile",
            templateUrl: "../views/page/profile.html",
            data: { title: "Profile" }
          })
          .state("app.page.setting", {
            url: "/setting",
            templateUrl: "../views/page/setting.html",
            data: { title: "Setting" }
          })
          .state("app.page.search", {
            url: "/search",
            templateUrl: "../views/page/search.html",
            data: { title: "Search" }
          })
          .state("app.page.faq", {
            url: "/faq",
            templateUrl: "../views/page/faq.html",
            data: { title: "FAQ" }
          })
          .state("app.page.gallery", {
            url: "/gallery",
            templateUrl: "../views/page/gallery.html",
            data: { title: "Gallery" }
          })
          .state("app.page.invoice", {
            url: "/invoice",
            templateUrl: "../views/page/invoice.html",
            data: { title: "Invoice" }
          })
          .state("app.page.price", {
            url: "/price",
            templateUrl: "../views/page/price.html",
            data: { title: "Price" }
          })
          .state("app.page.blank", {
            url: "/blank",
            templateUrl: "../views/page/blank.html",
            data: { title: "Blank" }
          })
          .state("app.docs", {
            url: "/docs",
            templateUrl: "../views/page/docs.html",
            data: { title: "Documents" }
          })
          .state("404", { url: "/404", templateUrl: "../views/misc/404.html" })
          .state("505", { url: "/505", templateUrl: "../views/misc/505.html" })
          .state("access", {
            url: "/access",
            template:
              '<div class="dark bg-auto w-full"><div ui-view class="fade-in-right-big smooth pos-rlt"></div></div>'
          })
          .state("access.signin", {
            url: "/signin",
            templateUrl: "../views/misc/signin.html"
          })
          .state("access.signup", {
            url: "/signup",
            templateUrl: "../views/misc/signup.html"
          })
          .state("access.forgot-password", {
            url: "/forgot-password",
            templateUrl: "../views/misc/forgot-password.html"
          })
          .state("access.lockme", {
            url: "/lockme",
            templateUrl: "../views/misc/lockme.html"
          });
    }
    angular
      .module("app")
      .run(a)
      .config(b),
      (a.$inject = ["$rootScope", "$state", "$stateParams"]),
      (b.$inject = ["$stateProvider", "$urlRouterProvider", "MODULE_CONFIG"]);
  })(),
  (function() {
    "use strict";
    function a(a, b, c, d, e, f, g) {
      function h(a) {
        (o.app.setting.theme = a.theme),
          i(),
          a.url &&
            f(
              function() {
                g.location.href = a.url;
              },
              100,
              !1
            );
      }
      function i() {
        o.app.setting.color = {
          primary: j(o.app.setting.theme.primary),
          accent: j(o.app.setting.theme.accent),
          warn: j(o.app.setting.theme.warn)
        };
      }
      function j(a) {
        return o.app.color[a] ? o.app.color[a] : palette.find(a);
      }
      function k() {
        c.hash("content"),
          e(),
          c.hash(""),
          $("#aside").modal("hide"),
          $("body")
            .removeClass("modal-open")
            .find(".modal-backdrop")
            .remove(),
          $(".navbar-toggleable-sm").collapse("hide");
      }
      function l() {
        return (
          !!navigator.userAgent.match(/MSIE/i) ||
          !!navigator.userAgent.match(/Trident.*rv:11\./)
        );
      }
      function m() {
        var a = g.navigator.userAgent || g.navigator.vendor || g.opera;
        return /iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/.test(
          a
        );
      }
      function n(a) {
        a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var b = new RegExp("[\\?&]" + a + "=([^&#]*)"),
          c = b.exec(location.search);
        return null === c ? "" : decodeURIComponent(c[1].replace(/\+/g, " "));
      }
      var o = a;
      (o.isIE = l()),
        (o.isSmart = m()),
        (o.app = {
          name: "Flatkit",
          version: "1.1.3",
          color: {
            primary: "#0cc2aa",
            accent: "#a88add",
            warn: "#fcc100",
            info: "#6887ff",
            success: "#6cc788",
            warning: "#f77a99",
            danger: "#f44455",
            white: "#ffffff",
            light: "#f1f2f3",
            dark: "#2e3e4e",
            black: "#2a2b3c"
          },
          setting: {
            theme: { primary: "primary", accent: "accent", warn: "warn" },
            folded: !1,
            boxed: !1,
            container: !1,
            themeID: 1,
            bg: ""
          }
        });
      var p = o.app.name + "-Setting";
      angular.isDefined(b[p]) ? (o.app.setting = b[p]) : (b[p] = o.app.setting),
        a.$watch(
          "app.setting",
          function() {
            b[p] = o.app.setting;
          },
          !0
        ),
        n("bg") && (o.app.setting.bg = n("bg")),
        (o.setTheme = h),
        i(),
        d.$on("$stateChangeSuccess", k),
        (o.goBack = function() {
          g.history.back();
        });
    }
    angular.module("app").controller("AppCtrl", a),
      (a.$inject = [
        "$scope",
        "$localStorage",
        "$location",
        "$rootScope",
        "$anchorScroll",
        "$timeout",
        "$window"
      ]);
  })(),
  (function() {
    "use strict";
    function uiJp(uiJpConfig, MODULE_CONFIG, uiLoad, $timeout) {
      function compile(tElm, tAttrs) {
        function link(scope, elm, attrs) {
          function getOptions() {
            var linkOptions = [];
            return (
              attrs.uiOptions
                ? ((linkOptions = eval("[" + attrs.uiOptions + "]")),
                  angular.isObject(options) &&
                    angular.isObject(linkOptions[0]) &&
                    (linkOptions[0] = angular.extend(
                      {},
                      options,
                      linkOptions[0]
                    )))
                : options && (linkOptions = [options]),
              linkOptions
            );
          }
          function callPlugin() {
            $timeout(
              function() {
                $(elm)[attrs.uiJp].apply($(elm), getOptions());
              },
              0,
              !1
            );
          }
          function refresh() {
            attrs.uiRefresh &&
              scope.$watch(attrs.uiRefresh, function(a, b) {
                a != b && callPlugin();
              });
          }
          attrs.ngModel &&
            elm.is("select,input,textarea") &&
            elm.bind("change", function() {
              elm.trigger("input");
            });
          var jp = !1;
          angular.forEach(MODULE_CONFIG, function(a) {
            a.name == attrs.uiJp && (jp = a.files);
          }),
            jp
              ? uiLoad
                  .load(jp)
                  .then(function() {
                    callPlugin(), refresh();
                  })
                  ["catch"](function() {})
              : (callPlugin(), refresh());
        }
        var options = uiJpConfig && uiJpConfig[tAttrs.uiJp],
          link = link;
        return link;
      }
      var directive = { restrict: "A", compile: compile };
      return directive;
    }
    angular
      .module("ui.jp", ["ui.load"])
      .value("uiJpConfig", {})
      .directive("uiJp", uiJp),
      (uiJp.$inject = ["uiJpConfig", "MODULE_CONFIG", "uiLoad", "$timeout"]);
  })(),
  (function() {
    "use strict";
    function a() {
      var a = { restrict: "AC", link: b };
      return a;
    }
    function b(a, b, c) {
      b.find("a").bind("click", function(a) {
        var b = angular.element(this).parent(),
          c = b.parent()[0].querySelectorAll(".active");
        b.toggleClass("active"), angular.element(c).removeClass("active");
      });
    }
    angular.module("app").directive("uiNav", a);
  })(),
  (function() {
    "use strict";
    function a(a, b) {
      function c(c, d, e) {
        d.addClass("hide"),
          a
            .load("../libs/jquery/screenfull/dist/screenfull.min.js")
            .then(function() {
              if (screenfull.enabled) {
                d.removeClass("hide"),
                  d.bind("click", function() {
                    var a;
                    e.target && (a = angular.element(e.target)[0]),
                      screenfull.toggle(a);
                  });
                var a = angular.element(b[0].body);
                b.on(screenfull.raw.fullscreenchange, function() {
                  screenfull.isFullscreen
                    ? a.addClass("fullscreen")
                    : a.removeClass("fullscreen");
                });
              }
            });
      }
      var d = { restrict: "AC", link: c };
      return d;
    }
    angular.module("app").directive("uiFullscreen", a),
      (a.$inject = ["$ocLazyLoad", "$document"]);
  })(),
  (function() {
    "use strict";
    function a(a, b) {
      function c(c, d, e) {
        d.bind("click", function(c) {
          c.preventDefault(), a.hash(e.uiScrollTo), b();
        });
      }
      return { restrict: "AC", replace: !0, link: c };
    }
    angular.module("app").directive("uiScrollTo", a),
      (a.$inject = ["$location", "$anchorScroll"]);
  })(),
  (function() {
    "use strict";
    function a(a, b) {
      function c(a, b, c) {
        b.on("click", function(a) {
          a.preventDefault();
          var d = c.uiToggleClass.split(","),
            e =
              (c.uiTarget && c.uiTarget.split(",")) ||
              (c.target && c.target.split(",")) ||
              Array(b),
            f = 0;
          angular.forEach(d, function(a) {
            var b = $(e[e.length && f]),
              c = $(b).attr("ui-class");
            c != a && b.removeClass($(b).attr("ui-class")),
              b.toggleClass(a),
              $(b).attr("ui-class", a),
              f++;
          }),
            b.toggleClass("active");
        });
      }
      return { restrict: "AC", link: c };
    }
    angular.module("app").directive("uiToggleClass", a),
      (a.$inject = ["$timeout", "$document"]);
  })(),
  (function() {
    "use strict";
    function a(a, b, c) {
      function d(d, e, f) {
        var g = d.$eval(f.uiInclude);
        a.get(g, { cache: b }).success(function(a) {
          e.replaceWith(c(a)(d));
        });
      }
      var e = { restrict: "A", link: d };
      return e;
    }
    angular.module("app").directive("uiInclude", a),
      (a.$inject = ["$http", "$templateCache", "$compile"]);
  })(),
  (function() {
    "use strict";
    function a() {
      return function(a) {
        return moment(a).fromNow();
      };
    }
    angular.module("app").filter("fromNow", a);
  })(),
  (function() {
    "use strict";
    function a() {
      return {
        $get: [
          "ngStoreFactory",
          function(a) {
            return {
              model: function(b) {
                var c = new a(b);
                return c;
              }
            };
          }
        ]
      };
    }
    function b() {
      function a(a, b) {
        if (!this.localStorage)
          throw "localStorage: Environment does not support localStorage.";
        (this.name = a),
          (this.serializer = b || {
            serialize: function(a) {
              return d(a) ? JSON.stringify(a) : a;
            },
            deserialize: function(a) {
              return a && JSON.parse(a);
            }
          });
        var c = this.localStorage().getItem(this.name);
        this.records = (c && c.split(",")) || [];
      }
      function b() {
        return ((65536 * (1 + Math.random())) | 0).toString(16).substring(1);
      }
      function c() {
        return (
          b() + b() + "-" + b() + "-" + b() + "-" + b() + "-" + b() + b() + b()
        );
      }
      function d(a) {
        return a === Object(a);
      }
      function e(a, b) {
        for (var c = a.length; c--; ) if (a[c] === b) return !0;
        return !1;
      }
      return (
        (a.prototype = {
          save: function() {
            this.localStorage().setItem(this.name, this.records.join(","));
          },
          create: function(a) {
            return (
              a.id || 0 === a.id || ((a.id = c()), a.set(a.idAttribute, a.id)),
              this.localStorage().setItem(
                this._itemName(a.id),
                this.serializer.serialize(a)
              ),
              this.records.push(a.id.toString()),
              this.save(),
              this.find(a)
            );
          },
          update: function(a) {
            this.localStorage().setItem(
              this._itemName(a.id),
              this.serializer.serialize(a)
            );
            var b = a.id.toString();
            return (
              e(this.records, b) || (this.records.push(b), this.save()),
              this.find(a)
            );
          },
          find: function(a) {
            return this.serializer.deserialize(
              this.localStorage().getItem(this._itemName(a.id))
            );
          },
          findAll: function() {
            for (var a, b, c = [], d = 0; d < this.records.length; d++)
              (a = this.records[d]),
                (b = this.serializer.deserialize(
                  this.localStorage().getItem(this._itemName(a))
                )),
                null != b && c.push(b);
            return c;
          },
          destroy: function(a) {
            this.localStorage().removeItem(this._itemName(a.id));
            for (var b = a.id.toString(), c = 0; c < this.records.length; c++)
              this.records[c] === b && this.records.splice(c, 1);
            return this.save(), a;
          },
          nextId: function() {
            return 0 == this.records.length
              ? 1
              : Number(this.records[this.records.length - 1]) + 1;
          },
          localStorage: function() {
            return localStorage;
          },
          _clear: function() {
            var a = this.localStorage(),
              b = new RegExp("^" + this.name + "-");
            a.removeItem(this.name);
            for (var c in a) b.test(c) && a.removeItem(c);
            this.records.length = 0;
          },
          _storageSize: function() {
            return this.localStorage().length;
          },
          _itemName: function(a) {
            return this.name + "-" + a;
          }
        }),
        a
      );
    }
    angular
      .module("ngStore", [])
      .provider("ngStore", a)
      .factory("ngStoreFactory", b);
  })(),
  (function() {
    "use strict";
    function a(a, b, c) {
      var d = [],
        e = !1,
        f = b.defer();
      (this.load = function(a) {
        a = angular.isArray(a) ? a : a.split(/\s+/);
        var b = this;
        return (
          e || (e = f.promise),
          angular.forEach(a, function(a) {
            e = e.then(function() {
              return a.indexOf(".css") >= 0 ? b.loadCSS(a) : b.loadScript(a);
            });
          }),
          f.resolve(),
          e
        );
      }),
        (this.loadScript = function(e) {
          if (d[e]) return d[e].promise;
          var f = b.defer(),
            g = a[0].createElement("script");
          return (
            (g.src = e),
            (g.onload = function(a) {
              c(function() {
                f.resolve(a);
              });
            }),
            (g.onerror = function(a) {
              c(function() {
                f.reject(a);
              });
            }),
            a[0].body.appendChild(g),
            (d[e] = f),
            f.promise
          );
        }),
        (this.loadCSS = function(e) {
          if (d[e]) return d[e].promise;
          var f = b.defer(),
            g = a[0].createElement("link");
          return (
            (g.rel = "stylesheet"),
            (g.type = "text/css"),
            (g.href = e),
            (g.onload = function(a) {
              c(function() {
                f.resolve(a);
              });
            }),
            (g.onerror = function(a) {
              c(function() {
                f.reject(a);
              });
            }),
            a[0].head.appendChild(g),
            (d[e] = f),
            f.promise
          );
        });
    }
    angular.module("ui.load", []).service("uiLoad", a),
      (a.$inject = ["$document", "$q", "$timeout"]);
  })(),
  (function(a, b) {
    "function" == typeof define && define.amd
      ? define([], b)
      : "object" == typeof exports
      ? (module.exports = b())
      : (a.palette = b());
  })(this, function() {
    function a(a) {
      var b, c;
      b = [];
      for (var c in a) a.hasOwnProperty(c) && b.push(c);
      return b;
    }
    function b(a, b) {
      return Math.floor(Math.random() * (b - a + 1)) + a;
    }
    return {
      palette: {
        red: {
          50: "#FFEBEE",
          100: "#FFCDD2",
          200: "#EF9A9A",
          300: "#E57373",
          400: "#EF5350",
          500: "#F44336",
          600: "#E53935",
          700: "#D32F2F",
          800: "#C62828",
          900: "#B71C1C",
          A100: "#FF8A80",
          A200: "#FF5252",
          A400: "#FF1744",
          A700: "#D50000"
        },
        pink: {
          50: "#FCE4EC",
          100: "#F8BBD0",
          200: "#F48FB1",
          300: "#F06292",
          400: "#EC407A",
          500: "#E91E63",
          600: "#D81B60",
          700: "#C2185B",
          800: "#AD1457",
          900: "#880E4F",
          A100: "#FF80AB",
          A200: "#FF4081",
          A400: "#F50057",
          A700: "#C51162"
        },
        purple: {
          50: "#F3E5F5",
          100: "#E1BEE7",
          200: "#CE93D8",
          300: "#BA68C8",
          400: "#AB47BC",
          500: "#9C27B0",
          600: "#8E24AA",
          700: "#7B1FA2",
          800: "#6A1B9A",
          900: "#4A148C",
          A100: "#EA80FC",
          A200: "#E040FB",
          A400: "#D500F9",
          A700: "#AA00FF"
        },
        "deep-purple": {
          50: "#EDE7F6",
          100: "#D1C4E9",
          200: "#B39DDB",
          300: "#9575CD",
          400: "#7E57C2",
          500: "#673AB7",
          600: "#5E35B1",
          700: "#512DA8",
          800: "#4527A0",
          900: "#311B92",
          A100: "#B388FF",
          A200: "#7C4DFF",
          A400: "#651FFF",
          A700: "#6200EA"
        },
        indigo: {
          50: "#E8EAF6",
          100: "#C5CAE9",
          200: "#9FA8DA",
          300: "#7986CB",
          400: "#5C6BC0",
          500: "#3F51B5",
          600: "#3949AB",
          700: "#303F9F",
          800: "#283593",
          900: "#1A237E",
          A100: "#8C9EFF",
          A200: "#536DFE",
          A400: "#3D5AFE",
          A700: "#304FFE"
        },
        blue: {
          50: "#E3F2FD",
          100: "#BBDEFB",
          200: "#90CAF9",
          300: "#64B5F6",
          400: "#42A5F5",
          500: "#2196F3",
          600: "#1E88E5",
          700: "#1976D2",
          800: "#1565C0",
          900: "#0D47A1",
          A100: "#82B1FF",
          A200: "#448AFF",
          A400: "#2979FF",
          A700: "#2962FF"
        },
        "light-blue": {
          50: "#E1F5FE",
          100: "#B3E5FC",
          200: "#81D4FA",
          300: "#4FC3F7",
          400: "#29B6F6",
          500: "#03A9F4",
          600: "#039BE5",
          700: "#0288D1",
          800: "#0277BD",
          900: "#01579B",
          A100: "#80D8FF",
          A200: "#40C4FF",
          A400: "#00B0FF",
          A700: "#0091EA"
        },
        cyan: {
          50: "#E0F7FA",
          100: "#B2EBF2",
          200: "#80DEEA",
          300: "#4DD0E1",
          400: "#26C6DA",
          500: "#00BCD4",
          600: "#00ACC1",
          700: "#0097A7",
          800: "#00838F",
          900: "#006064",
          A100: "#84FFFF",
          A200: "#18FFFF",
          A400: "#00E5FF",
          A700: "#00B8D4"
        },
        teal: {
          50: "#E0F2F1",
          100: "#B2DFDB",
          200: "#80CBC4",
          300: "#4DB6AC",
          400: "#26A69A",
          500: "#009688",
          600: "#00897B",
          700: "#00796B",
          800: "#00695C",
          900: "#004D40",
          A100: "#A7FFEB",
          A200: "#64FFDA",
          A400: "#1DE9B6",
          A700: "#00BFA5"
        },
        green: {
          50: "#E8F5E9",
          100: "#C8E6C9",
          200: "#A5D6A7",
          300: "#81C784",
          400: "#66BB6A",
          500: "#4CAF50",
          600: "#43A047",
          700: "#388E3C",
          800: "#2E7D32",
          900: "#1B5E20",
          A100: "#B9F6CA",
          A200: "#69F0AE",
          A400: "#00E676",
          A700: "#00C853"
        },
        "light-green": {
          50: "#F1F8E9",
          100: "#DCEDC8",
          200: "#C5E1A5",
          300: "#AED581",
          400: "#9CCC65",
          500: "#8BC34A",
          600: "#7CB342",
          700: "#689F38",
          800: "#558B2F",
          900: "#33691E",
          A100: "#CCFF90",
          A200: "#B2FF59",
          A400: "#76FF03",
          A700: "#64DD17"
        },
        lime: {
          50: "#F9FBE7",
          100: "#F0F4C3",
          200: "#E6EE9C",
          300: "#DCE775",
          400: "#D4E157",
          500: "#CDDC39",
          600: "#C0CA33",
          700: "#AFB42B",
          800: "#9E9D24",
          900: "#827717",
          A100: "#F4FF81",
          A200: "#EEFF41",
          A400: "#C6FF00",
          A700: "#AEEA00"
        },
        yellow: {
          50: "#FFFDE7",
          100: "#FFF9C4",
          200: "#FFF59D",
          300: "#FFF176",
          400: "#FFEE58",
          500: "#FFEB3B",
          600: "#FDD835",
          700: "#FBC02D",
          800: "#F9A825",
          900: "#F57F17",
          A100: "#FFFF8D",
          A200: "#FFFF00",
          A400: "#FFEA00",
          A700: "#FFD600"
        },
        amber: {
          50: "#FFF8E1",
          100: "#FFECB3",
          200: "#FFE082",
          300: "#FFD54F",
          400: "#FFCA28",
          500: "#FFC107",
          600: "#FFB300",
          700: "#FFA000",
          800: "#FF8F00",
          900: "#FF6F00",
          A100: "#FFE57F",
          A200: "#FFD740",
          A400: "#FFC400",
          A700: "#FFAB00"
        },
        orange: {
          50: "#FFF3E0",
          100: "#FFE0B2",
          200: "#FFCC80",
          300: "#FFB74D",
          400: "#FFA726",
          500: "#FF9800",
          600: "#FB8C00",
          700: "#F57C00",
          800: "#EF6C00",
          900: "#E65100",
          A100: "#FFD180",
          A200: "#FFAB40",
          A400: "#FF9100",
          A700: "#FF6D00"
        },
        "deep-orange": {
          50: "#FBE9E7",
          100: "#FFCCBC",
          200: "#FFAB91",
          300: "#FF8A65",
          400: "#FF7043",
          500: "#FF5722",
          600: "#F4511E",
          700: "#E64A19",
          800: "#D84315",
          900: "#BF360C",
          A100: "#FF9E80",
          A200: "#FF6E40",
          A400: "#FF3D00",
          A700: "#DD2C00"
        },
        brown: {
          50: "#EFEBE9",
          100: "#D7CCC8",
          200: "#BCAAA4",
          300: "#A1887F",
          400: "#8D6E63",
          500: "#795548",
          600: "#6D4C41",
          700: "#5D4037",
          800: "#4E342E",
          900: "#3E2723"
        },
        grey: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121"
        },
        "blue-grey": {
          50: "#ECEFF1",
          100: "#CFD8DC",
          200: "#B0BEC5",
          300: "#90A4AE",
          400: "#78909C",
          500: "#607D8B",
          600: "#546E7A",
          700: "#455A64",
          800: "#37474F",
          900: "#263238"
        },
        black: {
          500: "#000000",
          Text: "rgba(0,0,0,0.87)",
          "Secondary Text": "rgba(0,0,0,0.54)",
          Icons: "rgba(0,0,0,0.54)",
          Disabled: "rgba(0,0,0,0.26)",
          "Hint Text": "rgba(0,0,0,0.26)",
          Dividers: "rgba(0,0,0,0.12)"
        },
        white: {
          500: "#ffffff",
          Text: "#ffffff",
          "Secondary Text": "rgba(255,255,255,0.7)",
          Icons: "#ffffff",
          Disabled: "rgba(255,255,255,0.3)",
          "Hint Text": "rgba(255,255,255,0.3)",
          Dividers: "rgba(255,255,255,0.12)"
        }
      },
      get: function(a, b) {
        return this.palette[a][b || "500"];
      },
      find: function(a) {
        var a,
          b = a.split("-"),
          c = 500;
        return (
          3 == b.length && ((a = b[0] + "-" + b[1]), (c = b[2])),
          2 == b.length &&
            (b[1].indexOf("0") > 0
              ? ((a = b[0]), (c = b[1]))
              : (a = b[0] + "-" + b[1])),
          this.get(a, c)
        );
      },
      random: function(c) {
        var d, e, f;
        return (
          (d = a(this.palette)),
          (e = d[b(0, d.length - 1)]),
          null == c && ((f = a(e)), (c = f[b(0, f.length - 1)])),
          this.get(e, c)
        );
      }
    };
  });
