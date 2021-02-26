import Vue from 'vue'
import Vuex from 'vuex'
import {squareImgLink} from './squareImgLink'
import {recipes} from './recipes'
import {findYourCocktail} from "@/store/findYourCocktail";
import {suggestYourCocktail} from "@/store/suggestYourCocktail";
import {search} from "@/store/search";
import {contact} from "@/store/contact";

Vue.use(Vuex)

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		squareImgLink,
		recipes,
		findYourCocktail,
		suggestYourCocktail,
		search,
		contact

	}
})
