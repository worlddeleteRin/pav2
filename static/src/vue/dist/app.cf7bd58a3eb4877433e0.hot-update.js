webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPageImageContainer.vue?vue&type=template&id=d18c39b8":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/ProductPageImageContainer.vue?vue&type=template&id=d18c39b8 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nvar _hoisted_1 = {\n  class: \"relative lg:w-6/12 width-full max_h_desc\"\n};\nvar _hoisted_2 = {\n  class: \"relative product_page_images max_h_desc\"\n};\n\nvar _hoisted_3 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"img\", {\n  src: \"https://swiperjs.com/demos/images/nature-1.jpg\"\n}, null, -1\n/* HOISTED */\n);\n\nvar _hoisted_4 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"img\", {\n  src: \"https://swiperjs.com/demos/images/nature-2.jpg\"\n}, null, -1\n/* HOISTED */\n);\n\nvar _hoisted_5 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"img\", {\n  src: \"https://swiperjs.com/demos/images/nature-1.jpg\"\n}, null, -1\n/* HOISTED */\n);\n\nvar _hoisted_6 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"img\", {\n  src: \"https://swiperjs.com/demos/images/nature-2.jpg\"\n}, null, -1\n/* HOISTED */\n);\n\nvar _hoisted_7 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"br\", null, null, -1\n/* HOISTED */\n);\n\nvar _hoisted_8 = {\n  class: \"pr_page_slider_next\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  var _this = this;\n\n  var _component_swiper_slide = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"swiper-slide\");\n\n  var _component_ChevronLeftIcon = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"ChevronLeftIcon\");\n\n  var _component_swiper = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"swiper\");\n\n  var _component_ChevronRightIcon = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"ChevronRightIcon\");\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\" width is \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(this.width) + \" thumb direction is \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(this.getThumbDirection()) + \" \", 1\n  /* TEXT */\n  ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_swiper, {\n    onSwiper: $options.setThumbsSwiper,\n    direction: this.getThumbDirection(),\n    spaceBetween: 10,\n    slidesPerView: 4,\n    freeMode: true,\n    watchSlidesVisibility: true,\n    watchSlidesProgress: true,\n    class: \"mySwiper\"\n  }, {\n    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n      return [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_swiper_slide, null, {\n        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n          return [_hoisted_3];\n        }),\n        _: 1\n        /* STABLE */\n\n      }), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_swiper_slide, null, {\n        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n          return [_hoisted_4];\n        }),\n        _: 1\n        /* STABLE */\n\n      }), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\", {\n        class: \"absolute top-1/2 left-0 relative block w-10 h-10 p-1 overflow-hidden bg-blue-600 rounded-full\",\n        onClick: _cache[1] || (_cache[1] = function ($event) {\n          return _this.mainImageSwiper.slidePrev();\n        })\n      }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_ChevronLeftIcon, {\n        class: \"w-full h-full text-white\"\n      })])];\n    }),\n    _: 1\n    /* STABLE */\n\n  }, 8\n  /* PROPS */\n  , [\"onSwiper\", \"direction\"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_swiper, {\n    onSwiper: $options.setMainImageSwiper,\n    style: {\n      '--swiper-navigation-color': '#fff',\n      '--swiper-pagination-color': '#fff'\n    },\n    slidesPerView: 1,\n    spaceBetween: 10,\n    thumbs: {\n      swiper: $data.thumbsSwiper\n    },\n    class: \"mySwiper2 max_h_desc\"\n  }, {\n    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n      return [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_swiper_slide, null, {\n        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n          return [_hoisted_5];\n        }),\n        _: 1\n        /* STABLE */\n\n      }), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_swiper_slide, null, {\n        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n          return [_hoisted_6];\n        }),\n        _: 1\n        /* STABLE */\n\n      }), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\", {\n        class: \"absolute left-0 z-10 block w-10 h-10 p-1 overflow-hidden bg-blue-600 rounded-full top-1/2\",\n        onClick: _cache[2] || (_cache[2] = function ($event) {\n          return _this.mainImageSwiper.slideNext();\n        })\n      }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_ChevronRightIcon, {\n        class: \"w-full h-full text-white\"\n      })])];\n    }),\n    _: 1\n    /* STABLE */\n\n  }, 8\n  /* PROPS */\n  , [\"onSwiper\", \"thumbs\"])]), _hoisted_7, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_8, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_ChevronLeftIcon)])])], 64\n  /* STABLE_FRAGMENT */\n  );\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0UGFnZUltYWdlQ29udGFpbmVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kMThjMzliOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RQYWdlSW1hZ2VDb250YWluZXIudnVlP2M5ZjAiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxud2lkdGggaXMge3sgdGhpcy53aWR0aCB9fVxudGh1bWIgZGlyZWN0aW9uIGlzIHt7IHRoaXMuZ2V0VGh1bWJEaXJlY3Rpb24oKSB9fVxuXG48ZGl2IGNsYXNzPVwicmVsYXRpdmUgbGc6dy02LzEyIHdpZHRoLWZ1bGwgbWF4X2hfZGVzY1wiPlxuPGRpdiBjbGFzcz1cInJlbGF0aXZlIHByb2R1Y3RfcGFnZV9pbWFnZXMgbWF4X2hfZGVzY1wiPlxuXG5cbiAgPHN3aXBlclxuICBAc3dpcGVyPVwic2V0VGh1bWJzU3dpcGVyXCJcbiAgOmRpcmVjdGlvbj1cInRoaXMuZ2V0VGh1bWJEaXJlY3Rpb24oKVwiXG4gIDpzcGFjZUJldHdlZW49XCIxMFwiXG4gIDpzbGlkZXNQZXJWaWV3PVwiNFwiXG4gIDpmcmVlTW9kZT1cInRydWVcIlxuICA6d2F0Y2hTbGlkZXNWaXNpYmlsaXR5PVwidHJ1ZVwiXG4gIDp3YXRjaFNsaWRlc1Byb2dyZXNzPVwidHJ1ZVwiXG4gIGNsYXNzPVwibXlTd2lwZXJcIj5cblx0PHN3aXBlci1zbGlkZT5cblx0XHQ8aW1nIHNyYz1cImh0dHBzOi8vc3dpcGVyanMuY29tL2RlbW9zL2ltYWdlcy9uYXR1cmUtMS5qcGdcIiAvPlxuXHQ8L3N3aXBlci1zbGlkZT5cblx0PHN3aXBlci1zbGlkZT5cblx0XHQ8aW1nIHNyYz1cImh0dHBzOi8vc3dpcGVyanMuY29tL2RlbW9zL2ltYWdlcy9uYXR1cmUtMi5qcGdcIiAvPlxuXHQ8L3N3aXBlci1zbGlkZT5cblxuPHNwYW4gY2xhc3M9XCJhYnNvbHV0ZSB0b3AtMS8yIGxlZnQtMCByZWxhdGl2ZSBibG9jayB3LTEwIGgtMTAgcC0xIG92ZXJmbG93LWhpZGRlbiBiZy1ibHVlLTYwMCByb3VuZGVkLWZ1bGxcIlxuXHRAY2xpY2s9XCJ0aGlzLm1haW5JbWFnZVN3aXBlci5zbGlkZVByZXYoKVwiPlxuXHQ8Q2hldnJvbkxlZnRJY29uIGNsYXNzPVwidy1mdWxsIGgtZnVsbCB0ZXh0LXdoaXRlXCIvPlxuPC9zcGFuPlxuXG4gICA8L3N3aXBlcj5cblxuXG5cbiAgPHN3aXBlciBcbiAgQHN3aXBlcj1cInNldE1haW5JbWFnZVN3aXBlclwiXG4gIDpzdHlsZT1cInsnLS1zd2lwZXItbmF2aWdhdGlvbi1jb2xvcic6ICcjZmZmJywnLS1zd2lwZXItcGFnaW5hdGlvbi1jb2xvcic6ICcjZmZmJ31cIiBcbiAgOnNsaWRlc1BlclZpZXc9XCIxXCJcbiAgOnNwYWNlQmV0d2Vlbj1cIjEwXCIgXG4gIDp0aHVtYnM9XCJ7IHN3aXBlcjogdGh1bWJzU3dpcGVyIH1cIiBcbiAgY2xhc3M9XCJteVN3aXBlcjIgbWF4X2hfZGVzY1wiPlxuXHQ8c3dpcGVyLXNsaWRlPlxuXHRcdDxpbWcgc3JjPVwiaHR0cHM6Ly9zd2lwZXJqcy5jb20vZGVtb3MvaW1hZ2VzL25hdHVyZS0xLmpwZ1wiIC8+XG5cdDwvc3dpcGVyLXNsaWRlPlxuXHQ8c3dpcGVyLXNsaWRlPlxuXHRcdDxpbWcgc3JjPVwiaHR0cHM6Ly9zd2lwZXJqcy5jb20vZGVtb3MvaW1hZ2VzL25hdHVyZS0yLmpwZ1wiIC8+XG5cdDwvc3dpcGVyLXNsaWRlPlxuXHRcblxuXG48c3BhbiBjbGFzcz1cImFic29sdXRlIGxlZnQtMCB6LTEwIGJsb2NrIHctMTAgaC0xMCBwLTEgb3ZlcmZsb3ctaGlkZGVuIGJnLWJsdWUtNjAwIHJvdW5kZWQtZnVsbCB0b3AtMS8yXCJcblx0QGNsaWNrPVwidGhpcy5tYWluSW1hZ2VTd2lwZXIuc2xpZGVOZXh0KClcIj5cblx0PENoZXZyb25SaWdodEljb24gY2xhc3M9XCJ3LWZ1bGwgaC1mdWxsIHRleHQtd2hpdGVcIi8+XG48L3NwYW4+XG5cbiAgPC9zd2lwZXI+XG5cbjwvZGl2PlxuXG5cbjxiciAvPlxuPGRpdiBjbGFzcz1cInByX3BhZ2Vfc2xpZGVyX25leHRcIj5cblx0PENoZXZyb25MZWZ0SWNvbiAvPlxuPC9kaXY+XG5cblxuPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4vLyBJbXBvcnQgU3dpcGVyIFZ1ZS5qcyBjb21wb25lbnRzXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSAnc3dpcGVyL3Z1ZSc7XG5cbi8vIEltcG9ydCBTd2lwZXIgc3R5bGVzXG5pbXBvcnQgJ3N3aXBlci9zd2lwZXIuc2Nzcyc7XG5cbmltcG9ydCBcInN3aXBlci9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5taW4uY3NzXCJcbmltcG9ydCBcInN3aXBlci9jb21wb25lbnRzL3RodW1icy90aHVtYnMubWluLmNzc1wiXG5cblxuXG4vLyBpbXBvcnQgU3dpcGVyIGNvcmUgYW5kIHJlcXVpcmVkIG1vZHVsZXNcbmltcG9ydCBTd2lwZXJDb3JlLCB7XG4gIE5hdmlnYXRpb24sVGh1bWJzXG59IGZyb20gJ3N3aXBlci9jb3JlJztcbmltcG9ydCB7XG5cdENoZXZyb25MZWZ0SWNvbixcblx0Q2hldnJvblJpZ2h0SWNvbixcbn0gZnJvbSAnQGhlcm9pY29ucy92dWUvb3V0bGluZSc7XG5cblxuLy8gaW5zdGFsbCBTd2lwZXIgbW9kdWxlc1xuU3dpcGVyQ29yZS51c2UoW05hdmlnYXRpb24sVGh1bWJzXSk7XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgU3dpcGVyLFxuICAgIFN3aXBlclNsaWRlLFxuXHRDaGV2cm9uTGVmdEljb24sXG5cdENoZXZyb25SaWdodEljb24sXG4gIH0sXG4gIGNyZWF0ZWQgKCkge1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnJlc2l6ZUV2ZW50KVxuICB9LFxuICB1bm1vdW50ZWQgKCkge1xuXHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnJlc2l6ZUV2ZW50KVxuICB9LFxuICBtb3VudGVkICgpIHtcblx0Y29uc29sZS5sb2codGhpcy50aHVtYnNTd2lwZXIpO1xuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRodW1ic1N3aXBlcjogbnVsbCxcblx0XHRtYWluSW1hZ2VTd2lwZXI6IG51bGwsXG5cdFx0bWF4X2hlaWdodF9kZXNjOiBcIjQwMHB4XCIsXG5cdFx0bWF4X2hlaWdodF9waG9uZTogXCI0MDBweFwiLFxuXHRcdGNoYW5nZV93aWR0aDogMTAyNCxcblx0XHR3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuXHRzZXRNYWluSW1hZ2VTd2lwZXIoc3dpcGVyKSB7XG5cdFx0dGhpcy5tYWluSW1hZ2VTd2lwZXIgPSBzd2lwZXI7XG5cdH0sXG5cdHJlc2l6ZUV2ZW50IChlKSB7XG5cdFx0dGhpcy53aWR0aCA9IGUudGFyZ2V0LmlubmVyV2lkdGg7XG5cdH0sXG5cdGdldFRodW1iRGlyZWN0aW9uKCkge1xuXHRcdGlmICh0aGlzLndpZHRoID49IHRoaXMuY2hhbmdlX3dpZHRoKSB7XG5cdFx0XHRyZXR1cm4gJ3ZlcnRpY2FsJztcblx0XHR9XG5cdFx0cmV0dXJuICdob3Jpem9udGFsJztcblx0fSxcbiAgICBzZXRUaHVtYnNTd2lwZXIoc3dpcGVyKSB7XG4gICAgICB0aGlzLnRodW1ic1N3aXBlciA9IHN3aXBlcjtcbiAgICB9LFxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG4ubWF4X2hfZGVzYyB7XG5cdG1heC1oZWlnaHQ6IHYtYmluZCgnbWF4X2hlaWdodF9kZXNjJyk7XG59XG4ubWF4X2hfcGhvbmUge1xuXHRtYXgtaGVpZ2h0OiB2LWJpbmQoJ21heF9oZWlnaHRfcGhvbmUnKTtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5wcm9kdWN0X3BhZ2VfaW1hZ2VzIHtcblx0ZGlzcGxheTogZmxleDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cdGhlaWdodDogMTAwJTtcbn1cblxuXG4ubXlTd2lwZXIyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLm15U3dpcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAlO1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbi5teVN3aXBlciAuc3dpcGVyLXNsaWRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogNTZweDtcbiAgbWF4LXdpZHRoOiA1NnB4O1xuICBwYWRkaW5nOiAycHg7XG4gIG9wYWNpdHk6IDAuNDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBpbWcge1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbn1cblxuLm15U3dpcGVyIC5zd2lwZXItc2xpZGUtdGh1bWItYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcbn1cblxuLnN3aXBlci1zbGlkZSBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuXHQucHJvZHVjdF9wYWdlX2ltYWdlcyB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuXHR9XG5cdC5teVN3aXBlciB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cblx0Lm15U3dpcGVyMiB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cbn1cblxuPC9zdHlsZT5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQTs7O0FBQ0E7OztBQWFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQW1CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFjQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTs7Ozs7Ozs7Ozs7OztBQTNEQTtBQUdBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYUE7QUFaQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOzs7O0FBQ0E7QUFFQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFEQTtBQUFBO0FBVEE7Ozs7QUFUQTs7QUFBQTtBQTBCQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBZUE7QUFkQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOzs7O0FBQ0E7QUFFQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFEQTtBQUFBO0FBWEE7Ozs7QUFQQTs7QUFBQTs7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPageImageContainer.vue?vue&type=template&id=d18c39b8\n");

/***/ })

})