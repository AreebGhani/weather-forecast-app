import { useState } from "react";
import axios from "axios";
import {
  ErrorComponent,
  ForecastSection,
  LandingPage,
  Loading,
  WeatherDisplay,
} from "@/components";
import { Weather, Forecast } from "@/types";
import { appStyles as styles } from "@/modules";

const App: React.FC = () => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [forecast, setForecast] = useState<Forecast | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchWeather = async (city: string) => {
    setWeather(null);
    setForecast(null);
    setError(null);
    setLoading(true);
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    try {
      const weatherResponse = await axios.get<Weather>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeather(weatherResponse.data);

      const forecastResponse = await axios.get<Forecast>(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );
      setForecast(forecastResponse.data);
    } catch (error) {
      setError("City not found or failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.app}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <LandingPage fetchWeather={fetchWeather} setError={setError} />
          <ErrorComponent error={error} />
          <WeatherDisplay weather={weather} />
          <ForecastSection forecast={forecast} />
        </>
      )}
    </div>
  );
};

export default App;
