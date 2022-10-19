let show = true; 

const menuSection = document.querySelector(".cabecalho")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {
    
    menuSection.classList.toggle("on", show)
    show = !show;
})