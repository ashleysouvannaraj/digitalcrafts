
var myString = "foo"
var myObject = {

    foo: "bar", //must separate with comma
    biz: 4+4,
    'hey-there': "hi", 
    "hey-there": "hi",
    heyThere: myString = 4 // value = "foo"

    // objects cannot start with numbers but numbers can be in the middle
    // ex: hey5there
    // can redefine variable IN object but cannot create new variable.
}