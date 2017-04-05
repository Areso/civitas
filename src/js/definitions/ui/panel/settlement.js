/**
 * Settlement panel data.
 *
 * @type {Object}
 */
civitas.PANEL_SETTLEMENT = {
	template: '' +
		'<div id="panel-settlement" class="panel">' +
			'<header>' +
				'<span class="title">' + civitas.l('Small Settlement') + '</span>' +
				'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents"></div>' +
			'<footer class="footer">' +
					'<a class="tips attack btn" title="' + civitas.l('Attack this settlement') + '"></a>' +
					'<a class="tips resources btn" title="' + civitas.l('Give resources to this settlement') + '"></a>' +
					'<a class="tips alliance btn" title="' + civitas.l('Propose alliance to this settlement') + '"></a>' +
					'<a class="tips help btn" data-context="settlement" data-term="general" title="' + civitas.l('Info about this settlement') + '"></a>' +
			'</footer>' +
		'</div>',
	id: 'settlement',
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
		var city = core.get_city();
		var settlement = params.data;
		var location = civitas['CITY_LOCATION_' + city.get_climate().name.toUpperCase()];
		$(this.handle + ' .contents').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Army'), civitas.l('Navy'), civitas.l('Resources')]));
		$(this.handle + ' #tab-info').append('' +
				'<img class="avatar" src="' + civitas.ASSETS_URL + 'images/avatars/avatar40.png" />' +
				'<dl>' +
				'<dt>' + civitas.l('Nationality') + '</dt><dd>' + civitas.NATIONS[settlement.nationality].capitalize() + '</dd>' +
				'<dt>' + civitas.l('Population') + '</dt><dd>' + settlement.population + '</dd>' +
				'<dt>' + civitas.l('Prestige') + '</dt><dd>' + settlement.prestige + '</dd>' +
				'<dt>' + civitas.l('Coins') + '</dt><dd>' + civitas.utils.nice_numbers(settlement.resources.coins) + '</dd>' +
				'<dt>' + civitas.l('Distance') + '</dt><dd>' + civitas.utils.get_distance(location, settlement.location) + ' miles (' + civitas.utils.get_distance_in_days(location, settlement.location) + ' days)</dd>' +
				'</dl>');
		$(this.handle + ' #tab-army').append(civitas.ui.army_list(settlement));
		$(this.handle + ' #tab-navy').append(civitas.ui.navy_list(settlement));
		var out = '<p>This settlement has the the following resources:</p>' +
			'<dl>';
		for (var item in settlement.resources) {
			if ($.inArray(item, civitas.NON_RESOURCES) === -1) {
				out += '<dt>' + settlement.resources[item] + '</dt>' +
					'<dd>' + civitas.ui.resource_small_img(item) + '</dd>';
			}
		}
		out += '</dl>';
		$(this.handle + ' #tab-resources').append(out);
		$(this.handle).on('click', '.attack', function () {
			core.error('Not implemented yet.');
			return false;
		}).on('click', '.resources', function () {
			core.error('Not implemented yet.');
			return false;
		}).on('click', '.alliance', function () {
			core.error('Not implemented yet.');
			return false;
		}).on('click', '.help', function () {
			var term = $(this).data('term');
			var context = $(this).data('context');
			core.help(context, term);
			return false;
		});
	}
}