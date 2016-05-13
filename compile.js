#!/usr/bin/env node

var fs = require('fs');
var UglifyJS = require("uglify-js");

var useBasePath = true;

NOR = {
	onData: function(data) {
		useBasePath = data.config.deeplinks;
	}
}

require('./dev/data/data.js');

// Check path
var path = process.argv[2];
var locpath;

try {
	locpath = fs.readFileSync('./dev/base.local').toString();
	console.log(locpath);
} catch(e) {
	console.error('Please create the ./dev/base.local file first. Refer to README.md, section: "Starting dev", for details.');
	process.exit(1);
}

if(!path) {
	console.error('Please provide base path. Refer to README.md, section: "Building", for details.');
	process.exit(1);
}


/// MINIFY JS

var walk = function(dir, filelist) {

	var files = fs.readdirSync(dir);
	var filelist = filelist || [];

	files.forEach(function(file) {
		if (fs.statSync(dir + file).isDirectory()) {
			filelist = walk(dir + file + '/', filelist);
		} else {
			if(file.indexOf('.') != 0) filelist.push(dir + file);
		}
	});

	return filelist;
};

var minify = function(set) {

	var includes = [];

	for(var i = 0; i < set.length; i++) {
		includes.push(set[i]);
	}

	var result = "";

	try {
		result = UglifyJS.minify(includes);
	} catch(e) {
		console.log(e);
	}

	 

	return result.code;
}

var concat = function(set) {

	var concatFile = "";

	for(var i = 0; i < set.length; i++) {
		var f =  set[i];
		concatFile += "/* --- --- [" + f + "] --- --- */\n\n";
		concatFile += fs.readFileSync(f);
		concatFile += "\n\n";
	}

	return concatFile;
}

var createBucket = function(folder, files) {

	files = files || [];
	
	if(folder instanceof Array) {
		folder.forEach(function(f) {
			files = files.concat(walk(f + '/'));
		});
	} else {
		files = files.concat(walk(folder + '/'));
	}

	var result = {};
	
	result.concat = concat(files);
	result.mini = minify(files);

	return result;
}


var saveBucket = function(bucket, fileBase, outputUrl) {

	var cf = outputUrl + fileBase + '.js';
	fs.writeFileSync(cf, bucket.concat);
	var cs = fs.statSync(cf).size;
	var cks = (cs / 1024) | 0;
	console.log('[ ' + cf + '\t' + cs + ' bytes\t' + cks + ' kb ]');

	var mf = outputUrl + fileBase + '.min.js';
	fs.writeFileSync(mf, bucket.mini);
	var ms = fs.statSync(mf).size;
	var mks = (ms / 1024) | 0;
	console.log('[ ' + mf + '\t' + ms + ' bytes\t' + mks + ' kb ]');
}


saveBucket(createBucket(['dev/lib', 'dev/src']), 'app', 'release/');



/// CREATE RELEASE index.html

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

builldHTML('dev/index.php', 'release/index.php', path);
builldHTML('dev/fallback.html', 'release/fallback.html', path);
builldHTML('dev/template.htaccess', 'release/.htaccess', path);

builldHTML('dev/template.htaccess', 'dev/.htaccess', locpath);









