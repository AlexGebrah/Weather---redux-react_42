import {CHANGE_MESSAGE} from "../actions/messageAction.js";

const defaultState = {
    message: ''
}

export const cityReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_MESSAGE:

            return {...state, message: action.payload};
        default:
            return state;
    }
}