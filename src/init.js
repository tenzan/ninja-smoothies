import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD8mrvoQxymb-GZLOxU91Z4hR78h2poSZ8",
    authDomain: "ninja-smoothies-askar.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-askar.firebaseio.com",
    projectId: "ninja-smoothies-askar",
    storageBucket: "ninja-smoothies-askar.appspot.com",
    messagingSenderId: "369543599858"
  };
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

//export firestore database
export default firebaseApp.firestore()