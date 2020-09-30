import {all} from 'redux-saga/effects'
import authWatcher from "../sagas/auth/authSaga";
import registerWatcher from "../sagas/registration/registerSaga";

export default function* rootSaga() {
    yield all( [
        authWatcher(),
        registerWatcher()
    ])
}
