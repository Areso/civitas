/**
 * City settlement.
 *
 * @constant
 * @type {Number}
 */
civitas.CITY = 0;

/**
 * Village settlement.
 *
 * @constant
 * @type {Number}
 */
civitas.VILLAGE = 1;

/**
 * List of all the settlements in the world.
 * 
 * @constant
 * @type {Object}
 */
civitas.SETTLEMENTS = {
	1: {
		icon: 7,
		climate: civitas.CLIMATE_TEMPERATE,
		religion: civitas.RELIGION_CHRISTIANITY,
		level: 35,
		resources: {
			coins: 2300000,
			prestige: 700,
			espionage: 400
		},
		trades: {
			imports: {
				gold: civitas.IMPORTANCE_MEDIUM,
				milk: civitas.IMPORTANCE_HIGH,
				goldores: civitas.IMPORTANCE_HIGH,
				weapons: civitas.IMPORTANCE_LOW,
				herbs: civitas.IMPORTANCE_HIGH,
				sugarcane: civitas.IMPORTANCE_HIGH,
				quartz: civitas.IMPORTANCE_HIGH,
				gunpowder: civitas.IMPORTANCE_HIGH,
				roses: civitas.IMPORTANCE_MEDIUM,
				wine: civitas.IMPORTANCE_VITAL,
				clay: civitas.IMPORTANCE_VITAL,
				provisions: civitas.IMPORTANCE_HIGH,
				fish: civitas.IMPORTANCE_MEDIUM,
				catapults: civitas.IMPORTANCE_MEDIUM
			},
			exports: {
				hemp: civitas.IMPORTANCE_VITAL,
				indigo: civitas.IMPORTANCE_HIGH,
				armor: civitas.IMPORTANCE_MEDIUM,
				sugar: civitas.IMPORTANCE_HIGH,
				barrels: civitas.IMPORTANCE_MEDIUM,
				paper: civitas.IMPORTANCE_HIGH,
				woodplanks: civitas.IMPORTANCE_MEDIUM,
				stones: civitas.IMPORTANCE_HIGH
			}
		},
		army: {
			militia: 40,
			axeman: 30,
			knight: 10,
			bowman: 20,
			crossbowman: 10,
			pikeman: 30
		},
		navy: {
			corsair: 4,
			caravel: 2,
			galleon: 2,
			warship: 6,
			shipoftheline: 1
		},
		location: {
			x: 380,
			y: 190
		}
	},
	2: {
		icon: 4,
		climate: civitas.CLIMATE_TROPICAL,
		religion: civitas.RELIGION_TAOISM,
		level: 32,
		resources: {
			coins: 2300000,
			prestige: 700,
			espionage: 1000
		},
		trades: {
			imports: {
				wax: civitas.IMPORTANCE_HIGH,
				pottery: civitas.IMPORTANCE_HIGH,
				sugar: civitas.IMPORTANCE_VITAL,
				sugarcane: civitas.IMPORTANCE_MEDIUM,
				glasses: civitas.IMPORTANCE_HIGH,
				furs: civitas.IMPORTANCE_VITAL,
				stones: civitas.IMPORTANCE_HIGH,
				fish: civitas.IMPORTANCE_HIGH,
				mosaic: civitas.IMPORTANCE_HIGH,
				candles: civitas.IMPORTANCE_LOW,
				bread: civitas.IMPORTANCE_VITAL,
				pearls: civitas.IMPORTANCE_LOW,
				salt: civitas.IMPORTANCE_HIGH
			},
			exports: {
				leather: civitas.IMPORTANCE_MEDIUM,
				indigo: civitas.IMPORTANCE_LOW,
				flour: civitas.IMPORTANCE_VITAL,
				donkeys: civitas.IMPORTANCE_HIGH,
				glass: civitas.IMPORTANCE_MEDIUM,
				coal: civitas.IMPORTANCE_HIGH,
				gunpowder: civitas.IMPORTANCE_HIGH,
				bottles: civitas.IMPORTANCE_HIGH,
				fish: civitas.IMPORTANCE_HIGH,
				woodplanks: civitas.IMPORTANCE_VITAL,
				wood: civitas.IMPORTANCE_VITAL
			}
		},
		navy: {
			corsair: 6,
			caravel: 4,
			galleon: 2,
			warship: 3,
			shipoftheline: 4
		},
		army: {
			militia: 40,
			axeman: 50,
			knight: 10,
			bowman: 50,
			crossbowman: 50,
			pikeman: 40
		},
		navy: {

		},
		location: {
			x: 140,
			y: 400
		}
	},
	3: {
		icon: 7,
		climate: civitas.CLIMATE_TEMPERATE,
		religion: civitas.RELIGION_JUDAISM,
		level: 30,
		resources: {
			coins: 1600000,
			prestige: 1000,
			espionage: 800
		},
		trades: {
			imports: {
				wheat: civitas.IMPORTANCE_VITAL,
				wood: civitas.IMPORTANCE_HIGH,
				barrels: civitas.IMPORTANCE_MEDIUM,
				provisions: civitas.IMPORTANCE_HIGH,
				furs: civitas.IMPORTANCE_VITAL,
				sugar: civitas.IMPORTANCE_LOW,
				bottles: civitas.IMPORTANCE_HIGH,
				jewelery: civitas.IMPORTANCE_HIGH,
				tools: civitas.IMPORTANCE_HIGH,
				woodplanks: civitas.IMPORTANCE_HIGH,
				sugarcane: civitas.IMPORTANCE_LOW,
				clay: civitas.IMPORTANCE_VITAL
			},
			exports: {
				herbs: civitas.IMPORTANCE_HIGH,
				silver: civitas.IMPORTANCE_VITAL,
				sugarcane: civitas.IMPORTANCE_HIGH,
				glasses: civitas.IMPORTANCE_LOW,
				furcoats: civitas.IMPORTANCE_MEDIUM,
				indigo: civitas.IMPORTANCE_LOW,
				pottery: civitas.IMPORTANCE_HIGH,
				wheat: civitas.IMPORTANCE_HIGH
			}
		},
		army: {
			militia: 1210,
			axeman: 520,
			crossbowman: 320,
			pikeman: 300
		},
		location: {
			x: 240,
			y: 140
		}
	},
	4: {
		icon: 5,
		climate: civitas.CLIMATE_TROPICAL,
		religion: civitas.RELIGION_BUDDHISM,
		level: 28,
		resources: {
			coins: 2000000,
			prestige: 500,
			espionage: 300
		},
		trades: {
			imports: {
				flour: civitas.IMPORTANCE_HIGH,
				milk: civitas.IMPORTANCE_VITAL,
				brass: civitas.IMPORTANCE_HIGH,
				furs: civitas.IMPORTANCE_LOW,
				goldores: civitas.IMPORTANCE_HIGH,
				fibers: civitas.IMPORTANCE_MEDIUM,
				fish: civitas.IMPORTANCE_VITAL,
				cider: civitas.IMPORTANCE_LOW,
				silk: civitas.IMPORTANCE_HIGH,
				cattle: civitas.IMPORTANCE_MEDIUM,
				wheat: civitas.IMPORTANCE_VITAL
			},
			exports: {
				meat: civitas.IMPORTANCE_VITAL,
				clothes: civitas.IMPORTANCE_VITAL,
				fish: civitas.IMPORTANCE_HIGH,
				bottles: civitas.IMPORTANCE_HIGH,
				camels: civitas.IMPORTANCE_HIGH,
				armor: civitas.IMPORTANCE_MEDIUM,
				gunpowder: civitas.IMPORTANCE_HIGH,
				pottery: civitas.IMPORTANCE_HIGH,
				coffeebeans: civitas.IMPORTANCE_HIGH,
				silk: civitas.IMPORTANCE_LOW
			}
		},
		army: {
			militia: 90,
			axeman: 70,
			bowman: 50,
			crossbowman: 30,
			pikeman: 90
		},
		location: {
			x: 890,
			y: 150
		}
	},
	5: {
		icon: 5,
		climate: civitas.CLIMATE_ARID,
		religion: civitas.RELIGION_ISLAM,
		level: 39,
		resources: {
			coins: 2000000,
			prestige: 800,
			espionage: 900
		},
		trades: {
			imports: {
				barrels: civitas.IMPORTANCE_HIGH,
				books: civitas.IMPORTANCE_LOW,
				paper: civitas.IMPORTANCE_LOW,
				coal: civitas.IMPORTANCE_VITAL,
				provisions: civitas.IMPORTANCE_HIGH,
				herbs: civitas.IMPORTANCE_HIGH,
				tools: civitas.IMPORTANCE_HIGH,
				copper: civitas.IMPORTANCE_MEDIUM,
				mosaic: civitas.IMPORTANCE_MEDIUM,
				woodplanks: civitas.IMPORTANCE_HIGH,
				indigo: civitas.IMPORTANCE_HIGH
			},
			exports: {
				coal: civitas.IMPORTANCE_VITAL,
				ironores: civitas.IMPORTANCE_LOW,
				copper: civitas.IMPORTANCE_MEDIUM,
				goldores: civitas.IMPORTANCE_LOW,
				oil: civitas.IMPORTANCE_HIGH,
				camels: civitas.IMPORTANCE_VITAL,
				iron: civitas.IMPORTANCE_LOW,
				gold: civitas.IMPORTANCE_VITAL,
				catapults: civitas.IMPORTANCE_MEDIUM,
				brass: civitas.IMPORTANCE_LOW
			}
		},
		army: {
			militia: 40,
			axeman: 120,
			knight: 10,
			bowman: 120,
			crossbowman: 30,
			pikeman: 50
		},
		location: {
			x: 830,
			y: 530
		}
	},
	6: {
		icon: 2,
		climate: civitas.CLIMATE_TROPICAL,
		religion: civitas.RELIGION_HINDUISM,
		level: 29,
		resources: {
			coins: 1900000,
			prestige: 700,
			espionage: 500
		},
		trades: {
			imports: {
				meat: civitas.IMPORTANCE_HIGH,
				milk: civitas.IMPORTANCE_LOW,
				weapons: civitas.IMPORTANCE_VITAL,
				roses: civitas.IMPORTANCE_MEDIUM,
				fibers: civitas.IMPORTANCE_HIGH,
				perfume: civitas.IMPORTANCE_LOW,
				sulphur: civitas.IMPORTANCE_HIGH,
				goldores: civitas.IMPORTANCE_HIGH,
				jewelery: civitas.IMPORTANCE_HIGH,
				iron: civitas.IMPORTANCE_VITAL,
				ironores: civitas.IMPORTANCE_VITAL
			},
			exports: {
				brine: civitas.IMPORTANCE_MEDIUM,
				clothes: civitas.IMPORTANCE_HIGH,
				glass: civitas.IMPORTANCE_HIGH,
				oil: civitas.IMPORTANCE_HIGH,
				wheat: civitas.IMPORTANCE_VITAL,
				pottery: civitas.IMPORTANCE_HIGH,
				hides: civitas.IMPORTANCE_LOW,
				paper: civitas.IMPORTANCE_HIGH
			}
		},
		army: {
			militia: 200,
			bowman: 200,
		},
		location: {
			x: 690,
			y: 60
		}
	},
	7: {
		icon: 4,
		climate: civitas.CLIMATE_ARID,
		religion: civitas.RELIGION_CHRISTIANITY,
		level: 22,
		resources: {
			coins: 6300000,
			prestige: 780,
			espionage: 400
		},
		trades: {
			imports: {
				silk: civitas.IMPORTANCE_LOW,
				clothes: civitas.IMPORTANCE_HIGH,
				leather: civitas.IMPORTANCE_HIGH,
				bottles: civitas.IMPORTANCE_HIGH,
				brine: civitas.IMPORTANCE_MEDIUM,
				hides: civitas.IMPORTANCE_HIGH,
				clay: civitas.IMPORTANCE_MEDIUM,
				bottles: civitas.IMPORTANCE_MEDIUM,
				pottery: civitas.IMPORTANCE_HIGH,
				meat: civitas.IMPORTANCE_MEDIUM
			},
			exports: {
				ropes: civitas.IMPORTANCE_MEDIUM,
				gold: civitas.IMPORTANCE_LOW,
				iron: civitas.IMPORTANCE_VITAL,
				gunpowder: civitas.IMPORTANCE_HIGH,
				sulphur: civitas.IMPORTANCE_HIGH,
				ironores: civitas.IMPORTANCE_MEDIUM,
				copper: civitas.IMPORTANCE_HIGH,
				camels: civitas.IMPORTANCE_HIGH,
				woodplanks: civitas.IMPORTANCE_MEDIUM,
				coal: civitas.IMPORTANCE_LOW
			}
		},
		army: {
			militia: 40,
			axeman: 30,
			knight: 10,
			bowman: 20,
			crossbowman: 10,
			pikeman: 30
		},
		location: {
			x: 300,
			y: 480
		}
	},
	8: {
		icon: 7,
		climate: civitas.CLIMATE_POLAR,
		religion: civitas.RELIGION_CHRISTIANITY,
		level: 29,
		resources: {
			coins: 3000000,
			prestige: 200,
			espionage: 850
		},
		trades: {
			imports: {
				furs: civitas.IMPORTANCE_HIGH,
				goldores: civitas.IMPORTANCE_HIGH,
				gold: civitas.IMPORTANCE_VITAL,
				milk: civitas.IMPORTANCE_MEDIUM,
				brine: civitas.IMPORTANCE_VITAL,
				leather: civitas.IMPORTANCE_LOW,
				herbs: civitas.IMPORTANCE_HIGH,
				woodplanks: civitas.IMPORTANCE_MEDIUM,
				fish: civitas.IMPORTANCE_VITAL,
				furcoats: civitas.IMPORTANCE_VITAL
			},
			exports: {
				herbs: civitas.IMPORTANCE_VITAL,
				statues: civitas.IMPORTANCE_VITAL,
				camels: civitas.IMPORTANCE_HIGH,
				wax: civitas.IMPORTANCE_HIGH,
				barrels: civitas.IMPORTANCE_MEDIUM,
				candles: civitas.IMPORTANCE_LOW,
				armor: civitas.IMPORTANCE_HIGH,
				salt: civitas.IMPORTANCE_MEDIUM
			}
		},
		army: {
			militia: 40,
			axeman: 30,
			knight: 10,
			bowman: 20,
			crossbowman: 10,
			pikeman: 30
		},
		location: {
			x: 700,
			y: 280
		}
	},
	9: {
		icon: 4,
		climate: civitas.CLIMATE_TEMPERATE,
		religion: civitas.RELIGION_CONFUCIANISM,
		level: 30,
		resources: {
			coins: 3300000,
			prestige: 900,
			espionage: 900
		},
		trades: {
			imports: {
				perfume: civitas.IMPORTANCE_MEDIUM,
				coffee: civitas.IMPORTANCE_LOW,
				cider: civitas.IMPORTANCE_HIGH,
				hemp: civitas.IMPORTANCE_HIGH,
				bottles: civitas.IMPORTANCE_HIGH,
				wine: civitas.IMPORTANCE_HIGH,
				hides: civitas.IMPORTANCE_VITAL,
				beer: civitas.IMPORTANCE_HIGH,
				mosaic: civitas.IMPORTANCE_VITAL,
				woodplanks: civitas.IMPORTANCE_HIGH,
				silk: civitas.IMPORTANCE_MEDIUM
			},
			exports: {
				statues: civitas.IMPORTANCE_VITAL,
				barrels: civitas.IMPORTANCE_MEDIUM,
				brine: civitas.IMPORTANCE_LOW,
				brass: civitas.IMPORTANCE_VITAL,
				candlesticks: civitas.IMPORTANCE_LOW,
				cattle: civitas.IMPORTANCE_VITAL,
				glass: civitas.IMPORTANCE_MEDIUM,
				gold: civitas.IMPORTANCE_MEDIUM,
				wheat: civitas.IMPORTANCE_MEDIUM,
				iron: civitas.IMPORTANCE_LOW,
				grapes: civitas.IMPORTANCE_HIGH,
				hemp: civitas.IMPORTANCE_HIGH,
				herbs: civitas.IMPORTANCE_HIGH,
				quartz: civitas.IMPORTANCE_MEDIUM
			}
		},
		army: {
			militia: 40,
			axeman: 320,
			knight: 10,
			bowman: 220,
			crossbowman: 210,
			pikeman: 90
		},
		location: {
			x: 920,
			y: 440
		}
	},
	10: {
		icon: 7,
		climate: civitas.CLIMATE_TEMPERATE,
		religion: civitas.RELIGION_BUDDHISM,
		level: 28,
		resources: {
			coins: 2200000,
			prestige: 160,
			espionage: 500
		},
		trades: {
			imports: {
				flour: civitas.IMPORTANCE_LOW,
				bread: civitas.IMPORTANCE_HIGH,
				fibers: civitas.IMPORTANCE_HIGH,
				woodplanks: civitas.IMPORTANCE_MEDIUM,
				armor: civitas.IMPORTANCE_HIGH,
				brass: civitas.IMPORTANCE_MEDIUM,
				sulphur: civitas.IMPORTANCE_HIGH,
				brine: civitas.IMPORTANCE_MEDIUM,
				copper: civitas.IMPORTANCE_VITAL,
				clay: civitas.IMPORTANCE_MEDIUM,
				coal: civitas.IMPORTANCE_VITAL
			},
			exports: {
				wood: civitas.IMPORTANCE_LOW,
				meat: civitas.IMPORTANCE_HIGH,
				jewelery: civitas.IMPORTANCE_HIGH,
				camels: civitas.IMPORTANCE_MEDIUM,
				gunpowder: civitas.IMPORTANCE_HIGH,
				stones: civitas.IMPORTANCE_VITAL,
				wine: civitas.IMPORTANCE_MEDIUM
			}
		},
		army: {
			militia: 90,
			axeman: 90,
			knight: 1,
			bowman: 20,
			crossbowman: 20,
			pikeman: 30
		},
		location: {
			x: 900,
			y: 30
		}
	},
	11: {
		icon: 7,
		climate: civitas.CLIMATE_TROPICAL,
		religion: civitas.RELIGION_TAOISM,
		level: 23,
		resources: {
			coins: 1800000,
			prestige: 200,
			espionage: 450
		},
		trades: {
			imports: {
				furs: civitas.IMPORTANCE_LOW,
				bread: civitas.IMPORTANCE_VITAL,
				hides: civitas.IMPORTANCE_MEDIUM,
				clay: civitas.IMPORTANCE_HIGH,
				milk: civitas.IMPORTANCE_LOW,
				fibers: civitas.IMPORTANCE_MEDIUM,
				tools: civitas.IMPORTANCE_HIGH,
				goldores: civitas.IMPORTANCE_HIGH,
				gold: civitas.IMPORTANCE_HIGH,
				furcoats: civitas.IMPORTANCE_HIGH,
				leather: civitas.IMPORTANCE_LOW
			},
			exports: {
				spyglasses: civitas.IMPORTANCE_VITAL,
				wax: civitas.IMPORTANCE_LOW,
				bottles: civitas.IMPORTANCE_HIGH,
				armor: civitas.IMPORTANCE_HIGH,
				candles: civitas.IMPORTANCE_LOW,
				salt: civitas.IMPORTANCE_MEDIUM,
				copper: civitas.IMPORTANCE_VITAL,
				stones: civitas.IMPORTANCE_HIGH,
				sugarcane: civitas.IMPORTANCE_HIGH
			}
		},
		army: {
			militia: 40,
			axeman: 30,
			knight: 10,
			bowman: 20,
			crossbowman: 10,
			pikeman: 30
		},
		navy: {
			corsair: 2,
			caravel: 2,
			galleon: 2,
			warship: 2
		},
		location: {
			x: 144,
			y: 290
		}
	},
	12: {
		icon: 7,
		climate: civitas.CLIMATE_ARID,
		religion: civitas.RELIGION_ISLAM,
		level: 27,
		resources: {
			coins: 1800000,
			prestige: 300,
			espionage: 300
		},
		trades: {
			imports: {
				cider: civitas.IMPORTANCE_LOW,
				ropes: civitas.IMPORTANCE_LOW,
				armor: civitas.IMPORTANCE_HIGH,
				wax: civitas.IMPORTANCE_MEDIUM,
				sugar: civitas.IMPORTANCE_LOW,
				bottles: civitas.IMPORTANCE_HIGH,
				bread: civitas.IMPORTANCE_VITAL,
				wood: civitas.IMPORTANCE_VITAL,
				woodplanks: civitas.IMPORTANCE_MEDIUM,
				stones: civitas.IMPORTANCE_VITAL
			},
			exports: {
				almonds: civitas.IMPORTANCE_LOW,
				roses: civitas.IMPORTANCE_HIGH,
				grapes: civitas.IMPORTANCE_LOW,
				hemp: civitas.IMPORTANCE_LOW,
				oil: civitas.IMPORTANCE_HIGH,
				coffeebeans: civitas.IMPORTANCE_LOW,
				coffee: civitas.IMPORTANCE_LOW,
				catapults: civitas.IMPORTANCE_MEDIUM,
				spices: civitas.IMPORTANCE_MEDIUM
			}
		},
		army: {
			militia: 40,
			axeman: 30,
			knight: 10,
			bowman: 20,
			crossbowman: 10,
			pikeman: 30
		},
		location: {
			x: 300,
			y: 60
		}
	},
	13: {
		icon: 4,
		climate: civitas.CLIMATE_TEMPERATE,
		religion: civitas.RELIGION_ISLAM,
		level: 36,
		resources: {
			coins: 2000000,
			prestige: 710,
			espionage: 450
		},
		trades: {
			imports: {
				meat: civitas.IMPORTANCE_LOW,
				milk: civitas.IMPORTANCE_LOW,
				copper: civitas.IMPORTANCE_VITAL,
				weapons: civitas.IMPORTANCE_LOW,
				roses: civitas.IMPORTANCE_MEDIUM,
				perfume: civitas.IMPORTANCE_LOW,
				sugarcane: civitas.IMPORTANCE_HIGH,
				sulphur: civitas.IMPORTANCE_HIGH,
				tools: civitas.IMPORTANCE_HIGH,
				provisions: civitas.IMPORTANCE_HIGH,
				iron: civitas.IMPORTANCE_VITAL,
				ironores: civitas.IMPORTANCE_HIGH
			},
			exports: {
				brine: civitas.IMPORTANCE_MEDIUM,
				clothes: civitas.IMPORTANCE_LOW,
				armor: civitas.IMPORTANCE_HIGH,
				glass: civitas.IMPORTANCE_HIGH,
				wheat: civitas.IMPORTANCE_VITAL,
				stones: civitas.IMPORTANCE_HIGH,
				hides: civitas.IMPORTANCE_LOW,
				pottery: civitas.IMPORTANCE_HIGH,
				paper: civitas.IMPORTANCE_LOW
			}
		},
		army: {
			militia: 120,
			bowman: 32,
		},
		location: {
			x: 700,
			y: 400
		}
	},
	14: {
		icon: 4,
		climate: civitas.CLIMATE_TROPICAL,
		religion: civitas.RELIGION_CHRISTIANITY,
		level: 38,
		resources: {
			coins: 2800000,
			prestige: 600,
			espionage: 580
		},
		trades: {
			imports: {
				meat: civitas.IMPORTANCE_LOW,
				milk: civitas.IMPORTANCE_LOW,
				weapons: civitas.IMPORTANCE_LOW,
				furs: civitas.IMPORTANCE_VITAL,
				stones: civitas.IMPORTANCE_HIGH,
				roses: civitas.IMPORTANCE_MEDIUM,
				perfume: civitas.IMPORTANCE_LOW,
				iron: civitas.IMPORTANCE_VITAL,
				ironores: civitas.IMPORTANCE_VITAL
			},
			exports: {
				brine: civitas.IMPORTANCE_MEDIUM,
				clothes: civitas.IMPORTANCE_LOW,
				glass: civitas.IMPORTANCE_HIGH,
				wheat: civitas.IMPORTANCE_VITAL,
				oil: civitas.IMPORTANCE_HIGH,
				jewelery: civitas.IMPORTANCE_HIGH,
				hides: civitas.IMPORTANCE_LOW,
				paper: civitas.IMPORTANCE_LOW
			}
		},
		army: {
			militia: 40,
			axeman: 30,
			knight: 10,
			bowman: 20,
			crossbowman: 10,
			pikeman: 30
		},
		location: {
			x: 680,
			y: 540
		}
	},
	15: {
		icon: 5,
		climate: civitas.CLIMATE_TEMPERATE,
		religion: civitas.RELIGION_JUDAISM,
		level: 29,
		resources: {
			coins: 1100000,
			prestige: 180,
			espionage: 200
		},
		trades: {
			imports: {
				meat: civitas.IMPORTANCE_LOW,
				iron: civitas.IMPORTANCE_HIGH,
				brass: civitas.IMPORTANCE_LOW,
				cider: civitas.IMPORTANCE_LOW,
				stones: civitas.IMPORTANCE_HIGH,
				copper: civitas.IMPORTANCE_VITAL,
				brine: civitas.IMPORTANCE_MEDIUM,
				grapes: civitas.IMPORTANCE_LOW,
				jewelery: civitas.IMPORTANCE_HIGH,
				pottery: civitas.IMPORTANCE_HIGH,
				coal: civitas.IMPORTANCE_MEDIUM,
				woodplanks: civitas.IMPORTANCE_HIGH,
				ironores: civitas.IMPORTANCE_HIGH
			},
			exports: {
				wine: civitas.IMPORTANCE_HIGH,
				silk: civitas.IMPORTANCE_LOW,
				wood: civitas.IMPORTANCE_MEDIUM,
				armor: civitas.IMPORTANCE_MEDIUM,
				hemp: civitas.IMPORTANCE_VITAL,
				tools: civitas.IMPORTANCE_HIGH,
				cattle: civitas.IMPORTANCE_LOW,
				statues: civitas.IMPORTANCE_VITAL
			}
		},
		army: {
			militia: 40,
			axeman: 30,
			knight: 10,
			bowman: 20,
			crossbowman: 10,
			pikeman: 30
		},
		location: {
			x: 180,
			y: 530
		}
	},
	16: {
		icon: 5,
		climate: civitas.CLIMATE_TEMPERATE,
		religion: civitas.RELIGION_JUDAISM,
		level: 22,
		resources: {
			coins: 1000000,
			prestige: 360,
			espionage: 500
		},
		trades: {
			imports: {
				furs: civitas.IMPORTANCE_LOW,
				hides: civitas.IMPORTANCE_VITAL,
				milk: civitas.IMPORTANCE_MEDIUM,
				gems: civitas.IMPORTANCE_LOW,
				brass: civitas.IMPORTANCE_VITAL,
				sugarcane: civitas.IMPORTANCE_HIGH,
				sulphur: civitas.IMPORTANCE_HIGH,
				goldores: civitas.IMPORTANCE_HIGH,
				wheat: civitas.IMPORTANCE_HIGH,
				stones: civitas.IMPORTANCE_HIGH,
				catapults: civitas.IMPORTANCE_MEDIUM,
				clay: civitas.IMPORTANCE_LOW
			},
			exports: {
				silver: civitas.IMPORTANCE_VITAL,
				wax: civitas.IMPORTANCE_MEDIUM,
				candles: civitas.IMPORTANCE_LOW,
				salt: civitas.IMPORTANCE_VITAL,
				pearls: civitas.IMPORTANCE_MEDIUM,
				pottery: civitas.IMPORTANCE_MEDIUM,
				oil: civitas.IMPORTANCE_HIGH,
				ropes: civitas.IMPORTANCE_MEDIUM
			}
		},
		army: {
			militia: 40,
			axeman: 30,
			knight: 10,
			bowman: 20,
			crossbowman: 10,
			pikeman: 30
		},
		location: {
			x: 400,
			y: 340
		}
	},
	17: {
		icon: 7,
		climate: civitas.CLIMATE_TROPICAL,
		religion: civitas.RELIGION_ISLAM,
		level: 26,
		resources: {
			coins: 1900000,
			prestige: 400,
			espionage: 500
		},
		trades: {
			imports: {
				wheat: civitas.IMPORTANCE_VITAL,
				mosaic: civitas.IMPORTANCE_MEDIUM,
				wood: civitas.IMPORTANCE_HIGH,
				furs: civitas.IMPORTANCE_VITAL,
				fibers: civitas.IMPORTANCE_HIGH,
				sugar: civitas.IMPORTANCE_MEDIUM,
				sugarcane: civitas.IMPORTANCE_LOW,
				clay: civitas.IMPORTANCE_VITAL
			},
			exports: {
				silver: civitas.IMPORTANCE_VITAL,
				glasses: civitas.IMPORTANCE_LOW,
				tools: civitas.IMPORTANCE_HIGH,
				furcoats: civitas.IMPORTANCE_MEDIUM,
				bottles: civitas.IMPORTANCE_HIGH,
				camels: civitas.IMPORTANCE_HIGH,
				indigo: civitas.IMPORTANCE_LOW,
				woodplanks: civitas.IMPORTANCE_MEDIUM,
				wheat: civitas.IMPORTANCE_LOW
			}
		},
		army: {
			militia: 40,
			axeman: 30,
			knight: 10,
			bowman: 20,
			crossbowman: 10,
			pikeman: 30
		},
		location: {
			x: 130,
			y: 140
		}
	},
	18: {
		icon: 7,
		climate: civitas.CLIMATE_TEMPERATE,
		religion: civitas.RELIGION_CHRISTIANITY,
		level: 29,
		resources: {
			coins: 2400000,
			prestige: 500,
			espionage: 800
		},
		trades: {
			imports: {
				salt: civitas.IMPORTANCE_MEDIUM,
				stones: civitas.IMPORTANCE_VITAL,
				armor: civitas.IMPORTANCE_MEDIUM,
				jewelery: civitas.IMPORTANCE_HIGH,
				brine: civitas.IMPORTANCE_MEDIUM,
				gems: civitas.IMPORTANCE_LOW,
				hides: civitas.IMPORTANCE_VITAL,
				pottery: civitas.IMPORTANCE_HIGH,
				pearls: civitas.IMPORTANCE_LOW
			},
			exports: {
				donkeys: civitas.IMPORTANCE_VITAL,
				sulphur: civitas.IMPORTANCE_VITAL,
				silk: civitas.IMPORTANCE_MEDIUM,
				glass: civitas.IMPORTANCE_HIGH,
				woodplanks: civitas.IMPORTANCE_MEDIUM,
				sugarcane: civitas.IMPORTANCE_HIGH,
				sugar: civitas.IMPORTANCE_HIGH,
				meat: civitas.IMPORTANCE_HIGH,
				carpets: civitas.IMPORTANCE_LOW,
				cannons: civitas.IMPORTANCE_LOW
			}
		},
		army: {
			militia: 80,
			axeman: 40,
			bowman: 10,
			crossbowman: 30,
			pikeman: 10
		},
		location: {
			x: 600,
			y: 200
		}
	},
	19: {
		icon: 5,
		climate: civitas.CLIMATE_TEMPERATE,
		religion: civitas.RELIGION_ISLAM,
		level: 27,
		resources: {
			coins: 2400000,
			prestige: 420,
			espionage: 700
		},
		trades: {
			imports: {
				gold: civitas.IMPORTANCE_LOW,
				goldores: civitas.IMPORTANCE_HIGH,
				weapons: civitas.IMPORTANCE_LOW,
				hemp: civitas.IMPORTANCE_HIGH,
				salt: civitas.IMPORTANCE_MEDIUM,
				bread: civitas.IMPORTANCE_HIGH,
				woodplanks: civitas.IMPORTANCE_HIGH,
				stones: civitas.IMPORTANCE_VITAL,
				gems: civitas.IMPORTANCE_LOW,
				pearls: civitas.IMPORTANCE_LOW
			},
			exports: {
				donkeys: civitas.IMPORTANCE_VITAL,
				sulphur: civitas.IMPORTANCE_VITAL,
				silk: civitas.IMPORTANCE_MEDIUM,
				glass: civitas.IMPORTANCE_HIGH,
				bottles: civitas.IMPORTANCE_HIGH,
				roses: civitas.IMPORTANCE_LOW,
				cattle: civitas.IMPORTANCE_LOW,
				bread: civitas.IMPORTANCE_LOW,
				meat: civitas.IMPORTANCE_MEDIUM,
				carpets: civitas.IMPORTANCE_LOW,
				cannons: civitas.IMPORTANCE_LOW
			}
		},
		army: {
			militia: 40,
			axeman: 30,
			knight: 10,
			bowman: 20,
			crossbowman: 10,
			pikeman: 30
		},
		location: {
			x: 800,
			y: 200
		}
	},
	20: {
		icon: 7,
		climate: civitas.CLIMATE_ARID,
		religion: civitas.RELIGION_CONFUCIANISM,
		level: 34,
		resources: {
			coins: 3200000,
			prestige: 490,
			espionage: 200
		},
		trades: {
			imports: {
				gold: civitas.IMPORTANCE_HIGH,
				goldores: civitas.IMPORTANCE_MEDIUM,
				fibers: civitas.IMPORTANCE_HIGH,
				weapons: civitas.IMPORTANCE_LOW,
				salt: civitas.IMPORTANCE_MEDIUM,
				woodplanks: civitas.IMPORTANCE_MEDIUM,
				copper: civitas.IMPORTANCE_VITAL,
				stones: civitas.IMPORTANCE_VITAL,
				gems: civitas.IMPORTANCE_LOW,
				pottery: civitas.IMPORTANCE_HIGH,
				clay: civitas.IMPORTANCE_HIGH,
				pearls: civitas.IMPORTANCE_LOW
			},
			exports: {
				donkeys: civitas.IMPORTANCE_VITAL,
				sulphur: civitas.IMPORTANCE_VITAL,
				silk: civitas.IMPORTANCE_MEDIUM,
				glass: civitas.IMPORTANCE_HIGH,
				roses: civitas.IMPORTANCE_LOW,
				ropes: civitas.IMPORTANCE_MEDIUM,
				sugarcane: civitas.IMPORTANCE_HIGH,
				cattle: civitas.IMPORTANCE_LOW,
				bread: civitas.IMPORTANCE_LOW,
				meat: civitas.IMPORTANCE_MEDIUM,
				carpets: civitas.IMPORTANCE_LOW,
				cannons: civitas.IMPORTANCE_LOW
			}
		},
		army: {
			militia: 20,
			axeman: 20,
			knight: 20,
			bowman: 20,
			crossbowman: 20,
			pikeman: 20
		},
		location: {
			x: 30,
			y: 30
		}
	},
	21: {
		type: civitas.VILLAGE,
		religion: civitas.RELIGION_HINDUISM,
		resources: {
			prestige: 1,
			coins: 10000,
			wood: 20,
			stones: 10,
			meat: 80
		},
		nationality: civitas.NATION_JAPANESE,
		location: {
			x: 800,
			y: 480
		},
		population: 1290,
		army: {
			militia: 3,
			bowman: 3
		}
	},
	22: {
		type: civitas.VILLAGE,
		religion: civitas.RELIGION_ISLAM,
		resources: {
			prestige: 1,
			coins: 20000,
			silk: 20,
			wheat: 10,
			bread: 20
		},
		population: 610,
		nationality: civitas.NATION_CHINESE,
		location: {
			x: 560,
			y: 100
		},
		army: {
			militia: 3,
			bowman: 2
		}
	},
	23: {
		type: civitas.VILLAGE,
		religion: civitas.RELIGION_ISLAM,
		resources: {
			prestige: 1,
			coins: 20000,
			silk: 20,
			wheat: 10,
			bread: 20
		},
		population: 550,
		nationality: civitas.NATION_KHMER,
		location: {
			x: 900,
			y: 300
		},
		army: {
			militia: 3,
			bowman: 2
		}
	},
	24: {
		type: civitas.VILLAGE,
		religion: civitas.RELIGION_CHRISTIANITY,
		resources: {
			prestige: 1,
			coins: 20000,
			brass: 20,
			meat: 10,
			goldores: 20
		},
		population: 820,
		nationality: civitas.NATION_INDIAN,
		location: {
			x: 100,
			y: 70
		},
		army: {
			militia: 3,
			bowman: 2
		}
	},
	25: {
		type: civitas.VILLAGE,
		religion: civitas.RELIGION_CHRISTIANITY,
		resources: {
			prestige: 1,
			coins: 20000,
			copper: 20,
			flour: 10,
			ironores: 20
		},
		population: 1600,
		nationality: civitas.NATION_PERSAN,
		location: {
			x: 380,
			y: 560
		},
		army: {
			militia: 3,
			bowman: 2
		}
	},
	26: {
		type: civitas.VILLAGE,
		religion: civitas.RELIGION_CHRISTIANITY,
		resources: {
			prestige: 1,
			coins: 2000,
			silk: 20,
			wheat: 10,
			bread: 20,
			herbs: 10,
			barrels: 10
		},
		population: 600,
		nationality: civitas.NATION_MONGOLIAN,
		location: {
			x: 570,
			y: 400
		},
		army: {
			militia: 6
		}
	}
};

/**
 * List of world rulers.
 *
 * @constant
 * @type {Array}
 */
civitas.RULERS = [
	{
		name: 'Caesar',
		title: 'Emperor',
		avatar: 1,
		nationality: civitas.NATION_ROMAN,
		personality: civitas.PERSONALITY_WARLORD
	},
	{
		name: 'Cronus',
		title: 'Ruler',
		avatar: 3,
		nationality: civitas.NATION_PHOENICIAN,
		personality: civitas.PERSONALITY_BALANCED
	},
	{
		name: 'Dido',
		title: 'Queen',
		avatar: 41,
		nationality: civitas.NATION_CARTHAGINIAN,
		personality: civitas.PERSONALITY_DIPLOMAT
	},
	{
		name: 'Genghis',
		title: 'Khan',
		avatar: 19,
		nationality: civitas.NATION_MONGOLIAN,
		personality: civitas.PERSONALITY_WARLORD
	},
	{
		name: 'Khufu',
		title: 'Pharaoh',
		avatar: 20,
		nationality: civitas.NATION_EGYPTIAN,
		personality: civitas.PERSONALITY_DIPLOMAT
	},
	{
		name: 'Musa I',
		title: 'Mansa',
		avatar: 30,
		nationality: civitas.NATION_MALINESE,
		personality: civitas.PERSONALITY_WARLORD
	},
	{
		name: 'Sennacherib',
		title: 'King',
		avatar: 34,
		nationality: civitas.NATION_ASSYRIAN,
		personality: civitas.PERSONALITY_BALANCED
	},
	{
		name: 'Pepi',
		title: 'Pharaoh',
		avatar: 40,
		nationality: civitas.NATION_SUDANESE,
		personality: civitas.PERSONALITY_DIPLOMAT
	},
	{
		name: 'Hatshepsut',
		title: 'Pharaoh',
		avatar: 36,
		nationality: civitas.NATION_EGYPTIAN,
		personality: civitas.PERSONALITY_BALANCED
	},
	{
		name: 'Clovis',
		title: 'King',
		avatar: 13,
		nationality: civitas.NATION_FRANKS,
		personality: civitas.PERSONALITY_DIPLOMAT
	},
	{
		name: 'Gilgamesh',
		title: 'King',
		avatar: 31,
		nationality: civitas.NATION_SUMERIAN,
		personality: civitas.PERSONALITY_WARLORD
	},
	{
		name: 'Dalai Lama',
		title: 'Priest',
		avatar: 48,
		nationality: civitas.NATION_TIBETAN,
		personality: civitas.PERSONALITY_DIPLOMAT
	},
	{
		name: 'Ashoka',
		title: 'Emperor',
		avatar: 28,
		nationality: civitas.NATION_INDIAN,
		personality: civitas.PERSONALITY_DIPLOMAT
	},
	{
		name: 'Charlemagne',
		title: 'King',
		avatar: 43,
		nationality: civitas.NATION_FRANKS,
		personality: civitas.PERSONALITY_DIPLOMAT
	},
	{
		name: 'Darius',
		title: 'King',
		avatar: 38,
		nationality: civitas.NATION_PERSAN,
		personality: civitas.PERSONALITY_WARLORD
	},
	{
		name: 'Ivan III',
		title: 'Tzar',
		avatar: 19,
		nationality: civitas.NATION_RUSSIAN,
		personality: civitas.PERSONALITY_WARLORD
	},
	{
		name: 'Qin Shi Huang',
		title: 'Emperor',
		avatar: 45,
		nationality: civitas.NATION_CHINESE,
		personality: civitas.PERSONALITY_DIPLOMAT
	},
	{
		name: 'Ozymandias',
		title: 'Pharaoh',
		avatar: 33,
		nationality: civitas.NATION_EGYPTIAN,
		personality: civitas.PERSONALITY_BALANCED
	},
	{
		name: 'Timur',
		title: 'Emperor',
		avatar: 37,
		nationality: civitas.NATION_PERSAN,
		personality: civitas.PERSONALITY_WARLORD
	},
	{
		name: 'Pol Pot',
		title: 'President',
		avatar: 46,
		nationality: civitas.NATION_KHMER,
		personality: civitas.PERSONALITY_WARLORD
	},
	{
		name: 'Napoleon',
		title: 'Emperor',
		avatar: 47,
		nationality: civitas.NATION_FRENCH,
		personality: civitas.PERSONALITY_WARLORD
	},
	{
		name: 'Hirohito',
		title: 'Emperor',
		avatar: 30,
		nationality: civitas.NATION_JAPANESE,
		personality: civitas.PERSONALITY_DIPLOMAT
	}
];

/**
 * List of world settlement names.
 *
 * @constant
 * @type {Array}
 */
civitas.SETTLEMENT_NAMES = [
	'Alexandria',
	'Rome',
	'Carthage',
	'Constantinople',
	'Karakorum',
	'Niniveh',
	'Damascus',
	'Thebes',
	'Men-nefer',
	'Peshawar',
	'Uruk',
	'Abydos',
	'Chengdu',
	'Mombasa',
	'Apullum',
	'Byblos',
	'Abu',
	'Pi-Ramesses',
	'Djedu',
	'Kyrene',
	'Athens',
	'Menat Khufu',
	'Niani',
	'Novgorod',
	'Sarmizegetusa',
	'Sigiriya',
	'Selima Oasis',
	'Tournai',
	'Taruga',
	'Amarna',
	'Toledo',
	'Mogadishu',
	'Xinjiang',
	'Yinxu',
	'Bublidrus',
	'Mylyra',
	'Ialezus',
	'Thebeia',
	'Demaphos',
	'Smyrnione',
	'Dimonassa',
	'Cyrarnassus',
	'Posigeneia',
	'Kasmigeneia',
	'Khemdjumunein',
	'Sakpi',
	'Kersatennu',
	'Farsou',
	'Dehsa',
	'Djasumar',
	'Absaitunis',
	'Avsi',
	'Wasvarmeru',
	'Behdju',
	'Galamia',
	'Pekies',
	'VyVyrodari',
	'Viasseto',
	'Messibria',
	'Molfeserta',
	'Quanes',
	'Braga',
	'Seicer',
	'Legara',
	'Albadolid',
	'Getastela',
	'Drepanum',
	'Canusium',
	'Mogontiacum',
	'Leucarum',
	'Pautalia',
	'Scallabis',
	'Chernogan',
	'Yelatrov',
	'Novomoksary',
	'Chistongelsk',
	'Timaryevsk',
	'Naberkuta',
	'Koloyevka',
	'Obnirodvinsk',
	'Beloredimir',
	'Kaspikarino',
	'Troten',
	'Neunsee',
	'Weveltals',
	'Oudenhout',
	'Plailimar',
	'Puciennes',
	'Bernsloh',
	'Geiselkau',
	'Waterlina',
	'Clonkenny',
	'Terbommel',
	'Drachnisse',
	'Werdenthal',
	'Erzell',
	'Arrabona',
	'Ugernum',
	'Bulla Regia',
	'Umbracum',
	'Aquae Armenetiae',
	'Isara',
	'Regium Lepidum',
	'Aquisgranium',
	'Gerasa'
];

/**
 * List of random ruler names for settlements and various other obscure reasons.
 *
 * @type {Array}
 * @constant
 */
civitas.NAMES = [
	'Pan',
	'Victor',
	'Lekan',
	'Sheamus',
	'Itumeleng',
	'Varya',
	'Gervas',
	'Stefanija',
	'Meera',
	'Sethunya',
	'Qadir',
	'Lim',
	'Yami',
	'Veasna',
	'Baadur',
	'Sharar',
	'Yuuta',
	'Hallie',
	'Anson',
	'Davis',
	'Ondina',
	'Zan',
	'Gibs',
	'Soth',
	'Naoki',
	'Hachirou',
	'Irmhild'
];
