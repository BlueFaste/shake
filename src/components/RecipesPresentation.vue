<template>
	<div class="position-relative my-3 d-flex justify-content-center">
		<router-link :to="recipe.link">
			<div class="position-relative content-box d-flex">
				<img aria-hidden="true" role="presentation" alt='' :src="imgLink" class="opacity-90 img-shadow">
				<h3 class="position-absolute ml-3 mt-2 text-white">{{ recipe.name }}</h3>
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
	name: "RecipesPresentation",
	props: {
		recipe: Object,
		imgLink: String,
	}
}
</script>

<style scoped>
.opacity-90 {
	opacity: 0.90;
}

@media (min-width:1024px ) {
	img{
		width: 11vw;
	}

	div .my-3{
		margin: 2rem 0 !important;
	}
}

</style>
