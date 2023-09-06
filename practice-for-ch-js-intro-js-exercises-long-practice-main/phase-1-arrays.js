Array.prototype.uniq = function() {
    let obj = {};

    for (let i = 0; i < this.length; i++) {
        obj[this[i]] = true;
    }
    return Object.keys(obj);
}

// console.log([1,2,2,3,3,3].uniq())

Array.prototype.twoSum = function() {
    let twoSums = {};
    let pairs = [];

    for (let i = 0; i < this.length; i++) {
        let ele = this[i];
        let complement = twoSums[-ele]
        // console.log("current num:", ele)
        // console.log("complement", complement)

        if (complement !== undefined) {
            pairs.push([complement, i]);
        }
        twoSums[ele] = i;
    }
    return pairs
}

// console.log([-1, 0, 2, -2, 1].twoSum())

