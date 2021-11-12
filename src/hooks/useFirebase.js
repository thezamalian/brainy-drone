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
import { useLocation, useHistory } from 'react-router-dom';

initializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();


    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                console.log(user);
            }
            else {
                setUser({});
                // console.log(error);
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
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
                // console.log(user);
            })
            .then(result => {
                history.push(redirect_uri)
                // console.log(user);
            })
            .catch(foundError => {
                setError(foundError.message);
                // console.log(error);
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