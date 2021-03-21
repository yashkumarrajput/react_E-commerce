import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBkZ4zQg0BKucW48PIHUJsL9HFMibz1F24",
    authDomain: "react-e-commerce-db-8386a.firebaseapp.com",
    projectId: "react-e-commerce-db-8386a",
    storageBucket: "react-e-commerce-db-8386a.appspot.com",
    messagingSenderId: "219677898042",
    appId: "1:219677898042:web:b2db153e861b01fb6d4c03",
    measurementId: "G-2C9CP1QDE5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;