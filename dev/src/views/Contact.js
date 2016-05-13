NOR.Contact = function($) {

	var container = EXT.select('#contact');

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