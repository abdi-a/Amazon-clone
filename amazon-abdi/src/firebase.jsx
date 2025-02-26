
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const firebaseConfig = {
   apiKey: "AIzaSyCwn0RAa6K69MrhHtfqTxGnn5DZKdoo_rg",
  authDomain: "abdi-63d14.firebaseapp.com",
 projectId: "abdi-63d14",
  storageBucket: "abdi-63d14.firebasestorage.app",
  messagingSenderId: "791537488990",
  appId: "1:791537488990:web:3d3acce19a3569bc9950cf",
  measurementId: "G-069DQS8NM1"





};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };