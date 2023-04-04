import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAVJlcLJcx4L7Yda_F2xdsMv0xNvlhDxSs",
  authDomain: "tiktokjornada.firebaseapp.com",
  projectId: "tiktokjornada",
  storageBucket: "tiktokjornada.appspot.com",
  messagingSenderId: "88496449761",
  appId: "1:88496449761:web:77e649d32e615666bfefa0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
