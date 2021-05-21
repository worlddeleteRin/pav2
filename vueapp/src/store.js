/* store start */
import { createStore } from 'vuex'

const storeDialogs = {
  state: () => ({
	simple_dialog: {
		show: false,
		button_text: '',
		heading: '',
		description: '',
	},
	call_phone_dialog: {
		show: false,
	},
  }),
  mutations: {
      openSimpleDialog(state, { 
		button_text, heading, description 
		}) {
        state.simple_dialog.show = true;
		state.simple_dialog.button_text = button_text;
		state.simple_dialog.heading = heading;
		state.simple_dialog.description = description;
      },
      closeSimpleDialog(state) {
        state.simple_dialog.show = false;
      },
		openCallPhoneDialog(state) {
			state.call_phone_dialog.show = true;
		},
		closeCallPhoneDialog(state) {
			state.call_phone_dialog.show = false;
		},
  },
  actions: {},
  getters: {}
}

const storeEcommerce = {
  state: () => ({
	products: {},
	categories: {},
  }),
  mutations: {
	setProducts(state, products) {
		state.products = products;
	},
	setCategories(state, categories) {
		state.categories = categories;
	},
  },
  actions: {},
  getters: {
	getCategoryById: (state) => (id) => {
		return state.categories.filter(
		category => category.id == id)[0];
	},	
	getProductById: (state) => (id) => {
		return state.products.filter(
		product => product.id == id)[0];
	},	
	getProductsByCategoryId: (state) => (cat_id) => {
		return state.products.filter(
		product => product.category_id == cat_id);
	},	
  }
}


const storeCommon = {
  state: () => ({
    api_url: 'http://127.0.0.1:8000',
	//api_url: 'http://192.168.1.111:8000',
	isGlobalDataLoaded: false,
  }),
  mutations: {
	setGlobalDataLoaded (state, is_loaded) {
		state.isGlobalDataLoaded = is_loaded;
	},
  },
  actions: {},
  getters: {
  }
}

export const store = createStore({
  modules: {
    dialogs: storeDialogs,
    common: storeCommon,
	ecommerce: storeEcommerce,
  }
})

/* store end */
