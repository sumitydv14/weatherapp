import { ActionType } from "./WeatherType";


export const getWeather = (weatherdata) =>{
    return{
        type:ActionType.GET_WEATHER,
        payload: weatherdata,
    };
};