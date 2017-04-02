/**
 * Main Game core object.
 * 
 * @class {civitas.game}
 * @returns {civitas.game}
 */
civitas.game = function () {

	/**
	 * List of all the cities in the game.
	 * 
	 * @type {Array}
	 * @private
	 */
	this.cities = [];

	/**
	 * List of currently completed achievements.
	 *
	 * @private
	 * @type {Array}
	 */
	this.achievements = [];

	/**
	 * Pointer to the audio subsystem component.
	 * 
	 * @private
	 * @type {Object}
	 */
	this.music = null;

	/**
	 * Time day.
	 * 
	 * @type {Number}
	 * @private
	 */
	this.day = 1;

	/**
	 * Time year.
	 * 
	 * @type {Number}
	 * @private
	 */
	this.year = 1;

	/**
	 * Time month.
	 * 
	 * @type {Number}
	 * @private
	 */
	this.month = 1;

	/**
	 * Time day of month 1-30.
	 * 
	 * @type {Number}
	 * @private
	 */
	this.day_of_month = 1;

	/**
	 * Black Market data.
	 * 
	 * @public
	 * @type {Object}
	 */
	this.black_market = {};

	/**
	 * Pointer to an instance of the game API object.
	 * 
	 * @type {civitas.api}
	 * @public
	 */
	this.api = null;

	/**
	 * Pointer to an instance of the game Jailer object.
	 * 
	 * @type {civitas.jailer}
	 * @public
	 */
	this.jailer = null;

	/**
	 * Game settings
	 * 
	 * @type {Object}
	 * @private
	 */
	this.settings = {
		console: false,
		music: false
	};

	/**
	 * Is the game paused?
	 *
	 * @private
	 * @type {Boolean}
	 */
	this.paused = false;

	/**
	 * Pointer to an instance of the game history.
	 *
	 * @type {civitas.history}
	 * @public
	 */
	this.history = null;

	/**
	 * Game difficulty.
	 *
	 * @type {Number}
	 * @private
	 */
	this.difficulty = civitas.DIFFICULTY_EASY;

	/**
	 * Array containing the list of all open panels.
	 *
	 * @type {Array}
	 * @private
	 */
	this.panels = [];

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {civitas.game}
	 */
	this.__init = function () {
		var clicked = false;
		var clickY, clickX;
		var self = this;
		/*
		this.history = new civitas.modules.history({
			core: this
		});
		this.jailer = new civitas.modules.jailer({
			core: this
		});
		*/
		if (localStorage.getItem('civitas.data') === null) {
			this.open_start_window();
		}
		this.setup_audio();
		$('.game').on({
			mousemove: function (e) {
				clicked && update_scroll_pos(e);
			},
			mousedown: function (e) {
				clicked = true;
				clickY = e.pageY;
				clickX = e.pageX;
				$('html').css('cursor', '-moz-grab');
			},
			mouseup: function () {
				clicked = false;
				$('html').css('cursor', 'auto');
			}
		});
		$('.ui > footer').css({
			left: ($(window).width() / 2) - ($('.ui > footer').width() / 2)
		});
		var update_scroll_pos = function (e) {
			$(window).scrollTop($(window).scrollTop() + (clickY - e.pageY));
			$(window).scrollLeft($(window).scrollLeft() + (clickX - e.pageX));
		};
		this._setup_toolbar();
		if (localStorage.getItem('civitas.data') !== null) {
			this.start_game();
		}
		$('.toolbar').on('click', '.do-options', function () {
			self.open_panel(new civitas.controls.panel_settings({
				core: self,
				id: 'settings',
				header: 'Game Settings'
			}));
			return false;
		}).on('click', '.do-worldmap', function () {
			self.open_panel(civitas.controls.panel_world({
				core: self
			}));
			return false;
		}).on('click', '.do-help', function () {
			self.open_panel(new civitas.controls.panel_help({
				core: self
			}));
			return false;
		}).on('click', '.do-trades', function () {
			self.open_panel(new civitas.controls.panel_trades({
				core: self
			}));
			return false;
		}).on('click', '.do-rankings', function () {
			self.open_panel(new civitas.controls.panel_rankings({
				core: self
			}));
			return false;
		}).on('click', '.do-advisor', function () {
			self.open_panel(new civitas.controls.panel_advisor({
				core: self
			}));
			return false;
		}).on('click', '.do-storage', function () {
			self.open_panel(new civitas.controls.panel_storage({
				core: self
			}));
			return false;
		}).on('click', '.do-build', function () {
			self.open_panel(new civitas.controls.panel_buildings({
				core: self
			}));
			return false;
		});
		$('.console').on('click', '.down', function () {
			$('.console .contents').scrollTo('+=97px', 500);
		}).on('click', '.up', function () {
			$('.console .contents').scrollTo('-=97px', 500);
		});
		/*
		this.api = new civitas.modules.api({
			core: this
		});
		*/
		return this;
	};

	/**
	 * Open the UI panel.
	 *
	 * @param {civitas.panel} panel
	 * @public
	 * @returns {civitas.game}
	 */
	this.open_panel = function(panel) {
		this.panels.push(panel);
		return this;
	};

	/**
	 * Close the UI panel specified by its id.
	 *
	 * @public
	 * @param {String} id
	 * @returns {civitas.game}
	 */
	this.close_panel = function(id) {
		var panels = this.get_panels();
		for (var i = 0; i < panels.length; i++) {
			if (panels[i].id === id) {
				panels.splice(i, 1);
			}
		}
		return this;
	};

	/**
	 * Return a pointer to the API object.
	 * 
	 * @returns {civitas.api}
	 * @public
	 */
	this.get_api = function() {
		return this.api;
	};
	
	/**
	 * Return a pointer to the Jailer object.
	 * 
	 * @public
	 * @returns {civitas.jailer}
	 */
	this.get_jailer = function() {
		return this.jailer;
	};
	
	/**
	 * Add the specified resource amount and the total price to the
	 * Black Market goods list.
	 * 
	 * @public
	 * @param {String} resource
	 * @param {Number} amount
	 * @param {Number} price
	 * @returns {Object}
	 */
	this.add_black_market = function (resource, amount, price) {
		this.black_market[resource] = {
			resource: resource,
			amount: amount,
			price: price
		};
		return this.black_market;
	};

	/**
	 * Set game storage data.
	 * 
	 * @param {String} key
	 * @param {Mixed} value
	 * @public
	 * @returns {civitas.game}
	 */
	this.set_storage_data = function (key, value) {
		localStorage.setItem(civitas.STORAGE_KEY + '.' + key, value);
		return this;
	};

	/**
	 * Retrieve game storage data.
	 * 
	 * @param {String} key
	 * @public
	 * @returns {Mixed}
	 */
	this.get_storage_data = function (key) {
		return localStorage.getItem(civitas.STORAGE_KEY + '.' + key);
	};

	/**
	 * Set game settings.
	 * 
	 * @param {String} key
	 * @param {Mixed} value
	 * @public
	 * @returns {civitas.game}
	 */
	this.set_settings = function (key, value) {
		if (typeof value === 'undefined') {
			this.settings = key;
		} else {
			this.settings[key] = value;
		}
		return this;
	};

	/**
	 * Set music on/off.
	 * 
	 * @param {String} key
	 * @param {Mixed} value
	 * @public
	 * @returns {civitas.game}
	 */
	this.set_settings_music = function(value) {
		if (value === true) {
			this.music.play();
		} else {
			this.music.pause();
		}
		this.set_settings('music', value);
		return this;
	};

	/**
	 * Set console display on/off
	 * 
	 * @param {String} key
	 * @param {Mixed} value
	 * @public
	 * @returns {civitas.game}
	 */
	this.set_settings_console = function(value) {
		if (value === true) {
			$('aside.console').show();
		} else {
			$('aside.console').hide();
		}
		this.set_settings('console', value);
		return this;
	};

	/**
	 * Retrieve game settings.
	 * 
	 * @param {String} key
	 * @public
	 * @returns {civitas.game.settings}
	 */
	this.get_settings = function (key) {
		if (typeof key === 'undefined') {
			return this.settings;
		} else {
			return this.settings[key];
		}
	};

	/**
	 * Reset the Black Market goods.
	 * 
	 * @public
	 * @returns {civitas.game}
	 */
	this.reset_black_market = function () {
		var total = 0;
		for (var item in this.black_market) {
			this.get_city().inc_coins(this.black_market[item].price);
			total += this.black_market[item].price;
		}
		this.black_market = {};
		this.refresh_ui();
		$('#tab-blackmarket > .contents > table > tbody').empty();
		if (total > 0) {
			this.notify(this.get_city().get_name() + ' ' + civitas.l('received') + ' ' + total + ' ' + civitas.l('coins from the Black Market for selling goods.'), civitas.l('Black Market'));
		}
		return this;
	};

	/**
	 * Return the Black Market goods list.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_black_market = function () {
		return this.black_market;
	};

	/**
	 * Set the Black Market goods list to the specified value.
	 * 
	 * @public
	 * @param {Object} value
	 * @returns {civitas.game}
	 */
	this.set_black_market = function (value) {
		if (typeof value !== 'undefined') {
			this.black_market = value;
		} else {
			this.black_market = {};
		}
		return this;
	};

	/**
	 * Start the game.
	 * 
	 * @returns {civitas.game}
	 * @public
	 * @param {String} name
	 * @param {String} cityname
	 * @param {Number} nation
	 * @param {Number} climate
	 * @param {Number} avatar
	 * @param {Number} difficulty
	 */
	this.start_game = function (name, cityname, nation, climate, avatar, difficulty) {
		var self = this;
		var data = null;
		this.difficulty = parseInt(difficulty);
		if (localStorage.getItem('civitas.data') !== null) {
			data = this._load_main_city(this.import());
		} else {
			this._setup_main_city(name, cityname, nation, climate, avatar);
		}
		this.setup_neighbours(data);
		this.save();
		$('header .cityname').html(this.get_city().get_name());
		$('header .cityavatar').css({
			'background-image': 'url(' + civitas.ASSETS_URL + 'images/avatars/avatar' + this.get_city().get_ruler_avatar() + '.png)'
		});
		this.refresh_ui();
		setInterval(function () {
			if (!self.is_paused()) {
				self._do_daily();
			}
		}, 12000);
		$('.tips').tipsy({
			gravity: $.fn.tipsy.autoNS,
			html: true
		});
		$(document).keyup(function(e) {
			if (e.keyCode == 27 && !civitas.ui.window_exists('#window-options')) {
				self.show_loader();
				self.open_options_window();
			}
		});
		this.hide_loader();
		return this;
	};

	/**
	 * Pause the game.
	 *
	 * @public
	 * @returns {civitas.game}
	 */
	this.pause = function() {
		this.paused = true;
		return this;
	};

	/**
	 * Resume the game.
	 *
	 * @public
	 * @returns {civitas.game}
	 */
	this.unpause = function() {
		this.paused = false;
		return this;
	};

	/**
	 * Check if the game is paused.
	 *
	 * @public
	 * @returns {Boolean}
	 */
	this.is_paused = function() {
		return this.paused;
	};

	/**
	 * Show the game loader.
	 *
	 * @public
	 * @returns {civitas.game}
	 */
	this.show_loader = function() {
		$('.loading').show().tipsy({
			gravity: 'e'
		});
		return this;
	};

	/**
	 * Hide the game loader.
	 *
	 * @public
	 * @returns {civitas.game}
	 */
	this.hide_loader = function() {
		$('.loading').hide();
		return this;
	};

	/**
	 * Set the current game date.
	 * 
	 * @public
	 * @param {Object} data
	 * @returns {civitas.game}
	 */
	this.set_date_time = function (data) {
		this.day = data.day;
		this.month = data.month;
		this.year = data.year;
		this.day_of_month = data.day_of_month;
		return this;
	};

	/**
	 * Setup the audio part of the game.
	 * 
	 * @public
	 * @returns {civitas.game}
	 */
	this.setup_audio = function () {
		this.music = $('#music').get(0);
		this.music.volume = 0.2;
		if (civitas.AUTOSTART_MUSIC === true) {
			this.music.play();
		}
		return this;
	};

	/**
	 * Get a pointer to the player's city.
	 * 
	 * @public
	 * @param {String} name
	 * @returns {civitas.city}
	 */
	this.get_city = function (name) {
		if (typeof name !== 'undefined' && typeof name === 'string') {
			var cities = this.get_cities();
			for (var i = 0; i < cities.length; i++) {
				var city = cities[i];
				if (city.get_name() === name) {
					return city;
				}
			}
		} else {
			return this.cities[0];
		}
		return false;
	};

	/**
	 * Load the main city data.
	 * 
	 * @private
	 * @returns {Object|Boolean}
	 */
	this._load_main_city = function (data) {
		var player_city_data = data.cities[0];
		if (player_city_data) {
			player_city_data.core = this;
			var new_city = new civitas.objects.city(player_city_data);
			this.cities.push(new_city);
			new_city._create_buildings(player_city_data.buildings);
			return data;
		}
		return false;
	};

	/**
	 * Setup the main city.
	 * 
	 * @private
	 * @param {String} name
	 * @param {String} cityname
	 * @param {Number} nation
	 * @param {Number} climate
	 * @param {Number} avatar
	 * @returns {civitas.game}
	 */
	this._setup_main_city = function (name, cityname, nation, climate, avatar) {
		var difficulty = this.get_difficulty();
		var my_city = new civitas.objects.city({
			name: cityname,
			climate: climate,
			avatar: avatar,
			id: 99,
			player: true,
			ruler: {
				name: name,
				title: '',
				avatar: avatar,
				nationality: nation,
				personality: civitas.PERSONALITY_BALANCED
			},
			army_list: civitas.START_ARMY[difficulty - 1].army,
			navy_list: civitas.START_ARMY[difficulty - 1].navy,
			core: this
		});
		this.cities.push(my_city);
		this.get_city()._create_buildings(civitas.START_BUILDINGS);
		return this;
	};

	/**
	 * Get building data from the main configuration array.
	 * 
	 * @public
	 * @param {String|Number} handle
	 * @returns {Object}
	 */
	this.get_building_config_data = function (handle) {
		if (typeof handle === 'string') {
			return civitas.BUILDINGS[civitas.BUILDINGS.findIndexM(handle)];
		} else if (typeof handle === 'number') {
			for (var i = 0; i < civitas.BUILDINGS.length; i++) {
				if (civitas.BUILDINGS[i].handle === handle) {
					return civitas.BUILDINGS[i];
				}
			}
		} else {
			return false;
		}
	};

	/**
	 * Check if any events occured on this day.
	 *
	 * @public
	 * @returns {civitas.game}
	 */
	this.check_for_events = function() {
		var _event = civitas.EVENTS[civitas.utils.get_random(0, civitas.EVENTS.length - 1)];
		_event.core = this;
		new civitas.objects.event(_event);
		return this;
	};

	/**
	 * Process all buildings for materials, costs, etc.
	 *
	 * @public
	 * @returns {civitas.game}
	 */
	this.process_all_buildings = function() {
		var buildings = this.get_city().get_buildings();
		for (var i = 0; i < buildings.length; i++) {
			if (typeof buildings[i] !== 'undefined') {
				buildings[i].process();
			}
		}
		return this;
	};

	/**
	 * Method that gets called each 'day'.
	 * 
	 * @private
	 * @returns {civitas.game}
	 */
	this._do_daily = function () {
		this.day++;
		this.log('day ' + this.day_of_month + ' month ' + this.month + ' year ' + this.year);
		this.process_all_buildings();
		this.check_for_events();
		this.check_achievements();
		this.calc_storage();
		this.refresh_ui();
		this.day_of_month++;
		if (this.day_of_month > 30) {
			this._do_monthly();
		}
		if (this.day >= 361) {
			this._do_yearly();
			this.day = 1;
			this.month = 1;
		}
		this.save();
		this.refresh_panels();
		return this;
	};

	/**
	 * Force refresh of the UI panels open.
	 *
	 * @public
	 * @returns {civitas.game}
	 */
	this.refresh_panels = function() {
		var panels = this.get_panels();
		for (var x = 0; x < panels.length; x++) {
			panels[x].refresh();
		}
		this.refresh_toolbar();
		return this;
	};

	/**
	 * Save the game data.
	 * 
	 * @public
	 * @returns {civitas.game}
	 */
	this.save = function () {
		this.export(true);
		return this;
	};

	/**
	 * Open the help panel with the specified context and term.
	 *
	 * @public
	 * @param {String} context
	 * @param {String} term
	 * @returns {civitas_game} 
	 */
	this.help = function(context, term) {
		this.open_panel(civitas.controls.panel_help({
			core: this,
			context: context,
			term: term
		}));
		return this;
	};

	/**
	 * Method that gets called each 'month'.
	 * 
	 * @private
	 * @returns {civitas.game}
	 */
	this._do_monthly = function () {
		this.day_of_month = 1;
		this.month++;
		this.reset_black_market();
		return this;
	};

	/**
	 * Method that gets called each 'year'.
	 * 
	 * @private
	 * @returns {civitas.game}
	 */
	this._do_yearly = function () {
		var cities = this.get_cities();
		for (var i = 1; i < cities.length; i++) {
			cities[i].reset_trades();
			this.get_city().lower_influence(cities[i].get_id(), civitas.YEARLY_INFLUENCE_LOSS);
		}
		this.get_city().release_mercenaries();
		this.year++;
		return this;
	};

	/**
	 * Log data to the console.
	 * 
	 * @public
	 * @param {String} message
	 * @param {Boolean} error
	 * @returns {civitas.game}
	 */
	this.log = function (message, error) {
		if (typeof message !== 'undefined') {
			$('.ui .console .contents').prepend('<div' + ((typeof error !== 'undefined' && error === true) ? ' class="error"' : '') + '>' + '<span>' + civitas.utils.get_now() + '</span> - ' + message + '</div>');
		} else {
			$('.ui .console .contents').prepend('<div class="separator"></div>');
		}
		return this;
	};

	/**
	 * Log data to the browser console.
	 * 
	 * @param {String} message
	 * @param {Boolean} error
	 * @public
	 * @returns {civitas.game}
	 */
	this.console_log = function (message, error) {
		if (civitas.DEBUG === true) {
			console.log((typeof error === true ? 'APP error: ' : 'APP message: ') + message);
		}
		return this;
	};

	/**
	 * Return the game date in a more manageable form.
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_date = function () {
		return 'day ' + this.day_of_month + ' month ' + this.month + ' year ' + this.year;
	};

	/**
	 * Perform a normal notification in the game.
	 * 
	 * @public
	 * @param {String} message
	 * @param {String} title
	 * @param {Number} timeout
	 * @returns {civitas.game}
	 */
	this.notify = function (message, title, timeout) {
		this._notify({
			title: (typeof title !== 'undefined') ? title : 'Message',
			content: message,
			timeout: typeof timeout !== 'undefined' ? timeout : 15000
		});
		this.log(message);
		return this;
	};

	/**
	 * Internal function for performing an UI notification.
	 * 
	 * @param {type} settings
	 * @returns {civitas.game}
	 * @private
	 */
	this._notify = function (settings) {
		var container, notty, hide, image, right, left, inner, _container;
		settings = $.extend({
			title: undefined,
			content: undefined,
			timeout: 15000,
			img: civitas.ASSETS_URL + 'images/ui/icon_notification_1.png',
			showTime: true,
			error: false,
			achievement: false,
			other: false
		}, settings);
		if (settings.achievement === false) {
			_container = "notifications";
		} else {
			_container = "achievements-notifications";
		}
		container = $("." + _container);
		if (!container.length) {
			container = $("<div>", {
				'class': _container
			}).appendTo(document.body);
		}
		$('.achievements-notifications').css({
			left: ($(window).width() / 2) - (container.width() / 2)
		});
		notty = $("<div>");
		notty.addClass("notty");
		hide = $("<div>", {
			click: function () {
				$(this).parent().delay(300).queue(function () {
					$(this).clearQueue();
					$(this).remove();
				});
			},
			touchstart: function () {
				$(this).parent().delay(300).queue(function () {
					$(this).clearQueue();
					$(this).remove();
				});
			}
		});
		hide.addClass("hide");
		if (settings.error === true) {
			notty.addClass('error');
			settings.img = civitas.ASSETS_URL + 'images/ui/icon_notification_2.png';
		}
		if (settings.other === true) {
			notty.addClass('other');
			settings.img = civitas.ASSETS_URL + 'images/ui/icon_notification_1.png';
		}
		if (settings.achievement === true) {
			notty.addClass('achievement');
			settings.img = civitas.ASSETS_URL + 'images/ui/icon_achievement.png';
		}
		image = $("<div>", {
			style: "background: url('" + settings.img + "')"
		});
		image.addClass("img");
		left = $("<div class='left'>");
		right = $("<div class='right'>");
		var html_title = "<h2>" + settings.title + "</h2>";
		var html_content = settings.content;
		inner = $("<div>", {
			html: html_title + html_content
		});
		inner.addClass("inner");
		inner.appendTo(right);
		image.appendTo(left);
		left.appendTo(notty);
		right.appendTo(notty);
		hide.appendTo(notty);
		if (settings.achievement === false) {
			var timestamp = Number(new Date());
			var timeHTML = $("<div>", {
				html: "<strong>" + civitas.utils.time_since(timestamp) + "</strong> ago"
			});
			timeHTML.addClass("time").attr("title", timestamp);
			timeHTML.appendTo(right);
			setInterval(function () {
				$(".time").each(function () {
					var timing = $(this).attr("title");
					$(this).html("<strong>" + civitas.utils.time_since(timing) + "</strong> ago");
				});
			}, 4000);
		}
		notty.hover(function () {
			hide.show();
		}, function () {
			hide.hide();
		});
		notty.prependTo(container);
		notty.show();
		if (settings.timeout) {
			setTimeout(function () {
				notty.delay(300).queue(function () {
					$(this).clearQueue();
					$(this).remove();
				});
			}, settings.timeout);
		}
		return this;
	};

	/**
	 * Perform an error notification in the game.
	 * 
	 * @public
	 * @param {String} message
	 * @param {String} title
	 * @param {Boolean} no_console
	 * @returns {civitas.game}
	 */
	this.error = function (message, title, no_console) {
		this._notify({
			title: (typeof title !== 'undefined') ? title : 'Error',
			error: true,
			content: message
		});
		if (typeof no_console === 'undefined' || no_console === false) {
			this.log(message, true);
		}
		return this;
	};

	/**
	 * Calculate and return the total and free storage space in the main city.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.calc_storage = function () {
		var storage = this.get_city().get_storage_space();
		if (storage.occupied >= storage.all) {
			this.error('You ran out of storage space and all goods produced will be lost. Upgrade your warehouse or marketplace.', 'No storage space');
		} else if ((storage.all - storage.occupied) < 100) {
			this.error('You will soon run out of storage space and all goods produced will be lost. Upgrade your warehouse or marketplace.', 'Storage nearly full');
		}
		return storage;
	};

	/**
	 * Refresh the resources toolbar.
	 *
	 * @public
	 * @returns {civitas.game}
	 */
	this.refresh_toolbar = function() {
		var city = this.get_city();
		if (typeof city !== 'undefined') {
			var resources = city.get_resources();
			for (var i = 0; i < civitas.TOOLBAR_RESOURCES.length; i++) {
				var resource = civitas.TOOLBAR_RESOURCES[i];
				var el = $('.top-panel .' + resource);
				if (typeof resources[resource] !== 'undefined') {
					el.attr('title', resources[resource] + ' ' + civitas.utils.get_resource_name(resource));
				}
			}
		}
		return this;
	};

	/**
	 * Refresh all the UI information after a property change.
	 * 
	 * @public
	 * @returns {civitas.game}
	 */
	this.refresh_ui = function () {
		var city = this.get_city();
		if (typeof city !== 'undefined') {
			var storage_space = city.get_storage_space();
			var needed = civitas.LEVELS[city.get_level()];
			$('.citylevel').html(city.get_level());
			$('.cityprestige').html(city.get_prestige());
			this.refresh_toolbar();
			if (city.get_fame() >= needed) {
				city.level_up();
				needed = civitas.LEVELS[city.get_level()];
			}
			$('header .cityfame > span').css({
				width: Math.floor((city.get_fame() * 100) / needed) + '%'
			});
		}
		$('.top-panel > span').tipsy({
			gravity: 'n'
		});
		return this;
	};

	/**
	 * Get the list of all the cities in game.
	 * 
	 * @public
	 * @returns {Array}
	 */
	this.get_cities = function () {
		return this.cities;
	};

	/**
	 * Import game data.
	 *
	 * @public
	 * @returns {Object}
	 */
	this.import = function() {
		var data = JSON.parse(window.atob(localStorage.getItem('civitas.data')));
		this.set_difficulty(data.difficulty);
		this.set_achievements(data.achievements);
		this.set_date_time(data.date_time);
		this.set_black_market(data.black_market);
		this.set_settings_music(data.settings.music);
		this.set_settings_console(data.settings.console);
		return data;
	};

	/**
	 * Export game data.
	 *
	 * @public
	 * @param {Boolean} to_local_storage
	 * @returns {Object}
	 */
	this.export = function(to_local_storage) {
		var city = this.get_city();
		var cities_list = [];
		for (var i = 0; i < this.cities.length; i++) {
			cities_list.push(this.cities[i].export());
		}
		var data = {
			cities: cities_list,
			difficulty: this.get_difficulty(),
			achievements: this.get_achievements(),
			black_market: this.get_black_market(),
			date_time: {
				day: this.day,
				month: this.month,
				year: this.year,
				day_of_month: this.day_of_month
			},
			settings: this.get_settings()
		};
		if (to_local_storage === true) {
			localStorage.setItem('civitas.data', window.btoa(JSON.stringify(data)));
		}
		return data;
	};

	/**
	 * Create all the other cities in the world.
	 * 
	 * @public
	 * @param {Object} data
	 * @returns {civitas.game}
	 */
	this.setup_neighbours = function (data) {
		var new_city = null;
		var city_data = null;
		if (data !== null) {
			for (var i = 1; i < data.cities.length; i++) {
				city_data = data.cities[i];
				city_data.core = this;
				new_city = new civitas.objects.city(city_data);
				var climate = new_city.get_climate();
				var climate_buildings = 'CITY_BUILDINGS_' + climate.name.toUpperCase();
				new_city._create_buildings(civitas[climate_buildings], true);
				this.cities.push(new_city);
			}
		} else {
			for (var item in civitas.CITIES) {
				item = parseInt(item);
				var ruler = civitas.utils.get_random_unique(civitas.RULERS);
				city_data = civitas.CITIES[item];
				new_city = new civitas.objects.city({
					core: this,
					id: item,
					name: civitas.utils.get_random_unique(civitas.CITY_NAMES),
					player: false,
					level: city_data.level,
					climate: city_data.climate,
					ruler: ruler,
					resources: city_data.resources,
					icon: city_data.icon,
					army_list: city_data.army,
					navy_list: city_data.navy
				});
				var climate = new_city.get_climate();
				var climate_buildings = 'CITY_BUILDINGS_' + climate.name.toUpperCase();
				new_city._create_buildings(civitas[climate_buildings], true);
				this.get_city().influence[item] = 50;
				this.cities.push(new_city);
			}
		}
		return this;
	};

	/**
	 * Get the list of imports and exports from all the world cities (except main).
	 * 
	 * @private
	 * @returns {Object}
	 */
	this._get_neighbours_trades = function () {
		var data = {};
		var cities = this.get_cities();
		for (var i = 1; i < cities.length; i++) {
			data[cities[i].get_id()] = cities[i].get_trades();
		}
		return data;
	};

	/**
	 * Setup the top bar with the resources.
	 * 
	 * @private
	 * @returns {civitas.game}
	 */
	this._setup_toolbar = function () {
		var _t = '';
		for (var i = 0; i < civitas.TOOLBAR_RESOURCES.length; i++) {
			_t += '<span class="' + civitas.TOOLBAR_RESOURCES[i] + '"></span>';
		}
		$('.top-panel').empty().append(_t);
		return this;
	};

	/**
	 * Get the version of the game.
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_version = function() {
		return civitas.VERSION;
	};
	
	/**
	 * Get the panels open in the game.
	 * 
	 * @public
	 * @returns {Array}
	 */
	this.get_panels = function() {
		return this.panels;
	};

	/**
	 * Set the difficulty level of the game.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.set_difficulty = function(value) {
		this.difficulty = value;
		return this;
	};

	/**
	 * Get the difficulty level of the game.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_difficulty = function() {
		return this.difficulty;
	};

	/**
	 * Check for any achievements completion.
	 *
	 * @public
	 * @returns {civitas.game}
	 */
	this.check_achievements = function() {
		var achievement;
		var condition;
		var city = this.get_city();
		for (var i = 0; i < civitas.ACHIEVEMENTS.length; i++) {
			achievement = civitas.ACHIEVEMENTS[i];
			for (var z = 0; z < civitas.ACHIEVEMENTS[i].conditions.length; z++) {
				var id = civitas.ACHIEVEMENTS[i].id;
				if (!this.has_achievement(achievement)) {
					condition = achievement.conditions[z];
					if (typeof condition.city_level !== 'undefined') {
						if (city.get_level() === condition.city_level) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.soldiers !== 'undefined') {
						var army = city.get_army_total();
						if (army.total >= condition.soldiers) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.ships !== 'undefined') {
						var navy = city.get_navy_total();
						if (navy.total >= condition.ships) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.coins !== 'undefined') {
						if (city.get_coins() >= condition.coins) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.research !== 'undefined') {
						if (city.get_research() >= condition.research) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.prestige !== 'undefined') {
						if (city.get_prestige() >= condition.prestige) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.espionage !== 'undefined') {
						if (city.get_espionage() >= condition.espionage) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.buildings !== 'undefined') {
						if (typeof condition.buildings === 'object') {
							var good = true;
							for (var s = 0; s < condition.buildings.length; s++) {
								if (!city.is_building_built(condition.buildings[s])) {
									good = false;
									break;
								}
							}
							if (good === true) {
								this.achievement(achievement);
							}
						} else {
							for (var s = 0; s < city.buildings_list.length; s++) {
								if (city.buildings_list[s].handle === condition.buildings) {
									this.achievement(achievement);
									break;
								}
							}
						}
					}
					if (typeof condition.resources !== 'undefined') {
						var good = true;
						for (var s = 0; s < condition.resources.length; s++) {
							for (var item in condition.resources[s]) {
								var amount = city.resources[item];
								if (amount < condition.resources[s][item]) {
									good = false;
									break;
								}
							}
						}
						if (good === true) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.storage !== 'undefined') {
						if (condition.storage === 0) {
							if (!city.has_storage_space()) {
								this.achievement(achievement);
							}
						}
					}
					if (typeof condition.achievements !== 'undefined') {
						if (condition.achievements === this.achievements.length) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.mercenary !== 'undefined') {
						var merc = city.get_mercenary();
						if (merc.length >= condition.mercenary) {
							this.achievement(achievement);
						}
					}
				}
			}
		}
		return this;
	};

	/**
	 * Perform an achievement notification in the game.
	 * 
	 * @public
	 * @param {Object} achievement
	 * @returns {civitas.game}
	 */
	this.achievement = function (achievement) {
		this.achievements.push({
			id: achievement.id,
			date: + new Date()
		});
		this._notify({
			title: 'Achievement Completed',
			other: true,
			achievement: true,
			content: achievement.description,
			timeout: false
		});
		return this;
	};

	/**
	 * Check if the current player has the achievement specified by its id.
	 *
	 * @public
	 * @param {Object} achievement
	 * @returns {Boolean}
	 */
	this.has_achievement = function(achievement) {
		for (var i = 0; i < this.achievements.length; i++) {
			if (this.achievements[i].id === achievement.id) {
				return true;
			}
		}
		return false;
	};

	/**
	 * Return a pointer to an existing achievement, searching by id.
	 *
	 * @public
	 * @param {Number} id
	 * @returns {Object|Boolean}
	 */
	this.get_achievement_by_id = function(id) {
		for (var i = 0; i < civitas.ACHIEVEMENTS.length; i++) {
			if (civitas.ACHIEVEMENTS[i].id === id) {
				return civitas.ACHIEVEMENTS[i];
			}
		}
		return false;
	};

	/**
	 * Set the achievements to the specified value.
	 *
	 * @public
	 * @param {Array} value
	 * @returns {civitas.game}
	 */
	this.set_achievements = function(value) {
		this.achievements = value;
		return this;
	};

	/**
	 * Return the completed achievements.
	 *
	 * @public
	 * @returns {Array}
	 */
	this.get_achievements = function() {
		return this.achievements;
	};

	// Fire up the constructor
	return this.__init();
};

$(document).ready(function () {
	new civitas.game();
});
