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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction designs() {\n    _s();\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const importAll = (r)=>{\n            return r.keys().map(r);\n        };\n        const images = importAll(__webpack_require__(\"./public/Projects/Websites sync \\\\.(png%7Cjpe?g%7Csvg)$\"));\n        setImages(images);\n    }, []);\n    const [selectedImageIndex, setSelectedImageIndex] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const handleClick = (index)=>{\n        setSelectedImageIndex(index);\n    };\n    const handleClose = ()=>{\n        setSelectedImageIndex(null);\n    };\n    const handleNext = ()=>{\n        setSelectedImageIndex((prevIndex)=>prevIndex === images.length - 1 ? 0 : prevIndex + 1);\n    };\n    const handlePrev = ()=>{\n        setSelectedImageIndex((prevIndex)=>prevIndex === 0 ? images.length - 1 : prevIndex - 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Glenn Paul Mabao | Design & Develop\"\n                    }, void 0, false, {\n                        fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                        lineNumber: 45,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"I completed my Information Technology with a Java Programming degree in 2011. After college, I spent six years honing my artistic skills as a graphic illustrator, branding expert, and web designer. I've been a front-end programmer with some backend expertise since 2018.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                        lineNumber: 46,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                        lineNumber: 47,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                lineNumber: 44,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"w-[100%!important]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-[#D4FF3F]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"md:w-[1300px] md:px-2 px-[5%] mx-auto min-h-screen\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-3 gap-4\",\n                            children: [\n                                images.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: image.default,\n                                        alt: \"gallery\",\n                                        className: \"rounded-lg shadow-md cursor-pointer\",\n                                        onClick: ()=>handleClick(index)\n                                    }, image.default, false, {\n                                        fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 9\n                                    }, this)),\n                                selectedImageIndex !== null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"fixed min-h-screen my-auto bg-black bg-opacity-80\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"absolute w-full h-auto bg-gray-900 opacity-40\",\n                                            onClick: handleClose\n                                        }, void 0, false, {\n                                            fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 11\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"z-10 justify-center mx-auto bg-white rounded-lg h-auto w-[70%] shadow-lg justify-items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    src: images[selectedImageIndex].default,\n                                                    alt: \"gallery\",\n                                                    className: \"w-auto h-full rounded-lg shadow-md\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 13\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"absolute px-2 py-1 text-white bg-gray-800 rounded-md top-2 right-2\",\n                                                    onClick: handleClose,\n                                                    children: \"Close\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                                                    lineNumber: 76,\n                                                    columnNumber: 13\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"absolute px-2 py-1 text-white transform -translate-y-1/2 bg-gray-800 rounded-md top-1/2 left-2\",\n                                                    onClick: handlePrev,\n                                                    children: \"Prev\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                                                    lineNumber: 82,\n                                                    columnNumber: 13\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"absolute px-2 py-1 text-white transform -translate-y-1/2 bg-gray-800 rounded-md top-1/2 right-2\",\n                                                    onClick: handleNext,\n                                                    children: \"Next\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                                                    lineNumber: 88,\n                                                    columnNumber: 13\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 11\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 9\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                            lineNumber: 53,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                        lineNumber: 52,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                    lineNumber: 51,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                lineNumber: 50,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(designs, \"EiVnGexpNW6yMERsDVwsZmmHNjo=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (designs);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90aGVkZXNpZ25lci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDRTtBQUNMO0FBQ087QUFDQztBQUVsQyxTQUFTSyxVQUFVOztJQUNqQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0osK0NBQVFBLENBQUMsRUFBRTtJQUV2Q0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1JLFlBQVksQ0FBQ0MsSUFBTTtZQUN2QixPQUFPQSxFQUFFQyxJQUFJLEdBQUdDLEdBQUcsQ0FBQ0Y7UUFDdEI7UUFDQSxNQUFNSCxTQUFTRSxVQUNiSSw4RUFBMkU7UUFFN0VMLFVBQVVEO0lBQ1osR0FBRyxFQUFFO0lBRUwsTUFBTSxDQUFDUSxvQkFBb0JDLHNCQUFzQixHQUFHWiwrQ0FBUUEsQ0FBQyxJQUFJO0lBRWpFLE1BQU1hLGNBQWMsQ0FBQ0MsUUFBVTtRQUM3QkYsc0JBQXNCRTtJQUN4QjtJQUVBLE1BQU1DLGNBQWMsSUFBTTtRQUN4Qkgsc0JBQXNCLElBQUk7SUFDNUI7SUFFQSxNQUFNSSxhQUFhLElBQU07UUFDdkJKLHNCQUFzQixDQUFDSyxZQUNyQkEsY0FBY2QsT0FBT2UsTUFBTSxHQUFHLElBQUksSUFBSUQsWUFBWSxDQUFDO0lBRXZEO0lBRUEsTUFBTUUsYUFBYSxJQUFNO1FBQ3ZCUCxzQkFBc0IsQ0FBQ0ssWUFDckJBLGNBQWMsSUFBSWQsT0FBT2UsTUFBTSxHQUFHLElBQUlELFlBQVksQ0FBQztJQUV2RDtJQUVBLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVOzswQkFDZiw4REFBQ3hCLGtEQUFJQTs7a0NBQ0gsOERBQUN5QjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFHeEIsOERBQUNDO2dCQUFLUixXQUFVOzBCQUNkLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDZiw0RUFBQ1M7d0JBQVFULFdBQVU7a0NBQ25CLDRFQUFDRDs0QkFBSUMsV0FBVTs7Z0NBQ2RsQixPQUFPSyxHQUFHLENBQUMsQ0FBQ3VCLE9BQU9qQixzQkFDbEIsOERBQUNoQixtREFBS0E7d0NBRUprQyxLQUFLRCxNQUFNRSxPQUFPO3dDQUNsQkMsS0FBSTt3Q0FDSmIsV0FBVTt3Q0FDVmMsU0FBUyxJQUFNdEIsWUFBWUM7dUNBSnRCaUIsTUFBTUUsT0FBTzs7Ozs7Z0NBUXJCdEIsdUJBQXVCLElBQUksa0JBQzFCLDhEQUFDUztvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNEOzRDQUNDQyxXQUFVOzRDQUNWYyxTQUFTcEI7Ozs7OztzREFFWCw4REFBQ0s7NENBQUlDLFdBQVU7OzhEQUNiLDhEQUFDdkIsbURBQUtBO29EQUNKa0MsS0FBSzdCLE1BQU0sQ0FBQ1EsbUJBQW1CLENBQUNzQixPQUFPO29EQUN2Q0MsS0FBSTtvREFDSmIsV0FBVTs7Ozs7OzhEQUVaLDhEQUFDZTtvREFDQ2YsV0FBVTtvREFDVmMsU0FBU3BCOzhEQUNWOzs7Ozs7OERBR0QsOERBQUNxQjtvREFDQ2YsV0FBVTtvREFDVmMsU0FBU2hCOzhEQUNWOzs7Ozs7OERBR0QsOERBQUNpQjtvREFDQ2YsV0FBVTtvREFDVmMsU0FBU25COzhEQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZYjtHQWhHU2Q7QUFrR1QsK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGhlZGVzaWduZXIuanM/NzU2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gZGVzaWducygpIHtcbiAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGltcG9ydEFsbCA9IChyKSA9PiB7XG4gICAgICByZXR1cm4gci5rZXlzKCkubWFwKHIpO1xuICAgIH07XG4gICAgY29uc3QgaW1hZ2VzID0gaW1wb3J0QWxsKFxuICAgICAgcmVxdWlyZS5jb250ZXh0KFwiLi4vcHVibGljL1Byb2plY3RzL1dlYnNpdGVzXCIsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pXG4gICAgKTtcbiAgICBzZXRJbWFnZXMoaW1hZ2VzKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IFtzZWxlY3RlZEltYWdlSW5kZXgsIHNldFNlbGVjdGVkSW1hZ2VJbmRleF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChpbmRleCkgPT4ge1xuICAgIHNldFNlbGVjdGVkSW1hZ2VJbmRleChpbmRleCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRJbWFnZUluZGV4KG51bGwpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRJbWFnZUluZGV4KChwcmV2SW5kZXgpID0+XG4gICAgICBwcmV2SW5kZXggPT09IGltYWdlcy5sZW5ndGggLSAxID8gMCA6IHByZXZJbmRleCArIDFcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVByZXYgPSAoKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRJbWFnZUluZGV4KChwcmV2SW5kZXgpID0+XG4gICAgICBwcmV2SW5kZXggPT09IDAgPyBpbWFnZXMubGVuZ3RoIC0gMSA6IHByZXZJbmRleCAtIDFcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5HbGVubiBQYXVsIE1hYmFvIHwgRGVzaWduICYgRGV2ZWxvcDwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiSSBjb21wbGV0ZWQgbXkgSW5mb3JtYXRpb24gVGVjaG5vbG9neSB3aXRoIGEgSmF2YSBQcm9ncmFtbWluZyBkZWdyZWUgaW4gMjAxMS4gQWZ0ZXIgY29sbGVnZSwgSSBzcGVudCBzaXggeWVhcnMgaG9uaW5nIG15IGFydGlzdGljIHNraWxscyBhcyBhIGdyYXBoaWMgaWxsdXN0cmF0b3IsIGJyYW5kaW5nIGV4cGVydCwgYW5kIHdlYiBkZXNpZ25lci4gSSd2ZSBiZWVuIGEgZnJvbnQtZW5kIHByb2dyYW1tZXIgd2l0aCBzb21lIGJhY2tlbmQgZXhwZXJ0aXNlIHNpbmNlIDIwMTguXCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICA8L0hlYWQ+XG5cbiAgICA8bWFpbiBjbGFzc05hbWU9J3ctWzEwMCUhaW1wb3J0YW50XSc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjRDRGRjNGXVwiPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWQ6dy1bMTMwMHB4XSBtZDpweC0yIHB4LVs1JV0gbXgtYXV0byBtaW4taC1zY3JlZW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtNFwiPlxuICAgICAge2ltYWdlcy5tYXAoKGltYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBrZXk9e2ltYWdlLmRlZmF1bHR9XG4gICAgICAgICAgc3JjPXtpbWFnZS5kZWZhdWx0fVxuICAgICAgICAgIGFsdD1cImdhbGxlcnlcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgc2hhZG93LW1kIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhpbmRleCl9XG4gICAgICAgIC8+XG4gICAgICApKX1cblxuICAgICAge3NlbGVjdGVkSW1hZ2VJbmRleCAhPT0gbnVsbCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgbWluLWgtc2NyZWVuIG15LWF1dG8gYmctYmxhY2sgYmctb3BhY2l0eS04MFwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHctZnVsbCBoLWF1dG8gYmctZ3JheS05MDAgb3BhY2l0eS00MFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTEwIGp1c3RpZnktY2VudGVyIG14LWF1dG8gYmctd2hpdGUgcm91bmRlZC1sZyBoLWF1dG8gdy1bNzAlXSBzaGFkb3ctbGcganVzdGlmeS1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e2ltYWdlc1tzZWxlY3RlZEltYWdlSW5kZXhdLmRlZmF1bHR9XG4gICAgICAgICAgICAgIGFsdD1cImdhbGxlcnlcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWF1dG8gaC1mdWxsIHJvdW5kZWQtbGcgc2hhZG93LW1kXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHB4LTIgcHktMSB0ZXh0LXdoaXRlIGJnLWdyYXktODAwIHJvdW5kZWQtbWQgdG9wLTIgcmlnaHQtMlwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHB4LTIgcHktMSB0ZXh0LXdoaXRlIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMS8yIGJnLWdyYXktODAwIHJvdW5kZWQtbWQgdG9wLTEvMiBsZWZ0LTJcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmV2fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQcmV2XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcHgtMiBweS0xIHRleHQtd2hpdGUgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzIgYmctZ3JheS04MDAgcm91bmRlZC1tZCB0b3AtMS8yIHJpZ2h0LTJcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBOZXh0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVzaWduczsiXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImRlc2lnbnMiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJpbXBvcnRBbGwiLCJyIiwia2V5cyIsIm1hcCIsInJlcXVpcmUiLCJjb250ZXh0Iiwic2VsZWN0ZWRJbWFnZUluZGV4Iiwic2V0U2VsZWN0ZWRJbWFnZUluZGV4IiwiaGFuZGxlQ2xpY2siLCJpbmRleCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlTmV4dCIsInByZXZJbmRleCIsImxlbmd0aCIsImhhbmRsZVByZXYiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsInNlY3Rpb24iLCJpbWFnZSIsInNyYyIsImRlZmF1bHQiLCJhbHQiLCJvbkNsaWNrIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/thedesigner.js\n"));

/***/ })

});