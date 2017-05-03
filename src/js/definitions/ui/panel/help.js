/**
 * Help panel data.
 *
 * @type {Object}
 */
civitas.PANEL_HELP = {
	template: civitas.ui.generic_panel_template(),
	id: 'help',
	on_show: function(params) {
		var self = this;
		var core = this.core();
		var settlement = core.get_settlement();
		$(this.handle + ' section').append(civitas.ui.tabs([civitas.l('About'), civitas.l('Buildings'), civitas.l('Settlements'), civitas.l('Religion'), civitas.l('Research'), civitas.l('Cheats')]));
		$(this.handle + ' header').append(civitas.l('Help'));
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
			'<p>The goods you`re producing need a storage place inside your city, the initial Marketplace provides some storage space (100k <img src="' + civitas.ASSETS_URL + 'images/resources/storage_small.png" /> ), and it can be increased even further with upgrading, but you will need to build Warehouses to store all the goods. If you have no free storage space, the produced goods will be lost.</p>' +
			'<h3>Coins</h3>' +
			'<p>Your city can only gain coins through trades and taxes.</p>');
		$(this.handle + ' #tab-religion').empty().append('<h2>Religion</h2>' +
			'');
		$(this.handle + ' #tab-settlements').empty().append('<fieldset>' +
				'<legend>Table of Contents</legend>' +
				'<ul>' +
					'<li><a href="#">Intro</a></li>' +
					'<li><a href="#">Cities and villages</a></li>' +
					'<li><a href="#">Diplomacy</a></li>' +
					'<li><a href="#">Fame and levels</a></li>' +
					'<li><a href="#">Influence</a></li>' +
					'<li><a href="#">Espionage</a></li>' +
					'<li><a href="#">Prestige</a></li>' +
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
			'<h3>Fame and levels</h3>' +
			'<p>Each time you reach a specific fame level, your city gets a new level, thus you never lose your initial fame. There are several ways of getting extra fame (besides your initial Marketplace), there are several municipal buildings that add a small amount of fame to your city each day (this amount can be increased by upgrading the buildings).</p>' +
			'<p>There is no fixed way in which you can lose fame, except the random events that occur from time to time, or if another city manages to incite your population to revolt.</p>' +
			'<p>The current maximum level a settlement can reach is <strong>' + civitas.MAX_SETTLEMENT_LEVEL + '</strong> and to reach that level your city will need <strong>' + civitas.utils.nice_numbers(civitas.LEVELS[civitas.MAX_SETTLEMENT_LEVEL - 1]) + '</strong> ' + civitas.ui.resource_small_img('fame') + '. There is no fixed date (in game or real days) to reach that level, it all depends on your decisions, buildings, diplomacy, etc.</p>' +
			'<h3>Influence</h3>' +
			'<p>All settlements in the game world have an influence rating with each of the other settlements. The influence drops over time (yearly) and needs to be kept above a certain level, else the other cities might attack your city.</p>' +
			'<p>Maximum influence a settlement can have is <strong>' + civitas.MAX_INFLUENCE_VALUE + '</strong>.</p>' +
			'<h3>Espionage</h3>' +
			'<p>After building your city Embassy, you can start assigning spies to other settlements using your accumulated espionage points. Depending on the amount of espionage you use for a spy mission, that mission has a rate of success. The most points you can assign are <strong>' + civitas.MAX_ESPIONAGE_VALUE + '</strong> ' + civitas.ui.resource_small_img('espionage') + ' (maximum espionage points a city can get) and this gives you approximately a <strong>' + (civitas.MAX_ESPIONAGE_VALUE / civitas.MAX_ESPIONAGE_SUCESS_RATE) + '%</strong> success rate.</p>' +
			'<h3>Prestige</h3>' +
			'<p>Prestige is a very important feature of your city because it influences the way other settlements see you and they will act upon that information. Low prestige might be good for your city if you plan to lay low and prepare (the other settlements won`t bother to go to war with a city with low prestige unless you manage somehow to piss them off) but usually, your city prestige should raise with the city level.</p>' +
			'<p>Prestige is gained through trading with other settlements, sending caravans with resources to help them when in need, etc. Random events can also affect your city prestige. The maximum prestige a settlement can get is <strong>' + civitas.MAX_PRESTIGE_VALUE + '</strong> ' + civitas.ui.resource_small_img('prestige') + '.</p>' +
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
					'<a href="#" class="btn iblock thirteen">' + civitas.l('+1k coins') + '</a> ' +
					'<a href="#" class="btn iblock one">' + civitas.l('+10k coins') + '</a> ' +
					'<a href="#" class="btn iblock nine">' + civitas.l('+100k coins') + '</a> ' +
					'<a href="#" class="btn iblock eight">' + civitas.l('+1M coins') + '</a> <br /><br />' +
					'<a href="#" class="btn iblock two">' + civitas.l('+100 wood') + '</a> ' +
					'<a href="#" class="btn iblock three">' + civitas.l('+100 stones') + '</a> ' +
					'<a href="#" class="btn iblock thirty">' + civitas.l('+4 bread') + '</a> ' +
					'<a href="#" class="btn iblock fifteen">' + civitas.l('+1000 provisions') + '</a> ' +
					'<a href="#" class="btn iblock four">' + civitas.l('+100 wood planks') + '</a> <br /><br />' +
					'<a href="#" class="btn iblock five">' + civitas.l('level up') + '</a> ' +
					'<a href="#" class="btn iblock fourteen">' + civitas.l('+900 faith') + '</a> ' +
					'<a href="#" class="btn iblock six">' + civitas.l('+1000 fame') + '</a> ' +
					'<a href="#" class="btn iblock ten">' + civitas.l('+5000 fame') + '</a> <br /><br />' +
					'<a href="#" class="btn iblock seven">' + civitas.l('refresh trades') + '</a> <br /><br />' +
					'<a href="#" class="btn iblock eleven">' + civitas.l('random soldiers') + '</a> ' +
					'<a href="#" class="btn iblock twelve">' + civitas.l('random ships') + '</a> ' +
					'<a href="#" class="btn iblock fourty">' + civitas.l('defend city') + '</a> ' +
					'<a href="#" class="btn iblock fifty">' + civitas.l('battle-ready') + '</a> ' +
				'</div>');
			$(this.handle).on('click', '.fourty', function() {
				var city_index = civitas.utils.get_random(1, core.get_num_settlements() - 1);
				var _settlement = core.get_settlement(city_index);
				core.add_to_queue(_settlement, settlement, civitas.ACTION_CAMPAIGN, civitas.CAMPAIGN_ARMY, {
					army: {
						militia: 40,
						axeman: 30,
						knight: 10,
						bowman: 20,
						cannon: 200,
						heavycannon: 200,
						catapult: 300,
						crossbowman: 10,
						pikeman: 30
					}
				});
				return false;
			}).on('click', '.fifty', function() {
				for (var i = 0; i < 9; i++) {
					settlement.level_up();
				}
				settlement.add_to_storage('wood', 1000);
				settlement.add_to_storage('stones', 1000);
				settlement.add_to_storage('woodplanks', 1000);
				settlement.add_to_storage('provisions', 1000);
				settlement.inc_coins(1000000);
				var army = settlement.get_army();
				for (var soldier in army) {
					army[soldier] = civitas.utils.get_random(1, 100);
				}
				settlement.build('provisions');
				settlement.build('camp');
				core.save_and_refresh();
				return false;
			}).on('click', '.eleven', function() {
				var army = settlement.get_army();
				for (var soldier in army) {
					army[soldier] = civitas.utils.get_random(1, 100);
				}
				core.save_and_refresh();
				return false;
			}).on('click', '.twelve', function() {
				var navy = settlement.get_navy();
				for (var ship in navy) {
					navy[ship] = civitas.utils.get_random(1, 10);
				}
				core.save_and_refresh();
				return false;
			}).on('click', '.fourteen', function() {
				settlement.raise_faith(900);
				core.save_and_refresh();
				return false;
			}).on('click', '.thirteen', function() {
				settlement.inc_coins(1000);
				core.save_and_refresh();
				return false;
			}).on('click', '.nine', function() {
				settlement.inc_coins(100000);
				core.save_and_refresh();
				return false;
			}).on('click', '.eight', function() {
				settlement.inc_coins(1000000);
				core.save_and_refresh();
				return false;
			}).on('click', '.one', function() {
				settlement.inc_coins(10000);
				core.save_and_refresh();
				return false;
			}).on('click', '.fifteen', function() {
				settlement.add_to_storage('provisions', 1000);
				core.save_and_refresh();
				return false;
			}).on('click', '.two', function() {
				settlement.add_to_storage('wood', 100);
				core.save_and_refresh();
				return false;
			}).on('click', '.thirty', function() {
				settlement.add_to_storage('bread', 4);
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
			}).on('click', '.ten', function() {
				settlement.raise_fame(5000);
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
