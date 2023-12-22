//commonjs
//ES6
/*const express = require("express"); //Importing express module.
const app = express();
const cors = require("cors");
const port = 8000;
app.use(cors());*/

function updateMap() {
    console.log("Updating the map");
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data) //rsp ek object h jiske andar data h. Data ek array hai.
            rsp.data.forEach(element => { 
                latitude = element.latitude;
                longitude = element.longitude;
                cases = element.infected;

                if(cases > 255){
                    color = "rgb(255,69,0)";
                }
                else{
                    color =  `rgb(${cases},0,0)`;
                }

                //Mark on the map
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);
            });
        })
}

//updateMap(); // function data.json endpoint pr jaakar data le rha h aur saare ke saare markers ko populate kr rha hai.
let interval = 2000;
setInterval(updateMap,interval);
/*app.listen(port, () => { //ye btao ki aap konse port pe listen krna chahte hain
    console.log(`The app has been successfully started on port ${port}`);
})*/