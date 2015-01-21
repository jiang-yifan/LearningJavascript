(function(){
  var Asteroids = window.Asteroids = window.Asteroids || {};
  var Physics = Asteroids.Physics = function(){};

  Physics.momentum = function(density, radius, vel){
    var area = Asteroids.Util.roundedCircleArea(radius);
    var speed = Asteroids.Util.roundedMagnitude(vel);
    return Math.floor(density * area * speed);
  }

})();
