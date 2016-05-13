NOR.Home = function($) {

	var container = EXT.select('#home');

	var logo = container.ext.select('.tt');
	var director = container.ext.select('h4');
	var qmenu = container.ext.select('.quick-menu');

	// var vr = container.ext.select('.vr');
	// vr.ext.bg($.data.home.vr);

	NOR.Animation.moveForMenu($, container);

	var fadeInDelay = NOR.Animation.MENU_SLIDE_TIME;
	if(!Simplrz.touch ) fadeInDelay += 1500;

	Application.route.on(function(c, l) {
		if(c.lastPart == undefined) {
			container.ext.show();

			logo.style.opacity = 0;
			logo.ext.transform({ y: -20 });
			logo.ext.transition(
				{ opacity: 1, transform: { y: 0 } }, 
				NOR.Animation.FADE_IN_TIME * 2, 
				Util.cssEase.easeOut, 
				fadeInDelay
			);

			director.style.opacity = 0;
			director.ext.transform({ y: -10 });
			director.ext.transition(
				{ opacity: 1, transform: { y: 0 } }, 
				NOR.Animation.FADE_IN_TIME * 2.2, 
				Util.cssEase.easeOut, 
				fadeInDelay + 100
			);

			qmenu.style.opacity = 0;
			qmenu.ext.transform({ y:  20 });
			qmenu.ext.transition(
				{ opacity: 1, transform: { y: 0 } }, 
				NOR.Animation.FADE_IN_TIME * 2.4, 
				Util.cssEase.easeOut, 
				fadeInDelay + 200
			);

		} else {
			container.ext.hide();
		}
	});
}