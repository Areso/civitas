/**
 * Special check if the debug mode is activated. If yes, add a special sandbox city with
 * goodies, nice trades and a cool alliance.
 * Throw in some coins too.
 */
if (civitas.DEBUG === true) {
	civitas.CITIES['Sandbox'] = {
		nationality: civitas.NATION_TYPE_ASSYRIAN,
		ruler: 'Sandking',
		avatar: 1,
		icon: 2,
		climate: civitas.CLIMATE_TYPE_TEMPERATE,
		personality: civitas.PERSONALITY_TYPE_DIPLOMAT,
		level: 30,
		resources: {
			'coins': 1000000,
			'prestige': 999
		},
		trades: {
			'imports': {
				gold: civitas.GOODS_IMPORTANCE_VITAL,
				goldores: civitas.GOODS_IMPORTANCE_VITAL,
				weapons: civitas.GOODS_IMPORTANCE_VITAL,
				weapons: civitas.GOODS_IMPORTANCE_VITAL,
				milk: civitas.GOODS_IMPORTANCE_VITAL,
				gems: civitas.GOODS_IMPORTANCE_VITAL,
				pearls: civitas.GOODS_IMPORTANCE_VITAL
			},
			'exports': {
				stones: civitas.GOODS_IMPORTANCE_VITAL,
				wood: civitas.GOODS_IMPORTANCE_VITAL,
				ironores: civitas.GOODS_IMPORTANCE_VITAL,
				goldores: civitas.GOODS_IMPORTANCE_VITAL,
				copper: civitas.GOODS_IMPORTANCE_VITAL,
				clay: civitas.GOODS_IMPORTANCE_VITAL,
				iron: civitas.GOODS_IMPORTANCE_VITAL,
				gold: civitas.GOODS_IMPORTANCE_VITAL,
				meat: civitas.GOODS_IMPORTANCE_VITAL,
				bread: civitas.GOODS_IMPORTANCE_VITAL,
				coal: civitas.GOODS_IMPORTANCE_VITAL
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
			y: 260
		}
	};
}
