(function(){
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Ship = Asteroids.Ship = function (options) {
    this.vel = [0,0];
    this.pos = [window.innerWidth/2, window.innerHeight/2];
    this.color = (options.color || "red")
    this.radius = (options.radius || 25)
    this.acceleration = 0.3;
    this.loaded = true;
  }

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.impulse = function (vec) {
    vec[0] *= this.acceleration;
    vec[1] *= this.acceleration;
    this.vel = Asteroids.Util.addVectors(this.vel, vec);
  };

  Ship.prototype.deccelerate = function () {
    this.vel[0] *= .98;
    this.vel[1] *= .98;
  };

  Ship.prototype.bounds = function () {
    if(this.pos[0] < 0 + this.radius){
      this.pos[0] = 0 + this.radius;
      this.vel[0] = 0;
    } else if (this.pos[0] > Asteroids.Game.DIM_X - this.radius) {
      this.pos[0] = Asteroids.Game.DIM_X - this.radius;
      this.vel[0] = 0;
    } else if(this.pos[1] < 0 + this.radius){
      this.pos[1] = 0 + this.radius;
      this.vel[1] = 0;
    } else if (this.pos[1] > Asteroids.Game.DIM_Y - this.radius) {
      this.pos[1] = Asteroids.Game.DIM_Y - this.radius;
      this.vel[1] = 0;
    }
  };

  Ship.prototype.fire = function () {
    if( !this.loaded ) return;
    this.loaded = false;
    setTimeout(this.reload.bind(this), 200);

    angle = Math.atan(this.vel[1] / this.vel[0])
    bullet_radius = Asteroids.Bullet.RADIUS
    bullet_speed = Asteroids.Bullet.SPEED
    pos = [
      (this.vel[0] < 0 ? -1 : 1) * Math.cos(angle) * (this.radius + bullet_radius) + this.pos[0],
      (this.vel[0] < 0 ? -1 : 1) * Math.sin(angle) * (this.radius + bullet_radius) + this.pos[1]
    ]
    vel = [
      (this.vel[0] < 0 ? -1 : 1) * Math.cos(angle) * bullet_speed,
      (this.vel[0] < 0 ? -1 : 1) * Math.sin(angle) * bullet_speed
    ]
    return new Asteroids.Bullet({pos: pos, vel: vel})
  };

  Ship.prototype.reload = function () {
    this.loaded = true;
  };

})();
