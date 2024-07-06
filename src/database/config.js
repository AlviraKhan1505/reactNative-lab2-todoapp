// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO9eu8RtuAq9rhI3Ya0FGHck6JbO4C_yw",
  authDomain: "todo-app-1194645.firebaseapp.com",
  projectId: "todo-app-1194645",
  storageBucket: "todo-app-1194645.appspot.com",
  messagingSenderId: "374798369340",
  appId: "1:374798369340:web:2b2d94eac326b89f727939",
  measurementId: "G-XQ00Q3JJHR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
