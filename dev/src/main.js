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
	NOR.Trailer($);
	NOR.Credits($);
	NOR.Gallery($);
	NOR.News($);
	NOR.Contact($);
	NOR.Nav($);

	VirtualScroll.lockTouch();

	Application.init({ disableHistoryAPI: !data.config.deeplinks });

}