NOR.onData = function(data) {

	var $ = {
		data: data,
		menuOpen: new Value(false)
	}

	NOR.Background($);
	NOR.BackgroundSound($);

	NOR.Home($);
	NOR.About($);
	NOR.VR($);
	NOR.Video($);
	NOR.Credits($);
	NOR.Gallery($);
	// Handled by the Background 
	// NOR.GalleryVR($);
	NOR.News($);
	NOR.Contact($);
	NOR.Nav($);
	NOR.Footer($);

	VirtualScroll.lockTouch();

	Application.init({ disableHistoryAPI: !data.config.deeplinks });

}