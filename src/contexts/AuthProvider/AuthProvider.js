import React from 'react';
import app from '../../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut }  from 'firebase/auth';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext=createContext()
const auth = getAuth(app);
const provider=new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
   

    const signUpWithUserEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const LoginWithUserEmail = (email, password) => {
        return signInWithEmailAndPassword (auth,email,password)
    }
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const LogOutUser = () => {
        return signOut(auth);
    }


    useEffect(() => {
    const unsubscribe =onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        console.log('check user',currentUser);
        setLoading(false)
    })
        return () => {
            return unsubscribe();
        };
},[])

    const authInfo = {
        signInWithGoogle,
        LoginWithUserEmail,
        signUpWithUserEmail,
        user,
        LogOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;