import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDIU5V_FGgC-JCDPBgc1S7V0gppz08plg",
  authDomain: "to-do-app-7957f.firebaseapp.com",
  databaseURL: "https://to-do-app-7957f.firebaseio.com",
  projectId: "to-do-app-7957f",
  storageBucket: "to-do-app-7957f.appspot.com",
  messagingSenderId: "401043973390",
  appId: "1:401043973390:web:cefbe80e09495f58d9235f",
  measurementId: "G-PXH8499VMX"
};
//this is unique for each user and project

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
