/**
 * Main Game window panel object.
 * 
 * @param {type} params
 * @class {city_builder.panel}
 * @returns {city_builder.__constructor}
 */
city_builder.panel_window = function (params) {

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
	this.id = null;

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
	 * Object constructor.
	 * 
	 * @private
	 * @returns {city_builder.panel}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		$('.panel.pw').remove();
		this.core = params.core;
		this.id = params.id;
		var self = this;
		var el = '#panel-' + this.id;
		if (city_builder.ui.panel_exists(el)) {
			this.destroy();
		}
		this.core.console_log('creating panel with id `' + this.id + '`');
		$('.ui').append(city_builder.ui.generic_panel_template.replace(/{id}/g, this.id).replace(/{title}/g, params.header));
		var out = '';
		out += city_builder.ui.normal_panel(city_builder.l('Background Music'), '<a href="#" class="music-control ' + ((this.core.get_settings('music') === true) ? 'playing' : 'paused') + '"></a>');
		out += city_builder.ui.normal_panel(city_builder.l('Console'), '<a href="#" class="console-control ' + ((this.core.get_settings('console') === true) ? 'on' : 'off') + '">toggle</a>');
		$(el + ' .contents').append(out);
		$(el).on('click', '.music-control', function () {
			if ($(this).hasClass('paused')) {
				$(this).removeClass('paused').addClass('playing');
				self.core.set_settings_music(true);
			} else {
				$(this).removeClass('playing').addClass('paused');
				self.core.set_settings_music(false);
			}
			return false;
		}).on('click', '.console-control', function () {
			if ($(this).hasClass('on')) {
				$(this).removeClass('on').addClass('off');
				self.core.set_settings_console(false);
			} else {
				$(this).removeClass('off').addClass('on');
				self.core.set_settings_console(true);
			}
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

	// Fire up the constructor
	return this.__constructor(params);
};
