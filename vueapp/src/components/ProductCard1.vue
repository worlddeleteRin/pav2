<template>
	<div class="w-full max-w-sm mx-auto overflow-hidden shadow-md rounded-md">
		<div 
		class="flex items-end justify-end w-full h-56 bg-cover">
			<img :src="this.api_url + this.product.images[0].imgsrc" />
		</div>

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
export default {
    name: 'ProductCard1',
	props: {
		product: {},
	},
	computed: {
		api_url () {
			return this.$store.state.common.api_url;
		},
	},
}
</script>


