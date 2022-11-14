import { useEffect, useState } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3e0O_H0Rw5JbLII2VWMyGkFSTnksNmJg",
  authDomain: "w-2-b.firebaseapp.com",
  databaseURL: "https://w-2-b.firebaseio.com",
  projectId: "w-2--b",
  storageBucket: "w-2--b.appspot.com",
  messagingSenderId: "162546338092",
  appId: "1:162546338092:web:10f397f2dc70b7cfa2c489",
  measurementId: "G-9E29PK134T"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

// eslint-disable-next-line no-unused-vars
const database = getDatabase();

// eslint-disable-next-line no-unused-vars
const auth = getAuth();

export function signup(email, passsword) {
  return createUserWithEmailAndPassword(auth, email, passsword);
}

export function login(email, passsword) {
  return signInWithEmailAndPassword(auth, email, passsword);
}

export function logout() {
  signOut(auth);
}
//Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}
