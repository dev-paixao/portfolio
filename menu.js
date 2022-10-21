let show = true; 

const menuSection = document.querySelector(".cabecalho")
const menuToggle = menuSection.querySelector(".menu-toggle")
const homeSection = document.querySelector(".home")

menuToggle.addEventListener("click", () => {

    menuSection.classList.toggle("on", show)
    show = !show;

    homeSection.classList.toggle("on", show)
    show = !show;


})

menuToggle.addEventListener("click", () => {

    homeSection.classList.toggle("on", show)
    show = !show;


})
