/**
 * Create a new spy panel data.
 *
 * @type {Object}
 */
civitas.PANEL_NEW_SPY = {
	template: '' +
		'<div id="panel-new-spy" class="panel">' +
			'<header>' +
				'<span class="title">' + civitas.l('Create spy') + '</span>' +
				'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents"></div>' +
			'<div class="toolbar">' +
				'<a class="btn dispatch" href="#">' + civitas.l('Dispatch') + '</a>' +
			'</div>' +
		'</div>',
	id: 'new-spy',
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
		var my_settlement = core.get_settlement();
		var settlement = params.data;
		var settlements = core.get_settlements();
		var espionage = my_settlement.get_espionage();
		var _t = '<fieldset>' +
			'<legend>' + civitas.l('Destination') + '</legend>' +
			'<select class="espionage-destination">' +
				'<option value="0">-- ' + civitas.l('select') + ' --</option>';
		for (var i = 1; i < settlements.length; i++) {
			_t += '<option ' + (settlement && (settlements[i].get_id() === settlement.get_id()) ? 'selected ' : '') + 'value="' + settlements[i].get_id() + '">' + (settlements[i].is_city() ? civitas.l('City of') + ' ' : civitas.l('Village of') + ' ') + settlements[i].get_name() + '</option>';
		}
		_t += '</select>' +
		'</fieldset>' +
		'<fieldset class="range-combo">' +
			'<legend>' + civitas.l('Espionage') + '</legend>' +
			'<input type="range" value="' + espionage + '" min="1" max="' + espionage + '" class="espionage-range" />' +
			'<input type="text" readonly value="' + espionage + '" class="espionage-value tips" title="' + civitas.l('Total espionage assigned to this spy.') + '" />' +
			'<input type="text" readonly value="' + Math.ceil(espionage / 100) + '%" class="espionage-chance tips" title="' + civitas.l('Chance of mission success.') + '" />' +
		'</fieldset>' +
		'<fieldset>' +
			'<legend>' + civitas.l('Mission') + '</legend>' +
			'<select class="espionage-mission">' +
				'<option value="0">-- ' + civitas.l('select') + ' --</option>';
		for (var i = 1; i < civitas.SPY_MISSIONS.length; i++) {
			_t += '<option value="' + i + '">' + civitas.SPY_MISSIONS[i].capitalize() + '</option>';
		}
		_t += '</select>' +
		'</fieldset>' +
		'<fieldset class="espionage-rel">' +
			'<legend>' + civitas.l('Religion') + (settlement ? ' (currently ' + settlement.get_religion().name.capitalize() + ')': '') + '</legend>' +
			'<select class="espionage-religion">';
		for (var i = 0; i < civitas.RELIGIONS.length; i++) {
			_t += '<option value="' + i + '">' + civitas.RELIGIONS[i].capitalize() + (i === my_settlement.get_religion().id ? ' (' + civitas.l('your religion') + ')' : '') + '</option>';
		}
		_t += '</select>' +
		'<p><strong>' + civitas.l('Note') + '!</strong> ' + civitas.l('Attempting to change a settlement`s religion uses up all your accumulated faith.') + '</p>' +
		'</fieldset>';
		$(this.handle + ' .contents').empty().append(_t);
		$(this.handle).on('change', '.espionage-range', function() {
			var value = parseInt($(this).val());
			$(self.handle + ' .espionage-value').val(value);
			$(self.handle + ' .espionage-chance').val(Math.ceil(value / 100) + '%');
		}).on('change', '.espionage-mission', function() {
			var value = parseInt($(this).val());
			if (value === civitas.SPY_MISSION_RELIGION) {
				$(self.handle + ' .espionage-rel').show();
			} else {
				$(self.handle + ' .espionage-rel').hide();
			}
		}).on('click', '.dispatch', function() {
			if (!my_settlement.can_diplomacy()) {
				core.error(civitas.l('You will need to construct an Embassy before being able to send spies to other settlements.'));
				return false;
			}
			var _espionage = parseInt($(self.handle + ' .espionage-value').val());
			var destination = parseInt($(self.handle + ' .espionage-destination').val());
			var mission = parseInt($(self.handle + ' .espionage-mission').val());
			if ((settlement && settlement.get_id() !== destination) || !settlement) {
				settlement = core.get_settlement(destination);
			}
			if (destination === 0 || _espionage > espionage || !settlement || mission <= 0) {
				core.error(civitas.l('There was an error creating and dispatching the spy, check the data you entered and try again.'));
				return false;
			}
			var data = {
				espionage: _espionage,
				mission: mission
			};
			if (mission === civitas.SPY_MISSION_RELIGION) {
				var _religion = parseInt($(self.handle + ' .espionage-religion').val());
				data.religion = _religion;
			}
			if (core.add_campaign(my_settlement, settlement, civitas.CAMPAIGN_SPY, data)) {
				core.save_and_refresh();
				self.destroy();
			} else {
				core.error(civitas.l('There was an error creating and dispatching the spy, check the data you entered and try again.'));
			}
			return false;
		});
	},
	on_refresh: function() {
		var core = this.get_core();
		var my_settlement = core.get_settlement();
		var espionage = my_settlement.get_espionage();
		$(this.handle + ' .espionage-range').attr('max', espionage);
	}
};
