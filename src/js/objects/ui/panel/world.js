/**
 * World panel data.
 *
 * @type {Object}
 */
civitas.PANEL_WORLD = {
	template: '<div id="panel-world" class="panel">' +
		'<header>' +
			'<span class="title">' + civitas.l('World Map') + '</span>' +
			'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
		'</header>' +
		'<div class="contents"><div class="worldmap"></div></div>' +
	'</div>',
	id: 'world',
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
		var city = core.get_city();
		var cities = core.get_cities();
		var el = this.handle;
		var loc = civitas['CITY_LOCATION_' + city.get_climate().name.toUpperCase()];
		var out = '<div data-name="yourcity" class="tips city c1" title="' + civitas.l('City of') + ' ' + city.get_name() + '" style="left:' + loc.x + 'px;top:' + loc.y + 'px"></div>';
		for (var item in civitas.SETTLEMENTS) {
			out += '<div data-id="' + item + '" class="tips settlement s1" title="' + civitas.l('Small Settlement') + '" style="left:' + civitas.SETTLEMENTS[item].location.x + 'px;top:' + civitas.SETTLEMENTS[item].location.y + 'px"></div>';
		}
		// TODO
		out += '<div data-name="big" class="tips battle b1" title="' + civitas.l('Big Battle') + '" style="left:600px;top:320px"></div>';
		out += '<div data-name="big" class="tips battle b2" title="' + civitas.l('Big Sea Battle') + '" style="left:900px;top:550px"></div>';
		out += '<div data-name="big" class="tips battle b3" title="' + civitas.l('Encampment') + '" style="left:300px;top:300px"></div>';
		// TODO
		for (var i = 1; i < cities.length; i++) {
			out += '<div data-name="' + cities[i].get_name() + '" class="tips city c' + civitas.CITIES[cities[i].get_id()].icon + '" title="' + civitas.l('City of') + ' ' + cities[i].get_name() + '" style="left:' + civitas.CITIES[cities[i].get_id()].location.x + 'px;top:' + civitas.CITIES[cities[i].get_id()].location.y + 'px"></div>';
		}
		$(el + ' .contents .worldmap').empty().append(out);
		$(el).on('click', '.city', function () {
			var city_name = $(this).data('name');
			if (city_name === 'yourcity') {
				core.open_panel(civitas.PANEL_ADVISOR);
			} else {
				core.open_panel(civitas.PANEL_CITY, core.get_city(city_name));
			}
			return false;
		}).on('click', '.settlement', function () {
			var id = parseInt($(this).data('id'));
			core.open_panel(civitas.PANEL_SETTLEMENT, civitas.SETTLEMENTS[id]);
			return false;
		});
	}
}