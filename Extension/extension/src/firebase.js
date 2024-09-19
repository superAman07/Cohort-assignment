import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfFjMvn9bOKohIoFsNx038sNyyWcOfhts",
  authDomain: "collaborationcommentsextension.firebaseapp.com",
  databaseURL: "https://collaborationcommentsextension-default-rtdb.firebaseio.com",
  projectId: "collaborationcommentsextension",
  storageBucket: "collaborationcommentsextension.appspot.com",
  messagingSenderId: "184595820450",
  appId: "1:184595820450:web:18348b995eb4f363ac8cfb",
  measurementId: "G-ZE82T62DP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
