import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD3nMPC4CM6dEhM36aAXSeNI9CpcPnbPNo",
  authDomain: "clone-753ad.firebaseapp.com",
  databaseURL: "https://clone-753ad.firebaseio.com",
  projectId: "clone-753ad",
  storageBucket: "clone-753ad.appspot.com",
  messagingSenderId: "573353113751",
  appId: "1:573353113751:web:10340be2a085e1800dd1d2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };