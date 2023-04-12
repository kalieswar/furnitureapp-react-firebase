import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDXm80YvtZDWhd2iILb2B7Fr0gC86dg8CQ",
    authDomain: "shopapplication-6682a.firebaseapp.com",
    projectId: "shopapplication-6682a",
    storageBucket: "shopapplication-6682a.appspot.com",
    messagingSenderId: "750905084346",
    appId: "1:750905084346:web:41370bd949e4bfa0357583"
  };

const firebase = initializeApp(firebaseConfig)

const db = getFirestore(firebase)

export {db}