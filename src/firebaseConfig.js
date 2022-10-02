// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClJVcU_xIufZBa09Cwkg4-CAI96zuZ-Os",
  authDomain: "psp-data-57891.firebaseapp.com",
  projectId: "psp-data-57891",
  storageBucket: "psp-data-57891.appspot.com",
  messagingSenderId: "452727369901",
  appId: "1:452727369901:web:9f10bbf33b2641c9791624",
  measurementId: "G-EC33EW6YRH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);