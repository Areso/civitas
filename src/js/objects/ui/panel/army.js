
civitas.PANEL_ARMY = {
	template: '<div id="panel-army" class="panel">' +
		'<header>' +
			'<span class="title"></span>' +
			'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
		'</header>' +
		'<div class="contents"></div>' +
	'</div>',
	id: 'army',
	on_show: function(params) {
		var self = this;
		var army = params.data;
		var el = this.handle;
		$(el + ' header .title').html(army.name);
		$(el + ' .contents').append(civitas.ui.tabs(['Info', 'Soldiers', 'Ships']));
		$(el + ' #tab-info').append('<img class="avatar" src="' + civitas.ASSETS_URL + 'images/armies/' + ((typeof army.icon !== 'undefined') ? army.icon : '22') + '.png" />' +
				'<p>' + army.description + '</p>');
		$(el + ' #tab-soldiers').append(civitas.ui.army_list(army));
		$(el + ' #tab-ships').append(civitas.ui.navy_list(army));
	}
}