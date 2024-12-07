import {legacy_createStore as createStore} from "redux";
import {rootReducer} from "../reducers/rootReduser.js";


export const store = createStore(rootReducer);