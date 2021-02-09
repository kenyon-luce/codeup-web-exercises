"use strict";

//SCOPES

var globalVar = "Look, I'm global!"
    //declare global variable

function scopeExample(){
    globalVar = "Look, I'm global! (globalVar impostor!)"
    //local variables take priority over global variables
    var localVar = "Look, I'm local!";
    alert(localVar);
    alert(globalVar);
}
alert(globalVar);
scopeExample();
//since we are calling the variable outside of the function, we are calling
//the original global variable

//found interesting result, if scopeExample is placed before alert(globalVar)
//the scope will leak into globalVar, recognizing globalVar as the local globalVar
//instead of the actual global localVar. Assuming because I called the function first

//IIFE: The first way to put code behind gateway
var variable = "I'm out in the open, I hope nothing bad happens..."
    console.log(variable);
    (function(){
        //JavaScript in here is protected!
        var iifeVar = "I'm protected, no one can see me!"
    })();
    console.log(iifeVar);
//should return error, since the variable is locked in an iife,
//the JavaScript console cannot see it

//IF / ELSE STATEMENTS

// function myName(name) {
//     myName = prompt("What is your name?");
//     name = myName;
//     return name
// }
// if(name === "Kenyon") {
//     console.log("What a coincidence, that's my dog's name!");
// } else if(myName === "Joe") {
//     myName("Who?");
// } else {
//     alert("Nice to meet you " + name + "!")
// }

//NESTING STATEMENTS
var userWantsToContinue = confirm("Would you like to continue?");

if(userWantsToContinue) {
    var usersDay = prompt("How is your day going?");
    if (usersDay === "good") {
        console.log("Good, I am glad you are having a good day!");
    } else {
        console.log("Sorry to hear, I hope your day goes better!");
    }
}
//is a variable with function characteristics, runs condition based on the first one