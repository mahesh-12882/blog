import { createStore } from "redux";
import { userReducer } from "../reducers/userReducer";

import { combineReducers } from "redux";

let rootReducer = combineReducers({
    userReducer
})

export const store = createStore(rootReducer);