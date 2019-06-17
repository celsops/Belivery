import firebase from 'firebase';
// import firebaseui from 'firebaseui';        

// const firebase = require("firebase");
var config = {
    apiKey: "AIzaSyCOI1jpvOoB7mLWchoZUQ1pct8Hek9HYR8",
    authDomain: "belivery-3a3d1.firebaseapp.com",
    databaseURL: "https://belivery-3a3d1.firebaseio.com",
    projectId: "belivery-3a3d1",
    storageBucket: "",
    messagingSenderId: "826863061871",
    appId: "1:826863061871:web:6efb6e86753c5c65"
  };
  // Initialize Firebase
firebase.initializeApp(config);
// var number = "+55 82 91234-5678";
// // var code  = "123456";
// code_recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container",
// {
//    size:"invisible"
//     // other options
// });

// const appVerifier = code_recaptchaVerifier
// firebase.auth().signInWithPhoneNumber()
// firebase.auth().signInWithPhoneNumber(number, appVerifier)
// .then(confirmResult => {
//   // success
// })
// .catch(error => {
//   // error
// });

// export const firebaseImpl = firebase.initializeApp(config);
export const firebaseAuth = firebase.auth();
export const db = firebase.database();