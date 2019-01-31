const express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let count = 0;

// app.use('/public-counter', express.static('public-counter'));
app.use(express.static(__dirname + '/public-counter'));

app.get('/increment', function(req, res) {
    count ++; 
    //console.log(req.count);
    res.send(`Count: ${count}`);
});

app.get('/api/decrement', function(req, res) {
    count --; 
    console.log(req);
    res.send(`Count: ${count}`)
})

// app.get('/api/value', function(req, res, next) {
//     res.send(`${count}`)
// })

app.listen(3000);