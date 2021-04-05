// console.log("js connected");
//
// $(document).ready(function(){
//     console.log("Fully loaded and ready to go")
//     console.log("this code is still in ready function, goes last");
//     alert("DOM has finished loading");
// });
// //^runs this code last after everything else
//
// console.log("Hello, jQuery!");

//below is what we did as a team
(function() {
    $(document).ready(function() {
        alert($('#heading-1').html());
        var bestCharacter = $('#baller').html();
        alert(`this is by far the best character: ${bestCharacter}!`)
        $('#heading-1').css('background-color', 'yellow');
        $('#heading-1').css('color', 'rebeccapurple');
        $('#heading-1').css('text-align', 'center');
        $('#character-list').css('font-family', 'Orbitron');
        $('#loser').css('text-decoration', 'underline');
        $('#body').css('background-image', 'url(https://gray-wdbj-prod.cdn.arcpublishing.com/resizer/zHWV1QvKgK2FezH0pR5_zlwIhYM=/1200x675/smart/cloudfront-us-east-1.images.arcpublishing.com/gray/JCANUUGIONKE5KT7C6WG7WSCZM.jpg)');
        $('#body').css('color', 'yellow');
        $('#div').css('display', 'flex');
        $('#div').css('flex-flow', 'row wrap');
        $('#para-3, #para-2').css('margin', '5em');
    });
})()