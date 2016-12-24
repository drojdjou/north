NOR.ScrollPane = function(element, opts) {

	var scroll = 0, 
		targetScroll = 0, 
		maxScroll,
		options,
		locked = false;

	var clampTarget = function() {
		var m = locked ? 0 : Math.max(-options.minScroll, -maxScroll);

		targetScroll = Math.max(-maxScroll, targetScroll);
		targetScroll = Math.min(m, targetScroll);
		targetScroll = targetScroll | 0;
	}

	var onResize = function() {
		maxScroll = (element.ext.height() + options.contentPadding) - (options.maxHeight() - options.padding);
		clampTarget();	
		// console.log('ScrollPane.on', element.ext.height() + " : " + window.innerHeight);
	}

	var onScroll = function(e) {
		if(locked) return;
		targetScroll += e.deltaY / 2;
		clampTarget();
	}

	var onRender = function() {
		if(maxScroll < 0) return;
		if(Math.abs(targetScroll - scroll) < 0.01) { scroll = targetScroll; };
		scroll += (targetScroll - scroll) * (Simplrz.touch ? 0.2 : 0.2);
		element.ext.y = scroll;
		element.ext.transform();
	}

	var reset = function() {
		scroll = 0;
		targetScroll = 0;
		onRender();
	}

	var sp = {
		get maxScroll() { return maxScroll },
		get locked() { return locked }
	};

	sp.reset = reset;

	sp.on = function() {
		reset();
		onResize();
		VirtualScroll.on(onScroll);
		FrameImpulse.on(onRender);
		Application.resize.on(onResize);
	}

	sp.options = function(o) {
		options = o || {};

		if(!options.maxHeight) options.maxHeight = function() { return window.innerHeight; };
		if(!options.padding) options.padding = 0;
		if(!options.contentPadding) options.contentPadding = 0;
		if(!options.minScroll) options.minScroll = 0;

		onResize();
		return sp;
	}

	sp.lock = function(doLock) {
		locked = doLock;
	}

	sp.moveTo = function(sc) {
		targetScroll = sc;
		clampTarget();
	}

	sp.resize = function() {
		onResize();
	}

	sp.off = function() {
		reset();
		VirtualScroll.off(onScroll);
		FrameImpulse.off(onRender);
		Application.resize.off(onResize);
	}

	sp.options(opts);

	return sp;
}