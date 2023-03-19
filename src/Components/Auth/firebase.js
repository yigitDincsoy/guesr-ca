import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB8P1WO-4GgZ2VV8FbfalysseTu3JrxwdM",
    authDomain: "fir-auth-273ff.firebaseapp.com",
    projectId: "fir-auth-273ff",
    storageBucket: "fir-auth-273ff.appspot.com",
    messagingSenderId: "423345371424",
    appId: "1:423345371424:web:30cf945e2ef0e1295dbf45",
    measurementId: "G-6559Q93M93"
    };
    // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth,app}