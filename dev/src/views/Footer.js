NOR.Footer = function($) {

	var ft = EXT.select("footer");
	var fb = EXT.select("footer .fb");
	var tw = EXT.select("footer .tw");

	var openPopup = function(url, w, h) {
		var t = (screen.height / 2) - (w / 2);
	    var l = (screen.width / 2) - (h / 2);
	    window.open(url, 'sharer', 'top=' + t + ',left=' + l + ',toolbar=0,status=0,width=' + w + ',height=' + h);
	}

	var isVR = function() {
		var c = Application.route.value;
		return c.parts[0] == NOR.NAV_VR || c.parts[0] == NOR.NAV_GALLERY_VR;
	}

	var host = "http://gonorthordie.com"; 
	var tweet = encodeURI("NORTH - A film by @mattogens");
	var tweetVR = encodeURI("NORTH - VR experience by @mattogens and @bartekd");
	var tags = "#northvr,#north,#detroit";

	fb.ext.on('click', function() {
		// https://developers.facebook.com/docs/sharing/best-practices
		var h = host + (isVR() ? "/vr" : "");
		var u = "https://www.facebook.com/dialog/share?app_id=1772936112924386&display=popup&href=" + h;
		openPopup(u, 640, 480);
	});

	tw.ext.on('click', function($) {
		// https://dev.twitter.com/web/tweet-button/web-intent
		var h = host + (isVR() ? "/vr" : "")
		var u = "https://twitter.com/intent/tweet?url=" + h + "&text=" + (isVR() ? tweetVR : tweet) + "&hashtags=" + tags; 
		openPopup(u, 640, 260);
	});

	Application.route.on(function(c, l) {

		if(c.lastPart == NOR.NAV_TRAILER) {
			ft.ext.hide();
		} else if(l.lastPart == NOR.NAV_TRAILER) {
			ft.ext.show();
		}

	});
}