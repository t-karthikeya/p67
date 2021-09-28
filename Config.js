import firebase from 'firebase'
require('@firebase/firestore')
const firebaseConfig = {
  apiKey: "AIzaSyD1RE_ZrNXV-2Pn9vk7_-MMnSn_DZ_mZ3c",
  authDomain: "library-a9608.firebaseapp.com",
  projectId: "library-a9608",
  storageBucket: "library-a9608.appspot.com",
  messagingSenderId: "439965757418",
  appId: "1:439965757418:web:a642d26a3645b1258f8c93"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export default firebase.firestore();