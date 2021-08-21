import * as Firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCVFnUaxwiV_6mfDWaKa8zpPL4R1Rmdurc",
    authDomain: "todo-5d3ce.firebaseapp.com",
    databaseURL: "https://todo-5d3ce-default-rtdb.firebaseio.com",
    projectId: "todo-5d3ce",
    storageBucket: "todo-5d3ce.appspot.com",
    messagingSenderId: "989656743273",
    appId: "1:989656743273:web:7aab8a21defab10ded11f8"
  };
  
const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
export const auth = app.auth();