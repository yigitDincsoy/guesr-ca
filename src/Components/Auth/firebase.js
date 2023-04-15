import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAdIzk3DWTAuqbKHFx8Cwcvsjrdvm4ozMc",
    authDomain: "nsccclass-6d77b.firebaseapp.com",
    projectId: "nsccclass-6d77b",
    storageBucket: "nsccclass-6d77b.appspot.com",
    messagingSenderId: "708382716043",
    appId: "1:708382716043:web:4e62b30b4601257dcfe48e"
    };
    // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth,app}