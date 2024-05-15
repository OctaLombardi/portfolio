// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCasXeRuE44Q-idA6-JEiI7q3_9qCUJMHg',
  authDomain: 'portfolio-87041.firebaseapp.com',
  projectId: 'portfolio-87041',
  storageBucket: 'portfolio-87041.appspot.com',
  messagingSenderId: '984757599905',
  appId: '1:984757599905:web:e45afed83adb03e787bae0',
  measurementId: 'G-FL8PERHNSV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//firebase deploy --only hosting:octaviolombardidev
/* "site": "octaviolombardidev",*/
