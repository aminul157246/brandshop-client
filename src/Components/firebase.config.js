
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANYQk-_Cw9Jsr419ZB9otun9Wnt5fuNUs",
  authDomain: "brand-shop-d10ed.firebaseapp.com",
  projectId: "brand-shop-d10ed",
  storageBucket: "brand-shop-d10ed.appspot.com",
  messagingSenderId: "1044248119483",
  appId: "1:1044248119483:web:9a93ecaab8e5909ad1819e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;