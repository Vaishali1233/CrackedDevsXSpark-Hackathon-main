import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: "footprint-friend-90ccd.firebaseapp.com",
//   projectId: "footprint-friend-90ccd",
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGE_ID,
//   appId: process.env.REACT_APP_AP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkfz0KtGjPa4t_jfLFEg0lQiervLst4d0",
  authDomain: "safar-1b9ec.firebaseapp.com",
  projectId: "safar-1b9ec",
  storageBucket: "safar-1b9ec.appspot.com",
  messagingSenderId: "589292038744",
  appId: "1:589292038744:web:1186f0854985d02749782d",
  measurementId: "G-61FZ4627RM"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

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
