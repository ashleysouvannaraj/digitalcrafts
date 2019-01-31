function doggoButton(){
    var genDoggoButton = document.getElementById("genDoggo"); genDoggoButton.innerHTML = "Generating Doggo....";
    axios.get('https://dog.ceo/api/breeds/image/random').then(function(response) {

        document.getElementById('container').innerHTML =  `
        <img src= "${response.data.message}" />`
        genDoggoButton.innerHTML = "Generate Doggo";
    }); 
}