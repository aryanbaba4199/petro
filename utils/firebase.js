import { initializeApp, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAHTfhVITSEWbg-D91vEYQhKwc52D3hibE",
  authDomain: "the-talk-talkies.firebaseapp.com",
  projectId: "the-talk-talkies",
  storageBucket: "the-talk-talkies.appspot.com",
  messagingSenderId: "1088047664819",
  appId: "1:1088047664819:web:ce822f670b38672a0eeac6",
  measurementId: "G-W51KSNRN13"
};

let app;

try {
  app = initializeApp(firebaseConfig);
} catch (e) {
  app = getApp();
}

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };