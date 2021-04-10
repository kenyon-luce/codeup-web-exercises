"use strict";
console.log('js connected')
/**********************************************
 *            SETTING UP KEYS.JS
 *********************************************/
// TODO TOGETHER: Open .gitignore and add keys.js. Add keys.js file and import to mapbox html file. Your api keys are stored in keys.js and are added to the .gitignore so they are protected
//finished ezpz

/**********************************************
 *            CUSTOMIZING THE MAP
 *********************************************/
// Predefined map styles --> https://docs.mapbox.com/mapbox-gl-js/api/#map
// A map center can be set by passing in the latitude and longitude coordinates of a location as an array [LONGITUDE_VALUE, LATITUDE_VALUE]
// Zoom levels range from 0 up to 24, with 0 being a global view and 24 being the most detailed at street level (the max zoom level depends on the location).

//TODO: Set map to the San Antonio area using the coordinates [-98.4861, 29.4252]

mapboxgl.accessToken = mapboxToken; //from keys.js

var mapOptions = {
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.4861, 29.4252],
    zoom: 9 // starting zoom
}

// var map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/mapbox/streets-v11', // style URL
//     center: [-98.4861, 29.4252], // starting position [lng, lat]
//     zoom: 1
// });

// var map = new mapboxgl.Map(mapOptions);

//TODO: Experiment with different map styles, zoom levels, and centers. You will need to reference the MapBox docs! (10 mins~)

var marcoMap = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.4861, 29.4252], // starting position [lng, lat]
    zoom: 15
});
//map is more zoomed now
/**********************************************
 *                    MARKERS
 *********************************************/
// Marker Docs --> https://docs.mapbox.com/mapbox-gl-js/api/#marker
// Markers are specific locations on a map
//Use the .setLngLat() and .addTo() methods to add marker to the map


// TODO TOGETHER: Add a marker to the map using the following coordinates [-98.4861, 29.4260]. This marker will mark the Alamo on our map.

// var marker = new mapboxgl.Marker().setLngLat([-98.4861, 29.4260]).addTo(map)

// TODO TOGETHER: Change the color of the marker
var alamo = new mapboxgl.Marker({color: "rebeccapurple"})
    .setLngLat([-98.4861, 29.4260])
    .addTo(marcoMap)

// TODO: Make a new marker! Let's experiment with the color and setting the LngLat [how about a marker for Codeup San Antone? -98.4895, 29.4267 Codeup Dallas? -96.8056, 32.7786]
var codeupSA = new mapboxgl.Marker()
    .setLngLat([-98.4895, 29.4267])
    .addTo(marcoMap)

// TODO: Update the marker object to make the marker draggable. *Hint: reference the docs!
var draggable = new mapboxgl.Marker({color: 'cornflowerblue', draggable:true})
    .setLngLat([-98.4878, 29.42635])
    .addTo(marcoMap)
//like the name says, this marker can be dragged anywhere on the map

/**********************************************
 *                    POPUPS
 *********************************************/
// Popups are the info boxes that appear on a map and may describe a given location.
// Popup docs --> https://docs.mapbox.com/mapbox-gl-js/api/#popup


// TODO TOGETHER: Add a popup to the map over San Antonio's Codeup. Set the html as a paragraph that says "Codeup Rocks!"
var codeupSAPopup = new mapboxgl.Popup()
    .setLngLat([-90.4895, 29.4267])
    //^this centers the popup below the specified location, without this the popup will just be relative to the position of the marker being called on below
    .setHTML("<h6><em>Codeup Rocks!</em></h6>")
    .addTo(marcoMap)
codeupSA.setPopup(codeupSAPopup)

// TODO TOGETHER: We'll comment out the popup we just added. Next, let's add a popup to the Alamo marker!
var alamoPopup = new mapboxgl.Popup()
    .setHTML("<p>Remember the Alamo</p>")
    .addTo(marcoMap);
alamo.setPopup(alamoPopup)

// TODO: Review the popup docs. What are some additional options we can pass to the popup? Choose one and experiment with implementing that option to a popup!

// TODO: Try setting the text of a popup by using ".setText()" instead of ".setHTML()" - what happens with HTML tags between the two?



/**********************************************
 *                    Geocoder
 *********************************************/
// Geocoding Docs --> https://docs.mapbox.com/api/search/#geocoding
// TODO TOGETHER: Let's set up our mapbox-geocoder-utils.js!
//set up a separate js file (mapbox-geocoder.js)

// TODO TOGETHER: Using the Geocoder helper function, log the coordinates of Codeup and recenter the map to focus on Codeup.
//ex. function call: geocode("San Antonio", API_TOKEN_HERE).then(function                       (results) {
                        // do something with results
//                   })
//https://docs.mapbox.com/mapbox-gl-js/api/map/#map#setcenter

// geocode("600 Navarro St #600, San Antonio, TX 78205", mapboxToken).then(function(results){
//     console.log(results);
//     marcoMap.setCenter(results); //results rn are in an array of coordinates
// });

//TODO: Using the geocode method above, add a marker at Codeup to the map
// geocode("600 Navarro St #600, San Antonio, TX 78205", mapboxToken).then(function(results){
//
//     var popup = new mapboxgl.Popup()
//         .setHTML('<h6>Thanks Geocode</h6>')
//
//     new mapboxgl.Marker()
//         .setLngLat(results)
//         .setPopup(popup)
//         .addTo(marcoMap)
//
// });

//TODO: Instead of setCenter try using map.jumpTo()
// geocode("600 Navarro St #600, San Antonio, TX 78205", mapboxToken).then(function(results){
//
//     var popup = new mapboxgl.Popup()
//         .setHTML('<h6>Thanks Geocode</h6>')
//
//     new mapboxgl.Marker()
//         .setLngLat(results)
//         .setPopup(popup)
//         .addTo(marcoMap)
//
//     marcoMap.jumpTo({center: results})
//
// });

//TODO: Instead of setCenter try using map.flyTo()
// geocode("600 Navarro St #600, San Antonio, TX 78205", mapboxToken).then(function(results){
//
//     var popup = new mapboxgl.Popup()
//         .setHTML('<h6>Thanks Geocode</h6>')
//
//     new mapboxgl.Marker()
//         .setLngLat(results)
//         .setPopup(popup)
//         .addTo(marcoMap)
//
//     marcoMap.flyTo({center: results})
// //^much smoother transition than jumpTo()
// });

// TODO TOGETHER: Reverse Geocoding: Using the reverse geocoding method, enter the coordinates {lng: -98.4861, lat: 29.4260} to get a physical address for the Alamo
reverseGeocode({lng: -98.4861, lat: 29.4260}, mapboxToken).then(function(results){
    console.log(results);
})

// TODO: Reverse geocode coordinates of your choice using the reverse geocode method
reverseGeocode({lng: -96.8056, lat: 32.7786}, mapboxToken).then(function(results){
    console.log("Codeup Dallas: " + results);
})