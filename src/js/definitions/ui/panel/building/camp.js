/**
 * Military Camp panel data.
 *
 * @type {Object}
 */
civitas.PANEL_CAMP = {
	template: '' +
		'<div id="panel-camp" class="panel">' +
			'<header>' +
				'<span class="title">' + civitas.l('Military Camp') + '</span>' +
				'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents"></div>' +
			'<footer class="footer clearfix">' +
				'<a class="tips demolish btn" title="' + civitas.l('Demolish this building') + '"></a>' +
			'</footer>' +
		'</div>',
	id: 'camp',
	on_show: function(params) {
		var self = this;
		this.params_data = params.data;
		var core = this.get_core();
		var _c = core.get_settlement().get_building_by_handle(this.params_data.handle);
		$(this.handle + ' .contents').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Army')]));
		this.on_refresh();
		$(this.handle).on('click', '.recruit-soldier', function () {
			var soldier = $(this).data('handle');
			if (core.get_settlement().recruit_soldier(soldier)) {
				self._refresh_army();
			}	
			return false;
		}).on('click', '.demolish', function () {
			if (confirm(civitas.l('Are you sure you want to demolish this building?')) === true) {
				if (_c.demolish()) {
					self.destroy();
					core.refresh();
				}
			}
			return false;
		});
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
		_t = '<div class="army-list">' +
				'</div>' +
				'<div class="army-recruiter">';
		for (var item in civitas.SOLDIERS) {
			_t += '<fieldset>' +
					'<legend>' + item + '</legend>' +
					'<div class="cost">' +
					'<dl class="nomg">';
			for (var res in civitas.SOLDIERS[item].cost) {
				_t += '<dt>' + civitas.utils.nice_numbers(civitas.SOLDIERS[item].cost[res]) + '</dt><dd>' + civitas.ui.resource_small_img(res) + '</dd>';
			}
			_t += '</dl>' +
					'</div>' +
					'<div class="info">' +
					'<dl class="nomg">' +
					'<dt>Attack</dt><dd>' + civitas.SOLDIERS[item].attack + '</dd>' +
					'<dt>Defense</dt><dd>' + civitas.SOLDIERS[item].defense + '</dd>' +
					'</dl>' +
					'</div>' +
					'<img data-handle="' + item + '" title="' + civitas.l('Recruit') + ' ' + item + '" class="tips recruit-soldier" src="' + civitas.ASSETS_URL + 'images/armies/' + item.toLowerCase() + '.png" />' +
					'</fieldset>';
		}
		_t += '</div>';
		$(this.handle + ' #tab-army').empty().append(_t);
		_t = '<fieldset>' +
				'<legend>' + civitas.l('Current Army') + '</legend>' +
				civitas.ui.army_list(settlement.get_army_total(), true) +
				'</fieldset>';
		$(this.handle + ' .army-list').empty().append(_t);
	}
};
