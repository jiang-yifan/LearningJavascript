Array.prototype.transpose = function() {
  var newArr = []
  for (var i = 0; i <= 2; i++) {
    newArr.push([]);
    for (var j = 0; j <= 2; j ++) {
      var originalElement = this[i][j];
      newArr[i].push(this[j][i]);
    }
  }
  return newArr;
};

console.log([[1, 2, 3], [4, 5, 6], [7, 8, 9]].transpose())
