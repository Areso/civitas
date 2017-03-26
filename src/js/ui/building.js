/**
 * Main Game building panel object.
 * 
 * @param {type} params
 * @class {city_builder.panel}
 * @returns {city_builder.__constructor}
 */
city_builder.panel_building = function (params) {

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
	this.id = 'building';

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
		var _c = this.core.get_city().get_building_by_handle(params.data.handle);
		var level = _c.get_level();
		$('.ui').append(city_builder.ui.building_panel_template.replace(/{id}/g, this.id));
		$(el + ' header .title').html(params.data.name);
		var _t = '<p class="smalldesc">' + params.data.description + '</p>' +
				'<dl>' +
				city_builder.ui.cost_panel(params.data.cost) +
				city_builder.ui.materials_panel(params.data.materials) +
				city_builder.ui.production_panel(params.data.production, level) +
				city_builder.ui.requires_panel(params.data.requires) +
				city_builder.ui.tax_panel(params.data.tax, level) +
				city_builder.ui.storage_panel(params.data.storage, level) +
				'</dl>';
		$(el + ' .contents').append(_t);
		if (_c.is_marketplace()) {
			$(el + ' header .demolish').remove();
		} else {
			$(el).on('click', '.demolish', function () {
				if (_c.demolish()) {
					self.destroy();
				} else {
					self.core.error('Unable to demolish the specified building `' + _c.get_name() + '`!');
				}
				return false;
			});
		}
		if (_c.is_production_building()) {
			if (_c.is_producing()) {
				$(el + ' .pause').removeClass('start');
			} else {
				$(el + ' .start').removeClass('pause');
			}
			$(el).on('click', '.pause', function () {
				_c.stop_production();
				$(this).removeClass('pause').addClass('start');
				return false;
			}).on('click', '.start', function () {
				$(this).removeClass('start').addClass('pause');
				_c.start_production();
				return false;
			});
		} else {
			$(el + ' .start, ' + el + ' .pause').remove();
		}
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

	this.refresh = function() {
		return this;
	};

	// Fire up the constructor
	return this.__constructor(params);
};
