import { Forecast } from "@/types";
import { forecastStyles as styles } from "@/modules";

type Props = {
  forecast: Forecast | null;
};

const ForecastSection: React.FC<Props> = ({ forecast }: Props) => {
  if (!forecast) return null;

  return (
    <div className={styles.forecastContainer}>
      {forecast.list.map((item, index) => (
        <div key={index} className={styles.forecastItem}>
          <p className={styles.time}>
            {new Date(item.dt_txt).toLocaleString()}
          </p>
          <br />
          <p>Temperature: {item.main.temp}°C</p>
          <p>{item.weather[0].description}</p>
          <img
            src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
            alt="weather icon"
          />
        </div>
      ))}
    </div>
  );
};

export default ForecastSection;
