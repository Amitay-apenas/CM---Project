const btn = document.getElementById('btn');
const elementChanged = document.getElementById('element_changed');  
const icon = document.getElementById('icon');
let isIcon = true;

btn.addEventListener('click', ()=>{
    elementChanged.classList.toggle('dark')
    isIcon = !isIcon;
    icon.src = isIcon? './images/mode-dark-svgrepo-com.svg':'./images/light-mode-svgrepo-com.svg'
})

const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");

hamburguer.addEventListener("click", () => {
    nav.classList.toggle("active")
})