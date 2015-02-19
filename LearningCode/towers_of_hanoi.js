var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function  HanoiGame(){
  this.stacks = [[3,2,1], [], []];
}

HanoiGame.prototype.isWon = function(){
  return this.stacks[2].length === 3;
};

HanoiGame.prototype.isValidMove = function(startIndex, endIndex){
  if (startIndex < 0 || startIndex > 2 || startIndex == endIndex) {
    return false;
  }
  if (endIndex < 0 || endIndex > 2) {
    return false;
  }

  if (this.stacks[startIndex].length == 0) {
    return false;
  }

  if (this.stacks[endIndex].length == 0) {
    return true;
  }

  if (this.stacks[startIndex][this.stacks[startIndex].length - 1] > this.stacks[endIndex][this.stacks[endIndex].length -1]) {
    return false;
  } else {
    return true;
  }
};

HanoiGame.prototype.move = function(startIndex, endIndex) {
  if (this.isValidMove(startIndex, endIndex)) {
    this.stacks[endIndex].push(this.stacks[startIndex].pop());
    return true;
  } else {
    return false;
  }
};

HanoiGame.prototype.print = function() {
  console.log(JSON.stringify(this.stacks));
};



HanoiGame.prototype.promptMove = function(callback,completionCallback) {
  this.print();
  var that = this;
  reader.question("select a stack ", function(start) {
    reader.question("move to where ", function(end) {
          callback(start, end)
          if(that.isWon())
          {
            reader.close();
            completionCallback();
          }else{
            that.promptMove(callback);
          }

    });
  });
};

HanoiGame.prototype.run = function(completionCallback){
  this.promptMove(this.move.bind(this),completionCallback);
};

var hanoi = new HanoiGame();
hanoi.run(function(){
  console.log("you win");
});
