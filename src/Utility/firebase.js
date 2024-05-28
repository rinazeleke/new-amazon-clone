import firebase from "firebase/compat/app";

import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpG45f2_MhxWoErMVvFwQWypDlkxxWTE0",
  authDomain: "clone-c9b33.firebaseapp.com",
  projectId: "clone-c9b33",
  storageBucket: "clone-c9b33.appspot.com",
  messagingSenderId: "695191472143",
  appId: "1:695191472143:web:7c90db683faff90415fb7a",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
