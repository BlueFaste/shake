export const recipes = {
	state: () => ({
		allRecipes: {
			name:'Toutes nos recettes',
		},
		findCocktail:{
			name: 'Trouve ton coctail'
		},
		strawberryParadise: {
			name: 'Strawberry Paradise',
			desc:'Aenean eget mattis lectus. Proin id sollicitudin nisi. Nullam vitae diam vestibulum, pulvinar nulla nec, pellentesque magna. Aenean varius ut lacus laoreet sollicitudin. Morbi et tortor rutrum, rutrum metus sit amet, ornare ligula. Quisque semper sapien a est vestibulum, eu porttitor velit rhoncus. Phasellus nibh orci, facilisis vel elit eu, feugiat pulvinar ipsum. Praesent at magna augue.',
			ingredient:{
				alcohol:['4cl de rhum blanc'],
				soft : ['1 eau gazeuse', '2cl de sirop de sucre de canne'],
				other:['6 feuilles de menthe', '1/2 citron vert', '10 glaçons']
			},
			link:'/recette/strawberryParadise'
		},
		mojito: {
			name: 'Mojito',
			desc:'Aenean eget mattis lectus. Proin id sollicitudin nisi. Nullam vitae diam vestibulum, pulvinar nulla nec, pellentesque magna. Aenean varius ut lacus laoreet sollicitudin. Morbi et tortor rutrum, rutrum metus sit amet, ornare ligula. Quisque semper sapien a est vestibulum, eu porttitor velit rhoncus. Phasellus nibh orci, facilisis vel elit eu, feugiat pulvinar ipsum. Praesent at magna augue.',
			ingredient:{
				alcohol:['4cl de rhum blanc'],
				soft : ['1 eau gazeuse', '2cl de sirop de sucre de canne'],
				other:['6 feuilles de menthe', '1/2 citron vert', '10 glaçons']
			},
			step:[
				{
					n:'01',
					title:'Pilez la glace',
					desc:'Mettez vos glaçons dans un torchon, refermez-le puis, à l\'aide d\'un rouleau à pâtisserie, pilez la glace. Versez dans un bol et réservez au congélateur.'
				},
				{
					n:'02',
					title:'Versez les feuilles de menthe',
					desc:'On les dépose juste au fond du verre.'
				},
				{
					n:'03',
					title:'Coupez le citron',
					desc:'Coupez le citron en deux puis chaque demi citron en 6 morceaux. Ajoutez ensuite les morceaux de citron.'
				},
				{
					n:'04',
					title:'Ajoutez le sirop de sucre de canne',
					desc:''
				},
				{
					n:'05',
					title:'Pilez le tout',
					desc:'Ecrasez le citron avec un pilon spécial cocktail. Il est important que la menthe soit au fond du verre afin qu\'elle soit protégée à la fois par le sirop de sucre de canne et par les morceaux de citron.'
				},
				{
					n:'06',
					title:'Ajoutez le rhum',
					desc:'',
					alcohol:true
				},
				{
					n:'07',
					title:'Ajoutez l\'eau gazeuse',
					desc:''
				},
				{
					n:'08',
					title:'Mélangez le tout',
					desc:''
				},
			],
			link:'/recette/mojito'
		},
		pinaColada: {
				name: 'Piña Colada',
				desc:'Aenean eget mattis lectus. Proin id sollicitudin nisi. Nullam vitae diam vestibulum, pulvinar nulla nec, pellentesque magna. Aenean varius ut lacus laoreet sollicitudin. Morbi et tortor rutrum, rutrum metus sit amet, ornare ligula. Quisque semper sapien a est vestibulum, eu porttitor velit rhoncus. Phasellus nibh orci, facilisis vel elit eu, feugiat pulvinar ipsum. Praesent at magna augue.',
				ingredient:{
					alcohol:['4cl de rhum blanc'],
					soft : ['1 eau gazeuse', '2cl de sirop de sucre de canne'],
					other:['6 feuilles de menthe', '1/2 citron vert', '10 glaçons']
				},
				link:'/recette/pinaColada'
			},
		americano: {
				name: 'Americano',
				desc:'Aenean eget mattis lectus. Proin id sollicitudin nisi. Nullam vitae diam vestibulum, pulvinar nulla nec, pellentesque magna. Aenean varius ut lacus laoreet sollicitudin. Morbi et tortor rutrum, rutrum metus sit amet, ornare ligula. Quisque semper sapien a est vestibulum, eu porttitor velit rhoncus. Phasellus nibh orci, facilisis vel elit eu, feugiat pulvinar ipsum. Praesent at magna augue.',
				ingredient:{
					alcohol:['4cl de rhum blanc'],
					soft : ['1 eau gazeuse', '2cl de sirop de sucre de canne'],
					other:['6 feuilles de menthe', '1/2 citron vert', '10 glaçons']
				},
				link:'/recette/americano'
			},
		mojitoFramboise: {
			name: 'Mojito Framboise',
			desc:'Aenean eget mattis lectus. Proin id sollicitudin nisi. Nullam vitae diam vestibulum, pulvinar nulla nec, pellentesque magna. Aenean varius ut lacus laoreet sollicitudin. Morbi et tortor rutrum, rutrum metus sit amet, ornare ligula. Quisque semper sapien a est vestibulum, eu porttitor velit rhoncus. Phasellus nibh orci, facilisis vel elit eu, feugiat pulvinar ipsum. Praesent at magna augue.',
			ingredient:{
				alcohol:['4cl de rhum blanc'],
				soft : ['1 eau gazeuse', '2cl de sirop de sucre de canne'],
				other:['6 feuilles de menthe', '1/2 citron vert', '10 glaçons']
			},
			link:'/recette/mojitoFramboise'
		},
		mojitoCubain: {
			name: 'Mojito Cubain',
			desc:'Aenean eget mattis lectus. Proin id sollicitudin nisi. Nullam vitae diam vestibulum, pulvinar nulla nec, pellentesque magna. Aenean varius ut lacus laoreet sollicitudin. Morbi et tortor rutrum, rutrum metus sit amet, ornare ligula. Quisque semper sapien a est vestibulum, eu porttitor velit rhoncus. Phasellus nibh orci, facilisis vel elit eu, feugiat pulvinar ipsum. Praesent at magna augue.',
			ingredient:{
				alcohol:['4cl de rhum blanc'],
				soft : ['1 eau gazeuse', '2cl de sirop de sucre de canne'],
				other:['6 feuilles de menthe', '1/2 citron vert', '10 glaçons']
			},
			link:'/recette/mojitoCubain'
		},
		aperolSpritz: {
				name: 'Aperol Spritz',
				desc:'Aenean eget mattis lectus. Proin id sollicitudin nisi. Nullam vitae diam vestibulum, pulvinar nulla nec, pellentesque magna. Aenean varius ut lacus laoreet sollicitudin. Morbi et tortor rutrum, rutrum metus sit amet, ornare ligula. Quisque semper sapien a est vestibulum, eu porttitor velit rhoncus. Phasellus nibh orci, facilisis vel elit eu, feugiat pulvinar ipsum. Praesent at magna augue.',
				ingredient:{
					alcohol:['4cl de rhum blanc'],
					soft : ['1 eau gazeuse', '2cl de sirop de sucre de canne'],
					other:['6 feuilles de menthe', '1/2 citron vert', '10 glaçons']
				},
				link:'/recette/aperolSpritz'
			},
		caipirinha: {
				name: 'Caipirinha',
				desc:'Aenean eget mattis lectus. Proin id sollicitudin nisi. Nullam vitae diam vestibulum, pulvinar nulla nec, pellentesque magna. Aenean varius ut lacus laoreet sollicitudin. Morbi et tortor rutrum, rutrum metus sit amet, ornare ligula. Quisque semper sapien a est vestibulum, eu porttitor velit rhoncus. Phasellus nibh orci, facilisis vel elit eu, feugiat pulvinar ipsum. Praesent at magna augue.',
				ingredient:{
					alcohol:['4cl de rhum blanc'],
					soft : ['1 eau gazeuse', '2cl de sirop de sucre de canne'],
					other:['6 feuilles de menthe', '1/2 citron vert', '10 glaçons']
				},
				link:'/recette/caipirinha'
			},
		margarita: {
				name: 'Margarita',
				desc:'Aenean eget mattis lectus. Proin id sollicitudin nisi. Nullam vitae diam vestibulum, pulvinar nulla nec, pellentesque magna. Aenean varius ut lacus laoreet sollicitudin. Morbi et tortor rutrum, rutrum metus sit amet, ornare ligula. Quisque semper sapien a est vestibulum, eu porttitor velit rhoncus. Phasellus nibh orci, facilisis vel elit eu, feugiat pulvinar ipsum. Praesent at magna augue.',
				ingredient:{
					alcohol:['4cl de rhum blanc'],
					soft : ['1 eau gazeuse', '2cl de sirop de sucre de canne'],
					other:['6 feuilles de menthe', '1/2 citron vert', '10 glaçons']
				},
				link:'/recette/margarita'
			},

	})

}
