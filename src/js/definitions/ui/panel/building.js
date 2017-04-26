/**
 * Building panel data.
 *
 * @type {Object}
 */
civitas.PANEL_BUILDING = {
	template: '' +
		'<div id="panel-building" class="panel pb">' +
			'<header>' +
				'<span class="title"></span>' +
				'<a class="tips close btn" title="' + civitas.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents"></div>' +
			'<footer class="footer clearfix">' +
				'<a class="tips demolish btn" title="' + civitas.l('Demolish this building') + '"></a>' +
				'<a class="tips pause start btn" title="' + civitas.l('Control (start/pause) production') + '"></a>' +
				'<a class="tips upgrade btn" title="' + civitas.l('Upgrade building') + '"></a>' +
			'</footer>' +
		'</div>',
	id: 'building',
	on_template: function(params) {
		this.params_data = params.data;
		return params.template;
	},
	on_show: function(params) {
		var core = this.get_core();
		$(this.handle + ' header .title').html(this.params_data.name);
		this.on_refresh();
	},
	on_refresh: function() {
		var building = this.get_core().get_settlement().get_building(this.params_data.handle);
		$(this.handle + ' .contents').empty().append(civitas.ui.building_panel(this.params_data, building.get_level()));
	}
};
