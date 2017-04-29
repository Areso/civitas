/**
 * Return the UI panel specified by its id.
 *
 * @public
 * @param {String} id
 * @returns {civitas.controls.panel|Boolean}
 */
civitas.game.prototype.get_panel = function(id) {
	var panels = this.get_panels();
	for (var i = 0; i < panels.length; i++) {
		if (panels[i].id === id) {
			return panels[i];
		}
	}
	return false;
};

/**
 * Close the UI panel specified by its id.
 *
 * @public
 * @param {String} id
 * @returns {civitas.game}
 */
civitas.game.prototype.close_panel = function(id) {
	var panels = this.get_panels();
	for (var i = 0; i < panels.length; i++) {
		if (panels[i].id === id) {
			panels.splice(i, 1);
		}
	}
	return this;
};
	
/**
 * Build the game UI.
 *
 * @private
 * @returns {civitas.game}
 */
civitas.game.prototype._build_ui = function() {
	var out = '<section class="ui">' +
			'<header>' +
				'<div title="' + civitas.l('City Council') + '" class="tips cityavatar"></div>' +
				'<span title="' + civitas.l('City level') + '" class="tips citylevel"></span>' +
				'<div title="' + civitas.l('City name') + '" class="tips cityname"></div>' +
					'<span></span>' +
				'</div>' +
				'<div class="top-panel"></div>' +
			'</header>' +
			'<aside class="console">' +
				'<div class="scrollbar">' +
					'<div class="up"></div>' +
					'<div class="down"></div>' +
				'</div>' +
				'<div class="contents"></div>' +
			'</aside>' +
			'<section class="game"></section>' +
			'<footer>' +
				'<div class="toolbar">' +
					'<a href="#" data-action="panel" data-panel="buildings" class="tips" title="' + civitas.l('Buildings') + '"></a>' +
					'<a href="#" data-action="panel" data-panel="storage" class="tips" title="' + civitas.l('Storage Space') + '"></a>' +
					'<a href="#" data-action="panel" data-panel="trades" class="tips" title="' + civitas.l('Trades') + '"></a>' +
					'<a href="#" data-action="panel" data-panel="council" class="tips" title="' + civitas.l('City Council') + '"></a>' +
					'<a href="#" data-action="panel" data-panel="ranks" class="tips" title="' + civitas.l('Ranks') + '"></a>' +
					'<a href="#" data-action="panel" data-panel="world" class="tips" title="' + civitas.l('World Map') + '"></a>' +
					'<a href="#" class="" title=""></a>' +
					'<a href="#" class="" title=""></a>' +
					'<a href="#" data-action="panel" data-panel="help" class="tips" title="' + civitas.l('Help') + '"></a>' +
				'</div>' +
			'</footer>' +
		'</section>' +
		'<audio id="music" loop>' +
			'<source src="music/track1.mp3" type="audio/mpeg">' +
		'</audio>' +
		'<div title="' + civitas.l('Game is doing stuff in the background.') + '" class="loading"></div>';
	$('body').empty().append(out);
	return this;
};

/**
 * Show the game loader.
 *
 * @public
 * @returns {civitas.game}
 */
civitas.game.prototype.show_loader = function() {
	$('.loading').show().tipsy({
		gravity: 'e'
	});
	return this;
};

/**
 * Hide the game loader.
 *
 * @public
 * @returns {civitas.game}
 */
civitas.game.prototype.hide_loader = function() {
	$('.loading').hide();
	return this;
};

/**
 * Refresh the UI and panels.
 *
 * @public
 * @returns {civitas.game}
 */
civitas.game.prototype.refresh = function() {
	this.refresh_panels();
	this.refresh_toolbar();
	this.refresh_ui();
	$('.tipsy').remove();
	$('.tips').tipsy({
		gravity: $.fn.tipsy.autoNS,
		html: true
	});
	$('.top-panel > span').tipsy({
		gravity: 'n'
	});
	return this;
};

/**
 * Refresh the resources toolbar.
 *
 * @public
 * @returns {civitas.game}
 */
civitas.game.prototype.refresh_toolbar = function() {
	var settlement = this.get_settlement();
	if (typeof settlement !== 'undefined') {
		var resources = settlement.get_resources();
		for (var i = 0; i < civitas.TOOLBAR_RESOURCES.length; i++) {
			var resource = civitas.TOOLBAR_RESOURCES[i];
			if (typeof resources[resource] !== 'undefined') {
				$('.top-panel .' + resource).attr('title', resources[resource] + ' ' + civitas.utils.get_resource_name(resource));
			}
		}
	}
	return this;
};

/**
 * Refresh all the UI information after a property change.
 * 
 * @public
 * @returns {civitas.game}
 */
civitas.game.prototype.refresh_ui = function () {
	var settlement = this.get_settlement();
	if (typeof settlement !== 'undefined') {
		$('.citylevel').html(settlement.level());
		if (settlement.fame() >= civitas.LEVELS[settlement.level()]) {
			settlement.level_up();
		}
	}
	return this;
};

/**
 * Force refresh of the UI panels open.
 *
 * @public
 * @returns {civitas.game}
 */
civitas.game.prototype.refresh_panels = function() {
	var panels = this.get_panels();
	for (var x = 0; x < panels.length; x++) {
		panels[x].on_refresh();
	}
	return this;
};

/**
 * Perform a normal notification in the game.
 * 
 * @public
 * @param {String} message
 * @param {String} title
 * @param {Number} timeout
 * @returns {civitas.game}
 */
civitas.game.prototype.notify = function (message, title, timeout) {
	this._notify({
		title: (typeof title !== 'undefined') ? title : civitas.l('City Council'),
		content: message,
		timeout: typeof timeout !== 'undefined' ? timeout : 15000
	});
	this.log(message);
	return this;
};

/**
 * Internal function for performing an UI notification.
 * 
 * @param {type} settings
 * @returns {civitas.game}
 * @private
 */
civitas.game.prototype._notify = function (settings) {
	var container, notty, hide, image, right, left, inner, _container;
	settings = $.extend({
		title: undefined,
		content: undefined,
		timeout: 15000,
		img: undefined,
		mode: civitas.NOTIFY_NORMAL
	}, settings);
	if (settings.mode === civitas.NOTIFY_ACHIEVEMENT) {
		_container = 'achievements-notifications';
	} else {
		_container = 'notifications';
	}
	container = $('.' + _container);
	if (!container.length) {
		container = $("<div>", {
			'class': _container
		}).appendTo(document.body);
	}
	$('.achievements-notifications').css({
		left: ($(window).width() / 2) - (container.width() / 2)
	});
	notty = $('<div>');
	notty.addClass('notty');
	hide = $("<div>", {
		click: function () {
			$(this).parent().delay(300).queue(function () {
				$(this).clearQueue();
				$(this).remove();
			});
		},
		touchstart: function () {
			$(this).parent().delay(300).queue(function () {
				$(this).clearQueue();
				$(this).remove();
			});
		}
	});
	hide.addClass('hide');
	if (settings.mode === civitas.NOTIFY_ERROR) {
		notty.addClass('error');
		settings.img = civitas.ASSETS_URL + 'images/ui/icon_error.png';
	} else if (settings.mode === civitas.NOTIFY_EVENT) {
		notty.addClass('event');
		settings.img = civitas.ASSETS_URL + 'images/ui/icon_research.png';
	} else if (settings.mode === civitas.NOTIFY_ACHIEVEMENT) {
		notty.addClass('achievement');
		settings.img = civitas.ASSETS_URL + 'images/ui/icon_achievement.png';
	} else {
		settings.img = civitas.ASSETS_URL + 'images/ui/icon_notification.png';
	}
	image = $('<div>', {
		style: "background: url('" + settings.img + "')"
	});
	image.addClass('img');
	left = $("<div class='left'>");
	right = $("<div class='right'>");
	inner = $('<div>', {
		html: '<h2>' + settings.title + '</h2>' + settings.content
	});
	inner.addClass("inner");
	inner.appendTo(right);
	image.appendTo(left);
	left.appendTo(notty);
	right.appendTo(notty);
	hide.appendTo(notty);
	if (settings.mode !== civitas.NOTIFY_ACHIEVEMENT) {
		var timestamp = Number(new Date());
		var timeHTML = $("<div>", {
			html: "<strong>" + civitas.utils.time_since(timestamp) + "</strong> ago"
		});
		timeHTML.addClass("time").attr("title", timestamp);
		timeHTML.appendTo(right);
		setInterval(function () {
			$(".time").each(function () {
				var timing = $(this).attr("title");
				$(this).html("<strong>" + civitas.utils.time_since(timing) + "</strong> ago");
			});
		}, 4000);
	}
	notty.hover(function () {
		hide.show();
	}, function () {
		hide.hide();
	});
	notty.prependTo(container);
	notty.show();
	if (settings.timeout) {
		setTimeout(function () {
			notty.delay(300).queue(function () {
				$(this).clearQueue();
				$(this).remove();
			});
		}, settings.timeout);
	}
	return this;
};

/**
 * Perform an error notification in the game.
 * 
 * @public
 * @param {String} message
 * @param {String} title
 * @param {Boolean} no_console
 * @returns {civitas.game}
 */
civitas.game.prototype.error = function (message, title, no_console) {
	this._notify({
		title: (typeof title !== 'undefined') ? title : civitas.l('City Council'),
		mode: civitas.NOTIFY_ERROR,
		content: message
	});
	if (typeof no_console === 'undefined' || no_console === false) {
		this.log(message, true);
	}
	return this;
};

/**
 * Setup the UI.
 * 
 * @private
 * @returns {civitas.game}
 */
civitas.game.prototype._setup_ui = function () {
	var self = this;
	var clicked = false;
	var clickY, clickX;
	var _t = '';
	$('.game').on({
		mousemove: function (e) {
			clicked && update_scroll_pos(e);
			//handle_mouse(e);
		},
		mousedown: function (e) {
			clicked = true;
			clickY = e.pageY;
			clickX = e.pageX;
			$('html').css('cursor', 'grab');
		},
		mouseup: function () {
			clicked = false;
			$('html').css('cursor', 'auto');
		}
	});
	var x, y;
	function handle_mouse(e) {
		if (x && y) {
			window.scrollBy(e.clientX - x, e.clientY - y);
		}
		x = e.clientX;
		y = e.clientY;
	}
	$('.ui > footer').css({
		left: ($(window).width() / 2) - ($('.ui > footer').width() / 2)
	});
	var update_scroll_pos = function (e) {
		$(window).scrollTop($(window).scrollTop() + (clickY - e.pageY));
		$(window).scrollLeft($(window).scrollLeft() + (clickX - e.pageX));
	};
	for (var i = 0; i < civitas.TOOLBAR_RESOURCES.length; i++) {
		_t += '<span class="' + civitas.TOOLBAR_RESOURCES[i] + '"></span>';
	}
	$('.top-panel').empty().append(_t);
	$('.ui').on('click', '.console .down', function () {
		$('.console .contents').scrollTo('+=97px', 500);
	}).on('click', '.console .up', function () {
		$('.console .contents').scrollTo('-=97px', 500);
	}).on('click', '.cityavatar', function () {
		self.open_panel(civitas.PANEL_COUNCIL);
		return false;
	}).on('click', 'a[data-action=panel]', function () {
		var panel = $(this).data('panel').toUpperCase();
		if (typeof civitas['PANEL_' + panel] !== 'undefined') {
			self.open_panel(civitas['PANEL_' + panel]);
		}
		return false;
	});
	return this;
};

/**
 * Get the panels open in the game.
 * 
 * @public
 * @returns {Array}
 */
civitas.game.prototype.get_panels = function() {
	return this.panels;
};

/**
 * Open a UI panel.
 *
 * @public
 * @param {Object} panel_data
 * @param {Object} extra_data
 * @returns {civitas.controls.panel}
 */
civitas.game.prototype.open_panel = function(panel_data, extra_data) {
	panel_data.core = this;
	if (typeof extra_data !== 'undefined') {
		panel_data.data = extra_data;
	}
	var panel = new civitas.controls.panel(panel_data);
	this.panels.push(panel);
	return panel;
};

/**
 * Open a UI window.
 *
 * @public
 * @param {Object} window_data
 * @param {Object} extra_data
 * @returns {civitas.controls.window}
 */
civitas.game.prototype.open_window = function(window_data, extra_data) {
	window_data.core = this;
	if (typeof extra_data !== 'undefined') {
		window_data.data = extra_data;
	}
	return new civitas.controls.window(window_data);
};

/**
 * Open a modal window (usually to ask for confirmations).
 *
 * @public
 * @param {Function} callback
 * @param {String} text
 * @param {String} title
 * @returns {civitas.game}
 */
civitas.game.prototype.open_modal = function(callback, text, title) {
	if (this.modal === null) {
		this.modal = new civitas.controls.modal({
			core: this
		});
	}
	this.modal.alert({
		title: typeof title !== 'undefined' ? title : 'City Council',
		text: text,
		on_click: callback
	});
	return this;
};

/**
 * Log data to the console.
 * 
 * @public
 * @param {String} message
 * @param {Boolean} error
 * @returns {civitas.game}
 */
civitas.game.prototype.log = function (message, error) {
	if ($('.ui .console .contents div').length > 1000) {
		$('.ui .console .contents').empty();
	}
	if (typeof message !== 'undefined') {
		$('.ui .console .contents').prepend('<div' + ((typeof error !== 'undefined' && error === true) ? ' class="error"' : '') + '>' + '<span>' + civitas.utils.get_now() + '</span> - ' + message + '</div>');
	} else {
		$('.ui .console .contents').prepend('<div class="separator"></div>');
	}
	return this;
};

/**
 * Log data to the browser console.
 * 
 * @param {String} message
 * @param {Boolean} error
 * @public
 * @returns {civitas.game}
 */
civitas.game.prototype.console_log = function (message, error) {
	if (civitas.DEBUG === true) {
		console.log((typeof error === true ? 'APP error: ' : 'APP message: ') + message);
	}
	return this;
};
