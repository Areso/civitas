
civitas.game.prototype.open_start_window = function() {
	new civitas.controls.window({
		core: this,
		id: 'start',
		template: '<section id="window-start" class="window">' +
			'<div class="logo">Civitas</div>' +
			'<fieldset>' +
				'<p>' + civitas.l('Choose your city details well, climate changes affect your building options and resources.') + '</p>' +
				'<dl>' +
					'<dt class="clearfix">' + civitas.l('Your Name') + ':</dt>' +
					'<dd><input type="text" class="name text-input" /></dd>' +
					'<dt class="clearfix">' + civitas.l('City Name') + ':</dt>' +
					'<dd><input type="text" class="cityname text-input" /></dd>' +
					'<dt class="clearfix">' + civitas.l('Nationality') + ':</dt>' +
					'<dd>' +
						'<select class="nation text-input"></select>' +
					'</dd>' +
					'<dt class="clearfix">' + civitas.l('Climate') + ':</dt>' +
					'<dd>' +
						'<select class="climate text-input"></select>' +
					'</dd>' +
					'<dt class="clearfix">' + civitas.l('Difficulty') + ':</dt>' +
					'<dd>' +
						'<select class="difficulty text-input">' +
							'<option value="1">' + civitas.l('Easy') + '</option>' +
							'<option value="2">' + civitas.l('Medium') + '</option>' +
							'<option value="3">' + civitas.l('Hard') + '</option>' +
							'<option value="4">' + civitas.l('Hardcore') + '</option>' +
						'</select>' +
					'</dd>' +
					'<dt class="clearfix">' + civitas.l('Avatar') + ':</dt>' +
					'<dd class="avatar-select-container">' +
						'<div class="avatar-select"></div>' +
						'<div class="scrollbar">' +
							'<div class="up"></div>' +
							'<div class="down"></div>' +
						'</div>' +
					'</dd>' +
				'</dl>' +
				'<a href="#" class="do-start button">' + civitas.l('Start Playing') + '</a>' +
			'</fieldset>' +
		'</section>',
		on_show: function() {
			var self = this;
			var core = this.get_core();
			var el = '#window-' + this.id;
			var avatar = 1;
			for (var i = 1; i < civitas.CLIMATES.length; i++) {
				$(el + ' .climate').append('<option value="' + civitas['CLIMATE_' + civitas.CLIMATES[i].toUpperCase()] + '">' + civitas.CLIMATES[i].capitalize() + '</option>');
			}
			for (var i = 1; i < civitas.NATIONS.length; i++) {
				$(el + ' .nation').append('<option value="' + civitas['NATION_' + civitas.NATIONS[i].toUpperCase()] + '">' + civitas.NATIONS[i].capitalize() + '</option>');
			}
			for (var i = 1; i <= civitas.AVATARS; i++) {
				$(el + ' .avatar-select').append('<img src="' + civitas.ASSETS_URL + 'images/avatars/avatar' + i + '.png" />');
			}
			$(el).on('click', '.do-start', function () {
				var name = $(el + ' .name').val();
				var cityname = $(el + ' .cityname').val();
				var nation = parseInt($(el + ' .nation').val());
				var climate = parseInt($(el + ' .climate').val());
				var difficulty = parseInt($(el + ' .difficulty').val());
				if (name === '') {
					core.error('Enter your ruler name, for example <strong>Ramses</strong>.', 'Error', true);
					return false;
				}
				if (cityname === '') {
					core.error('Enter your city name, for example <strong>Alexandria</strong>.', 'Error', true);
					return false;
				}
				core.show_loader();
				core.start_game(name, cityname, nation, climate, avatar, difficulty);
				self.destroy();
				return false;
			}).on('click', '.down', function () {
				if (avatar < civitas.AVATARS) {
					avatar = avatar + 1;
				}
				$(el + ' .avatar-select').scrollTo('+=64px', 500);
			}).on('click', '.up', function () {
				if (avatar > 1) {
					avatar = avatar - 1;
				}
				$(el + ' .avatar-select').scrollTo('-=64px', 500);
			});
		}
	});
}
