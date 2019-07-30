webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Utils/firebase.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/firebase */ "./utils/firebase.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");

var _jsxFileName = "/home/kenil/kenil/lyrics/pages/index.js";






class Home extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      value: "",
      result: [{
        name: "",
        lyric: ""
      }],
      searchLoader: true,
      isResult: false,
      fetchData: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "componentDidMount", () => {
      _utils_firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].signInAnonymously().catch(function (error) {
        this.errorMessage = error.message;
      });
      this.listenToAuth();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "listenToAuth", () => {
      _utils_firebase__WEBPACK_IMPORTED_MODULE_2__["app"].auth().onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          this.userId = user.uid;
        } else {
          // User is signed out.
          this.userId = null;
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleInput", event => {
      this.setState({
        value: event.target.value
      });

      if (event.target.value === "") {
        this.setState({
          isResult: false
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onInputKeyPress", e => {
      // on pressing enter
      if (e.which === 13) {
        this.handleSearch();
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleSearch", () => {
      var self = this;
      self.setState({
        searchLoader: true,
        isResult: false,
        fetchData: true
      });
      let res = _utils_firebase__WEBPACK_IMPORTED_MODULE_2__["db"].collection("stavan").where("name", "==", "".concat(this.state.value.toLowerCase()));
      res.get().then(querySnapshot => {
        if (querySnapshot.docs.length > 0) {
          querySnapshot.forEach(doc => {
            const {
              name,
              lyrics
            } = doc.data();
            let lyric = lyrics.replace(new RegExp(/(\\n)+/g), "\n");
            self.setState({
              result: [{
                name,
                lyric
              }],
              searchLoader: true,
              fetchData: true
            }, () => {
              self.setState({
                searchLoader: false
              });
            });
          });
        } else {
          self.setState({
            isResult: true,
            fetchData: false
          });
        }
      });
    });
  }

  render() {
    let {
      result,
      searchLoader,
      fetchData,
      isResult
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, "Lyrics Finder"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, "Find Lyrics for any stavan"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
      placeholder: "Search by stavan name...",
      autoFocus: true,
      value: this.state.value,
      onChange: this.handleInput.bind(this),
      onKeyPress: this.onInputKeyPress,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroupAddon"], {
      addonType: "append",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      color: "primary",
      onClick: this.handleSearch,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, "Search"))), searchLoader ? fetchData ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/loader.gif",
      alt: "",
      width: "100px",
      height: "100px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    })) : !isResult ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Badge"], {
      color: "danger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, "We currently do not have \n any lyrics for this stavan."))))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, result[0].name.toUpperCase()), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "result",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, result[0].lyric.toLowerCase())));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./utils/firebase.js":
/*!***************************!*\
  !*** ./utils/firebase.js ***!
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
//# sourceMappingURL=index.js.2cb0fe7e36592c972682.hot-update.js.map