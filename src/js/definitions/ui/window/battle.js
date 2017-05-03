/**
 * Battle window data.
 *
 * @type {Object}
 */
civitas.WINDOW_BATTLE = {
	template: '' +
		'<section id="window-{ID}" class="window">' +
			'<div class="container">' +
				'<div title="' + civitas.l('Attack and defense rating for the attacking army.') + '" class="tips attack"></div>' +
				'<div title="' + civitas.l('Attack and defense rating for the defending army.') + '" class="tips defense"></div>' +
				'<div class="battleground"></div>' +
				'<div title="' + civitas.l('Current turn.') + '" class="tips turns">1</div>' +
				'<div class="status"></div>' +	
				'<div class="toolbar">' +
					'<a title="' + civitas.l('End current turn.') + '" class="tips button end" href="#">' + civitas.l('End turn') + '</a> ' +
					'<a title="' + civitas.l('Close the window.') + '" class="tips button close" href="#">' + civitas.l('Close') + '</a>' +
				'</div>' +
			'</div>' +
		'</section>',
	id: 'battle',
	on_show: function(params) {
		var self = this;
		var core = this.core();
		var handle = this.handle();
		core.pause();
		this.battleground = new civitas.objects.battleground({
			core: core,
			width: 15,
			height: 9,
			elements: {
				container: handle + ' .battleground',
				attack: handle + ' .attack',
				defense: handle + ' .defense',
				console: handle + ' .status',
			},
			attack: {
				city: this.params_data.source.source.id,
				army: this.params_data.source.data.army,
				navy: this.params_data.source.data.navy
			},
			defense: {
				city: this.params_data.destination.id(),
				army: this.params_data.destination.army,
				navy: this.params_data.destination.navy
			},
			on_win: function(winner, loser) {
				var my_settlement = core.get_settlement(winner.city);
				var settlement = core.get_settlement(loser.city);
				if (self.params_data.source.source.id === winner.city) {
					// player was attacking and won.
					settlement.army = settlement.load_army(loser.army);
					settlement.navy = settlement.load_navy(loser.navy);
					var spoils = settlement.get_spoils();
					core.add_to_queue(settlement, my_settlement, civitas.ACTION_CAMPAIGN, civitas.CAMPAIGN_ARMY_RETURN, {
						army: winner.army,
						navy: winner.navy,
						resources: spoils
					});
				} else if (self.params_data.destination.id() === winner.city) {
					// player was defending and won.
					my_settlement.army = my_settlement.load_army(winner.army);
					my_settlement.navy = my_settlement.load_navy(winner.navy);
					var has_loser_army = settlement.has_army(loser.army);
					var has_loser_navy = settlement.has_navy(loser.navy);
					if (has_loser_army > 0 || has_loser_navy > 0) {
						core.add_to_queue(my_settlement, settlement, civitas.ACTION_CAMPAIGN, civitas.CAMPAIGN_ARMY_RETURN, {
							army: loser.army,
							navy: loser.navy,
							resources: {}
						});
					}
				}
				$(handle + ' .end').hide();
				$(handle + ' .close').show();
			},
			on_lose: function(winner, loser) {
				var settlement = core.get_settlement(winner.city);
				var my_settlement = core.get_settlement(loser.city);
				if (self.params_data.source.source.id === loser.city) {
					// player was attacking and lost.
					settlement.army = settlement.load_army(winner.army);
					settlement.navy = settlement.load_navy(winner.navy);
					var has_loser_army = settlement.has_army(loser.army);
					var has_loser_navy = settlement.has_navy(loser.navy);
					if (has_loser_army > 0 || has_loser_navy > 0) {
						core.add_to_queue(settlement, my_settlement, civitas.ACTION_CAMPAIGN, civitas.CAMPAIGN_ARMY_RETURN, {
							army: loser.army,
							navy: loser.navy,
							resources: {}
						});
					}
				} else if (self.params_data.destination.id() === loser.city) {
					// player was defending and lost.
					my_settlement.army = my_settlement.load_army(loser.army);
					my_settlement.navy = my_settlement.load_navy(loser.navy);
					var spoils = my_settlement.get_spoils();
					core.add_to_queue(my_settlement, settlement, civitas.ACTION_CAMPAIGN, civitas.CAMPAIGN_ARMY_RETURN, {
						army: winner.army,
						navy: winner.navy,
						resources: spoils
					});
				}
				$(handle + ' .end').hide();
				$(handle + ' .close').show();
			},
			on_end_turn: function(turn) {
				$(handle + ' .turns').html(turn);
			}
		});
		$(handle + ' .close').hide();
		$(handle).on('click', '.close', function () {
			core.unpause();
			self.destroy();
			return false;
		}).on('click', '.end', function () {
			self.battleground.end_turn();
			return false;
		});
	}
};
