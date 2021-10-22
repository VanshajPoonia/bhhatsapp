import firebase from "firebase";
// import firebaseConfig from './firebaseAPI';

// cheach app is already initialized or not
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_bfqtNYyi0jThyJp6YuXyzvfgRcWBTVs",
  authDomain: "whatsapp-next-16abc.firebaseapp.com",
  projectId: "whatsapp-next-16abc",
  storageBucket: "whatsapp-next-16abc.appspot.com",
  messagingSenderId: "518552362948",
  appId: "1:518552362948:web:076ccbe2ebf3b5fa4a8e91",
  measurementId: "G-324GK47R8Y",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
