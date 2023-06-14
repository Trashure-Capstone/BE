const firebase = require("firebase/app");
const firebaseConfig = {
  apiKey: "AIzaSyDrivDepUTZev9ylJ-5KnjsLCZ8PfSw4yQ",
  authDomain: "tutorial-ee9f6.firebaseapp.com",
  projectId: "tutorial-ee9f6",
  storageBucket: "tutorial-ee9f6.appspot.com",
  messagingSenderId: "447918902995",
  appId: "1:447918902995:web:34e46d03ea005fb3688e26",
};
const app = firebase.initializeApp(firebaseConfig);

module.exports = firebase;
