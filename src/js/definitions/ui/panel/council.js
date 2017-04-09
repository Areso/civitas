/**
 * City Council panel data.
 *
 * @type {Object}
 */
civitas.PANEL_COUNCIL = {
	template: '' +
		'<div id="panel-council" class="panel">' +
			'<header>' +
				'<span class="title">' + civitas.l('City Council') + '</span>' +
				'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents"></div>' +
		'</div>',
	id: 'council',
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
		var el = this.handle;
		var settlement = core.get_settlement();
		$(el + ' .contents').append('' +
			'<div class="tabs">' +
				'<ul>' +
					'<li><a href="#tab-info">' + civitas.l('Info') + '</a></li>' +
					'<li><a href="#tab-tips">' + civitas.l('Tips') + '</a></li>' +
					'<li><a href="#tab-production">' + civitas.l('Production') + '</a></li>' +
					'<li><a href="#tab-housing">' + civitas.l('Housing') + '</a></li>' +
					'<li><a href="#tab-municipal">' + civitas.l('Municipal') + '</a></li>' +
					'<li><a href="#tab-mercenary">' + civitas.l('Mercenaries') + '</a></li>' +
					'<li><a href="#tab-achievements">' + civitas.l('Achievements') + '</a></li>' +
				'</ul>' +
				'<div id="tab-info">' +
				'</div>' +
				'<div id="tab-tips">' +
				'</div>' +
				'<div id="tab-production">' +
				'</div>' +
				'<div id="tab-housing">' +
				'</div>' +
				'<div id="tab-municipal">' +
				'</div>' +
				'<div id="tab-mercenary">' +
				'</div>' +
				'<div id="tab-achievements">' +
					'<div class="achievements-list"></div>' +
				'</div>' +
			'</div>');
		this.on_refresh();
		$(el).on('click', '.view-merc', function () {
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
		var advices = settlement.city_council();
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
		if (achievements.length > 0) {
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
		} else {
			_t += '<p>You have no achievements so far. Keep playing!</p>'
		}
		$('#panel-' + this.id + ' .achievements-list').empty().append(_t);
		_t = '<img class="avatar" src="' + civitas.ASSETS_URL + 'images/avatars/avatar' + settlement.get_ruler_avatar() + '.png" />' +
				'<dl>' +
				'<dt>' + civitas.l('Current date') + '</dt><dd class="citydate">' + core.get_date() + '</dd>' +
				'<dt>' + civitas.l('Ruler') + '</dt><dd>' + settlement.get_ruler_name() + '</dd>' +
				'<dt>' + civitas.l('Climate') + '</dt><dd>' + settlement.get_climate().name.capitalize() + '</dd>' +
				'<dt>' + civitas.l('Personality') + '</dt><dd>' + settlement.get_personality().name.capitalize() + '</dd>' +
				'<dt>' + civitas.l('Nationality') + '</dt><dd>' + settlement.get_nationality().name.capitalize() + '</dd>' +
				'<dt>' + civitas.l('Population') + '</dt><dd>' + civitas.utils.nice_numbers(settlement.get_population()) + '</dd>' +
				'<dt>' + civitas.l('Religion') + '</dt><dd>' + settlement.get_religion().name.capitalize() + '</dd>' +
				'<dt>' + civitas.l('Level') + '</dt><dd>' + civitas.ui.progress((settlement.get_level() * 100) / civitas.MAX_SETTLEMENT_LEVEL, 'small', settlement.get_level()) + '</dd>' +
				'<dt>' + civitas.l('Prestige') + '</dt><dd>' + civitas.ui.progress((settlement.get_prestige() * 100) / civitas.MAX_PRESTIGE_VALUE, 'small', settlement.get_prestige()) + '</dd>' +
				'<dt>' + civitas.l('Espionage') + '</dt><dd>' + civitas.ui.progress((settlement.get_espionage() * 100) / civitas.MAX_ESPIONAGE_VALUE, 'small', settlement.get_espionage()) + '</dd>' +
				'<dt>' + civitas.l('Faith') + '</dt><dd>' + civitas.ui.progress((settlement.get_faith() * 100) / civitas.MAX_FAITH_VALUE, 'small', settlement.get_faith()) + '</dd>' +
				'<dt>' + civitas.l('Research') + '</dt><dd>' + civitas.ui.progress((settlement.get_research() * 100) / civitas.MAX_RESEARCH_VALUE, 'small', settlement.get_research()) + '</dd>' +
			'</dl>';
		$('#panel-' + this.id + ' #tab-info').empty().append(_t);
		_t = '';
		if (advices.length > 0) {
			_t += '<ul class="advices">';
			for (var z = 0; z < advices.length; z++) {
				_t += '<li>' + advices[z] + '</li>';
			}
			_t += '</ul>';
		}
		$('#panel-' + this.id + ' #tab-tips').empty().append(_t);
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
	}
};
