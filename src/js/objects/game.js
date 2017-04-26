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
	 * Game actions queue.
	 *
	 * @private
	 * @type {Array}
	 */
	this.queue = [];

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

	this.ai = null;

	this.modal = null;

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {civitas.game}
	 */
	this.__init = function () {
		this._build_ui();
		this.modal = new civitas.controls.modal({
			core: this
		});
		this._setup_audio();
		this._setup_ui();
		if (this.get_storage_data() === false) {
			this.open_window(civitas.WINDOW_OPTIONS);
		} else {
			this.start_game();
		}
		this.ai = new civitas.modules.ai({
			core: this
		});
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
			this.notify(this.get_settlement().name() + ' ' + civitas.l('received') + ' ' + total + ' ' + civitas.l('coins from the Black Market for selling goods.'), civitas.l('Black Market'));
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
				'<div title="' + civitas.l('City Council') + '" class="tips cityavatar"></div>' +
				'<span title="' + civitas.l('City level') + '" class="tips citylevel"></span>' +
				'<div title="' + civitas.l('City name') + '" class="tips cityname"></div>' +
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
		this.save();
		$('header .cityname').html(this.get_settlement().name());
		$('header .cityavatar').css({
			'background-image': 'url(' + civitas.ASSETS_URL + 'images/avatars/avatar' + this.get_settlement().ruler().avatar + '.png)'
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
		var settlements = this.get_settlements();
		if (typeof name === 'undefined') {
			return settlements[0];
		}
		if (typeof name === 'string') {
			for (var i = 0; i < settlements.length; i++) {
				if (settlements[i].name() === name) {
					return settlements[i];
				}
			}
		} else if (typeof name === 'number') {
			for (var i = 0; i < settlements.length; i++) {
				if (settlements[i].id() === name) {
					return settlements[i];
				}
			}
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
			properties: {
				name: cityname,
				climate: climate,
				avatar: avatar,
				id: 0,
				player: true,
				ruler: {
					name: name,
					title: '',
					avatar: avatar,
					nationality: nation,
					personality: civitas.PERSONALITY_BALANCED
				},
			},
			army: civitas.START_ARMY[difficulty - 1].army,
			navy: civitas.START_ARMY[difficulty - 1].navy,
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
		var random = Math.random().toFixed(5);
		var event;
		for (var i = 0; i < civitas.EVENTS.length; i++) {
			var _event = civitas.EVENTS[i];
			if (random <= _event.chance) {
				event = _event;
				event.core = this;
				new civitas.objects.event(event);
				return this;
			}
		}
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
		this.advance_queue();
		this.day_of_month++;
		if (this.day_of_month > 30) {
			this._do_monthly();
		}
		if (this.day >= 361) {
			this._do_yearly();
			this.day = 1;
			this.month = 1;
		}
		this.ai.process();
		this.save_and_refresh();
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
		if (this.month === 6 || this.month === 12) {
			this._do_biannually();
		}
		this._reset_black_market();
		return this;
	};

	/**
	 * Method that gets called twice per year.
	 * 
	 * @private
	 * @returns {civitas.game}
	 */
	this._do_biannually = function() {
		this.refresh_trades();
		return this;
	};

	/**
	 * Method that gets called four times every year.
	 * 
	 * @private
	 * @returns {civitas.game}
	 */
	this._do_quarterly = function() {
		return this;
	};

	/**
	 * Refresh the UI, panels and save game.
	 *
	 * @public
	 * @returns {civitas.game}
	 */
	this.save_and_refresh = function() {
		this.check_achievements();
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
			var storage_space = settlement.storage();
			var needed = civitas.LEVELS[settlement.level()];
			$('.citylevel').html(settlement.level());
			if (settlement.fame() >= needed) {
				settlement.level_up();
			}
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
					if (this.get_settlement().religion().id === settlements[i].religion().id) {
						this.get_settlement().raise_influence(settlements[i].id(), civitas.YEARLY_INFLUENCE_GAIN);
					} else if ((this.get_settlement().get_diplomacy_status(settlements[i].id()) === civitas.DIPLOMACY_VASSAL) || (this.get_settlement().get_diplomacy_status(settlements[i].id()) === civitas.DIPLOMACY_ALLIANCE)) {
						this.get_settlement().raise_influence(settlements[i].id());
					} else {
						this.get_settlement().lower_influence(settlements[i].id(), civitas.YEARLY_INFLUENCE_LOSS);
					}
				} else {
					if (this.get_settlement().religion().id === settlements[i].religion().id) {
						this.get_settlement().raise_influence(settlements[i].id(), civitas.YEARLY_INFLUENCE_GAIN);
					} else if ((this.get_settlement().get_diplomacy_status(settlements[i].id()) === civitas.DIPLOMACY_VASSAL) || (this.get_settlement().get_diplomacy_status(settlements[i].id()) === civitas.DIPLOMACY_ALLIANCE)) {
						this.get_settlement().raise_influence(settlements[i].id());
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
		if ($('.ui .console .contents div').length > 1000) {
			$('.ui .console .contents').empty();
		}
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
			img: undefined,
			mode: civitas.NOTIFY_NORMAL
		}, settings);
		if (settings.mode === civitas.NOTIFY_ACHIEVEMENT) {
			_container = 'achievements-notifications';
		} else {
			_container = 'notifications';
		}
		container = $('.' + _container);
		if (!container.length) {
			container = $("<div>", {
				'class': _container
			}).appendTo(document.body);
		}
		$('.achievements-notifications').css({
			left: ($(window).width() / 2) - (container.width() / 2)
		});
		notty = $('<div>');
		notty.addClass('notty');
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
		hide.addClass('hide');
		if (settings.mode === civitas.NOTIFY_ERROR) {
			notty.addClass('error');
			settings.img = civitas.ASSETS_URL + 'images/ui/icon_notification_2.png';
		} else if (settings.mode === civitas.NOTIFY_EVENT) {
			notty.addClass('event');
			settings.img = civitas.ASSETS_URL + 'images/ui/icon_research.png';
		} else if (settings.mode === civitas.NOTIFY_ACHIEVEMENT) {
			notty.addClass('achievement');
			settings.img = civitas.ASSETS_URL + 'images/ui/icon_achievement.png';
		} else {
			settings.img = civitas.ASSETS_URL + 'images/ui/icon_notification_1.png';
		}
		image = $('<div>', {
			style: "background: url('" + settings.img + "')"
		});
		image.addClass('img');
		left = $("<div class='left'>");
		right = $("<div class='right'>");
		inner = $('<div>', {
			html: '<h2>' + settings.title + '</h2>' + settings.content
		});
		inner.addClass("inner");
		inner.appendTo(right);
		image.appendTo(left);
		left.appendTo(notty);
		right.appendTo(notty);
		hide.appendTo(notty);
		if (settings.mode !== civitas.NOTIFY_ACHIEVEMENT) {
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
			mode: civitas.NOTIFY_ERROR,
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
		var storage = this.get_settlement().storage();
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
			this.set_queue(data.queue);
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
			queue: this.get_queue(),
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
				var climate = new_settlement.climate();
				var climate_buildings = 'SETTLEMENT_BUILDINGS_' + climate.name.toUpperCase();
				new_settlement._create_buildings(civitas[climate_buildings], true);
				this.settlements.push(new_settlement);
			}
		} else {
			for (var item in civitas.SETTLEMENTS) {
				item = parseInt(item);
				settlement_data = civitas.SETTLEMENTS[item];
				settlement_data.type = typeof settlement_data.type === 'undefined' || settlement_data.type === civitas.CITY ? civitas.CITY : civitas.VILLAGE;
				if (settlement_data.type === civitas.VILLAGE) {
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
					properties: {
						id: item,
						population: settlement_data.population,
						type: settlement_data.type,
						name: civitas.utils.get_random_unique(civitas.SETTLEMENT_NAMES),
						player: false,
						level: settlement_data.level,
						religion: settlement_data.religion,
						climate: settlement_data.type === civitas.CITY ? settlement_data.climate : civitas.CLIMATE_TEMPERATE,
						ruler: ruler,
						icon: settlement_data.type === civitas.CITY ? settlement_data.icon : 1
					},
					resources: settlement_data.resources,
					army: settlement_data.army,
					navy: settlement_data.navy
				});
				if (settlement_data.type === civitas.CITY) {
					var climate = new_settlement.climate();
					var climate_buildings = 'SETTLEMENT_BUILDINGS_' + climate.name.toUpperCase();
					new_settlement._create_buildings(civitas[climate_buildings], true);
				}
				this.get_settlement().status(item, {
					influence: 50,
					status: civitas.DIPLOMACY_TRUCE
				});
				this.settlements.push(new_settlement);
			}
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
				data[settlements[i].id()] = settlements[i].get_trades();
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
				//handle_mouse(e);
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
		var x, y;
		function handle_mouse(e) {
			if (x && y) {
				window.scrollBy(e.clientX - x, e.clientY - y);
			}
			x = e.clientX;
			y = e.clientY;
		}
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
		$('.ui').on('click', '.cityavatar', function () {
			self.open_panel(civitas.PANEL_COUNCIL);
			return false;
		})
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
				if (this.has_achievement(achievement) === false) {
					condition = achievement.conditions[z];
					if (typeof condition.settlement_level !== 'undefined') {
						if (settlement.level() === condition.settlement_level) {
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
						if (settlement.coins() >= condition.coins) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.research !== 'undefined') {
						if (settlement.research() >= condition.research) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.faith !== 'undefined') {
						if (settlement.faith() >= condition.faith) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.population !== 'undefined') {
						if (settlement.population() >= condition.population) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.prestige !== 'undefined') {
						if (settlement.prestige() >= condition.prestige) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.espionage !== 'undefined') {
						if (settlement.espionage() >= condition.espionage) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.buildings !== 'undefined') {
						for (var item in condition.buildings) {
							var good = true;
							if (!settlement.is_building_built(item, condition.buildings[item])) {
								good = false;
								break;
							}
						}
						if (good === true) {
							this.achievement(achievement);
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
						var merc = settlement.mercenary();
						if (merc.length >= condition.mercenary) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.diplomacy !== 'undefined') {
						var queue_actions = this.get_queue();
						for (var m = 0; m < queue_actions.length; m++) {
							for (var item in condition.diplomacy) {
								if ((item === 'spy' && queue_actions[m].mode === civitas.ACTION_CAMPAIGN && queue_actions[m].type === civitas.CAMPAIGN_SPY) ||
									(item === 'caravan' && queue_actions[m].mode === civitas.ACTION_CAMPAIGN && queue_actions[m].type === civitas.CAMPAIGN_CARAVAN) ||
									(item === 'army' && queue_actions[m].mode === civitas.ACTION_CAMPAIGN && queue_actions[m].type === civitas.CAMPAIGN_ARMY) ||
									(item === 'war' && queue_actions[m].mode === civitas.ACTION_DIPLOMACY && queue_actions[m].type === civitas.DIPLOMACY_WAR) ||
									(item === 'pact' && queue_actions[m].mode === civitas.ACTION_DIPLOMACY && queue_actions[m].type === civitas.DIPLOMACY_PACT) ||
									(item === 'alliance' && queue_actions[m].mode === civitas.ACTION_DIPLOMACY && queue_actions[m].type === civitas.DIPLOMACY_ALLIANCE) ||
									(item === 'join' && queue_actions[m].mode === civitas.ACTION_DIPLOMACY && queue_actions[m].type === civitas.DIPLOMACY_JOIN))
								{
									this.achievement(achievement);
								}
							}
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
			mode: civitas.NOTIFY_ACHIEVEMENT,
			content: achievement.description,
			timeout: false
		});
		this.save_and_refresh();
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
				return this.achievements[i];
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
	 * Set the game queue.
	 *
	 * @public
	 * @param {Array} value
	 * @returns {civitas.game}
	 */
	this.set_queue = function(value) {
		this.queue = value;
		return this;
	};

	/**
	 * Return the game queue.
	 *
	 * @public
	 * @returns {Array}
	 */
	this.get_queue = function() {
		return this.queue;
	};

	/**
	 * Advance the game queue.
	 *
	 * @public
	 * @returns {civitas.game}
	 */
	this.advance_queue = function() {
		for (var i = 0; i < this.queue.length; i++) {
			if (this.queue[i].passed === this.queue[i].duration - 1) {
				this.process_action(i);
			} else {
				this.queue[i].passed++;
			}
		}
		return this;
	};

	/**
	 * Process an action from the game queue.
	 *
	 * @public
	 * @param {Number} id
	 * @returns {civitas.game}
	 */
	this.process_action = function(id) {
		var campaign = this.queue[id];
		var failed = true;
		var settlement = this.get_settlement(campaign.source.id);
		var destination_settlement = this.get_settlement(campaign.destination.id);
		if (campaign.mode === civitas.ACTION_CAMPAIGN) {
			var random = Math.ceil(Math.random() * 100);
			var class_name = '';
			var amount = Math.floor(campaign.data.espionage / 100);
			if (settlement.is_player()) {
				if (campaign.type === civitas.CAMPAIGN_ARMY && !settlement.can_recruit_soldiers()) {
					this.remove_action(id);
					return false;
				}
				if (campaign.type === civitas.CAMPAIGN_SPY && !settlement.can_diplomacy()) {
					this.remove_action(id);
					return false;
				}
				if (campaign.type === civitas.CAMPAIGN_CARAVAN && !settlement.can_trade()) {
					this.remove_action(id);
					return false;
				}
			}
			if (campaign.type === civitas.CAMPAIGN_ARMY) {
				class_name = 'army';
			} else if (campaign.type === civitas.CAMPAIGN_CARAVAN) {
				class_name = 'caravan';
			} else if (campaign.type === civitas.CAMPAIGN_SPY) {
				class_name = 'spy';
			}
			switch (campaign.type) {
				case civitas.CAMPAIGN_ARMY:
					var source_army = settlement.get_army_total();
					var destination_army = destination_settlement.get_army_total();
					var diff1 = source_army.attack - destination_army.defense;
					var diff2 = source_army.defense - destination_army.attack;
					// TODO
					//console.log(diff1 + '=' + diff2);
					break;
				case civitas.CAMPAIGN_SPY:
					if (typeof campaign.data.espionage !== 'undefined') {
						switch (campaign.data.mission) {
							case civitas.SPY_MISSION_RELIGION:
								if (random <= Math.ceil(campaign.data.espionage / civitas.MAX_ESPIONAGE_SUCESS_RATE)) {
									if (campaign.source.id === settlement.id()) {
										destination_settlement.religion(campaign.data.religion);
										var religion = destination_settlement.religion();
										this.notify('The spy you sent ' + campaign.duration + ' days ago to ' + destination_settlement.name() + ' reached its destination and managed to convince the settlement council to change the religion to ' + religion.name + '.');
									} else if (campaign.destination.id === settlement.id()) {
										destination_settlement = this.get_settlement(campaign.source.id);
										settlement.religion(campaign.data.religio);
										var religion = settlement.religion();
										this.notify('The spy sent by ' + destination_settlement.name() + ' ' + campaign.duration + ' days ago to our city reached its destination and managed to convince your city council to change the religion to ' + religion.name + '.');
									}
									failed = false;
								}
								break;
							case civitas.SPY_MISSION_INFLUENCE:
								if (random <= Math.ceil(campaign.data.espionage / civitas.MAX_ESPIONAGE_SUCESS_RATE)) {
									if (campaign.source.id === settlement.id()) {
										settlement.raise_influence(campaign.destination.id, amount);
										this.notify('The spy you sent ' + campaign.duration + ' days ago to ' + destination_settlement.name() + ' reached its destination and increased your influence over this settlement.');
									} else if (campaign.destination.id === settlement.id()) {
										destination_settlement = this.get_settlement(campaign.source.id);
										// TODO
										//destination_settlement.raise_influence(campaign.destination.id, amount);
										this.notify('The spy sent by ' + destination_settlement.name() + ' ' + campaign.duration + ' days ago to our city reached its destination and lowered your influence over this settlement.');
									}
									failed = false;
								}
								break;
							case civitas.SPY_MISSION_STEAL_RESOURCES:
								if (random <= Math.ceil(campaign.data.espionage / civitas.MAX_ESPIONAGE_SUCESS_RATE)) {
									// TODO
									failed = false;
								}
								break;
							case civitas.SPY_MISSION_INSTIGATE:
								if (random <= Math.ceil(campaign.data.espionage / civitas.MAX_ESPIONAGE_SUCESS_RATE)) {
									if (campaign.source.id === settlement.id()) {
										destination_settlement.lower_prestige(amount);
										this.notify('The spy you sent ' + campaign.duration + ' days ago to ' + destination_settlement.name() + ' reached its destination and incited the population to revolt, therefore lowering the prestige of the city.');
									} else if (campaign.destination.id === settlement.id()) {
										destination_settlement = this.get_settlement(campaign.source.id);
										settlement.lower_prestige(amount);
										this.notify('The spy sent by ' + destination_settlement.name() + ' ' + campaign.duration + ' days ago to our city reached its destination and incited our population to revolt, therefore lowering the prestige of our city.');
									}
									failed = false;
								}
								break;
						}
					}
					break;
				case civitas.CAMPAIGN_CARAVAN:
					var total = 0;
					if (typeof campaign.data.resources !== 'undefined') {
						for (var item in campaign.data.resources) {
							if ($.inArray(item, civitas.NON_RESOURCES) === -1) {
								total += civitas.utils.calc_price(campaign.data.resources[item], item);
							} else if (item === 'coins') {
								total += campaign.data.resources[item];
							}
							destination_settlement.add_to_storage(item, campaign.data.resources[item]);
						}
						settlement.raise_influence(campaign.destination.id, civitas.CARAVAN_INFLUENCE);
					}
					break;
			}
			if (failed === true) {
				if (campaign.source.id === settlement.id()) {
					this.notify('The ' + class_name + ' you sent ' + campaign.duration + ' days ago to ' + destination_settlement.name() + ' reached its destination.');
				} else if (campaign.destination.id === settlement.id()) {
					destination_settlement = this.get_settlement(campaign.source.id);
					this.notify('The ' + class_name + ' sent by ' + destination_settlement.name() + ' ' + campaign.duration + ' days ago reached our city.');
				}
			}
		} else if (campaign.mode === civitas.ACTION_DIPLOMACY) {
			if (settlement.is_player() && !settlement.can_diplomacy()) {
				this.remove_action(id);
				return false;
			}
			switch (campaign.type) {
				case civitas.DIPLOMACY_PROPOSE_PACT:
					settlement.diplomacy(destination_settlement, civitas.DIPLOMACY_PACT);
					//failed = false;
					break;
				case civitas.DIPLOMACY_PROPOSE_ALLIANCE:
					settlement.diplomacy(destination_settlement, civitas.DIPLOMACY_ALLIANCE);
					//failed = false;
					break;
				case civitas.DIPLOMACY_PROPOSE_CEASE_FIRE:
					settlement.diplomacy(destination_settlement, civitas.DIPLOMACY_CEASE_FIRE);
					//failed = false;
					break;
				case civitas.DIPLOMACY_PROPOSE_JOIN:
					settlement.diplomacy(destination_settlement, civitas.DIPLOMACY_VASSAL);
					//failed = false;
					break;
			}
			if (failed === true) {
				if (campaign.source.id === settlement.id()) {
					this.notify('The proposal you sent ' + campaign.duration + ' days ago to ' + destination_settlement.name() + ' was accepted.');
				}
			}
		}
		this.remove_action(id);
		return this;
	};

	/**
	 * Add a campaign to the game queue.
	 *
	 * @public
	 * @param {civitas.objects.settlement} source_settlement
	 * @param {civitas.objects.settlement} destination_settlement
	 * @param {Number} type
	 * @param {Object} data
	 * @returns {Object}
	 */
	this.add_to_queue = function(source_settlement, destination_settlement, mode, type, data) {
		var class_name = '';
		if (source_settlement.id() === this.get_settlement().id()) {
			var s_loc = civitas['SETTLEMENT_LOCATION_' + source_settlement.climate().name.toUpperCase()];
		} else {
			var s_loc = civitas.SETTLEMENTS[source_settlement.id()].location;
		}
		if (destination_settlement.id() === this.get_settlement().id()) {
			var d_loc = civitas['SETTLEMENT_LOCATION_' + destination_settlement.climate().name.toUpperCase()];
		} else {
			var d_loc = civitas.SETTLEMENTS[destination_settlement.id()].location;
		}
		var duration = civitas.utils.get_distance_in_days(s_loc, d_loc);
		if (mode === civitas.ACTION_CAMPAIGN) {
			if (type === civitas.CAMPAIGN_ARMY) {
				if (!source_settlement.can_recruit_soldiers()) {
					return false;
				}
				class_name = 'army';
				var army = source_settlement.get_army_total();
				var navy = source_settlement.get_navy_total();
				var mission_costs = civitas.ARMY_COSTS;
				for (var item in mission_costs) {
					if (item === 'coins') {
						mission_costs[item] = civitas.ARMY_COSTS[item] * duration;
					} else if (item === 'provisions') {
						mission_costs[item] = Math.ceil((civitas.ARMY_COSTS[item] * duration) / 2);
					}
				}
				var merged = $.extend({}, data.resources);
				for (var prop in mission_costs) {
					if (merged[prop]) {
						merged[prop] += mission_costs[prop];
					} else {
						merged[prop] = mission_costs[prop];
					}
				}
				if (!source_settlement.remove_resources(merged)) {
					return false;
				}
				for (var item in army.army) {
					if (army.army[item] - data.army[item] < 0) {
						return false;
					}
				}
				for (var item in navy.navy) {
					if (navy.navy[item] - data.navy[item] < 0) {
						return false;
					}
				}
				for (var item in army.army) {
					army.army[item] = army.army[item] - data.army[item];
				}
				for (var item in navy.navy) {
					navy.navy[item] = navy.navy[item] - data.navy[item];
				}
				var settlement_type = destination_settlement.get_type();
				source_settlement.diplomacy(destination_settlement.id(), civitas.DIPLOMACY_WAR);
			} else if (type === civitas.CAMPAIGN_SPY) {
				if (!source_settlement.can_diplomacy()) {
					return false;
				}
				class_name = 'spy';
				if (data.espionage > source_settlement.espionage()) {
					return false;
				}
				var mission_costs = civitas.SPY_COSTS;
				for (var item in mission_costs) {
					if (item === 'coins') {
						mission_costs[item] = civitas.SPY_COSTS[item] * duration;
					} else if (item === 'provisions') {
						mission_costs[item] = Math.ceil((civitas.SPY_COSTS[item] * duration) / 2);
					}
				}
				if (!source_settlement.remove_resources(mission_costs)) {
					return false;
				}
				source_settlement.lower_espionage(data.espionage);
				if (data.mission === civitas.SPY_MISSION_RELIGION) {
					source_settlement.reset_faith();
				}
			} else if (type === civitas.CAMPAIGN_CARAVAN) {
				if (!source_settlement.can_trade()) {
					return false;
				}
				class_name = 'caravan';
				var mission_costs = civitas.CARAVAN_COSTS;
				for (var item in mission_costs) {
					if (item === 'coins') {
						mission_costs[item] = civitas.CARAVAN_COSTS[item] * duration;
					} else if (item === 'provisions') {
						mission_costs[item] = Math.ceil((civitas.CARAVAN_COSTS[item] * duration) / 2);
					}
				}
				var merged = $.extend({}, data.resources);
				for (var prop in mission_costs) {
					if (merged[prop]) {
						merged[prop] += mission_costs[prop];
					} else {
						merged[prop] = mission_costs[prop];
					}
				}
				if (!source_settlement.remove_resources(merged)) {
					return false;
				}
			}
			if (source_settlement.id() === this.get_settlement().id()) {
				this.notify('Your ' + class_name + ' was dispatched towards ' + destination_settlement.name() + ' and will reach its destination in ' + duration + ' days.');
			}
		} else if (mode === civitas.ACTION_DIPLOMACY) {
			duration = Math.ceil(duration / 2);
			if (source_settlement.id() === this.get_settlement().id()) {
				this.notify('Your proposal was dispatched towards ' + destination_settlement.name() + ' and will reach its destination in ' + duration + ' days.');
			}
		}
		var action = {
			mode: mode,
			source: {
				x: s_loc.x,
				y: s_loc.y,
				id: source_settlement.id()
			},
			destination: {
				x: d_loc.x,
				y: d_loc.y,
				id: destination_settlement.id()
			},
			duration: duration,
			passed: 0,
			type: type,
			data: data
		};
		this.queue.push(action);
		this.save_and_refresh();
		return action;
	};

	/**
	 * Remove an action from the game queue.
	 *
	 * @public
	 * @param {Number} id
	 * @returns {civitas.game}
	 */
	this.remove_action = function(id) {
		var panel;
		if (panel = this.get_panel('campaign')) {
			panel.destroy();
		}
		this.queue.splice(id, 1);
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

	/**
	 * Open a modal window (usually to ask for confirmations).
	 *
	 * @public
	 * @param {Function} callback
	 * @param {String} text
	 * @param {String} title
	 * @returns {civitas.game}
	 */
	this.open_modal = function(callback, text, title) {
		this.modal.alert({
			title: typeof title !== 'undefined' ? title : 'City Council',
			text: text,
			on_click: callback
		});
		return this;
	}

	// Fire up the constructor
	return this.__init();
};

$(document).ready(function () {
	new civitas.game();
});
