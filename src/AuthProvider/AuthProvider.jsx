import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider =new GoogleAuthProvider();
const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);


    const googleUser = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const createUser = (email, password) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)  
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    
    const login =(email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
        
    }


    const updateUserProfile=(name, image) => {
        return updateProfile(auth.currentUser, {
             displayName: name, 
             photoURL: image
           })
     }

     useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const allParams ={
        login,
        updateUserProfile,
        logOut,
        createUser,
        googleUser,
        setUser,
        user,
        loading,
        
    }
    return (
        <AuthContext.Provider value={allParams}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;