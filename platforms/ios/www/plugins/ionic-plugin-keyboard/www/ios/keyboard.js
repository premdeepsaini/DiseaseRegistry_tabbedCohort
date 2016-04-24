<<<<<<< HEAD
cordova.define("ionic-plugin-keyboard.keyboard", function(require, exports, module) {

=======
cordova.define("ionic-plugin-keyboard.keyboard", function(require, exports, module) { 
>>>>>>> 47b3fd45882c3dcb07a6faedd8f8546357f9ba69
var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec');


var Keyboard = function() {
};

Keyboard.hideKeyboardAccessoryBar = function(hide) {
    exec(null, null, "Keyboard", "hideKeyboardAccessoryBar", [hide]);
};

Keyboard.close = function() {	
    exec(null, null, "Keyboard", "close", []);
};

Keyboard.show = function() {
    exec(null, null, "Keyboard", "show", []);
};

Keyboard.disableScroll = function(disable) {
    exec(null, null, "Keyboard", "disableScroll", [disable]);
};

/*
Keyboard.styleDark = function(dark) {
 exec(null, null, "Keyboard", "styleDark", [dark]);
};
*/

Keyboard.isVisible = false;

module.exports = Keyboard;




});
