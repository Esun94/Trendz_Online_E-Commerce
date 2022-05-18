import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc, //getting documents data, setting document data
    setDoc
} from 'firebase/firestore';


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

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot)
    console.log(userSnapshot.exists())

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }

    return userDocRef;
    //if user data does not exist
    // create / set the document with the data from userAUth in my collection


    //if user data exists


}