const express = require('express');
const cors = require('cors');
const weatherData = require('./mockData')



const app = express();
app.use(cors()) // to fix the issue with

app.get('/weather', (req, res) => {
    res.json({"weatherData": weatherData})
});

const port = 5050

app.listen(port, () => { console.log(`Server started on port ${port}.`)})