import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDn1_mk55oEJbHN2cWyaA9cdrtuYcEagpI",
    authDomain: "bong-db.firebaseapp.com",
    databaseURL: "https://bong-db.firebaseio.com",
    projectId: "bong-db",
    storageBucket: "",
    messagingSenderId: "878466633272",
    appId: "1:878466633272:web:d6d556c4908eab3c"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
