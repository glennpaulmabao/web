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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction designs() {\n    _s();\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const importAll = (r)=>{\n            return r.keys().map(r);\n        };\n        const images = importAll(__webpack_require__(\"./public/Projects/Websites sync \\\\.(png%7Cjpe?g%7Csvg)$\"));\n        setImages(images);\n    }, []);\n    const [selectedImage, setSelectedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleClick = (image)=>{\n        setSelectedImage(image);\n    };\n    const handleClose = ()=>{\n        setSelectedImage(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-3 gap-4\",\n        children: [\n            images.map((image)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: image.default,\n                    alt: \"gallery\",\n                    className: \"rounded-lg shadow-md cursor-pointer\",\n                    onClick: ()=>handleClick(image)\n                }, image.default, false, {\n                    fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)),\n            selectedImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-0 left-0 flex items-center justify-center w-full h-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50\",\n                        onClick: handleClose\n                    }, void 0, false, {\n                        fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"z-10 bg-white rounded-lg shadow-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: selectedImage.default,\n                                alt: \"gallery\",\n                                className: \"rounded-lg shadow-md\"\n                            }, void 0, false, {\n                                fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"py-2 text-sm text-center text-gray-500\",\n                                children: selectedImage.default && selectedImage.default.split(\"/\").pop()\n                            }, void 0, false, {\n                                fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(designs, \"bQYKLthm1xsjH23NPuhv4AopY3w=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (designs);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90aGVkZXNpZ25lci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUEwQjtBQUNPO0FBQ0M7QUFFbEMsU0FBU0csVUFBVTs7SUFDakIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdKLCtDQUFRQSxDQUFDLEVBQUU7SUFFdkNDLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNSSxZQUFZLENBQUNDLElBQU07WUFDdkIsT0FBT0EsRUFBRUMsSUFBSSxHQUFHQyxHQUFHLENBQUNGO1FBQ3RCO1FBQ0EsTUFBTUgsU0FBU0UsVUFDYkksOEVBQTJFO1FBRTdFTCxVQUFVRDtJQUNaLEdBQUcsRUFBRTtJQUVMLE1BQU0sQ0FBQ1EsZUFBZUMsaUJBQWlCLEdBQUdaLCtDQUFRQSxDQUFDLElBQUk7SUFFdkQsTUFBTWEsY0FBYyxDQUFDQyxRQUFVO1FBQzdCRixpQkFBaUJFO0lBQ25CO0lBRUEsTUFBTUMsY0FBYyxJQUFNO1FBQ3hCSCxpQkFBaUIsSUFBSTtJQUN2QjtJQUVBLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVOztZQUNaZCxPQUFPSyxHQUFHLENBQUMsQ0FBQ00sc0JBQ1gsOERBQUNJO29CQUVDQyxLQUFLTCxNQUFNTSxPQUFPO29CQUNsQkMsS0FBSTtvQkFDSkosV0FBVTtvQkFDVkssU0FBUyxJQUFNVCxZQUFZQzttQkFKdEJBLE1BQU1NLE9BQU87Ozs7O1lBUXJCVCwrQkFDQyw4REFBQ0s7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFDQ0MsV0FBVTt3QkFDVkssU0FBU1A7Ozs7OztrQ0FFWCw4REFBQ0M7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FDQ0MsS0FBS1IsY0FBY1MsT0FBTztnQ0FDMUJDLEtBQUk7Z0NBQ0pKLFdBQVU7Ozs7OzswQ0FFWiw4REFBQ007Z0NBQUVOLFdBQVU7MENBQ1ZOLGNBQWNTLE9BQU8sSUFBSVQsY0FBY1MsT0FBTyxDQUFDSSxLQUFLLENBQUMsS0FBS0MsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzVFO0dBdkRTdkI7QUF5RFQsK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGhlZGVzaWduZXIuanM/NzU2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIGRlc2lnbnMoKSB7XG4gIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbXBvcnRBbGwgPSAocikgPT4ge1xuICAgICAgcmV0dXJuIHIua2V5cygpLm1hcChyKTtcbiAgICB9O1xuICAgIGNvbnN0IGltYWdlcyA9IGltcG9ydEFsbChcbiAgICAgIHJlcXVpcmUuY29udGV4dChcIi4uL3B1YmxpYy9Qcm9qZWN0cy9XZWJzaXRlc1wiLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKVxuICAgICk7XG4gICAgc2V0SW1hZ2VzKGltYWdlcyk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBbc2VsZWN0ZWRJbWFnZSwgc2V0U2VsZWN0ZWRJbWFnZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChpbWFnZSkgPT4ge1xuICAgIHNldFNlbGVjdGVkSW1hZ2UoaW1hZ2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHNldFNlbGVjdGVkSW1hZ2UobnVsbCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTRcIj5cbiAgICAgIHtpbWFnZXMubWFwKChpbWFnZSkgPT4gKFxuICAgICAgICA8aW1nXG4gICAgICAgICAga2V5PXtpbWFnZS5kZWZhdWx0fVxuICAgICAgICAgIHNyYz17aW1hZ2UuZGVmYXVsdH1cbiAgICAgICAgICBhbHQ9XCJnYWxsZXJ5XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHNoYWRvdy1tZCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soaW1hZ2UpfVxuICAgICAgICAvPlxuICAgICAgKSl9XG5cbiAgICAgIHtzZWxlY3RlZEltYWdlICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCBsZWZ0LTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtZnVsbFwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC1mdWxsIGJnLWdyYXktOTAwIG9wYWNpdHktNTBcIlxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei0xMCBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1sZ1wiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e3NlbGVjdGVkSW1hZ2UuZGVmYXVsdH1cbiAgICAgICAgICAgICAgYWx0PVwiZ2FsbGVyeVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgc2hhZG93LW1kXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJweS0yIHRleHQtc20gdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICB7c2VsZWN0ZWRJbWFnZS5kZWZhdWx0ICYmIHNlbGVjdGVkSW1hZ2UuZGVmYXVsdC5zcGxpdChcIi9cIikucG9wKCl9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVzaWduczsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImRlc2lnbnMiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJpbXBvcnRBbGwiLCJyIiwia2V5cyIsIm1hcCIsInJlcXVpcmUiLCJjb250ZXh0Iiwic2VsZWN0ZWRJbWFnZSIsInNldFNlbGVjdGVkSW1hZ2UiLCJoYW5kbGVDbGljayIsImltYWdlIiwiaGFuZGxlQ2xvc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJkZWZhdWx0IiwiYWx0Iiwib25DbGljayIsInAiLCJzcGxpdCIsInBvcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/thedesigner.js\n"));

/***/ })

});