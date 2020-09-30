import {HIDE_ALERT, SHOW_ALERT} from "../config/actionTypes";

export const showAlert = (text, messageType = 'error', duration = 2500) => ({
    type: SHOW_ALERT,
    payload: {
        text, messageType, duration
    }
})
export const hideAlert = () => ({type: HIDE_ALERT,})




