// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth3.firebaseapp.com",
  projectId: "mern-auth3",
  storageBucket: "mern-auth3.appspot.com",
  messagingSenderId: "205895271806",
  appId: "1:205895271806:web:9f3aa65e541061be7e9f2f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);