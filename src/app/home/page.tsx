import IndexScrollContainer from "@/components/IndexScrollContainer";
import clientPromise from "../lib/mongo";
import { WeatherReport } from "../lib/definitions";

// type CardData = Pick<WeatherReport, "icao" | "name" | "qnh" | "temperature" | "">

async function fetchWeatherReports(){
  const mongoClient = await clientPromise.connect();
  try {
    const weatherReports = mongoClient
      .db("atis-app-dev")
      .collection("weatherReports");
    const mongoData = await weatherReports.find({}).limit(10).toArray();
    return mongoData
    console.log(mongoData)
  } catch (e) {
    console.log(e);
  } finally {
    mongoClient.close();
  }

}

export default async function Page() {
  const rawData = await fetchWeatherReports();
  const data = JSON.parse(JSON.stringify(rawData));


  return <IndexScrollContainer data = {data} />;
}
