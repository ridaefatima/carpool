// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYx-MDh_uakRMj6SO8kCJOHLigYhPXUMk",
  authDomain: "ridaist.firebaseapp.com",
  projectId: "ridaist",
  storageBucket: "ridaist.firebasestorage.app",
  messagingSenderId: "276371000857",
  appId: "1:276371000857:web:b09e91690236adc1716488",
  measurementId: "G-JNSYL6C1HP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const db = getFirestore();
export const storage = getStorage(app);