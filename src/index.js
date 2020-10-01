
exports.min = function min(array) {

  if(!Array.isArray(array) || array.length===0 || arguments.length === 0){
    return 0;
  }

  return array.reduce((item, min) => {
    if (item < min) {
      return item;
    }
    return min
  }, array[0]);
}

exports.max = function max(array) {

  if(!Array.isArray(array) || array.length===0 || arguments.length === 0){
    return 0;
  }

  return array.reduce((item, max) => {
    if (item > max) {
      return item;
    }
    return max
  }, array[0]);
}

exports.avg = function avg(array) {

  if(!Array.isArray(array) || array.length===0 || arguments.length === 0){
    return 0;
  }

  return array.reduce((item, sum) => sum += item, 0) / array.length;
}
