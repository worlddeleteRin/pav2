webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPageImageContainer.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/ProductPageImageContainer.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var swiper_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/vue */ \"./node_modules/swiper/swiper-vue.esm.js\");\n/* harmony import */ var swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/swiper.scss */ \"./node_modules/swiper/swiper.scss\");\n/* harmony import */ var swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_components_navigation_navigation_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/components/navigation/navigation.min.css */ \"./node_modules/swiper/components/navigation/navigation.min.css\");\n/* harmony import */ var swiper_components_navigation_navigation_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_components_navigation_navigation_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swiper_components_thumbs_thumbs_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/components/thumbs/thumbs.min.css */ \"./node_modules/swiper/components/thumbs/thumbs.min.css\");\n/* harmony import */ var swiper_components_thumbs_thumbs_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_components_thumbs_thumbs_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/core */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n// Import Swiper Vue.js components\n // Import Swiper styles\n\n\n\n // import Swiper core and required modules\n\n // install Swiper modules\n\nswiper_core__WEBPACK_IMPORTED_MODULE_4__[\"default\"].use([swiper_core__WEBPACK_IMPORTED_MODULE_4__[\"Navigation\"], swiper_core__WEBPACK_IMPORTED_MODULE_4__[\"Thumbs\"]]);\nvar __default__ = {\n  components: {\n    Swiper: swiper_vue__WEBPACK_IMPORTED_MODULE_0__[\"Swiper\"],\n    SwiperSlide: swiper_vue__WEBPACK_IMPORTED_MODULE_0__[\"SwiperSlide\"]\n  },\n  created: function created() {\n    window.addEventListener(\"resize\", this.resizeEvent);\n  },\n  unmounted: function unmounted() {\n    window.removeEventListener(\"resize\", this.resizeEvent);\n  },\n  mounted: function mounted() {\n    console.log(this.thumbsSwiper);\n    this.thumbsSwiper.changeDirection('horizontal', true);\n  },\n  data: function data() {\n    return {\n      thumbsSwiper: null,\n      max_height_desc: \"300px\",\n      max_height_phone: \"400px\",\n      change_width: 512,\n      width: window.innerWidth\n    };\n  },\n  methods: {\n    resizeEvent: function resizeEvent(e) {\n      this.width = e.target.innerWidth;\n    },\n    getThumbDirection: function getThumbDirection() {\n      if (this.width >= this.change_width) {\n        return 'vertical';\n      }\n\n      return 'horizontal';\n    },\n    setThumbsSwiper: function setThumbsSwiper(swiper) {\n      this.thumbsSwiper = swiper;\n    }\n  }\n};\n\n\nvar __injectCSSVars__ = function __injectCSSVars__() {\n  Object(vue__WEBPACK_IMPORTED_MODULE_5__[\"useCssVars\"])(function (_ctx) {\n    return {\n      \"d18c39b8-max_height_desc\": _ctx.max_height_desc,\n      \"d18c39b8-max_height_phone\": _ctx.max_height_phone\n    };\n  });\n};\n\nvar __setup__ = __default__.setup;\n__default__.setup = __setup__ ? function (props, ctx) {\n  __injectCSSVars__();\n\n  return __setup__(props, ctx);\n} : __injectCSSVars__;\n/* harmony default export */ __webpack_exports__[\"default\"] = (__default__);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0UGFnZUltYWdlQ29udGFpbmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RQYWdlSW1hZ2VDb250YWluZXIudnVlP2M5ZjAiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxud2lkdGggaXMge3sgdGhpcy53aWR0aCB9fVxuPGRpdiBjbGFzcz1cInJlbGF0aXZlIGJvcmRlci00IGJvcmRlci1yZWQtNTAwIGxnOnctNi8xMiB3aWR0aC1mdWxsIG1heF9oX2Rlc2NcIj5cbjxkaXYgY2xhc3M9XCJyZWxhdGl2ZSBwcm9kdWN0X3BhZ2VfaW1hZ2VzIG1heF9oX2Rlc2NcIj5cblxuXG4gIDxzd2lwZXJcbiAgQHN3aXBlcj1cInNldFRodW1ic1N3aXBlclwiXG4gIDpkaXJlY3Rpb249XCIndmVydGljYWwnXCJcbiAgOnNwYWNlQmV0d2Vlbj1cIjEwXCJcbiAgOnNsaWRlc1BlclZpZXc9XCI0XCJcbiAgOmZyZWVNb2RlPVwidHJ1ZVwiXG4gIDp3YXRjaFNsaWRlc1Zpc2liaWxpdHk9XCJ0cnVlXCJcbiAgOndhdGNoU2xpZGVzUHJvZ3Jlc3M9XCJ0cnVlXCJcbiAgY2xhc3M9XCJteVN3aXBlclwiPlxuXHQ8c3dpcGVyLXNsaWRlPlxuXHRcdDxpbWcgc3JjPVwiaHR0cHM6Ly9zd2lwZXJqcy5jb20vZGVtb3MvaW1hZ2VzL25hdHVyZS0xLmpwZ1wiIC8+XG5cdDwvc3dpcGVyLXNsaWRlPlxuXHQ8c3dpcGVyLXNsaWRlPlxuXHRcdDxpbWcgc3JjPVwiaHR0cHM6Ly9zd2lwZXJqcy5jb20vZGVtb3MvaW1hZ2VzL25hdHVyZS0yLmpwZ1wiIC8+XG5cdDwvc3dpcGVyLXNsaWRlPlxuICAgPC9zd2lwZXI+XG5cblxuXG4gIDxzd2lwZXIgXG4gIDpzdHlsZT1cInsnLS1zd2lwZXItbmF2aWdhdGlvbi1jb2xvcic6ICcjZmZmJywnLS1zd2lwZXItcGFnaW5hdGlvbi1jb2xvcic6ICcjZmZmJ31cIiBcbiAgOnNsaWRlc1BlclZpZXc9XCIxXCJcbiAgOnNwYWNlQmV0d2Vlbj1cIjEwXCIgXG4gIDpuYXZpZ2F0aW9uPVwidHJ1ZVwiIFxuICA6dGh1bWJzPVwieyBzd2lwZXI6IHRodW1ic1N3aXBlciB9XCIgXG4gIGNsYXNzPVwibXlTd2lwZXIyIG1heF9oX2Rlc2NcIj5cblx0PHN3aXBlci1zbGlkZT5cblx0XHQ8aW1nIHNyYz1cImh0dHBzOi8vc3dpcGVyanMuY29tL2RlbW9zL2ltYWdlcy9uYXR1cmUtMS5qcGdcIiAvPlxuXHQ8L3N3aXBlci1zbGlkZT5cblx0PHN3aXBlci1zbGlkZT5cblx0XHQ8aW1nIHNyYz1cImh0dHBzOi8vc3dpcGVyanMuY29tL2RlbW9zL2ltYWdlcy9uYXR1cmUtMi5qcGdcIiAvPlxuXHQ8L3N3aXBlci1zbGlkZT5cbiAgPC9zd2lwZXI+XG5cbjwvZGl2PlxuXG48L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbi8vIEltcG9ydCBTd2lwZXIgVnVlLmpzIGNvbXBvbmVudHNcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvdnVlJztcblxuLy8gSW1wb3J0IFN3aXBlciBzdHlsZXNcbmltcG9ydCAnc3dpcGVyL3N3aXBlci5zY3NzJztcblxuaW1wb3J0IFwic3dpcGVyL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLm1pbi5jc3NcIlxuaW1wb3J0IFwic3dpcGVyL2NvbXBvbmVudHMvdGh1bWJzL3RodW1icy5taW4uY3NzXCJcblxuXG5cbi8vIGltcG9ydCBTd2lwZXIgY29yZSBhbmQgcmVxdWlyZWQgbW9kdWxlc1xuaW1wb3J0IFN3aXBlckNvcmUsIHtcbiAgTmF2aWdhdGlvbixUaHVtYnNcbn0gZnJvbSAnc3dpcGVyL2NvcmUnO1xuXG4vLyBpbnN0YWxsIFN3aXBlciBtb2R1bGVzXG5Td2lwZXJDb3JlLnVzZShbTmF2aWdhdGlvbixUaHVtYnNdKTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBTd2lwZXIsXG4gICAgU3dpcGVyU2xpZGUsXG4gIH0sXG4gIGNyZWF0ZWQgKCkge1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnJlc2l6ZUV2ZW50KVxuICB9LFxuICB1bm1vdW50ZWQgKCkge1xuXHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnJlc2l6ZUV2ZW50KVxuICB9LFxuICBtb3VudGVkICgpIHtcblx0Y29uc29sZS5sb2codGhpcy50aHVtYnNTd2lwZXIpO1xuXHR0aGlzLnRodW1ic1N3aXBlci5jaGFuZ2VEaXJlY3Rpb24oJ2hvcml6b250YWwnLCB0cnVlKTtcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aHVtYnNTd2lwZXI6IG51bGwsXG5cdFx0bWF4X2hlaWdodF9kZXNjOiBcIjMwMHB4XCIsXG5cdFx0bWF4X2hlaWdodF9waG9uZTogXCI0MDBweFwiLFxuXHRcdGNoYW5nZV93aWR0aDogNTEyLFxuXHRcdHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG5cdHJlc2l6ZUV2ZW50IChlKSB7XG5cdFx0dGhpcy53aWR0aCA9IGUudGFyZ2V0LmlubmVyV2lkdGg7XG5cdH0sXG5cdGdldFRodW1iRGlyZWN0aW9uKCkge1xuXHRcdGlmICh0aGlzLndpZHRoID49IHRoaXMuY2hhbmdlX3dpZHRoKSB7XG5cdFx0XHRyZXR1cm4gJ3ZlcnRpY2FsJztcblx0XHR9XG5cdFx0cmV0dXJuICdob3Jpem9udGFsJztcblx0fSxcbiAgICBzZXRUaHVtYnNTd2lwZXIoc3dpcGVyKSB7XG4gICAgICB0aGlzLnRodW1ic1N3aXBlciA9IHN3aXBlcjtcbiAgICB9LFxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG4ubWF4X2hfZGVzYyB7XG5cdG1heC1oZWlnaHQ6IHYtYmluZCgnbWF4X2hlaWdodF9kZXNjJyk7XG59XG4ubWF4X2hfcGhvbmUge1xuXHRtYXgtaGVpZ2h0OiB2LWJpbmQoJ21heF9oZWlnaHRfcGhvbmUnKTtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5wcm9kdWN0X3BhZ2VfaW1hZ2VzIHtcblx0ZGlzcGxheTogZmxleDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cdGhlaWdodDogMTAwJTtcblx0Ym9yZGVyOiAxMHB4IHNvbGlkIGJsdWU7XG59XG5cbi5teVN3aXBlcjIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICB3aWR0aDogOTAlO1xufVxuXG4ubXlTd2lwZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCB2aW9sZXQ7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwJTtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuXG4ubXlTd2lwZXIgLnN3aXBlci1zbGlkZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLm15U3dpcGVyIC5zd2lwZXItc2xpZGUtdGh1bWItYWN0aXZlIHtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zd2lwZXItc2xpZGUgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuPC9zdHlsZT5cbiJdLCJtYXBwaW5ncyI6IkFBK0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUF4QkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPageImageContainer.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPageImageContainer.vue?vue&type=template&id=d18c39b8":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/ProductPageImageContainer.vue?vue&type=template&id=d18c39b8 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nvar _hoisted_1 = {\n  class: \"relative border-4 border-red-500 lg:w-6/12 width-full max_h_desc\"\n};\nvar _hoisted_2 = {\n  class: \"relative product_page_images max_h_desc\"\n};\n\nvar _hoisted_3 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"img\", {\n  src: \"https://swiperjs.com/demos/images/nature-1.jpg\"\n}, null, -1\n/* HOISTED */\n);\n\nvar _hoisted_4 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"img\", {\n  src: \"https://swiperjs.com/demos/images/nature-2.jpg\"\n}, null, -1\n/* HOISTED */\n);\n\nvar _hoisted_5 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"img\", {\n  src: \"https://swiperjs.com/demos/images/nature-1.jpg\"\n}, null, -1\n/* HOISTED */\n);\n\nvar _hoisted_6 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"img\", {\n  src: \"https://swiperjs.com/demos/images/nature-2.jpg\"\n}, null, -1\n/* HOISTED */\n);\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  var _component_swiper_slide = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"swiper-slide\");\n\n  var _component_swiper = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"swiper\");\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\" width is \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(this.width) + \" \", 1\n  /* TEXT */\n  ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_swiper, {\n    onSwiper: $options.setThumbsSwiper,\n    direction: 'vertical',\n    spaceBetween: 10,\n    slidesPerView: 4,\n    freeMode: true,\n    watchSlidesVisibility: true,\n    watchSlidesProgress: true,\n    class: \"mySwiper\"\n  }, {\n    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n      return [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_swiper_slide, null, {\n        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n          return [_hoisted_3];\n        }),\n        _: 1\n        /* STABLE */\n\n      }), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_swiper_slide, null, {\n        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n          return [_hoisted_4];\n        }),\n        _: 1\n        /* STABLE */\n\n      })];\n    }),\n    _: 1\n    /* STABLE */\n\n  }, 8\n  /* PROPS */\n  , [\"onSwiper\"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_swiper, {\n    style: {\n      '--swiper-navigation-color': '#fff',\n      '--swiper-pagination-color': '#fff'\n    },\n    slidesPerView: 1,\n    spaceBetween: 10,\n    navigation: true,\n    thumbs: {\n      swiper: $data.thumbsSwiper\n    },\n    class: \"mySwiper2 max_h_desc\"\n  }, {\n    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n      return [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_swiper_slide, null, {\n        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n          return [_hoisted_5];\n        }),\n        _: 1\n        /* STABLE */\n\n      }), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_swiper_slide, null, {\n        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n          return [_hoisted_6];\n        }),\n        _: 1\n        /* STABLE */\n\n      })];\n    }),\n    _: 1\n    /* STABLE */\n\n  }, 8\n  /* PROPS */\n  , [\"thumbs\"])])])], 64\n  /* STABLE_FRAGMENT */\n  );\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0UGFnZUltYWdlQ29udGFpbmVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kMThjMzliOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RQYWdlSW1hZ2VDb250YWluZXIudnVlP2M5ZjAiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxud2lkdGggaXMge3sgdGhpcy53aWR0aCB9fVxuPGRpdiBjbGFzcz1cInJlbGF0aXZlIGJvcmRlci00IGJvcmRlci1yZWQtNTAwIGxnOnctNi8xMiB3aWR0aC1mdWxsIG1heF9oX2Rlc2NcIj5cbjxkaXYgY2xhc3M9XCJyZWxhdGl2ZSBwcm9kdWN0X3BhZ2VfaW1hZ2VzIG1heF9oX2Rlc2NcIj5cblxuXG4gIDxzd2lwZXJcbiAgQHN3aXBlcj1cInNldFRodW1ic1N3aXBlclwiXG4gIDpkaXJlY3Rpb249XCIndmVydGljYWwnXCJcbiAgOnNwYWNlQmV0d2Vlbj1cIjEwXCJcbiAgOnNsaWRlc1BlclZpZXc9XCI0XCJcbiAgOmZyZWVNb2RlPVwidHJ1ZVwiXG4gIDp3YXRjaFNsaWRlc1Zpc2liaWxpdHk9XCJ0cnVlXCJcbiAgOndhdGNoU2xpZGVzUHJvZ3Jlc3M9XCJ0cnVlXCJcbiAgY2xhc3M9XCJteVN3aXBlclwiPlxuXHQ8c3dpcGVyLXNsaWRlPlxuXHRcdDxpbWcgc3JjPVwiaHR0cHM6Ly9zd2lwZXJqcy5jb20vZGVtb3MvaW1hZ2VzL25hdHVyZS0xLmpwZ1wiIC8+XG5cdDwvc3dpcGVyLXNsaWRlPlxuXHQ8c3dpcGVyLXNsaWRlPlxuXHRcdDxpbWcgc3JjPVwiaHR0cHM6Ly9zd2lwZXJqcy5jb20vZGVtb3MvaW1hZ2VzL25hdHVyZS0yLmpwZ1wiIC8+XG5cdDwvc3dpcGVyLXNsaWRlPlxuICAgPC9zd2lwZXI+XG5cblxuXG4gIDxzd2lwZXIgXG4gIDpzdHlsZT1cInsnLS1zd2lwZXItbmF2aWdhdGlvbi1jb2xvcic6ICcjZmZmJywnLS1zd2lwZXItcGFnaW5hdGlvbi1jb2xvcic6ICcjZmZmJ31cIiBcbiAgOnNsaWRlc1BlclZpZXc9XCIxXCJcbiAgOnNwYWNlQmV0d2Vlbj1cIjEwXCIgXG4gIDpuYXZpZ2F0aW9uPVwidHJ1ZVwiIFxuICA6dGh1bWJzPVwieyBzd2lwZXI6IHRodW1ic1N3aXBlciB9XCIgXG4gIGNsYXNzPVwibXlTd2lwZXIyIG1heF9oX2Rlc2NcIj5cblx0PHN3aXBlci1zbGlkZT5cblx0XHQ8aW1nIHNyYz1cImh0dHBzOi8vc3dpcGVyanMuY29tL2RlbW9zL2ltYWdlcy9uYXR1cmUtMS5qcGdcIiAvPlxuXHQ8L3N3aXBlci1zbGlkZT5cblx0PHN3aXBlci1zbGlkZT5cblx0XHQ8aW1nIHNyYz1cImh0dHBzOi8vc3dpcGVyanMuY29tL2RlbW9zL2ltYWdlcy9uYXR1cmUtMi5qcGdcIiAvPlxuXHQ8L3N3aXBlci1zbGlkZT5cbiAgPC9zd2lwZXI+XG5cbjwvZGl2PlxuXG48L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbi8vIEltcG9ydCBTd2lwZXIgVnVlLmpzIGNvbXBvbmVudHNcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvdnVlJztcblxuLy8gSW1wb3J0IFN3aXBlciBzdHlsZXNcbmltcG9ydCAnc3dpcGVyL3N3aXBlci5zY3NzJztcblxuaW1wb3J0IFwic3dpcGVyL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLm1pbi5jc3NcIlxuaW1wb3J0IFwic3dpcGVyL2NvbXBvbmVudHMvdGh1bWJzL3RodW1icy5taW4uY3NzXCJcblxuXG5cbi8vIGltcG9ydCBTd2lwZXIgY29yZSBhbmQgcmVxdWlyZWQgbW9kdWxlc1xuaW1wb3J0IFN3aXBlckNvcmUsIHtcbiAgTmF2aWdhdGlvbixUaHVtYnNcbn0gZnJvbSAnc3dpcGVyL2NvcmUnO1xuXG4vLyBpbnN0YWxsIFN3aXBlciBtb2R1bGVzXG5Td2lwZXJDb3JlLnVzZShbTmF2aWdhdGlvbixUaHVtYnNdKTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBTd2lwZXIsXG4gICAgU3dpcGVyU2xpZGUsXG4gIH0sXG4gIGNyZWF0ZWQgKCkge1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnJlc2l6ZUV2ZW50KVxuICB9LFxuICB1bm1vdW50ZWQgKCkge1xuXHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnJlc2l6ZUV2ZW50KVxuICB9LFxuICBtb3VudGVkICgpIHtcblx0Y29uc29sZS5sb2codGhpcy50aHVtYnNTd2lwZXIpO1xuXHR0aGlzLnRodW1ic1N3aXBlci5jaGFuZ2VEaXJlY3Rpb24oJ2hvcml6b250YWwnLCB0cnVlKTtcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aHVtYnNTd2lwZXI6IG51bGwsXG5cdFx0bWF4X2hlaWdodF9kZXNjOiBcIjMwMHB4XCIsXG5cdFx0bWF4X2hlaWdodF9waG9uZTogXCI0MDBweFwiLFxuXHRcdGNoYW5nZV93aWR0aDogNTEyLFxuXHRcdHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG5cdHJlc2l6ZUV2ZW50IChlKSB7XG5cdFx0dGhpcy53aWR0aCA9IGUudGFyZ2V0LmlubmVyV2lkdGg7XG5cdH0sXG5cdGdldFRodW1iRGlyZWN0aW9uKCkge1xuXHRcdGlmICh0aGlzLndpZHRoID49IHRoaXMuY2hhbmdlX3dpZHRoKSB7XG5cdFx0XHRyZXR1cm4gJ3ZlcnRpY2FsJztcblx0XHR9XG5cdFx0cmV0dXJuICdob3Jpem9udGFsJztcblx0fSxcbiAgICBzZXRUaHVtYnNTd2lwZXIoc3dpcGVyKSB7XG4gICAgICB0aGlzLnRodW1ic1N3aXBlciA9IHN3aXBlcjtcbiAgICB9LFxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG4ubWF4X2hfZGVzYyB7XG5cdG1heC1oZWlnaHQ6IHYtYmluZCgnbWF4X2hlaWdodF9kZXNjJyk7XG59XG4ubWF4X2hfcGhvbmUge1xuXHRtYXgtaGVpZ2h0OiB2LWJpbmQoJ21heF9oZWlnaHRfcGhvbmUnKTtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5wcm9kdWN0X3BhZ2VfaW1hZ2VzIHtcblx0ZGlzcGxheTogZmxleDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cdGhlaWdodDogMTAwJTtcblx0Ym9yZGVyOiAxMHB4IHNvbGlkIGJsdWU7XG59XG5cbi5teVN3aXBlcjIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICB3aWR0aDogOTAlO1xufVxuXG4ubXlTd2lwZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCB2aW9sZXQ7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwJTtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuXG4ubXlTd2lwZXIgLnN3aXBlci1zbGlkZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLm15U3dpcGVyIC5zd2lwZXItc2xpZGUtdGh1bWItYWN0aXZlIHtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zd2lwZXItc2xpZGUgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuPC9zdHlsZT5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQTs7O0FBQ0E7OztBQWFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7O0FBcENBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQU5BO0FBQUE7QUFDQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUVBO0FBQUE7QUFBQTs7OztBQUNBO0FBTEE7Ozs7QUFUQTs7QUFBQTtBQW9CQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBT0E7QUFOQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOzs7O0FBQ0E7QUFFQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUxBOzs7O0FBUEE7O0FBQUE7OztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPageImageContainer.vue?vue&type=template&id=d18c39b8\n");

/***/ })

})