import {CHANGE_WEATHER, changeWeather} from "../actions/weatherAction.js";
import {api_key, base_url} from "../utils/constants.js";

const defaultState = {
    country: '',
    city: '',
    temp: '',
    pressure: '',
    sunset: ''
}

export const weatherReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_WEATHER:
            fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
                .then(result => result.json())
                .then(data => {
                        country: data.sys.country,
                        city: data.name,
                        temp: data.main.temp,
                        pressure: data.main.pressure,
                        sunset: new Date(data.sys.sunset * 1000)
                    })
            return {...state, weather: action.payload };
        default:
            return state;
    }
}