
import React from "react";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";
import "./App.css";
import { auth } from "./firebase-config";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const next = useNavigate() 

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      if(user){
        alert("user successfully created")
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="App">
      <div>
        <h1> Registration </h1>
        <label htmlFor="username">Username: </label>
        <input
          placeholder="Email"
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <br/>

        <label htmlFor="password">Password: </label>
        <input
          placeholder="Password" type = "password"
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <br/>

         <label htmlFor="password">Confirm Password: </label>
         <input
          placeholder="Confirm Password" type= "password"
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        
        <br/>
        <button onClick={register}> Create User</button>




        <button onClick={()=>
        next("/")
        }> Login</button>
      </div>
      
    </div> 
  ) 
}
