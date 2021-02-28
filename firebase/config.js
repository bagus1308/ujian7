
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB8LzKz2gnzAPq7hHC5Jbq8EJPy6IdTxx8",
    authDomain: "ujian7bagus.firebaseapp.com",
    databaseURL: "https://ujian7bagus-default-rtdb.firebaseio.com",
    projectId: "ujian7bagus",
    storageBucket: "ujian7bagus.appspot.com",
    messagingSenderId: "417160908641",
    appId: "1:417160908641:web:23d658d1730685356dff20",
    measurementId: "G-WC9BE3N0C0"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };