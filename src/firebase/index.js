import { initializeApp } from "firebase/app";
// import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore/lite';

var firebaseConfig = {
    apiKey: "AIzaSyAzTPGEQ9CO6prgFwlW9HGEVQV1cKKIzDo",
    authDomain: "polardot-5cd2e.firebaseapp.com",
    projectId: "polardot-5cd2e",
    storageBucket: "polardot-5cd2e.appspot.com",
    messagingSenderId: "380926680593",
    appId: "1:380926680593:web:2684f265855037b118dbb0",
    measurementId: "G-ES591KV9WY"
};

const fb = initializeApp(firebaseConfig);
const db = getFirestore(fb);

export default { fb, db };