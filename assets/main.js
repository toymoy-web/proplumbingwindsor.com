(function () {
  var t = document.getElementById("mob-toggle");
  var d = document.getElementById("mob-drawer");
  var o = document.getElementById("mob-overlay");
  var c = document.getElementById("drawer-close");
  if (t && d && o) {
    var openDrawer = function () {
      d.classList.add("open");
      o.classList.add("visible");
      t.setAttribute("aria-expanded", "true");
      t.setAttribute("aria-label", "Close navigation menu");
      document.documentElement.style.overflow = "hidden";
    };
    var closeDrawer = function () {
      d.classList.remove("open");
      o.classList.remove("visible");
      t.setAttribute("aria-expanded", "false");
      t.setAttribute("aria-label", "Open navigation menu");
      document.documentElement.style.overflow = "";
    };
    t.addEventListener("click", function () {
      if (t.getAttribute("aria-expanded") === "true") { closeDrawer(); } else { openDrawer(); }
    });
    if (c) { c.addEventListener("click", closeDrawer); }
    o.addEventListener("click", closeDrawer);
    d.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeDrawer); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeDrawer(); } });
    window.addEventListener("resize", function () { if (window.innerWidth > 768) { closeDrawer(); } });
  }
  document.querySelectorAll(".faq-q").forEach(function (b) {
    b.addEventListener("click", function () {
      var item = b.parentNode;
      var isOpen = item.classList.contains("open");
      item.classList.toggle("open", !isOpen);
      b.setAttribute("aria-expanded", isOpen ? "false" : "true");
    });
  });
})();
