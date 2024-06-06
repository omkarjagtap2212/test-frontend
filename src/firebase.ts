import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD6XNPlDXZSGrT83UGDS_xHkk6NGFmu7Rg",
//   authDomain: "verify-ecom.firebaseapp.com",
//   projectId: "verify-ecom",
//   storageBucket: "verify-ecom.appspot.com",
//   messagingSenderId: "275138568392",
//   appId: "1:275138568392:web:18fec48e7c797215a305fd"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);