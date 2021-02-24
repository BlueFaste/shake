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
				steps:[{
					n:'01',
					title:'Pilez la glace',
					desc:'Mettez vos glaçons dans un torchon, refermez-le puis, à l\'aide d\'un rouleau à pâtisserie, pilez la glace. Versez dans un bol et réservez au congélateur.'
				},],
				newStep:{
					n:'',
					title:'',
					desc:''
				},
			}
		}
	})

}
