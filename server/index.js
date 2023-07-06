const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');



const app = express();
app.use(cors()) // to fix the issue with

const weatherData = [
    {_id: uuidv4(), icao: "YMMB", activeRunway: ["17L", "17R"], vis: 9999},
    {_id: uuidv4(), icao: "YMML", activeRunway: ["34"], vis: 5000},
    {_id: uuidv4(), icao: "YMAV", activeRunway: ["18"], vis: 1000},
]

app.get('/weather', (req, res) => {
    res.json({"weatherData": weatherData})
});

const port = 5050

app.listen(port, () => { console.log(`Server started on port ${port}.`)})