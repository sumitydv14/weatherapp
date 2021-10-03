import { ActionType } from "../action/WeatherType";

const initialState = {
    weather:[],
};

export const getWeatherReducers = (state= initialState , {type,payload}) =>{
    switch(type){
        case ActionType.GET_WEATHER:
            return{
                ...state,
                weather:payload
            }
            default:
                return state;
    }
}