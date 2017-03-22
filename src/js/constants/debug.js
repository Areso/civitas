/**
 * Special check if the debug mode is activated. If yes, add a special sandbox city with
 * goodies, nice trades and a cool alliance.
 * Throw in some coins too.
 */
if (city_builder.DEBUG === true) {
	city_builder.RESOURCES['coins']['storage'] = 1000000;
	city_builder.CITIES['Sandbox'] = {
		nationality: city_builder.NATION_TYPE_ASSYRIAN,
		ruler: 'Sandking',
		avatar: 1,
		climate: city_builder.CLIMATE_TYPE_TEMPERATE,
		personality: city_builder.PERSONALITY_TYPE_DIPLOMAT,
		level: 30,
		prestige: 999,
		trades: {
			'imports': {
				gold: city_builder.GOODS_IMPORTANCE_VITAL,
				goldores: city_builder.GOODS_IMPORTANCE_VITAL,
				weapons: city_builder.GOODS_IMPORTANCE_VITAL,
				weapons: city_builder.GOODS_IMPORTANCE_VITAL,
				milk: city_builder.GOODS_IMPORTANCE_VITAL,
				gems: city_builder.GOODS_IMPORTANCE_VITAL,
				pearls: city_builder.GOODS_IMPORTANCE_VITAL
			},
			'exports': {
				stones: city_builder.GOODS_IMPORTANCE_VITAL,
				wood: city_builder.GOODS_IMPORTANCE_VITAL,
				ironores: city_builder.GOODS_IMPORTANCE_VITAL,
				goldores: city_builder.GOODS_IMPORTANCE_VITAL,
				copper: city_builder.GOODS_IMPORTANCE_VITAL,
				clay: city_builder.GOODS_IMPORTANCE_VITAL,
				iron: city_builder.GOODS_IMPORTANCE_VITAL,
				gold: city_builder.GOODS_IMPORTANCE_VITAL,
				meat: city_builder.GOODS_IMPORTANCE_VITAL,
				bread: city_builder.GOODS_IMPORTANCE_VITAL,
				coal: city_builder.GOODS_IMPORTANCE_VITAL
			}
		},
		army: {
			'Militia': 99,
			'Axeman': 99,
			'Knight': 99,
			'Bowman': 99,
			'Crossbowman': 99,
			'Pikeman': 99
		},
		navy: {
			'Corsair': 99,
			'Caravel': 99,
			'Warship': 99
		},
		location: {
			x: 460,
			y: 410
		}
	};
}
