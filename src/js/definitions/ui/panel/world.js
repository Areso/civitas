/**
 * World panel data.
 *
 * @type {Object}
 */
civitas.PANEL_WORLD = {
	template: civitas.ui.generic_panel_template(civitas.l('World Map')),
	id: 'world',
	on_show: function(params) {
		var self = this;
		var core = this.core();
		var map = core.get_worldmap();
		$(this.handle + ' section').append('<div class="worldmap"></div>');
		$(this.handle + ' .worldmap').addClass('w' + map);
		$(this.handle).on('click', '.settlement', function () {
			var _settlement_name = $(this).data('name');
			if (_settlement_name === 'yoursettlement') {
				core.open_panel(civitas.PANEL_COUNCIL);
			} else {
				core.open_panel(civitas.PANEL_SETTLEMENT, core.get_settlement(_settlement_name));
			}
			return false;
		}).on('click', '.caravan, .army, .spy', function () {
			var _action_id = parseInt($(this).data('id'));
			if (core.queue[_action_id].mode === civitas.ACTION_CAMPAIGN) {
				core.open_panel(civitas.PANEL_CAMPAIGN, core.queue[_action_id]);
			}
			return false;
		});
	},
	on_refresh: function() {
		var self = this;
		var core = this.core();
		var settlement = core.get_settlement();
		var settlements = core.get_settlements();
		var queue_actions = core.queue();
		var class_name = '';
		var loc = civitas['SETTLEMENT_LOCATION_' + settlement.climate().name.toUpperCase()];
		var out = '<div data-name="yoursettlement" class="tips settlement c1" title="' + civitas.l('City of') + ' ' + settlement.name() + '" style="left:' + loc.x + 'px;top:' + loc.y + 'px"></div>';
		for (var i = 1; i < settlements.length; i++) {
			if (settlements[i].get_type() === civitas.CITY) {
				out += '<div data-name="' + settlements[i].name() + '" class="tips settlement c' + civitas.SETTLEMENTS[settlements[i].id()].icon + '" title="' + civitas.l('City of') + ' ' + settlements[i].name() + '" style="left:' + civitas.SETTLEMENTS[settlements[i].id()].location.x + 'px;top:' + civitas.SETTLEMENTS[settlements[i].id()].location.y + 'px"></div>';
			} else {
				out += '<div data-name="' + settlements[i].name() + '" class="tips settlement v1" title="' + civitas.l('Village of') + ' ' + settlements[i].name() + '" style="left:' + civitas.SETTLEMENTS[settlements[i].id()].location.x + 'px;top:' + civitas.SETTLEMENTS[settlements[i].id()].location.y + 'px"></div>';
			}
		}
		for (var i = 0; i < queue_actions.length; i++) {
			var action = queue_actions[i];
			if (action.type === civitas.CAMPAIGN_ARMY) {
				class_name = 'army';
			} else if (action.type === civitas.CAMPAIGN_CARAVAN) {
				class_name = 'caravan';
			} else if (action.type === civitas.CAMPAIGN_SPY) {
				class_name = 'spy';
			}
			var source = action.source;
			var destination = action.destination;
			var distance_in_days = civitas.utils.get_distance_in_days(source, destination);
			if (action.mode === civitas.ACTION_DIPLOMACY) {
				distance_in_days = distance_in_days / 2;
			}
			var _source = core.get_settlement(source.id);
			var _destination = core.get_settlement(destination.id)
			var x = source.x + Math.floor(((destination.x - source.x) / distance_in_days) * action.passed);
			var y = source.y - Math.floor(((source.y - destination.y) / distance_in_days) * action.passed);
			if (action.mode === civitas.ACTION_CAMPAIGN) {
				out += '<div data-id="' + i + '" class="tips ' + class_name + '" title="' + class_name.capitalize() + ' from ' + _source.name() + ' to ' + _destination.name() + '" style="left:' + x + 'px;top:' + y + 'px"></div>';
			} else if (action.mode === civitas.ACTION_DIPLOMACY) {
				out += '<div data-id="' + i + '" class="tips messenger" title="Diplomatic mission from ' + _source.name() + ' to ' + _destination.name() + '" style="left:' + x + 'px;top:' + y + 'px"></div>';
			}
		}
		$(this.handle + ' section .worldmap').empty().append(out);
	}
};
