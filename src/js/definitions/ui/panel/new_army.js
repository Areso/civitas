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
			'<div class="toolbar clearfix">' +
				'<a class="btn dispatch iblock" href="#">' + civitas.l('Dispatch') + '</a>' +
			'</div>' +
		'</div>',
	id: 'new-army',
	on_show: function(params) {
		this.resources = {};
		var self = this;
		var core = this.get_core();
		var my_settlement = core.get_settlement();
		var settlement = params.data;
		var settlements = core.get_settlements();
		var army = my_settlement.get_army_total();
		var location = civitas['SETTLEMENT_LOCATION_' + my_settlement.get_climate().name.toUpperCase()];
		var distance = civitas.utils.get_distance_in_days(location, civitas.SETTLEMENTS[settlement.get_id()].location);
		this.assigned_army = {};
		this.assigned_navy = {};
		for (var item in army.army) {
			this.assigned_army[item] = army.army[item];
		}
		var navy = my_settlement.get_navy_total();
		for (var item in navy.navy) {
			this.assigned_navy[item] = navy.navy[item];
		}
		var _t = '<div class="column">' +
			'<fieldset>' +
				'<legend>' + civitas.l('Initial costs') + '</legend>' +
				'<dl>';
		for (var item in civitas.ARMY_COSTS) {
			var _cost = 0;
			if (item === 'coins') {
				_cost = civitas.ARMY_COSTS[item] * distance;
			} else if (item === 'provisions') {
				_cost = Math.ceil((civitas.ARMY_COSTS[item] * distance) / 2);
			} else {
				_cost = civitas.ARMY_COSTS[item];
			}
			_t += '<dt>' + civitas.utils.nice_numbers(_cost) + '</dt>' +
				'<dd>' + civitas.ui.resource_small_img(item) + '</dd>';
		}
		_t += '</dl>' +
			'</fieldset>' +
			'<fieldset>' +
				'<legend>' + civitas.l('Soldiers') + '</legend>';
		for (var item in army.army) {
			_t += '<div class="army-item">' +
					'<a href="#" data-max="' + army.army[item] + '" data-soldier="' + item + '" class="army-item-inc">+</a>' +
					'<a href="#" data-max="' + army.army[item] + '" data-soldier="' + item + '" class="army-item-dec">-</a>' +
					'<img class="tips" title="' + item + '" src="' + civitas.ASSETS_URL + 'images/armies/' + item.toLowerCase().replace(/ /g,"_") + '.png" />' +
					'<span class="amount">' + army.army[item] + '</span>' +
				'</div>';
		}
		_t += '</fieldset>' +
		'<fieldset>' +
			'<legend>' + civitas.l('Destination') + '</legend>' +
			'<select class="army-destination">' +
				'<option value="0">-- ' + civitas.l('select') + ' --</option>';
		for (var i = 1; i < settlements.length; i++) {
			_t += '<option ' + (settlement && (settlements[i].get_id() === settlement.get_id()) ? 'selected ' : '') + 'value="' + settlements[i].get_id() + '">' + (settlements[i].is_city() ? civitas.l('City of') + ' ' : civitas.l('Village of') + ' ') + settlements[i].get_name() + '</option>';
		}
		_t += '</select>' +
			'</fieldset>' +
		'</div>' +
		'<div class="column">';
		if (my_settlement.can_build_ships()) {
			_t += '<fieldset>' +
					'<legend>' + civitas.l('Ships') + '</legend>';
			for (var item in navy.navy) {
				_t += '<div class="navy-item">' +
						'<a href="#" data-max="' + navy.navy[item] + '" data-ship="' + item + '" class="navy-item-inc">+</a>' +
						'<a href="#" data-max="' + navy.navy[item] + '" data-ship="' + item + '" class="navy-item-dec">-</a>' +
						'<img class="tips" title="' + item + '" src="' + civitas.ASSETS_URL + 'images/armies/' + item.toLowerCase().replace(/ /g,"_") + '.png" />' +
						'<span class="amount">' + navy.navy[item] + '</span>' +
					'</div>';
			}
			_t += '</fieldset>';
		}
		_t += '<fieldset class="select-combo">' +
			'<legend>' + civitas.l('War Machines') + '</legend>' +
			'<select class="army-resources-select">' +
				'<option value="0">-- ' + civitas.l('select') + ' --</option>';
		var resources = my_settlement.get_resources();
		for (var item in resources) {
			if ($.inArray(item, civitas.ARMY_RESOURCES) !== -1) {
				_t += '<option value="' + item + '"> ' + civitas.utils.get_resource_name(item) + '</option>';
			}
		}
		_t += '</select>' +
			'<input title="' + civitas.l('Add the resources to the list.') + '" type="button" class="tips army-resources-add" value="+" />' +
			'<input title="' + civitas.l('Amount of selected resource to add to the army.') + '" type="number" value="1" class="tips army-resources-amount" min="1" max="999" />' +
			'<div class="army-resources clearfix"></div>' +
		'</fieldset>';
		if (my_settlement.can_recruit_heroes()) {
			var heroes = my_settlement.get_heroes();
			_t += '<fieldset>' +
				'<legend>' + civitas.l('Hero') + '</legend>' +
				'<select class="army-hero">';
			if ($.isEmptyObject(heroes)) {
				_t += '<option value="0">-- ' + civitas.l('no heroes available') + ' --</option>';
			} else {
				_t += '<option value="0">-- ' + civitas.l('select') + ' --</option>';
				for (var item in heroes) {
					_t += '<option value="' + item + '">' + heroes[item] + '</option>';
				}
			}
			_t += '</select>' +
			'</fieldset>';
		} else {
			_t += '<p><strong>' + civitas.l('Note') + '!</strong> ' + civitas.l('Build a Tavern to be able to recruit powerful heroes and assign them to your armies.') + '</p>';		
		}
		_t += '</div>';
		$(this.handle + ' .contents').empty().append(_t);
		this.generate_table_data = function() {
			var _t = '<table class="army-resources clearfix">' +
				'<thead>' +
				'<tr>' +
				'<td>' + civitas.l('Amount') + '</td>' +
				'<td>' + civitas.l('Resource') + '</td>' +
				'<td></td>' +
				'</tr>' +
				'</thead>' +
				'<tbody>';
			for (var item in this.resources) {
				_t += '<tr>' +
					'<td>' + this.resources[item] + '</td>' +
					'<td>' + civitas.ui.resource_small_img(item) + '</td>' +
					'<td>' +
						'<a title="' + civitas.l('Remove this resource from the army.') + '" href="#" data-id="' + item + '" class="tips army-resources-delete">-</a>' +
					'</td>' +
				'</tr>';
			}
			_t += '</tbody>' +
			'</table>';
			$(this.handle + ' .army-resources').empty().append(_t);
		};
		$(this.handle).on('click', '.army-resources-add', function() {
			var amount = parseInt($(self.handle + ' .army-resources-amount').val());
			var resource = $(self.handle + ' .army-resources-select').val();
			if (resource !== '0') {
				if (typeof self.resources[resource] !== 'undefined' && !my_settlement.has_resources(resource, self.resources[resource] + amount)) {
					return false;
				} else if (typeof self.resources[resource] === 'undefined' && !my_settlement.has_resources(resource, amount)) {
					return false;
				}
				if (typeof self.resources[resource] !== 'undefined') {
					self.resources[resource] = self.resources[resource] + amount;
				} else {
					self.resources[resource] = amount;
				}
				self.generate_table_data();
			}
			return false;
		}).on('click', '.army-resources-delete', function() {
			var resource = $(this).data('id');
			delete self.resources[resource];
			self.generate_table_data();
			return false;
		}).on('click', '.navy-item-inc', function() {
			var max = parseInt($(this).data('max'));
			var ship = $(this).data('ship');
			var current = parseInt($(this).parent().children('.amount').html());
			if (current + 1 <= max) {
				self.assigned_navy[ship] = current + 1;
				$(this).parent().children('.amount').html(current + 1);
			}
			return false;
		}).on('click', '.navy-item-dec', function() {
			var max = parseInt($(this).data('max'));
			var ship = $(this).data('ship');
			var current = parseInt($(this).parent().children('.amount').html());
			if (current - 1 >= 0) {
				self.assigned_navy[ship] = current - 1;
				$(this).parent().children('.amount').html(current - 1);
			}
			return false;
		}).on('click', '.army-item-inc', function() {
			var max = parseInt($(this).data('max'));
			var soldier = $(this).data('soldier');
			var current = parseInt($(this).parent().children('.amount').html());
			if (current + 1 <= max) {
				self.assigned_army[soldier] = current + 1;
				$(this).parent().children('.amount').html(current + 1);
			}
			return false;
		}).on('click', '.army-item-dec', function() {
			var max = parseInt($(this).data('max'));
			var soldier = $(this).data('soldier');
			var current = parseInt($(this).parent().children('.amount').html());
			if (current - 1 >= 0) {
				self.assigned_army[soldier] = current - 1;
				$(this).parent().children('.amount').html(current - 1);
			}
			return false;
		}).on('click', '.dispatch', function() {
			if (!my_settlement.can_recruit_soldiers()) {
				core.error(civitas.l('You will need to construct a Military Camp before being able to attack other settlements.'));
				return false;
			}
			var destination = parseInt($(self.handle + ' .army-destination').val());
			if ((settlement && settlement.get_id() !== destination) || !settlement) {
				settlement = core.get_settlement(destination);
			}
			if (destination === 0 || !settlement || (my_settlement.get_army_total(self.assigned_army).total === 0 && my_settlement.get_navy_total(self.assigned_navy).total === 0)) {
				core.error(civitas.l('There was an error creating and dispatching the army, check the data you entered and try again.'));
				return false;
			}
			if (core.add_campaign(my_settlement, settlement, civitas.CAMPAIGN_ARMY, {
				army: self.assigned_army,
				navy: self.assigned_navy,
				resources: self.resources
			})) {
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
