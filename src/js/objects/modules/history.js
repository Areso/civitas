/**
 * Main Game history object.
 * 
 * @param {Object} params
 * @class {civitas.modules.history}
 * @returns {civitas.modules.history}
 */
civitas.modules.history = function (params) {

	/**
	 * Reference to the core object.
	 * 
	 * @type {civitas.game}
	 */
	this.core = null;

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {civitas.modules.history}
	 * @param {Object} params
	 */
	this.__init = function (params) {
		this.core = params.core;
		// TODO
		return this;
	};

	// Fire up the constructor
	return this.__init(params);
};
