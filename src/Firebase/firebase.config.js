// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACpnnvpVv7HFq3WLPNdCKHYRLq4xCK4eg",
  authDomain: "cleveland-c02d4.firebaseapp.com",
  projectId: "cleveland-c02d4",
  storageBucket: "cleveland-c02d4.firebasestorage.app",
  messagingSenderId: "679806361784",
  appId: "1:679806361784:web:cadb928c651273df82144d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
