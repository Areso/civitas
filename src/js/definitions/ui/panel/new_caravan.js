/**
 * Create a new caravan panel data.
 *
 * @type {Object}
 */
civitas.PANEL_NEW_CARAVAN = {
	template: '' +
		'<div id="panel-new-caravan" class="panel">' +
			'<header>' +
				'<span class="title">' + civitas.l('Create caravan') + '</span>' +
				'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents"></div>' +
			'<div class="toolbar">' +
				'<a class="btn dispatch" href="#">' + civitas.l('Dispatch') + '</a>' +
			'</div>' +
		'</div>',
	id: 'new-caravan',
	on_show: function(params) {
		this.resources = {};
		var self = this;
		var core = this.get_core();
		var my_settlement = core.get_settlement();
		var settlement = params.data;
		var settlements = core.get_settlements();
		var location = civitas['SETTLEMENT_LOCATION_' + my_settlement.get_climate().name.toUpperCase()];
		var distance = civitas.utils.get_distance_in_days(location, civitas.SETTLEMENTS[settlement.get_id()].location);
		var _t = '<fieldset>' +
			'<legend>' + civitas.l('Initial costs') + '</legend>' +
			'<dl>';
		for (var item in civitas.CARAVAN_COSTS) {
			var _cost = 0;
			if (item === 'coins') {
				_cost = civitas.CARAVAN_COSTS[item] * distance;
			} else if (item === 'provisions') {
				_cost = Math.ceil((civitas.CARAVAN_COSTS[item] * distance) / 2);
			} else {
				_cost = civitas.CARAVAN_COSTS[item];
			}
			_t += '<dt>' + civitas.utils.nice_numbers(_cost) + '</dt>' +
				'<dd>' + civitas.ui.resource_small_img(item) + '</dd>';
		}
		_t += '</dl>' +
		'</fieldset>' +
		'<fieldset>' +
			'<legend>' + civitas.l('Destination') + '</legend>' +
			'<select class="caravan-destination">' +
				'<option value="0">-- ' + civitas.l('select') + ' --</option>';
		for (var i = 1; i < settlements.length; i++) {
			_t += '<option ' + (settlement && (settlements[i].get_id() === settlement.get_id()) ? 'selected ' : '') + 'value="' + settlements[i].get_id() + '">' + (settlements[i].is_city() ? civitas.l('City of') + ' ' : civitas.l('Village of') + ' ') + settlements[i].get_name() + '</option>';
		}
		_t += '</select>' +
		'</fieldset>' +
		'<fieldset class="select-combo">' +
			'<legend>' + civitas.l('Resources') + '</legend>' +
			'<select class="caravan-resources-select">' +
				'<option value="0">-- ' + civitas.l('select') + ' --</option>' +
				'<option value="coins"> ' + civitas.l('Coins') + '</option>';
		var resources = my_settlement.get_resources();
		for (var item in resources) {
			if ($.inArray(item, civitas.NON_RESOURCES) === -1) {
				_t += '<option value="' + item + '"> ' + civitas.utils.get_resource_name(item) + '</option>';
			}
		}
		_t += '</select>' +
			'<input title="' + civitas.l('Add the resources to the list.') + '" type="button" class="tips caravan-resources-add" value="+" />' +
			'<input title="' + civitas.l('Amount of selected resource to add to the caravan.') + '" type="number" value="1" class="tips caravan-resources-amount" min="1" max="999" />' +
			'<div class="caravan-resources clearfix"></div>' +
		'</fieldset>';
		$(this.handle + ' .contents').empty().append(_t);
		this.generate_table_data = function() {
			var _t = '<table class="caravan-resources clearfix">' +
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
						'<a title="' + civitas.l('Remove this resource from the caravan.') + '" href="#" data-id="' + item + '" class="tips caravan-resources-delete">-</a>' +
					'</td>' +
				'</tr>';
			}
			_t += '</tbody>' +
			'</table>';
			$(this.handle + ' .caravan-resources').empty().append(_t);
		};
		$(this.handle).on('click', '.caravan-resources-add', function() {
			var amount = parseInt($(self.handle + ' .caravan-resources-amount').val());
			var resource = $(self.handle + ' .caravan-resources-select').val();
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
		}).on('click', '.caravan-resources-delete', function() {
			var resource = $(this).data('id');
			delete self.resources[resource];
			self.generate_table_data();
			return false;
		}).on('click', '.dispatch', function() {
			if (!my_settlement.can_trade()) {
				core.error(civitas.l('You will need to construct a Trading Post before being able to trade resources with other settlements.'));
				return false;
			}
			var destination = parseInt($(self.handle + ' .caravan-destination').val());
			if ((settlement && settlement.get_id() !== destination) || !settlement) {
				settlement = core.get_settlement(destination);
			}
			if (destination === 0 || !settlement || $.isEmptyObject(self.resources)) {
				core.error(civitas.l('There was an error creating and dispatching the caravan, check the data you entered and try again.'));
				return false;
			}
			if (core.add_campaign(my_settlement, settlement, civitas.CAMPAIGN_CARAVAN, {
				resources: self.resources
			})) {
				self.destroy();
			} else {
				core.error(civitas.l('There was an error creating and dispatching the caravan, check the data you entered and try again.'));
			}
			return false;
		});
	}
};
