
civitas.WINDOW_OPTIONS = {
	id: 'options',
	template: '<section id="window-options" class="window">' +
		'<div class="logo">Civitas</div>' +
		'<fieldset>' +
			'<div class="new-game">' +
				'<p>' + civitas.l('Choose your city details well, climate changes and game difficulty affects your building options and resources.') + '</p>' +
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
				'<a href="#" class="do-start highlight button">' + civitas.l('Start Playing') + '</a>' +
			'</div>' +
			'<a href="#" class="do-pause button">' + civitas.l('Pause') + '</a>' +
			'<a href="#" class="do-restart button">' + civitas.l('Restart') + '</a>' +
			'<a href="#" class="do-save button">' + civitas.l('Save / Load') + '</a>' +
			'<ul class="save-slots">' +
				'<li data-id="1"><span class="date">' + civitas.l('empty save game') + '</span><span title="' + civitas.l('Delete this save game') + '" class="tips delete"></span><span title="' + civitas.l('Save your game here') + '" class="tips save"></span><span title="' + civitas.l('Load this save game') + '" class="tips load"></span></a>' +
				'<li data-id="2"><span class="date">' + civitas.l('empty save game') + '</span><span title="' + civitas.l('Delete this save game') + '" class="tips delete"></span><span title="' + civitas.l('Save your game here') + '" class="tips save"></span><span title="' + civitas.l('Load this save game') + '" class="tips load"></span></a>' +
				'<li data-id="3"><span class="date">' + civitas.l('empty save game') + '</span><span title="' + civitas.l('Delete this save game') + '" class="tips delete"></span><span title="' + civitas.l('Save your game here') + '" class="tips save"></span><span title="' + civitas.l('Load this save game') + '" class="tips load"></span></a>' +
			'</ul>' +
			'<a href="#" class="do-options button">' + civitas.l('Options') + '</a>' +
			'<div class="options-game"></div>' +
			'<a href="#" class="do-about button">' + civitas.l('About') + '</a>' +
			'<div class="about-game">' +
				'<a class="github" href="https://github.com/sizeofcat/civitas"><img class="tips" title="' + civitas.l('Visit the project page on GitHub') + '" src="../images/ui/github.png" /></a>' +
				'<p>' + civitas.l('Civitas is written by <a href="https://sizeof.cat">sizeof(cat)</a>.') + '</p>' +
				'<p>' + civitas.l('Big thanks to') + ':</p>' +
				'<ul>' +
					'<li><a href="https://soundcloud.com/shantifax">Shantifax</a> for the music (Glandula Pinealis).</li>' +
					'<li>Brendan Eich for Javascript.</li>' +
					'<li><a href="http://bluebyte.com">Blue Byte</a> for Anno 1404.</li>' +
				'</ul>' +
			'</div>' +
			'<br />' +
			'<a href="#" class="do-resume button">' + civitas.l('Resume Playing') + '</a>' +
		'</fieldset>' +
	'</section>',
	on_show: function() {
		var self = this;
		var avatar = 1;
		var core = this.get_core();
		var el = '#window-' + this.id;
		if (core.get_mode() !== civitas.MODE_SINGLEPLAYER) {
			$('.do-save').hide();
		} else {
			if (core.get_storage_data() !== false) {
				$('.new-game').hide();
				$('.do-pause, .do-restart, .do-resume, .do-options, .save-slots > li span.save').show();
			} else {
				$('.new-game').show();
				$('.do-pause, .do-restart, .do-resume, .do-options, .save-slots > li span.save').hide();
			}
			for (var i = 1; i <= 3; i++) {
				var data;
				if (data = core.get_storage_data('save' + i)) {
					$('.save-slots > li[data-id=' + i + '] > span.load').show();
					$('.save-slots > li[data-id=' + i + '] > span.date').html(civitas.utils.time_since(data.date) + ' ago');
				} else {
					$('.save-slots > li[data-id=' + i + '] > span.load, .save-slots > li[data-id=' + i + '] > span.delete').hide();
				}
			}
		}
		for (var i = 1; i < civitas.CLIMATES.length; i++) {
			$(el + ' .climate').append('<option value="' + civitas['CLIMATE_' + civitas.CLIMATES[i].toUpperCase()] + '">' + civitas.CLIMATES[i].capitalize() + '</option>');
		}
		for (var i = 1; i < civitas.NATIONS.length; i++) {
			$(el + ' .nation').append('<option value="' + civitas['NATION_' + civitas.NATIONS[i].toUpperCase()] + '">' + civitas.NATIONS[i].capitalize() + '</option>');
		}
		for (var i = 1; i <= civitas.AVATARS; i++) {
			$(el + ' .avatar-select').append('<img src="' + civitas.ASSETS_URL + 'images/avatars/avatar' + i + '.png" />');
		}
		$(el + ' .options-game').append(civitas.ui.tabs([civitas.l('Sounds'), civitas.l('UI'), civitas.l('Gameplay')]));
		$(el + ' #tab-sounds').append('<div>' +
			'<a href="#" class="music-control ui-control ' + ((this.core.get_settings('music') === true) ? 'on' : 'off') + '">' + civitas.l('toggle music') + '</a>' +
			'<input class="music-volume" type="range" min="0" max="1" step="0.1" ' + ((this.core.get_settings('music') !== true) ? 'disabled' : '') + ' />' +
			'</div>');
		$(el + ' #tab-ui').append('<div>' +
			'<a href="#" class="console-control ui-control ' + ((this.core.get_settings('console') === true) ? 'on' : 'off') + '">' + civitas.l('toggle console') + '</a>' +
			'</div>');
		$(el + ' .tabs').tabs();
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
		}).on('click', '.do-resume', function () {
			core.hide_loader();
			core.unpause();
			self.destroy();
			return false;
		}).on('click', '.do-pause', function () {
			if (core.is_paused() === true) {
				$(this).removeClass('highlight').html(civitas.l('Pause'));
				core.show_loader();
				core.unpause();
			} else {
				$(this).addClass('highlight').html(civitas.l('Unpause'));
				core.hide_loader();
				core.pause();
			}
			return false;
		}).on('click', '.do-options', function () {
			$(el + ' .options-game').slideToggle();
			return false;
		}).on('click', '.do-about', function () {
			$(el + ' .about-game').slideToggle();
			return false;
		}).on('click', '.do-restart', function () {
			if (confirm(civitas.l('Are you sure you want to restart the game? You wll lose all progress!')) === true) {
				core.reset_storage_data();
				document.location.reload();
			}
			return false;
		}).on('click', '.do-save', function () {
			if (core.get_mode() === civitas.MODE_SINGLEPLAYER) {
				$(el + ' .save-slots').slideToggle();
			}
			return false;
		}).on('click', '.save-slots > li > .save', function () {
			if (core.get_mode() === civitas.MODE_SINGLEPLAYER) {
				var el = $(this).parent();
				var id = parseInt(el.data('id'));
				if (id >= 1 && id <= 3) {
					if (confirm(civitas.l('Are you sure you want to save the game in this slot? An already existing save will be overwritten!')) === true) {
						var data = core.export(true, id);
						el.children('span.load, span.delete').show();
						el.children('span.date').html(civitas.utils.time_since(data.date) + ' ago');
					}
				}
			}
			return false;
		}).on('click', '.save-slots > li > .delete', function () {
			if (core.get_mode() === civitas.MODE_SINGLEPLAYER) {
				var el = $(this).parent();
				var id = parseInt(el.data('id'));
				if (id >= 1 && id <= 3) {
					if (confirm(civitas.l('Are you sure you want to delete the save game from this slot? All data from that game will be lost!')) === true) {
						core.reset_storage_data('save' + id);
						el.children('span.load, span.delete').hide();
						el.children('span.date').html(civitas.l('empty save game'));
						el.children('span.save').show();
					}
				}
			}
			return false;
		}).on('click', '.save-slots > li > .load', function () {
			if (core.get_mode() === civitas.MODE_SINGLEPLAYER) {
				var el = $(this).parent();
				var id = parseInt(el.data('id'));
				if (id >= 1 && id <= 3) {
					if (confirm(civitas.l('Are you sure you want to load the game from this slot? An already existing game will be lost!')) === true) {
						if (core.swap_storage_data('save' + id, 'live') !== false) {
							document.location.reload();
						} else {
							core.error('There was a problem loading the game data, it is probably corrupted. Save game data will be deleted now.');
							core.reset_storage_data('save' + id);
							el.children('span.load, span.delete').hide();
							el.children('span.date').html(civitas.l('empty save game'));
							el.children('span.save').show();
						}
					}
				}
			}
			return false;
		}).on('click', '.music-control', function () {
			if ($(this).hasClass('on')) {
				$(this).removeClass('on').addClass('off');
				$('.music-volume').attr('disabled', true);
				core.set_settings_music(true);
			} else {
				$(this).removeClass('off').addClass('on');
				$('.music-volume').attr('disabled', false);
				core.set_settings_music(false);
			}
			return false;
		}).on('click', '.console-control', function () {
			if ($(this).hasClass('on')) {
				$(this).removeClass('on').addClass('off');
				core.set_settings_console(false);
			} else {
				$(this).removeClass('off').addClass('on');
				core.set_settings_console(true);
			}
			return false;
		}).on('change', '.music-volume', function () {
			var value = $(this).val();
			core.music.volume = value;
			return false;
		});
	},
	on_hide: function() {
			this.get_core().hide_loader();
	}
};
