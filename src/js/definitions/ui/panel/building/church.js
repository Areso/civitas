/**
 * Church panel data.
 *
 * @type {Object}
 */
civitas.PANEL_CHURCH = {
	template: '' +
		'<div id="panel-church" class="panel">' +
			'<header>' +
				'<span class="title">' + civitas.l('Church') + '</span>' +
				'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents"></div>' +
			'<footer class="footer clearfix">' +
				'<a class="tips demolish btn" title="' + civitas.l('Demolish this building') + '"></a>' +
				'<a class="tips pause start btn" title="' + civitas.l('Control (start/pause) production') + '"></a>' +
				'<a class="tips upgrade btn" title="' + civitas.l('Upgrade building') + '"></a>' +
			'</footer>' +
		'</div>',
	id: 'church',
	on_show: function(params) {
		var self = this;
		this.params_data = params.data;
		var core = this.get_core();
		var el = this.handle;
		var settlement = this.get_core().get_settlement();
		var _c = core.get_settlement().get_building_by_handle(this.params_data.handle);
		var level = _c.get_level();
		$(el + ' header .title').html(this.params_data.name);
		$(el + ' .contents').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Religion')]));
		this.on_refresh();
		$(el).on('click', '.religion', function() {
			var id = parseInt($(this).data('id'));
			if (confirm(civitas.l('Are you sure you want to switch religions? You will lose all your accumulated faith!')) === true) {
				settlement.change_religion(id);
			}
			return false;
		});
		if (!_c.is_upgradable()) {
			$(el + ' .footer .upgrade').remove();
		} else {
			$(el).on('click', '.upgrade', function () {
				if (confirm(civitas.l('Are you sure you want to upgrade this building?')) === true) {
					if (_c.upgrade()) {
						if (!_c.is_upgradable()) {
							$(el + ' .footer .upgrade').remove();
						}
					}
				}
				return false;
			});
		}
		if (_c.is_marketplace()) {
			$(el + ' .footer .demolish').remove();
		} else {
			$(el).on('click', '.demolish', function () {
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
				$(el + ' .pause').removeClass('start');
			} else {
				$(el + ' .start').removeClass('pause');
			}
			$(el).on('click', '.pause', function () {
				_c.stop_production();
				$(this).removeClass('pause').addClass('start');
				return false;
			}).on('click', '.start', function () {
				$(this).removeClass('start').addClass('pause');
				_c.start_production();
				return false;
			});
		} else {
			$(el + ' .start, ' + el + ' .pause').remove();
		}
	},
	on_refresh: function() {
		var settlement = this.get_core().get_settlement();
		var _c = this.get_core().get_settlement().get_building_by_handle(this.params_data.handle);
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
		$('#panel-' + this.id + ' #tab-info').empty().append(_t);
		_t = '<div class="section">' +
			civitas.ui.progress((settlement.get_faith() * 100) / civitas.MAX_FAITH_VALUE, 'large', settlement.get_faith()) +
		'</div>' +
		'<p>Changing your settlement`s religion requires 1000 faith and resets your settlement`s faith. Each religion gives you access to different heroes in your Tavern and gives you a boost to the influence with the cities sharing the same religion.</p>' +
		'<div class="religion-list">';
		for (var i = 0; i < civitas.RELIGIONS.length; i++) {
			_t += '<div data-handle="' + civitas.RELIGIONS[i] + '" data-id="' + i + '" class="religion' + (settlement.get_religion().id === i ? ' selected' : '') + '">' +
				'<span>' + civitas.RELIGIONS[i].capitalize() + '</span>' +
			'</div>';
		}
		_t += '</div>';
		$('#panel-' + this.id + ' #tab-religion').empty().append(_t);
	}
};
