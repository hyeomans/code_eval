var fs  = require("fs");

var happyNumber = function(input) {
  var number = parseInt(input, 10),
      result = 0,
      seen   = {};
      
  if (number === 1) {
    return 1;
  };

  while(result !== 1){
    result = sumOfSquares(number);
    if(seen[result]) {
      return 0;
    }
    seen[result] = result;
    number = result;
  }
  return result;
};

var sumOfSquares = function(input) {
  var result = 0;
  while(input !== 0) {
    result += (input % 10) * (input % 10);
    input = Math.floor(input/10);
  }

  return result;
};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        //do something here
        //console.log(answer_line);
        console.log(happyNumber(line));
    }
});

