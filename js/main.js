// YEARSEMA — shared site behaviour
(function () {
  "use strict";

  /* Mobile nav toggle */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("open", !open);
      document.body.style.overflow = !open ? "hidden" : "";
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  /* Work page: category filter */
  var filterRow = document.querySelector(".filter-row");
  if (filterRow) {
    var projects = document.querySelectorAll("[data-category]");
    filterRow.addEventListener("click", function (e) {
      var btn = e.target.closest("button");
      if (!btn) return;
      filterRow.querySelectorAll("button").forEach(function (b) {
        b.setAttribute("aria-pressed", "false");
      });
      btn.setAttribute("aria-pressed", "true");
      var val = btn.dataset.filter;
      projects.forEach(function (p) {
        var show = val === "all" || p.dataset.category === val;
        p.style.display = show ? "" : "none";
      });
    });
  }

  /* Video cards: play on click, graceful fallback if source is missing (future asset not yet added) */
  document.querySelectorAll(".video-card").forEach(function (card) {
    var video = card.querySelector("video");
    var trigger = card.querySelector(".ph");
    if (!video || !trigger) return;

    video.addEventListener("error", function () {
      card.classList.add("no-source");
    }, true);

    trigger.addEventListener("click", function () {
      if (card.classList.contains("no-source")) return;
      if (video.paused) {
        document.querySelectorAll(".video-card video").forEach(function (v) {
          if (v !== video) v.pause();
        });
        video.play().catch(function () { card.classList.add("no-source"); });
      } else {
        video.pause();
      }
    });
  });

  /* One orchestrated hero entrance (home page only) */
  var hero = document.querySelector(".hero");
  if (hero && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    hero.classList.add("reveal-ready");
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        hero.classList.add("reveal-in");
      });
    });
  }
})();
