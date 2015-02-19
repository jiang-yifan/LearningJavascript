function Board () {
  this.grid = this.setup()
}

Board.prototype.setup = function() {
  var new_grid = [];
  for (var i = 1; i <= 3; i ++) {
    new_grid.push([null, null, null]);
  }
  return new_grid;
}

Board.prototype.print = function() {
  this.grid.forEach(function(arr) {
    console.log(arr)
  })
}

Board.prototype.over = function() {
  var diagR = [];
  var diagL = [];
  var that = this
  for (var i = 0; i<= 2; i++) {
    if (that.grid[i].every(function(el) {
      return el === that.grid[i][0] && el != null;
    })) {
      return true;
    }
    var colArr = [];

    for (var j = 0; j<= 2; j++) {
      colArr.push(that.grid[j][i]);
      if(j === i){
        diagR.push(that.grid[j][i]);
      }
      if( i=== 2){
        diagL.push(that.grid[i-j][0+j]);
      }
    }

    if(colArr.every(function(el){
      return el === colArr[0] && el !=null;
    })){
      return true;
    }
  }

  if(diagL.every(function(el){
    return el === diagL[0] && el !=null;
  })){
    return true;
  }

  if(diagR.every(function(el){
    return el === diagR[0] && el !=null;
  })){
    return true;
  }
  return false
};

Board.prototype.isEmpty = function(pos){
  if(this.grid[pos[0]][pos[1]] == null){
    return true;
  }else{
    return false;
  }
};

Board.prototype.validMove = function(pos) {
  return pos.every( function(el) {
    return el >= 0 && el < 3
  } )
}

Board.prototype.move = function(startPos, color) {
  if (this.isEmpty(startPos) && this.validMove(startPos)) {
    this.grid[startPos[0]][startPos[1]] = color;
    return true;
  }
  else {
    return false;
  }
}

module.exports = Board;


// board = new Board
// board.print()
// board.move([0, 2], "X")
// board.move([1, 1], "X")
// board.move([2, 0], "X")
// board.print()
// console.log(board.over())
