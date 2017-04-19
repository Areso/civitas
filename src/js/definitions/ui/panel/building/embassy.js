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
		var _t = '<div class="settlements-list">' +
				'<table class="normal">';
		for (var i = 1; i < settlements.length; i++) {
			_t += '<tr>' +
					'<td class="icon"><img src="' + civitas.ASSETS_URL + 'images/avatars/avatar' + settlements[i].get_ruler_avatar() + '.png" /></td>' +
					'<td>' +
						'<p class="title">' + (settlements[i].is_city() ? 'City of' : 'Village of') + ' ' + settlements[i].get_name() + '</p> ' +
						'<p class="description">' + civitas.l('Leader') + ': ' + settlements[i].get_ruler_name() + '</p>' +
						civitas.ui.progress(status[settlements[i].get_id()].influence, 'big') +
					'</td>' +
					'<td class="center">' +
						'<a data-id="' + settlements[i].get_id() + '" title="' + civitas.l('View info about this settlement.') + '" class="tips view" href="#">' + civitas.l('View') + '</a> ' +
						'<a data-id="' + settlements[i].get_id() + '" title="' + civitas.l('Attack this settlement.') + '" class="tips army" href="#">' + civitas.l('Attack') + '</a> ' +
						'<a data-id="' + settlements[i].get_id() + '" title="' + civitas.l('Send a caravan to this settlement.') + '" class="tips caravan" href="#">' + civitas.l('Caravan') + '</a> ' +
						'<a data-id="' + settlements[i].get_id() + '" title="' + civitas.l('Send a spy to this settlement.') + '" class="tips spy" href="#">' + civitas.l('Spy') + '</a> ' +
					'</td>' +
				'</tr>';
		}
		_t += '</table>' +
				'</div>';
		$(this.handle + ' #tab-diplomacy').empty().append(_t);
		this.on_refresh();
		$(this.handle).on('click', '.view', function () {
			var _settlement_id = parseInt($(this).data('id'));
			var _settlement = core.get_settlement(_settlement_id);
			core.open_panel(civitas.PANEL_SETTLEMENT, _settlement);
			return false;
		}).on('click', '.army', function () {
			var _settlement_id = parseInt($(this).data('id'));
			var _settlement = core.get_settlement(_settlement_id);
			core.open_panel(civitas.PANEL_NEW_ARMY, _settlement);
			return false;
		}).on('click', '.caravan', function () {
			var _settlement_id = parseInt($(this).data('id'));
			var _settlement = core.get_settlement(_settlement_id);
			core.open_panel(civitas.PANEL_NEW_CARAVAN, _settlement);
			return false;
		}).on('click', '.spy', function () {
			var _settlement_id = parseInt($(this).data('id'));
			var _settlement = core.get_settlement(_settlement_id);
			core.open_panel(civitas.PANEL_NEW_SPY, _settlement);
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
		for (var i = 1; i < settlements.length; i++) {
			$(this.handle + ' td[data-id="' + i + '"]').empty().append(civitas.ui.progress(status[settlements[i].get_id()].influence, 'big'));
		}
	}
};
