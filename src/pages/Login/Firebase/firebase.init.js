import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initiliazeAuthentication = ()=>{
    initializeApp(firebaseConfig);
}

export default initiliazeAuthentication;