<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


.content-box{
	box-sizing: content-box;
}

.img-shadow{
	box-shadow: 0 0 35px rgba(99, 99, 99, 85);
	border-radius: 20px;
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
}

h1,h2,h3,h4,h5,h6{
	font-family: 'DM Serif Display', sans-serif;
}
</style>
