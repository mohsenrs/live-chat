import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCz6lPb9aRX4ca2y4l-Cj6olh6OEHXoyaY",
  authDomain: "vue-site-15c8b.firebaseapp.com",
  projectId: "vue-site-15c8b",
  storageBucket: "vue-site-15c8b.appspot.com",
  messagingSenderId: "208360284876",
  appId: "1:208360284876:web:6ea2b8a984f177fca69869",
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { projectFirestore, timestamp, projectAuth };
