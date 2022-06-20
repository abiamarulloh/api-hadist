"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./layouts/footer.js":
/*!***************************!*\
  !*** ./layouts/footer.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ footer)\n/* harmony export */ });\nfunction footer() {\n    return \"ini footer\";\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYXlvdXRzL2Zvb3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0EsTUFBTSxHQUFHO0lBQzdCLE9BQU8sWUFBWTtDQUN0QiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xheW91dHMvZm9vdGVyLmpzP2ZiMTciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9vdGVyKCkge1xuICAgIHJldHVybiBcImluaSBmb290ZXJcIlxufSJdLCJuYW1lcyI6WyJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./layouts/footer.js\n");

/***/ }),

/***/ "./layouts/header.js":
/*!***************************!*\
  !*** ./layouts/header.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ header)\n/* harmony export */ });\nfunction header() {\n    return \"ini header\";\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYXlvdXRzL2hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0EsTUFBTSxHQUFHO0lBQzdCLE9BQU8sWUFBWTtDQUN0QiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xheW91dHMvaGVhZGVyLmpzP2ZhZmUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyKCkge1xuICAgIHJldHVybiBcImluaSBoZWFkZXJcIlxufSJdLCJuYW1lcyI6WyJoZWFkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./layouts/header.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layouts_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/footer */ \"./layouts/footer.js\");\n/* harmony import */ var _layouts_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/header */ \"./layouts/header.js\");\n\n\n\n\nfunction HomePage() {\n    const { 0: data1 , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: isLoading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoading(true);\n        fetch(\"https://jsonplaceholder.typicode.com/todos\").then((res)=>res.json()\n        ).then((data)=>{\n            setData(data);\n            setLoading(false);\n        });\n    }, []);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/abiamarulloh/Projects/Experimental-Projects/api-hadist/frontend/pages/index.js\",\n        lineNumber: 19,\n        columnNumber: 25\n    }, this);\n    if (!data1) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No Hadist data\"\n    }, void 0, false, {\n        fileName: \"/Users/abiamarulloh/Projects/Experimental-Projects/api-hadist/frontend/pages/index.js\",\n        lineNumber: 20,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/abiamarulloh/Projects/Experimental-Projects/api-hadist/frontend/pages/index.js\",\n                lineNumber: 24,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Welcome to Next.js!\"\n            }, void 0, false, {\n                fileName: \"/Users/abiamarulloh/Projects/Experimental-Projects/api-hadist/frontend/pages/index.js\",\n                lineNumber: 26,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/abiamarulloh/Projects/Experimental-Projects/api-hadist/frontend/pages/index.js\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBNEM7QUFDTDtBQUNBO0FBRXZDLFNBQVNJLFFBQVEsR0FBRztJQUNsQixNQUFNLEVBTFIsR0FLU0MsS0FBSSxHQUxiLEdBS2VDLE9BQU8sTUFBSUwsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFDdEMsTUFBTSxFQU5SLEdBTVNNLFNBQVMsR0FObEIsR0FNb0JDLFVBQVUsTUFBSVAsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFFL0NELGdEQUFTLENBQUMsSUFBTTtRQUNkUSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakJDLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUNoREMsSUFBSSxDQUFDLENBQUNDLEdBQUcsR0FBS0EsR0FBRyxDQUFDQyxJQUFJLEVBQUU7UUFBQSxDQUFDLENBQ3pCRixJQUFJLENBQUMsQ0FBQ0wsSUFBSSxHQUFLO1lBQ2RDLE9BQU8sQ0FBQ0QsSUFBSSxDQUFDO1lBQ2JHLFVBQVUsQ0FBQyxLQUFLLENBQUM7U0FDbEIsQ0FBQztLQUNMLEVBQUUsRUFBRSxDQUFDO0lBRU4sSUFBSUQsU0FBUyxFQUFFLHFCQUFPLDhEQUFDTSxHQUFDO2tCQUFDLFlBQVU7Ozs7O1lBQUk7SUFDdkMsSUFBSSxDQUFDUixLQUFJLEVBQUUscUJBQU8sOERBQUNRLEdBQUM7a0JBQUMsZ0JBQWM7Ozs7O1lBQUk7SUFFdkMscUJBQ0U7OzBCQUNBLDhEQUFDVix1REFBTTs7OztvQkFBVTswQkFFakIsOERBQUNXLEtBQUc7MEJBQUMscUJBQW1COzs7OztvQkFBTTswQkFFOUIsOERBQUNaLHVEQUFNOzs7O29CQUFVOztvQkFDZCxDQUNOO0NBQ0E7QUFFRCxpRUFBZUUsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vbGF5b3V0cy9mb290ZXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9sYXlvdXRzL2hlYWRlcic7XG5cbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3RvZG9zJylcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXREYXRhKGRhdGEpXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICB9KVxuICB9LCBbXSlcblxuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD5cbiAgaWYgKCFkYXRhKSByZXR1cm4gPHA+Tm8gSGFkaXN0IGRhdGE8L3A+XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxIZWFkZXI+PC9IZWFkZXI+XG4gICAgXG4gICAgPGRpdj5XZWxjb21lIHRvIE5leHQuanMhPC9kaXY+XG5cbiAgICA8Rm9vdGVyPjwvRm9vdGVyPlxuICAgIDwvPlxuKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZvb3RlciIsIkhlYWRlciIsIkhvbWVQYWdlIiwiZGF0YSIsInNldERhdGEiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInAiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();