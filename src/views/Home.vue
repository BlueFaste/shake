<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App"/>

		<SquareImgLink :data="data.ourRecipes" :imgLink="require('../assets/background/dylan-gillis-3e_tXW5O3GQ-unsplash.png')"></SquareImgLink>
		<SquareImgLink :data="data.proposYourRecipes" :imgLink="require('../assets/background/timur-romanov-GsavR7VMkpk-unsplash.png')"></SquareImgLink>
		<OrangeButton text="Trouve ton cocktail"></OrangeButton>
		<OrangeButton text="C'est parti !"></OrangeButton>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import SquareImgLink from "@/components/SquareImgLink";
import OrangeButton from "@/components/OrangeButton";

export default {
	name: 'Home',
	components: {
		OrangeButton,
		SquareImgLink,
		HelloWorld
	},
	data(){
		return{
			test: this.$store.state.test.test,
			data: this.$store.state.squareImgLink

		}
	}
}
</script>

<style>
.home{
	background: #1C1C1C;
}
</style>
