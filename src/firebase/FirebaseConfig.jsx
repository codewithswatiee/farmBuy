import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAMiUZnEav-w9rlgYpNLshKm8qsbnbdjBg",
  authDomain: "agrobond-31e33.firebaseapp.com",
  projectId: "agrobond-31e33",
  storageBucket: "agrobond-31e33.appspot.com",
  messagingSenderId: "643215190019",
  appId: "1:643215190019:web:34c5cbbff1a1e3941dc636",
  measurementId: "G-07LX94RGZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);