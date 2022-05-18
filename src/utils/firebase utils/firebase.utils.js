import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBQ74Es4gp1onm2mXVc0sCd_KFAw1sliW0",
    authDomain: "trendz-online-db.firebaseapp.com",
    projectId: "trendz-online-db",
    storageBucket: "trendz-online-db.appspot.com",
    messagingSenderId: "738201684413",
    appId: "1:738201684413:web:1d83239d5ab37f20e3ead4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);