<template>
	<main role="main" class="home">
		<div class="d-flex flex-wrap justify-content-between">
			<div class="title-text">
				<h1>Bienvenue sur Shake !</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum nisi ex, nec posuere odio pretium vel.
					Duis tincidunt velit nec lectus interdum, quis volutpat tellus tempor. Aliquam feugiat velit consequat blandit
					interdum. Integer non enim dolor.</p>
				<router-link to="/findyourcocktail" class="d-flex justify-content-end my-4">
					<OrangeButton title="Trouve ton cocktail" text="Trouve ton cocktail"></OrangeButton>
				</router-link>
			</div>
			<div>
				<SquareImgLink :data="data.ourRecipes" :imgLink="require('../assets/background/dylan-gillis-3e_tXW5O3GQ-unsplash.png')"></SquareImgLink>
				<SquareImgLink :data="data.proposYourRecipes" :imgLink="require('../assets/background/timur-romanov-GsavR7VMkpk-unsplash.png')"></SquareImgLink>
			</div>
		</div>

		<div class="d-flex recette-home">
			<div class="dernière-recette">
				<div class="dernière-recette-text">
					<h2 class="Montserrat text-center mt-5 mb-0 hidden-pc" > Dernière recette</h2>
					<h2 class="mt-5 hidden-portable" > Découvrez notre dernière trouvaille</h2>
					<p class="hidden-portable">Le strawberry paradise est une création Shake, et nous sommes ravis de pouvoir vous le présenter. Ce cocktail à la framboise avec des touches de citron vous emmènera au paradis. </p>
					<p class="hidden-portable">N'attendez plus et essayez le Strawberry Paradise.
					</p>
				</div>
				<LastRecipe :recipe="recipes.strawberryParadise"
										:imgLink="require('../assets/background/strawberryParadise.png')"></LastRecipe>
			</div>
			<div>
				<h2 class="Montserrat text-center mt-5 mb-0"> Les plus populaires</h2>
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
					<div class="mr-1 hidden-portable">
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
				<router-link to="/recettes/all" class="d-flex justify-content-center my-4">
					<OrangeButton title="Voir toutes nos recettes" text="Tout voir" class="hidden-pc"></OrangeButton>
					<OrangeButton title="Voir toutes nos recettes" text="Voir toutes nos recettes" class="hidden-portable"></OrangeButton>
				</router-link>
			</div>
		</div>

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
h2{
	font-size: 1.2rem !important;
}

@media (min-width:1024px ) {
	.title-text{
		max-width: 30vw;
		display: flex;
		flex-direction: column;
	}

	.recette-home{
		flex-direction: column-reverse;
	}

	.hidden-pc{
		display: none !important;
	}

	.dernière-recette{
		display: flex;
		justify-content: space-between;
	}

	.dernière-recette-text{
		margin-right: 8rem ;
	}


	.dernière-recette-text h2{
		font-size: 2rem !important;
		margin-bottom: 1rem !important ;
	}
}

@media (max-width: 1024px) {
	.title-text a {
		width: max-content;
		float: right;
	}

	.recette-home{
		flex-direction: column;
	}

	.hidden-portable{
		display: none !important;
	}
}
</style>
