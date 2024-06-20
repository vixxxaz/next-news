// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const apiKey = process.env.FIREBASE_API_KEY as string;
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "next-news-73941.firebaseapp.com",
  projectId: "next-news-73941",
  storageBucket: "next-news-73941.appspot.com",
  messagingSenderId: "822272144814",
  appId: "1:822272144814:web:3b81f2444b4ad7b0a4843f",
  measurementId: "G-JX7135XMD0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);