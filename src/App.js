import react from "react";
import Card from "./Components/card";
import Input from "./Components/input";
import Button from "./Components/button";
import "./Card.css";
import { useWeather } from "./Context/weather";
import {useEffect} from 'react';

const App = () => {
  const weather = useWeather();
  const { fetchData } = weather;

  useEffect(()=>{
    weather.fetchCurrentUserLocationData();
  },[]);
  
  return (
    
    <>
    <div className="container">
      <h2 className="heading">Weather Forecast App</h2>
     <div className="center"> 
     <Input />
      <Button onClick={weather.fetchData} value="Search" />
      </div>
      <Card />
      <Button value="Refresh" onClick={weather.handleReset} />
      </div>
    </>
  );
};

export default App;
