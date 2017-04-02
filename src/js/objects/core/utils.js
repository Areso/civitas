/**
 * Utils object.
 */
civitas.utils = {

	/**
	 * Format a timestamp to a more human form (x ago).
	 *
	 * @public
	 * @param {Number} time
	 * @returns {Number}
	 */
	time_since: function(time) {
		var time_formats = [
			[
				2, 
				"One second", 
				"1 second from now"
			], 
			[
				60, 
				"seconds", 
				1
			], 
			[
				120, 
				"One minute", 
				"1 minute from now"
			], 
			[
				3600, 
				"minutes", 
				60
			], 
			[
				7200, 
				"One hour", 
				"1 hour from now"
			], 
			[
				86400, 
				"hours", 
				3600
			], 
			[
				172800, 
				"One day", 
				"tomorrow"
			],
			[
				604800, 
				"days", 
				86400], 
			[
				1209600, 
				"One week", 
				"next week"
			], 
			[
				2419200, 
				"weeks", 
				604800
			], 
			[
				4838400, 
				"One month", 
				"next month"
			], 
			[
				29030400, 
				"months", 
				2419200], 
			[
				58060800, 
				"One year", 
				"next year"
			], 
			[
				2903040000, 
				"years", 
				29030400
			], 
			[
				5806080000, 
				"One century", 
				"next century"
			], 
			[
				58060800000, 
				"centuries", 
				2903040000
			]
		];
		var seconds = (new Date - time) / 1000;
		var list_choice = 1;
		if (seconds < 0) {
			seconds = Math.abs(seconds);
			list_choice = 1;
		}
		var i = 0, format;
		while (format = time_formats[i++]) {
			if (seconds < format[0]) {
				if (typeof format[2] === "string") {
					return format[list_choice];
				} else {
					return Math.floor(seconds / format[2]) + " " + format[1];
				}
			}
		}
		return time;
	},

	/**
	 * Round the number to nearest 10.
	 *
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	get_up_number: function(value) {
		return Math.floor(value / 10) * 10;
	},

	/**
	 * Return a random number between min and max.
	 *
	 * @public
	 * @param {Number} min
	 * @param {Number} max
	 * @returns {Number}
	 */
	get_random: function(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	},

	/**
	 * Return a random number based on importance.
	 *
	 * @public
	 * @param {Number} importance
	 * @returns {Number}
	 */
	get_random_by_importance: function(importance) {
		return civitas.utils.get_up_number(
			civitas.utils.get_random(
				Math.floor(Math.random() * importance) * 10 + 10,
				Math.floor(Math.random() * importance) * 10 + 20
			)
		);
	},

	/**
	 * Return the resource name by handle.
	 *
	 * @public
	 * @param {String} handle
	 * @returns {String}
	 */
	get_resource_name: function(handle) {
		return civitas.RESOURCES[handle].name;
	},

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
		return Math.ceil(Math.ceil(civitas.RESOURCES[resource].price - discount) * amount);
	},

	/**
	 * Calculate the resource price for the specified amount.
	 * 
	 * @param {Number} amount
	 * @param {String} resource
	 * @returns {Number}
	 * @public
	 */
	calc_price: function (amount, resource) {
		return Math.ceil(amount * (civitas.RESOURCES[resource].price));
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
		return Math.ceil(Math.ceil(civitas.RESOURCES[resource].price + discount) * amount);
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
	},

	/**
	 * Format a number so that it's more user-friendly.
	 *
	 * @returns {String}
	 * @public
	 */
	nice_numbers: function(num) {
		if (num >= 1000000000) {
			return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
		}
		if (num >= 1000000) {
			return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
		}
		if (num >= 1000) {
			return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
		}
		return num;
	},

	get_random_unique: function(from) {
		var id = civitas.utils.get_random(0, from.length - 1);
		var element = from[id];
		from.splice(id, 1);
		return element;
	}
};
