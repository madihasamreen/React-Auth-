// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDOqsvgGqHUPlpGIEw5Yl5m9DrpvyZNLfE",
    authDomain: "login-form-ca518.firebaseapp.com",
    projectId: "login-form-ca518",
    storageBucket: "login-form-ca518.appspot.com",
    messagingSenderId: "1022672083806",
    appId: "1:1022672083806:web:3343fbe162223409f10dcf",
    measurementId: "G-KB1K18MFTK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


const analytics = getAnalytics(app);