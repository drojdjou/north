NOR.Gallery = function($) {

	var container = EXT.select('#gallery');
	var photoHolder = container.ext.select('.photo');
	var photoFrame = container.ext.select('.frame');

	var photoList = $.data.gallery.photos;
	var currentIndex = 0;
	var photoScale = 1;
	var photoScaleTarget = 1.033;

	var loadNext = function() {
		currentIndex++;
		currentIndex = currentIndex % photoList.length;
		load();
	}

	var loadPrev = function() {
		currentIndex--;
		if(currentIndex <= -1) currentIndex = photoList.length - 1;
		load();
	}

	var load = function() {
		photoHolder.ext.bg(photoList[currentIndex], function() {

			photoFrame.style.opacity = 0;
			photoFrame.ext.transition({ opacity: 1 }, 800, Util.cssEase.easeOut);
			photoScale = 1;
		});
	}

	var scalePhoto = function() {
		photoScale += (photoScaleTarget - photoScale) * 0.01;
		photoHolder.ext.transform({ scaleX: photoScale, scaleY: photoScale });
	}

	document.addEventListener('keydown', function(e) {
		// 37 - 39
		if(Application.route.value.lastPart != NOR.NAV_GALLERY) return;

		switch(e.keyCode) {
			case 37:
				loadPrev();
				break;
			case 39:
				loadNext();
				break;
		}
	});

	container.ext.select('.prev').ext.on('click', loadPrev);
	container.ext.select('.next').ext.on('click', loadNext);

	NOR.Animation.moveForMenu($, container);

	Application.route.on(function(c, l) {
		if(c.lastPart == NOR.NAV_GALLERY) {
			container.ext.show();
			FrameImpulse.on(scalePhoto);
			load();
		} else {
			container.ext.hide();
			FrameImpulse.off(scalePhoto);
		}
	});


}