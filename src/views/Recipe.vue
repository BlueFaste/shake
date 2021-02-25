<template>
	<main role="main" class="position-relative">
		<div>
			<RecipeBanner :img-link="require('../assets/background/bannerMojito.png')" :recipe="recipe"></RecipeBanner>
			<p class="my-4">Aenean eget mattis lectus. Proin id sollicitudin nisi. Nullam vitae diam vestibulum, pulvinar
				nulla nec, pellentesque magna. Aenean varius ut lacus laoreet sollicitudin. Morbi et tortor rutrum, rutrum metus
				sit amet, ornare ligula. Quisque semper sapien a est vestibulum, eu porttitor velit rhoncus.</p>
			<section class="my-4">
				<h2>Ingredients</h2>
				<div class="d-flex justify-content-center">
					<div class="d-flex flex-wrap justify-content-between">
						<div class="order-0 mr-2">
							<h3>Alcool :</h3>
							<ul role="list">
								<li  role="listitem" v-for="ingredient in recipe.ingredient.alcohol" :key="ingredient">
									{{ ingredient }}
								</li>
							</ul>
						</div>
						<div class="order-2">
							<h3>Softs :</h3>
							<ul role="list">
								<li  role="listitem" v-for="ingredient in recipe.ingredient.soft" :key="ingredient">{{ ingredient }}</li>
							</ul>
						</div>
						<div class="order-1">
							<h3>Autres :</h3>
							<ul role="list">
								<li  role="listitem" v-for="ingredient in recipe.ingredient.other" :key="ingredient">{{ ingredient }}</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="d-flex justify-content-center my-4" @click.prevent="openSteps">
					<OrangeButton title="Afficher les étapes de la recette" text="C'est parti !"></OrangeButton>
				</div>
			</section>
		</div>

		<section class="etape-recette disable" id="etape-recette">
			<img src="../assets/background/recipeMojito.png" alt="Vidéo de la recette" class="video-recipe">
			<div class="mx-4 mt-4">
				<div class="d-flex justify-content-between">
					<h2>Étapes</h2>
					<b-icon class="h2" style="cursor: pointer;" icon="X" @click="closeSteps" role="button"></b-icon>
				</div>
				<ul role="list">
					<li  role="listitem" v-for="etape in recipe.step" :key="etape.n" class="mb-4">
						<div class="d-flex align-items-center">
							<h3 class="m-0">
								<span style="color: #F6A31E" class="DM-Serif-Display">{{ etape.n }}.</span>
								{{ etape.title }}</h3>
							<a v-if="etape.alcohol" href="https://www.lilianbeillard.fr/" target="_blank" class="btn btn-secondary button-buy-alcohol Montserrat">Achetez-en</a>

						</div>
						<p class="ml-4">{{ etape.desc }}</p>
					</li>
				</ul>

			</div>
		</section>

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
h3 {
	font-size: 5.7vw;
}

div.order-0, div.order-1, div.order-2 {
	width: 40vw;
}

ul {
	padding: 0;
}

li {
	list-style: none;
	font-size: 4vw;
	margin-bottom: 0.5vh;
}

.etape-recette {
	z-index: 99999;
	background-color: #1C1C1C;
	margin-left: -6.7vw;
	position: absolute;
	bottom: -9vh;
	height: max-content;
	padding-bottom: 2rem;
	transition: visibility 1s, opacity 1s;

}

.etape-recette.disable {
	opacity: 0;
	visibility: hidden;
	transition: visibility 1s, opacity 1s;

}

.video-recipe {
	border-bottom: #F6A31E solid 1vh;
	width: 100vw;
}

.button-buy-alcohol {
	background-color: #404040;
	border-radius: 20px;
	border: none;
	margin-left: 1rem;
	padding: 0 1rem;
	font-size: 3.5vw;
}

</style>
