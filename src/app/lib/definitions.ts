export type WeatherReport = {
  icao: string;
  name: string;
  activeRunway: string[];
  wind: {
    speed: number;
    direction: string;
  };
  qnh: number;
  temperature: number;
  visibility: number;
  version: string;
  timeof: Date;
  cloud: {
    altitude: number;
    status: string;
  };
};
