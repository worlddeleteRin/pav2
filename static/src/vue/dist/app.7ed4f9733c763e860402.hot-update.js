webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPageImageContainer.vue?vue&type=template&id=d18c39b8":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/ProductPageImageContainer.vue?vue&type=template&id=d18c39b8 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nvar _hoisted_1 = {\n  class: \"relative border border-red-500 lg:w-6/12 width-full max_h_desc\"\n};\nvar _hoisted_2 = {\n  class: \"relative border-2 border-green-500 product_page_images max_h_desc\"\n};\n\nvar _hoisted_3 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"img\", {\n  src: \"https://swiperjs.com/demos/images/nature-1.jpg\"\n}, null, -1\n/* HOISTED */\n);\n\nvar _hoisted_4 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"img\", {\n  class: \"\",\n  src: \"https://swiperjs.com/demos/images/nature-1.jpg\"\n}, null, -1\n/* HOISTED */\n);\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  var _this = this;\n\n  var _component_swiper_slide = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"swiper-slide\");\n\n  var _component_swiper = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"swiper\");\n\n  var _component_ChevronRightIcon = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"ChevronRightIcon\");\n\n  var _component_ChevronLeftIcon = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"ChevronLeftIcon\");\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\" width is \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(this.width) + \" thumb direction is \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(this.getThumbDirection()) + \" \", 1\n  /* TEXT */\n  ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_swiper, {\n    onSwiper: $options.setThumbsSwiper,\n    direction: this.getThumbDirection(),\n    spaceBetween: 10,\n    slidesPerView: 4,\n    freeMode: true,\n    watchSlidesVisibility: true,\n    watchSlidesProgress: true,\n    class: \"mySwiper\"\n  }, {\n    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n      return [(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderList\"])(10, function (i) {\n        return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_swiper_slide, {\n          key: i\n        }, {\n          default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n            return [_hoisted_3];\n          }),\n          _: 2\n          /* DYNAMIC */\n\n        }, 1024\n        /* DYNAMIC_SLOTS */\n        );\n      }), 64\n      /* STABLE_FRAGMENT */\n      ))];\n    }),\n    _: 1\n    /* STABLE */\n\n  }, 8\n  /* PROPS */\n  , [\"onSwiper\", \"direction\"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_swiper, {\n    onSwiper: $options.setMainImageSwiper,\n    style: {\n      '--swiper-navigation-color': '#fff',\n      '--swiper-pagination-color': '#fff'\n    },\n    slidesPerView: 1,\n    spaceBetween: 10,\n    pagination: true,\n    thumbs: {\n      swiper: $data.thumbsSwiper\n    },\n    class: \"mySwiper2 max_h_desc\"\n  }, {\n    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n      return [(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderList\"])(10, function (i) {\n        return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_swiper_slide, {\n          key: i\n        }, {\n          default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n            return [_hoisted_4];\n          }),\n          _: 2\n          /* DYNAMIC */\n\n        }, 1024\n        /* DYNAMIC_SLOTS */\n        );\n      }), 64\n      /* STABLE_FRAGMENT */\n      )), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\", {\n        class: \"absolute right-0 z-10 block w-10 h-10 p-1 overflow-hidden bg-blue-600 rounded-full top-1/2\",\n        onClick: _cache[1] || (_cache[1] = function ($event) {\n          return _this.mainImageSwiper.slideNext();\n        })\n      }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_ChevronRightIcon, {\n        class: \"w-full h-full text-white\"\n      })]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\", {\n        class: \"absolute left-0 z-10 block w-10 h-10 p-1 overflow-hidden bg-blue-600 rounded-full top-1/2\",\n        onClick: _cache[2] || (_cache[2] = function ($event) {\n          return _this.mainImageSwiper.slidePrev();\n        })\n      }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_ChevronLeftIcon, {\n        class: \"w-full h-full text-white\"\n      })])];\n    }),\n    _: 1\n    /* STABLE */\n\n  }, 8\n  /* PROPS */\n  , [\"onSwiper\", \"thumbs\"])])])], 64\n  /* STABLE_FRAGMENT */\n  );\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0UGFnZUltYWdlQ29udGFpbmVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kMThjMzliOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RQYWdlSW1hZ2VDb250YWluZXIudnVlP2M5ZjAiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxud2lkdGggaXMge3sgdGhpcy53aWR0aCB9fVxudGh1bWIgZGlyZWN0aW9uIGlzIHt7IHRoaXMuZ2V0VGh1bWJEaXJlY3Rpb24oKSB9fVxuXG48ZGl2IGNsYXNzPVwicmVsYXRpdmUgYm9yZGVyIGJvcmRlci1yZWQtNTAwIGxnOnctNi8xMiB3aWR0aC1mdWxsIG1heF9oX2Rlc2NcIj5cbjxkaXYgY2xhc3M9XCJyZWxhdGl2ZSBib3JkZXItMiBib3JkZXItZ3JlZW4tNTAwIHByb2R1Y3RfcGFnZV9pbWFnZXMgbWF4X2hfZGVzY1wiPlxuXG5cbiAgPHN3aXBlclxuICBAc3dpcGVyPVwic2V0VGh1bWJzU3dpcGVyXCJcbiAgOmRpcmVjdGlvbj1cInRoaXMuZ2V0VGh1bWJEaXJlY3Rpb24oKVwiXG4gIDpzcGFjZUJldHdlZW49XCIxMFwiXG4gIDpzbGlkZXNQZXJWaWV3PVwiNFwiXG4gIDpmcmVlTW9kZT1cInRydWVcIlxuICA6d2F0Y2hTbGlkZXNWaXNpYmlsaXR5PVwidHJ1ZVwiXG4gIDp3YXRjaFNsaWRlc1Byb2dyZXNzPVwidHJ1ZVwiXG4gIGNsYXNzPVwibXlTd2lwZXJcIj5cblx0PHN3aXBlci1zbGlkZVxuXHR2LWZvcj1cImkgaW4gMTBcIlxuXHQ6a2V5PVwiaVwiXG5cdD5cblx0XHQ8aW1nIHNyYz1cImh0dHBzOi8vc3dpcGVyanMuY29tL2RlbW9zL2ltYWdlcy9uYXR1cmUtMS5qcGdcIiAvPlxuXHQ8L3N3aXBlci1zbGlkZT5cblxuXHQ8L3N3aXBlcj5cblxuXG5cbiAgPHN3aXBlciBcbiAgQHN3aXBlcj1cInNldE1haW5JbWFnZVN3aXBlclwiXG4gIDpzdHlsZT1cInsnLS1zd2lwZXItbmF2aWdhdGlvbi1jb2xvcic6ICcjZmZmJywnLS1zd2lwZXItcGFnaW5hdGlvbi1jb2xvcic6ICcjZmZmJ31cIiBcbiAgOnNsaWRlc1BlclZpZXc9XCIxXCJcbiAgOnNwYWNlQmV0d2Vlbj1cIjEwXCIgXG4gIDpwYWdpbmF0aW9uPVwidHJ1ZVwiXG4gIDp0aHVtYnM9XCJ7IHN3aXBlcjogdGh1bWJzU3dpcGVyIH1cIiBcbiAgY2xhc3M9XCJteVN3aXBlcjIgbWF4X2hfZGVzY1wiPlxuXHRcdDxzd2lwZXItc2xpZGVcblx0di1mb3I9XCJpIGluIDEwXCJcblx0OmtleT1cImlcIlxuXHQ+XG5cdFx0PGltZyBcblx0XHRjbGFzcz1cIlwiXG5cdFx0c3JjPVwiaHR0cHM6Ly9zd2lwZXJqcy5jb20vZGVtb3MvaW1hZ2VzL25hdHVyZS0xLmpwZ1wiIC8+XG5cdDwvc3dpcGVyLXNsaWRlPlxuXHRcblxuXG48c3BhbiBjbGFzcz1cImFic29sdXRlIHJpZ2h0LTAgei0xMCBibG9jayB3LTEwIGgtMTAgcC0xIG92ZXJmbG93LWhpZGRlbiBiZy1ibHVlLTYwMCByb3VuZGVkLWZ1bGwgdG9wLTEvMlwiXG5cdEBjbGljaz1cInRoaXMubWFpbkltYWdlU3dpcGVyLnNsaWRlTmV4dCgpXCI+XG5cdDxDaGV2cm9uUmlnaHRJY29uIGNsYXNzPVwidy1mdWxsIGgtZnVsbCB0ZXh0LXdoaXRlXCIvPlxuPC9zcGFuPlxuXG48c3BhbiBjbGFzcz1cImFic29sdXRlIGxlZnQtMCB6LTEwIGJsb2NrIHctMTAgaC0xMCBwLTEgb3ZlcmZsb3ctaGlkZGVuIGJnLWJsdWUtNjAwIHJvdW5kZWQtZnVsbCB0b3AtMS8yXCJcblx0QGNsaWNrPVwidGhpcy5tYWluSW1hZ2VTd2lwZXIuc2xpZGVQcmV2KClcIj5cblx0PENoZXZyb25MZWZ0SWNvbiBjbGFzcz1cInctZnVsbCBoLWZ1bGwgdGV4dC13aGl0ZVwiLz5cbjwvc3Bhbj5cblxuICA8L3N3aXBlcj5cblxuPC9kaXY+XG5cblxuXG48L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbi8vIEltcG9ydCBTd2lwZXIgVnVlLmpzIGNvbXBvbmVudHNcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvdnVlJztcblxuLy8gSW1wb3J0IFN3aXBlciBzdHlsZXNcbmltcG9ydCAnc3dpcGVyL3N3aXBlci5zY3NzJztcblxuaW1wb3J0IFwic3dpcGVyL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLm1pbi5jc3NcIlxuaW1wb3J0IFwic3dpcGVyL2NvbXBvbmVudHMvdGh1bWJzL3RodW1icy5taW4uY3NzXCJcbmltcG9ydCBcInN3aXBlci9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5taW4uY3NzXCJcblxuXG5cbi8vIGltcG9ydCBTd2lwZXIgY29yZSBhbmQgcmVxdWlyZWQgbW9kdWxlc1xuaW1wb3J0IFN3aXBlckNvcmUsIHtcbiAgTmF2aWdhdGlvbixUaHVtYnMsIFBhZ2luYXRpb25cdFxufSBmcm9tICdzd2lwZXIvY29yZSc7XG5pbXBvcnQge1xuXHRDaGV2cm9uTGVmdEljb24sXG5cdENoZXZyb25SaWdodEljb24sXG59IGZyb20gJ0BoZXJvaWNvbnMvdnVlL291dGxpbmUnO1xuXG5cbi8vIGluc3RhbGwgU3dpcGVyIG1vZHVsZXNcblN3aXBlckNvcmUudXNlKFtOYXZpZ2F0aW9uLFRodW1icywgUGFnaW5hdGlvbl0pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIFN3aXBlcixcbiAgICBTd2lwZXJTbGlkZSxcblx0Q2hldnJvbkxlZnRJY29uLFxuXHRDaGV2cm9uUmlnaHRJY29uLFxuICB9LFxuICBjcmVhdGVkICgpIHtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5yZXNpemVFdmVudClcbiAgfSxcbiAgdW5tb3VudGVkICgpIHtcblx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5yZXNpemVFdmVudClcbiAgfSxcbiAgbW91bnRlZCAoKSB7XG5cdGNvbnNvbGUubG9nKHRoaXMudGh1bWJzU3dpcGVyKTtcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aHVtYnNTd2lwZXI6IG51bGwsXG5cdFx0bWFpbkltYWdlU3dpcGVyOiBudWxsLFxuXHRcdG1heF9oZWlnaHRfZGVzYzogXCI2MDBweFwiLFxuXHRcdG1heF9oZWlnaHRfcGhvbmU6IFwiNDAwcHhcIixcblx0XHRjaGFuZ2Vfd2lkdGg6IDEwMjQsXG5cdFx0d2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcblx0c2V0TWFpbkltYWdlU3dpcGVyKHN3aXBlcikge1xuXHRcdHRoaXMubWFpbkltYWdlU3dpcGVyID0gc3dpcGVyO1xuXHR9LFxuXHRyZXNpemVFdmVudCAoZSkge1xuXHRcdHRoaXMud2lkdGggPSBlLnRhcmdldC5pbm5lcldpZHRoO1xuXHR9LFxuXHRnZXRUaHVtYkRpcmVjdGlvbigpIHtcblx0XHRpZiAodGhpcy53aWR0aCA+PSB0aGlzLmNoYW5nZV93aWR0aCkge1xuXHRcdFx0cmV0dXJuICd2ZXJ0aWNhbCc7XG5cdFx0fVxuXHRcdHJldHVybiAnaG9yaXpvbnRhbCc7XG5cdH0sXG4gICAgc2V0VGh1bWJzU3dpcGVyKHN3aXBlcikge1xuICAgICAgdGhpcy50aHVtYnNTd2lwZXIgPSBzd2lwZXI7XG4gICAgfSxcbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuLm1heF9oX2Rlc2Mge1xuXHRtYXgtaGVpZ2h0OiB2LWJpbmQoJ21heF9oZWlnaHRfZGVzYycpO1xufVxuLm1heF9oX3Bob25lIHtcblx0bWF4LWhlaWdodDogdi1iaW5kKCdtYXhfaGVpZ2h0X3Bob25lJyk7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ucHJvZHVjdF9wYWdlX2ltYWdlcyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xufVxuXG5cbi5teVN3aXBlcjIge1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5teVN3aXBlcjIgLnN3aXBlci1zbGlkZSB7XG5cdGJvcmRlcjogNHB4IHNvbGlkIG9yYW5nZTtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGhlaWdodDogOTAlO1x0XG5cdG1hcmdpbjogYXV0bztcbn1cblxuLm15U3dpcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAlO1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbi5teVN3aXBlciAuc3dpcGVyLXNsaWRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDU2cHg7XG4gIG1heC13aWR0aDogNTZweDtcbiAgcGFkZGluZzogMnB4O1xuICBvcGFjaXR5OiAwLjQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaW1nIHtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuICB9XG59XG5cbi5teVN3aXBlciAuc3dpcGVyLXNsaWRlLXRodW1iLWFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XG59XG5cbi5zd2lwZXItc2xpZGUgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cdC5wcm9kdWN0X3BhZ2VfaW1hZ2VzIHtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG5cdH1cblx0Lm15U3dpcGVyIHtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxuXHQubXlTd2lwZXIyIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXJnaW4tbGVmdDogMHB4O1xuXHR9XG59XG5cbjwvc3R5bGU+XG4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUE7OztBQUNBOzs7QUFnQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBQUFBOztBQUZBO0FBQ0E7Ozs7Ozs7Ozs7OztBQXhDQTtBQUdBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFOQTtBQUFBO0FBREE7QUFFQTtBQUdBO0FBREE7QUFBQTtBQUFBOzs7O0FBRkE7O0FBRkE7QUFLQTs7QUFMQTtBQUNBOzs7O0FBVkE7O0FBQUE7QUFxQkE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBc0JBO0FBcEJBO0FBQUE7QUFEQTtBQUVBO0FBS0E7QUFIQTtBQUFBO0FBQUE7Ozs7QUFGQTs7QUFGQTtBQU9BOztBQVBBO0FBV0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBREE7QUFBQTtBQWpCQTs7OztBQVRBOztBQUFBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPageImageContainer.vue?vue&type=template&id=d18c39b8\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPageImageContainer.vue?vue&type=style&index=0&id=d18c39b8&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/ProductPageImageContainer.vue?vue&type=style&index=0&id=d18c39b8&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".max_h_desc {\\n  max-height: var(--d18c39b8-max_height_desc);\\n}\\n.max_h_phone {\\n  max-height: var(--d18c39b8-max_height_phone);\\n}\\n.swiper-slide {\\n  background-size: cover;\\n  background-position: center;\\n}\\n.product_page_images {\\n  display: flex;\\n  position: relative;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n}\\n.mySwiper2 {\\n  border: 2px solid black;\\n  position: relative;\\n  width: 90%;\\n  margin-left: 10px;\\n}\\n.mySwiper2 .swiper-slide {\\n  border: 4px solid orange;\\n  display: flex;\\n  justify-content: center;\\n  height: 90%;\\n  margin: auto;\\n}\\n.mySwiper {\\n  height: 100%;\\n  width: 10%;\\n  padding: 10px 0;\\n}\\n.mySwiper .swiper-slide {\\n  width: 100%;\\n  max-height: 56px;\\n  max-width: 56px;\\n  padding: 2px;\\n  opacity: 0.4;\\n  border-radius: 5px;\\nimg {\\n    border-radius: 5px;\\n}\\n}\\n.mySwiper .swiper-slide-thumb-active {\\n  opacity: 1;\\n  border: 2px solid blue;\\n}\\n.swiper-slide img {\\n  display: block;\\n  width: 100%;\\n  -o-object-fit: contain;\\n     object-fit: contain;\\n}\\n@media (max-width: 1024px) {\\n.product_page_images {\\n    flex-direction: column-reverse;\\n}\\n.mySwiper {\\n    width: 100%;\\n}\\n.mySwiper2 {\\n    width: 100%;\\n    margin-left: 0px;\\n}\\n}\\n\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3QvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdFBhZ2VJbWFnZUNvbnRhaW5lci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kMThjMzliOCZsYW5nPWNzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RQYWdlSW1hZ2VDb250YWluZXIudnVlPzQzODQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tYXhfaF9kZXNjIHtcXG4gIG1heC1oZWlnaHQ6IHZhcigtLWQxOGMzOWI4LW1heF9oZWlnaHRfZGVzYyk7XFxufVxcbi5tYXhfaF9waG9uZSB7XFxuICBtYXgtaGVpZ2h0OiB2YXIoLS1kMThjMzliOC1tYXhfaGVpZ2h0X3Bob25lKTtcXG59XFxuLnN3aXBlci1zbGlkZSB7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG4ucHJvZHVjdF9wYWdlX2ltYWdlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ubXlTd2lwZXIyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG4ubXlTd2lwZXIyIC5zd2lwZXItc2xpZGUge1xcbiAgYm9yZGVyOiA0cHggc29saWQgb3JhbmdlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBtYXJnaW46IGF1dG87XFxufVxcbi5teVN3aXBlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAlO1xcbiAgcGFkZGluZzogMTBweCAwO1xcbn1cXG4ubXlTd2lwZXIgLnN3aXBlci1zbGlkZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDU2cHg7XFxuICBtYXgtd2lkdGg6IDU2cHg7XFxuICBwYWRkaW5nOiAycHg7XFxuICBvcGFjaXR5OiAwLjQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuaW1nIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG59XFxuLm15U3dpcGVyIC5zd2lwZXItc2xpZGUtdGh1bWItYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbn1cXG4uc3dpcGVyLXNsaWRlIGltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLW8tb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4ucHJvZHVjdF9wYWdlX2ltYWdlcyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG59XFxuLm15U3dpcGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5teVN3aXBlcjIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcXG59XFxufVxcblxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPageImageContainer.vue?vue&type=style&index=0&id=d18c39b8&lang=css\n");

/***/ })

})