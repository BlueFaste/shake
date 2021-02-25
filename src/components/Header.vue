<template>
	<header>
		<b-navbar class="d-flex justify-content-between mx-2 py-2">
			<b-navbar-brand>
				<router-link to="/">
					<img src="../assets/shake-typo.png" alt="Shake!" style="width: 5rem;">
				</router-link>
			</b-navbar-brand>
			<b-navbar-nav class="ml-auto">
				<b-nav-form class="position-relative">
					<b-form-input role="search"
												size="sm"
												class="search text-white"
												:placeholder="search.placeholder"
												v-model="search.searchText"></b-form-input>
					<router-link :to="`/search/${search.searchText}`">
						<b-icon
								role="button"
								icon="search"
								variant="light"
								class="position-absolute icon-search"></b-icon>
					</router-link>
				</b-nav-form>
			</b-navbar-nav>
		</b-navbar>
	</header>

</template>

<script>
export default {
	name: "Header",
	data() {
		return {
			search: this.$store.state.search
		}
	},
}
</script>

<style scoped>
.search, .search:focus {
	background-color: #313131;
	border: none;
	border-radius: 20px;
	width: 50vw;
}

.search::placeholder {
	color: white;
	opacity: 0.5;
}

.icon-search {
	right: 1rem;
	bottom: 0.5rem;
	transform: scaleX(-1);
	-moz-transform: scaleX(-1);
	-webkit-transform: scaleX(-1);
	-ms-transform: scaleX(-1);
}
</style>
