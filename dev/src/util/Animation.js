NOR.Animation = {

	MENU_SLIDE_TIME: 500,
	FADE_IN_TIME: 800,

	moveForMenu: function($, element, params, tm) {
		params = params || {};
		params.tx = params.tx || 240;
		tm = tm || NOR.Animation.MENU_SLIDE_TIME;

		$.menuOpen.on(function(c, l) {
			var x = c ? params.tx : 0;
			var t = c ? tm : tm;
			var e = c ? Util.cssEase.easeIn : Util.cssEase.easeOut;
			element.ext.transition({ transform: { x: x } }, t, e);
		});
	}

}