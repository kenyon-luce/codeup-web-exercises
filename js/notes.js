"use strict";

//SCOPES

// var globalVar = "Look, I'm global!"
//     //declare global variable
//
// function scopeExample(){
//     globalVar = "Look, I'm global! (globalVar impostor!)"
//     //local variables take priority over global variables
//     var localVar = "Look, I'm local!";
//     alert(localVar);
//     alert(globalVar);
// }
// alert(globalVar);
// scopeExample();
//since we are calling the variable outside of the function, we are calling
//the original global variable

//found interesting result, if scopeExample is placed before alert(globalVar)
//the scope will leak into globalVar, recognizing globalVar as the local globalVar
//instead of the actual global localVar. Assuming because I called the function first

//IIFE: The first way to put code behind gateway
// var variable = "I'm out in the open, I hope nothing bad happens..."
//     console.log(variable);
//     (function(){
//         //JavaScript in here is protected!
//         var iifeVar = "I'm protected, no one can see me!"
//     })();
//     console.log(iifeVar);
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
// var userWantsToContinue = confirm("Would you like to continue?");
//
// if(userWantsToContinue) {
//     var usersDay = prompt("How is your day going?");
//     if (usersDay === "good") {
//         console.log("Good, I am glad you are having a good day!");
//     } else {
//         console.log("Sorry to hear, I hope your day goes better!");
//     }
// }
//is a variable with function characteristics, runs condition based on the first one

//LOOPS
//executes code repeatedly
//there are 3 types of loops, While, Do While, and For loops

//1. While Loop
// var i = 0; //initialization
// while (i < 10) { //condition
//     console.log("while loop iteration #" + i); //code (logs in console)
//     i++ //code (increment)
// }
//repeats code until i = 9

//2. Do While Loop
//same as While but condition is evaluated last
// var i = 0
// do {
//     console.log("do while loop iteration #" + i);
//     i++
// } while (i < 10);

//3. For Loop
// for (var i = 0; i < 10; i++) { //(initialization; condition; increment)
//     console.log("for loop iteration #" + i); //code
// }

//Here is another example just for fun
var areWeThereYet;
while(!areWeThereYet) { //"!" says keep executing the code as long as you keep getting "false"
    areWeThereYet = confirm("Are we there yet?"); // alert expects ok ("true") or cancel ("false") from user
}
//This code is a while loop that will keep asking "are we there yet" until we say yes
alert("Finally, we are here!");
//this code executes after the above loop is completed

//Break and Continue
//break
// var numberToStopAt = 5;
// for (var i = 1; i < 10; i++) { //for loop
//     console.log("loop counter is: " + i);
//     if (i === numberToStopAt) {
//         console.log("we are at stopping point: break!");
//         break; //break = return (seen this before in switch cases)
//         //code below won't execute
//     }
// }
//continue - instead of break type continue
var numberToStopAt = 5;
for (var i = 1; i < 10; i++) { //for loop
    console.log("loop counter is: " + i);
    if (i === numberToStopAt) {
        console.log("This is the number 5: continue!");
        continue; //loop may continue after exiting
        //code below won't execute
        //also, you can skip numbers by not putting any code
    }
}
//the above code counts numbers from 1 - 9, for break, it stops at 5,
//while for continue, it executes the code, then continues to count the rest of the numbers past 5