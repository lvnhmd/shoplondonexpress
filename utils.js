/*jslint node: true */
'use strict';

var fs = require('fs');
var mkdirp = require('mkdirp');
var path = require('path');

module.exports.saveFile =  function saveFile(filename, contents, callback) {
	mkdirp(path.dirname(filename), function(err) {
		if (err) {
			return callback(err);
		}
		fs.writeFile(filename, contents, callback);
	});
}