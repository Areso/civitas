/**
 * Embassy panel data.
 *
 * @type {Object}
 */
civitas.PANEL_EMBASSY = {
	template: civitas.ui.building_panel_template('embassy', civitas.l('Embassy')),
	id: 'embassy',
	on_show: function(params) {
		var self = this;
		this.params_data = params.data;
		var core = this.get_core();
		var settlement = core.get_settlement();
		var settlements = core.get_settlements();
		var status = settlement.get_status();
		var building = core.get_settlement().get_building_by_handle(this.params_data.handle);
		var level = building.get_level();
		$(this.handle + ' .contents').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Diplomacy'), civitas.l('Espionage')]));
		$(this.handle + ' #tab-diplomacy').empty().append('<div class="settlements-list"></div>');
		this.on_refresh();
		$(this.handle).on('click', '.view', function () {
			var _settlement_id = parseInt($(this).data('id'));
			var _settlement = core.get_settlement(_settlement_id);
			if (_settlement) {
				core.open_panel(civitas.PANEL_SETTLEMENT, _settlement);
			}
			return false;
		});
	},
	on_refresh: function() {
		var core = this.get_core();
		var settlement = core.get_settlement();
		var settlements = core.get_settlements();
		var status = settlement.get_status();
		var building = core.get_settlement().get_building_by_handle(this.params_data.handle);
		var level = building.get_level();
		$(this.handle + ' #tab-info').empty().append(civitas.ui.building_panel(this.params_data, level));
		$(this.handle + ' #tab-espionage').empty().append('<div class="section">' +
			civitas.ui.progress((settlement.get_espionage() * 100) / civitas.MAX_ESPIONAGE_VALUE, 'large', settlement.get_espionage()) +
		'</div>');
		var _t = '<table class="normal">';
		for (var i = 1; i < settlements.length; i++) {
			var _status = settlement.get_diplomacy_status(settlements[i].get_id());
			var settlement_type = settlements[i].get_settlement_type();
			_t += '<tr>' +
					'<td class="icon">' +
						'<a data-id="' + settlements[i].get_id() + '" title="' + civitas.l('View info about this settlement.') + '" class="tips view" href="#">' +
							'<img src="' + civitas.ASSETS_URL + 'images/avatars/avatar' + settlements[i].get_ruler_avatar() + '.png" />' +
						'</a>' +
					'</td>' +
					'<td>' +
						'<p class="title">' + (settlements[i].is_city() ? 'City of' : 'Village of') + ' ' + settlements[i].get_name() + '</p> ' +
						'<div data-id="' + settlements[i].get_id() + '" >' + civitas.ui.progress(status[settlements[i].get_id()].influence, 'big') + '</div>' +
					'</td>' +
					'<td>' +
						'<p>' + civitas.l('Leader') + ': <strong>' + settlements[i].get_ruler_name() + '</strong>' + '</p>' +
						'<p>' + civitas.l('Personality') + ': <strong>' + settlements[i].get_personality().name.capitalize() + '</strong>' + '</p>' +
						'<p>' + civitas.l('Diplomatic Status') + ': <strong>' + settlement.get_diplomacy_status(settlements[i].get_id()).name.capitalize() + '</strong>' + '</p>' +
					'</td>' +
				'</tr>';
		}
		_t += '</table>';
		$(this.handle + ' .settlements-list').empty().append(_t);
	}
};
