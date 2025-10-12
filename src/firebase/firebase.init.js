// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2BHXoc9RCmI5WOXisaXpEoarQkM_JE_U",
  authDomain: "factis-firebase.firebaseapp.com",
  projectId: "factis-firebase",
  storageBucket: "factis-firebase.firebasestorage.app",
  messagingSenderId: "56012762531",
  appId: "1:56012762531:web:d2c4e45d708badee7fbe16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);