import { createContext } from "react";
import useFirebase from "../hooks/usefirebase";
import React from 'react';


export const AuthContext = createContext()


const AuthProvider = ({children}) => {
    const myContext = useFirebase();
    return (
        <div>
            <AuthContext.Provider value={myContext}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;