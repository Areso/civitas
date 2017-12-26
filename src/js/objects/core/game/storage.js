/**
 * Reset (empty) game storage data.
 * 
 * @param {String} key
 * @public
 * @returns {civitas.game}
 */
civitas.game.prototype.reset_storage_data = function(key) {
	if (typeof key === 'undefined') {
		key = 'live';
	}
	localStorage.removeItem(civitas.STORAGE_KEY + '.' + key);
	return this;
};

/**
 * Encrypt data using AES encryption.
 *
 * @public
 * @param {String} data
 * @returns {String}
 */
civitas.game.prototype.encrypt = function(data) {
	var salt = CryptoJS.lib.WordArray.random(128 / 8);
	var key = CryptoJS.PBKDF2(this.encryption.key, salt, {
		keySize: this.encryption.key_size / 32,
		iterations: this.encryption.iterations
	});
	var iv = CryptoJS.lib.WordArray.random(128 / 8);
	var encrypted = CryptoJS.AES.encrypt(data, key, { 
		iv: iv,
		padding: this.encryption.padding,
		mode: this.encryption.mode
	});
	return salt.toString() + iv.toString() + encrypted.toString();
};

/**
 * Decrypt data using AES encryption.
 *
 * @public
 * @param {String} data
 * @returns {String}
 */
civitas.game.prototype.decrypt = function(data) {
	var salt = CryptoJS.enc.Hex.parse(data.substr(0, 32));
	var iv = CryptoJS.enc.Hex.parse(data.substr(32, 32))
	var encrypted = data.substring(64);
	var key = CryptoJS.PBKDF2(this.encryption.key, salt, {
		keySize: this.encryption.key_size / 32,
		iterations: this.encryption.iterations
	});
	var decrypted = CryptoJS.AES.decrypt(encrypted, key, { 
		iv: iv, 
		padding: this.encryption.padding,
		mode: this.encryption.mode
	});
	try {
		decrypted = decrypted.toString(CryptoJS.enc.Utf8);
	} catch (err) {
		return false;
	}
	return decrypted;
};

/**
 * Set game storage data.
 * 
 * @param {String} key
 * @param {Mixed} value
 * @public
 * @returns {civitas.game}
 */
civitas.game.prototype.set_storage_data = function (key, value) {
	if (civitas.ENCRYPTION === true) {
		localStorage.setItem(civitas.STORAGE_KEY + '.' + key, this.encrypt(JSON.stringify(value)));
	} else {
		localStorage.setItem(civitas.STORAGE_KEY + '.' + key, JSON.stringify(value));
	}
	return this;
};

/**
 * Check if there is any stored data.
 *
 * @public
 * @returns {Boolean}
 */
civitas.game.prototype.has_storage_data = function(key) {
	if (typeof key === 'undefined') {
		key = 'live';
	}
	if (localStorage.getItem(civitas.STORAGE_KEY + '.' + key) !== null) {
		return true;
	} else {
		return false;
	}
};

/**
 * Retrieve game storage data.
 * 
 * @param {String} key
 * @public
 * @returns {Mixed}
 */
civitas.game.prototype.get_storage_data = function (key) {
	if (typeof key === 'undefined') {
		key = 'live';
	}
	if (this.has_storage_data(key)) {
		if (civitas.ENCRYPTION === true) {
			var decrypted = this.decrypt(localStorage.getItem(civitas.STORAGE_KEY + '.' + key));
		} else {
			var decrypted = localStorage.getItem(civitas.STORAGE_KEY + '.' + key);	
		}
		if (decrypted !== false) {
			return JSON.parse(decrypted);
		}
	}
	return false;
};

/**
 * Import game data.
 *
 * @public
 * @returns {Object}
 */
civitas.game.prototype.import = function(data) {
	if (data !== false) {
		this.difficulty(data.difficulty);
		this.worldmap(data.worldmap);
		this.queue(data.queue);
		this.achievements(data.achievements);
		this.date(data.date);
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
 * @returns {Object}
 */
civitas.game.prototype.export = function(to_local_storage) {
	var settlement = this.get_settlement();
	var settlements_list = [];
	for (var i = 0; i < this.settlements.length; i++) {
		settlements_list.push(this.settlements[i].export());
	}
	var data = {
		settlements: settlements_list,
		difficulty: this.difficulty(),
		achievements: this.achievements(),
		black_market: this.get_black_market(),
		date: this.date(),
		queue: this.queue(),
		worldmap: this.worldmap(),
		settings: this.get_settings(),
		info: {
			version: civitas.VERSION
		}
	};
	if (to_local_storage === true) {
		var new_data = {
			date: Number(new Date()),
			data: data
		}
		this.set_storage_data('live', new_data);
		return new_data;
	}
	return data;
};

/**
 * Save the game data.
 * 
 * @public
 * @returns {civitas.game}
 */
civitas.game.prototype.save = function () {
	this.export(true);
	return this;
};
