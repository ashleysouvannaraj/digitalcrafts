
// OBJECTS

var myString = "foo"
var myObject = {

    foo: "bar", //MUST separate with comma
    biz: 4+4,
    'hey-there': "hi", 
    "hey-there": "hi",
    heyThere: myString, // value = "foo"
    otherObject: {
        otherFoo: "OtherBar",
        hi: {
            suh: "dude"
        }

    }
}
    // objects cannot start with numbers but numbers can be in the middle
    // ex: hey5there
    // can redefine variable IN object but cannot create new variable.
    
myObject.otherObject.otherFoo // chaining






var blogPost = {
    title: "Nails",
    text: "How to do nails",
    comments: [ // an array
        {
            username: "mark",
            comment: "blog okay"
        },
        {
            username: "ashley",
            comment: "jfhajf"
        }
    ]
};

console.log(blogPost.title) 
console.log{blogPost.comments[0]} // if you want to log a specific array






// when not to use a (.)
var randomStudentToCheck = "jordan";

var classRoom = {
    jordan: 0,
    olivia: 0,
    marryMac: 0
}

classRoom.nick = 0; // adding entry to "dictionary" ... or
classRoom["nick"] = 1;

function addStudentToClassRoom(studentName) {
    classRoom[studentName] = 0
}


console.log(classRoom.randomStudentToCheck) // Wrong. Not inside of the object classRoom. Separate Object
console.log(classRoom[randomStudentToCheck]) // Correct.


var countriesFastestTimes = {
    "usa": = 9999,
    "poland": = 9999,
    "canada": = 9999
}

var runnerTimes = [
    {
        country: "usa",
        time: 300
    },
    {
        country: "usa",
        time: 197
    },
]

// Each key can only be used once! 



// ARRAYS

var array = ["foo", "bar", "biz"] // seaparate by commas

var array = [ // another way of writing arrays
    "foo",
    "bar",
    "biz",
    0,
    4+4.
    ["X","X","X"],
    {foo: "bar"}
]

array[6].foo // will point to that last entry you want


// ARRAY FUNCTIONS
var array = ["foo", "biz"]

array.push("baz") // inserts baz into array
array.pop(); // ["foo", "biz"]


// NUMBER OPERATORS

4 + 4
4 - 4
4 * 4
4 / 0

4 % 4 == 0 // modulo/remainder operator(%) 
5 % 4 == 1 // can use to detect if number is even or odd
1 % 2 == 1 // odd
2 % 2 == 0 // even

4 ++ // shortcut to + 1 
var count = 0;

count ++; // implied = sign. shortcut to +=

console.log(count)  // logs 1

// count + 1; ----- logs 0
// count = count + 1 ----- logs 1 


// STRINGS

var foo = "bar"

console.log(foo + "biz") // logs barbiz
console.log(foo + 0) // logs bar0
console.log(foo.length) // logs length of object (3)

var foo = "Hello, World!"
console.log(foo.indexOf("World")) // will log 7 . shows where "world" starts



//BOOLEAN OPERATORS (true or false)
 
var boolean = true
var otherBoolean = false

shirtisblack && pantsareblue; 
// for && statement to be true, both sides need to be true
// true && true == true
// true && false == false
// false && true == false
// false && false == false

shirtisblack || pantsareblue; // means or

// boolean = !boolean; //! = not. will flip

true && (false || true) // true

a && (b || c) // morgan's law
// can be turned into ...
(a && b) || (a && c)

!(a || b)
!a && !b

varStudentsInClass = 15;

studentsInClass == 15 // going to return true or flase

if (studentsInClass == 15) {
    // do something
} else {
    // do something else
}  

// one = is an assignment value. == is to compare


// IF STATEMENT
var count = 10

if ( count < 10 ) {
    console.log('true')


// WHILE LOOPS 
// repeats same code over & over til false

var count = 0;

while ( count < 10 ) {
    console.log('hi')
    count++;
}

// do while loop

do {

} while (count < 10) 



// FOR LOOPS 

for ( /*do this at beginning*/ ; /*condition*/ ; /*do this at the end of each loop*/ ) {
    console.log('hi')
}

for ( var count = 1 ; count < 10 ; count += 2) {
    console.log(i); // logs 2, 4, 6 ,8
}


var classRoom = ['olivia', 'jordan', 'alex']

for (var i = 0; i < classRoom.length; i++) {
    console.log(classRoom[i])
}




// FUNCTIONS
// can have as many inputs as you want

function myFunc(param1, param2) {
    //add two numbers
    var sum = param1 + param2
    return sum; // stops function here. won't run anything else after return.
}

var result = myFunc(0, 3) 