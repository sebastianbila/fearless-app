import {LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT_SUCCESS} from "../config/actionTypes";

const initialState = {
    currentUser: null,
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload.user,
            }
        case LOGIN_ERROR:
        case LOGOUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
            }
        default:
            return state
    }
}
