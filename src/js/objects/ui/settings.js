/**
 * Main Game settings panel object.
 * 
 * @param {Object} params
 * @class {city_builder.controls.panel_settings}
 * @returns {city_builder.controls.panel_settings}
 */
city_builder.controls.panel_settings = function (params) {

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
	 * @returns {city_builder.controls.panel_settings}
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
		$('.ui').append(city_builder.ui.generic_panel_template
			.replace(/{id}/g, this.id)
			.replace(/{title}/g, params.header));
		$(el + ' .contents').append(city_builder.ui.tabs([city_builder.l('Sounds'), city_builder.l('UI')]));
		$(el + ' #tab-sounds').append('<div>' +
			'<a href="#" class="music-control ui-control ' + ((this.core.get_settings('music') === true) ? 'on' : 'off') + '">toggle music</a>' +
			'<input class="music-volume" type="range" min="0" max="1" step="0.1" ' + ((this.core.get_settings('music') !== true) ? 'disabled' : '') + ' />' +
			'</div>');
		$(el + ' #tab-ui').append('<div>' +
			'<a href="#" class="console-control ui-control ' + ((this.core.get_settings('console') === true) ? 'on' : 'off') + '">toggle console</a>' +
			'</div>');
		$(el).on('click', '.music-control', function () {
			if ($(this).hasClass('on')) {
				$(this).removeClass('on').addClass('off');
				$('.music-volume').attr('disabled', true);
				self.core.set_settings_music(true);
			} else {
				$(this).removeClass('off').addClass('on');
				$('.music-volume').attr('disabled', false);
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
		}).on('change', '.music-volume', function () {
			var value = $(this).val();
			self.core.music.volume = value;
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

	/**
	 * Callback method called when a function from the core needs to refresh
	 * information on this panel.
	 *
	 * @public
	 * @returns {city_builder.controls.panel_settings}
	 */
	this.refresh = function() {
		return this;
	};
	
	// Fire up the constructor
	return this.__constructor(params);
};
