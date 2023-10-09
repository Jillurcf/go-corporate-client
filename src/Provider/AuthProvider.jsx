import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true)
   return createUserWithEmailAndPassword(auth, email, password)
  }

const  signInByEmailAndPassword = (email, password) =>{
  setLoading(true)
  return signInWithEmailAndPassword(auth, email, password)
}

const signInWithGoogle = ()=>{
  return signInWithPopup(auth, googleProvider)
};

  const logOut = () =>{
    setLoading(true)
    return signOut(auth)
  }

  useEffect(()=>{
    const unsubsCribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser)
      setLoading(false)
    });
    return ()=>{
      unsubsCribe()
    }

  },[])
  const authInfo = {
    user,
    loading,
    createUser,
    signInByEmailAndPassword,
    signInWithGoogle,
    logOut,
  }

  return (

    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;
