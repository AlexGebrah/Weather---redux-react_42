import {combineReducers} from "redux";
import {weatherReducer} from "./weatherReducer.js";
import {cityReducer} from "./cityReducer.js";
import {messageReducer} from "./messageReducer.js";

export const rootReducer = combineReducers({
    weatherState: weatherReducer,
    cityState: cityReducer,
    messageState: messageReducer
})