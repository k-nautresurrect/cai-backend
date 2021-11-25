const api_key = '41d30b8a6314d8058dfda998502bbf44';
const express = require('express');
const https = require('https');
const http = require('http');
const app = express();
let city = 'meerut';

let dataw;
let lat;
let lon;
let cord;

app.get('/weather',(req,res) => {

    const urlw = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    https.get(urlw, (response) => {
        console.log("weather"+response.statusCode);

        response.on("data",(data) => {
            dataw = JSON.parse(data)
            lon = dataw.coord.lon;
            lat = dataw.coord.lat;
            
            cord = {
                lattitude: lat,
                longitude: lon
            }
            res.send(cord);
        })
    })

})

app.listen(3000, ()=>{
    console.log("listening to port 3000");
})