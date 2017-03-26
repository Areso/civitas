/**
 * Main Game world panel object.
 * 
 * @param {type} params
 * @class {city_builder.panel}
 * @returns {city_builder.__constructor}
 */
city_builder.panel_world = function (params) {

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
	 * @returns {city_builder.panel}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		var self = this;
		this.core = params.core;
		var el = '#panel-' + this.id;
		if (city_builder.ui.panel_exists(el)) {
			this.destroy();
		}
		this.core.console_log('creating panel with id `' + this.id + '`');
		var city = this.core.get_city();
		$('.ui').append(city_builder.ui.worldmap_panel_template.replace(/{id}/g, this.id));
		var loc = city_builder['CITY_LOCATION_' + city.get_climate().name.toUpperCase()];
		var out = '<div data-name="yourcity" class="tips city your" title="' + city_builder.l('City of') + ' ' + city.get_name() + '" style="left:' + loc.x + 'px;top:' + loc.y + 'px"></div>';
		for (var item in city_builder.CITIES) {
			out += city_builder.ui.city_worldmap_element(item);
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
				self.core.open_panel(new city_builder.panel_advisor({
					core: self.core
				}));
			} else {
				var _city = self.core.get_city(city_name);
				self.core.open_panel(new city_builder.panel_city({
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

	this.refresh = function() {
		return this;
	};

	// Fire up the constructor
	return this.__constructor(params);
};
