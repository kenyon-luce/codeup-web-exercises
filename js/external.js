"use strict";
console.log("Hello from external JavaScript!");
alert("Welcome to my Website!");

var favColor = prompt( "What is your favorite color?");
alert("Great, " + favColor + " is my favorite color too!");


//You have rented some movies for your kids:
// If price for a movie per day is $3, how much will you have to pay?

var lm = parseInt(prompt("How many days did you rent The Little Mermaid?"));
var bb = parseInt(prompt("How many days did you rent Brother Bear?"));
var herc = parseInt(prompt("How many days did you rent Hercules?"));
//prompt responses are recognized as strings by default, parseInt() takes the string
//and turns it into a number so that it doesn't concatenate
var totalRent = 3 * (lm + bb + herc);
alert("Total cost is $" + totalRent);

//You're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour.
//Google pays $400, Amazon $380, and Facebook $350.
//How much will you receive in payment for this week?

var google = parseInt(prompt("How many hours did you work at Google this week?"));
var facebook = parseInt(prompt("How many hours did you work at Facebook this week?"));
var amazon = parseInt(prompt("How many hours did you work at Amazon this week?"));
var totalPay = (400 * google) + (350 * facebook) + (380 * amazon);
alert("You have earned $" + totalPay + " this week!");

//A student can be enrolled in a class only if the class is not full
//and the class schedule does not conflict with her current schedule.

var classFull = confirm("Please click ok if your class is not full");
var classSchedule = confirm("Please click ok if the class schedule does not conflict with your current schedule");
alert("Can be enrolled? " + (classFull && classSchedule));

//A product offer can be applied only if
//a person buys more than 2 items, and the offer has not expired.
//Premium members do not need to buy a specific amount of products.

var notExpired = confirm("Please click ok if the offer has not expired");
var premiumMember = confirm("Please click ok if you are a Premium member");
var moreThan2 = confirm("Please click ok if you have bought more than 2 items");
alert("Can apply offer? " + (notExpired && (premiumMember || moreThan2)));







