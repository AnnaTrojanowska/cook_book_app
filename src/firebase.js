// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqWCYD29KbQ6fjIZnOYV8lSse7Fl0WjoQ",
  authDomain: "cook-book-e3eae.firebaseapp.com",
  projectId: "cook-book-e3eae",
  storageBucket: "cook-book-e3eae.appspot.com",
  messagingSenderId: "452950731628",
  appId: "1:452950731628:web:34c17be764f33c52e5e149",
  measurementId: "G-363WCCYVXY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
