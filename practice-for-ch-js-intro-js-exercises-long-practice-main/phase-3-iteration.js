// Your code here

Array.prototype.bubbleSort = function() {
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < this.length - 1; i++) {
            if (this[i] > this[i+1]) {
                let temp = this[i+1];
                this[i+1] = this[i];
                this[i] = temp
                sorted = false;
            }
        }
    }
    return this;
}

// console.log([0,5,2,1].bubbleSort())

String.prototype.substrings = function() {
  let subArrs = [];

  for (let i = 0; i < this.length; i++){
    for(let j = i + 1; j < this.length + 1; j++){
      subArrs.push(this.slice(i, j))
    }
  }

  return subArrs;
}

// console.log("help".substrings())

function range(start, end) {
  if (end < start) return [];
  if (end === start) return [start];

  [start].push(range(start + 1, end))
}

console.log(range(0,0))
console.log(range(1,5))


