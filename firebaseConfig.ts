// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAWhlnCt_qtj8qeMoOK2xjQjaLwJYVv4BE",
  authDomain: "angular-demo-7a244.firebaseapp.com",
  projectId: "angular-demo-7a244",
  storageBucket: "angular-demo-7a244.appspot.com",
  messagingSenderId: "978405188480",
  appId: "1:978405188480:web:d23e7f68b1c45778e05765",
  measurementId: "G-QRG1ZJRV8X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);