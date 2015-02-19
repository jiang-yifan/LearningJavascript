(function(){
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var GameView = Asteroids.GameView = function (ctx) {
    this.game = new Asteroids.Game();
    this.ctx = ctx;
  }

  GameView.prototype.start = function(){
    setInterval((function(){
      this.handleInput();
      if( Math.random() * this.game.diff > 9 / 10)
        this.game.addAsteroid({});
      this.game.moveObjects();
      this.game.cleanObjects();
      this.game.draw(this.ctx);
    }).bind(this), 20);
  }

  GameView.prototype.handleInput = function () {
    this.game.ship.deccelerate();
    if(key.isPressed('w') || key.isPressed('up')) this.game.ship.impulse([0, -1])
    if(key.isPressed('a') || key.isPressed('left')) this.game.ship.impulse([-1, 0])
    if(key.isPressed('s') || key.isPressed('down')) this.game.ship.impulse([0, 1])
    if(key.isPressed('d') || key.isPressed('right')) this.game.ship.impulse([1, 0])
    if(key.isPressed('space')) this.game.addBullet();
    this.game.ship.bounds();
  };
})();
