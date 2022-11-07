// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-HTCuCFKKxtCpHOnxhzMm641YFYDVmrU",
  authDomain: "new-wave-photographer.firebaseapp.com",
  projectId: "new-wave-photographer",
  storageBucket: "new-wave-photographer.appspot.com",
  messagingSenderId: "647200586121",
  appId: "1:647200586121:web:0bfaaa7d3c7f1f55c0c958"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;