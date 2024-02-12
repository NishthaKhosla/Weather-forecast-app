import { createContext, useContext } from "react";
import { useState } from "react";
import { getWeatherDataForCity,getWeatherDataForLocation} from "../API";

const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState(null);

  const fetchData = async () => {
    const response = await getWeatherDataForCity(searchCity);
    console.log(response);
    setData(response);
  };

  const fetchCurrentUserLocationData =() =>{
    navigator.geolocation.getCurrentPosition((position) => {
    getWeatherDataForLocation(
        position.coords.latitude,
        position.coords.longitude).then(data => setData(data))
    });
  }

  const handleReset = () =>{
    setData(null);
      }

  return (
    <WeatherContext.Provider value={{ searchCity, setSearchCity, data, fetchData, fetchCurrentUserLocationData ,handleReset}}>
      {props.children}
    </WeatherContext.Provider>
  );
};
