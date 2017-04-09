/**
 * Academy panel data.
 *
 * @type {Object}
 */
civitas.PANEL_ACADEMY = {
	template: civitas.ui.building_panel_template('academy', civitas.l('Academy')),
	id: 'academy',
	on_show: function(params) {
		this.params_data = params.data;
		$(this.handle + ' .contents').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Research')]));
		this.on_refresh();
	},
	on_refresh: function() {
		var core = this.get_core();
		var settlement = core.get_settlement();
		var building = core.get_settlement().get_building_by_handle(this.params_data.handle);
		$(this.handle + ' #tab-info').empty().append(civitas.ui.building_panel(this.params_data, building.get_level()));
		var _t = '<div class="section">' +
			civitas.ui.progress((settlement.get_research() * 100) / civitas.MAX_RESEARCH_VALUE, 'large', settlement.get_research()) +
		'</div>';
		$(this.handle + ' #tab-research').empty().append(_t);
	}
};
