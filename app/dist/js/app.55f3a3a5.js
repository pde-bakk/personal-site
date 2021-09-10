(function(e) {
function t(t) {
  for (var r, a, u = t[0], i = t[1], l = t[2], s = 0, b = []; s < u.length; s++)
    a = u[s],
    Object.prototype.hasOwnProperty.call(o, a) && o[a] && b.push(o[a][0]),
    o[a] = 0;
  for (r in i)
    Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
  f && f(t);
  while (b.length)
    b.shift()();
  return c.push.apply(c, l || []), n()
}
function n() {
  for (var e, t = 0; t < c.length; t++) {
    for (var n = c[t], r = !0, a = 1; a < n.length; a++) {
      var u = n[a];
      0 !== o[u] && (r = !1)
    }
    r && (c.splice(t--, 1), e = i(i.s = n[0]))
  }
  return e
}
var r = {}, a = {app : 0}, o = {app : 0}, c = [];
function u(e) {
  return i.p + "js/" + ({about : "about"}[e] || e) + "." + {
    about : "cc4ec438",
    "chunk-2d21a3d2" : "f13fba50",
    "chunk-3fa9c480" : "a4508e84"
  }[e] + ".js"
}
function i(t) {
  if (r[t])
    return r[t].exports;
  var n = r[t] = {i : t, l : !1, exports : {}};
  return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports
}
i.e = function(e) {
  var t = [], n = {"chunk-3fa9c480" : 1};
  a[e] ? t.push(a[e])
       : 0 !== a[e] && n[e] &&
             t.push(a[e] =
                        new Promise((function(t, n) {
                          for (var r = "css/" + ({about : "about"}[e] || e) +
                                       "." + {
                                         about : "31d6cfe0",
                                         "chunk-2d21a3d2" : "31d6cfe0",
                                         "chunk-3fa9c480" : "b8c5fd90"
                                       }[e] +
                                       ".css",
                                   o = i.p + r,
                                   c = document.getElementsByTagName("link"),
                                   u = 0;
                               u < c.length; u++) {
                            var l = c[u], s = l.getAttribute("data-href") ||
                                              l.getAttribute("href");
                            if ("stylesheet" === l.rel && (s === r || s === o))
                              return t()
                          }
                          var b = document.getElementsByTagName("style");
                          for (u = 0; u < b.length; u++) {
                            l = b[u], s = l.getAttribute("data-href");
                            if (s === r || s === o)
                              return t()
                          }
                          var f = document.createElement("link");
                          f.rel = "stylesheet", f.type = "text/css",
                          f.onload = t, f.onerror = function(t) {
                            var r = t && t.target && t.target.src || o,
                                c = new Error("Loading CSS chunk " + e +
                                              " failed.\n(" + r + ")");
                            c.code = "CSS_CHUNK_LOAD_FAILED", c.request = r,
                            delete a[e], f.parentNode.removeChild(f), n(c)
                          }, f.href = o;
                          var d = document.getElementsByTagName("head")[0];
                          d.appendChild(f)
                        })).then((function() { a[e] = 0 })));
  var r = o[e];
  if (0 !== r)
    if (r)
      t.push(r[2]);
    else {
      var c = new Promise((function(t, n) { r = o[e] = [ t, n ] }));
      t.push(r[2] = c);
      var l, s = document.createElement("script");
      s.charset = "utf-8", s.timeout = 120,
      i.nc && s.setAttribute("nonce", i.nc), s.src = u(e);
      var b = new Error;
      l = function(t) {
        s.onerror = s.onload = null, clearTimeout(f);
        var n = o[e];
        if (0 !== n) {
          if (n) {
            var r = t && ("load" === t.type ? "missing" : t.type),
                a = t && t.target && t.target.src;
            b.message =
                "Loading chunk " + e + " failed.\n(" + r + ": " + a + ")",
            b.name = "ChunkLoadError", b.type = r, b.request = a, n[1](b)
          }
          o[e] = void 0
        }
      };
      var f =
          setTimeout((function() { l({type : "timeout", target : s}) }), 12e4);
      s.onerror = s.onload = l, document.head.appendChild(s)
    }
  return Promise.all(t)
}, i.m = e, i.c = r, i.d = function(e, t, n) {
  i.o(e, t) || Object.defineProperty(e, t, {enumerable : !0, get : n})
}, i.r = function(e) {
  "undefined" !== typeof Symbol && Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, {value : "Module"}),
      Object.defineProperty(e, "__esModule", {value : !0})
}, i.t = function(e, t) {
  if (1 & t && (e = i(e)), 8 & t)
    return e;
  if (4 & t && "object" === typeof e && e && e.__esModule)
    return e;
  var n = Object.create(null);
  if (i.r(n), Object.defineProperty(n, "default", {enumerable : !0, value : e}),
      2 & t && "string" != typeof e)
    for (var r in e)
      i.d(n, r, function(t) { return e[t] }.bind(null, r));
  return n
}, i.n = function(e) {
  var t = e && e.__esModule ? function() { return e["default"] }
                            : function() { return e };
  return i.d(t, "a", t), t
}, i.o = function(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t)
}, i.p = "/", i.oe = function(e) { throw console.error(e), e };
var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
    s = l.push.bind(l);
l.push = t, l = l.slice();
for (var b = 0; b < l.length; b++)
  t(l[b]);
var f = s;
c.push([ 0, "chunk-vendors" ]), n()
})({
  0 : function(e, t, n) { e.exports = n("cd49") },
  "4e1b" : function(e, t, n) {},
  6271 : function(e, t, n) {
"use strict";
n("4e1b")
  },
  "845f" : function(e, t, n) {},
  ba8c : function(e, t, n) {},
  cd49 : function(e, t, n) {
"use strict";
n.r(t);
n("e260"), n("e6cf"), n("cca6"), n("a79d");
var r = n("7a23"), a = n("6aae"), o = {id : "main"};
function c(e, t, n, a, c, u) {
  var i = Object(r["A"])("particles"), l = Object(r["A"])("app-navigation"),
      s = Object(r["A"])("router-view");
  return Object(r["s"])(), Object(r["f"])(r["a"], null,
                                          [
                                            Object(r["j"])(i, {
                                              id : "tsparticles",
                                              options : e.particlesOptions
                                            },
                                                           null, 8,
                                                           [ "options" ]),
                                            Object(r["g"])("div", o,
                                                           [
                                                             Object(r["j"])(l),
                                                             Object(r["j"])(s, null, {
                                                               default : Object(r["G"])((function(
                                                                   e) {
                                                                 var t =
                                                                     e.Component;
                                                                 return [ Object(
                                                                     r["j"])(
                                                                     r["b"], {
                                                                       name :
                                                                           "fade",
                                                                       mode :
                                                                           "out-in"
                                                                     },
                                                                     {
                                                                       default : Object(
                                                                           r["G"])((function() {
                                                                         return [
                                                                           (Object(
                                                                                r["s"])(),
                                                                            Object(
                                                                                r["e"])(Object(
                                                                                r["B"])(
                                                                                t)))
                                                                         ]
                                                                       })),
                                                                       _ : 2
                                                                     },
                                                                     1024) ]
                                                               })),
                                                               _ : 1
                                                             })
                                                           ])
                                          ],
                                          64)
}
var u = {class : ""}, i = {class : "max-w-1xl mx-auto"},
    l = {class : "flex justify-between text-2xl"},
    s = {class : "flex space-x-6 items-center"}, b = Object(r["i"])("Home"),
    f = Object(r["i"])("About"), d = Object(r["i"])("Resume"),
    p = Object(r["h"])(
        '<div class="flex space-x-4 items-center py-4 px-2"><a href="https://www.linkedin.com/in/peer-de-bakker-a5b866120/"><i class="fab fa-linkedin"></i></a><a href="https://github.com/pde-bakk/"><i class="fab fa-github-square"></i></a><a href="mailto:ptdebakker@gmail.com"><i class="fas fa-envelope-square"></i></a></div>',
        1);
function m(e, t, n, a, o, c) {
  var m = Object(r["A"])("router-link");
  return Object(r["s"])(),Object(r["f"])("nav",u,[Object(r["g"])("div",i,[Object(r["g"])("div",l,[Object(r["g"])("div",s,[Object(r["j"])(m,{to:{name:"Home"},class:"py-4 px-2 text-black-500 font-bold text-left border-b-4 border-transparent text-gray-100"},{default:Object(r["G"])((function(){return[b]})),_:1}),Object(r["j"])(m,{to:{name:"About"},class:"py-4 px-2 text-black-500 font-bold border-b-4 border-transparent text-gray-200"},{default:Object(r["G"])((function(){return[f]})),_:1}),Object(r["j"])(m,{to:{name:"Resume"},class:"py-4 px-2 text-black-500 font-bold border-b-4 border-transparent text-gray-300"},{default:Object(r["G"])((function(){return[d]})),_:1})]),p])])])
}
var h = Object(r["k"])({name : "Navigation"});
h.render = m;
var v = h, j = {
  fpsLimit : 60,
  background : {color : "#0b032d"},
  backgroundMode : {enable : !0},
  particles : {
    color : {value : [ "#f67e7d", "#843b62", "#621940" ]},
    links : {color : "#ffb997", enable : !0},
    move : {enable : !0, speed : 6},
    size : {
      value : 5,
      random : {enable : !0, minimumValue : 1},
      animation : {enable : !0, speed : 2.5, minimumValue : 1}
    },
    opacity : {value : .8, random : {enable : !0, minimumValue : .4}}
  }
},
    O = Object(r["k"])({
      components : {AppNavigation : v},
      data : function() {
        return { particlesOptions: j }
      }
    });
n("6271");
O.render = c;
var g = O, y = (n("d3b7"), n("3ca3"), n("ddb0"), n("6c02")),
    k = function() { return n.e("chunk-2d21a3d2").then(n.bind(null, "bb51")) },
    x = function() { return n.e("chunk-3fa9c480").then(n.bind(null, "f820")) },
    w = function() { return n.e("about").then(n.bind(null, "1ba2")) },
    A =
        [
          {path : "/", name : "Home", component : k},
          {path : "/about", name : "About", component : x},
          {path : "/resume", name : "Resume", component : w}
        ],
    _ = Object(y["a"])({
      history : Object(y["b"])("/"),
      routes : A,
      linkExactActiveClass : "text-pink-500 border-b-4 border-pink-500"
    }),
    E = _, P = n("5502"),
    C = Object(P["a"])(
        {state : {}, mutations : {}, actions : {}, modules : {}}),
    S = (n("ba8c"), n("845f"), Object(r["d"])(g));
S.use(C), S.use(E), S.use(a["a"]), S.mount("#app")
  }
});
//# sourceMappingURL=app.55f3a3a5.js.map