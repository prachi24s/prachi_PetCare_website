import React from "react";
import { useState } from "react";
import {
signInWithEmailAndPassword,
onAuthStateChanged,
signOut,
}from "firebase/auth";
import "./App.css";
import { auth } from "./firebase-config";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

export default function Signin(){
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const next = useNavigate()
    const [user, setUser] = useState({});

    const login = async () => {
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword
        )
        if(user){
          next("/home")
        }
      }
      catch (error) {
        console.log(error.message);
      }
    };


  
    return(
        <div className="App">
        <h1> Login </h1>
        <label htmlFor="username">Username: </label>
        <input
          placeholder="Email-id" 
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <br/>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
        <br/>
        <button onClick={login}> Login</button>

        <button onClick={()=>{
          next("/Signup")
        }}> Sign Up</button>

       

    </div>

    
    
  );
}


