import { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBofy5LfRCo2aZ0x5KCOelKJyMpqOG3KAQ",
  authDomain: "login1-c2209.firebaseapp.com",
  projectId: "login1-c2209",
  storageBucket: "login1-c2209.appspot.com",
  messagingSenderId: "173865854170",
  appId: "1:173865854170:web:439ccb652d64329b8231e3"
};

// Initialize Firebase
const app1 = initializeApp(firebaseConfig);
export default app1;
const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}