(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,


        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            var area = Math.PI * (circle.radius ** 2);
            //TODO: return the proper value
            return area;
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            var area = this.getArea()
            if(doRounding === true) {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.floor(area));
            } else {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + Number(area));
            }
        }
    };
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();