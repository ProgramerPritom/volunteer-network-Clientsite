// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQhXQ2AGoM4baM3cCipRoyqDr4cZxV5no",
  authDomain: "volunteer-project-2a0c8.firebaseapp.com",
  projectId: "volunteer-project-2a0c8",
  storageBucket: "volunteer-project-2a0c8.appspot.com",
  messagingSenderId: "484678159325",
  appId: "1:484678159325:web:ff98543a50f40754ed0434"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;