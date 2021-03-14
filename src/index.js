
exports.min = function min (array) {
  if(Array.isArray(array) == false || array.length <= 0) {
    return 0;
  } else {
    return array.reduce(function (p, v) {
      return ( p < v ? p : v );
    });
  }
}

exports.max = function max (array) {
  if(Array.isArray(array) == false || array.length <= 0) {
    return 0;
  } else {
    return array.reduce(function (p, v) {
      return ( p > v ? p : v );
    });
  }
}

exports.avg = function avg (array) {
  if(Array.isArray(array) == false || array.length <= 0) {
    return 0;
  } else {
    var total = 0;
      for(var i = 0; i < array.length; i++) {
      total += array[i];
    }
    var arrAvg = total / array.length;
    return arrAvg;
  }
}
