import { initializeApp, getApp, getApps } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

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
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);

export { auth, db };
