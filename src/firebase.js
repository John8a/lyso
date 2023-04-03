import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLmUhGCfIsFuLnNBvlcA_oLf9dw71xwFM",
  authDomain: "lyso-b9bb9.firebaseapp.com",
  projectId: "lyso-b9bb9",
  storageBucket: "lyso-b9bb9.appspot.com",
  messagingSenderId: "100561462307",
  appId: "1:100561462307:web:d42a7d3de86a543d67fd96",
  measurementId: "G-D24KLQ5WFS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export default { analytics }