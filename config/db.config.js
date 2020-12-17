const firebase = require('firebase/app')
require("firebase/database")

//Firebase Config here
const firebaseConfig = {
    // ...
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  }


firebase.initializeApp(firebaseConfig)