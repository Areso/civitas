/**
 * Utils object.
 */
city_builder.utils = {
	
	/**
	 * Calculate the resource price for the specified amount minus the discount.
	 * 
	 * @param {Number} amount
	 * @param {String} resource
	 * @param {Number} discount
	 * @returns {Number}
	 * @public
	 */
	calc_price_minus_discount: function (amount, resource, discount) {
		return Math.round(amount * (city_builder.RESOURCES[resource].price - discount));
	},
	
	/**
	 * Calculate the resource price for the specified amount plus the discount.
	 * 
	 * @param {Number} amount
	 * @param {String} resource
	 * @param {Number} discount
	 * @returns {Number}
	 * @public
	 */
	calc_price_plus_discount: function (amount, resource, discount) {
		return Math.round(amount * (city_builder.RESOURCES[resource].price + discount));
	},
	
	/**
	 * Format the current time.
	 * 
	 * @returns {String}
	 * @public
	 */
	get_now: function () {
		var today = new Date();
		var hh = today.getHours();
		var mm = today.getMinutes();
		var ss = today.getSeconds();
		return hh + ':' + mm + ':' + ss;
	}
};
