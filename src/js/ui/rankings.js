/**
 * Main Game storage panel object.
 * 
 * @param {type} params
 * @class {city_builder.panel_rankings}
 * @returns {city_builder.panel_rankings}
 */
city_builder.panel_rankings = function (params) {
	
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
	this.id = 'rankings';

	/**
	 * Localized title of the panel.
	 * 
	 * @type {String}
	 */
	this.title = city_builder.l('Rankings');

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
		this.core = params.core;
		var self = this;
		var el = '#panel-' + this.id;
		if (city_builder.ui.panel_exists(el)) {
			this.destroy();
		}
		this.core.console_log('creating panel with id `' + this.id + '`');
		$(el).remove();
		$('.ui').append(city_builder.ui.generic_panel_template.replace(/{id}/g, this.id).replace(/{title}/g, this.title));
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
	 * @returns {city_builder.panel_building}
	 */
	this.refresh = function() {
		var el = '#panel-' + this.id;
		var ranking_list = [];
		for (var item in city_builder.CITIES) {
			ranking_list.push({
				name: item,
				score: this.get_ranking(item)
			});
		}
		ranking_list.push({
			name: this.core.get_city().get_name(),
			score: this.get_ranking(this.core.get_city())
		});
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
			'<dt>' + city_builder.l('City') + '</dt>' + 
			'<dd>' + city_builder.l('Score') + '</dd>' +
			'</dl>';
		for (var i = 0; i < ranking_list.length; i++) {
			out += '<dt>' + ranking_list[i].name + '</dt><dd>' + ranking_list[i].score + '</dd>';
		}
		out += '</dl>' +
			'</div>';
		$(el + ' .contents').empty().append(out);
		return this;
	};
	
	/**
	 * Retrieve the current ranking score for a city
	 *
	 * @public
	 * @returns {Number}
	 */
	this.get_ranking = function(city) {
		if (typeof city !== 'undefined' && typeof city === 'string') {
			return this.core.get_city(city).get_rank();
		}
		else if (typeof city !== 'undefined' && typeof city === 'object') {
			return city.get_rank();
		}
		else {
			return this.core.get_city().get_rank();
		}
	};

	// Fire up the constructor
	return this.__constructor(params);
};
