import { createContext, useEffect, useState } from "react";

import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";




export const AuthContext = createContext(null);
const auth = getAuth(app);


const googleProvider = new GoogleAuthProvider();
// const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({children}) =>{

const [user, setUser] = useState(null);


    const createUser =(email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    };
    


    const googleSignIn = (value) =>{
      return signInWithPopup();
    };

    // const facebookSignIn = (email, password) =>{
    //     return signInWithEmailAndPassword(auth, email, password);
    // };

    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth);
    }




    useEffect( () => {
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser)
            setUser(currentUser);

        });
        return () =>{
            unSubscribe();
        }
    },[])


    const AuthInfo = {
        user,
        createUser,
        signIn,
        googleSignIn,
        // facebookSignIn,
        logOut,
    };
    


    return(
        <AuthContext.Provider value={AuthInfo}>
        {children}
     </AuthContext.Provider>
    )
};
export default AuthProvider;