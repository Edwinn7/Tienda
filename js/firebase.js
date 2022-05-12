// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBevCADl_hJvBq2au2yKcsZlVj_Fb689kg",
  authDomain: "edwintiendasbdo.firebaseapp.com",
  projectId: "edwintiendasbdo",
  storageBucket: "edwintiendasbdo.appspot.com",
  messagingSenderId: "690116127171",
  appId: "1:690116127171:web:dd6872e9aa65b37d20b576",
  measurementId: "G-42KH41QKNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);