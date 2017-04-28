/**
 * Login window data.
 *
 * @type {Object}
 */
civitas.WINDOW_SIGNIN = {
	id: 'options',
	template: '' +
		'<section id="window-options" class="window">' +
			'<div class="logo">Civitas</div>' +
			'<fieldset>' +
				'<div class="new-game">' +
					'<p>There is at least one save game, enter your city password to decrypt and play it.</p>' +
					'<dl>' +
						'<dt class="clearfix">' + civitas.l('City Password') + ':</dt>' +
						'<dd><input type="password" class="password text-input" /></dd>' +
					'</dl>' +
					'<a href="#" class="do-login highlight button">' + civitas.l('Start Playing') + '</a>' +
				'</div>' +
				'<a href="#" class="do-restart button">' + civitas.l('Restart') + '</a>' +
				'<a href="#" class="do-about button">' + civitas.l('About') + '</a>' +
				'<div class="about-game">' +
					'<a class="github" target="_blank" href="https://github.com/sizeofcat/civitas"><img class="tips" title="' + civitas.l('Visit the project page on GitHub') + '" src="../images/ui/github.png" /></a>' +
					'<p>' + civitas.l('Civitas is written by <a target="_blank" href="https://sizeof.cat">sizeof(cat)</a>.') + '</p>' +
					'<p>' + civitas.l('Big thanks to') + ':</p>' +
					'<ul>' +
						'<li><a target="_blank" href="https://soundcloud.com/shantifax">Shantifax</a> for the music (Glandula Pinealis).</li>' +
						'<li><a target="_blank" href="https://brendaneich.com/">Brendan Eich</a> for Javascript.</li>' +
						'<li><a target="_blank" href="http://bluebyte.com">Blue Byte</a> for Anno 1404.</li>' +
					'</ul>' +
				'</div>' +
			'</fieldset>' +
		'</section>',
	on_show: function() {
		var self = this;
		var avatar = 1;
		var core = this.get_core();
		var el = '#window-' + this.id;
		$(el).on('click', '.do-login', function () {
			var password = $(el + ' .password').val();
			if (password === '') {
				core.error('Enter your city password.', 'Error', true);
				return false;
			}
			core.show_loader();
			core.start_game(password);
			self.destroy();
			return false;
		}).on('click', '.do-restart', function () {
			core.open_modal(
				function(button) {
					if (button === 'yes') {
						core.reset_storage_data();
						document.location.reload();
					}
				},
				'Are you sure you want to restart the game? You wll lose all progress on the current game!',
				'Civitas'
			);
			return false;
		}).on('click', '.do-about', function () {
			$(el + ' .about-game').slideToggle();
			return false;
		});
	},
	on_hide: function() {
		this.get_core().hide_loader();
	}
};
