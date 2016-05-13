NOR.BackgroundSound = function($) {

	var sound = new Howl({
		urls: [$.data.sound.source],
  		loop: $.data.sound.loop,
  		autoplay: false
	});

	var mute = EXT.select('footer #mute');

	var userPause = !$.data.sound.autoplay, systemPause = false, isPaused = true;

	var update = function() {

		if((systemPause || userPause) && !isPaused) {
			sound.fade(1, 0, 500, function() {
				sound.pause();
			});
			isPaused = true;
			// console.log('Pausing bg sound');
		} else if(!systemPause && !userPause && isPaused) {
			sound.play();
			sound.fade(0, 1, 500);
			isPaused = false;
			// console.log('Resuming bg sound');
		}

		if(isPaused) mute.classList.add('muted');
		else mute.classList.remove('muted');
	}

	document.addEventListener('keydown', function(e) {
		if(e.keyCode == "Q".charCodeAt(0)) {
			userPause = !userPause;
			update();
		}
	});

	mute.ext.on('click', function() {
		userPause = !userPause;
		update();
	});

	Application.route.on(function(c, l) {

		if(c.lastPart == NOR.NAV_TRAILER) {
			systemPause = true;
			update();
		} else {
			systemPause = false;
			update();
		}

	});
}