import initializeAuth from "../firebase/firebase.init";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut
} from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                console.log(user);
            }
            else {
                setUser({});
                // console.log(error);
            }
        })
        // return subscribed();
    }, [auth])

    const signUpWithEmail = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                console.log(userCredential.user);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    console.log(auth.currentUser);
                    // setUser(auth.currentUser)
                }).catch(foundError => {
                    setError(foundError.message);
                    console.log(error);
                })

                // user.displayName = name;
                // console.log(name, user);
            })
            .catch(foundError => {
                setError(foundError.message);
                console.log(error);
            })
    }
    const loginWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                setUser(userCredential.user);
                console.log(user);
            })
            .catch(foundError => {
                setError(foundError.message);
                console.log(error);
            })
    }

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(foundError => {
                setError(foundError.message);
                console.log(error);
            })
    }

    return {
        user,
        error,
        auth,
        signUpWithEmail,
        loginWithEmail,
        handleLogOut
    };
};

export default useFirebase;