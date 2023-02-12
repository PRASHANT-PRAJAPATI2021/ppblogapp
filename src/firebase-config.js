import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDchBUosov13GMt8GaDRowRqfXH7w-8Aho",
  authDomain: "blogproject-b49d4.firebaseapp.com",
  projectId: "blogproject-b49d4",
  storageBucket: "blogproject-b49d4.appspot.com",
  messagingSenderId: "259141089537",
  appId: "1:259141089537:web:f1127bc0ca251d85860300"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();