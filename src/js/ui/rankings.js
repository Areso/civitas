/**
 * Main Game storage panel object.
 * 
 * @param {type} params
 * @class {city_builder.panel}
 * @returns {city_builder.__constructor}
 */
city_builder.panel_rankings = function (params) {
	
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
	this.id = 'rankings';

	/**
	 * Localized title of the panel.
	 * 
	 * @type {String}
	 */
	this.title = city_builder.l('Rankings');

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
	 * Retrieve the current ranking score for a city
	 *
	 * @public
	 * @returns {Number}
	 */
	this.get_ranking = function(city) {
		if (typeof city !== 'undefined' && typeof city === 'string') {
			return this.core.get_city(city).get_rank();
		}
		else if (typeof city !== 'undefined' && typeof city === 'object') {
			return city.get_rank();
		}
		else {
			return this.core.get_city().get_rank();
		}
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
		var self = this;
		var el = '#panel-' + this.id;
		if (city_builder.ui.panel_exists(el)) {
			this.destroy();
		}
		this.core.console_log('creating panel with id `' + this.id + '`');
		$(el).remove();
		$('.ui').append(city_builder.ui.generic_panel_template.replace(/{id}/g, this.id).replace(/{title}/g, this.title));
		var out = '';

		for (var item in city_builder.CITIES) {
			console.log(item + '=' + this.get_ranking(item));
		}
		console.log(this.core.get_city().get_name() + '=' + this.get_ranking(this.core.get_city()));
		$(el + ' .contents').empty().append(out);
		$(el).on('click', '.close', function () {
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
		return this;
	};

	// Fire up the constructor
	return this.__constructor(params);
};
