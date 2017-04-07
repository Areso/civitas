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
		'</div>',
	id: 'embassy',
	on_show: function(params) {
		var self = this;
		this.params_data = params.data;
		var core = this.get_core();
		var el = this.handle;
		var _c = core.get_settlement().get_building_by_handle(this.params_data.handle);
		var level = _c.get_level();
		$(el + ' header .title').html(this.params_data.name);
		var _t = civitas.ui.tabs([civitas.l('Info'), civitas.l('Espionage')]);
		$(el + ' .contents').append(_t);
		this.on_refresh();
	},
	on_refresh: function() {
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
	}
};
