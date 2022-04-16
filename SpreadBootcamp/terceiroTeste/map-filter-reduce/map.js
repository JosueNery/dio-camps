const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapThis(arr, arg) {
    return arr.map(function (item) {
        return item * this.value;
    }, arg);
}

function mapSemThis(arr) {
    return arr.map(function (item) {
        return item * 2;
    });
}

const nums = [2, 4, 6, 8, 10];
console.log(nums);

console.log('Map usando this');
console.log('this -> maca', mapThis(nums, maca));

console.log('this -> laranja', mapThis(nums, laranja));

console.log('Map sem this');

console.log(mapSemThis(nums));
