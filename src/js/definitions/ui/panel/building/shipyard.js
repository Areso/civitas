/**
 * Shipyard panel data.
 *
 * @type {Object}
 */
civitas.PANEL_SHIPYARD = {
	template: '' +
		'<div id="panel-shipyard" class="panel">' +
			'<header>' +
				'<span class="title">' + civitas.l('Shipyard') + '</span>' +
				'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents"></div>' +
			'<footer class="footer clearfix">' +
				'<a class="tips demolish btn" title="' + civitas.l('Demolish this building') + '"></a>' +
				'<a class="tips pause start btn" title="' + civitas.l('Control (start/pause) production') + '"></a>' +
				'<a class="tips upgrade btn" title="' + civitas.l('Upgrade building') + '"></a>' +
			'</footer>' +
		'</div>',
	id: 'shipyard',
	on_show: function(params) {
		var self = this;
		this.params_data = params.data;
		var core = this.get_core();
		var settlement = core.get_settlement();
		var _c = core.get_settlement().get_building_by_handle(this.params_data.handle);
		$(this.handle + ' .contents').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Navy')]));
		this.on_refresh();
		$(this.handle).on('click', '.recruit-ship', function () {
			var ship = $(this).data('handle');
			core.error(civitas.l('Not implemented yet.'));
			return false;
		});
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
	},
	on_refresh: function() {
		var core = this.get_core();
		var settlement = core.get_settlement();
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
		_t = '<div class="navy-list">' +
				'</div>' +
				'<div class="navy-recruiter">';
		for (var item in civitas.SHIPS) {
			_t += '<fieldset>' +
					'<legend>' + item + '</legend>' +
					'<div class="cost">' +
					'<dl class="nomg">';
			for (var res in civitas.SHIPS[item].cost) {
				_t += '<dt>' + civitas.utils.nice_numbers(civitas.SHIPS[item].cost[res]) + '</dt><dd>' + civitas.ui.resource_small_img(res) + '</dd>';
			}
			_t += '</dl>' +
					'</div>' +
					'<div class="info">' +
					'<dl class="nomg">' +
					'<dt>' + civitas.l('Attack') + '</dt><dd>' + civitas.SHIPS[item].attack + '</dd>' +
					'<dt>' + civitas.l('Defense') + '</dt><dd>' + civitas.SHIPS[item].defense + '</dd>' +
					'</dl>' +
					'</div>' +
					'<img data-handle="' + item + '" title="' + civitas.l('Recruit') + ' ' + item + '" class="tips recruit-ship" src="' + civitas.ASSETS_URL + 'images/armies/' + item.toLowerCase().replace(/ /g,"_") + '.png" />' +
					'</fieldset>';
		}
		_t += '</div>';
		$(this.handle + ' #tab-navy').empty().append(_t);
		_t = '<fieldset>' +
				'<legend>' + civitas.l('Current Navy') + '</legend>' +
				civitas.ui.navy_list(settlement.get_navy_total(), true) +
				'</fieldset>';
		$(this.handle + ' .navy-list').empty().append(_t);
	}
};
