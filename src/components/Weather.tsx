import { Weather } from "@/types";
import { weatherStyles as styles } from "@/modules";

type Props = {
  weather: Weather | null;
};

const WeatherDisplay: React.FC<Props> = ({ weather }: Props) => {
  if (!weather) return null;

  const { name, main, weather: weatherInfo } = weather;

  return (
    <div className={styles.weatherContainer}>
      <h2>{name}</h2>
      <br />
      <p>Temperature: {main.temp}°C</p>
      <p>{weatherInfo[0].description}</p>
      <img
        src={`http://openweathermap.org/img/w/${weatherInfo[0].icon}.png`}
        alt="weather icon"
      />
    </div>
  );
};

export default WeatherDisplay;
