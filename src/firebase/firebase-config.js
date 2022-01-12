import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBEL87Xc4kBfLP5iuMuDUDSs2dty19LGkg",
    authDomain: "journal-app-9e41b.firebaseapp.com",
    projectId: "journal-app-9e41b",
    storageBucket: "journal-app-9e41b.appspot.com",
    messagingSenderId: "853679369356",
    appId: "1:853679369356:web:40c73ba5f4d2cac2a91fa9"
  };
  
  // Initialize Firebase
  initializeApp(firebaseConfig);
 
  const db = getFirestore();
   
  const googleAuthProvider = new GoogleAuthProvider();
   
  export{
      db,
      googleAuthProvider
  }