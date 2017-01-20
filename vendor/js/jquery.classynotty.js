(function($) {
	$.ClassyNotty = function(settings) {
		var container, notty, hide, image, right, left, inner;
		settings = $.extend({
			title: undefined,
			content: undefined,
			timeout: 15000,
			img: 'images/ui/icon1.png',
			showTime: true,
			error: false
		}, settings);
		container = $(".notifications");
		if (!container.length) {
			container = $("<div>", {
				'class': "notifications"
			}).appendTo(document.body);
		}
		notty = $("<div>");
		notty.addClass("notty");
		hide = $("<div>", {
			click: function() {
				$(this).parent().delay(300).queue(function() {
					$(this).clearQueue();
					$(this).remove();
				});
			},
			touchstart: function() {
				$(this).parent().delay(300).queue(function() {
					$(this).clearQueue();
					$(this).remove();
				});
			}
		});
		hide.addClass("hide");
		if (settings.error === true) {
			notty.addClass('error');
			settings.img = 'images/ui/icon2.png';
		}
		image = $("<div>", {
			style: "background: url('" + settings.img + "')"
		});
		image.addClass("img");
		left = $("<div class='left'>");
		right = $("<div class='right'>");
		var htmlTitle = "<h2>" + settings.title + "</h2>";
		var htmlContent = settings.content;
		inner = $("<div>", {
			html: htmlTitle + htmlContent
		});
		inner.addClass("inner");
		inner.appendTo(right);
		image.appendTo(left);
		left.appendTo(notty);
		right.appendTo(notty);
		hide.appendTo(notty);
		function timeSince(time) {
			var time_formats = [[2, "One second", "1 second from now"], [60, "seconds", 1], [120, "One minute", "1 minute from now"], [3600, "minutes", 60], [7200, "One hour", "1 hour from now"], [86400, "hours", 3600], [172800, "One day", "tomorrow"], [604800, "days", 86400], [1209600, "One week", "next week"], [2419200, "weeks", 604800], [4838400, "One month", "next month"], [29030400, "months", 2419200], [58060800, "One year", "next year"], [2903040000, "years", 29030400], [5806080000, "One century", "next century"], [58060800000, "centuries", 2903040000]];
			var seconds = (new Date - time) / 1000;
			var list_choice = 1;
			if (seconds < 0) {
				seconds = Math.abs(seconds);
				list_choice = 1;
			}
			var i = 0, format;
			while (format = time_formats[i++]) {
				if (seconds < format[0]) {
					if (typeof format[2] === "string") {
						return format[list_choice];
					}
					else {
						return Math.floor(seconds / format[2]) + " " + format[1];
					}
				}
			}
			return time;
		}
		var timestamp = Number(new Date());
		var timeHTML = $("<div>", {
			html: "<strong>" + timeSince(timestamp) + "</strong> ago"
		});
		timeHTML.addClass("time").attr("title", timestamp);
		timeHTML.appendTo(right);
		setInterval(function() {
			$(".time").each(function() {
				var timing = $(this).attr("title");
				$(this).html("<strong>" + timeSince(timing) + "</strong> ago");
			});
		}, 4000);
		notty.hover(function() {
			hide.show();
		}, function() {
			hide.hide();
		});
		notty.prependTo(container);
		notty.show();
		if (settings.timeout) {
			setTimeout(function() {
				notty.delay(300).queue(function() {
					$(this).clearQueue();
					$(this).remove();
				});
			}, settings.timeout);
		}
		return this;
	};
})(jQuery);