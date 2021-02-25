<template>
	<main>
		<h1>Trouve ton cocktail</h1>
		<section class="d-flex flex-wrap justify-content-around mt-4">
		<h2 class="Montserrat">D'après vos ingrédients</h2>
			<div class="mr-1">
				<RecipesPresentation :recipe="recipes.mojitoCubain" :imgLink="require('../assets/background/mojitoCubain.png')"></RecipesPresentation>
				<RecipesPresentation :recipe="recipes.mojitoFramboise" :imgLink="require('../assets/background/MojitoFramboise.png')"></RecipesPresentation>
			</div>
			<div class="ml-1">
				<RecipesPresentation :recipe="recipes.mojito" :imgLink="require('../assets/background/mojito.png')"></RecipesPresentation>
				<RecipesPresentation :recipe="recipes.mojitoAlsacien" :imgLink="require('../assets/background/mojitoAlsacien.png')"></RecipesPresentation>
			</div>
		</section>

		<div class="d-flex justify-content-center align-items-center flex-column">
			<h2 class="mb-0 mt-5 Montserrat">Résultat associés</h2>
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
		</div>
		<router-link to="/recettes/all" class="d-flex justify-content-center my-4">
			<OrangeButton text="Toutes nos recettes"></OrangeButton>
		</router-link>
	</main>
</template>

<script>
import RecipesPresentation from "@/components/RecipesPresentation";
import OrangeButton from "@/components/OrangeButton";

export default {
	name: "Search",
	components: {OrangeButton, RecipesPresentation},
	data() {
		return {
			search: this.$store.state.search.searchText,
			recipes: this.$store.state.recipes

		}
	}
}
</script>

<style scoped>
h2{
	font-size: 1rem !important;
}

</style>
