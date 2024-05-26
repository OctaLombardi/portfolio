// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAK_I-xp_EGqhcy6X0R4qlQ_-iZt1oVJTk',
  authDomain: 'portfolio-a2100.firebaseapp.com',
  projectId: 'portfolio-a2100',
  storageBucket: 'portfolio-a2100.appspot.com',
  messagingSenderId: '861195749348',
  appId: '1:861195749348:web:8a39a3c567d66c40aca9f1',
  measurementId: 'G-GWV9G63DL9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
