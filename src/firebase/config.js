import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Firebase configuration - Replace with your own Firebase project credentials
// To get these credentials:
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project or select existing project
// 3. Go to Project Settings > General
// 4. Scroll down to "Your apps" and click the web icon
// 5. Copy the configuration object

const firebaseConfig = {
  apiKey: "AIzaSyBIbXSF_cfBrrF_rrV9kStl5vwzG504oU0",
  authDomain: "sajjivana.firebaseapp.com",
  projectId: "sajjivana",
  storageBucket: "sajjivana.firebasestorage.app",
  messagingSenderId: "809872777519",
  appId: "1:809872777519:web:0d203d40a6b0718243c1da",
  measurementId: "G-L3MK4KB3F3"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app; 