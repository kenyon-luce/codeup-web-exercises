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
var totalPay = "$" + (400 * google) + (350 * facebook) + (380 * amazon);
alert("You have earned " + totalPay + " this week!");

//A student can be enrolled in a class only if the class is not full
//and the class schedule does NOT conflict with her current schedule.

var classSize = prompt("How many students are in the class you are enrolling for?");
var classNotFull = classSize < 25;
var classSchedule = confirm("Please click ok if you already have a class at 1:30pm");
//we DO NOT want the student to have a class at 1:30 already, because it would conflict
//with the class he/she is enrolling for, so if they do currently have a class at 1:30pm,
//we want the boolean value of false instead of true, hence the exclamation mark
alert("Can be enrolled? " + (classNotFull && !classSchedule));

//A product offer can be applied only if
//a person buys more than 2 items, and the offer has not expired.
//Premium members do not need to buy a specific amount of products.

var notExpired = confirm("Please click ok if the offer is still valid");
var premiumMember = confirm("Please click ok if you are a Premium member");
var items = prompt("How many items have you bought?");
var moreThan2 = parseInt(items) >= 2;
//as long as the offer is not expired (still valid), the offer can be applied for
//Premium members OR people who bought more than 2 items
alert("Can apply offer? " + (notExpired && (premiumMember || moreThan2)));







