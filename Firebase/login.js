
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import {getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDDCA-oPC0mjD6ZElYWKZUfk0127oKM6J0",
    authDomain: "login-ac6b2.firebaseapp.com",
    projectId: "login-ac6b2",
    storageBucket: "login-ac6b2.appspot.com",
    messagingSenderId: "180397904213",
    appId: "1:180397904213:web:943be6652acf9a5a6c1fdc"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getDatabase(app)

  document.getElementById("submit").addEventListener('click', function(e){
    set(ref (db, 'user/' + document.getElementById("username").value),

{

username: document.getElementById("username").value,

email: document.getElementById("email").value,

});

alert("Login Sucessfull 1");

  })
