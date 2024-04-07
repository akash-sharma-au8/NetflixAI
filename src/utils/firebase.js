// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt-vNBl2862mQZMHVGoIi1tVqZJea48Ks",
  authDomain: "netflixai-1eb3a.firebaseapp.com",
  projectId: "netflixai-1eb3a",
  storageBucket: "netflixai-1eb3a.appspot.com",
  messagingSenderId: "291404199282",
  appId: "1:291404199282:web:54a92360c2639192a759eb",
  measurementId: "G-65P66GEEJV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);