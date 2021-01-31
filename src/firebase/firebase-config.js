 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';
 
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyAHBMQaVFyAOPDVxHPlUSBlVYecrlxf2PY",
    authDomain: "journal-app-curso-react-28a73.firebaseapp.com",
    projectId: "journal-app-curso-react-28a73",
    storageBucket: "journal-app-curso-react-28a73.appspot.com",
    messagingSenderId: "140122129305",
    appId: "1:140122129305:web:8f21c5a9f2543fc1928908"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const db = firebase.firestore();
  const googleAuthProvider =  new firebase.auth.GoogleAuthProvider();

  export{
      db,
      googleAuthProvider,
      firebase
  }