const plus = document.getElementById('increment');
const sub = document.getElementById('decrement');
const counter = document.getElementById('counter');

// axios.get('/api/count').then(functon(response) {
//     document.getElementById('counter').innerHTML = response.data;
// })

plus.addEventListener('click', function() {
    axios.get('/increment').then(function(response) {
        console.log(response);
        counter.innerHTML = response.data;
    }).catch((err) => 
    console.log(err));
});

sub.addEventListener('click', function() {
    axios.get('/api/decrement').then(function(response) {
        console.log(response);
        counter.innerHTML = response.data;
    }) .catch((err) =>
    console.log(err));
});