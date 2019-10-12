import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

//this config obj is provided by firebase after creating project in it ,  
const config = {
  apiKey: "AIzaSyAkWK5v-kwhOqNz8UupY8LHO4oDa7afcdI",
  authDomain: "ecomerce-crwn.firebaseapp.com",
  databaseURL: "https://ecomerce-crwn.firebaseio.com",
  projectId: "ecomerce-crwn",
  storageBucket: "",
  messagingSenderId: "886253559981",
  appId: "1:886253559981:web:6facae7040cf5011ffa624",
  measurementId: "G-THD1K8QNB6"
};

// create user profile in firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc('users/' + userAuth.uid)
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}

// fire base utility configuration 
firebase.initializeApp(config)


export const auth = firebase.auth() // for google authentication
export const firestore = firebase.firestore()

// configuration google authenticatio utility

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' }); // triggers the google popup when we use googleAuth provieder for authentication and sign in
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;