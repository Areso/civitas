/**
 * City panel data.
 *
 * @type {Object}
 */
civitas.PANEL_CITY = {
	template: '<div id="panel-city" class="panel">' +
			'<header>' +
				'<span class="title"></span>' +
				'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents"></div>' +
		'</div>',
	id: 'city',
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
		var my_city = core.get_city();
		var city = params.data;
		var trades = city.get_trades();
		var location = civitas['CITY_LOCATION_' + my_city.get_climate().name.toUpperCase()];
		$(this.handle + ' header .title').html('City of ' + city.get_name());
		$(this.handle + ' .contents').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Army'), civitas.l('Navy'), civitas.l('Imports'), civitas.l('Exports')]));
		$(this.handle + ' #tab-info').append('' +
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
				'<dt>' + civitas.l('Distance') + '</dt><dd>' + civitas.utils.get_distance(location, civitas.CITIES[city.get_id()].location) + ' miles (' + civitas.utils.get_distance_in_days(location, civitas.CITIES[city.get_id()].location) + ' days)</dd>' +
				'</dl>');
		$(this.handle + ' #tab-army').append(civitas.ui.army_list(city.get_army_total()));
		$(this.handle + ' #tab-navy').append(civitas.ui.navy_list(city.get_navy_total()));
		$(this.handle + ' #tab-imports').append('' +
				'<p>' + civitas.l('Below are the goods this city will be buying this year.') + '</p>' +
				civitas.ui.trades_list(trades, 'imports'));
		$(this.handle + ' #tab-exports').append('' +
				'<p>' + civitas.l('Below are the goods this city will be selling this year.') + '</p>' +
				civitas.ui.trades_list(trades, 'exports'));
		
	}
}