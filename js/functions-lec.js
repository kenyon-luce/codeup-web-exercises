// function noParameter(){
//     //tell our function what to do
//     return alert("Hello there Marco!");
// }
//
// noParameter();
//
// function parameter(name, name2){
//     //tell our function what to do
//     return alert("Hello there, " + name + " and " + name2 + "!");
// }
// var name = "Kenyon";
// var name2 = "Aiden";
// parameter(name, name2);
// //created function, and then called on it to work
//
// function increment(num){
//     return num + 1;
// }
// var four = increment(increment(increment(1)));
// //takes the starting parameter (num = 1) and increments 3 times
// //not effective, but it just shows that functions can be layered
// console.log(four);

//Anonymous Function: when passed into parent function (also called callback function)
var honkHorn = function(){
    return "beep beep";
}
//the parameter is already named through the variable, so the function keyword
//can be left empty, making it an anonymous function
console.log(honkHorn);