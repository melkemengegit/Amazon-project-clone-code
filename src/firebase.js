//Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
//import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyBgb6IL9ie7MpDSWK_vrqGSejcvpKbWXC0",
    authDomain: "clone-20854.firebaseapp.com",
    projectId: "clone-20854",
    storageBucket: "clone-20854.appspot.com",
    messagingSenderId: "583096532166",
    appId: "1:583096532166:web:4d46d4763e95ba32c12bc7",
    measurementId: "G-5W4FNF0RXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();
export { db, auth };






