/**
 * Tavern panel data.
 *
 * @type {Object}
 */
civitas.PANEL_TAVERN = {
	template: civitas.ui.building_panel_template(),
	id: 'tavern',
	on_show: function(params) {
		$(this.handle + ' section')
			.append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Heroes')]));
	},
	on_refresh: function() {
		var core = this.core();
		var building = core.get_settlement().get_building(this.params_data.handle);
		if (building) {
			$(this.handle + ' #tab-info').empty()
				.append(civitas.ui.building_panel(this.params_data, building.get_level()));
			$(this.handle + ' #tab-heroes').empty().append('<p>Not implemented yet.</p>');
		}
	}
};
