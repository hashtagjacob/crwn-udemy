import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBNjTrLlHtekkYgXZ_a5txHJ1Wvp0rYATs',
  authDomain: 'crown-db-a0b27.firebaseapp.com',
  databaseURL: 'https://crown-db-a0b27.firebaseio.com',
  projectId: 'crown-db-a0b27',
  storageBucket: 'crown-db-a0b27.appspot.com',
  messagingSenderId: '407747011798',
  appId: '1:407747011798:web:4c916a5aa4fe4b7c335577',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
