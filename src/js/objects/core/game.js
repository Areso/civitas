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
	 * Encryption data, for now it's safe (famous last words) since we're only doing local storage.
	 *
	 * @private
	 * @type {String}
	 */
	this.encryption = {
		key: null,
		key_size: 256,
		iv_size: 128,
		iterations: 100
	};

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
	this.worldmap = null;

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
		this._setup_audio();
		this._setup_ui();
		if (!this.has_storage_data()) {
			this.open_window(civitas.WINDOW_SIGNUP);
		} else {
			this.open_window(civitas.WINDOW_SIGNIN);
		}
		this.ai = new civitas.modules.ai({
			core: this
		});
		return this;
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
	 * Internal method for starting up a game.
	 *
	 * @private
	 * @param {Object} data
	 * @returns {civitas.game}
	 */
	this._setup_game = function(data) {
		var self = this;
		this._setup_neighbours(data);
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
		this.save_and_refresh();
		return this;
	};

	/**
	 * Start a new game.
	 *
	 * @public
	 * @param {String} name
	 * @param {String} cityname
	 * @param {Number} nation
	 * @param {Number} climate
	 * @param {Number} avatar
	 * @param {Number} difficulty
	 * @param {String} password
	 * @returns {Boolean}
	 */
	this.new_game = function(name, cityname, nation, climate, avatar, difficulty, password) {
		this.show_loader();
		var data = null;
		var game_data = this.get_storage_data();
		this.encryption.key = password;
		this.difficulty = parseInt(difficulty);
		this.worldmap = civitas.utils.get_random(1, civitas.WORLDMAPS);
		this._create_settlement(name, cityname, nation, climate, avatar);
		this._setup_game(null);
		return true;
	};

	/**
	 * Load a game decrypting it with the specified password.
	 *
	 * @public
	 * @param {String} password
	 * @returns {Boolean}
	 */
	this.load_game = function(password) {
		var data = null;
		this.encryption.key = password;
		var game_data = this.get_storage_data();
		if (game_data) {
			this.show_loader();
			data = this._load_settlement(this.import(game_data.data));
		} else {
			return false;
		}
		this._setup_game(data);
		return true;
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
	 * @private
	 * @returns {civitas.game}
	 */
	this._refresh_influence = function() {
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
		this._refresh_influence();
		this.year++;
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
	 * Get the version of the game.
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_version = function() {
		return civitas.VERSION;
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
