'use strict';

var colors = require('colors');

exports.endOfLine = require('os').EOL;

exports.trimCssPath = function (path) {
  return path.replace(/.*(?=css[\\\/])/, '');
};

exports.trimJsPath = function (path) {
  return path.replace(/.*(?=js[\\\/])/, '');
};

exports.trimTestPath = function (path) {
  return path.replace(/.*(?=(js|test)[\\\/])/, '');
}

exports.logError = function (msg) {
  console.error(msg.red);
}

exports.logSuccess = function (msg) {
  console.log(msg.green);
}

exports.logWatchEvent = function (path, type, action) {
  console.log('[watcher] File %s was %s, %s...', path, type, action);
}

exports.logTaskError = function (err) {
  // Makes custom errors more uniform.
  // Could be combined with gulp-util or npm colors for nicer output.
  var errorMsg = '[' + err.plugin + ']';
  errorMsg += ' ' + err.message.replace("\n",'');

  if (err.fileName) {
    errorMsg += ' in ' + err.fileName;
  }

  if (err.lineNumber) {
    errorMsg += ' on line ' + err.lineNumber;
  }

  console.error(errorMsg.red);
}
