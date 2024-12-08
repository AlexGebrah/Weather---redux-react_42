import {CHANGE_WEATHER} from "../actions/weatherAction.js";

const defaultState = {};


export const weatherReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_WEATHER:
            return {...state, weather: action.payload };
        default:
            return state;
    }
}