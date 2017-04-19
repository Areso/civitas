/**
 * Help panel data.
 *
 * @type {Object}
 */
civitas.PANEL_HELP = {
	template: '' +
		'<div id="panel-help" class="panel">' +
			'<header>' +
				'<span class="title"></span>' +
				'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents">' +
			'</div>' +
		'</div>',
	term: null,
	context: null,
	id: 'help',
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
		var settlement = core.get_settlement();
		var _t = '';
		if (typeof params.data !== 'undefined') {
			this.term = params.data.term;
			this.context = params.data.context;
		}
		$(this.handle + ' .contents').append(civitas.ui.tabs([civitas.l('About'), civitas.l('Buildings'), civitas.l('Settlements'), civitas.l('Religion'), civitas.l('Research'), civitas.l('Cheats')]));
		var title = '';
		switch (this.context) {
			case 'building':
				var data = core.get_settlement().get_building_by_handle(this.term);
				title = data.get_name();
				break;
			case 'settlement':
				title = 'Settlements';
				break;
		}
		$(this.handle + ' header .title').html(title !== '' ? civitas.l('Help about ') + title : civitas.l('Help'));
		$(this.handle + ' #tab-buildings').empty().append(
			'<fieldset>' +
				'<legend>Table of Contents</legend>' +
				'<ul>' +
					'<li><a href="#">Intro</a></li>' +
					'<li><a href="#">Build</a></li>' +
					'<li><a href="#">Upgrade</a></li>' +
					'<li><a href="#">Demolish</a></li>' +
					'<li><a href="#">Production</a></li>' +
					'<li><a href="#">Housing</a></li>' +
					'<li><a href="#">Municipal</a></li>' +
					'<li><a href="#">Storage</a></li>' +
					'<li><a href="#">Coins</a></li>' +
				'</ul>' +
			'</fieldset>' +
			'<h3>Intro</h3>' +
			'<p>In Civitas, buildings are the backbone of your city, providing you with goods for export.</p>' +
			'<h3>Build</h3>' +
			'<p>Each building has some special requirements to build, whether a required city level or another existing building.</p>' +
			'<h3>Upgrade</h3>' +
			'<p>Upgrading one of your buildings has several benefits, besides the obvious estetic one.</p>' +
			'<img title="Level 1 house" class="tips" src="' + civitas.ASSETS_URL + 'images/buildings/house1.png" /> ' +
			'<img title="Level 3 house" class="tips" src="' + civitas.ASSETS_URL + 'images/buildings/house3.png" /> ' +
			'<img title="Maximum level house" class="tips" src="' + civitas.ASSETS_URL + 'images/buildings/house5.png" />' +
			'<p>Upgrading a building costs the initial building price multiplied by the level. So, if a building initially costs 100 ' + civitas.ui.resource_small_img('coins') + ' and 20 ' + civitas.ui.resource_small_img('wood') + ' to construct, upgrading it to level 2 will cost 200 ' + civitas.ui.resource_small_img('coins') + ' and 40 ' + civitas.ui.resource_small_img('wood') + ', so on.</p>' +
			'<p>When a building is upgraded, it produces the inital amount of goods multiplied by the level of the building. Keep in mind that the materials it uses for production are the same as for a building of level 1, so upgrading a building is an easy way of getting double (or triple) the production goods for the same materials as the previous level used.</p>' +
			'<h3>Demolish</h3>' +
			'<p>Demolishing a building has no actual benefits except it no longer used the production materials (a better way to adjust that will be to stop the production of the specific building, this way you can restart it when you want).</p>' +
			'<h3>Production</h3>' +
			'<p></p>' +
			'<h3>Housing</h3>' +
			'<p></p>' +
			'<h3>Municipal</h3>' +
			'<p></p>' +
			'<h3>Storage</h3>' +
			'<p>The goods you`re producing need a storage place inside your city, the initial Marketplace provides some storage space (and it can be increased even further with upgrading) but you will need to build Warehouses to store all the goods. If you have no free storage space, the produced goods will be lost.</p>' +
			'<h3>Coins</h3>' +
			'<p>Your city can only gain coins through trades and taxes.</p>');
		$(this.handle + ' #tab-religion').empty().append('<h2>Religion</h2>' +
			'');
		$(this.handle + ' #tab-settlements').empty().append(
			'<fieldset>' +
				'<legend>Table of Contents</legend>' +
				'<ul>' +
					'<li><a href="#">Intro</a></li>' +
					'<li><a href="#">Cities and villages</a></li>' +
					'<li><a href="#">Diplomacy</a></li>' +
					'<li><a href="#">Pacts and alliances</a></li>' +
					'<li><a href="#">Wars</a></li>' +
					'<li><a href="#">Caravans</a></li>' +
				'</ul>' +
			'</fieldset>' +
			'<h3>Intro</h3>' +
			'<p></p>' +
			'<h3>Cities and villages</h3>' +
			'<p></p>' +
			'<h3>Diplomacy</h3>' +
			'<p></p>' +
			'<h3>Pacts and alliances</h3>' +
			'<p></p>' +
			'<h3>Wars</h3>' +
			'<p></p>' +
			'<h3>Caravans</h3>' +
			'<p></p>');
		$(this.handle + ' #tab-about').empty().append('<h2>About Civitas</h2>' +
			'<p>Civitas is an empire-building game written in Javascript with the help of the <a target="_blank" href="https://jquery.com">jQuery</a> library. All the development is done over <a target="_blank" href="https://github.com/sizeofcat/civitas">GitHub</a> and everybody can contribute.</p>' +
			'<p>Civitas is written by <a target="_blank" href="https://sizeof.cat">sizeof(cat)</a>, is free and distributed under the <a target="_blank" href="https://raw.githubusercontent.com/sizeofcat/civitas/master/LICENSE">MIT license</a>.</p>' +
			'<p>Big thanks to:</p>' +
			'<ul>' +
				'<li><a target="_blank" href="https://soundcloud.com/shantifax">Shantifax</a> for the music (Glandula Pinealis).</li>' +
				'<li><a target="_blank" href="https://brendaneich.com/">Brendan Eich</a> for Javascript.</li>' +
				'<li><a target="_blank" href="http://bluebyte.com">Blue Byte</a> for Anno 1404.</li>' +
			'</ul>');
		$(this.handle + ' #tab-research').empty().append('<h2>Research</h2>' +
			'');
		$(this.handle + ' #tab-diplomacy').empty().append('<h2>Diplomacy</h2>' +
			'');
		if (civitas.DEBUG === true) {
			$(this.handle + ' #tab-cheats').empty().append('<h2>Cheats</h2>' +
				'<div class="toolbar">' +
					'<a href="#" class="btn iblock one">' + civitas.l('10k coins') + '</a> ' +
					'<a href="#" class="btn iblock eight">' + civitas.l('1M coins') + '</a> ' +
					'<a href="#" class="btn iblock two">' + civitas.l('100 wood') + '</a> ' +
					'<a href="#" class="btn iblock three">' + civitas.l('100 stones') + '</a> ' +
					'<a href="#" class="btn iblock four">' + civitas.l('100 wood planks') + '</a> ' +
					'<a href="#" class="btn iblock five">' + civitas.l('level up') + '</a> ' +
					'<a href="#" class="btn iblock six">' + civitas.l('1000 fame') + '</a> ' +
					'<a href="#" class="btn iblock seven">' + civitas.l('refresh trades') + '</a> ' +
				'</div>');
			$(this.handle).on('click', '.eight', function() {
				settlement.inc_coins(1000000);
				core.save_and_refresh();
				return false;
			}).on('click', '.one', function() {
				settlement.inc_coins(10000);
				core.save_and_refresh();
				return false;
			}).on('click', '.two', function() {
				settlement.add_to_storage('wood', 100);
				core.save_and_refresh();
				return false;
			}).on('click', '.three', function() {
				settlement.add_to_storage('stones', 100);
				core.save_and_refresh();
				return false;
			}).on('click', '.four', function() {
				settlement.add_to_storage('woodplanks', 100);
				core.save_and_refresh();
				return false;
			}).on('click', '.five', function() {
				settlement.level_up();
				core.save_and_refresh();
				return false;
			}).on('click', '.six', function() {
				settlement.raise_fame(1000);
				core.save_and_refresh();
				return false;
			}).on('click', '.seven', function() {
				core.refresh_trades();
				core.save_and_refresh();
				return false;
			});
		}
	}
};
