(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Array.prototype.first){
    warn(Array, 'first');
  }

  Array.prototype.first = function(){
    return this[0];
  };

  Object.defineProperty(Array.prototype, "first", {enumerable: false});
}(this));
