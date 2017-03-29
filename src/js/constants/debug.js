/**
 * Special check if the debug mode is activated. If yes, add a special sandbox city with
 * goodies, nice trades and a cool alliance.
 * Throw in some coins too.
 */
if (civitas.DEBUG === true) {
	civitas.CITIES['Sandbox'] = {
		nationality: civitas.NATION_ASSYRIAN,
		ruler: 'Sandking',
		avatar: 1,
		icon: 2,
		climate: civitas.CLIMATE_TEMPERATE,
		personality: civitas.PERSONALITY_DIPLOMAT,
		level: 30,
		resources: {
			'coins': 1000000,
			'prestige': 999
		},
		trades: {
			'imports': {
				gold: civitas.IMPORTANCE_VITAL,
				goldores: civitas.IMPORTANCE_VITAL,
				weapons: civitas.IMPORTANCE_VITAL,
				weapons: civitas.IMPORTANCE_VITAL,
				milk: civitas.IMPORTANCE_VITAL,
				gems: civitas.IMPORTANCE_VITAL,
				pearls: civitas.IMPORTANCE_VITAL
			},
			'exports': {
				stones: civitas.IMPORTANCE_VITAL,
				wood: civitas.IMPORTANCE_VITAL,
				ironores: civitas.IMPORTANCE_VITAL,
				goldores: civitas.IMPORTANCE_VITAL,
				copper: civitas.IMPORTANCE_VITAL,
				clay: civitas.IMPORTANCE_VITAL,
				iron: civitas.IMPORTANCE_VITAL,
				gold: civitas.IMPORTANCE_VITAL,
				meat: civitas.IMPORTANCE_VITAL,
				bread: civitas.IMPORTANCE_VITAL,
				coal: civitas.IMPORTANCE_VITAL
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
