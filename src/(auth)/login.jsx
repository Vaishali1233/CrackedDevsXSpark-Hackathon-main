import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCkfz0KtGjPa4t_jfLFEg0lQiervLst4d0",
  authDomain: "safar-1b9ec.firebaseapp.com",
  projectId: "safar-1b9ec",
  storageBucket: "safar-1b9ec.appspot.com",
  messagingSenderId: "589292038744",
  appId: "1:589292038744:web:1186f0854985d02749782d",
  measurementId: "G-61FZ4627RM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return new Promise((resolve, reject) => {
    // Add the prompt parameter to force the account picker
    provider.setCustomParameters({
      prompt: "select_account",
    });

    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        localStorage.setItem("user", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
        localStorage.setItem("isLoggedIn", true);
        resolve(); // Resolve the promise if sign-in is successful
      })
      .catch((error) => {
        console.error(error);
        reject(error); // Reject the promise if there's an error
      });
  });
};

// HERE Maps API Initialization
const platform = new H.service.Platform({
  apikey: 'wX8XPC8nafBavveQLDl9NxshWXONNrU4oemMWlNQ_iI'
});

// Use platform to access other HERE Maps API services like geolocation, routing, etc.
