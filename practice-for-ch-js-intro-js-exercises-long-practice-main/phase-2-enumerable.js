Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    let ele = this[i];
    callback(ele);
  }
}



Array.prototype.myMap = function(callback) {
  let map = [];

  this.myEach( ele => map.push(callback(ele)) )

  return map
}

// const addTwo = (num) => num + 2;
// arr = [2, 5, 7];
// console.log(arr.myMap(addTwo))

Array.prototype.myReduce = function(callback, initialValue) {
  let acc = initialValue;

  this.myEach(function(ele) {   
    // if (initialValue === this[0]) {
    //   acc = callback(this[1], ele)
    // }
    // else {
      if (acc === undefined) {
        acc = ele;
      } else {
        acc = callback(acc, ele);
      }
     
    // }
  })
  return acc;
}

console.log([1, 2, 3].myReduce(function(acc, el) {
  return acc + el;
}));

console.log([1, 2, 3].myReduce(function(acc, el) {
  return acc + el;
}, 25));



