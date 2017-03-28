/**
 * Main Game city advisor panel object.
 * 
 * @param {type} params
 * @class {city_builder.panel_advisor}
 * @returns {city_builder.panel_advisor}
 */
city_builder.controls.panel_advisor = function (params) {

	/**
	 * Reference to the core object.
	 * 
	 * @type {city_builder.game}
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
	this.title = city_builder.l('Your City Advisor');

	/**
	 * Object destructor.
	 * 
	 * @private
	 * @returns {Boolean}
	 */
	this.__destructor = function () {
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
		return this.__destructor();
	};

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {city_builder.panel}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		this.core = params.core;
		var el = '#panel-' + this.id;
		var self = this;
		if (city_builder.ui.panel_exists(el)) {
			this.destroy();
		}
		this.core.console_log('creating panel with id `' + this.id + '`');
		var city = this.core.get_city();
		var buildings = city.get_buildings();
		var can_diplomacy = city.is_building_built('embassy');
		var can_build_ships = city.is_building_built('shipyard');
		var can_recruit_soldiers = city.is_building_built('camp') || city.is_building_built('castle');
		$('.ui').append(city_builder.ui.generic_panel_template
			.replace(/{id}/g, this.id)
			.replace(/{title}/g, this.title));
		$(el + ' .contents').append('<div class="tabs">' +
			'<ul>' +
				'<li><a href="#tab-info">' + city_builder.l('Info') + '</a></li>' +
				'<li><a href="#tab-production">' + city_builder.l('Production') + '</a></li>' +
				'<li><a href="#tab-housing">' + city_builder.l('Housing') + '</a></li>' +
				'<li><a href="#tab-army">' + city_builder.l('Army') + '</a></li>' +
				'<li><a href="#tab-navy">' + city_builder.l('Navy') + '</a></li>' +
				'<li><a href="#tab-mercenary">' + city_builder.l('Mercenaries') + '</a></li>' +
				'<li><a href="#tab-diplomacy">' + city_builder.l('Diplomacy') + '</a></li>' +
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
					self.core.error(city_builder.l('Your influence on') + ' ' + city + ' ' + city_builder.l('is too low to propose a pact.'));
				}
			} else {
				self.core.error(city_builder.l('You will need to construct an Embassy before being able to propose treaties and pacts to other cities.'));
			}
			return false;
		}).on('click', '.spy', function () {
			if (can_diplomacy === true) {
				var city = $(this).data('name');
				self.core.error('Not implemented yet.');
				/*
				if (self.core.get_city().assign_spy(city) === true) {
					// TODO
				}
				*/
			} else {
				self.core.error(city_builder.l('You will need to construct an Embassy before being able to assign spies to other cities.'));
			}
			return false;
		}).on('click', '.recruit-ship', function () {
			if (can_build_ships === true) {
				var ship = $(this).data('handle');
				self.core.error('Not implemented yet.');
				/*
				if (self.core.get_city().recruit_ship(ship) === true) {
					self._refresh_navy();
				}
				*/
			} else {
				self.core.error(city_builder.l('You will need to construct a Shipyard before being able to construct ships in your city.'));
			}
			return false;
		}).on('click', '.declare-war', function () {
			if (can_diplomacy === true) {
				var name = $(this).data('name');
				var _city = self.core.get_city(name);
				self.core.error('Not implemented yet.');
				/*
				self.core.open_panel(new city_builder.controls.panel_declare_war({
					core: self.core,
					data: _city
				}));
				*/
			} else {
				self.core.error(city_builder.l('You will need to construct an Embassy before being able to declare war to other cities.'));
			}
			return false;
		}).on('click', '.send-goods', function () {
			if (can_diplomacy === true) {
				var name = $(this).data('name');
				var _city = self.core.get_city(name);
				self.core.error('Not implemented yet.');
				/*
				self.core.open_panel(new city_builder.controls.panel_send_goods({
					core: self.core,
					data: _city
				}));
				*/
			} else {
				self.core.error(city_builder.l('You will need to construct an Embassy before being able to send goods to other cities.'));
			}
			return false;
		}).on('click', '.view-city', function () {
			var name = $(this).data('name');
			var _city = self.core.get_city(name);
			self.core.open_panel(new city_builder.controls.panel_city({
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
				self.core.error(city_builder.l('You will need to construct a Military Camp or Castle before recruiting soldiers in your city.'));
			}
			return false;
		}).on('click', '.view-merc', function () {
			var _army = $(this).data('id');
			var data = city_builder.MERCENARIES[_army];
			self.core.open_panel(new city_builder.controls.panel_army({
				core: self.core,
				data: data
			}));
			return false;
		}).on('click', '.raid-merc', function () {
			var _army = $(this).data('id');
			var data = city_builder.MERCENARIES[_army];
			self.core.error('Not implemented yet.');
			return false;
		}).on('click', '.campaign-merc', function () {
			var _army = $(this).data('id');
			var data = city_builder.MERCENARIES[_army];
			self.core.error('Not implemented yet.');
			return false;
		}).on('click', '.disband-merc', function () {
			var _army = $(this).data('id');
			var data = city_builder.MERCENARIES[_army];
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
	 * @returns {city_builder.panel_advisor}
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
		var _t = '<p>' + city_builder.l('Mercenary armies are available to hire for a fixed price, they do not cost additional resources but they are only available for raiding and campaign missions, they do not participate in the defense of your city.') + '</p>' +
				'<p>' + city_builder.l('Also, keep in mind that once a mercenary army is hired, they are at your disposal until the end of the current year.') + '</p>' +
				'<div class="hired-mercenaries-list">';
		if (city.mercenary.length > 0) {
			_t += '<table class="normal">';
			for (var i = 0; i < city.mercenary.length; i++) {
				var armyData = city_builder.MERCENARIES[city.mercenary[i].id];
				_t += '<tr>' +
						'<td class="icon"><img src="' + city_builder.ASSETS_URL + 'images/armies/' + armyData.icon + '.png" /></td>' +
						'<td><p class="title">' + armyData.name + '</p><p class="description">' + armyData.description + '</p></td>' +
						'<td class="large">' +
						'<a title="' + city_builder.l('View info on this mercenary army.') + '" data-id="' + city.mercenary[i].id + '" class="tips view-merc" href="#">' + city_builder.l('view') + '</a> ' +
						'<a title="' + city_builder.l('Send this mercenary army on a raiding mission. Depending on the success of the mission, they will return with coins and/or resources.') + '" data-id="' + i + '" class="tips raid-merc" href="#">' + city_builder.l('raid') + '</a> ' +
						'<a title="' + city_builder.l('Send this mercenary arm on a campaign towards a city. Depending on the success of the mission, they will return with prisoniers (future soldiers for your army), coins and/or resources. Winning a campaign will grant you fame and prestige.') + '" data-id="' + i + '" class="tips campaign-merc" href="#">' + city_builder.l('campaign') + '</a> ' +
						'<a title="' + city_builder.l('Disband this mercenary army? They will be available for hire later when you need them.') + '" data-id="' + i + '" class="tips disband-merc" href="#">' + city_builder.l('release') + '</a>' +
						'</td>' +
						'</tr>';

			}
			_t += '</table>';
		} else {
			_t += '<p>' + city_builder.l('You have no mercenary armies hired for your city. Go to the World Market Trades and hire one.') + '</p>';
		}
		_t += '</div>';
		$('#tab-mercenary').empty().append(_t);
		return this;
	};

	this._refresh_diplomacy = function() {
		var city = this.core.get_city();
		var _t = '';
		var can_diplomacy = this.core.get_city().is_building_built('embassy');
		if (can_diplomacy !== true) {
			_t += '<p>' + city_builder.l('You will need to construct an Embassy before being able to propose treaties and pacts to other cities.') + '</p>';
		}
		var cities = this.core.get_cities();
		_t += '<div class="cities-list">' +
				'<table class="normal">';
		for (var i = 1; i < cities.length; i++) {
			_t += '<tr>' +
					'<td class="icon"><img src="' + city_builder.ASSETS_URL + 'images/avatars/avatar' + cities[i].get_avatar() + '.png" /></td>' +
					'<td>' +
					'<p>' +
						'<span class="title">' + cities[i].get_name() + '</span> ' +
						'<span class="description">' + city_builder.l('Leader') + ': ' + cities[i].get_ruler() + ' ' + city_builder.l('Personality') + ': ' + cities[i].get_personality().name + '</span>' +
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
					'<a data-name="' + cities[i].get_name() + '" title="' + city_builder.l('View info about this city.') + '" class="tips view-city" href="#">' + city_builder.l('view') + '</a> ' +
					'<a data-name="' + cities[i].get_name() + '" title="' + city_builder.l('Send a spy to this city.') + '" data-id="' + i + '" class="tips spy" href="#">' + city_builder.l('spy') + '</a> ' +
					'<a data-name="' + cities[i].get_name() + '" title="' + city_builder.l('Propose a pact to this city`s ruler.') + '" class="tips pact" href="#">' + city_builder.l('pact') + '</a> ' +
					'<a data-name="' + cities[i].get_name() + '" title="' + city_builder.l('Send goods to this city.') + '" data-id="' + i + '" class="tips send-goods" href="#">' + city_builder.l('send') + '</a> ' +
					'<a data-name="' + cities[i].get_name() + '" title="' + city_builder.l('Declare war to this city.') + '" data-id="' + i + '" class="tips declare-war" href="#">' + city_builder.l('war') + '</a>' +
					'</td>' +
					'</tr>';

		}
		_t += '</table>' +
				'</div>';
		$('#tab-diplomacy').empty().append(_t);
		return this;
	};

	this._refresh_info = function() {
		var city = this.core.get_city();
		var _t = '<img class="avatar" src="' + city_builder.ASSETS_URL + 'images/avatars/avatar' + city.get_avatar() + '.png" />' +
				'<dl>' +
				'<dt>' + city_builder.l('Current date') + '</dt><dd class="citydate">' + this.core.get_date() + '</dd>' +
				'<dt>' + city_builder.l('Ruler') + '</dt><dd>' + city.get_ruler() + '</dd>' +
				'<dt>' + city_builder.l('Climate') + '</dt><dd>' + city.get_climate().name.capitalize() + '</dd>' +
				'<dt>' + city_builder.l('Personality') + '</dt><dd>' + city.get_personality().name.capitalize() + '</dd>' +
				'<dt>' + city_builder.l('Nationality') + '</dt><dd>' + city.get_nationality().name.capitalize() + '</dd>' +
				'<dt>' + city_builder.l('Level') + '</dt><dd class="citylevel">' + city.get_level() + '</dd>' +
				'<dt>' + city_builder.l('Prestige') + '</dt><dd class="cityprestige">' + city.get_prestige() + '</dd>' +
				'<dt>' + city_builder.l('Espionage') + '</dt><dd class="cityespionage">' + city.get_espionage() + '</dd>' +
				'</dl>';
		var advices = city.call_advisor();
		if (advices.length > 0) {
			_t += '<p>' + city_builder.l('Your City Advisor recommends you to:') + '</p>' +
					'<ul class="advices">';
			for (var z = 0; z < advices.length; z++) {
				_t += '<li>' + advices[z] + '</li>';
			}
			_t += '</ul>';
		}
		$('#tab-info').empty().append(_t);
		return this;
	};

	this._refresh_housing = function() {
		var city = this.core.get_city();
		var buildings = city.get_buildings();
		var _t = '<table class="normal">' +
					'<thead>' +
					'<tr>' +
						'<td></td>' +
						'<td class="center">Level</td>' +
						'<td>Tax</td>' +
						'<td>Materials</td>' +
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
						_t += ' +' + buildings[l].get_level() * building_data.tax + ' ' + city_builder.ui.resource_small_img('coins');
					}
				_t += '</td>' +
					'<td>';
					if (building_data.materials) {
						for (var item in building_data.materials) {
							_t += ' -' + building_data.materials[item] + ' ' + city_builder.ui.resource_small_img(item);
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
								'<td>Tax income: ' + total_tax + ' ' + city_builder.ui.resource_small_img('coins') + '</td>' +
								'<td></td>' +
							'</tr>' +
						'</tfoot>' +
					'</table>';
		$('#tab-housing').empty().append(_t);
		return this;
	};

	this._refresh_production = function() {
		var city = this.core.get_city();
		var buildings = city.get_buildings();
		var _t = '<table class="normal">' +
					'<thead>' +
					'<tr>' +
						'<td></td>' +
						'<td class="center">Level</td>' +
						'<td>Production</td>' +
						'<td>Materials</td>' +
						'<td class="center">Stopped</td>' +
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
							_t += ' +' + buildings[l].get_level() * building_data.production[item] + ' ' + city_builder.ui.resource_small_img(item);
						}
					}
				_t += '</td>' +
					'<td>';
					if (building_data.materials) {
						for (var item in building_data.materials) {
							_t += ' -' + building_data.materials[item] + ' ' + city_builder.ui.resource_small_img(item);
						}
					}
				_t += '</td>' +
					'<td class="center">' + ((buildings[l].is_producing() === true) ? city_builder.l('no') : city_builder.l('yes')) + '</td>' +
				'</tr>';
			}
		}
		_t += '<tfoot>' +
					'<tr>' +
						'<td></td>' +
						'<td class="center">Level</td>' +
						'<td>Production</td>' +
						'<td>Materials</td>' +
						'<td class="center">Stopped</td>' +
					'</tr>' +
					'</tfoot>' +
					'</table>';
		$('#tab-production').empty().append(_t);
		return this;
	};

	/**
	 * Internal function for refreshing the Army tab.
	 * 
	 * @private
	 * @returns {city_builder.panel_advisor}
	 */
	this._refresh_army = function () {
		var city = this.core.get_city();
		var resources = city.get_resources();
		var _t = '';
		var can_recruit_soldiers = this.core.get_city().is_building_built('camp') || this.core.get_city().is_building_built('castle');
		if (can_recruit_soldiers !== true) {
			_t += '<p>' + city_builder.l('You will need to construct a Military Camp or Castle before being able to recruit soldiers in your city.') + '</p>';
		}
		_t += '<div class="army-list">' +
				'</div>' +
				'<div class="army-recruiter">';
		for (var item in city_builder.SOLDIER_TYPES) {
			_t += '<fieldset>' +
					'<legend>' + item + '</legend>' +
					'<div class="cost">' +
					'<dl class="nomg">';
			for (var res in city_builder.SOLDIER_TYPES[item].cost) {
				_t += '<dt>' + city_builder.utils.nice_numbers(city_builder.SOLDIER_TYPES[item].cost[res]) + '</dt><dd><img class="tips" title="' + resources[res].name + '" src="' + city_builder.ASSETS_URL + 'images/resources/' + res + '_small.png" /></dd>';
			}
			_t += '</dl>' +
					'</div>' +
					'<div class="info">' +
					'<dl class="nomg">' +
					'<dt>Attack</dt><dd>' + city_builder.SOLDIER_TYPES[item].attack + '</dd>' +
					'<dt>Defense</dt><dd>' + city_builder.SOLDIER_TYPES[item].defense + '</dd>' +
					'</dl>' +
					'</div>' +
					'<img data-handle="' + item + '" title="' + city_builder.l('Recruit') + ' ' + item + '" class="tips recruit-soldier" src="' + city_builder.ASSETS_URL + 'images/armies/' + item.toLowerCase() + '.png" />' +
					'</fieldset>';
		}
		_t += '</div>';
		$('#tab-army').empty().append(_t);
		var el = '#panel-' + this.id;
		var _tt = '<fieldset>' +
				'<legend>' + city_builder.l('Current Army') + '</legend>' +
				city_builder.ui.army_list(city.get_army_total(), true) +
				'</fieldset>';
		$(el + ' .army-list').empty().append(_tt);
		return this;
	};

	/**
	 * Internal function for refreshing the Navy tab.
	 * 
	 * @private
	 * @returns {city_builder.panel_advisor}
	 */
	this._refresh_navy = function () {
		var city = this.core.get_city();
		var resources = city.get_resources();
		var _t = '';
		var can_build_ships = this.core.get_city().is_building_built('shipyard');
		if (can_build_ships !== true) {
			_t += '<p>' + city_builder.l('You will need to construct a Shipyard before being able to construct ships in your city.') + '</p>';
		}
		_t += '<div class="navy-list">' +
				'</div>' +
				'<div class="navy-recruiter">';
		for (var item in city_builder.SHIP_TYPES) {
			_t += '<fieldset>' +
					'<legend>' + item + '</legend>' +
					'<div class="cost">' +
					'<dl class="nomg">';
			for (var res in city_builder.SHIP_TYPES[item].cost) {
				_t += '<dt>' + city_builder.utils.nice_numbers(city_builder.SHIP_TYPES[item].cost[res]) + '</dt><dd><img class="tips" title="' + resources[res].name + '" src="' + city_builder.ASSETS_URL + 'images/resources/' + res + '_small.png" /></dd>';
			}
			_t += '</dl>' +
					'</div>' +
					'<div class="info">' +
					'<dl class="nomg">' +
					'<dt>' + city_builder.l('Attack') + '</dt><dd>' + city_builder.SHIP_TYPES[item].attack + '</dd>' +
					'<dt>' + city_builder.l('Defense') + '</dt><dd>' + city_builder.SHIP_TYPES[item].defense + '</dd>' +
					'</dl>' +
					'</div>' +
					'<img data-handle="' + item + '" title="' + city_builder.l('Recruit') + ' ' + item + '" class="tips recruit-ship" src="' + city_builder.ASSETS_URL + 'images/armies/' + item.toLowerCase().replace(/ /g,"_") + '.png" />' +
					'</fieldset>';
		}
		_t += '</div>';
		$('#tab-navy').empty().append(_t);
		var el = '#panel-' + this.id;
		var _tt = '<fieldset>' +
				'<legend>' + city_builder.l('Current Navy') + '</legend>' +
				city_builder.ui.navy_list(city.get_navy_total(), true) +
				'</fieldset>';
		$(el + ' .navy-list').empty().append(_tt);
		return this;
	};

	// Fire up the constructor
	return this.__constructor(params);
};
