// DMS96 Firebase - dms96-5b0a1
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "AIzaSyBI8hNag3bNUYPgWQyjK2LlNbBkLWbrWUA",
  authDomain: "dms96-5b0a1.firebaseapp.com",
  projectId: "dms96-5b0a1",
  storageBucket: "dms96-5b0a1.firebasestorage.app",
  messagingSenderId: "230194828323",
  appId: "1:230194828323:web:597f93d5ad4306aafd0d96"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
