import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyADnef5mQtsrRP61YLnRMbT8ajVUaA8k5U",
    authDomain: "disneyclone-b97bd.firebaseapp.com",
    projectId: "disneyclone-b97bd",
    storageBucket: "disneyclone-b97bd.appspot.com",
    messagingSenderId: "182641627465",
    appId: "1:182641627465:web:9d19ab70e91025fdf5ca98",
    measurementId: "G-46LBCQJERX"
  };


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp); // Firestore instance
const auth = getAuth(firebaseApp); // Auth instance
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp); // Storage instance

export { auth, storage, provider };
export default db;

