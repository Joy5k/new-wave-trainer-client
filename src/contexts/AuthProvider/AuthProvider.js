import React from 'react';
import app from '../../firebase/firebase.init';
import { getAuth }  from 'firebase/auth';
import { createContext } from 'react';

export const AuthContext=createContext()
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const name='joy'
 const  authInfo={name}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;