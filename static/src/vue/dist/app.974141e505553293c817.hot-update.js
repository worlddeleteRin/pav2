webpackHotUpdate("app",{

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return store; });\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-browser.js\");\n\n\n\n\n/* store start */\n\nvar storeDialogs = {\n  state: function state() {\n    return {\n      simple_dialog: {\n        show: false,\n        button_text: '',\n        heading: '',\n        description: ''\n      },\n      call_phone_dialog: {\n        show: false\n      }\n    };\n  },\n  mutations: {\n    openSimpleDialog: function openSimpleDialog(state, _ref) {\n      var button_text = _ref.button_text,\n          heading = _ref.heading,\n          description = _ref.description;\n      state.simple_dialog.show = true;\n      state.simple_dialog.button_text = button_text;\n      state.simple_dialog.heading = heading;\n      state.simple_dialog.description = description;\n    },\n    closeSimpleDialog: function closeSimpleDialog(state) {\n      state.simple_dialog.show = false;\n    },\n    openCallPhoneDialog: function openCallPhoneDialog(state) {\n      state.call_phone_dialog.show = true;\n    },\n    closeCallPhoneDialog: function closeCallPhoneDialog(state) {\n      state.call_phone_dialog.show = false;\n    }\n  },\n  actions: {},\n  getters: {}\n};\nvar storeEcommerce = {\n  state: function state() {\n    return {\n      products: {},\n      categories: {}\n    };\n  },\n  mutations: {\n    setProducts: function setProducts(state, products) {\n      state.products = products;\n    },\n    setCategories: function setCategories(state, categories) {\n      state.categories = categories;\n    }\n  },\n  actions: {},\n  getters: {\n    getCategoryById: function getCategoryById(state) {\n      return function (id) {\n        console.log('categories are', state.categories);\n        return state.categories.filter(function (category) {\n          return category.id == id;\n        });\n      };\n    }\n  }\n};\nvar storeCommon = {\n  state: function state() {\n    return {\n      api_url: 'http://127.0.0.1:8000'\n    };\n  },\n  mutations: {},\n  actions: {},\n  getters: {}\n};\nvar store = Object(vuex__WEBPACK_IMPORTED_MODULE_3__[\"createStore\"])({\n  modules: {\n    dialogs: storeDialogs,\n    common: storeCommon,\n    ecommerce: storeEcommerce\n  }\n});\n/* store end *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUuanM/YzBkNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdG9yZSBzdGFydCAqL1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICd2dWV4J1xuXG5jb25zdCBzdG9yZURpYWxvZ3MgPSB7XG4gIHN0YXRlOiAoKSA9PiAoe1xuXHRzaW1wbGVfZGlhbG9nOiB7XG5cdFx0c2hvdzogZmFsc2UsXG5cdFx0YnV0dG9uX3RleHQ6ICcnLFxuXHRcdGhlYWRpbmc6ICcnLFxuXHRcdGRlc2NyaXB0aW9uOiAnJyxcblx0fSxcblx0Y2FsbF9waG9uZV9kaWFsb2c6IHtcblx0XHRzaG93OiBmYWxzZSxcblx0fSxcbiAgfSksXG4gIG11dGF0aW9uczoge1xuICAgICAgb3BlblNpbXBsZURpYWxvZyhzdGF0ZSwgeyBcblx0XHRidXR0b25fdGV4dCwgaGVhZGluZywgZGVzY3JpcHRpb24gXG5cdFx0fSkge1xuICAgICAgICBzdGF0ZS5zaW1wbGVfZGlhbG9nLnNob3cgPSB0cnVlO1xuXHRcdHN0YXRlLnNpbXBsZV9kaWFsb2cuYnV0dG9uX3RleHQgPSBidXR0b25fdGV4dDtcblx0XHRzdGF0ZS5zaW1wbGVfZGlhbG9nLmhlYWRpbmcgPSBoZWFkaW5nO1xuXHRcdHN0YXRlLnNpbXBsZV9kaWFsb2cuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgIH0sXG4gICAgICBjbG9zZVNpbXBsZURpYWxvZyhzdGF0ZSkge1xuICAgICAgICBzdGF0ZS5zaW1wbGVfZGlhbG9nLnNob3cgPSBmYWxzZTtcbiAgICAgIH0sXG5cdFx0b3BlbkNhbGxQaG9uZURpYWxvZyhzdGF0ZSkge1xuXHRcdFx0c3RhdGUuY2FsbF9waG9uZV9kaWFsb2cuc2hvdyA9IHRydWU7XG5cdFx0fSxcblx0XHRjbG9zZUNhbGxQaG9uZURpYWxvZyhzdGF0ZSkge1xuXHRcdFx0c3RhdGUuY2FsbF9waG9uZV9kaWFsb2cuc2hvdyA9IGZhbHNlO1xuXHRcdH0sXG4gIH0sXG4gIGFjdGlvbnM6IHt9LFxuICBnZXR0ZXJzOiB7fVxufVxuXG5jb25zdCBzdG9yZUVjb21tZXJjZSA9IHtcbiAgc3RhdGU6ICgpID0+ICh7XG5cdHByb2R1Y3RzOiB7fSxcblx0Y2F0ZWdvcmllczoge30sXG4gIH0pLFxuICBtdXRhdGlvbnM6IHtcblx0c2V0UHJvZHVjdHMoc3RhdGUsIHByb2R1Y3RzKSB7XG5cdFx0c3RhdGUucHJvZHVjdHMgPSBwcm9kdWN0cztcblx0fSxcblx0c2V0Q2F0ZWdvcmllcyhzdGF0ZSwgY2F0ZWdvcmllcykge1xuXHRcdHN0YXRlLmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzO1xuXHR9LFxuICB9LFxuICBhY3Rpb25zOiB7fSxcbiAgZ2V0dGVyczoge1xuXHRnZXRDYXRlZ29yeUJ5SWQ6IChzdGF0ZSkgPT4gKGlkKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coJ2NhdGVnb3JpZXMgYXJlJywgc3RhdGUuY2F0ZWdvcmllcyk7XG5cdFx0cmV0dXJuIHN0YXRlLmNhdGVnb3JpZXMuZmlsdGVyKGNhdGVnb3J5ID0+IGNhdGVnb3J5LmlkID09IGlkKTtcblx0fSxcdFxuICB9XG59XG5cblxuY29uc3Qgc3RvcmVDb21tb24gPSB7XG4gIHN0YXRlOiAoKSA9PiAoe1xuICAgIGFwaV91cmw6ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAnLFxuICB9KSxcbiAgbXV0YXRpb25zOiB7fSxcbiAgYWN0aW9uczoge30sXG4gIGdldHRlcnM6IHtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZSh7XG4gIG1vZHVsZXM6IHtcbiAgICBkaWFsb2dzOiBzdG9yZURpYWxvZ3MsXG4gICAgY29tbW9uOiBzdG9yZUNvbW1vbixcblx0ZWNvbW1lcmNlOiBzdG9yZUVjb21tZXJjZSxcbiAgfVxufSlcblxuLyogc3RvcmUgZW5kICovXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQURBO0FBUEE7QUFBQTtBQVdBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakJBO0FBbUJBO0FBQ0E7QUFoQ0E7QUFtQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFEQTtBQWRBO0FBdUJBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFRQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store.js\n");

/***/ })

})