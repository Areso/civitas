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
		var map = core.get_worldmap();
		$(this.handle + ' .worldmap').addClass('w' + map);
		this.on_refresh();
		$(this.handle).on('click', '.settlement', function () {
			var settlement_name = $(this).data('name');
			if (settlement_name === 'yoursettlement') {
				core.open_panel(civitas.PANEL_COUNCIL);
			} else {
				core.open_panel(civitas.PANEL_SETTLEMENT, core.get_settlement(settlement_name));
			}
			return false;
		}).on('click', '.caravan, .army', function () {
			var id = parseInt($(this).data('id'));
			core.open_panel(civitas.PANEL_CAMPAIGN, core.campaigns[id]);
			return false;
		});
	},
	on_refresh: function() {
		var self = this;
		var core = this.get_core();
		var settlement = core.get_settlement();
		var settlements = core.get_settlements();
		var campaigns = core.get_campaigns();
		var loc = civitas['SETTLEMENT_LOCATION_' + settlement.get_climate().name.toUpperCase()];
		var out = '<div data-name="yoursettlement" class="tips settlement c1" title="' + civitas.l('City of') + ' ' + settlement.get_name() + '" style="left:' + loc.x + 'px;top:' + loc.y + 'px"></div>';
		for (var i = 1; i < settlements.length; i++) {
			if (settlements[i].get_settlement_type() === civitas.CITY) {
				out += '<div data-name="' + settlements[i].get_name() + '" class="tips settlement c' + civitas.SETTLEMENTS[settlements[i].get_id()].icon + '" title="' + civitas.l('City of') + ' ' + settlements[i].get_name() + '" style="left:' + civitas.SETTLEMENTS[settlements[i].get_id()].location.x + 'px;top:' + civitas.SETTLEMENTS[settlements[i].get_id()].location.y + 'px"></div>';
			} else {
				out += '<div data-name="' + settlements[i].get_name() + '" class="tips settlement v1" title="' + civitas.l('Village of') + ' ' + settlements[i].get_name() + '" style="left:' + civitas.SETTLEMENTS[settlements[i].get_id()].location.x + 'px;top:' + civitas.SETTLEMENTS[settlements[i].get_id()].location.y + 'px"></div>';
			}
		}
		for (var i = 0; i < campaigns.length; i++) {
			var source = campaigns[i].source;
			var destination = campaigns[i].destination;
			var distance_in_days = civitas.utils.get_distance_in_days(source, destination);
			var x = source.x + Math.floor(((destination.x - source.x) / distance_in_days) * campaigns[i].passed);
			var y = source.y - Math.floor(((source.y - destination.y) / distance_in_days) * campaigns[i].passed);
			out += '<div data-id="' + i + '" class="tips ' + (campaigns[i].type === civitas.CAMPAIGN_ARMY ? 'army' : 'caravan') + '" title="' + (campaigns[i].type === civitas.CAMPAIGN_ARMY ? 'Army' : 'Caravan') + '" style="left:' + x + 'px;top:' + y + 'px"></div>';
		}
		$(this.handle + ' .contents .worldmap').empty().append(out);
	}
};
