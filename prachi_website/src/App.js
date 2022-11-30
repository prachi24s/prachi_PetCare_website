import logo from './logo.svg';
import './App.css';
import Signin  from './SignIn';
import Signup from "./SignUp";
import Home  from  "./Home"; 

import{render} from "react-dom";
import{
  BrowserRouter,
  Routes,
  Route,
}
from "react-router-dom";
import {auth} from './firebase-config';
import { useState, useEffect } from 'react';


function App(){

  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    });
  }, [user]);


  return(

      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/Signup" element={<Signup />}/>
        <Route path="/home" element={<Home />}/>
        
        

      </Routes>
  )
}

export default App;
