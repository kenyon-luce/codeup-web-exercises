"use strict";

(function() {
    /**
     * TODO:
     * Create a function called 'sayHello' that takes a parameter 'name'.
     * When called, the function should return a message that says hello to the passed in name.
     *
     * Example
     * > sayHello("codeup") // returns "Hello, codeup!"
     */
    function sayHello(name) {
        return "Hello " + name + ", nice to meet you!";
    }

    sayHello(name);


    /**
     * TODO:
     * Call the function 'sayHello' and pass your name as a string literal argument.
     * Store the result of the function call in a variable named 'helloMessage'.
     *
     * console.log 'helloMessage' to check your work
     */

    var helloMessage = sayHello("Kenyon");
    console.log(helloMessage);

    /**
     * TODO:
     * Store your name as a string in a variable named 'myName', and pass that
     * variable to the 'sayHello' function. You should see the same output in the
     * console.
     */
    var myName = "Kenyon";
    console.log(sayHello(myName));

//// Don't modify the following line, it generates a random number between 1 and 3
//// and stores it in a variable named random
    var random = Math.floor((Math.random() * 3) + 1);

    /**
     * TODO:
     * Create a function called 'isTwo' that takes a number as a parameter.
     * The function should return a boolean value based on whether or not the passed
     * number is the number 2.
     *
     * Example
     * > isTwo(1) // returns false
     * > isTwo(2) // returns true
     * > isTwo(3) // returns false
     *
     * Call the function 'isTwo' passing the variable 'random' as an argument.
     *
     * console.log *outside of the function* to check your work (you should see a
     * different result everytime you refresh the page if you are using the random
     * number)
     */
    function isTwo(x) {
        return x === 2;
    }

    console.log(isTwo(1));
    console.log(isTwo(2));
    console.log(isTwo(3));
//logged 3 numbers, if the number wasn't 2, it would return false.
//1 and 3 return false because they do not equal to 2

    function randomIsTwo(x) {
        var x = random;
        return x === 2
    }

    console.log(randomIsTwo());

//generated one random number (between 1 and 3) and returned true if the number generated was a 2

    /**
     * TODO:
     * Create a function named 'calculateTip' to calculate a tip on a bill at a
     * restaurant. The function should accept a tip percentage and the total of the
     * bill, and return the amount to tip
     *
     * Examples:
     * > calculateTip(0.20, 20) // returns 4
     * > calculateTip(0.25, 25.50) // returns 6.375
     * > calculateTip(0.15, 33.42) // returns 5.013
     */
    function calculateTip(x, y) {
        var tip = x * y
        return tip;
    }

    console.log(calculateTip(0.20, 20));
    console.log(calculateTip(0.25, 25.50));
    console.log(calculateTip(0.15, 33.42));
//if we define x and y, it will return their product

    /**
     * TODO:
     * Use prompt and alert in combination with your calculateTip function to
     * prompt the user for the bill total and a percentage they would like to tip,
     * then display the dollar amount they should tip
     */

    var x = parseInt(prompt("How much are you paying for your meal in total?"));
    var y = parseInt(prompt("How much percentage are you willing to leave as a tip (in decimal form)?"));
    var tipTotal = "$" + calculateTip(x, y);
    alert("You should leave a " + tipTotal + " tip!");


    /**
     * TODO:
     * Create a function named `applyDiscount`. This function should accept a price
     * (before a discount is applied), and a discount percentage (a number between 0
     * and 1). It should return the result of applying the discount to the original
     * price.
     *
     * Example:
     * > var originalPrice = 100;
     * > var dicountPercent = .2; // 20%
     * > applyDiscount(originalPrice, discountPercent) // 80
     *
     * > applyDiscount(45.99, 0.12) // 40.4712
     */
    function applyDiscount(x, y) {
        return x - calculateTip(x, y);
    }

    console.log(applyDiscount(45.99, 0.12));
}());
//everything within IIFE, hence my code wont be able to be manipulated through the console