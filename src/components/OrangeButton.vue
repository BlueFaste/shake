<template>
	<b-button class="orange-button px-4">
		{{text}}
	</b-button>

</template>

<script>
export default {
	name: "OrangeButton",
	props:{
		text: String
	}
}
</script>

<style scoped>
.orange-button{
	background-color: #F6A31E;
	font-family: Montserrat-bold !important;
	border-radius: 20px;
	border: none;
}

</style>
