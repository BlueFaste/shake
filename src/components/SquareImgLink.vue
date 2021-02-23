<template>
	<div class="position-relative my-4 d-flex justify-content-center">
		<router-link :to="data.link">
			<div class="position-relative content-box d-flex">
				<img alt='' :src="imgLink" class="opacity-80 img-shadow">
				<h3 class="position-absolute bottom-left-0 ml-4 mb-4 text-white">{{data.text}}</h3>

			</div>
		</router-link>
	</div>
</template>

<script>
export default {
	name: "SquareImgLink",
	props:{
		data: Object,
		imgLink: String,
	}
}
</script>

<style scoped>
.bottom-left-0{
	bottom: 0;
	left: 0;
}

.opacity-80{
	opacity: 0.80;
}

.img-shadow{
	box-shadow: 0 0 35px rgba(99, 99, 99, 85);
	border-radius: 20px;
}

</style>
