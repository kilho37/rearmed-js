(function(){
  "use strict";

  Array.prototype.first = function(){
    return this[0];
  };
  Object.defineProperty(Array.prototype, "first", {enumerable: false});
}(this));