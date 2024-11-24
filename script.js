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

const txtBtn = document.getElementById('button_change_text');
const textBox = document.getElementById('text_changed');
const textArray = [
    "Welsh Cake(bolo galês), meio entre um bolo e um biscoito. Ele é feito com ingredientes simples como farinha, açúcar, manteiga, ovos e passas, mas o segredo está na forma decozimento em uma frigideira especial com ranhuras.",
    "Welsh Lamb (Cordeiro Galês)O País de Gales é famoso por seus pastos verdes e por produzir um dos melhores cordeiros do mundo. O Welsh Lamb é conhecido por sua carne macia, saborosa e com pouca gordura.",
    "Cawl(sopa ou caldo), O Cawl é considerado o prato nacional do País de Gales. É um ensopado reconfortante, feito com carne de cordeiro, alho-poró e legumes da estação. O Cawl é um prato simples, mas cheio de sabor, perfeito para aquecer nos dias frios.",
    "Nessa parte que pode assustar ou animar dependendo da pessoa, no meu caso foi bem animador. Confesso que fiquei com receio de comer o famoso feijão doce daqui, mas acabou que eu gostei. Com as comidas típicas de Gales, a conversa foi outra, clique nas setas para ver mais sobre."
]

let textIndex = 0;

txtBtn.addEventListener("click", () =>{
    textIndex = (textIndex+1) % textArray.length
    textBox.textContent = textArray[textIndex]
})