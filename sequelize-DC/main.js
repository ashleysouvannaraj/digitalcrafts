const express = require('express');
const app = express();

const models = require('./models');

app.set('view engine', 'ejs');
app.set('views', 'app/views');

// app.get('/', function(req, res) {
//     models.user.findAll()
//   .then(results => {
//     results.forEach(function(index){
//     console.log(index.id, index.firstName);
//     });
//   });
// });

// models.user.create({firstName:'Ashley', lastName: 'Souvannaraj', email: 'souvannaraj@yahoo.com'})
// .then(function(user){
//     console.log(user);
// });

models.user.findAll({where: {lastName: 'Fisher'}})
  .then((results) => {
    results.forEach(function(index){
            console.log(index.id, index.firstName);
        })
  });

  // Full table
models.user.findAll()
.then((results) => {
  var r = results[0];
  console.log(r.id, r.firstName);
});

// Where clause  
models.user.findAll({where: {firstName: 'Ashley'}})
.then((results) => {
  var r = results[0];
  console.log(r.id, r.firstName);
});

app.listen(3000);