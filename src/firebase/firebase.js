import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBkm6TB9beWl2k2N62R4xQ-QoXj7NKvX3E",
    authDomain: "fir-blog-ba786.firebaseapp.com",
    projectId: "fir-blog-ba786",
    storageBucket: "fir-blog-ba786.appspot.com",
    messagingSenderId: "73860499967",
    appId: "1:73860499967:web:8953a0820edeb380a0ffca",
    measurementId: "G-4XE8BLCQ6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore();