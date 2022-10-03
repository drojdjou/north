
<?php 

	$url = "http://" . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"];
	$path = $_SERVER["REQUEST_URI"];

	if(strpos($path, "vr") !== false) {
		$title = "NORTH";
		$desc = "VR Experience by Matt Ogens & Bartek Drozdz";
		$shareImage = "http://gonorthordie.com/assets/share/northvr.jpg";
		$url = "http://gonorthordie.com/vr";
	} else {
		$title = "NORTH";
		$desc = "A film by Matt Ogens";
		$n = (rand(0,1) == 1) ? "01" : "02";
		$shareImage = "http://gonorthordie.com/assets/share/north$n.jpg";
		$url = "http://gonorthordie.com/";
	}

?>

<!DOCTYPE html>
<html>
<head>
<title>NORTH | A film by Matt Ogens</title>

<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1, minimal-ui">

<!-- !PROD --><!--
<base href='%%PATH%%'>
--><!-- !PROD -->

<!-- !DEV -->
<base href='<?= file_get_contents('base.local') ?>'>
<!-- !DEV -->

<link rel="icon" href="assets/favicon.png?v=2" type="image/x-icon">
<link rel="shortcut icon" href="assets/favicon.png?v=2" type="image/x-icon">

<meta name="theme-color" content="#000000">
<link rel="icon" sizes="256x256" href="assets/share/north-256.jpg">
<link rel="icon" sizes="128x128" href="assets/share/north-128.jpg">
<meta name="mobile-web-app-capable" content="yes">
<link rel="apple-touch-icon" sizes="128x128" href="assets/share/north-128.jpg">

<link rel="stylesheet" type='text/css' href="css/master.css">

<noscript><meta name="refresh" content="0;URL=fallback.html"></noscript>

<!--[if lte IE 9]>
	<script type="text/javascript">
		document.location.href = 'fallback.html';
	</script>
<![endif]-->

<meta name="robots" content="index,follow">
<meta name='description' content='NORTH | A film by Matt Ogens'/>

<meta property='og:title' content='<?=$title;?>'/>
<meta property="og:site_name" content='north'/>
<meta property="og:type" content="website" />
<meta property="og:url" content='<?=$url;?>'/>
<meta property="og:description" content='<?=$desc;?>'/>
<meta property="og:image" content='<?=$shareImage;?>'/>

<meta name="twitter:card" content='summary_large_image'>
<meta name="twitter:creator" content='@bartekd'>
<meta name="twitter:url" content='<?=$url;?>'>
<meta name="twitter:title" content='<?=$title;?>'>
<meta name="twitter:description" content='<?=$desc;?>'>
<meta name="twitter:image" content='<?=$shareImage;?>'>

</head>
<body virtualscroll>

<section id="background">
	<div class="bg"></div>
	<iframe class="vr"></iframe>
	<video autoplay loop muted></video>
	<div class="overlay"></div>
</section>

<section id="home">
	<div class="content">
		<img class='tt' src='assets/tt-white.png'>
		<h4>A film by Matt Ogens</h4>
		<ul class='quick-menu'>
			<li><a href='/about'>About</a></li>
			<li><a href='/trailer'>Trailer</a></li>
			<li><a href='/vr'>VR Experience</a></li>
		</ul>
		<h5 class="rel"><a href='/news'>In Theaters January 13th</a></h5>
		<h5 class="vod"><a href='http://bit.ly/gonorthmovie' target="_blank"><img src='assets/itunes.png'></a></h5>
	</div>
</section>

<section id="vr">
	
	<div class="bg"></div>

	<div class="content">
		<img class='tt' src='assets/tt-white.png'>
		<h4>
			<div class='head'><img src="assets/vr.svg"> VR experience</div>
			<div class='sub'>
				<span class="watch-btn">Watch in 360&deg;</span>
				<a href="/gallery-vr">VR Gallery</a>
			</div>
			<div class='htw'>
				Watch Go North n VR on the RYOT mobile app.<br>Download it for 
				<a href="https://play.google.com/store/apps/details?id=com.apto.ryot_vr" target="_blank">Android</a> 
				or 
				<a href="https://itunes.apple.com/us/app/ryot-vr/id1046058227" target="_blank">iOS</a>.
			</div>
		</h4>
	</div>
</section>

<section id="about">
	<div class="content">
		<article></article>
	</div>
</section>

<section id="trailer">
	<iframe allowfullscreen="true"></iframe>
</section>

<section id="news">
	<div class="content">
		<ul></ul>
	</div>
</section>

<section id="credits">
	<div class="content">
		<article>
		</article>
	</div>
</section>

<section id="gallery">
	<div class="frame">
		<div class="photo"></div>
	</div>

	<svg class="prev" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
		<!-- <path fill="#444" d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13z"></path> -->
		<path fill="#444" d="M20.914 9.914l-2.829-2.829-8.914 8.914 8.914 8.914 2.828-2.828-6.086-6.086z"></path>
	</svg>

	<svg class="next" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
		<!-- <path fill="#444" d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path> -->
		<path fill="#444" d="M11.086 22.086l2.829 2.829 8.914-8.914-8.914-8.914-2.828 2.828 6.086 6.086z"></path>
	</svg>

</section>

<section id="contact">
	<article>
		<h3>For all questions & inquires please contact</h3>
			<a class="me" href="">Matt Ogens</a>
			<a class="sm" href="http://mattogens.com" target="_blank">mattogens.com</a>
			<a class="sm" href="https://twitter.com/mattogens" target="_blank">@mattogens</a>
			<a class="be" href="">Bartek Drozdz</a>
			<a class="sm" href="http://bartekdrozdz.com" target="_blank">bartekdrozdz.com</a>
			<a class="sm" href="https://twitter.com/bartekd" target="_blank">@bartekd</a>
	</article>
</section>

<nav>

	<div class='background'></div>

	<ul class='icon'>
		<li></li>
		<li></li>
		<li></li>
	</ul>

	<ul class='menu'>
	</ul>

</nav>

<footer>
	<ul>
		<li class="fb"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
			<path fill="#fff" d="M26.667 0h-21.334c-2.945 0-5.333 2.388-5.333 5.334v21.332c0 2.946 2.387 5.334 5.333 5.334h10.667v-14h-4v-4h4v-3c0-2.761 2.239-5 5-5h5v4h-5c-0.552 0-1 0.448-1 1v3h5.5l-1 4h-4.5v14h6.667c2.945 0 5.333-2.388 5.333-5.334v-21.332c0-2.946-2.387-5.334-5.333-5.334z"></path>
		</svg></li>

		<li class="tw"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
			<path fill="#fff" d="M32 6.076c-1.177 0.522-2.443 0.875-3.771 1.034 1.355-0.813 2.396-2.099 2.887-3.632-1.269 0.752-2.674 1.299-4.169 1.593-1.198-1.276-2.904-2.073-4.792-2.073-3.626 0-6.565 2.939-6.565 6.565 0 0.515 0.058 1.016 0.17 1.496-5.456-0.274-10.294-2.888-13.532-6.86-0.565 0.97-0.889 2.097-0.889 3.301 0 2.278 1.159 4.287 2.921 5.465-1.076-0.034-2.088-0.329-2.974-0.821-0.001 0.027-0.001 0.055-0.001 0.083 0 3.181 2.263 5.834 5.266 6.437-0.551 0.15-1.131 0.23-1.73 0.23-0.423 0-0.834-0.041-1.235-0.118 0.835 2.608 3.26 4.506 6.133 4.559-2.247 1.761-5.078 2.81-8.154 2.81-0.53 0-1.052-0.031-1.566-0.092 2.905 1.863 6.356 2.95 10.064 2.95 12.076 0 18.679-10.004 18.679-18.68 0-0.285-0.006-0.568-0.019-0.849 1.283-0.926 2.396-2.082 3.276-3.398z"></path>
		</svg></li>

		<li><svg id="mute" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34" height="32" viewBox="0 0 32 32">
			<path class="waves" fill="#fff" d="M27.814 28.814c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.739-2.739 4.247-6.38 4.247-10.253s-1.508-7.514-4.247-10.253c-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c3.305 3.305 5.126 7.7 5.126 12.374s-1.82 9.069-5.126 12.374c-0.293 0.293-0.677 0.439-1.061 0.439zM22.485 25.985c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 4.094-4.094 4.094-10.755 0-14.849-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c2.55 2.55 3.954 5.94 3.954 9.546s-1.404 6.996-3.954 9.546c-0.293 0.293-0.677 0.439-1.061 0.439v0zM17.157 23.157c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.534-2.534 2.534-6.658 0-9.192-0.586-0.586-0.586-1.536 0-2.121s1.535-0.586 2.121 0c3.704 3.704 3.704 9.731 0 13.435-0.293 0.293-0.677 0.439-1.061 0.439z"></path>
			<path fill="#fff" d="M13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z"></path>
		</svg></li>
	</ul>
</footer>

<!-- !DEV -->
<?php
	include('php/include-js.php');
	getDirContents('lib');
	getDirContents('src');
?>
<!-- !DEV -->

<!-- !PROD --><!--
<script type="text/javascript" src="app.min.js"></script>
--><!-- !PROD -->

<script type="text/javascript" src="data/data.js"></script>

<!-- !DEV -->
<script type="text/javascript">

	// LiveReload
	if(location.host.indexOf('local') > -1 || 
	   location.host.indexOf('192.168') > -1 || 
	   location.host.indexOf('10.0') > -1) {
			var LR_PORT = 35780;
			document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':' + LR_PORT + '/livereload.js?snipver=1"></' + 'script>');
	}

</script>
<!-- !DEV -->

</body>
</html>
