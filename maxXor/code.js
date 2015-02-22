function maxXor(l, r) {
  var maxResult = -1,
      result = 0;
  for(var i = l; i <= r; i += 1) {
    for(var j = i; j <= r; j += 1) {
      var tempResult = i ^ j;
      if (tempResult > maxResult) {
        result = tempResult;
        maxResult = result;
      }
    }
  }

  return result;
}

console.log(maxXor(10, 15));