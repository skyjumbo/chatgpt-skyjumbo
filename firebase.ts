import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCDZgrQ3zx6K4nFiesDlGUroAx8Y6kE71E",
  authDomain: "chatgpt-skyjumbo.firebaseapp.com",
  projectId: "chatgpt-skyjumbo",
  storageBucket: "chatgpt-skyjumbo.appspot.com",
  messagingSenderId: "784581703873",
  appId: "1:784581703873:web:fce57b10d8cd7b2d4abc40",
  measurementId: "G-22RNW3SY13"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }