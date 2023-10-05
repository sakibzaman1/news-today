/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);

    // set user

    const [user, setUser] = useState(null);

    // create user

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

      // sign in user

      const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // signOut user

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }


    // observe the user

    useEffect( ()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser=> {
            setUser(currentUser);
            setLoading(false);
        });
        return ()=> {
            unSubscribe();
        }
    },[]);

    const authInfo = { user, createUser,signInUser, signOutUser, loading }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;