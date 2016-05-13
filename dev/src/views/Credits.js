NOR.Credits = function($) {

	var container = EXT.select('#credits');

	var article = container.ext.select('article');

	NOR.Animation.moveForMenu($, container);

	var scrollYTarget = 0, scrollY = 0;

	var onScroll = function(e) {
		scrollYTarget += e.deltaY;
		scrollYTarget = Math.min(scrollYTarget, 0);
		scrollYTarget = Math.max(scrollYTarget, -(article.ext.height() - window.innerHeight + 80));
	}

	var onRender = function() {
		scrollY += (scrollYTarget - scrollY) * 0.2;
		var sy = (window.innerHeight > 768) ? 0 : scrollY;
		article.ext.y = sy;
		article.ext.transform();
	}

	Application.route.on(function(c, l) {

		var isVr = c.parts[0] == NOR.NAV_VR;

		if(c.lastPart == NOR.NAV_CREDITS) {
		
			Loader.loadText(isVr ? 'data/credits-vr.html' : 'data/credits-feature.html', function(t) {
				article.innerHTML = t;

				var ls = article.ext.selectAll('li');

				container.ext.show('inline');

				ls.forEach(function(l, i) {
					l.style.opacity = 0;
					l.ext.transform({ x: -10 });
					l.ext.transition(
						{ opacity: 1, transform: { x: 0 } }, 
						NOR.Animation.FADE_IN_TIME, 
						Util.cssEase.easeOut, 
						NOR.Animation.MENU_SLIDE_TIME + 15 * i
					);
				});

			});

			FrameImpulse.on(onRender);
			VirtualScroll.on(onScroll);

		} else {
			article.innerHTML = '';
			container.ext.hide();

			FrameImpulse.off(onRender);
			VirtualScroll.off(onScroll);
		}
	});

}