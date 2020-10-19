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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { email, displayName } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        createdAt,
        email,
        displayName,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating user\n' + error.message);
    }
  }
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const uploadCollection = (collectionName, documentsToAdd) => {
  const collectionRef = firestore.collection(collectionName);
  const batch = firestore.batch();
  documentsToAdd.forEach((document) => {
    const documentRef = collectionRef.doc();
    batch.set(documentRef, document);
  });
  batch.commit();
};

export const convertCollectionsToMap = (snapshot) => {
  const collectionsArray = snapshot.docs.map((docRef) => {
    const { items, title } = docRef.data();
    return {
      items,
      title,
      routeName: encodeURI(title.toLowerCase()),
      id: docRef.id,
    };
  });

  return collectionsArray.reduce((accumulator, current) => {
    accumulator[current.title.toLowerCase()] = current;
    return accumulator;
  }, {});
};

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
