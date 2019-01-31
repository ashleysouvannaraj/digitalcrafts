var fs = require('fs');

var contents = fs.readFileSync("../../ajax/ajax1/index.html");
var lines = contents.toString().split('\n').length - 1;
console.log(lines);