/**
 * Set the game queue.
 *
 * @public
 * @param {Array} value
 * @returns {civitas.game}
 */
civitas.game.prototype.set_queue = function(value) {
	this.queue = value;
	return this;
};

/**
 * Return the game queue.
 *
 * @public
 * @returns {Array}
 */
civitas.game.prototype.get_queue = function() {
	return this.queue;
};

/**
 * Advance the game queue.
 *
 * @public
 * @returns {civitas.game}
 */
civitas.game.prototype.advance_queue = function() {
	for (var i = 0; i < this.queue.length; i++) {
		if (this.queue[i].passed === this.queue[i].duration - 1) {
			this.process_action(i);
		} else {
			this.queue[i].passed++;
		}
	}
	return this;
};

/**
 * Process an action from the game queue.
 *
 * @public
 * @param {Number} id
 * @returns {civitas.game}
 */
civitas.game.prototype.process_action = function(id) {
	var campaign = this.queue[id];
	var failed = true;
	var settlement = this.get_settlement(campaign.source.id);
	var destination_settlement = this.get_settlement(campaign.destination.id);
	if (campaign.mode === civitas.ACTION_CAMPAIGN) {
		var random = Math.ceil(Math.random() * 100);
		var class_name = '';
		var amount = Math.floor(campaign.data.espionage / 100);
		if (settlement.is_player()) {
			if (campaign.type === civitas.CAMPAIGN_ARMY && !settlement.can_recruit_soldiers()) {
				this.remove_action(id);
				return false;
			}
			if (campaign.type === civitas.CAMPAIGN_SPY && !settlement.can_diplomacy()) {
				this.remove_action(id);
				return false;
			}
			if (campaign.type === civitas.CAMPAIGN_CARAVAN && !settlement.can_trade()) {
				this.remove_action(id);
				return false;
			}
		}
		if (campaign.type === civitas.CAMPAIGN_ARMY) {
			class_name = 'army';
		} else if (campaign.type === civitas.CAMPAIGN_CARAVAN) {
			class_name = 'caravan';
		} else if (campaign.type === civitas.CAMPAIGN_SPY) {
			class_name = 'spy';
		}
		switch (campaign.type) {
			case civitas.CAMPAIGN_ARMY:
				var source_army = settlement.get_army_total();
				var destination_army = destination_settlement.get_army_total();
				var diff1 = source_army.attack - destination_army.defense;
				var diff2 = source_army.defense - destination_army.attack;
				// TODO
				//console.log(diff1 + '=' + diff2);
				break;
			case civitas.CAMPAIGN_SPY:
				if (typeof campaign.data.espionage !== 'undefined') {
					switch (campaign.data.mission) {
						case civitas.SPY_MISSION_RELIGION:
							if (random <= Math.ceil(campaign.data.espionage / civitas.MAX_ESPIONAGE_SUCESS_RATE)) {
								if (campaign.source.id === settlement.id()) {
									destination_settlement.religion(campaign.data.religion);
									var religion = destination_settlement.religion();
									this.notify('The spy you sent ' + campaign.duration + ' days ago to ' + destination_settlement.name() + ' reached its destination and managed to convince the settlement council to change the religion to ' + religion.name + '.');
								} else if (campaign.destination.id === settlement.id()) {
									destination_settlement = this.get_settlement(campaign.source.id);
									settlement.religion(campaign.data.religio);
									var religion = settlement.religion();
									this.notify('The spy sent by ' + destination_settlement.name() + ' ' + campaign.duration + ' days ago to our city reached its destination and managed to convince your city council to change the religion to ' + religion.name + '.');
								}
								failed = false;
							}
							break;
						case civitas.SPY_MISSION_INFLUENCE:
							if (random <= Math.ceil(campaign.data.espionage / civitas.MAX_ESPIONAGE_SUCESS_RATE)) {
								if (campaign.source.id === settlement.id()) {
									settlement.raise_influence(campaign.destination.id, amount);
									this.notify('The spy you sent ' + campaign.duration + ' days ago to ' + destination_settlement.name() + ' reached its destination and increased your influence over this settlement.');
								} else if (campaign.destination.id === settlement.id()) {
									destination_settlement = this.get_settlement(campaign.source.id);
									// TODO
									//destination_settlement.raise_influence(campaign.destination.id, amount);
									this.notify('The spy sent by ' + destination_settlement.name() + ' ' + campaign.duration + ' days ago to our city reached its destination and lowered your influence over this settlement.');
								}
								failed = false;
							}
							break;
						case civitas.SPY_MISSION_STEAL_RESOURCES:
							if (random <= Math.ceil(campaign.data.espionage / civitas.MAX_ESPIONAGE_SUCESS_RATE)) {
								// TODO
								failed = false;
							}
							break;
						case civitas.SPY_MISSION_INSTIGATE:
							if (random <= Math.ceil(campaign.data.espionage / civitas.MAX_ESPIONAGE_SUCESS_RATE)) {
								if (campaign.source.id === settlement.id()) {
									destination_settlement.lower_prestige(amount);
									this.notify('The spy you sent ' + campaign.duration + ' days ago to ' + destination_settlement.name() + ' reached its destination and incited the population to revolt, therefore lowering the prestige of the city.');
								} else if (campaign.destination.id === settlement.id()) {
									destination_settlement = this.get_settlement(campaign.source.id);
									settlement.lower_prestige(amount);
									this.notify('The spy sent by ' + destination_settlement.name() + ' ' + campaign.duration + ' days ago to our city reached its destination and incited our population to revolt, therefore lowering the prestige of our city.');
								}
								failed = false;
							}
							break;
					}
				}
				break;
			case civitas.CAMPAIGN_CARAVAN:
				var total = 0;
				if (typeof campaign.data.resources !== 'undefined') {
					for (var item in campaign.data.resources) {
						if ($.inArray(item, civitas.NON_RESOURCES) === -1) {
							total += civitas.utils.calc_price(campaign.data.resources[item], item);
						} else if (item === 'coins') {
							total += campaign.data.resources[item];
						}
						destination_settlement.add_to_storage(item, campaign.data.resources[item]);
					}
					settlement.raise_influence(campaign.destination.id, civitas.CARAVAN_INFLUENCE);
				}
				break;
		}
		if (failed === true) {
			if (campaign.source.id === settlement.id()) {
				this.notify('The ' + class_name + ' you sent ' + campaign.duration + ' days ago to ' + destination_settlement.name() + ' reached its destination.');
			} else if (campaign.destination.id === settlement.id()) {
				destination_settlement = this.get_settlement(campaign.source.id);
				this.notify('The ' + class_name + ' sent by ' + destination_settlement.name() + ' ' + campaign.duration + ' days ago reached our city.');
			}
		}
	} else if (campaign.mode === civitas.ACTION_DIPLOMACY) {
		if (settlement.is_player() && !settlement.can_diplomacy()) {
			this.remove_action(id);
			return false;
		}
		switch (campaign.type) {
			case civitas.DIPLOMACY_PROPOSE_PACT:
				settlement.diplomacy(destination_settlement, civitas.DIPLOMACY_PACT);
				//failed = false;
				break;
			case civitas.DIPLOMACY_PROPOSE_ALLIANCE:
				settlement.diplomacy(destination_settlement, civitas.DIPLOMACY_ALLIANCE);
				//failed = false;
				break;
			case civitas.DIPLOMACY_PROPOSE_CEASE_FIRE:
				settlement.diplomacy(destination_settlement, civitas.DIPLOMACY_CEASE_FIRE);
				//failed = false;
				break;
			case civitas.DIPLOMACY_PROPOSE_JOIN:
				settlement.diplomacy(destination_settlement, civitas.DIPLOMACY_VASSAL);
				//failed = false;
				break;
		}
		if (failed === true) {
			if (campaign.source.id === settlement.id()) {
				this.notify('The proposal you sent ' + campaign.duration + ' days ago to ' + destination_settlement.name() + ' was accepted.');
			}
		}
	}
	this.remove_action(id);
	return this;
};

/**
 * Add a campaign to the game queue.
 *
 * @public
 * @param {civitas.objects.settlement} source_settlement
 * @param {civitas.objects.settlement} destination_settlement
 * @param {Number} type
 * @param {Object} data
 * @returns {Object}
 */
civitas.game.prototype.add_to_queue = function(source_settlement, destination_settlement, mode, type, data) {
	var class_name = '';
	if (source_settlement.id() === this.get_settlement().id()) {
		var s_loc = civitas['SETTLEMENT_LOCATION_' + source_settlement.climate().name.toUpperCase()];
	} else {
		var s_loc = civitas.SETTLEMENTS[source_settlement.id()].location;
	}
	if (destination_settlement.id() === this.get_settlement().id()) {
		var d_loc = civitas['SETTLEMENT_LOCATION_' + destination_settlement.climate().name.toUpperCase()];
	} else {
		var d_loc = civitas.SETTLEMENTS[destination_settlement.id()].location;
	}
	var duration = civitas.utils.get_distance_in_days(s_loc, d_loc);
	if (mode === civitas.ACTION_CAMPAIGN) {
		if (type === civitas.CAMPAIGN_ARMY) {
			if (!source_settlement.can_recruit_soldiers()) {
				return false;
			}
			class_name = 'army';
			var army = source_settlement.get_army_total();
			var navy = source_settlement.get_navy_total();
			var mission_costs = civitas.ARMY_COSTS;
			for (var item in mission_costs) {
				if (item === 'coins') {
					mission_costs[item] = civitas.ARMY_COSTS[item] * duration;
				} else if (item === 'provisions') {
					mission_costs[item] = Math.ceil((civitas.ARMY_COSTS[item] * duration) / 2);
				}
			}
			var merged = $.extend({}, data.resources);
			for (var prop in mission_costs) {
				if (merged[prop]) {
					merged[prop] += mission_costs[prop];
				} else {
					merged[prop] = mission_costs[prop];
				}
			}
			if (!source_settlement.remove_resources(merged)) {
				return false;
			}
			for (var item in army.army) {
				if (army.army[item] - data.army[item] < 0) {
					return false;
				}
			}
			for (var item in navy.navy) {
				if (navy.navy[item] - data.navy[item] < 0) {
					return false;
				}
			}
			for (var item in army.army) {
				army.army[item] = army.army[item] - data.army[item];
			}
			for (var item in navy.navy) {
				navy.navy[item] = navy.navy[item] - data.navy[item];
			}
			var settlement_type = destination_settlement.get_type();
			source_settlement.diplomacy(destination_settlement.id(), civitas.DIPLOMACY_WAR);
		} else if (type === civitas.CAMPAIGN_SPY) {
			if (!source_settlement.can_diplomacy()) {
				return false;
			}
			class_name = 'spy';
			if (data.espionage > source_settlement.espionage()) {
				return false;
			}
			var mission_costs = civitas.SPY_COSTS;
			for (var item in mission_costs) {
				if (item === 'coins') {
					mission_costs[item] = civitas.SPY_COSTS[item] * duration;
				} else if (item === 'provisions') {
					mission_costs[item] = Math.ceil((civitas.SPY_COSTS[item] * duration) / 2);
				}
			}
			if (!source_settlement.remove_resources(mission_costs)) {
				return false;
			}
			source_settlement.lower_espionage(data.espionage);
			if (data.mission === civitas.SPY_MISSION_RELIGION) {
				source_settlement.reset_faith();
			}
		} else if (type === civitas.CAMPAIGN_CARAVAN) {
			if (!source_settlement.can_trade()) {
				return false;
			}
			class_name = 'caravan';
			var mission_costs = civitas.CARAVAN_COSTS;
			for (var item in mission_costs) {
				if (item === 'coins') {
					mission_costs[item] = civitas.CARAVAN_COSTS[item] * duration;
				} else if (item === 'provisions') {
					mission_costs[item] = Math.ceil((civitas.CARAVAN_COSTS[item] * duration) / 2);
				}
			}
			var merged = $.extend({}, data.resources);
			for (var prop in mission_costs) {
				if (merged[prop]) {
					merged[prop] += mission_costs[prop];
				} else {
					merged[prop] = mission_costs[prop];
				}
			}
			if (!source_settlement.remove_resources(merged)) {
				return false;
			}
		}
		if (source_settlement.id() === this.get_settlement().id()) {
			this.notify('Your ' + class_name + ' was dispatched towards ' + destination_settlement.name() + ' and will reach its destination in ' + duration + ' days.');
		}
	} else if (mode === civitas.ACTION_DIPLOMACY) {
		duration = Math.ceil(duration / 2);
		if (source_settlement.id() === this.get_settlement().id()) {
			this.notify('Your proposal was dispatched towards ' + destination_settlement.name() + ' and will reach its destination in ' + duration + ' days.');
		}
	}
	var action = {
		mode: mode,
		source: {
			x: s_loc.x,
			y: s_loc.y,
			id: source_settlement.id()
		},
		destination: {
			x: d_loc.x,
			y: d_loc.y,
			id: destination_settlement.id()
		},
		duration: duration,
		passed: 0,
		type: type,
		data: data
	};
	this.queue.push(action);
	this.save_and_refresh();
	return action;
};

/**
 * Remove an action from the game queue.
 *
 * @public
 * @param {Number} id
 * @returns {civitas.game}
 */
civitas.game.prototype.remove_action = function(id) {
	var panel;
	if (panel = this.get_panel('campaign')) {
		panel.destroy();
	}
	this.queue.splice(id, 1);
	return this;
};
