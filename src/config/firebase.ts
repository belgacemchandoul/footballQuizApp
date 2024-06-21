import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyArtrlmVfN_wbS4rV_HwxTVCteJ2BNXHi0",
  authDomain: "footballquizzesapp.firebaseapp.com",
  projectId: "footballquizzesapp",
  storageBucket: "footballquizzesapp.appspot.com",
  messagingSenderId: "228889265534",
  appId: "1:228889265534:web:3e1c187afdd9b477501f2f",
  measurementId: "G-LFR6WCC6ZY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
const firestore = getFirestore(app);
const storage = getStorage(app);

export { firestore, storage };
