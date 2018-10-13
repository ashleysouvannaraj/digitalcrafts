
function listNames() {

    var names= ["Lachlan", "Kim", "Moira"]

    for (var i = 0 ; i < names.length ; i++) { 
        console.log("Hi, " + names[i] + "!");
    }
}

listNames();


function biggie() {

    var posNums = [1, 5, 25, 3, 99, 20]

}



var numbers = [0, 1, 0, 1, 1, 1, 0, 0]

function lastIndexOfOne(arrayOfNumbers) {
    var indexOfLastOne;

    for(var i = 0 ; i < arrayOfNumbers.length ; i++) {

        var currentNumber = arrayOfNumbers[i];
        if (/*if the current number is(==) 1*/ currentNumber == 1) {
            indexOfLastOne = i 
        }
    }

    return indexOfLastOne;
}

console.log(lastIndexOfOne(numbers));



var object = {
    foo: "bar", // key
    biz: 1 // key
};


var oneThing = object.foo; 

// keys of each object has to be unique



// FINDING UNIQUE ITEMS

var array = [0, 0, 1, 1, 1, 2, 2, 3, 4, 4, 5]

for (var i = 0 ; i < array.length ; i++) {
    var currentNumber = array[i];

    object[currentNumber] = "blah" // runs code over & over 
}
var uniqueStuff = Object.keys(object);
// spits out the left side 

{
    "0": "blah"
    "1": "blah"
    "2": "blah"
    "3": "blah"
    "4": "blah"
    "5": "blah"
    "99": "blah"
}





var thing = "foo";

object.foo = "bar"; /* OR */ object["foo"] = "bar"; 

/* OR */ object[thing]= "bar";


// COUNTING UNIQUE ITEMS

var object = {}
var array = [0, 0, 1, 1, 1, 2, 2, 3, 4, 4, 5, 99]

for (var i = 0 ; i < array.length ; i++) {
    var currentNumber = array[i];

    if ( !object[currentNumber] ){ // if this is the first instance of this number 
        object[currentNumber] = 0
    }
    object[currentNumber]++;
}

var uniqueStuff = Object.keys(object);



var birthYears = [1991, 1984, 1984, 1989]


function commonBirthYear(birthYears); {

    for (var i = 0 ; i < birthYears.length ; i++ ) {
        var currentYear = birthYears[i];
        
        if ( !yearCount[currentYear]){
            // if we reach this line of code
            //that means this is the first time we've seen this currentYear
            // I can initialize its count to 0
            yearCount[currentYear] = 0;
        }

        yearCount[currentYear]++; //count this year incrementing
    }
    return yearCount;
}

commonBirthYear(birthYears);
console.log(commonBirthYear(birthYears));




function bestRaceTimes(times); {

    var times = [
        {
            country: "usa",
            time: 233 
        },
        {
            country: "usa",
            time: 200
        },
        {
            country: "poland",
            time: 278
        },
        {
            country: "poland",
            time: 222
        }
    ];

    var raceTimes = {}; // empty object (scratchpad)

    for ( var i = 0 ; i < times.length ; i++ ) {
        var currentTime = times[i];
        var currentCountrysRaceTime = raceTimes[currentTime.country]

        if (!raceTimes[currentTime.country]/*currentCountrysRaceTime*/){
            currentCountrysRaceTime = currentTime.time;
        } else if (/* this new time*/ currentTime.time /* is faster than*/ < raceTimes[currentTime.time /*what's already in raceTimes for this country*/) {
            raceTimes[currentTime.country] = currentTime.time;  
        }
    }
    return raceTimes;
}

console.log(bestRaceTimes(times));

// "usa": 200,
// "poland": 222




// find mutliples

if (i % 3 == 0) {

}



1       = 1
2       = 2
3       = 0
4       = 1
5       = 2
6       = 0