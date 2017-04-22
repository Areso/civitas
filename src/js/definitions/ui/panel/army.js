/**
 * Army panel data.
 *
 * @type {Object}
 */
civitas.PANEL_ARMY = {
	template: '' +
		'<div id="panel-army" class="panel">' +
			'<header>' +
				'<span class="title"></span>' +
				'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents"></div>' +
		'</div>',
	id: 'army',
	on_show: function(params) {
		var army = params.data;
		$(this.handle + ' header .title').html(army.name);
		$(this.handle + ' .contents').append(civitas.ui.tabs(['Info', 'Soldiers', 'Ships']));
		$(this.handle + ' #tab-info').append('<img class="avatar" src="' + civitas.ASSETS_URL + 'images/armies/' + ((typeof army.icon !== 'undefined') ? army.icon : '22') + '.png" />' +
			'<p>' + army.description + '</p>');
		$(this.handle + ' #tab-soldiers').append(civitas.ui.army_list(army));
		$(this.handle + ' #tab-ships').append(civitas.ui.navy_list(army));
	}
};
