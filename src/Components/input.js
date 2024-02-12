import react from "react";
import { useWeather } from "../Context/weather";

const Input = () => {
  const weather = useWeather();

  return (
    <input
      className="input-field"
      placeholder="Search here"
      value={weather.searchCity}
      onChange={(e) => weather.setSearchCity(e.target.value)}
    ></input>
  );
};

export default Input;
