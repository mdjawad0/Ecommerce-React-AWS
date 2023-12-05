// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfGbPVxomReAumYXHifbcdNdX4EJV2Rvw",
  authDomain: "ecommerce-2baea.firebaseapp.com",
  projectId: "ecommerce-2baea",
  storageBucket: "ecommerce-2baea.appspot.com",
  messagingSenderId: "409529839937",
  appId: "1:409529839937:web:40e542433d99189327b1c0",
  measurementId: "G-VTG8NKPD1B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}