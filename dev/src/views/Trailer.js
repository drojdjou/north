NOR.Trailer = function($) {

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

	var startTrailer = function() {
		var ytURL = getYTurl($.data.trailer.youtubeid);
		ytFrame.src = ytURL;
		container.ext.show();
	}

	var endTrailer = function() {
		console.log('endTrailer');
		ytFrame.src = '';
		container.ext.hide();
	}

	NOR.Animation.moveForMenu($, container);

	Application.route.on(function(c, l) {

		if(c.lastPart == NOR.NAV_TRAILER) {
			startTrailer();
		} else if(l.lastPart == NOR.NAV_TRAILER) {
			endTrailer();
		}

	});
	
}