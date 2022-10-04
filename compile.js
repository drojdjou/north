#!/usr/bin/env node

var fs = require('fs');
var jcc = require('./build/jcc');
var less = require('./build/lecc');

var useBasePath = true;

var path = process.argv[2] || "/";

var builldHTML = function(devFilePath, releaseFilePath, serverPath) {
	
	var devFile = fs.readFileSync(devFilePath, { encoding: 'UTF-8' }).split('\n');
	var devOut = [];
	
	var mDev = '!DEV';
	var mProd = '!PROD';
	var mPath = '%%PATH%%';
	var devLock = false;
	
	devFile.forEach(function(line) {
		
		if(line.indexOf(mDev) > -1) {
			devLock = !devLock;
		}
		
		if(line.indexOf(mProd) > -1) {
			line = '';
		}
		
		if(line.indexOf(mPath) > -1) {
			line = line.replace(mPath, serverPath);
		}
		
		if(line.indexOf('<base') > -1 && !useBasePath) {
			line = '';
		}
		
		if(!devLock && line.indexOf(mDev) == -1) {
			devOut.push(line);
		}
	});
	
	fs.writeFileSync(releaseFilePath, devOut.join('\n'), { encoding: 'UTF-8' });
	
}

less.compile('master', 'dev/less/', 'release/css/');

jcc.saveBucket(jcc.createBucket(["dev/lib", "dev/src"]), 'app', 'release/js/');

builldHTML('dev/index.php', 'release/index.php', path);
builldHTML('dev/fallback.html', 'release/fallback.html', path);
builldHTML('dev/template.htaccess', 'release/.htaccess', path);
