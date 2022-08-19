// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc6AqGN-CXmun806STkaXq71igRJ6EODM",
  authDomain: "my-craft-beer.firebaseapp.com",
  projectId: "my-craft-beer",
  storageBucket: "my-craft-beer.appspot.com",
  messagingSenderId: "122248105929",
  appId: "1:122248105929:web:a676a5444893d12aa72218",
  measurementId: "G-RBWGSDTZ5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const authService = getAuth(app);