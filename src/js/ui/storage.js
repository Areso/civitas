/**
 * Main Game storage panel object.
 * 
 * @param {type} params
 * @class {city_builder.panel}
 * @returns {city_builder.__constructor}
 */
city_builder.panel_storage = function (params) {
	
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
	this.id = 'storage';

	/**
	 * Localized title of the panel.
	 * 
	 * @type {String}
	 */
	this.title = city_builder.l('City Storage');

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
		this.core = params.core;
		var self = this;
		var el = '#panel-' + this.id;
		if (city_builder.ui.panel_exists(el)) {
			this.destroy();
		}
		this.core.console_log('creating panel with id `' + this.id + '`');
		var city = this.core.get_city();
		var resources = city.get_resources();
		var storage_space = city.get_storage_space();
		$('.ui').append(city_builder.ui.generic_panel_template.replace(/{id}/g, this.id).replace(/{title}/g, this.title));
		var out = '<div class="main-storage">';
		var main_storage = '';
		var extra_storage = '';
		for (var resource in city_builder.RESOURCES) {
			if (resource !== 'fame') {
				if ($.inArray(resource, city_builder.MAIN_RESOURCES) !== -1) {
					main_storage += city_builder.ui.resource_storage_el(resource, resources[resource].storage);
				} else {
					extra_storage += city_builder.ui.resource_storage_el(resource, resources[resource].storage);
				}
			}
		}
		out += main_storage;
		out += '</div>';
		out += '<div class="extra-storage hidden">';
		out += extra_storage;
		out += '</div>';
		out += '<div class="clearfix"></div>' +
				'<p>' + city_builder.l('Total storage space') + ': ' + storage_space.all + ', ' + city_builder.l('used') + ': <span class="citystorage">' + storage_space.occupied + '</span></p>' +
		'<div class="toolbar">' +
			'<a class="btn iblock toggle-storage" href="#">' + city_builder.l('Show More Goods') + '</a>' +
		'</div>';
		$(el + ' .contents').empty().append(out);
		$(el).on('click', '.close', function () {
			self.destroy();
			return false;
		}).on('click', '.toggle-storage', function () {
			if ($('.toggle-storage').html() === city_builder.l('Show Less Goods')) {
				$('.toggle-storage').html(city_builder.l('Show More Goods'));
			} else {
				$('.toggle-storage').html(city_builder.l('Show Less Goods'));
			}
			$('.extra-storage').toggle();
			return false;
		}).draggable({
			handle: 'header',
			containment: 'window',
			snap: '.panel',
			start: function() {
		        $(this).css({
		        	height: 'auto'
		        });
		    },
		    stop: function() {
		        $(this).css({
		        	height: 'auto'
		        });
		    }
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
