/* Combining reducers*/
import {combineReducers} from "redux";
import alertReducer from "../reducers/alertReducer";
import loaderReducer from "../reducers/loaderReducer";
import authReducer from "../reducers/authReducer";
import registerReducer from "../reducers/registerReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    loader: loaderReducer,
    registration: registerReducer,
})
