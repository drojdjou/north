NOR.News = function($) {

	var container = EXT.select('#news');
	var list = container.ext.select('ul');

	var scroll = NOR.ScrollPane(list, { contentPadding: 80 });

	var populate = function() {

		for(var i = 0; i < $.data.news.length; i++) {
			var n = $.data.news[i];
			var li = EXT.create('li');

			var c = "<a target='_blank' href='" + n.link + "'>";
			c += "<h2>" + n.title + "</h2>";

			if(n.image) {
				c += "<img src='" + n.image + "'>";
				var img = new Image();
				img.addEventListener('load', function() {
					scroll.resize();
				});
				img.src = n.image;
			}

			if(n.content) {
				c += "<p>" + n.content + "</p>";
			}

			c += "<h5>" + n.source + "</h5>";
			c += "<h6>" + n.date + "</h6>";
			c += "</a>";

			li.innerHTML = c;
			list.appendChild(li);
		}
	}
	
	NOR.Animation.moveForMenu($, container);

	Application.route.on(function(c, l) {

		if(c.lastPart == NOR.NAV_NEWS) {
			container.ext.show();
			populate();
			scroll.on();
		} else if(l.lastPart == NOR.NAV_NEWS) {
			list.innerHTML = "";
			container.ext.hide();
			scroll.off();
		}

	});
}