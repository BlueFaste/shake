<template>
	<main role="main">
				<div style="width: 9rem">
					<p>Resultat de votre recherche pour <span class="DM-Serif-Display h2">"{{ search }}"</span></p>
				</div>
		<section class="d-flex flex-wrap justify-content-around">
			<div class="mr-1 resultSearch">
				<RecipesPresentation :recipe="recipes.mojitoCubain" :imgLink="require('../assets/background/mojitoCubain.png')"></RecipesPresentation>
				<RecipesPresentation :recipe="recipes.mojitoFramboise" :imgLink="require('../assets/background/MojitoFramboise.png')"></RecipesPresentation>

			</div>
			<div class="ml-1 resultSearch">
				<RecipesPresentation :recipe="recipes.mojito" :imgLink="require('../assets/background/mojito.png')"></RecipesPresentation>
				<RecipesPresentation :recipe="recipes.mojitoAlsacien" :imgLink="require('../assets/background/mojitoAlsacien.png')"></RecipesPresentation>
			</div>
		</section>

		<div class="d-flex justify-content-center align-items-center flex-column">
			<p class="mb-0 mt-5">Résultat associés</p>
			<section class="d-flex flex-wrap justify-content-around w-100">
				<div class="ml-1">
					<RecipesPresentation :recipe="recipes.mojito" :imgLink="require('../assets/background/mojito.png')"></RecipesPresentation>
					<RecipesPresentation :recipe="recipes.margarita" :imgLink="require('../assets/background/margarita.png')"></RecipesPresentation>
					<RecipesPresentation :recipe="recipes.americano" :imgLink="require('../assets/background/americano.png')"></RecipesPresentation>
				</div>
				<div class="ml-2">
					<RecipesPresentation :recipe="recipes.pinaColada" :imgLink="require('../assets/background/pinaColoda.png')"></RecipesPresentation>
					<RecipesPresentation :recipe="recipes.caipirinha" :imgLink="require('../assets/background/caipiranha.png')"></RecipesPresentation>
					<RecipesPresentation :recipe="recipes.aperolSpritz" :imgLink="require('../assets/background/aperolSpritz.png')"></RecipesPresentation>
				</div>
				<div class="ml-2 hidden-portable">
					<RecipesPresentation :recipe="recipes.margarita" :imgLink="require('../assets/background/margarita.png')"></RecipesPresentation>
					<RecipesPresentation :recipe="recipes.mojito" :imgLink="require('../assets/background/mojito.png')"></RecipesPresentation>
					<RecipesPresentation :recipe="recipes.pinaColada" :imgLink="require('../assets/background/pinaColoda.png')"></RecipesPresentation>
				</div>
				<div class="ml-2 hidden-portable">
					<RecipesPresentation :recipe="recipes.aperolSpritz" :imgLink="require('../assets/background/aperolSpritz.png')"></RecipesPresentation>
					<RecipesPresentation :recipe="recipes.americano" :imgLink="require('../assets/background/americano.png')"></RecipesPresentation>
					<RecipesPresentation :recipe="recipes.caipirinha" :imgLink="require('../assets/background/caipiranha.png')"></RecipesPresentation>
				</div>
			</section>
		</div>
		<router-link to="/recettes/all" class="d-flex justify-content-center my-4">
			<OrangeButton title="Toutes nos recettes" text="Toutes nos recettes"></OrangeButton>
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
@media (min-width:1024px ) {
	.resultSearch{
		display: flex;
		justify-content: space-around;
		width: 49%;
	}
}

</style>
