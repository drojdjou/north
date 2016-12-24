NOR.Credits = function($) {

	var container = EXT.select('#credits');
	
	var article = container.ext.select('article');
	var scroll = NOR.ScrollPane(article, { contentPadding: 220, padding: 20 });

	NOR.Animation.moveForMenu($, container);

	var creditsText;

	var animate = function() {

		article.innerHTML = creditsText;

		var hs = article.ext.selectAll('h2');
		hs.forEach(function(h, i) {
			h.style.opacity = 0;
			h.ext.transform({ x: 10 });
			h.ext.transition(
				{ opacity: 1, transform: { x: 0 } }, 
				NOR.Animation.FADE_IN_TIME, 
				Util.cssEase.easeOut, 
				NOR.Animation.MENU_SLIDE_TIME + 40 * i
			);
		});

		var ls = article.ext.selectAll('span');
		ls.forEach(function(l, i) {
			l.style.opacity = 0;
			l.ext.transform({ x: -10 });
			l.ext.transition(
				{ opacity: 1, transform: { x: 0 } }, 
				NOR.Animation.FADE_IN_TIME, 
				Util.cssEase.easeOut, 
				NOR.Animation.MENU_SLIDE_TIME + 5 * i
			);
		});

		scroll.on();
	}

	Application.route.on(function(c, l) {
		if(c.lastPart == NOR.NAV_CREDITS) {

			container.ext.show('flex');

			if(creditsText) {
				animate();
			} else {
				Loader.loadText('data/credits.html', function(t) {
					creditsText = t;
					animate();
				});
			}

		} else {
			article.innerHTML = '';
			container.ext.hide();
			scroll.off();		
		}
	});

}