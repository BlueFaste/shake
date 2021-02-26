<template>
	<div class="position-relative">
		<figure>
			<img aria-hidden="true" role="presentation" :src="imgLink" alt="" class="banner-img">
		</figure>
		<h1 class="position-absolute title-recipe mb-4">{{ recipe.name }}</h1>
	</div>
</template>

<script>
export default {
	name: "RecipeBanner",
	props: {
		imgLink: String,
		recipe: Object,
	}
}
</script>

<style scoped>

figure {
	border-bottom: #F6A31E solid 1vh;
	width: max-content;
}

.title-recipe {
	bottom: 0;
}

@media (max-width:1024px ) {
	.banner-img{
		width: 100vw;
	}

	figure{
		margin-left: -6.7vw;
	}
}

@media (min-width:1024px ) {
	figure{
		width: 100%;
		transform: scale(1.137);
		margin: 2rem 0;
		overflow:hidden; /*hide bounds of image */
	}
	figure img{
		display:block; /*remove inline-block spaces*/
		width:100% !important; /*make image streatch*/
		margin: -15% 0;
	}

	div.position-relative{
		margin-bottom: 4rem;
	}

}

</style>
