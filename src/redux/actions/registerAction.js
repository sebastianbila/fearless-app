import {CLEAR_REGISTRATION_DATA, REGISTER_ERROR, REGISTER_REQUEST, REGISTER_SUCCESS, SET_REGISTRATION_DATA} from "../config/actionTypes";

export const setRegistrationData = (data) => ({
    type: SET_REGISTRATION_DATA,
    payload: {data}
})
export const clearRegistrationData = () => ({
    type: CLEAR_REGISTRATION_DATA,
})
export const registerRequest = (userData) => ({type: REGISTER_REQUEST, payload: {userData}})
export const registerSuccess = (user) => ({type: REGISTER_SUCCESS, payload: {user}})
export const registerError = () => ({type: REGISTER_ERROR})
