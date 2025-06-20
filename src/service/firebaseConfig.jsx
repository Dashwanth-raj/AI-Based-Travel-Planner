// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9lbzQ8yw-Wwuy69FMDcSG_291DDce_2k",
  authDomain: "ai-travel-63e5f.firebaseapp.com",
  projectId: "ai-travel-63e5f",
  storageBucket: "ai-travel-63e5f.firebasestorage.app",
  messagingSenderId: "1026041743217",
  appId: "1:1026041743217:web:d734a6c0ce70f2122658d0",
  measurementId: "G-W31N9LE1JG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);