(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-3fa9c480"],
  {
    "44b9": function (e, t, n) {},
    "857a": function (e, t, n) {
      var i = n("1d80"),
        a = n("577e"),
        s = /"/g;
      e.exports = function (e, t, n, o) {
        var c = a(i(e)),
          r = "<" + t;
        return (
          "" !== n && (r += " " + n + '="' + a(o).replace(s, "&quot;") + '"'),
          r + ">" + c + "</" + t + ">"
        );
      };
    },
    9911: function (e, t, n) {
      "use strict";
      var i = n("23e7"),
        a = n("857a"),
        s = n("af03");
      i(
        { target: "String", proto: !0, forced: s("link") },
        {
          link: function (e) {
            return a(this, "a", "href", e);
          },
        }
      );
    },
    af03: function (e, t, n) {
      var i = n("d039");
      e.exports = function (e) {
        return i(function () {
          var t = ""[e]('"');
          return t !== t.toLowerCase() || t.split('"').length > 3;
        });
      };
    },
    b0c0: function (e, t, n) {
      var i = n("83ab"),
        a = n("9bf2").f,
        s = Function.prototype,
        o = s.toString,
        c = /^\s*function ([^ (]*)/,
        r = "name";
      i &&
        !(r in s) &&
        a(s, r, {
          configurable: !0,
          get: function () {
            try {
              return o.call(this).match(c)[1];
            } catch (e) {
              return "";
            }
          },
        });
    },
    e02c: function (e, t, n) {
      "use strict";
      n("44b9");
    },
    f820: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("7a23");
      function a(e, t, n, a, s, o) {
        var c = Object(i["A"])("app-list-widget");
        return (
          Object(i["s"])(),
          Object(i["e"])(c, { programming: e.programming }, null, 8, [
            "programming",
          ])
        );
      }
      n("b0c0"), n("a4d3"), n("e01a"), n("9911");
      Object(i["w"])("data-v-e44151a4");
      var s = { class: "flex flex-wrap justify-center" },
        o = { class: "p-3" },
        c = { class: "max-w-sm rounded overflow-hidden shadow-lg" },
        r = ["src", "alt"],
        l = { class: "px-6 py-4 bg-white" },
        p = { class: "font-bold text-xl mb-2" },
        u = { class: "text-gray-700 text-base" },
        d = { class: "flex flex-wrap px-6 pt-4 pb-2 bg-white" },
        g = ["href"],
        m = {
          class:
            "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2",
        };
      function b(e, t, n, a, b, h) {
        return (
          Object(i["s"])(),
          Object(i["f"])("div", s, [
            (Object(i["s"])(!0),
            Object(i["f"])(
              i["a"],
              null,
              Object(i["z"])(e.programming, function (e) {
                return (
                  Object(i["s"])(),
                  Object(i["f"])("div", { key: e }, [
                    Object(i["g"])("div", o, [
                      Object(i["g"])("div", c, [
                        Object(i["g"])(
                          "img",
                          { src: "icons/".concat(e.icon), alt: e.name },
                          null,
                          8,
                          r
                        ),
                        Object(i["g"])("div", l, [
                          Object(i["g"])("div", p, Object(i["D"])(e.name), 1),
                          Object(i["g"])(
                            "p",
                            u,
                            Object(i["D"])(e.description),
                            1
                          ),
                        ]),
                        Object(i["g"])("div", d, [
                          (Object(i["s"])(!0),
                          Object(i["f"])(
                            i["a"],
                            null,
                            Object(i["z"])(e.links, function (e) {
                              return (
                                Object(i["s"])(),
                                Object(i["f"])("div", { key: e }, [
                                  Object(i["g"])(
                                    "a",
                                    { href: e.link },
                                    [
                                      Object(i["g"])(
                                        "span",
                                        m,
                                        Object(i["D"])(e.name),
                                        1
                                      ),
                                    ],
                                    8,
                                    g
                                  ),
                                ])
                              );
                            }),
                            128
                          )),
                        ]),
                      ]),
                    ]),
                  ])
                );
              }),
              128
            )),
          ])
        );
      }
      Object(i["t"])();
      var h = Object(i["k"])({ name: "ListWidget", props: ["programming"] });
      n("e02c");
      (h.render = b), (h.__scopeId = "data-v-e44151a4");
      var f = h,
        k = [
          {
            name: "C",
            icon: "c.png",
            description:
              "C was the first programming language I ever learnt, because the piscine and the first part of the 42 curriculum is done entirely in C. Knowing C has been useful to me for so much more than just writing C code: it makes learning new languages that much easier because everything is based on C.",
            links: [
              {
                name: "Raytracer",
                link: "https://github.com/pde-bakk/minirt",
              },
              {
                name: "Minishell",
                link: "https://github.com/pde-bakk/minishell",
              },
              {
                name: "Push Swap",
                link: "https://github.com/pde-bakk/push_swap",
              },
            ],
          },
          {
            name: "Python",
            icon: "python.png",
            description:
              "From simple scripts to freelance job projects to datascience assignments, picking up Python has been a cakewalk and it's become a core foundation of my programming skills.",
            links: [
              {
                name: "Datascience Logistic Regression",
                link: "https://github.com/pde-bakk/DSLR",
              },
              {
                name: "Advent of Code",
                link: "https://github.com/pde-bakk/AdventOfCode",
              },
              {
                name: "Bootcamp Python",
                link: "https://github.com/pde-bakk/bootcamp_python",
              },
            ],
          },
          {
            name: "C++",
            icon: "cplusplus.png",
            description:
              "Halfway through the core curriculum at 42, C takes a step backwards and swooping in comes C++ to teach us about templates, containers, writing our own webserver, and on Codingame it has become my goto for grapsh search algorithms <3.",
            links: [
              {
                name: "Battleship",
                link: "https://github.com/sandraroz/RiskWarzone_Game-1",
              },
            ],
          },
          {
            name: "Ruby",
            icon: "ruby.png",
            description:
              "Ruby was the first scripting language I took up, because I had friends who loved it and I can see why. I just wish it was as widely used as Python so issues would be better google-able.",
            links: [
              {
                name: "Cloudflight coding contest",
                link: "https://github.com/pde-bakk/Cloudflight-coding-contest.git",
              },
              {
                name: "Ft_transcendence",
                link: "https://github.com/pde-bakk/ft_transcendence.git",
              },
            ],
          },
          {
            name: "VBA",
            icon: "vba.jpeg",
            description:
              "For my work at Amsterdam at Home Makelaars I had to do a lot of data querying in Microsoft Access and write macro's in Excel. VBA is an absolute lifesaver.",
          },
          {
            name: "Git",
            icon: "git.png",
            description:
              "I love Git. An absolute necessity in today's tech world.",
            links: [{ name: "Github", link: "https://github.com/pde-bakk" }],
          },
          {
            name: "DevOps",
            icon: "devops.png",
            description:
              "For 42 projects such as ft_server and ft_services I had to dive into the world of DevOps with Dockerfiles and kubernetes. These skills still come in handy almost every day at work.",
            links: [
              {
                name: "Ft_server",
                link: "https://github.com/pde-bakk/ft_server.git",
              },
              {
                name: "Ft_services",
                link: "https://github.com/pde-bakk/ft_services.git",
              },
            ],
          },
          {
            name: "Rust",
            icon: "rust.png",
            description:
              "I love the safety of Rust while still maintaining the absolutely ridiculous speeds of C and C++. Therefore Rust has become my goto for Codingame competitions.",
          },
          {
            name: "Typescript",
            icon: "typescript.svg",
            description:
              "I love typescript, because it fixes all the issues I have with Javascript while keeping all the advantages.",
            links: [
              {
                name: "Portfolio",
                link: "https://github.com/sandraroz/portfolio",
              },
            ],
          },
          {
            name: "Vue.js",
            icon: "vue.png",
            description:
              "Vue is something I decided to pick up recently. I've been wanting to write my own personal website for a while now and I used this as practice for front-end related tasks at my job.",
            links: [
              {
                name: "Portfolio",
                link: "https://github.com/pde-bakk/personal-site.git",
              },
            ],
          },
          {
            name: "Javascript",
            icon: "javascript.png",
            description:
              "I wouldn't count javascript as one of my favourite languages since I love strongly typed languages, but it's been great to me for front-end projects. ",
            links: [
              {
                name: "Ft_transcendence",
                link: "https://github.com/pde-bakk/ft_transcendence.git",
              },
              {
                name: "Portfolio",
                link: "https://github.com/pde-bakk/personal-site.git",
              },
            ],
          },
        ],
        v = Object(i["k"])({
          components: { AppListWidget: f },
          name: "About",
          data: function () {
            return { programming: k };
          },
        });
      v.render = a;
      t["default"] = v;
    },
  },
]);
//# sourceMappingURL=chunk-3fa9c480.a4508e84.js.map
