/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/thedesigner",{

/***/ "./pages/thedesigner.js":
/*!******************************!*\
  !*** ./pages/thedesigner.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction thedesigns() {\n    _s();\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const importAll = (r)=>{\n            return r.keys().map(r);\n        };\n        const images = importAll(__webpack_require__(\"./public/projects sync \\\\.(png%7Cjpe?g%7Csvg)$\"));\n        setImages(images);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-3 gap-4 text-white bg-black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Here are the images\"\n            }, void 0, false, {\n                fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                lineNumber: 21,\n                columnNumber: 17\n            }, this),\n            images.map((image)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: image.default,\n                    alt: \"gallery\",\n                    className: \"rounded-lg shadow-md\"\n                }, image.default, false, {\n                    fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(thedesigns, \"ScKwoilS3xNJP1q5r1COmrAdDIM=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (thedesigns);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90aGVkZXNpZ25lci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQTBCO0FBQ087QUFDQztBQUNIO0FBRS9CLFNBQVNJLGFBQWE7O0lBQ3BCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXZDQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTUssWUFBWSxDQUFDQyxJQUFNO1lBQ3ZCLE9BQU9BLEVBQUVDLElBQUksR0FBR0MsR0FBRyxDQUFDRjtRQUN0QjtRQUNBLE1BQU1ILFNBQVNFLFVBQ2JJLHFFQUFrRTtRQUVwRUwsVUFBVUQ7SUFDWixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1E7UUFBSUMsV0FBVTs7MEJBQ0gsOERBQUNDOzBCQUFFOzs7Ozs7WUFDWlYsT0FBT0ssR0FBRyxDQUFDLENBQUNNLHNCQUNYLDhEQUFDYixtREFBS0E7b0JBRUpjLEtBQUtELE1BQU1FLE9BQU87b0JBQ2xCQyxLQUFJO29CQUNKTCxXQUFVO21CQUhMRSxNQUFNRSxPQUFPOzs7Ozs7Ozs7OztBQVE1QjtHQTFCU2Q7QUE0QlQsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGhlZGVzaWduZXIuanM/NzU2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuZnVuY3Rpb24gdGhlZGVzaWducygpIHtcbiAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGltcG9ydEFsbCA9IChyKSA9PiB7XG4gICAgICByZXR1cm4gci5rZXlzKCkubWFwKHIpO1xuICAgIH07XG4gICAgY29uc3QgaW1hZ2VzID0gaW1wb3J0QWxsKFxuICAgICAgcmVxdWlyZS5jb250ZXh0KFwiLi4vcHVibGljL3Byb2plY3RzXCIsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pXG4gICAgKTtcbiAgICBzZXRJbWFnZXMoaW1hZ2VzKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC00IHRleHQtd2hpdGUgYmctYmxhY2tcIj5cbiAgICAgICAgICAgICAgICA8cD5IZXJlIGFyZSB0aGUgaW1hZ2VzPC9wPlxuICAgICAge2ltYWdlcy5tYXAoKGltYWdlKSA9PiAoXG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIGtleT17aW1hZ2UuZGVmYXVsdH1cbiAgICAgICAgICBzcmM9e2ltYWdlLmRlZmF1bHR9XG4gICAgICAgICAgYWx0PVwiZ2FsbGVyeVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBzaGFkb3ctbWRcIlxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRoZWRlc2lnbnM7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsInRoZWRlc2lnbnMiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJpbXBvcnRBbGwiLCJyIiwia2V5cyIsIm1hcCIsInJlcXVpcmUiLCJjb250ZXh0IiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImltYWdlIiwic3JjIiwiZGVmYXVsdCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/thedesigner.js\n"));

/***/ }),

/***/ "./public/projects sync \\.(png%7Cjpe?g%7Csvg)$":
/*!*******************************************************************!*\
  !*** ./public/projects/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./public/projects sync \\.(png%7Cjpe?g%7Csvg)$";
module.exports = webpackEmptyContext;

/***/ })

});