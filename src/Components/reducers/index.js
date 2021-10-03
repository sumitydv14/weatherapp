import { combineReducers  } from "redux"
import { getWeatherReducers } from "./WeatherReducers";

const reducers = combineReducers({
    weather:getWeatherReducers,
})



export default reducers;
