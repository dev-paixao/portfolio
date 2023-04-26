// Inicializa o estado dos elementos
let menuVisible = true;
let homeVisible = true;
let logoVisible = true;

const menuSection = document.querySelector(".cabecalho");
const menuToggle = menuSection.querySelector(".menu-toggle");
const homeSection = document.querySelector(".home");
const logoSection = document.querySelector(".logo-responsive");

menuToggle.addEventListener("click", () => {
  // Alterna a visibilidade do menu e atualiza o estado
  menuSection.classList.toggle("on", menuVisible);
  menuVisible = !menuVisible;

  // Alterna a visibilidade da seção home e atualiza o estado
  homeSection.classList.toggle("on", homeVisible);
  homeVisible = !homeVisible;

  // Alterna a visibilidade do logo e atualiza o estado
  logoSection.classList.toggle("off", logoVisible);
  logoVisible = !logoVisible;
})
