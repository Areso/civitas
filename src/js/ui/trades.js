/**
 * Main Game trades panel object.
 * 
 * @param {type} params
 * @class {city_builder.panel_trades}
 * @returns {city_builder.panel_trades}
 */
city_builder.panel_trades = function (params) {

	/**
	 * Reference to the core object.
	 * 
	 * @type {city_builder.game}
	 */
	this.core = null;

	/**
	 * DOM id of this panel.
	 * 
	 * @type {String}
	 * @constant
	 */
	this.id = 'trades';

	/**
	 * Localized title of the panel.
	 * 
	 * @type {String}
	 */
	this.title = city_builder.l('World Market Trades');

	/**
	 * Object destructor.
	 * 
	 * @private
	 * @returns {Boolean}
	 */
	this.__destructor = function () {
		this.core.console_log('destroying panel with id `' + this.id + '`');
		var el = '#panel-' + this.id;
		$(el).remove();
		this.core.close_panel(this.id);
		$('.tipsy').remove();
		return false;
	};

	/**
	 * Method for destroying the window/panel.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.destroy = function () {
		return this.__destructor();
	};

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {city_builder.panel}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		this.core = params.core;
		var el = '#panel-' + this.id;
		var self = this;
		if (city_builder.ui.panel_exists(el)) {
			this.destroy();
		}
		this.core.console_log('creating panel with id `' + this.id + '`');
		var city = this.core.get_city();
		var _t = '';
		$('.ui').append(city_builder.ui.generic_panel_template.replace(/{id}/g, this.id).replace(/{title}/g, this.title));
		_t += city_builder.ui.tabs([city_builder.l('Imports'), city_builder.l('Exports'), city_builder.l('Mercenaries'), city_builder.l('BlackMarket')]);
		$(el + ' .contents').append(_t);
		$(el + ' #tab-imports').append('<p>' + city_builder.l('Below is a list of goods that the other cities in the world are looking to buy. The goods replenish yearly, so plan accordingly.') + '</p><div class="contents"></div>');
		$(el + ' #tab-exports').append('<p>' + city_builder.l('Below is a list of goods that the other cities in the world are looking to sell. The goods replenish yearly, so plan accordingly.') + '</p><div class="contents"></div>');
		$(el + ' #tab-mercenaries').append('<p>' + city_builder.l('Below is a list of mercenary armies that are looking for hire. Mercenaries are available only for raiding and conquest missions, they do not join your city so they will not participate in defense.') + '</p><div class="contents"></div>');
		$(el + ' #tab-blackmarket').append('<p>' + city_builder.l('The Black Market is a way to dump your excess materials when you`re in need of emptying your warehouses, but expect a steep price drop (you get ') + (100 - city_builder.BLACK_MARKET_DISCOUNT) + city_builder.l('% of the actual price). The goods will be taken immediately from your warehouses but you will receive the coins next month. Also, you get no prestige from Black Market trades.') + '</p><div class="contents"></div>');
		this.refresh();
		$(el).on('click', '.buy:not(.disabled)', function () {
			var handle = $(this).data('city');
			var resource = $(this).data('resource');
			if (city.buy_from_city(handle, resource) !== false) {
				self._refresh_exports();
			}
			return false;
		}).on('click', '.sell:not(.disabled)', function () {
			var handle = $(this).data('city');
			var resource = $(this).data('resource');
			if (city.sell_to_city(handle, resource) !== false) {
				self._refresh_imports();
			}
			return false;
		}).on('click', '.bmarket', function () {
			var resource = $('.bm-materials').val();
			var amount = $('.bm-quantity').val();
			if (resource !== '0') {
				city.list_black_market(resource, amount);
				self._refresh_black_market();
				$('.bm-quantity').val('');
			}
			return false;
		}).on('click', '.recruit:not(.disabled)', function () {
			var handle = $(this).data('handle');
			if (city.recruit_mercenary_army(handle) !== false) {
				self._refresh_mercenaries();
			}
			return false;
		}).on('click', '.view-army:not(.disabled)', function () {
			var army = $(this).data('id');
			var army_data = city_builder.MERCENARIES[army];
			self.core.open_panel(new city_builder.panel_army({
				core: self.core,
				data: army_data
			}));
			return false;
		}).on('click', '.close', function () {
			self.destroy();
			return false;
		}).draggable({
			handle: 'header',
			containment: 'window',
			snap: '.panel'
		});
		$(el + ' .tabs').tabs();
		$(el + ' .tips').tipsy({
			gravity: 's'
		});
		$(el).css({
			'left': ($(window).width() / 2) - ($(el).width() / 2),
			'top': ($(window).height() / 2) - ($(el).height() / 2)
		});
		return this;
	};

	/**
	 * Callback method called when a function from the core needs to refresh
	 * information on this panel.
	 *
	 * @public
	 * @returns {city_builder.panel_building}
	 */
	this.refresh = function() {
		this._refresh_imports();
		this._refresh_exports();
		this._refresh_mercenaries();
		this._build_black_market();
		return this;
	};

	/**
	 * Internal function for building the Black Market panel.
	 * 
	 * @returns {city_builder.panelTrades}
	 * @private
	 */
	this._build_black_market = function () {
		var cities = this.core.get_cities();
		var out = '<table class="normal">';
		out += '<thead>' +
				'<tr>' +
				'<td><select class="bm-materials"></select></td>' +
				'<td><input type="text" placeholder="' + city_builder.l('amount') + '" class="bm-quantity" /></td>' +
				'<td><a title="' + city_builder.l('List goods on Black Market') + '" class="tips bmarket" href="#">' + city_builder.l('list') + '</a></td>' +
				'</tr>' +
				'</thead>';
		out += '<tbody>' +
				'</tbody>' +
				'</table>';
		$('#tab-blackmarket > .contents').empty().append(out);
		this._refresh_black_market_materials();
		this._refresh_black_market();
		return this;
	};

	/**
	 * Internal function for refreshing the Black Market panel.
	 * 
	 * @returns {city_builder.panelTrades}
	 * @private
	 */
	this._refresh_black_market = function () {
		var out = '';
		var bm = this.core.get_black_market();
		for (var item in bm) {
			out += '<tr>' +
					'<td>' + city_builder.l('Amount') + ': ' + bm[item].amount + city_builder.ui.resource_small_img(item) + '</td>' +
					'<td>' + city_builder.l('Total price') + ': ' + bm[item].price + city_builder.ui.resource_small_img('coins') + '</td>' +
					'<td>&nbsp;</td>' +
					'</tr>';
		}
		$('#tab-blackmarket > .contents > table > tbody').empty().append(out);
		return this;
	};

	/**
	 * Internal function for refreshing the Black Market resources dropbox.
	 * 
	 * @returns {city_builder.panelTrades}
	 * @private
	 */
	this._refresh_black_market_materials = function () {
		var out = '<option value="0">-- ' + city_builder.l('select') + ' --</option>';
		var city = this.core.get_city();
		var resources = city.get_resources();
		for (var item in resources) {
			if (item !== 'fame' && item !== 'coins' && item !== 'prestige' && item !== 'espionage') {
				out += '<option value="' + item + '"> ' + city_builder.utils.get_resource_name(item) + '</option>';
			}
		}
		$('.bm-materials').empty().append(out);
		return this;
	};

	/**
	 * Internal function for refreshing the Imports panel.
	 * 
	 * @returns {city_builder.panelTrades}
	 * @private
	 */
	this._refresh_imports = function () {
		var cities = this.core.get_cities();
		var out = '<table class="normal">' +
					'<thead>' +
					'<tr>' +
						'<td>City</td>' +
						'<td>Goods</td>' +
						'<td>Amount</td>' +
						'<td>Price/item</td>' +
						'<td>Total price</td>' +
						'<td></td>' +
					'</tr>' +
					'</thead>';
		for (var z = 0; z < cities.length; z++) {
			var city = cities[z];
			var trades = cities[z].get_trades();
			var resources = city.get_resources();
			if (trades !== null) {
				var imports = trades.imports;
				for (var item in imports) {
					var discount = (city_builder.RESOURCES[item].price * city_builder.TRADES_DISCOUNT) / 100;
					out += '<tr>' +
							'<td>' + cities[z].get_name() + '</td>' +
							'<td>' + city_builder.ui.resource_small_img(item) + '</td>' +
							'<td>' + imports[item] + '</td>' +
							'<td>' + Math.round(city_builder.RESOURCES[item].price - discount) + city_builder.ui.resource_small_img('coins') + '</td>' +
							'<td>' + Math.round((city_builder.RESOURCES[item].price - discount) * imports[item]) + city_builder.ui.resource_small_img('coins') + '</td>' +
							'<td class="center"><a title="' + city_builder.l('Sell those goods') + '" data-resource="' + item + '" data-city="' + cities[z].get_name() + '" class="tips sell' + (imports[item] === 0 ? ' disabled' : '') + '" href="#">' + city_builder.l('sell') + '</a></td>' +
							'</tr>';
				}
			}
		}
		out += '<tfoot>' +
					'<tr>' +
						'<td>City</td>' +
						'<td>Goods</td>' +
						'<td>Amount</td>' +
						'<td>Price/item</td>' +
						'<td>Total price</td>' +
						'<td></td>' +
					'</tr>' +
				'</tfoot>' +
			'</table>';
		$('#tab-imports > .contents').empty().append(out);
		return this;
	};

	/**
	 * Internal function for refreshing the Mercenaries panel.
	 * 
	 * @returns {city_builder.panelTrades}
	 * @private
	 */
	this._refresh_mercenaries = function () {
		var out = '<table class="mercenaries">';
		for (var i = 0; i < city_builder.MERCENARIES.length; i++) {
			out += '<tr>' +
					'<td class="icon">' +
						'<img src="' + city_builder.ASSETS_URL + 'images/armies/' + city_builder.MERCENARIES[i].icon + '.png" />' +
					'</td>' +
					'<td>' +
						'<p class="title">' + city_builder.MERCENARIES[i].name + '</p>' +
						'<p class="description">' + city_builder.MERCENARIES[i].description + '</p>' +
					'</td>' +
					'<td>' + 
						city_builder.utils.nice_numbers(city_builder.MERCENARIES[i].cost) + city_builder.ui.resource_small_img('coins') + 
					'</td>' +
					'<td class="medium">' +
						'<a title="' + city_builder.l('View info on this mercenary army') + '" data-id="' + i + '" class="tips view-army" href="#">view</a> ' +
						city_builder.ui.panel_btn('recruit', city_builder.l('Recruit this mercenary army'), city_builder.MERCENARIES[i].handle, 'recruit', this.core.get_city().is_mercenary_recruited(city_builder.MERCENARIES[i].handle)) +
					'</td>' +
				'</tr>';
		}
		out += '</table>';
		$('#tab-mercenaries > .contents').empty().append(out);
		return this;
	};

	/**
	 * Internal function for refreshing the Exports panel.
	 * 
	 * @returns {city_builder.panelTrades}
	 * @private
	 */
	this._refresh_exports = function () {
		var cities = this.core.get_cities();
		var out = '<table class="normal">' +
					'<thead>' +
					'<tr>' +
						'<td>City</td>' +
						'<td>Goods</td>' +
						'<td>Amount</td>' +
						'<td>Price/item</td>' +
						'<td>Total price</td>' +
						'<td></td>' +
					'</tr>' +
					'</thead>';
		for (var z = 0; z < cities.length; z++) {
			var city = cities[z];
			var trades = cities[z].get_trades();
			var resources = city.get_resources();
			if (trades !== null) {
				var exports = trades.exports;
				for (var item in exports) {
					var discount = (city_builder.RESOURCES[item].price * city_builder.TRADES_ADDITION) / 100;
					out += '<tr>' +
							'<td>' + cities[z].get_name() + '</td>' +
							'<td>' + city_builder.ui.resource_small_img(item) + '</td>' +
							'<td>' + exports[item] + '</td>' +
							'<td>' + Math.round(city_builder.RESOURCES[item].price + discount) + city_builder.ui.resource_small_img('coins') + '</td>' +
							'<td>' + Math.round((city_builder.RESOURCES[item].price + discount) * exports[item]) + city_builder.ui.resource_small_img('coins') + '</td>' +
							'<td class="center"><a title="' + city_builder.l('Buy those goods') + '" data-resource="' + item + '" data-city="' + cities[z].get_name() + '" class="tips buy' + (exports[item] === 0 ? ' disabled' : '') + '" href="#">' + city_builder.l('buy') + '</a></td>' +
							'</tr>';
				}
			}
		}
		out += '<tfoot>' +
					'<tr>' +
						'<td>City</td>' +
						'<td>Goods</td>' +
						'<td>Amount</td>' +
						'<td>Price/item</td>' +
						'<td>Total price</td>' +
						'<td></td>' +
					'</tr>' +
				'</tfoot>' +
			'</table>';
		$('#tab-exports > .contents').empty().append(out);
		return this;
	};

	// Fire up the constructor
	return this.__constructor(params);
};
