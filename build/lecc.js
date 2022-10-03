var fs = require('fs');
var less = require('less');
var LessPluginAutoPrefix = require('less-plugin-autoprefix');

var compileLessFile = function(name, path, dest, postfix) {
	fs.readFile(path + name + '.less', 'utf8', function (err, data) {

		postfix = postfix || "";

		if (err) return console.log(err);

		var autoprefixPlugin = new LessPluginAutoPrefix({
			browsers: ['last 2 versions']
		});

		less.render(data, {
			paths: [path],
			filename: path + name + '.less',
			plugins: [autoprefixPlugin],
			compress: true
		}, function (err, output) {
			if (err) return console.log(err);
			fs.writeFile(dest + name + postfix + '.css', output.css, function(err) { 
				if(err) return console.log(err); 
				// else console.log('[k]    less ' + path + name + ' to ' + dest);
			});
		});

	});
};

module.exports =  {
    compile: compileLessFile
};