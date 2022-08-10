// JavaScript methods that use ES6 methods

J2S._ES6 || (J2S._ES6 = {test:function(s){alert(s)}});

J2S._ES6.importModule = function(resource, resolve, reject) {
	return import(resource) .then(function(value) { resolve &&
	        resolve.accept$O(value) }, function(reason) {reject &&
	        reject.accept$O(reason)});
}