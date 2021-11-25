const api_key = '41d30b8a6314d8058dfda998502bbf44';
const express = require('express');
const app = express();
let city = 'meerut';

app.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`, (req,res) =>{
    const lon = coord.lon;
    res.send(req.body);
})


app.listen(3000, ()=>{
    console.log('listening on port 3000')
})