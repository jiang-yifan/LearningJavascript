var Board = require("./board")
var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Game(reader) {
  this.reader = reader;
  this.board = new Board();
  this.colorArr = ["red", "black"];
  this.color = function() {
    return this.colorArr[0]
  }
}

Game.prototype.nextColor = function() {
  this.colorArr.reverse();
  return this.color();
}

Game.prototype.promptMove = function(callback, completionCallback) {
  var that = this
  this.board.print()
  this.reader.question("Select Coordinate:", function(move) {
    move = [move[0], move[1]]
    console.log(move[0]);
    if (callback(move, that.color())) {
      if (that.board.over()) {
        completionCallback.apply(that);
      } else {
        that.nextColor();
        that.promptMove(callback, completionCallback);
      }
    }
    else {
      that.promptMove(callback, completionCallback);
    }
  })
}


Game.prototype.run = function(callback) {
  this.promptMove(this.board.move.bind(this.board), callback)
}

var game = new Game(reader)
game.run(function() { return console.log(this.color() + "win");})
// game.board
