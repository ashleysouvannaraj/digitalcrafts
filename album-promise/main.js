const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const readline = require('readline');
let promise = require('bluebird');

const initOptions = {
    promiseLib: promise,
};

const pgp = require('pg-promise')(initOptions);

const config = {
    host: 'localhost',
    port: 5432,
    database: 'music_db',
    user: 'postgres'
};

const database = pgp(config);

// database.query('SELECT * FROM albums').then (function(results) {
//     console.log(results);
// });

// const id = 1;
// const album_name = 'Freudian';
// const release_date = 082517;
// const query = `INSERT INTO albums("id", "album_name", "release_date") \ VALUES('${id}', '${album_name}', '${release_date}')`;

// database.result(query).then(function(result) {
//     console.log(result);
// });

const albumName = '';
const release_date = '';

const colName = "album_name";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Album name? ', (albumName) => {
    // TODO: Log the answer in a database
    const query = `INSERT INTO albums (${colName}) \
    VALUES ($1)`;
    
    database.result(query, albumName).then(function(albumName) {
        rl.close();
        console.log(albumName);
        // console.log(`Album name: ${albumName}`);
    });

  });