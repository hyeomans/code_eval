//Sample code to read in test cases:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        //do something here
        //console.log(answer_line);
        console.log(calculate(line));
    }
});

function calculate(input) {
  var lines = input.split(',');
      pointCount = 0,
      prevCount = 0,
      maxCount = 999,
      indexOfFirstPoint = 0;

  for(var i = 0; i < lines.length; i += 1) {
    indexOfFirstPoint = lines[i].indexOf('.');
    
    if (indexOfFirstPoint < 0) {
      return 0;
    }

    indexOfY = lines[i].indexOf('Y');

    if (indexOfY < indexOfFirstPoint) {
      return 0;
    }

    pointCount = 0;

    for(var j = indexOfFirstPoint; j < lines[i].length; j += 1) {
      pointCount += 1;
      if (lines[i][j+1] === 'Y')  {
        prevCount = pointCount;
        break;
      }
    }

    if (prevCount < maxCount) {
      maxCount = prevCount;
    }
  }

  return maxCount;
}