
import { getAuth} from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPHA_TICt8YLcPyGogZ2EkfeSJuV3pI4A",
  authDomain: "netflixgpt-2c526.firebaseapp.com",
  projectId: "netflixgpt-2c526",
  storageBucket: "netflixgpt-2c526.appspot.com",
  messagingSenderId: "60462906766",
  appId: "1:60462906766:web:3cc6630a926d089d50f8df",
  measurementId: "G-C4CRCMJ6E9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();