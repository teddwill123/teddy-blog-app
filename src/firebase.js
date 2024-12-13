// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "teddy-blog-165dd.firebaseapp.com",
  projectId: "teddy-blog-165dd",
  storageBucket: "teddy-blog-165dd.firebasestorage.app",
  messagingSenderId: "37686163202",
  appId: "1:37686163202:web:ed657e0291682de98a741b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);