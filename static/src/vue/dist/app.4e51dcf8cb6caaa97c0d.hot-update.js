webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPageImageContainer.vue?vue&type=template&id=d18c39b8":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/ProductPageImageContainer.vue?vue&type=template&id=d18c39b8 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nvar _hoisted_1 = {\n  class: \"relative lg:w-6/12 width-full max_h_desc product_page_images_wrapper\"\n};\nvar _hoisted_2 = {\n  class: \"relative product_page_images max_h_desc\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  var _this = this;\n\n  var _component_swiper_slide = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"swiper-slide\");\n\n  var _component_swiper = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"swiper\");\n\n  var _component_ChevronRightIcon = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"ChevronRightIcon\");\n\n  var _component_ChevronLeftIcon = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"ChevronLeftIcon\");\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\" width is \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(this.width) + \" thumb direction is \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(this.getThumbDirection()) + \" \", 1\n  /* TEXT */\n  ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_swiper, {\n    onSwiper: $options.setThumbsSwiper,\n    direction: this.getThumbDirection(),\n    spaceBetween: 6,\n    slidesPerView: 'auto',\n    freeMode: true,\n    watchSlidesVisibility: true,\n    watchSlidesProgress: true,\n    class: \"mySwiper\"\n  }, {\n    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n      return [(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderList\"])($props.product.images, function (image) {\n        return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(_component_swiper_slide, {\n          key: image.id\n        }, {\n          default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n            return [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"img\", {\n              src: _this.api_url + image.imgsrc\n            }, null, 8\n            /* PROPS */\n            , [\"src\"])];\n          }),\n          _: 2\n          /* DYNAMIC */\n\n        }, 1024\n        /* DYNAMIC_SLOTS */\n        );\n      }), 128\n      /* KEYED_FRAGMENT */\n      ))];\n    }),\n    _: 1\n    /* STABLE */\n\n  }, 8\n  /* PROPS */\n  , [\"onSwiper\", \"direction\"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_swiper, {\n    onSwiper: $options.setMainImageSwiper,\n    style: {\n      '--swiper-navigation-color': '#fff',\n      '--swiper-pagination-color': '#fff'\n    },\n    slidesPerView: 1,\n    spaceBetween: 10,\n    pagination: true,\n    thumbs: {\n      swiper: $data.thumbsSwiper\n    },\n    class: \"mySwiper2 max_h_desc\"\n  }, {\n    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n      return [(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderList\"])($props.product.images, function (image) {\n        return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(_component_swiper_slide, {\n          key: image.id\n        }, {\n          default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n            return [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"img\", {\n              class: \"\",\n              src: _this.api_url + image.imgsrc\n            }, null, 8\n            /* PROPS */\n            , [\"src\"])];\n          }),\n          _: 2\n          /* DYNAMIC */\n\n        }, 1024\n        /* DYNAMIC_SLOTS */\n        );\n      }), 128\n      /* KEYED_FRAGMENT */\n      )), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\", {\n        class: \"absolute right-0 z-10 block w-10 h-10 p-1 overflow-hidden bg-blue-600 rounded-full top-1/2\",\n        onClick: _cache[1] || (_cache[1] = function ($event) {\n          return _this.mainImageSwiper.slideNext();\n        })\n      }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_ChevronRightIcon, {\n        class: \"w-full h-full text-white\"\n      })]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\", {\n        class: \"absolute left-0 z-10 block w-10 h-10 p-1 overflow-hidden bg-blue-600 rounded-full top-1/2\",\n        onClick: _cache[2] || (_cache[2] = function ($event) {\n          return _this.mainImageSwiper.slidePrev();\n        })\n      }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_ChevronLeftIcon, {\n        class: \"w-full h-full text-white\"\n      })])];\n    }),\n    _: 1\n    /* STABLE */\n\n  }, 8\n  /* PROPS */\n  , [\"onSwiper\", \"thumbs\"])])])], 64\n  /* STABLE_FRAGMENT */\n  );\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0UGFnZUltYWdlQ29udGFpbmVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kMThjMzliOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RQYWdlSW1hZ2VDb250YWluZXIudnVlP2M5ZjAiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxud2lkdGggaXMge3sgdGhpcy53aWR0aCB9fVxudGh1bWIgZGlyZWN0aW9uIGlzIHt7IHRoaXMuZ2V0VGh1bWJEaXJlY3Rpb24oKSB9fVxuXG48ZGl2IGNsYXNzPVwicmVsYXRpdmUgbGc6dy02LzEyIHdpZHRoLWZ1bGwgbWF4X2hfZGVzYyBwcm9kdWN0X3BhZ2VfaW1hZ2VzX3dyYXBwZXJcIj5cbjxkaXYgY2xhc3M9XCJyZWxhdGl2ZSBwcm9kdWN0X3BhZ2VfaW1hZ2VzIG1heF9oX2Rlc2NcIj5cblxuXG4gIDxzd2lwZXJcbiAgQHN3aXBlcj1cInNldFRodW1ic1N3aXBlclwiXG4gIDpkaXJlY3Rpb249XCJ0aGlzLmdldFRodW1iRGlyZWN0aW9uKClcIlxuICA6c3BhY2VCZXR3ZWVuPVwiNlwiXG4gIDpzbGlkZXNQZXJWaWV3PVwiJ2F1dG8nXCJcbiAgOmZyZWVNb2RlPVwidHJ1ZVwiXG4gIDp3YXRjaFNsaWRlc1Zpc2liaWxpdHk9XCJ0cnVlXCJcbiAgOndhdGNoU2xpZGVzUHJvZ3Jlc3M9XCJ0cnVlXCJcbiAgY2xhc3M9XCJteVN3aXBlclwiPlxuXHQ8c3dpcGVyLXNsaWRlXG5cdHYtZm9yPVwiaW1hZ2UgaW4gcHJvZHVjdC5pbWFnZXNcIlxuXHQ6a2V5PVwiaW1hZ2UuaWRcIlxuXHQ+XG5cdFx0PGltZyA6c3JjPVwidGhpcy5hcGlfdXJsICsgaW1hZ2UuaW1nc3JjXCIgLz5cblx0PC9zd2lwZXItc2xpZGU+XG5cblx0PC9zd2lwZXI+XG5cblxuXG4gIDxzd2lwZXIgXG4gIEBzd2lwZXI9XCJzZXRNYWluSW1hZ2VTd2lwZXJcIlxuICA6c3R5bGU9XCJ7Jy0tc3dpcGVyLW5hdmlnYXRpb24tY29sb3InOiAnI2ZmZicsJy0tc3dpcGVyLXBhZ2luYXRpb24tY29sb3InOiAnI2ZmZid9XCIgXG4gIDpzbGlkZXNQZXJWaWV3PVwiMVwiXG4gIDpzcGFjZUJldHdlZW49XCIxMFwiIFxuICA6cGFnaW5hdGlvbj1cInRydWVcIlxuICA6dGh1bWJzPVwieyBzd2lwZXI6IHRodW1ic1N3aXBlciB9XCIgXG4gIGNsYXNzPVwibXlTd2lwZXIyIG1heF9oX2Rlc2NcIj5cblx0XHQ8c3dpcGVyLXNsaWRlXG5cdHYtZm9yPVwiaW1hZ2UgaW4gcHJvZHVjdC5pbWFnZXNcIlxuXHQ6a2V5PVwiaW1hZ2UuaWRcIlxuXHQ+XG5cdFx0PGltZyBcblx0XHRjbGFzcz1cIlwiXG5cdFx0OnNyYz1cInRoaXMuYXBpX3VybCArIGltYWdlLmltZ3NyY1wiIC8+XG5cdFx0PC9zd2lwZXItc2xpZGU+XG5cdFxuXG5cbjxzcGFuIGNsYXNzPVwiYWJzb2x1dGUgcmlnaHQtMCB6LTEwIGJsb2NrIHctMTAgaC0xMCBwLTEgb3ZlcmZsb3ctaGlkZGVuIGJnLWJsdWUtNjAwIHJvdW5kZWQtZnVsbCB0b3AtMS8yXCJcblx0QGNsaWNrPVwidGhpcy5tYWluSW1hZ2VTd2lwZXIuc2xpZGVOZXh0KClcIj5cblx0PENoZXZyb25SaWdodEljb24gY2xhc3M9XCJ3LWZ1bGwgaC1mdWxsIHRleHQtd2hpdGVcIi8+XG48L3NwYW4+XG5cbjxzcGFuIGNsYXNzPVwiYWJzb2x1dGUgbGVmdC0wIHotMTAgYmxvY2sgdy0xMCBoLTEwIHAtMSBvdmVyZmxvdy1oaWRkZW4gYmctYmx1ZS02MDAgcm91bmRlZC1mdWxsIHRvcC0xLzJcIlxuXHRAY2xpY2s9XCJ0aGlzLm1haW5JbWFnZVN3aXBlci5zbGlkZVByZXYoKVwiPlxuXHQ8Q2hldnJvbkxlZnRJY29uIGNsYXNzPVwidy1mdWxsIGgtZnVsbCB0ZXh0LXdoaXRlXCIvPlxuPC9zcGFuPlxuXG4gIDwvc3dpcGVyPlxuXG48L2Rpdj5cblxuXG5cbjwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuLy8gSW1wb3J0IFN3aXBlciBWdWUuanMgY29tcG9uZW50c1xuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gJ3N3aXBlci92dWUnO1xuXG4vLyBJbXBvcnQgU3dpcGVyIHN0eWxlc1xuaW1wb3J0ICdzd2lwZXIvc3dpcGVyLnNjc3MnO1xuXG5pbXBvcnQgXCJzd2lwZXIvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24ubWluLmNzc1wiXG5pbXBvcnQgXCJzd2lwZXIvY29tcG9uZW50cy90aHVtYnMvdGh1bWJzLm1pbi5jc3NcIlxuaW1wb3J0IFwic3dpcGVyL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLm1pbi5jc3NcIlxuXG5cblxuLy8gaW1wb3J0IFN3aXBlciBjb3JlIGFuZCByZXF1aXJlZCBtb2R1bGVzXG5pbXBvcnQgU3dpcGVyQ29yZSwge1xuICBOYXZpZ2F0aW9uLFRodW1icywgUGFnaW5hdGlvblx0XG59IGZyb20gJ3N3aXBlci9jb3JlJztcbmltcG9ydCB7XG5cdENoZXZyb25MZWZ0SWNvbixcblx0Q2hldnJvblJpZ2h0SWNvbixcbn0gZnJvbSAnQGhlcm9pY29ucy92dWUvb3V0bGluZSc7XG5cblxuLy8gaW5zdGFsbCBTd2lwZXIgbW9kdWxlc1xuU3dpcGVyQ29yZS51c2UoW05hdmlnYXRpb24sVGh1bWJzLCBQYWdpbmF0aW9uXSk7XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRuYW1lOiAnUHJvZHVjdFBhZ2VJbWFnZUNvbnRhaW5lcicsXG5cdHByb3BzOiBbJ3Byb2R1Y3QnXSxcbiAgY29tcG9uZW50czoge1xuICAgIFN3aXBlcixcbiAgICBTd2lwZXJTbGlkZSxcblx0Q2hldnJvbkxlZnRJY29uLFxuXHRDaGV2cm9uUmlnaHRJY29uLFxuICB9LFxuICBjcmVhdGVkICgpIHtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5yZXNpemVFdmVudClcbiAgfSxcbiAgdW5tb3VudGVkICgpIHtcblx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5yZXNpemVFdmVudClcbiAgfSxcbiAgbW91bnRlZCAoKSB7XG5cdGNvbnNvbGUubG9nKHRoaXMudGh1bWJzU3dpcGVyKTtcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aHVtYnNTd2lwZXI6IG51bGwsXG5cdFx0bWFpbkltYWdlU3dpcGVyOiBudWxsLFxuXHRcdG1heF9oZWlnaHRfZGVzYzogXCI2MDBweFwiLFxuXHRcdG1heF9oZWlnaHRfcGhvbmU6IFwiNDAwcHhcIixcblx0XHRjaGFuZ2Vfd2lkdGg6IDEwMjQsXG5cdFx0d2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG5cdGFwaV91cmwgKCkge1xuXHRcdHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5jb21tb24uYXBpX3VybDtcblx0fSxcbiAgfSxcbiAgbWV0aG9kczoge1xuXHRzZXRNYWluSW1hZ2VTd2lwZXIoc3dpcGVyKSB7XG5cdFx0dGhpcy5tYWluSW1hZ2VTd2lwZXIgPSBzd2lwZXI7XG5cdH0sXG5cdHJlc2l6ZUV2ZW50IChlKSB7XG5cdFx0dGhpcy53aWR0aCA9IGUudGFyZ2V0LmlubmVyV2lkdGg7XG5cdH0sXG5cdGdldFRodW1iRGlyZWN0aW9uKCkge1xuXHRcdGlmICh0aGlzLndpZHRoID49IHRoaXMuY2hhbmdlX3dpZHRoKSB7XG5cdFx0XHRyZXR1cm4gJ3ZlcnRpY2FsJztcblx0XHR9XG5cdFx0cmV0dXJuICdob3Jpem9udGFsJztcblx0fSxcbiAgICBzZXRUaHVtYnNTd2lwZXIoc3dpcGVyKSB7XG4gICAgICB0aGlzLnRodW1ic1N3aXBlciA9IHN3aXBlcjtcbiAgICB9LFxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG4ubWF4X2hfZGVzYyB7XG5cdG1heC1oZWlnaHQ6IHYtYmluZCgnbWF4X2hlaWdodF9kZXNjJyk7XG59XG4ubWF4X2hfcGhvbmUge1xuXHRtYXgtaGVpZ2h0OiB2LWJpbmQoJ21heF9oZWlnaHRfcGhvbmUnKTtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5wcm9kdWN0X3BhZ2VfaW1hZ2VzX3dyYXBwZXIge1xufVxuLnByb2R1Y3RfcGFnZV9pbWFnZXMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHRvcDogMDtcblx0bGVmdDogMDtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogbWF4LWNvbnRlbnQ7XG59XG5cblxuLm15U3dpcGVyMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIG9yYW5nZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm15U3dpcGVyMiAuc3dpcGVyLXNsaWRlIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGhlaWdodDogbWF4LWNvbnRlbnQ7XHRcblx0bWFyZ2luOiBhdXRvO1xuXHRib3JkZXI6IDRweCBzb2xpZCBncmVlbjtcblx0aW1nIHtcblx0fVxufVxuXG4ubXlTd2lwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMCU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm15U3dpcGVyIC5zd2lwZXItc2xpZGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogNTZweDtcbiAgbWF4LXdpZHRoOiA1NnB4O1xuICBwYWRkaW5nOiAycHg7XG4gIG9wYWNpdHk6IDAuNDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBpbWcge1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbn1cblxuLm15U3dpcGVyIC5zd2lwZXItc2xpZGUtdGh1bWItYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcbn1cblxuLnN3aXBlci1zbGlkZSBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcblx0LnByb2R1Y3RfcGFnZV9pbWFnZXMge1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcblx0fVxuXHQubXlTd2lwZXIge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogODBweDtcblx0XHRtYXgtaGVpZ2h0OiA4MHB4O1xuXHR9XG5cdC5teVN3aXBlcjIge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogbWF4LWNvbnRlbnQ7XG5cdFx0bWFyZ2luLWxlZnQ6IDBweDtcblx0fVxufVxuXG48L3N0eWxlPlxuIl0sIm1hcHBpbmdzIjoiOzs7OztBQUlBOzs7QUFDQTs7Ozs7Ozs7Ozs7OztBQUpBO0FBR0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQU5BO0FBQUE7QUFEQTtBQUVBO0FBR0E7QUFEQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7O0FBSkE7O0FBQUE7QUFLQTs7QUFMQTtBQUNBOzs7O0FBVkE7O0FBQUE7QUFxQkE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBc0JBO0FBcEJBO0FBQUE7QUFEQTtBQUVBO0FBS0E7QUFIQTtBQUFBO0FBQ0E7QUFDQTtBQUFBOztBQUZBO0FBQUE7Ozs7QUFKQTs7QUFBQTtBQU9BOztBQVBBO0FBV0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBREE7QUFBQTtBQWpCQTs7OztBQVRBOztBQUFBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPageImageContainer.vue?vue&type=template&id=d18c39b8\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPageImageContainer.vue?vue&type=style&index=0&id=d18c39b8&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/ProductPageImageContainer.vue?vue&type=style&index=0&id=d18c39b8&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".max_h_desc {\\n  max-height: var(--d18c39b8-max_height_desc);\\n}\\n.max_h_phone {\\n  max-height: var(--d18c39b8-max_height_phone);\\n}\\n.swiper-slide {\\n  background-size: cover;\\n  background-position: center;\\n}\\n.product_page_images_wrapper {\\n}\\n.product_page_images {\\n  display: flex;\\n  position: relative;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: -webkit-max-content;\\n  height: -moz-max-content;\\n  height: max-content;\\n}\\n.mySwiper2 {\\n  position: relative;\\n  width: 90%;\\n  margin-left: 10px;\\n  border: 3px solid orange;\\n  height: 100%;\\n}\\n.mySwiper2 .swiper-slide {\\n  display: flex;\\n  justify-content: center;\\n  height: -webkit-max-content;\\n  height: -moz-max-content;\\n  height: max-content;\\n  margin: auto;\\n  border: 4px solid green;\\nimg {\\n}\\n}\\n.mySwiper {\\n  height: 100%;\\n  width: 10%;\\n  padding: 10px 0;\\n  margin: auto;\\n  border: 2px solid red;\\n  text-align: center;\\n}\\n.mySwiper .swiper-slide {\\n  width: 100%;\\n  max-height: 56px;\\n  max-width: 56px;\\n  padding: 2px;\\n  opacity: 0.4;\\n  border-radius: 5px;\\nimg {\\n    border-radius: 5px;\\n}\\n}\\n.mySwiper .swiper-slide-thumb-active {\\n  opacity: 1;\\n  border: 2px solid blue;\\n}\\n.swiper-slide img {\\n  display: block;\\n  width: 100%;\\n  -o-object-fit: contain;\\n     object-fit: contain;\\n}\\n@media (max-width: 1024px) {\\n.product_page_images {\\n    flex-direction: column-reverse;\\n}\\n.mySwiper {\\n    width: 100%;\\n    height: 80px;\\n    max-height: 80px;\\n}\\n.mySwiper2 {\\n    width: 100%;\\n    height: -webkit-max-content;\\n    height: -moz-max-content;\\n    height: max-content;\\n    margin-left: 0px;\\n}\\n}\\n\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3QvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdFBhZ2VJbWFnZUNvbnRhaW5lci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kMThjMzliOCZsYW5nPWNzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RQYWdlSW1hZ2VDb250YWluZXIudnVlPzQzODQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tYXhfaF9kZXNjIHtcXG4gIG1heC1oZWlnaHQ6IHZhcigtLWQxOGMzOWI4LW1heF9oZWlnaHRfZGVzYyk7XFxufVxcbi5tYXhfaF9waG9uZSB7XFxuICBtYXgtaGVpZ2h0OiB2YXIoLS1kMThjMzliOC1tYXhfaGVpZ2h0X3Bob25lKTtcXG59XFxuLnN3aXBlci1zbGlkZSB7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG4ucHJvZHVjdF9wYWdlX2ltYWdlc193cmFwcGVyIHtcXG59XFxuLnByb2R1Y3RfcGFnZV9pbWFnZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogLXdlYmtpdC1tYXgtY29udGVudDtcXG4gIGhlaWdodDogLW1vei1tYXgtY29udGVudDtcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxufVxcbi5teVN3aXBlcjIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgYm9yZGVyOiAzcHggc29saWQgb3JhbmdlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ubXlTd2lwZXIyIC5zd2lwZXItc2xpZGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAtd2Via2l0LW1heC1jb250ZW50O1xcbiAgaGVpZ2h0OiAtbW96LW1heC1jb250ZW50O1xcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJvcmRlcjogNHB4IHNvbGlkIGdyZWVuO1xcbmltZyB7XFxufVxcbn1cXG4ubXlTd2lwZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwJTtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm15U3dpcGVyIC5zd2lwZXItc2xpZGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiA1NnB4O1xcbiAgbWF4LXdpZHRoOiA1NnB4O1xcbiAgcGFkZGluZzogMnB4O1xcbiAgb3BhY2l0eTogMC40O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbmltZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxufVxcbi5teVN3aXBlciAuc3dpcGVyLXNsaWRlLXRodW1iLWFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcXG59XFxuLnN3aXBlci1zbGlkZSBpbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIC1vLW9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuLnByb2R1Y3RfcGFnZV9pbWFnZXMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxufVxcbi5teVN3aXBlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDgwcHg7XFxufVxcbi5teVN3aXBlcjIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAtd2Via2l0LW1heC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IC1tb3otbWF4LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxufVxcbn1cXG5cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPageImageContainer.vue?vue&type=style&index=0&id=d18c39b8&lang=css\n");

/***/ })

})