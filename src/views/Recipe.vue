<template>
	<main role="main" class="position-relative">
		<div>
			<RecipeBanner :img-link="require('../assets/background/bannerMojito.png')" :recipe="recipe"></RecipeBanner>
			<p class="my-4 recette-desc">{{ recipe.desc }}</p>
			<section class="my-4">
				<h2>Ingrédients</h2>
				<div class="d-flex justify-content-center">
					<div class="d-flex flex-wrap justify-content-between">
						<div class="order-0">
							<h3 class="Montserrat-bold">Softs :</h3>
							<ul role="list">
								<li  role="listitem" v-for="ingredient in recipe.ingredient.soft" :key="ingredient">{{ ingredient }}</li>
							</ul>
						</div>
						<div class="order-1 mr-2">
							<h3 class="Montserrat-bold">Alcool :</h3>
							<ul role="list">
								<li  role="listitem" v-for="ingredient in recipe.ingredient.alcohol" :key="ingredient">
									{{ ingredient }}
								</li>
							</ul>
							<a href="https://www.lilianbeillard.fr/" target="_blank" class="btn btn-secondary button-buy-alcohol Montserrat">Achetez-en</a>

						</div>
						<div class="order-2">
							<h3 class="Montserrat-bold">Autres :</h3>
							<ul role="list">
								<li  role="listitem" v-for="ingredient in recipe.ingredient.other" :key="ingredient">{{ ingredient }}</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="d-flex justify-content-center my-4 hidden-pc" v-b-modal.modal-etape-recette>
					<OrangeButton title="Afficher les étapes de la recette" text="C'est parti !"></OrangeButton>
				</div>
			</section>
		</div>

		<b-modal class="etape-recette disable" body-bg-variant="dark" hide-footer hide-header id="modal-etape-recette" ref="modal-etape-recette">
			<h2 class="hidden-portable">La recette</h2>
			<img src="../assets/background/recipeMojito.png" alt="Vidéo de la recette" @click="$bvModal.hide('modal-etape-recette')" class="video-recipe">
			<div class="mx-4 mt-4">
				<div class="d-flex justify-content-between">
					<h2>Étapes</h2>
					<b-icon class="h2 hidden-pc" style="cursor: pointer;" icon="X " @click="$bvModal.hide('modal-etape-recette')"  role="button"></b-icon>
				</div>
				<ul role="list">
					<li  role="listitem" v-for="etape in recipe.step" :key="etape.n" class="mb-4">
						<div class="d-flex flex-column">
							<h3 class="m-0">
								<span style="color: #F6A31E" class="DM-Serif-Display">{{ etape.n }}.</span>
								{{ etape.title }}</h3>
							<a v-if="etape.alcohol" href="https://www.lilianbeillard.fr/" target="_blank" class="btn btn-secondary button-buy-alcohol-modal Montserrat">Achetez-en</a>

						</div>
						<p class="ml-4">{{ etape.desc }}</p>
					</li>
				</ul>

			</div>
		</b-modal>
			<h2 class="hidden-portable">La recette</h2>
		<div class="etape-recette hidden-portable" id="div-etape-recette">
			<img src="../assets/background/recipeMojito.png" alt="Vidéo de la recette" @click="$bvModal.hide('modal-etape-recette')" class="video-recipe">
			<div class="mx-4 mt-4">
				<div class="d-flex justify-content-between">
					<h2>Étapes</h2>
					<b-icon class="h2 hidden-pc" style="cursor: pointer;" icon="X " @click="$bvModal.hide('modal-etape-recette')"  role="button"></b-icon>
				</div>
				<ul role="list">
					<li  role="listitem" v-for="etape in recipe.step" :key="etape.n" class="mb-4">
						<div class="d-flex flex-column">
							<h3 class="m-0">
								<span style="color: #F6A31E" class="DM-Serif-Display">{{ etape.n }}.</span>
								{{ etape.title }}</h3>
							<a v-if="etape.alcohol" href="https://www.lilianbeillard.fr/" target="_blank" class="btn btn-secondary button-buy-alcohol-modal Montserrat">Achetez-en</a>

						</div>
						<p class="ml-4">{{ etape.desc }}</p>
					</li>
				</ul>

			</div>
		</div>

	</main>
</template>

<script>
import RecipeBanner from "@/components/RecipeBanner";
import OrangeButton from "@/components/OrangeButton";

export default {
	name: "Recipe",
	components: {OrangeButton, RecipeBanner},
	data() {
		return {
			recipe: this.$store.state.recipes.mojito
		}
	},
	mounted() {
		const nameRecipe = this.$route.params.name;
		this.recipe = this.$store.state.recipes[nameRecipe];
		console.log(this.recipe)
	},
	methods: {
		openSteps() {
			console.log('go')
			let stepRecipe = document.getElementById('etape-recette')
			console.log(stepRecipe)
			stepRecipe.classList.remove('disable')
			stepRecipe = document.getElementById('etape-recette')
			console.log(stepRecipe)
			// window.scrollBy(0,-100)
		},
		closeSteps() {
			console.log('go')
			let stepRecipe = document.getElementById('etape-recette')
			console.log(stepRecipe)
			stepRecipe.classList.add('disable')
			stepRecipe = document.getElementById('etape-recette')
			console.log(stepRecipe)
		}
	}
}
</script>

<style scoped>

h2{
	font-size: 1.5rem !important;
}

div.order-0, div.order-1, div.order-2 {
	width: 40vw;
}

ul {
	padding: 0;
}

li {
	list-style: none;
	font-size: 1rem;
	margin-bottom: 0.5vh;
}



.button-buy-alcohol {
	background-color: #404040;
	border-radius: 20px;
	border: none;
	margin-left: 1rem;
	padding: 0 1rem;
	font-size: 0.8rem;
}

.button-buy-alcohol-modal {
	background-color: #404040;
	border-radius: 20px;
	border: none;
	margin-left: 1rem;
	padding: 0 1rem;
	font-size: 0.8rem;
	width: 7rem;
}

@media (max-width:1024px ) {
	.video-recipe {
		border-bottom: #F6A31E solid 1vh;
		width: 86vw;
	}

	.etape-recette {
		z-index: 99999;
		background-color: #1C1C1C;
		margin-left: -6.7vw;
		position: absolute;
		bottom: -1vh;
		overflow: scroll;

		height: max-content;
		padding-bottom: 2rem;
		transition: visibility 1s, opacity 1s;

	}


	.etape-recette.disable {
		opacity: 0;
		visibility: hidden;
		transition: visibility 1s, opacity 1s;

	}
}

@media (min-width:1024px ) {
	.recette-desc{
		margin-top: 4rem !important;
	}

	h2 {
		font-size: 2rem !important;
	}

	div.order-0, div.order-1, div.order-2 {
		width: 17.5vw;
	}

	.hidden-pc {
		display: none !important;
	}

	.video-recipe {
		border-bottom: #F6A31E solid 1vh;
		width: 100%;
	}

	.etape-recette.hidden-portable {
		border-radius: 80px 80px 20px 20px;
		background-color: #313131;
		box-shadow: 0 0 35px rgba(40, 40, 40, 85);
		padding-bottom: 2rem;
		margin-bottom: 4rem;

	}
}

</style>
