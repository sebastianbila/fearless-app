import {takeEvery, put, call} from "redux-saga/effects";
import {REGISTER_REQUEST} from "../../config/actionTypes";
import {hideLoader, showLoader} from "../../actions/loaderAction";
import {showAlert} from "../../actions/alertAction";
import i18n from "../../../utils/locales/LocalesConfig";
import {registerError, registerSuccess} from "../../actions/registerAction";
import {loginSuccess} from "../../actions/authAction";
import {firebaseRegistration, getAllUsername, saveData} from "./registration.service";

/**
 * Function to check if username already exists
 * @param username
 */
function* ifUsernameExists(username) {
    const all  = yield call(getAllUsername)
    return all.some(elem => elem.toLowerCase().trim() === username.toLowerCase().trim())
}

/**
 * Registration worker to register new user in the firebase
 * @param action
 */
function* registrationWorker(action) {
    const {email, password, username} = action.payload.userData.data
    yield put(showLoader())

    const isUsernameExist = yield call(ifUsernameExists, username)
    if (!isUsernameExist) {
        try {
            const payload = yield call(firebaseRegistration, email, password)
            yield put(hideLoader())
            if (payload.user) {
                yield call(saveData, payload.user.uid, action.payload.userData)
                yield put(registerSuccess(payload.user))
                yield put(loginSuccess(payload.user))
            }
        } catch (e) {
            if (e.code === 'auth/email-already-in-use')
                yield put(showAlert(i18n.t("emailExists")))
            else yield put(showAlert(i18n.t("somethingWrong")))
            yield put(hideLoader())
            yield put(registerError())
        }
    } else {
        yield put(hideLoader())
        yield put(showAlert(i18n.t("usernameExists")))
        yield put(registerError())
    }
}

/**
 * To keep track of dispatching actions in app
 */
function* registerWatcher() {
    yield takeEvery(REGISTER_REQUEST, registrationWorker)
}

export default registerWatcher
