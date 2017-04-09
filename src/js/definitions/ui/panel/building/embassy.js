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
		var _c = core.get_settlement().get_building_by_handle(this.params_data.handle);
		$(this.handle + ' .contents').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Diplomacy'), civitas.l('Espionage')]));
		this.on_refresh();
		$(this.handle).on('click', '.pact', function () {
			if (!settlement.can_diplomacy()) {
				core.error(civitas.l('You will need to construct an Embassy before being able to propose treaties and pacts to other settlements.'));
				return false;
			}
			var _settlement = parseInt($(this).data('id'));
			var influence = core.get_settlement().get_influence_with_settlement(_settlement);
			if (influence >= 50) {
				core.error('Not implemented yet.');
				/*
				if (core.get_settlement().propose_pact(_settlement) === true) {
					// TODO
				}
				*/
			} else {
				core.error(civitas.l('Your influence on') + ' ' + _settlement + ' ' + civitas.l('is too low to propose a pact.'));
			}
			return false;
		}).on('click', '.spy', function () {
			if (!settlement.can_diplomacy()) {
				core.error(civitas.l('You will need to construct an Embassy before being able to assign spies to other settlements.'));
				return false;
			}
			var _settlement = parseInt($(this).data('id'));
			core.error(civitas.l('Not implemented yet.'));
			/*
			if (core.get_settlement().assign_spy(_settlement) === true) {
				// TODO
			}
			*/	
			return false;
		}).on('click', '.declare-war', function () {
			if (!settlement.can_diplomacy()) {
				core.error(civitas.l('You will need to construct an Embassy before being able to declare war to other settlements.'));
				return false;
			}
			var name = parseInt($(this).data('id'));
			var _settlement = core.get_settlement(name);
			core.error(civitas.l('Not implemented yet.'));
			/*
			core.open_panel(new civitas.controls.panel_declare_war({
				core: core,
				data: _settlement
			}));
			*/
			return false;
		}).on('click', '.send-goods', function () {
			if (!settlement.can_diplomacy()) {
				core.error(civitas.l('You will need to construct an Embassy before being able to send goods to other settlements.'));
				return false;
			}
			var name = parseInt($(this).data('id'));
			var _settlement = core.get_settlement(name);
			core.error(civitas.l('Not implemented yet.'));
			/*
			core.open_panel(new civitas.controls.panel_send_goods({
				core: core,
				data: _settlement
			}));
			*/
			return false;
		}).on('click', '.view-settlement', function () {
			var name = parseInt($(this).data('id'));
			var _settlement = core.get_settlement(name);
			core.open_panel(civitas.PANEL_SETTLEMENT, _settlement);
			return false;
		})
	},
	on_refresh: function() {
		var core = this.get_core();
		var settlement = core.get_settlement();
		var settlements = core.get_settlements();
		var status = settlement.get_status();
		var building = core.get_settlement().get_building_by_handle(this.params_data.handle);
		var level = building.get_level();
		$(this.handle + ' #tab-info').empty().append(civitas.ui.building_panel(this.params_data, level));
		var _t = '<div class="section">' +
			civitas.ui.progress((settlement.get_espionage() * 100) / civitas.MAX_ESPIONAGE_VALUE, 'large', settlement.get_espionage()) +
		'</div>';
		$(this.handle + ' #tab-espionage').empty().append(_t);
		_t = '<div class="settlements-list">' +
				'<table class="normal">';
		for (var i = 1; i < settlements.length; i++) {
			_t += '<tr>' +
					'<td class="icon"><img src="' + civitas.ASSETS_URL + 'images/avatars/avatar' + settlements[i].get_ruler_avatar() + '.png" /></td>' +
					'<td>' +
					'<p>' +
						'<span class="title">' + (settlements[i].is_city() ? 'City of' : 'Village of') + ' ' + settlements[i].get_name() + '</span> ' +
						'<span class="description">' + civitas.l('Leader') + ': ' + settlements[i].get_ruler_name() + '</span>' +
					'</p>' +
				civitas.ui.progress(status[settlements[i].get_id()].influence, 'big') +
					'</td>' +
					'<td class="large">' +
					'<a data-id="' + settlements[i].get_id() + '" title="' + civitas.l('View info about this settlement.') + '" class="tips view-settlement" href="#">' + civitas.l('view') + '</a> ' +
					'<a data-id="' + settlements[i].get_id() + '" title="' + civitas.l('Send a spy to this settlement.') + '" data-id="' + i + '" class="tips spy" href="#">' + civitas.l('spy') + '</a> ' +
					'<a data-id="' + settlements[i].get_id() + '" title="' + civitas.l('Propose a pact to this settlement`s ruler.') + '" class="tips pact" href="#">' + civitas.l('pact') + '</a> ' +
					'<a data-id="' + settlements[i].get_id() + '" title="' + civitas.l('Send goods to this settlement.') + '" data-id="' + i + '" class="tips send-goods" href="#">' + civitas.l('send') + '</a> ' +
					'<a data-id="' + settlements[i].get_id() + '" title="' + civitas.l('Declare war to this settlement.') + '" data-id="' + i + '" class="tips declare-war" href="#">' + civitas.l('war') + '</a>' +
					'</td>' +
				'</tr>';
		}
		_t += '</table>' +
				'</div>';
		$(this.handle + ' #tab-diplomacy').empty().append(_t);
	}
};
