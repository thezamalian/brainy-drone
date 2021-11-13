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
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                setError("");
            }
            else {
                setUser({});
                setError("");
            }
            setIsLoading(false);
        })
        setError("")
        return () => unsubscribed;
    }, [auth])

    const signUpWithEmail = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                console.log(userCredential.user);
                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => {
                        console.log(auth.currentUser);
                        setError("");
                    })
                    .catch(foundError => {
                        setError(foundError.message);
                    })
            })
            .catch(foundError => {
                setError(foundError.message);
            })
    }
    const loginWithEmail = (email, password, location, history) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                setUser(userCredential.user);
                setError("");
                const redirect_uri = location.state?.from || '/';
                history.replace(redirect_uri)
            })
            // .then(result => {

            // })
            .catch(foundError => {
                setError(foundError.message);
            })

    }

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return {
        user,
        setUser,
        setError,
        error,
        auth,
        isLoading,
        signUpWithEmail,
        loginWithEmail,
        handleLogOut
    };
};

export default useFirebase;