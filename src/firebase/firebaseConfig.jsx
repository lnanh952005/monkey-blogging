// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithRedirect } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyD0DzajVrc9Ieh-wJVPuWoLCHdWz56g9y8",
  authDomain: "monkey-blogging-29d26.firebaseapp.com",
  projectId: "monkey-blogging-29d26",
  storageBucket: "monkey-blogging-29d26.firebasestorage.app",
  messagingSenderId: "444514327589",
  appId: "1:444514327589:web:7af6b2206c8230153f33cc",
  measurementId: "G-F258GX0Q55",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };

// Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, "cities");
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map((doc) => doc.data());
//   return cityList;
// }
