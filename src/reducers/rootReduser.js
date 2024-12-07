import {combineReducers} from "redux";
import {weatherReducer} from "./weatherReducer.js";
import {cityReducer} from "./cityReducer.js";

export const rootReducer = combineReducers({
    weather: weatherReducer,
    city: cityReducer
})