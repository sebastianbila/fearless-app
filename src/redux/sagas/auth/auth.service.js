import firebase from "../../../utils/firebase/FirebaseManager";

/**
 * Async function for the login user into app.
 * Returns a user instance or an error
 * @param email
 * @param password
 */
export async function firebaseLogin(email, password) {
    const response = firebase.auth().signInWithEmailAndPassword(email, password)
    return await response
}

/**
 * Async function to check if user already logged into app
 * @return user or null
 */
export function firebaseAutoLogin() {
    return new Promise((resolve => {
        firebase.auth().onAuthStateChanged((user) => {
            resolve(user)
        });
    }))
}

/**
 * Function to logout of user account
 * @return new Promise to resolve logout
 */
export async function firebaseLogout() {
    return await firebase.auth().signOut()
}

/**
 * Function to reset user password
 * @param email, user email
 */
export async function firebaseResetPassword(email) {
    return new Promise(resolve => {
        return firebase.auth().sendPasswordResetEmail(email).then(() => {
            resolve({status: true})
        }).catch(error => {
            resolve({status: false, error})
        })
    })
}
