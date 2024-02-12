const baseURL ="https://api.weatherapi.com/v1/current.json?key=4ab6bd39177447a18ad171755241102";

export const getWeatherDataForCity =async (city) =>{
    const response =  await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return await response.json();
};

export const getWeatherDataForLocation =async (lat,long) =>{
    const response =  await fetch(`${baseURL}&q=${lat},${long}&aqi=yes`);
    return await response.json();
};