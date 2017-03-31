/**
 * Main Game city advisor panel object.
 * 
 * @param {Object} params
 * @class {civitas.controls.panel_advisor}
 * @returns {civitas.controls.panel_advisor}
 */
civitas.controls.panel_advisor = function (params) {

	/**
	 * Reference to the core object.
	 * 
	 * @type {civitas.game}
	 */
	this.core = null;

	/**
	 * DOM id of this panel.
	 * 
	 * @type {String}
	 * @constant
	 */
	this.id = 'advisor';

	/**
	 * Localized title of the panel.
	 * 
	 * @type {String}
	 */
	this.title = civitas.l('Your City Advisor');

	/**
	 * Object destructor.
	 * 
	 * @private
	 * @returns {Boolean}
	 */
	this.__destroy = function () {
		this.core.console_log('destroying panel with id `' + this.id + '`');
		var el = '#panel-' + this.id;
		$(el).remove();
		this.core.close_panel(this.id);
		$('.tipsy').remove();
		return false;
	};

	/**
	 * Method for destroying the window/panel.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.destroy = function () {
		return this.__destroy();
	};

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {civitas.controls.panel_advisor}
	 * @param {Object} params
	 */
	this.__init = function (params) {
		this.core = params.core;
		var el = '#panel-' + this.id;
		var self = this;
		if (civitas.ui.panel_exists(el)) {
			this.destroy();
		}
		this.core.console_log('creating panel with id `' + this.id + '`');
		var city = this.core.get_city();
		var buildings = city.get_buildings();
		var can_diplomacy = city.is_building_built('embassy');
		var can_build_ships = city.is_building_built('shipyard');
		var can_recruit_soldiers = city.is_building_built('camp') || city.is_building_built('castle');
		$('.ui').append(civitas.ui.generic_panel_template
			.replace(/{id}/g, this.id)
			.replace(/{title}/g, this.title));
		$(el + ' .contents').append('<div class="tabs">' +
			'<ul>' +
				'<li><a href="#tab-info">' + civitas.l('Info') + '</a></li>' +
				'<li><a href="#tab-production">' + civitas.l('Production') + '</a></li>' +
				'<li><a href="#tab-housing">' + civitas.l('Housing') + '</a></li>' +
				'<li><a href="#tab-army">' + civitas.l('Army') + '</a></li>' +
				'<li><a href="#tab-navy">' + civitas.l('Navy') + '</a></li>' +
				'<li><a href="#tab-mercenary">' + civitas.l('Mercenaries') + '</a></li>' +
				'<li><a href="#tab-diplomacy">' + civitas.l('Diplomacy') + '</a></li>' +
			'</ul>' +
			'<div id="tab-info">' +
			'</div>' +
			'<div id="tab-production">' +
			'</div>' +
			'<div id="tab-housing">' +
			'</div>' +
			'<div id="tab-army">' +
			'</div>' +
			'<div id="tab-navy">' +
			'</div>' +
			'<div id="tab-mercenary">' +
			'</div>' +
			'<div id="tab-diplomacy">' +
			'</div>' +
		'</div>');
		this.refresh();
		$(el).on('click', '.pact', function () {
			if (can_diplomacy === true) {
				var city = $(this).data('name');
				var influence = self.core.get_city().get_influence_with_city(city);
				if (influence >= 50) {
					self.core.error('Not implemented yet.');
					/*
					if (self.core.get_city().propose_pact(city) === true) {
						// TODO
					}
					*/

				} else {
					self.core.error(civitas.l('Your influence on') + ' ' + city + ' ' + civitas.l('is too low to propose a pact.'));
				}
			} else {
				self.core.error(civitas.l('You will need to construct an Embassy before being able to propose treaties and pacts to other cities.'));
			}
			return false;
		}).on('click', '.spy', function () {
			if (can_diplomacy === true) {
				var city = $(this).data('name');
				self.core.error(civitas.l('Not implemented yet.'));
				/*
				if (self.core.get_city().assign_spy(city) === true) {
					// TODO
				}
				*/
			} else {
				self.core.error(civitas.l('You will need to construct an Embassy before being able to assign spies to other cities.'));
			}
			return false;
		}).on('click', '.recruit-ship', function () {
			if (can_build_ships === true) {
				var ship = $(this).data('handle');
				self.core.error(civitas.l('Not implemented yet.'));
				/*
				if (self.core.get_city().recruit_ship(ship) === true) {
					self._refresh_navy();
				}
				*/
			} else {
				self.core.error(civitas.l('You will need to construct a Shipyard before being able to construct ships in your city.'));
			}
			return false;
		}).on('click', '.declare-war', function () {
			if (can_diplomacy === true) {
				var name = $(this).data('name');
				var _city = self.core.get_city(name);
				self.core.error(civitas.l('Not implemented yet.'));
				/*
				self.core.open_panel(new civitas.controls.panel_declare_war({
					core: self.core,
					data: _city
				}));
				*/
			} else {
				self.core.error(civitas.l('You will need to construct an Embassy before being able to declare war to other cities.'));
			}
			return false;
		}).on('click', '.send-goods', function () {
			if (can_diplomacy === true) {
				var name = $(this).data('name');
				var _city = self.core.get_city(name);
				self.core.error(civitas.l('Not implemented yet.'));
				/*
				self.core.open_panel(new civitas.controls.panel_send_goods({
					core: self.core,
					data: _city
				}));
				*/
			} else {
				self.core.error(civitas.l('You will need to construct an Embassy before being able to send goods to other cities.'));
			}
			return false;
		}).on('click', '.view-city', function () {
			var name = $(this).data('name');
			var _city = self.core.get_city(name);
			self.core.open_panel(new civitas.controls.panel_city({
				core: self.core,
				data: _city
			}));
			return false;
		}).on('click', '.recruit-soldier', function () {
			if (can_recruit_soldiers === true) {
				var soldier = $(this).data('handle');
				if (self.core.get_city().recruit_soldier(soldier) === true) {
					self._refresh_army();
				}
			} else {
				self.core.error(civitas.l('You will need to construct a Military Camp or Castle before recruiting soldiers in your city.'));
			}
			return false;
		}).on('click', '.view-merc', function () {
			var _army = $(this).data('id');
			var data = civitas.MERCENARIES[_army];
			self.core.open_panel(new civitas.controls.panel_army({
				core: self.core,
				data: data
			}));
			return false;
		}).on('click', '.raid-merc', function () {
			var _army = $(this).data('id');
			var data = civitas.MERCENARIES[_army];
			self.core.error('Not implemented yet.');
			return false;
		}).on('click', '.campaign-merc', function () {
			var _army = $(this).data('id');
			var data = civitas.MERCENARIES[_army];
			self.core.error('Not implemented yet.');
			return false;
		}).on('click', '.disband-merc', function () {
			var _army = $(this).data('id');
			var data = civitas.MERCENARIES[_army];
			self.core.error('Not implemented yet.');
			return false;
		}).on('click', '.close', function () {
			self.destroy();
			return false;
		}).draggable({
			handle: 'header',
			containment: 'window',
			snap: '.panel'
		});
		$(el + ' .tabs').tabs();
		$(el + ' .tips').tipsy({
			gravity: 's'
		});
		$(el).css({
			'left': ($(window).width() / 2) - ($(el).width() / 2),
			'top': ($(window).height() / 2) - ($(el).height() / 2)
		});
		return this;
	};

	/**
	 * Callback method called when a function from the core needs to refresh
	 * information on this panel.
	 *
	 * @public
	 * @returns {civitas.controls.panel_advisor}
	 */
	this.refresh = function() {
		this._refresh_info();
		this._refresh_production();
		this._refresh_housing();
		this._refresh_army();
		this._refresh_navy();
		this._refresh_mercenaries();
		this._refresh_diplomacy();
		return this;
	};

	this._refresh_mercenaries = function() {
		var city = this.core.get_city();
		var _t = '<p>' + civitas.l('Mercenary armies are available to hire for a fixed price, they do not cost additional resources but they are only available for raiding and campaign missions, they do not participate in the defense of your city.') + '</p>' +
				'<p>' + civitas.l('Also, keep in mind that once a mercenary army is hired, they are at your disposal until the end of the current year.') + '</p>' +
				'<div class="hired-mercenaries-list">';
		if (city.mercenary.length > 0) {
			_t += '<table class="normal">';
			for (var i = 0; i < city.mercenary.length; i++) {
				var armyData = civitas.MERCENARIES[city.mercenary[i].id];
				_t += '<tr>' +
						'<td class="icon"><img src="' + civitas.ASSETS_URL + 'images/armies/' + armyData.icon + '.png" /></td>' +
						'<td><p class="title">' + armyData.name + '</p><p class="description">' + armyData.description + '</p></td>' +
						'<td class="large">' +
						'<a title="' + civitas.l('View info on this mercenary army.') + '" data-id="' + city.mercenary[i].id + '" class="tips view-merc" href="#">' + civitas.l('view') + '</a> ' +
						'<a title="' + civitas.l('Send this mercenary army on a raiding mission. Depending on the success of the mission, they will return with coins and/or resources.') + '" data-id="' + i + '" class="tips raid-merc" href="#">' + civitas.l('raid') + '</a> ' +
						'<a title="' + civitas.l('Send this mercenary arm on a campaign towards a city. Depending on the success of the mission, they will return with prisoniers (future soldiers for your army), coins and/or resources. Winning a campaign will grant you fame and prestige.') + '" data-id="' + i + '" class="tips campaign-merc" href="#">' + civitas.l('campaign') + '</a> ' +
						'<a title="' + civitas.l('Disband this mercenary army? They will be available for hire later when you need them.') + '" data-id="' + i + '" class="tips disband-merc" href="#">' + civitas.l('release') + '</a>' +
						'</td>' +
						'</tr>';

			}
			_t += '</table>';
		} else {
			_t += '<p>' + civitas.l('You have no mercenary armies hired for your city. Go to the World Market Trades and hire one.') + '</p>';
		}
		_t += '</div>';
		$('#panel-' + this.id + ' #tab-mercenary').empty().append(_t);
		return this;
	};

	this._refresh_diplomacy = function() {
		var city = this.core.get_city();
		var _t = '';
		var can_diplomacy = this.core.get_city().is_building_built('embassy');
		if (can_diplomacy !== true) {
			_t += '<p>' + civitas.l('You will need to construct an Embassy before being able to propose treaties and pacts to other cities.') + '</p>';
		}
		var cities = this.core.get_cities();
		_t += '<div class="cities-list">' +
				'<table class="normal">';
		for (var i = 1; i < cities.length; i++) {
			_t += '<tr>' +
					'<td class="icon"><img src="' + civitas.ASSETS_URL + 'images/avatars/avatar' + cities[i].get_avatar() + '.png" /></td>' +
					'<td>' +
					'<p>' +
						'<span class="title">' + cities[i].get_name() + '</span> ' +
						'<span class="description">' + civitas.l('Leader') + ': ' + cities[i].get_ruler() + ' ' + civitas.l('Personality') + ': ' + cities[i].get_personality().name + '</span>' +
					'</p>';
			var influence = this.core.get_city().get_influence();
			influence = influence[cities[i].get_name()];
			var _e = '';
			if (influence < 20) {
				_e = ' vbad';
			} else if (influence >= 20 && influence < 50) {
				_e = ' bad';
			} else if (influence >= 50 && influence < 80) {
				_e = ' good';
			} else if (influence >= 80) {
				_e = ' vgood';
			}
			_t += '<div class="progress"><span style="width:' + influence + '%" class="bar' + _e + '"></span></div>';
			_t += '</td>' +
					'<td class="large">' +
					'<a data-name="' + cities[i].get_name() + '" title="' + civitas.l('View info about this city.') + '" class="tips view-city" href="#">' + civitas.l('view') + '</a> ' +
					'<a data-name="' + cities[i].get_name() + '" title="' + civitas.l('Send a spy to this city.') + '" data-id="' + i + '" class="tips spy" href="#">' + civitas.l('spy') + '</a> ' +
					'<a data-name="' + cities[i].get_name() + '" title="' + civitas.l('Propose a pact to this city`s ruler.') + '" class="tips pact" href="#">' + civitas.l('pact') + '</a> ' +
					'<a data-name="' + cities[i].get_name() + '" title="' + civitas.l('Send goods to this city.') + '" data-id="' + i + '" class="tips send-goods" href="#">' + civitas.l('send') + '</a> ' +
					'<a data-name="' + cities[i].get_name() + '" title="' + civitas.l('Declare war to this city.') + '" data-id="' + i + '" class="tips declare-war" href="#">' + civitas.l('war') + '</a>' +
					'</td>' +
					'</tr>';

		}
		_t += '</table>' +
				'</div>';
		$('#panel-' + this.id + ' #tab-diplomacy').empty().append(_t);
		return this;
	};

	this._refresh_info = function() {
		var city = this.core.get_city();
		var _t = '<img class="avatar" src="' + civitas.ASSETS_URL + 'images/avatars/avatar' + city.get_avatar() + '.png" />' +
				'<dl>' +
				'<dt>' + civitas.l('Current date') + '</dt><dd class="citydate">' + this.core.get_date() + '</dd>' +
				'<dt>' + civitas.l('Ruler') + '</dt><dd>' + city.get_ruler() + '</dd>' +
				'<dt>' + civitas.l('Climate') + '</dt><dd>' + city.get_climate().name.capitalize() + '</dd>' +
				'<dt>' + civitas.l('Personality') + '</dt><dd>' + city.get_personality().name.capitalize() + '</dd>' +
				'<dt>' + civitas.l('Nationality') + '</dt><dd>' + city.get_nationality().name.capitalize() + '</dd>' +
				'<dt>' + civitas.l('Level') + '</dt><dd class="citylevel">' + city.get_level() + '</dd>' +
				'<dt>' + civitas.l('Prestige') + '</dt><dd class="cityprestige">' + city.get_prestige() + '</dd>' +
				'<dt>' + civitas.l('Espionage') + '</dt><dd class="cityespionage">' + city.get_espionage() + '</dd>' +
				'<dt>' + civitas.l('Research') + '</dt><dd class="cityresearch">' + city.get_research() + '</dd>' +
				'</dl>';
		var advices = city.call_advisor();
		if (advices.length > 0) {
			_t += '<p>' + civitas.l('Your City Advisor recommends you to:') + '</p>' +
					'<ul class="advices">';
			for (var z = 0; z < advices.length; z++) {
				_t += '<li>' + advices[z] + '</li>';
			}
			_t += '</ul>';
		}
		$('#panel-' + this.id + ' #tab-info').empty().append(_t);
		return this;
	};

	this._refresh_housing = function() {
		var city = this.core.get_city();
		var buildings = city.get_buildings();
		var _t = '<table class="normal">' +
					'<thead>' +
					'<tr>' +
						'<td></td>' +
						'<td class="center">' + civitas.l('Level') + '</td>' +
						'<td>' + civitas.l('Tax') + '</td>' +
						'<td>' + civitas.l('Materials') + '</td>' +
					'</tr>' +
					'</thead>';
		var total_tax = 0;
		for (var l = 0; l < buildings.length; l++) {
			if (buildings[l].is_housing_building() === true) {
				var building_data = buildings[l].get_building_data();
				_t += '<tr' + ((buildings[l].has_problems() === false) ? '' : ' class="notify"') +'>' +
					'<td>' + buildings[l].get_name() + '</td>' +
					'<td class="center">' + buildings[l].get_level() + '</td>' +
					'<td>';
					if (building_data.tax) {
						total_tax += buildings[l].get_level() * building_data.tax;
						_t += ' +' + buildings[l].get_level() * building_data.tax + ' ' + civitas.ui.resource_small_img('coins');
					}
				_t += '</td>' +
					'<td>';
					if (building_data.materials) {
						for (var item in building_data.materials) {
							_t += ' -' + building_data.materials[item] + ' ' + civitas.ui.resource_small_img(item);
						}
					}
				_t += '</td>' +
				'</tr>';
			}
		}
		_t += '<tfoot>' +
							'<tr>' +
								'<td></td>' +
								'<td></td>' +
								'<td>' + civitas.l('Tax income') + ': ' + total_tax + ' ' + civitas.ui.resource_small_img('coins') + '</td>' +
								'<td></td>' +
							'</tr>' +
						'</tfoot>' +
					'</table>';
		$('#panel-' + this.id + ' #tab-housing').empty().append(_t);
		return this;
	};

	this._refresh_production = function() {
		var city = this.core.get_city();
		var buildings = city.get_buildings();
		var _t = '<table class="normal">' +
					'<thead>' +
					'<tr>' +
						'<td></td>' +
						'<td class="center">' + civitas.l('Level') + '</td>' +
						'<td>' + civitas.l('Production') + '</td>' +
						'<td>' + civitas.l('Materials') + '</td>' +
						'<td class="center">' + civitas.l('Stopped') + '</td>' +
					'</tr>' +
					'</thead>';
		for (var l = 0; l < buildings.length; l++) {
			if (buildings[l].is_production_building() === true) {
				var building_data = buildings[l].get_building_data();
				_t += '<tr' + ((buildings[l].has_problems() === false) ? '' : ' class="notify"') +'>' +
					'<td>' + buildings[l].get_name() + '</td>' +
					'<td class="center">' + buildings[l].get_level() + '</td>' +
					'<td>';
					if (building_data.production) {
						for (var item in building_data.production) {
							_t += ' +' + buildings[l].get_level() * building_data.production[item] + ' ' + civitas.ui.resource_small_img(item);
						}
					}
				_t += '</td>' +
					'<td>';
					if (building_data.materials) {
						for (var item in building_data.materials) {
							_t += ' -' + building_data.materials[item] + ' ' + civitas.ui.resource_small_img(item);
						}
					}
				_t += '</td>' +
					'<td class="center">' + ((buildings[l].is_producing() === true) ? civitas.l('no') : civitas.l('yes')) + '</td>' +
				'</tr>';
			}
		}
		_t += '<tfoot>' +
					'<tr>' +
						'<td></td>' +
						'<td class="center">' + civitas.l('Level') + '</td>' +
						'<td>' + civitas.l('Production') + '</td>' +
						'<td>' + civitas.l('Materials') + '</td>' +
						'<td class="center">' + civitas.l('Stopped') + '</td>' +
					'</tr>' +
				'</tfoot>' +
			'</table>';
		$('#panel-' + this.id + ' #tab-production').empty().append(_t);
		return this;
	};

	/**
	 * Internal function for refreshing the Army tab.
	 * 
	 * @private
	 * @returns {civitas.controls.panel_advisor}
	 */
	this._refresh_army = function () {
		var city = this.core.get_city();
		var resources = city.get_resources();
		var _t = '';
		var can_recruit_soldiers = this.core.get_city().is_building_built('camp') || this.core.get_city().is_building_built('castle');
		if (can_recruit_soldiers !== true) {
			_t += '<p>' + civitas.l('You will need to construct a Military Camp or Castle before being able to recruit soldiers in your city.') + '</p>';
		}
		_t += '<div class="army-list">' +
				'</div>' +
				'<div class="army-recruiter">';
		for (var item in civitas.SOLDIERS) {
			_t += '<fieldset>' +
					'<legend>' + item + '</legend>' +
					'<div class="cost">' +
					'<dl class="nomg">';
			for (var res in civitas.SOLDIERS[item].cost) {
				_t += '<dt>' + civitas.utils.nice_numbers(civitas.SOLDIERS[item].cost[res]) + '</dt><dd>' + civitas.ui.resource_small_img(res) + '</dd>';
			}
			_t += '</dl>' +
					'</div>' +
					'<div class="info">' +
					'<dl class="nomg">' +
					'<dt>Attack</dt><dd>' + civitas.SOLDIERS[item].attack + '</dd>' +
					'<dt>Defense</dt><dd>' + civitas.SOLDIERS[item].defense + '</dd>' +
					'</dl>' +
					'</div>' +
					'<img data-handle="' + item + '" title="' + civitas.l('Recruit') + ' ' + item + '" class="tips recruit-soldier" src="' + civitas.ASSETS_URL + 'images/armies/' + item.toLowerCase() + '.png" />' +
					'</fieldset>';
		}
		_t += '</div>';
		$('#panel-' + this.id + ' #tab-army').empty().append(_t);
		var el = '#panel-' + this.id;
		var _tt = '<fieldset>' +
				'<legend>' + civitas.l('Current Army') + '</legend>' +
				civitas.ui.army_list(city.get_army_total(), true) +
				'</fieldset>';
		$(el + ' .army-list').empty().append(_tt);
		return this;
	};

	/**
	 * Internal function for refreshing the Navy tab.
	 * 
	 * @private
	 * @returns {civitas.controls.panel_advisor}
	 */
	this._refresh_navy = function () {
		var city = this.core.get_city();
		var resources = city.get_resources();
		var _t = '';
		var can_build_ships = this.core.get_city().is_building_built('shipyard');
		if (can_build_ships !== true) {
			_t += '<p>' + civitas.l('You will need to construct a Shipyard before being able to construct ships in your city.') + '</p>';
		}
		_t += '<div class="navy-list">' +
				'</div>' +
				'<div class="navy-recruiter">';
		for (var item in civitas.SHIPS) {
			_t += '<fieldset>' +
					'<legend>' + item + '</legend>' +
					'<div class="cost">' +
					'<dl class="nomg">';
			for (var res in civitas.SHIPS[item].cost) {
				_t += '<dt>' + civitas.utils.nice_numbers(civitas.SHIPS[item].cost[res]) + '</dt><dd>' + civitas.ui.resource_small_img(res) + '</dd>';
			}
			_t += '</dl>' +
					'</div>' +
					'<div class="info">' +
					'<dl class="nomg">' +
					'<dt>' + civitas.l('Attack') + '</dt><dd>' + civitas.SHIPS[item].attack + '</dd>' +
					'<dt>' + civitas.l('Defense') + '</dt><dd>' + civitas.SHIPS[item].defense + '</dd>' +
					'</dl>' +
					'</div>' +
					'<img data-handle="' + item + '" title="' + civitas.l('Recruit') + ' ' + item + '" class="tips recruit-ship" src="' + civitas.ASSETS_URL + 'images/armies/' + item.toLowerCase().replace(/ /g,"_") + '.png" />' +
					'</fieldset>';
		}
		_t += '</div>';
		$('#panel-' + this.id + ' #tab-navy').empty().append(_t);
		var el = '#panel-' + this.id;
		var _tt = '<fieldset>' +
				'<legend>' + civitas.l('Current Navy') + '</legend>' +
				civitas.ui.navy_list(city.get_navy_total(), true) +
				'</fieldset>';
		$(el + ' .navy-list').empty().append(_tt);
		return this;
	};

	// Fire up the constructor
	return this.__init(params);
};
