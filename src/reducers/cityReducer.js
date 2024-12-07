import {CHANGE_CITY} from "../actions/weatherAction.js";

const defaultState = {
    message: 'Enter city name'
}

export const cityReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_CITY:

            return {...state, city: action.payload};
        default:
            return state;
    }
}