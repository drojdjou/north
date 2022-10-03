#!/usr/bin/env node

var VERSION = 2;

var livereload = require('livereload');
var chokidar = require('chokidar');
var less = require('less');
var fs = require('fs');
var LessPluginAutoPrefix = require('less-plugin-autoprefix');

var LRPORT = 35780;

var lrserver = livereload.createServer({ port: LRPORT });
lrserver.watch(__dirname + "/dev");
console.log('> LR server ready / Running at port ', LRPORT, " Version: ", VERSION);

var compileLessFile = function(name) {
	fs.readFile('dev/less/' + name + '.less', 'utf8', function (err, data) {

		if (err) return console.log(err);

		console.log('..recompiling styles: ' + name);

		var autoprefixPlugin = new LessPluginAutoPrefix({
			browsers: ['last 2 versions']
		});

		less.render(data, {
			paths: ['dev/less'],
			filename: 'dev/less/' + name + '.less',
			plugins: [autoprefixPlugin],
			compress: false
		}, function (err, output) {
			if (err) return console.log(err);
			fs.writeFile('dev/css/' + name + '.css', output.css, function(err) { if(err) return console.log(err); });
		});

	});
};

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

var jsifyShaders = function(folder) {

	var set = walk(folder);

	var concatFile = "SQR.GLSL = {\n";

	for(var i = 0; i < set.length; i++) {
		var f =  set[i];

		var file = fs.readFileSync(f).toString();
		var lines = file.split('\n');


		var name = lines[0].substring(8);
		var filename = f.substring(folder.length);
		var n = file.indexOf('//#name') == -1 ? filename : name;


		concatFile += "\t/* --- --- [" + name + " (" + filename + ")] --- --- */\n";
		concatFile += '\t"' + n + '": "';

		

		for(var j = 0; j < lines.length; j++) {
			var l = lines[j];
			if(l.indexOf("//") > -1 && l.indexOf("//#") == -1) l = l.substring(0, l.indexOf("//"));
			if(l.match(/^([\s\t]*)$/)) continue;
			concatFile += l + '\\n';
		}

		concatFile += '",\n';
	}

	concatFile += "};\n";

	return concatFile;
}

var recompileStyles = function(event, filename) {
	console.log('> ' + filename + ' changed, recompiling styles');
	compileLessFile('master');
}

var rebuildShaders = function(event, filename) {
	console.log('> ' + filename + ' changed, rebuilding shaders');

	var result = jsifyShaders('dev/glsl/');
	var filename = 'dev/lib/sqr-lib/sqr-glsl.js';

	fs.writeFileSync(filename, result);

	// var cs = fs.statSync(cf).size;
	// var cks = (cs / 1024) | 0;
	// console.log('[ ' + cf + '\t' + cs + ' bytes\t' + cks + ' kb ]');
}

chokidar.watch('dev/less', {ignored: /[\/\\]\./}).on('all', recompileStyles);
// chokidar.watch('dev/glsl', {ignored: /[\/\\]\./}).on('all', rebuildShaders);










