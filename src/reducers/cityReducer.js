import {CHANGE_CITY} from "../actions/cityAction.js";

const defaultState = {
    city: ''
}

export const cityReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_CITY:

            return {...state, city: action.payload};
        default:
            return state;
    }
}