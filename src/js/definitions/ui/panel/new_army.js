/**
 * Create a new army panel data.
 *
 * @type {Object}
 */
civitas.PANEL_NEW_ARMY = {
	template: '' +
		'<div id="panel-new-army" class="panel">' +
			'<header>' +
				'<span class="title">' + civitas.l('Create army') + '</span>' +
				'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents"></div>' +
			'<div class="toolbar">' +
				'<a class="btn dispatch" href="#">' + civitas.l('Dispatch') + '</a>' +
			'</div>' +
		'</div>',
	id: 'new-army',
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
		var my_settlement = core.get_settlement();
		var settlement = params.data;
		var settlements = core.get_settlements();
		var settlement_type = settlement.get_settlement_type();
		var _t = '<fieldset>' +
			'<legend>' + civitas.l('Destination') + '</legend>' +
			'<select class="army-destination">' +
				'<option value="0">-- ' + civitas.l('select') + ' --</option>';
		for (var i = 1; i < settlements.length; i++) {
			_t += '<option ' + (settlement && (settlements[i].get_id() === settlement.get_id()) ? 'selected ' : '') + 'value="' + settlements[i].get_id() + '">' + (settlements[i].is_city() ? civitas.l('City of') + ' ' : civitas.l('Village of') + ' ') + settlements[i].get_name() + '</option>';
		}
		_t += '</select>' +
		'</fieldset>';
		$(this.handle + ' .contents').empty().append(_t);
		$(this.handle).on('click', '.dispatch', function() {
			// TODO
			if (!my_settlement.can_recruit_soldiers()) {
				core.error(civitas.l('You will need to construct a Military Camp before being able to attack other settlements.'));
				return false;
			}
			var destination = parseInt($(self.handle + ' .army-destination').val());
			if ((settlement && settlement.get_id() !== destination) || !settlement) {
				settlement = core.get_settlement(destination);
			}
			if (destination !== 0 && settlement) {
				var data = {
					army: {
						'Militia': 40,
						'Axeman': 30,
						'Knight': 10,
						'Bowman': 20,
						'Crossbowman': 10,
						'Pikeman': 30
					},
					navy: {
						'Corsair': 4,
						'Caravel': 2,
						'Galleon': 2,
						'Warship': 6,
						'Ship of the Line': 1
					}
				};
				my_settlement.diplomacy(settlement.get_id(), civitas.DIPLOMACY_WAR, civitas.SETTLEMENT_TYPES[settlement_type]);
				core.add_campaign(my_settlement, settlement, civitas.CAMPAIGN_ARMY, data);
				core.save_and_refresh();
				self.destroy();
			} else {
				core.error(civitas.l('There was an error creating and dispatching the army, check the data you entered and try again.'));
			}
			return false;
		});
	},
	on_refresh: function() {
		var core = this.get_core();
		var my_settlement = core.get_settlement();
	}
};
