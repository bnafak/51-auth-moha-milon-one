// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN4HZm4qR1rN2L54zP6nsGXyp7jfB0ZwU",
  authDomain: "auth-moha-milon-one.firebaseapp.com",
  projectId: "auth-moha-milon-one",
  storageBucket: "auth-moha-milon-one.appspot.com",
  messagingSenderId: "1042491683029",
  appId: "1:1042491683029:web:69375226186d7ee9e4f25c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export default app;
const auth = getAuth(app);
export default auth;