var map = L.map('map').setView([51.795027, -2.856445], 8);
let locations = [['<img src = "./mapfotos/cardiff/IMG_20240928_142508627.webp" style = "width: 200px;"> <br> Cardiff Castle', 51.48149, -3.180692], 
                ['<img src = "./mapfotos/cardiff/meOutsideCastle.webp" style = "width: 200px"> <br>Duke Street', 51.481489062447224,-3.1792062282447042],
                ['<img src ="./mapfotos/cardiff/meCastle.webp " style = "width: 200px;"> <br> Cardiff Castle', 51.48177501861159,-3.1809238080226288],
                ['<img src ="./mapfotos/cardiff/ghost.webp" style = "width: 200px;"> <br>ST Davids Dewi Sant <br> shopping centre', 51.47981875454879,-3.174959602962162],
                ['<img src = "./mapfotos/cardiff/kingcup.webp" style = "width: 160px;"> <br> Historical Wales', 51.48115768355181,-3.180157723096513],
                ['<img src = "./mapfotos/cardiff/churc.webp" style = "width: 200px;">  <br> St John The Baptist City Parish Church', 51.48045586400444,-3.1782496296799434],
                ['<img src = "./mapfotos/bath/cathedral_bath.webp" style = "width: 200px;"> <br> ST Mary Churc', 51.38381237283648,-2.35156002864761],
                ['<img src = "./mapfotos/bath/bath_bridge.webp" style = "width: 200px;"> <br> Grand Parade', 51.38275754957741,-2.3581071745591475],
                ['<img src = "./mapfotos/bath/grand_parade_cathedral.webp" style = "width: 200px;"> <br> Grand Parade', 51.38213600093795,-2.3572303339179324],
                ['<img src = "./mapfotos/bath/royal_crescent.webp" style = "width: 200px;"> <br> Royal Crescent', 51.38655622136091,-2.368532970231354],
                ['<img src = "./mapfotos/bath/bath_abey.webp" style = "width: 200px;"> <br> Bath Abey', 51.381848901472885,-2.359060077648263],
                ['<img src = "./mapfotos/bath/bath_abey_back.webp" style = "width: 200px;"> <br> Bath Abey (back)', 51.38129503719725,-2.3584064232614055]];
    
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

for(i = 0; i<locations.length; i ++){
    mark = new L.marker([locations[i][1], locations[i][2]])
    .bindPopup(locations[i][0])
    .addTo(map);
}
    
// var location01 = L.marker([51.48149, -3.180692]).addTo(map);
// var location02 = L.marker([51.381518, -2.357619]).addTo(map);