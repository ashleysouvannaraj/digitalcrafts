var fs = require('fs');
var file = '../ex4/program.js';

fs.readFile(file, function(err, contents) {
    if (err) {
        console.log(err)
    }
    var lines = contents.toString().split('\n').length - 1;
    console.log(lines);
});