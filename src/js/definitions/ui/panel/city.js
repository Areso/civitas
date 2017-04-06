/**
 * City panel data.
 *
 * @type {Object}
 */
civitas.PANEL_CITY = {
	template: '' +
		'<div id="panel-city" class="panel">' +
			'<header>' +
				'<span class="title"></span>' +
				'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents"></div>' +
			'<footer class="footer">' +
					'<a class="tips attack btn" title="' + civitas.l('Attack this city') + '"></a>' +
					'<a class="tips resources btn" title="' + civitas.l('Give resources to this city') + '"></a>' +
					'<a class="tips alliance btn" title="' + civitas.l('Propose alliance to this city') + '"></a>' +
					'<a class="tips help btn" data-context="city" data-term="general" title="' + civitas.l('Info about this city') + '"></a>' +
			'</footer>' +
		'</div>',
	params_data: null,
	id: 'city',
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
		var my_city = core.get_city();
		this.params_data = params;
		var city = params.data;
		var trades = city.get_trades();
		var location = civitas['CITY_LOCATION_' + my_city.get_climate().name.toUpperCase()];
		$(this.handle + ' header .title').html('City of ' + city.get_name());
		$(this.handle + ' .contents').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Army'), civitas.l('Navy'), civitas.l('Imports'), civitas.l('Exports')]));
		this.on_refresh();
		$(this.handle).on('click', '.attack', function () {
			if (my_city.can_diplomacy() === true) {
				my_city.diplomacy(city.get_id(), civitas.DIPLOMACY_WAR, 'city');
				core.error('Not implemented yet.');
			} else {
				core.error(civitas.l('You will need to construct an Embassy before being able to propose treaties and pacts to other settlements.'));
			}
			return false;
		}).on('click', '.alliance', function () {
			if (my_city.can_diplomacy() === true) {
				my_city.diplomacy(city.get_id(), civitas.DIPLOMACY_PROPOSE_ALLIANCE, 'city');
				core.error('Not implemented yet.');
			} else {
				core.error(civitas.l('You will need to construct an Embassy before being able to propose treaties and pacts to other settlements.'));
			}
			return false;
		}).on('click', '.resources', function () {
			if (my_city.can_diplomacy() === true) {
				core.error('Not implemented yet.');
			} else {
				core.error(civitas.l('You will need to construct an Embassy before being able to send goods to other settlements.'));
			}
			return false;
		});
	},
	on_refresh: function() {
		var self = this;
		var core = this.get_core();
		var my_city = core.get_city();
		var city = this.params_data.data;
		var trades = city.get_trades();
		var location = civitas['CITY_LOCATION_' + my_city.get_climate().name.toUpperCase()];
		$(this.handle + ' #tab-info').empty().append('' +
				'<img class="avatar" src="' + civitas.ASSETS_URL + 'images/avatars/avatar' + city.get_ruler_avatar() + '.png" />' +
				'<dl>' +
				'<dt>' + city.get_ruler().title + '</dt><dd>' + city.get_ruler_name() + '</dd>' +
				'<dt>' + civitas.l('Climate') + '</dt><dd>' + city.get_climate().name.capitalize() + '</dd>' +
				'<dt>' + civitas.l('Personality') + '</dt><dd>' + city.get_personality().name.capitalize() + '</dd>' +
				'<dt>' + civitas.l('Nationality') + '</dt><dd>' + city.get_nationality().name.capitalize() + '</dd>' +
				'<dt>' + civitas.l('Level') + '</dt><dd>' + city.get_level() + '</dd>' +
				'<dt>' + civitas.l('Prestige') + '</dt><dd>' + city.get_prestige() + '</dd>' +
				'<dt>' + civitas.l('Coins') + '</dt><dd>' + civitas.utils.nice_numbers(city.get_coins()) + '</dd>' +
				'<dt>' + civitas.l('Influence') + '</dt><dd>' + my_city.get_influence_with_city(city.get_id()) + '</dd>' +
				'<dt>' + civitas.l('Diplomatic Status') + '</dt><dd>' + my_city.get_diplomacy_status(city.get_id(), 'city').name.capitalize() + '</dd>' +
				'<dt>' + civitas.l('Distance') + '</dt><dd>' + civitas.utils.get_distance(location, civitas.CITIES[city.get_id()].location) + ' miles (' + civitas.utils.get_distance_in_days(location, civitas.CITIES[city.get_id()].location) + ' days)</dd>' +
				'</dl>');
		$(this.handle + ' #tab-army').empty().append(civitas.ui.army_list(city.get_army_total()));
		$(this.handle + ' #tab-navy').empty().append(civitas.ui.navy_list(city.get_navy_total()));
		$(this.handle + ' #tab-imports').empty().append('' +
				'<p>' + civitas.l('Below are the goods this city will be buying this year.') + '</p>' +
				civitas.ui.trades_list(trades, 'imports'));
		$(this.handle + ' #tab-exports').empty().append('' +
				'<p>' + civitas.l('Below are the goods this city will be selling this year.') + '</p>' +
				civitas.ui.trades_list(trades, 'exports'));
	}
};
