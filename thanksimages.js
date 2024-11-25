let imgArray = ["./images/meandmyboo.JPG", "images/maePai.webp", "images/professora.webp",];
const img = document.getElementById('imgChange');

let i = 0;
function imgChange(){
    i = (i+1) % imgArray.length
    img.src = imgArray[i]
}

setInterval(imgChange, 4300)