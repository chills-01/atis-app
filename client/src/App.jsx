import React from "react";
import { useState, useEffect } from "react";
import IndexCard from "./components/IndexCard"

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
          <IndexCard key={w._id} data={w}/>
        ))}
        </>
    );
}

export default App;