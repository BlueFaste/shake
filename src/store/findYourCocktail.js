export const findYourCocktail = {
	state: () => ({
		infoPage: {
			name: 'Trouve ton cocktail'
		},
		yourItems: {
			alcohol: {
				title: 'Alcools',
				placeholder: 'Entrez les alcools à votre disposition..',
				newValue: '',
				array: [],
				alcohol: true,
			},
			soft: {
				title: 'Softs',
				placeholder: 'Entrez les softs à votre disposition..',
				newValue: '',
				array: [],
			},
			other: {
				title: 'Autres',
				placeholder: 'Entrez tout autre ingrédient utile..',
				newValue: '',
				array: [],
			},
		}
	})

}
