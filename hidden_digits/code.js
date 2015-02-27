var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        //do something here
        //console.log(answer_line);
        console.log(find_hidden(line));
    }
});

function find_hidden(line) {
  var numbers = {
    'a': 0,
    'b': 1,
    'c': 2,
    'd': 3,
    'e': 4,
    'f': 5,
    'g': 6,
    'h': 7,
    'i': 8,
    'j': 9
  };

  var array = [];

  for(var i = 0; i < line.length; i += 1) {
    var character = line[i];
    if(numbers[character] > -1) {
      array.push(numbers[line[i]]);
    }

    if (!isNaN(parseInt(character, 10))) {
      array.push(character);
    }
  }

  var result = array.join('');
  if (result.length === 0) {
    return 'NONE';
  }

  return result;

}