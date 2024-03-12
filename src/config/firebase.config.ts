import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAyG3EGCofFTVz7xhP-fkZbOp1TcbOPmL8',
  authDomain: 'club-ecommerce-f5d34.firebaseapp.com',
  projectId: 'club-ecommerce-f5d34',
  storageBucket: 'club-ecommerce-f5d34.appspot.com',
  messagingSenderId: '884470107543',
  appId: '1:884470107543:web:e8169a3e66951b7fbc88d2',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
