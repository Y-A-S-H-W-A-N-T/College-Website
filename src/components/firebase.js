import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import { getStorage } from '@firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyB_rdJ8-VIy9irttdF6OIL3TI4cT7pOPbo",
  authDomain: "news-9a617.firebaseapp.com",
  projectId: "news-9a617",
  storageBucket: "news-9a617.appspot.com",
  messagingSenderId: "1036708067341",
  appId: "1:1036708067341:web:97cb80c897b153c1823d44",
  measurementId: "G-BHLJ43W57D"
};

  const app = initializeApp(firebaseConfig)
  
  export const storage = getStorage(app)
  export const db = getFirestore(app)