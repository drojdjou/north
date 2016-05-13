NOR.Nav = function($) {

	var icon = EXT.select('nav .icon');
	var menu = EXT.select('nav .menu');
	var bg = EXT.select('nav .background');

	// transform: translateX(-20px) skewX(-2deg);
	// transform: translateX(-300px) skewX(3deg);
	bg.ext.transform({ x: -300 });

	var lis = [];

	icon.ext.on('click', function() {
		$.menuOpen.value = !$.menuOpen.value;
	});

	$.data.nav.forEach(function(n) {
		var li = EXT.create("li");

		li.ext.transform({ x: -360 });
		li.innerHTML = n.label;
		if(n.type) li.classList.add(n.type);

		li.ext.on('click', function() {
			Application.navigate.trigger(n.path);
			$.menuOpen.value = false;
		});

		menu.appendChild(li);
		lis.push(li);
	});

	$.menuOpen.on(function(c, l) {

		if(c) {
			icon.classList.add('icon-close');
			menu.classList.add('menu-active');
			bg.ext.transition({ transform: { x: 0, rotZ: 4 } }, 500, Util.cssEase.easeOutQuad);
		} else {
			icon.classList.remove('icon-close');
			menu.classList.remove('menu-active');
			bg.ext.transition({ transform: { x: -600, rotZ: 0 } }, 500, Util.cssEase.easeInQuad);
		}

		var t = c ? 600 : 200;
		var x = c ? 0 : -360;
		var d = c ? 40 : 5;

		lis.forEach(function(l, i) {
			l.ext.transition({ transform: { x: x } }, t, Util.cssEase.quadEaseOut, 50 + d * i);
		});
	});

}