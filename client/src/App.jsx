import { useState, useEffect } from "react";
import IndexWrapper from "./components/IndexCard/IndexWrapper";
import SearchBarContainer from "./components/SearchBarContainer";

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
            <SearchBarContainer />
            <IndexWrapper weatherData={weatherData} />
        </>
    );
}

export default App;
