import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDWdK1ejQ04CF-M0jurz4g36yLU37jKs7g",
    authDomain: "cmp-ok.firebaseapp.com",
    projectId: "cmp-ok",
    storageBucket: "cmp-ok.appspot.com",
    messagingSenderId: "812957432833",
    appId: "1:812957432833:web:69db3de68d5e6587719400",
    measurementId: "G-5L7CRQRE8M"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };







