/**
 * Campaign panel data.
 *
 * @type {Object}
 */
civitas.PANEL_CAMPAIGN = {
	template: '' +
		'<div id="panel-campaign" class="panel">' +
			'<header>' +
				'<span class="title"></span>' +
				'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents"></div>' +
		'</div>',
	params_data: null,
	id: 'campaign',
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
		var my_settlement = core.get_settlement();
		var campaign = params.data;
		this.params_data = params;
		$(this.handle + ' .title').empty().html((campaign.type === civitas.CAMPAIGN_ARMY ? civitas.l('Army') : civitas.l('Caravan')));
		if (campaign.type === civitas.CAMPAIGN_ARMY) {
			$(this.handle + ' .contents').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Army'), civitas.l('Navy')]));
		} else {
			$(this.handle + ' .contents').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Resources')]));
		}
		this.on_refresh();
	},
	on_refresh: function() {
		var self = this;
		var core = this.get_core();
		var my_settlement = core.get_settlement();
		var campaign = this.params_data.data;
		var out = '';
		var source = core.get_settlement(campaign.source.id);
		var destination = core.get_settlement(campaign.destination.id);
		var distance = civitas.utils.get_distance(campaign.source, campaign.destination);
		$(this.handle + ' #tab-info').empty().append('' +
			'<img class="avatar" src="' + civitas.ASSETS_URL + 'images/avatars/avatar' + source.get_ruler_avatar() + '.png" />' +
			'<dl>' +
				'<dt>' + civitas.l('Sent By') + '</dt><dd>' + source.get_name() + '</dd>' +
				'<dt>' + civitas.l('Destination') + '</dt><dd>' + destination.get_name() + '</dd>' +
				'<dt>s</dt><dd>d</dd>' +
				'<dt>' + civitas.l('Distance') + '</dt><dd>' + distance + ' miles (' + campaign.duration + ' ' + civitas.l('days') + ')</dd>' +
				'<dt>' + civitas.l('Remaining') + '</dt><dd>' + (10 * (campaign.duration - campaign.passed)) + ' miles (' + (campaign.duration - campaign.passed) + ' ' + civitas.l('days') + ')</dd>' +
			'</dl>');
		if (campaign.type === civitas.CAMPAIGN_ARMY) {
			$(this.handle + ' #tab-army').empty().append(civitas.ui.army_list(campaign.data));
			$(this.handle + ' #tab-navy').empty().append(civitas.ui.navy_list(campaign.data));
		} else {
			if (typeof campaign.data.resources !== 'undefined') {
				out = '<p>' + civitas.l('This caravan has the the following resources:') + '</p>' +
				'<dl>';
				for (var item in campaign.data.resources) {
					out += '<dt>' + campaign.data.resources[item] + '</dt>' +
						'<dd>' + civitas.ui.resource_small_img(item) + '</dd>';
				}
				out += '</dl>';
			} else {
				out = '<p>' + civitas.l('This is an empty caravan with no resources.') + '</p>';
			}
			$(this.handle + ' #tab-resources').empty().append(out);
		}
	}
};
