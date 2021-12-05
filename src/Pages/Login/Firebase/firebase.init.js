import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";



const intializeFirebase = () => {
    return initializeApp(firebaseConfig)
}

export default intializeFirebase;