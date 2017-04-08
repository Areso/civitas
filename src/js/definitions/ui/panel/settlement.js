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
			'<footer class="footer">' +
					'<a class="tips attack btn" title="' + civitas.l('Attack this settlement') + '"></a>' +
					'<a class="tips caravan btn" title="' + civitas.l('Send a caravan to this settlement') + '"></a>' +
					'<a class="tips help btn" data-context="settlement" data-term="general" title="' + civitas.l('Info about this settlement') + '"></a>' +
			'</footer>' +
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
		$(this.handle + ' header .title').html((settlement.is_city() ? 'City of ' : 'Village of ') + settlement.get_name());
		if (settlement.is_city()) {
			$(this.handle + ' .contents').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Army'), civitas.l('Navy'), civitas.l('Imports'), civitas.l('Exports')]));
		} else {
			$(this.handle + ' .contents').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Army'), civitas.l('Navy'), civitas.l('Resources')]));
		}
		this.on_refresh();
		$(this.handle).on('click', '.caravan', function () {
			if (!my_settlement.can_trade()) {
				core.error(civitas.l('You will need to construct a Trading Post before being able to trade resources with other settlements.'));
				return false;
			}
			core.add_campaign(my_settlement, settlement, civitas.CAMPAIGN_CARAVAN, {
				resources: {
					coins: 100000,
					wood: 10,
					stones: 20,
					silk: 10,
					weapons: 100
				}
			});
			self.destroy();
			return false;
		}).on('click', '.attack', function () {
			if (!my_settlement.can_diplomacy()) {
				core.error(civitas.l('You will need to construct an Embassy before being able to propose treaties and pacts to other settlements.'));
				return false;
			}
			my_settlement.diplomacy(settlement.get_id(), civitas.DIPLOMACY_WAR, civitas.SETTLEMENT_TYPES[settlement_type]);
			core.add_campaign(my_settlement, settlement, civitas.CAMPAIGN_ARMY, {
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
			});
			self.destroy();
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
		} else {
			var out = '<p>This village has the the following resources:</p>' +
				'<dl>';
			for (var item in settlement.get_resources()) {
				if ($.inArray(item, civitas.NON_RESOURCES) === -1) {
					out += '<dt>' + settlement.resources[item] + '</dt>' +
						'<dd>' + civitas.ui.resource_small_img(item) + '</dd>';
				}
			}
			out += '</dl>';
			$(this.handle + ' #tab-resources').empty().append(out);
		}
	}
};
