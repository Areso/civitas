/**
 * Rankings panel data.
 *
 * @type {Object}
 */
civitas.PANEL_RANKINGS = {
	template: '<div id="panel-rankings" class="panel">' +
		'<header>' +
			'<span class="title">' + civitas.l('World Rankings') + '</span>' +
			'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
		'</header>' +
		'<div class="contents"></div>' +
	'</div>',
	id: 'rankings',
	on_show: function(params) {
		this.on_refresh();
	},
	on_refresh: function() {
		var ranking_list = [];
		var cities = this.get_core().get_cities();
		for (var i = 0; i < cities.length; i++) {
			ranking_list.push({
				name: cities[i].get_name(),
				score: cities[i].get_rank()
			});
		}
		ranking_list.sort(function(a, b) {
		    var keyA = new Date(a.score);
		    var keyB = new Date(b.score);
		    if (keyA > keyB) {
		    	return -1;
		    }
		    if (keyA < keyB) {
		    	return 1;
		    }
		    return 0;
		});
		var _t = '<div class="rankings-list">' +
			'<dl>' +
			'<dt>' + civitas.l('City') + '</dt>' + 
			'<dd>' + civitas.l('Score') + '</dd>' +
			'</dl>';
		for (var i = 0; i < ranking_list.length; i++) {
			_t += '<dt>' + ranking_list[i].name + '</dt><dd>' + ranking_list[i].score + '</dd>';
		}
		_t += '</dl>' +
			'</div>';
		$(this.handle + ' .contents').empty().append(_t);
	}
}