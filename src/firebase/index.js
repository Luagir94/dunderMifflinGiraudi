import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig ={
    apiKey: "AIzaSyAgmQJ5VnrHkE4w7ADZo5Bb_b4RuQo7KgQ",
    authDomain: "dundermifflin-859d3.firebaseapp.com",
    projectId: "dundermifflin-859d3",
    storageBucket: "dundermifflin-859d3.appspot.com",
    messagingSenderId: "689828650571",
    appId: "1:689828650571:web:66aace43e786ffede0b7ce",
    measurementId: "G-4WDV6BYM21"
  };

const app = firebase.initializeApp(firebaseConfig)

export function getFirebase() {
    return app
  }

export function getFirestore() {
    return firebase.firestore(app)
    
}