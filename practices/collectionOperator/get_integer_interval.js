'use strict';

function get_integer_interval(number_a, number_b) {
  var interval = number_b - number_a;
  var interval_len = Math.abs(interval);
  interval = interval >= 0 ? 1 : -1 

  var newArr = [];
  for(var i = 0; i < interval_len+1; i++){
  	newArr.push(number_a+interval*i);
  }
  return newArr;
}


