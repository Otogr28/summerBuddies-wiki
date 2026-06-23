/* Make the header title ("Realm Gates") click through to the home page.
   Material only links the small logo icon home by default; the title text is a
   plain <div>. We resolve the home URL from the logo (or the first nav tab) and
   send the title there on click. Vanilla JS; safe to run on every page load. */
(function () {
  function homeHref() {
    var logo = document.querySelector(".md-header__button.md-logo");
    if (logo && logo.getAttribute("href")) return logo.getAttribute("href");
    var tab = document.querySelector(".md-tabs__link"); // first tab is Home
    if (tab && tab.getAttribute("href")) return tab.getAttribute("href");
    return null;
  }

  function link() {
    var title = document.querySelector(".md-header__title");
    if (!title || title.dataset.homeLinked) return;
    var href = homeHref();
    if (!href) return;
    title.dataset.homeLinked = "1";
    title.setAttribute("role", "link");
    title.setAttribute("tabindex", "0");
    title.addEventListener("click", function (e) {
      // don't hijack the search box or any real control nested in the header bar
      if (e.target.closest("a, button, input, label, .md-search")) return;
      window.location.href = href;
    });
    title.addEventListener("keydown", function (e) {
      if (e.key === "Enter") window.location.href = href;
    });
  }

  if (document.readyState !== "loading") link();
  else document.addEventListener("DOMContentLoaded", link);
})();
