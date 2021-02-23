<template>
	<div class="position-relative my-2 d-flex justify-content-center">
		<router-link :to="recipe.link">
			<div class="position-relative content-box d-flex">
				<img alt='' :src="imgLink" class="img-shadow">
				<h3 class="position-absolute ml-4 mt-2 text-white">{{recipe.name}}</h3>

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
h3{
font-size: 6.7vw;
}

</style>
