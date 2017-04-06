/**
 * Advisor panel data.
 *
 * @type {Object}
 */
civitas.PANEL_ADVISOR = {
	template: '' +
		'<div id="panel-advisor" class="panel">' +
			'<header>' +
				'<span class="title">' + civitas.l('Your City Advisor') + '</span>' +
				'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents"></div>' +
		'</div>',
	id: 'advisor',
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
		var el = this.handle;
		var settlement = core.get_settlement();
		$(el + ' .contents').append('' +
			'<div class="tabs">' +
				'<ul>' +
					'<li><a href="#tab-info">' + civitas.l('Info') + '</a></li>' +
					'<li><a href="#tab-production">' + civitas.l('Production') + '</a></li>' +
					'<li><a href="#tab-housing">' + civitas.l('Housing') + '</a></li>' +
					'<li><a href="#tab-municipal">' + civitas.l('Municipal') + '</a></li>' +
					'<li><a href="#tab-army">' + civitas.l('Army') + '</a></li>' +
					'<li><a href="#tab-navy">' + civitas.l('Navy') + '</a></li>' +
					'<li><a href="#tab-mercenary">' + civitas.l('Mercenaries') + '</a></li>' +
					'<li><a href="#tab-diplomacy">' + civitas.l('Diplomacy') + '</a></li>' +
					'<li><a href="#tab-achievements">' + civitas.l('Achievements') + '</a></li>' +
				'</ul>' +
				'<div id="tab-info">' +
				'</div>' +
				'<div id="tab-production">' +
				'</div>' +
				'<div id="tab-housing">' +
				'</div>' +
				'<div id="tab-municipal">' +
				'</div>' +
				'<div id="tab-army">' +
				'</div>' +
				'<div id="tab-navy">' +
				'</div>' +
				'<div id="tab-mercenary">' +
				'</div>' +
				'<div id="tab-diplomacy">' +
				'</div>' +
				'<div id="tab-achievements">' +
					'<div class="achievements-list"></div>' +
				'</div>' +
			'</div>');
		this.on_refresh();
		$(el).on('click', '.pact', function () {
			if (!settlement.can_diplomacy()) {
				core.error(civitas.l('You will need to construct an Embassy before being able to propose treaties and pacts to other settlements.'));
				return false;
			}
			var _settlement = $(this).data('name');
			var influence = core.get_settlement().get_influence_with_settlement(_settlement);
			if (influence >= 50) {
				core.error('Not implemented yet.');
				/*
				if (core.get_settlement().propose_pact(_settlement) === true) {
					// TODO
				}
				*/
			} else {
				core.error(civitas.l('Your influence on') + ' ' + _settlement + ' ' + civitas.l('is too low to propose a pact.'));
			}
			return false;
		}).on('click', '.spy', function () {
			if (!settlement.can_diplomacy()) {
				core.error(civitas.l('You will need to construct an Embassy before being able to assign spies to other settlements.'));
				return false;
			}
			var _settlement = $(this).data('name');
			core.error(civitas.l('Not implemented yet.'));
			/*
			if (core.get_settlement().assign_spy(_settlement) === true) {
				// TODO
			}
			*/	
			return false;
		}).on('click', '.recruit-ship', function () {
			if (!settlement.can_build_ships()) {
				core.error(civitas.l('You will need to construct a Shipyard before being able to construct ships in your city.'));
				return false;
			}
			var ship = $(this).data('handle');
			core.error(civitas.l('Not implemented yet.'));
			/*
			if (core.get_settlement().recruit_ship(ship) === true) {
				self._refresh_navy();
			}
			*/
			return false;
		}).on('click', '.declare-war', function () {
			if (!settlement.can_diplomacy()) {
				core.error(civitas.l('You will need to construct an Embassy before being able to declare war to other settlements.'));
				return false;
			}
			var name = $(this).data('name');
			var _settlement = core.get_settlement(name);
			core.error(civitas.l('Not implemented yet.'));
			/*
			core.open_panel(new civitas.controls.panel_declare_war({
				core: core,
				data: _settlement
			}));
			*/
			return false;
		}).on('click', '.send-goods', function () {
			if (!settlement.can_diplomacy()) {
				core.error(civitas.l('You will need to construct an Embassy before being able to send goods to other settlements.'));
				return false;
			}
			var name = $(this).data('name');
			var _settlement = core.get_settlement(name);
			core.error(civitas.l('Not implemented yet.'));
			/*
			core.open_panel(new civitas.controls.panel_send_goods({
				core: core,
				data: _settlement
			}));
			*/
			return false;
		}).on('click', '.view-settlement', function () {
			var name = $(this).data('name');
			var _settlement = core.get_settlement(name);
			core.open_panel(civitas.PANEL_SETTLEMENT, _settlement);
			return false;
		}).on('click', '.recruit-soldier', function () {
			if (!settlement.can_recruit_soldiers()) {
				core.error(civitas.l('You will need to construct a Military Camp or Castle before recruiting soldiers in your city.'));
				return false;
			}
			var soldier = $(this).data('handle');
			if (core.get_settlement().recruit_soldier(soldier)) {
				self._refresh_army();
			}	
			return false;
		}).on('click', '.view-merc', function () {
			var _army = parseInt($(this).data('id'));
			var data = civitas.MERCENARIES[_army];
			core.open_panel(civitas.PANEL_ARMY, data);
			return false;
		}).on('click', '.raid-merc', function () {
			var _army = parseInt($(this).data('id'));
			var data = civitas.MERCENARIES[_army];
			core.error('Not implemented yet.');
			return false;
		}).on('click', '.campaign-merc', function () {
			var _army = parseInt($(this).data('id'));
			var data = civitas.MERCENARIES[_army];
			core.error('Not implemented yet.');
			return false;
		}).on('click', '.disband-merc', function () {
			var _army = parseInt($(this).data('id'));
			var data = civitas.MERCENARIES[_army];
			core.error('Not implemented yet.');
			return false;
		});
	},
	on_refresh: function() {
		var el = '#panel-' + this.id;
		var core = this.get_core();
		var settlement = core.get_settlement();
		var settlements = core.get_settlements();
		var buildings = settlement.get_buildings();
		var resources = settlement.get_resources();
		var achievements = core.get_achievements();
		var advices = settlement.call_advisor();
		var el = '#panel-' + this.id;
		var _t = '<p>' + civitas.l('Mercenary armies are available to hire for a fixed price, they do not cost additional resources but they are only available for raiding and campaign missions, they do not participate in the defense of your city.') + '</p>' +
				'<p>' + civitas.l('Also, keep in mind that once a mercenary army is hired, they are at your disposal until the end of the current year.') + '</p>' +
				'<div class="hired-mercenaries-list">';
		if (settlement.mercenary.length > 0) {
			_t += '<table class="normal">';
			for (var i = 0; i < settlement.mercenary.length; i++) {
				var armyData = civitas.MERCENARIES[settlement.mercenary[i].id];
				_t += '<tr>' +
						'<td class="icon"><img src="' + civitas.ASSETS_URL + 'images/armies/' + armyData.icon + '.png" /></td>' +
						'<td><p class="title">' + armyData.name + '</p><p class="description">' + armyData.description + '</p></td>' +
						'<td class="large">' +
						'<a title="' + civitas.l('View info on this mercenary army.') + '" data-id="' + settlement.mercenary[i].id + '" class="tips view-merc" href="#">' + civitas.l('view') + '</a> ' +
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

		_t = '';
		if (!settlement.can_diplomacy()) {
			_t += '<p>' + civitas.l('You will need to construct an Embassy before being able to propose treaties and pacts to other cities.') + '</p>';
		}
		_t += '<div class="settlements-list">' +
				'<table class="normal">';
		for (var i = 1; i < settlements.length; i++) {
			_t += '<tr>' +
					'<td class="icon"><img src="' + civitas.ASSETS_URL + 'images/avatars/avatar' + settlements[i].get_ruler_avatar() + '.png" /></td>' +
					'<td>' +
					'<p>' +
						'<span class="title">' + settlements[i].get_name() + '</span> ' +
						'<span class="description">' + civitas.l('Leader') + ': ' + settlements[i].get_ruler_name() + ' ' + civitas.l('Personality') + ': ' + settlements[i].get_personality().name + '</span>' +
					'</p>';
			var status = settlement.get_status();
			var influence = status[settlements[i].get_id()].influence;
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
			_t += '<div class="progress big"><span style="width:' + influence + '%" class="bar' + _e + '">' + influence + '</span></div>';
			_t += '</td>' +
					'<td class="large">' +
					'<a data-name="' + settlements[i].get_name() + '" title="' + civitas.l('View info about this settlement.') + '" class="tips view-settlement" href="#">' + civitas.l('view') + '</a> ' +
					'<a data-name="' + settlements[i].get_name() + '" title="' + civitas.l('Send a spy to this settlement.') + '" data-id="' + i + '" class="tips spy" href="#">' + civitas.l('spy') + '</a> ' +
					'<a data-name="' + settlements[i].get_name() + '" title="' + civitas.l('Propose a pact to this settlement`s ruler.') + '" class="tips pact" href="#">' + civitas.l('pact') + '</a> ' +
					'<a data-name="' + settlements[i].get_name() + '" title="' + civitas.l('Send goods to this settlement.') + '" data-id="' + i + '" class="tips send-goods" href="#">' + civitas.l('send') + '</a> ' +
					'<a data-name="' + settlements[i].get_name() + '" title="' + civitas.l('Declare war to this settlement.') + '" data-id="' + i + '" class="tips declare-war" href="#">' + civitas.l('war') + '</a>' +
					'</td>' +
					'</tr>';

		}
		_t += '</table>' +
				'</div>';
		$('#panel-' + this.id + ' #tab-diplomacy').empty().append(_t);
		_t = '';
		for (var i = 0; i < achievements.length; i++) {
			var achievement_data = core.get_achievement_by_id(achievements[i].id);
			if (achievement_data !== false) {
				_t += '<div class="achievement">' +
					'<div class="left">' +
						'<div class="ach img"></div>' +
					'</div>' +
					'<div class="right">' +
						'<div class="inner">' +
							'<h2>' + achievement_data.name + '</h2>' +
							achievement_data.description +
						'</div>' +
						'<div class="time" title="' + achievements[i].date + '">' +
							'<strong>' + civitas.utils.time_since(achievements[i].date) + '</strong> ago' +
						'</div>' +
					'</div>' +
				'</div>';
			}
		}
		$('#panel-' + this.id + ' .achievements-list').empty().append(_t);
		_t = '<img class="avatar" src="' + civitas.ASSETS_URL + 'images/avatars/avatar' + settlement.get_ruler_avatar() + '.png" />' +
				'<dl>' +
				'<dt>' + civitas.l('Current date') + '</dt><dd class="citydate">' + core.get_date() + '</dd>' +
				'<dt>' + civitas.l('Ruler') + '</dt><dd>' + settlement.get_ruler_name() + '</dd>' +
				'<dt>' + civitas.l('Climate') + '</dt><dd>' + settlement.get_climate().name.capitalize() + '</dd>' +
				'<dt>' + civitas.l('Personality') + '</dt><dd>' + settlement.get_personality().name.capitalize() + '</dd>' +
				'<dt>' + civitas.l('Nationality') + '</dt><dd>' + settlement.get_nationality().name.capitalize() + '</dd>' +
				'<dt>' + civitas.l('Level') + '</dt><dd class="citylevel">' + settlement.get_level() + '</dd>' +
				'<dt>' + civitas.l('Prestige') + '</dt><dd class="cityprestige">' + settlement.get_prestige() + '</dd>' +
				'<dt>' + civitas.l('Espionage') + '</dt><dd class="cityespionage">' + settlement.get_espionage() + '</dd>' +
				'<dt>' + civitas.l('Research') + '</dt><dd class="cityresearch">' + settlement.get_research() + '</dd>' +
				'</dl>';
		if (advices.length > 0) {
			_t += '<p>' + civitas.l('Your City Advisor recommends you to:') + '</p>' +
					'<ul class="advices">';
			for (var z = 0; z < advices.length; z++) {
				_t += '<li>' + advices[z] + '</li>';
			}
			_t += '</ul>';
		}
		$('#panel-' + this.id + ' #tab-info').empty().append(_t);
		_t = '<table class="normal">' +
					'<thead>' +
					'<tr>' +
						'<td></td>' +
						'<td class="center">' + civitas.l('Level') + '</td>' +
						'<td>' + civitas.l('Raises') + '</td>' +
						'<td>' + civitas.l('Uses') + '</td>' +
					'</tr>' +
					'</thead>';
		var total_costs = 0;
		var total_benefits = {
			fame: 0,
			espionage: 0,
			research: 0
		}
		for (var l = 0; l < buildings.length; l++) {
			if (buildings[l].is_municipal_building()) {
				var building_data = buildings[l].get_building_data();
				_t += '<tr' + ((buildings[l].has_problems() === false) ? '' : ' class="notify"') +'>' +
					'<td>' + buildings[l].get_name() + '</td>' +
					'<td class="center">' + buildings[l].get_level() + '</td>' +
					'<td>';
					'<td>';
					if (building_data.production) {
						for (var item in building_data.production) {
							total_benefits[item] += (buildings[l].has_problems() === false) ? buildings[l].get_level() * building_data.production[item] : 0;
							_t += ' +' + buildings[l].get_level() * building_data.production[item] + ' ' + civitas.ui.resource_small_img(item);
						}
					}
				_t += '</td>' +
					'<td>';
					if (building_data.materials) {
						for (var item in building_data.materials) {
							total_costs += (buildings[l].has_problems() === false) ? building_data.materials[item] : 0;
							_t += ' -' + building_data.materials[item] + ' ' + civitas.ui.resource_small_img(item);
						}
					}
				_t += '</td>' +
				'</tr>';
			}
		}
		var _z = '';
		for (var item in total_benefits) {
			if (total_benefits[item] > 0) {
				_z += ' +' + total_benefits[item] + ' ' + civitas.ui.resource_small_img(item);
			}
		}
		_t += '<tfoot>' +
							'<tr>' +
								'<td>' + civitas.l('Total') + '</td>' +
								'<td></td>' +
								'<td>' + _z + '</td>' +
								'<td>-' + total_costs + ' ' + civitas.ui.resource_small_img('coins') + '</td>' +
							'</tr>' +
						'</tfoot>' +
					'</table>';
		$('#panel-' + this.id + ' #tab-municipal').empty().append(_t);
		_t = '<table class="normal">' +
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
			if (buildings[l].is_housing_building()) {
				var building_data = buildings[l].get_building_data();
				_t += '<tr' + ((buildings[l].has_problems() === false) ? '' : ' class="notify"') +'>' +
					'<td>' + buildings[l].get_name() + '</td>' +
					'<td class="center">' + buildings[l].get_level() + '</td>' +
					'<td>';
					if (building_data.tax) {
						total_tax += (buildings[l].has_problems() === false) ? buildings[l].get_level() * building_data.tax : 0;
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
								'<td>' + civitas.l('Income') + '</td>' +
								'<td></td>' +
								'<td>+' + total_tax + ' ' + civitas.ui.resource_small_img('coins') + '</td>' +
								'<td></td>' +
							'</tr>' +
						'</tfoot>' +
					'</table>';
		$('#panel-' + this.id + ' #tab-housing').empty().append(_t);
		_t = '<table class="normal">' +
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
			if (buildings[l].is_production_building() && buildings[l].is_municipal_building() === false) {
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
		_t = '';
		if (!settlement.can_recruit_soldiers()) {
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
		_t = '<fieldset>' +
				'<legend>' + civitas.l('Current Army') + '</legend>' +
				civitas.ui.army_list(settlement.get_army_total(), true) +
				'</fieldset>';
		$(el + ' .army-list').empty().append(_t);
		_t = '';
		if (!settlement.can_build_ships()) {
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
		_t = '<fieldset>' +
				'<legend>' + civitas.l('Current Navy') + '</legend>' +
				civitas.ui.navy_list(settlement.get_navy_total(), true) +
				'</fieldset>';
		$(el + ' .navy-list').empty().append(_t);
	}
};
