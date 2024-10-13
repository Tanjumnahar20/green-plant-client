/* eslint-disable no-undef */
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
import AOS from "aos";
import "aos/dist/aos.css";
import axios from 'axios';
export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut =()=>{
        setLoading(true)
        return signOut(auth);
    }


        useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth,currentUser=>{
                setUser(currentUser)

                if(currentUser){
                    const userInfo ={
                        email: currentUser.email
                    }
                     axios.post('http://localhost:5000/jwt', userInfo)
                     .then(res=>{
                        console.log("token",res.data.token,userInfo);
                        if(res.data.token){
                            localStorage.setItem('access-token', res.data.token)
                        }
                     })
                  }
        
                  else{
                    //  todo:remove token
                    localStorage.removeItem('access-token')
                  }
                  setLoading(false)
            })
            AOS.init({ duration: 800 })
            
            return()=>{
               return unsubscribe
            }
        })

   const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        logOut
        
    }
  
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
  
      </AuthContext.Provider>
    );
};

export default AuthProvider;