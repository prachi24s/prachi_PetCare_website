import React from "react";
import {useState} from "react";


import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    }from "firebase/auth";
import "./App.css";
import { auth } from "./firebase-config";
import { useNavigate } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

export default function Home(){
    
    const next = useNavigate()
    const [user, setUser] = useState({});
    function signout(){
        next("/")
    }

    function logout(){
        signout() 
        .then(() => {
          console.log('Signed Out');
        })
        .catch(e=>{
         console.error('Sign Out Error', e);
        });
    }

    return(
        <div className="Home">
            <h4> User Logged In:</h4>
            <button onClick={logout}> Sign Out</button>
            
            
        </div>

  );
}