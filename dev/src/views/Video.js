NOR.Video = function($) {

	var container = EXT.select('#trailer');

	var ytFrame = container.ext.select('iframe');
	ytFrame.setAttribute('allowfullscreen', 'true');

	var ytOptions = '?' + [
		'autoplay=1',
		'autohide=1',
		'controls=1',
		'showinfo=0',
		'enablejsapi=1',
		'modestbranding=1',
		'rel=0',
		'fs=1',
		'wmode=transparent',
		'iv_load_policy=3' 
	].join('&');

	var getYTurl = function(id) {
		return 'http://www.youtube.com/embed/' + id + ytOptions;
	}

	var closePlayer = function() {
		ytFrame.src = '';
		container.ext.hide();
	}

	NOR.Animation.moveForMenu($, container);

	Application.route.on(function(c, l) {

		if(c.lastPart == NOR.NAV_TRAILER) {
			ytFrame.src = getYTurl($.data.trailer.url);
			container.ext.show();
		} else if(c.lastPart == NOR.NAV_VRFILM) {
			ytFrame.src = getYTurl($.data.vrfilm.url);
			container.ext.show();
		} else if(l.lastPart == NOR.NAV_TRAILER || l.lastPart == NOR.NAV_VRFILM) {
			closePlayer();
		}

	});
	
}