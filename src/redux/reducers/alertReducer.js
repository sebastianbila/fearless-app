import {HIDE_ALERT, SHOW_ALERT} from "../config/actionTypes";

const initialState = {
    status: false,
    text: 'Null',
    messageType: 'error',
    isShowing: false,
    duration: 2500
}

export default function alert(state = initialState, action) {
    switch (action.type) {
        case SHOW_ALERT:
            return {
                status: true,
                text: action.payload.text,
                messageType: action.payload.messageType || state.messageType,
                isShowing: true,
                duration: action.payload.duration || state.duration
            }
        case HIDE_ALERT:
            return {
                ...state,
                status: false,
                isShowing: false
            }
        default:
            return state
    }
}
