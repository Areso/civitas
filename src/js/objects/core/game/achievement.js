/**
 * Check for any achievements completion.
 *
 * @public
 * @returns {civitas.game}
 */
civitas.game.prototype.check_achievements = function() {
	var achievement;
	var condition;
	var settlement = this.get_settlement();
	for (var i = 0; i < civitas.ACHIEVEMENTS.length; i++) {
		achievement = civitas.ACHIEVEMENTS[i];
		if (!this.has_achievement(i)) {
			for (var cond_item in achievement.conditions) {
				condition = achievement.conditions[cond_item];
				if (cond_item === 'settlement_level') {
					if (settlement.level() === condition) {
						this.achievement(i);
					}
				}
				if (cond_item === 'soldiers') {
					var army = settlement.has_army();
					if (army >= condition) {
						this.achievement(i);
					}
				}
				if (cond_item === 'ships') {
					var navy = settlement.has_navy();
					if (navy >= condition) {
						this.achievement(i);
					}
				}
				if (cond_item === 'population') {
					if (settlement.population() >= condition) {
						this.achievement(i);
					}
				}
				if (cond_item === 'buildings') {
					for (var item in condition) {
						var good = true;
						if (!settlement.is_building_built(item, condition[item])) {
							good = false;
							break;
						}
					}
					if (good === true) {
						this.achievement(i);
					}
				}
				if (cond_item === 'resources') {
					var good = true;
					for (var item in condition) {
						var amount = settlement.resources[item];
						if (amount < condition[item]) {
							good = false;
							break;
						}
					}
					if (good === true) {
						this.achievement(i);
					}
				}
				if (cond_item === 'storage') {
					if (condition === 0) {
						var storage = settlement.storage();
						if (storage.occupied >= storage.all) {
							this.achievement(i);
						}
					}
				}
				if (cond_item === 'achievements') {
					if (condition === this._achievements.length) {
						this.achievement(i);
					}
				}
				if (cond_item === 'mercenary') {
					var merc = settlement.mercenary();
					if (merc.length >= condition) {
						this.achievement(i);
					}
				}
			}
		}
	}
	return this;
};

/**
 * Perform an achievement notification in the game.
 * 
 * @public
 * @param {Number} id
 * @returns {civitas.game}
 */
civitas.game.prototype.achievement = function (id) {
	if (!this.has_achievement(id)) {
		var achievement = civitas.ACHIEVEMENTS[id];
		this._achievements.push({
			id: id,
			date: + new Date()
		});
		this._notify({
			title: 'Achievement Completed',
			mode: civitas.NOTIFY_ACHIEVEMENT,
			content: achievement.description,
			timeout: false
		});
		this.save_and_refresh();
	}
	return this;
};

/**
 * Check if the current player has the achievement specified by its id.
 *
 * @public
 * @param {Number} id
 * @returns {Object|Boolean}
 */
civitas.game.prototype.has_achievement = function(id) {
	for (var i = 0; i < this._achievements.length; i++) {
		if (this._achievements[i].id === id) {
			return this._achievements[i];
		}
	}
	return false;
};

/**
 * Set/get the achievements.
 *
 * @public
 * @returns {Array}
 */
civitas.game.prototype.achievements = function(value) {
	if (typeof value !== 'undefined') {
		this._achievements = value;
	}
	return this._achievements;
};
