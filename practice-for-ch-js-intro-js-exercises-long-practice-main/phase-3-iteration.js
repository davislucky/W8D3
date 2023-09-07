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

console.log([0,5,2,1].bubbleSort())


