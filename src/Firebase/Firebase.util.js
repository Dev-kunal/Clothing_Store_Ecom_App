import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDE99DtDTQLKknNtKXtlLUReqh3ZQcBAyc",
  authDomain: "monkdb-184cb.firebaseapp.com",
  projectId: "monkdb-184cb",
  storageBucket: "monkdb-184cb.appspot.com",
  messagingSenderId: "607873662418",
  appId: "1:607873662418:web:dca00537267d6af0371c0b",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
export default firebase;