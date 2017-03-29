/**
 * Declare war to another city panel object.
 * 
 * @param {Object} params
 * @class {civitas.controls.panel_declare_war}
 * @returns {civitas.controls.panel_declare_war}
 */
civitas.controls.panel_declare_war = function (params) {
	
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
	this.id = 'declarewar';

	/**
	 * Localized title of the panel.
	 * 
	 * @type {String}
	 */
	this.title = civitas.l('Declare War');

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
	 * @returns {civitas.controls.panel_declare_war}
	 * @param {Object} params
	 */
	this.__init = function (params) {
		this.core = params.core;
		var self = this;
		var el = '#panel-' + this.id;
		if (civitas.ui.panel_exists(el)) {
			this.destroy();
		}
		this.core.console_log('creating panel with id `' + this.id + '`');
		var city = this.core.get_city();
		var otherCity = params.data;
		$('.ui').append(civitas.ui.generic_panel_template
			.replace(/{id}/g, this.id)
			.replace(/{title}/g, this.title));
		var out = '';
		
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
	 * @returns {civitas.controls.panel_declare_war}
	 */
	this.refresh = function() {
		return this;
	};
	
	// Fire up the constructor
	return this.__init(params);
};
