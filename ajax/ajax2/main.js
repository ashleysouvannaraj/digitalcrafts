function doggoButton(){
    var genDoggoButton = document.getElementById("genDoggo"); genDoggoButton.innerHTML = "Generating Doggo....";
    axios.get('https://dog.ceo/api/breeds/image/random').then(function(response) {

        document.getElementById('container').innerHTML =  `
        <img src= "${response.data.message}" />`
        genDoggoButton.innerHTML = "Generate Doggo";
    }); 
};

var dogContainer = document.getElementById('dogContainer');
var select = document.getElementById('breeds');

breedList();

function breedList(){
    axios.get('https://dog.ceo/api/breeds/list').then(function(response){
         response.data.message;
        breeds.forEach(function(breed){
            select.innerHTML += `<option value = "${breed}">${breed}</option>`
        });
    });
}

select.addEventListener('change', function(){
    var breed = this.value;
})
