import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBHgrEirUhuqZn9xJ58DAuGQSp4mniGYSs",
    authDomain: "prachi-project-parta.firebaseapp.com",
    projectId: "prachi-project-parta",
    storageBucket: "prachi-project-parta.appspot.com",
    messagingSenderId: "384174592438",
    appId: "1:384174592438:web:883176f6004006d907f117",
    measurementId: "G-R47QN952XW"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app)