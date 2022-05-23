import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged
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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

// creating user doc/account w authorized credentials
export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInformation = {}
    ) => {
    // if we do NOT recieve args then DONT run funct
    if (!userAuth) return;

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
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }

    return userDocRef;
    //if user data does not exist
    // create / set the document with the data from userAUth in my collection


    //if user data exists


};

// creating authorized user w email/password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    // if we do NOT recieve args then DONT run funct
    if(!email || !password) return;

   return await createUserWithEmailAndPassword(auth, email, password)
    
};


export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    // if we do NOT recieve args then DONT run funct
    if(!email || !password) return;

   return await signInWithEmailAndPassword(auth, email, password)
    
};

export const signOutUser = async () => signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);