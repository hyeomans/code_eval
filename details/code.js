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
      prevCount = 0;

  for(var i = 0; i < lines.length; i += 1) {
    pointCount = 0;

    var cells = lines[i].split('');

    for(var j = 0; j < cells.length; j += 1) {
      if (cells[j] === '.') {
        pointCount += 1;
      };

      if()

      prevCount = pointCount;
    }

    if(prevCount === 0) {
      break;
    }
  }

  return pointCount;
}