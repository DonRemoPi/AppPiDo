"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/CarouselFooter.jsx":
/*!***************************************!*\
  !*** ./components/CarouselFooter.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CarouselFooter\": function() { return /* binding */ CarouselFooter; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-material-ui-carousel */ \"./node_modules/react-material-ui-carousel/dist/index.js\");\n/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_colabsData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/data/colabsData */ \"./data/colabsData.js\");\n/* harmony import */ var _components_ColabCarousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ColabCarousel */ \"./components/ColabCarousel.jsx\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n\n\n\n\n\nfunction CarouselFooter() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_1___default()), {\n        sx: {\n            width: \"60vw\"\n        },\n        children: _data_colabsData__WEBPACK_IMPORTED_MODULE_2__.colabsData.map((colaborador, index)=>{\n            var _colabsData_, _colabsData_1, _colabsData_2, _colabsData_3, _colabsData_4;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                sx: {\n                    display: \"flex\",\n                    flexDirection: \"row\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ColabCarousel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        rol: colaborador.rol,\n                        specialty: colaborador.specialty,\n                        name: colaborador.name,\n                        linkedin: colaborador.linkedin,\n                        email: colaborador.email\n                    }, void 0, false, {\n                        fileName: \"/Users/salvadorsanchezmelchor/git/pizzeria-don-remolo/pdr/components/CarouselFooter.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 25\n                    }, this),\n                    _data_colabsData__WEBPACK_IMPORTED_MODULE_2__.colabsData.length > index + 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ColabCarousel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        rol: (_colabsData_ = _data_colabsData__WEBPACK_IMPORTED_MODULE_2__.colabsData[index + 1]) === null || _colabsData_ === void 0 ? void 0 : _colabsData_.rol,\n                        specialty: (_colabsData_1 = _data_colabsData__WEBPACK_IMPORTED_MODULE_2__.colabsData[index + 1]) === null || _colabsData_1 === void 0 ? void 0 : _colabsData_1.specialty,\n                        name: (_colabsData_2 = _data_colabsData__WEBPACK_IMPORTED_MODULE_2__.colabsData[index + 1]) === null || _colabsData_2 === void 0 ? void 0 : _colabsData_2.name,\n                        linkedin: (_colabsData_3 = _data_colabsData__WEBPACK_IMPORTED_MODULE_2__.colabsData[index + 1]) === null || _colabsData_3 === void 0 ? void 0 : _colabsData_3.linkedin,\n                        email: (_colabsData_4 = _data_colabsData__WEBPACK_IMPORTED_MODULE_2__.colabsData[index + 1]) === null || _colabsData_4 === void 0 ? void 0 : _colabsData_4.email\n                    }, void 0, false, {\n                        fileName: \"/Users/salvadorsanchezmelchor/git/pizzeria-don-remolo/pdr/components/CarouselFooter.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 29\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"/Users/salvadorsanchezmelchor/git/pizzeria-don-remolo/pdr/components/CarouselFooter.jsx\",\n                lineNumber: 19,\n                columnNumber: 25\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/salvadorsanchezmelchor/git/pizzeria-don-remolo/pdr/components/CarouselFooter.jsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n} // {colaboradores\n //   .slice(0, colaboradores.length - (colaboradores.length % 2))\n //   .map((colaborador, index) => {\n //     if (index % 2 === 0) {\n //       return (\n //         <div className=\"row\" key={index}>\n //           <div className=\"col\">\n //             <p>Nombre: {colaborador.nombre}</p>\n //             <p>Edad: {colaborador.edad}</p>\n //             <p>Puesto: {colaborador.puesto}</p>\n //           </div>\n //           <div className=\"col\">\n //             <p>Nombre: {colaboradores[index + 1].nombre}</p>\n //             <p>Edad: {colaboradores[index + 1].edad}</p>\n //             <p>Puesto: {colaboradores[index + 1].puesto}</p>\n //           </div>\n //         </div>\n //       );\n //     }\n //   })}\n_c = CarouselFooter;\nvar _c;\n$RefreshReg$(_c, \"CarouselFooter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nhcm91c2VsRm9vdGVyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDSDtBQUNTO0FBQ3BCO0FBRTVCLFNBQVNJLGlCQUFrQjtJQUcvQixxQkFDSyw4REFBQ0osbUVBQVFBO1FBQ0xLLElBQUs7WUFDSEMsT0FBTztRQUNUO2tCQUlFTCw0REFBYyxDQUFDLENBQUNPLGFBQWFDLFFBQVU7Z0JBb0JmUixjQUNPQSxlQUNMQSxlQUNLQSxlQUNIQTtZQXZCdEIscUJBQ0ksOERBQUNFLDhDQUFHQTtnQkFFQUUsSUFBSTtvQkFDQUssU0FBUztvQkFDVEMsZUFBZTtnQkFDbkI7O2tDQUVKLDhEQUFDVCxpRUFBYUE7d0JBQ2RVLEtBQU1KLFlBQVlJLEdBQUc7d0JBQ3JCQyxXQUFhTCxZQUFZSyxTQUFTO3dCQUNsQ0MsTUFBUU4sWUFBWU0sSUFBSTt3QkFDeEJDLFVBQWFQLFlBQVlPLFFBQVE7d0JBQ2pDQyxPQUFVUixZQUFZUSxLQUFLOzs7Ozs7b0JBSTNCZiwrREFBaUIsR0FBR1EsUUFBUSxtQkFDeEIsOERBQUNQLGlFQUFhQTt3QkFDVlUsS0FBTVgsQ0FBQUEsZUFBQUEsd0RBQVUsQ0FBQ1EsUUFBUSxFQUFFLGNBQXJCUiwwQkFBQUEsS0FBQUEsSUFBQUEsYUFBdUJXLEdBQUc7d0JBQ2hDQyxXQUFhWixDQUFBQSxnQkFBQUEsd0RBQVUsQ0FBQ1EsUUFBUSxFQUFFLGNBQXJCUiwyQkFBQUEsS0FBQUEsSUFBQUEsY0FBdUJZLFNBQVM7d0JBQzdDQyxNQUFRYixDQUFBQSxnQkFBQUEsd0RBQVUsQ0FBQ1EsUUFBUSxFQUFFLGNBQXJCUiwyQkFBQUEsS0FBQUEsSUFBQUEsY0FBdUJhLElBQUk7d0JBQ25DQyxVQUFhZCxDQUFBQSxnQkFBQUEsd0RBQVUsQ0FBQ1EsUUFBUSxFQUFFLGNBQXJCUiwyQkFBQUEsS0FBQUEsSUFBQUEsY0FBdUJjLFFBQVE7d0JBQzVDQyxPQUFVZixDQUFBQSxnQkFBQUEsd0RBQVUsQ0FBQ1EsUUFBUSxFQUFFLGNBQXJCUiwyQkFBQUEsS0FBQUEsSUFBQUEsY0FBdUJlLEtBQUs7Ozs7Ozs7ZUFyQnJDUDs7Ozs7UUEyQnBCOzs7Ozs7QUFHYixDQUFDLENBS0QsaUJBQWlCO0NBQ2pCLGlFQUFpRTtDQUNqRSxtQ0FBbUM7Q0FDbkMsNkJBQTZCO0NBQzdCLGlCQUFpQjtDQUNqQiw0Q0FBNEM7Q0FDNUMsa0NBQWtDO0NBQ2xDLGtEQUFrRDtDQUNsRCw4Q0FBOEM7Q0FDOUMsa0RBQWtEO0NBQ2xELG1CQUFtQjtDQUNuQixrQ0FBa0M7Q0FDbEMsK0RBQStEO0NBQy9ELDJEQUEyRDtDQUMzRCwrREFBK0Q7Q0FDL0QsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixXQUFXO0NBQ1gsUUFBUTtDQUNSLFFBQVE7S0FwRVFMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2Fyb3VzZWxGb290ZXIuanN4PzNjMTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW1hdGVyaWFsLXVpLWNhcm91c2VsJ1xuaW1wb3J0IHsgY29sYWJzRGF0YSB9IGZyb20gJ0AvZGF0YS9jb2xhYnNEYXRhJ1xuaW1wb3J0IENvbGFiQ2Fyb3VzZWwgZnJvbSAnLi4vY29tcG9uZW50cy9Db2xhYkNhcm91c2VsJ1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcblxuZXhwb3J0IGZ1bmN0aW9uIENhcm91c2VsRm9vdGVyKCApIHtcbiAgIFxuXG4gICByZXR1cm4gKFxuICAgICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgICAgIHN4PSB7eyAgICAgXG4gICAgICAgICAgICAgIHdpZHRoOiAnNjB2dycgICAgICAgICAgICAgXG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICBcbiAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGNvbGFic0RhdGEubWFwKChjb2xhYm9yYWRvciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbGFiQ2Fyb3VzZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvbD17IGNvbGFib3JhZG9yLnJvbCB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVjaWFsdHk9IHsgY29sYWJvcmFkb3Iuc3BlY2lhbHR5IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9IHsgY29sYWJvcmFkb3IubmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rZWRpbiA9IHsgY29sYWJvcmFkb3IubGlua2VkaW4gfVxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWwgPSB7IGNvbGFib3JhZG9yLmVtYWlsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGFic0RhdGEubGVuZ3RoID4gaW5kZXggKyAxICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sYWJDYXJvdXNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2w9eyBjb2xhYnNEYXRhW2luZGV4ICsgMV0/LnJvbCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWNpYWx0eT0geyBjb2xhYnNEYXRhW2luZGV4ICsgMV0/LnNwZWNpYWx0eSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9IHsgY29sYWJzRGF0YVtpbmRleCArIDFdPy5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua2VkaW4gPSB7IGNvbGFic0RhdGFbaW5kZXggKyAxXT8ubGlua2VkaW4gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbCA9IHsgY29sYWJzRGF0YVtpbmRleCArIDFdPy5lbWFpbCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICB9ICl9XG4gICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgKVxufVxuXG5cblxuXG4vLyB7Y29sYWJvcmFkb3Jlc1xuLy8gICAuc2xpY2UoMCwgY29sYWJvcmFkb3Jlcy5sZW5ndGggLSAoY29sYWJvcmFkb3Jlcy5sZW5ndGggJSAyKSlcbi8vICAgLm1hcCgoY29sYWJvcmFkb3IsIGluZGV4KSA9PiB7XG4vLyAgICAgaWYgKGluZGV4ICUgMiA9PT0gMCkge1xuLy8gICAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBrZXk9e2luZGV4fT5cbi8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuLy8gICAgICAgICAgICAgPHA+Tm9tYnJlOiB7Y29sYWJvcmFkb3Iubm9tYnJlfTwvcD5cbi8vICAgICAgICAgICAgIDxwPkVkYWQ6IHtjb2xhYm9yYWRvci5lZGFkfTwvcD5cbi8vICAgICAgICAgICAgIDxwPlB1ZXN0bzoge2NvbGFib3JhZG9yLnB1ZXN0b308L3A+XG4vLyAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbi8vICAgICAgICAgICAgIDxwPk5vbWJyZToge2NvbGFib3JhZG9yZXNbaW5kZXggKyAxXS5ub21icmV9PC9wPlxuLy8gICAgICAgICAgICAgPHA+RWRhZDoge2NvbGFib3JhZG9yZXNbaW5kZXggKyAxXS5lZGFkfTwvcD5cbi8vICAgICAgICAgICAgIDxwPlB1ZXN0bzoge2NvbGFib3JhZG9yZXNbaW5kZXggKyAxXS5wdWVzdG99PC9wPlxuLy8gICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgICk7XG4vLyAgICAgfVxuLy8gICB9KX0iXSwibmFtZXMiOlsiQ2Fyb3VzZWwiLCJjb2xhYnNEYXRhIiwiQ29sYWJDYXJvdXNlbCIsIkJveCIsIkNhcm91c2VsRm9vdGVyIiwic3giLCJ3aWR0aCIsIm1hcCIsImNvbGFib3JhZG9yIiwiaW5kZXgiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInJvbCIsInNwZWNpYWx0eSIsIm5hbWUiLCJsaW5rZWRpbiIsImVtYWlsIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CarouselFooter.jsx\n"));

/***/ })

});