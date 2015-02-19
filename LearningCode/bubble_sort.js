var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfLessThan (el1, el2, callback) {
  reader.question("is " + el1 + " > " + el2 + "? ", function(ans) {
    if (ans === "yes") {
      callback(true);
    } else {
      callback(false);
    }
  });

}

function innerBubbleSortLoop (arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfLessThan(arr[i], arr[i +1], function(userAnswer) {
      if (userAnswer === true) {
        var elementFirst = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = elementFirst;
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  }
  else if (i === (arr.length - 1)){
    outerBubbleSortLoop(madeAnySwaps);
  }
}

function absurdBubbleSort (arr, sortCompletionCallback) {
  function outerBubbleSortLoop (madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }
    else {
      reader.close();
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1, 5, 6], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
