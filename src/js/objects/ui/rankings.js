/**
 * Main Game storage panel object.
 * 
 * @param {Object} params
 * @class {civitas.controls.panel_rankings}
 * @returns {civitas.controls.panel_rankings}
 */
civitas.controls.panel_rankings = function (params) {
	
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
	this.id = 'rankings';

	/**
	 * Localized title of the panel.
	 * 
	 * @type {String}
	 */
	this.title = civitas.l('Rankings');

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
	 * @returns {civitas.controls.panel_rankings}
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
		$(el).remove();
		$('.ui').append(civitas.ui.generic_panel_template
			.replace(/{id}/g, this.id)
			.replace(/{title}/g, this.title));
		this.refresh();
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
	 * @returns {civitas.controls.panel_rankings}
	 */
	this.refresh = function() {
		var el = '#panel-' + this.id;
		var ranking_list = [];
		var cities = this.core.get_cities();
		for (var i = 0; i < cities.length; i++) {
			ranking_list.push({
				name: cities[i].get_name(),
				score: cities[i].get_rank()
			});
		}
		ranking_list.sort(function(a, b) {
		    var keyA = new Date(a.score);
		    var keyB = new Date(b.score);
		    if (keyA > keyB) {
		    	return -1;
		    }
		    if (keyA < keyB) {
		    	return 1;
		    }
		    return 0;
		});
		var out = '<div class="rankings-list">' +
			'<dl>' +
			'<dt>' + civitas.l('City') + '</dt>' + 
			'<dd>' + civitas.l('Score') + '</dd>' +
			'</dl>';
		for (var i = 0; i < ranking_list.length; i++) {
			out += '<dt>' + ranking_list[i].name + '</dt><dd>' + ranking_list[i].score + '</dd>';
		}
		out += '</dl>' +
			'</div>';
		$(el + ' .contents').empty().append(out);
		return this;
	};

	// Fire up the constructor
	return this.__init(params);
};
