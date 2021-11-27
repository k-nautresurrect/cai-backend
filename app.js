const api_key = '41d30b8a6314d8058dfda998502bbf44';
const express = require('express');
const https = require('https');
const app = express();
let city = 'meerut';

let dataw;
let lat;
let lon;
// let cord = {lattitude: 0, longitude: 0};


app.get('/weather/:cityname',(req,res) => {
    city = req.params.cityname;
    const urlw = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    https.get(urlw, (response) => {

        response.on("data",(data) => {
            dataw = JSON.parse(data)
            lon = dataw.coord.lon;
            lat = dataw.coord.lat;
            
            cord = {
                lattitude: lat,
                longitude: lon
            }
            res.redirect(`/weather/${cord.lattitude}/${cord.longitude}`);
        })
    })

})

app.get('/weather/:lat/:lon', (req,res) => {
    const urla = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${req.params.lat}&lon=${req.params.lon}&appid=${api_key}`

    https.get(urla, (resp) =>{

        resp.on("data", (data) => {
            const adata = JSON.parse(data);
            const listm = adata.list[0].main;
            const list = adata.list[0];
            // const aqi = list.main.aqi
            // console.log(list);
            // console.log(aqi);
            const para = {
                aqi: listm.aqi,
                pm2_5: list.components.pm2_5,
                pm10: list.components.pm10
            }

            // console.log(para.aqi);
            res.send(`the aqi is ${para.aqi} and pm 2.5 is ${para.pm2_5}, pm10 is ${para.pm10}`);
        })
    })
})

// const port = process.env.PORT || 3000

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`server started....`);
})