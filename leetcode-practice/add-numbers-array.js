// https://leetcode.com/problems/add-two-numbers/
var n1 = [2, 1, 0]
var n2 = [3, 9, 5, 0]

var num1 = Number(n1.join(""));
var num2 = Number(n2.join(""));

var sum = num1 + num2;
console.log(num1 + " + " + num2 + " = " + sum);
console.log("")

//the sum needs to be a reversed array of numbers
var arr = ("" + sum).split("").reverse(); //need to iterate through this to parse each string
var sumArr = [];

for(var i = 0; i < arr.length; i++){
    sumArr.push(parseInt(arr[i]));
}

console.log("[" + n1 + "] plus [" + n2 + "] equals (reversed) [" + sumArr + "]");