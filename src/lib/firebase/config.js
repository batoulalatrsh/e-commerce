import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD-8-oneWWihGMNr3Nm2bXEkCzrn551Xno",
  authDomain: "e-commerce-c9bee.firebaseapp.com",
  projectId: "e-commerce-c9bee",
  storageBucket: "e-commerce-c9bee.firebasestorage.app",
  messagingSenderId: "975515331104",
  appId: "1:975515331104:web:f074b437cd658ae7ba2a45",
  measurementId: "G-0ENWSKEK9V",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
