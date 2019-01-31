const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/pets', function(req, res) {
    res.render('pets', {
        pageTitle: 'Animals',
        pageID: 'Home'
    });
});

app.get('')

app.set('view engine', 'ejs');

app.set('views', 'app/views');

app.listen(3000);

