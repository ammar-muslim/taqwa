
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBU2Udlz9lLCbDGxsaANy8lT_0wL8vrorQ",
  authDomain: "taqwa-fd895.firebaseapp.com",
  projectId: "taqwa-fd895",
  storageBucket: "taqwa-fd895.appspot.com",
  messagingSenderId: "407520614704",
  appId: "1:407520614704:web:c27de00f8dac04089950f5",
  measurementId: "G-2NZ4HJ1C4Q"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export const ADMIN_UID = "Xm3bG6Q7hIhyhXYly7zU6P7aXLo1";

export { db, auth };
