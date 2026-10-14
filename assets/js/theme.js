// Runs in the document head so the selected theme is applied before first paint.
(function () {
  "use strict";

  const storageKey = "theme";
  const validPreferences = ["light", "dark", "system"];
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let preference = "system";
  let resolvedTheme = "light";

  function normalizePreference(value) {
    return validPreferences.includes(value) ? value : "system";
  }

  function readPreference() {
    try {
      return normalizePreference(window.localStorage.getItem(storageKey));
    } catch (error) {
      return "system";
    }
  }

  function savePreference(value) {
    try {
      window.localStorage.setItem(storageKey, value);
    } catch (error) {
      // Theme selection still works when storage is unavailable.
    }
  }

  function resolvePreference(value) {
    if (value === "system") {
      return systemTheme.matches ? "dark" : "light";
    }

    return value;
  }

  function startTransition() {
    if (reducedMotion.matches || document.readyState === "loading") return;

    document.documentElement.classList.add("transition");
    window.setTimeout(function () {
      document.documentElement.classList.remove("transition");
    }, 220);
  }

  function setHighlightTheme(theme) {
    const lightHighlight = document.getElementById("highlight_theme_light");
    const darkHighlight = document.getElementById("highlight_theme_dark");

    if (!lightHighlight || !darkHighlight) return;

    lightHighlight.media = theme === "dark" ? "none" : "";
    darkHighlight.media = theme === "dark" ? "" : "none";
  }

  function setTableTheme(theme) {
    document.querySelectorAll("table").forEach(function (table) {
      table.classList.toggle("table-dark", theme === "dark");
    });
  }

  function setNotebookTheme(theme) {
    document.querySelectorAll(".jupyter-notebook-iframe-container iframe").forEach(function (iframe) {
      try {
        const notebookBody = iframe.contentWindow.document.body;
        notebookBody.setAttribute("data-jp-theme-light", theme === "dark" ? "false" : "true");
        notebookBody.setAttribute("data-jp-theme-name", theme === "dark" ? "JupyterLab Dark" : "JupyterLab Light");
      } catch (error) {
        // Ignore notebooks whose document is not available yet.
      }
    });
  }

  function setGiscusTheme(theme) {
    const iframe = document.querySelector("iframe.giscus-frame");
    if (!iframe) return;

    iframe.contentWindow.postMessage(
      {
        giscus: {
          setConfig: { theme: theme },
        },
      },
      "https://giscus.app"
    );
  }

  function updateZoomBackground() {
    if (typeof medium_zoom === "undefined") return;

    medium_zoom.update({
      background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee",
    });
  }

  function syncThemeDependents(theme) {
    setHighlightTheme(theme);
    setTableTheme(theme);
    setNotebookTheme(theme);
    setGiscusTheme(theme);
    updateZoomBackground();
  }

  function applyPreference(value, options) {
    const settings = options || {};
    const nextPreference = normalizePreference(value);
    const nextResolvedTheme = resolvePreference(nextPreference);

    if (settings.animate && nextResolvedTheme !== resolvedTheme) {
      startTransition();
    }

    preference = nextPreference;
    resolvedTheme = nextResolvedTheme;
    document.documentElement.setAttribute("data-theme", resolvedTheme);
    document.documentElement.setAttribute("data-theme-preference", preference);
    document.documentElement.style.colorScheme = resolvedTheme;

    if (settings.persist) {
      savePreference(preference);
    }

    syncThemeDependents(resolvedTheme);
    window.dispatchEvent(
      new CustomEvent("site-theme-change", {
        detail: { preference: preference, resolvedTheme: resolvedTheme },
      })
    );
  }

  function refreshTheme(options) {
    applyPreference(preference, {
      animate: Boolean(options && options.animate),
      persist: false,
    });
  }

  window.siteTheme = {
    getPreference: function () {
      return preference;
    },
    getResolvedTheme: function () {
      return resolvedTheme;
    },
    refresh: refreshTheme,
    setPreference: function (value) {
      applyPreference(value, { animate: true, persist: true });
    },
  };

  applyPreference(readPreference(), { animate: false, persist: false });

  const handleSystemThemeChange = function () {
    if (preference === "system") {
      refreshTheme({ animate: true });
    }
  };

  if (typeof systemTheme.addEventListener === "function") {
    systemTheme.addEventListener("change", handleSystemThemeChange);
  } else if (typeof systemTheme.addListener === "function") {
    systemTheme.addListener(handleSystemThemeChange);
  }
})();
