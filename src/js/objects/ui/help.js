/**
 * Main Game help panel object.
 * 
 * @param {Object} params
 * @class {civitas.controls.panel_help}
 * @returns {civitas.controls.panel_help}
 */
civitas.controls.panel_help = function (params) {

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
	this.id = 'help';

	/**
	 * Help term to search for.
	 *
	 * @type {String}
	 */
	this.term = null;

	/**
	 * Help context, for ex 'building' or 'army'.
	 *
	 * @type {String}
	 */
	this.context = null;

	/**
	 * Localized title of the panel.
	 * 
	 * @type {String}
	 */
	this.title = civitas.l('Help');

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
	 * @returns {civitas.controls.panel_help}
	 * @param {Object} params
	 */
	this.__init = function (params) {
		this.core = params.core;
		this.term = params.term;
		this.context = params.context;
		var el = '#panel-' + this.id;
		var self = this;
		if (civitas.ui.panel_exists(el)) {
			this.destroy();
		}
		this.core.console_log('creating panel with id `' + this.id + '`');
		$('.ui').append(civitas.ui.generic_panel_template
			.replace(/{id}/g, this.id));
		var title = '';
		switch (this.context) {
			case 'building':
				var data = this.core.get_city().get_building_by_handle(this.term);
				title = data.get_name();
				break;
		}
		$(el + ' header .title').html(title !== '' ? civitas.l('Help about ') + title : civitas.l('Help'));
		var _t = '';
		
		$(el + ' .contents').append(_t);
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
	 * @returns {civitas.controls.panel_help}
	 */
	this.refresh = function() {
		return this;
	};
	
	// Fire up the constructor
	return this.__init(params);
};
