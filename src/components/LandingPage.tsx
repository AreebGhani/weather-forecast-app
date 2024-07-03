import { useState } from "react";
import { landingPageStyles as styles } from "@/modules";

type Props = {
  fetchWeather: (city: string) => void;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
};

const LandingPage: React.FC<Props> = ({ fetchWeather, setError }: Props) => {
  const [city, setCity] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city) {
      fetchWeather(city);
    } else {
      setError("City name required!");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={handleInputChange}
        placeholder="Enter city name"
        className={styles.input}
        autoFocus={true}
      />
      <button type="submit" className={styles.button}>
        Get Weather
      </button>
    </form>
  );
};

export default LandingPage;
