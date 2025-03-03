// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "subham-7de44.firebaseapp.com",
  projectId: "subham-7de44",
  storageBucket: "subham-7de44.firebasestorage.app",
  messagingSenderId: "617058083619",
  appId: "1:617058083619:web:73de2c7c573b1e70e3e296",
  measurementId: "G-PJ017E7KP8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

