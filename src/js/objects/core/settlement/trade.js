/**
 * Buy the specified goods from a settlement.
 * 
 * @public
 * @param {civitas.objects.settlement|String|Number} settlement
 * @param {String} resource
 * @param {Number} amount
 * @returns {Object|Boolean}
 */
civitas.objects.settlement.prototype.buy_from_settlement = function(settlement, resource, amount) {
	var resources = this.get_resources();
	var _settlement;
	if (typeof settlement === 'string' || typeof settlement === 'number') {
		_settlement = this.get_core().get_settlement(settlement);
		if (settlement === false) {
			this.get_core().error(settlement + ' does not exist.');
			return false;
		}
	} else {
		_settlement = settlement;
	}
	var trades = _settlement.get_trades();
	if (trades === null) {
		this.get_core().error(settlement + ' does not trade any goods.');
		return false;
	}
	if (typeof trades.exports === 'undefined') {
		this.get_core().error(settlement + ' does not export any goods.');
		return false;
	}
	for (var item in trades.exports) {
		if (item === resource) {
			if (typeof amount === 'undefined') {
				amount = trades.exports[item];
			}
			var discount = Math.ceil((civitas.RESOURCES[item].price * civitas.TRADES_ADDITION) / 100);
			var price = civitas.utils.calc_price_plus_discount(amount, item, discount);
			var settlement_price = civitas.utils.calc_price(amount, item);
			var item_discount_price = Math.ceil(civitas.RESOURCES[item].price + discount);
			if (!this.has_storage_space_for(amount)) {
				return false;
			}
			if (this.dec_coins(price) === false) {
				return false;
			}
			_settlement.inc_coins(settlement_price);
			this.add_to_storage(item, amount);
			this.remove_from_exports(_settlement, item, amount);
			this.raise_influence(_settlement.get_id(), 2);
			this.raise_prestige();
			this.raise_fame(50);
			this.get_core().refresh();
			this.get_core().notify(this.get_name() + ' bought ' + amount + ' ' + civitas.utils.get_resource_name(item) + ' from ' + settlement + ' for ' + item_discount_price + ' coins each, for a total of ' + price + ' coins.', 'Transaction done');
			return {
				buyer: this.get_name(),
				amount: amount,
				goods: civitas.utils.get_resource_name(item),
				seller: settlement,
				price: Math.round(civitas.RESOURCES[item].price + discount),
				totalPrice: price
			};
		}
	}
	this.get_core().error(settlement + ' does not export the requested goods.');
	return false;
};
	
/**
 * Perform a trades reset (resets all amounts of resources available
 * for trade and randomize the amount.
 * 
 * @public
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.reset_trades = function() {
	var trades = {
		'imports': {},
		'exports': {}
	};
	if (typeof civitas.SETTLEMENTS[this.get_id()] !== 'undefined') {
		var _trades = civitas.SETTLEMENTS[this.get_id()].trades;
		for (var goods_type in _trades) {
			for (var item in _trades[goods_type]) {
				trades[goods_type][item] = civitas.utils.get_random_by_importance(_trades[goods_type][item]);
			}
		}
		this.trades = trades;
		return true;
	} else {
		this.trades = trades;
		return false;
	}
};
	
/**
 * List the specified goods onto the Black Market.
 * 
 * @public
 * @param {String} resource
 * @param {Number} amount
 * @returns {Object|Boolean}
 */
civitas.objects.settlement.prototype.list_black_market = function(resource, amount) {
	var resources = this.get_resources();
	if (this.remove_resource(resource, amount)) {
		var discount = Math.ceil((civitas.RESOURCES[resource].price * civitas.BLACK_MARKET_DISCOUNT) / 100);
		var price = civitas.utils.calc_price_minus_discount(amount, resource, discount);
		this.get_core().add_black_market(resource, amount, price);
		this.get_core().refresh();
		this.get_core().notify(this.get_name() + ' placed ' + amount + ' ' + civitas.utils.get_resource_name(resource) + ' on the Black Market and will receive ' + price + ' coins next month.', 'Goods listed');
		return {
			seller: this.get_name(),
			amount: amount,
			goods: civitas.utils.get_resource_name(resource),
			price: price,
			discount: discount
		};
	}
	return false;
};
	
/**
 * Sell the specified goods to a settlement.
 * 
 * @public
 * @param {civitas.objects.settlement|String|Number} settlement
 * @param {String} resource
 * @param {Number} amount
 * @returns {Object|Boolean}
 */
civitas.objects.settlement.prototype.sell_to_settlement = function(settlement, resource, amount) {
	var resources = this.get_resources();
	var _settlement;
	if (typeof settlement === 'string' || typeof settlement === 'number') {
		_settlement = this.get_core().get_settlement(settlement);
		if (settlement === false) {
			this.get_core().error(settlement + ' does not exist.');
			return false;
		}
	} else {
		_settlement = settlement;
	}
	var trades = _settlement.get_trades();
	if (trades === null) {
		this.get_core().error(settlement + ' does not trade any goods.');
		return false;
	}
	if (typeof trades.imports === 'undefined') {
		this.get_core().error(settlement + ' does not import any goods.');
		return false;
	}
	for (var item in trades.imports) {
		if (item === resource) {
			if (typeof amount === 'undefined') {
				amount = trades.imports[item];
			}
			var discount = Math.ceil((civitas.RESOURCES[item].price * civitas.TRADES_DISCOUNT) / 100);
			var price = civitas.utils.calc_price_minus_discount(amount, item, discount);
			var settlement_price = civitas.utils.calc_price(amount, item);
			var item_discount_price = Math.ceil(civitas.RESOURCES[item].price - discount);
			if (!this.remove_resource(item, amount)) {
				return false;
			}
			this.inc_coins(price);
			if (!_settlement.dec_coins(settlement_price)) {
				this.get_core().error(settlement + ' does not have enough coins.');
				return false;
			}
			this.remove_from_imports(_settlement, item, amount);
			this.raise_influence(_settlement.get_id(), 1);
			this.raise_prestige();
			this.raise_fame(50);
			this.get_core().refresh();
			this.get_core().notify(this.get_name() + ' sold ' + amount + ' ' + civitas.utils.get_resource_name(item) + ' to ' + settlement + ' for ' + item_discount_price + ' coins each, for a total of ' + price + ' coins.', 'Transaction done');
			return {
				seller: this.get_name(),
				amount: amount,
				goods: civitas.utils.get_resource_name(item),
				buyer: settlement,
				price: Math.round(civitas.RESOURCES[item].price - discount),
				totalPrice: price
			};
		}
	}
	this.get_core().error(settlement + ' does not import the specified goods.');
	return false;
};
	
/**
 * Remove a specified amount of a resource from the trade exports of a settlement.
 * 
 * @public
 * @param {civitas.objects.settlement} settlement
 * @param {String} item
 * @param {Number} amount
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.remove_from_exports = function(settlement, item, amount) {
	settlement.trades.exports[item] = settlement.trades.exports[item] - amount;
	return true;
};

/**
 * Remove a specified amount of a resource from the trade imports of a settlement.
 * 
 * @public
 * @param {civitas.objects.settlement} settlement
 * @param {String} item
 * @param {Number} amount
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.remove_from_imports = function(settlement, item, amount) {
	settlement.trades.imports[item] = settlement.trades.imports[item] - amount;
	return true;
};

/**
 * Get the imports and exports of this settlement.
 * 
 * @public
 * @returns {Object}
 */
civitas.objects.settlement.prototype.get_trades = function() {
	return this.trades;
};
	
/**
 * Set the imports and exports of this settlement.
 * 
 * @public
 * @param {Object} value
 * @returns {civitas.objects.settlement}
 */
civitas.objects.settlement.prototype.set_trades = function(value) {
	this.trades = value;
	return this;
};
	