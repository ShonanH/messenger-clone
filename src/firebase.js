import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyBHBOA78hZGsVwrLfwYgxsg9O-9TZRPPqs",
  authDomain: "messenger-clone-c2d9e.firebaseapp.com",
  projectId: "messenger-clone-c2d9e",
  storageBucket: "messenger-clone-c2d9e.appspot.com",
  messagingSenderId: "556755713335",
  appId: "1:556755713335:web:c15366091162d942b3eeb2",
  measurementId: "G-S1FESS6S2Q",
});

const db = firebaseApp.firestore();

export default db;
