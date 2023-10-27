// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC--ZP_mt-eVM8SQ-EBu4luzWQxWdt8dDo",
  authDomain: "firstproject-a7eef.firebaseapp.com",
  projectId: "firstproject-a7eef",
  storageBucket: "firstproject-a7eef.appspot.com",
  messagingSenderId: "550897311238",
  appId: "1:550897311238:web:0bb99e9fbdd3f6a2abad87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig,"app");
export const db=getFirestore(app);