import firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMGj2tIx3mD5nHhgCEYoGDMjeC7k-eE9A",
  authDomain: "doan-83eca.firebaseapp.com",
  projectId: "doan-83eca",
  storageBucket: "doan-83eca.appspot.com",
  messagingSenderId: "212585833515",
  appId: "1:212585833515:web:8106ab3b6a1e7b6037f66e",
  measurementId: "G-Z49110LHV6",
};

// if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
// }
const db = firebase.firestore();

export default { firebase, db };
