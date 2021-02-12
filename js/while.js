"use strict";

//Create a while loop that uses console.log() to create the output shown below.
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536
// var number = 1;
// while(number < 17) {
//     console.log(2 ** number);
//     number++
//}
//loop that takes 2, increments its exponent by 1, and console logs each result 16 times

//An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is a way get the random numbers for this exercise.
//the code for drawing a random number between 1 and 50 should be Math.floor(Math.random() * 100 - 50) + 50; , the 50 added at the end is our "y-axis", so
//to avoid STARTING the count from 50, we need to subtract it from the 100 max cap that we set, when simplified it should be Math.floor(Math.random() * 50) + 50;
//code for generating random number between 1 - 5 should be Math.floor(Math.random() * 5) + 1;
//random number will be picked from a list starting from 1 to 5

var allCones = Math.floor(Math.random() * 50) + 50;
var randomOneToFive = Math.floor(Math.random() * 5) + 1;

var conesSold = allCones
do {
    console.log(conesSold + " cones sold");
    conesSold--
} while (conesSold < allCones);
//^^WIP dont run yet (infinite loop)
