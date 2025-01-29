// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIj0LZddZbYR4DaAyxo0NCOUJq7SKWS6s",
  authDomain: "campus-companion-1.firebaseapp.com",
  projectId: "campus-companion-1",
  storageBucket: "campus-companion-1.firebasestorage.app",
  messagingSenderId: "573526918369",
  appId: "1:573526918369:web:85c687a8800db7295f63a0",
  measurementId: "G-TMDN4Q8KJR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);