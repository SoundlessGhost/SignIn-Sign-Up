// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgvqRKAMuzfblwp6Tn2AdiKbUpCu7MxYA",
  authDomain: "emailpasswordbase.firebaseapp.com",
  projectId: "emailpasswordbase",
  storageBucket: "emailpasswordbase.appspot.com",
  messagingSenderId: "1054243626805",
  appId: "1:1054243626805:web:4b1cb393b47081d399367c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;