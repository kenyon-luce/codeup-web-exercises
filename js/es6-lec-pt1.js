"use strict";

/*****************************
 *    VAR VS. LET VS. CONST
 *****************************/

function checkWeather(isRaining) {
    if (isRaining) {
        var umbrella = "Get an umbrella"
    } else {
        var sunglasses = "Grab your glasses!"
        console.log(umbrella);
    }
}

checkWeather(false); //what happens?

//returns undefined


function checkWeatherTwo(isRaining) {
    if (isRaining) {
        const umbrella = "Get an umbrella"
    } else {
        const sunglasses = "Grab your glasses!"
        console.log(umbrella);
    }

}

// checkWeatherTwo(false) //What happens?

//returns error
//constant (const), unlike variable (var) has block-level scoping, so "umbrella" was not recognized when it was called on in the else statement

/*==============================================*/


// let instructor = 'Douglas';
// instructor = 'Kenneth';
// console.log(instructor); //Kenneth

//let works like const in having a block-level scope, except it can be reassigned like var


// const instructor = 'Douglas';
// console.log(instructor); // Douglas
// instructor = 'Kenneth';
// console.log(instructor); // Uncaught TypeError: Assignment to constant variable.

//the new instructor variable is in the same scope as the original, but since the original instructor variable is set to constant, it cannot be reassigned and it will return an error


/*==============================================*/


/*
* let and const (block scope vs. function scope)
*/

{
    var a = 10;
}
{
    let b = 20;
}

const c = 30;

console.log(a); // 10
// console.log(b); // Uncaught ReferenceError: b is not defined
// console.log(c += 3); //Uncaught TypeError: Assignment to constant variable.

//returns error for last 2 logs
//b cannot be called on because it is a let variable in its own block-scope
//c is in the same block-scope, but it cannot be changed because its a constant variable


/*==============================================*/


if (false) {
    var x = 2; //Undefined
}

//returns undefined because the variable is placed in an if-statement block, even though its a variable it will not be seen
//logging x in this case will just return its default value (undefined)

if (true) {
    let x = 2; //Uncaught ReferenceError: x is not defined
    console.log(x)
}
//let is technically a "global constant"
//first log logs the new x while the second log logs the default x
console.log(x);


/*****************************
 *    Template Strings
 *****************************/

//oldway
let firstName = "Douglas";
let lastName = "Hirsh";
let greeting = "Hello my name is " + firstName + ' ' + lastName + '.';

console.log(greeting);

//TODO: Refactor code from above, using template strings.
let newGreeting = `Hello, my name is ${firstName} ${lastName}.`
//used "backtick" (button below the escape key) instead of regular quotes, so now I can make the same string with less typing

console.log(newGreeting);

let aLetter = `Hi, 
This is a letter with multiple lines...
here is another line
and another one

    --Kenyon
`
console.log(aLetter)
//logs my string the exact way I type it
//to clarify, this doesn't just work with let variables, you can do this with any string variable as long as you use backticks instead of quotes

/*==============================================*/

//TODO: Create an HTML string that contains the following items in an unordered list

let items = ['apple', 'grape', 'orange'];


//old way
let itemsHtml = "";
itemsHtml += "<ul>";
itemsHtml += "<li>" + items[0] + "</li>"
itemsHtml += "<li>" + items[1] + "</li>"
itemsHtml += "<li>" + items[2] + "</li>"
itemsHtml += "</ul>";

console.log(itemsHtml);


//new way
let newItemsHtml = `
<ul>
    <li>${items[0]}</li>
    <li>${items[1]}</li>
    <li>${items[2]}</li>
</ul>
`

console.log(newItemsHtml);


/*==============================================*/

//TODO: Create a paragraph from the following program object

let program = {
    name: "Codeup",
    location: "Dallas and San Antonio",
    length: "22 weeks",
    technology: "HTML, CSS, JS, Java"
}

let programLetter = `
Name: ${program.name}
Location: ${program.location}
Length: ${program.length}
Technology: ${program.technology}
`

console.log(programLetter);


/*****************************
 *       For Of Loops
 *****************************/


const arr = ["one", "two", "three"];
for (let ele of arr) {
    console.log(ele);
}
//"of" sorta works like a for-each loop, but doesn't need a callback
console.log(arr)

/*==============================================*/
//TODO: Using for of loops, log each day

const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

for(let day of days){
    console.log(day);
}

/*==============================================*/

//TODO: Using for of loops, log each instructors name

const instructors = ["Douglas", "Kenneth", "Justin", "Casey", "David"]

for(let instructor of instructors){
    console.log(instructor);
}

/* ****************************
 *       Arrow Functions
 *****************************/

//TODO TOGETHER: Rewrite the following function using arrow function syntax


function sayHello(name) {
    return `Hello ${name}`;
}

let sayHelloAgain = (name) => {return `Hello, ${name}!`}

console.log(sayHelloAgain("Douglas")); //Hello Douglas
console.log(sayHelloAgain("Justin")); //Hello Justin
console.log(sayHelloAgain("Kenneth")); //Hello Kenneth


/*==============================================*/
//TODO TOGETHER: Rewrite the following function using arrow function syntax

// function sum(a,b){
// 	return a + b;
// }

let sum = (a,b) => a + b
//unlike the previous arrow function, we didnt include return, none of them need it really since we are just returning, but the first one shows what we need to do in case we want to do some other things first before returning

console.log(sum(5, 3)); //8
console.log(sum(5, 20)); //25
console.log(sum(1, 9)); //10

let sayHello2 = (name = "World") => `Hello, ${name}`
//name is "World" by default, if a new name is passed through it it will return the template string with the passed name. If the name is undefined, the name will default to "World"
console.log(sayHello2());
console.log(sayHello2("Kenyon"))

/*==============================================*/
//TODO: Rewrite the following function using arrow function syntax

//Function declaration
function addOne(arg1) {
    return arg1 + 1;
}


//function expression
let addOneA = function (arg1) {
    return arg1 + 1;
}


//refactor. Remove function keyword and add =>
let addOneB = (arg1) => {
    return arg1 + 1;
}

// remove curly braces (if only one statement)
let addOneC = (arg1) => arg1 + 1;

//remove parens if only 1 input
const addOneD = arg1 => arg1 + 1;


// console.log(addOne(1));
// console.log(addOneA(2));
// console.log(addOneB(2));
// console.log(addOneC(3));
// console.log(addOneD(5));


/* ****************************
 *       Default Function
 *       Parameter Values
 *****************************/
//TODO Together: Refactor the following using ES6

// old way
// function sayHello(name) {
// 	if (typeof name === 'undefined') {
// 		name = 'World';
// 	}
//
// 	return 'Hello, ' + name + '!';
// }


// console.log(sayHello2());; // "Hello, World!"
// console.log(sayHello2('codeup'));; // "Hello, codeup!"


/*==============================================*/

// TODO: Refactor the following function using arrow syntax, default function parameter values, and template strings.

function helloCohort(greeting, cohort) {
    if (typeof greeting === "undefined") {
        greeting = "Good Morning";
    }
    if (typeof cohort === "undefined") {
        cohort = "Marco";
    }

    return greeting + " " + cohort;
}
