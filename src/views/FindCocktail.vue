<template>
	<div>
		<RecipeBanner :img-link="require('../assets/background/findCocktailBanner.png')" :recipe="recipes.findCocktail"></RecipeBanner>
		<div class="my-4">
			<p>Aenean eget mattis lectus. Proin id sollicitudin nisi. Nullam vitae diam vestibulum, pulvinar nulla nen.</p>
			<div>
				<div v-for="part in items" :key="part.title">
					<h2 class="Montserrat-bold">{{ part.title}} :</h2>
					<div class="position-relative">
						<b-form-input role="search" size="sm" class="search text-white" :placeholder="part.placeholder" v-model="part.newValue" @keypress.enter="addItem(part)"></b-form-input>
						<b-icon role="button" icon="plus" variant="light"  class="position-absolute icon-search" @click="addItem(part)"></b-icon>
					</div>
					<div>
						<ul class="pl-4 mt-2">
							<li v-for="el in part.array" :key="el" class="d-flex justify-content-between align-items-center"> {{el}} <span class="line mr-4 ml-2"> </span> </li>
						</ul>
					</div>
					<p v-if="part.alcohol" class="text-buy-alcohol">Pas d'alcools ? Achetez-en <a href="https://sites.google.com/view/erwinwebsite/accueil" target="_blank">ici</a> !</p>
				</div>
				<router-link to="/" class="d-flex justify-content-center my-5">
					<OrangeButton text="Trouve ton cocktail"></OrangeButton>
				</router-link>
			</div>
		</div>

	</div>
</template>

<script>
import RecipeBanner from "@/components/RecipeBanner";
import OrangeButton from "@/components/OrangeButton";
export default {
	name: "FindCocktail",
	components: {OrangeButton, RecipeBanner},
	data(){
		return{
			recipes:this.$store.state.recipes,
			items: this.$store.state.findYourCocktail.yourItems,
		}
	},
	methods:{
		addItem(part){
			console.log(part)
			if(part.newValue != ''){
				part.array.push(part.newValue)
				part.newValue=''
			}
		}
	}
}
</script>

<style scoped>
.search, .search:focus{
	background-color: #313131;
	border: none;
	border-radius: 20px;
	width: 100%;
}
.search::placeholder{
	color: white;
	font-size: 0.8rem;
}

.icon-search{
	right: 1rem;
	top:0.5rem;
	transform: scaleX(2) scaleY(2);
	-moz-transform: scaleX(2) scaleY(2);
	-webkit-transform: scaleX(2) scaleY(2);
	-ms-transform: scaleX(2) scaleY(2);
}

li{
	list-style: none;
	white-space: nowrap;
}

.text-buy-alcohol{
	font-size: 0.8rem;
	color:#AFAFAF;
}

p a {
	color: #F6A31E !important;
	text-decoration: underline;
}

.line{
	display: block;
	width: 100%;
	height: 0.1rem;
	border-radius: 20px;
	background-color:#404040
}
</style>
