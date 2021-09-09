const indexOf = function (array, target) {
  //array = [1], target = 1
  var result = -1;

  each(array, function (item, index) {
    //item = 1
    if (item === target && result === -1) {
      result = index;
      //result = 1
    }
  });

  return result;
};

const each = function (collection, iterator) {
  if (collection instanceof Array) {
    for (let i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else if (collection instanceof Object) {
    for (let prop in collection) {
      iterator(collection[prop], prop, collection);
    }
  }
};

const map = function (collection, iterator) {
  var result = [];

  each(collection, function (element, index, array) {
    result.push(iterator(element));
  });

  return result;
};

const filter = function (collection, callback) {
  let newArr = []
  for (let i = 0; i < collection.length; i++){
    if (callback(collection[i]) == true){
      newArr.push(collection[i])
    }
  }
  return newArr
};

//reject([1, 2, 3, 4, 5, 6], isEven);
const reject = function (collection, callbackTest) {
  let newArr = []
  for (let i = 0; i < collection.length; i++){
    if (callbackTest(collection[i]) != true){
      newArr.push(collection[i])
    }
  }
  return newArr
};

//use indexOf to solve this
const uniq = function (array) {
  let newArr = []
  let count = 0
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < newArr.length; j++){
      if (array[i] == newArr[j]){
        count += 1
      }
    }
    if (count == 0){
      newArr.push(array[i])
    } else {
      count = 0
    }
  }
  return newArr
};

const reduce = function (collection, iterator, accumulator) {
  let reducedNum = 0

  if (accumulator == undefined){
    for (let i = 1; i < collection.length; i++){
      reducedNum = iterator(reducedNum, collection[i]) 
    }
    reducedNum += collection[0]
  } else {
    for (let i = accumulator; i < collection.length; i++){
      reducedNum = iterator(reducedNum, collection[i])
    }
  }
  return reducedNum
};

module.exports = {
  filter,
  reject,
  uniq,
  reduce,
  map,
};
