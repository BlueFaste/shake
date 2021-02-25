<template>
	<div class="princ-container">
		<div id="app" v-if="mobile">
			<div>
				<Header></Header>
				<router-view class="mx-4 mt-4"/>
			</div>
			<Footer></Footer>
		</div>

		<div v-else id="pc">
			<router-view class="px-4 pt-4"/>
		</div>

	</div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default {
	name: 'App',
	components: {
		Header,
		Footer,

	},
	data() {
		return {
			mobile: true,
		}
	},
	updated() {
		window.scrollTo(0, 0)
	},
}
</script>

<style>

@media (min-width:1024px ) {
	.hidden-pc {
		display: none !important;
	}

	.princ-container{
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		background-color: #3A3A3A;
	}

	#app{
		width: 60vw;
		box-shadow: 0 0 35px rgba(40, 40, 40, 85);
		padding: 2rem;

	}
}

@media (max-width: 1024px) {
	.hidden-portable {
		display: none !important;
	}
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/*text-align: center;*/

	background-color: #1C1C1C;
	min-height: 100vh;

	font-size: 100%;

}

#pc {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/*text-align: center;*/

	background-color: black;

}


.content-box {
	box-sizing: content-box;
}

.img-shadow {
	box-shadow: 0 0 35px rgba(40, 40, 40, 85);
	border-radius: 20px;
}

a {
	color: white !important;
}

@font-face {
	font-family: 'DM Serif Display';
	src: url("assets/font/DMSerifDisplay-Regular.ttf");
}

.DM-Serif-Display {
	font-family: 'DM Serif Display', sans-serif;
}

@font-face {
	font-family: Montserrat;
	src: url("assets/font/Montserrat-Regular.ttf");
}

@font-face {
	font-family: Montserrat-bold;
	src: url("assets/font/Montserrat-Bold.ttf");
}

.Montserrat {
	font-family: Montserrat, sans-serif;
}

.Montserrat-bold {
	font-family: Montserrat-bold, sans-serif;
}

* {
	font-family: Montserrat, sans-serif;
	color: white;
}

h1, h2, h3, h4, h5, h6 {
	font-family: 'DM Serif Display', sans-serif;
}

h1 {
	font-size: 2rem !important;
}

h2 {
	font-size: 1.5rem !important;
}

h3{
	font-size: 1.25rem !important;
}

</style>
