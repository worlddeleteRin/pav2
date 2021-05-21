<template>
	<div class="w-full max-w-sm mx-auto overflow-hidden shadow-md rounded-md">

		<ProductCardImageContainer 
		:product="product"
		/>

		
        <div class="px-5 py-3">
				<router-link v-bind:to="'/product/' + this.product.id"
				class="text-xs text-gray-700 uppercase md:text-md">
					{{ product.name }}	
				</router-link>
				<br />
                <span class="mt-2 text-gray-500">
					от {{ this.product.price }}	
				</span>
         </div>
     </div>
</template>

<script>
import ProductCardImageContainer from '../components/ProductCardImageContainer.vue';
export default {
    name: 'ProductCard1',
	props: {
		product: {},
	},
	components: {
		ProductCardImageContainer,
	},
	computed: {
		api_url () {
			return this.$store.state.common.api_url;
		},
	},
}
</script>


