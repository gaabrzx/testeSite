// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-7vi8luujj5fM-OHaIt7iBqVHcFjbH7c",
  authDomain: "pegadinha-1d474.firebaseapp.com",
  projectId: "pegadinha-1d474",
  storageBucket: "pegadinha-1d474.firebasestorage.app",
  messagingSenderId: "670785324339",
  appId: "1:670785324339:web:b7a8a1e06faff174f96a46",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const submit = document.getElementById("submitBtn");

submit.addEventListener("click", function (event) {
  event.preventDefault();
  const email = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      window.location.href = "sistema.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
});
