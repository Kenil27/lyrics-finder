import app from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDK8iBShvK_MyyHCyVLmoSsoBk6295IrrQ",
    authDomain: "react-firebase-7e1a7.firebaseapp.com",
    databaseURL: "https://react-firebase-7e1a7.firebaseio.com",
    projectId: "react-firebase-7e1a7",
    storageBucket: "",
    messagingSenderId: "179179280724",
    appId: "1:179179280724:web:10a41c07b79b0789"
  };

// let isInitialized = false
let db
let auth

const settings = { /* your settings... */ timestampsInSnapshots: true };

// function initialize() {
  if (!app.apps.length) {
    app.initializeApp(config);

    auth = app.auth();

    db = app.firestore();
    db.settings(settings);

    // isInitialized = true
  }
// }

// initialize()

export {
  app,
  auth,
  db,
}