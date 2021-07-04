"use strict";


$(document).ready(function(){
    function encode(pattern) {
        const iteratePattern = pattern.split("");
        var count = 1; //starts at one to account for the first instance of the letter
        var compressedPattern = "";

        for (var i = 0; i < pattern.length; i++) { //iterates through split string from 0
            var j = i + 1 //looks at next index from the increment (i) to compare, when it reaches the end of the split string it will compare against "undefined" and stop

            var build = count + iteratePattern[i]; //returns count of each group of letters as it iterates through the pattern to be appended to the compressedPattern

            if (iteratePattern[i] === iteratePattern[j]) {
                count++;

            } else {
                compressedPattern += build; //"builds" the compressed version of the pattern

                count = 1; //resets count if not matched, but only after appending the previous build
            }
        }
        console.log("input: " + pattern)
        console.log("output: " + compressedPattern);
        return compressedPattern;
    }

//encode("hhpnnnyhh")); //the function should not return 4h, but 2h on each end of the output (compressedPattern)
////error: nnn returns 1n2n3n, need it to just return 3n
////update: fixed, changed build to only append after the matches break, then reset count

    $("#submit").click(function () {
        $("#output").html(
            encode($("#input").val())
        )
    })

//    RANDOM PATTERN GENERATOR
    function generateRandom() {
        const alphabet = "abcdefghijklmnopqrstuvwxyz";

        const scopeSize = 3;
        const randomScopeStart = Math.floor(Math.random() * (alphabet.length - scopeSize)); //generates number between 13 and 13 representing the index number
        const randomScopeEnd = randomScopeStart + scopeSize;
        const scope = alphabet.slice(randomScopeStart, randomScopeEnd); //takes the random numbers to create a shortened version of alphabet

        const randomRepeat = Math.floor(Math.random() * 5) + 1 //randomly repeats between 1 to 5 times, 1h is as inefficient as 2h, why not include them both to show why run length encoders are deprecated

        var generatePattern = "";

        for (var i = 0; i < scopeSize; i++) {
            const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)] //generates random letter through random index number that is being passed
            const randomLetterInScope = scope[Math.floor(Math.random() * scope.length)] //generates random letter within the generated scope, raising the chances of repeating letters to be compressed

            for (let i = 0; i < randomRepeat; i++) {
                generatePattern += randomLetterInScope;
            }
        }
        console.log("random pattern: " + generatePattern);

        return generatePattern; //returns pattern to be received
    }

    $("#random").click(function () {
        $("#input").val(generateRandom())
    })
//error: can only click on the button once
//update: fixed, the loop is now in a function that is called on every time its clicked

    console.log("file connected")
});

