/**
 * Get a pointer to the player's settlement.
 * 
 * @public
 * @param {String} name
 * @returns {civitas.settlement}
 */
civitas.game.prototype.get_settlement = function (name) {
	var settlements = this.get_settlements();
	if (typeof name === 'undefined') {
		return settlements[0];
	}
	if (typeof name === 'string') {
		for (var i = 0; i < settlements.length; i++) {
			if (settlements[i].name() === name) {
				return settlements[i];
			}
		}
	} else if (typeof name === 'number') {
		for (var i = 0; i < settlements.length; i++) {
			if (settlements[i].id() === name) {
				return settlements[i];
			}
		}
	}
	return false;
};

/**
 * Load the main settlement data.
 * 
 * @private
 * @returns {Object|Boolean}
 */
civitas.game.prototype._load_settlement = function (data) {
	var player_settlement_data = data.settlements[0];
	if (player_settlement_data) {
		player_settlement_data.core = this;
		var new_settlement = new civitas.objects.settlement(player_settlement_data);
		this.settlements.push(new_settlement);
		new_settlement._create_buildings(player_settlement_data.buildings);
		return data;
	}
	return false;
};

/**
 * Setup the main settlement.
 * 
 * @private
 * @param {String} name
 * @param {String} cityname
 * @param {Number} nation
 * @param {Number} climate
 * @param {Number} avatar
 * @returns {civitas.game}
 */
civitas.game.prototype._create_settlement = function (name, cityname, nation, climate, avatar) {
	var difficulty = this.get_difficulty();
	var my_settlement = new civitas.objects.settlement({
		properties: {
			name: cityname,
			climate: climate,
			avatar: avatar,
			id: 0,
			player: true,
			ruler: {
				name: name,
				title: '',
				avatar: avatar,
				nationality: nation,
				personality: civitas.PERSONALITY_BALANCED
			}
		},
		army: civitas.START_ARMY[difficulty - 1].army,
		navy: civitas.START_ARMY[difficulty - 1].navy,
		core: this
	});
	this.settlements.push(my_settlement);
	this.get_settlement()._create_buildings(civitas.START_BUILDINGS);
	return this;
};

/**
 * Get the list of all the settlements in game.
 * 
 * @public
 * @returns {Array}
 */
civitas.game.prototype.get_settlements = function () {
	return this.settlements;
};

/**
 * Create all the other settlements in the world.
 * 
 * @private
 * @param {Object} data
 * @returns {civitas.game}
 */
civitas.game.prototype._setup_neighbours = function (data) {
	var new_settlement = null;
	var settlement_data = null;
	var ruler = null;
	if (data !== null) {
		for (var i = 1; i < data.settlements.length; i++) {
			settlement_data = data.settlements[i];
			settlement_data.core = this;
			new_settlement = new civitas.objects.settlement(settlement_data);
			var climate = new_settlement.climate();
			var climate_buildings = 'SETTLEMENT_BUILDINGS_' + climate.name.toUpperCase();
			new_settlement._create_buildings(civitas[climate_buildings], true);
			this.settlements.push(new_settlement);
		}
	} else {
		for (var item in civitas.SETTLEMENTS) {
			item = parseInt(item);
			settlement_data = civitas.SETTLEMENTS[item];
			settlement_data.type = typeof settlement_data.type === 'undefined' || settlement_data.type === civitas.CITY ? civitas.CITY : civitas.VILLAGE;
			if (settlement_data.type === civitas.VILLAGE) {
				ruler = {
					title: 'Mayor',
					avatar: 40,
					personality: civitas.PERSONALITY_DIPLOMAT,
					name: civitas.utils.get_random_unique(civitas.NAMES),
					nationality: settlement_data.nationality
				};
			} else {
				ruler = civitas.utils.get_random_unique(civitas.RULERS);
			}
			new_settlement = new civitas.objects.settlement({
				core: this,
				properties: {
					id: item,
					population: settlement_data.population,
					type: settlement_data.type,
					name: civitas.utils.get_random_unique(civitas.SETTLEMENT_NAMES),
					player: false,
					level: settlement_data.level,
					religion: settlement_data.religion,
					climate: settlement_data.type === civitas.CITY ? settlement_data.climate : civitas.CLIMATE_TEMPERATE,
					ruler: ruler,
					icon: settlement_data.type === civitas.CITY ? settlement_data.icon : 1
				},
				resources: settlement_data.resources,
				army: settlement_data.army,
				navy: settlement_data.navy
			});
			if (settlement_data.type === civitas.CITY) {
				var climate = new_settlement.climate();
				var climate_buildings = 'SETTLEMENT_BUILDINGS_' + climate.name.toUpperCase();
				new_settlement._create_buildings(civitas[climate_buildings], true);
			}
			this.get_settlement().status(item, {
				influence: 50,
				status: civitas.DIPLOMACY_TRUCE
			});
			this.settlements.push(new_settlement);
		}
	}
	return this;
};

/**
 * Get the list of imports and exports from all the world settlements (except main).
 * 
 * @private
 * @returns {Object}
 */
civitas.game.prototype._get_neighbours_trades = function () {
	var data = {};
	var settlements = this.get_settlements();
	for (var i = 1; i < settlements.length; i++) {
		if (typeof settlements[i] !== 'undefined') {
			data[settlements[i].id()] = settlements[i].get_trades();
		}
	}
	return data;
};
