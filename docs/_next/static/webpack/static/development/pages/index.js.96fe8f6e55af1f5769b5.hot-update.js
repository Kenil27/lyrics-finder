webpackHotUpdate("static/development/pages/index.js",{

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
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "fetchList", () => {
      let {
        list
      } = this.state;
      let search = _utils_firebase__WEBPACK_IMPORTED_MODULE_2__["db"].collection("stavan");
      search.get().then(querySnapshot => {
        if (querySnapshot.docs.length > 0) {
          querySnapshot.forEach(doc => {
            const {
              name
            } = doc.data();
            list.push(name);
          });
        }
      });
      this.setState({
        list
      });
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "searchOption", value => {
      let {
        list
      } = this.state;
      let filter = list.filter(element => {
        if (element.indexOf(this.state.value.toLowerCase()) > -1) {
          return element;
        }
      });
      this.setState({
        filteredList: filter
      });
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

    this.state = {
      value: "",
      result: [{
        name: "",
        lyric: ""
      }],
      searchLoader: true,
      isResult: false,
      fetchData: false,
      list: []
    };
    this.fetchList();
  }

  render() {
    let {
      result,
      searchLoader,
      fetchData,
      isResult,
      list,
      value
    } = this.state;
    let filteredList = list.filter(element => {
      if (element.indexOf(value.toLowerCase()) > -1) {
        return element;
      }
    });
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, "Lyrics Finder"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, "Find Lyrics for any stavan"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
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
        lineNumber: 128
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroupAddon"], {
      addonType: "append",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      color: "primary",
      onClick: this.handleSearch,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, "Search"))), filteredList.map(name => {
      return name;
    }), searchLoader ? fetchData ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "./static/loader.gif",
      alt: "",
      width: "100px",
      height: "100px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    })) : !isResult ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      style: {
        paddingTop: '15px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Alert"], {
      color: "info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, "We currently do not have any lyrics for this stavan.")))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, result[0].name.toUpperCase()), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "result",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, result[0].lyric.toLowerCase())));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.96fe8f6e55af1f5769b5.hot-update.js.map