import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBGI7tiXkOmFr5k4VvIMjh--R3gHnVvB3M",
  authDomain: "disneyplus-clone-9337b.firebaseapp.com",
  projectId: "disneyplus-clone-9337b",
  storageBucket: "disneyplus-clone-9337b.appspot.com",
  messagingSenderId: "160675366156",
  appId: "1:160675366156:web:2d488dced683e226313529",
  measurementId: "G-NXYS7KB267",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
