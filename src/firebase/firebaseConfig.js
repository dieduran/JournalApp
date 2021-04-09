import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBgB-c5Hsk2RGITTaI_s73gPjGTdXSXVrM",
    authDomain: "react-app-cursos-99b14.firebaseapp.com",
    projectId: "react-app-cursos-99b14",
    storageBucket: "react-app-cursos-99b14.appspot.com",
    messagingSenderId: "405850268888",
    appId: "1:405850268888:web:af044657d493cb9e72a3ad"
  };


firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
