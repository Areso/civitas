/**
 * Settlement panel data.
 *
 * @type {Object}
 */
civitas.PANEL_SETTLEMENT = {
	template: '' +
		'<div id="panel-settlement" class="panel">' +
			'<header>' +
				'<span class="title"></span>' +
				'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents"></div>' +
			'<div class="toolbar clearfix">' +
				'<a class="tips attack btn iblock" title="' + civitas.l('Attack this settlement.') + '" href="#">' + civitas.l('Attack') + '</a>' +
				'<a class="tips caravan btn iblock" title="' + civitas.l('Send a caravan to this settlement.') + '" href="#">' + civitas.l('Caravan') + '</a>' +
				'<a class="tips spy btn iblock" title="' + civitas.l('Send a spy to this settlement.') + '" href="#">' + civitas.l('Spy') + '</a>' +
				'<a class="tips alliance btn iblock" title="' + civitas.l('Propose an alliance to this settlement.') + '" href="#">' + civitas.l('Alliance') + '</a>' +
				'<a class="tips pact btn iblock" title="' + civitas.l('Propose a pact to this settlement.') + '" href="#">' + civitas.l('Pact') + '</a>' +
				'<a class="tips ceasefire btn iblock" title="' + civitas.l('Propose a cease fire to this settlement.') + '" href="#">' + civitas.l('Cease fire') + '</a>' +
				'<a class="tips join btn iblock" title="' + civitas.l('Ask this settlement to join your city.') + '" href="#">' + civitas.l('Join') + '</a>' +
				'<a class="tips war btn iblock" title="' + civitas.l('Declare war to this settlement.') + '" href="#">' + civitas.l('War') + '</a>' +
			'</div>' +
		'</div>',
	params_data: null,
	id: 'settlement',
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
		var my_settlement = core.get_settlement();
		var settlement = params.data;
		var settlement_type = settlement.get_settlement_type();
		this.params_data = params;
		var trades = settlement.get_trades();
		var location = civitas['SETTLEMENT_LOCATION_' + my_settlement.get_climate().name.toUpperCase()];
		$(this.handle + ' header .title').html((settlement.is_city() ? civitas.l('City of') + ' ' : civitas.l('Village of') + ' ') + settlement.get_name());
		if (settlement.is_city()) {
			$(this.handle + ' .contents').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Army'), civitas.l('Navy'), civitas.l('Resources'), civitas.l('Imports'), civitas.l('Exports')]));
		} else {
			$(this.handle + ' .contents').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Army'), civitas.l('Navy'), civitas.l('Resources')]));
		}
		this.on_refresh();
		$(this.handle).on('click', '.alliance', function () {
			if (!my_settlement.can_diplomacy()) {
				core.error(civitas.l('You will need to construct an Embassy before being able to propose an alliance to other settlements.'));
				return false;
			}
			if (confirm('Are you sure you want to propose an alliance to this settlement?')) {
				if (!core.add_to_queue(my_settlement, settlement, civitas.ACTION_DIPLOMACY, civitas.DIPLOMACY_PROPOSE_ALLIANCE, {})) {
					core.error(civitas.l('There was an error proposing an alliance to this settlement, check the data you entered and try again.'));
				}
			}
			return false;
		}).on('click', '.pact', function () {
			if (!my_settlement.can_diplomacy()) {
				core.error(civitas.l('You will need to construct an Embassy before being able to propose a pact to other settlements.'));
				return false;
			}
			if (confirm('Are you sure you want to propose a pact to this settlement?')) {
				if (!core.add_to_queue(my_settlement, settlement, civitas.ACTION_DIPLOMACY, civitas.DIPLOMACY_PROPOSE_PACT, {})) {
					core.error(civitas.l('There was an error proposing a pact to this settlement, check the data you entered and try again.'));
				}
			}
			return false;
		}).on('click', '.ceasefire', function () {
			if (!my_settlement.can_diplomacy()) {
				core.error(civitas.l('You will need to construct an Embassy before being able to propose a cease fire to other settlements.'));
				return false;
			}
			if (confirm('Are you sure you want to propose a cease fire to this settlement?')) {
				if (!core.add_to_queue(my_settlement, settlement, civitas.ACTION_DIPLOMACY, civitas.DIPLOMACY_PROPOSE_CEASE_FIRE, {})) {
					core.error(civitas.l('There was an error proposing a cease fire to this settlement, check the data you entered and try again.'));
				}
			}
			return false;
		}).on('click', '.war', function () {
			if (!my_settlement.can_diplomacy()) {
				core.error(civitas.l('You will need to construct an Embassy before being able to declare war to other settlements.'));
				return false;
			}
			if (confirm('Are you sure you want to declare war to this settlement?')) {
				my_settlement.diplomacy(settlement.get_id(), civitas.DIPLOMACY_WAR);
			}
			return false;
		}).on('click', '.caravan', function () {
			if (!my_settlement.can_trade()) {
				core.error(civitas.l('You will need to construct a Trading Post before being able to trade resources with other settlements.'));
				return false;
			}
			core.open_panel(civitas.PANEL_NEW_CARAVAN, settlement);
			return false;
		}).on('click', '.spy', function () {
			if (!my_settlement.can_diplomacy()) {
				core.error(civitas.l('You will need to construct an Embassy before being able to send spies to other settlements.'));
				return false;
			}
			core.open_panel(civitas.PANEL_NEW_SPY, settlement);
			return false;
		}).on('click', '.attack', function () {
			if (!my_settlement.can_recruit_soldiers()) {
				core.error(civitas.l('You will need to construct a Military Camp before being able to attack other settlements.'));
				return false;
			}
			core.open_panel(civitas.PANEL_NEW_ARMY, settlement);
			return false;
		});
	},
	on_refresh: function() {
		var self = this;
		var core = this.get_core();
		var my_settlement = core.get_settlement();
		var settlement = this.params_data.data;
		var settlement_type = settlement.get_settlement_type();
		var trades = settlement.get_trades();
		var _status = my_settlement.get_diplomacy_status(settlement.get_id());
		var location = civitas['SETTLEMENT_LOCATION_' + my_settlement.get_climate().name.toUpperCase()];
		$(this.handle + ' #tab-info').empty().append('' +
			'<img class="avatar" src="' + civitas.ASSETS_URL + 'images/avatars/avatar' + settlement.get_ruler_avatar() + '.png" />' +
			'<dl>' +
				'<dt>' + settlement.get_ruler().title + '</dt><dd>' + settlement.get_ruler_name() + '</dd>' +
				'<dt>' + civitas.l('Climate') + '</dt><dd>' + settlement.get_climate().name.capitalize() + '</dd>' +
				'<dt>' + civitas.l('Personality') + '</dt><dd>' + settlement.get_personality().name.capitalize() + '</dd>' +
				'<dt>' + civitas.l('Nationality') + '</dt><dd>' + settlement.get_nationality().name.capitalize() + '</dd>' +
				(settlement.is_city() ? 
				'<dt>' + civitas.l('Level') + '</dt><dd>' + settlement.get_level() + '</dd>' +
				'<dt>' + civitas.l('Prestige') + '</dt><dd>' + civitas.ui.progress((settlement.get_prestige() * 100) / civitas.MAX_PRESTIGE_VALUE, 'small', settlement.get_prestige()) + '</dd>' 
				: '' ) + 
				'<dt>' + civitas.l('Coins') + '</dt><dd>' + civitas.utils.nice_numbers(settlement.get_coins()) + '</dd>' +
				'<dt>' + civitas.l('Population') + '</dt><dd>' + civitas.utils.nice_numbers(settlement.get_population()) + '</dd>' +
				'<dt>' + civitas.l('Religion') + '</dt><dd>' + settlement.get_religion().name.capitalize() + '</dd>' +
				'<dt>' + civitas.l('Influence') + '</dt><dd>' + civitas.ui.progress(my_settlement.get_influence_with_settlement(settlement.get_id()), 'small') + '</dd>' +
				'<dt>' + civitas.l('Diplomatic Status') + '</dt><dd>' + my_settlement.get_diplomacy_status(settlement.get_id()).name.capitalize() + '</dd>' +
				'<dt>' + civitas.l('Distance') + '</dt><dd>' + civitas.utils.get_distance(location, civitas.SETTLEMENTS[settlement.get_id()].location) + ' miles (' + civitas.utils.get_distance_in_days(location, civitas.SETTLEMENTS[settlement.get_id()].location) + ' days)</dd>' +
			'</dl>');
		$(this.handle + ' #tab-army').empty().append(civitas.ui.army_list(settlement.get_army_total()));
		$(this.handle + ' #tab-navy').empty().append(civitas.ui.navy_list(settlement.get_navy_total()));
		if (settlement.is_city()) {
			$(this.handle + ' #tab-imports').empty().append('' +
				'<p>' + civitas.l('Below are the goods this city will be buying this year.') + '</p>' +
				civitas.ui.trades_list(trades, 'imports'));
			$(this.handle + ' #tab-exports').empty().append('' +
				'<p>' + civitas.l('Below are the goods this city will be selling this year.') + '</p>' +
				civitas.ui.trades_list(trades, 'exports'));
		}
		var out = '<p>' + civitas.l('This settlement has the the following resources:') + '</p>';
		for (var item in settlement.get_resources()) {
			if ($.inArray(item, civitas.NON_RESOURCES) === -1 && settlement.resources[item] > 0) {
				out += civitas.ui.resource_storage_small_el(item, settlement.resources[item]);
			}
		}
		if (_status.id === civitas.DIPLOMACY_VASSAL) {
			$(this.handle + ' .btn.attack, ' + this.handle + ' .btn.spy').hide();
		} else {
			$(this.handle + ' .btn.attack, ' + this.handle + ' .btn.spy').show();
		}
		$(this.handle + ' #tab-resources').empty().append(out);
		if (_status.id === civitas.DIPLOMACY_PACT && settlement_type === civitas.CITY) {
			$(this.handle + ' .btn.alliance').show();
		} else {
			$(this.handle + ' .btn.alliance').hide();
		}
		if (_status.id === civitas.DIPLOMACY_TRUCE || _status.id === civitas.DIPLOMACY_CEASE_FIRE) {
			$(this.handle + ' .btn.pact').show();
		} else {
			$(this.handle + ' .btn.pact').hide();
		}
		if (_status.id === civitas.DIPLOMACY_WAR) {
			$(this.handle + ' .btn.ceasefire').show();
		} else {
			$(this.handle + ' .btn.ceasefire').hide();
		}
		if (_status.id !== civitas.DIPLOMACY_WAR && _status.id !== civitas.DIPLOMACY_VASSAL) {
			$(this.handle + ' .btn.war').show();
		} else {
			$(this.handle + ' .btn.war').hide();
		}
		if (_status.id === civitas.DIPLOMACY_PACT && settlement_type === civitas.VILLAGE) {
			$(this.handle + ' .btn.join').show();
		} else {
			$(this.handle + ' .btn.join').hide();
		}
	}
};
