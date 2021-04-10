// attributes and css things to cover:

//introductory vocab: getters && setters, method chaining
//.html() - GET the HTML contents or SET the HTML contents

//TODO: Let's get the HTML from the element with the ID of "best-seller-cont"
console.log($("#best-seller-cont").html()); //get the html of this id

//TODO together: Let's set up a string with HTML to replace this old list with our updated best sellers - FEDORAS have moved into the number one spot!
var html = '';
html = "<h4 class=\"best-seller-header\">Our Top Sellers</h4>" +
    "<ol><li>Fedora Hats</li>" +
    "<li>Baseball Hats</li>" +
    "<li>Cowboy Hats</li></ol>"
//^tag inside string, so the attribute property has to have backslash so that it is recognized within the string

//TODO: Now, let's get back into that "best-seller-cont" and replace that HTML!
$('#best-seller-cont').html(html); //SETTING the new HTML

//TODO Together: Can we make a click event that changes "Howell's" to "Marco's" when we click on it? Help me out!


//.css() - get info about a property or change a property

//TODO: Let's see what the width of our "main-content" class is with .css()
console.log($(".main-content").css("width")); //getting some information (one argument)

//TODO Together: Can you help me? I'd like to set my modal's text to have a cool color :)
$(".model-body").css("color", "red") //setting CSS (two arguments)

//TODO: Let's make an object for us to use with .css(). .
var warningRed = {"background-color":"red", "font-size":"72px"}

//TODO Together: Nice - now, let's test this out by targeting our h1 with this warning background! Next, let's chain a font color after it
$("h1").css(warningRed).css("color", "cornflowerblue");

//.addClass() ~ .removeClass() ~ .toggleClass()

//TODO: We've used a lot of bootstrap on the page - let's see what we can use .addClass to do in combination with bootstrap. Let's UPPERCASE that h1 with the shiny red background!
$('h1').addClass("text-uppercase");

//TODO Together: Can you assist me in removing the "bg-dark" background from our FOOTER?
$("footer").removeClass("bg-dark")

//TODO: I have a custom css class known as hi-lite - .toggleClass() with a .click() would be a neat way to use it
$('*').click(function(e){
    e.preventDefault();
    // alert("Clicked?");
    var ele = $(e.target);
    ele.toggleClass("hi-lite");
})

//Bonus activity:

//TODO: Create a variable to store HTML - use jQuery to get the entire nav element's inner HTML. Console.log your variable to confirm the contents.

//TODO: Remove the class of bg-dark and navbar-dark from the <nav> with jQuery.

//TODO: Add the class of navbar-light and bg-info from the <nav> with jQuery.

//TODO: Finally, create the following - add your own button somewhere on the navbar. Add an event that will toggle the navbar between bg-dark/navbar-dark and bg-info/navbar-light respectively

//TODO: Create your own object with multiple CSS properties you'd like to change. Change whatever element(s) you had in mind with your CSS object and .css()!



//traversing

//.each() - iterate over each matched element to do some stuff
//TODO: Let's change the last two lis of the class .hat-sold to "Baseball hats" as well
$(".hat-sold").each(function(index, ele) {
    if(index !== 0){
        $(ele).html("Fedora Hats"); //set html to value
    }
})

//.first()
//TODO: Let's change the first list item in the class of .hat-sold from "Baseball hats" to "Porkpie hats"
$(".hat-sold").parent().css("list items");

//.last()
//TODO Together: Let's change the last li in the class of .hat-sold to be Fancy hats - italicized! ! !


//.parent()
//TODO: Let's pop up the tree to the parent (<ol>) and use .css to change the list-style-type
$(".hat-sold").parent().css("list-items-type");

//.children()
//TODO Together: What ID would I need to target to see all of the HTML, as children, that we've been manipulating so far?
console.log(("#best-seller-cont").children());

//.next()
//TODO: Let's slide across branches (sibling to sibling) on our tree and change the HTML within the ordered list we find there to only show Top Hats! !