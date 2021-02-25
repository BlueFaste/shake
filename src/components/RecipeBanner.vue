<template>
	<div class="position-relative">
		<img aria-hidden="true" role="presentation" :src="imgLink" alt="" class="banner-img">
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

.banner-img::after {
	content: 'aaa';
	background-color: #F6A31E;
}

.banner-img {
	border-bottom: #F6A31E solid 1vh;
	width: 100vw;
	margin-left: -6.7vw;
}

.title-recipe {
	bottom: 0;
}

</style>
