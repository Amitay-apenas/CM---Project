const images_array = ['./images/cawl.webp', './images/welshlamb.webp', './images/welshCakes.webp'];
const dym_img = document.getElementById('dym_food')

let index = 0;

function changeFood(){
    index = (index+1) % images_array.length;
    dym_img.src = images_array[index]
}

setInterval(changeFood, 3500)