const imgArray = ['./images/sheeps.webp', './images/Costa_Oeste.webp', './images/picton_castle_interior.webp', './images/praia_gales.webp', './images/bath_bridge_falls.webp'];
const dymImg = document.getElementById('dym_img')

let index = 0;

function change_image() {
    index = (index+1) % imgArray.length;
    dymImg.src = imgArray[index]
}

setInterval (change_image, 5000);