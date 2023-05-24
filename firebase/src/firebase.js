// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTb-U27FszADl3tBGAs7r5tCMdsTrMuCI",
  authDomain: "pruebas-95480.firebaseapp.com",
  projectId: "pruebas-95480",
  storageBucket: "pruebas-95480.appspot.com",
  messagingSenderId: "7372177975",
  appId: "1:7372177975:web:028481aad872d15594f5b2",
};

export const provider = new GoogleAuthProvider();

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
