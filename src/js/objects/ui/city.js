/**
 * Main Game storage panel object.
 * 
 * @param {Object} params
 * @class {civitas.controls.panel_city}
 * @returns {civitas.controls.panel_city}
 */
civitas.controls.panel_city = function (params) {

	/**
	 * Reference to the core object.
	 * 
	 * @type {civitas.game}
	 */
	this.core = null;

	/**
	 * DOM id of this panel.
	 * 
	 * @type {String}
	 * @constant
	 */
	this.id = 'city';

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
	 * @returns {civitas.controls.panel_city}
	 * @param {Object} params
	 */
	this.__init = function (params) {
		var self = this;
		this.core = params.core;
		var el = '#panel-' + this.id;
		var city = params.data;
		if (civitas.ui.panel_exists(el)) {
			this.destroy();
		}
		this.core.console_log('creating panel with id `' + this.id + '`');
		var trades = city.get_trades();
		$('.ui').append(civitas.ui.generic_panel_template
			.replace(/{id}/g, this.id)
			.replace(/{title}/g, 'City of ' + city.get_name()));
		$(el + ' .contents').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Army'), civitas.l('Navy'), civitas.l('Imports'), civitas.l('Exports')]));
		$(el + ' #tab-info').append('' +
				'<img class="avatar" src="' + civitas.ASSETS_URL + 'images/avatars/avatar' + city.get_avatar() + '.png" />' +
				'<dl>' +
				'<dt>' + civitas.l('Ruler') + '</dt><dd>' + city.get_ruler() + '</dd>' +
				'<dt>' + civitas.l('Climate') + '</dt><dd>' + city.get_climate().name.capitalize() + '</dd>' +
				'<dt>' + civitas.l('Personality') + '</dt><dd>' + city.get_personality().name.capitalize() + '</dd>' +
				'<dt>' + civitas.l('Nationality') + '</dt><dd>' + city.get_nationality().name.capitalize() + '</dd>' +
				'<dt>' + civitas.l('Level') + '</dt><dd>' + city.get_level() + '</dd>' +
				'<dt>' + civitas.l('Prestige') + '</dt><dd>' + city.get_prestige() + '</dd>' +
				'<dt>' + civitas.l('Coins') + '</dt><dd>' + civitas.utils.nice_numbers(city.get_coins()) + '</dd>' +
				'<dt>' + civitas.l('Influence') + '</dt><dd>' + this.core.get_city().get_influence_with_city(city.get_name()) + '</dd>' +
				'</dl>');
		$(el + ' #tab-army').append(civitas.ui.army_list(city.get_army_total()));
		$(el + ' #tab-navy').append(civitas.ui.navy_list(city.get_navy_total()));
		$(el + ' #tab-imports').append('' +
				'<p>' + civitas.l('Below are the goods this city will be buying this year.') + '</p>' +
				civitas.ui.trades_list(trades, 'imports'));
		$(el + ' #tab-exports').append('' +
				'<p>' + civitas.l('Below are the goods this city will be selling this year.') + '</p>' +
				civitas.ui.trades_list(trades, 'exports'));
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
	 * @returns {civitas.controls.panel_city}
	 */
	this.refresh = function() {
		return this;
	};
	
	// Fire up the constructor
	return this.__init(params);
};
