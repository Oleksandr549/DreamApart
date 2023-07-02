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
        function o(e) {
          e.forEach((e) => {
            e.isIntersecting && c();
          });
        }
        let n = new IntersectionObserver(o, { threshold: [0.6] }),
          r = document.querySelectorAll(".circle-animation");
        for (let i of r) n.observe(i);
        function c() {
          const e = document.querySelector(".circle-container"),
            t = (2 * Math.PI) / 36;
          for (let o = 0; o < 36; o++) {
            const n = document.createElement("div");
            (n.className = "stripe"),
              (n.style.transform = `rotate(${
                t * o - Math.PI / 2
              }rad) translate(150px) rotate(${Math.PI / 2}rad)`),
              e.appendChild(n),
              setTimeout(function () {
                n.style.opacity = 1;
              }, 50 * (o + 1)),
              ((e) => 36) &&
                setTimeout(function () {
                  document.querySelector(".text").style.opacity = 1;
                }, 1500);
          }
        }
      }
      if (null !== document.querySelector(".element-animation")) {
        function s(e) {
          e.forEach((e) => {
            e.isIntersecting
              ? e.target.classList.add("active")
              : e.target.classList.remove("active");
          });
        }
        let l = new IntersectionObserver(s, { threshold: [0.6] }),
          a = document.querySelectorAll(".element-animation");
        for (let d of a) l.observe(d);
      }
      if (null !== document.querySelector(".burger_menu")) {
        const u = document.querySelector(".nav-container"),
          m = document.querySelector(".header-top"),
          p = document.querySelector(".close");
        document
          .querySelector(".burger_menu")
          .addEventListener("click", function () {
            u.classList.toggle("active"), m.classList.toggle("active");
          }),
          p.addEventListener("click", function () {
            u.classList.remove("active"), m.classList.toggle("active");
          });
      }
      if (null !== document.querySelector(".btn-moreText")) {
        const h = document.querySelector(".text-hide"),
          w = document.querySelector(".btn-moreText");
        h.classList.add("active"),
          w.addEventListener("click", function () {
            h.classList.toggle("active");
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
        const f = document.querySelector(".header-top").offsetHeight + "px";
        document.querySelector(".nav-container").style.marginTop = f;
      }
      if (null !== document.querySelector(".main")) {
        const y = document.querySelector(".header").offsetHeight + "px";
        document.querySelector(".main").style.marginTop = y;
      }
      const t =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      if (null !== document.querySelector(".btn-more-swiper") && t > 390) {
        function S() {
          const e = document.querySelector(".image-counter"),
            t = document
              .querySelector(".product-cart-swiper")
              .querySelector(".swiper-wrapper"),
            o =
              window.innerWidth ||
              document.documentElement.clientWidth ||
              document.body.clientWidth;
          let n = t.querySelectorAll(".swiper-slide").length,
            r = 5;
          o <= 768 && (r = 3),
            t.querySelectorAll(".swiper-slide").forEach(function (e) {
              e.classList.add("d-none");
            }),
            t
              .querySelectorAll(".swiper-slide:nth-child(-n+" + r + ")")
              .forEach(function (e) {
                e.classList.remove("d-none");
              }),
            t
              .querySelector(".btn-more-swiper")
              .addEventListener("click", function (e) {
                e.preventDefault(),
                  (r = r + 99 <= n ? r + 99 : n),
                  setTimeout(
                    function () {
                      t
                        .querySelectorAll(
                          ".swiper-slide:nth-child(-n+" + r + ")"
                        )
                        .forEach(function (e) {
                          e.classList.remove("d-none");
                        }),
                        t.querySelectorAll(".swiper-slide:not(.d-none)")
                          .length == n && this.parentNode.removeChild(this);
                    }.bind(this),
                    500
                  );
              }),
            (e.innerHTML = n - r);
        }
        S();
      }
      if (
        (console.log(t),
        null !== document.querySelector(".product-cart-swiper") && t <= 391)
      ) {
        const g = document.querySelector(".product-cart-swiper");
        console.log(t), g.classList.add("swiper");
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
    }),
    (function () {
      e = !0;
      const t = document.querySelector("header.header"),
        o = t.hasAttribute("data-scroll-show"),
        n = t.dataset.scrollShow ? t.dataset.scrollShow : 500,
        r = t.dataset.scroll ? t.dataset.scroll : 1;
      let c,
        i = 0;
      document.addEventListener("windowScroll", function (e) {
        const s = window.scrollY;
        clearTimeout(c),
          s >= r
            ? (!t.classList.contains("_header-scroll") &&
                t.classList.add("_header-scroll"),
              o &&
                (s > i
                  ? t.classList.contains("_header-show") &&
                    t.classList.remove("_header-show")
                  : !t.classList.contains("_header-show") &&
                    t.classList.add("_header-show"),
                (c = setTimeout(() => {
                  !t.classList.contains("_header-show") &&
                    t.classList.add("_header-show");
                }, n))))
            : (t.classList.contains("_header-scroll") &&
                t.classList.remove("_header-scroll"),
              o &&
                t.classList.contains("_header-show") &&
                t.classList.remove("_header-show")),
          (i = s <= 0 ? 0 : s);
      });
    })();
})();
