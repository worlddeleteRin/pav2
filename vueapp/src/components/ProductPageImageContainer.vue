<template>
width is {{ this.width }}
thumb direction is {{ this.getThumbDirection() }}

<div class="relative lg:w-6/12 width-full max_h_desc product_page_images_wrapper">
<div class="relative product_page_images max_h_desc">


  <swiper
  @swiper="setThumbsSwiper"
  :direction="this.getThumbDirection()"
  :spaceBetween="6"
  :slidesPerView="'auto'"
  :freeMode="true"
  :watchSlidesVisibility="true"
  :watchSlidesProgress="true"
  class="mySwiper">
	<swiper-slide
	v-for="image in 30"
	:key="image"
	>
		<img :src="this.api_url + this.product.images[0].imgsrc" />

	</swiper-slide>

	</swiper>



  <swiper 
  @swiper="setMainImageSwiper"
  :style="{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}" 
  :slidesPerView="1"
  :spaceBetween="10" 
  :pagination="true"
  :thumbs="{ swiper: thumbsSwiper }" 
  class="mySwiper2 max_h_desc">
		<swiper-slide
	v-for="image in product.images"
	:key="image.id"
	>
		<img 
		class=""
		:src="this.api_url + image.imgsrc" />
		</swiper-slide>
	


<span class="absolute right-0 z-10 block w-10 h-10 p-1 overflow-hidden bg-blue-600 rounded-full top-1/2"
	@click="this.mainImageSwiper.slideNext()">
	<ChevronRightIcon class="w-full h-full text-white"/>
</span>

<span class="absolute left-0 z-10 block w-10 h-10 p-1 overflow-hidden bg-blue-600 rounded-full top-1/2"
	@click="this.mainImageSwiper.slidePrev()">
	<ChevronLeftIcon class="w-full h-full text-white"/>
</span>

  </swiper>

</div>



</div>

</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/swiper.scss';

import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"
import "swiper/components/pagination/pagination.min.css"



// import Swiper core and required modules
import SwiperCore, {
  Navigation,Thumbs, Pagination	
} from 'swiper/core';
import {
	ChevronLeftIcon,
	ChevronRightIcon,
} from '@heroicons/vue/outline';


// install Swiper modules
SwiperCore.use([Navigation,Thumbs, Pagination]);


export default {
	name: 'ProductPageImageContainer',
	props: ['product'],
  components: {
    Swiper,
    SwiperSlide,
	ChevronLeftIcon,
	ChevronRightIcon,
  },
  created () {
	window.addEventListener("resize", this.resizeEvent)
  },
  unmounted () {
	window.removeEventListener("resize", this.resizeEvent)
  },
  mounted () {
	console.log(this.thumbsSwiper);
  },
  data() {
    return {
        thumbsSwiper: null,
		mainImageSwiper: null,
		max_height_desc: "600px",
		max_height_phone: "400px",
		change_width: 1024,
		width: window.innerWidth,
    };
  },
  computed: {
	api_url () {
		return this.$store.state.common.api_url;
	},
  },
  methods: {
	setMainImageSwiper(swiper) {
		this.mainImageSwiper = swiper;
	},
	resizeEvent (e) {
		this.width = e.target.innerWidth;
	},
	getThumbDirection() {
		if (this.width >= this.change_width) {
			return 'vertical';
		}
		return 'horizontal';
	},
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
  }
}
</script>

<style>

.max_h_desc {
	max-height: v-bind('max_height_desc');
}
.max_h_phone {
	max-height: v-bind('max_height_phone');
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}
.product_page_images_wrapper {
}
.product_page_images {
	border: 5px solid brown;
	height: max-content;
	display: flex;
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
}


.mySwiper2 {
  position: relative;
  width: 90%;
  margin-left: 10px;
  border: 3px solid orange;
  height: 100%;
}
.mySwiper2 .swiper-slide {
	border: 5px solid violet;
	display: flex;
	justify-content: center;
	height: max-content;	
	margin: auto;
	border: 4px solid yellow;
	img {
	}
}

.mySwiper {
  width: 10%;
  height: 100%;
  max-height: 80%;
  padding: 10px 0;
  margin: auto;
  border: 2px solid red;
  text-align: center;
}

.mySwiper .swiper-slide {
  width: 100%;
  max-height: 56px;
  max-width: 56px;
  padding: 2px;
  opacity: 0.4;
  border-radius: 5px;
  img {
	border-radius: 5px;
  }
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
  border: 2px solid blue;
}

.swiper-slide img {
  display: block;
  width: 100%;
  object-fit: contain;
}

@media (max-width: 1024px) {
	.product_page_images {
		height: max-content;
		flex-direction: column-reverse;
	}
	.mySwiper {
		width: 100%;
		max-height: 80px;
	}
	.mySwiper2 {
		width: 100%;
		height: max-content;
		margin-left: 0px;
	}
}

</style>
