webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CategoryPage.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/CategoryPage.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_ProductsContainer_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ProductsContainer.vue */ \"./src/components/ProductsContainer.vue\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'CategoryPage',\n  props: ['category_id'],\n  components: {\n    ProductsContainer: _components_ProductsContainer_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  mounted: function mounted() {\n    console.log('id is: ', this.category_id);\n    this.current_category = this.$store.getters.getCategoryById(this.category_id);\n    this.current_category_products = this.$store.getters.getProductsByCategoryId(this.category_id);\n  },\n  data: function data() {\n    return {\n      current_category: {},\n      current_category_products: {}\n    };\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9DYXRlZ29yeVBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0ZWdvcnlQYWdlLnZ1ZT9iYWZjIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cImJvcmRlciBib3JkZXItcmVkLTUwMCBteC1hdXRvIG1heC13LTd4bCBweC00XCI+XG5cdFx0PGRpdiBjbGFzcz1cInRleHQteGwgZm9udC1ib2xkIG1kOnRleHQtM3hsIGxnOnRleHQtNHhsXCI+XG5cdFx0XHTQndCw0LfQstCw0L3QuNC1INC60LDRgtC10LPQvtGA0LjQuFxuXHRcdDwvZGl2PlxuXHRcdGNhdCBpZCBpcyB7eyB0aGlzLmNhdGVnb3J5X2lkIH19XG5cblx0XHQ8UHJvZHVjdHNDb250YWluZXIgXG5cdFx0OnByb2R1Y3RzPVwidGhpcy5jdXJyZW50X2NhdGVnb3J5X3Byb2R1Y3RzXCJcblx0XHQvPlxuXHRcdFxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBQcm9kdWN0c0NvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RzQ29udGFpbmVyLnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ0NhdGVnb3J5UGFnZScsXG5cdHByb3BzOiBbJ2NhdGVnb3J5X2lkJ10sXG5cdGNvbXBvbmVudHM6IHtcblx0XHRQcm9kdWN0c0NvbnRhaW5lcixcblx0fSxcblx0bW91bnRlZCAoKSB7XG5cdFx0Y29uc29sZS5sb2coJ2lkIGlzOiAnLCB0aGlzLmNhdGVnb3J5X2lkKVxuXHRcdHRoaXMuY3VycmVudF9jYXRlZ29yeSA9IHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0Q2F0ZWdvcnlCeUlkKHRoaXMuY2F0ZWdvcnlfaWQpO1x0XG5cdFx0dGhpcy5jdXJyZW50X2NhdGVnb3J5X3Byb2R1Y3RzID0gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRQcm9kdWN0c0J5Q2F0ZWdvcnlJZCh0aGlzLmNhdGVnb3J5X2lkKTtcblx0fSxcblx0ZGF0YSAoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGN1cnJlbnRfY2F0ZWdvcnk6IHt9LFxuXHRcdFx0Y3VycmVudF9jYXRlZ29yeV9wcm9kdWN0czoge30sXG5cdFx0fVxuXHR9LFxuXG5cbn1cblxuPC9zY3JpcHQ+XG5cbiJdLCJtYXBwaW5ncyI6IkFBZ0JBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFoQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CategoryPage.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CategoryPage.vue?vue&type=template&id=659d4b46":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/CategoryPage.vue?vue&type=template&id=659d4b46 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nvar _hoisted_1 = {\n  class: \"border border-red-500 mx-auto max-w-7xl px-4\"\n};\n\nvar _hoisted_2 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", {\n  class: \"text-xl font-bold md:text-3xl lg:text-4xl\"\n}, \" Название категории \", -1\n/* HOISTED */\n);\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  var _component_ProductsContainer = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"ProductsContainer\");\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(\"div\", _hoisted_1, [_hoisted_2, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\" cat id is \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(this.category_id) + \" \", 1\n  /* TEXT */\n  ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_ProductsContainer, {\n    products: this.current_category_products\n  }, null, 8\n  /* PROPS */\n  , [\"products\"])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9DYXRlZ29yeVBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY1OWQ0YjQ2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0ZWdvcnlQYWdlLnZ1ZT9iYWZjIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cImJvcmRlciBib3JkZXItcmVkLTUwMCBteC1hdXRvIG1heC13LTd4bCBweC00XCI+XG5cdFx0PGRpdiBjbGFzcz1cInRleHQteGwgZm9udC1ib2xkIG1kOnRleHQtM3hsIGxnOnRleHQtNHhsXCI+XG5cdFx0XHTQndCw0LfQstCw0L3QuNC1INC60LDRgtC10LPQvtGA0LjQuFxuXHRcdDwvZGl2PlxuXHRcdGNhdCBpZCBpcyB7eyB0aGlzLmNhdGVnb3J5X2lkIH19XG5cblx0XHQ8UHJvZHVjdHNDb250YWluZXIgXG5cdFx0OnByb2R1Y3RzPVwidGhpcy5jdXJyZW50X2NhdGVnb3J5X3Byb2R1Y3RzXCJcblx0XHQvPlxuXHRcdFxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBQcm9kdWN0c0NvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RzQ29udGFpbmVyLnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ0NhdGVnb3J5UGFnZScsXG5cdHByb3BzOiBbJ2NhdGVnb3J5X2lkJ10sXG5cdGNvbXBvbmVudHM6IHtcblx0XHRQcm9kdWN0c0NvbnRhaW5lcixcblx0fSxcblx0bW91bnRlZCAoKSB7XG5cdFx0Y29uc29sZS5sb2coJ2lkIGlzOiAnLCB0aGlzLmNhdGVnb3J5X2lkKVxuXHRcdHRoaXMuY3VycmVudF9jYXRlZ29yeSA9IHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0Q2F0ZWdvcnlCeUlkKHRoaXMuY2F0ZWdvcnlfaWQpO1x0XG5cdFx0dGhpcy5jdXJyZW50X2NhdGVnb3J5X3Byb2R1Y3RzID0gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRQcm9kdWN0c0J5Q2F0ZWdvcnlJZCh0aGlzLmNhdGVnb3J5X2lkKTtcblx0fSxcblx0ZGF0YSAoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGN1cnJlbnRfY2F0ZWdvcnk6IHt9LFxuXHRcdFx0Y3VycmVudF9jYXRlZ29yeV9wcm9kdWN0czoge30sXG5cdFx0fVxuXHR9LFxuXG5cbn1cblxuPC9zY3JpcHQ+XG5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFGQTtBQUNBOzs7O0FBRkE7QUFNQTtBQUlBO0FBSEE7QUFDQTs7QUFGQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CategoryPage.vue?vue&type=template&id=659d4b46\n");

/***/ })

})