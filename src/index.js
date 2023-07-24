import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//createUserWithEmailAndPassword

const firebaseConfig = {
  apiKey: "AIzaSyC17J5Pna48y8qm_0IvRXtH8Hwmr5SFJHc",
  authDomain: "pelisjesus-db427.firebaseapp.com",
  projectId: "pelisjesus-db427",
  storageBucket: "pelisjesus-db427.appspot.com",
  messagingSenderId: "574701512207",
  appId: "1:574701512207:web:9278b92827587fa51a257a",
};
const email = "marcelo@epn.edu.ec";
const password = "123456";
// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("inicializado");

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log("Usuario creado");
    console.log(user.email);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    // ..
  });
