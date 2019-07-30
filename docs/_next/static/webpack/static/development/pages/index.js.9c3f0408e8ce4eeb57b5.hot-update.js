webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Utils/firebase.js":
/*!***************************!*\
  !*** ./Utils/firebase.js ***!
  \***************************/
/*! exports provided: app, auth, db */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "app", function() { return firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");



const config = {
  apiKey: "AIzaSyDK8iBShvK_MyyHCyVLmoSsoBk6295IrrQ",
  authDomain: "react-firebase-7e1a7.firebaseapp.com",
  databaseURL: "https://react-firebase-7e1a7.firebaseio.com",
  projectId: "react-firebase-7e1a7",
  storageBucket: "",
  messagingSenderId: "179179280724",
  appId: "1:179179280724:web:10a41c07b79b0789"
}; // let isInitialized = false

let db;
let auth;
const settings = {
  /* your settings... */
}; // function initialize() {

if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
  auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();
  db = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore();
  db.settings(settings); // isInitialized = true
} // }
// initialize()




/***/ })

})
//# sourceMappingURL=index.js.9c3f0408e8ce4eeb57b5.hot-update.js.map