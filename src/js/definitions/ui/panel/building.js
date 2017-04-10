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
				'<a class="tips help btn" data-context="{context}" data-term="{building}" title="' + civitas.l('Info about this building') + '"></a>' +
			'</footer>' +
		'</div>',
	term: null,
	context: null,
	id: 'building',
	on_template: function(params) {
		this.params_data = params.data;
		return params.template.replace(/{building}/g, this.params_data.handle)
			.replace(/{context}/g, 'building');
	},
	on_show: function(params) {
		var core = this.get_core();
		$(this.handle + ' header .title').html(this.params_data.name);
		this.on_refresh();
		$(this.handle).on('click', '.help', function () {
			var term = $(this).data('term');
			var context = $(this).data('context');
			core.help(context, term);
			return false;
		});
	},
	on_refresh: function() {
		var building = this.get_core().get_settlement().get_building_by_handle(this.params_data.handle);
		$(this.handle + ' .contents').empty().append(civitas.ui.building_panel(this.params_data, building.get_level()));
	}
};
