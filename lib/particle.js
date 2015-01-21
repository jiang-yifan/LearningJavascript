(function(){
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Particle = Asteroids.Particle = function(options){
    this.vel = Asteroids.Util.randomVec(10, -10);
    this.radius = (options.radius || Particle.RADIUS);
    this.pos = (options.pos);
    this.color = (options.color || Particle.COLOR);
  };

  Particle.RADIUS = 1;
  Particle.COLOR = "yellow";

  Particle.spawnParticles = function (number, pos){
    var newParticles = [];
    var newParticle = null;
    var pos = pos;
    for (var i = 0; i < number; i++) {
      newParticle = new Particle({pos: pos})
        newParticles.push(newParticle);
    }

    return newParticles;
  };

  Particle.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  Particle.prototype.outBounds = function() {
    if(!this.pos[0].between(0 - this.radius, Asteroids.Game.DIM_X + this.radius)){
      return true;
    }
    if (!this.pos[1].between(0 - this.radius, Asteroids.Game.DIM_Y + this.radius)){
      return true;
    }
      return false;
  };

  Particle.prototype.move = function () {
    this.pos = Asteroids.Util.addVectors(this.pos, this.vel);
  }
})();
