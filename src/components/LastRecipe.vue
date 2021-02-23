<template>
	<div class="position-relative my-4 d-flex justify-content-center">
		<router-link :to="recipe.link">
			<div class="position-relative content-box d-flex">
				<img alt='' :src="imgLink" class="img-shadow">
				<h4 class="position-absolute ml-4 mt-2 text-white">{{recipe.name}}</h4>

			</div>
		</router-link>
	</div>
</template>

<script>
export default {
	name: "LastRecipe",
	props:{
		recipe: Object,
		imgLink: String,
	}
}
</script>

<style scoped>

</style>
