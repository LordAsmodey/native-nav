import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Import the functions you need from the SDKs you need
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const firebaseConfig = {
  apiKey: "AIzaSyDXB8IIioHsoHQPESC_aLAxSJnp-WbmoYc",
  authDomain: "shopapp-32450.firebaseapp.com",
  projectId: "shopapp-32450",
  storageBucket: "shopapp-32450.appspot.com",
  messagingSenderId: "711506155920",
  appId: "1:711506155920:web:bb7e2969a689783fbfbb15",
  measurementId: "G-S1V3034Q11"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);

export const loginWithEmailAndPassword = (email: string, password: string) => {
  return signInWithEmailAndPassword(firebaseAuth, email, password);
};

export const regNewUserFirebase = (email: string, password: string) => {
  return createUserWithEmailAndPassword(firebaseAuth, email, password);
};

export const logOutUserFirebase = () => {
  signOut(firebaseAuth);
};

export const updateUserFirebase = (
  displayName = null,
  photoURL = null,
) => {
  if (firebaseAuth.currentUser) {
    updateProfile(firebaseAuth.currentUser, {
      displayName,
      photoURL,
    });
  }
};
