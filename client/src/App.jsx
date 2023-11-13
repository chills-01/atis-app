import { useState, useEffect } from "react";
import IndexPage from "./Pages/IndexPage";

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

    const style = {
        "display": "flex",
        "min-height": "100vh",
        "flex-direction": "column",
    }

    return (
        <>
            <IndexPage data={weatherData} style={style}></IndexPage>
        </>
    );
}

export default App;
