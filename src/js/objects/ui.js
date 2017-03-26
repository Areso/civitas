/**
 * Main Game UI interface.
 */
city_builder.ui = {
	
	building_panel_template: '<div id="panel-{id}" class="panel pb">' +
			'<header>' +
			'<span class="title"></span>' +
			'<a class="tips close btn" title="' + city_builder.l('Close this panel') + '"></a>' +
			'<a class="tips demolish btn" title="' + city_builder.l('Demolish this building') + '"></a>' +
			'<a class="tips pause start btn" title="' + city_builder.l('Control (start/pause) production') + '"></a>' +
			'</header>' +
			'<div class="contents"></div>' +
			'<foooter></footer>' +
			'</div>',
	
	worldmap_panel_template: '<div id="panel-{id}" class="panel">' +
			'<header>' +
			'<span class="title">' + city_builder.l('World Map') + '</span>' +
			'<a class="tips btn close" title="' + city_builder.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents"><div class="worldmap"></div></div>' +
			'</div>',
	
	generic_panel_template: '<div id="panel-{id}" class="panel">' +
			'<header>' +
			'<span class="title">{title}</span>' +
			'<a class="tips btn close" title="' + city_builder.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents"></div>' +
			'</div>',
	
	normal_panel: function (section, contents) {
		var out = '<fieldset>' +
				'<legend>' + section + '</legend>' +
				contents +
				'</fieldset>';
		return out;
	},
	
	cost_panel: function (costs) {
		var out = '';
		if (typeof costs !== 'undefined') {
			out += '<dt>' + city_builder.l('Cost') + '</dt>';
			for (var item in costs) {
				out += '<dd>' + city_builder.utils.nice_numbers(costs[item]) + city_builder.ui.resource_small_img(item) + '</dd>';
			}
		}
		return out;
	},
	
	city_worldmap_element: function (name) {
		return '<div data-name="' + name + '" class="tips city" title="' + city_builder.l('City of') + ' ' + name + '" style="left:' + city_builder.CITIES[name].location.x + 'px;top:' + city_builder.CITIES[name].location.y + 'px"></div>';
	},
	
	army_img: function (name) {
		return '<img class="tips" title="' + name + '" src="' + city_builder.ASSETS_URL + 'images/armies/' + name.toLowerCase() + '_small.png" />';
	},
	
	army_list: function (army, no_margin) {
		var out = '<dl' + ((typeof no_margin !== 'undefined' && no_margin === true) ? ' class="nomg"' : '') + '>';
		var total = 0;
		for (var soldier in army.army) {
			out += '<dt>' + army.army[soldier] + '</dt>' +
					'<dd>' + city_builder.ui.army_img(soldier) + '</dd>';
			total += army.army[soldier];
		}
		out += '<dt>' + city_builder.l('Total') + '</dt><dd>' + (typeof army.total !== 'undefined' ? army.total : total) + ' ' + city_builder.l('soldiers') + '.</dd>' +
				'</dl>';
		return out;
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
						'<dd>' + city_builder.ui.resource_small_img(item) + '</dd>';
			}
			out += '</dl>';
		}
		return out;
	},
	
	navy_list: function (army, no_margin) {
		var out = '<dl' + ((typeof no_margin !== 'undefined' && no_margin === true) ? ' class="nomg"' : '') + '>';
		for (var soldier in army.navy) {
			out += '<dt>' + army.navy[soldier] + '</dt>' +
					'<dd>' + city_builder.ui.army_img(soldier) + '</dd>';
		}
		out += '<dt>' + city_builder.l('Total') + '</dt><dd>' + army.total + ' ' + city_builder.l('ships') + '.</dd>' +
				'</dl>';
		return out;
	},
	
	building_element: function (params) {
		var description = '<br /><span class="smalldesc">' + params.data.description + '</span>';
		var image = (typeof params.data.visible_upgrades === 'undefined' || params.data.visible_upgrades === false) ? params.type + '1' : params.type + params.data.level;
		return '<div data-type="' + params.type + '" data-level="' + params.data.level + '" ' +
				'style="background:transparent url(' + city_builder.ASSETS_URL + 'images/buildings/' + image + '.png) no-repeat;left:' + params.data.position.x + 'px;top:' + params.data.position.y + 'px" ' +
				'title=\'<span class="buildinginfo">' + params.data.name + '</span> ' + description + '\' ' +
				'id="building-' + params.data.handle + '"' +
				'class="tips slots building"></div>';
	},
	
	resource_storage_el: function (resource, amount) {
		return '<div class="storage-item item-' + resource + '">' +
				'<span class="title">' + city_builder.RESOURCES[resource].name + '</span>' +
				'<img src="' + city_builder.ASSETS_URL + 'images/resources/' + resource + '.png" />' +
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
			out += '<dt>' + city_builder.l('Uses') + '</dt>';
			for (var item in materials) {
				out += '<dd>' + materials[item] + city_builder.ui.resource_small_img(item) + '</dd>';
			}
		}
		return out;
	},
	
	production_panel: function (materials, level) {
		var out = '';
		if (typeof materials !== 'undefined') {
			out += '<dt>' + city_builder.l('Produces') + '</dt>';
			for (var item in materials) {
				out += '<dd>' + (level * materials[item]) + city_builder.ui.resource_small_img(item) + '</dd>';
			}
		}
		return out;
	},
	
	requires_panel: function (requires) {
		var out = '';
		if (typeof requires.buildings !== 'undefined') {
			out += '<dt>' + city_builder.l('Requires') + '</dt>';
			var b = city_builder.BUILDINGS[city_builder.BUILDINGS.findIndexM(requires.buildings)];
			out += '<dd>' + b.name + '</span>';
		}
		return out;
	},
	
	tax_panel: function (tax, level) {
		var out = '';
		if (typeof tax !== 'undefined') {
			out += '<dt>' + city_builder.l('Tax') + '</dt>';
			out += '<dd>' + (level * tax) + city_builder.ui.resource_small_img('coins') + '</dd>';
		}
		return out;
	},
	
	storage_panel: function (storage, level) {
		var out = '';
		if (typeof storage !== 'undefined') {
			out += '<dt>' + city_builder.l('Storage') + '</dt>';
			out += '<dd>' + (level * storage) + '<img alt="Storage space" class="tips" title="' + city_builder.l('Storage Space') + '" src="' + city_builder.ASSETS_URL + 'images/resources/storage_small.png" /></dd>';
		}
		return out;
	},
	
	resource_small_img: function (resource) {
		return '<img alt="' + city_builder.RESOURCES[resource].name + '" class="tips" title="' + city_builder.RESOURCES[resource].name + '" src="' + city_builder.ASSETS_URL + 'images/resources/' + resource + '_small.png" />';
	}
};
