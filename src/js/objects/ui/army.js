/**
 * Main Game army panel object.
 * 
 * @param {Object} params
 * @class {civitas.controls.panel_army}
 * @returns {civitas.controls.panel_army}
 */
civitas.controls.panel_army = function (params) {

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
	this.id = 'army';

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
	 * @returns {civitas.controls.panel_army}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		var self = this;
		this.core = params.core;
		var el = '#panel-' + this.id;
		if (civitas.ui.panel_exists(el)) {
			this.destroy();
		}
		var army = params.data;
		this.core.console_log('creating panel with id `' + this.id + '`');
		$('.ui').append(civitas.ui.generic_panel_template
			.replace(/{id}/g, this.id)
			.replace(/{title}/g, army.name));
		$(el + ' .contents').append(civitas.ui.tabs(['Info', 'Soldiers', 'Ships']));
		$(el + ' #tab-info').append('<img class="avatar" src="' + civitas.ASSETS_URL + 'images/armies/' + army.icon + '.png" />' +
				'<p>' + army.description + '</p>');
		$(el + ' #tab-soldiers').append(civitas.ui.army_list(army));
		$(el + ' #tab-ships').append(civitas.ui.navy_list(army));
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
	 * @returns {civitas.controls.panel_army}
	 */
	this.refresh = function() {
		return this;
	};

	// Fire up the constructor
	return this.__constructor(params);
};
