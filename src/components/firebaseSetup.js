import {initializeApp} from 'firebase/app';
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDM0A8ys18nErlP72FREL6kxB6gvblqQu8",
    authDomain: "auditionportal-2597e.firebaseapp.com",
    projectId: "auditionportal-2597e",
    storageBucket: "auditionportal-2597e.appspot.com",
    messagingSenderId: "711950205955",
    appId: "1:711950205955:web:594790a1a0d7bfc963ba36",
    measurementId: "G-QP0RFSCFVE"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);