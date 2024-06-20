const { v4: uuidv4 } = require("uuid");

export const weatherData = [
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
    {
        // most information likely unavailable at a Class D
        // change data submitted/available based on airspace class in future
        _id: uuidv4(),
        icao: "YLIL",
        name: "Lilydale Airport",
        activeRunway: ["18"],
        vis: 8000,
        version: "",
        timeOf: new Date(), // time of recording or time of ATIS?
        wind: {},
        temperature: 17,
        qnh: 1023,
        cloud: [],
    },

    {
        _id: uuidv4(),
        icao: "YMEN",
        name: "Essendon Airport",
        activeRunway: ["26", "17"],
        vis: 9999,
        version: "Q",
        timeOf: new Date(), // time of recording or time of ATIS?
        wind: { speed: 15, direction: "220" },
        temperature: 15,
        qnh: 1015,
        cloud: [
            { altitude: 5000, status: "few" },
        ],
    },
    {
        _id: uuidv4(),
        icao: "YMEN",
        name: "Essendon Airport",
        activeRunway: ["26", "17"],
        vis: 9999,
        version: "Q",
        timeOf: new Date(), // time of recording or time of ATIS?
        wind: { speed: 15, direction: "220" },
        temperature: 15,
        qnh: 1015,
        cloud: [
            { altitude: 5000, status: "few" },
        ],
    },
    {
        _id: uuidv4(),
        icao: "YMEN",
        name: "Essendon Airport",
        activeRunway: ["26", "17"],
        vis: 9999,
        version: "Q",
        timeOf: new Date(), // time of recording or time of ATIS?
        wind: { speed: 15, direction: "220" },
        temperature: 15,
        qnh: 1015,
        cloud: [
            { altitude: 5000, status: "few" },
        ],
    },
];