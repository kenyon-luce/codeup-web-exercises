"use strict";
//to activate each function, just uncomment the function call at the end of them

//Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
function showMultiplicationTable(num) {
    var i = 1;
    while (i <= 10) {
        console.log(num + " * " + i + " = " + (num * i++));
    }
}
// showMultiplicationTable();

//Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.
function randomOddOrEven(num) {
    for (var i = 0; i < 10; i++) {
        var num = Math.floor(Math.random() * (200 - 20)) + 20;
        //subtracted 200 by 20, since it starts at 20, we need to make sure it doesn't include numbers 200 - 220
        if (num % 2 === 0) {
            console.log(num + " is even");
            continue;
        } else if (num % 2 !== 0) {
            console.log(num + " is odd");
            continue;
        }
    }
}
// randomOddOrEven();

//Create a for loop that uses console.log to create the output shown below.
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
function pyramid() {
    var num = "";
    for (var i = 1; i < 10; i++) {
        for (var j = 1; j <= i; j++) {
            num = num + i
        }
        console.log(num);
        var num = ""
    }
}
// pyramid();
//1st loop says to increment number from 1 to 9, the 2nd loop takes the i and repeats its own code the number of times i becomes. Every time i is incremented, j repeats its code once more. In this case it takes i and adds it into the empty num string, the last code re-declares the num variable to split each group of numbers into their distinctive "layer" instead of having them all jumbled together in one string each time the code executes

//Create a for loop that uses console.log to create the output shown below.
//100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5
function subtractFive() {
    for (var i = 100; i >= 5; i--) {
        if (i % 5 === 0) {
            console.log(i)
        }
    }
}
// subtractFive();
