NOR.Contact = function($) {

	var be = "bartek" + "@" + "everyday3d.com";
	var me = "ogensm" + "@" + "gmail.com";

	var container = EXT.select('#contact');

	container.ext.select(".me").setAttribute('href', 'mailto:' + me);
	container.ext.select(".be").setAttribute('href', 'mailto:' + be);

	var article = container.ext.select('article');
	
	NOR.Animation.moveForMenu($, container);

	Application.route.on(function(c, l) {
		if(c.lastPart == NOR.NAV_CONTACT) {
			container.ext.show();
		} else {
			container.ext.hide();
		}
	});
}