import {CHANGE_CITY} from "../actions/cityAction.js";

const defaultState = {
    city: 'London'
}

export const cityReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_CITY:

            return {...state, ... action.payload};
        default:
            return state;
    }
}