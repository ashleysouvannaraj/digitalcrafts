console.log("page loaded!");

// var myPromise = new Promise(function(resolve, reject){
//     // This is where you write your (possibly asynchronous) code!
//     // You need to make sure to resolve or reject the promise here
//     console.log("I'm firing an arrow");
//     setTimeout(function(){
       
//         console.log('bullseye!');
//         resolve(50);


//     }, 3000); // this makes it so that it takes 3000 ms to run once page is loaded

// });

var myPromise = axios.get('https://dog.ceo/api/breed/beagle/images/random')

myPromise.then(function(result){
    console.log("The promise is resolved!");
    console.log("the result was " + result.data.message);

    return axios.get('https://dog.ceo/api/breed/beagle/images/random');

}).then(function(otherResult){
    console.log("The promise is resolved");
    console.log("the result was " + otherResult.data.message);
}).catch(function(error){
    console.log(error);
});

// myPromise.then(function(result){
//     console.log('this is the other promise resolved callback!')
// }).catch(function(error) {
//     console.log(error);
// });



  