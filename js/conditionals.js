"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color) {
    if (color === "blue") {
        console.log("blue is the color of the sky");
    } else if (color === "red") {
        console.log("Strawberries are red");
    } else if (color === "violet") {
        console.log("Violet? you mean purple right?");
    } else if (color === "orange") {
        console.log("Oranges are orange");
    } else if (color === "yellow") {
        console.log("yellow is a very bright orange");
    } else if (color === "green") {
        console.log("grass is green");
    } else {
        console.log(color + "? I've never heard of that color...");
    }
}

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColor(color) {
    switch (color) {
        case "blue" :
            console.log("blue");
            return "blue is the color of the sky";
        case "red" :
            console.log("red");
            return "strawberries are red";
        case "violet" :
            console.log("violet");
            return "violet? you mean purple right?";
        case "purple" :
            console.log("purple");
            return "purple is my favorite color!";
        case "orange" :
            console.log("orange");
            return "carrots are orange";
        case "yellow" :
            console.log("yellow");
            return "yellow is a very bright orange";
        case "green" :
            console.log("green");
            return "grass is green";
            default :
                console.log(color);
                return color + "? I've never heard of that color...";
    }
}
//^^^makes code more readable
//made it log my input response in console

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

alert(analyzeColor(prompt("Give me a color")));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
//var luckyNumber = Math.floor(Math.random() * 6);
function calculateTotal(luckyNum, price) {
    var luckyNum = Math.floor(Math.random() * 6);
    var price = parseInt(prompt("How much was your bill total?"));
    var originalPrice = parseInt(price);
    if (luckyNum === 1) {
        var price =  price - (price * .10)
        console.log("10% discount, not bad!");
    } else if (luckyNum === 2) {
        var price = price - (price * .25)
        console.log("25% discount, great!");
    } else if (luckyNum === 3) {
        var price = price - (price * .35)
        console.log("35% discount, nice!");
    } else if (luckyNum === 4) {
        var price = price - (price * .50)
        console.log("50% discount, awesome!");
    } else if (luckyNum === 5) {
        var price = 0;
        console.log("You won a 100% discount, congrats!!");
    } else {
        var price = price
        console.log("no discount, better luck next time!");
    }
    alert("Your lucky number was " + luckyNum);

    alert("The original price was $" + originalPrice + ", now it is $" + price);
    return "$" + price;
}
console.log(calculateTotal());
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

function whatNumber(number) {
    var response = confirm("Would you like to enter a number?");
    if (response === true) {
        //don't need to set response equal to true, it should default to true on its own
        var number = parseInt(prompt("What number?"));
        if (!isNaN(number)) {
            if (number % 2 === 0) {
                alert("This is an Even number");
            } else {
                alert("This is an Odd number");
            }
            alert("This number plus 100 is " + (number + 100));
            if (number > 0) {
                alert("This is a Positive number");
            } else {
                alert("This is a Negative number");
            }
        } else {
            alert("This is not a number!");
        }
    } else {
        alert("No number? No problem!");
    }
}
whatNumber();
//apparently you can have if-else statements WITHIN other if-else statements

