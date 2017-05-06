/**
 * List of all obtainable game achievements.
 *
 * @constant
 * @type {Array}
 */
civitas.ACHIEVEMENTS = [
	{
		description: 'Reach level 10.',
		name: 'Kiddo',
		conditions: {
			settlement_level: 10
		}
	}, {
		description: 'Reach level 20.',
		name: 'Teen',
		conditions: {
			settlement_level: 20
		}
	}, {
		description: 'Reach level 30.',
		name: 'On my own',
		conditions: {
			settlement_level: 30
		}
	}, {
		description: 'Reach level 40.',
		name: 'Fear me',
		conditions: {
			settlement_level: 40
		}
	}, {
		description: 'Gather maximum faith.',
		name: 'Jesus Christ',
		conditions: {
			resources: {
				faith: civitas.MAX_FAITH_VALUE
			}
		}
	}, {
		description: 'Gather maximum research.',
		name: 'Albert Einstein',
		conditions: {
			resources: {
				research: civitas.MAX_RESEARCH_VALUE
			}
		}
	}, {
		description: 'Gather 100M coins.',
		name: 'Rottschild',
		conditions: {
			resources: {
				coins: 100000000
			}
		}
	}, {
		description: 'Gather 500k coins.',
		name: 'Ba dum tss',
		conditions: {
			resources: {
				coins: 500000
			}
		}
	}, {
		description: 'Gather 100k coins.',
		name: 'Gatherer',
		conditions: {
			resources: {
				coins: 100000
			}
		}
	}, {
		description: 'Gather 1M coins.',
		name: 'Milionaire',
		conditions: {
			resources: {
				coins: 1000000
			}
		}
	}, {
		description: 'Gather 10M coins.',
		name: 'Rockefeller',
		conditions: {
			resources: {
				coins: 10000000
			}
		}
	}, {
		description: 'Gather 10k stones.',
		name: 'Stone Age',
		conditions: {
			resources: {
				stones: 10000
			}
		}
	}, {
		description: 'Gather 10k wood.',
		name: 'Woody the Woodpecker',
		conditions: {
			resources: {
				wood: 10000
			}
		}
	}, {
		description: 'Gather 10k meat.',
		name: 'Animal killer',
		conditions: {
			resources: {
				meat: 10000
			}
		}
	}, {
		description: 'Recruit 500 soldiers.',
		name: 'Warfiend',
		conditions: {
			soldiers: 500
		}
	}, {
		description: 'Recruit 100 soldiers.',
		name: 'Armed to the teeth',
		conditions: {
			soldiers: 100
		}
	}, {
		description: 'Recruit 1000 soldiers.',
		name: 'Warlord',
		conditions: {
			soldiers: 1000
		}
	}, {
		description: 'Recruit 10 ships.',
		name: 'Shipwrecked',
		conditions: {
			ships: 10
		}
	}, {
		description: 'Recruit 100 ships.',
		name: 'Captain Ahab',
		conditions: {
			ships: 100
		}
	}, {
		description: 'Gather 100 prestige.',
		name: 'Prestigious',
		conditions: {
			resources: {
				prestige: 100
			}
		}
	}, {
		description: 'Gather 500 prestige.',
		name: 'The God King',
		conditions: {
			resources: {
				prestige: 500
			}
		}
	}, {
		description: 'Gather 10 espionage.',
		name: 'You got Mossad-ed!',
		conditions: {
			resources: {
				espionage: 10
			}
		}
	}, {
		description: 'Gather 100 espionage.',
		name: 'You got Snowden-ed!',
		conditions: {
			resources: {
				espionage: 100
			}
		}
	}, {
		description: 'Gather 500 espionage.',
		name: 'I spy with my own eye',
		conditions: {
			resources: {
				espionage: 500
			}
		}
	}, {
		description: 'Gather maximum espionage.',
		name: 'Anna Chapman',
		conditions: {
			resources: {
				espionage: civitas.MAX_ESPIONAGE_VALUE
			}
		}
	}, {
		description: 'Gather 10 research.',
		name: 'Initiate',
		conditions: {
			resources: {
				research: 10
			}
		}
	}, {
		description: 'Gather 100 research.',
		name: 'Researcher',
		conditions: {
			resources: {
				research: 100
			}
		}
	}, {
		description: 'Gather 500 research.',
		name: 'Searching',
		conditions: {
			resources: {
				research: 500
			}
		}
	}, {
		description: 'Gather 500 faith.',
		name: 'Disciple',
		conditions: {
			resources: {
				faith: 500
			}
		}
	}, {
		description: 'Build a Castle.',
		name: 'Castlevania',
		conditions: {
			buildings: {
				castle: 1
			}
		}
	}, {
		description: 'Build a Church.',
		name: 'Winston Churchill, got it?',
		conditions: {
			buildings: {
				church: 1
			}
		}
	}, {
		description: 'Build an Academy.',
		name: 'Academician',
		conditions: {
			buildings: {
				academy: 1
			}
		}
	}, {
		description: 'Build each of the mines (Iron, Gold, Copper and Salt).',
		name: 'All mine!',
		conditions: {
			buildings: {
				iconmine: 1,
				goldmine: 1,
				coppermine: 1,
				saltmine: 1
			}
		}
	}, {
		description: 'Fill out all your storage space.',
		name: 'All filled up',
		conditions: {
			storage: 0
		}
	}, {
		description: 'Build 10 catapults.',
		name: 'Cat-a-pulter',
		conditions: {
			resources: {
				catapults: 10
			}
		}
	}, {
		description: 'Build an Embassy.',
		name: 'Gandhi',
		conditions: {
			buildings: {
				embassy: 1
			}
		}
	}, {
		description: 'Get 100 achievements.',
		name: 'Achivement? Yes please.',
		conditions: {
			achievements: 100
		}
	}, {
		description: 'Recruit a mercenary army.',
		name: 'Merc',
		conditions: {
			mercenary: 1
		}
	}, {
		description: 'Reach 10 milion in population.',
		name: 'Megalopolis',
		conditions: {
			population: 10000000
		}
	}, {
		description: 'Upgrade Academy to level 3.',
		name: 'Too much research',
		conditions: {
			buildings: {
				academy: 3
			}
		}
	}, {
		description: 'Upgrade Castle to level 3.',
		name: 'Goldilocks',
		conditions: {
			buildings: {
				castle: 3
			}
		}
	}, {
		description: 'Upgrade Church to level 3.',
		name: 'Cathedral',
		conditions: {
			buildings: {
				church: 3
			}
		}
	}, {
		description: 'Build a Tournir Area.',
		name: 'Richard Lionheart',
		conditions: {
			buildings: {
				tournir: 1
			}
		}
	}, {
		description: 'Send a caravan.',
		name: 'Donkey Lord'
	}, {
		description: 'Send a spy.',
		name: 'Bond. James Bond.'
	}, {
		description: 'Send an army.',
		name: 'Warrior'
	}, {
		description: 'Declare war to another settlement.',
		name: 'Warlord'
	}, {
		description: 'Propose to another settlement to join you.',
		name: 'The One to Rule Them All'
	}, {
		description: 'Propose a pact to another settlement.',
		name: 'The Friendly'
	}, {
		description: 'Propose an alliance to another settlement.',
		name: 'The Pacifist'
	}, {
		description: 'Gather maximum prestige.',
		name: 'Your highness',
		conditions: {
			resources: {
				espionage: civitas.MAX_PRESTIGE_VALUE
			}
		}
	}, {
		description: 'Win a battleground.',
		name: 'Conqueror'
	}, {
		description: 'Lose a battleground.',
		name: 'Foolish!'
	}, {
		description: 'Convince another settlement to accept an alliance.',
		name: 'I got your back'
	}, {
		description: 'Convince another settlement to accept a pact.',
		name: 'Pactish'
	}, {
		description: 'Convince another settlement to join your settlement.',
		name: 'You are mine!'
	}
];
