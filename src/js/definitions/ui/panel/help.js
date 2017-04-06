/**
 * Panel panel data.
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
		var city = core.get_city();
		if (typeof params.data !== 'undefined') {
			this.term = params.data.term;
			this.context = params.data.context;
		}
		var title = '';
		switch (this.context) {
			case 'building':
				var data = core.get_city().get_building_by_handle(this.term);
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
				city.inc_coins(10000);
				core.refresh();
				return false;
			}).on('click', '.two', function() {
				city.add_to_storage('wood', 100);
				core.refresh();
				return false;
			}).on('click', '.three', function() {
				city.add_to_storage('stones', 100);
				core.refresh();
				return false;
			}).on('click', '.four', function() {
				city.add_to_storage('woodplanks', 100);
				core.refresh();
				return false;
			}).on('click', '.five', function() {
				city.level_up();
				core.refresh();
				return false;
			}).on('click', '.six', function() {
				city.raise_fame(1000);
				core.refresh();
				return false;
			}).on('click', '.seven', function() {
				core.refresh_trades();
				core.refresh();
				return false;
			});
		}
	}
};
