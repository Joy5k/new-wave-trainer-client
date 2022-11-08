import React from 'react';
import app from '../../firebase/firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup }  from 'firebase/auth';
import { createContext } from 'react';

export const AuthContext=createContext()
const auth = getAuth(app);
const provider=new GoogleAuthProvider()
const AuthProvider = ({children}) => {
   

    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider)
           }




 const  authInfo={signInWithGoogle,}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;