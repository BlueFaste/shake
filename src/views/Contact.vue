<template>
	<main role="main">
		<RecipeBanner :img-link="require('../assets/background/ContactBanner.png')"
									:recipe="contact.infoPage"></RecipeBanner>
		<section class="my-4">
			<p>Aenean eget mattis lectus. Proin id sollicitudin nisi. Nullam vitae diam vestibulum, pulvinar nulla nen.</p>
			<p class="text-obligatoire">Les champs suivis d'un <span class="text-danger star-obligatoire">*</span> sont obligatoire</p>
			<b-form class="my-4">
				<h2 class="Montserrat-bold">Informations personnelles <span class="text-danger star-obligatoire">*</span> :</h2>
				<div class="position-relative">
					<label for="authorName" class="sr-only">Prénom ou pseudo <span class="text-danger star-obligatoire">*</span></label>
					<b-form-input size="sm"
												id="authorName"
												class="search text-white my-2"
												placeholder="Prénom ou pseudo"
												autocomplete="username"
												v-model="contact.contact.authorName"></b-form-input>
					<label for="authorEmail" class="sr-only">Email <span class="text-danger star-obligatoire">*</span></label>
					<b-form-input size="sm"
												id="authorEmail"
												type="email"
												class="search text-white my-2"
												placeholder="E-mail"
												autocomplete="email"
												v-model="contact.contact.authorEmail"></b-form-input>
				</div>
			</b-form>
			<div class="my-4">
				<h2><label class="Montserrat-bold" for="message">Votre message <span class="text-danger star-obligatoire">*</span></label> :</h2>
				<div class="position-relative">
					<b-form-textarea size="sm" id="message" class="search text-white my-2" placeholder="Bonjour, ..." rows="4" v-model="contact.contact.message"></b-form-textarea>
				</div>
			</div>
		</section>

		<div class="d-flex justify-content-center my-5" @click="sendMessage">
			<OrangeButton title="Envoyer le message" text="Envoyer le message"></OrangeButton>
		</div>

		<b-modal
				ref="modal-send-message"
				id="modal-send-message"
				title="Message envoyée"
				header-bg-variant="dark"
				header-text-variant="light"
				body-bg-variant="dark"
				body-text-variant="light"
				footer-bg-variant="dark"
				footer-text-variant="light"
				centered>
			<p>Votre message a été envoyée à nos équipes.</p>
			<p>Merci pour votre contribution !</p>
			<p>N'oubliez pas de Shake!</p>

			<template #modal-footer>
				<b-button
						variant="warning"
						size="sm"
						class="float-right"
						@click="$bvModal.hide('modal-send-message')"
				>
					Ok !
				</b-button>
			</template>
		</b-modal>

	</main>
</template>

<script>
import RecipeBanner from "@/components/RecipeBanner";
import OrangeButton from "@/components/OrangeButton";

export default {
	name: "Contact",
	components: {OrangeButton, RecipeBanner},
	data() {
		return {
			contact: this.$store.state.contact
		}
	},
	methods: {
		sendMessage() {
			// this.$bvModal.show('modal-send-message')

			console.log('ture')
			console.log(this.contact.contact.authorName)
			console.log(this.contact.contact.authorEmail)
			console.log(this.contact.contact.message)
			if (this.contact.contact.authorName != '' && this.contact.contact.authorEmail != '' && this.contact.contact.message != '') {
				this.$bvModal.show('modal-send-message')
				console.log('contact ok')
			} else {
				console.log('pb info perso')
			}
		},

	}
}
</script>

<style scoped>
.search, .search:focus {
	background-color: #313131;
	border: none;
	border-radius: 20px;
	width: 100%;
}

.search::placeholder {
	color: white;
	font-size: 0.8rem;
	opacity: 0.5;
}

.star-obligatoire{
	font-size: 1rem;
}

.text-obligatoire{
	font-size: 0.7rem;
}

@media (min-width:1024px ) {
	.search, .search:focus {
		width: 60%;
	}
	}
</style>
