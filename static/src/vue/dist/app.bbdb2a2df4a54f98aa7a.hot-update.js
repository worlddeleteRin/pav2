webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPage.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/ProductPage.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_noname_work_ilya_pav2_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ProductPageImageContainer_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProductPageImageContainer.vue */ \"./src/components/ProductPageImageContainer.vue\");\n/* harmony import */ var _components_ProductPageImageContainer_vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_ProductPageImageContainer_vue__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ProductPage',\n  props: ['product_id'],\n  components: {\n    ProductPageImageContainer: _components_ProductPageImageContainer_vue__WEBPACK_IMPORTED_MODULE_2___default.a\n  },\n  beforeMount: function beforeMount() {\n    var _this = this;\n\n    return Object(_Users_noname_work_ilya_pav2_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _this.$store.getters.getProductById(_this.product_id);\n\n            case 2:\n              _this.current_product = _context.sent;\n              console.log('product is:', _this.current_product);\n              _this.product_loaded = true;\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  },\n  data: function data() {\n    return {\n      product_loaded: false,\n      current_product: {}\n    };\n  },\n  computed: {\n    api_url: function api_url() {\n      return this.$store.state.common.api_url;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0UGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0UGFnZS52dWU/OGVjNCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDxkaXYgdi1pZj1cIiF0aGlzLnByb2R1Y3RfbG9hZGVkXCI+XG5cdFx0bG9hZGluZyBwcm9kdWN0Li4uXG5cdDwvZGl2PlxuXHQ8ZGl2IFxuXHR2LWlmPVwidGhpcy5wcm9kdWN0X2xvYWRlZFwiXG5cdGNsYXNzPVwicHgtNCBteC1hdXRvIG1heC13LTd4bFwiPlxuXHRwcm9kdWN0IHBhZ2UgaXMgaGVyZVxuXHRwcm9kdWN0IGlkIGlzIHt7IHRoaXMucHJvZHVjdF9pZCB9fVxuXHQ8YnIgLz5cblx0cHJvZHVjdDoge3sgdGhpcy5jdXJyZW50X3Byb2R1Y3QgfX1cblx0cHJvZHVjdCBpczoge3sgdGhpcy5jdXJyZW50X3Byb2R1Y3QuaWQgfX1cblx0PGJyIC8+XG5cblx0PFByb2R1Y3RQYWdlSW1hZ2VDb250YWluZXJcblx0OnByb2R1Y3Q9XCJwcm9kdWN0XCJcblx0Lz5cblxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBQcm9kdWN0UGFnZUltYWdlQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdFBhZ2VJbWFnZUNvbnRhaW5lci52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdQcm9kdWN0UGFnZScsXG5cdHByb3BzOiBbJ3Byb2R1Y3RfaWQnXSxcblx0Y29tcG9uZW50czoge1xuXHRcdFByb2R1Y3RQYWdlSW1hZ2VDb250YWluZXIsXG5cdH0sXG5cdGFzeW5jIGJlZm9yZU1vdW50ICgpIHtcblx0XHR0aGlzLmN1cnJlbnRfcHJvZHVjdCA9IGF3YWl0IHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0UHJvZHVjdEJ5SWQodGhpcy5wcm9kdWN0X2lkKTtcblx0XHRjb25zb2xlLmxvZygncHJvZHVjdCBpczonLCB0aGlzLmN1cnJlbnRfcHJvZHVjdCk7XG5cdFx0dGhpcy5wcm9kdWN0X2xvYWRlZCA9IHRydWU7XG5cdH0sXG5cdGRhdGEgKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRwcm9kdWN0X2xvYWRlZDogZmFsc2UsXG5cdFx0XHRjdXJyZW50X3Byb2R1Y3Q6IHt9LFxuXHRcdH1cblx0fSxcblx0Y29tcHV0ZWQ6IHtcblx0XHRhcGlfdXJsICgpIHtcblx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5jb21tb24uYXBpX3VybDtcblx0XHR9LFxuXHR9LFxufVxuXG48L3NjcmlwdD5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUF1QkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBakJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPage.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPageImageContainer.vue?vue&type=script&lang=js":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPageImageContainer.vue?vue&type=template&id=d18c39b8":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPageImageContainer.vue?vue&type=style&index=0&id=d18c39b8&lang=css":
false,

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPageImageContainer.vue?vue&type=style&index=0&id=d18c39b8&lang=css":
false,

/***/ "./src/components/ProductPageImageContainer.vue":
/*!******************************************************!*\
  !*** ./src/components/ProductPageImageContainer.vue ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0UGFnZUltYWdlQ29udGFpbmVyLnZ1ZS5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ProductPageImageContainer.vue\n");

/***/ }),

/***/ "./src/components/ProductPageImageContainer.vue?vue&type=script&lang=js":
false,

/***/ "./src/components/ProductPageImageContainer.vue?vue&type=style&index=0&id=d18c39b8&lang=css":
false,

/***/ "./src/components/ProductPageImageContainer.vue?vue&type=template&id=d18c39b8":
false

})