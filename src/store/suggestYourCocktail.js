export const suggestYourCocktail = {
	state: () => ({
		infoPage:{
			name: 'Propose ton cocktail'
		},
		recipe:{
			authorName:'',
			authorEmail:'',
			authorCredit:false,
			recipeName:'',
			conditionGenerale:false,
			items:{
				alcohol:{
					title:'Alcools',
					placeholder:'Indiquer les bonnes doses d\'alcools..',
					newValue:'',
					array:[],
				},
				soft:{
					title:'Softs',
					placeholder:'Indiquer les bonnes doses de softs..',
					newValue:'',
					array:[],
				},
				other:{
					title:'Autres',
					placeholder:'Indiquer les autres ingrédients ..',
					newValue:'',
					array:[],
				},
			},
			stepsRecipe:{
				steps:[],
				newStep:{
					n:'',
					title:'',
					desc:''
				},
			}
		}
	})

}
