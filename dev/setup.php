<!DOCTYPE html>
<html>
<head>
<title>Setup</title>

<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1, minimal-ui">

<style type="text/css">

body {
	background-color: #000;
	color: #fff;
	font-family: Arial, sans-serif;
	margin: 20px;
	font-size: 16px;
	line-height: 1;
}

h1 {
	font-size: 18px;
	margin-bottom: 30px;
}

p {

}

code {
	color: #00ff80;
	font-size: 16px;
	display: block;
	line-height: 1;
	margin-bottom: 40px;
	white-space: pre;
}

.action {
	color: #ff8000;
}

a {
	border: 0;
	color: white;
	text-transform: uppercase;
	text-decoration: none;
	border: 1px solid white;
	margin-top: 30px;
	padding: 10px;
	display: inline-block;
}
	
</style>

</head>
<body>


<h1>Welcome to Gods Of Egypt dev setup page.</h1>

<?php


$basePath = str_replace("setup.php", "", $_SERVER['REQUEST_URI']);

echo "<p>You local base path is:</p>";
echo "<code>" . $basePath . "</code>";

echo "<p>Detecting if your base.local file exists:<p>";

$hasBase = file_exists('base.local');
$baseExists = $hasBase ? "YES" : "NO";

echo "<code>" . $baseExists . "</code>";

if($hasBase) {
	echo "<p>Contents of your file:<p>";
	$basePathFromFile = file_get_contents('base.local');
	echo "<code>" . $basePathFromFile . "</code>";

	if($basePathFromFile != $basePath) {
		echo "<p class=action>Base path doesn not match, fixing...";
		file_put_contents('base.local', $basePath);
		echo "Success!</p>";
	} else {
		echo "Everything matches!";
	}

} else {
	
	echo "<p class=action>base.local file not found, fixing...";
	file_put_contents('base.local', $basePath);
	echo "Success!</p>";

}

echo "<p>Preparing local .htaccess file</p>";

$hta = file_get_contents('template.htaccess');
$hta = preg_replace('/^RewriteBase.*$/m', 'RewriteBase ' . $basePath, $hta);

file_put_contents('.htaccess', $hta);

echo "<p class=action>.htaccess file ready!</p>";

?>

<p>You're good to go!</p>
<a href='.'>GO TO PROJECT</a>

</body>
</html>
