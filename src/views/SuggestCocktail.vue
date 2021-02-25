<template>
	<main>
		<RecipeBanner :img-link="require('../assets/background/suggestYourCocktailbanner.png')"
									:recipe="infoPage"></RecipeBanner>
		<div class="my-4">
			<p>Nos recettes sont principalement créées par notre équipe mais grâce à "Propose ton cocktail" vous avez la
				possibilité de partager vos meilleurs cocktails, qui seront concoctés par nos équipes, puis intégrés au
				site.</p>
			<p>Vous avez la possibilité de décider si vous souhaitez être crédité ou non.</p>
			<div>
				<section class="my-4">
					<article class="position-relative">
						<h2 class="Montserrat-bold">Informations personnelles :</h2>
						<b-form-input size="sm" class="search text-white my-2" placeholder="Prénom ou pseudo"
													v-model="recette.authorName"></b-form-input>
						<b-form-input size="sm" type="email" class="search text-white my-2" placeholder="E-mail"
													v-model="recette.authorEmail"></b-form-input>
						<b-form-checkbox
								id="checkbox-1"
								v-model="recette.authorCredit"
								name="checkbox-1"
								value=true
								unchecked-value=false
								class="checkbox d-flex align-items-center justify-content-center my-2"
						>
							Je souhaite être crédité pour mon cocktail
						</b-form-checkbox>
					</article>
					<article class="my-4">
						<h2 class="Montserrat-bold">Le nom du cocktail :</h2>
						<div class="position-relative">
							<b-form-input size="sm" class="search text-white my-2" placeholder="Ex: Mojito Framboise"
														v-model="recette.recipeName"></b-form-input>
						</div>
					</article>
					<article class="my-4">
						<h2 class="Montserrat-bold">Les ingrédients :</h2>
						<div v-for="part in recette.items" :key="part.title">
							<h3 class="Montserrat-bold">{{ part.title }} :</h3>
							<div class="position-relative">
								<b-form-input size="sm"
															class="search text-white"
															:placeholder="part.placeholder"
															v-model="part.newValue"
															@keypress.enter="addItem(part)"></b-form-input>
								<b-icon role="button"
												icon="plus"
												variant="light"
												class="position-absolute icon-search"
												@click="addItem(part)"></b-icon>
							</div>
							<div>
								<ul role="list" class="pl-4 mt-2">
									<li  role="listitem" v-for="el in part.array" :key="el"
											class="d-flex justify-content-between align-items-center  mr-4"> {{ el }}
										<span class="line ml-2"> </span>
										<b-icon role="button"
														icon="x"
														variant="secondary"
														class="icon-cross"
														@click="deleteItem(el, part.array)"></b-icon>

									</li>
								</ul>
							</div>
							<p v-if="part.alcohol" class="text-buy-alcohol">Pas d'alcools ? Achetez-en
								<a href="https://sites.google.com/view/erwinwebsite/accueil" target="_blank">ici</a> !</p>
						</div>
					</article>
					<article class="my-4">
						<h2 class="Montserrat-bold">La recette :</h2>
						<div class="">
							<b-form-input size="sm"
														class="search text-white my-2"
														placeholder="Ajout un titre à l'étape"
														v-model="recette.stepsRecipe.newStep.title"></b-form-input>
							<div class="position-relative">
								<b-form-textarea class="search text-white my-2" placeholder="Ajouter une étape" rows="3" v-model="recette.stepsRecipe.newStep.desc"></b-form-textarea>
								<b-icon role="button"
												icon="plus"
												variant="light"
												class="position-absolute icon-textArea"
												@click="addStep()"></b-icon>
							</div>
							<ul role="list" class="pl-3">
								<li  role="listitem" v-for="step in recette.stepsRecipe.steps" :key="step.n" class="mb-4">
									<div class="d-flex align-items-center justify-content-between">
										<h3 class="m-0">
											<span style="color: #F6A31E" class="DM-Serif-Display">{{ step.n }}.</span>
											{{ step.title }}
										</h3>
										<b-icon role="button"
														icon="x"
														variant="secondary"
														class="icon-cross h3 mb-0"
														@click="deleteStep(step, recette.stepsRecipe.steps)"></b-icon>
									</div>
									<p class="ml-4">{{ step.desc }}</p>
								</li>
							</ul>
						</div>
					</article>
				</section>
				<b-form-checkbox
						id="checkbox-2"
						v-model="recette.conditionGenerale"
						name="checkbox-2"
						value=true
						unchecked-value=false
						class="checkbox d-flex align-items-center my-2 justify-content-center"
				>
					J'accepte les
					<a href="https://bastien-rbrt.fr/" target="_blank" class="CGU">conditions générales d'utilisation</a>
				</b-form-checkbox>
			</div>
		</div>
		<div class="d-flex justify-content-center my-5" @click="suggestCocktail">
			<OrangeButton text="Je propose mon cocktail"></OrangeButton>
		</div>

		<b-modal
				ref="modal-send-recipe"
				id="modal-send-recipe"
				title="Recette enregistrée"
				header-bg-variant="dark"
				header-text-variant="light"
				body-bg-variant="dark"
				body-text-variant="light"
				footer-bg-variant="dark"
				footer-text-variant="light"
				centered>
			<p>Votre recette a été envoyée à nos équipes pour être vérifiée, testée et approuvée !</p>
			<p>Merci pour votre contribution !</p>
			<p>N'oubliez pas de Shake!</p>

			<template #modal-footer>
				<b-button
						variant="primary"
						size="sm"
						class="float-right"
						@click="$bvModal.hide('modal-send-recipe')"
				>
					Ok !
				</b-button>
			</template>
		</b-modal>
	</main>
</template>

<script>
import RecipeBanner from "@/components/RecipeBanner";
import OrangeButton from "@/components/OrangeButton";

export default {
	name: "SuggestCocktail",
	components: {OrangeButton, RecipeBanner},
	data() {
		return {
			infoPage: this.$store.state.suggestYourCocktail.infoPage,
			recette: this.$store.state.suggestYourCocktail.recipe,
			nbStep: 0,
		}
	},
	mounted() {
		this.calculStepNumber()
	},
	methods: {
		addItem(part) {
			// console.log(part)
			if (part.newValue != '') {
				part.array.push(part.newValue)
				part.newValue = ''
			}
		},
		deleteItem(el, array) {
			// console.log(el)
			for (let item in array) {
				if (array[item] == el) {
					// console.log(el, item)
					array.splice(item, 1)
					break
				}
			}
		},
		addStep() {
			let newStep = this.recette.stepsRecipe.newStep
			// console.log(newStep)
			if (newStep.desc != '' && newStep.title != '') {
				// console.log('true')
				this.nbStep++
				if (this.nbStep < 10) {
					newStep.n = `0${this.nbStep}`
				} else {
					newStep.n = `${this.nbStep}`
				}

				let addStep = JSON.parse(JSON.stringify(newStep));
				this.recette.stepsRecipe.steps.push(addStep)

				this.recette.stepsRecipe.newStep = {
					n: '',
					title: '',
					desc: ''
				}
			}
		},
		deleteStep(step, array) {
			// console.log(step)
			// console.log(array)
			for (let item in array) {
				if (array[item] == step) {
					// console.log(el, item)
					array.splice(item, 1)
					this.calculStepNumber()


					break
				}
			}
		},
		suggestCocktail() {
			// this.$bvModal.show('modal-send-recipe')

			// console.log('ture')
			// console.log(this.$store.state.suggestYourCocktail.recipe)
			// 	console.log(this.recette.items.alcohol.array.length)
			// 	console.log(this.recette.items.soft.array.length)
			// 	console.log(this.recette.items.other.array.length)
			// console.log(this.recette.authorName)
			// console.log(this.recette.authorEmail)
			// console.log(this.recette.authorCredit)
			if (this.recette.authorName != '' && this.recette.authorEmail != '' && this.recette.authorCredit) {
				if (this.recette.recipeName) {
					if (this.recette.items.alcohol.array.length > 0 && this.recette.items.soft.array.length > 0 && this.recette.items.other.array.length > 0) {
						console.log(this.recette.items.alcohol.array.length)
						if (this.recette.stepsRecipe.steps.length > 0) {
							this.$bvModal.show('modal-send-recipe')
							console.log('recette ok')
						} else {
							console.log('pb ingredient')
						}
					} else {
						console.log('pb ingredient')
					}
				} else {
					console.log('pb Name recipe')
				}
			} else {
				console.log('pb info perso')
			}
		},
		calculStepNumber() {
			let step = this.$store.state.suggestYourCocktail.recipe.stepsRecipe.steps;
			this.nbStep = 0
			step.forEach(el => {
				// console.log('calculStepnumber Foreach',el)
				this.nbStep++
				if (this.nbStep < 10) {
					el.n = `0${this.nbStep}`
				} else {
					el.n = `${this.nbStep}`
				}
				// console.log(el)
			})
		}
	}
}
</script>

<style scoped>
.search, .search:focus {
	background-color: #313131;
	border: none;
	border-radius: 20px;
	width: 100%;
}

.search::placeholder {
	color: white;
	font-size: 0.8rem;
	opacity: 0.5;
}

.icon-search {
	right: 1rem;
	top: 0.5rem;
	transform: scaleX(2) scaleY(2);
	-moz-transform: scaleX(2) scaleY(2);
	-webkit-transform: scaleX(2) scaleY(2);
	-ms-transform: scaleX(2) scaleY(2);
}

.icon-textArea {
	right: 1rem;
	bottom: 0.5rem;
	transform: scaleX(2) scaleY(2);
	-moz-transform: scaleX(2) scaleY(2);
	-webkit-transform: scaleX(2) scaleY(2);
	-ms-transform: scaleX(2) scaleY(2);
}

.line {
	display: block;
	width: 100%;
	height: 0.1rem;
	border-radius: 20px;
	background-color: #404040
}

.checkbox {
	font-size: 0.8rem !important;
	color: #AFAFAF !important;
}

h3 {
	font-size: 1.3rem;
}

li {
	list-style: none;
}

.CGU {
	text-decoration: underline;
	font-size: 0.7rem;
}


</style>
