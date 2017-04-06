/**
 * List of all obtainable game achievements.
 *
 * @constant
 * @type {Array}
 */
civitas.ACHIEVEMENTS = [
	{
		id: 1,
		description: 'Reach level 10.',
		name: 'Kid',
		conditions: [
			{
				settlement_level: 10
			}
		]
	}, {
		id: 2,
		description: 'Reach level 20.',
		name: 'Adolescent',
		conditions: [
			{
				settlement_level: 20
			}
		]
	}, {
		id: 3,
		description: 'Reach level 30.',
		name: 'On my own',
		conditions: [
			{
				settlement_level: 30
			}
		]
	}, {
		id: 4,
		description: 'Reach level 40.',
		name: 'Fear me',
		conditions: [
			{
				settlement_level: 40
			}
		]
	}, {
		id: 5,
		description: 'Reach level 50.',
		name: 'Godly',
		conditions: [
			{
				settlement_level: 50
			}
		]
	}, {
		id: 6,
		description: 'Reach level 55.',
		name: 'I am a God!',
		conditions: [
			{
				settlement_level: 55
			}
		]
	}, {
		id: 7,
		description: 'Gather 10k coins.',
		name: 'Coinage',
		conditions: [
			{
				coins: 10000
			}
		]
	}, {
		id: 8,
		description: 'Gather 50k coins.',
		name: 'Give me coins',
		conditions: [
			{
				coins: 50000
			}
		]
	}, {
		id: 9,
		description: 'Gather 100k coins.',
		name: 'Gatherer',
		conditions: [
			{
				coins: 100000
			}
		]
	}, {
		id: 10,
		description: 'Gather 1M coins.',
		name: 'Milionaire',
		conditions: [
			{
				coins: 1000000
			}
		]
	}, {
		id: 11,
		description: 'Gather 10M coins.',
		name: 'Rockefeller',
		conditions: [
			{
				coins: 10000000
			}
		]
	}, {
		id: 12,
		description: 'Gather 10k stones.',
		name: 'Stone Age',
		conditions: [
			{
				resources: [
					{
						stones: 10000
					}
				]
			}
		]
	}, {
		id: 13,
		description: 'Gather 10k wood.',
		name: 'Woody the Woodpecker',
		conditions: [
			{
				resources: [
					{
						wood: 10000
					}
				]
			}
		]
	}, {
		id: 14,
		description: 'Gather 10k meat.',
		name: 'Animal killer',
		conditions: [
			{
				resources: [
					{
						meat: 10000
					}
				]
			}
		]
	}, {
		id: 15,
		description: 'Recruit 10 soldiers.',
		name: 'Armed',
		conditions: [
			{
				soldiers: 10
			}
		]
	}, {
		id: 16,
		description: 'Recruit 100 soldiers.',
		name: 'Recruiter',
		conditions: [
			{
				soldiers: 100
			}
		]
	}, {
		id: 17,
		description: 'Recruit 1000 soldiers.',
		name: 'Armed to the teeth',
		conditions: [
			{
				soldiers: 1000
			}
		]
	}, {
		id: 18,
		description: 'Recruit 10 ships.',
		name: 'Shipwrecked',
		conditions: [
			{
				ships: 10
			}
		]
	}, {
		id: 19,
		description: 'Recruit 100 ships.',
		name: 'Captain Ahab',
		conditions: [
			{
				ships: 100
			}
		]
	}, {
		id: 20,
		description: 'Gather 100 prestige.',
		name: 'Prestigious',
		conditions: [
			{
				prestige: 100
			}
		]
	}, {
		id: 21,
		description: 'Gather 500 prestige.',
		name: 'The God King',
		conditions: [
			{
				prestige: 500
			}
		]
	}, {
		id: 22,
		description: 'Gather 10 espionage.',
		name: 'You got Mossad-ed!',
		conditions: [
			{
				espionage: 10
			}
		]
	}, {
		id: 23,
		description: 'Gather 100 espionage.',
		name: 'You got Snowden-ed!',
		conditions: [
			{
				espionage: 100
			}
		]
	}, {
		id: 24,
		description: 'Gather 500 espionage.',
		name: 'I spy with my own eye',
		conditions: [
			{
				espionage: 500
			}
		]
	}, {
		id: 25,
		description: 'Gather 1000 espionage.',
		name: 'Anna Chapman',
		conditions: [
			{
				espionage: 1000
			}
		]
	}, {
		id: 26,
		description: 'Gather 10 research.',
		name: 'Initiate',
		conditions: [
			{
				research: 10
			}
		]
	}, {
		id: 27,
		description: 'Gather 100 research.',
		name: 'Researcher',
		conditions: [
			{
				research: 100
			}
		]
	}, {
		id: 28,
		description: 'Gather 500 research.',
		name: 'Searching',
		conditions: [
			{
				research: 500
			}
		]
	}, {
		id: 29,
		description: 'Gather 1000 research.',
		name: 'Einstein',
		conditions: [
			{
				research: 1000
			}
		]
	}, {
		id: 30,
		description: 'Build a Castle.',
		name: 'Castlevania',
		conditions: [
			{
				buildings: 'castle'
			}
		]
	}, {
		id: 31,
		description: 'Build a Church.',
		name: 'Winston Churchill, got it?',
		conditions: [
			{
				buildings: 'church'
			}
		]
	}, {
		id: 32,
		description: 'Build an Academy.',
		name: 'Academician',
		conditions: [
			{
				buildings: 'academy'
			}
		]
	}, {
		id: 33,
		description: 'Build each of the mines (Iron, Gold, Copper and Salt).',
		name: 'All mine!',
		conditions: [
			{
				buildings: [
					'iconmine',
					'goldmine',
					'coppermine',
					'saltmine'
				]
			}
		]
	}, {
		id: 34,
		description: 'Fill out all your storage space.',
		name: 'All filled up',
		conditions: [
			{
				storage: 0
			}
		]
	}, {
		id: 35,
		description: 'Build 10 catapults.',
		name: 'Cat-a-pulter',
		conditions: [
			{
				resources: [
					{
						catapults: 10
					}
				]
			}
		]
	}, {
		id: 36,
		description: 'Build an Embassy.',
		name: 'Gandhi',
		conditions: [
			{
				buildings: 'embassy'
			}
		]
	}, {
		id: 37,
		description: 'Get 100 achievements.',
		name: 'Achivement? Yes please.',
		conditions: [
			{
				achievements: 100
			}
		]
	}, {
		id: 38,
		description: 'Recruit a mercenary army.',
		name: 'Merc',
		conditions: [
			{
				mercenary: 1
			}
		]
	}
];
