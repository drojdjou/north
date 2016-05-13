NOR.About = function($) {

	var container = EXT.select('#about');

	var article = container.ext.select('article');
	

	NOR.Animation.moveForMenu($, container);

	

	Application.route.on(function(c, l) {
		if(c.lastPart == NOR.NAV_ABOUT) {
			container.ext.show();

			var isVr = c.parts[0] == NOR.NAV_VR;

			article.innerHTML = isVr ? $.data.about.vr : $.data.about.feature;
			var ps = article.ext.selectAll('p');

			ps.forEach(function(p, i) {
				p.style.opacity = 0;
				p.ext.transform({ x: -10 });

				p.ext.transition(
					{ opacity: 1, transform: { x: 0 } }, 
					NOR.Animation.FADE_IN_TIME, 
					Util.cssEase.easeOut, 
					NOR.Animation.MENU_SLIDE_TIME + 40 + 80 * i
				);
			});

		} else {
			container.ext.hide();
			article.innerHTML = '';
		}
	});
}