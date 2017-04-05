
civitas.PANEL_BUILDINGS = {
	template: '<div id="panel-buildings" class="panel">' +
		'<header>' +
			'<span class="title">City Buildings</span>' +
			'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
		'</header>' +
		'<div class="contents"></div>' +
	'</div>',
	id: 'buildings',
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
		var city = core.get_city();
		var resources = city.get_resources();
		var el = this.handle;
		var _t = '<div class="left buildings">';
		var available_buildings = civitas['CITY_BUILDINGS_' + city.get_climate().name.toUpperCase()];
		_t += '<div class="tabs">' +
				'<ul>';
		for (var category in civitas.BUILDINGS_CATEGORIES) {
			_t += '<li><a href="#tab-' + category.toLowerCase() + '">' + category + '</a></li>';
		}
		_t += '</ul>';
		for (var category in civitas.BUILDINGS_CATEGORIES) {
			_t += '<div id="tab-' + category.toLowerCase() + '" class="bldg-tabs">';
			for (var i = 0; i < civitas.BUILDINGS_CATEGORIES[category].length; i++) {
				var building = civitas.BUILDINGS_CATEGORIES[category][i];
				if ($.inArray(building, available_buildings) !== -1) {
					var building_data = civitas.BUILDINGS[civitas.BUILDINGS.findIndexM(building)];
					var _i = city.is_building_built(building_data.handle);
					_t += '<div data-handle="' + building_data.handle + '" class="building-item' + ((_i === true) ? ' disabled' : '') + '">' +
							'<span class="title">' + building_data.name + '</span>' +
							'<img class="building" src="' + civitas.ASSETS_URL + 'images/buildings/' + ((building_data.handle.slice(0, -1) === 'house') ? building_data.handle.slice(0, -1) : building_data.handle) + '1.png" />' +
							'</div>';
				}
			}
			_t += '</div>';
		}
		_t += '</div>' +
			'</div><div class="buildings-info right">' +
				'<fieldset>' +
				'<legend>' + civitas.l('Description') + '</legend>' +
				'<div class="b-desc"></div>' +
				'</fieldset>' +
				'<fieldset>' +
				'<legend>' + civitas.l('Cost') + '</legend>' +
				'<div class="b-cost"></div>' +
				'</fieldset>' +
				'<fieldset class="materials">' +
				'<legend>' + civitas.l('Materials') + '</legend>' +
				'<div class="b-mats"></div>' +
				'</fieldset>' +
				'<fieldset class="production">' +
				'<legend>' + civitas.l('Production') + '</legend>' +
				'<div class="b-prod"></div>' +
				'</fieldset>' +
				'<fieldset class="extra">' +
				'<legend>' + civitas.l('Extra materials') + '</legend>' +
				'<div class="b-chance"></div>' +
				'</fieldset>' +
				'<fieldset class="storage">' +
				'<legend>' + civitas.l('Storage') + '</legend>' +
				'<div class="b-store"></div>' +
				'</fieldset>' +
				'<fieldset class="taxes">' +
				'<legend>' + civitas.l('Taxes') + '</legend>' +
				'<div class="b-tax"></div>' +
				'</fieldset>' +
				'<fieldset>' +
				'<legend>' + civitas.l('Requirements') + '</legend>' +
				'<div class="b-req"></div>' +
				'</fieldset>' +
				'<div class="toolbar"></div>' +
			'</div>';
		$(el + ' .contents').append(_t);
		$(el).on('click', '.building-item', function () {
			$(el).addClass('expanded');
			$(el + ' .building-item').removeClass('active');
			$(this).addClass('active');
			$(el + ' .b-chance, ' + el + ' .b-tax, ' + el + ' .b-store, ' + el + ' .b-req, ' + el + ' .b-cost, ' + el + ' .b-name, ' + el + ' .b-desc, ' + el + ' .b-mats, ' + el + ' .b-prod, ' + el + ' .toolbar').empty();
			var handle = $(this).data('handle');
			var building = civitas.BUILDINGS[civitas.BUILDINGS.findIndexM(handle)];
			$(el + ' header .title').html(self.title + ' - ' + building.name);
			$(el + ' .b-desc').html(building.description);
			var _z = '<dl class="nomg">';
			for (var y in building.cost) {
				_z += '<dt>' + civitas.utils.nice_numbers(building.cost[y]) + '</dt><dd><img class="tips" title="' + civitas.utils.get_resource_name(y) + '" src="' + civitas.ASSETS_URL + 'images/resources/' + y + '_small.png" /></dd>';
			}
			_z += '</dl>';
			$(el + ' .b-cost').append(_z);
			if (typeof building.requires !== 'undefined') {
				_z = '<dl class="nomg">';
				if (typeof building.requires.buildings !== 'undefined') {
					if (typeof building.requires.buildings === 'object') {
						for (var i = 0; i < building.requires.buildings.length; i++) {
							_z += '<dt>' + civitas.l('Building') + '</dt><dd>' + core.get_building_config_data(building.requires.buildings[i]).name + '</dd>';
						}
					} else {
						_z += '<dt>' + civitas.l('Building') + '</dt><dd>' + core.get_building_config_data(building.requires.buildings).name + '</dd>';
					}
				}
				_z += '<dt>City level</dt><dd>' + building.requires.city_level + '</dd>' +
						'</dl>';
				$(el + ' .b-req').append(_z);
			}
			if (typeof building.chance !== 'undefined') {
				_z = '<dl class="nomg">';
				for (var chance in building.chance) {
					_z += '<dt>' + building.chance[chance] * 100 + '%</dt><dd><img class="tips" title="' + civitas.utils.get_resource_name(chance) + '" src="' + civitas.ASSETS_URL + 'images/resources/' + chance + '_small.png" /></dd>';
				}
				_z += '</dl>';
				$(el + ' .b-chance').append(_z);
				$('fieldset.extra').show();
			} else {
				$('fieldset.extra').hide();
			}
			if (building.is_production === true) {
				$('fieldset.taxes, fieldset.production, fieldset.materials, fieldset.storage').hide();
				if (typeof building.production !== 'undefined') {
					_z = '<dl class="nomg">';
					for (var y in building.production) {
						_z += '<dt>' + building.production[y] + '</dt><dd><img class="tips" title="' + civitas.utils.get_resource_name(y) + '" src="' + civitas.ASSETS_URL + 'images/resources/' + y + '_small.png" /></dd>';
					}
					_z += '</dl>';
					$(el + ' .b-prod').append(_z);
					$('fieldset.production').show();
				}
				if (typeof building.materials !== 'undefined') {
					_z = '<dl class="nomg">';
					for (var y in building.materials) {
						_z += '<dt>' + building.materials[y] + '</dt><dd><img class="tips" title="' + civitas.utils.get_resource_name(y) + '" src="' + civitas.ASSETS_URL + 'images/resources/' + y + '_small.png" /></dd>';
					}
					_z += '</dl>';
					$(el + ' .b-mats').append(_z);
					$('fieldset.materials').show();
				}
			} else if (building.is_housing === true) {
				$('fieldset.production, fieldset.storage').hide();
				if (typeof building.materials !== 'undefined') {
					_z = '<dl class="nomg">';
					for (var y in building.materials) {
						_z += '<dt>' + building.materials[y] + '</dt><dd><img class="tips" title="' + civitas.utils.get_resource_name(y) + '" src="' + civitas.ASSETS_URL + 'images/resources/' + y + '_small.png" /></dd>';
					}
					_z += '</dl>';
					$(el + ' .b-mats').append(_z);
					$('fieldset.materials').show();
				}
				if (typeof building.tax !== 'undefined') {
					_z = '<dl class="nomg">' +
							'<dt>Tax</dt>' +
							'<dd>' + building.tax + '<img class="tips" title="' + civitas.l('Coins') + '" src="' + civitas.ASSETS_URL + 'images/resources/coins_small.png" /></dd>' +
							'</dl>';
					$(el + ' .b-tax').append(_z);
					$('fieldset.taxes').show();
				}
			} else if (typeof building.storage !== 'undefined') {
				$('fieldset.taxes, fieldset.production, fieldset.materials').hide();
				_z = '<dl class="nomg">' +
						'<dt>' + building.storage + '</dt><dd><img class="tips" title="' + civitas.l('Storage Space') + '" src="' + civitas.ASSETS_URL + 'images/resources/storage_small.png" /></dd>' +
						'</dl>';
				$(el + ' .b-store').append(_z);
				$('fieldset.storage').show();
			} else {
				$('fieldset.taxes, fieldset.production, fieldset.materials, fieldset.storage').hide();
			}
			var _i = city.is_building_built(building.handle);
			if (_i !== true) {
				$(el + ' .toolbar').append('<a href="#" class="btn build" data-handle="' + building.handle + '">' + civitas.l('Build') + '</a>');
			} else {
				$(el + ' .toolbar').append(civitas.l('You already constructed this building.'));
			}
			$(el + ' .tips').tipsy({
				gravity: 's'
			});
			$(el + ' .right').show();
			return false;
		}).on('click', '.btn.build', function () {
			var handle = $(this).data('handle');
			if (city.build(handle) !== false) {
				$(el + ' .building-item[data-handle=' + handle + ']').addClass('disabled');
				$(el + ' .toolbar').empty().append(civitas.l('You already have this building.'));
			}
			return false;
		});
	}
}