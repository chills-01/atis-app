const { v4: uuidv4 } = require("uuid");

module.exports.weatherData = [
    {
        _id: uuidv4(),
        icao: "YMMB",
        name: "Moorabbin Airport",
        activeRunway: ["17L", "17R"],
        vis: 9999,
        version: "R",
        timeOf: new Date(), // time of recording or time of ATIS?
        wind: { speed: 20, direction: "300" },
        temperature: 15,
        qnh: 1013,
        cloud: [
            { altitude: 2500, status: "broken" },
            { altitude: 5000, status: "few" },
        ],
        
    },
    { _id: uuidv4(), icao: "YMML", activeRunway: ["34"], vis: 5000 },
    { _id: uuidv4(), icao: "YMAV", activeRunway: ["18"], vis: 1000 },
];
