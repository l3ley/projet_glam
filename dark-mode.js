(function () {
  // Sélectionne l'élément racine
  const root = document.documentElement;

  // change le mode sombre/clair et stocke l'information pour l'appliquer à toutes les pages
  function toggleDarkMode() {
    const currentTheme = root.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    console.log("Changement de mode : passage de " + currentTheme + " à " + newTheme); 
    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // garde en mémoire pour la prochaine arrivée sur la page
  }

  //priorité choix en mémoire > choix système
  function init() {
    const storedPreference = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = storedPreference || (systemPrefersDark ? "dark" : "light");
    root.setAttribute("data-theme", theme);
  }

  // initialise le thème/mode
  init();

  document.addEventListener("DOMContentLoaded", function () {
    const togglers = document.querySelectorAll("[data-theme-toggler]");
    togglers.forEach((toggler) => {
      toggler.addEventListener("click", toggleDarkMode);
    });
  });

})();