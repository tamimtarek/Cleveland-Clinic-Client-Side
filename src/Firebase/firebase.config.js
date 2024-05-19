// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYPfGNyiZ-Pw3_CTJpB4E99qxcbQKIS9E",
  authDomain: "edumentor-c04f1.firebaseapp.com",
  projectId: "edumentor-c04f1",
  storageBucket: "edumentor-c04f1.appspot.com",
  messagingSenderId: "903228863704",
  appId: "1:903228863704:web:8490a3700cbeddc3e553ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth