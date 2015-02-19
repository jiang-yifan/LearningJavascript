(function(){
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Bullet = Asteroids.Bullet = function(options){
    this.pos = options.pos;
    this.vel = options.vel;
    this.color = (options.color || Bullet.COLOR);
    this.radius = (options.radius || Bullet.RADIUS)
  }

  Bullet.COLOR = "#00FF00";
  Bullet.RADIUS = 5;
  Bullet.SPEED = 10;

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);

})();
