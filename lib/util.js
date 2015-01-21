(function(){
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Util = Asteroids.Util = function(){}

  Util.inherits = function(childClass, parentClass){
    function Surrogate() {};
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
    childClass.prototype.constructor = childClass;
  };

  Util.addVectors = function(vec1, vec2){
    return [vec1[0] + vec2[0], vec1[1] + vec2[1]];
  };

  Util.randomVec = function (max, min){
    return [Math.random()*(max-min) + min,
    Math.random()*(max-min) + min]
  };

  Util.distance = function(pos1, pos2){
    return Math.sqrt(
      Math.pow(pos2[0] - pos1[0], 2) +
      Math.pow(pos2[1] - pos1[1], 2)
    );
  };

  Util.roundedMagnitude = function(coords){
    return Math.floor( Math.sqrt(
      Math.pow(coords[0], 2) +
      Math.pow(coords[1], 2))
      );
  };

  Util.roundedCircleArea = function(radius){
    return Math.floor(Math.pow(radius, 2) * Math.PI);
  };

  Util.randomPosition = function (radius) {
    var x, y;
    // var vel = this.vel;
    var side = Math.floor(Math.random() * 4);
    if( side === 0 ){
      y = 0 - radius;
      x = Math.random() * Asteroids.Game.DIM_X;
      // vel[1] = Math.abs(vel[1]);
    }else if( side === 1){
      x = 0 - radius;
      y = Math.random() * Asteroids.Game.DIM_Y;
      // vel[0] = Math.abs(vel[0]);
    }else if( side === 2){
      y = Asteroids.Game.DIM_Y + radius;
      x = Math.random() * Asteroids.Game.DIM_X;
      // vel[1] = -1 * Math.abs(vel[1]);
    }else if( side === 3){
      x = Asteroids.Game.DIM_X + radius;
      y = Math.random() * Asteroids.Game.DIM_Y;
      // vel[0] = -1 * Math.abs(vel[0]);
    }
    // this.vel = vel;
    return [x, y];
  };
})();
