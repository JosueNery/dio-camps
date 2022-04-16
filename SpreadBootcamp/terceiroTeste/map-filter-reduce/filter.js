function filtraPar(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const nums = [1, 23, 55, 67, 30, 2, 4, 15, 16];

console.log(filtraPar(nums));