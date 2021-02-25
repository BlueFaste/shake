<template>
	<main role="main" class="error-container">
		<RecipeBanner :img-link="require('../assets/background/404Banner.png')" :recipe="data"></RecipeBanner>
		<p class="mt-4">La page que vous recherchez n'existe pas :/ </p>
		<p>Cliquez
			<router-link to="/">ici</router-link>
			pour retourner à la page d'accueil.
		</p>
	</main>

</template>

<script>
import RecipeBanner from "@/components/RecipeBanner";

export default {
	name: "page404",
	components: {RecipeBanner},
	data() {
		return {
			data: {
				name: '404'
			}
		}
	}
}
</script>

<style scoped>
.error-container {
	height: 100;
}


a {
	color: #F6A31E !important;
	text-decoration: underline;
}

/deep/ h1.title-recipe {
	font-size: 8rem !important;
	top: 20% !important;
	left: 15% !important;
}


</style>
