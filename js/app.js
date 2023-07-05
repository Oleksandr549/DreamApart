(() => {
  "use strict";
  let e = !1;
  setTimeout(() => {
    if (e) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    $(function () {
      if (null !== document.querySelector(".main_form")) {
        const r = (e) => {
          document.querySelectorAll(".form-step").forEach((e) => {
            e.classList.add("d-none");
          }),
            document.querySelectorAll(".form-stepper-list").forEach((e) => {
              e.classList.add("form-stepper-unfinished"),
                e.classList.remove(
                  "form-stepper-active",
                  "form-stepper-completed"
                );
            }),
            document.querySelector("#step-" + e).classList.remove("d-none");
          const t = document.querySelector('li[step="' + e + '"]');
          t.classList.remove(
            "form-stepper-unfinished",
            "form-stepper-completed"
          ),
            t.classList.add("form-stepper-active");
          for (let t = 0; t < e; t++) {
            const e = document.querySelector('li[step="' + t + '"]');
            e &&
              (e.classList.remove(
                "form-stepper-unfinished",
                "form-stepper-active"
              ),
              e.classList.add("form-stepper-completed"));
          }
        };
        document.querySelectorAll(".btn-navigate-form-step").forEach((e) => {
          e.addEventListener("click", () => {
            const t = parseInt(e.getAttribute("step_number"));
            r(t);
          });
        });
      }
      if (null !== document.querySelector(".filter-content")) {
        const c = document.querySelectorAll(".filter_btns"),
          s = document.querySelectorAll(".filter-content");
        c.forEach((e, t) => {
          e.addEventListener("click", () => {
            return (
              (e = t),
              c.forEach((t, o) => {
                t.classList.contains("active")
                  ? t.classList.remove("active", o === e)
                  : t.classList.toggle("active", o === e);
              }),
              void s.forEach((t, o) => {
                t.classList.contains("active")
                  ? t.classList.remove("active", o === e)
                  : t.classList.toggle("active", o === e);
              })
            );
            var e;
          });
        });
      }
      if (null !== document.querySelector(".btn-map")) {
        const l = document.querySelectorAll(".btn-map"),
          n = document.querySelectorAll(".map-popup");
        document.querySelector(".map-popup");
        document.querySelectorAll(".close-popup").forEach((e, t) => {
          e.addEventListener("click", () => {
            return (
              (e = t),
              void n.forEach((t, o) => {
                t.classList.contains("active")
                  ? t.classList.remove("active", o === e)
                  : t.classList.toggle("active", o === e);
              })
            );
            var e;
          });
        }),
          l.forEach((e, t) => {
            e.addEventListener("click", () => {
              return (
                (e = t),
                void n.forEach((t, o) => {
                  t.classList.contains("active")
                    ? t.classList.remove("active", o === e)
                    : t.classList.toggle("active", o === e);
                })
              );
              var e;
            });
          });
      }
      if (
        (null !== document.querySelector(".js-range-slider") &&
          $(".js-range-slider").ionRangeSlider({ skin: "round" }),
        null !== document.querySelector(".map-popup"))
      ) {
        const i = document.querySelectorAll(".btn-map"),
          a = document.querySelectorAll(".map-popup"),
          d = document.querySelectorAll(".close-popup"),
          u = document.body;
        i.forEach((e, t) => {
          e.addEventListener("click", () => {
            return (
              (e = t),
              i.forEach((t, o) => {
                t.classList.toggle("active", o === e);
              }),
              a.forEach((t, o) => {
                t.classList.toggle("active", o === e);
              }),
              a.forEach((e) => {
                e.classList.contains("active") || (u.style.overflow = "auto");
              }),
              void a.forEach((e) => {
                e.classList.contains("active") && (u.style.overflow = "hidden");
              })
            );
            var e;
          });
        }),
          d.forEach((e, t) => {
            e.addEventListener("click", () => {
              return (
                (e = t),
                a.forEach((t, o) => {
                  t.classList.remove("active", o === e);
                }),
                i.forEach((t, o) => {
                  t.classList.remove("active", o === e);
                }),
                void a.forEach((e) => {
                  e.classList.contains("active") || (u.style.overflow = "auto");
                })
              );
              var e;
            });
          });
      }
      if (null !== document.querySelector("#map")) {
        var e = L.map("map").setView([52.22977, 21.01178], 13);
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 30,
        }).addTo(e);
        L.popup()
          .setLatLng([52.22977, 21.01178])
          .setContent(
            '   <div class="marker-map_container"><img src=\'img/056A3873.png\' alt="map"><h6>Projekt Cuberniok</h6><p>Szczyrk, ul. Pod Stokiem 10</p><button type="button" class="btn-gold">Sprawdź dojazd</button></div> '
          )
          .openOn(e);
      }
      if (null !== document.querySelector("#map2")) {
        var t = L.map("map2").setView([52.22977, 21.01178], 13);
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 30,
        }).addTo(t);
        L.popup()
          .setLatLng([52.22977, 21.01178])
          .setContent(
            '   <div class="marker-map_container"><img src=\'img/056A3873.png\' alt="map"><h6>Projekt Cuberniok</h6><p>Szczyrk, ul. Pod Stokiem 10</p><button type="button" class="btn-gold">Sprawdź dojazd</button></div> '
          )
          .openOn(t);
      }
      if (null !== document.querySelector(".mySwiper-media")) {
        new Swiper(".mySwiper-media", {
          slidesPerView: 4,
          spaceBetween: 20,
          speed: 1e3,
          navigation: {
            nextEl: ".swiper-button-next-media",
            prevEl: ".swiper-button-prev-media",
          },
        });
      }
      if (null !== document.querySelector(".objects-list")) {
        new Swiper(".objects-list", {
          spaceBetween: 28,
          speed: 1e3,
          breakpoints: {
            1: { slidesPerView: 1 },
            500: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          },
        });
      }
      if (null !== document.querySelector(".objects-list2")) {
        new Swiper(".objects-list2", {
          spaceBetween: 28,
          speed: 1e3,
          breakpoints: {
            1: { slidesPerView: 1 },
            500: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          },
        });
      }
      if (null !== document.querySelector(".circle-container")) {
        function m(e) {
          e.forEach((e) => {
            e.isIntersecting && v();
          });
        }
        let p = new IntersectionObserver(m, { threshold: [0.6] }),
          f = document.querySelectorAll(".circle-animation");
        for (let y of f) p.observe(y);
        function v() {
          const e = document.querySelector(".circle-container"),
            t = (2 * Math.PI) / 36;
          for (let o = 0; o < 36; o++) {
            const r = document.createElement("div");
            (r.className = "stripe"),
              (r.style.transform = `rotate(${
                t * o - Math.PI / 2
              }rad) translate(150px) rotate(${Math.PI / 2}rad)`),
              e.appendChild(r),
              setTimeout(function () {
                r.style.opacity = 1;
              }, 50 * (o + 1)),
              ((e) => 36) &&
                setTimeout(function () {
                  document.querySelector(".text").style.opacity = 1;
                }, 1500);
          }
        }
      }
      if (null !== document.querySelector(".element-animation")) {
        function h(e) {
          e.forEach((e) => {
            e.isIntersecting
              ? e.target.classList.add("active")
              : e.target.classList.remove("active");
          });
        }
        let S = new IntersectionObserver(h, { threshold: [0.6] }),
          w = document.querySelectorAll(".element-animation");
        for (let g of w) S.observe(g);
      }
      if (null !== document.querySelector(".burger_menu")) {
        const q = document.querySelector(".nav-container"),
          E = document.querySelector(".header-top"),
          b = document.querySelector(".close");
        document
          .querySelector(".burger_menu")
          .addEventListener("click", function () {
            q.classList.toggle("active"), E.classList.toggle("active");
          }),
          b.addEventListener("click", function () {
            q.classList.remove("active"), E.classList.toggle("active");
          });
      }
      if (null !== document.querySelector(".btn-moreText")) {
        const k = document.querySelector(".text-hide"),
          A = document.querySelector(".btn-moreText");
        k.classList.add("active"),
          A.addEventListener("click", function () {
            k.classList.toggle("active");
          });
      }
      if (
        (null !== document.querySelector(".header-bottom_filters") &&
          $(".header-bottom_filters").flickity({
            cellAlign: "left",
            contain: !0,
          }),
        null !== document.querySelector(".spoiler-trigger") &&
          $(document).on("click", ".spoiler-trigger", function (e) {
            e.preventDefault(),
              $(this).toggleClass("active"),
              $(this).parent().find(".spoiler-block").first().slideToggle(300);
          }),
        null !== document.querySelector(".header-top"))
      ) {
        const T = document.querySelector(".header-top").offsetHeight + "px";
        document.querySelector(".nav-container").style.marginTop = T;
      }
      if (null !== document.querySelector(".page")) {
        const _ = document.querySelector(".header").offsetHeight + "px";
        document.querySelector(".page").style.marginTop = _;
      }
      const o =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      if (null !== document.querySelector(".btn-more-swiper") && o > 390) {
        function x() {
          const e = document.querySelector(".image-counter"),
            t = document
              .querySelector(".product-cart-swiper")
              .querySelector(".swiper-wrapper"),
            o =
              window.innerWidth ||
              document.documentElement.clientWidth ||
              document.body.clientWidth;
          let r = t.querySelectorAll(".swiper-slide").length,
            c = 5;
          o <= 768 && (c = 3),
            t.querySelectorAll(".swiper-slide").forEach(function (e) {
              e.classList.add("d-none");
            }),
            t
              .querySelectorAll(".swiper-slide:nth-child(-n+" + c + ")")
              .forEach(function (e) {
                e.classList.remove("d-none");
              }),
            t
              .querySelector(".btn-more-swiper")
              .addEventListener("click", function (e) {
                e.preventDefault(),
                  (c = c + 99 <= r ? c + 99 : r),
                  setTimeout(
                    function () {
                      t
                        .querySelectorAll(
                          ".swiper-slide:nth-child(-n+" + c + ")"
                        )
                        .forEach(function (e) {
                          e.classList.remove("d-none");
                        }),
                        t.querySelectorAll(".swiper-slide:not(.d-none)")
                          .length == r && this.parentNode.removeChild(this);
                    }.bind(this),
                    500
                  );
              }),
            (e.innerHTML = r - c);
        }
        x();
      }
      if (null !== document.querySelector(".product-cart-swiper") && o <= 391) {
        const P = document.querySelector(".product-cart-swiper");
        console.log(o), P.classList.add("swiper");
        new Swiper(".product-cart-swiper", {
          slidesPerView: 1,
          speed: 1e3,
          pagination: {
            el: ".swiper-pagination-product-cart",
            type: "fraction",
          },
          navigation: {
            nextEl: ".swiper-button-next-product-cart",
            prevEl: ".swiper-button-prev-product-cart",
          },
        });
      }
      if (null !== document.querySelector("#datepicker")) {
        MCDatepicker.create({
          el: "#datepicker",
          bodyType: "inline",
          closeOnBlur: !0,
          dateFormat: "DD.MM.YYYY",
        });
      }
      if (null !== document.querySelector("#datepicker2")) {
        MCDatepicker.create({
          el: "#datepicker2",
          bodyType: "inline",
          closeOnBlur: !0,
          dateFormat: "DD.MM.YYYY",
          customClearBTN: "Wyczyść daty",
          customCancelBTN: "",
        });
      }
      if (null !== document.querySelector("#datepicker3")) {
        MCDatepicker.create({
          el: "#datepicker3",
          bodyType: "inline",
          closeOnBlur: !0,
          dateFormat: "DD.MM.YYYY",
          customCancelBTN: "",
          customClearBTN: "Wyczyść daty",
        });
      }
      if (null !== document.querySelector(".btn-filters1")) {
        const C = document.querySelectorAll(".btn-filters1"),
          M = document.querySelectorAll(".filters-popup"),
          Y = document.querySelectorAll(".close-popup2"),
          D = document.body;
        console.log(M),
          console.log(C),
          console.log(Y),
          C.forEach((e, t) => {
            e.addEventListener("click", () => {
              return (
                (e = t),
                C.forEach((t, o) => {
                  t.classList.toggle("active", o === e);
                }),
                M.forEach((t, o) => {
                  t.classList.toggle("active", o === e);
                }),
                M.forEach((e) => {
                  e.classList.contains("active") || (D.style.overflow = "auto");
                }),
                void M.forEach((e) => {
                  e.classList.contains("active") &&
                    (D.style.overflow = "hidden");
                })
              );
              var e;
            });
          }),
          Y.forEach((e, t) => {
            e.addEventListener("click", () => {
              return (
                (e = t),
                M.forEach((t, o) => {
                  t.classList.remove("active", o === e);
                }),
                C.forEach((t, o) => {
                  t.classList.remove("active", o === e);
                }),
                void M.forEach((e) => {
                  e.classList.contains("active") || (D.style.overflow = "auto");
                })
              );
              var e;
            });
          });
      }
    }),
    (function () {
      e = !0;
      const t = document.querySelector("header.header"),
        o = t.hasAttribute("data-scroll-show"),
        r = t.dataset.scrollShow ? t.dataset.scrollShow : 500,
        c = t.dataset.scroll ? t.dataset.scroll : 1;
      let s,
        l = 0;
      document.addEventListener("windowScroll", function (e) {
        const n = window.scrollY;
        clearTimeout(s),
          n >= c
            ? (!t.classList.contains("_header-scroll") &&
                t.classList.add("_header-scroll"),
              o &&
                (n > l
                  ? t.classList.contains("_header-show") &&
                    t.classList.remove("_header-show")
                  : !t.classList.contains("_header-show") &&
                    t.classList.add("_header-show"),
                (s = setTimeout(() => {
                  !t.classList.contains("_header-show") &&
                    t.classList.add("_header-show");
                }, r))))
            : (t.classList.contains("_header-scroll") &&
                t.classList.remove("_header-scroll"),
              o &&
                t.classList.contains("_header-show") &&
                t.classList.remove("_header-show")),
          (l = n <= 0 ? 0 : n);
      });
    })();
})();
