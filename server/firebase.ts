import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyAQlbcZgipIoARuYg8fjFJ5OIUOz8F0ZJs",
  authDomain: "leon-4269b.firebaseapp.com",
  projectId: "leon-4269b",
  storageBucket: "leon-4269b.appspot.com",
  messagingSenderId: "830570624893",
  appId: "1:830570624893:web:ea7bc5a69f2ecf2beafe14",
  measurementId: "G-43HKRKBXXM"
});

export const auth = getAuth(firebaseConfig)

export const db = getFirestore(firebaseConfig)

