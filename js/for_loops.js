"use strict";
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
        var num = Math.floor(Math.random() * 200) + 20
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
pyramid();
//1st loop says to increment number from one to 9, the 2nd loop tells the first loop to repeat its code as many times as i is incremented. The number is incremented, added to the num string, and repeated depending on each number. The numbers are logged, and the last code at the end is supposed to reassign the num variable to make sure each group of numbers end up being split into their respective rows instead of everything being jumbled in one string (im still somewhat confused but the idea is still settling in)







