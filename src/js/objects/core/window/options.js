
civitas.game.prototype.open_options_window = function() {
	new civitas.controls.window({
		core: this,
		id: 'options',
		template: '<section id="window-options" class="window">' +
			'<div class="logo">Civitas</div>' +
			'<fieldset>' +
				'<p>' + civitas.l('Your game is not paused during this time unless you press Pause! When you Resume, game is unpaused automatically.') + '</p>' +
				'<a href="#" class="do-options button">' + civitas.l('Options') + '</a>' +
				'<div class="options-game"></div>' +
				'<a href="#" class="do-pause button">' + civitas.l('Pause') + '</a>' +
				'<a href="#" class="do-restart button">' + civitas.l('Restart') + '</a>' +
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
			var core = this.get_core();
			var el = '#window-' + this.id;
			$(el + ' .options-game').append(civitas.ui.tabs([civitas.l('Sounds'), civitas.l('UI'), civitas.l('Gameplay')]));
			$(el + ' #tab-sounds').append('<div>' +
				'<a href="#" class="music-control ui-control ' + ((this.core.get_settings('music') === true) ? 'on' : 'off') + '">' + civitas.l('toggle music') + '</a>' +
				'<input class="music-volume" type="range" min="0" max="1" step="0.1" ' + ((this.core.get_settings('music') !== true) ? 'disabled' : '') + ' />' +
				'</div>');
			$(el + ' #tab-ui').append('<div>' +
				'<a href="#" class="console-control ui-control ' + ((this.core.get_settings('console') === true) ? 'on' : 'off') + '">' + civitas.l('toggle console') + '</a>' +
				'</div>');
			$(el + ' .tabs').tabs();
			$(el).on('click', '.do-resume', function () {
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
				if (confirm('Are you sure you want to restart the game? You wll lose all progress!') === true) {
					localStorage.removeItem(civitas.STORAGE_KEY + '.data');
					document.location.reload();
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
	});
}
