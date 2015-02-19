var readline = require('readline');

var reader = readline.createInterface(process.stdin, process.stdout)

function addNumbers(sum, numsLeft, completionCallback) {
  if(numsLeft >0){
    reader.question("Input number", function (answer){
      answer = parseInt(answer);
      completionCallback(answer);
      sum += answer;
      console.log(sum);
      numsLeft --;
      addNumbers(sum, numsLeft, completionCallback);
    });
  } else if(numsLeft === 0){
    completionCallback(sum);
    reader.close();
  }
}

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
});
