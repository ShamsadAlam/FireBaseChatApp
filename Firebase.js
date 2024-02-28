import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9Ps99vedrd9dNscomAEKBtiBSN3eI6Wo",
  authDomain: "chat-app-573f6.firebaseapp.com",
  projectId: "chat-app-573f6",
  storageBucket: "chat-app-573f6.appspot.com",
  messagingSenderId: "1038456229581",
  appId: "1:1038456229581:web:73989ae345f49152f62384",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
