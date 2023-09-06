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

const addTwo = (num) => num + 2;
arr = [2, 5, 7];
console.log(arr.myMap(addTwo))
