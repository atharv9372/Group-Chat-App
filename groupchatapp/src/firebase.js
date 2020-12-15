import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA9yc1Jmj858G8mnr-97S6TJcI8bUJFB8c",
    authDomain: "group-chat-app-4349b.firebaseapp.com",
    databaseURL: "https://group-chat-app-4349b.firebaseio.com",
    projectId: "group-chat-app-4349b",
    storageBucket: "group-chat-app-4349b.appspot.com",
    messagingSenderId: "307091787390",
    appId: "1:307091787390:web:1261721a277fcc103d522f"
  };

  const firebaseApp = firebase.initializeApp (firebaseConfig);
  
  // User Authetication Setup
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth, provider};

  // Database Setup
  const db = firebaseApp.firestore();
  export default db;