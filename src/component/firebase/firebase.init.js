import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseAuthenticationInit = () => {
  initializeApp(firebaseConfig);
};

export default firebaseAuthenticationInit;
