import 'firebase/storage';
import firebase from 'firebase/app';
import 'firebase/firestore'
require('firebase/auth');


  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD6wleIGRKE4TY9H-5ggppfBgpWcfQ429w",
    authDomain: "myprojectinstagram.firebaseapp.com",
    databaseURL: "https://myprojectinstagram.firebaseio.com",
    projectId: "myprojectinstagram",
    storageBucket: "myprojectinstagram.appspot.com",
    messagingSenderId: "180070927512",
    appId: "1:180070927512:web:f22b1ca41a05342bf294ed",
    measurementId: "G-893X7KVWN0"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };

//   export default db;