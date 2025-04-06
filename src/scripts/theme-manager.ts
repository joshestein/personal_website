function preloadTheme() {
  const userTheme = localStorage.theme;
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

// Run preload immediately to prevent FOUC
preloadTheme();

function init() {
  preloadTheme();
  animate();

  const toggleThemeButton = document.getElementById("toggle-theme-button");
  toggleThemeButton?.addEventListener("click", () => {
    const wantsDark = !document.documentElement.classList.contains("dark");
    toggleTheme(wantsDark);
    localStorage.setItem("theme", wantsDark ? "dark" : "light");
  });
}

function animate() {
  const animateElements = document.querySelectorAll(".animate");

  animateElements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add("show");
    }, index * 150);
  });
}

function toggleTheme(dark: boolean) {
  document.documentElement.classList.add("no-transitions");

  if (dark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  requestAnimationFrame(() => {
    document.documentElement.classList.remove("no-transitions");
  });
}

document.addEventListener("DOMContentLoaded", () => init());
document.addEventListener("astro:after-swap", () => init());
