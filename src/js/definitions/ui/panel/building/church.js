/**
 * Church panel data.
 *
 * @type {Object}
 */
civitas.PANEL_CHURCH = {
	template: civitas.ui.building_panel_template('church', civitas.l('Church')),
	id: 'church',
	on_show: function(params) {
		var self = this;
		this.params_data = params.data;
		var settlement = this.get_core().get_settlement();
		$(this.handle + ' .contents').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Religion')]));
		this.on_refresh();
		$(this.handle).on('click', '.religion', function() {
			var id = parseInt($(this).data('id'));
			if (confirm(civitas.l('Are you sure you want to switch religions? You will lose all your city`s faith!')) === true) {
				settlement.change_religion(id);
			}
			return false;
		});
	},
	on_refresh: function() {
		var core = this.get_core();
		var settlement = core.get_settlement();
		var building = core.get_settlement().get_building_by_handle(this.params_data.handle);
		$(this.handle + ' #tab-info').empty().append(civitas.ui.building_panel(this.params_data, building.get_level()));
		var _t = '<div class="section">' +
			civitas.ui.progress((settlement.get_faith() * 100) / civitas.MAX_FAITH_VALUE, 'large', settlement.get_faith()) +
		'</div>' +
		'<p>Changing your settlement`s religion requires <strong>' + civitas.MAX_FAITH_VALUE + '</strong> faith, each religion gives you access to different heroes in your Tavern and gives you a boost to the influence with the cities sharing the same religion.</p>' +
		'<div class="religion-list">';
		for (var i = 0; i < civitas.RELIGIONS.length; i++) {
			_t += '<div data-handle="' + civitas.RELIGIONS[i] + '" data-id="' + i + '" class="religion' + (settlement.get_religion().id === i ? ' selected' : '') + '">' +
				'<span>' + civitas.RELIGIONS[i].capitalize() + '</span>' +
			'</div>';
		}
		_t += '</div>';
		$(this.handle + ' #tab-religion').empty().append(_t);
	}
};
