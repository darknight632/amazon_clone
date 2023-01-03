// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTQr4Zcbrat9X_40aVjNa7FfmXQQcOgRs",
  authDomain: "clone-729bb.firebaseapp.com",
  projectId: "clone-729bb",
  storageBucket: "clone-729bb.appspot.com",
  messagingSenderId: "976162471350",
  appId: "1:976162471350:web:4eb2afceeee4f94fde9517",
  measurementId: "G-GYM699LN5M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
