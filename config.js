import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAr9rf4VSGB6rt29gCWLvJTpObB2-GjWc0",
    authDomain: "book-santa-wro.firebaseapp.com",
    projectId: "book-santa-wro",
    storageBucket: "book-santa-wro.appspot.com",
    messagingSenderId: "13310630025",
    appId: "1:13310630025:web:4f6fc078014bd391034e58"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
