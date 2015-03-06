var fs  = require("fs");

var matrix = initBoard();
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
      //do something here
      //console.log(answer_line);
      processData(matrix, line);
  }
});


function processData(matrix, lineInput) {
  var array = lineInput.split(" "),
      command = array[0],
      argOne = array[1],
      argTwo = array[2];

  if(argOne !== null) {
    argOne = parseInt(argOne, 10);
  }

  if(argTwo !== null) {
    argTwo = parseInt(argTwo, 10);
  }

  if (command === 'SetCol') {
    setCol(matrix, argOne, argTwo);
  } else if(command === 'SetRow') {
    setRow(matrix, argOne, argTwo);
  } else if(command === 'QueryRow') {
    console.log(queryRow(matrix, argOne));
  } else if(command === 'QueryCol') {
    console.log(queryCol(matrix, argOne));
  }
}

function initBoard() {
  var col = 256,
      row = 256,
      matrix = [];

  for(var i = 0; i < col; i += 1) {
    matrix[i] = [];
    for(var j = 0; j < row; j += 1) {
      matrix[i][j] = 0;
    }
  }

  return matrix;
}

function setRow(matrix, i, j) {
  var row = matrix[i];
  for(var cell = 0; cell < row.length; cell += 1) {
    row[cell] = j;
  }
}

function setCol(matrix, j, x) {
  for(var col = 0; col < matrix[j].length; col += 1) {
    matrix[col][j] = x;
  }
}

function queryRow(matrix, i) {
  var result = 0,
      row = matrix[i];
  for(var cell = 0; cell < row.length; cell += 1) {
    result += row[cell];
  }
  return result;
}

function queryCol(matrix, j) {
  var result = 0;
  for(var col = 0; col < matrix[j].length; col += 1) {
    result += matrix[col][j];
  }
  return result;
}