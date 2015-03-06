var input = "7\n3\n10\n100\n300\n200\n1000\n20\n30";

function processData(input) {
  var array = input.split('\n'),
      N = array[0],
      K = array[1],
      numbers = array.slice(2);
  console.log(compute(numbers, K));
}

function compute(input, K) {
  var min = 99999,
      K = parseInt(K, 10),
      numbers;

  numbers = input.map(function(x) {
    return parseInt(x, 10);
  }).sort(function(a, b) {
    return a - b;
  });

  for(var x = 0; (x + K - 1) < numbers.length; x += 1) {
    var tempMin = numbers[x];
    var tempMax = numbers[x + K - 1];

    var tempResult = tempMax - tempMin;

    if(tempResult > 0 && tempResult < min) {
      min = tempResult;
    }
  }
  
  return min;
}

processData(input);