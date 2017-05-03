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
					'<a title="' + civitas.l('Withdraw from this fight.') + '" href="#" class="tips button withdraw">' + civitas.l('Withdraw') + '</a> ' +
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
				army: core.get_settlement().parse_army(this.params_data.source.data.army),
				navy: core.get_settlement().parse_navy(this.params_data.source.data.navy)
			},
			defense: {
				city: this.params_data.destination.id(),
				army: this.params_data.destination.parse_army(),
				navy: this.params_data.destination.parse_navy()
			},
			on_win: function(winner, loser) {
				var loser_army = {};
				for (var item in loser.army.soldiers) {
					loser_army[item] = loser.army.soldiers[item].total;
				}
				var winner_army = {};
				for (var item in winner.army.soldiers) {
					winner_army[item] = winner.army.soldiers[item].total;
				}
				var loser_navy = {};
				for (var item in loser.navy.ships) {
					loser_navy[item] = loser.navy.ships[item].total;
				}
				var winner_navy = {};
				for (var item in winner.navy.ships) {
					winner_navy[item] = winner.navy.ships[item].total;
				}
				var settlement = core.get_settlement(loser.city);
				var my_settlement = core.get_settlement(winner.city);
				var resources = settlement.get_resources();
				var spoils = {};
				for (var item in resources) {
					if ($.inArray(item, civitas.NON_RESOURCES) === -1) {
						spoils[item] = resources[item];
						settlement.remove_resource(item, resources[item]);
					}
				}
				settlement.army = settlement.load_army(loser_army);
				settlement.navy = settlement.load_navy(loser_navy);
				core.add_to_queue(settlement, my_settlement, civitas.ACTION_CAMPAIGN, civitas.CAMPAIGN_ARMY_RETURN, {
					army: winner_army,
					navy: winner_navy,
					resources: spoils
				})
				$(handle + ' .end, ' + handle + ' .withdraw').hide();
				$(handle + ' .close').show();
			},
			on_lose: function(winner, loser) {
				var loser_army = {};
				for (var item in loser.army.soldiers) {
					loser_army[item] = loser.army.soldiers[item].total;
				}
				var winner_army = {};
				for (var item in winner.army.soldiers) {
					winner_army[item] = winner.army.soldiers[item].total;
				}
				var loser_navy = {};
				for (var item in loser.navy.ships) {
					loser_navy[item] = loser.navy.ships[item].total;
				}
				var winner_navy = {};
				for (var item in winner.navy.ships) {
					winner_navy[item] = winner.navy.ships[item].total;
				}
				var settlement = core.get_settlement(winner.city);
				var my_settlement = core.get_settlement(loser.city);
				var resources = settlement.get_resources();
				settlement.army = settlement.load_army(winner_army);
				settlement.navy = settlement.load_navy(winner_navy);
				core.add_to_queue(settlement, my_settlement, civitas.ACTION_CAMPAIGN, civitas.CAMPAIGN_ARMY_RETURN, {
					army: winner_navy,
					navy: loser_navy,
					resources: {}
				})
				$(handle + ' .end, ' + handle + ' .withdraw').hide();
				$(handle + ' .close').show();
			},
			on_end_turn: function(turn) {
				$(handle + ' .turns').html(turn);
			}
		});
		$(handle + ' .close').hide();
		$(handle).on('click', '.withdraw', function() {
			core.open_modal(
				function(button) {
					if (button === 'yes') {
						core.unpause();
						// TODO
						self.destroy();
					}
				},
				civitas.l('Are you sure you want to withdraw from this fight? You will lose all your army!')
			);
			return false;
		}).on('click', '.close', function () {
			core.unpause();
			self.destroy();
			return false;
		}).on('click', '.end', function () {
			self.battleground.end_turn();
			return false;
		});
	}
};
