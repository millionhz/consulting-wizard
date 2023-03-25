import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { sessionLogIn } from './backend';

const firebaseConfig = {
  apiKey: 'AIzaSyB7pBX3wdSsMYDbhWr0s1bpGwy7TP3fxDI',
  authDomain: 'consulting-wizard.firebaseapp.com',
  projectId: 'consulting-wizard',
  storageBucket: 'consulting-wizard.appspot.com',
  messagingSenderId: '227256909039',
  appId: '1:227256909039:web:600d353f21519bc418af1a',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const logIn = (email, password) =>
  signInWithEmailAndPassword(auth, email, password)
    .then(({ user }) => user.getIdToken())
    .then((token) => sessionLogIn(token));
