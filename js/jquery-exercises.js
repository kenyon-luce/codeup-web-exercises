console.log("js connected");

$(document).ready(function(){
    console.log("Fully loaded and ready to go")
    console.log("this code is still in ready function, goes last");
    alert("DOM has finished loading");
});
//^runs this code last after everything else

console.log("Hello, jQuery!");
