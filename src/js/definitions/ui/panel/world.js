/**
 * World panel data.
 *
 * @type {Object}
 */
civitas.PANEL_WORLD = {
	template: '' +
		'<div id="panel-world" class="panel">' +
			'<header>' +
				'<span class="title">' + civitas.l('World Map') + '</span>' +
				'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents">' +
				'<div class="worldmap"></div>' +
			'</div>' +
		'</div>',
	id: 'world',
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
		var settlement = core.get_settlement();
		var settlements = core.get_settlements();
		var loc = civitas['SETTLEMENT_LOCATION_' + settlement.get_climate().name.toUpperCase()];
		var out = '<div data-name="yoursettlement" class="tips settlement c1" title="' + civitas.l('City of') + ' ' + settlement.get_name() + '" style="left:' + loc.x + 'px;top:' + loc.y + 'px"></div>';
		// TODO
		out += '<div data-name="big" class="tips battle b1" title="' + civitas.l('Big Battle') + '" style="left:600px;top:320px"></div>';
		out += '<div data-name="big" class="tips battle b2" title="' + civitas.l('Big Sea Battle') + '" style="left:900px;top:550px"></div>';
		out += '<div data-name="big" class="tips battle b3" title="' + civitas.l('Encampment') + '" style="left:300px;top:300px"></div>';
		// TODO
		for (var i = 1; i < settlements.length; i++) {
			if (settlements[i].get_settlement_type() === civitas.CITY) {
				out += '<div data-name="' + settlements[i].get_name() + '" class="tips settlement c' + civitas.SETTLEMENTS[settlements[i].get_id()].icon + '" title="' + civitas.l('City of') + ' ' + settlements[i].get_name() + '" style="left:' + civitas.SETTLEMENTS[settlements[i].get_id()].location.x + 'px;top:' + civitas.SETTLEMENTS[settlements[i].get_id()].location.y + 'px"></div>';
			} else {
				out += '<div data-name="' + settlements[i].get_name() + '" class="tips settlement v1" title="' + civitas.l('Village of') + ' ' + settlements[i].get_name() + '" style="left:' + civitas.SETTLEMENTS[settlements[i].get_id()].location.x + 'px;top:' + civitas.SETTLEMENTS[settlements[i].get_id()].location.y + 'px"></div>';
			}
		}
		$(this.handle + ' .contents .worldmap').empty().append(out);
		$(this.handle).on('click', '.settlement', function () {
			var settlement_name = $(this).data('name');
			if (settlement_name === 'yoursettlement') {
				core.open_panel(civitas.PANEL_ADVISOR);
			} else {
				core.open_panel(civitas.PANEL_SETTLEMENT, core.get_settlement(settlement_name));
			}
			return false;
		});
	}
};
