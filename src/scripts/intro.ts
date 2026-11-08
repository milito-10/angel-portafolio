if (window.location.pathname === "/" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  try {
    if (!window.sessionStorage.getItem("angel-intro-seen")) {
      window.sessionStorage.setItem("angel-intro-seen", "true");
      document.documentElement.classList.add("intro-pending");
    }
  } catch (error) {
    console.error("No se pudo comprobar el estado de la introducción cinematográfica.", error);
  }
}
