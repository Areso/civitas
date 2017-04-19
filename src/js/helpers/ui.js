/**
 * Main Game UI interface.
 */
civitas.ui = {

	building_panel_template: function(id, title) {
		var out = '<div id="panel-' + id + '" class="panel">' +
			'<header>' +
				'<span class="title">' + title + '</span>' +
				'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents"></div>' +
			'<footer class="footer clearfix">' +
				'<a class="tips demolish btn" title="' + civitas.l('Demolish this building') + '"></a>' +
				'<a class="tips pause start btn" title="' + civitas.l('Control (start/pause) production') + '"></a>' +
				'<a class="tips upgrade btn" title="' + civitas.l('Upgrade building') + '"></a>' +
			'</footer>' +
		'</div>';
		return out;
	},

	building_panel: function (params, level) {
		var out = '<p>' + params.description + '</p>' +
			'<dl>' +
				civitas.ui.level_panel(params.level, level) +
				civitas.ui.cost_panel(params.cost, level, params.levels) +
				civitas.ui.materials_panel(params.materials) +
				civitas.ui.production_panel(params.production, level) +
				civitas.ui.requires_panel(params.requires) +
				civitas.ui.chance_panel(params.chance, level) +
				civitas.ui.tax_panel(params.tax, level) +
				civitas.ui.storage_panel(params.storage, level) +
			'</dl>';
		return out;
	},

	normal_panel: function (section, contents) {
		var out = '<fieldset>' +
				'<legend>' + section + '</legend>' +
				contents +
				'</fieldset>';
		return out;
	},

	level_panel: function (level, new_level) {
		var out = '<dt>' + civitas.l('Level') + '</dt>' +
			'<dd>' + new_level + '</dd>';
		return out;
	},

	cost_panel: function (costs, level, levels) {
		var out = '';
		if (typeof costs !== 'undefined') {
			out += '<dt>' + civitas.l('Cost') + '</dt>';
			for (var item in costs) {
				out += '<dd>' + civitas.utils.nice_numbers(costs[item]) + civitas.ui.resource_small_img(item) + (typeof levels !== 'undefined' && level < levels ? ' / ' + civitas.utils.nice_numbers(costs[item] * (level + 1)) + civitas.ui.resource_small_img(item) : '') + '</dd>';
			}
		}
		return out;
	},

	progress: function(value, progress_type, show_value) {
		if (typeof progress_type === 'undefined') {
			progress_type = 'small';
		}
		var _e = '';
		if (value < 10) {
			_e = ' ubad';
		} else if (value >= 10 && value < 30) {
			_e = ' vbad';
		} else if (value >= 30 && value < 40) {
			_e = ' bad';
		} else if (value >= 40 && value < 60) {
			_e = ' good';
		} else if (value >= 60 && value < 90) {
			_e = ' vgood';
		} else if (value >= 90) {
			_e = ' ugood';
		}
		return '<div class="progress ' + progress_type + '"><span class="bar' + _e + '" style="width:' + value + '%">' + (typeof show_value !== 'undefined' ? show_value : value) + '</span></div>';
	},

	army_img: function (name) {
		return '<img class="tips" title="' + name + '" src="' + civitas.ASSETS_URL + 'images/armies/' + name.toLowerCase().replace(/ /g,"_") + '_small.png" />';
	},

	army_list: function (army, no_margin) {
		var out = '<dl' + ((typeof no_margin !== 'undefined' && no_margin === true) ? ' class="nomg"' : '') + '>';
		var total = 0;
		for (var soldier in army.army) {
			out += '<dt>' + army.army[soldier] + '</dt>' +
					'<dd>' + civitas.ui.army_img(soldier) + '</dd>';
			total += army.army[soldier];
		}
		out += '<dt>' + (typeof army.total !== 'undefined' ? army.total : total) + '</dt><dd>' + civitas.l('Total') + '</dd>' +
				'</dl>';
		return out;
	},

	/**
	 * Check if a window exists and is opened.
	 * 
	 * @param {String} id
	 * @public
	 * @returns {Boolean}
	 */
	window_exists: function (id) {
		if ($(id).length == 0) {
			return false;
		}
		return true;
	},

	/**
	 * Check if a panel exists and is opened.
	 * 
	 * @param {String} id
	 * @public
	 * @returns {Boolean}
	 */
	panel_exists: function (id) {
		if ($(id).length == 0) {
			return false;
		}
		return true;
	},

	panel_btn: function (text, title, handle, class_name, disabled) {
		return '<a title="' + title + '" data-handle="' + handle + '" class="tips ' + class_name + (disabled === true ? ' disabled' : '') + '" href="#">' + text + '</a></td>';
	},

	trades_list: function (trades, mode) {
		mode = (typeof mode === 'undefined' || mode === 'imports') ? 'imports' : 'exports';
		var out = '';
		if (trades !== null) {
			out += '<dl>';
			var trade = trades[mode];
			for (var item in trade) {
				out += '<dt>' + trade[item] + '</dt>' +
						'<dd>' + civitas.ui.resource_small_img(item) + '</dd>';
			}
			out += '</dl>';
		}
		return out;
	},

	navy_list: function (army, no_margin) {
		var out = '<dl' + ((typeof no_margin !== 'undefined' && no_margin === true) ? ' class="nomg"' : '') + '>';
		var total = 0;
		for (var soldier in army.navy) {
			out += '<dt>' + army.navy[soldier] + '</dt>' +
					'<dd>' + civitas.ui.army_img(soldier) + '</dd>';
			total += army.navy[soldier];
		}
		out += '<dt>' + (typeof army.total !== 'undefined' ? army.total : total) + '</dt><dd>' + civitas.l('Total') + '</dd>' +
				'</dl>';
		return out;
	},

	building_element: function (params) {
		var building_image = params.type;
		var description = '<br /><span class="smalldesc">' + params.data.description + '</span>';
		if (params.type.slice(0, -1) === 'house') {
			building_image = params.type.slice(0, -1);
		}
		var image = (typeof params.data.visible_upgrades === 'undefined' || params.data.visible_upgrades === false) ? building_image + '1' : building_image + params.data.level;
		return '<div data-type="' + params.type + '" data-level="' + params.data.level + '" ' +
			'style="background:transparent url(' + civitas.ASSETS_URL + 'images/buildings/' + image + '.png) no-repeat;left:' + params.data.position.x + 'px;top:' + params.data.position.y + 'px" ' +
			'title=\'' + params.data.name + '\' ' + 'id="building-' + params.data.handle + '"' +
			'class="tips slots building"></div>';
	},

	resource_storage_small_el: function (resource, amount) {
		return '<div class="tips storage-item small" title="' + civitas.utils.get_resource_name(resource) + '">' +
				'<img src="' + civitas.ASSETS_URL + 'images/resources/' + resource + '_small.png" />' +
				'<span class="amount">' + amount + '</amount>' +
				'</div>';
	},

	resource_storage_el: function (resource, amount) {
		return '<div class="storage-item">' +
				'<span class="title">' + civitas.utils.get_resource_name(resource) + '</span>' +
				'<img src="' + civitas.ASSETS_URL + 'images/resources/' + resource + '.png" />' +
				'<span class="amount">' + amount + '</amount>' +
				'</div>';
	},

	tabs: function (data) {
		var out = '<div class="tabs">' +
				'<ul>';
		for (var i = 0; i < data.length; i++) {
			out += '<li><a href="#tab-' + data[i].toLowerCase() + '">' + data[i] + '</a></li>';
		}
		out += '</ul>';
		for (var i = 0; i < data.length; i++) {
			out += '<div id="tab-' + data[i].toLowerCase() + '">' +
					'</div>';
		}
		out += '</div>';
		return out;
	},

	materials_panel: function (materials) {
		var out = '';
		if (typeof materials !== 'undefined') {
			out += '<dt>' + civitas.l('Uses') + '</dt>';
			for (var item in materials) {
				out += '<dd>' + materials[item] + civitas.ui.resource_small_img(item) + '</dd>';
			}
		}
		return out;
	},

	chance_panel: function (materials, level) {
		var out = '';
		if (typeof materials !== 'undefined') {
			out += '<dt>' + civitas.l('Extra materials') + '</dt>';
			for (var item in materials) {
				out += '<dd>' + (level * materials[item]).toFixed(4) * 100 + '%' + civitas.ui.resource_small_img(item) + '</dd>';
			}
		}
		return out;
	},

	production_panel: function (materials, level) {
		var out = '';
		if (typeof materials !== 'undefined') {
			out += '<dt>' + civitas.l('Produces') + '</dt>';
			for (var item in materials) {
				out += '<dd>' + (level * materials[item]) + civitas.ui.resource_small_img(item) + '</dd>';
			}
		}
		return out;
	},

	requires_panel: function (requires) {
		var out = '';
		if (typeof requires.buildings !== 'undefined') {
			out += '<dt>' + civitas.l('Requires') + '</dt>';
			out += '<dd>';
			for (var i = 0; i <requires.buildings.length; i++) {
				var b = civitas.BUILDINGS[civitas.BUILDINGS.findIndexM(requires.buildings[i])];
				out += b.name + '<br />'
			}
			out += '</dd>';
		}
		return out;
	},

	tax_panel: function (tax, level) {
		var out = '';
		if (typeof tax !== 'undefined') {
			out += '<dt>' + civitas.l('Tax') + '</dt>';
			out += '<dd>' + (level * tax) + civitas.ui.resource_small_img('coins') + '</dd>';
		}
		return out;
	},

	storage_panel: function (storage, level) {
		var out = '';
		if (typeof storage !== 'undefined') {
			out += '<dt>' + civitas.l('Storage') + '</dt>';
			out += '<dd>' + (level * storage) + '<img alt="Storage space" class="tips" title="' + civitas.l('Storage Space') + '" src="' + civitas.ASSETS_URL + 'images/resources/storage_small.png" /></dd>';
		}
		return out;
	},

	resource_small_img: function (resource) {
		return '<img alt="' + civitas.utils.get_resource_name(resource) + '" class="tips" title="' + civitas.utils.get_resource_name(resource) + '" src="' + civitas.ASSETS_URL + 'images/resources/' + resource + '_small.png" />';
	}
};