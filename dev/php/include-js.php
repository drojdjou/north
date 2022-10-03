<?

function getDirContents($dir) {

	$cmdl = strlen(getcwd()) + 1;
	$files = scandir($dir);

	foreach($files as $key => $value){
		$path = realpath($dir.DIRECTORY_SEPARATOR.$value);
		$file = basename($path);
		if(!is_dir($path) && substr($file,0,1)!=".") {
			$js = substr($path, $cmdl);
			echo "<script type=\"text/javascript\" src=\"" . $js . "\"></script>\n";
		} else if(is_dir($path) && $value != "." && $value != "..") {
			getDirContents($path);
		}
	}
}

?>