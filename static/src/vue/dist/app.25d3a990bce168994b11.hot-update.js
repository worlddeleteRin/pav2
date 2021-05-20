webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPageImageContainer.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/ProductPageImageContainer.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var swiper_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/vue */ \"./node_modules/swiper/swiper-vue.esm.js\");\n/* harmony import */ var swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/swiper.scss */ \"./node_modules/swiper/swiper.scss\");\n/* harmony import */ var swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_components_navigation_navigation_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/components/navigation/navigation.min.css */ \"./node_modules/swiper/components/navigation/navigation.min.css\");\n/* harmony import */ var swiper_components_navigation_navigation_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_components_navigation_navigation_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swiper_components_thumbs_thumbs_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/components/thumbs/thumbs.min.css */ \"./node_modules/swiper/components/thumbs/thumbs.min.css\");\n/* harmony import */ var swiper_components_thumbs_thumbs_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_components_thumbs_thumbs_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swiper_components_pagination_pagination_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/components/pagination/pagination.min.css */ \"./node_modules/swiper/components/pagination/pagination.min.css\");\n/* harmony import */ var swiper_components_pagination_pagination_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_components_pagination_pagination_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/core */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/vue/outline */ \"./node_modules/@heroicons/vue/outline/esm/index.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n// Import Swiper Vue.js components\n // Import Swiper styles\n\n\n\n\n // import Swiper core and required modules\n\n\n // install Swiper modules\n\nswiper_core__WEBPACK_IMPORTED_MODULE_5__[\"default\"].use([swiper_core__WEBPACK_IMPORTED_MODULE_5__[\"Navigation\"], swiper_core__WEBPACK_IMPORTED_MODULE_5__[\"Thumbs\"], swiper_core__WEBPACK_IMPORTED_MODULE_5__[\"Pagination\"]]);\nvar __default__ = {\n  name: 'ProductPageImageContainer',\n  props: ['product'],\n  components: {\n    Swiper: swiper_vue__WEBPACK_IMPORTED_MODULE_0__[\"Swiper\"],\n    SwiperSlide: swiper_vue__WEBPACK_IMPORTED_MODULE_0__[\"SwiperSlide\"],\n    ChevronLeftIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_6__[\"ChevronLeftIcon\"],\n    ChevronRightIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_6__[\"ChevronRightIcon\"]\n  },\n  created: function created() {\n    window.addEventListener(\"resize\", this.resizeEvent);\n  },\n  unmounted: function unmounted() {\n    window.removeEventListener(\"resize\", this.resizeEvent);\n  },\n  mounted: function mounted() {\n    console.log(this.thumbsSwiper);\n  },\n  data: function data() {\n    return {\n      thumbsSwiper: null,\n      mainImageSwiper: null,\n      max_height_desc: \"600px\",\n      max_height_phone: \"400px\",\n      change_width: 1024,\n      width: window.innerWidth\n    };\n  },\n  computed: {\n    api_url: function api_url() {\n      return this.$store.state.common.api_url;\n    }\n  },\n  methods: {\n    setMainImageSwiper: function setMainImageSwiper(swiper) {\n      this.mainImageSwiper = swiper;\n    },\n    resizeEvent: function resizeEvent(e) {\n      this.width = e.target.innerWidth;\n    },\n    getThumbDirection: function getThumbDirection() {\n      if (this.width >= this.change_width) {\n        return 'vertical';\n      }\n\n      return 'horizontal';\n    },\n    setThumbsSwiper: function setThumbsSwiper(swiper) {\n      this.thumbsSwiper = swiper;\n    }\n  }\n};\n\n\nvar __injectCSSVars__ = function __injectCSSVars__() {\n  Object(vue__WEBPACK_IMPORTED_MODULE_7__[\"useCssVars\"])(function (_ctx) {\n    return {\n      \"d18c39b8-max_height_desc\": _ctx.max_height_desc,\n      \"d18c39b8-max_height_phone\": _ctx.max_height_phone\n    };\n  });\n};\n\nvar __setup__ = __default__.setup;\n__default__.setup = __setup__ ? function (props, ctx) {\n  __injectCSSVars__();\n\n  return __setup__(props, ctx);\n} : __injectCSSVars__;\n/* harmony default export */ __webpack_exports__[\"default\"] = (__default__);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0UGFnZUltYWdlQ29udGFpbmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RQYWdlSW1hZ2VDb250YWluZXIudnVlP2M5ZjAiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxud2lkdGggaXMge3sgdGhpcy53aWR0aCB9fVxudGh1bWIgZGlyZWN0aW9uIGlzIHt7IHRoaXMuZ2V0VGh1bWJEaXJlY3Rpb24oKSB9fVxuXG48ZGl2IGNsYXNzPVwicmVsYXRpdmUgbGc6dy02LzEyIHdpZHRoLWZ1bGwgbWF4X2hfZGVzY1wiPlxuPGRpdiBjbGFzcz1cInJlbGF0aXZlIHByb2R1Y3RfcGFnZV9pbWFnZXMgbWF4X2hfZGVzY1wiPlxuXG5cbiAgPHN3aXBlclxuICBAc3dpcGVyPVwic2V0VGh1bWJzU3dpcGVyXCJcbiAgOmRpcmVjdGlvbj1cInRoaXMuZ2V0VGh1bWJEaXJlY3Rpb24oKVwiXG4gIDpzcGFjZUJldHdlZW49XCI2XCJcbiAgOnNsaWRlc1BlclZpZXc9XCInYXV0bydcIlxuICA6ZnJlZU1vZGU9XCJ0cnVlXCJcbiAgOndhdGNoU2xpZGVzVmlzaWJpbGl0eT1cInRydWVcIlxuICA6d2F0Y2hTbGlkZXNQcm9ncmVzcz1cInRydWVcIlxuICBjbGFzcz1cIm15U3dpcGVyXCI+XG5cdDxzd2lwZXItc2xpZGVcblx0di1mb3I9XCJpbWFnZSBpbiBwcm9kdWN0LmltYWdlc1wiXG5cdDprZXk9XCJpbWFnZS5pZFwiXG5cdD5cblx0XHQ8aW1nIDpzcmM9XCJ0aGlzLmFwaV91cmwgKyBpbWFnZS5pbWdzcmNcIiAvPlxuXHQ8L3N3aXBlci1zbGlkZT5cblxuXHQ8L3N3aXBlcj5cblxuXG5cbiAgPHN3aXBlciBcbiAgQHN3aXBlcj1cInNldE1haW5JbWFnZVN3aXBlclwiXG4gIDpzdHlsZT1cInsnLS1zd2lwZXItbmF2aWdhdGlvbi1jb2xvcic6ICcjZmZmJywnLS1zd2lwZXItcGFnaW5hdGlvbi1jb2xvcic6ICcjZmZmJ31cIiBcbiAgOnNsaWRlc1BlclZpZXc9XCIxXCJcbiAgOnNwYWNlQmV0d2Vlbj1cIjEwXCIgXG4gIDpwYWdpbmF0aW9uPVwidHJ1ZVwiXG4gIDp0aHVtYnM9XCJ7IHN3aXBlcjogdGh1bWJzU3dpcGVyIH1cIiBcbiAgY2xhc3M9XCJteVN3aXBlcjIgbWF4X2hfZGVzY1wiPlxuXHRcdDxzd2lwZXItc2xpZGVcblx0di1mb3I9XCJpIGluIDEwXCJcblx0OmtleT1cImlcIlxuXHQ+XG5cdFx0PGltZyBcblx0XHRjbGFzcz1cIlwiXG5cdFx0c3JjPVwiaHR0cHM6Ly9zd2lwZXJqcy5jb20vZGVtb3MvaW1hZ2VzL25hdHVyZS0xLmpwZ1wiIC8+XG5cdDwvc3dpcGVyLXNsaWRlPlxuXHRcblxuXG48c3BhbiBjbGFzcz1cImFic29sdXRlIHJpZ2h0LTAgei0xMCBibG9jayB3LTEwIGgtMTAgcC0xIG92ZXJmbG93LWhpZGRlbiBiZy1ibHVlLTYwMCByb3VuZGVkLWZ1bGwgdG9wLTEvMlwiXG5cdEBjbGljaz1cInRoaXMubWFpbkltYWdlU3dpcGVyLnNsaWRlTmV4dCgpXCI+XG5cdDxDaGV2cm9uUmlnaHRJY29uIGNsYXNzPVwidy1mdWxsIGgtZnVsbCB0ZXh0LXdoaXRlXCIvPlxuPC9zcGFuPlxuXG48c3BhbiBjbGFzcz1cImFic29sdXRlIGxlZnQtMCB6LTEwIGJsb2NrIHctMTAgaC0xMCBwLTEgb3ZlcmZsb3ctaGlkZGVuIGJnLWJsdWUtNjAwIHJvdW5kZWQtZnVsbCB0b3AtMS8yXCJcblx0QGNsaWNrPVwidGhpcy5tYWluSW1hZ2VTd2lwZXIuc2xpZGVQcmV2KClcIj5cblx0PENoZXZyb25MZWZ0SWNvbiBjbGFzcz1cInctZnVsbCBoLWZ1bGwgdGV4dC13aGl0ZVwiLz5cbjwvc3Bhbj5cblxuICA8L3N3aXBlcj5cblxuPC9kaXY+XG5cblxuXG48L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbi8vIEltcG9ydCBTd2lwZXIgVnVlLmpzIGNvbXBvbmVudHNcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvdnVlJztcblxuLy8gSW1wb3J0IFN3aXBlciBzdHlsZXNcbmltcG9ydCAnc3dpcGVyL3N3aXBlci5zY3NzJztcblxuaW1wb3J0IFwic3dpcGVyL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLm1pbi5jc3NcIlxuaW1wb3J0IFwic3dpcGVyL2NvbXBvbmVudHMvdGh1bWJzL3RodW1icy5taW4uY3NzXCJcbmltcG9ydCBcInN3aXBlci9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5taW4uY3NzXCJcblxuXG5cbi8vIGltcG9ydCBTd2lwZXIgY29yZSBhbmQgcmVxdWlyZWQgbW9kdWxlc1xuaW1wb3J0IFN3aXBlckNvcmUsIHtcbiAgTmF2aWdhdGlvbixUaHVtYnMsIFBhZ2luYXRpb25cdFxufSBmcm9tICdzd2lwZXIvY29yZSc7XG5pbXBvcnQge1xuXHRDaGV2cm9uTGVmdEljb24sXG5cdENoZXZyb25SaWdodEljb24sXG59IGZyb20gJ0BoZXJvaWNvbnMvdnVlL291dGxpbmUnO1xuXG5cbi8vIGluc3RhbGwgU3dpcGVyIG1vZHVsZXNcblN3aXBlckNvcmUudXNlKFtOYXZpZ2F0aW9uLFRodW1icywgUGFnaW5hdGlvbl0pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ1Byb2R1Y3RQYWdlSW1hZ2VDb250YWluZXInLFxuXHRwcm9wczogWydwcm9kdWN0J10sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBTd2lwZXIsXG4gICAgU3dpcGVyU2xpZGUsXG5cdENoZXZyb25MZWZ0SWNvbixcblx0Q2hldnJvblJpZ2h0SWNvbixcbiAgfSxcbiAgY3JlYXRlZCAoKSB7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMucmVzaXplRXZlbnQpXG4gIH0sXG4gIHVubW91bnRlZCAoKSB7XG5cdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMucmVzaXplRXZlbnQpXG4gIH0sXG4gIG1vdW50ZWQgKCkge1xuXHRjb25zb2xlLmxvZyh0aGlzLnRodW1ic1N3aXBlcik7XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGh1bWJzU3dpcGVyOiBudWxsLFxuXHRcdG1haW5JbWFnZVN3aXBlcjogbnVsbCxcblx0XHRtYXhfaGVpZ2h0X2Rlc2M6IFwiNjAwcHhcIixcblx0XHRtYXhfaGVpZ2h0X3Bob25lOiBcIjQwMHB4XCIsXG5cdFx0Y2hhbmdlX3dpZHRoOiAxMDI0LFxuXHRcdHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuXHRhcGlfdXJsICgpIHtcblx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuY29tbW9uLmFwaV91cmw7XG5cdH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcblx0c2V0TWFpbkltYWdlU3dpcGVyKHN3aXBlcikge1xuXHRcdHRoaXMubWFpbkltYWdlU3dpcGVyID0gc3dpcGVyO1xuXHR9LFxuXHRyZXNpemVFdmVudCAoZSkge1xuXHRcdHRoaXMud2lkdGggPSBlLnRhcmdldC5pbm5lcldpZHRoO1xuXHR9LFxuXHRnZXRUaHVtYkRpcmVjdGlvbigpIHtcblx0XHRpZiAodGhpcy53aWR0aCA+PSB0aGlzLmNoYW5nZV93aWR0aCkge1xuXHRcdFx0cmV0dXJuICd2ZXJ0aWNhbCc7XG5cdFx0fVxuXHRcdHJldHVybiAnaG9yaXpvbnRhbCc7XG5cdH0sXG4gICAgc2V0VGh1bWJzU3dpcGVyKHN3aXBlcikge1xuICAgICAgdGhpcy50aHVtYnNTd2lwZXIgPSBzd2lwZXI7XG4gICAgfSxcbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuLm1heF9oX2Rlc2Mge1xuXHRtYXgtaGVpZ2h0OiB2LWJpbmQoJ21heF9oZWlnaHRfZGVzYycpO1xufVxuLm1heF9oX3Bob25lIHtcblx0bWF4LWhlaWdodDogdi1iaW5kKCdtYXhfaGVpZ2h0X3Bob25lJyk7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ucHJvZHVjdF9wYWdlX2ltYWdlcyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xufVxuXG5cbi5teVN3aXBlcjIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLm15U3dpcGVyMiAuc3dpcGVyLXNsaWRlIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGhlaWdodDogOTAlO1x0XG5cdG1hcmdpbjogYXV0bztcbn1cblxuLm15U3dpcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAlO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5teVN3aXBlciAuc3dpcGVyLXNsaWRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDU2cHg7XG4gIG1heC13aWR0aDogNTZweDtcbiAgcGFkZGluZzogMnB4O1xuICBvcGFjaXR5OiAwLjQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaW1nIHtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuICB9XG59XG5cbi5teVN3aXBlciAuc3dpcGVyLXNsaWRlLXRodW1iLWFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XG59XG5cbi5zd2lwZXItc2xpZGUgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cdC5wcm9kdWN0X3BhZ2VfaW1hZ2VzIHtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG5cdH1cblx0Lm15U3dpcGVyIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXgtaGVpZ2h0OiA4MHB4O1xuXHR9XG5cdC5teVN3aXBlcjIge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHRtYXJnaW4tbGVmdDogMHB4O1xuXHR9XG59XG5cbjwvc3R5bGU+XG4iXSwibWFwcGluZ3MiOiJBQW9FQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFNQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQWpDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPageImageContainer.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPageImageContainer.vue?vue&type=template&id=d18c39b8":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/ProductPageImageContainer.vue?vue&type=template&id=d18c39b8 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nvar _hoisted_1 = {\n  class: \"relative lg:w-6/12 width-full max_h_desc\"\n};\nvar _hoisted_2 = {\n  class: \"relative product_page_images max_h_desc\"\n};\n\nvar _hoisted_3 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"img\", {\n  class: \"\",\n  src: \"https://swiperjs.com/demos/images/nature-1.jpg\"\n}, null, -1\n/* HOISTED */\n);\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  var _this = this;\n\n  var _component_swiper_slide = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"swiper-slide\");\n\n  var _component_swiper = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"swiper\");\n\n  var _component_ChevronRightIcon = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"ChevronRightIcon\");\n\n  var _component_ChevronLeftIcon = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"ChevronLeftIcon\");\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\" width is \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(this.width) + \" thumb direction is \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(this.getThumbDirection()) + \" \", 1\n  /* TEXT */\n  ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_swiper, {\n    onSwiper: $options.setThumbsSwiper,\n    direction: this.getThumbDirection(),\n    spaceBetween: 6,\n    slidesPerView: 'auto',\n    freeMode: true,\n    watchSlidesVisibility: true,\n    watchSlidesProgress: true,\n    class: \"mySwiper\"\n  }, {\n    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n      return [(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderList\"])($props.product.images, function (image) {\n        return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(_component_swiper_slide, {\n          key: image.id\n        }, {\n          default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n            return [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"img\", {\n              src: _this.api_url + image.imgsrc\n            }, null, 8\n            /* PROPS */\n            , [\"src\"])];\n          }),\n          _: 2\n          /* DYNAMIC */\n\n        }, 1024\n        /* DYNAMIC_SLOTS */\n        );\n      }), 128\n      /* KEYED_FRAGMENT */\n      ))];\n    }),\n    _: 1\n    /* STABLE */\n\n  }, 8\n  /* PROPS */\n  , [\"onSwiper\", \"direction\"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_swiper, {\n    onSwiper: $options.setMainImageSwiper,\n    style: {\n      '--swiper-navigation-color': '#fff',\n      '--swiper-pagination-color': '#fff'\n    },\n    slidesPerView: 1,\n    spaceBetween: 10,\n    pagination: true,\n    thumbs: {\n      swiper: $data.thumbsSwiper\n    },\n    class: \"mySwiper2 max_h_desc\"\n  }, {\n    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n      return [(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderList\"])(10, function (i) {\n        return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_swiper_slide, {\n          key: i\n        }, {\n          default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n            return [_hoisted_3];\n          }),\n          _: 2\n          /* DYNAMIC */\n\n        }, 1024\n        /* DYNAMIC_SLOTS */\n        );\n      }), 64\n      /* STABLE_FRAGMENT */\n      )), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\", {\n        class: \"absolute right-0 z-10 block w-10 h-10 p-1 overflow-hidden bg-blue-600 rounded-full top-1/2\",\n        onClick: _cache[1] || (_cache[1] = function ($event) {\n          return _this.mainImageSwiper.slideNext();\n        })\n      }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_ChevronRightIcon, {\n        class: \"w-full h-full text-white\"\n      })]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\", {\n        class: \"absolute left-0 z-10 block w-10 h-10 p-1 overflow-hidden bg-blue-600 rounded-full top-1/2\",\n        onClick: _cache[2] || (_cache[2] = function ($event) {\n          return _this.mainImageSwiper.slidePrev();\n        })\n      }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_ChevronLeftIcon, {\n        class: \"w-full h-full text-white\"\n      })])];\n    }),\n    _: 1\n    /* STABLE */\n\n  }, 8\n  /* PROPS */\n  , [\"onSwiper\", \"thumbs\"])])])], 64\n  /* STABLE_FRAGMENT */\n  );\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0UGFnZUltYWdlQ29udGFpbmVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kMThjMzliOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RQYWdlSW1hZ2VDb250YWluZXIudnVlP2M5ZjAiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxud2lkdGggaXMge3sgdGhpcy53aWR0aCB9fVxudGh1bWIgZGlyZWN0aW9uIGlzIHt7IHRoaXMuZ2V0VGh1bWJEaXJlY3Rpb24oKSB9fVxuXG48ZGl2IGNsYXNzPVwicmVsYXRpdmUgbGc6dy02LzEyIHdpZHRoLWZ1bGwgbWF4X2hfZGVzY1wiPlxuPGRpdiBjbGFzcz1cInJlbGF0aXZlIHByb2R1Y3RfcGFnZV9pbWFnZXMgbWF4X2hfZGVzY1wiPlxuXG5cbiAgPHN3aXBlclxuICBAc3dpcGVyPVwic2V0VGh1bWJzU3dpcGVyXCJcbiAgOmRpcmVjdGlvbj1cInRoaXMuZ2V0VGh1bWJEaXJlY3Rpb24oKVwiXG4gIDpzcGFjZUJldHdlZW49XCI2XCJcbiAgOnNsaWRlc1BlclZpZXc9XCInYXV0bydcIlxuICA6ZnJlZU1vZGU9XCJ0cnVlXCJcbiAgOndhdGNoU2xpZGVzVmlzaWJpbGl0eT1cInRydWVcIlxuICA6d2F0Y2hTbGlkZXNQcm9ncmVzcz1cInRydWVcIlxuICBjbGFzcz1cIm15U3dpcGVyXCI+XG5cdDxzd2lwZXItc2xpZGVcblx0di1mb3I9XCJpbWFnZSBpbiBwcm9kdWN0LmltYWdlc1wiXG5cdDprZXk9XCJpbWFnZS5pZFwiXG5cdD5cblx0XHQ8aW1nIDpzcmM9XCJ0aGlzLmFwaV91cmwgKyBpbWFnZS5pbWdzcmNcIiAvPlxuXHQ8L3N3aXBlci1zbGlkZT5cblxuXHQ8L3N3aXBlcj5cblxuXG5cbiAgPHN3aXBlciBcbiAgQHN3aXBlcj1cInNldE1haW5JbWFnZVN3aXBlclwiXG4gIDpzdHlsZT1cInsnLS1zd2lwZXItbmF2aWdhdGlvbi1jb2xvcic6ICcjZmZmJywnLS1zd2lwZXItcGFnaW5hdGlvbi1jb2xvcic6ICcjZmZmJ31cIiBcbiAgOnNsaWRlc1BlclZpZXc9XCIxXCJcbiAgOnNwYWNlQmV0d2Vlbj1cIjEwXCIgXG4gIDpwYWdpbmF0aW9uPVwidHJ1ZVwiXG4gIDp0aHVtYnM9XCJ7IHN3aXBlcjogdGh1bWJzU3dpcGVyIH1cIiBcbiAgY2xhc3M9XCJteVN3aXBlcjIgbWF4X2hfZGVzY1wiPlxuXHRcdDxzd2lwZXItc2xpZGVcblx0di1mb3I9XCJpIGluIDEwXCJcblx0OmtleT1cImlcIlxuXHQ+XG5cdFx0PGltZyBcblx0XHRjbGFzcz1cIlwiXG5cdFx0c3JjPVwiaHR0cHM6Ly9zd2lwZXJqcy5jb20vZGVtb3MvaW1hZ2VzL25hdHVyZS0xLmpwZ1wiIC8+XG5cdDwvc3dpcGVyLXNsaWRlPlxuXHRcblxuXG48c3BhbiBjbGFzcz1cImFic29sdXRlIHJpZ2h0LTAgei0xMCBibG9jayB3LTEwIGgtMTAgcC0xIG92ZXJmbG93LWhpZGRlbiBiZy1ibHVlLTYwMCByb3VuZGVkLWZ1bGwgdG9wLTEvMlwiXG5cdEBjbGljaz1cInRoaXMubWFpbkltYWdlU3dpcGVyLnNsaWRlTmV4dCgpXCI+XG5cdDxDaGV2cm9uUmlnaHRJY29uIGNsYXNzPVwidy1mdWxsIGgtZnVsbCB0ZXh0LXdoaXRlXCIvPlxuPC9zcGFuPlxuXG48c3BhbiBjbGFzcz1cImFic29sdXRlIGxlZnQtMCB6LTEwIGJsb2NrIHctMTAgaC0xMCBwLTEgb3ZlcmZsb3ctaGlkZGVuIGJnLWJsdWUtNjAwIHJvdW5kZWQtZnVsbCB0b3AtMS8yXCJcblx0QGNsaWNrPVwidGhpcy5tYWluSW1hZ2VTd2lwZXIuc2xpZGVQcmV2KClcIj5cblx0PENoZXZyb25MZWZ0SWNvbiBjbGFzcz1cInctZnVsbCBoLWZ1bGwgdGV4dC13aGl0ZVwiLz5cbjwvc3Bhbj5cblxuICA8L3N3aXBlcj5cblxuPC9kaXY+XG5cblxuXG48L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbi8vIEltcG9ydCBTd2lwZXIgVnVlLmpzIGNvbXBvbmVudHNcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvdnVlJztcblxuLy8gSW1wb3J0IFN3aXBlciBzdHlsZXNcbmltcG9ydCAnc3dpcGVyL3N3aXBlci5zY3NzJztcblxuaW1wb3J0IFwic3dpcGVyL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLm1pbi5jc3NcIlxuaW1wb3J0IFwic3dpcGVyL2NvbXBvbmVudHMvdGh1bWJzL3RodW1icy5taW4uY3NzXCJcbmltcG9ydCBcInN3aXBlci9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5taW4uY3NzXCJcblxuXG5cbi8vIGltcG9ydCBTd2lwZXIgY29yZSBhbmQgcmVxdWlyZWQgbW9kdWxlc1xuaW1wb3J0IFN3aXBlckNvcmUsIHtcbiAgTmF2aWdhdGlvbixUaHVtYnMsIFBhZ2luYXRpb25cdFxufSBmcm9tICdzd2lwZXIvY29yZSc7XG5pbXBvcnQge1xuXHRDaGV2cm9uTGVmdEljb24sXG5cdENoZXZyb25SaWdodEljb24sXG59IGZyb20gJ0BoZXJvaWNvbnMvdnVlL291dGxpbmUnO1xuXG5cbi8vIGluc3RhbGwgU3dpcGVyIG1vZHVsZXNcblN3aXBlckNvcmUudXNlKFtOYXZpZ2F0aW9uLFRodW1icywgUGFnaW5hdGlvbl0pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ1Byb2R1Y3RQYWdlSW1hZ2VDb250YWluZXInLFxuXHRwcm9wczogWydwcm9kdWN0J10sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBTd2lwZXIsXG4gICAgU3dpcGVyU2xpZGUsXG5cdENoZXZyb25MZWZ0SWNvbixcblx0Q2hldnJvblJpZ2h0SWNvbixcbiAgfSxcbiAgY3JlYXRlZCAoKSB7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMucmVzaXplRXZlbnQpXG4gIH0sXG4gIHVubW91bnRlZCAoKSB7XG5cdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMucmVzaXplRXZlbnQpXG4gIH0sXG4gIG1vdW50ZWQgKCkge1xuXHRjb25zb2xlLmxvZyh0aGlzLnRodW1ic1N3aXBlcik7XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGh1bWJzU3dpcGVyOiBudWxsLFxuXHRcdG1haW5JbWFnZVN3aXBlcjogbnVsbCxcblx0XHRtYXhfaGVpZ2h0X2Rlc2M6IFwiNjAwcHhcIixcblx0XHRtYXhfaGVpZ2h0X3Bob25lOiBcIjQwMHB4XCIsXG5cdFx0Y2hhbmdlX3dpZHRoOiAxMDI0LFxuXHRcdHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuXHRhcGlfdXJsICgpIHtcblx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuY29tbW9uLmFwaV91cmw7XG5cdH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcblx0c2V0TWFpbkltYWdlU3dpcGVyKHN3aXBlcikge1xuXHRcdHRoaXMubWFpbkltYWdlU3dpcGVyID0gc3dpcGVyO1xuXHR9LFxuXHRyZXNpemVFdmVudCAoZSkge1xuXHRcdHRoaXMud2lkdGggPSBlLnRhcmdldC5pbm5lcldpZHRoO1xuXHR9LFxuXHRnZXRUaHVtYkRpcmVjdGlvbigpIHtcblx0XHRpZiAodGhpcy53aWR0aCA+PSB0aGlzLmNoYW5nZV93aWR0aCkge1xuXHRcdFx0cmV0dXJuICd2ZXJ0aWNhbCc7XG5cdFx0fVxuXHRcdHJldHVybiAnaG9yaXpvbnRhbCc7XG5cdH0sXG4gICAgc2V0VGh1bWJzU3dpcGVyKHN3aXBlcikge1xuICAgICAgdGhpcy50aHVtYnNTd2lwZXIgPSBzd2lwZXI7XG4gICAgfSxcbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuLm1heF9oX2Rlc2Mge1xuXHRtYXgtaGVpZ2h0OiB2LWJpbmQoJ21heF9oZWlnaHRfZGVzYycpO1xufVxuLm1heF9oX3Bob25lIHtcblx0bWF4LWhlaWdodDogdi1iaW5kKCdtYXhfaGVpZ2h0X3Bob25lJyk7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ucHJvZHVjdF9wYWdlX2ltYWdlcyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xufVxuXG5cbi5teVN3aXBlcjIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLm15U3dpcGVyMiAuc3dpcGVyLXNsaWRlIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGhlaWdodDogOTAlO1x0XG5cdG1hcmdpbjogYXV0bztcbn1cblxuLm15U3dpcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAlO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5teVN3aXBlciAuc3dpcGVyLXNsaWRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDU2cHg7XG4gIG1heC13aWR0aDogNTZweDtcbiAgcGFkZGluZzogMnB4O1xuICBvcGFjaXR5OiAwLjQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaW1nIHtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuICB9XG59XG5cbi5teVN3aXBlciAuc3dpcGVyLXNsaWRlLXRodW1iLWFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XG59XG5cbi5zd2lwZXItc2xpZGUgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cdC5wcm9kdWN0X3BhZ2VfaW1hZ2VzIHtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG5cdH1cblx0Lm15U3dpcGVyIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXgtaGVpZ2h0OiA4MHB4O1xuXHR9XG5cdC5teVN3aXBlcjIge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHRtYXJnaW4tbGVmdDogMHB4O1xuXHR9XG59XG5cbjwvc3R5bGU+XG4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUE7OztBQUNBOzs7QUFtQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRkE7QUFDQTs7Ozs7Ozs7Ozs7O0FBeENBO0FBR0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQU5BO0FBQUE7QUFEQTtBQUVBO0FBR0E7QUFEQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7O0FBSkE7O0FBQUE7QUFLQTs7QUFMQTtBQUNBOzs7O0FBVkE7O0FBQUE7QUFxQkE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBc0JBO0FBcEJBO0FBQUE7QUFEQTtBQUVBO0FBS0E7QUFIQTtBQUFBO0FBQUE7Ozs7QUFGQTs7QUFGQTtBQU9BOztBQVBBO0FBV0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBREE7QUFBQTtBQWpCQTs7OztBQVRBOztBQUFBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPageImageContainer.vue?vue&type=template&id=d18c39b8\n");

/***/ })

})