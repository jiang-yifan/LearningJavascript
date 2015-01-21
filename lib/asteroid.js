(function(){
  var Asteroids = window.Asteroids = window.Asteroids || {};
  var Asteroid = Asteroids.Asteroid = function(options){
    options.color =

    Asteroids.MovingObject.call(this, {
      color: (options.color || Asteroids.Asteroid.COLOR),
      radius:  (options.radius || Asteroids.Asteroid.RADIUS),
      vel: (options.vel || Asteroids.Util.randomVec(10, -10)),
      pos: (options.pos),
      health: (options.health || 2000),
      density: (Asteroids.Asteroid.DENSITY)
    });
    // this.color = (options.color || Asteroid.COLOR);
    // this.radius = (options.radius || Asteroid.RADIUS);
    // this.vel = (options.vel || Asteroids.Util.randomVec(10, -10));
    // this.pos = (options.pos || this.randomPosition());
    // this.health = (options.health || 2000);

  };

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject)

  Asteroid.COLOR = "#FFFFFF";
  Asteroid.RADIUS = 50;
  Asteroid.DIFF = 1;
  Asteroid.DENSITY = 2;

  Asteroid.prototype.spawnAsteroids = function (number){
    var newAsteroids = [];
    var newAsteroid = null;
    for (var i = 0; i < number; i++) {
      newAsteroid = new Asteroid({radius: Math.floor(Asteroid.RADIUS/number),
      pos: this.pos})
      newAsteroids.push(newAsteroid);
    }
    return newAsteroids;
  };

  Asteroid.prototype.takeDamage = function(damage){
    this.health -= damage;
    if (damage >= this.health) {
      return Asteroids.Particle.spawnParticles(100, this.pos);
    }
  }
  Asteroid.prototype.isCollidingAsteroid = function(otherAsteroid){
    var diffMomentum = this.momentum - otherAsteroid.momentum;
    var diffRadius = this.radius - otherAsteroid.radius;

    if (diffRadius <= 0) {
      return this.takeDamage(Math.floor(this.health * otherAsteroid.momentum/ this.momentum));
    }else{
      return this.takeDamage(Math.abs(diffRadius));
    }
  };

  Asteroid.prototype.isDead = function(){
    if(this.health <= 0)
      return true;
  }

})();
