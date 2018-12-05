const lodash = require('lodash');

const myArray = [1, 1, 2, 3, 4, 4, 5, 5, 5, 7, 8, 9, 9, 9];
const shuffled = lodash.shuffle(myArray);
const mean = lodash.mean(myArray);
const unique = lodash.sortedUniq(myArray);

console.log(shuffled);
console.log(mean);
console.log(unique);