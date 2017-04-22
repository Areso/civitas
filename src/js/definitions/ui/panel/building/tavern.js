/**
 * Tavern panel data.
 *
 * @type {Object}
 */
civitas.PANEL_TAVERN = {
	template: civitas.ui.building_panel_template('tavern', civitas.l('Tavern')),
	id: 'tavern',
	on_show: function(params) {
		this.params_data = params.data;
		$(this.handle + ' .contents').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Heroes')]));
		this.on_refresh();
	},
	on_refresh: function() {
		var core = this.get_core();
		var building = core.get_settlement().get_building_by_handle(this.params_data.handle);
		$(this.handle + ' #tab-info').empty().append(civitas.ui.building_panel(this.params_data, building.get_level()));
		$(this.handle + ' #tab-heroes').empty().append('<p>Not implemented yet.</p>');
	}
};
