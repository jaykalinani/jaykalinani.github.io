document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const themeToggle = document.getElementById("theme-menu-toggle");
  const themeIcon = document.querySelector("[data-theme-icon]");
  const themeOptions = document.querySelectorAll("[data-theme-preference]");

  if (!window.siteTheme || !themeToggle || !themeIcon || themeOptions.length === 0) return;

  const iconByPreference = {
    light: "fa-sun",
    dark: "fa-moon",
    system: "fa-desktop",
  };

  function formatPreference(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  function syncThemeControl() {
    const preference = window.siteTheme.getPreference();
    const resolvedTheme = window.siteTheme.getResolvedTheme();
    const preferenceLabel = formatPreference(preference);
    const resolvedLabel = formatPreference(resolvedTheme);
    const accessibleLabel =
      preference === "system"
        ? "Display preferences: System, currently " + resolvedLabel
        : "Display preferences: " + preferenceLabel;

    themeIcon.className = "fas " + iconByPreference[preference];
    themeToggle.setAttribute("aria-label", accessibleLabel);
    themeToggle.setAttribute("title", accessibleLabel);

    themeOptions.forEach(function (option) {
      const isSelected = option.dataset.themePreference === preference;
      option.classList.toggle("active", isSelected);
      option.setAttribute("aria-checked", String(isSelected));
    });
  }

  themeOptions.forEach(function (option) {
    option.addEventListener("click", function () {
      window.siteTheme.setPreference(option.dataset.themePreference);
      syncThemeControl();
    });
  });

  window.addEventListener("site-theme-change", syncThemeControl);
  window.siteTheme.refresh({ animate: false });
  syncThemeControl();
});
