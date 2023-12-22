import { createContext, useEffect, useState } from "react";

import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";




export const AuthContext = createContext(null);
const auth = getAuth(app);


const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({children}) =>{

const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true)


    const createUser =(email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    


    const googleSignIn = (value) =>{
        setLoading(true);
      return signInWithPopup();
    };

    const facebookSignIn = (value) =>{
        setLoading(true);
        return signInWithPopup();
    };

    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }




    useEffect( () => {
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser)
            setUser(currentUser);
            setLoading(false)

        });
        return () =>{
            unSubscribe();
        }
    },[])


    const AuthInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        facebookSignIn,
        logOut,
    };
    


    return(
        <AuthContext.Provider value={AuthInfo}>
        {children}
     </AuthContext.Provider>
    )
};
export default AuthProvider;