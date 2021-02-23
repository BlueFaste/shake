<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App"/>

		<b-button variant="primary">test</b-button>
		{{test}}
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'Home',
	components: {
		HelloWorld
	},
	data(){
		return{
			test: this.$store.state.test.test,

		}
	}
}
</script>
