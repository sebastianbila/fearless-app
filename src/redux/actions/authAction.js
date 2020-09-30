import {AUTO_LOGIN, LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, LOGOUT_SUCCESS, RESET_PASSWORD} from "../config/actionTypes";

export const loginRequest = (email, password) => ({type: LOGIN_REQUEST, payload: {email, password}})
export const loginSuccess = (user) => ({type: LOGIN_SUCCESS, payload: {user}})
export const loginError = () => ({type: LOGIN_ERROR})
export const autoLogin = () => ({type: AUTO_LOGIN})
export const resetPassword = (email) => ({type: RESET_PASSWORD, payload: {email}})
export const logout = () => ({type: LOGOUT})
export const logoutSuccess = () => ({type: LOGOUT_SUCCESS})


