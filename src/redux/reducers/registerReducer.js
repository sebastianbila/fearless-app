import {CLEAR_REGISTRATION_DATA, SET_REGISTRATION_DATA} from "../config/actionTypes";

const initialState = {
    gender: 0,
    weight: 0,
    weightUnit: 0, // -1 is for kg, 1 for pounds, 0 - default
    height: 0,
    heightUnit: 0, // -1 is for cm, 1 for inches, 0 - default,
    level: 0,
    goals: [],
    data: {
        username: '',
        name: '',
        email: '',
        password: '',
    },
}

export default function registerReducer(state = initialState , action) {
    switch (action.type) {
        case SET_REGISTRATION_DATA:
            return {
                gender: action.payload.data.gender,
                weight: action.payload.data.weight,
                weightUnit: action.payload.data.weightUnit,
                height: action.payload.data.height,
                heightUnit: action.payload.data.heightUnit,
                level: action.payload.data.level,
                goals: action.payload.data.goals,
                data: action.payload.data.data,
            }
        case CLEAR_REGISTRATION_DATA:
            return {
                gender: '',
                weight: 0,
                weightUnit: 0,
                height: 0,
                heightUnit: 0,
                level: 0,
                goals: [],
                data: {
                    username: '',
                    name: '',
                    email: '',
                    password: '',
                },
            }
        default:
            return state
    }
}
