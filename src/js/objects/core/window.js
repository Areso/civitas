/**
 * Main Game window object.
 * 
 * @param {Object} params
 * @class {civitas.controls.window}
 * @returns {civitas.controls.window}
 */
civitas.controls.window = function (params) {

	/**
	 * DOM handle of this window.
	 *
	 * @type {String}
	 */
	this.handle = null;

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
	this.id = null;

	/**
	 * Localized title of the window.
	 * 
	 * @type {String}
	 */
	this.title = null;

	/**
	 * Callback function when the window is shown (created).
	 *
	 * @public
	 * @type {Function}
	 */
	this.on_show = null;

	/**
	 * Callback function when the window is hidden (destroyed).
	 *
	 * @public
	 * @type {Function}
	 */
	this.on_hide = null;

	/**
	 * Object destructor.
	 * 
	 * @private
	 * @returns {Boolean}
	 */
	this.__destroy = function () {
		this.get_core().console_log('destroying window with id `' + this.id + '`');
		$(this.handle).remove();
		$('.tipsy').remove();
		this.on_hide.call(this);
		return false;
	};

	/**
	 * Method for destroying the window.
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
	 * @returns {civitas.controls.window}
	 * @param {Object} params
	 */
	this.__init = function (params) {
		this.core = params.core;
		this.id = params.id;
		this.handle = '#window-' + this.id;
		if (params.on_show instanceof Function) {
			this.on_show = params.on_show;
		} else {
			this.on_show = function() {};
		}
		if (params.on_hide instanceof Function) {
			this.on_hide = params.on_hide;
		} else {
			this.on_hide = function() {};
		}
		if (civitas.ui.window_exists(this.handle)) {
			this.destroy();
		}
		this.get_core().console_log('creating window with id `' + this.id + '`');
		$('body').append(params.template);
		this.on_show.call(this);
		$(this.handle + ' .tips').tipsy({
			gravity: 's'
		});
		return this;
	};

	/**
	 * Return a pointer to the game core.
	 *
	 * @public
	 * @returns {civitas.game}
	 */
	this.get_core = function() {
		return this.core;
	};

	// Fire up the constructor
	return this.__init(params);
};
