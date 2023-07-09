import React from "react";
import { useState, useEffect } from "react";

function App() {
    const [weatherData, setWeatherData] = useState([]);

    // on load of page
    useEffect(() => {
        async function fetchAllData() {
            const response = await fetch("http://localhost:5050/weather");
            const data = await response.json();

            setWeatherData(data.weatherData.weatherData);
        }
        try {
            fetchAllData();
        } catch (e) {
            console.log(e);
        }
    }, []);

    return (
        <>
        {weatherData.map((w) => (
          <div key={w._id}>
            <h1>{w.icao}</h1>
            <p>Active runway: {w.activeRunway[0]}</p>
            <p>Visibility: {w.vis}m</p>
          </div>
        ))}
        </>
    );
}

export default App;
