var firstArray = [0,3,4,10],
    secondArray = [1,2];

var expectedResult = [0,1,2,3,4,10];

console.log(merge(firstArray, secondArray, []));

function merge(arrayOne, arrayTwo, result) {
  debugger;
  var currentValue,
      oneLen = arrayOne.length,
      twoLen = arrayTwo.length;

  if(oneLen === 0 && twoLen === 0) {
    return;
  }

  if(oneLen > 0 && twoLen === 0) {
    currentValue = arrayOne[0];
    result.push(currentValue);
    merge(arrayOne.slice(1), arrayTwo, result);
    return result;
  }

  if(oneLen === 0 && twoLen > 0) {
    currentValue = arrayTwo[0];
    result.push(currentValue);
    merge(arrayOne, arrayTwo.slice(1), result);
    return result;
  }

  if(arrayOne[0] < arrayTwo[0]) {
    currentValue = arrayOne[0];
    result.push(currentValue);
    merge(arrayOne.slice(1), arrayTwo, result);
    return result;
  }

  currentValue = arrayTwo[0];
  result.push(currentValue);
  merge(arrayOne, arrayTwo.slice(1), result);
  return result;
}