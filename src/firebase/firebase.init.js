// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7kM39c5WBPFJfJkv4wf9FN6Opq5xIB8k",
    authDomain: "simple-firebase2-b4ed4.firebaseapp.com",
    projectId: "simple-firebase2-b4ed4",
    storageBucket: "simple-firebase2-b4ed4.firebasestorage.app",
    messagingSenderId: "843031251202",
    appId: "1:843031251202:web:583792dc7cca99b4589a1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;