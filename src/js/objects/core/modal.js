/**
 * Main modal object.
 * 
 * @param {Object} params
 * @class {civitas.controls.modal}
 * @returns {civitas.controls.modal}
 */
civitas.controls.modal = function (params) {
	this.core = null;
	this.skeleton = '<div class="modal-overlay">' +
			'<div class="modal">' +
				'<div class="header"></div>' +
				'<div class="content"></div>' +
				'<div class="footer"></div>' +
			'</div>' +
		'</div>';

	this.__init = function(params) {
		this.core = params.core;
		var self = this;
		$('body').append(this.skeleton);
		$(window).bind('resize', function() {
			self.resize();
		});
	};

	this.alert = function(options) {
		if (this.is_open()) {
			return false;
		}
		this.core.show_loader();
		$('.modal').css({
			width: '400px'
		});
		this.resize();
		$('.modal .header').html(options.title);
		$('.modal .footer').html('<a data-id="yes" href="#" class="btn float-right">' + civitas.l('Yes') + '</a>' +
			'<a data-id="no" href="#" class="btn">' + civitas.l('No') + '</a>');
		$('.modal .content').html('<img class="avatar" src="' + civitas.ASSETS_URL + 'images/avatars/avatar' + this.core.get_settlement().get_ruler_avatar() + '.png" />' +
			'<p>' + options.text + '</p>');
		this.listen();
		$('.modal-overlay, .modal').show();
		if (typeof options.on_click === 'function') {
			this.on_click = options.on_click;
		}
	};

	this.is_open = function() {
		return $('.modal').css('display') === "block";
	};

	this.clear = function() {
		$('.modal-overlay').remove();
		$('body').append(this.skeleton);
		this.core.hide_loader();
		this.resize();
	};

	this.listen = function() {
		var self = this;
		$('.modal .footer a').click(function() {
			self.action($(this).data('id'));
		});
	};

	this.action = function(key) {
		if (key === 'no' || key === 'yes') {
			this.clear();
		}
		this.on_click(key);
	};

	this.resize = function() {
		var lbox = $('.modal');
		var height = parseInt((lbox.css('height')).replace('px', ''));
		var width = parseInt((lbox.css('width')).replace('px', ''));
		lbox.css({
			top: ($(window).height() / 2) - 100 + 'px',
			left: ($(window).width() - width) / 2 + 'px'
		});
	};

	this.on_click = function() {};

	this.destroy = function() {
		$('.modal-overlay').remove();
		$(window).unbind('resize');
	};

	// Fire up the constructor
	return this.__init(params);
};
