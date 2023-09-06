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

Array.prototype.transpose = function() {
    let transposed = [];

    for (let i = 0; i < this.length; i++) {
        let subArr = this[i]
        let transpSub = []
        // console.log("subArr:",subArr)

        for (let j = 0; j < subArr.length; j++) {
            let ele = this[j][i];
            // console.log("ele:",ele)

            transpSub.push(ele)
        }

        transposed.push(transpSub)
    }

    return transposed
}

// console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose())

// i = row, j = col ij
// [[00, 01, 02]
// [10, 11, 12]
// [20, 21, 22]]

// ji
// [[00, 10, 20]
// [01, 11, 21]
// [02, 12, 22]]

