(function(){
  var Asteroids = window.Asteroids = window.Asteroids || {};
  var MovingObject = Asteroids.MovingObject = function(options){
    this.vel = options.vel;
    this.radius = options.radius;
    this.pos = options.pos || Asteroids.Util.randomPosition(this.radius);
    this.color = options.color;
    this.health = options.health;
    this.density = options.density;
    this.momentum = Asteroids.Physics.momentum(this.density, this.radius, this.vel)
  }

  Asteroids.Util.inherits(MovingObject, Asteroids.Particle)

  MovingObject.prototype.collidesWith = function(that) {
    return (this.radius + that.radius > Asteroids.Util.distance(this.pos, that.pos));
  }
})();
