/**
 * Main Game core object.
 * 
 * @class {civitas.game}
 * @returns {civitas.game}
 */
civitas.game = function () {

	/**
	 * List of all the settlements in the game.
	 * 
	 * @type {Array}
	 * @private
	 */
	this.settlements = [];

	/**
	 * List of game campaigns (caravans and armies).
	 *
	 * @private
	 * @type {Array}
	 */
	this.campaigns = [];

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
	 * Game worldmap.
	 *
	 * @type {Number}
	 * @private
	 */
	this.worldmap = 1;

	/**
	 * Game mode, single player or multi player.
	 *
	 * @type {Number}
	 * @private
	 */
	this.mode = civitas.MODE_SINGLEPLAYER;

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {civitas.game}
	 */
	this.__init = function () {
		this._build_ui();
		this._setup_audio();
		this._setup_ui();
		if (this.get_storage_data() === false) {
			this.open_window(civitas.WINDOW_OPTIONS);
		} else {
			this.start_game();
		}
		return this;
	};

	/**
	 * Return the UI panel specified by its id.
	 *
	 * @public
	 * @param {String} id
	 * @returns {civitas.game}
	 */
	this.get_panel = function(id) {
		var panels = this.get_panels();
		for (var i = 0; i < panels.length; i++) {
			if (panels[i].id === id) {
				return panels[i];
			}
		}
		return false;
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
		if (typeof this.black_market[resource] !== 'undefined') {
			var old = this.black_market[resource];
			this.black_market[resource] = {
				resource: resource,
				amount: old.amount + amount,
				price: old.price + price
			};
		} else {
			this.black_market[resource] = {
				resource: resource,
				amount: amount,
				price: price
			};
		}
		return this.black_market;
	};

	/**
	 * Swap game storage data between two keys.
	 * 
	 * @param {String} from
	 * @param {String} to
	 * @public
	 * @returns {Boolean}
	 */
	this.swap_storage_data = function(from, to) {
		var data = this.get_storage_data(from);
		if (data !== false) {
			this.set_storage_data(to, data);
			return true;
		}
		return false;
	};

	/**
	 * Reset (empty) game storage data.
	 * 
	 * @param {String} key
	 * @public
	 * @returns {civitas.game}
	 */
	this.reset_storage_data = function(key) {
		if (typeof key === 'undefined') {
			key = 'live';
		}
		localStorage.removeItem(civitas.STORAGE_KEY + '.' + key);
		return this;
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
		localStorage.setItem(civitas.STORAGE_KEY + '.' + key, window.btoa(JSON.stringify(value)));
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
		if (typeof key === 'undefined') {
			key = 'live';
		}
		if (localStorage.getItem(civitas.STORAGE_KEY + '.' + key) !== null) {
			return JSON.parse(window.atob(localStorage.getItem(civitas.STORAGE_KEY + '.' + key)));
		} else {
			return false;
		}
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
	 * @private
	 * @returns {civitas.game}
	 */
	this._reset_black_market = function () {
		var total = 0;
		for (var item in this.black_market) {
			this.get_settlement().inc_coins(this.black_market[item].price);
			total += this.black_market[item].price;
		}
		this.black_market = {};
		this.refresh();
		$('#tab-blackmarket > .contents > table > tbody').empty();
		if (total > 0) {
			this.notify(this.get_settlement().get_name() + ' ' + civitas.l('received') + ' ' + total + ' ' + civitas.l('coins from the Black Market for selling goods.'), civitas.l('Black Market'));
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
	 * Build the game UI.
	 *
	 * @private
	 * @returns {civitas.game}
	 */
	this._build_ui = function() {
		var out = '<section class="ui">' +
			'<header>' +
				'<div class="cityavatar"></div>' +
				'<div class="cityclock">' +
					'<div class="container">' +
						'<div class="hand"></div>' +
					'</div>' +
				'</div>' +
				'<span title="City level" class="tips citylevel"></span>' +
				'<span title="City prestige" class="tips cityprestige"></span>' +
				'<div title="City name" class="tips cityname"></div>' +
				'<div title="City fame" class="tips cityfame">' +
					'<span></span>' +
				'</div>' +
				'<div class="top-panel"></div>' +
			'</header>' +
			'<aside class="console">' +
				'<div class="scrollbar">' +
					'<div class="up"></div>' +
					'<div class="down"></div>' +
				'</div>' +
				'<div class="contents"></div>' +
			'</aside>' +
			'<section class="game"></section>' +
			'<footer>' +
				'<div class="toolbar">' +
					'<div class="tips do-build" title="' + civitas.l('Buildings') + '"></div>' +
					'<div class="tips do-storage" title="' + civitas.l('Storage Space') + '"></div>' +
					'<div class="tips do-trades" title="' + civitas.l('Trades') + '"></div>' +
					'<div class="tips do-council" title="' + civitas.l('City Council') + '"></div>' +
					'<div class="tips do-ranks" title="' + civitas.l('Ranks') + '"></div>' +
					'<div class="tips do-worldmap" title="' + civitas.l('World Map') + '"></div>' +
					'<div class="" title=""></div>' +
					'<div class="" title=""></div>' +
					'<div class="tips do-help" title="' + civitas.l('Help') + '"></div>' +
				'</div>' +
			'</footer>' +
		'</section>' +
		'<audio id="music" loop>' +
			'<source src="music/track1.mp3" type="audio/mpeg">' +
		'</audio>' +
		'<div title="' + civitas.l('Game is doing stuff in the background.') + '" class="loading"></div>';
		$('body').empty().append(out);
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
		$('.ui header .cityclock .container').css({
			animation: 'rotate ' + civitas.SECONDS_TO_DAY + 's infinite steps(10)'
		});
		var self = this;
		var data = null;
		this.difficulty = parseInt(difficulty);
		this.worldmap = civitas.utils.get_random(1, civitas.WORLDMAPS);
		if (this.get_storage_data() !== false) {
			data = this._load_settlement(this.import());
		} else {
			this._create_settlement(name, cityname, nation, climate, avatar);
		}
		this._setup_neighbours(data);
		this._setup_villages(data);
		this.save();
		$('header .cityname').html(this.get_settlement().get_name());
		$('header .cityavatar').css({
			'background-image': 'url(' + civitas.ASSETS_URL + 'images/avatars/avatar' + this.get_settlement().get_ruler_avatar() + '.png)'
		});
		this.refresh();
		var seconds = 1;
		setInterval(function () {
			if (!self.is_paused() && seconds === civitas.SECONDS_TO_DAY) {
				self._do_daily();
				seconds = 1;
			} else if (!self.is_paused()) {
				seconds++;
			}
		}, 1000);
		$(document).keyup(function(e) {
			if (e.keyCode == 27 && !civitas.ui.window_exists('#window-options')) {
				self.show_loader();
				self.open_window(civitas.WINDOW_OPTIONS);
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
		$('.ui header .cityclock .container').css({
			animation: 'none'
		});
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
		$('.ui header .cityclock .container').css({
			animation: 'rotate ' + civitas.SECONDS_TO_DAY + 's infinite steps(10)'
		});
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
	 * @private
	 * @returns {civitas.game}
	 */
	this._setup_audio = function () {
		this.music = $('#music').get(0);
		this.music.volume = 0.2;
		if (civitas.AUTOSTART_MUSIC === true) {
			this.music.play();
		}
		return this;
	};

	/**
	 * Get a pointer to the player's settlement.
	 * 
	 * @public
	 * @param {String} name
	 * @returns {civitas.settlement}
	 */
	this.get_settlement = function (name) {
		if (typeof name !== 'undefined' && typeof name === 'string') {
			var settlements = this.get_settlements();
			for (var i = 0; i < settlements.length; i++) {
				var settlement = settlements[i];
				if (settlement.get_name() === name) {
					return settlement;
				}
			}
		} else if (typeof name !== 'undefined' && typeof name === 'number') {
			var settlements = this.get_settlements();
			for (var i = 0; i < settlements.length; i++) {
				var settlement = settlements[i];
				if (settlement.get_id() === name) {
					return settlement;
				}
			}
		} else {
			return this.settlements[0];
		}
		return false;
	};

	/**
	 * Load the main settlement data.
	 * 
	 * @private
	 * @returns {Object|Boolean}
	 */
	this._load_settlement = function (data) {
		var player_settlement_data = data.settlements[0];
		if (player_settlement_data) {
			player_settlement_data.core = this;
			var new_settlement = new civitas.objects.settlement(player_settlement_data);
			this.settlements.push(new_settlement);
			new_settlement._create_buildings(player_settlement_data.buildings);
			return data;
		}
		return false;
	};

	/**
	 * Setup the main settlement.
	 * 
	 * @private
	 * @param {String} name
	 * @param {String} cityname
	 * @param {Number} nation
	 * @param {Number} climate
	 * @param {Number} avatar
	 * @returns {civitas.game}
	 */
	this._create_settlement = function (name, cityname, nation, climate, avatar) {
		var difficulty = this.get_difficulty();
		var my_settlement = new civitas.objects.settlement({
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
		this.settlements.push(my_settlement);
		this.get_settlement()._create_buildings(civitas.START_BUILDINGS);
		return this;
	};

	/**
	 * Get building data from the main configuration array.
	 * 
	 * @public
	 * @param {String|Number} handle
	 * @returns {Object|Boolean}
	 */
	this.get_building_config_data = function (handle) {
		if (typeof handle === 'string') {
			return civitas.BUILDINGS[civitas.BUILDINGS.findIndexM(handle)];
		} else if (typeof handle === 'number') {
			return civitas.BUILDINGS[handle];
		}
		return false;
	};

	/**
	 * Check if any events occured on this day.
	 *
	 * @private
	 * @returns {civitas.game}
	 */
	this._check_for_events = function() {
		var event = civitas.EVENTS[civitas.utils.get_random(0, civitas.EVENTS.length - 1)];
		event.core = this;
		new civitas.objects.event(event);
		return this;
	};

	/**
	 * Process all buildings for materials, costs, etc.
	 *
	 * @public
	 * @returns {civitas.game}
	 */
	this.process_all_buildings = function() {
		var buildings = this.get_settlement().get_buildings();
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
		this._check_for_events();
		this.calc_storage();
		this.advance_campaigns();
		this.day_of_month++;
		if (this.day_of_month > 30) {
			this._do_monthly();
		}
		if (this.day >= 361) {
			this._do_yearly();
			this.day = 1;
			this.month = 1;
		}
		this.check_achievements();
		this.save();
		this.refresh();
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
		if (this.month === 3 || this.month === 6 || this.month === 9 || this.month === 12) {
			this._do_quarterly();
		}
		this._reset_black_market();
		return this;
	};

	this._do_quarterly = function() {
		this.refresh_trades();
		return this;
	};

	/**
	 * Refresh the UI, panels and save game.
	 *
	 * @public
	 * @returns {civitas.game}
	 */
	this.save_and_refresh = function() {
		this.save();
		this.refresh();
		return this;
	};

	/**
	 * Refresh the UI and panels.
	 *
	 * @public
	 * @returns {civitas.game}
	 */
	this.refresh = function() {
		this.refresh_panels();
		this.refresh_toolbar();
		this.refresh_ui();
		$('.tipsy').remove();
		$('.tips').tipsy({
			gravity: $.fn.tipsy.autoNS,
			html: true
		});
		$('.top-panel > span').tipsy({
			gravity: 'n'
		});
		return this;
	};

	/**
	 * Refresh the resources toolbar.
	 *
	 * @public
	 * @returns {civitas.game}
	 */
	this.refresh_toolbar = function() {
		var settlement = this.get_settlement();
		if (typeof settlement !== 'undefined') {
			var resources = settlement.get_resources();
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
		var settlement = this.get_settlement();
		if (typeof settlement !== 'undefined') {
			var storage_space = settlement.get_storage_space();
			var needed = civitas.LEVELS[settlement.get_level()];
			$('.citylevel').html(settlement.get_level());
			$('.cityprestige').html(settlement.get_prestige());
			if (settlement.get_fame() >= needed) {
				settlement.level_up();
				needed = civitas.LEVELS[settlement.get_level()];
			}
			$('header .cityfame > span').css({
				width: Math.floor((settlement.get_fame() * 100) / needed) + '%'
			});
		}
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
			panels[x].on_refresh();
		}
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
		this.open_panel(civitas.PANEL_HELP, {
			context: context,
			term: term
		});
		return this;
	};

	/**
	 * Refresh the world trades.
	 * 
	 * @public
	 * @returns {civitas.game}
	 */
	this.refresh_trades = function() {
		var settlements = this.get_settlements();
		for (var i = 1; i < settlements.length; i++) {
			if (typeof settlements[i] !== 'undefined') {
				if (settlements[i].is_city()) {
					settlements[i].reset_trades();
				}
			}
		}
		this.notify('World Market trades have been refreshed, settlements are looking to make new purchases and sales.', civitas.l('World Market'));
		return this;
	};

	/**
	 * Refresh the influence of each of the cities in the world.
	 * 
	 * @public
	 * @returns {civitas.game}
	 */
	this.refresh_influence = function() {
		var settlements = this.get_settlements();
		for (var i = 1; i < settlements.length; i++) {
			if (typeof settlements[i] !== 'undefined') {
				if (settlements[i].is_city()) {
					if (this.get_settlement().get_religion().id === settlements[i].get_religion().id) {
						this.get_settlement().raise_influence(settlements[i].get_id(), civitas.YEARLY_INFLUENCE_GAIN);
					} else {
						this.get_settlement().lower_influence(settlements[i].get_id(), civitas.YEARLY_INFLUENCE_LOSS);
					}
				} else {
					if (this.get_settlement().get_religion().id === settlements[i].get_religion().id) {
						this.get_settlement().raise_influence(settlements[i].get_id(), civitas.YEARLY_INFLUENCE_GAIN);
					}
				}
			}
		}
		return this;
	};

	/**
	 * Method that gets called each 'year'.
	 * 
	 * @private
	 * @returns {civitas.game}
	 */
	this._do_yearly = function () {
		this.get_settlement().release_mercenaries();
		this.refresh_influence();
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
			title: (typeof title !== 'undefined') ? title : civitas.l('City Council'),
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
			title: (typeof title !== 'undefined') ? title : civitas.l('City Council'),
			error: true,
			content: message
		});
		if (typeof no_console === 'undefined' || no_console === false) {
			this.log(message, true);
		}
		return this;
	};

	/**
	 * Calculate and return the total and free storage space in the main settlement.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.calc_storage = function () {
		var storage = this.get_settlement().get_storage_space();
		if (storage.occupied >= storage.all) {
			this.error('You ran out of storage space and all goods produced will be lost. Upgrade your warehouse or marketplace.', 'No storage space');
		} else if ((storage.all - storage.occupied) < 100) {
			this.error('You will soon run out of storage space and all goods produced will be lost. Upgrade your warehouse or marketplace.', 'Storage nearly full');
		}
		return storage;
	};

	/**
	 * Get the list of all the settlements in game.
	 * 
	 * @public
	 * @returns {Array}
	 */
	this.get_settlements = function () {
		return this.settlements;
	};

	/**
	 * Import game data.
	 *
	 * @public
	 * @returns {Object}
	 */
	this.import = function() {
		var data = this.get_storage_data().data;
		if (data !== false) {
			this.set_difficulty(data.difficulty);
			this.set_worldmap(data.worldmap);
			this.set_campaigns(data.campaigns);
			this.set_achievements(data.achievements);
			this.set_date_time(data.date_time);
			this.set_black_market(data.black_market);
			this.set_settings_music(data.settings.music);
			this.set_settings_console(data.settings.console);
		} else {
			this.error('There was a problem loading the game data, it is probably corrupted');
			return false;
		}
		return data;
	};

	/**
	 * Export game data.
	 *
	 * @public
	 * @param {Boolean} to_local_storage
	 * @param {Number} slot
	 * @returns {Object}
	 */
	this.export = function(to_local_storage, slot) {
		var settlement = this.get_settlement();
		var settlements_list = [];
		for (var i = 0; i < this.settlements.length; i++) {
			settlements_list.push(this.settlements[i].export());
		}
		var data = {
			settlements: settlements_list,
			difficulty: this.get_difficulty(),
			achievements: this.get_achievements(),
			black_market: this.get_black_market(),
			date_time: {
				day: this.day,
				month: this.month,
				year: this.year,
				day_of_month: this.day_of_month
			},
			campaigns: this.get_campaigns(),
			worldmap: this.get_worldmap(),
			settings: this.get_settings()
		};
		if (to_local_storage === true) {
			var new_data = {
				date: Number(new Date()),
				data: data
			}
			if (typeof slot !== 'undefined') {
				this.set_storage_data('save' + slot, new_data);
			} else {
				this.set_storage_data('live', new_data);
			}
			return new_data;
		}
		return data;
	};

	/**
	 * Setup the villages in the world.
	 *
	 * @private
	 * @returns {civitas.game}
	 */
	this._setup_villages = function() {
		// TODO
	};

	/**
	 * Create all the other settlements in the world.
	 * 
	 * @private
	 * @param {Object} data
	 * @returns {civitas.game}
	 */
	this._setup_neighbours = function (data) {
		var new_settlement = null;
		var settlement_data = null;
		var ruler = null;
		if (data !== null) {
			for (var i = 1; i < data.settlements.length; i++) {
				settlement_data = data.settlements[i];
				settlement_data.core = this;
				new_settlement = new civitas.objects.settlement(settlement_data);
				var climate = new_settlement.get_climate();
				var climate_buildings = 'SETTLEMENT_BUILDINGS_' + climate.name.toUpperCase();
				new_settlement._create_buildings(civitas[climate_buildings], true);
				this.settlements.push(new_settlement);
			}
		} else {
			for (var item in civitas.SETTLEMENTS) {
				item = parseInt(item);
				settlement_data = civitas.SETTLEMENTS[item];
				settlement_data.settlement_type = typeof settlement_data.settlement_type === 'undefined' || settlement_data.settlement_type === civitas.CITY ? civitas.CITY : civitas.VILLAGE;
				if (settlement_data.settlement_type === civitas.VILLAGE) {
					ruler = {
						title: 'Mayor',
						avatar: 40,
						personality: civitas.PERSONALITY_DIPLOMAT,
						name: civitas.utils.get_random_unique(civitas.NAMES),
						nationality: settlement_data.nationality
					};
				} else {
					ruler = civitas.utils.get_random_unique(civitas.RULERS);
				}
				new_settlement = new civitas.objects.settlement({
					core: this,
					id: item,
					population: settlement_data.population,
					settlement_type: settlement_data.settlement_type,
					name: civitas.utils.get_random_unique(civitas.SETTLEMENT_NAMES),
					player: false,
					level: settlement_data.level,
					religion: settlement_data.religion,
					climate: settlement_data.settlement_type === civitas.CITY ? settlement_data.climate : civitas.CLIMATE_TEMPERATE,
					ruler: ruler,
					resources: settlement_data.resources,
					icon: settlement_data.settlement_type === civitas.CITY ? settlement_data.icon : 1,
					army_list: settlement_data.army,
					navy_list: settlement_data.navy
				});
				if (settlement_data.settlement_type === civitas.CITY) {
					var climate = new_settlement.get_climate();
					var climate_buildings = 'SETTLEMENT_BUILDINGS_' + climate.name.toUpperCase();
					new_settlement._create_buildings(civitas[climate_buildings], true);
				}
				this.get_settlement().status[item] = {
					influence: 50,
					status: civitas.DIPLOMACY_TRUCE
				}
				this.settlements.push(new_settlement);
			}
			/*
			for (var item in civitas.VILLAGES) {
				this.get_settlement().status.village[item] = {
					influence: 0,
					status: civitas.DIPLOMACY_TRUCE
				}
			}
			*/
		}
		return this;
	};

	/**
	 * Get the list of imports and exports from all the world settlements (except main).
	 * 
	 * @private
	 * @returns {Object}
	 */
	this._get_neighbours_trades = function () {
		var data = {};
		var settlements = this.get_settlements();
		for (var i = 1; i < settlements.length; i++) {
			if (typeof settlements[i] !== 'undefined') {
				data[settlements[i].get_id()] = settlements[i].get_trades();
			}
		}
		return data;
	};

	/**
	 * Setup the UI.
	 * 
	 * @private
	 * @returns {civitas.game}
	 */
	this._setup_ui = function () {
		var self = this;
		var clicked = false;
		var clickY, clickX;
		var _t = '';
		$('.game').on({
			mousemove: function (e) {
				clicked && update_scroll_pos(e);
			},
			mousedown: function (e) {
				clicked = true;
				clickY = e.pageY;
				clickX = e.pageX;
				$('html').css('cursor', 'grab');
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
		for (var i = 0; i < civitas.TOOLBAR_RESOURCES.length; i++) {
			_t += '<span class="' + civitas.TOOLBAR_RESOURCES[i] + '"></span>';
		}
		$('.top-panel').empty().append(_t);
		$('.console').on('click', '.down', function () {
			$('.console .contents').scrollTo('+=97px', 500);
		}).on('click', '.up', function () {
			$('.console .contents').scrollTo('-=97px', 500);
		});
		$('.toolbar').on('click', '.do-worldmap', function () {
			self.open_panel(civitas.PANEL_WORLD);
			return false;
		}).on('click', '.do-help', function () {
			self.open_panel(civitas.PANEL_HELP);
			return false;
		}).on('click', '.do-trades', function () {
			self.open_panel(civitas.PANEL_TRADES);
			return false;
		}).on('click', '.do-ranks', function () {
			self.open_panel(civitas.PANEL_RANKS);
			return false;
		}).on('click', '.do-council', function () {
			self.open_panel(civitas.PANEL_COUNCIL);
			return false;
		}).on('click', '.do-storage', function () {
			self.open_panel(civitas.PANEL_STORAGE);
			return false;
		}).on('click', '.do-build', function () {
			self.open_panel(civitas.PANEL_BUILDINGS);
			return false;
		});
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
		var settlement = this.get_settlement();
		for (var i = 0; i < civitas.ACHIEVEMENTS.length; i++) {
			achievement = civitas.ACHIEVEMENTS[i];
			for (var z = 0; z < civitas.ACHIEVEMENTS[i].conditions.length; z++) {
				var id = civitas.ACHIEVEMENTS[i].id;
				if (!this.has_achievement(achievement)) {
					condition = achievement.conditions[z];
					if (typeof condition.settlement_level !== 'undefined') {
						if (settlement.get_level() === condition.settlement_level) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.soldiers !== 'undefined') {
						var army = settlement.get_army_total();
						if (army.total >= condition.soldiers) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.ships !== 'undefined') {
						var navy = settlement.get_navy_total();
						if (navy.total >= condition.ships) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.coins !== 'undefined') {
						if (settlement.get_coins() >= condition.coins) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.research !== 'undefined') {
						if (settlement.get_research() >= condition.research) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.faith !== 'undefined') {
						if (settlement.get_faith() >= condition.faith) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.population !== 'undefined') {
						if (settlement.get_population() >= condition.population) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.prestige !== 'undefined') {
						if (settlement.get_prestige() >= condition.prestige) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.espionage !== 'undefined') {
						if (settlement.get_espionage() >= condition.espionage) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.buildings !== 'undefined') {
						if (typeof condition.buildings === 'object') {
							var good = true;
							for (var s = 0; s < condition.buildings.length; s++) {
								if (!settlement.is_building_built(condition.buildings[s])) {
									good = false;
									break;
								}
							}
							if (good === true) {
								this.achievement(achievement);
							}
						} else {
							for (var s = 0; s < settlement.buildings_list.length; s++) {
								if (settlement.buildings_list[s].handle === condition.buildings) {
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
								var amount = settlement.resources[item];
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
							if (!settlement.has_storage_space()) {
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
						var merc = settlement.get_mercenary();
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

	/**
	 * Open a UI panel.
	 *
	 * @public
	 * @param {Object} panel_data
	 * @param {Object} extra_data
	 * @returns {civitas.controls.panel}
	 */
	this.open_panel = function(panel_data, extra_data) {
		panel_data.core = this;
		if (typeof extra_data !== 'undefined') {
			panel_data.data = extra_data;
		}
		var panel = new civitas.controls.panel(panel_data);
		this.panels.push(panel);
		return panel;
	};

	/**
	 * Open a UI window.
	 *
	 * @public
	 * @param {Object} window_data
	 * @param {Object} extra_data
	 * @returns {civitas.controls.window}
	 */
	this.open_window = function(window_data, extra_data) {
		window_data.core = this;
		if (typeof extra_data !== 'undefined') {
			window_data.data = extra_data;
		}
		return new civitas.controls.window(window_data);
	};

	/**
	 * Return the game mode.
	 *
	 * @public
	 * @returns {Number}
	 */
	this.get_mode = function() {
		return this.mode;
	};

	/**
	 * Set the game mode.
	 *
	 * @public
	 * @param {Number} value
	 * @returns {civitas.game}
	 */
	this.set_mode = function(value) {
		this.mode = value;
	};

	/**
	 * Return the id of the current worldmap.
	 *
	 * @public
	 * @returns {Number}
	 */
	this.get_worldmap = function() {
		return this.worldmap;
	};

	/**
	 * Set the id of the current worldmap.
	 *
	 * @public
	 * @param {Number} value
	 * @returns {civitas.game}
	 */
	this.set_worldmap = function(value) {
		this.worldmap = value;
		return this;
	};

	/**
	 * Set the world campaigns.
	 *
	 * @public
	 * @param {Array} value
	 * @returns {civitas.game}
	 */
	this.set_campaigns = function(value) {
		this.campaigns = value;
		return this;
	};

	/**
	 * Return the world campaigns.
	 *
	 * @public
	 * @returns {Array}
	 */
	this.get_campaigns = function() {
		return this.campaigns;
	};

	this.advance_campaigns = function() {
		var settlement = this.get_settlement();
		var other_settlement = null;
		for (var i = 0; i < this.campaigns.length; i++) {
			if (this.campaigns[i].passed === this.campaigns[i].duration - 1) {
				if (this.campaigns[i].source.id === settlement.get_id()) {
					other_settlement = this.get_settlement(this.campaigns[i].destination.id);
					this.notify('The ' + (this.campaigns[i].type === civitas.CAMPAIGN_ARMY ? 'army' : 'caravan') + ' you sent ' + this.campaigns[i].duration + ' days ago to ' + other_settlement.get_name() + ' reached its destination.');
				} else if (this.campaigns[i].destination.id === settlement.get_id()) {
					other_settlement = this.get_settlement(this.campaigns[i].source.id);
					this.notify('The ' + (this.campaigns[i].type === civitas.CAMPAIGN_ARMY ? 'army' : 'caravan') + ' sent by ' + other_settlement.get_name() + ' ' + this.campaigns[i].duration + ' days ago reached your city.');
				}
				this.process_campaign(i);
			} else {
				this.campaigns[i].passed++;
			}
		}
		return this;
	};

	this.process_campaign = function(id) {
		var campaign = this.campaigns[id];
		if (campaign.type === civitas.CAMPAIGN_ARMY && !this.get_settlement().can_diplomacy()) {
			return false;
		}
		if (campaign.type === civitas.CAMPAIGN_CARAVAN && !this.get_settlement().can_trade()) {
			return false;
		}
		switch (campaign.type) {
			case civitas.CAMPAIGN_ARMY:
				break
			case civitas.CAMPAIGN_CARAVAN:
				var total = 0;
				var destination_settlement = this.get_settlement(campaign.destination.id);
				if (typeof campaign.data.resources !== 'undefined') {
					for (var item in campaign.data.resources) {
						if ($.inArray(item, civitas.NON_RESOURCES) === -1) {
							total += civitas.utils.calc_price(campaign.data.resources[item], item);
						} else if (item === 'coins') {
							total += campaign.data.resources[item];
						}
						destination_settlement.add_to_storage(item, campaign.data.resources[item]);
					}
					this.get_settlement().raise_influence(campaign.destination.id, 5);
				}
				break;
		}
		this.remove_campaign(id);
		return this;
	};

	this.add_campaign = function(source_settlement, destination_settlement, type, data) {
		if (type === civitas.CAMPAIGN_ARMY && !this.get_settlement().can_diplomacy()) {
			return false;
		}
		if (type === civitas.CAMPAIGN_CARAVAN && !this.get_settlement().can_trade()) {
			return false;
		}
		var s_loc = civitas['SETTLEMENT_LOCATION_' + source_settlement.get_climate().name.toUpperCase()];
		var d_loc = civitas.SETTLEMENTS[destination_settlement.get_id()].location;
		var duration = civitas.utils.get_distance_in_days(s_loc, d_loc);
		var campaign = {
			source: {
				x: s_loc.x,
				y: s_loc.y,
				id: source_settlement.get_id()
			},
			destination: {
				x: d_loc.x,
				y: d_loc.y,
				id: destination_settlement.get_id()
			},
			duration: duration,
			passed: 0,
			type: type,
			data: data
		};
		this.campaigns.push(campaign);
		this.notify('Your ' + (type === civitas.CAMPAIGN_ARMY ? 'army' : 'caravan') + ' was dispatched towards ' + destination_settlement.get_name() + ' and will reach its destination in ' + duration + ' days.');
		return campaign;
	};

	this.remove_campaign = function(id) {
		var panel;
		if (panel = this.get_panel('campaign')) {
			panel.destroy()
		}
		this.campaigns.splice(id, 1);
		return this;
	};

	/**
	 * Return if the current season is spring.
	 *
	 * @returns {Boolean}
	 * @public
	 */
	this.is_spring = function() {
		if (this.month >= 3 && this.month < 6) {
			return true;
		}
		return false;
	};

	/**
	 * Return if the current season is summer.
	 *
	 * @returns {Boolean}
	 * @public
	 */
	this.is_summer = function() {
		if (this.month >= 6 && this.month < 9) {
			return true;
		}
		return false;
	};

	/**
	 * Return if the current season is autumn.
	 *
	 * @returns {Boolean}
	 * @public
	 */
	this.is_autumn = function() {
		if (this.month >= 9 && this.month < 12) {
			return true;
		}
		return false;
	};

	/**
	 * Return if the current season is winter.
	 *
	 * @returns {Boolean}
	 * @public
	 */
	this.is_winter = function() {
		if (this.month >= 12 || this.month < 3) {
			return true;
		}
		return false;
	};

	// Fire up the constructor
	return this.__init();
};

$(document).ready(function () {
	new civitas.game();
});
