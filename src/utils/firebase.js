// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBU2Udlz9lLCbDGxsaANy8lT_0wL8vrorQ",
  authDomain: "taqwa-fd895.firebaseapp.com",
  projectId: "taqwa-fd895",
  storageBucket: "taqwa-fd895.appspot.com",
  messagingSenderId: "407520614704",
  appId: "1:407520614704:web:c27de00f8dac04089950f5",
  measurementId: "G-2NZ4HJ1C4Q"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
