
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBg-eHTIVhE8k6PF3CYEVPQK8kGONR-lcM",
    authDomain: "utkala-e3c11.firebaseapp.com",
    databaseURL: "https://utkala-e3c11-default-rtdb.firebaseio.com",
    projectId: "utkala-e3c11",
    storageBucket: "utkala-e3c11.appspot.com",
    messagingSenderId: "793503339505",
    appId: "1:793503339505:web:a9227b79681628e457aa50",
    measurementId: "G-BNKZ5L8T04"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };
