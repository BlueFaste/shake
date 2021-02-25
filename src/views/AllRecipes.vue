<template>
	<main>
		<RecipeBanner :img-link="require('../assets/background/AllRecipesBanner.png')"
									:recipe="recipes.allRecipes"></RecipeBanner>
		<p class="mt-3 mb-0">
			Si vous avez besoin d'alcools, achetez-en <a href="https://carolinefassot.myportfolio.com/" target="_blank">ici</a>.
		</p>
		<section class="d-flex flex-wrap justify-content-around">
			<div class="mr-1">
				<RecipesPresentation :recipe="recipes.mojito" :imgLink="require('../assets/background/mojito.png')"></RecipesPresentation>
				<RecipesPresentation :recipe="recipes.margarita" :imgLink="require('../assets/background/margarita.png')"></RecipesPresentation>
				<RecipesPresentation :recipe="recipes.mojitoCubain" :imgLink="require('../assets/background/mojitoCubain.png')"></RecipesPresentation>
				<RecipesPresentation :recipe="recipes.caipirinha" :imgLink="require('../assets/background/caipiranha.png')"></RecipesPresentation>
			</div>
			<div class="ml-1">
				<RecipesPresentation :recipe="recipes.pinaColada" :imgLink="require('../assets/background/pinaColoda.png')"></RecipesPresentation>
				<RecipesPresentation :recipe="recipes.mojitoFramboise" :imgLink="require('../assets/background/MojitoFramboise.png')"></RecipesPresentation>
				<RecipesPresentation :recipe="recipes.aperolSpritz" :imgLink="require('../assets/background/aperolSpritz.png')"></RecipesPresentation>
				<RecipesPresentation :recipe="recipes.americano" :imgLink="require('../assets/background/americano.png')"></RecipesPresentation>
			</div>
		</section>
		<div class="d-flex justify-content-center my-4">
			<OrangeButton text="Charger plus +"></OrangeButton>
		</div>
	</main>
</template>

<script>
import RecipeBanner from "@/components/RecipeBanner";
import RecipesPresentation from "@/components/RecipesPresentation";
import OrangeButton from "@/components/OrangeButton";

export default {
	name: "AllRecipes",
	components: {OrangeButton, RecipesPresentation, RecipeBanner},
	data() {
		return {
			recipes: this.$store.state.recipes
		}
	}
}
</script>

<style scoped>

p a {
	color: #F6A31E !important;
	text-decoration: underline;
}

</style>
