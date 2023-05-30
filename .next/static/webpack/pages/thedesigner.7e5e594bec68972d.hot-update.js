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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction designs() {\n    _s();\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const importAll = (r)=>{\n            return r.keys().map(r);\n        };\n        const images = importAll(__webpack_require__(\"./public/Projects/Websites sync \\\\.(png%7Cjpe?g%7Csvg)$\"));\n        setImages(images);\n    }, []);\n    const [selectedImageIndex, setSelectedImageIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const handleClick = (index)=>{\n        setSelectedImageIndex(index);\n    };\n    const handleClose = ()=>{\n        setSelectedImageIndex(null);\n    };\n    const handleNext = ()=>{\n        setSelectedImageIndex((prevIndex)=>prevIndex === images.length - 1 ? 0 : prevIndex + 1);\n    };\n    const handlePrev = ()=>{\n        setSelectedImageIndex((prevIndex)=>prevIndex === 0 ? images.length - 1 : prevIndex - 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-3 gap-4\",\n        children: [\n            images.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: image.default,\n                    alt: \"gallery\",\n                    className: \"rounded-lg shadow-md cursor-pointer\",\n                    onClick: ()=>handleClick(index)\n                }, image.default, false, {\n                    fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)),\n            selectedImageIndex !== null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-5 left-5 flex items-center justify-center w-[90%] h-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute top-5 left-5 w-[90%] h-auto bg-gray-900 opacity-40\",\n                        onClick: handleClose\n                    }, void 0, false, {\n                        fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"z-10 bg-white rounded-lg shadow-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: images[selectedImageIndex].default,\n                                alt: \"gallery\",\n                                className: \"h-auto rounded-lg shadow-md w-60vw\"\n                            }, void 0, false, {\n                                fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"absolute px-2 py-1 text-white bg-gray-800 rounded-md top-2 right-2\",\n                                onClick: handleClose,\n                                children: \"Close\"\n                            }, void 0, false, {\n                                fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"absolute px-2 py-1 text-white transform -translate-y-1/2 bg-gray-800 rounded-md top-1/2 left-2\",\n                                onClick: handlePrev,\n                                children: \"Prev\"\n                            }, void 0, false, {\n                                fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"absolute px-2 py-1 text-white transform -translate-y-1/2 bg-gray-800 rounded-md top-1/2 right-2\",\n                                onClick: handleNext,\n                                children: \"Next\"\n                            }, void 0, false, {\n                                fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(designs, \"EiVnGexpNW6yMERsDVwsZmmHNjo=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (designs);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90aGVkZXNpZ25lci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQStCO0FBQ0w7QUFDTztBQUNDO0FBRWxDLFNBQVNJLFVBQVU7O0lBQ2pCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXZDQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTUksWUFBWSxDQUFDQyxJQUFNO1lBQ3ZCLE9BQU9BLEVBQUVDLElBQUksR0FBR0MsR0FBRyxDQUFDRjtRQUN0QjtRQUNBLE1BQU1ILFNBQVNFLFVBQ2JJLDhFQUEyRTtRQUU3RUwsVUFBVUQ7SUFDWixHQUFHLEVBQUU7SUFFTCxNQUFNLENBQUNRLG9CQUFvQkMsc0JBQXNCLEdBQUdaLCtDQUFRQSxDQUFDLElBQUk7SUFFakUsTUFBTWEsY0FBYyxDQUFDQyxRQUFVO1FBQzdCRixzQkFBc0JFO0lBQ3hCO0lBRUEsTUFBTUMsY0FBYyxJQUFNO1FBQ3hCSCxzQkFBc0IsSUFBSTtJQUM1QjtJQUVBLE1BQU1JLGFBQWEsSUFBTTtRQUN2Qkosc0JBQXNCLENBQUNLLFlBQ3JCQSxjQUFjZCxPQUFPZSxNQUFNLEdBQUcsSUFBSSxJQUFJRCxZQUFZLENBQUM7SUFFdkQ7SUFFQSxNQUFNRSxhQUFhLElBQU07UUFDdkJQLHNCQUFzQixDQUFDSyxZQUNyQkEsY0FBYyxJQUFJZCxPQUFPZSxNQUFNLEdBQUcsSUFBSUQsWUFBWSxDQUFDO0lBRXZEO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7O1lBQ1psQixPQUFPSyxHQUFHLENBQUMsQ0FBQ2MsT0FBT1Isc0JBQ2xCLDhEQUFDaEIsbURBQUtBO29CQUVKeUIsS0FBS0QsTUFBTUUsT0FBTztvQkFDbEJDLEtBQUk7b0JBQ0pKLFdBQVU7b0JBQ1ZLLFNBQVMsSUFBTWIsWUFBWUM7bUJBSnRCUSxNQUFNRSxPQUFPOzs7OztZQVFyQmIsdUJBQXVCLElBQUksa0JBQzFCLDhEQUFDUztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUNDQyxXQUFVO3dCQUNWSyxTQUFTWDs7Ozs7O2tDQUVYLDhEQUFDSzt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUN2QixtREFBS0E7Z0NBQ0p5QixLQUFLcEIsTUFBTSxDQUFDUSxtQkFBbUIsQ0FBQ2EsT0FBTztnQ0FDdkNDLEtBQUk7Z0NBQ0pKLFdBQVU7Ozs7OzswQ0FFWiw4REFBQ007Z0NBQ0NOLFdBQVU7Z0NBQ1ZLLFNBQVNYOzBDQUNWOzs7Ozs7MENBR0QsOERBQUNZO2dDQUNDTixXQUFVO2dDQUNWSyxTQUFTUDswQ0FDVjs7Ozs7OzBDQUdELDhEQUFDUTtnQ0FDQ04sV0FBVTtnQ0FDVkssU0FBU1Y7MENBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFiO0dBbEZTZDtBQW9GVCwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90aGVkZXNpZ25lci5qcz83NTZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBkZXNpZ25zKCkge1xuICBjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW1wb3J0QWxsID0gKHIpID0+IHtcbiAgICAgIHJldHVybiByLmtleXMoKS5tYXAocik7XG4gICAgfTtcbiAgICBjb25zdCBpbWFnZXMgPSBpbXBvcnRBbGwoXG4gICAgICByZXF1aXJlLmNvbnRleHQoXCIuLi9wdWJsaWMvUHJvamVjdHMvV2Vic2l0ZXNcIiwgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLylcbiAgICApO1xuICAgIHNldEltYWdlcyhpbWFnZXMpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgW3NlbGVjdGVkSW1hZ2VJbmRleCwgc2V0U2VsZWN0ZWRJbWFnZUluZGV4XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGluZGV4KSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRJbWFnZUluZGV4KGluZGV4KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRTZWxlY3RlZEltYWdlSW5kZXgobnVsbCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICBzZXRTZWxlY3RlZEltYWdlSW5kZXgoKHByZXZJbmRleCkgPT5cbiAgICAgIHByZXZJbmRleCA9PT0gaW1hZ2VzLmxlbmd0aCAtIDEgPyAwIDogcHJldkluZGV4ICsgMVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUHJldiA9ICgpID0+IHtcbiAgICBzZXRTZWxlY3RlZEltYWdlSW5kZXgoKHByZXZJbmRleCkgPT5cbiAgICAgIHByZXZJbmRleCA9PT0gMCA/IGltYWdlcy5sZW5ndGggLSAxIDogcHJldkluZGV4IC0gMVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTRcIj5cbiAgICAgIHtpbWFnZXMubWFwKChpbWFnZSwgaW5kZXgpID0+IChcbiAgICAgICAgPEltYWdlXG4gICAgICAgICAga2V5PXtpbWFnZS5kZWZhdWx0fVxuICAgICAgICAgIHNyYz17aW1hZ2UuZGVmYXVsdH1cbiAgICAgICAgICBhbHQ9XCJnYWxsZXJ5XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHNoYWRvdy1tZCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soaW5kZXgpfVxuICAgICAgICAvPlxuICAgICAgKSl9XG5cbiAgICAgIHtzZWxlY3RlZEltYWdlSW5kZXggIT09IG51bGwgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHRvcC01IGxlZnQtNSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LVs5MCVdIGgtYXV0b1wiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC01IGxlZnQtNSB3LVs5MCVdIGgtYXV0byBiZy1ncmF5LTkwMCBvcGFjaXR5LTQwXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxuICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInotMTAgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbGdcIj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e2ltYWdlc1tzZWxlY3RlZEltYWdlSW5kZXhdLmRlZmF1bHR9XG4gICAgICAgICAgICAgIGFsdD1cImdhbGxlcnlcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLWF1dG8gcm91bmRlZC1sZyBzaGFkb3ctbWQgdy02MHZ3XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHB4LTIgcHktMSB0ZXh0LXdoaXRlIGJnLWdyYXktODAwIHJvdW5kZWQtbWQgdG9wLTIgcmlnaHQtMlwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHB4LTIgcHktMSB0ZXh0LXdoaXRlIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMS8yIGJnLWdyYXktODAwIHJvdW5kZWQtbWQgdG9wLTEvMiBsZWZ0LTJcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmV2fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQcmV2XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcHgtMiBweS0xIHRleHQtd2hpdGUgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzIgYmctZ3JheS04MDAgcm91bmRlZC1tZCB0b3AtMS8yIHJpZ2h0LTJcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBOZXh0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZXNpZ25zOyJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJkZXNpZ25zIiwiaW1hZ2VzIiwic2V0SW1hZ2VzIiwiaW1wb3J0QWxsIiwiciIsImtleXMiLCJtYXAiLCJyZXF1aXJlIiwiY29udGV4dCIsInNlbGVjdGVkSW1hZ2VJbmRleCIsInNldFNlbGVjdGVkSW1hZ2VJbmRleCIsImhhbmRsZUNsaWNrIiwiaW5kZXgiLCJoYW5kbGVDbG9zZSIsImhhbmRsZU5leHQiLCJwcmV2SW5kZXgiLCJsZW5ndGgiLCJoYW5kbGVQcmV2IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1hZ2UiLCJzcmMiLCJkZWZhdWx0IiwiYWx0Iiwib25DbGljayIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/thedesigner.js\n"));

/***/ })

});