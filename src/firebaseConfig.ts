import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB09xqRyUvwSKDkXIDXnlKUrFJ7LRxYy-w",
  authDomain: "people-engagement-portal.firebaseapp.com",
  databaseURL: "https://people-engagement-portal-default-rtdb.firebaseio.com",
  projectId: "people-engagement-portal",
  storageBucket: "people-engagement-portal.appspot.com",
  messagingSenderId: "177801612265",
  appId: "1:177801612265:web:0847028116c660c80b5978",
  measurementId: "G-R25M7N48M8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };