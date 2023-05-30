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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_icons_chimes_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/icons-chimes.svg */ \"./public/icons-chimes.svg\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction designs() {\n    _s();\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const importAll = (r)=>{\n            return r.keys().map(r);\n        };\n        const images = importAll(__webpack_require__(\"./public/Projects/Websites sync \\\\.(png%7Cjpe?g%7Csvg)$\"));\n        setImages(images);\n    }, []);\n    const [selectedImageIndex, setSelectedImageIndex] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const handleClick = (index)=>{\n        setSelectedImageIndex(index);\n    };\n    const handleClose = ()=>{\n        setSelectedImageIndex(null);\n    };\n    const handleNext = ()=>{\n        setSelectedImageIndex((prevIndex)=>prevIndex === images.length - 1 ? 0 : prevIndex + 1);\n    };\n    const handlePrev = ()=>{\n        setSelectedImageIndex((prevIndex)=>prevIndex === 0 ? images.length - 1 : prevIndex - 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Glenn Paul Mabao | The Designer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                        lineNumber: 46,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"I completed my Information Technology with a Java Programming degree in 2011. After college, I spent six years honing my artistic skills as a graphic illustrator, branding expert, and web designer. I've been a front-end programmer with some backend expertise since 2018.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                        lineNumber: 47,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                        lineNumber: 48,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                lineNumber: 45,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"w-[100%!important]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-[#0B0B0B]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: \" md:h-[171.2px] md:w-[1000px] md:px-0 mx-auto px-[5%] py-10 flex items-center justify-start\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"md:text-[50px] text-[35px] font-extrabold text-[#D4FF3F]\",\n                                    children: \"PORTFOLIO\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: _public_icons_chimes_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                    className: \"md:h-[92px] h-[48px] w-auto ml-10\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                            lineNumber: 53,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                        lineNumber: 52,\n                        columnNumber: 19\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-[#D4FF3F]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: \"md:w-[1300px] md:px-2 px-[5%] mx-auto min-h-screen\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                                    className: \"flex md:py-10 py-5 mx-auto md:mb-[28px] mb-10 justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"font-extrabold\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                target: \"_blank\",\n                                                href: \"https://glennpaulmabao.github.io/web/\",\n                                                children: \"Glenn Paul Mabao\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 44\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: \"resume\",\n                                                    target: \"_blank\",\n                                                    children: \"Resume\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                                                lineNumber: 63,\n                                                columnNumber: 15\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"grid grid-cols-3 gap-4\",\n                                    children: [\n                                        images.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                src: image.default,\n                                                alt: \"gallery\",\n                                                className: \"rounded-lg shadow-md cursor-pointer\",\n                                                onClick: ()=>handleClick(index)\n                                            }, image.default, false, {\n                                                fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                                                lineNumber: 68,\n                                                columnNumber: 9\n                                            }, this)),\n                                        selectedImageIndex !== null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-full\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"fixed top-0 left-0 flex justify-center w-full min-h-screen py-10 mx-auto my-auto bg-black bg-opacity-80\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"absolute top-0 left-0 w-full h-auto bg-gray-900 opacity-40\",\n                                                        onClick: handleClose\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                                                        lineNumber: 80,\n                                                        columnNumber: 11\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"z-10 justify-center mx-auto bg-white rounded-lg h-auto w-[70%] shadow-lg justify-items-center\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                                src: images[selectedImageIndex].default,\n                                                                alt: \"gallery\",\n                                                                className: \"w-auto h-full rounded-lg shadow-md\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                                                                lineNumber: 85,\n                                                                columnNumber: 13\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                                className: \"absolute px-2 py-1 text-white bg-gray-800 rounded-md top-2 right-2\",\n                                                                onClick: handleClose,\n                                                                children: \"Close\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                                                                lineNumber: 90,\n                                                                columnNumber: 13\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                                className: \"absolute px-2 py-1 text-white transform -translate-y-1/2 bg-gray-800 rounded-md top-1/2 left-2\",\n                                                                onClick: handlePrev,\n                                                                children: \"Prev\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                                                                lineNumber: 96,\n                                                                columnNumber: 13\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                                className: \"absolute px-2 py-1 text-white transform -translate-y-1/2 bg-gray-800 rounded-md top-1/2 right-2\",\n                                                                onClick: handleNext,\n                                                                children: \"Next\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                                                                lineNumber: 102,\n                                                                columnNumber: 13\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                                                        lineNumber: 84,\n                                                        columnNumber: 11\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                                                lineNumber: 79,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                                            lineNumber: 78,\n                                            columnNumber: 9\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                            lineNumber: 59,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                        lineNumber: 58,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n                lineNumber: 51,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/glennfalse/Documents/GitHub/web/pages/thedesigner.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(designs, \"EiVnGexpNW6yMERsDVwsZmmHNjo=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (designs);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBU3RCOzBFQUNWOzs7Ozs7MEVBR0QsOERBQUN1QjtnRUFDQ3JCLFdBQVU7Z0VBQ1ZvQixTQUFTekI7MEVBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhYjtHQTlHU2Q7QUFnSFQsK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGhlZGVzaWduZXIuanM/NzU2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjaGltZXMgZnJvbSBcIi4uL3B1YmxpYy9pY29ucy1jaGltZXMuc3ZnXCI7XG5cbmZ1bmN0aW9uIGRlc2lnbnMoKSB7XG4gIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbXBvcnRBbGwgPSAocikgPT4ge1xuICAgICAgcmV0dXJuIHIua2V5cygpLm1hcChyKTtcbiAgICB9O1xuICAgIGNvbnN0IGltYWdlcyA9IGltcG9ydEFsbChcbiAgICAgIHJlcXVpcmUuY29udGV4dChcIi4uL3B1YmxpYy9Qcm9qZWN0cy9XZWJzaXRlc1wiLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKVxuICAgICk7XG4gICAgc2V0SW1hZ2VzKGltYWdlcyk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBbc2VsZWN0ZWRJbWFnZUluZGV4LCBzZXRTZWxlY3RlZEltYWdlSW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoaW5kZXgpID0+IHtcbiAgICBzZXRTZWxlY3RlZEltYWdlSW5kZXgoaW5kZXgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHNldFNlbGVjdGVkSW1hZ2VJbmRleChudWxsKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgIHNldFNlbGVjdGVkSW1hZ2VJbmRleCgocHJldkluZGV4KSA9PlxuICAgICAgcHJldkluZGV4ID09PSBpbWFnZXMubGVuZ3RoIC0gMSA/IDAgOiBwcmV2SW5kZXggKyAxXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQcmV2ID0gKCkgPT4ge1xuICAgIHNldFNlbGVjdGVkSW1hZ2VJbmRleCgocHJldkluZGV4KSA9PlxuICAgICAgcHJldkluZGV4ID09PSAwID8gaW1hZ2VzLmxlbmd0aCAtIDEgOiBwcmV2SW5kZXggLSAxXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+R2xlbm4gUGF1bCBNYWJhbyB8IFRoZSBEZXNpZ25lcjwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiSSBjb21wbGV0ZWQgbXkgSW5mb3JtYXRpb24gVGVjaG5vbG9neSB3aXRoIGEgSmF2YSBQcm9ncmFtbWluZyBkZWdyZWUgaW4gMjAxMS4gQWZ0ZXIgY29sbGVnZSwgSSBzcGVudCBzaXggeWVhcnMgaG9uaW5nIG15IGFydGlzdGljIHNraWxscyBhcyBhIGdyYXBoaWMgaWxsdXN0cmF0b3IsIGJyYW5kaW5nIGV4cGVydCwgYW5kIHdlYiBkZXNpZ25lci4gSSd2ZSBiZWVuIGEgZnJvbnQtZW5kIHByb2dyYW1tZXIgd2l0aCBzb21lIGJhY2tlbmQgZXhwZXJ0aXNlIHNpbmNlIDIwMTguXCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICA8L0hlYWQ+XG5cbiAgICA8bWFpbiBjbGFzc05hbWU9J3ctWzEwMCUhaW1wb3J0YW50XSc+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjMEIwQjBCXVwiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCIgbWQ6aC1bMTcxLjJweF0gbWQ6dy1bMTAwMHB4XSBtZDpweC0wIG14LWF1dG8gcHgtWzUlXSBweS0xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0XCIgPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtZDp0ZXh0LVs1MHB4XSB0ZXh0LVszNXB4XSBmb250LWV4dHJhYm9sZCB0ZXh0LVsjRDRGRjNGXVwiPlBPUlRGT0xJTzwvaDE+XG4gICAgICAgICAgPEltYWdlIHNyYz17Y2hpbWVzfSBjbGFzc05hbWU9XCJtZDpoLVs5MnB4XSBoLVs0OHB4XSB3LWF1dG8gbWwtMTBcIi8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjRDRGRjNGXVwiPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWQ6dy1bMTMwMHB4XSBtZDpweC0yIHB4LVs1JV0gbXgtYXV0byBtaW4taC1zY3JlZW5cIj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBtZDpweS0xMCBweS01IG14LWF1dG8gbWQ6bWItWzI4cHhdIG1iLTEwIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtZXh0cmFib2xkXCI+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2xlbm5wYXVsbWFiYW8uZ2l0aHViLmlvL3dlYi9cIj5HbGVubiBQYXVsIE1hYmFvPC9hPjwvaDE+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwicmVzdW1lXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UmVzdW1lPC9hPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC00XCI+XG4gICAgICB7aW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIGtleT17aW1hZ2UuZGVmYXVsdH1cbiAgICAgICAgICBzcmM9e2ltYWdlLmRlZmF1bHR9XG4gICAgICAgICAgYWx0PVwiZ2FsbGVyeVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBzaGFkb3ctbWQgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGluZGV4KX1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuXG4gICAgICB7c2VsZWN0ZWRJbWFnZUluZGV4ICE9PSBudWxsICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCBsZWZ0LTAgZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgbWluLWgtc2NyZWVuIHB5LTEwIG14LWF1dG8gbXktYXV0byBiZy1ibGFjayBiZy1vcGFjaXR5LTgwXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLWF1dG8gYmctZ3JheS05MDAgb3BhY2l0eS00MFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTEwIGp1c3RpZnktY2VudGVyIG14LWF1dG8gYmctd2hpdGUgcm91bmRlZC1sZyBoLWF1dG8gdy1bNzAlXSBzaGFkb3ctbGcganVzdGlmeS1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e2ltYWdlc1tzZWxlY3RlZEltYWdlSW5kZXhdLmRlZmF1bHR9XG4gICAgICAgICAgICAgIGFsdD1cImdhbGxlcnlcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWF1dG8gaC1mdWxsIHJvdW5kZWQtbGcgc2hhZG93LW1kXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHB4LTIgcHktMSB0ZXh0LXdoaXRlIGJnLWdyYXktODAwIHJvdW5kZWQtbWQgdG9wLTIgcmlnaHQtMlwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHB4LTIgcHktMSB0ZXh0LXdoaXRlIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMS8yIGJnLWdyYXktODAwIHJvdW5kZWQtbWQgdG9wLTEvMiBsZWZ0LTJcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmV2fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQcmV2XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcHgtMiBweS0xIHRleHQtd2hpdGUgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzIgYmctZ3JheS04MDAgcm91bmRlZC1tZCB0b3AtMS8yIHJpZ2h0LTJcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBOZXh0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlc2lnbnM7Il0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjaGltZXMiLCJkZXNpZ25zIiwiaW1hZ2VzIiwic2V0SW1hZ2VzIiwiaW1wb3J0QWxsIiwiciIsImtleXMiLCJtYXAiLCJyZXF1aXJlIiwiY29udGV4dCIsInNlbGVjdGVkSW1hZ2VJbmRleCIsInNldFNlbGVjdGVkSW1hZ2VJbmRleCIsImhhbmRsZUNsaWNrIiwiaW5kZXgiLCJoYW5kbGVDbG9zZSIsImhhbmRsZU5leHQiLCJwcmV2SW5kZXgiLCJsZW5ndGgiLCJoYW5kbGVQcmV2IiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJzZWN0aW9uIiwiaDEiLCJzcmMiLCJuYXYiLCJhIiwidGFyZ2V0IiwidWwiLCJsaSIsImltYWdlIiwiZGVmYXVsdCIsImFsdCIsIm9uQ2xpY2siLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/thedesigner.js\n"));

/***/ })

});