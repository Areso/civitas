/**
 * Main Game settlement panel object.
 * 
 * @param {Object} params
 * @class {civitas.controls.panel_settlement}
 * @returns {civitas.controls.panel_settlement}
 */
civitas.controls.panel_settlement = function (params) {

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
	this.id = 'settlement';

	/**
	 * Object destructor.
	 * 
	 * @private
	 * @returns {Boolean}
	 */
	this.__destroy = function () {
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
		return this.__destroy();
	};

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {civitas.controls.panel_settlement}
	 * @param {Object} params
	 */
	this.__init = function (params) {
		var self = this;
		this.core = params.core;
		var city = this.core.get_city();
		var location = civitas['CITY_LOCATION_' + city.get_climate().name.toUpperCase()];
		var el = '#panel-' + this.id;
		var settlement = params.data;
		if (civitas.ui.panel_exists(el)) {
			this.destroy();
		}
		this.core.console_log('creating panel with id `' + this.id + '`');
		$('.ui').append(civitas.ui.settlement_panel_template
			.replace(/{id}/g, this.id)
			.replace(/{title}/g, 'Small Settlement'));
		$(el + ' .contents').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Army'), civitas.l('Navy'), civitas.l('Resources')]));
		$(el + ' #tab-info').append('' +
				'<img class="avatar" src="' + civitas.ASSETS_URL + 'images/avatars/avatar40.png" />' +
				'<dl>' +
				'<dt>' + civitas.l('Nationality') + '</dt><dd>' + civitas.NATIONS[settlement.nationality].capitalize() + '</dd>' +
				'<dt>' + civitas.l('Population') + '</dt><dd>' + settlement.population + '</dd>' +
				'<dt>' + civitas.l('Prestige') + '</dt><dd>' + settlement.prestige + '</dd>' +
				'<dt>' + civitas.l('Coins') + '</dt><dd>' + civitas.utils.nice_numbers(settlement.resources.coins) + '</dd>' +
				'<dt>' + civitas.l('Distance') + '</dt><dd>' + civitas.utils.get_distance(location, settlement.location) + ' miles (' + civitas.utils.get_distance_in_days(location, settlement.location) + ' days)</dd>' +
				'</dl>');
		$(el + ' #tab-army').append(civitas.ui.army_list(settlement));
		$(el + ' #tab-navy').append(civitas.ui.navy_list(settlement));
		var out = '<p>This settlement has the the following resources:</p>' +
			'<dl>';
		for (var item in settlement.resources) {
			if ($.inArray(item, civitas.NON_RESOURCES) === -1) {
				out += '<dt>' + settlement.resources[item] + '</dt>' +
					'<dd>' + civitas.ui.resource_small_img(item) + '</dd>';
			}
		}
		out += '</dl>';
		$(el + ' #tab-resources').append(out);
		$(el).on('click', '.close', function () {
			self.destroy();
			return false;
		}).on('click', '.attack', function () {
			self.core.error('Not implemented yet.');
			return false;
		}).on('click', '.resources', function () {
			self.core.error('Not implemented yet.');
			return false;
		}).on('click', '.alliance', function () {
			self.core.error('Not implemented yet.');
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
	 * @returns {civitas.controls.panel_settlement}
	 */
	this.refresh = function() {
		return this;
	};
	
	// Fire up the constructor
	return this.__init(params);
};
