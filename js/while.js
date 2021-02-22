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
//generating random number 50 - 100: Math.floor(Math.random() * 100 - 50) + 50; ,
//generate random number 1 - 5: Math.floor(Math.random() * 5) + 1;

var conesToSell = Math.floor(Math.random() * 50) + 50; //generates random amount of cones you start with
console.log(conesToSell + " to sell")
do{
    var conesBoughtPerClient = Math.floor(Math.random() * 5) + 1; //generates random amount each client buys
    if (conesToSell >= conesBoughtPerClient) { //if I have enough cones to sell to the client, THEN I subtract the cones bought and log whats left
        conesToSell = conesToSell - conesBoughtPerClient; //made a mistake of using --conesToSell, this will work like decrement only it will subtract by the number bought rather than just 1 each time
        console.log(conesBoughtPerClient + " sold, " + conesToSell + " left");
    } else {
        console.log("can't sell you " + conesBoughtPerClient + ", only have " + conesToSell + " left")
    } //if I dont have enough, I will say so and repeat the loop
}
while (conesToSell > 0); //loop will repeat until I've sold everything
console.log("Yay! I sold them all!"); //only executes when loop is finished
//this code uses whats called a "happy path", since we are looking for what we want (in the if) and then what we don't want (in the else)

//this code took a really long time for me despite how simple it was. now I know to simplify things and expand on them rather than tackling everything simultaneously. my mistakes started with the following
//1. tried to copy a previous exercise using i-- and logging i every time it was divisible by the random number (when logging it subtracted one more than I told it to, also why did I spend so much time trying to make this work lol)
//2. made separate conditions and used breaks for each one, ignoring that the while statement already worked as my break and was the only break needed in this case (stopped my loop from repeating and made things more complicated)
//3. had the decrement above the if statements so it ran even though I didn't have enough to sell (giving me negative numbers)
//4. wasn't really a mistake, but I originally set my conesToSell variable to i so I didn't have to keep re typing conesToSell, makes things easier to type but is more readable for myself and others if we know what the code is doing

