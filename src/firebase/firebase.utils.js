import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBWfbApawlGPMbW5nq4FJ4iZwTXgNS3DNc',
  authDomain: 'crwn-db-4259b.firebaseapp.com',
  databaseURL: 'https://crwn-db-4259b.firebaseio.com',
  projectId: 'crwn-db-4259b',
  storageBucket: 'crwn-db-4259b.appspot.com',
  messagingSenderId: '740145345341',
  appId: '1:740145345341:web:8ab8b4a59dbc4a40320b54',
  measurementId: 'G-TT4D6RQZD0',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_ account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.warn('error creating user', error.message);
    }
  }

  return userRef;
};

export default firebase;
