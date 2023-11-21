
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyCwjcygsjMeQ7G68CxmvKlgusZYl8R7U0c",
  authDomain: "tiktokclone-dea43.firebaseapp.com",
  projectId: "tiktokclone-dea43",
  storageBucket: "tiktokclone-dea43.appspot.com",
  messagingSenderId: "471694379614",
  appId: "1:471694379614:web:30a798e5fe4d8a85eec2cf",
  measurementId: "G-1HV9Q7TM0Z"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


const provider = new GoogleAuthProvider();

export const singInWithGoogle = () =>{
  signInWithPopup(auth , provider).then((result) => {
     const name = result.user.displayName;
     const email = result.user.email;
     const profilePic = result.user.photoURL;
     console.log(result)

     localStorage.setItem("name",name)
     localStorage.setItem("email", email)
     localStorage.setItem("profilePic", profilePic)
  }).catch((error) =>{
  });
}
export const db = getFirestore(app);
export const storage = getStorage(app);