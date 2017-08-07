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
		var _t = '';
		var building = core.get_settlement().get_building(this.params_data.handle);
		if (building) {
			$(this.handle + ' #tab-heroes').empty().append('<div class="column hero-list"></div>' +
				'<div class="column hero-info"></div>');
			$(this.handle + ' #tab-info').empty()
				.append(civitas.ui.building_panel(this.params_data, building.get_level()));
			for (var item in civitas.HEROES) {
				_t += '<p>' + civitas.HEROES[item].name + '</p>';
			}
			$(this.handle + ' .hero-list').empty().append(_t);
		}
	}
};
