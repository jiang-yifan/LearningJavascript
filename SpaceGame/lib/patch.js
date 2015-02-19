(function(){
  window.Number.prototype.between  = function (min, max) {
    return this > min && this < max;
  };

  window.Array.prototype.clean = function() {
    for (var i = 0; i < this.length; i++) {
      if (!this[i]) {
        this.splice(i, 1);
        i--;
      }
    }
    return this;
  };
})();
