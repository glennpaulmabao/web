"use strict";
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction designs() {\n    _s();\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const importAll = (r)=>{\n            return r.keys().map(r);\n        };\n        const images = importAll(__webpack_require__(\"./public/Projects/Websites sync \\\\.(png%7Cjpe?g%7Csvg)$\"));\n        setImages(images);\n    }, []);\n    const [selectedImage, setSelectedImage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const handleClick = (image)=>{\n        setSelectedImage(image);\n    };\n    const handleClose = ()=>{\n        setSelectedImage(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-3 gap-4\",\n        children: [\n            images.map((image)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: image.default,\n                    alt: \"gallery\",\n                    className: \"rounded-lg shadow-md cursor-pointer\",\n                    onClick: ()=>handleClick(image)\n                }, image.default, false, {\n                    fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)),\n            selectedImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-0 left-0 flex items-center justify-center w-[40%] h-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute top-0 left-0 w-[40%] h-auto bg-gray-900 opacity-50\",\n                        onClick: handleClose\n                    }, void 0, false, {\n                        fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"z-10 bg-white rounded-lg shadow-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: selectedImage.default,\n                            alt: \"gallery\",\n                            className: \"rounded-lg shadow-md\"\n                        }, void 0, false, {\n                            fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(designs, \"bQYKLthm1xsjH23NPuhv4AopY3w=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (designs);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90aGVkZXNpZ25lci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQStCO0FBQ0w7QUFDTztBQUNDO0FBRWxDLFNBQVNJLFVBQVU7O0lBQ2pCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXZDQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTUksWUFBWSxDQUFDQyxJQUFNO1lBQ3ZCLE9BQU9BLEVBQUVDLElBQUksR0FBR0MsR0FBRyxDQUFDRjtRQUN0QjtRQUNBLE1BQU1ILFNBQVNFLFVBQ2JJLDhFQUEyRTtRQUU3RUwsVUFBVUQ7SUFDWixHQUFHLEVBQUU7SUFFTCxNQUFNLENBQUNRLGVBQWVDLGlCQUFpQixHQUFHWiwrQ0FBUUEsQ0FBQyxJQUFJO0lBRXZELE1BQU1hLGNBQWMsQ0FBQ0MsUUFBVTtRQUM3QkYsaUJBQWlCRTtJQUNuQjtJQUVBLE1BQU1DLGNBQWMsSUFBTTtRQUN4QkgsaUJBQWlCLElBQUk7SUFDdkI7SUFFQSxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBVTs7WUFDWmQsT0FBT0ssR0FBRyxDQUFDLENBQUNNLHNCQUNYLDhEQUFDaEIsbURBQUtBO29CQUVKb0IsS0FBS0osTUFBTUssT0FBTztvQkFDbEJDLEtBQUk7b0JBQ0pILFdBQVU7b0JBQ1ZJLFNBQVMsSUFBTVIsWUFBWUM7bUJBSnRCQSxNQUFNSyxPQUFPOzs7OztZQVFyQlIsK0JBQ0MsOERBQUNLO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQ0NDLFdBQVU7d0JBQ1ZJLFNBQVNOOzs7Ozs7a0NBRVgsOERBQUNDO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDbkIsbURBQUtBOzRCQUNKb0IsS0FBS1AsY0FBY1EsT0FBTzs0QkFDMUJDLEtBQUk7NEJBQ0pILFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3hCO0dBcERTZjtBQXNEVCwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90aGVkZXNpZ25lci5qcz83NTZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBkZXNpZ25zKCkge1xuICBjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW1wb3J0QWxsID0gKHIpID0+IHtcbiAgICAgIHJldHVybiByLmtleXMoKS5tYXAocik7XG4gICAgfTtcbiAgICBjb25zdCBpbWFnZXMgPSBpbXBvcnRBbGwoXG4gICAgICByZXF1aXJlLmNvbnRleHQoXCIuLi9wdWJsaWMvUHJvamVjdHMvV2Vic2l0ZXNcIiwgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLylcbiAgICApO1xuICAgIHNldEltYWdlcyhpbWFnZXMpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgW3NlbGVjdGVkSW1hZ2UsIHNldFNlbGVjdGVkSW1hZ2VdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoaW1hZ2UpID0+IHtcbiAgICBzZXRTZWxlY3RlZEltYWdlKGltYWdlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRTZWxlY3RlZEltYWdlKG51bGwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC00XCI+XG4gICAgICB7aW1hZ2VzLm1hcCgoaW1hZ2UpID0+IChcbiAgICAgICAgPEltYWdlXG4gICAgICAgICAga2V5PXtpbWFnZS5kZWZhdWx0fVxuICAgICAgICAgIHNyYz17aW1hZ2UuZGVmYXVsdH1cbiAgICAgICAgICBhbHQ9XCJnYWxsZXJ5XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHNoYWRvdy1tZCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soaW1hZ2UpfVxuICAgICAgICAvPlxuICAgICAgKSl9XG5cbiAgICAgIHtzZWxlY3RlZEltYWdlICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCBsZWZ0LTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1bNDAlXSBoLWF1dG9cIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdy1bNDAlXSBoLWF1dG8gYmctZ3JheS05MDAgb3BhY2l0eS01MFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTEwIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LWxnXCI+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXtzZWxlY3RlZEltYWdlLmRlZmF1bHR9XG4gICAgICAgICAgICAgIGFsdD1cImdhbGxlcnlcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHNoYWRvdy1tZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlc2lnbnM7Il0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImRlc2lnbnMiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJpbXBvcnRBbGwiLCJyIiwia2V5cyIsIm1hcCIsInJlcXVpcmUiLCJjb250ZXh0Iiwic2VsZWN0ZWRJbWFnZSIsInNldFNlbGVjdGVkSW1hZ2UiLCJoYW5kbGVDbGljayIsImltYWdlIiwiaGFuZGxlQ2xvc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJkZWZhdWx0IiwiYWx0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/thedesigner.js\n"));

/***/ })

});