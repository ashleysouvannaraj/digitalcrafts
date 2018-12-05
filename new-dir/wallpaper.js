const wallpaper = require('wallpaper');
const axios = require('axios');
const download = require('download-file');

var dogUrl;

axios.get("https://dog.ceo/api/breeds/image/random").then(function(response) {
    dogUrl = response.data.message;

    var options = {
        directory: "imgs/",
        filename: "random-dog.png"
    }

    download(dogUrl, options, function(err){
        
    wallpaper.set("imgs/random-dog.png");
}) 
}).catch();
