import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCkfbX7elaeDAws6eGN4QxQ-NNsP7fXcNE",
  authDomain: "fashionplus-cc8a5.firebaseapp.com",
  databaseURL: "https://fashionplus-cc8a5.firebaseio.com",
  projectId: "fashionplus-cc8a5",
  storageBucket: "fashionplus-cc8a5.appspot.com",
  messagingSenderId: "73748184037",
  appId: "1:73748184037:web:3ffc2fee3e6b85e0954d0c",
  measurementId: "G-BPYLBJLQYE",
};

// get user auth from auth library and store in db
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
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
