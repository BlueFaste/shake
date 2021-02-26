export const recipes = {
	state: () => ({
		allRecipes: {
			name: 'Toutes nos recettes',
		},
		strawberryParadise: {
			name: 'Strawberry Paradise',
			desc: 'Aenean eget mattis lectus. Proin id sollicitudin nisi. Nullam vitae diam vestibulum, pulvinar nulla nec, pellentesque magna. Aenean varius ut lacus laoreet sollicitudin. Morbi et tortor rutrum, rutrum metus sit amet, ornare ligula. Quisque semper sapien a est vestibulum, eu porttitor velit rhoncus. Phasellus nibh orci, facilisis vel elit eu, feugiat pulvinar ipsum. Praesent at magna augue.',
			ingredient: {
				alcohol: ['4cl de rhum blanc', '2cl de rhum ambré'],
				soft: ['1 eau gazeuse', '12 cl de jus de framboise'],
				other: ['Tanches de citron', 'Feuilles de menthe']
			},
			step: [
				{
					n: '01',
					title: 'Mixer les ingrédients',
					desc: 'Dans un blender (mixer), versez les ingrédients avec 5 ou 6 glaçons et mixez le tout.'
				},
				{
					n: '02',
					title: 'Préparer le verre',
					desc: 'Versez délicatement dans le verre pour ne pa faire de mousse.'
				},
				{
					n: '03',
					title: 'Décorer le verre',
					desc: 'Décorer avec les tranches de citrons et les feuilles de menthes'
				},
			],
			link: '/recette/strawberryParadise'
		},
		mojito: {
			name: 'Mojito',
			desc: 'Le mojito, est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche. Inspiré du mint julep, et variante des Ti-punch des Antilles, Daïquiri, et Cuba libre, il est né à Cuba dans les Caraïbes dans les années 1910 ',
			ingredient: {
				alcohol: ['4cl de rhum blanc'],
				soft: ['1 eau gazeuse', '2cl de sirop de sucre de canne'],
				other: ['6 feuilles de menthe', '1/2 citron vert', '10 glaçons']
			},
			step: [
				{
					n: '01',
					title: 'Pilez la glace',
					desc: 'Mettez vos glaçons dans un torchon, refermez-le puis, à l\'aide d\'un rouleau à pâtisserie, pilez la glace. Versez dans un bol et réservez au congélateur.'
				},
				{
					n: '02',
					title: 'Versez les feuilles de menthe',
					desc: 'On les dépose juste au fond du verre.'
				},
				{
					n: '03',
					title: 'Coupez le citron',
					desc: 'Coupez le citron en deux puis chaque demi citron en 6 morceaux. Ajoutez ensuite les morceaux de citron.'
				},
				{
					n: '04',
					title: 'Ajoutez le sirop de sucre de canne',
					desc: ''
				},
				{
					n: '05',
					title: 'Pilez le tout',
					desc: 'Ecrasez le citron avec un pilon spécial cocktail. Il est important que la menthe soit au fond du verre afin qu\'elle soit protégée à la fois par le sirop de sucre de canne et par les morceaux de citron.'
				},
				{
					n: '06',
					title: 'Ajoutez le rhum',
					desc: '',
					alcohol: true
				},
				{
					n: '07',
					title: 'Ajoutez l\'eau gazeuse',
					desc: ''
				},
				{
					n: '08',
					title: 'Mélangez le tout',
					desc: ''
				},
			],
			link: '/recette/mojito'
		},
		pinaColada: {
			name: 'Piña Colada',
			desc: 'Aenean eget mattis lectus. Proin id sollicitudin nisi. Nullam vitae diam vestibulum, pulvinar nulla nec, pellentesque magna. Aenean varius ut lacus laoreet sollicitudin. Morbi et tortor rutrum, rutrum metus sit amet, ornare ligula. Quisque semper sapien a est vestibulum, eu porttitor velit rhoncus. Phasellus nibh orci, facilisis vel elit eu, feugiat pulvinar ipsum. Praesent at magna augue.',
			ingredient: {
				alcohol: ['4cl de rhum blanc', '2cl de rhum ambré'],
				soft: ['12 cl de jus d\'ananas', '4cl de lait de coco'],
				other: ['5 ou 6 glaçons']
			},
			step: [
				{
					n: '01',
					title: 'Mixer les ingrédients',
					desc: 'Dans un blender (mixer), versez les ingrédients avec 5 ou 6 glaçons et mixez le tout. Peut aussi se réaliser au shaker. '
				},
				{
					n: '02',
					title: 'Préparer le verre',
					desc: 'Versez délicatement dans le verre. '
				},
				{
					n: '03',
					title: 'Décorer le verre',
					desc: 'Décorer avec un morceau d\'ananas et une cerise confite. '
				},
			],

			link: '/recette/pinaColada'
		},
		americano: {
			name: 'Americano',
			desc: 'Aenean eget mattis lectus. Proin id sollicitudin nisi. Nullam vitae diam vestibulum, pulvinar nulla nec, pellentesque magna. Aenean varius ut lacus laoreet sollicitudin. Morbi et tortor rutrum, rutrum metus sit amet, ornare ligula. Quisque semper sapien a est vestibulum, eu porttitor velit rhoncus. Phasellus nibh orci, facilisis vel elit eu, feugiat pulvinar ipsum. Praesent at magna augue.',
			ingredient: {
				alcohol: ['8 cl de Campari', '8 cl de Cinzano rouge', '8 cl de noilly prat'],
				soft: ['1 cuillère à soupe de sirop de grenadine'],
				other: ['1 tranche d\'orange', '1tranche de citron']
			},
			step: [
				{
					n: '01',
					title: 'Mélanger tous les ingrédients ',
					desc: 'Verser tous les ingrédients dans un verre. Servir bien frais'
				},
			],
			link: '/recette/americano'
		},
		mojitoFramboise: {
			name: 'Mojito Framboise',
			desc: 'Aenean eget mattis lectus. Proin id sollicitudin nisi. Nullam vitae diam vestibulum, pulvinar nulla nec, pellentesque magna. Aenean varius ut lacus laoreet sollicitudin. Morbi et tortor rutrum, rutrum metus sit amet, ornare ligula. Quisque semper sapien a est vestibulum, eu porttitor velit rhoncus. Phasellus nibh orci, facilisis vel elit eu, feugiat pulvinar ipsum. Praesent at magna augue.',
			ingredient: {
				alcohol: ['6cl de rhum blanc'],
				soft: ['1 eau gazeuse', '1 cuillère à soupe de sucre'],
				other: ['1/2 citron vert coupé en tranches', '5 ou 6 framboises', '10 glaçons', '10 à 12 feuilles de menthe']
			},
			step: [
				{
					n: '01',
					title: 'Pilez la glace',
					desc: 'Mettez vos glaçons dans un torchon, refermez-le puis, à l\'aide d\'un rouleau à pâtisserie, pilez la glace. Versez dans un bol et réservez au congélateur.'
				},
				{
					n: '02',
					title: 'Versez les ingrédients',
					desc: 'Dans un grand verre, déposer les tranches ou quartiers de citron vert, les framboises, le sucre et quelques feuilles de menthe. Écraser le tout à l’aide d’un pilon ou d’une cuillère afin d’obtenir une purée.'
				},
				{
					n: '03',
					title: 'Ajouter la glace',
					desc: ''
				},
				{
					n: '04',
					title: 'Ajoutez le rhum',
					desc: ''
				},
			],

			link: '/recette/mojitoFramboise'
		},
		mojitoAlsacien: {
			name: 'Mojito Alsacien',
			desc: 'Aenean eget mattis lectus. Proin id sollicitudin nisi. Nullam vitae diam vestibulum, pulvinar nulla nec, pellentesque magna. Aenean varius ut lacus laoreet sollicitudin. Morbi et tortor rutrum, rutrum metus sit amet, ornare ligula. Quisque semper sapien a est vestibulum, eu porttitor velit rhoncus. Phasellus nibh orci, facilisis vel elit eu, feugiat pulvinar ipsum. Praesent at magna augue.',
			ingredient: {
				alcohol: ['6cl de rhum blanc', '10cl de crémant d\'alsace'],
				soft: ['1 eau gazeuse', '2cl de sirop de sucre de canne'],
				other: ['6 feuilles de menthe', '1/2 citron vert', '10 glaçons']
			},
			step: [
				{
					n: '01',
					title: 'Pilez la glace',
					desc: 'Mettez vos glaçons dans un torchon, refermez-le puis, à l\'aide d\'un rouleau à pâtisserie, pilez la glace. Versez dans un bol et réservez au congélateur.'
				},
				{
					n: '02',
					title: 'Versez les ingrédients',
					desc: 'Ecraser les feuilles de menthe avec le sirop de sucre de canne et du jus de citron vert à l\'aide d\'un pilon. Si vous n\'avez pas de pilon vous pouvez froisser les feuilles de menthe à la main avant de les mettre dans le verre. '
				},
				{
					n: '03',
					title: 'Ajouter la glace',
					desc: ''
				},
				{
					n: '04',
					title: 'Ajoutez le rhum et le crémant d\'Alsace',
					desc: ''
				},
			],
			link: '/recette/mojitoFramboise'
		},
		mojitoCubain: {
			name: 'Mojito Cubain',
			desc: 'Aenean eget mattis lectus. Proin id sollicitudin nisi. Nullam vitae diam vestibulum, pulvinar nulla nec, pellentesque magna. Aenean varius ut lacus laoreet sollicitudin. Morbi et tortor rutrum, rutrum metus sit amet, ornare ligula. Quisque semper sapien a est vestibulum, eu porttitor velit rhoncus. Phasellus nibh orci, facilisis vel elit eu, feugiat pulvinar ipsum. Praesent at magna augue.',
			ingredient: {
				alcohol: ['4cl de rhum blanc'],
				soft: ['1 eau gazeuse'],
				other: ['6 feuilles de menthe', '1/2 citron vert', '10 glaçons', '3 cuillères à café de sucre de canne'],
			},
			step: [
				{
					n: '01',
					title: 'Pilez la glace',
					desc: 'Mettez vos glaçons dans un torchon, refermez-le puis, à l\'aide d\'un rouleau à pâtisserie, pilez la glace. Versez dans un bol et réservez au congélateur.'
				},
				{
					n: '02',
					title: 'Versez le sucre',
					desc: 'Dans un verre de taille moyenne (contenance 40 cl environ), mettez 3 cuillères à café de sucre de canne. '
				},
				{
					n: '03',
					title: 'Ajoutez-y le jus d\'1/2 citron vert. ',
					desc: ''
				},
				{
					n: '04',
					title: 'Ajoutez les feuilles de menthe découpées',
					desc: ''
				},
				{
					n: '05',
					title: 'Ajoutez l\'eau gazeuse',
					desc: 'Ajoutez un peu d\'eau gazeuse (environ 3 cl) puis avec une cuillère à café, remuez bien le tout et écrasez la menthe. '
				},
				{
					n: '06',
					title: 'Ajoutez le rhum',
					desc: ''
				},
			],
			link: '/recette/mojitoCubain'
		},
		aperolSpritz: {
			name: 'Aperol Spritz',
			desc: 'Aenean eget mattis lectus. Proin id sollicitudin nisi. Nullam vitae diam vestibulum, pulvinar nulla nec, pellentesque magna. Aenean varius ut lacus laoreet sollicitudin. Morbi et tortor rutrum, rutrum metus sit amet, ornare ligula. Quisque semper sapien a est vestibulum, eu porttitor velit rhoncus. Phasellus nibh orci, facilisis vel elit eu, feugiat pulvinar ipsum. Praesent at magna augue.',
			ingredient: {
				alcohol: ['6 cl de Prosecco', '4 cl d\'Aperol'],
				soft: ['2 cl d\'eau gazeuse'],
				other: ['1 rondelle d\'orange ', '2 à 3 glaçons ']
			},
			step: [
				{
					n: '01',
					title: 'Verser les glaçons',
					desc: 'Remplissez votre verre de glaçons aux trois quarts. '
				},
				{
					n: '02',
					title: 'Versez les alcools',
					desc: 'Verser le prosecco puis l\'Aperol et ajoutez un trait d\'eau gazeuse.'
				},
				{
					n: '03',
					title: 'Ajouter l\'orange',
					desc: 'Plongez une rondelle d\'orange et dégustez sans attendre. '
				},

			],

			link: '/recette/aperolSpritz'
		},
		caipirinha: {
			name: 'Caipirinha',
			desc: 'Aenean eget mattis lectus. Proin id sollicitudin nisi. Nullam vitae diam vestibulum, pulvinar nulla nec, pellentesque magna. Aenean varius ut lacus laoreet sollicitudin. Morbi et tortor rutrum, rutrum metus sit amet, ornare ligula. Quisque semper sapien a est vestibulum, eu porttitor velit rhoncus. Phasellus nibh orci, facilisis vel elit eu, feugiat pulvinar ipsum. Praesent at magna augue.',
			ingredient: {
				alcohol: ['4 cl de cachaça'],
				soft: [],
				other: ['1 citron vert', '2 cuillerées à café de sucre environ (roux)', 'Glaçon']
			},
			step: [
				{
					n: '01',
					title: 'Couper le citron',
					desc: 'Rincer le citron et couper les 2 extrémités du citron puis recouper les parties blanchâtres au centre. Couper le citron en cubes et les mettre au fond d\'un verre'
				},
				{
					n: '02',
					title: 'Piler le citron avec un pilon à cocktail ',
					desc: ''
				},
				{
					n: '03',
					title: 'Piler la glace',
					desc: 'Remplir le verre de glaçons écrasés (dans un linge avec le rouleau à pâtisserie)'
				},
				{
					n: '04',
					title: 'Verser la cachaça ',
					desc: 'Remplir le verre de glaçons écrasés (dans un linge avec le rouleau à pâtisserie)'
				},
				{
					n: '05',
					title: 'Décorer le verre',
					desc: 'Remuer un peu et décorer d’une tranche de citron vert sur le bord du verre'
				},

			],

			link: '/recette/caipirinha'
		},
		margarita: {
			name: 'Margarita',
			desc: 'Aenean eget mattis lectus. Proin id sollicitudin nisi. Nullam vitae diam vestibulum, pulvinar nulla nec, pellentesque magna. Aenean varius ut lacus laoreet sollicitudin. Morbi et tortor rutrum, rutrum metus sit amet, ornare ligula. Quisque semper sapien a est vestibulum, eu porttitor velit rhoncus. Phasellus nibh orci, facilisis vel elit eu, feugiat pulvinar ipsum. Praesent at magna augue.',
			ingredient: {
				alcohol: ['5cl de tequila', '3cl de triple sec (cointreau, grand marnier'],
				soft: ['2cl de jus de citrons verts'],
				other: []
			},
			step: [
				{
					n: '01',
					title: 'Melanger les ingrédients',
					desc: 'Frapper les ingrédients au shaker avec des glaçons puis verser dans le verre givré au citron et au sel fin. (Pour givrer facilement le verre, passer le citron sur le bord du verre et tremper les bords dans le sel. )'
				},
				{
					n: '02',
					title: 'Décorer d\'une tranche de citron',
					desc: ''
				},

			],

			link: '/recette/margarita'
		},

	})

}
