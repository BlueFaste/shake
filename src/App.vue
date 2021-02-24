<template>
  <div id="app">
		<Header></Header>
    <router-view class="mx-4 mt-4"/>
		<Footer></Footer>

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
	updated() {
		window.scrollTo(0,0)
	}
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/

	background-color: #1C1C1C;

}



.content-box{
	box-sizing: content-box;
}

.img-shadow{
	box-shadow: 0 0 35px rgba(40, 40, 40, 85);
	border-radius: 20px;
}

a{
	color:white !important;
}

@font-face {
	font-family: 'DM Serif Display';
	src: url("assets/font/DMSerifDisplay-Regular.ttf");
}

.DM-Serif-Display{
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

.Montserrat{
	font-family: Montserrat, sans-serif;
}

.Montserrat-bold{
	font-family: Montserrat-bold, sans-serif;
}

*{
	font-family: Montserrat, sans-serif;
	color:white;
}

h1,h2,h3,h4,h5,h6{
	font-family: 'DM Serif Display', sans-serif;
}

h1{
	font-size: 7vw !important;
}
h2{
	font-size: 7vw !important;
}

</style>
