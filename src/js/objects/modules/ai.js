/**
 * Main Game AI (Artificial Intelligence) object.
 * 
 * @param {Object} params
 * @class {civitas.modules.ai}
 * @returns {civitas.modules.ai}
 */
civitas.modules.ai = function (params) {

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
	 * @returns {civitas.modules.ai}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		this.core = params.core;
		return this;
	};

	// Fire up the constructor
	return this.__constructor(params);
};
