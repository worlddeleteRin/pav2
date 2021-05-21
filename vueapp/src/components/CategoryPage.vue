<template>
	<div class="px-4 mx-auto border border-red-500 max-w-7xl">
		<div class="text-xl font-bold uppercase md:text-3xl lg:text-4xl">
			{{ this.current_category.name }}	
		</div>
		cat id is {{ this.category_id }}

		<ProductsContainer 
		:products="this.current_category_products"
		/>
		
	</div>
</template>

<script>

import ProductsContainer from '../components/ProductsContainer.vue';

export default {
	name: 'CategoryPage',
	props: ['category_id'],
	components: {
		ProductsContainer,
	},
	computed: {
		current_category () {
			return this.$store.getters.getCategoryById(this.category_id);	
		},
		current_category_products () {
			return this.$store.getters.getProductsByCategoryId(this.category_id);
		},
	},
}

</script>

