(function(){
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Game = Asteroids.Game = function(){
    this.asteroids = [];
    this.diff = 1;
    this.ship = new Asteroids.Ship({});
    this.bullets = [];
    this.particles = [];
  };

  Game.DIM_X = window.innerWidth;
  Game.DIM_Y = window.innerHeight;
  Game.NUM_ASTEROIDS = 10;

  Game.prototype.addAsteroid = function (options) {
    if(this.asteroids.length <= Game.NUM_ASTEROIDS)
      this.asteroids.push(new Asteroids.Asteroid(options));
  };

  Game.prototype.addBullet = function () {
    bullet = this.ship.fire();
    if( bullet )
      this.asteroids.push(bullet);
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.allObjects().forEach(function(object){
      object.draw(ctx);
    })
  };

  Game.prototype.moveObjects = function () {
    this.allObjects().forEach(function (object) {
      object.move();
    })
  };
  Game.prototype.cleanParticles = function(){
    this.particles.clean();
    for (var i = 0; i < this.particles.length; i++) {
      if(this.particles[i].outBounds()){
        delete this.particles[i];
      }
    }
    this.particles.clean();
  }

  Game.prototype.cleanObjects = function () {
    this.cleanAsteroids();
    this.cleanParticles();
  };

  Game.prototype.cleanAsteroids = function () {
    var newAsteroids = [];
    var newParticles = [];
    for (var i = 0; i < this.asteroids.length; i++) {
      if(this.asteroids[i]){
        if (this.asteroids[i].outBounds()) {
          delete this.asteroids[i];
        }else{
          for (var j = 0; j < this.asteroids.length; j++) {
            if ( i!=j && this.asteroids[j] && this.asteroids[i].radius == 50 &&
              this.asteroids[i].collidesWith(this.asteroids[j]) &&
              ( this.asteroids[i] instanceof Asteroids.Asteroid ||
                this.asteroids[j] instanceof Asteroids.Asteroid)){
                  newParticles = this.asteroids[i].isCollidingAsteroid(this.asteroids[j]);
                  newParticles = newAsteroids.concat(this.asteroids[j].isCollidingAsteroid(this.asteroids[i]));
                  if(this.asteroids[i].isDead())
                    delete this.asteroids[i];
                  if(this.asteroids[j].isDead())
                    delete this.asteroids[j];
                  break;
                }
              }
            }
          }
        }
    this.particles = this.particles.concat(newParticles);
    this.asteroids = this.asteroids.concat(newAsteroids);
    this.asteroids.clean();
  }

  Game.prototype.allObjects = function () {
    return this.asteroids.concat(this.ship).concat(this.bullets).concat(this.particles);
  };
})();
