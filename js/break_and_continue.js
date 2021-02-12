"use strict";

var number;
while (true) {
    number = Number(prompt("give me an odd number 1 - 50"));
    if(number % 2 !== 0 && (number >= 1 && number <= 50)) {
        alert("true");
        break;
    }
    alert("false");
}
//the while loop will run forever until you input a number that is odd and between 1 and 50. When a number fits the right conditions, it will break, and the prompt will stop nagging

console.log("Number to skip is: " + number);

for(var i = 1; i < 50; i++) {
    if (i === number) {
        console.log("Yikes! Skipping number: " + number);
        continue;
    } else if(i % 2 !== 0) {
        console.log("Here is an odd number: " + i);
    }
}
//The i variable will increment from 1 to 50, and console log every odd number. the if statement calls back the number variable we made before. If the i variable increments to the number that we input in the beginning prompt, it will add the string "Yikes! Skipping " to that number and then essentially continue incrementing as normal till it stops at 50





