<template>
	<main class="home">
		<h1>Bienvenue sur Shake !</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum nisi ex, nec posuere odio pretium vel.
			Duis tincidunt velit nec lectus interdum, quis volutpat tellus tempor. Aliquam feugiat velit consequat blandit
			interdum. Integer non enim dolor.</p>
		<router-link to="/findyourcocktail" class="d-flex justify-content-end my-4">
			<OrangeButton text="Trouve ton cocktail"></OrangeButton>
		</router-link>
		<SquareImgLink :data="data.ourRecipes" :imgLink="require('../assets/background/dylan-gillis-3e_tXW5O3GQ-unsplash.png')"></SquareImgLink>
		<SquareImgLink :data="data.proposYourRecipes" :imgLink="require('../assets/background/timur-romanov-GsavR7VMkpk-unsplash.png')"></SquareImgLink>
		<h2 class="Montserrat text-center mt-5 mb-0" style="font-size: 5vw !important;"> Dernière recette</h2>
		<LastRecipe :recipe="recipes.strawberryParadise"
								:imgLink="require('../assets/background/strawberryParadise.png')"></LastRecipe>
		<h2 class="Montserrat text-center mt-5 mb-0" style="font-size: 5vw !important;"> Les plus populaires</h2>
		<section class="d-flex flex-wrap justify-content-around">
			<div class="mr-1">
				<RecipesPresentation :recipe="recipes.mojito" :imgLink="require('../assets/background/mojito.png')"></RecipesPresentation>
				<RecipesPresentation :recipe="recipes.margarita" :imgLink="require('../assets/background/margarita.png')"></RecipesPresentation>
				<RecipesPresentation :recipe="recipes.americano" :imgLink="require('../assets/background/americano.png')"></RecipesPresentation>
			</div>
			<div class="ml-2">
				<RecipesPresentation :recipe="recipes.pinaColada" :imgLink="require('../assets/background/pinaColoda.png')"></RecipesPresentation>
				<RecipesPresentation :recipe="recipes.caipirinha" :imgLink="require('../assets/background/caipiranha.png')"></RecipesPresentation>
				<RecipesPresentation :recipe="recipes.aperolSpritz" :imgLink="require('../assets/background/aperolSpritz.png')"></RecipesPresentation>
			</div>
		</section>
		<router-link to="/recettes/all" class="d-flex justify-content-center my-4">
			<OrangeButton text="Tout voir"></OrangeButton>
		</router-link>
	</main>
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
	data() {
		return {
			test: this.$store.state.test.test,
			data: this.$store.state.squareImgLink,
			recipes: this.$store.state.recipes,

		}
	}
}
</script>

<style>

</style>
