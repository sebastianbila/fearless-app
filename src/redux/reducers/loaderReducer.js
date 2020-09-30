import {HIDE_LOADER, SHOW_LOADER} from "../config/actionTypes";

const initialState = {
    visible: false
}

export default function loader(state = initialState, action) {
    switch (action.type) {
        case SHOW_LOADER:
            return {
                visible: true
            }
        case HIDE_LOADER:
            return {
                visible: false
            }
        default:
            return state
    }
}
