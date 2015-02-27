var fs = require('fs');

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        //do something here
        //console.log(answer_line);
        console.log(execute(line));
    }
});


function execute(line) {

  for(var i = 0; i < line.length; i += 1) {
    var actualResult = 0;
    var numberToCompare = i;
    var expectedResult = line[i];

    for(var j = 0; j < line.length; j += 1) {
      if(parseInt(line[j],10) === numberToCompare) {
        actualResult += 1; 
      }
    }

    if(parseInt(expectedResult, 10) !== actualResult) {
      return 0;
    }
  }

  return 1;
};