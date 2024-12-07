import {CHANGE_WEATHER} from "../actions/weatherAction.js";

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
            return {...state, ... action.payload };
        default:
            return state;
    }
}