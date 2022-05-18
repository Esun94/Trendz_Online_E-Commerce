import {
    signInWithGooglePopup,
    createUserDocumentFromAuth
} from "../../utils/firebase utils/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <h1>sign in page</h1>
            <button onClick={logGoogleUser}> Sign In With Google Pop Up </button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;