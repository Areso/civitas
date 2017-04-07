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
				(civitas.DEBUG === true ?
				'<div class="hr"></div>' +
				'<fieldset class="toolbar">' +
					'<legend>Cheats</legend>' +
					'<a href="#" class="btn iblock one">10k coins</a> ' +
					'<a href="#" class="btn iblock two">100 wood</a> ' +
					'<a href="#" class="btn iblock three">100 stones</a> ' +
					'<a href="#" class="btn iblock four">100 wood planks</a> ' +
					'<a href="#" class="btn iblock five">level up</a> ' +
					'<a href="#" class="btn iblock six">1000 fame</a> ' +
					'<a href="#" class="btn iblock seven">refresh trades</a> ' +
				'</fieldset>' : '') +
			'</div>' +
		'</div>',
	term: null,
	context: null,
	id: 'help',
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
		var settlement = core.get_settlement();
		if (typeof params.data !== 'undefined') {
			this.term = params.data.term;
			this.context = params.data.context;
		}
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
		//$(this.handle + ' .contents').append();
		if (civitas.DEBUG === true) {
			$(this.handle).on('click', '.one', function() {
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
