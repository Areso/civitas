/**
 * Embassy panel data.
 *
 * @type {Object}
 */
civitas.PANEL_EMBASSY = {
	template: '' +
		'<div id="panel-embassy" class="panel">' +
			'<header>' +
				'<span class="title">' + civitas.l('Embassy') + '</span>' +
				'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents"></div>' +
			'<footer class="footer clearfix">' +
				'<a class="tips demolish btn" title="' + civitas.l('Demolish this building') + '"></a>' +
				'<a class="tips pause start btn" title="' + civitas.l('Control (start/pause) production') + '"></a>' +
				'<a class="tips upgrade btn" title="' + civitas.l('Upgrade building') + '"></a>' +
			'</footer>' +
		'</div>',
	id: 'embassy',
	on_show: function(params) {
		var self = this;
		this.params_data = params.data;
		var core = this.get_core();
		var settlement = core.get_settlement();
		var _c = core.get_settlement().get_building_by_handle(this.params_data.handle);
		$(this.handle + ' .contents').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Diplomacy'), civitas.l('Espionage')]));
		this.on_refresh();
		if (!_c.is_upgradable()) {
			$(this.handle + ' .footer .upgrade').remove();
		} else {
			$(this.handle).on('click', '.upgrade', function () {
				if (confirm(civitas.l('Are you sure you want to upgrade this building?')) === true) {
					if (_c.upgrade()) {
						if (!_c.is_upgradable()) {
							$(self.handle + ' .footer .upgrade').remove();
						}
					}
				}
				return false;
			});
		}
		if (_c.is_marketplace()) {
			$(this.handle + ' .footer .demolish').remove();
		} else {
			$(this.handle).on('click', '.demolish', function () {
				if (confirm(civitas.l('Are you sure you want to demolish this building?')) === true) {
					if (_c.demolish()) {
						self.destroy();
						core.refresh();
					}
				}
				return false;
			});
		}
		if (_c.is_production_building()) {
			if (_c.is_producing()) {
				$(this.handle + ' .pause').removeClass('start');
			} else {
				$(this.handle + ' .start').removeClass('pause');
			}
			$(this.handle).on('click', '.pause', function () {
				_c.stop_production();
				$(this).removeClass('pause').addClass('start');
				return false;
			}).on('click', '.start', function () {
				$(this).removeClass('start').addClass('pause');
				_c.start_production();
				return false;
			});
		} else {
			$(this.handle + ' .start, ' + this.handle + ' .pause').remove();
		}
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
		var _c = core.get_settlement().get_building_by_handle(this.params_data.handle);
		var level = _c.get_level();
		var _t = '<p>' + this.params_data.description + '</p>' +
			'<dl>' +
				civitas.ui.cost_panel(this.params_data.cost) +
				civitas.ui.materials_panel(this.params_data.materials) +
				civitas.ui.production_panel(this.params_data.production, level) +
				civitas.ui.requires_panel(this.params_data.requires) +
				civitas.ui.chance_panel(this.params_data.chance, level) +
				civitas.ui.tax_panel(this.params_data.tax, level) +
				civitas.ui.storage_panel(this.params_data.storage, level) +
			'</dl>';
		$(this.handle + ' #tab-info').empty().append(_t);
		_t = '<div class="section">' +
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
