import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAtqj1PJbMBEBJViObsEfpi1ePqe0VBWfs",
  authDomain: "chitchat-94814.firebaseapp.com",
  projectId: "chitchat-94814",
  storageBucket: "chitchat-94814.appspot.com",
  messagingSenderId: "806230089631",
  appId: "1:806230089631:web:27bc3db16542ef9539a7aa",
  measurementId: "G-SSQBWRD9NT",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
