<template>
	<div>
		<div id="app" v-if="mobile">
			<Header></Header>
			<router-view class="mx-4 mt-4"/>
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
	data(){
		return{
			mobile: false,
		}
	},
	mounted() {
		this.verifUserAgent()
	},
	updated() {
		window.scrollTo(0,0)
		console.log('test',navigator.userAgent)
		let userAgent = navigator.userAgent
		this.mobile = userAgent.includes('Mobile')
		console.log(this.mobile)
		// this.verifUserAgent()

	},
	methods:{
		verifUserAgent(){
			console.log('test',navigator.userAgent)
			let userAgent = navigator.userAgent
			this.mobile = userAgent.includes('Mobile')
			console.log(this.mobile)
			if(!this.mobile){
				this.$router.push({name:'HomePc'})
			}
		}
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

#pc {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/

	background-color: black;

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
