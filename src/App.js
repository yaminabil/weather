import { useState } from "react"; // we need use state because we have our data changes  depending on city
import Header from "./components/Header";
import Form from "./components/Form";
import WeatherDisplay from "./components/WeatherDisplay";

export default function App() {
  const [weather, setWeather] = useState(null);
  const apiKey = "7314207a1729e89956894274818d9aa4";

  // function that gets the data from the api

  const getWeather = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`
      );
      const data = await response.json();
      setWeather(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  // getWeather("Algeria");

  return (
    <div className="App">
      <Header />
      <Form getWeather={getWeather} />
      <WeatherDisplay weather={weather} />
    </div>
  );
}
