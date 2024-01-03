import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC21u_3GdaxtHSnQjz-5Xs-to3GtIZov7M",
    authDomain: "tototter-react.firebaseapp.com",
    projectId: "tototter-react",
    storageBucket: "tototter-react.appspot.com",
    messagingSenderId: "44015345658",
    appId: "1:44015345658:web:a42600275f0726951b0e43"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const storage = getStorage();
export const storageRef = ref(storage);

export default app;
