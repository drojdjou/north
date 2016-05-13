NOR.Background = function($) {

	var container = EXT.select('#background');
	var bg = container.ext.select('.bg');
	var iframe = container.ext.select('.vr');
	var video = container.ext.select('video');
	var overlay = container.ext.select('.overlay');

	var resize = function() {
		if(isVideo) {
			var d = Util.fullbleed(video);
			Util.resizeTo(video, d);
		}
	};

	video.addEventListener('canplaythrough', resize);
	Application.resize.on(resize);

	var isVR = false, isVideo = false;

	container.ext.show();
	
	Application.route.on(function(c, l) {

		var o = 0;

		if(c.lastPart == NOR.NAV_ABOUT || 
		   c.lastPart == NOR.NAV_CREDITS ||
		   c.lastPart == NOR.NAV_NEWS
		) {
			o = 0.5;
		} else if(c.lastPart == NOR.NAV_GALLERY || 
			      c.lastPart == NOR.NAV_TRAILER
		) {
			o = 1;
		}

		if(c.parts[0] == NOR.NAV_VR && !isVR) {
			isVR = true;
		} else if(c.parts[0] != NOR.NAV_VR && isVR)  {
			isVR = false;
		}

		if(isVR) {

			bg.ext.hide();
			overlay.ext.hide();
			video.ext.hide();
			video.pause();
			isVideo = false;

			iframe.ext.show();
			iframe.src = $.data.home.vr;

		} else {


			iframe.ext.hide();
			iframe.src = "";

			isVideo = !c.parts[0] && !Simplrz.touch;
			
			if(isVideo) {
				bg.ext.hide();
				video.ext.show();
				video.src = $.data.home.video;
				video.play();
			} else {
				video.ext.hide();
				video.pause();
				bg.ext.show();
				bg.style.opacity = 0;
				var i = (Math.random() * $.data.home.stills.length) | 0;
				var p = $.data.home.stills[i];
				bg.ext.bg(p, function() {
					bg.ext.transition({ opacity: 1 }, 400, Util.cssEase.easeOut);
				});
			}

			overlay.ext.show();
			overlay.style.opacity = o;

		}
	});

	NOR.Animation.moveForMenu($, container, { tx: 200 }, NOR.Animation.MENU_SLIDE_TIME * 1.2);
}