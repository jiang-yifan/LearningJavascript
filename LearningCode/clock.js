function Clock () {
}

Clock.Tick = 5000;


Clock.prototype.printTime = function () {
  console.log(this.hour + ":" + this.minute + ":" + this.second)
};

Clock.prototype.run = function() {
  this.hour = new Date().getHours();
  this.minute = new Date().getMinutes();
  this.second = new Date().getSeconds();
  this.printTime();
  setInterval(this._tick.bind(this), 5000)
};

Clock.prototype._tick = function() {
  this.second += 5;
  if (this.second >=60) {
    this.minute ++;
    this.second -= 60;
    if (this.minute >= 60) {
      this.hour ++;
      this.minute -= 60;
    }
    if (this.hour >=24) {
      this.hour -=24;
    }
  }
  this.printTime();
};

var clock = new Clock();
clock.run();
