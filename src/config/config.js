import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyD7PWKSJ6CcnMj4xqLAG_ZBGXKHTetUULo",
  authDomain: "steeldesigntech-pvt-ltd.firebaseapp.com",
  databaseURL: "https://steeldesigntech-pvt-ltd.firebaseio.com",
  projectId: "steeldesigntech-pvt-ltd",
  storageBucket: "steeldesigntech-pvt-ltd.appspot.com",
  messagingSenderId: "472719281035",
  appId: "1:472719281035:web:2049864918eee51f857d8e",
  measurementId: "G-MECQ1998K3"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

export default firebase;