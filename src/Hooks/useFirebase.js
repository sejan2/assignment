import { useEffect, useState } from "react";

import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    sendEmailVerification,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";
initializeAuthentication();
const googleProvider = new GoogleAuthProvider();

const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [loading, setLoading] = useState(true);

    const ClearError = () => {
        setTimeout(() => {
            setError("");
        }, 5000);
    };

    // clear error
    useEffect(() => {
        ClearError();
    }, [error]);

    //google sign in
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };



    //signInWithEmailAndPassword
    const signInWithEmail = (e) => {
        setLoading(true);
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setUser(res.user);
            })
            .finally(() => setLoading(false))
            .catch((err) => setError(err.message));
    };

    // sign out
    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then((result) => {
                setUser({});
            })
            .finally(() => setLoading(false))
            .catch((err) => {

                setError(err.message);
            });

    };

    // get currently signed in user
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            }
            setLoading(false)
        });
        return () => unsubscribe;
    }, [user]);

    // get name
    const getName = (e) => {
        setName(e?.target?.value);
    };
    // get email
    const getEmail = (e) => {
        setEmail(e?.target?.value);
    };
    // get password
    const getPassword = (e) => {
        setPassword(e?.target?.value);
    };
    // get password
    const getPhotoURL = (e) => {
        setPhotoURL(e?.target?.value);
    };

    // signUp
    const signUpWithEmail = () => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // update name and email
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
        }).then((result) => { });
    };

    // sendVilifiedEmail
    function sendVilifiedEmail() {
        sendEmailVerification(auth.currentUser).then((result) => {
            alert(
                `Please verify your email, a verification email has been sent to ${email}`
            );
        });
    }

    return {
        sendVilifiedEmail,
        setUserName,
        sendEmailVerification,
        signInWithGoogle,
        loading,
        setLoading,
        user,
        setUser,
        error,
        auth,
        setError,
        logOut,
        getEmail,
        getPassword,
        signUpWithEmail,
        signInWithEmail,
        getName,
        getPhotoURL,
    };
};

export default useFirebase;













// import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
// import { useState } from "react";
// import initializeAuthentication from "../Firebase/Firebase.init"
// initializeAuthentication();
// const googleProvider = new GoogleAuthProvider();
// const useFirebase = () => {
//     const [user, setUser] = useState({})
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [error, setError] = useState('')
//     const auth = getAuth();
//     const signInUsingGoogle = () => {
//         signInWithPopup(auth, googleProvider)
//             .then(result => {
//                 setUser(result.user)
//                 console.log(result.user)
//             })
//             .catch(error => {
//                 setError(error.message)
//             })
//     }