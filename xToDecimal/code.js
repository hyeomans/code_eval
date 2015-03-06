var input = '9f';

console.log(hexToDecimal(input));
function()


function hexToDecimal(input) {
  var map = {
    'a': 10,
    'b': 11,
    'c': 12,
    'd': 13,
    'e': 14,
    'f': 15
  }
  var result = 0,
      array = input.split('');
  for(var ii = array.length - 1; ii >= 0; ii--) {
    console.log(map[array[ii]]);
    if(map[array[ii]]) {
      result += (map[array[ii]] * Math.pow(16, ii));
      continue;
    }
    result += parseInt(array[ii]) * Math.pow(16, ii);
  }
  return result;
}