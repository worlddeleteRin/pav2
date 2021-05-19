<template>
	<div class="border border-red-500 mx-auto max-w-7xl px-4">
		<div class="text-xl font-bold md:text-3xl lg:text-4xl">
			Название категории
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

