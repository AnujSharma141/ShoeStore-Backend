const firebase = require('firebase/app')
require("firebase/database")

//Firebase Config here
const firebaseConfig = {
    // ...
    // apiKey: "",
    // authDomain: "",
    // databaseURL: "",
    // projectId: "",
    // storageBucket: "",
    // messagingSenderId: "",
    // appId: ""
    apiKey: "AIzaSyCvesg_oEQSOka1gj_LiDS8m9J9lZWh6-k",
    authDomain: "simora.firebaseapp.com",
    databaseURL: "https://simora.firebaseio.com",
    projectId: "simora",
    storageBucket: "simora.appspot.com",
    messagingSenderId: "12230464810",
    appId: "1:12230464810:web:41b4ceb766e4b610d5fa53"
  }


firebase.initializeApp(firebaseConfig)