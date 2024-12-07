import {CHANGE_WEATHER} from "../actions/cityAction.js";

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

            return {...state, };
        default:
            return state;
    }
}