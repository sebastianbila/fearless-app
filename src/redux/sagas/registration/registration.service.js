import firebase from "../../../utils/firebase/FirebaseManager";

/**
 * Async function for the registration new user in app.
 * Returns a instance of user or error
 * @param email
 * @param password
 */
export async function firebaseRegistration(email, password) {
    const response = firebase.auth().createUserWithEmailAndPassword(email, password)
    return await response
}

/**
 * Saving user data to the database
 * @param userUID
 * @param userData
 */
export async function saveData(userUID, userData) {
    const db = firebase.firestore()

    return await db.collection('users')
        .doc(userUID)
        .set({
            userUID: userUID,
            username: userData.data.username.toLowerCase().trim(),
            email: userData.data.email.toLowerCase().trim(),
            name: userData.data.name.trim(),
            characteristic: {
                gender: userData.gender,
                goals: userData.goals,
                level: userData.level,
                height: userData.height,
                heightUnit: userData.heightUnit,
                weight: userData.weight,
                weightUnit: userData.weightUnit,
            }
        })
}

/**
 * Get list with all username in database
 */
export async function getAllUsername() {
    const db = firebase.firestore()

    const all = []

    await db.collection("users").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            all.push(doc.data().username)
        });
    });
    return all;
}
