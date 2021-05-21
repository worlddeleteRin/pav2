<template>
	
	<div
	class="border-4 border-red-500 relative h-full max-h-36 w-full flex"
	>

		<swiper
	class="z-10 w-10 h-10"
	@swiper="setProductCardImageSlider"
	:slidesPerView="1"
	pagination="true"
	>
		<swiper-slide>
			swiper slide item here	
		</swiper-slide>

	</swiper>

		<img
		class="w-full max-h-full object-contain"
		:src="this.api_url + this.product.images[0].imgsrc"
		/>
	</div>
</template>

<script>

import SwiperCore, {
Pagination} from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Pagination])

export default {
	name: 'ProductCardImageContainer',
	props: ['product'],
	components: {
		Swiper,
		SwiperSlide,
	},
	data () {
		return {
			card_image_slider: null,	
		}
	},
	computed: {
		api_url () {
			return this.$store.state.common.api_url;
		},
	},
	methods: {
		setProductCardImageSlider(swiper) {
			this.card_image_slider = swiper;			
		},
	},
}
</script>
