<template>
	product page is here
	product id is {{ this.product_id }}
	<br />
	product is: {{ this.current_product }}
</template>

<script>

export default {
	name: 'ProductPage',
	props: ['product_id'],
	data () {
		return {
		}
	},
	computed: {
		current_product () {
			return this.$store.getters.getProductById(this.product_id);
		},
	},
}

</script>
