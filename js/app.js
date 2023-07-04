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
          n = document.querySelectorAll(".filter-content");
        c.forEach((e, t) => {
          e.addEventListener("click", () => {
            return (
              (e = t),
              c.forEach((t, o) => {
                t.classList.contains("active")
                  ? t.classList.remove("active", o === e)
                  : t.classList.toggle("active", o === e);
              }),
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
      if (null !== document.querySelector(".btn-map")) {
        const s = document.querySelectorAll(".btn-map"),
          l = document.querySelectorAll(".map-popup");
        document.querySelector(".map-popup");
        document.querySelectorAll(".close-popup").forEach((e, t) => {
          e.addEventListener("click", () => {
            return (
              (e = t),
              void l.forEach((t, o) => {
                t.classList.contains("active")
                  ? t.classList.remove("active", o === e)
                  : t.classList.toggle("active", o === e);
              })
            );
            var e;
          });
        }),
          s.forEach((e, t) => {
            e.addEventListener("click", () => {
              return (
                (e = t),
                void l.forEach((t, o) => {
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
        null !== document.querySelector(".filters"))
      ) {
        const i = document.querySelectorAll(".btn-map"),
          a = document.querySelectorAll(".filters-popup");
        document.querySelectorAll(".close-popup").forEach((e, t) => {
          e.addEventListener("click", () => {
            return (
              (e = t),
              void a.forEach((t, o) => {
                t.classList.contains("active")
                  ? t.classList.remove("active", o === e)
                  : t.classList.toggle("active", o === e);
              })
            );
            var e;
          });
        }),
          i.forEach((e, t) => {
            e.addEventListener("click", () => {
              return (
                (e = t),
                void a.forEach((t, o) => {
                  t.classList.contains("active")
                    ? t.classList.remove("active", o === e)
                    : t.classList.toggle("active", o === e);
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
        function d(e) {
          e.forEach((e) => {
            e.isIntersecting && p();
          });
        }
        let u = new IntersectionObserver(d, { threshold: [0.6] }),
          m = document.querySelectorAll(".circle-animation");
        for (let f of m) u.observe(f);
        function p() {
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
        function y(e) {
          e.forEach((e) => {
            e.isIntersecting
              ? e.target.classList.add("active")
              : e.target.classList.remove("active");
          });
        }
        let v = new IntersectionObserver(y, { threshold: [0.6] }),
          h = document.querySelectorAll(".element-animation");
        for (let S of h) v.observe(S);
      }
      if (null !== document.querySelector(".burger_menu")) {
        const w = document.querySelector(".nav-container"),
          g = document.querySelector(".header-top"),
          q = document.querySelector(".close");
        document
          .querySelector(".burger_menu")
          .addEventListener("click", function () {
            w.classList.toggle("active"), g.classList.toggle("active");
          }),
          q.addEventListener("click", function () {
            w.classList.remove("active"), g.classList.toggle("active");
          });
      }
      if (null !== document.querySelector(".btn-moreText")) {
        const b = document.querySelector(".text-hide"),
          E = document.querySelector(".btn-moreText");
        b.classList.add("active"),
          E.addEventListener("click", function () {
            b.classList.toggle("active");
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
        const k = document.querySelector(".header-top").offsetHeight + "px";
        document.querySelector(".nav-container").style.marginTop = k;
      }
      if (null !== document.querySelector(".page")) {
        const A = document.querySelector(".header").offsetHeight + "px";
        document.querySelector(".page").style.marginTop = A;
      }
      const o =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      if (null !== document.querySelector(".btn-more-swiper") && o > 390) {
        function T() {
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
        T();
      }
      if (null !== document.querySelector(".product-cart-swiper") && o <= 391) {
        const _ = document.querySelector(".product-cart-swiper");
        console.log(o), _.classList.add("swiper");
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
    }),
    (function () {
      e = !0;
      const t = document.querySelector("header.header"),
        o = t.hasAttribute("data-scroll-show"),
        r = t.dataset.scrollShow ? t.dataset.scrollShow : 500,
        c = t.dataset.scroll ? t.dataset.scroll : 1;
      let n,
        s = 0;
      document.addEventListener("windowScroll", function (e) {
        const l = window.scrollY;
        clearTimeout(n),
          l >= c
            ? (!t.classList.contains("_header-scroll") &&
                t.classList.add("_header-scroll"),
              o &&
                (l > s
                  ? t.classList.contains("_header-show") &&
                    t.classList.remove("_header-show")
                  : !t.classList.contains("_header-show") &&
                    t.classList.add("_header-show"),
                (n = setTimeout(() => {
                  !t.classList.contains("_header-show") &&
                    t.classList.add("_header-show");
                }, r))))
            : (t.classList.contains("_header-scroll") &&
                t.classList.remove("_header-scroll"),
              o &&
                t.classList.contains("_header-show") &&
                t.classList.remove("_header-show")),
          (s = l <= 0 ? 0 : l);
      });
    })();
})();
