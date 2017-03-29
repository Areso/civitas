/**
 * Main Game world panel object.
 * 
 * @param {Object} params
 * @class {civitas.controls.panel_world}
 * @returns {civitas.controls.panel_world}
 */
civitas.controls.panel_world = function (params) {

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
	this.id = 'world';

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
	 * @returns {civitas.controls.panel_world}
	 * @param {Object} params
	 */
	this.__init = function (params) {
		var self = this;
		this.core = params.core;
		var el = '#panel-' + this.id;
		if (civitas.ui.panel_exists(el)) {
			this.destroy();
		}
		this.core.console_log('creating panel with id `' + this.id + '`');
		var city = this.core.get_city();
		$('.ui').append(civitas.ui.worldmap_panel_template
			.replace(/{id}/g, this.id));
		var loc = civitas['CITY_LOCATION_' + city.get_climate().name.toUpperCase()];
		var out = '<div data-name="yourcity" class="tips city c1" title="' + civitas.l('City of') + ' ' + city.get_name() + '" style="left:' + loc.x + 'px;top:' + loc.y + 'px"></div>';
		for (var item in civitas.CITIES) {
			out += civitas.ui.city_worldmap_element(item);
		}
		$(el + ' .contents .worldmap').empty().append(out);
		$(el).on('click', '.close', function () {
			self.destroy();
			return false;
		}).draggable({
			handle: 'header',
			containment: 'window',
			snap: '.panel'
		}).on('click', '.city', function () {
			var city_name = $(this).data('name');
			if (city_name === 'yourcity') {
				self.core.open_panel(new civitas.controls.panel_advisor({
					core: self.core
				}));
			} else {
				var _city = self.core.get_city(city_name);
				self.core.open_panel(new civitas.controls.panel_city({
					core: self.core,
					data: _city
				}));
			}
			return false;
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
	 * @returns {civitas.controls.panel_world}
	 */
	this.refresh = function() {
		return this;
	};

	// Fire up the constructor
	return this.__init(params);
};
