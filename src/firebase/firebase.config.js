// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQjExrZOFDY7GUMOtPQG6C8hfHJGNdbZg",
  authDomain: "assignment-nine-d009c.firebaseapp.com",
  projectId: "assignment-nine-d009c",
  storageBucket: "assignment-nine-d009c.appspot.com",
  messagingSenderId: "870431621329",
  appId: "1:870431621329:web:720dad823d26038f0145f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;