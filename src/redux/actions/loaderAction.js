import {HIDE_LOADER, SHOW_LOADER} from "../config/actionTypes";


export function showLoader() {
    return {type: SHOW_LOADER}
}

export function hideLoader() {
    return {type: HIDE_LOADER}
}
