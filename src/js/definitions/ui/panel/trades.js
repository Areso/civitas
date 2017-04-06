/**
 * Trades panel data.
 *
 * @type {Object}
 */
civitas.PANEL_TRADES = {
	template: '' +
		'<div id="panel-trades" class="panel">' +
			'<header>' +
				'<span class="title">' + civitas.l('World Market Trades') + '</span>' +
				'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents"></div>' +
		'</div>',
	id: 'trades',
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
		var settlement = core.get_settlement();
		var el = this.handle;
		var _t = '';
		_t += civitas.ui.tabs([civitas.l('Imports'), civitas.l('Exports'), civitas.l('Mercenaries'), civitas.l('BlackMarket')]);
		$(el + ' .contents').append(_t);
		$(el + ' #tab-imports').append('<p>' + civitas.l('Below is a list of goods that the other cities in the world are looking to buy. The goods replenish yearly, so plan accordingly.') + '</p><div class="contents"></div>');
		$(el + ' #tab-exports').append('<p>' + civitas.l('Below is a list of goods that the other cities in the world are looking to sell. The goods replenish yearly, so plan accordingly.') + '</p><div class="contents"></div>');
		$(el + ' #tab-mercenaries').append('<p>' + civitas.l('Below is a list of mercenary armies that are looking for hire. Mercenaries are available only for raiding and conquest missions, they do not join your city so they will not participate in defense.') + '</p><div class="contents"></div>');
		$(el + ' #tab-blackmarket').append('<p>' + civitas.l('The Black Market is a way to dump your excess materials when you`re in need of emptying your warehouses, but expect a steep price drop (you get ') + (100 - civitas.BLACK_MARKET_DISCOUNT) + civitas.l('% of the actual price). The goods will be taken immediately from your warehouses but you will receive the coins next month. Also, you get no prestige from Black Market trades.') + '</p><div class="contents"></div>');
		this.on_refresh();
		$(el).on('click', '.buy:not(.disabled)', function () {
			var handle = $(this).data('settlement');
			var resource = $(this).data('resource');
			if (settlement.buy_from_settlement(handle, resource) !== false) {
				self.on_refresh();
			}
			return false;
		}).on('click', '.sell:not(.disabled)', function () {
			var handle = $(this).data('settlement');
			var resource = $(this).data('resource');
			if (settlement.sell_to_settlement(handle, resource) !== false) {
				self.on_refresh();
			}
			return false;
		}).on('click', '.bmarket', function () {
			var resource = $('.bm-materials').val();
			var amount = $('.bm-quantity').val();
			if (resource !== '0') {
				settlement.list_black_market(resource, amount);
				self.on_refresh();
				$('.bm-quantity').val('');
			}
			return false;
		}).on('click', '.recruit:not(.disabled)', function () {
			var handle = $(this).data('handle');
			if (settlement.recruit_mercenary_army(handle) !== false) {
				self.on_refresh();
			}
			return false;
		}).on('click', '.view-army:not(.disabled)', function () {
			var army = $(this).data('id');
			var army_data = civitas.MERCENARIES[army];
			core.open_panel(civitas.PANEL_ARMY, army_data);
			return false;
		});
	},
	on_refresh: function() {
		var core = this.get_core();
		var settlement = core.get_settlement();
		var settlements = core.get_settlements();
		var out = '<table class="normal">';
		out += '<thead>' +
				'<tr>' +
				'<td><select class="bm-materials"></select></td>' +
				'<td><input type="text" placeholder="' + civitas.l('amount') + '" class="bm-quantity" /></td>' +
				'<td><a title="' + civitas.l('List goods on Black Market') + '" class="tips bmarket" href="#">' + civitas.l('list') + '</a></td>' +
				'</tr>' +
				'</thead>';
		out += '<tbody>' +
				'</tbody>' +
				'</table>';
		$('#tab-blackmarket > .contents').empty().append(out);

		var out = '';
		var bm = core.get_black_market();
		for (var item in bm) {
			out += '<tr>' +
					'<td>' + civitas.l('Amount') + ': ' + bm[item].amount + civitas.ui.resource_small_img(item) + '</td>' +
					'<td>' + civitas.l('Total price') + ': ' + bm[item].price + civitas.ui.resource_small_img('coins') + '</td>' +
					'<td>&nbsp;</td>' +
					'</tr>';
		}
		$('#tab-blackmarket > .contents > table > tbody').empty().append(out);

		var out = '<option value="0">-- ' + civitas.l('select') + ' --</option>';
		var resources = settlement.get_resources();
		for (var item in resources) {
			if ($.inArray(item, civitas.NON_RESOURCES) === -1) {
				out += '<option value="' + item + '"> ' + civitas.utils.get_resource_name(item) + '</option>';
			}
		}
		$('.bm-materials').empty().append(out);

		var out = '<table class="normal">' +
					'<thead>' +
					'<tr>' +
						'<td>' + civitas.l('City') + '</td>' +
						'<td class="center">' + civitas.l('Goods') + '</td>' +
						'<td class="center">' + civitas.l('Amount') + '</td>' +
						'<td class="center">' + civitas.l('Price') + '</td>' +
						'<td class="center">' + civitas.l('Discount') + '</td>' +
						'<td class="center">' + civitas.l('City Price') + '</td>' +
						'<td class="center">' + civitas.l('Total price') + '</td>' +
						'<td></td>' +
					'</tr>' +
					'</thead>';
		for (var z = 0; z < settlements.length; z++) {
			var settlement = settlements[z];
			var trades = settlements[z].get_trades();
			var resources = settlement.get_resources();
			if (trades !== null) {
				var imports = trades.imports;
				for (var item in imports) {
					var discount = Math.ceil((civitas.RESOURCES[item].price * civitas.TRADES_DISCOUNT) / 100);
					var discount_price = Math.ceil(civitas.RESOURCES[item].price - discount);
					out += '<tr>' +
							'<td>' + settlements[z].get_name() + '</td>' +
							'<td class="center">' + civitas.ui.resource_small_img(item) + '</td>' +
							'<td class="center">' + imports[item] + '</td>' +
							'<td class="center">' + civitas.RESOURCES[item].price + civitas.ui.resource_small_img('coins') + '</td>' +
							'<td class="center">' + discount + civitas.ui.resource_small_img('coins') + '</td>' +
							'<td class="center">' + discount_price + civitas.ui.resource_small_img('coins') + '</td>' +
							'<td class="center">' + Math.ceil(discount_price * imports[item]) + civitas.ui.resource_small_img('coins') + '</td>' +
							'<td class="center"><a title="' + civitas.l('Sell those goods') + '" data-resource="' + item + '" data-settlement="' + settlements[z].get_name() + '" class="tips sell' + (imports[item] === 0 ? ' disabled' : '') + '" href="#">' + civitas.l('sell') + '</a></td>' +
							'</tr>';
				}
			}
		}
		out += '<tfoot>' +
					'<tr>' +
						'<td>' + civitas.l('City') + '</td>' +
						'<td class="center">' + civitas.l('Goods') + '</td>' +
						'<td class="center">' + civitas.l('Amount') + '</td>' +
						'<td class="center">' + civitas.l('Price') + '</td>' +
						'<td class="center">' + civitas.l('Discount') + '</td>' +
						'<td class="center">' + civitas.l('City Price') + '</td>' +
						'<td class="center">' + civitas.l('Total price') + '</td>' +
						'<td></td>' +
					'</tr>' +
				'</tfoot>' +
			'</table>';
		$('#tab-imports > .contents').empty().append(out);

		var out = '<table class="mercenaries">';
		for (var i = 0; i < civitas.MERCENARIES.length; i++) {
			out += '<tr>' +
					'<td class="icon">' +
						'<img src="' + civitas.ASSETS_URL + 'images/armies/' + civitas.MERCENARIES[i].icon + '.png" />' +
					'</td>' +
					'<td>' +
						'<p class="title">' + civitas.MERCENARIES[i].name + '</p>' +
						'<p class="description">' + civitas.MERCENARIES[i].description + '</p>' +
					'</td>' +
					'<td>' + 
						civitas.utils.nice_numbers(civitas.MERCENARIES[i].cost) + civitas.ui.resource_small_img('coins') + 
					'</td>' +
					'<td class="medium">' +
						'<a title="' + civitas.l('View info on this mercenary army') + '" data-id="' + i + '" class="tips view-army" href="#">view</a> ' +
						civitas.ui.panel_btn('recruit', civitas.l('Recruit this mercenary army'), civitas.MERCENARIES[i].handle, 'recruit', settlement.is_mercenary_recruited(civitas.MERCENARIES[i].handle)) +
					'</td>' +
				'</tr>';
		}
		out += '</table>';
		$('#tab-mercenaries > .contents').empty().append(out);

		var out = '<table class="normal">' +
					'<thead>' +
					'<tr>' +
						'<td>' + civitas.l('City') + '</td>' +
						'<td class="center">' + civitas.l('Goods') + '</td>' +
						'<td class="center">' + civitas.l('Amount') + '</td>' +
						'<td class="center">' + civitas.l('Price') + '</td>' +
						'<td class="center">' + civitas.l('Tax') + '</td>' +
						'<td class="center">' + civitas.l('City Price') + '</td>' +
						'<td class="center">' + civitas.l('Total price') + '</td>' +
						'<td></td>' +
					'</tr>' +
					'</thead>';
		for (var z = 0; z < settlements.length; z++) {
			var settlement = settlements[z];
			var trades = settlements[z].get_trades();
			var resources = settlement.get_resources();
			if (trades !== null) {
				var exports = trades.exports;
				for (var item in exports) {
					var discount = Math.ceil((civitas.RESOURCES[item].price * civitas.TRADES_ADDITION) / 100);
					var discount_price = Math.ceil(civitas.RESOURCES[item].price + discount);
					out += '<tr>' +
							'<td>' + settlements[z].get_name() + '</td>' +
							'<td class="center">' + civitas.ui.resource_small_img(item) + '</td>' +
							'<td class="center">' + exports[item] + '</td>' +
							'<td class="center">' + civitas.RESOURCES[item].price + civitas.ui.resource_small_img('coins') + '</td>' +
							'<td class="center">' + discount + civitas.ui.resource_small_img('coins') + '</td>' +
							'<td class="center">' + discount_price + civitas.ui.resource_small_img('coins') + '</td>' +
							'<td class="center">' + Math.ceil(discount_price * exports[item]) + civitas.ui.resource_small_img('coins') + '</td>' +
							'<td class="center"><a title="' + civitas.l('Buy those goods') + '" data-resource="' + item + '" data-settlement="' + settlements[z].get_name() + '" class="tips buy' + (exports[item] === 0 ? ' disabled' : '') + '" href="#">' + civitas.l('buy') + '</a></td>' +
							'</tr>';
				}
			}
		}
		out += '<tfoot>' +
					'<tr>' +
						'<td>' + civitas.l('City') + '</td>' +
						'<td class="center">' + civitas.l('Goods') + '</td>' +
						'<td class="center">' + civitas.l('Amount') + '</td>' +
						'<td class="center">' + civitas.l('Price') + '</td>' +
						'<td class="center">' + civitas.l('Tax') + '</td>' +
						'<td class="center">' + civitas.l('City Price') + '</td>' +
						'<td class="center">' + civitas.l('Total price') + '</td>' +
						'<td></td>' +
					'</tr>' +
				'</tfoot>' +
			'</table>';
		$('#tab-exports > .contents').empty().append(out);
	}
};
