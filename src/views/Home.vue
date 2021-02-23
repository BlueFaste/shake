<template>
	<div class="home">
		<SquareImgLink :data="data.ourRecipes" :imgLink="require('../assets/background/dylan-gillis-3e_tXW5O3GQ-unsplash.png')"></SquareImgLink>
		<SquareImgLink :data="data.proposYourRecipes" :imgLink="require('../assets/background/timur-romanov-GsavR7VMkpk-unsplash.png')"></SquareImgLink>
		<OrangeButton text="Trouve ton cocktail"></OrangeButton>
		<OrangeButton text="C'est parti !"></OrangeButton>
		<LastRecipe :recipe="recipes.strawberryParadise" :imgLink="require('../assets/background/strawberryParadise.png')"></LastRecipe>
		<div class="d-flex flex-wrap justify-content-center">
			<div>
				<RecipesPresentation :recipe="recipes.mojito" :imgLink="require('../assets/background/mojito.png')"></RecipesPresentation>
				<RecipesPresentation :recipe="recipes.margarita" :imgLink="require('../assets/background/margarita.png')"></RecipesPresentation>
				<RecipesPresentation :recipe="recipes.americano" :imgLink="require('../assets/background/americano.png')"></RecipesPresentation>
			</div>
			<div>
				<RecipesPresentation :recipe="recipes.pinaColada" :imgLink="require('../assets/background/pinaColoda.png')"></RecipesPresentation>
				<RecipesPresentation :recipe="recipes.caipirinha" :imgLink="require('../assets/background/caipiranha.png')"></RecipesPresentation>
				<RecipesPresentation :recipe="recipes.aperolSpritz" :imgLink="require('../assets/background/aperolSpritz.png')"></RecipesPresentation>
			</div>

		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import SquareImgLink from "@/components/SquareImgLink";
import OrangeButton from "@/components/OrangeButton";
import LastRecipe from "@/components/LastRecipe";
import RecipesPresentation from "@/components/RecipesPresentation";

export default {
	name: 'Home',
	components: {
		RecipesPresentation,
		LastRecipe,
		OrangeButton,
		SquareImgLink,
	},
	data(){
		return{
			test: this.$store.state.test.test,
			data: this.$store.state.squareImgLink,
			recipes: this.$store.state.recipes,

		}
	}
}
</script>

<style>

</style>
