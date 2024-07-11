// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_zMsnwEJcKKNpzS_z2-ET41QDKlxXKYM",
  authDomain: "netflixgpt-630a3.firebaseapp.com",
  projectId: "netflixgpt-630a3",
  storageBucket: "netflixgpt-630a3.appspot.com",
  messagingSenderId: "683624752511",
  appId: "1:683624752511:web:e8c033da84e74bd9ac664a",
  measurementId: "G-Z0G8597SZX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
