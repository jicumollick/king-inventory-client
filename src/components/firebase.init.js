// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSTPrmWNQIb4oPivk1459pua1_mpWN4h4",
  authDomain: "king-inventory.firebaseapp.com",
  projectId: "king-inventory",
  storageBucket: "king-inventory.appspot.com",
  messagingSenderId: "587796420570",
  appId: "1:587796420570:web:d2523732c6587c9cc192e3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
