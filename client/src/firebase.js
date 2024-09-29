// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-6c11c.firebaseapp.com",
  projectId: "blog-6c11c",
  storageBucket: "blog-6c11c.appspot.com",
  messagingSenderId: "1050020575250",
  appId: "1:1050020575250:web:156d8fc9f7060cdb39c0cb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);





