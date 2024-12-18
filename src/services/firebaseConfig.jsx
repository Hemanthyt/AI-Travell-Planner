// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-9WEKAYXPdwvPEnuV0EO27TzqYWEClfQ",
  authDomain: "ai-travell-planner.firebaseapp.com",
  projectId: "ai-travell-planner",
  storageBucket: "ai-travell-planner.appspot.com",
  messagingSenderId: "909277230126",
  appId: "1:909277230126:web:062c1f22937c25c2e89bbf",
  measurementId: "G-X0HN3M0GNK",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
