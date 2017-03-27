/**
 * Main Game core object.
 * 
 * @class {city_builder.game}
 * @returns {city_builder.game}
 */
city_builder.game = function () {

	/**
	 * List of all the cities in the game.
	 * 
	 * @type {Array}
	 * @private
	 */
	this.cities = [];

	//this.worldmap = false;

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
	 * @type {city_builder.api}
	 * @public
	 */
	this.api = null;

	/**
	 * Pointer to an instance of the game Jailer object.
	 * 
	 * @type {city_builder.jailer}
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
	 * Pointer to an instance of the game history.
	 *
	 * @type {city_builder.history}
	 * @public
	 */
	this.history = null;

	/**
	 * Game difficulty.
	 *
	 * @type {Number}
	 * @private
	 */
	this.difficulty = city_builder.DIFFICULTY_LEVEL_EASY;

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
	 * @returns {city_builder.game}
	 */
	this.__constructor = function () {
		var clicked = false;
		var clickY, clickX;
		var self = this;
		this.history = new city_builder.history({
			core: this
		});
		this.jailer = new city_builder.jailer({
			core: this
		});
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
		var update_scroll_pos = function (e) {
			$(window).scrollTop($(window).scrollTop() + (clickY - e.pageY));
			$(window).scrollLeft($(window).scrollLeft() + (clickX - e.pageX));
		};
		this._setup_start_ui();
		this._setup_toolbar();
		if (localStorage.getItem('city_builder.data') !== null) {
			this.start_game();
		}
		$('.toolbar').on('click', '.do-options', function () {
			self.open_panel(new city_builder.panel_settings({
				core: self,
				id: 'settings',
				header: 'Game Settings'
			}));
			return false;
		}).on('click', '.do-worldmap', function () {
			self.open_panel(city_builder.panel_world({
				core: self
			}));
			return false;
		}).on('click', '.do-restart', function () {
			if (confirm('Are you sure you want to restart the game? You wll lose all progress!') === true) {
				localStorage.removeItem(city_builder.STORAGE_KEY + '.data');
				document.location.reload();
			}
			return false;
		}).on('click', '.do-help', function () {
			self.open_panel(new city_builder.panel_help({
				core: self
			}));
			return false;
		}).on('click', '.do-trades', function () {
			self.open_panel(new city_builder.panel_trades({
				core: self
			}));
			return false;
		}).on('click', '.do-rankings', function () {
			self.open_panel(new city_builder.panel_rankings({
				core: self
			}));
			return false;
		}).on('click', '.do-advisor', function () {
			self.open_panel(new city_builder.panel_advisor({
				core: self
			}));
			return false;
		}).on('click', '.do-storage', function () {
			self.open_panel(new city_builder.panel_storage({
				core: self
			}));
			return false;
		}).on('click', '.do-build', function () {
			self.open_panel(new city_builder.panel_buildings({
				core: self
			}));
			return false;
		});
		$('.console').on('click', '.down', function () {
			$('.console .contents').scrollTo('+=97px', 500);
		}).on('click', '.up', function () {
			$('.console .contents').scrollTo('-=97px', 500);
		});
		this.api = new city_builder.api({
			core: this
		});
		return this;
	};

	/**
	 * Open the UI panel.
	 *
	 * @param {city_builder.panel} panel
	 * @public
	 * @returns {city_builder.game}
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
	 * @returns {city_builder.game}
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
	 * @returns {city_builder.api}
	 * @public
	 */
	this.get_api = function() {
		return this.api;
	};
	
	/**
	 * Return a pointer to the Jailer object.
	 * 
	 * @public
	 * @returns {city_builder.jailer}
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
	 * @returns {city_builder.game}
	 */
	this.set_storage_data = function (key, value) {
		localStorage.setItem(city_builder.STORAGE_KEY + '.' + key, value);
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
		return localStorage.getItem(city_builder.STORAGE_KEY + '.' + key);
	};

	/**
	 * Set game settings.
	 * 
	 * @param {String} key
	 * @param {Mixed} value
	 * @public
	 * @returns {city_builder.game}
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
	 * @returns {city_builder.game}
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
	 * @returns {city_builder.game}
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
	 * @returns {city_builder.game.settings}
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
	 * @returns {city_builder.game}
	 */
	this.reset_black_market = function () {
		var total = 0;
		for (var item in this.black_market) {
			this.get_city().inc_coins_amount(this.black_market[item].price);
			total += this.black_market[item].price;
		}
		this.black_market = {};
		this.refresh_ui();
		$('#tab-blackmarket > .contents > table > tbody').empty();
		if (total > 0) {
			this.notify(this.get_city().get_name() + ' ' + city_builder.l('received') + ' ' + total + ' ' + city_builder.l('coins from the Black Market for selling goods.'), city_builder.l('Black Market'));
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
	 * @returns {city_builder.game}
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
	 * Setup the start screen UI.
	 * 
	 * @private
	 * @returns {city_builder.game}
	 */
	this._setup_start_ui = function () {
		var self = this;
		var avatar = 1;
		for (var i = 1; i < city_builder.CLIMATE_TYPES.length; i++) {
			$('.start .climate').append('<option value="' + city_builder['CLIMATE_TYPE_' + city_builder.CLIMATE_TYPES[i].toUpperCase()] + '">' + city_builder.CLIMATE_TYPES[i].capitalize() + '</option>');
		}
		for (var i = 1; i < city_builder.NATION_TYPES.length; i++) {
			$('.start .nation').append('<option value="' + city_builder['NATION_TYPE_' + city_builder.NATION_TYPES[i].toUpperCase()] + '">' + city_builder.NATION_TYPES[i].capitalize() + '</option>');
		}
		for (var i = 1; i <= city_builder.AVATARS; i++) {
			$('.start .avatar-select').append('<img src="' + city_builder.ASSETS_URL + 'images/avatars/avatar' + i + '.png" />');
		}
		$('.start').on('click', '.do-start', function () {
			var name = $('.start .name').val();
			var cityname = $('.start .cityname').val();
			var nation = $('.start .nation').val();
			var climate = $('.start .climate').val();
			var difficulty = $('.start .difficulty').val();
			if (name === '') {
				self.error('Enter your ruler name, for example <strong>Ramses</strong>.', 'Error', true);
				return false;
			}
			if (cityname === '') {
				self.error('Enter your city name, for example <strong>Alexandria</strong>.', 'Error', true);
				return false;
			}
			self.start_game(name, cityname, nation, climate, avatar, difficulty);
			return false;
		}).on('click', '.down', function () {
			if (avatar < city_builder.AVATARS) {
				avatar = avatar + 1;
			}
			$('.start .avatar-select').scrollTo('+=64px', 500);
		}).on('click', '.up', function () {
			if (avatar > 1) {
				avatar = avatar - 1;
			}
			$('.start .avatar-select').scrollTo('-=64px', 500);
		});
		return this;
	};

	/**
	 * Start the game.
	 * 
	 * @returns {city_builder.game}
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
		if (localStorage.getItem('city_builder.data') !== null) {
			data = this._load_main_city();
		} else {
			this._setup_main_city(name, cityname, nation, climate, avatar);
		}
		this.setup_neighbours(data);
		this.save();
		if (localStorage.getItem('city_builder.data') !== null) {
			//this._doDaily();
		}
		$('section.start').remove();
		$('header .cityname').html(this.get_city().get_name());
		$('header .cityavatar').css({
			'background-image': 'url(' + city_builder.ASSETS_URL + 'images/avatars/avatar' + this.get_city().get_avatar() + '.png)'
		});
		this.refresh_ui();
		setInterval(function () {
			self._do_daily();
		}, 12000);
		$('.tips').tipsy({
			gravity: $.fn.tipsy.autoNS,
			html: true
		});
		return this;
	};

	/**
	 * Set the current game date.
	 * 
	 * @public
	 * @param {Object} data
	 * @returns {city_builder.game}
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
	 * @returns {city_builder.game}
	 */
	this.setup_audio = function () {
		this.music = $('#music').get(0);
		this.music.volume = 0.2;
		if (city_builder.AUTOSTART_MUSIC === true) {
			this.music.play();
		}
		return this;
	};

	/**
	 * Get a pointer to the player's city.
	 * 
	 * @public
	 * @param {String} name
	 * @returns {city_builder.city}
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
	 * Load the main city data from the browser localstorage.
	 * 
	 * @private
	 * @returns {Object}
	 */
	this._load_main_city = function () {
		var data = JSON.parse(window.atob(localStorage.getItem('city_builder.data')));
		var my_city = new city_builder.city({
			name: data.name,
			data: {
				nationality: data.nationality,
				ruler: data.ruler,
				climate: data.climate,
				personality: city_builder.PERSONALITY_TYPE_BALANCED,
				avatar: data.avatar,
				level: data.level
			},
			core: this
		});
		my_city.import_data(data);
		this.cities.push(my_city);
		this.get_city()._create_buildings(data.buildings);
		return data;
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
	 * @returns {city_builder.game}
	 */
	this._setup_main_city = function (name, cityname, nation, climate, avatar) {
		var my_city = new city_builder.city({
			name: cityname,
			data: {
				nationality: nation,
				ruler: name,
				climate: climate,
				personality: city_builder.PERSONALITY_TYPE_BALANCED,
				avatar: avatar
			},
			core: this
		});
		this.cities.push(my_city);
		this.get_city()._create_buildings(city_builder.BUILDINGS_START);
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
			return city_builder.BUILDINGS[city_builder.BUILDINGS.findIndexM(handle)];
		} else if (typeof handle === 'number') {
			for (var i = 0; i < city_builder.BUILDINGS.length; i++) {
				if (city_builder.BUILDINGS[i].handle === handle) {
					return city_builder.BUILDINGS[i];
				}
			}
		} else {
			return false;
		}
	};

	/**
	 * Method that gets called each 'day'.
	 * 
	 * @private
	 * @returns {city_builder.game}
	 */
	this._do_daily = function () {
		this.day++;
		this.log('day ' + this.day_of_month + ' month ' + this.month + ' year ' + this.year);
		var buildings = this.get_city().get_buildings();
		for (var i = 0; i < buildings.length; i++) {
			if (typeof buildings[i] !== 'undefined') {
				buildings[i].process();
			}
		}
		var ev = city_builder.EVENTS[get_random(0, city_builder.EVENTS.length - 1)];
		ev.core = this;
		new city_builder.event(ev);
		this.calculate_storage();
		this.refresh_ui();
		this.day_of_month++;
		if (this.day_of_month > 30) {
			this._do_monthly();
		}
		if (this.day >= 360) {
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
	 * @returns {city_builder.game}
	 */
	this.refresh_panels = function() {
		var panels = this.get_panels();
		for (var x = 0; x < panels.length; x++) {
			panels[x].refresh();
		}
		return this;
	};

	/**
	 * Save the game data.
	 * 
	 * @public
	 * @returns {city_builder.game}
	 */
	this.save = function () {
		this.get_city().export_data(true);
		return this;
	};

	/**
	 * Open the help panel with the specified context and term.
	 *
	 * @public
	 * @param {String} ctxt
	 * @param {String} term
	 * @returns {city_builder_game} 
	 */
	this.help = function(ctxt, term) {
		this.open_panel(city_builder.panel_help({
			core: this,
			ctxt: ctxt,
			term: term
		}));
		return this;
	};

	/**
	 * Method that gets called each 'month'.
	 * 
	 * @private
	 * @returns {city_builder.game}
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
	 * @returns {city_builder.game}
	 */
	this._do_yearly = function () {
		var cities = this.get_cities();
		for (var i = 1; i < cities.length; i++) {
			cities[i].reset_trades();
			this.get_city().lower_influence(cities[i].get_name(), city_builder.YEARLY_INFLUENCE_LOSS);
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
	 * @returns {city_builder.game}
	 */
	this.log = function (message, error) {
		if (typeof message !== 'undefined') {
			$('.ui .console .contents').prepend('<div' + ((typeof error !== 'undefined' && error === true) ? ' class="error"' : '') + '>' + '<span>' + city_builder.utils.get_now() + '</span> - ' + message + '</div>');
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
	 * @returns {city_builder.game}
	 */
	this.console_log = function (message, error) {
		if (city_builder.DEBUG === true) {
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
	 * @returns {city_builder.game}
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
	 * @returns {city_builder.game}
	 * @private
	 */
	this._notify = function (settings) {
		var container, notty, hide, image, right, left, inner;
		settings = $.extend({
			title: undefined,
			content: undefined,
			timeout: 15000,
			img: city_builder.ASSETS_URL + 'images/ui/icon_notification_1.png',
			showTime: true,
			error: false,
			other: false
		}, settings);
		container = $(".notifications");
		if (!container.length) {
			container = $("<div>", {
				'class': "notifications"
			}).appendTo(document.body);
		}
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
			settings.img = city_builder.ASSETS_URL + 'images/ui/icon_notification_2.png';
		}
		if (settings.other === true) {
			notty.addClass('other');
			settings.img = city_builder.ASSETS_URL + 'images/ui/icon_notification_1.png';
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
		function time_since(time) {
			var time_formats = [[2, "One second", "1 second from now"], [60, "seconds", 1], [120, "One minute", "1 minute from now"], [3600, "minutes", 60], [7200, "One hour", "1 hour from now"], [86400, "hours", 3600], [172800, "One day", "tomorrow"], [604800, "days", 86400], [1209600, "One week", "next week"], [2419200, "weeks", 604800], [4838400, "One month", "next month"], [29030400, "months", 2419200], [58060800, "One year", "next year"], [2903040000, "years", 29030400], [5806080000, "One century", "next century"], [58060800000, "centuries", 2903040000]];
			var seconds = (new Date - time) / 1000;
			var list_choice = 1;
			if (seconds < 0) {
				seconds = Math.abs(seconds);
				list_choice = 1;
			}
			var i = 0, format;
			while (format = time_formats[i++]) {
				if (seconds < format[0]) {
					if (typeof format[2] === "string") {
						return format[list_choice];
					} else {
						return Math.floor(seconds / format[2]) + " " + format[1];
					}
				}
			}
			return time;
		}
		var timestamp = Number(new Date());
		var timeHTML = $("<div>", {
			html: "<strong>" + time_since(timestamp) + "</strong> ago"
		});
		timeHTML.addClass("time").attr("title", timestamp);
		timeHTML.appendTo(right);
		setInterval(function () {
			$(".time").each(function () {
				var timing = $(this).attr("title");
				$(this).html("<strong>" + time_since(timing) + "</strong> ago");
			});
		}, 4000);
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
	 * @returns {city_builder.game}
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
	this.calculate_storage = function () {
		var storage = this.get_city().get_storage_space();
		if (storage.occupied >= storage.all) {
			this.error('You ran out of storage space and all goods produced will be lost. Upgrade your warehouse or marketplace.', 'No storage space');
		} else if ((storage.all - storage.occupied) < 100) {
			this.error('You will soon run out of storage space and all goods produced will be lost. Upgrade your warehouse or marketplace.', 'Storage nearly full');
		}
		return storage;
	};

	/**
	 * Refresh all the UI information after a property change.
	 * 
	 * @public
	 * @returns {city_builder.game}
	 */
	this.refresh_ui = function () {
		var city = this.get_city();
		var storage_space = city.get_storage_space();
		var needed = city_builder.LEVELS[city.get_level()];
		$('.citylevel').html(city.get_level());
		$('.cityprestige').html(city.get_prestige_amount());
		for (var i = 0; i < city_builder.TOOLBAR_RESOURCES.length; i++) {
			var resource = city_builder.TOOLBAR_RESOURCES[i];
			var el = $('.top-panel .' + resource);
			if (typeof city.resources[resource] !== 'undefined') {
				el.attr('title', city.resources[resource].storage + ' ' + city.resources[resource].name);
			}
		}
		if (city.get_fame_amount() >= needed) {
			city.level_up();
		}
		$('header .cityfame > span').css({
			width: (city.get_fame_amount() * 100) / needed + '%'
		});
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
	 * Create all the other cities in the world.
	 * 
	 * @public
	 * @param {Object} data
	 * @returns {city_builder.game}
	 */
	this.setup_neighbours = function (data) {
		var new_city = null;
		for (var item in city_builder.CITIES) {
			new_city = new city_builder.city({
				name: item,
				data: city_builder.CITIES[item],
				core: this
			});
			//city._build(city_builder['CITY_BUILDINGS_' + city_builder.CLIMATE_TYPES[city_builder.CITIES[item].climate].toUpperCase()], true);
			//new_city._create_buildings(city_builder.BUILDINGS_ALL, true);
			new_city.setup_army(true);
			new_city.setup_navy(true);
			if (data !== null) {
				this.get_city().influence[item] = data.influence[item];
				new_city.trades = data.trades[item];
			} else {
				this.get_city().influence[item] = 50;
			}
			this.cities.push(new_city);
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
			data[cities[i].get_name()] = cities[i].get_trades();
		}
		return data;
	};

	/**
	 * Setup the top bar with the resources.
	 * 
	 * @private
	 * @returns {city_builder.game}
	 */
	this._setup_toolbar = function () {
		var _t = '';
		for (var i = 0; i < city_builder.TOOLBAR_RESOURCES.length; i++) {
			_t += '<span class="' + city_builder.TOOLBAR_RESOURCES[i] + '"></span>';
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
		return city_builder.VERSION;
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
	 * Get the difficulty level of the game.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_difficulty = function() {
		return this.difficulty;
	};

	// Fire up the constructor
	return this.__constructor();
};

$(document).ready(function () {
	new city_builder.game();
});
