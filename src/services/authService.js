import '../firebase/index'
import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'

const auth = getAuth()

export const onSignOut = async () => {
    try {
        await signOut(auth)
    } catch (e) {
        console.log(e);
    }
}

export const stateChange = (callback) => {
    onAuthStateChanged(auth, callback)
}

export const signIn = async (email, password) => {
    try {
        const userData = await signInWithEmailAndPassword(auth, email, password)
        console.log(userData.user);

        return {
            uid: userData.user.uid
        }
    } catch (e) {
        return console.log(e)
    };
}