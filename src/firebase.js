import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBzxY8NJ2M5XKkxnabl4evegzEAjPUBL78",
    authDomain: "softwrap-teste-cfe38.firebaseapp.com",
    databaseURL: "https://softwrap-teste-cfe38.firebaseio.com",
    projectId: "softwrap-teste-cfe38",
    storageBucket: "softwrap-teste-cfe38.appspot.com",
    messagingSenderId: "499724897238",
    appId: "1:499724897238:web:9cc6527890838d9cfd7277"
  };
  // Initialize Firebase
  let fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref()